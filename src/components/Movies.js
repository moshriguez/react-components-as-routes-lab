import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = () => {
    return movies.map(movie => {
      return (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.time} minutes</p>
          <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;
