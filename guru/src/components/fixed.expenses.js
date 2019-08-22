import React, { Component } from "react";
import "./style/fixed.expense.form.css"
import { Link } from "react-router-dom";



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
                {/* <div className="thewrapper"> */}
                {/* <div className="form-wrapper"> */}
                    <h1 className="fixedtitle"> Your Fixed Expenses</h1>

                    <form className="fixedform">
                        <div className="mtginput">
                            <label className="mortgage">Monthly Rent/Mortgage: </label>
                            <br />
                            <input
                            className="rentclass"
                                value={this.state.rent}
                                name="rent"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Monthly Rent/Mortgage">
                            </input>
                        </div>
                        <div className="phoneinput">
                            <label className="phone">Phone Bill: </label>
                            <br />
                            <input
                            className="phoneclass"
                                value={this.state.phone}
                                name="phone"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Phone Bill">
                            </input>

                        </div>
                        <div className="carinput">
                            <label className="car"> Car Insurance: </label>
                            <br />
                            <input
                                value={this.state.car}
                                name="car"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="CarInsurance">
                            </input>

                        </div>
                        <div className="cableinput">
                            <label className="cable">Cable/Internet: </label>
                            <br />
                            <input
                                value={this.state.internet}
                                name="internet"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Cable/Internet">
                            </input>
                        </div>
                        <div className="rentinput">
                            <label className="rentinsurance">Rent Insurance: </label>
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
                    {/* <div className="container"> */}
                        <button onClick={this.mySumFunction}>Submit</button>
                        <label className="totalfixed">Your Total Fixed Expenses</label>

                        <h1>{this.state.displayTotal}</h1>

                    {/* </div> */}
                    <div>
                        <button type="submit" className="btn btn-success"><Link to="/salary" className="">Back To Salary!</Link>  </button>
                        <button type="submit" className="btn btn-success"><Link to="/debt" className="">Input Debt!</Link>  </button>
                    </div>
                {/* </div> */}
                 {/* </div> */}
            </div>

        )
    }
}