"use strict";(self.webpackChunkwallybum_github_io=self.webpackChunkwallybum_github_io||[]).push([[2763],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,b=m["".concat(u,".").concat(f)]||m[f]||s[f]||l;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={title:"\uc2f1\uae00\ud1a4 \ud328\ud134",authors:["wallybum"],tags:["\ub514\uc790\uc778 \ud328\ud134","\uc2f1\uae00\ud1a4 \ud328\ud134"]},o="\uc2f1\uae00\ud1a4 \ud328\ud134(Singleton Pattern)",i={permalink:"/2022/10/07/SingletonPattern",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-10-07/SingletonPattern.md",source:"@site/blog/2022-10-07/SingletonPattern.md",title:"\uc2f1\uae00\ud1a4 \ud328\ud134",description:"\uac1c\uc694",date:"2022-10-07T00:00:00.000Z",formattedDate:"2022\ub144 10\uc6d4 7\uc77c",tags:[{label:"\ub514\uc790\uc778 \ud328\ud134",permalink:"/tags/\ub514\uc790\uc778-\ud328\ud134"},{label:"\uc2f1\uae00\ud1a4 \ud328\ud134",permalink:"/tags/\uc2f1\uae00\ud1a4-\ud328\ud134"}],readingTime:15.785,hasTruncateMarker:!0,authors:[{name:"WallyBum",title:"developer",url:"https://github.com/wallybum",imageURL:"https://github.com/wallybum.png",key:"wallybum"}],frontMatter:{title:"\uc2f1\uae00\ud1a4 \ud328\ud134",authors:["wallybum"],tags:["\ub514\uc790\uc778 \ud328\ud134","\uc2f1\uae00\ud1a4 \ud328\ud134"]},prevItem:{title:"\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134",permalink:"/2022/10/08/AbstractMethodPattern"},nextItem:{title:"\ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc \ud328\ud134",permalink:"/2022/08/10/FactoryMethodPattern"}},u={authorsImageUrls:[void 0]},c=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:2},{value:"\uc0ac\uc6a9 \uc774\uc720",id:"\uc0ac\uc6a9-\uc774\uc720",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uac1c\uc694"},"\uac1c\uc694"),(0,a.kt)("p",null,"\uc624\uc9c1 1\uac1c\uc758 \uc778\uc2a4\ud134\uc2a4\ub9cc\uc744 \uc0dd\uc131\ud558\uc5ec \uc0ac\uc6a9\ud558\ub294 \ub514\uc790\uc778 \ud328\ud134\uc774\ub2e4."),(0,a.kt)("h2",{id:"\uc0ac\uc6a9-\uc774\uc720"},"\uc0ac\uc6a9 \uc774\uc720"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc2f1\uae00\ud1a4\uc73c\ub85c \uc0dd\uc131\ub41c \uac1d\uccb4\ub294 \uc804\uc5ed\uc131\uc744 \ub744\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \uac1d\uccb4\uc640 \uacf5\uc720\uac00 \uc27d\ub2e4. "),(0,a.kt)("li",{parentName:"ul"},"\ubd88\ud544\uc694\ud55c \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\uae30 \ub54c\ubb38\uc5d0 \uba54\ubaa8\ub9ac \uc790\uc6d0 \uc18c\ubaa8\uac00 \uc801\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uacfc \uac19\uc740 \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\uc5b4\ub5a4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \uc5ec\ub7ec \ud658\uacbd\uc124\uc815 \uc815\ubcf4\ub97c \uc124\uc815\ud558\ub824\uace0 \ud560 \ub54c, \uc124\uc815\ud558\ub824\ub294 \uc815\ubcf4\uc218 \ub9cc\ud07c '\ud658\uacbd\uc124\uc815' \uc774\ub77c\ub294 \uc778\uc2a4\ud134\uc2a4\uac00 \uc874\uc7ac\ud558\uba74 \uad00\ub9ac\ub3c4 \uc5b4\ub835\uace0, \ubd88\ud544\uc694\ud55c \uba54\ubaa8\ub9ac \uc790\uc6d0\uc744 \uc0ac\uc6a9\ud558\uac8c \ub41c\ub2e4. \uc774\ub54c '\ud658\uacbd\uc124\uc815' \uc774\ub77c\ub294 \uc778\uc2a4\ud134\uc2a4\ub97c \ub2e8 \ud55c \ubc88\ub9cc \uc0dd\uc131\ud558\uc5ec, \uc774 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc5ec\ub7ec \uc815\ubcf4\ub97c \uc800\uc7a5\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uc0ac\uc6a9\ud55c\ub2e4.")))))}m.isMDXComponent=!0}}]);