import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../../Service things/axios";
import { base_url } from "../../Service things/options";

function Row({ title, fetchUrl, isLargeRow, playHandler, trailerUrl }) {
  const [movies, setMovies] = useState([]);

  // В useEffect с помощью библиотеки 'axios' асинхронно запрашиваем список
  // фильмов из соответстующей ряду категории и записываем его в стейт.
  // Далее, на основе списка, отрисовываем тематический ряд.

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => playHandler(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
