import React from 'react';

const Weather = (props) => {
    return (
        <div>
            {props.city && props.country && <h2>Location: {props.city}, {props.country} </h2>}
            {props.tempature && <h1>Temperature: {props.temperature}</h1>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p>Conditions: {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    );
}

export default Weather;