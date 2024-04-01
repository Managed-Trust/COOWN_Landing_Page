import Time "mo:base/Time";
import Principal "mo:base/Principal";
import Int "mo:base/Int";
import Nat "mo:base/Nat";
import Text "mo:base/Text";

actor class LockupContractChild(ownerDeployer : Principal) = this {
  // Bind the optional `this` argument (any name will do)
  stable var lockedUntil : Int = 0;
  stable var tokens : Nat = 0;
  stable var owner : Principal = ownerDeployer;

  public shared (msg) func lockup(period : Int) : async Int {
    if (Time.now() >= lockedUntil and msg.caller == owner) {
      lockedUntil := (Time.now() + (period * 8640000000));
      // 86,400,000,000,000
    };
    return lockedUntil;
  };
  public shared (msg) func getCaller() : async Principal {
    return msg.caller;
  };
  public func getDeposit() : async Nat {
    let cowsay = actor ("ryjl3-tyaaa-aaaaa-aaaba-cai") : actor {
      icrc1_balance_of : (Account) -> async Nat;
    };
    let datastore = await cowsay.icrc1_balance_of({
      owner = Principal.fromActor(this);
      subaccount = null;
    });
    return datastore;
  };
  public func getLockUp() : async Int {
    return lockedUntil;
  };
  public func getOwner() : async Principal {
    return owner;
  };
  public shared (msg) func setOwner(newOwner : Principal) : async Text {
    if (msg.caller == owner) {
      owner := newOwner;
      return "Success";
    } else {
      return "Unauthorized";
    };
  };
  //===============================================================
  public type Subaccount = Blob;
  public type Tokens = Nat;
  public type Memo = Blob;
  public type Timestamp = Nat64;
  public type Duration = Nat64;
  public type TxIndex = Nat;
  public type Account = { owner : Principal; subaccount : ?Subaccount };
  public type Result<T, E> = { #Ok : T; #Err : E };

  type Account__1 = {
    owner : Principal;
    subaccount : Blob;
  };

  type TransferType = {
    from_subaccount : ?Subaccount;
    to : Account;
    amount : Tokens;
    fee : ?Tokens;
    memo : ?Memo;
    created_at_time : ?Timestamp;
  };
  public type CommonError = {
    #InsufficientFunds : { balance : Tokens };
    #BadFee : { expected_fee : Tokens };
    #TemporarilyUnavailable;
    #GenericError : { error_code : Nat; message : Text };
  };

  public type DeduplicationError = {
    #TooOld;
    #Duplicate : { duplicate_of : TxIndex };
    #CreatedInFuture : { ledger_time : Timestamp };
  };

  public type TransferError = DeduplicationError or CommonError or {
    #BadBurn : { min_burn_amount : Tokens };
  };

  public shared (msg) func claim() : async Nat {
    if (Time.now() >= lockedUntil and msg.caller == owner) {

      let cowsay1 = actor ("ryjl3-tyaaa-aaaaa-aaaba-cai") : actor {
        icrc1_balance_of : (Account) -> async Nat;
      };
      let datastore = await cowsay1.icrc1_balance_of({
        owner = Principal.fromActor(this);
        subaccount = null;
      });
      // let datastoreUpdate = if(datastore >= 10000)
      // {
      //   let st = datastore -10000;
      //   return st;
      // };

      let datastoreUpdate = datastore - 10000;
      let cowsay = actor ("ryjl3-tyaaa-aaaaa-aaaba-cai") : actor {
        icrc1_transfer : (TransferType) -> async Result<TxIndex, TransferError>;
      };
      let newOwner1 = owner;
      let mydata : TransferType = {
        to = {
          owner = newOwner1;
          subaccount = null;
        };
        amount = datastoreUpdate;
        fee = ?10000;
        memo = null;
        from_subaccount = null;
        created_at_time = null;
      };
      let datastore1 = await cowsay.icrc1_transfer(mydata);

      return 1;
    } else {
      return 0;
    };
  };

  //=====================================================================//

  public query func getCanisterID() : async Principal {
    return Principal.fromActor(this);
  };
  var startTime : Int = 0; // Start time of the contract
  let cliffDuration : Int = 6 * 30 * 24 * 60 * 60 * 1_000_000_000; // 6 months in nanoseconds
  let vestingDuration : Int = 6 * 30 * 24 * 60 * 60 * 1_000_000_000; // Additional 6 months in nanoseconds

  public func startVesting() : async Int {
    startTime := Time.now();
    return startTime;
  };

  public func claim2(caller : Principal, amount1 : Nat) : async Int {
    let now = Time.now();
    switch (startTime) {
      case (startTime) {
        if (caller == owner and now >= startTime + cliffDuration) {
          // Calculate the portion of tokens that should be available based on linear vesting
          let timeSinceCliffEnd = now - (startTime + cliffDuration);
          let totalVestingTime : Int = if (timeSinceCliffEnd < vestingDuration) {
            return timeSinceCliffEnd;
          } else {
            return vestingDuration;
          };
          // (timeSinceCliffEnd, vestingDuration);
          let monthlyRelease = tokens / 6; // Total tokens divided by number of months in vesting period
          let monthsVested = totalVestingTime / (30 * 24 * 60 * 60 * 1000000000); // Total vested months
          let vestedAmount = monthlyRelease * monthsVested;
          let claimableAmount = if (timeSinceCliffEnd < vestingDuration) {
            return vestedAmount;
          } else {
            return tokens;
          };
          tokens := tokens - claimableAmount;
          return claimableAmount;
        } else {
          // Not yet eligible for claiming tokens
          return 0;
        };
      };
      case (0) {
        // Vesting not started
        return 0;
      };
    };
  };

};
