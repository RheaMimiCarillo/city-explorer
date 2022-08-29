import React from 'react';
import WeatherDay from './WeatherDay';
import '../styles/Weather.css';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component
{


  render()
  {
    let weatherDayList = this.props.weatherData.map( (currentDay, idx) =>
    {
      return <WeatherDay
        currentWeather={currentDay}
        key={idx}
      />;
    });
    // console.log('weatherData in props in Weather', this.props.weatherData);
    return(
      <>
        <ListGroup>
          {/* {this.weatherList} */}
          {weatherDayList}
        </ListGroup>

      </>
    );
  }
}

export default Weather
