// import Debug "mo:base/Debug";
// import Text "mo:base/Text";
// import Bool "mo:base/Bool";
// import Map "mo:base/HashMap";
// import Error "mo:base/Error";
// import List "mo:base/List";
// import Iter "mo:base/Iter";
// import HashMap "mo:base/HashMap";
// import Principal "mo:base/Principal";
// import Option "mo:base/Option";
// import Time "mo:base/Time";
// import Array "mo:base/Array";
// import Int "mo:base/Int";
// import Buffer "mo:base/Buffer";
// import Nat64 "mo:base/Nat64";
// import Nat "mo:base/Nat";
// import Blob "mo:base/Blob";

// actor {
//   public type Subaccount = Blob;
//   public type Tokens = Nat;
//   public type Memo = Blob;
//   public type Timestamp = Nat64;
//   public type Duration = Nat64;
//   public type TxIndex = Nat;
//   public type Account = { owner : Principal; subaccount : ?Subaccount };
//   public type Result<T, E> = { #Ok : T; #Err : E };

//   type Account__1 = {
//     owner : Principal;
//     subaccount : Blob;
//   };

//   type TransferType = {
//     from_subaccount : ?Subaccount;
//     to : Account;
//     amount : Tokens;
//     fee : ?Tokens;
//     memo : ?Memo;
//     created_at_time : ?Timestamp;
//   };
//   public type CommonError = {
//     #InsufficientFunds : { balance : Tokens };
//     #BadFee : { expected_fee : Tokens };
//     #TemporarilyUnavailable;
//     #GenericError : { error_code : Nat; message : Text };
//   };

//   public type DeduplicationError = {
//     #TooOld;
//     #Duplicate : { duplicate_of : TxIndex };
//     #CreatedInFuture : { ledger_time : Timestamp };
//   };

//   public type TransferError = DeduplicationError or CommonError or {
//     #BadBurn : { min_burn_amount : Tokens };
//   };

//   public func main() : async Text {
//     let cowsay = actor ("hbjjz-kaaaa-aaaan-qiocq-cai") : actor {
//       icrc1_name : () -> async Text;
//     };
//     return await cowsay.icrc1_name();

//   };
//   public func mainBalance(id : Account__1) : async Nat {
//     let cowsay = actor ("hbjjz-kaaaa-aaaan-qiocq-cai") : actor {
//       icrc1_balance_of : (Account__1) -> async Nat;
//     };
//     return await cowsay.icrc1_balance_of(id);

//   };
//   public shared (msg) func refund() : async Text {
//     let cowsay = actor ("hbjjz-kaaaa-aaaan-qiocq-cai") : actor {
//       icrc1_transfer : (TransferType) -> async Result<TxIndex, TransferError>;
//     };
//     // methodcall
//     if ("Success" == "Success") {
//       let mydata : TransferType = {
//         to = {
//           owner = msg.caller;
//           subaccount = null;
//         };
//         amount = 1000;
//         fee = ?10;
//         memo = null;
//         from_subaccount = null;
//         created_at_time = null;
//       };
//       let datastore = await cowsay.icrc1_transfer(mydata);

//       let mydata2 : TransferType = {
//         to = {
//           owner = Principal.fromText("z475q-x2ruu-zzb75-k54s6-l4ccl-7n2nr-kj4aa-vtxin-col4e-xevj4-5ae");
//           subaccount = null;
//         };
//         amount = 1000;
//         fee = ?10;
//         memo = null;
//         from_subaccount = null;
//         created_at_time = null;
//       };
//       let datastore2 = await cowsay.icrc1_transfer(mydata);
//       return "success";
//     } else {
//       return "Request Failed";
//     };
//     // let mydata : TransferType = {
//     //   to = {
//     //     owner = Principal.fromText("z475q-x2ruu-zzb75-k54s6-l4ccl-7n2nr-kj4aa-vtxin-col4e-xevj4-5ae");
//     //     subaccount = null;
//     //   };
//     //   amount = 10;
//     //   fee = ?10;
//     //   memo = null;
//     //   from_subaccount = null;
//     //   created_at_time = null;
//     // };
//     // let datastore = await cowsay.icrc1_transfer(mydata);

//     // Debug.print(debug_show (datastore));
//   };
// };

// import Debug "mo:base/Debug";
// import Text "mo:base/Text";
// import Bool "mo:base/Bool";
// import Map "mo:base/HashMap";
// import Error "mo:base/Error";
// import List "mo:base/List";
// import Iter "mo:base/Iter";
// import HashMap "mo:base/HashMap";
// import Principal "mo:base/Principal";
// import Option "mo:base/Option";
// import Time "mo:base/Time";
// import Array "mo:base/Array";
// import Int "mo:base/Int";
// import Buffer "mo:base/Buffer";

// actor university {
//   private stable var mapEntries : [(Text, University)] = [];
//   var map = Map.HashMap<Text, University>(0, Text.equal, Text.hash);
//   type University = {
//     officialName : Text;
//     gpaScaleType : Text;
//     studentName : Text;
//     studentID : Text;
//     major : Text;
//     studentStatus : Text;
//     termStatus : Text;
//     courseNo : Text;
//     crH : Text;
//     points : Text;
//     termPoints : Text;
//     termAHRS : Text;
//     termGPAHRS : Text;
//     termGPA : Text;
//     nationalID : Text;
//     college : Text;
//     degree : Text;
//     academicYearTime : Text;
//     termMajor : Text;
//     courseName : Text;
//     grade : Text;
//     cumulativeHRS : Text;
//     cumulativeEHRS : Text;
//     cumulativeGPAHRS : Text;
//     cumulativePoints : Text;
//     cumulativeGPA : Text;
//   };

//   public func CreateUniversityInstance(
//     officialName : Text,
//     gpaScaleType : Text,
//     studentName : Text,
//     studentID : Text,
//     major : Text,
//     studentStatus : Text,
//     termStatus : Text,
//     courseNo : Text,
//     crH : Text,
//     points : Text,
//     termPoints : Text,
//     termAHRS : Text,
//     termGPAHRS : Text,
//     termGPA : Text,
//     nationalID : Text,
//     college : Text,
//     degree : Text,
//     academicYearTime : Text,
//     termMajor : Text,
//     courseName : Text,
//     grade : Text,
//     cumulativeHRS : Text,
//     cumulativeEHRS : Text,
//     cumulativeGPAHRS : Text,
//     cumulativePoints : Text,
//     cumulativeGPA : Text,
//   ) : async Text {

//     let uniData : University = {
//       officialName = officialName;
//       gpaScaleType = gpaScaleType;
//       studentName = studentName;
//       studentID = studentID;
//       major = major;
//       studentStatus = studentStatus;
//       termStatus = termStatus;
//       courseNo = courseNo;
//       crH = crH;
//       points = points;
//       termPoints = termPoints;
//       termAHRS = termAHRS;
//       termGPAHRS = termGPAHRS;
//       termGPA = termGPA;
//       nationalID = nationalID;
//       college = college;
//       degree = degree;
//       academicYearTime = academicYearTime;
//       termMajor = termMajor;
//       courseName = courseName;
//       grade = grade;
//       cumulativeHRS = cumulativeHRS;
//       cumulativeEHRS = cumulativeEHRS;
//       cumulativeGPAHRS = cumulativeGPAHRS;
//       cumulativePoints = cumulativePoints;
//       cumulativeGPA = cumulativeGPA;
//     };
//     map.put(studentID, uniData);
//     return "Success"

//   };
//   public query func QueryUniversity(id : Text) : async ?University {
//     map.get(id);
//   };

//   system func preupgrade() {
//     mapEntries := Iter.toArray(map.entries());

//   };
//   system func postupgrade() {
//     map := HashMap.fromIter<Text, University>(mapEntries.vals(), 1, Text.equal, Text.hash)

//   };

// };

// import Debug "mo:base/Debug";
// import Text "mo:base/Text";
// import Bool "mo:base/Bool";
// import Map "mo:base/HashMap";
// import Error "mo:base/Error";
// import List "mo:base/List";
// import Iter "mo:base/Iter";
// import HashMap "mo:base/HashMap";
// import Principal "mo:base/Principal";
// import Option "mo:base/Option";
// import Time "mo:base/Time";
// import Array "mo:base/Array";
// import Int "mo:base/Int";
// import Buffer "mo:base/Buffer";

// actor university {
//   private stable var mapEntries : [(Text, University)] = [];
//   var map = Map.HashMap<Text, University>(0, Text.equal, Text.hash);
//   type University = {
//     studentName : Text;
//     studentID : Text;
//     major : Text;
//     studentStatus : Text;
//     nationalID : Text;
//     college : Text;
//     term: List.List<List.List<Text>>;
//   };

//   public func CreateUniversityInstance(
//     studentName : Text,
//     studentID : Text,
//     major : Text,
//     studentStatus : Text,
//     nationalID : Text,
//     college : Text,
//     term: List.List<List.List<Text>>,
//   ) : async Text {

//     let uniData : University = {
//       studentName = studentName;
//       studentID = studentID;
//       major = major;
//       studentStatus = studentStatus;
//       nationalID = nationalID;
//       college = college;
//       term = term;
//     };
//     map.put(studentID, uniData);
//     return "Success"

//   };
//   public query func QueryUniversity(id : Text) : async ?University {
//     map.get(id);
//   };

//   system func preupgrade() {
//     mapEntries := Iter.toArray(map.entries());

//   };
//   system func postupgrade() {
//     map := HashMap.fromIter<Text, University>(mapEntries.vals(), 1, Text.equal, Text.hash)

//   };

// };

// import Debug "mo:base/Debug";
// import Text "mo:base/Text";
// import Bool "mo:base/Bool";
// import Map "mo:base/HashMap";
// import Error "mo:base/Error";
// import List "mo:base/List";
// import Iter "mo:base/Iter";
// import HashMap "mo:base/HashMap";
// import Principal "mo:base/Principal";
// import Option "mo:base/Option";
// import Time "mo:base/Time";
// import Array "mo:base/Array";
// import Int "mo:base/Int";
// import Buffer "mo:base/Buffer";

// actor university {
//   private stable var mapEntries : [(Text, University)] = [];
//   var map = Map.HashMap<Text, University>(0, Text.equal, Text.hash);

//   type Course = {
//     course_cod: Text;
//     course_credit: Int;
//     course_id: Int;
//     course_name: Text;
//     letter_grade: Text;
//     points: Int;
//     term_id: Int;
//   };

//   type Term = {
//     term_id: Int; // Assuming you have a term ID field
//     term_description: Text;
//     student_id: Int;
//     status: Text;
//     semester_points: Int;
//     semester_gpa_hour: Int;
//     semester_gpa: Int;
//     semester_earned_hours: Int;
//     semester_attempted_hours: Int;
//     program: Text;
//     cumulative_points: Int;
//     cumulative_gpa_hours: Int;
//     cumulative_gpa: Int;
//     cumulative_earned_hours: Int;
//     cumulative_attempted_hours: Int;
//     courses: List.List<Course>;
//   };
//   type University = {
//     studentName : Text;
//     studentID : Text;
//     major : Text;
//     studentStatus : Text;
//     nationalID : Text;
//     college : Text;
//     term: List.List<Term>;
//   };

//   public func CreateUniversityInstance(
//     studentName : Text,
//     studentID : Text,
//     major : Text,
//     studentStatus : Text,
//     nationalID : Text,
//     college : Text,
//     term: List.List<Term>,
//   ) : async Text {

//     let uniData : University = {
//       studentName = studentName;
//       studentID = studentID;
//       major = major;
//       studentStatus = studentStatus;
//       nationalID = nationalID;
//       college = college;
//       term = term;
//     };
//     map.put(studentID, uniData);
//     return "Success"

//   };
//   public query func QueryUniversity(id : Text) : async ?University {
//     map.get(id);
//   };

//   system func preupgrade() {
//     mapEntries := Iter.toArray(map.entries());

//   };
//   system func postupgrade() {
//     map := HashMap.fromIter<Text, University>(mapEntries.vals(), 1, Text.equal, Text.hash)

//   };

// };

// import Debug "mo:base/Debug";
// import Text "mo:base/Text";
// import Bool "mo:base/Bool";
// import Map "mo:base/HashMap";
// import Error "mo:base/Error";
// import List "mo:base/List";
// import Iter "mo:base/Iter";
// import HashMap "mo:base/HashMap";
// import Principal "mo:base/Principal";
// import Option "mo:base/Option";
// import Time "mo:base/Time";
// import Array "mo:base/Array";
// import Int "mo:base/Int";
// import Buffer "mo:base/Buffer";
// import Nat "mo:base/Nat";

// actor university {
//   private stable var mapEntries : [(Text, University)] = [];
//   var map = Map.HashMap<Text, University>(0, Text.equal, Text.hash);

//   type Course = {
//     course_cod: Text;
//     course_credit: Nat;
//     course_id: Nat;
//     course_name: Text;
//     created_at:Text;
//     letter_grade: Text;
//     points: Nat;
//     term_id: Nat;
//     updated_at:Text;
//   };

//   type Term = {
//     courses: [Course];
//     created_at: Text;
//     cumulative_attempted_hours: Nat;
//     cumulative_earned_hours: Nat;
//     cumulative_gpa: Nat;
//     cumulative_gpa_hours: Nat;
//     cumulative_points: Nat;
//     program: Text;
//     semester_attempted_hours: Nat;
//     semester_earned_hours: Nat;
//     semester_gpa: Nat;
//     semester_gpa_hour: Nat;
//     semester_points: Nat;
//     status: Nat;
//     student_id: Nat;
//     term_description: Text;
//     term_id: Nat; // Assuming you have a term ID field'
//     updated_at: Text;
//   };
//   type University = {
//     studentName : Text;
//     studentID : Nat;
//     major : Text;
//     studentStatus : Nat;
//     nationalID : Text;
//     college : Text;
//     term: [Term];
//   };

//   public func CreateUniversityInstance(
//     studentName : Text,
//     studentID1 : Nat,
//     major : Text,
//     studentStatus : Nat,
//     nationalID : Text,
//     college : Text,
//     term: [Term],
//   ) : async Text {

//     let uniData : University = {
//       studentName = studentName;
//       studentID = studentID1;
//       major = major;
//       studentStatus = studentStatus;
//       nationalID = nationalID;
//       college = college;
//       term = term;
//     };
//     map.put(nationalID, uniData);
//     return "Success"

//   };
//   public query func QueryUniversity(id : Text) : async ?University {
//     map.get(id);
//   };

//   system func preupgrade() {
//     mapEntries := Iter.toArray(map.entries());

//   };
//   system func postupgrade() {
//     map := HashMap.fromIter<Text, University>(mapEntries.vals(), 1, Text.equal, Text.hash)

//   };

// };s

// import Debug "mo:base/Debug";
// import Text "mo:base/Text";
// import Bool "mo:base/Bool";
// import Map "mo:base/HashMap";
// import Error "mo:base/Error";
// import List "mo:base/List";
// import Iter "mo:base/Iter";
// import HashMap "mo:base/HashMap";
// import Principal "mo:base/Principal";
// import Option "mo:base/Option";
// import Time "mo:base/Time";
// import Array "mo:base/Array";
// import Int "mo:base/Int";
// import Buffer "mo:base/Buffer";
// import Nat "mo:base/Nat";

// actor university {
//   private stable var mapEntries : [(Text, University)] = [];
//   var map = Map.HashMap<Text, University>(0, Text.equal, Text.hash);

//   type Course = {
//     course_cod : Text;
//     course_credit : Nat;
//     course_id : Nat;
//     course_name : Text;
//     created_at : Text;
//     letter_grade : Text;
//     points : Nat;
//     term_id : Nat;
//     updated_at : Text;
//   };

//   type Term = {
//     courses : [Course];
//     created_at : Text;
//     cumulative_attempted_hours : Nat;
//     cumulative_earned_hours : Nat;
//     cumulative_gpa : Nat;
//     cumulative_gpa_hours : Nat;
//     cumulative_points : Nat;
//     program : Text;
//     semester_attempted_hours : Nat;
//     semester_earned_hours : Nat;
//     semester_gpa : Nat;
//     semester_gpa_hour : Nat;
//     semester_points : Nat;
//     status : Nat;
//     student_id : Nat;
//     term_description : Text;
//     term_id : Nat; // Assuming you have a term ID field'
//     updated_at : Text;
//   };
//   type University = {
//     mergedID : Text;
//     studentName : Text;
//     studentID : Nat;
//     major : Text;
//     studentStatus : Nat;
//     nationalID : Text;
//     college : Text;
//     gpaScale : Text;
//     term : [Term];
//   };

//   public func CreateUniversityInstance(
//     mergedID : Text,
//     studentName : Text,
//     studentID1 : Nat,
//     major : Text,
//     studentStatus : Nat,
//     nationalID : Text,
//     college : Text,
//     gpaScale : Text,
//     term : [Term],
//   ) : async Text {

//     let uniData : University = {
//       mergedID = mergedID;
//       studentName = studentName;
//       studentID = studentID1;
//       major = major;
//       studentStatus = studentStatus;
//       nationalID = nationalID;
//       college = college;
//       gpaScale = gpaScale;
//       term = term;
//     };
//     if (map.get(mergedID) == null) {
//       map.put(mergedID, uniData);
//       return "Success";
//     } else {
//       return "Faild: Data Already Exits";
//     };

//   };
//   public query func QueryUniversity(id : Text) : async ?University {
//     map.get(id);
//   };

//   system func preupgrade() {
//     mapEntries := Iter.toArray(map.entries());

//   };
//   system func postupgrade() {
//     map := HashMap.fromIter<Text, University>(mapEntries.vals(), 1, Text.equal, Text.hash)

//   };

// };

// import Debug "mo:base/Debug";
// import Text "mo:base/Text";
// import Bool "mo:base/Bool";
// import Map "mo:base/HashMap";
// import Error "mo:base/Error";
// import List "mo:base/List";
// import Iter "mo:base/Iter";
// import HashMap "mo:base/HashMap";
// import Principal "mo:base/Principal";
// import Option "mo:base/Option";
// import Time "mo:base/Time";
// import Array "mo:base/Array";
// import Int "mo:base/Int";
// import Buffer "mo:base/Buffer";
// import Nat "mo:base/Nat";

// actor university {
//   private stable var mapEntries : [(Text, University)] = [];
//   var map = Map.HashMap<Text, University>(0, Text.equal, Text.hash);

//   private stable var userEntries : [(Text, Student)] = [];
//   var user = Map.HashMap<Text, Student>(0, Text.equal, Text.hash);

//   type Student = {
//     nationalID : Text;
//     password : Text;
//     uniqueID : Text;
//   };

//   public func CreateStudentData(
//     nationalID : Text,
//     password : Text,
//     uniqueID : Text,
//   ) : async Text {

//     let studentData : Student = {
//       nationalID = nationalID;
//       password = password;
//       uniqueID = uniqueID;
//     };
//     if (user.get(nationalID) == null) {
//       user.put(nationalID, studentData);
//       return "Success";
//     } else {
//       return "Faild: Data Already Exits";
//     };

//   };

//   type Course = {
//     course_cod : Text;
//     course_credit : Nat;
//     course_id : Nat;
//     course_name : Text;
//     created_at : Text;
//     letter_grade : Text;
//     points : Nat;
//     term_id : Nat;
//     updated_at : Text;
//   };

//   type Term = {
//     courses : [Course];
//     created_at : Text;
//     cumulative_attempted_hours : Nat;
//     cumulative_earned_hours : Nat;
//     cumulative_gpa : Nat;
//     cumulative_gpa_hours : Nat;
//     cumulative_points : Nat;
//     program : Text;
//     semester_attempted_hours : Nat;
//     semester_earned_hours : Nat;
//     semester_gpa : Nat;
//     semester_gpa_hour : Nat;
//     semester_points : Nat;
//     status : Nat;
//     student_id : Nat;
//     term_description : Text;
//     term_id : Nat; // Assuming you have a term ID field'
//     updated_at : Text;
//   };
//   type University = {
//     mergedID : Text;
//     studentName : Text;
//     studentID : Nat;
//     major : Text;
//     studentStatus : Nat;
//     nationalID : Text;
//     college : Text;
//     gpaScale : Text;
//     transcriptID: Text;
//     term : [Term];
//   };

//   public func CreateUniversityInstance(
//     mergedID : Text,
//     studentName : Text,
//     studentID1 : Nat,
//     major : Text,
//     studentStatus : Nat,
//     nationalID : Text,
//     college : Text,
//     gpaScale : Text,
//     transcriptID: Text,
//     term : [Term],
//   ) : async Text {

//     let uniData : University = {
//       mergedID = mergedID;
//       studentName = studentName;
//       studentID = studentID1;
//       major = major;
//       studentStatus = studentStatus;
//       nationalID = nationalID;
//       college = college;
//       gpaScale = gpaScale;
//       transcriptID = transcriptID;
//       term = term;
//     };
//     if (map.get(mergedID) == null) {
//       map.put(mergedID, uniData);
//       return "Success";
//     } else {
//       return "Faild: Data Already Exits";
//     };

//   };
//   public query func QueryUniversity(id : Text) : async ?University {
//     map.get(id);
//   };

//   public query func QueryStudent(password : Text) : async ?Student {
//     user.get(password);
//   };

//   system func preupgrade() {
//     mapEntries := Iter.toArray(map.entries());
//     userEntries := Iter.toArray(user.entries());
//   };
//   system func postupgrade() {
//     map := HashMap.fromIter<Text, University>(mapEntries.vals(), 1, Text.equal, Text.hash);
//     user := HashMap.fromIter<Text, Student>(userEntries.vals(), 1, Text.equal, Text.hash);
//   };

// };

// import Debug "mo:base/Debug";
// import Text "mo:base/Text";
// import Bool "mo:base/Bool";
// import Map "mo:base/HashMap";
// import Error "mo:base/Error";
// import List "mo:base/List";
// import Iter "mo:base/Iter";
// import HashMap "mo:base/HashMap";
// import Principal "mo:base/Principal";
// import Option "mo:base/Option";
// import Time "mo:base/Time";
// import Array "mo:base/Array";
// import Int "mo:base/Int";
// import Buffer "mo:base/Buffer";
// import Nat "mo:base/Nat";

// actor university {
//   private stable var mapEntries : [(Text, University)] = [];
//   var map = Map.HashMap<Text, University>(0, Text.equal, Text.hash);

//   private stable var userEntries : [(Text, Student)] = [];
//   var user = Map.HashMap<Text, Student>(0, Text.equal, Text.hash);

//   type Student = {
//     nationalID : Text;
//     password : Text;
//     uniqueID : Text;
//   };

//   public func CreateStudentData(
//     nationalID : Text,
//     password : Text,
//     uniqueID : Text,
//   ) : async Text {

//     let studentData : Student = {
//       nationalID = nationalID;
//       password = password;
//       uniqueID = uniqueID;
//     };
//     if (user.get(nationalID) == null) {
//       user.put(nationalID, studentData);
//       return "Success";
//     } else {
//       return "Faild: Data Already Exits";
//     };

//   };

//   type Course = {
//     course_cod : Text;
//     course_credit : Nat;
//     course_id : Nat;
//     course_name : Text;
//     created_at : Text;
//     letter_grade : Text;
//     points : Nat;
//     term_id : Nat;
//     updated_at : Text;
//   };

//   type Term = {
//     courses : [Course];
//     created_at : Text;
//     cumulative_attempted_hours : Nat;
//     cumulative_earned_hours : Nat;
//     cumulative_gpa : Nat;
//     cumulative_gpa_hours : Nat;
//     cumulative_points : Nat;
//     program : Text;
//     semester_attempted_hours : Nat;
//     semester_earned_hours : Nat;
//     semester_gpa : Nat;
//     semester_gpa_hour : Nat;
//     semester_points : Nat;
//     status : Nat;
//     student_id : Nat;
//     term_description : Text;
//     term_id : Nat; // Assuming you have a term ID field'
//     updated_at : Text;
//   };
//   type University = {
//     mergedID : Text;
//     studentName : Text;
//     studentID : Nat;
//     major : Text;
//     studentStatus : Nat;
//     nationalID : Text;
//     college : Text;
//     gpaScale : Text;
//     universityName: Text;
//     startDate: Text;
//     endDate: Text;
//     description: Text;
//     transcriptID: Text;
//     term : [Term];
//   };

//   public func CreateUniversityInstance(
//     mergedID : Text,
//     studentName : Text,
//     studentID1 : Nat,
//     major : Text,
//     studentStatus : Nat,
//     nationalID : Text,
//     college : Text,
//     gpaScale : Text,
//     universityName: Text,
//     startDate: Text,
//     endDate: Text,
//     description: Text,
//     transcriptID: Text,
//     term : [Term],
//   ) : async Text {

//     let uniData : University = {
//       mergedID = mergedID;
//       studentName = studentName;
//       studentID = studentID1;
//       major = major;
//       studentStatus = studentStatus;
//       nationalID = nationalID;
//       college = college;
//       gpaScale = gpaScale;
//       universityName = universityName;
//       startDate = startDate;
//       endDate = endDate;
//       description = description;
//       transcriptID = transcriptID;
//       term = term;
//     };
//     if (map.get(mergedID) == null) {
//       map.put(mergedID, uniData);
//       return "Success";
//     } else {
//       return "Faild: Data Already Exits";
//     };

//   };
//   public query func QueryUniversity(id : Text) : async ?University {
//     map.get(id);
//   };

//   public query func QueryStudent(password : Text) : async ?Student {
//     user.get(password);
//   };

//   system func preupgrade() {
//     mapEntries := Iter.toArray(map.entries());
//     userEntries := Iter.toArray(user.entries());
//   };
//   system func postupgrade() {
//     map := HashMap.fromIter<Text, University>(mapEntries.vals(), 1, Text.equal, Text.hash);
//     user := HashMap.fromIter<Text, Student>(userEntries.vals(), 1, Text.equal, Text.hash);
//   };

// };

import Debug "mo:base/Debug";
import Text "mo:base/Text";
import Bool "mo:base/Bool";
import Map "mo:base/HashMap";
import Error "mo:base/Error";
import List "mo:base/List";
import Iter "mo:base/Iter";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Option "mo:base/Option";
import Time "mo:base/Time";
import Array "mo:base/Array";
import Int "mo:base/Int";
import Buffer "mo:base/Buffer";
import Nat "mo:base/Nat";

actor university {
  private stable var mapEntries : [(Text, University)] = [];
  var map = Map.HashMap<Text, University>(0, Text.equal, Text.hash);

  private stable var userEntries : [(Text, Student)] = [];
  var user = Map.HashMap<Text, Student>(0, Text.equal, Text.hash);

  type Student = {
    nationalID : Text;
    password : Text;
    uniqueID : Text;
  };

  public func CreateStudentData(
    nationalID : Text,
    password : Text,
    uniqueID : Text,
  ) : async Text {

    let studentData : Student = {
      nationalID = nationalID;
      password = password;
      uniqueID = uniqueID;
    };
    if (user.get(nationalID) == null) {
      user.put(nationalID, studentData);
      return "Success";
    } else {
      return "Faild: Data Already Exits";
    };

  };

  type Course = {
    course_cod : Text;
    course_credit : Nat;
    course_id : Nat;
    course_name : Text;
    letter_grade : Text;
    points : Nat;
    term_id : Nat;
  };

  type Term = {
    courses : [Course];
    cumulative_attempted_hours : Nat;
    cumulative_earned_hours : Nat;
    cumulative_gpa : Nat;
    cumulative_gpa_hours : Nat;
    cumulative_points : Nat;
    program : Text;
    semester_attempted_hours : Nat;
    semester_earned_hours : Nat;
    semester_gpa : Nat;
    semester_gpa_hour : Nat;
    semester_points : Nat;
    status : Nat;
    student_id : Nat;
    term_description : Text;
    term_id : Nat; // Assuming you have a term ID field'
  };
  type University = {
    mergedID : Text;
    studentName : Text;
    studentID : Nat;
    major : Text;
    studentStatus : Nat;
    nationalID : Text;
    college : Text;
    gpaScale : Text;
    universityName: Text;
    startDate: Text;
    endDate: Text;
    description: Text;
    transcriptID: Text;
    term : [Term];
  };

  public func CreateUniversityInstance(
    mergedID : Text,
    studentName : Text,
    studentID1 : Nat,
    major : Text,
    studentStatus : Nat,
    nationalID : Text,
    college : Text,
    gpaScale : Text,
    universityName: Text,
    startDate: Text,
    endDate: Text,
    description: Text,
    transcriptID: Text,
    term : [Term],
  ) : async Text {

    let uniData : University = {
      mergedID = mergedID;
      studentName = studentName;
      studentID = studentID1;
      major = major;
      studentStatus = studentStatus;
      nationalID = nationalID;
      college = college;
      gpaScale = gpaScale;
      universityName = universityName;
      startDate = startDate;
      endDate = endDate;
      description = description;
      transcriptID = transcriptID;
      term = term;
    };
    if (map.get(mergedID) == null) {
      map.put(mergedID, uniData);
      return "Success";
    } else {
      return "Faild: Data Already Exits";
    };

  };
  public query func QueryUniversity(id : Text) : async ?University {
    map.get(id);
  };

  public query func QueryStudent(password : Text) : async ?Student {
    user.get(password);
  };

  system func preupgrade() {
    mapEntries := Iter.toArray(map.entries());
    userEntries := Iter.toArray(user.entries());
  };
  system func postupgrade() {
    map := HashMap.fromIter<Text, University>(mapEntries.vals(), 1, Text.equal, Text.hash);
    user := HashMap.fromIter<Text, Student>(userEntries.vals(), 1, Text.equal, Text.hash);
  };

};