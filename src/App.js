import React from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/weather";

const API_KEY = process.env.REACT_APP_API_KEY

class App extends React.Component {

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.name.city.value;
    const country = e.target.elements.name.country.value;
    const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log('data')
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
