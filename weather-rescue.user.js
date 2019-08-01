// ==UserScript==
// @name         Weather Rescue Bar
// @namespace    https://www.paulbutcher.space/
// @version      0.1
// @description  A translucent, draggable, horizontal bar to make it easier to fill out weather-rescue reports
// @author       paul-butcher
// @match        https://www.zooniverse.org/projects/edh/weather-rescue/classify
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.insertAdjacentHTML('afterBegin', '<div id="horizontal_guide" style="width: 100%;position: absolute;z-index: 99;background-color: fuchsia;opacity: 0.3;"><hr></div>');
dragElement(document.getElementById("horizontal_guide"));

function dragElement(elmnt) {

    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    elmnt.style.top = (e.clientY + scrollY) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
})();
