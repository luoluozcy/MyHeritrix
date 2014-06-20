/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test("聽")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
	$.cookie = function(key, value, options) {

		// key and at least value given, set cookie...
		if (arguments.length > 1
				&& (!/Object/.test(Object.prototype.toString.call(value))
						|| value === null || value === undefined)) {
			options = $.extend({}, options);

			if (value === null || value === undefined) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = String(value);

			return (document.cookie = [
					encodeURIComponent(key),
					'=',
					options.raw ? value : encodeURIComponent(value),
					options.expires ? '; expires='
							+ options.expires.toUTCString() : '', // use
																	// expires
																	// attribute,
																	// max-age
																	// is not
																	// supported
																	// by IE
					options.path ? '; path=' + options.path : '',
					options.domain ? '; domain=' + options.domain : '',
					options.secure ? '; secure' : '' ].join(''));
		}

		// key and possibly options given, get cookie...
		options = value || {};
		var decode = options.raw ? function(s) {
			return s;
		} : decodeURIComponent;

		var pairs = document.cookie.split('; ');
		for ( var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
			if (decode(pair[0]) === key)
				return decode(pair[1] || ''); // IE saves cookies with empty
												// string as "c; ", e.g. without
												// "=" as opposed to EOMB, thus
												// pair[1] may be undefined
		}
		return null;
	};
})(jQuery);

/**
 * Boxy 0.1.4 - Facebook-style dialog, with frills
 *
 * (c) 2008 Jason Frame
 * Licensed under the MIT License (LICENSE)
 */
 
/*
 * jQuery plugin
 *
 * Options:
 *   message: confirmation message for form submit hook (default: "Please confirm:")
 * 
 * Any other options - e.g. 'clone' - will be passed onto the boxy constructor (or
 * Boxy.load for AJAX operations)
 */
jQuery.fn.boxy = function(options) {
    options = options || {};
    return this.each(function() {      
        var node = this.nodeName.toLowerCase(), self = this;
        if (node == 'a') {
            jQuery(this).click(function() {
                var active = Boxy.linkedTo(this),
                    href = this.getAttribute('href'),
                    localOptions = jQuery.extend({actuator: this, title: this.title}, options);
                    
                if (active) {
                    active.show();
                } else if (href.indexOf('#') >= 0) {
                    var content = jQuery(href.substr(href.indexOf('#'))),
                        newContent = content.clone(true);
                    content.remove();
                    localOptions.unloadOnHide = false;
                    new Boxy(newContent, localOptions);
                } else { // fall back to AJAX; could do with a same-origin check
                    if (!localOptions.cache) localOptions.unloadOnHide = true;
                    Boxy.load(this.href, localOptions);
                }
                
                return false;
            });
        } else if (node == 'form') {
            jQuery(this).bind('submit.boxy', function() {
                Boxy.confirm(options.message || 'Please confirm:', function() {
                    jQuery(self).unbind('submit.boxy').submit();
                });
                return false;
            });
        }
    });
};

//
// Boxy Class

function Boxy(element, options) {
    
    this.boxy = jQuery(Boxy.WRAPPER);
    jQuery.data(this.boxy[0], 'boxy', this);
    
    this.visible = false;
    this.options = jQuery.extend({}, Boxy.DEFAULTS, options || {});
    
    if (this.options.modal) {
        this.options = jQuery.extend(this.options, {center: true, draggable: false});
    }
    
    // options.actuator == DOM element that opened this boxy
    // association will be automatically deleted when this boxy is remove()d
    if (this.options.actuator) {
        jQuery.data(this.options.actuator, 'active.boxy', this);
    }
    
    this.setContent(element || "<div></div>");
    this._setupTitleBar();
    
    this.boxy.css('display', 'none').appendTo(document.body);
    this.toTop();

    if (this.options.fixed) {
        if (jQuery.browser.msie && jQuery.browser.version < 7) {
            this.options.fixed = false; // IE6 doesn't support fixed positioning
        } else {
            this.boxy.addClass('fixed');
        }
    }
    
    if (this.options.center && Boxy._u(this.options.x, this.options.y)) {
        this.center();
    } else {
        this.moveTo(
            Boxy._u(this.options.x) ? this.options.x : Boxy.DEFAULT_X,
            Boxy._u(this.options.y) ? this.options.y : Boxy.DEFAULT_Y
        );
    }
    
    if (this.options.show) this.show();

};

Boxy.EF = function() {};

jQuery.extend(Boxy, {
    
    WRAPPER:    "<table cellspacing='0' cellpadding='0' border='0' class='boxy-wrapper'>" +
                "<tr><td class='top-left'></td><td class='top'></td><td class='top-right'></td></tr>" +
                "<tr><td class='left'></td><td class='boxy-inner'></td><td class='right'></td></tr>" +
                "<tr><td class='bottom-left'></td><td class='bottom'></td><td class='bottom-right'></td></tr>" +
                "</table>",
    
    DEFAULTS: {
        title:                  null,           // titlebar text. titlebar will not be visible if not set.
        closeable:              false,           // display close link in titlebar?
        draggable:              true,           // can this dialog be dragged?
        clone:                  false,          // clone content prior to insertion into dialog?
        actuator:               null,           // element which opened this dialog
        center:                 true,           // center dialog in viewport?
        show:                   true,           // show dialog immediately?
        modal:                  false,          // make dialog modal?
        fixed:                  true,           // use fixed positioning, if supported? absolute positioning used otherwise
        closeText:              'X',      // text to use for default close link
        unloadOnHide:           false,          // should this dialog be removed from the DOM after being hidden?
        clickToFront:           false,          // bring dialog to foreground on any click (not just titlebar)?
        behaviours:             Boxy.EF,        // function used to apply behaviours to all content embedded in dialog.
        afterDrop:              Boxy.EF,        // callback fired after dialog is dropped. executes in context of Boxy instance.
        afterShow:              Boxy.EF,        // callback fired after dialog becomes visible. executes in context of Boxy instance.
        afterHide:              Boxy.EF,        // callback fired after dialog is hidden. executed in context of Boxy instance.
        beforeUnload:           Boxy.EF         // callback fired after dialog is unloaded. executed in context of Boxy instance.
    },
    
    DEFAULT_X:          50,
    DEFAULT_Y:          50,
    zIndex:             1337,
    dragConfigured:     false, // only set up one drag handler for all boxys
    resizeConfigured:   false,
    dragging:           null,
    
    // load a URL and display in boxy
    // url - url to load
    // options keys (any not listed below are passed to boxy constructor)
    //   type: HTTP method, default: GET
    //   cache: cache retrieved content? default: false
    //   filter: jQuery selector used to filter remote content
    load: function(url, options) {
        
        options = options || {};
        
        var ajax = {
            url: url, type: 'GET', dataType: 'html', cache: false, success: function(html) {
                html = jQuery(html);
                if (options.filter) html = jQuery(options.filter, html);
                new Boxy(html, options);
            }
        };
        
        jQuery.each(['type', 'cache'], function() {
            if (this in options) {
                ajax[this] = options[this];
                delete options[this];
            }
        });
        
        jQuery.ajax(ajax);
        
    },
    
    // allows you to get a handle to the containing boxy instance of any element
    // e.g. <a href='#' onclick='alert(Boxy.get(this));'>inspect!</a>.
    // this returns the actual instance of the boxy 'class', not just a DOM element.
    // Boxy.get(this).hide() would be valid, for instance.
    get: function(ele) {
        var p = jQuery(ele).parents('.boxy-wrapper');
        return p.length ? jQuery.data(p[0], 'boxy') : null;
    },
    
    // returns the boxy instance which has been linked to a given element via the
    // 'actuator' constructor option.
    linkedTo: function(ele) {
        return jQuery.data(ele, 'active.boxy');
    },
    
    // displays an alert box with a given message, calling optional callback
    // after dismissal.
    alert: function(message, callback, options) {
        return Boxy.ask(message, ['确定'], callback, options);
    },
    
    // displays an alert box with a given message, calling after callback iff
    // user selects OK.
    confirm: function(message, after, options) {
        return Boxy.ask(message, ['确定', '取消'], function(response) {
            if (response == '确定') after();
        }, options);
    },
    
    // asks a question with multiple responses presented as buttons
    // selected item is returned to a callback method.
    // answers may be either an array or a hash. if it's an array, the
    // the callback will received the selected value. if it's a hash,
    // you'll get the corresponding key.
    ask: function(question, answers, callback, options) {
        
        options = jQuery.extend({modal: true, closeable: false},
                                options || {},
                                {show: true, unloadOnHide: true});
        
        var body = jQuery('<div></div>').append(jQuery('<div class="question"></div>').html(question));
        
        // ick
        var map = {}, answerStrings = [];
        if (answers instanceof Array) {
            for (var i = 0; i < answers.length; i++) {
                map[answers[i]] = answers[i];
                answerStrings.push(answers[i]);
            }
        } else {
            for (var k in answers) {
                map[answers[k]] = k;
                answerStrings.push(answers[k]);
            }
        }
        
        var buttons = jQuery('<form class="answers"></form>');
        buttons.html(jQuery.map(answerStrings, function(v) {
            return "<input type='button' value='" + v + "' />";
        }).join(' '));
        
        jQuery('input[type=button]', buttons).click(function() {
            var clicked = this;
            Boxy.get(this).hide(function() {
                if (callback) callback(map[clicked.value]);
            });
        });
        
        body.append(buttons);
        
        new Boxy(body, options);
        
    },
    
    // returns true if a modal boxy is visible, false otherwise
    isModalVisible: function() {
        return jQuery('.boxy-modal-blackout').length > 0;
    },
    
    _u: function() {
        for (var i = 0; i < arguments.length; i++)
            if (typeof arguments[i] != 'undefined') return false;
        return true;
    },
    
    _handleResize: function(evt) {
        var d = jQuery(document);
        jQuery('.boxy-modal-blackout').css('display', 'none').css({
            width: d.width(), height: d.height()
        }).css('display', 'block');
    },
    
    _handleDrag: function(evt) {
        var d;
        if (d = Boxy.dragging) {
            d[0].boxy.css({left: evt.pageX - d[1], top: evt.pageY - d[2]});
        }
    },
    
    _nextZ: function() {
        return Boxy.zIndex++;
    },
    
    _viewport: function() {
        var d = document.documentElement, b = document.body, w = window;
        return jQuery.extend(
            jQuery.browser.msie ?
                { left: b.scrollLeft || d.scrollLeft, top: b.scrollTop || d.scrollTop } :
                { left: w.pageXOffset, top: w.pageYOffset },
            !Boxy._u(w.innerWidth) ?
                { width: w.innerWidth, height: w.innerHeight } :
                (!Boxy._u(d) && !Boxy._u(d.clientWidth) && d.clientWidth != 0 ?
                    { width: d.clientWidth, height: d.clientHeight } :
                    { width: b.clientWidth, height: b.clientHeight }) );
    }

});

Boxy.prototype = {
    
    // Returns the size of this boxy instance without displaying it.
    // Do not use this method if boxy is already visible, use getSize() instead.
    estimateSize: function() {
        this.boxy.css({visibility: 'hidden', display: 'block'});
        var dims = this.getSize();
        this.boxy.css('display', 'none').css('visibility', 'visible');
        return dims;
    },
                
    // Returns the dimensions of the entire boxy dialog as [width,height]
    getSize: function() {
        return [this.boxy.width(), this.boxy.height()];
    },
    
    // Returns the dimensions of the content region as [width,height]
    getContentSize: function() {
        var c = this.getContent();
        return [c.width(), c.height()];
    },
    
    // Returns the position of this dialog as [x,y]
    getPosition: function() {
        var b = this.boxy[0];
        return [b.offsetLeft, b.offsetTop];
    },
    
    // Returns the center point of this dialog as [x,y]
    getCenter: function() {
        var p = this.getPosition();
        var s = this.getSize();
        return [Math.floor(p[0] + s[0] / 2), Math.floor(p[1] + s[1] / 2)];
    },
                
    // Returns a jQuery object wrapping the inner boxy region.
    // Not much reason to use this, you're probably more interested in getContent()
    getInner: function() {
        return jQuery('.boxy-inner', this.boxy);
    },
    
    // Returns a jQuery object wrapping the boxy content region.
    // This is the user-editable content area (i.e. excludes titlebar)
    getContent: function() {
        return jQuery('.boxy-content', this.boxy);
    },
    
    // Replace dialog content
    setContent: function(newContent) {
        newContent = jQuery(newContent).css({display: 'block'}).addClass('boxy-content');
        if (this.options.clone) newContent = newContent.clone(true);
        this.getContent().remove();
        this.getInner().append(newContent);
        this._setupDefaultBehaviours(newContent);
        this.options.behaviours.call(this, newContent);
        return this;
    },
    
    // Move this dialog to some position, funnily enough
    moveTo: function(x, y) {
        this.moveToX(x).moveToY(y);
        return this;
    },
    
    // Move this dialog (x-coord only)
    moveToX: function(x) {
        if (typeof x == 'number') this.boxy.css({left: x});
        else this.centerX();
        return this;
    },
    
    // Move this dialog (y-coord only)
    moveToY: function(y) {
        if (typeof y == 'number') this.boxy.css({top: y});
        else this.centerY();
        return this;
    },
    
    // Move this dialog so that it is centered at (x,y)
    centerAt: function(x, y) {
        var s = this[this.visible ? 'getSize' : 'estimateSize']();
        if (typeof x == 'number') this.moveToX(x - s[0] / 2);
        if (typeof y == 'number') this.moveToY(y - s[1] / 2);
        return this;
    },
    
    centerAtX: function(x) {
        return this.centerAt(x, null);
    },
    
    centerAtY: function(y) {
        return this.centerAt(null, y);
    },
    
    // Center this dialog in the viewport
    // axis is optional, can be 'x', 'y'.
    center: function(axis) {
        var v = Boxy._viewport();
        var o = this.options.fixed ? [0, 0] : [v.left, v.top];
        if (!axis || axis == 'x') this.centerAt(o[0] + v.width / 2, null);
        if (!axis || axis == 'y') this.centerAt(null, o[1] + v.height / 2);
        return this;
    },
    
    // Center this dialog in the viewport (x-coord only)
    centerX: function() {
        return this.center('x');
    },
    
    // Center this dialog in the viewport (y-coord only)
    centerY: function() {
        return this.center('y');
    },
    
    // Resize the content region to a specific size
    resize: function(width, height, after) {
        if (!this.visible) return;
        var bounds = this._getBoundsForResize(width, height);
        this.boxy.css({left: bounds[0], top: bounds[1]});
        this.getContent().css({width: bounds[2], height: bounds[3]});
        if (after) after(this);
        return this;
    },
    
    // Tween the content region to a specific size
    tween: function(width, height, after) {
        if (!this.visible) return;
        var bounds = this._getBoundsForResize(width, height);
        var self = this;
        this.boxy.stop();
        this.getContent().stop().animate({width: bounds[2], height: bounds[3]}, function() {
            if (after) after(self);
        });
        return this;
    },
    
    // Returns true if this dialog is visible, false otherwise
    isVisible: function() {
        return this.visible;    
    },
    
    // Make this boxy instance visible
    show: function() {
		//debugger;
        if (this.visible) return;
        if (this.options.modal) {
            var self = this;
            if (!Boxy.resizeConfigured) {
                Boxy.resizeConfigured = true;
                jQuery(window).resize(function() { Boxy._handleResize(); });
            }
            this.modalBlackout = jQuery('<div class="boxy-modal-blackout"></div>')
                .css({zIndex: Boxy._nextZ(),
                      opacity: 0.6,
					  display: "none",
                      width: jQuery(document).width(),
                      height: jQuery(document).height()});
			this.modalBlackout.appendTo(document.body);
			

            this.toTop();
			this.modalBlackout.show();
            if (this.options.closeable) {
                jQuery(document.body).bind('keypress.boxy', function(evt) {
                    var key = evt.which || evt.keyCode;
                    if (key == 27) {
                        self.hide();
                        jQuery(document.body).unbind('keypress.boxy');
                    }
                });
            }
        }
        this.boxy.stop().css({opacity: 1}).show();
        this.visible = true;
        this._fire('afterShow');
        return this;
    },
    
    // Hide this boxy instance
    hide: function(after) {
        if (!this.visible) return;
        var self = this;
        if (this.options.modal) {
            jQuery(document.body).unbind('keypress.boxy');
            this.modalBlackout.remove();
        }
        this.boxy.stop();

		self.boxy.css({display: 'none'});
		self.visible = false;
		self._fire('afterHide');
		if (after) after(self);
		if (self.options.unloadOnHide) self.unload();

        return this;
    },
    
    toggle: function() {
        this[this.visible ? 'hide' : 'show']();
        return this;
    },
    
    hideAndUnload: function(after) {
        this.options.unloadOnHide = true;
        this.hide(after);
        return this;
    },
    
    unload: function() {
        this._fire('beforeUnload');
        this.boxy.remove();
        if (this.options.actuator) {
            jQuery.data(this.options.actuator, 'active.boxy', false);
        }
    },
    
    // Move this dialog box above all other boxy instances
    toTop: function() {
        this.boxy.css({zIndex: Boxy._nextZ()});
        return this;
    },
    
    // Returns the title of this dialog
    getTitle: function() {
        return jQuery('> .title-bar h2', this.getInner()).html();
    },
    
    // Sets the title of this dialog
    setTitle: function(t) {
        jQuery('> .title-bar h2', this.getInner()).html(t);
        return this;
    },
    
    //
    // Don't touch these privates
    
    _getBoundsForResize: function(width, height) {
        var csize = this.getContentSize();
        var delta = [width - csize[0], height - csize[1]];
        var p = this.getPosition();
        return [Math.max(p[0] - delta[0] / 2, 0),
                Math.max(p[1] - delta[1] / 2, 0), width, height];
    },
    
    _setupTitleBar: function() {
        if (this.options.title) {
            var self = this;
            var tb = jQuery("<div class='title-bar'></div>").html("<h2>" + this.options.title + "</h2>");
            if (this.options.closeable) {
                tb.append(jQuery("<a href='#' class='close'></a>").html(this.options.closeText));
            }
            if (this.options.draggable) {
                tb[0].onselectstart = function() { return false; }
                tb[0].unselectable = 'on';
                tb[0].style.MozUserSelect = 'none';
                if (!Boxy.dragConfigured) {
                    jQuery(document).mousemove(Boxy._handleDrag);
                    Boxy.dragConfigured = true;
                }
                tb.mousedown(function(evt) {
                    self.toTop();
                    Boxy.dragging = [self, evt.pageX - self.boxy[0].offsetLeft, evt.pageY - self.boxy[0].offsetTop];
                    jQuery(this).addClass('dragging');
                }).mouseup(function() {
                    jQuery(this).removeClass('dragging');
                    Boxy.dragging = null;
                    self._fire('afterDrop');
                });
            }
            this.getInner().prepend(tb);
            this._setupDefaultBehaviours(tb);
        }
    },
    
    _setupDefaultBehaviours: function(root) {
        var self = this;
        if (this.options.clickToFront) {
            root.click(function() { self.toTop(); });
        }
        jQuery('.close', root).click(function() {
            self.hide();
            return false;
        }).mousedown(function(evt) { evt.stopPropagation(); });
    },
    
    _fire: function(event) {
        this.options[event].call(this);
    }
    
};

/**
 * All global and core class objects.
 *
 * @copyright	2010, Blizzard Entertainment, Inc
 * @class		Core
 */

$(function() {
	Page.initialize();
	Input.initialize();
	App.initialize();
	Tickets.initialize();
	Flash.initialize();
	Locale.initialize();
	CharSelect.initialize();
	Core.initialize();
});

var Core = {

	/**
	 * Base context URL for the project.
	 */
	baseUrl: '/',

	/**
	 * Battle.net support site URL.
	 */
	supportUrl: '/support/',

	/**
	 * The cached string for the browser.
	 */
	browser: null,

	/**
	 * Dynamic load queue.
	 */
	deferredLoadQueue: [],

	/**
	 * Current locale.
	 */
	locale: 'en-us',

	/**
	 * Short date format
	 */
	shortDateFormat: 'MM/dd/Y',

	/**
	 * Date/time format
	 */
	dateTimeFormat: 'dd/MM/yyyy HH:mm',

	/**
	 * The current project.
	 */
	project: '',

	/**
	 * Path to static content.
	 */
	staticUrl: '/',
	sharedStaticUrl: '/local-common/',

	/**
	 * The current host and protocol.
	 */
	host: '',

	/**
	 * Initialize the script.
	 *
	 * @constructor
	 */
	initialize: function() {
		Core.processLoadQueue();
		Core.ui();
		Core.host = location.protocol +'//'+ (location.host || location.hostname);
	},

	/**
	 * Return letter (alphabet) values only within a string.
	 *
	 * @param string
	 * @return string
	 */
	alpha: function(string) {
		return string.replace(/[^a-zA-Z]/gi, '');
	},

	/**
	 * Create a frame within the document.
	 *
	 * @param url
	 * @param width
	 * @param height
	 * @param parent
	 * @param id
	 */
	appendFrame: function(url, width, height, parent, id) {
		if (typeof url === 'undefined')
			return;

		if (typeof width === 'undefined')
			width = 1;

		if (typeof height === 'undefined')
			height = 1;

		if (typeof parent === 'undefined')
			parent = $('body');

		if (Core.isIE())
			parent.append('<iframe src="' + url + '" width="' + width + '" height="' + height + '" scrolling="no" frameborder="0" allowTransparency="true"'+ ((typeof id != 'undefined') ? ' id="'+ id +'"' : '') +'></iframe>');
		else
			parent.append('<object type="text/html" data="' + url + '" width="' + width + '" height="' + height + '"'+ ((typeof id != 'undefined') ? ' id="'+ id +'"' : '') +'></object>');
	},

	/**
	 * Fix column headers if multiple lines.
	 *
	 * @param query
	 * @param baseHeight
	 */
	fixTableHeaders: function(query, baseHeight) {
		$(query).each(function() {
			baseHeight = baseHeight || 18;

			var table = $(this);
			var height = baseHeight;

			table.find('.sort-link').each(function() {
				var linkHeight = $(this).height();

				if (linkHeight > height)
					height = linkHeight;
			});

			if (height > baseHeight)
				table.find('.sort-link, .sort-tab').css('height', height);
		});
	},

	/**
	 * Format a locale to a specific structure.
	 *
	 * @param format
	 * @param divider
	 * @return string
	 */
	formatLocale: function(format, divider) {
		divider = divider || '-';
		format = format || 1;

		switch (format) {
			case 1:
			default:
				return Core.locale.replace('-', divider);
			break;
			case 2:
				var parts = Core.locale.split('-');
				return parts[0] + divider + parts[1].toUpperCase();
			break;
			case 3:
				return Core.locale.toUpperCase().replace('-', divider);
			break;
		}
	},

	/**
	 * Convert a datetime string to a users local time zone and return as a string using the specified format.
	 *
	 * http://www.w3.org/TR/html5/common-microsyntaxes.html#valid-global-date-and-time-string
	 *
	 * @param format
	 * @param datetime (2010-07-22T07:41-07:00)
	 * @return string
	 */
	formatDatetime: function(format, datetime) {
		var localDate;

		if (!datetime) {
			localDate = new Date();
		} else {
			// gecko
			localDate = new Date(datetime);

			// webkit
			if (isNaN(localDate.getTime())) { // 2010-07-22 07:41 GMT-0700
				datetime = datetime.substring(0,10) + ' ' + datetime.substring(11,16) + ':00 GMT' + datetime.substring(16,19) + datetime.substring(20,22);
				localDate = new Date(datetime);
			}

			// safari still thinking different
			if (isNaN(localDate.getTime())) { // 2010/07/22 07:41 GMT-0700
				datetime = datetime.substring(0,4) + '/' + datetime.substring(5,7) + '/' + datetime.substring(8,29);
				localDate = new Date(datetime);
			}

			// trident
			if (isNaN(localDate.getTime())) { // 07-22 07:41 GMT-0700 2010
				datetime = datetime.substring(5,10) + ' ' + datetime.substring(11,16) + ' GMT' + datetime.substring(23,28) + ' ' + datetime.substring(0,4);
				localDate = new Date(datetime);
			}

			if (isNaN(localDate.getTime())) {
				return false;
			}
		}

		if (!format)
			format = 'yyyy-MM-ddThh:mmZ';

		var hr = localDate.getHours(),
			meridiem = 'AM';

		if (hr > 12) {
			hr -= 12;
			meridiem = 'PM'

		} else if (hr === 12) {
			meridiem = 'PM'

		} else if (hr === 0) {
			hr = 12;
		}

		var tz = parseInt(localDate.getTimezoneOffset() / 60 * -1, 10);

		if (tz < 0)
			tz = '-' + Core.zeroFill(Math.abs(tz), 2) + ':00';
		else
			tz = '+' + Core.zeroFill(Math.abs(tz), 2) + ':00';

		format = format.replace('yyyy', localDate.getFullYear());
		format = format.replace('MM', Core.zeroFill(localDate.getMonth() + 1,2));
		format = format.replace('dd', Core.zeroFill(localDate.getDate(),2));
		format = format.replace('HH', Core.zeroFill(localDate.getHours(),2));
		format = format.replace('hh', Core.zeroFill(hr,2));
		format = format.replace('mm', Core.zeroFill(localDate.getMinutes(),2));
		format = format.replace('a', meridiem);
		format = format.replace('Z', tz);

		return format;
	},

	/**
	 * Detect the browser type, based on feature detection and not user agent.
	 *
	 * @return string
	 */
	getBrowser: function() {
		if (Core.browser)
			return Core.browser;

		var s = $.support;

		if (!s.hrefNormalized && !s.tbody && !s.style && !s.opacity) {
			if ((typeof document.body.style.maxHeight != "undefined") || (window.XMLHttpRequest))
				Core.browser = 'ie7';
			else
				Core.browser = 'ie6';

		} else if (s.hrefNormalized && s.tbody && s.style && !s.opacity) {
			Core.browser = 'ie8';

		} else {
			Core.browser = UserAgent.browser + UserAgent.version;
		}

		return Core.browser;
	},

	/**
	 * Get the hash from the URL.
	 *
	 * @return string
	 */
	getHash: function() {
		var hash = location.hash || "";

		return hash.substr(1, hash.length);
	},

	/**
	 * Return the language based off locale.
	 *
	 * @return string
	 */
	getLanguage: function() {
		return Core.locale.split('-')[0];
	},

	/**
	 * Return the region based off locale.
	 *
	 * @return string
	 */
	getRegion: function() {
		return Core.locale.split('-')[1];
	},

	/**
	 * Conveniently jump to a page.
	 *
	 * @param url
	 * @param base
	 */
	goTo: function(url, base) {
		window.open((base ? Core.baseUrl : '') + url);

		if (window.event)
			window.event.returnValue = false;
	},

	/**
	 * Include a JavaScript file via XHR.
	 *
	 * @param url
	 * @param success
	 * @param cache - defaults to true
	 */
	include: function(url, success, cache) {
		$.ajax({
			url: url,
			dataType: 'script',
			success: success,
			cache: cache !== false
		});
	},

	/**
	 * Checks to see if the argument is a function/callback.
	 *
	 * @param callback
	 * @return boolean
	 */
	isCallback: function(callback) {
		return (callback && typeof callback === 'function');
	},

	/**
	 * Is the browser using IE?
	 *
	 * @param version
	 * @return boolean
	 */
	isIE: function(version) {
		var browser = Core.getBrowser();

		if (version)
			return ('ie'+ version == browser);
		else
			return (browser == 'ie6' || browser == 'ie7' || browser == 'ie8' || browser == 'ie9');
	},

	/**
	 * Loads either a JavaScript or CSS file, by default deferring the load until after other
	 * content has loaded. The file type is determined by using the file extension.
	 *
	 * @param path
	 * @param deferred - true by default
	 * @param callback
	 */
	load: function(path, deferred, callback) {
		deferred = deferred !== false;

		if (Page.loaded || !deferred)
			Core.loadDeferred(path, callback);
		else
			Core.deferredLoadQueue.push(path);
	},

	/**
	 * Determine which type to load.
	 *
	 * @param path
	 * @param callback
	 */
	loadDeferred: function(path, callback) {
		var queryIndex = path.indexOf("?");
		var extIndex = path.lastIndexOf(".") + 1;
		var ext = path.substring(extIndex, queryIndex == -1 ? path.length : queryIndex);

		switch (ext) {
			case 'js':
				Core.loadDeferredScript(path, callback);
			break;
			case "css":
				Core.loadDeferredStyle(path);
			break;
		}
	},

	/**
	 * Include JS file.
	 *
	 * @param path
	 * @param callback
	 */
	loadDeferredScript: function(path, callback) {
		$.ajax({
			url: path,
			cache: true,
			global: false,
			dataType: 'script',
			success: callback
		});
	},

	/**
	 * Include CSS file; must be done this way because of IE (of course).
	 *
	 * @param path
	 * @param media
	 */
	loadDeferredStyle: function(path, media) {
		$('head').append('<link rel="stylesheet" href="'+ path +'" type="text/css" media="'+ (media || "all") +'" />');
	},

	/**
	 * Replace {0}, {1}, etc. with the passed arguments.
	 *
	 * @param str
	 * @return string
	 */
	msg: function(str) {
		for (var i = 1, len = arguments.length; i < len; ++i) {
			str = str.replace("{" + (i - 1) + "}", arguments[i]);
		}

		return str;
	},

	/**
	 * This version can handle multiple occurences of the same token, but is slower due to the use of a RegExp. Only use if needed.
	 *
	 * @param str
	 * @return string
	 */
	msgAll: function(str) {
		for (var i = 1, len = arguments.length; i < len; ++i) {
			str = str.replace(new RegExp("\\{" + (i - 1) + "\\}", "g"), arguments[i]);
		}

		return str;
	},

	/**
	 * Return numeric values only within a string.
	 *
	 * @param string
	 * @return int
	 */
	numeric: function(string) {
		string = string.replace(/[^0-9]/gi, '');

		if (!string || isNaN(string)) string = 0;

		return string;
	},

	/**
	 * Open the link in a new window.
	 *
	 * @param node
	 * @return false
	 */
	open: function(node) {
		if (node.href)
			window.open(node.href);

		return false;
	},

	/**
     * Helper function for event preventDefault.
     *
     * @param e
     */
    preventDefault: function(e) {
        e.preventDefault();
    },

	/**
	 * Run on page load!
	 */
	processLoadQueue: function() {
		if (Core.deferredLoadQueue.length > 0) {
			for (var i = 0, path; path = Core.deferredLoadQueue[i]; i++) {
				Core.load(path);
			}
		}
	},

	/**
	 * Generate a random number between 0 and up to the argument.
	 *
	 * @param no
	 * @return int
	 */
	randomNumber: function(no) {
		return Math.floor(Math.random() * no);
	},

	/**
	 * Scroll to a specific part of the page.
	 *
	 * @param target
	 * @param duration
	 * @param callback
	 */
	scrollTo: function(target, duration, callback) {
		target = $(target);

		if (target.length != 1)
			return;

		var win = $(window),
			winTop = win.scrollTop(),
			winBottom = winTop + win.height(),
			top = target.offset().top;

		top -= 15;

		if (top >= winTop && top <= winBottom)
			return;

		$($.browser.webkit ? 'body' : 'html').animate({
			scrollTop: top
		},
		duration || 350,
		callback || null);
	},

	/**
	 * Scroll to a specific part of the page (enough to make sure it's fully visible).
	 *
	 * @param target
	 * @param duration
	 * @param callback
	 */
	scrollToVisible: function(target, duration, callback) {
		target = $(target);

		if (target.length != 1)
			return;

		var win = $(window),
			winTop = win.scrollTop(),
			winBottom = winTop + win.height(),
			top = target.offset().top,
			bottom = top + target.height();

		top -= 15;
		bottom += 15;

		if (top >= winTop && bottom <= winBottom)
			return;

		$($.browser.webkit ? 'body' : 'html').animate({
			scrollTop: (top < winTop ? top : bottom - win.height())
		},
		duration || 350,
		callback || null);
	},

	/**
     * Helper function for event stopPropagation.
     *
     * @param e
     */
    stopPropagation: function(e) {
        e.stopPropagation();
    },

	/**
	 * Trims specific characters off the end of a string.
	 *
	 * @param string
	 * @param c
	 * @return string
	 */
	trimChar: function(string, c) {
		if (string.substr(0, 1) === c)
			string = string.substr(1, (string.length - 1));

		if (string.substr((string.length - 1), string.length) === c)
			string = string.substr(0, (string.length - 1));

		return string;
	},

	/**
	 * Trims specific characters off the right end of a string.
	 *
	 * @param string
	 * @param charlist
	 * @return string
	 */
	trimRight: function(string, charlist) {
		charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');

		return (string + '').replace( new RegExp('[' + charlist + ']+$', 'g') , '');
	},

	/**
	 * Apply global functionality to certain UI elements.
	 *
	 * @param context
	 */
	ui: function(context) {
		context = context || document;

		if (Core.isIE(6)) {
			$(context).find('button.ui-button').hover(
				function() {
					if (!this.hasAttribute('disabled') || this.className.indexOf('disabled') == -1)
						$(this).addClass('hover');
				},
				function() {
					$(this).removeClass('hover');
				}
			);
		}

		if (Core.project != 'bam') {
			$(context).find('button.ui-button').click(function(e) {
				var self = $(this);
				var alt = self.attr('data-text');

				if (typeof alt == 'undefined')
					alt = "";

				if (this.tagName.toLowerCase() == 'button' && alt != "") {
					if (self.attr('type') == 'submit') {
						e.preventDefault();
						e.stopPropagation();

						self.find('span span').html(alt);
						self.removeClass('hover')
							.addClass('processing')
							.attr('disabled', 'disabled');

						// Manually submit
						self.parents('form').submit();
					}
				}

				return true;
			});
		}
	},

	/**
	 * Zero-fills a number to the specified length (works on floats and negatives, too).
	 *
	 * @param number
	 * @param width
	 * @param includeDecimal
	 * @return string
	 */
	zeroFill: function(number, width, includeDecimal) {
		if (typeof includeDecimal == 'undefined')
			includeDecimal = false;

		var result = parseFloat(number),
			negative = false,
			length = width - result.toString().length,
			i = length - 1;

		if (result < 0) {
			result = Math.abs(result);
			negative = true;
			length++;
			i = length - 1;
		}

		if (width > 0) {
			if (result.toString().indexOf('.') > 0) {
				if (!includeDecimal)
					length += result.toString().split('.')[1].length;

				length++;
				i = length - 1;
			}

			if (i >= 0) {
				do {
					result = '0' + result;
				} while (i--);
			}
		}

		if (negative)
			return '-' + result;

		return result;
	},

	/**
	 * Utility for boxes that can be closed permanently.
	 * e.g: New Feature Box, BlizzCon Bar
	 *
	 * @param nodeQuery
	 * @param cookieId
	 * @param options - startDate, endDate, cookieParams, fadeIn, trackingCategory, trackingAction, onShow, onHide
	 */
	showUntilClosed: function(nodeQuery, cookieId, options) {
		options = options || {};

		var node = $(nodeQuery),
			COOKIE_NAME = 'bnet.closed.' + cookieId;

		if (!node.length || !Cookie.isSupported() || Cookie.read(COOKIE_NAME)) {
			return false;
	}

		// Date validation
		var now = new Date();

		if (options.startDate) {
			var startDate = new Date(options.startDate);

			if ((startDate - now) > 0) {
				return false;
			}
		}

		if (options.endDate) {
			var endDate = new Date(options.endDate);

			if ((endDate - now) < 0) {
				return false;
			}
		}

		// Show the node
		if (options.fadeIn) {
			node.fadeIn(options.fadeIn, options.onShow);
		} else {
			node.show();

			if (options.onShow) {
				options.onShow();
			}
		}

		// Click events
		var cookieParams = $.extend({
			path: Core.baseUrl,
			expires: 8760
		}, options.cookieParams || {});

		node.delegate('a', 'click', function() {
			var self = $(this),
				trackingLabel = self.data('label'),
				closeButton = (this.rel == 'close');

			if (closeButton) {
				node.hide();

				if (options.onHide) {
					options.onHide();
				}
			}

			if(closeButton || !options.closeButtonOnly) {
				Cookie.create(COOKIE_NAME, 1, cookieParams);
			}

			if (trackingLabel) {
				BnetAds.trackImpression(options.trackingCategory || 'Tracking', options.trackingAction || 'Click', trackingLabel);
			}
		});

		return true;
	}

};

/**
 * Application related functionality.
 */
var App = {

	/**
	 * Enable the explore links.
	 *
	 * @constructor
	 */
	initialize: function() {
		var links = $('a[rel="javascript"]');

		if (links.length) {
			links
				.removeAttr('onclick')
				.removeAttr('onmouseover')
				.removeAttr('title')
				.css('cursor', 'pointer');
		}

		var supportLink = $('#support-link');
		var exploreLink = $('#explore-link');
		var newsLink = $('#breaking-link');
		var authLink = $('#auth-link');

		if (supportLink.length > 0) {
			supportLink.unbind().click(function() {
				Tickets.loadStatus();
				Toggle.open(this, 'active', '#support-menu');
				return false;
			});
		}

		if (authLink.length > 0) {
			authLink.unbind().click(function() {
				BnetAds.trackImpression('Battle.net Authenticator', 'Menu Toggle', $('#auth-menu').is(':hidden') ? 'Open' : 'Close');
				Toggle.open(this, 'active', '#auth-menu');
				return false;
			});

			$('#auth-menu a').click(function() {
				var label;

				if (this.className == 'auth-close') {
					Toggle.open(authLink, 'active', '#auth-menu');
					authLink.parent().hide();
					label = 'Close';
				} else if (this.className == 'auth-button') {
					label = 'Add';
				} else {
					label = 'More';
				}

				BnetAds.trackImpression('Battle.net Authenticator', 'Link Click', label);

				Cookie.create('serviceBar.authCheck', 1, {
					expires: 744, // 1 month of hours
					path: '/'
				});
			})
		}

		if (exploreLink.length > 0) {
			exploreLink.unbind().click(function() {
				Toggle.open(this, 'active', '#explore-menu');
				return false;
			});

			$('#explore-menu').delegate('a', 'click', function() { // TODO: Centralize with other click tracking (e.g. new feature tip)
				var $this = $(this);
				var label = $this.data('label');
				if(!label) {
					label = 'Other';
				}

				BnetAds.trackImpression('Battle.net Explore Menu', 'Link Click', label);
			});
		}

		if (newsLink.length > 0) {
			newsLink.unbind().click(function() {
				App.breakingNews();
				return false;
			});
		}
	},

	/**
	 * Hide the service bar warnings.
	 *
	 * @param target
	 * @param cookie
	 */
	closeWarning: function(target, cookie) {
        $(target).hide();

		if (cookie)
			App.saveCookie(cookie);
	},

	/**
	 * Open and close the breaking news.
	 *
	 * @param lastId
	 */
	breakingNews: function(lastId) {
		var node = $("#breaking-news");
		var news = $("#announcement-warning");

		if (news.is(':visible')) {
			news.hide();
			node.removeClass('opened');
		} else {
			news.show();
			node.addClass('opened');
		}

		if (lastId)
			Cookie.create('serviceBar.breakingNews', lastId);
	},

	/**
	 * Save a cookie.
	 *
	 * @param name
	 */
	saveCookie: function(name) {
		Cookie.create('serviceBar.'+ name, 1, {
			expires: 8760, // 1 year of hours
			path: '/'
		});
	},

	/**
	 * Reset a cookie.
	 *
	 * @param name
	 */
	resetCookie: function(name) {
		Cookie.create('serviceBar.'+ name, 0, {
			expires: 8760, // 1 year of hours
			path: '/'
		});
	},

	/**
	 * Hide service bar elements depending on cookies.
	 */
	serviceBar: function() {
		var browser = Cookie.read('serviceBar.browserWarning');
		var locale = Cookie.read('serviceBar.localeWarning');

		if (browser == 1)
			$('#browser-warning').hide();

		if (locale == 1)
			$('#i18n-warning').hide();
	},

	/**
	 * Values for sidebar module loading.
	 */
	totalModules: 0,
	totalLoaded: 0,
	modules: [],
	forceLoad: true,

	/**
	 * Dynamically load more than one sidebar module at a time.
	 *
	 * @param modules
	 */
	sidebar: function(modules) {
		App.totalModules = modules.length;

		if (modules.length) {
			for (var i = 0; i <= (modules.length - 1); ++i) {
				App.loadModule(modules[i], i);
			}
		}

		// Show the modules after 5 seconds incase some are hanging
		window.setTimeout(function() {
			if (App.forceLoad) {
				App.showSidebar();
			}
		}, 5000);
	},

	/**
	 * Show the sidebar modules.
	 */
	showSidebar: function() {
		App.forceLoad = false;

		var sidebar = $('#sidebar .sidebar-bot');

		for (var i = 0; i < App.totalModules; i++) {
			if (App.modules[i]) {
				App.modules[i].appendTo(sidebar);
			}
		}

		$('#sidebar-loading').fadeOut('normal', function() {
			sidebar.find('.sidebar-module').fadeIn();
			$(this).remove();
		});

		// Reset
		App.modules = [];
		App.totalModules = 0;
		App.totalLoaded = 0;
	},

	/**
	 * Load the content of a sidebar module through AJAX.
	 *
	 * @param module
	 * @param index
	 */
	loadModule: function(module, index) {
		var sidebar = $('#sidebar .sidebar-bot');

		$.ajax({
			url: Core.baseUrl + '/sidebar/' + module.type + (module.query || ""),
			type: 'GET',
			dataType: 'html',
			cache: true,
			global: false,
			success: function(data) {
				App.totalLoaded++;

				if ($.trim(data) != "") {
					var node = $(data);

					if (App.forceLoad) {
						node.hide();
						App.modules[index] = node;
					} else {
						node.appendTo(sidebar);
					}
				}
			},
			error: function() {
				App.totalLoaded++;
			},
			complete: function() {
				if (App.totalLoaded >= App.totalModules) {
					window.setTimeout(App.showSidebar, 100);
				}
			}
		});
	}

};

/**
 * Methods for creating, reading, and deleting cookies.
 */
var Cookie = {

	/**
	 * Cached cookies.
	 */
	cache: {},

	/**
	 * Create a cookie. Can accept a third parameter as a literal object of options.
	 *
	 * @param key
	 * @param value
	 * @param options
	 */
	create: function(key, value, options) {
		options = $.extend({}, options);
		options.expires = options.expires || 1; // Default expiration: 1 hour

		if (typeof options.expires == 'number') {
			var hours = options.expires;
			options.expires = new Date();
			options.expires.setTime(options.expires.getTime() + (hours * 3600000));
		}

		var cookie = [
			encodeURIComponent(key) +'=',
			options.escape ? encodeURIComponent(value) : value,
			options.expires ? '; expires=' + options.expires.toUTCString() : '',
			options.path ? '; path=' + options.path : '',
			options.domain ? '; domain=' + options.domain : '',
			options.secure ? '; secure' : ''
		];

		document.cookie = cookie.join('');

		if (Cookie.cache) {
			if (options.expires.getTime() < (new Date()).getTime())
				delete Cookie.cache[key];
			else
				Cookie.cache[key] = value;
		}
	},

	/**
	 * Read a cookie.
	 *
	 * @param key
	 * @return string
	 */
	read: function(key) {
		// Use cache when available
		if (Cookie.cache[key])
			return Cookie.cache[key];

		var cache = {};
		var cookies = document.cookie.split(';');

		if (cookies.length > 0) {
			for (var i = 0; i < cookies.length; i++) {
				var parts = cookies[i].split('=');

				if (parts.length >= 2)
					cache[$.trim(parts[0])] = parts[1];
			}
		}

		Cookie.cache = cache;
		return cache[key] || null;
	},

	/**
	 * Delete a cookie.
	 *
	 * @param key
	 */
	erase: function(key, options) {
		if (!options) {
			options = { expires: -1 };

		} else if (!options.expires) {
		options.expires = -1;
		}

		Cookie.create(key, 0, options);
	},

	/**
	 * Returns whether cookies are supported/enabled by the browser
	 *
	 * @return boolean
	 */
	isSupported: function() {
		return (document.cookie.indexOf('=') != -1);
	}
};

/**
 * Input field helper. Shows default text on blur and hides on focus.
 */
var Input = {

	/**
	 * Initialize binds for search form.
	 */
	initialize: function() {
		Input.bind('#search-field');
	},

	/**
	 * Bind the events to a target.
	 *
	 * @param target
	 */
	bind: function(target) {
		Input.reset(target);

		var field = $(target);

		field.focus(Input.activate).blur(Input.reset);
		field.parentsUntil('form').parent().submit(function() {
			return Input.submit(field);
		});
	},

	/**
	 * Save the current placeholder to the cache and remove.
	 *
	 * @param e
	 */
	activate: function(e) {
		var node = (typeof e == 'string') ? $(e) : $(this);

		if (!node.length)
			return;

		if (node.val() == node.attr('alt'))
			node.val("");

		node.addClass("active");
	},

	/**
	 * Display placeholder if value is empty.
	 *
	 * @param e
	 */
	reset: function(e) {
		var node = (typeof e == 'string') ? $(e) : $(this);

		if (!node.length)
			return;

		if (node.val() == "")
			node.removeClass("active").val(node.attr('alt'));

		else if (node.val() != node.attr('alt'))
			node.addClass("active")
	},

	/**
	 * Clear field when submitting.
	 *
	 * @param node
	 */
	submit: function(node) {
		node = $(node || this);

		if (node.val() == node.attr('alt'))
			node.val("");

		return true;
		}

};

/**
 * Utility to record window scroll / dimensions.
 */
var Page = {

	/**
	 * Window object.
	 */
	object: null,

	/**
	 * Initialized?
	 */
	loaded: false,

	/**
	 * Window dimensions.
	 */
	dimensions: {
		width: 0,
		height: 0
	},

	/**
	 * Window scroll.
	 */
	scroll: {
		top: 0,
		width: 0
	},

	/**
	 * Initialized and grab window properties.
	 *
	 * @constructor
	 */
	initialize: function() {
		if (Page.loaded)
			return;

		if (!Page.object)
			Page.object = $(window);

		Page.object
			.resize(Page.getDimensions)
			.scroll(Page.getScrollValues);

		Page.getScrollValues();
		Page.getDimensions();
		Page.loaded = true;
	},

	/**
	 * Get window scroll values.
	 */
	getScrollValues: function() {
		Page.scroll.top  = Page.object.scrollTop();
		Page.scroll.left = Page.object.scrollLeft();
	},

	/**
	 * Get window dimensions.
	 */
	getDimensions: function() {
		Page.dimensions.width  = Page.object.width();
		Page.dimensions.height = Page.object.height();
	}
};

/**
 * Gets and displays unread support tickets.
 */
var Tickets = {

	/**
	 * HTML elements.
	 */
	tag: null,
	summary: null,
	fragment: null,
	ul: null,
	doc: null,

	/**
	 * Total number of ticket statuses to show.
	 */
	 total: 3,

	/**
	 * Enable the enahanced support menu.
	 *
	 * @constructor
	 */
	initialize: function() {
	    Tickets.doc = document;
	    var doc = Tickets.doc;
		Tickets.tag = doc.getElementById('support-ticket-count');
		Tickets.summary = doc.getElementById('ticket-summary');
		Tickets.fragment = doc.createDocumentFragment();
		Tickets.ul = doc.createElement('ul');
		Tickets.loadStatus();
	},

	/**
	 * Update the service menu.
	 *
	 * @param json
	 */
	updateSummary: function(json) {

		var doc = Tickets.doc;

		Tickets.fragment = doc.createDocumentFragment();
		Tickets.ul = doc.createElement('ul');
		Tickets.summary.innerHTML = '';
		Tickets.fragment.appendChild(Tickets.ul);

		if (json.length < 1) {
			return;
        }

		for (var i = 0, ticket; ticket = json[i]; i++) {
		    Tickets.createListItem(ticket, i);
		}

		Tickets.summary.appendChild(Tickets.fragment);

	},

	/**
	 * Creates a status summary for a ticket.
	 *
	 * @param ticket A ticket object.
	 * @param index
	 */
	createListItem: function(ticket, index) {

        if (typeof ticket !== 'object') {
            return;
        }

		var doc = Tickets.doc,
		    css = Core.isIE(6) || Core.isIE(7) ? 'className' : 'class',
		    msgSupport = Msg.support,
		    msg = {
				created: msgSupport.ticketNew,
				status: msgSupport.ticketStatus,
				viewAll: msgSupport.ticketAll,
				OPEN: msgSupport.ticketOpen,
				ANSWERED: msgSupport.ticketAnswered,
				RESOLVED: msgSupport.ticketResolved,
				CANCELED: msgSupport.ticketCanceled,
				ARCHIVED: msgSupport.ticketArchived,
				INFO: msgSupport.ticketInfo
			},
			string = '',
			prefix = '',
			suffix = '',
			icon = null,
			li = null,
			a = null,
			span = null,
			br = null,
			datetime = null,
			test = -1;

        if (ticket.status === 'OPEN') {
            string = msg.created.replace('{0}', Core.buildRegion.toUpperCase() + ticket.caseId);
        } else {
            string = msg.status.replace('{0}', Core.buildRegion.toUpperCase() + ticket.caseId);
        }
        datetime = doc.createElement('span');
        datetime.setAttribute(css, 'ticket-datetime');
        datetime.appendChild(doc.createTextNode(Tickets.localizeDatetime(ticket.lastUpdate)));
        a = doc.createElement('a');
        a.href = Core.secureSupportUrl + 'ticket/thread/' + ticket.caseId;
        icon = doc.createElement('span'),
        icon.setAttribute(css, 'icon-ticket-status');
        a.appendChild(icon);
        test = string.indexOf('{1}');
        if (test > 0) {
            prefix = string.substring(0, test);
            suffix = string.substr(test + 3, string.length);
            span = doc.createElement('span');
            span.setAttribute(css, 'ticket-' + ticket.status.toLowerCase());
            span.appendChild(doc.createTextNode(msg[ticket.status]));
            a.appendChild(doc.createTextNode(prefix));
            a.appendChild(span);
            a.appendChild(doc.createTextNode(suffix));
        } else {
            a.appendChild(doc.createTextNode(string));
        }
        br = doc.createElement('br');
        a.appendChild(br);
        a.appendChild(datetime);
        li = doc.createElement('li');
        if (index === 0) {
            li.setAttribute(css, 'first-ticket');
        }
        li.appendChild(a);
        Tickets.ul.appendChild(li);

		if (index === this.total) {
		    li = doc.createElement('li');
		    li.setAttribute(css, 'view-all-tickets');
		    a = doc.createElement('a');
		    a.href = Core.secureSupportUrl + 'ticket/status';
            a.appendChild(doc.createTextNode(msg['viewAll']));
		    li.appendChild(a);
			Tickets.ul.appendChild(li);
		}

    },

	/**
	 * Update the service menu tag with the total number of tickets.
	 *
	 * @param count
	 */
	updateTotal: function(count) {
		count = (typeof count === 'number') ? count : 0;

		var css = (Core.isIE(6) || Core.isIE(7)) ? 'className' : 'class';

		if (count > 0) {
			Tickets.tag.setAttribute(css, 'open-support-tickets');
			Tickets.tag.innerHTML = count;
		} else {
			Tickets.tag.setAttribute(css, 'no-support-tickets');
			Tickets.tag.innerHTML = '';
		}

	},

	/**
	 * Localize the date and time per the user's time zone and locale.
	 *
	 * @param timestamp
	 */
	localizeDatetime: function(timestamp) {
		var format = Core.dateTimeFormat,
			locale = Core.locale,
			datetime = null;

		datetime = Core.formatDatetime(format, timestamp);

		if (!datetime)
			return '';

		if (locale === 'en-us' || locale === 'es-mx' || locale === 'zh-cn' || locale === 'zh-tw') {
			datetime = datetime.replace('/0', '/');

			if (datetime.substr(0, 1) === '0')
				datetime = datetime.substr(1);
		}

		if (locale === 'en-us' || locale === 'es-mx')
			datetime = datetime.replace(' 0', ' ');

		return datetime;

	},

	/**
	 * Load the ticket information through AJAX.
	 */
	loadStatus: function() {
		if (Tickets.summary !== null) {
			$.ajax({
				timeout: 3000,
				url: Core.secureSupportUrl +'update/json',
				ifModified: true,
				global: false,
				dataType: 'jsonp',
				jsonpCallback: 'getStatus',
				data: {
					supportToken: supportToken
				},				
				success: function(json) {
					Tickets.updateTotal(json.total);
					Tickets.updateSummary(json.details, json.total);
				}
			});
		}
	}

};

/**
 * Simple open/hide toggle system.
 */
var Toggle = {

	/**
	 * Node cache.
	 */
	cache: {},

	/**
	 * Custom defined callback function.
	 */
	callback: null,

	/**
	 * Timeout to close the menu automatically.
	 */
	timeout: 800,

	/**
	 * Determines whether or not to persist menu open.
	 */
	keepOpen: false,

	/**
	 * Opens a menu / dropdown element.
	 *
	 * @param triggerNode
	 * @param activeClass
	 * @param targetPath
	 * @param delay
	 */
	open: function(triggerNode, activeClass, targetPath, delay) {
		if (delay)
			Toggle.timeout = delay;

		//keep menu open
		Toggle.keepOpen = true;

		var key = Toggle.key(targetPath);

		for (var k in Toggle.cache) {
			if (k !== key)
				Toggle.close(Toggle.cache[k].trigger, Toggle.cache[k].activeClass, Toggle.cache[k].target, 0, true);
		}

		//bind events and cache
		if (!Toggle.cache[key]) {
			//bind events and toggle the class
			$(triggerNode)
				.mouseleave(function() {
					Toggle.keepOpen = false;
					Toggle.close(triggerNode, activeClass, targetPath, Toggle.timeout);
				})
				.mouseenter(function() {
					Toggle.keepOpen = true;
					window.clearTimeout(Toggle.cache[key].timer);
				});

			//bind events and toggle display of the target
			$(targetPath)
				.mouseleave(function() {
					Toggle.keepOpen = false;
					Toggle.close(triggerNode, activeClass, targetPath, Toggle.timeout);
				})
				.mouseenter(function() {
					Toggle.keepOpen = true;
					window.clearTimeout(Toggle.cache[key].timer);
				});

			//cache properties
			Toggle.cache[key] = {
				trigger: triggerNode,
				target: targetPath,
				activeClass: activeClass,
				key: key,
				timer: null
			};
		}

		//toggle class/display
		$(triggerNode).toggleClass(activeClass);
		$(targetPath).toggle();

		window.clearTimeout(Toggle.cache[key].timer);
	},

	/**
	 * Close the menu and clear any cached timers.
	 *
	 * @param triggerNode
	 * @param activeClass
	 * @param targetPath
	 * @param delay
	 * @param force
	 */
	close: function(triggerNode, activeClass, targetPath, delay, force) {
		force = typeof force === 'boolean' ? force : false;

		var key = Toggle.key(targetPath);

		window.clearTimeout(Toggle.cache[key].timer);

		Toggle.cache[key].timer = setTimeout(function() {
			if (Toggle.keepOpen && !force)
				return;

			$(targetPath).hide();
			$(triggerNode).removeClass(activeClass);
			Toggle.triggerCallback();
		}, delay);
	},

	/**
	 * Generate the key.
	 *
	 * @param targetPath
	 * @return string
	 */
	key: function(targetPath) {
		return (typeof targetPath == 'string') ? targetPath : '#'+ $(targetPath).attr('id');
	},

	/*
	 * Trigger a callback if defined
	 */
	triggerCallback: function() {
		if (Core.isCallback(Toggle.callback))
			Toggle.callback();
	}
};

/**
 * Creates a full page blackout.
 */
var Blackout = {

	/**
	 * Has the blackout been opened before?
	 */
    initialized: false,

	/**
	 * The DOM element.
	 */
    element: null,

	/**
	 * Create the div to be used.
	 *
	 * @constructor
	 */
    initialize: function() {
        Blackout.element = $('<div/>', { id: 'blackout' });
		Blackout.element.click(Core.stopPropagation);

        $("body").append(Blackout.element);

        Blackout.initialized = true;
    },

    /*
     * Shows the blackout
     *
     * @param callback (optional) - function that gets called after blackout shows
     * @param onClick  (optional) - function binds onclick functionality to blackout
     */
    show: function(callback, onClick) {
        if (!Blackout.initialized)
            Blackout.initialize();

        // Ie fix
        if (Core.isIE()) {
            Blackout.element
                .css("width", Page.dimensions.width)
                .css("height", $(document).height());
        }

        // Show blackout
        Blackout.element.show();

        // Call optional functions
        if (Core.isCallback(callback))
            callback();

        if (Core.isCallback(onClick))
            Blackout.element.click(onClick);
    },

    /*
     * Hides blackout
     *
     * @param callback (optional) - function that gets called after blackout hides
     */
    hide: function(callback) {
		Blackout.element.hide();

        if (Core.isCallback(callback))
            callback();

        Blackout.element.unbind("click");
    }
};

/**
 * Manage the context / character selection menu.
 */
var CharSelect = {

	/**
	 * Initialize the class.
	 *
	 * @constructor
	 */
	initialize: function() {
		$(document).undelegate('a.context-link', 'click', CharSelect.toggle);
		$(document).delegate('a.context-link', 'click', CharSelect.toggle);

		$('div.scrollbar-wrapper').css('overflow', 'hidden');
		$('input.character-filter')
			.blur(function() { Toggle.keepOpen = false; })
			.keyup(CharSelect.filter)
			.keydown(function(e) {
				if (e.which == KeyCode.enter) {
					e.stopPropagation();
					e.preventDefault();
				}
			});

		Input.bind('.character-filter');
	},

	/**
	 * Pin a character to the top.
	 *
	 * @param index
	 * @param link
	 */
	pin: function(index, link) {
		Tooltip.hide();
		$('div.character-list').html("").addClass('loading-chars');

		var switchUrl = Core.baseUrl +'/pref/character';

		$.ajax({
			type: 'POST',
			url: switchUrl,
			data: {
				index: index,
				xstoken: Cookie.read('xstoken')
			},
			global: false,
			success: function(content) {
				var refreshUrl = switchUrl;

				if (Core.isIE()) {
					location.reload(true);
				}

				// Take the user directly to the newly-selected character, don't wait for card update
				if (location.pathname.indexOf('/character/') != -1) {
					if (location.pathname.indexOf('/vault/') != -1)
						location.reload(true);
					else
						CharSelect.redirectTo(link.href);

					return;
				}

				// If homepage or account status, use those pages since they are unique
				if (location.pathname.indexOf('/account-status') >= 0)
					refreshUrl = Core.baseUrl +'/account-status';

				else if (location.pathname == Core.baseUrl +'/')
					refreshUrl = Core.baseUrl +'/';

				// Request new content or replace
				/*if (refreshUrl != switchUrl)
					CharSelect.pageUpdate(refreshUrl);
				else
					CharSelect.replace(content);   */

				// Grab the whole page
				CharSelect.pageUpdate();
			}
		})
	},

	/**
	 * Textarea content to persist between switches.
	 */
	textareaContent: '',

	/**
	 * Replace elements in the current page with fetched elements.
	 *
	 * @param content
	 */
	replace: function(content) {
		var pageData = $((typeof content == 'string') ? content : content.documentElement);

		$('.ajax-update').each(function() {
			var self = $(this),
				target;

			if (self.attr('id')) {
				target = '#' + self.attr('id');
			} else {
				target = self.attr('class').replace('ajax-update', '').trim();
				target = '.' + target.split(' ')[0];
			}

			var clone = pageData.find(target + '.ajax-update').clone(),
				textarea = self.find('textarea');

			if (textarea.length && textarea.val().length) {
				CharSelect.textareaContent = textarea.val();
			}

			clone.find('textarea').val(CharSelect.textareaContent);
			self.replaceWith(clone);
		});

		CharSelect.initialize();
		CharSelect.afterPageUpdate();
	},

	/**
	 * Update all the elements on the page after char selection.
	 *
	 * @param refreshUrl
	 * @param fallbackUrl
	 */
	pageUpdate: function(refreshUrl, fallbackUrl) {
		refreshUrl = refreshUrl || location.href;
		var ck = Date.parse(new Date());

		if (Core.isIE() && refreshUrl == Core.baseUrl +'/') {
			location.href = location.pathname +'?reload='+ ck;
			return;
		}

		refreshUrl = refreshUrl + ((refreshUrl.indexOf('?') > -1) ? '&' : '?') +"cachekill="+ ck;

		$.ajax({
			url: location.href,
			global: false,
			error: function(xhr) {
				if (fallbackUrl) {
					location.href = fallbackUrl;
				} else if (xhr.status == 404 && refreshUrl == null) {
					CharSelect.pageUpdate(Core.baseUrl + "/", fallbackUrl); // Attempt to get data from homepage
				} else {
					location.reload(true);
				}
			},
			success: function(data) {
				CharSelect.replace(data);
			}
		});
	},

	/**
	 * Trigger code after page update.
	 */
	afterPageUpdate: function() {

		// Redirect to the newly-selected character or guild
		var redirectTo;

		if (location.href.indexOf('/character/') != -1) {
			redirectTo = $('#user-plate a.character-name').attr('href');

		} else if (location.href.indexOf('/guild/') != -1) {
			redirectTo = $('#user-plate a.guild-name').attr('href');

			// Deal with guildless characters
			if (!redirectTo) {
				location.href = $('#user-plate a.character-name').attr('href');
				return;
			}
		}

		if (redirectTo)
			CharSelect.redirectTo(redirectTo);
	},

	/**
	 * Redirect to a URL.
	 *
	 * @param url
	 */
	redirectTo: function(url) {
		// Vault-secured pages only need to be refreshed
		if (url.indexOf('/vault/') != -1) {
			location.reload();
			return;
		}

		// Preserve current page
		var page = '';

		if (location.href.match(/\/(character|guild)\/.+?\/.+?\/(.+)$/)) {
			page = RegExp.$2;

			// Ignore pages that aren't always available
			$.each(['pet', 'profession'], function() {
				if (page.indexOf(this) != -1) {
					page = '';
					return;
				}
			});
		}

		location.href = url + page;
	},

	/**
	 * Open and close the context menu.
	 *
	 * @param e
	 */
	toggle: function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();

		Toggle.open(e.currentTarget, "context-open", $(e.currentTarget).siblings('.ui-context'));
		return false;
	},

	/**
	 * Close the context menu.
	 *
	 * @param node
	 * @return boolean
	 */
	close: function(node) {
		$(node)
			.parents('.ui-context').hide()
			.siblings('.context-link').removeClass('context-open');

		return false;
	},

	/**
	 * Swipe between the char select panes.
	 *
	 * @param direction
	 * @param target
	 */
	swipe: function(direction, target) {
		var parent = $(target).parents('.chars-pane'),
			inDirection = (direction == 'in') ? 'left' : 'right',
			outDirection = (direction == 'in') ? 'right' : 'left';

		parent.hide('slide', { direction: inDirection }, 150, function() {
			parent.siblings('.chars-pane').show('slide', { direction: outDirection }, 150, function() {
				var scroll = $(this).find('.scrollbar-wrapper');

				if (scroll.length > 0)
					scroll.tinyscrollbar();
			});
		});
	},

	/**
	 * Filter down the character list.
	 *
	 * @param e
	 */
	filter: function(e) {
		e.preventDefault();
		e.stopPropagation();

		Toggle.keepOpen = true;

		if (e.keyCode == KeyCode.enter)
			return;

		var target = $(e.srcElement || e.currentTarget),
			filterVal = target.val().toLowerCase(),
			filterTable = target.parents('.chars-pane').find('.overview');

		if (e.keyCode == KeyCode.esc)
			target.val('');

		if (target.val().length < 1) {
			filterTable.children('a').removeClass('filtered');
		} else {
			filterTable.children('a').each(
				function() {
				 	$(this)[($(this).text().toLowerCase().indexOf(filterVal) > -1) ? "removeClass" : "addClass"]('filtered');
				}
			);

			var allHidden = filterTable.children('a.filtered').length >= filterTable.children('a').length;
			filterTable.children('.no-results')[(allHidden) ? "show" : "hide"]();
		}

		var scroll = target.parents('.chars-pane:first').find('.scrollbar-wrapper');

		if (scroll.length > 0)
			scroll.tinyscrollbar();
	}
};

/**
 * Variables and functions for flash
 */
var Flash = {

    /**
     * Video player for this project
     */
    videoPlayer: '',

    /**
     * The flash base of the videos for this project
     */
    videoBase:   '',

    /**
     * Rating image based on locale
     */
    ratingImage: '',

    /**
     * Express install location
     */
    expressInstall: 'expressInstall.swf',

    /**
     * Required version for Flash player
     */
    requiredVersion: '10.2.154',

    /**
     * Store values populated after load
     */
    initialize: function() {
         //set flash base and rating image
         Flash.defaultVideoParams.base          = Flash.videoBase;
         Flash.defaultVideoFlashVars.ratingPath = Flash.ratingImage;
         Flash.defaultVideoFlashVars.locale     = Core.locale;
         Flash.defaultVideoFlashVars.dateFormat = Core.shortDateFormat;
    },

    /**
     * Default video params for the video player
     */
    defaultVideoParams: {
         allowFullScreen:   "true",
         bgcolor:           "#000000",
         allowScriptAccess: "always",
         wmode:             "opaque",
         menu:              "false"
    },

    /**
     * Default flash vars for videos
     */
    defaultVideoFlashVars: {
        ratingFadeTime: "1",
        ratingShowTime: "4", //min requirement for ESRB
        autoPlay:       true
    }
};

/**
 * Helper functions for switching language / region.
 */
var Locale = {

    /**
     * Path to the data source.
     */
    dataPath: 'data/i18n.frag',

	/**
	 * Initialize and bind "open menu" links.
	 *
	 * @constructor
	 */
	initialize: function() {
		var path = location.pathname.replace(Core.baseUrl, "");
			path = path + (location.search || '?');

		$('#change-language, #service .service-language a').click(function() {
			return Locale.openMenu('#change-language', encodeURIComponent(path));
		});
	},

    /**

     * Open up the language selection menu at the target location.
     *
     * @param toggler
     * @param path
     */
    openMenu: function(toggler, path) {
        var node = $('#international');
        toggler = $(toggler);
        path = path || '';

        if (node.is(':visible')) {
            node.slideUp();
            toggler.toggleClass('open');

        } else {
            if (node.html() != "") {
                Locale.display();
                toggler.toggleClass('open');
            } else {
                $.ajax({
                    url: Core.baseUrl +'/'+ Locale.dataPath +'?path='+ path,
                    dataType: 'html',
                    success: function(data) {
                        if (data) {
                            node.replaceWith(data);
                            toggler.toggleClass('open');
                            Locale.display();
                        }
                    }
                });
            }
        }

        return false;
    },

    /**
     * Track language events.
	 *
	 * @param eventAction
	 * @param eventLabel
     */
	trackEvent: function(eventAction, eventLabel) {
		try {
			_gaq.push(['_trackEvent', 'Battle.net Language Change Event', eventAction, eventLabel]);
		} catch(e) { }
	},

	/**
	 * Display the international menu.
	 */
	display: function() {
		var node = $('#international');

		node.slideDown('fast', function() {
			$(this).css('display', 'block');
		});

		// Opera doesn't animate on scroll down
		if (!$.browser.opera) {
			$('html, body').animate({
				scrollTop: node.offset().top
			}, 1000);
		}
	}
};

/**
 * Pop up toasts at the bottom left of the browser, or at a certain location.
 */
var Toast = {

	/**
	 * DOM object.
	 */
	container: null,

	/**
	 * Has the class been initialized?
	 */
	initialized: false,

	/**
	 * Max toasts to display.
	 */
	max: 5,

	/**
	 * Default options.
	 */
	options: {
		timer: 15000,
		autoClose: true,
		onClick: null
	},

	/**
	 * Build the container.
	 *
	 * @constructor
	 */
	initialize: function() {
		Toast.container = $('<div/>')
			.attr('id', 'toast-container')
			.show()
			.appendTo('body');

		Toast.initialized = true;
	},

	/**
	 * Create the toast element.
	 *
	 * @param content
	 * @return object
	 */
	create: function(content) {
		var toast = $('<div/>')
			.addClass('ui-toast')
			.hide()
			.appendTo(Toast.container);

		$('<div/>').addClass('toast-arrow').appendTo(toast);
		$('<div/>').addClass('toast-top').appendTo(toast);
		$('<div/>').addClass('toast-content').appendTo(toast).html(content);
		$('<div/>').addClass('toast-bot').appendTo(toast);

		$('<a/>')
			.addClass('toast-close')
			.attr('href', 'javascript:;')
			.appendTo(toast)
			.click(function(e) {
				e.preventDefault();
				e.stopPropagation();

				$(this).parent('.ui-toast').fadeOut('normal', function() {
					$(this).remove();
				});
			});

		return toast;
	},

	/**
	 * Pop up a toast.
	 *
	 * @param content
	 * @param options	timer, autoClose, onClick
	 */
	show: function(content, options) {
		if (!Toast.initialized)
			Toast.initialize();

		Toast.truncate();

		var toast = Toast.create(content);

		options = $.extend({}, Toast.options, options);

		if (options.autoClose) {
			window.setTimeout(function() {
				toast.fadeOut('normal', function() {
				   toast.remove();
			   });
			}, options.timer);

		} else {
			toast.click(function() {
			   toast.fadeOut('normal', function() {
				   toast.remove();
			   });
			}).css('cursor', 'pointer');
		}

		if (Core.isCallback(options.onClick))
			toast.click(options.onClick).css('cursor', 'pointer');

		toast.fadeIn();
	},

	/**
	 * Truncate toasts if it exceeds the max limit.
	 */
	truncate: function() {
		var total = Toast.container.find('.ui-toast');

		if (total.length > Toast.max)
			Toast.container.find('.ui-toast:lt('+ Math.round(total.length - Toast.max) +')').fadeOut();
	}
};

/**
 * Mappings of keyboard key codes for all supported regions.
 *
 * @link http://unixpapa.com/js/key.html
 */
var KeyCode = {

	/**
	 * Convenience codes.
	 */
	backspace: 8,
	enter: 13,
	esc: 27,
	space: 32,
	tab: 9,
	arrowLeft: 37,
	arrowUp: 38,
	arrowRight: 39,
	arrowDown: 40,

	/**
	 * A map of all key codes.
	 *
	 * Supported: en, es, de, ru, ko (no changes), fr
	 */
	map: {
		global: {
			// 0-9 numbers (48-57) and numpad numbers (96-105)
			numbers: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105],

			// A-Z letters
			letters: [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],

			// Backspace, tab, enter, shift, ctrl, alt, caps, esc, num, space pup, pdown, end, home, ins, del
			controls: [8, 9, 13, 16, 17, 18, 20, 27, 33, 32, 34, 35, 36, 45, 46, 144],

			// Function (F keys)
			functions: [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],

			// Left, right, up, down, arrows
			arrows: [37, 38, 39, 40],

			// Windows, Mac specific buttons
			os: [17, 91, 92, 93, 219, 224]
		},
		de: {
			letters: [59, 192, 219, 222]
		},
		es: {
			letters: [59, 192]
		},
		ru: {
			letters: [59, 188, 190, 192, 219, 221, 222]
		},
		fr: {
			letters: [191]
		}
	},

	/**
	 * Get all the arrows codes.
	 *
	 * @param lang
	 * @return array
	 */
	arrows: function(lang) {
		return KeyCode.get('arrows', lang);
	},

	/**
	 * Get all the control codes.
	 *
	 * @param lang
	 * @return array
	 */
	controls: function(lang) {
		return KeyCode.get('controls', lang);
	},

	/**
	 * Get all the functions codes.
	 *
	 * @param lang
	 * @return array
	 */
	functions: function(lang) {
		return KeyCode.get('functions', lang);
	},

	/**
	 * Return a key code map.
	 *
	 * @param type
	 * @param lang
	 * @return mixed
	 */
	get: function(type, lang) {
	    lang = lang || Core.getLanguage();
		var map = [],
			types = [];

		if (typeof type == 'string')
			types = [type];
		else
			types = type;

		for (var i = 0, l = types.length; i < l; ++i) {
			var t = types[i];

			if (!KeyCode.map.global[t])
				continue;

			map = map.concat(KeyCode.map.global[t]);

			if (KeyCode.map[lang] && KeyCode.map[lang][t])
				map = map.concat(KeyCode.map[lang][t]);
		}

		return map;
	},

	/**
	 * Validates an input to only accept letters and controls.
	 *
	 * @param e
	 * @param lang
	 * @return bool
	 */
	isAlpha: function(e, lang) {
		return ($.inArray(e.which, KeyCode.get(['letters', 'controls'], lang)) >= 0);
	},

	/**
	 * Validates an input to only accept letters, numbers and controls.
	 *
	 * @param e
	 * @param lang
	 * @return bool
	 */
	isAlnum: function(e, lang) {
		return (KeyCode.isAlpha(e, lang) || KeyCode.isNumeric(e, lang));
	},

	/**
	 * Validates an input to only accept numbers and controls.
	 *
	 * @param e
	 * @param lang
	 * @return bool
	 */
	isNumeric: function(e, lang) {
		return ($.inArray(e.which, KeyCode.get(['numbers', 'controls'], lang)) >= 0) && !e.shiftKey;
	},

	/**
	 * Get all the letter codes.
	 *
	 * @param lang
	 * @return array
	 */
	letters: function(lang) {
		return KeyCode.get('letters', lang);
	},

	/**
	 * Get all the number codes.
	 *
	 * @param lang
	 * @return array
	 */
	numbers: function(lang) {
		return KeyCode.get('numbers', lang);
	}

};

var BnetAds = {

	/**
	 * Load an ad from the marketing API.
	 *
	 * @param target
	 * @param size
	 */
	init: function(target, size){
		$.ajax({
			url: '/marketing/',
			data: {
				showText: true,
				locale: Core.formatLocale(2, '_'),
				size: size
			},
			dataType: 'html',
			success: function(data) {
				if (data !== "") {
					var dataBody = data.substring(data.indexOf('<body>'), data.indexOf('</body>')+7);

					$(target).find('.sidebar-content').html($(dataBody).html()).removeClass('loading');
				}
			},
			error: function() {
				$(target).remove();
			},
			cache: false,
			global: false
		});
	},

	/**
	 * Bind ad tracking.
	 *
	 * @param query
	 * @param category
	 * @param action
	 */
	bindTracking: function(query, category, action) {
		$(query).click(function() {
			try {
				_gaq.push([
					'_trackEvent',
					category,
					action,
					$(this).data('ad') +' ['+ Core.locale +']'
				]);
			} catch (e) {}
		})
	},

	/**
	 * Track a page impression / view.
	 *
	 * @param category
	 * @param action
	 * @param label
	 */
	trackImpression: function(category, action, label) {
		try {
			_gaq.push([
				'_trackEvent',
				category,
				action,
				label +' ['+ Core.locale +']'
			]);
		} catch (e) {}
	},

	/**
	 * Track a loaded battle.net ad.
	 *
	 * @param id
	 * @param title
	 * @param ref
	 * @param clickEvent
	 */
	trackEvent: function(id, title, ref, clickEvent) {
		try {
			ref = (ref) ? ref +' - ' : '';

			_gaq.push([
				'_trackEvent',
				'Battle.net Ad Service',
				(clickEvent) ? 'Ad Click-Throughs' : 'Ad Impressions',
				'Ad '+ encodeURIComponent(title.replace(' ', '_')) +' - '+ ref + Core.locale +' - '+ id
			]);
		} catch (e) {}
	}
};

/**
 * Determines the browser and version based off the user agent.
 */
var UserAgent = {

	/**
	 * User agent header.
	 */
	header: navigator.userAgent.toLowerCase(),

	/**
	 * The current browser.
	 */
	browser: 'other',

	/**
	 * The current version, single number.
	 */
	version: null,

	/**
	 * Extracte the browser and version.
	 *
	 * @constructor
	 */
	initialize: function() {
		var userAgent = UserAgent.header,
			version,
			browser;

		// Browser
		if (userAgent.indexOf('firefox') != -1)
			browser = 'ff';

		else if (userAgent.indexOf('msie') != -1)
			browser = 'ie';

		else if (userAgent.indexOf('chrome') != -1)
			browser = 'chrome';

		else if (userAgent.indexOf('opera') != -1)
			browser = 'opera';

		else if (userAgent.indexOf('safari') != -1)
			browser = 'safari';

		// Version
		if (browser == 'ff')
			version = /firefox\/([-.0-9]+)/.exec(userAgent);

		else if (browser == 'ie')
			version = /msie ([-.0-9]+)/.exec(userAgent);

		else if (browser == 'chrome')
			version = /chrome\/([-.0-9]+)/.exec(userAgent);

		else if (browser == 'opera')
			version = /opera\/([-.0-9]+)/.exec(userAgent);

		else if (browser == 'safari')
			version = /safari\/([-.0-9]+)/.exec(userAgent);

		UserAgent.browser = browser;
		if(UserAgent.version!=null){
			UserAgent.version = version[1].substring(0, 1);
		}
		

		var className = browser;

		if (UserAgent.version)
			className += ' '+ browser + UserAgent.version;

		if (browser == 'ie' && (UserAgent.version == 6 || UserAgent.version == 7))
			className += ' ie67';

		$('html').addClass(className);
	}
};

/**
 * Simple API for interacting with the browsers local storage.
 */
var Storage = {

	/**
	 * Does browser support local storage?
	 */
	initialized: (window.localStorage),

	/**
	 * Get item from storage.
	 *
	 * @param key
	 * @return mixed
	 */
	get: function(key) {
		if (Storage.initialized && key)
			return localStorage.getItem(key);

		return null;
	},

	/**
	 * Get all items from storage.
	 *
	 * @param prefix
	 * @return mixed
	 */
	getAll: function(prefix) {
		var items = [];

		if (!Storage.initialized)
			return items;

		for (var i = 0, l = localStorage.length, k = null; i < l; i++) {
			k = localStorage.key(i);

			if (prefix && k.indexOf(prefix) !== 0)
				continue;

			items.push({
				key: k,
				value: localStorage[k]
			});
		}

		return items;
	},

	/**
	 * Check if a key exists and has a value.
	 *
	 * @param key
	 */
	has: function(key) {
		return (Storage.get(key) !== null);
	},

	/**
	 * Add/set an item into storage.
	 *
	 * @param key
	 * @param value
	 * @return mixed
	 */
	set: function(key, value) {
		if (Storage.initialized && key) {
			try {
				localStorage.setItem(key, value || '');
			} catch (e) {
				if (e == QUOTA_EXCEEDED_ERR) {
					alert('Local storage quota exceeded, please clear your saved data.');
				}
			}

			return true;
		}

		return false;
	},

	/**
	 * Clear all stored data.
	 */
	clear: function() {
		if (Storage.initialized)
			localStorage.clear();
	},

	/**
	 * Remove a single item from storage.
	 *
	 * @param key
	 */
	remove: function(key) {
		if (Storage.initialized && key)
			localStorage.removeItem(key);
	},

	/**
	 * Get the total items stored.
	 *
	 * @param prefix
	 * @return int
	 */
	size: function(prefix) {
		if (prefix) {
			return Storage.getAll(prefix).length;
		}

		return localStorage.length || 0;
	}

};

/**
 * Creates an overlay box (modal) and blacks out the page for focus.
 * Can fetch content from a DOM element or through AJAX.
 *
 * @copyright   2010, Blizzard Entertainment, Inc
 * @class       Overlay
 * @requires    Page
 * @example
 *
 *      onclick="Overlay.open('/ajax/url/', { ajax: true });"
 *
 */

var Overlay = {

	/**
     * Cached results from the AJAX responses.
     */
    cache: {},

	/**
	 * Default configuration.
	 */
	config: {
		ajax: false,
		bindClose: true,
		className: "",
		fadeSpeed: 250,
		blackout: true
	},

	/**
	 * Has the class been initialized?
	 */
	loaded: null,

	/**
	 * DOM object for the overlay.
	 */
	wrapper: null,

	/**
	 * Initialize the class and create the markup.
     *
     * @constructor
	 */
	initialize: function() {
		if (Overlay.loaded && Overlay.wrapper)
			return;

		Overlay.wrapper = $('<div/>', {
			id: 'overlay',
			'class': 'ui-overlay'
		}).appendTo('body').hide();

		$('<a/>')
			.addClass('overlay-close')
			.attr('href', 'javascript:;')
			.click(Overlay.close)
			.appendTo(Overlay.wrapper);

		var top = $('<div/>').addClass('overlay-top').appendTo(Overlay.wrapper);
		var bot = $('<div/>').addClass('overlay-bottom').appendTo(top);
		var mid = $('<div/>').addClass('overlay-middle').appendTo(bot);

		Overlay.loaded = true;
	},

	/**
	 * Close the overlay.
	 */
	close: function(speed) {
		speed = !speed ? 10 : (speed || 250);

		$("#blackout").fadeOut(speed);

		Overlay.wrapper.fadeOut(speed, function() {
			Overlay.setContent("");
			Overlay.wrapper.attr('class', 'ui-overlay');

			if (Overlay.wrapper.attr('id') !== 'overlay')
				Overlay.wrapper.hide();
		});
	},

	/**
	 * Open up an overlay. Fill the content with text, DOM or AJAX.
	 *
	 * @param content
	 * @param config
	 */
	open: function(content, config) {
		Overlay.initialize();
		config = $.extend({}, Overlay.config, config);

		if (config.className)
			Overlay.wrapper.addClass(config.className);

		if (config.blackout) {
			if (config.bindClose) {
				Blackout.show(null, function() {
					Overlay.close(config.fadeSpeed);
				});
			} else {
				Blackout.show();
			}
		}

		// Content: AJAXs
		if (config.ajax) {

			// Look in cache
            if (Overlay.cache[content]) {
				Overlay.show(Overlay.cache[content]);
            } else {
				$.ajax({
					type: "GET",
					url: content,
					dataType: "html",
					beforeSend: function() {
						Overlay.reset();
						Overlay.show();
					},
					success: function(data, status) {
						Overlay.cache[content] = data;
						Overlay.setContent(data);
					}
				});
			}

		// Content: DOM
        } else if (content.substr(0, 1) === '#') {
            Overlay.show($(content).html());

        // Content: Text
        } else {
            Overlay.show(content);
        }
	},

	/**
	 * Open up a custom overlay.
	 *
	 * @param element
	 * @param config
	 */
	openCustom: function(element, config) {
		Overlay.wrapper = $(element);

		if (Overlay.wrapper) {
			config = $.extend({}, Overlay.config, config);

			if (config.blackout) {
				if (config.bindClose) {
					Blackout.show(null, function() {
						Overlay.close(config.fadeSpeed);
					});
				} else {
					Blackout.show();
				}
			}

			Overlay.position();
		}
	},

	/**
     * Position the overlay at specific coodinates.
     *
     * @param node
     */
    position: function(node) {
        node = node || Overlay.wrapper;

        var width = node.outerWidth(),
			height = node.outerHeight(),
			x = (Page.dimensions.width / 2) - (width / 2),
			y = (Page.dimensions.height / 2) - (height / 2);

		if (Core.isIE(6))
			y = Page.scroll.top + y;

        node.show().css({
			left: x +'px',
			top: y +'px',
			position: Core.isIE(6) ? 'absolute': 'fixed'
		});
    },

	/**
	 * Wipe the overlay and display a loading animation.
	 */
	reset: function() {
		Overlay.wrapper.find('.overlay-middle')
			.html("")
			.addClass('overlay-loading');
	},

	/**
	 * Now display the overlay.
	 *
	 * @param content
	 */
	show: function(content) {
		Overlay.setContent(content);
		Overlay.position();
	},

	/**
	 * Set the content of the overlay.
	 *
	 * @param content
	 */
	setContent: function(content) {
		if (content != null)
			Overlay.wrapper.find('.overlay-middle').html(content);
	}

};

/**
 * Used to encode/decode basic numbers into a hash string.
 */
var Hash = {

	/**
	 * Base 64
	 */
	base: 'aZbYcXdWeVfUgThSiRjQkPlOmNnMoLpKqJrIsHtGuFvEwDxCyBzA0123456789+/',

	/**
	 * Delimiter used when grouping multiple batches.
	 */
	delimiter: '!',

	/**
	 * Used to denote an empty character.
	 */
	empty: '.',

	/**
	 * Batch multiple hashes with encode.
	 *
	 * @param data
	 * @return string
	 */
	batch: function(data) {
		var hashes = [];

		for (var i = 0, l = data.length; i < l; i++) {
			hashes.push( Hash.encode(data[i]) );
			}

		return Core.trimRight(hashes.join(Hash.delimiter), Hash.delimiter);
	},

	/**
	 * Encode an array into a hash using the base.
	 *
	 * @param data
	 * @return string
	 */
	encode: function(data, useEmpty) {
		var hash = '',
			base = Hash.base,
			empty = Hash.empty;

		for (var i = 0, l = data.length; i < l; i++) {
			if (data[i] !== null)
				hash += base.charAt(data[i]);

			else if (useEmpty)
				hash += empty;
		}

		return Core.trimRight(hash, empty);
	},

	/**
	 * Decode a hash into an array using the base.
	 *
	 * @param data
	 * @return array
	 */
	decode: function(data) {
		var array = [],
			base = Hash.base,
			empty = Hash.empty;

		for (var i = 0, l = data.length, v; i < l; i++) {
			v = data.charAt(i);
			v = (v == empty) ? null : base.indexOf(v);

			array.push(v);
		}

		return array;
			}

};

/**
 * Opens up a quick prompt that accepts an input.
 */
var Prompt = {

	/**
	 * DOM objects.
	 */
	node: null,
	input:  null,
	title: null,
	errors: null,

	/**
	 * Is markup created?
	 */
	initialized: false,

	/**
	 * Default rules.
	 */
	defaults: {
		minLength: { value: 1 },
		maxLength: { value: 25 },
		numeric: { value: false }
	},

	/**
	 * Set of rules to validate against.
	 */
	rules: {},

	/**
	 * Validation callback.
	 */
	callback: null,

	/**
	 * Create the DOM elements.
	 */
	initialize: function() {
		Prompt.node = $('<div/>')
			.addClass('ui-prompt')
			.click(Core.stopPropagation)
			.appendTo('body');

		var inner = $('<form/>')
			.attr('method', 'post')
			.attr('action', '')
			.addClass('prompt-inner')
			.appendTo(Prompt.node)
			.submit(Core.preventDefault)
			.keyup(function(e) {
				if (e.which == KeyCode.enter) {
					Prompt.validate();
				}
			});

		Prompt.title = $('<h3/>')
			.addClass('subheader')
			.text('')
			.appendTo(inner);

		Prompt.input = $('<input/>')
			.addClass('input')
			.appendTo(inner)
			.focus(Input.activate)
			.blur(Input.reset);

		Prompt.errors = $('<ul/>')
			.addClass('prompt-errors')
			.hide()
			.appendTo(inner);

		var buttons = $('<div/>')
			.addClass('prompt-buttons')
			.appendTo(inner);

		// IE blows up if you set type via attr()
		$('<button type="button"/>')
			.addClass('ui-button button1')
			.html('<span><span>' + Msg.ui.submit + '</span></span>')
			.click(Prompt.validate)
			.appendTo(buttons);

		$('<button type="button"/>')
			.addClass('ui-button button1')
			.html('<span><span>' + Msg.ui.cancel + '</span></span>')
			.click(Prompt.close)
			.appendTo(buttons);

		$(document).bind('keyup.prompt', function(e) {
			if (e.which == KeyCode.esc)
				Prompt.close();
		});

		Prompt.initialized = true;
	},

	/**
	 * Open the prompt at the target location and set the rules and callback.
	 *
	 * @param title
	 * @param callback
	 * @param rules
	 */
	open: function(title, callback, rules) {
		if (!Prompt.initialized)
			Prompt.initialize();

		var width = Prompt.node.outerWidth(),
			height = Prompt.node.outerHeight(),
			x = (Page.dimensions.width / 2) - (width / 2),
			y = (Page.dimensions.height / 2) - (height / 2) + Page.scroll.top;

		Prompt.rules = $.extend({}, Prompt.defaults, rules || {});
		Prompt.callback = callback;

		Prompt.title.text(title);
		Prompt.input.attr('maxlength', Prompt.rules.maxLength.value);

		Prompt.node.css({
			top: y,
			left: x
		}).show();

		Blackout.show(function() {
			Prompt.input.focus();
		}, Prompt.close);
	},

	/**
	 * Close the prompt and reset.
	 */
	close: function() {
		Prompt.input.val('').trigger('blur');
		Prompt.errors.empty().hide();

		Prompt.node.hide();
		Blackout.hide();
	},

	/**
	 * Validate the rules. If successful, trigger callback.
	 *
	 * @param e
	 */
	validate: function() {

		var input = Prompt.input,
			value = input.val().trim(),
			valid = true,
			errors = [],
			rule,
			i = 0,
			l = 0;

		for (var key in Prompt.rules) {
			rule = Prompt.rules[key];
			valid = true;

			if (!rule) {
				continue;
			}

			if (typeof rule.value === 'function') {
				valid = rule.value(value);
			} else {
				switch (key) {
					case 'minLength':
						if (rule.value && value.length < rule.value)
							valid = false;
					break;
					case 'maxLength':
						if (rule.value && value.length > rule.value)
							valid = false;
					break;
					case 'numeric':
						if (rule.value && isNaN(value))
							valid = false;
					break;
				}
			}

			if (!valid)
				errors.push(rule.message || key);
		}

		if (errors.length) {
			Prompt.errors.empty().show();

			for (i = 0, l = errors.length; i < l; i++) {
				$('<li/>').text(errors[i]).appendTo(Prompt.errors);
			}

		} else {
			if (Core.isCallback(Prompt.callback))
				Prompt.callback(value);

			Prompt.close();
		}
	}

};

/**
 * Load asynchronously.
 */
UserAgent.initialize();

/**
 * Prototype overwrites.
 */
String.prototype.trim = function() {
	return $.trim(this);
};

/**
 * Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
(function() {
	var initializing = false,
		fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

	// The base Class implementation (does nothing)
	window.Class = function() {};

	// Create a new Class that inherits from this class
	Class.extend = function(prop) {
		var _super = this.prototype;

		// Instantiate a base class (but only create the instance, don't run the init constructor)
		initializing = true;
		var prototype = new this();
		initializing = false;

		// Copy the properties over onto the new prototype
		for (var name in prop) {

			// Check if we're overwriting an existing function
			if (typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name])) {
				prototype[name] = (function(name, fn) {
					return function() {
						var tmp = this._super;

						// Add a new ._super() method that is the same method
						// but on the super-class
						this._super = _super[name];

						// The method only need to be bound temporarily, so we
						// remove it when we're done executing
						var ret = fn.apply(this, arguments);
						this._super = tmp;

						return ret;
					};
				})(name, prop[name]);

			} else {
				prototype[name] = prop[name];
		}
		}

		// The dummy class constructor
		function Class() {
			// All construction is actually done in the init method
			if (!initializing && this.init)
				this.init.apply(this, arguments);
		}

		// Populate our constructed prototype object
		Class.prototype = prototype;

		// Enforce the constructor to be what we expect
		Class.constructor = Class;

		// And make this class extendable
		Class.extend = this.callee || arguments.callee;

		return Class;
	};
})();

/**
 * Setup ajax calls.
 */
$.ajaxSetup({
	error: function(xhr, status) {
		if (xhr.readyState != 4)
			return false;

		if (xhr.getResponseHeader("X-App") == "login") {
			Login.openOrRedirect();
			return false;
		}

		if (xhr.status) {
			switch (xhr.status) {
				case 301:
				case 302:
				case 307:
				case 403:
				case 404:
				case 500:
				case 503:
					//location.reload(true);
					return false;
				break;
			}
		}

		// Attempt to detect a redirect. Redirect throws no headers, others do.
		if (status == 'error' && !xhr.getAllResponseHeaders()) {
			// Not working correctly
			//Login.openOrRedirect();
			return false;
		}

		return true;
	}
});
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/>
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
	
	Customized by Blizzard Entertainment
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName.toUpperCase()=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName.toUpperCase()=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af.replace(/&/g,"&amp;")+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName.toUpperCase()=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

var flash = {

	/**
	 * Inject a flash player.
	 */
	build: function(trgId, path, width, height, flashvars, params) {
		var attributes = { id: trgId, name: trgId };

		if (!params)
			params = { menu: "false", allowFullScreen: "false", allowScriptAccess: "true", wmode: "transparent" };

		swfobject.embedSWF(path, trgId, width, height, "9.0.0", "", flashvars, params, attributes);
	}

};

var video = {
	vType: null,
	playTimeoutID: null,
	videoParam: null,

	/**
	 * Open the video.
	 *
	 * @param string vType
	 */
	show: function(vType,videoParam) {
		video.vType = vType;
		video.videoParam = videoParam;

		if (vType=='animate') {
			$('.hiding').fadeOut(500);
			$('#video-player-thumb').fadeOut(500);
		}

		if (!video.playTimeoutID) {
			if (vType=='animate') {
				video.playTimeoutID = window.setTimeout(video.setFrame, 400);
			} else {
				video.playTimeoutID = window.setTimeout(video.create, 400);
			}
		} else {
			return false;
		}
	},

	/**
	 * Close the video.
	 */
	close: function() {
		$('.hiding').fadeIn(700);
		$('.video-view .video-player').removeClass('whatching');
		$('#video-player').detach();
		$('.video-view').find('a.btn-close').fadeOut(700).detach();
		$('.btn-close-icon').fadeOut(700);

		$('#video-player-screen').animate({
			width: '-=643',
			height: '-=366'
		}, 500, function() {
			$('#video-player-thumb').fadeIn(200);
		});

		if (Core.isIE(6)) {
			$('#video-frame').animate({
				width: '-=643',
				height: '-=366'
			}, 500);
		}

		window.clearTimeout(video.playTimeoutID);
		video.playTimeoutID = null;
	},

	/**
	 * Create the frame.
	 *
	 * @param string txtCloseBtn
	 */
	setFrame: function() {
		var closeVideoButton = $('<a>')
			.addClass('btn-close')
			.text(txtCloseBtn)
			.bind('click', function() {
				video.close();
			});
		var closeVideoButtonOnFrame = $('<a>')
			.addClass('btn-close')
			.bind('click', function() {
				video.close();
			});

		$('.video-view').append(closeVideoButton);
		$('.video-player').append(closeVideoButtonOnFrame);

		closeVideoButton.fadeIn(500);
		closeVideoButtonOnFrame.fadeIn(500);

		$('.btn-close-icon').fadeIn(500);
		$('.video-view .video-player').addClass('whatching');
		$('#video-player-screen').animate({
			width: '+=643',
			height: '+=366'
		}, 700, function() {
			video.create();
		});

		if (Core.isIE(6)) {
			$('#video-frame').animate({
				width: '+=643',
				height: '+=366'
			}, 700);
		}
	},

	/**
	 * Create the flash video player.
	 */
	create: function(){
		$('<div>').attr('id', 'video-player').appendTo('#video-player-screen');

		var currentFlashVars = {
			movieUrl: video.videoParam.flvPath,
			videoWidth: video.videoParam.flvWidth,
			videoHeight: video.videoParam.flvHeight,
			width: video.videoParam.flvWidth,
			height: video.videoParam.flvHeight
		};
		
		//generate no cache string
		var noCache = new Date();
		noCache = "?nocache=" + noCache.getTime();

		swfobject.embedSWF(Flash.videoPlayer||'http://res.nie.netease.com/comm/js/nie/util/player.swf' + noCache, "video-player", video.videoParam.flvWidth, video.videoParam.flvHeight,"10.2.154", Flash.expressInstall, currentFlashVars, Flash.defaultVideoParams);

	}
};

/**
 * Turns a background sprite image into a draggable and rotatable 3D model viewer.
 *
 * @copyright   2010, Blizzard Entertainment, Inc
 * @class       ModelRotator
 * @requires    Core
 */
var ModelRotator = Class.extend({

	/**
	 * DOM element objects.
	 */
	node: null,
	viewer: null,
	document: null,
	zoomButton: null,
	rotateButton: null,

	/**
	 * Timer for automatic rotation.
	 */
	timer: null,

	/**
	 * Is the model currently being dragged or rotated.
	 */
	rotating: false,
	dragging: false,

	/**
	 * Is this being used on a touch screen device?
	 */
	isTouch: /(iphone|ipad|ipod|andriod)/.exec(navigator.userAgent.toLowerCase()),

	/**
	 * Current state of the model.
	 */
	frame: 0,
	lastFrame: 0,
	offset: null,
	lastOffset: null,
	coords: null,
	xPosition: 0,
	yPosition: 0,
	canDrag: false,

	/**
	 * Custom configuration.
	 */
	config: {},

	/**
	 * Overwrites for specific keys.
	 *
	 * frame width, number of frames per sequence, xoffset, yoffset
	 */
	overwrites: {},

	/**
	 * Create draggable object.
	 *
	 * @constructor
	 * @param node
	 * @param config
	 */
	init: function(node, config) {
		node = $(node);

		if (!node.length)
			return;

		// Merge configuration
		this.config = $.extend({}, {
			key: '',
			frameWidth: 280,
			frameHeight: 280,
			sequenceWidth: 6720,
			totalFrames: 24,
			velocity: 10,
			rotateTimer: 100,
			yOffset: 0,
			xOffset: 0,
			viewerClass: '.viewer',
			rotate: true,
			rotateClass: '.rotate',
			zoom: true,
			zoomClass: '.zoom',
			zoomCallback: function(value) {
				return value.replace('rotate', 'zoom');
			},
			dragCallback: null,
			invert: true
		}, config);

		var cfg = this.config;

		// Grab objects
		this.node = node;
		this.viewer = node.find(cfg.viewerClass);
		this.document = $(document);
		this.zoomButton = node.find(cfg.zoomClass);
		this.rotateButton = node.find(cfg.rotateClass);

		// If touch device
		if (this.isTouch) {
			this.node.addClass('touch');
		}

		// Setup event binds
		if (cfg.rotate && this.rotateButton.length) {
			this.rotateButton.bind('click', $.proxy(this.rotate, this));
		} else {
			this.rotateButton.remove();
		}

		if (cfg.zoom && this.zoomButton.length) {
			this.zoomButton.bind('click', $.proxy(this.zoom, this));
		} else {
			this.zoomButton.remove();
		}

		if (this.viewer.length) {
			this.viewer.bind((this.isTouch ? 'touchstart' : 'mousedown'), $.proxy(this.down, this));
			this.document.bind((this.isTouch ? 'touchend' : 'mouseup'), $.proxy(this.up, this));
			this.document.bind((this.isTouch ? 'touchmove' : 'mousemove'), $.proxy(this.move, this));

			// Prevent text selection in IE
			if (Core.isIE()) {
				this.viewer[0].onselectstart = function () { return false; };
			}

			// Update background image if it's IE6
			if (Core.isIE(6)) {
				this.viewer[0].style.backgroundImage = this.viewer[0].style.backgroundImage.replace(".png", "-ie6.png");
			}
		}

		// Overwrites?
		var map = this.overwrites;

		if (cfg.key && map[cfg.key]) {
			cfg.frameWidth 		= map[cfg.key][0];
			cfg.frameHeight		= map[cfg.key][0];
			cfg.totalFrames 	= map[cfg.key][1];
			cfg.sequenceWidth 	= map[cfg.key][0] * map[cfg.key][1];
			cfg.xOffset 		= map[cfg.key][2] || 0;
			cfg.yOffset 		= map[cfg.key][3] || 0;
		}

		// Get frame position
		var bgPos = this.viewer.css((Core.isIE() ? 'background-position-x' : 'background-position'));
			bgPos = bgPos.replace('px', '').replace('%', '').replace('-', '').split(' ')[0];

		this.frame = this.lastFrame = Math.round(bgPos / cfg.frameWidth);

		// Verify image
		this.verifyImage();
	},

	/**
	 * Get background image (that works in all browsers).
	 *
	 * @return string
	 */
	backgroundImage: function() {
		var url = this.viewer.css('background-image');
			url = url.replace(/^url\(('|")?/, ''); // Remove leading url("
			url = url.replace(/('|")?\)$/, '');    // Remove trailing ")

		return url;
	},

	/**
	 * Triggered when mouse is pressed, initiates drag.
	 *
	 * @param e
	 */
	down: function(e) {
		if (!this.isTouch && e.which != 1 || !this.canDrag) {
			return false;
		}

		// Disable auto-rotation
		if (this.rotating) {
			this.stop();
		}

		// We are now dragging!
		this.dragging = true;
		this.node.addClass('dragging');

		if (this.config.dragCallback) {
			this.config.dragCallback(true);
		}

		// Save mouse pointer coords on dragstart
		if (this.coords == null) {
			this.coords = this.mouseCoords(e);
		}

		return false;
	},

	/**
	 * Is it currently dragging.
	 *
	 * @return boolean
	 */
	isDragging: function() {
		return this.dragging;
	},

	/**
	 * Is it currently rotating.
	 *
	 * @return boolean
	 */
	isRotating: function() {
		return this.rotating;
	},

	/**
	 * Calculate mouse offset from passed in source coord.
	 *
	 * @param e
	 * @param coords
	 * @return object
	 */
	mouseOffset: function(e, coords) {
		var mousePos = this.mouseCoords(e);

		return {
			x: mousePos.x - coords.x,
			y: mousePos.y - coords.y
		};
	},

	/**
	 * Calculate mouse coordinates.
	 *
	 * @param e
	 * @return object
	 */
	mouseCoords: function(e) {
		if (this.isTouch) {
			e = e.touches[0];
		}

		if (e.pageX && e.pageY) {
			return {
				x: e.pageX,
				y: e.pageY
			};
		}

		return {
			x: e.clientX + (document.body.scrollLeft - document.body.clientLeft),
			y: e.clientY + (document.body.scrollTop  - document.body.clientTop)
		};
	},

	/**
	 * Executes a timer that handles the rotation of the model.
	 *
	 * @param e
	 */
	move: function(e) {
		if (!this.dragging || this.rotating || this.timer || !this.canDrag) {
			return false;
		}

		// Fake a timer being used
		this.timer = true;

		// On mousemove calculate difference to dragstart coords
		this.offset = this.mouseOffset(e, this.coords);

		// Start drag rotation
		this._drag();

		return true;
	},

	/**
	 * Reset the viewer to defaults.
	 */
	reset: function() {
		this.node.removeClass('load-fail can-drag');

		this.stop();
		this.dragging = false;
		this.canDrag = false;
		this.frame = 0;
		this.lastFrame = 0;
		this.offset = null;
		this.lastOffset = null;
		this.coords = null;
		this.xPosition = 0;
		this.yPosition = 0;
	},

	/**
	 * Start or stop the automatic rotation.
	 *
	 * @param e
	 */
	rotate: function(e) {
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}

		if (this.timer !== null) {
			this.stop();
		} else {
			this.timer = setInterval($.proxy(this._rotate, this), this.config.rotateTimer);
			this.rotating = true;
			this.node.addClass('rotating');
		}
	},

	/**
	 * Set the drag callback.
	 *
	 * @param callback
	 */
	setDragCallback: function(callback) {
		if (Core.isCallback(callback))
			this.config.dragCallback = callback;
	},

	/**
	 * Set the image to use (for changing dynamically).
	 *
	 * @param src
	 */
	setImage: function(src) {
		this.reset();

		this.viewer.css({
			backgroundPosition: '0 0',
			backgroundImage: "url('" + src + "')"
		});

		this.verifyImage();
	},

	/**
	 * Stop the rotation.
	 */
	stop: function() {
		if (this.rotating) {
			clearInterval(this.timer);

			this.timer = null;
			this.rotating = false;
			this.node.removeClass('rotating');
		}
	},

	/**
	 * Triggered when mouse is released, disables drag and resets.
	 */
	up: function() {
		if (this.rotating || !this.canDrag) {
			return false;
		}

		this.lastFrame = this.frame;
		this.coords = null;

		// No longer dragging
		this.dragging = false;
		this.node.removeClass('dragging');

		if (this.config.dragCallback) {
			this.config.dragCallback(false);
		}

		return true;
	},

	/**
	 * Verify the image has loaded, else throw errors.
	 */
	verifyImage: function() {
		var path = this.viewer[0].style.backgroundImage || '';

		// Only verify if an image is actually set
		if (path.indexOf('.jpg') == -1 && path.indexOf('.png') == -1) {
			return;
		}

		var self = this,
			bgImg = new Image();

		bgImg.onerror = function() {
			self.node.addClass('load-fail');
		};

		bgImg.onload = function() {
			if (this.width > self.config.frameWidth) {
				self.node.addClass('can-drag');
				self.canDrag = true;
			}
		};

		bgImg.src = this.backgroundImage();
	},

	/**
	 * Zoom into an image by opening a lightbox.
	 *
	 * @param e
	 */
	zoom: function(e) {
		e.stopPropagation();
		e.preventDefault();

		Lightbox.loadImage([{
			src: this.config.zoomCallback(this.backgroundImage())
		}]);
	},

	/**
	 * Rotate through each frame using a timer.
	 */
	_rotate: function() {
		var config = this.config,
			frame = this.lastFrame + 1;

		if (frame >= config.totalFrames) {
			frame = 0;
		}

		var x = (frame * config.frameWidth) + config.xOffset,
			y = 0 + config.yOffset;

		// Save last coords for calculations
		this.frame = this.lastFrame = frame;
		this.xPosition = x;
		this.yPosition = y;

		// Set position
		this.viewer[0].style.backgroundPosition = '-'+ x +'px '+ y +'px';
	},

	/**
	 * Drag the model horizontally and save the mouse coordinates and frame status.
	 */
	_drag: function() {
		var config = this.config;

		// Calculate how many frames should show depending on distance/velocity
		var lastFrame = this.lastFrame || 0,
			goToFrame;

		// If we inverting rotation, go opposite direction
		if (config.invert) {
			goToFrame = lastFrame + -Math.round(this.offset.x / config.velocity);
		} else {
			goToFrame = lastFrame + Math.round(this.offset.x / config.velocity);
		}

		// Is frame within range
		if (goToFrame >= config.totalFrames || goToFrame < 0) {
			goToFrame = goToFrame - (config.totalFrames * Math.floor(goToFrame / config.totalFrames));
		}

		// Calculate new X background position based on current X background position
		var x = (goToFrame * config.frameWidth) + config.xOffset,
			y = 0 + config.yOffset;

		// Set div's X background position to 0 if new X background postion exceeds image width
		if (x > config.sequenceWidth || x < -config.sequenceWidth) {
			x = 0 + config.xOffset;
		}

		// Save last coords for calculations
		this.frame = goToFrame;
		this.lastOffset = this.offset;
		this.xPosition = x;
		this.yPosition = y;
		this.timer = null;

		// Set position
		this.viewer[0].style.backgroundPosition = '-'+ x +'px '+ y +'px';
	}

});

var SC2ModelRotator = ModelRotator.extend({

	/**
	 * Store specific unit information.
	 *
	 * frame width, number of frames per sequence, xoffset, yoffset
	 */
	overwrites: {
		"thor": 		[250, 31],
		"ultralisk": 	[300, 31],
		"dark-templar": [212, 30],
		"colossus": 	[212, 30],
		"mothership": 	[230, 29],
		"mutalisk": 	[212, 60],
		"archon": 		[212, 36],
		"overlord": 	[212, 32],
		"zergling": 	[212, 30],
		"baneling": 	[212, 30],
		"overseer":		[212, 29],
		"broodlord": 	[212, 30],
		"warp-prism": 	[212, 28],
		"voidray": 		[212, 30]
	}

});
/**
 *
 * @copyright  2010, Blizzard Entertainment, Inc
 * @class      Lightbox
 *
 * @requires   Core
 */

var Lightbox = {
    timeout:        0,
    initialized:    false,
    contents:       [], //list of images or videos
    currentIndex:   0, //used for paging if content.length > 1
    contentType:    "image",
    DEFAULT_WIDTH:  480,
    DEFAULT_HEIGHT: 360,
    anchorClose:    true,
	bottomLinkShow:	true,
    /**
     * Initializes lightbox and caches relevant DOM elements
     */
    init: function() {
        //init blackout first (adds to DOM)
        Blackout.initialize();

        //build lightbox elements (adds to DOM)
        Lightbox.build();

        Lightbox.initialized = true;
    },
    /**
     * Store content data for use later
     *
     * @param object content - array of images or videos
     * @param string contentType - type of content being show in the ligthbox, either "image" or "video"
     */
     storeContentData: function(content, contentType) {
         if (!Lightbox.initialized)
             Lightbox.init();

        //store image list for paging
        Lightbox.contents = content;

        Lightbox.contentType = contentType;

        //store current index
        Lightbox.currentIndex = 0;

        //disable/enable paging
        Lightbox.controls.toggleClass("no-paging", (content.length < 2));
    },
    /**
     * Loads image into lightbox, adds paging if necessary
     *
     * @param array images - array of objects containing title (optional), src, and path (optional) of image to view.
     *  Example:
     *      [{ title: "Image title",
     *        src:    "http://us.media.blizzard.com/sc2/media/screenshots/protoss_archon_002-large.jpg",
     *        path:   "/sc2/en/media/screenshots/?view#/protoss_archon_002" (omitting the path property will cause the gallery-view icon to hide)
     *      }]
     *
     */
    loadImage: function(images, dontStore) {
		if (!Lightbox.initialized)
			Lightbox.init();

		//store data
		if (!dontStore)
			Lightbox.storeContentData(images, "image");

		var index = (typeof images == 'number') ? images : 0;

		//show loading anim and start image fetch
		if (Lightbox.contents[index].src != "") {
			Lightbox.currentIndex = index;
			Lightbox.setFrameDimensions(Lightbox.DEFAULT_WIDTH, Lightbox.DEFAULT_HEIGHT);

			Lightbox.content
				.removeAttr("style")
				.addClass("loading")
				.removeClass("lightbox-error")
				.html("");

			Lightbox.show();
			Lightbox.setImage(Lightbox.preloadImage(Lightbox.contents[index]));
		} else {
			Lightbox.error();
		}
    },
    /**
     * Checks image until its loaded then sets as background image
     */
    setImage: function(loadingImage) {

            if (Core.isIE("6")) {
                if (Lightbox.controls.hasClass("no-paging") && Lightbox.controls.hasClass("no-gallery")) {
                    Lightbox.controls.addClass("no-controls").removeClass("no-paging no-gallery");
                }
            }

        if (loadingImage.complete) {

            //set as background image
            Lightbox.emptyContent();

            Lightbox.setFrameDimensions(loadingImage.width, loadingImage.height);
            Lightbox.content.html(loadingImage);
            Lightbox.checkGalleryLinkDisplay(!(Lightbox.contents[Lightbox.currentIndex].path));
        } else {
            Lightbox.timeout = window.setTimeout( function () { Lightbox.setImage(loadingImage) }, 100);
        }
    },
    /**
     * Loads a video or set of videos with paging in the lightbox
     *
     * @param arrray videos - array of video data
     *
     *  Example:
     *      [{  title:       "Video Title Text", //optional
     *          width:       890,
     *          height:      500,
     *          flvPath:     '/what-is-sc2/what-is-sc2.flv',
     *          path:        '/sc2/en/media/videos#/what-is-sc2' //optional
     *          showRating:  true, //optional, defaults to true
     *          cachePlayer: false //optional, defaults to false
     *      }];
     */
    loadVideo: function(videos) {
		if (!Lightbox.initialized)
			Lightbox.init();

		//store data
		Lightbox.storeContentData(videos, "video");

		//set first video
		Lightbox.setVideo(videos[0]);
    },
    /**
     * Sets video in lightbox
     */
    setVideo: function(video) {
        var currentFlashVars = {
            flvPath:   (video.flvBase || Flash.videoBase) + video.flvPath,
            flvWidth:  video.width,
            flvHeight:    video.height,
            captionsPath:      "",
            customRating: video.customRating,
            captionsDefaultOn: (Core.locale != "en-us" && Core.locale != "en-gb")
        };

        //add rating values
        if (!video.showRating || false) {
            currentFlashVars = $.extend(Flash.defaultVideoFlashVars, currentFlashVars);
        }

        //generate no cache
            var noCache = new Date();
            noCache = "?nocache=" + noCache.getTime();

        //add captions
        if (typeof video.captionsPath != "undefined" && video.captionsPath != "") {
            currentFlashVars.captionsPath = video.captionsPath;
        } else {
            delete currentFlashVars.captionsPath;
        }

        //change rating if needed
        if (typeof video.customRating != "undefined" && video.customRating != "") {
        	if (video.customRating.indexOf("NONE") > -1) {
            	delete currentFlashVars.ratingPath;
            } else {
            	currentFlashVars.ratingPath = video.customRating;
            }
        } else {
            currentFlashVars.ratingPath = Flash.ratingImage;
        }

        //create a target for the video
        Lightbox.emptyContent();
        $("<div id='flash-target' />").appendTo(Lightbox.content);

        if(video.flashVars) {
        	currentFlashVars = video.flashVars;
        }

        swfobject.embedSWF(Flash.videoPlayer + noCache, 'flash-target', video.width, video.height,
                Flash.requiredVersion, Flash.expressInstall, currentFlashVars, Flash.defaultVideoParams);

        Lightbox.setFrameDimensions(video.width, video.height);
        Lightbox.show();
        
        //(zk)
        Lightbox.checkGalleryLinkDisplay(!(Lightbox.contents[Lightbox.currentIndex].path));
    },
    /**
     * View image in the media gallery
     */
    viewInGallery: function() {
        //hide tooltip to prevent artifacts
        if (Tooltip.initialized)
            Tooltip.wrapper.hide();

        Core.goTo(Lightbox.contents[Lightbox.currentIndex].path);

        return false;
    },
    /**
     * Dynamically sets border widths/heights based on dimensions so style integrity is maintained
     */
    setFrameDimensions: function(width, height) {

        if (width == 0 || height == 0) {
            Lightbox.error();
        } else {

            Lightbox.container
                .css({
                    top:    Page.scroll.top + "px",
                    width:  width + "px",
                    height: height + "px"
                });

            Lightbox.borderTop.width(width - 10 + "px");
            Lightbox.borderbottom.width(width  - 12 + "px");
            Lightbox.borderRight.height(height - 9 + "px");
            Lightbox.borderLeft.height(height - 9 + "px");
        }
    },
    /**
     * Toggles class on controls depending on if there is a link to the media gallery
     *
     * @param object content
     */
    checkGalleryLinkDisplay: function(hasPath) {
        Lightbox.controls.toggleClass("no-gallery", hasPath);
    },
    /**
     * Starts image preload
     */
    preloadImage: function(loadingImage) {
        var tempImage = new Image();
        tempImage.src = loadingImage.src;

        return tempImage;
    },
	/**
	 * Show the lightbox.
	 */
    show: function() {
        Blackout.show(function() {
			Lightbox.container[0].style.display = "block";
		},  Lightbox.close);
    },
    /**
     * Hides the lightbox
     */
    close: function() {
        clearTimeout(Lightbox.timeout);

        Blackout.hide(Lightbox.container.hide());

        //unload swf if needed
        if (Lightbox.contentType == "video") {
            swfobject.removeSWF("flash-target");
        }

        //hide tooltip to prevent artifacts
        if (Tooltip.initialized)
            Tooltip.wrapper.hide();
    },
    /**
     * Clears the content/classes of the viewer, putting it back into a fresh state
     */
    emptyContent: function() {
        Lightbox.content
            .removeAttr("style")
            .removeClass("loading lightbox-error")
            .empty();
    },
    /**
     * Shows lightbox in error state
     */
    error: function() {

        Lightbox.emptyContent();

        Lightbox.setFrameDimensions(Lightbox.DEFAULT_WIDTH, Lightbox.DEFAULT_HEIGHT);

        Lightbox.content
            .addClass("lightbox-error")
            .html("Error loading content.");

        Lightbox.show();
    },
    /**
     * Builds lightbox elements on demand so they aren't in DOM until we need them
     */
    build: function() {

        Lightbox.anchor =     $('<div id="lightbox-anchor" />')
                                    .click(function() {
                                        if (Lightbox.anchorClose) {
                                            Lightbox.close();
                                        }
                                    });
        Lightbox.container =  $('<div id="lightbox-container" />')
                                    .mouseover(function() { Lightbox.anchorClose = false })
                                    .mouseout(function() { Lightbox.anchorClose = true })
                                    .appendTo(Lightbox.anchor);
        Lightbox.content =    $('<div id="lightbox-content" />')
                                    .mouseover(function() { Lightbox.anchorClose = false })
                                    .mouseout(function() { Lightbox.anchorClose = true })
                                    .appendTo(Lightbox.container).click(Lightbox.next);

        //ui-element link element template
        var uiElementLink = $("<a />").addClass("ui-element").attr("href", "javascript:;");

        //build controls
        Lightbox.controls = $('<div class="control-wrapper no-paging no-gallery" />');
		var bottomDis;this.bottomLinkShow?bottomDis="display:block;":bottomDis="display:none;";
        Lightbox.controls
            .append(
               		$('<div style="'+bottomDis+'" class="lightbox-controls ui-element" />')
                    //previous
                    .append(uiElementLink.clone().addClass("previous").click(Lightbox.previous))
                    //next
                    .append(uiElementLink.clone().addClass("next").click(Lightbox.next))
                    //gallery view
                    .append(uiElementLink.clone().addClass("gallery-view").click(Lightbox.viewInGallery)
                            .mouseover(function() {
                               //(zk) Tooltip.show(this, Msg.ui.viewInGallery);
                            	//(zk) Tooltip.wrapper.css("z-index", "9007");
                            })
                            .mouseout(function() {
                            	//(zk)  Tooltip.wrapper.css("z-index", "1000")
                            }))
            );

        //create borders before appending (need to access borders later to resize
        var border = $("<div />").addClass("border");
        Lightbox.borderTop    = border.clone().attr("id", "lb-border-top");
        Lightbox.borderRight  = border.clone().attr("id", "lb-border-right");
        Lightbox.borderbottom = border.clone().attr("id", "lb-border-bottom");
        Lightbox.borderLeft   = border.clone().attr("id", "lb-border-left");

        //plain corner element to clone
        var corner = $("<div />").addClass("corner");

        //append everything
        Lightbox.container
            //add corners
            .append(corner.clone().addClass("corner-top-left"))
            .append(corner.clone().addClass("corner-top-right"))
            .append(corner.clone().addClass("corner-bottom-left"))
            .append(corner.clone().addClass("corner-bottom-right"))
            //add borders
            .append(Lightbox.borderTop)
            .append(Lightbox.borderRight)
            .append(Lightbox.borderbottom)
            .append(Lightbox.borderLeft)
            //paging controls
            .append(Lightbox.controls)
            //close button
            .append(uiElementLink.clone().addClass("lightbox-close").click(Lightbox.close));

        //append to body at end to avoid any redraws
        Lightbox.anchor.appendTo("body");

        if (Core.isIE("6")) {
            /* toggle so IE will load images properly*/

            Lightbox.content.show().hide();
        }

    },
    /**
     * Gets the next image
     */
    next: function() {
        var totalContent = Lightbox.contents.length;

        if (totalContent > 1) {
            //increment index
            Lightbox.currentIndex++;

            //wrap back to 0
            if (Lightbox.currentIndex >= totalContent) {
                Lightbox.currentIndex = 0;
            }

            if (Lightbox.contentType == "image") {
                Lightbox.setImage(Lightbox.preloadImage(Lightbox.contents[Lightbox.currentIndex]));
            } else if (Lightbox.contentType == "video") {
                Lightbox.setVideo(Lightbox.contents[Lightbox.currentIndex]);
            }
        }
    },
    /**
     * Gets the previous image
     */
    previous: function() {
        var totalContent = Lightbox.contents.length;

        if (totalContent > 1) {
            //decrement
            Lightbox.currentIndex--;

            if (Lightbox.currentIndex < 0) {
                Lightbox.currentIndex = Lightbox.contents.length -1;
            }

            if (Lightbox.contentType == "image") {
                Lightbox.setImage(Lightbox.preloadImage(Lightbox.contents[Lightbox.currentIndex]));
            } else if (Lightbox.contentType == "video") {
                Lightbox.setVideo(Lightbox.contents[Lightbox.currentIndex]);
            }
        }
    }
};
var RightBanner = {
	init:function(){
		this.initActivityCalendar();
	},		
	initActivityCalendar:function(){
		if(!$(".w-activity-calendar"))return;
		ActivityCalendar.initWidget();
	}
};

// JavaScript Document
var Unit={
	
	init:function(){
		
		$(".unit-data-tables tr,.w-search input.search-button").hover(
		   function(){$(this).addClass("active");},
		   function(){$(this).removeClass("active");}
		);
		$(".race:eq(0)").show();
		$(".units-con:eq(0)").show();
		
		$('.stat-data-wol .tabs li').eq(0).addClass("on");
		$(".stat-data-wol .model-viewer > div").eq(0).show().siblings().hide();	
		$(".stat-data-wol .battle > table").eq(0).show();
		
		$('.stat-data-hots .tabs li').eq(0).addClass("on");
		$(".stat-data-hots .model-viewer > div").eq(0).show().siblings().hide();	
		$(".stat-data-hots .battle > table").eq(0).show();
		
		$(".unit-map-box").each(function(){
			
			$(this).find('.tab li').click(function(){
		        var index=$(this).index();
				$(this).parent().parent().find(".units-con,.race").hide().eq(index).show();
				$(this).parent('.tab').find('li').removeClass("on over");
			    $(this).addClass("on");
				$(".unit-map-box").css("zoom","0").css("zoom","1");
				return false;   
			 })		   						   
		
			$(this).find(".tab li").mouseover(function(){
				$(this).parent('.tab').find("li").removeClass("over");
			    $(this).not('.on').addClass("over");
				return false;   
			})

			//$('.unit-map-box .tab li').eq(0).click();
		});
							  
		$('.stat-data-wol .tabs li').click(function(){
			var index=$(this).index();
			$('.stat-data-wol .tabs li').removeClass("on").eq(index).addClass("on");
			$(".stat-data-wol .unit-holography .model").hide().eq(index).fadeIn("slow");
			$(".stat-data-wol .battle table").hide();//.eq(index).fadeIn("slow");
			//$(".stat-data-wol .battle #modeSCV-stats-"+index).fadeIn("slow");
			$(".stat-data-wol .battle table").eq(index).fadeIn("slow");
			return false;
		});
		
		$('.stat-data-hots .tabs li').click(function(){
			var index=$(this).index();
			$('.stat-data-hots .tabs li').removeClass("on").eq(index).addClass("on");
			$(".stat-data-hots .unit-holography .model").hide().eq(index).fadeIn("slow");
			$(".stat-data-hots .battle table").hide();//.eq(index).fadeIn("slow");
			$(".stat-data-hots .battle #modeSCV-stats-"+index).fadeIn("slow");
			return false;
		});
		//$('.unit-statistics .tabs li').eq(0).click();
	
		//巨像
		$(".stat-data-wol #model-colossus-0").parents(".unit-holography").addClass("tall-unit");
		$(".stat-data-hots #model-colossus-0").parents(".unit-holography").addClass("tall-unit");
		
	},
	switchUnitMode:function(tab, mode) {
		if (!$(tab).parent().hasClass('ui-tabs-selected')) {
			var holo = $(".unit-holography");
			var active = holo.find(".model:visible");

			active.hide();
			active.siblings('.model').fadeIn(1000);
		}
	},
	_:null
};


/**
 * Dynamically create tooltips, append specific content from different medians, and display at certain positions.
 *
 * @copyright   2010, Blizzard Entertainment, Inc
 * @class       Tooltip
 * @requires    Page
 * @example
 *
 *      onmouseover="Tooltip.show(this, 'This is the tooltip text!');"
 *
 */

var Tooltip = {

    /**
     * The current tooltip object and its markup
     */
    wrapper: null,

    /**
     * Content within the tooltip
     */
    contentCell: null,

    /**
     * Cached results from the AJAX responses
     */
    cache: {},

    /**
     * Flag storing intialization status of tooltip
     */
    initialized: false,

	/**
	 * Is the mouse currently hovering over the node?
	 */
	currentNode: null,

	/**
	 * Is the tooltip visible?
	 */
	visible: false,

	/**
	 * Default options
	 */
	options: {
		ajax: false,
		className: false,
		location: 'topRight',
		useTable: false,
		onPosition: null
	},

    /**
	 * Max tooltip width for IE6.
	 */
	maxWidth: 500,

    /**
     * Initialize the tooltip markup and append it to document.
     *
     * @constructor
     */
    initialize: function() {
		var tooltipDiv = $('<div/>').addClass('ui-tooltip').appendTo("body");

		if (Core.isIE(6) && document.location.protocol === 'http:') {
			$('<iframe/>', {
				src: 'javascript:void(0);',
				frameborder: 0,
				scrolling: 'no',
				marginwidth: 0,
				marginheight: 0
			}).addClass('tooltip-frame').appendTo('body');
		}

		if (!Tooltip.options.useTable) {
			Tooltip.contentCell = $('<div/>').addClass('tooltip-content').appendTo(tooltipDiv);

		} else {
			var tooltipTable = $("<table>", {
				cellspacing: 0,
				cellpadding: 0
			}).appendTo(tooltipDiv);

			var emptyCell = $('<td>').attr("valign", "top").text(" "),
				emptyRow = $('<tr>'),
				contentCell = emptyCell.clone();

			tooltipTable
				.append(
					emptyRow.clone()
						.append(emptyCell.clone().addClass("top-left"))
						.append(emptyCell.clone().addClass("top-center"))
						.append(emptyCell.clone().addClass("top-right"))
				)
				.append(
					emptyRow.clone()
						.append(emptyCell.clone().addClass("middle-left"))
						.append(contentCell.addClass("middle-center"))
						.append(emptyCell.clone().addClass("middle-right"))
				)
				.append(
					emptyRow.clone()
						.append(emptyCell.clone().addClass("bottom-left"))
						.append(emptyCell.clone().addClass("bottom-center"))
						.append(emptyCell.clone().addClass("bottom-right"))
				);

			Tooltip.contentCell = contentCell;
		}

        // Assign to reference later
        Tooltip.wrapper = tooltipDiv;
        Tooltip.initialized = true;
    },

	/**
	 * Bind a mouse over to all tooltips in the page. Will only display the title of the element.
	 * Will first detect data-tooltip and then the tooltip attribute.
	 *
	 * @param query
	 * @param options
	 * @param callback
	 */
	bind: function(query, options, callback) {
		var doc = $(document),
			func;

		if (Core.isCallback(callback)) {
			func = callback;
		} else {
			func = function() {
				var self = $(this),
					title = self.data('tooltip') || this.title;

				if (title && self.attr('rel') != 'np') {
					Tooltip.show(this, title, self.data('tooltip-options') || options);
				}
			};
		}

		doc.undelegate(query, 'mouseover.tooltip', func);
		doc.delegate(query, 'mouseover.tooltip', func);
	},

    /**
     * Grab the content for the tooltip, then pass it on to be positioned.
     *
     * @param node
     * @param content
     * @param options - className, ajax, location
     */
    show: function(node, content, options) {
		if (!Tooltip.wrapper)
			Tooltip.initialize();

		if (options === true)
			options = { ajax: true };
		else
			options = options || {};

		options = $.extend({}, Tooltip.options, options);

		Tooltip.currentNode = node = $(node);

		// Update trigger node
        node.mouseout(function() {
        	Tooltip.hide();

			if (options.className)
				Tooltip.wrapper.removeClass(options.className);
        });

		// Update values
		if (!Tooltip['_'+ options.location])
			options.location = Tooltip.options.location;

		// Left align tooltips in the right half of the screen
		if (options.location == Tooltip.options.location && node.offset().left > $(window).width() / 2)
			options.location = 'topLeft';

		if (options.className)
			Tooltip.wrapper.addClass(options.className);

		// Content: DOM node created w/ jQuery
		if (typeof content === 'object') {
			Tooltip.position(node, content, options);

		} else if (typeof content === 'string') {

			// Content: AJAX
			if (options.ajax) {
				if (Tooltip.cache[content]) {
					Tooltip.position(node, Tooltip.cache[content], options);
				} else {
					var url = content;

					if (url.indexOf(Core.projectUrl) != 0) { // Add base URL when provided URL doesn't begin with project URL (e.g. /d3)
						url = Core.baseUrl + content;
					}

					$.ajax({
						type: "GET",
						url: url,
						dataType: "html",
						global: false,
						beforeSend: function() {
							// Show "Loading..." tooltip when request is being slow
							setTimeout(function() {
								if (!Tooltip.visible)
									Tooltip.position(node, Msg.ui.loading, options);
							}, 500);
						},
						success: function(data) {
							if (Tooltip.currentNode == node) {
								Tooltip.cache[content] = data;
								Tooltip.position(node, data, options);
							}
						},
						error: function(xhr) {
							if (xhr.status != 200)
								Tooltip.hide();
						}
					});
				}

			// Content: Copy content from the specified DOM node (referenced by ID)
			} else if (content.substr(0, 1) === '#') {
				Tooltip.position(node, $(content).html(), options);

			// Content: Text
			} else {
				Tooltip.position(node, content, options);
			}
		}
    },

    /**
     * Hide the tooltip.
     */
	hide: function() {
		if (!Tooltip.wrapper)
			return;

		if (Core.isIE(6)) {
			$('.tooltip-frame').hide();
			Tooltip.wrapper.removeAttr('style');
		}

		Tooltip.wrapper.hide();
		Tooltip.wrapper.unbind('mousemove.tooltip');

		Tooltip.currentNode = null;
		Tooltip.visible = false;
	},

    /**
     * Position the tooltip at specific coodinates.
     *
     * @param node
     * @param content
	 * @param options
     */
    position: function(node, content, options) {
		if (!Tooltip.currentNode)
			return;

		if (Core.isCallback(options.onPosition)) {
			content = options.onPosition(content);
		}

		if (typeof content == 'string')
	        Tooltip.contentCell.html(content);
		else
			Tooltip.contentCell.empty().append(content);

        var width = Tooltip.wrapper.outerWidth(),
			height = Tooltip.wrapper.outerHeight();

		if (Core.isIE(6) && width > Tooltip.maxWidth)
			width = Tooltip.maxWidth;

		var coords = Tooltip['_' + options.location](width, height, node);

		if (coords)
			Tooltip.move(coords.x, coords.y, width, height);
    },

	/**
	 * Move the tooltip around.
	 *
	 * @param x
	 * @param y
	 * @param w
	 * @param h
	 */
	move: function(x, y, w, h) {
		Tooltip.wrapper
			.css("left", x +"px")
			.css("top",  y +"px")
			.show();

		Tooltip.visible = true;

		if (Core.isIE(6)) {
			$('.tooltip-frame').css({
				width: w + 60,
				height: h,
				left: (x - 60) +"px",
				top: y +"px"
			}).fadeTo(0, 0).show();

			Tooltip.wrapper.css('width', w);
		}
	},

	/**
	 * Position at the mouse cursor.
	 *
	 * @param width
	 * @param height
	 * @param node
	 */
	_mouse: function(width, height, node) {
		node.unbind('mousemove.tooltip').bind('mousemove.tooltip', function(e) {
			Tooltip.move((e.pageX + 10), (e.pageY + 10), width, height);
		});
	},

	/**
	 * Position at the top left.
	 *
	 * @param width
	 * @param height
	 * @param node
	 * @return object
	 */
	_topLeft: function(width, height, node) {
		var offset = node.offset(),
			x = offset.left - width,
			y = offset.top - height;

		return Tooltip._checkViewport(x, y, width, height, node);
	},

	/**
	 * Position at the top center.
	 *
	 * @param width
	 * @param height
	 * @param node
	 * @return object
	 */
	_topCenter: function(width, height, node) {
		var offset = node.offset(),
			nodeWidth = node.outerWidth(),
			x = offset.left + ((nodeWidth / 2) - (width / 2)),
			y = offset.top - height - 5;

		return Tooltip._checkViewport(x, y, width, height, node);
	},

	/**
	 * Position at the top right.
	 *
	 * @param width
	 * @param height
	 * @param node
	 * @return object
	 */
	_topRight: function(width, height, node) {
		var offset = node.offset(),
			nodeWidth = node.outerWidth(),
			x = offset.left + nodeWidth,
			y = offset.top - height;

		return Tooltip._checkViewport(x, y, width, height, node);
	},

	/**
	 * Position at the middle left.
	 *
	 * @param width
	 * @param height
	 * @param node
	 * @return object
	 */
	_middleLeft: function(width, height, node) {
		var offset = node.offset(),
			nodeHeight = node.outerHeight(),
			x = offset.left - width,
			y = (offset.top + (nodeHeight / 2)) - (height / 2);

		return Tooltip._checkViewport(x, y, width, height, node);
	},

	/**
	 * Position at the middle right.
	 *
	 * @param width
	 * @param height
	 * @param node
	 * @return object
	 */
	_middleRight: function(width, height, node) {
		var offset = node.offset(),
			nodeWidth = node.outerWidth(),
			nodeHeight = node.outerHeight(),
			x = offset.left + nodeWidth,
			y = (offset.top + (nodeHeight / 2)) - (height / 2);

		return Tooltip._checkViewport(x, y, width, height, node);
	},

	/**
	 * Position at the bottom left.
	 *
	 * @param width
	 * @param height
	 * @param node
	 * @return object
	 */
	_bottomLeft: function(width, height, node) {
		var offset = node.offset(),
			nodeHeight = node.outerHeight(),
			x = offset.left - width,
			y = offset.top + nodeHeight;

		return Tooltip._checkViewport(x, y, width, height, node);
	},

	/**
	 * Position at the bottom center.
	 *
	 * @param width
	 * @param height
	 * @param node
	 * @return object
	 */
	_bottomCenter: function(width, height, node) {
		var offset = node.offset(),
			nodeWidth = node.outerWidth(),
			nodeHeight = node.outerHeight(),
			x = offset.left + ((nodeWidth / 2) - (width / 2)),
			y = offset.top + nodeHeight + 5;

		return Tooltip._checkViewport(x, y, width, height, node);
	},

	/**
	 * Position at the bottom right.
	 *
	 * @param width
	 * @param height
	 * @param node
	 * @return object
	 */
	_bottomRight: function(width, height, node) {
		var offset = node.offset(),
			nodeWidth = node.outerWidth(),
			nodeHeight = node.outerHeight(),
			x = offset.left + nodeWidth,
			y = offset.top + nodeHeight;

		return Tooltip._checkViewport(x, y, width, height, node);
	},

	/**
	 * Makes sure the tooltip appears within the viewport.
	 *
	 * @param x
	 * @param y
	 * @param width
	 * @param height
	 * @param node
	 * @return object
	 */
	_checkViewport: function(x, y, width, height, node) {
		var offset = node.offset();

		// Greater than x viewport
		if ((x + width) > Page.dimensions.width)
			x = Page.dimensions.width - width;
			//x = (offset.left - width);

		// Less than x viewport
		if (x < 0)
			x = 15;

		// Greater than y viewport
		if ((y + height) > (Page.scroll.top + Page.dimensions.height))
			y = y - ((y + height) - (Page.scroll.top + Page.dimensions.height));

		// Node on top of viewport scroll
		else if ((offset.top - 100) < Page.scroll.top)
			y = offset.top + node.outerHeight();

		// Less than y viewport scrolled
		else if (y < Page.scroll.top)
			y = Page.scroll.top + 15;

		// Less than y viewport
		if (y < 0)
			y = 15;

		return {
			x: x,
			y: y
		};
	}

};

// Set data-tooltip binds globally
$(function() {
	Tooltip.bind('[data-tooltip]');
});
var Article = {
	init:function(){
		Utils.formatTable();
		this.commentsInt();
		this.chartNavTab();
	},
	orderFormat:function(){
		var url=location.href;
		if(url.indexOf(17015)>0){
			$(".content").find("img").parent().next().next().css("height","84px");	
		}	
	},
	reinitIframe:function(){
		var iframe = document.getElementById("commentsIframe");
		try{
			var bHeight = iframe.contentWindow.document.body.scrollHeight;
			var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
			var bro=$.browser;
			if(bro.msie || bro.mozilla){
				height=bHeight
			}else{
				height=	dHeight		
			}
			//var height = Math.max(bHeight, dHeight);
			iframe.height =  height;
		}catch (ex){}		
	},
	commentsInt:function(){
		window.setInterval(this.reinitIframe, 200);		
	},
	chartNavTab:function(){
		var Nav=$('.chart_nav'),
		NavList=$('.chart_nav_list'),
		NavListLi=NavList.find('li'),
		NavCon=$('.chart_nav_con'),
		NavListLiLen=NavListLi.length,
		NavListLiW=NavListLi.innerWidth();
		
		NavListLi.each(function(i){
			NavListLi.eq(i).css('left',(i*NavListLiW)-(i*6)+1);
			
			$(this).hover(function(){
				$(this).addClass('chart_nav_hov');
			},function(){
				$(this).removeClass('chart_nav_hov');
			})
			
			$(this).click(function(){
				NavListLi.removeClass('chart_nav_act');
				$(this).addClass('chart_nav_act');
				NavCon.removeClass('active');
				NavCon.eq(i).addClass('active');
			})
		})
	}
}
Function.prototype.$bind = function() {
    var func = this, 
    	args = arguments,
        object = Array.prototype.shift.call(arguments);
    return function(){
        var argc = Array.prototype.slice.call(args,0);
        Array.prototype.push.apply(argc,arguments);
        return func.apply(object||window,argc);
    };
};

Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1, //month
		"d+" : this.getDate(), //day
		"h+" : this.getHours(), //hour
		"m+" : this.getMinutes(), //minute
		"s+" : this.getSeconds(), //second
		"q+" : Math.floor((this.getMonth() + 3) / 3), //quarter
		"S" : this.getMilliseconds() //millisecond
	}

	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1,
				(this.getFullYear() + "")
						.substr(4 - RegExp.$1.length));
	}

	for ( var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1,
					RegExp.$1.length == 1 ? o[k] : ("00" + o[k])
							.substr(("" + o[k]).length));
		}
	}
	return format;
}

var Utils = {
		$:(function (){
			var doms = {};
			return function(key){							
				if(!!key&& typeof key == "string" &&!doms[key])doms[key] = $(key);
				return doms[key]
			};
		})(),
		
		/* example: Utils.createPaging({target:"paging",total:20,current:16,urlPattern:"/article/$0"}); */
		createPaging:function(options) {
			var htmls=[];
			var range=2;
			var getUrl=function(n){
				return options.urlPattern.replace("$0",n);
			};
			if(options.current>1){
				htmls.push('<a href="'+getUrl(options.current-1)+'" class="prev"><b></b></a>');
			}else{
				htmls.push('<a href="#" class="prev hide"><b></b></a>');
			}
			var numStart,numEnd;
			if(options.current-range>1){
				numStart=options.current-range;
				numEnd=options.current+range;
			}else{
				numStart=1;
				numEnd=range*2-numStart+2;
			}
			if(numEnd>options.total){
				numStart-=numEnd-options.total;
				numStart=Math.max(numStart,1);
				numEnd=options.total;
			}
			if(numStart>1){
				htmls.push('<span class="ellipsis">...</span>');
			}
			var decorationClass=["bdt","bdl","bdb","bdr","rctl","rctr","rcbl","rcbr"];
			var decoration="";
			for(var i=0;i<8;i++){
				decoration+='<div class="'+decorationClass[i]+'"><b></b></div>';
			}
			for(var i=numStart;i<=numEnd;i++){
				var nd=Math.floor(Math.log(i)/Math.log(10))+1;
				if(i==options.current){
					htmls.push('<span class="selnum nd'+nd+'">'+i+decoration+'</span>');
				}else{
					htmls.push('<a href="'+getUrl(i)+'" class="num nd'+nd+'">'+i+decoration+'</a>');
				}
			}
			if(numEnd<options.total){
				htmls.push('<span class="ellipsis">...</span>');
			}
			if(options.current<options.total){
				htmls.push('<a href="'+getUrl(options.current+1)+'" class="next"><b></b></a>');
			}else{
				htmls.push('<a href="#" class="next hide"><b></b></a>');
			}
			
			htmls.push('<span class="page-prompt">共'+options.total+'页 到第</span>');
			htmls.push('<input class="page-input" />');
			htmls.push('<span class="page-prompt">页</span>');
			htmls.push('<a href="#" class="submit"><b></b></a>');
			
			var submit=function(){
				var toPage = Number(target.find("input.page-input").val());
				toPage = Math.max(Math.min(toPage, options.total), 1);
				target.find("a.submit").attr("href", getUrl(toPage));
			};
			
			var target=$(document.getElementById(options.target));
			target.html(htmls.join(''));
			target.find("input.page-input").keydown(function(event){
				if(event.which==13){
					event.preventDefault();
					submit();
					window.location.href=target.find("a.submit").attr("href");
				}
			});
			target.find("a.submit").click(submit);
		},
		
		formatTable : function (selector) {
			var selector=selector?selector:$(".w-artcomm .content table");
			selector=selector.filter(function(index){
				return !$(this).data("formatted");
			});
			selector.wrap("<div class='table-wrapper-outer'><div class='table-wrapper-inner' /></div>");
			selector.find("tr:even td").addClass("even");
			selector.find("tr:odd td").addClass("odd");
			selector.attr("border", "0");
		},
		createMediaPaging:function(options) {
			this.mediaPage(options);
			$(".ui-pagination a").live("click",function(){
				var num=parseInt($(this).text());
				Utils.mediaPage(options,num);
				GalleryViewer.loadPage(num);
			})

		},
		mediaPage:function(options,num){
			var htmls=[];
			var range=5;
			var getUrl=function(n){
				return options.urlPattern.replace("$0",n);
			};
			if(num==null){
				options.current=parseInt(location.hash.split("#/")[1]);	
			}else{
				options.current=num;
			}
			
			var numStart,numEnd;
			if(options.current-range>1){
				numStart=options.current-range;
				numEnd=options.current+range;
			}else{
				numStart=1;
				numEnd=range*2-numStart+2;
			}
			if(numEnd>options.total){
				numStart-=numEnd-options.total;
				numStart=Math.max(numStart,1);
				numEnd=options.total;
			}
			if(numStart>1){
				htmls.push('<li><a class="nd1" href="javascript:void(0)">1</a></li><span class="ellipsis"> ... </span>');
			}

			for(var i=numStart;i<=numEnd;i++){
				var nd=Math.floor(Math.log(i)/Math.log(10))+1;
				if(i==options.current){
					htmls.push('<li class="current"><a href="javascript:void(0)" class="nd'+nd+'">'+i+'</span></a></li>');
				}else{
					htmls.push('<li><a data-pagenum='+i+' href="javascript:void(0)" class="num nd'+nd+'">'+i+'</a></li>');
				}
			}
			if(numEnd<options.total){
				htmls.push('<span class="ellipsis"> ... </span><li><a class="nd1" href="javascript:void(0)">'+options.total+'</a></li>');
			}

			
			var target=$(document.getElementById(options.target));
			target.html("<ul class='ui-pagination'>"+htmls.join('')+"</ul>");			
		},		
		_:null
};

// add by qinliang

var Search={
	
	init : function(){	
		//search start
		$(".w-search input").focus(function(){
			if($(this).val()=="请输入搜索关键字")$(this).val("");
		});
		$(".w-search input").blur(function(){
			if($(this).val()=="")$(this).val("请输入搜索关键字");
		});	
		//search end
	},
	
	submitForm:function(){// btn click
		$("#search_form").submit();
	},
	
	doSearch:function(){// form onsubmit handler
		var key=$("#search_form input[name=\"q\"]").val();
		if(key==""||key=="请输入搜索关键字")return false;
		return true;
	},
	
	_:null
};
// add by qinliang


var Recruit = {
	
	init:function(){
		var fight=$(".gameSelect > div");
		var pk=fight.eq(0),
			easy=fight.eq(1),
			story=fight.eq(2),
			key=["pk","easy","story"];
		easy.addClass("easyzoom");
		story.addClass("storyzoom");
		fight.mouseover(function(){
			var index=fight.index($(this));
			var v=key[index];
			$(this).removeClass(v+"zoom").find(".text").css("color","#AFDCF8");
			for(var i=0;i<key.length;i++){
				if(v!==key[i]){
					fight.eq(i).addClass(key[i]+"zoom").find(".text").css("color","#142b4c");	
				}	
			}
		})
		pk.click(function(){location.href="startfight/pk"})
		easy.click(function(){location.href="startfight/mod"})
		story.click(function(){location.href="startfight/campaign"})
		
		var race=$(".raceSelect > div");
		var terran=race.eq(0),
			protoss=race.eq(1),
			zerg=race.eq(2),
			k=["terran","protoss","zerg"];
		protoss.addClass("protosszoom");
		zerg.addClass("zergzoom");
		race.mouseover(function(){
			var index=race.index($(this));
			var v=k[index];
			$(this).removeClass(v+"zoom").css("color","#AFDCF8");
			for(var i=0;i<k.length;i++){
				if(v!==k[i]){
					race.eq(i).addClass(k[i]+"zoom").css("color","#131f30");	
				}	
			}
		});
	},
		
	_:null
};

 /*
 * @requires   Core.js, JQuery.js, Utils.js, tooltip.js
 */
var HomePage = {	
		init:function(){		
			this.initBigEye();
			this.initNews();
			this.initRounds();
			this.initMaps();
			this.initHelps();
		},
		initBigEye:function(){		
			var isSel=false;
			var index=0;
			var isHover=false;
			var animating=false;
			var tid;
			$("#smalleye a").hover(function(){
				$("#bigeye").css("z-index",10);//for nav
				isSel=false;
				$(this).find(".smallpl").toggleClass("f-show f-hd");
				if($(this).hasClass("icnsel")){
					isSel=true;
					return;
				}
				$(this).toggleClass("icnsel icnnm");
				
			},function(){
				$("#bigeye").css("z-index",1);//for nav				
				!isSel && $(this).toggleClass("icnsel icnnm");
				$(this).find(".smallpl").toggleClass("f-show f-hd");
				
			});
			$("#bigeye").hover(function(){
				isHover=true;
			},function(){
				isHover=false;
			});
			$("#smalleye a").click(function(){
				if(animating)return;
				isSel=true;
				$("#smalleye a.icnsel").toggleClass("icnsel icnnm");
				$(this).toggleClass("icnsel icnnm");
				
				var index=$(this).index();
				var current=$("#bigeye .imglist .imgitem").eq(index);//debugger;
				//var last=$("#bigeye .imglist .imgitem").not(current).filter(function(){
				//	return $(this).css("z-index")==2;
				//});
				var last=current.siblings();
				last.css("z-index",1);
				current.css("z-index",2);
				animating=true;
				last.hide();
				current.fadeIn(500, function () {					
					animating=false;
				});
				clearTimeout(tid);
				tid=setTimeout(slide, 3000);
			});
			var slide=function(){				
				if(!isHover&&index<$("#smalleye a").size()){
					$("#smalleye a").eq(index++).click();
					
				}else{
					index=0;
				}
				clearTimeout(tid);
				tid=setTimeout(slide,3000);
			};
			tid=setTimeout(slide,3000);
		},
		initNews:function(){
			$("#news .title li").eq(0).css("left","20px").css('top','-3px')
			$("#news .title li").eq(1).css("left","122px")
			$("#news .title li").eq(2).css("left","244px").children('a').addClass('three').css('padding-left','35px').css('width','99px');
			$("#news .title li").eq(3).css("left","365px")
			var obj=$("#news .title li");
			this.zIndexInit(obj);
			$("#news .title li").mouseover(function(){
				if($(this).find("a").hasClass("sel"))return;
				//$("#news .title li a.sel").parent().css("z-index","1");
				$("#news .title li a.sel").toggleClass("nm sel");	
				$("#news .content .item:visible").toggleClass("f-hd f-show");
				$("#news .content .item").eq($(this).index()).toggleClass("f-hd f-show");				
				$(this).find("a").toggleClass("nm sel");
				//$(this).css("z-index","2");
				HomePage.zIndexCfg($(this));
			});
			$("#news .cntlist .cnt").click(function(){					
					$("#news .item:visible .subcnt:visible").toggleClass("f-hd f-show");
					$("#news .item:visible .subtt:hidden").toggleClass("f-hd f-show");
					$(this).find(".subcnt").toggleClass("f-hd f-show");
					$(this).find(".subtt").toggleClass("f-hd f-show");
			});
			
			//hot 
			
		},
		initRounds:function(){
			$("#rounds .title li").eq(0).css("left","150px")
			$("#rounds .title li").eq(1).css("left","274px")
			$("#rounds .title li").eq(2).css("left","396px")
			var obj=$("#rounds .title li");
			this.zIndexInit(obj);
			$("#rounds .title li").click(function(){
				if($(this).find("a").hasClass("sel"))return;
				//$("#rounds .title li a.sel").parent().css("z-index","1");
				$("#rounds .title li a.sel").toggleClass("nm sel");	
				$("#rounds .content .item:visible").toggleClass("f-hd f-show");
				$("#rounds .content .item").eq($(this).index()).toggleClass("f-hd f-show");				
				$(this).find("a").toggleClass("nm sel");
				//$(this).css("z-index","2");
				HomePage.zIndexCfg($(this));
			});
		},
		initMaps:function(){
			$("#maps .title li").eq(0).css("left","150px")
			$("#maps .title li").eq(1).css("left","276px")
			$("#maps .title li").eq(2).css("left","400px")
			$("#maps .title li").eq(3).css("left","524px")
			var obj=$("#maps .title li");
			this.zIndexInit(obj);
			$("#maps .title li").mouseover(function(){
				if($(this).find("a").hasClass("sel"))return;
				//$("#maps .title li a.sel").parent().css("z-index","1");
				$("#maps .title li a.sel").toggleClass("nm sel");			
				$("#maps .content .item:visible").toggleClass("f-hd f-show");
				$("#maps .content .item").eq($(this).index()).toggleClass("f-hd f-show");	
				$(this).find("a").toggleClass("nm sel");
				//$(this).css("z-index","2");
				HomePage.zIndexCfg($(this));
			});
		},
		initHelps:function(){
			$("#helps .title li").eq(0).css("left","150px")
			$("#helps .title li").eq(1).css("left","276px")
			$("#helps .title li").eq(2).css("left","400px")
			$("#helps .title li").eq(3).css("left","524px")
			var obj=$("#helps .title li");
			this.zIndexInit(obj);			
			$("#helps .title li").mouseover(function(){
				if($(this).find("a").hasClass("sel"))return;
				//$("#helps .title li a.sel").parent().css("z-index","1");
				$("#helps .title li a.sel").toggleClass("nm sel");				
				$("#helps .content .item:visible").toggleClass("f-hd f-show");
				$("#helps .content .item").eq($(this).index()).toggleClass("f-hd f-show");				
				$(this).find("a").toggleClass("nm sel");
				//$(this).css("z-index","2");
				HomePage.zIndexCfg($(this));
			});
		},
		zIndexInit:function(obj){
			var l=obj.length;
			var otherObj=obj.eq(0).siblings();
			obj.eq(0).css("z-index",l-1);
			for(i=otherObj.length-1,j=0;i>=0;i--,j++){
				otherObj.eq(j).css("z-index",i);	
			}
		},
		zIndexCfg:function(t){
			var li=t.parent().find("li").length;
			var otherLi=t.siblings();
			var maxIndex=li-1;
			t.css("z-index",maxIndex);
			for(i=otherLi.length-1,j=0;i>=0;i--,j++){
				otherLi.eq(j).css("z-index",i);	
			}			
			
		}
};
var Folder= {
		init:function(){
			if(!$('.w-folder'))return; 
			$('.w-folder .foldertt').hover(function(){
				var icn = $(this).find('.icn');
				if(icn.hasClass('icn-nmunfold')){
					icn.toggleClass('icn-hvunfold icn-nmunfold');
				}else{
					icn.toggleClass('icn-hvfold icn-nmfold');
				}
			},function(){
				var icn = $(this).find('.icn');
				if(icn.hasClass('icn-hvunfold')){
					icn.toggleClass('icn-hvunfold icn-nmunfold');
				}else{
					icn.toggleClass('icn-hvfold icn-nmfold');
				}
			});
			$('.w-folder .foldertt').click(function(){
				$(this).siblings('.foldercnt').slideToggle(200);
				var icn = $(this).find('.icn');
				if(icn.hasClass('icn-nmunfold')||icn.hasClass('icn-nmfold')){
					icn.toggleClass('icn-nmunfold icn-nmfold');				
				}else if(icn.hasClass('icn-hvunfold')||icn.hasClass('icn-hvfold')){
					icn.toggleClass('icn-hvunfold icn-hvfold');
				}
			});
		}
}
/**
 * Dynamically create and position certain menus and sub menus (JSON objects) depending on specific conditions.
 *
 * @copyright   2010, Blizzard Entertainment, Inc
 * @class       Menu
 * @requires    Page
 * @example
 *
 *      Menu.data = {
 *          children: [
 *              {
 *                  label: "Foo",
 *                  url:   "/foo/bar"
 *              }
 *          ]
 *      }
 *
 */
Core.baseUrl="/";
var Menu = {

	/**
	 * Base menu object data.
	 */
	data: {},

	/**
	 * Menu object data indexed by path.
	 */
	dataIndex: {},

	/**
	 * The main container element.
	 */
	container: null,

	/**
	 * The element that opened the drop down menu.
	 */
	node: null,

	/**
	 * Element ID to prepend to cached menus.
	 */
	idName: 'menu-tier',

	/**
	 * Wrapper class name for all sub menus.
	 */
	className: 'flyout-menu',

	/**
	 * Timer to kill the menu.
	 */
	timer: null,

	/**
	 * Collection of timers for children.
	 */
	timers: {},

	/**
	 * Timer to open/close the menu after a duration.
	 */
	openTimer: null,

	/**
	 * Currently opened children.
	 */
	children: {},

	/**
	 * Configuration.
	 */
	config: {},

	/**
	 * Initialize the class a store the container.
	 *
	 * @param url
	 * @param config
	 * @constructor
	 */
	initialize: function(url, config) {
		Menu.config = $.extend({}, {
			duration: 750,
			dataUrl: {},
			colWidth: 200,
			colMax: 15
		}, config);

		Menu.container = $('<div/>').attr('id', 'menu-container').appendTo('body');
		Menu.container
			.unbind()
			.mouseleave(function() {
				Menu.timer = window.setTimeout(function() {
					Menu.hide();
				}, Menu.config.duration);
			})
			.mouseenter(function() {
				window.clearTimeout(Menu.timer);
			});

		// If no data to fetch, exit early
		if (!url) {
			return false;
		}

		// Get the data
		Menu.load('base', url);

		// Bind the handlers
		$('.ui-breadcrumb li a').each(function(key, crumb) {
			var anchor = $(crumb),
				url = anchor.attr('href').replace(Core.baseUrl, '/');/*change "" to "/"*/
			anchor.mouseover(function() {
				Menu.show(this, url);
			});
		});
	},

	/**
	 * Hide / reset the menu system.
	 */
	hide: function() {
		window.clearTimeout(Menu.timer);
		window.clearTimeout(Menu.openTimer);

		Menu.container.find('div').hide();

		if (Menu.node) {
			Menu.node.removeClass('opened');
			Menu.node = null;
		}
	},

	/**
	 * Hide the child node if it exists based on url.
	 *
	 * @param url
	 */
	hideChild: function(url) {
		if (!Menu.children[url])
			return;

		Menu.children[url]
			.children('a:first, span:first').removeClass('opened').end()
			.children('.'+ Menu.className).hide();
	},

	/**
	 * Load a dataset from a location.
	 *
	 * @param set
	 * @param url
	 */
	load: function(set, url) {
		if (Menu.data[set])
			return;

		$.ajax({
			url: Core.baseUrl + url,
			dataType: 'json',
			success: function(data) {
				Menu.data[set] = data;
				Menu.dataIndex[set] = {};
				Menu._populate(data, set);

				// Add classes for specific situations
				var anchors = $('.ui-breadcrumb li a'),
					length = anchors.length - 1;

				anchors.each(function(i) {
					var self = $(this),
						url = self.attr('href').replace(Core.baseUrl, '/'),/*change "" to "/"*/
						idx = Menu.dataIndex[set][url];

					if (idx) {
						if (idx.children && length == i) {
							self.parent().addClass('children');
						}

						if (!idx.children) {
							self.parent().addClass('childless');
						}
					}
				});
			}
		});

		Menu.config.dataUrl[set] = url;
	},

	/**
	 * An onclick alternative to show().
	 *
	 * @param node
	 * @param path
	 * @param options
	 */
	open: function(node, path, options) {
		options = $.extend({}, { set: 'base' }, options || {});

		Menu.node = $(node);

		var data = Menu.dataIndex[options.set][path] || null;

		if (data && data.children) {
			if ($('#' + Menu._id(path, options.set) ).is(':visible')) {
				Menu.hide();
			} else {
				Menu._display(path, options);
			}
		}
	},

	/**
	 * Show a specific menu at a specific location.
	 * Used in conjunction with onmouseover.
	 *
	 * @param node
	 * @param path
	 * @param options
	 */
	show: function(node, path, options) {
		options = $.extend({}, { set: 'base' }, options || {});
		if (!Menu.dataIndex[options.set][path]) {
			return;
		}

		if ($('#' + Menu._id(path, options.set) ).is(':visible')) {
			return;
		}

		Menu.hide();
		Menu.node = $(node);

		Menu.openTimer = window.setTimeout(function() {
			Menu._display(path, options);
		}, 200);

		Menu.node
			.unbind('mouseleave mouseenter')
			.mouseleave(function() {
				window.clearTimeout(Menu.openTimer);

				Menu.timer = window.setTimeout(function() {
					Menu.hide();
				}, Menu.config.duration);
			})
			.mouseenter(function() {
				window.clearTimeout(Menu.timer);
			});
	},

	/**
	 * Create the div/ul elements and append it to the parent.
	 * Cycle through the links and create the li/a elements, and build children if available.
	 *
	 * @param parent - Parent node to add to
	 * @param menu - Object containing children
	 * @param cache
	 */
	_build: function(parent, menu, cache) {
		var div = $('<div>').addClass(Menu.className),
			uls = [];

		if (cache)
			div.attr('id', cache);

		$.each(menu.children, function(key, data) {
			var tag = (data.url) ? 'a' : 'span',
				li = $('<li/>'),
				item = $('<' + tag + '/>', Menu._prepare(data)).appendTo(li);

			if (data.description) {
				item.append('<span class="desc">'+ data.description +'</span>');
			}

			if (data.parentClass) {
				li.addClass(data.parentClass);
			}

			if (data.children) {
				item.addClass('children');
			}

			li.hover(
				function() {
					Menu.hideChild(menu.url);

					if (data.children) {
						var self = $(this);

						self.children('a:first, span:first').addClass('opened');

						if (self.find('.'+ Menu.className).length === 0) {
							Menu._build(this, data, false);
						}

						Menu._position(self.children('.'+ Menu.className));

						Menu.children[menu.url] = self;

						window.clearTimeout(Menu.timers[menu.url]);
					}
				},
				function() {
					if (data.children) {
						Menu.timers[menu.url] = window.setTimeout(function() {
							Menu.hideChild(menu.url);
						}, Menu.config.duration);
					}
				}
			);

			// Determine which list
			var index = Math.ceil((key + 1) / Menu.config.colMax) - 1;

			if (menu.children.length <= (Menu.config.colMax + 3))
				index = 0;

			if (!uls[index]) {
				uls[index] = $('<ul/>');
			}

			li.appendTo(uls[index]);
		});

		// Append
		for (var i = 0; i <= (uls.length - 1); ++i) {
			$(uls[i]).appendTo(div);
		}

		if (uls.length > 1) {
			div.css('width', (uls.length * Menu.config.colWidth));
		}

		div.appendTo(parent);
	},

	/**
	 * Position the parent menu at the location.
	 *
	 * @param path
	 * @param options
	 */
	_display: function(path, options) {
		if (!Menu.dataIndex[options.set][path]) {
			return;
		}

		var data = Menu.dataIndex[options.set][path],
			center = (options.center) || (options === true),
			id = Menu._id(path, options.set);

		if (data && data.children) {
			var targetMenu = $('#'+ id);

			if (targetMenu.length > 0) {
				targetMenu.fadeIn('fast');
			} else {
				Menu._build(Menu.container, data, id);
			}

			Menu.node.addClass('opened');

			// Position menu accordingly
			var nodeOffset = Menu.node.parent().offset(), 
				nodeWidth = Menu.node.parent().width(),
				x = nodeOffset.left,
				y = nodeOffset.top + Menu.node.outerHeight(),
				opts = {
					top: y +'px',
					position: 'absolute',
					visibility: 'visible',
					zIndex: '75'
				};

			if (center) {
				var width = Math.round(nodeWidth / 2) - Math.round(Menu.config.colWidth / 2);
				opts.left = (x + width) +'px';
			} else {
				opts.left = x +'px';
			}

			Menu.container.css(opts).show();
		}
	},

	/**
	 * Generate a DOM id.
	 *
	 * @param path
	 * @param set
	 */
	_id: function(path, set) {
		var id = Menu.idName + '-' + set;

		if (Menu.dataIndex[set][path].id)
			id += Menu.dataIndex[set][path].id;

		return id;
	},

	/**
	 * Show the element, and reposition it if it goes off the page.
	 *
	 * @param element
	 */
	_position: function(element) {
		element.show();

		if (element.find('ul').length <= 1) {
			var offset = element.offset(),
				width = element.outerWidth(),
				x = offset.left + width;

			if (x >= Page.dimensions.width) {
				element.css('left', -width);
			}
		}
	},

	/**
	 * Populate the class with data returned from the server.
	 *
	 * @param node
	 * @param set
	 */
	_populate: function(node, set) {
		if (!Menu.dataIndex[set][node.url]) {
			node.id = (node.url ? node.url.replace(/[^\-a-zA-Z0-9\/]/ig, '') : '');
			node.id = node.id.replace(/\//ig, '-');

			if (node.id.substr(-1) === '-') {
				node.id = node.id.substr(0, (node.id.length - 1));
			}

			Menu.dataIndex[set][node.url] = node;
		}

		if (node.children) {
			for (var i = 0, child; child = node.children[i]; i++) {
				Menu._populate(child, set);
			}
		}
	},

	/**
	 * Prepare the element params based on a whitelist.
	 *
	 * @param obj
	 */
	_prepare: function(obj) {
		var label = obj.label || '',
			mapping = { html: label.replace(/&/ig, '&amp;'), rel: 'np' },
			params = {};

		if (obj.url != null) {
			//mapping.href = Core.baseUrl + obj.url;
			mapping.href = obj.url.replace(Core.baseUrl, '/');
		}

		$.each(mapping, function(key, value) {
			if (value)
				params[key] = value;
		});

		return params;
	}

};

var ActivityCalendar = {
	initWidget:function(){
		this.init();
	},
	
	init:function(param){
		if(!$(".w-activity-calendar"))return;
		var isWidget;
		var date;
		if(param){
			isWidget=false;
			date=param;
		}else{
			isWidget=true;
			date=new Date();//now
		}
		var now=new Date(date.getTime());
		date.setDate(1);
		var isWidget=isWidget?isWidget:false;
		var timer=0;
		var setStatus=function(selector,hasActivity){	// fix ie6 buggy css selector
			if(hasActivity){
				selector.click(listCalendar);
				selector.hover(showCalendarLayer,hideCalendarLayer);
			}else{
				selector.unbind("mouseenter mouseleave click");
			}
			var isToday=(selector.data("today")===true);
			var outOfRange=(selector.attr("date")===undefined);
			if(isToday){
				if(hasActivity){
					//selector.toggleClass("today",false);
					selector.toggleClass("today-has-activity",true);
					selector.unbind("mouseenter mouseleave");
				}else{
					selector.toggleClass("today",true);
					//selector.toggleClass("today-has-activity",false);
					selector.hover(
						function(){
							$(this).toggleClass("today", false);
							$(this).toggleClass("today-hover", true);
						},
						function(){
							$(this).toggleClass("today", true);
							$(this).toggleClass("today-hover", false);
						});
				}
			}else if(outOfRange){
				selector.toggleClass("outofrange",true);
			}else{
				if(hasActivity){
					//selector.toggleClass("normal",false);
					selector.toggleClass("has-activity",true);
					selector.hover(
						function(){
							$(this).toggleClass("has-activity", false);
							$(this).toggleClass("has-activity-hover", true);
						},
						function(){
							$(this).toggleClass("has-activity", true);
							$(this).toggleClass("has-activity-hover", false);
						});
				}else{
					selector.toggleClass("normal",true);
					//selector.toggleClass("has-activity",false);
					selector.hover(
						function(){
							$(this).toggleClass("normal", false);
							$(this).toggleClass("normal-hover", true);
						},
						function(){
							$(this).toggleClass("normal", true);
							$(this).toggleClass("normal-hover", false);
						});
				}
			}
		};
		var prepareDisplayCalendars=function(el){
			var displayCalendars=el.data("displayCalendars");
			if(!displayCalendars){
				var savedCalendars=el.data("savedCalendars");
				if(savedCalendars){
					savedCalendars.sort(function(c1,c2){// sort by priority
						var p1=c1.article.contentMap.priority;
						var p2=c2.article.contentMap.priority;
						p1=p1?p1:0;//normalize data
						p2=p2?p2:0;
						return p2-p1;
					});
					displayCalendars=savedCalendars.slice(0,3);
					el.data("displayCalendars",displayCalendars);
				}
			}
			return displayCalendars;
		};
		var layerDom;
		if($.browser.msie && $.browser.version=="6.0"){
			layerDom=$("<div class='layer ie6'><div class='mc'></div></div>");
		}else{
			layerDom=$("<div class='layer'><div class='tl'><b></b></div><div class='tc'><b></b></div><div class='tr'><b></b></div><div class='ml'><b></b></div><div class='mc'><b></b></div><div class='mr'><b></b></div><div class='bl'><b></b></div><div class='bc'><b></b></div><div class='br'><b></b></div></div>");
		}
		var listCalendar=function(){// widget only
			var calendarDate= $(this).data("calendarDate");
			if(isWidget){
				// remove all
				$(".w-activity-calendar .activities .item").not($(".w-activity-calendar .activities .jstmpl .item")).detach();
				$(".w-activity-calendar .activities .more").hide();
				// append new one
				var displayCalendars=prepareDisplayCalendars($(this));
				if(displayCalendars&&displayCalendars.length>0){
					var tmpl=$(".w-activity-calendar .jstmpl").html();
					var container=$(".w-activity-calendar .activities")
					for(var i=0;displayCalendars&&displayCalendars[i]&&i<4;i++){
						var calendar=displayCalendars[i];
						var el=$(tmpl);
						el.find(".wrap").addClass("type "+calendar.article.contentMap.type); 
						var actType=calendar.article.contentMap.type;
						var typeName=null;
						if(actType=="game"){
							typeName="比赛";
						}else if(actType=="activity"){
							typeName="活动";
						}else if(actType=="exhibition"){
							typeName="展会";
						}else if(actType=="interflow"){
							typeName="交流";
						}else{ 
							typeName="官方";
						}
						el.find(".title").text("[" +typeName+ "] " + calendar.article.title );
						el.find(".title").attr("href",calendar.article.contentMap.linkUrl);
						el.find(".date").text((new Date(calendar.startTime)).format("[MM-dd]"));
						container.append(el);
					}
					var more=container.find(".more");
					more.attr("href","/calendar/"+calendarDate.format("yyyyMMdd"));
					more.show();
					container.append(more);
				}
			}else{
				window.location="/calendar/"+calendarDate.format("yyyyMMdd");
			}
		};
		var showCalendarLayer=function(e){
			var calendarDate=$(this).data("calendarDate");
			var displayCalendars=prepareDisplayCalendars($(this));
			var a=[];
			for(var i=0;displayCalendars&&displayCalendars[i];i++){
				var calendar=displayCalendars[i];
				a.push("<div class='item type " + calendar.article.contentMap.type + "'>" + calendar.article.title + "</div>")
				a.push("<div class='split'><b></b></div>");
			}
			if(i>0)a.pop();
			$(this).append(layerDom);
			$(this).find(".layer .mc").html(a.join(''));
			setPopPosition($(this),e);
		};
		var hideCalendarLayer=function(){
			var el=$(this).find(".layer");
			if(el)el.detach();
		};
		var setPopPosition=function(obj,e){
			var popBox=obj.find(".layer");
			var popBoxWidth=popBox.width();
			var dateIndex=parseInt(obj.attr("id").substring(3));
			var winRightWidth=parseInt($(window).width()-1030)/2;
			var pageWidth=parseInt(popBoxWidth-(7-dateIndex)*38);			
            if(winRightWidth>pageWidth){
				popBox.css("left","15px");
				}
			else{								
				var tolWidth=dateIndex*38+popBoxWidth;
				if(tolWidth>282){
					var positionLeft=-popBoxWidth+23+(6-dateIndex)*40;
					popBox.css("left",positionLeft+"px");
					}
				else{
					popBox.css("left","15px");
					}		
				}			
		}
		var updateCalendar=function(){
			$(".w-activity-calendar .calendar .title").text(date.getFullYear()+"年"+(date.getMonth()+1)+"月");
			var els = $(".w-activity-calendar .calendar .date");
			els.text("");
			els.removeClass();
			els.addClass("date");
			els.unbind("mouseenter mouseleave click");
			els.removeAttr("date");
			els.data("savedCalendars",null);
			els.data("calendarDate",null);
			els.data("displayCalendars",null);
			els.data("today",null);
			var cursor=new Date(date.getTime());
			cursor.setDate(date.getDay()==0?-6:1-date.getDay());
			var week=0;
			while(week<6){
				var el = $(".w-activity-calendar .calendar .date#w"+week+"d"+cursor.getDay());
				el.text(cursor.getDate());
				if(cursor.getMonth()==date.getMonth()){
					el.attr("date", cursor.getDate());
					if(cursor.getYear()==now.getYear()&&cursor.getMonth()==now.getMonth()&&cursor.getDate()==now.getDate()){
						el.data("today",true);
					}else{
						el.data("today",false);
					}
				}
				setStatus(el,false);
				cursor.setDate(cursor.getDate()+1);
				if(cursor.getDay()==0){
					week++;
				}
			};
			var currentStartTime;
			var currentCalendars;
			clearTimeout(timer);
			timer=setTimeout(function(){
				var currentMonth = new Date(date.getTime());
				currentMonth.setDate(1);
				currentMonth.setHours(0);
				currentMonth.setMinutes(0);
				currentMonth.setSeconds(0);
				var startTime=currentMonth.getTime();
				currentMonth.setMonth(currentMonth.getMonth() + 1);
				var endTime=currentMonth.getTime();
				currentStartTime=startTime;
				CalendarBean.getAllSC2CalendarsByTime(startTime,endTime,function(calendars){
					if(currentStartTime != startTime)return;
					currentCalendars=calendars;
					for(var i=0;i<calendars.length;i++){
						var calendar=calendars[i];
						if(calendar.startTime < startTime) {
							var calendarDate=new Date(startTime);
						}else {
							var calendarDate=new Date(calendar.startTime);
							calendarDate.setHours(0);
							calendarDate.setMinutes(0);
							calendarDate.setSeconds(0);
							calendarDate.setMilliseconds(0);
						}
						while(calendarDate.getTime() < Math.min(endTime, calendar.endTime)){
							var date=calendarDate.getDate();
							var el=$(".w-activity-calendar .calendar .date[date="+date+"]");
							var savedCalendars=el.data("savedCalendars");
							if(!savedCalendars){
								savedCalendars=[];
								setStatus(el,true);
							}
							savedCalendars.push(calendar);
							el.data("savedCalendars",savedCalendars);
							el.data("calendarDate",new Date(calendarDate.getTime()));
							calendarDate.setDate(date+1);
						}
					}
				});
			},500);
		};
		$(".w-activity-calendar .calendar .navbtn.prev").click(function(){
			date.setMonth(date.getMonth()-1);
			updateCalendar();
		});
		$(".w-activity-calendar .calendar .navbtn.next").click(function(){
			date.setMonth(date.getMonth()+1);
			updateCalendar();
		});
		updateCalendar();
	}
}

// JavaScript Document
var Planet = {
};
 /*
 * @requires   Core.js, JQuery.js, Utils.js
 */

var LandingPage =  {
		 openVideo:function(flashVars) {
		 		try{
		 			var player=swfobject.getObjectById('landing-player');
		 			if(player)player.pause();
		 		}catch(e){}
				Lightbox.loadVideo([{
					width: 704,
					height: 396,
					flashVars : flashVars
				}]);
			},
			initFlash:function(){
				Flash.videoPlayer = 'http://res.nie.netease.com/comm/js/nie/util/player.swf';
				Flash.videoBase = 'http://content.battlenet.com.cn/sc2/media/videos';
				Flash.ratingImage = 'http://content.battlenet.com.cn/global-video-player/ratings/sc2/zh-cn.jpg';
				Flash.expressInstall= 'http://content.battlenet.com.cn/global-video-player/expressInstall.swf';				
				Flash.defaultVideoParams.wmode = "opaque";
			},
			showBlz:function(){
		        var windowWith=$(window).width();
				if(windowWith<=1440){
					 $(".blzLeft,.blzRight").hide();
				 }
				else{
					 $(".blzLeft,.blzRight").show();
				 }
			},
			init:function(){
				
				this.statistics();
				
				//this.initFlash();
				$('#landingplayer-wrapper').hover(function(){
					$(this).toggleClass("w-player-hv");
				},function(){
					$(this).toggleClass("w-player-hv");
				});
				this.showBlz();
		        $(window).resize(function(){
                   LandingPage.showBlz();
                });
				//width=390&height=205&movieUrl=http://v.nie.netease.com/tx3/2011/huanhua/390x205.f4v&videoWidth=390&videoHeight=205&volume=0.8&autoPlay=false&startImg=http://v.nie.netease.com/tx3/2011/huanhua/default.jpg&loopTimes=-1&&bufferTime=5
				// 新手视频播放 
				swfobject.embedSWF(Flash.videoPlayer,'landing-player','386px', '306px',
						Flash.requiredVersion, Flash.expressInstall,{
							width : 492,
							height : 256,
							videoWidth : 492,
							videoHeight : 256,
							//movieUrl : "http://v.nie.netease.com/sc2/what-is-sc2-zh_CN.flv",
							//movieUrl : "http://flv.bn.netease.com/videolib3/1211/22/BVpZA6231/SD/BVpZA6231.flv",
							//movieUrl : "http://v.nie.netease.com/sc2/Heart_of_the_Swarm_CG_CN.flv",
							movieUrl : "http://flv.bn.netease.com/videolib3/1306/07/jrUdt7956/SD/jrUdt7956.flv",
							//movieUrl : "http://flv.bn.netease.com/videolib3/1302/27/OEGMl4046/SD/OEGMl4046.flv",
							autoPlay : true
						}, Flash.defaultVideoParams);
						
				
				$("#video2").click(this.openVideo.$bind(this,{
					width: 704,
					height: 396,
					videoWidth : 704,
					videoHeight : 396,
					movieUrl : "http://v.nie.netease.com/sc2/race-protoss-zh_CN.flv"
				}));
				$("#video1").click(this.openVideo.$bind(this,{
					width: 704,
					height: 396,
					videoWidth : 704,
					videoHeight : 396,
					movieUrl : "http://v.nie.netease.com/sc2/race-terran-zh_CN.flv"
				}));
				$("#video3").click(this.openVideo.$bind(this,{
					width: 704,
					height: 396,
					videoWidth : 704,
					videoHeight : 396,
					movieUrl : "http://v.nie.netease.com/sc2/race-zerg-zh_CN.flv"
				}));
			},
			landingEye:function(){
				var tipList=$("#landingTip > li");
				var eyePic=$("#landingEye > li");
				var tipL=tipList.length;
				var index=0,timer;
				tipList.hover(function(){
					var t=$(this);
					index=tipList.index(t);
					LandingPage.forFirstPic(index);
					LandingPage.handEye(index);
					//tipList.eq(index).children().css("display","block").end().siblings().children().css("display","none");	
					LandingPage.eyePic(index);
					clearInterval(timer);	
				}),function(){
					tipList.children().css("display","none");
					timer=setInterval(auto,6000);
				}
				var auto=function(){
					index++;
					if(index==tipL){
						index=0;	
					}
					LandingPage.forFirstPic(index);
					LandingPage.handEye(index);
					LandingPage.eyePic(index);				
				};
				timer=setInterval(auto,6000);
				
				//eyePicHand
				eyePic.hover(function(){
					clearInterval(timer);	
				},function(){
					timer=setInterval(auto,6000);
				})			
			},
			eyePic:function(index){
				var eyePic=$("#landingEye > li");		
				eyePic.eq(index).siblings().hide().stop(true,true).end().fadeIn();
			},
			handEye:function(index){
				var tipList=$("#landingTip > li");
				tipList.eq(index).addClass("hover").siblings().removeClass("hover");											
			},
			forFirstPic:function(index){
				if(index==2 || index==1){
					$("h1.logo").hide();	
				}else{
					$("h1.logo").show();
				}	
			},
			forGameguide:function(){
				$(".radio").click(function(){
					$(this).parents("dl").find(".radio span").removeClass("checked").next().removeClass("green").end().end().end().find("span").addClass("checked").next().addClass("green");
				})
				$("#searchBtn").click(function(){			
					 var race=$("#race").find(".checked").attr("rel"),
						 level=$("#level").find(".checked").attr("rel"),
						 type=$("#type").find(".checked").attr("rel"),
						 feature=$("#feature").find(".checked").attr("rel"),
						 source=$("#source").find(".checked").attr("rel");
						 type==undefined?(type="all",feature="all",source="all"):"";
					 var param="race="+race+"&level="+level+"&type="+type+"&feature="+feature+"&source="+source;
		
					 $("#searchCondition").val(param);
					 //action==undefined?"":$("#searchFrom").attr("action",action);
					 $("#searchFrom").submit();
		 		})
				 
			},
			landingBtn:function(){
				var wHelp=$('.w-help');
				var wHelpBtn1=wHelp.find('.p1');
				var wHelpBtn2=wHelp.find('.p2');
					wHelpBtn1.hover(function(){
						wHelp.css('background-position','-305px 0px')
					},function(){
						wHelp.css('background-position','0 0')
					})
					wHelpBtn2.hover(function(){
						wHelp.css('background-position','0 -318px')
					},function(){
						wHelp.css('background-position','0 0')
					})
			},
			statistics:function(){
				$('.login').click(function(){
					Public.triggerEBConversion(341511);
					//setTimeout("window.open('https://www.battlenet.com.cn/account/creation/tos.html?theme=sc2&style=sc2-trial', '_blank')",50)
				})
				
				$('.regCount').click(function(){
					Public.triggerEBConversion(341510);
				})
				
				$('.home_btn').click(function(){
					Public.triggerEBConversion(342156);
				})
				
				
				$('.dcb a').click(function(){
					Public.triggerEBConversion(342135)
				})
				
				
				$('.crazy a').click(function(){
					Public.triggerEBConversion(342136);
					
				})
				
				
			}

	};

// add by qinliang
var Map = {
	init :function(){
		//star start
		$(".w-mapm .boxm ul").find("li:last").css("background","none");
		$(".staricndo > .icn").hover(function(){
			$(".staricndo > .icn-bh:last").attr("rel","1");
			var t=$(this);
			var icn=$(".staricndo > .icn");
			var index=icn.index(t);
			icn.removeClass("icn-bh");
			t.addClass("icn-bh");
			$(".staricndo > .icn:lt("+index+")").addClass("icn-bh");
			
		},
		function(){
			var icn=$(".staricndo > .icn");
			icn.removeClass("icn-bh");
			icn.each(function(){
				if($(this).attr("rel")==1){
					var i=icn.index($(this));
					icn.removeClass("icn-bh");
					icn.eq(i).addClass("icn-bh");
					$(".staricndo > .icn:lt("+i+")").addClass("icn-bh");			
				}
			})
		})
		$(".staricndo > .icn").click(function(){
			var t=$(this);
			var icn=$(".staricndo > .icn");
			var index=icn.index(t);
			icn.removeClass("icn-bh");
			t.siblings().removeAttr("rel");
			t.addClass("icn-bh").attr("rel","1");
			$(".staricndo > .icn:lt("+index+")").addClass("icn-bh");			
		})
		//star end	
	
		
		//search start
		$("#mapsearch").focus(function(){
			if($(this).val()=="请输入搜索关键字")$(this).val("");
		});
		$("#mapsearch").blur(function(){
			if($(this).val()=="")$(this).val("请输入搜索关键字");
		});
		$("#mapsearch").val("请输入搜索关键字");
		$(".search-btn").click(Search.submitForm);	
		//search end
		
		Utils.formatTable();
	},
	
	makeMap : function makeMap(aid,score){
		var c = $.cookie("makeMap"+aid);
		//alert(c);
		if(c == null)
		{
			if(isNaN(score)){
				alert("请检查评分是否为数字");
				return;
			}else if((score >= 1 && score <= 5) == false){
				alert("分值范围错误，必须大于等于 1 ，小于等于 5 。");
				return;
			}
			//alert("call markSC2MapScore aid = " + aid + " , score = " + score);
			SC2MapBean.markSC2MapScore(aid,score,function(r){
				if (r) {
					SC2MapBean.getSC2MapScore(aid,function(r1){
						var avgScore = r1.toFixed(3);
						//alert(avgScore);
						alert("评分成功! 当前平均分："+avgScore);
						
						$(".avgScore").removeClass("icn-bh");
						$.each($(".avgScore"),function(i,n){
							if(avgScore >= (i+0.5)){
								$(n).addClass("icn-bh");
								$(".avgScore").removeAttr("rel")
								$(n).attr("rel",1);
							}
						});	
						$.cookie("makeMap"+aid, score, { expires: 30});//存入cookie
					});
				} else {
					alert("评分失败，请稍候再试。");
				}
			});
		}
		else{
			alert("谢谢您，您已经评过分了。");
		}
	},
	
	_:null
};
 /*
 * @requires   Core.js, JQuery.js, Utils.js, tooltip.js
 */
var Header = {
		init:function(){		
			Utils.$(".m-navbar .item").hover(function(){
				$(this).children(".w-submenu").css("display","block");
			},function(){
				$(this).children(".w-submenu").css("display","none");
			});
			$("#browse .viewLink").click(function(){
				if($("#browsepl").css("display")=="none"){								  
					$("#browsepl").css("display","block");
				}else{
					$("#browsepl").css("display","none");
				}
			});
			$("#browse").mouseleave(function(){
				setTimeout(function(){$("#browsepl").css("display","none")},800)							   
			})
			
				//Utils.$("#browse .dir").toggleClass("dirpnm dirphv");
				//Utils.$("#browse .tt").toggleClass("tthv");
				//Utils.$("#browse").hover();
			
			Utils.$(".user").hover(function(){
				Utils.$(".userPop").css("display","block");
				
			},function(){
				Utils.$(".userPop").css("display","none");
				
			})
			

			var redirect_url=window.location.href;
			if(redirect_url.indexOf("#") > 0 || redirect_url.indexOf("?") > 0){
				redirect_url=redirect_url.split("#")[0].split("?")[0];
			}
			$("#a_login").attr("href", "https://www.battlenet.com.cn/oauth/authorize?client_id=netease-sc2-esports&response_type=code&redirect_uri=" + encodeURIComponent(redirect_url));

			$("#a_logout").attr("href", "https://www.battlenet.com.cn/login/zh/logout?fast&ref=" +window.location.protocol + "//" + window.location.host + "/logout" + encodeURIComponent("?target=" + redirect_url));
			$("#ca_logout").attr("href", "/comments/logout?target=" + redirect_url);
			
			$('.nav > li').eq(5).find('ul .hot').css('right','9px')
			$('.nav > li').eq(5).find('ul .new').css('right','9px')
			$('.nav > li').eq(4).find('ul .new').css('right','4px')
			
			this.cnzz();
		},
		cnzz:function(){
			var aTitle=$('a[title="站长统计"]');
			aTitle.css('display','none');
		}
};
/*
 * Copyright 2005 Joe Walker
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Declare an object to which we can add real functions.
 */
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

/**
 * Set an alternative error handler from the default alert box.
 * @see getahead.org/dwr/browser/engine/errors
 */
dwr.engine.setErrorHandler = function(handler) {
  dwr.engine._errorHandler = handler;
};

/**
 * Set an alternative warning handler from the default alert box.
 * @see getahead.org/dwr/browser/engine/errors
 */
dwr.engine.setWarningHandler = function(handler) {
  dwr.engine._warningHandler = handler;
};

/**
 * Setter for the text/html handler - what happens if a DWR request gets an HTML
 * reply rather than the expected Javascript. Often due to login timeout
 */
dwr.engine.setTextHtmlHandler = function(handler) {
  dwr.engine._textHtmlHandler = handler;
};

/**
 * Set a default timeout value for all calls. 0 (the default) turns timeouts off.
 * @see getahead.org/dwr/browser/engine/errors
 */
dwr.engine.setTimeout = function(timeout) {
  dwr.engine._timeout = timeout;
};

/**
 * The Pre-Hook is called before any DWR remoting is done.
 * @see getahead.org/dwr/browser/engine/hooks
 */
dwr.engine.setPreHook = function(handler) {
  dwr.engine._preHook = handler;
};

/**
 * The Post-Hook is called after any DWR remoting is done.
 * @see getahead.org/dwr/browser/engine/hooks
 */
dwr.engine.setPostHook = function(handler) {
  dwr.engine._postHook = handler;
};

/**
 * Custom headers for all DWR calls
 * @see getahead.org/dwr/????
 */
dwr.engine.setHeaders = function(headers) {
  dwr.engine._headers = headers;
};

/**
 * Custom parameters for all DWR calls
 * @see getahead.org/dwr/????
 */
dwr.engine.setParameters = function(parameters) {
  dwr.engine._parameters = parameters;
};

/** XHR remoting type constant. See dwr.engine.set[Rpc|Poll]Type() */
dwr.engine.XMLHttpRequest = 1;

/** XHR remoting type constant. See dwr.engine.set[Rpc|Poll]Type() */
dwr.engine.IFrame = 2;

/** XHR remoting type constant. See dwr.engine.setRpcType() */
dwr.engine.ScriptTag = 3;

/**
 * Set the preferred remoting type.
 * @param newType One of dwr.engine.XMLHttpRequest or dwr.engine.IFrame or dwr.engine.ScriptTag
 * @see getahead.org/dwr/browser/engine/options
 */
dwr.engine.setRpcType = function(newType) {
  if (newType != dwr.engine.XMLHttpRequest && newType != dwr.engine.IFrame && newType != dwr.engine.ScriptTag) {
    dwr.engine._handleError(null, { name:"dwr.engine.invalidRpcType", message:"RpcType must be one of dwr.engine.XMLHttpRequest or dwr.engine.IFrame or dwr.engine.ScriptTag" });
    return;
  }
  dwr.engine._rpcType = newType;
};

/**
 * Which HTTP method do we use to send results? Must be one of "GET" or "POST".
 * @see getahead.org/dwr/browser/engine/options
 */
dwr.engine.setHttpMethod = function(httpMethod) {
  if (httpMethod != "GET" && httpMethod != "POST") {
    dwr.engine._handleError(null, { name:"dwr.engine.invalidHttpMethod", message:"Remoting method must be one of GET or POST" });
    return;
  }
  dwr.engine._httpMethod = httpMethod;
};

/**
 * Ensure that remote calls happen in the order in which they were sent? (Default: false)
 * @see getahead.org/dwr/browser/engine/ordering
 */
dwr.engine.setOrdered = function(ordered) {
  dwr.engine._ordered = ordered;
};

/**
 * Do we ask the XHR object to be asynchronous? (Default: true)
 * @see getahead.org/dwr/browser/engine/options
 */
dwr.engine.setAsync = function(async) {
  dwr.engine._async = async;
};

/**
 * Does DWR poll the server for updates? (Default: false)
 * @see getahead.org/dwr/browser/engine/options
 */
dwr.engine.setActiveReverseAjax = function(activeReverseAjax) {
  if (activeReverseAjax) {
    // Bail if we are already started
    if (dwr.engine._activeReverseAjax) return;
    dwr.engine._activeReverseAjax = true;
    dwr.engine._poll();
  }
  else {
    // Can we cancel an existing request?
    if (dwr.engine._activeReverseAjax && dwr.engine._pollReq) dwr.engine._pollReq.abort();
    dwr.engine._activeReverseAjax = false;
  }
  // TODO: in iframe mode, if we start, stop, start then the second start may
  // well kick off a second iframe while the first is still about to return
  // we should cope with this but we don't
};

/**
 * The default message handler.
 * @see getahead.org/dwr/browser/engine/errors
 */
dwr.engine.defaultErrorHandler = function(message, ex) {
  dwr.engine._debug("Error: " + ex.name + ", " + ex.message, true);
  if (message == null || message == "") alert("A server error has occured.");
  // Ignore NS_ERROR_NOT_AVAILABLE if Mozilla is being narky
  else if (message.indexOf("0x80040111") != -1) dwr.engine._debug(message);
  else alert(message);
};

/**
 * The default warning handler.
 * @see getahead.org/dwr/browser/engine/errors
 */
dwr.engine.defaultWarningHandler = function(message, ex) {
  dwr.engine._debug(message);
};

/**
 * For reduced latency you can group several remote calls together using a batch.
 * @see getahead.org/dwr/browser/engine/batch
 */
dwr.engine.beginBatch = function() {
  if (dwr.engine._batch) {
    dwr.engine._handleError(null, { name:"dwr.engine.batchBegun", message:"Batch already begun" });
    return;
  }
  dwr.engine._batch = dwr.engine._createBatch();
};

/**
 * Finished grouping a set of remote calls together. Go and execute them all.
 * @see getahead.org/dwr/browser/engine/batch
 */
dwr.engine.endBatch = function(options) {
  var batch = dwr.engine._batch;
  if (batch == null) {
    dwr.engine._handleError(null, { name:"dwr.engine.batchNotBegun", message:"No batch in progress" });
    return;
  }
  dwr.engine._batch = null;
  if (batch.map.callCount == 0) return;

  // The hooks need to be merged carefully to preserve ordering
  if (options) dwr.engine._mergeBatch(batch, options);

  // In ordered mode, we don't send unless the list of sent items is empty
  if (dwr.engine._ordered && dwr.engine._batchesLength != 0) {
    dwr.engine._batchQueue[dwr.engine._batchQueue.length] = batch;
  }
  else {
    dwr.engine._sendData(batch);
  }
};

/** @deprecated */
dwr.engine.setPollMethod = function(type) { dwr.engine.setPollType(type); };
dwr.engine.setMethod = function(type) { dwr.engine.setRpcType(type); };
dwr.engine.setVerb = function(verb) { dwr.engine.setHttpMethod(verb); };
dwr.engine.setPollType = function() { dwr.engine._debug("Manually setting the Poll Type is not supported"); };

//==============================================================================
// Only private stuff below here
//==============================================================================

/** The original page id sent from the server */
dwr.engine._origScriptSessionId = "99A03E6F4B66DEC04DFF78435874A6FA";

/** The session cookie name */
dwr.engine._sessionCookieName = "JSESSIONID"; // JSESSIONID

/** Is GET enabled for the benefit of Safari? */
dwr.engine._allowGetForSafariButMakeForgeryEasier = "true";

/** The script prefix to strip in the case of scriptTagProtection. */
dwr.engine._scriptTagProtection = "throw 'allowScriptTagRemoting is false.';";

/** The default path to the DWR servlet */
dwr.engine._defaultPath = "/dwr";

/** Do we use XHR for reverse ajax because we are not streaming? */
dwr.engine._pollWithXhr = "false";

/** The read page id that we calculate */
dwr.engine._scriptSessionId = null;

/** The function that we use to fetch/calculate a session id */
dwr.engine._getScriptSessionId = function() {
  if (dwr.engine._scriptSessionId == null) {
    dwr.engine._scriptSessionId = dwr.engine._origScriptSessionId + Math.floor(Math.random() * 1000);
  }
  return dwr.engine._scriptSessionId;
};

/** A function to call if something fails. */
dwr.engine._errorHandler = dwr.engine.defaultErrorHandler;

/** For debugging when something unexplained happens. */
dwr.engine._warningHandler = dwr.engine.defaultWarningHandler;

/** A function to be called before requests are marshalled. Can be null. */
dwr.engine._preHook = null;

/** A function to be called after replies are received. Can be null. */
dwr.engine._postHook = null;

/** An map of the batches that we have sent and are awaiting a reply on. */
dwr.engine._batches = {};

/** A count of the number of outstanding batches. Should be == to _batches.length unless prototype has messed things up */
dwr.engine._batchesLength = 0;

/** In ordered mode, the array of batches waiting to be sent */
dwr.engine._batchQueue = [];

/** What is the default rpc type */
dwr.engine._rpcType = dwr.engine.XMLHttpRequest;

/** What is the default remoting method (ie GET or POST) */
dwr.engine._httpMethod = "POST";

/** Do we attempt to ensure that calls happen in the order in which they were sent? */
dwr.engine._ordered = false;

/** Do we make the calls async? */
dwr.engine._async = true;

/** The current batch (if we are in batch mode) */
dwr.engine._batch = null;

/** The global timeout */
dwr.engine._timeout = 0;

/** ActiveX objects to use when we want to convert an xml string into a DOM object. */
dwr.engine._DOMDocument = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.5.0", "Msxml2.DOMDocument.4.0", "Msxml2.DOMDocument.3.0", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XMLDOM"];

/** The ActiveX objects to use when we want to do an XMLHttpRequest call. */
dwr.engine._XMLHTTP = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];

/** Are we doing comet or polling? */
dwr.engine._activeReverseAjax = false;

/** The iframe that we are using to poll */
dwr.engine._outstandingIFrames = [];

/** The xhr object that we are using to poll */
dwr.engine._pollReq = null;

/** How many milliseconds between internal comet polls */
dwr.engine._pollCometInterval = 200;

/** How many times have we re-tried to poll? */
dwr.engine._pollRetries = 0;
dwr.engine._maxPollRetries = 0;

/** Do we do a document.reload if we get a text/html reply? */
dwr.engine._textHtmlHandler = null;

/** If you wish to send custom headers with every request */
dwr.engine._headers = null;

/** If you wish to send extra custom request parameters with each request */
dwr.engine._parameters = null;

/** Undocumented interceptors - do not use */
dwr.engine._postSeperator = "\n";
dwr.engine._defaultInterceptor = function(data) { return data; };
dwr.engine._urlRewriteHandler = dwr.engine._defaultInterceptor;
dwr.engine._contentRewriteHandler = dwr.engine._defaultInterceptor;
dwr.engine._replyRewriteHandler = dwr.engine._defaultInterceptor;

/** Batch ids allow us to know which batch the server is answering */
dwr.engine._nextBatchId = 0;

/** A list of the properties that need merging from calls to a batch */
dwr.engine._propnames = [ "rpcType", "httpMethod", "async", "timeout", "errorHandler", "warningHandler", "textHtmlHandler" ];

/** Do we stream, or can be hacked to do so? */
dwr.engine._partialResponseNo = 0;
dwr.engine._partialResponseYes = 1;
dwr.engine._partialResponseFlush = 2;

/** Is this page in the process of unloading? */
dwr.engine._unloading = false;

/**
 * @private Send a request. Called by the Javascript interface stub
 * @param path part of URL after the host and before the exec bit without leading or trailing /s
 * @param scriptName The class to execute
 * @param methodName The method on said class to execute
 * @param func The callback function to which any returned data should be passed
 *       if this is null, any returned data will be ignored
 * @param vararg_params The parameters to pass to the above class
 */
dwr.engine._execute = function(path, scriptName, methodName, vararg_params) {
  var singleShot = false;
  if (dwr.engine._batch == null) {
    dwr.engine.beginBatch();
    singleShot = true;
  }
  var batch = dwr.engine._batch;
  // To make them easy to manipulate we copy the arguments into an args array
  var args = [];
  for (var i = 0; i < arguments.length - 3; i++) {
    args[i] = arguments[i + 3];
  }
  // All the paths MUST be to the same servlet
  if (batch.path == null) {
    batch.path = path;
  }
  else {
    if (batch.path != path) {
      dwr.engine._handleError(batch, { name:"dwr.engine.multipleServlets", message:"Can't batch requests to multiple DWR Servlets." });
      return;
    }
  }
  // From the other params, work out which is the function (or object with
  // call meta-data) and which is the call parameters
  var callData;
  var lastArg = args[args.length - 1];
  if (typeof lastArg == "function" || lastArg == null) callData = { callback:args.pop() };
  else callData = args.pop();

  // Merge from the callData into the batch
  dwr.engine._mergeBatch(batch, callData);
  batch.handlers[batch.map.callCount] = {
    exceptionHandler:callData.exceptionHandler,
    callback:callData.callback
  };

  // Copy to the map the things that need serializing
  var prefix = "c" + batch.map.callCount + "-";
  batch.map[prefix + "scriptName"] = scriptName;
  batch.map[prefix + "methodName"] = methodName;
  batch.map[prefix + "id"] = batch.map.callCount;
  var refctx = [];
  for (i = 0; i < args.length; i++) {
    dwr.engine._serializeAll(batch, refctx, args[i], prefix + "param" + i);
  }

  // Now we have finished remembering the call, we incr the call count
  batch.map.callCount++;
  if (singleShot) dwr.engine.endBatch();
};

/** @private Poll the server to see if there is any data waiting */
dwr.engine._poll = function() {
  if (!dwr.engine._activeReverseAjax) return;

  var batch = dwr.engine._createBatch();
  batch.map.id = 0; // TODO: Do we need this??
  batch.map.callCount = 1;
  batch.isPoll = true;
  if (dwr.engine._pollWithXhr == "true") {
    batch.rpcType = dwr.engine.XMLHttpRequest;
    batch.map.partialResponse = dwr.engine._partialResponseNo;
  }
  else {
    if (navigator.userAgent.indexOf("Gecko/") != -1) {
      batch.rpcType = dwr.engine.XMLHttpRequest;
      batch.map.partialResponse = dwr.engine._partialResponseYes;
    }
    else {
      batch.rpcType = dwr.engine.XMLHttpRequest;
      batch.map.partialResponse = dwr.engine._partialResponseNo;
    }
  }
  batch.httpMethod = "POST";
  batch.async = true;
  batch.timeout = 0;
  batch.path = dwr.engine._defaultPath;
  batch.preHooks = [];
  batch.postHooks = [];
  batch.errorHandler = dwr.engine._pollErrorHandler;
  batch.warningHandler = dwr.engine._pollErrorHandler;
  batch.handlers[0] = {
    callback:function(pause) {
      dwr.engine._pollRetries = 0;
      setTimeout(dwr.engine._poll, pause);
    }
  };

  // Send the data
  dwr.engine._sendData(batch);
  if (batch.rpcType == dwr.engine.XMLHttpRequest && batch.map.partialResponse == dwr.engine._partialResponseYes) {
    dwr.engine._checkCometPoll();
  }
};

/** Try to recover from polling errors */
dwr.engine._pollErrorHandler = function(msg, ex) {
  // if anything goes wrong then just silently try again (up to 3x) after 10s
  dwr.engine._pollRetries++;
  dwr.engine._debug("Reverse Ajax poll failed (pollRetries=" + dwr.engine._pollRetries + "): " + ex.name + " : " + ex.message);
  if (dwr.engine._pollRetries < dwr.engine._maxPollRetries) {
    setTimeout(dwr.engine._poll, 10000);
  }
  else {
    dwr.engine._activeReverseAjax = false;
    dwr.engine._debug("Giving up.");
  }
};

/** @private Generate a new standard batch */
dwr.engine._createBatch = function() {
  var batch = {
    map:{
      callCount:0,
      page:window.location.pathname + window.location.search,
      httpSessionId:dwr.engine._getJSessionId(),
      scriptSessionId:dwr.engine._getScriptSessionId()
    },
    charsProcessed:0, paramCount:0,
    parameters:{}, headers:{},
    isPoll:false, handlers:{}, preHooks:[], postHooks:[],
    rpcType:dwr.engine._rpcType,
    httpMethod:dwr.engine._httpMethod,
    async:dwr.engine._async,
    timeout:dwr.engine._timeout,
    errorHandler:dwr.engine._errorHandler,
    warningHandler:dwr.engine._warningHandler,
    textHtmlHandler:dwr.engine._textHtmlHandler
  };
  if (dwr.engine._preHook) batch.preHooks.push(dwr.engine._preHook);
  if (dwr.engine._postHook) batch.postHooks.push(dwr.engine._postHook);
  var propname, data;
  if (dwr.engine._headers) {
    for (propname in dwr.engine._headers) {
      data = dwr.engine._headers[propname];
      if (typeof data != "function") batch.headers[propname] = data;
    }
  }
  if (dwr.engine._parameters) {
    for (propname in dwr.engine._parameters) {
      data = dwr.engine._parameters[propname];
      if (typeof data != "function") batch.parameters[propname] = data;
    }
  }
  return batch;
};

/** @private Take further options and merge them into */
dwr.engine._mergeBatch = function(batch, overrides) {
  var propname, data;
  for (var i = 0; i < dwr.engine._propnames.length; i++) {
    propname = dwr.engine._propnames[i];
    if (overrides[propname] != null) batch[propname] = overrides[propname];
  }
  if (overrides.preHook != null) batch.preHooks.unshift(overrides.preHook);
  if (overrides.postHook != null) batch.postHooks.push(overrides.postHook);
  if (overrides.headers) {
    for (propname in overrides.headers) {
      data = overrides.headers[propname];
      if (typeof data != "function") batch.headers[propname] = data;
    }
  }
  if (overrides.parameters) {
    for (propname in overrides.parameters) {
      data = overrides.parameters[propname];
      if (typeof data != "function") batch.map["p-" + propname] = "" + data;
    }
  }
};

/** @private What is our session id? */
dwr.engine._getJSessionId =  function() {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
    if (cookie.indexOf(dwr.engine._sessionCookieName + "=") == 0) {
      return cookie.substring(dwr.engine._sessionCookieName.length + 1, cookie.length);
    }
  }
  return "";
};

/** @private Check for reverse Ajax activity */
dwr.engine._checkCometPoll = function() {
  for (var i = 0; i < dwr.engine._outstandingIFrames.length; i++) {
    var text = "";
    var iframe = dwr.engine._outstandingIFrames[i];
    try {
      text = dwr.engine._getTextFromCometIFrame(iframe);
    }
    catch (ex) {
      dwr.engine._handleWarning(iframe.batch, ex);
    }
    if (text != "") dwr.engine._processCometResponse(text, iframe.batch);
  }
  if (dwr.engine._pollReq) {
    var req = dwr.engine._pollReq;
    var text = req.responseText;
    if (text != null) dwr.engine._processCometResponse(text, req.batch);
  }

  // If the poll resources are still there, come back again
  if (dwr.engine._outstandingIFrames.length > 0 || dwr.engine._pollReq) {
    setTimeout(dwr.engine._checkCometPoll, dwr.engine._pollCometInterval);
  }
};

/** @private Extract the whole (executed an all) text from the current iframe */
dwr.engine._getTextFromCometIFrame = function(frameEle) {
  var body = frameEle.contentWindow.document.body;
  if (body == null) return "";
  var text = body.innerHTML;
  // We need to prevent IE from stripping line feeds
  if (text.indexOf("<PRE>") == 0 || text.indexOf("<pre>") == 0) {
    text = text.substring(5, text.length - 7);
  }
  return text;
};

/** @private Some more text might have come in, test and execute the new stuff */
dwr.engine._processCometResponse = function(response, batch) {
  if (batch.charsProcessed == response.length) return;
  if (response.length == 0) {
    batch.charsProcessed = 0;
    return;
  }

  var firstStartTag = response.indexOf("//#DWR-START#", batch.charsProcessed);
  if (firstStartTag == -1) {
    // dwr.engine._debug("No start tag (search from " + batch.charsProcessed + "). skipping '" + response.substring(batch.charsProcessed) + "'");
    batch.charsProcessed = response.length;
    return;
  }
  // if (firstStartTag > 0) {
  //   dwr.engine._debug("Start tag not at start (search from " + batch.charsProcessed + "). skipping '" + response.substring(batch.charsProcessed, firstStartTag) + "'");
  // }

  var lastEndTag = response.lastIndexOf("//#DWR-END#");
  if (lastEndTag == -1) {
    // dwr.engine._debug("No end tag. unchanged charsProcessed=" + batch.charsProcessed);
    return;
  }

  // Skip the end tag too for next time, remembering CR and LF
  if (response.charCodeAt(lastEndTag + 11) == 13 && response.charCodeAt(lastEndTag + 12) == 10) {
    batch.charsProcessed = lastEndTag + 13;
  }
  else {
    batch.charsProcessed = lastEndTag + 11;
  }

  var exec = response.substring(firstStartTag + 13, lastEndTag);

  dwr.engine._receivedBatch = batch;
  dwr.engine._eval(exec);
  dwr.engine._receivedBatch = null;
};

/** @private Actually send the block of data in the batch object. */
dwr.engine._sendData = function(batch) {
  batch.map.batchId = dwr.engine._nextBatchId;
  dwr.engine._nextBatchId++;
  dwr.engine._batches[batch.map.batchId] = batch;
  dwr.engine._batchesLength++;
  batch.completed = false;

  for (var i = 0; i < batch.preHooks.length; i++) {
    batch.preHooks[i]();
  }
  batch.preHooks = null;
  // Set a timeout
  if (batch.timeout && batch.timeout != 0) {
    batch.timeoutId = setTimeout(function() { dwr.engine._abortRequest(batch); }, batch.timeout);
  }
  // Get setup for XMLHttpRequest if possible
  if (batch.rpcType == dwr.engine.XMLHttpRequest) {
    if (window.XMLHttpRequest) {
      batch.req = new XMLHttpRequest();
    }
    // IE5 for the mac claims to support window.ActiveXObject, but throws an error when it's used
    else if (window.ActiveXObject && !(navigator.userAgent.indexOf("Mac") >= 0 && navigator.userAgent.indexOf("MSIE") >= 0)) {
      batch.req = dwr.engine._newActiveXObject(dwr.engine._XMLHTTP);
    }
  }

  var prop, request;
  if (batch.req) {
    // Proceed using XMLHttpRequest
    if (batch.async) {
      batch.req.onreadystatechange = function() {
        if (typeof dwr != 'undefined') dwr.engine._stateChange(batch);
      };
    }
    // If we're polling, record this for monitoring
    if (batch.isPoll) {
      dwr.engine._pollReq = batch.req;
      // In IE XHR is an ActiveX control so you can't augment it like this
      if (!(document.all && !window.opera)) batch.req.batch = batch;
    }
    // Workaround for Safari 1.x POST bug
    var indexSafari = navigator.userAgent.indexOf("Safari/");
    if (indexSafari >= 0) {
      var version = navigator.userAgent.substring(indexSafari + 7);
      if (parseInt(version, 10) < 400) {
        if (dwr.engine._allowGetForSafariButMakeForgeryEasier == "true") batch.httpMethod = "GET";
        else dwr.engine._handleWarning(batch, { name:"dwr.engine.oldSafari", message:"Safari GET support disabled. See getahead.org/dwr/server/servlet and allowGetForSafariButMakeForgeryEasier." });
      }
    }
    batch.mode = batch.isPoll ? dwr.engine._ModePlainPoll : dwr.engine._ModePlainCall;
    request = dwr.engine._constructRequest(batch);
    try {
      batch.req.open(batch.httpMethod, request.url, batch.async);
      try {
        for (prop in batch.headers) {
          var value = batch.headers[prop];
          if (typeof value == "string") batch.req.setRequestHeader(prop, value);
        }
        if (!batch.headers["Content-Type"]) batch.req.setRequestHeader("Content-Type", "text/plain");
      }
      catch (ex) {
        dwr.engine._handleWarning(batch, ex);
      }
      batch.req.send(request.body);
      if (!batch.async) dwr.engine._stateChange(batch);
    }
    catch (ex) {
      dwr.engine._handleError(batch, ex);
    }
  }
  else if (batch.rpcType != dwr.engine.ScriptTag) {
    var idname = batch.isPoll ? "dwr-if-poll-" + batch.map.batchId : "dwr-if-" + batch.map.batchId;
    // Removed htmlfile implementation. Don't expect it to return before v3
    batch.div = document.createElement("div");
    // Add the div to the document first, otherwise IE 6 will ignore onload handler.
    document.body.appendChild(batch.div);
    batch.div.innerHTML = "<iframe src='javascript:void(0)' frameborder='0' style='width:0px;height:0px;border:0;' id='" + idname + "' name='" + idname + "' onload='dwr.engine._iframeLoadingComplete (" + batch.map.batchId + ");'></iframe>";
    batch.document = document;
    batch.iframe = batch.document.getElementById(idname);
    batch.iframe.batch = batch;
    batch.mode = batch.isPoll ? dwr.engine._ModeHtmlPoll : dwr.engine._ModeHtmlCall;
    if (batch.isPoll) dwr.engine._outstandingIFrames.push(batch.iframe);
    request = dwr.engine._constructRequest(batch);
    if (batch.httpMethod == "GET") {
      batch.iframe.setAttribute("src", request.url);
    }
    else {
      batch.form = batch.document.createElement("form");
      batch.form.setAttribute("id", "dwr-form");
      batch.form.setAttribute("action", request.url);
      batch.form.setAttribute("style", "display:none;");
      batch.form.setAttribute("target", idname);
      batch.form.target = idname;
      batch.form.setAttribute("method", batch.httpMethod);
      for (prop in batch.map) {
        var value = batch.map[prop];
        if (typeof value != "function") {
          var formInput = batch.document.createElement("input");
          formInput.setAttribute("type", "hidden");
          formInput.setAttribute("name", prop);
          formInput.setAttribute("value", value);
          batch.form.appendChild(formInput);
        }
      }
      batch.document.body.appendChild(batch.form);
      batch.form.submit();
    }
  }
  else {
    batch.httpMethod = "GET"; // There's no such thing as ScriptTag using POST
    batch.mode = batch.isPoll ? dwr.engine._ModePlainPoll : dwr.engine._ModePlainCall;
    request = dwr.engine._constructRequest(batch);
    batch.script = document.createElement("script");
    batch.script.id = "dwr-st-" + batch.map["c0-id"];
    batch.script.src = request.url;
    document.body.appendChild(batch.script);
  }
};

dwr.engine._ModePlainCall = "/call/plaincall/";
dwr.engine._ModeHtmlCall = "/call/htmlcall/";
dwr.engine._ModePlainPoll = "/call/plainpoll/";
dwr.engine._ModeHtmlPoll = "/call/htmlpoll/";

/** @private Work out what the URL should look like */
dwr.engine._constructRequest = function(batch) {
  // A quick string to help people that use web log analysers
  var request = { url:batch.path + batch.mode, body:null };
  if (batch.isPoll == true) {
    request.url += "ReverseAjax.dwr";
  }
  else if (batch.map.callCount == 1) {
    request.url += batch.map["c0-scriptName"] + "." + batch.map["c0-methodName"] + ".dwr";
  }
  else {
    request.url += "Multiple." + batch.map.callCount + ".dwr";
  }
  // Play nice with url re-writing
  var sessionMatch = location.href.match(/jsessionid=([^?]+)/);
  if (sessionMatch != null) {
    request.url += ";jsessionid=" + sessionMatch[1];
  }

  var prop;
  if (batch.httpMethod == "GET") {
    // Some browsers (Opera/Safari2) seem to fail to convert the callCount value
    // to a string in the loop below so we do it manually here.
    batch.map.callCount = "" + batch.map.callCount;
    request.url += "?";
    for (prop in batch.map) {
      if (typeof batch.map[prop] != "function") {
        request.url += encodeURIComponent(prop) + "=" + encodeURIComponent(batch.map[prop]) + "&";
      }
    }
    request.url = request.url.substring(0, request.url.length - 1);
  }
  else {
    // PERFORMANCE: for iframe mode this is thrown away.
    request.body = "";
    if (document.all && !window.opera) {
      // Use array joining on IE (fastest)
      var buf = [];
      for (prop in batch.map) {
        if (typeof batch.map[prop] != "function") {
          buf.push(prop + "=" + batch.map[prop] + dwr.engine._postSeperator);
        }
      }
      request.body = buf.join("");
    }
    else {
      // Use string concat on other browsers (fastest)
      for (prop in batch.map) {
        if (typeof batch.map[prop] != "function") {
          request.body += prop + "=" + batch.map[prop] + dwr.engine._postSeperator;
        }
      }
    }
    request.body = dwr.engine._contentRewriteHandler(request.body);
  }
  request.url = dwr.engine._urlRewriteHandler(request.url);
  return request;
};

/** @private Called by XMLHttpRequest to indicate that something has happened */
dwr.engine._stateChange = function(batch) {
  var toEval;

  if (batch.completed) {
    dwr.engine._debug("Error: _stateChange() with batch.completed");
    return;
  }

  var req = batch.req;
  try {
    if (req.readyState != 4) return;
  }
  catch (ex) {
    dwr.engine._handleWarning(batch, ex);
    // It's broken - clear up and forget this call
    dwr.engine._clearUp(batch);
    return;
  }

  if (dwr.engine._unloading) {
    dwr.engine._debug("Ignoring reply from server as page is unloading.");
    return;
  }
  
  try {
    var reply = req.responseText;
    reply = dwr.engine._replyRewriteHandler(reply);
    var status = req.status; // causes Mozilla to except on page moves

    if (reply == null || reply == "") {
      dwr.engine._handleWarning(batch, { name:"dwr.engine.missingData", message:"No data received from server" });
    }
    else if (status != 200) {
      dwr.engine._handleError(batch, { name:"dwr.engine.http." + status, message:req.statusText });
    }
    else {
      var contentType = req.getResponseHeader("Content-Type");
      if (!contentType.match(/^text\/plain/) && !contentType.match(/^text\/javascript/)) {
        if (contentType.match(/^text\/html/) && typeof batch.textHtmlHandler == "function") {
          batch.textHtmlHandler({ status:status, responseText:reply, contentType:contentType });
        }
        else {
          dwr.engine._handleWarning(batch, { name:"dwr.engine.invalidMimeType", message:"Invalid content type: '" + contentType + "'" });
        }
      }
      else {
        // Comet replies might have already partially executed
        if (batch.isPoll && batch.map.partialResponse == dwr.engine._partialResponseYes) {
          dwr.engine._processCometResponse(reply, batch);
        }
        else {
          if (reply.search("//#DWR") == -1) {
            dwr.engine._handleWarning(batch, { name:"dwr.engine.invalidReply", message:"Invalid reply from server" });
          }
          else {
            toEval = reply;
          }
        }
      }
    }
  }
  catch (ex) {
    dwr.engine._handleWarning(batch, ex);
  }

  dwr.engine._callPostHooks(batch);

  // Outside of the try/catch so errors propogate normally:
  dwr.engine._receivedBatch = batch;
  if (toEval != null) toEval = toEval.replace(dwr.engine._scriptTagProtection, "");
  dwr.engine._eval(toEval);
  dwr.engine._receivedBatch = null;
  dwr.engine._validateBatch(batch);
  if (!batch.completed) dwr.engine._clearUp(batch);
};

/**
 * @private This function is invoked when a batch reply is received.
 * It checks that there is a response for every call in the batch. Otherwise,
 * an error will be signaled (a call without a response indicates that the 
 * server failed to send complete batch response). 
 */
dwr.engine._validateBatch = function(batch) {
  // If some call left unreplied, report an error.
  if (!batch.completed) {
    for (var i = 0; i < batch.map.callCount; i++) {
      if (batch.handlers[i] != null) {
        dwr.engine._handleWarning(batch, { name:"dwr.engine.incompleteReply", message:"Incomplete reply from server" });
        break;
      }
    }
  }
}

/** @private Called from iframe onload, check batch using batch-id */
dwr.engine._iframeLoadingComplete = function(batchId) {
  // dwr.engine._checkCometPoll();
  var batch = dwr.engine._batches[batchId];
  if (batch) dwr.engine._validateBatch(batch);
}

/** @private Called by the server: Execute a callback */
dwr.engine._remoteHandleCallback = function(batchId, callId, reply) {
  var batch = dwr.engine._batches[batchId];
  if (batch == null) {
    dwr.engine._debug("Warning: batch == null in remoteHandleCallback for batchId=" + batchId, true);
    return;
  }
  // Error handlers inside here indicate an error that is nothing to do
  // with DWR so we handle them differently.
  try {
    var handlers = batch.handlers[callId];
    batch.handlers[callId] = null;
    if (!handlers) {
      dwr.engine._debug("Warning: Missing handlers. callId=" + callId, true);
    }
    else if (typeof handlers.callback == "function") handlers.callback(reply);
  }
  catch (ex) {
    dwr.engine._handleError(batch, ex);
  }
};

/** @private Called by the server: Handle an exception for a call */
dwr.engine._remoteHandleException = function(batchId, callId, ex) {
  var batch = dwr.engine._batches[batchId];
  if (batch == null) { dwr.engine._debug("Warning: null batch in remoteHandleException", true); return; }
  var handlers = batch.handlers[callId];
  batch.handlers[callId] = null;
  if (handlers == null) { dwr.engine._debug("Warning: null handlers in remoteHandleException", true); return; }
  if (ex.message == undefined) ex.message = "";
  if (typeof handlers.exceptionHandler == "function") handlers.exceptionHandler(ex.message, ex);
  else if (typeof batch.errorHandler == "function") batch.errorHandler(ex.message, ex);
};

/** @private Called by the server: The whole batch is broken */
dwr.engine._remoteHandleBatchException = function(ex, batchId) {
  var searchBatch = (dwr.engine._receivedBatch == null && batchId != null);
  if (searchBatch) {
    dwr.engine._receivedBatch = dwr.engine._batches[batchId];
  }
  if (ex.message == undefined) ex.message = "";
  dwr.engine._handleError(dwr.engine._receivedBatch, ex);
  if (searchBatch) {
    dwr.engine._receivedBatch = null;
    dwr.engine._clearUp(dwr.engine._batches[batchId]);
  }
};

/** @private Called by the server: Reverse ajax should not be used */
dwr.engine._remotePollCometDisabled = function(ex, batchId) {
  dwr.engine.setActiveReverseAjax(false);
  var searchBatch = (dwr.engine._receivedBatch == null && batchId != null);
  if (searchBatch) {
    dwr.engine._receivedBatch = dwr.engine._batches[batchId];
  }
  if (ex.message == undefined) ex.message = "";
  dwr.engine._handleError(dwr.engine._receivedBatch, ex);
  if (searchBatch) {
    dwr.engine._receivedBatch = null;
    dwr.engine._clearUp(dwr.engine._batches[batchId]);
  }
};

/** @private Called by the server: An IFrame reply is about to start */
dwr.engine._remoteBeginIFrameResponse = function(iframe, batchId) {
  if (iframe != null) dwr.engine._receivedBatch = iframe.batch;
  dwr.engine._callPostHooks(dwr.engine._receivedBatch);
};

/** @private Called by the server: An IFrame reply is just completing */
dwr.engine._remoteEndIFrameResponse = function(batchId) {
  dwr.engine._clearUp(dwr.engine._receivedBatch);
  dwr.engine._receivedBatch = null;
};

/** @private This is a hack to make the context be this window */
dwr.engine._eval = function(script) {
  if (script == null) return null;
  if (script == "") { dwr.engine._debug("Warning: blank script", true); return null; }
  // dwr.engine._debug("Exec: [" + script + "]", true);
  return eval(script);
};

/** @private Called as a result of a request timeout */
dwr.engine._abortRequest = function(batch) {
  if (batch && !batch.completed) {
    dwr.engine._clearUp(batch);
    if (batch.req) batch.req.abort();
    dwr.engine._handleError(batch, { name:"dwr.engine.timeout", message:"Timeout" });
  }
};

/** @private call all the post hooks for a batch */
dwr.engine._callPostHooks = function(batch) {
  if (batch.postHooks) {
    for (var i = 0; i < batch.postHooks.length; i++) {
      batch.postHooks[i]();
    }
    batch.postHooks = null;
  }
};

/** @private A call has finished by whatever means and we need to shut it all down. */
dwr.engine._clearUp = function(batch) {
  if (!batch) { dwr.engine._debug("Warning: null batch in dwr.engine._clearUp()", true); return; }
  if (batch.completed) { dwr.engine._debug("Warning: Double complete", true); return; }

  // IFrame tidyup
  if (batch.div) batch.div.parentNode.removeChild(batch.div);
  if (batch.iframe) {
    // If this is a poll frame then stop comet polling
    for (var i = 0; i < dwr.engine._outstandingIFrames.length; i++) {
      if (dwr.engine._outstandingIFrames[i] == batch.iframe) {
        dwr.engine._outstandingIFrames.splice(i, 1);
      }
    }
    batch.iframe.parentNode.removeChild(batch.iframe);
  }
  if (batch.form) batch.form.parentNode.removeChild(batch.form);

  // XHR tidyup: avoid IE handles increase
  if (batch.req) {
    // If this is a poll frame then stop comet polling
    if (batch.req == dwr.engine._pollReq) dwr.engine._pollReq = null;
    delete batch.req;
  }

  // Timeout tidyup
  if (batch.timeoutId != null) {
    clearTimeout(batch.timeoutId);
    delete batch.timeoutId;
  }

  if (batch.map && (batch.map.batchId || batch.map.batchId == 0)) {
    delete dwr.engine._batches[batch.map.batchId];
    dwr.engine._batchesLength--;
  }

  batch.completed = true;

  // If there is anything on the queue waiting to go out, then send it.
  // We don't need to check for ordered mode, here because when ordered mode
  // gets turned off, we still process *waiting* batches in an ordered way.
  if (dwr.engine._batchQueue.length != 0) {
    var sendbatch = dwr.engine._batchQueue.shift();
    dwr.engine._sendData(sendbatch);
  }
};

/** @private Abort any XHRs in progress at page unload (solves zombie socket problems in IE). */
dwr.engine._unloader = function() {
  dwr.engine._unloading = true;

  // Empty queue of waiting ordered requests
  dwr.engine._batchQueue.length = 0;

  // Abort any ongoing XHRs and clear their batches
  for (var batchId in dwr.engine._batches) {
    var batch = dwr.engine._batches[batchId];
    // Only process objects that look like batches (avoid prototype additions!)
    if (batch && batch.map) {
      if (batch.req) {
        batch.req.abort();
      }
      dwr.engine._clearUp(batch);
    }
  }
};
// Now register the unload handler
if (window.addEventListener) window.addEventListener('unload', dwr.engine._unloader, false);
else if (window.attachEvent) window.attachEvent('onunload', dwr.engine._unloader);

/** @private Generic error handling routing to save having null checks everywhere */
dwr.engine._handleError = function(batch, ex) {
  if (typeof ex == "string") ex = { name:"unknown", message:ex };
  if (ex.message == null) ex.message = "";
  if (ex.name == null) ex.name = "unknown";
  if (batch && typeof batch.errorHandler == "function") batch.errorHandler(ex.message, ex);
  else if (dwr.engine._errorHandler) dwr.engine._errorHandler(ex.message, ex);
  if (batch) dwr.engine._clearUp(batch);
};

/** @private Generic error handling routing to save having null checks everywhere */
dwr.engine._handleWarning = function(batch, ex) {
  if (typeof ex == "string") ex = { name:"unknown", message:ex };
  if (ex.message == null) ex.message = "";
  if (ex.name == null) ex.name = "unknown";
  if (batch && typeof batch.warningHandler == "function") batch.warningHandler(ex.message, ex);
  else if (dwr.engine._warningHandler) dwr.engine._warningHandler(ex.message, ex);
  if (batch) dwr.engine._clearUp(batch);
};

/**
 * @private Marshall a data item
 * @param batch A map of variables to how they have been marshalled
 * @param referto An array of already marshalled variables to prevent recurrsion
 * @param data The data to be marshalled
 * @param name The name of the data being marshalled
 */
dwr.engine._serializeAll = function(batch, referto, data, name) {
  if (data == null) {
    batch.map[name] = "null:null";
    return;
  }

  switch (typeof data) {
  case "boolean":
    batch.map[name] = "boolean:" + data;
    break;
  case "number":
    batch.map[name] = "number:" + data;
    break;
  case "string":
    batch.map[name] = "string:" + encodeURIComponent(data);
    break;
  case "object":
    var objstr = Object.prototype.toString.call(data);
    if (objstr == "[object String]") batch.map[name] = "String:" + encodeURIComponent(data);
    else if (objstr == "[object Boolean]") batch.map[name] = "Boolean:" + data;
    else if (objstr == "[object Number]") batch.map[name] = "Number:" + data;
    else if (objstr == "[object Date]") batch.map[name] = "Date:" + data.getTime();
    else if (objstr == "[object Array]") batch.map[name] = dwr.engine._serializeArray(batch, referto, data, name);
    else batch.map[name] = dwr.engine._serializeObject(batch, referto, data, name);
    break;
  case "function":
    // We just ignore functions.
    break;
  default:
    dwr.engine._handleWarning(null, { name:"dwr.engine.unexpectedType", message:"Unexpected type: " + typeof data + ", attempting default converter." });
    batch.map[name] = "default:" + data;
    break;
  }
};

/** @private Have we already converted this object? */
dwr.engine._lookup = function(referto, data, name) {
  var lookup;
  // Can't use a map: getahead.org/ajax/javascript-gotchas
  for (var i = 0; i < referto.length; i++) {
    if (referto[i].data == data) {
      lookup = referto[i];
      break;
    }
  }
  if (lookup) return "reference:" + lookup.name;
  referto.push({ data:data, name:name });
  return null;
};

/** @private Marshall an object */
dwr.engine._serializeObject = function(batch, referto, data, name) {
  var ref = dwr.engine._lookup(referto, data, name);
  if (ref) return ref;

  // This check for an HTML is not complete, but is there a better way?
  // Maybe we should add: data.hasChildNodes typeof "function" == true
  if (data.nodeName && data.nodeType) {
    return dwr.engine._serializeXml(batch, referto, data, name);
  }

  // treat objects as an associative arrays
  var reply = "Object_" + dwr.engine._getObjectClassName(data) + ":{";
  var element;
  for (element in data) {
    if (typeof data[element] != "function") {
      batch.paramCount++;
      var childName = "c" + dwr.engine._batch.map.callCount + "-e" + batch.paramCount;
      dwr.engine._serializeAll(batch, referto, data[element], childName);

      reply += encodeURIComponent(element) + ":reference:" + childName + ", ";
    }
  }

  if (reply.substring(reply.length - 2) == ", ") {
    reply = reply.substring(0, reply.length - 2);
  }
  reply += "}";

  return reply;
};

/** @private Returns the classname of supplied argument obj */
dwr.engine._errorClasses = { "Error":Error, "EvalError":EvalError, "RangeError":RangeError, "ReferenceError":ReferenceError, "SyntaxError":SyntaxError, "TypeError":TypeError, "URIError":URIError };
dwr.engine._getObjectClassName = function(obj) {
  // Try to find the classname by stringifying the object's constructor
  // and extract <class> from "function <class>".
  if (obj && obj.constructor && obj.constructor.toString)
  {
    var str = obj.constructor.toString();
    var regexpmatch = str.match(/function\s+(\w+)/);
    if (regexpmatch && regexpmatch.length == 2) {
      return regexpmatch[1];
    }
  }

  // Now manually test against the core Error classes, as these in some 
  // browsers successfully match to the wrong class in the 
  // Object.toString() test we will do later
  if (obj && obj.constructor) {
    for (var errorname in dwr.engine._errorClasses) {
      if (obj.constructor == dwr.engine._errorClasses[errorname]) return errorname;
    }
  }

  // Try to find the classname by calling Object.toString() on the object
  // and extracting <class> from "[object <class>]"
  if (obj) {
    var str = Object.prototype.toString.call(obj);
    var regexpmatch = str.match(/\[object\s+(\w+)/);
    if (regexpmatch && regexpmatch.length==2) {
      return regexpmatch[1];
    }
  }

  // Supplied argument was probably not an object, but what is better?
  return "Object";
};

/** @private Marshall an object */
dwr.engine._serializeXml = function(batch, referto, data, name) {
  var ref = dwr.engine._lookup(referto, data, name);
  if (ref) return ref;

  var output;
  if (window.XMLSerializer) output = new XMLSerializer().serializeToString(data);
  else if (data.toXml) output = data.toXml;
  else output = data.innerHTML;

  return "XML:" + encodeURIComponent(output);
};

/** @private Marshall an array */
dwr.engine._serializeArray = function(batch, referto, data, name) {
  var ref = dwr.engine._lookup(referto, data, name);
  if (ref) return ref;

  if (document.all && !window.opera) {
    // Use array joining on IE (fastest)
    var buf = ["Array:["];
    for (var i = 0; i < data.length; i++) {
      if (i != 0) buf.push(",");
      batch.paramCount++;
      var childName = "c" + dwr.engine._batch.map.callCount + "-e" + batch.paramCount;
      dwr.engine._serializeAll(batch, referto, data[i], childName);
      buf.push("reference:");
      buf.push(childName);
    }
    buf.push("]");
    reply = buf.join("");
  }
  else {
    // Use string concat on other browsers (fastest)
    var reply = "Array:[";
    for (var i = 0; i < data.length; i++) {
      if (i != 0) reply += ",";
      batch.paramCount++;
      var childName = "c" + dwr.engine._batch.map.callCount + "-e" + batch.paramCount;
      dwr.engine._serializeAll(batch, referto, data[i], childName);
      reply += "reference:";
      reply += childName;
    }
    reply += "]";
  }

  return reply;
};

/** @private Convert an XML string into a DOM object. */
dwr.engine._unserializeDocument = function(xml) {
  var dom;
  if (window.DOMParser) {
    var parser = new DOMParser();
    dom = parser.parseFromString(xml, "text/xml");
    if (!dom.documentElement || dom.documentElement.tagName == "parsererror") {
      var message = dom.documentElement.firstChild.data;
      message += "\n" + dom.documentElement.firstChild.nextSibling.firstChild.data;
      throw message;
    }
    return dom;
  }
  else if (window.ActiveXObject) {
    dom = dwr.engine._newActiveXObject(dwr.engine._DOMDocument);
    dom.loadXML(xml); // What happens on parse fail with IE?
    return dom;
  }
  else {
    var div = document.createElement("div");
    div.innerHTML = xml;
    return div;
  }
};

/** @param axarray An array of strings to attempt to create ActiveX objects from */
dwr.engine._newActiveXObject = function(axarray) {
  var returnValue;  
  for (var i = 0; i < axarray.length; i++) {
    try {
      returnValue = new ActiveXObject(axarray[i]);
      break;
    }
    catch (ex) { /* ignore */ }
  }
  return returnValue;
};

/** @private Used internally when some message needs to get to the programmer */
dwr.engine._debug = function(message, stacktrace) {
  var written = false;
  try {
    if (window.console) {
      if (stacktrace && window.console.trace) window.console.trace();
      window.console.log(message);
      written = true;
    }
    else if (window.opera && window.opera.postError) {
      window.opera.postError(message);
      written = true;
    }
  }
  catch (ex) { /* ignore */ }

  if (!written) {
    var debug = document.getElementById("dwr-debug");
    if (debug) {
      var contents = message + "<br/>" + debug.innerHTML;
      if (contents.length > 2048) contents = contents.substring(0, 2048);
      debug.innerHTML = contents;
    }
  }
};

// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (CalendarBean == null) var CalendarBean = {};
CalendarBean._path = '/dwr';
CalendarBean.getSC2CalendarCount = function(p0, p1, callback) {
  dwr.engine._execute(CalendarBean._path, 'CalendarBean', 'getSC2CalendarCount', p0, p1, callback);
}
CalendarBean.getSC2CalendarsByTime = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(CalendarBean._path, 'CalendarBean', 'getSC2CalendarsByTime', p0, p1, p2, p3, callback);
}
CalendarBean.getAllSC2CalendarsByTime = function(p0, p1, callback) {
  dwr.engine._execute(CalendarBean._path, 'CalendarBean', 'getAllSC2CalendarsByTime', p0, p1, callback);
}
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (SC2MapBean == null) var SC2MapBean = {};
SC2MapBean._path = '/dwr';
SC2MapBean.markSC2MapScore = function(p0, p1, callback) {
  dwr.engine._execute(SC2MapBean._path, 'SC2MapBean', 'markSC2MapScore', p0, p1, callback);
}
SC2MapBean.getSC2MapScore = function(p0, callback) {
  dwr.engine._execute(SC2MapBean._path, 'SC2MapBean', 'getSC2MapScore', p0, callback);
}
var Share = {
		isload:false,
		params:(function(){
				var tt_dom = $('title');
				var encode = encodeURIComponent;
				var $img = $('.w-article .content img');
				if(!tt_dom)return;
			
				return {link:encode(window.location.href),
					title:encode(tt_dom.text()||'星际II官网'),
					pic:($img.size()>0)?encode($img.attr('src')):"http://sc2.163.com/style/images/logo.jpg"};
	
		})(),
		
		init:function(st){
			this.initDig();
			
			$(".share-more").hover(function(){
				$(this).find('span').toggleClass('f-hd f-show');
			},function(){
				$(this).find('span').toggleClass('f-hd f-show');
			});
			
			$('.sharebtn a').each(function(){
				$(this).click(
					function(){
						var params = Share.encodeShareParams($(this).attr('index'));
						window.open(params[0],'',params[1]);
					}
				);
			});

		},
		initDig:function(){
			Core.appendFrame('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_likeurl?url='+ this.params.link+'&style=3&otype=like&showcount=1', 110, 22, $('.w-share .z-qqshare'), 'qzone-like');
			Core.appendFrame('http://www.connect.renren.com/like/v2?url='+ this.params.link, 130, 22, $('.w-share .z-rrshare'), 'renren-like');			
		},
		initHomeShare:function(){
			$('.w-pshare .sharett').click(function(){
				$('.w-pshare').css('z-index',1001);
				$('.w-pshare .sharett').toggleClass('f-hd f-show');
				$('.w-pshare .sharepl').toggleClass('f-hd f-show');
			});
			$('.w-pshare .close').click(function(){
				$('.w-pshare').css('z-index',4);
				$('.w-pshare .sharett').toggleClass('f-hd f-show');
				$('.w-pshare .sharepl').toggleClass('f-hd f-show');
			});			
		},
		initFlShare:function(imgArg){			
		     var imgVal=imgArg;	
			/*$('.w-pshare .sharett').click(function(){
				$('.w-pshare').css('z-index',1001);
				$('.w-pshare .sharett').toggleClass('f-hd f-show');
				$('.w-pshare .sharepl').toggleClass('f-hd f-show');
			});
			$('.w-pshare .close').click(function(){
				$('.w-pshare').css('z-index',4);
				$('.w-pshare .sharett').toggleClass('f-hd f-show');
				$('.w-pshare .sharepl').toggleClass('f-hd f-show');
			});				 
			$('.w-pshare .sharelist a').each(function(){
				$(this).click(
					function(){
						var params = Share.encodeShareParams($(this).attr('index'));
						window.open(params[0],'',params[1]).focus();
					}
				);
			});*/
		    $("#share a").eq(0).click(function(){
				  var params = Share.encodeShareParams("2",imgVal);	  
			      window.open(params[0],'',params[1]);
			});
			$("#share a").eq(1).click(function(){
				  var params = Share.encodeShareParams("1",imgVal);
			      window.open(params[0],'',params[1]);
			});
			$("#share a").eq(2).click(function(){
				  var params = Share.encodeShareParams("0",imgVal);
			      window.open(params[0],'',params[1]);
			});
			$("#share a").eq(3).click(function(){
				  var params = Share.encodeShareParams("3",imgVal);
			      window.open(params[0],'',params[1]);
			});
			$("#share a").eq(4).click(function(){
				  var params = Share.encodeShareParams("4",imgVal);
			      window.open(params[0],'',params[1]);
			});
			$("#share a").eq(5).click(function(){
				  var params = Share.encodeShareParams("5",imgVal);
			      window.open(params[0],'',params[1]);
			});	
			 $("#share_sina").click(function(){
				  var params = Share.encodeShareParams("2",imgVal);		  
			      window.open(params[0],'',params[1]);
			});
			$("#share_txwb").click(function(){
				  var params = Share.encodeShareParams("1",imgVal);
			      window.open(params[0],'',params[1]);
			});
			$(".shareTuesday li").live("click",function(){
				var liClass=$(this).attr("class");
				var liRel=$(this).parents().attr('rel');
				switch(liClass){
					case 'ntes':
						Share.setShareTuesday("0",imgVal,liRel);
						break;
					case 'qq':
						Share.setShareTuesday("1",imgVal,liRel);
						break;
					case 'sina':
						Share.setShareTuesday("2",imgVal,liRel);
						break;
					case 'kaixin':
						Share.setShareTuesday("3",imgVal,liRel);
						break;
					case 'renren':
						Share.setShareTuesday("4",imgVal,liRel);
						break;
					case 'qq_zoom':
						Share.setShareTuesday("5",imgVal,liRel);
						break;
				}
			})
		},
		setShareTuesday:function(paramsV,imgArg,liRel){
			var indexRel=liRel;
			var imgVal=imgArg;
			var params = Share.encodeShareParams(paramsV,imgVal,indexRel);
		     window.open(params[0],'',params[1]);		
		},
		encodeShareParams:function(type,imgVal,indexRel){
			var P = Share.params;
			var Ptitle=$('title').text();
			var ShareRel=$('.liveScrollList').find('dt a');
			var ShareTitle=$('.liveScrollList').find('.title');
			
			if(typeof imgVal=="undefined"){
				var imgVal2=P.pic;	
			}else{
				var imgVal2=imgVal;
			}
			if(P.link.indexOf("minisite%2Ffriday")>0 && typeof indexRel!=="undefined"){
				if(P.link.indexOf("Phase")>0){
					var reTxt=P.link.split("minisite%2Ffriday")[1];
					P.link=P.link.replace(reTxt,"");
				}

			 		P.title=Ptitle+'-'+ShareTitle.eq(indexRel).text();
			 		P.link+="%3FfriVideoTag%26Phase="+indexRel;
			 		
			 		ShareRel.hover(function(){
						P.title=Ptitle+'-'+ShareTitle.eq(indexRel).text();
					},function(){
						P.title=Ptitle;
					})	
			} 

			switch(type){
			case '0':
				/* 163 weibo */
				return ['http://t.163.com/article/user/checkLogin.do?images='+imgVal2+'&togImg=true&link='+P.link+'&source='+P.link+'&info='+P.title+' '+P.link,'width=640,height=480,resizable=no']
			case '1':	
				/* qq weibo */
				return ['http://v.t.qq.com/share/share.php?pic='+imgVal2+'&url='+P.link+'&site='+P.link+'&title='+P.title,'width=640,height=480,resizable=no'];
			case '2':
				/* sina weibo */
				return ['http://v.t.sina.com.cn/share/share.php?type=2&pic='+imgVal2+'&title='+P.title+'&url='+P.link,'width=640,height=480,resizable=no'];
			case '3':
				/* kaxin */
				return ['http://www.kaixin001.com/repaste/bshare.php?rtitle='+P.title+'&rurl='+P.link,'width=640,height=480,resizable=no'];
			case '4':
				/* renren */
				return ['http://share.renren.com/share/buttonshare.do?link='+P.link+'&title='+P.title,'width=640,height=480,resizable=no'];
			case '5':
				/* qq zone */
				return ['http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title='+P.title+'&url='+P.link+'&pics='+P.pic+'&summary='+P.title,'width=640,height=480,resizable=no'];
			}		
		},
		setUrl:function(){
			var LocationHref=location.href;
			var liveScrollList=$('.liveScrollList');
			var liveScrollListDt=liveScrollList.find('dt');
			var liveScrollListA=liveScrollListDt.find('a');
			var liveScrollListDd=liveScrollList.find('dd');
			var num=LocationHref.split('friVideoTag&Phase=');	

			liveScrollListA.hide();
			if(typeof num[1]=="undefined"){
				liveScrollListDt.eq(0).addClass('active').siblings('dt').removeClass('active');
				liveScrollListDd.eq(0).show().siblings('dd').hide();				
				liveScrollListA.eq(0).show();
			}else{
				liveScrollListDt.eq(num[1]).addClass('active').siblings('dt').removeClass('active');
				liveScrollListDd.eq(num[1]).show().siblings('dd').hide();
				liveScrollListA.eq(num[1]).show();		
				
			}
			
			
			
			
		},
		popReg:function(){
			$('.w-reg .sharett').click(function(){
				$('.w-reg').css('z-index',1001);
				$('.w-reg .sharett').toggleClass('f-hd f-show');
				$('.w-reg .sharepl').toggleClass('f-hd f-show');
			});
			$('.w-reg .close').click(function(){
				$('.w-reg').css('z-index',4);
				$('.w-reg .sharett').toggleClass('f-hd f-show');
				$('.w-reg .sharepl').toggleClass('f-hd f-show');
			});
			$(window).scroll(function(){
				var defaultTop=100;
				var wT=parseInt($(window).scrollTop());
				var top=wT+defaultTop+"px";
				//setTimeout(function(){$(".w-reg").css("top",top)},500);
				setTimeout(function(){$(".w-reg").stop(true,true).animate({"top":top},500)},100);
			})
			$(".w-reg .textInput").focus(function(){
				$(this).css("background-position","0 -27px");	
			})
			$(".w-reg .textInput").blur(function(){
				$(this).css("background-position","0 0");	
			})
			$(".w-reg .shortInput").focus(function(){
				$(this).css("background-position","-170px -27px");	
			})
			$(".w-reg .shortInput").blur(function(){
				$(this).css("background-position","-170px 0");	
			})		
			$(".w-reg .chkSpan").toggle(function(){
				$(this).css("background-position","-252px -18px");				
			},function(){
				$(this).css("background-position","-252px 0");	
			})	
			$(".w-reg .regBtn a.regB").click(function(){
				$(this).hide().siblings().css("display","block");
				$(".w-reg .sharepl").css({"background-image":"url(../style/images/reg/reg_l.png?v=1)","height":"585px"});
				$(".sharecnt .regBtn").css("top","260px");
				$(".sharecnt ul").show();
				return false;	
									
			})			
			$(".w-reg .regBtn a.regG").click(function(){
				var popTxt="<p>恭喜您，成功注册了《星际争霸Ⅱ》</p>",
					popBtn="<a href='/download/' target='_blank' class='btn'>确定</a>",
					popWrap="<div id='regPop'>"+popTxt+popBtn+"</div>";
				$("body").append(popWrap);
				Share.setModel();
				var regP=Share.setPosition();
				$("#regPop").css({"left":regP[0]+"px","top":regP[1]+"px"});
				return false;	
									
			})
			$("#regPop a").live("click",function(){
				$("#regPop").remove();	
				$("#boxModel").remove();
			})			
		},
		setPosition:function(){
			var boxObj=$("#regPop");
			var wW=$(window).width();
			var wH=$(window).height();
			var wScrollTop=$(window).scrollTop();
			var bW=boxObj.width();
			var bH=boxObj.height();
			var bLeft=(wW-bW)/2;
			var bTop=(wH-bH)/2+wScrollTop;
			return [bLeft,bTop];
				
		},
		setModel:function(){
			var modelHtml="<div id='boxModel'></div>",
				wW=$(window).width(),
				bH=$("body").height();
			$("body").append(modelHtml);
			$("#boxModel").width(wW);
			$("#boxModel").height(bH); 
			$("#boxModel").css("opacity",0.8).show();			
		}
	
};
// JavaScript Document
var Pay={
	init:function(){
		this.float();
		this.inquire();
		//this.scroll();
		this.close();
		this.tab();
	},
	float:function(){
		var x=20,y=10;
		$('.award ul').each(function(i){
			$(this).find('li.h').mouseover(function(e){	
				var index=$(this).index()-2;
				$('.award-pop').eq(index).show();
				$('.award-pop').eq(index).css({"left":(e.pageX+x)+"px","top":(e.pageY+y)+"px"});
			}).mousemove(function(e){
				var index=$(this).index()-2;
				$('.award-pop').eq(index).css({"left":(e.pageX+x)+"px","top":(e.pageY+y)+"px"});
			}).mouseout(function(){
				$('.award-pop').hide();
			})	
		})
	  },
	  inquire:function(){
		  $('.other_buy_btn').toggle(function(){
			  $(this).find('a').css('background','url(http://sc2.nos.netease.com/1/style/images/pay/new-1/wz_btn_up.png) no-repeat 0 0')
			  $('.other_buy').animate({height:'188px'},'fast',function(){
				  $('.other_buy dl').fadeIn();
			  });
			  $('.payCon').animate({height:'1313px'});
		  },function(){
			  $(this).find('a').css('background','url(http://sc2.nos.netease.com/1/style/images/pay/new-1/wz_btn.gif) no-repeat 0 0')
			  $('.other_buy').animate({height:'38px'},'fast',function(){
			  });
			  $('.other_buy dl').hide();
			  $('.payCon').animate({height:'1157px'});
		  })
	  },
	  scroll:function(){
		  $("#liveScroll").tinyscrollbar( {
              scrollbarSelector: '.scrollBar',
              viewportSelector: '.comment-con-over',
              overviewSelector: ".comment-con-over-con"
          });
	  },
	  close:function(){
		  $('.close').click(function(){
			  $('.ui-context').hide();
		  })
		  $('.ui-context').mouseleave(function(){
			  $('.ui-context').hide();
		  })
	  },
	  tab:function(){
		 $('.comment-btn li').click(function(){
			
			 var index=$(this).index('.comment-btn li');
			 $('.comment-btn li').eq(index).addClass('on').siblings().removeClass('on');
			 $('.comment-con').eq(index).show().siblings('.comment-con').hide();
			 
			 Pay.scroll();
		 })
	  },
	_:null
};


(function(c){var a=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=a.length;d;){this.addEventListener(a[--d],b,false)}}else{this.onmousewheel=b}},teardown:function(){if(this.removeEventListener){for(var d=a.length;d;){this.removeEventListener(a[--d],b,false)}}else{this.onmousewheel=null}}};c.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}});function b(f){var d=[].slice.call(arguments,1),g=0,e=true;f=c.event.fix(f||window.event);f.type="mousewheel";if(f.wheelDelta){g=f.wheelDelta/120}if(f.detail){g=-f.detail/3}d.unshift(f,g);return c.event.handle.apply(this,d)}})(jQuery);

/*!
 * Tiny Scrollbar 1.65
 * http://www.baijs.nl/tinyscrollbar/
 *
 * Copyright 2010, Maarten Baijs
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/gpl-2.0.php
 *
 * Date: 10 / 05 / 2011
 * Depends on library: jQuery
 *
 */
var scrollBarRatio = 0;
(function($){
	$.tiny = $.tiny || { };

	$.tiny.scrollbar = {
		options: {
			axis: 'y', // vertical or horizontal scrollbar? ( x || y ).
			wheel: 40,  //how many pixels must the mouswheel scroll at a time.
			scroll: true, //enable or disable the mousewheel;
			size: 'auto', //set the size of the scrollbar to auto or a fixed number.
			sizethumb: 'auto', //set the size of the thumb to auto or a fixed number.
			trackSelector: '.track',
            thumbSelector: '.thumb',
            scrollbarSelector: '.scrollbar',
            viewportSelector: '.viewport',
            overviewSelector: '.overview',
            minThumbSize: 50, //minimum width or height of the scrollbar thumb
            slideCallback: null,  //callback function on slide
            newfun:function(){}
		}
	};

	$.fn.tinyscrollbar = function(options) {
		var options = $.extend({}, $.tiny.scrollbar.options, options);
		this.each(function(){ $(this).data('tsb', new Scrollbar($(this), options)); });
		return this;
	};
	$.fn.tinyscrollbar_update = function(sScroll) { return $(this).data('tsb').update(sScroll); };

	function Scrollbar(root, options){
		var oSelf = this;
		var oWrapper = root;
		var oViewport = { obj: $(options.viewportSelector, root) };
		var oContent = { obj: $(options.overviewSelector, root) };
		var oScrollbar = { obj: $(options.scrollbarSelector, root) };
		var oTrack = { obj: $(options.trackSelector, oScrollbar.obj) };
		var oThumb = { obj: $(options.thumbSelector, oScrollbar.obj) };
		var sAxis = options.axis == 'x', sDirection = sAxis ? 'left' : 'top', sSize = sAxis ? 'Width' : 'Height';
		var iScroll, iPosition = { start: 0, now: 0 }, iMouse = {};

		function initialize() {
			oSelf.update();
			setEvents();
			return oSelf;
		}
		this.update = function(sScroll){
			oViewport[options.axis] = oViewport.obj[0]['offset'+ sSize];
			oContent[options.axis] = oContent.obj[0]['scroll'+ sSize];
			oContent.ratio = oViewport[options.axis] / oContent[options.axis];
			oScrollbar.obj.toggleClass('disable', oContent.ratio >= 1);
			oTrack[options.axis] = options.size == 'auto' ? oViewport[options.axis] : options.size;
			oThumb[options.axis] = Math.min(oTrack[options.axis], Math.max(0, ( options.sizethumb == 'auto' ? (oTrack[options.axis] * oContent.ratio) : options.sizethumb )));

			if (oThumb[options.axis] < options.minThumbSize) {
                oThumb[options.axis] = options.minThumbSize;
                options.sizethumb = options.minThumbSize;
            }


			oScrollbar.ratio = options.sizethumb == 'auto' ? (oContent[options.axis] / oTrack[options.axis]) : (oContent[options.axis] - oViewport[options.axis]) / (oTrack[options.axis] - oThumb[options.axis]);
			iScroll = (sScroll == 'relative' && oContent.ratio <= 1) ? Math.min((oContent[options.axis] - oViewport[options.axis]), Math.max(0, iScroll)) : 0;
			iScroll = (sScroll == 'bottom' && oContent.ratio <= 1) ? (oContent[options.axis] - oViewport[options.axis]) : isNaN(parseInt(sScroll)) ? iScroll : parseInt(sScroll);

			
			
			scrollBarRatio = oScrollbar.ratio;

			setSize();
			
		};
		function setSize(){
			oThumb.obj.css(sDirection, iScroll / oScrollbar.ratio);
			oContent.obj.css(sDirection, -iScroll);
			iMouse['start'] = oThumb.obj.offset()[sDirection];
			var sCssSize = sSize.toLowerCase();
			oScrollbar.obj.css(sCssSize, oTrack[options.axis]);
			oTrack.obj.css(sCssSize, oTrack[options.axis]);
			oThumb.obj.css(sCssSize, oThumb[options.axis]);
		};
		function setEvents(){
			oThumb.obj.bind('mousedown', start);
			oThumb.obj[0].ontouchstart = function(oEvent){
				oEvent.preventDefault();
				oThumb.obj.unbind('mousedown');
				start(oEvent.touches[0]);
				return false;
			};
			oTrack.obj.bind('mouseup', drag);
			if(options.scroll && this.addEventListener){
				oWrapper[0].addEventListener('DOMMouseScroll', wheel, false);
				oWrapper[0].addEventListener('mousewheel', wheel, false );
			}
			else if(options.scroll){oWrapper[0].onmousewheel = wheel;}
		};
		function start(oEvent){
			iMouse.start = sAxis ? oEvent.pageX : oEvent.pageY;
			var oThumbDir = parseInt(oThumb.obj.css(sDirection));
			iPosition.start = oThumbDir == 'auto' ? 0 : oThumbDir;
			$(document).bind('mousemove', drag);
			document.ontouchmove = function(oEvent){
				$(document).unbind('mousemove');
				drag(oEvent.touches[0]);
			};
			$(document).bind('mouseup', end);
			oThumb.obj.bind('mouseup', end);
			oThumb.obj[0].ontouchend = document.ontouchend = function(oEvent){
				$(document).unbind('mouseup');
				oThumb.obj.unbind('mouseup');
				end(oEvent.touches[0]);
			};
			return false;
		};
		function wheel(oEvent){
			if(!(oContent.ratio >= 1)){
				//oEvent = $.event.fix(oEvent || window.event);
				oEvent =  window.event || oEvent;
				//oEvent = $.event.fix(oEvent) || window.event;
				var iDelta = oEvent.wheelDelta ? oEvent.wheelDelta/120 : -oEvent.detail/3;
				iScroll -= iDelta * options.wheel;
				iScroll = Math.min((oContent[options.axis] - oViewport[options.axis]), Math.max(0, iScroll));

				oThumb.obj.css(sDirection, iScroll / oScrollbar.ratio);
				oContent.obj.css(sDirection, -iScroll);	
				//oEvent.preventDefault();
				
				options.newfun()

				if (options.slideCallback != null) {
                    options.slideCallback();
                }
			};
		};
		function end(oEvent){
			$(document).unbind('mousemove', drag);
			$(document).unbind('mouseup', end);
			oThumb.obj.unbind('mouseup', end);
			document.ontouchmove = oThumb.obj[0].ontouchend = document.ontouchend = null;
			return false;
		};
		function drag(oEvent){
			if(!(oContent.ratio >= 1)){
				iPosition.now = Math.min((oTrack[options.axis] - oThumb[options.axis]), Math.max(0, (iPosition.start + ((sAxis ? oEvent.pageX : oEvent.pageY) - iMouse.start))));
				iScroll = iPosition.now * oScrollbar.ratio;
				oContent.obj.css(sDirection, -iScroll);
				oThumb.obj.css(sDirection, iPosition.now);

				options.newfun()

				if (options.slideCallback != null) {
                    options.slideCallback();
                }
			}
			return false;
		};

		return initialize();
	};
})(jQuery);
var GuideSlide={
	init:function(id,opt){
		var el=$("#"+id);
		//bigpic
		var bigpic=el.find(".bigpic");
		var right=el.find(".right");
		var desc=el.find(".desc td");
		var panel=el.find(".panel");
		//common
		function selectItem(index){
			var prev,cur;
			//right
			prev=right.find(".item-selected");
			prev.css("backgroundPosition","0 "+(-prev.attr("index")*30)+"px");
			prev.css("color","#00c66a");
			prev.removeClass("item-selected");
			cur=right.find(".item[index="+index+"]");
			cur.addClass("item-selected");
			cur.css("color","#fff");
			cur.css("backgroundPosition","0 "+(-cur.attr("index")*30-450)+"px");
			//bigpic
			bigpic.css("backgroundPosition",(-index*545)+"px 0");
			//desc
			desc.html(opt.descs[index]);
			//nav
			prev=panel.find(".item-selected");
			prev.css("backgroundPosition",(-63*Number(prev.attr("index")))+"px 0");
			prev.removeClass("item-selected");
			cur=panel.find(".item[index="+index+"]");
			cur.addClass("item-selected");
			cur.css("backgroundPosition",(-63*index)+"px -60px");
		}
		//nav
		var panelWidth=0;
		for(var i=0;i<opt.titles.length;i++){
			var item=$("<div class='item'></div>");
			item.attr("index",i);
			item.css("backgroundPosition",(-63*i)+"px 0");
			item.hover(function(){
				if($(this).hasClass("item-selected"))return;
				var index=Number($(this).attr("index"));
				$(this).css("backgroundPosition",(-63*index)+"px -60px");
			},function(){
				if($(this).hasClass("item-selected"))return;
				var index=Number($(this).attr("index"));
				$(this).css("backgroundPosition",(-63*index)+"px 0");
			});
			item.click(function(){
				if($(this).hasClass("item-selected"))return;
				selectItem($(this).attr("index"));
				var index=$(this).index();
			});
			panel.append(item);
			panelWidth+=item.outerWidth(true);
			panel.css("width",panelWidth);
		}
		//scroll
		var scroll=el.find(".scroll");
		scroll.hover(function(){
			$(this).addClass("scroll-hover");
		},function(){
			$(this).removeClass("scroll-hover");
		});
		var nav=el.find(".nav");
		var r=nav.innerWidth()/panel.outerWidth(true);
		var control=scroll.find(".control");
		control.css("width",scroll.innerWidth()*r);
		var maxX=scroll.innerWidth()*(1-r);
		var draging=false;
		var mouseX=0;
		var startX=0;
		var currentX=0;
		var startScroll=function(event){
			draging=true;
			mouseX=event.pageX;
			startX=currentX;
			$("body").mousemove(handleScroll);
			$("body").mouseup(endScroll);
			scroll.addClass("scrolling");
			return false;
		};
		var endScroll=function(){
			draging=false;
			$("body").unbind("mousemove mouseup");
			scroll.removeClass("scrolling");
		};
		var handleScroll=function(event){
			if(!draging)return;
			currentX=Math.max(0, Math.min(maxX, startX+event.pageX-mouseX));
			control.css("left",currentX);
			panel.css("left",-currentX/r);
			return false;
		};
		control.bind("selectstart",function(){return false;});
		control.mousedown(startScroll);
		//right
		for(var i=0;i<opt.titles.length;i++){
			var item=$("<div class='item'></div>");
			item.text(opt.titles[i]);
			item.css("backgroundPosition","0 "+(-i*30)+"px");
			item.attr("index",i);
			item.hover(function(){
				if($(this).hasClass("item-selected"))return;
				var index=$(this).attr("index");
				$(this).css("backgroundPosition","0 "+(-index*30-450)+"px");
				$(this).css("color","#fff");
			},function(){
				if($(this).hasClass("item-selected"))return;
				var index=$(this).attr("index");
				$(this).css("backgroundPosition","0 "+(-index*30)+"px");
				$(this).css("color","#00c66a");
			});
			item.click(function(){
				if($(this).hasClass("item-selected"))return;
				selectItem($(this).attr("index"));
				var index=$(this).index();
				var scrollWidth=((index+1)/right.find(".item").size())*(scroll.innerWidth()-scroll.find(".control").width());
				scroll.find(".control").css("left",scrollWidth+"px");
				if(index==0){scroll.find(".control").css("left",0);}
				if(index<=5){
					panel.css("left",0)
					}
				else{
					panel.css("left",-(index-5)*(63+20)+"px");}
			});
			right.append(item);
		}
		//init
		bigpic.css("backgroundImage", "url(" + opt.bigImage + ")");
		el.find(".nav .item").css("backgroundImage", "url(" + opt.smallImage + ")");
		selectItem(0);
	},
	_:null
};
; (function($) { $.fn.extend({ "totalWidth": function() { var tmpWidth = 0; $(this).each(function() { tmpWidth += $(this).outerWidth(true); }); return tmpWidth; }, "totalHeight": function() { var tmpHeight = 0; $(this).each(function() { tmpHeight += $(this).outerHeight(true); }); return tmpHeight; } }); $.fn.YlMarquee = function(o) { o = $.extend({ speed: 60, step: 3, vertical: false, width: 0, height: 0, visible: 0, textMode: false }, o || {}); var wrap = $(this), ul = $("ul", wrap), li = $("li", ul), v = o.visible, step = o.step, liNum = li.size(), visibleLi = li.slice(0, v); var whiteSpace, floatStyle, displayStyle, liSize, ie7HackCss, marginStyle, paddingStyle, wrapSize, visibleLiSize, i, scrollSize, cssPro; if (o.vertical) { whiteSpace = "normal"; floatStyle = "none"; displayStyle = "block"; wrapSize = o.height; } else { whiteSpace = "nowrap"; floatStyle = "left"; displayStyle = "inline"; wrapSize = o.width; ie7HackCss = o.textMode ? "*float:none;" : ""; } wrap.css({ position: "relative", overflow: "hidden" }); ul.css({ position: "relative", "white-space": whiteSpace, overflow: "hidden", "list-style-type": "none", margin: "0", padding: "0" }); li.css({ "white-space": whiteSpace, "display": displayStyle, overflow: "hidden" }); li.attr("style", li.attr("style") + ";" + "float:" + floatStyle + ";" + ie7HackCss); liSize = o.vertical ? li.totalHeight() : li.totalWidth(); o.vertical ? ul.height(liSize) : ul.width(liSize); visibleLiSize = o.vertical ? visibleLi.totalHeight() : visibleLi.totalWidth(); if (wrapSize == 0) { wrapSize = visibleLiSize; } o.vertical ? wrap.height(wrapSize) : wrap.width(wrapSize); if (wrapSize < liSize) { ul.append(li.clone()); var newLi = $("li", ul), newLiSize = o.vertical ? newLi.totalHeight() : newLi.totalWidth(); newLi.attr("style", newLi.attr("style") + ";" + "float:" + floatStyle + ";"); o.vertical ? ul.height(newLiSize) : ul.width(newLiSize); scrollSize = o.vertical ? newLi.slice(0, liNum).totalHeight() : newLi.slice(0, liNum).totalWidth(); var MyMar = setInterval(marquee, o.speed); ul.hover(function() { clearInterval(MyMar); }, function() { MyMar = setInterval(marquee, o.speed); }); } function marquee() { if (o.vertical) { if (wrap.scrollTop() >= scrollSize) { wrap.scrollTop(wrap.scrollTop() - scrollSize + step); } else { i = wrap.scrollTop(); i += step; wrap.scrollTop(i) } } else { if (wrap.scrollLeft() >= scrollSize) { wrap.scrollLeft(wrap.scrollLeft() - scrollSize + step); } else { i = wrap.scrollLeft(); i += step; wrap.scrollLeft(i); } } }; }; })(jQuery);
// JavaScript Document
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;
if (MessageBean == null) var MessageBean = {};
MessageBean._path = '/dwr';
var RESOURCE_PROMOTION = 1;
MessageBean.addMessageForm = function(p0, p1, p2, p3, callback) {
	dwr.engine._execute(MessageBean._path, 'MessageBean', 'addMessageForm', p0, p1, p2, p3, callback);
};
MessageBean.getMessagesList = function(p0, callback) {
	dwr.engine._execute(MessageBean._path, 'MessageBean', 'getMessagesList', RESOURCE_PROMOTION, callback);
	
};
/*
 *分享最后添加日期字串清空sina微博缓存的图片
 * */
var Minisite = {

	messageFormInitialize : function() {
		$("#messageContent").focus(function() {
			if ($(this).val() == "请您耽误片刻，填写留言内容" || $(this).val() =="留言成功，欢迎下次再来") {
				$(this).val("");
			}
		});
		$("#messageContent").blur(function() {
			if ($(this).val() == "")
				$(this).val("请您耽误片刻，填写留言内容");
		});
		$("#messageContent").val("请您耽误片刻，填写留言内容");
	},
	
	share_img_src : "http://sc2.163.com/style/images/sc2-logo.png",
	share_title : "#星际II官网页面有奖征集# 《星际争霸II》官网攻略版面投票啦！我喜欢这个页面，你也来看看吧",
	params:function(){
		var encode = encodeURIComponent;
		var img = this.share_img_src;
		return {link:encode(window.location.href + "?20120710"),
			title:encode(Minisite.share_title),
			pic:(img.length>0)?encode(img):'http://sc2.163.com/style/images/sc2-logo.png'};
	},
	
	init:function(){
		$(".pop a.close").click(function(){
			$("#pop_box,#pop,#pop_viewVote").hide();
		});		
		/*分享到sina微博*/
		$(".sina_btn").click(
				function(){
					var P = Minisite.params();
					var params = ['http://v.t.sina.com.cn/share/share.php?type=3&pic='+P.pic+'&title='+P.title+'&url='+P.link,'width=640,height=480,resizable=no'];
					window.open(params[0],'',params[1]);
					$("#pop_box,#pop,#pop_viewVote").hide();
				}
			);
		/*网友留言*/
		$("#message_list").YlMarquee({
			vertical: true,
			height:230,
			step:1
		});
				
		function truncStr(event) {
			var curLength = $("#messageContent").val().length + 1;
			if(curLength>96){
				document.getElementById("messageContent").value = document.getElementById("messageContent").value.substr(0,96);
				if(event.keyCode != 8){
					event.returnValue = false;
					return false;
				}
			}
		}
		$("#messageContent").keyup(truncStr);
		$("#messageContent").keydown(truncStr);
		$("#textCount").text("(最多100个字)");
         //投票		
		$("#nvt-single-btn77380").click(function(e){Minisite.setImg(77380);});
		$("#nvt-single-btn77381").click(function(e){Minisite.setImg(77381);});
		$("#nvt-single-btn77382").click(function(e){Minisite.setImg(77382);});
		this.showVote();
	},
	
	showPrompt:function (e) {
		if(!Minisite.isVoted) {
			Minisite.isVoted = true;
		}else {
			Minisite.popup_ptn();
			$("#pop p.title").html("您刚才已经投过票了。");
			$("#view_vote span").hide();
			$("#view_vote a").show().css("display","inline-block");
			$("#pop_box,#pop").show();
			Minisite.share_title = "#星际II官网页面有奖征集# 《星际争霸II》官网攻略版面投票啦！我喜欢这个页面，你也来看看吧";
			voteSingle.options.disabled = false;
		}
	},
	
	isVoted:false,
	popup_ptn : function() {
		this.setPosition($("#pop"));
        this.setVoteResult();
	},
	popup : function(option) {
		
		$(window).resize(function(){
			Minisite.popup_ptn();
		});
		$(window).scroll(function(){
			Minisite.popup_ptn();
		});
		Minisite.popup_ptn();
		$("#pop p.title").html("投票已成功，马上转发微博");
		voteSingle.options.disabled = false;
		Minisite.isVoted = true;
		Minisite.share_title = "#星际II官网页面有奖征集# 《星际争霸II》官网攻略版面投票啦！我喜欢这个页面，你也来看看吧";
		$("#view_vote span").hide();
		$("#view_vote a").show().css("display","inline-block");
		$("#pop_box,#pop").show();
	
	},

	issubmited:false,
	submitForm : function(clientIp) {// btn click
		if(Minisite.issubmited) {
			alert("您已经提交过留言");
			return false;
		}
		function checkSubmit() {
			var message = $("#messageContent").val();
			if (message == "" || message == "请您耽误片刻，填写留言内容") {
				alert("留言内容不能为空");
				return false;
			}
			return true;
		};
		
		if(!checkSubmit()) {
			return false;
		}
		Minisite.issubmited = true;
		var content = $("#messageContent").val();
		var ip = clientIp;
		MessageBean.addMessageForm(ip, content, "", RESOURCE_PROMOTION , function(r){
															if(r) {
																$("#messageContent").val("留言成功，欢迎下次再来");
																alert("留言已成功，等待审核");
															}else{
																alert("留言失败");
															}
								});
	},
	showVote:function(){
		 function positionVote(){
			Minisite.setPosition($("#pop_viewVote"));
			Minisite.setVoteResult();
		};
		$(window).resize(function(){
			positionVote();
		});
		$(window).scroll(function(){
			positionVote()
		});
		$("#view_vote a").click(function(){
			positionVote();
			Minisite.share_title = "#星际II官网页面有奖征集# 我正在参加《星际争霸II》官网攻略页面改版投票活动！我喜欢这个页面，你也来看看吧";
			$("#pop_box,#pop_viewVote").show();
			return false;				
		})
	},
	
	setImg : function(snum) {
		var pathArray = window.location.href.split( '/' );
		var host = pathArray[0] + "//"+ pathArray[2];
		if (snum == "77380") {
			this.share_img_src = "http://nos.netease.com/sc2/1/style/images/minisite/promotion/lightbox/page01.jpg";
		}else if(snum == "77381") {
			this.share_img_src = "http://nos.netease.com/sc2/1/style/images/minisite/promotion/lightbox/page02.jpg";
		}else {
			this.share_img_src = "http://nos.netease.com/sc2/1/style/images/minisite/promotion/lightbox/page03.jpg";
		}
	},
	setPosition:function(boxObj){//弹窗定位
		var t=boxObj,
		     selfWidth=t.width(),
		     selfHeigh=t.height(),
		     tScrollTop=$(document).scrollTop(),
		     left_position=($(window).width()-selfWidth)/2+"px",
		     topHeight=($(window).height()-selfHeigh)/2,
		     top_position=tScrollTop+topHeight+"px",
		     pop_bg_width=$(document.body).width()+"px",
		     pop_bg_height=$(document.body).height()+"px";
		$("#pop_box").css({"width":pop_bg_width,"height":pop_bg_height});//背景层
		t.css({"left":left_position,"top":top_position});
		t.find(".title").after($("#vote_result").show());
	},
	setVoteResult:function(){
		var c1Num=parseInt($("#nvt-single-count77380").text()),
			c2Num=parseInt($("#nvt-single-count77381").text()),
			c3Num=parseInt($("#nvt-single-count77382").text()),
			totalNum = c1Num+c2Num+c3Num,
			c1Width=(c1Num/totalNum).toFixed(2)*100,
			c2Width=(c2Num/totalNum).toFixed(2)*100,
			c3Width=(c3Num/totalNum).toFixed(2)*100;
	
		$("#c1").text(c1Num + "票");
		$("#c2").text(c2Num + "票");
		$("#c3").text(c3Num + "票"); 
		
		var maxNum=Math.max(c1Num,Math.max(c2Num,c3Num));
		for(var i = 1;i < 4;i++) {
			$("#s0" + i).removeClass("full");
			if($("#c" + i).text() == (maxNum + "票")) {
				$("#s0" + i).addClass("full");	
			}
		}
		$("#s01").css("width",c1Width+"%");
		$("#s02").css("width",c2Width+"%");
		$("#s03").css("width",c3Width+"%");
	},
	_ : null
};

// JavaScript Document
var Lore={
	
	init:function(){
		Flash.videoPlayer = 'http://nos.netease.com/sc2/1/style/gameinfo/content/global-video-player/themes/sc2/video-player.swf';
		$("#list-blind-button a").click(function(){
			if($('#list-blind-button').hasClass('viewall')){
				$('#short-stories-list li').filter('.old-stories').fadeIn('500');
				$('#list-blind-button').removeClass('viewall').addClass('viewless').find('span').text('查看部分');
			} else {				
				$('#short-stories-list li').filter('.old-stories').fadeOut('500');
				$('#list-blind-button').removeClass('viewless').addClass('viewall').find('span').text('查看所有');
			}			
		})	
		this.videoShow();
	},
	videoShow:function(){
		var videoShowBtn=$('.lore-video-banner-a');
		var videoShowRel=videoShowBtn.attr('rel');
		var videoShowUrl;
		
		videoShowBtn.click(function(){
			switch(videoShowRel)
			{
				case 'odin':
					videoShowUrl='http://flv.bn.netease.com/videolib3/1210/16/nARTB9272/nARTB9272.flv';
					break;
				case 'broken-wide':
					videoShowUrl='http://flv.bn.netease.com/videolib3/1210/16/kVBeq9097/kVBeq9097.flv';
					break;
				case 'mothership':
					videoShowUrl='http://flv.bn.netease.com/videolib3/1210/16/LYxSP9220/LYxSP9220.flv';
					break;
				case 'changeling':
					videoShowUrl='http://flv.bn.netease.com/videolib3/1210/16/iHMvC9159/iHMvC9159.flv';
					break;
			}
			
			Lightbox.loadVideo([{ 
				width:890, 
				height:668, 
				flvPath:videoShowUrl
				//path: '/sc2/en/media/videos/?view#/story-${story.name}', 
				//customRating:'http://content.battlenet.com.cn/global-video-player/ratings-png/blizzard-logo.png' 
			}])
		})
	},
	_:null
};


var Nav={
	
	init:function(){
		this.navInit();
		this.navOver();
		this.initSearch();
		this.openBlank();
		this.addHot();
	},
	getNavLi:function(){
		var nav=$("#topBox").find(".nav li");
		return nav;
	},
	getSubLi:function(){
		var subnav=$("#topBox").find(".subNav li.subNavLi");	
		return subnav;
	},
	navMove:function(index,move){
		var blueSpan=$("#topBox").find(".blueSpan");
		var nav=this.getNavLi();
		if(move){
			var moveL=nav.eq(index).attr("rel");
			blueSpan.stop().animate({"left":moveL},100);
		}else{
			var rel=nav.eq(index).attr("rel");
			blueSpan.css("left",rel);
		}
		blueSpan.css("display","block");			   		
	},
	navInit:function(){
		var nav=this.getNavLi();
		nav.each(function(k,v){
			switch(k){
				case 0:
					$(v).attr("rel","285px");					
					break;
				case 1:
					$(v).attr("rel","392px");
					break;
				case 2:
					$(v).attr("rel","511px");
					break;
				case 3:
					$(v).attr("rel","630px");
					break;
				case 4:
					$(v).attr("rel","748px");
					break;
				case 5:
					$(v).attr("rel","871px");
					break;				
				
			}					  
		})
	},
	navOver:function(){
		var nav=this.getNavLi();
		var subnav=this.getSubLi();
		var blueSpan=$("#topBox").find(".blueSpan");
		var self=this;
		var timer,navtimer;
		nav.hover(function(){
			var t=$(this);
			var index=nav.index(t);			
			clearTimeout(timer);
			self.overHandler(t,index,nav,subnav);
			$("#search_kw").blur();
			
		},function(){
		})
		subnav.hover(function(){
			var t=$(this);
			var index=subnav.index(t);
			clearTimeout(timer);
			self.overHandler(t,index,nav,subnav);
			
			
		},function(){
				
		})
		$(".nav").hover(function(){			
			navtimer=setTimeout(function(){subnav.parent().slideDown("slow");},100);//set time delay
			$(".arrowM").stop().animate({"top":"12px"},100).hide();
		},function(){
			clearTimeout(navtimer);
			timer=setTimeout(function(){subnav.parent().slideUp('slow');blueSpan.hide()},100);
		})
		$(".subNav").mouseleave(function(){
			timer=setTimeout(function(){subnav.parent().slideUp('slow');blueSpan.hide()},100);							   
		})
		
		subnav.find("li").hover(function(){
			var index=$(this).parent().find("li").index($(this));
			var subIndex=subnav.index($(this).parents(".subNavLi"));
			$(".arrowM").hide();
			$(this).parent().prev().show();
			self.arrowHandler(index,subIndex);							 										 
		})
	},
	overHandler:function(t,index,nav,subnav){
		var move=false;
		var blue=$("#topBox").find(".blueSpan");
		if(blue.is(":visible")){
			move=true;				
		}
		subnav.eq(index).addClass("active").siblings().removeClass("active");
		this.navMove(index,move);//当前index;是否要移动		
	},
	arrowHandler:function(index,subIndex){
		var arrow=this.getSubLi().eq(subIndex).find(".arrowM");
		var speed=100;
		switch(index){
			case 0:
				arrow.stop().animate({"top":"12px"},speed);					
				break;
			case 1:
				arrow.stop().animate({"top":"38px"},speed);
				break;
			case 2:
				arrow.stop().animate({"top":"62px"},speed);
				break;
			case 3:
				arrow.stop().animate({"top":"87px"},speed);
				break;
			case 4:
				arrow.stop().animate({"top":"113px"},speed);
				break;			
			
		}			
		
	},
	initSearch:function(){
		if(!$(".w-search"))return;
		$(".w-search .btnbg").hover(function(){
			$(this).toggleClass("hover",true);
		},function(){
			$(this).toggleClass("hover",false);
		});
		$(".w-search .btnbg").click(Search.submitForm);
		$("#topSearch #search_kw").focus(function(){
			if($(this).val()=="搜索《星际争霸II》")$(this).val("");
			$(this).css("color","#000");
			$("#topSearch .inputbg").toggleClass("focus",true);
			$("#topSearch .searchbtn").addClass("active");
		});
		$("#topSearch #search_kw").blur(function(){
			if($(this).val()=="")$(this).val("搜索《星际争霸II》");
			$("#topSearch .inputbg").toggleClass("focus",false);
			$(this).css("color","#6b8aa5");
			$("#topSearch .searchbtn").removeClass("active");
		});
		$("#topSearch #search_kw").val("搜索《星际争霸II》");
		$("#topSearch .searchbtn").hover(function(){
			$(this).addClass("active");
			},function(){
			$(this).removeClass("active");
				})
	},
	openBlank:function(){
		var locationHref=window.location.href;
		
		if(locationHref.indexOf("/home")>0){
			$(".subNavLi ul li a").attr("target","_blank");			
		}
	
	},
	addHot:function(){
		var firstNav=$("#topBox .subNav > li:eq(1)");
		var lastNav=$("#topBox .subNav > li:eq(4)");
		var secondNav=$("#topBox .subNav > li:eq(2)");
		var newNav=secondNav.find("li:eq(2) a").css({"background":'url("/style/images/home/hot.png?v=1") no-repeat scroll 86px -40px transparent',"padding-right":'10px'});
		var hotNav=firstNav.find("li:eq(1) a").css({"background":'url("/style/images/home/hot.png?v=1") no-repeat scroll 86px 4px transparent',"padding-right":'10px'});
		var hotNav1=lastNav.find("li:eq(0) a").css({"background":'url("/style/images/home/hot.png?v=1") no-repeat scroll 83px 4px transparent'});
		firstNav.find("li:eq(0) a").css({"background":'url("/style/images/home/hot.png?v=1") no-repeat scroll 86px -40px transparent',"padding-right":'10px'});
		secondNav.find("li:eq(4) a").css({"background":'url("/style/images/home/hot.png?v=1") no-repeat scroll 86px 4px transparent'});
		//var hotNav1=lastNav.find("li:eq(4) a").css({"background":'url("/style/images/home/hot.png?v=1") no-repeat scroll 99px -40px transparent'});
	}
}
// JavaScript Document
var Gameguide={
      init:function(){
		  this.float();//搜索结果浮层
		  this.radio();//模拟单选框
		  this.searchValue();//搜索
		  this.itemValue();//分类筛选
		  this.searchAfter();//搜索结果页面筛选条件回传
		  this.pageControl();//page control
	  },
	  float:function(){
		  if($("#selectCon ul").children().length==1){return;}
		  var offsetT=$("#selectCon ul li:eq(1)").offset().top;
		  //var offsetT=768;
		  var initT=parseInt($("#float").css("top"));
		   $("#selectCon ul li:not('.title')").hover(function(){
				 $(this).addClass("on");  
		   },function(){
			   	 $(this).removeClass("on"); 
		   })		  
		   $(".articleTitleLink").mouseover(function(e){
			   var t=$(this).parents("li");
			   var mouseY=parseInt(e.pageY);			   			   
			   var topV=mouseY-offsetT;
			   var getT=initT+topV+"px";
			   $("#float").stop(true,true).fadeIn().css("top",getT);
			   var index=t.index(); 
			   t.find("#articleTitle a").css("color","#00D683");
			   		  
		      //传值
		      var imgsrc=t.find("img").attr("src"),			      
			      articleContent=t.find("#articleContent").html();		      
				  var vs="";
				  if(t.find(".vsCon").size()!==0){
					  vs=t.find(".vsCon").html();
				  }else{
					  vs="";
				  };
		     var floatHtml="<img src='"+imgsrc+"' width='72' height='72'/><div class='info'>"+vs+articleContent+"</div>";
	         $("#float .con").html(floatHtml);
			  
          });
		  $(".articleTitleLink").mouseout(function(){
			  var t=$(this).parents("li");
			  t.find("#articleTitle a").css("color","#89B9F9");
			   $("#float").fadeOut();
			//   $("#float .con").html("");
			   
          });

	  },
	  	morePlayfloat:function(){//文章内页
		  //var offsetT=768;
		  if(!$("#moreArticles").length){return;}
		  var initT=parseInt($("#morePlayfloat").css("top"));
		   $("#morePlay ul li").live("mousemove",function(e){
			   var offsetT=$("#moreArticles").offset().top;
			   var mouseY=parseInt(e.pageY);			   			   
			   var topV=mouseY-offsetT;
			   var getT=initT+topV-20+"px";
			   $("#morePlayfloat").show().css("top",getT);
			   var index=$(this).index(); 
			   $(this).find("a").css("color","#00D683");
			   $(this).siblings().find("a").css("color","#57B6C5");
			   		  
		      //传值
		      var imgsrc=$(this).find("img").attr("src"),			      
			      articleContent=$(this).find(".articleContent").html();		      
				  var vs="";
				  if($(this).find(".vsCon").size()!==0){
					  vs=$(this).find(".vsCon").html();
				  }else{
					  vs="";
				  };
		     var floatHtml="<img src='"+imgsrc+"' width='72' height='72'/><div class='info'>"+vs+articleContent+"</div>";
	         $("#morePlayfloat .con").html(floatHtml);
			 $("#morePlayfloat").show();
			  
          });

		  $("#morePlay ul").live("mouseenter",function(e){
			  $("#morePlayfloat").stop(true,true).fadeIn();
		  })
		  $("#morePlay ul").live("mouseleave",function(){
			  $(this).find("a").css("color","#57B6C5");
			  $("#morePlayfloat").fadeOut();			  			  
		  })	
		  $("#morePlayfloat").mouseover(function(){$("#morePlayfloat").hide();})	  
	  

	  },
	  radio:function(){
		$(".select dl").each(function(){
			$(this).children().last().css("margin","0");
		})
		$(".radio").click(function(){
			$(this).parents("dl").find(".radio span").removeClass("checked").next().removeClass("green").end().end().end().find("span").addClass("checked").next().addClass("green");
			})
	 },
	 setSubmitV:function(action){
			 var race=$("#race").find(".checked").attr("rel"),
			     level=$("#level").find(".checked").attr("rel"),
			     type=$("#type").find(".checked").attr("rel"),
			     feature=$("#feature").find(".checked").attr("rel"),
				 source=$("#source").find(".checked").attr("rel");
			var param="race="+race+"&level="+level+"&type="+type+"&feature="+feature+"&source="+source;

			$("#searchCondition").val(param);
			action==undefined?"":$("#searchFrom").attr("action",action);
			$("#searchFrom").submit();		 
	 },
	 searchValue:function(){
		 $("#searchBtn").click(function(){
			 Gameguide.setSubmitV();
		 })
		 //重置搜索
		 $("#resetBtn").click(function(){
			 $(".radio span").removeClass("checked").next().removeClass("green");
			 $(".radio span[rel=all]").addClass("checked").next().addClass("green");
			 })
	},
	itemValue:function(){
		$(".item a").click(function(){
			var param=$(this).attr("rel");
			$("#searchCondition").val(param); 
			$("#searchFrom").submit();
			})
	},
	moreItemValue:function(){
		$(".morePlay a").click(function(){
			var words=$(this).attr("rel");
			$.post(
					"/gameguide/more/",
					{"words": words},
					function(data){
						if(data.articles){
							var moreArticles="";
							for(var i=0;i<data.articles.length;i++){										
								var aid=eval('('+data.articles[i]+')').id;
								var title="";
								if(eval('('+data.articles[i]+')').title.length>25){
									title=eval('('+data.articles[i]+')').title.substring(0,25)+'...';	
								}else{
									title=eval('('+data.articles[i]+')').title;
								}								
								var date=eval('('+data.articles[i]+')').publishTime;
								var newDate=new Date(date);
								var newMonth=newDate.getMonth();
								if( newMonth < 9){
									newMonth="0"+(newMonth+1);
								}else{
									newMonth=newMonth+1;
								}
								var newDay=newDate.getDate();
								if(newDay < 10){
									newDay="0"+newDay;
								}
								var publishTime=newDate.getFullYear()+"-"+newMonth+"-"+ newDay;
								var description=eval('('+data.articles[i]+')').contentMap.description.substring(0,100)+'...';
								var thumbnailUrl=eval('('+data.articles[i]+')').contentMap.thumbnailUrl!='' ? (eval('('+data.articles[i]+')').contentMap.thumbnailUrl):'/style/images/gameguide/thumbnail-photo.jpg';
								var keyWords=eval('('+data.keyWordsMap[eval('('+data.articles[i]+')').id]+')');
								moreArticles+='<li><a href="/gameguide/'+aid+'" target="_blank">'+title+'</a><span class="date">'+publishTime+'</span><img size="36px" width="36px" src="'+thumbnailUrl+'"/><div style="display:none" class="articleContent">'+description+'</div>';
								if(keyWords.race!=null&&keyWords.opponents!=null){
									var opponent=keyWords.opponents.split("|");
									moreArticles+='<div class="f-dn vsCon"><div class="title f-cb"><span>适用:</span><p class="vs f-fl"><span class="'+keyWords.race+'"></span><span class="vsIcon"></span>';
									for(var j=0;j<opponent.length;j++){
										moreArticles+='<span class="'+opponent[j]+'"></span>';
									}
									moreArticles+='</p></div></div>'
								}
								moreArticles+='</li>';	
							}
							$("#moreArticles").html(moreArticles);
						}
					}	    					
				)
		})
	},
	searchAfter:function(){
		var raceChecked=$("#raceChecked").val()==""?"all":$("#raceChecked").val(),
		    levelChecked=$("#levelChecked").val()==""?"all":$("#levelChecked").val(),
			typeChecked=$("#typeChecked").val()==""?"all":$("#typeChecked").val(),
			featureChecked=$("#featureChecked").val()==""?"all":$("#featureChecked").val(),
			sourceChecked=$("#sourceChecked").val()==""?"all":$("#sourceChecked").val(); 
	    $("#race").find("span").removeClass("checked").end().find("span[rel="+raceChecked+"]").addClass("checked");
		$("#level").find("span").removeClass("checked").end().find("span[rel="+levelChecked+"]").addClass("checked");
		$("#type").find("span").removeClass("checked").end().find("span[rel="+typeChecked+"]").addClass("checked");
		$("#feature").find("span").removeClass("checked").end().find("span[rel="+featureChecked+"]").addClass("checked");
		$("#source").find("span").removeClass("checked").end().find("span[rel="+sourceChecked+"]").addClass("checked");
		$(".select dl").each(function(){
			$(this).find(".radio strong").removeClass("green").end().find(".checked").next().addClass("green");
		})
	},
	returnTop:function(){
		setPostion();
		$(window).scroll(function(){
			setPostion();
			});
		function setPostion(){
		    tScrollTop=$(document).scrollTop();
			$("#returnTop").css("top",tScrollTop+278+"px") 
		}
	},
	unitShow:function(){
		var ajaxP;
	    $(".unitLink").live("mouseover",function(e){
			$("#unitFloat").hide();
			var mouseY=parseInt(e.pageY)+"px",
			    mouseX=parseInt(e.pageX)+15+"px";	
			ajaxP=$.post(
				"/gameguide/unit/"+$(this).attr("rel"),
				function(data){
					$("#unitFloat").show().css({"left":mouseX,"top":mouseY});
			//		$("#unitFloat .con").find(".loadWait").hide().siblings().show();
					$("#intro").html(data.unit.description.substring(0,20)+'...');
					$("#unitTitle").html(data.unit.title);
					$("#unitImg").attr("class",'unitImg '+data.unit.name);
					$("#kjj").html(data.unit.statics.ps.hotkey);
					$("#cb1").html('<img src="/style/images/unit/icon-mineral.gif"/>'+data.unit.statics.ps.mineral);
					$("#cb2").html('<img src="/style/images/unit/icon-vespene-'+data.raceTypeName+'.gif"/>'+data.unit.statics.ps.vespene);
					$("#zybg").html('<img src="/style/images/unit/icon-supply-'+data.raceTypeName+'.gif"/>'+data.unit.statics.ps.supply);
					$("#scsj").html('<img src="/style/images/unit/icon-buildtime-'+data.raceTypeName+'.gif"/>'+data.unit.statics.ps.buildTime);
					
				}	    					
			)	
		})
		$(".unitLink").live("mouseout",function(e){			
			$("#unitFloat").hide();
			ajaxP.abort();
		})	
	},
	loadTactics:function(){
		var mighty=$("#qsdkzs").attr("rel");
		var weak=$("#rsdkzs").attr("rel");
		$.post(
				"/gameguide/tactics/",
				{"mighty": mighty,"weak":weak},
				function(data){
					if(data.mightyArticles){
						var mightyArticle="";
						for(var i=0;i<data.mightyArticles.length;i++){							
							var aid=eval('('+data.mightyArticles[i]+')').id;
							var title=eval('('+data.mightyArticles[i]+')').title;
							var date=eval('('+data.mightyArticles[i]+')').publishTime;
							var newDate=new Date(date);
							var publishTime=(newDate.getMonth()+1)+"-"+ newDate.getDate();
							var description=eval('('+data.mightyArticles[i]+')').contentMap.description.substring(0,20)+'...';
							mightyArticle+='<dd><p class="f-cb"><a target="_blank" href="/gameguide/'+aid+'" title="'+title+'">'+title+'</a><span>'+publishTime+'</span></p>'+description+'</dd>';
						}
						$("#strong").html(mightyArticle);
					}else{
						$("#strong").html('<dd class="special">暂无战术</dd>');
					}
					if(data.weakArticles){
						var weakArticle="";
						for(var i=0;i<data.weakArticles.length;i++){
							var aid=eval('('+data.weakArticles[i]+')').id;
							var title=eval('('+data.weakArticles[i]+')').title;
							var date=eval('('+data.weakArticles[i]+')').publishTime;
							var newDate=new Date(date);
							var publishTime=(newDate.getMonth()+1)+"-"+ newDate.getDate();
							var description=eval('('+data.weakArticles[i]+')').contentMap.description.substring(0,20)+'...';
							weakArticle+='<dd><p class="f-cb"><a target="_blank" href="/gameguide/'+aid+'" title="'+title+'">'+title+'</a><span>'+publishTime+'</span></p>'+description+'</dd>';
						}
						$("#weak").html(weakArticle);
					}else{
						$("#weak").html('<dd class="special">暂无战术</dd>');
					}
				}	    					
			)
	},
	pageControl:function(){
		var pageWrap=$("#articles-paging"),
			pageSubmit=pageWrap.children("a"),
			searchForm=$("#searchFrom"),
			action=searchForm.attr("action");
		pageSubmit.click(function(){
			var t=$(this);
			if(t.attr("class")=="submit"){
				action="/gameguide/?p="+$(".page-input").val();
			}else{
				action=t.attr("href");					
			}
			Gameguide.setSubmitV(action);
			return false;	
				
		})			
	},
	_:null
};


// JavaScript 
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;
if (MessageBean == null) var MessageBean = {};
MessageBean._path = '/dwr';
var RESOURCE_TUESDAY = 2;
MessageBean.addMessageForm = function(p0, p1, p2, p3, callback) {
	dwr.engine._execute(MessageBean._path, 'MessageBean', 'addMessageForm', p0, p1, p2, p3, callback);
};
MessageBean.getMessagesList = function(p0, callback) {
	dwr.engine._execute(MessageBean._path, 'MessageBean', 'getMessagesList', RESOURCE_TUESDAY, callback);
	
};
 

var SummerActivities = {	
	 init:function(){
		 $("#nav li.hasContent a").click(function(){
			 //$(this).text()=="活动首页"?$(".videoHis").show():$(".videoHis").hide();
			 var index=$(this).parents("li").index();
			 if(index==0){
				
				 $(".videoHis").show();
				 $(".prize").show();
				 $(".notice").show();
				 $("#videoSlider").show();
				 $(".macth").show();
			 }else{
				 $(".videoHis").hide();
				 $(".prize").hide();
				 $(".notice").hide();
				 $("#videoSlider").hide();
				 $(".macth").hide();
			 }
			 $("#nav li").removeClass("on").eq(index).addClass("on");
			 $("#navSubContent div.subContent").hide().eq(index).show();			 
		 })	
		 
		 $("#nav li.videoList a").click(function(){
			 $("#nav li").removeClass("on").eq(0).addClass("on");
			 $("#navSubContent div.subContent").hide().eq(0).show();
			 $(".videoHis").show();
			 $(".prize").show();
			 $(".notice").show();
			 $("#videoSlider").show();
			 $(".macth").show();
		 })
		 
		 this.setSharePosition();
		 $(window).resize(function(){
			SummerActivities.setSharePosition();
		 });
		 $(window).scroll(function(){
			SummerActivities.shareScrollSetPositon();
		 });	
		 this.tab();
		 this.liveTab();
	    // this.flashPlay("http://flv.bn.netease.com/videolib3/1208/02/aKlHw5628/aKlHw5628.flv");
		 this.messageFormInitialize();
		 this.truncStr();
		 this.showBlz();
		 //this.newsSlide($("#newsSlide li"),$("#prev"),$("#next"),5);
		
		 $(window).resize(function(){
              SummerActivities.showBlz();
         });
		 
		 $("#msg_list").YlMarquee({
			vertical: true,
			height:288,
			step:1
		});
		$("#msg_btn").click(function(){
			$("#new_msg").show();
			})

		
	 },
	 shareScrollSetPositon:function(){
		 tScrollTop=$(document).scrollTop();
		 if(tScrollTop<=483){
		    $("#share").css("top",483+"px")
		 }else if(tScrollTop>=2180 && $("#commentsIframe").is(":visible")){
			 $("#share").css("top",2180+"px")
		 }else{
			 $("#share").css("top",tScrollTop+20+"px") 
		 }
		 
		return  $("#share").css("top");
	 },
	 setSharePosition:function(){
		  var windowWidth=$(window).width();	
		  var shareTop=this.shareScrollSetPositon();

		   if(windowWidth>1324){
			   var leftV=(windowWidth-1000)/2-162+"px";
			   $("#share").css({"left":(windowWidth-1000)/2-162+"px",right:"none"});	
			   $("#share").attr("style",'left:'+leftV+';top:'+shareTop);
			} 
			else{
               $("#share").css({left:"none",right:0});	
			   $("#share").attr("style",'right:0;top:'+shareTop);
			} 
	},
	/*flashPlay:function(data){
		Flash.videoPlayer = 'http://res.nie.netease.com/comm/js/nie/util/player.swf';
		Flash.videoBase = 'http://content.battlenet.com.cn/sc2/media/videos';
		Flash.ratingImage = 'http://content.battlenet.com.cn/global-video-player/ratings/sc2/zh-cn.jpg';
		Flash.expressInstall= 'http://content.battlenet.com.cn/global-video-player/expressInstall.swf';				
		Flash.defaultVideoParams.wmode = "opaque";	
		 var flvPathObj=this.flashVar(data);
		 swfobject.embedSWF(Flash.videoPlayer,'videoCon','491px', '397px',
			Flash.requiredVersion, Flash.expressInstall,flvPathObj, Flash.defaultVideoParams);			
	},
	flashVar:function(data){
		 var flvPathObj={
			     width : 491,
				height : 397,
			  flvWidth : 491,
		     flvHeight : 397,
			  movieUrl : data,
			  autoPlay : true			 
		 }
		 return flvPathObj;		
	},*/
	 tab:function(){
		 $("#videoReview ul.tab li").click(function(){
			 var index=$(this).index();
			 $(this).addClass("active").siblings().removeClass("active");
			 $("#videoReviewCon .videoCon").removeClass("first").eq(index).addClass("first");	
			/* switch(index){
				case 0:
				  SummerActivities.flashPlay("http://flv.bn.netease.com/videolib3/1208/02/aKlHw5628/aKlHw5628.flv");
				  break;
				case 1:
				  SummerActivities.flashPlay("http://flv.bn.netease.com/videolib3/1208/02/WlLYA5790/WlLYA5790.flv");
				  break;  
				case 2:
				  SummerActivities.flashPlay("http://flv.bn.netease.com/videolib3/1208/02/cFBTo6508/cFBTo6508.flv");
				  break; 
				case 3:
				  SummerActivities.flashPlay("http://flv.bn.netease.com/videolib3/1208/02/foVPx7445/foVPx7445.flv");
				  break; 
		     }		 */
		})
	  },
	 messageFormInitialize : function() {
		$("#messageContent").focus(function() {
			if ($(this).val() == "请您耽误片刻，填写留言内容" || $(this).val() =="留言成功，欢迎下次再来") {
				$(this).val("");
			}
		});
		$("#messageContent").blur(function() {
			if ($(this).val() == "")
				$(this).val("请您耽误片刻，填写留言内容");
		});
		$("#messageContent").val("请您耽误片刻，填写留言内容");
	},
	 truncStr:function(){
	     function trunc(event) {
			var curLength = $("#messageContent").val().length;
		    $("#textCount").text("(您已输入"+curLength+"字,最多输入100个字)");
			if(curLength>100){
				document.getElementById("messageContent").value = document.getElementById("messageContent").value.substr(0,100);
				if(event.keyCode != 8){
					event.returnValue = false;
					return false;
				}
			}
	      }
	  $("#messageContent").keyup(trunc);
	  $("#messageContent").keydown(trunc);

	 },
	 issubmited:false,
	 submitForm : function(clientIp) {// btn click
		if(SummerActivities.issubmited) {
			alert("您已经提交过留言");
			return false;
		}
		function checkSubmit() {
			var message = $("#messageContent").val();
			if (message == "" || message == "请您耽误片刻，填写留言内容") {
				alert("留言内容不能为空");
				return false;
			 }
			return true;
		};
		
		if(!checkSubmit()) {
			return false;
		}
		SummerActivities.issubmited = true;
		var content = $("#messageContent").val();
		var ip = clientIp;
		MessageBean.addMessageForm(ip, content, "", RESOURCE_TUESDAY , function(r){
															if(r) {
																$("#messageContent").val("留言成功，欢迎下次再来");
																alert("留言已成功，等待审核");
															}else{
																alert("留言失败");
															}
		});
	},
	showBlz:function(){
		        var windowWith=$(window).width();
				if(windowWith<=1440){
					 $(".blzLeft,.blzRight").hide();
				 }
				else{
					 $(".blzLeft,.blzRight").show();
				 }
			},
	newsSlide:function(slideLi,prev,next,showL){
		var index=0,
		    len=slideLi.size(),
			slideInnerW=slideLi.innerWidth(),
			slideMarginW=slideLi.css("margin-right").substring(0,slideLi.css("margin-right").length-2),
			slideWidth=slideInnerW+parseInt(slideMarginW);
			var slideLiP=slideLi.parent();
			slideLeftP=slideLiP.css("left").substring(0,slideLiP.css("left").length-2);
			slideLiP.width(slideWidth*len);

		prev.click(function(){
			var left=parseInt(slideLiP.css("left"));
			var leftB=parseInt(slideLiP.css("width"))-slideWidth*showL;
			if(left==0){
				return false;	
			}else{
				slideLiP.css("left",parseInt(slideWidth)+parseInt(left)+"px")
			}

			})
		next.click(function(){
			var left=parseInt(slideLiP.css("left"));
			var leftB=parseInt(slideLiP.css("width"))-slideWidth*showL;
			if(Math.abs(left)==leftB){
				return false;	
			}else{
				slideLiP.css("left",parseInt(-slideWidth)+parseInt(left)+"px")
			}			
		})
		},
	liveTab:function(){
		var liveVideo=$('.live_video');
		var liveBtn=liveVideo.find('li');
		var liveCon=liveVideo.find('.live_video_con');
		liveBtn.each(function(i){
			$(this).click(function(){
				liveBtn.removeClass("on");
				$(this).addClass("on");
				if(i==0){
					//liveP.css('background-position','0 -53px');	
					liveCon.html('<embed autostart="false" allowfullscreen="true" allowscriptaccess="always" height="373" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" src="http://yy.com/s/90163/1198442496/mini.swf" type="application/x-shockwave-flash" width="457"></embed>')
				}else if(i==1){
					//liveP.css('background-position','0 0');
					liveCon.html('<embed autostart="false" allowfullscreen="true" allowscriptaccess="always" height="373" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" src="http://cgi.v.cc.163.com/redirect/swf/12383200" type="application/x-shockwave-flash" width="457"></embed>')
				}else if(i==2){
					liveCon.html("<div id='feng-yun-player-wrap'><a href='http://www.fengyunzhibo.com/tv/163sc2.htm' id='channel-info'>风云直播 网易暴雪官方频道 </a></div><script type='text/javascript'>window.fengyunconf={width:457,height:373,tv: '42912_1346232534714'};</script><script type='text/javascript' src='http://static.ws.kukuplay.com/support/fengyunplayerloader.js'></script>")
				}else if(i==3){
					liveCon.html('<embed autostart="false" allowfullscreen="true" allowscriptaccess="always" height="373" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" src="http://bogou.tv/swfs/BogouExternalPlayer.swf" type="application/x-shockwave-flash" width="457" flashvars="u=1905"></embed>')
				}	
			})
		})
	},
	dataInit:function(){
		juicer.set({
		    'tag::interpolateOpen': '{{',
		    'tag::interpolateClose': '}}',
		    'tag::noneencodeOpen': '{{{',
		    'tag::noneencodeClose': '}}}'			    
		});	
		
		jQuery.ajax({
			 type: 'GET',
			 async:false,
			 url: 'http://nos.netease.com/sc2/2/json/tuesday.json' ,
			 jsonp:"callback",
			 jsonpCallback:"tuesdayJson",
			 dataType: 'jsonp', 
			 success: function(json) { 
				 //首页公告
				var pubTpl=juicer($("#publicTxt").html());
				$("#publicTxt").html(pubTpl.render(json)).show();

				//首页内容更新
				var tpl=juicer($("#moudel_detail").html());
				$("#moudel_detail").html(tpl.render(json)).show();
				

				//视频回顾更新
				var newsPicTpl=juicer($("#newsPic").html());
				$("#newsPic").html(newsPicTpl.render(json)).show();
				
				//名人堂更新
				var headTpl=juicer($("#head").html());
				$("#head").html(headTpl.render(json)).show();
				
				//活动介绍更新
				var introTpl=juicer($("#intro").html());
				$("#intro").html(json.intro.join(''));
				SummerActivities.newsSlide($("#videoSlider .newsSlide li"),$("#videoSlider .prev"),$("#videoSlider .next"),4);
			 }
		
		
		})
		
	},
		_ : null
};

// JavaScript 
var ChinaJoy = {
      init:function(){		
	  			this.isVoted = false;	  
	            this.initFlash();
				this.unitPicSlide();
				this.gamePicSlide();	
				this.flashPicSlide();
				this.vote();
				$("#video_show").click(function(){
				  Lightbox.loadVideo([{
					  width: 704,
					  height: 396,
					  flvPath : "http://flv.bn.netease.com/videolib3/1305/30/CeMoJ2251/SD/CeMoJ2251.flv"
				  }]);					
				});
       /*分享到sina微博*/
	  $(".sina_btn").click(
				function(){
					var P = ChinaJoy.params();
					var params = ['http://v.t.sina.com.cn/share/share.php?type=3&pic='+P.pic+'&title='+P.title+'&url='+P.link,'width=640,height=480,resizable=no'];
					window.open(params[0],'',params[1]);
					$("#pop_box,#pop,#pop_viewVote").hide();
				}
			);
 	  },
	  share_img_src : "http://blzimg.126.net/2in0ZTGD3oOOIUZ1zOnmig==/20890720928097",
	  share_title : "#chinajoy虫群之心# 我正在参加《星际争霸II：虫群之心》的'新单位评选活动'！还有Razer星际争霸II专用外设，珍贵的《虫群之心》测试账号送出，你也赶紧来参加吧！",
	  params:function(){
		var encode = encodeURIComponent;
		var img = this.share_img_src;
		return {link:encode(window.location.href + "?20120730"),
			title:encode(ChinaJoy.share_title),
			pic:(img.length>0)?encode(img):'http://blzimg.126.net/2in0ZTGD3oOOIUZ1zOnmig==/20890720928097'};
	},
	
	  initFlash:function(){
	            Flash.videoPlayer = 'http://nos.netease.com/sc2/1/style/gameinfo/content/global-video-player/themes/sc2/video-player.swf';
				//Flash.videoBase = 'http://content.battlenet.com.cn/sc2/media/videos';
				//Flash.ratingImage = 'http://content.battlenet.com.cn/global-video-player/ratings/sc2/zh-cn.jpg';
				Flash.expressInstall= 'http://content.battlenet.com.cn/global-video-player/expressInstall.swf';				
				Flash.defaultVideoParams.wmode = "opaque";
	  },	
	  gamePicSlide:function(){
		   var slideWidth=$("#game_pic_show ul li").width()+30+5;
		   var slideWidthTol=slideWidth*$("#game_pic_show ul li").size();
		   var ulLeftPosition=0;
		   function picSlideWidth(){
			   ulLeftPosition+=slideWidth*5;			  
			   if(ulLeftPosition==slideWidthTol){
				   ulLeftPosition=0;
			   }
			    $("#game_pic_show ul").css("left",-ulLeftPosition+"px");
		   }		  
		   var interval;
		   var auto=function(){interval=setInterval(picSlideWidth,"3000");}
		   auto();
		   $("#game_pic_show ul li").mouseover(function(){
			   clearInterval(interval);
	       })	
		   $("#game_pic_show ul li").mouseout(function(){
		  	   auto();
			   }) 	
	  },
	  
	  unitPicSlide:function(){
		  	  var index=0;
			  var pic_lengh=$("#pic_show >li").size()-1;
			  var pic_show=$("#pic_show>li:lt("+pic_lengh+")");
		      $(".step_03 .prev").click(function(){
			    if(index==0){
				    index=pic_lengh;
				 }
				  index--;
				  $(pic_show).hide().eq(index).show().stop(true,true);	  
			      $("#intro_txt li").hide().eq(index).show().stop(true,true);	
				  $("#num ul li").removeClass("active").eq(index).addClass("active").stop(true,true);  
			  });
			  
			  $(".step_03 .next").click(function(){
			    if(index==pic_lengh-1){
				    index=-1;
				 } 
				  index++; 	
				  $(pic_show).hide().eq(index).show().stop(true,true);	
			      $("#intro_txt li").hide().eq(index).show().stop(true,true);
				  $("#num ul li").removeClass("active").eq(index).addClass("active").stop(true,true); 
				   
				  	  
			  })
			  $("#num ul li").click(function(){
				  var index=$(this).index();
				  $("#intro_txt li").hide().eq(index).show().stop(true,true);
				  $("#pic_show>li:lt("+pic_lengh+")").hide().eq(index).show().stop(true,true);
				  $("#num ul li").removeClass("active").eq(index).addClass("active").stop(true,true); 
				  })
		  
	  },
	  flashPicSlide:function(){
		    var index=0;
			var bigic_len=$("#flash_pic_show li").size();
		    function slideAuto(){				
				if(index==bigic_len-1){
					index=-1;
					}
					index++;
				$("#flash_pic_show li").hide().eq(index).show().stop(true,true);			
				}
		    setInterval(slideAuto,"3000");
		
			$(".welcome .prev").click(function(){			
				if(index==0){
					index=bigic_len;						
				}
				index--;
				$("#flash_pic_show li").hide().eq(index).show().stop(true,true);			
			})
		   $(".welcome .next").click(function(){
			    if(index==bigic_len-1){
					index=-1;
					}
					index++;
					$("#flash_pic_show li").hide().eq(index).show().stop(true,true);
					
					 					  
			})
		  
		  },
      vote:function(){
		  if(expired('2012-07-31')) {
					   $("#btn").text("投票已结束!")
	             }
		  $.getJSON(
		         "http://vote.game.163.com/vote2/jsonpVote.do?callback=?",
		         {"vote16850": 81707, "voteId": 16850,"t": new Date().getTime()},		  
	                 function(data) {
	                     if(data.type == 5) {
							  $("#btn").text("您已投票");
							  $("#btn").css("cursor","auto");
							  $(".vote li input").attr("disabled","disabled");
							  $("#view_result").show();
							  popResult();
							  $("#btn").unbind("click");
	    	              }
	                }
	             );
				 				 
		  
				 				 
		  $("#btn").click(function() {
	            var itemId = $("input[name='vote16850']:checked").val();
	            if (!itemId) {
		              alert("请选择项!");
		              return;
	            };
				
	             $.getJSON(
		         "http://vote.game.163.com/vote2/jsonpVote.do?callback=?",
		         {"vote16850": itemId, "voteId": 16850, "t": new Date().getTime()},		  
	                 function(data) {
	                     if(data.type == 9) {
                               $("#btn").text("您已投票").unbind("click");
							    popResult();
				                showVote();
							    $(".vote li input").attr("disabled","disabled");
							    $("#view_result").show();
	    	              } else if(data.type == 5) {
							    $("#btn").text("您已投票").unbind("click");
	    	     	            popResult();
				                showVote();
							    $(".vote li input").attr("disabled","disabled");
							    $("#view_result").show();
	    	              } 
	                }
	             );
         });	

         function popResult() {
	            $.getJSON(
		        "http://vote.news.163.com/vote2/jsonpItem.do?callback=?",
		        {"vid": "v16850", "t": new Date().getTime()},
		            function(vote_data_array) {
			           var vote_data = vote_data_array[0];
		               var total = 0;
			           $.each(vote_data.options, function(i, option) {
				             $("#nvt-bar-count" + option.oid).text(option.count);
				                total += option.count;
			           });

			          $.each(vote_data.options, function(i, option) {
				             var rate = Math.round(option.count / total * 1000) / 10;
			        	     $("#nvt-bar-rate" + option.oid).css("width",rate + "%");
			          });
		           }

	            );	    		
           }

          function expired(endDate) {
	          if (endDate != ""){
		          endDate = endDate.replace(/-/g, "/"),
	              nowTime = new Date(),
	              endTime = new Date(Date.parse(endDate))
		               if ( nowTime < endTime) {
		                      return false;
		               }
	          }
	          return true;
         }
		  			 	  	
			  $(window).resize(function(){
			      setPosition();
		      });
		      $(window).scroll(function(){
			      setPosition()
		      });
			  $("#view_result").click(function(){
				  popResult();
				  showVote();
			  });
			  $("#pop .close").click(function(){
				  closeVote();  
				  });
              function showVote(){
				   $("#pop,#pop_box").show();
				  }
			  function closeVote(){
				  $("#pop,#pop_box").hide();
				  }
		      function setPosition(){//弹窗定位
		         var t=$("#pop"),
		         selfWidth=t.width(),
		         selfHeigh=t.height(),
		         tScrollTop=$(document).scrollTop(),
		         left_position=($(window).width()-selfWidth)/2+"px",
		         topHeight=($(window).height()-selfHeigh)/2,
		         top_position=tScrollTop+topHeight+"px",
		         pop_bg_width=$(document.body).width()+"px",
		         pop_bg_height=$(document.body).height()+"px";
		         $("#pop_box").css({"width":pop_bg_width,"height":pop_bg_height});//背景层
		         t.css({"left":left_position,"top":top_position});
		         t.find(".title").after($("#vote_result").show());
			};	  
		},
	
	_ : null
};

// JavaScript 
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;
if (MessageBean == null) var MessageBean = {};
MessageBean._path = '/dwr';
var localhost=window.location.pathname;
var urlStr=localhost.split("/");
var urlValue=urlStr[urlStr.length-1],numId;
if(urlValue=="wcs-asia"){
	numId=100;
}else{
	numId=parseInt(urlValue);
}
var RESOURCE_36stratagems=360+numId;
MessageBean.addMessageForm = function(p0, p1, p2, p3, callback) {
	dwr.engine._execute(MessageBean._path, 'MessageBean', 'addMessageForm', p0, p1, p2, p3, callback);
};
MessageBean.getMessagesList = function(p0, callback) {
	dwr.engine._execute(MessageBean._path, 'MessageBean', 'getMessagesList', RESOURCE_36stratagems, callback);

	
};
var Stratagems_1 = {	
	 init:function(flashUrl,flashId){
	     $("#more_case_con .tab li").click(function(){
			 var index=$(this).index();
			 $(this).addClass("on").siblings().removeClass("on");
			 $("#more_case_con .tab_con ul li").hide().eq(index).show();			 
			 });
	     this.messageFormInitialize();
	     this.initFlash();

		 if(typeof(flashId)== 'undefined'){
			 flashId='video_play';
		 }
		 swfobject.embedSWF(Flash.videoPlayer,flashId,'492px', '397px',
					Flash.requiredVersion, Flash.expressInstall,{
						width : 492,
						height : 397,
						videoWidth : 492,
						videoHeight : 397,
						movieUrl :flashUrl,
						autoPlay : false
					}, Flash.defaultVideoParams);
	 },
	 setYml:function(){
		 $("#msg_list_con").YlMarquee({
			vertical: true,
			height:275,
			step:1
		});		 
	},	 
	 initFlash:function(){
	    Flash.videoPlayer = 'http://res.nie.netease.com/comm/js/nie/util/player.swf';
		Flash.videoBase = 'http://content.battlenet.com.cn/sc2/media/videos';
		Flash.ratingImage = 'http://content.battlenet.com.cn/global-video-player/ratings/sc2/zh-cn.jpg';
	    Flash.expressInstall= 'http://content.battlenet.com.cn/global-video-player/expressInstall.swf';				
		Flash.defaultVideoParams.wmode = "opaque";
	},
	messageFormInitialize : function() {
		$("#messageContent").focus(function() {
			if ($(this).val() == "请填写留言内容（最多100个字）" || $(this).val() =="留言成功，欢迎下次再来") {
				$(this).val("");
			}
		});
		$("#messageContent").blur(function() {
			if ($(this).val() == "")
				$(this).val("请填写留言内容（最多100个字）");
		});
		$("#messageContent").val("请填写留言内容（最多100个字）");
	},
	 truncStr:function(event){
			var curLength = $("#messageContent").val().length;
			if(curLength>100){
				alert("您最多可以输入100个字！")
				document.getElementById("messageContent").value = document.getElementById("messageContent").value.substr(0,100);
				if(event.keyCode!= 8){
					event.returnValue = false;
					return false;
				}
				return false;
			}else{
				return true;
			}	 
	 },
	 issubmited:false,
	 submitForm : function(clientIp,event) {// btn click	 
	 	if(!this.truncStr(event)){
			return false;	
		}
		if(Stratagems_1.issubmited) {
			alert("您已经提交过留言");
			return false;
		}
		function checkSubmit() {
			var message = $("#messageContent").val();
			if (message == "" || message == "请您耽误片刻，填写留言内容") {
				alert("留言内容不能为空");
				return false;
			 }
			return true;
		};
		
		if(!checkSubmit()) {
			return false;
		}
		Stratagems_1.issubmited = true;
		var content = $("#messageContent").val();
		var ip = clientIp;
		MessageBean.addMessageForm(ip, content, "", RESOURCE_36stratagems , function(r){

															if(r) {
																$("#messageContent").val("留言成功，欢迎下次再来");
																alert("留言已成功，等待审核");
															}else{
																alert("留言失败");
															}
		});
	 },
	sharePosition:function(){
		 position();
		 $(window).resize(function(){
			position();
		});
		$(window).scroll(function(){
			position();
		});
		function position(){
		    var topScroll=$(document).scrollTop();
			$("#share_box").css("top",300+topScroll+"px");
		}
	},
	getTop:function(){
		var goTop=$('.top');
		
		$(window).scroll(function(){
			goTop.show();
			if(goTop.offset().top<1100){
				goTop.hide();
			}
			var topScroll=$(document).scrollTop();
			$(".top").css("top",600+topScroll+"px");
		})
			
		goTop.click(function(){
			$(document).scrollTop(0);
		})
	},
	_ : null
};

// JavaScript
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;
if (MessageBean == null) var MessageBean = {};
MessageBean._path = '/dwr';
var RESOURCE_JOYFUL = 4;
MessageBean.addMessageForm = function(p0, p1, p2, p3, callback) {
	dwr.engine._execute(MessageBean._path, 'MessageBean', 'addMessageForm', p0, p1, p2, p3, callback);
};
MessageBean.getMessagesList = function(p0, callback) {
	dwr.engine._execute(MessageBean._path, 'MessageBean', 'getMessagesList', RESOURCE_JOYFUL, callback);
	
};



var Joyful = {	
	 init:function(){
	     this.messageFormInitialize();
		 $("#msg_list_con").YlMarquee({
			vertical: true,
			height:230,
			step:1
		});	
		$("#weiboCon").YlMarquee({
			vertical: true,
			height:405,
			step:1
		});	
		this.slidePosition();
		$(window).resize(function(){
			Joyful.slidePosition();
		});	
		this.slide(); 
		this.limitText($("#messageContent"),100);
	 },	 
	messageFormInitialize : function() {
		$("#messageContent").focus(function() {
			if ($(this).val() == "请填写留言内容" || $(this).val() =="留言成功，欢迎下次再来") {
				$(this).val("");
			}
		});
		$("#messageContent").blur(function() {
			if ($(this).val() == "")
				$(this).val("请填写留言内容");
		});
		$("#messageContent").val("请填写留言内容");
	},
/*	 truncStr:function(event){debugger;
			var curLength = $("#messageContent").val().length;
			$("#textCount").text("您已输入"+curLength+"个字，最多输入100个字")
			if(curLength>100){
				$("#textCount").text("您已输入100个字，最多输入100个字")
				document.getElementById("messageContent").value = document.getElementById("messageContent").value.substr(0,100);
				if(event.keyCode!= 8){
					event.returnValue = false;
					return false;
				}
				return false;
			}else{
				return true;
			}	 
	 },*/
	 limitText:function(obj,number){
		   var num=number;
			obj.next().find("#textCount").text("(最多输入"+num+"个字)");
			function trunc(event) {
			   var curLength =obj.val().length;
		       obj.next().find("#textCount").text("(您已输入"+curLength+"字,最多输入"+num+"个字)");
			   if(curLength>num){
				    obj.val(obj.val().substring(0,num));				   			   
				    obj.next().find("#textCount").text("(您已输入"+num+"字,最多输入"+num+"个字)");
				    if(event.keyCode != 8){
					   event.returnValue = false;
					   return false;
				}
			}
	      }
	      obj.keyup(trunc);
	      obj.keydown(trunc);
		   },
	 issubmited:false,
	 submitForm : function(clientIp,event) {// btn click	 
		if(Joyful.issubmited) {
			alert("您已经提交过留言");
			return false;
		}
		function checkSubmit() {
			var message = $("#messageContent").val();
			if (message == "" || message == "请您耽误片刻，填写留言内容") {
				alert("留言内容不能为空");
				return false;
			 }
			return true;
		};
		
		if(!checkSubmit()) {
			return false;
		}
		Joyful.issubmited = true;
		var content = $("#messageContent").val();
		var ip = clientIp;
		MessageBean.addMessageForm(ip, content, "", RESOURCE_JOYFUL , function(r){
															if(r) {
																$("#messageContent").val("留言成功，欢迎下次再来");
																alert("留言已成功，等待审核");
															}else{
																alert("留言失败");
															}
		});
	},
	slidePosition:function(){
		var windewWidth=$(window).width();
		$(".slide .pic_bg").width((windewWidth-1002)/2+"px");
		$("#slide").width(windewWidth);
		$("#slide ul").css({"left":-(1002-(windewWidth-1002)/2)+"px","width":1002*$("#slide li").size()+"px"})
		},
	slide:function(){
		    var index=0;
			var slideLeftPosition=parseInt($("#slide ul").css("left"));
			var adLen=$("#slide li").size();
		    function slideAuto(){				
				if(index==adLen-2){
					index=0;
					}					
				$("#slide ul").animate( { left: (slideLeftPosition-1002*index)+"px"}, 1500 )
				index++;
				}
		   var interval;
		   var auto=function(){interval=setInterval(slideAuto,"5000");}
		   auto();
		   $("#slide,#prev,#next,#nav ul").mouseover(function(){
			   clearInterval(interval);
	       })	
		   $("#slide,#prev,#next,#nav ul").mouseout(function(){
		  	   auto();
			   }) 
		
			$("#prev").click(function(){	
				if(index==0){
					index=adLen-2;						
				}
				index--;
				$("#slide ul").stop().animate( { left: (slideLeftPosition-1002*index)+"px"}, 1500 )
					
			})
		   $("#next").click(function(){
			    if(index==adLen-3){
					index=-1;
					}	
					index++;					
					$("#slide ul").stop().animate( { left: (slideLeftPosition-1002*index)+"px"}, 1500 )							 					  
			})
			$("#nav ul li").hover(function(){
				$(this).css("z-index",1000);
				$(this).find("a").css("z-index",1000)
				},function(){
				$(this).css("z-index",10);
				$(this).find("a").css("z-index",10)	
					})
			$("#nav ul li").click(function(){
				var navIndex=$(this).index();
				$("#slide ul").stop().animate( { left: (slideLeftPosition-1002*navIndex)+"px"}, 1500 )
				})
		  
		  },
	_ : null
};


var Wcs = {	
	 init:function(){
                this.tab();			
				this.initFlash();				
		        swfobject.embedSWF(Flash.videoPlayer,'video_play','388px', '289px',
						Flash.requiredVersion, Flash.expressInstall,{
							width : 388,
							height : 289,
							videoWidth : 388,
							videoHeight : 289,
							movieUrl :'http://flv.bn.netease.com/videolib3/1210/10/ldMjk6087/ldMjk6087.flv',
							autoPlay : false
						}, Flash.defaultVideoParams);
		
	 },	 
	 initFlash:function(){
	    Flash.videoPlayer = 'http://res.nie.netease.com/comm/js/nie/util/player.swf';
		Flash.videoBase = 'http://content.battlenet.com.cn/sc2/media/videos';
		Flash.ratingImage = 'http://content.battlenet.com.cn/global-video-player/ratings/sc2/zh-cn.jpg';
	    Flash.expressInstall= 'http://content.battlenet.com.cn/global-video-player/expressInstall.swf';				
		Flash.defaultVideoParams.wmode = "opaque";
	},
	 tab:function(){
		 var menu=$("#nav li");
		 menu.click(function(){
			 menu.children().removeClass("on");
			 $(this).children().addClass("on");
			 var index=$(this).index();
			 if(index==1){
				  $(this).find("a").attr("href","http://www.battlenet.com.cn/features/zh/esport/wcs-asia/2012/");
				  menu.eq(0).click();
			 }else{
				  $("#content").children().hide().eq(index).show();
				 }
			 })
		 },
	_ : null
};

// JavaScript
var Hotsbeta = {	
	 init:function(){
		 $(".nolink").click(function(){
			 $("#pop_box,#pop").show();
			  this.setPosition($("#pop"))
			 })
		 $("#pop .close").click(function(){
			  $("#pop_box,#pop").hide();
			 })
         $(window).resize(function(){
			Minisite.popup_ptn();
		});
		$(window).scroll(function(){
			Minisite.popup_ptn();
		});
	 },	 
       setPosition:function(boxObj){//弹窗定位
		     var t=boxObj,
		     selfWidth=t.width(),
		     selfHeigh=t.height(),
		     tScrollTop=$(document).scrollTop(),
		     left_position=($(window).width()-selfWidth)/2+"px",
		     topHeight=($(window).height()-selfHeigh)/2,
		     top_position=tScrollTop+topHeight+"px",
		     pop_bg_width=$(document.body).width()+"px",
		     pop_bg_height=$(document.body).height()+"px";
	   	     $("#pop_box").css({"width":pop_bg_width,"height":pop_bg_height});//背景层
		     t.css({"left":left_position,"top":top_position});
		     t.find(".title").after($("#vote_result").show());
	},
	_ : null
};

var Public = {
	reinitIframe:function(){
		var iframe = document.getElementById("commentsIframe");
		try{
			var bHeight = iframe.contentWindow.document.body.scrollHeight;
			var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
			var bro=$.browser;
			if(bro.msie || bro.mozilla){
				height=bHeight
			}else{
				height=	dHeight		
			}
			//var height = Math.max(bHeight, dHeight);
			iframe.height =  height;
		}catch (ex){}		
	},
	commentsInt:function(){
		window.setInterval(this.reinitIframe, 200);		
	},
	lightBoxImg:function(){
		//var img=$(".content a img.edit_imgShow");
		var img=$(".content a img.edit_imgShow");
		img.click(function(){
			var t=$(this);
			if(t.attr("rel")){
				var imgSrc=t.attr("rel");				
			}else{
				var imgSrc=t.attr("src");			
			}			
			
			Lightbox.loadImage([ {  src:imgSrc } ]);	
			return false;
		})	
	},	
	lightBoxVideo:function(){
		Flash.videoPlayer = 'http://nos.netease.com/sc2/1/style/gameinfo/content/global-video-player/themes/sc2/video-player.swf';
	},
	appendComment:function(url,id,w){
		if(w==undefined){
			w=647;
		}
		var iframeHtml='<iframe allowtransparency="true" id="commentsIframe" name="commentsIframe" border="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" framespacing="0" frameborder="0" scrolling="no" width="'+w+'" height="660" src="'+url+'"></iframe>';
		$("#"+id).append(iframeHtml);
	},
	appendCount:function(countId,param){
		var host=location.host;
		if(host!=="sc2.163.com")return;
		var pathname=location.pathname;
		var pl=pathname.substring(pathname.length-1,pathname.length);
		if(pl!=="/"){
			pathname=pathname+"/";
		}
		var counturl="http://cnrdn.com/rd.htm?id="+countId+"&r="+host+pathname+param;
		var iframeHtml='<iframe style="display:none" id="countIframe" name="countIframe" border="0" vspace="0" hspace="0" frameborder="0" scrolling="no" width="0" height="0" src="'+counturl+'"></iframe>';
		$("#countIframe").remove();		
		$("body").append(iframeHtml);
	},
	articlesDig: function() {
		var href=window.location.href,
			encode = encodeURIComponent;
		href=encode(href);
		Core.appendFrame('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_likeurl?url=' + href + '&style=3&otype=like&showcount=1', 110, 22, $('.w-share .z-qqshare'), 'qzone-like');
		Core.appendFrame('http://www.connect.renren.com/like/v2?url=' + href, 130, 22, $('.w-share .z-rrshare'), 'renren-like');
	},
	triggerEBConversion:function(id){
		var ebRand = Math.random()+'';
		ebRand = ebRand * 1000000;		
		//var clickJs='<script src="HTTPS://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&amp;ActivityID='+id+'&amp;rnd=' + ebRand + '"></script>';
		//var noscriptImg='<noscript><img width="1" height="1" style="border:0" src="HTTPS://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&amp;ActivityID='+id+'&amp;ns=1"/></noscript>';		
		var iframeHtml='<iframe style="display:none" id="trackIframe" name="trackIframe" border="0" vspace="0" hspace="0" frameborder="0" scrolling="no" width="0" height="0" src="HTTPS://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&amp;ActivityID='+id+'&amp;rnd=' + ebRand + '"></iframe>';
		$("#trackIframe").remove();
		$("body").append(iframeHtml);

	},
	sc2click: function(page) {
		switch(page){
			case "Home":
				//home
				var flash_link=$(".w-flash .flash-link");
				flash_link.click(function() {
					var id = $(this).attr("data-track");
					Public.triggerEBConversion(id);
					switch (id) {
						case "342134":
							neteaseTracker(false, "http://sc2.163.com/home/btn_buy", "Home页flash购买按钮", "sc2click");
							break;
						case "341510":
							neteaseTracker(false, "http://sc2.163.com/home/btn_download", "Home页flash游戏下载", "sc2click");
							break;
						case "341511":
							neteaseTracker(false, "http://sc2.163.com/home/btn_register", "Home页flash帐号注册", "sc2click");
							break;
					}
				})
			break;

			case "Landing":
				$(".home_btn").click(function(){
					Public.triggerEBConversion(342156);
    				neteaseTracker(false,"http://sc2.163.com/landing/home_btn","Landing进入官网","sc2click");
				})
				$(".downloadBtn").click(function(){
					Public.triggerEBConversion(341510);
    				neteaseTracker(false,"http://sc2.163.com/landing/downloadBtn","Landing下载器下载","sc2click");
				})
				$(".xunleiBtn").click(function(){
    				neteaseTracker(false,"http://sc2.163.com/landing/xunleiBtn","Landing迅雷下载","sc2click");
				})
				$(".regBtn").click(function(){
					Public.triggerEBConversion(341511);
    				neteaseTracker(false,"http://sc2.163.com/landing/regBtn","Landing快速注册","sc2click");
				})
				$(".xsBtn").click(function(){
    				neteaseTracker(false,"http://sc2.163.com/landing/xsBtn","Landing新手入门","sc2click");
				})
				$(".payBtn").click(function(){
    				neteaseTracker(false,"http://sc2.163.com/landing/payBtn","Landing充值购买","sc2click");
				})
				
				$('.video_bg_btn').click(function(){
					var num=$('.video_btn li .active').parents('li').index();
					switch(num){
						case '0':
							neteaseTracker(false,"http://sc2.163.com/landing/video1","Landing游戏大厅视频","sc2click");
							break;
						case '1':
							neteaseTracker(false,"http://sc2.163.com/landing/video2","Landing多人对战","sc2click");
							break;
						case '2':
							neteaseTracker(false,"http://sc2.163.com/landing/video3","Landing剧情战役","sc2click");
							break;
					}
				})
				
			break;

			case "Pay":
				$(".buy1, .buy1-1").click(function(){	
					Public.triggerEBConversion(342192);
					neteaseTracker(false,"http://sc2.163.com/pay/btn_pay90","Pay页90畅玩包","sc2click");	
				})
				$(".buy2, .buy2-1").click(function(){	
					Public.triggerEBConversion(342193);
					neteaseTracker(false,"http://sc2.163.com/pay/btn_pay150","Pay页150数字典藏包","sc2click");	
				})	
				$(".upgrade a").click(function(){	
					neteaseTracker(false,"http://sc2.163.com/pay/btn_pay60","Pay页60升级数字典藏包","sc2click");	
				})
				$(".cdKey").click(function(){	
					neteaseTracker(false,"http://sc2.163.com/pay/btn_payCD-key","Pay页CD-key","sc2click");	
				})
			break;			

			case "Download":
				var downloadLink=$(".m-download .download"), otherlinks=$('.otherlinks a');
				downloadLink.eq(0).click(function(){
					neteaseTracker(false,"http://sc2.163.com/download/btn_download","Download页客户端下载器","sc2click");
				})
				downloadLink.eq(1).click(function(){
					neteaseTracker(false,"http://sc2.163.com/download/btn_download_green","Download页绿色客户端下载","sc2click");
				})		
				otherlinks.click(function(){
					var txt=$(this).text();	
					neteaseTracker(false,"http://sc2.163.com/download/btn_"+ txt,"Download" + txt,"sc2click");
				})
			break;	

			case "Newbie":
				$(".ad1_img").click(function(){
					neteaseTracker(false,"http://sc2.163.com/newbie/btn_download","Newbie页8分钟极速下载","sc2click");
				})
				$(".ad2_img").click(function(){
					neteaseTracker(false,"http://sc2.163.com/newbie/btn_register","Newbie页快速注册游戏","sc2click");			
				})
			break;

			case "Free":
				var btn=$(".btn");
				btn.eq(0).click(function(){
					neteaseTracker(false,"http://sc2.163.com/free/btn_download","Free页下载游戏客户端","sc2click");
				})
				btn.eq(1).click(function(){
					neteaseTracker(false,"http://sc2.163.com/free/btn_register","Free页注册游戏帐号","sc2click");
				})				
			break;

			case "Diancangbao":
				$(".buy").click(function(){
					neteaseTracker(false,"http://sc2.163.com/diancangbao/btn_pay","Diancangbao页立即购买","sc2click");
				})

				$(".apply_btn").click(function(){
					neteaseTracker(false,"http://sc2.163.com/diancangbao/btn_apply","Diancangbao页立即申请","sc2click");
				})
			break;		

			case "Kaixue":
				var btn=$('.turntableBtn');
				btn.click(function() {
					neteaseTracker(false,"http://sc2.163.com/kaixue/turntableBtn","Kaixue抽奖按钮","sc2click");
				});
			break;

		}


	},
	openWindow:function(url){
		$("#openWindowForm").remove();
		var formHtml='<form id="openWindowForm" action="'+url+'" target="_blank"></form>';
		$("body").append(form);
		var form=$("#openWindowForm");
		form.submit();
	}
};
/**
 * Turns specific elements into custom dropdown systems, to replace the default form select dropdown.
 *
 * @copyright   2010, Blizzard Entertainment, Inc
 * @class       Dropdown
 * @example
 *
 *      $('.ui-dropdown').dropdown();
 *
 *      <div class="ui-dropdown" id="dropdown-id">
 *          <select name="dropdown">
 *              <option value="1">Option 1</option>
 *              <option value="2">Option 2</option>
 *              <option value="3">Option 3</option>
 *          </select>
 *      </div>
 *
 */

(function($) {

    /**
     * Apply to all elements.
     *
     * @param object configuration
     * @constuctor
     * */
    $.fn.dropdown = function(configuration) {
		var config = this.extend({}, $.fn.dropdown.config, configuration);
        
		this.each(function() {
            var container = $(this),
				dropdown = container.find('select'),
				path = '#'+ container.attr('id') + ' .dropdown-wrapper',
				disabled = false;

            if (dropdown.attr('disabled') == 'disabled') {
                dropdown.parent().addClass('disabled');
                disabled = true;
            }
            
            $('<a/>', {
                href: '#',
                html: $('<span/>', {
                    text: $('select option:selected', container).text()
                }),
                click: function() {
                    if (!disabled) {
                        if ($(path).is(':hidden'))
                            Toggle.open(container, 'opened', path, 100);
                        else
                            Toggle.close(container, 'opened', path, 100);
                    }

                    return false;
                }
            }).addClass('dropdown-toggler').appendTo(container);

            // Build the list
            var div = $('<div/>').addClass('dropdown-wrapper').hide().appendTo(container),
				ul = $('<ul/>').appendTo(div);

            $.each(dropdown.find('option'), function(key, value) {
                var option = $(value),
					markup = {
						text: option.text(),
						href: '#'
					};

				if (config.trigger) {
                    markup.click = function() {
						if (config.closeOnClick) {
							Toggle.keepOpen = false;
							Toggle.close(container, 'opened', path, 50);
						}
						
						if (config.updateValue) {
							dropdown.val(option.val());
							dropdown.find('option:selected').removeAttr('selected');
							dropdown.find("option[value='"+ option.val() +"']").attr('selected', 'selected');
						}
						
						if (config.updateText)
							container.find('.dropdown-toggler span').html(option.text());

						if (Core.isCallback(config.callback))
							config.callback(container, option.val());

                        return false;
                    }
                }

                var li = $('<li/>').appendTo(ul);
                $('<a/>', markup).appendTo(li);
            });

            // Hide the select dropdown
            dropdown.hide();
        });
    }

    /**
	 * Default configuration.
	 */
	$.fn.dropdown.config = {
		trigger: true,
		callback: null,
		updateText: true,
		updateValue: true,
		closeOnClick: true
	};

})(jQuery);

/*!
 * Base On jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 * Libs:Jay imageScroll
 * Copyright 2012, QinLiang
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: 2013.2.21
 */

(function($) {
	var imageScroll = {
		defaults: {
			showPic: 4,//默认可见图片数
			step:1,
			btnActive:true,//按钮是否一直处于激活状态
			auto:false,
			showNum:true,//是否显示数字标签
			numClass:"newerNum",//数字列表
			prevClass:"prev",
			nextClass:"next",
			imgWrapId:"imgList",
			speed:500
		}
	};
	function ImageScroll(root, defaults) {
		var self = this,
		boxObj = root,
		imgWrap=$("#"+defaults.imgWrapId),
		prevBtn=boxObj.find("."+defaults.prevClass),
		nextBtn=boxObj.find("."+defaults.nextClass),
		numList=boxObj.find("."+defaults.numClass),
		num=defaults.showPic,
		animate=false,timer,index;

		$.extend(this, {
			getScroll:function(){
				var imgList=imgWrap.children();//图片数组对象
				var el=imgList.eq(0);//选定一个图片
				var scrollW=el.width()+parseInt(el.css("margin-left"))+parseInt(el.css("margin-right"));//一次滚动的宽度
				var scrollStep=scrollW*defaults.step;//每次要滚动的宽度
				var imgListL=imgList.length;//图片的个数
				var imageAllW=parseInt(scrollW)*imgListL;//总的宽度
				var wrapMar=Math.abs(parseInt(imgWrap.css("margin-left")));//已滚动的数值
				var lastW=imageAllW-scrollW*num;//剩余的滚动数值
				index=wrapMar/scrollStep;
				var options={
					prevScrollRange:scrollStep,
					nextScrollRange:scrollStep,
					numRange:scrollStep,
					index:index
				};
				if(wrapMar==0){
					options.prevRun=false;
					options.nextRun=true;
					if(defaults.btnActive){
						options.prevRun=true;
						options.prevScrollRange=-lastW;
					}
				}else if(wrapMar==lastW){
					options.prevRun=true;
					options.nextRun=false;
					if(defaults.btnActive){
						options.nextRun=true;
						options.nextScrollRange=-lastW;
					}					
				}else{
					options.prevRun=true;
					options.nextRun=true;
				}			
				return options;					
			},
			scrollAnimate:function(btn,range){
				if(animate)return;	
				animate=true;
				var scrollType="";
				btn=="prev"?scrollType="+=":scrollType="-=";
				range+="px";
				
				if(defaults.showNum){
					var l=numList.length;
					
					if(btn=="prev"){
						index=self.getScroll().index;	
						if(index==0){
							index=l-1;	
						}else{index--;}
						
					}else if(btn=="next"){
						index=self.getScroll().index;	
						if(index==l-1){
							index=0;	
						}else{index++;}
													
					}else{
						scrollType="-";
					}
					self.scrollNum(index);
						
				}			
				setTimeout(function(){
					imgWrap.animate({"margin-left":scrollType+range},defaults.speed,function(){animate=false;});
				},100);					
			},
			scrollNum:function(index){
				numList.eq(index).addClass("active").siblings(".newerNum").removeClass("active");
			},
			scrollRun:function(){				
				prevBtn.click(function(){
					var options=self.getScroll();		   
					if(options.prevRun){
						self.scrollAnimate("prev",options.prevScrollRange);
					}				   
					return false;
				})
				nextBtn.click(function(){
					var options=self.getScroll();				   
					if(options.nextRun){
						self.scrollAnimate("next",options.nextScrollRange);
					}				   
					return false;
				})
				if(defaults.showNum){
					numList.click(function(){
						var options=self.getScroll();
						index=numList.index($(this));
						var range=options.numRange*index;
						self.scrollAnimate("num",range);
						return false;
					})
				}
			},
			auto:function(){
				timer = setInterval(function(){var options=self.getScroll();self.scrollAnimate("next",options.nextScrollRange)}, 3000);
			},
			stopAuto:function(){
				clearInterval(timer);
			},
			init: function() {
				if(defaults.auto){
					self.auto()
					prevBtn.hover(function() {
						self.stopAuto();
					},
					function() {
						self.auto();
					})
					nextBtn.hover(function() {
						self.stopAuto();
					},
					function() {
						self.auto();
					})
					imgWrap.hover(function() {
						self.stopAuto();
					},
					function() {
						self.auto();
					})
					numList.hover(function() {
						self.stopAuto();
					},
					function() {
						self.auto();
					})				
					
				}
				this.scrollRun();
			}
		})
		self.init();

	}

	$.fn.imageScroll = function(defaults) {
		defaults = $.extend({},
		imageScroll.defaults, defaults);
		return this.each(function() {
			el = new ImageScroll($(this), defaults);
		})

	}

})(jQuery);


/*!
/*!
 * Base On jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 * Libs:Jay timeline
 * Copyright 2012, QinLiang
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: 2013.2.21
 */

(function($) {
	var timeline = {
		defaults: {
			timeIndex: 0, //默认显示时间点
			btnActive: true, //按钮是否一直处于激活状态
			auto: false,
			prev: ".prev",
			next: ".next",
			timeLine: "#timeLine",
			timeTrigger: "#timeDot",
			timePanel: "#timeConBox",
			dotAuto:true
		}
	};

	function Timeline(defaults) {
		var self = this,
			timeLine = $(defaults.timeLine),
			timeTrigger = $(defaults.timeTrigger).find("li"),
			timePanel = $(defaults.timePanel).find(".timeCon"),
			prevBtn = timeLine.find(defaults.prev),
			nextBtn = timeLine.find(defaults.next),
			timeIndex = defaults.timeIndex,
			animate = false,
			timer, index = 0,timerindex = 0,timerDot;

		$.extend(this, {

			scrollAnimate: function(index) {
				if (animate) return;
				animate = true;


				timeTrigger.eq(index).css("opacity",1).siblings().css("opacity",0);
				if ($.browser.msie && $.browser.version == 6.0) {
					timePanel.eq(index).siblings().css({
						"top": "-10px",
						"opacity": 0
					}).hide();
				} else {

					timePanel.eq(index).siblings().animate({
						"top": "-10px",
						"opacity": 0
					}, 300);
				}

				timePanel.eq(index).siblings().find(".pic").animate({
					"opacity": 0
				}, 300, function() {
					animate = false;
				});
				timePanel.eq(index).animate({
					"top": 0,
					"opacity": 1
				}, 300).show();
				timePanel.eq(index).find(".pic").animate({
					"opacity": 1
				}, 300).show();


				/*				setTimeout(function() {
					imgWrap.animate({
						"margin-left": scrollType + range
					}, 500, function() {
						animate = false;
					});
				}, 100);*/
			},
			scrollRun: function() {

				//timeTrigger.eq(timeIndex).addClass("active");
				//timePanel.eq(timeIndex).addClass("active");
				var l = timeTrigger.length;
				timeTrigger.mouseover(function() {
					var t = $(this);
					index = timeTrigger.index(t);
					timePanel.css("z-index",5);
					self.scrollAnimate(index);
					clearTimeout(timerDot);
				})		
			

				prevBtn.click(function() {
					if (index == 0) {
						index = l;
					}
					index--;
					self.scrollAnimate(index);
					return false;
				})
				nextBtn.click(function() {
					index++;
					if (index == l) {
						index = 0;
					}

					self.scrollAnimate(index);
					return false;
				})
			},
			setHead:function(){
				var head=$("#timeHead > li");
				head.mouseenter(function(){
					timePanel.css("z-index",5);
					var t=$(this);
					var index=head.index(t);
					if(index==2){index=4}
					if(index==3){index=7}	
					self.scrollAnimate(index);
				})

				$('.cl').mouseleave(function(){

					timePanel.hide().css("z-index",13);
				})
			},
			autoDot:function(){
				var l = timeTrigger.length;
				var dot=$("#timeDot > li");
				dot.css("opacity",0);
				timerDot = setInterval(function() {
					timerindex++;
					if (timerindex == l) {
						timerindex = 0;
					}
					dot.eq(timerindex).animate({"opacity":1},100).siblings().css("opacity",0);;
				}, 1000);
			},
			auto: function() {
				var l = timeTrigger.length;
				timer = setInterval(function() {
					index++;
					if (index == l) {
						index = 0;
					}
					self.scrollAnimate(index)
				}, 2000);
			},
			stopAuto: function() {
				clearInterval(timer);
			},
			init: function() {
				if (defaults.auto) {
					self.auto()
					prevBtn.hover(function() {
						self.stopAuto();
					},

					function() {
						self.auto();
					})
					nextBtn.hover(function() {
						self.stopAuto();
					},

					function() {
						self.auto();
					})
					timeTrigger.hover(function() {
						self.stopAuto();
					},

					function() {
						self.auto();
					})

				}

				if(defaults.dotAuto){
					self.autoDot();
				}
				this.scrollRun();

				this.setHead();
			}
		})
		self.init();

	}

	/*	$.fn.timeline = function(defaults) {
		defaults = $.extend({},
		timeline.defaults, defaults);
		return this.each(function() {
			el = new Timeline($(this), defaults);
		})

	}*/

	$.sc2 = {
		timeline: function(defaults) {
			defaults = $.extend({},
			timeline.defaults, defaults);
			new Timeline(defaults);

		}

	}

})(jQuery);
/*
    ********** Juicer **********
    ${A Fast template engine}
    Project Home: http://juicer.name

    Author: Guokai
    Gtalk: badkaikai@gmail.com
    Blog: http://benben.cc
    Licence: MIT License
    Version: 0.6.5-stable
*/

(function() {

    // This is the main function for not only compiling but also rendering.
    // there's at least two parameters need to be provided, one is the tpl, 
    // another is the data, the tpl can either be a string, or an id like #id.
    // if only tpl was given, it'll return the compiled reusable function.
    // if tpl and data were given at the same time, it'll return the rendered 
    // result immediately.

    var juicer = function() {
        var args = [].slice.call(arguments);

        args.push(juicer.options);

        if(args[0].match(/^\s*#([\w:\-\.]+)\s*$/igm)) {
            args[0].replace(/^\s*#([\w:\-\.]+)\s*$/igm, function($, $id) {
                var _document = document;
                var elem = _document && _document.getElementById($id);
                args[0] = elem ? (elem.value || elem.innerHTML) : $;
            });
        }
        
        if(arguments.length == 1) {
            return juicer.compile.apply(juicer, args);
        }
        
        if(arguments.length >= 2) {
            return juicer.to_html.apply(juicer, args);
        }
    };

    var __escapehtml = {
        escapehash: {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '"': '&quot;',
            "'": '&#x27;',
            '/': '&#x2f;'
        },
        escapereplace: function(k) {
            return __escapehtml.escapehash[k];
        },
        escaping: function(str) {
            return typeof(str) !== 'string' ? str : str.replace(/[&<>"]/igm, this.escapereplace);
        },
        detection: function(data) {
            return typeof(data) === 'undefined' ? '' : data;
        }
    };
    
    var __throw = function(error) {
        if(typeof(console) !== 'undefined') {
            if(console.warn) {
                console.warn(error);
                return;
            }

            if(console.log) {
                console.log(error);
                return;
            }
        }
        
        throw(error);
    };

    var __creator = function(o, proto) {
        o = o !== Object(o) ? {} : o;

        if(o.__proto__) {
            o.__proto__ = proto;
            return o;
        }

        var empty = function() {};
        var n = Object.create ? 
            Object.create(proto) : 
            new(empty.prototype = proto, empty);

        for(var i in o) {
            if(o.hasOwnProperty(i)) {
                n[i] = o[i];
            }
        }

        return n;
    };

    juicer.__cache = {};
    juicer.version = '0.6.5-stable';
    juicer.settings = {};

    juicer.tags = {
        operationOpen: '{@',
        operationClose: '}',
        interpolateOpen: '\\${',
        interpolateClose: '}',
        noneencodeOpen: '\\$\\${',
        noneencodeClose: '}',
        commentOpen: '\\{#',
        commentClose: '\\}'
    };

    juicer.options = {
        cache: true,
        strip: true,
        errorhandling: true,
        detection: true,
        _method: __creator({
            __escapehtml: __escapehtml,
            __throw: __throw,
            __juicer: juicer
        }, {})
    };

    juicer.tagInit = function() {
        var forstart = juicer.tags.operationOpen + 'each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?' + juicer.tags.operationClose;
        var forend = juicer.tags.operationOpen + '\\/each' + juicer.tags.operationClose;
        var ifstart = juicer.tags.operationOpen + 'if\\s*([^}]*?)' + juicer.tags.operationClose;
        var ifend = juicer.tags.operationOpen + '\\/if' + juicer.tags.operationClose;
        var elsestart = juicer.tags.operationOpen + 'else' + juicer.tags.operationClose;
        var elseifstart = juicer.tags.operationOpen + 'else if\\s*([^}]*?)' + juicer.tags.operationClose;
        var interpolate = juicer.tags.interpolateOpen + '([\\s\\S]+?)' + juicer.tags.interpolateClose;
        var noneencode = juicer.tags.noneencodeOpen + '([\\s\\S]+?)' + juicer.tags.noneencodeClose;
        var inlinecomment = juicer.tags.commentOpen + '[^}]*?' + juicer.tags.commentClose;
        var rangestart = juicer.tags.operationOpen + 'each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)' + juicer.tags.operationClose;
        var include = juicer.tags.operationOpen + 'include\\s*([^}]*?)\\s*,\\s*([^}]*?)' + juicer.tags.operationClose;

        juicer.settings.forstart = new RegExp(forstart, 'igm');
        juicer.settings.forend = new RegExp(forend, 'igm');
        juicer.settings.ifstart = new RegExp(ifstart, 'igm');
        juicer.settings.ifend = new RegExp(ifend, 'igm');
        juicer.settings.elsestart = new RegExp(elsestart, 'igm');
        juicer.settings.elseifstart = new RegExp(elseifstart, 'igm');
        juicer.settings.interpolate = new RegExp(interpolate, 'igm');
        juicer.settings.noneencode = new RegExp(noneencode, 'igm');
        juicer.settings.inlinecomment = new RegExp(inlinecomment, 'igm');
        juicer.settings.rangestart = new RegExp(rangestart, 'igm');
        juicer.settings.include = new RegExp(include, 'igm');
    };

    juicer.tagInit();

    // Using this method to set the options by given conf-name and conf-value,
    // you can also provide more than one key-value pair wrapped by an object.
    // this interface also used to custom the template tag delimater, for this
    // situation, the conf-name must begin with tag::, for example: juicer.set
    // ('tag::operationOpen', '{@').

    juicer.set = function(conf, value) {
        var that = this;

        var escapePattern = function(v) {
            return v.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/igm, function($) {
                return '\\' + $;
            });
        };

        var set = function(conf, value) {
            var tag = conf.match(/^tag::(.*)$/i);

            if(tag) {
                that.tags[tag[1]] = escapePattern(value);
                that.tagInit();
                return;
            }

            that.options[conf] = value;
        };

        if(arguments.length === 2) {
            set(conf, value);
            return;
        }
        
        if(conf === Object(conf)) {
            for(var i in conf) {
                if(conf.hasOwnProperty(i)) {
                    set(i, conf[i]);
                }
            }
        }
    };

    // Before you're using custom functions in your template like ${name | fnName},
    // you need to register this fn by juicer.register('fnName', fn).

    juicer.register = function(fname, fn) {
        var _method = this.options._method;

        if(_method.hasOwnProperty(fname)) {
            return false;
        }

        return _method[fname] = fn;
    };

    // remove the registered function in the memory by the provided function name.
    // for example: juicer.unregister('fnName').

    juicer.unregister = function(fname) {
        var _method = this.options._method;

        if(_method.hasOwnProperty(fname)) {
            return delete _method[fname];
        }
    };

    juicer.template = function(options) {
        var that = this;

        this.options = options;

        this.__interpolate = function(_name, _escape, options) {
            var _define = _name.split('|'), _fn = _define[0] || '', _cluster;

            if(_define.length > 1) {
                _name = _define.shift();
                _cluster = _define.shift().split(',');
                _fn = '_method.' + _cluster.shift() + '.call({}, ' + [_name].concat(_cluster) + ')';
            }

            return '<%= ' + (_escape ? '_method.__escapehtml.escaping' : '') + '(' +
                        (!options || options.detection !== false ? '_method.__escapehtml.detection' : '') + '(' +
                            _fn +
                        ')' +
                    ')' +
                ' %>';
        };

        this.__removeShell = function(tpl, options) {
            var _counter = 0;
            
            tpl = tpl
                // for expression
                .replace(juicer.settings.forstart, function($, _name, alias, key) {
                    var alias = alias || 'value', key = key && key.substr(1);
                    var _iterate = 'i' + _counter++;
                    return '<% ~function() {' +
                                'for(var ' + _iterate + ' in ' + _name + ') {' +
                                    'if(' + _name + '.hasOwnProperty(' + _iterate + ')) {' +
                                        'var ' + alias + '=' + _name + '[' + _iterate + '];' +
                                        (key ? ('var ' + key + '=' + _iterate + ';') : '') +
                            ' %>';
                })
                .replace(juicer.settings.forend, '<% }}}(); %>')

                // if expression
                .replace(juicer.settings.ifstart, function($, condition) {
                    return '<% if(' + condition + ') { %>';
                })
                .replace(juicer.settings.ifend, '<% } %>')

                // else expression
                .replace(juicer.settings.elsestart, function($) {
                    return '<% } else { %>';
                })

                // else if expression
                .replace(juicer.settings.elseifstart, function($, condition) {
                    return '<% } else if(' + condition + ') { %>';
                })

                // interpolate without escape
                .replace(juicer.settings.noneencode, function($, _name) {
                    return that.__interpolate(_name, false, options);
                })

                // interpolate with escape
                .replace(juicer.settings.interpolate, function($, _name) {
                    return that.__interpolate(_name, true, options);
                })

                // clean up comments
                .replace(juicer.settings.inlinecomment, '')

                // range expression
                .replace(juicer.settings.rangestart, function($, _name, start, end) {
                    var _iterate = 'j' + _counter++;
                    return '<% ~function() {' +
                                'for(var ' + _iterate + '=' + start + ';' + _iterate + '<' + end + ';' + _iterate + '++) {{' +
                                    'var ' + _name + '=' + _iterate + ';' +
                            ' %>';
                })

                // include sub-template
                .replace(juicer.settings.include, function($, tpl, data) {
                    return '<%= _method.__juicer(' + tpl + ', ' + data + '); %>';
                });

            // exception handling
            if(!options || options.errorhandling !== false) {
                tpl = '<% try { %>' + tpl;
                tpl += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>';
            }

            return tpl;
        };

        this.__toNative = function(tpl, options) {
            return this.__convert(tpl, !options || options.strip);
        };

        this.__lexicalAnalyze = function(tpl) {
            var buffer = [];
            var method = [];
            var prefix = '';
            var reserved = [
                'if', 'each', '_', '_method', 'console', 
                'break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete', 'do', 
                'finally', 'for', 'function', 'in', 'instanceof', 'new', 'return', 'switch', 
                'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'null', 'typeof', 
                'class', 'enum', 'export', 'extends', 'import', 'super', 'implements', 'interface', 
                'let', 'package', 'private', 'protected', 'public', 'static', 'yield', 'const', 'arguments', 
                'true', 'false', 'undefined', 'NaN'
            ];

            var indexOf = function(array, item) {
                if (Array.prototype.indexOf && array.indexOf === Array.prototype.indexOf) {
                    return array.indexOf(item);
                }
                
                for(var i=0; i < array.length; i++) {
                    if(array[i] === item) return i;
                }
                
                return -1;
            };

            var variableAnalyze = function($, statement) {
                statement = statement.match(/\w+/igm)[0];
                
                if(indexOf(buffer, statement) === -1 && indexOf(reserved, statement) === -1 && indexOf(method, statement) === -1) {
                    
                    // avoid re-declare native function, if not do this, template 
                    // `{@if encodeURIComponent(name)}` could be throw undefined.
                    
                    if(typeof(window) !== 'undefined' && typeof(window[statement]) === 'function' && window[statement].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
                        return $;
                    }

                    // compatible for node.js
                    if(typeof(global) !== 'undefined' && typeof(global[statement]) === 'function' && global[statement].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)) {
                        return $;
                    }

                    // avoid re-declare registered function, if not do this, template 
                    // `{@if registered_func(name)}` could be throw undefined.

                    if(typeof(juicer.options._method[statement]) === 'function' || juicer.options._method.hasOwnProperty(statement)) {
                        method.push(statement);
                        return $;
                    }

                    buffer.push(statement); // fuck ie
                }

                return $;
            };

            tpl.replace(juicer.settings.forstart, variableAnalyze).
                replace(juicer.settings.interpolate, variableAnalyze).
                replace(juicer.settings.ifstart, variableAnalyze).
                replace(juicer.settings.elseifstart, variableAnalyze).
                replace(juicer.settings.include, variableAnalyze).
                replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_]+)/igm, variableAnalyze);

            for(var i = 0;i < buffer.length; i++) {
                prefix += 'var ' + buffer[i] + '=_.' + buffer[i] + ';';
            }

            for(var i = 0;i < method.length; i++) {
                prefix += 'var ' + method[i] + '=_method.' + method[i] + ';';
            }

            return '<% ' + prefix + ' %>';
        };
        
        this.__convert=function(tpl, strip) {
            var buffer = [].join('');

            buffer += "'use strict';"; // use strict mode
            buffer += "var _=_||{};";
            buffer += "var _out='';_out+='";

            if(strip !== false) {
                buffer += tpl
                    .replace(/\\/g, "\\\\")
                    .replace(/[\r\t\n]/g, " ")
                    .replace(/'(?=[^%]*%>)/g, "\t")
                    .split("'").join("\\'")
                    .split("\t").join("'")
                    .replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='")
                    .split("<%").join("';")
                    .split("%>").join("_out+='")+
                    "';return _out;";

                return buffer;
            }

            buffer += tpl
                    .replace(/\\/g, "\\\\")
                    .replace(/[\r]/g, "\\r")
                    .replace(/[\t]/g, "\\t")
                    .replace(/[\n]/g, "\\n")
                    .replace(/'(?=[^%]*%>)/g, "\t")
                    .split("'").join("\\'")
                    .split("\t").join("'")
                    .replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='")
                    .split("<%").join("';")
                    .split("%>").join("_out+='")+
                    "';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');";
                    
            return buffer;
        };

        this.parse = function(tpl, options) {
            var _that = this;

            if(!options || options.loose !== false) {
                tpl = this.__lexicalAnalyze(tpl) + tpl;
            }
            
            tpl = this.__removeShell(tpl, options);
            tpl = this.__toNative(tpl, options);

            this._render = new Function('_, _method', tpl);

            this.render = function(_, _method) {
                if(!_method || _method !== that.options._method) {
                    _method = __creator(_method, that.options._method);
                }

                return _that._render.call(this, _, _method);
            };

            return this;
        };
    };

    juicer.compile = function(tpl, options) {
        if(!options || options !== this.options) {
            options = __creator(options, this.options);
        }

        try {
            var engine = this.__cache[tpl] ? 
                this.__cache[tpl] : 
                new this.template(this.options).parse(tpl, options);
            
            if(!options || options.cache !== false) {
                this.__cache[tpl] = engine;
            }
            
            return engine;

        } catch(e) {
            __throw('Juicer Compile Exception: ' + e.message);
            
            return {
                render: function() {} // noop
            };
        }
    };

    juicer.to_html = function(tpl, data, options) {
        if(!options || options !== this.options) {
            options = __creator(options, this.options);
        }

        return this.compile(tpl, options).render(data, options._method);
    };

    typeof(module) !== 'undefined' && module.exports ? module.exports = juicer : this.juicer = juicer;

})();

(function($) {
	var fixed = {
		defaults: {
			marginTop:0
		}
	};
	function Fixed(root, defaults) {
		var self = this,
		element = root;
		var originStyles={
			position:null,
			top:null,
			visibility:null	
		}
		var ie6=$.browser.msie && $.browser.version==6;
		var marginTop=defaults.marginTop || 0;		
		var originTop=element.offset().top;
		
		$.extend(this, {
			setup:function(){


				// 修正过高的 marginTop
				marginTop = marginTop <= originTop ? marginTop : originTop;
				// 保存原有的样式
				for (var style in originStyles) {
					if (originStyles.hasOwnProperty(style)) {
						originStyles[style] = element.css(style);
					}
				}
				
				$(window).scroll(function(){
					self.scrollFn();
				})	
			
			},
			scrollFn:function(){
				var w=$(window);
				var distance = originTop - w.scrollTop();
				// 当距离小于等于预设的值时
				// 将元素设为 fix 状态
				if (distance <= marginTop) {
					if(!ie6){
						element.css({
							position: "fixed",
							top: marginTop,
							visibility:"visible"
						});								
					}else{
						element.css({
							position: "absolute",
							top: marginTop+w.scrollTop(),
							visibility:"visible"
						});								
						
					}
	
				} else if (distance > marginTop) {
					// 恢复原有的样式
					element.css(originStyles);
				}					
			},
			init: function() {
				this.setup();
				this.scrollFn();
								
			}
		})
		self.init();

	}

	$.fn.fixed = function(defaults) {
		defaults = $.extend({},
		fixed.defaults, defaults);
		return this.each(function() {
			el = new Fixed($(this), defaults);
		})

	}

})(jQuery);
var Gameguideunit={
      init:function(){
		this.Tunit();
	  },
	 Tunit:function(){

		 if(!$("div [id^=edit_data_unit]").length){return};
		 
		 $.ajax({
			 type:'GET',
			 url:'/js/units.json',
			 dataType:'json',
			 success:function(data){
				 
				  var x=$("div [id^=edit_data_unit]"),unit=[],nameArr=[];
				  for(var i=0;i<x.length;i++){
					  var id=$(x[i]).attr("id");
					  	  id=id.split("edit_data_unit_")[1];
					  unit.push(id);	  
				  }
				  
				  for(var j=0;j<unit.length;j++){	
					  $.each(data.units, function(i, item){
						  if(unit[j]==item.name){
							  nameArr.push(item);
						  } 
					  })
				  }
				  
				 Gameguideunit.unitContent(nameArr,unit);
				 Gameguideunit.unitTab();
				 Gameguideunit.unitTitle(nameArr);

			 },
			 error:function(){
				$('.edit_data_unit_compile').html('数据错误!');
			 }
		 })
	 },
	 unitContent:function(nameArr,unit){
		 var basicHtml='';
		 var basicArr=[];
		 for(var i=0;i<nameArr.length;i++){
			 
			 basicHtml='<div class="edit_data_unit_con">'+'<div class="edit_data_unit_model"><a href="/unit/'+nameArr[i].name+'/" target="_blank" class="edit_data_unit_viewer" style="background:url('+nameArr[i].statics.cs[0].model_img_src+') repeat-x 0 0"></a></div>'+'<dl class="edit_data_unit_basic"><dt>基本信息</dt>'+'<dd><strong>种族:</strong>'+nameArr[i].statics.bs.race+'</dd>'+'<dd><strong>生命值 :</strong>'+nameArr[i].statics.bs.life+'</dd>'+'<dd><strong>护甲 :</strong>'+nameArr[i].statics.bs.armor_low+'<span>'+nameArr[i].statics.bs.armor_high+'</span></dd>'+
			 '<dd class="edit_data_unit_wapons_'+nameArr[i].name+'"><strong>武器:</strong>';
			 
			 var wapons='';
			 if(nameArr[i].statics.cs[0].content.wapons[0]==undefined){
				 wapons+='-';
			 }else{
				 for(var j=0;j<nameArr[i].statics.cs[0].content.wapons.length;j++){
					 wapons+='<img src="'+nameArr[i].statics.cs[0].content.wapons[j].img_src+'">';
				 }
			 }
			 wapons+= '</dd>'+'<dd class="edit_data_unit_ability_'+nameArr[i].name+'"><strong>技能:</strong>';
			 
			 var ability='';
			 if(nameArr[i].statics.cs[0].content.ability[0]==undefined){
				 ability+='-';
			 }else{
				 for(var k=0;k<nameArr[i].statics.cs[0].content.ability.length;k++){
					 ability+='<img src="'+nameArr[i].statics.cs[0].content.ability[k].img_src+'">';
				 }
			 }
			 ability+='</dd>'+'</dl><dl class="edit_data_unit_production"><dt>生产</dt>'+'<dd><strong>生产设施 :</strong>'+nameArr[i].statics.ps.producer+'</dd>'+
			 '<dd><strong>快捷键 :</strong>'+nameArr[i].statics.ps.hotkey+'</dd>';
			 
			 var requires='';
			 if(nameArr[i].statics.ps.requires==undefined){
				 requires+='<dd><strong>前置设施  :</strong>-</dd>';
			 }else{
				 requires+='<dd><strong>前置设施  :</strong>'+nameArr[i].statics.ps.requires+'</dd>';
			 }
			 
			 requires+= '<dd><strong>成本:</strong><img src="/style/images/unit/icon-mineral.gif">'+nameArr[i].statics.ps.mineral+'<img class="vespene" alt="" src="/style/images/unit/icon-vespene-terran.gif">'+nameArr[i].statics.ps.vespene+'</dd>'+
			 '<dd><strong>占用补给 :</strong><img src="/style/images/unit/icon-supply-terran.gif">'+nameArr[i].statics.ps.supply+'</dd>'+
			 '<dd><strong>生产时间 :</strong><img src="/style/images/unit/icon-buildtime-terran.gif">'+nameArr[i].statics.ps.buildTime+'</dd>'+
			 '</dl></div>';
			 basicHtml=basicHtml+wapons+ability+requires;
			 basicArr.push(basicHtml);
		 }
		 Gameguideunit.unitUiSet(basicArr);
	 },
	 unitUiSet:function(basicArr){
		 var tabBox=$('.edit_data_unit_tabBox'),tabBoxLength=[],num=0;
		 for(var i=0;i<tabBox.length;i++){
			 var l=tabBox.eq(i).children().length;
			 tabBoxLength.push(l)
		 }
		 for (var j = 0;j<tabBoxLength.length;j++){
			 var len;
			 if(j!=0){
				 len=tabBoxLength[j-1];
				 num+=len;
			 }
			 var lenEnd=tabBoxLength[j];
			 var conBox=$('.edit_data_unit_conBox');
			 conBox.eq(j).html(basicArr.slice(num , num+lenEnd).join(''));			 
			 conBox.eq(j).find('.edit_data_unit_con').eq(0).show();
		 }
	 },
	 unitTitle:function(nameArr){
		 var titleHtml='',floatHtml='',n=0,x=10,y=20;
		 
		 $('.edit_data_unit_con').each(function(i){
			 $(this).mouseover(function(){
				n=i;
			 })
		 })
		 
		 for(var i=0;i<nameArr.length;i++){
			$('.edit_data_unit_wapons_'+nameArr[i].name+' img').each(function(j){
				$(this).mouseover(function(e){
					 floatHtml=$('<div class="edit_data_unit_float f-cb" id="edit_data_unit_float"><span class="edit_data_unit_left"></span><h4></h4><span class="edit_data_unit_right"></span></div>');
					 floatHtml.appendTo('body');
					
					titleHtml=nameArr[n].statics.cs[0].content.wapons[j].title;
					$('#edit_data_unit_float').show().css({"left":(e.pageX+x)+"px","top":(e.pageY+y)+"px"});
					$('#edit_data_unit_float h4').html(titleHtml);
				}).mousemove(function(e){
					$('#edit_data_unit_float').css({"left":(e.pageX+x)+"px","top":(e.pageY+y)+"px"});
				}).mouseout(function(e){
					$('#edit_data_unit_float').remove();
				})
			})
			
			$('.edit_data_unit_ability_'+nameArr[i].name+' img').each(function(j){
				$(this).mouseover(function(e){
					 floatHtml=$('<div class="edit_data_unit_float f-cb" id="edit_data_unit_float"><span class="edit_data_unit_left"></span><h4></h4><span class="edit_data_unit_right"></span></div>');
					 floatHtml.appendTo('body');
					
					titleHtml=nameArr[n].statics.cs[0].content.ability[j].title;
					$('#edit_data_unit_float').show().css({"left":(e.pageX+x)+"px","top":(e.pageY+y)+"px"});
					$('#edit_data_unit_float h4').html(titleHtml);
				}).mousemove(function(e){
					$('#edit_data_unit_float').css({"left":(e.pageX+x)+"px","top":(e.pageY+y)+"px"});
				}).mouseout(function(e){
					$('#edit_data_unit_float').remove();
				})
			})

		 } 
	 },
	 unitTab:function(){
		 $('.edit_data_unit_compile ul li').each(function(i){
			 $(this).click(function(){
				 $(this).addClass('edit_data_unit_active').siblings().removeClass('edit_data_unit_active');
				 $('.edit_data_unit_con').eq(i).show().siblings().hide();
			 })
		 })
	 },
	_:null
};


