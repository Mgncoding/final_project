import React, { Component } from "react";
import { Link } from "react-router-dom"
import HomePage from "../home/home";
import LoginForm from "../../login";
import "../navbar/nav.css"


export default class Navbar extends Component {
    constructor() {
        super();
        
        this.state = {
            isSkipped: true,
            message: 'React Navbar'
        }
    }
    
    toggleSkipped = () => {
        this.setState({ isSkipped: !this.state.isSkipped });
    }

    
    render() {function NavLink({ children, link }) {
        return (
            <a href={ link }>{ children }</a>
        )
    }
    function Navbar({ children }) {
        const mappedChildren = React.Children.map(children, (child) => {
            if (child.props.skip) {
                return;
            }
            return child;
        });
        return (
            <nav>
                { mappedChildren }
            </nav>
        )
    }
        const designatedUrl = '#';
        const { message } = this.state;
        return (
            <div className="welcome-container">
                <h1 className="title is-1">
                    <img src={require("../navbar/logo.png")}></img>
                </h1>
                <div className="nav-container">
                    <Navbar>
                        <NavLink
                            link={designatedUrl}
                        >
                            Link 1
                        </NavLink>
                        <NavLink
                            link={designatedUrl}
                        >
                            Link 2
                        </NavLink>
                        <NavLink
                            skip={this.state.isSkipped}
                            link={designatedUrl}
                        >
                            Link 3
                        </NavLink>
                        <NavLink
                            link={designatedUrl}
                        >
                            Link 4
                        </NavLink>
                        <NavLink
                            link={designatedUrl}
                        >
                            Link 5
                        </NavLink>
                    </Navbar>
                    <hr/>
                    <button className="button" onClick={this.toggleSkipped}>
                        Toggle Link 3
                    </button>
                </div>
            </div>
        );
    }
}
