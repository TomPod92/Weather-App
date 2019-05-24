import React from "react";
import "../styles/sidePanel.scss";
import iconSet from '../selection.json'
import IcomoonReact from 'icomoon-react'

const SidePanel = props => {
  let content;

  if (props.weather) {
    content = props.weather.map(current => (
      <div key={current.dt} className="foreCast">
        <div>Pogoda na dzień: {current.dt_txt.split(' ')[0]}</div>
        <div>
          <IcomoonReact iconSet={iconSet} color="#fff" size={'2rem'} icon="thermometer" className="iconInline"/>
          Temperatura: {Math.round(current.main.temp)}&#176;C
        </div>
        <div>
          <IcomoonReact iconSet={iconSet} color="#000" size={'2rem'} icon="download2" className="iconInline"/>
          Ciśnienie: {current.main.pressure}hPa
          </div>
        <div>
          <IcomoonReact iconSet={iconSet} color="#000" size={'2rem'} icon="droplet" className="iconInline--bigMargin"/>
          Wilgotność: {current.main.humidity}%
          </div>
        <div>
          <IcomoonReact iconSet={iconSet} color="#000" size={'2rem'} icon="wind" className="iconInline"/>
          Prędkość wiatru: {current.wind.speed}m/s
          </div>
      </div>
    ));
  } else {
    content= (<div className="info">Wyszukaj pogodne na kolejne dni</div>)
  }

  return (
    <div className={props.active ? "sidePanel sidePanel--active" : "sidePanel"}>
      {content}
    </div>
  );
};

export default SidePanel;
