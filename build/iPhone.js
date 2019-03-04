function screenAdjust() {
  window.parent.document.querySelector("meta[name=viewport]").setAttribute("content","initial-scale=1.0, viewport-fit=cover");
}

function init() {
  screenAdjust();
}

init();
