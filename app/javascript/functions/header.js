import {
  scrollStatus, isUp, isTop
} from "./scroll"
import {
  _doc, getElements
} from "./utility";
export const menuOpen = Items => {
  let headerStatus = null;
  const length = Items.$targets.length;
  $(Items.$trigger).on('click', () => {
    $(Items.$trigger).toggleClass('isActive');
    for (let i = 0; i < length; i++) {
      $(Items.$targets[i]).toggleClass('isOpen');
    }
    if ($(Items.$targets[0]).hasClass('isOpen')) {
      Items.Activity = 'isActive'
      if ($(Items.$targets[0]).hasClass('isMoveTop')) {
        headerStatus = 'wasCleared'
        for (let i = 0; i < length; i++) {
          scrollStatus(isUp.bind(null, $(Items.$targets[i])));
        }
      };
    } else {
      Items.Activity = 'isPassive'
      if (headerStatus = 'wasCleared') {
        headerStatus = null;
        for (let i = 0; i < length; i++) {
          scrollStatus(isTop.bind(null, $(Items.$targets[i])));
        }
      };
    };
  });
};
export const headerItems = () => {
  const HeaderItems = {
    $trigger:
      _doc.getElementById('JS_menu-open_trigger')
    ,
    $targets: [],
    $targets_delay: [],
    Activity: 'isPassive'
  };
  // getElements('JS_menu-open_target_', HeaderItems.$targets)
  getElements('JS_scroll-change_target-H', HeaderItems.$targets);
  getElements('JS_scroll-change-delay_target-H', HeaderItems.$targets_delay);
  return HeaderItems;
}
