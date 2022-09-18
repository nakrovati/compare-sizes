import{u as M,r as W,g as K,o as q,w as x,s as X}from"./vendor.vue.a164d327.js";var $;const O=typeof window<"u",Y=e=>typeof e=="function",Z=e=>typeof e=="string",g=()=>{};O&&(($=window==null?void 0:window.navigator)==null?void 0:$.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function J(e){return typeof e=="function"?e():M(e)}function k(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const R=e=>e();function ee(e=R){const t=W(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...i)=>{t.value&&e(...i)}}}function te(e){return e}function re(e){return K()?(q(e),!0):!1}var E=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,oe=(e,t)=>{var r={};for(var n in e)ne.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&E)for(var n of E(e))t.indexOf(n)<0&&ae.call(e,n)&&(r[n]=e[n]);return r};function ie(e,t,r={}){const n=r,{eventFilter:o=R}=n,i=oe(n,["eventFilter"]);return x(e,k(o,t),i)}var se=Object.defineProperty,ue=Object.defineProperties,le=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,fe=(e,t)=>{for(var r in t||(t={}))L.call(t,r)&&N(e,r,t[r]);if(w)for(var r of w(t))V.call(t,r)&&N(e,r,t[r]);return e},ce=(e,t)=>ue(e,le(t)),pe=(e,t)=>{var r={};for(var n in e)L.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&w)for(var n of w(e))t.indexOf(n)<0&&V.call(e,n)&&(r[n]=e[n]);return r};function de(e,t,r={}){const n=r,{eventFilter:o}=n,i=pe(n,["eventFilter"]),{eventFilter:c,pause:l,resume:u,isActive:p}=ee(o);return{stop:ie(e,t,ce(fe({},i),{eventFilter:c})),pause:l,resume:u,isActive:p}}function Oe(e){var t;const r=J(e);return(t=r==null?void 0:r.$el)!=null?t:r}const m=O?window:void 0;O&&window.document;O&&window.navigator;O&&window.location;function ve(...e){let t,r,n,o;if(Z(e[0])?([r,n,o]=e,t=m):[t,r,n,o]=e,!t)return g;let i=g;const c=x(()=>Oe(t),u=>{i(),u&&(u.addEventListener(r,n,o),i=()=>{u.removeEventListener(r,n,o),i=g})},{immediate:!0,flush:"post"}),l=()=>{c(),i()};return re(l),l}const b=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P="__vueuse_ssr_handlers__";b[P]=b[P]||{};const _e=b[P];function we(e,t){return _e[e]||t}function ye(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var ge=Object.defineProperty,F=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,A=(e,t,r)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))me.call(t,r)&&A(e,r,t[r]);if(F)for(var r of F(t))be.call(t,r)&&A(e,r,t[r]);return e};const Pe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Ne(e,t,r,n={}){var o;const{flush:i="pre",deep:c=!0,listenToStorageChanges:l=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:S,window:h=m,eventFilter:z,onError:y=a=>{console.error(a)}}=n,d=(S?X:W)(t);if(!r)try{r=we("getDefaultStorage",()=>{var a;return(a=m)==null?void 0:a.localStorage})()}catch(a){y(a)}if(!r)return d;const f=J(t),I=ye(f),v=(o=n.serializer)!=null?o:Pe[I],{pause:B,resume:H}=de(d,()=>U(d.value),{flush:i,deep:c,eventFilter:z});return h&&l&&ve(h,"storage",j),j(),d;function U(a){try{a==null?r.removeItem(e):r.setItem(e,v.write(a))}catch(s){y(s)}}function G(a){if(!(a&&a.key!==e)){B();try{const s=a?a.newValue:r.getItem(e);if(s==null)return u&&f!==null&&r.setItem(e,v.write(f)),f;if(!a&&p){const _=v.read(s);return Y(p)?p(_,f):I==="object"&&!Array.isArray(_)?C(C({},f),_):_}else return typeof s!="string"?s:v.read(s)}catch(s){y(s)}finally{H()}}}function j(a){a&&a.key!==e||(d.value=G(a))}}var Q;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Q||(Q={}));var Se=Object.defineProperty,T=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,je=(e,t)=>{for(var r in t||(t={}))he.call(t,r)&&D(e,r,t[r]);if(T)for(var r of T(t))Ie.call(t,r)&&D(e,r,t[r]);return e};const $e={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};je({linear:te},$e);export{Ne as u};
