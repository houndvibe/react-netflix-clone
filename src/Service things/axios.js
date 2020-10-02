import axios from "axios";

//сниппет url'a для tmdb API

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
