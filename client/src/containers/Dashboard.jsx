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
      err: '',
      newInfo: {
        password:'',
        email: ''
      },
      chgPassState:false
    };

    showChgPass = (event) => {
      event.preventDefault()
      this.setState({chgPassState: !this.state.chgPassState})
      console.log(this.state.chgPassState)
    }
  
    changePass = (event) => {
      event.preventDefault()
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

    confirmPass = (event) => {
      event.preventDefault()
      if (this.state.newInfo.password !== event.target.value) {
        this.setState({err:"Please Confirm Password" })
      }
      else {
        this.setState({err:''})
      }
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
    
    getNewInfo = (event) => {
      event.preventDefault()
      const field = event.target.name;
      const newInfo = this.state.newInfo;
      newInfo[field] = event.target.value;
      console.log(event.target.value)
      this.setState({
        newInfo,
      });
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
      // maybe making a method would be better?
      <Profile userData={this.state.userData} onLogOut={this.deAuth} onChangePass={this.showChgPass} chgPassState={this.state.chgPassState} onChange={this.getNewInfo} confirmPass={this.confirmPass}
      err={this.state.err}/>
    )}
      </div>

    );
  }
}

export default DashboardPage;
