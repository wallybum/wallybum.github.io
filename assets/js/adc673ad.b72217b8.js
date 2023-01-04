"use strict";(self.webpackChunkwallybum_github_io=self.webpackChunkwallybum_github_io||[]).push([[1419],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=i(r),k=o,d=s["".concat(u,".").concat(k)]||s[k]||m[k]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=k;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},9796:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={authors:["wallybum"],tags:["Docker","Bridge","Network"]},l="Docker - no route to host",c={permalink:"/2022/11/30/no-route-to-host",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-11-30/no-route-to-host.md",source:"@site/blog/2022-11-30/no-route-to-host.md",title:"Docker - no route to host",description:"\uac1c\uc694",date:"2022-11-30T00:00:00.000Z",formattedDate:"2022\ub144 11\uc6d4 30\uc77c",tags:[{label:"Docker",permalink:"/tags/docker"},{label:"Bridge",permalink:"/tags/bridge"},{label:"Network",permalink:"/tags/network"}],readingTime:2.03,hasTruncateMarker:!0,authors:[{name:"WallyBum",title:"developer",url:"https://github.com/wallybum",imageURL:"https://github.com/wallybum.png",key:"wallybum"}],frontMatter:{authors:["wallybum"],tags:["Docker","Bridge","Network"]},nextItem:{title:"\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134",permalink:"/2022/10/08/AbstractMethodPattern"}},u={authorsImageUrls:[void 0]},i=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:2},{value:"\uc11c\ubc84 \ud658\uacbd",id:"\uc11c\ubc84-\ud658\uacbd",level:2},{value:"\uc624\ub958 \ubc1c\uc0dd",id:"\uc624\ub958-\ubc1c\uc0dd",level:2},{value:"\ud574\uacb0",id:"\ud574\uacb0",level:2}],p={toc:i};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\uac1c\uc694"},"\uac1c\uc694"),(0,o.kt)("p",null,"\uae30\uc874 Docker 4.2.X(2021.11\uc6d4 \ub9b4\ub9ac\uc988) \ub97c \uc0ac\uc6a9\ud558\ub2e4\uac00, Docker \uc5c5\ub370\uc774\ud2b8\ub97c \uc9c4\ud589\ud558\uc600\ub2e4. \uc5c5\ub370\uc774\ud2b8\ub97c \ub9c8\uce5c \ud6c4 \ud544\uc694\ud55c \ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub97c \ub2e4\uc6b4\ubc1b\uc73c\ub824\uace0 \uc2dc\ub3c4\ud558\uc600\uc73c\ub098, \uc811\uc18d\uc774 \ub418\uc9c0 \uc54a\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc600\ub2e4."),(0,o.kt)("h2",{id:"\uc11c\ubc84-\ud658\uacbd"},"\uc11c\ubc84 \ud658\uacbd"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OS : Mac OS Ventura 13.0.1"),(0,o.kt)("li",{parentName:"ul"},"\ucee8\ud14c\uc774\ub108 : Docker 4.14.1"),(0,o.kt)("li",{parentName:"ul"})),(0,o.kt)("h2",{id:"\uc624\ub958-\ubc1c\uc0dd"},"\uc624\ub958 \ubc1c\uc0dd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'\u27a1\ufe0e docker search oracle-xe-11g\nError response from daemon: Get "https://index.docker.io/v1/search?q=oracle-xe-11g&n=25": proxyconnect tcp: dial tcp 192.168.65.128:3128: connect: no route to host\n')),(0,o.kt)("p",null,"\uc704 \uc624\ub958\ub97c \uac80\uc0c9\ud574\ubcf4\ub2c8 \ub2e4\uc74c\uacfc \uac19\uc740 \ud574\uacb0\ucc45\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Docker \ucee8\ud14c\uc774\ub108\uc5d0\uc11c Host\ub85c \uac00\ub294 \ud2b8\ub798\ud53d\uc774 \uc81c\ud55c\ub418\uace0 \uc788\uc73c\ubbc0\ub85c, \ubc29\ud654\ubcbd \uaddc\uce59 \uc218\uc815.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Docker \ud658\uacb0\uc124\uc815\uc5d0\uc11c bridge network \ub300\uc5ed\uc744 \ubcc0\uacbd (bip \uc124\uc815)"))),(0,o.kt)("h2",{id:"\ud574\uacb0"},"\ud574\uacb0"),(0,o.kt)("p",null,"stackoverflow\uc5d0\uc11c \uc800\uba85\uc131\uc774 \uc788\ub294 \uc0ac\ub78c\ub4e4\uc774 \uc704\uc5d0 \ub300\ud55c \ud574\uacb0\ucc45\uc744 \uc81c\uc2dc\ud558\uc600\uc73c\ub098, Docker \uc5c5\ub370\uc774\ud2b8 \uc804\uc5d0\ub294 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub358 \ubb38\uc81c\uac00 \uc5c5\ub370\uc774\ud2b8 \ud6c4 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc600\uae30 \ub54c\ubb38\uc5d0, \ud604\uc7ac \uc0c1\ud669\uc5d0\uc11c\ub294 \uc81c\uc2dc\ub41c \ud574\uacb0\ucc45\uc774 \uc801\uc6a9\ub418\uc9c0 \uc54a\ub294\ub2e4\uace0 \uc0dd\uac01\ud558\uc600\ub2e4."),(0,o.kt)("p",null,"Docker Hub\uc5d0 \uc811\uc18d\uc774 \uc548\ub418\uae30 \ub54c\ubb38\uc5d0, \uba3c\uc800 Docker\uc5d0 \uc124\uc815\ub41c \ub124\ud2b8\uc6cc\ud06c \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud655\uc778\ud558\uc600\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"\u25b6 docker network ls\nNETWORK ID     NAME      DRIVER    SCOPE\n787cb617518a   bridge    bridge    local\n5e8414efbceb   cluster   bridge    local\n74c728f4e9d9   host      host      local\nd11834db609c   none      null      local\n")),(0,o.kt)("p",null,"Docker\uc5d0 \ub300\ud55c \ud074\ub7ec\uc2a4\ud130 \uc124\uc815\uc744 \ud558\uc9c0 \uc54a\uc558\uc74c\uc5d0\ub3c4, \ud074\ub7ec\uc2a4\ud130 \ub124\ud2b8\uc6cc\ud06c \uc778\ud130\ud398\uc774\uc2a4\uac00 \ube0c\ub9bf\uc9c0 \ubaa8\ub4dc\ub85c \uc124\uc815\ub41c\uac83\uc744 \ud655\uc778\ud558\uc600\ub2e4. "),(0,o.kt)("p",null,"\ud574\ub2f9 \ub124\ud2b8\uc6cc\ud06c\ub97c \uc81c\uac70\ud558\uc5ec \ud574\uacb0\ud558\uc600\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img1",src:r(5552).Z,width:"2792",height:"882"})))}s.isMDXComponent=!0},5552:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/removeNetwork-121fcf52b79b5da6c7d126394ab2aedc.png"}}]);