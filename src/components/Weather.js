import React from 'react';

const Weather = (props) => {
    const {city,temp,temp_min,temp_max,pressure,humidity,wind,sunrise,sunset,status} = props.weather;

    let content = (
        <>
            <div>Pogoda dla: {city}</div>
            <div>Średnia temperatura: {temp}</div>
            <div>Temperatura minimalna: {temp_min}</div>
            <div>Temperatura maksymalna: {temp_max}</div>
            <div>Ciśnienie: {pressure}</div>
            <div>Wilgotność: {humidity}</div>
            <div>Prędkośc wiatru: {wind}</div>
            <div>Wschód słonca: {sunrise}</div>
            <div>Zachód słonca: {sunset}</div>
            <button onClick={() => {props.fun1(); props.fun2();}}>Pogoda na kolejne dni</button>
        </>
    );

    

    return ( 
        <div>
            {status ? content : <div>Coś poszło nietak</div>}
        </div>
     );
}
 
export default Weather;