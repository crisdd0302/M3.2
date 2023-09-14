// src/components/Favorites.js
import React from "react";

const Favorites = ({ favorites, onRemoveFromFavorites }) => {
  return (
    <div>
      <h2>My Favorite Movies</h2>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => onRemoveFromFavorites(movie)}>
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
