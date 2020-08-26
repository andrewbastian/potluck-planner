import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authenticationService from '../services/authenticationService';

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
          <h1>Login</h1>
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
            <Link to="/register">Not a member?</Link>
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
