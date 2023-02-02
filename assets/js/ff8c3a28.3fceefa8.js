"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={},l="ShowCase Project : Logical Modelling Basic",c={unversionedId:"showcases/LogicalModellingBasic",id:"showcases/LogicalModellingBasic",title:"ShowCase Project : Logical Modelling Basic",description:"This showcase project shows a basic Product-Account-Trade model.",source:"@site/../docs/showcases/LogicalModellingBasic.md",sourceDirName:"showcases",slug:"/showcases/LogicalModellingBasic",permalink:"/docs/showcases/LogicalModellingBasic",draft:!1,tags:[],version:"current",frontMatter:{}},d={},p=[{value:"Join us",id:"join-us",level:3}],u={toc:p};function h(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"showcase-project--logical-modelling-basic"},"ShowCase Project : Logical Modelling Basic"),(0,o.kt)("p",null,"This showcase project shows a basic Product-Account-Trade model.\nhttps:"),(0,o.kt)("p",null,"In this showcase, we will show the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-new-doc"},"Create a new Doc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-new-diagram"},"Create a new Diagram")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-new-class"},"Create a new Class, define properties and multiplicity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-new-enumeration"},"Create a new Enumeration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#define-an-association"},"Define an association")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#define-relationship-in-diagram"},"Defining relationships in diagram"))),(0,o.kt)("h1",{id:"create-a-new-doc"},"Create a new Doc"),(0,o.kt)("p",null,"A doc is creating by adding a new Text element.\nTo add a new Text element, Click on + and then select New Text.\nProvide a meaningful name to your text and then choose it to be either PlainText or a Markdown.  "),(0,o.kt)("p",null,"In our Showcase, README is a text element."),(0,o.kt)("h1",{id:"create-a-new-diagram"},"Create a new Diagram"),(0,o.kt)("p",null,"A diagram is like a canvas where we can add other elements. A Diagram helps you to define your classes and relationship between them.\nIt is a very convenient way to pictorially display your model.  "),(0,o.kt)("p",null,"To add a new Diagram, Click on + and then select New Diagram.\nProvide a meaningful name to your diagram and start adding new elements to the diagram.   "),(0,o.kt)("p",null,"In our showcase, TradeAccountDiagram is the diagram which shows the model."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Product Account Trade Model Diagram",src:n(8086).Z,width:"1906",height:"774"}),"."),(0,o.kt)("h1",{id:"create-a-new-class"},"Create a new Class"),(0,o.kt)("p",null,"There are two ways to create a class.",(0,o.kt)("br",{parentName:"p"}),"\n","1) Click on + and then select new Class, Provide a meaningful name\n2) Open your diagram and double click in any free area in the diagram. Provide a meaningful name to your class"),(0,o.kt)("p",null,"Class properties define attributes of a business concept.\nTo add class properties, open the class and click on + button as shown in the image below.\nDefine the property Name, it's type and Multiplicity."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The data type can be both primitives (like String or integers) or other Classes. "),(0,o.kt)("li",{parentName:"ul"},"Multiplicity defines the number of instances that property can have within the class."),(0,o.kt)("li",{parentName:"ul"},"There are other concepts like derived Properties, Constraints which will be covered in the next Showcase for advanced modelling.  ")),(0,o.kt)("p",null,"In our showcase, Account, Product, Trade etc all these are classes. Take some time to look at their properties, multiplicity etc."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create a new Class",src:n(3128).Z,width:"1088",height:"510"}),"."),(0,o.kt)("h1",{id:"create-a-new-enumeration"},"Create a new Enumeration"),(0,o.kt)("p",null,"A Enumeration is a set of pre-defined values. It has a concept similar to enums in programming languages.  "),(0,o.kt)("p",null,"To add a new Enumeration, Click on + and then select New Enumeration. Provide a meaningful name to your Enumeration.\nTo add values in your enumeration, open the enumeration and click on + as shown in the image below.\nDefine the values you need, and then you should be able to use these values as predefined values in your model.  "),(0,o.kt)("p",null,"In our showcase, ProductSynonymType is an enumeration. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create a new Enumeration",src:n(8503).Z,width:"1089",height:"277"}),"."),(0,o.kt)("h1",{id:"define-an-association"},"Define an Association"),(0,o.kt)("p",null,"Associations are used to define a single linking relationship between two classes.\nWe can define one to one, one to many, many to many kind of relationships using association.  "),(0,o.kt)("p",null,"To define an association, Click on + and select new Association. Provide a meaningful name to your Association.\nDefine the property name, select the class and multiplicy as shown below."),(0,o.kt)("p",null,"In our showcase ProdSynonym is an Association. Note that it shows that 1 product can have many synonyms. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Define an Association",src:n(5348).Z,width:"1089",height:"245"}),"."),(0,o.kt)("h1",{id:"define-relationship-in-diagram"},"Define relationship in diagram"),(0,o.kt)("p",null,"Relationships between classes can also be defined in the diagram.\nThis is done by selection the Property tool in the diagram.\nSelect the property tool and drag a line between the classes you want to define a relationship.\nProvide a name for the property and multiplicity for that relationship.  "),(0,o.kt)("p",null,"In the image below it shows one account can have many trades attached to it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Define relationship in diagram",src:n(3304).Z,width:"729",height:"456"}),"."),(0,o.kt)("h3",{id:"join-us"},"Join us"),(0,o.kt)("p",null,"Join us at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/finos/legend"},"https://github.com/finos/legend"),"."))}h.isMDXComponent=!0},5348:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/association-29b452d2b476209dfe298a5c134b03f2.png"},8503:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enum-3fd2d13b9d24706b5658605c9cd2daf9.png"},3128:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new-class-2023d983c175f050ef695a123fd83a08.png"},3304:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/relationship-fc2604ef73cad823f12f9eaacafc6834.png"},8086:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/trade-acoount-diagram-f303790e856e7da35f07d19633cc7a5b.png"}}]);