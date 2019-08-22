import React, { Component } from "react";
import {Link} from "react-router-dom";



// Here you would want to put any positive cashflow you may have after filling out the previous forms. 
// You can split up your positive cashflow or bulk it all into one fund.

export default class Savings extends Component {
   

        state = {
            emergency: "",
            vacation: "",
            automobile: "",
            christmas: "",
            displayTotal: ""

        }
        handleInputChange = event => {
            const { name, value } = event.target;
            this.setState({
                [name]: value
            })
    
        }
        mySumFunction = () => {
            var total = 0
            var myArray = [];
            myArray.push(this.state.emergency, this.state.vacation, this.state.automobile, this.state.christmas
            )
            for (let i = 0; i < myArray.length; i++) {
                if (parseInt(myArray[i]))
                    total += parseInt(myArray[i])
    
            }
    
    
            this.setState({ displayTotal: total });
    
            this.setState({
    
                emergency: "",
                vacation: "",
                automobile: "",
                christmas: "",
                
               
    
            })
    
        }
    
    render() {
        return (
            <div className="container">
                {/* <div className="form-wrapper"> */}
                    <h1 className="fixedtitle">A Plan for the Future</h1>


                    <form className="fixedform">
                        <div className="mtginput">
                            <label className="mortgage"> Emergency: </label>
                            <br />
                            <input
                                className="rentclass"
                                value={this.state.emergency}
                                name="emergency"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Emergency Fund">
                            </input>
                        </div>
                        <div  className="phoneinput">
                            <label className="phone"> Vacation: </label>
                            <br />
                            <input
                                className="phoneclass"
                                value={this.state.vacation}
                                name="vacation"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Emergency Fund">
                            </input>
                        </div>
                        <div className="carinput">
                            <label className="car"> Automobile: </label>
                            <br />
                            <input
                                value={this.state.automobile}
                                name="automobile"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="A New Car? Maybe repair on current car">
                            </input>
                        </div>
                        <div className="cableinput">
                            <label className="cable"> Christmas </label>
                            <br />
                            <input
                                value={this.state.christmas}
                                name="christmas"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="That Sweet Holiday fund">
                            </input>
                        </div>
                    </form>
                    <div className="totaldisplay">
                        <label className="">Your Future Plan</label>
                        <input classname="totalinput"
                            value={this.state.displayTotal}
                            placeholder="Total display">
                                
                            </input>
                        <button onClick={this.mySumFunction} className="firstbutton">Submit</button>
                    
                            </div>
                    <div className="changepage">
                        <button type="submit" className="backbutton"><Link to="/profile" className="linkcolor">Your Profile!</Link>  </button>
                        {/* <button type="submit" className="forwardbutton"><Link to="/debt" className="linkcolor2">Input Debt!</Link>  </button> */}
                    </div>
                    
                {/* </div> */}
            </div>
        )
    }
}