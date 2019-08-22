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
            <div className="container">
                {/* <div className="form-wrapper"> */}
                    <h1 className="fixedtitle"><strong>Your Variable Expenses</strong></h1>
                    

                    <form className="fixedform">
                        <div className="mtginput">
                            <label className="mortgage">Groceries: </label>
                            <br />
                            <input
                                className="rentclass"
                                value={this.state.groceries}
                                name="groceries"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Monthly Rent/Mortgage">
                            </input>
                        </div>
                        <div className="phoneinput">
                            <label className="phone">Entertainment: </label>
                            <br />
                            <input
                                className="phoneclass"
                                value={this.state.entertainment}
                                name="entertainment"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Entertainment">
                            </input>
                        </div>
                        <div className="carinput">
                            <label className="car">Clothing: </label>
                            <br />
                            <input
                                // className="inputs"
                                value={this.state.clothing}
                                name="clothing"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Clothing">
                            </input>
                        </div>
                        <div className="cableinput">
                            <label  className="cable">Eat Out: </label>
                            <br />
                            <input
                                // className="inputs"
                                value={this.state.eatingOut}
                                name="eatingOut"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Eating out">
                            </input>
                        </div>
                        <div className="rentinput">
                            <label className="rentinsurance">Car Repairs: </label>
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
                    <div className="totaldisplay">
                        <label className="">Your Total Variable Expenses</label>
                        <input classname="totalinput"
                            value={this.state.displayTotal}
                            placeholder="Total display">
                                
                            </input>
                        <button onClick={this.mySumFun} className="firstbutton">Submit</button>
                    
                            </div>
                    <div>
                        <button type="submit" className="backbutton"><Link to="/debt" className="linkcolor">Back to Debt!</Link>  </button>
                        <button type="submit" className="forwardbutton"><Link to="/profile" className="linkcolor2">Profile!</Link>  </button>


                    </div>
                {/* </div> */}
            </div>
        )
    }
}

