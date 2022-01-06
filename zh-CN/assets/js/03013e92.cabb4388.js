"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7867],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(a,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1145:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],l={title:"\u5f02\u6b65\u65e5\u5fd7\u5b9e\u65f6\u63a8\u9001",sidebar_position:1},a=void 0,u={unversionedId:"architecture/commons/real-time_log_push",id:"version-0.11.0/architecture/commons/real-time_log_push",isDocsHomePage:!1,title:"\u5f02\u6b65\u65e5\u5fd7\u5b9e\u65f6\u63a8\u9001",description:"\u8de8\u670d\u52a1\u5f02\u6b65\u65e5\u5fd7\u5b9e\u65f6\u63a8\u9001\u65b9\u6848",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/commons/real-time_log_push.md",sourceDirName:"architecture/commons",slug:"/architecture/commons/real-time_log_push",permalink:"/zh-CN/docs/0.11.0/architecture/commons/real-time_log_push",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/commons/real-time_log_push.md",tags:[],version:"0.11.0",sidebarPosition:1,frontMatter:{title:"\u5f02\u6b65\u65e5\u5fd7\u5b9e\u65f6\u63a8\u9001",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"WebSocket\u8bf7\u6c42\u8f6c\u53d1\u5b9e\u73b0",permalink:"/zh-CN/docs/0.11.0/architecture/websocket"},next:{title:"Scheduler\u67b6\u6784",permalink:"/zh-CN/docs/0.11.0/architecture/commons/scheduler"}},p=[{value:"1 \u80cc\u666f",id:"1-\u80cc\u666f",children:[]},{value:"2 \u601d\u8def",id:"2-\u601d\u8def",children:[]},{value:"3 \u5b9e\u73b0",id:"3-\u5b9e\u73b0",children:[{value:"3.1 Appender\u7ec4\u4ef6\u7684\u8bbe\u8ba1\u5b9e\u73b0",id:"31-appender\u7ec4\u4ef6\u7684\u8bbe\u8ba1\u5b9e\u73b0",children:[]},{value:"3.2 \u76d1\u542c\u5668\u7684\u8bbe\u8ba1\u5b9e\u73b0",id:"32-\u76d1\u542c\u5668\u7684\u8bbe\u8ba1\u5b9e\u73b0",children:[]},{value:"3.3 \u7f13\u5b58\u961f\u5217\u7684\u8bbe\u8ba1\u5b9e\u73b0",id:"33-\u7f13\u5b58\u961f\u5217\u7684\u8bbe\u8ba1\u5b9e\u73b0",children:[]},{value:"3.4 \u65e5\u5fd7\u7684\u6536\u96c6",id:"34-\u65e5\u5fd7\u7684\u6536\u96c6",children:[]}]}],s={toc:p};function d(e){var t=e.components,l=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8de8\u670d\u52a1\u5f02\u6b65\u65e5\u5fd7\u5b9e\u65f6\u63a8\u9001\u65b9\u6848")),(0,i.kt)("h2",{id:"1-\u80cc\u666f"},"1 \u80cc\u666f"),(0,i.kt)("p",null,"\u540e\u53f0\u4f7f\u7528\u5fae\u670d\u52a1\u67b6\u6784\u4e4b\u540e\uff0c\u591a\u4e2a\u5fae\u670d\u52a1\u4f1a\u90e8\u7f72\u5728\u4e0d\u540c\u7684\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\uff0c\u6bcf\u4e2a\u5fae\u670d\u52a1\u4ea7\u751f\u7684\u65e5\u5fd7\u4f1a\u5206\u5e03\u5728\u5404\u4e2a\u670d\u52a1\u5668\u5f53\u4e2d\uff0cELK\u867d\u7136\u80fd\u591f\u5c06\u8fd9\u4e9b\u65e5\u5fd7\u8fdb\u884c\u8fc7\u6ee4\u6536\u96c6\u6765\u8ba9\u7528\u6237\u67e5\u770b\uff0c\u4f46\u662f\u5728\u5b9e\u65f6\u6027\u548c\u5b9a\u5236\u5316\u65b9\u9762\u6709\u6240\u6b20\u7f3a\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u91c7\u7528\u65e5\u5fd7\u5148\u843d\u76d8\uff0c\u518d\u8fdb\u884c\u6536\u96c6\u65e5\u5fd7\uff0c\u9996\u5148\u4f1a\u56e0\u4e3a\u78c1\u76d8\u7684IO\u6d88\u8017\u591a\u4f59\u7684\u65f6\u95f4\uff0c\u53e6\u5916\u4f1a\u7531\u4e8e\u65e5\u5fd7\u843d\u76d8\u4e4b\u540e\uff0c\u7528\u6237\u5728\u8fd0\u884c\u9636\u6bb5\u7684\u8fd0\u884c\u65f6\u4fe1\u606f\u4f1a\u4e22\u5931\uff0c\u4f7f\u5f97\u65e5\u5fd7\u6309\u7167\u7528\u6237\u8fd0\u884c\u65f6\u4fe1\u606f\u8fdb\u884c\u5206\u7c7b\u53d8\u5f97\u56f0\u96be\u3002"),(0,i.kt)("h2",{id:"2-\u601d\u8def"},"2 \u601d\u8def"),(0,i.kt)("p",null,"\u57fa\u4e8e log4j2\u8bbe\u8ba1\u4e00\u4e2aAppender\uff0c\u5e76\u52a0\u5165\u5230\u5fae\u670d\u52a1\u65e5\u5fd7\u7684\u914d\u7f6e\u4e2d\uff0c\u7136\u540e\u91c7\u7528\u76d1\u542c\u5668\u7684\u8bbe\u8ba1\u6a21\u5f0f\u548cRPC\u7684\u670d\u52a1\u8c03\u7528\u5b9e\u73b0\u65e5\u5fd7\u7684\u8de8\u670d\u52a1\u5f02\u6b65\u5b9e\u65f6\u63a8\u9001\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u8de8\u670d\u52a1\u5f02\u6b65\u5b9e\u65f6\u65e5\u5fd7\u63a8\u9001\u65b9\u6848",src:r(3286).Z})),(0,i.kt)("h2",{id:"3-\u5b9e\u73b0"},"3 \u5b9e\u73b0"),(0,i.kt)("h3",{id:"31-appender\u7ec4\u4ef6\u7684\u8bbe\u8ba1\u5b9e\u73b0"},"3.1 Appender\u7ec4\u4ef6\u7684\u8bbe\u8ba1\u5b9e\u73b0"),(0,i.kt)("p",null,"\u73b0\u5728\u540e\u53f0\u5f00\u53d1\u6bd4\u8f83\u6d41\u884c\u7684\u65e5\u5fd7\u6846\u67b6\u7528slf4j \u4f5c\u4e3aFa\xe7ade\uff0c\u914d\u5408logback\u6216\u8005log4j2\u7b49\u4f7f\u7528\uff0c\u7531\u4e8elog4j2\u5728\u6027\u80fd\u4e0a\u7684\u4f18\u52bf\u4ee5\u53ca\u5f00\u6e90\u7684license\u539f\u56e0\uff0c\u73b0\u5728\u7684\u5f00\u6e90\u9879\u76ee\u90fd\u4f1a\u9996\u9009log4j2\u4f5c\u4e3a\u65e5\u5fd7\u6253\u5370\u7684\u6846\u67b6\u3002"),(0,i.kt)("p",null,"Appender\u662flog4j2\u65e5\u5fd7\u6253\u5370\u7684target(\u76ee\u6807\u5730)\uff0c\u5fae\u670d\u52a1\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u65e5\u5fd7\u4e8b\u4ef6\u4e4b\u540e\uff0c\u5728\u914d\u7f6e\u4e2d\u6ce8\u518c\u7684Appender\u90fd\u4f1a\u83b7\u53d6\u5230\u8fd9\u4e2a\u65e5\u5fd7\u4e8b\u4ef6\u3002"),(0,i.kt)("p",null,"Linkis\u8bbe\u8ba1\u7684Appender\u4f1a\u5728\u65e5\u5fd7\u5fae\u670d\u52a1\u65e5\u5fd7\u751f\u6210\u4e4b\u540e\uff0c\u5c06\u83b7\u5f97\u7684\u65e5\u5fd7\u4e8b\u4ef6\u7f13\u5b58\u5230\u961f\u5217\u4e2d\uff0c\u53e6\u5916\u5728Appender\u4e2d\u6211\u4eec\u8fd8\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u76d1\u542c\u5668\u3002"),(0,i.kt)("h3",{id:"32-\u76d1\u542c\u5668\u7684\u8bbe\u8ba1\u5b9e\u73b0"},"3.2 \u76d1\u542c\u5668\u7684\u8bbe\u8ba1\u5b9e\u73b0"),(0,i.kt)("p",null,"\u76d1\u542c\u5668\u6a21\u5f0f\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u662f\u5f02\u6b65\u56de\u8c03\u7f16\u7a0b\u7684\u4e00\u79cd\u5e38\u89c1\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002"),(0,i.kt)("p",null,"\u76d1\u542c\u5668\u9700\u8981\u76d1\u542c\u7684\u662f\u65e5\u5fd7\u4e8b\u4ef6\u961f\u5217\uff0c\u5982\u679c\u76d1\u542c\u5230\u65e5\u5fd7\u4e8b\u4ef6\u961f\u5217\u5df2\u6ee1\uff0c\u5c31\u5c06\u65e5\u5fd7\u4ece\u961f\u5217\u4e2d\u53d6\u51fa\uff0c\u6392\u961f\u901a\u8fc7HTTP\u7684\u65b9\u5f0f\u53d1\u9001\u3002"),(0,i.kt)("p",null,"\u53e6\u5916\u76d1\u542c\u5668\u4e5f\u9700\u8981\u76d1\u542c\u4efb\u52a1\u7684\u72b6\u6001\uff0c\u4efb\u52a1\u5728\u672c\u5fae\u670d\u52a1\u4e2d\u5b8c\u6210\u4e86\u6240\u6709\u7684\u6267\u884c\u6b65\u9aa4\u540e\uff0c\u9700\u8981\u5c06\u5728\u961f\u5217\u4e2d\u7f13\u5b58\u7684\u65e5\u5fd7\u90fd\u53d1\u9001\u51fa\u53bb\u9632\u6b62\u65e5\u5fd7\u7684\u4e22\u5931\u3002"),(0,i.kt)("h3",{id:"33-\u7f13\u5b58\u961f\u5217\u7684\u8bbe\u8ba1\u5b9e\u73b0"},"3.3 \u7f13\u5b58\u961f\u5217\u7684\u8bbe\u8ba1\u5b9e\u73b0"),(0,i.kt)("p",null,"\u65e5\u5fd7\u4f7f\u7528\u7f13\u5b58\u961f\u5217\u539f\u56e0\u5728\u4e8e\u5982\u679c\u4ea7\u751f\u4e00\u4e2a\u65e5\u5fd7\u4e8b\u4ef6\u5c31\u63a8\u9001\uff0c\u4f1a\u7531\u4e8eHTTP\u8bf7\u6c42\u8fc7\u4e8e\u9891\u7e41\u800c\u5bfc\u81f4\u63a5\u6536\u65e5\u5fd7\u7684\u5fae\u670d\u52a1\u4e00\u76f4\u5904\u4e8e\u7e41\u5fd9\u72b6\u6001\uff0c\u6240\u4ee5\u5fc5\u987b\u8981\u8fdb\u884c\u7f13\u5b58\uff0c\u4e00\u822c\u7f13\u5b58\u961f\u5217\u53ef\u4ee5\u8bbe\u8ba1\u4e3a\u6709\u6700\u5927\u7f13\u5b58\u6570\u76ee\u7684\u963b\u585e\u961f\u5217\u3002"),(0,i.kt)("h3",{id:"34-\u65e5\u5fd7\u7684\u6536\u96c6"},"3.4 \u65e5\u5fd7\u7684\u6536\u96c6"),(0,i.kt)("p",null,"\u65e5\u5fd7\u4f1a\u7edf\u4e00\u53d1\u5230\u65e5\u5fd7\u6536\u96c6\u7684\u5fae\u670d\u52a1\u4e2d\uff0c\u7136\u540e\u7531\u8be5\u5fae\u670d\u52a1\u8fdb\u884c\u65e5\u5fd7\u7684\u6392\u5e8f\u548c\u5c01\u88c5\uff0c\u5c01\u88c5\u4e4b\u540e\u7684\u65e5\u5fd7\u4f1a\u63a8\u9001\u7ed9\u7528\u6237\u754c\u9762\uff0c\u540c\u65f6\u65e5\u5fd7\u4e5f\u4f1a\u5f02\u6b65\u5199\u76d8\uff0c\u4e3a\u6bcf\u4e00\u4e2a\u7528\u6237\u5907\u4efd\u4e00\u4e2a\u4efb\u52a1\u7684\u65e5\u5fd7\u3002"))}d.isMDXComponent=!0},3286:function(e,t,r){t.Z=r.p+"assets/images/log_push-a9366f47e300c50f5fc1c160b1ef691e.png"}}]);