(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="modulepreload",v=function(a){return"/todo-vite/"+a},u={},l=function(s,i,c){let e=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),r=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));e=Promise.all(i.map(o=>{if(o=v(o),o in u)return;u[o]=!0;const d=o.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${m}`))return;const n=document.createElement("link");if(n.rel=d?"stylesheet":h,d||(n.as="script",n.crossOrigin=""),n.href=o,r&&n.setAttribute("nonce",r),document.head.appendChild(n),d)return new Promise((p,y)=>{n.addEventListener("load",p),n.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>s()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},f=document.querySelector("main"),E=document.querySelector("footer aside p");(async function(){const{createCardAdder:a}=await l(async()=>{const{createCardAdder:e}=await import("./create-card-adder-OJUKQi79.js");return{createCardAdder:e}},[]),{yearGenerate:s}=await l(async()=>{const{yearGenerate:e}=await import("./year-generate-DROCIAZS.js");return{yearGenerate:e}},[]),{createTodoCard:i}=await l(async()=>{const{createTodoCard:e}=await import("./create-todo-card-BA_v2pqG.js");return{createTodoCard:e}},[]);s(E);const c=a(f);c.button.addEventListener("click",()=>{const e=c.getInputValues();c.resetForm();const t=i(f,e.name,e.activities);t.button.addEventListener("click",()=>{t.card.remove()})})})();
