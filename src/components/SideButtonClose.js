import React from "react";
import iconSet from "../selection.json";
import IcomoonReact from "icomoon-react";
import "../styles/sideButtonClose.scss";

const SideButtonClose = props => {
  return (
    <button
      className={!props.active ? "buttonClose" : "buttonClose buttonClose--active"}
      onClick={props.handleOpenSidePanel}
      active={props.sidePanelOpen}
    >
      <IcomoonReact
        iconSet={iconSet}
        className="icon"
        color="#fff"
        size={"3rem"}
        icon="arrow-left"
      />
    </button>
  );
};

export default SideButtonClose;
