import { useState, useEffect } from "react";
import axios from "axios";

import MovieCard from './MovieCard'

import "./App.css";
import searchIcon from "./search.svg";

const API_URL = `http://www.omdbapi.com?apikey=${
  import.meta.env.VITE_OMDB_API_KEY
}`;

const movie1 = {
  Title: "Superman",
  Year: "1978",
  imdbID: "tt0078346",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
};

const App = () => {
  const searchMovies = async (title) => {
    try {
      const response = await axios.get(`${API_URL}&s=${title}`);
      const data = response.data;

      console.log(data.Search);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  return (
    <>
      <div className="App">
        <h1>MovieHub</h1>

        <div className="search">
          <input
            placeholder="Search For Movies"
            value="Superman"
            onChange={() => {}}
          />
          <img src={searchIcon} alt="Search" onClick={() => {}} />

          <div className="container">
            <MovieCard movie1={movie1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
