//Functions in Javascript

function myFunction(){
    console.log("This is a function");
}

myFunction();

function add(num1, num2){
    console.log("Added value of num1, num2", num1+num2);
    return num1+num2;
}

function add(num1, num2, num3){
    console.log("Added value of num1, num2, num3", num1+num2+num3);
    return num1+num2+num3;
}

let x = add(23, 45);
console.log(x*5);

console.log(add(23, 56, 45));


//OBJECTS 
const car = {
    make: "Toyota", 
    color: "Red", 
    year: 2020, 
    fuel: function(){
        return "it is converible";
    }
}

const fruits = new Object();
fruits.orange = "orange";
fruits.apple = "apple";

console.log(fruits["orange"]);
console.log(fruits.orange);
console.log(car.fuel);

//PRIMITIVES IN JAVASCRIPT ARE IMMUTABLE
//OBJECTS IN JAVASCRIPT ARE MUTABLE

const employee = {
    name: "Rajesh",
    age: 35,
    projects: {
        project1: "DM1",
        project2: "PRJ",
        project3: "DM2",
    }
}

console.log(employee.projects.project1);
console.log(employee.projects["project1"]);
console.log(employee["projects"]["project1"]);

const Vals = Object.values(employee);
console.log(Vals);

//Class
//1. Define class, body - methods, constructor, hoisting
//Inheritance

/*
class className{
    constructor(){
    }

    methodName(){
    }
}

*/

//HOISTING - use a variable or name without pre-declaring it, and it gets created during definition
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    readPerson(){
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old`);
    }
}

let person1 = new Person("Roshan", 23);
person1.readPerson();

class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    display(){
        console.log(`My car ${this.year} ${this.make} ${this.model}`);
    }
}

const car1 = new Car("BMW", "X Series", 2024);
car1.display();


//INHERITANCE
class ElectricCar extends Car{
    constructor(make, model, year, batteryLife){
        super(make, model, year);
        this.batteryLife = batteryLife;
    }

    displayElectric(){
        super.display();
        console.log("Battery life years", this.batteryLife);
    }
}

const comet = new ElectricCar("MG", "COMET", 2025, 5);
comet.displayElectric();

class Car2{
    constructor(brand){
        this._carname = brand;
    }

    set carname(x){
        this._carname = x;
    }

    get carname(){
        return this._carname;
    }
}

//BELOW CODE IS LEGAL, the value returned is UNDEFINED
// const car5 = new Car2();
// console.log(car5.carname);

//Below is the normal code
const car2 = new Car2("Benz");
console.log(car2.carname);
car2._carname = "Honda";
console.log(car2.carname);

class Car3{

    //OVERLOADING OF CONSTRUCTOR IS NOT ALLOWED
    // constructor(){

    // }

    constructor(brand){
        this.brand = brand
    }
    display(){
        console.log("This is Car3 Display method, brand is", this.brand);
    }
}

//OVERLOADING OF CONSTRUCTOR IS NOT ALLOWED
// const car3 = new Car3();
// car3.display();

const car31 = new Car3("MG Motors");
car31.display();