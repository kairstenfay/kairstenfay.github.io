import React from 'react';

const P = (props) => {
  return (
    <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
      {props.children}
    </p>
  )};

export default P;
