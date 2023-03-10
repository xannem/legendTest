"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),g=a,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6590:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"release-2022-05-05",title:"Release 2022-05-05",sidebar_label:"Release 2022-05-05"},s=void 0,u={unversionedId:"release/release-2022-05-05",id:"release/release-2022-05-05",title:"Release 2022-05-05",description:"Released Features",source:"@site/../docs/release/2022-05-05.md",sourceDirName:"release",slug:"/release/release-2022-05-05",permalink:"/docs/release/release-2022-05-05",draft:!1,tags:[],version:"current",frontMatter:{id:"release-2022-05-05",title:"Release 2022-05-05",sidebar_label:"Release 2022-05-05"},sidebar:"docs",previous:{title:"Query Protocol",permalink:"/docs/reference/query-protocol"},next:{title:"Release 2022-04-26",permalink:"/docs/release/release-2022-04-26"}},d={},p=[{value:"Released Features",id:"released-features",level:2},{value:"Query Builder",id:"query-builder",level:3},{value:"Developer Experience",id:"developer-experience",level:3}],c={toc:p};function g(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"released-features"},"Released Features"),(0,o.kt)("h3",{id:"query-builder"},"Query Builder"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"New date & time capabilities.")," Query Builder now supports filtering by additional date and time values. These include ",(0,o.kt)("inlineCode",{parentName:"p"},"now()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"today ()"),", and customized absolute date & time values. Additional, date and time values can be used for filters, post filters, parameters and derived properties.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"datefilter",src:r(1137).Z,width:"3572",height:"2008"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Date Propagations for milestoned properties.")," Date propagations for milestoned properties are now supported. You can also overwrite default date parameter values for milestoned properties directly from the projection and filter panels. Previously, you would have to go to text mode to edit these."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"milestoning",src:r(7172).Z,width:"960",height:"540"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Aggregations for Enumeration values.")," You can now perform aggregation operations in the projection column on an enumeration value when creating your query in the Query Builder. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"enumeration aggregation",src:r(3364).Z,width:"2560",height:"1040"})),(0,o.kt)("h3",{id:"developer-experience"},"Developer Experience"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Helpful documentation in text mode."),' Another highly anticipated feature! This includes suggestions and auto-complete functionality to easier construct your data model code in Studio\'s text mode ("developer mode"). Users will also see help text with regards to data model code blocks (e.g. ### Mapping) when hovering over the keywords.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hover",src:r(8487).Z,width:"2876",height:"1016"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"suggestion",src:r(1687).Z,width:"2876",height:"1016"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debug query execution with Plan Viewer.")," Problems figuring out what is wrong with your query execution? Legend Studio's Execution Plan Viewer comes to the rescue! Check out the new debug log to find out what step the execution failed and prevented your query from running properly."),(0,o.kt)("p",null,"See more details ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/finos/legend-studio/issues/940"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Launch GitLab project from Studio.")," You can now navigate to the underlying GitLab project from Studio's \"Project\" view. Quick reminder, GitLab manages the data model SDLC under the hood and this is where your data model's code lives."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"launch gitlab",src:r(4900).Z,width:"842",height:"606"})))}g.isMDXComponent=!0},1137:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/datefilter-97fea10453ea57b3e417c342debb7a59.gif"},3364:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/enumeration-aggregation-fed9fc5db3933a3e1aaa75de6f56de0a.gif"},8487:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hover-22cd63254cb79e314d159ffb73be77c3.gif"},4900:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/launch-gitlab-33882f218b777113cf79919798f18a18.jpg"},7172:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/milestoning-8331e64db8f56eae4976f090b0bd5f58.gif"},1687:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/suggestion-cc1cf87541f0ae22723bf68220a7bb9c.gif"}}]);