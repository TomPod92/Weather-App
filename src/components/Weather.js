import React from 'react';
import '../styles/weather.scss'

import iconSet from '../selection.json'
import IcomoonReact from 'icomoon-react'

const Weather = (props) => {
    const {city,temp,temp_min,temp_max,pressure,humidity,wind,sunrise,sunset,status} = props.weather;

    const sunriseHour = new Date(sunrise*1000).toLocaleTimeString();
    const sunsetHour = new Date(sunset*1000).toLocaleTimeString();
    
    let content = (
        <div className="weather">
            <div className="weather__title">Pogoda dla: {city}</div>

            <div className="weather--basic">
                <div className="weather__item">
                    <IcomoonReact iconSet={iconSet} color="#2f84ea" size={'2rem'} icon="thermometer" className="iconInline"/>
                    Średnia temperatura: {Math.round(temp)}&#176;C
                </div>
                <div className="weather__item">
                    <IcomoonReact iconSet={iconSet} color="#2f84ea" size={'2rem'} icon="download2" className="iconInline"/>
                    Ciśnienie: {pressure}hPa
                    </div>
                <div className="weather__item">
                    <IcomoonReact iconSet={iconSet} color="#2f84ea" size={'2rem'} icon="droplet" className="iconInline"/>
                    Wilgotność: {humidity}%
                    </div>
                <div className="weather__item">
                    <IcomoonReact iconSet={iconSet} color="#2f84ea" size={'2rem'} icon="wind" className="iconInline"/>
                    Prędkośc wiatru: {wind}m/s
                    </div>
            </div>

            <div className="weather--additional">
                <div className="weather__item">Temperatura minimalna: {Math.round(temp_min)}&#176;C</div>
                <div className="weather__item">Temperatura maksymalna: {Math.round(temp_max)}&#176;C</div>
                <div className="weather__item">
                    <IcomoonReact iconSet={iconSet} color="#2f84ea" size={'2rem'} icon="sun" className="iconInline"/>
                    Wschód słonca: {sunriseHour}
                    </div>
                <div className="weather__item">
                    <IcomoonReact iconSet={iconSet} color="#2f84ea" size={'2rem'} icon="moon" className="iconInline"/>
                    Zachód słonca: {sunsetHour}
                    </div>
            </div>

            <button className="button button--weather" onClick={props.handleForeCast}>Pogoda na kolejne dni</button> 
        </div>
    );

    return ( 
        <>
            {status ? content : <div className="info">Coś poszło nie tak :( <br/> Nie mam w bazie: {city}</div>}
        </>
     );
}
 
export default Weather;