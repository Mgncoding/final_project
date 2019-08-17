import React, { Component } from "react";
import "./style/fixed.expense.form.css"
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
            rent: "",
            phone: "",
            internet: "",
            insurance: "",
            car:"",
            displayTotal: ""
        }
    }
    // Need to make an empty array and push all the states into the the sumfunction and call the 
    // the function into each input 
    mySumFunction(myArray) {
        var total = 
        myArray = [];
          myArray.push(this.state.rent, this.state.phone, this.state.internet, this.state.insurance, this.state.car, this.state.displayTotal
              )
        for(let i = 0; i < myArray.length; i++) {
            if(parseInt(myArray[i].value)) 
            total += parseInt(myArray[i].value)


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
            rent: "",
            phone: "",
            internet: "",
            insurance: "",
            car:"",
            displayTotal: ""

        })
    }
    render() {
        return (
        <div className="container">
            <h2 className="title"> Your Fixed Expenses</h2>
            
          <form className="formStyle">
            <div className="form-group">
                <label className="options">Monthly Rent/Mortgage: </label>
               
                <input
                    value={this.state.rent}
                    name="rent"
                    onChange={this.handleInputChange}
                    type="number"
                    placeholder="Monthly Rent/Mortgage">
                        </input>
            </div>
            <div className="form-group">
                <label className="options">Phone Bill: </label>
                
                <input
                    value={this.state.phone}
                    name="phone"
                    onChange={this.handleInputChange}
                    type="number"
                    placeholder="Phone Bill">
                        </input>

            </div>
            {/* <div className="form-group">
                <label className="options">Car Insurance: </label>
               
                <input
                    value={this.state.car}
                    name="car"
                    onChange={this.handleInputChange}
                    type="number"
                    placeholder="Car Insurance">
                        </input>
            </div> */}
            <div className="form-group">
                <label className="options">Cable/Internet:        </label>
                
                <input className="textEnter"
                    value={this.state.internet}
                    name="internet"
                    onChange={this.handleInputChange}
                    type="number"
                    placeholder="Cable/Internet">
                        </input>
            </div>
            {/* <div className="form-group">
                <label className="options">Rent/Mortgage Insurance: </label>
            
                <input
                    value={this.state.insurance}
                    name="insurance"
                    onChange={this.handleInputChange}
                    type="number"
                    placeholder="Rent/Mortgage Insurance">
                        </input>
            </div> */}
                        
          </form>
          <br/><br/>
            <div className="container">
                <label className="finalDisplay">Your Total Fixed Expenses</label>
                <input className="final"
                    value={this.state.displayTotal}
                    name="total"
                    onChange={this.handleInputChange}
                    
                    placeholder="Display of Total Inputs">
                    </input>
                    <button className="expenseSubmit" onClick={this.mySumFunction()}>Submit</button>
                    
                    
            </div>
            

            </div>
        
        )
        }
}