(this["webpackJsonpcard-shuffle"]=this["webpackJsonpcard-shuffle"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),c=a(4),i=a.n(c),s=a(2),o=a(5),l=["Emmanuel","Michael","Abiodun","Tochi","Benedict","olawale","yanju","sowobi","Abdulsamad","Chiamaka","Gbemisola","Ibukunoluwa","Inioluwa","Irekanmi","Kitan","Ire","Shade","Momori"],u=["Mary","Michael","Peter","Redeem","Stephanie","Abaeze","Adaobi","Adaure","Ihuoma","Ijeawele","Isoken","Iyawa","Ifechukwu","Idaramfon","Dayo","Durojaiye","Debare","Peter"],b=[{ability:"Super Speed",tag:"\u26a1\u26a1"},{ability:"Super strength",tag:"\ud83d\udcaa\ud83d\udcaa"},{ability:"Super brain",tag:"\ud83e\udde0\ud83e\udde0"},{ability:"Flying",tag:"\u2708\u2708"},{ability:"Super Hearing",tag:"\ud83d\udc42\ud83d\udc42"}],d=function(e){return Math.floor(Math.random()*e.length)};Object.assign(Math,{randomFromRange:function(e,t){if(e>t)throw Error("start should be less than end");return Math.floor(Math.random()*(t-e))+e}});var h=Object(n.createContext)(),j=function(e,t){switch(t.type){case"clearQuery":return Object(s.a)(Object(s.a)({},e),{},{query:""});case"changeTheme":return localStorage.setItem("theme",t.payload),document.querySelector("html").setAttribute("class",t.payload),Object(s.a)(Object(s.a)({},e),{},{theme:t.payload});case"onSearchChange":case"tagOnClick":return Object(s.a)(Object(s.a)({},e),{},{query:t.payload,searchedCards:e.cards.filter((function(e){return e.name.toLowerCase().includes(t.payload.toLowerCase())||e.ability.ability.toLowerCase().includes(t.payload.toLowerCase())}))});default:return Object(s.a)({},e)}},m=function(){for(var e=Math.randomFromRange(10,15),t=[],a=0;a<e;a++)t.push({id:a,imgSet:Math.randomFromRange(1,5),name:"".concat(l[d(l)]," ").concat(u[d(u)]),ability:b[d(b)]});return{cards:t,searchedCards:[],query:""}}(),O=function(e){var t=e.children,a=Object(n.useReducer)(j,m,(function(e){var t=localStorage.getItem("theme")||"magenta";return document.querySelector("html").setAttribute("class",t),Object(s.a)(Object(s.a)({},e),{},{theme:t})})),c=Object(o.a)(a,2),i=c[0],l=c[1];return Object(r.jsx)(h.Provider,{value:{state:i,dispatch:l},children:t})},f=function(){return Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Cool card shuffle"})})},p=function(e){var t=e.ability,a=e.name,n=e.imgSet,c=e.id;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("span",{className:"card-ability-tag",children:t.tag}),Object(r.jsx)("div",{className:"image-container",children:Object(r.jsx)("img",{className:"card-image",src:"https://robohash.org/".concat(c,"?set=set").concat(n,"&size=150x150")})}),Object(r.jsx)("span",{className:"card-name",children:a}),Object(r.jsx)("span",{className:"card-quirk",children:t.ability})]})},y=function(){var e=Object(n.useContext)(h).state;return Object(r.jsx)("section",{className:"card-list",children:""===e.query?e.cards.map((function(e,t){return Object(r.jsx)(p,Object(s.a)({},e),t)})):e.searchedCards.map((function(e,t){return Object(r.jsx)(p,Object(s.a)({},e),t)}))})},g=function(e){var t=e.ability,a=Object(n.useContext)(h),c=a.dispatch,i=a.state.query;return i&&(i=i.toLowerCase()),Object(r.jsx)("button",{onClick:function(){c({type:"tagOnClick",payload:t})},className:i===t.toLowerCase()?"active":"",children:t})},x=function(){var e=Object(n.useContext)(h),t=e.state,a=e.dispatch;return Object(r.jsx)("input",{type:"search",value:t.query,placeholder:"Search...",className:"search-input",onChange:function(e){var t=e.target.value;a({type:"onSearchChange",payload:t})}})},v=function(){var e=["blue","magenta","green","yellow"],t=Object(n.useContext)(h),a=t.state,c=t.dispatch,i=function(e){c({type:"changeTheme",payload:e})};return Object(n.useEffect)((function(){var t=setInterval((function(){i(e[Math.randomFromRange(0,e.length)])}),5e3);return function(){return clearInterval(t)}}),[a.theme]),Object(r.jsx)("div",{className:"theme-picker",children:e.map((function(e,t){return Object(r.jsx)(C,{changeTheme:i,theme:a.theme,name:e},t)}))})},C=function(e){var t=e.name,a=e.theme,n=e.changeTheme;return Object(r.jsx)("span",{onClick:function(){return n(t)},className:"".concat(t," ").concat(a===t?"active":"")})};function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var S=n.createElement("path",{d:"m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"});function k(e,t){var a=e.title,r=e.titleId,c=I(e,["title","titleId"]);return n.createElement("svg",w({viewBox:"0 0 365.696 365.696",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,S)}var N=n.forwardRef(k),M=(a.p,function(){var e=Object(n.useContext)(h),t=e.state,a=e.dispatch;return Object(r.jsx)(N,{onClick:function(){return a({type:"clearQuery"})},className:"close-icon ".concat(t.query&&"active")})}),q=(a(11),function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(O,{children:[Object(r.jsx)(f,{}),Object(r.jsxs)("main",{children:[Object(r.jsxs)("div",{className:"top-tools",children:[Object(r.jsx)(x,{}),Object(r.jsx)(v,{}),Object(r.jsx)("p",{className:"abilities-head",children:"Abilities"}),Object(r.jsx)("div",{className:"abilities-body",children:b.map((function(e,t){return Object(r.jsx)(g,Object(s.a)({},e),t)}))}),Object(r.jsx)(M,{})]}),Object(r.jsx)(y,{})]})]})})});i.a.render(Object(r.jsx)(q,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3a5faa8d.chunk.js.map