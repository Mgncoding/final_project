import React, { Component } from "react";
import { Link } from "react-router-dom"
// import Navbar from "./navbar/navbar.component";
import Card from "./card/index";
import PieChart from "./charts/pie.chart.component"

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
                <button type="submit" className="btn btn-success"><Link to="/salary" className="nav-link">Start my Budget Now!</Link>  </button>

                </div>
                <div>
                    <h1><PieChart /> </h1>
                </div>
            </div>
        )
    };
};
