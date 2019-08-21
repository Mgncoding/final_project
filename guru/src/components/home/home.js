import React, { Component } from "react";
// import { Link } from "react-router-dom"
import Button from "../button/button";
import Navbar from "../navbar/navbar.component"
import "../home/style.css";

export default class HomePage extends Component {

    state = {

    };

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        this.setState({
        })
    }
    onSubmit(e) {
        e.preventDefault()
    }
    render() {
        return (
            <div className="container">

                <Navbar/>
                <div className="mainBody">

                    <div className="mainContent">
                                              
                        <p className="homebody">
                            Budget Problems? Money seems to just disappear? Now you don't have to worry! Just consult the <b className="boldguru">Finance Guru! </b> 
                            Withing a few minutes, you can have a clear understanding of how much money you have left over after your montly expenses.
                            You are only a few clicks away. Start today!
                        </p>
                        <Button />
                    </div>
                </div>
            </div>
        )
    };
};
