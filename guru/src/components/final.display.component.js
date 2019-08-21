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
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Savings Plan</h1>
                    <form>
                        <div className="form-group">
                            <label>Total Salary: </label>
                            <br />
                            <input
                                value={this.state.salary}
                                name="salary"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Total Salary">
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Total Fixed: </label>
                            <br />
                            <input
                                value={this.state.fixed}
                                name="fixed"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Total Fixed">
                            </input>

                        </div>
                        <div className="form-group">
                            <label>Total Debt: </label>
                            <br />
                            <input
                                value={this.state.debt}
                                name="debt"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Total Debt">
                            </input>

                        </div>
                        <div className="form-group">
                            <label>Total Variable Expenses: </label>
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
                    <div className="container">
                        <button onClick={this.mySumFunction}>Submit</button>
                        <label>Your Total Fixed Expenses</label>

                        <h1>{this.state.displayTotal}</h1>

                    </div>
                    <div>
                        <button type="submit" className="btn btn-success"><Link to="/salary" className="">Back To Salary!</Link>  </button>
                        <button type="submit" className="btn btn-success"><Link to="/debt" className="">Input Debt!</Link>  </button>
                    </div>
                </div>
            </div>

               
        )
    }
}
