import React from 'react';

const Nav = props => {
  return (
    <nav className="grid justify-center bg-white h-screen fixed p-2 border-r border-gray-100 border-solid">
      <ul className="grid grid-cols-1">
        {props.children.map((li, i) => {
          return (
            <li key={`li_${i}`}>
              {li}
            </li>
          )
        })}
      </ul>
    </nav>
  )
};

export default Nav;
