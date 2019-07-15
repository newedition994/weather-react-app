import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>

                {this.props.city && this.props.country && <h2>Location: {this.props.city}, {this.props.country} </h2>}
                {this.props.tempature && <h1>Temperature: {this.props.temperature}</h1>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.description && <p>Conditions: {this.props.description}</p>}
            </div>
        )
    }
}

export default Weather;