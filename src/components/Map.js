import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Weather from './Weather';
import Movies from './Movies';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'react-bootstrap/Image'
import '../styles/Map.css';


class Map extends React.Component
{
  render()
  {
    // console.log('weatherData in props in Main', this.props.weatherData);
    return(
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        keyboard="true"
        backdrop="static"
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
          <Tabs
            defaultActiveKey="map"
            id="cityContent"
            className="mb-3"
          >
            <Tab eventKey="map" title="Map">
              <ListGroup horizontal>
                <ListGroup.Item>Latitude: {this.props.cityData.lat}</ListGroup.Item>
                <ListGroup.Item>Longitude: {this.props.cityData.lon}</ListGroup.Item>
              </ListGroup>
              <Image
                src={this.props.mapURL}
                alt={this.props.cityData.display_name}

                // make image fit into the Modal window
                className="img-fluid"
              >
              </Image>

            </Tab>

            {
            <Tab eventKey="forecast" title="Weather">
             {/* Tab for weather forecast */}
             <Weather
               cityData={this.props.cityData}
               weatherData={this.props.weatherData}
              />
            </Tab>
            }
            {
            <Tab eventKey="movies" title="Movies">
             {/* Tab for Movies */}
             <Movies
               movieData={this.props.movieData}
             />
            </Tab>
            }
          </Tabs>

        </Modal.Body>
      </Modal>
    )
  }
}

export default Map
