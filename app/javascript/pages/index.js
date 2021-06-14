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
import {
  media, changeMedia
} from "../functions/utility"
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
    switch (media()) {
      case "SP":
        break;
      case "Tab":
        if (HeaderItems.Activity === 'isPassive') {
          headerChangeDelay(windowScrollTop, startPosition, HeaderItems, true);
        }
        break;
      case "PC":
        if (HeaderItems.Activity === 'isPassive') {
          headerChangeDelay(windowScrollTop, startPosition, HeaderItems, true);
        }
        break;
    };
    startPosition = windowScrollTop;
  });
  window.addEventListener('resize', () => {
    resetPositions($ScrollShowItems.positions, $ScrollShowItems.$targets);
  }, false);
});
