import React from 'react';

const Page = props => {
  return (
    <div
      className="m-5 place-items-center"
      style={{display: props.isVisible ? "grid" : "none"}}>
        <h2 className="text-3xl text-indigo-500 font-bold m-2">
          {props.title}
        </h2>
      {props.children}
    </div>
  )
}

export default Page;
