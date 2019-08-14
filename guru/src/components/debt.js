import React, { Component } from  "react"; 

export default class DebtForm extends Component {
    constructor(props) {
        super(props)

        this.onChangeCreditCard = this.onChangeCreditCard.bind(this);
        this.onChangeCreditCardTwo = this.onChangeCreditCardTwo.bind(this);
        this.onChangeTuition = this.onChangeTuition.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            creditCard: 0,
            creditCardTwo: 0,
            tuition: 0,
        
        }
    }
    componentDidMount() {
        this.setState({

        })
    }
    onChangeCreditCard(e) {
        this.setState({
            creditCard: e.target.value
        })
    }
    onChangeCreditCardTwo(e) {
        this.setState({
            creditCardTwo: e.target.value
        })
    }
    onChangeTuition(e) { 
        this.setState({
            tuition: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault()

        const miscExpenses = {
            creditCard: this.state.creditCard,
            creditCardTwo: this.state.creditCardTwo,
            tuition: this.state.tuition
        }
        console.log(miscExpenses)

    }
    render() {
        return (
            <div></div>
        )
    }

}