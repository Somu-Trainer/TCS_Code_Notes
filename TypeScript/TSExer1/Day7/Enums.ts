// enum DayOfWeek{
//     Day1,
//     Day2,
//     Day3
// }

/*
enum DayOfWeek{
    Day1 = "Monday",
    Day2 = "Monday",
    Day3 = "Wednesday",
    Day4 = "Thursday",
    Day5 = "Friday",
    Day6 = "Saturday",
    Day7 = "Sunday"
}

console.log(DayOfWeek.Day1);
console.log(DayOfWeek["Day2"]);
//console.log(DayOfWeek[3]); //Throws error

*/

enum DayOfWeek{
    Day1 = 1,
    Day2 = 2,
    Day3 = "Wednesday"
}
console.log(DayOfWeek.Day3);
console.log(DayOfWeek["Day1"]);
console.log(DayOfWeek[1]);

enum Directions {
North = 5,
South = 4,
East = 6,
West = 8
}


console.log(Directions.South); // output is 4
console.log(Directions["North"]); // output is N
console.log(Directions[4]); // output is South

