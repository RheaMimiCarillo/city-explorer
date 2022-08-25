import React from 'react';
import Movie from './Movie';
import '../styles/Movies.css';

class Movies extends React.Component
{
  // make an array of <Movie> Cards
  // .map() the array of movieData
  // pass the individual `movie` at each index to the <Movie/> components, so it can render a <Card/> for each
  moviesList = this.props.movieData.map(movie => <Movie currentMovie={movie}/>);
  render()
  {
    console.log('movie data in Movies:', this.props.movieData);
    return(
      <>
        {/* render the array of <Movie/> objects */}
        {this.moviesList}
      </>
    );
  }
}

export default Movies
