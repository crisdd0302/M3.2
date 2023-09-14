// src/components/MovieList.js
import React from "react";

const MovieList = ({ movies, onAddToFavorites }) => {
  return (
    <div>
      <h2>Top 200 Grossing Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => onAddToFavorites(movie)}>
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
