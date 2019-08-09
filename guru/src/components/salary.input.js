import React, { Component } from "react";

export default class SalaryInput extends Component {
    constructor(props) {
        super(props)

        this.onChangeHoursWorked = this.onChangeHoursWorked.bind(this)
        this.onChangeHourlyPay = this.onChangeHourlyPay.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            hoursWorked: 0,
            hourlyPay: 0,

        }
    }
    onChangeHoursWorked(e) {
        this.setState({
            hoursWorked: e.target.value
        })
    }
    onChangeHourlyPay(e) {
        this.setState({
            hourlyPay: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const expense = {
            hoursWorked: this.state.hoursWorked,
            hourlyPay: this.state.hourlyPay
        }
        console.log(expense)
    }
    render() {
        return (
            <div className="container">
                <h3> Input Your Salary Information</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Hours Worked: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.hoursWorked}
                            onChange={this.onChangeHoursWorked}>
                        </select>
                    </div> <br />
                    <div className="form-group">
                        <label>Hourly Pay: </label>
                        <input type="number"
                            className="form-control"
                            value={this.state.hourlyPay}
                            onChange={this.onChangeHourlyPay}
                        />
                    </div> <br />
                    <div className="form-group">
                        <input type="submit" value="Create new Expense" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}