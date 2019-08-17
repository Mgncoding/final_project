import React, { Component } from "react";
// import NumberFormat from 'react-number-format';

export default class FixedExpenses extends Component {
    constructor(props) {
        super(props)


        this.state = {
            rent: 0,
            phone: 0,
            internet: 0,
            insurance: 0,

            car:0,
            displayTotal: 0
        }
    }
    // Need to make an empty array and push all the states into the the sumfunction and call the 
    // the function into each input 
    mySumFunction(myArray) {
        var total = 
        myArray = [];
          myArray.push(this.state.rent, this.state.phone, this.state.internet, this.state.insurance, this.state.car, this.state.displayTotal
              )
        for(let i = 0; i < myArray.length; i++) {
            if(parseInt(myArray[i].value)) 
            total += parseInt(myArray[i].value)


        }

      }
   
    
        }
    }

    mySumFunction(myArray) {
        var total = 0;
        myArray = [];
        myArray.push(this.state.rent, this.state.phone, this.state.internet, this.state.insurance, this.state.car
        )
        for (let i = 0; i < myArray.length; i++) {
            if (parseInt(myArray[i].value))
                total += parseInt(myArray[i].value)
        }
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()

        this.setState({
            rent: 0,
            phone: 0,
            internet: 0,
            insurance: 0,

            car:0,
            displayTotal: 0

       


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
                    <label>Your Total Fixed Expenses</label>
                    <input
                        value={this.state.displayTotal}
                        name="total"
                        onChange={this.handleInputChange}

                        placeholder="Display of Total Inputs">
                    </input>
                    <button onClick={this.mySumFunction()}>Submit</button>

                    
                    
            </div>
         
            </div>

        )
    }
}