        function firstFunction() {
            document.getElementById("demo").innerHTML = "This is the changed Paragraph Text!";
        }

        console.log("This is my first JavaScript Program!!");


        //statements (end with a semicolon)
        //variables
        let x = 5;
        let y = 10;
        z = 25;
        var a = 32;

        //block
        {
            let b = 20;
            console.log(b);
        }

        //Keyworqds
        //let, var, const, if, else, switch, case, break, default, function, return, for, while, do, try, catch, finally, throw, class, extends, super, import, export, async, await

        /*
        Multiple line comment
        This is a multi-line comment in JavaScript.
        */

        /*
        //Expression
        let sum = x + y; // This is an expression that adds x and y
        console.log('Sum of x and y is: ' +sum);

        //Identifier
        //A-Z, a-z, 0-9, $, _ (cannot start with a number)

        //Javascript is case-sensitive, A and a are different variables

        //Upper Camel Case - FirstName, LastName
        //Lower Camel Case - firstName, lastName
        //first-name, last-name - Not allowed in JavaScript


        //JAVASCRIPT OPERATORS
        //Arithmetic Operators: +, -, *, /, %, ++, --
        x=y+z;
        console.log('Value of x after addition: ' + x);
        x = y-z;        
        console.log('Value of x after subtraction: ' + x);
        x = y*z;
        console.log('Value of x after multiplication: ' + x);
        x = y/z;
        console.log('Value of x after division: ' + x);
        x = y % z; // Modulus operator
        console.log('Value of x after modulus: ' + x);

        //Assignment Operators: =, +=, -=, *=, /=, %=, **= (exponentiation)
                x += 5; // x = x + 5
        console.log('Value of x after addition assignment: ' + x);
        x**= 5; // x = x ** 2;
        console.log('Value of x after exponentiation assignment: ' + x);

        //Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
        //? - ternary operator

        //String addition
        let firstName = "John";
        let lastName = "Doe";

        let fullName = firstName + " " + lastName; // Concatenation
        console.log('Full Name: ' + fullName);

        //Logical Operators: && (AND), || (OR), ! (NOT)

        //a>b && a>c; // AND operator
        //a>b || a>c; // OR operator
        // if(!a>b){// NOT operator
        //     console.log('a is not greater than b');
        // }
            

        //BASIC DATA TYPES
        //String, Number, Boolean, Undefined, Null, Symbol, BigInt, Object

        //String
        let str = "Hello, World!";
        str = 'Hello, World!'; // Single quotes also work
        console.log('String: ' + str);

        //Number
        let num = 42; // Integer
        let floatNum = 3.14; // Float
        console.log('Number: ' + num);  
        console.log('Float Number: ' + floatNum);

        //Boolean
        let colorFlag = true; // Boolean value
        let isActive = false; // Boolean value
        console.log('Color Flag: ' + colorFlag);

        //Object
        let car = {
            make: "Toyota", color: "Red", year: 2020
        }

        const pi = 3.14; // Constant value
        //pi=22.3;//Throws error
        console.log('Car Make: ' + car.make);
        console.log(car["make"]);

        //Array object
        const fruits = ["Apple", "Banana", "Cherry"];

        //Date object
        const date = new Date();
        console.log('Current Date: ' + date);

        const date1 = new Date("2023-10-01");
        console.log('Specific Date: ' + date1);

        let j;
        console.log('Value of j: ' + j); // Undefined
        j = null; // Null value
        console.log('Value of j after null assignment: ' + j); // Null  
        j = 10; // Assigning a number
        console.log('Value of j after number assignment: ' + j); // 10  
        j = "Hello"; // Assigning a string
        console.log('Value of j after string assignment: ' + j); // Hello

        let bigIntValue = BigInt(1234567890123456789012345678901234567890);
        console.log('BigInt Value: ' + bigIntValue);

        let car1 = ""; //Empty string

        //CONDITIONAL STATEMENTS
        //SIMPLE IF STATEMENT
        if (colorFlag) {
            console.log('Color Flag is true');
        }

        //IF-ELSE STATEMENT
        if (colorFlag) {
            console.log('Color Flag is true');
        }else{
            console.log('Color Flag is false');
        }

        num1 = 10;
        num2 = 20;  
        num3 = 30;
        //IF-ELSE IF-ELSE STATEMENT
        if(num1 > num2 && num1 > num3) {
            console.log('num1 is the largest number');
        }else if(num2 > num3) {
            console.log('num2 is the largest number');
        }else{
            console.log('num3 is the largest number');
        }


let salary = 45000;
let grade ;

if (salary >= 50000) {
  grade = "G1";
} else if (salary >= 40000) {
  grade = "G2";
} else if (salary >= 30000) {
  grade = "G3";
} else {
  grade = "G4";
}
 
 console.log("salary employees " +grade);
// //We can use function as well here
// function printGrade(salary) {
//   if (salary >= 50000) {
//     console.log("G1");
//   } else {
//     if (salary >= 40000) {
//       console.log("G2");
//     } else {
//       if (salary >= 30000) {
//         console.log("G3");
//       } else {
//         console.log("G4");
//       }
//     }
//   }
// }
// printGrade(55000);

        //SWITCH STATEMENT
        let day = 3; // 1 for Monday, 2 for Tuesday, ..., 7 for Sunday
        switch (day) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");            
                break;    
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
            default:
                console.log("The provided value should be between 1 and 7");                                
        }
        
        let days = 1; // 1 for Monday, 2 for Tuesday, ..., 7 for Sunday
        switch (days) {
            case 1:
                //console.log("Monday");
                //break;
            case 2:
                //console.log("Tuesday");
                //break;
            case 3:
                //console.log("Wednesday");
                //break;
            case 4:
                //console.log("Thursday");            
                //break;    
            case 5:
                console.log("Working Day");
                break;
            case 6:
                // console.log("Saturday");
                // break;
            case 7:
                console.log("WeekEnd");
                break;
            default:
                console.log("The provided value should be between 1 and 7");                                
        }        


        let name = "Raju"; // 1 for Monday, 2 for Tuesday, ..., 7 for Sunday
        switch (name) {
            case "Raju":
                console.log("Name is Raju");
                break;
            case 2:
                console.log("Name is not Raju");
                break;
            //case 3:
                //console.log("Wednesday");
                //break;
        }

        //2015 - ECMAScript - ES6 (European Computer Manufacturer's Association)
        //var - REDECLARATION IS ALLOWED
        var name1 = "Rajesh";

        var name1 = "Kumar";

        var name1 = "Ramesh";
        console.log(name1);
        
        //const REDECLARATION, REASSIGNMENT NOT ALLOWED
        const Pi = 3.14;

        //let REDECLARATION NOT ALLOWED - ONLY REASSIGNMENT ALLOWED
        let name2 = "Kumar";
        name2 = "Rajesh";


    //ITERATIVE STATEMENTS - While, Do While, For (normal, For-In and For-Of)
    //assignment, condition, increment / decrement
    let i=1;
    for(; i<=10; ){
        console.log(i);
        i++;
    }

    console.log(i);

    for(let j=1, name1="Reddy", isFlag= false; j<=10; j++){

    }

    


    //WHILE LOOP
    let k = 1;
    while(k<=10){
        console.log(k);
        k++;
    }

    //DO WHILE
    //do{
    //}while(condition)
    // let isAvaileble = true;
    // do{
    //     console.log("is Available");
    //     break;
    // }while(isAvaileble);

    //ARRAYS - group of values stored into a single variable

    let car1 = "Maruthi";
    let car2 = "BMW";
    let car3 = "Volvo";

    const cars = ["Volvo", "BMW", "Maruthi"]; // Static assignment of array

    const cars1 = [
        "Volvo", 
        "BMW", 
        "Maruthi"
    ];
*/
    const cars2 = [];
    cars2[0] = "volvo";
    cars2[1] = "BMW";
    cars2[2] = "maruthi";

    const cars3 = new Array("Maruthi", "Volvo", "BMW");

    // console.log(cars.toString());
    // console.log(cars.length);
    // console.log(cars.reverse());
    //console.log(cars1.concat(cars2));


        let car = {
            make: "Toyota", color: "Red", year: 2020
        }

    cars2[3] = "Benz";
    cars2.push("Hyundai");
    console.log(cars2.sort());
/*
    const fruits = new Map(); 
    fruits.set("apples", 500); 
    fruits.set("bananas", 300); 
    fruits.set("oranges", 200);
    console.log(fruits.size);

    //FOR OF LOOP
    //for(variable of iterable){
    //}

    for(let carEx of cars2){
        console.log(carEx);
    }

    for(let carEx in cars2){
        console.log(carEx);
    }

    for(let carEx in cars2){
        console.log(cars2[carEx]);
    }

    for(let x in car){
        console.log(x);
    }

    //INVALID - CANNOT USE OF FOR AN OBJECT TO EXTRACT KEYS
    // for(let x of car){
    //     console.log(x);
    // }

    console.log(cars2.sort());

    cars2.pop();
    console.log(cars2);

    //cars2.forEach()

    let name1 = prompt("Please enter your name:");
    console.log("Hello, " + name1);
    */

