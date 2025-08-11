import {type SaleDeed} from './Interface';

class Buyer1 implements SaleDeed{
    propertyDetails(): void {
        console.log("Flat 201, East Facing, 1200 sft");
    }

    termsOfPayment(): void {
        console.log("50% Cash, 50% Loan, 90 days for Loan Payment");
    }

    otherConditions(): void {
        console.log("Parking cannot be re-let out to outside people");
    }
}

class Buyer2 implements SaleDeed{
    propertyDetails(): void {
        console.log("Flat 205, West Facing, 1200 sft");
    }

    termsOfPayment(): void {
        console.log("20% Cash, 80% Loan, 45 days for Loan Payment");
    }

    otherConditions(): void {
        console.log("Parking cannot be re-let out to outside people");
    }
}

const buyer1 = new Buyer1();
buyer1.propertyDetails();
buyer1.termsOfPayment();
buyer1.otherConditions();