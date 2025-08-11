class Greeting{
    greet(name: string): string;
    greet(name: string[]): string;
    greet(name: string | string[]): string{
        if(typeof name === "string"){
            return `Hello ${name}`
        }else{
            return `Hello ${name.join(" and ")}!`
        }
    }
}

const greeting = new Greeting();
let names = ["Rashmi", "Gautham", "Krishna"];
//console.log(greeting.greet("Rashmi"));
console.log(greeting.greet(names));