import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const API_URL = `http://www.omdbapi.com?apikey=${
  import.meta.env.VITE_OMDB_API_KEY
}`;

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
        <h1>Hello</h1>
      </div>
    </>
  );
};

export default App;
