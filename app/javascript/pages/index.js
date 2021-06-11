import {
  scrollChange, scrollChangeDelay, $changeTargets
} from "../functions/scroll"
import {
  headerItems, menuOpen
} from "../functions/header"
$(function () {
  let windowScrollTop = 0
  const HeaderItems = headerItems();
  const $ChangeTargets = $changeTargets(HeaderItems.$targets);
  const $ChangeTargetsDelay = HeaderItems.$targets_delay;
  menuOpen(HeaderItems);
  let startPosition = 0;
  $(window).on('scroll', function () {
  windowScrollTop = $(this).scrollTop();
  if (HeaderItems.Activity === 'isPassive') {
    scrollChange(windowScrollTop, startPosition, $ChangeTargets, true);
    scrollChangeDelay(windowScrollTop, startPosition, $ChangeTargetsDelay, true);
  }
  startPosition = windowScrollTop;
  });
});
