import React, { Component } from "react";
// import "./style/fixed.expense.form.css"
import {Link} from "react-router-dom";



export default class FixedExpenses extends Component {

    state = {

        rent: "",
        phone: "",
        internet: "",
        insurance: "",
        car: "",
        displayTotal: ""

    }


    mySumFunction = () => {
        var total = 0
        var myArray = [];
        myArray.push(this.state.rent, this.state.phone, this.state.internet, this.state.insurance, this.state.car
        )
        for (let i = 0; i < myArray.length; i++) {
            if (parseInt(myArray[i]))
                total += parseInt(myArray[i])

        }


        this.setState({ displayTotal: total });

        this.setState({

            rent: "",
            phone: "",
            internet: "",
            insurance: "",
            car: "",
            //displayTotal: ""

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
                <h2> Your Fixed Expenses</h2>

                <form>
                    <div className="form-group">
                        <label>Monthly Rent/Mortgage: </label>
                        <br />
                        <input
                            value={this.state.rent}
                            name="rent"
                            onChange={this.handleInputChange}
                            type="number"
                            placeholder="Monthly Rent/Mortgage">
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Phone Bill: </label>
                        <br />
                        <input
                            value={this.state.phone}
                            name="phone"
                            onChange={this.handleInputChange}
                            type="number"
                            placeholder="Phone Bill">
                        </input>

                    </div>
                    <div className="form-group">
                        <label>Car Insurance: </label>
                        <br />
                        <input
                            value={this.state.car}
                            name="car"
                            onChange={this.handleInputChange}
                            type="number"
                            placeholder="CarInsurance">
                        </input>

                    </div>
                    <div className="form-group">
                        <label>Cable/Internet: </label>
                        <br />
                        <input
                            value={this.state.internet}
                            name="internet"
                            onChange={this.handleInputChange}
                            type="number"
                            placeholder="Cable/Internet">
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Rent Insurance: </label>
                        <br />
                        <input
                            value={this.state.insurance}
                            name="insurance"
                            onChange={this.handleInputChange}
                            type="number"
                            placeholder="Rent Insurance">
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
            <button type="submit" className="btn btn-success"><Link to="/salary" className="nav-link">Back To Salary!</Link>  </button>
            <button type="submit" className="btn btn-success"><Link to="/debt" className="nav-link">Input Debt!</Link>  </button>
            </div>
            </div>

        )
    }
}