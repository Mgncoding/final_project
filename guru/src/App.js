
import React from "react";
import Form from "./components/create.account";
import LoginForm from "./login"

import Account from "./components/account";
import HomePage from "./components/home/home.js";
import Signup from './components/signup';
import Profile from "./components/profile.page";
import Navbar from "./components/navbar/navbar.component"
import FixedExpense from "./components/fixed.expenses"
 import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
    <LoginForm/>


       <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signUp" component={Signup} />
         <Route exact path = "/form" component={Form}/> 

         <h1 className="text-center">Finance Guru</h1>
    
     </div> 
     </Router>    
     </div>
  );
}

export default App; 




   





