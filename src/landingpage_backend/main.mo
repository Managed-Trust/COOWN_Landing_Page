import Time "mo:base/Time";
import Principal "mo:base/Principal";
import Int "mo:base/Int";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import child "./child";
import Cycles "mo:base/ExperimentalCycles";

actor class LockupContract(ownerDeployer : Principal) = this {
  // Bind the optional this argument (any name will do)
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
 
   public shared (msg) func mint(principalId : Principal) : async Principal {

    // if (msg.caller == Principal.fromText("2vxsx-fae")) {
      let owner : Principal = msg.caller;
      // Debug.print(debug_show (msg.caller));
      // console.l60_000_631_070
      Cycles.add(200_000_000_000); // Since this value increases as time passes, change this value according to error in console.
      let childContract = await child.LockupContractChild(principalId);
      let childContractPrincipal = await childContract.getCanisterID();
      return childContractPrincipal;
    // };
    return msg.caller;
   };

};