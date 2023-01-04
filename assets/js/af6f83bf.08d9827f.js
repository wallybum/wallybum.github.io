"use strict";(self.webpackChunkwallybum_github_io=self.webpackChunkwallybum_github_io||[]).push([[8188],{3905:(t,n,e)=>{e.d(n,{Zo:()=>g,kt:()=>m});var a=e(7294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function r(t,n){if(null==t)return{};var e,a,i=function(t,n){if(null==t)return{};var e,a,i={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var c=a.createContext({}),u=function(t){var n=a.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):s(s({},n),t)),e},g=function(t){var n=u(t.components);return a.createElement(c.Provider,{value:n},t.children)},p="mdxType",o={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,i=t.mdxType,l=t.originalType,c=t.parentName,g=r(t,["components","mdxType","originalType","parentName"]),p=u(e),k=i,m=p["".concat(c,".").concat(k)]||p[k]||o[k]||l;return e?a.createElement(m,s(s({ref:n},g),{},{components:e})):a.createElement(m,s({ref:n},g))}));function m(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var l=e.length,s=new Array(l);s[0]=k;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=t,r[p]="string"==typeof t?t:i,s[1]=r;for(var u=2;u<l;u++)s[u]=e[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},6009:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var a=e(7462),i=(e(7294),e(3905));const l={title:"\uc2f1\uae00\ud1a4 \ud328\ud134",authors:["wallybum"],tags:["\ub514\uc790\uc778 \ud328\ud134","\uc2f1\uae00\ud1a4 \ud328\ud134"]},s="\uc2f1\uae00\ud1a4 \ud328\ud134(Singleton Pattern)",r={permalink:"/2022/10/07/SingletonPattern",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-10-07/SingletonPattern.md",source:"@site/blog/2022-10-07/SingletonPattern.md",title:"\uc2f1\uae00\ud1a4 \ud328\ud134",description:"\uac1c\uc694",date:"2022-10-07T00:00:00.000Z",formattedDate:"2022\ub144 10\uc6d4 7\uc77c",tags:[{label:"\ub514\uc790\uc778 \ud328\ud134",permalink:"/tags/\ub514\uc790\uc778-\ud328\ud134"},{label:"\uc2f1\uae00\ud1a4 \ud328\ud134",permalink:"/tags/\uc2f1\uae00\ud1a4-\ud328\ud134"}],readingTime:15.785,hasTruncateMarker:!0,authors:[{name:"WallyBum",title:"developer",url:"https://github.com/wallybum",imageURL:"https://github.com/wallybum.png",key:"wallybum"}],frontMatter:{title:"\uc2f1\uae00\ud1a4 \ud328\ud134",authors:["wallybum"],tags:["\ub514\uc790\uc778 \ud328\ud134","\uc2f1\uae00\ud1a4 \ud328\ud134"]},prevItem:{title:"\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134",permalink:"/2022/10/08/AbstractMethodPattern"},nextItem:{title:"\ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc \ud328\ud134",permalink:"/2022/08/10/FactoryMethodPattern"}},c={authorsImageUrls:[void 0]},u=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:2},{value:"\uc0ac\uc6a9 \uc774\uc720",id:"\uc0ac\uc6a9-\uc774\uc720",level:2},{value:"\uc2f1\uae00\ud1a4 \ud328\ud134 \uc801\uc6a9 \uc804",id:"\uc2f1\uae00\ud1a4-\ud328\ud134-\uc801\uc6a9-\uc804",level:2},{value:"\uc2f1\uae00\ud1a4 \ud328\ud134 \uc801\uc6a9 \uc608\uc81c",id:"\uc2f1\uae00\ud1a4-\ud328\ud134-\uc801\uc6a9-\uc608\uc81c",level:2},{value:"Static \uba54\uc11c\ub4dc\ub97c \uc774\uc6a9\ud55c \uc2f1\uae00\ud1a4 \ud328\ud134 \uc801\uc6a9",id:"static-\uba54\uc11c\ub4dc\ub97c-\uc774\uc6a9\ud55c-\uc2f1\uae00\ud1a4-\ud328\ud134-\uc801\uc6a9",level:3},{value:"synchronized\ub97c \uc774\uc6a9\ud558\uc5ec \uba40\ud2f0 \uc4f0\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c \uc548\uc804\ud558\uac8c \uc2f1\uae00\ud1a4 \ud328\ud134 \uad6c\ud604",id:"synchronized\ub97c-\uc774\uc6a9\ud558\uc5ec-\uba40\ud2f0-\uc4f0\ub808\ub4dc-\ud658\uacbd\uc5d0\uc11c-\uc548\uc804\ud558\uac8c-\uc2f1\uae00\ud1a4-\ud328\ud134-\uad6c\ud604",level:3},{value:"\uc774\ub978 \ucd08\uae30\ud654(eager initialization)\ub97c \uc774\uc6a9\ud558\uc5ec \uba40\ud2f0 \uc4f0\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c \uc548\uc804\ud558\uac8c \uc2f1\uae00\ud1a4 \ud328\ud134 \uad6c\ud604",id:"\uc774\ub978-\ucd08\uae30\ud654eager-initialization\ub97c-\uc774\uc6a9\ud558\uc5ec-\uba40\ud2f0-\uc4f0\ub808\ub4dc-\ud658\uacbd\uc5d0\uc11c-\uc548\uc804\ud558\uac8c-\uc2f1\uae00\ud1a4-\ud328\ud134-\uad6c\ud604",level:3},{value:"Double Checked Locking\uc744 \uc774\uc6a9\ud558\uc5ec \uba40\ud2f0 \uc4f0\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c \uc548\uc804\ud558\uac8c \uc2f1\uae00\ud1a4 \ud328\ud134 \uad6c\ud604",id:"double-checked-locking\uc744-\uc774\uc6a9\ud558\uc5ec-\uba40\ud2f0-\uc4f0\ub808\ub4dc-\ud658\uacbd\uc5d0\uc11c-\uc548\uc804\ud558\uac8c-\uc2f1\uae00\ud1a4-\ud328\ud134-\uad6c\ud604",level:3},{value:"Static Inner \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uba40\ud2f0 \uc4f0\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c \uc548\uc804\ud558\uac8c \uc2f1\uae00\ud1a4 \ud328\ud134 \uad6c\ud604",id:"static-inner-\ud074\ub798\uc2a4\ub97c-\uc0ac\uc6a9\ud558\uc5ec-\uba40\ud2f0-\uc4f0\ub808\ub4dc-\ud658\uacbd\uc5d0\uc11c-\uc548\uc804\ud558\uac8c-\uc2f1\uae00\ud1a4-\ud328\ud134-\uad6c\ud604",level:3},{value:"\uc2f1\uae00\ud1a4 \ud328\ud134\uc744 \ubb34\ub825\ud654 \uc2dc\ud0a4\ub294 \ubc29\ubc95",id:"\uc2f1\uae00\ud1a4-\ud328\ud134\uc744-\ubb34\ub825\ud654-\uc2dc\ud0a4\ub294-\ubc29\ubc95",level:2},{value:"\ub9ac\ud50c\ub809\uc158",id:"\ub9ac\ud50c\ub809\uc158",level:3},{value:"\uc9c1\ub82c\ud654 &amp; \uc5ed\uc9c1\ub82c\ud654",id:"\uc9c1\ub82c\ud654--\uc5ed\uc9c1\ub82c\ud654",level:3},{value:"Enum\uc744 \uc774\uc6a9\ud55c \uc2f1\uae00\ud1a4 \uac1d\uccb4 \ubcf4\uc7a5",id:"enum\uc744-\uc774\uc6a9\ud55c-\uc2f1\uae00\ud1a4-\uac1d\uccb4-\ubcf4\uc7a5",level:3},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}],g={toc:u};function p(t){let{components:n,...l}=t;return(0,i.kt)("wrapper",(0,a.Z)({},g,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\uac1c\uc694"},"\uac1c\uc694"),(0,i.kt)("p",null,"\uc624\uc9c1 1\uac1c\uc758 \uc778\uc2a4\ud134\uc2a4\ub9cc\uc744 \uc0dd\uc131\ud558\uc5ec \uc0ac\uc6a9\ud558\ub294 \ub514\uc790\uc778 \ud328\ud134\uc774\ub2e4."),(0,i.kt)("h2",{id:"\uc0ac\uc6a9-\uc774\uc720"},"\uc0ac\uc6a9 \uc774\uc720"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc2f1\uae00\ud1a4\uc73c\ub85c \uc0dd\uc131\ub41c \uac1d\uccb4\ub294 \uc804\uc5ed\uc131\uc744 \ub744\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \uac1d\uccb4\uc640 \uacf5\uc720\uac00 \uc27d\ub2e4. "),(0,i.kt)("li",{parentName:"ul"},"\ubd88\ud544\uc694\ud55c \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\uae30 \ub54c\ubb38\uc5d0 \uba54\ubaa8\ub9ac \uc790\uc6d0 \uc18c\ubaa8\uac00 \uc801\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uc74c\uacfc \uac19\uc740 \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\uc5b4\ub5a4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \uc5ec\ub7ec \ud658\uacbd\uc124\uc815 \uc815\ubcf4\ub97c \uc124\uc815\ud558\ub824\uace0 \ud560 \ub54c, \uc124\uc815\ud558\ub824\ub294 \uc815\ubcf4\uc218 \ub9cc\ud07c '\ud658\uacbd\uc124\uc815' \uc774\ub77c\ub294 \uc778\uc2a4\ud134\uc2a4\uac00 \uc874\uc7ac\ud558\uba74 \uad00\ub9ac\ub3c4 \uc5b4\ub835\uace0, \ubd88\ud544\uc694\ud55c \uba54\ubaa8\ub9ac \uc790\uc6d0\uc744 \uc0ac\uc6a9\ud558\uac8c \ub41c\ub2e4. \uc774\ub54c '\ud658\uacbd\uc124\uc815' \uc774\ub77c\ub294 \uc778\uc2a4\ud134\uc2a4\ub97c \ub2e8 \ud55c \ubc88\ub9cc \uc0dd\uc131\ud558\uc5ec, \uc774 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc5ec\ub7ec \uc815\ubcf4\ub97c \uc800\uc7a5\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uc0ac\uc6a9\ud55c\ub2e4.")))),(0,i.kt)("h2",{id:"\uc2f1\uae00\ud1a4-\ud328\ud134-\uc801\uc6a9-\uc804"},"\uc2f1\uae00\ud1a4 \ud328\ud134 \uc801\uc6a9 \uc804"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Singleton.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Singleton {\n    public static void main(String[] args) {\n        Settings settings = new Settings();\n        Settings settings1 = new Settings();\n        System.out.println(settings == settings1); // false\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Settings.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Settings {\n}\n")),(0,i.kt)("p",null,"\uc704\uc640 \uac19\uc774 new\ub97c \uc774\uc6a9\ud558\uc5ec \ub9cc\ub4e0 \uc778\uc2a4\ud134\uc2a4\ub4e4\uc740 \uc11c\ub85c \uac19\uc9c0 \uc54a\ub2e4."),(0,i.kt)("h2",{id:"\uc2f1\uae00\ud1a4-\ud328\ud134-\uc801\uc6a9-\uc608\uc81c"},"\uc2f1\uae00\ud1a4 \ud328\ud134 \uc801\uc6a9 \uc608\uc81c"),(0,i.kt)("h3",{id:"static-\uba54\uc11c\ub4dc\ub97c-\uc774\uc6a9\ud55c-\uc2f1\uae00\ud1a4-\ud328\ud134-\uc801\uc6a9"},"Static \uba54\uc11c\ub4dc\ub97c \uc774\uc6a9\ud55c \uc2f1\uae00\ud1a4 \ud328\ud134 \uc801\uc6a9"),(0,i.kt)("p",null,"Settings\uc5d0 \ub300\ud55c Static \ud544\ub4dc\ub97c \ub9cc\ub4e4\uace0, \uc678\ubd80\uc5d0\uc11c \ud574\ub2f9 \uc0dd\uc131\uc790\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 Static \uba54\uc11c\ub4dc\ub97c \ub9cc\ub4e0\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Singleton.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Singleton {\n    public static void main(String[] args) {\n        Settings settings = Settings.getInstance();\n        Settings settings1 = Settings.getInstance();\n        System.out.println(settings == settings1); // true\n    }\n}  \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Settings.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Settings {\n\n    private static Settings instance;\n\n    /*\n       instance\uac00 null\uc77c \uacbd\uc6b0 \uc0c8\ub85c\uc6b4 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud558\uc5ec \ubc18\ud658\ud558\uace0,\n       \uc774\ubbf8 \uc788\ub2e4\uba74 \uae30\uc874\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \ubc18\ud658\ud55c\ub2e4.\n    */ \n    public static Settings getInstance() {\n        if (instance == null) {\n            instance = new Settings();\n        }\n        return instance; \n    }\n}\n")),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc \uc704 \ubc29\ubc95\uc740 ",(0,i.kt)("strong",{parentName:"p"},"\uba40\ud2f0 \uc4f0\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c \uc548\uc804\ud558\uc9c0 \uc54a\ub2e4.")),(0,i.kt)("h3",{id:"synchronized\ub97c-\uc774\uc6a9\ud558\uc5ec-\uba40\ud2f0-\uc4f0\ub808\ub4dc-\ud658\uacbd\uc5d0\uc11c-\uc548\uc804\ud558\uac8c-\uc2f1\uae00\ud1a4-\ud328\ud134-\uad6c\ud604"},"synchronized\ub97c \uc774\uc6a9\ud558\uc5ec \uba40\ud2f0 \uc4f0\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c \uc548\uc804\ud558\uac8c \uc2f1\uae00\ud1a4 \ud328\ud134 \uad6c\ud604"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img1",src:e(4608).Z,width:"1280",height:"303"})),(0,i.kt)("p",null,"\uc704 \uadf8\ub9bc\uacfc \uac19\uc774 ",(0,i.kt)("strong",{parentName:"p"},"\uc4f0\ub808\ub4dc 1\ubc88"),"\uc774 \ube68\uac04\uc0c9 1\ubc88\uc758 if\uc808\uc744 \ub9cc\ub09c \ub4a4, instance\uac00 null \uc774\uc5ec\uc11c \ube68\uac04\uc0c9 2\ubc88 \ub0b4\ubd80\ub85c \ub4e4\uc5b4\uac14\uc744 \ub54c, ",(0,i.kt)("strong",{parentName:"p"},"\uc4f0\ub808\ub4dc 2\ubc88"),"\uc774 \ud30c\ub780\uc0c9\uc758 1\ubc88\uc758 if\uc808\uc744 \ub9cc\ub09c \ub4a4, instance\uac00 null \uc774\uc5ec\uc11c \ud30c\ub780\uc0c9 2\ubc88 \ub0b4\ubd80\ub85c \ub4e4\uc5b4\uac08 \uc218 \ub3c4 \uc788\ub2e4."),(0,i.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74, \uac01 \uc4f0\ub808\ub4dc \ubcc4\ub85c \uac01\uac01\uc758 \uc778\uc2a4\ud134\uc2a4\uac00 \uc0dd\uc131\ub418\uae30 \ub54c\ubb38\uc5d0, \uac01 \uc778\uc2a4\ud134\uc2a4\ub294 \uac19\ub2e4\ub294 \uac83\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc5c6\ub2e4."),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc, ",(0,i.kt)("strong",{parentName:"p"},"synchronized \ud0a4\uc6cc\ub4dc\ub97c \uc0ac\uc6a9"),"\ud558\uc5ec ",(0,i.kt)("strong",{parentName:"p"},"getInstance()")," \uba54\uc11c\ub4dc\uc5d0 \ud55c\ubc88\uc5d0 \ub531 \ud558\ub098\uc758 \uc4f0\ub808\ub4dc\ub9cc \ub4e4\uc5b4\uc624\ub3c4\ub85d \ud558\uba74, \ud558\ub098\uc758 \uc778\uc2a4\ud134\uc2a4\uac00 \uc0dd\uc131\ub418\ub294\uac83\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Singleton.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Singleton {\n    public static void main(String[] args) {\n        Settings settings = Settings.getInstance();\n        Settings settings1 = Settings.getInstance();\n        System.out.println(settings == settings1); // true\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Settings.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Settings {\n\u200b\n    private static Settings instance;\n\u200b\n       public static synchronized Settings getInstance() {\n        if (instance == null) {\n            instance = new Settings();\n        }\n        return instance;\n    }\n}\n")),(0,i.kt)("p",null,"Synchronized\uc758 \ub2e8\uc810\uc740 getInstance()\ub97c \ud638\ucd9c\ud560 \ub54c \ub9c8\ub2e4 \ub3d9\uae30\ud654\ub97c \ucc98\ub9ac\ud558\ub294 \uc791\uc5c5 \ub54c\ubb38\uc5d0 \uc131\ub2a5 \uc0c1\uc758 \uc800\ud558\uac00 \ub420 \uc218 \uc788\ub2e4."),(0,i.kt)("h3",{id:"\uc774\ub978-\ucd08\uae30\ud654eager-initialization\ub97c-\uc774\uc6a9\ud558\uc5ec-\uba40\ud2f0-\uc4f0\ub808\ub4dc-\ud658\uacbd\uc5d0\uc11c-\uc548\uc804\ud558\uac8c-\uc2f1\uae00\ud1a4-\ud328\ud134-\uad6c\ud604"},"\uc774\ub978 \ucd08\uae30\ud654(eager initialization)\ub97c \uc774\uc6a9\ud558\uc5ec \uba40\ud2f0 \uc4f0\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c \uc548\uc804\ud558\uac8c \uc2f1\uae00\ud1a4 \ud328\ud134 \uad6c\ud604"),(0,i.kt)("p",null,"\ub9cc\uc57d synchronized\uc5d0 \ub300\ud55c \uc0ac\uc6a9\uc774 \ubd80\ub2f4 \ub41c\ub2e4\uba74, \uc774\ub978 \ucd08\uae30\ud654 \ubc29\ubc95\uc744 \uc774\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("p",null,"Settings \ud074\ub798\uc2a4\uac00 \ub85c\ub529\ub418\ub294 \uc2dc\uc810\uc5d0\uc11c static \ud544\ub4dc\uac00 \ucd08\uae30\ud654 \ub418\uae30 \ub54c\ubb38\uc5d0 Thread-Safe \ud558\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Singleton.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Singleton {\n    public static void main(String[] args) {\n        Settings settings = Settings.getInstance();\n        Settings settings1 = Settings.getInstance();\n        System.out.println(settings == settings1); // true\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Settings.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Settings {\n    /* Settings \ud074\ub798\uc2a4\uac00 \ub85c\ub4dc\ub418\ub294 \uc2dc\uc810\uc5d0 INSTANCE \ubcc0\uc218\uac00 \ucd08\uae30\ud654 \ub418\uba74\uc11c \ubbf8\ub9ac \ub9cc\ub4e4\uc5b4 \ub193\uc558\uae30 \ub54c\ubb38\uc5d0, \uba40\ud2f0 \uc4f0\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c\ub3c4 \uc548\uc804\ud558\ub2e4.*/\n    private static final Settings INSTNACE = new Settings();\n\n    private static Settings() { }\n    \n    public static Settings getInstance() {\n        return INSTNACE;\n    }\n}\n")),(0,i.kt)("h3",{id:"double-checked-locking\uc744-\uc774\uc6a9\ud558\uc5ec-\uba40\ud2f0-\uc4f0\ub808\ub4dc-\ud658\uacbd\uc5d0\uc11c-\uc548\uc804\ud558\uac8c-\uc2f1\uae00\ud1a4-\ud328\ud134-\uad6c\ud604"},"Double Checked Locking\uc744 \uc774\uc6a9\ud558\uc5ec \uba40\ud2f0 \uc4f0\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c \uc548\uc804\ud558\uac8c \uc2f1\uae00\ud1a4 \ud328\ud134 \uad6c\ud604"),(0,i.kt)("p",null,"\uc774\ub978 \ucd08\uae30\ud654 \ubc29\uc2dd(eager initialization)\uc758 \uacbd\uc6b0 \uc778\uc2a4\ud134\uc2a4\ub97c \ubbf8\ub9ac \ub9cc\ub4e4\uc5b4 \ub193\ub294\ub370, \uc774 \uc778\uc2a4\ud134\uc2a4\uac00 \ub85c\ub4dc\ub420 \ub54c \ub9ce\uc740 \ub9ac\uc18c\uc2a4\ub97c \uc18c\ubaa8\ud558\ub294(\ube44\uc6a9\uc774 \ube44\uc2fc) \uc778\uc2a4\ud134\uc2a4 \uc774\uac70\ub098, \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc2e4\ud589 \uc2dc\uc810\uc5d0\uc11c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uc778\uc2a4\ud134\uc2a4\uc77c \uacbd\uc6b0, \ub2f9\uc7a5 \uc0ac\uc6a9\ud558\uc9c0\ub3c4 \uc54a\ub294 \ub9ac\uc18c\uc2a4\ub97c \uc18c\ubaa8\ud558\ub294 \uac83\uc774 \ubd80\ub2f4\ub420 \uc218 \uc788\ub2e4."),(0,i.kt)("p",null,"\ub610\ud55c \uc55e\uc5d0\uc11c \uc791\uc131\ub41c Synchronized \ud0a4\uc6cc\ub4dc\ub97c \uc0ac\uc6a9\ud558\uba74 ",(0,i.kt)("strong",{parentName:"p"},"\ub3d9\uae30\ud654")," \ub97c \ucc98\ub9ac\ud558\ub294\ub370 \ube44\uc6a9\uc774 \uc2e0\uacbd\uc774 \uc4f0\uc778\ub2e4\uba74, instance\uac00 \uc5c6\uc744 \uacbd\uc6b0 Settings \ud074\ub798\uc2a4\uc5d0 \ub300\ud55c Synchronized \ube14\ub7ed\uc744 \uc0dd\uc131\ud558\uace0,\nSynchronized \ube14\ub7ed \ub0b4\uc5d0\uc11c instance\ub97c \uc0dd\uc131\ud558\ub3c4\ub85d \ud55c\ub2e4. \uc544\ub798\uc640 \uac19\uc774 check\ub97c 2\ubc88 \ud558\uae30 \ub54c\ubb38\uc5d0\nDouble Checked locking\uc774\ub77c\uace0 \ud55c\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Singleton.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Singleton {\n    public static void main(String[] args) {\n        Settings settings = Settings.getInstance();\n        Settings settings1 = Settings.getInstance();\n        System.out.println(settings == settings1); // true\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Settings.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Settings {\n\n    private static volatile Settings instance;\n\n    public static Settings getInstance() {\n        if (instance == null) {\n            synchronized (Settings.class) {\n                if (instance == null) {\n                    instance = new Settings();\n                }\n            }\n        }\n        return instance;\n    }\n}\n")),(0,i.kt)("p",null,"\uc4f0\ub808\ub4dc \ub3d9\uc791\uc740 \uc544\ub798 \uadf8\ub9bc\uacfc \uac19\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\ube68\uac04\uc0c9 \uc4f0\ub808\ub4dc\uac00 1\ubc88\uc5d0\uc11c if \ubb38\uc744 \ub9cc\ub098\uace0, instance\uac00 null\uc774\uae30 \ub54c\ubb38\uc5d0 2\ubc88\uc744 \uc218\ud589\ud55c\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774\ub54c, \ud30c\ub780\uc0c9 \uc4f0\ub808\ub4dc\uac00 1\ubc88\uc758 if \ubb38\uc744 \ub9cc\ub098\uace0, \ud30c\ub780\uc0c9\uc758 2\ubc88\uc744 \ub9cc\ub098\uac8c \ub418\uba74, \ube68\uac04\uc0c9 \uc4f0\ub808\ub4dc\uac00 \uba3c\uc800 synchronized\ub97c \ub9cc\ub0ac\uae30 \ub54c\ubb38\uc5d0 \uc218\ud589\uc774 \uc885\ub8cc\ub420 \ub54c \uae4c\uc9c0 \ub300\uae30\ub97c \ud558\uac8c\ub41c\ub2e4. \ud30c\ub780\uc0c9 \uc4f0\ub808\ub4dc\uac00 \ub300\uae30\ub97c \ud558\ub294 \ub3d9\uc548, \ube68\uac04\uc0c9 \uc4f0\ub808\ub4dc\ub294 3\ubc88\uc744 \uc218\ud589\ud558\uace0, Settings \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud558\uac8c \ub418\uace0, \ud30c\ub780\uc0c9 \uc4f0\ub808\ub4dc\uac00 \uadf8 \ub2e4\uc74c \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub824\uace0 \ud560 \ub54c, \uc774\ubbf8 instance\ub294 null\uc774 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0 if\ubb38\uc744 \uc218\ud589\ud558\uc9c0 \uc54a\ub294\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774\ub807\uac8c \ud568\uc73c\ub85c\uc368 Thread-Safe\uac00 \ub41c\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img2",src:e(8223).Z,width:"1280",height:"473"})),(0,i.kt)("p",null,"Double Checked Locking\uc774 ",(0,i.kt)("strong",{parentName:"p"},"synchronized getInstance()"),"\ubcf4\ub2e4 \uc131\ub2a5\uc774 \uc88b\uc740 \uc774\uc720\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,i.kt)("p",null,"(1) \uc790\uc6d0\uc18c\ubaa8\uc801 \uce21\uba74\n\uba40\ud2f0\uc4f0\ub808\ub4dc\uac00 \ub9e4\uc6b0 \ube48\ubc88\ud558\uac8c \uc77c\uc5b4\ub098\ub294 \ub9ce\uc740 \ud2b8\ub798\ud53d\uc744 \ucc98\ub9ac\ud558\ub294 \uacbd\uc6b0\uc5d0 if\ubb38 \uc548\uc5d0 \uc5ec\ub7ec \uc4f0\ub808\ub4dc\uac00 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4. \uc774 \uacbd\uc6b0, \uc774\ubbf8 \uc778\uc2a4\ud134\uc2a4\uac00 \uc788\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc778\uc2a4\ud134\uc2a4\ub97c \uc989\uc2dc \ubc18\ud658\ud558\uace0, \uc5c6\ub294 \uacbd\uc6b0\uc5d0\ub9cc Synchronized \ube14\ub7ed\uc5d0 \ub300\ud55c \uc790\uc6d0\uc744 \uc18c\ubaa8\ud558\uae30 \ub54c\ubb38\uc5d0 getInstance() \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \ubaa8\ub4e0 \uc4f0\ub808\ub4dc\uc5d0 \ub300\ud574 Synchronized \uc790\uc6d0\uc744 \uc18c\ubaa8\ud558\uc9c0 \uc54a\ub294\ub2e4. "),(0,i.kt)("p",null,"(2) \ud544\uc694\ub85c \ud558\ub294 \uc2dc\uc810 \uc120\ud0dd\n\uc778\uc2a4\ud134\uc2a4\ub97c \ud544\uc694\ub85c \ud558\ub294 \uc2dc\uc810\uc5d0 \ub9cc\ub4e4 \uc218 \uc788\ub2e4."),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc, Double Checked Locking\uc740 \ubcf5\uc7a1\ud55c \ubc29\ubc95\uc5d0 \uc18d\ud55c\ub2e4. \uc65c ",(0,i.kt)("strong",{parentName:"p"},"volatile")," \ub77c\ub294 \ud0a4\uc6cc\ub4dc\ub97c \uc0ac\uc6a9\ud574\uc57c \ud558\ub294\uc9c0, ",(0,i.kt)("strong",{parentName:"p"},"Volatile"),"\ub97c \uc0ac\uc6a9\ud568\uc73c\ub85c \uc368 Java\uac00 \uba54\ubaa8\ub9ac\ub97c \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\uc57c\ud55c\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7ec\ubbc0\ub85c \uc870\uae08 \ub354 \uc548\uc804\ud55c \ubc29\ubc95\uc73c\ub85c \uc2f1\uae00\ud1a4 \ubc29\ubc95\uc744 \uad6c\ud604\ud55c\ub2e4."),(0,i.kt)("h3",{id:"static-inner-\ud074\ub798\uc2a4\ub97c-\uc0ac\uc6a9\ud558\uc5ec-\uba40\ud2f0-\uc4f0\ub808\ub4dc-\ud658\uacbd\uc5d0\uc11c-\uc548\uc804\ud558\uac8c-\uc2f1\uae00\ud1a4-\ud328\ud134-\uad6c\ud604"},"Static Inner \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uba40\ud2f0 \uc4f0\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c \uc548\uc804\ud558\uac8c \uc2f1\uae00\ud1a4 \ud328\ud134 \uad6c\ud604"),(0,i.kt)("p",null,"Double Checking locking \ubc29\uc2dd\uc774 \uc88b\uae30\ub294 \ud558\uc9c0\ub9cc volatile \ub4f1 \uace0\ub824 \ud574\uc57c\ud560 \uac83\ub4e4\uc774 \ub9ce\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc544\ub798\uc758 Settings \ud074\ub798\uc2a4\ub97c\ubcf4\uba74 Inner Class\ub97c \uc774\uc6a9\ud558\uc5ec \uc2f1\uae00\ud1a4 \ud328\ud134\uc744 \uad6c\ud604\ud558\uc600\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Singleton.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Singleton {\n    public static void main(String[] args) {\n        Settings settings = Settings.getInstance();\n        Settings settings1 = Settings.getInstance();\n        System.out.println(settings == settings1); // true\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Settings.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Settings {\n\n    private Settings() {\n    }\n\n    private static class SettingsHolder {\n        private static final Settings INSTANCE = new Settings();\n    }\n\n    public static Settings getInstance() {\n        return SettingsHolder.INSTANCE;\n    }\n}\n")),(0,i.kt)("p",null,"\uc704 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\uba74, ",(0,i.kt)("strong",{parentName:"p"},"getInstance()")," \ub97c \ud638\ucd9c \ud560\ub54c SettingsHolder\uac00 \uac00\uc9c0\uace0 \uc788\ub294 \uc778\uc2a4\ud134\uc2a4\ub97c \ubc18\ud658\ud558\uac8c \ub41c\ub2e4."),(0,i.kt)("h2",{id:"\uc2f1\uae00\ud1a4-\ud328\ud134\uc744-\ubb34\ub825\ud654-\uc2dc\ud0a4\ub294-\ubc29\ubc95"},"\uc2f1\uae00\ud1a4 \ud328\ud134\uc744 \ubb34\ub825\ud654 \uc2dc\ud0a4\ub294 \ubc29\ubc95"),(0,i.kt)("h3",{id:"\ub9ac\ud50c\ub809\uc158"},"\ub9ac\ud50c\ub809\uc158"),(0,i.kt)("p",null,"\ub9ac\ud50c\ub809\uc158\uc744 \uc774\uc6a9\ud558\uc5ec \uc2f1\uae00\ud1a4\ud328\ud134\uc744 \uc774\uc6a9\ud558\uc600\ub2e4 \ud558\ub354\ub77c\ub3c4, \uc774\ub97c \ubb34\ub825\ud654 \uc2dc\ud0ac \uc218 \uc788\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Singleton.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Singleton {\n    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {\n        Settings settings1 = Settings.getInstance(); // \uc758\ub3c4\ud55c\ub300\ub85c SettingsHolder\ub97c \ud1b5\ud574 \ub9cc\ub4e4\uc5b4\uc9c4 \uc778\uc2a4\ud134\uc2a4\n\u200b\n        Constructor<Settings> constructor = Settings.class.getDeclaredConstructor();\n        constructor.setAccessible(true);\n        Settings settings2 = constructor.newInstance(); // new\ub97c \uc774\uc6a9\ud558\uc5ec \uc0c8\ub85c\ub9cc\ub4e0 \uc778\uc2a4\ud134\uc2a4\n\u200b\n        System.out.println(settings1 == settings2); // false\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Settings.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Settings {\n    private Settings() {\n    }\n\u200b\n    private static class SettingsHolder {\n        private static final Settings INSTANCE = new Settings();\n    }\n\u200b\n    public static Settings getInstance() {\n        return SettingsHolder.INSTANCE;\n    }\n\u200b\n}\n")),(0,i.kt)("h3",{id:"\uc9c1\ub82c\ud654--\uc5ed\uc9c1\ub82c\ud654"},"\uc9c1\ub82c\ud654 & \uc5ed\uc9c1\ub82c\ud654"),(0,i.kt)("p",null,"Java\uc5d0\ub294 Object\ub97c \ud30c\uc77c \ud615\ud0dc\ub85c \ub514\uc2a4\ud06c\uc5d0 \uc800\uc7a5(\uc9c1\ub82c\ud654) \ud558\uace0, \ub2e4\uc2dc \uc77d\uc5b4\ub4e4\uc774\ub294 \uac83(\uc5ed\uc9c1\ub82c\ud654)\uc774 \uac00\ub2a5\ud558\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\ub9cc\uc57d, \uc9c1\ub82c\ud654, \uc5ed\uc9c1\ub82c\ud654\ub97c \uc704\ud55c ",(0,i.kt)("strong",{parentName:"p"},"Serializable")," \uc778\ud130\ud398\uc774\uc2a4\ub97c implements \ud558\uace0, \uc774 \uac1d\uccb4\ub97c \uc77d\uc5b4\ub4e4\uc778\ub2e4\uba74, \uc0dd\uc131\uc790\ub97c \uc774\uc6a9\ud558\uc5ec \uc778\uc2a4\ud134\uc2a4\ub97c \ub2e4\uc2dc \ub9cc\ub4e4\uae30 \ub54c\ubb38\uc5d0 \uc11c\ub85c \ub2e4\ub978 \uac1d\uccb4\uac00 \ub41c\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Singleton.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Singleton {\n        public static void main(String[] args) throws IOException, ClassNotFoundException {\n        Settings settings = Settings.getInstance();\n        Settings settings1 = null;\n        try (ObjectOutput out = new ObjectOutputStream(new FileOutputStream("settings.obj"))) {\n            out.writeObject(settings);\n        }\n \n        try (ObjectInput in = new ObjectInputStream(new FileInputStream("settings.obj"))) {\n            settings1 = (Settings) in.readObject();\n        }\n        // \uc5ed\uc9c1\ub82c\ud654\ub97c \ud558\uac8c \ub418\uba74 \ubc18\ub4dc\uc2dc \uc0dd\uc131\uc790\ub97c \uc774\uc6a9\ud558\uc5ec \uc778\uc2a4\ud134\uc2a4\ub97c \ub2e4\uc2dc \ub9cc\ub4e4\uae30 \ub54c\ubb38\uc5d0 \uc11c\ub85c \ub2e4\ub978\uac1d\uccb4\uac00 \ub41c\ub2e4.\n        System.out.println(settings == settings1); // false\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Settings.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Settings implements Serializable {\n    private Settings() {\n    }\n\n    private static class SettingsHolder {\n        private static final Settings INSTANCE = new Settings();\n    }\n\n    public static Settings getInstance() {\n        return SettingsHolder.INSTANCE;\n    }\n\n}\n")),(0,i.kt)("p",null,"\ub2e8, ",(0,i.kt)("strong",{parentName:"p"},"Serializable")," \uc778\ud130\ud398\uc774\uc2a4\ub97c implements \ud558\uc600\ub2e4\uace0 \ud558\ub354\ub77c\ub3c4, \ub3d9\uc77c\ud55c \uc778\uc2a4\ud134\uc2a4\ub85c \uc720\uc9c0\ud558\ub294 \ubc29\ubc95\uc774 \uc788\uae34\ud55c\ub370, \uadf8 \ubc29\ubc95\uc740 \uc544\ub798\uc640 \uac19\ub2e4. \uc544\ub798\uc640 \uac19\uc774 readResolve \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud55c\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Settings.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Settings implements Serializable {\n    private Settings() {\n    }\n\n    private static class SettingsHolder {\n        private static final Settings INSTANCE = new Settings();\n    }\n\n    public static Settings getInstance() {\n        return SettingsHolder.INSTANCE;\n    }\n\n    /**\n     * Serializable \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \uba85\uc2dc\uc801\uc778 Override \uba54\uc11c\ub4dc\ub294 \uc544\ub2c8\uc9c0\ub9cc,\n     * \uc774 \uc774\ub984\uc73c\ub85c \ub41c \uba54\uc11c\ub4dc\uac00 \uc788\uc744 \uacbd\uc6b0, \uc5ed \uc9c1\ub82c\ud654\ub97c \ud560 \ub54c \uc774 \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uac8c \ub41c\ub2e4.\n     */\n    protected Object readResolve() {\n        return getInstance();\n    }\n}\n")),(0,i.kt)("p",null,"\uc704 \uc9c1\ub82c\ud654 & \uc5ed\uc9c1\ub82c\ud654\ub294 ",(0,i.kt)("strong",{parentName:"p"},"readResolve()")," \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 \uc2f1\uae00\ud1a4\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc788\uc9c0\ub9cc, \ub9ac\ud50c\ub809\uc158\uc758 \uacbd\uc6b0 Native \ucf54\ub4dc\ub97c \uc774\uc6a9\ud55c\uac83\uc774\uae30 \ub54c\ubb38\uc5d0 \ubc29\uc5b4\uac00 \uc2f1\uae00\ud1a4 \ud328\ud134\uc744 \ubb34\ub825\ud654 \uc2dc\ud0ac \uc218 \uc788\ub2e4."),(0,i.kt)("h3",{id:"enum\uc744-\uc774\uc6a9\ud55c-\uc2f1\uae00\ud1a4-\uac1d\uccb4-\ubcf4\uc7a5"},"Enum\uc744 \uc774\uc6a9\ud55c \uc2f1\uae00\ud1a4 \uac1d\uccb4 \ubcf4\uc7a5"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enum"),"\uc744 \uc774\uc6a9\ud558\uba74 \ub9ac\ud50c\ub809\uc158\uc5d0\uc11c\ub3c4 \uc2f1\uae00\ud1a4 \uac1d\uccb4\ub97c \ubcf4\uc7a5\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Singleton.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Singleton {\n    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {\n        Settings settings1 = Settings.INSTANCE;\n        Settings settings2 = null;\n\n        Constructor<?>[] declaredConstructors = Settings.class.getDeclaredConstructors();\n        for (Constructor<?> constructor : declaredConstructors) {\n            constructor.setAccessible(true);\n            settings2 = (Settings) constructor.newInstance("INSTANCE");\n        }\n\n        System.out.println(settings1 == settings2);\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Settings.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public enum Settings {\n    INSTANCE;\n}\n")),(0,i.kt)("p",null,"Settings \ud074\ub798\uc2a4\uac00 \uc5c4\uccad \uac04\ub2e8\ud574\uc84c\ub2e4. \uadf8\ub9ac\uace0 \uc704 Singleton\ud074\ub798\uc2a4\ub97c run \ud558\uac8c\ub418\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\ub294\ub370, \uc774\uc720\ub294 Enum\uc740 DeclaredConstructors\ub97c \ud1b5\ud55c \ub9ac\ud50c\ub809\uc158\uc740 \uc801\uc6a9\ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc774\ub2e4.\n",(0,i.kt)("img",{alt:"img3",src:e(3557).Z,width:"1280",height:"87"})),(0,i.kt)("p",null,"Constructors\uc758 newInstance() \uba54\uc11c\ub4dc\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 Enum\uc740 \ub9ac\ud50c\ub809\uc158\uc744 \ud5c8\uc6a9\ud558\uc9c0 \uc54a\ub3c4\ub85d \ub418\uc5b4\uc788\ub2e4.\n",(0,i.kt)("strong",{parentName:"p"},"(Modifier.ENUM)\ubb38\uad6c")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img4",src:e(7661).Z,width:"1089",height:"705"})),(0,i.kt)("h2",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Java\uc5d0\uc11c Enum\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \uc2f1\uae00\ud1a4 \ud328\ud134\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc740?")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"static \uba54\uc11c\ub4dc"),"\ub97c \uc774\uc6a9\ud55c \uc2f1\uae00\ud1a4 \ud328\ud134 \uad6c\ud604"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Synchronized \ud0a4\uc6cc\ub4dc\ub97c \uc774\uc6a9"),"\ud558\uc5ec \uba40\ud2f0\uc4f0\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c \uc548\uc804\ud55c \ubc29\ubc95\uc73c\ub85c \uc2f1\uae00\ud1a4 \ud328\ud134 \uad6c\ud604"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\uc774\ub978 \ucd08\uae30\ud654(eager initialization)\uc744 \uc774\uc6a9"),"\ud558\uc5ec \uba40\ud2f0 \uc4f0\ub808\ub4dc \ud658\uacbd\uc5d0\uc11c \uc548\uc804\ud55c \ubc29\ubc95\uc73c\ub85c \uc2f1\uae00\ud1a4 \ud328\ud134 \uad6c\ud604"),(0,i.kt)("li",{parentName:"ul"},"Synchronized\uc640 \uc774\ub978 \ucd08\uae30\ud654 \ubc29\uc2dd\uc744 \ub300\uc2e0\ud558\uc5ec ",(0,i.kt)("strong",{parentName:"li"},"Double Checked Locking")," \ubc29\ubc95\uc744 \uc774\uc6a9"),(0,i.kt)("li",{parentName:"ul"},"\ubcf5\uc7a1\ud55c Double Checked Locking\ubc29\ubc95 \ub300\uc2e0 ",(0,i.kt)("strong",{parentName:"li"},"Static Inner \ud074\ub798\uc2a4 \uc0ac\uc6a9"),"\ud558\uae30")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"private \uc0dd\uc131\uc790\uc640 static \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc758 \ub2e8\uc810\uc740?")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"private \uc0dd\uc131\uc790\uc640 static \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0, \uba40\ud2f0\uc4f0\ub808\ub4dc\uc5d0 \uc548\uc804\ud558\uc9c0 \uc54a\ub2e4.")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Enum\uc744 \uc0ac\uc6a9\ud574 \uc2f1\uae00\ud1a4 \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc758 \uc7a5\uc810\uacfc \ub2e8\uc810\uc740?")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\uc7a5\uc810 : Enum\uc73c\ub85c\ub294 \ub9ac\ud50c\ub809\uc158\uc744 \uc774\uc6a9\ud55c \ubc29\ubc95\uc73c\ub85c\ub3c4 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc720\uc77c\ud55c \uc778\uc2a4\ud134\uc2a4\uc784\uc774 \ubcf4\uc7a5\ub41c\ub2e4. \ub610\ud55c Enum\ud074\ub798\uc2a4\ub294 \ub0b4\ubd80\uc801\uc73c\ub85c Serializable\ub97c \uad6c\ud604\ud558\uae30 \ub54c\ubb38\uc5d0 \uc9c1\ub82c\ud654\uc640 \uc5ed\uc9c1\ub82c\ud654 \ubc29\ubc95\uc5d0\ub3c4 \uc548\uc804\ud558\ub2e4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ub2e8\uc810 : Enum\uc740 \ud074\ub798\uc2a4\uac00 \ub85c\ub529\ub418\ub294 \uc21c\uac04 \uc778\uc2a4\ud134\uc2a4\uac00 \ubbf8\ub9ac \uc0dd\uc131\ub41c\ub2e4."))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"static inner \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud574 \uc2f1\uae00\ud1a4 \ud328\ud134\uc744 \uad6c\ud604\ud574\ubcf4\uc790.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Singleton.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Singleton {\n    public static void main(String[] args) {\n        Settings settings = Settings.getInstance();\n        Settings settings1 = Settings.getInstance();\n        System.out.println(settings == settings1); // true\n    }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Settings.java")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Settings {\n\n    private Settings() {\n    }\n\n    private static class SettingsHolder {\n        private static final Settings INSTANCE = new Settings();\n    }\n\n    public static Settings getInstance() {\n        return SettingsHolder.INSTANCE;\n    }\n}\n")))}p.isMDXComponent=!0},8223:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/DoubleCheckingLocking-1947a9413abbfaf290b2b0cddd7ea188.png"},3557:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/EnumTypeError-77b68ee946d0ffdad24a0685ac5d41c7.png"},7661:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/NotAllowReflectionAsEnum-4a72e7521aa979f5249fd5396a002eaa.png"},4608:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/Synchronized-9ed49c56ebd900f27ed80a182003510b.png"}}]);