import React, { Component } from "react";
// import NumberFormat from 'react-number-format';

export default class FixedExpenses extends Component {
    constructor(props) {
        super(props)

        // this.onChangeRent = this.onChangeRent.bind(this);
        // this.onChangePhone = this.onChangePhone.bind(this);
        // this.onChangeInternet = this.onChangeInternet.bind(this);
        // this.onChangeinsurance = this.onChangeinsurance.bind(this);
        // this.onChangecar = this.onChangecar.bind(this);
        // this.onChangeDisplayTotal = this.onChangeDisplayTotal.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            rent: 0,
            phone: 0,
            internet: 0,
            insurance: 0,
            car:0,
            // displayTotal: 0
        }
    }
    // componentDidMount(){
    //     this.setState({

    //     })
    // }
    // onChangeRent(e) {
    //     this.setState({
    //         rent: e.target.value
    //     })
    // Need to make an empty array and push all the states into the the sumfunction and call the 
    // the function into each input 
      myArray = [];
        myArraypush(state.rent, 
            )
        mySumFunction(myArray) {

        }
    
    handleInputChange = event => {
        const { name, value } = event.target; 

        this.setState({
            [name]: value
        })

    }
    // onChangePhone(e) {
    //     this.setState({
    //         phone: e.target.value
    //     })
    // }
    // onChangeInternet(e) {
    //     this.setState({
    //         internet: e.target.value
    //     })
    // }
    // onChangeinsurance(e) {
    //     this.setState({
    //         insurance: e.target.value
    //     })
    // }
    // onChangecar(e) {
    //     this.setState({
    //         car: e.target.value
    //     })
    // }
    // onChangeDisplayTotal(e) {
    //     this.setState({
    //         displayTotal: e.target.value
    //     })
    // }
    // onSubmit(e) {
    //     e.preventDefault()

    //     const expensesFixed = {
    //         rent: this.state.rent,
    //         phone: this.state.phone,
    //         internet: this.state.internet,
    //         car: this.state.car,
    //         insurance: this.state.insurance,
    //     }
    //     console.log(expensesFixed)
    // }
    handleFormSubmit = event => {
        event.preventDefault()
        
        this.setState({
            rent: 0,
            phone: 0,
            internet: 0,
            insurance: 0,
            car:0,
            // displayTotal: 0

        })
    }
    render() {
        return (
        <div className="container">
            <h2> Your Fixed Expenses</h2>
            
          <form>
            <div className="form-group">
                <label>Monthly Rent/Mortgage: </label>
                <br/>
                <input
                    value={this.state.rent}
                    name="rent"
                    onChange={this.handleInputChange}
                    type="number"
                    placeholder="Monthly Rent/Mortgage">
                        </input>
            </div>
            <div className="form-group">
                <label>Phone Bill: </label>
                <br/>
                <input
                    value={this.state.phone}
                    name="phone"
                    onChange={this.handleInputChange}
                    type="number"
                    placeholder="Phone Bill">
                        </input>

            </div>
            {/* <div className="form-group">
                <label>Car Insurance: </label>
                <br/>
                <input
                    value={this.state.car}
                    name="car insurance"
                    onChange={this.handleInputChange}
                    type="number"
                    placeholder="Car Insurance">
                        </input>
            </div> */}
            <div className="form-group">
                <label>Cable/Internet: </label>
                <br/>
                <input
                    value={this.state.internet}
                    name="internet"
                    onChange={this.handleInputChange}
                    type="number"
                    placeholder="Cable/Internet">
                        </input>
            </div>
            {/* <div className="form-group">
                <label>Rent/Mortgage Insurance: </label>
                <br/>
                <input
                    value={this.state.insurance}
                    name="rent insurance"
                    onChange={this.handleInputChange}
                    type="number"
                    placeholder="Rent/Mortgage Insurance">
                        </input>
            </div> */}
                        
          </form>
          <br/><br/>
            <div className="container">
                <label>Your Total Fixed Expenses</label>
                <input 
                    value={this.state.displayTotal}
                    name="total"
                    onChange={this.handleInputChange}
                    
                    placeholder="Display of Total Inputs">
                    </input>
                    <button onClick={this.handleFormSubmit}>Submit</button>
                    
                    
            </div>
            

            </div>
        
        )
        }
}