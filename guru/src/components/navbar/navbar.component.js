import React, { Component } from "react";

// import { Link } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-extend-lg">
                {/* <Link to="/" className="navbar-brand">Finance Guru</Link> */}
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            Budgets:
                            {/* <Link to="/" className="nav-link">Examples</Link> */}
                        </li>
                        <li className="navbar-item">
                            Home:
                            {/* <Link to="/create" className="nav-link">Log In</Link> */}
                        </li>
                        <li className="navbar-item">
                            Profile:
                            {/* <Link to="/user" className="nav-link"></Link> */}
                        </li>
                    </ul>
                </div>
            </nav>
        )
    };
};


import { Link } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-extend-lg">
                <Link to="/" className="navbar-brand">Finance Guru</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Examples</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/signUp" className="nav-link">Log In</Link>
                        </li>
                        <li className="navbar-item">
                            {/* <Link to="/user" className="nav-link"></Link> */}
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


// import { Link } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-extend-lg">
                {/* <Link to="/" className="navbar-brand">Finance Guru</Link> */}
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            {/* <Link to="/" className="nav-link">Examples</Link> */}
                        </li>
                        <li className="navbar-item">
                            {/* <Link to="/create" className="nav-link">Log In</Link> */}
                        </li>
                        <li className="navbar-item">
                            {/* <Link to="/user" className="nav-link"></Link> */}
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


