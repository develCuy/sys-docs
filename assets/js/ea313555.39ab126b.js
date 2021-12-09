(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[7937],{74002:function(e,t,n){"use strict";var s=n(92137),o=n(63349),a=n(93552),i=n(87757),r=n.n(i),c=n(67294),h=(n(80072),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={address:null,added:!1,network:n.props.network,window:null},n.connectWallet=n.connectWallet.bind((0,o.Z)(n)),n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.ethereum&&this.setState({address:window.ethereum.selectedAddress})},n.connectWallet=function(){var e=(0,s.Z)(r().mark((function e(){var t,n,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={chainId:"0x"+57..toString(16),chainName:"Syscoin Mainnet",iconUrls:["https://syscoin.org/images/syscoin-blue-flat-logo.svg"],nativeCurrency:{name:"Syscoin",symbol:"SYS",decimals:18},rpcUrls:["https://rpc.syscoin.org/","wss://rpc.syscoin.org/wss"],blockExplorerUrls:["https://explorer.syscoin.org"]},n={chainId:"0x"+5700..toString(16),chainName:"Syscoin Tanenbaum Testnet",iconUrls:["https://syscoin.org/images/syscoin-blue-flat-logo.svg"],nativeCurrency:{name:"Test Syscoin",symbol:"tSYS",decimals:18},rpcUrls:["https://rpc.tanenbaum.io/"],blockExplorerUrls:["https://tanenbaum.io/"]},!window.ethereum){e.next=23;break}return e.next=5,window.ethereum.send("eth_requestAccounts");case 5:e.t0=this.state.network,e.next="Mainnet"===e.t0?8:"Tanenbaum Testnet"===e.t0?10:11;break;case 8:return s={method:"wallet_addEthereumChain",params:[t,this.state.selectedAddress]},e.abrupt("break",12);case 10:s={method:"wallet_addEthereumChain",params:[n,this.state.selectedAddress]};case 11:return e.abrupt("break",12);case 12:return e.prev=12,e.next=15,window.ethereum.request(s);case 15:e.next=21;break;case 17:return e.prev=17,e.t1=e.catch(12),console.log(e.t1),e.abrupt("return",!1);case 21:return this.setState({added:!0}),e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e,this,[[12,17]])})));return function(){return e.apply(this,arguments)}}(),n.render=function(){return this.state.added?c.createElement("section",{className:"section"},c.createElement("button",{className:"addButton"},"Added")):c.createElement("section",{className:"section"},c.createElement("button",{onClick:this.connectWallet,className:"addButton"},"Add to MetaMask"))},t}(c.Component));t.Z=h},76264:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return c},toc:function(){return h},default:function(){return l}});var s=n(22122),o=n(19756),a=(n(67294),n(3905)),i=n(74002),r={},c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"How do I add Syscoin to MetaMask?",source:"@site/docs/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Masternode Setup Guide",permalink:"/docs/guides/mn_setup"}},h=[{value:"How do I add Syscoin to MetaMask?",id:"how-do-i-add-syscoin-to-metamask",children:[]},{value:"What is NEVM?",id:"what-is-nevm",children:[]},{value:"Is Syscoin Proof of Work (PoW) or Proof of Stake (PoS)?",id:"is-syscoin-proof-of-work-pow-or-proof-of-stake-pos",children:[]},{value:"What is Syscoin&#39;s max supply?",id:"what-is-syscoins-max-supply",children:[]},{value:"How do I transfer SYS to the NEVM chain for using smart contracts?",id:"how-do-i-transfer-sys-to-the-nevm-chain-for-using-smart-contracts",children:[]},{value:"What is Syscoin&#39;s block time?",id:"what-is-syscoins-block-time",children:[]},{value:"How secure is Syscoin?",id:"how-secure-is-syscoin",children:[]},{value:"Where can I buy Syscoin?",id:"where-can-i-buy-syscoin",children:[]}],d={toc:h};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-do-i-add-syscoin-to-metamask"},"How do I add Syscoin to MetaMask?"),(0,a.kt)("p",null,"You can add Syscoin to MetaMask using the table below. If this fails for any reason then please follow the guide ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/nevm/metamask"},"here"),". Welcome to Syscoin!"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Network"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Syscoin Mainnet"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(i.Z,{network:"Mainnet",mdxType:"AddNetworkComponent"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Syscoin Tanenbaum Testnet"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(i.Z,{network:"Tanenbaum Testnet",mdxType:"AddNetworkComponent"}))))),(0,a.kt)("h2",{id:"what-is-nevm"},"What is NEVM?"),(0,a.kt)("p",null,"NEVM stands for Network-Enhanced Virtual Machine, this is what powers Syscoin's smart contract layer and enables dApps to be built on top of the Syscoin blockchain. It is a version of ",(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/evm/"},"Ethereum's EVM")," but modified to operate in tandem with the Syscoin main chain. You can read more about NEVM ",(0,a.kt)("a",{parentName:"p",href:"/docs/tech/nevm"},"here"),"."),(0,a.kt)("h2",{id:"is-syscoin-proof-of-work-pow-or-proof-of-stake-pos"},"Is Syscoin Proof of Work (PoW) or Proof of Stake (PoS)?"),(0,a.kt)("p",null,"Syscoin is Proof of Work and is merged-mined with Bitcoin, meaning that Bitcoin miners who also decide to mine Syscoin don't have to expend any extra energy to mine the Syscoin blockchain; the energy that goes into mining Bitcoin can be used to mine Syscoin at no extra cost."),(0,a.kt)("h2",{id:"what-is-syscoins-max-supply"},"What is Syscoin's max supply?"),(0,a.kt)("p",null,"With the release of NEVM Syscoin now no longer has a maximum supply, as ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1559"},"EIP-1559")," has been adopted any gas fees from smart contracts will be burned."),(0,a.kt)("h2",{id:"how-do-i-transfer-sys-to-the-nevm-chain-for-using-smart-contracts"},"How do I transfer SYS to the NEVM chain for using smart contracts?"),(0,a.kt)("p",null,"To transfer your SYS from the base chain to the NEVM chain you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://bridge.syscoin.org/"},"Bridge dApp"),", created by the Syscoin developers."),(0,a.kt)("h2",{id:"what-is-syscoins-block-time"},"What is Syscoin's block time?"),(0,a.kt)("p",null,"Syscoin's block time is 2.5 minutes, this is slow in comparison to other smart chains but has been set at this duration to ensure the highest security of the chain. The ",(0,a.kt)("a",{parentName:"p",href:"/docs/tech/chainlocks"},"ChainLock")," technology Syscoin uses to further secure its blockchain, beyond the Bitcoin merged-mining, works optimally at this block time, and as Syscoin aims to be a secure settlement layer for ",(0,a.kt)("a",{parentName:"p",href:"https://cryptobriefing.com/zk-rollups-path-scaling-ethereum/"},"zkRollups")," developers are expected to be running dApps not on the main chain but on zkRollups. As such, users will only experience the 2.5 minute block time when transferring on the main chain and will have near-instant transactions while transacting or using DeFi on zkRollups."),(0,a.kt)("h2",{id:"how-secure-is-syscoin"},"How secure is Syscoin?"),(0,a.kt)("p",null,"Syscoin is merged-mined with Bitcoin, what this means is that the miners mining Bitcoin can mine Syscoin at the same time, with no extra power required. At time of writing Syscoin has around 20% of Bitcoin's hashrate (mining power). The Syscoin hashrate can be seen ",(0,a.kt)("a",{parentName:"p",href:"https://www.coinwarz.com/mining/syscoin/hashrate-chart"},"here"),". We are looking to onboard more miners for even more security. Besides having 20%~ of Bitcoin's hashrate Syscoin also has ",(0,a.kt)("a",{parentName:"p",href:"/docs/tech/chainlocks"},"ChainLocks"),", which help to secure the chain even further by preventing ",(0,a.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/s/selfish-mining.asp"},"selfish mining"),"."),(0,a.kt)("h2",{id:"where-can-i-buy-syscoin"},"Where can I buy Syscoin?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.coingecko.com/en/coins/syscoin#markets"},"Here")," is a list of some exchanges where you can buy Syscoin."))}l.isMDXComponent=!0},46601:function(){}}]);