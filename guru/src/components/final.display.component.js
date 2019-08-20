import React, { Component } from "react";
import SalaryInput from "./salary.input";
import FixedExpenses from "./fixed.expenses";
import DebtForm from "./debt";
import VariableExpense from "./variable.expenses";
// import Savings from "./savings";


    export default class DisplayFinal extends Component {

    
   render() {     
    return (
        <div>
            <SalaryInput 
            
            />
            <p>-</p>
            <FixedExpenses 
            />
            <p>-</p>
            <DebtForm />
            <p>-</p>
            <VariableExpense />
            <p>=</p>
            <div>Total: </div>
        </div>
    )
   }
}
