import React, { Component } from "react";
import {Link} from "react-router-dom";

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
                <div className="col-md-4">
                <h1 className="fixedtitle"> Input Your Salary Information</h1>
                <form className="fixedform">
                    <div className="mtginput">
                    <label className="mortgage">Total Income</label>
                    <br/>
                    <input
                        className="rentclass"
                        value={this.state.monthlyPay}
                        name="monthlyPay"
                        onChange={this.handleInputChange}
                        type="number"
                        placeholder="Hours Worked">
                    </input>
                    </div> <br />
                    
                   
                </form>
                </div>
                <div className="totaldisplay">
                        <label className="">Monthly Salary</label>
                        <input classname="totalinput"
                            value={this.state.displayTotal}
                            placeholder="Total display">
                                
                            </input>
                        <button onClick={this.mySumFunction} className="firstbutton">Submit</button>
                    
                            </div>
                
                <div className="changepage">
                        <button type="submit" className="backbutton"><Link to="/fixed" className="linkcolor">Fixed Expense</Link>  </button>
                        <button type="submit" className="forwardbutton"><Link to="/profile" className="linkcolor2">Back To Profile</Link>  </button>
                    </div>
            </div>
        )
    }

}