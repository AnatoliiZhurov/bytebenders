(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:"auto",spaceBetween:18,slidesPerGroup:1,pagination:{el:".swiper-pagination",clickable:!0}});const d=()=>{const n=document.querySelector("body");bodyScrollLock.disableBodyScroll(n)},i=()=>{const n=document.querySelector("body");bodyScrollLock.enableBodyScroll(n)};document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),r=document.querySelectorAll(".js-modal-close"),l=function(o){document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active"),d()},e=function(){document.querySelector(".modal.active").classList.remove("active"),t.classList.remove("active"),i()};n.forEach(function(o){o.addEventListener("click",function(c){c.preventDefault();const s=this.getAttribute("data-modal");l(s)})}),r.forEach(function(o){o.addEventListener("click",function(c){c.preventDefault(),e()})}),document.body.addEventListener("keyup",function(o){o.keyCode===27&&e()}),t.addEventListener("click",function(){e()})});(()=>{const n=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),l=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),n.classList.toggle("is-open");const o=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)};t.addEventListener("click",l),r.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();