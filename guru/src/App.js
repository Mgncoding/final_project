
import './App.css';
import Form from "./components/create.account";
import Account from "./components/account";
import HomePage from "./components/home/home.js";
import Signup from './components/signup';
import Profile from "./components/profile.page";
import Navbar from "./components/navbar/navbar.component"


import React, {Component} from "react";



import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/home";
import Signup from './components/signup';
// import Button from './components/button/button'
// import Navbar from "./components/navbar/navbar.component"
// import { sign } from "crypto";
// import Navbar from "./components/navbar/navbar.component"
import Form from "./components/savings";
class App extends Component {
  render (){ 
  return (
    <div className="container">
    <Form/>

    </div>



    // <Router>
      
    // <div className="container">
    // <ul>
    //   <li><a href="/">Home</a></li>
    //   <li><a href="/signup">Create Account</a></li>
    // </ul>

import React from 'react';
import './App.css';
// import Form from "./components/create.account";
// import Account from "./components/account";
// import HomePage from "./components/home";
// import Signup from './components/signup';
// import Navbar from "./components/navbar/navbar.component"
// import Test from "../src/components/test"
import FixedExpenses from "../src/components/fixed.expenses"




function App() {
  return (
    <div className="App">

      <Navbar/>
      {/* < Form/>
      < Account/> */}
      <HomePage/>
      {/* <Signup/>
      < Form/>
      <Profile/> */}

      <FixedExpenses />
        {/* <Test /> */}
      {/* < Form/>
      < Account/> */}
      {/* <HomePage/> */}

    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signUp" component={Signup} />
        {/* <Route exact path = "/form" component={}/> */}

    // <h1 className="text-center">Finance Guru</h1>
    
    // <Route path="/" exact component={HomePage} />
    // <Route path="/signup" component = {Signup} />
    // </div>
    // </Router>
  );
}
}
   





      {/* <Signup/>

      < Form/> */}



export default App;
