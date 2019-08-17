import React, { Component } from "react";
// import "./style/fixed.expense.form.css"
// import NumberFormat from 'react-number-format';

//Import math function 
export default class FixedExpenses extends Component {

        state = {

            rent: "",
            phone: "",
            internet: "",
            insurance: "",
            car:"",
            displayTotal: ""

        }
    // Need to make an empty array and push all the states into the the sumfunction and call the 
    // the function into each input 

    
    mySumFunction= () =>  {
        var total = 0
        var myArray = [];
          myArray.push(this.state.rent, this.state.phone, this.state.internet, this.state.insurance, this.state.car
              )
        for(let i = 0; i < myArray.length; i++) {
            if(parseInt(myArray[i])) 
            total += parseInt(myArray[i])


        }


        this.setState({displayTotal: total});

        this.setState({

            rent: "",
            phone: "",
            internet: "",
            insurance: "",
            car:"",
            //displayTotal: ""

        })

      }
  //add all user inputs and display # on displayTotal
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        
    }

    // handleFormSubmit = event => {
    //     event.preventDefault()

    //     this.setState({

    //         rent: "",
    //         phone: "",
    //         internet: "",
    //         insurance: "",
    //         car:"",
    //         displayTotal: ""

    //     })
    // }

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
                    {/* <input
                        //value={this.state.displayTotal}
                        name="total"
                        //onChange={this.handleInputChange}

                        placeholder="Display of Total Inputs">
                    </input> */}
                   


                    
                    
            </div>
         
            </div>

        )
    }
}