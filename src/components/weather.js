import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                <h2>Location: {this.props.city}, {this.props.country} </h2>
                <h1>Tempeture: {this.props.temperature}</h1>
                <p>Humidity: {this.props.humidity}</p>
                <p>Conditions: {this.props.description}</p>
            </div>
        )
    }
}

export default Weather;