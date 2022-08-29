import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
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
      cityData: [],
      mapURL: '',
      weatherData: [],
      movieData: [],
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

    try
    {
      // get location data JSON from LocationIQ
      let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityName}&format=json`);

      let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${response.data[0].lat},${response.data[0].lon}&zoom=12`;
      // log of the response
      // console.log(response.data[0]);
      console.log(` ${this.state.cityName}'s lat and long: `, response.data[0].lat, response.data[0].lon);


      // request city data from the API
      // run getWeather data with the event
      // use locationIQ data to get weather data
      // or use
      this.getWeather(response.data[0]);

      // request movie data from the API
      // use this.state.cityName to get cities
      this.getMovies();

      this.setState(
      {
        // set first index of search results into state
        cityData: response.data[0],

        mapURL: mapUrl,
        showMap: true,
        // axios wraps data into `data` so we target weatherData.data to get the info we requested
        error: false,
      });
    }
    catch (error)
    {
      this.handleError(error);
    }
  }

  // get weather data and then set that weather data into state
  // make the weather still update, even if LocationIQ is down, by using cityName

  // event handlers
  getWeather = async (locationData) =>
  {
    try
    {
      // NOTE put this bit in a separate helper method, so we don't have two `await`s in a single try/catch

      // make a url to use to make an API request to for weather data
      // should look like: http://localhost:3001/weather?lat=<a latitude>&lon=<a longitude>&searchQuery=<a city name>
      let url = `${process.env.REACT_APP_SERVER}/weather?lat=${locationData.lat}&lon=${locationData.lon}&searchQuery=${this.state.cityName}`;
      console.log('weather url: ',url);

      // make a request for data from our server, using axios
      let weatherData = await axios.get(url);

      // console.log('weatherData from weatherbit: ', weatherData.data);
      this.setState(
      {
        weatherData: weatherData.data,
        error: false,
      })
    }
    catch (error)
    {
      this.handleError(error);
    }
  }


  // get movie data from movieDB using axios
  // then set the movie data into state
  getMovies = async () =>
  {
    try
    {
      // use getMovies() to get an array of Movies
      let moviesUrl = `${process.env.REACT_APP_SERVER}/movies?city=${this.state.cityName}`;
      console.log('moviesUrl: ',moviesUrl);

      let movieData = await axios.get(moviesUrl);
      // console.log('movieData from my server: ', movieData.data);

      this.setState(
      {
        movieData: movieData.data,
        error: false,
      })
    }
    catch (error)
    {
      this.handleError(error);
    }
  }

  // when an error occurs
  handleError = (error) =>
  {
    // log the error and error.message to the console
    console.log('error: ', error);
    console.log('error.message: ', error.message);

    // update state, to show than an error occurred
    this.setState(
    {
      error: true,
      errorMessage: `Uh-oh, Spaghetti-Os! Error #: ${error.response.status}`
    });
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

  // get the user's input, whilst they're typing it and set it to state
  handleInputCity = e =>
  {
    console.log('user city input: ', e.target.value);
    this.setState({
      cityName: e.target.value
    });
  }

  render()
  {
    // console.log('weatherData in state in Main', this.state.weatherData);
    // console.log('movieData in main: ', this.state.movieData);
    return(
      <>
        <Form onSubmit={this.handleSubmitCity}>
          <Form.Label>Enter a city, see a map, the weather, and top movies:
            <Form.Control
              type="text"
              name="cityName"
              placeholder="(Really Cool City)"
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
          <Map
            show={this.state.showMap}

            onHide={this.handleMapModal}

            mapURL={this.state.mapURL}
            // pass the locationIQ data into Map
            cityData={this.state.cityData}
            // pass weatherData from state into Map props
            weatherData={this.state.weatherData}
            // pass movie data into props
            movieData={this.state.movieData}
          />
        }
      </>
    )
  }
}

export default Main
