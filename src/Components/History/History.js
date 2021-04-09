import React, { useState } from 'react';

const buildMovies = (movies) => {
    let renderMovies = movies.map((movie, index) => {
      return (
        <div>
          {movie.fields.title}
        </div>
      )
    })
    return renderMovies
  }

const History = (props) => {

  console.log("Test hello, inside History, fuck ya")
  console.log("What is props.movies.records", props.movies.records)
  // an array of movie objects, jack pots

  return (
    <section>
      <div>
        {buildMovies(props.movies.records)}
      </div>
    </section>
  )
}

export default History;