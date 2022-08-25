import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/WeatherDay.css';

class WeatherDay extends React.Component
{
  render()
  {
    return(
      <>
        <ListGroup.Item
          key={this.props.idx}
        >
          Weather on {this.props.currentWeather.date}: {this.props.currentWeather.maxTemp} {this.props.currentWeather.description}
        </ListGroup.Item>
      </>
    );
  }
}

export default WeatherDay
