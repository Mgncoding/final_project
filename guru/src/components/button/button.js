import React, { Component } from "react";
// import { Link } from "react-router-dom"

export default class Button extends Component {
    // constructor(props) {
    //     super(props)
    //     this.onSubmit = this.onSubmit.bind(this);
    // }
   
    render() {
        return (
            <div>
                <button type="submit" onClick={ (e) =>{e.preventDefault(); this.clicked();}} className="btn btn-success">
                    Start Now!!
                </button>
            </div>
        )
    };
};