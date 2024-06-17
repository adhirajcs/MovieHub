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
      {/* Title */}
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

        {/* Search Box */}
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

        {/* Condition for Loader and "No Movies Found" error */}
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

              {/* Welcome Message */}
              {!submitted && (
                <div className="empty flex justify-center items-center w-full mt-12">
                  <h2 className="text-xl text-blue-500">Welcome to MovieHub</h2>
                </div>
              )}

              {/* List of movie cards */}
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

      {/* Tooltip */}
      <section className="flex justify-center items-center">
        <button
          className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 15 15"
            className="w-5"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              fill="currentColor"
              d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
            />
          </svg>
          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
            GitHub
          </span>
        </button>
      </section>
    </>
  );
};

export default App;
