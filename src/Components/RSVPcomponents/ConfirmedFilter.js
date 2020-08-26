import React from 'react';




const ConfirmedFilter = props => 
<div>

<h2 className="inviteHead">Invitees</h2>
<label>
    <p className="rsvpcheck">Check the box to hide those who are not confirmed</p>
    <input type="checkbox" 
        onChange={props.toggleFilter}
        checked={props.isFiltered}/> 


</label>

</div>;
export default ConfirmedFilter;