"use strict";(self.webpackChunksys_docs=self.webpackChunksys_docs||[]).push([[1952],{84478:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(87462),r=n(67294);const l=e=>{let{width:t=30,height:n=30,className:l,...o}=e;return r.createElement("svg",(0,a.Z)({"aria-label":"Menu",className:l,width:t,height:n,viewBox:"0 0 30 30",role:"img",focusable:"false"},o),r.createElement("title",null,"Menu"),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},61952:(e,t,n)=>{n.d(t,{Z:()=>_e});var a=n(67294),r=n(86010),l=n(24973),o=n(5977);const c="skipToContent_OuoZ";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const i=function(){const e=(0,a.useRef)(null),t=(0,o.TH)();return(0,a.useEffect)((()=>{!t.hash&&e.current&&s(e.current)}),[t.pathname]),a.createElement("div",{ref:e},a.createElement("a",{href:"#main",className:c,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},a.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var m=n(86700),u=n(80944);const d="announcementBar_axC9",f="announcementBarClose_A3A1",h="announcementBarContent_6uhP",v="announcementBarCloseable_y4cp";const g=function(){const{isAnnouncementBarClosed:e,closeAnnouncementBar:t}=(0,u.Z)(),{announcementBar:n}=(0,m.LU)();if(!n)return null;const{content:o,backgroundColor:c,textColor:s,isCloseable:i}=n;return!o||i&&e?null:a.createElement("div",{className:d,style:{backgroundColor:c,color:s},role:"banner"},a.createElement("div",{className:(0,r.Z)(h,{[v]:i}),dangerouslySetInnerHTML:{__html:o}}),i?a.createElement("button",{type:"button",className:f,onClick:t,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};var E=n(87462);const b=()=>null;var p=n(52263);const k={toggle:"toggle_iYfV"},_=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(k.toggle,k.dark),style:n},t)},Z=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(k.toggle,k.light),style:n},t)},N=(0,a.memo)((e=>{let{className:t,icons:n,checked:l,disabled:o,onChange:c}=e;const[s,i]=(0,a.useState)(l),[m,u]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":m,"react-toggle--disabled":o}),role:"button",tabIndex:-1,onClick:e=>{const t=d.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void i(null==t?void 0:t.checked)}},a.createElement("div",{className:"react-toggle-track"},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),a.createElement("div",{className:"react-toggle-thumb"}),a.createElement("input",{ref:d,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onFocus:()=>u(!0),onBlur:()=>u(!1)}))}));function w(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,m.LU)(),{isClient:o}=(0,p.default)();return a.createElement(N,(0,E.Z)({disabled:!o,icons:{checked:a.createElement(_,{icon:t,style:n}),unchecked:a.createElement(Z,{icon:r,style:l})}},e))}var C=n(85350),y=n(77898);const L=e=>{const t=(0,o.TH)(),[n,r]=(0,a.useState)(e),l=(0,a.useRef)(!1),[c,s]=(0,a.useState)(0),i=(0,a.useCallback)((e=>{null!==e&&s(e.getBoundingClientRect().height)}),[]);return(0,y.Z)(((t,n)=>{let{scrollY:a}=t,{scrollY:o}=n;if(!e)return;if(a<c)return void r(!0);if(l.current)return l.current=!1,void r(!1);o&&0===a&&r(!0);const s=document.documentElement.scrollHeight-c,i=window.innerHeight;o&&a>=o?r(!1):a+i<s&&r(!0)}),[c,l]),(0,a.useEffect)((()=>{e&&r(!0)}),[t.pathname]),(0,a.useEffect)((()=>{e&&t.hash&&(l.current=!0)}),[t.hash]),{navbarRef:i,isNavbarVisible:n}};var A=n(31839),D=n(93783),I=n(5525);const T=e=>{let{width:t=20,height:n=20,...r}=e;return a.createElement("svg",(0,E.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:t,height:n},r),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};function x(e){let{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:r,...l}=e;const{i18n:{currentLocale:o,locales:c,localeConfigs:s}}=(0,p.default)(),i=(0,m.l5)();function u(e){return s[e].label}const d=[...n,...c.map((e=>{const t=`pathname://${i.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:u(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===o?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],f=t?"Languages":u(o);return a.createElement(I.Z,(0,E.Z)({},l,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(T,{style:{verticalAlign:"text-bottom",marginRight:5}}),a.createElement("span",null,f)),items:d}))}const B="searchWrapper_f8aU";function S(e){let{mobile:t}=e;return t?null:a.createElement("div",{className:B},a.createElement(b,null))}const M={default:()=>I.Z,localeDropdown:()=>x,search:()=>S,docsVersion:()=>n(47250).Z,docsVersionDropdown:()=>n(59308).Z,doc:()=>n(76400).Z};function U(e){let{type:t,...n}=e;const r=function(e){void 0===e&&(e="default");const t=M[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()}(t);return a.createElement(r,n)}var V=n(55537),H=n(84478);const R="displayOnlyInLargeViewport_cxYs",P="navbarHideable_RReh",$="navbarHidden_FBwS",W="right";const O=function(){const{navbar:{items:e,hideOnScroll:t,style:n},colorMode:{disableSwitch:l}}=(0,m.LU)(),[o,c]=(0,a.useState)(!1),{isDarkTheme:s,setLightTheme:i,setDarkTheme:u}=(0,C.Z)(),{navbarRef:d,isNavbarVisible:f}=L(t);(0,A.Z)(o);const h=(0,a.useCallback)((()=>{c(!0)}),[c]),v=(0,a.useCallback)((()=>{c(!1)}),[c]),g=(0,a.useCallback)((e=>e.target.checked?u():i()),[i,u]),p=(0,D.Z)();(0,a.useEffect)((()=>{p===D.D.desktop&&c(!1)}),[p]);const k=e.some((e=>"search"===e.type)),{leftItems:_,rightItems:Z}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??W))),rightItems:e.filter((e=>"right"===(e.position??W)))}}(e);return a.createElement("nav",{ref:d,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===n,"navbar--primary":"primary"===n,"navbar-sidebar--show":o,[P]:t,[$]:t&&!f})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},null!=e&&0!==e.length&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:h,onKeyDown:h},a.createElement(H.Z,null)),a.createElement(V.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:(0,r.Z)("navbar__title")}),_.map(((e,t)=>a.createElement(U,(0,E.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},Z.map(((e,t)=>a.createElement(U,(0,E.Z)({},e,{key:t})))),!l&&a.createElement(w,{className:R,checked:s,onChange:g}),!k&&a.createElement(b,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:v}),a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(V.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:v}),!l&&o&&a.createElement(w,{checked:s,onChange:g})),a.createElement("div",{className:"navbar-sidebar__items"},a.createElement("div",{className:"menu"},a.createElement("ul",{className:"menu__list"},e.map(((e,t)=>a.createElement(U,(0,E.Z)({mobile:!0},e,{onClick:v,key:t})))))))))};var z=n(36742),G=n(44996);const Y="footerLogoLink_SRtH";var F=n(98465);function J(e){let{to:t,href:n,label:r,prependBaseUrlToHref:l,...o}=e;const c=(0,G.Z)(t),s=(0,G.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(z.Z,(0,E.Z)({className:"footer__link-item"},n?{href:l?s:n}:{to:c},o),r)}const K=e=>{let{sources:t,alt:n}=e;return a.createElement(F.Z,{className:"footer__logo",alt:n,sources:t})};const Q=function(){const{footer:e}=(0,m.LU)(),{copyright:t,links:n=[],logo:l={}}=e||{},o={light:(0,G.Z)(l.src),dark:(0,G.Z)(l.srcDark||l.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(J,e))))):null)))),(l||t)&&a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},l.href?a.createElement(z.Z,{href:l.href,className:Y},a.createElement(K,{alt:l.alt,sources:o})):a.createElement(K,{alt:l.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var X=n(10412);const q=(0,m.WA)("theme"),j="light",ee="dark",te=e=>e===ee?ee:j,ne=e=>{(0,m.WA)("theme").set(te(e))},ae=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,m.LU)(),[r,l]=(0,a.useState)((e=>X.Z.canUseDOM?te(document.documentElement.getAttribute("data-theme")):te(e))(e)),o=(0,a.useCallback)((()=>{l(j),ne(j)}),[]),c=(0,a.useCallback)((()=>{l(ee),ne(ee)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",te(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=q.get();null!==e&&l(te(e))}catch(e){console.error(e)}}),[l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;l(t?ee:j)}))}),[]),{isDarkTheme:r===ee,setLightTheme:o,setDarkTheme:c}};var re=n(82924);const le=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=ae();return a.createElement(re.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},oe="docusaurus.tab.",ce=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,m.WA)(`docusaurus.tab.${e}`).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};for(const t of(0,m._f)())if(t.startsWith(oe)){e[t.substring(oe.length)]=(0,m.WA)(t).get()}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}},se=(0,m.WA)("docusaurus.announcement.dismiss"),ie=(0,m.WA)("docusaurus.announcement.id"),me=()=>{const{announcementBar:e}=(0,m.LU)(),[t,n]=(0,a.useState)(!0),r=(0,a.useCallback)((()=>{se.set("true"),n(!0)}),[]);return(0,a.useEffect)((()=>{if(!e)return;const{id:t}=e;let a=ie.get();"annoucement-bar"===a&&(a="announcement-bar");const r=t!==a;ie.set(t),r&&se.set("false"),(r||"false"===se.get())&&n(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:r}};var ue=n(79443);const de=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=ce(),{isAnnouncementBarClosed:r,closeAnnouncementBar:l}=me();return a.createElement(ue.Z.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n,isAnnouncementBarClosed:r,closeAnnouncementBar:l}},e.children)};function fe(e){let{children:t}=e;return a.createElement(le,null,a.createElement(de,null,a.createElement(m.L5,null,t)))}var he=n(99105);function ve(e){let{locale:t,version:n,tag:r}=e;return a.createElement(he.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:`${t}`}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var ge=n(41217);function Ee(){const{i18n:{defaultLocale:e,locales:t}}=(0,p.default)(),n=(0,m.l5)();return a.createElement(he.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function be(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,p.default)(),r=function(){const{siteConfig:{url:e}}=(0,p.default)(),{pathname:t}=(0,o.TH)();return e+(0,G.Z)(t)}(),l=t?`${n}${t}`:r;return a.createElement(he.Z,null,a.createElement("meta",{property:"og:url",content:l}),a.createElement("link",{rel:"canonical",href:l}))}function pe(e){const{siteConfig:{favicon:t,themeConfig:{metadatas:n}},i18n:{currentLocale:r,localeConfigs:l}}=(0,p.default)(),{title:o,description:c,image:s,keywords:i,searchMetadatas:u}=e,d=(0,G.Z)(t),f=(0,m.pe)(o),h=r,v=l[r].direction;return a.createElement(a.Fragment,null,a.createElement(he.Z,null,a.createElement("html",{lang:h,dir:v}),t&&a.createElement("link",{rel:"shortcut icon",href:d}),a.createElement("title",null,f),a.createElement("meta",{property:"og:title",content:f})),a.createElement(ge.Z,{description:c,keywords:i,image:s}),a.createElement(be,null),a.createElement(Ee,null),a.createElement(ve,(0,E.Z)({tag:m.HX,locale:r},u)),a.createElement(he.Z,null,n.map(((e,t)=>a.createElement("meta",(0,E.Z)({key:`metadata_${t}`},e))))))}const ke=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const _e=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return ke(),a.createElement(fe,null,a.createElement(pe,e),a.createElement(i,null),a.createElement(g,null),a.createElement(O,null),a.createElement("div",{className:(0,r.Z)(m.kM.wrapper.main,l,o)},t),!n&&a.createElement(Q,null))}},55537:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(36742),o=n(98465),c=n(44996),s=n(52263),i=n(86700);const m=e=>{const{isClient:t}=(0,s.default)(),{navbar:{title:n,logo:m={src:""}}}=(0,i.LU)(),{imageClassName:u,titleClassName:d,...f}=e,h=(0,c.Z)(m.href||"/"),v={light:(0,c.Z)(m.src),dark:(0,c.Z)(m.srcDark||m.src)};return r.createElement(l.Z,(0,a.Z)({to:h},f,m.target&&{target:m.target}),m.src&&r.createElement(o.Z,{key:t,className:u,sources:v,alt:m.alt||n||"Logo"}),null!=n&&r.createElement("strong",{className:d},n))}},5525:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(87462),r=n(67294),l=n(86010),o=n(36742),c=n(44996),s=n(5977),i=n(86700);function m(e){let{activeBasePath:t,activeBaseRegex:n,to:l,href:s,label:i,activeClassName:m="navbar__link--active",prependBaseUrlToHref:u,...d}=e;const f=(0,c.Z)(l),h=(0,c.Z)(t),v=(0,c.Z)(s,{forcePrependBaseUrl:!0});return r.createElement(o.Z,(0,a.Z)({},s?{href:u?v:s}:{isNavLink:!0,activeClassName:m,to:f,...t||n?{isActive:(e,t)=>n?new RegExp(n).test(t.pathname):t.pathname.startsWith(h)}:null},d),i)}function u(e){let{items:t,position:n,className:o,...c}=e;const s=(0,r.useRef)(null),i=(0,r.useRef)(null),[u,d]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=e=>{s.current&&!s.current.contains(e.target)&&d(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[s]);const f=function(e,t){return void 0===t&&(t=!1),(0,l.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.createElement("div",{ref:s,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":u})},r.createElement(m,(0,a.Z)({className:f(o)},c,{onClick:c.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),d(!u))}}),c.children??c.label),r.createElement("ul",{ref:i,className:"dropdown__menu"},t.map(((e,n)=>{let{className:l,...o}=e;return r.createElement("li",{key:n},r.createElement(m,(0,a.Z)({onKeyDown:e=>{if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),d(!1);const t=s.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active",className:f(l,!0)},o)))})))):r.createElement(m,(0,a.Z)({className:f(o)},c))}function d(e){var t,n;let{items:o,className:c,position:u,...d}=e;const f=(0,r.useRef)(null),{pathname:h}=(0,s.TH)(),[v,g]=(0,r.useState)((()=>!(null!=o&&o.some((e=>(0,i.Mg)(e.to,h))))??!0)),E=function(e,t){return void 0===t&&(t=!1),(0,l.Z)("menu__link",{"menu__link--sublist":t},e)};if(!o)return r.createElement("li",{className:"menu__list-item"},r.createElement(m,(0,a.Z)({className:E(c)},d)));const b=null!=(t=f.current)&&t.scrollHeight?`${null==(n=f.current)?void 0:n.scrollHeight}px`:void 0;return r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":v})},r.createElement(m,(0,a.Z)({role:"button",className:E(c,!0)},d,{onClick:e=>{e.preventDefault(),g((e=>!e))}}),d.children??d.label),r.createElement("ul",{className:"menu__list",ref:f,style:{height:v?void 0:b}},o.map(((e,t)=>{let{className:n,...l}=e;return r.createElement("li",{className:"menu__list-item",key:t},r.createElement(m,(0,a.Z)({activeClassName:"menu__link--active",className:E(n)},l,{onClick:d.onClick})))}))))}const f=function(e){let{mobile:t=!1,...n}=e;const a=t?d:u;return r.createElement(a,n)}},76400:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(67294),l=n(5525),o=n(80907),c=n(86010),s=n(86700);function i(e){let{docId:t,activeSidebarClassName:n,label:i,docsPluginId:m,...u}=e;const{activeVersion:d,activeDoc:f}=(0,o.useActiveDocContext)(m),{preferredVersion:h}=(0,s.J)(m),v=(0,o.useLatestVersion)(m),g=d??h??v,E=g.docs.find((e=>e.id===t));if(!E){const e=g.docs.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id=${t} in version ${g.name}.\nAvailable docIds=\n- ${e}`)}return r.createElement(l.Z,(0,a.Z)({exact:!0},u,{className:(0,c.Z)(u.className,{[n]:f&&f.sidebar===E.sidebar}),label:i??E.id,to:E.path}))}},59308:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(67294),l=n(5525),o=n(80907),c=n(86700);const s=e=>e.docs.find((t=>t.id===e.mainDocId));function i(e){let{mobile:t,docsPluginId:n,dropdownActiveClassDisabled:i,dropdownItemsBefore:m,dropdownItemsAfter:u,...d}=e;const f=(0,o.useActiveDocContext)(n),h=(0,o.useVersions)(n),v=(0,o.useLatestVersion)(n),{preferredVersion:g,savePreferredVersionName:E}=(0,c.J)(n);const b=f.activeVersion??g??v,p=t?"Versions":b.label,k=t?void 0:s(b).path;return r.createElement(l.Z,(0,a.Z)({},d,{mobile:t,label:p,to:k,items:function(){const e=h.map((e=>{const t=(null==f?void 0:f.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==f?void 0:f.activeVersion),onClick:()=>{E(e.name)}}})),t=[...m,...e,...u];if(!(t.length<=1))return t}(),isActive:i?()=>!1:void 0}))}},47250:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87462),r=n(67294),l=n(5525),o=n(80907),c=n(86700);function s(e){let{label:t,to:n,docsPluginId:s,...i}=e;const m=(0,o.useActiveVersion)(s),{preferredVersion:u}=(0,c.J)(s),d=(0,o.useLatestVersion)(s),f=m??u??d,h=t??f.label,v=n??(e=>e.docs.find((t=>t.id===e.mainDocId)))(f).path;return r.createElement(l.Z,(0,a.Z)({},i,{label:h,to:v}))}},82924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(67294).createContext(void 0)},98465:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(67294),l=n(86010),o=n(52263),c=n(85350);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},i=e=>{const{isClient:t}=(0,o.default)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:m,alt:u="",...d}=e,f=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,f.map((e=>r.createElement("img",(0,a.Z)({key:e,src:i[e],alt:u,className:(0,l.Z)(s.themedImage,s[`themedImage--${e}`],m)},d)))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)(void 0)},31839:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},77898:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(10412);const l=()=>({scrollX:r.Z.canUseDOM?window.pageXOffset:0,scrollY:r.Z.canUseDOM?window.pageYOffset:0}),o=function(e,t){void 0===t&&(t=[]);const n=(0,a.useRef)(l()),r=()=>{const t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((()=>{const e={passive:!0};return r(),window.addEventListener("scroll",r,e),()=>window.removeEventListener("scroll",r,e)}),t)}},85350:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(82924);const l=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},80944:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(79443);const l=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},93783:(e,t,n)=>{n.d(t,{D:()=>l,Z:()=>o});var a=n(67294),r=n(10412);const l={desktop:"desktop",mobile:"mobile"};const o=function(){const e=r.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?l.desktop:l.mobile}const[n,o]=(0,a.useState)(t);return(0,a.useEffect)((()=>{if(e)return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n);function n(){o(t())}}),[]),n}}}]);