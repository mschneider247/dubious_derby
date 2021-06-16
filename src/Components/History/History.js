import React, { useState } from 'react';
import styled from 'styled-components';

const buildMovies = (movies) => {
    let renderMovies = movies.map((movie, index) => {
      console.log("This is a movie::", movie)

      return (
        <MovieCard key={index}>
          <h3>
            {movie.fields.title}
          </h3>
          <img src={movie.fields.image[0].url} alt="Movie poster"/>
          <p>
            {movie.fields.description}
          </p>
          <h5>
            Released: {movie.fields.yearMade}
          </h5>
        </MovieCard>
      )
    })
    return renderMovies
  }

const History = (props) => {
  return (
    <Movies>
      {buildMovies(props.movies.records)}
    </Movies>
  )
}

const Movies = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 3%;
`

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 1%;
  padding: 1%;
  border-radius: 2px;
  width: 200px;
  min-height: 324px;
  border: 1px solid grey;
`

export default History;