import React, { Component } from "react";


export default class SalaryInput extends Component {
        

            state = {
            monthlyPay: "",
          
            displayTotal: ""

        }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        
    }
    mySumFunction= () => {
        var total = 0
        var myArray = [];
          myArray.push(this.state.monthlyPay
              )
        for(let i = 0; i < myArray.length; i++) {
            if(parseInt(myArray[i])) 
            total += parseInt(myArray[i])
        }
    this.setState({displayTotal: total});
    

        this.setState({
            
            monthlyPay: "",
            

        })
    
    }
    
    render() {
        return (
            <div className="container">
                <h3> Input Your Salary Information</h3>
                <form>
                    <div className="form-group">
                    <label>Hours Worked</label>
                    <br/>
                    <input
                        value={this.state.monthlyPay}
                        name="monthlyPay"
                        onChange={this.handleInputChange}
                        type="number"
                        placeholder="Hours Worked">
                    </input>
                    </div> <br />
                    
                    <div className="form-group">
                    <button onClick={this.mySumFunction}>Submit</button>
                    <label>Your Total Fixed Expenses</label>


                    <h1>{this.state.displayTotal}</h1>
                    </div>
                </form>
                <div>
                    <button onClick={}>Fixed Expenses</button>
                </div>
            </div>
        )
    }

}