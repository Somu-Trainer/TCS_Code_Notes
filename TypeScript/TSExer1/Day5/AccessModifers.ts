class Account{
    private accNo;
    protected accName;
    public branchID;

    constructor(accNo: number, accName: string, branchID: number){
        this.accNo = accNo;
        this.accName = accName;
        this.branchID = branchID;
    }

    private getAccNum(){
        return this.accNo;
    }

    getDetails(): string{
        return "Acc Number is: "+this.getAccNum() + " Acc Name: "+this.accName;
    }
}

const acc1 = new Account(123145, "Prajwal Kumar", 876);
console.log(acc1.branchID);//ONLY PUBLIC VAR AND METHODS ARE SEEN ACCESSIBLE

let details = acc1.getDetails();
console.log(details);

class HDFCAcc extends Account{
    getProtectedVar(): string{
        return this.accName;
    }
}

let hdfc1 = new HDFCAcc(90876, "Roshan Sarkar", 34012);
console.log(hdfc1.getProtectedVar());