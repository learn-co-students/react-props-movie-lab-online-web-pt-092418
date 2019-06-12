import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((data, i) => {
      const title = data.title
      const IMDBRating = data.IMDBRating
      const genres = data.genres
      const poster = data.poster
      const key = i
      return <MovieCard title={title} IMDBRating={IMDBRating} genres={genres} poster={poster} key={key} />
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
