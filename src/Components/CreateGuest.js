import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage, withFormik } from 'formik';
import * as Yup from 'yup';
import GuestList from './GuestList';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function CreateGuest({status}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    guestname: '',
    guestemail: '',
  });

  const handleChange = guestname => event => {
    setValues({ ...values, [guestname]: event.target.value });
  };


  const [guests, setGuests] = useState([]);

  useEffect(() => {
    if (status) {
      setGuests([...guests, status]);

    }
  }, [status]);
  const addGuest = (e) => {
    this.setState((prevState) => ({
      guests: [...prevState.guests, {guestname:"", guestemail:""}],
    }));
  }
  const handleSubmit = (e) => { e.preventDefault() }
  return (

    <div>


      <form className ='no-img' onSubmit={values.handleSubmit} onChange={values.handleChange}>
        <TextField
         id="filled-name"
         label="guestname"
         className={classes.textField}
         value={values.guestname}
         onChange={handleChange('guestname')}
         margin="normal"
         variant="filled"
       />
       <TextField
        id="filled-name"
        label="guestemail"
        className={classes.textField}
        value={values.guestemail}
        onChange={handleChange('guestemail')}
        margin="normal"
        variant="filled"
      />
      <Button onClick={values.setGuests}>add Guest</Button>
     </form>
     {guests.map(user => (
       <GuestList user={user} key={user.guestemail} />
      ))}
    </div>
  );
};
