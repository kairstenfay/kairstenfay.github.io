import React from 'react';

const A = (props) => {
    return (
        <a className="text-indigo-500 text-xl"
            href={props.href}
            onClick={props.onClick}
            target="_blank"
            rel="noreferrer"
            >
        {props.children}
        </a>
    )
};

export default A;
