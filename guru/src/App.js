import React from 'react';
import './App.css';
import Form from "./components/create.account";
import Account from "./components/account";
import HomePage from "./components/home";
import Signup from './components/signup';
import Profile from "./components/profile.page";
import Navbar from "./components/navbar/navbar.component"



function App() {
  return (
    <div className="App">

      < Form/>
      < Account/>
      <HomePage/>
      <Signup/>
      < Form/>
      <Profile/>

    </div>
  );
}

export default App;
