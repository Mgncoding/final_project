
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
import HomePage from "./components/home";
import Signup from './components/signup';
import Button from './components/button/button'
import Navbar from "./components/navbar/navbar.component"
// import Navbar from "./components/navbar/navbar.component"
function App() {
  return (
    <div className="App">
<div>
      <Navbar />
      <div>
        <h1 className="text-center">Finance Guru</h1>
        <h3 className="text-center">
        </h3>
        <h1 className="text-center">
          Budget problems??
                    </h1>
        <p>
          Money seems to just disappear? Now you don't have to worry about it, just consult the guru!. This new app is designed strictly for those wanting to get the most out of their finances and their time. Just follow a couple of steps:
          -Create an account
          -Input your salary into our salary form
          -Input your fixed expenses(expenses that don't fluctuate) into our form
          -Input your variable expenses (trivial expenses that people incur on a daily basis) into our form. You'll be able to add and remove certain expenses respectively.
          -If you have any major debt (most of all do, don't worry) just add it to the Debt form.
          -Go to your profile and you'll be able to see your savings (net worth) in the form of constantly evolving pie charts as well as a report telling you of your current status (green for "ok", red for "not ok").
          Simple enough! Now you can bring balance to your financial life with just a couple of clicks!
                    </p>
        <Button />
      </div>
    </div>


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

      </div>
    </Router>
</div >
  )
}




      {/* <Signup/>

      < Form/> */}



export default App;
