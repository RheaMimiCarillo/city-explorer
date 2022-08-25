import React from 'react';
import Movie from './Movie';
import '../styles/Movies.css';

class Movies extends React.Component
{
  render()
  {
    console.log('movie data in Movies:' , this.props.movieData);
    return(
      <>
        <Movie
          moviesList={this.props.moviesList}
        />
      </>
    );
  }
}

export default Movies
