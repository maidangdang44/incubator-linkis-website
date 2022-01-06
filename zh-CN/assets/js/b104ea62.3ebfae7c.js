"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7925],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,c(c({ref:t},s),{},{components:n})):r.createElement(g,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4050:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),c=["components"],a={title:"\u8bbf\u95ee\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\u67b6\u6784",sidebar_position:1},l=void 0,u={unversionedId:"architecture/storage/remote_file_system_architecture_design",id:"version-0.11.0/architecture/storage/remote_file_system_architecture_design",isDocsHomePage:!1,title:"\u8bbf\u95ee\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\u67b6\u6784",description:"1 \u80cc\u666f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/storage/remote_file_system_architecture_design.md",sourceDirName:"architecture/storage",slug:"/architecture/storage/remote_file_system_architecture_design",permalink:"/zh-CN/docs/0.11.0/architecture/storage/remote_file_system_architecture_design",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/storage/remote_file_system_architecture_design.md",tags:[],version:"0.11.0",sidebarPosition:1,frontMatter:{title:"\u8bbf\u95ee\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\u67b6\u6784",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"\u5bf9\u63a5\u591a\u79cd\u6587\u4ef6\u7cfb\u7edf",permalink:"/zh-CN/docs/0.11.0/architecture/storage/file_system"},next:{title:"\u7ed3\u679c\u96c6\u6587\u4ef6\u5b58\u50a8",permalink:"/zh-CN/docs/0.11.0/architecture/storage/resultset_file"}},s=[{value:"1 \u80cc\u666f",id:"1-\u80cc\u666f",children:[]},{value:"2 \u601d\u8def",id:"2-\u601d\u8def",children:[]},{value:"3 \u5b9e\u73b0",id:"3-\u5b9e\u73b0",children:[]},{value:"4 \u8bf4\u660e",id:"4-\u8bf4\u660e",children:[]}],p={toc:s};function d(e){var t=e.components,a=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-\u80cc\u666f"},"1 \u80cc\u666f"),(0,o.kt)("p",null,"\u901a\u5e38\u7528\u6237\u542f\u52a8\u4e00\u4e2aJVM\u8fdb\u7a0b\u540e\uff0c\u53ea\u5177\u5907\u542f\u52a8\u7528\u6237\u7684\u6587\u4ef6\u8bfb\u5199\u6743\u9650\u3002"),(0,o.kt)("p",null,"\u5982\uff1a\u7528\u6237A\u5728linux\u670d\u52a1\u5668\u4e0a\u9762\u542f\u52a8\u4e00\u4e2aJVM\u8fdb\u7a0b\uff0c\u5982\u679c\u8be5\u7528\u6237\u4e0d\u662froot (\u8d85\u7ea7\u7528\u6237)\u7684\u8bdd\uff0c\u53ea\u80fd\u8bbf\u95ee\u5230\u8be5\u670d\u52a1\u5668\u4e0a\u7684\u672c\u5730\u6587\u4ef6\uff0c\u4e14\u53ea\u80fd\u5bf9\u7528\u6237A\u7684\u6587\u4ef6\u6709\u64cd\u4f5c\u6743\u9650\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\u5f88\u591a\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u901a\u8fc7\u7528\u6237A\u542f\u52a8JVM\u8fdb\u7a0b\uff0c\u5e0c\u671b\u5728\u6587\u4ef6\u6743\u9650\u4e0d\u6269\u6563\u7684\u60c5\u51b5\u4e0b\uff0c\u80fd\u8bbf\u95ee\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u7684\u5176\u4ed6\u7528\u6237\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u540c\u65f6\uff0c\u5982\u4f55\u505a\u5230\u5728\u672c\u5730\u6ca1\u6709\u5b89\u88c5HDFS\u7684\u60c5\u51b5\u4e0b\uff0c\u80fd\u8bbf\u95eeHDFS\u6587\u4ef6\u7cfb\u7edf\uff1f"),(0,o.kt)("p",null,"\u5982\u4f55\u907f\u514d\u7528\u6237\u521b\u5efaLinux\u7528\u6237\uff0c\u5c31\u53ef\u4ee5\u8bbf\u95ee\u8be5\u7528\u6237\u5728HDFS\u4e0a\u7684\u76f8\u5173\u6587\u4ef6\uff1f"),(0,o.kt)("h2",{id:"2-\u601d\u8def"},"2 \u601d\u8def"),(0,o.kt)("p",null,"\u901a\u8fc7\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\uff0c\u542f\u52a8\u8be5\u6587\u4ef6\u7cfb\u7edf\u7684\u5f15\u64ce\u7ba1\u7406\u5668(IO-EngineManager)(",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/0.11.0/architecture/ujes/ujes_design"},"\u4ec0\u4e48\u662fEngineManager?"),")\uff0c\u5e76\u63d0\u4f9b\u517c\u5bb9\u7edf\u4e00\u7684\u5ba2\u6237\u7aefAPI\uff0c\u8ba9\u7528\u6237\u8bbf\u95ee\u5230\u8fdc\u7a0b\u7684\u6587\u4ef6\u7cfb\u7edf\u3002"),(0,o.kt)("p",null,"\u6574\u4e2a\u67b6\u6784\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Storage\u8fdc\u7a0b\u6a21\u5f0f\u67b6\u6784",src:n(7851).Z})),(0,o.kt)("h2",{id:"3-\u5b9e\u73b0"},"3 \u5b9e\u73b0"),(0,o.kt)("p",null,"(1) \u7528\u6237A\u8c03\u7528\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\u7684\u5ba2\u6237\u7aef(IO-Client) \u7684API\uff0c\u901a\u8fc7\u4f20\u5165\u9700\u8981\u8bbf\u95ee\u7684\u6587\u4ef6\u8def\u5f84(FsPath)\u548c\u9700\u8981\u4ee3\u7406\u7684\u7528\u6237B\u7ed9IO-Client\uff1b"),(0,o.kt)("p",null,"(2) \u5ba2\u6237\u7aef(IO-Client)\u62ff\u5230FsPath\u548c\u4ee3\u7406\u7528\u6237B\u83b7\u5f97\u9700\u8981\u4ee3\u7406\u7684\u6587\u4ef6\u7cfb\u7edf(ProxyFS)\u3002"),(0,o.kt)("p",null,"(3) \u7528\u6237A\u901a\u8fc7ProxyFS\u5bf9\u4ee3\u7406\u7528\u6237B\u7684\u6587\u4ef6\u8fdb\u884c\u64cd\u4f5c\uff0c\u5982\u679c\u4e0b\u9762\u6b65\u9aa4\u7684\u6743\u9650\u6821\u9a8c\u901a\u8fc7\uff0c\u5219\u53ef\u4ee5\u6267\u884c\u6587\u4ef6\u7684\u589e\u5220\u8bfb\u5199\u7b49\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"(4) \u7528\u6237A\u901a\u8fc7ProxyFS\u7684\u64cd\u4f5c\u4f1a\u4f20\u7ed9IO-Client\uff0c\u5e76\u901a\u8fc7\u7f51\u7edc\u4f20\u8f93\u5230\u8fdc\u7a0b\u7684\u6587\u4ef6\u7cfb\u7edf\u670d\u52a1\uff0c\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u4f1a\u901a\u8fc7\u667a\u80fd\u8def\u7531\u670d\u52a1(IR)\u83b7\u5f97\u8d1f\u8f7d\u8f83\u4f4e\u7684\u8fdc\u7a0b\u6587\u4ef6\u670d\u52a1(IO-Engine)\u3002"),(0,o.kt)("p",null,"(5) \u8fdc\u7a0b\u6587\u4ef6\u670d\u52a1(IO-Engine)\u62ff\u5230IO-Client\u4f20\u8fc7\u6765\u7684\u64cd\u4f5c\u540e\uff0c\u4f1a\u8fdb\u884c\u5b89\u5168\u89c4\u5219\u5224\u65ad\uff0c\u6700\u5148\u5224\u65ad\u4f20\u8fc7\u6765\u7684Token\u662f\u5426\u5408\u6cd5\uff0c\u63a5\u7740\u5224\u65adIP\u662f\u5426\u5408\u6cd5\uff0c\u63a5\u7740\u5224\u65ad\u7528\u6237A\u662f\u5426\u6709\u6743\u9650\u4ee3\u7406\u5230\u7528\u6237B\u8fdb\u884c\u6587\u4ef6\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"(6) \u63a5\u7740IO-Engine\u4f1a\u83b7\u53d6\u5230\u8d85\u7ea7\u7528\u6237\u7684Fs\uff0c\u901a\u8fc7Fs\u8bbf\u95ee\u5b9e\u9645\u7684\u6587\u4ef6\u7cfb\u7edf\uff0c\u5bf9\u7528\u6237B\u7684\u6587\u4ef6\u8fdb\u884c\u64cd\u4f5c\u3002\u56e0\u4e3aIO-Engine\u670d\u52a1\u662f\u8d85\u7ea7\u7528\u6237\u542f\u52a8\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u8bbf\u95ee\u6240\u6709\u7528\u6237\u7684\u6587\u4ef6\u5e76\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"(7) IO-Engine\u64cd\u4f5c\u5b8c\u7528\u6237B\u7684\u6587\u4ef6\u64cd\u4f5c\u540e\u8fd4\u56de\u7ed3\u679c\u7ed9\u5230IO-client\uff0c\u8fdb\u800c\u5c06\u7ed3\u679c\u8fd4\u56de\u7ed9\u7528\u6237A\uff0c\u4ee3\u7406\u8fdc\u7a0b\u8bbf\u95ee\u6587\u4ef6\u7684\u5b8c\u6574\u6d41\u7a0b\u5c31\u7ed3\u675f\u4e86\u3002"),(0,o.kt)("h2",{id:"4-\u8bf4\u660e"},"4 \u8bf4\u660e"),(0,o.kt)("p",null,"\u4e0a\u56fe\u4e2d\u7684\u5f15\u64ce\u7ba1\u7406\u5668(IO-EM)\u670d\u52a1\u8d1f\u8d23\u5bf9IO-Engine\u670d\u52a1\u7684\u8d77\u505c\u3002"),(0,o.kt)("p",null,"\u4e0a\u56fe\u4e2d\u667a\u80fd\u8def\u7531\u670d\u52a1(IR)\u8d1f\u8d23\u5224\u65ad\u5404\u4e2aIO-Engine\u7684\u8d1f\u8f7d\u60c5\u51b5\uff0c\u5e76\u5bf9IO-Client\u53d1\u9001\u90a3\u4e2a\u8fc7\u6765\u7684\u8bf7\u6c42\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u8f6c\u53d1\uff0c\u5982\u679c\u6240\u6709\u7684IO-Engine\u90fd\u8d1f\u8f7d\u8fc7\u9ad8\u5219\u901a\u77e5IO-EM\u542f\u52a8\u65b0\u7684IO-Engine\u670d\u52a1\uff0c\u8d1f\u8f7d\u4f4e\u7684\u65f6\u5019\u5219\u901a\u77e5IO-EM\u5bf9\u7a7a\u95f2 IO-Engine\u670d\u52a1\u8fdb\u884c\u505c\u6b62\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u901a\u8fc7\u4e0a\u9762\u7684\u6d41\u7a0b\u53ef\u77e5\uff1a")),(0,o.kt)("p",null,"\u4ece\u7b2c(5)\u70b9\u53ef\u77e5\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5bf9\u6743\u9650\u8fdb\u884c\u5b8c\u5168\u53ef\u63a7\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u81ea\u5df1\u5b9e\u73b0\u76f8\u5e94\u7684\u5b89\u5168\u89c4\u5219\u8fdb\u884c\u914d\u7f6e\uff1b"),(0,o.kt)("p",null,"\u4ece\u901a\u8fc7\u8bbf\u95ee\u7684\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\u670d\u52a1\u53ef\u4ee5\u5b9e\u73b0\u7c7b\u4f3c\u4e8e\u5171\u4eab\u5b58\u50a8\u7684\u529f\u80fd\uff1b"),(0,o.kt)("p",null,"\u4ece\u7b2c(1)\u548c(2)\u70b9\u53ef\u4ee5\u901a\u8fc7\u4f20\u5165\u7684FS\u7c7b\u578b\u4e0d\u4e00\u6837\u4ece\u800c\u53ef\u4ee5\u652f\u6301\u591a\u79cd\u6587\u4ef6\u7cfb\u7edf\u3002"))}d.isMDXComponent=!0},7851:function(e,t,n){t.Z=n.p+"assets/images/storage_remote-bd7771585d51d46072ec998c9d8ffeae.png"}}]);