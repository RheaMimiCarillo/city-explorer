import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Weather from './Weather';
import Movies from './Movies';
import '../styles/Map.css';


class Map extends React.Component
{
  render()
  {
    return(
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title
            className="w-100"
          >{this.props.cityData.display_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* https://react-bootstrap.github.io/components/figures/
          use figure to make images */}
          {/* or use https://react-bootstrap.github.io/components/images/ to display images */}
          <img
            src={this.props.mapURL}
            alt={this.props.cityData.display_name}

            // make image fit into the Modal window
            className="img-fluid"
          >
          </img>
          <ListGroup>Coordinates:
            <ListGroup.Item>Latitude: {this.props.cityData.lat}</ListGroup.Item>
            <ListGroup.Item>Longitude: {this.props.cityData.lon}</ListGroup.Item>
            <Weather
              cityData={this.props.cityData}
              weatherData={this.props.weatherData}
            />
            <Movies
              movieData={this.props.movieData}
            />
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    )
  }
}

export default Map
