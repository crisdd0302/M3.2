// src/App.js
import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Favorites from "./components/Favorites";

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
    // Add more movies to the initial list
  ]);

  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const handleRemoveFromFavorites = (movie) => {
    const updatedFavorites = favorites.filter((m) => m.id !== movie.id);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="App">
      <MovieList movies={movies} onAddToFavorites={handleAddToFavorites} />
      <Favorites
        favorites={favorites}
        onRemoveFromFavorites={handleRemoveFromFavorites}
      />
    </div>
  );
};

export default App;
