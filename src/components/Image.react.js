import React from "react";

const Image = (props) => {
  return (
    <img
      className="rounded-md w-full"
      src={props.src}
      alt={props.alt}
      target="_blank"
    />
  );
};

export default Image;
