/*
//Number
let a: number = 10; //integer
let marks: number = 470; //integer
let price :number = 475.80;//float type

console.log(price.valueOf());
console.log(price.toPrecision(2));
console.log(typeof price);

let x = price.toString();
console.log(typeof x);

console.log(price.toFixed(3));


//STRING
let str :string = " Hello World ";
// console.log(str.charAt(6));
// console.log(str.split(""));

// let k = str.split("");
// console.log(k);

console.log(str.indexOf('a'));
console.log(str);
console.log(str.trim());
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(4, 10));
//console.log(str.substr(4)); //DEPRECATED
console.log(str.replace("hello", "Hi"));

//BOOLEAN
let bflag :boolean = true;
let status: boolean = false;

//ANY
let x: any = 456;
console.log(typeof x);
x = "Hello";
console.log(typeof x);
x = true;
console.log(typeof x);

let a = 456; //TYPE INFERANCE

//VOID 
function test1(): void{
    //example code
}

const json = JSON.parse('{"name1" : "abc"}');
console.log(typeof json);

//UNION TYPE
let name: string | number;
//console.log(name);
name = "Rajesh Khanna";
name.toLocaleLowerCase();
name = 234;

//ARRAY
//let arrayName: Array<datatype>
let daysOfWeek: Array<string> = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
    "Saturday"];

let years: Array<number> = [2025, 2024, 2023, 2022];
let month_year: Array<string | number> = ["Jan", 2025, "Feb", 2024];
let allTypesOfData: Array<any> = [true, 2025, "Abdul", [123, 234]];

const lastNames: string[] = [];
//lastNames[0] = "Raju";
lastNames[1] = "Nayar";
console.log(typeof lastNames[0]);
lastNames.push("Reddy");//value is added to the array at the end
console.log(lastNames);
lastNames.pop();//last value is removed from array
console.log(lastNames);
lastNames.shift();//first value is removed from array
console.log(lastNames);


//READONLY KEYWORD
const firstNames: readonly string[] = ["Harry"];
//firstNames.push("David");//Does not allow adding any value to the array - Readonly

//let xy: readonly number = 123;//Throws error - readonly available for Arrays, Tuples

const daysOfWeek = [1, 2, 3, 4, 5, 6, 7];
console.log(typeof daysOfWeek);
daysOfWeek[0] = 0;
console.log(daysOfWeek);
daysOfWeek.push(8);
console.log(daysOfWeek);


//USING FOR LOOP - ACCESS ARRAY
let years: Array<number> = [2025, 2024, 2023, 2022];
for(let i=0; i<years.length; i++){
    console.log(years[i]);
}

//USING FOR-IN LOOP - ACCESS ARRAY
for(let x in years){
    console.log(years[x]);
}

//USING FOR-OF LOOP - ACCESS ARRAY
for(let x of years){
    console.log(x);
}

let years: Array<number> = [2025, 2024, 2023, 2022];
years.forEach(function(yrs, j){
    console.log(j, yrs);
})

console.log(years.sort());
console.log(years);

console.log(years.reverse());
console.log(years);

let days = [1, 2, 3, 4];

console.log(years.concat(days));
//years.find(2023, 2, )
*/

let days = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const daysHigherThan3 = days.find(day => day > 3);
console.log(daysHigherThan3);