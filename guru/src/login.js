import React from "react";
import "./login.css"

import { Link } from "react-router-dom"

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    const { email, password } = this.state;
    return (
        <div className="container">
        <div className="wrapper">
        <div className="form-wrapper">
      <form onSubmit={this.handleSubmit}>
        <label className = "emailtext" htmlFor="email">Email</label>
        <input className="email"
          name="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor="email" className="passwordtext">Password</label>
        <input
        className="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
        />
                <button type="submit" className="btn btn-success"><Link to="/profile" className="nav-link">Login</Link>  </button>
        
      </form>
      </div>
      </div>
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("Submitting");
    console.log(this.state);
  };
}

export default LoginForm;