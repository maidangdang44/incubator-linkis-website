"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7948],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},88688:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"RM design",sidebar_position:2},l=void 0,c={unversionedId:"architecture/rm",id:"version-0.11.0/architecture/rm",title:"RM design",description:"1 Background",source:"@site/versioned_docs/version-0.11.0/architecture/rm.md",sourceDirName:"architecture",slug:"/architecture/rm",permalink:"/docs/0.11.0/architecture/rm",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-0.11.0/architecture/rm.md",tags:[],version:"0.11.0",sidebarPosition:2,frontMatter:{title:"RM design",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/0.11.0/architecture/overview"},next:{title:"WebSocket Request",permalink:"/docs/0.11.0/architecture/websocket"}},u=[{value:"1 Background",id:"1-background",children:[],level:2},{value:"2 Product Design",id:"2-product-design",children:[{value:"2.1 Overall architecture diagram",id:"21-overall-architecture-diagram",children:[],level:3},{value:"2.2 Database table structure design",id:"22-database-table-structure-design",children:[],level:3},{value:"2.3 Types and formats of resources",id:"23-types-and-formats-of-resources",children:[],level:3}],level:2},{value:"3 Record the available resources reported by EM",id:"3-record-the-available-resources-reported-by-em",children:[],level:2},{value:"4 Resource allocation and recycling",id:"4-resource-allocation-and-recycling",children:[],level:2},{value:"5 Implementation of EM lock and user lock",id:"5-implementation-of-em-lock-and-user-lock",children:[],level:2},{value:"6 RM Client",id:"6-rm-client",children:[],level:2},{value:"7 Multi-instance state synchronization",id:"7-multi-instance-state-synchronization",children:[],level:2}],d={toc:u};function p(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-background"},"1 Background"),(0,i.kt)("p",null,"  In the microservice scenario, the resources consumed and occupied by various services are diverse and more difficult to manage than traditional applications. Linkis RM provides services for the uniform allocation and recycling of resources. When a large number of services are started and closed at a high frequency, it ensures that the consumption of resources by the service does not exceed the limit."),(0,i.kt)("h2",{id:"2-product-design"},"2 Product Design"),(0,i.kt)("h3",{id:"21-overall-architecture-diagram"},"2.1 Overall architecture diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"RM Architecture Diagram",src:r(34424).Z,width:"872",height:"663"})),(0,i.kt)("p",null,"  RM maintains the available resource information reported by the engine manager, processes the resource application submitted by the engine, and records the actual resource usage information after the successful application."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Engine Manager, EM for short: a microservice that processes requests to start an engine. As a resource provider, EM is responsible for registering and unregistering resources with RM. At the same time, EM, as the manager of the engine, is responsible for applying for resources from RM instead of the engine. For each EM instance, there is a corresponding resource record in the RM, which contains information such as the total resources and protection resources it provides, and dynamically updates the used resources.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Engine, also known as application: a microservice that executes user operations. At the same time, as the actual user of resources, the engine is responsible for reporting the actual used resources and releasing resources to the RM. Each Engine has a corresponding resource record in the RM: during the startup process, it is reflected as a locked resource; during the running process, it is reflected as a used resource; after being terminated, the resource record is subsequently deleted."))),(0,i.kt)("h3",{id:"22-database-table-structure-design"},"2.2 Database table structure design"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nUser resource record table:\nlinkis_user_resource_meta_data:\nid\nuser\nticket_id\ncreator\nem_application_name\nem_instance\nengine_application_name\nengine_instance\nuser_locked_resource: store json directly\nuser_used_resource: json\nresource_type\nlocked_time\nused_time\n\nModule resource record table:\nlinkis_em_resource_meta_data:\nid\nem_application_name\nem_instance\ntotal_resource:json\nprotected_resource:json\nresource_policy\nused_resource:json\nleft_resource:json\nlocked_resource:json\nregister_time: long\n\nModule policy table:\nlinkis_em_meta_data:\nid\nem_name\nresource_request_policy\n\nLock: The table needs to add unique constraint: (scope, user, module_application_name, module_instance) to ensure that the lock is not forced to be acquired multiple times at the same time.\nlinkis_resource_lock:\nid\nuser\nem_application_name\nem_instance\n\n")),(0,i.kt)("h3",{id:"23-types-and-formats-of-resources"},"2.3 Types and formats of resources"),(0,i.kt)("p",null,"  As shown in the figure above, all resource classes implement a top-level Resource interface, which defines the calculation and comparison methods that all resource classes need to support, and performs corresponding mathematical operator overloading, so that resources can be Directly calculated and compared like numbers."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"operator"),(0,i.kt)("th",{parentName:"tr",align:"left"},"corresponding method"),(0,i.kt)("th",{parentName:"tr",align:"left"},"operator"),(0,i.kt)("th",{parentName:"tr",align:"left"},"corresponding method"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"+"),(0,i.kt)("td",{parentName:"tr",align:"left"},"add"),(0,i.kt)("td",{parentName:"tr",align:"left"},">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"moreThan")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"-"),(0,i.kt)("td",{parentName:"tr",align:"left"},"minus"),(0,i.kt)("td",{parentName:"tr",align:"left"},"<"),(0,i.kt)("td",{parentName:"tr",align:"left"},"lessThan")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"*"),(0,i.kt)("td",{parentName:"tr",align:"left"},"multiply"),(0,i.kt)("td",{parentName:"tr",align:"left"},"="),(0,i.kt)("td",{parentName:"tr",align:"left"},"equals")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"/"),(0,i.kt)("td",{parentName:"tr",align:"left"},"divide"),(0,i.kt)("td",{parentName:"tr",align:"left"},">="),(0,i.kt)("td",{parentName:"tr",align:"left"},"notLessThan")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"<="),(0,i.kt)("td",{parentName:"tr",align:"left"},"notMoreThan"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("p",null,"  The currently supported resource types are shown in the following table. All resources have corresponding json serialization and deserialization methods, which can be stored in json format and transmitted across the network:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Resource Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"MemoryResource"),(0,i.kt)("td",{parentName:"tr",align:"left"},"MemoryResource")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"CPUResource"),(0,i.kt)("td",{parentName:"tr",align:"left"},"CPU Resource")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"LoadResource"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Have both memory and CPU resources")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"YarnResource"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yarn queue resources (queue, queue memory, queue CPU, number of queue instances)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"LoadInstanceResource"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server resources (memory, CPU, number of instances)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"DriverAndYarnResource"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Driver and actuator resources (both server resources and Yarn queue resources)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SpecialResource"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Other custom resources")))),(0,i.kt)("h2",{id:"3-record-the-available-resources-reported-by-em"},"3 Record the available resources reported by EM"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When the EM holding the resource starts, it will call the register interface through RPC and pass in the resource in json format for resource registration. The parameters that need to be provided to the register interface are as follows:"),(0,i.kt)("p",{parentName:"li"},"1) Total resources: the total number of resources that the EM can provide."),(0,i.kt)("p",{parentName:"li"},"2) Protect resources: When the remaining resources are less than this resource, no further resources are allowed to be allocated."),(0,i.kt)("p",{parentName:"li"},"3) Resource type: such as LoadResource, DriverAndYarnResource and other type names."),(0,i.kt)("p",{parentName:"li"},"4) EM name: The EM name that provides resources such as sparkEngineManager."),(0,i.kt)("p",{parentName:"li"},"5) EM instance: machine name plus port name.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the RM receives the resource registration request, it adds a new record to the table linkis_module_resource_meta_data, the content of which is consistent with the parameter information of the interface.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When the EM holding the resource is closed, it will call the unregister interface through RPC and pass in its own EM instance information as a parameter to offline the resource.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After receiving the resource offline request, the RM finds the row corresponding to the EM instance information in the linkis_module_resource_meta_data table and deletes it; at the same time, finds all the rows corresponding to the EM instance in the linkis_user_resource_meta_data table and deletes it."))),(0,i.kt)("h2",{id:"4-resource-allocation-and-recycling"},"4 Resource allocation and recycling"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Receive user's resource application."),(0,i.kt)("p",{parentName:"li"},"a) RM provides requestResource interface to EM to report resource application, this interface accepts EM instance, user, Creator and Resource object as parameters. requestResource accepts an optional time parameter. When the processing event exceeds the limit of the time parameter, the resource request will be automatically processed as a failure.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Determine whether there are sufficient resources."),(0,i.kt)("p",{parentName:"li"},"a) According to the EM instance information, find the resource type provided by the EM, and then find the corresponding RequestResourceService (there are multiple subclasses, and each subclass corresponds to one or more resource types and has its own processing logic)."),(0,i.kt)("p",{parentName:"li"},"b) RequestResourceService counts the remaining available resources from multiple dimensions."),(0,i.kt)("p",{parentName:"li"}," ","\u2002","i. According to the total resources of the EM, after subtracting the used resources and the protected resources, the remaining EM available resources are obtained."),(0,i.kt)("p",{parentName:"li"}," ","\u2002","ii. According to the upper limit of the resources allowed by the creator, after subtracting the resources already used by the creator, the remaining available resources of the creator are obtained."),(0,i.kt)("p",{parentName:"li"}," ","\u2002","iii. According to the upper limit of the resources allowed by the user, after subtracting the resources used by the user, the remaining resources available to the user are obtained."),(0,i.kt)("p",{parentName:"li"}," ","\u2002","iv. According to the user's global upper limit of the number of instances, subtract the number of engines that the user has started to obtain the remaining number of available instances."),(0,i.kt)("p",{parentName:"li"},"c) Step by step, compare the remaining available quantity with the requested resources."),(0,i.kt)("p",{parentName:"li"}," ","\u2002","i. According to the order listed in b, once the remaining available quantity of a certain step is less than the quantity applied for, it is immediately determined that there are not enough resources, and NotEnoughResource and the corresponding prompt information are returned, and the determination of subsequent steps will not be performed."),(0,i.kt)("p",{parentName:"li"}," ","\u2002","ii. In the above steps, if the remaining available quantity is greater than the requested quantity until the end, it is determined that there are enough resources, and the next step is to lock the resources.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lock the resource for the request that successfully applied for the resource. After confirming that the resources are sufficient, lock the resources in advance for the application and generate a unique identifier."),(0,i.kt)("p",{parentName:"li"},"a) In order to ensure the correctness in the concurrent scenario, two locks need to be added before the lock operation (the specific implementation of the lock mechanism is described in another chapter): EM lock and user lock."),(0,i.kt)("p",{parentName:"li"}," ","\u2002","i. EM lock. After the lock is obtained, other resource operations for the EM will not be allowed."),(0,i.kt)("p",{parentName:"li"}," ","\u2002","ii. User lock. After the lock is obtained, other resource operations of the user will not be allowed."),(0,i.kt)("p",{parentName:"li"},"b) After the two locks are successfully obtained, the judgment will be repeated again to determine whether the resources are sufficient, and if it is still sufficient, continue with the subsequent steps."),(0,i.kt)("p",{parentName:"li"},"c) Generate a UUID for the resource application, and insert a user resource record in the linkis_user_resource_meta_data table (pre_used_resource is the number of resources requested, and used_resource is null)."),(0,i.kt)("p",{parentName:"li"},"d) Update the corresponding EM resource record fields (locked_resource, left_resource) in the linkis_module_resource_meta_data table."),(0,i.kt)("p",{parentName:"li"},"e) Submit a timed task. If the task is not cancelled, the two steps c and d will be rolled back after a fixed time, and the UUID will be invalidated so that the locked resources that are not actually used will not be occupied indefinitely."),(0,i.kt)("p",{parentName:"li"},"f) Return the UUID to the resource applicant."),(0,i.kt)("p",{parentName:"li"},"g) No matter what happens in the above steps, release the two locks obtained in a at the end.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Receive the actual used resources reported by the user."),(0,i.kt)("p",{parentName:"li"},"a) Provide resourceInited interface, accept UUID, user name, EM instance information, actual use of Resource object and engine instance information as parameters."),(0,i.kt)("p",{parentName:"li"},"b) After receiving the reported information, obtain the EM lock and user lock."),(0,i.kt)("p",{parentName:"li"},"c) According to the UUID query to find the corresponding locked resource record, update pre_used_resource to null, and fill in used_resource with the resource actually used."),(0,i.kt)("p",{parentName:"li"},"d) Update the corresponding module resource record (restore locked_resource, add used_resource)."),(0,i.kt)("p",{parentName:"li"},"e) Abnormal situation: If the corresponding UUID cannot be found, it is considered that the lock on the resource has been lost, and an exception message is returned.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Receive a request from the user to release resources."),(0,i.kt)("p",{parentName:"li"},"a) Provide resourceReleased interface, accept UUID, username, EM instance as parameters."),(0,i.kt)("p",{parentName:"li"},"b) After receiving the request, obtain the EM lock and the user lock."),(0,i.kt)("p",{parentName:"li"},"c) Query the corresponding user resource record according to UUID, and delete the row."),(0,i.kt)("p",{parentName:"li"},"d) Update the corresponding module resource record (clean up used_resource, restore left_resource)."))),(0,i.kt)("h2",{id:"5-implementation-of-em-lock-and-user-lock"},"5 Implementation of EM lock and user lock"),(0,i.kt)("p",null,"  The lock is realized through the linkis_resource_lock table, and the unique constraint mechanism of the database itself is used to ensure that the data is not preempted."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"EM lock: for the global lock on an instance of an EM operation."),(0,i.kt)("p",{parentName:"li"},"a) Obtain the lock:"),(0,i.kt)("p",{parentName:"li"}," ","\u2002","i. Check whether there is a record where the user is null and the application and instance fields are corresponding values. If there is, it means that the lock has been acquired by other instances, and polling is waiting."),(0,i.kt)("p",{parentName:"li"}," ","\u2002","ii. When there is no corresponding record, insert a record, if the insertion is successful, it means that the lock is successfully obtained; if the insertion encounters a UniqueConstraint error, the record polling and waiting until timeout."),(0,i.kt)("p",{parentName:"li"},"b) Release the lock:"),(0,i.kt)("p",{parentName:"li"}," ","\u2002","i. Delete the record that you own.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"User lock: lock the operation of a certain EM for a certain user."),(0,i.kt)("p",{parentName:"li"},"a) Obtain the lock:"),(0,i.kt)("p",{parentName:"li"}," ","\u2002","i. Check whether there is a record with the user, application and instance fields as corresponding values. If so, it means that the lock has been acquired by other instances, and wait for polling."),(0,i.kt)("p",{parentName:"li"}," ","\u2002","ii. When there is no corresponding record, insert a record, if the insertion is successful, it means that the lock is successfully obtained; if the insertion fails, the record polling waits until timeout."),(0,i.kt)("p",{parentName:"li"},"b) Release the lock:"),(0,i.kt)("p",{parentName:"li"}," ","\u2002","i. Delete the records held by yourself."))),(0,i.kt)("h2",{id:"6-rm-client"},"6 RM Client"),(0,i.kt)("p",null,"  In the form of a jar package, the client is provided to resource users and resource providers, including the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All resources\nType of Java class (a subclass of Resource class), and the corresponding json serialization method.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The Java class (subclass of ResultResource class) of all resource allocation results, and the corresponding json serialization method.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The encapsulated RM interface (resource registration, offline, application, available resources and resource release requests)."),(0,i.kt)("p",{parentName:"li"},"After calling the client's interface, the client will generate the corresponding RPC command and pass it to a microservice of RM for processing through the Sender. After RM is processed, the result is also returned to the client via RPC."))),(0,i.kt)("h2",{id:"7-multi-instance-state-synchronization"},"7 Multi-instance state synchronization"),(0,i.kt)("p",null,"\u2002","\u2002","Because RM is a key underlying service, in order to prevent the resource allocation of all services from being affected by an abnormality of an RM instance, it is necessary to ensure that multiple RM instances are in service at the same time, and to ensure that a request is received by which instance Processing can ensure the consistency of the results."),(0,i.kt)("p",null,"\u2002","\u2002"," When a user requests the service of RM, he must request it through the forwarding of the gateway service, and cannot directly request a fixed RM instance. Through the service registration and discovery mechanism, the gateway service identifies the RM instance that normally provides the service, and then forwards the RPC request to one of the instances. This ensures that all requests will be processed by the RM instance in the normal state."),(0,i.kt)("p",null,"All resource records of ","\u2002","\u2002","RM are stored in the same database, and all RM instances do not maintain their own state. When RM processes a request, any state change involved will obtain state information from the database in real time after the lock is locked, and immediately update the state back to the database after completing the processing logic, and then release the lock. This ensures that when multiple RMs process requests at the same time, they can always be based on the latest status."))}p.isMDXComponent=!0},34424:function(e,t,r){t.Z=r.p+"assets/images/rm_architecture_diagram-1c3dbd483ada630bcfe271fdc26a4b5d.png"}}]);