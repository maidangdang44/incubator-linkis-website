"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[1312],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,v=d["".concat(a,".").concat(h)]||d[h]||p[h]||c;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<c;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72729:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(87462),i=n(63366),c=(n(67294),n(3905)),l=["components"],o={title:"ContextService \u67b6\u6784",sidebar_position:7},a=void 0,s={unversionedId:"architecture/public_enhancement_services/context_service/context_service",id:"architecture/public_enhancement_services/context_service/context_service",title:"ContextService \u67b6\u6784",description:"ContextService\u67b6\u6784",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/public_enhancement_services/context_service/context_service.md",sourceDirName:"architecture/public_enhancement_services/context_service",slug:"/architecture/public_enhancement_services/context_service/",permalink:"/zh-CN/docs/1.1.0/architecture/public_enhancement_services/context_service/",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/public_enhancement_services/context_service/context_service.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"ContextService \u67b6\u6784",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"BML \u7269\u6599\u5e93\u67b6\u6784",permalink:"/zh-CN/docs/1.1.0/architecture/public_enhancement_services/bml"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.1.0/architecture/public_enhancement_services/context_service/overview"}},u=[{value:"<strong>ContextService\u67b6\u6784</strong>",id:"contextservice\u67b6\u6784",children:[{value:"<strong>\u6c34\u5e73\u5212\u5206</strong>",id:"\u6c34\u5e73\u5212\u5206",children:[{value:"Restful\u804c\u8d23\uff1a",id:"restful\u804c\u8d23",children:[],level:4},{value:"Scheduler\u804c\u8d23\uff1a",id:"scheduler\u804c\u8d23",children:[],level:4},{value:"Service\u804c\u8d23\uff1a",id:"service\u804c\u8d23",children:[],level:4}],level:3},{value:"<strong>\u5782\u76f4\u5212\u5206</strong>",id:"\u5782\u76f4\u5212\u5206",children:[{value:"Listener\u804c\u8d23\uff1a",id:"listener\u804c\u8d23",children:[],level:4},{value:"History\u804c\u8d23\uff1a",id:"history\u804c\u8d23",children:[],level:4},{value:"ContextId\u804c\u8d23\uff1a",id:"contextid\u804c\u8d23",children:[],level:4},{value:"Context\u804c\u8d23\uff1a",id:"context\u804c\u8d23",children:[],level:4}],level:3}],level:2},{value:"<strong>UML\u7c7b\u56fe</strong>",id:"uml\u7c7b\u56fe",children:[],level:2},{value:"<strong>Scheduler\u7ebf\u7a0b\u6a21\u578b</strong>",id:"scheduler\u7ebf\u7a0b\u6a21\u578b",children:[],level:2}],p={toc:u};function d(e){var t=e.components,o=(0,i.Z)(e,l);return(0,c.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"contextservice\u67b6\u6784"},(0,c.kt)("strong",{parentName:"h2"},"ContextService\u67b6\u6784")),(0,c.kt)("h3",{id:"\u6c34\u5e73\u5212\u5206"},(0,c.kt)("strong",{parentName:"h3"},"\u6c34\u5e73\u5212\u5206")),(0,c.kt)("p",null,"\u4ece\u6c34\u5e73\u4e0a\u5212\u5206\u4e3a\u4e09\u4e2a\u6a21\u5757\uff1aRestful\uff0cScheduler\uff0cService"),(0,c.kt)("h4",{id:"restful\u804c\u8d23"},"Restful\u804c\u8d23\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"\u5c06\u8bf7\u6c42\u5c01\u88c5\u4e3ahttpjob\u63d0\u4ea4\u5230Scheduler\n")),(0,c.kt)("h4",{id:"scheduler\u804c\u8d23"},"Scheduler\u804c\u8d23\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"\u901a\u8fc7httpjob\u7684protocol\u7684ServiceName\u627e\u5230\u76f8\u5e94\u7684\u670d\u52a1\u6267\u884c\u8fd9\u4e2ajob\n")),(0,c.kt)("h4",{id:"service\u804c\u8d23"},"Service\u804c\u8d23\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"\u771f\u6b63\u6267\u884c\u8bf7\u6c42\u903b\u8f91\u7684\u6a21\u5757\uff0c\u5c01\u88c5ResponseProtocol\uff0c\u5e76\u5524\u9192Restful\u4e2dwait\u7684\u7ebf\u7a0b\n")),(0,c.kt)("h3",{id:"\u5782\u76f4\u5212\u5206"},(0,c.kt)("strong",{parentName:"h3"},"\u5782\u76f4\u5212\u5206")),(0,c.kt)("p",null,"\u4ece\u5782\u76f4\u4e0a\u5212\u5206\u4e3a4\u4e2a\u6a21\u5757\uff1aListener\uff0cHistory\uff0cContextId\uff0cContext\uff1a"),(0,c.kt)("h4",{id:"listener\u804c\u8d23"},"Listener\u804c\u8d23\uff1a"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"\u8d1f\u8d23Client\u7aef\u7684\u6ce8\u518c\u548c\u7ed1\u5b9a\uff08\u5199\u5165\u6570\u636e\u5e93\u548c\u5728CallbackEngine\u4e2d\u8fdb\u884c\u6ce8\u518c\uff09")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"\u5fc3\u8df3\u63a5\u53e3\uff0c\u901a\u8fc7CallbackEngine\u8fd4\u56deArray","[ListenerCallback]"))),(0,c.kt)("h4",{id:"history\u804c\u8d23"},"History\u804c\u8d23\uff1a"),(0,c.kt)("p",null,"\u521b\u5efa\u548c\u79fb\u9664history\uff0c\u64cd\u4f5cPersistence\u8fdb\u884cDB\u6301\u4e45\u5316"),(0,c.kt)("h4",{id:"contextid\u804c\u8d23"},"ContextId\u804c\u8d23\uff1a"),(0,c.kt)("p",null,"\u4e3b\u8981\u662f\u5bf9\u63a5Persistence\u8fdb\u884cContextId\u7684\u521b\u5efa\uff0c\u66f4\u65b0\u79fb\u9664\u7b49\u64cd\u4f5c"),(0,c.kt)("h4",{id:"context\u804c\u8d23"},"Context\u804c\u8d23\uff1a"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u79fb\u9664\uff0creset\u7b49\u65b9\u6cd5\uff0c\u5148\u64cd\u4f5cPersistence\u8fdb\u884cDB\u6301\u4e45\u5316\uff0c\u5e76\u66f4\u65b0ContextCache")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"\u5c01\u88c5\u67e5\u8be2condition\u53bbContextSearch\u6a21\u5757\u83b7\u53d6\u76f8\u5e94\u7684ContextKeyValue\u6570\u636e"))),(0,c.kt)("p",null,"\u8bf7\u6c42\u8bbf\u95ee\u6b65\u9aa4\u5982\u4e0b\u56fe\uff1a\n",(0,c.kt)("img",{src:n(14426).Z,width:"1376",height:"781"})),(0,c.kt)("h2",{id:"uml\u7c7b\u56fe"},(0,c.kt)("strong",{parentName:"h2"},"UML\u7c7b\u56fe")),(0,c.kt)("p",null,(0,c.kt)("img",{src:n(54517).Z,width:"2060",height:"1202"})),(0,c.kt)("h2",{id:"scheduler\u7ebf\u7a0b\u6a21\u578b"},(0,c.kt)("strong",{parentName:"h2"},"Scheduler\u7ebf\u7a0b\u6a21\u578b")),(0,c.kt)("p",null,"\u9700\u8981\u4fdd\u8bc1Restful\u7684\u7ebf\u7a0b\u6c60\u4e0d\u88ab\u586b\u6ee1"),(0,c.kt)("p",null,(0,c.kt)("img",{src:n(82369).Z,width:"1147",height:"597"})),(0,c.kt)("p",null,"\u65f6\u5e8f\u56fe\u5982\u4e0b\uff1a\n",(0,c.kt)("img",{src:n(12133).Z,width:"1432",height:"568"})))}d.isMDXComponent=!0},14426:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-service-01-5b0d7f7344f7f400a13356ec948aeb6e.png"},54517:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-service-02-cde12874c800aa27c9c7d677a7a30e4f.png"},82369:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-service-03-95159d79adfcbe6ac360043ec9b419b8.png"},12133:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-service-04-d44ddd66397a140d8935e93ca5fd272a.png"}}]);