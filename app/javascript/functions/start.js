import {
  _doc, noScrollPC, noScrollSP, onScrollPC, onScrollSP
} from "../functions/utility"
export const start = () => {
  $('html,body').animate({ scrollTop: 0 }, '1');
  const $start = _doc.getElementById('JS_start');
  const $start_logo = _doc.getElementById('JS_start_logo');
  const $movie = _doc.getElementById('JS_movie');
  noScrollPC();
  noScrollSP();
  $movie.load()
  $movie.pause()
  setTimeout(function () {
    $($start_logo).fadeIn(1300);
  }, 500);
  // 500
  setTimeout(function () {
    $($start_logo).fadeOut(500);
  }, 2000);
  // 2000
  setTimeout(function () {
    $($start).fadeOut(500);
    $movie.play()
    onScrollPC();
    onScrollSP();
  }, 3000);
  // 3000
};
