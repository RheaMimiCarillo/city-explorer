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
      latitude: 0,
      longitude: 0,
      cityDisplayName: '',
      mapURL: '',
      showMap: false,
      error: false,
      errorMessage: ''
    };
  }


  // for lab 07, make a request to my api here
  // in the backend, the server will make an array of Forecast objects and return it back with `date` and `description` properties
  // render the date and description properties to the user after searching
  handleSubmitCity = async e =>
  {
    e.preventDefault();

    // logs to see if I'm in the event handler
    console.log(`in handleSubmitCity`);

    try
    {
      console.log(`submitted form and called handleSubmitCity ${this.state.cityName}`);

      // get location data JSON from LocationIQ
      let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityName}&format=json`);

      // log of the response
      console.log(response.data[0]);

      // make a url to use to make an API request to for weather data
      // should look like: http://localhost:3001/weather?lat=<a latitude>&lon=<a longitude>&searchQuery=<a city name>
      let url = `${process.env.REACT_APP_SERVER}/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&searchQuery=${this.state.cityName}`;
      console.log('url: ',url);

      // make a request for data from our server, using axios
      let weatherData = await axios.get(url);

      // update state with city data
      this.setState(
      {
        cityData: response.data[0],
        bigCityData: response.data,
        latitude: response.data[0].lat,
        longitude: response.data[0].lon,
        cityDisplayName: response.data[0].display_name,

        // could probably move this into a helper function in the Map component
        mapURL: this.handleMapURL(response.data[0]),
        showMap: true,
        // axios wraps data into `data` so we target weatherData.data to get the info we requested
        weatherData: weatherData.data,
        error: false
      });
      console.log(` ${this.state.cityName}'s lat and long: `, response.data[0].lat, response.data[0].lon);
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
          <>
            <Map
              show={this.state.showMap}

              onHide={this.handleMapModal}

              mapURL={this.state.mapURL}
              // pass the locationIQ data into Map
              cityData={this.state.cityData}
              // pass weatherData from state into Map props
              weatherData={this.state.weatherData}
            />
          </>
        }

      </>
    )
  }
}

export default Main
