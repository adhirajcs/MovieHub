import { useState, useEffect } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";

// import "./App.css";
import searchIcon from "./Assets/search.svg";

const API_URL = `http://www.omdbapi.com?apikey=${
  import.meta.env.VITE_OMDB_API_KEY
}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await axios.get(`${API_URL}&s=${title}`);
      const data = response.data;

      setMovies(data.Search);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  return (
    <>
      <div className="app flex flex-col items-center justify-center py-16 bg-gray-900 min-h-screen">
      <a to="/" className="no-underline">
          <h1 className="text-6xl tracking-wide bg-gradient-to-r from-blue-400 to-transparent bg-clip-text text-transparent cursor-pointer">
            MovieHub
          </h1>
        </a>

        <form
          className="search flex items-center justify-center w-3/4 my-16 p-6 rounded-full bg-gray-800 shadow-inner"
          onSubmit={(event) => {
            event.preventDefault();
            searchMovies(searchTerm);
          }}
        >
          <button type="submit" className="left-2">
            <img src={searchIcon} className="w-5 h-5" />
          </button>
          <input
            className="flex-1 border-none text-xl font-medium pl-4 outline-none text-gray-400 bg-gray-800"
            placeholder="Search For Movies"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        {movies?.length > 0 ? (
          <div className="container flex flex-wrap justify-center items-center w-full mt-12">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty flex justify-center items-center w-full mt-12">
            <h2 className="text-xl text-orange-300 font-raleway">
              No Movies found
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
