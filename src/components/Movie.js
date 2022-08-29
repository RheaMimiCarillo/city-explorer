import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../styles/Movie.css';

class Movie extends React.Component
{
  render()
  {
    return(
      <>
      <Col className='mt-4'>
          <Card

            className="h-100 p-1"
          >
            <Card.Title>
              {this.props.currentMovie.title} ({this.props.currentMovie.language})
            </Card.Title>

            <Card.Text>({this.props.currentMovie.releaseDate})</Card.Text>

            { // render either a movie image, or render an empty fragment
              this.props.currentMovie.src
              ?
              <Card.Img
                variant="top"
                src={this.props.currentMovie.src}
                alt={this.props.currentMovie.title}
                className="img-fluid"
              />
                :
              <></>
            }

            <Card.Body>
              <Card.Text>{this.props.currentMovie.overview}</Card.Text>

              { // render either a movie score, or an empty string
                this.props.currentMovie.score
                ?
                <Card.Text>Rating: {this.props.currentMovie.score}</Card.Text>
                : ''
              }
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default Movie
