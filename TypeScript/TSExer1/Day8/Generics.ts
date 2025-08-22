//GENERICS
//Used to create reusable componenets which work with various data types
//This reusable componenets should have type safety

function createPairOfVal<S, N>(v1: S, v2: N): [S, N]{
    return [v1, v2];
}

console.log(createPairOfVal<string, number>('Hey Brother!!', 984));

class Tree<T = string>{
    private _speciesVal: T | undefined;

    constructor(private name: string){

    }

    public setVal(value: T){
        this._speciesVal = value;
    }

    public getVal(): T | undefined{
        return this._speciesVal;
    }

    public nameToString(): string{
        return `${this.name}: ${this._speciesVal}`;
    }
}

let value = new Tree("Neem");
console.log(value.getVal());
console.log(value.nameToString());
value.setVal("New Tree");
console.log(value.getVal());
console.log(value.nameToString());