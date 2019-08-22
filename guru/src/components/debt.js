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
                <h1 className="fixedtitle">Any Debt you may have Place here</h1>

                <form className="fixedform">
                <div className="mtginput">
                        <label className="mortgage"> Credit Card One: </label>
                            <br/>
                            <input
                            className="rentclass"
                                value={this.state.creditCard}
                                name="creditCard"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="That first debt starter">
                            </input>
                    </div>
                    <div className="phoneinput">
                        <label className="phone"> Second Credit Card: </label>
                            <br/>
                            <input
                                className="phoneclass"
                                value={this.state.creditCardTwo}
                                name="creditCardTwo"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="That second debt starter">
                            </input>
                    </div>
                    <div className="carinput">
                        <label className="car"> Tuition: </label>
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
                
                    <div className="totaldisplay">
                        <label className="">Your Debt </label>
                        <input classname="totalinput"
                            value={this.state.displayTotal}
                            placeholder="Total display">
                                
                            </input>
                        <button onClick={this.mySumFunction} className="firstbutton">Submit</button>
                </div>
                <div className="changepage">
                        <button type="submit" className="backbutton"><Link to="/fixed" className="linkcolor">Back To Fixed!</Link>  </button>
                        <button type="submit" className="forwardbutton"><Link to="/variable" className="linkcolor2">Your Variable Expenses!</Link>  </button>
                    </div>
                </div>
           
        )
    }

}