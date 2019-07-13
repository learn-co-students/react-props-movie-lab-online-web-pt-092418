import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
  return movieData.map(data_obj => (
      <MovieCard title={data_obj.title} IMDBRating={data_obj.IMDBRating}
        genres={data_obj.genres} poster={data_obj.poster}/>
    ))
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
