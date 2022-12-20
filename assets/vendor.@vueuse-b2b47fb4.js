import{u as U,r as W,g as G,o as K,w as x,s as q}from"./vendor.vue-692fa963.js";var $;const y=typeof window<"u",X=e=>typeof e=="function",Y=e=>typeof e=="string",Z=()=>{};y&&(($=window==null?void 0:window.navigator)!=null&&$.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function J(e){return typeof e=="function"?e():U(e)}function k(e,r){function t(...n){e(()=>r.apply(this,n),{fn:r,thisArg:this,args:n})}return t}const R=e=>e();function ee(e=R){const r=W(!0);function t(){r.value=!1}function n(){r.value=!0}return{isActive:r,pause:t,resume:n,eventFilter:(...i)=>{r.value&&e(...i)}}}function re(e){return e}function te(e){return G()?(K(e),!0):!1}var j=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,oe=(e,r)=>{var t={};for(var n in e)ne.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&j)for(var n of j(e))r.indexOf(n)<0&&ae.call(e,n)&&(t[n]=e[n]);return t};function ie(e,r,t={}){const n=t,{eventFilter:o=R}=n,i=oe(n,["eventFilter"]);return x(e,k(o,r),i)}var se=Object.defineProperty,ue=Object.defineProperties,le=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,N=(e,r,t)=>r in e?se(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,fe=(e,r)=>{for(var t in r||(r={}))L.call(r,t)&&N(e,t,r[t]);if(m)for(var t of m(r))V.call(r,t)&&N(e,t,r[t]);return e},ce=(e,r)=>ue(e,le(r)),pe=(e,r)=>{var t={};for(var n in e)L.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&m)for(var n of m(e))r.indexOf(n)<0&&V.call(e,n)&&(t[n]=e[n]);return t};function de(e,r,t={}){const n=t,{eventFilter:o}=n,i=pe(n,["eventFilter"]),{eventFilter:p,pause:v,resume:_,isActive:l}=ee(o);return{stop:ie(e,r,ce(fe({},i),{eventFilter:p})),pause:v,resume:_,isActive:l}}function Oe(e){var r;const t=J(e);return(r=t==null?void 0:t.$el)!=null?r:t}const h=y?window:void 0;y&&window.document;y&&window.navigator;y&&window.location;function ve(...e){let r,t,n,o;if(Y(e[0])||Array.isArray(e[0])?([t,n,o]=e,r=h):[r,t,n,o]=e,!r)return Z;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const i=[],p=()=>{i.forEach(s=>s()),i.length=0},v=(s,f,d)=>(s.addEventListener(f,d,o),()=>s.removeEventListener(f,d,o)),_=x(()=>Oe(r),s=>{p(),s&&i.push(...t.flatMap(f=>n.map(d=>v(s,f,d))))},{immediate:!0,flush:"post"}),l=()=>{_(),p()};return te(l),l}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S="__vueuse_ssr_handlers__";P[S]=P[S]||{};const _e=P[S];function ye(e,r){return _e[e]||r}function we(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var ge=Object.defineProperty,A=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,F=(e,r,t)=>r in e?ge(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,C=(e,r)=>{for(var t in r||(r={}))me.call(r,t)&&F(e,t,r[t]);if(A)for(var t of A(r))be.call(r,t)&&F(e,t,r[t]);return e};const he={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Ne(e,r,t,n={}){var o;const{flush:i="pre",deep:p=!0,listenToStorageChanges:v=!0,writeDefaults:_=!0,mergeDefaults:l=!1,shallow:s,window:f=h,eventFilter:d,onError:b=a=>{console.error(a)}}=n,O=(s?q:W)(r);if(!t)try{t=ye("getDefaultStorage",()=>{var a;return(a=h)==null?void 0:a.localStorage})()}catch(a){b(a)}if(!t)return O;const c=J(r),I=we(c),w=(o=n.serializer)!=null?o:he[I],{pause:z,resume:B}=de(O,()=>H(O.value),{flush:i,deep:p,eventFilter:d});return f&&v&&ve(f,"storage",E),E(),O;function H(a){try{a==null?t.removeItem(e):t.setItem(e,w.write(a))}catch(u){b(u)}}function M(a){z();try{const u=a?a.newValue:t.getItem(e);if(u==null)return _&&c!==null&&t.setItem(e,w.write(c)),c;if(!a&&l){const g=w.read(u);return X(l)?l(g,c):I==="object"&&!Array.isArray(g)?C(C({},c),g):g}else return typeof u!="string"?u:w.read(u)}catch(u){b(u)}finally{B()}}function E(a){if(!(a&&a.storageArea!==t)){if(a&&a.key===null){O.value=c;return}a&&a.key!==e||(O.value=M(a))}}}var Q;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Q||(Q={}));var Pe=Object.defineProperty,T=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,D=(e,r,t)=>r in e?Pe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ee=(e,r)=>{for(var t in r||(r={}))Se.call(r,t)&&D(e,t,r[t]);if(T)for(var t of T(r))Ie.call(r,t)&&D(e,t,r[t]);return e};const $e={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ee({linear:re},$e);export{Ne as u};
