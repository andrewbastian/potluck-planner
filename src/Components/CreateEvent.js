import React, { useState } from 'react';
// import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import CreateItems from './CreateItems'
import NavBar from './NavBar'
import Display from './RSVPcomponents/Display'

const CreateEvent = () => {

  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

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
    location: '',
    date: '',
    time: '',
    eventname: '',
    description: '',
    user:'',
    id:''
  });

  // useEffect(() => {
  //   const addEvent = () => {
  //     axios
  //     .post(`https://planthepotluck.herokuapp.com/api/events/`,{ 

  // })
  //     .then(res =>{
  //       console.log('The response data: ', res.data);
  //     })
  //     .catch(err =>{
  //       console.log('Can not post events data');
  //     })
  //   }
  // }, [values] )
  return (
    <div>

      <NavBar />

      <h1>Create an Event!</h1>

      <form className='no-img'>
        <TextField
          id="filled-name"
          label="Location"
          className={classes.textField}
          value={values.location}
          onChange={handleChange('location')}
          margin="normal"
          variant="filled"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date"
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


        <Display />

        <Button type='submit'>Create Event</Button>

      </form>



    </div>
  )
}

export default CreateEvent
