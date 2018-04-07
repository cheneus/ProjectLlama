import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Card } from 'material-ui/Card';
import LoginForm from '../components/LoginForm';
import Dashboard from '../containers/Dashboard';
import Auth from '../modules/auth';
import axios from 'axios';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }
    // set the initial component state
    this.state = {
      redirect: false,
      errors: {},
      successMessage,
      token: '',
      user: {
        email: '',
        password: '',
      },
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    // const email = encodeURIComponent(this.state.user.email);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;
    console.log('=========');
    console.log(formData);
    console.log('=========');
    // create an AJAX request
    axios.post('/auth/login', formData,
    ).then((res) => {
      console.log(typeof res.data.token);
      const user = JSON.stringify(res.data.user);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('usrname', user);
      console.log(localStorage);
      this.setState({ token: res.data.token });
      this.setState({redirect: true})
    }).catch((err) => {
      console.log(err.response);
      localStorage.clear()
      this.setState({errors: err.response.data})
    });
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  }
  /**
   * Render the component.
   */
  render() {
    return (

      <div className="col-lg-6 offset-lg-3">
        {this.state.redirect === false ? (
          <LoginForm onSubmit={this.processForm}onChange={this.changeUser}errors={this.state.errors}successMessage={this.state.successMessage} user={this.state.user} />) : (
            // <Dashboard />
            <Redirect to='/dashboard' />
      )}

      </div>

    );
  }
}

export default LoginPage;
