import React, { Component } from "react";
import "./signup.css";
import {Link} from "react-router-dom";


export default class DisplayFinal extends Component {
    state = {

        salary: "",
        fixed: "",
        debt: "",
        variable: "",
        displayTotal: ""

    }
    mySumFunction = () => {
        var total = 0
        var myArray = [];
        myArray.push(this.state.rent, this.state.salary, this.state.fixed, this.state.debt, this.state.variable
        )
        for (let i = 0; i < myArray.length; i++) {
            if (parseInt(myArray[i]))
                total += parseInt(myArray[i])

        }


        this.setState({ displayTotal: total });

        this.setState({

            salary: "",
            fixed: "",
            debt: "",
            variable: "",
      
        })

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })

    }


    render() {
        return (
            <div className="container">
                
                    <h1 className="fixedtitle">Savings Plan</h1>
                    <form className="fixedform">
                        <div className="mtginput">
                            <label className="mortgage">Total Salary: </label>
                            <br />
                            <input
                            
                                className="rentclass"
                                value={this.state.salary} 
                                name="salary"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Total Salary">
                            </input>
                        </div>
                        <div className="phoneinput">
                            <label className="phone">Total Fixed: </label>
                            <br />
                            <input
                                className="phoneclass"
                                value={this.state.fixed}
                                name="fixed"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Total Fixed">
                            </input>

                        </div>
                        <div className="carinput">
                            <label className="car">Total Debt: </label>
                            <br />
                            <input
                                value={this.state.debt}
                                name="debt"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Total Debt">
                            </input>

                        </div>
                        <div className="cableinput">
                            <label className="cable">Total Variable Expenses: </label>
                            <br />
                            <input
                                value={this.state.variable}
                                name="variable"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Total Variable Expenses">
                            </input>
                        </div>
                       

                    </form>
                    <br /><br />
                    <div className="totaldisplay">
                        <label className="">Your Budget</label>
                        <input classname="totalinput"
                            value={this.state.displayTotal}
                            placeholder="Total display">
                                
                            </input>
                        <button onClick={this.mySumFunction} className="firstbutton">Submit</button>
                    

                    </div>
                    <div className="changepage">
                        <button type="submit" className="backbutton"><Link to="/variable" className="linkcolor">Back To Salary!</Link>  </button>
                        <button type="submit" className="forwardbutton"><Link to="/profile" className="linkcolor2">Your Profile!</Link>  </button>
                    </div>
                    
                </div>
            

               
        )
    }
}
