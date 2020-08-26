import React from 'react'

const GuestList = (props) => {

  return (

    <div>


      <p> Name
        <br></br>
        {props.user.guestname}
      </p>

      <p> Email
        <br></br>
        {props.user.guestemail}
      </p>

      <button>Edit</button>

    </div>
  );
};

export default GuestList
