import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/Movies.css';

class Movies extends React.Component
{
  // make an array of ListGroup.Items
  moviesList = this.props.moviesData.map((movie, idx) =>
  {
    return <ListGroup.Item key={idx}>{movie.title}{movie.releaseDate}</ListGroup.Item>
  });
  render()
  {
    return(
      <>
        {this.weatherList}
      </>
    );
  }
}

export default Movies
