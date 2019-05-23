import React from "react";
import "../styles/sidePanel.scss";
import iconSet from "../selection.json";
import IcomoonReact from "icomoon-react";

const SidePanel = props => {
  console.log(props.weather);
  let content;

  if (props.weather) {
    content = props.weather.map(current => (
      <div key={current.dt} className="foreCast">
        <div>Pogoda na dzień: {current.dt_txt.split(' ')[0]}</div>
        <div>Temperatura:{current.main.temp}</div>
        <div>Ciśnienie: {current.main.pressure}</div>
        <div>Wilgotność: {current.main.humidity}</div>
        <div>Prędkość wiatru: {current.wind.speed}</div>
      </div>
    ));
  }

  return (
    <div className={props.active ? "sidePanel sidePanel--active" : "sidePanel"}>
      {props.weather && content}
      <button className="sidePanel--button" onClick={props.handleOpenSidePanel}>
        <IcomoonReact iconSet={iconSet} className="icon" color="#2f84ea" size={"4.5rem"} icon="arrow-left"/>
      </button>
    </div>
  );
};

export default SidePanel;
