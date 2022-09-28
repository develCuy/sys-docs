"use strict";(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[5522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},h),{},{components:n})):r.createElement(f,i({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},20108:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i={unversionedId:"tech/notary",id:"tech/notary",isDocsHomePage:!1,title:"Notary and Business Rulesets",description:"Syscoin enables notary and business rulesets through a unique feature on the base blockchain (not the NEVM chain). This feature enables token creators to notarize transactions before they are accepted by the network. This means that when a user tries to send a token that has notarization enabled, the token creator will be sent information regarding the transaction and they can then, through software on their own systems, decide whether to sign it or not. If they sign it then the transaction will go through as normal, if not then the transaction will not be accepted to the network.",source:"@site/docs/tech/notary.mdx",sourceDirName:"tech",slug:"/tech/notary",permalink:"/docs/tech/notary",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NEVM",permalink:"/docs/tech/nevm"},next:{title:"Rollux",permalink:"/docs/tech/rollux"}},s=[],c={toc:s};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Syscoin enables notary and business rulesets through a unique feature on the base blockchain (not the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tech/nevm"},"NEVM")," chain). This feature enables token creators to notarize transactions before they are accepted by the network. This means that when a user tries to send a token that has notarization enabled, the token creator will be sent information regarding the transaction and they can then, through software on their own systems, decide whether to sign it or not. If they sign it then the transaction will go through as normal, if not then the transaction will not be accepted to the network."),(0,o.kt)("p",null,"Essentially this feature allows token creators to abide by regulatory laws in varying jurisdictions depending on where the users are located. For example, before allowing a user to buy the token they would have to go through a KYC process first, the token creator then knows where the user is located and what regulations should be applicable to them. Once this information is known the token creator can then decide whether the user's transactions are valid or not. This could be utilized, for example, by companies wishing to have their stocks secured on an open and decentralized blockchain while still maintaining regulatory compliance."))}l.isMDXComponent=!0}}]);