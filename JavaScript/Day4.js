const dt = new Date();
console.log(dt)

const dt1 = new Date("2025-03-28");

/*
new Date();
new Date(date string);
new Date(year, month);
new Date(year, month, day);
new Date(year, month, day, hours);
new Date(year, month, day, hours, min);
new Date(year, month, day, hours, min, sec);
new Date(year, month, day, hours, min, sec, ms);
new Date(millisec);
*/

const dt2 = new Date("August 06, 2025 11:33:22");
console.log(dt2);

function add(num1, num2, num3, num4, num5){

    if(num1!= null && num2 != null){
        num1+num2
    }


}

///////////////////////////////////////////////////////////////////////

document.getElementById("demo").innerHTML = "Hello this is changed";
document.getElementById("demo").className = "paraClass";
document.getElementById("demo").setAttribute("type", "html paragraph");


document.createElement();
document.removeChild()
document.replaceChildren

document.getElementById("demo").onclick = firstFunction1()
{

};

document.body
document.head
document.forms


//Finding HTML Element by ID
const element1 =  document.getElementById("demo");

const element2 = document.getElementsByName("name1");
const element3 = document.getElementsByTagName("a");

let a = "This is a string";
a.replace();