"use strict";(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[7283],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=i,y=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return a?n.createElement(y,r(r({ref:t},h),{},{components:a})):n.createElement(y,r({ref:t},h))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31072:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const o={sidebar_position:1},r={unversionedId:"intro/syscoin-what",id:"intro/syscoin-what",isDocsHomePage:!1,title:"About Syscoin",description:"What is Syscoin?",source:"@site/docs/intro/syscoin-what.mdx",sourceDirName:"intro",slug:"/intro/syscoin-what",permalink:"/docs/intro/syscoin-what",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Roadmap",permalink:"/docs/intro/syscoin-roadmap"}},s=[{value:"What is Syscoin?",id:"what-is-syscoin",children:[]},{value:"Why use Syscoin?",id:"why-use-syscoin",children:[]}],l={toc:s};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-syscoin"},"What is Syscoin?"),(0,i.kt)("p",null,"Syscoin is a Proof-of-Work blockchain solution ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/merged-mining"},"merge-mined")," with Bitcoin. At its base is a dual-chain Layer 1: the core is the Syscoin native blockchain, and running in tandem with it is an Ethereum Virtual Machine (EVM) chain called ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/nevm"},(0,i.kt)("em",{parentName:"a"},"NEVM"))," (Network-Enhanced Virtual Machine), which provides modularity, enhanced security, and full byte-for-byte Ethereum compatibility."),(0,i.kt)("p",null,"Notable features of Syscoin include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tech/nevm"},(0,i.kt)("em",{parentName:"a"},"NEVM"))," - the Network-Enhanced Virtual Machine that powers smart contracts on Syscoin."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tech/rollux"},(0,i.kt)("em",{parentName:"a"},"Rollux"))," - a Layer 2 suite of Optimistic and ZK-based rollups to scale NEVM smart contracts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tech/z-dag"},(0,i.kt)("em",{parentName:"a"},"Z-DAG"))," - an instant settlement protocol with probabilistic security used to enable blisteringly fast UTXO transfers of stablecoins or other SPT assets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tech/masternodes"},(0,i.kt)("em",{parentName:"a"},"Masternodes"))," - incentivized full nodes which collectively provide ",(0,i.kt)("a",{parentName:"li",href:"/docs/tech/chainlocks"},(0,i.kt)("em",{parentName:"a"},"Multi-quorum Chainlocks"))," as additive security and finality on top of Nakamoto consensus. Owners of these collateralized nodes receive rewards for the services they provide to the network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tech/notary"},(0,i.kt)("em",{parentName:"a"},"Notary rulesets"))," - in a nutshell these allow ",(0,i.kt)("a",{parentName:"li",href:"/docs/tech/tokens"},(0,i.kt)("em",{parentName:"a"},"Syscoin Platform Token (SPT)"))," creators to apply their own rulesets on transfers of their SPT and then accept or deny the transfers by signing or not signing the transactions. These off-chain rulesets enable SPT asset managers to maintain compliance even when regulations or business rules change.")),(0,i.kt)("h2",{id:"why-use-syscoin"},"Why use Syscoin?"),(0,i.kt)("p",null,"To understand why Syscoin is the perfect choice for developers, one must first understand the new direction in which the EVM-based blockchain ecosystem is evolving. The new paradigm is focused on modular blockchains. Rather than trying to achieve everything (scalability, decentralization, security) on a single blockchain layer, modularity involves multiple layers. There are three terms to keep in mind for the coming blockchain future, these are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Execution layer"),(0,i.kt)("li",{parentName:"ul"},"Settlement layer"),(0,i.kt)("li",{parentName:"ul"},"Data availability")),(0,i.kt)("p",null,"These will be expanded on below."),(0,i.kt)("h4",{id:"execution-layer"},"Execution Layer"),(0,i.kt)("p",null,"The execution layer in the new blockchain paradigm is where all the day-to-day transactions take place. Using a DEX to swap tokens? Buying NFTs on a marketplace? Whatever you can think of, most of these smart contracts will be operating on the execution layer. These Layer 2 scaling solutions can be optimistic or ZK-based rollups, or perhaps hybridized rollups in the future. Layer 1 blockchains, i.e. Syscoin NEVM or Ethereum, cannot scale on their own without trading-off some security and/or decentralization. This is why execution belongs a separate Layer 2 focused on scalability, enabling the Layer 1 to serve its best purposes - secure decentralized settlement and data availability."),(0,i.kt)("h4",{id:"settlement-layer"},"Settlement Layer"),(0,i.kt)("p",null,"The settlement layer is the layer that secures the ecosystem, as such it should be highly secure such as through being ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/merged-mining"},"merge-mined")," with Bitcoin. Highly scalable rollups operating as the execution layer for Syscoin will, at regular intervals, post proofs of the transactions that took place on them to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/nevm"},"NEVM")," blockchain in order to securely and immutably store what has taken place within the rollup."),(0,i.kt)("h4",{id:"data-availability"},"Data Availability"),(0,i.kt)("p",null,"Data availability is required to exist within the security domain of Layer 1 in order for rollups to properly serve critical financial applications, and secure users\u2019 ability to exit to L1. Syscoin\u2019s L1 DA solution is called PoDA (Proof of Data Availability). Syscoin\u2019s PoDA differs from Ethereum\u2019s danksharding in how data is stored, presented, pruned, and how fees are calculated. PoDA is able to utilize an existing fee market while Ethereum requires the addition of new complexities."),(0,i.kt)("p",null,"PoDA\u2019s design considers proving and archiving as separate concerns. With PoDA, the succinct proof of data is stored on Layer 1, while an assumption is made that at least one honest party in the world will archive the raw data within a 6-hour window of time - similar to the honesty assumption made when syncing a Bitcoin node (at least one honest node). If desired, the raw data itself can be secured by Syscoin\u2019s L1 network by reposting the data every 6 hours."),(0,i.kt)("p",null,"Validium (fully offchain DA) is also available as an alternative to PoDA for less-critical applications where the focus might be on even lower cost and higher throughput by trading-off Layer 1 data security."),(0,i.kt)("h4",{id:"so-why-use-syscoin"},"So why use Syscoin?"),(0,i.kt)("p",null,"As detailed above, with rollups operating on top of Syscoin, service is highly scalable. With Validium and fractal scaling, even greater scale can be achieved. As such the scalability aspect is very much covered. Scalability doesn't just mean high transaction per second volume though, it also takes into consideration the cost of transactions. Transactions on Syscoin will be cheap even at high throughput, as such if a project was considering which chain to operate their rollups on top of and wanted to have low gas fees for regularly posting proofs to the blockchain, Syscoin will be cheaper than other EVM-based chains."),(0,i.kt)("p",null,"Next is decentralization, Syscoin has around 2500 active masternodes operating on its network, with its popularity increasing as it becomes a more well-known smart chain it's likely that this number will increase for the rewards hosting a masternode provides. This means that Syscoin is not just scalable but also decentralized."),(0,i.kt)("p",null,"Lastly is security. Due to being merge-mined with Bitcoin Syscoin currently has around 30% of the hashpower that goes into mining Bitcoin. This is a large amount of security already and the Syscoin team is now looking to onboard more Bitcoin miners as it aims to become one of the most secure settlement layers. Not content with just this though, Syscoin also utilizes ",(0,i.kt)("a",{parentName:"p",href:"/docs/tech/chainlocks"},(0,i.kt)("em",{parentName:"a"},"Multi-quorum Chainlocks"))," technology that practically eliminates the risk of attacks like 51%, selfish mining, and MEV, making it even more secure."),(0,i.kt)("p",null,"To conclude, Syscoin is not only designed to be scalable and decentralized, it is also highly secure and cost-effective to build on."),(0,i.kt)("p",null,"Are you a project interested in building on Syscoin?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Contact us here: ",(0,i.kt)("a",{parentName:"li",href:"https://syscoin.org/contact"},"https://syscoin.org/contact")),(0,i.kt)("li",{parentName:"ul"},"Or you can connect with us on the Syscoin Discord server: ",(0,i.kt)("a",{parentName:"li",href:"https://discord.gg/syscoin"},"https://discord.gg/syscoin"))))}c.isMDXComponent=!0}}]);