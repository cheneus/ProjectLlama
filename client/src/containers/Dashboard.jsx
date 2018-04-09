import React, {Component} from 'react';
import axios from 'axios';
import Auth from '../modules/auth';
import { Link, Redirect } from 'react-router-dom';
import Profile from '../components/Profile';
import { Card } from 'material-ui/Card';

class DashboardPage extends Component {
    state = {
      secretData: '',
      userData: {},
      token: '',
      message: '',
    };

    getProfile = () => {
      const token = Auth.getToken();
      const config = {
        headers: {
          Authorization: `bearer ${Auth.getToken()}`,
          'x-access-token': Auth.getToken(),
        },
        token,
      };
      axios.get('/profile/', config)
        .then((res, req) => {
          this.setState({ userData: res.data.user });
        })
        .catch(err => {
          this.setState({token: ''})
        });
    }
  
     deAuth = (event) => {
      event.preventDefault()
      Auth.deauthenticateUser()
      this.setState({token: ""})
    }
    

  componentWillMount() {
    this.setState({ token: localStorage.getItem('token') });
  }
  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    this.getProfile()
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <div className="container" style={{ padding: '10px' }}>
        {this.state.token === '' ? (
          <Redirect to="/login" />
    ) : (
      <Profile userData={this.state.userData} onLogOut={this.deAuth} />
    )}
      </div>

    );
  }
}

export default DashboardPage;
