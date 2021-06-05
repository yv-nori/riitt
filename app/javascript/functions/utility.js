export const _doc = document;
// スクロール禁止の関数
const noScroll = event => {
  event.preventDefault();
}
// スクロール禁止(PC)
export const noScrollPC = () => {
  document.addEventListener('touchmove', noScroll, { passive: false });
}
// スクロール禁止(SP)
export const noScrollSP = () => {
  document.addEventListener('mousewheel', noScroll, { passive: false });
}
// スクロール再開(PC)
export const onScrollPC = () => {
  document.removeEventListener('touchmove', noScroll, { passive: false });
}
// スクロール再開(SP)
export const onScrollSP = () => {
  document.removeEventListener('mousewheel', noScroll, { passive: false });
}
// スマホ画面の処理
const tabMin = 520;
const tabMax = 960;

export const sp_only = () => {
  const maxSize = tabMin;
  const currentSize = $(window).width();
  if (maxSize >= currentSize) {
    return true;
  } else {
    return false;
  }
}
export const tab_only = () => {
  const maxSize = tabMax;
  const minSize = tabMin;
  const currentSize = $(window).width();
  if (maxSize >= currentSize && minSize < currentSize) {
    return true;
  } else {
    return false;
  }
}
export const pc_only = () => {
  const minSize = tabMax;
  const currentSize = $(window).width();
  if (minSize < currentSize) {
    return true;
  } else {
    return false;
  }
}
export const media = (size = $(window).width()) => {
  switch (true) {
    case size <= tabMin:
      return "SP"
    case size > tabMin && size <= tabMax:
      return "Tab"
    case size > tabMax:
      return "PC"
  }
}
export const changeMedia = startSize => {
  const startMedia = media(startSize)
  const currentMedia = media()
  if (currentMedia !== startMedia) {
    return currentMedia;
  }
}
export const getElements = (idText, array) => {
  let $element;
  for (let i = 0; ($element = _doc.getElementById(idText + i)) !== null; i++) {
    array.push($element);
  }
}
export const getElementsInner = (idText, array) => {
  let $element;
  for (let i = 0; ($element = _doc.getElementById(idText + i)) !== null; i++) {
    array.push($element.innerText);
  }
}
export const clickChangeAll = Items => {
  const targets_length = Items.$targets.length;
  $(Items.$trigger).on('click', () => {
    $(Items.$trigger).toggleClass('isActive');
    for (let i = 0; i < targets_length; i++) {
      $(Items.$targets[i]).toggleClass('isActive');
    }
  });
};
