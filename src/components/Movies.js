import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Movies.css';

class Movies extends React.Component
{
  // make an array of ListGroup.Items
  moviesList = this.props.movieData.map((movie) =>
  {
    return <Card key={movie.id}style={{ width: '18rem' }}>
    <Card.Title>{movie.title} ({movie.language})</Card.Title>
    <Card.Text>({movie.releaseDate})</Card.Text>
    {movie.src ? <Card.Img variant="top" src={movie.src} alt={movie.title} className="img-fluid"/> : <></>}
    <Card.Body>
      <Card.Text>{movie.overview}</Card.Text>
      {movie.score ? <Card.Text>Rating: {movie.score}</Card.Text> : ''}
    </Card.Body>
  </Card>
  });

  render()
  {
    console.log('movie data in Movies:' , this.props.movieData);
    return(
      <>
        {this.moviesList}
      </>
    );
  }
}

export default Movies
