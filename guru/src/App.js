
import HomePage from "./components/home/home.js";


import Form from "./components/create.account";
import Account from "./components/account";
import HomePage from "./components/home/home.js";
import Signup from './components/signup';
import Profile from "./components/profile.page";
import Navbar from "./components/navbar/navbar.component"


import React from "react";



import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/home";

import React from "react";



import { BrowserRouter as Router, Route } from "react-router-dom";


import FixedExpenses from "../src/components/fixed.expenses"

 



function App() {
  return (
    <div className="App">

      {/* <Navbar/>
      {/* < Form/>
      < Account/> */}
      {/* <HomePage/> */}
      {/* <Signup/>
      < Form/>
      <Profile/> */}

      {/* <FixedExpenses /> */}
        {/* <Test /> */}
      {/* < Form/>
      < Account/> */}
      {/* <HomePage/> */}

    <Router>
      <div>
   

    <h1 className="text-center">Finance Guru</h1>
    
     <Route path="/" exact component={HomePage} />
     <Route path="/signup" component = {Signup} />
    </div>
    </Router>
    </div>
  );
}






export default App;
