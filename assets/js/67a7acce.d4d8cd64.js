"use strict";(self.webpackChunkwallybum_github_io=self.webpackChunkwallybum_github_io||[]).push([[4596],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),u=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=u(r),y=a,b=s["".concat(i,".").concat(y)]||s[y]||m[y]||o;return r?n.createElement(b,l(l({ref:e},p),{},{components:r})):n.createElement(b,l({ref:e},p))}));function b(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=y;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[s]="string"==typeof t?t:a,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6438:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134",authors:["wallybum"],tags:["\ub514\uc790\uc778 \ud328\ud134","\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134"]},l=void 0,c={permalink:"/2022/10/08/AbstractMethodPattern",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-10-08/AbstractMethodPattern.md",source:"@site/blog/2022-10-08/AbstractMethodPattern.md",title:"\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134",description:"\ud329\ud1a0\ub9ac \ud328\ud134 \uc911 \ud558\ub098\uc778 \ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134(Abstract Factory Pattern)\uc774\uba70, \ub2e4\ub978 \uc885\ub958\ub85c\ub294 \ud329\ud1a0\ub9ac \ud328\ud134(Factory Pattern) (\ub2e4\ub978 \uc774\ub984\uc73c\ub85c\ub294 \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc \ud328\ud134(Factory Method Pattern) \uc774 \uc788\ub2e4.",date:"2022-10-08T00:00:00.000Z",formattedDate:"2022\ub144 10\uc6d4 8\uc77c",tags:[{label:"\ub514\uc790\uc778 \ud328\ud134",permalink:"/tags/\ub514\uc790\uc778-\ud328\ud134"},{label:"\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134",permalink:"/tags/\ucd94\uc0c1-\ud329\ud1a0\ub9ac-\ud328\ud134"}],readingTime:1.235,hasTruncateMarker:!0,authors:[{name:"WallyBum",title:"developer",url:"https://github.com/wallybum",imageURL:"https://github.com/wallybum.png",key:"wallybum"}],frontMatter:{title:"\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134",authors:["wallybum"],tags:["\ub514\uc790\uc778 \ud328\ud134","\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134"]},prevItem:{title:"Docker - no route to host",permalink:"/2022/11/30/no-route-to-host"},nextItem:{title:"\uc2f1\uae00\ud1a4 \ud328\ud134",permalink:"/2022/10/07/SingletonPattern"}},i={authorsImageUrls:[void 0]},u=[{value:"\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134",id:"\ucd94\uc0c1-\ud329\ud1a0\ub9ac-\ud328\ud134",level:2}],p={toc:u};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud329\ud1a0\ub9ac \ud328\ud134 \uc911 \ud558\ub098\uc778 ",(0,a.kt)("strong",{parentName:"p"},"\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134(Abstract Factory Pattern)"),"\uc774\uba70, \ub2e4\ub978 \uc885\ub958\ub85c\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\ud329\ud1a0\ub9ac \ud328\ud134(Factory Pattern) (\ub2e4\ub978 \uc774\ub984\uc73c\ub85c\ub294 \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc \ud328\ud134(Factory Method Pattern)")," \uc774 \uc788\ub2e4."),(0,a.kt)("h2",{id:"\ucd94\uc0c1-\ud329\ud1a0\ub9ac-\ud328\ud134"},"\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134"),(0,a.kt)("p",null,"\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134\uc740 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud558\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\ud329\ud1a0\ub9ac\ub97c \ucd94\uc0c1\ud654(\uc778\ud130\ud398\uc774\uc2a4 \uc815\uc758 \ubc0f \ucd94\uc0c1 \ud074\ub798\uc2a4\ub85c \uc815\uc758\ud558\ub294 \ub4f1)\ub41c \ud615\ud0dc\ub85c \uc815\uc758"),"\ud558\ub294 \ud328\ud134\uc774\ub2e4."),(0,a.kt)("p",null,"\uad6c\uccb4\uc801\uc778 \ud329\ud1a0\ub9ac\uc5d0\uc11c \uad6c\uccb4\uc801\uc778 \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4dc\ub294 \uacfc\uc815 \uae4c\uc9c0\ub294 \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc \ud328\ud134\uacfc \ub9e4\uc6b0 \uc720\uc0ac\ud558\uc9c0\ub9cc,\n\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8 \uad00\uc810\uc5d0\uc11c \uc791\uc131\ub41c \ud328\ud134\uc774\ub77c\uace0 \ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134\uc758 \ubaa9\uc801\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc(\ud329\ud1a0\ub9ac\uc5d0\uc11c \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4e4\uc5b4 \uc0ac\uc6a9\ud558\ub294 \ucf54\ub4dc)\ub97c \uc778\ud130\ud398\uc774\uc2a4 \uae30\ubc18\uc73c\ub85c \ucf54\ub529\uc744 \ud560 \uc218 \uc788\ub3c4\ub85d \ud55c\ub2e4."))}s.isMDXComponent=!0}}]);