import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/WeatherDay.css';

class WeatherDay extends React.Component
{
  render()
  {
    // console.log('currentWeather in props in WeatherDay', this.props.currentWeather);
    return(
      <>
        <ListGroup.Item
          key={this.props.idx}
        >
          Weather on {this.props.currentWeather.time}: {/*this.props.currentWeather.maxTemp*/} {this.props.currentWeather.forecast}
        </ListGroup.Item>
      </>
    );
  }
}

export default WeatherDay
