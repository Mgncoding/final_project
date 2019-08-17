import React, { Component } from "react";

export default class SalaryInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hoursWorked: "",
            hourlyPay: "",

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
            hoursWorked: "",
            hourlyPay: ""
        })
    }
    render() {
        return (
            <div className="container">
                <h3> Input Your Salary Information</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Hours Worked</label>
                    <br/>
                    <input
                        value={this.state.hoursWorked}
                        name="hoursWorked"
                        onChange={this.handleInputChange}
                        type="number"
                        placeholder="Hours Worked">
                    </input>
                    </div> <br />
                    <div className="form-group">
                    <label>Groceries: </label>
                    <br/>
                    <input
                        value={this.state.hourlyPay}
                        name="hourlyPay"
                        onChange={this.handleInputChange}
                        type="number"
                        placeholder="Hourly Pay">
                    </input>
                    </div> <br />
                    <div className="form-group">
                        <button onClick={this.handleFormSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}