"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2837:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],s={},l="ShowCase Project : Logical Modelling Basic",c={unversionedId:"showcases/LogicalModellingBasic",id:"showcases/LogicalModellingBasic",title:"ShowCase Project : Logical Modelling Basic",description:"This showcase project shows a basic Product-Account-Trade model.",source:"@site/../docs/showcases/LogicalModellingBasic.md",sourceDirName:"showcases",slug:"/showcases/LogicalModellingBasic",permalink:"/docs/showcases/LogicalModellingBasic",draft:!1,tags:[],version:"current",frontMatter:{}},d={},u=[{value:"Join us",id:"join-us",level:3}],p={toc:u};function m(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"showcase-project--logical-modelling-basic"},"ShowCase Project : Logical Modelling Basic"),(0,o.kt)("p",null,"This showcase project shows a basic Product-Account-Trade model.\nhttps:"),(0,o.kt)("p",null,"In this showcase, we will show the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-new-doc"},"Create a new Doc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-new-diagram"},"Create a new Diagram")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-new-class"},"Create a new Class, define properties and multiplicity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-new-enumeration"},"Create a new Enumeration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#define-an-association"},"Define an association")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#define-relationship-in-diagram"},"Defining relationships in diagram"))),(0,o.kt)("h1",{id:"create-a-new-doc"},"Create a new Doc"),(0,o.kt)("p",null,"A doc is creating by adding a new Text element.\nTo add a new Text element, Click on + and then select New Text.\nProvide a meaningful name to your text and then choose it to be either PlainText or a Markdown.  "),(0,o.kt)("p",null,"In our Showcase, README is a text element."),(0,o.kt)("h1",{id:"create-a-new-diagram"},"Create a new Diagram"),(0,o.kt)("p",null,"A diagram is like a canvas where we can add other elements. A Diagram helps you to define your classes and relationship between them.\nIt is a very convenient way to pictorially display your model.  "),(0,o.kt)("p",null,"To add a new Diagram, Click on + and then select New Diagram.\nProvide a meaningful name to your diagram and start adding new elements to the diagram.   "),(0,o.kt)("p",null,"In our showcase, TradeAccountDiagram is the diagram which shows the model."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Product Account Trade Model Diagram",src:a(5777).Z,width:"1906",height:"774"}),"."),(0,o.kt)("h1",{id:"create-a-new-class"},"Create a new Class"),(0,o.kt)("p",null,"There are two ways to create a class.",(0,o.kt)("br",{parentName:"p"}),"\n","1) Click on + and then select new Class, Provide a meaningful name\n2) Open your diagram and double click in any free area in the diagram. Provide a meaningful name to your class"),(0,o.kt)("p",null,"Class properties define attributes of a business concept.\nTo add class properties, open the class and click on + button as shown in the image below.\nDefine the property Name, it's type and Multiplicity."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The data type can be both primitives (like String or integers) or other Classes. "),(0,o.kt)("li",{parentName:"ul"},"Multiplicity defines the number of instances that property can have within the class."),(0,o.kt)("li",{parentName:"ul"},"There are other concepts like derived Properties, Constraints which will be covered in the next Showcase for advanced modelling.  ")),(0,o.kt)("p",null,"In our showcase, Account, Product, Trade etc all these are classes. Take some time to look at their properties, multiplicity etc."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create a new Class",src:a(2442).Z,width:"1088",height:"510"}),"."),(0,o.kt)("h1",{id:"create-a-new-enumeration"},"Create a new Enumeration"),(0,o.kt)("p",null,"A Enumeration is a set of pre-defined values. It has a concept similar to enums in programming languages.  "),(0,o.kt)("p",null,"To add a new Enumeration, Click on + and then select New Enumeration. Provide a meaningful name to your Enumeration.\nTo add values in your enumeration, open the enumeration and click on + as shown in the image below.\nDefine the values you need, and then you should be able to use these values as predefined values in your model.  "),(0,o.kt)("p",null,"In our showcase, ProductSynonymType is an enumeration. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create a new Enumeration",src:a(22).Z,width:"1089",height:"277"}),"."),(0,o.kt)("h1",{id:"define-an-association"},"Define an Association"),(0,o.kt)("p",null,"Associations are used to define a single linking relationship between two classes.\nWe can define one to one, one to many, many to many kind of relationships using association.  "),(0,o.kt)("p",null,"To define an association, Click on + and select new Association. Provide a meaningful name to your Association.\nDefine the property name, select the class and multiplicy as shown below."),(0,o.kt)("p",null,"In our showcase ProdSynonym is an Association. Note that it shows that 1 product can have many synonyms. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Define an Association",src:a(3558).Z,width:"1089",height:"245"}),"."),(0,o.kt)("h1",{id:"define-relationship-in-diagram"},"Define relationship in diagram"),(0,o.kt)("p",null,"Relationships between classes can also be defined in the diagram.\nThis is done by selection the Property tool in the diagram.\nSelect the property tool and drag a line between the classes you want to define a relationship.\nProvide a name for the property and multiplicity for that relationship.  "),(0,o.kt)("p",null,"In the image below it shows one account can have many trades attached to it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Define relationship in diagram",src:a(9873).Z,width:"729",height:"456"}),"."),(0,o.kt)("h3",{id:"join-us"},"Join us"),(0,o.kt)("p",null,"Join us at"))}m.isMDXComponent=!0},3558:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/association-29b452d2b476209dfe298a5c134b03f2.png"},22:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/enum-3fd2d13b9d24706b5658605c9cd2daf9.png"},2442:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-class-2023d983c175f050ef695a123fd83a08.png"},9873:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/relationship-fc2604ef73cad823f12f9eaacafc6834.png"},5777:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trade-acoount-diagram-f303790e856e7da35f07d19633cc7a5b.png"}}]);