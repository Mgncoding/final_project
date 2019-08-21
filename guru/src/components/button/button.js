import React, { Component } from "react";
import { Link } from "react-router-dom"
import "../button/button.css"

export default class Button extends Component {
    // constructor(props) {
    //     super(props)
    //     this.onSubmit = this.onSubmit.bind(this);
    // }
   
    render() {
        return (
            <div>
                <button type="submit" className="submitButton"><Link to="/login" className="startbutton">Start Now!</Link>  </button>
                    
                   
            </div>
        )
    };
};