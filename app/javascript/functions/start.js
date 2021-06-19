import {
  _doc, noScrollPC, noScrollSP, onScrollPC, onScrollSP
} from "../functions/utility"
export const start = () => {
  $('html,body').animate({ scrollTop: 0 }, '1');
  const $start = _doc.getElementById('JS_start');
  const $start_logo = _doc.getElementById('JS_start_logo');
  noScrollPC();
  noScrollSP();
  setTimeout(function () {
    $($start_logo).fadeIn(1300);
  }, 0);
  // 500
  setTimeout(function () {
    $($start_logo).fadeOut(500);
  }, 0);
  // 2000
  setTimeout(function () {
    $($start).fadeOut(500);
    onScrollPC();
    onScrollSP();
  }, 0);
  // 3000
};
