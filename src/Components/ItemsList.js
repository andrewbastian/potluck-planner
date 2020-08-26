import React from 'react';

const ItemsList = (props) => {

  console.log('props', props);
  return (<div>

    <p>
      Item
      <br></br>
      {props.item.item}
    </p>

    <p>
      Needed
      <br></br>
      {props.item.amountNeeded}
    </p>

    <p>
      Note
      <br></br>
      {props.item.note}
    </p>

    <button>Edit</button>

  </div>);
};

export default ItemsList
