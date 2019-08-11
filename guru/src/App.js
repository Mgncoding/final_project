import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
import HomePage from "./components/home";
import Signup from './components/signup';
// import Button from './components/button/button'
// import Navbar from "./components/navbar/navbar.component"
// import { sign } from "crypto";
// import Navbar from "./components/navbar/navbar.component"
class App extends Component {
  render (){ 
  
  return (
    <Router>
      
    <div className="container">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/signup">Create Account</a></li>
    </ul>

    <h1 className="text-center">Finance Guru</h1>
    
    <Route path="/" exact component={HomePage} />
    <Route path="/signup" component = {Signup} />
    </div>
    </Router>
  );
}
}
   





export default App;
