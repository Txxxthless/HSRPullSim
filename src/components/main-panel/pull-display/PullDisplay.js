import React from "react";
import "./pull-display.css";
import pullvideo from "./images/pull.mp4";

const PullDisplay = ({ isImage, returnHandler }) => {
  const pictureNumber = Math.ceil(Math.random() * 21);

  return (
    <>
      {isImage ? (
        <div className="row justify-content-center">
          <div className="image-display col-8">
            <img
              className="img-fluid"
              src={require(`./images/${pictureNumber}.jpg`)}
              alt=""
            />
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary main-panel-btn"
              onClick={returnHandler}
            >
              Return to main page
            </button>
          </div>
        </div>
      ) : (
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <video className="pull-video" src={pullvideo} autoPlay />
          </div>
        </div>
      )}
    </>
  );
};

export default PullDisplay;
