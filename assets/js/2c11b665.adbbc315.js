"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],l={id:"data-modeling-concepts",title:"Elements of a Data Model",sidebar_label:"Data Modeling Concepts"},i=void 0,p={unversionedId:"concepts/data-modeling-concepts",id:"concepts/data-modeling-concepts",title:"Elements of a Data Model",description:"Data models allow you to describe your data and data relationships.",source:"@site/../docs/concepts/data-modeling-concepts.md",sourceDirName:"concepts",slug:"/concepts/data-modeling-concepts",permalink:"/legendTest/docs/concepts/data-modeling-concepts",draft:!1,tags:[],version:"current",frontMatter:{id:"data-modeling-concepts",title:"Elements of a Data Model",sidebar_label:"Data Modeling Concepts"},sidebar:"docs",previous:{title:"Legend Concepts",permalink:"/legendTest/docs/concepts/legend-concepts"},next:{title:"Legend Language",permalink:"/legendTest/docs/reference/legend-language"}},c={},d=[{value:"Classes",id:"classes",level:2},{value:"Properties",id:"properties",level:2},{value:"Derived properties",id:"derived-properties",level:2},{value:"Tagged values",id:"tagged-values",level:2},{value:"Stereotypes",id:"stereotypes",level:2},{value:"Enumeration",id:"enumeration",level:2},{value:"Constraints",id:"constraints",level:2},{value:"Super types",id:"super-types",level:2},{value:"Data Types",id:"data-types",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Data models allow you to describe your data and data relationships. "),(0,o.kt)("h2",{id:"classes"},"Classes"),(0,o.kt)("p",null,"Classes define a business concept."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("p",null,"Properties are components of classes that define the attributes of a business concept. Properties can be both primitives (like strings or integers) or other properties. Use properties in a class to define attributes of the business concept."),(0,o.kt)("h2",{id:"derived-properties"},"Derived properties"),(0,o.kt)("p",null,"Derived properties use functions to operate on other attributes in the data model."),(0,o.kt)("h2",{id:"tagged-values"},"Tagged values"),(0,o.kt)("p",null,"Tagged values allow you to add context to your data model. Tagged values can be added at the class level and at the property level."),(0,o.kt)("h2",{id:"stereotypes"},"Stereotypes"),(0,o.kt)("p",null,"Stereotypes allow you to extend metadata information about a model."),(0,o.kt)("h2",{id:"enumeration"},"Enumeration"),(0,o.kt)("p",null,"An enumeration is a model attribute that has a finite list of values."),(0,o.kt)("h2",{id:"constraints"},"Constraints"),(0,o.kt)("p",null,"A data model has built-in governance features, called ",(0,o.kt)("em",{parentName:"p"},"data quality controls"),". You create data quality controls every time you define a model. Constraints are governance tools added on top of quality controls. Use constraints to define a validation or condition on the model that's expected to be met."),(0,o.kt)("h2",{id:"super-types"},"Super types"),(0,o.kt)("p",null,"Super types show a relationship between classes or business concepts within a model. Add a super type to the model to show a hierarchical relationship between classes or business concepts. "),(0,o.kt)("h2",{id:"data-types"},"Data Types"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"COMING SOON")))}m.isMDXComponent=!0}}]);