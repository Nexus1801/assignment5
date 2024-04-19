export interface TaxStatusOO {
    calculateTax(income: number): number;
}

export class Single {
    public calculateTax(income: number): number {

    }
}

// create the class Married

// create the class Separated

export class Context {
    private _taxStatus: TaxStatusOO;
}