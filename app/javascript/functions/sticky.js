import { _doc } from "./utility";
import { resetPositions } from "./scroll";

$(function () {
  let windowScrollTop = 0
  const StickyItems = stickyItems();
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    sticky(StickyItems, windowScrollTop);
  });
  window.addEventListener('resize', () => {
    resetPositions(StickyItems.scrollPositions, StickyItems.$trigger);
    console.log(StickyItems)
  }, false);
});

export const stickyItems = () => {
  const Items = {
    $target: [_doc.getElementById('JS_sticky_target')],
    $trigger: [_doc.getElementById('JS_sticky_trigger')],
    scrollPositions: {
      start: [],
      end: []
    },
    addTrigerNum: 0
  }
  resetPositions(Items.scrollPositions, Items.$trigger);
  return Items;
}
export const sticky = (Items, windowScrollTop)  => {
  if (Items.scrollPositions.start < windowScrollTop) {
    $(Items.$target).addClass('isSticky')
  } else {
    $(Items.$target).removeClass('isSticky')
  }
}
