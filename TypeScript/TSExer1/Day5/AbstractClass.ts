abstract class Payment{
    address: string;

    constructor(address: string){
        this.address = address;
    }
    public abstract paymentMethod(): void;
    public addressToDeliver(){
        return this.address;
    }
}

//let p1 = new Payment("201, Hubbali Street");

class CardPayment extends Payment{
    public paymentMethod(): void {
        console.log("Payment by Card");
    }
}

let c1 = new CardPayment("201, Hubbali Street");
c1.paymentMethod();