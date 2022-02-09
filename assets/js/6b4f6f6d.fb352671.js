"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[2699],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9795:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],c={title:"Gateway Design",sidebar_position:3},s=void 0,l={unversionedId:"architecture/microservice_governance_services/gateway",id:"architecture/microservice_governance_services/gateway",title:"Gateway Design",description:"Gateway Architecture Design",source:"@site/docs/architecture/microservice_governance_services/gateway.md",sourceDirName:"architecture/microservice_governance_services",slug:"/architecture/microservice_governance_services/gateway",permalink:"/docs/1.1.0/architecture/microservice_governance_services/gateway",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/architecture/microservice_governance_services/gateway.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Gateway Design",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.1.0/architecture/microservice_governance_services/overview"},next:{title:"Compile And Package",permalink:"/docs/1.1.0/development/linkis_compile_and_package"}},u=[{value:"Gateway Architecture Design",id:"gateway-architecture-design",children:[{value:"Brief",id:"brief",children:[],level:4},{value:"Architecture Diagram",id:"architecture-diagram",children:[{value:"Architecture Introduction",id:"architecture-introduction",children:[],level:4},{value:"1\u3001Request Routing And Forwarding (With Label Information)",id:"1request-routing-and-forwarding-with-label-information",children:[],level:4},{value:"2\u3001WebSocket Connection Forwarding Management",id:"2websocket-connection-forwarding-management",children:[],level:4}],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gateway-architecture-design"},"Gateway Architecture Design"),(0,i.kt)("h4",{id:"brief"},"Brief"),(0,i.kt)("p",null,'The Gateway is the primary entry point for Linkis to accept client and external requests, such as receiving job execution requests, and then forwarding the execution requests to specific eligible Entrance services.\nThe bottom layer of the entire architecture is implemented based on "SpringCloudGateway". The upper layer is superimposed with module designs related to Http request parsing, session permissions, label routing and WebSocket multiplex forwarding. The overall architecture can be seen as follows.'),(0,i.kt)("h3",{id:"architecture-diagram"},"Architecture Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Gateway diagram of overall architecture",src:r(4670).Z,width:"1397",height:"839"})),(0,i.kt)("h4",{id:"architecture-introduction"},"Architecture Introduction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'gateway-core: Gateway\'s core interface definition module, mainly defines the "GatewayParser" and "GatewayRouter" interfaces, corresponding to request parsing and routing according to the request; at the same time, it also provides the permission verification tool class named "SecurityFilter".'),(0,i.kt)("li",{parentName:"ul"},'spring-cloud-gateway: This module integrates all dependencies related to "SpringCloudGateway", process and forward requests of the HTTP and WebSocket protocol types respectively.'),(0,i.kt)("li",{parentName:"ul"},'gateway-server-support: The driver module of Gateway, relies on the spring-cloud-gateway module to implement "GatewayParser" and "GatewayRouter" respectively, among which "DefaultLabelGatewayRouter" provides the function of label routing.'),(0,i.kt)("li",{parentName:"ul"},"gateway-httpclient-support: Provides a client-side generic class for Http to access Gateway services, which can be implemented based on more."),(0,i.kt)("li",{parentName:"ul"},'instance-label: External instance label module, providing service interface named "InsLabelService" which used to create routing labels and associate with application instances.')),(0,i.kt)("p",null,"The detailed design involved is as follows\uff1a"),(0,i.kt)("h4",{id:"1request-routing-and-forwarding-with-label-information"},"1\u3001Request Routing And Forwarding (With Label Information)"),(0,i.kt)("p",null,'First, after the dispatcher of "SpringCloudGateway", the request enters the filter list of the gateway, and then enters the two main logic of "GatewayAuthorizationFilter" and "SpringCloudGatewayWebsocketFilter".\nThe filter integrates "DefaultGatewayParser" and "DefaultGatewayRouter" classes. From Parser to Router, execute the corresponding parse and route methods.\n"DefaultGatewayParser" and "DefaultGatewayRouter" classes also contain custom Parser and Router, which are executed in the order of priority.\nFinally, the service instance selected by the "DefaultGatewayRouter" is handed over to the upper layer for forwarding.\nNow, we take the job execution request forwarding with label information as an example, and draw the following flowchart:',(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"Gateway Request Routing",src:r(61322).Z,width:"2767",height:"1650"})),(0,i.kt)("h4",{id:"2websocket-connection-forwarding-management"},"2\u3001WebSocket Connection Forwarding Management"),(0,i.kt)("p",null,'By default, "Spring Cloud Gateway" only routes and forwards WebSocket request once, and cannot perform dynamic switching.\nBut under the Linkis\'s gateway architecture, each information interaction will be accompanied by a corresponding uri address to guide routing to different backend services.\nIn addition to the "WebSocketService" which is responsible for connecting with the front-end and the client,\nand the "WebSocketClient" which is responsible for connecting with the backend service, a series of "GatewayWebSocketSessionConnection" lists are cached in the middle.\nA "GatewayWebSocketSessionConnection" represents the connection between a session and multiple backend service instances.',(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"Gateway WebSocket Forwarding",src:r(40216).Z,width:"911",height:"701"})))}p.isMDXComponent=!0},61322:function(e,t,r){t.Z=r.p+"assets/images/gateway_server_dispatcher-c8f5c036dd305580aef3fe531672a1f9.png"},4670:function(e,t,r){t.Z=r.p+"assets/images/gateway_server_global-539468b0405575fe0f839e1123363f57.png"},40216:function(e,t,r){t.Z=r.p+"assets/images/gatway_websocket-4a05c765228df17003fc4d90d65b2fbe.png"}}]);