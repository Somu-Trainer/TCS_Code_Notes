class Student{
    //define your properties / variables
    name: string;
    age: number;
    course: string;

    constructor(name: string, age: number, course: string){
        this.name=  name;
        this.age = age;
        this.course = course;
    }

    getName(): string{
        return this.name;
    }

    getAge(): number{
        return this.age;
    }

    getCourse(): string{
        return this.course;
    }
}

let student1 = new Student("Ramesh Kumar", 21, "MCA");
// console.log(student1.getName());
// console.log(student1.getAge());
// console.log(student1.getCourse());

class Employee extends Student{
    empID: number;

    constructor(name: string, age: number, course: string, empID: number){
        super(name, age, course);
        this.empID = empID;                    
    }

    getEmpID(): number{
        return this.empID;
    }
}

let emp1 = new Employee("Kethika Sharma", 26, "M.Sc.", 1001);
console.log(emp1.getName());
console.log(emp1.getAge());
console.log(emp1.getCourse());
console.log(emp1.getEmpID());