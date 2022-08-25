import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/WeatherDay.css';

class WeatherDay extends React.Component
{
  // make an array of ListGroup.Items
  weatherList = this.props.weatherData.map((currentDay, idx) =>
  {
    return <ListGroup.Item key={idx}>Weather on {currentDay.date}: {currentDay.description}</ListGroup.Item>
  });
  render()
  {
    return(
      <>
        {this.weatherList}
      </>
    );
  }
}

export default WeatherDay
