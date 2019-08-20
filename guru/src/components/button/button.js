import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Button extends Component {
    // constructor(props) {
    //     super(props)
    //     this.onSubmit = this.onSubmit.bind(this);
    // }
   
    render() {
        return (
            <div>
                <button type="submit" className="btn btn-success"><Link to="/login" className="nav-link">Start Now!</Link>  </button>
                    
               

                
            </div>
        )
    };
};