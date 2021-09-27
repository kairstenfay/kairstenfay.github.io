import React from 'react';

const Card = (props) => {
  return (
    <div className="md:p-8 p-2 bg-white rounded-md max-w-lg min-w-m">
        <a href={props.href} target="_blank" rel="noreferrer">
            {props.cover}
        </a>

        <p className="text-indigo-500 font-semibold text-base mt-2">
            {props.section}
        </p>
        <a href={props.href} target="_blank" rel="noreferrer">
            <h2 className="font-bold text-gray-900 leading-none text-xl mt-1 capitalize">
                {props.title}
            </h2>
        </a>
        <div className="max-w-full">
            {props.children }
        </div>
    </div>
    );
}

export default Card;
