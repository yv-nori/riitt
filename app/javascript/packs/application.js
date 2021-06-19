// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
// require("turbolinks").start()
require("@rails/activestorage").start();
require("channels");
require("jquery");
require("../functions/lazysizes.min");
import {
  start
} from "../functions/start"
$(function () {
  start();
});
// ページ関数
let CurrentPath = location.pathname;
if (CurrentPath == '/' ||
  CurrentPath == '/company' ||
  CurrentPath == '/service-web' ||
  CurrentPath == '/service-media' ||
  CurrentPath == '/service-print' ||
  CurrentPath == '/service-system' ||
  CurrentPath == '/works' ||
  CurrentPath == '/privacy' ||
  CurrentPath == '/infomation' ||
  CurrentPath == '/contact') {
  require("../functions/base");
}
if (CurrentPath == '/service-web' ||
  CurrentPath == '/service-media' ||
  CurrentPath == '/service-print' ||
  CurrentPath == '/service-system' ||
  CurrentPath == '/works') {
  require("../functions/sticky");
}
if (CurrentPath == '/contact') {
  require("../functions/form-check");
}

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
