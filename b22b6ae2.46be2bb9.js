(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(133)),i={id:"node-installation",title:"EOSIO Node Installation",sidebar_label:"Node Installation"},l={unversionedId:"tutorials/node-installation",id:"tutorials/node-installation",isDocsHomePage:!1,title:"EOSIO Node Installation",description:"EOSIO version tag: v2.0.6",source:"@site/docs/tutorials/node-installation.md",slug:"/tutorials/node-installation",permalink:"/docs/tutorials/node-installation",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/node-installation.md",version:"current",lastUpdatedBy:"JustinCast",lastUpdatedAt:1614210683,sidebar_label:"Node Installation",sidebar:"docs",previous:{title:"Kubernetes",permalink:"/docs/tutorials/kubernetes"},next:{title:"EOSIO Private Network Installation",permalink:"/docs/tutorials/private-network-installation"}},s=[{value:"Install EOSIO from Precompiled Binaries",id:"install-eosio-from-precompiled-binaries",children:[{value:"Uninstall Script",id:"uninstall-script",children:[]}]},{value:"Configure Jungle Testnet Node",id:"configure-jungle-testnet-node",children:[{value:"Starting and Stopping Nodeos",id:"starting-and-stopping-nodeos",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"EOSIO version tag: ",Object(a.b)("inlineCode",{parentName:"p"},"v2.0.6")),Object(a.b)("p",null,"Chain ID: ",Object(a.b)("inlineCode",{parentName:"p"},"2c1f36d2e3774cba3e47804b6463c207544ac24183194e0b96ffad31e8f4acd5")),Object(a.b)("p",null,"Genesis File: ",Object(a.b)("inlineCode",{parentName:"p"},"genesis.json")),Object(a.b)("h2",{id:"install-eosio-from-precompiled-binaries"},"Install EOSIO from Precompiled Binaries"),Object(a.b)("p",null,"Download the latest version of EOSIO for your OS from: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/EOSIO/eos/releases/tag/v2.0.6"},"Github"),"."),Object(a.b)("p",null,"For example, for ubuntu 18.04 you need to download ",Object(a.b)("inlineCode",{parentName:"p"},"eosio_2.0.5-1-ubuntu-18.04_amd64.deb"),"."),Object(a.b)("p",null,"You can use apt to install it:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"wget https://github.com/eosio/eos/releases/download/v2.0.5/eosio_2.0.5-1-ubuntu-18.04_amd64.deb\nsudo apt install ./eosio_2.0.6-1-ubuntu-18.04_amd64.deb\n")),Object(a.b)("p",null,"It will download all dependencies and install EOSIO to ",Object(a.b)("inlineCode",{parentName:"p"},"/usr/opt/eosio/v2.0.6"),"."),Object(a.b)("h3",{id:"uninstall-script"},"Uninstall Script"),Object(a.b)("p",null,"To uninstall the EOSIO built/installed binaries and dependencies, run:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"./scripts/eosio_uninstall.sh\n")),Object(a.b)("h2",{id:"configure-jungle-testnet-node"},"Configure Jungle Testnet Node"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"mkdir ~/Jungle-testnet\ncd ~/Jungle-testnet\ngit clone https://github.com/Jungle/testnet.git ./\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Edit config.ini"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Enter your server's external address: ",Object(a.b)("inlineCode",{parentName:"li"},"p2p-server-address = YOUR_DOMAIN_OR_IP:9876")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Open TCP Ports (8888, 9876) on your firewall / router"))),Object(a.b)("p",null,"Specify a genesis.json file the first time you run nodeos."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"./start.sh --delete-all-blocks --genesis-json genesis.json\n")),Object(a.b)("p",null,"Follow logs to check your node is running OK."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"tail -f stderr.txt\n")),Object(a.b)("p",null,"Check if you can access your node using link ",Object(a.b)("inlineCode",{parentName:"p"},"http://**YOUR_SERVER**/v1/chain/get_info"),"."),Object(a.b)("p",null,"Here is an API ",Object(a.b)("a",{parentName:"p",href:"https://lacchain.eosio.cr/v1/chain/get_info"},"Example"),"."),Object(a.b)("h3",{id:"starting-and-stopping-nodeos"},"Starting and Stopping Nodeos"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"./start.sh"),": Starts and restarts Nodeos service.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"./stop.sh"),": Performs graceful shutdown of Nodeos service."))))}p.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,O=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(O,l(l({ref:t},c),{},{components:n})):o.a.createElement(O,l({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);