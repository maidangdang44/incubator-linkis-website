"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[8953],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=u(t),d=i,m=k["".concat(s,".").concat(d)]||k[d]||c[d]||l;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=k;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},84875:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return k}});var r=t(87462),i=t(63366),l=(t(67294),t(3905)),a=["components"],o={title:"0.9.0 \u5347\u7ea7 0.9.1",sidebar_position:0},s=void 0,u={unversionedId:"upgrade/upgrade_from_0.9.0_to_0.9.1_guide",id:"version-0.11.0/upgrade/upgrade_from_0.9.0_to_0.9.1_guide",isDocsHomePage:!1,title:"0.9.0 \u5347\u7ea7 0.9.1",description:"\u672c\u6587\u7b80\u5355\u4ecb\u7ecdLinkis\u4ece0.9.0\u5347\u7ea7\u52300.9.1\u7684\u6ce8\u610f\u4e8b\u9879\uff0cLinkis\u65b0\u589e\u4e86\u8bb8\u591a\u529f\u80fd\u5e76\u4fee\u590d\u4e86\u591a\u4e2aIssue\uff0c\u5982\u679c\u4e4b\u524d\u505a\u8fc7\u7248\u672c\u9002\u914d\uff0c\u60a8\u4e0d\u9700\u8981\u6309\u7167\u65b0\u7684\u5b89\u88c5\u5305\u8fdb\u884c\u5b89\u88c5\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u6307\u5357\u8fdb\u884c\u5347\u7ea7",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/upgrade/upgrade_from_0.9.0_to_0.9.1_guide.md",sourceDirName:"upgrade",slug:"/upgrade/upgrade_from_0.9.0_to_0.9.1_guide",permalink:"/zh-CN/docs/0.11.0/upgrade/upgrade_from_0.9.0_to_0.9.1_guide",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/upgrade/upgrade_from_0.9.0_to_0.9.1_guide.md",tags:[],version:"0.11.0",sidebarPosition:0,frontMatter:{title:"0.9.0 \u5347\u7ea7 0.9.1",sidebar_position:0},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce",permalink:"/zh-CN/docs/0.11.0/development/new_engine_conn"}},p=[{value:"1 \u4e0b\u8f7d\u5bf9\u5e94\u7684\u5347\u7ea7\u5305",id:"1-\u4e0b\u8f7d\u5bf9\u5e94\u7684\u5347\u7ea7\u5305",children:[]},{value:"2 \u5347\u7ea7\u6b65\u9aa4",id:"2-\u5347\u7ea7\u6b65\u9aa4",children:[{value:"2.1 \u4e0d\u9700\u8981\u66f4\u65b0\u7684\u6a21\u5757",id:"21-\u4e0d\u9700\u8981\u66f4\u65b0\u7684\u6a21\u5757",children:[]},{value:"2.2 \u53ea\u9700\u8981\u66f4\u65b0\u7684\u6a21\u5757",id:"22-\u53ea\u9700\u8981\u66f4\u65b0\u7684\u6a21\u5757",children:[]},{value:"2.3 \u589e\u52a0\u7269\u6599\u5e93\u76f8\u5173\u5305",id:"23-\u589e\u52a0\u7269\u6599\u5e93\u76f8\u5173\u5305",children:[]},{value:"2.4 \u9700\u8981\u66f4\u65b0\u914d\u7f6e\u548c\u5305\u7684\u670d\u52a1",id:"24-\u9700\u8981\u66f4\u65b0\u914d\u7f6e\u548c\u5305\u7684\u670d\u52a1",children:[]},{value:"2.5 \u65b0\u52a0\u5165\u7684\u670d\u52a1",id:"25-\u65b0\u52a0\u5165\u7684\u670d\u52a1",children:[]}]}],c={toc:p};function k(e){var n=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7b80\u5355\u4ecb\u7ecdLinkis\u4ece0.9.0\u5347\u7ea7\u52300.9.1\u7684\u6ce8\u610f\u4e8b\u9879\uff0cLinkis\u65b0\u589e\u4e86\u8bb8\u591a\u529f\u80fd\u5e76\u4fee\u590d\u4e86\u591a\u4e2aIssue\uff0c\u5982\u679c\u4e4b\u524d\u505a\u8fc7\u7248\u672c\u9002\u914d\uff0c\u60a8\u4e0d\u9700\u8981\u6309\u7167\u65b0\u7684\u5b89\u88c5\u5305\u8fdb\u884c\u5b89\u88c5\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u6307\u5357\u8fdb\u884c\u5347\u7ea7")),(0,l.kt)("h2",{id:"1-\u4e0b\u8f7d\u5bf9\u5e94\u7684\u5347\u7ea7\u5305"},"1 \u4e0b\u8f7d\u5bf9\u5e94\u7684\u5347\u7ea7\u5305"),(0,l.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u5728release\u9875\u9762\u4e0b\u8f7d wedataSphere-linkis-from-0.9.0-udpdate-0.9.1.zip"),(0,l.kt)("h2",{id:"2-\u5347\u7ea7\u6b65\u9aa4"},"2 \u5347\u7ea7\u6b65\u9aa4"),(0,l.kt)("h3",{id:"21-\u4e0d\u9700\u8981\u66f4\u65b0\u7684\u6a21\u5757"},"2.1 \u4e0d\u9700\u8981\u66f4\u65b0\u7684\u6a21\u5757"),(0,l.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\neureka\u6a21\u5757\u4e0d\u9700\u8981\u66f4\u65b0"),(0,l.kt)("h3",{id:"22-\u53ea\u9700\u8981\u66f4\u65b0\u7684\u6a21\u5757"},"2.2 \u53ea\u9700\u8981\u66f4\u65b0\u7684\u6a21\u5757"),(0,l.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u53ea\u9700\u8981\u5347\u7ea7Linkis\u76f8\u5173\u5230\u5305\u52300.9.1\u5373\u53ef\u7684\u6a21\u5757\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"linkis-gateway"),(0,l.kt)("li",{parentName:"ol"},"linkis-resourceManager"),(0,l.kt)("li",{parentName:"ol"},"linkis-ujes-hive-enginemanager"),(0,l.kt)("li",{parentName:"ol"},"linkis-ujes-hive-entrance"),(0,l.kt)("li",{parentName:"ol"},"linkis-ujes-jdbc-entrance"),(0,l.kt)("li",{parentName:"ol"},"linkis-ujes-python-entrance"),(0,l.kt)("li",{parentName:"ol"},"linkis-ujes-spark-entrance")),(0,l.kt)("p",null,"\u5347\u7ea7\u6b65\u9aa4\uff1a"),(0,l.kt)("p",null,"1.\u5220\u63890.9.0\u7684\u5305  "),(0,l.kt)("p",null,"2.\u89e3\u538b\u5bf9\u5e94\u7684\u670d\u52a1\u7684\u76ee\u5f55\u62f7\u8d1d\u5305\u5230\u5bf9\u5e94\u7684lib\u76ee\u5f55"),(0,l.kt)("p",null,"linkis-gateway\u9700\u8981\u4fee\u6539linkis.properties\u7684\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"#\u65b0\u52a0\u53c2\u6570\nwds.linkis.gateway.conf.enable.token.auth=true\n#\u4fee\u6539\u5982\u4e0b\u53c2\u6570\nwds.linkis.gateway.conf.url.pass.auth=/dws/\n")),(0,l.kt)("p",null,"linkis-gateway\u9700\u8981\u65b0\u62f7\u8d1d\u4ee3\u7406\u914d\u7f6etoken.properties\u5230conf\u76ee\u5f55:"),(0,l.kt)("h3",{id:"23-\u589e\u52a0\u7269\u6599\u5e93\u76f8\u5173\u5305"},"2.3 \u589e\u52a0\u7269\u6599\u5e93\u76f8\u5173\u5305"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u589e\u52a0\u7269\u6599\u5e93\u76f8\u5173\u5305\u7684\u6a21\u5757")),(0,l.kt)("p",null,"1.linkis-publicservice\u589e\u52a0\u4e86bml\u652f\u6301\u52a0\u5165\u4e86bml client"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"linkis-bmlclient-0.9.1.jar\nlinkis-bmlcommon-0.9.1.jar\nlinkis-gateway-httpclient-support-0.9.1.jar\nlinkis-httpclient-0.9.1.jar\n")),(0,l.kt)("p",null,"\u53e6\u5916\u8fd8\u589e\u52a0\u4e86netty\u7684\u5305\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"netty-3.6.2.Final.jar\n")),(0,l.kt)("p",null,"\u53e6\u5916\u9700\u8981\u5728linkis.properties \u914d\u7f6egateway\u7684\u5730\u5740\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wds.linkis.gateway.ip=127.0.0.1\nwds.linkis.gateway.port=9001\n")),(0,l.kt)("p",null,"2.linkis-ujes-python-enginemanager\u548clinkis-ujes-spark-enginemanager\u589e\u52a0\u4e86bml\u652f\u6301\u52a0\u5165\u4e86bml client"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"linkis-bmlclient-0.9.1.jar\nlinkis-bmlcommon-0.9.1.jar\nlinkis-bml-hook-0.9.1.jar\nlinkis-gateway-httpclient-support-0.9.1.jar\nlinkis-httpclient-0.9.1.jar\n")),(0,l.kt)("p",null,"\u5347\u7ea7\u6b65\u9aa4\uff1a"),(0,l.kt)("p",null,"1.\u5220\u63890.9.0\u7684\u5305"),(0,l.kt)("p",null,"2.\u89e3\u538b\u5bf9\u5e94\u7684\u670d\u52a1\u7684\u76ee\u5f55\u62f7\u8d1d\u5305\u5230\u5bf9\u5e94\u7684lib\u76ee\u5f55"),(0,l.kt)("h3",{id:"24-\u9700\u8981\u66f4\u65b0\u914d\u7f6e\u548c\u5305\u7684\u670d\u52a1"},"2.4 \u9700\u8981\u66f4\u65b0\u914d\u7f6e\u548c\u5305\u7684\u670d\u52a1"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u66f4\u65b0\u914d\u7f6e\u548c\u5305\u7684\u670d\u52a1\uff1alinkis-metadata")),(0,l.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\u89e3\u538blinkis-metadata\u7684\u5b89\u88c5\u5305\u540e\uff0c\u9700\u8981\u4fee\u6539conf\u91cc\u9762\u7684\u914d\u7f6e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"application.yml \u4fee\u6539eureka\u7684\u5730\u5740"),(0,l.kt)("li",{parentName:"ol"},"linkis.properties \u914d\u7f6eLinkis\u7684\u6570\u636e\u5e93\u548cHive\u5143\u6570\u636e\u5e93\u5730\u5740\u7684\u914d\u7f6e\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"//Linkis\u7684\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\nwds.linkis.server.mybatis.datasource.url=jdbc:mysql://\nwds.linkis.server.mybatis.datasource.username=\nwds.linkis.server.mybatis.datasource.password=\n//Hive\u5143\u6570\u636e\u5e93\u5730\u5740 \u4e0d\u662fhiveServer2\nhive.meta.url=\nhive.meta.user=\nhive.meta.password=\n")),(0,l.kt)("h3",{id:"25-\u65b0\u52a0\u5165\u7684\u670d\u52a1"},"2.5 \u65b0\u52a0\u5165\u7684\u670d\u52a1"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u65b0\u52a0\u5165\u7684\u670d\u52a1\uff1alinkis-bml")),(0,l.kt)("p",null,"\u4e0b\u8f7dlinkis-bml\u7684\u5b89\u88c5\u5305\u89e3\u538b\u540e\uff0c\u5728conf\u91cc\u9762\u4fee\u6539\u914d\u7f6e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"application.yml \u4fee\u6539eureka\u7684\u5730\u5740"),(0,l.kt)("li",{parentName:"ol"},"linkis.properties \u914d\u7f6eMybatis\u76f8\u5173\u7684\u914d\u7f6e\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wds.linkis.server.mybatis.datasource.url=jdbc:mysql://\nwds.linkis.server.mybatis.datasource.username=\nwds.linkis.server.mybatis.datasource.password=\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5728\u5bfc\u5165bml\u7684sql\u6570\u636e\u5230mysql")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd db/;\nsource linkis-bml.sql\n")))}k.isMDXComponent=!0}}]);