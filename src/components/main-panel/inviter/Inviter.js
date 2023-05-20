import React from "react";

const Inviter = ({ pullClickHandler }) => {
  return (
    <>
      <h3>Wellcome!</h3>
      <h3 style={{ marginBottom: "50px" }}>
        Press the button to start a pull!
      </h3>
      <button
        className="btn btn-primary main-panel-btn"
        onClick={pullClickHandler}
      >
        Pull!
      </button>
    </>
  );
};

export default Inviter;
