import React, { Component } from  "react"; 
// import axios from "axios";
import {Link} from "react-router-dom"
export default class DebtForm extends Component {
    



        state = {
            creditCard: "",
            creditCardTwo: "",
            tuition: "",
            displayTotal: ""
        
        }

        mySumFunction= () =>  {
            var total = 0
            var myArray = [];
              myArray.push(this.state.creditCard, this.state.creditCardTwo, this.state.tuition
                  )
            for(let i = 0; i < myArray.length; i++) {
                if(parseInt(myArray[i])) 
                total += parseInt(myArray[i])
 
    
            }
    
            // axios.post("http://localhost:3000", myArray)
            // .then(res => console.log(res.data));

            this.setState({displayTotal: total});
    
            this.setState({
    
                creditCard: "",
                creditCardTwo: "",
                tuition: "",
                
    
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
                <h3>Any Debt you may have Place here</h3>

                <form>
                <div className="form-group">
                        <label> Credit Card One: </label>
                            <br/>
                            <input
                                value={this.state.creditCard}
                                name="creditCard"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="That first debt starter">
                            </input>
                    </div>
                    <div className="form-group">
                        <label> Second Credit Card: </label>
                            <br/>
                            <input
                                value={this.state.creditCardTwo}
                                name="creditCardTwo"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="That second debt starter">
                            </input>
                    </div>
                    <div className="form-group">
                        <label> Tuition: </label>
                            <br/>
                            <input
                                value={this.state.tuition}
                                name="tuition"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="That School debt">
                            </input>
                    </div>
                </form>
                <div className="container">
                <button onClick={this.mySumFunction}>Submit</button>
                    <label>Your Total Fixed Expenses</label>


                    <h1>{this.state.displayTotal}</h1>
                </div>
                <div>
                <button type="submit" className="btn btn-success"><Link to="/fixed" className="nav-link">Back to Fixed!</Link>  </button>
                <button type="submit" className="btn btn-success"><Link to="/variable" className="nav-link">Your Variable Expenses!</Link>  </button>
                </div>
            </div>
        )
    }

}