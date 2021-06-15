import {
  scrollStatus, isUp, isTop,isDown, scrollDirection
} from "./scroll"
import {
  _doc, getElements
} from "./utility";
export const headerItems = () => {
  const HeaderItems = {
    $trigger:
      _doc.getElementById('JS_menu-open_trigger')
    ,
    $targets: [],
    $targets_delay: [],
    Activity: 'isPassive',
    allow: false,
    $side_oppener: _doc.getElementById('JS_scroll-change_target-H1'),
    $side_target: _doc.getElementById('JS_side-menu_target'),
    $side_closer: _doc.getElementById('JS_side-menu_closer')
  };
  getElements('JS_scroll-change_target-H', HeaderItems.$targets);
  getElements('JS_scroll-change-delay_target-H', HeaderItems.$targets_delay);
  $(HeaderItems.$side_oppener).on('click', () => {
    $(HeaderItems.$side_target).addClass('isActive');
  });
  $(HeaderItems.$side_closer).on('click', () => {
    $(HeaderItems.$side_target).removeClass('isActive');
  });
  return HeaderItems;
}
export const headerChangeDelay = (windowScrollTop, startPosition, Items, toTop = true) => {
  let length = Items.$targets.length;
  let length_delay = Items.$targets_delay.length;

  const delayTop = () => {
    for (let i = 0; i < length_delay; i++) {
      if (toTop) {
        scrollStatus(isTop.bind(null, $(Items.$targets_delay[i])));
      } else {
        scrollStatus(isUp.bind(null, $(Items.$targets_delay[i])));
      }
    }
  }
  const delayUp = () => {
    for (let i = 0; i < length_delay; i++) {
      scrollStatus(isUp.bind(null, $(Items.$targets_delay[i])));
    }
  }
  const delayDown = () => {
    for (let i = 0; i < length_delay; i++) {
      scrollStatus(isDown.bind(null, $(Items.$targets_delay[i])));
    }
  }

  if (Items.allow) {
    switch (scrollDirection(windowScrollTop, startPosition)) {
      case 'toTop':
        for (let i = 0; i < length; i++) {
          if (toTop) {
            scrollStatus(isTop.bind(null, $(Items.$targets[i])));
          } else {
            scrollStatus(isUp.bind(null, $(Items.$targets[i])));
          }
        }
        setTimeout(() => {
          delayTop()
        }, 1000);
      break;
      case 'toUp':
        for (let i = 0; i < length; i++) {
          scrollStatus(isUp.bind(null, $(Items.$targets[i])));
        }
        setTimeout(() => {
          delayUp()
        }, 0);
        break;
      case 'toDown':
        for (let i = 0; i < length; i++) {
          scrollStatus(isDown.bind(null, $(Items.$targets[i])));
        }
        setTimeout(() => {
          delayDown()
        }, 0);
        break;
    }
  }
};
