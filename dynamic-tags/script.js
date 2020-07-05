// var blog = new DynamicTagController({
//   "container": "container",
//   "card": "el",
//   "tag": "tag",
//   "filter": "filter",
//   "dataTag": "tag"
// })
//
// blog.loadTags();
//
// var dtc2 = new DynamicTagController({
//   "container": "container2",
//   "card": "el2",
//   "tag": "tag2",
//   "filter": "filter2",
//   "noResult": "Ain't nuthin' here"
// })
//
// dtc2.loadTags();

var languages = new DynamicTagController({});
languages.loadTags();

var inputFilter = new DynamicTagController({
  container: "input-container",
  card: "input-card",
  tag: "input-tag",
  filter: "input-filter",
  filterSelectionMethod: "input"
});
inputFilter.loadTags();

function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
  return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}

function populateBackground() {
  for (let i = 0; i < 1000; i++) {
    let el = document.createElement("div");
    el.classList.add("bg-box");
    el.style.width = Math.floor(Math.random() * 80) + 30 + "px";
    bg.appendChild(el);
  }
}

var bg = document.querySelector(".background");

document.addEventListener('DOMContentLoaded', populateBackground);

window.addEventListener('scroll', function() {
  bg.style.transform = "translateY(-" + getScrollPercent() * 0.3 + "vh)";
});