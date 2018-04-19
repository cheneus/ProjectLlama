import React, { Component } from "react";
import axios from "axios";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Link, Redirect } from "react-router-dom";
import { Card, CardText } from "material-ui/Card";

class RegisterPage extends Component {
  state = {
    redirect: false,
    errors: {},
    name: "",
    email: "",
    password: "",
    message: "",
    formErrors: {email: '', password: '', name: ''},
    emailValid: false,
    passwordValid: false,
    formValid: false
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : "Email is invalid";
        break;
      case "password":
        passwordValid = value.length >= 8;
        fieldValidationErrors.password = passwordValid ? "" : "Minimun of 8 characters";
        break;      
      case "name":
      this.state.name.length != 0
       fieldValidationErrors.name = this.state.name ? "" : "Please Enter a name"
        break;
       default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid

      },
      this.validateForm
    );
  }

  validateForm =() => {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    },
    () => { this.validateField(name, value) }
  );
  };

  registerUser = event => {
    event.preventDefault();
    console.log("working");
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    axios
      .post("/auth/signup", { name, email, password })
      .then(res => {
        this.setState({ message: res.data });
        localStorage.setItem("successMessage", res.data.message);
        if (res.data.success === true) {
          this.setState({ redirect: true });
        }
      })
      .catch(err => {
        console.log(err.response);
        this.setState({ message: err.response.data.message });
      });
  };

  renderMessage = () => {
    const message = this.state.message;
    if (message !== "") {
      if (message.success === false) {
        return <div className="alert alert-danger">{message.message} </div>;
      }
      if (message.success === true) {
        return <div className="alert alert-success">{message.message} </div>;
      }
    }
  };

  render() {
    return (
      <div className="col-lg-6 offset-lg-3">
        {this.state.redirect === false ? (
          <div className="card" style={{ padding: "10px" }}>
            <div className="card-block">
              <h2 className="card-header">Sign Up</h2>
              <form className="form-control">

                <div className="field-line">
                  <TextField
                    floatingLabelText="Name"
                    name="name"
                    errorText={this.state.formErrors.name}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="field-line">
                  <TextField
                    floatingLabelText="Email"
                    name="email"
                    errorText={this.state.formErrors.email}
                    onChange={this.handleInputChange}
                  />
            
                </div>

                <div className="field-line">
                  <TextField
                    floatingLabelText="Password"
                    type="password"
                    name="password"
                    onChange={this.handleInputChange}
                    errorText={this.state.formErrors.password}
                  />
                  
                </div>

                <div className="button-line">
                  <button
                    className="btn"
                    onClick={this.registerUser}
                    disabled={!this.state.formValid}
                  >
                    Sign Up
                  </button>
                </div>

                <CardText>
                  Already have an account? <Link to="/login">Log in</Link>
                </CardText>
              </form>
            </div>
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}

export default RegisterPage;
