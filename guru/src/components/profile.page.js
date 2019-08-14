import React, { Component } from "react";
// import { Link } from "react-router-dom"
// import Navbar from "./navbar/navbar.component";
import Card from "./card/index";

export default class Profile extends Component {

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
            <div>
                <div>
                    <Card />
                </div>
                <div>
                    <button type="submit" onClick={(e) => { e.preventDefault(); this.clicked(); }} className="btn btn-success">
                        My Budget
                    </button>
                </div>
                <div>
                    <h1>Chart goes here, my dudes!!</h1>
                </div>
            </div>
        )
    };
};
