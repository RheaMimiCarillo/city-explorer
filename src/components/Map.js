import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';


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
          <Modal.Title>{this.props.alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={this.props.mapURL}
            alt={this.props.cityDisplayName}>
          </img>
          <ListGroup>Coordinates:
            <ListGroup.Item>Latitude: {this.props.lat}</ListGroup.Item>
            <ListGroup.Item>Longitude: {this.props.lon}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    )
  }
}

export default Map
