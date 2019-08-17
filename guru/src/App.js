import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import HomePage from "./components/home/home"
import Signup from "./components/signup"
import FixedExpenses from "./components/fixed.expenses"
 

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
  );
}

export default App;
