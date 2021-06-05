import {
  scrollChange, $changeTargets
} from "../functions/scroll"
import {
  headerItems, menuOpen
} from "../functions/header"
$(function () {
  let windowScrollTop = 0
  const HeaderItems = headerItems();
  const $ChangeTargets = $changeTargets(HeaderItems.$targets);
  menuOpen(HeaderItems);
  let startPosition = 0;
  $(window).on('scroll', function () {
  windowScrollTop = $(this).scrollTop();
  if (HeaderItems.Activity === 'isPassive') {
    scrollChange(windowScrollTop, startPosition, $ChangeTargets, false);
  }
  startPosition = windowScrollTop;
  });
});
