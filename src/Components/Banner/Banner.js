import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../../Service things/axios";
import requests from "../../Service things/requests";
import { truncate } from "../../Service things/options";

function Banner(props) {
  const [movie, setMovie] = useState([]);

  // В useEffect c помощью библиотеки 'axios' асинхронно запрашиваем рандомный
  // фильм из категории Netflix originals и записываем его в стейт
  // Далее, на основе случайного каждый раз фильма, отрисовываем банер.

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button
            className="banner__button"
            onClick={() => props.playHandler(movie)}
          >
            Play
          </button>
          <button
            className="banner__button"
            onClick={() => alert("You have no any list")}
          >
            My List
          </button>
        </div>
        <h1 className="banner__description">
          {/* функция truncate сокращает описание фильма до 150 символов */}
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
