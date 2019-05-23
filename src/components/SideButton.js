import React from "react";
import iconSet from "../selection.json";
import IcomoonReact from "icomoon-react";
import '../styles/sideButton.scss'

const SideButton = props => {
  return (
    <button className="sideButton" onClick={props.handleOpenSidePanel}>
      <IcomoonReact
        iconSet={iconSet}
        className="icon"
        color="#f7f7f7"
        size={"3rem"}
        icon="arrow-right"
      />
    </button>
  );
};

export default SideButton;
