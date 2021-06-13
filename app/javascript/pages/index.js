import {
  scrollShow, scrollShowItems, resetPositions
} from "../functions/scroll"
import {
  visit, visitTargets
} from "../functions/visit"
import {
  moveItems, scrollMove
} from "../functions/move"
import {
  headerItems, menuOpen, headerChangeDelay
} from "../functions/header"

$(function () {
  let windowScrollTop = 0
  const HeaderItems = headerItems();
  const $VisitTargets = visitTargets();
  const $MoveItems = moveItems($VisitTargets);
  const $ScrollShowItems = scrollShowItems();
  visit($VisitTargets, $MoveItems, HeaderItems);
  menuOpen(HeaderItems);
  let startPosition = 0;
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollMove(windowScrollTop, $MoveItems);
    scrollShow(windowScrollTop, $ScrollShowItems, 100);
    if (HeaderItems.Activity === 'isPassive') {
    headerChangeDelay(windowScrollTop, startPosition, HeaderItems, true);
  }
  startPosition = windowScrollTop;
  });
  window.addEventListener('resize', () => {
    resetPositions($ScrollShowItems.positions, $ScrollShowItems.$targets);
  }, false);
});
