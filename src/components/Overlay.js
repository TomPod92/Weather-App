import React from "react";
import "../styles/overlay.scss";

const Overlay = props => {
  return (
    <div
      className={!props.active ? "overlay" : "overlay overlay--active"}
      onClick={props.handleOpenSidePanel}
    />
  );
};

export default Overlay;
