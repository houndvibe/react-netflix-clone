import React, { useState } from "react";
import "./App.css";
import Row from "./Components/Row/Row";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Nav/Nav";
import requests from "./Service things/requests";
import { rickroll, opts } from "./Service things/options";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function App() {
  const [trailerUrl, setTrailerUrl] = useState("");

  // Функция playHandler, при помощи библиотеки 'movie-trailer',  ищет трейлер фильма,
  // по которому совершен клик, приводит его URL к необходимому виду
  // и записывает его в стейт.

  const playHandler = (movie) => {
    movieTrailer(movie?.title || movie?.name || movie?.original_name)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch(() => {
        setTrailerUrl(rickroll[0]);
        console.log(rickroll[1]);
      });
  };

  return (
    <div className="App">
      <Nav />
      <Banner playHandler={playHandler} />

      {/* Если в стейте имеется URL фильма, то компонент выводит его трейлер
      с помощью библиотеки 'react-youtube' */}

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        playHandler={playHandler}
        trailer={trailerUrl}
      />
      <Row
        title="Trending now"
        fetchUrl={requests.fetchTrending}
        playHandler={playHandler}
        trailer={trailerUrl}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        playHandler={playHandler}
        trailer={trailerUrl}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        playHandler={playHandler}
        trailer={trailerUrl}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        playHandler={playHandler}
        trailer={trailerUrl}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        playHandler={playHandler}
        trailer={trailerUrl}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        playHandler={playHandler}
        trailer={trailerUrl}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        playHandler={playHandler}
        trailer={trailerUrl}
      />
    </div>
  );
}

export default App;
