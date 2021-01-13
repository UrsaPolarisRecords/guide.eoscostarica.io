(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),O=p(n),m=a,b=O["".concat(c,".").concat(m)]||O[m]||u[m]||o;return n?r.a.createElement(b,i(i({ref:t},s),{},{components:n})):r.a.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(121)),c={id:"eosio-protocol",title:"EOSIO Protocol",sidebar_label:"EOSIO Protocol"},i={unversionedId:"eos-learn/eosio-protocol",id:"eos-learn/eosio-protocol",isDocsHomePage:!1,title:"EOSIO Protocol",description:'EOSIO is open-source software that enables launching highly configurable blockchain networks on which developers and entrepreneurs can run highly performant blockchain applications. EOSIO was created in 2018 and is maintained by Block One. The first public network launched on EOSIO is called EOS, also referred as "mainnet". EOS is however just one of multiple public blockchain networks currently using EOSIO. Take a look at the following EOSIO network list. There are also multiple private networks currently using EOSIO.',source:"@site/docs/eos-learn/eosio-protocol.md",slug:"/eos-learn/eosio-protocol",permalink:"/docs/eos-learn/eosio-protocol",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/eosio-protocol.md",version:"current",lastUpdatedBy:"Steph",lastUpdatedAt:1610576703,sidebar_label:"EOSIO Protocol",sidebar:"docs",previous:{title:"Readme file template",permalink:"/docs/readme-file-template"},next:{title:"Consensus Mechanism",permalink:"/docs/eos-learn/consensus-mechanism"}},l=[{value:"System contracts",id:"system-contracts",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"EOSIO is open-source software that enables launching highly configurable blockchain networks on which developers and entrepreneurs can run highly performant blockchain applications. EOSIO was created in 2018 and is maintained by ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://block.one/"}),"Block One"),'. The first public network launched on EOSIO is called EOS, also referred as "mainnet". EOS is however just one of multiple public blockchain networks currently using EOSIO. Take a look at the following ',Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://guide.eoscostarica.io/docs/community-resources/eosio-networks"}),"EOSIO network list"),". There are also multiple private networks currently using EOSIO."),Object(o.a)("p",null,"Some innovative features of EOSIO include:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Free transactions")," with consumption limits."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"Low latency")," confirming new blocks (0.5 seconds)"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"*Byzantine Fault Tolerance")),Object(o.a)("li",{parentName:"ul"},"Human Readable Account Names (",Object(o.a)("strong",{parentName:"li"},Object(o.a)("em",{parentName:"strong"},"e.g. :"))," ",Object(o.a)("inlineCode",{parentName:"li"},"eosioaccount")," )"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("strong",{parentName:"li"},"ACL Permissions")," based on hierarchical roles"),Object(o.a)("li",{parentName:"ul"},"Updatable contracts ",Object(o.a)("strong",{parentName:"li"},"written in C++"),"."),Object(o.a)("li",{parentName:"ul"},"Support for keys protected by ",Object(o.a)("strong",{parentName:"li"},"biometric hardware")," (e.g. : Apple Secure Enclave)"),Object(o.a)("li",{parentName:"ul"},"Designed for ",Object(o.a)("strong",{parentName:"li"},"Inter-Blockchain communication")),Object(o.a)("li",{parentName:"ul"},"Designed for Sparse Header Light Client Validation."),Object(o.a)("li",{parentName:"ul"},"Scheduled Recurring Transactions."),Object(o.a)("li",{parentName:"ul"},"Time Delay Security."),Object(o.a)("li",{parentName:"ul"},"Designed for Parallel Execution of Context Free Validation Logic.")),Object(o.a)("p",null,"Another important feature of EOSIO based blockchain networks is it's flexible architecture, because many of the network's \"rules of engagement\" are defined through system contracts."),Object(o.a)("p",null,"This flexibility is achieved thanks to a set of smart contracts separated from the EOSIO core protocol. Because of this, the core functionality that validates blocks and transactions is separated from the ",Object(o.a)("strong",{parentName:"p"},"system contracts"),"."),Object(o.a)("h2",{id:"system-contracts"},"System contracts"),Object(o.a)("p",null,"System contracts allow EOSIO networks to :"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Easily configure the network governance through smart contracts."),Object(o.a)("li",{parentName:"ul"},"To have transparent rules for the operation of the system."),Object(o.a)("li",{parentName:"ul"},"Synchronize the changes in system contracts in a instantaneous way with the whole network, which reduces the administration costs and delays of any governance updates."),Object(o.a)("li",{parentName:"ul"},"Maintain total compatibility with other EOSIO blockchains.")))}p.isMDXComponent=!0}}]);