import {
  scrollShow, scrollShowItems, resetPositions
} from "./scroll"
import {
  visit, visitTargets
} from "./visit"
import {
  moveItems, scrollMove
} from "./move"
import {
  headerItems, headerChangeDelay, headerPage
} from "./header"
import {
  media
} from "./utility"
$(function () {
  let windowScrollTop = 0
  const HeaderItems = headerItems();
  const $VisitTargets = visitTargets();
  const $MoveItems = moveItems($VisitTargets);
  const $ScrollShowItems = scrollShowItems();
  headerPage(HeaderItems.$page_target);
  visit($VisitTargets, $MoveItems, HeaderItems);
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
