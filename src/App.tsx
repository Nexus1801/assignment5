import './App.css'
import {TaxStatusOO, Context} from "./TaxStatusOO.ts";

function App() {
    const income: number = Number(prompt("Enter your income", "0"));

    // Object-oriented code. Complete the code below.
    // Create the classes
    const single: TaxStatusOO;
    const married: TaxStatusOO;
    const separated: TaxStatusOO;
    const taxStatusSelection: Context;

    // calculate the tax by using the Context class
    const singleTaxOO: number;

    // Use the setter to change the TaxStatus class to Married and calculate the tax
    const marriedTaxOO: number;

    // Use the setter to change the TaxStatus class to Separated and calculate the tax
    const separatedTaxOO: number;

    // Functional programming code.
    // Calculate the tax using the higher-order function selectTaxStrategy()
    const singleTaxFP: number;
    const marriedTaxFP: number;
    const separatedTaxFP: number;

    // Fill in the variables for the code below
    return (
        <>
            <h2>Tax Strategy Pattern - Object Oriented</h2>
            <b>For an income of ${}, the tax is</b>
            <br/><b>${}</b> for a <b>single</b> person
            <br/><b>${}</b> for a <b>married</b> couple
            <br/><b>${}</b> for a <b>married couple filing separately</b>

            <h2>Tax Strategy Pattern - Functional Programming</h2>
            <b>For an income of ${}, the tax is</b>
            <br/><b>${}</b> for a <b>single</b> person
            <br/><b>${}</b> for a <b>married</b> couple
            <br/><b>${}</b> for a <b>married couple filing separately</b>
        </>
    );
}

export default App
