import React from "react";
import "../styles/overlay.scss";

import SideButtonClose from "./SideButtonClose.js";

const Overlay = props => {
  return (
    <div
      className={!props.active ? "overlay" : "overlay overlay--active"}
      onClick={props.handleOpenSidePanel}
    >
      <SideButtonClose active={props.active} handleOpenSidePanel={props.handleOpenSidePanel}/>

      
    </div>
  );
};

export default Overlay;
