(()=>{"use strict";var e,t,a;!function(e){var t=document.querySelector(".container"),a=document.createElement("div");a.classList.add("board"),t.appendChild(a);for(var n=0;n<Math.pow(4,2);n+=1){var l=document.createElement("div");l.classList.add("cell"),a.appendChild(l)}}(),e=document.getElementsByClassName("cell"),t=Math.floor(Math.random()*e.length),a=function(t){return e[t]},function n(){return setTimeout((function(){var l,o=Math.floor(Math.random()*e.length);o!==t?(a(t).classList.remove("cell_has-goblin"),l=t=o,a(l).classList.add("cell_has-goblin"),n()):n()}),800)}()})();