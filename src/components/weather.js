import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                <h1>Tempeture: {this.props.temperature}</h1>
                <h2>City: {this.props.city}</h2>
                <h2>Country: {this.props.country}</h2>
                <p>Humidity: {this.props.humidity}</p>
                <p>Decsription: {this.props.description}</p>
            </div>
        )
    }
}

export default Weather;