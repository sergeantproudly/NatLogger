!function(e){var t={};function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);o(1);var n=document.querySelector(".menu-window");window.openWindowMenu=function(){n.classList.add("menu-window_active-1"),document.querySelector("body").style.overflow="hidden",document.querySelector("html").style.overflow="hidden",setTimeout((function(){n.classList.add("menu-window_active-2")}),30)},window.closeWindowMenu=function(){n.classList.remove("menu-window_active-2"),setTimeout((function(){n.classList.remove("menu-window_active-1"),document.querySelector("body").removeAttribute("style"),document.querySelector("html").removeAttribute("style")}),350)},document.addEventListener("DOMContentLoaded",(function(e){for(var t=document.querySelectorAll(".questions-and-answers__question"),o=function(e){var o=t[e],n=o.querySelector(".questions-and-answers__question__answer"),c=n.offsetHeight;n.style.height="0px",o.addEventListener("click",(function(){if(o.classList.contains("questions-and-answers__question_hidden"))return n.style.height="0px",o.classList.remove("questions-and-answers__question_hidden");n.style.height="".concat(c,"px"),o.classList.add("questions-and-answers__question_hidden")}))},n=0;n<t.length;n++)o(n)}));for(var c=document.querySelectorAll(".what-can-the-platform-do__chose"),r=document.querySelectorAll(".what-can-the-platform-do__mobile-chose"),a=document.querySelectorAll(".what-can-the-platform-do__mock__screen__image"),s=function(e){var t=c[e];t.addEventListener("click",(function(){document.querySelector(".what-can-the-platform-do__chose_active").classList.remove("what-can-the-platform-do__chose_active"),t.classList.add("what-can-the-platform-do__chose_active"),document.querySelector(".what-can-the-platform-do__mobile-chose_active").classList.remove("what-can-the-platform-do__mobile-chose_active"),r[e].style.opacity=0,r[e].classList.add("what-can-the-platform-do__mobile-chose_active"),setTimeout((function(){r[e].style.opacity=1}),30);var o=document.querySelector(".what-can-the-platform-do__mock__screen__image_active");o.style.opacity=0,o.style.transform="scale(1)",setTimeout((function(){o.style.transform="scale(0.98)",a[e].style.opacity=0}),20),setTimeout((function(){o.classList.remove("what-can-the-platform-do__mock__screen__image_active"),a[e].style.transform="scale(0.98)",a[e].classList.add("what-can-the-platform-do__mock__screen__image_active")}),200),setTimeout((function(){a[e].style.opacity=1,a[e].style.transform="scale(1)"}),400)}))},i=0;i<c.length;i++)s(i)},function(e,t,o){}]);