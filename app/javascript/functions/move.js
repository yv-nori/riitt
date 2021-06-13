import {
  _doc
} from "./utility";

export const moveItems = ($visitTargets) => {
  const Items = {
    $targets: [],
    speed: [],
    allow: false
  };

  let $element;
  for (let i = 0; ($element = _doc.getElementById('JS_move_target_' + i)) !== null; i++) {
    Items.$targets.push($element);
    if ($element.dataset.visit === 'true') {
      $visitTargets.push($element)
    }
  }

  const length = Items.$targets.length;
  for (let i = 0; i < length; i++) {
    Items.speed.push(Items.$targets[i].dataset.speed)
  }
  return Items;
}
// scrollMove
export const scrollMove = (windowScrollTop, Items) => {
  const length = Items.$targets.length;
  if (Items.allow) {
    for (let i = 0; i < length; i++) {
      $(Items.$targets[i])[0].style.cssText =
        "transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
        windowScrollTop * -0.1 * Items.speed[i]
        + ", 0, 1);";
    }
  }
};
