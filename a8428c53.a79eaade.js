(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(9),c=(n(0),n(183)),o={id:"important-functions",title:"Important Functions in EOSIO",sidebar_label:"Important Functions"},r={id:"eos-learn/important-functions",isDocsHomePage:!1,title:"Important Functions in EOSIO",description:"This account has unlimited access to CPU, NET, and RAM resources  representing the highest authority of the network which can execute priviledged functions.",source:"@site/docs/eos-learn/important-functions.md",permalink:"/docs/eos-learn/important-functions",lastUpdatedBy:"AngeloCG97",lastUpdatedAt:1594748028,sidebar_label:"Important Functions",sidebar:"docs",previous:{title:"Accounts and Permissions",permalink:"/docs/eos-learn/accounts-and-permissions"},next:{title:"Private Keys",permalink:"/docs/eos-learn/private-keys"}},l=[{value:"EOSIO Privileged Features",id:"eosio-privileged-features",children:[{value:"<code>set_resource_limits</code>",id:"set_resource_limits",children:[]},{value:"<code>set_prods</code>",id:"set_prods",children:[]},{value:"<code>set_params</code>",id:"set_params",children:[]},{value:"<code>set_privileged</code>",id:"set_privileged",children:[]}]},{value:"System Actions",id:"system-actions",children:[{value:"<code>new_account</code>",id:"new_account",children:[]},{value:"<code>set code</code>",id:"set-code",children:[]},{value:"<code>set abi</code>",id:"set-abi",children:[]},{value:"<code>updateauth</code>",id:"updateauth",children:[]},{value:"<code>deleteauth</code>",id:"deleteauth",children:[]},{value:"<code>linkauth</code>",id:"linkauth",children:[]},{value:"<code>unlinkauth</code>",id:"unlinkauth",children:[]}]},{value:"Native Token Contract <code>eosio.token</code>",id:"native-token-contract-eosiotoken",children:[{value:"<code>create</code>",id:"create",children:[]},{value:"<code>issue</code>",id:"issue",children:[]},{value:"<code>retire</code>",id:"retire",children:[]},{value:"<code>transfer</code>",id:"transfer",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:""}),Object(c.b)("p",null,"This account has unlimited access to CPU, NET, and RAM resources  representing the highest authority of the network which can execute priviledged functions."),Object(c.b)("p",null,'Usually this authority is invoked by a  multi-signature (or "multisig") contract that will require the consent of a super-majorit of the block producers. This privileged account will be called the ',Object(c.b)("inlineCode",{parentName:"p"},"eosio")," account."),Object(c.b)("h2",{id:"eosio-privileged-features"},"EOSIO Privileged Features"),Object(c.b)("p",null,"EOSIO smart contracts are simple WebAssembly files. The WebAssembly format allows you to define imports, functions that are not declared in WASM itself but in the environment in which the WebAssembly code is run. EOSIO uses these built-in (intrinsic) functions to exchange data between the WebAssembly contract code and the EOSIO node ",Object(c.b)("inlineCode",{parentName:"p"},"nodeos"),". Every time the EOS virtual machine (EOSVM), which runs the WebAssembly code, reaches an intrinsic level, control of the program is transferred to the node controller code to resolve it. A complete list of intrinsic functions for EOSIO 2.0.X can be found ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/EOSIO/eosio.cdt/blob/a6b8d3fc289d46f4612588cdd7223a3d549238f6/libraries/native/native/eosio/intrinsics_def.hpp#L42-L160"}),"here"),"."),Object(c.b)("h3",{id:"set_resource_limits"},Object(c.b)("inlineCode",{parentName:"h3"},"set_resource_limits")),Object(c.b)("p",null,"Update the resource limits associated with an account"),Object(c.b)("p",null,"Parameters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"account:  The destination account\nram_bytes:  The RAM limit in bytes\nnet_weight:  Weight to determine your NET capacity\ncpu_weight:  Weight to determine your CPU capacity\n")),Object(c.b)("h3",{id:"set_prods"},Object(c.b)("inlineCode",{parentName:"h3"},"set_prods")),Object(c.b)("p",null,"Establish a new list of active producers (validators). Once the proposed block becomes irreversible, the new producers become active."),Object(c.b)("p",null,"Parameters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"schedule: JSON with list of producers and their signing keys\n")),Object(c.b)("h3",{id:"set_params"},Object(c.b)("inlineCode",{parentName:"h3"},"set_params")),Object(c.b)("p",null,"Modify one or more parameters of the blockchain."),Object(c.b)("p",null,"Parameters:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"max_block_net_usage")," The maximum amount of net usage in a block")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"target_block_net_usage_pct")," The maximum percentage of net use, after this limit the network enters congestion mode.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"max_transaction_net_usage")," The maximum use of net that the chain will allow, beyond the limits of the account.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"base_per_transaction_net_usage")," The base amount of net usage billed for a transaction to cover incidentals")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"net_usage_leeway"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"context_free_discount_net_usage_num")," The numerator for the discount on net usage of context-free data")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"context_free_discount_net_usage_den")," The denominator for the discount on net usage of context-free data")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"max_block_cpu_usage")," The maxiumum billable cpu usage (in microseconds) for a block")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"target_block_cpu_usage_pct")," The target percent (1% == 100, 100%= 10,000) of maximum cpu usage; exceeding this triggers congestion handling")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"max_transaction_cpu_usage")," The maximum billable cpu usage (in microseconds) that the chain will allow regardless of account limits")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"min_transaction_cpu_usage")," The minimum billable cpu usage (in microseconds) that the chain requires")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"max_transaction_lifetime")," The maximum number of seconds that an input transaction's expiration can be ahead of the time of the block in which it is first included")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"deferred_trx_expiration_window")," The number of seconds after the time a deferred transaction can first execute until it expires")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"max_transaction_delay")," The maximum number of seconds that can be imposed as a delay requirement by authorization checks")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"max_inline_action_size")," Maximum allowed size (in bytes) of an inline action")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"max_inline_action_depth")," Recursion depth limit on sending inline actions")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"max_authority_depth")," Recursion depth limit for checking if an authority is satisfied"))),Object(c.b)("h3",{id:"set_privileged"},Object(c.b)("inlineCode",{parentName:"h3"},"set_privileged")),Object(c.b)("p",null,"Allows you to establish an account as privileged."),Object(c.b)("p",null,"Par\xe1metros:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"account: La cuenta que se quiere setear como privilegiada\nis_priv:  0 para falso, mayor a 0 para verdadero\n")),Object(c.b)("h2",{id:"system-actions"},"System Actions"),Object(c.b)("p",null,"These actions do not need to be executed by a privileged account."),Object(c.b)("h3",{id:"new_account"},Object(c.b)("inlineCode",{parentName:"h3"},"new_account")),Object(c.b)("p",null,"Create a new account."),Object(c.b)("p",null,"Parameters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"creator: Name of the account that creates the new account\nname: New account name\nowner: Owner public key\nactive: Active public key\n")),Object(c.b)("h3",{id:"set-code"},Object(c.b)("inlineCode",{parentName:"h3"},"set code")),Object(c.b)("p",null,"Set code publish or update a smart contract in an account."),Object(c.b)("p",null,"Parameters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"account: The account to which you want to post a contract\ncode: The code in the form of a binary BLOB\n")),Object(c.b)("h3",{id:"set-abi"},Object(c.b)("inlineCode",{parentName:"h3"},"set abi")),Object(c.b)("p",null,"It allows to establish or update the abi for the smart contract, it is identified by account_name."),Object(c.b)("p",null,"Parameters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"account: The name of the destination account\nabi:  The ABI\n")),Object(c.b)("h3",{id:"updateauth"},Object(c.b)("inlineCode",{parentName:"h3"},"updateauth")),Object(c.b)("p",null,"Update an account's permissions."),Object(c.b)("p",null,"Parameters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"account:  The account to be modified.\npemission:  The name of the new permission\nparent: The parent permission of the new permission\nauth: The JSON defining permission authorization\n")),Object(c.b)("h3",{id:"deleteauth"},Object(c.b)("inlineCode",{parentName:"h3"},"deleteauth")),Object(c.b)("p",null,"Removes permission authorization from an account."),Object(c.b)("p",null,"Parameters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"account: The destination account\npermission: The name of the permission to be removed\n")),Object(c.b)("h3",{id:"linkauth"},Object(c.b)("inlineCode",{parentName:"h3"},"linkauth")),Object(c.b)("p",null,"Assign a specific action of a contract to a specific permission, five actions cannot be linked updateauth,deleteauth,linkauth,unlikauth,canceldelay."),Object(c.b)("p",null,"Parameters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"account: The destination account\ncode: Account owner of the action to link\ntype: The action to be linked\nrequirement: Permission to link.\n")),Object(c.b)("h3",{id:"unlinkauth"},Object(c.b)("inlineCode",{parentName:"h3"},"unlinkauth")),Object(c.b)("p",null,"It is the reverse of linkauth."),Object(c.b)("p",null,"Parameters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"account: The destination account\ncode: Account owner of the action to be unlinked\ntype: The action to be unlinked\n")),Object(c.b)("h2",{id:"native-token-contract-eosiotoken"},"Native Token Contract ",Object(c.b)("inlineCode",{parentName:"h2"},"eosio.token")),Object(c.b)("p",null,"These actions can be executed by any account in order to issue their own token."),Object(c.b)("h3",{id:"create"},Object(c.b)("inlineCode",{parentName:"h3"},"create")),Object(c.b)("p",null,"Allows an issuer account to create a token."),Object(c.b)("p",null,"Parameters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"issuer: The account that creates the token\nmaximum_supply: The maximum amount next to the token symbol.\n")),Object(c.b)("h3",{id:"issue"},Object(c.b)("inlineCode",{parentName:"h3"},"issue")),Object(c.b)("p",null,"This action distributes a certain number of tokens to an account."),Object(c.b)("p",null,"Parameters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"to: Account to which the tokens are distributed\nquantity: The amount of tokens to distribute\nmemo: Memo accompanying the transaction\n")),Object(c.b)("h3",{id:"retire"},Object(c.b)("inlineCode",{parentName:"h3"},"retire")),Object(c.b)("p",null,"The opposite of creating a token."),Object(c.b)("p",null,"Parameters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"quantity: The amount of tokens to withdraw\nmemo: Memo accompanying the transaction\n")),Object(c.b)("h3",{id:"transfer"},Object(c.b)("inlineCode",{parentName:"h3"},"transfer")),Object(c.b)("p",null,'Transfer an "n" amount of tokens from a source account to a destination account.'),Object(c.b)("p",null,"Parameters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"from: Source account from where tokens are debited\nto: Target account to which to credit the tokens\nquantity: The amount of tokens\nmemo: Memo accompanying the transaction\n")))}b.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||c;return n?i.a.createElement(m,r(r({ref:t},s),{},{components:n})):i.a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var s=2;s<c;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);