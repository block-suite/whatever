!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e){e.exports=JSON.parse('{"name":"sortabrilliant/whatever","category":"embed","attributes":{"content":{"type":"string","source":"html","selector":".wp-block-whatever"}}}')},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r=function(){function e(){}function t(e,t){for(var r=t.length,n=0;n<r;++n)o(e,t[n])}e.prototype=Object.create(null);var r={}.hasOwnProperty;var n=/\s+/;function o(e,o){if(o){var a=typeof o;"string"===a?function(e,t){for(var r=t.split(n),o=r.length,a=0;a<o;++a)e[r[a]]=!0}(e,o):Array.isArray(o)?t(e,o):"object"===a?function(e,t){for(var n in t)r.call(t,n)&&(e[n]=!!t[n])}(e,o):"number"===a&&function(e,t){e[t]=!0}(e,o)}}return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var a=new e;t(a,n);var c=[];for(var i in a)a[i]&&c.push(i);return c.join(" ")}}();e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},,,function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(1),a=Object(n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},Object(n.createElement)(o.Path,{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"})),c=r(3),i=r.n(c),u=r(4),l=r.n(u),s=[{ratio:"2.33",className:"wp-embed-aspect-21-9"},{ratio:"2.00",className:"wp-embed-aspect-18-9"},{ratio:"1.78",className:"wp-embed-aspect-16-9"},{ratio:"1.33",className:"wp-embed-aspect-4-3"},{ratio:"1.00",className:"wp-embed-aspect-1-1"},{ratio:"0.56",className:"wp-embed-aspect-9-16"},{ratio:"0.50",className:"wp-embed-aspect-1-2"}];function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=document.implementation.createHTMLDocument("");r.body.innerHTML=e;var n=r.body.querySelector("iframe");if(n&&n.height&&n.width)for(var o=(n.width/n.height).toFixed(2),a=0;a<s.length;a++){var c,u=s[a];if(o>=u.ratio)return l()(t,(c={},i()(c,u.className,!0),i()(c,"wp-has-aspect-ratio",!0),c))}return t}var p=r(5);var b=r(2),m=r(6),d=b.name,v=b.category,h=b.attributes;Object(m.registerBlockType)(d,{title:"Whatever",description:"With Whatever you can embed whatever you want in your WordPress site.",keywords:["embed"],supports:{align:!0,alignWide:!0,customClassName:!1,className:!1,html:!1},icon:a,category:v,attributes:h,edit:function(e){var t=e.attributes,r=e.isSelected,a=e.setAttributes,c=f(t.content,"wp-block-whatever");return Object(n.createElement)("div",{className:c},Object(n.createElement)(o.Disabled.Consumer,null,(function(e){return!r||e?Object(n.createElement)(o.SandBox,{html:t.content}):Object(n.createElement)(p.PlainText,{value:t.content,onChange:function(e){return a({content:e})},placeholder:"Insert your embed code here","aria-label":"HTML"})})))},save:function(e){var t=e.attributes,r=f(t.content,"wp-block-whatever");return Object(n.createElement)("div",{className:r},Object(n.createElement)(n.RawHTML,null,t.content))}})}]);