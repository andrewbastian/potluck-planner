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

class registerPage extends Component {
constructor() {
  super();

  this.state = {
    email: '',
    password: '',
    username: '',
    hasAgreed: false
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.Auth = new authenticationService();
}
componentWillMount(){
  if (this.Auth.loggedIn())
    this.props.history.replace('/')
}

handleChange(e) {
  let target = e.target;
  let value = target.type === 'checkbox' ? target.checked : target.value;
  let name = target.name;

  this.setState({
    [name]: value
  });
}

handleSubmit(e) {
  e.preventDefault();

  this.Auth.register(this.state.username, this.state.password, this.state.email)
    .then(res => {
      this.props.history.replace('/');
    })
    .catch(err => {
      alert(err);
    })
}

render() {
  return (
    <div>
    <h1 style={customHead}>Register</h1>

      <form onSubmit={this.handleSubmit}>


        <input type="text" placeholder="Enter your username" name="username" value={this.state.username} onChange={this.handleChange} />

        <input type="password" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />

        <input type="email" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />

        <button value="SUBMIT" type="submit">Sign Up</button>

        <Link to="/login_page" style={linkColor}>I'm already member</Link>

      </form>
    </div>
  );
}
}
export default registerPage;
