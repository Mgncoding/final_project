import React from "react";
// import Form from "./components/create.account";
// import Account from "./components/account";
// import HomePage from "./components/home/home.js";
// import Signup from './components/signup';
// import Profile from "./components/profile.page";
// import Navbar from "./components/navbar/navbar.component"
import FixedExpense from "./components/fixed.expenses"


// import { BrowserRouter as Router, Route } from "react-router-dom";

// import Form from "./components/savings";

function App() {
  return (
    <div className="App">
    <FixedExpense />

    {/* <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signUp" component={Signup} />
         <Route exact path = "/form" component={}/> 

         <h1 className="text-center">Finance Guru</h1>
    
            <Route path="/" exact component={HomePage} /> 
          <Route path="/signup" component = {Signup} /> 
     </div> 
     </Router>  */}
     </div>
  );
}

   






export default App
