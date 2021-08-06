import React from 'react';

const A = (props) => {
    return (
        <a className="text-indigo-500"
            href={props.href}
            onClick={props.onClick}
            target="_blank">
            {props.children}
        </a>
    )
};

export default A;
