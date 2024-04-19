export interface TaxStatusOO {
    calculateTax(income: number): number;
}

export class Single {
    public calculateTax(income: number): number {
        let result = 0;

        if(income >= 0 || income <= 19999){
            result =+ income * 0.12;
        }else if(income >= 20000 || income <= 49999){
            result =+ income * 0.15;
        }else if(income >= 50000){
            result =+ income * 0.20;
        }
        return result;

    }
}

// create the class Married

export class Married {
    public calculateTax(income: number): number{

        let result = 0;

        if(income >= 0 || income <= 49999){
            result =+ income * 0.12;
        }else if(income >= 50000 || income <= 99999){
            result =+ income * 0.15;
        }else if(income >= 100000){
            result =+ income * 0.20;
        }
        return result;

    }
}

// create the class Separated
export class Separated {
    public calculateTax(income: number): number{

        let result = 0;

        if(income >= 0 || income <= 15999){
            result =+ income * 0.12;
        }else if(income >= 16000 || income <= 40000){
            result =+ income * 0.15;
        }else if(income >= 40001 || income <= 74999){
            result =+ income * 0.20;
        }else if(income >= 75000){
            result =+ income * 0.25;
        }
        return result;

    }
}
export class Context {
    private _taxStatus: TaxStatusOO;
}