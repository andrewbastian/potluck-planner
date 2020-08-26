import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import CreateGuest from './CreateGuest'
import CreateItems from './CreateItems'

import NavBar from './NavBar'
import AdminCard from './DisplayCards/AdminCard'
import Display from './RSVPcomponents/Display'

const CreateEvent = (props) => {

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const {eventname, description, date, time, user, id, location} = props;

  const handleDateChange = date => {
      setSelectedDate(date);
    };

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

    const handleChange = location => event => {
      setValues({ ...values, [location]: event.target.value });
    };
    const classes = useStyles();
      const [values, setValues] = React.useState({
        location: 'Location',
      });
    const [events, setEvents] =useState([])

  useEffect(()=>{
    if (props){
      setEvents ([...events, props]);

    }
  },[props]);
  return (
    <div>

      <NavBar />

      <h1>Create an Event!</h1>

<form className ='no-img'>
  <TextField
   id="filled-name"
   label="Location"
   className={classes.textField}
   value={values.location}
   onChange={handleChange('location')}
   margin="normal"
   variant="filled"
 />
 <TextField
  id="filled-name"
  label="eventname"
  className={classes.textField}
  value={values.eventname}
  onChange={handleChange('eventname')}
  margin="normal"
  variant="filled"
/>
<br></br>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
      <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>

      <CreateItems />


      <CreateGuest />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={classes.button}
        onClick={this.handleFormSubmit}
      >
        Submit Potluck
      </Button>

  </form>

      {/* {events.map((events, key) => (
             <AdminCard key={key}
                            name={events.eventname}
                            description={events.description}
                            date={events.eventdate}
                            time={events.eventtime}
                            user={events.username}
                            id={events.eventid}
                            location={events.location}
                            /> */}

      ))}
    </div>
  )
}

export default withStyles(CreateEvent);
