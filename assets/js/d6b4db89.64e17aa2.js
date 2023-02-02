"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<n;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=r(7462),i=r(3366),n=(r(7294),r(3905)),l=["components"],o={id:"query-tutorial",title:"Legend Query Tutorial",sidebar_label:"Query"},s=void 0,u={unversionedId:"tutorials/query-tutorial",id:"tutorials/query-tutorial",title:"Legend Query Tutorial",description:"Query Builder",source:"@site/../docs/tutorials/query-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/query-tutorial",permalink:"/docs/tutorials/query-tutorial",draft:!1,tags:[],version:"current",frontMatter:{id:"query-tutorial",title:"Legend Query Tutorial",sidebar_label:"Query"},sidebar:"docs",previous:{title:"Studio",permalink:"/docs/tutorials/studio-tutorial"},next:{title:"Legend Concepts",permalink:"/docs/concepts/legend-concepts"}},c={},d=[{value:"Query Builder",id:"query-builder",level:2},{value:"Create a Query",id:"create-a-query",level:2},{value:"Core Features",id:"core-features",level:2},{value:"Class Explorer",id:"class-explorer",level:3},{value:"Function Explorer",id:"function-explorer",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Constants",id:"constants",level:3},{value:"Filter",id:"filter",level:3},{value:"Milestoning",id:"milestoning",level:3},{value:"Watermark",id:"watermark",level:3},{value:"Fetch Structure - Tabular Data Structure",id:"fetch-structure---tabular-data-structure",level:2},{value:"Projection Columns",id:"projection-columns",level:3},{value:"Post Filter",id:"post-filter",level:3},{value:"OLAP",id:"olap",level:3},{value:"Result Modifiers",id:"result-modifiers",level:3},{value:"Fetch Structure - Graph Fetch",id:"fetch-structure---graph-fetch",level:2},{value:"Executing Queries",id:"executing-queries",level:2},{value:"Execute With Parameters",id:"execute-with-parameters",level:3},{value:"Export Data",id:"export-data",level:3}],p={toc:d};function m(e){var t=e.components,o=(0,i.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"query-builder"},"Query Builder"),(0,n.kt)("p",null,"You can build a query directly in Alloy Studio using its drag-and-drop environment, Query Builder. To create a query, right-click any class with mapped data and drag-and-drop the fields you want to the central panel. To execute the query, click ",(0,n.kt)("inlineCode",{parentName:"p"},"play"),". "),(0,n.kt)("h2",{id:"create-a-query"},"Create a Query"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"COMING SOON")),(0,n.kt)("h2",{id:"core-features"},"Core Features"),(0,n.kt)("h3",{id:"class-explorer"},"Class Explorer"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"COMING SOON")),(0,n.kt)("h3",{id:"function-explorer"},"Function Explorer"),(0,n.kt)("p",null,"The function explorer shows you all the functions you have defined and lets you drag and drop to selected panels in the query builder including the derviation projection columns.  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Function Explorer",src:r(5564).Z,width:"600",height:"332"})),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"Parameters are variables assigned to your query. They are dynamic in nature and can change for each execution."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add a parameter",src:r(5025).Z,width:"600",height:"328"})),(0,n.kt)("h3",{id:"constants"},"Constants"),(0,n.kt)("p",null,"Constants are static values set to a variable name that can be leveraged within your query. They remain the same for ALL executions."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add a constant",src:r(7982).Z,width:"600",height:"375"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add a constant for milestone value",src:r(3582).Z,width:"600",height:"375"})),(0,n.kt)("h3",{id:"filter"},"Filter"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"COMING SOON")),(0,n.kt)("h3",{id:"milestoning"},"Milestoning"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Milestoning",src:r(7935).Z,width:"600",height:"338"})),(0,n.kt)("h3",{id:"watermark"},"Watermark"),(0,n.kt)("p",null,"You can add a watermark to your query through the advanced options tab. If a watermark is present, a waterdrop icon will appear on the top left of your query and you can also edit your watermark by clicking that icon. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Watermark",src:r(1499).Z,width:"2936",height:"1478"})),(0,n.kt)("h2",{id:"fetch-structure---tabular-data-structure"},"Fetch Structure - Tabular Data Structure"),(0,n.kt)("h3",{id:"projection-columns"},"Projection Columns"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"COMING SOON")),(0,n.kt)("h3",{id:"post-filter"},"Post Filter"),(0,n.kt)("p",null,"You may add a filter that will be applied to your Tabular Data Structure Columns that were defined through the projection panel by adding a post-filter."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Post Filter",src:r(8039).Z,width:"600",height:"338"}),"\n",(0,n.kt)("img",{alt:"Post Filter on aggregation",src:r(2341).Z,width:"600",height:"338"}),"\n",(0,n.kt)("img",{alt:"OLAP with Post Filter",src:r(4930).Z,width:"600",height:"338"})),(0,n.kt)("h3",{id:"olap"},"OLAP"),(0,n.kt)("p",null,"Olap let you add ",(0,n.kt)("a",{parentName:"p",href:"https://mode.com/sql-tutorial/sql-window-functions/"},"window")," columns to your query.\nSee: "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create Simple OLAP",src:r(9814).Z,width:"600",height:"338"}),"\n",(0,n.kt)("img",{alt:"OLAP Modal",src:r(9564).Z,width:"600",height:"338"}),"\n",(0,n.kt)("img",{alt:"OLAP with Post Filter",src:r(9200).Z,width:"600",height:"338"})),(0,n.kt)("h3",{id:"result-modifiers"},"Result Modifiers"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"COMING SOON")),(0,n.kt)("h2",{id:"fetch-structure---graph-fetch"},"Fetch Structure - Graph Fetch"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"COMING SOON")),(0,n.kt)("h2",{id:"executing-queries"},"Executing Queries"),(0,n.kt)("h3",{id:"execute-with-parameters"},"Execute With Parameters"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Execute Params",src:r(8442).Z,width:"600",height:"341"}),"\n",(0,n.kt)("img",{alt:"Export Params With Enums",src:r(5045).Z,width:"600",height:"341"})),(0,n.kt)("h3",{id:"export-data"},"Export Data"),(0,n.kt)("p",null,"Once you are content with your data, you can also export to other types. For now we support exporting your query results to ",(0,n.kt)("inlineCode",{parentName:"p"},"CSV"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Export CSV",src:r(3784).Z,width:"600",height:"338"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Export CSV",src:r(4797).Z,width:"600",height:"338"})))}m.isMDXComponent=!0},3582:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/constants-milestoning-c10231945900d5d3f25bdb0767dc417e.gif"},7982:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/constants-simple-024e61c2e911a1dd8de322ae638a4ca2.gif"},5045:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/execute-params-enums-c83c20cfc0d75c3ac7cec5d886aae16d.gif"},8442:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/execute-params-8b7decf562d57c2bb6fd5cb9977df91a.gif"},4797:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/export-csv-params-f2f715eefc6b6512bcb7a3a11619d4dc.gif"},3784:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/export-csv-07111a34571c1161a9b3a2f77dd7e603.gif"},5564:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/function-explorer-940dd3e2031bb79543b8ed5e6efd966c.gif"},7935:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/milestoning-a9af2c8999f2494b2b1843febe181ec4.gif"},9564:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/olap-create-modal-3bc660480123ec382b605f539f5c1798.gif"},9200:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/olap-post-filter-2a586df8892019d9a9c7969e7e35b1e2.gif"},9814:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/olap-simple-dd09eb729cc10fdd25fccceefe357c76.gif"},5025:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/params-4ae2a440b79f624b1411c4277c2fbc51.gif"},2341:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/post-filter-aggregation-cfb0f4c300d6047fc2633a0e8214128d.gif"},4930:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/post-filter-derived-e2a0f45976042da060dc769a3f878e98.gif"},8039:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/post-filter-simple-c95860c32d4a3a16c6c835d3c6e04d65.gif"},1499:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/watermark-668e2cde4009b0ea711b610ffadf05ba.gif"}}]);