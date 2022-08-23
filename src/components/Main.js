import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// import ListGroup from 'react-bootstrap/ListGroup';
import Map from './Map';
import '../styles/Main.css';

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
      cityDisplayName: '',
      mapURL: '',
      showMap: false,
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


      let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityName}&format=json`);

      // log of the response
      console.log(response.data[0]);

      this.setState(
      {
        cityData: response.data[0],
        bigCityData: response.data,
        latitude: response.data[0].lat,
        longitude: response.data[0].lon,
        cityDisplayName: response.data[0].display_name,
        mapURL: this.handleMapURL(response.data[0]),
        showMap: true,
        error: false
      });
      console.log(`${this.state.cityName}'s lat and long: `, response.data[0].lat, this.state.longitude);
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

  // this event listener toggles the state to show or hide the Map modal
  handleMapModal = () =>
  {
    this.setState(
    {
      // set showMap as the opposite of its current value is state
      showMap: !this.state.showMap,
    });
  }

  handleMapURL = data =>
  {
    console.log('in handle map url');
    console.log('map url expected output');
    let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${data.lat},${data.lon}&zoom=12`;

    console.log('map url expected output: ', url);

    return url;
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
              defaultValue={'Lazytown'}
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
          // <ListGroup>{this.state.cityDisplayName}
          //   <ListGroup.Item>Latitude: {this.state.latitude}</ListGroup.Item>
          //   <ListGroup.Item>Longitude: {this.state.longitude}</ListGroup.Item>
          // </ListGroup>
          <Map
          show={this.state.showMap}

          onHide={this.handleMapModal}

          mapURL={this.state.mapURL}
          alt={this.state.cityDisplayName}
          lat={this.state.latitude}
          lon={this.state.longitude}
        />
        }

      </>
    )
  }
}

export default Main
