import React from 'react';
import PropTypes from 'prop-types';




const PendingGuest = props => {

    if(props.guestemail && props.guestname){
        return (
            <label className="pending">
                <span >{props.guestname}</span>
                <span >{props.guestemail}</span>
          </label>
        );
    }

    return null;

}






PendingGuest.propTypes = {
    guestemail: PropTypes.string.isRequired,
    guestname: PropTypes.string.isRequired,
}

export default PendingGuest;
