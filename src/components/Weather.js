import React from 'react';
import '../styles/weather.scss'

const Weather = (props) => {
    const {city,temp,temp_min,temp_max,pressure,humidity,wind,sunrise,sunset,status} = props.weather;

    const sunriseHour = new Date(sunrise*1000).toLocaleTimeString();
    const sunsetHour = new Date(sunset*1000).toLocaleTimeString();
    
    let content = (
        <div className="weather">
            <div className="weather__title">Pogoda dla: {city}</div>

            <div className="weather--basic">
                <div className="weather__item">Średnia temperatura: {temp}</div>
                <div className="weather__item">Ciśnienie: {pressure}</div>
                <div className="weather__item">Wilgotność: {humidity}</div>
                <div className="weather__item">Prędkośc wiatru: {wind}</div>
            </div>

            <div className="weather--additional">
                <div className="weather__item">Temperatura minimalna: {temp_min}</div>
                <div className="weather__item">Temperatura maksymalna: {temp_max}</div>
                <div className="weather__item">Wschód słonca: {sunriseHour}</div>
                <div className="weather__item">Zachód słonca: {sunsetHour}</div>
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