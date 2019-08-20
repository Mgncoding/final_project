import React, { Component } from "react";
import { Link } from "react-router-dom"
import HomePage from "../home/home";
import LoginForm from "../../login";

export default class Navbar extends Component {
    render() {
        return (

            <div className="container">
            <nav className="navbar navbar-dark bg-dark navbar-extend-lg">
                {/* <Link to="/" className="navbar-brand">Finance Guru</Link> */}
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            
                            <Link to="/examples" className="nav-link">Examples</Link> 
                        </li>
                        <li className="navbar-item">
                            
                            <Link to="/" className="nav-link">Home</Link> 
                        </li>
                        <li className="navbar-item">
                            
                             <Link to="/login" className="nav-link">Login</Link> 

                        </li>
                    </ul>
                </div>
            </nav>

           
            </div>
        )
    }
};


