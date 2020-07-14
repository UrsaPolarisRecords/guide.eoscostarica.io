(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(0),n(183)),c={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},i={id:"tutorials/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Before you begin",source:"@site/docs/tutorials/getting-started.md",permalink:"/docs/tutorials/getting-started",lastUpdatedBy:"AngeloCG97",lastUpdatedAt:1594748028,sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"Smart Contracts",permalink:"/docs/eos-learn/smart-contract"},next:{title:"EOSIO Node Installation",permalink:"/docs/tutorials/node-installation"}},l=[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Get your private keys",id:"get-your-private-keys",children:[]},{value:"Agile accounts creator",id:"agile-accounts-creator",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"before-you-begin"},"Before you begin"),Object(a.b)("p",null,"At first, is recommendable have installed the software EOSIO developed by Block.one to create actions with the EOS protocol following the command brew tap eosio/eosio y brew install eosio. This software it's made up of:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"cleos"),": is the command line tool that connects with the API exposed by nodeos and functions to manage the wallet, account, keys, transactions and Smart Contracts."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"nodeos"),": functions as the central daemon that manages EOSIO's net and could be configured as node to produce blocks."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"eosd"),": functions as wallet to manage the keys for EOSIO.")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/img/diagrams/cleos.png",alt:"Diagrama"}))),Object(a.b)("p",null,"Additionally, we recommend install Contract Development Toolkit (CDT) beforehand, that can be installed using ",Object(a.b)("inlineCode",{parentName:"p"},"brew tap eosio.cdt")," command and followed by ",Object(a.b)("inlineCode",{parentName:"p"},"brew install eosio.cdt")," to access to the resources created by the contracts."),Object(a.b)("h2",{id:"get-your-private-keys"},"Get your private keys"),Object(a.b)("p",null,"More information ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://guide.eoscostarica.io/docs/eos-learn/private-keys"}),"about private keys")),Object(a.b)("h2",{id:"agile-accounts-creator"},"Agile accounts creator"),Object(a.b)("p",null,"Portal to create accounts and public keys with just one click."))}u.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,i(i({ref:t},s),{},{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);