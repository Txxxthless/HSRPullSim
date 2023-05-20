import React from "react";
import "./main-panel.css";
import Inviter from "./inviter/Inviter";
import PullDisplay from "./pull-display/PullDisplay";
import { useState } from "react";

const MainPanel = () => {
  const [isPull, setIsPull] = useState(false);
  const [isImage, setIsImage] = useState(false);

  const pullClickHandler = async () => {
    setIsPull(true);
    setTimeout(() => {
      setIsImage(true);
    }, 15300);
  };

  const returnHandler = () => {
    setIsPull(false);
    setIsImage(false);
  };

  return (
    <div className="main-panel">
      {isPull ? (
        <PullDisplay isImage={isImage} returnHandler={returnHandler} />
      ) : (
        <Inviter pullClickHandler={pullClickHandler} />
      )}
    </div>
  );
};

export default MainPanel;
