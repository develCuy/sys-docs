(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[7283],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,y=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(y,r(r({ref:t},h),{},{components:n})):a.createElement(y,r({ref:t},h))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},31072:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),r={sidebar_position:1},s={unversionedId:"intro/syscoin-what",id:"intro/syscoin-what",isDocsHomePage:!1,title:"About Syscoin",description:"What is Syscoin?",source:"@site/docs/intro/syscoin-what.mdx",sourceDirName:"intro",slug:"/intro/syscoin-what",permalink:"/docs/intro/syscoin-what",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Roadmap",permalink:"/docs/intro/syscoin-roadmap"}},l=[{value:"What is Syscoin?",id:"what-is-syscoin",children:[]},{value:"Why use Syscoin?",id:"why-use-syscoin",children:[]}],c={toc:l};function h(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-syscoin"},"What is Syscoin?"),(0,o.kt)("p",null,"Syscoin is a Proof-of-Work blockchain, ",(0,o.kt)("a",{parentName:"p",href:"/docs/tech/merged-mining"},"merged-mined")," with Bitcoin. At its base it is a dual-layered blockchain: the core is the Syscoin blockchain itself, and running in tandem with it is an Ethereum Virtual Machine (EVM) layer called ",(0,o.kt)("a",{parentName:"p",href:"/docs/tech/nevm"},(0,o.kt)("em",{parentName:"a"},"NEVM"))," (Network-Enhanced Virtual Machine), which provides smart contract functionality."),(0,o.kt)("p",null,"Notable features of Syscoin include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/tech/nevm"},(0,o.kt)("em",{parentName:"a"},"NEVM"))," - the Network-Enhanced Virtual Machine that powers Syscoin's smart contract layer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/tech/z-dag"},(0,o.kt)("em",{parentName:"a"},"Z-DAG"))," - an instant settlement protocol used to enable blisteringly fast Syscoin Platform Token (SPT) transfers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/tech/masternodes"},(0,o.kt)("em",{parentName:"a"},"Masternodes"))," - incentivized full nodes which utilize ",(0,o.kt)("a",{parentName:"p",href:"/docs/tech/chainlocks"},(0,o.kt)("em",{parentName:"a"},"ChainLock"))," technology to come to a consensus on the next block mined in the blockchain and are paid to provide services to the network such as facilitating Z-DAG transactions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/tech/notary"},(0,o.kt)("em",{parentName:"a"},"Notary rulesets"))," - in a nutshell these allow ",(0,o.kt)("a",{parentName:"p",href:"/docs/tech/tokens"},(0,o.kt)("em",{parentName:"a"},"Syscoin Platform Token (SPT)"))," creators to apply their own rulesets on transfers of their SPT and then accept or deny the transfers by signing or not signing the transactions. These off-chain rulesets enable SPT creators to maintain regulatory compliance even when regulations change."))),(0,o.kt)("h2",{id:"why-use-syscoin"},"Why use Syscoin?"),(0,o.kt)("p",null,"To understand why Syscoin is the perfect choice for developing on it must first be understood the direction that the EVM-based blockchain ecosystem is heading in. The new paradigm is focused on modular blockchains, rather than blockchains that try to do everything (scaling, being decentralized and being secure) on one base layer there should be multiple layers. There are three terms to keep in mind for the coming blockchain future, these are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Execution layer"),(0,o.kt)("li",{parentName:"ul"},"Settlement layer"),(0,o.kt)("li",{parentName:"ul"},"Data availability layer")),(0,o.kt)("p",null,"These will be expanded on below."),(0,o.kt)("h4",{id:"execution-layer"},"Execution Layer"),(0,o.kt)("p",null,"The execution layer in the new blockchain paradigm will essentially be the layer that all the day-to-day transactions take place on. Using a DEX to swap tokens? Buying NFTs on a marketplace? Whatever you can think of, these smart contracts will be operating on the execution layer. This will, for example, be ZK-Rollups, Optimistic Rollups, Arbitrum or other scaling solutions not yet thought up. The idea is that the base blockchain, i.e. Syscoin or Ethereum, isn't scalable without compromising on one, or both of, security or decentralization. This is why the execution should take place on a separate layer."),(0,o.kt)("h4",{id:"settlement-layer"},"Settlement Layer"),(0,o.kt)("p",null,"The settlement layer is the layer that secures the ecosystem, as such it should be highly secure such as through being ",(0,o.kt)("a",{parentName:"p",href:"/docs/tech/merged-mining"},"merged-mined")," with Bitcoin. Highly scalable ZK-Rollups operating as the execution layer for Syscoin will, at regular intervals, post proofs of the transactions that took place on them to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tech/nevm"},"NEVM")," blockchain in order to securely and immutably store what has taken place within the ZK-Rollup."),(0,o.kt)("h4",{id:"data-availability-layer"},"Data Availability Layer"),(0,o.kt)("p",null,"The data availability layer is where the data involved in smart contract executions is stored. With ZK-Rollups on Syscoin (coming Q1 2022) this data will be stored on-chain, as such Syscoin will be the data availability layer for regular ZK-Rollups, this will allow scaling up to 210,000 transactions per second. When Validium arrives to Syscoin Q3 2022, however, this will provide scaling up to 4,000,000 transactions per second. Validium is essentially a ZK-Rollup that stores its data off-chain, this could either be using decentralized storage or nominated entities that would be trusted to store the data that will be used by the ZK-Rollups."),(0,o.kt)("h4",{id:"so-why-use-syscoin"},"So why use Syscoin?"),(0,o.kt)("p",null,"As detailed above, with ZK-Rollups operating on-chain Syscoin will be highly scalable, with Validium it will be even more so. As such the scalability aspect is very much covered. Scalability doesn't just mean high transaction per second volume though, it also takes into consideration the cost of transactions. Transactions on Syscoin will be cheap even at high throughput, as such if a project was considering which chain to operate their ZK-Rollups on top of and wanted to have low gas fees for regularly posting proofs to the blockchain, Syscoin will be cheaper than other EVM-based chains."),(0,o.kt)("p",null,"Next is decentralization, Syscoin has around 2500 active masternodes operating on its network, with its popularity increasing as it becomes a more well-known smart chain it's likely that this number will increase for the rewards hosting a masternode provides. This means that Syscoin is not just scalable but also decentralized."),(0,o.kt)("p",null,"Lastly is security. Due to being merged-mined with Bitcoin Syscoin currently has around 20% of the hashpower that goes into mining Bitcoin. This is a large amount of security already and the Syscoin team is now looking to onboard more Bitcoin miners as it aims to become one of the most secure settlement layers."),(0,o.kt)("p",null,"To conclude, Syscoin will not only be scalable and decentralized it will also be highly secure and cost-effective to build on top of."),(0,o.kt)("p",null,"Are you a project interested in building on Syscoin?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contact us here: ",(0,o.kt)("a",{parentName:"li",href:"https://syscoin.org/contact"},"https://syscoin.org/contact")),(0,o.kt)("li",{parentName:"ul"},"Or you can connect with us on the Syscoin Discord server: ",(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/syscoin"},"https://discord.gg/syscoin"))))}h.isMDXComponent=!0}}]);