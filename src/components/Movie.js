import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Movie.css';

class Movie extends React.Component
{
  render()
  {
    console.log('current movie in <Movie/>: ', this.props.currentMovie)
    return(
      <>
        <Card key={this.props.currentMovie.id} style={{ width: '18rem' }}>
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
      </>
    );
  }
}

export default Movie
