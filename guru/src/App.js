import React from 'react';
import './App.css';
import Form from "./components/create.account";
import Account from "./components/account";
import HomePage from "./components/home";
import Signup from './components/signup';
import Navbar from "./components/navbar/navbar.component"



function App() {
  return (
    <div className="App">

      {/* < Form/>
      < Account/> */}
      <HomePage/>


      <Signup/>

      < Form/>

    </div>
  );
}

export default App;
