
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/create.account";
import LoginForm from "./login"
import ExampleDisplay from "../src/components/examples"
import Account from "./components/account";
import HomePage from "./components/home/home.js";
import Signup from './components/signup';
import Profile from "./components/profile.page";
import VariableExpenses from "./components/variable.expenses";
import FixedExpense from "./components/fixed.expenses";
import SalaryInput from "./components/salary.input";
import DebtForm from "./components/debt";
import DisplayFinal from "./components/final.display.component";



function App() {
  return (
    <div className="App">


        <Router> 

      <div>
         <Route exact path="/" component={HomePage} /> 
         <Route exact path="/signUp" component={Signup} /> 

        <Route exact path = "/form" component={Form}/> 
        <Route exact path = "/login" component={LoginForm}/>
        <Route exact path = "/examples" component={ExampleDisplay}/>
        <Route exact path = "/profile" component={Profile}/>
        <Route exact path = "/salary" component={SalaryInput}/>
        <Route exact path="/fixed" component={FixedExpense} />
        <Route exact path= "/variable" component={VariableExpenses} />
        <Route exact path= "debt" component={DebtForm} />
            <Route exact path= "/final" component={DisplayFinal} />
    
     </div> 

     </Router>     

     </div>
  );
}
export default App;




   





