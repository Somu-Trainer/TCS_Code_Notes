/*
//Partial
interface Measure{
    x: number,
    y: number
}

let rectangle: Partial<Measure> = {}; //Partial makes the x and y variables optional
rectangle.x = 10;

//Required
interface Account{
    branch: string;
    accNo?: number;
}

let myAcc:  Required<Account> = {
    branch: "Bengaluru Urban 225",
    accNo: 2370512
}

//Record - this is a shortcut to define an object with key, value pair
const studentMap: Record<string, number> = {
    'Rajesh': 22,
    'Anitha': 19
};

//Omit - removes the keys from an object
interface Person{
    name: string,
    age: number,
    qual?: string
}

const kumar: Omit<Person, 'age'> = {
    name: "Kumar",
    qual: "MBA"
}


//Pick - only keyword used is retained for the usage and other keys are not available
interface Person{
    name: string,
    age: number,
    qual?: string
}

const kumar: Pick<Person, 'age'> = {
    age: 19
}

//Exclude
type Pointer = string | number | boolean;
 //let d : Pointer = true;//"Hi There";
let x : Exclude<Pointer, boolean> = "Rahul";

//Parameters - extracts the parameter types function type as an array
type CoupleVals = (cp: {life: string, duration: number}) => {};
const cpls: Parameters<CoupleVals>[0] = {
    life: "excellent",
    duration: 100
}
*/

//ReadOnly //Makes the type we are enforcing with this Utility type completely readonly
//Majorly used with Interfaces, classes, etc.,
interface Person{
    name: string,
    age: number,
    qual: string
}

const person1: Readonly<Person> = {
    name: "Ankur",
    age: 26,
    qual: "B.Tech"
} 

//person1.qual = "";
