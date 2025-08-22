/*
//Before Destructure
const carBrands = ['Maruthi', 'Hyundai', "Honda"];
let car1 = carBrands[0];
let car2 = carBrands[1];
let car3 = carBrands[2];

//with Destructuring
const carBrands1 = ['Maruthi', 'Hyundai', "Honda"];
let [car4, car5, car6] = carBrands1;
//let [car4, car5] = carBrands1;
console.log(car4);
console.log(car5);

let [, , car7] = carBrands1;
console.log(car7);

//Usage with a function
function arithmeticCalc(a: number, b: number){
    const add = a+b;
    const sub = a-b;
    const mul = a*b;
    const div = a/b;
    return [add, sub, mul, div];
}

const [add, sub, mul, div] = arithmeticCalc(34, 10);
console.log(add, sub, mul, div);

//Using Objects - Old Way
let tree = {
    species: "xx yyyy",
    commonName: "Mango",
    seasonOfGrowth: "Summer"
}

function displayTree(tree: any){
    const display = "My Tree is of Species: "+tree.species + " With usual name: "+tree.commonName
    +" which grows in the season: "+tree.seasonOfGrowth;
    console.log(display);
}

displayTree(tree);
*/

//With Destructuring 
let tree = {
    species: "xx yyyy",
    commonName: "Mango",
    seasonOfGrowth: "Summer"
}

function displayTree({species, commonName, seasonOfGrowth}: any){//: tree){
    const display = "My Tree is of Species: "+species + " With usual name: "+commonName
    +" which grows in the season: "+ seasonOfGrowth;
    console.log(display);
}

displayTree(tree);