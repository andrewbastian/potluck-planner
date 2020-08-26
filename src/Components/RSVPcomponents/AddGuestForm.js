import React from 'react';




const AddGuestForm = props =>
    <form onSubmit={props.addGuest}>
        <h2>Add a Guest</h2>
        <input type="text"
                value={props.pendingGuest.guestname}
                placeholder="Guest's Name"
                onChange={props.handleNameInput} />
                <input type="text"
                        value={props.pendingGuest.guestemail}
                        placeholder="Guest's Email"
                        onChange={props.handleNameInput} />
        <button type="submit"
                name="submit"
                value="submit"
                    >Add Guest</button>





    </form>
;


export default AddGuestForm;
