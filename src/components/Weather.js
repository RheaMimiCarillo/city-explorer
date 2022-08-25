import React from 'react';
import WeatherDay from './WeatherDay';
import '../styles/Weather.css';

class Weather extends React.Component
{
  render()
  {
    return(
      <>
        <WeatherDay
          weatherList={this.props.weatherList}
        />
      </>
    );
  }
}

export default Weather
