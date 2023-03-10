import{e as H,r as B,m as I,i as Y,w as Z,b as G,c as L,d as D,t as $,g as A,o as T,n as tt,f as et,h as st,j as nt,k as ct}from"./vendor.vue-c87ed937.js";/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let J;const R=t=>J=t,N=Symbol();function C(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var k;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(k||(k={}));function it(){const t=H(!0),c=t.run(()=>B({}));let s=[],e=[];const r=I({install(u){R(r),r._a=u,u.provide(N,r),u.config.globalProperties.$pinia=r,e.forEach(a=>s.push(a)),e=[]},use(u){return!this._a&&!Y?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:c});return r}const W=()=>{};function V(t,c,s,e=W){t.push(c);const r=()=>{const u=t.indexOf(c);u>-1&&(t.splice(u,1),e())};return!s&&A()&&T(r),r}function p(t,...c){t.slice().forEach(s=>{s(...c)})}function x(t,c){t instanceof Map&&c instanceof Map&&c.forEach((s,e)=>t.set(e,s)),t instanceof Set&&c instanceof Set&&c.forEach(t.add,t);for(const s in c){if(!c.hasOwnProperty(s))continue;const e=c[s],r=t[s];C(r)&&C(e)&&t.hasOwnProperty(s)&&!L(e)&&!D(e)?t[s]=x(r,e):t[s]=e}return t}const ot=Symbol();function rt(t){return!C(t)||!t.hasOwnProperty(ot)}const{assign:y}=Object;function ut(t){return!!(L(t)&&t.effect)}function ft(t,c,s,e){const{state:r,actions:u,getters:a}=c,f=s.state.value[t];let g;function b(){f||(s.state.value[t]=r?r():{});const v=st(s.state.value[t]);return y(v,u,Object.keys(a||{}).reduce((d,m)=>(d[m]=I(nt(()=>{R(s);const _=s._s.get(t);return a[m].call(_,_)})),d),{}))}return g=q(t,b,c,s,e,!0),g}function q(t,c,s={},e,r,u){let a;const f=y({actions:{}},s),g={deep:!0};let b,v,d=I([]),m=I([]),_;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),B({});let O;function F(o){let n;b=v=!1,typeof o=="function"?(o(e.state.value[t]),n={type:k.patchFunction,storeId:t,events:_}):(x(e.state.value[t],o),n={type:k.patchObject,payload:o,storeId:t,events:_});const h=O=Symbol();tt().then(()=>{O===h&&(b=!0)}),v=!0,p(d,n,e.state.value[t])}const z=u?function(){const{state:n}=s,h=n?n():{};this.$patch(S=>{y(S,h)})}:W;function K(){a.stop(),d=[],m=[],e._s.delete(t)}function M(o,n){return function(){R(e);const h=Array.from(arguments),S=[],w=[];function U(i){S.push(i)}function X(i){w.push(i)}p(m,{args:h,name:o,store:l,after:U,onError:X});let E;try{E=n.apply(this&&this.$id===t?this:l,h)}catch(i){throw p(w,i),i}return E instanceof Promise?E.then(i=>(p(S,i),i)).catch(i=>(p(w,i),Promise.reject(i))):(p(S,E),E)}}const Q={_p:e,$id:t,$onAction:V.bind(null,m),$patch:F,$reset:z,$subscribe(o,n={}){const h=V(d,o,n.detached,()=>S()),S=a.run(()=>Z(()=>e.state.value[t],w=>{(n.flush==="sync"?v:b)&&o({storeId:t,type:k.direct,events:_},w)},y({},g,n)));return h},$dispose:K},l=G(Q);e._s.set(t,l);const P=e._e.run(()=>(a=H(),a.run(()=>c())));for(const o in P){const n=P[o];if(L(n)&&!ut(n)||D(n))u||(j&&rt(n)&&(L(n)?n.value=j[o]:x(n,j[o])),e.state.value[t][o]=n);else if(typeof n=="function"){const h=M(o,n);P[o]=h,f.actions[o]=n}}return y(l,P),y($(l),P),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:o=>{F(n=>{y(n,o)})}}),e._p.forEach(o=>{y(l,a.run(()=>o({store:l,app:e._a,pinia:e,options:f})))}),j&&u&&s.hydrate&&s.hydrate(l.$state,j),b=!0,v=!0,l}function lt(t,c,s){let e,r;const u=typeof c=="function";typeof t=="string"?(e=t,r=u?s:c):(r=t,e=t.id);function a(f,g){const b=et();return f=f||b&&ct(N,null),f&&R(f),f=J,f._s.has(e)||(u?q(e,c,r,f):ft(e,r,f)),f._s.get(e)}return a.$id=e,a}export{it as c,lt as d};
