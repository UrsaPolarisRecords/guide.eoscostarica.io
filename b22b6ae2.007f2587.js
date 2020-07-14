(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(183)),i={id:"node-installation",title:"EOSIO Node Installation",sidebar_label:"Node Installation"},l={id:"tutorials/node-installation",isDocsHomePage:!1,title:"EOSIO Node Installation",description:"EOSIO version tag: v2.0.6",source:"@site/docs/tutorials/node-installation.md",permalink:"/docs/tutorials/node-installation",lastUpdatedBy:"AngeloCG97",lastUpdatedAt:1594748028,sidebar_label:"Node Installation",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/tutorials/getting-started"},next:{title:"Hello World Contract",permalink:"/docs/tutorials/hello-world-contract"}},c=[{value:"1. Install EOSIO from precompiled binaries",id:"1-install-eosio-from-precompiled-binaries",children:[{value:"Uninstall Script",id:"uninstall-script",children:[]}]},{value:"2. Configure Jungle Testnet Node",id:"2-configure-jungle-testnet-node",children:[{value:"Starting and Stopping Nodeos",id:"starting-and-stopping-nodeos",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"EOSIO version tag: ",Object(o.b)("inlineCode",{parentName:"p"},"v2.0.6")),Object(o.b)("p",null,"Chain ID: ",Object(o.b)("inlineCode",{parentName:"p"},"2c1f36d2e3774cba3e47804b6463c207544ac24183194e0b96ffad31e8f4acd5")),Object(o.b)("p",null,"Genesis File: ",Object(o.b)("inlineCode",{parentName:"p"},"genesis.json")),Object(o.b)("h2",{id:"1-install-eosio-from-precompiled-binaries"},"1. Install EOSIO from precompiled binaries"),Object(o.b)("p",null,"Download the latest version of EOSIO for your OS from: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/releases/tag/v2.0.5"}),"https://github.com/EOSIO/eos/releases/tag/v2.0.5")),Object(o.b)("p",null,"For example, for ubuntu 18.04 you need to download ",Object(o.b)("inlineCode",{parentName:"p"},"eosio_2.0.5-1-ubuntu-18.04_amd64.deb")),Object(o.b)("p",null,"You can use apt to install it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"wget https://github.com/eosio/eos/releases/download/v2.0.5/eosio_2.0.5-1-ubuntu-18.04_amd64.deb\nsudo apt install ./eosio_2.0.5-1-ubuntu-18.04_amd64.deb\n")),Object(o.b)("p",null,"It will download all dependencies and install EOSIO to ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/opt/eosio/v2.0.5")),Object(o.b)("h3",{id:"uninstall-script"},"Uninstall Script"),Object(o.b)("p",null,"To uninstall the EOSIO built/installed binaries and dependencies, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"./scripts/eosio_uninstall.sh\n")),Object(o.b)("h2",{id:"2-configure-jungle-testnet-node"},"2. Configure Jungle Testnet Node"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"mkdir ~/Jungle-testnet\ncd ~/Jungle-testnet\ngit clone https://github.com/Jungle/testnet.git ./\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Edit config.ini"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Enter your server's external address: ",Object(o.b)("inlineCode",{parentName:"li"},"p2p-server-address = YOUR_DOMAIN_OR_IP:9876")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Open TCP Ports (8888, 9876) on your firewall/router"))),Object(o.b)("p",null,"Specify a genesis.json file the first time you run nodeos"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"./start.sh --delete-all-blocks --genesis-json genesis.json\n")),Object(o.b)("p",null,"Follow logs to check your node is running OK."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"tail -f stderr.txt\n")),Object(o.b)("p",null,"Check if you can access your node using link ",Object(o.b)("inlineCode",{parentName:"p"},"http://**YOUR_SERVER**/v1/chain/get_info")),Object(o.b)("p",null,"Here is an API ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://latamlink.eosio.cr/v1/chain/get_info"}),"Example")),Object(o.b)("h3",{id:"starting-and-stopping-nodeos"},"Starting and Stopping Nodeos"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"./start.sh")," Starts and restarts Nodeos service.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"./stop.sh")," Performs graceful shutdown of Nodeos service."))))}p.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,O=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(O,l(l({ref:t},s),{},{components:n})):a.a.createElement(O,l({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);