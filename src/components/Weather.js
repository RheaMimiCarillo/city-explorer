import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/Weather.css';

class Weather extends React.Component
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

export default Weather
