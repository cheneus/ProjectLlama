import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Card, CardTitle } from 'material-ui/Card';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/bootstrap/navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import PrivateRoute from './modules/protected';
import Home from './containers/Home';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import RegisterPage from './containers/RegisterPage';
import DashboardPage from './containers/Dashboard';
// import Login from './components/Login';
import history from './modules/history';
import QuizPage from './containers/QuizPage';
import Footer from './components/bootstrap/Footer'

injectTapEventPlugin();

const App = () => (
  <Router>
    <MuiThemeProvider>
    <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/quiz" component={QuizPage} />
          <Route exact path="/signup" component={RegisterPage} />
          {/* <Route path="/dashboard" component={DashboardPage} /> */}
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </MuiThemeProvider>
  </Router>
);

export default App;
