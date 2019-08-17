
import React from "react";
import Form from "./components/create.account";
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



   






  <Router>

     <h1 className="text-center">Finance Guru</h1>
 
    <Route path="/" exact component={HomePage} />
    <Route path="/signup" component = {Signup} />
    <Route path="/fixed" component = {FixedExpenses} />
   
    </Router>
    </div>

export default App
