//сниппет url'a для tmdb API
export const base_url = "https://image.tmdb.org/t/p/original/";

//=)))
export const rickroll = [
  "dQw4w9WgXcQ",
  "This tmdb API is total shit, so you were rickrolled ;)))",
];

//опции для отображения react-youtube компонента
export const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

//функция, сокращающая описание фильма, если требуется
export function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
