import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


import authenticationService from '../services/authenticationService'
const Auth = new authenticationService();

const styles = {


  root: {
    flexGrow: 1,
    width: '100%'
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

// const NavBar = (props) => {
class NavBar extends Component {

  render(props) {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary" elevation={4}>
          <Toolbar>


            <h1 variant="title" color="inherit" className={classes.flex} justifyContent="center">
              Potluck Planner
          </h1>

            <Button component={NavLink} to="/create_event" color="default">Create Event</Button>
            <Button component={NavLink} to="/" color="default">My Potlucks</Button>
            <Button onClick={this.handleLogout.bind(this)}>Logout</Button>


          </Toolbar>
        </AppBar>

      </div>
    )
  }
  handleLogout = async event => {
    await Auth.logout();
    this.props.history.push("/login_page");
  }
}
export default withRouter(withStyles(styles)(NavBar));
