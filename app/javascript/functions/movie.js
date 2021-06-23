import {
  _doc
} from "../functions/utility"
export const movie = () => {
  const $movie = _doc.getElementById('JS_movie');
  $movie.load();
  $movie.pause();
  setTimeout(function () {
    $movie.play()
  }, 5500);
};
