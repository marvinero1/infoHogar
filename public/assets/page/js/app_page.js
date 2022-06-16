/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);


/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 17.11.2014
*********************************************/


/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.6
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);return aR};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if(I()||V()){bc=aF(bd,bb,l)}else{if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.allowPageScroll===m||aX()){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));



if(typeof(console) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
};

if (window.tplogs==true)
	try {
		console.groupCollapsed("ThemePunch GreenSocks Logs");
	} catch(e) { }


var oldgs = window.GreenSockGlobals;
	oldgs_queue = window._gsQueue;
	
var punchgs = window.GreenSockGlobals = {};

if (window.tplogs==true)
	try {
		console.info("Build GreenSock SandBox for ThemePunch Plugins");
		console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
	} catch(e) {}

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,l=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},h=l("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),c={},p=function(s,r,n,a){this.sc=c[s]?c[s].sc:[],c[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(h){for(var _,u,m,f,d=r.length,v=d;--d>-1;)(_=c[r[d]]||new p(r[d],[])).gsClass?(o[d]=_.gsClass,v--):h&&_.sc.push(this);if(0===v&&n)for(u=("com.greensock."+s).split("."),m=u.pop(),f=l(u.join("."))[m]=this.gsClass=n.apply(n,o),a&&(i[m]=f,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return f}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=f)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},v=h._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var g=[0,0,1,1],T=[],y=v("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?g.concat(e):g},!0),w=y.map={},P=y.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?v("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=y.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,P(new y(null,null,1,r),n,"easeOut",!0),P(new y(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),P(new y(null,null,3,r),n,"easeInOut");w.linear=h.easing.Linear.easeIn,w.swing=h.easing.Quad.easeInOut;var b=v("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)n=h[l],n.c===e&&n.s===i?h.splice(l,1):0===_&&r>n.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var k=t.requestAnimationFrame,A=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},x=S();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!k;)k=t[s[r]+"RequestAnimationFrame"],A=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];v("Ticker",function(t,e){var i,s,r,n,l,h=this,u=S(),f=e!==!1&&k,c=500,p=33,d=function(t){var e,a,o=S()-x;o>c&&(u+=o-p),x+=o,h.time=(x-u)/1e3,e=h.time-l,(!i||e>0||t===!0)&&(h.frame++,l+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(d)),a&&h.dispatchEvent("tick")};b.call(h),h.time=h.frame=0,h.tick=function(){d(!0)},h.lagSmoothing=function(t,e){c=t||1/_,p=Math.min(e,c,0)},h.sleep=function(){null!=r&&(f&&A?A(r):clearTimeout(r),s=m,r=null,h===a&&(o=!1))},h.wake=function(){null!==r?h.sleep():h.frame>10&&(x=S()-c+5),s=0===i?m:f&&k?k:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===a&&(o=!0),d(2)},h.fps=function(t){return arguments.length?(i=t,n=1/(i||60),l=this.time+n,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),f=t,h.fps(i),void 0):f},h.fps(t),setTimeout(function(){f&&(!r||5>h.frame)&&h.useRAF(!1)},1500)}),n=h.Ticker.prototype=new h.events.EventDispatcher,n.constructor=h.Ticker;var R=v("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,B){o||a.wake();var i=this.vars.useFrames?q:B;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=R.ticker=new h.Ticker,n=R.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var C=function(){o&&S()-x>2e3&&a.wake(),setTimeout(C,2e3)};C(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),z.length&&M())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){o||t||a.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var D=v("core.SimpleTimeline",function(t){R.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=D.prototype=new R,n.constructor=D,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var I=v("TweenLite",function(e,i,s){if(R.call(this,i,s),this.render=I.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:I.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?Q[I.defaultOverwrite]:"number"==typeof l?l>>0:Q[l],(o||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=$(n,this,!1),1===l&&this._siblings[r].length>1&&H(n,this,null,1,this._siblings[r])):(n=a[r--]=I.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=$(e,this,!1),1===l&&this._siblings.length>1&&H(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),E=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},O=function(t,e){var i,s={};for(i in t)G[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!U[i]||U[i]&&U[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=I.prototype=new R,n.constructor=I,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,I.version="1.14.2",I.defaultEase=n._ease=new y(null,null,1,1),I.defaultOverwrite="auto",I.ticker=a,I.autoSleep=!0,I.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},I.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(I.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var z=[],L={},N=I._internals={isArray:f,isSelector:E,lazyTweens:z},U=I._plugins={},F=N.tweenLookup={},j=0,G=N.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1},Q={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},q=R._rootFramesTimeline=new D,B=R._rootTimeline=new D,M=N.lazyRender=function(){var t,e=z.length;for(L={};--e>-1;)t=z[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);z.length=0};B._startTime=a.time,q._startTime=a.frame,B._active=q._active=!0,setTimeout(M,1),R._updateRoot=I.render=function(){var t,e,i;if(z.length&&M(),B.render((a.time-B._startTime)*B._timeScale,!1,!1),q.render((a.frame-q._startTime)*q._timeScale,!1,!1),z.length&&M(),!(a.frame%120)){for(i in F){for(e=F[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete F[i]}if(i=B._first,(!i||i._paused)&&I.autoSleep&&!q._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",R._updateRoot);var $=function(t,e,i){var s,r,n=t._gsTweenID;if(F[n||(t._gsTweenID=n="t"+j++)]||(F[n]={target:t,tweens:[]}),e&&(s=F[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return F[n].tweens},K=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=I.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},H=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||K(o,e)&&o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var h,u=e._startTime+_,m=[],f=0,c=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||J(e,0,c),0===J(o,h,c)&&(m[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((c||!o._initted)&&2e-10>=u-o._startTime||(m[f++]=o)));for(n=f;--n>-1;)if(o=m[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!K(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},J=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,l=!!n.immediateRender,h=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=l&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=I.to(this.target,0,r),l)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(l=!1),i={};for(s in n)G[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&n.lazy!==!1,i.immediateRender=l,this._startAt=I.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=h=h?h instanceof y?h:"function"==typeof h?new y(h,n.easeParams):w[h]||I.defaultEase:I.defaultEase,n.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&I._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;L[e._gsTweenID]&&M(),this.vars.css||e.style&&e!==t&&e.nodeType&&U.css&&this.vars.autoCSS!==!1&&O(this.vars,e);for(n in this.vars){if(_=this.vars[n],G[n])_&&(_ instanceof Array||_.push&&f(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(U[n]&&(l=new U[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=h={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},h.s=h.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&H(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(L[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>h||h===_)&&h!==t&&(i=!0,h>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0&&h!==_)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,m=this._easeType,f=this._easePower;(1===m||3===m&&u>=.5)&&(u=1-u),3===m&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===m?1-u:2===m?u:.5>t/l?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,z.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||T))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||T)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||T),0===l&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:I.selector(e)||e;var s,r,n,a,o,l,h,_,u;if((f(e)||E(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s])&&(l=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(I.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u||(u=[]),u.push(n));if(!K(this,i,e,u))return!1}for(n in h)(a=o[n])&&(a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},n.invalidate=function(){return this._notifyPluginsOfEnabled&&I._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],R.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=$(s[i],this,!0);else this._siblings=$(this.target,this,!0)}return R.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?I._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},I.to=function(t,e,i){return new I(t,e,i)},I.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new I(t,e,i)},I.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new I(t,e,s)},I.delayedCall=function(t,e,i,s,r){return new I(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},I.set=function(t,e){return new I(t,0,e)},I.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:I.selector(t)||t;var i,s,r,n;if((f(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(I.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=$(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},I.killTweensOf=I.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=I.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var V=v("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=V.prototype},!0);if(n=V.prototype,V.version="1.10.1",V.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},I._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},V.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===V.API&&(U[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=v("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){V.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new V(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,V.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in c)c[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}})("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-18
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],o(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));o(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=n.isSelector,o=n.isArray,h=n.lazyTweens,l=n.lazyRender,_=[],u=_gsScope._gsDefine.globals,c=function(t){var e,i={};for(e in t)i[e]=t[e];return i},p=function(t,e,i,s){var r=t._timeline._totalTime;(e||!this._forcingPlayhead)&&(t._timeline.pause(t._startTime),e&&e.apply(s||t._timeline,i||_),this._forcingPlayhead&&t._timeline.seek(r))},f=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=s.prototype=new e;return s.version="1.14.2",m.constructor=s,m.kill()._gc=m._forcingPlayhead=!1,m.to=function(t,e,s,r){var n=s.repeat&&u.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},m.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},m.fromTo=function(t,e,s,r,n){var a=r.repeat&&u.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},m.staggerTo=function(t,e,r,n,o,h,l,_){var u,p=new s({onComplete:h,onCompleteParams:l,onCompleteScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],a(t)&&(t=f(t)),n=n||0,0>n&&(t=f(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=c(r.startAt)),p.to(t[u],e,c(r),u*n);return this.add(p,o)},m.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},m.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},m.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},m.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},m.add=function(r,n,a,h){var l,_,u,c,p,f;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&o(r)){for(a=a||"normal",h=h||0,l=n,_=r.length,u=0;_>u;u++)o(c=r[u])&&(c=new s({tweens:c})),this.add(c,l),"string"!=typeof c&&"function"!=typeof c&&("sequence"===a?l=c._startTime+c.totalDuration()/c._timeScale:"start"===a&&(c._startTime-=c.delay())),l+=h;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(p=this,f=p.rawTime()>r._startTime;p._timeline;)f&&p._timeline.smoothChildTiming?p.totalTime(p._totalTime,!0):p._gc&&p._enabled(!0,!1),p=p._timeline;return this},m.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&o(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},m._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},m.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},m.insert=m.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},m.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},m.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},m.addPause=function(t,e,i,s){return this.call(p,["{self}",e,i,s],this,t)},m.removeLabel=function(t){return delete this._labels[t],this},m.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},m._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&o(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},m.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},m.stop=function(){return this.paused(!0)},m.gotoAndPlay=function(t,e){return this.play(t,e)},m.gotoAndStop=function(t,e){return this.pause(t,e)},m.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,u,c=this._dirty?this.totalDuration():this._totalDuration,p=this._time,f=this._startTime,m=this._timeScale,d=this._paused;if(t>=c?(this._totalTime=this._time=c,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(u=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=c+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==p||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,this._rawPrevTime>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==p&&this._first||i||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==p&&t>0&&(this._active=!0),0===p&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_)),this._time>=p)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);)(s._active||p>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(h.length&&l(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_))),o&&(this._gc||(f===this._startTime||m!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(n&&(h.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||_)))}},m._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},m.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},m.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},m.recent=function(){return this._recent},m._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},m.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},m._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},m.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},m.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},m._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},m.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},m.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},m.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},m.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},m.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}("TimelineLite");

/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},p=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),p=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)i=f?Math.random():1/u*p,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:p%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),p=u;--p>-1;)a=l[p],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,r,s,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},l=a.prototype=new t("css");l.constructor=a,a.version="1.14.2",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var h,u,f,p,_,c,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,m=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|e[+-]\d+)[^0-9]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,T=/opacity:([^;]*)/i,w=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,C=function(t,e){return e.toUpperCase()},k=/(?:Left|Right|Width)/i,O=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,A=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,L=180/Math.PI,N={},z=document,X=z.createElement("div"),I=z.createElement("img"),E=a._internals={_specialProps:o},F=navigator.userAgent,Y=function(){var t,e=F.indexOf("Android"),i=z.createElement("div");return f=-1!==F.indexOf("Safari")&&-1===F.indexOf("Chrome")&&(-1===e||Number(F.substr(e+8,1))>3),_=f&&6>Number(F.substr(F.indexOf("Version/")+8,1)),p=-1!==F.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(F))&&(c=parseFloat(RegExp.$1)),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),B=function(t){return x.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},U=function(t){window.console&&console.log(t)},j="",W="",V=function(t,e){e=e||X;var i,r,s=e.style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;--r>-1&&void 0===s[i[r]+t];);return r>=0?(W=3===r?"ms":i[r],j="-"+W.toLowerCase()+"-",W+t):null},q=z.defaultView?z.defaultView.getComputedStyle:function(){},H=a.getStyle=function(t,e,i,r,s){var n;return Y||"opacity"!==e?(!r&&t.style[e]?n=t.style[e]:(i=i||q(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(P,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):B(t)},G=E.convertToPixels=function(t,i,r,s,n){if("px"===s||!s)return r;if("auto"===s||!r)return 0;var o,l,h,u=k.test(i),f=t,p=X.style,_=0>r;if(_&&(r=-r),"%"===s&&-1!==i.indexOf("border"))o=r/100*(u?t.clientWidth:t.clientHeight);else{if(p.cssText="border:0 solid red;position:"+H(t,"position")+";line-height:0;","%"!==s&&f.appendChild)p[u?"borderLeftWidth":"borderTopWidth"]=r+s;else{if(f=t.parentNode||z.body,l=f._gsCache,h=e.ticker.frame,l&&u&&l.time===h)return l.width*r/100;p[u?"width":"height"]=r+s}f.appendChild(X),o=parseFloat(X[u?"offsetWidth":"offsetHeight"]),f.removeChild(X),u&&"%"===s&&a.cacheWidths!==!1&&(l=f._gsCache=f._gsCache||{},l.time=h,l.width=100*(o/r)),0!==o||n||(o=G(t,i,r,s,!0))}return _?-o:o},Q=E.calculateOffset=function(t,e,i){if("absolute"!==H(t,"position",i))return 0;var r="left"===e?"Left":"Top",s=H(t,"margin"+r,i);return t["offset"+r]-(G(t,e,parseFloat(s),s.replace(y,""))||0)},Z=function(t,e){var i,r,s={};if(e=e||q(t,null))if(i=e.length)for(;--i>-1;)s[e[i].replace(S,C)]=e.getPropertyValue(e[i]);else for(i in e)s[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===s[i]&&(s[i.replace(S,C)]=e[i]);return Y||(s.opacity=B(t)),r=Ae(t,e,!1),s.rotation=r.rotation,s.skewX=r.skewX,s.scaleX=r.scaleX,s.scaleY=r.scaleY,s.x=r.x,s.y=r.y,be&&(s.z=r.z,s.rotationX=r.rotationX,s.rotationY=r.rotationY,s.scaleZ=r.scaleZ),s.filters&&delete s.filters,s},$=function(t,e,i,r,s){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Q(t,a),void 0!==h[a]&&(o=new fe(h,a,h[a],o)));if(r)for(a in r)"className"!==a&&(l[a]=r[a]);return{difs:l,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=K[e],n=s.length;for(i=i||q(t,null);--n>-1;)r-=parseFloat(H(t,"padding"+s[n],i,!0))||0,r-=parseFloat(H(t,"border"+s[n]+"Width",i,!0))||0;return r},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),r=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],s=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==s?s="0":"center"===s&&(s="50%"),("center"===r||isNaN(parseFloat(r))&&-1===(r+"").indexOf("="))&&(r="50%"),e&&(e.oxp=-1!==r.indexOf("%"),e.oyp=-1!==s.indexOf("%"),e.oxr="="===r.charAt(1),e.oyr="="===s.charAt(1),e.ox=parseFloat(r.replace(v,"")),e.oy=parseFloat(s.replace(v,""))),r+" "+s+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},re=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},se=function(t,e,i,r){var s,n,a,o,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(s=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:L)-("="===t.charAt(1)?0:e),n.length&&(r&&(r[i]=e+a),-1!==t.indexOf("short")&&(a%=s,a!==a%(s/2)&&(a=0>a?a+s:a-s)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*s)%s-(0|a/s)*s:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*s)%s-(0|a/s)*s)),o=e+a),l>o&&o>-l&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=a.parseColor=function(t){var e,i,r,s,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),r=t.charAt(3),t="#"+e+e+i+i+r+r),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),s=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(s+1/3,e,i),t[1]=ae(s,e,i),t[2]=ae(s-1/3,e,i),t):(t=t.match(d)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},le="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in ne)le+="|"+l+"\\b";le=RegExp(le+")","gi");var he=function(t,e,i,r){if(null==t)return function(t){return t};var s,n=e?(t.match(le)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",u=a.length,f=u>0?a[0].replace(d,""):"";return u?s=e?function(t){var e,p,_,c;if("number"==typeof t)t+=f;else if(r&&D.test(t)){for(c=t.replace(D,"|").split("|"),_=0;c.length>_;_++)c[_]=s(c[_]);return c.join(",")}if(e=(t.match(le)||[n])[0],p=t.split(e).join("").match(g)||[],_=p.length,u>_--)for(;u>++_;)p[_]=i?p[0|(_-1)/2]:a[_];return o+p.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=f;else if(r&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=s(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,u>p--)for(;u>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(h)+l}:function(t){return t}},ue=function(t){return t=t.split(","),function(e,i,r,s,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return s.parse(e,o,n,a)}},fe=(E._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,s,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(s=i.xs0+i.s+i.xs1,r=1;i.l>r;r++)s+=i["xn"+r]+i["xs"+(r+1)];i.e=s}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,r,s){this.t=t,this.p=e,this.v=i,this.r=s,r&&(r._prev=this,this._next=r)}),pe=(E._parseToProxy=function(t,e,i,r,s,n){var a,o,l,h,u,f=r,p={},_={},c=i._transform,d=N;for(i._transform=null,N=e,r=u=i.parse(t,e,r,s),N=d,n&&(i._transform=c,f&&(f._prev=null,f._prev&&(f._prev._next=null)));r&&r!==f;){if(1>=r.type&&(o=r.p,_[o]=r.s+r.c,p[o]=r.s,n||(h=new fe(r,"s",o,h,r.r),r.c=0),1===r.type))for(a=r.l;--a>0;)l="xn"+a,o=r.p+"_"+l,_[o]=r.data[l],p[o]=r[l],n||(h=new fe(r,l,o,h,r.rxp[l]));r=r._next}return{proxy:p,end:_,firstMPT:h,pt:u}},E.CSSPropTween=function(t,e,r,s,a,o,l,h,u,f,p){this.t=t,this.p=e,this.s=r,this.c=s,this.n=l||e,t instanceof pe||n.push(this.n),this.r=h,this.type=o||0,u&&(this.pr=u,i=!0),this.b=void 0===f?r:f,this.e=void 0===p?r+s:p,a&&(this._next=a,a._prev=this)}),_e=a.parseComplex=function(t,e,i,r,s,n,a,o,l,u){i=i||n||"",a=new pe(t,e,0,0,a,u?2:1,null,!1,o,i,r),r+="";var f,p,_,c,g,v,y,x,T,w,P,S,R=i.split(", ").join(",").split(" "),C=r.split(", ").join(",").split(" "),k=R.length,O=h!==!1;for((-1!==r.indexOf(",")||-1!==i.indexOf(","))&&(R=R.join(" ").replace(D,", ").split(" "),C=C.join(" ").replace(D,", ").split(" "),k=R.length),k!==C.length&&(R=(n||"").split(" "),k=R.length),a.plugin=l,a.setRatio=u,f=0;k>f;f++)if(c=R[f],g=C[f],x=parseFloat(c),x||0===x)a.appendXtra("",x,ie(g,x),g.replace(m,""),O&&-1!==g.indexOf("px"),!0);else if(s&&("#"===c.charAt(0)||ne[c]||b.test(c)))S=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),T=c.length+g.length>6,T&&!Y&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(C[f]).join("transparent")):(Y||(T=!1),a.appendXtra(T?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],T?",":S,!0),T&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,S,!1)));else if(v=c.match(d)){if(y=g.match(m),!y||y.length!==v.length)return a;for(_=0,p=0;v.length>p;p++)P=v[p],w=c.indexOf(P,_),a.appendXtra(c.substr(_,w-_),Number(P),ie(y[p],P),"",O&&"px"===c.substr(w+P.length,2),0===p),_=w+P.length;a["xs"+a.l]+=c.substr(_)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==r.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,f=1;a.l>f;f++)S+=a["xs"+f]+a.data["xn"+f];a.e=S+a["xs"+f]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(l=pe.prototype,l.l=l.pr=0;--ce>0;)l["xn"+ce]=0,l["xs"+ce]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,r,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=r||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=s,a)):(a["xs"+o]+=e+(r||""),a)};var de=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||he(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},me=E._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,s,n=t.split(","),a=e.defaultValue;for(i=i||[a],r=0;n.length>r;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||a,s=new de(n[r],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";me(t,{parser:function(t,i,r,s,n,a,l){var h=(_gsScope.GreenSockGlobals||_gsScope).com.greensock.plugins[e];return h?(h._cssRegister(),o[r].parse(t,i,r,s,n,a,l)):(U("Error: "+e+" js file not loaded."),n)}})}};l=de.prototype,l.parseComplex=function(t,e,i,r,s,n){var a,o,l,h,u,f,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),l=i.replace(D,"|").split("|")):p&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,p&&(u=e.indexOf(p),f=i.indexOf(p),u!==f&&(i=-1===f?l:o,i[a]+=" "+p));e=o.join(", "),i=l.join(", ")}return _e(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,s,n)},l.parse=function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(H(t,this.p,s,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){me(t,{parser:function(t,r,s,n,a,o){var l=new pe(t,s,0,0,a,2,s,!1,i);return l.plugin=o,l.setRatio=e(t,r,n._tween,s),l},priority:i})};var ve,ye="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),xe=V("transform"),Te=j+"transform",we=V("transformOrigin"),be=null!==V("perspective"),Pe=E.Transform=function(){this.skewY=0},Se=window.SVGElement,Re=function(t,e,i){var r,s=z.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(r in i)s.setAttributeNS(null,r.replace(n,"$1-$2").toLowerCase(),i[r]);return e.appendChild(s),s},Ce=document.documentElement,ke=function(){var t,e,i,r=c||/Android/i.test(F)&&!window.chrome;return z.createElementNS&&!r&&(t=Re("svg",Ce),e=Re("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().left,e.style[we]="50% 50%",e.style[xe]="scale(0.5,0.5)",r=i===e.getBoundingClientRect().left,Ce.removeChild(t)),r}(),Oe=function(t,e,i){var r=t.getBBox();e=ee(e).split(" "),i.xOrigin=(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*r.width:parseFloat(e[0]))+r.x,i.yOrigin=(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*r.height:parseFloat(e[1]))+r.y},Ae=E.getTransform=function(t,e,i,r){if(t._gsTransform&&i&&!r)return t._gsTransform;var n,o,l,h,u,f,p,_,c,d,m,g,v,y=i?t._gsTransform||new Pe:new Pe,x=0>y.scaleX,T=2e-5,w=1e5,b=179.99,P=b*M,S=be?parseFloat(H(t,we,e,!1,"0 0 0").split(" ")[2])||y.zOrigin||0:0,R=parseFloat(a.defaultTransformPerspective)||0;if(xe?n=H(t,Te,e,!0):t.currentStyle&&(n=t.currentStyle.filter.match(O),n=n&&4===n.length?[n[0].substr(4),Number(n[2].substr(4)),Number(n[1].substr(4)),n[3].substr(4),y.x||0,y.y||0].join(","):""),n&&"none"!==n&&"matrix(1, 0, 0, 1, 0, 0)"!==n){for(o=(n||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],l=o.length;--l>-1;)h=Number(o[l]),o[l]=(u=h-(h|=0))?(0|u*w+(0>u?-.5:.5))/w+h:h;if(16===o.length){var C=o[8],k=o[9],A=o[10],D=o[12],N=o[13],z=o[14];if(y.zOrigin&&(z=-y.zOrigin,D=C*z-o[12],N=k*z-o[13],z=A*z+y.zOrigin-o[14]),!i||r||null==y.rotationX){var X,I,E,F,Y,B,U,j=o[0],W=o[1],V=o[2],q=o[3],G=o[4],Q=o[5],Z=o[6],$=o[7],K=o[11],J=Math.atan2(Z,A),te=-P>J||J>P;y.rotationX=J*L,J&&(F=Math.cos(-J),Y=Math.sin(-J),X=G*F+C*Y,I=Q*F+k*Y,E=Z*F+A*Y,C=G*-Y+C*F,k=Q*-Y+k*F,A=Z*-Y+A*F,K=$*-Y+K*F,G=X,Q=I,Z=E),J=Math.atan2(C,j),y.rotationY=J*L,J&&(B=-P>J||J>P,F=Math.cos(-J),Y=Math.sin(-J),X=j*F-C*Y,I=W*F-k*Y,E=V*F-A*Y,k=W*Y+k*F,A=V*Y+A*F,K=q*Y+K*F,j=X,W=I,V=E),J=Math.atan2(W,Q),y.rotation=J*L,J&&(U=-P>J||J>P,F=Math.cos(-J),Y=Math.sin(-J),j=j*F+G*Y,I=W*F+Q*Y,Q=W*-Y+Q*F,Z=V*-Y+Z*F,W=I),U&&te?y.rotation=y.rotationX=0:U&&B?y.rotation=y.rotationY=0:B&&te&&(y.rotationY=y.rotationX=0),y.scaleX=(0|Math.sqrt(j*j+W*W)*w+.5)/w,y.scaleY=(0|Math.sqrt(Q*Q+k*k)*w+.5)/w,y.scaleZ=(0|Math.sqrt(Z*Z+A*A)*w+.5)/w,y.skewX=0,y.perspective=K?1/(0>K?-K:K):0,y.x=D,y.y=N,y.z=z}}else if(!(be&&!r&&o.length&&y.x===o[4]&&y.y===o[5]&&(y.rotationX||y.rotationY)||void 0!==y.x&&"none"===H(t,"display",e))){var ee=o.length>=6,ie=ee?o[0]:1,re=o[1]||0,se=o[2]||0,ne=ee?o[3]:1;y.x=o[4]||0,y.y=o[5]||0,f=Math.sqrt(ie*ie+re*re),p=Math.sqrt(ne*ne+se*se),_=ie||re?Math.atan2(re,ie)*L:y.rotation||0,c=se||ne?Math.atan2(se,ne)*L+_:y.skewX||0,d=f-Math.abs(y.scaleX||0),m=p-Math.abs(y.scaleY||0),Math.abs(c)>90&&270>Math.abs(c)&&(x?(f*=-1,c+=0>=_?180:-180,_+=0>=_?180:-180):(p*=-1,c+=0>=c?180:-180)),g=(_-y.rotation)%180,v=(c-y.skewX)%180,(void 0===y.skewX||d>T||-T>d||m>T||-T>m||g>-b&&b>g&&false|g*w||v>-b&&b>v&&false|v*w)&&(y.scaleX=f,y.scaleY=p,y.rotation=_,y.skewX=c),be&&(y.rotationX=y.rotationY=y.z=0,y.perspective=R,y.scaleZ=1)}y.zOrigin=S;for(l in y)T>y[l]&&y[l]>-T&&(y[l]=0)}else y={x:0,y:0,z:0,scaleX:1,scaleY:1,scaleZ:1,skewX:0,skewY:0,perspective:R,rotation:0,rotationX:0,rotationY:0,zOrigin:0};return i&&(t._gsTransform=y),y.svg=Se&&t instanceof Se&&t.parentNode instanceof Se,y.svg&&(Oe(t,H(t,we,s,!1,"50% 50%")+"",y),ve=a.useSVGTransformAttr||ke),y.xPercent=y.yPercent=0,y},De=function(t){var e,i,r=this.data,s=-r.rotation*M,n=s+r.skewX*M,a=1e5,o=(0|Math.cos(s)*r.scaleX*a)/a,l=(0|Math.sin(s)*r.scaleX*a)/a,h=(0|Math.sin(n)*-r.scaleY*a)/a,u=(0|Math.cos(n)*r.scaleY*a)/a,f=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,f.filter="";var _,d,m=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,T="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+u,w=r.x+m*r.xPercent/100,b=r.y+g*r.yPercent/100;if(null!=r.ox&&(_=(r.oxp?.01*m*r.ox:r.ox)-m/2,d=(r.oyp?.01*g*r.oy:r.oy)-g/2,w+=_-(_*o+d*l),b+=d-(_*h+d*u)),v?(_=m/2,d=g/2,T+=", Dx="+(_-(_*o+d*l)+w)+", Dy="+(d-(_*h+d*u)+b)+")"):T+=", sizingMethod='auto expand')",f.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(A,T):T+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===T.indexOf("Dx=0, Dy=0")||x.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&f.removeAttribute("filter")),!v){var P,S,R,C=8>c?1:-1;for(_=r.ieOffsetX||0,d=r.ieOffsetY||0,r.ieOffsetX=Math.round((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+w),r.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),ce=0;4>ce;ce++)S=J[ce],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):G(this.t,S,parseFloat(P),P.replace(y,""))||0,R=i!==r[S]?2>ce?-r.ieOffsetX:-r.ieOffsetY:2>ce?_-r.ieOffsetX:d-r.ieOffsetY,f[S]=(r[S]=Math.round(i-R*(0===ce||2===ce?1:C)))+"px"}}},Me=E.set3DTransformRatio=function(t){var e,i,r,s,n,a,o,l,h,u,f,_,c,d,m,g,v,y,x,T,w,b,P,S=this.data,R=this.t.style,C=S.rotation*M,k=S.scaleX,O=S.scaleY,A=S.scaleZ,D=S.x,L=S.y,N=S.z,z=S.perspective;if(!(1!==t&&0!==t||"auto"!==S.force3D||S.rotationY||S.rotationX||1!==A||z||N))return Le.call(this,t),void 0;if(p){var X=1e-4;X>k&&k>-X&&(k=A=2e-5),X>O&&O>-X&&(O=A=2e-5),!z||S.z||S.rotationX||S.rotationY||(z=0)}if(C||S.skewX)y=Math.cos(C),x=Math.sin(C),e=y,n=x,S.skewX&&(C-=S.skewX*M,y=Math.cos(C),x=Math.sin(C),"simple"===S.skewType&&(T=Math.tan(S.skewX*M),T=Math.sqrt(1+T*T),y*=T,x*=T)),i=-x,a=y;else{if(!(S.rotationY||S.rotationX||1!==A||z||S.svg))return R[xe]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+D+"px,"+L+"px,"+N+"px)"+(1!==k||1!==O?" scale("+k+","+O+")":""),void 0;e=a=1,i=n=0}f=1,r=s=o=l=h=u=_=c=d=0,m=z?-1/z:0,g=S.zOrigin,v=1e5,C=S.rotationY*M,C&&(y=Math.cos(C),x=Math.sin(C),h=f*-x,c=m*-x,r=e*x,o=n*x,f*=y,m*=y,e*=y,n*=y),C=S.rotationX*M,C&&(y=Math.cos(C),x=Math.sin(C),T=i*y+r*x,w=a*y+o*x,b=u*y+f*x,P=d*y+m*x,r=i*-x+r*y,o=a*-x+o*y,f=u*-x+f*y,m=d*-x+m*y,i=T,a=w,u=b,d=P),1!==A&&(r*=A,o*=A,f*=A,m*=A),1!==O&&(i*=O,a*=O,u*=O,d*=O),1!==k&&(e*=k,n*=k,h*=k,c*=k),g&&(_-=g,s=r*_,l=o*_,_=f*_+g),S.svg&&(s+=S.xOrigin-(S.xOrigin*e+S.yOrigin*i),l+=S.yOrigin-(S.xOrigin*n+S.yOrigin*a)),s=(T=(s+=D)-(s|=0))?(0|T*v+(0>T?-.5:.5))/v+s:s,l=(T=(l+=L)-(l|=0))?(0|T*v+(0>T?-.5:.5))/v+l:l,_=(T=(_+=N)-(_|=0))?(0|T*v+(0>T?-.5:.5))/v+_:_,R[xe]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(")+[(0|e*v)/v,(0|n*v)/v,(0|h*v)/v,(0|c*v)/v,(0|i*v)/v,(0|a*v)/v,(0|u*v)/v,(0|d*v)/v,(0|r*v)/v,(0|o*v)/v,(0|f*v)/v,(0|m*v)/v,s,l,_,z?1+-_/z:1].join(",")+")"},Le=E.set2DTransformRatio=function(t){var e,i,r,s,n,a,o,l,h,u,f,p=this.data,_=this.t,c=_.style,d=p.x,m=p.y;return!(p.rotationX||p.rotationY||p.z||p.force3D===!0||"auto"===p.force3D&&1!==t&&0!==t)||p.svg&&ve||!be?(s=p.scaleX,n=p.scaleY,p.rotation||p.skewX||p.svg?(e=p.rotation*M,i=e-p.skewX*M,r=1e5,a=Math.cos(e)*s,o=Math.sin(e)*s,l=Math.sin(i)*-n,h=Math.cos(i)*n,p.svg&&(d+=p.xOrigin-(p.xOrigin*a+p.yOrigin*l),m+=p.yOrigin-(p.xOrigin*o+p.yOrigin*h),f=1e-6,f>d&&d>-f&&(d=0),f>m&&m>-f&&(m=0)),u=(0|a*r)/r+","+(0|o*r)/r+","+(0|l*r)/r+","+(0|h*r)/r+","+d+","+m+")",p.svg&&ve?_.setAttribute("transform","matrix("+u):c[xe]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+u):c[xe]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+s+",0,0,"+n+","+d+","+m+")",void 0):(this.setRatio=Me,Me.call(this,t),void 0)};me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(t,e,i,r,n,o,l){if(r._transform)return n;var h,u,f,p,_,c,d,m=r._transform=Ae(t,s,!0,l.parseTransform),g=t.style,v=1e-6,y=ye.length,x=l,T={};if("string"==typeof x.transform&&xe)f=X.style,f[xe]=x.transform,f.display="block",f.position="absolute",z.body.appendChild(X),h=Ae(X,null,!1),z.body.removeChild(X);else if("object"==typeof x){if(h={scaleX:re(null!=x.scaleX?x.scaleX:x.scale,m.scaleX),scaleY:re(null!=x.scaleY?x.scaleY:x.scale,m.scaleY),scaleZ:re(x.scaleZ,m.scaleZ),x:re(x.x,m.x),y:re(x.y,m.y),z:re(x.z,m.z),xPercent:re(x.xPercent,m.xPercent),yPercent:re(x.yPercent,m.yPercent),perspective:re(x.transformPerspective,m.perspective)},d=x.directionalRotation,null!=d)if("object"==typeof d)for(f in d)x[f]=d[f];else x.rotation=d;"string"==typeof x.x&&-1!==x.x.indexOf("%")&&(h.x=0,h.xPercent=re(x.x,m.xPercent)),"string"==typeof x.y&&-1!==x.y.indexOf("%")&&(h.y=0,h.yPercent=re(x.y,m.yPercent)),h.rotation=se("rotation"in x?x.rotation:"shortRotation"in x?x.shortRotation+"_short":"rotationZ"in x?x.rotationZ:m.rotation,m.rotation,"rotation",T),be&&(h.rotationX=se("rotationX"in x?x.rotationX:"shortRotationX"in x?x.shortRotationX+"_short":m.rotationX||0,m.rotationX,"rotationX",T),h.rotationY=se("rotationY"in x?x.rotationY:"shortRotationY"in x?x.shortRotationY+"_short":m.rotationY||0,m.rotationY,"rotationY",T)),h.skewX=null==x.skewX?m.skewX:se(x.skewX,m.skewX),h.skewY=null==x.skewY?m.skewY:se(x.skewY,m.skewY),(u=h.skewY-m.skewY)&&(h.skewX+=u,h.rotation+=u)}for(be&&null!=x.force3D&&(m.force3D=x.force3D,c=!0),m.skewType=x.skewType||m.skewType||a.defaultSkewType,_=m.force3D||m.z||m.rotationX||m.rotationY||h.z||h.rotationX||h.rotationY||h.perspective,_||null==x.scale||(h.scaleZ=1);--y>-1;)i=ye[y],p=h[i]-m[i],(p>v||-v>p||null!=x[i]||null!=N[i])&&(c=!0,n=new pe(m,i,m[i],p,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=o,r._overwriteProps.push(n.n));return p=x.transformOrigin,p&&m.svg&&(Oe(t,p,h),n=new pe(m,"xOrigin",m.xOrigin,h.xOrigin-m.xOrigin,n,-1,"transformOrigin"),n.b=m.xOrigin,n.e=n.xs0=h.xOrigin,n=new pe(m,"yOrigin",m.yOrigin,h.yOrigin-m.yOrigin,n,-1,"transformOrigin"),n.b=m.yOrigin,n.e=n.xs0=h.yOrigin,p="0px 0px"),(p||be&&_&&m.zOrigin)&&(xe?(c=!0,i=we,p=(p||H(t,i,s,!1,"50% 50%"))+"",n=new pe(g,i,0,0,n,-1,"transformOrigin"),n.b=g[i],n.plugin=o,be?(f=m.zOrigin,p=p.split(" "),m.zOrigin=(p.length>2&&(0===f||"0px"!==p[2])?parseFloat(p[2]):f)||0,n.xs0=n.e=p[0]+" "+(p[1]||"50%")+" 0px",n=new pe(m,"zOrigin",0,0,n,-1,n.n),n.b=f,n.xs0=n.e=m.zOrigin):n.xs0=n.e=p):ee(p+"",m)),c&&(r._transformType=m.svg&&ve||!_&&3!==this._transformType?2:3),n},prefix:!0}),me("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),me("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,u,f,p,_,c,d,m,g,v,y,x,T,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(d=parseFloat(t.offsetWidth),m=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=V(b[l])),f=u=H(t,b[l],s,!1,"0px"),-1!==f.indexOf(" ")&&(u=f.split(" "),f=u[0],u=u[1]),p=h=o[l],_=parseFloat(f),v=f.substr((_+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=r[i]||v),g!==v&&(x=G(t,"borderLeft",_,v),T=G(t,"borderTop",_,v),"%"===g?(f=100*(x/d)+"%",u=100*(T/m)+"%"):"em"===g?(w=G(t,"borderLeft",1,"em"),f=x/w+"em",u=T/w+"em"):(f=x+"px",u=T+"px"),y&&(p=parseFloat(f)+c+g,h=parseFloat(u)+c+g)),a=_e(P,b[l],f+" "+u,p+" "+h,!1,"0px",a);return a},prefix:!0,formatter:he("0px 0px 0px 0px",!1,!0)}),me("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,n,a){var o,l,h,u,f,p,_="background-position",d=s||q(t,null),m=this.format((d?c?d.getPropertyValue(_+"-x")+" "+d.getPropertyValue(_+"-y"):d.getPropertyValue(_):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==m.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=H(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=m.split(" "),l=g.split(" "),I.setAttribute("src",p),h=2;--h>-1;)m=o[h],u=-1!==m.indexOf("%"),u!==(-1!==l[h].indexOf("%"))&&(f=0===h?t.offsetWidth-I.width:t.offsetHeight-I.height,o[h]=u?parseFloat(m)/100*f+"px":100*(parseFloat(m)/f)+"%");m=o.join(" ")}return this.parseComplex(t.style,m,g,n,a)},formatter:ee}),me("backgroundSize",{defaultValue:"0 0",formatter:ee}),me("perspective",{defaultValue:"0px",prefix:!0}),me("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),me("transformStyle",{prefix:!0}),me("backfaceVisibility",{prefix:!0}),me("userSelect",{prefix:!0}),me("margin",{parser:ue("marginTop,marginRight,marginBottom,marginLeft")}),me("padding",{parser:ue("paddingTop,paddingRight,paddingBottom,paddingLeft")}),me("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,n,a){var o,l,h;return 9>c?(l=t.currentStyle,h=8>c?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(H(t,this.p,s,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),me("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),me("autoRound,strictUnits",{parser:function(t,e,i,r,s){return s}}),me("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(H(t,"borderTopWidth",s,!1,"0px")+" "+H(t,"borderTopStyle",s,!1,"solid")+" "+H(t,"borderTopColor",s,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(le)||["#000"])[0]}}),me("borderWidth",{parser:ue("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),me("float,cssFloat,styleFloat",{parser:function(t,e,i,r,s){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,s,-1,i,!1,0,n[a],e)}});var Ne=function(t){var e,i=this.t,r=i.filter||H(this.data,"filter")||"",s=0|this.s+this.c*t;100===s&&(-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),e=!H(this.data,"filter")):(i.filter=r.replace(w,""),e=!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+s+")"),-1===r.indexOf("pacity")?0===s&&this.xn1||(i.filter=r+" alpha(opacity="+s+")"):i.filter=r.replace(x,"opacity="+s))};me("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,n,a){var o=parseFloat(H(t,"opacity",s,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===H(t,"visibility",s)&&0!==e&&(o=0),Y?n=new pe(l,"opacity",o,e-o,n):(n=new pe(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Ne),h&&(n=new pe(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",r._overwriteProps.push(n.n),r._overwriteProps.push(i)),n}});var ze=function(t,e){e&&(t.removeProperty?("ms"===e.substr(0,2)&&(e="M"+e.substr(1)),t.removeProperty(e.replace(P,"-$1").toLowerCase())):t.removeAttribute(e))},Xe=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:ze(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};me("className",{parser:function(t,e,r,n,a,o,l){var h,u,f,p,_,c=t.getAttribute("class")||"",d=t.style.cssText;if(a=n._classNamePT=new pe(t,r,0,0,a,2),a.setRatio=Xe,a.pr=-11,i=!0,a.b=c,u=Z(t,s),f=t._gsClassPT){for(p={},_=f.data;_;)p[_.p]=1,_=_._next;f.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.setAttribute("class",a.e),h=$(t,u,Z(t),l,p),t.setAttribute("class",c),a.data=h.firstMPT,t.style.cssText=d,a=a.xfirst=n.parse(t,h.difs,a,o)),a}});var Ie=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,s,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",s=!0;else for(e=this.e.split(" ").join("").split(","),r=e.length;--r>-1;)i=e[r],o[i]&&(o[i].parse===a?s=!0:i="transformOrigin"===i?we:o[i].p),ze(n,i);s&&(ze(n,xe),this.t._gsTransform&&delete this.t._gsTransform)}};for(me("clearProps",{parser:function(t,e,r,s,n){return n=new pe(t,r,0,0,n,2),n.setRatio=Ie,n.e=e,n.pr=-10,n.data=s._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ce=l.length;ce--;)ge(l[ce]);l=a.prototype,l._firstPT=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,h=e.autoRound,i=!1,r=e.suffixMap||a.suffixMap,s=q(t,""),n=this._overwriteProps;var l,p,c,d,m,g,v,y,x,w=t.style;if(u&&""===w.zIndex&&(l=H(t,"zIndex",s),("auto"===l||""===l)&&this._addLazySet(w,"zIndex",0)),"string"==typeof e&&(d=w.cssText,l=Z(t,s),w.cssText=d+";"+e,l=$(t,l,Z(t)).difs,!Y&&T.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,w.cssText=d),this._firstPT=p=this.parse(t,e,null),this._transformType){for(x=3===this._transformType,xe?f&&(u=!0,""===w.zIndex&&(v=H(t,"zIndex",s),("auto"===v||""===v)&&this._addLazySet(w,"zIndex",0)),_&&this._addLazySet(w,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(x?"visible":"hidden"))):w.zoom=1,c=p;c&&c._next;)c=c._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=x&&be?Me:xe?Le:De,y.data=this._transform||Ae(t,s,!0),n.pop()}if(i){for(;p;){for(g=p._next,c=d;c&&c.pr>p.pr;)c=c._next;(p._prev=c?c._prev:m)?p._prev._next=p:d=p,(p._next=c)?c._prev=p:m=p,p=g}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,l,u,f,p,_,c,d,m,g,v=t.style;for(a in e)_=e[a],l=o[a],l?i=l.parse(t,_,a,this,i,n,e):(p=H(t,a,s)+"",m="string"==typeof _,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||m&&b.test(_)?(m||(_=oe(_),_=(_.length>3?"rgba(":"rgb(")+_.join(",")+")"),i=_e(v,a,p,_,!0,"transparent",i,0,n)):!m||-1===_.indexOf(" ")&&-1===_.indexOf(",")?(u=parseFloat(p),c=u||0===u?p.substr((u+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(u=te(t,a,s),c="px"):"left"===a||"top"===a?(u=Q(t,a,s),c="px"):(u="opacity"!==a?0:1,c="")),g=m&&"="===_.charAt(1),g?(f=parseInt(_.charAt(0)+"1",10),_=_.substr(2),f*=parseFloat(_),d=_.replace(y,"")):(f=parseFloat(_),d=m?_.substr((f+"").length)||"":""),""===d&&(d=a in r?r[a]:c),_=f||0===f?(g?f+u:f)+d:e[a],c!==d&&""!==d&&(f||0===f)&&u&&(u=G(t,a,u,c),"%"===d?(u/=G(t,a,100,"%")/100,e.strictUnits!==!0&&(p=u+"%")):"em"===d?u/=G(t,a,1,"em"):"px"!==d&&(f=G(t,a,f,d),d="px"),g&&(f||0===f)&&(_=f+u+d)),g&&(f+=u),!u&&0!==u||!f&&0!==f?void 0!==v[a]&&(_||"NaN"!=_+""&&null!=_)?(i=new pe(v,a,f||u||0,0,i,-1,a,!1,0,p,_),i.xs0="none"!==_||"display"!==a&&-1===a.indexOf("Style")?_:p):U("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,u,f-u,i,0,a,h!==!1&&("px"===d||"zIndex"===a),0,p,_),i.xs0=d)):i=_e(v,a,p,_,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);
return i},l.setRatio=function(t){var e,i,r,s=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;s;){if(e=s.c*t+s.s,s.r?e=Math.round(e):n>e&&e>-n&&(e=0),s.type)if(1===s.type)if(r=s.l,2===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(i=s.xs0+e+s.xs1,r=1;s.l>r;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;)2!==s.type?s.t[s.p]=s.e:s.setRatio(t),s=s._next},l._enableTransforms=function(t){this._transform=this._transform||Ae(this._target,s,!0),this._transformType=this._transform.svg&&ve||!t&&3!==this._transformType?2:3};var Ee=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};l._addLazySet=function(t,e,i){var r=this._firstPT=new pe(t,e,0,0,this._firstPT,2);r.e=i,r.setRatio=Ee,r.data=this},l._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,r,s,n=e;if(e.autoAlpha||e.alpha){n={};for(r in e)n[r]=e[r];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(s=i.xfirst,s&&s._prev?this._linkCSSP(s._prev,i._next,s._prev._prev):s===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,s._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Fe=function(t,e,i){var r,s,n,a;if(t.slice)for(s=t.length;--s>-1;)Fe(t[s],e,i);else for(r=t.childNodes,s=r.length;--s>-1;)n=r[s],a=n.type,n.style&&(e.push(Z(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Fe(n,e,i)};return a.cascadeTo=function(t,i,r){var s,n,a,o=e.to(t,i,r),l=[o],h=[],u=[],f=[],p=e._internals.reservedProps;for(t=o._targets||o.target,Fe(t,h,f),o.render(i,!0),Fe(t,u),o.render(0,!0),o._enabled(!0),s=f.length;--s>-1;)if(n=$(f[s],h[s],u[s]),n.firstMPT){n=n.difs;for(a in r)p[a]&&(n[a]=r[a]);l.push(e.to(f[s],i,n))}return l},t.activate([a]),a},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}("CSSPlugin");

/*!
 * VERSION: beta 0.3.3
 * DATE: 2014-10-29
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(function(t){"use strict";var e=t.GreenSockGlobals||t,i=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},s=i("com.greensock.utils"),r=function(t){var e=t.nodeType,i="";if(1===e||9===e||11===e){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=r(t)}else if(3===e||4===e)return t.nodeValue;return i},n=document,a=n.defaultView?n.defaultView.getComputedStyle:function(){},o=/([A-Z])/g,h=function(t,e,i,s){var r;return(i=i||a(t,null))?(t=i.getPropertyValue(e.replace(o,"-$1").toLowerCase()),r=t||i.length?t:i[e]):t.currentStyle&&(i=t.currentStyle,r=i[e]),s?r:parseInt(r,10)||0},l=function(t){return t.length&&t[0]&&(t[0].nodeType&&t[0].style&&!t.nodeType||t[0].length&&t[0][0])?!0:!1},_=function(t){var e,i,s,r=[],n=t.length;for(e=0;n>e;e++)if(i=t[e],l(i))for(s=i.length,s=0;i.length>s;s++)r.push(i[s]);else r.push(i);return r},u=")eefec303079ad17405c",c=/(?:<br>|<br\/>|<br \/>)/gi,p=n.all&&!n.addEventListener,f="<div style='position:relative;display:inline-block;"+(p?"*display:inline;*zoom:1;'":"'"),m=function(t){t=t||"";var e=-1!==t.indexOf("++"),i=1;return e&&(t=t.split("++").join("")),function(){return f+(t?" class='"+t+(e?i++:"")+"'>":">")}},d=s.SplitText=e.SplitText=function(t,e){if("string"==typeof t&&(t=d.selector(t)),!t)throw"cannot split a null element.";this.elements=l(t)?_(t):[t],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=e||{},this.split(e)},g=function(t,e,i){var s=t.nodeType;if(1===s||9===s||11===s)for(t=t.firstChild;t;t=t.nextSibling)g(t,e,i);else(3===s||4===s)&&(t.nodeValue=t.nodeValue.split(e).join(i))},v=function(t,e){for(var i=e.length;--i>-1;)t.push(e[i])},y=function(t,e,i,s,o){c.test(t.innerHTML)&&(t.innerHTML=t.innerHTML.replace(c,u));var l,_,p,f,d,y,T,w,b,x,P,S,C,k,R=r(t),A=e.type||e.split||"chars,words,lines",O=-1!==A.indexOf("lines")?[]:null,D=-1!==A.indexOf("words"),M=-1!==A.indexOf("chars"),L="absolute"===e.position||e.absolute===!0,z=L?"&#173; ":" ",I=-999,E=a(t),N=h(t,"paddingLeft",E),F=h(t,"borderBottomWidth",E)+h(t,"borderTopWidth",E),X=h(t,"borderLeftWidth",E)+h(t,"borderRightWidth",E),U=h(t,"paddingTop",E)+h(t,"paddingBottom",E),B=h(t,"paddingLeft",E)+h(t,"paddingRight",E),j=h(t,"textAlign",E,!0),Y=t.clientHeight,q=t.clientWidth,G="</div>",V=m(e.wordsClass),Q=m(e.charsClass),W=-1!==(e.linesClass||"").indexOf("++"),H=e.linesClass,Z=-1!==R.indexOf("<"),$=!0,K=[],J=[],te=[];for(W&&(H=H.split("++").join("")),Z&&(R=R.split("<").join("{{LT}}")),l=R.length,f=V(),d=0;l>d;d++)if(T=R.charAt(d),")"===T&&R.substr(d,20)===u)f+=($?G:"")+"<BR/>",$=!1,d!==l-20&&R.substr(d+20,20)!==u&&(f+=" "+V(),$=!0),d+=19;else if(" "===T&&" "!==R.charAt(d-1)&&d!==l-1&&R.substr(d-20,20)!==u){for(f+=$?G:"",$=!1;" "===R.charAt(d+1);)f+=z,d++;(")"!==R.charAt(d+1)||R.substr(d+1,20)!==u)&&(f+=z+V(),$=!0)}else f+=M&&" "!==T?Q()+T+"</div>":T;for(t.innerHTML=f+($?G:""),Z&&g(t,"{{LT}}","<"),y=t.getElementsByTagName("*"),l=y.length,w=[],d=0;l>d;d++)w[d]=y[d];if(O||L)for(d=0;l>d;d++)b=w[d],p=b.parentNode===t,(p||L||M&&!D)&&(x=b.offsetTop,O&&p&&x!==I&&"BR"!==b.nodeName&&(_=[],O.push(_),I=x),L&&(b._x=b.offsetLeft,b._y=x,b._w=b.offsetWidth,b._h=b.offsetHeight),O&&(D!==p&&M||(_.push(b),b._x-=N),p&&d&&(w[d-1]._wordEnd=!0),"BR"===b.nodeName&&b.nextSibling&&"BR"===b.nextSibling.nodeName&&O.push([])));for(d=0;l>d;d++)b=w[d],p=b.parentNode===t,"BR"!==b.nodeName?(L&&(S=b.style,D||p||(b._x+=b.parentNode._x,b._y+=b.parentNode._y),S.left=b._x+"px",S.top=b._y+"px",S.position="absolute",S.display="block",S.width=b._w+1+"px",S.height=b._h+"px"),D?p&&""!==b.innerHTML?J.push(b):M&&K.push(b):p?(t.removeChild(b),w.splice(d--,1),l--):!p&&M&&(x=!O&&!L&&b.nextSibling,t.appendChild(b),x||t.appendChild(n.createTextNode(" ")),K.push(b))):O||L?(t.removeChild(b),w.splice(d--,1),l--):D||t.appendChild(b);if(O){for(L&&(P=n.createElement("div"),t.appendChild(P),C=P.offsetWidth+"px",x=P.offsetParent===t?0:t.offsetLeft,t.removeChild(P)),S=t.style.cssText,t.style.cssText="display:none;";t.firstChild;)t.removeChild(t.firstChild);for(k=!L||!D&&!M,d=0;O.length>d;d++){for(_=O[d],P=n.createElement("div"),P.style.cssText="display:block;text-align:"+j+";position:"+(L?"absolute;":"relative;"),H&&(P.className=H+(W?d+1:"")),te.push(P),l=_.length,y=0;l>y;y++)"BR"!==_[y].nodeName&&(b=_[y],P.appendChild(b),k&&(b._wordEnd||D)&&P.appendChild(n.createTextNode(" ")),L&&(0===y&&(P.style.top=b._y+"px",P.style.left=N+x+"px"),b.style.top="0px",x&&(b.style.left=b._x-x+"px")));0===l&&(P.innerHTML="&nbsp;"),D||M||(P.innerHTML=r(P).split(String.fromCharCode(160)).join(" ")),L&&(P.style.width=C,P.style.height=b._h+"px"),t.appendChild(P)}t.style.cssText=S}L&&(Y>t.clientHeight&&(t.style.height=Y-U+"px",Y>t.clientHeight&&(t.style.height=Y+F+"px")),q>t.clientWidth&&(t.style.width=q-B+"px",q>t.clientWidth&&(t.style.width=q+X+"px"))),v(i,K),v(s,J),v(o,te)},T=d.prototype;T.split=function(t){this.isSplit&&this.revert(),this.vars=t||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var e=this.elements.length;--e>-1;)this._originals[e]=this.elements[e].innerHTML,y(this.elements[e],this.vars,this.chars,this.words,this.lines);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},T.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var t=this._originals.length;--t>-1;)this.elements[t].innerHTML=this._originals[t];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},d.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(d.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)},d.version="0.3.3"})(_gsScope),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(module.exports=e())}("SplitText");


try{
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;

	delete(window.GreenSockGlobals);
	delete(window._gsQueue);
	delete(window._gsDefine);	
   } catch(e) {}

try{
	window.GreenSockGlobals = oldgs;
	window._gsQueue = oldgs_queue;
	} catch(e) {}

if (window.tplogs==true)
	try {
		console.groupEnd();
	} catch(e) {}





(function(e,t){
		e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};		
})(jQuery)

/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.6.5 (02.12.2014)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/
function revslider_showDoubleJqueryError(a){var b="Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";b+="<br> This includes make eliminates the revolution slider libraries, and make it not work.",b+="<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.",b+="<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.",b="<span style='font-size:16px;color:#BC0C06;'>"+b+"</span>",jQuery(a).show().html(b)}!function(a,b){function c(){var a=!1;return navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)?navigator.userAgent.match(/OS 4_\d like Mac OS X/i)&&(a=!0):a=!1,a}function d(d,e){if(d==b)return!1;if(d.data("aimg")!=b&&("enabled"==d.data("aie8")&&i(8)||"enabled"==d.data("amobile")&&W())&&d.html('<img class="tp-slider-alternative-image" src="'+d.data("aimg")+'">'),("preview1"==e.navigationStyle||"preview3"==e.navigationStyle||"preview4"==e.navigationStyle)&&(e.soloArrowLeftHalign="left",e.soloArrowLeftValign="center",e.soloArrowLeftHOffset=0,e.soloArrowLeftVOffset=0,e.soloArrowRightHalign="right",e.soloArrowRightValign="center",e.soloArrowRightHOffset=0,e.soloArrowRightVOffset=0,e.navigationArrows="solo"),"on"==e.simplifyAll&&(i(8)||c())&&(d.find(".tp-caption").each(function(){var b=a(this);b.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout"),b.data("splitin",""),b.data("speed",400)}),d.find(">ul>li").each(function(){var b=a(this);b.data("transition","fade"),b.data("masterspeed",500),b.data("slotamount",1);var c=b.find(">img").first();c.data("kenburns","off")})),e.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),"on"!=e.fullWidth&&"on"!=e.fullScreen&&(e.autoHeight="off"),"on"==e.fullScreen&&(e.autoHeight="on"),"on"!=e.fullWidth&&"on"!=e.fullScreen&&(forceFulWidth="off"),"on"==e.fullWidth&&"off"==e.autoHeight&&d.css({maxHeight:e.startheight+"px"}),W()&&"on"==e.hideThumbsOnMobile&&"thumb"==e.navigationType&&(e.navigationType="none"),W()&&"on"==e.hideBulletsOnMobile&&"bullet"==e.navigationType&&(e.navigationType="none"),W()&&"on"==e.hideBulletsOnMobile&&"both"==e.navigationType&&(e.navigationType="none"),W()&&"on"==e.hideArrowsOnMobile&&(e.navigationArrows="none"),"on"==e.forceFullWidth&&0==d.closest(".forcefullwidth_wrapper_tp_banner").length){var j=d.parent().offset().left,p=d.parent().css("marginBottom"),q=d.parent().css("marginTop");p==b&&(p=0),q==b&&(q=0),d.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:'+q+";margin-bottom:"+p+'" class="forcefullwidth_wrapper_tp_banner"></div>'),d.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+d.height()+'px"></div>'),d.css({backgroundColor:d.parent().css("backgroundColor"),backgroundImage:d.parent().css("backgroundImage")}),d.parent().css({left:0-j+"px",position:"absolute",width:a(window).width()}),e.width=a(window).width()}try{e.hideThumbsUnderResolution>a(window).width()&&0!=e.hideThumbsUnderResolution?d.parent().find(".tp-bullets.tp-thumbs").css({display:"none"}):d.parent().find(".tp-bullets.tp-thumbs").css({display:"block"})}catch(r){}if(!d.hasClass("revslider-initialised")){d.addClass("revslider-initialised"),d.attr("id")==b&&d.attr("id","revslider-"+Math.round(1e3*Math.random()+5)),e.firefox13=!1,e.ie=!a.support.opacity,e.ie9=9==document.documentMode,e.origcd=e.delay;var t=a.fn.jquery.split("."),u=parseFloat(t[0]),v=parseFloat(t[1]);parseFloat(t[2]||"0"),1==u&&7>v&&d.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+t+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"),u>1&&(e.ie=!1),a.support.transition||(a.fn.transition=a.fn.animate),d.find(".caption").each(function(){a(this).addClass("tp-caption")}),W()&&d.find(".tp-caption").each(function(){var b=a(this);(1==b.data("autoplayonlyfirsttime")||"true"==b.data("autoplayonlyfirsttime"))&&b.data("autoplayonlyfirsttime","false"),(1==b.data("autoplay")||"true"==b.data("autoplay"))&&b.data("autoplay",!1)});var x=0,y=0,B="http";if("https:"===location.protocol&&(B="https"),d.find(".tp-caption").each(function(){try{if((a(this).data("ytid")!=b||a(this).find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&0==x){x=1;var d=document.createElement("script"),e="https";d.src=e+"://www.youtube.com/iframe_api";var f=document.getElementsByTagName("script")[0],g=!0;a("head").find("*").each(function(){a(this).attr("src")==e+"://www.youtube.com/iframe_api"&&(g=!1)}),g&&f.parentNode.insertBefore(d,f)}}catch(h){}try{if((a(this).data("vimeoid")!=b||a(this).find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&0==y){y=1;var i=document.createElement("script");i.src=B+"://a.vimeocdn.com/js/froogaloop2.min.js";var f=document.getElementsByTagName("script")[0],g=!0;a("head").find("*").each(function(){a(this).attr("src")==B+"://a.vimeocdn.com/js/froogaloop2.min.js"&&(g=!1)}),g&&f.parentNode.insertBefore(i,f)}}catch(h){}try{a(this).data("videomp4")!=b||a(this).data("videowebm")!=b}catch(h){}}),d.find(".tp-caption video").each(function(){a(this).removeClass("video-js").removeClass("vjs-default-skin"),a(this).attr("preload",""),a(this).css({display:"none"})}),d.find(">ul:first-child >li").each(function(){var b=a(this);b.data("origindex",b.index())}),"on"==e.shuffle){var C=new Object,D=d.find(">ul:first-child >li:first-child");C.fstransition=D.data("fstransition"),C.fsmasterspeed=D.data("fsmasterspeed"),C.fsslotamount=D.data("fsslotamount");for(var E=0;E<d.find(">ul:first-child >li").length;E++){var F=Math.round(Math.random()*d.find(">ul:first-child >li").length);d.find(">ul:first-child >li:eq("+F+")").prependTo(d.find(">ul:first-child"))}var G=d.find(">ul:first-child >li:first-child");G.data("fstransition",C.fstransition),G.data("fsmasterspeed",C.fsmasterspeed),G.data("fsslotamount",C.fsslotamount)}e.slots=4,e.act=-1,e.next=0,e.startWithSlide!=b&&(e.next=e.startWithSlide);var H=g("#")[0];if(H.length<9&&H.split("slide").length>1){var I=parseInt(H.split("slide")[1],0);1>I&&(I=1),I>d.find(">ul:first >li").length&&(I=d.find(">ul:first >li").length),e.next=I-1}e.firststart=1,e.navigationHOffset==b&&(e.navOffsetHorizontal=0),e.navigationVOffset==b&&(e.navOffsetVertical=0),d.append('<div class="tp-loader '+e.spinner+'">'+'<div class="dot1"></div>'+'<div class="dot2"></div>'+'<div class="bounce1"></div>'+'<div class="bounce2"></div>'+'<div class="bounce3"></div>'+"</div>"),0==d.find(".tp-bannertimer").length&&d.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');var J=d.find(".tp-bannertimer");if(J.length>0&&J.css({width:"0%"}),d.addClass("tp-simpleresponsive"),e.container=d,e.slideamount=d.find(">ul:first >li").length,0==d.height()&&d.height(e.startheight),(e.startwidth==b||0==e.startwidth)&&(e.startwidth=d.width()),(e.startheight==b||0==e.startheight)&&(e.startheight=d.height()),e.width=d.width(),e.height=d.height(),e.bw=e.startwidth/d.width(),e.bh=e.startheight/d.height(),e.width!=e.startwidth&&(e.height=Math.round(e.startheight*(e.width/e.startwidth)),d.height(e.height)),0!=e.shadow){d.parent().append('<div class="tp-bannershadow tp-shadow'+e.shadow+'"></div>');var j=0;"on"==e.forceFullWidth&&(j=0-e.container.parent().offset().left),d.parent().find(".tp-bannershadow").css({width:e.width,left:j})}d.find("ul").css({display:"none"}),d.find("ul").css({display:"block"}),s(d,e),"off"!=e.parallax&&ab(d,e),e.slideamount>1&&k(d,e),e.slideamount>1&&"thumb"==e.navigationType&&cb(d,e),e.slideamount>1&&l(d,e),"on"==e.keyboardNavigation&&m(d,e),n(d,e),e.hideThumbs>0&&o(d,e),setTimeout(function(){z(d,e)},e.startDelay),e.startDelay=0,e.slideamount>1&&V(d,e),setTimeout(function(){d.trigger("revolution.slide.onloaded")},500),a("body").data("rs-fullScreenMode",!1),a(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange",function(){a("body").data("rs-fullScreenMode",!a("body").data("rs-fullScreenMode")),a("body").data("rs-fullScreenMode")&&setTimeout(function(){a(window).trigger("resize")},200)});var L="resize.revslider-"+d.attr("id");a(window).on(L,function(){if(d==b)return!1;if(0!=a("body").find(d)&&"on"==e.forceFullWidth){var c=e.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;e.container.parent().css({left:0-c+"px",width:a(window).width()})}(d.outerWidth(!0)!=e.width||d.is(":hidden"))&&h(d,e)});try{0!=e.hideThumbsUnderResoluition&&"thumb"==e.navigationType&&(e.hideThumbsUnderResoluition>a(window).width()?a(".tp-bullets").css({display:"none"}):a(".tp-bullets").css({display:"block"}))}catch(r){}d.find(".tp-scrollbelowslider").on("click",function(){var b=0;try{b=a("body").find(e.fullScreenOffsetContainer).height()}catch(c){}try{b-=parseInt(a(this).data("scrolloffset"),0)}catch(c){}a("body,html").animate({scrollTop:d.offset().top+d.find(">ul >li").height()-b+"px"},{duration:400})});var M=d.parent();a(window).width()<e.hideSliderAtLimit&&(d.trigger("stoptimer"),"none"!=M.css("display")&&M.data("olddisplay",M.css("display")),M.css({display:"none"})),f(d,e)}}a.fn.extend({revolution:function(c){var e={delay:9e3,startheight:500,startwidth:960,fullScreenAlignForce:"off",autoHeight:"off",hideTimerBar:"off",hideThumbs:200,hideNavDelayOnMobile:1500,thumbWidth:100,thumbHeight:50,thumbAmount:3,navigationType:"bullet",navigationArrows:"solo",navigationInGrid:"off",hideThumbsOnMobile:"off",hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResoluition:0,navigationStyle:"round",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,keyboardNavigation:"on",touchenabled:"on",onHoverStop:"on",stopAtSlide:-1,stopAfterLoops:-1,hideCaptionAtLimit:0,hideAllCaptionAtLimit:0,hideSliderAtLimit:0,shadow:0,fullWidth:"off",fullScreen:"off",minFullScreenHeight:0,fullScreenOffsetContainer:"",fullScreenOffset:"0",dottedOverlay:"none",forceFullWidth:"off",spinner:"spinner0",swipe_treshold:75,swipe_min_touches:1,drag_block_vertical:!1,isJoomla:!1,parallax:"off",parallaxLevels:[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],parallaxBgFreeze:"off",parallaxOpacity:"on",parallaxDisableOnMobile:"off",panZoomDisableOnMobile:"off",simplifyAll:"on",minHeight:0,nextSlideOnWindowFocus:"off",startDelay:0};return c=a.extend({},e,c),this.each(function(){if(1==window.tplogs)try{console.groupCollapsed("Slider Revolution 4.6.3 Initialisation on "+a(this).attr("id")),console.groupCollapsed("Used Options:"),console.info(c),console.groupEnd(),console.groupCollapsed("Tween Engine:")}catch(e){}if(punchgs.TweenLite==b){if(1==window.tplogs)try{console.error("GreenSock Engine Does not Exist!")}catch(e){}return!1}if(punchgs.force3D=!0,1==window.tplogs)try{console.info("GreenSock Engine Version in Slider Revolution:"+punchgs.TweenLite.version)}catch(e){}if("on"==c.simplifyAll||(punchgs.TweenLite.lagSmoothing(1e3,16),punchgs.force3D="true"),1==window.tplogs)try{console.groupEnd(),console.groupEnd()}catch(e){}d(a(this),c)})},revscroll:function(c){return this.each(function(){var d=a(this);d!=b&&d.length>0&&a("body").find("#"+d.attr("id")).length>0&&a("body,html").animate({scrollTop:d.offset().top+d.find(">ul >li").height()-c+"px"},{duration:400})})},revredraw:function(){return this.each(function(){var c=a(this);if(c!=b&&c.length>0&&a("body").find("#"+c.attr("id")).length>0){var d=c.parent().find(".tp-bannertimer"),e=d.data("opt");h(c,e)}})},revkill:function(){var d=this,e=a(this);if(e!=b&&e.length>0&&a("body").find("#"+e.attr("id")).length>0){e.data("conthover",1),e.data("conthover-changed",1),e.trigger("revolution.slide.onpause");var f=e.parent().find(".tp-bannertimer"),g=f.data("opt");g.bannertimeronpause=!0,e.trigger("stoptimer"),punchgs.TweenLite.killTweensOf(e.find("*"),!1),punchgs.TweenLite.killTweensOf(e,!1),e.unbind("hover, mouseover, mouseenter,mouseleave, resize");var h="resize.revslider-"+e.attr("id");a(window).off(h),e.find("*").each(function(){var c=a(this);c.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"),c.off("on, hover, mouseenter,mouseleave,mouseover, resize"),c.data("mySplitText",null),c.data("ctl",null),c.data("tween")!=b&&c.data("tween").kill(),c.data("kenburn")!=b&&c.data("kenburn").kill(),c.remove(),c.empty(),c=null}),punchgs.TweenLite.killTweensOf(e.find("*"),!1),punchgs.TweenLite.killTweensOf(e,!1),f.remove();try{e.closest(".forcefullwidth_wrapper_tp_banner").remove()}catch(i){}try{e.closest(".rev_slider_wrapper").remove()}catch(i){}try{e.remove()}catch(i){}return e.empty(),e.html(),e=null,g=null,delete d.container,delete d.opt,!0}return!1},revpause:function(){return this.each(function(){var c=a(this);if(c!=b&&c.length>0&&a("body").find("#"+c.attr("id")).length>0){c.data("conthover",1),c.data("conthover-changed",1),c.trigger("revolution.slide.onpause");var d=c.parent().find(".tp-bannertimer"),e=d.data("opt");e.bannertimeronpause=!0,c.trigger("stoptimer")}})},revresume:function(){return this.each(function(){var c=a(this);if(c!=b&&c.length>0&&a("body").find("#"+c.attr("id")).length>0){c.data("conthover",0),c.data("conthover-changed",1),c.trigger("revolution.slide.onresume");var d=c.parent().find(".tp-bannertimer"),e=d.data("opt");e.bannertimeronpause=!1,c.trigger("starttimer")}})},revnext:function(){return this.each(function(){var c=a(this);c!=b&&c.length>0&&a("body").find("#"+c.attr("id")).length>0&&c.parent().find(".tp-rightarrow").click()})},revprev:function(){return this.each(function(){var c=a(this);c!=b&&c.length>0&&a("body").find("#"+c.attr("id")).length>0&&c.parent().find(".tp-leftarrow").click()})},revmaxslide:function(){return a(this).find(">ul:first-child >li").length},revcurrentslide:function(){var d=a(this);if(d!=b&&d.length>0&&a("body").find("#"+d.attr("id")).length>0){var e=d.parent().find(".tp-bannertimer"),f=e.data("opt");return f.act}},revlastslide:function(){var d=a(this);if(d!=b&&d.length>0&&a("body").find("#"+d.attr("id")).length>0){var e=d.parent().find(".tp-bannertimer"),f=e.data("opt");return f.lastslide}},revshowslide:function(c){return this.each(function(){var d=a(this);d!=b&&d.length>0&&a("body").find("#"+d.attr("id")).length>0&&(d.data("showus",c),d.parent().find(".tp-rightarrow").click())})}}),function(){var a,b,c={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(a in c)if(a in document){b=c[a];break}return function(c){return c&&document.addEventListener(b,c),!document[a]}}();var f=function(c,d){var e=document.documentMode===b,f=window.chrome;e&&!f?a(window).on("focusin",function(){return c==b?!1:(setTimeout(function(){"on"==d.nextSlideOnWindowFocus&&c.revnext(),c.revredraw()},300),void 0)}).on("focusout",function(){}):window.addEventListener?(window.addEventListener("focus",function(){return c==b?!1:(setTimeout(function(){"on"==d.nextSlideOnWindowFocus&&c.revnext(),c.revredraw()},300),void 0)},!1),window.addEventListener("blur",function(){},!1)):(window.attachEvent("focus",function(){setTimeout(function(){return c==b?!1:("on"==d.nextSlideOnWindowFocus&&c.revnext(),c.revredraw(),void 0)},300)}),window.attachEvent("blur",function(){}))},g=function(a){for(var c,b=[],d=window.location.href.slice(window.location.href.indexOf(a)+1).split("_"),e=0;e<d.length;e++)d[e]=d[e].replace("%3D","="),c=d[e].split("="),b.push(c[0]),b[c[0]]=c[1];return b},h=function(c,d){if(c==b)return!1;try{0!=d.hideThumbsUnderResoluition&&"thumb"==d.navigationType&&(d.hideThumbsUnderResoluition>a(window).width()?a(".tp-bullets").css({display:"none"}):a(".tp-bullets").css({display:"block"}))}catch(e){}c.find(".defaultimg").each(function(){r(a(this),d)});var f=c.parent();a(window).width()<d.hideSliderAtLimit?(c.trigger("stoptimer"),"none"!=f.css("display")&&f.data("olddisplay",f.css("display")),f.css({display:"none"})):c.is(":hidden")&&(f.data("olddisplay")!=b&&"undefined"!=f.data("olddisplay")&&"none"!=f.data("olddisplay")?f.css({display:f.data("olddisplay")}):f.css({display:"block"}),c.trigger("restarttimer"),setTimeout(function(){h(c,d)},150));var g=0;"on"==d.forceFullWidth&&(g=0-d.container.parent().offset().left);try{c.parent().find(".tp-bannershadow").css({width:d.width,left:g})}catch(e){}var i=c.find(">ul >li:eq("+d.act+") .slotholder"),j=c.find(">ul >li:eq("+d.next+") .slotholder");v(c,d,c),punchgs.TweenLite.set(j.find(".defaultimg"),{opacity:0}),i.find(".defaultimg").css({opacity:1}),j.find(".defaultimg").each(function(){var e=a(this);"on"==d.panZoomDisableOnMobile||e.data("kenburn")!=b&&(e.data("kenburn").restart(),Y(c,d,!0))});var k=c.find(">ul >li:eq("+d.next+")"),l=c.parent().find(".tparrows");l.hasClass("preview2")&&l.css({width:parseInt(l.css("minWidth"),0)}),L(k,d,!0),p(c,d)},i=function(b,c){var d=a('<div style="display:none;"/>').appendTo(a("body"));d.html("<!--[if "+(c||"")+" IE "+(b||"")+"]><a>&nbsp;</a><![endif]-->");var e=d.find("a").length;return d.remove(),e},j=function(a,b){a.next==b.find(">ul >li").length-1&&(a.looptogo=a.looptogo-1,a.looptogo<=0&&(a.stopLoop="on")),z(b,a)},k=function(b,c){var d="hidebullets";0==c.hideThumbs&&(d=""),("bullet"==c.navigationType||"both"==c.navigationType)&&b.parent().append('<div class="tp-bullets '+d+" simplebullets "+c.navigationStyle+'"></div>');var e=b.parent().find(".tp-bullets");b.find(">ul:first >li").each(function(a){b.find(">ul:first >li:eq("+a+") img:first").attr("src"),e.append('<div class="bullet"></div>'),e.find(".bullet:first")}),e.find(".bullet").each(function(d){var e=a(this);d==c.slideamount-1&&e.addClass("last"),0==d&&e.addClass("first"),e.click(function(){var a=!1,d=e.index();("withbullet"==c.navigationArrows||"nexttobullets"==c.navigationArrows)&&(d=e.index()-1),d==c.act&&(a=!0),0!=c.transition||a||(c.next=d,j(c,b))})}),e.append('<div class="tpclear"></div>'),p(b,c)},l=function(a,c){function h(b){a.parent().append('<div style="'+e+'" class="tp-'+b+"arrow "+f+" tparrows "+g+'"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')}var e=(a.find(".tp-bullets"),""),f="hidearrows",g=c.navigationStyle;0==c.hideThumbs&&(f=""),"none"==c.navigationArrows&&(e="visibility:hidden;display:none"),c.soloArrowStyle="default "+c.navigationStyle,"none"!=c.navigationArrows&&"nexttobullets"!=c.navigationArrows&&(g=c.soloArrowStyle),h("left"),h("right"),a.parent().find(".tp-rightarrow").click(function(){0==c.transition&&(c.next=a.data("showus")!=b&&-1!=a.data("showus")?a.data("showus")-1:c.next+1,a.data("showus",-1),c.next>=c.slideamount&&(c.next=0),c.next<0&&(c.next=0),c.act!=c.next&&j(c,a))}),a.parent().find(".tp-leftarrow").click(function(){0==c.transition&&(c.next=c.next-1,c.leftarrowpressed=1,c.next<0&&(c.next=c.slideamount-1),j(c,a))}),p(a,c)},m=function(c,d){a(document).keydown(function(a){0==d.transition&&39==a.keyCode&&(d.next=c.data("showus")!=b&&-1!=c.data("showus")?c.data("showus")-1:d.next+1,c.data("showus",-1),d.next>=d.slideamount&&(d.next=0),d.next<0&&(d.next=0),d.act!=d.next&&j(d,c)),0==d.transition&&37==a.keyCode&&(d.next=d.next-1,d.leftarrowpressed=1,d.next<0&&(d.next=d.slideamount-1),j(d,c))}),p(c,d)},n=function(b,c){var d="vertical";"on"==c.touchenabled&&(1==c.drag_block_vertical&&(d="none"),b.swipe({allowPageScroll:d,fingers:c.swipe_min_touches,treshold:c.swipe_treshold,swipe:function(e,f){switch(f){case"left":0==c.transition&&(c.next=c.next+1,c.next==c.slideamount&&(c.next=0),j(c,b));break;case"right":0==c.transition&&(c.next=c.next-1,c.leftarrowpressed=1,c.next<0&&(c.next=c.slideamount-1),j(c,b));break;case"up":"none"==d&&a("html, body").animate({scrollTop:b.offset().top+b.height()+"px"});break;case"down":"none"==d&&a("html, body").animate({scrollTop:b.offset().top-a(window).height()+"px"})}}}))},o=function(a,b){var c=a.parent().find(".tp-bullets"),d=a.parent().find(".tparrows");if(null==c){a.append('<div class=".tp-bullets"></div>');var c=a.parent().find(".tp-bullets")}if(null==d){a.append('<div class=".tparrows"></div>');var d=a.parent().find(".tparrows")}if(a.data("hideThumbs",b.hideThumbs),c.addClass("hidebullets"),d.addClass("hidearrows"),W())try{a.hammer().on("touch",function(){a.addClass("hovered"),"on"==b.onHoverStop&&a.trigger("stoptimer"),clearTimeout(a.data("hideThumbs")),c.removeClass("hidebullets"),d.removeClass("hidearrows")}),a.hammer().on("release",function(){a.removeClass("hovered"),a.trigger("starttimer"),a.hasClass("hovered")||c.hasClass("hovered")||a.data("hideThumbs",setTimeout(function(){c.addClass("hidebullets"),d.addClass("hidearrows"),a.trigger("starttimer")},b.hideNavDelayOnMobile))})}catch(e){}else c.hover(function(){b.overnav=!0,"on"==b.onHoverStop&&a.trigger("stoptimer"),c.addClass("hovered"),clearTimeout(a.data("hideThumbs")),c.removeClass("hidebullets"),d.removeClass("hidearrows")},function(){b.overnav=!1,a.trigger("starttimer"),c.removeClass("hovered"),a.hasClass("hovered")||c.hasClass("hovered")||a.data("hideThumbs",setTimeout(function(){c.addClass("hidebullets"),d.addClass("hidearrows")},b.hideThumbs))}),d.hover(function(){b.overnav=!0,"on"==b.onHoverStop&&a.trigger("stoptimer"),c.addClass("hovered"),clearTimeout(a.data("hideThumbs")),c.removeClass("hidebullets"),d.removeClass("hidearrows")},function(){b.overnav=!1,a.trigger("starttimer"),c.removeClass("hovered")}),a.on("mouseenter",function(){a.addClass("hovered"),"on"==b.onHoverStop&&a.trigger("stoptimer"),clearTimeout(a.data("hideThumbs")),c.removeClass("hidebullets"),d.removeClass("hidearrows")}),a.on("mouseleave",function(){a.removeClass("hovered"),a.trigger("starttimer"),a.hasClass("hovered")||c.hasClass("hovered")||a.data("hideThumbs",setTimeout(function(){c.addClass("hidebullets"),d.addClass("hidearrows")},b.hideThumbs))})},p=function(b,c){var d=b.parent(),e=d.find(".tp-bullets");if("thumb"==c.navigationType){e.find(".thumb").each(function(){var d=a(this);d.css({width:c.thumbWidth*c.bw+"px",height:c.thumbHeight*c.bh+"px"})});var f=e.find(".tp-mask");f.width(c.thumbWidth*c.thumbAmount*c.bw),f.height(c.thumbHeight*c.bh),f.parent().width(c.thumbWidth*c.thumbAmount*c.bw),f.parent().height(c.thumbHeight*c.bh)}var g=d.find(".tp-leftarrow"),h=d.find(".tp-rightarrow");"thumb"==c.navigationType&&"nexttobullets"==c.navigationArrows&&(c.navigationArrows="solo"),"nexttobullets"==c.navigationArrows&&(g.prependTo(e).css({"float":"left"}),h.insertBefore(e.find(".tpclear")).css({"float":"left"}));var i=0;"on"==c.forceFullWidth&&(i=0-c.container.parent().offset().left);var j=0,k=0;if("on"==c.navigationInGrid&&(j=b.width()>c.startwidth?(b.width()-c.startwidth)/2:0,k=b.height()>c.startheight?(b.height()-c.startheight)/2:0),"none"!=c.navigationArrows&&"nexttobullets"!=c.navigationArrows){var l=c.soloArrowLeftValign,m=c.soloArrowLeftHalign,n=c.soloArrowRightValign,o=c.soloArrowRightHalign,p=c.soloArrowLeftVOffset,q=c.soloArrowLeftHOffset,r=c.soloArrowRightVOffset,s=c.soloArrowRightHOffset;g.css({position:"absolute"}),h.css({position:"absolute"}),"center"==l?g.css({top:"50%",marginTop:p-Math.round(g.innerHeight()/2)+"px"}):"bottom"==l?g.css({top:"auto",bottom:0+p+"px"}):"top"==l&&g.css({bottom:"auto",top:0+p+"px"}),"center"==m?g.css({left:"50%",marginLeft:i+q-Math.round(g.innerWidth()/2)+"px"}):"left"==m?g.css({left:j+q+i+"px"}):"right"==m&&g.css({right:j+q-i+"px"}),"center"==n?h.css({top:"50%",marginTop:r-Math.round(h.innerHeight()/2)+"px"}):"bottom"==n?h.css({top:"auto",bottom:0+r+"px"}):"top"==n&&h.css({bottom:"auto",top:0+r+"px"}),"center"==o?h.css({left:"50%",marginLeft:i+s-Math.round(h.innerWidth()/2)+"px"}):"left"==o?h.css({left:j+s+i+"px"}):"right"==o&&h.css({right:j+s-i+"px"}),null!=g.position()&&g.css({top:Math.round(parseInt(g.position().top,0))+"px"}),null!=h.position()&&h.css({top:Math.round(parseInt(h.position().top,0))+"px"})}"none"==c.navigationArrows&&(g.css({visibility:"hidden"}),h.css({visibility:"hidden"}));var t=c.navigationVAlign,u=c.navigationHAlign,v=c.navigationVOffset*c.bh,w=c.navigationHOffset*c.bw;"center"==t&&e.css({top:"50%",marginTop:v-Math.round(e.innerHeight()/2)+"px"}),"bottom"==t&&e.css({bottom:0+v+"px"}),"top"==t&&e.css({top:0+v+"px"}),"center"==u&&e.css({left:"50%",marginLeft:i+w-Math.round(e.innerWidth()/2)+"px"}),"left"==u&&e.css({left:0+w+i+"px"}),"right"==u&&e.css({right:0+w-i+"px"})},q=function(c){var d=c.container;c.beforli=c.next-1,c.comingli=c.next+1,c.beforli<0&&(c.beforli=c.slideamount-1),c.comingli>=c.slideamount&&(c.comingli=0);var e=d.find(">ul:first-child >li:eq("+c.comingli+")"),f=d.find(">ul:first-child >li:eq("+c.beforli+")"),g=f.find(".defaultimg").attr("src"),h=e.find(".defaultimg").attr("src");c.arr==b&&(c.arr=d.parent().find(".tparrows"),c.rar=d.parent().find(".tp-rightarrow"),c.lar=d.parent().find(".tp-leftarrow"),c.raimg=c.rar.find(".tp-arr-imgholder"),c.laimg=c.lar.find(".tp-arr-imgholder"),c.raimg_b=c.rar.find(".tp-arr-imgholder2"),c.laimg_b=c.lar.find(".tp-arr-imgholder2"),c.ratit=c.rar.find(".tp-arr-titleholder"),c.latit=c.lar.find(".tp-arr-titleholder"));var i=c.arr,j=c.rar,k=c.lar,l=c.raimg,m=c.laimg,n=c.raimg_b,o=c.laimg_b,p=c.ratit,q=c.latit;if(e.data("title")!=b&&p.html(e.data("title")),f.data("title")!=b&&q.html(f.data("title")),j.hasClass("itishovered")&&j.width(p.outerWidth(!0)+parseInt(j.css("minWidth"),0)),k.hasClass("itishovered")&&k.width(q.outerWidth(!0)+parseInt(k.css("minWidth"),0)),i.hasClass("preview2")&&!i.hasClass("hashoveralready"))if(i.addClass("hashoveralready"),W()){var i=a(this),r=i.find(".tp-arr-titleholder");r.addClass("alwayshidden"),punchgs.TweenLite.set(r,{autoAlpha:0})}else i.hover(function(){var b=a(this),c=b.find(".tp-arr-titleholder");a(window).width()>767&&b.width(c.outerWidth(!0)+parseInt(b.css("minWidth"),0)),b.addClass("itishovered")},function(){var b=a(this);b.find(".tp-arr-titleholder"),b.css({width:parseInt(b.css("minWidth"),0)}),b.removeClass("itishovered")});f.data("thumb")!=b&&(g=f.data("thumb")),e.data("thumb")!=b&&(h=e.data("thumb")),i.hasClass("preview4")?(n.css({backgroundImage:"url("+h+")"}),o.css({backgroundImage:"url("+g+")"}),punchgs.TweenLite.fromTo(n,.8,{force3D:punchgs.force3d,x:0},{x:-l.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){l.css({backgroundImage:"url("+h+")"}),punchgs.TweenLite.set(n,{x:0})}}),punchgs.TweenLite.fromTo(o,.8,{force3D:punchgs.force3d,x:0},{x:l.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){m.css({backgroundImage:"url("+g+")"}),punchgs.TweenLite.set(o,{x:0})}}),punchgs.TweenLite.fromTo(l,.8,{x:0},{force3D:punchgs.force3d,x:-l.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){punchgs.TweenLite.set(l,{x:0})}}),punchgs.TweenLite.fromTo(m,.8,{x:0},{force3D:punchgs.force3d,x:l.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){punchgs.TweenLite.set(m,{x:0})}})):(punchgs.TweenLite.to(l,.5,{autoAlpha:0,onComplete:function(){l.css({backgroundImage:"url("+h+")"}),m.css({backgroundImage:"url("+g+")"})}}),punchgs.TweenLite.to(m,.5,{autoAlpha:0,onComplete:function(){punchgs.TweenLite.to(l,.5,{autoAlpha:1,delay:.2}),punchgs.TweenLite.to(m,.5,{autoAlpha:1,delay:.2})}})),j.hasClass("preview4")&&!j.hasClass("hashoveralready")&&(j.addClass("hashoveralready"),j.hover(function(){var b=a(this).find(".tp-arr-iwrapper"),c=a(this).find(".tp-arr-allwrapper");punchgs.TweenLite.fromTo(b,.4,{x:b.width()},{x:0,delay:.3,ease:punchgs.Power3.easeOut,overwrite:"all"}),punchgs.TweenLite.to(c,.2,{autoAlpha:1,overwrite:"all"})},function(){var b=a(this).find(".tp-arr-iwrapper"),c=a(this).find(".tp-arr-allwrapper");punchgs.TweenLite.to(b,.4,{x:b.width(),ease:punchgs.Power3.easeOut,delay:.2,overwrite:"all"}),punchgs.TweenLite.to(c,.2,{delay:.6,autoAlpha:0,overwrite:"all"})}),k.hover(function(){var b=a(this).find(".tp-arr-iwrapper"),c=a(this).find(".tp-arr-allwrapper");punchgs.TweenLite.fromTo(b,.4,{x:0-b.width()},{x:0,delay:.3,ease:punchgs.Power3.easeOut,overwrite:"all"}),punchgs.TweenLite.to(c,.2,{autoAlpha:1,overwrite:"all"})},function(){var b=a(this).find(".tp-arr-iwrapper"),c=a(this).find(".tp-arr-allwrapper");punchgs.TweenLite.to(b,.4,{x:0-b.width(),ease:punchgs.Power3.easeOut,delay:.2,overwrite:"all"}),punchgs.TweenLite.to(c,.2,{delay:.6,autoAlpha:0,overwrite:"all"})}))},r=function(c,d){if(d.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({height:d.container.height()}),d.container.closest(".rev_slider_wrapper").css({height:d.container.height()}),d.width=parseInt(d.container.width(),0),d.height=parseInt(d.container.height(),0),d.bw=d.width/d.startwidth,d.bh=d.height/d.startheight,d.bh>d.bw&&(d.bh=d.bw),d.bh<d.bw&&(d.bw=d.bh),d.bw<d.bh&&(d.bh=d.bw),d.bh>1&&(d.bw=1,d.bh=1),d.bw>1&&(d.bw=1,d.bh=1),d.height=Math.round(d.startheight*(d.width/d.startwidth)),d.height>d.startheight&&"on"!=d.autoHeight&&(d.height=d.startheight),"on"==d.fullScreen){d.height=d.bw*d.startheight,d.container.parent().width();var f=a(window).height();if(d.fullScreenOffsetContainer!=b){try{var g=d.fullScreenOffsetContainer.split(",");a.each(g,function(b,c){f-=a(c).outerHeight(!0),f<d.minFullScreenHeight&&(f=d.minFullScreenHeight)})}catch(h){}try{d.fullScreenOffset.split("%").length>1&&d.fullScreenOffset!=b&&d.fullScreenOffset.length>0?f-=a(window).height()*parseInt(d.fullScreenOffset,0)/100:d.fullScreenOffset!=b&&d.fullScreenOffset.length>0&&(f-=parseInt(d.fullScreenOffset,0)),f<d.minFullScreenHeight&&(f=d.minFullScreenHeight)}catch(h){}}d.container.parent().height(f),d.container.closest(".rev_slider_wrapper").height(f),d.container.css({height:"100%"}),d.height=f,d.minHeight!=b&&d.height<d.minHeight&&(d.height=d.minHeight)}else d.minHeight!=b&&d.height<d.minHeight&&(d.height=d.minHeight),d.container.height(d.height);d.slotw=Math.ceil(d.width/d.slots),d.sloth="on"==d.fullScreen?Math.ceil(a(window).height()/d.slots):Math.ceil(d.height/d.slots),"on"==d.autoHeight&&(d.sloth=Math.ceil(c.height()/d.slots))},s=function(c,d){c.find(".tp-caption").each(function(){a(this).addClass(a(this).data("transition")),a(this).addClass("start")}),c.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:c.parent().css("maxHeight")}).addClass("tp-revslider-mainul"),"on"==d.autoHeight&&(c.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:"none"}),c.css({maxHeight:"none"}),c.parent().css({maxHeight:"none"})),c.find(">ul:first >li").each(function(){var e=a(this);if(e.addClass("tp-revslider-slidesli"),e.css({width:"100%",height:"100%",overflow:"hidden"}),e.data("link")!=b){var f=e.data("link"),g="_self",h=60;"back"==e.data("slideindex")&&(h=0);var i=checksl=e.data("linktoslide");i!=b&&"next"!=i&&"prev"!=i&&c.find(">ul:first-child >li").each(function(){var b=a(this);b.data("origindex")+1==checksl&&(i=b.index()+1)}),e.data("target")!=b&&(g=e.data("target")),"slide"!=f&&(i="no");var j='<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:'+h+';" data-x="center" data-y="center" data-linktoslide="'+i+'" data-start="0"><a style="width:100%;height:100%;display:block"';"slide"!=f&&(j=j+' target="'+g+'" href="'+f+'"'),j+='><span style="width:100%;height:100%;display:block"></span></a></div>',e.append(j)}}),c.parent().css({overflow:"visible"}),c.find(">ul:first >li >img").each(function(c){var e=a(this);e.addClass("defaultimg"),e.data("lazyload")!=b&&1!=e.data("lazydone")||r(e,d),i(8)&&e.data("kenburns","off"),"on"==d.panZoomDisableOnMobile&&W()&&(e.data("kenburns","off"),e.data("bgfit","cover")),e.wrap('<div class="slotholder" style="width:100%;height:100%;"data-duration="'+e.data("duration")+'"'+'data-zoomstart="'+e.data("zoomstart")+'"'+'data-zoomend="'+e.data("zoomend")+'"'+'data-rotationstart="'+e.data("rotationstart")+'"'+'data-rotationend="'+e.data("rotationend")+'"'+'data-ease="'+e.data("ease")+'"'+'data-duration="'+e.data("duration")+'"'+'data-bgpositionend="'+e.data("bgpositionend")+'"'+'data-bgposition="'+e.data("bgposition")+'"'+'data-duration="'+e.data("duration")+'"'+'data-kenburns="'+e.data("kenburns")+'"'+'data-easeme="'+e.data("ease")+'"'+'data-bgfit="'+e.data("bgfit")+'"'+'data-bgfitend="'+e.data("bgfitend")+'"'+'data-owidth="'+e.data("owidth")+'"'+'data-oheight="'+e.data("oheight")+'"'+"></div>"),"none"!=d.dottedOverlay&&d.dottedOverlay!=b&&e.closest(".slotholder").append('<div class="tp-dottedoverlay '+d.dottedOverlay+'"></div>');
var f=e.attr("src"),h=(e.data("lazyload"),e.data("bgfit")),j=e.data("bgrepeat"),k=e.data("bgposition");h==b&&(h="cover"),j==b&&(j="no-repeat"),k==b&&(k="center center");var l=e.closest(".slotholder");e.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="'+e.data("lazyload")+'" data-bgfit="'+h+'"data-bgposition="'+k+'" data-bgrepeat="'+j+'" data-lazydone="'+e.data("lazydone")+'" src="'+f+'" data-src="'+f+'" style="background-color:'+e.css("backgroundColor")+";background-repeat:"+j+";background-image:url("+f+");background-size:"+h+";background-position:"+k+';width:100%;height:100%;"></div>'),i(8)&&(l.find(".tp-bgimg").css({backgroundImage:"none","background-image":"none"}),l.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="'+f+'" style="width:100%">')),e.css({opacity:0}),e.data("li-id",c)})},t=function(a,c,d,e){var f=a,g=f.find(".defaultimg"),h=f.data("zoomstart"),j=f.data("rotationstart");g.data("currotate")!=b&&(j=g.data("currotate")),g.data("curscale")!=b&&"box"==e?h=100*g.data("curscale"):g.data("curscale")!=b&&(h=g.data("curscale")),r(g,c);var k=g.data("src"),l=g.css("backgroundColor"),m=c.width,n=c.height,o=g.data("fxof"),p=0;"on"==c.autoHeight&&(n=c.container.height()),o==b&&(o=0);var q=0,s=g.data("bgfit"),t=g.data("bgrepeat"),v=g.data("bgposition");if(s==b&&(s="cover"),t==b&&(t="no-repeat"),v==b&&(v="center center"),i(8)){f.data("kenburns","off");var w=k;k=""}switch(e){case"box":var x=0,y=0,z=0;if(x=c.sloth>c.slotw?c.sloth:c.slotw,!d)var q=0-x;c.slotw=x,c.sloth=x;var y=0,z=0;"on"==f.data("kenburns")&&(s=h,s.toString().length<4&&(s=X(s,f,c)));for(var A=0;A<c.slots;A++){z=0;for(var B=0;B<c.slots;B++)f.append('<div class="slot" style="position:absolute;top:'+(p+z)+"px;"+"left:"+(o+y)+"px;"+"width:"+x+"px;"+"height:"+x+"px;"+'overflow:hidden;">'+'<div class="slotslide" data-x="'+y+'" data-y="'+z+'" '+'style="position:absolute;'+"top:"+0+"px;"+"left:"+0+"px;"+"width:"+x+"px;"+"height:"+x+"px;"+'overflow:hidden;">'+'<div style="position:absolute;'+"top:"+(0-z)+"px;"+"left:"+(0-y)+"px;"+"width:"+m+"px;"+"height:"+n+"px;"+"background-color:"+l+";"+"background-image:url("+k+");"+"background-repeat:"+t+";"+"background-size:"+s+";background-position:"+v+';">'+"</div></div></div>"),z+=x,i(8)&&(f.find(".slot ").last().find(".slotslide").append('<img src="'+w+'">'),u(f,c)),h!=b&&j!=b&&punchgs.TweenLite.set(f.find(".slot").last(),{rotationZ:j});y+=x}break;case"vertical":case"horizontal":if("on"==f.data("kenburns")&&(s=h,s.toString().length<4&&(s=X(s,f,c))),"horizontal"==e){if(!d)var q=0-c.slotw;for(var B=0;B<c.slots;B++)f.append('<div class="slot" style="position:absolute;top:'+(0+p)+"px;"+"left:"+(o+B*c.slotw)+"px;"+"overflow:hidden;width:"+(c.slotw+.6)+"px;"+"height:"+n+'px">'+'<div class="slotslide" style="position:absolute;'+"top:0px;left:"+q+"px;"+"width:"+(c.slotw+.6)+"px;"+"height:"+n+'px;overflow:hidden;">'+'<div style="background-color:'+l+";"+"position:absolute;top:0px;"+"left:"+(0-B*c.slotw)+"px;"+"width:"+m+"px;height:"+n+"px;"+"background-image:url("+k+");"+"background-repeat:"+t+";"+"background-size:"+s+";background-position:"+v+';">'+"</div></div></div>"),h!=b&&j!=b&&punchgs.TweenLite.set(f.find(".slot").last(),{rotationZ:j}),i(8)&&(f.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="'+w+'" style="width:100%;height:auto">'),u(f,c))}else{if(!d)var q=0-c.sloth;for(var B=0;B<c.slots+2;B++)f.append('<div class="slot" style="position:absolute;top:'+(p+B*c.sloth)+"px;"+"left:"+o+"px;"+"overflow:hidden;"+"width:"+m+"px;"+"height:"+c.sloth+'px">'+'<div class="slotslide" style="position:absolute;'+"top:"+q+"px;"+"left:0px;width:"+m+"px;"+"height:"+c.sloth+"px;"+'overflow:hidden;">'+'<div style="background-color:'+l+";"+"position:absolute;"+"top:"+(0-B*c.sloth)+"px;"+"left:0px;"+"width:"+m+"px;height:"+n+"px;"+"background-image:url("+k+");"+"background-repeat:"+t+";"+"background-size:"+s+";background-position:"+v+';">'+"</div></div></div>"),h!=b&&j!=b&&punchgs.TweenLite.set(f.find(".slot").last(),{rotationZ:j}),i(8)&&(f.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="'+w+'" style="width:100%;height:auto;">'),u(f,c))}}},u=function(a,b){if(i(8)){var c=a.find(".ieeightfallbackimage");c.width(),c.height(),b.startwidth/b.startheight<a.data("owidth")/a.data("oheight")?c.css({width:"auto",height:"100%"}):c.css({width:"100%",height:"auto"}),setTimeout(function(){var d=c.width(),e=c.height(),f=a.data("bgposition");"center center"==f&&c.css({position:"absolute",top:b.height/2-e/2+"px",left:b.width/2-d/2+"px"}),("center top"==f||"top center"==f)&&c.css({position:"absolute",top:"0px",left:b.width/2-d/2+"px"}),("center bottom"==f||"bottom center"==f)&&c.css({position:"absolute",bottom:"0px",left:b.width/2-d/2+"px"}),("right top"==f||"top right"==f)&&c.css({position:"absolute",top:"0px",right:"0px"}),("right bottom"==f||"bottom right"==f)&&c.css({position:"absolute",bottom:"0px",right:"0px"}),("right center"==f||"center right"==f)&&c.css({position:"absolute",top:b.height/2-e/2+"px",right:"0px"}),("left bottom"==f||"bottom left"==f)&&c.css({position:"absolute",bottom:"0px",left:"0px"}),("left center"==f||"center left"==f)&&c.css({position:"absolute",top:b.height/2-e/2+"px",left:"0px"})},20)}},v=function(b,c,d){d.find(".slot").each(function(){a(this).remove()}),c.transition=0},w=function(c,d){c.find("img, .defaultimg").each(function(){var e=a(this),f=e.data("lazyload");if(f!=e.attr("src")&&3>d&&f!=b&&"undefined"!=f){if(f!=b&&"undefined"!=f){e.attr("src",f);var g=new Image;g.onload=function(){e.data("lazydone",1),e.hasClass("defaultimg")&&x(e,g)},g.error=function(){e.data("lazydone",1)},g.src=e.attr("src"),g.complete&&(e.hasClass("defaultimg")&&x(e,g),e.data("lazydone",1))}}else if((f===b||"undefined"===f)&&1!=e.data("lazydone")){var g=new Image;g.onload=function(){e.hasClass("defaultimg")&&x(e,g),e.data("lazydone",1)},g.error=function(){e.data("lazydone",1)},g.src=e.attr("src")!=b&&"undefined"!=e.attr("src")?e.attr("src"):e.data("src"),g.complete&&(e.hasClass("defaultimg")&&x(e,g),e.data("lazydone",1))}})},x=function(a,b){var c=a.closest("li"),d=b.width,e=b.height;c.data("owidth",d),c.data("oheight",e),c.find(".slotholder").data("owidth",d),c.find(".slotholder").data("oheight",e),c.data("loadeddone",1)},y=function(c,d,e){w(c,0);var f=setInterval(function(){e.bannertimeronpause=!0,e.container.trigger("stoptimer"),e.cd=0;var g=0;c.find("img, .defaultimg").each(function(){1!=a(this).data("lazydone")&&g++}),g>0?w(c,g):(clearInterval(f),d!=b&&d())},100)},z=function(a,c){try{a.find(">ul:first-child >li:eq("+c.act+")")}catch(e){a.find(">ul:first-child >li:eq(1)")}c.lastslide=c.act;var f=a.find(">ul:first-child >li:eq("+c.next+")"),g=f.find(".defaultimg");c.bannertimeronpause=!0,a.trigger("stoptimer"),c.cd=0,g.data("lazyload")!=b&&"undefined"!=g.data("lazyload")&&1!=g.data("lazydone")?(i(8)?g.attr("src",f.find(".defaultimg").data("lazyload")):g.css({backgroundImage:'url("'+f.find(".defaultimg").data("lazyload")+'")'}),g.data("src",f.find(".defaultimg").data("lazyload")),g.data("lazydone",0),g.data("orgw",0),f.data("loadeddone",1),a.find(".tp-loader").css({display:"block"}),y(a.find(".tp-static-layers"),function(){y(f,function(){var b=f.find(".slotholder");if("on"==b.data("kenburns"))var d=setInterval(function(){var e=b.data("owidth");e>=0&&(clearInterval(d),A(c,g,a))},10);else A(c,g,a)},c)},c)):f.data("loadeddone")===b?(f.data("loadeddone",1),y(f,function(){A(c,g,a)},c)):A(c,g,a)},A=function(a,b,c){a.bannertimeronpause=!1,a.cd=0,c.trigger("nulltimer"),c.find(".tp-loader").css({display:"none"}),r(b,a),p(c,a),r(b,a),B(c,a)},B=function(a,c){a.trigger("revolution.slide.onbeforeswap"),c.transition=1,c.videoplaying=!1;try{var d=a.find(">ul:first-child >li:eq("+c.act+")")}catch(e){var d=a.find(">ul:first-child >li:eq(1)")}c.lastslide=c.act;var f=a.find(">ul:first-child >li:eq("+c.next+")");setTimeout(function(){q(c)},200);var g=d.find(".slotholder"),h=f.find(".slotholder");("on"==h.data("kenburns")||"on"==g.data("kenburns"))&&(_(a,c),a.find(".kenburnimg").remove()),f.data("delay")!=b?(c.cd=0,c.delay=f.data("delay")):c.delay=c.origcd,1==c.firststart&&punchgs.TweenLite.set(d,{autoAlpha:0}),punchgs.TweenLite.set(d,{zIndex:18}),punchgs.TweenLite.set(f,{autoAlpha:0,zIndex:20});var i=0;d.index()!=f.index()&&1!=c.firststart&&(i=R(d,c)),"on"!=d.data("saveperformance")&&(i=0),setTimeout(function(){a.trigger("restarttimer"),C(a,c,f,d,g,h)},i)},C=function(c,d,e,f,g,h){function x(){a.each(o,function(a,b){(b[0]==m||b[8]==m)&&(j=b[1],n=b[2],r=s),s+=1})}"prepared"==e.data("differentissplayed")&&(e.data("differentissplayed","done"),e.data("transition",e.data("savedtransition")),e.data("slotamount",e.data("savedslotamount")),e.data("masterspeed",e.data("savedmasterspeed"))),e.data("fstransition")!=b&&"done"!=e.data("differentissplayed")&&(e.data("savedtransition",e.data("transition")),e.data("savedslotamount",e.data("slotamount")),e.data("savedmasterspeed",e.data("masterspeed")),e.data("transition",e.data("fstransition")),e.data("slotamount",e.data("fsslotamount")),e.data("masterspeed",e.data("fsmasterspeed")),e.data("differentissplayed","prepared")),c.find(".active-revslide").removeClass(".active-revslide"),e.addClass("active-revslide"),e.data("transition")==b&&e.data("transition","random");var j=0,k=e.data("transition").split(","),l=e.data("nexttransid")==b?-1:e.data("nexttransid");"on"==e.data("randomtransition")?l=Math.round(Math.random()*k.length):l+=1,l==k.length&&(l=0),e.data("nexttransid",l);var m=k[l];d.ie&&("boxfade"==m&&(m="boxslide"),"slotfade-vertical"==m&&(m="slotzoom-vertical"),"slotfade-horizontal"==m&&(m="slotzoom-horizontal")),i(8)&&(m=11);var n=0;"scroll"==d.parallax&&d.parallaxFirstGo==b&&(d.parallaxFirstGo=!0,bb(c,d),setTimeout(function(){bb(c,d)},210),setTimeout(function(){bb(c,d)},420)),"slidehorizontal"==m&&(m="slideleft",1==d.leftarrowpressed&&(m="slideright")),"slidevertical"==m&&(m="slideup",1==d.leftarrowpressed&&(m="slidedown")),"parallaxhorizontal"==m&&(m="parallaxtoleft",1==d.leftarrowpressed&&(m="parallaxtoright")),"parallaxvertical"==m&&(m="parallaxtotop",1==d.leftarrowpressed&&(m="parallaxtobottom"));var o=[["boxslide",0,1,10,0,"box",!1,null,0],["boxfade",1,0,10,0,"box",!1,null,1],["slotslide-horizontal",2,0,0,200,"horizontal",!0,!1,2],["slotslide-vertical",3,0,0,200,"vertical",!0,!1,3],["curtain-1",4,3,0,0,"horizontal",!0,!0,4],["curtain-2",5,3,0,0,"horizontal",!0,!0,5],["curtain-3",6,3,25,0,"horizontal",!0,!0,6],["slotzoom-horizontal",7,0,0,400,"horizontal",!0,!0,7],["slotzoom-vertical",8,0,0,0,"vertical",!0,!0,8],["slotfade-horizontal",9,0,0,500,"horizontal",!0,null,9],["slotfade-vertical",10,0,0,500,"vertical",!0,null,10],["fade",11,0,1,300,"horizontal",!0,null,11],["slideleft",12,0,1,0,"horizontal",!0,!0,12],["slideup",13,0,1,0,"horizontal",!0,!0,13],["slidedown",14,0,1,0,"horizontal",!0,!0,14],["slideright",15,0,1,0,"horizontal",!0,!0,15],["papercut",16,0,0,600,"",null,null,16],["3dcurtain-horizontal",17,0,20,100,"vertical",!1,!0,17],["3dcurtain-vertical",18,0,10,100,"horizontal",!1,!0,18],["cubic",19,0,20,600,"horizontal",!1,!0,19],["cube",19,0,20,600,"horizontal",!1,!0,20],["flyin",20,0,4,600,"vertical",!1,!0,21],["turnoff",21,0,1,1600,"horizontal",!1,!0,22],["incube",22,0,20,200,"horizontal",!1,!0,23],["cubic-horizontal",23,0,20,500,"vertical",!1,!0,24],["cube-horizontal",23,0,20,500,"vertical",!1,!0,25],["incube-horizontal",24,0,20,500,"vertical",!1,!0,26],["turnoff-vertical",25,0,1,200,"horizontal",!1,!0,27],["fadefromright",12,1,1,0,"horizontal",!0,!0,28],["fadefromleft",15,1,1,0,"horizontal",!0,!0,29],["fadefromtop",14,1,1,0,"horizontal",!0,!0,30],["fadefrombottom",13,1,1,0,"horizontal",!0,!0,31],["fadetoleftfadefromright",12,2,1,0,"horizontal",!0,!0,32],["fadetorightfadetoleft",15,2,1,0,"horizontal",!0,!0,33],["fadetobottomfadefromtop",14,2,1,0,"horizontal",!0,!0,34],["fadetotopfadefrombottom",13,2,1,0,"horizontal",!0,!0,35],["parallaxtoright",12,3,1,0,"horizontal",!0,!0,36],["parallaxtoleft",15,3,1,0,"horizontal",!0,!0,37],["parallaxtotop",14,3,1,0,"horizontal",!0,!0,38],["parallaxtobottom",13,3,1,0,"horizontal",!0,!0,39],["scaledownfromright",12,4,1,0,"horizontal",!0,!0,40],["scaledownfromleft",15,4,1,0,"horizontal",!0,!0,41],["scaledownfromtop",14,4,1,0,"horizontal",!0,!0,42],["scaledownfrombottom",13,4,1,0,"horizontal",!0,!0,43],["zoomout",13,5,1,0,"horizontal",!0,!0,44],["zoomin",13,6,1,0,"horizontal",!0,!0,45],["notransition",26,0,1,0,"horizontal",!0,null,46]],p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],q=[16,17,18,19,20,21,22,23,24,25,26,27],j=0,n=1,r=0,s=0,u=new Array;"on"==h.data("kenburns")&&(("boxslide"==m||0==m||"boxfade"==m||1==m||"papercut"==m||16==m)&&(m=11),Y(c,d,!0,!0)),"random"==m&&(m=Math.round(Math.random()*o.length-1),m>o.length-1&&(m=o.length-1)),"random-static"==m&&(m=Math.round(Math.random()*p.length-1),m>p.length-1&&(m=p.length-1),m=p[m]),"random-premium"==m&&(m=Math.round(Math.random()*q.length-1),m>q.length-1&&(m=q.length-1),m=q[m]);var v=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];if(1==d.isJoomla&&window.MooTools!=b&&-1!=v.indexOf(m)){var w=Math.round(Math.random()*(q.length-2))+1;w>q.length-1&&(w=q.length-1),0==w&&(w=1),m=q[w]}x(),i(8)&&j>15&&28>j&&(m=Math.round(Math.random()*p.length-1),m>p.length-1&&(m=p.length-1),m=p[m],s=0,x());var y=-1;(1==d.leftarrowpressed||d.act>d.next)&&(y=1),d.leftarrowpressed=0,j>26&&(j=26),0>j&&(j=0);var z=300;e.data("masterspeed")!=b&&e.data("masterspeed")>99&&e.data("masterspeed")<d.delay&&(z=e.data("masterspeed")),e.data("masterspeed")!=b&&e.data("masterspeed")>d.delay&&(z=d.delay),u=o[r],c.parent().find(".bullet").each(function(){var b=a(this),c=b.index();b.removeClass("selected"),("withbullet"==d.navigationArrows||"nexttobullets"==d.navigationArrows)&&(c=b.index()-1),c==d.next&&b.addClass("selected")});var A=new punchgs.TimelineLite({onComplete:function(){D(c,d,h,g,e,f,A)}});if(A.add(punchgs.TweenLite.set(h.find(".defaultimg"),{opacity:0})),A.pause(),e.data("slotamount")==b||e.data("slotamount")<1?(d.slots=Math.round(12*Math.random()+4),"boxslide"==m?d.slots=Math.round(6*Math.random()+3):"flyin"==m&&(d.slots=Math.round(4*Math.random()+1))):d.slots=e.data("slotamount"),d.rotate=e.data("rotate")==b?0:999==e.data("rotate")?Math.round(360*Math.random()):e.data("rotate"),(!a.support.transition||d.ie||d.ie9)&&(d.rotate=0),1==d.firststart&&(d.firststart=0),z+=u[4],(4==j||5==j||6==j)&&d.slots<3&&(d.slots=3),0!=u[3]&&(d.slots=Math.min(d.slots,u[3])),9==j&&(d.slots=d.width/20),10==j&&(d.slots=d.height/20),null!=u[7]&&t(g,d,u[7],u[5]),null!=u[6]&&t(h,d,u[6],u[5]),0==j){var B=Math.ceil(d.height/d.sloth),C=0;h.find(".slotslide").each(function(b){var c=a(this);C+=1,C==B&&(C=0),A.add(punchgs.TweenLite.from(c,z/600,{opacity:0,top:0-d.sloth,left:0-d.slotw,rotation:d.rotate,force3D:"auto",ease:punchgs.Power2.easeOut}),(15*b+30*C)/1500)})}if(1==j){var E,F=0;h.find(".slotslide").each(function(b){var c=a(this),e=Math.random()*z+300,f=500*Math.random()+200;e+f>E&&(E=f+f,F=b),A.add(punchgs.TweenLite.from(c,e/1e3,{autoAlpha:0,force3D:"auto",rotation:d.rotate,ease:punchgs.Power2.easeInOut}),f/1e3)})}if(2==j){var G=new punchgs.TimelineLite;g.find(".slotslide").each(function(){var b=a(this);G.add(punchgs.TweenLite.to(b,z/1e3,{left:d.slotw,force3D:"auto",rotation:0-d.rotate}),0),A.add(G,0)}),h.find(".slotslide").each(function(){var b=a(this);G.add(punchgs.TweenLite.from(b,z/1e3,{left:0-d.slotw,force3D:"auto",rotation:d.rotate}),0),A.add(G,0)})}if(3==j){var G=new punchgs.TimelineLite;g.find(".slotslide").each(function(){var b=a(this);G.add(punchgs.TweenLite.to(b,z/1e3,{top:d.sloth,rotation:d.rotate,force3D:"auto",transformPerspective:600}),0),A.add(G,0)}),h.find(".slotslide").each(function(){var b=a(this);G.add(punchgs.TweenLite.from(b,z/1e3,{top:0-d.sloth,rotation:d.rotate,ease:punchgs.Power2.easeOut,force3D:"auto",transformPerspective:600}),0),A.add(G,0)})}if(4==j||5==j){setTimeout(function(){g.find(".defaultimg").css({opacity:0})},100);var H=z/1e3,G=new punchgs.TimelineLite;g.find(".slotslide").each(function(b){var c=a(this),e=b*H/d.slots;5==j&&(e=(d.slots-b-1)*H/d.slots/1.5),G.add(punchgs.TweenLite.to(c,3*H,{transformPerspective:600,force3D:"auto",top:0+d.height,opacity:.5,rotation:d.rotate,ease:punchgs.Power2.easeInOut,delay:e}),0),A.add(G,0)}),h.find(".slotslide").each(function(b){var c=a(this),e=b*H/d.slots;5==j&&(e=(d.slots-b-1)*H/d.slots/1.5),G.add(punchgs.TweenLite.from(c,3*H,{top:0-d.height,opacity:.5,rotation:d.rotate,force3D:"auto",ease:punchgs.Power2.easeInOut,delay:e}),0),A.add(G,0)})}if(6==j){d.slots<2&&(d.slots=2),d.slots%2&&(d.slots=d.slots+1);var G=new punchgs.TimelineLite;setTimeout(function(){g.find(".defaultimg").css({opacity:0})},100),g.find(".slotslide").each(function(b){var c=a(this);if(b+1<d.slots/2)var e=90*(b+2);else var e=90*(2+d.slots-b);G.add(punchgs.TweenLite.to(c,(z+e)/1e3,{top:0+d.height,opacity:1,force3D:"auto",rotation:d.rotate,ease:punchgs.Power2.easeInOut}),0),A.add(G,0)}),h.find(".slotslide").each(function(b){var c=a(this);if(b+1<d.slots/2)var e=90*(b+2);else var e=90*(2+d.slots-b);G.add(punchgs.TweenLite.from(c,(z+e)/1e3,{top:0-d.height,opacity:1,force3D:"auto",rotation:d.rotate,ease:punchgs.Power2.easeInOut}),0),A.add(G,0)})}if(7==j){z=2*z,z>d.delay&&(z=d.delay);var G=new punchgs.TimelineLite;setTimeout(function(){g.find(".defaultimg").css({opacity:0})},100),g.find(".slotslide").each(function(){var b=a(this).find("div");G.add(punchgs.TweenLite.to(b,z/1e3,{left:0-d.slotw/2+"px",top:0-d.height/2+"px",width:2*d.slotw+"px",height:2*d.height+"px",opacity:0,rotation:d.rotate,force3D:"auto",ease:punchgs.Power2.easeOut}),0),A.add(G,0)}),h.find(".slotslide").each(function(b){var c=a(this).find("div");G.add(punchgs.TweenLite.fromTo(c,z/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0-b*d.slotw+"px",ease:punchgs.Power2.easeOut,force3D:"auto",top:"0px",width:d.width,height:d.height,opacity:1,rotation:0,delay:.1}),0),A.add(G,0)})}if(8==j){z=3*z,z>d.delay&&(z=d.delay);var G=new punchgs.TimelineLite;g.find(".slotslide").each(function(){var b=a(this).find("div");G.add(punchgs.TweenLite.to(b,z/1e3,{left:0-d.width/2+"px",top:0-d.sloth/2+"px",width:2*d.width+"px",height:2*d.sloth+"px",force3D:"auto",opacity:0,rotation:d.rotate}),0),A.add(G,0)}),h.find(".slotslide").each(function(b){var c=a(this).find("div");G.add(punchgs.TweenLite.fromTo(c,z/1e3,{left:0,top:0,opacity:0,force3D:"auto"},{left:"0px",top:0-b*d.sloth+"px",width:h.find(".defaultimg").data("neww")+"px",height:h.find(".defaultimg").data("newh")+"px",opacity:1,rotation:0}),0),A.add(G,0)})}if(9==j||10==j){var J=0;h.find(".slotslide").each(function(b){var c=a(this);J++,A.add(punchgs.TweenLite.fromTo(c,z/1e3,{autoAlpha:0,force3D:"auto",transformPerspective:600},{autoAlpha:1,ease:punchgs.Power2.easeInOut,delay:5*b/1e3}),0)})}if(11==j||26==j){var J=0;26==j&&(z=0),h.find(".slotslide").each(function(){var c=a(this);A.add(punchgs.TweenLite.from(c,z/1e3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power2.easeInOut}),0)})}if(12==j||13==j||14==j||15==j){z=z,z>d.delay&&(z=d.delay),setTimeout(function(){punchgs.TweenLite.set(g.find(".defaultimg"),{autoAlpha:0})},100);var K=d.width,M=d.height,N=h.find(".slotslide"),O=0,P=0,Q=1,R=1,S=1,T=punchgs.Power2.easeInOut,U=punchgs.Power2.easeInOut,V=z/1e3,W=V;("on"==d.fullWidth||"on"==d.fullScreen)&&(K=N.width(),M=N.height()),12==j?O=K:15==j?O=0-K:13==j?P=M:14==j&&(P=0-M),1==n&&(Q=0),2==n&&(Q=0),3==n&&(T=punchgs.Power2.easeInOut,U=punchgs.Power1.easeInOut,V=z/1200),(4==n||5==n)&&(R=.6),6==n&&(R=1.4),(5==n||6==n)&&(S=1.4,Q=0,K=0,M=0,O=0,P=0),6==n&&(S=.6),A.add(punchgs.TweenLite.from(N,V,{left:O,top:P,scale:S,opacity:Q,rotation:d.rotate,ease:U,force3D:"auto"}),0);var Z=g.find(".slotslide");if((4==n||5==n)&&(K=0,M=0),1!=n)switch(j){case 12:A.add(punchgs.TweenLite.to(Z,W,{left:0-K+"px",force3D:"auto",scale:R,opacity:Q,rotation:d.rotate,ease:T}),0);break;case 15:A.add(punchgs.TweenLite.to(Z,W,{left:K+"px",force3D:"auto",scale:R,opacity:Q,rotation:d.rotate,ease:T}),0);break;case 13:A.add(punchgs.TweenLite.to(Z,W,{top:0-M+"px",force3D:"auto",scale:R,opacity:Q,rotation:d.rotate,ease:T}),0);break;case 14:A.add(punchgs.TweenLite.to(Z,W,{top:M+"px",force3D:"auto",scale:R,opacity:Q,rotation:d.rotate,ease:T}),0)}}if(16==j){var G=new punchgs.TimelineLite;A.add(punchgs.TweenLite.set(f,{position:"absolute","z-index":20}),0),A.add(punchgs.TweenLite.set(e,{position:"absolute","z-index":15}),0),f.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'),f.find(".tp-half-one").clone(!0).appendTo(f).addClass("tp-half-two"),f.find(".tp-half-two").removeClass("tp-half-one");var K=d.width,M=d.height;"on"==d.autoHeight&&(M=c.height()),f.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+K+"px;height:"+M+'px;"></div>'),f.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+K+"px;height:"+M+'px;"></div>'),f.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"}),f.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'),A.add(punchgs.TweenLite.set(f.find(".tp-half-two"),{width:K,height:M,overflow:"hidden",zIndex:15,position:"absolute",top:M/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"}),0),A.add(punchgs.TweenLite.set(f.find(".tp-half-one"),{width:K,height:M/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"}),0);var _=(f.find(".defaultimg"),Math.round(20*Math.random()-10)),ab=Math.round(20*Math.random()-10),cb=Math.round(20*Math.random()-10),db=.4*Math.random()-.2,eb=.4*Math.random()-.2,fb=1*Math.random()+1,gb=1*Math.random()+1,hb=.3*Math.random()+.3;A.add(punchgs.TweenLite.set(f.find(".tp-half-one"),{overflow:"hidden"}),0),A.add(punchgs.TweenLite.fromTo(f.find(".tp-half-one"),z/800,{width:K,height:M/2,position:"absolute",top:"0px",left:"0px",force3D:"auto",transformOrigin:"center top"},{scale:fb,rotation:_,y:0-M-M/4,autoAlpha:0,ease:punchgs.Power2.easeInOut}),0),A.add(punchgs.TweenLite.fromTo(f.find(".tp-half-two"),z/800,{width:K,height:M,overflow:"hidden",position:"absolute",top:M/2,left:"0px",force3D:"auto",transformOrigin:"center bottom"},{scale:gb,rotation:ab,y:M+M/4,ease:punchgs.Power2.easeInOut,autoAlpha:0,onComplete:function(){punchgs.TweenLite.set(f,{position:"absolute","z-index":15}),punchgs.TweenLite.set(e,{position:"absolute","z-index":20}),f.find(".tp-half-one").length>0&&(f.find(".tp-half-one .defaultimg").unwrap(),f.find(".tp-half-one .slotholder").unwrap()),f.find(".tp-half-two").remove()}}),0),G.add(punchgs.TweenLite.set(h.find(".defaultimg"),{autoAlpha:1}),0),null!=f.html()&&A.add(punchgs.TweenLite.fromTo(e,(z-200)/1e3,{scale:hb,x:d.width/4*db,y:M/4*eb,rotation:cb,force3D:"auto",transformOrigin:"center center",ease:punchgs.Power2.easeOut},{autoAlpha:1,scale:1,x:0,y:0,rotation:0}),0),A.add(G,0)}if(17==j&&h.find(".slotslide").each(function(b){var c=a(this);A.add(punchgs.TweenLite.fromTo(c,z/800,{opacity:0,rotationY:0,scale:.9,rotationX:-110,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:punchgs.Power3.easeOut,delay:.06*b}),0)}),18==j&&h.find(".slotslide").each(function(b){var c=a(this);A.add(punchgs.TweenLite.fromTo(c,z/500,{autoAlpha:0,rotationY:310,scale:.9,rotationX:10,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{autoAlpha:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:punchgs.Power3.easeOut,delay:.06*b}),0)}),19==j||22==j){var G=new punchgs.TimelineLite;A.add(punchgs.TweenLite.set(f,{zIndex:20}),0),A.add(punchgs.TweenLite.set(e,{zIndex:20}),0),setTimeout(function(){g.find(".defaultimg").css({opacity:0})},100);var kb=(e.css("z-index"),f.css("z-index"),90),Q=1,lb="center center ";1==y&&(kb=-90),19==j?(lb=lb+"-"+d.height/2,Q=0):lb+=d.height/2,punchgs.TweenLite.set(c,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600}),h.find(".slotslide").each(function(b){var c=a(this);G.add(punchgs.TweenLite.fromTo(c,z/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",left:0,rotationY:d.rotate,z:10,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:lb,rotationX:kb},{left:0,rotationY:0,top:0,z:0,scale:1,force3D:"auto",rotationX:0,delay:50*b/1e3,ease:punchgs.Power2.easeInOut}),0),G.add(punchgs.TweenLite.to(c,.1,{autoAlpha:1,delay:50*b/1e3}),0),A.add(G)}),g.find(".slotslide").each(function(b){var c=a(this),e=-90;1==y&&(e=90),G.add(punchgs.TweenLite.fromTo(c,z/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",autoAlpha:1,rotationY:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:lb,rotationX:0},{autoAlpha:1,rotationY:d.rotate,top:0,z:10,scale:1,rotationX:e,delay:50*b/1e3,force3D:"auto",ease:punchgs.Power2.easeInOut}),0),A.add(G)})}if(20==j){if(setTimeout(function(){g.find(".defaultimg").css({opacity:0})},100),e.css("z-index"),f.css("z-index"),1==y)var mb=-d.width,kb=70,lb="left center -"+d.height/2;else var mb=d.width,kb=-70,lb="right center -"+d.height/2;h.find(".slotslide").each(function(b){var c=a(this);A.add(punchgs.TweenLite.fromTo(c,z/1500,{left:mb,rotationX:40,z:-600,opacity:Q,top:0,force3D:"auto",transformPerspective:600,transformOrigin:lb,rotationY:kb},{left:0,delay:50*b/1e3,ease:punchgs.Power2.easeInOut}),0),A.add(punchgs.TweenLite.fromTo(c,z/1e3,{rotationX:40,z:-600,opacity:Q,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:lb,rotationY:kb},{rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:50*b/1e3,ease:punchgs.Power2.easeInOut}),0),A.add(punchgs.TweenLite.to(c,.1,{opacity:1,force3D:"auto",delay:50*b/1e3+z/2e3}),0)}),g.find(".slotslide").each(function(b){var c=a(this);if(1!=y)var e=-d.width,f=70,g="left center -"+d.height/2;else var e=d.width,f=-70,g="right center -"+d.height/2;A.add(punchgs.TweenLite.fromTo(c,z/1e3,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:g,rotationY:0},{opacity:1,rotationX:40,top:0,z:-600,left:e,force3D:"auto",scale:.8,rotationY:f,delay:50*b/1e3,ease:punchgs.Power2.easeInOut}),0),A.add(punchgs.TweenLite.to(c,.1,{force3D:"auto",opacity:0,delay:50*b/1e3+(z/1e3-z/1e4)}),0)})}if(21==j||25==j){setTimeout(function(){g.find(".defaultimg").css({opacity:0})},100);var kb=(e.css("z-index"),f.css("z-index"),90),mb=-d.width,nb=-kb;if(1==y)if(25==j){var lb="center top 0";kb=d.rotate}else{var lb="left center 0";nb=d.rotate}else if(mb=d.width,kb=-90,25==j){var lb="center bottom 0";nb=-kb,kb=d.rotate}else{var lb="right center 0";nb=d.rotate}h.find(".slotslide").each(function(){var c=a(this);A.add(punchgs.TweenLite.fromTo(c,z/1e3,{left:0,transformStyle:"flat",rotationX:nb,z:0,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:lb,rotationY:kb},{left:0,rotationX:0,top:0,z:0,autoAlpha:1,scale:1,rotationY:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),0)}),1!=y?(mb=-d.width,kb=90,25==j?(lb="center top 0",nb=-kb,kb=d.rotate):(lb="left center 0",nb=d.rotate)):(mb=d.width,kb=-90,25==j?(lb="center bottom 0",nb=-kb,kb=d.rotate):(lb="right center 0",nb=d.rotate)),g.find(".slotslide").each(function(){var c=a(this);A.add(punchgs.TweenLite.fromTo(c,z/1e3,{left:0,transformStyle:"flat",rotationX:0,z:0,autoAlpha:1,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:lb,rotationY:0},{left:0,rotationX:nb,top:0,z:0,autoAlpha:1,force3D:"auto",scale:1,rotationY:kb,ease:punchgs.Power1.easeInOut}),0)})}if(23==j||24==j){setTimeout(function(){g.find(".defaultimg").css({opacity:0})},100);var kb=(e.css("z-index"),f.css("z-index"),-90),Q=1,ob=0;if(1==y&&(kb=90),23==j){var lb="center center -"+d.width/2;Q=0}else var lb="center center "+d.width/2;punchgs.TweenLite.set(c,{transformStyle:"preserve-3d",backfaceVisibility:"hidden",perspective:2500}),h.find(".slotslide").each(function(b){var c=a(this);A.add(punchgs.TweenLite.fromTo(c,z/1e3,{left:ob,rotationX:d.rotate,force3D:"auto",opacity:Q,top:0,scale:1,transformPerspective:600,transformOrigin:lb,rotationY:kb},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:50*b/500,ease:punchgs.Power2.easeInOut}),0)}),kb=90,1==y&&(kb=-90),g.find(".slotslide").each(function(b){var c=a(this);A.add(punchgs.TweenLite.fromTo(c,z/1e3,{left:0,autoAlpha:1,rotationX:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:lb,rotationY:0},{left:ob,autoAlpha:1,rotationX:d.rotate,top:0,scale:1,rotationY:kb,delay:50*b/500,ease:punchgs.Power2.easeInOut}),0)})}A.pause(),L(e,d,null,A),punchgs.TweenLite.to(e,.001,{autoAlpha:1});var pb={};pb.slideIndex=d.next+1,pb.slide=e,c.trigger("revolution.slide.onchange",pb),setTimeout(function(){c.trigger("revolution.slide.onafterswap")},z),c.trigger("revolution.slide.onvideostop")},D=function(a,b,c,d,e,f,g){punchgs.TweenLite.to(c.find(".defaultimg"),.001,{autoAlpha:1,onComplete:function(){v(a,b,e)}}),e.index()!=f.index()&&punchgs.TweenLite.to(f,.2,{autoAlpha:0,onComplete:function(){v(a,b,f)}}),b.act=b.next,"thumb"==b.navigationType&&db(a),"on"==c.data("kenburns")&&Y(a,b),a.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible"),e.addClass("current-sr-slide-visible"),("scroll"==b.parallax||"scroll+mouse"==b.parallax||"mouse+scroll"==b.parallax)&&bb(a,b),g.clear()},E=function(b){var c=b.target.getVideoEmbedCode(),d=a("#"+c.split('id="')[1].split('"')[0]),e=d.closest(".tp-simpleresponsive"),f=d.parent().data("player");if(b.data==YT.PlayerState.PLAYING){var g=e.find(".tp-bannertimer"),h=g.data("opt");"mute"==d.closest(".tp-caption").data("volume")&&f.mute(),h.videoplaying=!0,e.trigger("stoptimer"),e.trigger("revolution.slide.onvideoplay")}else{var g=e.find(".tp-bannertimer"),h=g.data("opt");-1!=b.data&&3!=b.data&&(h.videoplaying=!1,e.trigger("starttimer"),e.trigger("revolution.slide.onvideostop")),0==b.data&&1==h.nextslideatend?h.container.revnext():(h.videoplaying=!1,e.trigger("starttimer"),e.trigger("revolution.slide.onvideostop"))}},F=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent(b,c,!1)},G=function(b,c){var d=$f(b),e=a("#"+b),f=e.closest(".tp-simpleresponsive"),g=e.closest(".tp-caption");setTimeout(function(){d.addEvent("ready",function(){c&&d.api("play"),d.addEvent("play",function(){var b=f.find(".tp-bannertimer"),c=b.data("opt");c.videoplaying=!0,f.trigger("stoptimer"),"mute"==g.data("volume")&&d.api("setVolume","0")}),d.addEvent("finish",function(){var b=f.find(".tp-bannertimer"),c=b.data("opt");c.videoplaying=!1,f.trigger("starttimer"),f.trigger("revolution.slide.onvideoplay"),1==c.nextslideatend&&c.container.revnext()}),d.addEvent("pause",function(){var b=f.find(".tp-bannertimer"),c=b.data("opt");c.videoplaying=!1,f.trigger("starttimer"),f.trigger("revolution.slide.onvideostop")}),g.find(".tp-thumb-image").click(function(){punchgs.TweenLite.to(a(this),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),d.api("play")})})},150)},H=function(a,c){var d=c.width(),e=c.height(),f=a.data("mediaAspect");f==b&&(f=1);var g=d/e;a.css({position:"absolute"}),a.find("video"),f>g?punchgs.TweenLite.to(a,1e-4,{width:e*f,force3D:"auto",top:0,left:0-(e*f-d)/2,height:e}):punchgs.TweenLite.to(a,1e-4,{width:d,force3D:"auto",top:0-(d/f-e)/2,left:0,height:d/f})},I=function(){var a=new Object;return a.x=0,a.y=0,a.rotationX=0,a.rotationY=0,a.rotationZ=0,a.scale=1,a.scaleX=1,a.scaleY=1,a.skewX=0,a.skewY=0,a.opacity=0,a.transformOrigin="center, center",a.transformPerspective=400,a.rotation=0,a},J=function(b,c){var d=c.split(";");return a.each(d,function(a,c){c=c.split(":");var d=c[0],e=c[1];"rotationX"==d&&(b.rotationX=parseInt(e,0)),"rotationY"==d&&(b.rotationY=parseInt(e,0)),"rotationZ"==d&&(b.rotationZ=parseInt(e,0)),"rotationZ"==d&&(b.rotation=parseInt(e,0)),"scaleX"==d&&(b.scaleX=parseFloat(e)),"scaleY"==d&&(b.scaleY=parseFloat(e)),"opacity"==d&&(b.opacity=parseFloat(e)),"skewX"==d&&(b.skewX=parseInt(e,0)),"skewY"==d&&(b.skewY=parseInt(e,0)),"x"==d&&(b.x=parseInt(e,0)),"y"==d&&(b.y=parseInt(e,0)),"z"==d&&(b.z=parseInt(e,0)),"transformOrigin"==d&&(b.transformOrigin=e.toString()),"transformPerspective"==d&&(b.transformPerspective=parseInt(e,0))
}),b},K=function(b){var c=b.split("animation:"),d=new Object;d.animation=J(I(),c[1]);var e=c[0].split(";");return a.each(e,function(a,b){b=b.split(":");var c=b[0],e=b[1];"typ"==c&&(d.typ=e),"speed"==c&&(d.speed=parseInt(e,0)/1e3),"start"==c&&(d.start=parseInt(e,0)/1e3),"elementdelay"==c&&(d.elementdelay=parseFloat(e)),"ease"==c&&(d.ease=e)}),d},L=function(c,d,e,f){function g(){}function h(){}c.data("ctl")==b&&c.data("ctl",new punchgs.TimelineLite);var j=c.data("ctl"),k=0,l=0,m=c.find(".tp-caption"),n=d.container.find(".tp-static-layers").find(".tp-caption");j.pause(),a.each(n,function(a,b){m.push(b)}),m.each(function(c){var f=e,j=-1,m=a(this);if(m.hasClass("tp-static-layer")){var n=m.data("startslide"),o=m.data("endslide");(-1==n||"-1"==n)&&m.data("startslide",0),(-1==o||"-1"==o)&&m.data("endslide",d.slideamount),0==n&&o==d.slideamount-1&&m.data("endslide",d.slideamount+1),n=m.data("startslide"),o=m.data("endslide"),m.hasClass("tp-is-shown")?j=o==d.next||n>d.next||o<d.next?2:0:n<=d.next&&o>=d.next||n==d.next||o==d.next?(m.addClass("tp-is-shown"),j=1):j=0}k=d.width/2-d.startwidth*d.bw/2;var p=d.bw;d.bh,"on"==d.fullScreen&&(l=d.height/2-d.startheight*d.bh/2),("on"==d.autoHeight||d.minHeight!=b&&d.minHeight>0)&&(l=d.container.height()/2-d.startheight*d.bh/2),0>l&&(l=0);var r=0;if(d.width<d.hideCaptionAtLimit&&"on"==m.data("captionhidden")?(m.addClass("tp-hidden-caption"),r=1):d.width<d.hideAllCaptionAtLimit||d.width<d.hideAllCaptionAtLilmit?(m.addClass("tp-hidden-caption"),r=1):m.removeClass("tp-hidden-caption"),0==r){if(m.data("linktoslide")==b||m.hasClass("hasclicklistener")||(m.addClass("hasclicklistener"),m.css({cursor:"pointer"}),"no"!=m.data("linktoslide")&&m.click(function(){var b=a(this),c=b.data("linktoslide");"next"!=c&&"prev"!=c?(d.container.data("showus",c),d.container.parent().find(".tp-rightarrow").click()):"next"==c?d.container.parent().find(".tp-rightarrow").click():"prev"==c&&d.container.parent().find(".tp-leftarrow").click()})),0>k&&(k=0),m.hasClass("tp-videolayer")||m.find("iframe").length>0||m.find("video").length>0){var s="iframe"+Math.round(1e5*Math.random()+1),t=m.data("videowidth"),u=m.data("videoheight"),v=m.data("videoattributes"),w=m.data("ytid"),x=m.data("vimeoid"),y=m.data("videpreload"),z=m.data("videomp4"),A=m.data("videowebm"),B=m.data("videoogv"),C=m.data("videocontrols"),D="http",L="loop"==m.data("videoloop")?"loop":"loopandnoslidestop"==m.data("videoloop")?"loop":"";if(m.data("thumbimage")!=b&&m.data("videoposter")==b&&m.data("videoposter",m.data("thumbimage")),w!=b&&String(w).length>1&&0==m.find("iframe").length&&(D="https","none"==C&&(v=v.replace("controls=1","controls=0"),-1==v.toLowerCase().indexOf("controls")&&(v+="&controls=0")),m.append('<iframe style="visible:hidden" src="'+D+"://www.youtube.com/embed/"+w+"?"+v+'" width="'+t+'" height="'+u+'" style="width:'+t+"px;height:"+u+'px"></iframe>')),x!=b&&String(x).length>1&&0==m.find("iframe").length&&("https:"===location.protocol&&(D="https"),m.append('<iframe style="visible:hidden" src="'+D+"://player.vimeo.com/video/"+x+"?"+v+'" width="'+t+'" height="'+u+'" style="width:'+t+"px;height:"+u+'px"></iframe>')),(z!=b||A!=b)&&0==m.find("video").length){"controls"!=C&&(C="");var N='<video style="visible:hidden" class="" '+L+' preload="'+y+'" width="'+t+'" height="'+u+'"';m.data("videoposter")!=b&&m.data("videoposter")!=b&&(N=N+'poster="'+m.data("videoposter")+'">'),A!=b&&"firefox"==M().toLowerCase()&&(N=N+'<source src="'+A+'" type="video/webm" />'),z!=b&&(N=N+'<source src="'+z+'" type="video/mp4" />'),B!=b&&(N=N+'<source src="'+B+'" type="video/ogg" />'),N+="</video>",m.append(N),"controls"==C&&m.append('<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div></div>')}var R=!1;(1==m.data("autoplayonlyfirsttime")||"true"==m.data("autoplayonlyfirsttime")||1==m.data("autoplay"))&&(m.data("autoplay",!0),R=!0),m.find("iframe").each(function(){var c=a(this);if(punchgs.TweenLite.to(c,.1,{autoAlpha:1,zIndex:0,transformStyle:"preserve-3d",z:0,rotationX:0,force3D:"auto"}),W()){var g=c.attr("src");c.attr("src",""),c.attr("src",g)}if(d.nextslideatend=m.data("nextslideatend"),m.data("videoposter")!=b&&m.data("videoposter").length>2&&1!=m.data("autoplay")&&!f&&(0==m.find(".tp-thumb-image").length?m.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url('+m.data("videoposter")+'); background-size:cover"></div>'):punchgs.TweenLite.set(m.find(".tp-thumb-image"),{autoAlpha:1})),c.attr("src").toLowerCase().indexOf("youtube")>=0)if(c.hasClass("HasListener")){if(!e){var h=m.data("player");"on"!=m.data("forcerewind")||W()||h.seekTo(0),(!W()&&1==m.data("autoplay")||R)&&m.data("timerplay",setTimeout(function(){h.playVideo()},m.data("start")))}}else try{c.attr("id",s);var h,i=setInterval(function(){YT!=b&&typeof YT.Player!=b&&"undefined"!=typeof YT.Player&&(h=new YT.Player(s,{events:{onStateChange:E,onReady:function(c){var d=c.target.getVideoEmbedCode(),e=a("#"+d.split('id="')[1].split('"')[0]),f=e.closest(".tp-caption"),g=f.data("videorate");f.data("videostart"),g!=b&&c.target.setPlaybackRate(parseFloat(g)),(!W()&&1==f.data("autoplay")||R)&&f.data("timerplay",setTimeout(function(){c.target.playVideo()},f.data("start"))),f.find(".tp-thumb-image").click(function(){punchgs.TweenLite.to(a(this),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),W()||h.playVideo()})}}})),c.addClass("HasListener"),m.data("player",h),clearInterval(i)},100)}catch(j){}else if(c.attr("src").toLowerCase().indexOf("vimeo")>=0)if(c.hasClass("HasListener")){if(!(e||W()||1!=m.data("autoplay")&&"on"!=m.data("forcerewind"))){var c=m.find("iframe"),r=c.attr("id"),t=$f(r);"on"==m.data("forcerewind")&&t.api("seekTo",0),m.data("timerplay",setTimeout(function(){1==m.data("autoplay")&&t.api("play")},m.data("start")))}}else{c.addClass("HasListener"),c.attr("id",s);for(var p,k=c.attr("src"),l={},n=k,o=/([^&=]+)=([^&]*)/g;p=o.exec(n);)l[decodeURIComponent(p[1])]=decodeURIComponent(p[2]);k=l.player_id!=b?k.replace(l.player_id,s):k+"&player_id="+s;try{k=k.replace("api=0","api=1")}catch(j){}k+="&api=1",c.attr("src",k);var h=m.find("iframe")[0],q=setInterval(function(){$f!=b&&typeof $f(s).api!=b&&"undefined"!=typeof $f(s).api&&($f(h).addEvent("ready",function(){G(s,R)}),clearInterval(q))},100)}}),(W()&&1==m.data("disablevideoonmobile")||i(8))&&m.find("video").remove(),m.find("video").length>0&&m.find("video").each(function(){var e=this,f=a(this);f.parent().hasClass("html5vid")||f.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');var g=f.parent();F(e,"loadedmetadata",function(a){a.data("metaloaded",1)}(g)),clearInterval(g.data("interval")),g.data("interval",setInterval(function(){if(1==g.data("metaloaded")||0/0!=e.duration){if(clearInterval(g.data("interval")),!g.hasClass("HasListener")){g.addClass("HasListener"),"none"!=m.data("dottedoverlay")&&m.data("dottedoverlay")!=b&&1!=m.find(".tp-dottedoverlay").length&&g.append('<div class="tp-dottedoverlay '+m.data("dottedoverlay")+'"></div>'),f.attr("control")==b&&(0==g.find(".tp-video-play-button").length&&g.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>'),g.find("video, .tp-poster, .tp-video-play-button").click(function(){g.hasClass("videoisplaying")?e.pause():e.play()})),(1==m.data("forcecover")||m.hasClass("fullscreenvideo"))&&(1==m.data("forcecover")&&(H(g,d.container),g.addClass("fullcoveredvideo"),m.addClass("fullcoveredvideo")),g.css({width:"100%",height:"100%"}));var a=m.find(".tp-vid-play-pause")[0],c=m.find(".tp-vid-mute")[0],h=m.find(".tp-vid-full-screen")[0],i=m.find(".tp-seek-bar")[0],j=m.find(".tp-volume-bar")[0];a!=b&&(F(a,"click",function(){1==e.paused?e.play():e.pause()}),F(c,"click",function(){0==e.muted?(e.muted=!0,c.innerHTML="Unmute"):(e.muted=!1,c.innerHTML="Mute")}),F(h,"click",function(){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()}),F(i,"change",function(){var a=e.duration*(i.value/100);e.currentTime=a}),F(e,"timeupdate",function(){var a=100/e.duration*e.currentTime;i.value=a}),F(i,"mousedown",function(){e.pause()}),F(i,"mouseup",function(){e.play()}),F(j,"change",function(){e.volume=j.value})),F(e,"play",function(){"mute"==m.data("volume")&&(e.muted=!0),g.addClass("videoisplaying"),"loopandnoslidestop"==m.data("videoloop")?(d.videoplaying=!1,d.container.trigger("starttimer"),d.container.trigger("revolution.slide.onvideostop")):(d.videoplaying=!0,d.container.trigger("stoptimer"),d.container.trigger("revolution.slide.onvideoplay"));var a=m.find(".tp-vid-play-pause")[0],c=m.find(".tp-vid-mute")[0];a!=b&&(a.innerHTML="Pause"),c!=b&&e.muted&&(c.innerHTML="Unmute")}),F(e,"pause",function(){g.removeClass("videoisplaying"),d.videoplaying=!1,d.container.trigger("starttimer"),d.container.trigger("revolution.slide.onvideostop");var a=m.find(".tp-vid-play-pause")[0];a!=b&&(a.innerHTML="Play")}),F(e,"ended",function(){g.removeClass("videoisplaying"),d.videoplaying=!1,d.container.trigger("starttimer"),d.container.trigger("revolution.slide.onvideostop"),1==d.nextslideatend&&d.container.revnext()})}var k=!1;(1==m.data("autoplayonlyfirsttime")||"true"==m.data("autoplayonlyfirsttime"))&&(k=!0);var l=16/9;if("4:3"==m.data("aspectratio")&&(l=4/3),g.data("mediaAspect",l),1==g.closest(".tp-caption").data("forcecover")&&(H(g,d.container),g.addClass("fullcoveredvideo")),f.css({display:"block"}),d.nextslideatend=m.data("nextslideatend"),(1==m.data("autoplay")||1==k)&&("loopandnoslidestop"==m.data("videoloop")?(d.videoplaying=!1,d.container.trigger("starttimer"),d.container.trigger("revolution.slide.onvideostop")):(d.videoplaying=!0,d.container.trigger("stoptimer"),d.container.trigger("revolution.slide.onvideoplay")),"on"!=m.data("forcerewind")||g.hasClass("videoisplaying")||e.currentTime>0&&(e.currentTime=0),"mute"==m.data("volume")&&(e.muted=!0),g.data("timerplay",setTimeout(function(){"on"!=m.data("forcerewind")||g.hasClass("videoisplaying")||e.currentTime>0&&(e.currentTime=0),"mute"==m.data("volume")&&(e.muted=!0),e.play()},10+m.data("start")))),g.data("ww")==b&&g.data("ww",f.attr("width")),g.data("hh")==b&&g.data("hh",f.attr("height")),!m.hasClass("fullscreenvideo")&&1==m.data("forcecover"))try{g.width(g.data("ww")*d.bw),g.height(g.data("hh")*d.bh)}catch(n){}clearInterval(g.data("interval"))}}),100)}),1==m.data("autoplay")&&(setTimeout(function(){"loopandnoslidestop"!=m.data("videoloop")&&(d.videoplaying=!0,d.container.trigger("stoptimer"))},200),"loopandnoslidestop"!=m.data("videoloop")&&(d.videoplaying=!0,d.container.trigger("stoptimer")),(1==m.data("autoplayonlyfirsttime")||"true"==m.data("autoplayonlyfirsttime"))&&(m.data("autoplay",!1),m.data("autoplayonlyfirsttime",!1)))}var U=0,V=0;if(m.find("img").length>0){var X=m.find("img");0==X.width()&&X.css({width:"auto"}),0==X.height()&&X.css({height:"auto"}),X.data("ww")==b&&X.width()>0&&X.data("ww",X.width()),X.data("hh")==b&&X.height()>0&&X.data("hh",X.height());var Y=X.data("ww"),Z=X.data("hh");Y==b&&(Y=0),Z==b&&(Z=0),X.width(Y*d.bw),X.height(Z*d.bh),U=X.width(),V=X.height()}else if(m.find("iframe").length>0||m.find("video").length>0){var $=!1,X=m.find("iframe");0==X.length&&(X=m.find("video"),$=!0),X.css({display:"block"}),m.data("ww")==b&&m.data("ww",X.width()),m.data("hh")==b&&m.data("hh",X.height());var Y=m.data("ww"),Z=m.data("hh"),_=m;_.data("fsize")==b&&_.data("fsize",parseInt(_.css("font-size"),0)||0),_.data("pt")==b&&_.data("pt",parseInt(_.css("paddingTop"),0)||0),_.data("pb")==b&&_.data("pb",parseInt(_.css("paddingBottom"),0)||0),_.data("pl")==b&&_.data("pl",parseInt(_.css("paddingLeft"),0)||0),_.data("pr")==b&&_.data("pr",parseInt(_.css("paddingRight"),0)||0),_.data("mt")==b&&_.data("mt",parseInt(_.css("marginTop"),0)||0),_.data("mb")==b&&_.data("mb",parseInt(_.css("marginBottom"),0)||0),_.data("ml")==b&&_.data("ml",parseInt(_.css("marginLeft"),0)||0),_.data("mr")==b&&_.data("mr",parseInt(_.css("marginRight"),0)||0),_.data("bt")==b&&_.data("bt",parseInt(_.css("borderTop"),0)||0),_.data("bb")==b&&_.data("bb",parseInt(_.css("borderBottom"),0)||0),_.data("bl")==b&&_.data("bl",parseInt(_.css("borderLeft"),0)||0),_.data("br")==b&&_.data("br",parseInt(_.css("borderRight"),0)||0),_.data("lh")==b&&_.data("lh",parseInt(_.css("lineHeight"),0)||0),"auto"==_.data("lh")&&_.data("lh",_.data("fsize")+4);var ab=d.width,bb=d.height;if(ab>d.startwidth&&(ab=d.startwidth),bb>d.startheight&&(bb=d.startheight),m.hasClass("fullscreenvideo")){k=0,l=0,m.data("x",0),m.data("y",0);var cb=d.height;"on"==d.autoHeight&&(cb=d.container.height()),m.css({width:d.width,height:cb})}else m.css({"font-size":_.data("fsize")*d.bw+"px","padding-top":_.data("pt")*d.bh+"px","padding-bottom":_.data("pb")*d.bh+"px","padding-left":_.data("pl")*d.bw+"px","padding-right":_.data("pr")*d.bw+"px","margin-top":_.data("mt")*d.bh+"px","margin-bottom":_.data("mb")*d.bh+"px","margin-left":_.data("ml")*d.bw+"px","margin-right":_.data("mr")*d.bw+"px","border-top":_.data("bt")*d.bh+"px","border-bottom":_.data("bb")*d.bh+"px","border-left":_.data("bl")*d.bw+"px","border-right":_.data("br")*d.bw+"px","line-height":_.data("lh")*d.bh+"px",height:Z*d.bh+"px"});0==$?(X.width(Y*d.bw),X.height(Z*d.bh)):1==m.data("forcecover")||m.hasClass("fullscreenvideo")||(X.width(Y*d.bw),X.height(Z*d.bh)),U=X.width(),V=X.height()}else{m.find(".tp-resizeme, .tp-resizeme *").each(function(){O(a(this),d)}),m.hasClass("tp-resizeme")&&m.find("*").each(function(){O(a(this),d)}),O(m,d),V=m.outerHeight(!0),U=m.outerWidth(!0);var db=m.outerHeight(),eb=m.css("backgroundColor");m.find(".frontcorner").css({borderWidth:db+"px",left:0-db+"px",borderRight:"0px solid transparent",borderTopColor:eb}),m.find(".frontcornertop").css({borderWidth:db+"px",left:0-db+"px",borderRight:"0px solid transparent",borderBottomColor:eb}),m.find(".backcorner").css({borderWidth:db+"px",right:0-db+"px",borderLeft:"0px solid transparent",borderBottomColor:eb}),m.find(".backcornertop").css({borderWidth:db+"px",right:0-db+"px",borderLeft:"0px solid transparent",borderTopColor:eb})}"on"==d.fullScreenAlignForce&&(k=0,l=0),m.data("voffset")==b&&m.data("voffset",0),m.data("hoffset")==b&&m.data("hoffset",0);var fb=m.data("voffset")*p,gb=m.data("hoffset")*p,hb=d.startwidth*p,ib=d.startheight*p;"on"==d.fullScreenAlignForce&&(hb=d.container.width(),ib=d.container.height()),("center"==m.data("x")||"center"==m.data("xcenter"))&&(m.data("xcenter","center"),m.data("x",hb/2-m.outerWidth(!0)/2+gb)),("left"==m.data("x")||"left"==m.data("xleft"))&&(m.data("xleft","left"),m.data("x",0/p+gb)),("right"==m.data("x")||"right"==m.data("xright"))&&(m.data("xright","right"),m.data("x",(hb-m.outerWidth(!0)+gb)/p)),("center"==m.data("y")||"center"==m.data("ycenter"))&&(m.data("ycenter","center"),m.data("y",ib/2-m.outerHeight(!0)/2+fb)),("top"==m.data("y")||"top"==m.data("ytop"))&&(m.data("ytop","top"),m.data("y",0/d.bh+fb)),("bottom"==m.data("y")||"bottom"==m.data("ybottom"))&&(m.data("ybottom","bottom"),m.data("y",(ib-m.outerHeight(!0)+fb)/p)),m.data("start")==b&&m.data("start",1e3);var jb=m.data("easing");jb==b&&(jb="punchgs.Power1.easeOut");var kb=m.data("start")/1e3,lb=m.data("speed")/1e3;if("center"==m.data("x")||"center"==m.data("xcenter"))var mb=m.data("x")+k;else var mb=p*m.data("x")+k;if("center"==m.data("y")||"center"==m.data("ycenter"))var nb=m.data("y")+l;else var nb=d.bh*m.data("y")+l;if(punchgs.TweenLite.set(m,{top:nb,left:mb,overwrite:"auto"}),0==j&&(f=!0),m.data("timeline")==b||f||(2!=j&&m.data("timeline").gotoAndPlay(0),f=!0),!f){m.data("timeline")!=b;var ob=new punchgs.TimelineLite({smoothChildTiming:!0,onStart:h});ob.pause(),"on"==d.fullScreenAlignForce;var pb=m;m.data("mySplitText")!=b&&m.data("mySplitText").revert(),("chars"==m.data("splitin")||"words"==m.data("splitin")||"lines"==m.data("splitin")||"chars"==m.data("splitout")||"words"==m.data("splitout")||"lines"==m.data("splitout"))&&(m.find("a").length>0?m.data("mySplitText",new punchgs.SplitText(m.find("a"),{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"})):m.find(".tp-layer-inner-rotation").length>0?m.data("mySplitText",new punchgs.SplitText(m.find(".tp-layer-inner-rotation"),{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"})):m.data("mySplitText",new punchgs.SplitText(m,{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"})),m.addClass("splitted")),"chars"==m.data("splitin")&&(pb=m.data("mySplitText").chars),"words"==m.data("splitin")&&(pb=m.data("mySplitText").words),"lines"==m.data("splitin")&&(pb=m.data("mySplitText").lines);var qb=I(),rb=I();m.data("repeat")!=b&&(repeatV=m.data("repeat")),m.data("yoyo")!=b&&(yoyoV=m.data("yoyo")),m.data("repeatdelay")!=b&&(repeatdelayV=m.data("repeatdelay"));var sb=m.attr("class");sb.match("customin")?qb=J(qb,m.data("customin")):sb.match("randomrotate")?(qb.scale=3*Math.random()+1,qb.rotation=Math.round(200*Math.random()-100),qb.x=Math.round(200*Math.random()-100),qb.y=Math.round(200*Math.random()-100)):sb.match("lfr")||sb.match("skewfromright")?qb.x=15+d.width:sb.match("lfl")||sb.match("skewfromleft")?qb.x=-15-U:sb.match("sfl")||sb.match("skewfromleftshort")?qb.x=-50:sb.match("sfr")||sb.match("skewfromrightshort")?qb.x=50:sb.match("lft")?qb.y=-25-V:sb.match("lfb")?qb.y=25+d.height:sb.match("sft")?qb.y=-50:sb.match("sfb")&&(qb.y=50),sb.match("skewfromright")||m.hasClass("skewfromrightshort")?qb.skewX=-85:(sb.match("skewfromleft")||m.hasClass("skewfromleftshort"))&&(qb.skewX=85),(sb.match("fade")||sb.match("sft")||sb.match("sfl")||sb.match("sfb")||sb.match("skewfromleftshort")||sb.match("sfr")||sb.match("skewfromrightshort"))&&(qb.opacity=0),"safari"==M().toLowerCase();var tb=m.data("elementdelay")==b?0:m.data("elementdelay");rb.ease=qb.ease=m.data("easing")==b?punchgs.Power1.easeInOut:m.data("easing"),qb.data=new Object,qb.data.oldx=qb.x,qb.data.oldy=qb.y,rb.data=new Object,rb.data.oldx=rb.x,rb.data.oldy=rb.y,qb.x=qb.x*p,qb.y=qb.y*p;var ub=new punchgs.TimelineLite;if(2!=j)if(sb.match("customin"))pb!=m&&ob.add(punchgs.TweenLite.set(m,{force3D:"auto",opacity:1,scaleX:1,scaleY:1,rotationX:0,rotationY:0,rotationZ:0,skewX:0,skewY:0,z:0,x:0,y:0,visibility:"visible",delay:0,overwrite:"all"})),qb.visibility="hidden",rb.visibility="visible",rb.overwrite="all",rb.opacity=1,rb.onComplete=g(),rb.delay=kb,rb.force3D="auto",ob.add(ub.staggerFromTo(pb,lb,qb,rb,tb),"frame0");else if(qb.visibility="visible",qb.transformPerspective=600,pb!=m&&ob.add(punchgs.TweenLite.set(m,{force3D:"auto",opacity:1,scaleX:1,scaleY:1,rotationX:0,rotationY:0,rotationZ:0,skewX:0,skewY:0,z:0,x:0,y:0,visibility:"visible",delay:0,overwrite:"all"})),rb.visibility="visible",rb.delay=kb,rb.onComplete=g(),rb.opacity=1,rb.force3D="auto",sb.match("randomrotate")&&pb!=m)for(var c=0;c<pb.length;c++){var vb=new Object,wb=new Object;a.extend(vb,qb),a.extend(wb,rb),qb.scale=3*Math.random()+1,qb.rotation=Math.round(200*Math.random()-100),qb.x=Math.round(200*Math.random()-100),qb.y=Math.round(200*Math.random()-100),0!=c&&(wb.delay=kb+c*tb),ob.append(punchgs.TweenLite.fromTo(pb[c],lb,vb,wb),"frame0")}else ob.add(ub.staggerFromTo(pb,lb,qb,rb,tb),"frame0");if(m.data("timeline",ob),new Array,m.data("frames")!=b){var yb=m.data("frames");yb=yb.replace(/\s+/g,""),yb=yb.replace("{","");var zb=yb.split("}");a.each(zb,function(a,b){if(b.length>0){var c=K(b);S(m,d,c,"frame"+(a+10),p)}})}ob=m.data("timeline"),m.data("end")==b||-1!=j&&2!=j?-1==j||2==j?T(m,d,999999,qb,"frame99",p):T(m,d,999999,qb,"frame99",p):T(m,d,m.data("end")/1e3,qb,"frame99",p),ob=m.data("timeline"),m.data("timeline",ob),P(m,p),ob.resume()}}if(f&&(Q(m),P(m,p),m.data("timeline")!=b)){var Ab=m.data("timeline").getTweensOf();a.each(Ab,function(a,c){if(c.vars.data!=b){var d=c.vars.data.oldx*p,e=c.vars.data.oldy*p;if(1!=c.progress()&&0!=c.progress())try{c.vars.x=d,c.vary.y=e}catch(f){}else 1==c.progress()&&punchgs.TweenLite.set(c.target,{x:d,y:e})}})}});var o=a("body").find("#"+d.container.attr("id")).find(".tp-bannertimer");o.data("opt",d),f!=b&&setTimeout(function(){f.resume()},30)},M=function(){var c,a=navigator.appName,b=navigator.userAgent,d=b.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return d&&null!=(c=b.match(/version\/([\.\d]+)/i))&&(d[2]=c[1]),d=d?[d[1],d[2]]:[a,navigator.appVersion,"-?"],d[0]},O=function(a,c){a.data("fsize")==b&&a.data("fsize",parseInt(a.css("font-size"),0)||0),a.data("pt")==b&&a.data("pt",parseInt(a.css("paddingTop"),0)||0),a.data("pb")==b&&a.data("pb",parseInt(a.css("paddingBottom"),0)||0),a.data("pl")==b&&a.data("pl",parseInt(a.css("paddingLeft"),0)||0),a.data("pr")==b&&a.data("pr",parseInt(a.css("paddingRight"),0)||0),a.data("mt")==b&&a.data("mt",parseInt(a.css("marginTop"),0)||0),a.data("mb")==b&&a.data("mb",parseInt(a.css("marginBottom"),0)||0),a.data("ml")==b&&a.data("ml",parseInt(a.css("marginLeft"),0)||0),a.data("mr")==b&&a.data("mr",parseInt(a.css("marginRight"),0)||0),a.data("bt")==b&&a.data("bt",parseInt(a.css("borderTopWidth"),0)||0),a.data("bb")==b&&a.data("bb",parseInt(a.css("borderBottomWidth"),0)||0),a.data("bl")==b&&a.data("bl",parseInt(a.css("borderLeftWidth"),0)||0),a.data("br")==b&&a.data("br",parseInt(a.css("borderRightWidth"),0)||0),a.data("ls")==b&&a.data("ls",parseInt(a.css("letterSpacing"),0)||0),a.data("lh")==b&&a.data("lh",parseInt(a.css("lineHeight"),0)||"auto"),a.data("minwidth")==b&&a.data("minwidth",parseInt(a.css("minWidth"),0)||0),a.data("minheight")==b&&a.data("minheight",parseInt(a.css("minHeight"),0)||0),a.data("maxwidth")==b&&a.data("maxwidth",parseInt(a.css("maxWidth"),0)||"none"),a.data("maxheight")==b&&a.data("maxheight",parseInt(a.css("maxHeight"),0)||"none"),a.data("wii")==b&&a.data("wii",parseInt(a.css("width"),0)||0),a.data("hii")==b&&a.data("hii",parseInt(a.css("height"),0)||0),a.data("wan")==b&&a.data("wan",a.css("-webkit-transition")),a.data("moan")==b&&a.data("moan",a.css("-moz-animation-transition")),a.data("man")==b&&a.data("man",a.css("-ms-animation-transition")),a.data("ani")==b&&a.data("ani",a.css("transition")),"auto"==a.data("lh")&&a.data("lh",a.data("fsize")+4),a.hasClass("tp-splitted")||(a.css("-webkit-transition","none"),a.css("-moz-transition","none"),a.css("-ms-transition","none"),a.css("transition","none"),punchgs.TweenLite.set(a,{fontSize:Math.round(a.data("fsize")*c.bw)+"px",letterSpacing:Math.floor(a.data("ls")*c.bw)+"px",paddingTop:Math.round(a.data("pt")*c.bh)+"px",paddingBottom:Math.round(a.data("pb")*c.bh)+"px",paddingLeft:Math.round(a.data("pl")*c.bw)+"px",paddingRight:Math.round(a.data("pr")*c.bw)+"px",marginTop:a.data("mt")*c.bh+"px",marginBottom:a.data("mb")*c.bh+"px",marginLeft:a.data("ml")*c.bw+"px",marginRight:a.data("mr")*c.bw+"px",borderTopWidth:Math.round(a.data("bt")*c.bh)+"px",borderBottomWidth:Math.round(a.data("bb")*c.bh)+"px",borderLeftWidth:Math.round(a.data("bl")*c.bw)+"px",borderRightWidth:Math.round(a.data("br")*c.bw)+"px",lineHeight:Math.round(a.data("lh")*c.bh)+"px",minWidth:a.data("minwidth")*c.bw+"px",minHeight:a.data("minheight")*c.bh+"px",overwrite:"auto"}),setTimeout(function(){a.css("-webkit-transition",a.data("wan")),a.css("-moz-transition",a.data("moan")),a.css("-ms-transition",a.data("man")),a.css("transition",a.data("ani"))},30),"none"!=a.data("maxheight")&&a.css({maxHeight:a.data("maxheight")*c.bh+"px"}),"none"!=a.data("maxwidth")&&a.css({maxWidth:a.data("maxwidth")*c.bw+"px"}))},P=function(c,d){c.find(".rs-pendulum").each(function(){var c=a(this);if(c.data("timeline")==b){c.data("timeline",new punchgs.TimelineLite);var e=c.data("startdeg")==b?-20:c.data("startdeg"),f=c.data("enddeg")==b?20:c.data("enddeg"),g=c.data("speed")==b?2:c.data("speed"),h=c.data("origin")==b?"50% 50%":c.data("origin"),i=c.data("easing")==b?punchgs.Power2.easeInOut:c.data("ease");e*=d,f*=d,c.data("timeline").append(new punchgs.TweenLite.fromTo(c,g,{force3D:"auto",rotation:e,transformOrigin:h},{rotation:f,ease:i})),c.data("timeline").append(new punchgs.TweenLite.fromTo(c,g,{force3D:"auto",rotation:f,transformOrigin:h},{rotation:e,ease:i,onComplete:function(){c.data("timeline").restart()}}))}}),c.find(".rs-rotate").each(function(){var c=a(this);if(c.data("timeline")==b){c.data("timeline",new punchgs.TimelineLite);var e=c.data("startdeg")==b?0:c.data("startdeg"),f=c.data("enddeg")==b?360:c.data("enddeg");speed=c.data("speed")==b?2:c.data("speed"),origin=c.data("origin")==b?"50% 50%":c.data("origin"),easing=c.data("easing")==b?punchgs.Power2.easeInOut:c.data("easing"),e*=d,f*=d,c.data("timeline").append(new punchgs.TweenLite.fromTo(c,speed,{force3D:"auto",rotation:e,transformOrigin:origin},{rotation:f,ease:easing,onComplete:function(){c.data("timeline").restart()}}))}}),c.find(".rs-slideloop").each(function(){var c=a(this);if(c.data("timeline")==b){c.data("timeline",new punchgs.TimelineLite);var e=c.data("xs")==b?0:c.data("xs"),f=c.data("ys")==b?0:c.data("ys"),g=c.data("xe")==b?0:c.data("xe"),h=c.data("ye")==b?0:c.data("ye"),i=c.data("speed")==b?2:c.data("speed"),j=c.data("easing")==b?punchgs.Power2.easeInOut:c.data("easing");e*=d,f*=d,g*=d,h*=d,c.data("timeline").append(new punchgs.TweenLite.fromTo(c,i,{force3D:"auto",x:e,y:f},{x:g,y:h,ease:j})),c.data("timeline").append(new punchgs.TweenLite.fromTo(c,i,{force3D:"auto",x:g,y:h},{x:e,y:f,onComplete:function(){c.data("timeline").restart()}}))}}),c.find(".rs-pulse").each(function(){var c=a(this);if(c.data("timeline")==b){c.data("timeline",new punchgs.TimelineLite);var d=c.data("zoomstart")==b?0:c.data("zoomstart"),e=c.data("zoomend")==b?0:c.data("zoomend"),f=c.data("speed")==b?2:c.data("speed"),g=c.data("easing")==b?punchgs.Power2.easeInOut:c.data("easing");c.data("timeline").append(new punchgs.TweenLite.fromTo(c,f,{force3D:"auto",scale:d},{scale:e,ease:g})),c.data("timeline").append(new punchgs.TweenLite.fromTo(c,f,{force3D:"auto",scale:e},{scale:d,onComplete:function(){c.data("timeline").restart()}}))}}),c.find(".rs-wave").each(function(){var c=a(this);if(c.data("timeline")==b){c.data("timeline",new punchgs.TimelineLite);var e=c.data("angle")==b?10:c.data("angle"),f=c.data("radius")==b?10:c.data("radius"),g=c.data("speed")==b?-20:c.data("speed");c.data("origin")==b?-20:c.data("origin"),e*=d,f*=d;var i={a:0,ang:e,element:c,unit:f};c.data("timeline").append(new punchgs.TweenLite.fromTo(i,g,{a:360},{a:0,force3D:"auto",ease:punchgs.Linear.easeNone,onUpdate:function(){var a=i.a*(Math.PI/180);punchgs.TweenLite.to(i.element,.1,{force3D:"auto",x:Math.cos(a)*i.unit,y:i.unit*(1-Math.sin(a))})},onComplete:function(){c.data("timeline").restart()}}))}})},Q=function(c){c.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function(){var c=a(this);c.data("timeline")!=b&&(c.data("timeline").pause(),c.data("timeline",null))})},R=function(c,d){var e=0,f=c.find(".tp-caption"),g=d.container.find(".tp-static-layers").find(".tp-caption");return a.each(g,function(a,b){f.push(b)}),f.each(function(){var f=-1,g=a(this);if(g.hasClass("tp-static-layer")&&((-1==g.data("startslide")||"-1"==g.data("startslide"))&&g.data("startslide",0),(-1==g.data("endslide")||"-1"==g.data("endslide"))&&g.data("endslide",d.slideamount),g.hasClass("tp-is-shown")?g.data("startslide")>d.next||g.data("endslide")<d.next?(f=2,g.removeClass("tp-is-shown")):f=0:f=2),0!=f){if(Q(g),g.find("iframe").length>0){punchgs.TweenLite.to(g.find("iframe"),.2,{autoAlpha:0}),W()&&g.find("iframe").remove();try{var h=g.find("iframe"),i=h.attr("id"),j=$f(i);j.api("pause"),clearTimeout(g.data("timerplay"))}catch(k){}try{var l=g.data("player");l.stopVideo(),clearTimeout(g.data("timerplay"))}catch(k){}}if(g.find("video").length>0)try{g.find("video").each(function(){var c=a(this).parent();c.attr("id"),clearTimeout(c.data("timerplay"));var e=this;e.pause()})}catch(k){}try{var m=g.data("timeline"),n=m.getLabelTime("frame99"),o=m.time();if(n>o){var p=m.getTweensOf(g);if(a.each(p,function(a,b){0!=a&&b.pause()}),0!=g.css("opacity")){var q=g.data("endspeed")==b?g.data("speed"):g.data("endspeed");q>e&&(e=q),m.play("frame99")}else m.progress(1,!1)}}catch(k){}}}),e},S=function(a,c,d,e,f){var g=a.data("timeline"),h=new punchgs.TimelineLite,i=a;"chars"==d.typ?i=a.data("mySplitText").chars:"words"==d.typ?i=a.data("mySplitText").words:"lines"==d.typ&&(i=a.data("mySplitText").lines),d.animation.ease=d.ease,d.animation.rotationZ!=b&&(d.animation.rotation=d.animation.rotationZ),d.animation.data=new Object,d.animation.data.oldx=d.animation.x,d.animation.data.oldy=d.animation.y,d.animation.x=d.animation.x*f,d.animation.y=d.animation.y*f,g.add(h.staggerTo(i,d.speed,d.animation,d.elementdelay),d.start),g.addLabel(e,d.start),a.data("timeline",g)},T=function(a,c,d,e,f,g){var h=a.data("timeline"),i=new punchgs.TimelineLite,j=I(),k=a.data("endspeed")==b?a.data("speed"):a.data("endspeed"),l=a.attr("class");if(j.ease=a.data("endeasing")==b?punchgs.Power1.easeInOut:a.data("endeasing"),k/=1e3,l.match("ltr")||l.match("ltl")||l.match("str")||l.match("stl")||l.match("ltt")||l.match("ltb")||l.match("stt")||l.match("stb")||l.match("skewtoright")||l.match("skewtorightshort")||l.match("skewtoleft")||l.match("skewtoleftshort")||l.match("fadeout")||l.match("randomrotateout")){l.match("skewtoright")||l.match("skewtorightshort")?j.skewX=35:(l.match("skewtoleft")||l.match("skewtoleftshort"))&&(j.skewX=-35),l.match("ltr")||l.match("skewtoright")?j.x=c.width+60:l.match("ltl")||l.match("skewtoleft")?j.x=0-(c.width+60):l.match("ltt")?j.y=0-(c.height+60):l.match("ltb")?j.y=c.height+60:l.match("str")||l.match("skewtorightshort")?(j.x=50,j.opacity=0):l.match("stl")||l.match("skewtoleftshort")?(j.x=-50,j.opacity=0):l.match("stt")?(j.y=-50,j.opacity=0):l.match("stb")?(j.y=50,j.opacity=0):l.match("randomrotateout")?(j.x=Math.random()*c.width,j.y=Math.random()*c.height,j.scale=2*Math.random()+.3,j.rotation=360*Math.random()-180,j.opacity=0):l.match("fadeout")&&(j.opacity=0),l.match("skewtorightshort")?j.x=270:l.match("skewtoleftshort")&&(j.x=-270),j.data=new Object,j.data.oldx=j.x,j.data.oldy=j.y,j.x=j.x*g,j.y=j.y*g,j.overwrite="auto";var m=a,m=a;"chars"==a.data("splitout")?m=a.data("mySplitText").chars:"words"==a.data("splitout")?m=a.data("mySplitText").words:"lines"==a.data("splitout")&&(m=a.data("mySplitText").lines);var n=a.data("endelementdelay")==b?0:a.data("endelementdelay");h.add(i.staggerTo(m,k,j,n),d)}else if(a.hasClass("customout")){j=J(j,a.data("customout"));var m=a;"chars"==a.data("splitout")?m=a.data("mySplitText").chars:"words"==a.data("splitout")?m=a.data("mySplitText").words:"lines"==a.data("splitout")&&(m=a.data("mySplitText").lines);var n=a.data("endelementdelay")==b?0:a.data("endelementdelay");j.onStart=function(){punchgs.TweenLite.set(a,{transformPerspective:j.transformPerspective,transformOrigin:j.transformOrigin,overwrite:"auto"})},j.data=new Object,j.data.oldx=j.x,j.data.oldy=j.y,j.x=j.x*g,j.y=j.y*g,h.add(i.staggerTo(m,k,j,n),d)}else e.delay=0,h.add(punchgs.TweenLite.to(a,k,e),d);h.addLabel(f,d),a.data("timeline",h)},U=function(b,c){b.children().each(function(){try{a(this).die("click")}catch(b){}try{a(this).die("mouseenter")}catch(b){}try{a(this).die("mouseleave")}catch(b){}try{a(this).unbind("hover")}catch(b){}});try{b.die("click","mouseenter","mouseleave")}catch(d){}clearInterval(c.cdint),b=null},V=function(c,d){if(d.cd=0,d.loop=0,d.looptogo=d.stopAfterLoops!=b&&d.stopAfterLoops>-1?d.stopAfterLoops:9999999,d.lastslidetoshow=d.stopAtSlide!=b&&d.stopAtSlide>-1?d.stopAtSlide:999,d.stopLoop="off",0==d.looptogo&&(d.stopLoop="on"),d.slideamount>1&&(0!=d.stopAfterLoops||1!=d.stopAtSlide)){var e=c.find(".tp-bannertimer");
c.on("stoptimer",function(){var b=a(this).find(".tp-bannertimer");b.data("tween").pause(),"on"==d.hideTimerBar&&b.css({visibility:"hidden"})}),c.on("starttimer",function(){1!=d.conthover&&1!=d.videoplaying&&d.width>d.hideSliderAtLimit&&1!=d.bannertimeronpause&&1!=d.overnav&&("on"==d.stopLoop&&d.next==d.lastslidetoshow-1||1==d.noloopanymore?d.noloopanymore=1:(e.css({visibility:"visible"}),e.data("tween").resume())),"on"==d.hideTimerBar&&e.css({visibility:"hidden"})}),c.on("restarttimer",function(){var b=a(this).find(".tp-bannertimer");"on"==d.stopLoop&&d.next==d.lastslidetoshow-1||1==d.noloopanymore?d.noloopanymore=1:(b.css({visibility:"visible"}),b.data("tween").kill(),b.data("tween",punchgs.TweenLite.fromTo(b,d.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:f,delay:1}))),"on"==d.hideTimerBar&&b.css({visibility:"hidden"})}),c.on("nulltimer",function(){e.data("tween").pause(0),"on"==d.hideTimerBar&&e.css({visibility:"hidden"})});var f=function(){0==a("body").find(c).length&&(U(c,d),clearInterval(d.cdint)),c.trigger("revolution.slide.slideatend"),1==c.data("conthover-changed")&&(d.conthover=c.data("conthover"),c.data("conthover-changed",0)),d.act=d.next,d.next=d.next+1,d.next>c.find(">ul >li").length-1&&(d.next=0,d.looptogo=d.looptogo-1,d.looptogo<=0&&(d.stopLoop="on")),"on"==d.stopLoop&&d.next==d.lastslidetoshow-1?(c.find(".tp-bannertimer").css({visibility:"hidden"}),c.trigger("revolution.slide.onstop"),d.noloopanymore=1):e.data("tween").restart(),z(c,d)};e.data("tween",punchgs.TweenLite.fromTo(e,d.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:f,delay:1})),e.data("opt",d),c.hover(function(){if("on"==d.onHoverStop&&!W()){c.trigger("stoptimer"),c.trigger("revolution.slide.onpause");var e=c.find(">ul >li:eq("+d.next+") .slotholder");e.find(".defaultimg").each(function(){var c=a(this);c.data("kenburn")!=b&&c.data("kenburn").pause()})}},function(){if(1!=c.data("conthover")){c.trigger("revolution.slide.onresume"),c.trigger("starttimer");var e=c.find(">ul >li:eq("+d.next+") .slotholder");e.find(".defaultimg").each(function(){var c=a(this);c.data("kenburn")!=b&&c.data("kenburn").play()})}})}},W=function(){var a=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"],b=!1;for(var c in a)navigator.userAgent.split(a[c]).length>1&&(b=!0);return b},X=function(a,b,c){var d=b.data("owidth"),e=b.data("oheight");if(d/e>c.width/c.height){var f=c.container.width()/d,g=e*f,h=g/c.container.height()*a;return a*=100/h,h=100,a=a,a+"% "+h+"%"+" 1"}var f=c.container.width()/d,g=e*f,h=g/c.container.height()*a;return a+"% "+h+"%"},Y=function(c,d,e,f){try{c.find(">ul:first-child >li:eq("+d.act+")")}catch(h){c.find(">ul:first-child >li:eq(1)")}d.lastslide=d.act;var j=c.find(">ul:first-child >li:eq("+d.next+")"),k=j.find(".slotholder"),l=k.data("bgposition"),m=k.data("bgpositionend"),n=k.data("zoomstart")/100,o=k.data("zoomend")/100,p=k.data("rotationstart"),q=k.data("rotationend"),r=k.data("bgfit"),s=k.data("bgfitend"),t=k.data("easeme"),u=k.data("duration")/1e3,v=100;r==b&&(r=100),s==b&&(s=100);var w=r,x=s;r=X(r,k,d),s=X(s,k,d),v=X(100,k,d),n==b&&(n=1),o==b&&(o=1),p==b&&(p=0),q==b&&(q=0),1>n&&(n=1),1>o&&(o=1);var y=new Object;y.w=parseInt(v.split(" ")[0],0),y.h=parseInt(v.split(" ")[1],0);var z=!1;"1"==v.split(" ")[2]&&(z=!0),k.find(".defaultimg").each(function(){var b=a(this);0==k.find(".kenburnimg").length?k.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="'+b.attr("src")+'" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:'+y.w+"%;height:"+y.h+'%;"></div>'):k.find(".kenburnimg img").css({width:y.w+"%",height:y.h+"%"});var c=k.find(".kenburnimg img"),e=Z(d,l,r,c,z),g=Z(d,m,s,c,z);if(z&&(e.w=w/100,g.w=x/100),f){punchgs.TweenLite.set(c,{autoAlpha:0,transformPerspective:1200,transformOrigin:"0% 0%",top:0,left:0,scale:e.w,x:e.x,y:e.y});var h=e.w,j=h*c.width()-d.width,n=h*c.height()-d.height,o=Math.abs(100*(e.x/j)),p=Math.abs(100*(e.y/n));0==n&&(p=0),0==j&&(o=0),b.data("bgposition",o+"% "+p+"%"),i(8)||b.data("currotate",$(c)),i(8)||b.data("curscale",y.w*h+"%  "+(y.h*h+"%")),k.find(".kenburnimg").remove()}else b.data("kenburn",punchgs.TweenLite.fromTo(c,u,{autoAlpha:1,force3D:punchgs.force3d,transformOrigin:"0% 0%",top:0,left:0,scale:e.w,x:e.x,y:e.y},{autoAlpha:1,rotationZ:q,ease:t,x:g.x,y:g.y,scale:g.w,onUpdate:function(){var a=c[0]._gsTransform.scaleX,e=a*c.width()-d.width,f=a*c.height()-d.height,g=Math.abs(100*(c[0]._gsTransform.x/e)),h=Math.abs(100*(c[0]._gsTransform.y/f));0==f&&(h=0),0==e&&(g=0),b.data("bgposition",g+"% "+h+"%"),i(8)||b.data("currotate",$(c)),i(8)||b.data("curscale",y.w*a+"%  "+(y.h*a+"%"))}}))})},Z=function(a,b,c,d,e){var f=new Object;switch(f.w=e?parseInt(c.split(" ")[1],0)/100:parseInt(c.split(" ")[0],0)/100,b){case"left top":case"top left":f.x=0,f.y=0;break;case"center top":case"top center":f.x=((0-d.width())*f.w+parseInt(a.width,0))/2,f.y=0;break;case"top right":case"right top":f.x=(0-d.width())*f.w+parseInt(a.width,0),f.y=0;break;case"center left":case"left center":f.x=0,f.y=((0-d.height())*f.w+parseInt(a.height,0))/2;break;case"center center":f.x=((0-d.width())*f.w+parseInt(a.width,0))/2,f.y=((0-d.height())*f.w+parseInt(a.height,0))/2;break;case"center right":case"right center":f.x=(0-d.width())*f.w+parseInt(a.width,0),f.y=((0-d.height())*f.w+parseInt(a.height,0))/2;break;case"bottom left":case"left bottom":f.x=0,f.y=(0-d.height())*f.w+parseInt(a.height,0);break;case"bottom center":case"center bottom":f.x=((0-d.width())*f.w+parseInt(a.width,0))/2,f.y=(0-d.height())*f.w+parseInt(a.height,0);break;case"bottom right":case"right bottom":f.x=(0-d.width())*f.w+parseInt(a.width,0),f.y=(0-d.height())*f.w+parseInt(a.height,0)}return f},$=function(a){var b=a.css("-webkit-transform")||a.css("-moz-transform")||a.css("-ms-transform")||a.css("-o-transform")||a.css("transform");if("none"!==b)var c=b.split("(")[1].split(")")[0].split(","),d=c[0],e=c[1],f=Math.round(Math.atan2(e,d)*(180/Math.PI));else var f=0;return 0>f?f+=360:f},_=function(c,d){try{var e=c.find(">ul:first-child >li:eq("+d.act+")")}catch(f){var e=c.find(">ul:first-child >li:eq(1)")}d.lastslide=d.act;var g=c.find(">ul:first-child >li:eq("+d.next+")");e.find(".slotholder"),g.find(".slotholder"),c.find(".defaultimg").each(function(){var c=a(this);punchgs.TweenLite.killTweensOf(c,!1),punchgs.TweenLite.set(c,{scale:1,rotationZ:0}),punchgs.TweenLite.killTweensOf(c.data("kenburn img"),!1),c.data("kenburn")!=b&&c.data("kenburn").pause(),c.data("currotate")!=b&&c.data("bgposition")!=b&&c.data("curscale")!=b&&punchgs.TweenLite.set(c,{rotation:c.data("currotate"),backgroundPosition:c.data("bgposition"),backgroundSize:c.data("curscale")}),c!=b&&c.data("kenburn img")!=b&&c.data("kenburn img").length>0&&punchgs.TweenLite.set(c.data("kenburn img"),{autoAlpha:0})})},ab=function(b,c){return W()&&"on"==c.parallaxDisableOnMobile?!1:(b.find(">ul:first-child >li").each(function(){for(var b=a(this),d=1;10>=d;d++)b.find(".rs-parallaxlevel-"+d).each(function(){var b=a(this);b.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:'+b.css("zIndex")+'" class="tp-parallax-container" data-parallaxlevel="'+c.parallaxLevels[d-1]+'"></div>')})}),("mouse"==c.parallax||"scroll+mouse"==c.parallax||"mouse+scroll"==c.parallax)&&(b.mouseenter(function(a){var c=b.find(".current-sr-slide-visible"),d=b.offset().top,e=b.offset().left,f=a.pageX-e,g=a.pageY-d;c.data("enterx",f),c.data("entery",g)}),b.on("mousemove.hoverdir, mouseleave.hoverdir",function(d){var e=b.find(".current-sr-slide-visible");switch(d.type){case"mousemove":var f=b.offset().top,g=b.offset().left,h=e.data("enterx"),i=e.data("entery"),j=h-(d.pageX-g),k=i-(d.pageY-f);e.find(".tp-parallax-container").each(function(){var b=a(this),d=parseInt(b.data("parallaxlevel"),0)/100,e=j*d,f=k*d;"scroll+mouse"==c.parallax||"mouse+scroll"==c.parallax?punchgs.TweenLite.to(b,.4,{force3D:"auto",x:e,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(b,.4,{force3D:"auto",x:e,y:f,ease:punchgs.Power3.easeOut,overwrite:"all"})});break;case"mouseleave":e.find(".tp-parallax-container").each(function(){var b=a(this);"scroll+mouse"==c.parallax||"mouse+scroll"==c.parallax?punchgs.TweenLite.to(b,1.5,{force3D:"auto",x:0,ease:punchgs.Power3.easeOut}):punchgs.TweenLite.to(b,1.5,{force3D:"auto",x:0,y:0,ease:punchgs.Power3.easeOut})})}}),W()&&(window.ondeviceorientation=function(c){var d=Math.round(c.beta||0),e=Math.round(c.gamma||0),f=b.find(".current-sr-slide-visible");if(a(window).width()>a(window).height()){var g=e;e=d,d=g}var h=360/b.width()*e,i=180/b.height()*d;f.find(".tp-parallax-container").each(function(){var b=a(this),c=parseInt(b.data("parallaxlevel"),0)/100,d=h*c,e=i*c;punchgs.TweenLite.to(b,.2,{force3D:"auto",x:d,y:e,ease:punchgs.Power3.easeOut})})})),("scroll"==c.parallax||"scroll+mouse"==c.parallax||"mouse+scroll"==c.parallax)&&a(window).on("scroll",function(){bb(b,c)}),void 0)},bb=function(b,c){if(W()&&"on"==c.parallaxDisableOnMobile)return!1;var d=b.offset().top,e=a(window).scrollTop(),f=d+b.height()/2,g=d+b.height()/2-e,h=a(window).height()/2,i=h-g;if(h>f&&(i-=h-f),b.find(".current-sr-slide-visible"),b.find(".tp-parallax-container").each(function(){var c=a(this),d=parseInt(c.data("parallaxlevel"),0)/100,e=i*d;c.data("parallaxoffset",e),punchgs.TweenLite.to(c,.2,{force3D:"auto",y:e,ease:punchgs.Power3.easeOut})}),"on"!=c.parallaxBgFreeze){var k=c.parallaxLevels[0]/100,l=i*k;punchgs.TweenLite.to(b,.2,{force3D:"auto",y:l,ease:punchgs.Power3.easeOut})}},cb=function(c,d){var e=c.parent();("thumb"==d.navigationType||"both"==d.navsecond)&&e.append('<div class="tp-bullets tp-thumbs '+d.navigationStyle+'"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');var f=e.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),g=f.parent();g.width(d.thumbWidth*d.thumbAmount),g.height(d.thumbHeight),g.parent().width(d.thumbWidth*d.thumbAmount),g.parent().height(d.thumbHeight),c.find(">ul:first >li").each(function(a){var e=c.find(">ul:first >li:eq("+a+")"),g=e.find(".defaultimg").css("backgroundColor");if(e.data("thumb")!=b)var h=e.data("thumb");else var h=e.find("img:first").attr("src");f.append('<div class="bullet thumb" style="background-color:'+g+";position:relative;width:"+d.thumbWidth+"px;height:"+d.thumbHeight+"px;background-image:url("+h+') !important;background-size:cover;background-position:center center;"></div>'),f.find(".bullet:first")});var h=10;f.find(".bullet").each(function(b){var e=a(this);b==d.slideamount-1&&e.addClass("last"),0==b&&e.addClass("first"),e.width(d.thumbWidth),e.height(d.thumbHeight),h<e.outerWidth(!0)&&(h=e.outerWidth(!0)),e.click(function(){0==d.transition&&e.index()!=d.act&&(d.next=e.index(),j(d,c))})});var i=h*c.find(">ul:first >li").length,k=f.parent().width();d.thumbWidth=h,i>k&&(a(document).mousemove(function(b){a("body").data("mousex",b.pageX)}),f.parent().mouseenter(function(){var b=a(this),d=b.offset(),e=a("body").data("mousex")-d.left,f=b.width(),g=b.find(".bullet:first").outerWidth(!0),h=g*c.find(">ul:first >li").length,i=h-f+15,j=i/f;b.addClass("over"),e-=30;var k=0-e*j;k>0&&(k=0),0-h+f>k&&(k=0-h+f),eb(b,k,200)}),f.parent().mousemove(function(){var b=a(this),d=b.offset(),e=a("body").data("mousex")-d.left,f=b.width(),g=b.find(".bullet:first").outerWidth(!0),h=g*c.find(">ul:first >li").length-1,i=h-f+15,j=i/f;e-=3,6>e&&(e=0),e+3>f-6&&(e=f);var k=0-e*j;k>0&&(k=0),0-h+f>k&&(k=0-h+f),eb(b,k,0)}),f.parent().mouseleave(function(){var b=a(this);b.removeClass("over"),db(c)}))},db=function(a){var b=a.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),c=b.parent(),e=(c.offset(),c.find(".bullet:first").outerWidth(!0)),f=c.find(".bullet.selected").index()*e,g=c.width(),e=c.find(".bullet:first").outerWidth(!0),h=e*a.find(">ul:first >li").length,k=0-f;k>0&&(k=0),0-h+g>k&&(k=0-h+g),c.hasClass("over")||eb(c,k,200)},eb=function(a,b){punchgs.TweenLite.to(a.find(".tp-thumbcontainer"),.2,{force3D:"auto",left:b,ease:punchgs.Power3.easeOut,overwrite:"auto"})}}(jQuery);
// Javascript String constants for translation
var THEMEREX_MESSAGE_BOOKMARK_ADD   = "Add the bookmark";
var THEMEREX_MESSAGE_BOOKMARK_ADDED = "Current page has been successfully added to the bookmarks. You can see it in the right panel on the tab \'Bookmarks\'";
var THEMEREX_MESSAGE_BOOKMARK_TITLE = "Enter bookmark title";
var THEMEREX_MESSAGE_BOOKMARK_EXISTS= "Current page already exists in the bookmarks list";
var THEMEREX_MESSAGE_SEARCH_ERROR = "Error occurs in AJAX search! Please, type your query and press search icon for the traditional search way.";
var THEMEREX_MESSAGE_EMAIL_CONFIRM= "On the e-mail address <b>%s</b> we sent a confirmation email.<br>Please, open it and click on the link.";
var THEMEREX_MESSAGE_EMAIL_ADDED  = "Your address <b>%s</b> has been successfully added to the subscription list";
var THEMEREX_REVIEWS_VOTE  = "Thanks for your vote! New average rating is:";
var THEMEREX_REVIEWS_ERROR  = "Error saving your vote! Please, try again later.";
var THEMEREX_MAGNIFIC_LOADING     = "Loading image #%curr% ...";
var THEMEREX_MAGNIFIC_ERROR       = "<a href=\"%url%\">The image #%curr%</a> could not be loaded.";
var THEMEREX_MESSAGE_ERROR_LIKE   = "Error saving your like! Please, try again later.";
var THEMEREX_GLOBAL_ERROR_TEXT  = "Global error text";
var THEMEREX_NAME_EMPTY  = "The name can\'t be empty";
var THEMEREX_NAME_LONG   = "Too long name";
var THEMEREX_PHONE_EMPTY  = "The phone can\'t be empty";
var THEMEREX_PHONE_LONG   = "Too long phone";
var THEMEREX_DATE_EMPTY  = "The date can\'t be empty";
var THEMEREX_DATE_LONG   = "Too long date";
var THEMEREX_TIME_EMPTY  = "The time can\'t be empty";
var THEMEREX_TIME_LONG   = "Too long time";
var THEMEREX_EMAIL_EMPTY   = "Too short (or empty) email address";
var THEMEREX_EMAIL_LONG  = "Too long email address";
var THEMEREX_EMAIL_NOT_VALID   = "Invalid email address";
var THEMEREX_SUBJECT_EMPTY  = "The subject can\'t be empty";
var THEMEREX_SUBJECT_LONG   = "Too long subject";
var THEMEREX_MESSAGE_EMPTY   = "The message text can\'t be empty";
var THEMEREX_MESSAGE_LONG   = "Too long message text";
var THEMEREX_SEND_COMPLETE   = "Send message complete!";
var THEMEREX_SEND_ORDER_COMPLETE  = "Thank you! We\'ll be in touch.";
var THEMEREX_SEND_ERROR   = "Transmit failed!";
var THEMEREX_LOGIN_EMPTY  = "The Login field can\'t be empty";
var THEMEREX_LOGIN_LONG  = "Too long login field";
var THEMEREX_PASSWORD_EMPTY  = "The password can\'t be empty and shorter then 5 characters";
var THEMEREX_PASSWORD_LONG  = "Too long password";
var THEMEREX_PASSWORD_NOT_EQUAL   = "The passwords in both fields are not equal";
var THEMEREX_REGISTRATION_SUCCESS = "Registration success! Please log in!";
var THEMEREX_REGISTRATION_FAILED  = "Registration failed!";
var THEMEREX_REGISTRATION_AUTHOR  = "Your account is waiting for the site admin moderation!";
var THEMEREX_GEOCODE_ERROR   = "Geocode was not successful for the following reason:";
var THEMEREX_GOOGLE_MAP_NOT_AVAIL = "Google map API not available!";
var THEMEREX_HOVER_LINK           = "Enlarge";

// AJAX parameters
var THEMEREX_ajax_url = "#";
var THEMEREX_ajax_nonce = "38699fa705";

// Site base url
var THEMEREX_site_url = "index.html";

// Theme base font
var THEMEREX_theme_font = "";

// Theme skin
var THEMEREX_theme_skin = "general";
var THEMEREX_theme_skin_bg = "#ffffff";

// Slider height
var THEMEREX_slider_height = 100;

// System message
var THEMEREX_systemMessage = {message:"", status: "", header: ""};

// User logged in
var THEMEREX_userLoggedIn = false;

// Show table of content for the current page
var THEMEREX_menu_toc = 'no';
var THEMEREX_menu_toc_home = THEMEREX_menu_toc!='no' && false;
var THEMEREX_menu_toc_top = THEMEREX_menu_toc!='no' && false;

// Fix main menu
if (jQuery("body.fixed_menu").length > 0) {
	// Use fix main menu
	var THEMEREX_menuFixed = true;
	
}else{
	// Not use fix main menu
	var THEMEREX_menuFixed = false;
}

// Right panel demo timer
var THEMEREX_demo_time = 3000;

// Video and Audio tag wrapper
var THEMEREX_useMediaElement = true;

// Use AJAX search
var THEMEREX_useAJAXSearch = true;
var THEMEREX_AJAXSearch_min_length = 3;
var THEMEREX_AJAXSearch_delay = 200;

// Popup windows engine
var THEMEREX_popupEngine  = 'magnific';
var THEMEREX_popupGallery = true;

// E-mail mask
THEMEREX_EMAIL_MASK = '^([a-zA-Z0-9_\\-]+\\.)*[a-zA-Z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$';

// Messages max length
var THEMEREX_msg_maxlength_contacts = 1000;
var THEMEREX_msg_maxlength_comments = 1000;

// Remember visitors settings
var THEMEREX_remember_visitors_settings = false;

// Primary and secondary responsive main menu
if (jQuery("body.responsive_menu_show").length > 0) {
	// Use responsive version main menu as primary
	var THEMEREX_menuResponsive = 3000;
	
}else{
	// Use responsive version main menu as secondary
	var THEMEREX_menuResponsive = 1136;
}
var THEMEREX_responsive_menu_click = true;

// Global variables storage
if (typeof THEMEREX_GLOBALS == 'undefined') var THEMEREX_GLOBALS = {};

/* Booking Calendar Settings */
var WPBookingCalendarSettings = {"path":"js\/vendor\/booking-calendar\/public","day_white_bg":"#FFFFFF","day_white_bg_hover":"#567BD2","day_black_bg":"#333333","day_black_bg_hover":"#567BD2","day_white_line1_color":"#999999","day_white_line1_color_hover":"#FFFFFF","day_white_line2_color":"#00CC33","day_white_line2_color_hover":"#FFFFFF","day_black_line1_color":"#FFFFFF","day_black_line1_color_hover":"#FFFFFF","day_black_line2_color":"#FFFFFF","day_black_line2_color_hover":"#FFFFFF","recaptcha_style":"white"};

jQuery(window).load(function() {
    "use strict";
    preloader();
})

jQuery(document).ready(function() {
    "use strict";
	main_slider_init();
	isotope_filtr_inited();
	popup_block_inited();
	hover_mobile();
	simform_init();
});

function preloader(){
    "use strict";
    //preloader
    jQuery(".preloaderimg").fadeOut();
    jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
        jQuery(this).remove();
    });
}


/*Main slider*/
function main_slider_init() {
    "use strict";
    if (jQuery("#mainslider_1").length > 0) {
		var setREVStartSize = function() {
			var	tpopt = new Object();
				tpopt.startwidth = 1280;
				tpopt.startheight = 690;
				tpopt.container = jQuery('#rev_slider');
				tpopt.fullScreen = "off";
				tpopt.forceFullWidth="off";

			tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		/* CALL PLACEHOLDER */
		setREVStartSize();

		var tpj=jQuery;
		tpj.noConflict();
		var revapi8;

		tpj(document).ready(function() {

		if(tpj('#rev_slider').revolution == undefined){
			revslider_showDoubleJqueryError('#rev_slider');
		}else{
		   revapi8 = tpj('#rev_slider').show().revolution(
			{	
				dottedOverlay:"none",
				delay:8000,
				startwidth:1280,
				startheight:690,
				hideThumbs:200,
				thumbWidth:200,
				thumbHeight:200,
				thumbAmount:4,
				simplifyAll:"off",
				navigationType:"none",
				navigationArrows:"solo",
				navigationStyle:"preview1",
				touchenabled:"on",
				onHoverStop:"on",
				nextSlideOnWindowFocus:"off",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				drag_block_vertical: false,
				keyboardNavigation:"off",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
				shadow:0,
				fullWidth:"on",
				fullScreen:"off",
				spinner:"spinner0",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				forceFullWidth:"off",
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0					
				});

			}
		});
    }

    if (jQuery("#mainslider_2").length > 0) {
		var setREVStartSize = function() {
			var tpopt = new Object();
			tpopt.startwidth = 1280;
			tpopt.startheight = 750;
			tpopt.container = jQuery('#rev_slider');
			tpopt.fullScreen = "on";
			tpopt.forceFullWidth="off";

			tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		setREVStartSize();
		var tpj=jQuery;
		tpj.noConflict();
		var revapi2;

		tpj(document).ready(function() {
			if(tpj('#rev_slider').revolution == undefined){
				revslider_showDoubleJqueryError('#rev_slider');
			}else{
				revapi2 = tpj('#rev_slider').show().revolution(
				{
				dottedOverlay:"none",
				delay:8000,
				startwidth:1280,
				startheight:750,
				hideThumbs:0,thumbWidth:180,
				thumbHeight:80,
				thumbAmount:3,
				simplifyAll:"off",
				navigationType:"thumb",
				navigationArrows:"none",
				navigationStyle:"round",
				touchenabled:"on",
				onHoverStop:"on",
				nextSlideOnWindowFocus:"off",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				drag_block_vertical: false,
				keyboardNavigation:"off",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:0,
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,shadow:0,
				fullWidth:"off",
				fullScreen:"on",
				spinner:"spinner0",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,shuffle:"off",
				forceFullWidth:"off",
				fullScreenAlignForce:"off",
				minFullScreenHeight:"",
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,
				fullScreenOffsetContainer: "",
				fullScreenOffset: "",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0});
			}
		});    	
    }

    if (jQuery("#mainslider_3").length > 0) {
		var setREVStartSize = function() {
			var	tpopt = new Object();
				tpopt.startwidth = 1280;
				tpopt.startheight = 750;
				tpopt.container = jQuery('#rev_slider');
				tpopt.fullScreen = "on";
				tpopt.forceFullWidth="off";

			tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		setREVStartSize();


		var tpj=jQuery;
		tpj.noConflict();
		var revapi7;

		tpj(document).ready(function() {
			if(tpj('#rev_slider').revolution == undefined){
				revslider_showDoubleJqueryError('#rev_slider');
			}else{
			   	revapi7 = tpj('#rev_slider').show().revolution({	
					dottedOverlay:"none",
					delay:8000,
					startwidth:1280,
					startheight:750,
					hideThumbs:200,
					thumbWidth:100,
					thumbHeight:50,
					thumbAmount:3,
					simplifyAll:"off",
					navigationType:"none",
					navigationArrows:"solo",
					navigationStyle:"preview1",
					touchenabled:"on",
					onHoverStop:"on",
					nextSlideOnWindowFocus:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					drag_block_vertical: false,
					keyboardNavigation:"off",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,
					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,
					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,
					shadow:0,
					fullWidth:"off",
					fullScreen:"on",
					spinner:"spinner0",
					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					shuffle:"off",
					forceFullWidth:"off",
					fullScreenAlignForce:"off",
					minFullScreenHeight:"",
					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResolution:0,
					fullScreenOffsetContainer: "",
					fullScreenOffset: "",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:737,
					startWithSlide:0					
				});

			}
		});
	}

	if (jQuery("#mainslider_4").length > 0) {
		var setREVStartSize = function() {
			var	tpopt = new Object();
				tpopt.startwidth = 1280;
				tpopt.startheight = 750;
				tpopt.container = jQuery('#rev_slider');
				tpopt.fullScreen = "on";
				tpopt.forceFullWidth="off";

			tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		/* CALL PLACEHOLDER */
		setREVStartSize();


		var tpj=jQuery;
		tpj.noConflict();
		var revapi9;

		tpj(document).ready(function() {

		if(tpj('#rev_slider').revolution == undefined){
			revslider_showDoubleJqueryError('#rev_slider');
		}else{
		   	revapi9 = tpj('#rev_slider').show().revolution({	
				dottedOverlay:"none",
				delay:8000,
				startwidth:1280,
				startheight:750,
				hideThumbs:0,
				thumbWidth:180,
				thumbHeight:80,
				thumbAmount:4,
				simplifyAll:"off",
				navigationType:"thumb",
				navigationArrows:"none",
				navigationStyle:"round",
				touchenabled:"on",
				onHoverStop:"on",
				nextSlideOnWindowFocus:"off",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				drag_block_vertical: false,
				keyboardNavigation:"off",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:0,
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
				shadow:0,
				fullWidth:"off",
				fullScreen:"on",
				spinner:"spinner0",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				forceFullWidth:"off",
				fullScreenAlignForce:"off",
				minFullScreenHeight:"",
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,
				fullScreenOffsetContainer: "",
				fullScreenOffset: "",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0					
				});

			}
		});		
	}


}

/* Add isotope filtr button*/
function isotope_filtr_inited() {
    "use strict";
	if (jQuery(".isotopeFiltr").length > 0) {
		jQuery(".isotopeFiltr").append("<ul><li class=\"squareButton active\"><a href=\"#\" data-filter=\"*\">All</a></li><li class=\"squareButton\"><a href=\"#\" data-filter=\".flt_64\">Living room</a></li><li class=\"squareButton\"><a href=\"#\" data-filter=\".flt_65\">Driveway</a></li><li class=\"squareButton\"><a href=\"#\" data-filter=\".flt_46\">Basement</a></li><li class=\"squareButton\"><a href=\"#\" data-filter=\".flt_11\">Bedroom</a></li><li class=\"squareButton\"><a href=\"#\" data-filter=\".flt_8\">Garage</a></li><li class=\"squareButton\"><a href=\"#\" data-filter=\".flt_10\">Kitchen</a></li></ul>");
	}
}

/* Add login popup block */
function popup_block_inited() {
    "use strict";
	if (jQuery(".usermenu_show").length > 0) {

		var usermenu  ='<div id="form_popup_top" class="sc_popup sc_popup_light mfp-with-anim mfp-hide">';
		usermenu  +=	'<div class="dark sc_contact_form sc_call_form sc_contact_form_contact">';
		usermenu  +=		'<h4 class="title">Request call back</h4>';
		usermenu  +=		'<div class="description">Enter your details below request a call back.</div>';
		usermenu  +=		'<form data-formtype="call" method="post" action="#">';
		usermenu  +=			'<input placeholder="Name" class="sc_contact_form_username" type="text" name="username">';
		usermenu  +=			'<input placeholder="Phone" class="sc_contact_form_phone" type="text" name="phone">';
		usermenu  +=			'<div class="message">';
		usermenu  +=				'<textarea placeholder="Message" class="sc_contact_form_message" name="message"></textarea>';
		usermenu  +=			'</div>';
		usermenu  +=			'<div class="sc_contact_form_button">';
		usermenu  +=				'<div class="squareButton sc_button_style_accent_2 sc_button_size_big global big">';
		usermenu  +=					'<a href="#" class="sc_contact_form_submit">Submit</a>';
		usermenu  +=				'</div>';
		usermenu  +=			'</div>';
		usermenu  +=			'<div class="result sc_infobox"></div>';
		usermenu  +=		'</form>';
		usermenu  +=	'</div>';
		usermenu  +='</div>';
		usermenu  +='<div id="user-popUp" class="user-popUp mfp-with-anim mfp-hide">';
		usermenu  +=	'<div class="sc_tabs">';
		usermenu  +=		'<ul class="loginHeadTab" role="tablist">';
		usermenu  +=			'<li role="tab" tabindex="0" aria-controls="loginForm" aria-labelledby="user_popup_1" aria-selected="true" aria-expanded="true">';
		usermenu  +=				'<a href="#loginForm" class="loginFormTab icon" role="presentation" id="user_popup_1">Log In</a>';
		usermenu  +=			'</li>';
		usermenu  +=			'<li role="tab" aria-controls="registerForm" aria-labelledby="user_popup_2" aria-selected="false" aria-expanded="false">';
		usermenu  +=				'<a href="#registerForm" class="registerFormTab icon" role="presentation" id="user_popup_2">Create an Account</a>';
		usermenu  +=			'</li>';
		usermenu  +=		'</ul>';
		usermenu  +=		'<div id="loginForm" class="formItems loginFormBody" aria-labelledby="user_popup_1" role="tabpanel" aria-hidden="false">';
		usermenu  +=			'<div class="itemformLeft">';
		usermenu  +=				'<form action="#" method="post" name="login_form" class="formValid">';
		usermenu  +=					'<input type="hidden" name="redirect_to" value="#">';
		usermenu  +=					'<ul class="formList">';
		usermenu  +=						'<li class="icon formLogin">';
		usermenu  +=							'<input type="text" id="login" name="log" value="" placeholder="Login">';
		usermenu  +=						'</li>';
		usermenu  +=						'<li class="icon formPass">';
		usermenu  +=							'<input type="password" id="password" name="pwd" value="" placeholder="Password">';
		usermenu  +=						'</li>';
		usermenu  +=						'<li class="remember">';
		usermenu  +=							'<a href="#" class="forgotPwd">Forgot password?</a>';
		usermenu  +=							'<input type="checkbox" value="forever" id="rememberme" name="rememberme">';
		usermenu  +=							'<label for="rememberme">Remember me</label>';
		usermenu  +=						'</li>';
		usermenu  +=						'<li class="sc_button sc_button_style_global sc_button_size_big squareButton global big">';
		usermenu  +=							'<a href="#" class="sendEnter enter">Login</a>';
		usermenu  +=						'</li>';
		usermenu  +=					'</ul>';
		usermenu  +=				'</form>';
		usermenu  +=			'</div>';
		usermenu  +=			'<div class="itemformRight">';
		usermenu  +=				'<ul class="formList">';
		usermenu  +=					'<li>You can login using your social profile</li>';
		usermenu  +=					'<li class="loginSoc">';
		usermenu  +=						'<a href="#" class="iconLogin fb"></a>';
		usermenu  +=						'<a href="#" class="iconLogin tw"></a>';
		usermenu  +=						'<a href="#" class="iconLogin gg"></a>';
		usermenu  +=					'</li>';
		usermenu  +=					'<li>';
		usermenu  +=						'<a href="#" class="loginProblem">Problem with login?</a>';
		usermenu  +=					'</li>';
		usermenu  +=				'</ul>';
		usermenu  +=			'</div>';
		usermenu  +=			'<div class="result messageBlock"></div>';
		usermenu  +=		'</div>';
		usermenu  +=		'<div id="registerForm" class="formItems registerFormBody" aria-labelledby="user_popup_2" role="tabpanel" aria-hidden="true">';
		usermenu  +=			'<form name="register_form" method="post" class="formValid">';
		usermenu  +=				'<input type="hidden" name="redirect_to" value="#">';
		usermenu  +=				'<div class="itemformLeft">';
		usermenu  +=					'<ul class="formList">';
		usermenu  +=						'<li class="icon formUser">';
		usermenu  +=							'<input type="text" id="registration_username" name="registration_username" value="" placeholder="User name (login)">';
		usermenu  +=						'</li>';
		usermenu  +=						'<li class="icon formLogin">';
		usermenu  +=							'<input type="text" id="registration_email" name="registration_email" value="" placeholder="E-mail">';
		usermenu  +=						'</li>';
		usermenu  +=						'<li class="i-agree">';
		usermenu  +=							'<input type="checkbox" value="forever" id="i-agree" name="i-agree">';
		usermenu  +=							'<label for="i-agree">I agree with</label> <a href="#">Terms &amp; Conditions</a>';
		usermenu  +=						'</li>';
		usermenu  +=						'<li class="sc_button sc_button_style_global sc_button_size_big squareButton global big">';
		usermenu  +=							'<a href="#" class="sendEnter enter">Sign Up</a>';
		usermenu  +=						'</li>';
		usermenu  +=					'</ul>';
		usermenu  +=				'</div>';
		usermenu  +=				'<div class="itemformRight">';
		usermenu  +=					'<ul class="formList">';
		usermenu  +=						'<li class="icon formPass">';
		usermenu  +=							'<input type="password" id="registration_pwd" name="registration_pwd" value="" placeholder="Password">';
		usermenu  +=						'</li>';
		usermenu  +=						'<li class="icon formPass">';
		usermenu  +=							'<input type="password" id="registration_pwd2" name="registration_pwd2" value="" placeholder="Confirm Password">';
		usermenu  +=						'</li>';
		usermenu  +=					'</ul>';
		usermenu  +=				'</div>';
		usermenu  +=			'</form>';
		usermenu  +=			'<div class="result messageBlock"></div>';
		usermenu  +=		'</div>';
		usermenu  +=	'</div>';
		usermenu  +='</div>';

		jQuery('body').append(usermenu);

	}
}

/* Simform init*/
function simform_init() {
    "use strict";
	if (jQuery("#sc_contact_simform").length > 0) {
		var theForm = document.getElementById( "sc_contact_simform" );
		var orderForm = jQuery("#sc_contact_simform");
		new stepsForm( theForm, {
			onSubmit : function( form ) {
				// hide form
				var action = orderForm.attr("action");
				orderSubmitForm(theForm, orderForm, action!=undefined ? action : THEMEREX_ajax_url, THEMEREX_ajax_nonce);
			}
		});
	}
};

/* Most used theme JS files in one:

1. widget.min.js
2. superfish.min.js
3. tabs.min.js
4. effect.min.js
5. effect-fade.min.js
6. jquery.easing.1.3.js
7. jquery.cookie.js
8. diagram.raphael.js
9. menu.min.js
10. position.min.js
11. jquery.magnific-popup.min.js
12. jquery.autosize.js
13. jquery.isotope.min.js
14. jquery.formstyler.js
15. mouse.min.js
16. sortable.min.js
17. idangerous.swiper-2.7.js
18. idangerous.swiper.scrollbar-2.4.js

-----------------------------------------------------------------------------------------------*/



/* 1. widget.min.js
-----------------------------------------------------------------------------------------------*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){var b=0,c=Array.prototype.slice;return a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h,i={},j=b.split(".")[0];return b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new g(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,d){return a.isFunction(d)?void(i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(i[b]=d)}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix||b:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g),g},a.widget.extend=function(b){for(var d,e,f=c.call(arguments,1),g=0,h=f.length;h>g;g++)for(d in f[g])e=f[g][d],f[g].hasOwnProperty(d)&&void 0!==e&&(b[d]=a.isPlainObject(e)?a.isPlainObject(b[d])?a.widget.extend({},b[d],e):a.widget.extend({},e):e);return b},a.widget.bridge=function(b,d){var e=d.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=c.call(arguments,1),i=this;return g?this.each(function(){var c,d=a.data(this,e);return"instance"===f?(i=d,!1):d?a.isFunction(d[f])&&"_"!==f.charAt(0)?(c=d[f].apply(d,h),c!==d&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+f+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):(h.length&&(f=a.widget.extend.apply(null,[f].concat(h))),this.each(function(){var b=a.data(this,e);b?(b.option(f||{}),b._init&&b._init()):a.data(this,e,new d(f,this))})),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(c,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=b++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!b),b&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){return b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled")?("string"==typeof g?f[g]:g).apply(f,arguments):void 0}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.unbind(c).undelegate(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.widget});


/* 2. superfish.min.js
-----------------------------------------------------------------------------------------------*/
;(function(e){"use strict";var s=function(){var s={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},o=function(){var s=/iPhone|iPad|iPod/i.test(navigator.userAgent);return s&&e(window).load(function(){e("body").children().on("click",e.noop)}),s}(),n=function(){var e=document.documentElement.style;return"behavior"in e&&"fill"in e&&/iemobile/i.test(navigator.userAgent)}(),t=function(e,o){var n=s.menuClass;o.cssArrows&&(n+=" "+s.menuArrowClass),e.toggleClass(n)},i=function(o,n){return o.find("li."+n.pathClass).slice(0,n.pathLevels).addClass(n.hoverClass+" "+s.bcClass).filter(function(){return e(this).children(n.popUpSelector).hide().show().length}).removeClass(n.pathClass)},r=function(e){e.children("a").toggleClass(s.anchorClass)},a=function(e){var s=e.css("ms-touch-action");s="pan-y"===s?"auto":"pan-y",e.css("ms-touch-action",s)},l=function(s,t){var i="li:has("+t.popUpSelector+")";e.fn.hoverIntent&&!t.disableHI?s.hoverIntent(u,p,i):s.on("mouseenter.superfish",i,u).on("mouseleave.superfish",i,p);var r="MSPointerDown.superfish";o||(r+=" touchend.superfish"),n&&(r+=" mousedown.superfish"),s.on("focusin.superfish","li",u).on("focusout.superfish","li",p).on(r,"a",t,h)},h=function(s){var o=e(this),n=o.siblings(s.data.popUpSelector);n.length>0&&n.is(":hidden")&&(o.one("click.superfish",!1),"MSPointerDown"===s.type?o.trigger("focus"):e.proxy(u,o.parent("li"))())},u=function(){var s=e(this),o=d(s);clearTimeout(o.sfTimer),s.siblings().superfish("hide").end().superfish("show")},p=function(){var s=e(this),n=d(s);o?e.proxy(f,s,n)():(clearTimeout(n.sfTimer),n.sfTimer=setTimeout(e.proxy(f,s,n),n.delay))},f=function(s){s.retainPath=e.inArray(this[0],s.$path)>-1,this.superfish("hide"),this.parents("."+s.hoverClass).length||(s.onIdle.call(c(this)),s.$path.length&&e.proxy(u,s.$path)())},c=function(e){return e.closest("."+s.menuClass)},d=function(e){return c(e).data("sf-options")};return{hide:function(s){if(this.length){var o=this,n=d(o);if(!n)return this;var t=n.retainPath===!0?n.$path:"",i=o.find("li."+n.hoverClass).add(this).not(t).removeClass(n.hoverClass).children(n.popUpSelector),r=n.speedOut;s&&(i.show(),r=0),n.retainPath=!1,n.onBeforeHide.call(i),i.stop(!0,!0).animate(n.animationOut,r,function(){var s=e(this);n.onHide.call(s)})}return this},show:function(){var e=d(this);if(!e)return this;var s=this.addClass(e.hoverClass),o=s.children(e.popUpSelector);return e.onBeforeShow.call(o),o.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(o)}),this},destroy:function(){return this.each(function(){var o,n=e(this),i=n.data("sf-options");return i?(o=n.find(i.popUpSelector).parent("li"),clearTimeout(i.sfTimer),t(n,i),r(o),a(n),n.off(".superfish").off(".hoverIntent"),o.children(i.popUpSelector).attr("style",function(e,s){return s.replace(/display[^;]+;?/g,"")}),i.$path.removeClass(i.hoverClass+" "+s.bcClass).addClass(i.pathClass),n.find("."+i.hoverClass).removeClass(i.hoverClass),i.onDestroy.call(n),n.removeData("sf-options"),void 0):!1})},init:function(o){return this.each(function(){var n=e(this);if(n.data("sf-options"))return!1;var h=e.extend({},e.fn.superfish.defaults,o),u=n.find(h.popUpSelector).parent("li");h.$path=i(n,h),n.data("sf-options",h),t(n,h),r(u),a(n),l(n,h),u.not("."+s.bcClass).superfish("hide",!0),h.onInit.call(this)})}}}();e.fn.superfish=function(o){return s[o]?s[o].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof o&&o?e.error("Method "+o+" does not exist on jQuery.fn.superfish"):s.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop},e.fn.extend({hideSuperfishUl:s.hide,showSuperfishUl:s.show})})(jQuery);

/* 3. tabs.min.js
-----------------------------------------------------------------------------------------------*/
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./widget"],a):a(jQuery)}(function(a){return a.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var a=/#.*$/;return function(b){var c,d;b=b.cloneNode(!1),c=b.href.replace(a,""),d=location.href.replace(a,"");try{c=decodeURIComponent(c)}catch(e){}try{d=decodeURIComponent(d)}catch(e){}return b.hash.length>1&&c===d}}(),_create:function(){var b=this,c=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",c.collapsible),this._processTabs(),c.active=this._initialActive(),a.isArray(c.disabled)&&(c.disabled=a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"),function(a){return b.tabs.index(a)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(c.active):a(),this._refresh(),this.active.length&&this.load(c.active)},_initialActive:function(){var b=this.options.active,c=this.options.collapsible,d=location.hash.substring(1);return null===b&&(d&&this.tabs.each(function(c,e){return a(e).attr("aria-controls")===d?(b=c,!1):void 0}),null===b&&(b=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===b||-1===b)&&(b=this.tabs.length?0:!1)),b!==!1&&(b=this.tabs.index(this.tabs.eq(b)),-1===b&&(b=c?!1:0)),!c&&b===!1&&this.anchors.length&&(b=0),b},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):a()}},_tabKeydown:function(b){var c=a(this.document[0].activeElement).closest("li"),d=this.tabs.index(c),e=!0;if(!this._handlePageNav(b)){switch(b.keyCode){case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:d++;break;case a.ui.keyCode.UP:case a.ui.keyCode.LEFT:e=!1,d--;break;case a.ui.keyCode.END:d=this.anchors.length-1;break;case a.ui.keyCode.HOME:d=0;break;case a.ui.keyCode.SPACE:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d);case a.ui.keyCode.ENTER:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d===this.options.active?!1:d);default:return}b.preventDefault(),clearTimeout(this.activating),d=this._focusNextTab(d,e),b.ctrlKey||b.metaKey||(c.attr("aria-selected","false"),this.tabs.eq(d).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",d)},this.delay))}},_panelKeydown:function(b){this._handlePageNav(b)||b.ctrlKey&&b.keyCode===a.ui.keyCode.UP&&(b.preventDefault(),this.active.focus())},_handlePageNav:function(b){return b.altKey&&b.keyCode===a.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):b.altKey&&b.keyCode===a.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(b,c){function d(){return b>e&&(b=0),0>b&&(b=e),b}for(var e=this.tabs.length-1;-1!==a.inArray(d(),this.options.disabled);)b=c?b+1:b-1;return b},_focusNextTab:function(a,b){return a=this._findNextTab(a,b),this.tabs.eq(a).focus(),a},_setOption:function(a,b){return"active"===a?void this._activate(b):"disabled"===a?void this._setupDisabled(b):(this._super(a,b),"collapsible"===a&&(this.element.toggleClass("ui-tabs-collapsible",b),b||this.options.active!==!1||this._activate(0)),"event"===a&&this._setupEvents(b),void("heightStyle"===a&&this._setupHeightStyle(b)))},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var b=this.options,c=this.tablist.children(":has(a[href])");b.disabled=a.map(c.filter(".ui-state-disabled"),function(a){return c.index(a)}),this._processTabs(),b.active!==!1&&this.anchors.length?this.active.length&&!a.contains(this.tablist[0],this.active[0])?this.tabs.length===b.disabled.length?(b.active=!1,this.active=a()):this._activate(this._findNextTab(Math.max(0,b.active-1),!1)):b.active=this.tabs.index(this.active):(b.active=!1,this.active=a()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var b=this,c=this.tabs,d=this.anchors,e=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(b){a(this).is(".ui-state-disabled")&&b.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){a(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return a("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=a(),this.anchors.each(function(c,d){var e,f,g,h=a(d).uniqueId().attr("id"),i=a(d).closest("li"),j=i.attr("aria-controls");b._isLocal(d)?(e=d.hash,g=e.substring(1),f=b.element.find(b._sanitizeSelector(e))):(g=i.attr("aria-controls")||a({}).uniqueId()[0].id,e="#"+g,f=b.element.find(e),f.length||(f=b._createPanel(g),f.insertAfter(b.panels[c-1]||b.tablist)),f.attr("aria-live","polite")),f.length&&(b.panels=b.panels.add(f)),j&&i.data("ui-tabs-aria-controls",j),i.attr({"aria-controls":g,"aria-labelledby":h}),f.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),c&&(this._off(c.not(this.tabs)),this._off(d.not(this.anchors)),this._off(e.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(b){return a("<div>").attr("id",b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(b){a.isArray(b)&&(b.length?b.length===this.anchors.length&&(b=!0):b=!1);for(var c,d=0;c=this.tabs[d];d++)b===!0||-1!==a.inArray(d,b)?a(c).addClass("ui-state-disabled").attr("aria-disabled","true"):a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=b},_setupEvents:function(b){var c={};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(a){a.preventDefault()}}),this._on(this.anchors,c),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(b){var c,d=this.element.parent();"fill"===b?(c=d.height(),c-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var b=a(this),d=b.css("position");"absolute"!==d&&"fixed"!==d&&(c-=b.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){c-=a(this).outerHeight(!0)}),this.panels.each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===b&&(c=0,this.panels.each(function(){c=Math.max(c,a(this).height("").height())}).height(c))},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e.closest("li"),g=f[0]===d[0],h=g&&c.collapsible,i=h?a():this._getPanelForTab(f),j=d.length?this._getPanelForTab(d):a(),k={oldTab:d,oldPanel:j,newTab:h?a():f,newPanel:i};b.preventDefault(),f.hasClass("ui-state-disabled")||f.hasClass("ui-tabs-loading")||this.running||g&&!c.collapsible||this._trigger("beforeActivate",b,k)===!1||(c.active=h?!1:this.tabs.index(f),this.active=g?a():f,this.xhr&&this.xhr.abort(),j.length||i.length||a.error("jQuery UI Tabs: Mismatching fragment identifier."),i.length&&this.load(this.tabs.index(f),b),this._toggle(b,k))},_toggle:function(b,c){function d(){f.running=!1,f._trigger("activate",b,c)}function e(){c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),g.length&&f.options.show?f._show(g,f.options.show,d):(g.show(),d())}var f=this,g=c.newPanel,h=c.oldPanel;this.running=!0,h.length&&this.options.hide?this._hide(h,this.options.hide,function(){c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),e()}):(c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),h.hide(),e()),h.attr("aria-hidden","true"),c.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),g.length&&h.length?c.oldTab.attr("tabIndex",-1):g.length&&this.tabs.filter(function(){return 0===a(this).attr("tabIndex")}).attr("tabIndex",-1),g.attr("aria-hidden","false"),c.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(b){var c,d=this._findActive(b);d[0]!==this.active[0]&&(d.length||(d=this.active),c=d.find(".ui-tabs-anchor")[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return b===!1?a():this.tabs.eq(b)},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){a.data(this,"ui-tabs-destroy")?a(this).remove():a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var b=a(this),c=b.data("ui-tabs-aria-controls");c?b.attr("aria-controls",c).removeData("ui-tabs-aria-controls"):b.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(b){var c=this.options.disabled;c!==!1&&(void 0===b?c=!1:(b=this._getIndex(b),c=a.isArray(c)?a.map(c,function(a){return a!==b?a:null}):a.map(this.tabs,function(a,c){return c!==b?c:null})),this._setupDisabled(c))},disable:function(b){var c=this.options.disabled;if(c!==!0){if(void 0===b)c=!0;else{if(b=this._getIndex(b),-1!==a.inArray(b,c))return;c=a.isArray(c)?a.merge([b],c).sort():[b]}this._setupDisabled(c)}},load:function(b,c){b=this._getIndex(b);var d=this,e=this.tabs.eq(b),f=e.find(".ui-tabs-anchor"),g=this._getPanelForTab(e),h={tab:e,panel:g},i=function(a,b){"abort"===b&&d.panels.stop(!1,!0),e.removeClass("ui-tabs-loading"),g.removeAttr("aria-busy"),a===d.xhr&&delete d.xhr};this._isLocal(f[0])||(this.xhr=a.ajax(this._ajaxSettings(f,c,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(e.addClass("ui-tabs-loading"),g.attr("aria-busy","true"),this.xhr.done(function(a,b,e){setTimeout(function(){g.html(a),d._trigger("load",c,h),i(e,b)},1)}).fail(function(a,b){setTimeout(function(){i(a,b)},1)})))},_ajaxSettings:function(b,c,d){var e=this;return{url:b.attr("href"),beforeSend:function(b,f){return e._trigger("beforeLoad",c,a.extend({jqXHR:b,ajaxSettings:f},d))}}},_getPanelForTab:function(b){var c=a(b).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+c))}})});

/* 4. effect.min.js
-----------------------------------------------------------------------------------------------*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){var b="ui-effects-",c=a;
return a.effects={effect:{}},function(a,b){function c(a,b,c){var d=l[b.type]||{};return null==a?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function d(b){var c=j(),d=c._rgba=[];return b=b.toLowerCase(),o(i,function(a,e){var f,g=e.re.exec(b),h=g&&e.parse(g),i=e.space||"rgba";return h?(f=c[i](h),c[k[i].cache]=f[k[i].cache],d=c._rgba=f._rgba,!1):void 0}),d.length?("0,0,0,0"===d.join()&&a.extend(d,f.transparent),c):f[b]}function e(a,b,c){return c=(c+1)%1,1>6*c?a+(b-a)*c*6:1>2*c?b:2>3*c?a+(b-a)*(2/3-c)*6:a}var f,g="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",h=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],j=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},k={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},l={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},m=j.support={},n=a("<p>")[0],o=a.each;n.style.cssText="background-color:rgba(1,1,1,.5)",m.rgba=n.style.backgroundColor.indexOf("rgba")>-1,o(k,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),j.fn=a.extend(j.prototype,{parse:function(e,g,h,i){if(e===b)return this._rgba=[null,null,null,null],this;(e.jquery||e.nodeType)&&(e=a(e).css(g),g=b);var l=this,m=a.type(e),n=this._rgba=[];return g!==b&&(e=[e,g,h,i],m="array"),"string"===m?this.parse(d(e)||f._default):"array"===m?(o(k.rgba.props,function(a,b){n[b.idx]=c(e[b.idx],b)}),this):"object"===m?(e instanceof j?o(k,function(a,b){e[b.cache]&&(l[b.cache]=e[b.cache].slice())}):o(k,function(b,d){var f=d.cache;o(d.props,function(a,b){if(!l[f]&&d.to){if("alpha"===a||null==e[a])return;l[f]=d.to(l._rgba)}l[f][b.idx]=c(e[a],b,!0)}),l[f]&&a.inArray(null,l[f].slice(0,3))<0&&(l[f][3]=1,d.from&&(l._rgba=d.from(l[f])))}),this):void 0},is:function(a){var b=j(a),c=!0,d=this;return o(k,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],o(e.props,function(a,b){return null!=g[b.idx]?c=g[b.idx]===f[b.idx]:void 0})),c}),c},_space:function(){var a=[],b=this;return o(k,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var d=j(a),e=d._space(),f=k[e],g=0===this.alpha()?j("transparent"):this,h=g[f.cache]||f.to(g._rgba),i=h.slice();return d=d[f.cache],o(f.props,function(a,e){var f=e.idx,g=h[f],j=d[f],k=l[e.type]||{};null!==j&&(null===g?i[f]=j:(k.mod&&(j-g>k.mod/2?g+=k.mod:g-j>k.mod/2&&(g-=k.mod)),i[f]=c((j-g)*b+g,e)))}),this[e](i)},blend:function(b){if(1===this._rgba[3])return this;var c=this._rgba.slice(),d=c.pop(),e=j(b)._rgba;return j(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return null==a?b>2?1:0:a});return 1===c[3]&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return null==a&&(a=b>2?1:0),b&&3>b&&(a=Math.round(100*a)+"%"),a});return 1===c[3]&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(255*d)),"#"+a.map(c,function(a){return a=(a||0).toString(16),1===a.length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),j.fn.parse.prototype=j.fn,k.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b,c,d=a[0]/255,e=a[1]/255,f=a[2]/255,g=a[3],h=Math.max(d,e,f),i=Math.min(d,e,f),j=h-i,k=h+i,l=.5*k;return b=i===h?0:d===h?60*(e-f)/j+360:e===h?60*(f-d)/j+120:60*(d-e)/j+240,c=0===j?0:.5>=l?j/k:j/(2-k),[Math.round(b)%360,c,l,null==g?1:g]},k.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],f=a[3],g=.5>=d?d*(1+c):d+c-d*c,h=2*d-g;return[Math.round(255*e(h,g,b+1/3)),Math.round(255*e(h,g,b)),Math.round(255*e(h,g,b-1/3)),f]},o(k,function(d,e){var f=e.props,g=e.cache,i=e.to,k=e.from;j.fn[d]=function(d){if(i&&!this[g]&&(this[g]=i(this._rgba)),d===b)return this[g].slice();var e,h=a.type(d),l="array"===h||"object"===h?d:arguments,m=this[g].slice();return o(f,function(a,b){var d=l["object"===h?a:b.idx];null==d&&(d=m[b.idx]),m[b.idx]=c(d,b)}),k?(e=j(k(m)),e[g]=m,e):j(m)},o(f,function(b,c){j.fn[b]||(j.fn[b]=function(e){var f,g=a.type(e),i="alpha"===b?this._hsla?"hsla":"rgba":d,j=this[i](),k=j[c.idx];return"undefined"===g?k:("function"===g&&(e=e.call(this,k),g=a.type(e)),null==e&&c.empty?this:("string"===g&&(f=h.exec(e),f&&(e=k+parseFloat(f[2])*("+"===f[1]?1:-1))),j[c.idx]=e,this[i](j)))})})}),j.hook=function(b){var c=b.split(" ");o(c,function(b,c){a.cssHooks[c]={set:function(b,e){var f,g,h="";if("transparent"!==e&&("string"!==a.type(e)||(f=d(e)))){if(e=j(f||e),!m.rgba&&1!==e._rgba[3]){for(g="backgroundColor"===c?b.parentNode:b;(""===h||"transparent"===h)&&g&&g.style;)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(i){}e=e.blend(h&&"transparent"!==h?h:"_default")}e=e.toRgbaString()}try{b.style[c]=e}catch(i){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=j(b.elem,c),b.end=j(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},j.hook(g),a.cssHooks.borderColor={expand:function(a){var b={};return o(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},f=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(c),function(){function b(b){var c,d,e=b.ownerDocument.defaultView?b.ownerDocument.defaultView.getComputedStyle(b,null):b.currentStyle,f={};if(e&&e.length&&e[0]&&e[e[0]])for(d=e.length;d--;)c=e[d],"string"==typeof e[c]&&(f[a.camelCase(c)]=e[c]);else for(c in e)"string"==typeof e[c]&&(f[c]=e[c]);return f}function d(b,c){var d,e,g={};for(d in c)e=c[d],b[d]!==e&&(f[d]||(a.fx.step[d]||!isNaN(parseFloat(e)))&&(g[d]=e));return g}var e=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(b,d){a.fx.step[d]=function(a){("none"!==a.end&&!a.setAttr||1===a.pos&&!a.setAttr)&&(c.style(a.elem,d,a.end),a.setAttr=!0)}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a.effects.animateClass=function(c,f,g,h){var i=a.speed(f,g,h);return this.queue(function(){var f,g=a(this),h=g.attr("class")||"",j=i.children?g.find("*").addBack():g;j=j.map(function(){var c=a(this);return{el:c,start:b(this)}}),f=function(){a.each(e,function(a,b){c[b]&&g[b+"Class"](c[b])})},f(),j=j.map(function(){return this.end=b(this.el[0]),this.diff=d(this.start,this.end),this}),g.attr("class",h),j=j.map(function(){var b=this,c=a.Deferred(),d=a.extend({},i,{queue:!1,complete:function(){c.resolve(b)}});return this.el.animate(this.diff,d),c.promise()}),a.when.apply(a,j.get()).done(function(){f(),a.each(arguments,function(){var b=this.el;a.each(this.diff,function(a){b.css(a,"")})}),i.complete.call(g[0])})})},a.fn.extend({addClass:function(b){return function(c,d,e,f){return d?a.effects.animateClass.call(this,{add:c},d,e,f):b.apply(this,arguments)}}(a.fn.addClass),removeClass:function(b){return function(c,d,e,f){return arguments.length>1?a.effects.animateClass.call(this,{remove:c},d,e,f):b.apply(this,arguments)}}(a.fn.removeClass),toggleClass:function(b){return function(c,d,e,f,g){return"boolean"==typeof d||void 0===d?e?a.effects.animateClass.call(this,d?{add:c}:{remove:c},e,f,g):b.apply(this,arguments):a.effects.animateClass.call(this,{toggle:c},d,e,f)}}(a.fn.toggleClass),switchClass:function(b,c,d,e,f){return a.effects.animateClass.call(this,{add:c,remove:b},d,e,f)}})}(),function(){function c(b,c,d,e){return a.isPlainObject(b)&&(c=b,b=b.effect),b={effect:b},null==c&&(c={}),a.isFunction(c)&&(e=c,d=null,c={}),("number"==typeof c||a.fx.speeds[c])&&(e=d,d=c,c={}),a.isFunction(d)&&(e=d,d=null),c&&a.extend(b,c),d=d||c.duration,b.duration=a.fx.off?0:"number"==typeof d?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,b.complete=e||c.complete,b}function d(b){return!b||"number"==typeof b||a.fx.speeds[b]?!0:"string"!=typeof b||a.effects.effect[b]?a.isFunction(b)?!0:"object"!=typeof b||b.effect?!1:!0:!0}a.extend(a.effects,{version:"1.11.4",save:function(a,c){for(var d=0;d<c.length;d++)null!==c[d]&&a.data(b+c[d],a[0].style[c[d]])},restore:function(a,c){var d,e;for(e=0;e<c.length;e++)null!==c[e]&&(d=a.data(b+c[e]),void 0===d&&(d=""),a.css(c[e],d))},setMode:function(a,b){return"toggle"===b&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:b.width(),height:b.height()},f=document.activeElement;try{f.id}catch(g){f=document.body}return b.wrap(d),(b[0]===f||a.contains(b[0],f))&&a(f).focus(),d=b.parent(),"static"===b.css("position")?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),b.css(e),d.css(c).show()},removeWrapper:function(b){var c=document.activeElement;return b.parent().is(".ui-effects-wrapper")&&(b.parent().replaceWith(b),(b[0]===c||a.contains(b[0],c))&&a(c).focus()),b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(){function b(b){function c(){a.isFunction(f)&&f.call(e[0]),a.isFunction(b)&&b()}var e=a(this),f=d.complete,h=d.mode;(e.is(":hidden")?"hide"===h:"show"===h)?(e[h](),c()):g.call(e[0],d,c)}var d=c.apply(this,arguments),e=d.mode,f=d.queue,g=a.effects.effect[d.effect];return a.fx.off||!g?e?this[e](d.duration,d.complete):this.each(function(){d.complete&&d.complete.call(this)}):f===!1?this.each(b):this.queue(f||"fx",b)},show:function(a){return function(b){if(d(b))return a.apply(this,arguments);var e=c.apply(this,arguments);return e.mode="show",this.effect.call(this,e)}}(a.fn.show),hide:function(a){return function(b){if(d(b))return a.apply(this,arguments);var e=c.apply(this,arguments);return e.mode="hide",this.effect.call(this,e)}}(a.fn.hide),toggle:function(a){return function(b){if(d(b)||"boolean"==typeof b)return a.apply(this,arguments);var e=c.apply(this,arguments);return e.mode="toggle",this.effect.call(this,e)}}(a.fn.toggle),cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}})}(),function(){var b={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,c){b[c]=function(b){return Math.pow(b,a+2)}}),a.extend(b,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin((80*(a-1)-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,c=4;a<((b=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*b-2)/22-a,2)}}),a.each(b,function(b,c){a.easing["easeIn"+b]=c,a.easing["easeOut"+b]=function(a){return 1-c(1-a)},a.easing["easeInOut"+b]=function(a){return.5>a?c(2*a)/2:1-c(-2*a+2)/2}})}(),a.effects});

/* 5. effect-fade.min.js
-----------------------------------------------------------------------------------------------*/
!function(a){"function"==typeof define&&define.amd?define(["jquery","./effect"],a):a(jQuery)}(function(a){return a.effects.effect.fade=function(b,c){var d=a(this),e=a.effects.setMode(d,b.mode||"toggle");d.animate({opacity:e},{queue:!1,duration:b.duration,easing:b.easing,complete:c})}});

/* 6. jquery.easing.1.3.js
-----------------------------------------------------------------------------------------------*/
jQuery.easing['jswing'] = jQuery.easing['swing']; jQuery.extend( jQuery.easing, {def: 'easeOutQuad', swing: function (x, t, b, c, d) {return jQuery.easing[jQuery.easing.def](x, t, b, c, d); }, easeInQuad: function (x, t, b, c, d) {return c*(t/=d)*t + b; }, easeOutQuad: function (x, t, b, c, d) {return -c *(t/=d)*(t-2) + b; }, easeInOutQuad: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t + b; return -c/2 * ((--t)*(t-2) - 1) + b; }, easeInCubic: function (x, t, b, c, d) {return c*(t/=d)*t*t + b; }, easeOutCubic: function (x, t, b, c, d) {return c*((t=t/d-1)*t*t + 1) + b; }, easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b; return c/2*((t-=2)*t*t + 2) + b; }, easeInQuart: function (x, t, b, c, d) {return c*(t/=d)*t*t*t + b; }, easeOutQuart: function (x, t, b, c, d) {return -c * ((t=t/d-1)*t*t*t - 1) + b; }, easeInOutQuart: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t*t + b; return -c/2 * ((t-=2)*t*t*t - 2) + b; }, easeInQuint: function (x, t, b, c, d) {return c*(t/=d)*t*t*t*t + b; }, easeOutQuint: function (x, t, b, c, d) {return c*((t=t/d-1)*t*t*t*t + 1) + b; }, easeInOutQuint: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b; return c/2*((t-=2)*t*t*t*t + 2) + b; }, easeInSine: function (x, t, b, c, d) {return -c * Math.cos(t/d * (Math.PI/2)) + c + b; }, easeOutSine: function (x, t, b, c, d) {return c * Math.sin(t/d * (Math.PI/2)) + b; }, easeInOutSine: function (x, t, b, c, d) {return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b; }, easeInExpo: function (x, t, b, c, d) {return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b; }, easeOutExpo: function (x, t, b, c, d) {return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b; }, easeInOutExpo: function (x, t, b, c, d) {if (t==0) return b; if (t==d) return b+c; if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b; return c/2 * (-Math.pow(2, -10 * --t) + 2) + b; }, easeInCirc: function (x, t, b, c, d) {return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b; }, easeOutCirc: function (x, t, b, c, d) {return c * Math.sqrt(1 - (t=t/d-1)*t) + b; }, easeInOutCirc: function (x, t, b, c, d) {if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b; return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b; }, easeInElastic: function (x, t, b, c, d) {var s=1.70158;var p=0;var a=c; if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3; if (a < Math.abs(c)) { a=c; var s=p/4; } else var s = p/(2*Math.PI) * Math.asin (c/a); return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b; }, easeOutElastic: function (x, t, b, c, d) {var s=1.70158;var p=0;var a=c; if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3; if (a < Math.abs(c)) { a=c; var s=p/4; } else var s = p/(2*Math.PI) * Math.asin (c/a); return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b; }, easeInOutElastic: function (x, t, b, c, d) {var s=1.70158;var p=0;var a=c; if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5); if (a < Math.abs(c)) { a=c; var s=p/4; } else var s = p/(2*Math.PI) * Math.asin (c/a); if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b; return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b; }, easeInBack: function (x, t, b, c, d, s) {if (s == undefined) s = 1.70158; return c*(t/=d)*t*((s+1)*t - s) + b; }, easeOutBack: function (x, t, b, c, d, s) {if (s == undefined) s = 1.70158; return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b; }, easeInOutBack: function (x, t, b, c, d, s) {if (s == undefined) s = 1.70158; if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b; return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b; }, easeInBounce: function (x, t, b, c, d) {return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b; }, easeOutBounce: function (x, t, b, c, d) {if ((t/=d) < (1/2.75)) {return c*(7.5625*t*t) + b; } else if (t < (2/2.75)) {return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b; } else if (t < (2.5/2.75)) {return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b; } else {return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b; } }, easeInOutBounce: function (x, t, b, c, d) {if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b; return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b; } });

/* 7. jquery.cookie.js
-----------------------------------------------------------------------------------------------*/
(function (factory) {if (typeof define === 'function' && define.amd) {define(['jquery'], factory); } else {factory(jQuery); } }(function ($) {var pluses = /\+/g; function raw(s) {return s; } function decoded(s) {return decodeURIComponent(s.replace(pluses, ' ')); } function converted(s) {if (s.indexOf('"') === 0) {s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\'); } try {return config.json ? JSON.parse(s) : s; } catch(er) {} } var config = $.cookie = function (key, value, options) {if (value !== undefined) {options = $.extend({}, config.defaults, options); if (typeof options.expires === 'number') {var days = options.expires, t = options.expires = new Date(); t.setDate(t.getDate() + days); } value = config.json ? JSON.stringify(value) : String(value); return (document.cookie = [config.raw ? key : encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path    ? '; path=' + options.path : '', options.domain  ? '; domain=' + options.domain : '', options.secure  ? '; secure' : ''].join('')); } var decode = config.raw ? raw : decoded; var cookies = document.cookie.split('; '); var result = key ? undefined : {}; for (var i = 0, l = cookies.length; i < l; i++) {var parts = cookies[i].split('='); var name = decode(parts.shift()); var cookie = decode(parts.join('=')); if (key && key === name) {result = converted(cookie); break; } if (!key) {result[name] = converted(cookie); } } return result; }; config.defaults = {}; $.removeCookie = function (key, options) {if ($.cookie(key) !== undefined) {$.cookie(key, '', $.extend({}, options, { expires: -1 })); return true; } return false; }; }));

/* 8. diagram.raphael.js
-----------------------------------------------------------------------------------------------*/
(function(){function a(){if(a.is(arguments[0],G)){var b=arguments[0],d=bV[m](a,b.splice(0,3+a.is(b[0],E))),e=d.set();for(var g=0,h=b[w];g<h;g++){var i=b[g]||{};c[f](i.type)&&e[L](d[i.type]().attr(i))}return e}return bV[m](a,arguments)}a.version="1.5.2";var b=/[, ]+/,c={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},d=/\{(\d+)\}/g,e="prototype",f="hasOwnProperty",g=document,h=window,i={was:Object[e][f].call(h,"Raphael"),is:h.Raphael},j=function(){this.customAttributes={}},k,l="appendChild",m="apply",n="concat",o="createTouch"in g,p="",q=" ",r=String,s="split",t="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend orientationchange touchcancel gesturestart gesturechange gestureend"[s](q),u={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},v="join",w="length",x=r[e].toLowerCase,y=Math,z=y.max,A=y.min,B=y.abs,C=y.pow,D=y.PI,E="number",F="string",G="array",H="toString",I="fill",J=Object[e][H],K={},L="push",M=/^url\(['"]?([^\)]+?)['"]?\)$/i,N=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,O={"NaN":1,Infinity:1,"-Infinity":1},P=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,Q=y.round,R="setAttribute",S=parseFloat,T=parseInt,U=" progid:DXImageTransform.Microsoft",V=r[e].toUpperCase,W={blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:"10px \"Arial\"","font-family":"\"Arial\"","font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/",opacity:1,path:"M0,0",r:0,rotation:0,rx:0,ry:0,scale:"1 1",src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",translation:"0 0",width:0,x:0,y:0},X={along:"along",blur:E,"clip-rect":"csv",cx:E,cy:E,fill:"colour","fill-opacity":E,"font-size":E,height:E,opacity:E,path:"path",r:E,rotation:"csv",rx:E,ry:E,scale:"csv",stroke:"colour","stroke-opacity":E,"stroke-width":E,translation:"csv",width:E,x:E,y:E},Y="replace",Z=/^(from|to|\d+%?)$/,$=/\s*,\s*/,_={hs:1,rg:1},ba=/,?([achlmqrstvxz]),?/gi,bb=/([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig,bc=/(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig,bd=/^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,be=function(a,b){return a.key-b.key};a.type=h.SVGAngle||g.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML";if(a.type=="VML"){var bf=g.createElement("div"),bg;bf.innerHTML="<v:shape adj=\"1\"/>";bg=bf.firstChild;bg.style.behavior="url(#default#VML)";if(!(bg&&typeof bg.adj=="object"))return a.type=null;bf=null}a.svg=!(a.vml=a.type=="VML");j[e]=a[e];k=j[e];a._id=0;a._oid=0;a.fn={};a.is=function(a,b){b=x.call(b);if(b=="finite")return!O[f](+a);return b=="null"&&a===null||b==typeof a||b=="object"&&a===Object(a)||b=="array"&&Array.isArray&&Array.isArray(a)||J.call(a).slice(8,-1).toLowerCase()==b};a.angle=function(b,c,d,e,f,g){{if(f==null){var h=b-d,i=c-e;if(!h&&!i)return 0;return((h<0)*180+y.atan(-i/-h)*180/D+360)%360}return a.angle(b,c,f,g)-a.angle(d,e,f,g)}};a.rad=function(a){return a%360*D/180};a.deg=function(a){return a*180/D%360};a.snapTo=function(b,c,d){d=a.is(d,"finite")?d:10;if(a.is(b,G)){var e=b.length;while(e--)if(B(b[e]-c)<=d)return b[e]}else{b=+b;var f=c%b;if(f<d)return c-f;if(f>b-d)return c-f+b}return c};function bh(){var a=[],b=0;for(;b<32;b++)a[b]=(~(~(y.random()*16)))[H](16);a[12]=4;a[16]=(a[16]&3|8)[H](16);return"r-"+a[v]("")}a.setWindow=function(a){h=a;g=h.document};var bi=function(b){if(a.vml){var c=/^\s+|\s+$/g,d;try{var e=new ActiveXObject("htmlfile");e.write("<body>");e.close();d=e.body}catch(a){d=createPopup().document.body}var f=d.createTextRange();bi=bm(function(a){try{d.style.color=r(a)[Y](c,p);var b=f.queryCommandValue("ForeColor");b=(b&255)<<16|b&65280|(b&16711680)>>>16;return"#"+("000000"+b[H](16)).slice(-6)}catch(a){return"none"}})}else{var h=g.createElement("i");h.title="RaphaГ«l Colour Picker";h.style.display="none";g.body[l](h);bi=bm(function(a){h.style.color=a;return g.defaultView.getComputedStyle(h,p).getPropertyValue("color")})}return bi(b)},bj=function(){return"hsb("+[this.h,this.s,this.b]+")"},bk=function(){return"hsl("+[this.h,this.s,this.l]+")"},bl=function(){return this.hex};a.hsb2rgb=function(b,c,d,e){if(a.is(b,"object")&&"h"in b&&"s"in b&&"b"in b){d=b.b;c=b.s;b=b.h;e=b.o}return a.hsl2rgb(b,c,d/2,e)};a.hsl2rgb=function(b,c,d,e){if(a.is(b,"object")&&"h"in b&&"s"in b&&"l"in b){d=b.l;c=b.s;b=b.h}if(b>1||c>1||d>1){b/=360;c/=100;d/=100}var f={},g=["r","g","b"],h,i,j,k,l,m;if(c){d<0.5?h=d*(1+c):h=d+c-d*c;i=2*d-h;for(var n=0;n<3;n++){j=b+1/3*-(n-1);j<0&&j++;j>1&&j--;j*6<1?f[g[n]]=i+(h-i)*6*j:j*2<1?f[g[n]]=h:j*3<2?f[g[n]]=i+(h-i)*(2/3-j)*6:f[g[n]]=i}}else f={r:d,g:d,b:d};f.r*=255;f.g*=255;f.b*=255;f.hex="#"+(16777216|f.b|f.g<<8|f.r<<16).toString(16).slice(1);a.is(e,"finite")&&(f.opacity=e);f.toString=bl;return f};a.rgb2hsb=function(b,c,d){if(c==null&&a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b){d=b.b;c=b.g;b=b.r}if(c==null&&a.is(b,F)){var e=a.getRGB(b);b=e.r;c=e.g;d=e.b}if(b>1||c>1||d>1){b/=255;c/=255;d/=255}var f=z(b,c,d),g=A(b,c,d),h,i,j=f;{if(g==f)return{h:0,s:0,b:f,toString:bj};var k=f-g;i=k/f;b==f?h=(c-d)/k:c==f?h=2+(d-b)/k:h=4+(b-c)/k;h/=6;h<0&&h++;h>1&&h--}return{h:h,s:i,b:j,toString:bj}};a.rgb2hsl=function(b,c,d){if(c==null&&a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b){d=b.b;c=b.g;b=b.r}if(c==null&&a.is(b,F)){var e=a.getRGB(b);b=e.r;c=e.g;d=e.b}if(b>1||c>1||d>1){b/=255;c/=255;d/=255}var f=z(b,c,d),g=A(b,c,d),h,i,j=(f+g)/2,k;if(g==f)k={h:0,s:0,l:j};else{var l=f-g;i=j<0.5?l/(f+g):l/(2-f-g);b==f?h=(c-d)/l:c==f?h=2+(d-b)/l:h=4+(b-c)/l;h/=6;h<0&&h++;h>1&&h--;k={h:h,s:i,l:j}}k.toString=bk;return k};a._path2string=function(){return this.join(",")[Y](ba,"$1")};function bm(a,b,c){function d(){var g=Array[e].slice.call(arguments,0),h=g[v]("в–є"),i=d.cache=d.cache||{},j=d.count=d.count||[];if(i[f](h))return c?c(i[h]):i[h];j[w]>=1000&&delete i[j.shift()];j[L](h);i[h]=a[m](b,g);return c?c(i[h]):i[h]}return d}a.getRGB=bm(function(b){if(!b||!(!((b=r(b)).indexOf("-")+1)))return{r:-1,g:-1,b:-1,hex:"none",error:1};if(b=="none")return{r:-1,g:-1,b:-1,hex:"none"};!(_[f](b.toLowerCase().substring(0,2))||b.charAt()=="#")&&(b=bi(b));var c,d,e,g,h,i,j,k=b.match(N);if(k){if(k[2]){g=T(k[2].substring(5),16);e=T(k[2].substring(3,5),16);d=T(k[2].substring(1,3),16)}if(k[3]){g=T((i=k[3].charAt(3))+i,16);e=T((i=k[3].charAt(2))+i,16);d=T((i=k[3].charAt(1))+i,16)}if(k[4]){j=k[4][s]($);d=S(j[0]);j[0].slice(-1)=="%"&&(d*=2.55);e=S(j[1]);j[1].slice(-1)=="%"&&(e*=2.55);g=S(j[2]);j[2].slice(-1)=="%"&&(g*=2.55);k[1].toLowerCase().slice(0,4)=="rgba"&&(h=S(j[3]));j[3]&&j[3].slice(-1)=="%"&&(h/=100)}if(k[5]){j=k[5][s]($);d=S(j[0]);j[0].slice(-1)=="%"&&(d*=2.55);e=S(j[1]);j[1].slice(-1)=="%"&&(e*=2.55);g=S(j[2]);j[2].slice(-1)=="%"&&(g*=2.55);(j[0].slice(-3)=="deg"||j[0].slice(-1)=="В°")&&(d/=360);k[1].toLowerCase().slice(0,4)=="hsba"&&(h=S(j[3]));j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsb2rgb(d,e,g,h)}if(k[6]){j=k[6][s]($);d=S(j[0]);j[0].slice(-1)=="%"&&(d*=2.55);e=S(j[1]);j[1].slice(-1)=="%"&&(e*=2.55);g=S(j[2]);j[2].slice(-1)=="%"&&(g*=2.55);(j[0].slice(-3)=="deg"||j[0].slice(-1)=="В°")&&(d/=360);k[1].toLowerCase().slice(0,4)=="hsla"&&(h=S(j[3]));j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsl2rgb(d,e,g,h)}k={r:d,g:e,b:g};k.hex="#"+(16777216|g|e<<8|d<<16).toString(16).slice(1);a.is(h,"finite")&&(k.opacity=h);return k}return{r:-1,g:-1,b:-1,hex:"none",error:1}},a);a.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||0.75},c=this.hsb2rgb(b.h,b.s,b.b);b.h+=0.075;if(b.h>1){b.h=0;b.s-=0.2;b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})}return c.hex};a.getColor.reset=function(){delete this.start};a.parsePathString=bm(function(b){if(!b)return null;var c={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},d=[];a.is(b,G)&&a.is(b[0],G)&&(d=bo(b));d[w]||r(b)[Y](bb,function(a,b,e){var f=[],g=x.call(b);e[Y](bc,function(a,b){b&&f[L](+b)});if(g=="m"&&f[w]>2){d[L]([b][n](f.splice(0,2)));g="l";b=b=="m"?"l":"L"}while(f[w]>=c[g]){d[L]([b][n](f.splice(0,c[g])));if(!c[g])break}});d[H]=a._path2string;return d});a.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=C(j,3)*a+C(j,2)*3*i*c+j*3*i*i*e+C(i,3)*g,l=C(j,3)*b+C(j,2)*3*i*d+j*3*i*i*f+C(i,3)*h,m=a+2*i*(c-a)+i*i*(e-2*c+a),n=b+2*i*(d-b)+i*i*(f-2*d+b),o=c+2*i*(e-c)+i*i*(g-2*e+c),p=d+2*i*(f-d)+i*i*(h-2*f+d),q=(1-i)*a+i*c,r=(1-i)*b+i*d,s=(1-i)*e+i*g,t=(1-i)*f+i*h,u=90-y.atan((m-o)/(n-p))*180/D;(m>o||n<p)&&(u+=180);return{x:k,y:l,m:{x:m,y:n},n:{x:o,y:p},start:{x:q,y:r},end:{x:s,y:t},alpha:u}};var bn=bm(function(a){if(!a)return{x:0,y:0,width:0,height:0};a=bw(a);var b=0,c=0,d=[],e=[],f;for(var g=0,h=a[w];g<h;g++){f=a[g];if(f[0]=="M"){b=f[1];c=f[2];d[L](b);e[L](c)}else{var i=bv(b,c,f[1],f[2],f[3],f[4],f[5],f[6]);d=d[n](i.min.x,i.max.x);e=e[n](i.min.y,i.max.y);b=f[5];c=f[6]}}var j=A[m](0,d),k=A[m](0,e);return{x:j,y:k,width:z[m](0,d)-j,height:z[m](0,e)-k}}),bo=function(b){var c=[];if(!a.is(b,G)||!a.is(b&&b[0],G))b=a.parsePathString(b);for(var d=0,e=b[w];d<e;d++){c[d]=[];for(var f=0,g=b[d][w];f<g;f++)c[d][f]=b[d][f]}c[H]=a._path2string;return c},bp=bm(function(b){if(!a.is(b,G)||!a.is(b&&b[0],G))b=a.parsePathString(b);var c=[],d=0,e=0,f=0,g=0,h=0;if(b[0][0]=="M"){d=b[0][1];e=b[0][2];f=d;g=e;h++;c[L](["M",d,e])}for(var i=h,j=b[w];i<j;i++){var k=c[i]=[],l=b[i];if(l[0]!=x.call(l[0])){k[0]=x.call(l[0]);switch(k[0]){case"a":k[1]=l[1];k[2]=l[2];k[3]=l[3];k[4]=l[4];k[5]=l[5];k[6]=+(l[6]-d).toFixed(3);k[7]=+(l[7]-e).toFixed(3);break;case"v":k[1]=+(l[1]-e).toFixed(3);break;case"m":f=l[1];g=l[2];default:for(var m=1,n=l[w];m<n;m++)k[m]=+(l[m]-(m%2?d:e)).toFixed(3)}}else{k=c[i]=[];if(l[0]=="m"){f=l[1]+d;g=l[2]+e}for(var o=0,p=l[w];o<p;o++)c[i][o]=l[o]}var q=c[i][w];switch(c[i][0]){case"z":d=f;e=g;break;case"h":d+=+c[i][q-1];break;case"v":e+=+c[i][q-1];break;default:d+=+c[i][q-2];e+=+c[i][q-1]}}c[H]=a._path2string;return c},0,bo),bq=bm(function(b){if(!a.is(b,G)||!a.is(b&&b[0],G))b=a.parsePathString(b);var c=[],d=0,e=0,f=0,g=0,h=0;if(b[0][0]=="M"){d=+b[0][1];e=+b[0][2];f=d;g=e;h++;c[0]=["M",d,e]}for(var i=h,j=b[w];i<j;i++){var k=c[i]=[],l=b[i];if(l[0]!=V.call(l[0])){k[0]=V.call(l[0]);switch(k[0]){case"A":k[1]=l[1];k[2]=l[2];k[3]=l[3];k[4]=l[4];k[5]=l[5];k[6]=+(l[6]+d);k[7]=+(l[7]+e);break;case"V":k[1]=+l[1]+e;break;case"H":k[1]=+l[1]+d;break;case"M":f=+l[1]+d;g=+l[2]+e;default:for(var m=1,n=l[w];m<n;m++)k[m]=+l[m]+(m%2?d:e)}}else for(var o=0,p=l[w];o<p;o++)c[i][o]=l[o];switch(k[0]){case"Z":d=f;e=g;break;case"H":d=k[1];break;case"V":e=k[1];break;case"M":f=c[i][c[i][w]-2];g=c[i][c[i][w]-1];default:d=c[i][c[i][w]-2];e=c[i][c[i][w]-1]}}c[H]=a._path2string;return c},null,bo),br=function(a,b,c,d){return[a,b,c,d,c,d]},bs=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},bt=function(a,b,c,d,e,f,g,h,i,j){var k=D*120/180,l=D/180*(+e||0),m=[],o,p=bm(function(a,b,c){var d=a*y.cos(c)-b*y.sin(c),e=a*y.sin(c)+b*y.cos(c);return{x:d,y:e}});if(j){G=j[0];H=j[1];E=j[2];F=j[3]}else{o=p(a,b,-l);a=o.x;b=o.y;o=p(h,i,-l);h=o.x;i=o.y;var q=y.cos(D/180*e),r=y.sin(D/180*e),t=(a-h)/2,u=(b-i)/2,x=t*t/(c*c)+u*u/(d*d);if(x>1){x=y.sqrt(x);c=x*c;d=x*d}var z=c*c,A=d*d,C=(f==g?-1:1)*y.sqrt(B((z*A-z*u*u-A*t*t)/(z*u*u+A*t*t))),E=C*c*u/d+(a+h)/2,F=C*-d*t/c+(b+i)/2,G=y.asin(((b-F)/d).toFixed(9)),H=y.asin(((i-F)/d).toFixed(9));G=a<E?D-G:G;H=h<E?D-H:H;G<0&&(G=D*2+G);H<0&&(H=D*2+H);g&&G>H&&(G=G-D*2);!g&&H>G&&(H=H-D*2)}var I=H-G;if(B(I)>k){var J=H,K=h,L=i;H=G+k*(g&&H>G?1:-1);h=E+c*y.cos(H);i=F+d*y.sin(H);m=bt(h,i,c,d,e,0,g,K,L,[H,J,E,F])}I=H-G;var M=y.cos(G),N=y.sin(G),O=y.cos(H),P=y.sin(H),Q=y.tan(I/4),R=4/3*c*Q,S=4/3*d*Q,T=[a,b],U=[a+R*N,b-S*M],V=[h+R*P,i-S*O],W=[h,i];U[0]=2*T[0]-U[0];U[1]=2*T[1]-U[1];{if(j)return[U,V,W][n](m);m=[U,V,W][n](m)[v]()[s](",");var X=[];for(var Y=0,Z=m[w];Y<Z;Y++)X[Y]=Y%2?p(m[Y-1],m[Y],l).y:p(m[Y],m[Y+1],l).x;return X}},bu=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:C(j,3)*a+C(j,2)*3*i*c+j*3*i*i*e+C(i,3)*g,y:C(j,3)*b+C(j,2)*3*i*d+j*3*i*i*f+C(i,3)*h}},bv=bm(function(a,b,c,d,e,f,g,h){var i=e-2*c+a-(g-2*e+c),j=2*(c-a)-2*(e-c),k=a-c,l=(-j+y.sqrt(j*j-4*i*k))/2/i,n=(-j-y.sqrt(j*j-4*i*k))/2/i,o=[b,h],p=[a,g],q;B(l)>"1e12"&&(l=0.5);B(n)>"1e12"&&(n=0.5);if(l>0&&l<1){q=bu(a,b,c,d,e,f,g,h,l);p[L](q.x);o[L](q.y)}if(n>0&&n<1){q=bu(a,b,c,d,e,f,g,h,n);p[L](q.x);o[L](q.y)}i=f-2*d+b-(h-2*f+d);j=2*(d-b)-2*(f-d);k=b-d;l=(-j+y.sqrt(j*j-4*i*k))/2/i;n=(-j-y.sqrt(j*j-4*i*k))/2/i;B(l)>"1e12"&&(l=0.5);B(n)>"1e12"&&(n=0.5);if(l>0&&l<1){q=bu(a,b,c,d,e,f,g,h,l);p[L](q.x);o[L](q.y)}if(n>0&&n<1){q=bu(a,b,c,d,e,f,g,h,n);p[L](q.x);o[L](q.y)}return{min:{x:A[m](0,p),y:A[m](0,o)},max:{x:z[m](0,p),y:z[m](0,o)}}}),bw=bm(function(a,b){var c=bq(a),d=b&&bq(b),e={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g=function(a,b){var c,d;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null);switch(a[0]){case"M":b.X=a[1];b.Y=a[2];break;case"A":a=["C"][n](bt[m](0,[b.x,b.y][n](a.slice(1))));break;case"S":c=b.x+(b.x-(b.bx||b.x));d=b.y+(b.y-(b.by||b.y));a=["C",c,d][n](a.slice(1));break;case"T":b.qx=b.x+(b.x-(b.qx||b.x));b.qy=b.y+(b.y-(b.qy||b.y));a=["C"][n](bs(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1];b.qy=a[2];a=["C"][n](bs(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][n](br(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][n](br(b.x,b.y,a[1],b.y));break;case"V":a=["C"][n](br(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][n](br(b.x,b.y,b.X,b.Y));break}return a},h=function(a,b){if(a[b][w]>7){a[b].shift();var e=a[b];while(e[w])a.splice(b++,0,["C"][n](e.splice(0,6)));a.splice(b,1);k=z(c[w],d&&d[w]||0)}},i=function(a,b,e,f,g){if(a&&b&&a[g][0]=="M"&&b[g][0]!="M"){b.splice(g,0,["M",f.x,f.y]);e.bx=0;e.by=0;e.x=a[g][1];e.y=a[g][2];k=z(c[w],d&&d[w]||0)}};for(var j=0,k=z(c[w],d&&d[w]||0);j<k;j++){c[j]=g(c[j],e);h(c,j);d&&(d[j]=g(d[j],f));d&&h(d,j);i(c,d,e,f,j);i(d,c,f,e,j);var l=c[j],o=d&&d[j],p=l[w],q=d&&o[w];e.x=l[p-2];e.y=l[p-1];e.bx=S(l[p-4])||e.x;e.by=S(l[p-3])||e.y;f.bx=d&&(S(o[q-4])||f.x);f.by=d&&(S(o[q-3])||f.y);f.x=d&&o[q-2];f.y=d&&o[q-1]}return d?[c,d]:c},null,bo),bx=bm(function(b){var c=[];for(var d=0,e=b[w];d<e;d++){var f={},g=b[d].match(/^([^:]*):?([\d\.]*)/);f.color=a.getRGB(g[1]);if(f.color.error)return null;f.color=f.color.hex;g[2]&&(f.offset=g[2]+"%");c[L](f)}for(d=1,e=c[w]-1;d<e;d++){if(!c[d].offset){var h=S(c[d-1].offset||0),i=0;for(var j=d+1;j<e;j++){if(c[j].offset){i=c[j].offset;break}}if(!i){i=100;j=e}i=S(i);var k=(i-h)/(j-d+1);for(;d<j;d++){h+=k;c[d].offset=h+"%"}}}return c}),by=function(b,c,d,e){var f;if(a.is(b,F)||a.is(b,"object")){f=a.is(b,F)?g.getElementById(b):b;if(f.tagName)return c==null?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d}}else return{container:1,x:b,y:c,width:d,height:e}},bz=function(a,b){var c=this;for(var d in b){if(b[f](d)&&!(d in a))switch(typeof b[d]){case"function":(function(b){a[d]=a===c?b:function(){return b[m](c,arguments)}})(b[d]);break;case"object":a[d]=a[d]||{};bz.call(this,a[d],b[d]);break;default:a[d]=b[d];break}}},bA=function(a,b){a==b.top&&(b.top=a.prev);a==b.bottom&&(b.bottom=a.next);a.next&&(a.next.prev=a.prev);a.prev&&(a.prev.next=a.next)},bB=function(a,b){if(b.top===a)return;bA(a,b);a.next=null;a.prev=b.top;b.top.next=a;b.top=a},bC=function(a,b){if(b.bottom===a)return;bA(a,b);a.next=b.bottom;a.prev=null;b.bottom.prev=a;b.bottom=a},bD=function(a,b,c){bA(a,c);b==c.top&&(c.top=a);b.next&&(b.next.prev=a);a.next=b.next;a.prev=b;b.next=a},bE=function(a,b,c){bA(a,c);b==c.bottom&&(c.bottom=a);b.prev&&(b.prev.next=a);a.prev=b.prev;b.prev=a;a.next=b},bF=function(a){return function(){throw new Error("RaphaГ«l: you are calling to method "+a+" of removed object")}};a.pathToRelative=bp;if(a.svg){k.svgns="http://www.w3.org/2000/svg";k.xlink="http://www.w3.org/1999/xlink";Q=function(a){return+a+(~(~a)===a)*0.5};var bG=function(a,b){if(b)for(var c in b)b[f](c)&&a[R](c,r(b[c]));else{a=g.createElementNS(k.svgns,a);a.style.webkitTapHighlightColor="rgba(0,0,0,0)";return a}};a[H]=function(){return"Your browser supports SVG.\nYou are running RaphaГ«l "+this.version};var bH=function(a,b){var c=bG("path");b.canvas&&b.canvas[l](c);var d=new bN(c,b);d.type="path";bK(d,{fill:"none",stroke:"#000",path:a});return d},bI=function(a,b,c){var d="linear",e=0.5,f=0.5,h=a.style;b=r(b)[Y](bd,function(a,b,c){d="radial";if(b&&c){e=S(b);f=S(c);var g=(f>0.5)*2-1;C(e-0.5,2)+C(f-0.5,2)>0.25&&(f=y.sqrt(0.25-C(e-0.5,2))*g+0.5)&&f!=0.5&&(f=f.toFixed(5)-0.00001*g)}return p});b=b[s](/\s*\-\s*/);if(d=="linear"){var i=b.shift();i=-S(i);if(isNaN(i))return null;var j=[0,0,y.cos(i*D/180),y.sin(i*D/180)],k=1/(z(B(j[2]),B(j[3]))||1);j[2]*=k;j[3]*=k;if(j[2]<0){j[0]=-j[2];j[2]=0}if(j[3]<0){j[1]=-j[3];j[3]=0}}var m=bx(b);if(!m)return null;var n=a.getAttribute(I);n=n.match(/^url\(#(.*)\)$/);n&&c.defs.removeChild(g.getElementById(n[1]));var o=bG(d+"Gradient");o.id=bh();bG(o,d=="radial"?{fx:e,fy:f}:{x1:j[0],y1:j[1],x2:j[2],y2:j[3]});c.defs[l](o);for(var q=0,t=m[w];q<t;q++){var u=bG("stop");bG(u,{offset:m[q].offset?m[q].offset:q?"100%":"0%","stop-color":m[q].color||"#fff"});o[l](u)}bG(a,{fill:"url(#"+o.id+")",opacity:1,"fill-opacity":1});h.fill=p;h.opacity=1;h.fillOpacity=1;return 1},bJ=function(b){var c=b.getBBox();bG(b.pattern,{patternTransform:a.format("translate({0},{1})",c.x,c.y)})},bK=function(c,d){var e={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},h=c.node,i=c.attrs,j=c.rotate(),k=function(a,b){b=e[x.call(b)];if(b){var c=a.attrs["stroke-width"]||"1",f=({round:c,square:c,butt:0})[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],i=b[w];while(i--)g[i]=b[i]*c+(i%2?1:-1)*f;bG(h,{"stroke-dasharray":g[v](",")})}};d[f]("rotation")&&(j=d.rotation);var m=r(j)[s](b);if(m.length-1){m[1]=+m[1];m[2]=+m[2]}else m=null;S(j)&&c.rotate(0,true);for(var n in d){if(d[f](n)){if(!W[f](n))continue;var o=d[n];i[n]=o;switch(n){case"blur":c.blur(o);break;case"rotation":c.rotate(o,true);break;case"href":case"title":case"target":var t=h.parentNode;if(x.call(t.tagName)!="a"){var u=bG("a");t.insertBefore(u,h);u[l](h);t=u}n=="target"&&o=="blank"?t.setAttributeNS(c.paper.xlink,"show","new"):t.setAttributeNS(c.paper.xlink,n,o);break;case"cursor":h.style.cursor=o;break;case"clip-rect":var y=r(o)[s](b);if(y[w]==4){c.clip&&c.clip.parentNode.parentNode.removeChild(c.clip.parentNode);var z=bG("clipPath"),A=bG("rect");z.id=bh();bG(A,{x:y[0],y:y[1],width:y[2],height:y[3]});z[l](A);c.paper.defs[l](z);bG(h,{"clip-path":"url(#"+z.id+")"});c.clip=A}if(!o){var B=g.getElementById(h.getAttribute("clip-path")[Y](/(^url\(#|\)$)/g,p));B&&B.parentNode.removeChild(B);bG(h,{"clip-path":p});delete c.clip}break;case"path":c.type=="path"&&bG(h,{d:o?i.path=bq(o):"M0,0"});break;case"width":h[R](n,o);if(i.fx){n="x";o=i.x}else break;case"x":i.fx&&(o=-i.x-(i.width||0));case"rx":if(n=="rx"&&c.type=="rect")break;case"cx":m&&(n=="x"||n=="cx")&&(m[1]+=o-i[n]);h[R](n,o);c.pattern&&bJ(c);break;case"height":h[R](n,o);if(i.fy){n="y";o=i.y}else break;case"y":i.fy&&(o=-i.y-(i.height||0));case"ry":if(n=="ry"&&c.type=="rect")break;case"cy":m&&(n=="y"||n=="cy")&&(m[2]+=o-i[n]);h[R](n,o);c.pattern&&bJ(c);break;case"r":c.type=="rect"?bG(h,{rx:o,ry:o}):h[R](n,o);break;case"src":c.type=="image"&&h.setAttributeNS(c.paper.xlink,"href",o);break;case"stroke-width":h.style.strokeWidth=o;h[R](n,o);i["stroke-dasharray"]&&k(c,i["stroke-dasharray"]);break;case"stroke-dasharray":k(c,o);break;case"translation":var C=r(o)[s](b);C[0]=+C[0]||0;C[1]=+C[1]||0;if(m){m[1]+=C[0];m[2]+=C[1]}cz.call(c,C[0],C[1]);break;case"scale":C=r(o)[s](b);c.scale(+C[0]||1,+C[1]||+C[0]||1,isNaN(S(C[2]))?null:+C[2],isNaN(S(C[3]))?null:+C[3]);break;case I:var D=r(o).match(M);if(D){z=bG("pattern");var E=bG("image");z.id=bh();bG(z,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1});bG(E,{x:0,y:0});E.setAttributeNS(c.paper.xlink,"href",D[1]);z[l](E);var F=g.createElement("img");F.style.cssText="position:absolute;left:-9999em;top-9999em";F.onload=function(){bG(z,{width:this.offsetWidth,height:this.offsetHeight});bG(E,{width:this.offsetWidth,height:this.offsetHeight});g.body.removeChild(this);c.paper.safari()};g.body[l](F);F.src=D[1];c.paper.defs[l](z);h.style.fill="url(#"+z.id+")";bG(h,{fill:"url(#"+z.id+")"});c.pattern=z;c.pattern&&bJ(c);break}var G=a.getRGB(o);if(G.error)if((({circle:1,ellipse:1})[f](c.type)||r(o).charAt()!="r")&&bI(h,o,c.paper)){i.gradient=o;i.fill="none";break}else{delete d.gradient;delete i.gradient;!a.is(i.opacity,"undefined")&&a.is(d.opacity,"undefined")&&bG(h,{opacity:i.opacity});!a.is(i["fill-opacity"],"undefined")&&a.is(d["fill-opacity"],"undefined")&&bG(h,{"fill-opacity":i["fill-opacity"]})}G[f]("opacity")&&bG(h,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=a.getRGB(o);h[R](n,G.hex);n=="stroke"&&G[f]("opacity")&&bG(h,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity});break;case"gradient":(({circle:1,ellipse:1})[f](c.type)||r(o).charAt()!="r")&&bI(h,o,c.paper);break;case"opacity":i.gradient&&!i[f]("stroke-opacity")&&bG(h,{"stroke-opacity":o>1?o/100:o});case"fill-opacity":if(i.gradient){var H=g.getElementById(h.getAttribute(I)[Y](/^url\(#|\)$/g,p));if(H){var J=H.getElementsByTagName("stop");J[J[w]-1][R]("stop-opacity",o)}break}default:n=="font-size"&&(o=T(o,10)+"px");var K=n[Y](/(\-.)/g,function(a){return V.call(a.substring(1))});h.style[K]=o;h[R](n,o);break}}}bM(c,d);m?c.rotate(m.join(q)):S(j)&&c.rotate(j,true)},bL=1.2,bM=function(b,c){if(b.type!="text"||!(c[f]("text")||c[f]("font")||c[f]("font-size")||c[f]("x")||c[f]("y")))return;var d=b.attrs,e=b.node,h=e.firstChild?T(g.defaultView.getComputedStyle(e.firstChild,p).getPropertyValue("font-size"),10):10;if(c[f]("text")){d.text=c.text;while(e.firstChild)e.removeChild(e.firstChild);var i=r(c.text)[s]("\n");for(var j=0,k=i[w];j<k;j++)if(i[j]){var m=bG("tspan");j&&bG(m,{dy:h*bL,x:d.x});m[l](g.createTextNode(i[j]));e[l](m)}}else{i=e.getElementsByTagName("tspan");for(j=0,k=i[w];j<k;j++)j&&bG(i[j],{dy:h*bL,x:d.x})}bG(e,{y:d.y});var n=b.getBBox(),o=d.y-(n.y+n.height/2);o&&a.is(o,"finite")&&bG(e,{y:d.y+o})},bN=function(b,c){var d=0,e=0;this[0]=b;this.id=a._oid++;this.node=b;b.raphael=this;this.paper=c;this.attrs=this.attrs||{};this.transformations=[];this._={tx:0,ty:0,rt:{deg:0,cx:0,cy:0},sx:1,sy:1};!c.bottom&&(c.bottom=this);this.prev=c.top;c.top&&(c.top.next=this);c.top=this;this.next=null},bO=bN[e];bN[e].rotate=function(c,d,e){if(this.removed)return this;if(c==null){if(this._.rt.cx)return[this._.rt.deg,this._.rt.cx,this._.rt.cy][v](q);return this._.rt.deg}var f=this.getBBox();c=r(c)[s](b);if(c[w]-1){d=S(c[1]);e=S(c[2])}c=S(c[0]);d!=null&&d!==false?this._.rt.deg=c:this._.rt.deg+=c;e==null&&(d=null);this._.rt.cx=d;this._.rt.cy=e;d=d==null?f.x+f.width/2:d;e=e==null?f.y+f.height/2:e;if(this._.rt.deg){this.transformations[0]=a.format("rotate({0} {1} {2})",this._.rt.deg,d,e);this.clip&&bG(this.clip,{transform:a.format("rotate({0} {1} {2})",-this._.rt.deg,d,e)})}else{this.transformations[0]=p;this.clip&&bG(this.clip,{transform:p})}bG(this.node,{transform:this.transformations[v](q)});return this};bN[e].hide=function(){!this.removed&&(this.node.style.display="none");return this};bN[e].show=function(){!this.removed&&(this.node.style.display="");return this};bN[e].remove=function(){if(this.removed)return;bA(this,this.paper);this.node.parentNode.removeChild(this.node);for(var a in this)delete this[a];this.removed=true};bN[e].getBBox=function(){if(this.removed)return this;if(this.type=="path")return bn(this.attrs.path);if(this.node.style.display=="none"){this.show();var a=true}var b={};try{b=this.node.getBBox()}catch(a){}finally{b=b||{}}if(this.type=="text"){b={x:b.x,y:Infinity,width:0,height:0};for(var c=0,d=this.node.getNumberOfChars();c<d;c++){var e=this.node.getExtentOfChar(c);e.y<b.y&&(b.y=e.y);e.y+e.height-b.y>b.height&&(b.height=e.y+e.height-b.y);e.x+e.width-b.x>b.width&&(b.width=e.x+e.width-b.x)}}a&&this.hide();return b};bN[e].attr=function(b,c){if(this.removed)return this;if(b==null){var d={};for(var e in this.attrs)this.attrs[f](e)&&(d[e]=this.attrs[e]);this._.rt.deg&&(d.rotation=this.rotate());(this._.sx!=1||this._.sy!=1)&&(d.scale=this.scale());d.gradient&&d.fill=="none"&&(d.fill=d.gradient)&&delete d.gradient;return d}if(c==null&&a.is(b,F)){if(b=="translation")return cz.call(this);if(b=="rotation")return this.rotate();if(b=="scale")return this.scale();if(b==I&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;return this.attrs[b]}if(c==null&&a.is(b,G)){var g={};for(var h=0,i=b.length;h<i;h++)g[b[h]]=this.attr(b[h]);return g}if(c!=null){var j={};j[b]=c}else b!=null&&a.is(b,"object")&&(j=b);for(var k in this.paper.customAttributes)if(this.paper.customAttributes[f](k)&&j[f](k)&&a.is(this.paper.customAttributes[k],"function")){var l=this.paper.customAttributes[k].apply(this,[][n](j[k]));this.attrs[k]=j[k];for(var m in l)l[f](m)&&(j[m]=l[m])}bK(this,j);return this};bN[e].toFront=function(){if(this.removed)return this;this.node.parentNode[l](this.node);var a=this.paper;a.top!=this&&bB(this,a);return this};bN[e].toBack=function(){if(this.removed)return this;if(this.node.parentNode.firstChild!=this.node){this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild);bC(this,this.paper);var a=this.paper}return this};bN[e].insertAfter=function(a){if(this.removed)return this;var b=a.node||a[a.length-1].node;b.nextSibling?b.parentNode.insertBefore(this.node,b.nextSibling):b.parentNode[l](this.node);bD(this,a,this.paper);return this};bN[e].insertBefore=function(a){if(this.removed)return this;var b=a.node||a[0].node;b.parentNode.insertBefore(this.node,b);bE(this,a,this.paper);return this};bN[e].blur=function(a){var b=this;if(+a!==0){var c=bG("filter"),d=bG("feGaussianBlur");b.attrs.blur=a;c.id=bh();bG(d,{stdDeviation:+a||1.5});c.appendChild(d);b.paper.defs.appendChild(c);b._blur=c;bG(b.node,{filter:"url(#"+c.id+")"})}else{if(b._blur){b._blur.parentNode.removeChild(b._blur);delete b._blur;delete b.attrs.blur}b.node.removeAttribute("filter")}};var bP=function(a,b,c,d){var e=bG("circle");a.canvas&&a.canvas[l](e);var f=new bN(e,a);f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"};f.type="circle";bG(e,f.attrs);return f},bQ=function(a,b,c,d,e,f){var g=bG("rect");a.canvas&&a.canvas[l](g);var h=new bN(g,a);h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"};h.type="rect";bG(g,h.attrs);return h},bR=function(a,b,c,d,e){var f=bG("ellipse");a.canvas&&a.canvas[l](f);var g=new bN(f,a);g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"};g.type="ellipse";bG(f,g.attrs);return g},bS=function(a,b,c,d,e,f){var g=bG("image");bG(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"});g.setAttributeNS(a.xlink,"href",b);a.canvas&&a.canvas[l](g);var h=new bN(g,a);h.attrs={x:c,y:d,width:e,height:f,src:b};h.type="image";return h},bT=function(a,b,c,d){var e=bG("text");bG(e,{x:b,y:c,"text-anchor":"middle"});a.canvas&&a.canvas[l](e);var f=new bN(e,a);f.attrs={x:b,y:c,"text-anchor":"middle",text:d,font:W.font,stroke:"none",fill:"#000"};f.type="text";bK(f,f.attrs);return f},bU=function(a,b){this.width=a||this.width;this.height=b||this.height;this.canvas[R]("width",this.width);this.canvas[R]("height",this.height);return this},bV=function(){var b=by[m](0,arguments),c=b&&b.container,d=b.x,e=b.y,f=b.width,h=b.height;if(!c)throw new Error("SVG container not found.");var i=bG("svg");d=d||0;e=e||0;f=f||512;h=h||342;bG(i,{xmlns:"http://www.w3.org/2000/svg",version:1.1,width:f,height:h});if(c==1){i.style.cssText="position:absolute;left:"+d+"px;top:"+e+"px";g.body[l](i)}else c.firstChild?c.insertBefore(i,c.firstChild):c[l](i);c=new j;c.width=f;c.height=h;c.canvas=i;bz.call(c,c,a.fn);c.clear();return c};k.clear=function(){var a=this.canvas;while(a.firstChild)a.removeChild(a.firstChild);this.bottom=this.top=null;(this.desc=bG("desc"))[l](g.createTextNode("Created with RaphaГ«l"));a[l](this.desc);a[l](this.defs=bG("defs"))};k.remove=function(){this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]=bF(a)}}if(a.vml){var bW={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},bX=/([clmz]),?([^clmz]*)/gi,bY=/ progid:\S+Blur\([^\)]+\)/g,bZ=/-?[^,\s-]+/g,b$=1000+q+1000,b_=10,ca={path:1,rect:1},cb=function(a){var b=/[ahqstv]/ig,c=bq;r(a).match(b)&&(c=bw);b=/[clmz]/g;if(c==bq&&!r(a).match(b)){var d=r(a)[Y](bX,function(a,b,c){var d=[],e=x.call(b)=="m",f=bW[b];c[Y](bZ,function(a){if(e&&d[w]==2){f+=d+bW[b=="m"?"l":"L"];d=[]}d[L](Q(a*b_))});return f+d});return d}var e=c(a),f,g;d=[];for(var h=0,i=e[w];h<i;h++){f=e[h];g=x.call(e[h][0]);g=="z"&&(g="x");for(var j=1,k=f[w];j<k;j++)g+=Q(f[j]*b_)+(j!=k-1?",":p);d[L](g)}return d[v](q)};a[H]=function(){return"Your browser doesn't support SVG. Falling down to VML.\nYou are running RaphaГ«l "+this.version};bH=function(a,b){var c=cd("group");c.style.cssText="position:absolute;left:0;top:0;width:"+b.width+"px;height:"+b.height+"px";c.coordsize=b.coordsize;c.coordorigin=b.coordorigin;var d=cd("shape"),e=d.style;e.width=b.width+"px";e.height=b.height+"px";d.coordsize=b$;d.coordorigin=b.coordorigin;c[l](d);var f=new bN(d,c,b),g={fill:"none",stroke:"#000"};a&&(g.path=a);f.type="path";f.path=[];f.Path=p;bK(f,g);b.canvas[l](c);return f};bK=function(c,d){c.attrs=c.attrs||{};var e=c.node,h=c.attrs,i=e.style,j,k=(d.x!=h.x||d.y!=h.y||d.width!=h.width||d.height!=h.height||d.r!=h.r)&&c.type=="rect",m=c;for(var n in d)d[f](n)&&(h[n]=d[n]);if(k){h.path=cc(h.x,h.y,h.width,h.height,h.r);c.X=h.x;c.Y=h.y;c.W=h.width;c.H=h.height}d.href&&(e.href=d.href);d.title&&(e.title=d.title);d.target&&(e.target=d.target);d.cursor&&(i.cursor=d.cursor);"blur"in d&&c.blur(d.blur);if(d.path&&c.type=="path"||k)e.path=cb(h.path);d.rotation!=null&&c.rotate(d.rotation,true);if(d.translation){j=r(d.translation)[s](b);cz.call(c,j[0],j[1]);if(c._.rt.cx!=null){c._.rt.cx+=+j[0];c._.rt.cy+=+j[1];c.setBox(c.attrs,j[0],j[1])}}if(d.scale){j=r(d.scale)[s](b);c.scale(+j[0]||1,+j[1]||+j[0]||1,+j[2]||null,+j[3]||null)}if("clip-rect"in d){var o=r(d["clip-rect"])[s](b);if(o[w]==4){o[2]=+o[2]+ +o[0];o[3]=+o[3]+ +o[1];var q=e.clipRect||g.createElement("div"),t=q.style,u=e.parentNode;t.clip=a.format("rect({1}px {2}px {3}px {0}px)",o);if(!e.clipRect){t.position="absolute";t.top=0;t.left=0;t.width=c.paper.width+"px";t.height=c.paper.height+"px";u.parentNode.insertBefore(q,u);q[l](u);e.clipRect=q}}d["clip-rect"]||e.clipRect&&(e.clipRect.style.clip=p)}c.type=="image"&&d.src&&(e.src=d.src);if(c.type=="image"&&d.opacity){e.filterOpacity=U+".Alpha(opacity="+d.opacity*100+")";i.filter=(e.filterMatrix||p)+(e.filterOpacity||p)}d.font&&(i.font=d.font);d["font-family"]&&(i.fontFamily="\""+d["font-family"][s](",")[0][Y](/^['"]+|['"]+$/g,p)+"\"");d["font-size"]&&(i.fontSize=d["font-size"]);d["font-weight"]&&(i.fontWeight=d["font-weight"]);d["font-style"]&&(i.fontStyle=d["font-style"]);if(d.opacity!=null||d["stroke-width"]!=null||d.fill!=null||d.stroke!=null||d["stroke-width"]!=null||d["stroke-opacity"]!=null||d["fill-opacity"]!=null||d["stroke-dasharray"]!=null||d["stroke-miterlimit"]!=null||d["stroke-linejoin"]!=null||d["stroke-linecap"]!=null){e=c.shape||e;var v=e.getElementsByTagName(I)&&e.getElementsByTagName(I)[0],x=false;!v&&(x=v=cd(I));if("fill-opacity"in d||"opacity"in d){var y=((+h["fill-opacity"]+1||2)-1)*((+h.opacity+1||2)-1)*((+a.getRGB(d.fill).o+1||2)-1);y=A(z(y,0),1);v.opacity=y}d.fill&&(v.on=true);if(v.on==null||d.fill=="none")v.on=false;if(v.on&&d.fill){var B=d.fill.match(M);if(B){v.src=B[1];v.type="tile"}else{v.color=a.getRGB(d.fill).hex;v.src=p;v.type="solid";if(a.getRGB(d.fill).error&&(m.type in{circle:1,ellipse:1}||r(d.fill).charAt()!="r")&&bI(m,d.fill)){h.fill="none";h.gradient=d.fill}}}x&&e[l](v);var C=e.getElementsByTagName("stroke")&&e.getElementsByTagName("stroke")[0],D=false;!C&&(D=C=cd("stroke"));if(d.stroke&&d.stroke!="none"||d["stroke-width"]||d["stroke-opacity"]!=null||d["stroke-dasharray"]||d["stroke-miterlimit"]||d["stroke-linejoin"]||d["stroke-linecap"])C.on=true;(d.stroke=="none"||C.on==null||d.stroke==0||d["stroke-width"]==0)&&(C.on=false);var E=a.getRGB(d.stroke);C.on&&d.stroke&&(C.color=E.hex);y=((+h["stroke-opacity"]+1||2)-1)*((+h.opacity+1||2)-1)*((+E.o+1||2)-1);var F=(S(d["stroke-width"])||1)*0.75;y=A(z(y,0),1);d["stroke-width"]==null&&(F=h["stroke-width"]);d["stroke-width"]&&(C.weight=F);F&&F<1&&(y*=F)&&(C.weight=1);C.opacity=y;d["stroke-linejoin"]&&(C.joinstyle=d["stroke-linejoin"]||"miter");C.miterlimit=d["stroke-miterlimit"]||8;d["stroke-linecap"]&&(C.endcap=d["stroke-linecap"]=="butt"?"flat":d["stroke-linecap"]=="square"?"square":"round");if(d["stroke-dasharray"]){var G={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};C.dashstyle=G[f](d["stroke-dasharray"])?G[d["stroke-dasharray"]]:p}D&&e[l](C)}if(m.type=="text"){i=m.paper.span.style;h.font&&(i.font=h.font);h["font-family"]&&(i.fontFamily=h["font-family"]);h["font-size"]&&(i.fontSize=h["font-size"]);h["font-weight"]&&(i.fontWeight=h["font-weight"]);h["font-style"]&&(i.fontStyle=h["font-style"]);m.node.string&&(m.paper.span.innerHTML=r(m.node.string)[Y](/</g,"&#60;")[Y](/&/g,"&#38;")[Y](/\n/g,"<br>"));m.W=h.w=m.paper.span.offsetWidth;m.H=h.h=m.paper.span.offsetHeight;m.X=h.x;m.Y=h.y+Q(m.H/2);switch(h["text-anchor"]){case"start":m.node.style["v-text-align"]="left";m.bbx=Q(m.W/2);break;case"end":m.node.style["v-text-align"]="right";m.bbx=-Q(m.W/2);break;default:m.node.style["v-text-align"]="center";break}}};bI=function(a,b){a.attrs=a.attrs||{};var c=a.attrs,d,e="linear",f=".5 .5";a.attrs.gradient=b;b=r(b)[Y](bd,function(a,b,c){e="radial";if(b&&c){b=S(b);c=S(c);C(b-0.5,2)+C(c-0.5,2)>0.25&&(c=y.sqrt(0.25-C(b-0.5,2))*((c>0.5)*2-1)+0.5);f=b+q+c}return p});b=b[s](/\s*\-\s*/);if(e=="linear"){var g=b.shift();g=-S(g);if(isNaN(g))return null}var h=bx(b);if(!h)return null;a=a.shape||a.node;d=a.getElementsByTagName(I)[0]||cd(I);!d.parentNode&&a.appendChild(d);if(h[w]){d.on=true;d.method="none";d.color=h[0].color;d.color2=h[h[w]-1].color;var i=[];for(var j=0,k=h[w];j<k;j++)h[j].offset&&i[L](h[j].offset+q+h[j].color);d.colors&&(d.colors.value=i[w]?i[v]():"0% "+d.color);if(e=="radial"){d.type="gradientradial";d.focus="100%";d.focussize=f;d.focusposition=f}else{d.type="gradient";d.angle=(270-g)%360}}return 1};bN=function(b,c,d){var e=0,f=0,g=0,h=1;this[0]=b;this.id=a._oid++;this.node=b;b.raphael=this;this.X=0;this.Y=0;this.attrs={};this.Group=c;this.paper=d;this._={tx:0,ty:0,rt:{deg:0},sx:1,sy:1};!d.bottom&&(d.bottom=this);this.prev=d.top;d.top&&(d.top.next=this);d.top=this;this.next=null};bO=bN[e];bO.rotate=function(a,c,d){if(this.removed)return this;if(a==null){if(this._.rt.cx)return[this._.rt.deg,this._.rt.cx,this._.rt.cy][v](q);return this._.rt.deg}a=r(a)[s](b);if(a[w]-1){c=S(a[1]);d=S(a[2])}a=S(a[0]);c!=null?this._.rt.deg=a:this._.rt.deg+=a;d==null&&(c=null);this._.rt.cx=c;this._.rt.cy=d;this.setBox(this.attrs,c,d);this.Group.style.rotation=this._.rt.deg;return this};bO.setBox=function(a,b,c){if(this.removed)return this;var d=this.Group.style,e=this.shape&&this.shape.style||this.node.style;a=a||{};for(var g in a)a[f](g)&&(this.attrs[g]=a[g]);b=b||this._.rt.cx;c=c||this._.rt.cy;var h=this.attrs,i,j,k,l;switch(this.type){case"circle":i=h.cx-h.r;j=h.cy-h.r;k=l=h.r*2;break;case"ellipse":i=h.cx-h.rx;j=h.cy-h.ry;k=h.rx*2;l=h.ry*2;break;case"image":i=+h.x;j=+h.y;k=h.width||0;l=h.height||0;break;case"text":this.textpath.v=["m",Q(h.x),", ",Q(h.y-2),"l",Q(h.x)+1,", ",Q(h.y-2)][v](p);i=h.x-Q(this.W/2);j=h.y-this.H/2;k=this.W;l=this.H;break;case"rect":case"path":if(this.attrs.path){var m=bn(this.attrs.path);i=m.x;j=m.y;k=m.width;l=m.height}else{i=0;j=0;k=this.paper.width;l=this.paper.height}break;default:i=0;j=0;k=this.paper.width;l=this.paper.height;break}b=b==null?i+k/2:b;c=c==null?j+l/2:c;var n=b-this.paper.width/2,o=c-this.paper.height/2,q;d.left!=(q=n+"px")&&(d.left=q);d.top!=(q=o+"px")&&(d.top=q);this.X=ca[f](this.type)?-n:i;this.Y=ca[f](this.type)?-o:j;this.W=k;this.H=l;if(ca[f](this.type)){e.left!=(q=-n*b_+"px")&&(e.left=q);e.top!=(q=-o*b_+"px")&&(e.top=q)}else if(this.type=="text"){e.left!=(q=-n+"px")&&(e.left=q);e.top!=(q=-o+"px")&&(e.top=q)}else{d.width!=(q=this.paper.width+"px")&&(d.width=q);d.height!=(q=this.paper.height+"px")&&(d.height=q);e.left!=(q=i-n+"px")&&(e.left=q);e.top!=(q=j-o+"px")&&(e.top=q);e.width!=(q=k+"px")&&(e.width=q);e.height!=(q=l+"px")&&(e.height=q)}};bO.hide=function(){!this.removed&&(this.Group.style.display="none");return this};bO.show=function(){!this.removed&&(this.Group.style.display="block");return this};bO.getBBox=function(){if(this.removed)return this;if(ca[f](this.type))return bn(this.attrs.path);return{x:this.X+(this.bbx||0),y:this.Y,width:this.W,height:this.H}};bO.remove=function(){if(this.removed)return;bA(this,this.paper);this.node.parentNode.removeChild(this.node);this.Group.parentNode.removeChild(this.Group);this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this)delete this[a];this.removed=true};bO.attr=function(b,c){if(this.removed)return this;if(b==null){var d={};for(var e in this.attrs)this.attrs[f](e)&&(d[e]=this.attrs[e]);this._.rt.deg&&(d.rotation=this.rotate());(this._.sx!=1||this._.sy!=1)&&(d.scale=this.scale());d.gradient&&d.fill=="none"&&(d.fill=d.gradient)&&delete d.gradient;return d}if(c==null&&a.is(b,"string")){if(b=="translation")return cz.call(this);if(b=="rotation")return this.rotate();if(b=="scale")return this.scale();if(b==I&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;return this.attrs[b]}if(this.attrs&&c==null&&a.is(b,G)){var g,h={};for(e=0,g=b[w];e<g;e++)h[b[e]]=this.attr(b[e]);return h}var i;if(c!=null){i={};i[b]=c}c==null&&a.is(b,"object")&&(i=b);if(i){for(var j in this.paper.customAttributes)if(this.paper.customAttributes[f](j)&&i[f](j)&&a.is(this.paper.customAttributes[j],"function")){var k=this.paper.customAttributes[j].apply(this,[][n](i[j]));this.attrs[j]=i[j];for(var l in k)k[f](l)&&(i[l]=k[l])}i.text&&this.type=="text"&&(this.node.string=i.text);bK(this,i);i.gradient&&(({circle:1,ellipse:1})[f](this.type)||r(i.gradient).charAt()!="r")&&bI(this,i.gradient);(!ca[f](this.type)||this._.rt.deg)&&this.setBox(this.attrs)}return this};bO.toFront=function(){!this.removed&&this.Group.parentNode[l](this.Group);this.paper.top!=this&&bB(this,this.paper);return this};bO.toBack=function(){if(this.removed)return this;if(this.Group.parentNode.firstChild!=this.Group){this.Group.parentNode.insertBefore(this.Group,this.Group.parentNode.firstChild);bC(this,this.paper)}return this};bO.insertAfter=function(a){if(this.removed)return this;a.constructor==cC&&(a=a[a.length-1]);a.Group.nextSibling?a.Group.parentNode.insertBefore(this.Group,a.Group.nextSibling):a.Group.parentNode[l](this.Group);bD(this,a,this.paper);return this};bO.insertBefore=function(a){if(this.removed)return this;a.constructor==cC&&(a=a[0]);a.Group.parentNode.insertBefore(this.Group,a.Group);bE(this,a,this.paper);return this};bO.blur=function(b){var c=this.node.runtimeStyle,d=c.filter;d=d.replace(bY,p);if(+b!==0){this.attrs.blur=b;c.filter=d+q+U+".Blur(pixelradius="+(+b||1.5)+")";c.margin=a.format("-{0}px 0 0 -{0}px",Q(+b||1.5))}else{c.filter=d;c.margin=0;delete this.attrs.blur}};bP=function(a,b,c,d){var e=cd("group"),f=cd("oval"),g=f.style;e.style.cssText="position:absolute;left:0;top:0;width:"+a.width+"px;height:"+a.height+"px";e.coordsize=b$;e.coordorigin=a.coordorigin;e[l](f);var h=new bN(f,e,a);h.type="circle";bK(h,{stroke:"#000",fill:"none"});h.attrs.cx=b;h.attrs.cy=c;h.attrs.r=d;h.setBox({x:b-d,y:c-d,width:d*2,height:d*2});a.canvas[l](e);return h};function cc(b,c,d,e,f){return f?a.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z",b+f,c,d-f*2,f,-f,e-f*2,f*2-d,f*2-e):a.format("M{0},{1}l{2},0,0,{3},{4},0z",b,c,d,e,-d)}bQ=function(a,b,c,d,e,f){var g=cc(b,c,d,e,f),h=a.path(g),i=h.attrs;h.X=i.x=b;h.Y=i.y=c;h.W=i.width=d;h.H=i.height=e;i.r=f;i.path=g;h.type="rect";return h};bR=function(a,b,c,d,e){var f=cd("group"),g=cd("oval"),h=g.style;f.style.cssText="position:absolute;left:0;top:0;width:"+a.width+"px;height:"+a.height+"px";f.coordsize=b$;f.coordorigin=a.coordorigin;f[l](g);var i=new bN(g,f,a);i.type="ellipse";bK(i,{stroke:"#000"});i.attrs.cx=b;i.attrs.cy=c;i.attrs.rx=d;i.attrs.ry=e;i.setBox({x:b-d,y:c-e,width:d*2,height:e*2});a.canvas[l](f);return i};bS=function(a,b,c,d,e,f){var g=cd("group"),h=cd("image");g.style.cssText="position:absolute;left:0;top:0;width:"+a.width+"px;height:"+a.height+"px";g.coordsize=b$;g.coordorigin=a.coordorigin;h.src=b;g[l](h);var i=new bN(h,g,a);i.type="image";i.attrs.src=b;i.attrs.x=c;i.attrs.y=d;i.attrs.w=e;i.attrs.h=f;i.setBox({x:c,y:d,width:e,height:f});a.canvas[l](g);return i};bT=function(b,c,d,e){var f=cd("group"),g=cd("shape"),h=g.style,i=cd("path"),j=i.style,k=cd("textpath");f.style.cssText="position:absolute;left:0;top:0;width:"+b.width+"px;height:"+b.height+"px";f.coordsize=b$;f.coordorigin=b.coordorigin;i.v=a.format("m{0},{1}l{2},{1}",Q(c*10),Q(d*10),Q(c*10)+1);i.textpathok=true;h.width=b.width;h.height=b.height;k.string=r(e);k.on=true;g[l](k);g[l](i);f[l](g);var m=new bN(k,f,b);m.shape=g;m.textpath=i;m.type="text";m.attrs.text=e;m.attrs.x=c;m.attrs.y=d;m.attrs.w=1;m.attrs.h=1;bK(m,{font:W.font,stroke:"none",fill:"#000"});m.setBox();b.canvas[l](f);return m};bU=function(a,b){var c=this.canvas.style;a==+a&&(a+="px");b==+b&&(b+="px");c.width=a;c.height=b;c.clip="rect(0 "+a+" "+b+" 0)";return this};var cd;g.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!g.namespaces.rvml&&g.namespaces.add("rvml","urn:schemas-microsoft-com:vml");cd=function(a){return g.createElement("<rvml:"+a+" class=\"rvml\">")}}catch(a){cd=function(a){return g.createElement("<"+a+" xmlns=\"urn:schemas-microsoft.com:vml\" class=\"rvml\">")}}bV=function(){var b=by[m](0,arguments),c=b.container,d=b.height,e,f=b.width,h=b.x,i=b.y;if(!c)throw new Error("VML container not found.");var k=new j,n=k.canvas=g.createElement("div"),o=n.style;h=h||0;i=i||0;f=f||512;d=d||342;f==+f&&(f+="px");d==+d&&(d+="px");k.width=1000;k.height=1000;k.coordsize=b_*1000+q+b_*1000;k.coordorigin="0 0";k.span=g.createElement("span");k.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";n[l](k.span);o.cssText=a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",f,d);if(c==1){g.body[l](n);o.left=h+"px";o.top=i+"px";o.position="absolute"}else c.firstChild?c.insertBefore(n,c.firstChild):c[l](n);bz.call(k,k,a.fn);return k};k.clear=function(){this.canvas.innerHTML=p;this.span=g.createElement("span");this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";this.canvas[l](this.span);this.bottom=this.top=null};k.remove=function(){this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]=bF(a);return true}}var ce=navigator.userAgent.match(/Version\\x2f(.*?)\s/);navigator.vendor=="Apple Computer, Inc."&&(ce&&ce[1]<4||navigator.platform.slice(0,2)=="iP")?k.safari=function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});h.setTimeout(function(){a.remove()})}:k.safari=function(){};var cf=function(){this.returnValue=false},cg=function(){return this.originalEvent.preventDefault()},ch=function(){this.cancelBubble=true},ci=function(){return this.originalEvent.stopPropagation()},cj=(function(){{if(g.addEventListener)return function(a,b,c,d){var e=o&&u[b]?u[b]:b,g=function(e){if(o&&u[f](b))for(var g=0,h=e.targetTouches&&e.targetTouches.length;g<h;g++){if(e.targetTouches[g].target==a){var i=e;e=e.targetTouches[g];e.originalEvent=i;e.preventDefault=cg;e.stopPropagation=ci;break}}return c.call(d,e)};a.addEventListener(e,g,false);return function(){a.removeEventListener(e,g,false);return true}};if(g.attachEvent)return function(a,b,c,d){var e=function(a){a=a||h.event;a.preventDefault=a.preventDefault||cf;a.stopPropagation=a.stopPropagation||ch;return c.call(d,a)};a.attachEvent("on"+b,e);var f=function(){a.detachEvent("on"+b,e);return true};return f}}})(),ck=[],cl=function(a){var b=a.clientX,c=a.clientY,d=g.documentElement.scrollTop||g.body.scrollTop,e=g.documentElement.scrollLeft||g.body.scrollLeft,f,h=ck.length;while(h--){f=ck[h];if(o){var i=a.touches.length,j;while(i--){j=a.touches[i];if(j.identifier==f.el._drag.id){b=j.clientX;c=j.clientY;(a.originalEvent?a.originalEvent:a).preventDefault();break}}}else a.preventDefault();b+=e;c+=d;f.move&&f.move.call(f.move_scope||f.el,b-f.el._drag.x,c-f.el._drag.y,b,c,a)}},cm=function(b){a.unmousemove(cl).unmouseup(cm);var c=ck.length,d;while(c--){d=ck[c];d.el._drag={};d.end&&d.end.call(d.end_scope||d.start_scope||d.move_scope||d.el,b)}ck=[]};for(var cn=t[w];cn--;)(function(b){a[b]=bN[e][b]=function(c,d){if(a.is(c,"function")){this.events=this.events||[];this.events.push({name:b,f:c,unbind:cj(this.shape||this.node||g,b,c,d||this)})}return this};a["un"+b]=bN[e]["un"+b]=function(a){var c=this.events,d=c[w];while(d--)if(c[d].name==b&&c[d].f==a){c[d].unbind();c.splice(d,1);!c.length&&delete this.events;return this}return this}})(t[cn]);bO.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)};bO.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};bO.drag=function(b,c,d,e,f,h){this._drag={};this.mousedown(function(i){(i.originalEvent||i).preventDefault();var j=g.documentElement.scrollTop||g.body.scrollTop,k=g.documentElement.scrollLeft||g.body.scrollLeft;this._drag.x=i.clientX+k;this._drag.y=i.clientY+j;this._drag.id=i.identifier;c&&c.call(f||e||this,i.clientX+k,i.clientY+j,i);!ck.length&&a.mousemove(cl).mouseup(cm);ck.push({el:this,move:b,end:d,move_scope:e,start_scope:f,end_scope:h})});return this};bO.undrag=function(b,c,d){var e=ck.length;while(e--)ck[e].el==this&&(ck[e].move==b&&ck[e].end==d)&&ck.splice(e++,1);!ck.length&&a.unmousemove(cl).unmouseup(cm)};k.circle=function(a,b,c){return bP(this,a||0,b||0,c||0)};k.rect=function(a,b,c,d,e){return bQ(this,a||0,b||0,c||0,d||0,e||0)};k.ellipse=function(a,b,c,d){return bR(this,a||0,b||0,c||0,d||0)};k.path=function(b){b&&!a.is(b,F)&&!a.is(b[0],G)&&(b+=p);return bH(a.format[m](a,arguments),this)};k.image=function(a,b,c,d,e){return bS(this,a||"about:blank",b||0,c||0,d||0,e||0)};k.text=function(a,b,c){return bT(this,a||0,b||0,r(c))};k.set=function(a){arguments[w]>1&&(a=Array[e].splice.call(arguments,0,arguments[w]));return new cC(a)};k.setSize=bU;k.top=k.bottom=null;k.raphael=a;function co(){return this.x+q+this.y}bO.resetScale=function(){if(this.removed)return this;this._.sx=1;this._.sy=1;this.attrs.scale="1 1"};bO.scale=function(a,b,c,d){if(this.removed)return this;if(a==null&&b==null)return{x:this._.sx,y:this._.sy,toString:co};b=b||a;!(+b)&&(b=a);var e,f,g,h,i=this.attrs;if(a!=0){var j=this.getBBox(),k=j.x+j.width/2,l=j.y+j.height/2,m=B(a/this._.sx),o=B(b/this._.sy);c=+c||c==0?c:k;d=+d||d==0?d:l;var r=this._.sx>0,s=this._.sy>0,t=~(~(a/B(a))),u=~(~(b/B(b))),x=m*t,y=o*u,z=this.node.style,A=c+B(k-c)*x*(k>c==r?1:-1),C=d+B(l-d)*y*(l>d==s?1:-1),D=a*t>b*u?o:m;switch(this.type){case"rect":case"image":var E=i.width*m,F=i.height*o;this.attr({height:F,r:i.r*D,width:E,x:A-E/2,y:C-F/2});break;case"circle":case"ellipse":this.attr({rx:i.rx*m,ry:i.ry*o,r:i.r*D,cx:A,cy:C});break;case"text":this.attr({x:A,y:C});break;case"path":var G=bp(i.path),H=true,I=r?x:m,J=s?y:o;for(var K=0,L=G[w];K<L;K++){var M=G[K],N=V.call(M[0]);{if(N=="M"&&H)continue;H=false}if(N=="A"){M[G[K][w]-2]*=I;M[G[K][w]-1]*=J;M[1]*=m;M[2]*=o;M[5]=+(t+u?!(!(+M[5])):!(+M[5]))}else if(N=="H")for(var O=1,P=M[w];O<P;O++)M[O]*=I;else if(N=="V")for(O=1,P=M[w];O<P;O++)M[O]*=J;else for(O=1,P=M[w];O<P;O++)M[O]*=O%2?I:J}var Q=bn(G);e=A-Q.x-Q.width/2;f=C-Q.y-Q.height/2;G[0][1]+=e;G[0][2]+=f;this.attr({path:G});break}if(this.type in{text:1,image:1}&&(t!=1||u!=1))if(this.transformations){this.transformations[2]="scale("[n](t,",",u,")");this.node[R]("transform",this.transformations[v](q));e=t==-1?-i.x-(E||0):i.x;f=u==-1?-i.y-(F||0):i.y;this.attr({x:e,y:f});i.fx=t-1;i.fy=u-1}else{this.node.filterMatrix=U+".Matrix(M11="[n](t,", M12=0, M21=0, M22=",u,", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')");z.filter=(this.node.filterMatrix||p)+(this.node.filterOpacity||p)}else if(this.transformations){this.transformations[2]=p;this.node[R]("transform",this.transformations[v](q));i.fx=0;i.fy=0}else{this.node.filterMatrix=p;z.filter=(this.node.filterMatrix||p)+(this.node.filterOpacity||p)}i.scale=[a,b,c,d][v](q);this._.sx=a;this._.sy=b}return this};bO.clone=function(){if(this.removed)return null;var a=this.attr();delete a.scale;delete a.translation;return this.paper[this.type]().attr(a)};var cp={},cq=function(b,c,d,e,f,g,h,i,j){var k=0,l=100,m=[b,c,d,e,f,g,h,i].join(),n=cp[m],o,p;!n&&(cp[m]=n={data:[]});n.timer&&clearTimeout(n.timer);n.timer=setTimeout(function(){delete cp[m]},2000);if(j!=null){var q=cq(b,c,d,e,f,g,h,i);l=~(~q)*10}for(var r=0;r<l+1;r++){if(n.data[j]>r)p=n.data[r*l];else{p=a.findDotsAtSegment(b,c,d,e,f,g,h,i,r/l);n.data[r]=p}r&&(k+=C(C(o.x-p.x,2)+C(o.y-p.y,2),0.5));if(j!=null&&k>=j)return p;o=p}if(j==null)return k},cr=function(b,c){return function(d,e,f){d=bw(d);var g,h,i,j,k="",l={},m,n=0;for(var o=0,p=d.length;o<p;o++){i=d[o];if(i[0]=="M"){g=+i[1];h=+i[2]}else{j=cq(g,h,i[1],i[2],i[3],i[4],i[5],i[6]);if(n+j>e){if(c&&!l.start){m=cq(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n);k+=["C",m.start.x,m.start.y,m.m.x,m.m.y,m.x,m.y];if(f)return k;l.start=k;k=["M",m.x,m.y+"C",m.n.x,m.n.y,m.end.x,m.end.y,i[5],i[6]][v]();n+=j;g=+i[5];h=+i[6];continue}if(!b&&!c){m=cq(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n);return{x:m.x,y:m.y,alpha:m.alpha}}}n+=j;g=+i[5];h=+i[6]}k+=i}l.end=k;m=b?n:c?l:a.findDotsAtSegment(g,h,i[1],i[2],i[3],i[4],i[5],i[6],1);m.alpha&&(m={x:m.x,y:m.y,alpha:m.alpha});return m}},cs=cr(1),ct=cr(),cu=cr(0,1);bO.getTotalLength=function(){if(this.type!="path")return;if(this.node.getTotalLength)return this.node.getTotalLength();return cs(this.attrs.path)};bO.getPointAtLength=function(a){if(this.type!="path")return;return ct(this.attrs.path,a)};bO.getSubpath=function(a,b){if(this.type!="path")return;if(B(this.getTotalLength()-b)<"1e-6")return cu(this.attrs.path,a).end;var c=cu(this.attrs.path,b,1);return a?cu(c,a).end:c};a.easing_formulas={linear:function(a){return a},"<":function(a){return C(a,3)},">":function(a){return C(a-1,3)+1},"<>":function(a){a=a*2;if(a<1)return C(a,3)/2;a-=2;return(C(a,3)+2)/2},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a=a-1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){if(a==0||a==1)return a;var b=0.3,c=b/4;return C(2,-10*a)*y.sin((a-c)*(2*D)/b)+1},bounce:function(a){var b=7.5625,c=2.75,d;if(a<1/c)d=b*a*a;else if(a<2/c){a-=1.5/c;d=b*a*a+0.75}else if(a<2.5/c){a-=2.25/c;d=b*a*a+0.9375}else{a-=2.625/c;d=b*a*a+0.984375}return d}};var cv=[],cw=function(){var b=+(new Date);for(var c=0;c<cv[w];c++){var d=cv[c];if(d.stop||d.el.removed)continue;var e=b-d.start,g=d.ms,h=d.easing,i=d.from,j=d.diff,k=d.to,l=d.t,m=d.el,n={},o;if(e<g){var r=h(e/g);for(var s in i)if(i[f](s)){switch(X[s]){case"along":o=r*g*j[s];k.back&&(o=k.len-o);var t=ct(k[s],o);m.translate(j.sx-j.x||0,j.sy-j.y||0);j.x=t.x;j.y=t.y;m.translate(t.x-j.sx,t.y-j.sy);k.rot&&m.rotate(j.r+t.alpha,t.x,t.y);break;case E:o=+i[s]+r*g*j[s];break;case"colour":o="rgb("+[cy(Q(i[s].r+r*g*j[s].r)),cy(Q(i[s].g+r*g*j[s].g)),cy(Q(i[s].b+r*g*j[s].b))][v](",")+")";break;case"path":o=[];for(var u=0,x=i[s][w];u<x;u++){o[u]=[i[s][u][0]];for(var y=1,z=i[s][u][w];y<z;y++)o[u][y]=+i[s][u][y]+r*g*j[s][u][y];o[u]=o[u][v](q)}o=o[v](q);break;case"csv":switch(s){case"translation":var A=r*g*j[s][0]-l.x,B=r*g*j[s][1]-l.y;l.x+=A;l.y+=B;o=A+q+B;break;case"rotation":o=+i[s][0]+r*g*j[s][0];i[s][1]&&(o+=","+i[s][1]+","+i[s][2]);break;case"scale":o=[+i[s][0]+r*g*j[s][0],+i[s][1]+r*g*j[s][1],2 in k[s]?k[s][2]:p,3 in k[s]?k[s][3]:p][v](q);break;case"clip-rect":o=[];u=4;while(u--)o[u]=+i[s][u]+r*g*j[s][u];break}break;default:var C=[].concat(i[s]);o=[];u=m.paper.customAttributes[s].length;while(u--)o[u]=+C[u]+r*g*j[s][u];break}n[s]=o}m.attr(n);m._run&&m._run.call(m)}else{if(k.along){t=ct(k.along,k.len*!k.back);m.translate(j.sx-(j.x||0)+t.x-j.sx,j.sy-(j.y||0)+t.y-j.sy);k.rot&&m.rotate(j.r+t.alpha,t.x,t.y)}(l.x||l.y)&&m.translate(-l.x,-l.y);k.scale&&(k.scale+=p);m.attr(k);cv.splice(c--,1)}}a.svg&&m&&m.paper&&m.paper.safari();cv[w]&&setTimeout(cw)},cx=function(b,c,d,e,f){var g=d-e;c.timeouts.push(setTimeout(function(){a.is(f,"function")&&f.call(c);c.animate(b,g,b.easing)},e))},cy=function(a){return z(A(a,255),0)},cz=function(a,b){if(a==null)return{x:this._.tx,y:this._.ty,toString:co};this._.tx+=+a;this._.ty+=+b;switch(this.type){case"circle":case"ellipse":this.attr({cx:+a+this.attrs.cx,cy:+b+this.attrs.cy});break;case"rect":case"image":case"text":this.attr({x:+a+this.attrs.x,y:+b+this.attrs.y});break;case"path":var c=bp(this.attrs.path);c[0][1]+=+a;c[0][2]+=+b;this.attr({path:c});break}return this};bO.animateWith=function(a,b,c,d,e){for(var f=0,g=cv.length;f<g;f++)cv[f].el.id==a.id&&(b.start=cv[f].start);return this.animate(b,c,d,e)};bO.animateAlong=cA();bO.animateAlongBack=cA(1);function cA(b){return function(c,d,e,f){var g={back:b};a.is(e,"function")?f=e:g.rot=e;c&&c.constructor==bN&&(c=c.attrs.path);c&&(g.along=c);return this.animate(g,d,f)}}function cB(a,b,c,d,e,f){var g=3*b,h=3*(d-b)-g,i=1-g-h,j=3*c,k=3*(e-c)-j,l=1-j-k;function m(a){return((i*a+h)*a+g)*a}function n(a,b){var c=o(a,b);return((l*c+k)*c+j)*c}function o(a,b){var c,d,e,f,j,k;for(e=a,k=0;k<8;k++){f=m(e)-a;if(B(f)<b)return e;j=(3*i*e+2*h)*e+g;if(B(j)<0.000001)break;e=e-f/j}c=0;d=1;e=a;if(e<c)return c;if(e>d)return d;while(c<d){f=m(e);if(B(f-a)<b)return e;a>f?c=e:d=e;e=(d-c)/2+c}return e}return n(a,1/(200*f))}bO.onAnimation=function(a){this._run=a||0;return this};bO.animate=function(c,d,e,g){var h=this;h.timeouts=h.timeouts||[];if(a.is(e,"function")||!e)g=e||null;if(h.removed){g&&g.call(h);return h}var i={},j={},k=false,l={};for(var m in c)if(c[f](m)){if(X[f](m)||h.paper.customAttributes[f](m)){k=true;i[m]=h.attr(m);i[m]==null&&(i[m]=W[m]);j[m]=c[m];switch(X[m]){case"along":var n=cs(c[m]),o=ct(c[m],n*!(!c.back)),p=h.getBBox();l[m]=n/d;l.tx=p.x;l.ty=p.y;l.sx=o.x;l.sy=o.y;j.rot=c.rot;j.back=c.back;j.len=n;c.rot&&(l.r=S(h.rotate())||0);break;case E:l[m]=(j[m]-i[m])/d;break;case"colour":i[m]=a.getRGB(i[m]);var q=a.getRGB(j[m]);l[m]={r:(q.r-i[m].r)/d,g:(q.g-i[m].g)/d,b:(q.b-i[m].b)/d};break;case"path":var t=bw(i[m],j[m]);i[m]=t[0];var u=t[1];l[m]=[];for(var v=0,x=i[m][w];v<x;v++){l[m][v]=[0];for(var y=1,z=i[m][v][w];y<z;y++)l[m][v][y]=(u[v][y]-i[m][v][y])/d}break;case"csv":var A=r(c[m])[s](b),B=r(i[m])[s](b);switch(m){case"translation":i[m]=[0,0];l[m]=[A[0]/d,A[1]/d];break;case"rotation":i[m]=B[1]==A[1]&&B[2]==A[2]?B:[0,A[1],A[2]];l[m]=[(A[0]-i[m][0])/d,0,0];break;case"scale":c[m]=A;i[m]=r(i[m])[s](b);l[m]=[(A[0]-i[m][0])/d,(A[1]-i[m][1])/d,0,0];break;case"clip-rect":i[m]=r(i[m])[s](b);l[m]=[];v=4;while(v--)l[m][v]=(A[v]-i[m][v])/d;break}j[m]=A;break;default:A=[].concat(c[m]);B=[].concat(i[m]);l[m]=[];v=h.paper.customAttributes[m][w];while(v--)l[m][v]=((A[v]||0)-(B[v]||0))/d;break}}}if(k){var G=a.easing_formulas[e];if(!G){G=r(e).match(P);if(G&&G[w]==5){var H=G;G=function(a){return cB(a,+H[1],+H[2],+H[3],+H[4],d)}}else G=function(a){return a}}cv.push({start:c.start||+(new Date),ms:d,easing:G,from:i,diff:l,to:j,el:h,t:{x:0,y:0}});a.is(g,"function")&&(h._ac=setTimeout(function(){g.call(h)},d));cv[w]==1&&setTimeout(cw)}else{var C=[],D;for(var F in c)if(c[f](F)&&Z.test(F)){m={value:c[F]};F=="from"&&(F=0);F=="to"&&(F=100);m.key=T(F,10);C.push(m)}C.sort(be);C[0].key&&C.unshift({key:0,value:h.attrs});for(v=0,x=C[w];v<x;v++)cx(C[v].value,h,d/100*C[v].key,d/100*(C[v-1]&&C[v-1].key||0),C[v-1]&&C[v-1].value.callback);D=C[C[w]-1].value.callback;D&&h.timeouts.push(setTimeout(function(){D.call(h)},d))}return this};bO.stop=function(){for(var a=0;a<cv.length;a++)cv[a].el.id==this.id&&cv.splice(a--,1);for(a=0,ii=this.timeouts&&this.timeouts.length;a<ii;a++)clearTimeout(this.timeouts[a]);this.timeouts=[];clearTimeout(this._ac);delete this._ac;return this};bO.translate=function(a,b){return this.attr({translation:a+" "+b})};bO[H]=function(){return"RaphaГ«l's object"};a.ae=cv;var cC=function(a){this.items=[];this[w]=0;this.type="set";if(a)for(var b=0,c=a[w];b<c;b++){if(a[b]&&(a[b].constructor==bN||a[b].constructor==cC)){this[this.items[w]]=this.items[this.items[w]]=a[b];this[w]++}}};cC[e][L]=function(){var a,b;for(var c=0,d=arguments[w];c<d;c++){a=arguments[c];if(a&&(a.constructor==bN||a.constructor==cC)){b=this.items[w];this[b]=this.items[b]=a;this[w]++}}return this};cC[e].pop=function(){delete this[this[w]--];return this.items.pop()};for(var cD in bO)bO[f](cD)&&(cC[e][cD]=(function(a){return function(){for(var b=0,c=this.items[w];b<c;b++)this.items[b][a][m](this.items[b],arguments);return this}})(cD));cC[e].attr=function(b,c){if(b&&a.is(b,G)&&a.is(b[0],"object"))for(var d=0,e=b[w];d<e;d++)this.items[d].attr(b[d]);else for(var f=0,g=this.items[w];f<g;f++)this.items[f].attr(b,c);return this};cC[e].animate=function(b,c,d,e){(a.is(d,"function")||!d)&&(e=d||null);var f=this.items[w],g=f,h,i=this,j;e&&(j=function(){!(--f)&&e.call(i)});d=a.is(d,F)?d:j;h=this.items[--g].animate(b,c,d,j);while(g--)this.items[g]&&!this.items[g].removed&&this.items[g].animateWith(h,b,c,d,j);return this};cC[e].insertAfter=function(a){var b=this.items[w];while(b--)this.items[b].insertAfter(a);return this};cC[e].getBBox=function(){var a=[],b=[],c=[],d=[];for(var e=this.items[w];e--;){var f=this.items[e].getBBox();a[L](f.x);b[L](f.y);c[L](f.x+f.width);d[L](f.y+f.height)}a=A[m](0,a);b=A[m](0,b);return{x:a,y:b,width:z[m](0,c)-a,height:z[m](0,d)-b}};cC[e].clone=function(a){a=new cC;for(var b=0,c=this.items[w];b<c;b++)a[L](this.items[b].clone());return a};a.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[f](d)&&(b.face[d]=a.face[d]);this.fonts[c]?this.fonts[c][L](b):this.fonts[c]=[b];if(!a.svg){b.face["units-per-em"]=T(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[f](e)){var g=a.glyphs[e];b.glyphs[e]={w:g.w,k:{},d:g.d&&"M"+g.d[Y](/[mlcxtrv]/g,function(a){return({l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"})[a]||"M"})+"z"};if(g.k)for(var h in g.k)g[f](h)&&(b.glyphs[e].k[h]=g.k[h])}}return a};k.getFont=function(b,c,d,e){e=e||"normal";d=d||"normal";c=+c||({normal:400,bold:700,lighter:300,bolder:800})[c]||400;if(!a.fonts)return;var g=a.fonts[b];if(!g){var h=new RegExp("(^|\\s)"+b[Y](/[^\w\d\s+!~.:_-]/g,p)+"(\\s|$)","i");for(var i in a.fonts)if(a.fonts[f](i)){if(h.test(i)){g=a.fonts[i];break}}}var j;if(g)for(var k=0,l=g[w];k<l;k++){j=g[k];if(j.face["font-weight"]==c&&(j.face["font-style"]==d||!j.face["font-style"])&&j.face["font-stretch"]==e)break}return j};k.print=function(c,d,e,f,g,h,i){h=h||"middle";i=z(A(i||0,1),-1);var j=this.set(),k=r(e)[s](p),l=0,m=p,n;a.is(f,e)&&(f=this.getFont(f));if(f){n=(g||16)/f.face["units-per-em"];var o=f.face.bbox.split(b),q=+o[0],t=+o[1]+(h=="baseline"?o[3]-o[1]+ +f.face.descent:(o[3]-o[1])/2);for(var u=0,v=k[w];u<v;u++){var x=u&&f.glyphs[k[u-1]]||{},y=f.glyphs[k[u]];l+=u?(x.w||f.w)+(x.k&&x.k[k[u]]||0)+f.w*i:0;y&&y.d&&j[L](this.path(y.d).attr({fill:"#000",stroke:"none",translation:[l,0]}))}j.scale(n,n,q,t).translate(c-q,d-t)}return j};a.format=function(b,c){var e=a.is(c,G)?[0][n](c):arguments;b&&a.is(b,F)&&e[w]-1&&(b=b[Y](d,function(a,b){return e[++b]==null?p:e[b]}));return b||p};a.ninja=function(){i.was?h.Raphael=i.is:delete Raphael;return a};a.el=bO;a.st=cC[e];i.was?h.Raphael=a:Raphael=a})()

/* 9. menu.min.js
-----------------------------------------------------------------------------------------------*/
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./position"],a):a(jQuery)}(function(a){return a.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(a){a.preventDefault()},"click .ui-menu-item":function(b){var c=a(b.target);!this.mouseHandled&&c.not(".ui-state-disabled").length&&(this.select(b),b.isPropagationStopped()||(this.mouseHandled=!0),c.has(".ui-menu").length?this.expand(b):!this.element.is(":focus")&&a(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(b){if(!this.previousFilter){var c=a(b.currentTarget);c.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(b,c)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(a,b){var c=this.active||this.element.find(this.options.items).eq(0);b||this.focus(a,c)},blur:function(b){this._delay(function(){a.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(b)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(a){this._closeOnDocumentClick(a)&&this.collapseAll(a),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var b=a(this);b.data("ui-menu-submenu-carat")&&b.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(b){var c,d,e,f,g=!0;switch(b.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(b);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(b);break;case a.ui.keyCode.HOME:this._move("first","first",b);break;case a.ui.keyCode.END:this._move("last","last",b);break;case a.ui.keyCode.UP:this.previous(b);break;case a.ui.keyCode.DOWN:this.next(b);break;case a.ui.keyCode.LEFT:this.collapse(b);break;case a.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(b);break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(b);break;case a.ui.keyCode.ESCAPE:this.collapse(b);break;default:g=!1,d=this.previousFilter||"",e=String.fromCharCode(b.keyCode),f=!1,clearTimeout(this.filterTimer),e===d?f=!0:e=d+e,c=this._filterMenuItems(e),c=f&&-1!==c.index(this.active.next())?this.active.nextAll(".ui-menu-item"):c,c.length||(e=String.fromCharCode(b.keyCode),c=this._filterMenuItems(e)),c.length?(this.focus(b,c),this.previousFilter=e,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}g&&b.preventDefault()},_activate:function(a){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(a):this.select(a))},refresh:function(){var b,c,d=this,e=this.options.icons.submenu,f=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),f.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var b=a(this),c=b.parent(),d=a("<span>").addClass("ui-menu-icon ui-icon "+e).data("ui-menu-submenu-carat",!0);c.attr("aria-haspopup","true").prepend(d),b.attr("aria-labelledby",c.attr("id"))}),b=f.add(this.element),c=b.find(this.options.items),c.not(".ui-menu-item").each(function(){var b=a(this);d._isDivider(b)&&b.addClass("ui-widget-content ui-menu-divider")}),c.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),c.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(a,b){"icons"===a&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu),"disabled"===a&&this.element.toggleClass("ui-state-disabled",!!b).attr("aria-disabled",b),this._super(a,b)},focus:function(a,b){var c,d;this.blur(a,a&&"focus"===a.type),this._scrollIntoView(b),this.active=b.first(),d=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),a&&"keydown"===a.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),c=b.children(".ui-menu"),c.length&&a&&/^mouse/.test(a.type)&&this._startOpening(c),this.activeMenu=b.parent(),this._trigger("focus",a,{item:b})},_scrollIntoView:function(b){var c,d,e,f,g,h;this._hasScroll()&&(c=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,d=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,e=b.offset().top-this.activeMenu.offset().top-c-d,f=this.activeMenu.scrollTop(),g=this.activeMenu.height(),h=b.outerHeight(),0>e?this.activeMenu.scrollTop(f+e):e+h>g&&this.activeMenu.scrollTop(f+e-g+h))},blur:function(a,b){b||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",a,{item:this.active}))},_startOpening:function(a){clearTimeout(this.timer),"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(a)},this.delay))},_open:function(b){var c=a.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden","true"),b.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)},collapseAll:function(b,c){clearTimeout(this.timer),this.timer=this._delay(function(){var d=c?this.element:a(b&&b.target).closest(this.element.find(".ui-menu"));d.length||(d=this.element),this._close(d),this.blur(b),this.activeMenu=d},this.delay)},_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(b){return!a(b.target).closest(".ui-menu").length},_isDivider:function(a){return!/[^\-\u2014\u2013\s]/.test(a.text())},collapse:function(a){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);b&&b.length&&(this._close(),this.focus(a,b))},expand:function(a){var b=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();b&&b.length&&(this._open(b.parent()),this._delay(function(){this.focus(a,b)}))},next:function(a){this._move("next","first",a)},previous:function(a){this._move("prev","last",a)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(a,b,c){var d;this.active&&(d="first"===a||"last"===a?this.active["first"===a?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[a+"All"](".ui-menu-item").eq(0)),d&&d.length&&this.active||(d=this.activeMenu.find(this.options.items)[b]()),this.focus(c,d)},nextPage:function(b){var c,d,e;return this.active?void(this.isLastItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d-e<0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(b)},previousPage:function(b){var c,d,e;return this.active?void(this.isFirstItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d+e>0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items).first()))):void this.next(b)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(b){this.active=this.active||a(b.target).closest(".ui-menu-item");var c={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(b,!0),this._trigger("select",b,c)},_filterMenuItems:function(b){var c=b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),d=new RegExp("^"+c,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return d.test(a.trim(a(this).text()))})}})});

/* 10. position.min.js
-----------------------------------------------------------------------------------------------*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){return function(){function b(a,b,c){return[parseFloat(a[0])*(n.test(a[0])?b/100:1),parseFloat(a[1])*(n.test(a[1])?c/100:1)]}function c(b,c){return parseInt(a.css(b,c),10)||0}function d(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}a.ui=a.ui||{};var e,f,g=Math.max,h=Math.abs,i=Math.round,j=/left|center|right/,k=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,m=/^\w+/,n=/%$/,o=a.fn.position;a.position={scrollbarWidth:function(){if(void 0!==e)return e;var b,c,d=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=d.children()[0];return a("body").append(d),b=f.offsetWidth,d.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=d[0].clientWidth),d.remove(),e=b-c},getScrollInfo:function(b){var c=b.isWindow||b.isDocument?"":b.element.css("overflow-x"),d=b.isWindow||b.isDocument?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]),e=!!c[0]&&9===c[0].nodeType;return{element:c,isWindow:d,isDocument:e,offset:c.offset()||{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:d||e?c.width():c.outerWidth(),height:d||e?c.height():c.outerHeight()}}},a.fn.position=function(e){if(!e||!e.of)return o.apply(this,arguments);e=a.extend({},e);var n,p,q,r,s,t,u=a(e.of),v=a.position.getWithinInfo(e.within),w=a.position.getScrollInfo(v),x=(e.collision||"flip").split(" "),y={};return t=d(u),u[0].preventDefault&&(e.at="left top"),p=t.width,q=t.height,r=t.offset,s=a.extend({},r),a.each(["my","at"],function(){var a,b,c=(e[this]||"").split(" ");1===c.length&&(c=j.test(c[0])?c.concat(["center"]):k.test(c[0])?["center"].concat(c):["center","center"]),c[0]=j.test(c[0])?c[0]:"center",c[1]=k.test(c[1])?c[1]:"center",a=l.exec(c[0]),b=l.exec(c[1]),y[this]=[a?a[0]:0,b?b[0]:0],e[this]=[m.exec(c[0])[0],m.exec(c[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?s.left+=p:"center"===e.at[0]&&(s.left+=p/2),"bottom"===e.at[1]?s.top+=q:"center"===e.at[1]&&(s.top+=q/2),n=b(y.at,p,q),s.left+=n[0],s.top+=n[1],this.each(function(){var d,j,k=a(this),l=k.outerWidth(),m=k.outerHeight(),o=c(this,"marginLeft"),t=c(this,"marginTop"),z=l+o+c(this,"marginRight")+w.width,A=m+t+c(this,"marginBottom")+w.height,B=a.extend({},s),C=b(y.my,k.outerWidth(),k.outerHeight());"right"===e.my[0]?B.left-=l:"center"===e.my[0]&&(B.left-=l/2),"bottom"===e.my[1]?B.top-=m:"center"===e.my[1]&&(B.top-=m/2),B.left+=C[0],B.top+=C[1],f||(B.left=i(B.left),B.top=i(B.top)),d={marginLeft:o,marginTop:t},a.each(["left","top"],function(b,c){a.ui.position[x[b]]&&a.ui.position[x[b]][c](B,{targetWidth:p,targetHeight:q,elemWidth:l,elemHeight:m,collisionPosition:d,collisionWidth:z,collisionHeight:A,offset:[n[0]+C[0],n[1]+C[1]],my:e.my,at:e.at,within:v,elem:k})}),e.using&&(j=function(a){var b=r.left-B.left,c=b+p-l,d=r.top-B.top,f=d+q-m,i={target:{element:u,left:r.left,top:r.top,width:p,height:q},element:{element:k,left:B.left,top:B.top,width:l,height:m},horizontal:0>c?"left":b>0?"right":"center",vertical:0>f?"top":d>0?"bottom":"middle"};l>p&&h(b+c)<p&&(i.horizontal="center"),m>q&&h(d+f)<q&&(i.vertical="middle"),i.important=g(h(b),h(c))>g(h(d),h(f))?"horizontal":"vertical",e.using.call(this,a,i)}),k.offset(a.extend(B,{using:j}))})},a.ui.position={fit:{left:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollLeft:d.offset.left,f=d.width,h=a.left-b.collisionPosition.marginLeft,i=e-h,j=h+b.collisionWidth-f-e;b.collisionWidth>f?i>0&&0>=j?(c=a.left+i+b.collisionWidth-f-e,a.left+=i-c):a.left=j>0&&0>=i?e:i>j?e+f-b.collisionWidth:e:i>0?a.left+=i:j>0?a.left-=j:a.left=g(a.left-h,a.left)},top:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollTop:d.offset.top,f=b.within.height,h=a.top-b.collisionPosition.marginTop,i=e-h,j=h+b.collisionHeight-f-e;b.collisionHeight>f?i>0&&0>=j?(c=a.top+i+b.collisionHeight-f-e,a.top+=i-c):a.top=j>0&&0>=i?e:i>j?e+f-b.collisionHeight:e:i>0?a.top+=i:j>0?a.top-=j:a.top=g(a.top-h,a.top)}},flip:{left:function(a,b){var c,d,e=b.within,f=e.offset.left+e.scrollLeft,g=e.width,i=e.isWindow?e.scrollLeft:e.offset.left,j=a.left-b.collisionPosition.marginLeft,k=j-i,l=j+b.collisionWidth-g-i,m="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,n="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,o=-2*b.offset[0];0>k?(c=a.left+m+n+o+b.collisionWidth-g-f,(0>c||c<h(k))&&(a.left+=m+n+o)):l>0&&(d=a.left-b.collisionPosition.marginLeft+m+n+o-i,(d>0||h(d)<l)&&(a.left+=m+n+o))},top:function(a,b){var c,d,e=b.within,f=e.offset.top+e.scrollTop,g=e.height,i=e.isWindow?e.scrollTop:e.offset.top,j=a.top-b.collisionPosition.marginTop,k=j-i,l=j+b.collisionHeight-g-i,m="top"===b.my[1],n=m?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,o="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,p=-2*b.offset[1];0>k?(d=a.top+n+o+p+b.collisionHeight-g-f,(0>d||d<h(k))&&(a.top+=n+o+p)):l>0&&(c=a.top-b.collisionPosition.marginTop+n+o+p-i,(c>0||h(c)<l)&&(a.top+=n+o+p))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}},function(){var b,c,d,e,g,h=document.getElementsByTagName("body")[0],i=document.createElement("div");b=document.createElement(h?"div":"body"),d={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},h&&a.extend(d,{position:"absolute",left:"-1000px",top:"-1000px"});for(g in d)b.style[g]=d[g];b.appendChild(i),c=h||document.documentElement,c.insertBefore(b,c.firstChild),i.style.cssText="position: absolute; left: 10.7432222px;",e=a(i).offset().left,f=e>10&&11>e,b.innerHTML="",c.removeChild(b)}()}(),a.ui.position});

/* 11. jquery.magnific-popup.min.js
-----------------------------------------------------------------------------------------------*/
(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;r.length>a;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);

/* 12. jquery.autosize.js
-----------------------------------------------------------------------------------------------*/
(function ($) {var defaults = {className: 'autosizejs', append: '', callback: false, resizeDelay: 10 }, copy = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>', typographyStyles = ['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'letterSpacing', 'textTransform', 'wordSpacing', 'textIndent'], mirrored, mirror = $(copy).data('autosize', true)[0]; mirror.style.lineHeight = '99px'; if ($(mirror).css('lineHeight') === '99px') {typographyStyles.push('lineHeight'); } mirror.style.lineHeight = ''; $.fn.autosize = function (options) {if (!this.length) {return this; } options = $.extend({}, defaults, options || {}); if (mirror.parentNode !== document.body) {$(document.body).append(mirror); } return this.each(function () {var ta = this, $ta = $(ta), maxHeight, minHeight, boxOffset = 0, callback = $.isFunction(options.callback), originalStyles = {height: ta.style.height, overflow: ta.style.overflow, overflowY: ta.style.overflowY, wordWrap: ta.style.wordWrap, resize: ta.style.resize }, timeout, width = $ta.width(); if ($ta.data('autosize')) {return; } $ta.data('autosize', true); if ($ta.css('box-sizing') === 'border-box' || $ta.css('-moz-box-sizing') === 'border-box' || $ta.css('-webkit-box-sizing') === 'border-box'){boxOffset = $ta.outerHeight() - $ta.height(); } minHeight = Math.max(parseInt($ta.css('minHeight'), 10) - boxOffset || 0, $ta.height()); $ta.css({overflow: 'hidden', overflowY: 'hidden', wordWrap: 'break-word', resize: ($ta.css('resize') === 'none' || $ta.css('resize') === 'vertical') ? 'none' : 'horizontal'}); function setWidth() {var style, width; if ('getComputedStyle' in window) {style = window.getComputedStyle(ta, null); width = ta.getBoundingClientRect().width; $.each(['paddingLeft', 'paddingRight', 'borderLeftWidth', 'borderRightWidth'], function(i,val){width -= parseInt(style[val],10); }); mirror.style.width = width + 'px'; } else {mirror.style.width = Math.max($ta.width(), 0) + 'px'; } } function initMirror() {var styles = {}; mirrored = ta; mirror.className = options.className; maxHeight = parseInt($ta.css('maxHeight'), 10); $.each(typographyStyles, function(i,val){styles[val] = $ta.css(val); }); $(mirror).css(styles); setWidth(); if (window.chrome) {var width = ta.style.width; ta.style.width = '0px'; var ignore = ta.offsetWidth; ta.style.width = width; } } function adjust() {var height, original; if (mirrored !== ta) {initMirror(); } else {setWidth(); } mirror.value = ta.value + options.append; mirror.style.overflowY = ta.style.overflowY; original = parseInt(ta.style.height,10); mirror.scrollTop = 0; mirror.scrollTop = 9e4; height = mirror.scrollTop; if (maxHeight && height > maxHeight) {ta.style.overflowY = 'scroll'; height = maxHeight; } else {ta.style.overflowY = 'hidden'; if (height < minHeight) {height = minHeight; } } height += boxOffset; if (original !== height) {ta.style.height = height + 'px'; if (callback) {options.callback.call(ta,ta); } } } function resize () {clearTimeout(timeout); timeout = setTimeout(function(){var newWidth = $ta.width(); if (newWidth !== width) {width = newWidth; adjust(); } }, parseInt(options.resizeDelay,10)); } if ('onpropertychange' in ta) {if ('oninput' in ta) {$ta.on('input.autosize keyup.autosize', adjust); } else {$ta.on('propertychange.autosize', function(){if(event.propertyName === 'value'){adjust(); } }); } } else {$ta.on('input.autosize', adjust); } if (options.resizeDelay !== false) {$(window).on('resize.autosize', resize); } $ta.on('autosize.resize', adjust); $ta.on('autosize.resizeIncludeStyle', function() {mirrored = null; adjust(); }); $ta.on('autosize.destroy', function(){mirrored = null; clearTimeout(timeout); $(window).off('resize', resize); $ta .off('autosize') .off('.autosize') .css(originalStyles) .removeData('autosize'); }); adjust(); }); }; }(window.jQuery || window.$));

/* 13. jquery.isotope.min.js
-----------------------------------------------------------------------------------------------*/
(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==n.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var o=0,s=r.length;s>o;o++){var a=r[o];a()}}}function o(o){return o.bind(n,"DOMContentLoaded",i),o.bind(n,"readystatechange",i),o.bind(t,"load",i),e}var n=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],o)):t.docReady=o(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function o(t){function o(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var o=r(t);if("none"===o.display)return i();var n={};n.width=t.offsetWidth,n.height=t.offsetHeight;for(var h=n.isBorderBox=!(!p||!o[p]||"border-box"!==o[p]),f=0,c=s.length;c>f;f++){var d=s[f],l=o[d];l=a(t,l);var y=parseFloat(l);n[d]=isNaN(y)?0:y}var m=n.paddingLeft+n.paddingRight,g=n.paddingTop+n.paddingBottom,v=n.marginLeft+n.marginRight,_=n.marginTop+n.marginBottom,I=n.borderLeftWidth+n.borderRightWidth,L=n.borderTopWidth+n.borderBottomWidth,z=h&&u,S=e(o.width);S!==!1&&(n.width=S+(z?0:m+I));var b=e(o.height);return b!==!1&&(n.height=b+(z?0:g+L)),n.innerWidth=n.width-(m+I),n.innerHeight=n.height-(g+L),n.outerWidth=n.width+v,n.outerHeight=n.height+_,n}}function a(t,e){if(n||-1===e.indexOf("%"))return e;var i=t.style,o=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=o,s&&(r.left=s),e}var u,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var o=r(t);u=200===e(o.width),i.removeChild(t)}}(),o}var n=t.getComputedStyle,r=n?function(t){return n(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function o(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){o(t);for(var i=t.parentNode.querySelectorAll(e),n=0,r=i.length;r>n;n++)if(i[n]===t)return!0;return!1}function r(t,e){return o(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,o=t.length;o>i;i++){var n=t[i],r=n+"MatchesSelector";if(e[r])return r}}();if(a){var u=document.createElement("div"),p=i(u,"div");s=p?i:r}else s=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],d=["transform","transition","transitionDuration","transitionProperty"],l=function(){for(var t={},e=0,i=d.length;i>e;e++){var o=d[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=l[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=d(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,d,l,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!c(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(c(s))if(e){l(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=d(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):c(o)&&(i=o),this[t]=i?d(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=d(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=d(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,c=i[s],d=c.getAttribute(n);try{f=d&&JSON.parse(d)}catch(l){u&&u.error("Error parsing "+n+" on "+c.nodeName.toLowerCase()+(c.id?"#"+c.id:"")+": "+l);continue}var y=new o(c,f);p&&p.data(c,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,c="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},d=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}return e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0},e.prototype._getItemLayoutPosition=function(t){t.getSize(),0!==this.x&&t.size.outerWidth+this.x>this.isotope.size.innerWidth&&(this.x=0,this.y=this.maxY);var e={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=t.size.outerWidth,e},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var c=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});c.Item=u,c.LayoutMode=h,c.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},c.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},c.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e},c.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},c.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},c.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},c.prototype.arrange=function(t){this.option(t),this._getIsInstant(),this.filteredItems=this._filter(this.items),this._sort(),this._layout()},c.prototype._init=c.prototype.arrange,c.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},c.prototype._filter=function(t){function e(){f.reveal(n),f.hide(r)}var i=this.options.filter;i=i||"*";for(var o=[],n=[],r=[],s=this._getFilterTest(i),a=0,u=t.length;u>a;a++){var p=t[a];if(!p.isIgnored){var h=s(p);h&&o.push(p),h&&p.isHidden?n.push(p):h||p.isHidden||r.push(p)}}var f=this;return this._isInstant?this._noTransition(e):e(),o},c.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},c.prototype.updateSortData=function(t){this._getSorters(),t=o(t);var e=this.getItems(t);e=e.length?e:this.items,this._updateItemsSortData(e)
},c.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=d(i)}},c.prototype._updateItemsSortData=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];o.updateSortData()}};var d=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=c.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();c.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},c.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},c.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},c.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},c.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},c.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},c.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},c.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},c.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},c.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps();var o=this._filterRevealAdded(e);this.layoutItems(i),this.filteredItems=o.concat(this.filteredItems)}},c.prototype._filterRevealAdded=function(t){var e=this._noTransition(function(){return this._filter(t)});return this.layoutItems(e,!0),this.reveal(e),t},c.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e);for(this._noTransition(function(){this.hide(r)}),i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var l=c.prototype.remove;return c.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(l.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},c.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},c}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);

/* 14. jquery.formstyler.js
-----------------------------------------------------------------------------------------------*/
(function(factory) {if (typeof define === 'function' && define.amd) {define(['jquery'], factory); } else if (typeof exports === 'object') {module.exports = factory(require('jquery')); } else {factory(jQuery); } }(function($) {$.fn.styler = function(options) {var opt = $.extend({wrapper: 'form', idSuffix: '-styler', filePlaceholder: 'The file is not selected', fileBrowse: 'Review...', selectPlaceholder: 'Choose an option...', selectSearch: false, selectSearchLimit: 10, selectSearchNotFound: 'No matches found', selectSearchPlaceholder: 'Search...', selectVisibleOptions: 0, singleSelectzIndex: '100', selectSmartPositioning: true, onSelectOpened: function() {}, onSelectClosed: function() {}, onFormStyled: function() {} }, options); return this.each(function() {var el = $(this); function Attributes() {var id = '', title = '', classes = '', dataList = ''; if (el.attr('id') !== undefined && el.attr('id') !== '') id = ' id="' + el.attr('id') + opt.idSuffix + '"'; if (el.attr('title') !== undefined && el.attr('title') !== '') title = ' title="' + el.attr('title') + '"'; if (el.attr('class') !== undefined && el.attr('class') !== '') classes = ' ' + el.attr('class'); var data = el.data(); for (var i in data) {if (data[i] !== '') dataList += ' data-' + i + '="' + data[i] + '"'; } id += dataList; this.id = id; this.title = title; this.classes = classes; } if (el.is(':checkbox')) {el.each(function() {if (el.parent('div.jq-checkbox').length < 1) {var checkboxOutput = function() {var att = new Attributes(); var checkbox = $('<div' + att.id + ' class="jq-checkbox' + att.classes + '"' + att.title + '><div class="jq-checkbox__div"></div></div>'); el.css({position: 'absolute', zIndex: '-1', opacity: 0, margin: 0, padding: 0 }).after(checkbox).prependTo(checkbox); checkbox.attr('unselectable', 'on').css({'-webkit-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', '-o-user-select': 'none', 'user-select': 'none', display: 'inline-block', position: 'relative', overflow: 'hidden'}); if (el.is(':checked')) checkbox.addClass('checked'); if (el.is(':disabled')) checkbox.addClass('disabled'); checkbox.on('click.styler', function() {if (!checkbox.is('.disabled')) {if (el.is(':checked')) {el.prop('checked', false); checkbox.removeClass('checked'); } else {el.prop('checked', true); checkbox.addClass('checked'); } el.change(); return false; } else {return false; } }); el.closest('label').add('label[for="' + el.attr('id') + '"]').click(function(e) {if (!$(e.target).is('a')) {checkbox.click(); e.preventDefault(); } }); el.on('change.styler', function() {if (el.is(':checked')) checkbox.addClass('checked'); else checkbox.removeClass('checked'); }) .on('keydown.styler', function(e) {if (e.which == 32) checkbox.click(); }) .on('focus.styler', function() {if (!checkbox.is('.disabled')) checkbox.addClass('focused'); }) .on('blur.styler', function() {checkbox.removeClass('focused'); }); }; checkboxOutput(); el.on('refresh', function() {el.off('.styler').parent().before(el).remove(); checkboxOutput(); }); } }); } else if (el.is(':radio')) {el.each(function() {if (el.parent('div.jq-radio').length < 1) {var radioOutput = function() {var att = new Attributes(); var radio = $('<div' + att.id + ' class="jq-radio' + att.classes + '"' + att.title + '><div class="jq-radio__div"></div></div>'); el.css({position: 'absolute', zIndex: '-1', opacity: 0, margin: 0, padding: 0 }).after(radio).prependTo(radio); radio.attr('unselectable', 'on').css({'-webkit-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', '-o-user-select': 'none', 'user-select': 'none', display: 'inline-block', position: 'relative'}); if (el.is(':checked')) radio.addClass('checked'); if (el.is(':disabled')) radio.addClass('disabled'); radio.on('click.styler', function() {if (!radio.is('.disabled')) {radio.closest(opt.wrapper).find('input[name="' + el.attr('name') + '"]').prop('checked', false).parent().removeClass('checked'); el.prop('checked', true).parent().addClass('checked'); el.change(); return false; } else {return false; } }); el.closest('label').add('label[for="' + el.attr('id') + '"]').click(function(e) {if (!$(e.target).is('a')) {radio.click(); e.preventDefault(); } }); el.on('change.styler', function() {el.parent().addClass('checked'); }) .on('focus.styler', function() {if (!radio.is('.disabled')) radio.addClass('focused'); }) .on('blur.styler', function() {radio.removeClass('focused'); }); }; radioOutput(); el.on('refresh', function() {el.off('.styler').parent().before(el).remove(); radioOutput(); }); } }); } else if (el.is(':file')) {el.css({position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', opacity: 0, margin: 0, padding: 0 }).each(function() {if (el.parent('div.jq-file').length < 1) {var fileOutput = function() {var att = new Attributes(); var placeholder = el.data('placeholder'); if (placeholder === undefined) placeholder = opt.filePlaceholder; var browse = el.data('browse'); if (browse === undefined || browse === '') browse = opt.fileBrowse; var file = $('<div' + att.id + ' class="jq-file' + att.classes + '"' + att.title + ' style="display: inline-block; position: relative; overflow: hidden"></div>'); var name = $('<div class="jq-file__name">' + placeholder + '</div>').appendTo(file); $('<div class="jq-file__browse">' + browse + '</div>').appendTo(file); el.after(file); file.append(el); if (el.is(':disabled')) file.addClass('disabled'); el.on('change.styler', function() {var value = el.val(); if (el.is('[multiple]')) {value = ''; var files = el[0].files; for (var i = 0; i < files.length; i++) {value += ( (i > 0) ? ', ' : '' ) + files[i].name; } } name.text(value.replace(/.+[\\\/]/, '')); if (value === '') {name.text(placeholder); file.removeClass('changed'); } else {file.addClass('changed'); } }) .on('focus.styler', function() {file.addClass('focused'); }) .on('blur.styler', function() {file.removeClass('focused'); }) .on('click.styler', function() {file.removeClass('focused'); }); }; fileOutput(); el.on('refresh', function() {el.off('.styler').parent().before(el).remove(); fileOutput(); }); } }); } else if (el.is('select')) {el.each(function() {if (el.parent('div.jqselect').length < 1) {var selectboxOutput = function() {function preventScrolling(selector) {selector.off('mousewheel DOMMouseScroll').on('mousewheel DOMMouseScroll', function(e) {var scrollTo = null; if (e.type == 'mousewheel') { scrollTo = (e.originalEvent.wheelDelta * -1); } else if (e.type == 'DOMMouseScroll') { scrollTo = 40 * e.originalEvent.detail; } if (scrollTo) {e.stopPropagation(); e.preventDefault(); $(this).scrollTop(scrollTo + $(this).scrollTop()); } }); } var option = $('option', el); var list = ''; function makeList() {for (var i = 0, len = option.length; i < len; i++) {var li = '', liClass = '', liClasses = '', dataList = '', optionClass = '', optgroupClass = '', dataJqfsClass = ''; var disabled = 'disabled'; var selDis = 'selected sel disabled'; if (option.eq(i).prop('selected')) liClass = 'selected sel'; if (option.eq(i).is(':disabled')) liClass = disabled; if (option.eq(i).is(':selected:disabled')) liClass = selDis; if (option.eq(i).attr('class') !== undefined) {optionClass = ' ' + option.eq(i).attr('class'); dataJqfsClass = ' data-jqfs-class="' + option.eq(i).attr('class') + '"'; } var data = option.eq(i).data(); for (var k in data) {if (data[k] !== '') dataList += ' data-' + k + '="' + data[k] + '"'; } if ( (liClass + optionClass) !== '' )	liClasses = ' class="' + liClass + optionClass + '"'; li = '<li' + dataJqfsClass + dataList + liClasses + '>'+ option.eq(i).html() +'</li>'; if (option.eq(i).parent().is('optgroup')) {if (option.eq(i).parent().attr('class') !== undefined) optgroupClass = ' ' + option.eq(i).parent().attr('class'); li = '<li' + dataJqfsClass + ' class="' + liClass + optionClass + ' option' + optgroupClass + '">'+ option.eq(i).html() +'</li>'; if (option.eq(i).is(':first-child')) {li = '<li class="optgroup' + optgroupClass + '">' + option.eq(i).parent().attr('label') + '</li>' + li; } } list += li; } } function doSelect() {var att = new Attributes(); var searchHTML = ''; var selectPlaceholder = el.data('placeholder'); var selectSearch = el.data('search'); var selectSearchLimit = el.data('search-limit'); var selectSearchNotFound = el.data('search-not-found'); var selectSearchPlaceholder = el.data('search-placeholder'); var singleSelectzIndex = el.data('z-index'); var selectSmartPositioning = el.data('smart-positioning'); if (selectPlaceholder === undefined) selectPlaceholder = opt.selectPlaceholder; if (selectSearch === undefined || selectSearch === '') selectSearch = opt.selectSearch; if (selectSearchLimit === undefined || selectSearchLimit === '') selectSearchLimit = opt.selectSearchLimit; if (selectSearchNotFound === undefined || selectSearchNotFound === '') selectSearchNotFound = opt.selectSearchNotFound; if (selectSearchPlaceholder === undefined) selectSearchPlaceholder = opt.selectSearchPlaceholder; if (singleSelectzIndex === undefined || singleSelectzIndex === '') singleSelectzIndex = opt.singleSelectzIndex; if (selectSmartPositioning === undefined || selectSmartPositioning === '') selectSmartPositioning = opt.selectSmartPositioning; var selectbox = $('<div' + att.id + ' class="jq-selectbox jqselect' + att.classes + '" style="display: inline-block; position: relative; z-index:' + singleSelectzIndex + '">' + '<div class="jq-selectbox__select"' + att.title + ' style="position: relative">' + '<div class="jq-selectbox__select-text"></div>' + '<div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div>' + '</div>' + '</div>'); el.css({margin: 0, padding: 0}).after(selectbox).prependTo(selectbox); var divSelect = $('div.jq-selectbox__select', selectbox); var divText = $('div.jq-selectbox__select-text', selectbox); var optionSelected = option.filter(':selected'); makeList(); if (selectSearch) searchHTML = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + selectSearchPlaceholder + '"></div>' + '<div class="jq-selectbox__not-found">' + selectSearchNotFound + '</div>'; var dropdown = $('<div class="jq-selectbox__dropdown" style="position: absolute">' + searchHTML + '<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' + list + '</ul>' + '</div>'); selectbox.append(dropdown); var ul = $('ul', dropdown); var li = $('li', dropdown); var search = $('input', dropdown); var notFound = $('div.jq-selectbox__not-found', dropdown).hide(); if (li.length < selectSearchLimit) search.parent().hide(); if (el.val() === '') {divText.text(selectPlaceholder).addClass('placeholder'); } else {divText.text(optionSelected.text()); } var liWidth1 = 0, liWidth2 = 0; li.each(function() {var l = $(this); l.css({'display': 'inline-block'}); if (l.innerWidth() > liWidth1) {liWidth1 = l.innerWidth(); liWidth2 = l.width(); } l.css({'display': ''}); }); var selClone = selectbox.clone().appendTo('body').width('auto'); var selCloneWidth = selClone.find('select').outerWidth(); selClone.remove(); if (selCloneWidth == selectbox.width()) {divText.width(liWidth2); } if (liWidth1 > selectbox.width()) {dropdown.width(liWidth1); } if (divText.is('.placeholder') && (divText.width() > liWidth1)) {divText.width(divText.width()); } if (option.first().text() === '' && el.data('placeholder') !== '') {li.first().hide(); } el.css({position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', opacity: 0 }); var selectHeight = selectbox.outerHeight(); var searchHeight = search.outerHeight(); var isMaxHeight = ul.css('max-height'); var liSelected = li.filter('.selected'); if (liSelected.length < 1) li.first().addClass('selected sel'); if (li.data('li-height') === undefined) li.data('li-height', li.outerHeight()); var position = dropdown.css('top'); if (dropdown.css('left') == 'auto') dropdown.css({left: 0}); if (dropdown.css('top') == 'auto') dropdown.css({top: selectHeight}); dropdown.hide(); if (liSelected.length) {if (option.first().text() != optionSelected.text()) {selectbox.addClass('changed'); } selectbox.data('jqfs-class', liSelected.data('jqfs-class')); selectbox.addClass(liSelected.data('jqfs-class')); } if (el.is(':disabled')) {selectbox.addClass('disabled'); return false; } divSelect.click(function() {if ($('div.jq-selectbox').filter('.opened').length) {opt.onSelectClosed.call($('div.jq-selectbox').filter('.opened')); } el.focus(); var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false; if (iOS) return; var win = $(window); var liHeight = li.data('li-height'); var topOffset = selectbox.offset().top; var bottomOffset = win.height() - selectHeight - (topOffset - win.scrollTop()); var visible = el.data('visible-options'); if (visible === undefined || visible === '') visible = opt.selectVisibleOptions; var	minHeight = liHeight * 5; var	newHeight = liHeight * visible; if (visible > 0 && visible < 6) minHeight = newHeight; if (visible === 0) newHeight = 'auto'; var dropDown = function() {dropdown.height('auto').css({bottom: 'auto', top: position}); var maxHeightBottom = function() {ul.css('max-height', Math.floor((bottomOffset - 20 - searchHeight) / liHeight) * liHeight); }; maxHeightBottom(); ul.css('max-height', newHeight); if (isMaxHeight != 'none') {ul.css('max-height', isMaxHeight); } if (bottomOffset < (dropdown.outerHeight() + 20)) {maxHeightBottom(); } }; var dropUp = function() {dropdown.height('auto').css({top: 'auto', bottom: position}); var maxHeightTop = function() {ul.css('max-height', Math.floor((topOffset - win.scrollTop() - 20 - searchHeight) / liHeight) * liHeight); }; maxHeightTop(); ul.css('max-height', newHeight); if (isMaxHeight != 'none') {ul.css('max-height', isMaxHeight); } if ((topOffset - win.scrollTop() - 20) < (dropdown.outerHeight() + 20)) {maxHeightTop(); } }; if (selectSmartPositioning === true || selectSmartPositioning === 1) {if (bottomOffset > (minHeight + searchHeight + 20))	{dropDown(); selectbox.removeClass('dropup').addClass('dropdown'); } else {dropUp(); selectbox.removeClass('dropdown').addClass('dropup'); } } else if (selectSmartPositioning === false || selectSmartPositioning === 0) {if (bottomOffset > (minHeight + searchHeight + 20))	{dropDown(); selectbox.removeClass('dropup').addClass('dropdown'); } } $('div.jqselect').css({zIndex: (singleSelectzIndex - 1)}).removeClass('opened'); selectbox.css({zIndex: singleSelectzIndex}); if (dropdown.is(':hidden')) {$('div.jq-selectbox__dropdown:visible').hide(); dropdown.show(); selectbox.addClass('opened focused'); opt.onSelectOpened.call(selectbox); } else {dropdown.hide(); selectbox.removeClass('opened dropup dropdown'); if ($('div.jq-selectbox').filter('.opened').length) {opt.onSelectClosed.call(selectbox); } } if (search.length) {search.val('').keyup(); notFound.hide(); search.keyup(function() {var query = $(this).val(); li.each(function() {if (!$(this).html().match(new RegExp('.*?' + query + '.*?', 'i'))) {$(this).hide(); } else {$(this).show(); } }); if (option.first().text() === '' && el.data('placeholder') !== '') {li.first().hide(); } if (li.filter(':visible').length < 1) {notFound.show(); } else {notFound.hide(); } }); } if (li.filter('.selected').length) {if ( (ul.innerHeight() / liHeight) % 2 !== 0 ) liHeight = liHeight / 2; ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top - ul.innerHeight() / 2 + liHeight); } preventScrolling(ul); return false; }); li.hover(function() {$(this).siblings().removeClass('selected'); }); var selectedText = li.filter('.selected').text(); var selText = li.filter('.selected').text(); li.filter(':not(.disabled):not(.optgroup)').click(function() {el.focus(); var t = $(this); var liText = t.text(); if (!t.is('.selected')) {var index = t.index(); index -= t.prevAll('.optgroup').length; t.addClass('selected sel').siblings().removeClass('selected sel'); option.prop('selected', false).eq(index).prop('selected', true); selectedText = liText; divText.text(liText); if (selectbox.data('jqfs-class')) selectbox.removeClass(selectbox.data('jqfs-class')); selectbox.data('jqfs-class', t.data('jqfs-class')); selectbox.addClass(t.data('jqfs-class')); el.change(); } dropdown.hide(); selectbox.removeClass('opened dropup dropdown'); opt.onSelectClosed.call(selectbox); }); dropdown.mouseout(function() {$('li.sel', dropdown).addClass('selected'); }); el.on('change.styler', function() {divText.text(option.filter(':selected').text()).removeClass('placeholder'); li.removeClass('selected sel').not('.optgroup').eq(el[0].selectedIndex).addClass('selected sel'); if (option.first().text() != li.filter('.selected').text()) {selectbox.addClass('changed'); } else {selectbox.removeClass('changed'); } }) .on('focus.styler', function() {selectbox.addClass('focused'); $('div.jqselect').not('.focused').removeClass('opened dropup dropdown').find('div.jq-selectbox__dropdown').hide(); }) .on('blur.styler', function() {selectbox.removeClass('focused'); }) .on('keydown.styler keyup.styler', function(e) {var liHeight = li.data('li-height'); divText.text(option.filter(':selected').text()); li.removeClass('selected sel').not('.optgroup').eq(el[0].selectedIndex).addClass('selected sel'); if (e.which == 38 || e.which == 37 || e.which == 33 || e.which == 36) {ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top); } if (e.which == 40 || e.which == 39 || e.which == 34 || e.which == 35) {ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top - ul.innerHeight() + liHeight); } if (e.which == 13) {e.preventDefault(); dropdown.hide(); selectbox.removeClass('opened dropup dropdown'); opt.onSelectClosed.call(selectbox); } }).on('keydown.styler', function(e) {if (e.which == 32) {e.preventDefault(); divSelect.click(); } }); $(document).on('click', function(e) {if (!$(e.target).parents().hasClass('jq-selectbox') && e.target.nodeName != 'OPTION') {if ($('div.jq-selectbox').filter('.opened').length) {opt.onSelectClosed.call($('div.jq-selectbox').filter('.opened')); } if (search.length) search.val('').keyup(); dropdown.hide().find('li.sel').addClass('selected'); selectbox.removeClass('focused opened dropup dropdown'); } }); } function doMultipleSelect() {var att = new Attributes(); var selectbox = $('<div' + att.id + ' class="jq-select-multiple jqselect' + att.classes + '"' + att.title + ' style="display: inline-block; position: relative"></div>'); el.css({margin: 0, padding: 0}).after(selectbox); makeList(); selectbox.append('<ul>' + list + '</ul>'); var ul = $('ul', selectbox).css({'position': 'relative', 'overflow-x': 'hidden', '-webkit-overflow-scrolling': 'touch'}); var li = $('li', selectbox).attr('unselectable', 'on'); var size = el.attr('size'); var ulHeight = ul.outerHeight(); var liHeight = li.outerHeight(); if (size !== undefined && size > 0) {ul.css({'height': liHeight * size}); } else {ul.css({'height': liHeight * 4}); } if (ulHeight > selectbox.height()) {ul.css('overflowY', 'scroll'); preventScrolling(ul); if (li.filter('.selected').length) {ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top); } } el.prependTo(selectbox).css({position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', opacity: 0 }); if (el.is(':disabled')) {selectbox.addClass('disabled'); option.each(function() {if ($(this).is(':selected')) li.eq($(this).index()).addClass('selected'); }); } else {li.filter(':not(.disabled):not(.optgroup)').click(function(e) {el.focus(); var clkd = $(this); if(!e.ctrlKey && !e.metaKey) clkd.addClass('selected'); if(!e.shiftKey) clkd.addClass('first'); if(!e.ctrlKey && !e.metaKey && !e.shiftKey) clkd.siblings().removeClass('selected first'); if(e.ctrlKey || e.metaKey) {if (clkd.is('.selected')) clkd.removeClass('selected first'); else clkd.addClass('selected first'); clkd.siblings().removeClass('first'); } if(e.shiftKey) {var prev = false, next = false; clkd.siblings().removeClass('selected').siblings('.first').addClass('selected'); clkd.prevAll().each(function() {if ($(this).is('.first')) prev = true; }); clkd.nextAll().each(function() {if ($(this).is('.first')) next = true; }); if (prev) {clkd.prevAll().each(function() {if ($(this).is('.selected')) return false; else $(this).not('.disabled, .optgroup').addClass('selected'); }); } if (next) {clkd.nextAll().each(function() {if ($(this).is('.selected')) return false; else $(this).not('.disabled, .optgroup').addClass('selected'); }); } if (li.filter('.selected').length == 1) clkd.addClass('first'); } option.prop('selected', false); li.filter('.selected').each(function() {var t = $(this); var index = t.index(); if (t.is('.option')) index -= t.prevAll('.optgroup').length; option.eq(index).prop('selected', true); }); el.change(); }); option.each(function(i) {$(this).data('optionIndex', i); }); el.on('change.styler', function() {li.removeClass('selected'); var arrIndexes = []; option.filter(':selected').each(function() {arrIndexes.push($(this).data('optionIndex')); }); li.not('.optgroup').filter(function(i) {return $.inArray(i, arrIndexes) > -1; }).addClass('selected'); }) .on('focus.styler', function() {selectbox.addClass('focused'); }) .on('blur.styler', function() {selectbox.removeClass('focused'); }); if (ulHeight > selectbox.height()) {el.on('keydown.styler', function(e) {if (e.which == 38 || e.which == 37 || e.which == 33) {ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top - liHeight); } if (e.which == 40 || e.which == 39 || e.which == 34) {ul.scrollTop(ul.scrollTop() + li.filter('.selected:last').position().top - ul.innerHeight() + liHeight * 2); } }); } } } if (el.is('[multiple]')) {var Android = navigator.userAgent.match(/Android/i) ? true : false; var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false; if (Android || iOS) return; doMultipleSelect(); } else {doSelect(); } }; selectboxOutput(); el.on('refresh', function() {el.off('.styler').parent().before(el).remove(); selectboxOutput(); }); } }); } else if (el.is(':reset')) {el.on('click', function() {setTimeout(function() {el.closest(opt.wrapper).find('input, select').trigger('refresh'); }, 1); }); } }) .promise() .done(function() {opt.onFormStyled.call(); }); }; }));

/* 15. mouse.min.js
-----------------------------------------------------------------------------------------------*/
!function(a){"function"==typeof define&&define.amd?define(["jquery","./widget"],a):a(jQuery)}(function(a){var b=!1;return a(document).mouseup(function(){b=!1}),a.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){return!0===a.data(c.target,b.widgetName+".preventClickEvent")?(a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(c){if(!b){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(c),this._mouseDownEvent=c;var d=this,e=1===c.which,f="string"==typeof this.options.cancel&&c.target.nodeName?a(c.target).closest(this.options.cancel).length:!1;return e&&!f&&this._mouseCapture(c)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(c)!==!1,!this._mouseStarted)?(c.preventDefault(),!0):(!0===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),c.preventDefault(),b=!0,!0)):!0}},_mouseMove:function(b){if(this._mouseMoved){if(a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button)return this._mouseUp(b);if(!b.which)return this._mouseUp(b)}return(b.which||b.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(c){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,c.target===this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(c)),b=!1,!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})});

/* 16. sortable.min.js
-----------------------------------------------------------------------------------------------*/
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mouse","./widget"],a):a(jQuery)}(function(a){return a.widget("ui.sortable",a.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(a,b,c){return a>=b&&b+c>a},_isFloating:function(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))},_create:function(){this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(a,b){this._super(a,b),"handle"===a&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),a.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(b,c){var d=null,e=!1,f=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(b),a(b.target).parents().each(function(){return a.data(this,f.widgetName+"-item")===f?(d=a(this),!1):void 0}),a.data(b.target,f.widgetName+"-item")===f&&(d=a(b.target)),d&&(!this.options.handle||c||(a(this.options.handle,d).find("*").addBack().each(function(){this===b.target&&(e=!0)}),e))?(this.currentItem=d,this._removeCurrentsFromItems(),!0):!1)},_mouseStart:function(b,c,d){var e,f,g=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),g.containment&&this._setContainment(),g.cursor&&"auto"!==g.cursor&&(f=this.document.find("body"),this.storedCursor=f.css("cursor"),f.css("cursor",g.cursor),this.storedStylesheet=a("<style>*{ cursor: "+g.cursor+" !important; }</style>").appendTo(f)),g.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",g.opacity)),g.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",g.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!d)for(e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("activate",b,this._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){var c,d,e,f,g=this.options,h=!1;for(this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<g.scrollSensitivity?this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop+g.scrollSpeed:b.pageY-this.overflowOffset.top<g.scrollSensitivity&&(this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop-g.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<g.scrollSensitivity?this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft+g.scrollSpeed:b.pageX-this.overflowOffset.left<g.scrollSensitivity&&(this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft-g.scrollSpeed)):(b.pageY-this.document.scrollTop()<g.scrollSensitivity?h=this.document.scrollTop(this.document.scrollTop()-g.scrollSpeed):this.window.height()-(b.pageY-this.document.scrollTop())<g.scrollSensitivity&&(h=this.document.scrollTop(this.document.scrollTop()+g.scrollSpeed)),b.pageX-this.document.scrollLeft()<g.scrollSensitivity?h=this.document.scrollLeft(this.document.scrollLeft()-g.scrollSpeed):this.window.width()-(b.pageX-this.document.scrollLeft())<g.scrollSensitivity&&(h=this.document.scrollLeft(this.document.scrollLeft()+g.scrollSpeed))),h!==!1&&a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),c=this.items.length-1;c>=0;c--)if(d=this.items[c],e=d.item[0],f=this._intersectsWithPointer(d),f&&d.instance===this.currentContainer&&e!==this.currentItem[0]&&this.placeholder[1===f?"next":"prev"]()[0]!==e&&!a.contains(this.placeholder[0],e)&&("semi-dynamic"===this.options.type?!a.contains(this.element[0],e):!0)){if(this.direction=1===f?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(d))break;this._rearrange(b,d),this._trigger("change",b,this._uiHash());break}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(b){if(a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b),this.options.revert){var d=this,e=this.placeholder.offset(),f=this.options.axis,g={};f&&"x"!==f||(g.left=e.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),f&&"y"!==f||(g.top=e.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,a(this.helper).animate(g,parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--)this.containers[b]._trigger("deactivate",null,this._uiHash(this)),this.containers[b].containerCache.over&&(this.containers[b]._trigger("out",null,this._uiHash(this)),this.containers[b].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[\-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l="x"===this.options.axis||d+j>h&&i>d+j,m="y"===this.options.axis||b+k>f&&g>b+k,n=l&&m;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?n:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(a){var b="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height),c="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width),d=b&&c,e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return d?this.floating?f&&"right"===f||"down"===e?2:1:e&&("down"===e?2:1):!1},_intersectsWithSides:function(a){var b=this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height),c=this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width),d=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?"right"===e&&c||"left"===e&&!c:d&&("down"===d&&b||"up"===d&&!b)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return 0!==a&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return 0!==a&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor===String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){function c(){h.push(this)}var d,e,f,g,h=[],i=[],j=this._connectWith();if(j&&b)for(d=j.length-1;d>=0;d--)for(f=a(j[d],this.document[0]),e=f.length-1;e>=0;e--)g=a.data(f[e],this.widgetFullName),g&&g!==this&&!g.options.disabled&&i.push([a.isFunction(g.options.items)?g.options.items.call(g.element):a(g.options.items,g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),g]);for(i.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),d=i.length-1;d>=0;d--)i[d][0].each(c);return a(h)},_removeCurrentsFromItems:function(){var b=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=a.grep(this.items,function(a){for(var c=0;c<b.length;c++)if(b[c]===a.item[0])return!1;return!0})},_refreshItems:function(b){this.items=[],this.containers=[this];var c,d,e,f,g,h,i,j,k=this.items,l=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],m=this._connectWith();if(m&&this.ready)for(c=m.length-1;c>=0;c--)for(e=a(m[c],this.document[0]),d=e.length-1;d>=0;d--)f=a.data(e[d],this.widgetFullName),f&&f!==this&&!f.options.disabled&&(l.push([a.isFunction(f.options.items)?f.options.items.call(f.element[0],b,{item:this.currentItem}):a(f.options.items,f.element),f]),this.containers.push(f));for(c=l.length-1;c>=0;c--)for(g=l[c][1],h=l[c][0],d=0,j=h.length;j>d;d++)i=a(h[d]),i.data(this.widgetName+"-item",g),k.push({item:i,instance:g,width:0,height:0,left:0,top:0})},refreshPositions:function(b){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var c,d,e,f;for(c=this.items.length-1;c>=0;c--)d=this.items[c],d.instance!==this.currentContainer&&this.currentContainer&&d.item[0]!==this.currentItem[0]||(e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item,b||(d.width=e.outerWidth(),d.height=e.outerHeight()),f=e.offset(),d.left=f.left,d.top=f.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(c=this.containers.length-1;c>=0;c--)f=this.containers[c].element.offset(),this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight();return this},_createPlaceholder:function(b){b=b||this;var c,d=b.options;d.placeholder&&d.placeholder.constructor!==String||(c=d.placeholder,d.placeholder={element:function(){var d=b.currentItem[0].nodeName.toLowerCase(),e=a("<"+d+">",b.document[0]).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tbody"===d?b._createTrPlaceholder(b.currentItem.find("tr").eq(0),a("<tr>",b.document[0]).appendTo(e)):"tr"===d?b._createTrPlaceholder(b.currentItem,e):"img"===d&&e.attr("src",b.currentItem.attr("src")),c||e.css("visibility","hidden"),e},update:function(a,e){(!c||d.forcePlaceholderSize)&&(e.height()||e.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10)))}}),b.placeholder=a(d.placeholder.element.call(b.element,b.currentItem)),b.currentItem.after(b.placeholder),d.placeholder.update(b,b.placeholder)},_createTrPlaceholder:function(b,c){var d=this;b.children().each(function(){a("<td>&#160;</td>",d.document[0]).attr("colspan",a(this).attr("colspan")||1).appendTo(c)})},_contactContainers:function(b){var c,d,e,f,g,h,i,j,k,l,m=null,n=null;for(c=this.containers.length-1;c>=0;c--)if(!a.contains(this.currentItem[0],this.containers[c].element[0]))if(this._intersectsWith(this.containers[c].containerCache)){if(m&&a.contains(this.containers[c].element[0],m.element[0]))continue;m=this.containers[c],n=c}else this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",b,this._uiHash(this)),this.containers[c].containerCache.over=0);if(m)if(1===this.containers.length)this.containers[n].containerCache.over||(this.containers[n]._trigger("over",b,this._uiHash(this)),this.containers[n].containerCache.over=1);else{for(e=1e4,f=null,k=m.floating||this._isFloating(this.currentItem),g=k?"left":"top",h=k?"width":"height",l=k?"clientX":"clientY",d=this.items.length-1;d>=0;d--)a.contains(this.containers[n].element[0],this.items[d].item[0])&&this.items[d].item[0]!==this.currentItem[0]&&(i=this.items[d].item.offset()[g],j=!1,b[l]-i>this.items[d][h]/2&&(j=!0),Math.abs(b[l]-i)<e&&(e=Math.abs(b[l]-i),f=this.items[d],this.direction=j?"up":"down"));if(!f&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[n])return void(this.currentContainer.containerCache.over||(this.containers[n]._trigger("over",b,this._uiHash()),this.currentContainer.containerCache.over=1));f?this._rearrange(b,f,null,!0):this._rearrange(b,null,this.containers[n].element,!0),this._trigger("change",b,this._uiHash()),this.containers[n]._trigger("change",b,this._uiHash(this)),this.currentContainer=this.containers[n],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[n]._trigger("over",b,this._uiHash(this)),this.containers[n].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):"clone"===c.helper?this.currentItem.clone():this.currentItem;return d.parents("body").length||a("parent"!==c.appendTo?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!d[0].style.width||c.forceHelperSize)&&d.width(this.currentItem.width()),(!d[0].style.height||c.forceHelperSize)&&d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options;"parent"===e.containment&&(e.containment=this.helper[0].parentNode),("document"===e.containment||"window"===e.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===e.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===e.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(e.containment)||(b=a(e.containment)[0],c=a(e.containment).offset(),d="hidden"!==a(b).css("overflow"),this.containment=[c.left+(parseInt(a(b).css("borderLeftWidth"),10)||0)+(parseInt(a(b).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt(a(b).css("borderTopWidth"),10)||0)+(parseInt(a(b).css("paddingTop"),10)||0)-this.margins.top,c.left+(d?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(a(b).css("borderLeftWidth"),10)||0)-(parseInt(a(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(d?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(a(b).css("borderTopWidth"),10)||0)-(parseInt(a(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(b,c){c||(c=this.position);var d="absolute"===b?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(e[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:e.scrollTop())*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:e.scrollLeft())*d}},_generatePosition:function(b){var c,d,e=this.options,f=b.pageX,g=b.pageY,h="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(h[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top)),e.grid&&(c=this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1],g=this.containment?c-this.offset.click.top>=this.containment[1]&&c-this.offset.click.top<=this.containment[3]?c:c-this.offset.click.top>=this.containment[1]?c-e.grid[1]:c+e.grid[1]:c,d=this.originalPageX+Math.round((f-this.originalPageX)/e.grid[0])*e.grid[0],f=this.containment?d-this.offset.click.left>=this.containment[0]&&d-this.offset.click.left<=this.containment[2]?d:d-this.offset.click.left>=this.containment[0]?d-e.grid[0]:d+e.grid[0]:d)),{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():i?0:h.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():i?0:h.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this.counter;this._delay(function(){e===this.counter&&this.refreshPositions(!d)})},_clear:function(a,b){function c(a,b,c){return function(d){c._trigger(a,d,b._uiHash(b))}}this.reverting=!1;var d,e=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(d in this._storedCSS)("auto"===this._storedCSS[d]||"static"===this._storedCSS[d])&&(this._storedCSS[d]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!b&&e.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||b||e.push(function(a){this._trigger("update",a,this._uiHash())}),this!==this.currentContainer&&(b||(e.push(function(a){this._trigger("remove",a,this._uiHash())}),e.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.currentContainer)),e.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.currentContainer)))),d=this.containers.length-1;d>=0;d--)b||e.push(c("deactivate",this,this.containers[d])),this.containers[d].containerCache.over&&(e.push(c("out",this,this.containers[d])),this.containers[d].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,b||this._trigger("beforeStop",a,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!b){for(d=0;d<e.length;d++)e[d].call(this,a);this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}})});

/* 17. idangerous.swiper-2.7.js
-----------------------------------------------------------------------------------------------*/
var Swiper = function (selector, params) {'use strict'; if (!document.body.outerHTML && document.body.__defineGetter__) {if (HTMLElement) {var element = HTMLElement.prototype; if (element.__defineGetter__) {element.__defineGetter__('outerHTML', function () { return new XMLSerializer().serializeToString(this); }); } } } if (!window.getComputedStyle) {window.getComputedStyle = function (el, pseudo) {this.el = el; this.getPropertyValue = function (prop) {var re = /(\-([a-z]){1})/g; if (prop === 'float') prop = 'styleFloat'; if (re.test(prop)) {prop = prop.replace(re, function () {return arguments[2].toUpperCase(); }); } return el.currentStyle[prop] ? el.currentStyle[prop] : null; }; return this; }; } if (!Array.prototype.indexOf) {Array.prototype.indexOf = function (obj, start) {for (var i = (start || 0), j = this.length; i < j; i++) {if (this[i] === obj) { return i; } } return -1; }; } if (!document.querySelectorAll) {if (!window.jQuery) return; } function $$(selector, context) {if (document.querySelectorAll) return (context || document).querySelectorAll(selector); else return jQuery(selector, context); } if (typeof selector === 'undefined') return; if (!(selector.nodeType)) {if ($$(selector).length === 0) return; } var _this = this; _this.touches = {start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, diff: 0, abs: 0 }; _this.positions = {start: 0, abs: 0, diff: 0, current: 0 }; _this.times = {start: 0, end: 0 }; _this.id = (new Date()).getTime(); _this.container = (selector.nodeType) ? selector : $$(selector)[0]; _this.isTouched = false; _this.isMoved = false; _this.activeIndex = 0; _this.centerIndex = 0; _this.activeLoaderIndex = 0; _this.activeLoopIndex = 0; _this.previousIndex = null; _this.velocity = 0; _this.snapGrid = []; _this.slidesGrid = []; _this.imagesToLoad = []; _this.imagesLoaded = 0; _this.wrapperLeft = 0; _this.wrapperRight = 0; _this.wrapperTop = 0; _this.wrapperBottom = 0; _this.isAndroid = navigator.userAgent.toLowerCase().indexOf('android') >= 0; var wrapper, slideSize, wrapperSize, direction, isScrolling, containerSize; var defaults = {eventTarget: 'wrapper', mode : 'horizontal', touchRatio : 1, speed : 300, freeMode : false, freeModeFluid : false, momentumRatio: 1, momentumBounce: true, momentumBounceRatio: 1, slidesPerView : 1, slidesPerGroup : 1, slidesPerViewFit: true, simulateTouch : true, followFinger : true, shortSwipes : true, longSwipesRatio: 0.5, moveStartThreshold: false, onlyExternal : false, createPagination : true, pagination : false, paginationElement: 'span', paginationClickable: false, paginationAsRange: true, resistance : true, scrollContainer : false, preventLinks : true, preventLinksPropagation: false, noSwiping : false, noSwipingClass : 'swiper-no-swiping', initialSlide: 0, keyboardControl: false, mousewheelControl : false, mousewheelControlForceToAxis : false, mousewheelAccelerator: 4, useCSS3Transforms : true, autoplay: false, autoplayDisableOnInteraction: true, autoplayStopOnLast: false, loop: false, loopAdditionalSlides: 0, roundLengths: false, calculateHeight: false, cssWidthAndHeight: false, updateOnImagesReady : true, releaseFormElements : true, watchActiveIndex: false, visibilityFullFit : false, offsetPxBefore : 0, offsetPxAfter : 0, offsetSlidesBefore : 0, offsetSlidesAfter : 0, centeredSlides: false, queueStartCallbacks : false, queueEndCallbacks : false, autoResize : true, resizeReInit : false, DOMAnimation : true, loader: {slides: [], slidesHTMLType: 'inner', surroundGroups: 1, logic: 'reload', loadAllSlides: false }, swipeToPrev: true, swipeToNext: true, slideElement: 'div', slideClass: 'swiper-slide', slideActiveClass: 'swiper-slide-active', slideVisibleClass: 'swiper-slide-visible', slideDuplicateClass: 'swiper-slide-duplicate', wrapperClass: 'swiper-wrapper', paginationElementClass: 'swiper-pagination-switch', paginationActiveClass: 'swiper-active-switch', paginationVisibleClass: 'swiper-visible-switch'}; params = params || {}; for (var prop in defaults) {if (prop in params && typeof params[prop] === 'object') {for (var subProp in defaults[prop]) {if (! (subProp in params[prop])) {params[prop][subProp] = defaults[prop][subProp]; } } } else if (! (prop in params)) {params[prop] = defaults[prop]; } } _this.params = params; if (params.scrollContainer) {params.freeMode = true; params.freeModeFluid = true; } if (params.loop) {params.resistance = '100%'; } var isH = params.mode === 'horizontal'; var desktopEvents = ['mousedown', 'mousemove', 'mouseup']; if (_this.browser.ie10) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp']; if (_this.browser.ie11) desktopEvents = ['pointerdown', 'pointermove', 'pointerup']; _this.touchEvents = {touchStart : _this.support.touch || !params.simulateTouch  ? 'touchstart' : desktopEvents[0], touchMove : _this.support.touch || !params.simulateTouch ? 'touchmove' : desktopEvents[1], touchEnd : _this.support.touch || !params.simulateTouch ? 'touchend' : desktopEvents[2] }; for (var i = _this.container.childNodes.length - 1; i >= 0; i--) {if (_this.container.childNodes[i].className) {var _wrapperClasses = _this.container.childNodes[i].className.split(/\s+/); for (var j = 0; j < _wrapperClasses.length; j++) {if (_wrapperClasses[j] === params.wrapperClass) {wrapper = _this.container.childNodes[i]; } } } } _this.wrapper = wrapper; _this._extendSwiperSlide = function  (el) {el.append = function () {if (params.loop) {el.insertAfter(_this.slides.length - _this.loopedSlides); } else {_this.wrapper.appendChild(el); _this.reInit(); } return el; }; el.prepend = function () {if (params.loop) {_this.wrapper.insertBefore(el, _this.slides[_this.loopedSlides]); _this.removeLoopedSlides(); _this.calcSlides(); _this.createLoop(); } else {_this.wrapper.insertBefore(el, _this.wrapper.firstChild); } _this.reInit(); return el; }; el.insertAfter = function (index) {if (typeof index === 'undefined') return false; var beforeSlide; if (params.loop) {beforeSlide = _this.slides[index + 1 + _this.loopedSlides]; if (beforeSlide) {_this.wrapper.insertBefore(el, beforeSlide); } else {_this.wrapper.appendChild(el); } _this.removeLoopedSlides(); _this.calcSlides(); _this.createLoop(); } else {beforeSlide = _this.slides[index + 1]; _this.wrapper.insertBefore(el, beforeSlide); } _this.reInit(); return el; }; el.clone = function () {return _this._extendSwiperSlide(el.cloneNode(true)); }; el.remove = function () {_this.wrapper.removeChild(el); _this.reInit(); }; el.html = function (html) {if (typeof html === 'undefined') {return el.innerHTML; } else {el.innerHTML = html; return el; } }; el.index = function () {var index; for (var i = _this.slides.length - 1; i >= 0; i--) {if (el === _this.slides[i]) index = i; } return index; }; el.isActive = function () {if (el.index() === _this.activeIndex) return true; else return false; }; if (!el.swiperSlideDataStorage) el.swiperSlideDataStorage = {}; el.getData = function (name) {return el.swiperSlideDataStorage[name]; }; el.setData = function (name, value) {el.swiperSlideDataStorage[name] = value; return el; }; el.data = function (name, value) {if (typeof value === 'undefined') {return el.getAttribute('data-' + name); } else {el.setAttribute('data-' + name, value); return el; } }; el.getWidth = function (outer, round) {return _this.h.getWidth(el, outer, round); }; el.getHeight = function (outer, round) {return _this.h.getHeight(el, outer, round); }; el.getOffset = function () {return _this.h.getOffset(el); }; return el; }; _this.calcSlides = function (forceCalcSlides) {var oldNumber = _this.slides ? _this.slides.length : false; _this.slides = []; _this.displaySlides = []; for (var i = 0; i < _this.wrapper.childNodes.length; i++) {if (_this.wrapper.childNodes[i].className) {var _className = _this.wrapper.childNodes[i].className; var _slideClasses = _className.split(/\s+/); for (var j = 0; j < _slideClasses.length; j++) {if (_slideClasses[j] === params.slideClass) {_this.slides.push(_this.wrapper.childNodes[i]); } } } } for (i = _this.slides.length - 1; i >= 0; i--) {_this._extendSwiperSlide(_this.slides[i]); } if (oldNumber === false) return; if (oldNumber !== _this.slides.length || forceCalcSlides) {removeSlideEvents(); addSlideEvents(); _this.updateActiveSlide(); if (_this.params.pagination) _this.createPagination(); _this.callPlugins('numberOfSlidesChanged'); } }; _this.createSlide = function (html, slideClassList, el) {slideClassList = slideClassList || _this.params.slideClass; el = el || params.slideElement; var newSlide = document.createElement(el); newSlide.innerHTML = html || ''; newSlide.className = slideClassList; return _this._extendSwiperSlide(newSlide); }; _this.appendSlide = function (html, slideClassList, el) {if (!html) return; if (html.nodeType) {return _this._extendSwiperSlide(html).append(); } else {return _this.createSlide(html, slideClassList, el).append(); } }; _this.prependSlide = function (html, slideClassList, el) {if (!html) return; if (html.nodeType) {return _this._extendSwiperSlide(html).prepend(); } else {return _this.createSlide(html, slideClassList, el).prepend(); } }; _this.insertSlideAfter = function (index, html, slideClassList, el) {if (typeof index === 'undefined') return false; if (html.nodeType) {return _this._extendSwiperSlide(html).insertAfter(index); } else {return _this.createSlide(html, slideClassList, el).insertAfter(index); } }; _this.removeSlide = function (index) {if (_this.slides[index]) {if (params.loop) {if (!_this.slides[index + _this.loopedSlides]) return false; _this.slides[index + _this.loopedSlides].remove(); _this.removeLoopedSlides(); _this.calcSlides(); _this.createLoop(); } else _this.slides[index].remove(); return true; } else return false; }; _this.removeLastSlide = function () {if (_this.slides.length > 0) {if (params.loop) {_this.slides[_this.slides.length - 1 - _this.loopedSlides].remove(); _this.removeLoopedSlides(); _this.calcSlides(); _this.createLoop(); } else _this.slides[_this.slides.length - 1].remove(); return true; } else {return false; } }; _this.removeAllSlides = function () {for (var i = _this.slides.length - 1; i >= 0; i--) {_this.slides[i].remove(); } }; _this.getSlide = function (index) {return _this.slides[index]; }; _this.getLastSlide = function () {return _this.slides[_this.slides.length - 1]; }; _this.getFirstSlide = function () {return _this.slides[0]; }; _this.activeSlide = function () {return _this.slides[_this.activeIndex]; }; _this.fireCallback = function () {var callback = arguments[0]; if (Object.prototype.toString.call(callback) === '[object Array]') {for (var i = 0; i < callback.length; i++) {if (typeof callback[i] === 'function') {callback[i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]); } } } else if (Object.prototype.toString.call(callback) === '[object String]') {if (params['on' + callback]) _this.fireCallback(params['on' + callback], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]); } else {callback(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]); } }; function isArray(obj) {if (Object.prototype.toString.apply(obj) === '[object Array]') return true; return false; } _this.addCallback = function (callback, func) {var _this = this, tempFunc; if (_this.params['on' + callback]) {if (isArray(this.params['on' + callback])) {return this.params['on' + callback].push(func); } else if (typeof this.params['on' + callback] === 'function') {tempFunc = this.params['on' + callback]; this.params['on' + callback] = []; this.params['on' + callback].push(tempFunc); return this.params['on' + callback].push(func); } } else {this.params['on' + callback] = []; return this.params['on' + callback].push(func); } }; _this.removeCallbacks = function (callback) {if (_this.params['on' + callback]) {_this.params['on' + callback] = null; } }; var _plugins = []; for (var plugin in _this.plugins) {if (params[plugin]) {var p = _this.plugins[plugin](_this, params[plugin]); if (p) _plugins.push(p); } } _this.callPlugins = function (method, args) {if (!args) args = {}; for (var i = 0; i < _plugins.length; i++) {if (method in _plugins[i]) {_plugins[i][method](args); } } }; if ((_this.browser.ie10 || _this.browser.ie11) && !params.onlyExternal) {_this.wrapper.classList.add('swiper-wp8-' + (isH ? 'horizontal' : 'vertical')); } if (params.freeMode) {_this.container.className += ' swiper-free-mode'; } _this.initialized = false; _this.init = function (force, forceCalcSlides) {var _width = _this.h.getWidth(_this.container, false, params.roundLengths); var _height = _this.h.getHeight(_this.container, false, params.roundLengths); if (_width === _this.width && _height === _this.height && !force) return; _this.width = _width; _this.height = _height; var slideWidth, slideHeight, slideMaxHeight, wrapperWidth, wrapperHeight, slideLeft; var i; containerSize = isH ? _width : _height; var wrapper = _this.wrapper; if (force) {_this.calcSlides(forceCalcSlides); } if (params.slidesPerView === 'auto') {var slidesWidth = 0; var slidesHeight = 0; if (params.slidesOffset > 0) {wrapper.style.paddingLeft = ''; wrapper.style.paddingRight = ''; wrapper.style.paddingTop = ''; wrapper.style.paddingBottom = ''; } wrapper.style.width = ''; wrapper.style.height = ''; if (params.offsetPxBefore > 0) {if (isH) _this.wrapperLeft = params.offsetPxBefore; else _this.wrapperTop = params.offsetPxBefore; } if (params.offsetPxAfter > 0) {if (isH) _this.wrapperRight = params.offsetPxAfter; else _this.wrapperBottom = params.offsetPxAfter; } if (params.centeredSlides) {if (isH) {_this.wrapperLeft = (containerSize - this.slides[0].getWidth(true, params.roundLengths)) / 2; _this.wrapperRight = (containerSize - _this.slides[_this.slides.length - 1].getWidth(true, params.roundLengths)) / 2; } else {_this.wrapperTop = (containerSize - _this.slides[0].getHeight(true, params.roundLengths)) / 2; _this.wrapperBottom = (containerSize - _this.slides[_this.slides.length - 1].getHeight(true, params.roundLengths)) / 2; } } if (isH) {if (_this.wrapperLeft >= 0) wrapper.style.paddingLeft = _this.wrapperLeft + 'px'; if (_this.wrapperRight >= 0) wrapper.style.paddingRight = _this.wrapperRight + 'px'; } else {if (_this.wrapperTop >= 0) wrapper.style.paddingTop = _this.wrapperTop + 'px'; if (_this.wrapperBottom >= 0) wrapper.style.paddingBottom = _this.wrapperBottom + 'px'; } slideLeft = 0; var centeredSlideLeft = 0; _this.snapGrid = []; _this.slidesGrid = []; slideMaxHeight = 0; for (i = 0; i < _this.slides.length; i++) {slideWidth = _this.slides[i].getWidth(true, params.roundLengths); slideHeight = _this.slides[i].getHeight(true, params.roundLengths); if (params.calculateHeight) {slideMaxHeight = Math.max(slideMaxHeight, slideHeight); } var _slideSize = isH ? slideWidth : slideHeight; if (params.centeredSlides) {var nextSlideWidth = i === _this.slides.length - 1 ? 0 : _this.slides[i + 1].getWidth(true, params.roundLengths); var nextSlideHeight = i === _this.slides.length - 1 ? 0 : _this.slides[i + 1].getHeight(true, params.roundLengths); var nextSlideSize = isH ? nextSlideWidth : nextSlideHeight; if (_slideSize > containerSize) {if (params.slidesPerViewFit) {_this.snapGrid.push(slideLeft + _this.wrapperLeft); _this.snapGrid.push(slideLeft + _slideSize - containerSize + _this.wrapperLeft); } else {for (var j = 0; j <= Math.floor(_slideSize / (containerSize + _this.wrapperLeft)); j++) {if (j === 0) _this.snapGrid.push(slideLeft + _this.wrapperLeft); else _this.snapGrid.push(slideLeft + _this.wrapperLeft + containerSize * j); } } _this.slidesGrid.push(slideLeft + _this.wrapperLeft); } else {_this.snapGrid.push(centeredSlideLeft); _this.slidesGrid.push(centeredSlideLeft); } centeredSlideLeft += _slideSize / 2 + nextSlideSize / 2; } else {if (_slideSize > containerSize) {if (params.slidesPerViewFit) {_this.snapGrid.push(slideLeft); _this.snapGrid.push(slideLeft + _slideSize - containerSize); } else {if (containerSize !== 0) {for (var k = 0; k <= Math.floor(_slideSize / containerSize); k++) {_this.snapGrid.push(slideLeft + containerSize * k); } } else {_this.snapGrid.push(slideLeft); } } } else {_this.snapGrid.push(slideLeft); } _this.slidesGrid.push(slideLeft); } slideLeft += _slideSize; slidesWidth += slideWidth; slidesHeight += slideHeight; } if (params.calculateHeight) _this.height = slideMaxHeight; if (isH) {wrapperSize = slidesWidth + _this.wrapperRight + _this.wrapperLeft; wrapper.style.width = (slidesWidth) + 'px'; wrapper.style.height = (_this.height) + 'px'; } else {wrapperSize = slidesHeight + _this.wrapperTop + _this.wrapperBottom; wrapper.style.width = (_this.width) + 'px'; wrapper.style.height = (slidesHeight) + 'px'; } } else if (params.scrollContainer) {wrapper.style.width = ''; wrapper.style.height = ''; wrapperWidth = _this.slides[0].getWidth(true, params.roundLengths); wrapperHeight = _this.slides[0].getHeight(true, params.roundLengths); wrapperSize = isH ? wrapperWidth : wrapperHeight; wrapper.style.width = wrapperWidth + 'px'; wrapper.style.height = wrapperHeight + 'px'; slideSize = isH ? wrapperWidth : wrapperHeight; } else {if (params.calculateHeight) {slideMaxHeight = 0; wrapperHeight = 0; if (!isH) _this.container.style.height = ''; wrapper.style.height = ''; for (i = 0; i < _this.slides.length; i++) {_this.slides[i].style.height = ''; slideMaxHeight = Math.max(_this.slides[i].getHeight(true), slideMaxHeight); if (!isH) wrapperHeight += _this.slides[i].getHeight(true); } slideHeight = slideMaxHeight; _this.height = slideHeight; if (isH) wrapperHeight = slideHeight; else {containerSize = slideHeight; _this.container.style.height = containerSize + 'px'; } } else {slideHeight = isH ? _this.height : _this.height / params.slidesPerView; if (params.roundLengths) slideHeight = Math.ceil(slideHeight); wrapperHeight = isH ? _this.height : _this.slides.length * slideHeight; } slideWidth = isH ? _this.width / params.slidesPerView : _this.width; if (params.roundLengths) slideWidth = Math.ceil(slideWidth); wrapperWidth = isH ? _this.slides.length * slideWidth : _this.width; slideSize = isH ? slideWidth : slideHeight; if (params.offsetSlidesBefore > 0) {if (isH) _this.wrapperLeft = slideSize * params.offsetSlidesBefore; else _this.wrapperTop = slideSize * params.offsetSlidesBefore; } if (params.offsetSlidesAfter > 0) {if (isH) _this.wrapperRight = slideSize * params.offsetSlidesAfter; else _this.wrapperBottom = slideSize * params.offsetSlidesAfter; } if (params.offsetPxBefore > 0) {if (isH) _this.wrapperLeft = params.offsetPxBefore; else _this.wrapperTop = params.offsetPxBefore; } if (params.offsetPxAfter > 0) {if (isH) _this.wrapperRight = params.offsetPxAfter; else _this.wrapperBottom = params.offsetPxAfter; } if (params.centeredSlides) {if (isH) {_this.wrapperLeft = (containerSize - slideSize) / 2; _this.wrapperRight = (containerSize - slideSize) / 2; } else {_this.wrapperTop = (containerSize - slideSize) / 2; _this.wrapperBottom = (containerSize - slideSize) / 2; } } if (isH) {if (_this.wrapperLeft > 0) wrapper.style.paddingLeft = _this.wrapperLeft + 'px'; if (_this.wrapperRight > 0) wrapper.style.paddingRight = _this.wrapperRight + 'px'; } else {if (_this.wrapperTop > 0) wrapper.style.paddingTop = _this.wrapperTop + 'px'; if (_this.wrapperBottom > 0) wrapper.style.paddingBottom = _this.wrapperBottom + 'px'; } wrapperSize = isH ? wrapperWidth + _this.wrapperRight + _this.wrapperLeft : wrapperHeight + _this.wrapperTop + _this.wrapperBottom; if (parseFloat(wrapperWidth) > 0 && (!params.cssWidthAndHeight || params.cssWidthAndHeight === 'height')) {wrapper.style.width = wrapperWidth + 'px'; } if (parseFloat(wrapperHeight) > 0 && (!params.cssWidthAndHeight || params.cssWidthAndHeight === 'width')) {wrapper.style.height = wrapperHeight + 'px'; } slideLeft = 0; _this.snapGrid = []; _this.slidesGrid = []; for (i = 0; i < _this.slides.length; i++) {_this.snapGrid.push(slideLeft); _this.slidesGrid.push(slideLeft); slideLeft += slideSize; if (parseFloat(slideWidth) > 0 && (!params.cssWidthAndHeight || params.cssWidthAndHeight === 'height')) {_this.slides[i].style.width = slideWidth + 'px'; } if (parseFloat(slideHeight) > 0 && (!params.cssWidthAndHeight || params.cssWidthAndHeight === 'width')) {_this.slides[i].style.height = slideHeight + 'px'; } } } if (!_this.initialized) {_this.callPlugins('onFirstInit'); if (params.onFirstInit) _this.fireCallback(params.onFirstInit, _this); } else {_this.callPlugins('onInit'); if (params.onInit) _this.fireCallback(params.onInit, _this); } _this.initialized = true; }; _this.reInit = function (forceCalcSlides) {_this.init(true, forceCalcSlides); }; _this.resizeFix = function (reInit) {_this.callPlugins('beforeResizeFix'); _this.init(params.resizeReInit || reInit); if (!params.freeMode) {_this.swipeTo((params.loop ? _this.activeLoopIndex : _this.activeIndex), 0, false); if (params.autoplay) {if (_this.support.transitions && typeof autoplayTimeoutId !== 'undefined') {if (typeof autoplayTimeoutId !== 'undefined') {clearTimeout(autoplayTimeoutId); autoplayTimeoutId = undefined; _this.startAutoplay(); } } else {if (typeof autoplayIntervalId !== 'undefined') {clearInterval(autoplayIntervalId); autoplayIntervalId = undefined; _this.startAutoplay(); } } } } else if (_this.getWrapperTranslate() < -maxWrapperPosition()) {_this.setWrapperTransition(0); _this.setWrapperTranslate(-maxWrapperPosition()); } _this.callPlugins('afterResizeFix'); }; function maxWrapperPosition() {var a = (wrapperSize - containerSize); if (params.freeMode) {a = wrapperSize - containerSize; } if (params.slidesPerView > _this.slides.length && !params.centeredSlides) {a = 0; } if (a < 0) a = 0; return a; } function initEvents() {var bind = _this.h.addEventListener; var eventTarget = params.eventTarget === 'wrapper' ? _this.wrapper : _this.container; if (! (_this.browser.ie10 || _this.browser.ie11)) {if (_this.support.touch) {bind(eventTarget, 'touchstart', onTouchStart); bind(eventTarget, 'touchmove', onTouchMove); bind(eventTarget, 'touchend', onTouchEnd); } if (params.simulateTouch) {bind(eventTarget, 'mousedown', onTouchStart); bind(document, 'mousemove', onTouchMove); bind(document, 'mouseup', onTouchEnd); } } else {bind(eventTarget, _this.touchEvents.touchStart, onTouchStart); bind(document, _this.touchEvents.touchMove, onTouchMove); bind(document, _this.touchEvents.touchEnd, onTouchEnd); } if (params.autoResize) {bind(window, 'resize', _this.resizeFix); } addSlideEvents(); _this._wheelEvent = false; if (params.mousewheelControl) {if (document.onmousewheel !== undefined) {_this._wheelEvent = 'mousewheel'; } if (!_this._wheelEvent) {try {new WheelEvent('wheel'); _this._wheelEvent = 'wheel'; } catch (e) {} } if (!_this._wheelEvent) {_this._wheelEvent = 'DOMMouseScroll'; } if (_this._wheelEvent) {bind(_this.container, _this._wheelEvent, handleMousewheel); } } function _loadImage(src) {var image = new Image(); image.onload = function () {if (typeof _this === 'undefined' || _this === null) return; if (_this.imagesLoaded !== undefined) _this.imagesLoaded++; if (_this.imagesLoaded === _this.imagesToLoad.length) {_this.reInit(); if (params.onImagesReady) _this.fireCallback(params.onImagesReady, _this); } }; image.src = src; } if (params.keyboardControl) {bind(document, 'keydown', handleKeyboardKeys); } if (params.updateOnImagesReady) {_this.imagesToLoad = $$('img', _this.container); for (var i = 0; i < _this.imagesToLoad.length; i++) {_loadImage(_this.imagesToLoad[i].getAttribute('src')); } } } _this.destroy = function () {var unbind = _this.h.removeEventListener; var eventTarget = params.eventTarget === 'wrapper' ? _this.wrapper : _this.container; if (! (_this.browser.ie10 || _this.browser.ie11)) {if (_this.support.touch) {unbind(eventTarget, 'touchstart', onTouchStart); unbind(eventTarget, 'touchmove', onTouchMove); unbind(eventTarget, 'touchend', onTouchEnd); } if (params.simulateTouch) {unbind(eventTarget, 'mousedown', onTouchStart); unbind(document, 'mousemove', onTouchMove); unbind(document, 'mouseup', onTouchEnd); } } else {unbind(eventTarget, _this.touchEvents.touchStart, onTouchStart); unbind(document, _this.touchEvents.touchMove, onTouchMove); unbind(document, _this.touchEvents.touchEnd, onTouchEnd); } if (params.autoResize) {unbind(window, 'resize', _this.resizeFix); } removeSlideEvents(); if (params.paginationClickable) {removePaginationEvents(); } if (params.mousewheelControl && _this._wheelEvent) {unbind(_this.container, _this._wheelEvent, handleMousewheel); } if (params.keyboardControl) {unbind(document, 'keydown', handleKeyboardKeys); } if (params.autoplay) {_this.stopAutoplay(); } _this.callPlugins('onDestroy'); _this = null; }; function addSlideEvents() {var bind = _this.h.addEventListener, i; if (params.preventLinks) {var links = $$('a', _this.container); for (i = 0; i < links.length; i++) {bind(links[i], 'click', preventClick); } } if (params.releaseFormElements) {var formElements = $$('input, textarea, select', _this.container); for (i = 0; i < formElements.length; i++) {bind(formElements[i], _this.touchEvents.touchStart, releaseForms, true); } } if (params.onSlideClick) {for (i = 0; i < _this.slides.length; i++) {bind(_this.slides[i], 'click', slideClick); } } if (params.onSlideTouch) {for (i = 0; i < _this.slides.length; i++) {bind(_this.slides[i], _this.touchEvents.touchStart, slideTouch); } } } function removeSlideEvents() {var unbind = _this.h.removeEventListener, i; if (params.onSlideClick) {for (i = 0; i < _this.slides.length; i++) {unbind(_this.slides[i], 'click', slideClick); } } if (params.onSlideTouch) {for (i = 0; i < _this.slides.length; i++) {unbind(_this.slides[i], _this.touchEvents.touchStart, slideTouch); } } if (params.releaseFormElements) {var formElements = $$('input, textarea, select', _this.container); for (i = 0; i < formElements.length; i++) {unbind(formElements[i], _this.touchEvents.touchStart, releaseForms, true); } } if (params.preventLinks) {var links = $$('a', _this.container); for (i = 0; i < links.length; i++) {unbind(links[i], 'click', preventClick); } } } function handleKeyboardKeys(e) {var kc = e.keyCode || e.charCode; if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return; if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {var inView = false; var swiperOffset = _this.h.getOffset(_this.container); var scrollLeft = _this.h.windowScroll().left; var scrollTop = _this.h.windowScroll().top; var windowWidth = _this.h.windowWidth(); var windowHeight = _this.h.windowHeight(); var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + _this.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + _this.height], [swiperOffset.left + _this.width, swiperOffset.top + _this.height] ]; for (var i = 0; i < swiperCoord.length; i++) {var point = swiperCoord[i]; if (point[0] >= scrollLeft && point[0] <= scrollLeft + windowWidth && point[1] >= scrollTop && point[1] <= scrollTop + windowHeight ) {inView = true; } } if (!inView) return; } if (isH) {if (kc === 37 || kc === 39) {if (e.preventDefault) e.preventDefault(); else e.returnValue = false; } if (kc === 39) _this.swipeNext(); if (kc === 37) _this.swipePrev(); } else {if (kc === 38 || kc === 40) {if (e.preventDefault) e.preventDefault(); else e.returnValue = false; } if (kc === 40) _this.swipeNext(); if (kc === 38) _this.swipePrev(); } } _this.disableKeyboardControl = function () {params.keyboardControl = false; _this.h.removeEventListener(document, 'keydown', handleKeyboardKeys); }; _this.enableKeyboardControl = function () {params.keyboardControl = true; _this.h.addEventListener(document, 'keydown', handleKeyboardKeys); }; var lastScrollTime = (new Date()).getTime(); function handleMousewheel(e) {var we = _this._wheelEvent; var delta = 0; if (e.detail) delta = -e.detail; else if (we === 'mousewheel') {if (params.mousewheelControlForceToAxis) {if (isH) {if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX; else return; } else {if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY; else return; } } else {delta = e.wheelDelta; } } else if (we === 'DOMMouseScroll') delta = -e.detail; else if (we === 'wheel') {if (params.mousewheelControlForceToAxis) {if (isH) {if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX; else return; } else {if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY; else return; } } else {delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? - e.deltaX : - e.deltaY; } delta *= params.mousewheelAccelerator; } if (!params.freeMode) {if ((new Date()).getTime() - lastScrollTime > 60) {if (delta < 0) _this.swipeNext(); else _this.swipePrev(); } lastScrollTime = (new Date()).getTime(); } else {var position = _this.getWrapperTranslate() + delta; if (position > 0) position = 0; if (position < -maxWrapperPosition()) position = -maxWrapperPosition(); _this.setWrapperTransition(0); _this.setWrapperTranslate(position); _this.updateActiveSlide(position); if (position === 0 || position === -maxWrapperPosition()) return; } if (params.autoplay) _this.stopAutoplay(true); if (e.preventDefault) e.preventDefault(); else e.returnValue = false; return false; } _this.disableMousewheelControl = function () {if (!_this._wheelEvent) return false; params.mousewheelControl = false; _this.h.removeEventListener(_this.container, _this._wheelEvent, handleMousewheel); return true; }; _this.enableMousewheelControl = function () {if (!_this._wheelEvent) return false; params.mousewheelControl = true; _this.h.addEventListener(_this.container, _this._wheelEvent, handleMousewheel); return true; }; if (params.grabCursor) {var containerStyle = _this.container.style; containerStyle.cursor = 'move'; containerStyle.cursor = 'grab'; containerStyle.cursor = '-moz-grab'; containerStyle.cursor = '-webkit-grab'; } _this.allowSlideClick = true; function slideClick(event) {if (_this.allowSlideClick) {setClickedSlide(event); _this.fireCallback(params.onSlideClick, _this, event); } } function slideTouch(event) {setClickedSlide(event); _this.fireCallback(params.onSlideTouch, _this, event); } function setClickedSlide(event) {if (!event.currentTarget) {var element = event.srcElement; do {if (element.className.indexOf(params.slideClass) > -1) {break; } element = element.parentNode; } while (element); _this.clickedSlide = element; } else {_this.clickedSlide = event.currentTarget; } _this.clickedSlideIndex     = _this.slides.indexOf(_this.clickedSlide); _this.clickedSlideLoopIndex = _this.clickedSlideIndex - (_this.loopedSlides || 0); } _this.allowLinks = true; function preventClick(e) {if (!_this.allowLinks) {if (e.preventDefault) e.preventDefault(); else e.returnValue = false; if (params.preventLinksPropagation && 'stopPropagation' in e) {e.stopPropagation(); } return false; } } function releaseForms(e) {if (e.stopPropagation) e.stopPropagation(); else e.returnValue = false; return false; } var isTouchEvent = false; var allowThresholdMove; var allowMomentumBounce = true; function onTouchStart(event) {if (params.preventLinks) _this.allowLinks = true; if (_this.isTouched || params.onlyExternal) {return false; } var eventTarget = event.target || event.srcElement; if (document.activeElement) {if (document.activeElement !== eventTarget) document.activeElement.blur(); } var formTagNames = ('input select textarea').split(' '); if (params.noSwiping && (eventTarget) && noSwipingSlide(eventTarget)) return false; allowMomentumBounce = false; _this.isTouched = true; isTouchEvent = event.type === 'touchstart'; if (!isTouchEvent && 'which' in event && event.which === 3) return false; if (!isTouchEvent || event.targetTouches.length === 1) {_this.callPlugins('onTouchStartBegin'); if (!isTouchEvent && !_this.isAndroid && formTagNames.indexOf(eventTarget.tagName.toLowerCase()) < 0) {if (event.preventDefault) event.preventDefault(); else event.returnValue = false; } var pageX = isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX); var pageY = isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY); _this.touches.startX = _this.touches.currentX = pageX; _this.touches.startY = _this.touches.currentY = pageY; _this.touches.start = _this.touches.current = isH ? pageX : pageY; _this.setWrapperTransition(0); _this.positions.start = _this.positions.current = _this.getWrapperTranslate(); _this.setWrapperTranslate(_this.positions.start); _this.times.start = (new Date()).getTime(); isScrolling = undefined; if (params.moveStartThreshold > 0) {allowThresholdMove = false; } if (params.onTouchStart) _this.fireCallback(params.onTouchStart, _this, event); _this.callPlugins('onTouchStartEnd'); } } var velocityPrevPosition, velocityPrevTime; function onTouchMove(event) {if (!_this.isTouched || params.onlyExternal) return; if (isTouchEvent && event.type === 'mousemove') return; var pageX = isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX); var pageY = isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY); if (typeof isScrolling === 'undefined' && isH) {isScrolling = !!(isScrolling || Math.abs(pageY - _this.touches.startY) > Math.abs(pageX - _this.touches.startX)); } if (typeof isScrolling === 'undefined' && !isH) {isScrolling = !!(isScrolling || Math.abs(pageY - _this.touches.startY) < Math.abs(pageX - _this.touches.startX)); } if (isScrolling) {_this.isTouched = false; return; } if (isH) {if ((!params.swipeToNext && pageX < _this.touches.startX) || ((!params.swipeToPrev && pageX > _this.touches.startX))) {return; } } else {if ((!params.swipeToNext && pageY < _this.touches.startY) || ((!params.swipeToPrev && pageY > _this.touches.startY))) {return; } } if (event.assignedToSwiper) {_this.isTouched = false; return; } event.assignedToSwiper = true; if (params.preventLinks) {_this.allowLinks = false; } if (params.onSlideClick) {_this.allowSlideClick = false; } if (params.autoplay) {_this.stopAutoplay(true); } if (!isTouchEvent || event.touches.length === 1) {if (!_this.isMoved) {_this.callPlugins('onTouchMoveStart'); if (params.loop) {_this.fixLoop(); _this.positions.start = _this.getWrapperTranslate(); } if (params.onTouchMoveStart) _this.fireCallback(params.onTouchMoveStart, _this); } _this.isMoved = true; if (event.preventDefault) event.preventDefault(); else event.returnValue = false; _this.touches.current = isH ? pageX : pageY; _this.positions.current = (_this.touches.current - _this.touches.start) * params.touchRatio + _this.positions.start; if (_this.positions.current > 0 && params.onResistanceBefore) {_this.fireCallback(params.onResistanceBefore, _this, _this.positions.current); } if (_this.positions.current < -maxWrapperPosition() && params.onResistanceAfter) {_this.fireCallback(params.onResistanceAfter, _this, Math.abs(_this.positions.current + maxWrapperPosition())); } if (params.resistance && params.resistance !== '100%') {var resistance; if (_this.positions.current > 0) {resistance = 1 - _this.positions.current / containerSize / 2; if (resistance < 0.5) _this.positions.current = (containerSize / 2); else _this.positions.current = _this.positions.current * resistance; } if (_this.positions.current < -maxWrapperPosition()) {var diff = (_this.touches.current - _this.touches.start) * params.touchRatio + (maxWrapperPosition() + _this.positions.start); resistance = (containerSize + diff) / (containerSize); var newPos = _this.positions.current - diff * (1 - resistance) / 2; var stopPos = -maxWrapperPosition() - containerSize / 2; if (newPos < stopPos || resistance <= 0) _this.positions.current = stopPos; else _this.positions.current = newPos; } } if (params.resistance && params.resistance === '100%') {if (_this.positions.current > 0 && !(params.freeMode && !params.freeModeFluid)) {_this.positions.current = 0; } if (_this.positions.current < -maxWrapperPosition() && !(params.freeMode && !params.freeModeFluid)) {_this.positions.current = -maxWrapperPosition(); } } if (!params.followFinger) return; if (!params.moveStartThreshold) {_this.setWrapperTranslate(_this.positions.current); } else {if (Math.abs(_this.touches.current - _this.touches.start) > params.moveStartThreshold || allowThresholdMove) {if (!allowThresholdMove) {allowThresholdMove = true; _this.touches.start = _this.touches.current; return; } _this.setWrapperTranslate(_this.positions.current); } else {_this.positions.current = _this.positions.start; } } if (params.freeMode || params.watchActiveIndex) {_this.updateActiveSlide(_this.positions.current); } if (params.grabCursor) {_this.container.style.cursor = 'move'; _this.container.style.cursor = 'grabbing'; _this.container.style.cursor = '-moz-grabbin'; _this.container.style.cursor = '-webkit-grabbing'; } if (!velocityPrevPosition) velocityPrevPosition = _this.touches.current; if (!velocityPrevTime) velocityPrevTime = (new Date()).getTime(); _this.velocity = (_this.touches.current - velocityPrevPosition) / ((new Date()).getTime() - velocityPrevTime) / 2; if (Math.abs(_this.touches.current - velocityPrevPosition) < 2) _this.velocity = 0; velocityPrevPosition = _this.touches.current; velocityPrevTime = (new Date()).getTime(); _this.callPlugins('onTouchMoveEnd'); if (params.onTouchMove) _this.fireCallback(params.onTouchMove, _this, event); return false; } } function onTouchEnd(event) {if (isScrolling) {_this.swipeReset(); } if (params.onlyExternal || !_this.isTouched) return; _this.isTouched = false; if (params.grabCursor) {_this.container.style.cursor = 'move'; _this.container.style.cursor = 'grab'; _this.container.style.cursor = '-moz-grab'; _this.container.style.cursor = '-webkit-grab'; } if (!_this.positions.current && _this.positions.current !== 0) {_this.positions.current = _this.positions.start; } if (params.followFinger) {_this.setWrapperTranslate(_this.positions.current); } _this.times.end = (new Date()).getTime(); _this.touches.diff = _this.touches.current - _this.touches.start; _this.touches.abs = Math.abs(_this.touches.diff); _this.positions.diff = _this.positions.current - _this.positions.start; _this.positions.abs = Math.abs(_this.positions.diff); var diff = _this.positions.diff; var diffAbs = _this.positions.abs; var timeDiff = _this.times.end - _this.times.start; if (diffAbs < 5 && (timeDiff) < 300 && _this.allowLinks === false) {if (!params.freeMode && diffAbs !== 0) _this.swipeReset(); if (params.preventLinks) {_this.allowLinks = true; } if (params.onSlideClick) {_this.allowSlideClick = true; } } setTimeout(function () {if (typeof _this === 'undefined' || _this === null) return; if (params.preventLinks) {_this.allowLinks = true; } if (params.onSlideClick) {_this.allowSlideClick = true; } }, 100); var maxPosition = maxWrapperPosition(); if (!_this.isMoved && params.freeMode) {_this.isMoved = false; if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event); _this.callPlugins('onTouchEnd'); return; } if (!_this.isMoved || _this.positions.current > 0 || _this.positions.current < -maxPosition) {_this.swipeReset(); if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event); _this.callPlugins('onTouchEnd'); return; } _this.isMoved = false; if (params.freeMode) {if (params.freeModeFluid) {var momentumDuration = 1000 * params.momentumRatio; var momentumDistance = _this.velocity * momentumDuration; var newPosition = _this.positions.current + momentumDistance; var doBounce = false; var afterBouncePosition; var bounceAmount = Math.abs(_this.velocity) * 20 * params.momentumBounceRatio; if (newPosition < -maxPosition) {if (params.momentumBounce && _this.support.transitions) {if (newPosition + maxPosition < -bounceAmount) newPosition = -maxPosition - bounceAmount; afterBouncePosition = -maxPosition; doBounce = true; allowMomentumBounce = true; } else newPosition = -maxPosition; } if (newPosition > 0) {if (params.momentumBounce && _this.support.transitions) {if (newPosition > bounceAmount) newPosition = bounceAmount; afterBouncePosition = 0; doBounce = true; allowMomentumBounce = true; } else newPosition = 0; } if (_this.velocity !== 0) momentumDuration = Math.abs((newPosition - _this.positions.current) / _this.velocity); _this.setWrapperTranslate(newPosition); _this.setWrapperTransition(momentumDuration); if (params.momentumBounce && doBounce) {_this.wrapperTransitionEnd(function () {if (!allowMomentumBounce) return; if (params.onMomentumBounce) _this.fireCallback(params.onMomentumBounce, _this); _this.callPlugins('onMomentumBounce'); _this.setWrapperTranslate(afterBouncePosition); _this.setWrapperTransition(300); }); } _this.updateActiveSlide(newPosition); } if (!params.freeModeFluid || timeDiff >= 300) _this.updateActiveSlide(_this.positions.current); if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event); _this.callPlugins('onTouchEnd'); return; } direction = diff < 0 ? 'toNext' : 'toPrev'; if (direction === 'toNext' && (timeDiff <= 300)) {if (diffAbs < 30 || !params.shortSwipes) _this.swipeReset(); else _this.swipeNext(true); } if (direction === 'toPrev' && (timeDiff <= 300)) {if (diffAbs < 30 || !params.shortSwipes) _this.swipeReset(); else _this.swipePrev(true); } var targetSlideSize = 0; if (params.slidesPerView === 'auto') {var currentPosition = Math.abs(_this.getWrapperTranslate()); var slidesOffset = 0; var _slideSize; for (var i = 0; i < _this.slides.length; i++) {_slideSize = isH ? _this.slides[i].getWidth(true, params.roundLengths) : _this.slides[i].getHeight(true, params.roundLengths); slidesOffset += _slideSize; if (slidesOffset > currentPosition) {targetSlideSize = _slideSize; break; } } if (targetSlideSize > containerSize) targetSlideSize = containerSize; } else {targetSlideSize = slideSize * params.slidesPerView; } if (direction === 'toNext' && (timeDiff > 300)) {if (diffAbs >= targetSlideSize * params.longSwipesRatio) {_this.swipeNext(true); } else {_this.swipeReset(); } } if (direction === 'toPrev' && (timeDiff > 300)) {if (diffAbs >= targetSlideSize * params.longSwipesRatio) {_this.swipePrev(true); } else {_this.swipeReset(); } } if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event); _this.callPlugins('onTouchEnd'); } function noSwipingSlide(el) {var noSwiping = false; do {if (el.className.indexOf(params.noSwipingClass) > -1) {noSwiping = true; } el = el.parentElement; } while (!noSwiping && el.parentElement && el.className.indexOf(params.wrapperClass) === -1); if (!noSwiping && el.className.indexOf(params.wrapperClass) > -1 && el.className.indexOf(params.noSwipingClass) > -1) noSwiping = true; return noSwiping; } function addClassToHtmlString(klass, outerHtml) {var par = document.createElement('div'); var child; par.innerHTML = outerHtml; child = par.firstChild; child.className += ' ' + klass; return child.outerHTML; } _this.swipeNext = function (internal) {if (!internal && params.loop) _this.fixLoop(); if (!internal && params.autoplay) _this.stopAutoplay(true); _this.callPlugins('onSwipeNext'); var currentPosition = _this.getWrapperTranslate(); var newPosition = currentPosition; if (params.slidesPerView === 'auto') {for (var i = 0; i < _this.snapGrid.length; i++) {if (-currentPosition >= _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {newPosition = -_this.snapGrid[i + 1]; break; } } } else {var groupSize = slideSize * params.slidesPerGroup; newPosition = -(Math.floor(Math.abs(currentPosition) / Math.floor(groupSize)) * groupSize + groupSize); } if (newPosition < -maxWrapperPosition()) {newPosition = -maxWrapperPosition(); } if (newPosition === currentPosition) return false; swipeToPosition(newPosition, 'next'); return true; }; _this.swipePrev = function (internal) {if (!internal && params.loop) _this.fixLoop(); if (!internal && params.autoplay) _this.stopAutoplay(true); _this.callPlugins('onSwipePrev'); var currentPosition = Math.ceil(_this.getWrapperTranslate()); var newPosition; if (params.slidesPerView === 'auto') {newPosition = 0; for (var i = 1; i < _this.snapGrid.length; i++) {if (-currentPosition === _this.snapGrid[i]) {newPosition = -_this.snapGrid[i - 1]; break; } if (-currentPosition > _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {newPosition = -_this.snapGrid[i]; break; } } } else {var groupSize = slideSize * params.slidesPerGroup; newPosition = -(Math.ceil(-currentPosition / groupSize) - 1) * groupSize; } if (newPosition > 0) newPosition = 0; if (newPosition === currentPosition) return false; swipeToPosition(newPosition, 'prev'); return true; }; _this.swipeReset = function () {_this.callPlugins('onSwipeReset'); var currentPosition = _this.getWrapperTranslate(); var groupSize = slideSize * params.slidesPerGroup; var newPosition; var maxPosition = -maxWrapperPosition(); if (params.slidesPerView === 'auto') {newPosition = 0; for (var i = 0; i < _this.snapGrid.length; i++) {if (-currentPosition === _this.snapGrid[i]) return; if (-currentPosition >= _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {if (_this.positions.diff > 0) newPosition = -_this.snapGrid[i + 1]; else newPosition = -_this.snapGrid[i]; break; } } if (-currentPosition >= _this.snapGrid[_this.snapGrid.length - 1]) newPosition = -_this.snapGrid[_this.snapGrid.length - 1]; if (currentPosition <= -maxWrapperPosition()) newPosition = -maxWrapperPosition(); } else {newPosition = currentPosition < 0 ? Math.round(currentPosition / groupSize) * groupSize : 0; if (currentPosition <= -maxWrapperPosition()) newPosition = -maxWrapperPosition(); } if (params.scrollContainer)  {newPosition = currentPosition < 0 ? currentPosition : 0; } if (newPosition < -maxWrapperPosition()) {newPosition = -maxWrapperPosition(); } if (params.scrollContainer && (containerSize > slideSize)) {newPosition = 0; } if (newPosition === currentPosition) return false; swipeToPosition(newPosition, 'reset'); return true; }; _this.swipeTo = function (index, speed, runCallbacks) {index = parseInt(index, 10); _this.callPlugins('onSwipeTo', {index: index, speed: speed}); if (params.loop) index = index + _this.loopedSlides; var currentPosition = _this.getWrapperTranslate(); if (index > (_this.slides.length - 1) || index < 0) return; var newPosition; if (params.slidesPerView === 'auto') {newPosition = -_this.slidesGrid[index]; } else {newPosition = -index * slideSize; } if (newPosition < - maxWrapperPosition()) {newPosition = - maxWrapperPosition(); } if (newPosition === currentPosition) return false; runCallbacks = runCallbacks === false ? false : true; swipeToPosition(newPosition, 'to', {index: index, speed: speed, runCallbacks: runCallbacks}); return true; }; function swipeToPosition(newPosition, action, toOptions) {var speed = (action === 'to' && toOptions.speed >= 0) ? toOptions.speed : params.speed; var timeOld = + new Date(); function anim() {var timeNew = + new Date(); var time = timeNew - timeOld; currentPosition += animationStep * time / (1000 / 60); condition = direction === 'toNext' ? currentPosition > newPosition : currentPosition < newPosition; if (condition) {_this.setWrapperTranslate(Math.ceil(currentPosition)); _this._DOMAnimating = true; window.setTimeout(function () {anim(); }, 1000 / 60); } else {if (params.onSlideChangeEnd) {if (action === 'to') {if (toOptions.runCallbacks === true) _this.fireCallback(params.onSlideChangeEnd, _this, direction); } else {_this.fireCallback(params.onSlideChangeEnd, _this, direction); } } _this.setWrapperTranslate(newPosition); _this._DOMAnimating = false; } } if (_this.support.transitions || !params.DOMAnimation) {_this.setWrapperTranslate(newPosition); _this.setWrapperTransition(speed); } else {var currentPosition = _this.getWrapperTranslate(); var animationStep = Math.ceil((newPosition - currentPosition) / speed * (1000 / 60)); var direction = currentPosition > newPosition ? 'toNext' : 'toPrev'; var condition = direction === 'toNext' ? currentPosition > newPosition : currentPosition < newPosition; if (_this._DOMAnimating) return; anim(); } _this.updateActiveSlide(newPosition); if (params.onSlideNext && action === 'next') {_this.fireCallback(params.onSlideNext, _this, newPosition); } if (params.onSlidePrev && action === 'prev') {_this.fireCallback(params.onSlidePrev, _this, newPosition); } if (params.onSlideReset && action === 'reset') {_this.fireCallback(params.onSlideReset, _this, newPosition); } if (action === 'next' || action === 'prev' || (action === 'to' && toOptions.runCallbacks === true)) slideChangeCallbacks(action); } _this._queueStartCallbacks = false; _this._queueEndCallbacks = false; function slideChangeCallbacks(direction) {_this.callPlugins('onSlideChangeStart'); if (params.onSlideChangeStart) {if (params.queueStartCallbacks && _this.support.transitions) {if (_this._queueStartCallbacks) return; _this._queueStartCallbacks = true; _this.fireCallback(params.onSlideChangeStart, _this, direction); _this.wrapperTransitionEnd(function () {_this._queueStartCallbacks = false; }); } else _this.fireCallback(params.onSlideChangeStart, _this, direction); } if (params.onSlideChangeEnd) {if (_this.support.transitions) {if (params.queueEndCallbacks) {if (_this._queueEndCallbacks) return; _this._queueEndCallbacks = true; _this.wrapperTransitionEnd(function (swiper) {_this.fireCallback(params.onSlideChangeEnd, swiper, direction); }); } else {_this.wrapperTransitionEnd(function (swiper) {_this.fireCallback(params.onSlideChangeEnd, swiper, direction); }); } } else {if (!params.DOMAnimation) {setTimeout(function () {_this.fireCallback(params.onSlideChangeEnd, _this, direction); }, 10); } } } } _this.updateActiveSlide = function (position) {if (!_this.initialized) return; if (_this.slides.length === 0) return; _this.previousIndex = _this.activeIndex; if (typeof position === 'undefined') position = _this.getWrapperTranslate(); if (position > 0) position = 0; var i; if (params.slidesPerView === 'auto') {var slidesOffset = 0; _this.activeIndex = _this.slidesGrid.indexOf(-position); if (_this.activeIndex < 0) {for (i = 0; i < _this.slidesGrid.length - 1; i++) {if (-position > _this.slidesGrid[i] && -position < _this.slidesGrid[i + 1]) {break; } } var leftDistance = Math.abs(_this.slidesGrid[i] + position); var rightDistance = Math.abs(_this.slidesGrid[i + 1] + position); if (leftDistance <= rightDistance) _this.activeIndex = i; else _this.activeIndex = i + 1; } } else {_this.activeIndex = Math[params.visibilityFullFit ? 'ceil' : 'round'](-position / slideSize); } if (_this.activeIndex === _this.slides.length) _this.activeIndex = _this.slides.length - 1; if (_this.activeIndex < 0) _this.activeIndex = 0; if (!_this.slides[_this.activeIndex]) return; _this.calcVisibleSlides(position); if (_this.support.classList) {var slide; for (i = 0; i < _this.slides.length; i++) {slide = _this.slides[i]; slide.classList.remove(params.slideActiveClass); if (_this.visibleSlides.indexOf(slide) >= 0) {slide.classList.add(params.slideVisibleClass); } else {slide.classList.remove(params.slideVisibleClass); } } _this.slides[_this.activeIndex].classList.add(params.slideActiveClass); } else {var activeClassRegexp = new RegExp('\\s*' + params.slideActiveClass); var inViewClassRegexp = new RegExp('\\s*' + params.slideVisibleClass); for (i = 0; i < _this.slides.length; i++) {_this.slides[i].className = _this.slides[i].className.replace(activeClassRegexp, '').replace(inViewClassRegexp, ''); if (_this.visibleSlides.indexOf(_this.slides[i]) >= 0) {_this.slides[i].className += ' ' + params.slideVisibleClass; } } _this.slides[_this.activeIndex].className += ' ' + params.slideActiveClass; } if (params.loop) {var ls = _this.loopedSlides; _this.activeLoopIndex = _this.activeIndex - ls; if (_this.activeLoopIndex >= _this.slides.length - ls * 2) {_this.activeLoopIndex = _this.slides.length - ls * 2 - _this.activeLoopIndex; } if (_this.activeLoopIndex < 0) {_this.activeLoopIndex = _this.slides.length - ls * 2 + _this.activeLoopIndex; } if (_this.activeLoopIndex < 0) _this.activeLoopIndex = 0; } else {_this.activeLoopIndex = _this.activeIndex; } if (params.pagination) {_this.updatePagination(position); } }; _this.createPagination = function (firstInit) {if (params.paginationClickable && _this.paginationButtons) {removePaginationEvents(); } _this.paginationContainer = params.pagination.nodeType ? params.pagination : $$(params.pagination)[0]; if (params.createPagination) {var paginationHTML = ''; var numOfSlides = _this.slides.length; var numOfButtons = numOfSlides; if (params.loop) numOfButtons -= _this.loopedSlides * 2; for (var i = 0; i < numOfButtons; i++) {paginationHTML += '<' + params.paginationElement + ' class="' + params.paginationElementClass + '"></' + params.paginationElement + '>'; } _this.paginationContainer.innerHTML = paginationHTML; } _this.paginationButtons = $$('.' + params.paginationElementClass, _this.paginationContainer); if (!firstInit) _this.updatePagination(); _this.callPlugins('onCreatePagination'); if (params.paginationClickable) {addPaginationEvents(); } }; function removePaginationEvents() {var pagers = _this.paginationButtons; if (pagers) {for (var i = 0; i < pagers.length; i++) {_this.h.removeEventListener(pagers[i], 'click', paginationClick); } } } function addPaginationEvents() {var pagers = _this.paginationButtons; if (pagers) {for (var i = 0; i < pagers.length; i++) {_this.h.addEventListener(pagers[i], 'click', paginationClick); } } } function paginationClick(e) {var index; var target = e.target || e.srcElement; var pagers = _this.paginationButtons; for (var i = 0; i < pagers.length; i++) {if (target === pagers[i]) index = i; } if (params.autoplay) _this.stopAutoplay(true); _this.swipeTo(index); } _this.updatePagination = function (position) {if (!params.pagination) return; if (_this.slides.length < 1) return; var activePagers = $$('.' + params.paginationActiveClass, _this.paginationContainer); if (!activePagers) return; var pagers = _this.paginationButtons; if (pagers.length === 0) return; for (var i = 0; i < pagers.length; i++) {pagers[i].className = params.paginationElementClass; } var indexOffset = params.loop ? _this.loopedSlides : 0; if (params.paginationAsRange) {if (!_this.visibleSlides) _this.calcVisibleSlides(position); var visibleIndexes = []; var j; for (j = 0; j < _this.visibleSlides.length; j++) {var visIndex = _this.slides.indexOf(_this.visibleSlides[j]) - indexOffset; if (params.loop && visIndex < 0) {visIndex = _this.slides.length - _this.loopedSlides * 2 + visIndex; } if (params.loop && visIndex >= _this.slides.length - _this.loopedSlides * 2) {visIndex = _this.slides.length - _this.loopedSlides * 2 - visIndex; visIndex = Math.abs(visIndex); } visibleIndexes.push(visIndex); } for (j = 0; j < visibleIndexes.length; j++) {if (pagers[visibleIndexes[j]]) pagers[visibleIndexes[j]].className += ' ' + params.paginationVisibleClass; } if (params.loop) {if (pagers[_this.activeLoopIndex] !== undefined) {pagers[_this.activeLoopIndex].className += ' ' + params.paginationActiveClass; } } else {pagers[_this.activeIndex].className += ' ' + params.paginationActiveClass; } } else {if (params.loop) {if (pagers[_this.activeLoopIndex]) pagers[_this.activeLoopIndex].className += ' ' + params.paginationActiveClass + ' ' + params.paginationVisibleClass; } else {pagers[_this.activeIndex].className += ' ' + params.paginationActiveClass + ' ' + params.paginationVisibleClass; } } }; _this.calcVisibleSlides = function (position) {var visibleSlides = []; var _slideLeft = 0, _slideSize = 0, _slideRight = 0; if (isH && _this.wrapperLeft > 0) position = position + _this.wrapperLeft; if (!isH && _this.wrapperTop > 0) position = position + _this.wrapperTop; for (var i = 0; i < _this.slides.length; i++) {_slideLeft += _slideSize; if (params.slidesPerView === 'auto') _slideSize  = isH ? _this.h.getWidth(_this.slides[i], true, params.roundLengths) : _this.h.getHeight(_this.slides[i], true, params.roundLengths); else _slideSize = slideSize; _slideRight = _slideLeft + _slideSize; var isVisibile = false; if (params.visibilityFullFit) {if (_slideLeft >= -position && _slideRight <= -position + containerSize) isVisibile = true; if (_slideLeft <= -position && _slideRight >= -position + containerSize) isVisibile = true; } else {if (_slideRight > -position && _slideRight <= ((-position + containerSize))) isVisibile = true; if (_slideLeft >= -position && _slideLeft < ((-position + containerSize))) isVisibile = true; if (_slideLeft < -position && _slideRight > ((-position + containerSize))) isVisibile = true; } if (isVisibile) visibleSlides.push(_this.slides[i]); } if (visibleSlides.length === 0) visibleSlides = [_this.slides[_this.activeIndex]]; _this.visibleSlides = visibleSlides; }; var autoplayTimeoutId, autoplayIntervalId; _this.startAutoplay = function () {if (_this.support.transitions) {if (typeof autoplayTimeoutId !== 'undefined') return false; if (!params.autoplay) return; _this.callPlugins('onAutoplayStart'); if (params.onAutoplayStart) _this.fireCallback(params.onAutoplayStart, _this); autoplay(); } else {if (typeof autoplayIntervalId !== 'undefined') return false; if (!params.autoplay) return; _this.callPlugins('onAutoplayStart'); if (params.onAutoplayStart) _this.fireCallback(params.onAutoplayStart, _this); autoplayIntervalId = setInterval(function () {if (params.loop) {_this.fixLoop(); _this.swipeNext(true); } else if (!_this.swipeNext(true)) {if (!params.autoplayStopOnLast) _this.swipeTo(0); else {clearInterval(autoplayIntervalId); autoplayIntervalId = undefined; } } }, params.autoplay); } }; _this.stopAutoplay = function (internal) {if (_this.support.transitions) {if (!autoplayTimeoutId) return; if (autoplayTimeoutId) clearTimeout(autoplayTimeoutId); autoplayTimeoutId = undefined; if (internal && !params.autoplayDisableOnInteraction) {_this.wrapperTransitionEnd(function () {autoplay(); }); } _this.callPlugins('onAutoplayStop'); if (params.onAutoplayStop) _this.fireCallback(params.onAutoplayStop, _this); } else {if (autoplayIntervalId) clearInterval(autoplayIntervalId); autoplayIntervalId = undefined; _this.callPlugins('onAutoplayStop'); if (params.onAutoplayStop) _this.fireCallback(params.onAutoplayStop, _this); } }; function autoplay() {autoplayTimeoutId = setTimeout(function () {if (params.loop) {_this.fixLoop(); _this.swipeNext(true); } else if (!_this.swipeNext(true)) {if (!params.autoplayStopOnLast) _this.swipeTo(0); else {clearTimeout(autoplayTimeoutId); autoplayTimeoutId = undefined; } } _this.wrapperTransitionEnd(function () {if (typeof autoplayTimeoutId !== 'undefined') autoplay(); }); }, params.autoplay); } _this.loopCreated = false; _this.removeLoopedSlides = function () {if (_this.loopCreated) {for (var i = 0; i < _this.slides.length; i++) {if (_this.slides[i].getData('looped') === true) _this.wrapper.removeChild(_this.slides[i]); } } }; _this.createLoop = function () {if (_this.slides.length === 0) return; if (params.slidesPerView === 'auto') {_this.loopedSlides = params.loopedSlides || 1; } else {_this.loopedSlides = params.slidesPerView + params.loopAdditionalSlides; } if (_this.loopedSlides > _this.slides.length) {_this.loopedSlides = _this.slides.length; } var slideFirstHTML = '', slideLastHTML = '', i; var slidesSetFullHTML = ''; var numSlides = _this.slides.length; var fullSlideSets = Math.floor(_this.loopedSlides / numSlides); var remainderSlides = _this.loopedSlides % numSlides; for (i = 0; i < (fullSlideSets * numSlides); i++) {var j = i; if (i >= numSlides) {var over = Math.floor(i / numSlides); j = i - (numSlides * over); } slidesSetFullHTML += _this.slides[j].outerHTML; } for (i = 0; i < remainderSlides;i++) {slideLastHTML += addClassToHtmlString(params.slideDuplicateClass, _this.slides[i].outerHTML); } for (i = numSlides - remainderSlides; i < numSlides;i++) {slideFirstHTML += addClassToHtmlString(params.slideDuplicateClass, _this.slides[i].outerHTML); } var slides = slideFirstHTML + slidesSetFullHTML + wrapper.innerHTML + slidesSetFullHTML + slideLastHTML; wrapper.innerHTML = slides; _this.loopCreated = true; _this.calcSlides(); for (i = 0; i < _this.slides.length; i++) {if (i < _this.loopedSlides || i >= _this.slides.length - _this.loopedSlides) _this.slides[i].setData('looped', true); } _this.callPlugins('onCreateLoop'); }; _this.fixLoop = function () {var newIndex; if (_this.activeIndex < _this.loopedSlides) {newIndex = _this.slides.length - _this.loopedSlides * 3 + _this.activeIndex; _this.swipeTo(newIndex, 0, false); } else if ((params.slidesPerView === 'auto' && _this.activeIndex >= _this.loopedSlides * 2) || (_this.activeIndex > _this.slides.length - params.slidesPerView * 2)) {newIndex = -_this.slides.length + _this.activeIndex + _this.loopedSlides; _this.swipeTo(newIndex, 0, false); } }; _this.loadSlides = function () {var slidesHTML = ''; _this.activeLoaderIndex = 0; var slides = params.loader.slides; var slidesToLoad = params.loader.loadAllSlides ? slides.length : params.slidesPerView * (1 + params.loader.surroundGroups); for (var i = 0; i < slidesToLoad; i++) {if (params.loader.slidesHTMLType === 'outer') slidesHTML += slides[i]; else {slidesHTML += '<' + params.slideElement + ' class="' + params.slideClass + '" data-swiperindex="' + i + '">' + slides[i] + '</' + params.slideElement + '>'; } } _this.wrapper.innerHTML = slidesHTML; _this.calcSlides(true); if (!params.loader.loadAllSlides) {_this.wrapperTransitionEnd(_this.reloadSlides, true); } }; _this.reloadSlides = function () {var slides = params.loader.slides; var newActiveIndex = parseInt(_this.activeSlide().data('swiperindex'), 10); if (newActiveIndex < 0 || newActiveIndex > slides.length - 1) return; _this.activeLoaderIndex = newActiveIndex; var firstIndex = Math.max(0, newActiveIndex - params.slidesPerView * params.loader.surroundGroups); var lastIndex = Math.min(newActiveIndex + params.slidesPerView * (1 + params.loader.surroundGroups) - 1, slides.length - 1); if (newActiveIndex > 0) {var newTransform = -slideSize * (newActiveIndex - firstIndex); _this.setWrapperTranslate(newTransform); _this.setWrapperTransition(0); } var i; if (params.loader.logic === 'reload') {_this.wrapper.innerHTML = ''; var slidesHTML = ''; for (i = firstIndex; i <= lastIndex; i++) {slidesHTML += params.loader.slidesHTMLType === 'outer' ? slides[i] : '<' + params.slideElement + ' class="' + params.slideClass + '" data-swiperindex="' + i + '">' + slides[i] + '</' + params.slideElement + '>'; } _this.wrapper.innerHTML = slidesHTML; } else {var minExistIndex = 1000; var maxExistIndex = 0; for (i = 0; i < _this.slides.length; i++) {var index = _this.slides[i].data('swiperindex'); if (index < firstIndex || index > lastIndex) {_this.wrapper.removeChild(_this.slides[i]); } else {minExistIndex = Math.min(index, minExistIndex); maxExistIndex = Math.max(index, maxExistIndex); } } for (i = firstIndex; i <= lastIndex; i++) {var newSlide; if (i < minExistIndex) {newSlide = document.createElement(params.slideElement); newSlide.className = params.slideClass; newSlide.setAttribute('data-swiperindex', i); newSlide.innerHTML = slides[i]; _this.wrapper.insertBefore(newSlide, _this.wrapper.firstChild); } if (i > maxExistIndex) {newSlide = document.createElement(params.slideElement); newSlide.className = params.slideClass; newSlide.setAttribute('data-swiperindex', i); newSlide.innerHTML = slides[i]; _this.wrapper.appendChild(newSlide); } } } _this.reInit(true); }; function makeSwiper() {_this.calcSlides(); if (params.loader.slides.length > 0 && _this.slides.length === 0) {_this.loadSlides(); } if (params.loop) {_this.createLoop(); } _this.init(); initEvents(); if (params.pagination) {_this.createPagination(true); } if (params.loop || params.initialSlide > 0) {_this.swipeTo(params.initialSlide, 0, false); } else {_this.updateActiveSlide(0); } if (params.autoplay) {_this.startAutoplay(); } _this.centerIndex = _this.activeIndex; if (params.onSwiperCreated) _this.fireCallback(params.onSwiperCreated, _this); _this.callPlugins('onSwiperCreated'); } makeSwiper(); }; Swiper.prototype = {plugins : {}, wrapperTransitionEnd : function (callback, permanent) {'use strict'; var a = this, el = a.wrapper, events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'], i; function fireCallBack(e) {if (e.target !== el) return; callback(a); if (a.params.queueEndCallbacks) a._queueEndCallbacks = false; if (!permanent) {for (i = 0; i < events.length; i++) {a.h.removeEventListener(el, events[i], fireCallBack); } } } if (callback) {for (i = 0; i < events.length; i++) {a.h.addEventListener(el, events[i], fireCallBack); } } }, getWrapperTranslate : function (axis) {'use strict'; var el = this.wrapper, matrix, curTransform, curStyle, transformMatrix; if (typeof axis === 'undefined') {axis = this.params.mode === 'horizontal' ? 'x' : 'y'; } if (this.support.transforms && this.params.useCSS3Transforms) {curStyle = window.getComputedStyle(el, null); if (window.WebKitCSSMatrix) {transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform === 'none' ? '' : curStyle.webkitTransform); } else {transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,'); matrix = transformMatrix.toString().split(','); } if (axis === 'x') {if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]); } if (axis === 'y') {if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]); } } else {if (axis === 'x') curTransform = parseFloat(el.style.left, 10) || 0; if (axis === 'y') curTransform = parseFloat(el.style.top, 10) || 0; } return curTransform || 0; }, setWrapperTranslate : function (x, y, z) {'use strict'; var es = this.wrapper.style, coords = {x: 0, y: 0, z: 0}, translate; if (arguments.length === 3) {coords.x = x; coords.y = y; coords.z = z; } else {if (typeof y === 'undefined') {y = this.params.mode === 'horizontal' ? 'x' : 'y'; } coords[y] = x; } if (this.support.transforms && this.params.useCSS3Transforms) {translate = this.support.transforms3d ? 'translate3d(' + coords.x + 'px, ' + coords.y + 'px, ' + coords.z + 'px)' : 'translate(' + coords.x + 'px, ' + coords.y + 'px)'; es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = translate; } else {es.left = coords.x + 'px'; es.top  = coords.y + 'px'; } this.callPlugins('onSetWrapperTransform', coords); if (this.params.onSetWrapperTransform) this.fireCallback(this.params.onSetWrapperTransform, this, coords); }, setWrapperTransition : function (duration) {'use strict'; var es = this.wrapper.style; es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = (duration / 1000) + 's'; this.callPlugins('onSetWrapperTransition', {duration: duration}); if (this.params.onSetWrapperTransition) this.fireCallback(this.params.onSetWrapperTransition, this, duration); }, h : {getWidth: function (el, outer, round) {'use strict'; var width = window.getComputedStyle(el, null).getPropertyValue('width'); var returnWidth = parseFloat(width); if (isNaN(returnWidth) || width.indexOf('%') > 0 || returnWidth < 0) {returnWidth = el.offsetWidth - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right')); } if (outer) returnWidth += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right')); if (round) return Math.ceil(returnWidth); else return returnWidth; }, getHeight: function (el, outer, round) {'use strict'; if (outer) return el.offsetHeight; var height = window.getComputedStyle(el, null).getPropertyValue('height'); var returnHeight = parseFloat(height); if (isNaN(returnHeight) || height.indexOf('%') > 0 || returnHeight < 0) {returnHeight = el.offsetHeight - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom')); } if (outer) returnHeight += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom')); if (round) return Math.ceil(returnHeight); else return returnHeight; }, getOffset: function (el) {'use strict'; var box = el.getBoundingClientRect(); var body = document.body; var clientTop  = el.clientTop  || body.clientTop  || 0; var clientLeft = el.clientLeft || body.clientLeft || 0; var scrollTop  = window.pageYOffset || el.scrollTop; var scrollLeft = window.pageXOffset || el.scrollLeft; if (document.documentElement && !window.pageYOffset) {scrollTop  = document.documentElement.scrollTop; scrollLeft = document.documentElement.scrollLeft; } return {top: box.top  + scrollTop  - clientTop, left: box.left + scrollLeft - clientLeft }; }, windowWidth : function () {'use strict'; if (window.innerWidth) return window.innerWidth; else if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth; }, windowHeight : function () {'use strict'; if (window.innerHeight) return window.innerHeight; else if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight; }, windowScroll : function () {'use strict'; if (typeof pageYOffset !== 'undefined') {return {left: window.pageXOffset, top: window.pageYOffset }; } else if (document.documentElement) {return {left: document.documentElement.scrollLeft, top: document.documentElement.scrollTop }; } }, addEventListener : function (el, event, listener, useCapture) {'use strict'; if (typeof useCapture === 'undefined') {useCapture = false; } if (el.addEventListener) {el.addEventListener(event, listener, useCapture); } else if (el.attachEvent) {el.attachEvent('on' + event, listener); } }, removeEventListener : function (el, event, listener, useCapture) {'use strict'; if (typeof useCapture === 'undefined') {useCapture = false; } if (el.removeEventListener) {el.removeEventListener(event, listener, useCapture); } else if (el.detachEvent) {el.detachEvent('on' + event, listener); } } }, setTransform : function (el, transform) {'use strict'; var es = el.style; es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transform; }, setTranslate : function (el, translate) {'use strict'; var es = el.style; var pos = {x : translate.x || 0, y : translate.y || 0, z : translate.z || 0 }; var transformString = this.support.transforms3d ? 'translate3d(' + (pos.x) + 'px,' + (pos.y) + 'px,' + (pos.z) + 'px)' : 'translate(' + (pos.x) + 'px,' + (pos.y) + 'px)'; es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transformString; if (!this.support.transforms) {es.left = pos.x + 'px'; es.top = pos.y + 'px'; } }, setTransition : function (el, duration) {'use strict'; var es = el.style; es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = duration + 'ms'; }, support: {touch : (window.Modernizr && Modernizr.touch === true) || (function () {'use strict'; return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch); })(), transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {'use strict'; var div = document.createElement('div').style; return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div); })(), transforms : (window.Modernizr && Modernizr.csstransforms === true) || (function () {'use strict'; var div = document.createElement('div').style; return ('transform' in div || 'WebkitTransform' in div || 'MozTransform' in div || 'msTransform' in div || 'MsTransform' in div || 'OTransform' in div); })(), transitions : (window.Modernizr && Modernizr.csstransitions === true) || (function () {'use strict'; var div = document.createElement('div').style; return ('transition' in div || 'WebkitTransition' in div || 'MozTransition' in div || 'msTransition' in div || 'MsTransition' in div || 'OTransition' in div); })(), classList : (function () {'use strict'; var div = document.createElement('div'); return 'classList' in div; })() }, browser : {ie8 : (function () {'use strict'; var rv = -1; if (navigator.appName === 'Microsoft Internet Explorer') {var ua = navigator.userAgent; var re = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/); if (re.exec(ua) !== null) rv = parseFloat(RegExp.$1); } return rv !== -1 && rv < 9; })(), ie10 : window.navigator.msPointerEnabled, ie11 : window.navigator.pointerEnabled } }; if (window.jQuery || window.Zepto) {(function ($) {'use strict'; $.fn.swiper = function (params) {var firstInstance; this.each(function (i) {var that = $(this); if (!that.data('swiper')) {var s = new Swiper(that[0], params); if (!i) firstInstance = s; that.data('swiper', s); } }); return firstInstance; }; })(window.jQuery || window.Zepto); } if (typeof(module) !== 'undefined') {module.exports = Swiper; } if (typeof define === 'function' && define.amd) {define([], function () {'use strict'; return Swiper; }); }

/* 18. idangerous.swiper.scrollbar-2.4.js
-----------------------------------------------------------------------------------------------*/
Swiper.prototype.plugins.scrollbar=function(c,A){var i=A&&A.container;if(!i){return}var l={hide:true,draggable:true,snapOnRelease:false};A=A||{};for(var d in l){if(!(d in A)){A[d]=l[d]}}if(!document.querySelectorAll){if(!window.jQuery){return}}function m(B){if(document.querySelectorAll){return document.querySelectorAll(B)}else{return jQuery(B)}}if(!(A.container.nodeType)){if(m(A.container).length==0){return}}var n=(A.container.nodeType)?A.container:m(A.container)[0];var s=c.params.mode=="horizontal",r=n,h,a,q,e,f,p;var v=document.createElement("div");v.className="swiper-scrollbar-drag";if(A.draggable){v.className+=" swiper-scrollbar-cursor-drag"}r.appendChild(v);if(A.hide){r.style.opacity=0}var g=c.touchEvents;if(A.draggable){var w=false;function z(B){w=true;if(B.preventDefault){B.preventDefault()}else{B.returnValue=false}k(B);clearTimeout(j);c.setTransition(r,0);r.style.opacity=1;c.setWrapperTransition(100);c.setTransition(v,100);if(A.onScrollbarDrag){A.onScrollbarDrag(c)}}function x(B){if(!w){return}if(B.preventDefault){B.preventDefault()}else{B.returnValue=false}k(B);c.setWrapperTransition(0);c.setTransition(r,0);c.setTransition(v,0);if(A.onScrollbarDrag){A.onScrollbarDrag(c)}}function u(B){w=false;if(A.hide){clearTimeout(j);j=setTimeout(function(){r.style.opacity=0;c.setTransition(r,400)},1000)}if(A.snapOnRelease){c.swipeReset()}}var t=c.support.touch?r:document;c.h.addEventListener(r,g.touchStart,z,false);c.h.addEventListener(t,g.touchMove,x,false);c.h.addEventListener(t,g.touchEnd,u,false);function k(G){var C=y=0;var B;if(s){var E=(G.type=="touchstart"||G.type=="touchmove")?G.targetTouches[0].pageX:G.pageX||G.clientX;C=(E)-c.h.getOffset(r).left-f/2;if(C<0){C=0}else{if((C+f)>h){C=h-f}}}else{var D=(G.type=="touchstart"||G.type=="touchmove")?G.targetTouches[0].pageY:G.pageY||G.clientY;y=(D)-c.h.getOffset(r).top-p/2;if(y<0){y=0}else{if((y+p)>a){y=a-p}}}c.setTranslate(v,{x:C,y:y});var H=-C/e;var F=-y/e;c.setWrapperTranslate(H,F,0);c.updateActiveSlide(s?H:F)}}function o(){v.style.width="";v.style.height="";if(s){h=c.h.getWidth(r,true);q=c.width/(c.h.getWidth(c.wrapper)+c.wrapperLeft+c.wrapperRight);e=q*(h/c.width);f=h*q;v.style.width=f+"px"}else{a=c.h.getHeight(r,true);q=c.height/(c.h.getHeight(c.wrapper)+c.wrapperTop+c.wrapperBottom);e=q*(a/c.height);p=a*q;if(p>a){p=a}v.style.height=p+"px"}if(q>=1){n.style.display="none"}else{n.style.display=""}}var j;var b={onFirstInit:function(B){o()},onInit:function(B){o()},onTouchMoveEnd:function(B){if(A.hide){clearTimeout(j);r.style.opacity=1;c.setTransition(r,200)}},onTouchEnd:function(B){if(A.hide){clearTimeout(j);j=setTimeout(function(){r.style.opacity=0;c.setTransition(r,400)},1000)}},onSetWrapperTransform:function(G){if(s){var E=G.x*e;var D=f;if(E>0){var F=E;E=0;D=f-F}else{if((-E+f)>h){D=h+E}}c.setTranslate(v,{x:-E});v.style.width=D+"px"}else{var C=G.y*e;var B=p;if(C>0){var F=C;C=0;B=p-F}else{if((-C+p)>a){B=a+C}}c.setTranslate(v,{y:-C});v.style.height=B+"px"}if(c.params.freeMode&&A.hide){clearTimeout(j);r.style.opacity=1;j=setTimeout(function(){r.style.opacity=0;c.setTransition(r,400)},1000)}},onSetWrapperTransition:function(B){c.setTransition(v,B.duration)},onDestroy:function(){var B=c.support.touch?r:document;c.h.removeEventListener(r,g.touchStart,z,false);c.h.removeEventListener(B,g.touchMove,x,false);c.h.removeEventListener(B,g.touchEnd,u,false)}};return b};


jQuery(document).ready(function(){

	var THEMEREX_custom_menu_placeholder = '';
	var THEMEREX_custom_menu_holderItem = '';
	jQuery('.menu-panel ul.sub-menu li a').on({
  		mouseenter:	function(){
			if (!jQuery(this).parents('.menu-panel').hasClass('columns')) {
				var title = jQuery(this).data('title'),
					href = jQuery(this).data('link'),
					thumb = jQuery(this).data('thumb'),
					author = jQuery(this).data('author'),
					pubdate = jQuery(this).data('pubdate'),
					comments = jQuery(this).data('comments'),
					holderParent = jQuery(this).parents('ul').next();
				if (holderParent) {
					THEMEREX_custom_menu_placeholder = holderParent.html();
					THEMEREX_custom_menu_holderItem  = holderParent;
					holderParent.find('img').attr('src', thumb);
					holderParent.find('.item_title a').text(title).attr('href', href);
					holderParent.find('.item_pubdate em').text(pubdate);
					holderParent.find('.item_comments em').text(comments);
					holderParent.find('.item_author em').text(author);
				}
			}
		},
		mouseleave: function() {
			/*
			if (THEMEREX_custom_menu_holderItem) {
				THEMEREX_custom_menu_holderItem.html(THEMEREX_custom_menu_placeholder);
			}
			*/
		}
	});

	var THEMEREX_custom_menu_hover_timeout = 0;
	jQuery('#mainmenu li.custom_view_item').on({
		mouseenter: function(e) {
			if (jQuery('body').hasClass('responsive_menu')) return;
			var th = jQuery(this);
			var panel = th.find('.menu-panel');
			panel.css({'display': 'block', 'visibility': 'hidden'});
			if (panel.hasClass('thumb_title')) {
				var li = panel.find('li > ul > li');
				var w = li.width() + parseInt(li.css('marginRight'),16);
				if (li.length > 1 && jQuery(window).width() > w*2) {
					w = w*2;
					panel.width(w);
				}
			} else {
				var w = panel.width();
			}
			panel.css({'display': 'none', 'visibility': 'visible'});
			/*
			var off = th.offset().left-th.parent().offset().left+th.width()-w+100;
			if (off<0 && Math.abs(off) > th.parent().offset().left) off = -th.parent().offset().left + 60;
			*/
			var off = th.offset().left-th.parent().offset().left;
			if (th.offset().left + w > jQuery(window).width()) off = jQuery(window).width() - 60 - w - th.parent().offset().left;
			panel.css('left', off);
		},
		mouseleave: function(e){
		}
	});
});

function parentCheck(th, divName) {
	thType = th.get(0).tagName.toLowerCase();
	if (divName != '' && thType == 'li') {
		if (th.find(divName).length > 0) {
			return th.find(divName);
		} else {
			return parentCheck(th.parent().parent(), divName);
		}
	}
}

/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b,d){var e,f,g,h=b.nodeName.toLowerCase();return"area"===h?(e=b.parentNode,f=e.name,b.href&&f&&"map"===e.nodeName.toLowerCase()?(g=a("img[usemap='#"+f+"']")[0],!!g&&c(g)):!1):(/^(input|select|textarea|button|object)$/.test(h)?!b.disabled:"a"===h?b.href||d:d)&&c(b)}function c(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return d&&"static"===b.css("position")?!1:e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)},uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(c){return b(c,!isNaN(a.attr(c,"tabindex")))},tabbable:function(c){var d=a.attr(c,"tabindex"),e=isNaN(d);return(e||d>=0)&&b(c,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(b){if(void 0!==b)return this.css("zIndex",b);if(this.length)for(var c,d,e=a(this[0]);e.length&&e[0]!==document;){if(c=e.css("position"),("absolute"===c||"relative"===c||"fixed"===c)&&(d=parseInt(e.css("zIndex"),10),!isNaN(d)&&0!==d))return d;e=e.parent()}return 0}}),a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});
// Shortcodes init
function initShortcodes(container) {
	// Tabs
	if (container.find('.sc_tabs:not(.inited),.tabs_area:not(.inited)').length > 0) {
		container.find('.sc_tabs:not(.inited),.tabs_area:not(.inited)').each(function () {
			var init = jQuery(this).data('active');
			if (isNaN(init)) init = 0;
			else init = Math.max(0, init);
			jQuery(this)
				.addClass('inited')
				.tabs({
					active: init,
					show: {
						effect: 'fade',
						duration: 250
					},
					hide: {
						effect: 'fade',
						duration: 200
					},
					create: function (event, ui) {
						initShortcodes(ui.panel);
					},
					activate: function (event, ui) {
						initShortcodes(ui.newPanel);
					}
				});
		});
	}

	// Accordion
	if (container.find('.sc_accordion:not(.inited)').length > 0) {
		container.find(".sc_accordion:not(.inited)").each(function () {
			var init = jQuery(this).data('active');
			if (isNaN(init)) init = 0;
			else init = Math.max(0, init);
			jQuery(this)
				.addClass('inited')
				.accordion({
					active: init,
					heightStyle: "content",
					header: "> .sc_accordion_item > .sc_accordion_title",
					create: function (event, ui) {
						initShortcodes(ui.panel);
						ui.header.each(function () {
							jQuery(this).parent().addClass('sc_active');
						});
					},
					activate: function (event, ui) {
						initShortcodes(ui.newPanel);
						ui.newHeader.each(function () {
							jQuery(this).parent().addClass('sc_active');
						});
						ui.oldHeader.each(function () {
							jQuery(this).parent().removeClass('sc_active');
						});
					}
				});
		});
	}

	// Toggles
	if (container.find('.sc_toggles .sc_toggles_title:not(.inited)').length > 0) {
		container.find('.sc_toggles .sc_toggles_title:not(.inited)')
			.addClass('inited')
			.on("click", function () {
				jQuery(this).parent().toggleClass('sc_active');
				jQuery(this).parent().find('.sc_toggles_content').slideToggle(200, function () {
					initShortcodes(jQuery(this).parent().find('.sc_toggles_content'));
				});
			});
	}

	// Tooltip
	if (container.find('.sc_tooltip_parent:not(.inited)').length > 0) {
		container.find('.sc_tooltip_parent:not(.inited)')
			.addClass('inited')
			.on({
				mouseenter: function () {
				"use strict";
				var obj = jQuery(this);
				obj.find('.sc_tooltip').stop().animate({
					'marginTop': '5'
				}, 100).show();
				},
				mouseleave: function () {
					"use strict";
					var obj = jQuery(this);
					obj.find('.sc_tooltip').stop().animate({
						'marginTop': '0'
					}, 100).hide();
				}
			});
	}

	// Infoboxes
	if (container.find('.sc_infobox.sc_infobox_closeable:not(.inited)').length > 0) {
		container.find('.sc_infobox.sc_infobox_closeable:not(.inited)')
			.addClass('inited')
			.on("click", function () {
				jQuery(this).slideUp();
			});
	}

	// Contact form
	if (container.find('.sc_contact_form .sc_contact_form_submit:not(.inited)').length > 0) {
		/*container.find(".sc_contact_form .sc_contact_form_submit:not(.inited)")
			.addClass('inited')
			.on("click", function(e){
				var form = jQuery(this).parents("form");
				var action = form.attr('action');
				userSubmitForm(form, action!=undefined ? action : THEMEREX_ajax_url, THEMEREX_ajax_nonce);
				e.preventDefault();
				return false;
			});*/
	}
	if (container.find('.sc_contact_form_custom .bubble label:not(.inited)').length > 0) {
		container.find(".sc_contact_form_custom .bubble label:not(.inited)")
			.addClass('inited')
			.on("click", function(e){
				jQuery(this).parent().siblings('.bubble').find('label').removeClass('selected');
				jQuery(this).addClass('selected');
			});
	}

	// Bordered images
	if (container.find('.sc_border:not(.inited)').length > 0) {
		container.find('.sc_border:not(.inited)')
			.each(function () {
				"use strict";
				if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
				jQuery(this).addClass('inited');
				var w = Math.round(jQuery(this).width());
				var h = Math.round(w/4*3);
				jQuery(this).find('.slides').css({height: h+'px'});
				jQuery(this).find('.slides li').css({width: w+'px', height: h+'px'});
			});
	}

	// Autoheight sliders
	if (container.find('.sc_slider_autoheight').length > 0) {
		container.find('.sc_slider_autoheight').each(function() {
			jQuery(this).find('li.swiper-slide,li.flex-slide,li.chop-slide').each(function() {
				if (jQuery(this).data('autoheight') == undefined) {
					jQuery(this).attr('data-autoheight', jQuery(this).height());
				}
			});
		});
	}

	// Flex Slider
	if (container.find('.sc_slider_flex:not(.inited)').length > 0) {
		container.find('.sc_slider_flex:not(.inited)')
			.addClass('inited')
			.each(function () {
				"use strict";
				if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
				if (jQuery(this).parents('.isotopeNOanim:not(.inited),.isotope:not(.inited)').length > 0) return;
				jQuery(this).flexslider({
					prevText: '',
					nextText: '',
					directionNav: jQuery(this).hasClass('sc_slider_controls'),
					controlNav: jQuery(this).hasClass('sc_slider_pagination') || jQuery(this).parents('.sc_slider_pagination_area').length > 0,
					animation: 'slide',
					animationLoop: true,
					slideshow: !jQuery(this).hasClass('sc_slider_noautoplay'),
					slideshowSpeed: isNaN(jQuery(this).data('interval')) ? 7000 : jQuery(this).data('interval'),
					animationSpeed: 600,
					pauseOnAction: true,
					pauseOnHover: true,
					useCSS: false,
					manualControls: jQuery(this).parents('.sc_slider_pagination_area').length > 0 ? '#'+jQuery(this).attr('id')+'_scroll ul li' : '',
					after: function(slider){
						if (slider.parents('.sc_slider_pagination_area').length > 0) {
							sliderChangeActivePagination(slider, slider.currentSlide);
						}
					}
				});
				calcSliderDimensions(jQuery(this));
			});
	}

	// Chop Slider
	if (container.find('.sc_slider_chop:not(.inited)').length > 0) {
		container.find('.sc_slider_chop:not(.inited)')
			.addClass('inited')
			.each(function () {
				"use strict";
				if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
				if (jQuery(this).parents('.isotopeNOanim:not(.inited),.isotope:not(.inited)').length > 0) return;
				var slider = jQuery(this);
				var effect = slider.data('effect').split('|');
				slider.chopSlider({
		/* Slide Element */
		slide : "#"+slider.attr('id')+" .chop-slide",
		/* Controlers */
		nextTrigger : slider.hasClass('sc_slider_controls') ? "#"+slider.attr('id')+" a.flex-next" : '',
		prevTrigger : slider.hasClass('sc_slider_controls') ? "#"+slider.attr('id')+" a.flex-prev" : '',
		hideControls : true,
		sliderPagination : slider.parents('.sc_slider_pagination_area').length > 0 ? "#"+slider.attr('id')+'_scroll ul li' : '',
		/* Captions */
		useCaptions : true,
		everyCaptionIn : "#"+slider.attr('id')+" .sc_slider_info_item",
		showCaptionIn : "#"+slider.attr('id')+" .sc_slider_info_holder",
		captionTransform : "scale(0) translate(-600px,0px) rotate(45deg)",
		/* Autoplay */
		autoplay : !slider.hasClass('sc_slider_noautoplay'),
		autoplayDelay : isNaN(slider.data('interval')) ? 6000 : slider.data('interval'),
		/* Default Parameters */
		defaultParameters : {
			type: "vertical",
			xOffset: 20,
			yOffset: 20,
			hPieces : 10,
			vPieces: 20,
			rotate : 10 ,
			rotateSymmetric: false,
			scaleX:0.5,
			scaleY:-0.5,
			translateX:10,
			translateY:10,
			ease1:"ease",
			ease2:"ease",
			origin:"center center",
			dur1: 1000,
			dur2 :600,
			dur3: 1000,
			pieceDelay : 50,
			xFadeDelay :0,
			prevTransition : 	{
				rotate:-10,
				xOffset:10,
				startFrom:10
			}
		},
		t2D : csTransitions[effect[0]]['random'],
		t3D : effect.length > 1 ? csTransitions[effect[1]]['random'] : false,
		/* For Mobile Devices */
		mobile: csTransitions['mobile']['random'],
		/* For Old and IE Browsers */
		noCSS3:csTransitions['noCSS3']['random'],
		/* Events */
		onStart: function(){},
		onEnd: function(){}

				});
				calcSliderDimensions(jQuery(this));
			});
	}

    // IDX Googlemap init
    if (container.find('#google_map_init').length > 0) {
        container.find('.sc_googlemap:not(.inited)')
            .each(function () {
                "use strict";
                if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
                var map = jQuery(this).addClass('inited');
                var map_id      = map.attr('id');
                var map_zoom    = map.data('zoom');
                var map_style   = map.data('style');
                var map_markers = [];
                map.find('.sc_googlemap_marker').each(function() {
                    "use strict";
                    var marker = jQuery(this);
                    map_markers.push({
                        point:          marker.data('point'),
                        address:        marker.data('address'),
                        latlng:         marker.data('latlng'),
                        description:    marker.data('description'),
                        title:          marker.data('title')
                    });
                });
                themerex_googlemap_init( jQuery('#'+map_id).get(0), {style: map_style, zoom: map_zoom, markers: map_markers});
            });
    }

	// Swiper Slider
	if (container.find('.sc_slider_swiper:not(.inited)').length > 0) {
		container.find('.sc_slider_swiper:not(.inited)')
			.each(function () {
				"use strict";
				if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
				if (jQuery(this).parents('.isotopeNOanim:not(.inited),.isotope:not(.inited)').length > 0) return;
				jQuery(this).addClass('inited');
				var id = jQuery(this).attr('id');
				if (id == undefined) {
					id = 'swiper_'+Math.random();
					id = id.replace('.', '');
					jQuery(this).attr('id', id);
				}
				jQuery(this).addClass(id);
				jQuery(this).find('.slides li').css('position', 'relative');

                if(jQuery(this).parent().hasClass('sc_text_slider') || jQuery(this).parent().hasClass('sc_testimonials') || jQuery(this).parent().hasClass('sc_twitter') ) {
                    THEMEREX_Swipers[id] = new Swiper('.' + id, {
                        loop: true,
                        grabCursor: true,
                        pagination: jQuery(this).hasClass('sc_slider_pagination') ? '#' + id + ' .flex-control-nav' : false,
                        paginationClickable: true,
                        calculateHeight: true,
                        resizeReInit: true,
                        autoResize: true,
                        autoplay: jQuery(this).hasClass('sc_slider_noautoplay') ? false : (isNaN(jQuery(this).data('interval')) ? 7000 : jQuery(this).data('interval')),
                        autoplayDisableOnInteraction: false,
                        initialSlide: 0,
                        speed: 600
                    });
                    jQuery(window).resize(function(){
                        THEMEREX_Swipers[id].resizeFix();
                        THEMEREX_Swipers[id].reInit();
                    });

                } else {
                    THEMEREX_Swipers[id] = new Swiper('.' + id, {
                        loop: true,
                        grabCursor: true,
                        pagination: jQuery(this).hasClass('sc_slider_pagination') ? '#' + id + ' .flex-control-nav' : false,
                        paginationClickable: true,
                        calculateHeight: false,
                        autoplay: jQuery(this).hasClass('sc_slider_noautoplay') ? false : (isNaN(jQuery(this).data('interval')) ? 7000 : jQuery(this).data('interval')),
                        autoplayDisableOnInteraction: false,
                        initialSlide: 0,
                        speed: 600,
                        onFirstInit: function (slider) {
                            var cont = jQuery(slider.container);
                            if (!cont.hasClass('sc_slider_autoheight')) return;
                            var li = cont.find('li.swiper-slide').eq(1);
                            var h = li.data('autoheight');
                            if (h > 0) {
                                var pt = parseInt(li.css('paddingTop')), pb = parseInt(li.css('paddingBottom'));
                                cont.height(h + (isNaN(pt) ? 0 : pt) + (isNaN(pb) ? 0 : pb));
                                cont.find('.swiper-wrapper').height(h + (isNaN(pt) ? 0 : pt) + (isNaN(pb) ? 0 : pb));
                            }
                        },
                        onSlideChangeStart: function (slider) {
                            var cont = jQuery(slider.container);
                            if (!cont.hasClass('sc_slider_autoheight')) return;
                            var idx = slider.activeIndex;
                            var li = cont.find('li.swiper-slide').eq(idx);
                            var h = li.data('autoheight');
                            if (h > 0) {
                                var pt = parseInt(li.css('paddingTop')), pb = parseInt(li.css('paddingBottom'));
                                li.height(h);
                                cont.height(h + (isNaN(pt) ? 0 : pt) + (isNaN(pb) ? 0 : pb));
                                cont.find('.swiper-wrapper').height(h + (isNaN(pt) ? 0 : pt) + (isNaN(pb) ? 0 : pb));
                            }
                        },
                        onSlideChangeEnd: function (slider, dir) {
                            var cont = jQuery(slider.container);
                            if (cont.parents('.sc_slider_pagination_area').length > 0) {
                                var li = cont.parents('.sc_slider_pagination_area').find('.flex-control-nav.manual ul li');
                                var idx = slider.activeIndex > li.length ? 0 : slider.activeIndex - 1;
                                sliderChangeActivePagination(cont, idx);
                            }
                        }
                    });
                }

				var curSlide = jQuery(this).find('.slides').data('current-slide');
				if (curSlide > 0)
					THEMEREX_Swipers[id].swipeTo(curSlide-1);
				prepareSliderNavi(jQuery(this));
				calcSliderDimensions(jQuery(this));
			});
	}

	//Scroll
	if (container.find('.sc_scroll:not(.inited)').length > 0) {
		container.find('.sc_scroll:not(.inited)')
			.each(function () {
				"use strict";
				if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
				jQuery(this).addClass('inited');
				var id = jQuery(this).attr('id');
				if (id == undefined) {
					id = 'scroll_'+Math.random();
					id = id.replace('.', '');
					jQuery(this).attr('id', id);
				}
				jQuery(this).addClass(id);
				var bar = jQuery(this).find('#'+id+'_bar');
				if (bar.length > 0 && !bar.hasClass(id+'_bar')) {
					bar.addClass(id+'_bar');
				}
				THEMEREX_Swipers[id] = new Swiper('.'+id, {
					freeMode: true,
					freeModeFluid: true,
					grabCursor: true,
					noSwiping: jQuery(this).hasClass('scroll-no-swiping'),
					mode: jQuery(this).hasClass('sc_scroll_vertical') ? 'vertical' : 'horizontal',
					slidesPerView: jQuery(this).hasClass('sc_scroll') ? 'auto' : 1,
					mousewheelControl: true,
					mousewheelAccelerator: 4,	// Accelerate mouse wheel in Firefox 4+
					scrollContainer: jQuery(this).hasClass('sc_scroll_vertical'),
					scrollbar: {
						container: '.'+id+'_bar',
						hide: true,
						draggable: true
					}
				});
				prepareSliderNavi(jQuery(this));
			});
	}

    //Countdown
    if (container.find('.sc_countdown_counter:not(.inited)').length > 0) {
        var myCountdown = {};
        container.find('.sc_countdown_counter:not(.inited)')
            .each(function () {
                "use strict";
                if (jQuery(this).parents('div:hidden').length > 0) return;
                jQuery(this).addClass('inited');
                var id = jQuery(this).attr('id');
                if (id == undefined) {
                    id = 'countdown_'+Math.random();
                    id = id.replace('.', '');
                    jQuery(this).attr('id', id);
                }
                var style = jQuery(this).data('style');
                var curDate = new Date();
                var endDate = jQuery(this).data('date');
                if (endDate == undefined || endDate == ''){
                    var cur_date_year = curDate.getFullYear();
                    var cur_date_mounth = ((curDate.getMonth()+1)%12) + 1;
                    var cur_date_mounth = cur_date_mounth<10 ?  '0'+cur_date_mounth : cur_date_mounth;
                    var cur_date_day = curDate.getDate()<10 ? '0'+curDate.getDate() : curDate.getDate();
                    endDate = cur_date_year+'-'+cur_date_mounth+'-'+cur_date_day;
                }
                endDate = endDate.split('-');
                var endTime = jQuery(this).data('time');
                if (endTime == undefined || endTime == ''){
                    endTime = '00:00:00';
                }
                endTime = endTime.split(':');
                if (endTime.length==2){
                    endTime[2] = 0;
                }
                var destDate = new Date(endDate[0], endDate[1]-1, endDate[2], endTime[0], endTime[1], endTime[2]);
                var diff = Math.round(destDate.getTime() / 1000 - curDate.getTime() / 1000);

                if( style == 'flip'){
                    myCountdown[id] = jQuery('#'+id).FlipClock(diff, {
                        countdown: true,
                        clockFace: 'DailyCounter'
                    });
                } else {
                    myCountdown[id] = jQuery('#'+id).countdown({
                        until: diff
                    });

                }
            });
    }

	//Zoom
	if (container.find('.sc_zoom:not(.inited)').length > 0) {
		container.find('.sc_zoom:not(.inited)')
			.each(function () {
				"use strict";
				if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
				jQuery(this).addClass('inited');
				jQuery(this).find('img').elevateZoom({
					zoomType: "lens",
					lensShape: "round",
					lensSize: 200
				});
			});
	}

	//Skills init
	if (container.find('.sc_skills_item:not(.inited)').length > 0) {
		skills_init(container);
		jQuery(window).scroll(function () { skills_init(container); });
	}
	//Skills type='arc' init
	if (container.find('.sc_skills_arc:not(.inited)').length > 0) {
		skills_arc_init(container);
		jQuery(window).scroll(function () { skills_arc_init(container); });
	}

	//Pan init
	if (container.find('.sc_pan:not(.inited_pan)').length > 0) {
		container.find('.sc_pan:not(.inited_pan)')
			.each(function () {
				"use strict";
				if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
				var pan = jQuery(this).addClass('inited_pan');
				var cont = pan.parent();
				cont.mousemove(function(e) {
					"use strict";
					var anim = {};
					var tm = 0;
					var pw = pan.width(), ph = pan.height();
					var cw = cont.width(), ch = cont.height();
					var coff = cont.offset();
					if (pan.hasClass('sc_pan_vertical'))
						pan.css('top', -Math.floor((e.pageY - coff.top) / ch * (ph-ch)));
					if (pan.hasClass('sc_pan_horizontal'))
						pan.css('left', -Math.floor((e.pageX - coff.left) / cw * (pw-cw)));
				});
				cont.mouseout(function(e) {
					pan.css({'left': 0, 'top': 0});
				});
			});
	}
}

// Slider navigation
var THEMEREX_Swipers = {};
function prepareSliderNavi(slider) {
	// Prev / Next
	var navi = slider.find('.flex-direction-nav');
	if (navi.length == 0) navi = slider.siblings('.flex-direction-nav');
	if (navi.length > 0) {
		navi.find('.flex-prev').on("click", function(e){
			var swiper = jQuery(this).parents('.swiper-slider-container');
			if (swiper.length == 0) swiper = jQuery(this).parents('.flex-direction-nav').siblings('.swiper-slider-container');
			var id = swiper.attr('id');
			THEMEREX_Swipers[id].swipePrev();
			e.preventDefault();
			return false;
		});
		navi.find('.flex-next').on("click", function(e){
			var swiper = jQuery(this).parents('.swiper-slider-container');
			if (swiper.length == 0) swiper = jQuery(this).parents('.flex-direction-nav').siblings('.swiper-slider-container');
			var id = swiper.attr('id');
			THEMEREX_Swipers[id].swipeNext();
			e.preventDefault();
			return false;
		});
	}

	// Pagination
	navi = slider.siblings('.flex-control-nav.manual');
	if (navi.length > 0) {
		navi.find('li').on("click", function(e){
			var swiper = jQuery(this).parents('.sc_slider_pagination_area').find('.swiper-slider-container');
			var id = swiper.attr('id');
			THEMEREX_Swipers[id].swipeTo(jQuery(this).index());
			e.preventDefault();
			return false;
		});
	}
}

function sliderChangeActivePagination(slider, idx) {
	var pg = slider.parents('.sc_slider_pagination_area').find('.flex-control-nav.manual');
	pg.find('ul li').removeClass('active').eq(idx).addClass('active');
	var h = pg.height();
	var off = pg.find('.active').offset().top - pg.offset().top;
	var off2 = pg.find('.sc_scroll_wrapper').offset().top - pg.offset().top;
	var h2  = pg.find('.active').height();
	if (off < 0) {
		pg.find('.sc_scroll_wrapper').css({'transform': 'translate3d(0px, 0px, 0px)', 'transition-duration': '0.3s'});
	} else if (h <= off+h2) {
		pg.find('.sc_scroll_wrapper').css({'transform': 'translate3d(0px, -'+(Math.abs(off2)+off+h2-h/4)+'px, 0px)', 'transition-duration': '0.3s'});
	}
}

// Slider dimensions
function calcSliderDimensions(slider) {
     if(slider.parent().hasClass('sc_text_slider') || slider.parent().hasClass('sc_testimonials') || slider.parent().hasClass('sc_twitter') ) return;
     if (slider.height() == 0 || slider.hasClass('sc_slider_noresize') || !slider.hasClass('inited')) return;
     var w = slider.data('old-width');
     var h = slider.data('old-height');
     if (isNaN(w) || w<50 || isNaN(h) || h<50) {
     slider.data('old-width', slider.width());
     slider.data('old-height', slider.height());
     } else if (w != slider.width()) {
     if (w < slider.width()) slider.width(w);	// Prevent to make slider dimensions bigger then original
     var newH = Math.round(slider.width()/w*h);
     slider.find('.slides').height(newH);
     slider.find('.slides li').height(newH);
     }
     //resizeIsotope();
}

// skills init
function skills_init(container) {
	if (arguments.length==0) var container = jQuery('body');
	var scrollPosition = jQuery(window).scrollTop() + jQuery(window).height();

	container.find('.sc_skills_item:not(.inited)').each(function () {
		var skillsItem = jQuery(this);
		var scrollSkills = skillsItem.offset().top;
		if (scrollPosition > scrollSkills) {
			skillsItem.addClass('inited');
			var skills = skillsItem.parents('.sc_skills').eq(0);
			var type = skills.data('type');
			var total = skillsItem.find('.sc_skills_total').eq(0);
			var start = parseInt(total.data('start'));
			var stop = parseInt(total.data('stop'));
			var maximum = parseInt(total.data('max'));
			var startPercent = Math.round(start/maximum*100);
			var stopPercent = Math.round(stop/maximum*100);
			var ed = total.data('ed');
			var duration = parseInt(total.data('duration'));
			var speed = parseInt(total.data('speed'));
			var step = parseInt(total.data('step'));
			if (type == 'bar') {
				var dir = skills.data('dir');
				var count = skillsItem.find('.sc_skills_count').eq(0);
				if (dir=='horizontal')
					count.css('width', startPercent + '%').animate({ width: stopPercent + '%' }, duration);
				else if (dir=='vertical')
					count.css('height', startPercent + '%').animate({ height: stopPercent + '%' }, duration);
				skills_counter(start, stop, speed-(dir!='unknown' ? 5 : 0), step, ed, total);
			} else if (type == 'counter') {
				skills_counter(start, stop, speed - 5, step, ed, total);
			} else if (type == 'pie') {
				var steps = parseInt(total.data('steps'));
				var color = total.data('color');
				var easing = total.data('easing');

				skills_counter(start, stop, Math.round(1500/steps), step, ed, total);

				var options = {
					segmentShowStroke: true,
					segmentStrokeColor: "#fff",
					segmentStrokeWidth: 0,
					animationSteps: steps,
					animationEasing: easing,
					animateRotate: true,
					animateScale: false,
                    percentageInnerCutout: 95
				};

				var pieData = [{
					value: stopPercent,
					color: color
				}, {
					value: 100 - stopPercent,
					color: "#f5f7f9"
				}];
				var canvas = skillsItem.find('canvas');
				canvas.attr({width: skillsItem.width(), height: skillsItem.width()}).css({width: skillsItem.width(), height: skillsItem.height()});
				//var pie = new Chart(canvas.get(0).getContext("2d")).Pie(pieData, options);
                var pie = new Chart(canvas.get(0).getContext("2d")).Doughnut(pieData,options);
			}
		}
	});
}

//skills counter animation
function skills_counter(start, stop, speed, step, ed, total) {
	start = Math.min(stop, start + step);
	total.text(start+ed);
	if (start < stop) {
		setTimeout(function () {
			skills_counter(start, stop, speed, step, ed, total);
		}, speed);
	}
}

//skills arc init
function skills_arc_init(container) {
	if (arguments.length==0) var container = jQuery('body');
	container.find('.sc_skills_arc:not(.inited)').each(function () {
		var arc = jQuery(this);
		arc.addClass('inited');
		var items = arc.find('.sc_skills_data .arc');
		var canvas = arc.find('.sc_skills_arc_canvas').eq(0);
		var legend = arc.find('.sc_skills_legend').eq(0);
		var w = Math.round(arc.width() - legend.width());
		var c = Math.floor(w/2);
		var o = {
			random: function(l, u){
				return Math.floor((Math.random()*(u-l+1))+l);
			},
			diagram: function(){
				var r = Raphael(canvas.attr('id'), w, w),
					rad = hover = Math.round(w/2/items.length),
					step = Math.round(((w-20)/2-rad)/items.length),
					stroke = Math.round(w/9/items.length),
					speed = 400;

				r.circle(c, c, Math.round(w/2)).attr({ stroke: 'none', fill: THEMEREX_theme_skin_bg ? THEMEREX_theme_skin_bg : '#ffffff' });

				var title = r.text(c, c, arc.data('subtitle')).attr({
					font: 'lighter '+Math.round(rad*0.8)+'px "'+THEMEREX_theme_font+'"',
					fill: '#232a34'
				}).toFront();

				rad -= Math.round(step/2);

				r.customAttributes.arc = function(value, color, rad){
					var v = 3.6 * value,
						alpha = v == 360 ? 359.99 : v,
						rand = o.random(91, 240),
						a = (rand-alpha) * Math.PI/180,
						b = rand * Math.PI/180,
						sx = c + rad * Math.cos(b),
						sy = c - rad * Math.sin(b),
						x = c + rad * Math.cos(a),
						y = c - rad * Math.sin(a),
						path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
					return { path: path, stroke: color }
				}

				items.each(function(i){
					var t = jQuery(this),
						color = t.find('.color').val(),
						value = t.find('.percent').val(),
						text = t.find('.text').text();

					rad += step;
					var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': stroke });

					z.mouseover(function(){
						this.animate({ 'stroke-width': hover, opacity: .75 }, 1000, 'elastic');
						if (Raphael.type != 'VML') //solves IE problem
							this.toFront();
						title.stop().animate({ opacity: 0 }, speed, '>', function(){
							this.attr({ text: (text ? text + '\n' : '') + value + '%' }).animate({ opacity: 1 }, speed, '<');
						});
					}).mouseout(function(){
						this.stop().animate({ 'stroke-width': stroke, opacity: 1 }, speed*4, 'elastic');
						title.stop().animate({ opacity: 0 }, speed, '>', function(){
							title.attr({ text: arc.data('subtitle') }).animate({ opacity: 1 }, speed, '<');
						});
					});
				});

			}
		}
		o.diagram();
	});
}

// Hover effects on mobile
function hover_mobile() {
    if (jQuery("#mobile_tap_hover").length > 0) {
        jQuery('a.taphover').on("touchstart", function(e) {
            var link = jQuery(this); //preselect the link
            if (link.hasClass('hover')) {
                return true;
            } else {
                link.addClass("hover");
                //$(this).parent().css({'z-index': 1});
                jQuery('a.taphover').not(this).removeClass("hover");
                e.preventDefault();
                return false; //extra, and to make sure the function has consistent return points
            }
        });

        jQuery('.imgNav.taphover').on("touchstart", function(e) {
            var link = jQuery(this); //preselect the link
            if (link.hasClass('hover')) {
                jQuery('.itemNext.taphover').not(this).removeClass("hover");
                jQuery('.itemPrev.taphover').not(this).removeClass("hover");
                return true;
            } else {
                link.addClass("hover");
                jQuery('.imgNav.taphover').not(this).removeClass("hover");
                e.preventDefault();
                return false; //extra, and to make sure the function has consistent return points
            }
        });
    }
}

// Popup messages
//-----------------------------------------------------------------
jQuery(document).ready(function(){
	"use strict";
	jQuery('body').on('click', '#themerex_modal_bg,.themerex_message .themerex_message_close', function (e) {
		"use strict";
		themerex_message_destroy();
		if (THEMEREX_MESSAGE_CALLBACK) {
			THEMEREX_MESSAGE_CALLBACK(0);
			THEMEREX_MESSAGE_CALLBACK = null;
		}
		e.preventDefault();
		return false;
	});
});

var THEMEREX_MESSAGE_CALLBACK = null;
var THEMEREX_MESSAGE_TIMEOUT = 5000;

// Warning
function themerex_message_warning(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'cancel';
	var delay = arguments[3] ? arguments[3] : THEMEREX_MESSAGE_TIMEOUT;
	return themerex_message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'warning',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Success
function themerex_message_success(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'check';
	var delay = arguments[3] ? arguments[3] : THEMEREX_MESSAGE_TIMEOUT;
	return themerex_message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'success',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Info
function themerex_message_info(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'info';
	var delay = arguments[3] ? arguments[3] : THEMEREX_MESSAGE_TIMEOUT;
	return themerex_message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'info',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Regular
function themerex_message_regular(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'quote';
	var delay = arguments[3] ? arguments[3] : THEMEREX_MESSAGE_TIMEOUT;
	return themerex_message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'regular',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Confirm dialog
function themerex_message_confirm(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var callback = arguments[2] ? arguments[2] : null;
	return themerex_message({
		msg: msg,
		hdr: hdr,
		icon: 'help',
		type: 'regular',
		delay: 0,
		buttons: ['Yes', 'No'],
		callback: callback
	});
}

// Modal dialog
function themerex_message_dialog(content) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var init = arguments[2] ? arguments[2] : null;
	var callback = arguments[3] ? arguments[3] : null;
	return themerex_message({
		msg: content,
		hdr: hdr,
		icon: '',
		type: 'regular',
		delay: 0,
		buttons: ['Apply', 'Cancel'],
		init: init,
		callback: callback
	});
}

// General message window
function themerex_message(opt) {
	"use strict";
	var msg = opt.msg != undefined ? opt.msg : '';
	var hdr  = opt.hdr != undefined ? opt.hdr : '';
	var icon = opt.icon != undefined ? opt.icon : '';
	var type = opt.type != undefined ? opt.type : 'regular';
	var delay = opt.delay != undefined ? opt.delay : THEMEREX_MESSAGE_TIMEOUT;
	var buttons = opt.buttons != undefined ? opt.buttons : [];
	var init = opt.init != undefined ? opt.init : null;
	var callback = opt.callback != undefined ? opt.callback : null;
	// Modal bg
	jQuery('#themerex_modal_bg').remove();
	jQuery('body').append('<div id="themerex_modal_bg"></div>');
	jQuery('#themerex_modal_bg').fadeIn();
	// Popup window
	jQuery('.themerex_message').remove();
	var html = '<div class="themerex_message themerex_message_' + type + (buttons.length > 0 ? ' themerex_message_dialog' : '') + '">'
		+ '<span class="themerex_message_close iconadmin-cancel icon-cancel"></span>'
		+ (icon ? '<span class="themerex_message_icon iconadmin-'+icon+' icon-'+icon+'"></span>' : '')
		+ (hdr ? '<h2 class="themerex_message_header">'+hdr+'</h2>' : '');
	html += '<div class="themerex_message_body">' + msg + '</div>';
	if (buttons.length > 0) {
		html += '<div class="themerex_message_buttons">';
		for (var i=0; i<buttons.length; i++) {
			html += '<span class="themerex_message_button">'+buttons[i]+'</span>';
		}
		html += '</div>';
	}
	html += '</div>';
	// Add popup to body
	jQuery('body').append(html);
	var popup = jQuery('body .themerex_message').eq(0);
	// Prepare callback on buttons click
	if (callback != null) {
		THEMEREX_MESSAGE_CALLBACK = callback;
		jQuery('.themerex_message_button').on("click", function(e) {
			"use strict";
			var btn = jQuery(this).index();
			callback(btn+1, popup);
			THEMEREX_MESSAGE_CALLBACK = null;
			themerex_message_destroy();
		});
	}
	// Call init function
	if (init != null) init(popup);
	// Show (animate) popup
	var top = jQuery(window).scrollTop();
	jQuery('body .themerex_message').animate({top: top+Math.round((jQuery(window).height()-jQuery('.themerex_message').height())/2), opacity: 1}, {complete: function () {
		// Call init function
		//if (init != null) init(popup);
	}});
	// Delayed destroy (if need)
	if (delay > 0) {
		setTimeout(function() { themerex_message_destroy(); }, delay);
	}
	return popup;
}

// Destroy message window
function themerex_message_destroy() {
	"use strict";
	var top = jQuery(window).scrollTop();
	jQuery('#themerex_modal_bg').fadeOut();
	jQuery('.themerex_message').animate({top: top-jQuery('.themerex_message').height(), opacity: 0});
	setTimeout(function() { jQuery('#themerex_modal_bg').remove(); jQuery('.themerex_message').remove(); }, 500);
}

var THEMEREX_validateForm = null;

function userSubmitForm(form, url, nonce){
	"use strict";
	var error = false;
	var form_custom = form.data('formtype')=='custom';
    var form_style = form.data('formtype');

    if (form_style == 'call') {
        error = formValidate(form, {
            error_message_show: true,
            error_message_time: 5000,
            error_message_class: "sc_infobox sc_infobox_style_error",
            error_fields_class: "error_fields_class",
            exit_after_first_error: false,
            rules: [
                {
                    field: "username",
                    min_length: { value: 1,	 message: THEMEREX_NAME_EMPTY },
                    max_length: { value: 60, message: THEMEREX_NAME_LONG}
                },
                {
                    field: "phone",
                    min_length: { value: 1,	 message: THEMEREX_PHONE_EMPTY },
                    max_length: { value: 60, message: THEMEREX_PHONE_LONG}
                },
                {
                    field: "message",
                    min_length: { value: 1,  message: THEMEREX_MESSAGE_EMPTY },
                    max_length: { value: THEMEREX_msg_maxlength_contacts, message: THEMEREX_MESSAGE_LONG}
                }
            ]
        });
    }

    if (form_style == 'boxed') {
        error = formValidate(form, {
            error_message_show: true,
            error_message_time: 5000,
            error_message_class: "sc_infobox sc_infobox_style_error",
            error_fields_class: "error_fields_class",
            exit_after_first_error: false,
            rules: [
                {
                    field: "username",
                    min_length: { value: 1,	 message: THEMEREX_NAME_EMPTY },
                    max_length: { value: 60, message: THEMEREX_NAME_LONG}
                },
                {
                    field: "email",
                    min_length: { value: 7,	 message: THEMEREX_EMAIL_EMPTY },
                    max_length: { value: 60, message: THEMEREX_EMAIL_LONG},
                    mask: { value: THEMEREX_EMAIL_MASK, message: THEMEREX_EMAIL_NOT_VALID}
                },
                {
                    field: "message",
                    min_length: { value: 1,  message: THEMEREX_MESSAGE_EMPTY },
                    max_length: { value: THEMEREX_msg_maxlength_contacts, message: THEMEREX_MESSAGE_LONG}
                },
                {
                    field: "date",
                    min_length: { value: 1,	 message: THEMEREX_DATE_EMPTY },
                    max_length: { value: 60, message: THEMEREX_DATE_LONG}
                },
                {
                    field: "time",
                    min_length: { value: 1,	 message: THEMEREX_TIME_EMPTY },
                    max_length: { value: 60, message: THEMEREX_TIME_LONG}
                }
            ]
        });
    }

	else if (!form_custom) {
		error = formValidate(form, {
			error_message_show: true,
			error_message_time: 5000,
			error_message_class: "sc_infobox sc_infobox_style_error",
			error_fields_class: "error_fields_class",
			exit_after_first_error: false,
			rules: [
				{
					field: "username",
					min_length: { value: 1,	 message: THEMEREX_NAME_EMPTY },
					max_length: { value: 60, message: THEMEREX_NAME_LONG}
				},
				{
					field: "email",
					min_length: { value: 7,	 message: THEMEREX_EMAIL_EMPTY },
					max_length: { value: 60, message: THEMEREX_EMAIL_LONG},
					mask: { value: THEMEREX_EMAIL_MASK, message: THEMEREX_EMAIL_NOT_VALID}
				},
				{
					field: "message",
					min_length: { value: 1,  message: THEMEREX_MESSAGE_EMPTY },
					max_length: { value: THEMEREX_msg_maxlength_contacts, message: THEMEREX_MESSAGE_LONG}
				}
			]
		});
	}
	if (!error && url!='#') {
		/*THEMEREX_validateForm = form;
		var data = {
			action: "send_contact_form",
			nonce: nonce,
			//type: form_custom ? 'custom' : 'contact',
			type: form_style,
			data: form.serialize()
		};
		jQuery.post(url, data, userSubmitFormResponse, "text");*/
	}
}
	
function userSubmitFormResponse(response) {
	/*"use strict";
	var rez = JSON.parse(response);
	var result = THEMEREX_validateForm.find(".result")
		.toggleClass("sc_infobox_style_error", false)
		.toggleClass("sc_infobox_style_success", false);
	if (rez.error == "") {
		result.addClass("sc_infobox_style_success sc_infobox").html(THEMEREX_SEND_COMPLETE);
		setTimeout(function () {
			result.fadeOut();
			THEMEREX_validateForm.get(0).reset();
			}, 3000);
	} else {
		result.addClass("sc_infobox_style_error sc_infobox").html(THEMEREX_SEND_ERROR + ' ' + rez.error);
        setTimeout(function () {
            result.fadeOut();
            //THEMEREX_validateForm.get(0).reset();
        }, 3000);
	}
	result.fadeIn();*/
}



// Order Form
function orderSubmitForm(theForm, orderForm, url, nonce){
    /*"use strict";
    if (url!='#') {
        THEMEREX_validateForm = theForm;
        var data = {
            action: "send_contact_form",
            nonce: nonce,
            type: 'okorder',
            data: orderForm.serialize()
        };
        jQuery.post(url, data, orderSubmitFormResponse, "text");
    }*/
}

function orderSubmitFormResponse(response) {
    "use strict";
    var rez = JSON.parse(response);
    classie.addClass( THEMEREX_validateForm.querySelector( ".simform-inner" ), "hide" );
    classie.addClass( THEMEREX_validateForm.querySelector( ".continue_button" ), "hide" );
    var messageEl = THEMEREX_validateForm.querySelector( ".final-message" );
    if (rez.error == "") {
        messageEl.innerHTML = THEMEREX_SEND_ORDER_COMPLETE;
    } else {
        messageEl.innerHTML =  rez.error;
    }
    classie.addClass( messageEl, "show" );

    jQuery('.sc_contact_form_order .dots > span').addClass('answered');
}
//=============================================================
//==  Stylesheets manipulations
//=============================================================
function setStateStyleSheet(title, state) {
	"use strict";
	var i, a;
	for (i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
			if (a.getAttribute("title") == title) a.disabled = !state;
    	}
  	}
}

function getStateStyleSheet(title, state) {
	"use strict";
	var i, a, rez=-1;
	for (i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
			if (a.getAttribute("title") == title) {
				rez = a.disabled ? 0 : 1;
				break;
			}
    	}
  	}
	return rez;
}

function setActiveStyleSheet(title, disableOther) {
	"use strict";
	var i, a, main;
	for (i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
			if (disableOther) a.disabled = true;
			if (a.getAttribute("title") == title) a.disabled = false;
    	}
  	}
}

function getActiveStyleSheet() {
	"use strict";
	var i, a;
	for (i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
	}
	return null;
}

function getPreferredStyleSheet() {
	"use strict";
	var i, a;
	for (i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1 && a.getAttribute("title") )
			return a.getAttribute("title");
	}
	return null;
}


//=============================================================
//==  ListBox & ComboBox manipulations
//=============================================================
function addListBoxItem(box, val, text) {
	"use strict";
	var item = new Option();
	item.value = val;
	item.text = text;
    box.options.add(item);
}

function clearListBox(box) {
	"use strict";
	for (var i=box.options.length-1; i>=0; i--)
		box.options[i] = null;
}

function delListBoxItemByValue(box, val) {
	"use strict";
	for (var i=0; i<box.options.length; i++) {
		if (box.options[i].value == val) {
			box.options[i] = null;
			break;
		}
	}
}

function delListBoxItemByText(box, txt) {
	"use strict";
	for (var i=0; i<box.options.length; i++) {
		if (box.options[i].text == txt) {
			box.options[i] = null;
			break;
		}
	}
}

function findListBoxItemByValue(box, val) {
	"use strict";
	var idx = -1;
	for (var i=0; i<box.options.length; i++) {
		if (box.options[i].value == val) {
			idx = i;
			break;
		}
	}
	return idx;
}

function findListBoxItemByText(box, txt) {
	"use strict";
	var idx = -1;
	for (var i=0; i<box.options.length; i++) {
		if (box.options[i].text == txt) {
			idx = i;
			break;
		}
	}
	return idx;
}

function selectListBoxItemByValue(box, val) {
	"use strict";
	for (var i = 0; i < box.options.length; i++) {
		box.options[i].selected = (val == box.options[i].value);
	}
}

function selectListBoxItemByText(box, txt) {
	"use strict";
	for (var i = 0; i < box.options.length; i++) {
		box.options[i].selected = (txt == box.options[i].text);
	}
}

function getListBoxValues(box) {
	"use strict";
	var delim = arguments[1] ? arguments[1] : ',';
	var str = '';
	for (var i=0; i<box.options.length; i++) {
		str += (str ? delim : '') + box.options[i].value;
	}
	return str;
}

function getListBoxTexts(box) {
	"use strict";
	var delim = arguments[1] ? arguments[1] : ',';
	var str = '';
	for (var i=0; i<box.options.length; i++) {
		str += (str ? delim : '') + box.options[i].text;
	}
	return str;
}

function sortListBox(box)  {
	"use strict";
	var temp_opts = new Array();
	var temp = new Option();
	for(var i=0; i<box.options.length; i++)  {
		temp_opts[i] = box.options[i].clone();
	}
	for(var x=0; x<temp_opts.length-1; x++)  {
		for(var y=(x+1); y<temp_opts.length; y++)  {
			if(temp_opts[x].text > temp_opts[y].text)  {
				temp = temp_opts[x];
				temp_opts[x] = temp_opts[y];
				temp_opts[y] = temp;
			}
		}
	}
	for(var i=0; i<box.options.length; i++)  {
		box.options[i] = temp_opts[i].clone();
	}
}

function getListBoxSelectedIndex(box) {
	"use strict";
	for (var i = 0; i < box.options.length; i++) {
		if (box.options[i].selected)
			return i;
	}
	return -1;
}

function getListBoxSelectedValue(box) {
	"use strict";
	for (var i = 0; i < box.options.length; i++) {
		if (box.options[i].selected) {
			return box.options[i].value;
		}
	}
	return null;
}

function getListBoxSelectedText(box) {
	"use strict";
	for (var i = 0; i < box.options.length; i++) {
		if (box.options[i].selected) {
			return box.options[i].text;
		}
	}
	return null;
}

function getListBoxSelectedOption(box) {
	"use strict";
	for (var i = 0; i < box.options.length; i++) {
		if (box.options[i].selected) {
			return box.options[i];
		}
	}
	return null;
}


//=============================================================
//==  Radiobuttons manipulations
//=============================================================
function getRadioGroupValue(radioGroupObj) {
	"use strict";
	for (var i=0; i < radioGroupObj.length; i++)
		if (radioGroupObj[i].checked) return radioGroupObj[i].value;
	return null;
}

function setRadioGroupCheckedByNum(radioGroupObj, num) {
	"use strict";
	for (var i=0; i < radioGroupObj.length; i++)
		if (radioGroupObj[i].checked && i!=num) radioGroupObj[i].checked=false;
		else if (i==num) radioGroupObj[i].checked=true;
}

function setRadioGroupCheckedByValue(radioGroupObj, val) {
	"use strict";
	for (var i=0; i < radioGroupObj.length; i++)
		if (radioGroupObj[i].checked && radioGroupObj[i].value!=val) radioGroupObj[i].checked=false;
		else if (radioGroupObj[i].value==val) radioGroupObj[i].checked=true;
}


//=============================================================
//==  Array manipulations
//=============================================================
function sortArray(thearray)  {
	"use strict";
	var caseSensitive = arguments[1] ? arguments[1] : false;
	for (var x=0; x<thearray.length-1; x++)  {
		for (var y=(x+1); y<thearray.length; y++)  {
			if (caseSensitive) {
				if (thearray[x] > thearray[y])  {
					tmp = thearray[x];
					thearray[x] = thearray[y];
					thearray[y] = tmp;
				}
			} else {
				if (thearray[x].toLowerCase() > thearray[y].toLowerCase())  {
					tmp = thearray[x];
					thearray[x] = thearray[y];
					thearray[y] = tmp;
				}
			}
		}
	}
}


//=============================================================
//==  String functions
//=============================================================
function inList(list, str) {
	"use strict";
	var delim = arguments[2] ? arguments[2] : '|';
	var icase = arguments[3] ? arguments[3] : true;
	var retval = false;
	if (icase) {
		str = str.toLowerCase();
		list = list.toLowerCase();
	}
	var parts = list.split(delim);
	for (var i=0; i<parts.length; i++) {
		if (parts[i]==str) {
			retval=true;
			break;
		}
	}
	return retval;
}

function alltrim(str) {
	"use strict";
	var dir = arguments[1] ? arguments[1] : 'a';
	var rez = '';
	var i, start = 0, end = str.length-1;
	if (dir=='a' || dir=='l') {
		for (i=0; i<str.length; i++) {
			if (str.substr(i,1)!=' ') {
				start = i;
				break;
			}
		}
	}
	if (dir=='a' || dir=='r') {
		for (i=str.length-1; i>=0; i--) {
			if (str.substr(i,1)!=' ') {
				end = i;
				break;
			}
		}
	}
	return str.substring(start, end+1);
}

function ltrim(str) {
	"use strict";
	return alltrim(str, 'l');
}

function rtrim(str) {
	"use strict";
	return alltrim(str, 'r');
}

function padl(str, len) {
	"use strict";
	var ch = arguments[2] ? arguments[2] : ' ';
	var rez = str.substr(0,len);
	if (rez.length < len) {
		for (var i=0; i<len-str.length; i++)
			rez += ch;
	}
	return rez;
}

function padr(str, len) {
	"use strict";
	var ch = arguments[2] ? arguments[2] : ' ';
	var rez = str.substr(0,len);
	if (rez.length < len) {
		for (var i=0; i<len-str.length; i++)
			rez = ch + rez;
	}
	return rez;
}

function padc(str, len) {
	"use strict";
	var ch = arguments[2] ? arguments[2] : ' ';
	var rez = str.substr(0,len);
	if (rez.length < len) {
		for (var i=0; i<Math.floor((len-str.length)/2); i++)
			rez = ch + rez + ch;
	}
	return rez+(rez.length<len ? ch : '');
}

function replicate(str, num) {
	"use strict";
	var rez = '';
	for (var i=0; i<num; i++) {
		rez += str;
	}
	return rez;
}


//=============================================================
//==  Numbers functions
//=============================================================

// Clear number from any characters and append it with 0 to desired precision
function clearNumber(num) {
	"use strict";
	var precision = arguments[1] ? arguments[1] : 0;
	var defa = arguments[2] ? arguments[2] : 0;
	var res = '';
	var decimals = -1;
	num = ""+num;
	if (num=="") num=""+defa;
	for (var i=0; i<num.length; i++) {
		if (decimals==0) break;
		else if (decimals>0) decimals--;
		var ch = num.substr(i,1);
		if (ch=='.') {
			if (precision>0) {
				res += ch;
			}
			decimals = precision;
		} else if ((ch>=0 && ch<=9) || (ch=='-' && i==0))
			res+=ch;
	}
	if (precision>0 && decimals!=0) {
		if (decimals==-1) {
			res += '.';
			decimals = precision;
		}
		for (i=decimals; i>0; i--)
			res +='0';
	}
	//if (isNaN(res)) res = clearNumber(defa, precision, defa);
	return res;
}

function dec2hex(n) {
	"use strict";
	return Number(n).toString(16);
}

function hex2dec(hex) {
	"use strict";
	return parseInt(hex,16);
}

function roundNumber(num) {
	"use strict";
	var precision = arguments[1] ? arguments[1] : 0;
	var p = Math.pow(10,precision);
	return Math.round(num*p)/p;
}

//=============================================================
//==  Color manipulations
//=============================================================
function hex2rgb(hex) {
	hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
	return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
}

function rgb2hex(color) {
	"use strict";
	var aRGB;
	color = color.replace(/\s/g,"").toLowerCase();
	if (color=='rgba(0,0,0,0)' || color=='rgba(0%,0%,0%,0%)')
		color = 'transparent';
	if (color.indexOf('rgba(')==0)
		aRGB = color.match(/^rgba\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i);
	else
		aRGB = color.match(/^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i);

	if(aRGB) {
		color = '';
		for (var i=1; i<=3; i++)
			color += Math.round((aRGB[i][aRGB[i].length-1]=="%"?2.55:1)*parseInt(aRGB[i]),16).toString(16).replace(/^(.)$/,'0$1');
	} else
		color = color.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, '$1$1$2$2$3$3');
	return (color.substr(0,1)!='#' ? '#' : '') + color;
}

function _rgb2hex(r,g,b) {
	"use strict";
	return '#'+
		Number(r).toString(16).toUpperCase().replace(/^(.)$/,'0$1') +
		Number(g).toString(16).toUpperCase().replace(/^(.)$/,'0$1') +
		Number(b).toString(16).toUpperCase().replace(/^(.)$/,'0$1');
}

function hex2hsb(hex) {
	"use strict";
	return rgb2hsb(hex2rgb(hex));
}

function hsb2hex(hsb) {
	var rgb = hsb2rgb(hsb);
	return _rgb2hex(rgb.r, rgb.g, rgb.b);
}

function rgb2hsb(rgb) {
	"use strict";
	var hsb = {};
	hsb.b = Math.max(Math.max(rgb.r,rgb.g),rgb.b);
	hsb.s = (hsb.b <= 0) ? 0 : Math.round(100*(hsb.b - Math.min(Math.min(rgb.r,rgb.g),rgb.b))/hsb.b);
	hsb.b = Math.round((hsb.b /255)*100);
	if ((rgb.r==rgb.g) && (rgb.g==rgb.b))  hsb.h = 0;
	else if (rgb.r>=rgb.g && rgb.g>=rgb.b) hsb.h = 60*(rgb.g-rgb.b)/(rgb.r-rgb.b);
	else if (rgb.g>=rgb.r && rgb.r>=rgb.b) hsb.h = 60  + 60*(rgb.g-rgb.r)/(rgb.g-rgb.b);
	else if (rgb.g>=rgb.b && rgb.b>=rgb.r) hsb.h = 120 + 60*(rgb.b-rgb.r)/(rgb.g-rgb.r);
	else if (rgb.b>=rgb.g && rgb.g>=rgb.r) hsb.h = 180 + 60*(rgb.b-rgb.g)/(rgb.b-rgb.r);
	else if (rgb.b>=rgb.r && rgb.r>=rgb.g) hsb.h = 240 + 60*(rgb.r-rgb.g)/(rgb.b-rgb.g);
	else if (rgb.r>=rgb.b && rgb.b>=rgb.g) hsb.h = 300 + 60*(rgb.r-rgb.b)/(rgb.r-rgb.g);
	else 								   hsb.h = 0;
	hsb.h = Math.round(hsb.h);
	return hsb;
}

function hsb2rgb(hsb) {
	var rgb = {};
	var h = Math.round(hsb.h);
	var s = Math.round(hsb.s*255/100);
	var v = Math.round(hsb.b*255/100);
	if (s == 0) {
		rgb.r = rgb.g = rgb.b = v;
	} else {
		var t1 = v;
		var t2 = (255-s)*v/255;
		var t3 = (t1-t2)*(h%60)/60;
		if (h==360) h = 0;
		if (h<60) 		{ rgb.r=t1;	rgb.b=t2;   rgb.g=t2+t3; }
		else if (h<120) { rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3; }
		else if (h<180) { rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3; }
		else if (h<240) { rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3; }
		else if (h<300) { rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3; }
		else if (h<360) { rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3; }
		else 			{ rgb.r=0;  rgb.g=0;	rgb.b=0;	 }
	}
	return { r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b) };
}

function split_rgb(color) {
	"use strict";
	color = rgb2hex(color);
	var matches = color.match(/^#?([\dabcdef]{2})([\dabcdef]{2})([\dabcdef]{2})$/i);
	if (!matches) return false;
	for (var i=1, rgb = new Array(3); i<=3; i++)
		rgb[i-1] = parseInt(matches[i],16);
	return rgb;
}

function iColorPicker(){
	"use strict";
	var id = arguments[0] ? arguments[0] : "iColorPicker"+Math.round(Math.random()*1000);
	var colors = arguments[1] ? arguments[1] :
	'#f00,#ff0,#0f0,#0ff,#00f,#f0f,#fff,#ebebeb,#e1e1e1,#d7d7d7,#cccccc,#c2c2c2,#b7b7b7,#acacac,#a0a0a0,#959595,'
	+'#ee1d24,#fff100,#00a650,#00aeef,#2f3192,#ed008c,#898989,#7d7d7d,#707070,#626262,#555,#464646,#363636,#262626,#111,#000,'
	+'#f7977a,#fbad82,#fdc68c,#fff799,#c6df9c,#a4d49d,#81ca9d,#7bcdc9,#6ccff7,#7ca6d8,#8293ca,#8881be,#a286bd,#bc8cbf,#f49bc1,#f5999d,'
	+'#f16c4d,#f68e54,#fbaf5a,#fff467,#acd372,#7dc473,#39b778,#16bcb4,#00bff3,#438ccb,#5573b7,#5e5ca7,#855fa8,#a763a9,#ef6ea8,#f16d7e,'
	+'#ee1d24,#f16522,#f7941d,#fff100,#8fc63d,#37b44a,#00a650,#00a99e,#00aeef,#0072bc,#0054a5,#2f3192,#652c91,#91278f,#ed008c,#ee105a,'
	+'#9d0a0f,#a1410d,#a36209,#aba000,#588528,#197b30,#007236,#00736a,#0076a4,#004a80,#003370,#1d1363,#450e61,#62055f,#9e005c,#9d0039,'
	+'#790000,#7b3000,#7c4900,#827a00,#3e6617,#045f20,#005824,#005951,#005b7e,#003562,#002056,#0c004b,#30004a,#4b0048,#7a0045,#7a0026';
	var colorsList = colors.split(',');
	var tbl = '<table class="colorPickerTable"><thead>';
	for (var i=0; i<colorsList.length; i++) {
		if (i%16==0) tbl += (i>0 ? '</tr>' : '') + '<tr>';
		tbl += '<td style="background-color:'+colorsList[i]+'">&nbsp;</td>';
	}
	tbl += '</tr></thead><tbody>'
		+ '<tr style="height:60px;">'
		+ '<td colspan="8" id="'+id+'_colorPreview" style="vertical-align:middle;text-align:center;border:1px solid #000;background:#fff;">'
		+ '<input style="width:55px;color:#000;border:1px solid rgb(0, 0, 0);padding:5px;background-color:#fff;font:11px Arial, Helvetica, sans-serif;" maxlength="7" />'
		+ '<a href="#" id="'+id+'_moreColors" class="iColorPicker_moreColors"></a>'
		+ '</td>'
		+ '<td colspan="8" id="'+id+'_colorOriginal" style="vertical-align:middle;text-align:center;border:1px solid #000;background:#fff;">'
		+ '<input style="width:55px;color:#000;border:1px solid rgb(0, 0, 0);padding:5px;background-color:#fff;font:11px Arial, Helvetica, sans-serif;" readonly="readonly" />'
		+ '</td>'
		+ '</tr></tbody></table>';
	//tbl += '<style>#iColorPicker input{margin:2px}</style>';

	jQuery(document.createElement("div"))
		.attr("id", id)
		.css('display','none')
		.html(tbl)
		.appendTo("body")
		.addClass("iColorPickerTable")
		.on('mouseover', 'thead td', function(){
			"use strict";
			var aaa=rgb2hex(jQuery(this).css('background-color'));
			jQuery('#'+id+'_colorPreview').css('background',aaa);
			jQuery('#'+id+'_colorPreview input').val(aaa);
		})
		.on('keypress', '#'+id+'_colorPreview input', function(key){
			"use strict";
			var aaa=jQuery(this).val()
			if (aaa.length<7 && ((key.which>=48 && key.which<=57) || (key.which>=97 && key.which<=102) || (key.which===35 || aaa.length===0))) {
				aaa += String.fromCharCode(key.which);
			} else if (key.which == 8 && aaa.length>0) {
				aaa = aaa.substring(0, aaa.length-1);
			} else if (key.which===13 && (aaa.length===4 || aaa.length===7)) {
				var fld  = jQuery('#'+id).data('field');
				var func = jQuery('#'+id).data('func');
				if (func!=null && func!='undefined') {
					func(fld, aaa);
				} else {
					fld.val(aaa).css('backgroundColor', aaa).trigger('change');
				}
				jQuery('#'+id+'_Bg').fadeOut(500);
				jQuery('#'+id).fadeOut(500);

			} else {
				key.preventDefault();
				return false;
			}
			if (aaa.substr(0,1)==='#' && (aaa.length===4 || aaa.length===7)) {
				jQuery('#'+id+'_colorPreview').css('background',aaa);
			}
		})
		.on('click', 'thead td', function(e){
			"use strict";
			var fld  = jQuery('#'+id).data('field');
			var func = jQuery('#'+id).data('func');
			var aaa  = rgb2hex(jQuery(this).css('background-color'));
			if (func!=null && func!='undefined') {
				func(fld, aaa);
			} else {
				fld.val(aaa).css('backgroundColor', aaa).trigger('change');
			}
			jQuery('#'+id+'_Bg').fadeOut(500);
			jQuery('#'+id).fadeOut(500);
			e.preventDefault();
			return false;
		})
		.on('click', 'tbody .iColorPicker_moreColors', function(e){
			"use strict";
			var thead  = jQuery(this).parents('table').find('thead');
			var out = '';
			if (thead.hasClass('more_colors')) {
				for (var i=0; i<colorsList.length; i++) {
					if (i%16==0) out += (i>0 ? '</tr>' : '') + '<tr>';
					out += '<td style="background-color:'+colorsList[i]+'">&nbsp;</td>';
				}
				thead.removeClass('more_colors').empty().html(out+'</tr>');
				jQuery('#'+id+'_colorPreview').attr('colspan', 8);
				jQuery('#'+id+'_colorOriginal').attr('colspan', 8);
			} else {
				var rgb=[0,0,0], i=0, j=-1;	// Set j=-1 or j=0 - show 2 different colors layouts
				while (rgb[0]<0xF || rgb[1]<0xF || rgb[2]<0xF) {
					if (i%18==0) out += (i>0 ? '</tr>' : '') + '<tr>';
					i++;
					out += '<td style="background-color:'+_rgb2hex(rgb[0]*16+rgb[0],rgb[1]*16+rgb[1],rgb[2]*16+rgb[2])+'">&nbsp;</td>';
					rgb[2]+=3;
					if (rgb[2]>0xF) {
						rgb[1]+=3;
						if (rgb[1]>(j===0 ? 6 : 0xF)) {
							rgb[0]+=3;
							if (rgb[0]>0xF) {
								if (j===0) {
									j=1;
									rgb[0]=0;
									rgb[1]=9;
									rgb[2]=0;
								} else {
									break;
								}
							} else {
								rgb[1]=(j < 1 ? 0 : 9);
								rgb[2]=0;
							}
						} else {
							rgb[2]=0;
						}
					}
				}
				thead.addClass('more_colors').empty().html(out+'<td  style="background-color:#ffffff" colspan="8">&nbsp;</td></tr>');
				jQuery('#'+id+'_colorPreview').attr('colspan', 9);
				jQuery('#'+id+'_colorOriginal').attr('colspan', 9);
			}
			jQuery('#'+id+' table.colorPickerTable thead td')
				.css({
					'width':'12px',
					'height':'14px',
					'border':'1px solid #000',
					'cursor':'pointer'
				});
			e.preventDefault();
			return false;
		});
	jQuery(document.createElement("div"))
		.attr("id", id+"_Bg")
		.click(function(e) {
			"use strict";
			jQuery("#"+id+"_Bg").fadeOut(500);
			jQuery("#"+id).fadeOut(500);
			e.preventDefault();
			return false;
		})
		.appendTo("body");
	jQuery('#'+id+' table.colorPickerTable thead td')
		.css({
			'width':'12px',
			'height':'14px',
			'border':'1px solid #000',
			'cursor':'pointer'
		});
	jQuery('#'+id+' table.colorPickerTable')
		.css({'border-collapse':'collapse'});
	jQuery('#'+id)
		.css({
			'border':'1px solid #ccc',
			'background':'#333',
			'padding':'5px',
			'color':'#fff',
			'z-index':999999
		});
	jQuery('#'+id+'_colorPreview')
		.css({'height':'50px'});
	return id;
}

function iColorShow(id, fld, func) {
	"use strict";
	if (id===null || id==='') {
		id = jQuery('.iColorPickerTable').attr('id');
	}
	var eICP = fld.offset();
	var w = jQuery('#'+id).width();
	var h = jQuery('#'+id).height();
	var l = eICP.left + w < jQuery(window).width()-10 ? eICP.left : jQuery(window).width()-10 - w;
	var t = eICP.top + fld.outerHeight() + h < jQuery(document).scrollTop() + jQuery(window).height()-10 ? eICP.top + fld.outerHeight() : eICP.top - h - 13;
	jQuery("#"+id)
		.data({field: fld, func: func})
		.css({
			'top':t+"px",
			'left':l+"px",
			'position':'absolute',
			'z-index':100001
		})
		.fadeIn(500);
	jQuery("#"+id+"_Bg")
		.css({
			'position':'fixed',
			'z-index':100000,
			'top':0,
			'left':0,
			'width':'100%',
			'height':'100%'
		})
		.fadeIn(500);
	var def = fld.val().substr(0, 1)=='#' ? fld.val() : rgb2hex(fld.css('backgroundColor'));
	jQuery('#'+id+'_colorPreview input,#'+id+'_colorOriginal input').val(def);
	jQuery('#'+id+'_colorPreview,#'+id+'_colorOriginal').css('background',def);
}


//=============================================================
//==  Cookies manipulations
//=============================================================
function getCookie(name) {
	"use strict";
	var defa = arguments[1]!='undefined' ? arguments[1] : null;
	var start = document.cookie.indexOf(name + '=');
	var len = start + name.length + 1;
	if ((!start) && (name != document.cookie.substring(0, name.length))) {
		return defa;
	}
	if (start == -1)
		return defa;
	var end = document.cookie.indexOf(';', len);
	if (end == -1)
		end = document.cookie.length;
	return unescape(document.cookie.substring(len, end));
}


function setCookie(name, value, expires, path, domain, secure) {
	"use strict";
	var today = new Date();
	today.setTime(today.getTime());
	if (expires) {
		expires = expires * 1000;		// * 60 * 60 * 24;
	}
	var expires_date = new Date(today.getTime() + (expires));
	document.cookie = name + '='
			+ escape(value)
			+ ((expires) ? ';expires=' + expires_date.toGMTString() : '')
			+ ((path)    ? ';path=' + path : '')
			+ ((domain)  ? ';domain=' + domain : '')
			+ ((secure)  ? ';secure' : '');
}


function deleteCookie(name, path, domain) {
	"use strict";
	if (getCookie(name))
		document.cookie = name + '=' + ((path) ? ';path=' + path : '')
				+ ((domain) ? ';domain=' + domain : '')
				+ ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}


//=============================================================
//==  Date manipulations
//=============================================================

// Return array[Year, Month, Day, Hours, Minutes, Seconds]
// from string: Year[-/.]Month[-/.]Day[T ]Hours:Minutes:Seconds
function dateParse(dt) {
	"use strict";
	dt = dt.replace(/\//g, '-').replace(/\./g, '-').replace(/T/g, ' ').split('+')[0];
	var dt2 = dt.split(' ');
	var d = dt2[0].split('-');
	var t = dt2[1].split(':');
	d.push(t[0], t[1], t[2]);
	return d;
}

function dateDifference(dt1) {
	"use strict";
	var dt2 = arguments[1]!==undefined ? arguments[1] : '';
	var short_date = arguments[2]!==undefined ? arguments[2] : true;
	var sec = arguments[3]!==undefined ? arguments[3] : false;
	var a1 = dateParse(dt1);
	dt1 = Date.UTC(a1[0], a1[1], a1[2], a1[3], a1[4], a1[5]);
	if (dt2 == '') {
		dt2 = new Date();
		var a2 = [dt2.getFullYear(), dt2.getMonth()+1, dt2.getDate(), dt2.getHours(), dt2.getMinutes(), dt2.getSeconds()];
	} else
		var a2 = dateParse(dt2);
	dt2 = Date.UTC(a2[0], a2[1], a2[2], a2[3], a2[4], a2[5]);
	var diff = Math.round((dt2 - dt1)/1000);
	var days = Math.floor(diff / (24*3600));
	diff -= days * 24 * 3600;
	var hours = Math.floor(diff / 3600);
	diff -= hours * 3600;
	var minutes = Math.floor(diff / 60);
	diff -= minutes * 60;
	rez = '';
	if (days > 0)
		rez += (rez!='' ? ' ' : '') + days + ' day' + (days > 1 ? 's' : '');
	if ((!short_date || rez=='') && hours > 0)
		rez += (rez!='' ? ' ' : '') + hours + ' hour' + (hours > 1 ? 's' : '');
	if ((!short_date || rez=='') && minutes > 0)
		rez +=  (rez!='' ? ' ' : '') + minutes + ' minute' + (minutes > 1 ? 's' : '');
	if (sec || rez=='')
		rez +=  rez!='' || sec ? (' ' + diff + ' second' + (diff > 1 ? 's' : '')) : 'less then minute';
	return rez;
}



//=============================================================
//==  Form validation
//=============================================================
/*
		// Usage example:
		var error = formValidate(jQuery(form_selector), {				// -------- Options
			error_message_show: true,									// Display or not error message
			error_message_time: 5000,									// Time to display error message
			error_message_class: 'sc_infobox sc_infobox_style_error',	// Class, appended to error message block
			error_message_text: 'Global error text',					// Global error message text (if don't write message in checked field)
			error_fields_class: 'error_fields_class',					// Class, appended to error fields
			exit_after_first_error: false,								// Cancel validation and exit after first error
			rules: [
				{
					field: 'author',																// Checking field name
					min_length: { value: 1,	 message: 'The author name can\'t be empty' },			// Min character count (0 - don't check), message - if error occurs
					max_length: { value: 60, message: 'Too long author name'}						// Max character count (0 - don't check), message - if error occurs
				},
				{
					field: 'email',
					min_length: { value: 7,	 message: 'Too short (or empty) email address' },
					max_length: { value: 60, message: 'Too long email address'},
					mask: { value: '^([a-z0-9_\\-]+\\.)*[a-z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$', message: 'Invalid email address'}
				},
				{
					field: 'comment',
					min_length: { value: 1,	 message: 'The comment text can\'t be empty' },
					max_length: { value: 200, message: 'Too long comment'}
				},
				{
					field: 'pwd1',
					min_length: { value: 5,	 message: 'The password can\'t be less then 5 characters' },
					max_length: { value: 20, message: 'Too long password'}
				},
				{
					field: 'pwd2',
					equal_to: { value: 'pwd1',	 message: 'The passwords in both fields must be equals' }
				}
			]
		});
*/

function formValidate(form, opt) {
	"use strict";
	var error_msg = '';
	form.find(":input").each(function() {
		"use strict";
		if (error_msg!='' && opt.exit_after_first_error) return;
		for (var i = 0; i < opt.rules.length; i++) {
			if (jQuery(this).attr("name") == opt.rules[i].field) {
				var val = jQuery(this).val();
				var error = false;
				if (typeof(opt.rules[i].min_length) == 'object') {
					if (opt.rules[i].min_length.value > 0 && val.length < opt.rules[i].min_length.value) {
						if (error_msg=='') jQuery(this).get(0).focus();
						error_msg += '<p class="error_item">' + (typeof(opt.rules[i].min_length.message)!='undefined' ? opt.rules[i].min_length.message : opt.error_message_text ) + '</p>'
						error = true;
					}
				}
				if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].max_length) == 'object') {
					if (opt.rules[i].max_length.value > 0 && val.length > opt.rules[i].max_length.value) {
						if (error_msg=='') jQuery(this).get(0).focus();
						error_msg += '<p class="error_item">' + (typeof(opt.rules[i].max_length.message)!='undefined' ? opt.rules[i].max_length.message : opt.error_message_text ) + '</p>'
						error = true;
					}
				}
				if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].mask) == 'object') {
					if (opt.rules[i].mask.value != '') {
						var regexp = new RegExp(opt.rules[i].mask.value);
						if (!regexp.test(val)) {
							if (error_msg=='') jQuery(this).get(0).focus();
							error_msg += '<p class="error_item">' + (typeof(opt.rules[i].mask.message)!='undefined' ? opt.rules[i].mask.message : opt.error_message_text ) + '</p>'
							error = true;
						}
					}
				}
				if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].equal_to) == 'object') {
					if (opt.rules[i].equal_to.value != '' && val!=jQuery(jQuery(this).get(0).form[opt.rules[i].equal_to.value]).val()) {
						if (error_msg=='') jQuery(this).get(0).focus();
						error_msg += '<p class="error_item">' + (typeof(opt.rules[i].equal_to.message)!='undefined' ? opt.rules[i].equal_to.message : opt.error_message_text ) + '</p>'
						error = true;
					}
				}
				if (opt.error_fields_class != '') jQuery(this).toggleClass(opt.error_fields_class, error);
			}
		}
	});
	if (error_msg!='' && opt.error_message_show) {
		THEMEREX_error_msg_box = form.find(".result");
		if (THEMEREX_error_msg_box.length == 0) {
			form.append('<div class="result"></div>');
			THEMEREX_error_msg_box = form.find(".result");
		}
		if (opt.error_message_class) THEMEREX_error_msg_box.toggleClass(opt.error_message_class, true);
		THEMEREX_error_msg_box.html(error_msg).fadeIn();
		setTimeout(function() { THEMEREX_error_msg_box.fadeOut(); }, opt.error_message_time);
	}
	return error_msg!='';
}




//=============================================================
//==  Document manipulations
//=============================================================

// Animated scroll to selected id
function animateTo(id) {
	if (id.indexOf('#')==-1) id = '#' + id;
	var obj = jQuery(id).eq(0);
	if (obj.length == 0) return;
	var oft = jQuery(id).offset().top;
	var st  = jQuery(window).scrollTop();
	var speed = Math.min(1600, Math.max(400, Math.round(Math.abs(oft-st) / jQuery(window).height() * 100)));
	jQuery('body,html').animate( {scrollTop: oft - jQuery('#wpadminbar').height() - jQuery('header.fixedTopMenu .topWrap').height()}, speed, 'swing');
}

// Change browser address without reload page
function setLocation(curLoc){
	try {
		history.pushState(null, null, curLoc);
		return;
	} catch(e) {}
	location.href = curLoc;
}




//=============================================================
//==  Browser detection
//=============================================================
function isMobile() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
}
function isiOS() {
	return navigator.userAgent.match(/iPad|iPhone|iPod/i) != null;
}




//=============================================================
//==  File functions
//=============================================================
function getFileName(path) {
	path = path.replace(/\\/g, '/');
	var pos = path.lastIndexOf('/');
	if (pos >= 0)
		path = path.substr(pos+1);
	return path;
}

function getFileExt(path) {
	var pos = path.lastIndexOf('.');
	path = pos >= 0 ? path.substr(pos+1) : '';
	return path;
}




//=============================================================
//==  PHP-style functions
//=============================================================
function isset(obj) {
	return obj != undefined;
}

function empty(obj) {
	return obj == undefined || (typeof(obj)=='object' && obj == null) || (typeof(obj)=='array' && obj.length == 0) || (typeof(obj)=='string' && alltrim(obj)=='');
}

function is_array(obj)  {
	"use strict";
	return typeof(obj)=='array';
}

function is_object(obj)  {
	"use strict";
	return typeof(obj)=='object';
}

function in_array(val, thearray)  {
	"use strict";
	var rez = false;
	for (var x=0; x<thearray.length-1; x++)  {
		if (thearray[x] == val)  {
			rez = true;
			break;
		}
	}
	return rez;
}

function clone(obj) {
	if (obj == null || typeof(obj) != 'object') {
		return obj;
	}
	var temp = {};
	for (var key in obj) {
		temp[key] = clone(obj[key]);
	}
	return temp;
}



//=============================================================
//==  Debug functions
//=============================================================
function objDisplay(obj) {
	"use strict";
	var html = arguments[1] ? arguments[1] : false;				// Tags decorate
	var recursive = arguments[2] ? arguments[2] : false;		// Show inner objects (arrays)
	var showMethods = arguments[3] ? arguments[3] : false;		// Show object's methods
	var level = arguments[4] ? arguments[4] : 0;				// Nesting level (for internal usage only)
	var dispStr = "";
	var addStr = "";
	if (level>0) {
		dispStr += (obj===null ? "null" : typeof(obj)) + (html ? "\n<br />" : "\n");
		addStr = replicate(html ? '&nbsp;' : ' ', level*2);
	}
	if (obj!==null) {
		for (var prop in obj) {
			if (!showMethods && typeof(obj[prop])=='function')	// || prop=='innerHTML' || prop=='outerHTML' || prop=='innerText' || prop=='outerText')
				continue;
			if (recursive && (typeof(obj[prop])=='object' || typeof(obj[prop])=='array') && obj[prop]!=obj)
				dispStr += addStr + (html ? "<b>" : "")+prop+(html ? "</b>" : "")+'='+objDisplay(obj[prop], html, recursive, showMethods, level+1);
			else
				dispStr += addStr + (html ? "<b>" : "")+prop+(html ? "</b>" : "")+'='+(typeof(obj[prop])=='string' ? '"' : '')+obj[prop]+(typeof(obj[prop])=='string' ? '"' : '')+(html ? "\n<br />" : "\n");
		}
	}
	return dispStr;
}

function cl(s) { console.log(s); }
function cd(s) { console.log(objDisplay(s)); }
function al(s) { if (typeof THEMEREX_userLoggedIn != 'undefined' && THEMEREX_userLoggedIn) alert(s); }
function ad(s) { if (typeof THEMEREX_userLoggedIn != 'undefined' && THEMEREX_userLoggedIn) alert(objDisplay(s)); }
function dl(s) {
	if (typeof THEMEREX_userLoggedIn != 'undefined' && THEMEREX_userLoggedIn) {
		if (jQuery('#debugLog').length == 0) jQuery('body').append('<div id="debugLog"><span id="debugLogClose" onclick="jQuery(\'#debugLog\').hide();jQuery(\'#debugLogContent\').empty();">x</span><div id="debugLogContent"></div></div>');
		jQuery('#debugLogContent').append('<br>'+s);
		jQuery('#debugLog').show();
	}
}
function dd(s) {
	if (typeof THEMEREX_userLoggedIn != 'undefined' && THEMEREX_userLoggedIn) {
		if (jQuery('#debugLog').length == 0) jQuery('body').append('<div id="debugLog"><span id="debugLogClose" onclick="jQuery(\'#debugLog\').hide();">x</span><div id="debugLogContent"></div></div>');
		jQuery('#debugLogContent').html(objDisplay(s));
		jQuery('#debugLog').show();
	}
}




//=============================================================
//==  smartresize
//=============================================================
(function($,sr){
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 500);
        };
    }
    // smartresize
    jQuery.fn[sr] = function(fn){  return fn ? this.on('bind','resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
/* global jQuery:false */

// Max scale factor for the portfolio and other isotope elements before relayout
var THEMEREX_isotope_resize_delta = 0.3;

// Internal vars - do not change it!
var THEMEREX_ADMIN_MODE    = false;
var THEMEREX_error_msg_box = null;
var THEMEREX_VIEWMORE_BUSY = false;
var THEMEREX_video_resize_inited = false;
var THEMEREX_top_height = 0;
var THEMEREX_top_height_usermenu_area = 0;
var THEMEREX_use_fixed_wrapper = true;
var THEMEREX_REMEMBERSCROLL = 0;

jQuery(document).ready(function () {
	"use strict";
	timelineResponsive();
	ready();
	timelineScrollFix();
	itemPageFull();
	mainMenuResponsive();
	mainMenuResponsiveClik();
	scrollAction();
	calcMenuColumnsWidth();
	resizeVideoBackground();
	REX_parallax();
    fitLargerHeight();
	// Resize handlers
	jQuery(window).resize(function () {
		"use strict";
		timelineResponsive();
		fullSlider();
		resizeSliders();
		itemPageFull();
		mainMenuResponsive();
		scrollAction();
		resizeVideoBackground();
		REX_parallax();
        setEqualHeight(jQuery(".relatedPostWrap .wrap.thumb"),jQuery(".relatedPostWrap .wrap.no_thumb"));
	});
	// Scroll handlers
	jQuery(window).scroll(function () {
		"use strict";
		timelineScrollFix();
		scrollAction();
		REX_parallax();
	});
});

jQuery(window).smartresize(function () {
    fitLargerHeight();
});


function ready() {
	"use strict";

    // Form styler
    (function($) {
        $(function() {
            $('#dsidx select, #dsidx-search-form select, #calendar_select_input, .variations select, #calc_shipping_country, .widgetWrap select').styler();
        });
    })(jQuery);

    // Show system message
	if (THEMEREX_systemMessage.message) {
		if (THEMEREX_systemMessage.status == 'success')
			themerex_message_success(THEMEREX_systemMessage.message, THEMEREX_systemMessage.header);
		else if (THEMEREX_systemMessage.status == 'info')
			themerex_message_info(THEMEREX_systemMessage.message, THEMEREX_systemMessage.header);
		else if (THEMEREX_systemMessage.status == 'error' || THEMEREX_systemMessage.status == 'warning')
			themerex_message_warning(THEMEREX_systemMessage.message, THEMEREX_systemMessage.header);
	}

    // Blogger height
    function heightRelated() {
        if (jQuery('.sc_blogger.relatedPostWrap').length > 0) {
            if (!isotopeImagesComplete(jQuery('.sc_blogger.relatedPostWrap'))) {
                setTimeout(heightRelated, 500);
                return;
            }
            jQuery('.sc_blogger.relatedPostWrap article').each(function () {
                    "use strict";
                    var height = jQuery(this).height();
                    var newHeight = jQuery(this).find('.title_wrap').outerHeight();
                    jQuery(this).find('.wrap_bottom_info').css({'top': height - newHeight});
                }
            )
        }
    }
    heightRelated();
    try {
        jQuery(window).smartresize(heightRelated);
    } catch (e) {
        jQuery(window).resize(heightRelated);
    }

	THEMEREX_use_fixed_wrapper = jQuery('.topWrapFixed').parents('.fullScreenSlider').length == 0 || !jQuery('.topWrapFixed').parent().next().hasClass('sliderHomeBullets');

	// Close all dropdown elements
	jQuery(document).on("click", function (e) {
		"use strict";
		jQuery('.pageFocusBlock').slideUp();
		jQuery('ul.shareDrop').removeClass('open').slideUp().siblings('a.shareDrop').removeClass('selected');
	});

	// Calendar handlers - change months (blocking in html)
	jQuery('.widget_calendar').on('click', '.prevMonth a, .nextMonth a', function(e) {
		"use strict";
		e.preventDefault();
		return false;
	});

	// Tabs for top widgets
	if (jQuery('.widgetTabs').length > 0) {
		// Collect widget's headers into tabs
		var THEMEREX_top_tabs = '';
		var THEMEREX_top_tabs_counter = 0;
		jQuery('.widgetTop .titleHide').each(function () {
			"use strict";
			THEMEREX_top_tabs_counter++;
			var id = jQuery(this).parents('.widgetTop').attr('id');
			var title = jQuery(this).text();
			if (title=='') title = '#'+THEMEREX_top_tabs_counter;
			THEMEREX_top_tabs += '<li><a href="#'+id+'"><span>'+title+'</span></a></li>';
		});
		jQuery('.widgetTabs .tabsButton ul').append(THEMEREX_top_tabs);

		// Break lists in top widgets on two parts
		jQuery('.widgetTop > ul:not(.tabs),.widgetTop > div > ul:not(.tabs)').each(function () {
			"use strict";
			var ul2 = jQuery(this).clone();
			var li = jQuery(this).find('>li');
			var middle = Math.ceil(li.length/2)-1;
			li.eq(middle).nextAll().remove();
			ul2.find('>li').eq(middle+1).prevAll().remove();
			jQuery(this).after(ul2);
		});

		// Init tabs
		jQuery('.widgetTabs').tabs({
			show: {
				effect: 'drop',
				direction: 'right',
				duration: 500
			},
			hide: {
				effect: 'drop',
				direction: 'left',
				duration: 500
			},
			activate: function (event, ui) {
				"use strict";
				initShortcodes(ui.newPanel);
			}
		});
	}

	// Add bookmarks
	if (jQuery('#tabsFavorite').length > 0) {
		jQuery('.addBookmark').on("click", function(e) {
			"use strict";
			var title = window.document.title.split('|')[0];
			var url = window.location.href;
			var list = jQuery.cookie('themerex_bookmarks');
			var exists = false;
			if (list) {
				list = JSON.parse(list);
				for (var i=0; i<list.length; i++) {
					if (list[i].url == url) {
						exists = true;
						break;
					}
				}
			} else
				list = new Array();
			if (!exists) {
				var THEMEREX_message_popup = themerex_message_dialog('<label for="bookmark_title">'+THEMEREX_MESSAGE_BOOKMARK_TITLE+'</label><br><input type="text" id="bookmark_title" name="bookmark_title" value="'+title+'">', THEMEREX_MESSAGE_BOOKMARK_ADD, null,
					function(btn, popup) {
						"use strict";
						if (btn != 1) return;
						title = THEMEREX_message_popup.find('#bookmark_title').val();
						list.push({title: title, url: url});
						jQuery('.listBookmarks').append('<li><a href="'+url+'">'+title+'</a><a href="#" class="delBookmark icon-cancel"></a></li>');
						jQuery.cookie('themerex_bookmarks', JSON.stringify(list), {expires: 365, path: '/'});
						if (THEMEREX_Swipers['bookmarks_scroll']!==undefined) THEMEREX_Swipers['bookmarks_scroll'].reInit();
						setTimeout(function () {themerex_message_success(THEMEREX_MESSAGE_BOOKMARK_ADDED, THEMEREX_MESSAGE_BOOKMARK_ADD);}, THEMEREX_MESSAGE_TIMEOUT/4);
					});
			} else
				themerex_message_warning(THEMEREX_MESSAGE_BOOKMARK_EXISTS, THEMEREX_MESSAGE_BOOKMARK_ADD);
			e.preventDefault();
			return false;
		});
		// Delete bookmarks
		jQuery('.listBookmarks').on('click', '.delBookmark', function(e) {
			"use strict";
			var idx = jQuery(this).parent().index();
			var list = jQuery.cookie('themerex_bookmarks');
			if (list) {
				list = JSON.parse(list);
				list.splice(idx, 1);
				jQuery.cookie('themerex_bookmarks', JSON.stringify(list), {expires: 365, path: '/'});
			}
			jQuery(this).parent().remove();
			e.preventDefault();
			return false;
		});
		// Sort bookmarks
		jQuery('.listBookmarks').sortable({
			items: "li",
			update: function(event, ui) {
				"use strict";
				var list = new Array();
				ui.item.parent().find('li').each(function() {
					var a = jQuery(this).find('a:not(.delBookmark)').eq(0);
					list.push({title: a.text(), url: a.attr('href')});
				});
				jQuery.cookie('themerex_bookmarks', JSON.stringify(list), {expires: 365, path: '/'});
			}
		}).disableSelection();
	}


	/* Add scroll to top button*/
	var upToScroll  ='<div class="upToScroll">';
	upToScroll  +=	'<a href="#" class="addBookmark icon-star" title="Add the current page into bookmarks"></a>';
	upToScroll  +=	'<a href="#" class="scrollToTop icon-up-open" title="Back to top"></a>';
	upToScroll  +='</div>';

	jQuery('body').append(upToScroll);
	// Scroll to top
	jQuery('.upToScroll .scrollToTop').on("click", function(e) {
		"use strict";
		jQuery('html,body').animate({
			scrollTop: 0
		}, 'slow');
		e.preventDefault();
		return false;
	});


	// Decorate nested lists in widgets and sidemenu
	jQuery('.widgetWrap ul > li,.sidemenu_area ul > li,.panelmenu_area ul > li,.widgetTop ul > li').each(function () {
		if (jQuery(this).find('ul').length > 0) {
			jQuery(this).addClass('dropMenu');
		}
	});
	jQuery('.widgetWrap ul > li.dropMenu,.sidemenu_area ul > li.dropMenu,.panelmenu_area ul > li.dropMenu,.widgetTop ul > li.dropMenu').on("click", function (e) {
		"use strict";
		jQuery(this).toggleClass('dropOpen');
		jQuery(this).find('ul').first().slideToggle(200, function() {
			if (jQuery(this).parents('.sidemenu_area').length > 0)
				THEMEREX_Swipers['sidemenu_scroll'].reInit();
			else if (jQuery(this).parents('.panelmenu_area').length > 0)
				THEMEREX_Swipers['panelmenu_scroll'].reInit();
		});
		e.preventDefault();
		return false;
	});
    jQuery('.widgetWrap ul > li > a,.sidemenu_area ul > li > a,.panelmenu_area ul > li > a,.widgetTop ul > li > a').on('mouseover',function (e) {
        "use strict";
        jQuery(this).parent().toggleClass('liHover');

        e.preventDefault();
        return false;
    });
	jQuery('.widgetWrap ul:not(.tabs) li > a,.sidemenu_area ul:not(.tabs) li > a,.panelmenu_area ul:not(.tabs) li > a,.widgetTop ul:not(.tabs) li > a').on("click", function (e) {
		"use strict";
		if (jQuery(this).attr('href')!='#') {
			e.stopImmediatePropagation();
			if (jQuery(this).parent().hasClass('menu-item-has-children') && jQuery(this).parents('.sidemenu_area,.panelmenu_area').length > 0) {
				jQuery(this).parent().trigger('click');
				e.preventDefault();
				return false;
			}
		}
	});

	// Archive widget decoration
	jQuery('.widget_archive a').each(function () {
		var val = jQuery(this).html().split(' ');
		if (val.length > 1) {
			val[val.length-1] = '<span>' + val[val.length-1] + '</span>';
			jQuery(this).html(val.join(' '))
		}
	});

	//video bg
	if (jQuery('.videoBackground').length > 0) {
		jQuery('.videoBackground').each(function () {
			var youtube = jQuery(this).data('youtube-code');
			if (youtube) {
				jQuery(this).tubular({videoId: youtube});
			}
		});
	}

    //googlemap button
    if (jQuery('#googlemap_hide > .googlemap_button').length > 0) {
        jQuery('#googlemap_hide').on('click', '.googlemap_button', function () {
            "use strict";
            jQuery(this).toggleClass("open");
            jQuery(this).next().toggleClass("hide");
            if(!jQuery(this).next().hasClass('itited')) {
                jQuery(this).next().addClass('itited');
                setTimeout(function () { googlemap_refresh(); }, 300);
            }
		    
        });
    }

    setEqualHeight(jQuery(".relatedPostWrap .wrap.thumb"),jQuery(".relatedPostWrap .wrap.no_thumb"));


	//isotope
	if (jQuery('.isotopeNOanim,.isotope').length > 0) {

		initIsotope();

		jQuery(window).resize(resizeIsotope);

		//isotope filter
		jQuery('.isotopeFiltr').on('click', 'li a', function (e) {
			"use strict";
			jQuery(this).parents('.isotopeFiltr').find('li').removeClass('active');
			jQuery(this).parent().addClass('active');

			var selector = jQuery(this).data('filter');
			jQuery(this).parents('.isotopeFiltr').siblings('.isotope').eq(0).isotope({
				filter: selector
			});

			if (selector == '*')
				jQuery('#viewmore_link').fadeIn();
			else
				jQuery('#viewmore_link').fadeOut();

			e.preventDefault();
			return false;
		});

	}


	// main Slider
	if (jQuery('.sliderBullets, .sliderHomeBullets').length > 0) {
		if (jQuery.rsCSS3Easing!=undefined && jQuery.rsCSS3Easing!=null) {
			jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
		}
		// Show Slider
		jQuery('.sliderHomeBullets').slideDown(200, function () {
			"use strict";
			REX_parallax();
			fullSlider();
			initShortcodes(jQuery(this));
			// Hack for the Royal Slider
			if (jQuery('body').hasClass('boxed')) { jQuery(this).trigger('resize'); }
		});
	}

	//fullScreen effect for Main Slider
	var homeSlider = jQuery('.sliderHomeBullets');
	if (homeSlider.length > 0 && homeSlider.hasClass('slider_engine_royal')) {
		var slideContent = homeSlider.find('.slideContent').eq(0);
		slideContent.addClass('sliderBGanima ' + slideContent.data('effect'));
		setTimeout(checkFullSlider, 500);
	}

	// Page Navigation
	jQuery('.pageFocusBlock').on("click", function (e) {
		"use strict";
		if (e.target.nodeName.toUpperCase()!='A') {
			e.preventDefault();
			return false;
		}
	});
	jQuery('.navInput').on("click", function (e) {
		"use strict";
		jQuery('.pageFocusBlock').slideDown(300, function () {
			initShortcodes(jQuery('.pageFocusBlock').eq(0));
		});
		e.preventDefault();
		return false;
	});


	// Responsive Show menu
	jQuery('.openResponsiveMenu').on("click", function(e){
		"use strict";
		jQuery('.menuTopWrap').slideToggle();
		e.preventDefault();
		return false;
	});


	// Main Menu
	initSfMenu('.menuTopWrap > ul#mainmenu, .usermenu_area ul.usermenu_list');
	// Enable click on root menu items (without submenu) in iOS
	if (isiOS()) {
		jQuery('#mainmenu li:not(.menu-item-has-children) > a').on('click touchend', function (e) {
			"use strict";
			if (jQuery(this).attr('href')!='#') {
				window.location.href = jQuery(this).attr('href');
			}
		});
		jQuery('#mainmenu li.menu-item-has-children > a').on({
			mouseenter: function (e) {
				"use strict";
				if (jQuery('body').hasClass('responsive_menu')) {
					jQuery(this).trigger('click');
				}
			},
			mouseleave: function () {}
			});
	}
	// Submenu click handler
	jQuery('.usermenu_area ul.usermenu_list li a').on("click", function(e) {
		"use strict";
		if ((THEMEREX_responsive_menu_click || isMobile()) && jQuery('body').hasClass('responsive_menu') && jQuery(this).parent().hasClass('menu-item-has-children')) {
			if (jQuery(this).siblings('ul:visible').length > 0)
				jQuery(this).siblings('ul').slideUp();
			else
				jQuery(this).siblings('ul').slideDown();
		}
		if (jQuery(this).attr('href')=='#' || (jQuery('body').hasClass('responsive_menu') && jQuery(this).parent().hasClass('menu-item-has-children'))) {
			e.preventDefault();
			return false;
		}
	});

    jQuery('.menuTopWrap ul li a').on("click", function(e) {
        "use strict";
        if (jQuery(this).attr('href')=='#') {
            e.preventDefault();
            return false;
        }
    });


	// Show table of contents for the current page
	if (THEMEREX_menu_toc!='no') {
		buildPageTOC();
	}
	// One page mode for menu links (scroll to anchor)
	jQuery('#toc, .menuTopWrap ul li, .usermenu_area ul.usermenu_list li').on('click', 'a', function(e) {
		"use strict";
		var href = jQuery(this).attr('href');
		var pos = href.indexOf('#');
		if (pos < 0 || href.length == 1) return;
		var loc = window.location.href;
		var pos2 = loc.indexOf('#');
		if (pos2 > 0) loc = loc.substring(0, pos2);
		var now = pos==0;
		if (!now) now = loc == href.substring(0, pos);
		if (now) {
			animateTo(href.substr(pos));
			setLocation(pos==0 ? loc + href : href);
			e.preventDefault();
			return false;
		}
	});
    // for class - go_animate_to (scroll to anchor - id)
    jQuery('.go_animate_to').on('click', function(e) {
        "use strict";
        var href = jQuery(this).attr('href');
        var pos = href.indexOf('#');
        if (pos < 0 || href.length == 1) return;
        var loc = window.location.href;
        var pos2 = loc.indexOf('#');
        if (pos2 > 0) loc = loc.substring(0, pos2);
        var now = pos==0;
        if (!now) now = loc == href.substring(0, pos);
        if (now) {
            animateTo(href.substr(pos));
            setLocation(pos==0 ? loc + href : href);
            e.preventDefault();
            return false;
        }
    });

	// Open sidemenu
	jQuery('.sidemenu_wrap .sidemenu_button').on("click", function (e) {
		"use strict";
		jQuery('body').addClass('openMenuFix');
		if (jQuery('.sidemenu_overflow').length == 0) {
			jQuery('body').append('<div class="sidemenu_overflow"></div>')
		}
		jQuery('.sidemenu_overflow').fadeIn(400);
		e.preventDefault();
		return false;
	});

	// Close sidemenu and right panel
	jQuery(document).on('click', '.sidemenu_overflow, .sidemenu_close', function (e) {
		"use strict";
		jQuery('body').removeClass('openMenuFixRight openMenuFix');
		if (!isMobile()) jQuery('.swpRightPosButton').fadeIn(400);
		jQuery('.sidemenu_overflow').fadeOut(400);
	});

	// Demo sidemenu
	var showed = false;
	if (THEMEREX_demo_time > 0 && jQuery(window).width() > 800 && jQuery('.sidemenu_wrap .sidemenu_button').length > 0) {
		showed = jQuery.cookie('themerex_demo_sidemenu');
		if (!showed) {
			jQuery.cookie('themerex_demo_sidemenu', "1", {expires: 7, path: '/'});
			showed = 1;
			setTimeout(function () {
				jQuery('.sidemenu_wrap .sidemenu_button').trigger('click');
				setTimeout(function() { jQuery('.sidemenu_overflow').trigger('click'); }, THEMEREX_demo_time);
			}, THEMEREX_demo_time);
		}
	}

	// Open right menu
	jQuery('.openRightMenu,.swpRightPosButton').on("click", function (e) {
		"use strict";
		if (jQuery('body').hasClass('openMenuFixRight')) {
			jQuery('body').removeClass('openMenuFixRight');
			if (!isMobile()) jQuery('.swpRightPosButton').fadeIn(400);
			jQuery('.sidemenu_overflow').fadeOut(400);
		} else {
			jQuery('body').addClass('openMenuFixRight');
			if (jQuery('.sidemenu_overflow').length == 0) {
				jQuery('body').append('<div class="sidemenu_overflow"></div>')
			}
			if (!isMobile()) jQuery('.swpRightPosButton').fadeOut(400);
			jQuery('.sidemenu_overflow').fadeIn(400);
		}
		e.preventDefault();
		return false;
	});

	// Demo right panel
	if (!showed && THEMEREX_demo_time > 0 && jQuery(window).width() > 800 && jQuery('.openRightMenu,.swpRightPosButton').length > 0) {
		showed = jQuery.cookie('themerex_demo_rightpanel');
		if (!showed) {
			var btn = '';
			if (jQuery('.openRightMenu').length > 0)
				btn = '.openRightMenu';
			else if (jQuery('.swpRightPosButton').length > 0)
				btn = '.swpRightPosButton';
			if (btn) {
				jQuery.cookie('themerex_demo_rightpanel', "1", {expires: 7, path: '/'});
				setTimeout(function () {
					jQuery(btn).trigger('click');
					setTimeout(function() { jQuery('.sidemenu_overflow').trigger('click'); }, THEMEREX_demo_time);
				}, THEMEREX_demo_time);
			}
		}
	}


	// search
	jQuery('.topWrap .search').on("click", function (e) {
		"use strict";
		if (jQuery(this).hasClass('searchOpen')) {
			if (e.target.nodeName.toUpperCase()!='INPUT' && e.target.nodeName.toUpperCase()!='A') {
				jQuery('.topWrap .search .searchForm').animate({'width': 'hide'}, 300);
				jQuery('.topWrap .ajaxSearchResults').fadeOut();

				setTimeout(function(){ jQuery('header').removeClass('topSearchShow'); },400);

				jQuery('.topWrap .search').removeClass('searchOpen');
				e.preventDefault();
				return false;
			}
		} else {
			jQuery(this).find('.searchForm').animate({'width': 'show'}, 300);
			jQuery('header').delay(300).addClass('topSearchShow');
			jQuery(this).delay(300).toggleClass('searchOpen');
			e.preventDefault();
			return false;
		}
	});
	jQuery('.topWrap .search').on('click', '.searchSubmit,.post_more', function (e) {
		"use strict";
		if (jQuery('.topWrap .searchField').val() != '')
			jQuery('.topWrap .searchForm form').get(0).submit();
		e.preventDefault();
		return false;
	});
	jQuery('.search-form').on('click', '.search-button a', function (e) {
		"use strict";
		if (jQuery(this).parents('.search-form').find('input[name="s"]').val() != '')
			jQuery(this).parents('.search-form').get(0).submit();
		e.preventDefault();
		return false;
	});
	// AJAX search
	if (THEMEREX_useAJAXSearch) {
		var THEMEREX_ajax_timer = null;
		jQuery('.topWrap .searchField').keyup(function (e) {
			"use strict";
			var s = jQuery(this).val();
			if (THEMEREX_ajax_timer) {
				clearTimeout(THEMEREX_ajax_timer);
				THEMEREX_ajax_timer = null;
			}
			if (s.length >= THEMEREX_AJAXSearch_min_length) {
				THEMEREX_ajax_timer = setTimeout(function () {
					jQuery.post(THEMEREX_ajax_url, {
						action: 'ajax_search',
						nonce: THEMEREX_ajax_nonce,
						text: s
					}).done(function(response) {
						clearTimeout(THEMEREX_ajax_timer);
						THEMEREX_ajax_timer = null;
						var rez = JSON.parse(response);
						if (rez.error === '') {
							jQuery('.topWrap .ajaxSearchResults').empty().append(rez.data).fadeIn();
						} else {
							themerex_message_warning(THEMEREX_MESSAGE_SEARCH_ERROR);
						}
					});
				}, THEMEREX_AJAXSearch_delay);
			}
		});
	}

	// search 404
	jQuery('.inputSubmitAnimation').on("click", function (e) {
		"use strict";
		e.preventDefault();
		return false;
	});
	jQuery('.inputSubmitAnimation > span').on("click", function (e) {
		"use strict";
		var form = jQuery(this).siblings('form');
		var parent = jQuery(this).parents('.inputSubmitAnimation');

		if (parent.hasClass('sFocus')) {
			if (form.length>0 && form.find('input').val()!='') {
				if (jQuery(this).hasClass('sc_emailer_button')) {

					var group = jQuery(this).data('group');
					var email = form.find('input').val();
					var regexp = new RegExp(THEMEREX_EMAIL_MASK);
					if (!regexp.test(email)) {
						form.find('input').get(0).focus();
						themerex_message_warning(THEMEREX_EMAIL_NOT_VALID);
					} else {
						jQuery.post(THEMEREX_ajax_url, {
							action: 'emailer_submit',
							nonce: THEMEREX_ajax_nonce,
							group: group,
							email: email
						}).done(function(response) {
							var rez = JSON.parse(response);
							if (rez.error === '') {
								themerex_message_info(THEMEREX_MESSAGE_EMAIL_CONFIRM.replace('%s', email));
								form.find('input').val('');
							} else {
								themerex_message_warning(rez.error);
							}
						});
					}
				} else
					form.get(0).submit();
			} else
				jQuery(document).trigger('click');
		} else {

		}
		e.preventDefault();
		return false;
	});

	//Portfolio item Description
	if (isMobile()) {	// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		jQuery('.toggleButton').show();
		jQuery('.itemDescriptionWrap,.toggleButton').on("click", function (e) {
			"use strict";
			jQuery(this).toggleClass('descriptionShow');
			jQuery(this).find('.toggleDescription').slideToggle();
			e.preventDefault();
			return false;
		});
	} else {
		jQuery('.itemDescriptionWrap').on('mouseover',function () {
			"use strict";
			jQuery(this).toggleClass('descriptionShow');
			jQuery(this).find('.toggleDescription').slideToggle();
		});
	}

	// Save placeholder for input fields
	jQuery('.formList input[type="text"], .formList input[type="password"]')
		.focus(function () {
			"use strict";
			jQuery(this).attr('data-placeholder', jQuery(this).attr('placeholder')).attr('placeholder', '');
			jQuery(this).parent('li').addClass('iconFocus');
		})
		.blur(function () {
			"use strict";
			jQuery(this).attr('placeholder', jQuery(this).attr('data-placeholder'));
			jQuery(this).parent('li').removeClass('iconFocus');
		});

	// Hide empty pagination
	if (jQuery('#nav_pages > ul > li').length < 3) {
		jQuery('#nav_pages').remove();
	} else {
		jQuery('.theme_paginaton a').addClass('theme_button');
	}

	// View More button
	jQuery('#viewmore_link').on("click", function(e) {
		"use strict";
		if (!THEMEREX_VIEWMORE_BUSY) {
			jQuery(this).addClass('loading');
			jQuery(this).find('.viewmore_loading').addClass('animate-spin');
			THEMEREX_VIEWMORE_BUSY = true;
			/*jQuery.post(THEMEREX_ajax_url, {
				action: 'view_more_posts',
				nonce: THEMEREX_ajax_nonce,
				page: THEMEREX_VIEWMORE_PAGE+1,
				data: THEMEREX_VIEWMORE_DATA,
				vars: THEMEREX_VIEWMORE_VARS
			}).done(function(response) {
				"use strict";
				var rez = JSON.parse(response);
				jQuery('#viewmore_link').removeClass('loading');
                jQuery('#viewmore_link').find('.viewmore_loading').removeClass('animate-spin');
				THEMEREX_VIEWMORE_BUSY = false;
				if (rez.error === '') {
					var posts_container = jQuery('.content').eq(0);
					if (posts_container.find('aside#tabBlog').length > 0)		posts_container = posts_container.find('aside#tabBlog').eq(0);
					if (posts_container.find('section.masonry').length > 0)		posts_container = posts_container.find('section.masonry').eq(0);
					if (posts_container.find('section.portfolio').length > 0)	posts_container = posts_container.find('section.portfolio').eq(0);
					if (posts_container.hasClass('masonry') || posts_container.hasClass('portfolio')) {
						posts_container.data('last-width', 0).append(rez.data);
						THEMEREX_isotopeInitCounter = 0;
						initAppendedIsotope(posts_container, rez.filters);
					} else {
                        jQuery('#viewmore').before(rez.data);

                        timelineResponsive();
                        timelineScrollFix();
                        itemPageFull();
                        initPostFormats();
                        initShortcodes(posts_container);
                        scrollAction();
                    }
					THEMEREX_VIEWMORE_PAGE++;
					if (rez.no_more_data==1) {
						jQuery('#viewmore').hide();
					}
					if (jQuery('#nav_pages ul li').length >= THEMEREX_VIEWMORE_PAGE) {
						jQuery('#nav_pages ul li').eq(THEMEREX_VIEWMORE_PAGE).toggleClass('pager_current', true);
					}
				}
			});*/
		}
		e.preventDefault();
		return false;
	});

	// Infinite pagination
	if (jQuery('#viewmore.pagination_infinite').length > 0) {
		jQuery(window).scroll(infiniteScroll);
	}


	// WooCommerce handlers
	jQuery('.woocommerce .mode_buttons a,.woocommerce-page .mode_buttons a').on("click", function(e) {
		"use strict";
		var mode = jQuery(this).hasClass('woocommerce_thumbs') ? 'thumbs' : 'list';
		jQuery.cookie('themerex_shop_mode', mode, {expires: 365, path: '/'});
		jQuery(this).siblings('input').val(mode).parents('form').get(0).submit();
		e.preventDefault();
		return false;
	});
	// Added to cart
	jQuery('body').bind('added_to_cart', function() {
		// Update amount on the cart button
		var total = jQuery('.usermenu_cart .total .amount').text();
		if (total != undefined) {
			jQuery('.cart_button .cart_total').text(total);
		}
	});

	initPostFormats();
	initShortcodes(jQuery('body').eq(0));

} //end ready



// Init Superfish menu
function initSfMenu(selector) {
	jQuery(selector).show().each(function () {
		if (isResponsiveNeed() && jQuery(this).attr('id')=='mainmenu' && (THEMEREX_responsive_menu_click || isMobile())) return;
		jQuery(this).addClass('inited').superfish({
			delay: 500,
			animation: {
				opacity: 'show',
				height: 'show'
			},
			speed: 'fast',
			autoArrows: false,
			dropShadows: false,
			onBeforeShow: function(ul) {
				if (jQuery(this).parents("ul").length > 1){
					var w = jQuery(window).width();
					var par_offset = jQuery(this).parents("ul").offset().left;
					var par_width  = jQuery(this).parents("ul").outerWidth();
					var ul_width   = jQuery(this).outerWidth();
					if (par_offset+par_width+ul_width > w-20 && par_offset-ul_width > 0)
						jQuery(this).addClass('submenu_left');
					else
						jQuery(this).removeClass('submenu_left');
				}
			}
		});
	});
}


// Main Menu responsive
function mainMenuResponsive() {
        if (THEMEREX_menuResponsive > 0) {
            if (isResponsiveNeed()) {
                if (!jQuery('body').hasClass('responsive_menu')) {
                    jQuery('body').addClass('responsive_menu');

                    if(!jQuery('.boxedWrap > header').hasClass('inited') && !jQuery('.boxedWrap > header').hasClass('menu_center')){
                        jQuery('.topWrap .mainmenu_area').append(jQuery('.menuTopWrap'));
                        jQuery('.boxedWrap > header').addClass('inited');
                        jQuery('.menuTopWrap').addClass('container');
                    }

                    if(!jQuery('.boxedWrap > header').hasClass('inited') && jQuery('.boxedWrap > header').hasClass('menu_center')){
                        jQuery('.boxedWrap > header').addClass('inited');
                        jQuery('.menuTopWrap').addClass('container');
                    }

                    jQuery('header').removeClass('fixedTopMenu').addClass('noFixMenu');
                    if ((THEMEREX_responsive_menu_click || isMobile()) && jQuery('.menuTopWrap > ul#mainmenu').hasClass('inited')) {
                        jQuery('.menuTopWrap > ul#mainmenu').removeClass('inited').superfish('destroy');
                    }

                    jQuery('.menuTopWrap ul li').each(function () {
                        if (jQuery(this).hasClass('menu-item-has-children')) {
                            jQuery(this).append('<span class="clikMobil"></span>');
                        }
                    });

                }
            } else {
                if (jQuery('body').hasClass('responsive_menu')) {
                    jQuery('body:not(.responsive_menu_show)').removeClass('responsive_menu');

                    if(jQuery('.boxedWrap > header').hasClass('inited') && !jQuery('.boxedWrap > header').hasClass('menu_center')){
                        jQuery('.topWrap .mainmenu_area .wrap_menu').append(jQuery('.menuTopWrap'));
                        jQuery('.menuTopWrap').removeClass('container');
                    }

                    if(jQuery('.boxedWrap > header').hasClass('inited') && jQuery('.boxedWrap > header').hasClass('menu_center')){
                        jQuery('.menuTopWrap').removeClass('container');
                    }

                    jQuery('.menuTopWrap').show();
                    if (THEMEREX_responsive_menu_click || isMobile()) {
                        initSfMenu('.menuTopWrap > ul#mainmenu');
                    }

                    jQuery('.menuTopWrap ul li .clikMobil').remove();

                    calcMenuColumnsWidth();
                }
            }
        }
}

function mainMenuResponsiveClik() {
    jQuery('.menuTopWrap ul li .clikMobil').on("click", function (e) {
        "use strict";
        if ((THEMEREX_responsive_menu_click || isMobile()) && jQuery('body').hasClass('responsive_menu') && jQuery(this).parent().hasClass('menu-item-has-children')) {
            if (jQuery(this).siblings('ul:visible').length > 0)
                jQuery(this).siblings('ul').slideUp();
            else
                jQuery(this).siblings('ul').slideDown();
        }
    });
}


// Make all columns (in custom menu) equal height
function calcMenuColumnsWidth() {
	"use strict";
	jQuery('#mainmenu li.custom_view_item ul.menu-panel ul.columns').each(function() {
		"use strict";
		if (jQuery('body').hasClass('responsive_menu')) return;
		jQuery(this).parents('.menu-panel').css({display:'block', visibility: 'hidden'});
		var h = 0, w = 0;
		jQuery(this).find('>li').css('height', 'auto').each(function () {
			var li = jQuery(this);
			var mt = parseInt(li.css('marginTop'),16), mb = parseInt(li.css('marginBottom'),16), mh = li.height() + (isNaN(mt) ? 0 : mt) + (isNaN(mb) ? 0 : mb);
			if (h < mh) h = mh;
			var bl = parseInt(li.css('borderLeft'),16), pl = parseInt(li.css('paddingLeft'),16), br = parseInt(li.css('borderRight'),16), pr = parseInt(li.css('paddingRight'),16);
			w += li.width() + (isNaN(bl) ? 0: bl) + (isNaN(pl) ? 0 : pl) + (isNaN(pr) ? 0 : pr) + (isNaN(br) ? 0 : br);
		});
		jQuery(this).parents('.menu-panel').css({display:'none', visibility: 'visible'});
		if (w > jQuery('#mainmenu').width()) jQuery(this).width(w+8);
		jQuery(this).find('>li').height(h);
	});
}

// Check if responsive menu need
function isResponsiveNeed() {
	"use strict";
	var rez = false;
	if (THEMEREX_menuResponsive > 0) {
		var w = window.innerWidth;
		if (w == undefined) {
			w = jQuery(window).width()+(jQuery(window).height() < jQuery(document).height() || jQuery(window).scrollTop() > 0 ? 16 : 0);
		}
		rez = THEMEREX_menuResponsive > w;
	}
	return rez;
}


// Infinite Scroll
function infiniteScroll() {
	"use strict";
	var v = jQuery('#viewmore.pagination_infinite').offset();
	if (jQuery(this).scrollTop() + jQuery(this).height() + 100 >= v.top && !THEMEREX_VIEWMORE_BUSY) {
		jQuery('#viewmore_link').eq(0).trigger('click');
	}
}

//itemPageFull
function itemPageFull() {
	"use strict";
	var bodyHeight = jQuery(window).height();
	var st = jQuery(window).scrollTop();
	if (st > jQuery('.noFixMenu .topWrap').height()+jQuery('.topTabsWrap').height()) st = 0;
	var thumbHeight = Math.min(jQuery('.itemPageFull').width()/16*9, bodyHeight - jQuery('#wpadminbar').height() - jQuery('.noFixMenu .topWrap').height() - jQuery('.topTabsWrap').height() + st);
	jQuery('.itemPageFull').height(thumbHeight);
	var padd1 = parseInt(jQuery('.sidemenu_wrap').css('paddingTop'),16);
	if (isNaN(padd1)) padd1 = parseInt(jQuery('.swpRightPos').css('paddingTop'),16);
	if (isNaN(padd1)) padd1 = 0;
	var padd2 = parseInt(jQuery('.swpRightPos .sc_tabs .tabsMenuBody').css('paddingTop'),16)*2;
	if (isNaN(padd2)) padd2 = 0;
	var tabs_h = jQuery('.swpRightPos .sc_tabs .tabsMenuHead').height();
	if (isNaN(tabs_h)) tabs_h = 0;
	var butt_h = jQuery('.swpRightPos .sc_tabs .tabsMenuBody .addBookmarkArea').height();
	if (isNaN(butt_h)) butt_h = 0;
	jQuery('#sidemenu_scroll').height(bodyHeight - padd1);
	jQuery('.swpRightPos .sc_tabs .tabsMenuBody').height(bodyHeight -  - padd1 - padd2 - tabs_h);
	jQuery('#custom_options_scroll').height(bodyHeight - padd1 - padd2 - tabs_h);
	jQuery('#sidebar_panel_scroll').height(bodyHeight - padd1 - padd2 - tabs_h);
	jQuery('#panelmenu_scroll').height(bodyHeight - padd1 - padd2 - tabs_h);
	jQuery('#bookmarks_scroll').height(bodyHeight - padd1 - padd2 - tabs_h - butt_h);
}


//scroll Action
function scrollAction() {
	"use strict";

	var buttonScrollTop = jQuery('.upToScroll');
	var scrollPositions = jQuery(window).scrollTop();
	var topMenuHeight   = jQuery('header').height();

	if (scrollPositions > topMenuHeight) {
		buttonScrollTop.addClass('buttonShow');
	} else {
		buttonScrollTop.removeClass('buttonShow');
	}

    if (!jQuery('body').hasClass('responsive_menu') && THEMEREX_menuFixed) {

        // Top menu height
        THEMEREX_top_height = jQuery('header .topWrap').height();
        THEMEREX_top_height_usermenu_area = jQuery('header .topWrap .usermenu_area').height();

        var slider_height = 0;
        if (jQuery('.top_panel_below .sliderHomeBullets').length > 0) {
            slider_height = jQuery('.top_panel_below .sliderHomeBullets').height();
            if (slider_height < 10) {
                slider_height = jQuery('.sliderHomeBullets').parents('.fullScreenSlider').length > 0 ? jQuery(window).height() : THEMEREX_slider_height;
            }
        }
        var topFixedHeight = Math.max(0, jQuery('.fixedTopMenu .topWrap').height());

        if (scrollPositions <= THEMEREX_top_height + slider_height /*+ THEMEREX_top_height_usermenu_area + 15*/ ) {
             if (jQuery('header').hasClass('fixedTopMenu')) {
                 jQuery('header').removeClass('fixedTopMenu').addClass('noFixMenu');
                 if (THEMEREX_use_fixed_wrapper) jQuery('.topWrapFixed').hide();
             }
        }
        else if (scrollPositions > THEMEREX_top_height + slider_height) {
            if (!jQuery('header').hasClass('fixedTopMenu')) {
                jQuery('header').addClass('fixedTopMenu').removeClass('noFixMenu');
                if (THEMEREX_use_fixed_wrapper) jQuery('.topWrapFixed').height(THEMEREX_top_height).show();
            }
        }
    }

	// TOC current items
	jQuery('#toc .toc_item').each(function () {
		"use strict";
		var id = jQuery(this).find('a').attr('href');
		var pos = id.indexOf('#');
		if (pos < 0 || id.length == 1) return;
		var loc = window.location.href;
		var pos2 = loc.indexOf('#');
		if (pos2 > 0) loc = loc.substring(0, pos2);
		var now = pos==0;
		if (!now) now = loc == href.substring(0, pos);
		if (!now) return;
		var off = jQuery(id).offset().top;
		var id_next  = jQuery(this).next().find('a').attr('href');
		var off_next = id_next ? jQuery(id_next).offset().top : 1000000;
		if (off < scrollPositions + jQuery(window).height()*0.8 && scrollPositions + topMenuHeight < off_next)
			jQuery(this).addClass('current');
		else
			jQuery(this).removeClass('current');
	});
}


// Build page TOC from the tag's id
function buildPageTOC() {
	"use strict";
	var toc = '', toc_count = 0;
	jQuery('[id^="toc_"],.sc_anchor').each(function(idx) {
		"use strict";
		var obj = jQuery(this);
		var id = obj.attr('id');
		var url = obj.data('url');
		var icon = obj.data('icon');
		if (!icon) icon = 'icon-check';
		var title = obj.attr('title');
		var description = obj.data('description');
		var separator = obj.data('separator');
		toc_count++;
		toc += '<div class="toc_item'+(separator=='yes' ? ' toc_separator' : '')+'">'
			+(description ? '<div class="toc_description">'+description+'</div>' : '')
			+'<a href="'+(url ? url : '#'+id)+'" class="toc_icon'+(title ? ' with_title' : '')+' '+icon+'">'+(title ? '<span class="toc_title">'+title+'</span>' : '')+'</a>'
			+'</div>';
	});
	if (toc_count > (THEMEREX_menu_toc_home ? 1 : 0) + (THEMEREX_menu_toc_top ? 1 : 0)) {
		if (jQuery('#toc').length > 0)
			jQuery('#toc .toc_inner').html(toc);
		else
			jQuery('body').append('<div id="toc" class="toc_'+THEMEREX_menu_toc+'"><div class="toc_inner">'+toc+'</div></div>');
	}
}

// Fullscreen slider
function fullSlider() {
	"use strict";
	var fullSlider = jQuery('.fullScreenSlider');
	if (fullSlider.length > 0) {
		var h = jQuery(window).height() - jQuery('#wpadminbar').height() - (jQuery('.top_panel_above .fullScreenSlider header').css('position')=='static' ? jQuery('.topWrap').height() : 0);
		// Slider Container
		fullSlider.find('.sliderHomeBullets').css('height', h);
		// Royal slider
		fullSlider.find('.sliderHomeBullets.slider_engine_royal > div,.sliderHomeBullets.slider_engine_royal .rsOverflow,.sliderHomeBullets.slider_engine_royal .rsContent,.sliderHomeBullets .slideContent,.sliderHomeBullets .sc_slider,.sliderHomeBullets .sc_slider .slides,.sliderHomeBullets .sc_slider .slides li').css('height', h);
		// Revolution slider
		fullSlider.find('.sliderHomeBullets.slider_engine_revo .rev_slider_wrapper,.sliderHomeBullets.slider_engine_revo .rev_slider').css({'height': h+'px', 'maxHeight': h+'px'});
		fullSlider.find('.sliderHomeBullets.slider_engine_revo .rev_slider > ul').css({'maxHeight': h+'px'});
		fullSlider.find('.sliderHomeBullets.slider_engine_revo .rev_slider .defaultimg').css({'height': h+'px', 'maxWidth': 'none'});
	} else {
		var slider = jQuery('.sliderHomeBullets.slider_engine_revo');
		if (slider.length > 0) {
			var h = slider.find('.rev_slider').height();
			if (slider.height() != h) slider.css('height', h);
		}
	}
}

// Animation effect on fullscreen slider (only for Royal slider)
function checkFullSlider() {
	"use strict";
	var fullSlider = jQuery('.fullScreenSlider');
	if (fullSlider.length > 0) {
		var slider = fullSlider.find('.royalSlider').data('royalSlider');
		if (slider == undefined || slider == '') {
			setTimeout(checkFullSlider, 500);
		} else {
			slider.ev.on('rsBeforeAnimStart', function (event) {
				"use strict";
				REX_parallax();
				var slideIndex = this.currSlideId;
				var slideContent = jQuery(".slider_engine_royal").find('.slideContent');
				slideContent.each(function () {
					jQuery(this).removeClass('sliderBGanima ' + jQuery(this).data('effect'));
				});
				slideContent.eq(slideIndex).addClass('sliderBGanima ' + slideContent.eq(slideIndex).data('effect'));
			});
		}
	}
}

// Resize sliders
function resizeSliders() {
	if (jQuery('.sc_slider_flex,.sc_slider_chop,.sc_slider_swiper').length > 0) {
		jQuery('.sc_slider_flex,.sc_slider_chop,.sc_slider_swiper').each(function () {
			if (jQuery(this).parents('.isotope, .isotopeNOanim').length == 0) calcSliderDimensions(jQuery(this));
		});
	}
}

//Time Line
function timelineResponsive() {
	"use strict";
	var tl = jQuery('#timeline_slider:not(.fixed)').eq(0);
	if (tl.length > 0) {
		if (jQuery(window).width() <= 1023) {
			tl.addClass('fixed');
		} else {
			var bodyHeight = jQuery(window).height();
			var tlHeight = jQuery(window).height() - tl.find('h2').height() - 150;
			tl.find('.sc_blogger').css('height', tlHeight).find('.sc_scroll').css('height', tlHeight);
		}
	}
}


//time line Scroll
function timelineScrollFix() {
	"use strict";
	var tl = jQuery('#timeline_slider:not(.fixed)').eq(0);
	if (tl.length > 0) {
		var scrollWind = jQuery(window).scrollTop();
		var headerHeight = jQuery('header').height() + jQuery('.topTabsWrap').height() - 20;
		var footerHeight = jQuery('.footerContentWrap').height();
		var footerVisible = jQuery(document).height() - footerHeight <= scrollWind + jQuery(window).height();

		if (jQuery(window).scrollTop() <= headerHeight) {
			if (parseFloat(tl.css('marginTop')) > 0) {
				tl.animate({
					marginTop: 0
				}, {
					queue: false,
					duration: 350
				});
			}
		} else {
			if (headerHeight <= scrollWind - 10 && !footerVisible) {
				tl.animate({
					marginTop: (scrollWind - headerHeight) + "px"
				}, {
					queue: false,
					duration: 350
				});
			}
		}
	}
}

// Init isotope
THEMEREX_isotopeLoad = 0;
var THEMEREX_isotopeInitCounter = 0;
function initIsotope() {
	if (jQuery('.isotopeNOanim,.isotope').length > 0) {

        if (!isotopeImagesComplete(jQuery('.isotopeNOanim,.isotope'))) {
            setTimeout(function() { initIsotope(); }, 2000);
            return;
        }

		jQuery('.isotopeNOanim,.isotope').each(function () {
			"use strict";
                // delay(1000) - set time before show all elements
                jQuery(this).addClass('inited').find('.isotopeElement').delay(1000).animate({opacity: 1}, 400, function () {
                    jQuery(this).addClass('isotopeElementShow');
                });
                var w = calcSizeIsotope(jQuery(this));
                if (jQuery(this).hasClass('grid')) {
                    jQuery(this).isotope({
                        resizable: jQuery(this).parents('.fullscreen,.sc_gap').length > 0 && !jQuery(this).hasClass('folio1col'),
                        masonry: {
                            columnWidth: 1
                        },
                        itemSelector: '.isotopeElement',
                        animationOptions: {
                            duration: 2000,
                            easing: 'linear',
                            queue: false
                        }
                    });
                } else {
                    jQuery(this).isotope({
                        resizable: jQuery(this).parents('.fullscreen,.sc_gap').length > 0 && !jQuery(this).hasClass('folio1col'),
                        masonry: {
                            columnWidth: w
                        },
                        itemSelector: '.isotopeElement',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                }

                // Init shortcodes in isotope
                initShortcodes(jQuery(this));

                // for Count filters
                var isotopeBox = jQuery(this);
                initCountIsotope(isotopeBox);

                // Again recalculate Isotope
                var elems = jQuery(this).find('.isotopeElement');
                if (jQuery(this).hasClass('grid')) {
                    isotopeResizeGrid(jQuery(this), elems);
                    setTimeout(function () {
                        // for hover in portfolio Grid
                        elems.each(
                            function () {
                                var newHeight = jQuery(this).find('.wrap_hover').outerHeight() / 2;
                                jQuery(this).find('.wrap_hover').css({'margin-top': -newHeight});
                            }
                        );
                    }, 1100);
                } else {
                    setTimeout(function () {
                        resizeIsotope();
                    }, 500);
                }
        });
	}
}

function initAppendedIsotope(posts_container, filters) {
	"use strict";
	if (!isotopeImagesComplete(posts_container) && THEMEREX_isotopeInitCounter++ < 30) {
		setTimeout(function() { initAppendedIsotope(posts_container, filters); }, 200);
		return;
	}
	calcSizeIsotope(posts_container);
	var flt = posts_container.siblings('.isotopeFiltr');

    var elems = posts_container.find('.isotopeElement:not(.isotopeElementShow)').addClass('isotopeElementShow');
	posts_container.isotope('appended', elems);
	for (var i in filters) {
		if (flt.find('a[data-filter=".flt_'+i+'"]').length == 0) {
			flt.find('ul').append('<li class="squareButton"><a href="#" data-filter=".flt_'+i+'">'+filters[i]+'</a></li>');
		}
	}

    // for Count filters
    initCountIsotope(posts_container);
    timelineResponsive();
    timelineScrollFix();
    itemPageFull();
    initPostFormats();
    initShortcodes(posts_container);
    scrollAction();

    // Again recalculate Isotope - resizeIsotope()
    if (posts_container.hasClass('grid')) {
        resizeIsotope();
    } else {
        setTimeout(function () {
            resizeIsotope();
        }, 700);
    }
}

function isotopeImagesComplete(cont) {
	var complete = true;
	cont.find('img').each(function() {
		if (!complete) return;
		if (!jQuery(this).get(0).complete) complete = false;
	});
	return complete;
}

function calcSizeIsotope(cont) {
	"use strict";
	var columns = Math.max(1, Number(cont.data('columns')));
	var element = cont.find('.isotopeElement:not(.isotope-item)');
	var elementWidth=0, elementWidthNew=0, elementHeight=0, elementHeightNew=0;

		if (cont.data('last-width') == cont.width()) return elementWidthNew;
		var changeHeight = cont.hasClass('portfolio');
		var m1 = parseInt(cont.css('marginRight'),16);
		if (isNaN(m1)) m1 = 0;
		var m2 = parseInt(element.find('.isotopePadding').css('marginRight'),16);
		if (isNaN(m2)) m2 = 0;
		var lastWidth = cont.width() + (changeHeight ? 0 : m1+m2);
		cont.data('last-width', lastWidth);
		elementWidth = changeHeight ? element.width() : Math.max(240, Math.floor(lastWidth/columns - m2));
		cont.data('element-width', elementWidth);
		elementWidthNew = Math.floor(lastWidth / columns);
		var dir = elementWidthNew > elementWidth ? 1 : -1;
		while (dir*(elementWidthNew-elementWidth)/elementWidth > THEMEREX_isotope_resize_delta) {
			columns += dir;
			if (columns==0) break;
			elementWidthNew = Math.floor(lastWidth / columns);
		}
		element.css({
			width: elementWidthNew
		});
		if (changeHeight) {
			elementHeight = element.height();
			cont.data('element-height', elementHeight);
			elementHeightNew = Math.floor(elementWidthNew/elementWidth*elementHeight);
			element.css({
				height: elementHeightNew
			});
		}

	return elementWidthNew;
}


// Resize new Isotope elements
function resizeIsotope() {
        jQuery('.isotope, .isotopeNOanim').each(function () {
            "use strict";

            // for isotopeFull (grid)
            if(jQuery(this).hasClass('grid')){
                var isotopeEll = jQuery(this).find('article');
                isotopeResizeGrid(jQuery(this),isotopeEll);

                // for hover in portfolio Grid
                setTimeout(function () {
                    isotopeEll.each(
                        function () {
                            var newHeight = jQuery(this).find('.wrap_hover').outerHeight() / 2;
                            jQuery(this).find('.wrap_hover').css({'margin-top': -newHeight});
                        });
                }, 200);
            }

            // for all isotope
            else {
                var cont = jQuery(this);
                var columns = Math.max(1, Number(cont.data('columns')));
                var changeHeight = cont.hasClass('portfolio');
                var element = cont.find('.isotopeElement');
                var m1 = parseInt(cont.css('marginRight'),16);
                if (isNaN(m1)) m1 = 0;
                var m2 = parseInt(element.find('.isotopePadding').css('marginRight'),16);
                if (isNaN(m2)) m2 = 0;
                var lastWidth = cont.width() + (changeHeight ? 0 : m1 + m2);
                cont.data('last-width', lastWidth);
                var elementWidth = parseFloat(cont.data('element-width'));
                var elementWidthNew = Math.floor(lastWidth / columns);
                var dir = elementWidthNew > elementWidth ? 1 : -1;
                while (dir * (elementWidthNew - elementWidth) / elementWidth > THEMEREX_isotope_resize_delta) {
                    columns += dir;
                    if (columns == 0) break;
                    elementWidthNew = Math.floor(lastWidth / columns);
                }
                element.css({
                    width: elementWidthNew
                });
                if (changeHeight) {
                    var elementHeight = parseFloat(cont.data('element-height'));
                    var elementHeightNew = Math.floor(elementWidthNew / elementWidth * elementHeight);
                    element.css({
                        height: elementHeightNew
                    });
                }
                jQuery(this).isotope({
                    masonry: {
                        columnWidth: elementWidthNew
                    }
                });
                cont.find('.sc_slider_flex,.sc_slider_chop,.sc_slider_swiper').each(function () {
                    calcSliderDimensions(jQuery(this));
                });

                // for proper alignment indentation for video and slides
                setTimeout(function () {
                    cont.isotope('layout');
                }, 1500);

                setTimeout(function () {
                    // for hover in portfolio Masonry
                    if (jQuery('.portfolioWrap .masonry').length > 0) {
                        jQuery('.portfolioWrap .masonry article').each(
                            function () {
                                var newHeight = jQuery(this).find('.wrap_hover').outerHeight() / 2;
                                jQuery(this).find('.wrap_hover').css({'margin-top': -newHeight});
                            }
                        );
                    }
                }, 1600);

            }
        });
}


function initPostFormats() {
	"use strict";

	// MediaElement init
    initMediaElements(jQuery('body'));

	//hoverZoom img effect
	if (jQuery('.hoverIncrease:not(.inited)').length > 0) {
		jQuery('.hoverIncrease:not(.inited)')
			.addClass('inited')
			.each(function () {
				"use strict";
				var img = jQuery(this).data('image');
				var title = jQuery(this).data('title');
				var link = jQuery(this).data('link');
				var target = jQuery(this).data('target');
                if(target) { target = ' target="'+target+'" '; }
                else { target = ' '; }
				if (img) {
                    jQuery(this).append('<span class="hoverShadow"></span><div class="wrap_hover"><span class="hoverIcon"><a href="'+img+'" title="'+title+'"></a></span></div>');
                }
			});
	}

	// Popup init
    if (THEMEREX_popupEngine == 'pretty' && typeof jQuery.prettyPhoto != 'undefined') {
		jQuery("a[href$='jpg'],a[href$='jpeg'],a[href$='png'],a[href$='gif']").attr('rel', 'prettyPhoto'+(THEMEREX_popupGallery ? '[slideshow]' : ''));	//.toggleClass('prettyPhoto', true);
		jQuery("a[rel*='prettyPhoto']:not(.inited):not([rel*='magnific']):not([data-rel*='magnific'])")
			.addClass('inited')
			.prettyPhoto({
				social_tools: '',
				theme: 'facebook',
				deeplinking: false
			})
			.on("click", function(e) {
				"use strict";
				if (jQuery(window).width()<480)	{
					e.stopImmediatePropagation();
					window.location = jQuery(this).attr('href');
				}
				e.preventDefault();
				return false;
			});
	} else if (typeof jQuery.magnificPopup != 'undefined') {
		jQuery("a[href$='jpg'],a[href$='jpeg'],a[href$='png'],a[href$='gif']").attr('rel', 'magnific');
		jQuery("a[rel*='magnific']:not(.inited):not(.prettyphoto):not([rel*='pretty']):not([data-rel*='pretty'])")
			.addClass('inited')
			.magnificPopup({
				type: 'image',
				mainClass: 'mfp-img-mobile',
				closeOnContentClick: true,
				closeBtnInside: true,
				fixedContentPos: true,
				midClick: true,
				preloader: true,
				tLoading: THEMEREX_MAGNIFIC_LOADING,
				gallery:{
					enabled:THEMEREX_popupGallery
				},
				image: {
					tError: THEMEREX_MAGNIFIC_ERROR,
					verticalFit: true
				}
			});
	}

	// Popup windows with any html content
    if(jQuery('.user-popup-link').length > 0 || jQuery('a[href="#openLogin"]').length > 0) {
        jQuery('.user-popup-link:not(.inited),a[href="#openLogin"]:not(.inited)')
            .addClass('inited')
            .magnificPopup({
                type: 'inline',
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function () {
                        this.st.mainClass = 'mfp-zoom-in';
                    },
                    open: function () {
                        jQuery('html').css({
                            overflow: 'visible',
                            margin: 0
                        });
                    },
                    close: function () {
                    }
                },
                midClick: true
            });
    }
	//textarea Autosize
	if (jQuery('textarea.textAreaSize:not(.inited)').length > 0) {
		jQuery('textarea.textAreaSize:not(.inited)')
			.addClass('inited')
			.autosize({
				append: "\n"
			});
	}

	// Share button
	if (jQuery('ul.shareDrop:not(.inited)').length > 0) {
		jQuery('ul.shareDrop:not(.inited)')
			.addClass('inited')
			.siblings('a').on("click", function (e) {
				"use strict";
                var shareDrop = jQuery(this).siblings('ul.shareDrop');
				if (jQuery(this).hasClass('selected')) {
					jQuery(this).removeClass('selected').siblings('ul.shareDrop').slideUp(500);
                    setTimeout( function() { shareDrop.removeClass('open')} , 600);
				} else {
					jQuery(this).addClass('selected').siblings('ul.shareDrop').slideDown(500);
                    setTimeout( function() { shareDrop.addClass('open'); } , 600);
				}
				e.preventDefault();
				return false;
			}).end()
			.find('li a').on("click", function (e) {
                var shareDropClose = jQuery(this).siblings('ul.shareDrop');
				jQuery(this).parents('ul.shareDrop').slideUp(500).siblings('a.shareDrop').removeClass('selected');
                setTimeout( function() { shareDropClose.removeClass('open'); } , 600);
				e.preventDefault();
				return false;
			});
	}

	// Like button
	if (jQuery('.postSharing:not(.inited),.masonryMore:not(.inited)').length > 0) {
		jQuery('.postSharing:not(.inited),.masonryMore:not(.inited)')
			.addClass('inited')
			.find('.likeButton a')
			.on("click", function(e) {
				var button = jQuery(this).parent();
				var inc = button.hasClass('like') ? 1 : -1;
				var post_id = button.data('postid');
				var likes = Number(button.data('likes'))+inc;
				var cookie_likes = jQuery.cookie('themerex_likes');
				if (cookie_likes === undefined) cookie_likes = '';
				jQuery.post(THEMEREX_ajax_url, {
					action: 'post_counter',
					nonce: THEMEREX_ajax_nonce,
					post_id: post_id,
					likes: likes
				}).done(function(response) {
					var rez = JSON.parse(response);
					if (rez.error === '') {
						if (inc == 1) {
							var title = button.data('title-dislike');
							button.removeClass('like').addClass('likeActive');
							cookie_likes += (cookie_likes.substr(-1)!=',' ? ',' : '') + post_id + ',';
						} else {
							var title = button.data('title-like');
							button.removeClass('likeActive').addClass('like');
							cookie_likes = cookie_likes.replace(','+post_id+',', ',');
						}
						button.data('likes', likes).find('a').attr('title', title);
						jQuery.cookie('themerex_likes', cookie_likes, {expires: 365, path: '/'});
					} else {
						themerex_message_warning(THEMEREX_MESSAGE_ERROR_LIKE);
					}
				});
				e.preventDefault();
				return false;
			});
	}

	//Hover DIR
	if (jQuery('.portfolio > .isotopeElement:not(.inited)').length > 0) {
		jQuery('.portfolio > .isotopeElement:not(.inited)')
			.addClass('inited')
			.find('> .hoverDirShow').each(function () {
				"use strict";
				jQuery(this).hoverdir();
			});
	}

	// Add video on thumb click
	if (jQuery('.sc_video_play_button:not(.inited)').length > 0) {
		jQuery('.sc_video_play_button:not(.inited)').each(function() {
			"use strict";
			var video = jQuery(this).data('video');
			var pos = video.indexOf('height=');
			if (pos > 0) {
				pos += 8;
				var pos2 = video.indexOf('"', pos);
				var h = parseInt(video.substring(pos, pos2),16);
				if (!isNaN(h))
					jQuery(this).find('img').height(h);
			}
			jQuery(this)
				.addClass('inited')
				.animate({opacity: 1}, 1000)
				.on("click", function (e) {
					"use strict";
					if (!jQuery(this).hasClass('sc_video_play_button')) return;
					var video = jQuery(this).removeClass('sc_video_play_button').data('video');
					if (video!=='') {
						jQuery(this).empty().html(video);
						videoDimensions();
						var video_tag = jQuery(this).find('video');
						var w = video_tag.width();
						var h = video_tag.height();
						initMediaElements(jQuery(this));
						// Restore WxH attributes, because Chrome broke it!
						jQuery(this).find('video').css({'width':w, 'height': h}).attr({'width':w, 'height': h});
					}
					e.preventDefault();
					return false;
				});
		});
	}

	// IFRAME width and height constrain proportions
	if (jQuery('iframe,.sc_video_player,video.sc_video').length > 0) {
		if (!THEMEREX_video_resize_inited) {
			THEMEREX_video_resize_inited = true;
			jQuery(window).resize(function() {
				"use strict";
				videoDimensions();
			});
		}
		videoDimensions();
	}

}


function initMediaElements(cont) {
	if (THEMEREX_useMediaElement && cont.find('audio,video').length > 0) {
		if (window.mejs) {
			window.mejs.MepDefaults.enableAutosize = false;
			window.mejs.MediaElementDefaults.enableAutosize = false;
			cont.find('audio:not(.wp-audio-shortcode),video:not(.wp-video-shortcode)').each(function() {

                // init Media Elements after init isotope
                if (jQuery(this).parents('.isotopeNOanim,.isotope').length > 0 && !isotopeImagesComplete(jQuery('.isotopeNOanim,.isotope'))) {
                    setTimeout(function() {
                        initMediaElements(cont);
                    }, 2500);
                    return;
                }

                else if (jQuery(this).parents('.mejs-mediaelement').length == 0) {
					var settings = {
						enableAutosize: false,
						videoWidth: -1,		// if set, overrides <video width>
						videoHeight: -1,	// if set, overrides <video height>
						audioWidth: '100%',	// width of audio player
						audioHeight: 30		// height of audio player
					};

					settings.success = function (mejs) {
						var autoplay, loop;

						if ( 'flash' === mejs.pluginType ) {

							autoplay = mejs.attributes.autoplay && 'false' !== mejs.attributes.autoplay;
							loop = mejs.attributes.loop && 'false' !== mejs.attributes.loop;

							autoplay && mejs.addEventListener( 'canplay', function () {
								mejs.play();
							}, false );

							loop && mejs.addEventListener( 'ended', function () {
								mejs.play();
							}, false );
						}
					}

					jQuery(this).mediaelementplayer(settings);
				}
			});
		} else
			setTimeout(function() { initMediaElements(cont); }, 400);
	}
}



// Fit video frames to document width
function videoDimensions() {
	jQuery('.sc_video_player').each(function() {
		"use strict";
		var player = jQuery(this).eq(0);
		var ratio = (player.data('ratio') ? player.data('ratio').split(':') : (player.find('[data-ratio]').length>0 ? player.find('[data-ratio]').data('ratio').split(':') : [16,9]));
		ratio = ratio.length!=2 || ratio[0]==0 || ratio[1]==0 ? 16/9 : ratio[0]/ratio[1];
		var cover = jQuery(this).find('.sc_video_play_button img');
		var ht = player.find('.sc_video_player_title').height();
		var w_attr = player.data('width');
		var h_attr = player.data('height');
		if (!w_attr || !h_attr) {
			return;
		}
		var percent = (''+w_attr).substr(-1)=='%';
		w_attr = parseInt(w_attr,16);
		h_attr = parseInt(h_attr,16);
		var w_real = Math.min(percent ? 10000 : w_attr, player.parents('div,article').width()), //player.width();
			h_real = Math.round(percent ? w_real/ratio : w_real/w_attr*h_attr);
		if (parseInt(player.attr('data-last-width'),16)==w_real) return;
		if (percent) {
			player.height(h_real + (isNaN(ht) ? 0 : ht));
			if (cover.length > 0) cover.height(h_real);
		} else {
			player.css({'width': w_real+'px', 'height': h_real + (isNaN(ht) ? 0 : ht)+'px'});
			if (cover.length > 0) cover.height(h_real);
		}
		player.attr('data-last-width', w_real);
	});
	jQuery('video.sc_video').each(function() {
		"use strict";
		var video = jQuery(this).eq(0);
		var ratio = (video.data('ratio')!=undefined ? video.data('ratio').split(':') : [16,9]);
		ratio = ratio.length!=2 || ratio[0]==0 || ratio[1]==0 ? 16/9 : ratio[0]/ratio[1];
		var mejs_cont = video.parents('.mejs-video');
		var player = video.parents('.sc_video_player');
		var w_attr = player.length>0 ? player.data('width') : video.data('width');
		var h_attr = player.length>0 ? player.data('height') : video.data('height');
		if (!w_attr || !h_attr) {
			return;
		}
		var percent = (''+w_attr).substr(-1)=='%';
		w_attr = parseInt(w_attr,16);
		h_attr = parseInt(h_attr,16);
		var w_real = Math.round(mejs_cont.length > 0 ? Math.min(percent ? 10000 : w_attr, mejs_cont.parents('div,article').width()) : video.width()),
			h_real = Math.round(percent ? w_real/ratio : w_real/w_attr*h_attr);
		if (parseInt(video.attr('data-last-width'),16)==w_real) return;
		if (mejs_cont.length > 0 && mejs) {
			setMejsPlayerDimensions(video, w_real, h_real);
		}
		if (percent) {
			video.height(h_real);
		} else {
			video.attr({'width': w_real, 'height': h_real}).css({'width': w_real+'px', 'height': h_real+'px'});
		}
		video.attr('data-last-width', w_real);
	});
	jQuery('video.sc_video_bg').each(function() {
		"use strict";
		var video = jQuery(this).eq(0);
		var ratio = (video.data('ratio')!=undefined ? video.data('ratio').split(':') : [16,9]);
		ratio = ratio.length!=2 || ratio[0]==0 || ratio[1]==0 ? 16/9 : ratio[0]/ratio[1];
		var mejs_cont = video.parents('.mejs-video');
		var container = mejs_cont.length>0 ? mejs_cont.parent() : video.parent();
		var w = container.width();
		var h = container.height();
		var w1 = Math.ceil(h*ratio);
		var h1 = Math.ceil(w/ratio);
		if (video.parents('.sc_parallax').length > 0) {
			var windowHeight = jQuery(window).height();
			var speed = Number(video.parents('.sc_parallax').data('parallax-speed'));
			var h_add = Math.ceil(Math.abs((windowHeight-h)*speed));
			if (h1 < h + h_add) {
				h1 = h + h_add;
				w1 = Math.ceil(h1 * ratio);
			}
		}
		if (h1 < h) {
			h1 = h;
			w1 = Math.ceil(h1 * ratio);
		}
		if (w1 < w) {
			w1 = w;
			h1 = Math.ceil(w1 / ratio);
		}
		var l = Math.round((w1-w)/2);
		var t = Math.round((h1-h)/2);
		if (parseInt(video.attr('data-last-width'),16)==w1) return;
		if (mejs_cont.length > 0) {
			setMejsPlayerDimensions(video, w1, h1);
			mejs_cont.css({'left': -l+'px', 'top': -t+'px'});
		} else
			video.css({'left': -l+'px', 'top': -t+'px'});
		video.attr({'width': w1, 'height': h1, 'data-last-width':w1}).css({'width':w1+'px', 'height':h1+'px'});
		if (video.css('opacity')==0) video.animate({'opacity': 1}, 3000);
	});
	jQuery('iframe').each(function() {
		"use strict";
		var iframe = jQuery(this).eq(0);
		var ratio = (iframe.data('ratio')!=undefined ? iframe.data('ratio').split(':') : (iframe.find('[data-ratio]').length>0 ? iframe.find('[data-ratio]').data('ratio').split(':') : [16,9]));
		ratio = ratio.length!=2 || ratio[0]==0 || ratio[1]==0 ? 16/9 : ratio[0]/ratio[1];
		var w_attr = iframe.attr('width');
		var h_attr = iframe.attr('height');
		var player = iframe.parents('.sc_video_player');
		if (player.length > 0) {
			w_attr = player.data('width');
			h_attr = player.data('height');
		}
		if (!w_attr || !h_attr) {
			return;
		}
		var percent = (''+w_attr).substr(-1)=='%';
		w_attr = parseInt(w_attr,16);
		h_attr = parseInt(h_attr,16);
		var w_real = player.length > 0 ? player.width() : iframe.width(),
			h_real = Math.round(percent ? w_real/ratio : w_real/w_attr*h_attr);
		if (parseInt(iframe.attr('data-last-width'),16)==w_real) return;
		iframe.css({'width': w_real+'px', 'height': h_real+'px'});
	});
}

// Resize fullscreen video background
function resizeVideoBackground() {
	var bg = jQuery('.videoBackgroundFullscreen');
	if (bg.length < 1)
		return;
	if (THEMEREX_useMediaElement && bg.find('.mejs-video').length == 0)  {
		setTimeout(resizeVideoBackground, 100);
		return;
	}
	if (!bg.hasClass('inited')) {
		bg.addClass('inited');
	}
	var video = bg.find('video');
	var ratio = (video.data('ratio')!=undefined ? video.data('ratio').split(':') : [16,9]);
	ratio = ratio.length!=2 || ratio[0]==0 || ratio[1]==0 ? 16/9 : ratio[0]/ratio[1];
	var w = bg.width();
	var h = bg.height();
	var w1 = Math.ceil(h*ratio);
	var h1 = Math.ceil(w/ratio);
	if (h1 < h) {
		h1 = h;
		w1 = Math.ceil(h1 * ratio);
	}
	if (w1 < w) {
		w1 = w;
		h1 = Math.ceil(w1 / ratio);
	}
	var l = Math.round((w1-w)/2);
	var t = Math.round((h1-h)/2);
	if (bg.find('.mejs-container').length > 0) {
		setMejsPlayerDimensions(bg.find('video'), w1, h1);
		bg.find('.mejs-container').css({'left': -l+'px', 'top': -t+'px'});
	} else
		bg.find('video').css({'left': -l+'px', 'top': -t+'px'});
	bg.find('video').attr({'width': w1, 'height': h1}).css({'width':w1+'px', 'height':h1+'px'});
}

// Set Media Elements player dimensions
function setMejsPlayerDimensions(video, w, h) {
	if (mejs) {
		for (var pl in mejs.players) {
			if (mejs.players[pl].media.src == video.attr('src')) {
				if (mejs.players[pl].media.setVideoSize) {
					mejs.players[pl].media.setVideoSize(w, h);
				}
				mejs.players[pl].setPlayerSize(w, h);
				mejs.players[pl].setControlsSize();
            }
		}
	}
}

// Parallax scroll
function REX_parallax(){
	jQuery('.sc_parallax').each(function(){
		var windowHeight = jQuery(window).height();
		var scrollTops = jQuery(window).scrollTop();
		var offsetPrx = Math.max(jQuery(this).offset().top, windowHeight);
		if ( offsetPrx <= scrollTops + windowHeight ) {
			var speed  = Number(jQuery(this).data('parallax-speed'));
			var xpos   = jQuery(this).data('parallax-x-pos');
			var ypos   = Math.round((offsetPrx - scrollTops - windowHeight) * speed + (speed < 0 ? windowHeight*speed : 0));
			jQuery(this).find('.sc_parallax_content').css('backgroundPosition', xpos+' '+ypos+'px');
			// Uncomment next line if you want parallax video (else - video position is static)
			jQuery(this).find('div.sc_video_bg').css('top', ypos+'px');
		}
	});
}


// Height
function setEqualHeight(example,where) {
    var tallestcolumn = 0;
    example.each(
        function() {
            var currentHeight = jQuery(this).height();
            if(currentHeight > tallestcolumn)
            {
                tallestcolumn = currentHeight;
            }
        }
    );
    where.height(tallestcolumn);
}


// Fit height to the larger value of child elements
function fitLargerHeight() {
    if (jQuery('.autoHeight.columnsWrap').length > 0) {
        jQuery('.autoHeight.columnsWrap').each(function () {
            "use strict";
            var tallestcolumn = 0;
            var columns = jQuery(this).children("div");
            columns.css({"height":"auto"});
            columns.each(
                function () {
                    var currentHeight = jQuery(this).height();
                    if (currentHeight > tallestcolumn) {
                        tallestcolumn = currentHeight;
                    }
                }
            );
            if(jQuery(this).find('.sc_accordion').length > 0 ){
                columns.css({"min-height":tallestcolumn});
            }
            else{ columns.height(tallestcolumn); }
        });
    }
}


function initCountIsotope(isotopeBox) {
    "use strict";
    var box = isotopeBox.find('.isotopeElement');
    var flt = isotopeBox.parent().find('.isotopeFiltr a');
    var ellAllCount = box.length;
    flt.find('.data_count').html('');

    flt.each(function() {
        var el = jQuery(this).data('filter');
        var count = 0;
        box.each(function() {
            if (jQuery(this).hasClass(el.substr(1))) {
                count++;
            }
        });
        if(count==0){
            count = ellAllCount;
        }
        jQuery(this).append('<span class="data_count">' + count + '</span>');
    });
}


//isotope grid resize
function isotopeResizeGrid(itemWrap,item){
    "use strict";

    var isotopeWrap = itemWrap;
    var isotopeItem = item;
        var isotopeItemWidth = 300;
        var isotopeItemHeight = 300;

    if(jQuery(window).width() < 800){
            var isotopeItemWidth = 200;
            var isotopeItemHeight = 200;
        }
    else if(jQuery(window).width() < 1023){
        var isotopeItemWidth = 250;
        var isotopeItemHeight = 250;
    }

    if(jQuery(window).width() > 480) {
        isotopeItem.each(function () {
            var w = jQuery(this).data('width');
            var h = jQuery(this).data('height');
            jQuery(this).css('width', Math.floor(isotopeWrap.width() / Math.floor(isotopeWrap.width() / isotopeItemWidth)) * w);
            jQuery(this).css('height', Math.floor(isotopeWrap.width() / Math.floor(isotopeWrap.width() / isotopeItemHeight)) * h);
        });
    }
    itemWrap.isotope('layout');
}


/*!
 * pickadate.js v3.5.4, 2014/09/11
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( 'picker', ['jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('jquery') )

    // Browser globals.
    else this.Picker = factory( jQuery )

}(function( $ ) {

var $window = $( window )
var $document = $( document )
var $html = $( document.documentElement )


/**
 * The picker constructor that creates a blank picker.
 */
function PickerConstructor( ELEMENT, NAME, COMPONENT, OPTIONS ) {

    // If there’s no element, return the picker constructor.
    if ( !ELEMENT ) return PickerConstructor


    var
        IS_DEFAULT_THEME = false,


        // The state of the picker.
        STATE = {
            id: ELEMENT.id || 'P' + Math.abs( ~~(Math.random() * new Date()) )
        },


        // Merge the defaults and options passed.
        SETTINGS = COMPONENT ? $.extend( true, {}, COMPONENT.defaults, OPTIONS ) : OPTIONS || {},


        // Merge the default classes with the settings classes.
        CLASSES = $.extend( {}, PickerConstructor.klasses(), SETTINGS.klass ),


        // The element node wrapper into a jQuery object.
        $ELEMENT = $( ELEMENT ),


        // Pseudo picker constructor.
        PickerInstance = function() {
            return this.start()
        },


        // The picker prototype.
        P = PickerInstance.prototype = {

            constructor: PickerInstance,

            $node: $ELEMENT,


            /**
             * Initialize everything
             */
            start: function() {

                // If it’s already started, do nothing.
                if ( STATE && STATE.start ) return P


                // Update the picker states.
                STATE.methods = {}
                STATE.start = true
                STATE.open = false
                STATE.type = ELEMENT.type


                // Confirm focus state, convert into text input to remove UA stylings,
                // and set as readonly to prevent keyboard popup.
                ELEMENT.autofocus = ELEMENT == document.activeElement
                ELEMENT.readOnly = !SETTINGS.editable
                ELEMENT.id = ELEMENT.id || STATE.id
                if ( ELEMENT.type != 'text' ) {
                    ELEMENT.type = 'text'
                }


                // Create a new picker component with the settings.
                P.component = new COMPONENT(P, SETTINGS)


                // Create the picker root with a holder and then prepare it.
                P.$root = $( PickerConstructor._.node('div', createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root"') )
                prepareElementRoot()


                // If there’s a format for the hidden input element, create the element.
                if ( SETTINGS.formatSubmit ) {
                    prepareElementHidden()
                }


                // Prepare the input element.
                prepareElement()


                // Insert the root as specified in the settings.
                if ( SETTINGS.container ) $( SETTINGS.container ).append( P.$root )
                else $ELEMENT.after( P.$root )


                // Bind the default component and settings events.
                P.on({
                    start: P.component.onStart,
                    render: P.component.onRender,
                    stop: P.component.onStop,
                    open: P.component.onOpen,
                    close: P.component.onClose,
                    set: P.component.onSet
                }).on({
                    start: SETTINGS.onStart,
                    render: SETTINGS.onRender,
                    stop: SETTINGS.onStop,
                    open: SETTINGS.onOpen,
                    close: SETTINGS.onClose,
                    set: SETTINGS.onSet
                })


                // Once we’re all set, check the theme in use.
                IS_DEFAULT_THEME = isUsingDefaultTheme( P.$root.children()[ 0 ] )


                // If the element has autofocus, open the picker.
                if ( ELEMENT.autofocus ) {
                    P.open()
                }


                // Trigger queued the “start” and “render” events.
                return P.trigger( 'start' ).trigger( 'render' )
            }, //start


            /**
             * Render a new picker
             */
            render: function( entireComponent ) {

                // Insert a new component holder in the root or box.
                if ( entireComponent ) P.$root.html( createWrappedComponent() )
                else P.$root.find( '.' + CLASSES.box ).html( P.component.nodes( STATE.open ) )

                // Trigger the queued “render” events.
                return P.trigger( 'render' )
            }, //render


            /**
             * Destroy everything
             */
            stop: function() {

                // If it’s already stopped, do nothing.
                if ( !STATE.start ) return P

                // Then close the picker.
                P.close()

                // Remove the hidden field.
                if ( P._hidden ) {
                    P._hidden.parentNode.removeChild( P._hidden )
                }

                // Remove the root.
                P.$root.remove()

                // Remove the input class, remove the stored data, and unbind
                // the events (after a tick for IE - see `P.close`).
                $ELEMENT.removeClass( CLASSES.input ).removeData( NAME )
                setTimeout( function() {
                    $ELEMENT.off( '.' + STATE.id )
                }, 0)

                // Restore the element state
                ELEMENT.type = STATE.type
                ELEMENT.readOnly = false

                // Trigger the queued “stop” events.
                P.trigger( 'stop' )

                // Reset the picker states.
                STATE.methods = {}
                STATE.start = false

                return P
            }, //stop


            /**
             * Open up the picker
             */
            open: function( dontGiveFocus ) {

                // If it’s already open, do nothing.
                if ( STATE.open ) return P

                // Add the “active” class.
                $ELEMENT.addClass( CLASSES.active )
                aria( ELEMENT, 'expanded', true )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So add the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Add the “opened” class to the picker root.
                    P.$root.addClass( CLASSES.opened )
                    aria( P.$root[0], 'hidden', false )

                }, 0 )

                // If we have to give focus, bind the element and doc events.
                if ( dontGiveFocus !== false ) {

                    // Set it as open.
                    STATE.open = true

                    // Prevent the page from scrolling.
                    if ( IS_DEFAULT_THEME ) {
                        $html.
                            css( 'overflow', 'hidden' ).
                            css( 'padding-right', '+=' + getScrollbarWidth() )
                    }

                    // Pass focus to the element’s jQuery object.
                    $ELEMENT.trigger( 'focus' )

                    // Bind the document events.
                    $document.on( 'click.' + STATE.id + ' focusin.' + STATE.id, function( event ) {

                        var target = event.target

                        // If the target of the event is not the element, close the picker picker.
                        // * Don’t worry about clicks or focusins on the root because those don’t bubble up.
                        //   Also, for Firefox, a click on an `option` element bubbles up directly
                        //   to the doc. So make sure the target wasn't the doc.
                        // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,
                        //   which causes the picker to unexpectedly close when right-clicking it. So make
                        //   sure the event wasn’t a right-click.
                        if ( target != ELEMENT && target != document && event.which != 3 ) {

                            // If the target was the holder that covers the screen,
                            // keep the element focused to maintain tabindex.
                            P.close( target === P.$root.children()[0] )
                        }

                    }).on( 'keydown.' + STATE.id, function( event ) {

                        var
                            // Get the keycode.
                            keycode = event.keyCode,

                            // Translate that to a selection change.
                            keycodeToMove = P.component.key[ keycode ],

                            // Grab the target.
                            target = event.target


                        // On escape, close the picker and give focus.
                        if ( keycode == 27 ) {
                            P.close( true )
                        }


                        // Check if there is a key movement or “enter” keypress on the element.
                        else if ( target == ELEMENT && ( keycodeToMove || keycode == 13 ) ) {

                            // Prevent the default action to stop page movement.
                            event.preventDefault()

                            // Trigger the key movement action.
                            if ( keycodeToMove ) {
                                PickerConstructor._.trigger( P.component.key.go, P, [ PickerConstructor._.trigger( keycodeToMove ) ] )
                            }

                            // On “enter”, if the highlighted item isn’t disabled, set the value and close.
                            else if ( !P.$root.find( '.' + CLASSES.highlighted ).hasClass( CLASSES.disabled ) ) {
                                P.set( 'select', P.component.item.highlight ).close()
                            }
                        }


                        // If the target is within the root and “enter” is pressed,
                        // prevent the default action and trigger a click on the target instead.
                        else if ( $.contains( P.$root[0], target ) && keycode == 13 ) {
                            event.preventDefault()
                            target.click()
                        }
                    })
                }

                // Trigger the queued “open” events.
                return P.trigger( 'open' )
            }, //open


            /**
             * Close the picker
             */
            close: function( giveFocus ) {

                // If we need to give focus, do it before changing states.
                if ( giveFocus ) {
                    // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|
                    // The focus is triggered *after* the close has completed - causing it
                    // to open again. So unbind and rebind the event at the next tick.
                    $ELEMENT.off( 'focus.' + STATE.id ).trigger( 'focus' )
                    setTimeout( function() {
                        $ELEMENT.on( 'focus.' + STATE.id, focusToOpen )
                    }, 0 )
                }

                // Remove the “active” class.
                $ELEMENT.removeClass( CLASSES.active )
                aria( ELEMENT, 'expanded', false )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So remove the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Remove the “opened” and “focused” class from the picker root.
                    P.$root.removeClass( CLASSES.opened + ' ' + CLASSES.focused )
                    aria( P.$root[0], 'hidden', true )

                }, 0 )

                // If it’s already closed, do nothing more.
                if ( !STATE.open ) return P

                // Set it as closed.
                STATE.open = false

                // Allow the page to scroll.
                if ( IS_DEFAULT_THEME ) {
                    $html.
                        css( 'overflow', '' ).
                        css( 'padding-right', '-=' + getScrollbarWidth() )
                }

                // Unbind the document events.
                $document.off( '.' + STATE.id )

                // Trigger the queued “close” events.
                return P.trigger( 'close' )
            }, //close


            /**
             * Clear the values
             */
            clear: function( options ) {
                return P.set( 'clear', null, options )
            }, //clear


            /**
             * Set something
             */
            set: function( thing, value, options ) {

                var thingItem, thingValue,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                // Make sure we have usable options.
                options = thingIsObject && $.isPlainObject( value ) ? value : options || {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = value
                    }

                    // Go through the things of items to set.
                    for ( thingItem in thingObject ) {

                        // Grab the value of the thing.
                        thingValue = thingObject[ thingItem ]

                        // First, if the item exists and there’s a value, set it.
                        if ( thingItem in P.component.item ) {
                            if ( thingValue === undefined ) thingValue = null
                            P.component.set( thingItem, thingValue, options )
                        }

                        // Then, check to update the element value and broadcast a change.
                        if ( thingItem == 'select' || thingItem == 'clear' ) {
                            $ELEMENT.
                                val( thingItem == 'clear' ? '' : P.get( thingItem, SETTINGS.format ) ).
                                trigger( 'change' )
                        }
                    }

                    // Render a new picker.
                    P.render()
                }

                // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.
                return options.muted ? P : P.trigger( 'set', thingObject )
            }, //set


            /**
             * Get something
             */
            get: function( thing, format ) {

                // Make sure there’s something to get.
                thing = thing || 'value'

                // If a picker state exists, return that.
                if ( STATE[ thing ] != null ) {
                    return STATE[ thing ]
                }

                // Return the value, if that.
                if ( thing == 'value' ) {
                    return ELEMENT.value
                }

                // Check if a component item exists, return that.
                if ( thing in P.component.item ) {
                    if ( typeof format == 'string' ) {
                        var thingValue = P.component.get( thing )
                        return thingValue ?
                            PickerConstructor._.trigger(
                                P.component.formats.toString,
                                P.component,
                                [ format, thingValue ]
                            ) : ''
                    }
                    return P.component.get( thing )
                }
            }, //get



            /**
             * Bind events on the things.
             */
            on: function( thing, method, internal ) {

                var thingName, thingMethod,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = method
                    }

                    // Go through the things to bind to.
                    for ( thingName in thingObject ) {

                        // Grab the method of the thing.
                        thingMethod = thingObject[ thingName ]

                        // If it was an internal binding, prefix it.
                        if ( internal ) {
                            thingName = '_' + thingName
                        }

                        // Make sure the thing methods collection exists.
                        STATE.methods[ thingName ] = STATE.methods[ thingName ] || []

                        // Add the method to the relative method collection.
                        STATE.methods[ thingName ].push( thingMethod )
                    }
                }

                return P
            }, //on



            /**
             * Unbind events on the things.
             */
            off: function() {
                var i, thingName,
                    names = arguments;
                for ( i = 0, namesCount = names.length; i < namesCount; i += 1 ) {
                    thingName = names[i]
                    if ( thingName in STATE.methods ) {
                        delete STATE.methods[thingName]
                    }
                }
                return P
            },


            /**
             * Fire off method events.
             */
            trigger: function( name, data ) {
                var _trigger = function( name ) {
                    var methodList = STATE.methods[ name ]
                    if ( methodList ) {
                        methodList.map( function( method ) {
                            PickerConstructor._.trigger( method, P, [ data ] )
                        })
                    }
                }
                _trigger( '_' + name )
                _trigger( name )
                return P
            } //trigger
        } //PickerInstance.prototype


    /**
     * Wrap the picker holder components together.
     */
    function createWrappedComponent() {

        // Create a picker wrapper holder
        return PickerConstructor._.node( 'div',

            // Create a picker wrapper node
            PickerConstructor._.node( 'div',

                // Create a picker frame
                PickerConstructor._.node( 'div',

                    // Create a picker box node
                    PickerConstructor._.node( 'div',

                        // Create the components nodes.
                        P.component.nodes( STATE.open ),

                        // The picker box class
                        CLASSES.box
                    ),

                    // Picker wrap class
                    CLASSES.wrap
                ),

                // Picker frame class
                CLASSES.frame
            ),

            // Picker holder class
            CLASSES.holder
        ) //endreturn
    } //createWrappedComponent



    /**
     * Prepare the input element with all bindings.
     */
    function prepareElement() {

        $ELEMENT.

            // Store the picker data by component name.
            data(NAME, P).

            // Add the “input” class name.
            addClass(CLASSES.input).

            // If there’s a `data-value`, update the value of the element.
            val( $ELEMENT.data('value') ?
                P.get('select', SETTINGS.format) :
                ELEMENT.value
            ).

            // On focus/click, open the picker and adjust the root “focused” state.
            on('focus.' + STATE.id + ' click.' + STATE.id, focusToOpen)


        // Only bind keydown events if the element isn’t editable.
        if ( !SETTINGS.editable ) {

            // Handle keyboard event based on the picker being opened or not.
            $ELEMENT.on('keydown.' + STATE.id, function(event) {

                var keycode = event.keyCode,

                    // Check if one of the delete keys was pressed.
                    isKeycodeDelete = /^(8|46)$/.test(keycode)

                // For some reason IE clears the input value on “escape”.
                if ( keycode == 27 ) {
                    P.close()
                    return false
                }

                // Check if `space` or `delete` was pressed or the picker is closed with a key movement.
                if ( keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode] ) {

                    // Prevent it from moving the page and bubbling to doc.
                    event.preventDefault()
                    event.stopPropagation()

                    // If `delete` was pressed, clear the values and close the picker.
                    // Otherwise open the picker.
                    if ( isKeycodeDelete ) { P.clear().close() }
                    else { P.open() }
                }
            })
        }


        // Update the aria attributes.
        aria(ELEMENT, {
            haspopup: true,
            expanded: false,
            readonly: false,
            owns: ELEMENT.id + '_root' + (P._hidden ? ' ' + P._hidden.id : '')
        })
    }


    /**
     * Prepare the root picker element with all bindings.
     */
    function prepareElementRoot() {

        P.$root.

            on({

                // When something within the root is focused, stop from bubbling
                // to the doc and remove the “focused” state from the root.
                focusin: function( event ) {
                    P.$root.removeClass( CLASSES.focused )
                    event.stopPropagation()
                },

                // When something within the root holder is clicked, stop it
                // from bubbling to the doc.
                'mousedown click': function( event ) {

                    var target = event.target

                    // Make sure the target isn’t the root holder so it can bubble up.
                    if ( target != P.$root.children()[ 0 ] ) {

                        event.stopPropagation()

                        // * For mousedown events, cancel the default action in order to
                        //   prevent cases where focus is shifted onto external elements
                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
                        //   Also, for Firefox, don’t prevent action on the `option` element.
                        if ( event.type == 'mousedown' && !$( target ).is( ':input' ) && target.nodeName != 'OPTION' ) {

                            event.preventDefault()

                            // Re-focus onto the element so that users can click away
                            // from elements focused within the picker.
                            ELEMENT.focus()
                        }
                    }
                }
            }).

            // If there’s a click on an actionable element, carry out the actions.
            on( 'click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {

                var $target = $( this ),
                    targetData = $target.data(),
                    targetDisabled = $target.hasClass( CLASSES.navDisabled ) || $target.hasClass( CLASSES.disabled ),

                    // * For IE, non-focusable elements can be active elements as well
                    //   (http://stackoverflow.com/a/2684561).
                    activeElement = document.activeElement
                    activeElement = activeElement && ( activeElement.type || activeElement.href ) && activeElement

                // If it’s disabled or nothing inside is actively focused, re-focus the element.
                if ( targetDisabled || activeElement && !$.contains( P.$root[0], activeElement ) ) {
                    ELEMENT.focus()
                }

                // If something is superficially changed, update the `highlight` based on the `nav`.
                if ( !targetDisabled && targetData.nav ) {
                    P.set( 'highlight', P.component.item.highlight, { nav: targetData.nav } )
                }

                // If something is picked, set `select` then close with focus.
                else if ( !targetDisabled && 'pick' in targetData ) {
                    P.set( 'select', targetData.pick ).close( true )
                }

                // If a “clear” button is pressed, empty the values and close with focus.
                else if ( targetData.clear ) {
                    P.clear().close( true )
                }

                else if ( targetData.close ) {
                    P.close( true )
                }

            }) //P.$root

        aria( P.$root[0], 'hidden', true )
    }


     /**
      * Prepare the hidden input element along with all bindings.
      */
    function prepareElementHidden() {

        var name

        if ( SETTINGS.hiddenName === true ) {
            name = ELEMENT.name
            ELEMENT.name = ''
        }
        else {
            name = [
                typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '',
                typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'
            ]
            name = name[0] + ELEMENT.name + name[1]
        }

        P._hidden = $(
            '<input ' +
            'type=hidden ' +

            // Create the name using the original input’s with a prefix and suffix.
            'name="' + name + '"' +

            // If the element has a value, set the hidden value as well.
            (
                $ELEMENT.data('value') || ELEMENT.value ?
                    ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' :
                    ''
            ) +
            '>'
        )[0]

        $ELEMENT.

            // If the value changes, update the hidden input with the correct format.
            on('change.' + STATE.id, function() {
                P._hidden.value = ELEMENT.value ?
                    P.get('select', SETTINGS.formatSubmit) :
                    ''
            }).

            // Insert the hidden input after the element.
            after(P._hidden)
    }


    // Separated for IE
    function focusToOpen( event ) {

        // Stop the event from propagating to the doc.
        event.stopPropagation()

        // If it’s a focus event, add the “focused” class to the root.
        if ( event.type == 'focus' ) {
            P.$root.addClass( CLASSES.focused )
        }

        // And then finally open the picker.
        P.open()
    }


    // Return a new picker instance.
    return new PickerInstance()
} //PickerConstructor



/**
 * The default classes and prefix to use for the HTML classes.
 */
PickerConstructor.klasses = function( prefix ) {
    prefix = prefix || 'picker'
    return {

        picker: prefix,
        opened: prefix + '--opened',
        focused: prefix + '--focused',

        input: prefix + '__input',
        active: prefix + '__input--active',

        holder: prefix + '__holder',

        frame: prefix + '__frame',
        wrap: prefix + '__wrap',

        box: prefix + '__box'
    }
} //PickerConstructor.klasses



/**
 * Check if the default theme is being used.
 */
function isUsingDefaultTheme( element ) {

    var theme,
        prop = 'position'

    // For IE.
    if ( element.currentStyle ) {
        theme = element.currentStyle[prop]
    }

    // For normal browsers.
    else if ( window.getComputedStyle ) {
        theme = getComputedStyle( element )[prop]
    }

    return theme == 'fixed'
}



/**
 * Get the width of the browser’s scrollbar.
 * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js
 */
function getScrollbarWidth() {

    if ( $html.height() <= $window.height() ) {
        return 0
    }

    var $outer = $( '<div style="visibility:hidden;width:100px" />' ).
        appendTo( 'body' )

    // Get the width without scrollbars.
    var widthWithoutScroll = $outer[0].offsetWidth

    // Force adding scrollbars.
    $outer.css( 'overflow', 'scroll' )

    // Add the inner div.
    var $inner = $( '<div style="width:100%" />' ).appendTo( $outer )

    // Get the width with scrollbars.
    var widthWithScroll = $inner[0].offsetWidth

    // Remove the divs.
    $outer.remove()

    // Return the difference between the widths.
    return widthWithoutScroll - widthWithScroll
}



/**
 * PickerConstructor helper methods.
 */
PickerConstructor._ = {

    /**
     * Create a group of nodes. Expects:
     * `
        {
            min:    {Integer},
            max:    {Integer},
            i:      {Integer},
            node:   {String},
            item:   {Function}
        }
     * `
     */
    group: function( groupObject ) {

        var
            // Scope for the looped object
            loopObjectScope,

            // Create the nodes list
            nodesList = '',

            // The counter starts from the `min`
            counter = PickerConstructor._.trigger( groupObject.min, groupObject )


        // Loop from the `min` to `max`, incrementing by `i`
        for ( ; counter <= PickerConstructor._.trigger( groupObject.max, groupObject, [ counter ] ); counter += groupObject.i ) {

            // Trigger the `item` function within scope of the object
            loopObjectScope = PickerConstructor._.trigger( groupObject.item, groupObject, [ counter ] )

            // Splice the subgroup and create nodes out of the sub nodes
            nodesList += PickerConstructor._.node(
                groupObject.node,
                loopObjectScope[ 0 ],   // the node
                loopObjectScope[ 1 ],   // the classes
                loopObjectScope[ 2 ]    // the attributes
            )
        }

        // Return the list of nodes
        return nodesList
    }, //group


    /**
     * Create a dom node string
     */
    node: function( wrapper, item, klass, attribute ) {

        // If the item is false-y, just return an empty string
        if ( !item ) return ''

        // If the item is an array, do a join
        item = $.isArray( item ) ? item.join( '' ) : item

        // Check for the class
        klass = klass ? ' class="' + klass + '"' : ''

        // Check for any attributes
        attribute = attribute ? ' ' + attribute : ''

        // Return the wrapped item
        return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'
    }, //node


    /**
     * Lead numbers below 10 with a zero.
     */
    lead: function( number ) {
        return ( number < 10 ? '0': '' ) + number
    },


    /**
     * Trigger a function otherwise return the value.
     */
    trigger: function( callback, scope, args ) {
        return typeof callback == 'function' ? callback.apply( scope, args || [] ) : callback
    },


    /**
     * If the second character is a digit, length is 2 otherwise 1.
     */
    digits: function( string ) {
        return ( /\d/ ).test( string[ 1 ] ) ? 2 : 1
    },


    /**
     * Tell if something is a date object.
     */
    isDate: function( value ) {
        return {}.toString.call( value ).indexOf( 'Date' ) > -1 && this.isInteger( value.getUTCDate() )
    },


    /**
     * Tell if something is an integer.
     */
    isInteger: function( value ) {
        return {}.toString.call( value ).indexOf( 'Number' ) > -1 && value % 1 === 0
    },


    /**
     * Create ARIA attribute strings.
     */
    ariaAttr: ariaAttr
} //PickerConstructor._



/**
 * Extend the picker with a component and defaults.
 */
PickerConstructor.extend = function( name, Component ) {

    // Extend jQuery.
    $.fn[ name ] = function( options, action ) {

        // Grab the component data.
        var componentData = this.data( name )

        // If the picker is requested, return the data object.
        if ( options == 'picker' ) {
            return componentData
        }

        // If the component data exists and `options` is a string, carry out the action.
        if ( componentData && typeof options == 'string' ) {
            return PickerConstructor._.trigger( componentData[ options ], componentData, [ action ] )
        }

        // Otherwise go through each matched element and if the component
        // doesn’t exist, create a new picker using `this` element
        // and merging the defaults and options with a deep copy.
        return this.each( function() {
            var $this = $( this )
            if ( !$this.data( name ) ) {
                new PickerConstructor( this, name, Component, options )
            }
        })
    }

    // Set the defaults.
    $.fn[ name ].defaults = Component.defaults
} //PickerConstructor.extend



function aria(element, attribute, value) {
    if ( $.isPlainObject(attribute) ) {
        for ( var key in attribute ) {
            ariaSet(element, key, attribute[key])
        }
    }
    else {
        ariaSet(element, attribute, value)
    }
}
function ariaSet(element, attribute, value) {
    element.setAttribute(
        (attribute == 'role' ? '' : 'aria-') + attribute,
        value
    )
}
function ariaAttr(attribute, data) {
    if ( !$.isPlainObject(attribute) ) {
        attribute = { attribute: data }
    }
    data = ''
    for ( var key in attribute ) {
        var attr = (key == 'role' ? '' : 'aria-') + key,
            attrVal = attribute[key]
        data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'
    }
    return data
}



// Expose the picker constructor.
return PickerConstructor


}));





/*!
 * Date picker for pickadate.js v3.5.4
 * http://amsul.github.io/pickadate.js/date.htm
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( ['picker','jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('./picker.js'), require('jquery') )

    // Browser globals.
    else factory( Picker, jQuery )

}(function( Picker, $ ) {


/**
 * Globals and constants
 */
var DAYS_IN_WEEK = 7,
    WEEKS_IN_CALENDAR = 6,
    _ = Picker._



/**
 * The date picker constructor
 */
function DatePicker( picker, settings ) {

    var calendar = this,
        element = picker.$node[ 0 ],
        elementValue = element.value,
        elementDataValue = picker.$node.data( 'value' ),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format,
        isRTL = function() {

            return element.currentStyle ?

                // For IE.
                element.currentStyle.direction == 'rtl' :

                // For normal browsers.
                getComputedStyle( picker.$root[0] ).direction == 'rtl'
        }

    calendar.settings = settings
    calendar.$node = picker.$node

    // The queue of methods that will be used to build item objects.
    calendar.queue = {
        min: 'measure create',
        max: 'measure create',
        now: 'now create',
        select: 'parse create validate',
        highlight: 'parse navigate create validate',
        view: 'parse create validate viewset',
        disable: 'deactivate',
        enable: 'activate'
    }

    // The component's item object.
    calendar.item = {}

    calendar.item.clear = null
    calendar.item.disable = ( settings.disable || [] ).slice( 0 )
    calendar.item.enable = -(function( collectionDisabled ) {
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1
    })( calendar.item.disable )

    calendar.
        set( 'min', settings.min ).
        set( 'max', settings.max ).
        set( 'now' )

    // When there’s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.
    if ( valueString ) {
        calendar.set( 'select', valueString, { format: formatString })
    }

    // If there’s no value, default to highlighting “today”.
    else {
        calendar.
            set( 'select', null ).
            set( 'highlight', calendar.item.now )
    }


    // The keycode to movement mapping.
    calendar.key = {
        40: 7, // Down
        38: -7, // Up
        39: function() { return isRTL() ? -1 : 1 }, // Right
        37: function() { return isRTL() ? 1 : -1 }, // Left
        go: function( timeChange ) {
            var highlightedObject = calendar.item.highlight,
                targetDate = new Date( Date.UTC(highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange) )
            calendar.set(
                'highlight',
                targetDate,
                { interval: timeChange }
            )
            this.render()
        }
    }


    // Bind some picker events.
    picker.
        on( 'render', function() {
            picker.$root.find( '.' + settings.klass.selectMonth ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ picker.get( 'view' ).year, value, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectMonth ).trigger( 'focus' )
                }
            })
            picker.$root.find( '.' + settings.klass.selectYear ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ value, picker.get( 'view' ).month, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectYear ).trigger( 'focus' )
                }
            })
        }, 1 ).
        on( 'open', function() {
            var includeToday = ''
            if ( calendar.disabled( calendar.get('now') ) ) {
                includeToday = ':not(.' + settings.klass.buttonToday + ')'
            }
            picker.$root.find( 'button' + includeToday + ', select' ).attr( 'disabled', false )
        }, 1 ).
        on( 'close', function() {
            picker.$root.find( 'button, select' ).attr( 'disabled', true )
        }, 1 )

} //DatePicker


/**
 * Set a datepicker item object.
 */
DatePicker.prototype.set = function( type, value, options ) {

    var calendar = this,
        calendarItem = calendar.item

    // If the value is `null` just set it immediately.
    if ( value === null ) {
        if ( type == 'clear' ) type = 'select'
        calendarItem[ type ] = value
        return calendar
    }

    // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.
    calendarItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = calendar.queue[ type ].split( ' ' ).map( function( method ) {
        value = calendar[ method ]( type, value, options )
        return value
    }).pop()

    // Check if we need to cascade through more updates.
    if ( type == 'select' ) {
        calendar.set( 'highlight', calendarItem.select, options )
    }
    else if ( type == 'highlight' ) {
        calendar.set( 'view', calendarItem.highlight, options )
    }
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {
        if ( calendarItem.select && calendar.disabled( calendarItem.select ) ) {
            calendar.set( 'select', calendarItem.select, options )
        }
        if ( calendarItem.highlight && calendar.disabled( calendarItem.highlight ) ) {
            calendar.set( 'highlight', calendarItem.highlight, options )
        }
    }

    return calendar
} //DatePicker.prototype.set


/**
 * Get a datepicker item object.
 */
DatePicker.prototype.get = function( type ) {
    return this.item[ type ]
} //DatePicker.prototype.get


/**
 * Create a picker date object.
 */
DatePicker.prototype.create = function( type, value, options ) {

    var isInfiniteValue,
        calendar = this

    // If there’s no value, use the type as the value.
    value = value === undefined ? type : value


    // If it’s infinity, update the value.
    if ( value == -Infinity || value == Infinity ) {
        isInfiniteValue = value
    }

    // If it’s an object, use the native date object.
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = value.obj
    }

    // If it’s an array, convert it into a date and make sure
    // that it’s a valid date – otherwise default to today.
    else if ( $.isArray( value ) ) {
        value = new Date(Date.UTC(value[ 0 ], value[ 1 ], value[ 2 ] ))
        value = _.isDate( value ) ? value : calendar.create().obj
    }

    // If it’s a number, make a normalized date.
    else if ( _.isInteger( value ) ) {
        value = calendar.normalize( new Date( value ), options )
    }

    // If it’s a date object, make a normalized date.
    else if ( _.isDate( value ) ) {
        value = calendar.normalize( value, options )
    }

    // If it’s a literal true or any other case, set it to now.
    else /*if ( value === true )*/ {
        value = calendar.now( type, value, options )
    }

    // Return the compiled object.
    return {
        year: isInfiniteValue || value.getUTCFullYear(),
        month: isInfiniteValue || value.getUTCMonth(),
        date: isInfiniteValue || value.getUTCDate(),
        day: isInfiniteValue || value.getUTCDay(),
        obj: isInfiniteValue || value,
        pick: isInfiniteValue || value.getTime()
    }
} //DatePicker.prototype.create


/**
 * Create a range limit object using an array, date object,
 * literal “true”, or integer relative to another time.
 */
DatePicker.prototype.createRange = function( from, to ) {

    var calendar = this,
        createDate = function( date ) {
            if ( date === true || $.isArray( date ) || _.isDate( date ) ) {
                return calendar.create( date )
            }
            return date
        }

    // Create objects if possible.
    if ( !_.isInteger( from ) ) {
        from = createDate( from )
    }
    if ( !_.isInteger( to ) ) {
        to = createDate( to )
    }

    // Create relative dates.
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {
        from = [ to.year, to.month, to.date + from ];
    }
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {
        to = [ from.year, from.month, from.date + to ];
    }

    return {
        from: createDate( from ),
        to: createDate( to )
    }
} //DatePicker.prototype.createRange


/**
 * Check if a date unit falls within a date range object.
 */
DatePicker.prototype.withinRange = function( range, dateUnit ) {
    range = this.createRange(range.from, range.to)
    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick
}


/**
 * Check if two date range objects overlap.
 */
DatePicker.prototype.overlapRanges = function( one, two ) {

    var calendar = this

    // Convert the ranges into comparable dates.
    one = calendar.createRange( one.from, one.to )
    two = calendar.createRange( two.from, two.to )

    return calendar.withinRange( one, two.from ) || calendar.withinRange( one, two.to ) ||
        calendar.withinRange( two, one.from ) || calendar.withinRange( two, one.to )
}


/**
 * Get the date today.
 */
DatePicker.prototype.now = function( type, value, options ) {
    value = new Date()
    if ( options && options.rel ) {
        value.setUTCDate( value.getUTCDate() + options.rel )
    }
    return this.normalize( value, options )
}


/**
 * Navigate to next/prev month.
 */
DatePicker.prototype.navigate = function( type, value, options ) {

    var targetDateObject,
        targetYear,
        targetMonth,
        targetDate,
        isTargetArray = $.isArray( value ),
        isTargetObject = $.isPlainObject( value ),
        viewsetObject = this.item.view/*,
        safety = 100*/


    if ( isTargetArray || isTargetObject ) {

        if ( isTargetObject ) {
            targetYear = value.year
            targetMonth = value.month
            targetDate = value.date
        }
        else {
            targetYear = +value[0]
            targetMonth = +value[1]
            targetDate = +value[2]
        }

        // If we’re navigating months but the view is in a different
        // month, navigate to the view’s year and month.
        if ( options && options.nav && viewsetObject && viewsetObject.month !== targetMonth ) {
            targetYear = viewsetObject.year
            targetMonth = viewsetObject.month
        }

        // Figure out the expected target year and month.
        targetDateObject = new Date( Date.UTC( targetYear, targetMonth + ( options && options.nav ? options.nav : 0 ), 1 ) )
        targetYear = targetDateObject.getUTCFullYear()
        targetMonth = targetDateObject.getUTCMonth()

        // If the month we’re going to doesn’t have enough days,
        // keep decreasing the date until we reach the month’s last date.
        while ( /*safety &&*/ new Date( Date.UTC( targetYear, targetMonth, targetDate ) ).getUTCMonth() !== targetMonth ) {
            targetDate -= 1
            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
            }*/
        }

        value = [ targetYear, targetMonth, targetDate ]
    }

    return value
} //DatePicker.prototype.navigate


/**
 * Normalize a date by setting the hours to midnight.
 */
DatePicker.prototype.normalize = function( value/*, options*/ ) {
    value.setUTCHours( 0, 0, 0, 0 )
    return value
}


/**
 * Measure the range of dates.
 */
DatePicker.prototype.measure = function( type, value/*, options*/ ) {

    var calendar = this

    // If it’s anything false-y, remove the limits.
    if ( !value ) {
        value = type == 'min' ? -Infinity : Infinity
    }

    // If it’s a string, parse it.
    else if ( typeof value == 'string' ) {
        value = calendar.parse( type, value )
    }

    // If it's an integer, get a date relative to today.
    else if ( _.isInteger( value ) ) {
        value = calendar.now( type, value, { rel: value } )
    }

    return value
} ///DatePicker.prototype.measure


/**
 * Create a viewset object based on navigation.
 */
DatePicker.prototype.viewset = function( type, dateObject/*, options*/ ) {
    return this.create([ dateObject.year, dateObject.month, 1 ])
}


/**
 * Validate a date as enabled and shift if needed.
 */
DatePicker.prototype.validate = function( type, dateObject, options ) {

    var calendar = this,

        // Keep a reference to the original date.
        originalDateObject = dateObject,

        // Make sure we have an interval.
        interval = options && options.interval ? options.interval : 1,

        // Check if the calendar enabled dates are inverted.
        isFlippedBase = calendar.item.enable === -1,

        // Check if we have any enabled dates after/before now.
        hasEnabledBeforeTarget, hasEnabledAfterTarget,

        // The min & max limits.
        minLimitObject = calendar.item.min,
        maxLimitObject = calendar.item.max,

        // Check if we’ve reached the limit during shifting.
        reachedMin, reachedMax,

        // Check if the calendar is inverted and at least one weekday is enabled.
        hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter( function( value ) {

            // If there’s a date, check where it is relative to the target.
            if ( $.isArray( value ) ) {
                var dateTime = calendar.create( value ).pick
                if ( dateTime < dateObject.pick ) hasEnabledBeforeTarget = true
                else if ( dateTime > dateObject.pick ) hasEnabledAfterTarget = true
            }

            // Return only integers for enabled weekdays.
            return _.isInteger( value )
        }).length/*,

        safety = 100*/



    // Cases to validate for:
    // [1] Not inverted and date disabled.
    // [2] Inverted and some dates enabled.
    // [3] Not inverted and out of range.
    //
    // Cases to **not** validate for:
    // • Navigating months.
    // • Not inverted and date enabled.
    // • Inverted and all dates disabled.
    // • ..and anything else.
    if ( !options || !options.nav ) if (
        /* 1 */ ( !isFlippedBase && calendar.disabled( dateObject ) ) ||
        /* 2 */ ( isFlippedBase && calendar.disabled( dateObject ) && ( hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget ) ) ||
        /* 3 */ ( !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick) )
    ) {


        // When inverted, flip the direction if there aren’t any enabled weekdays
        // and there are no enabled dates in the direction of the interval.
        if ( isFlippedBase && !hasEnabledWeekdays && ( ( !hasEnabledAfterTarget && interval > 0 ) || ( !hasEnabledBeforeTarget && interval < 0 ) ) ) {
            interval *= -1
        }


        // Keep looping until we reach an enabled date.
        while ( /*safety &&*/ calendar.disabled( dateObject ) ) {

            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'
            }*/


            // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
            if ( Math.abs( interval ) > 1 && ( dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month ) ) {
                dateObject = originalDateObject
                interval = interval > 0 ? 1 : -1
            }


            // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
            if ( dateObject.pick <= minLimitObject.pick ) {
                reachedMin = true
                interval = 1
                dateObject = calendar.create([
                    minLimitObject.year,
                    minLimitObject.month,
                    minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)
                ])
            }
            else if ( dateObject.pick >= maxLimitObject.pick ) {
                reachedMax = true
                interval = -1
                dateObject = calendar.create([
                    maxLimitObject.year,
                    maxLimitObject.month,
                    maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)
                ])
            }


            // If we’ve reached both limits, just break out of the loop.
            if ( reachedMin && reachedMax ) {
                break
            }


            // Finally, create the shifted date using the interval and keep looping.
            dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ])
        }

    } //endif


    // Return the date object settled on.
    return dateObject
} //DatePicker.prototype.validate


/**
 * Check if a date is disabled.
 */
DatePicker.prototype.disabled = function( dateToVerify ) {

    var
        calendar = this,

        // Filter through the disabled dates to check if this is one.
        isDisabledMatch = calendar.item.disable.filter( function( dateToDisable ) {

            // If the date is a number, match the weekday with 0index and `firstDay` check.
            if ( _.isInteger( dateToDisable ) ) {
                return dateToVerify.day === ( calendar.settings.firstDay ? dateToDisable : dateToDisable - 1 ) % 7
            }

            // If it’s an array or a native JS date, create and match the exact date.
            if ( $.isArray( dateToDisable ) || _.isDate( dateToDisable ) ) {
                return dateToVerify.pick === calendar.create( dateToDisable ).pick
            }

            // If it’s an object, match a date within the “from” and “to” range.
            if ( $.isPlainObject( dateToDisable ) ) {
                return calendar.withinRange( dateToDisable, dateToVerify )
            }
        })

    // If this date matches a disabled date, confirm it’s not inverted.
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( dateToDisable ) {
        return $.isArray( dateToDisable ) && dateToDisable[3] == 'inverted' ||
            $.isPlainObject( dateToDisable ) && dateToDisable.inverted
    }).length

    // Check the calendar “enabled” flag and respectively flip the
    // disabled state. Then also check if it’s beyond the min/max limits.
    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||
        dateToVerify.pick < calendar.item.min.pick ||
        dateToVerify.pick > calendar.item.max.pick

} //DatePicker.prototype.disabled


/**
 * Parse a string into a usable type.
 */
DatePicker.prototype.parse = function( type, value, options ) {

    var calendar = this,
        parsingObject = {}

    // If it’s already parsed, we’re good.
    if ( !value || typeof value != 'string' ) {
        return value
    }

    // We need a `.format` to parse the value with.
    if ( !( options && options.format ) ) {
        options = options || {}
        options.format = calendar.settings.format
    }

    // Convert the format into an array and then map through it.
    calendar.formats.toArray( options.format ).map( function( label ) {

        var
            // Grab the formatting label.
            formattingLabel = calendar.formats[ label ],

            // The format length is from the formatting label function or the
            // label length without the escaping exclamation (!) mark.
            formatLength = formattingLabel ? _.trigger( formattingLabel, calendar, [ value, parsingObject ] ) : label.replace( /^!/, '' ).length

        // If there's a format label, split the value up to the format length.
        // Then add it to the parsing object with appropriate label.
        if ( formattingLabel ) {
            parsingObject[ label ] = value.substr( 0, formatLength )
        }

        // Update the value as the substring from format length to end.
        value = value.substr( formatLength )
    })

    // Compensate for month 0index.
    return [
        parsingObject.yyyy || parsingObject.yy,
        +( parsingObject.mm || parsingObject.m ) - 1,
        parsingObject.dd || parsingObject.d
    ]
} //DatePicker.prototype.parse


/**
 * Various formats to display the object in.
 */
DatePicker.prototype.formats = (function() {

    // Return the length of the first word in a collection.
    function getWordLengthFromCollection( string, collection, dateObject ) {

        // Grab the first word from the string.
        var word = string.match( /\w+/ )[ 0 ]

        // If there's no month index, add it to the date object
        if ( !dateObject.mm && !dateObject.m ) {
            dateObject.m = collection.indexOf( word ) + 1
        }

        // Return the length of the word.
        return word.length
    }

    // Get the length of the first word in a string.
    function getFirstWordLength( string ) {
        return string.match( /\w+/ )[ 0 ].length
    }

    return {

        d: function( string, dateObject ) {

            // If there's string, then get the digits length.
            // Otherwise return the selected date.
            return string ? _.digits( string ) : dateObject.date
        },
        dd: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected date with a leading zero.
            return string ? 2 : _.lead( dateObject.date )
        },
        ddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the short selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysShort[ dateObject.day ]
        },
        dddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the full selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysFull[ dateObject.day ]
        },
        m: function( string, dateObject ) {

            // If there's a string, then get the length of the digits
            // Otherwise return the selected month with 0index compensation.
            return string ? _.digits( string ) : dateObject.month + 1
        },
        mm: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected month with 0index and leading zero.
            return string ? 2 : _.lead( dateObject.month + 1 )
        },
        mmm: function( string, dateObject ) {

            var collection = this.settings.monthsShort

            // If there's a string, get length of the relevant month from the short
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        mmmm: function( string, dateObject ) {

            var collection = this.settings.monthsFull

            // If there's a string, get length of the relevant month from the full
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        yy: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected year by slicing out the first 2 digits.
            return string ? 2 : ( '' + dateObject.year ).slice( 2 )
        },
        yyyy: function( string, dateObject ) {

            // If there's a string, then the length is always 4.
            // Otherwise return the selected year.
            return string ? 4 : dateObject.year
        },

        // Create an array by splitting the formatting string passed.
        toArray: function( formatString ) { return formatString.split( /(d{1,4}|m{1,4}|y{4}|yy|!.)/g ) },

        // Format an object into a string using the formatting options.
        toString: function ( formatString, itemObject ) {
            var calendar = this
            return calendar.formats.toArray( formatString ).map( function( label ) {
                return _.trigger( calendar.formats[ label ], calendar, [ 0, itemObject ] ) || label.replace( /^!/, '' )
            }).join( '' )
        }
    }
})() //DatePicker.prototype.formats




/**
 * Check if two date units are the exact.
 */
DatePicker.prototype.isDateExact = function( one, two ) {

    var calendar = this

    // When we’re working with weekdays, do a direct comparison.
    if (
        ( _.isInteger( one ) && _.isInteger( two ) ) ||
        ( typeof one == 'boolean' && typeof two == 'boolean' )
     ) {
        return one === two
    }

    // When we’re working with date representations, compare the “pick” value.
    if (
        ( _.isDate( one ) || $.isArray( one ) ) &&
        ( _.isDate( two ) || $.isArray( two ) )
    ) {
        return calendar.create( one ).pick === calendar.create( two ).pick
    }

    // When we’re working with range objects, compare the “from” and “to”.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.isDateExact( one.from, two.from ) && calendar.isDateExact( one.to, two.to )
    }

    return false
}


/**
 * Check if two date units overlap.
 */
DatePicker.prototype.isDateOverlap = function( one, two ) {

    var calendar = this,
        firstDay = calendar.settings.firstDay ? 1 : 0

    // When we’re working with a weekday index, compare the days.
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {
        one = one % 7 + firstDay
        return one === calendar.create( two ).day + 1
    }
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {
        two = two % 7 + firstDay
        return two === calendar.create( one ).day + 1
    }

    // When we’re working with range objects, check if the ranges overlap.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.overlapRanges( one, two )
    }

    return false
}


/**
 * Flip the “enabled” state.
 */
DatePicker.prototype.flipEnable = function(val) {
    var itemObject = this.item
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
}


/**
 * Mark a collection of dates as “disabled”.
 */
DatePicker.prototype.deactivate = function( type, datesToDisable ) {

    var calendar = this,
        disabledItems = calendar.item.disable.slice(0)


    // If we’re flipping, that’s all we need to do.
    if ( datesToDisable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToDisable === false ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToDisable === true ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the dates to disable.
    else {

        datesToDisable.map(function( unitToDisable ) {

            var matchFound

            // When we have disabled items, check for matches.
            // If something is matched, immediately break out.
            for ( var index = 0; index < disabledItems.length; index += 1 ) {
                if ( calendar.isDateExact( unitToDisable, disabledItems[index] ) ) {
                    matchFound = true
                    break
                }
            }

            // If nothing was found, add the validated unit to the collection.
            if ( !matchFound ) {
                if (
                    _.isInteger( unitToDisable ) ||
                    _.isDate( unitToDisable ) ||
                    $.isArray( unitToDisable ) ||
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )
                ) {
                    disabledItems.push( unitToDisable )
                }
            }
        })
    }

    // Return the updated collection.
    return disabledItems
} //DatePicker.prototype.deactivate


/**
 * Mark a collection of dates as “enabled”.
 */
DatePicker.prototype.activate = function( type, datesToEnable ) {

    var calendar = this,
        disabledItems = calendar.item.disable,
        disabledItemsCount = disabledItems.length

    // If we’re flipping, that’s all we need to do.
    if ( datesToEnable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToEnable === true ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToEnable === false ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the disabled dates.
    else {

        datesToEnable.map(function( unitToEnable ) {

            var matchFound,
                disabledUnit,
                index,
                isExactRange

            // Go through the disabled items and try to find a match.
            for ( index = 0; index < disabledItemsCount; index += 1 ) {

                disabledUnit = disabledItems[index]

                // When an exact match is found, remove it from the collection.
                if ( calendar.isDateExact( disabledUnit, unitToEnable ) ) {
                    matchFound = disabledItems[index] = null
                    isExactRange = true
                    break
                }

                // When an overlapped match is found, add the “inverted” state to it.
                else if ( calendar.isDateOverlap( disabledUnit, unitToEnable ) ) {
                    if ( $.isPlainObject( unitToEnable ) ) {
                        unitToEnable.inverted = true
                        matchFound = unitToEnable
                    }
                    else if ( $.isArray( unitToEnable ) ) {
                        matchFound = unitToEnable
                        if ( !matchFound[3] ) matchFound.push( 'inverted' )
                    }
                    else if ( _.isDate( unitToEnable ) ) {
                        matchFound = [ unitToEnable.getUTCFullYear(), unitToEnable.getUTCMonth(), unitToEnable.getUTCDate(), 'inverted' ]
                    }
                    break
                }
            }

            // If a match was found, remove a previous duplicate entry.
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateExact( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // In the event that we’re dealing with an exact range of dates,
            // make sure there are no “inverted” dates because of it.
            if ( isExactRange ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateOverlap( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // If something is still matched, add it into the collection.
            if ( matchFound ) {
                disabledItems.push( matchFound )
            }
        })
    }

    // Return the updated collection.
    return disabledItems.filter(function( val ) { return val != null })
} //DatePicker.prototype.activate


/**
 * Create a string for the nodes in the picker.
 */
DatePicker.prototype.nodes = function( isOpen ) {

    var
        calendar = this,
        settings = calendar.settings,
        calendarItem = calendar.item,
        nowObject = calendarItem.now,
        selectedObject = calendarItem.select,
        highlightedObject = calendarItem.highlight,
        viewsetObject = calendarItem.view,
        disabledCollection = calendarItem.disable,
        minLimitObject = calendarItem.min,
        maxLimitObject = calendarItem.max,


        // Create the calendar table head using a copy of weekday labels collection.
        // * We do a copy so we don't mutate the original array.
        tableHead = (function( collection, fullCollection ) {

            // If the first day should be Monday, move Sunday to the end.
            if ( settings.firstDay ) {
                collection.push( collection.shift() )
                fullCollection.push( fullCollection.shift() )
            }

            // Create and return the table head group.
            return _.node(
                'thead',
                _.node(
                    'tr',
                    _.group({
                        min: 0,
                        max: DAYS_IN_WEEK - 1,
                        i: 1,
                        node: 'th',
                        item: function( counter ) {
                            return [
                                collection[ counter ],
                                settings.klass.weekdays,
                                'scope=col title="' + fullCollection[ counter ] + '"'
                            ]
                        }
                    })
                )
            ) //endreturn
        })( ( settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysShort ).slice( 0 ), settings.weekdaysFull.slice( 0 ) ), //tableHead


        // Create the nav for next/prev month.
        createMonthNav = function( next ) {

            // Otherwise, return the created month tag.
            return _.node(
                'div',
                ' ',
                settings.klass[ 'nav' + ( next ? 'Next' : 'Prev' ) ] + (

                    // If the focused month is outside the range, disabled the button.
                    ( next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month ) ||
                    ( !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ) ?
                    ' ' + settings.klass.navDisabled : ''
                ),
                'data-nav=' + ( next || -1 ) + ' ' +
                _.ariaAttr({
                    role: 'button',
                    controls: calendar.$node[0].id + '_table'
                }) + ' ' +
                'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev ) + '"'
            ) //endreturn
        }, //createMonthNav


        // Create the month label.
        createMonthLabel = function() {

            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull

            // If there are months to select, add a dropdown menu.
            if ( settings.selectMonths ) {

                return _.node( 'select',
                    _.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: 'option',
                        item: function( loopedMonth ) {

                            return [

                                // The looped month and no classes.
                                monthsCollection[ loopedMonth ], 0,

                                // Set the value and selected index.
                                'value=' + loopedMonth +
                                ( viewsetObject.month == loopedMonth ? ' selected' : '' ) +
                                (
                                    (
                                        ( viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month ) ||
                                        ( viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month )
                                    ) ?
                                    ' disabled' : ''
                                )
                            ]
                        }
                    }),
                    settings.klass.selectMonth,
                    ( isOpen ? '' : 'disabled' ) + ' ' +
                    _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelMonthSelect + '"'
                )
            }

            // If there's a need for a month selector
            return _.node( 'div', monthsCollection[ viewsetObject.month ], settings.klass.month )
        }, //createMonthLabel


        // Create the year label.
        createYearLabel = function() {

            var focusedYear = viewsetObject.year,

            // If years selector is set to a literal "true", set it to 5. Otherwise
            // divide in half to get half before and half after focused year.
            numberYears = settings.selectYears === true ? 5 : ~~( settings.selectYears / 2 )

            // If there are years to select, add a dropdown menu.
            if ( numberYears ) {

                var
                    minYear = minLimitObject.year,
                    maxYear = maxLimitObject.year,
                    lowestYear = focusedYear - numberYears,
                    highestYear = focusedYear + numberYears

                // If the min year is greater than the lowest year, increase the highest year
                // by the difference and set the lowest year to the min year.
                if ( minYear > lowestYear ) {
                    highestYear += minYear - lowestYear
                    lowestYear = minYear
                }

                // If the max year is less than the highest year, decrease the lowest year
                // by the lower of the two: available and needed years. Then set the
                // highest year to the max year.
                if ( maxYear < highestYear ) {

                    var availableYears = lowestYear - minYear,
                        neededYears = highestYear - maxYear

                    lowestYear -= availableYears > neededYears ? neededYears : availableYears
                    highestYear = maxYear
                }

                return _.node( 'select',
                    _.group({
                        min: lowestYear,
                        max: highestYear,
                        i: 1,
                        node: 'option',
                        item: function( loopedYear ) {
                            return [

                                // The looped year and no classes.
                                loopedYear, 0,

                                // Set the value and selected index.
                                'value=' + loopedYear + ( focusedYear == loopedYear ? ' selected' : '' )
                            ]
                        }
                    }),
                    settings.klass.selectYear,
                    ( isOpen ? '' : 'disabled' ) + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelYearSelect + '"'
                )
            }

            // Otherwise just return the year focused
            return _.node( 'div', focusedYear, settings.klass.year )
        } //createYearLabel


    // Create and return the entire calendar.
    return _.node(
        'div',
        ( settings.selectYears ? createYearLabel() + createMonthLabel() : createMonthLabel() + createYearLabel() ) +
        createMonthNav() + createMonthNav( 1 ),
        settings.klass.header
    ) + _.node(
        'table',
        tableHead +
        _.node(
            'tbody',
            _.group({
                min: 0,
                max: WEEKS_IN_CALENDAR - 1,
                i: 1,
                node: 'tr',
                item: function( rowCounter ) {

                    // If Monday is the first day and the month starts on Sunday, shift the date back a week.
                    var shiftDateBy = settings.firstDay && calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day === 0 ? -7 : 0

                    return [
                        _.group({
                            min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
                            max: function() {
                                return this.min + DAYS_IN_WEEK - 1
                            },
                            i: 1,
                            node: 'td',
                            item: function( targetDate ) {

                                // Convert the time date from a relative date to a target date.
                                targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + ( settings.firstDay ? 1 : 0 ) ])

                                var isSelected = selectedObject && selectedObject.pick == targetDate.pick,
                                    isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,
                                    isDisabled = disabledCollection && calendar.disabled( targetDate ) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick

                                return [
                                    _.node(
                                        'div',
                                        targetDate.date,
                                        (function( klasses ) {

                                            // Add the `infocus` or `outfocus` classes based on month in view.
                                            klasses.push( viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus )

                                            // Add the `today` class if needed.
                                            if ( nowObject.pick == targetDate.pick ) {
                                                klasses.push( settings.klass.now )
                                            }

                                            // Add the `selected` class if something's selected and the time matches.
                                            if ( isSelected ) {
                                                klasses.push( settings.klass.selected )
                                            }

                                            // Add the `highlighted` class if something's highlighted and the time matches.
                                            if ( isHighlighted ) {
                                                klasses.push( settings.klass.highlighted )
                                            }

                                            // Add the `disabled` class if something's disabled and the object matches.
                                            if ( isDisabled ) {
                                                klasses.push( settings.klass.disabled )
                                            }

                                            return klasses.join( ' ' )
                                        })([ settings.klass.day ]),
                                        'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({
                                            role: 'gridcell',
                                            selected: isSelected && calendar.$node.val() === _.trigger(
                                                    calendar.formats.toString,
                                                    calendar,
                                                    [ settings.format, targetDate ]
                                                ) ? true : null,
                                            activedescendant: isHighlighted ? true : null,
                                            disabled: isDisabled ? true : null
                                        })
                                    ),
                                    '',
                                    _.ariaAttr({ role: 'presentation' })
                                ] //endreturn
                            }
                        })
                    ] //endreturn
                }
            })
        ),
        settings.klass.table,
        'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
            role: 'grid',
            controls: calendar.$node[0].id,
            readonly: true
        })
    ) +

    // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.
    _.node(
        'div',
        _.node( 'button', settings.today, settings.klass.buttonToday,
            'type=button data-pick=' + nowObject.pick +
            ( isOpen && !calendar.disabled(nowObject) ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node( 'button', settings.clear, settings.klass.buttonClear,
            'type=button data-clear=1' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node('button', settings.close, settings.klass.buttonClose,
            'type=button data-close=true ' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ),
        settings.klass.footer
    ) //endreturn
} //DatePicker.prototype.nodes




/**
 * The date picker defaults.
 */
DatePicker.defaults = (function( prefix ) {

    return {

        // The title label to use for the month nav buttons
        labelMonthNext: 'Next month',
        labelMonthPrev: 'Previous month',

        // The title label to use for the dropdown selectors
        labelMonthSelect: 'Select a month',
        labelYearSelect: 'Select a year',

        // Months and weekdays
        monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
        weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],

        // Today and clear
        today: 'Today',
        clear: 'Clear',
        close: 'Close',

        // The format to show on the `input` element
        format: 'd mmmm, yyyy',

        // Classes
        klass: {

            table: prefix + 'table',

            header: prefix + 'header',

            navPrev: prefix + 'nav--prev',
            navNext: prefix + 'nav--next',
            navDisabled: prefix + 'nav--disabled',

            month: prefix + 'month',
            year: prefix + 'year',

            selectMonth: prefix + 'select--month',
            selectYear: prefix + 'select--year',

            weekdays: prefix + 'weekday',

            day: prefix + 'day',
            disabled: prefix + 'day--disabled',
            selected: prefix + 'day--selected',
            highlighted: prefix + 'day--highlighted',
            now: prefix + 'day--today',
            infocus: prefix + 'day--infocus',
            outfocus: prefix + 'day--outfocus',

            footer: prefix + 'footer',

            buttonClear: prefix + 'button--clear',
            buttonToday: prefix + 'button--today',
            buttonClose: prefix + 'button--close'
        }
    }
})( Picker.klasses().picker + '__' )





/**
 * Extend the picker to add the date picker.
 */
Picker.extend( 'pickadate', DatePicker )


}));





/*!
 * Time picker for pickadate.js v3.5.4
 * http://amsul.github.io/pickadate.js/time.htm
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( ['picker','jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('./picker.js'), require('jquery') )

    // Browser globals.
    else factory( Picker, jQuery )

}(function( Picker, $ ) {


/**
 * Globals and constants
 */
var HOURS_IN_DAY = 24,
    MINUTES_IN_HOUR = 60,
    HOURS_TO_NOON = 12,
    MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR,
    _ = Picker._



/**
 * The time picker constructor
 */
function TimePicker( picker, settings ) {

    var clock = this,
        elementValue = picker.$node[ 0 ].value,
        elementDataValue = picker.$node.data( 'value' ),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format

    clock.settings = settings
    clock.$node = picker.$node

    // The queue of methods that will be used to build item objects.
    clock.queue = {
        interval: 'i',
        min: 'measure create',
        max: 'measure create',
        now: 'now create',
        select: 'parse create validate',
        highlight: 'parse create validate',
        view: 'parse create validate',
        disable: 'deactivate',
        enable: 'activate'
    }

    // The component's item object.
    clock.item = {}

    clock.item.clear = null
    clock.item.interval = settings.interval || 30
    clock.item.disable = ( settings.disable || [] ).slice( 0 )
    clock.item.enable = -(function( collectionDisabled ) {
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1
    })( clock.item.disable )

    clock.
        set( 'min', settings.min ).
        set( 'max', settings.max ).
        set( 'now' )

    // When there’s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.
    if ( valueString ) {
        clock.set( 'select', valueString, {
            format: formatString,
            fromValue: !!elementValue
        })
    }

    // If there’s no value, default to highlighting “today”.
    else {
        clock.
            set( 'select', null ).
            set( 'highlight', clock.item.now )
    }

    // The keycode to movement mapping.
    clock.key = {
        40: 1, // Down
        38: -1, // Up
        39: 1, // Right
        37: -1, // Left
        go: function( timeChange ) {
            clock.set(
                'highlight',
                clock.item.highlight.pick + timeChange * clock.item.interval,
                { interval: timeChange * clock.item.interval }
            )
            this.render()
        }
    }


    // Bind some picker events.
    picker.
        on( 'render', function() {
            var $pickerHolder = picker.$root.children(),
                $viewset = $pickerHolder.find( '.' + settings.klass.viewset ),
                vendors = function( prop ) {
                    return ['webkit', 'moz', 'ms', 'o', ''].map(function( vendor ) {
                        return ( vendor ? '-' + vendor + '-' : '' ) + prop
                    })
                },
                animations = function( $el, state ) {
                    vendors( 'transform' ).map(function( prop ) {
                        $el.css( prop, state )
                    })
                    vendors( 'transition' ).map(function( prop ) {
                        $el.css( prop, state )
                    })
                }
            if ( $viewset.length ) {
                animations( $pickerHolder, 'none' )
                $pickerHolder[ 0 ].scrollTop = ~~$viewset.position().top - ( $viewset[ 0 ].clientHeight * 2 )
                animations( $pickerHolder, '' )
            }
        }, 1 ).
        on( 'open', function() {
            picker.$root.find( 'button' ).attr( 'disabled', false )
        }, 1 ).
        on( 'close', function() {
            picker.$root.find( 'button' ).attr( 'disabled', true )
        }, 1 )

} //TimePicker


/**
 * Set a timepicker item object.
 */
TimePicker.prototype.set = function( type, value, options ) {

    var clock = this,
        clockItem = clock.item

    // If the value is `null` just set it immediately.
    if ( value === null ) {
        if ( type == 'clear' ) type = 'select'
        clockItem[ type ] = value
        return clock
    }

    // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.
    clockItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = clock.queue[ type ].split( ' ' ).map( function( method ) {
        value = clock[ method ]( type, value, options )
        return value
    }).pop()

    // Check if we need to cascade through more updates.
    if ( type == 'select' ) {
        clock.set( 'highlight', clockItem.select, options )
    }
    else if ( type == 'highlight' ) {
        clock.set( 'view', clockItem.highlight, options )
    }
    else if ( type == 'interval' ) {
        clock.
            set( 'min', clockItem.min, options ).
            set( 'max', clockItem.max, options )
    }
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {
        if ( type == 'min' ) {
            clock.set( 'max', clockItem.max, options )
        }
        if ( clockItem.select && clock.disabled( clockItem.select ) ) {
            clock.set( 'select', clockItem.select, options )
        }
        if ( clockItem.highlight && clock.disabled( clockItem.highlight ) ) {
            clock.set( 'highlight', clockItem.highlight, options )
        }
    }

    return clock
} //TimePicker.prototype.set


/**
 * Get a timepicker item object.
 */
TimePicker.prototype.get = function( type ) {
    return this.item[ type ]
} //TimePicker.prototype.get


/**
 * Create a picker time object.
 */
TimePicker.prototype.create = function( type, value, options ) {

    var clock = this

    // If there’s no value, use the type as the value.
    value = value === undefined ? type : value

    // If it’s a date object, convert it into an array.
    if ( _.isDate( value ) ) {
        value = [ value.getHours(), value.getMinutes() ]
    }

    // If it’s an object, use the “pick” value.
    if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = value.pick
    }

    // If it’s an array, convert it into minutes.
    else if ( $.isArray( value ) ) {
        value = +value[ 0 ] * MINUTES_IN_HOUR + (+value[ 1 ])
    }

    // If no valid value is passed, set it to “now”.
    else if ( !_.isInteger( value ) ) {
        value = clock.now( type, value, options )
    }

    // If we’re setting the max, make sure it’s greater than the min.
    if ( type == 'max' && value < clock.item.min.pick ) {
        value += MINUTES_IN_DAY
    }

    // If the value doesn’t fall directly on the interval,
    // add one interval to indicate it as “passed”.
    if ( type != 'min' && type != 'max' && (value - clock.item.min.pick) % clock.item.interval !== 0 ) {
        value += clock.item.interval
    }

    // Normalize it into a “reachable” interval.
    value = clock.normalize( type, value, options )

    // Return the compiled object.
    return {

        // Divide to get hours from minutes.
        hour: ~~( HOURS_IN_DAY + value / MINUTES_IN_HOUR ) % HOURS_IN_DAY,

        // The remainder is the minutes.
        mins: ( MINUTES_IN_HOUR + value % MINUTES_IN_HOUR ) % MINUTES_IN_HOUR,

        // The time in total minutes.
        time: ( MINUTES_IN_DAY + value ) % MINUTES_IN_DAY,

        // Reference to the “relative” value to pick.
        pick: value
    }
} //TimePicker.prototype.create


/**
 * Create a range limit object using an array, date object,
 * literal “true”, or integer relative to another time.
 */
TimePicker.prototype.createRange = function( from, to ) {

    var clock = this,
        createTime = function( time ) {
            if ( time === true || $.isArray( time ) || _.isDate( time ) ) {
                return clock.create( time )
            }
            return time
        }

    // Create objects if possible.
    if ( !_.isInteger( from ) ) {
        from = createTime( from )
    }
    if ( !_.isInteger( to ) ) {
        to = createTime( to )
    }

    // Create relative times.
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {
        from = [ to.hour, to.mins + ( from * clock.settings.interval ) ];
    }
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {
        to = [ from.hour, from.mins + ( to * clock.settings.interval ) ];
    }

    return {
        from: createTime( from ),
        to: createTime( to )
    }
} //TimePicker.prototype.createRange


/**
 * Check if a time unit falls within a time range object.
 */
TimePicker.prototype.withinRange = function( range, timeUnit ) {
    range = this.createRange(range.from, range.to)
    return timeUnit.pick >= range.from.pick && timeUnit.pick <= range.to.pick
}


/**
 * Check if two time range objects overlap.
 */
TimePicker.prototype.overlapRanges = function( one, two ) {

    var clock = this

    // Convert the ranges into comparable times.
    one = clock.createRange( one.from, one.to )
    two = clock.createRange( two.from, two.to )

    return clock.withinRange( one, two.from ) || clock.withinRange( one, two.to ) ||
        clock.withinRange( two, one.from ) || clock.withinRange( two, one.to )
}


/**
 * Get the time relative to now.
 */
TimePicker.prototype.now = function( type, value/*, options*/ ) {

    var interval = this.item.interval,
        date = new Date(),
        nowMinutes = date.getHours() * MINUTES_IN_HOUR + date.getMinutes(),
        isValueInteger = _.isInteger( value ),
        isBelowInterval

    // Make sure “now” falls within the interval range.
    nowMinutes -= nowMinutes % interval

    // Check if the difference is less than the interval itself.
    isBelowInterval = value < 0 && interval * value + nowMinutes <= -interval

    // Add an interval because the time has “passed”.
    nowMinutes += type == 'min' && isBelowInterval ? 0 : interval

    // If the value is a number, adjust by that many intervals.
    if ( isValueInteger ) {
        nowMinutes += interval * (
            isBelowInterval && type != 'max' ?
                value + 1 :
                value
            )
    }

    // Return the final calculation.
    return nowMinutes
} //TimePicker.prototype.now


/**
 * Normalize minutes to be “reachable” based on the min and interval.
 */
TimePicker.prototype.normalize = function( type, value/*, options*/ ) {

    var interval = this.item.interval,
        minTime = this.item.min && this.item.min.pick || 0

    // If setting min time, don’t shift anything.
    // Otherwise get the value and min difference and then
    // normalize the difference with the interval.
    value -= type == 'min' ? 0 : ( value - minTime ) % interval

    // Return the adjusted value.
    return value
} //TimePicker.prototype.normalize


/**
 * Measure the range of minutes.
 */
TimePicker.prototype.measure = function( type, value, options ) {

    var clock = this

    // If it’s anything false-y, set it to the default.
    if ( !value ) {
        value = type == 'min' ? [ 0, 0 ] : [ HOURS_IN_DAY - 1, MINUTES_IN_HOUR - 1 ]
    }

    // If it’s a string, parse it.
    if ( typeof value == 'string' ) {
        value = clock.parse( type, value )
    }

    // If it’s a literal true, or an integer, make it relative to now.
    else if ( value === true || _.isInteger( value ) ) {
        value = clock.now( type, value, options )
    }

    // If it’s an object already, just normalize it.
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = clock.normalize( type, value.pick, options )
    }

    return value
} ///TimePicker.prototype.measure


/**
 * Validate an object as enabled.
 */
TimePicker.prototype.validate = function( type, timeObject, options ) {

    var clock = this,
        interval = options && options.interval ? options.interval : clock.item.interval

    // Check if the object is disabled.
    if ( clock.disabled( timeObject ) ) {

        // Shift with the interval until we reach an enabled time.
        timeObject = clock.shift( timeObject, interval )
    }

    // Scope the object into range.
    timeObject = clock.scope( timeObject )

    // Do a second check to see if we landed on a disabled min/max.
    // In that case, shift using the opposite interval as before.
    if ( clock.disabled( timeObject ) ) {
        timeObject = clock.shift( timeObject, interval * -1 )
    }

    // Return the final object.
    return timeObject
} //TimePicker.prototype.validate


/**
 * Check if an object is disabled.
 */
TimePicker.prototype.disabled = function( timeToVerify ) {

    var clock = this,

        // Filter through the disabled times to check if this is one.
        isDisabledMatch = clock.item.disable.filter( function( timeToDisable ) {

            // If the time is a number, match the hours.
            if ( _.isInteger( timeToDisable ) ) {
                return timeToVerify.hour == timeToDisable
            }

            // If it’s an array, create the object and match the times.
            if ( $.isArray( timeToDisable ) || _.isDate( timeToDisable ) ) {
                return timeToVerify.pick == clock.create( timeToDisable ).pick
            }

            // If it’s an object, match a time within the “from” and “to” range.
            if ( $.isPlainObject( timeToDisable ) ) {
                return clock.withinRange( timeToDisable, timeToVerify )
            }
        })

    // If this time matches a disabled time, confirm it’s not inverted.
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( timeToDisable ) {
        return $.isArray( timeToDisable ) && timeToDisable[2] == 'inverted' ||
            $.isPlainObject( timeToDisable ) && timeToDisable.inverted
    }).length

    // If the clock is "enabled" flag is flipped, flip the condition.
    return clock.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||
        timeToVerify.pick < clock.item.min.pick ||
        timeToVerify.pick > clock.item.max.pick
} //TimePicker.prototype.disabled


/**
 * Shift an object by an interval until we reach an enabled object.
 */
TimePicker.prototype.shift = function( timeObject, interval ) {

    var clock = this,
        minLimit = clock.item.min.pick,
        maxLimit = clock.item.max.pick/*,
        safety = 1000*/

    interval = interval || clock.item.interval

    // Keep looping as long as the time is disabled.
    while ( /*safety &&*/ clock.disabled( timeObject ) ) {

        /*safety -= 1
        if ( !safety ) {
            throw 'Fell into an infinite loop while shifting to ' + timeObject.hour + ':' + timeObject.mins + '.'
        }*/

        // Increase/decrease the time by the interval and keep looping.
        timeObject = clock.create( timeObject.pick += interval )

        // If we've looped beyond the limits, break out of the loop.
        if ( timeObject.pick <= minLimit || timeObject.pick >= maxLimit ) {
            break
        }
    }

    // Return the final object.
    return timeObject
} //TimePicker.prototype.shift


/**
 * Scope an object to be within range of min and max.
 */
TimePicker.prototype.scope = function( timeObject ) {
    var minLimit = this.item.min.pick,
        maxLimit = this.item.max.pick
    return this.create( timeObject.pick > maxLimit ? maxLimit : timeObject.pick < minLimit ? minLimit : timeObject )
} //TimePicker.prototype.scope


/**
 * Parse a string into a usable type.
 */
TimePicker.prototype.parse = function( type, value, options ) {

    var hour, minutes, isPM, item, parseValue,
        clock = this,
        parsingObject = {}

    // If it’s already parsed, we’re good.
    if ( !value || typeof value != 'string' ) {
        return value
    }

    // We need a `.format` to parse the value with.
    if ( !( options && options.format ) ) {
        options = options || {}
        options.format = clock.settings.format
    }

    // Convert the format into an array and then map through it.
    clock.formats.toArray( options.format ).map( function( label ) {

        var
            substring,

            // Grab the formatting label.
            formattingLabel = clock.formats[ label ],

            // The format length is from the formatting label function or the
            // label length without the escaping exclamation (!) mark.
            formatLength = formattingLabel ?
                _.trigger( formattingLabel, clock, [ value, parsingObject ] ) :
                label.replace( /^!/, '' ).length

        // If there's a format label, split the value up to the format length.
        // Then add it to the parsing object with appropriate label.
        if ( formattingLabel ) {
            substring = value.substr( 0, formatLength )
            parsingObject[ label ] = substring.match(/^\d+$/) ? +substring : substring
        }

        // Update the time value as the substring from format length to end.
        value = value.substr( formatLength )
    })

    // Grab the hour and minutes from the parsing object.
    for ( item in parsingObject ) {
        parseValue = parsingObject[item]
        if ( _.isInteger(parseValue) ) {
            if ( item.match(/^(h|hh)$/i) ) {
                hour = parseValue
                if ( item == 'h' || item == 'hh' ) {
                    hour %= 12
                }
            }
            else if ( item == 'i' ) {
                minutes = parseValue
            }
        }
        else if ( item.match(/^a$/i) && parseValue.match(/^p/i) && ('h' in parsingObject || 'hh' in parsingObject) ) {
            isPM = true
        }
    }

    // Calculate it in minutes and return.
    return (isPM ? hour + 12 : hour) * MINUTES_IN_HOUR + minutes
} //TimePicker.prototype.parse


/**
 * Various formats to display the object in.
 */
TimePicker.prototype.formats = {

    h: function( string, timeObject ) {

        // If there's string, then get the digits length.
        // Otherwise return the selected hour in "standard" format.
        return string ? _.digits( string ) : timeObject.hour % HOURS_TO_NOON || HOURS_TO_NOON
    },
    hh: function( string, timeObject ) {

        // If there's a string, then the length is always 2.
        // Otherwise return the selected hour in "standard" format with a leading zero.
        return string ? 2 : _.lead( timeObject.hour % HOURS_TO_NOON || HOURS_TO_NOON )
    },
    H: function( string, timeObject ) {

        // If there's string, then get the digits length.
        // Otherwise return the selected hour in "military" format as a string.
        return string ? _.digits( string ) : '' + ( timeObject.hour % 24 )
    },
    HH: function( string, timeObject ) {

        // If there's string, then get the digits length.
        // Otherwise return the selected hour in "military" format with a leading zero.
        return string ? _.digits( string ) : _.lead( timeObject.hour % 24 )
    },
    i: function( string, timeObject ) {

        // If there's a string, then the length is always 2.
        // Otherwise return the selected minutes.
        return string ? 2 : _.lead( timeObject.mins )
    },
    a: function( string, timeObject ) {

        // If there's a string, then the length is always 4.
        // Otherwise check if it's more than "noon" and return either am/pm.
        return string ? 4 : MINUTES_IN_DAY / 2 > timeObject.time % MINUTES_IN_DAY ? 'a.m.' : 'p.m.'
    },
    A: function( string, timeObject ) {

        // If there's a string, then the length is always 2.
        // Otherwise check if it's more than "noon" and return either am/pm.
        return string ? 2 : MINUTES_IN_DAY / 2 > timeObject.time % MINUTES_IN_DAY ? 'AM' : 'PM'
    },

    // Create an array by splitting the formatting string passed.
    toArray: function( formatString ) { return formatString.split( /(h{1,2}|H{1,2}|i|a|A|!.)/g ) },

    // Format an object into a string using the formatting options.
    toString: function ( formatString, itemObject ) {
        var clock = this
        return clock.formats.toArray( formatString ).map( function( label ) {
            return _.trigger( clock.formats[ label ], clock, [ 0, itemObject ] ) || label.replace( /^!/, '' )
        }).join( '' )
    }
} //TimePicker.prototype.formats




/**
 * Check if two time units are the exact.
 */
TimePicker.prototype.isTimeExact = function( one, two ) {

    var clock = this

    // When we’re working with minutes, do a direct comparison.
    if (
        ( _.isInteger( one ) && _.isInteger( two ) ) ||
        ( typeof one == 'boolean' && typeof two == 'boolean' )
     ) {
        return one === two
    }

    // When we’re working with time representations, compare the “pick” value.
    if (
        ( _.isDate( one ) || $.isArray( one ) ) &&
        ( _.isDate( two ) || $.isArray( two ) )
    ) {
        return clock.create( one ).pick === clock.create( two ).pick
    }

    // When we’re working with range objects, compare the “from” and “to”.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return clock.isTimeExact( one.from, two.from ) && clock.isTimeExact( one.to, two.to )
    }

    return false
}


/**
 * Check if two time units overlap.
 */
TimePicker.prototype.isTimeOverlap = function( one, two ) {

    var clock = this

    // When we’re working with an integer, compare the hours.
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {
        return one === clock.create( two ).hour
    }
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {
        return two === clock.create( one ).hour
    }

    // When we’re working with range objects, check if the ranges overlap.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return clock.overlapRanges( one, two )
    }

    return false
}


/**
 * Flip the “enabled” state.
 */
TimePicker.prototype.flipEnable = function(val) {
    var itemObject = this.item
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
}


/**
 * Mark a collection of times as “disabled”.
 */
TimePicker.prototype.deactivate = function( type, timesToDisable ) {

    var clock = this,
        disabledItems = clock.item.disable.slice(0)


    // If we’re flipping, that’s all we need to do.
    if ( timesToDisable == 'flip' ) {
        clock.flipEnable()
    }

    else if ( timesToDisable === false ) {
        clock.flipEnable(1)
        disabledItems = []
    }

    else if ( timesToDisable === true ) {
        clock.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the times to disable.
    else {

        timesToDisable.map(function( unitToDisable ) {

            var matchFound

            // When we have disabled items, check for matches.
            // If something is matched, immediately break out.
            for ( var index = 0; index < disabledItems.length; index += 1 ) {
                if ( clock.isTimeExact( unitToDisable, disabledItems[index] ) ) {
                    matchFound = true
                    break
                }
            }

            // If nothing was found, add the validated unit to the collection.
            if ( !matchFound ) {
                if (
                    _.isInteger( unitToDisable ) ||
                    _.isDate( unitToDisable ) ||
                    $.isArray( unitToDisable ) ||
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )
                ) {
                    disabledItems.push( unitToDisable )
                }
            }
        })
    }

    // Return the updated collection.
    return disabledItems
} //TimePicker.prototype.deactivate


/**
 * Mark a collection of times as “enabled”.
 */
TimePicker.prototype.activate = function( type, timesToEnable ) {

    var clock = this,
        disabledItems = clock.item.disable,
        disabledItemsCount = disabledItems.length

    // If we’re flipping, that’s all we need to do.
    if ( timesToEnable == 'flip' ) {
        clock.flipEnable()
    }

    else if ( timesToEnable === true ) {
        clock.flipEnable(1)
        disabledItems = []
    }

    else if ( timesToEnable === false ) {
        clock.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the disabled times.
    else {

        timesToEnable.map(function( unitToEnable ) {

            var matchFound,
                disabledUnit,
                index,
                isRangeMatched

            // Go through the disabled items and try to find a match.
            for ( index = 0; index < disabledItemsCount; index += 1 ) {

                disabledUnit = disabledItems[index]

                // When an exact match is found, remove it from the collection.
                if ( clock.isTimeExact( disabledUnit, unitToEnable ) ) {
                    matchFound = disabledItems[index] = null
                    isRangeMatched = true
                    break
                }

                // When an overlapped match is found, add the “inverted” state to it.
                else if ( clock.isTimeOverlap( disabledUnit, unitToEnable ) ) {
                    if ( $.isPlainObject( unitToEnable ) ) {
                        unitToEnable.inverted = true
                        matchFound = unitToEnable
                    }
                    else if ( $.isArray( unitToEnable ) ) {
                        matchFound = unitToEnable
                        if ( !matchFound[2] ) matchFound.push( 'inverted' )
                    }
                    else if ( _.isDate( unitToEnable ) ) {
                        matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted' ]
                    }
                    break
                }
            }

            // If a match was found, remove a previous duplicate entry.
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( clock.isTimeExact( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // In the event that we’re dealing with an overlap of range times,
            // make sure there are no “inverted” times because of it.
            if ( isRangeMatched ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( clock.isTimeOverlap( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // If something is still matched, add it into the collection.
            if ( matchFound ) {
                disabledItems.push( matchFound )
            }
        })
    }

    // Return the updated collection.
    return disabledItems.filter(function( val ) { return val != null })
} //TimePicker.prototype.activate


/**
 * The division to use for the range intervals.
 */
TimePicker.prototype.i = function( type, value/*, options*/ ) {
    return _.isInteger( value ) && value > 0 ? value : this.item.interval
}


/**
 * Create a string for the nodes in the picker.
 */
TimePicker.prototype.nodes = function( isOpen ) {

    var
        clock = this,
        settings = clock.settings,
        selectedObject = clock.item.select,
        highlightedObject = clock.item.highlight,
        viewsetObject = clock.item.view,
        disabledCollection = clock.item.disable

    return _.node(
        'ul',
        _.group({
            min: clock.item.min.pick,
            max: clock.item.max.pick,
            i: clock.item.interval,
            node: 'li',
            item: function( loopedTime ) {
                loopedTime = clock.create( loopedTime )
                var timeMinutes = loopedTime.pick,
                    isSelected = selectedObject && selectedObject.pick == timeMinutes,
                    isHighlighted = highlightedObject && highlightedObject.pick == timeMinutes,
                    isDisabled = disabledCollection && clock.disabled( loopedTime )
                return [
                    _.trigger( clock.formats.toString, clock, [ _.trigger( settings.formatLabel, clock, [ loopedTime ] ) || settings.format, loopedTime ] ),
                    (function( klasses ) {

                        if ( isSelected ) {
                            klasses.push( settings.klass.selected )
                        }

                        if ( isHighlighted ) {
                            klasses.push( settings.klass.highlighted )
                        }

                        if ( viewsetObject && viewsetObject.pick == timeMinutes ) {
                            klasses.push( settings.klass.viewset )
                        }

                        if ( isDisabled ) {
                            klasses.push( settings.klass.disabled )
                        }

                        return klasses.join( ' ' )
                    })( [ settings.klass.listItem ] ),
                    'data-pick=' + loopedTime.pick + ' ' + _.ariaAttr({
                        role: 'option',
                        selected: isSelected && clock.$node.val() === _.trigger(
                                clock.formats.toString,
                                clock,
                                [ settings.format, loopedTime ]
                            ) ? true : null,
                        activedescendant: isHighlighted ? true : null,
                        disabled: isDisabled ? true : null
                    })
                ]
            }
        }) +

        // * For Firefox forms to submit, make sure to set the button’s `type` attribute as “button”.
        _.node(
            'li',
            _.node(
                'button',
                settings.clear,
                settings.klass.buttonClear,
                'type=button data-clear=1' + ( isOpen ? '' : ' disabled' ) + ' ' +
                _.ariaAttr({ controls: clock.$node[0].id })
            ),
            '', _.ariaAttr({ role: 'presentation' })
        ),
        settings.klass.list,
        _.ariaAttr({ role: 'listbox', controls: clock.$node[0].id })
    )
} //TimePicker.prototype.nodes







/* ==========================================================================
   Extend the picker to add the component with the defaults.
   ========================================================================== */

TimePicker.defaults = (function( prefix ) {

    return {

        // Clear
        clear: 'Clear',

        // The format to show on the `input` element
        format: 'h:i A',

        // The interval between each time
        interval: 30,

        // Classes
        klass: {

            picker: prefix + ' ' + prefix + '--time',
            holder: prefix + '__holder',

            list: prefix + '__list',
            listItem: prefix + '__list-item',

            disabled: prefix + '__list-item--disabled',
            selected: prefix + '__list-item--selected',
            highlighted: prefix + '__list-item--highlighted',
            viewset: prefix + '__list-item--viewset',
            now: prefix + '__list-item--now',

            buttonClear: prefix + '__button--clear'
        }
    }
})( Picker.klasses().picker )





/**
 * Extend the picker to add the time picker.
 */
Picker.extend( 'pickatime', TimePicker )


}));




jQuery(document).ready(function () {
(function($) {
/*jshint
 debug: true,
 devel: true,
 browser: true,
 asi: true,
 unused: false
 */



/*
 * Initialize all the others
 */

$( '.js__datepicker' ).pickadate({

    // Work-around for some mobile browsers clipping off the picker.
    onOpen: function() { $('pre').css('overflow', 'hidden') },
    onClose: function() { $('pre').css('overflow', '') },
    monthsShort: [ 'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec' ],
    showMonthsShort: true,
    format: 'mm.dd.yyyy',
    formatSubmit: 'yyyy/mm/dd',
    min: true
})
$( '.js__timepicker' ).pickatime()


})(jQuery);
});
/*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mouse","./widget"],a):a(jQuery)}(function(a){return a.widget("ui.draggable",a.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(a,b){this._super(a,b),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(b){var c=this.options;return this._blurActiveElement(b),this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(b),this.handle?(this._blockFrames(c.iframeFix===!0?"iframe":c.iframeFix),!0):!1)},_blockFrames:function(b){this.iframeBlocks=this.document.find(b).map(function(){var b=a(this);return a("<div>").css("position","absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(b){var c=this.document[0];if(this.handleElement.is(b.target))try{c.activeElement&&"body"!==c.activeElement.nodeName.toLowerCase()&&a(c.activeElement).blur()}catch(d){}},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===a(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(b),this.originalPosition=this.position=this._generatePosition(b,!1),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._normalizeRightBottom(),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(b,c){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b,!0),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=this,d=!1;return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1},_mouseUp:function(b){return this._unblockFrames(),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),this.handleElement.is(b.target)&&this.element.focus(),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){return this.options.handle?!!a(b.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper),e=d?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return e.parents("body").length||e.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d&&e[0]===this.element[0]&&this._setPositionRelative(),e[0]===this.element[0]||/(fixed|absolute)/.test(e.css("position"))||e.css("position","absolute"),e},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){var b=this.offsetParent.offset(),c=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==c&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),b=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(b?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(b?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options,f=this.document[0];return this.relativeContainer=null,e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(f).width()-this.helperProportions.width-this.margins.left,(a(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c))):void(this.containment=null)},_convertPositionTo:function(a,b){b||(b=this.position);var c="absolute"===a?1:-1,d=this._isRootNode(this.scrollParent[0]);return{top:b.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*c,left:b.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*c}},_generatePosition:function(a,b){var c,d,e,f,g=this.options,h=this._isRootNode(this.scrollParent[0]),i=a.pageX,j=a.pageY;return h&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),b&&(this.containment&&(this.relativeContainer?(d=this.relativeContainer.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,a.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),a.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),a.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),a.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f),"y"===g.axis&&(i=this.originalPageX),"x"===g.axis&&(j=this.originalPageY)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:h?0:this.offset.scroll.top),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:h?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d,this],!0),/^(drag|start|stop)/.test(b)&&(this.positionAbs=this._convertPositionTo("absolute"),d.offset=this.positionAbs),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c,d){var e=a.extend({},c,{item:d.element});d.sortables=[],a(d.options.connectToSortable).each(function(){var c=a(this).sortable("instance");c&&!c.options.disabled&&(d.sortables.push(c),c.refreshPositions(),c._trigger("activate",b,e))})},stop:function(b,c,d){var e=a.extend({},c,{item:d.element});d.cancelHelperRemoval=!1,a.each(d.sortables,function(){var a=this;a.isOver?(a.isOver=0,d.cancelHelperRemoval=!0,a.cancelHelperRemoval=!1,a._storedCSS={position:a.placeholder.css("position"),top:a.placeholder.css("top"),left:a.placeholder.css("left")},a._mouseStop(b),a.options.helper=a.options._helper):(a.cancelHelperRemoval=!0,a._trigger("deactivate",b,e))})},drag:function(b,c,d){a.each(d.sortables,function(){var e=!1,f=this;f.positionAbs=d.positionAbs,f.helperProportions=d.helperProportions,f.offset.click=d.offset.click,f._intersectsWith(f.containerCache)&&(e=!0,a.each(d.sortables,function(){return this.positionAbs=d.positionAbs,this.helperProportions=d.helperProportions,this.offset.click=d.offset.click,this!==f&&this._intersectsWith(this.containerCache)&&a.contains(f.element[0],this.element[0])&&(e=!1),e})),e?(f.isOver||(f.isOver=1,d._parent=c.helper.parent(),f.currentItem=c.helper.appendTo(f.element).data("ui-sortable-item",!0),f.options._helper=f.options.helper,f.options.helper=function(){return c.helper[0]},b.target=f.currentItem[0],f._mouseCapture(b,!0),f._mouseStart(b,!0,!0),f.offset.click.top=d.offset.click.top,f.offset.click.left=d.offset.click.left,f.offset.parent.left-=d.offset.parent.left-f.offset.parent.left,f.offset.parent.top-=d.offset.parent.top-f.offset.parent.top,d._trigger("toSortable",b),d.dropped=f.element,a.each(d.sortables,function(){this.refreshPositions()}),d.currentItem=d.element,f.fromOutside=d),f.currentItem&&(f._mouseDrag(b),c.position=f.position)):f.isOver&&(f.isOver=0,f.cancelHelperRemoval=!0,f.options._revert=f.options.revert,f.options.revert=!1,f._trigger("out",b,f._uiHash(f)),f._mouseStop(b,!0),f.options.revert=f.options._revert,f.options.helper=f.options._helper,f.placeholder&&f.placeholder.remove(),c.helper.appendTo(d._parent),d._refreshOffsets(b),c.position=d._generatePosition(b,!0),d._trigger("fromSortable",b),d.dropped=!1,a.each(d.sortables,function(){this.refreshPositions()}))})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c,d){var e=a("body"),f=d.options;e.css("cursor")&&(f._cursor=e.css("cursor")),e.css("cursor",f.cursor)},stop:function(b,c,d){var e=d.options;e._cursor&&a("body").css("cursor",e._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("opacity")&&(f._opacity=e.css("opacity")),e.css("opacity",f.opacity)},stop:function(b,c,d){var e=d.options;e._opacity&&a(c.helper).css("opacity",e._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(a,b,c){c.scrollParentNotHidden||(c.scrollParentNotHidden=c.helper.scrollParent(!1)),c.scrollParentNotHidden[0]!==c.document[0]&&"HTML"!==c.scrollParentNotHidden[0].tagName&&(c.overflowOffset=c.scrollParentNotHidden.offset())},drag:function(b,c,d){var e=d.options,f=!1,g=d.scrollParentNotHidden[0],h=d.document[0];g!==h&&"HTML"!==g.tagName?(e.axis&&"x"===e.axis||(d.overflowOffset.top+g.offsetHeight-b.pageY<e.scrollSensitivity?g.scrollTop=f=g.scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(g.scrollTop=f=g.scrollTop-e.scrollSpeed)),e.axis&&"y"===e.axis||(d.overflowOffset.left+g.offsetWidth-b.pageX<e.scrollSensitivity?g.scrollLeft=f=g.scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(g.scrollLeft=f=g.scrollLeft-e.scrollSpeed))):(e.axis&&"x"===e.axis||(b.pageY-a(h).scrollTop()<e.scrollSensitivity?f=a(h).scrollTop(a(h).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(h).scrollTop())<e.scrollSensitivity&&(f=a(h).scrollTop(a(h).scrollTop()+e.scrollSpeed))),e.axis&&"y"===e.axis||(b.pageX-a(h).scrollLeft()<e.scrollSensitivity?f=a(h).scrollLeft(a(h).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(h).scrollLeft())<e.scrollSensitivity&&(f=a(h).scrollLeft(a(h).scrollLeft()+e.scrollSpeed)))),f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c,d){var e=d.options;d.snapElements=[],a(e.snap.constructor!==String?e.snap.items||":data(ui-draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!==d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o=d.options,p=o.snapTolerance,q=c.offset.left,r=q+d.helperProportions.width,s=c.offset.top,t=s+d.helperProportions.height;for(m=d.snapElements.length-1;m>=0;m--)i=d.snapElements[m].left-d.margins.left,j=i+d.snapElements[m].width,k=d.snapElements[m].top-d.margins.top,l=k+d.snapElements[m].height,i-p>r||q>j+p||k-p>t||s>l+p||!a.contains(d.snapElements[m].item.ownerDocument,d.snapElements[m].item)?(d.snapElements[m].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=!1):("inner"!==o.snapMode&&(e=Math.abs(k-t)<=p,f=Math.abs(l-s)<=p,g=Math.abs(i-r)<=p,h=Math.abs(j-q)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k-d.helperProportions.height,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i-d.helperProportions.width}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j}).left)),n=e||f||g||h,"outer"!==o.snapMode&&(e=Math.abs(k-s)<=p,f=Math.abs(l-t)<=p,g=Math.abs(i-q)<=p,h=Math.abs(j-r)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l-d.helperProportions.height,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j-d.helperProportions.width}).left)),!d.snapElements[m].snapping&&(e||f||g||h||n)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=e||f||g||h||n)}}),a.ui.plugin.add("draggable","stack",{start:function(b,c,d){var e,f=d.options,g=a.makeArray(a(f.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});g.length&&(e=parseInt(a(g[0]).css("zIndex"),10)||0,a(g).each(function(b){a(this).css("zIndex",e+b)}),this.css("zIndex",e+g.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("zIndex")&&(f._zIndex=e.css("zIndex")),e.css("zIndex",f.zIndex)},stop:function(b,c,d){var e=d.options;e._zIndex&&a(c.helper).css("zIndex",e._zIndex)}}),a.ui.draggable});
// Init Google map
var THEMEREX_googlemap_init_obj = {};
var THEMEREX_googlemap_styles = {
	'default': [],
	'invert': [ { "stylers": [ { "invert_lightness": true }, { "visibility": "on" } ] } ],
	'dark': [{"featureType":"landscape","stylers":[{ "invert_lightness": true },{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
	'simple': [
				{
				  stylers: [
					{ hue: "#00ffe6" },
					{ saturation: -20 }
				  ]
				},{
				  featureType: "road",
				  elementType: "geometry",
				  stylers: [
					{ lightness: 100 },
					{ visibility: "simplified" }
				  ]
				},{
				  featureType: "road",
				  elementType: "labels",
				  stylers: [
					{ visibility: "off" }
				  ]
				}
			  ],
	'greyscale': [
					{
						"stylers": [
							{ "saturation": -100 }
						]
					}
				],
	'greyscale2': [
				{
				 "featureType": "landscape",
				 "stylers": [
				  { "hue": "#FF0300" },
				  { "saturation": -100 },
				  { "lightness": 20.4705882352941 },
				  { "gamma": 1 }
				 ]
				},
				{
				 "featureType": "road.highway",
				 "stylers": [
				  { "hue": "#FF0300" },
				  { "saturation": -100 },
				  { "lightness": 25.59999999999998 },
				  { "gamma": 1 }
				 ]
				},
				{
				 "featureType": "road.arterial",
				 "stylers": [
				  { "hue": "#FF0300" },
				  { "saturation": -100 },
				  { "lightness": -22 },
				  { "gamma": 1 }
				 ]
				},
				{
				 "featureType": "road.local",
				 "stylers": [
				  { "hue": "#FF0300" },
				  { "saturation": -100 },
				  { "lightness": 21.411764705882348 },
				  { "gamma": 1 }
				 ]
				},
				{
				 "featureType": "water",
				 "stylers": [
				  { "hue": "#FF0300" },
				  { "saturation": -100 },
				  { "lightness": 21.411764705882348 },
				  { "gamma": 1 }
				 ]
				},
				{
				 "featureType": "poi",
				 "stylers": [
				  { "hue": "#FF0300" },
				  { "saturation": -100 },
				  { "lightness": 4.941176470588232 },
				  { "gamma": 1 }
				 ]
				}
			   ],
	'style1': [{
					"featureType": "landscape",
					"stylers": [
						{ "hue": "#FF0300"	},
						{ "saturation": -100 },
						{ "lightness": 20.4705882352941 },
						{ "gamma": 1 }
					]
				},
				{
					"featureType": "road.highway",
					"stylers": [
						{ "hue": "#FF0300" },
						{ "saturation": -100 },
						{ "lightness": 25.59999999999998 },
						{ "gamma": 1 }
					]
				},
				{
					"featureType": "road.arterial",
					"stylers": [
						{ "hue": "#FF0300" },
						{ "saturation": -100 },
						{ "lightness": -22 },
						{ "gamma": 1 }
					]
				},
				{
					"featureType": "road.local",
					"stylers": [
						{ "hue": "#FF0300" },
						{ "saturation": -100 },
						{ "lightness": 21.411764705882348 },
						{ "gamma": 1 }
					]
				},
				{
					"featureType": "water",
					"stylers": [
						{ "hue": "#FF0300" },
						{ "saturation": -100 },
						{ "lightness": 21.411764705882348 },
						{ "gamma": 1 }
					]
				},
				{
					"featureType": "poi",
					"stylers": [
						{ "hue": "#FF0300" },
						{ "saturation": -100 },
						{ "lightness": 4.941176470588232 },
						{ "gamma": 1 }
					]
				}
			],
	'style2': [
		 {
		  "featureType": "landscape",
		  "stylers": [
		   {
		    "hue": "#007FFF"
		   },
		   {
		    "saturation": 100
		   },
		   {
		    "lightness": 156
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 },
		 {
		  "featureType": "road.highway",
		  "stylers": [
		   {
		    "hue": "#FF7000"
		   },
		   {
		    "saturation": -83.6
		   },
		   {
		    "lightness": 48.80000000000001
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 },
		 {
		  "featureType": "road.arterial",
		  "stylers": [
		   {
		    "hue": "#FF7000"
		   },
		   {
		    "saturation": -81.08108108108107
		   },
		   {
		    "lightness": -6.8392156862745
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 },
		 {
		  "featureType": "road.local",
		  "stylers": [
		   {
		    "hue": "#FF9A00"
		   },
		   {
		    "saturation": 7.692307692307736
		   },
		   {
		    "lightness": 21.411764705882348
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 },
		 {
		  "featureType": "water",
		  "stylers": [
		   {
		    "hue": "#0093FF"
		   },
		   {
		    "saturation": 16.39999999999999
		   },
		   {
		    "lightness": -6.400000000000006
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 },
		 {
		  "featureType": "poi",
		  "stylers": [
		   {
		    "hue": "#00FF60"
		   },
		   {
		    "saturation": 17
		   },
		   {
		    "lightness": 44.599999999999994
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 }
	],
	'style3':  [
 {
  "featureType": "landscape",
  "stylers": [
   {
    "hue": "#FFA800"
   },
   {
    "saturation": 17.799999999999997
   },
   {
    "lightness": 152.20000000000002
   },
   {
    "gamma": 1
   }
  ]
 },
 {
  "featureType": "road.highway",
  "stylers": [
   {
    "hue": "#007FFF"
   },
   {
    "saturation": -77.41935483870967
   },
   {
    "lightness": 47.19999999999999
   },
   {
    "gamma": 1
   }
  ]
 },
 {
  "featureType": "road.arterial",
  "stylers": [
   {
    "hue": "#FBFF00"
   },
   {
    "saturation": -78
   },
   {
    "lightness": 39.19999999999999
   },
   {
    "gamma": 1
   }
  ]
 },
 {
  "featureType": "road.local",
  "stylers": [
   {
    "hue": "#00FFFD"
   },
   {
    "saturation": 0
   },
   {
    "lightness": 0
   },
   {
    "gamma": 1
   }
  ]
 },
 {
  "featureType": "water",
  "stylers": [
   {
    "hue": "#007FFF"
   },
   {
    "saturation": -77.41935483870967
   },
   {
    "lightness": -14.599999999999994
   },
   {
    "gamma": 1
   }
  ]
 },
 {
  "featureType": "poi",
  "stylers": [
   {
    "hue": "#007FFF"
   },
   {
    "saturation": -77.41935483870967
   },
   {
    "lightness": 42.79999999999998
   },
   {
    "gamma": 1
   }
  ]
 }
]
}

function googlemap_init(dom_obj, coords) {
	"use strict";
	try {
		if (coords.latlng!=='') {
			var latlngStr = coords.latlng.split(',');
			var lat = latlngStr[0];//parseFloat(latlngStr[0]);
			var lng = latlngStr[1];//parseFloat(latlngStr[1]);
			var latlng = new google.maps.LatLng(lat, lng);
		} else
			var latlng = new google.maps.LatLng(0, 0);
		var id = dom_obj.id;
		THEMEREX_googlemap_init_obj[id] = {};
		THEMEREX_googlemap_init_obj[id].dom = dom_obj;
		THEMEREX_googlemap_init_obj[id].point = coords.point;
		THEMEREX_googlemap_init_obj[id].description = coords.description;
		THEMEREX_googlemap_init_obj[id].title = coords.title;
		THEMEREX_googlemap_init_obj[id].opt = {
			zoom: coords.zoom,
			center: latlng,
			scrollwheel: false,
			scaleControl: false,
			disableDefaultUI: false,
			panControl: true,
			zoomControl: true, //zoom
			mapTypeControl: false,
			streetViewControl: false,
			overviewMapControl: false,
			styles: THEMEREX_googlemap_styles[coords.style ? coords.style : 'default'],
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var custom_map = new google.maps.Geocoder();
		custom_map.geocode(coords.latlng!=='' ? {'latLng': latlng} : {"address": coords.address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				THEMEREX_googlemap_init_obj[id].address = results[0].geometry.location;
				googlemap_create(id);
			} else
				alert(THEMEREX_GEOCODE_ERROR + ' ' + status);
		});

		jQuery(window).resize(function() {
			if (THEMEREX_googlemap_init_obj[id].map) THEMEREX_googlemap_init_obj[id].map.setCenter(THEMEREX_googlemap_init_obj[id].address);
		});

	} catch (e) {
		//alert(THEMEREX_GOOGLE_MAP_NOT_AVAIL);
	}
}

function googlemap_create(id) {
	"use strict";
	if (!THEMEREX_googlemap_init_obj[id].address) return false;
	THEMEREX_googlemap_init_obj[id].map = new google.maps.Map(THEMEREX_googlemap_init_obj[id].dom, THEMEREX_googlemap_init_obj[id].opt);
	THEMEREX_googlemap_init_obj[id].map.setCenter(THEMEREX_googlemap_init_obj[id].address);
	var markerInit = {
		map: THEMEREX_googlemap_init_obj[id].map,
		position: THEMEREX_googlemap_init_obj[id].address	//THEMEREX_googlemap_init_obj[id].map.getCenter()
	};
	if (THEMEREX_googlemap_init_obj[id].point) markerInit.icon = THEMEREX_googlemap_init_obj[id].point;
	if (THEMEREX_googlemap_init_obj[id].title) markerInit.title = THEMEREX_googlemap_init_obj[id].title;
	var marker = new google.maps.Marker(markerInit);
	var infowindow = new google.maps.InfoWindow({
		content: THEMEREX_googlemap_init_obj[id].description
	});
	google.maps.event.addListener(marker, "click", function() {
		infowindow.open(THEMEREX_googlemap_init_obj[id].map, marker);
	});
}


function googlemap_refresh(){
    for(id in THEMEREX_googlemap_init_obj){
        googlemap_create(id)
    }
}

jQuery(document).ready(function() {
	jQuery('.sc_googlemap').each(function(){
		var map_address = jQuery(this).data('address');
		var map_latlng = jQuery(this).data('latlng');
	 	var map_id = jQuery(this).attr('id');
 		var map_zoom = jQuery(this).data('zoom');
 		var map_style = jQuery(this).data('style');
		var map_descr = jQuery(this).data('description');
		var map_title = jQuery(this).data('title');
 		var map_point = jQuery(this).data('point');
		googlemap_init( jQuery('#'+map_id).get(0), {address: map_address , latlng: map_latlng, style: map_style, zoom: map_zoom, description: map_descr, title: map_title, point: map_point});
	});
});
