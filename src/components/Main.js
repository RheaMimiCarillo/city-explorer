import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';

class Main extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      // empty string to hold user inputted city name
      cityName: '',
      cityData: {},
      bigCityData:[],
      latitude: '',
      longitude: '',
      error: false,
      errorMessage: ''
    };
  }

  handleSubmitCity = async e =>
  {
    e.preventDefault();

    // logs to see if I'm in the event handler
    console.log(`in handleSubmitCity`);

    try
    {
      console.log(`submitted form and called handleSubmitCity ${this.state.cityName}`);


      let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

      // log of the response
      console.log(response.data[0]);

      this.setState(
      {
        cityData: response.data[0],
        bigCityData: response.data,
        latitude: response.data[0].lat,
        longitude: response.data[0].lon,
        error: false
      });
      console.log(`${this.state.cityName}'s lat and long: `, this.state.latitude, this.state.longitude);
    }
    catch(error)
    {
      console.log('error: ', error);
      console.log('error.message: ', error.message);
      this.setState(
      {
        error: true,
        errorMessage: `Uh-oh, Spaghetti-Os! Error #: ${error.response.status}`
      });
    }
    // request city data from the API

  }

  handleInputCity = e =>
  {
    this.setState({
      cityName: e.target.value
    });
    console.log(`handleInputCity input: ${this.state.cityName}`);
  }
  render()
  {
    return(
      <>
        <Form onSubmit={this.handleSubmitCity}>
          <Form.Label>Please enter a City Name
            <Form.Control
              type="text"
              name="cityName"
              onInput={this.handleInputCity}
            />
          </Form.Label>
        <Button type="submit">Explore!</Button>
        </Form>

        {/* ternary to either display the map or display an error message */}
        {
          this.state.error
          ?
          <p>{this.state.errorMessage}</p>
          :
          <ListGroup>
            <ListGroup.Item>Latitude: {this.state.latitude}</ListGroup.Item>
            <ListGroup.Item>Longitude: {this.state.longitude}</ListGroup.Item>
          </ListGroup>
        }

      </>
    )
  }
}

export default Main
