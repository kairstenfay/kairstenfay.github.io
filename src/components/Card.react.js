import React from 'react';

const Card = (props) => {
  return (
    <div className="md:p-8 p-2 bg-white rounded-md">
        <a href={props.href} target="_blank" rel="noreferrer">
            <img
            className="rounded-md w-full"
            src={props.img}
            alt={props.alt}
            target="_blank"
            />
        </a>

        <p className="text-indigo-500 font-semibold text-base mt-2">
            {props.section}
        </p>
        <a href={props.href} target="_blank" rel="noreferrer">
            <h2 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize">
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
