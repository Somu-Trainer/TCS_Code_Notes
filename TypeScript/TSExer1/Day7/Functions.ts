function add(num1: number, num2: number){
    return num1 + num2;
    //console.log(num1, num2);
}

let sum = add(24, 52);
console.log(sum);
//add(34);

//OPTIONAL PARAMETERS
// function getName(firstName: string, lastName: string, midName: string = "default"){
function getName(firstName: string, lastName: string, midName?: string){
    // return firstName+" "+midName+" "+lastName;
    if(typeof midName === "undefined"){
        return firstName+" "+lastName;
    }else{
        return firstName+" "+midName+" "+lastName;
    }
}

let x = getName("MohanDas", "Gandhi");
console.log(x);

//REST PARAMETERS
function getName1(firstName: string, ...arr: string[]): string{
    return firstName+" "+ arr.join(" ");
}

let addedStrings = getName1("Harry", "Potter");
console.log(addedStrings)

let addedStrings1 = getName1("Venkata", "Hari", "Krishna", "Kishore");
console.log(addedStrings1)

//ARROW FUNCTION
// function addnUM(num1: number, num2: number){
//     return num1 + num2;
//     //console.log(num1, num2);
// }

let sumNum = (num1: number, num2: number, num3: number) => {
    return num1+num2+num3;
}

console.log(sumNum(23, 95, 19));
console.log(sumNum(45, 32, 27));

sumNum(9087, 34, 763);

//ANONYMOUS FUNCTIONS
let anonym = function(name : string): string{
    //console.log("Hi "+name);
    return "Hi "+name;
}

anonym("Tanuja");

//FileInputStream fis = new FileInputStream(new File("path of file"));