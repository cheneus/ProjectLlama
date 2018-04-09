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
  
    changePass = () => {
      const token = Auth.getToken();
      const config = {
        headers: {
          Authorization: `bearer ${Auth.getToken()}`,
          'x-access-token': Auth.getToken(),
        },
        token
      }
      axios.post("/profile/changepass", config)
        .then((res, req) => {
          console.log("res.data");
          console.log(res.data);
          this.setState({ userData: res.data.user });
        })
        .catch(err => {
          console.log(err);
          console.log(err.message);
          this.setState({ token: "" });
        });
    }

    getProfile = () => {
      const token = Auth.getToken();
      const config = {
        headers: {
          Authorization: `bearer ${Auth.getToken()}`,
          'x-access-token': Auth.getToken(),
        },
        token,
      };
      console.log(this.state.userData);
      axios.get('/profile/', config)
        .then((res, req) => {
          console.log("res.data")
          console.log(res.data);
          this.setState({ userData: res.data.user });
        })
        .catch(err => {
          console.log(err)
          console.log(err.message)
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
    // const token = Auth.getToken();
    // const config = {
    //   headers: {
    //     Authorization: `bearer ${Auth.getToken()}`,
    //     'x-access-token': Auth.getToken(),
    //   },
    //   token,
    // };
    // console.log(this.state.userData);
    // axios.get('/profile', config)
    //   .then((res, req) => {
    //     console.log(res);
    //     this.setState({ userData: res.data.user });
    //   })
    //   .catch(err => console.log(err));
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
      <Profile userData={this.state.userData} onLogOut={this.deAuth} changePass={this.changePass}/>
    )}
      </div>

    );
  }
}

export default DashboardPage;
