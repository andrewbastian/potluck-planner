import React from 'react';
import AddGuestForm from './AddGuestForm';
const TopHeader = props => {

    return (
        <header>                        
            <AddGuestForm           
                        handleNameInput={props.handleNameInput}
                        pendingGuest={props.pendingGuest}
                        addGuest={props.addGuest} />
        </header>

    )
}
   

export default TopHeader;