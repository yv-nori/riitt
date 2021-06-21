import {
  getElements,
  _doc
} from "../functions/utility"
// --------------------------------
// 共通関数
// --------------------------------
// scrollDirection
export const scrollDirection = (windowScrollTop, startPosition) => {
  if (windowScrollTop === 0) {
    return 'toTop'
  } else if (windowScrollTop >= startPosition) {
    return 'toDown';
  } else {
    return 'toUp';
  }
};
// scrollStatus
export const scrollStatus = callback => {
  callback();
}
export const isDown = $targets => {
  $targets.addClass('isMoveDown').removeClass('isMoveTop').removeClass('isMoveUp');
};
export const isUp = $targets => {
  $targets.removeClass('isMoveDown').addClass('isMoveUp').removeClass('isMoveTop');
};
export const isTop = $targets => {
  $targets.removeClass('isMoveDown').removeClass('isMoveUp').addClass('isMoveTop');
}
// headerStatusWhite
export const headerStatusWhite = $targets => {
  let length = $targets.length;
  for (let i = 0; i < length; i++) {
    scrollStatus(isUp.bind(null, $($targets[i])));
  }
}
// scrollChange
export const scrollChange = (windowScrollTop, startPosition, $targets, toTop = true) => {
  let length = $targets.length;
  for (let i = 0; i < length; i++) {
    switch (scrollDirection(windowScrollTop, startPosition)) {
      case 'toTop':
        if (toTop) {
          scrollStatus(isTop.bind(null, $($targets[i])));
        } else {
          scrollStatus(isUp.bind(null, $($targets[i])));
        }
        break;
      case 'toUp':
        scrollStatus(isUp.bind(null, $($targets[i])));
        break;
      case 'toDown':
        scrollStatus(isDown.bind(null, $($targets[i])));
        break;
    }
  }
};
// scrollTrigger
export const scrollTrigger = (windowScrollTop, Positions, startScreenPosition = screenCenter, addStart = 0, addEnd = 0) => {
  const startScreen = startScreenPosition() + windowScrollTop;
  let length = Positions.start.length
  for (let i = 0; i < length; i++) {
    if (startScreen >= Positions.start[i] + addStart && startScreen <= Positions.end[i] + addEnd) {
      return i
    }
  }
  return false
}
export const scrollShowJudge = (windowScrollTop, position, addStart = 0, startScreenPosition = screenBottom) => {
  const startScreen = startScreenPosition() + windowScrollTop;
  if (startScreen >= position + addStart) {
    return true
  } else {
    return false
  }
}
export const scrollShow = (windowScrollTop, Items, addStart = 0) => {
  let length = Items.$targets.length;
  for (let i = 0; i < length; i++) {
    if (scrollShowJudge(windowScrollTop, Items.positions.start[i], addStart)) {
      $(Items.$targets[i]).addClass('isActive');
    } else {
      // $(Items.$targets[i]).removeClass('isActive');
    }
  }
};
// screen scroll方向やポジション
export const screenTop = () => {
  return 0
}
export const screenCenter = () => {
  let html = window.document.documentElement;
  return html.clientHeight / 2
}
export const screenBottom = () => {
  let html = window.document.documentElement;
  return html.clientHeight
}

//scrollToTop（ページトップへ戻る）
export const scrollToTop = (windowScrollTop, startPosition, Items, addStart = 67.5, addEnd = 240, startScreenPosition = screenBottom) => {
  $(Items.$target).removeClass('A_isHide');
  let result = scrollTrigger(windowScrollTop, Items.scrollPositions, startScreenPosition, addStart, addEnd)
  if (result !== false) {
    switch (scrollDirection(windowScrollTop, startPosition)) {
      case 'toUp':
        $(Items.$target).addClass('isPassive-top');
        break;
      case 'toDown':
        $(Items.$target).addClass('isPassive-bottom');
        break;
    }
  } else {
    $(Items.$target).removeClass('isPassive-top').removeClass('isPassive-bottom');
  }
}
export const scrollToTopHide = ($target) => {
  $($target).addClass('A_isHide');
}
// resetPositions
export const resetPositions = (scrollPositions, $triggers, addStart = 0, addEnd = 0) => {
  scrollPositions.start = [];
  scrollPositions.end = [];
  const length = $triggers.length;
  for (let i = 0; i < length; i++) {
    if ($triggers[i].dataset.showheight == 'true') {
      scrollPositions.start.push($($triggers[i]).offset().top + addStart - ($($triggers[i]).height() * 1.2));
    } else {
      scrollPositions.start.push($($triggers[i]).offset().top + addStart);
    }
    scrollPositions.end.push($($triggers[i]).offset().top + $($triggers[i]).height() + addEnd);
  }
  console.log(scrollPositions)
  console.log($triggers)
}
// resetSmoothPositions
export const resetSmoothPositions = (Items) => {
  let length = Items.$targets.length
  Items.targetOffset = [];
  for (let i = 0; i < length; i++) {
    Items.targetOffset.push($(Items.$targets[i]).offset().top);
  }
}
// smoothScroll
export const smoothScroll = (Items, speed = 500) => {
  let length = Items.$triggers.length
  for (let i = 0; i < length; i++) {
    $(Items.$triggers[i]).on('click', () => {
      $("html, body").animate({ scrollTop: Items.targetOffset[i] }, speed, "swing");
    });
  }
};
// --------------------------------
// DOMの格納
// --------------------------------
// toTopItems
export const toTopItems = () => {
  const Items = {
    $triggers: [],
    $target: _doc.getElementById('JS_scroll-to-top_target'),
    scrollPositions: {
      start: [],
      end: []
    },
    addTrigerNum: 0
  }
  let $trigger;
  for (let i = 0; ($trigger = _doc.getElementById('JS_scroll-to-top_trigger-' + i)) !== null; i++) {
    Items.$triggers.push($trigger);
  }
  resetPositions(Items.scrollPositions, Items.$triggers);
  return Items;
}
// addToTopTrigger
export const addToTopTrigger = (Items) => {
  if (Items.addTrigerNum === 0) {
    let $trigger;
    for (let i = 0; ($trigger = _doc.getElementById('JS_scroll-to-top_trigger-add-' + i)) !== null; i++) {
      Items.$triggers.push($trigger);
      Items.addTrigerNum = i + 1;
    }
    resetPositions(Items.scrollPositions, Items.$triggers);
  }
}
// removeToTopTrigger
export const removeToTopTrigger = (Items) => {
  for (let i = 0; i < Items.addTrigerNum; i++) {
    Items.$triggers.pop();
  }
  Items.addTrigerNum = 0;
  resetPositions(Items.scrollPositions, Items.$triggers);
}
// smoothItems
export const smoothItems = () => {
  const Items = {
    $triggers: [],
    $targets: [],
    targetOffset: [],
    currentPosition: 0
  }
  let $trigger;
  for (let i = 0; ($trigger = _doc.getElementById('JS_smoothScroll_trigger-' + i)) !== null; i++) {
    Items.$triggers.push($trigger);
  }
  let $target;
  for (let i = 0; ($target = _doc.getElementById('JS_smoothScroll_target-' + i)) !== null; i++) {
    Items.$targets.push($target);
  }
  resetSmoothPositions(Items);
  return Items;
}
// scrollShowItems
export const scrollShowItems = () => {
  const Items = {
    $targets: [],
    positions: {
      start: [],
      end: []
    },
  }
  getElements('JS_scroll_show_', Items.$targets)
  getElements('JS_scroll_show-work_', Items.$targets)
  resetPositions(Items.positions, Items.$targets);
  return Items;
}
