(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[613],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},71553:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i={sidebar_position:9},s={unversionedId:"tech/z-dag",id:"tech/z-dag",isDocsHomePage:!1,title:"Z-DAG",description:"Z-DAG White Paper (note this paper does not reflect all the optimizations that came after)",source:"@site/docs/tech/z-dag.mdx",sourceDirName:"tech",slug:"/tech/z-dag",permalink:"/docs/tech/z-dag",version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Notary and Business Rulesets",permalink:"/docs/tech/notary"},next:{title:"Developer Resources",permalink:"/docs/NEVM/resources"}},l=[{value:"How is it useful?",id:"how-is-it-useful",children:[]},{value:"Throughput Performance",id:"throughput-performance",children:[]},{value:"Scaling to Global Population Demand",id:"scaling-to-global-population-demand",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://syscoin.org/zdag_syscoin_whitepaper.pdf"},"Z-DAG White Paper")," (note this paper does not reflect all the optimizations that came after)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syscoin's Z-DAG is a blockchain throughput scalability solution")," that adds very little complexity. It solves problems endemic across the industry, not by altering mission-critical fundamentals or reinventing the wheel, but through proper tooling and facilitation across the network to maximize the utility of battle-tested Bitcoin code."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Z-DAG is based on Satoshi\u2019s \u201csnack machine\u201d concept.")," It was invented by Syscoin Lead Core Developer Jag Sidhu to actualize peer-to-peer electronic cash and extend means-of-exchange to tokenized assets. It utilizes mempool awareness and fast relay topology across a network of independently operating full nodes (2k+ at present), all of which validate first, then trust. A high degree of probabilistic security is enabled by fast propagation across time-sorting mempools. This global mempool is made interactive and useful to the recipient through tooling that provides mempool status awareness."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The probabilistic security provided by Z-DAG represents a guarantee that a transaction is not double-spent"),", and will be accepted into a block and settled on-chain. The probability increases rapidly across time, to 99.9999% assurance within 10 seconds."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This enables a much more efficient fee market than bidding for a block.")," A typical Z-DAG transaction costs 0.0000582 SYS (see: ",(0,r.kt)("a",{parentName:"p",href:"https://syscoin.org/fees"},"https://syscoin.org/fees")," for a live fee comparison), and provides secure high-throughput service even if blocks are full. This is technically a layer-1 solution because the mempool resides within the blockchain security domain and ",(0,r.kt)("strong",{parentName:"p"},"all valid transactions that use Z-DAG settle on-chain through bitcoin-core-compliant consensus"),"."),(0,r.kt)("h3",{id:"how-is-it-useful"},"How is it useful?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syscoin\u2019s implementation is particularly useful for microtransactions with tokens")," such as buying groceries with ",(0,r.kt)("a",{parentName:"p",href:"https://www.binance.com/en/blog/421499824684900781/Binance-Blockchain-Foundry-Work-Together-for-Wider-BUSD-Access"},"Binance USD"),", ",(0,r.kt)("a",{parentName:"p",href:"https://tether.to/"},"Tether"),", ",(0,r.kt)("a",{parentName:"p",href:"https://lode.one/"},"Lode's AGX or AUX"),", or simple value transfer of any token (this includes ERC-20s that use our ",(0,r.kt)("a",{parentName:"p",href:"https://bridge.syscoin.org/"},"bridge")," that is permissionless and trust-minimized). Z-DAG Protocol is utilized exclusively by the Syscoin token layer; all projects that tokenize on Syscoin benefit from this."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Z-DAG allows merchants or application developers to define their ideal speed/security trade-off")," particular to their use case, for example depending on the value involved. A merchant receiving payment for coffee might choose to wait only a few seconds before considering the payment safe against double-spends and redeemable. A cart full of groceries? Maybe 5 to 10 seconds. On the other hand, a nation-state settling a cross-border trade debt might wait for what they consider a sufficient number of confirmations (60 sec block target) on Syscoin's bitcoin-core-compliant and merge-mined blockchain."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Z-DAG is more ideal for payments than other scaling approaches")," that try to change the court-of-record (blockchain) consensus to force it to function as a payments service, ultimately tampering with proven security and creating severe trade-offs that are global. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Industry-proven decentralized consensus is valuable to enterprises"),". Our solution leaves the base layer intact. Syscoin Core is \u201creligiously\u201d maintained to remain bitcoin-core-compliant and up-to-date in a timely fashion (sometimes involving multiple commits in a single day), with 90%+ code coverage. "),(0,r.kt)("h3",{id:"throughput-performance"},"Throughput Performance"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://whiteblock.io/"},(0,r.kt)("strong",{parentName:"a"},"Whiteblock Inc")),(0,r.kt)("strong",{parentName:"p"},", a third-party auditor, provided performance benchmarks of Z-DAG within realistic network conditions"),", using hosts with standard Syscoin masternode hardware specs. Whiteblock is well-known for its benchmark service and Genesis platform, particularly among the Ethereum community. The results for Z-DAG can be summarized as follows. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://syscoin.org/thumbs/1044x/files//whiteblockcasestudy.png",alt:"img"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Parameters:")," network latency, quantity of nodes, quantity of assets."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Average throughput: 8k - 15k")," TPS depending on a range of latency"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Burst throughput: 61k TPS")," (this rate can be sustained as long as the mempool is not full and latency conditions are conducive)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Zero-latency control group: 145K TPS")," (how most projects measure their TPS)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"These represent some of the most positive throughput statistics in the industry")," for a decentralized ledger network. We plan to perform even more thorough testing once sufficient optimizations have been introduced. Substantial resources would be required to even approach pushing Z-DAG to its limit on the live mainnet."),(0,r.kt)("p",null,"Whiteblock's report on Z-DAG is public: ",(0,r.kt)("a",{parentName:"p",href:"https://www.whiteblock.io/wp-content/uploads/2019/07/ZDAG-Analysis.pdf"},"Full Report"),", ",(0,r.kt)("a",{parentName:"p",href:"https://whiteblock.io/wp-content/uploads/2019/12/ZDAG-Case-Study.pdf"},"Summary Report")),(0,r.kt)("h3",{id:"scaling-to-global-population-demand"},"Scaling to Global Population Demand"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The Syscoin Team understands Z-DAG itself does not solve scalability for global population demand -")," the semi-absurd notion of 7 billion people transacting. Rather, we see it as an absolutely critical component to achieve this. The other component needed is multi-asset payment channels that use Z-DAG as a resilience fallback. One of the biggest problems with payment channels today is that when they aren't available (for any reason, e.g. lack of channel liquidity) the transactions roll directly to blockchain settlement. That destroys convenience and cost-savings, making payment channels non-viable as a decentralized payments solution compared to existing rails like centralized credit card networks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Z-DAG fills this significant gap")," by providing a performant decentralized fallback with a reasonable and predictable fee-market. Syscoin and some academic partners like ",(0,r.kt)("a",{parentName:"p",href:"https://www.tudelft.nl/"},"TU Delft")," are currently involved in R&D toward secure multi-asset payment channels - a technology which the industry has not yet achieved. We will combine this with Z-DAG."))}p.isMDXComponent=!0}}]);