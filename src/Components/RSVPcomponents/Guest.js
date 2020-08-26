import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';

const Guest = props =>

        <form className="rsvpForm">
        <GuestName  isEditing={props.isEditing}
                    handleNameEdits={e => props.setName(e.target.value)}>{props.guestname}</GuestName>
        <label>
        <p className="rsvpcheck">Check box if invitation is Confiremd </p>
            <input  type="checkbox"
                checked={props.isConfirmed}
                onChange={props.handleConfirmation} />

        </label>
        <label>
        <button onClick={props.handleIsEditing}>{props.isEditing ? "save": "edit"}</button>
        <button onClick={props.handleRemove}>remove</button>
        </label>
        </form>

   ;

Guest.propTypes = {
    guestname: PropTypes.string.isRequired,
    guestemail: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleIsEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default Guest;
