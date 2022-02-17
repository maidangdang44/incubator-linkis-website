"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7982],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),v=i,m=d["".concat(s,".").concat(v)]||d[v]||p[v]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94518:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),c=["components"],a={title:"Start Of A Single Service",sidebar_position:1},s=void 0,l={unversionedId:"development/start-server",id:"version-0.11.0/development/start-server",isDocsHomePage:!1,title:"Start Of A Single Service",description:"1 jump to corresponding service directory",source:"@site/versioned_docs/version-0.11.0/development/start-server.md",sourceDirName:"development",slug:"/development/start-server",permalink:"/docs/0.11.0/development/start-server",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-0.11.0/development/start-server.md",tags:[],version:"0.11.0",sidebarPosition:1,frontMatter:{title:"Start Of A Single Service",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Installation Of A Single Service",permalink:"/docs/0.11.0/development/install-server"},next:{title:"How To Quickly Implement A New Engine",permalink:"/docs/0.11.0/development/new_engine_conn"}},u=[{value:"1 jump to corresponding service directory",id:"1-jump-to-corresponding-service-directory",children:[]},{value:"2 Execute Launch",id:"2-execute-launch",children:[]},{value:"3 Startup Success Check",id:"3-startup-success-check",children:[]}],p={toc:u};function d(e){var t=e.components,a=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-jump-to-corresponding-service-directory"},"1 jump to corresponding service directory"),(0,o.kt)("p",null,"e.g. PublicService"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-publicservice\n")),(0,o.kt)("h2",{id:"2-execute-launch"},"2 Execute Launch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    sh start-publicservice.sh\n")),(0,o.kt)("h2",{id:"3-startup-success-check"},"3 Startup Success Check"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(1) Judging logs can be viewed by looking at linkis.out")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    less -i logs/linkis.out\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By viewing the Eureka interface")),(0,o.kt)("p",null,"View service startup on Eureka interface, see method\uff1a"),(0,o.kt)("p",null,"Use http://${EUREKA_INSTALL_IP}:${EUREKA_PORT}, open in browser, see whether the service was registered successfully."),(0,o.kt)("p",null,"If your Eureka home page shows a microservice, it indicates that the service is started successfully and can be provided externally\uff1a"),(0,o.kt)("p",null," ",(0,o.kt)("img",{alt:"Eureka",src:r(87490).Z})))}d.isMDXComponent=!0},87490:function(e,t,r){t.Z=r.p+"assets/images/Eureka_homepage-de09b1b756300a8b4878cfd9b547ea86.png"}}]);