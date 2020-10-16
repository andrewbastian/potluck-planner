import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authenticationService from '../services/authenticationService';

const linkColor = {
  color: 'black', 
  background:'white',
  borderRadius: '3px'
}

const customHead = {
  backgroundColor: 'black',
  fontSize: '80px',
  width: '50%',
  margin: 'auto',
  marginTop: '5%',
  borderRadius: '10px'
}

class loginPage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new authenticationService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn())
      this.props.history.replace('/');
  }

  render() {
    return (
      <div>
        <div>
          <h1 style={customHead}>Login</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input
              className="form-item"
              placeholder="Username goes here..."
              name="username"
              type="text"
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Password goes here..."
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <button value="SUBMIT" type="submit">Log In</button>
            <Link to="/register" style={linkColor}>Not a member?</Link>
          </form>

        </div>

      </div>
    );
  }

  handleFormSubmit(e) {

    e.preventDefault();

    this.Auth.login(this.state.username, this.state.password)
      .then(res => {
        this.props.history.replace('/');
      })
      .catch(err => {
        alert(err);
      })
  }

  handleChange(e) {

    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }
}
export default loginPage
