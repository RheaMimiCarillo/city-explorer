import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Movies.css';

class Movies extends React.Component
{
  // make an array of ListGroup.Items
  moviesList = this.props.movieData.map((movie, idx) =>
  {
    return <Card key={idx}style={{ width: '18rem' }}>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>({movie.releaseDate})</Card.Text>
    <Card.Img variant="top" src={movie.src} />
    <Card.Body>
      <Card.Text>
        ({movie.language})
        {movie.overview}
      </Card.Text>
      <Card.Text>Rating: {movie.score}</Card.Text>
    </Card.Body>
  </Card>
  });

  render()
  {
    console.log('movie data in Movies:' , this.props.movieData);
    return(
      <>
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src={this.props.weatherData.src} /> */}
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        {this.moviesList}
      </>
    );
  }
}

export default Movies
