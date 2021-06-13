import {
  _doc, getElements
} from "./utility";
export const visitTargets = () => {
  const $targets = [];
  getElements('JS_visit_', $targets);
  return $targets
};
export const visit = ($targets, moveItems, headerItems) => {
  const length = $targets.length
  const header_length = headerItems.$targets_delay.length
  $('html,body').animate({ scrollTop: 0 }, '1');
  setTimeout(function () {
    for (let i = 0; i < length; i++) {
      $($targets[i]).addClass('A_visited');
    }
    for (let i = 0; i < header_length; i++) {
      $(headerItems.$targets_delay[i]).addClass('isMoveTop');
    }
    headerItems.allow = true;
    moveItems.allow = true;
  }, 3000);
};
