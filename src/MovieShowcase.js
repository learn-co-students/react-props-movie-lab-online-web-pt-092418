import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map((data) => {
      const title = data.title
      const IMDBRating = data.IMDBRating
      const genres = data.genres
      const poster = data.poster

      return <MovieCard title={title} IMDBRating={IMDBRating} genres={genres} poster={poster} />

      }
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
