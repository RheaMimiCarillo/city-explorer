import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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
      <Container>
        <Row xs={1} lg={2}>
          {/* render the array of <Movie/> objects */}
        {this.moviesList}
        </Row>
      </Container>

      </>
    );
  }
}

export default Movies
