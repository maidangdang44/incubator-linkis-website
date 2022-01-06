"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[975],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(k,o(o({ref:n},c),{},{components:t})):r.createElement(k,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},839:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={title:"Linkis \u7f16\u8bd1\u6253\u5305",sidebar_position:0},p=void 0,s={unversionedId:"development/compile_and_package",id:"version-0.11.0/development/compile_and_package",isDocsHomePage:!1,title:"Linkis \u7f16\u8bd1\u6253\u5305",description:"1 \u5168\u91cf\u7f16\u8bd1Linkis",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/development/compile_and_package.md",sourceDirName:"development",slug:"/development/compile_and_package",permalink:"/zh-CN/docs/0.11.0/development/compile_and_package",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/development/compile_and_package.md",tags:[],version:"0.11.0",sidebarPosition:0,frontMatter:{title:"Linkis \u7f16\u8bd1\u6253\u5305",sidebar_position:0},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"\u5168\u5f02\u6b65\u7ebf\u7a0b\u6c60\u8c03\u7528",permalink:"/zh-CN/docs/0.11.0/architecture/ujes/asynchronous_thread_pool"},next:{title:"\u5355\u4e2a\u670d\u52a1\u7684\u5b89\u88c5",permalink:"/zh-CN/docs/0.11.0/development/install-server"}},c=[{value:"1 \u5168\u91cf\u7f16\u8bd1Linkis",id:"1-\u5168\u91cf\u7f16\u8bd1linkis",children:[]},{value:"2 \u7f16\u8bd1\u5355\u4e2a\u670d\u52a1",id:"2-\u7f16\u8bd1\u5355\u4e2a\u670d\u52a1",children:[]}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u5168\u91cf\u7f16\u8bd1linkis"},"1 \u5168\u91cf\u7f16\u8bd1Linkis"),(0,i.kt)("p",null,"   ",(0,i.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u73af\u5883\u8981\u6c42\uff1a"),"  \u9700\u8981JDK8\u4ee5\u4e0a\u8fdb\u884c\u7f16\u8bd1\uff0c",(0,i.kt)("strong",{parentName:"p"},"Oracle/Sun")," \u548c ",(0,i.kt)("strong",{parentName:"p"},"OpenJDK"),"\u90fd\u652f\u6301\u3002"),(0,i.kt)("p",null,"   \u4ecegit\u83b7\u53d6\u9879\u76ee\u4ee3\u7801\u540e\uff0c\u4f7f\u7528maven\u6253\u5305\u9879\u76ee\u5b89\u88c5\u5305\u3002  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f"),"\uff1a\u5b98\u65b9\u63a8\u8350\u4f7f\u7528 Hadoop-2.7.2\u3001Hive-1.2.1\u3001Spark-2.4.3 \u548c Scala-2.11.12 \u5bf9 Linkis \u8fdb\u884c\u7f16\u8bd1\u3002"),(0,i.kt)("p",null,"   \u5982\u679c\u60a8\u60f3\u4f7f\u7528Hadoop\u3001Hive\u3001Spark\u7684\u5176\u4ed6\u7248\u672c\u5bf9Linkis\u8fdb\u884c\u7f16\u8bd1\uff0c\u60a8\u53ef\u4ee5\u8fdb\u5165Linkis\u6e90\u7801\u5305\u6839\u76ee\u5f55\uff0c\u624b\u52a8\u4fee\u6539 pom.xml \u6587\u4ef6\u76f8\u5173\u7248\u672c\u4fe1\u606f\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x\n    vim pom.xml\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"    <properties>\n      \n        <hadoop.version>2.7.2</hadoop.version>\n        <hive.version>1.2.1</hive.version>\n        <spark.version>2.4.3</spark.version>\n              \n        <scala.version>2.11.12</scala.version>\n        <jdk.compile.version>1.8</jdk.compile.version>\n              \n    </properties>\n")),(0,i.kt)("p",null,"   (1) ",(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u662f\u672c\u5730\u7b2c\u4e00\u6b21\u4f7f\u7528\uff0c\u5fc5\u987b\u5728 Linkis \u6e90\u7801\u5305\u6839\u76ee\u5f55\u5148\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x\n    mvn -N  install\n")),(0,i.kt)("p",null,"   (2) \u5728Linkis \u6e90\u7801\u5305\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x\n    mvn clean install\n")),(0,i.kt)("p",null,"   (3) \u83b7\u53d6\u5b89\u88c5\u5305\uff0c\u5728\u5de5\u7a0b\u7684assembly->target\u76ee\u5f55\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    wedatasphere-linkis-x.x.x/assembly/target/wedatasphere-linkis-x.x.x-dist.tar.gz\n")),(0,i.kt)("h2",{id:"2-\u7f16\u8bd1\u5355\u4e2a\u670d\u52a1"},"2 \u7f16\u8bd1\u5355\u4e2a\u670d\u52a1"),(0,i.kt)("p",null,"   \u4ecegit\u83b7\u53d6\u9879\u76ee\u4ee3\u7801\u540e\uff0c\u4f7f\u7528maven\u6253\u5305\u9879\u76ee\u5b89\u88c5\u5305\u3002   "),(0,i.kt)("p",null,"\uff081\uff09 ",(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u662f\u672c\u5730\u7b2c\u4e00\u6b21\u4f7f\u7528\uff0c\u5fc5\u987b\u5728 Linkis \u6e90\u7801\u5305\u6839\u76ee\u5f55\u5148\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x\n    mvn -N  install\n")),(0,i.kt)("p",null,"\uff082\uff09 \u5728terminal\u901a\u8fc7\u547d\u4ee4\u884c\u8df3\u8f6c\u5230\u5bf9\u5e94\u7684\u6a21\u5757\uff0c\u6bd4\u5982"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd publicService\n")),(0,i.kt)("p",null,"\uff083\uff09 \u6267\u884c\u8be5\u6a21\u5757\u5bf9\u5e94\u7684pom.xml\u76ee\u5f55\u4e0b\u6267\u884c\u7f16\u8bd1\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    mvn clean install\n")),(0,i.kt)("p",null,"\uff084\uff09 \u83b7\u53d6\u5b89\u88c5\u5305\uff0c\u5728\u5bf9\u5e94\u6a21\u5757\u7684->target\u76ee\u5f55\u4e0b\u4f1a\u6709\u7f16\u8bd1\u597d\u7684\u5305\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   target/linkis-publicservice.zip\n")))}m.isMDXComponent=!0}}]);