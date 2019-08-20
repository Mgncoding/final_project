import React, {Component} from "react";
import "../../src/signup.css"



const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
  



class Signup extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          firstName: null,
          lastName: null,
          email: null,
          password: null,
          formErrors: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          }
        };
      }
    
      handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          console.log(`
            --SUBMITTING--
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Password: ${this.state.password}
          `);
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
      };
    
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "firstName":
            formErrors.firstName =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          case "lastName":
            formErrors.lastName =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
          case "password":
            formErrors.password =
              value.length < 6 ? "minimum 6 characaters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };
render() {
    const { formErrors} = this.state;
return(

    <div className="wrapper">
        <div className="form-wrapper">
            <h1>Create Account</h1>
            <form action="/submit" method="post" onSubmit={this.handleSubmit} noValidate>

                <div className="firstName">
                <label htmlFor="firstName"></label>
                <input 
                type="text"
                className=""
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
                />
                </div>

                <div className="lastName">
                <label htmlFor="lastName"></label>
                <input 
                type="text"

                className=""

                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
                />
                </div>
        
                <div className="email">
                <label htmlFor="email"></label>
                <input 
                type="text"

                className=""
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
                />
                </div>

                <div className="password">
                <label htmlFor="password"></label>
                <input 
                type="text"
                placeholder="Password"
                className=""
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
                />
                </div>

                <div className="createAccount">


                    <button type="submit">Create Account</button>

                    <small>Already Have an Account?</small>
                </div>
            </form>
        </div>
    </div>

)

}
}

export default Signup;