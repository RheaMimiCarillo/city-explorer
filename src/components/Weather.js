import React from 'react';
import WeatherDay from './WeatherDay';
import '../styles/Weather.css';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component
{
  // make an array of ListGroup.Items
  weatherList = this.props.weatherData.map((currentDay, idx) =>
    <WeatherDay
      currentWeather={currentDay}
      key={idx}
      cityData={this.props.cityData}
    />
  );

  render()
  {
    return(
      <>
        <ListGroup>
          {this.weatherList}
        </ListGroup>

      </>
    );
  }
}

export default Weather
