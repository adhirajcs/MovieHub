import { useState, useEffect } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";

// import "./App.css";
import searchIcon from "./Assets/search.svg";

const API_URL = `https://www.omdbapi.com?apikey=${
  import.meta.env.VITE_OMDB_API_KEY
}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const searchMovies = async (title) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}&s=${title}`);
      const data = response.data;

      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => setLoading(false), 900);
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if (searchTerm === "") {
      setMovies([]);
    }
  }, [searchTerm]);

  return (
    <>
      <div className="app flex flex-col items-center justify-center py-16 bg-gray-900 min-h-screen">
        <h1
          onClick={() => {
            setSearchTerm("");
            setMovies([]);
            setSubmitted(false);
          }}
          className="text-6xl tracking-wide bg-gradient-to-r from-blue-400 to-transparent bg-clip-text text-transparent cursor-pointer"
        >
          MovieHub
        </h1>

        <form
          className="search flex items-center justify-center w-3/4 my-16 p-6 rounded-full bg-gray-800 shadow-inner"
          onSubmit={(event) => {
            event.preventDefault();
            searchMovies(searchTerm);
          }}
        >
          <button type="submit" className="left-2">
            <img src={searchIcon} className="w-5 h-5" alt="Search" />
          </button>
          <input
            className="flex-1 border-none text-xl font-medium pl-4 outline-none text-gray-400 bg-gray-800"
            placeholder="Search For Movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        <div>
          {loading ? (
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-700 mx-auto"></div>
            </div>
          ) : (
            <div>
              {submitted && searchTerm !== "" && movies.length === 0 && (
                <div className="empty flex justify-center items-center w-full mt-12">
                  <h2 className="text-xl text-blue-500">No Movies found</h2>
                </div>
              )}
              {!submitted && (
                <div className="empty flex justify-center items-center w-full mt-12">
                  <h2 className="text-xl text-blue-500">Welcome to MovieHub</h2>
                </div>
              )}
              {movies?.length > 0 && (
                <div className="container flex flex-wrap justify-center items-center w-full mt-12">
                  {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
