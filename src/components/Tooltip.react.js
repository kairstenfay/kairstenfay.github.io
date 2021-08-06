import React from 'react';


const Tooltip = props => (
  <div
    style={{
      display: props.isShown ? "block" : "none",
      left: `${props.coordinates[0]}px`,
      top: `${props.coordinates[1]}px`,
    }}
    className={`
      delay-75
      ${props.color}
      absolute
      bg-indigo-500
      bg-opacity-90
      p-2
      rounded-sm
      ml-10
      text-xl
      font-bold
      text-white
      `}
    >
    {props.text}
  </div>
);

export default Tooltip;
