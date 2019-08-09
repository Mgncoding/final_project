import React, { Component } from "react";

export default class FixedExpenses extends Component {
    constructor(props) {
        super(props)

        this.onChangeRent = this.onChangeRent.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeInternet = this.onChangeInternet.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            rent: 0,
            phone: 0,
            internet: 0,
            fixedList: []
        }
    }
    componentDidMount(){
        this.setState({

        })
    }
    onChangeRent(e) {
        this.setState({
            rent: e.target.value
        })
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }
    onChangeInternet(e) {
        this.setState({
            internet: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault()

        const expensesFixed = {
            rent: this.state.rent,
            phone: this.state.phone,
            internet: this.state.internet
        }
        console.log(expensesFixed)
    }
    render() {
        return (
            <div></div>
        )
    }
}