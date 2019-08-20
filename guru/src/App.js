
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/create.account";
import LoginForm from "./login"
import Account from "./components/account";
import HomePage from "./components/home/home.js";
import Signup from './components/signup';
import Profile from "./components/profile.page";
import VariableExpenses from "./components/variable.expenses";
import FixedExpense from "./components/fixed.expenses";
import SalaryInput from "./components/salary.input"



function App() {
  return (
    <div className="App">

      <Router>


       <Router>

      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signUp" component={Signup} />
         <Route exact path = "/form" component={Form}/> 
        <Route  path={"fixed"} component={FixedExpense} />
        <Route path={"salary"} component={SalaryInput} />
           <h1 className="text-center">Finance Guru</h1> 
    
     </div> 

     </Router>    

     </div>
  );
}
export default App;




   





