import React, { Component } from "react";
import { Link } from "react-router-dom"
import Navbar from "./navbar/navbar.component";
import Card from "./card/index";
import PieChart from "./charts/pie.chart.component";
import "../components/card/style.css";
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
                <div className="profileNav">
                    <Navbar/>
                </div>
                <div className="profileCard">
                    <Card />
                </div>
                <div className="profileButton">
                </div>
                <div className="chartInfo">
                    <h1><PieChart /> </h1>
                </div>
            </div>
        )
    };
};
