interface Measurement{
    length: number;
    breadth: number;
}

let rectange: Measurement = {
    length: 25,
    breadth: 20
}

//Using interface as a return type on a function
function areaOfRect(): Measurement{
    let length =  25;
    let breadth = 20;
    return{
        length: length,
        breadth: breadth
    }
}

