import React, { Component } from 'react';
import update from 'immutability-helper';
import TopHeader from './TopHeader';
import MainContent from './MainContent';

class Display extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        guestname: "Darren Angus",
        guestemail:"darren@darren.com",
        isConfirmed: true,
        isEditing: false,
      },
      {
        guestname: "Andrew Bastain",
        guestemail:"darren@darren.com",
        isConfirmed: false,
        isEditing: false,
      }
    ]
  }


  toggleFilter = () => {
    let prevState = this.state;

    let nextState = update(this.state, {
      isFiltered: {$set: !this.state.isFiltered}
    });

    this.setState( nextState);
  }


  toggleGuestPropertyAt = (property, indexToChange) => {

    let prevState = this.state;

    let nextState = update(this.state.guests, {
        [indexToChange]: {
          [property]: {$set: !this.state.guests[indexToChange][property]}
      }}
    );

    this.setState({guests: nextState});
  }


  toggleConfirmationAt = index => this.toggleGuestPropertyAt('isConfirmed', index);
  toggleEditingAt = index => this.toggleGuestPropertyAt('isEditing', index);


  getTotalInvited = () => this.state.guests.length;


  getAttendingGuests = () => this.state.guests.filter( (guest) => {return guest.isConfirmed === true} );


  getUnconfirmedGuests = () => this.state.guests.filter( (guest) => {return guest.isConfirmed === false});


  setNameAt = (text, index) => {
    let prevState = this.state;

    let nextState = update(this.state.guests, {
      [index]: {
        guestname: {$set: text},
        guestemail: {$set: text}
      }
    });

    this.setState({guests: nextState});
  }


  handleNameInput = (evt) => {

    let prevState = this.state;

    let nextState = update(this.state, {
      pendingGuest: {$set: evt.target.value}
    });

    this.setState(nextState);
  }


  addGuest = (evt) => {
    evt.preventDefault();


    let prevState = this.state;
    let newGuest = {
      guestname: this.state.pendingGuest,
      guestemail: this.state.pendingGuest,
      isEditing: false,
      isConfirmed: false
    }

    let nextState = update(this.state, {
      guests: {$push: [newGuest]},
      pendingGuest: {$set: ""}
    })

    this.setState(nextState);

  }


  removeGuestAt = (index) => {

    let prevState = this.state;

    let nextState = update(this.state.guests, {$splice: [[index, 1]]});

    this.setState({guests: nextState});

  }


  render() {


    return (
      <div className="App">

      <TopHeader
      handleNameInput={this.handleNameInput}
                    pendingGuest={this.state.pendingGuest}
                    addGuest={this.addGuest}></TopHeader>
      <MainContent
              toggleFilter={this.toggleFilter}
              isFiltered={this.state.isFiltered}
              attending={this.getAttendingGuests().length}
              pending={this.getUnconfirmedGuests().length}
              total={this.getTotalInvited()}
              guests={this.state.guests }
              toggleConfirmationAt={this.toggleConfirmationAt}
              toggleEditingAt={this.toggleEditingAt}
              setNameAt={this.setNameAt}
              getAttendingGuests={this.getAttendingGuests}
              removeGuestAt={this.removeGuestAt}
              pendingGuest={this.state.pendingGuest}

      />

    </div>
    );
  }
}

export default Display;
