import React, { Component } from "react";


export default class VariableExpenses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            groceries: 0,
            entertainment: 0,
            clothing: 0,
            eatingOut: 0,
            carRepairs: 0,
            display:0
            
        }
    }
    mySumFun(myArray) {
         total = 
        myArray = [];
          myArray.push(this.state.groceries, this.state.entertainment, this.state.clothing, this.state.eatingOut, this.state.carRepairs
              )
        for(let i = 0; i < myArray.length; i++) {
            if(parseInt(myArray[i].value)) 
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
            groceries: "",
            entertainment: "",
            clothing: "",
            eatingOut: "",
            carRepairs: "",
            display: ""
        })
    }
    render() {
        return (
            <div className="container">
                <h3><strong>Your Variable Expenses</strong></h3>
                    <h6>plan your expense on a monthly bases</h6>

                <form>
                <div className="form-group">
                    <label>Groceries: </label>
                    <br/>
                    <input
                        value={this.state.groceries}
                        name="groceries"
                        onChange={this.handleInputChange}
                        type="number"
                        placeholder="Monthly Rent/Mortgage">
                    </input>
            </div>
            <div className="form-group">
                <label>Entertainment: </label>
                    <br/>
                    <input
                        value={this.state.entertainment}
                        name="entertainment"
                        onChange={this.handleInputChange}
                        type="number"
                        placeholder="Entertainment">
                    </input>
            </div>
            <div className="form-group">
                <label>Clothing: </label>
                <br/>
                    <input
                        value={this.state.clothing}
                        name="clothing"
                        onChange={this.handleInputChange}
                        type="number"
                        placeholder="Clothing">
                    </input>
            </div>
            <div className="form-group">
                <label>Eat Out: </label>
                <br/>
                    <input
                        value={this.state.eatingOut}
                        name="eatingOut"
                        onChange={this.handleInputChange}
                        type="number"
                        placeholder="Eating out">
                    </input>
            </div>
            <div className="form-group">
                <label>Car Repairs: </label>
                <br/>
                    <input
                        value={this.state.carRepairs}
                        name="carRepairs"
                        onChange={this.handleInputChange}
                        type="number"
                        placeholder="Car Maintenance">
                    </input>
            </div>
                </form>
                <br/>
                <div className="container">
                <label>Your Total Fixed Expenses</label>
                <input 
                     value={this.state.display}
                     name="display"
                     onChange={this.handleInputChange}
                        
                     placeholder="Display of Total Inputs">
                </input>
                    <button onClick={this.mySumFun()}>Submit</button>
                    
                    
            </div>
            </div>
        )
    }
}

