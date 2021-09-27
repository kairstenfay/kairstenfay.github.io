import React from "react";

/* Credit to https://jameshfisher.com/2017/08/30/how-do-i-make-a-full-width-iframe/
 * for the clever CSS aspect ratio scaling hack. */
const YouTubeIFrame = (props) => {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
    <iframe
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      src={props.src}
      title="YouTube video player"
      border="0"
      loading="lazy"
      allowFullScreen
    />
  </div>
  );
};

export default YouTubeIFrame;
