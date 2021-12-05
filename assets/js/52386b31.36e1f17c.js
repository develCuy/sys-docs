(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[3958],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return n?o.createElement(d,a(a({ref:t},h),{},{components:n})):o.createElement(d,a({ref:t},h))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65849:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return h}});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),a={},c={unversionedId:"tech/bitcoin-tech",id:"tech/bitcoin-tech",isDocsHomePage:!1,title:"Bitcoin Technology",description:"Thanks to the Syscoin blockchain's codebase being around 90% in-line with Bitcoin's (and continually keeping up-to-date) this allows Syscoin to utilize technologies that have been developed on Bitcoin. This applies to the Syscoin base chain, rather than the NEVM chain. You can read about two of these technologies below.",source:"@site/docs/tech/bitcoin-tech.mdx",sourceDirName:"tech",slug:"/tech/bitcoin-tech",permalink:"/docs/tech/bitcoin-tech",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resources",permalink:"/docs/intro/syscoin-resources"},next:{title:"ChainLocks",permalink:"/docs/tech/chainlocks"}},s=[{value:"Lightning Network",id:"lightning-network",children:[]},{value:"Taproot",id:"taproot",children:[]}],l={toc:s};function h(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Thanks to the Syscoin blockchain's codebase being around 90% in-line with Bitcoin's (and continually keeping up-to-date) this allows Syscoin to utilize technologies that have been developed on Bitcoin. This applies to the Syscoin base chain, rather than the ",(0,i.kt)("a",{parentName:"p",href:"nevm"},"NEVM")," chain. You can read about two of these technologies below."),(0,i.kt)("h2",{id:"lightning-network"},"Lightning Network"),(0,i.kt)("p",null,"Lightning Network (LN) is an off-chain layer 2 technology that operates as a transaction layer on top of the Bitcoin blockchain. It was created in order to improve the scalability of Bitcoin without affecting its security and decentralization. LN enables cheaper and faster transactions, this is by creating payment channels between individuals that eventually form a web of interconnected channels where users can transact with each other with minimal fees. When a user enters or exits a channel is the only time they must pay a transaction cost directly to the miners of the blockchain, otherwise they pay extremely low fees for using LN. As mentioned above, this technology is able to be utilized by projects building on Syscoin as well."),(0,i.kt)("h2",{id:"taproot"},"Taproot"))}h.isMDXComponent=!0}}]);