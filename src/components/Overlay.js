import React from "react";
import "../styles/overlay.scss";

const Overlay = props => {
    console.log(props.active);
    console.log(props.active ? "overlay" : "overlay--active");
  return (
    <div
    //   className="overlay overlay--active"
      className={!props.active ? "overlay" : "overlay overlay--active"}
      onClick={props.handleOpenSidePanel}
    />
  );
};

export default Overlay;
