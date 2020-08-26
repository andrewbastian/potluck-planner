
import React, { Component } from 'react';
import './App.css'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import authenticationActions from './actions/authenticationActions'
import authenticationService from './services/authenticationService'
import NavBar from './Components/NavBar';
import CreateEvent from './Components/CreateEvent';
import Admin from './Components/DisplayCards/Admin';
import Guest from './Components/DisplayCards/Guest';

const Auth = new authenticationService();


class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="App-header">
                <h2>Welcome {this.props.user.username}</h2>
            </div>
            <NavBar/>
            <Route path='/create_event' component={CreateEvent}/>
            <h1 className="cardName">Admin Card</h1>
            <Admin />
            <h1 className="cardName">Guest Card</h1>
            <Guest />
            </div>
    );
  }

  handleLogout() {
    Auth.Logout();
    this.props.history.replace('/login_page');
  }
}

export default authenticationActions(App);
