import React from 'react';

const NotFound = props => {
  if (props.butt) {
    console.log('butt');
  }
  return (
    <div>
      <h1>404 not found bro</h1>
    </div>
  );
};

export default NotFound;
