!function(e,t,n,o){"function"==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(yt,Et){"use strict";var Lt="fullpage-wrapper",xt="."+Lt,At="fp-responsive",Tt="fp-notransition",kt="fp-destroyed",Mt="fp-enabled",Ot="fp-viewing",Ct="active",Ht="."+Ct,It="fp-completely",Bt="fp-section",Rt="."+Bt,zt=Rt+Ht,jt="fp-tableCell",Nt="."+jt,Pt="fp-auto-height",Dt="fp-normal-scroll",Vt="fp-nav",Wt="#"+Vt,Ft="fp-tooltip",Yt="fp-slide",Ut="."+Yt,_t=Ut+Ht,Kt="fp-slides",Xt="."+Kt,$t="fp-slidesContainer",qt="."+$t,Qt="fp-table",Gt="fp-slidesNav",Jt="."+Gt,Zt=Jt+" a",e="fp-controlArrow",en="."+e,tn="fp-prev",nn=en+".fp-prev",on=en+".fp-next";function rn(e,t){yt.console&&yt.console[e]&&yt.console[e]("fullPage: "+t)}function ln(e,t){return(t=1<arguments.length?t:Et)?t.querySelectorAll(e):null}function an(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=an(e[r],o[r]))}return e}function sn(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function cn(){return"innerHeight"in yt?yt.innerHeight:Et.documentElement.offsetHeight}function un(e,t){for(var n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++)e[o].style[n]=t[n];return e}function n(e,t,n){for(var o=e[n];o&&!Bn(o,t);)o=o[n];return o}function fn(e,t){return n(e,t,"previousElementSibling")}function dn(e,t){return n(e,t,"nextElementSibling")}function pn(e){return e.previousElementSibling}function vn(e){return e.nextElementSibling}function hn(e){return e[e.length-1]}function gn(e,t){e=i(e)?e[0]:e;for(var n=null!=t?ln(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return i(e)?e:[e]}function mn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function bn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function i(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function Sn(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function wn(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function yn(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||Et.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(!n||r)&&n||(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function En(e,t){o(e,t,!0)}function Ln(e,t){for("string"==typeof t&&(t=zn(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function xn(e){for(var t=Et.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function An(e,t){return e&&1===e.nodeType?Bn(e,t)?e:An(e.parentNode,t):null}function Tn(e,t){r(e,e.nextSibling,t)}function kn(e,t){r(e,e,t)}function r(e,t,n){i(n)||("string"==typeof n&&(n=zn(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function Mn(){var e=Et.documentElement;return(yt.pageYOffset||e.scrollTop)-(e.clientTop||0)}function On(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function Cn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Hn(e){if("function"==typeof e)return!0;e=Object.prototype.toString(e);return"[object Function]"===e||"[object GeneratorFunction]"===e}function In(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof yt.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=Et.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function Bn(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function Rn(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function zn(e){var t=Et.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function jn(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function a(e,t,n){for(var o=e[n],r=[];o;)!Bn(o,t)&&null!=t||r.push(o),o=o[n];return r}function Nn(e,t){return a(e,t,"nextElementSibling")}function Pn(e,t){return a(e,t,"previousElementSibling")}return yt.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||yt;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),yt.fp_utils={$:ln,deepExtend:an,hasClass:sn,getWindowHeight:cn,css:un,until:n,prevUntil:fn,nextUntil:dn,prev:pn,next:vn,last:hn,index:gn,getList:l,hide:mn,show:bn,isArrayOrList:i,addClass:Sn,removeClass:wn,appendTo:yn,wrap:o,wrapAll:En,wrapInner:Ln,unwrap:xn,closest:An,after:Tn,before:kn,insertBefore:r,getScrollTop:Mn,siblings:On,preventDefault:Cn,isFunction:Hn,trigger:In,matches:Bn,toggle:Rn,createElementFromHTML:zn,remove:jn,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:a,nextAll:Nn,prevAll:Pn,showError:rn},function(e,d){var n=d&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(d.licenseKey)||-1<Et.domain.indexOf("alvarotrigo.com");if(!sn(ln("html"),Mt)){var f=ln("html, body"),p=ln("body")[0],v={};d=an({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:yt.fp_scrolloverflow?yt.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof e?ln(e)[0]:e,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},d);var h,r,s,l,a=!1,o=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),i="ontouchstart"in yt||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,c="string"==typeof e?ln(e)[0]:e,g=cn(),m=!1,t=!0,b=!0,u=[],S={m:{up:!0,down:!0,left:!0,right:!0}};S.k=an({},S.m);var w,y,E,L,x,A,T,e=function(){var e;e=yt.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"};return e}(),k={touchmove:"ontouchmove"in yt?"touchmove":e.move,touchstart:"ontouchstart"in yt?"touchstart":e.down},M='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',O=!1;try{var C=Object.defineProperty({},"passive",{get:function(){O=!0}});yt.addEventListener("testPassive",null,C),yt.removeEventListener("testPassive",null,C)}catch(e){}var H,I=an({},d),B=!1,R=!0;ht(),yt.fp_easings=an(yt.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),c&&(v.version="3.0.5",v.setAutoScrolling=_,v.setRecordHistory=K,v.setScrollingSpeed=X,v.setFitToSection=$,v.setLockAnchors=function(e){d.lockAnchors=e},v.setMouseWheelScrolling=q,v.setAllowScrolling=Q,v.setKeyboardScrolling=J,v.moveSectionUp=Z,v.moveSectionDown=ee,v.silentMoveTo=te,v.moveTo=ne,v.moveSlideRight=oe,v.moveSlideLeft=re,v.fitToSection=pe,v.reBuild=ie,v.setResponsive=le,v.getFullpageData=function(){return d},v.destroy=function(e){_(!1,"internal"),Q(!0),G(!1),J(!1),Sn(c,kt),clearTimeout(L),clearTimeout(E),clearTimeout(y),clearTimeout(x),clearTimeout(A),yt.removeEventListener("scroll",de),yt.removeEventListener("hashchange",je),yt.removeEventListener("resize",Xe),Et.removeEventListener("keydown",Pe),Et.removeEventListener("keyup",De),["click","touchstart"].forEach(function(e){Et.removeEventListener(e,ae)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){Et.removeEventListener(e,ce,!0)}),clearTimeout(L),clearTimeout(E),e&&(ft(0),ln("img[data-src], source[data-src], audio[data-src], iframe[data-src]",c).forEach(function(e){Oe(e,"src")}),ln("img[data-srcset]").forEach(function(e){Oe(e,"srcset")}),jn(ln(Wt+", "+Jt+", "+en)),un(ln(Rt),{height:"","background-color":"",padding:""}),un(ln(Ut),{width:""}),un(c,{height:"",position:"","-ms-touch-action":"","touch-action":""}),un(f,{overflow:"",height:""}),wn(ln("html"),Mt),wn(p,At),p.className.split(/\s+/).forEach(function(e){0===e.indexOf(Ot)&&wn(p,e)}),ln(Rt+", "+Ut).forEach(function(e){d.scrollOverflowHandler&&d.scrollOverflow&&d.scrollOverflowHandler.remove(e),wn(e,Qt+" "+Ct+" "+It),e.getAttribute("data-fp-styles")&&e.setAttribute("style",e.getAttribute("data-fp-styles")),sn(e,Bt)&&!B&&e.removeAttribute("data-anchor")}),Qe(c),[Nt,qt,Xt].forEach(function(e){ln(e,c).forEach(function(e){xn(e)})}),un(c,{"-webkit-transition":"none",transition:"none"}),yt.scrollTo(0,0),[Bt,Yt,$t].forEach(function(e){wn(ln("."+e),e)}))},v.getActiveSection=function(){return new St(ln(zt)[0])},v.getActiveSlide=function(){return Te(ln(_t,ln(zt)[0])[0])},v.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<ln(d.sectionSelector,c).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<ln(d.sectionSelector,c).length;t++)e.push(0);return e}(),options:d,setAutoScrolling:_},v.shared={afterRenderActions:fe},yt.fullpage_api=v,d.$&&(d.$.fn.fullpage=v),d.css3&&(d.css3=function(){var e,t,n=Et.createElement("p"),o={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(t in n.style.display="block",Et.body.insertBefore(n,null),o)void 0!==n.style[t]&&(n.style[t]="translate3d(1px,1px,1px)",e=yt.getComputedStyle(n).getPropertyValue(o[t]));return Et.body.removeChild(n),void 0!==e&&0<e.length&&"none"!==e}()),d.scrollBar=d.scrollBar||d.hybrid,function(){var e,t;d.anchors.length||(t="[data-anchor]",(e=ln(d.sectionSelector.split(",").join(t+",")+t,c)).length&&(B=!0,e.forEach(function(e){d.anchors.push(e.getAttribute("data-anchor").toString())}))),d.navigationTooltips.length||(t="[data-tooltip]",(t=ln(d.sectionSelector.split(",").join(t+",")+t,c)).length&&t.forEach(function(e){d.navigationTooltips.push(e.getAttribute("data-tooltip").toString())}))}(),function(){un(c,{height:"100%",position:"relative"}),Sn(c,Lt),Sn(ln("html"),Mt),g=cn(),wn(c,kt),Sn(ln(d.sectionSelector,c),Bt),Sn(ln(d.slideSelector,c),Yt);for(var e=ln(Rt),t=0;t<e.length;t++){var n=t,o=e[t],r=ln(Ut,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),function(e,t){t||null!=ln(zt)[0]||Sn(e,Ct),l=ln(zt)[0],un(e,{height:g+"px"}),d.paddingTop&&un(e,{"padding-top":d.paddingTop}),d.paddingBottom&&un(e,{"padding-bottom":d.paddingBottom}),void 0!==d.sectionsColor[t]&&un(e,{"background-color":d.sectionsColor[t]}),void 0!==d.anchors[t]&&e.setAttribute("data-anchor",d.anchors[t])}(o,n),function(e,t){void 0!==d.anchors[t]&&sn(e,Ct)&&Ge(d.anchors[t],t),d.menu&&d.css3&&null!=An(ln(d.menu)[0],xt)&&ln(d.menu).forEach(function(e){p.appendChild(e)})}(o,n),0<i?function(e,t,n){var o=100*n,r=100/n,i=Et.createElement("div");i.className=Kt,En(t,i),(i=Et.createElement("div")).className=$t,En(t,i),un(ln(qt,e),{width:o+"%"}),1<n&&(d.controlArrows&&function(e){var t=[zn('<div class="fp-controlArrow fp-prev"></div>'),zn('<div class="fp-controlArrow fp-next"></div>')];Tn(ln(Xt,e)[0],t),"#fff"!==d.controlArrowColor&&(un(ln(on,e),{"border-color":"transparent transparent transparent "+d.controlArrowColor}),un(ln(nn,e),{"border-color":"transparent "+d.controlArrowColor+" transparent transparent"})),d.loopHorizontal||mn(ln(nn,e))}(e),d.slidesNavigation&&function(e,t){yn(zn('<div class="'+Gt+'"><ul></ul></div>'),e);var n=ln(Jt,e)[0];Sn(n,"fp-"+d.slidesNavPosition);for(var o=0;o<t;o++)yn(zn('<li><a href="#"><span class="fp-sr-only">'+ue(o,"Slide")+"</span><span></span></a></li>"),ln("ul",n)[0]);un(n,{"margin-left":"-"+n.innerWidth/2+"px"}),Sn(ln("a",ln("li",n)[0]),Ct)}(e,n)),t.forEach(function(e){un(e,{width:r+"%"}),d.verticalCentered&&Ze(e)}),null!=(e=ln(_t,e)[0])&&(0!==gn(ln(zt),Rt)||0===gn(ln(zt),Rt)&&0!==gn(e))?ut(e,"internal"):Sn(t[0],Ct)}(o,r,i):d.verticalCentered&&Ze(o)}d.fixedElements&&d.css3&&ln(d.fixedElements).forEach(function(e){p.appendChild(e)}),d.navigation&&function(){var e=Et.createElement("div");e.setAttribute("id",Vt);var t=Et.createElement("ul");e.appendChild(t),yn(e,p),Sn(e=ln(Wt)[0],"fp-"+d.navigationPosition),d.showActiveTooltip&&Sn(e,"fp-show-active");for(var n="",o=0;o<ln(Rt).length;o++){var r="";d.anchors.length&&(r=d.anchors[o]),n+='<li><a href="#'+r+'"><span class="fp-sr-only">'+ue(o,"Section")+"</span><span></span></a>";r=d.navigationTooltips[o];void 0!==r&&""!==r&&(n+='<div class="'+Ft+" fp-"+d.navigationPosition+'">'+r+"</div>"),n+="</li>"}ln("ul",e)[0].innerHTML=n,un(ln(Wt),{"margin-top":"-"+ln(Wt)[0].offsetHeight/2+"px"}),e=ln("li",ln(Wt)[0])[gn(ln(zt)[0],Rt)],Sn(ln("a",e),Ct)}(),ln('iframe[src*="youtube.com/embed/"]',c).forEach(function(e){var t,n;n="enablejsapi=1",e=(t=e).getAttribute("src"),t.setAttribute("src",e+function(e){return/\?/.test(e)?"&":"?"}(e)+n)}),d.scrollOverflow&&(w=d.scrollOverflowHandler.init(d))}(),Q(!0),G(!0),_(d.autoScrolling,"internal"),$e(),st(),"complete"===Et.readyState&&ze(),yt.addEventListener("load",ze),d.scrollOverflow||fe(),yt.addEventListener("scroll",de),yt.addEventListener("hashchange",je),yt.addEventListener("blur",Ye),yt.addEventListener("resize",Xe),Et.addEventListener("keydown",Pe),Et.addEventListener("keyup",De),["click","touchstart"].forEach(function(e){Et.addEventListener(e,ae)}),d.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){se(e,!1)}),["mouseleave","touchend"].forEach(function(e){se(e,!0)})));var z=!1,j=0,N=0,P=0,D=0,V=0,W=(new Date).getTime(),F=0,Y=0,U=g;return v}function _(e,t){e||ft(0),vt("autoScrolling",e,t);t=ln(zt)[0];d.autoScrolling&&!d.scrollBar?(un(f,{overflow:"hidden",height:"100%"}),K(I.recordHistory,"internal"),un(c,{"-ms-touch-action":"none","touch-action":"none"}),null!=t&&ft(t.offsetTop)):(un(f,{overflow:"visible",height:"initial"}),K(!!d.autoScrolling&&I.recordHistory,"internal"),un(c,{"-ms-touch-action":"","touch-action":""}),null!=t&&(t=ke(t.offsetTop)).element.scrollTo(0,t.options))}function K(e,t){vt("recordHistory",e,t)}function X(e,t){vt("scrollingSpeed",e,t)}function $(e,t){vt("fitToSection",e,t)}function q(e){e?(function(){var e,t="";yt.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in Et.createElement("div")?"wheel":void 0!==Et.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!O&&{passive:!1};"DOMMouseScroll"==n?Et[e](t+"MozMousePixelScroll",we,o):Et[e](t+n,we,o)}(),c.addEventListener("mousedown",Ve),c.addEventListener("mouseup",We)):(Et.addEventListener?(Et.removeEventListener("mousewheel",we,!1),Et.removeEventListener("wheel",we,!1),Et.removeEventListener("MozMousePixelScroll",we,!1)):Et.detachEvent("onmousewheel",we),c.removeEventListener("mousedown",Ve),c.removeEventListener("mouseup",We))}function Q(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){pt(t,e,"m")}):pt(t,"all","m")}function G(e){var t;e?(q(!0),(o||i)&&(d.autoScrolling&&(p.removeEventListener(k.touchmove,he,{passive:!1}),p.addEventListener(k.touchmove,he,{passive:!1})),(t=d.touchWrapper).removeEventListener(k.touchstart,be),t.removeEventListener(k.touchmove,ge,{passive:!1}),t.addEventListener(k.touchstart,be),t.addEventListener(k.touchmove,ge,{passive:!1}))):(q(!1),(o||i)&&(d.autoScrolling&&(p.removeEventListener(k.touchmove,ge,{passive:!1}),p.removeEventListener(k.touchmove,he,{passive:!1})),(t=d.touchWrapper).removeEventListener(k.touchstart,be),t.removeEventListener(k.touchmove,ge,{passive:!1})))}function J(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){pt(t,e,"k")}):(pt(t,"all","k"),d.keyboardScrolling=t)}function Z(){var e=fn(ln(zt)[0],Rt);e||!d.loopTop&&!d.continuousVertical||(e=hn(ln(Rt))),null!=e&&Le(e,null,!0)}function ee(){var e=dn(ln(zt)[0],Rt);e||!d.loopBottom&&!d.continuousVertical||(e=ln(Rt)[0]),null!=e&&Le(e,null,!1)}function te(e,t){X(0,"internal"),ne(e,t),X(I.scrollingSpeed,"internal")}function ne(e,t){var n=nt(e);void 0!==t?ot(e,t):null!=n&&Le(n)}function oe(e){ye("right",e)}function re(e){ye("left",e)}function ie(e){if(!sn(c,kt)){m=!0,g=cn();for(var t=ln(Rt),n=0;n<t.length;++n){var o=t[n],r=ln(Xt,o)[0],i=ln(Ut,o);d.verticalCentered&&un(ln(Nt,o),{height:et(o)+"px"}),un(o,{height:g+"px"}),1<i.length&&_e(r,ln(_t,r)[0])}d.scrollOverflow&&w.createScrollBarForAll();var l=gn(ln(zt)[0],Rt);l&&te(l+1),m=!1,Hn(d.afterResize)&&e&&d.afterResize.call(c,yt.innerWidth,yt.innerHeight),Hn(d.afterReBuild)&&!e&&d.afterReBuild.call(c)}}function le(e){var t=sn(p,At);e?t||(_(!1,"internal"),$(!1,"internal"),mn(ln(Wt)),Sn(p,At),Hn(d.afterResponsive)&&d.afterResponsive.call(c,e),d.scrollOverflow&&w.createScrollBarForAll()):t&&(_(I.autoScrolling,"internal"),$(I.autoScrolling,"internal"),bn(ln(Wt)),wn(p,At),Hn(d.afterResponsive)&&d.afterResponsive.call(c,e))}function ae(e){var t=e.target;t&&An(t,Wt+" a")?function(e){Cn(e);e=gn(An(this,Wt+" li"));Le(ln(Rt)[e])}.call(t,e):Bn(t,".fp-tooltip")?function(){In(pn(this),"click")}.call(t):Bn(t,en)?function(){var e=An(this,Rt);sn(this,tn)?S.m.left&&re(e):S.m.right&&oe(e)}.call(t,e):Bn(t,Zt)||null!=An(t,Zt)?function(e){Cn(e);var t=ln(Xt,An(this,Rt))[0],e=ln(Ut,t)[gn(An(this,"li"))];_e(t,e)}.call(t,e):An(t,d.menu+" [data-menuanchor]")&&function(e){!ln(d.menu)[0]||!d.lockAnchors&&d.anchors.length||(Cn(e),ne(this.getAttribute("data-menuanchor")))}.call(t,e)}function se(e,t){Et["fp_"+e]=t,Et.addEventListener(e,ce,!0)}function ce(t){t.target!=Et&&("touchend"===t.type&&(R=!1,setTimeout(function(){R=!0},800)),"mouseenter"===t.type&&!R||d.normalScrollElements.split(",").forEach(function(e){null!=An(t.target,e)&&G(Et["fp_"+t.type])}))}function ue(e,t){return d.navigationTooltips[e]||d.anchors[e]||t+" "+(e+1)}function fe(){var e,t=ln(zt)[0];Sn(t,It),Ce(t),He(t),d.scrollOverflow&&d.scrollOverflowHandler.afterLoad(),(!(e=nt(Ne().section))||void 0!==e&&gn(e)===gn(l))&&Hn(d.afterLoad)&&xe("afterLoad",{activeSection:null,element:t,direction:null,anchorLink:t.getAttribute("data-anchor"),sectionIndex:gn(t,Rt)}),Hn(d.afterRender)&&xe("afterRender")}function de(){if(!d.autoScrolling||d.scrollBar){var e,t,n,o,r,i=Mn(),l=(t=j<(e=i)?"down":"up",F=j=e,t),a=0,s=i+cn()/2,c=p.offsetHeight-cn()===i,u=ln(Rt);if(c)a=u.length-1;else if(i)for(var f=0;f<u.length;++f)u[f].offsetTop<=s&&(a=f);else a=0;n=l,e=ln(zt)[0].offsetTop,t=e+cn(),("up"!=n?e<=Mn():t>=Mn()+cn())&&(sn(ln(zt)[0],It)||(Sn(ln(zt)[0],It),wn(On(ln(zt)[0]),It))),sn(c=u[a],Ct)||(z=!0,l=gn(i=ln(zt)[0],Rt)+1,n=Je(c),e=c.getAttribute("data-anchor"),l={activeSection:i,sectionIndex:(t=gn(c,Rt)+1)-1,anchorLink:e,element:c,leavingSection:l,direction:n},(n=ln(_t,c)[0])&&(r=n.getAttribute("data-anchor"),o=gn(n)),b&&(Sn(c,Ct),wn(On(c),Ct),Hn(d.onLeave)&&xe("onLeave",l),Hn(d.afterLoad)&&xe("afterLoad",l),Be(i),Ce(c),He(c),Ge(e,t-1),d.anchors.length&&(h=e),it(o,r,e)),clearTimeout(x),x=setTimeout(function(){z=!1},100)),d.fitToSection&&(clearTimeout(A),A=setTimeout(function(){d.fitToSection&&ln(zt)[0].offsetHeight<=g&&pe()},d.fitToSectionDelay))}}function pe(){b&&(m=!0,Le(ln(zt)[0]),m=!1)}function ve(e){if(S.m[e]){var t="down"===e?ee:Z;if(d.scrollOverflow){var n=d.scrollOverflowHandler.scrollable(ln(zt)[0]),e="down"===e?"bottom":"top";if(null!=n){if(!d.scrollOverflowHandler.isScrolled(e,n))return 1;t()}else t()}else t()}}function he(e){d.autoScrolling&&me(e)&&S.m.up&&Cn(e)}function ge(e){var t=An(e.target,Rt)||ln(zt)[0];me(e)&&(d.autoScrolling&&Cn(e),e=ct(e),D=e.y,V=e.x,ln(Xt,t).length&&Math.abs(P-V)>Math.abs(N-D)?!a&&Math.abs(P-V)>yt.innerWidth/100*d.touchSensitivity&&(V<P?S.m.right&&oe(t):S.m.left&&re(t)):d.autoScrolling&&b&&Math.abs(N-D)>yt.innerHeight/100*d.touchSensitivity&&(D<N?ve("down"):N<D&&ve("up")))}function me(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function be(e){d.fitToSection&&(H=!1),me(e)&&(e=ct(e),N=e.y,P=e.x)}function Se(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function we(e){var t=(new Date).getTime(),n=sn(ln(".fp-completely")[0],Dt);if(!S.m.down&&!S.m.up)return Cn(e),!1;if(d.autoScrolling&&!s&&!n){var o=(e=e||yt.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),n=void 0!==e.wheelDeltaX||void 0!==e.deltaX,n=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!n;149<u.length&&u.shift(),u.push(Math.abs(o)),d.scrollBar&&Cn(e);e=t-W;return W=t,200<e&&(u=[]),b&&(e=Se(u,10),Se(u,70)<=e&&n&&ve(r<0?"down":"up")),!1}d.fitToSection&&(H=!1)}function ye(e,t){var n=null==t?ln(zt)[0]:t,o=ln(Xt,n)[0];if(!(null==o||a||ln(Ut,o).length<2)){t=ln(_t,o)[0],n=null;if(null==(n=("left"===e?fn:dn)(t,Ut))){if(!d.loopHorizontal)return;t=On(t),n="left"===e?t[t.length-1]:t[0]}a=!v.test.isTesting,_e(o,n,e)}}function Ee(){for(var e=ln(_t),t=0;t<e.length;t++)ut(e[t],"internal")}function Le(e,t,n){if(null!=e){var o,r,i,l,a,s,c,t={element:e,callback:t,isMovementUp:n,dtop:(r=(o=e).offsetHeight,u=l=o.offsetTop,i=F<l,t=u-g+r,l=d.bigSectionsDestination,g<r?(i||l)&&"bottom"!==l||(u=t):(i||m&&null==vn(o))&&(u=t),F=u),yMovement:Je(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:gn(e,Rt),activeSlide:ln(_t,e)[0],activeSection:ln(zt)[0],leavingSection:gn(ln(zt),Rt)+1,localIsResizing:m};if(!(t.activeSection==e&&!m||d.scrollBar&&Mn()===t.dtop&&!sn(e,Pt))){if(null!=t.activeSlide&&(c=t.activeSlide.getAttribute("data-anchor"),a=gn(t.activeSlide)),!t.localIsResizing){var u=t.yMovement;if(void 0!==n&&(u=n?"up":"down"),t.direction=u,Hn(d.onLeave)&&!1===xe("onLeave",t))return}d.autoScrolling&&d.continuousVertical&&void 0!==t.isMovementUp&&(!t.isMovementUp&&"up"==t.yMovement||t.isMovementUp&&"down"==t.yMovement)&&(t=function(e){e.isMovementUp?kn(ln(zt)[0],Nn(e.activeSection,Rt)):Tn(ln(zt)[0],Pn(e.activeSection,Rt).reverse());return ft(ln(zt)[0].offsetTop),Ee(),e.wrapAroundElements=e.activeSection,e.dtop=e.element.offsetTop,e.yMovement=Je(e.element),e.leavingSection=gn(e.activeSection,Rt)+1,e.sectionIndex=gn(e.element,Rt),e}(t)),t.localIsResizing||Be(t.activeSection),d.scrollOverflow&&d.scrollOverflowHandler.beforeLeave(),Sn(e,Ct),wn(On(e),Ct),Ce(e),d.scrollOverflow&&d.scrollOverflowHandler.onLeave(),b=v.test.isTesting,it(a,c,t.anchorLink,t.sectionIndex),s=t,d.css3&&d.autoScrolling&&!d.scrollBar?(tt("translate3d(0px, -"+Math.round(s.dtop)+"px, 0px)",!0),d.scrollingSpeed?(clearTimeout(E),E=setTimeout(function(){Me(s)},d.scrollingSpeed)):Me(s)):(c=ke(s.dtop),v.test.top=-s.dtop+"px",un(f,{"scroll-behavior":"unset"}),gt(c.element,c.options,d.scrollingSpeed,function(){d.scrollBar?setTimeout(function(){Me(s)},30):Me(s)})),h=t.anchorLink,Ge(t.anchorLink,t.sectionIndex)}}}function xe(e,t){var n,t=function(e,t){var n;n=d.v2compatible?{afterRender:function(){return[c]},onLeave:function(){return[t.activeSection,t.leavingSection,t.sectionIndex+1,t.direction]},afterLoad:function(){return[t.element,t.anchorLink,t.sectionIndex+1]},afterSlideLoad:function(){return[t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex]},onSlideLeave:function(){return[t.prevSlide,t.anchorLink,t.sectionIndex+1,t.prevSlideIndex,t.direction,t.slideIndex]}}:{afterRender:function(){return{section:Ae(ln(zt)[0]),slide:Te(ln(_t,ln(zt)[0])[0])}},onLeave:function(){return{origin:Ae(t.activeSection),destination:Ae(t.element),direction:t.direction}},afterLoad:function(){return n.onLeave()},afterSlideLoad:function(){return{section:Ae(t.section),origin:Te(t.prevSlide),destination:Te(t.destiny),direction:t.direction}},onSlideLeave:function(){return n.afterSlideLoad()}};return n[e]()}(e,t);if(d.v2compatible){if(!1===d[e].apply(t[0],t.slice(1)))return!1}else if(In(c,e,t),!1===d[e].apply(t[Object.keys(t)[0]],(n=t,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Ae(e){return e?new St(e):null}function Te(e){return e?new wt(e):null}function ke(e){var t={};return d.autoScrolling&&!d.scrollBar?(t.options=-e,t.element=ln(xt)[0]):(t.options=e,t.element=yt),t}function Me(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?kn(ln(Rt)[0],t.wrapAroundElements):Tn(ln(Rt)[ln(Rt).length-1],t.wrapAroundElements),ft(ln(zt)[0].offsetTop),Ee()),Hn(d.afterLoad)&&!e.localIsResizing&&xe("afterLoad",e),d.scrollOverflow&&d.scrollOverflowHandler.afterLoad(),e.localIsResizing||He(e.element),Sn(e.element,It),wn(On(e.element),It),b=!0,Hn(e.callback)&&e.callback()}function Oe(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function Ce(e){d.lazyLoading&&ln("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",Re(e)).forEach(function(n){var e;["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&Oe(n,e)}),!Bn(n,"source")||(e=An(n,"video, audio"))&&e.load()})}function He(e){e=Re(e);ln("video, audio",e).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),ln('iframe[src*="youtube.com/embed/"]',e).forEach(function(e){e.hasAttribute("data-autoplay")&&Ie(e),e.onload=function(){e.hasAttribute("data-autoplay")&&Ie(e)}})}function Ie(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Be(e){e=Re(e);ln("video, audio",e).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),ln('iframe[src*="youtube.com/embed/"]',e).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Re(e){var t=ln(_t,e);return t.length&&(e=t[0]),e}function ze(){var e=Ne(),t=e.section,e=e.slide;t&&(d.animateAnchor?ot:te)(t,e)}function je(){var e,t,n,o;z||d.lockAnchors||(e=(o=Ne()).section,t=o.slide,o=(n=void 0===h)&&void 0===t&&!a,e&&e.length&&(e&&e!==h&&!n||o||!a&&r!=t)&&ot(e,t))}function Ne(){var e,t,n,o=yt.location.hash;return o.length&&(n=o.replace("#","").split("/"),t=(o=-1<o.indexOf("#/"))?"/"+n[1]:decodeURIComponent(n[0]),(n=o?n[2]:n[1])&&n.length&&(e=decodeURIComponent(n))),{section:t,slide:e}}function Pe(e){clearTimeout(T);var t,n,o,r,i=Et.activeElement,l=e.keyCode;function a(e){return Cn(e),r[0]?r[0].focus():null}9===l?(n=(t=e).shiftKey,o=Et.activeElement,r=Fe(Re(ln(zt)[0])),function(e){var t=Fe(Et),n=t.indexOf(Et.activeElement),n=e.shiftKey?n-1:n+1,t=t[n],n=Te(An(t,Ut)),t=Ae(An(t,Rt));return!n&&!t}(t)||(o?null==An(o,zt+","+zt+" "+_t)&&(o=a(t)):a(t),(!n&&o==r[r.length-1]||n&&o==r[0])&&Cn(t))):Bn(i,"textarea")||Bn(i,"input")||Bn(i,"select")||"true"===i.getAttribute("contentEditable")||""===i.getAttribute("contentEditable")||!d.keyboardScrolling||!d.autoScrolling||(-1<[40,38,32,33,34].indexOf(l)&&Cn(e),s=e.ctrlKey,T=setTimeout(function(){!function(e){var t=e.shiftKey;if(b||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:S.k.up&&Z();break;case 32:if(t&&S.k.up){Z();break}case 40:case 34:S.k.down&&ee();break;case 36:S.k.up&&ne(1);break;case 35:S.k.down&&ne(ln(Rt).length);break;case 37:S.k.left&&re();break;case 39:S.k.right&&oe();break;default:;}}(e)},150))}function De(e){t&&(s=e.ctrlKey)}function Ve(e){2==e.which&&(Y=e.pageY,c.addEventListener("mousemove",Ue))}function We(e){2==e.which&&c.removeEventListener("mousemove",Ue)}function Fe(e){return[].slice.call(ln(M,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function Ye(){s=t=!1}function Ue(e){b&&(e.pageY<Y&&S.m.up?Z():e.pageY>Y&&S.m.down&&ee()),Y=e.pageY}function _e(e,t,n){var o,r,i=An(e,Rt),n={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:gn(t),section:i,sectionIndex:gn(i,Rt),anchorLink:i.getAttribute("data-anchor"),slidesNav:ln(Jt,i)[0],slideAnchor:at(t),prevSlide:ln(_t,i)[0],prevSlideIndex:gn(ln(_t,i)[0]),localIsResizing:m};n.xMovement=function(e,t){if(e==t)return"none";if(t<e)return"left";return"right"}(n.prevSlideIndex,n.slideIndex),n.direction=n.direction||n.xMovement,n.localIsResizing||(b=!1),d.onSlideLeave&&!n.localIsResizing&&"none"!==n.xMovement&&Hn(d.onSlideLeave)&&!1===xe("onSlideLeave",n)?a=!1:(Sn(t,Ct),wn(On(t),Ct),n.localIsResizing||(Be(n.prevSlide),Ce(t)),!d.loopHorizontal&&d.controlArrows&&(Rn(ln(nn,i),0!==n.slideIndex),Rn(ln(on,i),null!=vn(t))),sn(i,Ct)&&!n.localIsResizing&&it(n.slideIndex,n.slideAnchor,n.anchorLink,n.sectionIndex),i=e,r=!0,e=(o=n).destinyPos,d.css3?(n="translate3d(-"+Math.round(e.left)+"px, 0px, 0px)",v.test.translate3dH[o.sectionIndex]=n,un(qe(ln(qt,i)),dt(n)),L=setTimeout(function(){r&&Ke(o)},d.scrollingSpeed)):(v.test.left[o.sectionIndex]=Math.round(e.left),gt(i,Math.round(e.left),d.scrollingSpeed,function(){r&&Ke(o)})))}function Ke(e){var t,n;t=e.slidesNav,n=e.slideIndex,d.slidesNavigation&&null!=t&&(wn(ln(Ht,t),Ct),Sn(ln("a",ln("li",t)[n]),Ct)),e.localIsResizing||(Hn(d.afterSlideLoad)&&xe("afterSlideLoad",e),b=!0,He(e.destiny)),a=!1}function Xe(){var e,t;$e(),o?Bn(e=Et.activeElement,"textarea")||Bn(e,"input")||Bn(e,"select")||(t=cn(),Math.abs(t-U)>20*Math.max(U,t)/100&&(y=setTimeout(function(){ie(!0),U=t},navigator.userAgent.match("CriOS")?50:0))):(clearTimeout(y),y=setTimeout(function(){ie(!0)},350))}function $e(){var e=d.responsive||d.responsiveWidth,t=d.responsiveHeight,n=e&&yt.innerWidth<e,o=t&&yt.innerHeight<t;e&&t?le(n||o):e?le(n):t&&le(o)}function qe(e){var t="all "+d.scrollingSpeed+"ms "+d.easingcss3;return wn(e,Tt),un(e,{"-webkit-transition":t,transition:t})}function Qe(e){return Sn(e,Tt)}function Ge(e,t){var n;n=e,ln(d.menu).forEach(function(e){d.menu&&null!=e&&(wn(ln(Ht,e),Ct),Sn(ln('[data-menuanchor="'+n+'"]',e),Ct))}),e=e,t=t,d.navigation&&null!=ln(Wt)[0]&&(wn(ln(Ht,ln(Wt)[0]),Ct),Sn(e?ln('a[href="#'+e+'"]',ln(Wt)[0]):ln("a",ln("li",ln(Wt)[0])[t]),Ct))}function Je(e){var t=gn(ln(zt)[0],Rt),e=gn(e,Rt);return t==e?"none":e<t?"up":"down"}function Ze(e){var t;sn(e,Qt)||((t=Et.createElement("div")).className=jt,t.style.height=et(e)+"px",Sn(e,Qt),Ln(e,t))}function et(e){var t,n=g;return(d.paddingTop||d.paddingBottom)&&(sn(t=e,Bt)||(t=An(e,Rt)),t=parseInt(getComputedStyle(t)["padding-top"])+parseInt(getComputedStyle(t)["padding-bottom"]),n=g-t),n}function tt(e,t){(t?qe:Qe)(c),un(c,dt(e)),v.test.translate3d=e,setTimeout(function(){wn(c,Tt)},10)}function nt(e){var t=ln(Rt+'[data-anchor="'+e+'"]',c)[0];return t||(e=void 0!==e?e-1:0,t=ln(Rt)[e]),t}function ot(e,t){var n,o,r=nt(e);null!=r&&(null==(t=ln(Ut+'[data-anchor="'+(o=t)+'"]',e=r)[0])&&(o=void 0!==o?o:0,t=ln(Ut,e)[o]),n=t,at(r)===h||sn(r,Ct)?rt(n):Le(r,function(){rt(n)}))}function rt(e){null!=e&&_e(An(e,Xt),e)}function it(e,t,n){var o="";d.anchors.length&&!d.lockAnchors&&(e?(null!=n&&(o=n),null==t&&(t=e),lt(o+"/"+(r=t))):(null!=e&&(r=t),lt(n))),st()}function lt(e){var t;d.recordHistory?location.hash=e:o||i?yt.history.replaceState(void 0,void 0,"#"+e):(t=yt.location.href.split("#")[0],yt.location.replace(t+"#"+e))}function at(e){if(!e)return null;var t=e.getAttribute("data-anchor"),e=gn(e);return null==t&&(t=e),t}function st(){var e=ln(zt)[0],t=ln(_t,e)[0],n=at(e),e=at(t),n=String(n);t&&(n=n+"-"+e),n=n.replace("/","-").replace("#","");e=new RegExp("\\b\\s?"+Ot+"-[^\\s]+\\b","g");p.className=p.className.replace(e,""),Sn(p,Ot+"-"+n)}function ct(e){var t=[];return t.y=(void 0!==e.pageY&&(e.pageY||e.pageX)?e:e.touches[0]).pageY,t.x=(void 0!==e.pageX&&(e.pageY||e.pageX)?e:e.touches[0]).pageX,i&&me(e)&&d.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function ut(e,t){X(0,"internal"),void 0!==t&&(m=!0),_e(An(e,Xt),e),void 0!==t&&(m=!1),X(I.scrollingSpeed,"internal")}function ft(e){e=Math.round(e);d.css3&&d.autoScrolling&&!d.scrollBar?tt("translate3d(0px, -"+e+"px, 0px)",!1):d.autoScrolling&&!d.scrollBar?(un(c,{top:-e+"px"}),v.test.top=-e+"px"):mt((e=ke(e)).element,e.options)}function dt(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function pt(t,e,n){"all"!==e?S[n][e]=t:Object.keys(S[n]).forEach(function(e){S[n][e]=t})}function vt(e,t,n){d[e]=t,"internal"!==n&&(I[e]=t)}function ht(){var e=d.licenseKey,t="font-size: 15px;background:yellow;";n?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(rn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),rn("error","https://github.com/alvarotrigo/fullPage.js#options."));sn(ln("html"),Mt)?rn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(d.continuousVertical&&(d.loopTop||d.loopBottom)&&(d.continuousVertical=!1,rn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!d.scrollOverflow||!d.scrollBar&&d.autoScrolling||rn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!d.continuousVertical||!d.scrollBar&&d.autoScrolling||(d.continuousVertical=!1,rn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),d.scrollOverflow&&null==d.scrollOverflowHandler&&(d.scrollOverflow=!1,rn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax","cards"].forEach(function(e){d[e]&&rn("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)}),d.anchors.forEach(function(t){var e=[].slice.call(ln("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(ln("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});(n.length||e.length)&&(rn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),n.length&&rn("error",'"'+t+'" is is being used by another element `id` property'),e.length&&rn("error",'"'+t+'" is is being used by another element `name` property'))}))}function gt(t,n,o,r){var e,i=e=(e=t).self!=yt&&sn(e,Kt)?e.scrollLeft:!d.autoScrolling||d.scrollBar?Mn():e.offsetTop,l=n-i,a=0;H=!0;var s=function(){var e;H?(e=n,a+=20,o&&(e=yt.fp_easings[d.easing](a,i,l,o)),mt(t,e),a<o?setTimeout(s,20):void 0!==r&&r()):a<o&&r()};s()}function mt(e,t){!d.autoScrolling||d.scrollBar||e.self!=yt&&sn(e,Kt)?e.self!=yt&&sn(e,Kt)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function bt(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=gn(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function St(e){bt.call(this,e,Rt)}function wt(e){bt.call(this,e,Ut)}ht()}}),window.jQuery&&window.fullpage&&function(t,n){"use strict";t&&n?t.fn.fullpage=function(e){e.$=t,new n(this[0],e)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);