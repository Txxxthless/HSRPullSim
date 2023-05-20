import React from "react";
import "./pull-display.css";
import pullvideo from "./images/pull.mp4";

const PullDisplay = ({ isImage, returnHandler }) => {
  const pictureNumber = Math.ceil(Math.random() * 3);

  return (
    <>
      {isImage ? (
        <>
          <div className="image-display">
            <img
              className="img-fluid"
              src={require(`./images/${pictureNumber}.jpg`)}
              alt=""
            />
          </div>
          <button
            className="btn btn-primary main-panel-btn"
            onClick={returnHandler}
          >
            Return to main page
          </button>
        </>
      ) : (
        <video src={pullvideo} autoPlay />
      )}
    </>
  );
};

export default PullDisplay;
