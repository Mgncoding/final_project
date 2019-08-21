import React, { Component } from " react";
import Button from "./button/button"



// Here you would want to put any positive cashflow you may have after filling out the previous forms. 
// You can split up your positive cashflow or bulk it all into one fund.

export default class Savings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emergency = "",
            vacation = "",
            automobile = "",
            christmas = "",

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
                emergency: "",
                vacation: "",
                automobile: "",
                christmas: ""


            })
        }
    }
    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>A Plan for the Future</h1>


                    <form>
                        <div className="form-group">
                            <label> Emergency: </label>
                            <br />
                            <input
                                value={this.state.emergency}
                                name="emergency"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Emergency Fund">
                            </input>
                        </div>
                        <div className="form-group">
                            <label> Vacation: </label>
                            <br />
                            <input
                                value={this.state.vacation}
                                name="vacation"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="Emergency Fund">
                            </input>
                        </div>
                        <div className="form-group">
                            <label> Automobile: </label>
                            <br />
                            <input
                                value={this.state.automobile}
                                name="automobile"
                                onChange={this.handleInputChange}
                                type="number"
                                placeholder="A New Car? Maybe repair on current car">
                            </input>
                        </div>
                        <div className="form-group">
                            <label> Christmas </label>
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
                    <div className="container">
                        <button type="submit" className="btn btn-success"><Link to="/profile" className="">Back To Salary!</Link>  </button>

                    </div>
                </div>
            </div>
        )
    }
}