
//1. Tuple is a typed array
//2. pre-defined length
//3. pre-defined type for each index

let myTuple: [number, string, boolean];
myTuple = [101, "Akhil Raj", true];
// myTuple = ["Akhil Raj", true, 101]; //ORDER OF VALUES AND DATATYPES HAVE TO BE FOLLOWED

let myTuple1: [number, string, boolean] = [101, "Akhil Raj", true];

let readOnlyTup: readonly [number, string, boolean, string] = [101, "Akhil Raj", true, "Yes"];
readOnlyTup = [102, "Akhil Rajk", true, "Yess"];

myTuple1.push(102, 'Simple Bhatia', false);
myTuple1.push("Sunny Singh");
console.log(myTuple1);

myTuple1.pop();
myTuple1.pop();
console.log(myTuple1);
myTuple

let student: [studentId: number, StudentName: string, courseInProgress: boolean];
