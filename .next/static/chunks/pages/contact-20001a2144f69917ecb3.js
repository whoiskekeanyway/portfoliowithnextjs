_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"8OQS":function(t,e){t.exports=function(t,e){if(null==t)return{};var i,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}},ALdH:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return l}));var n=i("nKUr"),o=i("MX0m"),a=i.n(o),r=(i("q1tI"),i("YFqc")),c=i.n(r),s=i("Aiso"),d=i.n(s);function l(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("header",{className:"jsx-2371891279",children:[Object(n.jsx)(a.a,{id:"3499425097",children:["ul.jsx-2371891279{list-style-type:none;margin-right:2rem;}",'a.jsx-2371891279{float:right;color:blue;text-align:center;padding:10px;-webkit-text-decoration:none;text-decoration:none;font-size:20px;line-height:35px;border-radius:4px;display:block;font-family:"Roboto",sans-;}',"header.jsx-2371891279{overflow:hidden;background-color:lightblue;position:fixed;top:0;width:100%;float:right;padding:5px 5px;}"]}),Object(n.jsx)(a.a,{id:"3181383631",children:["body{background:lightblue;}",".contact{text-align:center;padding:5%;}"]}),Object(n.jsx)("nav",{className:"jsx-2371891279",children:Object(n.jsxs)("ul",{className:"jsx-2371891279",children:[Object(n.jsx)(c.a,{href:"/contact",children:Object(n.jsx)("a",{className:"jsx-2371891279",children:"Contact"})}),Object(n.jsx)(c.a,{href:"/projects",children:Object(n.jsx)("a",{className:"jsx-2371891279",children:"Projects"})}),Object(n.jsx)(c.a,{href:"/about",children:Object(n.jsx)("a",{className:"jsx-2371891279",children:"About Me"})}),Object(n.jsx)(c.a,{href:"/",children:Object(n.jsx)("a",{className:"jsx-2371891279",children:"Home"})})]})})]}),Object(n.jsx)("div",{className:"contact",children:Object(n.jsx)(d.a,{src:"/static/contact.svg",alt:"contact",width:500,height:500})}),Object(n.jsx)("h2",{children:"Need a web developer ?"}),Object(n.jsx)("p",{children:"Let`s work together "}),Object(n.jsxs)("div",{class:"contact-links",children:[Object(n.jsxs)("a",{id:"profile-link",href:"https://www.github.com/whoiskekeanyway",target:"_blank",class:"btn contact-details",children:[Object(n.jsx)("i",{class:"fab fa-github"})," GitHub"]}),Object(n.jsxs)("a",{href:"https://twitter.com/whoiskekeanyway",target:"_blank",class:"btn contact-details",children:[Object(n.jsx)("i",{class:"fab fa-twitter"})," Twitter"]}),Object(n.jsxs)("a",{href:"mailto:whoiskekeanyway@outlook.com",class:"btn contact-details",children:[Object(n.jsx)("i",{class:"fas fa-at"})," Send a mail"]})]})]})}},Aiso:function(t,e,i){t.exports=i("dQHF")},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,i){var n=i("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},RIqP:function(t,e,i){var n=i("Ijbi"),o=i("EbDI"),a=i("ZhPi"),r=i("Bnag");t.exports=function(t){return n(t)||o(t)||a(t)||r()}},UWYU:function(t,e,i){"use strict";e.__esModule=!0,e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},dEHY:function(t,e,i){"use strict";e.__esModule=!0,e.toBase64=function(t){return window.btoa(t)}},dQHF:function(t,e,i){"use strict";var n=i("J4zp"),o=i("RIqP"),a=i("TqRt");e.__esModule=!0,e.default=function(t){var e=t.src,i=t.sizes,a=t.unoptimized,c=void 0!==a&&a,l=t.priority,f=void 0!==l&&l,h=t.loading,p=t.className,x=t.quality,g=t.width,y=t.height,v=t.objectFit,A=t.objectPosition,O=(0,r.default)(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition"]),k=i?"responsive":"intrinsic",_=!1;"unsized"in O?(_=Boolean(O.unsized),delete O.unsized):"layout"in O&&(O.layout&&(k=O.layout),delete O.layout);0;var z=!f&&("lazy"===h||"undefined"===typeof h);e&&e.startsWith("data:")&&(c=!0,z=!1);var S,E,N,q=(0,u.useIntersection)({rootMargin:"200px",disabled:!z}),I=n(q,2),L=I[0],D=I[1],P=!z||D,H=w(g),R=w(y),B=w(x),W={visibility:P?"visible":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:v,objectPosition:A};if("undefined"!==typeof H&&"undefined"!==typeof R&&"fill"!==k){var M=R/H,U=isNaN(M)?"100%":"".concat(100*M,"%");"responsive"===k?(S={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},E={display:"block",boxSizing:"border-box",paddingTop:U}):"intrinsic"===k?(S={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},E={boxSizing:"border-box",display:"block",maxWidth:"100%"},N='<svg width="'.concat(H,'" height="').concat(R,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===k&&(S={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:H,height:R})}else"undefined"===typeof H&&"undefined"===typeof R&&"fill"===k&&(S={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var F={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"};P&&(F=function(t){var e=t.src,i=t.unoptimized,n=t.layout,a=t.width,r=t.quality,c=t.sizes;if(i)return{src:e};var s=function(t,e){if("number"!==typeof t||"fill"===e||"responsive"===e)return{widths:b,kind:"w"};return{widths:o(new Set([t,2*t,3*t].map((function(t){return j.find((function(e){return e>=t}))||j[j.length-1]})))),kind:"x"}}(a,n),d=s.widths,l=s.kind,u=d.length-1,f=d.map((function(t,i){return"".concat(m({src:e,quality:r,width:t})," ").concat("w"===l?t:i+1).concat(l)})).join(", ");c||"w"!==l||(c=d.map((function(t,e){return e===u?"".concat(t,"px"):"(max-width: ".concat(t,"px) ").concat(t,"px")})).join(", "));return{src:e=m({src:e,quality:r,width:d[u]}),sizes:c,srcSet:f}}({src:e,unoptimized:c,layout:k,width:H,quality:B,sizes:i}));_&&(S=void 0,E=void 0,W=void 0);return s.default.createElement("div",{style:S},E?s.default.createElement("div",{style:E},N?s.default.createElement("img",{style:{maxWidth:"100%",display:"block"},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,d.toBase64)(N))}):null):null,s.default.createElement("img",Object.assign({},O,F,{decoding:"async",className:p,ref:L,style:W})))};var r=a(i("8OQS")),c=a(i("pVnL")),s=a(i("q1tI")),d=i("dEHY"),l=i("UWYU"),u=i("vNVm");var f=new Map([["imgix",function(t){var e=t.root,i=t.src,n=t.width,o=t.quality,a=["auto=format","fit=max","w="+n],r="";o&&a.push("q="+o);a.length&&(r="?"+a.join("&"));return"".concat(e).concat(y(i)).concat(r)}],["cloudinary",function(t){var e=t.root,i=t.src,n=t.width,o=t.quality,a=["f_auto","c_limit","w_"+n],r="";o&&a.push("q_"+o);a.length&&(r=a.join(",")+"/");return"".concat(e).concat(r).concat(y(i))}],["akamai",function(t){var e=t.root,i=t.src,n=t.width;return"".concat(e).concat(y(i),"?imwidth=").concat(n)}],["default",function(t){var e=t.root,i=t.src,n=t.width,o=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}]]),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||l.imageConfigDefault,b=h.deviceSizes,p=h.imageSizes,x=h.loader,g=h.path,j=(h.domains,[].concat(o(b),o(p)));function m(t){var e=f.get(x);if(e)return e((0,c.default)({root:g},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(x))}function w(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function y(t){return"/"===t[0]?t.slice(1):t}b.sort((function(t,e){return t-e})),j.sort((function(t,e){return t-e}))},lqnA:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return i("ALdH")}])},pVnL:function(t,e){function i(){return t.exports=i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},i.apply(this,arguments)}t.exports=i}},[["lqnA",0,2,1,3]]]);