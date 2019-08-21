import React, { Component } from "react";
import "../components/style/variable.expense.css"
import { Link } from "react-router-dom"


export default class VariableExpenses extends Component {


    state = {
        groceries: "",
        entertainment: "",
        clothing: "",
        eatingOut: "",
        carRepairs: "",
        display: ""

    }

    mySumFun = () => {
        var total = 0
        var myArray = [];
        myArray.push(this.state.groceries, this.state.entertainment, this.state.clothing, this.state.eatingOut, this.state.carRepairs
        )
        for (let i = 0; i < myArray.length; i++) {
            if (parseInt(myArray[i]))
                total += parseInt(myArray[i])


        }
        this.setState({ display: total });

        this.setState({
            groceries: "",
            entertainment: "",
            clothing: "",
            eatingOut: "",
            carRepairs: "",

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
                    <h1><strong>Your Variable Expenses</strong></h1>
                    

                    <form>
                        <div className="form-group">
                            <label>Groceries: </label>
                            <br />
                            <input
                                className="inputs"
                                value={this.state.groceries}
                                name="groceries"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Monthly Rent/Mortgage">
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Entertainment: </label>
                            <br />
                            <input
                                className="inputs"
                                value={this.state.entertainment}
                                name="entertainment"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Entertainment">
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Clothing: </label>
                            <br />
                            <input
                                className="inputs"
                                value={this.state.clothing}
                                name="clothing"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Clothing">
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Eat Out: </label>
                            <br />
                            <input
                                className="inputs"
                                value={this.state.eatingOut}
                                name="eatingOut"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Eating out">
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Car Repairs: </label>
                            <br />
                            <input
                                className="inputs"
                                value={this.state.carRepairs}
                                name="carRepairs"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Car Maintenance">
                            </input>
                        </div>
                    </form>
                    <br />
                    <div className="container">
                        <button onClick={this.mySumFun}>Submit</button>
                        <label>Your Total Fixed Expenses</label>

                        <h1>{this.state.display}</h1>


                    </div>
                    <div>
                        <button type="submit" className="btn btn-success"><Link to="/debt" className="nav-link">Back to Debt!</Link>  </button>
                    </div>
                </div>
            </div>
        )
    }
}

