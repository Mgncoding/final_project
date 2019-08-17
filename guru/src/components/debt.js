import React, { Component } from  "react"; 
import Button from "./button/button"

export default class DebtForm extends Component {
    constructor(props) {
        super(props)



        this.state = {
            creditCard: "",
            creditCardTwo: "",
            tuition: "",
        
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
                creditCard: "",
                creditCardTwo: "",
                tuition: "",

            })
        }
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
                        <Button />
                </div>
            </div>
        )
    }

}