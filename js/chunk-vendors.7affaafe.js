(self["webpackChunkFloppadweb"]=self["webpackChunkFloppadweb"]||[]).push([[998],{9662:function(e,t,c){var n=c(614),i=c(6330),s=TypeError;e.exports=function(e){if(n(e))return e;throw s(i(e)+" is not a function")}},6077:function(e,t,c){var n=c(614),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||n(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,c){var n=c(7976),i=TypeError;e.exports=function(e,t){if(n(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,c){var n=c(111),i=String,s=TypeError;e.exports=function(e){if(n(e))return e;throw s(i(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,c){"use strict";var n,i,s,r=c(3013),a=c(9781),o=c(7854),l=c(614),u=c(111),f=c(2597),h=c(648),d=c(6330),p=c(8880),m=c(8052),g=c(7045),v=c(7976),z=c(9518),H=c(7674),y=c(5112),V=c(9711),C=c(9909),b=C.enforce,w=C.get,M=o.Int8Array,L=M&&M.prototype,x=o.Uint8ClampedArray,_=x&&x.prototype,k=M&&z(M),N=L&&z(L),S=Object.prototype,A=o.TypeError,E=y("toStringTag"),T=V("TYPED_ARRAY_TAG"),I="TypedArrayConstructor",O=r&&!!H&&"Opera"!==h(o.opera),P=!1,R={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},D={BigInt64Array:8,BigUint64Array:8},F=function(e){if(!u(e))return!1;var t=h(e);return"DataView"===t||f(R,t)||f(D,t)},U=function(e){var t=z(e);if(u(t)){var c=w(t);return c&&f(c,I)?c[I]:U(t)}},B=function(e){if(!u(e))return!1;var t=h(e);return f(R,t)||f(D,t)},j=function(e){if(B(e))return e;throw A("Target is not a typed array")},q=function(e){if(l(e)&&(!H||v(k,e)))return e;throw A(d(e)+" is not a typed array constructor")},$=function(e,t,c,n){if(a){if(c)for(var i in R){var s=o[i];if(s&&f(s.prototype,e))try{delete s.prototype[e]}catch(r){try{s.prototype[e]=t}catch(l){}}}N[e]&&!c||m(N,e,c?t:O&&L[e]||t,n)}},W=function(e,t,c){var n,i;if(a){if(H){if(c)for(n in R)if(i=o[n],i&&f(i,e))try{delete i[e]}catch(s){}if(k[e]&&!c)return;try{return m(k,e,c?t:O&&k[e]||t)}catch(s){}}for(n in R)i=o[n],!i||i[e]&&!c||m(i,e,t)}};for(n in R)i=o[n],s=i&&i.prototype,s?b(s)[I]=i:O=!1;for(n in D)i=o[n],s=i&&i.prototype,s&&(b(s)[I]=i);if((!O||!l(k)||k===Function.prototype)&&(k=function(){throw A("Incorrect invocation")},O))for(n in R)o[n]&&H(o[n],k);if((!O||!N||N===S)&&(N=k.prototype,O))for(n in R)o[n]&&H(o[n].prototype,N);if(O&&z(_)!==N&&H(_,N),a&&!f(N,E))for(n in P=!0,g(N,E,{configurable:!0,get:function(){return u(this)?this[T]:void 0}}),R)o[n]&&p(o[n],T,n);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:O,TYPED_ARRAY_TAG:P&&T,aTypedArray:j,aTypedArrayConstructor:q,exportTypedArrayMethod:$,exportTypedArrayStaticMethod:W,getTypedArrayConstructor:U,isView:F,isTypedArray:B,TypedArray:k,TypedArrayPrototype:N}},7745:function(e,t,c){var n=c(6244);e.exports=function(e,t){var c=0,i=n(t),s=new e(i);while(i>c)s[c]=t[c++];return s}},1318:function(e,t,c){var n=c(5656),i=c(1400),s=c(6244),r=function(e){return function(t,c,r){var a,o=n(t),l=s(o),u=i(r,l);if(e&&c!=c){while(l>u)if(a=o[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in o)&&o[u]===c)return e||u||0;return!e&&-1}};e.exports={includes:r(!0),indexOf:r(!1)}},3658:function(e,t,c){"use strict";var n=c(9781),i=c(3157),s=TypeError,r=Object.getOwnPropertyDescriptor,a=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!r(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},1843:function(e,t,c){var n=c(6244);e.exports=function(e,t){for(var c=n(e),i=new t(c),s=0;s<c;s++)i[s]=e[c-s-1];return i}},1572:function(e,t,c){var n=c(6244),i=c(9303),s=RangeError;e.exports=function(e,t,c,r){var a=n(e),o=i(c),l=o<0?a+o:o;if(l>=a||l<0)throw s("Incorrect index");for(var u=new t(a),f=0;f<a;f++)u[f]=f===l?r:e[f];return u}},4326:function(e,t,c){var n=c(1702),i=n({}.toString),s=n("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,c){var n=c(1694),i=c(614),s=c(4326),r=c(5112),a=r("toStringTag"),o=Object,l="Arguments"==s(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(c){}};e.exports=n?s:function(e){var t,c,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(c=u(t=o(e),a))?c:l?s(t):"Object"==(n=s(t))&&i(t.callee)?"Arguments":n}},9920:function(e,t,c){var n=c(2597),i=c(3887),s=c(1236),r=c(3070);e.exports=function(e,t,c){for(var a=i(t),o=r.f,l=s.f,u=0;u<a.length;u++){var f=a[u];n(e,f)||c&&n(c,f)||o(e,f,l(t,f))}}},8544:function(e,t,c){var n=c(7293);e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,c){var n=c(9781),i=c(3070),s=c(9114);e.exports=n?function(e,t,c){return i.f(e,t,s(1,c))}:function(e,t,c){return e[t]=c,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,c){var n=c(6339),i=c(3070);e.exports=function(e,t,c){return c.get&&n(c.get,t,{getter:!0}),c.set&&n(c.set,t,{setter:!0}),i.f(e,t,c)}},8052:function(e,t,c){var n=c(614),i=c(3070),s=c(6339),r=c(3072);e.exports=function(e,t,c,a){a||(a={});var o=a.enumerable,l=void 0!==a.name?a.name:t;if(n(c)&&s(c,l,a),a.global)o?e[t]=c:r(t,c);else{try{a.unsafe?e[t]&&(o=!0):delete e[t]}catch(u){}o?e[t]=c:i.f(e,t,{value:c,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,c){var n=c(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(n,e,{value:t,configurable:!0,writable:!0})}catch(c){n[e]=t}return t}},5117:function(e,t,c){"use strict";var n=c(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+n(t)+" of "+n(e))}},9781:function(e,t,c){var n=c(7293);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,c="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:c}},317:function(e,t,c){var n=c(7854),i=c(111),s=n.document,r=i(s)&&i(s.createElement);e.exports=function(e){return r?s.createElement(e):{}}},7207:function(e){var t=TypeError,c=9007199254740991;e.exports=function(e){if(e>c)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,c){var n,i,s=c(7854),r=c(8113),a=s.process,o=s.Deno,l=a&&a.versions||o&&o.version,u=l&&l.v8;u&&(n=u.split("."),i=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&r&&(n=r.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=r.match(/Chrome\/(\d+)/),n&&(i=+n[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,c){var n=c(1702),i=Error,s=n("".replace),r=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,o=a.test(r);e.exports=function(e,t){if(o&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},2109:function(e,t,c){var n=c(7854),i=c(1236).f,s=c(8880),r=c(8052),a=c(3072),o=c(9920),l=c(4705);e.exports=function(e,t){var c,u,f,h,d,p,m=e.target,g=e.global,v=e.stat;if(u=g?n:v?n[m]||a(m,{}):(n[m]||{}).prototype,u)for(f in t){if(d=t[f],e.dontCallGetSet?(p=i(u,f),h=p&&p.value):h=u[f],c=l(g?f:m+(v?".":"#")+f,e.forced),!c&&void 0!==h){if(typeof d==typeof h)continue;o(d,h)}(e.sham||h&&h.sham)&&s(d,"sham",!0),r(u,f,d,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,c){var n=c(7293);e.exports=!n((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,c){var n=c(4374),i=Function.prototype.call;e.exports=n?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,c){var n=c(9781),i=c(2597),s=Function.prototype,r=n&&Object.getOwnPropertyDescriptor,a=i(s,"name"),o=a&&"something"===function(){}.name,l=a&&(!n||n&&r(s,"name").configurable);e.exports={EXISTS:a,PROPER:o,CONFIGURABLE:l}},5668:function(e,t,c){var n=c(1702),i=c(9662);e.exports=function(e,t,c){try{return n(i(Object.getOwnPropertyDescriptor(e,t)[c]))}catch(s){}}},1702:function(e,t,c){var n=c(4374),i=Function.prototype,s=i.call,r=n&&i.bind.bind(s,s);e.exports=n?r:function(e){return function(){return s.apply(e,arguments)}}},5005:function(e,t,c){var n=c(7854),i=c(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(n[e]):n[e]&&n[e][t]}},8173:function(e,t,c){var n=c(9662),i=c(8554);e.exports=function(e,t){var c=e[t];return i(c)?void 0:n(c)}},7854:function(e,t,c){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof c.g&&c.g)||function(){return this}()||Function("return this")()},2597:function(e,t,c){var n=c(1702),i=c(7908),s=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,c){var n=c(9781),i=c(7293),s=c(317);e.exports=!n&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,c){var n=c(1702),i=c(7293),s=c(4326),r=Object,a=n("".split);e.exports=i((function(){return!r("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):r(e)}:r},9587:function(e,t,c){var n=c(614),i=c(111),s=c(7674);e.exports=function(e,t,c){var r,a;return s&&n(r=t.constructor)&&r!==c&&i(a=r.prototype)&&a!==c.prototype&&s(e,a),e}},2788:function(e,t,c){var n=c(1702),i=c(614),s=c(5465),r=n(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return r(e)}),e.exports=s.inspectSource},9909:function(e,t,c){var n,i,s,r=c(4811),a=c(7854),o=c(111),l=c(8880),u=c(2597),f=c(5465),h=c(6200),d=c(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return s(e)?i(e):n(e,{})},z=function(e){return function(t){var c;if(!o(t)||(c=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return c}};if(r||f.state){var H=f.state||(f.state=new g);H.get=H.get,H.has=H.has,H.set=H.set,n=function(e,t){if(H.has(e))throw m(p);return t.facade=e,H.set(e,t),t},i=function(e){return H.get(e)||{}},s=function(e){return H.has(e)}}else{var y=h("state");d[y]=!0,n=function(e,t){if(u(e,y))throw m(p);return t.facade=e,l(e,y,t),t},i=function(e){return u(e,y)?e[y]:{}},s=function(e){return u(e,y)}}e.exports={set:n,get:i,has:s,enforce:v,getterFor:z}},3157:function(e,t,c){var n=c(4326);e.exports=Array.isArray||function(e){return"Array"==n(e)}},4067:function(e,t,c){var n=c(648);e.exports=function(e){var t=n(e);return"BigInt64Array"==t||"BigUint64Array"==t}},614:function(e,t,c){var n=c(4154),i=n.all;e.exports=n.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,c){var n=c(7293),i=c(614),s=/#|\.prototype\./,r=function(e,t){var c=o[a(e)];return c==u||c!=l&&(i(t)?n(t):!!t)},a=r.normalize=function(e){return String(e).replace(s,".").toLowerCase()},o=r.data={},l=r.NATIVE="N",u=r.POLYFILL="P";e.exports=r},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,c){var n=c(614),i=c(4154),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:n(e)||e===s}:function(e){return"object"==typeof e?null!==e:n(e)}},1913:function(e){e.exports=!1},2190:function(e,t,c){var n=c(5005),i=c(614),s=c(7976),r=c(3307),a=Object;e.exports=r?function(e){return"symbol"==typeof e}:function(e){var t=n("Symbol");return i(t)&&s(t.prototype,a(e))}},6244:function(e,t,c){var n=c(7466);e.exports=function(e){return n(e.length)}},6339:function(e,t,c){var n=c(1702),i=c(7293),s=c(614),r=c(2597),a=c(9781),o=c(6530).CONFIGURABLE,l=c(2788),u=c(9909),f=u.enforce,h=u.get,d=String,p=Object.defineProperty,m=n("".slice),g=n("".replace),v=n([].join),z=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),H=String(String).split("String"),y=e.exports=function(e,t,c){"Symbol("===m(d(t),0,7)&&(t="["+g(d(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),c&&c.getter&&(t="get "+t),c&&c.setter&&(t="set "+t),(!r(e,"name")||o&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),z&&c&&r(c,"arity")&&e.length!==c.arity&&p(e,"length",{value:c.arity});try{c&&r(c,"constructor")&&c.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var n=f(e);return r(n,"source")||(n.source=v(H,"string"==typeof t?t:"")),e};Function.prototype.toString=y((function(){return s(this)&&h(this).source||l(this)}),"toString")},4758:function(e){var t=Math.ceil,c=Math.floor;e.exports=Math.trunc||function(e){var n=+e;return(n>0?c:t)(n)}},6277:function(e,t,c){var n=c(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:n(e)}},3070:function(e,t,c){var n=c(9781),i=c(4664),s=c(3353),r=c(9670),a=c(4948),o=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,f="enumerable",h="configurable",d="writable";t.f=n?s?function(e,t,c){if(r(e),t=a(t),r(c),"function"===typeof e&&"prototype"===t&&"value"in c&&d in c&&!c[d]){var n=u(e,t);n&&n[d]&&(e[t]=c.value,c={configurable:h in c?c[h]:n[h],enumerable:f in c?c[f]:n[f],writable:!1})}return l(e,t,c)}:l:function(e,t,c){if(r(e),t=a(t),r(c),i)try{return l(e,t,c)}catch(n){}if("get"in c||"set"in c)throw o("Accessors not supported");return"value"in c&&(e[t]=c.value),e}},1236:function(e,t,c){var n=c(9781),i=c(6916),s=c(5296),r=c(9114),a=c(5656),o=c(4948),l=c(2597),u=c(4664),f=Object.getOwnPropertyDescriptor;t.f=n?f:function(e,t){if(e=a(e),t=o(t),u)try{return f(e,t)}catch(c){}if(l(e,t))return r(!i(s.f,e,t),e[t])}},8006:function(e,t,c){var n=c(6324),i=c(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,c){var n=c(2597),i=c(614),s=c(7908),r=c(6200),a=c(8544),o=r("IE_PROTO"),l=Object,u=l.prototype;e.exports=a?l.getPrototypeOf:function(e){var t=s(e);if(n(t,o))return t[o];var c=t.constructor;return i(c)&&t instanceof c?c.prototype:t instanceof l?u:null}},7976:function(e,t,c){var n=c(1702);e.exports=n({}.isPrototypeOf)},6324:function(e,t,c){var n=c(1702),i=c(2597),s=c(5656),r=c(1318).indexOf,a=c(3501),o=n([].push);e.exports=function(e,t){var c,n=s(e),l=0,u=[];for(c in n)!i(a,c)&&i(n,c)&&o(u,c);while(t.length>l)i(n,c=t[l++])&&(~r(u,c)||o(u,c));return u}},5296:function(e,t){"use strict";var c={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,i=n&&!c.call({1:2},1);t.f=i?function(e){var t=n(this,e);return!!t&&t.enumerable}:c},7674:function(e,t,c){var n=c(5668),i=c(9670),s=c(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,c={};try{e=n(Object.prototype,"__proto__","set"),e(c,[]),t=c instanceof Array}catch(r){}return function(c,n){return i(c),s(n),t?e(c,n):c.__proto__=n,c}}():void 0)},2140:function(e,t,c){var n=c(6916),i=c(614),s=c(111),r=TypeError;e.exports=function(e,t){var c,a;if("string"===t&&i(c=e.toString)&&!s(a=n(c,e)))return a;if(i(c=e.valueOf)&&!s(a=n(c,e)))return a;if("string"!==t&&i(c=e.toString)&&!s(a=n(c,e)))return a;throw r("Can't convert object to primitive value")}},3887:function(e,t,c){var n=c(5005),i=c(1702),s=c(8006),r=c(5181),a=c(9670),o=i([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=s.f(a(e)),c=r.f;return c?o(t,c(e)):t}},4488:function(e,t,c){var n=c(8554),i=TypeError;e.exports=function(e){if(n(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,c){var n=c(2309),i=c(9711),s=n("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,c){var n=c(7854),i=c(3072),s="__core-js_shared__",r=n[s]||i(s,{});e.exports=r},2309:function(e,t,c){var n=c(1913),i=c(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.1",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,c){var n=c(7392),i=c(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},1400:function(e,t,c){var n=c(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var c=n(e);return c<0?i(c+t,0):s(c,t)}},4599:function(e,t,c){var n=c(7593),i=TypeError;e.exports=function(e){var t=n(e,"number");if("number"==typeof t)throw i("Can't convert number to bigint");return BigInt(t)}},5656:function(e,t,c){var n=c(8361),i=c(4488);e.exports=function(e){return n(i(e))}},9303:function(e,t,c){var n=c(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:n(t)}},7466:function(e,t,c){var n=c(9303),i=Math.min;e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},7908:function(e,t,c){var n=c(4488),i=Object;e.exports=function(e){return i(n(e))}},7593:function(e,t,c){var n=c(6916),i=c(111),s=c(2190),r=c(8173),a=c(2140),o=c(5112),l=TypeError,u=o("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var c,o=r(e,u);if(o){if(void 0===t&&(t="default"),c=n(o,e,t),!i(c)||s(c))return c;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,c){var n=c(7593),i=c(2190);e.exports=function(e){var t=n(e,"string");return i(t)?t:t+""}},1694:function(e,t,c){var n=c(5112),i=n("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,c){var n=c(648),i=String;e.exports=function(e){if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(c){return"Object"}}},9711:function(e,t,c){var n=c(1702),i=0,s=Math.random(),r=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+r(++i+s,36)}},3307:function(e,t,c){var n=c(6293);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,c){var n=c(9781),i=c(7293);e.exports=n&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,c){var n=c(7854),i=c(614),s=n.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},5112:function(e,t,c){var n=c(7854),i=c(2309),s=c(2597),r=c(9711),a=c(6293),o=c(3307),l=n.Symbol,u=i("wks"),f=o?l["for"]||l:l&&l.withoutSetter||r;e.exports=function(e){return s(u,e)||(u[e]=a&&s(l,e)?l[e]:f("Symbol."+e)),u[e]}},7658:function(e,t,c){"use strict";var n=c(2109),i=c(7908),s=c(6244),r=c(3658),a=c(7207),o=c(7293),l=o((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},f=l||!u();n({target:"Array",proto:!0,arity:1,forced:f},{push:function(e){var t=i(this),c=s(t),n=arguments.length;a(c+n);for(var o=0;o<n;o++)t[c]=arguments[o],c++;return r(t,c),c}})},541:function(e,t,c){"use strict";var n=c(2109),i=c(7908),s=c(6244),r=c(3658),a=c(5117),o=c(7207),l=1!==[].unshift(0),u=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},f=l||!u();n({target:"Array",proto:!0,arity:1,forced:f},{unshift:function(e){var t=i(this),c=s(t),n=arguments.length;if(n){o(c+n);var l=c;while(l--){var u=l+n;l in t?t[u]=t[l]:a(t,u)}for(var f=0;f<n;f++)t[f]=arguments[f]}return r(t,c+n)}})},1439:function(e,t,c){"use strict";var n=c(1843),i=c(260),s=i.aTypedArray,r=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;r("toReversed",(function(){return n(s(this),a(this))}))},7585:function(e,t,c){"use strict";var n=c(260),i=c(1702),s=c(9662),r=c(7745),a=n.aTypedArray,o=n.getTypedArrayConstructor,l=n.exportTypedArrayMethod,u=i(n.TypedArrayPrototype.sort);l("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),c=r(o(t),t);return u(c,e)}))},5315:function(e,t,c){"use strict";var n=c(1572),i=c(260),s=c(4067),r=c(9303),a=c(4599),o=i.aTypedArray,l=i.getTypedArrayConstructor,u=i.exportTypedArrayMethod,f=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();u("with",{with:function(e,t){var c=o(this),i=r(e),u=s(c)?a(t):+t;return n(c,l(c),i,u)}}["with"],!f)},3767:function(e,t,c){c(1439)},8585:function(e,t,c){c(7585)},8696:function(e,t,c){c(5315)},2801:function(e,t,c){"use strict";var n=c(2109),i=c(7854),s=c(5005),r=c(9114),a=c(3070).f,o=c(2597),l=c(5787),u=c(9587),f=c(6277),h=c(3678),d=c(1060),p=c(9781),m=c(1913),g="DOMException",v=s("Error"),z=s(g),H=function(){l(this,y);var e=arguments.length,t=f(e<1?void 0:arguments[0]),c=f(e<2?void 0:arguments[1],"Error"),n=new z(t,c),i=v(t);return i.name=g,a(n,"stack",r(1,d(i.stack,1))),u(n,this,H),n},y=H.prototype=z.prototype,V="stack"in v(g),C="stack"in new z(1,2),b=z&&p&&Object.getOwnPropertyDescriptor(i,g),w=!!b&&!(b.writable&&b.configurable),M=V&&!w&&!C;n({global:!0,constructor:!0,forced:m||M},{DOMException:M?H:z});var L=s(g),x=L.prototype;if(x.constructor!==L)for(var _ in m||a(x,"constructor",r(1,L)),h)if(o(h,_)){var k=h[_],N=k.s;o(L,N)||a(L,N,r(6,k.c))}},4470:function(e,t,c){"use strict";c.d(t,{$:function(){return Kt},A:function(){return l},B:function(){return Ec},D:function(){return h},I:function(){return Ke},J:function(){return Ze},L:function(){return pt},N:function(){return he},P:function(){return Jn},Q:function(){return wt},R:function(){return jn},U:function(){return _t},V:function(){return kt},W:function(){return Nt},X:function(){return xt},Y:function(){return Tt},Z:function(){return It},_:function(){return Dt},a:function(){return Zc},a0:function(){return Yt},a1:function(){return Qt},a2:function(){return Xt},a3:function(){return nc},a4:function(){return ic},a5:function(){return sc},a6:function(){return rc},a7:function(){return ac},a8:function(){return oc},a9:function(){return lc},aA:function(){return b},aB:function(){return _i},aC:function(){return ue},aD:function(){return de},aE:function(){return Mi},aF:function(){return mi},aG:function(){return pi},aH:function(){return qe},aL:function(){return cn},aO:function(){return At},aa:function(){return uc},ab:function(){return fc},ac:function(){return hc},ad:function(){return pc},ae:function(){return mc},af:function(){return gc},ai:function(){return zc},aj:function(){return Hc},ak:function(){return yc},an:function(){return jt},ao:function(){return kc},aq:function(){return Oc},ar:function(){return qc},as:function(){return M},at:function(){return be},au:function(){return ye},av:function(){return z},aw:function(){return rs},ax:function(){return Ai},ay:function(){return we},az:function(){return H},b:function(){return Jc},c:function(){return si},d:function(){return ai},e:function(){return ri},f:function(){return zi},g:function(){return Ci},h:function(){return yi},i:function(){return Mn},j:function(){return wi},k:function(){return us},l:function(){return Gn},m:function(){return ds},o:function(){return xs},p:function(){return o},r:function(){return Kn},s:function(){return Wn},u:function(){return Qn},x:function(){return Ac}});c(7658);var n=c(223),i=c(7077);function s(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(c[n[i]]=e[n[i]])}return c}Object.create;Object.create;var r=c(5168),a=c(7142);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function f(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h=u,d=f,p=new n.LL("auth","Firebase",f()),m=new r.Yd("@firebase/auth");function g(e,...t){m.logLevel<=r["in"].WARN&&m.warn(`Auth (${i.SDK_VERSION}): ${e}`,...t)}function v(e,...t){m.logLevel<=r["in"].ERROR&&m.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,...t){throw C(e,...t)}function H(e,...t){return C(e,...t)}function y(e,t,c){const i=Object.assign(Object.assign({},d()),{[t]:c}),s=new n.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function V(e,t,c){const n=c;if(!(t instanceof n))throw n.name!==t.constructor.name&&z(e,"argument-error"),y(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function C(e,...t){if("string"!==typeof e){const c=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(c,...n)}return p.create(e,...t)}function b(e,t,...c){if(!e)throw C(t,...c)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function M(e,t){e||w(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function x(){return"http:"===_()||"https:"===_()}function _(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(x()||(0,n.ru)()||"connection"in navigator))||navigator.onLine}function N(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.shortDelay=e,this.longDelay=t,M(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,n.uI)()||(0,n.b$)()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){M(e.emulator,"Emulator should always be set here");const{url:c}=e.emulator;return t?`${c}${t.startsWith("/")?t.slice(1):t}`:c}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{static initialize(e,t,c){this.fetchImpl=e,t&&(this.headersImpl=t),c&&(this.responseImpl=c)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},I=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,c,i,s={}){return R(e,s,(async()=>{let s={},r={};i&&("GET"===t?r=i:s={body:JSON.stringify(i)});const a=(0,n.xO)(Object.assign({key:e.config.apiKey},r)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),E.fetch()(F(e,e.config.apiHost,c,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},s))}))}async function R(e,t,c){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},T),t);try{const t=new U(e),n=await Promise.race([c(),t.promise]);t.clearNetworkTimeout();const s=await n.json();if("needConfirmation"in s)throw B(e,"account-exists-with-different-credential",s);if(n.ok&&!("errorMessage"in s))return s;{const t=n.ok?s.errorMessage:s.error.message,[c,r]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===c)throw B(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===c)throw B(e,"email-already-in-use",s);if("USER_DISABLED"===c)throw B(e,"user-disabled",s);const a=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(r)throw y(e,a,r);z(e,a)}}catch(s){if(s instanceof n.ZR)throw s;z(e,"network-request-failed",{message:String(s)})}}async function D(e,t,c,n,i={}){const s=await P(e,t,c,n,i);return"mfaPendingCredential"in s&&z(e,"multi-factor-auth-required",{_serverResponse:s}),s}function F(e,t,c,n){const i=`${t}${c}?${n}`;return e.config.emulator?A(e.config,i):`${e.config.apiScheme}://${i}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(H(this.auth,"network-request-failed"))),I.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(e,t,c){const n={appName:e.name};c.email&&(n.email=c.email),c.phoneNumber&&(n.phoneNumber=c.phoneNumber);const i=H(e,t,n);return i.customData._tokenResponse=c,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return P(e,"POST","/v1/accounts:update",t)}async function $(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t=!1){const c=(0,n.m9)(e),i=await c.getIdToken(t),s=Y(i);b(s&&s.exp&&s.auth_time&&s.iat,c.auth,"internal-error");const r="object"===typeof s.firebase?s.firebase:void 0,a=null===r||void 0===r?void 0:r["sign_in_provider"];return{claims:s,token:i,authTime:W(K(s.auth_time)),issuedAtTime:W(K(s.iat)),expirationTime:W(K(s.exp)),signInProvider:a||null,signInSecondFactor:(null===r||void 0===r?void 0:r["sign_in_second_factor"])||null}}function K(e){return 1e3*Number(e)}function Y(e){const[t,c,i]=e.split(".");if(void 0===t||void 0===c||void 0===i)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,n.tV)(c);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(s){return v("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function Q(e){const t=Y(e);return b(t,"internal-error"),b("undefined"!==typeof t.exp,"internal-error"),b("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t,c=!1){if(c)return t;try{return await t}catch(i){throw i instanceof n.ZR&&X(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function X({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,c=e-Date.now()-3e5;return Math.max(0,c)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e){var t;const c=e.auth,n=await e.getIdToken(),i=await J(e,$(c,{idToken:n}));b(null===i||void 0===i?void 0:i.users.length,c,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const r=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ie(s.providerUserInfo):[],a=ne(e.providerData,r),o=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!o&&l,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ee(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function ce(e){const t=(0,n.m9)(e);await te(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ne(e,t){const c=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...c,...t]}function ie(e){return e.map((e=>{var{providerId:t}=e,c=s(e,["providerId"]);return{providerId:t,uid:c.rawId||"",displayName:c.displayName||null,email:c.email||null,phoneNumber:c.phoneNumber||null,photoURL:c.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(e,t){const c=await R(e,{},(async()=>{const c=(0,n.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=F(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",E.fetch()(r,{method:"POST",headers:a,body:c})}));return{accessToken:c.access_token,expiresIn:c.expires_in,refreshToken:c.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b("undefined"!==typeof e.idToken,"internal-error"),b("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Q(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:c,refreshToken:n,expiresIn:i}=await se(e,t);this.updateTokensAndExpiration(c,n,Number(i))}updateTokensAndExpiration(e,t,c){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*c}static fromJSON(e,t){const{refreshToken:c,accessToken:n,expirationTime:i}=t,s=new re;return c&&(b("string"===typeof c,"internal-error",{appName:e}),s.refreshToken=c),n&&(b("string"===typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(b("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){b("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:c,stsTokenManager:n}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=c,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ee(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return G(this,e)}reload(){return ce(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let c=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),c=!0),t&&await te(this),await this.auth._persistUserIfCurrent(this),c&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await J(this,j(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var c,n,i,s,r,a,o,l;const u=null!==(c=t.displayName)&&void 0!==c?c:void 0,f=null!==(n=t.email)&&void 0!==n?n:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(r=t.tenantId)&&void 0!==r?r:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(o=t.createdAt)&&void 0!==o?o:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:z,emailVerified:H,isAnonymous:y,providerData:V,stsTokenManager:C}=t;b(z&&C,e,"internal-error");const w=re.fromJSON(this.name,C);b("string"===typeof z,e,"internal-error"),ae(u,e.name),ae(f,e.name),b("boolean"===typeof H,e,"internal-error"),b("boolean"===typeof y,e,"internal-error"),ae(h,e.name),ae(d,e.name),ae(p,e.name),ae(m,e.name),ae(g,e.name),ae(v,e.name);const M=new oe({uid:z,auth:e,email:f,emailVerified:H,displayName:u,isAnonymous:y,photoURL:d,phoneNumber:h,tenantId:p,stsTokenManager:w,createdAt:g,lastLoginAt:v});return V&&Array.isArray(V)&&(M.providerData=V.map((e=>Object.assign({},e)))),m&&(M._redirectEventId=m),M}static async _fromIdTokenResponse(e,t,c=!1){const n=new re;n.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:c});return await te(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map;function ue(e){M(e instanceof Function,"Expected a class definition");let t=le.get(e);return t?(M(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,le.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fe.type="NONE";const he=fe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e,t,c){return`firebase:${e}:${t}:${c}`}class pe{constructor(e,t,c){this.persistence=e,this.auth=t,this.userKey=c;const{config:n,name:i}=this.auth;this.fullUserKey=de(this.userKey,n.apiKey,i),this.fullPersistenceKey=de("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,c="authUser"){if(!t.length)return new pe(ue(he),e,c);const n=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=n[0]||ue(he);const s=de(c,e.config.apiKey,e.name);let r=null;for(const l of t)try{const t=await l._get(s);if(t){const c=oe._fromJSON(e,t);l!==i&&(r=c),i=l;break}}catch(o){}const a=n.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],r&&await i._set(s,r.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(o){}}))),new pe(i,e,c)):new pe(i,e,c)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(He(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ve(t))return"Blackberry";if(Ce(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||ze(t))&&!t.includes("edge/"))return"Chrome";if(ye(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,c=e.match(t);if(2===(null===c||void 0===c?void 0:c.length))return c[1]}return"Other"}function ge(e=(0,n.z$)()){return/firefox\//i.test(e)}function ve(e=(0,n.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ze(e=(0,n.z$)()){return/crios\//i.test(e)}function He(e=(0,n.z$)()){return/iemobile/i.test(e)}function ye(e=(0,n.z$)()){return/android/i.test(e)}function Ve(e=(0,n.z$)()){return/blackberry/i.test(e)}function Ce(e=(0,n.z$)()){return/webos/i.test(e)}function be(e=(0,n.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function we(e=(0,n.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Me(e=(0,n.z$)()){var t;return be(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Le(){return(0,n.w1)()&&10===document.documentMode}function xe(e=(0,n.z$)()){return be(e)||ye(e)||Ce(e)||Ve(e)||/windows phone/i.test(e)||He(e)}function _e(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e,t=[]){let c;switch(e){case"Browser":c=me((0,n.z$)());break;case"Worker":c=`${me((0,n.z$)())}-${e}`;break;default:c=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${c}/JsCore/${i.SDK_VERSION}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e){return(await P(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Se(e,t){return P(e,"GET","/v2/recaptchaConfig",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e){return void 0!==e&&void 0!==e.getResponse}function Ee(e){return void 0!==e&&void 0!==e.enterprise}class Te{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Oe(e){return new Promise(((t,c)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=H("internal-error");t.customData=e,c(t)},n.type="text/javascript",n.charset="UTF-8",Ie().appendChild(n)}))}function Pe(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Re="https://www.google.com/recaptcha/enterprise.js?render=",De="recaptcha-enterprise";class Fe{constructor(e){this.type=De,this.auth=qe(e)}async verify(e="verify",t=!1){async function c(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,c)=>{Se(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((n=>{if(void 0!==n.recaptchaKey){const c=new Te(n);return null==e.tenantId?e._agentRecaptchaConfig=c:e._tenantRecaptchaConfigs[e.tenantId]=c,t(c.siteKey)}c(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{c(e)}))}))}function n(t,c,n){const i=window.grecaptcha;Ee(i)?i.enterprise.ready((()=>{try{i.enterprise.execute(t,{action:e}).then((e=>{c(e)})).catch((e=>{n(e)}))}catch(s){n(s)}})):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{c(this.auth).then((c=>{if(!t&&Ee(window.grecaptcha))n(c,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Oe(Re+c).then((()=>{n(c,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Ue(e,t,c,n=!1){const i=new Fe(e);let s;try{s=await i.verify(c)}catch(a){s=await i.verify(c,!0)}const r=Object.assign({},t);return n?Object.assign(r,{captchaResp:s}):Object.assign(r,{captchaResponse:s}),Object.assign(r,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(r,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),r}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const c=t=>new Promise(((c,n)=>{try{const n=e(t);c(n)}catch(i){n(i)}}));c.onAbort=t,this.queue.push(c);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const c of this.queue)await c(e),c.onAbort&&t.push(c.onAbort)}catch(c){t.reverse();for(const e of t)try{e()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===c||void 0===c?void 0:c.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,c,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=c,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $e(this),this.idTokenSubscription=new $e(this),this.beforeStateQueue=new Be(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ue(t)),this._initializationPromise=this.queue((async()=>{var c,n;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(c=this._popupRedirectResolver)||void 0===c?void 0:c._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const c=await this.assertedPersistence.getCurrentUser();let n=c,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===n||void 0===n?void 0:n._redirectEventId,r=await this.tryRedirectSignIn(e);c&&c!==s||!(null===r||void 0===r?void 0:r.user)||(n=r.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(s){n=c,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(c){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await te(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,n.m9)(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ue(e))}))}async initializeRecaptchaConfig(){const e=await Se(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Te(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Fe(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new n.LL("auth","Firebase",e())}onAuthStateChanged(e,t,c){return this.registerStateListener(this.authStateSubscription,e,t,c)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,c){return this.registerStateListener(this.idTokenSubscription,e,t,c)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const c=await this.getOrInitRedirectPersistenceManager(t);return null===e?c.removeCurrentUser():c.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ue(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[ue(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,c;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(c=this.redirectUser)||void 0===c?void 0:c._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const c=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==c&&(this.lastNotifiedUid=c,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,c,n){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return b(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,c,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ke(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const c=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());c&&(t["X-Firebase-Client"]=c);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&g(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function qe(e){return(0,n.m9)(e)}class $e{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,n.ne)((e=>this.observer=e))}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e,t){const c=(0,i._getProvider)(e,"auth");if(c.isInitialized()){const e=c.getImmediate(),i=c.getOptions();if((0,n.vZ)(i,null!==t&&void 0!==t?t:{}))return e;z(e,"already-initialized")}const s=c.initialize({options:t});return s}function Ge(e,t){const c=(null===t||void 0===t?void 0:t.persistence)||[],n=(Array.isArray(c)?c:[c]).map(ue);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ke(e,t,c){const n=qe(e);b(n._canInitEmulator,n,"emulator-config-failed"),b(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const i=!!(null===c||void 0===c?void 0:c.disableWarnings),s=Ye(t),{host:r,port:a}=Qe(t),o=null===a?"":`:${a}`;n.config.emulator={url:`${s}//${r}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:r,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Xe()}function Ye(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Qe(e){const t=Ye(e),c=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!c)return{host:"",port:null};const n=c[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const e=i[1];return{host:e,port:Je(n.substr(e.length+1))}}{const[e,t]=n.split(":");return{host:e,port:Je(t)}}}function Je(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Xe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return P(e,"POST","/v1/accounts:resetPassword",O(e,t))}async function tt(e,t){return P(e,"POST","/v1/accounts:update",t)}async function ct(e,t){return P(e,"POST","/v1/accounts:update",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",O(e,t))}async function it(e,t){return P(e,"POST","/v1/accounts:sendOobCode",O(e,t))}async function st(e,t){return it(e,t)}async function rt(e,t){return it(e,t)}async function at(e,t){return it(e,t)}async function ot(e,t){return it(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}async function ut(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Ze{constructor(e,t,c,n=null){super("password",c),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new ft(e,t,"password")}static _fromEmailAndCode(e,t,c=null){return new ft(e,t,"emailLink",c)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const c={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Ue(e,c,"signInWithPassword");return nt(e,t)}return nt(e,c).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Ue(e,c,"signInWithPassword");return nt(e,t)}return Promise.reject(t)}));case"emailLink":return lt(e,{email:this._email,oobCode:this._password});default:z(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return tt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ut(e,{idToken:t,email:this._email,oobCode:this._password});default:z(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="http://localhost";class pt extends Ze{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):z("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:c,signInMethod:n}=t,i=s(t,["providerId","signInMethod"]);if(!c||!n)return null;const r=new pt(c,n);return r.idToken=i.idToken||void 0,r.accessToken=i.accessToken||void 0,r.secret=i.secret,r.nonce=i.nonce,r.pendingToken=i.pendingToken||null,r}_getIdTokenResponse(e){const t=this.buildRequest();return ht(e,t)}_linkToIdToken(e,t){const c=this.buildRequest();return c.idToken=t,ht(e,c)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ht(e,t)}buildRequest(){const e={requestUri:dt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,n.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",O(e,t))}async function gt(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t))}async function vt(e,t){const c=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t));if(c.temporaryProof)throw B(e,"account-exists-with-different-credential",c);return c}const zt={["USER_NOT_FOUND"]:"user-not-found"};async function Ht(e,t){const c=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,c),zt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Ze{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new yt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new yt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return gt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return vt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ht(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:c,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:c,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:c,phoneNumber:n,temporaryProof:i}=e;return c||t||n||i?new yt({verificationId:t,verificationCode:c,phoneNumber:n,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ct(e){const t=(0,n.zd)((0,n.pd)(e))["link"],c=t?(0,n.zd)((0,n.pd)(t))["deep_link_id"]:null,i=(0,n.zd)((0,n.pd)(e))["deep_link_id"],s=i?(0,n.zd)((0,n.pd)(i))["link"]:null;return s||i||c||t||e}class bt{constructor(e){var t,c,i,s,r,a;const o=(0,n.zd)((0,n.pd)(e)),l=null!==(t=o["apiKey"])&&void 0!==t?t:null,u=null!==(c=o["oobCode"])&&void 0!==c?c:null,f=Vt(null!==(i=o["mode"])&&void 0!==i?i:null);b(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=null!==(s=o["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(r=o["languageCode"])&&void 0!==r?r:null,this.tenantId=null!==(a=o["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Ct(e);try{return new bt(t)}catch(c){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(){this.providerId=wt.PROVIDER_ID}static credential(e,t){return ft._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const c=bt.parseLink(t);return b(c,"argument-error"),ft._fromEmailAndCode(e,c.code,c.tenantId)}}wt.PROVIDER_ID="password",wt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",wt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Mt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class xt extends Lt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return b("providerId"in t&&"signInMethod"in t,"argument-error"),pt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return b(e.idToken||e.accessToken,"argument-error"),pt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return xt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return xt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:c,oauthTokenSecret:n,pendingToken:i,nonce:s,providerId:r}=e;if(!c&&!n&&!t&&!i)return null;if(!r)return null;try{return new xt(r)._credential({idToken:t,accessToken:c,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Lt{constructor(){super("facebook.com")}static credential(e){return pt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch(t){return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com",_t.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends Lt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:c}=e;if(!t&&!c)return null;try{return kt.credential(t,c)}catch(n){return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com",kt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt extends Lt{constructor(){super("github.com")}static credential(e){return pt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch(t){return null}}}Nt.GITHUB_SIGN_IN_METHOD="github.com",Nt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const St="http://localhost";class At extends Ze{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return ht(e,t)}_linkToIdToken(e,t){const c=this.buildRequest();return c.idToken=t,ht(e,c)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ht(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:c,signInMethod:n,pendingToken:i}=t;return c&&n&&i&&c===n?new At(c,i):null}static _create(e,t){return new At(e,t)}buildRequest(){return{requestUri:St,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="saml.";class Tt extends Mt{constructor(e){b(e.startsWith(Et),"argument-error"),super(e)}static credentialFromResult(e){return Tt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Tt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=At.fromJSON(e);return b(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:c}=e;if(!t||!c)return null;try{return At._create(c,t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Lt{constructor(){super("twitter.com")}static credential(e,t){return pt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:c}=e;if(!t||!c)return null;try{return It.credential(t,c)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ot(e,t){return D(e,"POST","/v1/accounts:signUp",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.TWITTER_SIGN_IN_METHOD="twitter.com",It.PROVIDER_ID="twitter.com";class Pt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,c,n=!1){const i=await oe._fromIdTokenResponse(e,c,n),s=Rt(c),r=new Pt({user:i,providerId:s,_tokenResponse:c,operationType:t});return r}static async _forOperation(e,t,c){await e._updateTokensIfNecessary(c,!0);const n=Rt(c);return new Pt({user:e,providerId:n,_tokenResponse:c,operationType:t})}}function Rt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e){var t;const c=qe(e);if(await c._initializationPromise,null===(t=c.currentUser)||void 0===t?void 0:t.isAnonymous)return new Pt({user:c.currentUser,providerId:null,operationType:"signIn"});const n=await Ot(c,{returnSecureToken:!0}),i=await Pt._fromIdTokenResponse(c,"signIn",n,!0);return await c._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends n.ZR{constructor(e,t,c,n){var i;super(t.code,t.message),this.operationType=c,this.user=n,Object.setPrototypeOf(this,Ft.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:c}}static _fromErrorAndOperation(e,t,c,n){return new Ft(e,t,c,n)}}function Ut(e,t,c,n){const i="reauthenticate"===t?c._getReauthenticationResolver(e):c._getIdTokenResponse(e);return i.catch((c=>{if("auth/multi-factor-auth-required"===c.code)throw Ft._fromErrorAndOperation(e,c,t,n);throw c}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e,t){const c=(0,n.m9)(e);await $t(!0,c,t);const{providerUserInfo:i}=await q(c.auth,{idToken:await c.getIdToken(),deleteProvider:[t]}),s=Bt(i||[]);return c.providerData=c.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(c.phoneNumber=null),await c.auth._persistUserIfCurrent(c),c}async function qt(e,t,c=!1){const n=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),c);return Pt._forOperation(e,"link",n)}async function $t(e,t,c){await te(t);const n=Bt(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";b(n.has(c)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(e,t,c=!1){const{auth:n}=e,i="reauthenticate";try{const s=await J(e,Ut(n,i,t,e),c);b(s.idToken,n,"internal-error");const r=Y(s.idToken);b(r,n,"internal-error");const{sub:a}=r;return b(e.uid===a,n,"user-mismatch"),Pt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&z(n,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(e,t,c=!1){const n="signIn",i=await Ut(e,n,t),s=await Pt._fromIdTokenResponse(e,n,i);return c||await e._updateCurrentUser(s.user),s}async function Kt(e,t){return Gt(qe(e),t)}async function Yt(e,t){const c=(0,n.m9)(e);return await $t(!1,c,t.providerId),qt(c,t)}async function Qt(e,t){return Wt((0,n.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(e,t){return D(e,"POST","/v1/accounts:signInWithCustomToken",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){const c=qe(e),n=await Jt(c,{token:t,returnSecureToken:!0}),i=await Pt._fromIdTokenResponse(c,"signIn",n);return await c._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?ec._fromServerResponse(e,t):"totpInfo"in t?tc._fromServerResponse(e,t):z(e,"internal-error")}}class ec extends Zt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new ec(t)}}class tc extends Zt{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new tc(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(e,t,c){var n;b((null===(n=c.url)||void 0===n?void 0:n.length)>0,e,"invalid-continue-uri"),b("undefined"===typeof c.dynamicLinkDomain||c.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=c.url,t.dynamicLinkDomain=c.dynamicLinkDomain,t.canHandleCodeInApp=c.handleCodeInApp,c.iOS&&(b(c.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=c.iOS.bundleId),c.android&&(b(c.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=c.android.installApp,t.androidMinimumVersionCode=c.android.minimumVersion,t.androidPackageName=c.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(e,t,c){var n;const i=qe(e),s={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(n=i._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){const e=await Ue(i,s,"getOobCode",!0);c&&cc(i,e,c),await rt(i,e)}else c&&cc(i,s,c),await rt(i,s).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await Ue(i,s,"getOobCode",!0);c&&cc(i,e,c),await rt(i,e)}}))}async function ic(e,t,c){await et((0,n.m9)(e),{oobCode:t,newPassword:c})}async function sc(e,t){await ct((0,n.m9)(e),{oobCode:t})}async function rc(e,t){const c=(0,n.m9)(e),i=await et(c,{oobCode:t}),s=i.requestType;switch(b(s,c,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":b(i.newEmail,c,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":b(i.mfaInfo,c,"internal-error");default:b(i.email,c,"internal-error")}let r=null;return i.mfaInfo&&(r=Zt._fromServerResponse(qe(c),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:r},operation:s}}async function ac(e,t){const{data:c}=await rc((0,n.m9)(e),t);return c.email}async function oc(e,t,c){var n;const i=qe(e),s={returnSecureToken:!0,email:t,password:c,clientType:"CLIENT_TYPE_WEB"};let r;if(null===(n=i._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){const e=await Ue(i,s,"signUpPassword");r=Ot(i,e)}else r=Ot(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Ue(i,s,"signUpPassword");return Ot(i,e)}return Promise.reject(e)}));const a=await r.catch((e=>Promise.reject(e))),o=await Pt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(o.user),o}function lc(e,t,c){return Kt((0,n.m9)(e),wt.credential(t,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(e,t,c){var n;const i=qe(e),s={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function r(e,t){b(t.handleCodeInApp,i,"argument-error"),t&&cc(i,e,t)}if(null===(n=i._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){const e=await Ue(i,s,"getOobCode",!0);r(e,c),await at(i,e)}else r(s,c),await at(i,s).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await Ue(i,s,"getOobCode",!0);r(e,c),await at(i,e)}}))}function fc(e,t){const c=bt.parseLink(t);return"EMAIL_SIGNIN"===(null===c||void 0===c?void 0:c.operation)}async function hc(e,t,c){const i=(0,n.m9)(e),s=wt.credentialWithLink(t,c||L());return b(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Kt(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(e,t){return P(e,"POST","/v1/accounts:createAuthUri",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(e,t){const c=x()?L():"http://localhost",i={identifier:t,continueUri:c},{signinMethods:s}=await dc((0,n.m9)(e),i);return s||[]}async function mc(e,t){const c=(0,n.m9)(e),i=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};t&&cc(c.auth,s,t);const{email:r}=await st(c.auth,s);r!==e.email&&await e.reload()}async function gc(e,t,c){const i=(0,n.m9)(e),s=await e.getIdToken(),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};c&&cc(i.auth,r,c);const{email:a}=await ot(i.auth,r);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(e,t){return P(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zc(e,{displayName:t,photoURL:c}){if(void 0===t&&void 0===c)return;const i=(0,n.m9)(e),s=await i.getIdToken(),r={idToken:s,displayName:t,photoUrl:c,returnSecureToken:!0},a=await J(i,vc(i.auth,r));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const o=i.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=i.displayName,o.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function Hc(e,t){return Vc((0,n.m9)(e),t,null)}function yc(e,t){return Vc((0,n.m9)(e),null,t)}async function Vc(e,t,c){const{auth:n}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),c&&(s.password=c);const r=await J(e,tt(n,s));await e._updateTokensIfNecessary(r,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(e){var t,c;if(!e)return null;const{providerId:n}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!n&&(null===e||void 0===e?void 0:e.idToken)){const n=null===(c=null===(t=Y(e.idToken))||void 0===t?void 0:t.firebase)||void 0===c?void 0:c["sign_in_provider"];if(n){const e="anonymous"!==n&&"custom"!==n?n:null;return new bc(s,e)}}if(!n)return null;switch(n){case"facebook.com":return new Mc(s,i);case"github.com":return new Lc(s,i);case"google.com":return new xc(s,i);case"twitter.com":return new _c(s,i,e.screenName||null);case"custom":case"anonymous":return new bc(s,null);default:return new bc(s,n,i)}}class bc{constructor(e,t,c={}){this.isNewUser=e,this.providerId=t,this.profile=c}}class wc extends bc{constructor(e,t,c,n){super(e,t,c),this.username=n}}class Mc extends bc{constructor(e,t){super(e,"facebook.com",t)}}class Lc extends wc{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class xc extends bc{constructor(e,t){super(e,"google.com",t)}}class _c extends wc{constructor(e,t,c){super(e,"twitter.com",t,c)}}function kc(e){const{user:t,_tokenResponse:c}=e;return t.isAnonymous&&!c?{providerId:null,isNewUser:!1,profile:null}:Cc(c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(e,t,c,i){return(0,n.m9)(e).onIdTokenChanged(t,c,i)}function Sc(e,t,c){return(0,n.m9)(e).beforeAuthStateChanged(t,c)}function Ac(e,t,c,i){return(0,n.m9)(e).onAuthStateChanged(t,c,i)}function Ec(e){return(0,n.m9)(e).signOut()}class Tc{constructor(e,t,c){this.type=e,this.credential=t,this.auth=c}static _fromIdtoken(e,t){return new Tc("enroll",e,t)}static _fromMfaPendingCredential(e){return new Tc("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,c;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Tc._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(c=e.multiFactorSession)||void 0===c?void 0:c.idToken)return Tc._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t,c){this.session=e,this.hints=t,this.signInResolver=c}static _fromError(e,t){const c=qe(e),n=t.customData._serverResponse,i=(n.mfaInfo||[]).map((e=>Zt._fromServerResponse(c,e)));b(n.mfaPendingCredential,c,"internal-error");const s=Tc._fromMfaPendingCredential(n.mfaPendingCredential);return new Ic(s,i,(async e=>{const i=await e._process(c,s);delete n.mfaInfo,delete n.mfaPendingCredential;const r=Object.assign(Object.assign({},n),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Pt._fromIdTokenResponse(c,t.operationType,r);return await c._updateCurrentUser(e.user),e;case"reauthenticate":return b(t.user,c,"internal-error"),Pt._forOperation(t.user,t.operationType,r);default:z(c,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Oc(e,t){var c;const i=(0,n.m9)(e),s=t;return b(t.customData.operationType,i,"argument-error"),b(null===(c=s.customData._serverResponse)||void 0===c?void 0:c.mfaPendingCredential,i,"argument-error"),Ic._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",O(e,t))}function Rc(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",O(e,t))}function Dc(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",O(e,t))}function Fc(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",O(e,t))}function Uc(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:withdraw",O(e,t))}class Bc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Zt._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Bc(e)}async getSession(){return Tc._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const c=e,n=await this.getSession(),i=await J(this.user,c._process(this.user.auth,n,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,c=await this.user.getIdToken();try{const e=await J(this.user,Uc(this.user.auth,{idToken:c,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(n){throw n}}}const jc=new WeakMap;function qc(e){const t=(0,n.m9)(e);return jc.has(t)||jc.set(t,Bc._fromUser(t)),jc.get(t)}const $c="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($c,"1"),this.storage.removeItem($c),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(){const e=(0,n.z$)();return ve(e)||be(e)}const Kc=1e3,Yc=10;class Qc extends Wc{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Gc()&&_e(),this.fallbackToPolling=xe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const c=this.storage.getItem(t),n=this.localCache[t];c!==n&&e(t,n,c)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,c)=>{this.notifyListeners(e,c)}));const c=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(c);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(c,e.newValue):this.storage.removeItem(c);else if(this.localCache[c]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(c);(t||this.localCache[c]!==e)&&this.notifyListeners(c,e)},i=this.storage.getItem(c);Le()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,Yc):n()}notifyListeners(e,t){this.localCache[e]=t;const c=this.listeners[e];if(c)for(const n of Array.from(c))n(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,c)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:c}),!0)}))}),Kc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qc.type="LOCAL";const Jc=Qc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends Wc{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xc.type="SESSION";const Zc=Xc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const c=new tn(e);return this.receivers.push(c),c}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:c,eventType:n,data:i}=t.data,s=this.handlersMap[n];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:c,eventType:n});const r=Array.from(s).map((async e=>e(t.origin,i))),a=await en(r);t.ports[0].postMessage({status:"done",eventId:c,eventType:n,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cn(e="",t=10){let c="";for(let n=0;n<t;n++)c+=Math.floor(10*Math.random());return e+c}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.receivers=[];class nn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,c=50){const n="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let i,s;return new Promise(((r,a)=>{const o=cn("",20);n.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),c);s={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===o)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),r(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:o,data:t},[n.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function rn(e){sn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return"undefined"!==typeof sn()["WorkerGlobalScope"]&&"function"===typeof sn()["importScripts"]}async function on(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function ln(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function un(){return an()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="firebaseLocalStorageDb",hn=1,dn="firebaseLocalStorage",pn="fbase_key";class mn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function gn(e,t){return e.transaction([dn],t?"readwrite":"readonly").objectStore(dn)}function vn(){const e=indexedDB.deleteDatabase(fn);return new mn(e).toPromise()}function zn(){const e=indexedDB.open(fn,hn);return new Promise(((t,c)=>{e.addEventListener("error",(()=>{c(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(dn,{keyPath:pn})}catch(n){c(n)}})),e.addEventListener("success",(async()=>{const c=e.result;c.objectStoreNames.contains(dn)?t(c):(c.close(),await vn(),t(await zn()))}))}))}async function Hn(e,t,c){const n=gn(e,!0).put({[pn]:t,value:c});return new mn(n).toPromise()}async function yn(e,t){const c=gn(e,!1).get(t),n=await new mn(c).toPromise();return void 0===n?null:n.value}function Vn(e,t){const c=gn(e,!0).delete(t);return new mn(c).toPromise()}const Cn=800,bn=3;class wn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await zn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(c){if(t++>bn)throw c;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return an()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tn._getInstance(un()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const c=await this._poll();return{keyProcessed:c.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await on(),!this.activeServiceWorker)return;this.sender=new nn(this.activeServiceWorker);const c=await this.sender._send("ping",{},800);c&&(null===(e=c[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=c[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&ln()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zn();return await Hn(e,$c,"1"),await Vn(e,$c),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((c=>Hn(c,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>yn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Vn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=gn(e,!1).getAll();return new mn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],c=new Set;for(const{fbase_key:n,value:i}of e)c.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!c.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const c=this.listeners[e];if(c)for(const n of Array.from(c))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Cn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}wn.type="LOCAL";const Mn=wn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",O(e,t))}function xn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",O(e,t))}function _n(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=500,Nn=6e4,Sn=1e12;class An{constructor(e){this.auth=e,this.counter=Sn,this._widgets=new Map}render(e,t){const c=this.counter;return this._widgets.set(c,new En(e,this.auth.name,t||{})),this.counter++,c}reset(e){var t;const c=e||Sn;null===(t=this._widgets.get(c))||void 0===t||t.delete(),this._widgets.delete(c)}getResponse(e){var t;const c=e||Sn;return(null===(t=this._widgets.get(c))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const c=e||Sn;return null===(t=this._widgets.get(c))||void 0===t||t.execute(),""}}class En{constructor(e,t,c){this.params=c,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const n="string"===typeof e?document.getElementById(e):e;b(n,"argument-error",{appName:t}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=Tn(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(c){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(c){}this.isVisible&&this.execute()}),Nn)}),kn))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Tn(e){const t=[],c="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<e;n++)t.push(c.charAt(Math.floor(Math.random()*c.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=Pe("rcb"),On=new S(3e4,6e4),Pn="https://www.google.com/recaptcha/api.js?";class Rn{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=sn().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return b(Dn(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Ae(sn().grecaptcha)?Promise.resolve(sn().grecaptcha):new Promise(((c,i)=>{const s=sn().setTimeout((()=>{i(H(e,"network-request-failed"))}),On.get());sn()[In]=()=>{sn().clearTimeout(s),delete sn()[In];const n=sn().grecaptcha;if(!n||!Ae(n))return void i(H(e,"internal-error"));const r=n.render;n.render=(e,t)=>{const c=r(e,t);return this.counter++,c},this.hostLanguage=t,c(n)};const r=`${Pn}?${(0,n.xO)({onload:In,render:"explicit",hl:t})}`;Oe(r).catch((()=>{clearTimeout(s),i(H(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=sn().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Dn(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Fn{async load(e){return new An(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="recaptcha",Bn={theme:"light",type:"image"};class jn{constructor(e,t=Object.assign({},Bn),c){this.parameters=t,this.type=Un,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=qe(c),this.isInvisible="invisible"===this.parameters.size,b("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const n="string"===typeof e?document.getElementById(e):e;b(n,this.auth,"argument-error"),this.container=n,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Fn:new Rn,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),c=t.getResponse(e);return c||new Promise((c=>{const n=e=>{e&&(this.tokenChangeListeners.delete(n),c(e))};this.tokenChangeListeners.add(n),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){b(!this.parameters.sitekey,this.auth,"argument-error"),b(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),b("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const c=sn()[e];"function"===typeof c&&c(t)}}}assertNotDestroyed(){b(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){b(x()&&!an(),this.auth,"internal-error"),await qn(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Ne(this.auth);b(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return b(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function qn(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=yt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Wn(e,t,c){const i=qe(e),s=await Yn(i,t,(0,n.m9)(c));return new $n(s,(e=>Kt(i,e)))}async function Gn(e,t,c){const i=(0,n.m9)(e);await $t(!1,i,"phone");const s=await Yn(i.auth,t,(0,n.m9)(c));return new $n(s,(e=>Yt(i,e)))}async function Kn(e,t,c){const i=(0,n.m9)(e),s=await Yn(i.auth,t,(0,n.m9)(c));return new $n(s,(e=>Qt(i,e)))}async function Yn(e,t,c){var n;const i=await c.verify();try{let s;if(b("string"===typeof i,e,"argument-error"),b(c.type===Un,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){b("enroll"===t.type,e,"internal-error");const c=await Pc(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return c.phoneSessionInfo.sessionInfo}{b("signin"===t.type,e,"internal-error");const c=(null===(n=s.multiFactorHint)||void 0===n?void 0:n.uid)||s.multiFactorUid;b(c,e,"missing-multi-factor-info");const r=await Ln(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:i}});return r.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await mt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{c._reset()}}async function Qn(e,t){await qt((0,n.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.providerId=Jn.PROVIDER_ID,this.auth=qe(e)}verifyPhoneNumber(e,t){return Yn(this.auth,e,(0,n.m9)(t))}static credential(e,t){return yt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Jn.credentialFromTaggedObject(t)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:c}=e;return t&&c?yt._fromTokenResponse(t,c):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xn(e,t){return t?ue(t):(b(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn.PROVIDER_ID="phone",Jn.PHONE_SIGN_IN_METHOD="phone";class Zn extends Ze{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ht(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ht(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ht(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ei(e){return Gt(e.auth,new Zn(e),e.bypassAuthState)}function ti(e){const{auth:t,user:c}=e;return b(c,t,"internal-error"),Wt(c,new Zn(e),e.bypassAuthState)}async function ci(e){const{auth:t,user:c}=e;return b(c,t,"internal-error"),qt(c,new Zn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,c,n,i=!1){this.auth=e,this.resolver=c,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(c){this.reject(c)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:c,postBody:n,tenantId:i,error:s,type:r}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:c,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(r)(a))}catch(o){this.reject(o)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ei;case"linkViaPopup":case"linkViaRedirect":return ci;case"reauthViaPopup":case"reauthViaRedirect":return ti;default:z(this.auth,"internal-error")}}resolve(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new S(2e3,1e4);async function si(e,t,c){const n=qe(e);V(e,t,Mt);const i=Xn(n,c),s=new oi(n,"signInViaPopup",t,i);return s.executeNotNull()}async function ri(e,t,c){const i=(0,n.m9)(e);V(i.auth,t,Mt);const s=Xn(i.auth,c),r=new oi(i.auth,"reauthViaPopup",t,s,i);return r.executeNotNull()}async function ai(e,t,c){const i=(0,n.m9)(e);V(i.auth,t,Mt);const s=Xn(i.auth,c),r=new oi(i.auth,"linkViaPopup",t,s,i);return r.executeNotNull()}class oi extends ni{constructor(e,t,c,n,i){super(e,t,n,i),this.provider=c,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){M(1===this.filter.length,"Popup operations only handle one event");const e=cn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(H(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(H(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,c;(null===(c=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===c?void 0:c.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(H(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,ii.get())};e()}}oi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const li="pendingRedirect",ui=new Map;class fi extends ni{constructor(e,t,c=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,c),this.eventId=null}async execute(){let e=ui.get(this.auth._key());if(!e){try{const t=await hi(this.resolver,this.auth),c=t?await super.execute():null;e=()=>Promise.resolve(c)}catch(t){e=()=>Promise.reject(t)}ui.set(this.auth._key(),e)}return this.bypassAuthState||ui.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function hi(e,t){const c=vi(t),n=gi(e);if(!await n._isAvailable())return!1;const i="true"===await n._get(c);return await n._remove(c),i}async function di(e,t){return gi(e)._set(vi(t),"true")}function pi(){ui.clear()}function mi(e,t){ui.set(e._key(),t)}function gi(e){return ue(e._redirectPersistence)}function vi(e){return de(li,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e,t,c){return Hi(e,t,c)}async function Hi(e,t,c){const n=qe(e);V(e,t,Mt),await n._initializationPromise;const i=Xn(n,c);return await di(i,n),i._openRedirect(n,t,"signInViaRedirect")}function yi(e,t,c){return Vi(e,t,c)}async function Vi(e,t,c){const i=(0,n.m9)(e);V(i.auth,t,Mt),await i.auth._initializationPromise;const s=Xn(i.auth,c);await di(s,i.auth);const r=await Li(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",r)}function Ci(e,t,c){return bi(e,t,c)}async function bi(e,t,c){const i=(0,n.m9)(e);V(i.auth,t,Mt),await i.auth._initializationPromise;const s=Xn(i.auth,c);await $t(!1,i,t.providerId),await di(s,i.auth);const r=await Li(i);return s._openRedirect(i.auth,t,"linkViaRedirect",r)}async function wi(e,t){return await qe(e)._initializationPromise,Mi(e,t,!1)}async function Mi(e,t,c=!1){const n=qe(e),i=Xn(n,t),s=new fi(n,i,c),r=await s.execute();return r&&!c&&(delete r.user._redirectEventId,await n._persistUserIfCurrent(r.user),await n._setRedirectUser(null,t)),r}async function Li(e){const t=cn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=6e5;class _i{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((c=>{this.isEventForConsumer(e,c)&&(t=!0,this.sendToConsumer(e,c),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Si(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var c;if(e.error&&!Ni(e)){const n=(null===(c=e.error.code)||void 0===c?void 0:c.split("auth/")[1])||"internal-error";t.onError(H(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const c=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&c}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xi&&this.cachedEventUids.clear(),this.cachedEventUids.has(ki(e))}saveEventToCache(e){this.cachedEventUids.add(ki(e)),this.lastProcessedEventTime=Date.now()}}function ki(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ni({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Si(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ni(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(e,t={}){return P(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ti=/^https?/;async function Ii(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ai(e);for(const n of t)try{if(Oi(n))return}catch(c){}z(e,"unauthorized-domain")}function Oi(e){const t=L(),{protocol:c,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===c&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===c&&i.hostname===n}if(!Ti.test(c))return!1;if(Ei.test(e))return n===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new S(3e4,6e4);function Ri(){const e=sn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let c=0;c<e.CP.length;c++)e.CP[c]=null}function Di(e){return new Promise(((t,c)=>{var n,i,s;function r(){Ri(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ri(),c(H(e,"network-request-failed"))},timeout:Pi.get()})}if(null===(i=null===(n=sn().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=sn().gapi)||void 0===s?void 0:s.load)){const t=Pe("iframefcb");return sn()[t]=()=>{gapi.load?r():c(H(e,"network-request-failed"))},Oe(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>c(e)))}r()}})).catch((e=>{throw Fi=null,e}))}let Fi=null;function Ui(e){return Fi=Fi||Di(e),Fi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new S(5e3,15e3),ji="__/auth/iframe",qi="emulator/auth/iframe",$i={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gi(e){const t=e.config;b(t.authDomain,e,"auth-domain-config-required");const c=t.emulator?A(t,qi):`https://${e.config.authDomain}/${ji}`,s={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},r=Wi.get(e.config.apiHost);r&&(s.eid=r);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${c}?${(0,n.xO)(s).slice(1)}`}async function Ki(e){const t=await Ui(e),c=sn().gapi;return b(c,e,"internal-error"),t.open({where:document.body,url:Gi(e),messageHandlersFilter:c.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$i,dontclear:!0},(t=>new Promise((async(c,n)=>{await t.restyle({setHideOnLeave:!1});const i=H(e,"network-request-failed"),s=sn().setTimeout((()=>{n(i)}),Bi.get());function r(){sn().clearTimeout(s),c(t)}t.ping(r).then(r,(()=>{n(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qi=500,Ji=600,Xi="_blank",Zi="http://localhost";class es{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ts(e,t,c,i=Qi,s=Ji){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const l=Object.assign(Object.assign({},Yi),{width:i.toString(),height:s.toString(),top:r,left:a}),u=(0,n.z$)().toLowerCase();c&&(o=ze(u)?Xi:c),ge(u)&&(t=t||Zi,l.scrollbars="yes");const f=Object.entries(l).reduce(((e,[t,c])=>`${e}${t}=${c},`),"");if(Me(u)&&"_self"!==o)return cs(t||"",o),new es(null);const h=window.open(t||"",o,f);b(h,e,"popup-blocked");try{h.focus()}catch(d){}return new es(h)}function cs(e,t){const c=document.createElement("a");c.href=e,c.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),c.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="__/auth/handler",is="emulator/auth/handler",ss=encodeURIComponent("fac");async function rs(e,t,c,s,r,a){b(e.config.authDomain,e,"auth-domain-config-required"),b(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:c,redirectUrl:s,v:i.SDK_VERSION,eventId:r};if(t instanceof Mt){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",(0,n.xb)(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))o[e]=t}if(t instanceof Lt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const l=o;for(const n of Object.keys(l))void 0===l[n]&&delete l[n];const u=await e._getAppCheckToken(),f=u?`#${ss}=${encodeURIComponent(u)}`:"";return`${as(e)}?${(0,n.xO)(l).slice(1)}${f}`}function as({config:e}){return e.emulator?A(e,is):`https://${e.authDomain}/${ns}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="webStorageSupport";class ls{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zc,this._completeRedirectFn=Mi,this._overrideRedirectResult=mi}async _openPopup(e,t,c,n){var i;M(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await rs(e,t,c,L(),n);return ts(e,s,cn())}async _openRedirect(e,t,c,n){await this._originValidation(e);const i=await rs(e,t,c,L(),n);return rn(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:c}=this.eventManagers[t];return e?Promise.resolve(e):(M(c,"If manager is not set, promise should be"),c)}const c=this.initAndGetManager(e);return this.eventManagers[t]={promise:c},c.catch((()=>{delete this.eventManagers[t]})),c}async initAndGetManager(e){const t=await Ki(e),c=new _i(e);return t.register("authEvent",(t=>{b(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const n=c.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:c},this.iframes[e._key()]=t,c}_isIframeWebStorageSupported(e,t){const c=this.iframes[e._key()];c.send(os,{type:os},(c=>{var n;const i=null===(n=null===c||void 0===c?void 0:c[0])||void 0===n?void 0:n[os];void 0!==i&&t(!!i),z(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ii(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xe()||ve()||be()}}const us=ls;class fs{constructor(e){this.factorId=e}_process(e,t,c){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,c);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class hs extends fs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new hs(e)}_finalizeEnroll(e,t,c){return Rc(e,{idToken:t,displayName:c,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return xn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ds{constructor(){}static assertion(e){return hs._fromCredential(e)}}ds.FACTOR_ID="phone";class ps{static assertionForEnrollment(e,t){return ms._fromSecret(e,t)}static assertionForSignIn(e,t){return ms._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;b("undefined"!==typeof t.auth,"internal-error");const c=await Dc(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return gs._fromStartTotpMfaEnrollmentResponse(c,t.auth)}}ps.FACTOR_ID="totp";class ms extends fs{constructor(e,t,c){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=c}static _fromSecret(e,t){return new ms(t,void 0,e)}static _fromEnrollmentId(e,t){return new ms(t,e)}async _finalizeEnroll(e,t,c){return b("undefined"!==typeof this.secret,e,"argument-error"),Fc(e,{idToken:t,displayName:c,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){b(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const c={verificationCode:this.otp};return _n(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:c})}}class gs{constructor(e,t,c,n,i,s,r){this.sessionInfo=s,this.auth=r,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=c,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new gs(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var c;let n=!1;return(vs(e)||vs(t))&&(n=!0),n&&(vs(e)&&(e=(null===(c=this.auth.currentUser)||void 0===c?void 0:c.email)||"unknownuser"),vs(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function vs(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var zs="@firebase/auth",Hs="0.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Cs(e){(0,i._registerComponent)(new a.wA("auth",((t,{options:c})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:r,authDomain:a}=n.options;b(r&&!r.includes(":"),"invalid-api-key",{appName:n.name}),b(!(null===a||void 0===a?void 0:a.includes(":")),"argument-error",{appName:n.name});const o={apiKey:r,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ke(e)},l=new je(n,i,s,o);return Ge(l,c),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,c)=>{const n=e.getProvider("auth-internal");n.initialize()}))),(0,i._registerComponent)(new a.wA("auth-internal",(e=>{const t=qe(e.getProvider("auth").getImmediate());return(e=>new ys(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.registerVersion)(zs,Hs,Vs(e)),(0,i.registerVersion)(zs,Hs,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=300,ws=(0,n.Pz)("authIdTokenMaxAge")||bs;let Ms=null;const Ls=e=>async t=>{const c=t&&await t.getIdTokenResult(),n=c&&((new Date).getTime()-Date.parse(c.issuedAtTime))/1e3;if(n&&n>ws)return;const i=null===c||void 0===c?void 0:c.token;Ms!==i&&(Ms=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xs(e=(0,i.getApp)()){const t=(0,i._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const c=We(e,{popupRedirectResolver:us,persistence:[Mn,Jc,Zc]}),s=(0,n.Pz)("authTokenSyncURL");if(s){const e=Ls(s);Sc(c,e,(()=>e(c.currentUser))),Nc(c,(t=>e(t)))}const r=(0,n.q4)("auth");return r&&Ke(c,`http://${r}`),c}Cs("Browser")},223:function(e,t,c){"use strict";c.d(t,{BH:function(){return V},L:function(){return o},LL:function(){return T},P0:function(){return z},Pz:function(){return y},Sg:function(){return C},UG:function(){return M},ZB:function(){return u},ZR:function(){return E},aH:function(){return H},b$:function(){return _},eu:function(){return S},hl:function(){return N},jU:function(){return L},m9:function(){return K},ne:function(){return q},pd:function(){return j},q4:function(){return v},r3:function(){return P},ru:function(){return x},tV:function(){return l},uI:function(){return w},vZ:function(){return D},w1:function(){return k},xO:function(){return U},xb:function(){return R},z$:function(){return b},zd:function(){return B}});c(2801),c(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n=function(e){const t=[];let c=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[c++]=i:i<2048?(t[c++]=i>>6|192,t[c++]=63&i|128):55296===(64512&i)&&n+1<e.length&&56320===(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[c++]=i>>18|240,t[c++]=i>>12&63|128,t[c++]=i>>6&63|128,t[c++]=63&i|128):(t[c++]=i>>12|224,t[c++]=i>>6&63|128,t[c++]=63&i|128)}return t},i=function(e){const t=[];let c=0,n=0;while(c<e.length){const i=e[c++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[c++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[c++],r=e[c++],a=e[c++],o=((7&i)<<18|(63&s)<<12|(63&r)<<6|63&a)-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{const s=e[c++],r=e[c++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&r)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const c=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,r=s?e[i+1]:0,a=i+2<e.length,o=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|r>>4;let f=(15&r)<<2|o>>6,h=63&o;a||(h=64,s||(f=64)),n.push(c[l],c[u],c[f],c[h])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(n(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const c=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<e.length;){const t=c[e.charAt(i++)],s=i<e.length,a=s?c[e.charAt(i)]:0;++i;const o=i<e.length,l=o?c[e.charAt(i)]:64;++i;const u=i<e.length,f=u?c[e.charAt(i)]:64;if(++i,null==t||null==a||null==l||null==f)throw new r;const h=t<<2|a>>4;if(n.push(h),64!==l){const e=a<<4&240|l>>2;if(n.push(e),64!==f){const e=l<<6&192|f;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=n(e);return s.encodeByteArray(t,!0)},o=function(e){return a(e).replace(/\./g,"")},l=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const c=t;return new Date(c.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const c in t)t.hasOwnProperty(c)&&f(c)&&(e[c]=u(e[c],t[c]));return e}function f(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof c.g)return c.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=()=>h().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/CursosFrontEnd/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(c){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},g=()=>{try{return d()||p()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},v=e=>{var t,c;return null===(c=null===(t=g())||void 0===t?void 0:t.emulatorHosts)||void 0===c?void 0:c[e]},z=e=>{const t=v(e);if(!t)return;const c=t.lastIndexOf(":");if(c<=0||c+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(c+1),10);return"["===t[0]?[t.substring(1,c-1),n]:[t.substring(0,c),n]},H=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=g())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,c)=>{t?this.reject(t):this.resolve(c),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,c))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const c={alg:"none",type:"JWT"},n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[o(JSON.stringify(c)),o(JSON.stringify(r)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function w(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function M(){var e;const t=null===(e=g())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(c.g.process)}catch(n){return!1}}function L(){return"object"===typeof self&&self.self===self}function x(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function _(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function k(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function N(){try{return"object"===typeof indexedDB}catch(e){return!1}}function S(){return new Promise(((e,t)=>{try{let c=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),c||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{c=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(c){t(c)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A="FirebaseError";class E extends Error{constructor(e,t,c){super(t),this.code=e,this.customData=c,this.name=A,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,c){this.service=e,this.serviceName=t,this.errors=c}create(e,...t){const c=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?I(i,c):"Error",r=`${this.serviceName}: ${s} (${n}).`,a=new E(n,r,c);return a}}function I(e,t){return e.replace(O,((e,c)=>{const n=t[c];return null!=n?String(n):`<${c}?>`}))}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e,t){if(e===t)return!0;const c=Object.keys(e),n=Object.keys(t);for(const i of c){if(!n.includes(i))return!1;const c=e[i],s=t[i];if(F(c)&&F(s)){if(!D(c,s))return!1}else if(c!==s)return!1}for(const i of n)if(!c.includes(i))return!1;return!0}function F(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){const t=[];for(const[c,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(c)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(c)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function B(e){const t={},c=e.replace(/^\?/,"").split("&");return c.forEach((e=>{if(e){const[c,n]=e.split("=");t[decodeURIComponent(c)]=decodeURIComponent(n)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const c=e.indexOf("#",t);return e.substring(t,c>0?c:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){const c=new $(e,t);return c.subscribe.bind(c)}class ${constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,c){let n;if(void 0===e&&void 0===t&&void 0===c)throw new Error("Missing Observer.");n=W(e,["next","error","complete"])?e:{next:e,error:t,complete:c},void 0===n.next&&(n.next=G),void 0===n.error&&(n.error=G),void 0===n.complete&&(n.complete=G);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(c){"undefined"!==typeof console&&console.error&&console.error(c)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function W(e,t){if("object"!==typeof e||null===e)return!1;for(const c of t)if(c in e&&"function"===typeof e[c])return!0;return!1}function G(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){return e&&e._delegate?e._delegate:e}},7749:function(e,t,c){"use strict";c.d(t,{GN:function(){return k}});c(7658);var n=c(3494),i=c(3396);function s(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function r(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?s(Object(c),!0).forEach((function(t){o(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):s(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function l(e,t){if(null==e)return{};var c,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||(i[c]=e[c]);return i}function u(e,t){if(null==e)return{};var c,n,i=l(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(i[c]=e[c])}return i}function f(e){return h(e)||d(e)||p(e)||g()}function h(e){if(Array.isArray(e))return m(e)}function d(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function p(e,t){if(e){if("string"===typeof e)return m(e,t);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,n=new Array(t);c<t;c++)n[c]=e[c];return n}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var v="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof c.g?c.g:"undefined"!==typeof self?self:{},z={exports:{}};(function(e){(function(t){var c=function(e,t,n){if(!l(t)||f(t)||h(t)||d(t)||o(t))return t;var i,s=0,r=0;if(u(t))for(i=[],r=t.length;s<r;s++)i.push(c(e,t[s],n));else for(var a in i={},t)Object.prototype.hasOwnProperty.call(t,a)&&(i[e(a,n)]=c(e,t[a],n));return i},n=function(e,t){t=t||{};var c=t.separator||"_",n=t.split||/(?=[A-Z])/;return e.split(n).join(c)},i=function(e){return p(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""})),e.substr(0,1).toLowerCase()+e.substr(1))},s=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},r=function(e,t){return n(e,t).toLowerCase()},a=Object.prototype.toString,o=function(e){return"function"===typeof e},l=function(e){return e===Object(e)},u=function(e){return"[object Array]"==a.call(e)},f=function(e){return"[object Date]"==a.call(e)},h=function(e){return"[object RegExp]"==a.call(e)},d=function(e){return"[object Boolean]"==a.call(e)},p=function(e){return e-=0,e===e},m=function(e,t){var c=t&&"process"in t?t.process:t;return"function"!==typeof c?e:function(t,n){return c(t,e,n)}},g={camelize:i,decamelize:r,pascalize:s,depascalize:r,camelizeKeys:function(e,t){return c(m(i,t),e)},decamelizeKeys:function(e,t){return c(m(r,t),e,t)},pascalizeKeys:function(e,t){return c(m(s,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(v)})(z);var H=z.exports,y=["class","style"];function V(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var c=t.indexOf(":"),n=H.camelize(t.slice(0,c)),i=t.slice(c+1).trim();return e[n]=i,e}),{})}function C(e){return e.split(/\s+/).reduce((function(e,t){return e[t]=!0,e}),{})}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof e)return e;var n=(e.children||[]).map((function(e){return b(e)})),s=Object.keys(e.attributes||{}).reduce((function(t,c){var n=e.attributes[c];switch(c){case"class":t.class=C(n);break;case"style":t.style=V(n);break;default:t.attrs[c]=n}return t}),{attrs:{},class:{},style:{}});c.class;var a=c.style,o=void 0===a?{}:a,l=u(c,y);return(0,i.h)(e.tag,r(r(r({},t),{},{class:s.class,style:r(r({},s.style),o)},s.attrs),l),n)}var w=!1;try{w=!0}catch(N){}function M(){var e;!w&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}function L(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?o({},e,t):{}}function x(e){var t,c=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":!0===e.flip,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},o(t,"fa-".concat(e.size),null!==e.size),o(t,"fa-rotate-".concat(e.rotation),null!==e.rotation),o(t,"fa-pull-".concat(e.pull),null!==e.pull),o(t,"fa-swap-opacity",e.swapOpacity),o(t,"fa-bounce",e.bounce),o(t,"fa-shake",e.shake),o(t,"fa-beat",e.beat),o(t,"fa-fade",e.fade),o(t,"fa-beat-fade",e.beatFade),o(t,"fa-flash",e.flash),o(t,"fa-spin-pulse",e.spinPulse),o(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(c).map((function(e){return c[e]?e:null})).filter((function(e){return e}))}function _(e){return e&&"object"===a(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:"object"===a(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}var k=(0,i.aZ)({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,t){var c=t.attrs,s=(0,i.Fl)((function(){return _(e.icon)})),a=(0,i.Fl)((function(){return L("classes",x(e))})),o=(0,i.Fl)((function(){return L("transform","string"===typeof e.transform?n.Qc.transform(e.transform):e.transform)})),l=(0,i.Fl)((function(){return L("mask",_(e.mask))})),u=(0,i.Fl)((function(){return(0,n.qv)(s.value,r(r(r(r({},a.value),o.value),l.value),{},{symbol:e.symbol,title:e.title}))}));(0,i.YP)(u,(function(e){if(!e)return M("Could not find one or more icon(s)",s.value,l.value)}),{immediate:!0});var f=(0,i.Fl)((function(){return u.value?b(u.value.abstract[0],{},c):null}));return function(){return f.value}}});(0,i.aZ)({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var c=t.slots,s=n.vc.familyPrefix,r=(0,i.Fl)((function(){return["".concat(s,"-layers")].concat(f(e.fixedWidth?["".concat(s,"-fw")]:[]))}));return function(){return(0,i.h)("div",{class:r.value},c.default?c.default():[])}}}),(0,i.aZ)({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,t){var c=t.attrs,s=n.vc.familyPrefix,a=(0,i.Fl)((function(){return L("classes",[].concat(f(e.counter?["".concat(s,"-layers-counter")]:[]),f(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))})),o=(0,i.Fl)((function(){return L("transform","string"===typeof e.transform?n.Qc.transform(e.transform):e.transform)})),l=(0,i.Fl)((function(){var t=(0,n.fL)(e.value.toString(),r(r({},o.value),a.value)),c=t.abstract;return e.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]})),u=(0,i.Fl)((function(){return b(l.value,{},c)}));return function(){return u.value}}})},4870:function(e,t,c){"use strict";c.d(t,{B:function(){return r},Bj:function(){return s},Fl:function(){return Ge},IU:function(){return Se},Jd:function(){return M},PG:function(){return xe},SU:function(){return Be},Um:function(){return we},WL:function(){return qe},X$:function(){return k},X3:function(){return Ne},XI:function(){return De},Xl:function(){return Ae},dq:function(){return Pe},iH:function(){return Re},j:function(){return x},lk:function(){return L},nZ:function(){return o},qj:function(){return be},qq:function(){return V},yT:function(){return ke}});c(7658);var n=c(7139);let i;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,c;for(t=0,c=this.effects.length;t<c;t++)this.effects[t].stop();for(t=0,c=this.cleanups.length;t<c;t++)this.cleanups[t]();if(this.scopes)for(t=0,c=this.scopes.length;t<c;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function r(e){return new s(e)}function a(e,t=i){t&&t.active&&t.effects.push(e)}function o(){return i}const l=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&g)>0,f=e=>(e.n&g)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=g},d=e=>{const{deps:t}=e;if(t.length){let c=0;for(let n=0;n<t.length;n++){const i=t[n];u(i)&&!f(i)?i.delete(e):t[c++]=i,i.w&=~g,i.n&=~g}t.length=c}},p=new WeakMap;let m=0,g=1;const v=30;let z;const H=Symbol(""),y=Symbol("");class V{constructor(e,t=null,c){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,c)}run(){if(!this.active)return this.fn();let e=z,t=b;while(e){if(e===this)return;e=e.parent}try{return this.parent=z,z=this,b=!0,g=1<<++m,m<=v?h(this):C(this),this.fn()}finally{m<=v&&d(this),g=1<<--m,z=this.parent,b=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){z===this?this.deferStop=!0:this.active&&(C(this),this.onStop&&this.onStop(),this.active=!1)}}function C(e){const{deps:t}=e;if(t.length){for(let c=0;c<t.length;c++)t[c].delete(e);t.length=0}}let b=!0;const w=[];function M(){w.push(b),b=!1}function L(){const e=w.pop();b=void 0===e||e}function x(e,t,c){if(b&&z){let t=p.get(e);t||p.set(e,t=new Map);let n=t.get(c);n||t.set(c,n=l());const i=void 0;_(n,i)}}function _(e,t){let c=!1;m<=v?f(e)||(e.n|=g,c=!u(e)):c=!e.has(z),c&&(e.add(z),z.deps.push(e))}function k(e,t,c,i,s,r){const a=p.get(e);if(!a)return;let o=[];if("clear"===t)o=[...a.values()];else if("length"===c&&(0,n.kJ)(e)){const e=Number(i);a.forEach(((t,c)=>{("length"===c||c>=e)&&o.push(t)}))}else switch(void 0!==c&&o.push(a.get(c)),t){case"add":(0,n.kJ)(e)?(0,n.S0)(c)&&o.push(a.get("length")):(o.push(a.get(H)),(0,n._N)(e)&&o.push(a.get(y)));break;case"delete":(0,n.kJ)(e)||(o.push(a.get(H)),(0,n._N)(e)&&o.push(a.get(y)));break;case"set":(0,n._N)(e)&&o.push(a.get(H));break}if(1===o.length)o[0]&&N(o[0]);else{const e=[];for(const t of o)t&&e.push(...t);N(l(e))}}function N(e,t){const c=(0,n.kJ)(e)?e:[...e];for(const n of c)n.computed&&S(n,t);for(const n of c)n.computed||S(n,t)}function S(e,t){(e!==z||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const A=(0,n.fY)("__proto__,__v_isRef,__isVue"),E=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(n.yk)),T=F(),I=F(!1,!0),O=F(!0),P=R();function R(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const c=Se(this);for(let t=0,i=this.length;t<i;t++)x(c,"get",t+"");const n=c[t](...e);return-1===n||!1===n?c[t](...e.map(Se)):n}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){M();const c=Se(this)[t].apply(this,e);return L(),c}})),e}function D(e){const t=Se(this);return x(t,"has",e),t.hasOwnProperty(e)}function F(e=!1,t=!1){return function(c,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?ye:He:t?ze:ve).get(c))return c;const r=(0,n.kJ)(c);if(!e){if(r&&(0,n.RI)(P,i))return Reflect.get(P,i,s);if("hasOwnProperty"===i)return D}const a=Reflect.get(c,i,s);return((0,n.yk)(i)?E.has(i):A(i))?a:(e||x(c,"get",i),t?a:Pe(a)?r&&(0,n.S0)(i)?a:a.value:(0,n.Kn)(a)?e?Me(a):be(a):a)}}const U=j(),B=j(!0);function j(e=!1){return function(t,c,i,s){let r=t[c];if(_e(r)&&Pe(r)&&!Pe(i))return!1;if(!e&&(ke(i)||_e(i)||(r=Se(r),i=Se(i)),!(0,n.kJ)(t)&&Pe(r)&&!Pe(i)))return r.value=i,!0;const a=(0,n.kJ)(t)&&(0,n.S0)(c)?Number(c)<t.length:(0,n.RI)(t,c),o=Reflect.set(t,c,i,s);return t===Se(s)&&(a?(0,n.aU)(i,r)&&k(t,"set",c,i,r):k(t,"add",c,i)),o}}function q(e,t){const c=(0,n.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&c&&k(e,"delete",t,void 0,i),s}function $(e,t){const c=Reflect.has(e,t);return(0,n.yk)(t)&&E.has(t)||x(e,"has",t),c}function W(e){return x(e,"iterate",(0,n.kJ)(e)?"length":H),Reflect.ownKeys(e)}const G={get:T,set:U,deleteProperty:q,has:$,ownKeys:W},K={get:O,set(e,t){return!0},deleteProperty(e,t){return!0}},Y=(0,n.l7)({},G,{get:I,set:B}),Q=e=>e,J=e=>Reflect.getPrototypeOf(e);function X(e,t,c=!1,n=!1){e=e["__v_raw"];const i=Se(e),s=Se(t);c||(t!==s&&x(i,"get",t),x(i,"get",s));const{has:r}=J(i),a=n?Q:c?Te:Ee;return r.call(i,t)?a(e.get(t)):r.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Z(e,t=!1){const c=this["__v_raw"],n=Se(c),i=Se(e);return t||(e!==i&&x(n,"has",e),x(n,"has",i)),e===i?c.has(e):c.has(e)||c.has(i)}function ee(e,t=!1){return e=e["__v_raw"],!t&&x(Se(e),"iterate",H),Reflect.get(e,"size",e)}function te(e){e=Se(e);const t=Se(this),c=J(t),n=c.has.call(t,e);return n||(t.add(e),k(t,"add",e,e)),this}function ce(e,t){t=Se(t);const c=Se(this),{has:i,get:s}=J(c);let r=i.call(c,e);r||(e=Se(e),r=i.call(c,e));const a=s.call(c,e);return c.set(e,t),r?(0,n.aU)(t,a)&&k(c,"set",e,t,a):k(c,"add",e,t),this}function ne(e){const t=Se(this),{has:c,get:n}=J(t);let i=c.call(t,e);i||(e=Se(e),i=c.call(t,e));const s=n?n.call(t,e):void 0,r=t.delete(e);return i&&k(t,"delete",e,void 0,s),r}function ie(){const e=Se(this),t=0!==e.size,c=void 0,n=e.clear();return t&&k(e,"clear",void 0,void 0,c),n}function se(e,t){return function(c,n){const i=this,s=i["__v_raw"],r=Se(s),a=t?Q:e?Te:Ee;return!e&&x(r,"iterate",H),s.forEach(((e,t)=>c.call(n,a(e),a(t),i)))}}function re(e,t,c){return function(...i){const s=this["__v_raw"],r=Se(s),a=(0,n._N)(r),o="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...i),f=c?Q:t?Te:Ee;return!t&&x(r,"iterate",l?y:H),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:o?[f(e[0]),f(e[1])]:f(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function oe(){const e={get(e){return X(this,e)},get size(){return ee(this)},has:Z,add:te,set:ce,delete:ne,clear:ie,forEach:se(!1,!1)},t={get(e){return X(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ce,delete:ne,clear:ie,forEach:se(!1,!0)},c={get(e){return X(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!1)},n={get(e){return X(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=re(i,!1,!1),c[i]=re(i,!0,!1),t[i]=re(i,!1,!0),n[i]=re(i,!0,!0)})),[e,c,t,n]}const[le,ue,fe,he]=oe();function de(e,t){const c=t?e?he:fe:e?ue:le;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,n.RI)(c,i)&&i in t?c:t,i,s)}const pe={get:de(!1,!1)},me={get:de(!1,!0)},ge={get:de(!0,!1)};const ve=new WeakMap,ze=new WeakMap,He=new WeakMap,ye=new WeakMap;function Ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ce(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Ve((0,n.W7)(e))}function be(e){return _e(e)?e:Le(e,!1,G,pe,ve)}function we(e){return Le(e,!1,Y,me,ze)}function Me(e){return Le(e,!0,K,ge,He)}function Le(e,t,c,i,s){if(!(0,n.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const r=s.get(e);if(r)return r;const a=Ce(e);if(0===a)return e;const o=new Proxy(e,2===a?i:c);return s.set(e,o),o}function xe(e){return _e(e)?xe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function _e(e){return!(!e||!e["__v_isReadonly"])}function ke(e){return!(!e||!e["__v_isShallow"])}function Ne(e){return xe(e)||_e(e)}function Se(e){const t=e&&e["__v_raw"];return t?Se(t):e}function Ae(e){return(0,n.Nj)(e,"__v_skip",!0),e}const Ee=e=>(0,n.Kn)(e)?be(e):e,Te=e=>(0,n.Kn)(e)?Me(e):e;function Ie(e){b&&z&&(e=Se(e),_(e.dep||(e.dep=l())))}function Oe(e,t){e=Se(e);const c=e.dep;c&&N(c)}function Pe(e){return!(!e||!0!==e.__v_isRef)}function Re(e){return Fe(e,!1)}function De(e){return Fe(e,!0)}function Fe(e,t){return Pe(e)?e:new Ue(e,t)}class Ue{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Se(e),this._value=t?e:Ee(e)}get value(){return Ie(this),this._value}set value(e){const t=this.__v_isShallow||ke(e)||_e(e);e=t?e:Se(e),(0,n.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ee(e),Oe(this,e))}}function Be(e){return Pe(e)?e.value:e}const je={get:(e,t,c)=>Be(Reflect.get(e,t,c)),set:(e,t,c,n)=>{const i=e[t];return Pe(i)&&!Pe(c)?(i.value=c,!0):Reflect.set(e,t,c,n)}};function qe(e){return xe(e)?e:new Proxy(e,je)}var $e;class We{constructor(e,t,c,n){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[$e]=!1,this._dirty=!0,this.effect=new V(e,(()=>{this._dirty||(this._dirty=!0,Oe(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!n,this["__v_isReadonly"]=c}get value(){const e=Se(this);return Ie(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ge(e,t,c=!1){let i,s;const r=(0,n.mf)(e);r?(i=e,s=n.dG):(i=e.get,s=e.set);const a=new We(i,s,r||!s,c);return a}$e="__v_isReadonly"},3396:function(e,t,c){"use strict";c.d(t,{$d:function(){return r},Cn:function(){return O},FN:function(){return hc},Fl:function(){return _c},HY:function(){return At},JJ:function(){return W},Ko:function(){return De},P$:function(){return ne},Q6:function(){return le},U2:function(){return se},Uk:function(){return tc},Us:function(){return Lt},Wm:function(){return Jt},Y3:function(){return z},Y8:function(){return ee},YP:function(){return Y},_:function(){return Qt},aZ:function(){return ue},dD:function(){return I},f3:function(){return G},h:function(){return kc},iD:function(){return jt},ic:function(){return Me},j4:function(){return qt},kq:function(){return cc},nK:function(){return oe},up:function(){return Ie},w5:function(){return P},wg:function(){return Rt},wy:function(){return Ae}});c(7658),c(541);var n=c(4870),i=c(7139);function s(e,t,c,n){let i;try{i=n?e(...n):e()}catch(s){a(s,t,c)}return i}function r(e,t,c,n){if((0,i.mf)(e)){const r=s(e,t,c,n);return r&&(0,i.tI)(r)&&r.catch((e=>{a(e,t,c)})),r}const o=[];for(let i=0;i<e.length;i++)o.push(r(e[i],t,c,n));return o}function a(e,t,c,n=!0){const i=t?t.vnode:null;if(t){let n=t.parent;const i=t.proxy,r=c;while(n){const t=n.ec;if(t)for(let c=0;c<t.length;c++)if(!1===t[c](e,i,r))return;n=n.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,r])}o(e,c,i,n)}function o(e,t,c,n=!0){console.error(e)}let l=!1,u=!1;const f=[];let h=0;const d=[];let p=null,m=0;const g=Promise.resolve();let v=null;function z(e){const t=v||g;return e?t.then(this?e.bind(this):e):t}function H(e){let t=h+1,c=f.length;while(t<c){const n=t+c>>>1,i=L(f[n]);i<e?t=n+1:c=n}return t}function y(e){f.length&&f.includes(e,l&&e.allowRecurse?h+1:h)||(null==e.id?f.push(e):f.splice(H(e.id),0,e),V())}function V(){l||u||(u=!0,v=g.then(_))}function C(e){const t=f.indexOf(e);t>h&&f.splice(t,1)}function b(e){(0,i.kJ)(e)?d.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||d.push(e),V()}function w(e,t=(l?h+1:0)){for(0;t<f.length;t++){const e=f[t];e&&e.pre&&(f.splice(t,1),t--,e())}}function M(e){if(d.length){const e=[...new Set(d)];if(d.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>L(e)-L(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const L=e=>null==e.id?1/0:e.id,x=(e,t)=>{const c=L(e)-L(t);if(0===c){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return c};function _(e){u=!1,l=!0,f.sort(x);i.dG;try{for(h=0;h<f.length;h++){const e=f[h];e&&!1!==e.active&&s(e,null,14)}}finally{h=0,f.length=0,M(e),l=!1,v=null,(f.length||d.length)&&_(e)}}new Set;new Map;function k(e,t,...c){if(e.isUnmounted)return;const n=e.vnode.props||i.kT;let s=c;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in n){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:r}=n[e]||i.kT;r&&(s=c.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(s=c.map(i.h5))}let l;let u=n[l=(0,i.hR)(t)]||n[l=(0,i.hR)((0,i._A)(t))];!u&&a&&(u=n[l=(0,i.hR)((0,i.rs)(t))]),u&&r(u,e,6,s);const f=n[l+"Once"];if(f){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,r(f,e,6,s)}}function N(e,t,c=!1){const n=t.emitsCache,s=n.get(e);if(void 0!==s)return s;const r=e.emits;let a={},o=!1;if(!(0,i.mf)(e)){const n=e=>{const c=N(e,t,!0);c&&(o=!0,(0,i.l7)(a,c))};!c&&t.mixins.length&&t.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}return r||o?((0,i.kJ)(r)?r.forEach((e=>a[e]=null)):(0,i.l7)(a,r),(0,i.Kn)(e)&&n.set(e,a),a):((0,i.Kn)(e)&&n.set(e,null),null)}function S(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let A=null,E=null;function T(e){const t=A;return A=e,E=e&&e.type.__scopeId||null,t}function I(e){E=e}function O(){E=null}function P(e,t=A,c){if(!t)return e;if(e._n)return e;const n=(...c)=>{n._d&&Ut(-1);const i=T(t);let s;try{s=e(...c)}finally{T(i),n._d&&Ut(1)}return s};return n._n=!0,n._c=!0,n._d=!0,n}function R(e){const{type:t,vnode:c,proxy:n,withProxy:s,props:r,propsOptions:[o],slots:l,attrs:u,emit:f,render:h,renderCache:d,data:p,setupState:m,ctx:g,inheritAttrs:v}=e;let z,H;const y=T(e);try{if(4&c.shapeFlag){const e=s||n;z=nc(h.call(e,e,d,r,m,p,g)),H=u}else{const e=t;0,z=nc(e.length>1?e(r,{attrs:u,slots:l,emit:f}):e(r,null)),H=t.props?u:D(u)}}catch(C){Ot.length=0,a(C,e,1),z=Jt(Tt)}let V=z;if(H&&!1!==v){const e=Object.keys(H),{shapeFlag:t}=V;e.length&&7&t&&(o&&e.some(i.tR)&&(H=F(H,o)),V=ec(V,H))}return c.dirs&&(V=ec(V),V.dirs=V.dirs?V.dirs.concat(c.dirs):c.dirs),c.transition&&(V.transition=c.transition),z=V,T(y),z}const D=e=>{let t;for(const c in e)("class"===c||"style"===c||(0,i.F7)(c))&&((t||(t={}))[c]=e[c]);return t},F=(e,t)=>{const c={};for(const n in e)(0,i.tR)(n)&&n.slice(9)in t||(c[n]=e[n]);return c};function U(e,t,c){const{props:n,children:i,component:s}=e,{props:r,children:a,patchFlag:o}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(c&&o>=0))return!(!i&&!a||a&&a.$stable)||n!==r&&(n?!r||B(n,r,l):!!r);if(1024&o)return!0;if(16&o)return n?B(n,r,l):!!r;if(8&o){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const c=e[t];if(r[c]!==n[c]&&!S(l,c))return!0}}return!1}function B(e,t,c){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(t[s]!==e[s]&&!S(c,s))return!0}return!1}function j({vnode:e,parent:t},c){while(t&&t.subTree===e)(e=t.vnode).el=c,t=t.parent}const q=e=>e.__isSuspense;function $(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):b(e)}function W(e,t){if(fc){let c=fc.provides;const n=fc.parent&&fc.parent.provides;n===c&&(c=fc.provides=Object.create(n)),c[e]=t}else 0}function G(e,t,c=!1){const n=fc||A;if(n){const s=null==n.parent?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return c&&(0,i.mf)(t)?t.call(n.proxy):t}else 0}const K={};function Y(e,t,c){return Q(e,t,c)}function Q(e,t,{immediate:c,deep:a,flush:o,onTrack:l,onTrigger:u}=i.kT){const f=(0,n.nZ)()===(null===fc||void 0===fc?void 0:fc.scope)?fc:null;let h,d,p=!1,m=!1;if((0,n.dq)(e)?(h=()=>e.value,p=(0,n.yT)(e)):(0,n.PG)(e)?(h=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some((e=>(0,n.PG)(e)||(0,n.yT)(e))),h=()=>e.map((e=>(0,n.dq)(e)?e.value:(0,n.PG)(e)?Z(e):(0,i.mf)(e)?s(e,f,2):void 0))):h=(0,i.mf)(e)?t?()=>s(e,f,2):()=>{if(!f||!f.isUnmounted)return d&&d(),r(e,f,3,[v])}:i.dG,t&&a){const e=h;h=()=>Z(e())}let g,v=e=>{d=C.onStop=()=>{s(e,f,4)}};if(zc){if(v=i.dG,t?c&&r(t,f,3,[h(),m?[]:void 0,v]):h(),"sync"!==o)return i.dG;{const e=Sc();g=e.__watcherHandles||(e.__watcherHandles=[])}}let z=m?new Array(e.length).fill(K):K;const H=()=>{if(C.active)if(t){const e=C.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,z[t]))):(0,i.aU)(e,z)))&&(d&&d(),r(t,f,3,[e,z===K?void 0:m&&z[0]===K?[]:z,v]),z=e)}else C.run()};let V;H.allowRecurse=!!t,"sync"===o?V=H:"post"===o?V=()=>Mt(H,f&&f.suspense):(H.pre=!0,f&&(H.id=f.uid),V=()=>y(H));const C=new n.qq(h,V);t?c?H():z=C.run():"post"===o?Mt(C.run.bind(C),f&&f.suspense):C.run();const b=()=>{C.stop(),f&&f.scope&&(0,i.Od)(f.scope.effects,C)};return g&&g.push(b),b}function J(e,t,c){const n=this.proxy,s=(0,i.HD)(e)?e.includes(".")?X(n,e):()=>n[e]:e.bind(n,n);let r;(0,i.mf)(t)?r=t:(r=t.handler,c=t);const a=fc;dc(this);const o=Q(s,r.bind(n),c);return a?dc(a):pc(),o}function X(e,t){const c=t.split(".");return()=>{let t=e;for(let e=0;e<c.length&&t;e++)t=t[c[e]];return t}}function Z(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,n.dq)(e))Z(e.value,t);else if((0,i.kJ)(e))for(let c=0;c<e.length;c++)Z(e[c],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Z(e,t)}));else if((0,i.PO)(e))for(const c in e)Z(e[c],t);return e}function ee(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return be((()=>{e.isMounted=!0})),Le((()=>{e.isUnmounting=!0})),e}const te=[Function,Array],ce={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:te,onEnter:te,onAfterEnter:te,onEnterCancelled:te,onBeforeLeave:te,onLeave:te,onAfterLeave:te,onLeaveCancelled:te,onBeforeAppear:te,onAppear:te,onAfterAppear:te,onAppearCancelled:te},setup(e,{slots:t}){const c=hc(),i=ee();let s;return()=>{const r=t.default&&le(t.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){let e=!1;for(const t of r)if(t.type!==Tt){0,a=t,e=!0;break}}const o=(0,n.IU)(e),{mode:l}=o;if(i.isLeaving)return re(a);const u=ae(a);if(!u)return re(a);const f=se(u,o,i,c);oe(u,f);const h=c.subTree,d=h&&ae(h);let p=!1;const{getTransitionKey:m}=u.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(d&&d.type!==Tt&&(!Wt(u,d)||p)){const e=se(d,o,i,c);if(oe(d,e),"out-in"===l)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==c.update.active&&c.update()},re(a);"in-out"===l&&u.type!==Tt&&(e.delayLeave=(e,t,c)=>{const n=ie(i,d);n[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=c})}return a}}},ne=ce;function ie(e,t){const{leavingVNodes:c}=e;let n=c.get(t.type);return n||(n=Object.create(null),c.set(t.type,n)),n}function se(e,t,c,n){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:z,onAfterAppear:H,onAppearCancelled:y}=t,V=String(e.key),C=ie(c,e),b=(e,t)=>{e&&r(e,n,9,t)},w=(e,t)=>{const c=t[1];b(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&c():e.length<=1&&c()},M={mode:a,persisted:o,beforeEnter(t){let n=l;if(!c.isMounted){if(!s)return;n=v||l}t._leaveCb&&t._leaveCb(!0);const i=C[V];i&&Wt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),b(n,[t])},enter(e){let t=u,n=f,i=h;if(!c.isMounted){if(!s)return;t=z||u,n=H||f,i=y||h}let r=!1;const a=e._enterCb=t=>{r||(r=!0,b(t?i:n,[e]),M.delayedLeave&&M.delayedLeave(),e._enterCb=void 0)};t?w(t,[e,a]):a()},leave(t,n){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),c.isUnmounting)return n();b(d,[t]);let s=!1;const r=t._leaveCb=c=>{s||(s=!0,n(),b(c?g:m,[t]),t._leaveCb=void 0,C[i]===e&&delete C[i])};C[i]=e,p?w(p,[t,r]):r()},clone(e){return se(e,t,c,n)}};return M}function re(e){if(he(e))return e=ec(e),e.children=null,e}function ae(e){return he(e)?e.children?e.children[0]:void 0:e}function oe(e,t){6&e.shapeFlag&&e.component?oe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function le(e,t=!1,c){let n=[],i=0;for(let s=0;s<e.length;s++){let r=e[s];const a=null==c?r.key:String(c)+String(null!=r.key?r.key:s);r.type===At?(128&r.patchFlag&&i++,n=n.concat(le(r.children,t,a))):(t||r.type!==Tt)&&n.push(null!=a?ec(r,{key:a}):r)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function ue(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const fe=e=>!!e.type.__asyncLoader;const he=e=>e.type.__isKeepAlive;RegExp,RegExp;function de(e,t){return(0,i.kJ)(e)?e.some((e=>de(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!(0,i.Kj)(e)&&e.test(t)}function pe(e,t){ge(e,"a",t)}function me(e,t){ge(e,"da",t)}function ge(e,t,c=fc){const n=e.__wdc||(e.__wdc=()=>{let t=c;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ye(t,n,c),c){let e=c.parent;while(e&&e.parent)he(e.parent.vnode)&&ve(n,t,c,e),e=e.parent}}function ve(e,t,c,n){const s=ye(t,e,n,!0);xe((()=>{(0,i.Od)(n[t],s)}),c)}function ze(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function He(e){return 128&e.shapeFlag?e.ssContent:e}function ye(e,t,c=fc,i=!1){if(c){const s=c[e]||(c[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(c.isUnmounted)return;(0,n.Jd)(),dc(c);const s=r(t,c,e,i);return pc(),(0,n.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Ve=e=>(t,c=fc)=>(!zc||"sp"===e)&&ye(e,((...e)=>t(...e)),c),Ce=Ve("bm"),be=Ve("m"),we=Ve("bu"),Me=Ve("u"),Le=Ve("bum"),xe=Ve("um"),_e=Ve("sp"),ke=Ve("rtg"),Ne=Ve("rtc");function Se(e,t=fc){ye("ec",e,t)}function Ae(e,t){const c=A;if(null===c)return e;const n=Mc(c)||c.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[e,c,a,o=i.kT]=t[r];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Z(c),s.push({dir:e,instance:n,value:c,oldValue:void 0,arg:a,modifiers:o}))}return e}function Ee(e,t,c,i){const s=e.dirs,a=t&&t.dirs;for(let o=0;o<s.length;o++){const l=s[o];a&&(l.oldValue=a[o].value);let u=l.dir[i];u&&((0,n.Jd)(),r(u,c,8,[e.el,l,e,t]),(0,n.lk)())}}const Te="components";function Ie(e,t){return Pe(Te,e,!0,t)||e}const Oe=Symbol();function Pe(e,t,c=!0,n=!1){const s=A||fc;if(s){const c=s.type;if(e===Te){const e=Lc(c,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return c}const r=Re(s[e]||c[e],t)||Re(s.appContext[e],t);return!r&&n?c:r}}function Re(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function De(e,t,c,n){let s;const r=c&&c[n];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let c=0,n=e.length;c<n;c++)s[c]=t(e[c],c,void 0,r&&r[c])}else if("number"===typeof e){0,s=new Array(e);for(let c=0;c<e;c++)s[c]=t(c+1,c,void 0,r&&r[c])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,c)=>t(e,c,void 0,r&&r[c])));else{const c=Object.keys(e);s=new Array(c.length);for(let n=0,i=c.length;n<i;n++){const i=c[n];s[n]=t(e[i],i,n,r&&r[n])}}else s=[];return c&&(c[n]=s),s}const Fe=e=>e?mc(e)?Mc(e)||e.proxy:Fe(e.parent):null,Ue=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fe(e.parent),$root:e=>Fe(e.root),$emit:e=>e.emit,$options:e=>Ye(e),$forceUpdate:e=>e.f||(e.f=()=>y(e.update)),$nextTick:e=>e.n||(e.n=z.bind(e.proxy)),$watch:e=>J.bind(e)}),Be=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),je={get({_:e},t){const{ctx:c,setupState:s,data:r,props:a,accessCache:o,type:l,appContext:u}=e;let f;if("$"!==t[0]){const n=o[t];if(void 0!==n)switch(n){case 1:return s[t];case 2:return r[t];case 4:return c[t];case 3:return a[t]}else{if(Be(s,t))return o[t]=1,s[t];if(r!==i.kT&&(0,i.RI)(r,t))return o[t]=2,r[t];if((f=e.propsOptions[0])&&(0,i.RI)(f,t))return o[t]=3,a[t];if(c!==i.kT&&(0,i.RI)(c,t))return o[t]=4,c[t];qe&&(o[t]=0)}}const h=Ue[t];let d,p;return h?("$attrs"===t&&(0,n.j)(e,"get",t),h(e)):(d=l.__cssModules)&&(d=d[t])?d:c!==i.kT&&(0,i.RI)(c,t)?(o[t]=4,c[t]):(p=u.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,c){const{data:n,setupState:s,ctx:r}=e;return Be(s,t)?(s[t]=c,!0):n!==i.kT&&(0,i.RI)(n,t)?(n[t]=c,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(r[t]=c,!0))},has({_:{data:e,setupState:t,accessCache:c,ctx:n,appContext:s,propsOptions:r}},a){let o;return!!c[a]||e!==i.kT&&(0,i.RI)(e,a)||Be(t,a)||(o=r[0])&&(0,i.RI)(o,a)||(0,i.RI)(n,a)||(0,i.RI)(Ue,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,c){return null!=c.get?e._.accessCache[t]=0:(0,i.RI)(c,"value")&&this.set(e,t,c.value,null),Reflect.defineProperty(e,t,c)}};let qe=!0;function $e(e){const t=Ye(e),c=e.proxy,s=e.ctx;qe=!1,t.beforeCreate&&Ge(t.beforeCreate,e,"bc");const{data:r,computed:a,methods:o,watch:l,provide:u,inject:f,created:h,beforeMount:d,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:z,beforeDestroy:H,beforeUnmount:y,destroyed:V,unmounted:C,render:b,renderTracked:w,renderTriggered:M,errorCaptured:L,serverPrefetch:x,expose:_,inheritAttrs:k,components:N,directives:S,filters:A}=t,E=null;if(f&&We(f,s,E,e.appContext.config.unwrapInjectedRef),o)for(const n in o){const e=o[n];(0,i.mf)(e)&&(s[n]=e.bind(c))}if(r){0;const t=r.call(c,c);0,(0,i.Kn)(t)&&(e.data=(0,n.qj)(t))}if(qe=!0,a)for(const n in a){const e=a[n],t=(0,i.mf)(e)?e.bind(c,c):(0,i.mf)(e.get)?e.get.bind(c,c):i.dG;0;const r=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(c):i.dG,o=_c({get:t,set:r});Object.defineProperty(s,n,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e})}if(l)for(const n in l)Ke(l[n],s,c,n);if(u){const e=(0,i.mf)(u)?u.call(c):u;Reflect.ownKeys(e).forEach((t=>{W(t,e[t])}))}function T(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(c)))):t&&e(t.bind(c))}if(h&&Ge(h,e,"c"),T(Ce,d),T(be,p),T(we,m),T(Me,g),T(pe,v),T(me,z),T(Se,L),T(Ne,w),T(ke,M),T(Le,y),T(xe,C),T(_e,x),(0,i.kJ)(_))if(_.length){const t=e.exposed||(e.exposed={});_.forEach((e=>{Object.defineProperty(t,e,{get:()=>c[e],set:t=>c[e]=t})}))}else e.exposed||(e.exposed={});b&&e.render===i.dG&&(e.render=b),null!=k&&(e.inheritAttrs=k),N&&(e.components=N),S&&(e.directives=S)}function We(e,t,c=i.dG,s=!1){(0,i.kJ)(e)&&(e=et(e));for(const r in e){const c=e[r];let a;a=(0,i.Kn)(c)?"default"in c?G(c.from||r,c.default,!0):G(c.from||r):G(c),(0,n.dq)(a)&&s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[r]=a}}function Ge(e,t,c){r((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,c)}function Ke(e,t,c,n){const s=n.includes(".")?X(c,n):()=>c[n];if((0,i.HD)(e)){const c=t[e];(0,i.mf)(c)&&Y(s,c)}else if((0,i.mf)(e))Y(s,e.bind(c));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ke(e,t,c,n)));else{const n=(0,i.mf)(e.handler)?e.handler.bind(c):t[e.handler];(0,i.mf)(n)&&Y(s,n,e)}else 0}function Ye(e){const t=e.type,{mixins:c,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,o=r.get(t);let l;return o?l=o:s.length||c||n?(l={},s.length&&s.forEach((e=>Qe(l,e,a,!0))),Qe(l,t,a)):l=t,(0,i.Kn)(t)&&r.set(t,l),l}function Qe(e,t,c,n=!1){const{mixins:i,extends:s}=t;s&&Qe(e,s,c,!0),i&&i.forEach((t=>Qe(e,t,c,!0)));for(const r in t)if(n&&"expose"===r);else{const n=Je[r]||c&&c[r];e[r]=n?n(e[r],t[r]):t[r]}return e}const Je={data:Xe,props:ct,emits:ct,methods:ct,computed:ct,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:ct,directives:ct,watch:nt,provide:Xe,inject:Ze};function Xe(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Ze(e,t){return ct(et(e),et(t))}function et(e){if((0,i.kJ)(e)){const t={};for(let c=0;c<e.length;c++)t[e[c]]=e[c];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function ct(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function nt(e,t){if(!e)return t;if(!t)return e;const c=(0,i.l7)(Object.create(null),e);for(const n in t)c[n]=tt(e[n],t[n]);return c}function it(e,t,c,s=!1){const r={},a={};(0,i.Nj)(a,Gt,1),e.propsDefaults=Object.create(null),rt(e,t,r,a);for(const n in e.propsOptions[0])n in r||(r[n]=void 0);c?e.props=s?r:(0,n.Um)(r):e.type.props?e.props=r:e.props=a,e.attrs=a}function st(e,t,c,s){const{props:r,attrs:a,vnode:{patchFlag:o}}=e,l=(0,n.IU)(r),[u]=e.propsOptions;let f=!1;if(!(s||o>0)||16&o){let n;rt(e,t,r,a)&&(f=!0);for(const s in l)t&&((0,i.RI)(t,s)||(n=(0,i.rs)(s))!==s&&(0,i.RI)(t,n))||(u?!c||void 0===c[s]&&void 0===c[n]||(r[s]=at(u,l,s,void 0,e,!0)):delete r[s]);if(a!==l)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],f=!0)}else if(8&o){const c=e.vnode.dynamicProps;for(let n=0;n<c.length;n++){let s=c[n];if(S(e.emitsOptions,s))continue;const o=t[s];if(u)if((0,i.RI)(a,s))o!==a[s]&&(a[s]=o,f=!0);else{const t=(0,i._A)(s);r[t]=at(u,l,t,o,e,!1)}else o!==a[s]&&(a[s]=o,f=!0)}}f&&(0,n.X$)(e,"set","$attrs")}function rt(e,t,c,s){const[r,a]=e.propsOptions;let o,l=!1;if(t)for(let n in t){if((0,i.Gg)(n))continue;const u=t[n];let f;r&&(0,i.RI)(r,f=(0,i._A)(n))?a&&a.includes(f)?(o||(o={}))[f]=u:c[f]=u:S(e.emitsOptions,n)||n in s&&u===s[n]||(s[n]=u,l=!0)}if(a){const t=(0,n.IU)(c),s=o||i.kT;for(let n=0;n<a.length;n++){const o=a[n];c[o]=at(r,t,o,s[o],e,!(0,i.RI)(s,o))}}return l}function at(e,t,c,n,s,r){const a=e[c];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===n){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;c in i?n=i[c]:(dc(s),n=i[c]=e.call(null,t),pc())}else n=e}a[0]&&(r&&!e?n=!1:!a[1]||""!==n&&n!==(0,i.rs)(c)||(n=!0))}return n}function ot(e,t,c=!1){const n=t.propsCache,s=n.get(e);if(s)return s;const r=e.props,a={},o=[];let l=!1;if(!(0,i.mf)(e)){const n=e=>{l=!0;const[c,n]=ot(e,t,!0);(0,i.l7)(a,c),n&&o.push(...n)};!c&&t.mixins.length&&t.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}if(!r&&!l)return(0,i.Kn)(e)&&n.set(e,i.Z6),i.Z6;if((0,i.kJ)(r))for(let f=0;f<r.length;f++){0;const e=(0,i._A)(r[f]);lt(e)&&(a[e]=i.kT)}else if(r){0;for(const e in r){const t=(0,i._A)(e);if(lt(t)){const c=r[e],n=a[t]=(0,i.kJ)(c)||(0,i.mf)(c)?{type:c}:Object.assign({},c);if(n){const e=ht(Boolean,n.type),c=ht(String,n.type);n[0]=e>-1,n[1]=c<0||e<c,(e>-1||(0,i.RI)(n,"default"))&&o.push(t)}}}}const u=[a,o];return(0,i.Kn)(e)&&n.set(e,u),u}function lt(e){return"$"!==e[0]}function ut(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function ft(e,t){return ut(e)===ut(t)}function ht(e,t){return(0,i.kJ)(t)?t.findIndex((t=>ft(t,e))):(0,i.mf)(t)&&ft(t,e)?0:-1}const dt=e=>"_"===e[0]||"$stable"===e,pt=e=>(0,i.kJ)(e)?e.map(nc):[nc(e)],mt=(e,t,c)=>{if(t._n)return t;const n=P(((...e)=>pt(t(...e))),c);return n._c=!1,n},gt=(e,t,c)=>{const n=e._ctx;for(const s in e){if(dt(s))continue;const c=e[s];if((0,i.mf)(c))t[s]=mt(s,c,n);else if(null!=c){0;const e=pt(c);t[s]=()=>e}}},vt=(e,t)=>{const c=pt(t);e.slots.default=()=>c},zt=(e,t)=>{if(32&e.vnode.shapeFlag){const c=t._;c?(e.slots=(0,n.IU)(t),(0,i.Nj)(t,"_",c)):gt(t,e.slots={})}else e.slots={},t&&vt(e,t);(0,i.Nj)(e.slots,Gt,1)},Ht=(e,t,c)=>{const{vnode:n,slots:s}=e;let r=!0,a=i.kT;if(32&n.shapeFlag){const e=t._;e?c&&1===e?r=!1:((0,i.l7)(s,t),c||1!==e||delete s._):(r=!t.$stable,gt(t,s)),a=t}else t&&(vt(e,t),a={default:1});if(r)for(const i in s)dt(i)||i in a||delete s[i]};function yt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vt=0;function Ct(e,t){return function(c,n=null){(0,i.mf)(c)||(c=Object.assign({},c)),null==n||(0,i.Kn)(n)||(n=null);const s=yt(),r=new Set;let a=!1;const o=s.app={_uid:Vt++,_component:c,_props:n,_container:null,_context:s,_instance:null,version:Ac,get config(){return s.config},set config(e){0},use(e,...t){return r.has(e)||(e&&(0,i.mf)(e.install)?(r.add(e),e.install(o,...t)):(0,i.mf)(e)&&(r.add(e),e(o,...t))),o},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),o},component(e,t){return t?(s.components[e]=t,o):s.components[e]},directive(e,t){return t?(s.directives[e]=t,o):s.directives[e]},mount(i,r,l){if(!a){0;const u=Jt(c,n);return u.appContext=s,r&&t?t(u,i):e(u,i,l),a=!0,o._container=i,i.__vue_app__=o,Mc(u.component)||u.component.proxy}},unmount(){a&&(e(null,o._container),delete o._container.__vue_app__)},provide(e,t){return s.provides[e]=t,o}};return o}}function bt(e,t,c,r,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,n)=>bt(e,t&&((0,i.kJ)(t)?t[n]:t),c,r,a)));if(fe(r)&&!a)return;const o=4&r.shapeFlag?Mc(r.component)||r.component.proxy:r.el,l=a?null:o,{i:u,r:f}=e;const h=t&&t.r,d=u.refs===i.kT?u.refs={}:u.refs,p=u.setupState;if(null!=h&&h!==f&&((0,i.HD)(h)?(d[h]=null,(0,i.RI)(p,h)&&(p[h]=null)):(0,n.dq)(h)&&(h.value=null)),(0,i.mf)(f))s(f,u,12,[l,d]);else{const t=(0,i.HD)(f),s=(0,n.dq)(f);if(t||s){const n=()=>{if(e.f){const c=t?(0,i.RI)(p,f)?p[f]:d[f]:f.value;a?(0,i.kJ)(c)&&(0,i.Od)(c,o):(0,i.kJ)(c)?c.includes(o)||c.push(o):t?(d[f]=[o],(0,i.RI)(p,f)&&(p[f]=d[f])):(f.value=[o],e.k&&(d[e.k]=f.value))}else t?(d[f]=l,(0,i.RI)(p,f)&&(p[f]=l)):s&&(f.value=l,e.k&&(d[e.k]=l))};l?(n.id=-1,Mt(n,c)):n()}else 0}}function wt(){}const Mt=$;function Lt(e){return xt(e)}function xt(e,t){wt();const c=(0,i.E9)();c.__VUE__=!0;const{insert:s,remove:r,patchProp:a,createElement:o,createText:l,createComment:u,setText:f,setElementText:h,parentNode:d,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=e,v=(e,t,c,n=null,i=null,s=null,r=!1,a=null,o=!!t.dynamicChildren)=>{if(e===t)return;e&&!Wt(e,t)&&(n=X(e),G(e,i,s,!0),e=null),-2===t.patchFlag&&(o=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:f}=t;switch(l){case Et:z(e,t,c,n);break;case Tt:H(e,t,c,n);break;case It:null==e&&V(t,c,n,r);break;case At:T(e,t,c,n,i,s,r,a,o);break;default:1&f?x(e,t,c,n,i,s,r,a,o):6&f?I(e,t,c,n,i,s,r,a,o):(64&f||128&f)&&l.process(e,t,c,n,i,s,r,a,o,ee)}null!=u&&i&&bt(u,e&&e.ref,s,t||e,!t)},z=(e,t,c,n)=>{if(null==e)s(t.el=l(t.children),c,n);else{const c=t.el=e.el;t.children!==e.children&&f(c,t.children)}},H=(e,t,c,n)=>{null==e?s(t.el=u(t.children||""),c,n):t.el=e.el},V=(e,t,c,n)=>{[e.el,e.anchor]=g(e.children,t,c,n,e.el,e.anchor)},b=({el:e,anchor:t},c,n)=>{let i;while(e&&e!==t)i=p(e),s(e,c,n),e=i;s(t,c,n)},L=({el:e,anchor:t})=>{let c;while(e&&e!==t)c=p(e),r(e),e=c;r(t)},x=(e,t,c,n,i,s,r,a,o)=>{r=r||"svg"===t.type,null==e?_(t,c,n,i,s,r,a,o):S(e,t,i,s,r,a,o)},_=(e,t,c,n,r,l,u,f)=>{let d,p;const{type:m,props:g,shapeFlag:v,transition:z,dirs:H}=e;if(d=e.el=o(e.type,l,g&&g.is,g),8&v?h(d,e.children):16&v&&N(e.children,d,null,n,r,l&&"foreignObject"!==m,u,f),H&&Ee(e,null,n,"created"),k(d,e,e.scopeId,u,n),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(d,t,null,g[t],l,e.children,n,r,J);"value"in g&&a(d,"value",null,g.value),(p=g.onVnodeBeforeMount)&&ac(p,n,e)}H&&Ee(e,null,n,"beforeMount");const y=(!r||r&&!r.pendingBranch)&&z&&!z.persisted;y&&z.beforeEnter(d),s(d,t,c),((p=g&&g.onVnodeMounted)||y||H)&&Mt((()=>{p&&ac(p,n,e),y&&z.enter(d),H&&Ee(e,null,n,"mounted")}),r)},k=(e,t,c,n,i)=>{if(c&&m(e,c),n)for(let s=0;s<n.length;s++)m(e,n[s]);if(i){let c=i.subTree;if(t===c){const t=i.vnode;k(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,c,n,i,s,r,a,o=0)=>{for(let l=o;l<e.length;l++){const o=e[l]=a?ic(e[l]):nc(e[l]);v(null,o,t,c,n,i,s,r,a)}},S=(e,t,c,n,s,r,o)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:f,dirs:d}=t;u|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;c&&_t(c,!1),(g=m.onVnodeBeforeUpdate)&&ac(g,c,t,e),d&&Ee(t,e,c,"beforeUpdate"),c&&_t(c,!0);const v=s&&"foreignObject"!==t.type;if(f?A(e.dynamicChildren,f,l,c,n,v,r):o||B(e,t,l,null,c,n,v,r,!1),u>0){if(16&u)E(l,t,p,m,c,n,s);else if(2&u&&p.class!==m.class&&a(l,"class",null,m.class,s),4&u&&a(l,"style",p.style,m.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const r=i[t],o=p[r],u=m[r];u===o&&"value"!==r||a(l,r,o,u,s,e.children,c,n,J)}}1&u&&e.children!==t.children&&h(l,t.children)}else o||null!=f||E(l,t,p,m,c,n,s);((g=m.onVnodeUpdated)||d)&&Mt((()=>{g&&ac(g,c,t,e),d&&Ee(t,e,c,"updated")}),n)},A=(e,t,c,n,i,s,r)=>{for(let a=0;a<t.length;a++){const o=e[a],l=t[a],u=o.el&&(o.type===At||!Wt(o,l)||70&o.shapeFlag)?d(o.el):c;v(o,l,u,null,n,i,s,r,!0)}},E=(e,t,c,n,s,r,o)=>{if(c!==n){if(c!==i.kT)for(const l in c)(0,i.Gg)(l)||l in n||a(e,l,c[l],null,o,t.children,s,r,J);for(const l in n){if((0,i.Gg)(l))continue;const u=n[l],f=c[l];u!==f&&"value"!==l&&a(e,l,f,u,o,t.children,s,r,J)}"value"in n&&a(e,"value",c.value,n.value)}},T=(e,t,c,n,i,r,a,o,u)=>{const f=t.el=e?e.el:l(""),h=t.anchor=e?e.anchor:l("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:m}=t;m&&(o=o?o.concat(m):m),null==e?(s(f,c,n),s(h,c,n),N(t.children,c,h,i,r,a,o,u)):d>0&&64&d&&p&&e.dynamicChildren?(A(e.dynamicChildren,p,c,i,r,a,o),(null!=t.key||i&&t===i.subTree)&&kt(e,t,!0)):B(e,t,c,h,i,r,a,o,u)},I=(e,t,c,n,i,s,r,a,o)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,c,n,r,o):O(t,c,n,i,s,r,o):P(e,t,o)},O=(e,t,c,n,i,s,r)=>{const a=e.component=uc(e,n,i);if(he(e)&&(a.ctx.renderer=ee),Hc(a),a.asyncDep){if(i&&i.registerDep(a,D),!e.el){const e=a.subTree=Jt(Tt);H(null,e,t,c)}}else D(a,e,t,c,i,s,r)},P=(e,t,c)=>{const n=t.component=e.component;if(U(e,t,c)){if(n.asyncDep&&!n.asyncResolved)return void F(n,t,c);n.next=t,C(n.update),n.update()}else t.el=e.el,n.vnode=t},D=(e,t,c,s,r,a,o)=>{const l=()=>{if(e.isMounted){let t,{next:c,bu:n,u:s,parent:l,vnode:u}=e,f=c;0,_t(e,!1),c?(c.el=u.el,F(e,c,o)):c=u,n&&(0,i.ir)(n),(t=c.props&&c.props.onVnodeBeforeUpdate)&&ac(t,l,c,u),_t(e,!0);const h=R(e);0;const p=e.subTree;e.subTree=h,v(p,h,d(p.el),X(p),e,r,a),c.el=h.el,null===f&&j(e,h.el),s&&Mt(s,r),(t=c.props&&c.props.onVnodeUpdated)&&Mt((()=>ac(t,l,c,u)),r)}else{let n;const{el:o,props:l}=t,{bm:u,m:f,parent:h}=e,d=fe(t);if(_t(e,!1),u&&(0,i.ir)(u),!d&&(n=l&&l.onVnodeBeforeMount)&&ac(n,h,t),_t(e,!0),o&&ce){const c=()=>{e.subTree=R(e),ce(o,e.subTree,e,r,null)};d?t.type.__asyncLoader().then((()=>!e.isUnmounted&&c())):c()}else{0;const n=e.subTree=R(e);0,v(null,n,c,s,e,r,a),t.el=n.el}if(f&&Mt(f,r),!d&&(n=l&&l.onVnodeMounted)){const e=t;Mt((()=>ac(n,h,e)),r)}(256&t.shapeFlag||h&&fe(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&Mt(e.a,r),e.isMounted=!0,t=c=s=null}},u=e.effect=new n.qq(l,(()=>y(f)),e.scope),f=e.update=()=>u.run();f.id=e.uid,_t(e,!0),f()},F=(e,t,c)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,st(e,t.props,i,c),Ht(e,t.children,c),(0,n.Jd)(),w(),(0,n.lk)()},B=(e,t,c,n,i,s,r,a,o=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,f=t.children,{patchFlag:d,shapeFlag:p}=t;if(d>0){if(128&d)return void $(l,f,c,n,i,s,r,a,o);if(256&d)return void q(l,f,c,n,i,s,r,a,o)}8&p?(16&u&&J(l,i,s),f!==l&&h(c,f)):16&u?16&p?$(l,f,c,n,i,s,r,a,o):J(l,i,s,!0):(8&u&&h(c,""),16&p&&N(f,c,n,i,s,r,a,o))},q=(e,t,c,n,s,r,a,o,l)=>{e=e||i.Z6,t=t||i.Z6;const u=e.length,f=t.length,h=Math.min(u,f);let d;for(d=0;d<h;d++){const n=t[d]=l?ic(t[d]):nc(t[d]);v(e[d],n,c,null,s,r,a,o,l)}u>f?J(e,s,r,!0,!1,h):N(t,c,n,s,r,a,o,l,h)},$=(e,t,c,n,s,r,a,o,l)=>{let u=0;const f=t.length;let h=e.length-1,d=f-1;while(u<=h&&u<=d){const n=e[u],i=t[u]=l?ic(t[u]):nc(t[u]);if(!Wt(n,i))break;v(n,i,c,null,s,r,a,o,l),u++}while(u<=h&&u<=d){const n=e[h],i=t[d]=l?ic(t[d]):nc(t[d]);if(!Wt(n,i))break;v(n,i,c,null,s,r,a,o,l),h--,d--}if(u>h){if(u<=d){const e=d+1,i=e<f?t[e].el:n;while(u<=d)v(null,t[u]=l?ic(t[u]):nc(t[u]),c,i,s,r,a,o,l),u++}}else if(u>d)while(u<=h)G(e[u],s,r,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=d;u++){const e=t[u]=l?ic(t[u]):nc(t[u]);null!=e.key&&g.set(e.key,u)}let z,H=0;const y=d-m+1;let V=!1,C=0;const b=new Array(y);for(u=0;u<y;u++)b[u]=0;for(u=p;u<=h;u++){const n=e[u];if(H>=y){G(n,s,r,!0);continue}let i;if(null!=n.key)i=g.get(n.key);else for(z=m;z<=d;z++)if(0===b[z-m]&&Wt(n,t[z])){i=z;break}void 0===i?G(n,s,r,!0):(b[i-m]=u+1,i>=C?C=i:V=!0,v(n,t[i],c,null,s,r,a,o,l),H++)}const w=V?Nt(b):i.Z6;for(z=w.length-1,u=y-1;u>=0;u--){const e=m+u,i=t[e],h=e+1<f?t[e+1].el:n;0===b[u]?v(null,i,c,h,s,r,a,o,l):V&&(z<0||u!==w[z]?W(i,c,h,2):z--)}}},W=(e,t,c,n,i=null)=>{const{el:r,type:a,transition:o,children:l,shapeFlag:u}=e;if(6&u)return void W(e.component.subTree,t,c,n);if(128&u)return void e.suspense.move(t,c,n);if(64&u)return void a.move(e,t,c,ee);if(a===At){s(r,t,c);for(let e=0;e<l.length;e++)W(l[e],t,c,n);return void s(e.anchor,t,c)}if(a===It)return void b(e,t,c);const f=2!==n&&1&u&&o;if(f)if(0===n)o.beforeEnter(r),s(r,t,c),Mt((()=>o.enter(r)),i);else{const{leave:e,delayLeave:n,afterLeave:i}=o,a=()=>s(r,t,c),l=()=>{e(r,(()=>{a(),i&&i()}))};n?n(r,a,l):l()}else s(r,t,c)},G=(e,t,c,n=!1,i=!1)=>{const{type:s,props:r,ref:a,children:o,dynamicChildren:l,shapeFlag:u,patchFlag:f,dirs:h}=e;if(null!=a&&bt(a,null,c,e,!0),256&u)return void t.ctx.deactivate(e);const d=1&u&&h,p=!fe(e);let m;if(p&&(m=r&&r.onVnodeBeforeUnmount)&&ac(m,t,e),6&u)Q(e.component,c,n);else{if(128&u)return void e.suspense.unmount(c,n);d&&Ee(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,c,i,ee,n):l&&(s!==At||f>0&&64&f)?J(l,t,c,!1,!0):(s===At&&384&f||!i&&16&u)&&J(o,t,c),n&&K(e)}(p&&(m=r&&r.onVnodeUnmounted)||d)&&Mt((()=>{m&&ac(m,t,e),d&&Ee(e,null,t,"unmounted")}),c)},K=e=>{const{type:t,el:c,anchor:n,transition:i}=e;if(t===At)return void Y(c,n);if(t===It)return void L(e);const s=()=>{r(c),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:n}=i,r=()=>t(c,s);n?n(e.el,s,r):r()}else s()},Y=(e,t)=>{let c;while(e!==t)c=p(e),r(e),e=c;r(t)},Q=(e,t,c)=>{const{bum:n,scope:s,update:r,subTree:a,um:o}=e;n&&(0,i.ir)(n),s.stop(),r&&(r.active=!1,G(a,e,t,c)),o&&Mt(o,t),Mt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},J=(e,t,c,n=!1,i=!1,s=0)=>{for(let r=s;r<e.length;r++)G(e[r],t,c,n,i)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,c)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,c),w(),M(),t._vnode=e},ee={p:v,um:G,m:W,r:K,mt:O,mc:N,pc:B,pbc:A,n:X,o:e};let te,ce;return t&&([te,ce]=t(ee)),{render:Z,hydrate:te,createApp:Ct(Z,te)}}function _t({effect:e,update:t},c){e.allowRecurse=t.allowRecurse=c}function kt(e,t,c=!1){const n=e.children,s=t.children;if((0,i.kJ)(n)&&(0,i.kJ)(s))for(let i=0;i<n.length;i++){const e=n[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=ic(s[i]),t.el=e.el),c||kt(e,t)),t.type===Et&&(t.el=e.el)}}function Nt(e){const t=e.slice(),c=[0];let n,i,s,r,a;const o=e.length;for(n=0;n<o;n++){const o=e[n];if(0!==o){if(i=c[c.length-1],e[i]<o){t[n]=i,c.push(n);continue}s=0,r=c.length-1;while(s<r)a=s+r>>1,e[c[a]]<o?s=a+1:r=a;o<e[c[s]]&&(s>0&&(t[n]=c[s-1]),c[s]=n)}}s=c.length,r=c[s-1];while(s-- >0)c[s]=r,r=t[r];return c}const St=e=>e.__isTeleport;const At=Symbol(void 0),Et=Symbol(void 0),Tt=Symbol(void 0),It=Symbol(void 0),Ot=[];let Pt=null;function Rt(e=!1){Ot.push(Pt=e?null:[])}function Dt(){Ot.pop(),Pt=Ot[Ot.length-1]||null}let Ft=1;function Ut(e){Ft+=e}function Bt(e){return e.dynamicChildren=Ft>0?Pt||i.Z6:null,Dt(),Ft>0&&Pt&&Pt.push(e),e}function jt(e,t,c,n,i,s){return Bt(Qt(e,t,c,n,i,s,!0))}function qt(e,t,c,n,i){return Bt(Jt(e,t,c,n,i,!0))}function $t(e){return!!e&&!0===e.__v_isVNode}function Wt(e,t){return e.type===t.type&&e.key===t.key}const Gt="__vInternal",Kt=({key:e})=>null!=e?e:null,Yt=({ref:e,ref_key:t,ref_for:c})=>null!=e?(0,i.HD)(e)||(0,n.dq)(e)||(0,i.mf)(e)?{i:A,r:e,k:t,f:!!c}:e:null;function Qt(e,t=null,c=null,n=0,s=null,r=(e===At?0:1),a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Kt(t),ref:t&&Yt(t),scopeId:E,slotScopeIds:null,children:c,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:A};return o?(sc(l,c),128&r&&e.normalize(l)):c&&(l.shapeFlag|=(0,i.HD)(c)?8:16),Ft>0&&!a&&Pt&&(l.patchFlag>0||6&r)&&32!==l.patchFlag&&Pt.push(l),l}const Jt=Xt;function Xt(e,t=null,c=null,s=0,r=null,a=!1){if(e&&e!==Oe||(e=Tt),$t(e)){const n=ec(e,t,!0);return c&&sc(n,c),Ft>0&&!a&&Pt&&(6&n.shapeFlag?Pt[Pt.indexOf(e)]=n:Pt.push(n)),n.patchFlag|=-2,n}if(xc(e)&&(e=e.__vccOpts),t){t=Zt(t);let{class:e,style:c}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(c)&&((0,n.X3)(c)&&!(0,i.kJ)(c)&&(c=(0,i.l7)({},c)),t.style=(0,i.j5)(c))}const o=(0,i.HD)(e)?1:q(e)?128:St(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Qt(e,t,c,s,r,o,a,!0)}function Zt(e){return e?(0,n.X3)(e)||Gt in e?(0,i.l7)({},e):e:null}function ec(e,t,c=!1){const{props:n,ref:s,patchFlag:r,children:a}=e,o=t?rc(n||{},t):n,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Kt(o),ref:t&&t.ref?c&&s?(0,i.kJ)(s)?s.concat(Yt(t)):[s,Yt(t)]:Yt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==At?-1===r?16:16|r:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ec(e.ssContent),ssFallback:e.ssFallback&&ec(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l}function tc(e=" ",t=0){return Jt(Et,null,e,t)}function cc(e="",t=!1){return t?(Rt(),qt(Tt,null,e)):Jt(Tt,null,e)}function nc(e){return null==e||"boolean"===typeof e?Jt(Tt):(0,i.kJ)(e)?Jt(At,null,e.slice()):"object"===typeof e?ic(e):Jt(Et,null,String(e))}function ic(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:ec(e)}function sc(e,t){let c=0;const{shapeFlag:n}=e;if(null==t)t=null;else if((0,i.kJ)(t))c=16;else if("object"===typeof t){if(65&n){const c=t.default;return void(c&&(c._c&&(c._d=!1),sc(e,c()),c._c&&(c._d=!0)))}{c=32;const n=t._;n||Gt in t?3===n&&A&&(1===A.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=A}}else(0,i.mf)(t)?(t={default:t,_ctx:A},c=32):(t=String(t),64&n?(c=16,t=[tc(t)]):c=8);e.children=t,e.shapeFlag|=c}function rc(...e){const t={};for(let c=0;c<e.length;c++){const n=e[c];for(const e in n)if("class"===e)t.class!==n.class&&(t.class=(0,i.C_)([t.class,n.class]));else if("style"===e)t.style=(0,i.j5)([t.style,n.style]);else if((0,i.F7)(e)){const c=t[e],s=n[e];!s||c===s||(0,i.kJ)(c)&&c.includes(s)||(t[e]=c?[].concat(c,s):s)}else""!==e&&(t[e]=n[e])}return t}function ac(e,t,c,n=null){r(e,t,7,[c,n])}const oc=yt();let lc=0;function uc(e,t,c){const s=e.type,r=(t?t.appContext:e.appContext)||oc,a={uid:lc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new n.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ot(s,r),emitsOptions:N(s,r),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:c,suspenseId:c?c.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=k.bind(null,a),e.ce&&e.ce(a),a}let fc=null;const hc=()=>fc||A,dc=e=>{fc=e,e.scope.on()},pc=()=>{fc&&fc.scope.off(),fc=null};function mc(e){return 4&e.vnode.shapeFlag}let gc,vc,zc=!1;function Hc(e,t=!1){zc=t;const{props:c,children:n}=e.vnode,i=mc(e);it(e,c,i,t),zt(e,n);const s=i?yc(e,t):void 0;return zc=!1,s}function yc(e,t){const c=e.type;e.accessCache=Object.create(null),e.proxy=(0,n.Xl)(new Proxy(e.ctx,je));const{setup:r}=c;if(r){const c=e.setupContext=r.length>1?wc(e):null;dc(e),(0,n.Jd)();const o=s(r,e,0,[e.props,c]);if((0,n.lk)(),pc(),(0,i.tI)(o)){if(o.then(pc,pc),t)return o.then((c=>{Vc(e,c,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=o}else Vc(e,o,t)}else Cc(e,t)}function Vc(e,t,c){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,n.WL)(t)),Cc(e,c)}function Cc(e,t,c){const s=e.type;if(!e.render){if(!t&&gc&&!s.render){const t=s.template||Ye(e).template;if(t){0;const{isCustomElement:c,compilerOptions:n}=e.appContext.config,{delimiters:r,compilerOptions:a}=s,o=(0,i.l7)((0,i.l7)({isCustomElement:c,delimiters:r},n),a);s.render=gc(t,o)}}e.render=s.render||i.dG,vc&&vc(e)}dc(e),(0,n.Jd)(),$e(e),(0,n.lk)(),pc()}function bc(e){return new Proxy(e.attrs,{get(t,c){return(0,n.j)(e,"get","$attrs"),t[c]}})}function wc(e){const t=t=>{e.exposed=t||{}};let c;return{get attrs(){return c||(c=bc(e))},slots:e.slots,emit:e.emit,expose:t}}function Mc(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,n.WL)((0,n.Xl)(e.exposed)),{get(t,c){return c in t?t[c]:c in Ue?Ue[c](e):void 0},has(e,t){return t in e||t in Ue}}))}function Lc(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function xc(e){return(0,i.mf)(e)&&"__vccOpts"in e}const _c=(e,t)=>(0,n.Fl)(e,t,zc);function kc(e,t,c){const n=arguments.length;return 2===n?(0,i.Kn)(t)&&!(0,i.kJ)(t)?$t(t)?Jt(e,null,[t]):Jt(e,t):Jt(e,null,t):(n>3?c=Array.prototype.slice.call(arguments,2):3===n&&$t(c)&&(c=[c]),Jt(e,t,c))}const Nc=Symbol(""),Sc=()=>{{const e=G(Nc);return e}};const Ac="3.2.47"},9242:function(e,t,c){"use strict";c.d(t,{F8:function(){return ge},e8:function(){return le},iM:function(){return me},nr:function(){return oe},ri:function(){return Ve}});c(7658);var n=c(7139),i=c(3396),s=c(4870);const r="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,o=a&&a.createElement("template"),l={insert:(e,t,c)=>{t.insertBefore(e,c||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,c,n)=>{const i=t?a.createElementNS(r,e):a.createElement(e,c?{is:c}:void 0);return"select"===e&&n&&null!=n.multiple&&i.setAttribute("multiple",n.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,c,n,i,s){const r=c?c.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),c),i===s||!(i=i.nextSibling))break}else{o.innerHTML=n?`<svg>${e}</svg>`:e;const i=o.content;if(n){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,c)}return[r?r.nextSibling:t.firstChild,c?c.previousSibling:t.lastChild]}};function u(e,t,c){const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),null==t?e.removeAttribute("class"):c?e.setAttribute("class",t):e.className=t}function f(e,t,c){const i=e.style,s=(0,n.HD)(c);if(c&&!s){if(t&&!(0,n.HD)(t))for(const e in t)null==c[e]&&d(i,e,"");for(const e in c)d(i,e,c[e])}else{const n=i.display;s?t!==c&&(i.cssText=c):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=n)}}const h=/\s*!important$/;function d(e,t,c){if((0,n.kJ)(c))c.forEach((c=>d(e,t,c)));else if(null==c&&(c=""),t.startsWith("--"))e.setProperty(t,c);else{const i=g(e,t);h.test(c)?e.setProperty((0,n.rs)(i),c.replace(h,""),"important"):e[i]=c}}const p=["Webkit","Moz","ms"],m={};function g(e,t){const c=m[t];if(c)return c;let i=(0,n._A)(t);if("filter"!==i&&i in e)return m[t]=i;i=(0,n.kC)(i);for(let n=0;n<p.length;n++){const c=p[n]+i;if(c in e)return m[t]=c}return t}const v="http://www.w3.org/1999/xlink";function z(e,t,c,i,s){if(i&&t.startsWith("xlink:"))null==c?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,c);else{const i=(0,n.Pq)(t);null==c||i&&!(0,n.yA)(c)?e.removeAttribute(t):e.setAttribute(t,i?"":c)}}function H(e,t,c,i,s,r,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,r),void(e[t]=null==c?"":c);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=c;const n=null==c?"":c;return e.value===n&&"OPTION"!==e.tagName||(e.value=n),void(null==c&&e.removeAttribute(t))}let o=!1;if(""===c||null==c){const i=typeof e[t];"boolean"===i?c=(0,n.yA)(c):null==c&&"string"===i?(c="",o=!0):"number"===i&&(c=0,o=!0)}try{e[t]=c}catch(l){0}o&&e.removeAttribute(t)}function y(e,t,c,n){e.addEventListener(t,c,n)}function V(e,t,c,n){e.removeEventListener(t,c,n)}function C(e,t,c,n,i=null){const s=e._vei||(e._vei={}),r=s[t];if(n&&r)r.value=n;else{const[c,a]=w(t);if(n){const r=s[t]=_(n,i);y(e,c,r,a)}else r&&(V(e,c,r,a),s[t]=void 0)}}const b=/(?:Once|Passive|Capture)$/;function w(e){let t;if(b.test(e)){let c;t={};while(c=e.match(b))e=e.slice(0,e.length-c[0].length),t[c[0].toLowerCase()]=!0}const c=":"===e[2]?e.slice(3):(0,n.rs)(e.slice(2));return[c,t]}let M=0;const L=Promise.resolve(),x=()=>M||(L.then((()=>M=0)),M=Date.now());function _(e,t){const c=e=>{if(e._vts){if(e._vts<=c.attached)return}else e._vts=Date.now();(0,i.$d)(k(e,c.value),t,5,[e])};return c.value=e,c.attached=x(),c}function k(e,t){if((0,n.kJ)(t)){const c=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{c.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const N=/^on[a-z]/,S=(e,t,c,i,s=!1,r,a,o,l)=>{"class"===t?u(e,i,s):"style"===t?f(e,c,i):(0,n.F7)(t)?(0,n.tR)(t)||C(e,t,c,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):A(e,t,i,s))?H(e,t,i,r,a,o,l):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),z(e,t,i,s))};function A(e,t,c,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&N.test(t)&&(0,n.mf)(c)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!N.test(t)||!(0,n.HD)(c))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const E="transition",T="animation",I=(e,{slots:t})=>(0,i.h)(i.P$,F(e),t);I.displayName="Transition";const O={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},P=I.props=(0,n.l7)({},i.P$.props,O),R=(e,t=[])=>{(0,n.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},D=e=>!!e&&((0,n.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function F(e){const t={};for(const n in e)n in O||(t[n]=e[n]);if(!1===e.css)return t;const{name:c="v",type:i,duration:s,enterFromClass:r=`${c}-enter-from`,enterActiveClass:a=`${c}-enter-active`,enterToClass:o=`${c}-enter-to`,appearFromClass:l=r,appearActiveClass:u=a,appearToClass:f=o,leaveFromClass:h=`${c}-leave-from`,leaveActiveClass:d=`${c}-leave-active`,leaveToClass:p=`${c}-leave-to`}=e,m=U(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:z,onEnter:H,onEnterCancelled:y,onLeave:V,onLeaveCancelled:C,onBeforeAppear:b=z,onAppear:w=H,onAppearCancelled:M=y}=t,L=(e,t,c)=>{q(e,t?f:o),q(e,t?u:a),c&&c()},x=(e,t)=>{e._isLeaving=!1,q(e,h),q(e,p),q(e,d),t&&t()},_=e=>(t,c)=>{const n=e?w:H,s=()=>L(t,e,c);R(n,[t,s]),$((()=>{q(t,e?l:r),j(t,e?f:o),D(n)||G(t,i,g,s)}))};return(0,n.l7)(t,{onBeforeEnter(e){R(z,[e]),j(e,r),j(e,a)},onBeforeAppear(e){R(b,[e]),j(e,l),j(e,u)},onEnter:_(!1),onAppear:_(!0),onLeave(e,t){e._isLeaving=!0;const c=()=>x(e,t);j(e,h),J(),j(e,d),$((()=>{e._isLeaving&&(q(e,h),j(e,p),D(V)||G(e,i,v,c))})),R(V,[e,c])},onEnterCancelled(e){L(e,!1),R(y,[e])},onAppearCancelled(e){L(e,!0),R(M,[e])},onLeaveCancelled(e){x(e),R(C,[e])}})}function U(e){if(null==e)return null;if((0,n.Kn)(e))return[B(e.enter),B(e.leave)];{const t=B(e);return[t,t]}}function B(e){const t=(0,n.He)(e);return t}function j(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function q(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:c}=e;c&&(c.delete(t),c.size||(e._vtc=void 0))}function $(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let W=0;function G(e,t,c,n){const i=e._endId=++W,s=()=>{i===e._endId&&n()};if(c)return setTimeout(s,c);const{type:r,timeout:a,propCount:o}=K(e,t);if(!r)return n();const l=r+"end";let u=0;const f=()=>{e.removeEventListener(l,h),s()},h=t=>{t.target===e&&++u>=o&&f()};setTimeout((()=>{u<o&&f()}),a+1),e.addEventListener(l,h)}function K(e,t){const c=window.getComputedStyle(e),n=e=>(c[e]||"").split(", "),i=n(`${E}Delay`),s=n(`${E}Duration`),r=Y(i,s),a=n(`${T}Delay`),o=n(`${T}Duration`),l=Y(a,o);let u=null,f=0,h=0;t===E?r>0&&(u=E,f=r,h=s.length):t===T?l>0&&(u=T,f=l,h=o.length):(f=Math.max(r,l),u=f>0?r>l?E:T:null,h=u?u===E?s.length:o.length:0);const d=u===E&&/\b(transform|all)(,|$)/.test(n(`${E}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function Y(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,c)=>Q(t)+Q(e[c]))))}function Q(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function J(){return document.body.offsetHeight}const X=new WeakMap,Z=new WeakMap,ee={name:"TransitionGroup",props:(0,n.l7)({},P,{tag:String,moveClass:String}),setup(e,{slots:t}){const c=(0,i.FN)(),n=(0,i.Y8)();let r,a;return(0,i.ic)((()=>{if(!r.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ie(r[0].el,c.vnode.el,t))return;r.forEach(te),r.forEach(ce);const n=r.filter(ne);J(),n.forEach((e=>{const c=e.el,n=c.style;j(c,t),n.transform=n.webkitTransform=n.transitionDuration="";const i=c._moveCb=e=>{e&&e.target!==c||e&&!/transform$/.test(e.propertyName)||(c.removeEventListener("transitionend",i),c._moveCb=null,q(c,t))};c.addEventListener("transitionend",i)}))})),()=>{const o=(0,s.IU)(e),l=F(o);let u=o.tag||i.HY;r=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,l,n,c))}if(r)for(let e=0;e<r.length;e++){const t=r[e];(0,i.nK)(t,(0,i.U2)(t,l,n,c)),X.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(u,null,a)}}};ee.props;function te(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ce(e){Z.set(e,e.el.getBoundingClientRect())}function ne(e){const t=X.get(e),c=Z.get(e),n=t.left-c.left,i=t.top-c.top;if(n||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${n}px,${i}px)`,t.transitionDuration="0s",e}}function ie(e,t,c){const n=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&n.classList.remove(e)))})),c.split(/\s+/).forEach((e=>e&&n.classList.add(e))),n.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(n);const{hasTransform:s}=K(n);return i.removeChild(n),s}const se=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,n.kJ)(t)?e=>(0,n.ir)(t,e):t};function re(e){e.target.composing=!0}function ae(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const oe={created(e,{modifiers:{lazy:t,trim:c,number:i}},s){e._assign=se(s);const r=i||s.props&&"number"===s.props.type;y(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;c&&(i=i.trim()),r&&(i=(0,n.h5)(i)),e._assign(i)})),c&&y(e,"change",(()=>{e.value=e.value.trim()})),t||(y(e,"compositionstart",re),y(e,"compositionend",ae),y(e,"change",ae))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:c,trim:i,number:s}},r){if(e._assign=se(r),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(c)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,n.h5)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},le={deep:!0,created(e,t,c){e._assign=se(c),y(e,"change",(()=>{const t=e._modelValue,c=fe(e),i=e.checked,s=e._assign;if((0,n.kJ)(t)){const e=(0,n.hq)(t,c),r=-1!==e;if(i&&!r)s(t.concat(c));else if(!i&&r){const c=[...t];c.splice(e,1),s(c)}}else if((0,n.DM)(t)){const e=new Set(t);i?e.add(c):e.delete(c),s(e)}else s(he(e,i))}))},mounted:ue,beforeUpdate(e,t,c){e._assign=se(c),ue(e,t,c)}};function ue(e,{value:t,oldValue:c},i){e._modelValue=t,(0,n.kJ)(t)?e.checked=(0,n.hq)(t,i.props.value)>-1:(0,n.DM)(t)?e.checked=t.has(i.props.value):t!==c&&(e.checked=(0,n.WV)(t,he(e,!0)))}function fe(e){return"_value"in e?e._value:e.value}function he(e,t){const c=t?"_trueValue":"_falseValue";return c in e?e[c]:t}const de=["ctrl","shift","alt","meta"],pe={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>de.some((c=>e[`${c}Key`]&&!t.includes(c)))},me=(e,t)=>(c,...n)=>{for(let e=0;e<t.length;e++){const n=pe[t[e]];if(n&&n(c,t))return}return e(c,...n)},ge={beforeMount(e,{value:t},{transition:c}){e._vod="none"===e.style.display?"":e.style.display,c&&t?c.beforeEnter(e):ve(e,t)},mounted(e,{value:t},{transition:c}){c&&t&&c.enter(e)},updated(e,{value:t,oldValue:c},{transition:n}){!t!==!c&&(n?t?(n.beforeEnter(e),ve(e,!0),n.enter(e)):n.leave(e,(()=>{ve(e,!1)})):ve(e,t))},beforeUnmount(e,{value:t}){ve(e,t)}};function ve(e,t){e.style.display=t?e._vod:"none"}const ze=(0,n.l7)({patchProp:S},l);let He;function ye(){return He||(He=(0,i.Us)(ze))}const Ve=(...e)=>{const t=ye().createApp(...e);const{mount:c}=t;return t.mount=e=>{const i=Ce(e);if(!i)return;const s=t._component;(0,n.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const r=c(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t};function Ce(e){if((0,n.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,c){"use strict";c.d(t,{C_:function(){return f},DM:function(){return E},E9:function(){return re},F7:function(){return M},Gg:function(){return W},HD:function(){return P},He:function(){return ie},Kj:function(){return I},Kn:function(){return D},NO:function(){return b},Nj:function(){return ce},Od:function(){return _},PO:function(){return q},Pq:function(){return d},RI:function(){return N},S0:function(){return $},W7:function(){return j},WV:function(){return g},Z6:function(){return V},_A:function(){return Y},_N:function(){return A},aU:function(){return ee},dG:function(){return C},e1:function(){return s},fY:function(){return n},h5:function(){return ne},hR:function(){return Z},hq:function(){return v},ir:function(){return te},j5:function(){return r},kC:function(){return X},kJ:function(){return S},kT:function(){return y},l7:function(){return x},mf:function(){return O},rs:function(){return J},tI:function(){return F},tR:function(){return L},yA:function(){return p},yk:function(){return R},zw:function(){return z}});c(7658);function n(e,t){const c=Object.create(null),n=e.split(",");for(let i=0;i<n.length;i++)c[n[i]]=!0;return t?e=>!!c[e.toLowerCase()]:e=>!!c[e]}const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=n(i);function r(e){if(S(e)){const t={};for(let c=0;c<e.length;c++){const n=e[c],i=P(n)?u(n):r(n);if(i)for(const e in i)t[e]=i[e]}return t}return P(e)||D(e)?e:void 0}const a=/;(?![^(]*\))/g,o=/:([^]+)/,l=/\/\*.*?\*\//gs;function u(e){const t={};return e.replace(l,"").split(a).forEach((e=>{if(e){const c=e.split(o);c.length>1&&(t[c[0].trim()]=c[1].trim())}})),t}function f(e){let t="";if(P(e))t=e;else if(S(e))for(let c=0;c<e.length;c++){const n=f(e[c]);n&&(t+=n+" ")}else if(D(e))for(const c in e)e[c]&&(t+=c+" ");return t.trim()}const h="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",d=n(h);function p(e){return!!e||""===e}function m(e,t){if(e.length!==t.length)return!1;let c=!0;for(let n=0;c&&n<e.length;n++)c=g(e[n],t[n]);return c}function g(e,t){if(e===t)return!0;let c=T(e),n=T(t);if(c||n)return!(!c||!n)&&e.getTime()===t.getTime();if(c=R(e),n=R(t),c||n)return e===t;if(c=S(e),n=S(t),c||n)return!(!c||!n)&&m(e,t);if(c=D(e),n=D(t),c||n){if(!c||!n)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const c in e){const n=e.hasOwnProperty(c),i=t.hasOwnProperty(c);if(n&&!i||!n&&i||!g(e[c],t[c]))return!1}}return String(e)===String(t)}function v(e,t){return e.findIndex((e=>g(e,t)))}const z=e=>P(e)?e:null==e?"":S(e)||D(e)&&(e.toString===U||!O(e.toString))?JSON.stringify(e,H,2):String(e),H=(e,t)=>t&&t.__v_isRef?H(e,t.value):A(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,c])=>(e[`${t} =>`]=c,e)),{})}:E(t)?{[`Set(${t.size})`]:[...t.values()]}:!D(t)||S(t)||q(t)?t:String(t),y={},V=[],C=()=>{},b=()=>!1,w=/^on[^a-z]/,M=e=>w.test(e),L=e=>e.startsWith("onUpdate:"),x=Object.assign,_=(e,t)=>{const c=e.indexOf(t);c>-1&&e.splice(c,1)},k=Object.prototype.hasOwnProperty,N=(e,t)=>k.call(e,t),S=Array.isArray,A=e=>"[object Map]"===B(e),E=e=>"[object Set]"===B(e),T=e=>"[object Date]"===B(e),I=e=>"[object RegExp]"===B(e),O=e=>"function"===typeof e,P=e=>"string"===typeof e,R=e=>"symbol"===typeof e,D=e=>null!==e&&"object"===typeof e,F=e=>D(e)&&O(e.then)&&O(e.catch),U=Object.prototype.toString,B=e=>U.call(e),j=e=>B(e).slice(8,-1),q=e=>"[object Object]"===B(e),$=e=>P(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,W=n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=e=>{const t=Object.create(null);return c=>{const n=t[c];return n||(t[c]=e(c))}},K=/-(\w)/g,Y=G((e=>e.replace(K,((e,t)=>t?t.toUpperCase():"")))),Q=/\B([A-Z])/g,J=G((e=>e.replace(Q,"-$1").toLowerCase())),X=G((e=>e.charAt(0).toUpperCase()+e.slice(1))),Z=G((e=>e?`on${X(e)}`:"")),ee=(e,t)=>!Object.is(e,t),te=(e,t)=>{for(let c=0;c<e.length;c++)e[c](t)},ce=(e,t,c)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:c})},ne=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ie=e=>{const t=P(e)?Number(e):NaN;return isNaN(t)?e:t};let se;const re=()=>se||(se="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof c.g?c.g:{})},3455:function(e,t,c){c(7658),
/*!
  * Bootstrap v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(t,c){e.exports=c()}(0,(function(){"use strict";const e=new Map,t={set(t,c,n){e.has(t)||e.set(t,new Map);const i=e.get(t);i.has(c)||0===i.size?i.set(c,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get(t,c){return e.has(t)&&e.get(t).get(c)||null},remove(t,c){if(!e.has(t))return;const n=e.get(t);n.delete(c),0===n.size&&e.delete(t)}},c=1e6,n=1e3,i="transitionend",s=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,((e,t)=>`#${CSS.escape(t)}`))),e),r=e=>null===e||void 0===e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),a=e=>{do{e+=Math.floor(Math.random()*c)}while(document.getElementById(e));return e},o=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:c}=window.getComputedStyle(e);const i=Number.parseFloat(t),s=Number.parseFloat(c);return i||s?(t=t.split(",")[0],c=c.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(c))*n):0},l=e=>{e.dispatchEvent(new Event(i))},u=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),f=e=>u(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(s(e)):null,h=e=>{if(!u(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),c=e.closest("details:not([open])");if(!c)return t;if(c!==e){const t=e.closest("summary");if(t&&t.parentNode!==c)return!1;if(null===t)return!1}return t},d=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),p=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?p(e.parentNode):null},m=()=>{},g=e=>{e.offsetHeight},v=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,z=[],H=e=>{"loading"===document.readyState?(z.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of z)e()})),z.push(e)):e()},y=()=>"rtl"===document.documentElement.dir,V=e=>{H((()=>{const t=v();if(t){const c=e.NAME,n=t.fn[c];t.fn[c]=e.jQueryInterface,t.fn[c].Constructor=e,t.fn[c].noConflict=()=>(t.fn[c]=n,e.jQueryInterface)}}))},C=(e,t=[],c=e)=>"function"===typeof e?e(...t):c,b=(e,t,c=!0)=>{if(!c)return void C(e);const n=5,s=o(t)+n;let r=!1;const a=({target:c})=>{c===t&&(r=!0,t.removeEventListener(i,a),C(e))};t.addEventListener(i,a),setTimeout((()=>{r||l(t)}),s)},w=(e,t,c,n)=>{const i=e.length;let s=e.indexOf(t);return-1===s?!c&&n?e[i-1]:e[0]:(s+=c?1:-1,n&&(s=(s+i)%i),e[Math.max(0,Math.min(s,i-1))])},M=/[^.]*(?=\..*)\.|.*/,L=/\..*/,x=/::\d+$/,_={};let k=1;const N={mouseenter:"mouseover",mouseleave:"mouseout"},S=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function A(e,t){return t&&`${t}::${k++}`||e.uidEvent||k++}function E(e){const t=A(e);return e.uidEvent=t,_[t]=_[t]||{},_[t]}function T(e,t){return function c(n){return j(n,{delegateTarget:e}),c.oneOff&&B.off(e,n.type,t),t.apply(e,[n])}}function I(e,t,c){return function n(i){const s=e.querySelectorAll(t);for(let{target:r}=i;r&&r!==this;r=r.parentNode)for(const a of s)if(a===r)return j(i,{delegateTarget:r}),n.oneOff&&B.off(e,i.type,t,c),c.apply(r,[i])}}function O(e,t,c=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===c))}function P(e,t,c){const n="string"===typeof t,i=n?c:t||c;let s=U(e);return S.has(s)||(s=e),[n,i,s]}function R(e,t,c,n,i){if("string"!==typeof t||!e)return;let[s,r,a]=P(t,c,n);if(t in N){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};r=e(r)}const o=E(e),l=o[a]||(o[a]={}),u=O(l,r,s?c:null);if(u)return void(u.oneOff=u.oneOff&&i);const f=A(r,t.replace(M,"")),h=s?I(e,c,r):T(e,r);h.delegationSelector=s?c:null,h.callable=r,h.oneOff=i,h.uidEvent=f,l[f]=h,e.addEventListener(a,h,s)}function D(e,t,c,n,i){const s=O(t[c],n,i);s&&(e.removeEventListener(c,s,Boolean(i)),delete t[c][s.uidEvent])}function F(e,t,c,n){const i=t[c]||{};for(const[s,r]of Object.entries(i))s.includes(n)&&D(e,t,c,r.callable,r.delegationSelector)}function U(e){return e=e.replace(L,""),N[e]||e}const B={on(e,t,c,n){R(e,t,c,n,!1)},one(e,t,c,n){R(e,t,c,n,!0)},off(e,t,c,n){if("string"!==typeof t||!e)return;const[i,s,r]=P(t,c,n),a=r!==t,o=E(e),l=o[r]||{},u=t.startsWith(".");if("undefined"===typeof s){if(u)for(const c of Object.keys(o))F(e,o,c,t.slice(1));for(const[c,n]of Object.entries(l)){const i=c.replace(x,"");a&&!t.includes(i)||D(e,o,r,n.callable,n.delegationSelector)}}else{if(!Object.keys(l).length)return;D(e,o,r,s,i?c:null)}},trigger(e,t,c){if("string"!==typeof t||!e)return null;const n=v(),i=U(t),s=t!==i;let r=null,a=!0,o=!0,l=!1;s&&n&&(r=n.Event(t,c),n(e).trigger(r),a=!r.isPropagationStopped(),o=!r.isImmediatePropagationStopped(),l=r.isDefaultPrevented());const u=j(new Event(t,{bubbles:a,cancelable:!0}),c);return l&&u.preventDefault(),o&&e.dispatchEvent(u),u.defaultPrevented&&r&&r.preventDefault(),u}};function j(e,t={}){for(const[n,i]of Object.entries(t))try{e[n]=i}catch(c){Object.defineProperty(e,n,{configurable:!0,get(){return i}})}return e}function q(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!==typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function $(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const W={setDataAttribute(e,t,c){e.setAttribute(`data-bs-${$(t)}`,c)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${$(t)}`)},getDataAttributes(e){if(!e)return{};const t={},c=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const n of c){let c=n.replace(/^bs/,"");c=c.charAt(0).toLowerCase()+c.slice(1,c.length),t[c]=q(e.dataset[n])}return t},getDataAttribute(e,t){return q(e.getAttribute(`data-bs-${$(t)}`))}};class G{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const c=u(t)?W.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"===typeof c?c:{},...u(t)?W.getDataAttributes(t):{},..."object"===typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[c,n]of Object.entries(t)){const t=e[c],i=u(t)?"element":r(t);if(!new RegExp(n).test(i))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${c}" provided type "${i}" but expected type "${n}".`)}}}const K="5.3.0-alpha2";class Y extends G{constructor(e,c){super(),e=f(e),e&&(this._element=e,this._config=this._getConfig(c),t.set(this._element,this.constructor.DATA_KEY,this))}dispose(){t.remove(this._element,this.constructor.DATA_KEY),B.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,c=!0){b(e,t,c)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return t.get(f(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return K}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const Q=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let c=e.getAttribute("href");if(!c||!c.includes("#")&&!c.startsWith("."))return null;c.includes("#")&&!c.startsWith("#")&&(c=`#${c.split("#")[1]}`),t=c&&"#"!==c?c.trim():null}return s(t)},J={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const c=[];let n=e.parentNode.closest(t);while(n)c.push(n),n=n.parentNode.closest(t);return c},prev(e,t){let c=e.previousElementSibling;while(c){if(c.matches(t))return[c];c=c.previousElementSibling}return[]},next(e,t){let c=e.nextElementSibling;while(c){if(c.matches(t))return[c];c=c.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(t,e).filter((e=>!d(e)&&h(e)))},getSelectorFromElement(e){const t=Q(e);return t&&J.findOne(t)?t:null},getElementFromSelector(e){const t=Q(e);return t?J.findOne(t):null},getMultipleElementsFromSelector(e){const t=Q(e);return t?J.find(t):[]}},X=(e,t="hide")=>{const c=`click.dismiss${e.EVENT_KEY}`,n=e.NAME;B.on(document,c,`[data-bs-dismiss="${n}"]`,(function(c){if(["A","AREA"].includes(this.tagName)&&c.preventDefault(),d(this))return;const i=J.getElementFromSelector(this)||this.closest(`.${n}`),s=e.getOrCreateInstance(i);s[t]()}))},Z="alert",ee="bs.alert",te=`.${ee}`,ce=`close${te}`,ne=`closed${te}`,ie="fade",se="show";class re extends Y{static get NAME(){return Z}close(){const e=B.trigger(this._element,ce);if(e.defaultPrevented)return;this._element.classList.remove(se);const t=this._element.classList.contains(ie);this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),B.trigger(this._element,ne),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=re.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}X(re,"close"),V(re);const ae="button",oe="bs.button",le=`.${oe}`,ue=".data-api",fe="active",he='[data-bs-toggle="button"]',de=`click${le}${ue}`;class pe extends Y{static get NAME(){return ae}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(fe))}static jQueryInterface(e){return this.each((function(){const t=pe.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}B.on(document,de,he,(e=>{e.preventDefault();const t=e.target.closest(he),c=pe.getOrCreateInstance(t);c.toggle()})),V(pe);const me="swipe",ge=".bs.swipe",ve=`touchstart${ge}`,ze=`touchmove${ge}`,He=`touchend${ge}`,ye=`pointerdown${ge}`,Ve=`pointerup${ge}`,Ce="touch",be="pen",we="pointer-event",Me=40,Le={endCallback:null,leftCallback:null,rightCallback:null},xe={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class _e extends G{constructor(e,t){super(),this._element=e,e&&_e.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Le}static get DefaultType(){return xe}static get NAME(){return me}dispose(){B.off(this._element,ge)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),C(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=Me)return;const t=e/this._deltaX;this._deltaX=0,t&&C(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(B.on(this._element,ye,(e=>this._start(e))),B.on(this._element,Ve,(e=>this._end(e))),this._element.classList.add(we)):(B.on(this._element,ve,(e=>this._start(e))),B.on(this._element,ze,(e=>this._move(e))),B.on(this._element,He,(e=>this._end(e))))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===be||e.pointerType===Ce)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ke="carousel",Ne="bs.carousel",Se=`.${Ne}`,Ae=".data-api",Ee="ArrowLeft",Te="ArrowRight",Ie=500,Oe="next",Pe="prev",Re="left",De="right",Fe=`slide${Se}`,Ue=`slid${Se}`,Be=`keydown${Se}`,je=`mouseenter${Se}`,qe=`mouseleave${Se}`,$e=`dragstart${Se}`,We=`load${Se}${Ae}`,Ge=`click${Se}${Ae}`,Ke="carousel",Ye="active",Qe="slide",Je="carousel-item-end",Xe="carousel-item-start",Ze="carousel-item-next",et="carousel-item-prev",tt=".active",ct=".carousel-item",nt=tt+ct,it=".carousel-item img",st=".carousel-indicators",rt="[data-bs-slide], [data-bs-slide-to]",at='[data-bs-ride="carousel"]',ot={[Ee]:De,[Te]:Re},lt={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ut={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ft extends Y{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=J.findOne(st,this._element),this._addEventListeners(),this._config.ride===Ke&&this.cycle()}static get Default(){return lt}static get DefaultType(){return ut}static get NAME(){return ke}next(){this._slide(Oe)}nextWhenVisible(){!document.hidden&&h(this._element)&&this.next()}prev(){this._slide(Pe)}pause(){this._isSliding&&l(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?B.one(this._element,Ue,(()=>this.cycle())):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void B.one(this._element,Ue,(()=>this.to(e)));const c=this._getItemIndex(this._getActive());if(c===e)return;const n=e>c?Oe:Pe;this._slide(n,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&B.on(this._element,Be,(e=>this._keydown(e))),"hover"===this._config.pause&&(B.on(this._element,je,(()=>this.pause())),B.on(this._element,qe,(()=>this._maybeEnableCycle()))),this._config.touch&&_e.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const c of J.find(it,this._element))B.on(c,$e,(e=>e.preventDefault()));const e=()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),Ie+this._config.interval))},t={leftCallback:()=>this._slide(this._directionToOrder(Re)),rightCallback:()=>this._slide(this._directionToOrder(De)),endCallback:e};this._swipeHelper=new _e(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=ot[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=J.findOne(tt,this._indicatorsElement);t.classList.remove(Ye),t.removeAttribute("aria-current");const c=J.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);c&&(c.classList.add(Ye),c.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const c=this._getActive(),n=e===Oe,i=t||w(this._getItems(),c,n,this._config.wrap);if(i===c)return;const s=this._getItemIndex(i),r=t=>B.trigger(this._element,t,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(c),to:s}),a=r(Fe);if(a.defaultPrevented)return;if(!c||!i)return;const o=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=i;const l=n?Xe:Je,u=n?Ze:et;i.classList.add(u),g(i),c.classList.add(l),i.classList.add(l);const f=()=>{i.classList.remove(l,u),i.classList.add(Ye),c.classList.remove(Ye,u,l),this._isSliding=!1,r(Ue)};this._queueCallback(f,c,this._isAnimated()),o&&this.cycle()}_isAnimated(){return this._element.classList.contains(Qe)}_getActive(){return J.findOne(nt,this._element)}_getItems(){return J.find(ct,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return y()?e===Re?Pe:Oe:e===Re?Oe:Pe}_orderToDirection(e){return y()?e===Pe?Re:De:e===Pe?De:Re}static jQueryInterface(e){return this.each((function(){const t=ft.getOrCreateInstance(this,e);if("number"!==typeof e){if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}B.on(document,Ge,rt,(function(e){const t=J.getElementFromSelector(this);if(!t||!t.classList.contains(Ke))return;e.preventDefault();const c=ft.getOrCreateInstance(t),n=this.getAttribute("data-bs-slide-to");return n?(c.to(n),void c._maybeEnableCycle()):"next"===W.getDataAttribute(this,"slide")?(c.next(),void c._maybeEnableCycle()):(c.prev(),void c._maybeEnableCycle())})),B.on(window,We,(()=>{const e=J.find(at);for(const t of e)ft.getOrCreateInstance(t)})),V(ft);const ht="collapse",dt="bs.collapse",pt=`.${dt}`,mt=".data-api",gt=`show${pt}`,vt=`shown${pt}`,zt=`hide${pt}`,Ht=`hidden${pt}`,yt=`click${pt}${mt}`,Vt="show",Ct="collapse",bt="collapsing",wt="collapsed",Mt=`:scope .${Ct} .${Ct}`,Lt="collapse-horizontal",xt="width",_t="height",kt=".collapse.show, .collapse.collapsing",Nt='[data-bs-toggle="collapse"]',St={parent:null,toggle:!0},At={parent:"(null|element)",toggle:"boolean"};class Et extends Y{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const c=J.find(Nt);for(const n of c){const e=J.getSelectorFromElement(n),t=J.find(e).filter((e=>e===this._element));null!==e&&t.length&&this._triggerArray.push(n)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return St}static get DefaultType(){return At}static get NAME(){return ht}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(kt).filter((e=>e!==this._element)).map((e=>Et.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;const t=B.trigger(this._element,gt);if(t.defaultPrevented)return;for(const r of e)r.hide();const c=this._getDimension();this._element.classList.remove(Ct),this._element.classList.add(bt),this._element.style[c]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(bt),this._element.classList.add(Ct,Vt),this._element.style[c]="",B.trigger(this._element,vt)},i=c[0].toUpperCase()+c.slice(1),s=`scroll${i}`;this._queueCallback(n,this._element,!0),this._element.style[c]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const e=B.trigger(this._element,zt);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,g(this._element),this._element.classList.add(bt),this._element.classList.remove(Ct,Vt);for(const n of this._triggerArray){const e=J.getElementFromSelector(n);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([n],!1)}this._isTransitioning=!0;const c=()=>{this._isTransitioning=!1,this._element.classList.remove(bt),this._element.classList.add(Ct),B.trigger(this._element,Ht)};this._element.style[t]="",this._queueCallback(c,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Vt)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=f(e.parent),e}_getDimension(){return this._element.classList.contains(Lt)?xt:_t}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Nt);for(const t of e){const e=J.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=J.find(Mt,this._config.parent);return J.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const c of e)c.classList.toggle(wt,!t),c.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const c=Et.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof c[e])throw new TypeError(`No method named "${e}"`);c[e]()}}))}}B.on(document,yt,Nt,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();for(const t of J.getMultipleElementsFromSelector(this))Et.getOrCreateInstance(t,{toggle:!1}).toggle()})),V(Et);var Tt="top",It="bottom",Ot="right",Pt="left",Rt="auto",Dt=[Tt,It,Ot,Pt],Ft="start",Ut="end",Bt="clippingParents",jt="viewport",qt="popper",$t="reference",Wt=Dt.reduce((function(e,t){return e.concat([t+"-"+Ft,t+"-"+Ut])}),[]),Gt=[].concat(Dt,[Rt]).reduce((function(e,t){return e.concat([t,t+"-"+Ft,t+"-"+Ut])}),[]),Kt="beforeRead",Yt="read",Qt="afterRead",Jt="beforeMain",Xt="main",Zt="afterMain",ec="beforeWrite",tc="write",cc="afterWrite",nc=[Kt,Yt,Qt,Jt,Xt,Zt,ec,tc,cc];function ic(e){return e?(e.nodeName||"").toLowerCase():null}function sc(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function rc(e){var t=sc(e).Element;return e instanceof t||e instanceof Element}function ac(e){var t=sc(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function oc(e){if("undefined"===typeof ShadowRoot)return!1;var t=sc(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function lc(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var c=t.styles[e]||{},n=t.attributes[e]||{},i=t.elements[e];ac(i)&&ic(i)&&(Object.assign(i.style,c),Object.keys(n).forEach((function(e){var t=n[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))}function uc(e){var t=e.state,c={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,c.popper),t.styles=c,t.elements.arrow&&Object.assign(t.elements.arrow.style,c.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],i=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:c[e]),r=s.reduce((function(e,t){return e[t]="",e}),{});ac(n)&&ic(n)&&(Object.assign(n.style,r),Object.keys(i).forEach((function(e){n.removeAttribute(e)})))}))}}const fc={name:"applyStyles",enabled:!0,phase:"write",fn:lc,effect:uc,requires:["computeStyles"]};function hc(e){return e.split("-")[0]}var dc=Math.max,pc=Math.min,mc=Math.round;function gc(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function vc(){return!/^((?!chrome|android).)*safari/i.test(gc())}function zc(e,t,c){void 0===t&&(t=!1),void 0===c&&(c=!1);var n=e.getBoundingClientRect(),i=1,s=1;t&&ac(e)&&(i=e.offsetWidth>0&&mc(n.width)/e.offsetWidth||1,s=e.offsetHeight>0&&mc(n.height)/e.offsetHeight||1);var r=rc(e)?sc(e):window,a=r.visualViewport,o=!vc()&&c,l=(n.left+(o&&a?a.offsetLeft:0))/i,u=(n.top+(o&&a?a.offsetTop:0))/s,f=n.width/i,h=n.height/s;return{width:f,height:h,top:u,right:l+f,bottom:u+h,left:l,x:l,y:u}}function Hc(e){var t=zc(e),c=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-c)<=1&&(c=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:c,height:n}}function yc(e,t){var c=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(c&&oc(c)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Vc(e){return sc(e).getComputedStyle(e)}function Cc(e){return["table","td","th"].indexOf(ic(e))>=0}function bc(e){return((rc(e)?e.ownerDocument:e.document)||window.document).documentElement}function wc(e){return"html"===ic(e)?e:e.assignedSlot||e.parentNode||(oc(e)?e.host:null)||bc(e)}function Mc(e){return ac(e)&&"fixed"!==Vc(e).position?e.offsetParent:null}function Lc(e){var t=/firefox/i.test(gc()),c=/Trident/i.test(gc());if(c&&ac(e)){var n=Vc(e);if("fixed"===n.position)return null}var i=wc(e);oc(i)&&(i=i.host);while(ac(i)&&["html","body"].indexOf(ic(i))<0){var s=Vc(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}function xc(e){var t=sc(e),c=Mc(e);while(c&&Cc(c)&&"static"===Vc(c).position)c=Mc(c);return c&&("html"===ic(c)||"body"===ic(c)&&"static"===Vc(c).position)?t:c||Lc(e)||t}function _c(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function kc(e,t,c){return dc(e,pc(t,c))}function Nc(e,t,c){var n=kc(e,t,c);return n>c?c:n}function Sc(){return{top:0,right:0,bottom:0,left:0}}function Ac(e){return Object.assign({},Sc(),e)}function Ec(e,t){return t.reduce((function(t,c){return t[c]=e,t}),{})}var Tc=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,Ac("number"!==typeof e?e:Ec(e,Dt))};function Ic(e){var t,c=e.state,n=e.name,i=e.options,s=c.elements.arrow,r=c.modifiersData.popperOffsets,a=hc(c.placement),o=_c(a),l=[Pt,Ot].indexOf(a)>=0,u=l?"height":"width";if(s&&r){var f=Tc(i.padding,c),h=Hc(s),d="y"===o?Tt:Pt,p="y"===o?It:Ot,m=c.rects.reference[u]+c.rects.reference[o]-r[o]-c.rects.popper[u],g=r[o]-c.rects.reference[o],v=xc(s),z=v?"y"===o?v.clientHeight||0:v.clientWidth||0:0,H=m/2-g/2,y=f[d],V=z-h[u]-f[p],C=z/2-h[u]/2+H,b=kc(y,C,V),w=o;c.modifiersData[n]=(t={},t[w]=b,t.centerOffset=b-C,t)}}function Oc(e){var t=e.state,c=e.options,n=c.element,i=void 0===n?"[data-popper-arrow]":n;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&yc(t.elements.popper,i)&&(t.elements.arrow=i)}const Pc={name:"arrow",enabled:!0,phase:"main",fn:Ic,effect:Oc,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Rc(e){return e.split("-")[1]}var Dc={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Fc(e,t){var c=e.x,n=e.y,i=t.devicePixelRatio||1;return{x:mc(c*i)/i||0,y:mc(n*i)/i||0}}function Uc(e){var t,c=e.popper,n=e.popperRect,i=e.placement,s=e.variation,r=e.offsets,a=e.position,o=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,f=e.isFixed,h=r.x,d=void 0===h?0:h,p=r.y,m=void 0===p?0:p,g="function"===typeof u?u({x:d,y:m}):{x:d,y:m};d=g.x,m=g.y;var v=r.hasOwnProperty("x"),z=r.hasOwnProperty("y"),H=Pt,y=Tt,V=window;if(l){var C=xc(c),b="clientHeight",w="clientWidth";if(C===sc(c)&&(C=bc(c),"static"!==Vc(C).position&&"absolute"===a&&(b="scrollHeight",w="scrollWidth")),i===Tt||(i===Pt||i===Ot)&&s===Ut){y=It;var M=f&&C===V&&V.visualViewport?V.visualViewport.height:C[b];m-=M-n.height,m*=o?1:-1}if(i===Pt||(i===Tt||i===It)&&s===Ut){H=Ot;var L=f&&C===V&&V.visualViewport?V.visualViewport.width:C[w];d-=L-n.width,d*=o?1:-1}}var x,_=Object.assign({position:a},l&&Dc),k=!0===u?Fc({x:d,y:m},sc(c)):{x:d,y:m};return d=k.x,m=k.y,o?Object.assign({},_,(x={},x[y]=z?"0":"",x[H]=v?"0":"",x.transform=(V.devicePixelRatio||1)<=1?"translate("+d+"px, "+m+"px)":"translate3d("+d+"px, "+m+"px, 0)",x)):Object.assign({},_,(t={},t[y]=z?m+"px":"",t[H]=v?d+"px":"",t.transform="",t))}function Bc(e){var t=e.state,c=e.options,n=c.gpuAcceleration,i=void 0===n||n,s=c.adaptive,r=void 0===s||s,a=c.roundOffsets,o=void 0===a||a,l={placement:hc(t.placement),variation:Rc(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Uc(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:r,roundOffsets:o})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Uc(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:o})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const jc={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Bc,data:{}};var qc={passive:!0};function $c(e){var t=e.state,c=e.instance,n=e.options,i=n.scroll,s=void 0===i||i,r=n.resize,a=void 0===r||r,o=sc(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach((function(e){e.addEventListener("scroll",c.update,qc)})),a&&o.addEventListener("resize",c.update,qc),function(){s&&l.forEach((function(e){e.removeEventListener("scroll",c.update,qc)})),a&&o.removeEventListener("resize",c.update,qc)}}const Wc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:$c,data:{}};var Gc={left:"right",right:"left",bottom:"top",top:"bottom"};function Kc(e){return e.replace(/left|right|bottom|top/g,(function(e){return Gc[e]}))}var Yc={start:"end",end:"start"};function Qc(e){return e.replace(/start|end/g,(function(e){return Yc[e]}))}function Jc(e){var t=sc(e),c=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:c,scrollTop:n}}function Xc(e){return zc(bc(e)).left+Jc(e).scrollLeft}function Zc(e,t){var c=sc(e),n=bc(e),i=c.visualViewport,s=n.clientWidth,r=n.clientHeight,a=0,o=0;if(i){s=i.width,r=i.height;var l=vc();(l||!l&&"fixed"===t)&&(a=i.offsetLeft,o=i.offsetTop)}return{width:s,height:r,x:a+Xc(e),y:o}}function en(e){var t,c=bc(e),n=Jc(e),i=null==(t=e.ownerDocument)?void 0:t.body,s=dc(c.scrollWidth,c.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),r=dc(c.scrollHeight,c.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-n.scrollLeft+Xc(e),o=-n.scrollTop;return"rtl"===Vc(i||c).direction&&(a+=dc(c.clientWidth,i?i.clientWidth:0)-s),{width:s,height:r,x:a,y:o}}function tn(e){var t=Vc(e),c=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(c+i+n)}function cn(e){return["html","body","#document"].indexOf(ic(e))>=0?e.ownerDocument.body:ac(e)&&tn(e)?e:cn(wc(e))}function nn(e,t){var c;void 0===t&&(t=[]);var n=cn(e),i=n===(null==(c=e.ownerDocument)?void 0:c.body),s=sc(n),r=i?[s].concat(s.visualViewport||[],tn(n)?n:[]):n,a=t.concat(r);return i?a:a.concat(nn(wc(r)))}function sn(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function rn(e,t){var c=zc(e,!1,"fixed"===t);return c.top=c.top+e.clientTop,c.left=c.left+e.clientLeft,c.bottom=c.top+e.clientHeight,c.right=c.left+e.clientWidth,c.width=e.clientWidth,c.height=e.clientHeight,c.x=c.left,c.y=c.top,c}function an(e,t,c){return t===jt?sn(Zc(e,c)):rc(t)?rn(t,c):sn(en(bc(e)))}function on(e){var t=nn(wc(e)),c=["absolute","fixed"].indexOf(Vc(e).position)>=0,n=c&&ac(e)?xc(e):e;return rc(n)?t.filter((function(e){return rc(e)&&yc(e,n)&&"body"!==ic(e)})):[]}function ln(e,t,c,n){var i="clippingParents"===t?on(e):[].concat(t),s=[].concat(i,[c]),r=s[0],a=s.reduce((function(t,c){var i=an(e,c,n);return t.top=dc(i.top,t.top),t.right=pc(i.right,t.right),t.bottom=pc(i.bottom,t.bottom),t.left=dc(i.left,t.left),t}),an(e,r,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function un(e){var t,c=e.reference,n=e.element,i=e.placement,s=i?hc(i):null,r=i?Rc(i):null,a=c.x+c.width/2-n.width/2,o=c.y+c.height/2-n.height/2;switch(s){case Tt:t={x:a,y:c.y-n.height};break;case It:t={x:a,y:c.y+c.height};break;case Ot:t={x:c.x+c.width,y:o};break;case Pt:t={x:c.x-n.width,y:o};break;default:t={x:c.x,y:c.y}}var l=s?_c(s):null;if(null!=l){var u="y"===l?"height":"width";switch(r){case Ft:t[l]=t[l]-(c[u]/2-n[u]/2);break;case Ut:t[l]=t[l]+(c[u]/2-n[u]/2);break}}return t}function fn(e,t){void 0===t&&(t={});var c=t,n=c.placement,i=void 0===n?e.placement:n,s=c.strategy,r=void 0===s?e.strategy:s,a=c.boundary,o=void 0===a?Bt:a,l=c.rootBoundary,u=void 0===l?jt:l,f=c.elementContext,h=void 0===f?qt:f,d=c.altBoundary,p=void 0!==d&&d,m=c.padding,g=void 0===m?0:m,v=Ac("number"!==typeof g?g:Ec(g,Dt)),z=h===qt?$t:qt,H=e.rects.popper,y=e.elements[p?z:h],V=ln(rc(y)?y:y.contextElement||bc(e.elements.popper),o,u,r),C=zc(e.elements.reference),b=un({reference:C,element:H,strategy:"absolute",placement:i}),w=sn(Object.assign({},H,b)),M=h===qt?w:C,L={top:V.top-M.top+v.top,bottom:M.bottom-V.bottom+v.bottom,left:V.left-M.left+v.left,right:M.right-V.right+v.right},x=e.modifiersData.offset;if(h===qt&&x){var _=x[i];Object.keys(L).forEach((function(e){var t=[Ot,It].indexOf(e)>=0?1:-1,c=[Tt,It].indexOf(e)>=0?"y":"x";L[e]+=_[c]*t}))}return L}function hn(e,t){void 0===t&&(t={});var c=t,n=c.placement,i=c.boundary,s=c.rootBoundary,r=c.padding,a=c.flipVariations,o=c.allowedAutoPlacements,l=void 0===o?Gt:o,u=Rc(n),f=u?a?Wt:Wt.filter((function(e){return Rc(e)===u})):Dt,h=f.filter((function(e){return l.indexOf(e)>=0}));0===h.length&&(h=f);var d=h.reduce((function(t,c){return t[c]=fn(e,{placement:c,boundary:i,rootBoundary:s,padding:r})[hc(c)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}function dn(e){if(hc(e)===Rt)return[];var t=Kc(e);return[Qc(e),t,Qc(t)]}function pn(e){var t=e.state,c=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var i=c.mainAxis,s=void 0===i||i,r=c.altAxis,a=void 0===r||r,o=c.fallbackPlacements,l=c.padding,u=c.boundary,f=c.rootBoundary,h=c.altBoundary,d=c.flipVariations,p=void 0===d||d,m=c.allowedAutoPlacements,g=t.options.placement,v=hc(g),z=v===g,H=o||(z||!p?[Kc(g)]:dn(g)),y=[g].concat(H).reduce((function(e,c){return e.concat(hc(c)===Rt?hn(t,{placement:c,boundary:u,rootBoundary:f,padding:l,flipVariations:p,allowedAutoPlacements:m}):c)}),[]),V=t.rects.reference,C=t.rects.popper,b=new Map,w=!0,M=y[0],L=0;L<y.length;L++){var x=y[L],_=hc(x),k=Rc(x)===Ft,N=[Tt,It].indexOf(_)>=0,S=N?"width":"height",A=fn(t,{placement:x,boundary:u,rootBoundary:f,altBoundary:h,padding:l}),E=N?k?Ot:Pt:k?It:Tt;V[S]>C[S]&&(E=Kc(E));var T=Kc(E),I=[];if(s&&I.push(A[_]<=0),a&&I.push(A[E]<=0,A[T]<=0),I.every((function(e){return e}))){M=x,w=!1;break}b.set(x,I)}if(w)for(var O=p?3:1,P=function(e){var t=y.find((function(t){var c=b.get(t);if(c)return c.slice(0,e).every((function(e){return e}))}));if(t)return M=t,"break"},R=O;R>0;R--){var D=P(R);if("break"===D)break}t.placement!==M&&(t.modifiersData[n]._skip=!0,t.placement=M,t.reset=!0)}}const mn={name:"flip",enabled:!0,phase:"main",fn:pn,requiresIfExists:["offset"],data:{_skip:!1}};function gn(e,t,c){return void 0===c&&(c={x:0,y:0}),{top:e.top-t.height-c.y,right:e.right-t.width+c.x,bottom:e.bottom-t.height+c.y,left:e.left-t.width-c.x}}function vn(e){return[Tt,Ot,It,Pt].some((function(t){return e[t]>=0}))}function zn(e){var t=e.state,c=e.name,n=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,r=fn(t,{elementContext:"reference"}),a=fn(t,{altBoundary:!0}),o=gn(r,n),l=gn(a,i,s),u=vn(o),f=vn(l);t.modifiersData[c]={referenceClippingOffsets:o,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const Hn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:zn};function yn(e,t,c){var n=hc(e),i=[Pt,Tt].indexOf(n)>=0?-1:1,s="function"===typeof c?c(Object.assign({},t,{placement:e})):c,r=s[0],a=s[1];return r=r||0,a=(a||0)*i,[Pt,Ot].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}function Vn(e){var t=e.state,c=e.options,n=e.name,i=c.offset,s=void 0===i?[0,0]:i,r=Gt.reduce((function(e,c){return e[c]=yn(c,t.rects,s),e}),{}),a=r[t.placement],o=a.x,l=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=o,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=r}const Cn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Vn};function bn(e){var t=e.state,c=e.name;t.modifiersData[c]=un({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const wn={name:"popperOffsets",enabled:!0,phase:"read",fn:bn,data:{}};function Mn(e){return"x"===e?"y":"x"}function Ln(e){var t=e.state,c=e.options,n=e.name,i=c.mainAxis,s=void 0===i||i,r=c.altAxis,a=void 0!==r&&r,o=c.boundary,l=c.rootBoundary,u=c.altBoundary,f=c.padding,h=c.tether,d=void 0===h||h,p=c.tetherOffset,m=void 0===p?0:p,g=fn(t,{boundary:o,rootBoundary:l,padding:f,altBoundary:u}),v=hc(t.placement),z=Rc(t.placement),H=!z,y=_c(v),V=Mn(y),C=t.modifiersData.popperOffsets,b=t.rects.reference,w=t.rects.popper,M="function"===typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,L="number"===typeof M?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),x=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,_={x:0,y:0};if(C){if(s){var k,N="y"===y?Tt:Pt,S="y"===y?It:Ot,A="y"===y?"height":"width",E=C[y],T=E+g[N],I=E-g[S],O=d?-w[A]/2:0,P=z===Ft?b[A]:w[A],R=z===Ft?-w[A]:-b[A],D=t.elements.arrow,F=d&&D?Hc(D):{width:0,height:0},U=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Sc(),B=U[N],j=U[S],q=kc(0,b[A],F[A]),$=H?b[A]/2-O-q-B-L.mainAxis:P-q-B-L.mainAxis,W=H?-b[A]/2+O+q+j+L.mainAxis:R+q+j+L.mainAxis,G=t.elements.arrow&&xc(t.elements.arrow),K=G?"y"===y?G.clientTop||0:G.clientLeft||0:0,Y=null!=(k=null==x?void 0:x[y])?k:0,Q=E+$-Y-K,J=E+W-Y,X=kc(d?pc(T,Q):T,E,d?dc(I,J):I);C[y]=X,_[y]=X-E}if(a){var Z,ee="x"===y?Tt:Pt,te="x"===y?It:Ot,ce=C[V],ne="y"===V?"height":"width",ie=ce+g[ee],se=ce-g[te],re=-1!==[Tt,Pt].indexOf(v),ae=null!=(Z=null==x?void 0:x[V])?Z:0,oe=re?ie:ce-b[ne]-w[ne]-ae+L.altAxis,le=re?ce+b[ne]+w[ne]-ae-L.altAxis:se,ue=d&&re?Nc(oe,ce,le):kc(d?oe:ie,ce,d?le:se);C[V]=ue,_[V]=ue-ce}t.modifiersData[n]=_}}const xn={name:"preventOverflow",enabled:!0,phase:"main",fn:Ln,requiresIfExists:["offset"]};function _n(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function kn(e){return e!==sc(e)&&ac(e)?_n(e):Jc(e)}function Nn(e){var t=e.getBoundingClientRect(),c=mc(t.width)/e.offsetWidth||1,n=mc(t.height)/e.offsetHeight||1;return 1!==c||1!==n}function Sn(e,t,c){void 0===c&&(c=!1);var n=ac(t),i=ac(t)&&Nn(t),s=bc(t),r=zc(e,i,c),a={scrollLeft:0,scrollTop:0},o={x:0,y:0};return(n||!n&&!c)&&(("body"!==ic(t)||tn(s))&&(a=kn(t)),ac(t)?(o=zc(t,!0),o.x+=t.clientLeft,o.y+=t.clientTop):s&&(o.x=Xc(s))),{x:r.left+a.scrollLeft-o.x,y:r.top+a.scrollTop-o.y,width:r.width,height:r.height}}function An(e){var t=new Map,c=new Set,n=[];function i(e){c.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach((function(e){if(!c.has(e)){var n=t.get(e);n&&i(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){c.has(e.name)||i(e)})),n}function En(e){var t=An(e);return nc.reduce((function(e,c){return e.concat(t.filter((function(e){return e.phase===c})))}),[])}function Tn(e){var t;return function(){return t||(t=new Promise((function(c){Promise.resolve().then((function(){t=void 0,c(e())}))}))),t}}function In(e){var t=e.reduce((function(e,t){var c=e[t.name];return e[t.name]=c?Object.assign({},c,t,{options:Object.assign({},c.options,t.options),data:Object.assign({},c.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var On={placement:"bottom",modifiers:[],strategy:"absolute"};function Pn(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Rn(e){void 0===e&&(e={});var t=e,c=t.defaultModifiers,n=void 0===c?[]:c,i=t.defaultOptions,s=void 0===i?On:i;return function(e,t,c){void 0===c&&(c=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},On,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},r=[],a=!1,o={state:i,setOptions:function(c){var r="function"===typeof c?c(i.options):c;u(),i.options=Object.assign({},s,i.options,r),i.scrollParents={reference:rc(e)?nn(e):e.contextElement?nn(e.contextElement):[],popper:nn(t)};var a=En(In([].concat(n,i.options.modifiers)));return i.orderedModifiers=a.filter((function(e){return e.enabled})),l(),o.update()},forceUpdate:function(){if(!a){var e=i.elements,t=e.reference,c=e.popper;if(Pn(t,c)){i.rects={reference:Sn(t,xc(c),"fixed"===i.options.strategy),popper:Hc(c)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<i.orderedModifiers.length;n++)if(!0!==i.reset){var s=i.orderedModifiers[n],r=s.fn,l=s.options,u=void 0===l?{}:l,f=s.name;"function"===typeof r&&(i=r({state:i,options:u,name:f,instance:o})||i)}else i.reset=!1,n=-1}}},update:Tn((function(){return new Promise((function(e){o.forceUpdate(),e(i)}))})),destroy:function(){u(),a=!0}};if(!Pn(e,t))return o;function l(){i.orderedModifiers.forEach((function(e){var t=e.name,c=e.options,n=void 0===c?{}:c,s=e.effect;if("function"===typeof s){var a=s({state:i,name:t,instance:o,options:n}),l=function(){};r.push(a||l)}}))}function u(){r.forEach((function(e){return e()})),r=[]}return o.setOptions(c).then((function(e){!a&&c.onFirstUpdate&&c.onFirstUpdate(e)})),o}}var Dn=Rn(),Fn=[Wc,wn,jc,fc],Un=Rn({defaultModifiers:Fn}),Bn=[Wc,wn,jc,fc,Cn,mn,xn,Pc,Hn],jn=Rn({defaultModifiers:Bn});const qn=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Zt,afterRead:Qt,afterWrite:cc,applyStyles:fc,arrow:Pc,auto:Rt,basePlacements:Dt,beforeMain:Jt,beforeRead:Kt,beforeWrite:ec,bottom:It,clippingParents:Bt,computeStyles:jc,createPopper:jn,createPopperBase:Dn,createPopperLite:Un,detectOverflow:fn,end:Ut,eventListeners:Wc,flip:mn,hide:Hn,left:Pt,main:Xt,modifierPhases:nc,offset:Cn,placements:Gt,popper:qt,popperGenerator:Rn,popperOffsets:wn,preventOverflow:xn,read:Yt,reference:$t,right:Ot,start:Ft,top:Tt,variationPlacements:Wt,viewport:jt,write:tc},Symbol.toStringTag,{value:"Module"})),$n="dropdown",Wn="bs.dropdown",Gn=`.${Wn}`,Kn=".data-api",Yn="Escape",Qn="Tab",Jn="ArrowUp",Xn="ArrowDown",Zn=2,ei=`hide${Gn}`,ti=`hidden${Gn}`,ci=`show${Gn}`,ni=`shown${Gn}`,ii=`click${Gn}${Kn}`,si=`keydown${Gn}${Kn}`,ri=`keyup${Gn}${Kn}`,ai="show",oi="dropup",li="dropend",ui="dropstart",fi="dropup-center",hi="dropdown-center",di='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',pi=`${di}.${ai}`,mi=".dropdown-menu",gi=".navbar",vi=".navbar-nav",zi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Hi=y()?"top-end":"top-start",yi=y()?"top-start":"top-end",Vi=y()?"bottom-end":"bottom-start",Ci=y()?"bottom-start":"bottom-end",bi=y()?"left-start":"right-start",wi=y()?"right-start":"left-start",Mi="top",Li="bottom",xi={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},_i={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ki extends Y{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=J.next(this._element,mi)[0]||J.prev(this._element,mi)[0]||J.findOne(mi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return xi}static get DefaultType(){return _i}static get NAME(){return $n}toggle(){return this._isShown()?this.hide():this.show()}show(){if(d(this._element)||this._isShown())return;const e={relatedTarget:this._element},t=B.trigger(this._element,ci,e);if(!t.defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(vi))for(const e of[].concat(...document.body.children))B.on(e,"mouseover",m);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ai),this._element.classList.add(ai),B.trigger(this._element,ni,e)}}hide(){if(d(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=B.trigger(this._element,ei,e);if(!t.defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))B.off(e,"mouseover",m);this._popper&&this._popper.destroy(),this._menu.classList.remove(ai),this._element.classList.remove(ai),this._element.setAttribute("aria-expanded","false"),W.removeDataAttribute(this._menu,"popper"),B.trigger(this._element,ti,e)}}_getConfig(e){if(e=super._getConfig(e),"object"===typeof e.reference&&!u(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(`${$n.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if("undefined"===typeof qn)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:u(this._config.reference)?e=f(this._config.reference):"object"===typeof this._config.reference&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=jn(e,this._menu,t)}_isShown(){return this._menu.classList.contains(ai)}_getPlacement(){const e=this._parent;if(e.classList.contains(li))return bi;if(e.classList.contains(ui))return wi;if(e.classList.contains(fi))return Mi;if(e.classList.contains(hi))return Li;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(oi)?t?yi:Hi:t?Ci:Vi}_detectNavbar(){return null!==this._element.closest(gi)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(W.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...C(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:t}){const c=J.find(zi,this._menu).filter((e=>h(e)));c.length&&w(c,t,e===Xn,!c.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=ki.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e.button===Zn||"keyup"===e.type&&e.key!==Qn)return;const t=J.find(pi);for(const c of t){const t=ki.getInstance(c);if(!t||!1===t._config.autoClose)continue;const n=e.composedPath(),i=n.includes(t._menu);if(n.includes(t._element)||"inside"===t._config.autoClose&&!i||"outside"===t._config.autoClose&&i)continue;if(t._menu.contains(e.target)&&("keyup"===e.type&&e.key===Qn||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const s={relatedTarget:t._element};"click"===e.type&&(s.clickEvent=e),t._completeHide(s)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),c=e.key===Yn,n=[Jn,Xn].includes(e.key);if(!n&&!c)return;if(t&&!c)return;e.preventDefault();const i=this.matches(di)?this:J.prev(this,di)[0]||J.next(this,di)[0]||J.findOne(di,e.delegateTarget.parentNode),s=ki.getOrCreateInstance(i);if(n)return e.stopPropagation(),s.show(),void s._selectMenuItem(e);s._isShown()&&(e.stopPropagation(),s.hide(),i.focus())}}B.on(document,si,di,ki.dataApiKeydownHandler),B.on(document,si,mi,ki.dataApiKeydownHandler),B.on(document,ii,ki.clearMenus),B.on(document,ri,ki.clearMenus),B.on(document,ii,di,(function(e){e.preventDefault(),ki.getOrCreateInstance(this).toggle()})),V(ki);const Ni="backdrop",Si="fade",Ai="show",Ei=`mousedown.bs.${Ni}`,Ti={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ii={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Oi extends G{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Ti}static get DefaultType(){return Ii}static get NAME(){return Ni}show(e){if(!this._config.isVisible)return void C(e);this._append();const t=this._getElement();this._config.isAnimated&&g(t),t.classList.add(Ai),this._emulateAnimation((()=>{C(e)}))}hide(e){this._config.isVisible?(this._getElement().classList.remove(Ai),this._emulateAnimation((()=>{this.dispose(),C(e)}))):C(e)}dispose(){this._isAppended&&(B.off(this._element,Ei),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Si),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=f(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),B.on(e,Ei,(()=>{C(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(e){b(e,this._getElement(),this._config.isAnimated)}}const Pi="focustrap",Ri="bs.focustrap",Di=`.${Ri}`,Fi=`focusin${Di}`,Ui=`keydown.tab${Di}`,Bi="Tab",ji="forward",qi="backward",$i={autofocus:!0,trapElement:null},Wi={autofocus:"boolean",trapElement:"element"};class Gi extends G{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return $i}static get DefaultType(){return Wi}static get NAME(){return Pi}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),B.off(document,Di),B.on(document,Fi,(e=>this._handleFocusin(e))),B.on(document,Ui,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,B.off(document,Di))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const c=J.focusableChildren(t);0===c.length?t.focus():this._lastTabNavDirection===qi?c[c.length-1].focus():c[0].focus()}_handleKeydown(e){e.key===Bi&&(this._lastTabNavDirection=e.shiftKey?qi:ji)}}const Ki=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Yi=".sticky-top",Qi="padding-right",Ji="margin-right";class Xi{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Qi,(t=>t+e)),this._setElementAttributes(Ki,Qi,(t=>t+e)),this._setElementAttributes(Yi,Ji,(t=>t-e))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Qi),this._resetElementAttributes(Ki,Qi),this._resetElementAttributes(Yi,Ji)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,c){const n=this.getWidth(),i=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+n)return;this._saveInitialAttribute(e,t);const i=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${c(Number.parseFloat(i))}px`)};this._applyManipulationCallback(e,i)}_saveInitialAttribute(e,t){const c=e.style.getPropertyValue(t);c&&W.setDataAttribute(e,t,c)}_resetElementAttributes(e,t){const c=e=>{const c=W.getDataAttribute(e,t);null!==c?(W.removeDataAttribute(e,t),e.style.setProperty(t,c)):e.style.removeProperty(t)};this._applyManipulationCallback(e,c)}_applyManipulationCallback(e,t){if(u(e))t(e);else for(const c of J.find(e,this._element))t(c)}}const Zi="modal",es="bs.modal",ts=`.${es}`,cs=".data-api",ns="Escape",is=`hide${ts}`,ss=`hidePrevented${ts}`,rs=`hidden${ts}`,as=`show${ts}`,os=`shown${ts}`,ls=`resize${ts}`,us=`click.dismiss${ts}`,fs=`mousedown.dismiss${ts}`,hs=`keydown.dismiss${ts}`,ds=`click${ts}${cs}`,ps="modal-open",ms="fade",gs="show",vs="modal-static",zs=".modal.show",Hs=".modal-dialog",ys=".modal-body",Vs='[data-bs-toggle="modal"]',Cs={backdrop:!0,focus:!0,keyboard:!0},bs={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ws extends Y{constructor(e,t){super(e,t),this._dialog=J.findOne(Hs,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Xi,this._addEventListeners()}static get Default(){return Cs}static get DefaultType(){return bs}static get NAME(){return Zi}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=B.trigger(this._element,as,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ps),this._adjustDialog(),this._backdrop.show((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;const e=B.trigger(this._element,is);e.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(gs),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){B.off(window,ts),B.off(this._dialog,ts),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Oi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Gi({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=J.findOne(ys,this._dialog);t&&(t.scrollTop=0),g(this._element),this._element.classList.add(gs);const c=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,B.trigger(this._element,os,{relatedTarget:e})};this._queueCallback(c,this._dialog,this._isAnimated())}_addEventListeners(){B.on(this._element,hs,(e=>{e.key===ns&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),B.on(window,ls,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),B.on(this._element,fs,(e=>{B.one(this._element,us,(t=>{this._element===e.target&&this._element===t.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(ps),this._resetAdjustments(),this._scrollBar.reset(),B.trigger(this._element,rs)}))}_isAnimated(){return this._element.classList.contains(ms)}_triggerBackdropTransition(){const e=B.trigger(this._element,ss);if(e.defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,c=this._element.style.overflowY;"hidden"===c||this._element.classList.contains(vs)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(vs),this._queueCallback((()=>{this._element.classList.remove(vs),this._queueCallback((()=>{this._element.style.overflowY=c}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),c=t>0;if(c&&!e){const e=y()?"paddingLeft":"paddingRight";this._element.style[e]=`${t}px`}if(!c&&e){const e=y()?"paddingRight":"paddingLeft";this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const c=ws.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof c[e])throw new TypeError(`No method named "${e}"`);c[e](t)}}))}}B.on(document,ds,Vs,(function(e){const t=J.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),B.one(t,as,(e=>{e.defaultPrevented||B.one(t,rs,(()=>{h(this)&&this.focus()}))}));const c=J.findOne(zs);c&&ws.getInstance(c).hide();const n=ws.getOrCreateInstance(t);n.toggle(this)})),X(ws),V(ws);const Ms="offcanvas",Ls="bs.offcanvas",xs=`.${Ls}`,_s=".data-api",ks=`load${xs}${_s}`,Ns="Escape",Ss="show",As="showing",Es="hiding",Ts="offcanvas-backdrop",Is=".offcanvas.show",Os=`show${xs}`,Ps=`shown${xs}`,Rs=`hide${xs}`,Ds=`hidePrevented${xs}`,Fs=`hidden${xs}`,Us=`resize${xs}`,Bs=`click${xs}${_s}`,js=`keydown.dismiss${xs}`,qs='[data-bs-toggle="offcanvas"]',$s={backdrop:!0,keyboard:!0,scroll:!1},Ws={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Gs extends Y{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return $s}static get DefaultType(){return Ws}static get NAME(){return Ms}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=B.trigger(this._element,Os,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new Xi).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(As);const c=()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ss),this._element.classList.remove(As),B.trigger(this._element,Ps,{relatedTarget:e})};this._queueCallback(c,this._element,!0)}hide(){if(!this._isShown)return;const e=B.trigger(this._element,Rs);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Es),this._backdrop.hide();const t=()=>{this._element.classList.remove(Ss,Es),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new Xi).reset(),B.trigger(this._element,Fs)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{"static"!==this._config.backdrop?this.hide():B.trigger(this._element,Ds)},t=Boolean(this._config.backdrop);return new Oi({className:Ts,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new Gi({trapElement:this._element})}_addEventListeners(){B.on(this._element,js,(e=>{e.key===Ns&&(this._config.keyboard?this.hide():B.trigger(this._element,Ds))}))}static jQueryInterface(e){return this.each((function(){const t=Gs.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}B.on(document,Bs,qs,(function(e){const t=J.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),d(this))return;B.one(t,Fs,(()=>{h(this)&&this.focus()}));const c=J.findOne(Is);c&&c!==t&&Gs.getInstance(c).hide();const n=Gs.getOrCreateInstance(t);n.toggle(this)})),B.on(window,ks,(()=>{for(const e of J.find(Is))Gs.getOrCreateInstance(e).show()})),B.on(window,Us,(()=>{for(const e of J.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&Gs.getOrCreateInstance(e).hide()})),X(Gs),V(Gs);const Ks=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ys=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Qs=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Js=(e,t)=>{const c=e.nodeName.toLowerCase();return t.includes(c)?!Ks.has(c)||Boolean(Ys.test(e.nodeValue)||Qs.test(e.nodeValue)):t.filter((e=>e instanceof RegExp)).some((e=>e.test(c)))},Xs=/^aria-[\w-]*$/i,Zs={"*":["class","dir","id","lang","role",Xs],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function er(e,t,c){if(!e.length)return e;if(c&&"function"===typeof c)return c(e);const n=new window.DOMParser,i=n.parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const r of s){const e=r.nodeName.toLowerCase();if(!Object.keys(t).includes(e)){r.remove();continue}const c=[].concat(...r.attributes),n=[].concat(t["*"]||[],t[e]||[]);for(const t of c)Js(t,n)||r.removeAttribute(t.nodeName)}return i.body.innerHTML}const tr="TemplateFactory",cr={allowList:Zs,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},nr={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},ir={entry:"(string|element|function|null)",selector:"(string|element)"};class sr extends G{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return cr}static get DefaultType(){return nr}static get NAME(){return tr}getContent(){return Object.values(this._config.content).map((e=>this._resolvePossibleFunction(e))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[n,i]of Object.entries(this._config.content))this._setContent(e,i,n);const t=e.children[0],c=this._resolvePossibleFunction(this._config.extraClass);return c&&t.classList.add(...c.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,c]of Object.entries(e))super._typeCheckConfig({selector:t,entry:c},ir)}_setContent(e,t,c){const n=J.findOne(c,e);n&&(t=this._resolvePossibleFunction(t),t?u(t)?this._putElementInTemplate(f(t),n):this._config.html?n.innerHTML=this._maybeSanitize(t):n.textContent=t:n.remove())}_maybeSanitize(e){return this._config.sanitize?er(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return C(e,[this])}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML="",void t.append(e);t.textContent=e.textContent}}const rr="tooltip",ar=new Set(["sanitize","allowList","sanitizeFn"]),or="fade",lr="modal",ur="show",fr=".tooltip-inner",hr=`.${lr}`,dr="hide.bs.modal",pr="hover",mr="focus",gr="click",vr="manual",zr="hide",Hr="hidden",yr="show",Vr="shown",Cr="inserted",br="click",wr="focusin",Mr="focusout",Lr="mouseenter",xr="mouseleave",_r={AUTO:"auto",TOP:"top",RIGHT:y()?"left":"right",BOTTOM:"bottom",LEFT:y()?"right":"left"},kr={allowList:Zs,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Nr={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Sr extends Y{constructor(e,t){if("undefined"===typeof qn)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return kr}static get DefaultType(){return Nr}static get NAME(){return rr}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),B.off(this._element.closest(hr),dr,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const e=B.trigger(this._element,this.constructor.eventName(yr)),t=p(this._element),c=(t||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!c)return;this._disposePopper();const n=this._getTipElement();this._element.setAttribute("aria-describedby",n.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(n),B.trigger(this._element,this.constructor.eventName(Cr))),this._popper=this._createPopper(n),n.classList.add(ur),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))B.on(r,"mouseover",m);const s=()=>{B.trigger(this._element,this.constructor.eventName(Vr)),!1===this._isHovered&&this._leave(),this._isHovered=!1};this._queueCallback(s,this.tip,this._isAnimated())}hide(){if(!this._isShown())return;const e=B.trigger(this._element,this.constructor.eventName(zr));if(e.defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(ur),"ontouchstart"in document.documentElement)for(const n of[].concat(...document.body.children))B.off(n,"mouseover",m);this._activeTrigger[gr]=!1,this._activeTrigger[mr]=!1,this._activeTrigger[pr]=!1,this._isHovered=null;const c=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),B.trigger(this._element,this.constructor.eventName(Hr)))};this._queueCallback(c,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(or,ur),t.classList.add(`bs-${this.constructor.NAME}-auto`);const c=a(this.constructor.NAME).toString();return t.setAttribute("id",c),this._isAnimated()&&t.classList.add(or),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new sr({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[fr]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(or)}_isShown(){return this.tip&&this.tip.classList.contains(ur)}_createPopper(e){const t=C(this._config.placement,[this,e,this._element]),c=_r[t.toUpperCase()];return jn(this._element,e,this._getPopperConfig(c))}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return C(e,[this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,...C(this._config.popperConfig,[t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if("click"===t)B.on(this._element,this.constructor.eventName(br),this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t.toggle()}));else if(t!==vr){const e=t===pr?this.constructor.eventName(Lr):this.constructor.eventName(wr),c=t===pr?this.constructor.eventName(xr):this.constructor.eventName(Mr);B.on(this._element,e,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?mr:pr]=!0,t._enter()})),B.on(this._element,c,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?mr:pr]=t._element.contains(e.relatedTarget),t._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},B.on(this._element.closest(hr),dr,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=W.getDataAttributes(this._element);for(const c of Object.keys(t))ar.has(c)&&delete t[c];return e={...t,..."object"===typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:f(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,c]of Object.entries(this._config))this.constructor.Default[t]!==c&&(e[t]=c);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each((function(){const t=Sr.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}V(Sr);const Ar="popover",Er=".popover-header",Tr=".popover-body",Ir={...Sr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Or={...Sr.DefaultType,content:"(null|string|element|function)"};class Pr extends Sr{static get Default(){return Ir}static get DefaultType(){return Or}static get NAME(){return Ar}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Er]:this._getTitle(),[Tr]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each((function(){const t=Pr.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}V(Pr);const Rr="scrollspy",Dr="bs.scrollspy",Fr=`.${Dr}`,Ur=".data-api",Br=`activate${Fr}`,jr=`click${Fr}`,qr=`load${Fr}${Ur}`,$r="dropdown-item",Wr="active",Gr='[data-bs-spy="scroll"]',Kr="[href]",Yr=".nav, .list-group",Qr=".nav-link",Jr=".nav-item",Xr=".list-group-item",Zr=`${Qr}, ${Jr} > ${Qr}, ${Xr}`,ea=".dropdown",ta=".dropdown-toggle",ca={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},na={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ia extends Y{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return ca}static get DefaultType(){return na}static get NAME(){return Rr}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=f(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,"string"===typeof e.threshold&&(e.threshold=e.threshold.split(",").map((e=>Number.parseFloat(e)))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(B.off(this._config.target,jr),B.on(this._config.target,jr,Kr,(e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const c=this._rootElement||window,n=t.offsetTop-this._element.offsetTop;if(c.scrollTo)return void c.scrollTo({top:n,behavior:"smooth"});c.scrollTop=n}})))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((e=>this._observerCallback(e)),e)}_observerCallback(e){const t=e=>this._targetLinks.get(`#${e.target.id}`),c=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},n=(this._rootElement||document.documentElement).scrollTop,i=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const s of e){if(!s.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(s));continue}const e=s.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&e){if(c(s),!n)return}else i||e||c(s)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=J.find(Kr,this._config.target);for(const t of e){if(!t.hash||d(t))continue;const e=J.findOne(t.hash,this._element);h(e)&&(this._targetLinks.set(t.hash,t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Wr),this._activateParents(e),B.trigger(this._element,Br,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains($r))J.findOne(ta,e.closest(ea)).classList.add(Wr);else for(const t of J.parents(e,Yr))for(const e of J.prev(t,Zr))e.classList.add(Wr)}_clearActiveClass(e){e.classList.remove(Wr);const t=J.find(`${Kr}.${Wr}`,e);for(const c of t)c.classList.remove(Wr)}static jQueryInterface(e){return this.each((function(){const t=ia.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}B.on(window,qr,(()=>{for(const e of J.find(Gr))ia.getOrCreateInstance(e)})),V(ia);const sa="tab",ra="bs.tab",aa=`.${ra}`,oa=`hide${aa}`,la=`hidden${aa}`,ua=`show${aa}`,fa=`shown${aa}`,ha=`click${aa}`,da=`keydown${aa}`,pa=`load${aa}`,ma="ArrowLeft",ga="ArrowRight",va="ArrowUp",za="ArrowDown",Ha="active",ya="fade",Va="show",Ca="dropdown",ba=".dropdown-toggle",wa=".dropdown-menu",Ma=":not(.dropdown-toggle)",La='.list-group, .nav, [role="tablist"]',xa=".nav-item, .list-group-item",_a=`.nav-link${Ma}, .list-group-item${Ma}, [role="tab"]${Ma}`,ka='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Na=`${_a}, ${ka}`,Sa=`.${Ha}[data-bs-toggle="tab"], .${Ha}[data-bs-toggle="pill"], .${Ha}[data-bs-toggle="list"]`;class Aa extends Y{constructor(e){super(e),this._parent=this._element.closest(La),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),B.on(this._element,da,(e=>this._keydown(e))))}static get NAME(){return sa}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),c=t?B.trigger(t,oa,{relatedTarget:e}):null,n=B.trigger(e,ua,{relatedTarget:t});n.defaultPrevented||c&&c.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(Ha),this._activate(J.getElementFromSelector(e));const c=()=>{"tab"===e.getAttribute("role")?(e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),B.trigger(e,fa,{relatedTarget:t})):e.classList.add(Va)};this._queueCallback(c,e,e.classList.contains(ya))}_deactivate(e,t){if(!e)return;e.classList.remove(Ha),e.blur(),this._deactivate(J.getElementFromSelector(e));const c=()=>{"tab"===e.getAttribute("role")?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),B.trigger(e,la,{relatedTarget:t})):e.classList.remove(Va)};this._queueCallback(c,e,e.classList.contains(ya))}_keydown(e){if(![ma,ga,va,za].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=[ga,za].includes(e.key),c=w(this._getChildren().filter((e=>!d(e))),e.target,t,!0);c&&(c.focus({preventScroll:!0}),Aa.getOrCreateInstance(c).show())}_getChildren(){return J.find(Na,this._parent)}_getActiveElem(){return this._getChildren().find((e=>this._elemIsActive(e)))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const c of t)this._setInitialAttributesOnChild(c)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),c=this._getOuterElement(e);e.setAttribute("aria-selected",t),c!==e&&this._setAttributeIfNotExists(c,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=J.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const c=this._getOuterElement(e);if(!c.classList.contains(Ca))return;const n=(e,n)=>{const i=J.findOne(e,c);i&&i.classList.toggle(n,t)};n(ba,Ha),n(wa,Va),c.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,c){e.hasAttribute(t)||e.setAttribute(t,c)}_elemIsActive(e){return e.classList.contains(Ha)}_getInnerElement(e){return e.matches(Na)?e:J.findOne(Na,e)}_getOuterElement(e){return e.closest(xa)||e}static jQueryInterface(e){return this.each((function(){const t=Aa.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}B.on(document,ha,ka,(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),d(this)||Aa.getOrCreateInstance(this).show()})),B.on(window,pa,(()=>{for(const e of J.find(Sa))Aa.getOrCreateInstance(e)})),V(Aa);const Ea="toast",Ta="bs.toast",Ia=`.${Ta}`,Oa=`mouseover${Ia}`,Pa=`mouseout${Ia}`,Ra=`focusin${Ia}`,Da=`focusout${Ia}`,Fa=`hide${Ia}`,Ua=`hidden${Ia}`,Ba=`show${Ia}`,ja=`shown${Ia}`,qa="fade",$a="hide",Wa="show",Ga="showing",Ka={animation:"boolean",autohide:"boolean",delay:"number"},Ya={animation:!0,autohide:!0,delay:5e3};class Qa extends Y{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Ya}static get DefaultType(){return Ka}static get NAME(){return Ea}show(){const e=B.trigger(this._element,Ba);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(qa);const t=()=>{this._element.classList.remove(Ga),B.trigger(this._element,ja),this._maybeScheduleHide()};this._element.classList.remove($a),g(this._element),this._element.classList.add(Wa,Ga),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown())return;const e=B.trigger(this._element,Fa);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add($a),this._element.classList.remove(Ga,Wa),B.trigger(this._element,Ua)};this._element.classList.add(Ga),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Wa),super.dispose()}isShown(){return this._element.classList.contains(Wa)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const c=e.relatedTarget;this._element===c||this._element.contains(c)||this._maybeScheduleHide()}_setListeners(){B.on(this._element,Oa,(e=>this._onInteraction(e,!0))),B.on(this._element,Pa,(e=>this._onInteraction(e,!1))),B.on(this._element,Ra,(e=>this._onInteraction(e,!0))),B.on(this._element,Da,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=Qa.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}X(Qa),V(Qa);const Ja={Alert:re,Button:pe,Carousel:ft,Collapse:Et,Dropdown:ki,Modal:ws,Offcanvas:Gs,Popover:Pr,ScrollSpy:ia,Tab:Aa,Toast:Qa,Tooltip:Sr};return Ja}))},2492:function(e,t,c){c(7658),
/*!
* sweetalert2 v11.4.8
* Released under the MIT License.
*/
function(t,c){e.exports=c()}(0,(function(){"use strict";const e="SweetAlert2:",t=e=>{const t=[];for(let c=0;c<e.length;c++)-1===t.indexOf(e[c])&&t.push(e[c]);return t},c=e=>e.charAt(0).toUpperCase()+e.slice(1),n=e=>Array.prototype.slice.call(e),i=t=>{console.warn("".concat(e," ").concat("object"===typeof t?t.join(" "):t))},s=t=>{console.error("".concat(e," ").concat(t))},r=[],a=e=>{r.includes(e)||(r.push(e),i(e))},o=(e,t)=>{a('"'.concat(e,'" is deprecated and will be removed in the next major release. Please use "').concat(t,'" instead.'))},l=e=>"function"===typeof e?e():e,u=e=>e&&"function"===typeof e.toPromise,f=e=>u(e)?e.toPromise():Promise.resolve(e),h=e=>e&&Promise.resolve(e)===e,d={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},p=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],m={},g=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],v=e=>Object.prototype.hasOwnProperty.call(d,e),z=e=>-1!==p.indexOf(e),H=e=>m[e],y=e=>{v(e)||i('Unknown parameter "'.concat(e,'"'))},V=e=>{g.includes(e)&&i('The parameter "'.concat(e,'" is incompatible with toasts'))},C=e=>{H(e)&&o(e,H(e))},b=e=>{!e.backdrop&&e.allowOutsideClick&&i('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const t in e)y(t),e.toast&&V(t),C(t)},w="swal2-",M=e=>{const t={};for(const c in e)t[e[c]]=w+e[c];return t},L=M(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),x=M(["success","warning","info","question","error"]),_=()=>document.body.querySelector(".".concat(L.container)),k=e=>{const t=_();return t?t.querySelector(e):null},N=e=>k(".".concat(e)),S=()=>N(L.popup),A=()=>N(L.icon),E=()=>N(L.title),T=()=>N(L["html-container"]),I=()=>N(L.image),O=()=>N(L["progress-steps"]),P=()=>N(L["validation-message"]),R=()=>k(".".concat(L.actions," .").concat(L.confirm)),D=()=>k(".".concat(L.actions," .").concat(L.deny)),F=()=>N(L["input-label"]),U=()=>k(".".concat(L.loader)),B=()=>k(".".concat(L.actions," .").concat(L.cancel)),j=()=>N(L.actions),q=()=>N(L.footer),$=()=>N(L["timer-progress-bar"]),W=()=>N(L.close),G='\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',K=()=>{const e=n(S().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(((e,t)=>{const c=parseInt(e.getAttribute("tabindex")),n=parseInt(t.getAttribute("tabindex"));return c>n?1:c<n?-1:0})),c=n(S().querySelectorAll(G)).filter((e=>"-1"!==e.getAttribute("tabindex")));return t(e.concat(c)).filter((e=>pe(e)))},Y=()=>ee(document.body,L.shown)&&!ee(document.body,L["toast-shown"])&&!ee(document.body,L["no-backdrop"]),Q=()=>S()&&ee(S(),L.toast),J=()=>S().hasAttribute("data-loading"),X={previousBodyPadding:null},Z=(e,t)=>{if(e.textContent="",t){const c=new DOMParser,i=c.parseFromString(t,"text/html");n(i.querySelector("head").childNodes).forEach((t=>{e.appendChild(t)})),n(i.querySelector("body").childNodes).forEach((t=>{e.appendChild(t)}))}},ee=(e,t)=>{if(!t)return!1;const c=t.split(/\s+/);for(let n=0;n<c.length;n++)if(!e.classList.contains(c[n]))return!1;return!0},te=(e,t)=>{n(e.classList).forEach((c=>{Object.values(L).includes(c)||Object.values(x).includes(c)||Object.values(t.showClass).includes(c)||e.classList.remove(c)}))},ce=(e,t,c)=>{if(te(e,t),t.customClass&&t.customClass[c]){if("string"!==typeof t.customClass[c]&&!t.customClass[c].forEach)return i("Invalid type of customClass.".concat(c,'! Expected string or iterable object, got "').concat(typeof t.customClass[c],'"'));re(e,t.customClass[c])}},ne=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(".".concat(L.popup," > .").concat(L[t]));case"checkbox":return e.querySelector(".".concat(L.popup," > .").concat(L.checkbox," input"));case"radio":return e.querySelector(".".concat(L.popup," > .").concat(L.radio," input:checked"))||e.querySelector(".".concat(L.popup," > .").concat(L.radio," input:first-child"));case"range":return e.querySelector(".".concat(L.popup," > .").concat(L.range," input"));default:return e.querySelector(".".concat(L.popup," > .").concat(L.input))}},ie=e=>{if(e.focus(),"file"!==e.type){const t=e.value;e.value="",e.value=t}},se=(e,t,c)=>{e&&t&&("string"===typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach((t=>{Array.isArray(e)?e.forEach((e=>{c?e.classList.add(t):e.classList.remove(t)})):c?e.classList.add(t):e.classList.remove(t)})))},re=(e,t)=>{se(e,t,!0)},ae=(e,t)=>{se(e,t,!1)},oe=(e,t)=>{const c=n(e.childNodes);for(let n=0;n<c.length;n++)if(ee(c[n],t))return c[n]},le=(e,t,c)=>{c==="".concat(parseInt(c))&&(c=parseInt(c)),c||0===parseInt(c)?e.style[t]="number"===typeof c?"".concat(c,"px"):c:e.style.removeProperty(t)},ue=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flex";e.style.display=t},fe=e=>{e.style.display="none"},he=(e,t,c,n)=>{const i=e.querySelector(t);i&&(i.style[c]=n)},de=(e,t,c)=>{t?ue(e,c):fe(e)},pe=e=>!(!e||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),me=()=>!pe(R())&&!pe(D())&&!pe(B()),ge=e=>!!(e.scrollHeight>e.clientHeight),ve=e=>{const t=window.getComputedStyle(e),c=parseFloat(t.getPropertyValue("animation-duration")||"0"),n=parseFloat(t.getPropertyValue("transition-duration")||"0");return c>0||n>0},ze=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const c=$();pe(c)&&(t&&(c.style.transition="none",c.style.width="100%"),setTimeout((()=>{c.style.transition="width ".concat(e/1e3,"s linear"),c.style.width="0%"}),10))},He=()=>{const e=$(),t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const c=parseInt(window.getComputedStyle(e).width),n=t/c*100;e.style.removeProperty("transition"),e.style.width="".concat(n,"%")},ye=()=>"undefined"===typeof window||"undefined"===typeof document,Ve=100,Ce={},be=()=>{Ce.previousActiveElement&&Ce.previousActiveElement.focus?(Ce.previousActiveElement.focus(),Ce.previousActiveElement=null):document.body&&document.body.focus()},we=e=>new Promise((t=>{if(!e)return t();const c=window.scrollX,n=window.scrollY;Ce.restoreFocusTimeout=setTimeout((()=>{be(),t()}),Ve),window.scrollTo(c,n)})),Me='\n <div aria-labelledby="'.concat(L.title,'" aria-describedby="').concat(L["html-container"],'" class="').concat(L.popup,'" tabindex="-1">\n   <button type="button" class="').concat(L.close,'"></button>\n   <ul class="').concat(L["progress-steps"],'"></ul>\n   <div class="').concat(L.icon,'"></div>\n   <img class="').concat(L.image,'" />\n   <h2 class="').concat(L.title,'" id="').concat(L.title,'"></h2>\n   <div class="').concat(L["html-container"],'" id="').concat(L["html-container"],'"></div>\n   <input class="').concat(L.input,'" />\n   <input type="file" class="').concat(L.file,'" />\n   <div class="').concat(L.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(L.select,'"></select>\n   <div class="').concat(L.radio,'"></div>\n   <label for="').concat(L.checkbox,'" class="').concat(L.checkbox,'">\n     <input type="checkbox" />\n     <span class="').concat(L.label,'"></span>\n   </label>\n   <textarea class="').concat(L.textarea,'"></textarea>\n   <div class="').concat(L["validation-message"],'" id="').concat(L["validation-message"],'"></div>\n   <div class="').concat(L.actions,'">\n     <div class="').concat(L.loader,'"></div>\n     <button type="button" class="').concat(L.confirm,'"></button>\n     <button type="button" class="').concat(L.deny,'"></button>\n     <button type="button" class="').concat(L.cancel,'"></button>\n   </div>\n   <div class="').concat(L.footer,'"></div>\n   <div class="').concat(L["timer-progress-bar-container"],'">\n     <div class="').concat(L["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),Le=()=>{const e=_();return!!e&&(e.remove(),ae([document.documentElement,document.body],[L["no-backdrop"],L["toast-shown"],L["has-column"]]),!0)},xe=()=>{Ce.currentInstance.resetValidationMessage()},_e=()=>{const e=S(),t=oe(e,L.input),c=oe(e,L.file),n=e.querySelector(".".concat(L.range," input")),i=e.querySelector(".".concat(L.range," output")),s=oe(e,L.select),r=e.querySelector(".".concat(L.checkbox," input")),a=oe(e,L.textarea);t.oninput=xe,c.onchange=xe,s.onchange=xe,r.onchange=xe,a.oninput=xe,n.oninput=()=>{xe(),i.value=n.value},n.onchange=()=>{xe(),n.nextSibling.value=n.value}},ke=e=>"string"===typeof e?document.querySelector(e):e,Ne=e=>{const t=S();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},Se=e=>{"rtl"===window.getComputedStyle(e).direction&&re(_(),L.rtl)},Ae=e=>{const t=Le();if(ye())return void s("SweetAlert2 requires document to initialize");const c=document.createElement("div");c.className=L.container,t&&re(c,L["no-transition"]),Z(c,Me);const n=ke(e.target);n.appendChild(c),Ne(e),Se(n),_e()},Ee=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):"object"===typeof e?Te(e,t):e&&Z(t,e)},Te=(e,t)=>{e.jquery?Ie(t,e):Z(t,e.toString())},Ie=(e,t)=>{if(e.textContent="",0 in t)for(let c=0;c in t;c++)e.appendChild(t[c].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},Oe=(()=>{if(ye())return!1;const e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const c in t)if(Object.prototype.hasOwnProperty.call(t,c)&&"undefined"!==typeof e.style[c])return t[c];return!1})(),Pe=()=>{const e=document.createElement("div");e.className=L["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},Re=(e,t)=>{const c=j(),n=U();t.showConfirmButton||t.showDenyButton||t.showCancelButton?ue(c):fe(c),ce(c,t,"actions"),De(c,n,t),Z(n,t.loaderHtml),ce(n,t,"loader")};function De(e,t,c){const n=R(),i=D(),s=B();Ue(n,"confirm",c),Ue(i,"deny",c),Ue(s,"cancel",c),Fe(n,i,s,c),c.reverseButtons&&(c.toast?(e.insertBefore(s,n),e.insertBefore(i,n)):(e.insertBefore(s,t),e.insertBefore(i,t),e.insertBefore(n,t)))}function Fe(e,t,c,n){if(!n.buttonsStyling)return ae([e,t,c],L.styled);re([e,t,c],L.styled),n.confirmButtonColor&&(e.style.backgroundColor=n.confirmButtonColor,re(e,L["default-outline"])),n.denyButtonColor&&(t.style.backgroundColor=n.denyButtonColor,re(t,L["default-outline"])),n.cancelButtonColor&&(c.style.backgroundColor=n.cancelButtonColor,re(c,L["default-outline"]))}function Ue(e,t,n){de(e,n["show".concat(c(t),"Button")],"inline-block"),Z(e,n["".concat(t,"ButtonText")]),e.setAttribute("aria-label",n["".concat(t,"ButtonAriaLabel")]),e.className=L[t],ce(e,n,"".concat(t,"Button")),re(e,n["".concat(t,"ButtonClass")])}function Be(e,t){"string"===typeof t?e.style.background=t:t||re([document.documentElement,document.body],L["no-backdrop"])}function je(e,t){t in L?re(e,L[t]):(i('The "position" parameter is not valid, defaulting to "center"'),re(e,L.center))}function qe(e,t){if(t&&"string"===typeof t){const c="grow-".concat(t);c in L&&re(e,L[c])}}const $e=(e,t)=>{const c=_();c&&(Be(c,t.backdrop),je(c,t.position),qe(c,t.grow),ce(c,t,"container"))};var We={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const Ge=["input","file","range","select","radio","checkbox","textarea"],Ke=(e,t)=>{const c=S(),n=We.innerParams.get(e),i=!n||t.input!==n.input;Ge.forEach((e=>{const n=L[e],s=oe(c,n);Je(e,t.inputAttributes),s.className=n,i&&fe(s)})),t.input&&(i&&Ye(t),Xe(t))},Ye=e=>{if(!ct[e.input])return s('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input,'"'));const t=tt(e.input),c=ct[e.input](t,e);ue(c),setTimeout((()=>{ie(c)}))},Qe=e=>{for(let t=0;t<e.attributes.length;t++){const c=e.attributes[t].name;["type","value","style"].includes(c)||e.removeAttribute(c)}},Je=(e,t)=>{const c=ne(S(),e);if(c){Qe(c);for(const e in t)c.setAttribute(e,t[e])}},Xe=e=>{const t=tt(e.input);e.customClass&&re(t,e.customClass.input)},Ze=(e,t)=>{e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)},et=(e,t,c)=>{if(c.inputLabel){e.id=L.input;const n=document.createElement("label"),i=L["input-label"];n.setAttribute("for",e.id),n.className=i,re(n,c.customClass.inputLabel),n.innerText=c.inputLabel,t.insertAdjacentElement("beforebegin",n)}},tt=e=>{const t=L[e]?L[e]:L.input;return oe(S(),t)},ct={};ct.text=ct.email=ct.password=ct.number=ct.tel=ct.url=(e,t)=>("string"===typeof t.inputValue||"number"===typeof t.inputValue?e.value=t.inputValue:h(t.inputValue)||i('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue,'"')),et(e,e,t),Ze(e,t),e.type=t.input,e),ct.file=(e,t)=>(et(e,e,t),Ze(e,t),e),ct.range=(e,t)=>{const c=e.querySelector("input"),n=e.querySelector("output");return c.value=t.inputValue,c.type=t.input,n.value=t.inputValue,et(c,e,t),e},ct.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const c=document.createElement("option");Z(c,t.inputPlaceholder),c.value="",c.disabled=!0,c.selected=!0,e.appendChild(c)}return et(e,e,t),e},ct.radio=e=>(e.textContent="",e),ct.checkbox=(e,t)=>{const c=ne(S(),"checkbox");c.value="1",c.id=L.checkbox,c.checked=Boolean(t.inputValue);const n=e.querySelector("span");return Z(n,t.inputPlaceholder),e},ct.textarea=(e,t)=>{e.value=t.inputValue,Ze(e,t),et(e,e,t);const c=e=>parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight);return setTimeout((()=>{if("MutationObserver"in window){const t=parseInt(window.getComputedStyle(S()).width),n=()=>{const n=e.offsetWidth+c(e);S().style.width=n>t?"".concat(n,"px"):null};new MutationObserver(n).observe(e,{attributes:!0,attributeFilter:["style"]})}})),e};const nt=(e,t)=>{const c=T();ce(c,t,"htmlContainer"),t.html?(Ee(t.html,c),ue(c,"block")):t.text?(c.textContent=t.text,ue(c,"block")):fe(c),Ke(e,t)},it=(e,t)=>{const c=q();de(c,t.footer),t.footer&&Ee(t.footer,c),ce(c,t,"footer")},st=(e,t)=>{const c=W();Z(c,t.closeButtonHtml),ce(c,t,"closeButton"),de(c,t.showCloseButton),c.setAttribute("aria-label",t.closeButtonAriaLabel)},rt=(e,t)=>{const c=We.innerParams.get(e),n=A();return c&&t.icon===c.icon?(ft(n,t),void at(n,t)):t.icon||t.iconHtml?t.icon&&-1===Object.keys(x).indexOf(t.icon)?(s('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon,'"')),fe(n)):(ue(n),ft(n,t),at(n,t),void re(n,t.showClass.icon)):fe(n)},at=(e,t)=>{for(const c in x)t.icon!==c&&ae(e,x[c]);re(e,x[t.icon]),ht(e,t),ot(),ce(e,t,"icon")},ot=()=>{const e=S(),t=window.getComputedStyle(e).getPropertyValue("background-color"),c=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let n=0;n<c.length;n++)c[n].style.backgroundColor=t},lt='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',ut='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',ft=(e,t)=>{if(e.textContent="",t.iconHtml)Z(e,dt(t.iconHtml));else if("success"===t.icon)Z(e,lt);else if("error"===t.icon)Z(e,ut);else{const c={question:"?",warning:"!",info:"i"};Z(e,dt(c[t.icon]))}},ht=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const c of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])he(e,c,"backgroundColor",t.iconColor);he(e,".swal2-success-ring","borderColor",t.iconColor)}},dt=e=>'<div class="'.concat(L["icon-content"],'">').concat(e,"</div>"),pt=(e,t)=>{const c=I();if(!t.imageUrl)return fe(c);ue(c,""),c.setAttribute("src",t.imageUrl),c.setAttribute("alt",t.imageAlt),le(c,"width",t.imageWidth),le(c,"height",t.imageHeight),c.className=L.image,ce(c,t,"image")},mt=e=>{const t=document.createElement("li");return re(t,L["progress-step"]),Z(t,e),t},gt=e=>{const t=document.createElement("li");return re(t,L["progress-step-line"]),e.progressStepsDistance&&(t.style.width=e.progressStepsDistance),t},vt=(e,t)=>{const c=O();if(!t.progressSteps||0===t.progressSteps.length)return fe(c);ue(c),c.textContent="",t.currentProgressStep>=t.progressSteps.length&&i("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),t.progressSteps.forEach(((e,n)=>{const i=mt(e);if(c.appendChild(i),n===t.currentProgressStep&&re(i,L["active-progress-step"]),n!==t.progressSteps.length-1){const e=gt(t);c.appendChild(e)}}))},zt=(e,t)=>{const c=E();de(c,t.title||t.titleText,"block"),t.title&&Ee(t.title,c),t.titleText&&(c.innerText=t.titleText),ce(c,t,"title")},Ht=(e,t)=>{const c=_(),n=S();t.toast?(le(c,"width",t.width),n.style.width="100%",n.insertBefore(U(),A())):le(n,"width",t.width),le(n,"padding",t.padding),t.color&&(n.style.color=t.color),t.background&&(n.style.background=t.background),fe(P()),yt(n,t)},yt=(e,t)=>{e.className="".concat(L.popup," ").concat(pe(e)?t.showClass.popup:""),t.toast?(re([document.documentElement,document.body],L["toast-shown"]),re(e,L.toast)):re(e,L.modal),ce(e,t,"popup"),"string"===typeof t.customClass&&re(e,t.customClass),t.icon&&re(e,L["icon-".concat(t.icon)])},Vt=(e,t)=>{Ht(e,t),$e(e,t),vt(e,t),rt(e,t),pt(e,t),zt(e,t),st(e,t),nt(e,t),Re(e,t),it(e,t),"function"===typeof t.didRender&&t.didRender(S())},Ct=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),bt=()=>{const e=n(document.body.children);e.forEach((e=>{e===_()||e.contains(_())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))}))},wt=()=>{const e=n(document.body.children);e.forEach((e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))},Mt=["swal-title","swal-html","swal-footer"],Lt=e=>{const t="string"===typeof e.template?document.querySelector(e.template):e.template;if(!t)return{};const c=t.content;Et(c);const n=Object.assign(xt(c),_t(c),kt(c),Nt(c),St(c),At(c,Mt));return n},xt=e=>{const t={};return n(e.querySelectorAll("swal-param")).forEach((e=>{Tt(e,["name","value"]);const c=e.getAttribute("name"),n=e.getAttribute("value");"boolean"===typeof d[c]&&"false"===n&&(t[c]=!1),"object"===typeof d[c]&&(t[c]=JSON.parse(n))})),t},_t=e=>{const t={};return n(e.querySelectorAll("swal-button")).forEach((e=>{Tt(e,["type","color","aria-label"]);const n=e.getAttribute("type");t["".concat(n,"ButtonText")]=e.innerHTML,t["show".concat(c(n),"Button")]=!0,e.hasAttribute("color")&&(t["".concat(n,"ButtonColor")]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(t["".concat(n,"ButtonAriaLabel")]=e.getAttribute("aria-label"))})),t},kt=e=>{const t={},c=e.querySelector("swal-image");return c&&(Tt(c,["src","width","height","alt"]),c.hasAttribute("src")&&(t.imageUrl=c.getAttribute("src")),c.hasAttribute("width")&&(t.imageWidth=c.getAttribute("width")),c.hasAttribute("height")&&(t.imageHeight=c.getAttribute("height")),c.hasAttribute("alt")&&(t.imageAlt=c.getAttribute("alt"))),t},Nt=e=>{const t={},c=e.querySelector("swal-icon");return c&&(Tt(c,["type","color"]),c.hasAttribute("type")&&(t.icon=c.getAttribute("type")),c.hasAttribute("color")&&(t.iconColor=c.getAttribute("color")),t.iconHtml=c.innerHTML),t},St=e=>{const t={},c=e.querySelector("swal-input");c&&(Tt(c,["type","label","placeholder","value"]),t.input=c.getAttribute("type")||"text",c.hasAttribute("label")&&(t.inputLabel=c.getAttribute("label")),c.hasAttribute("placeholder")&&(t.inputPlaceholder=c.getAttribute("placeholder")),c.hasAttribute("value")&&(t.inputValue=c.getAttribute("value")));const i=e.querySelectorAll("swal-input-option");return i.length&&(t.inputOptions={},n(i).forEach((e=>{Tt(e,["value"]);const c=e.getAttribute("value"),n=e.innerHTML;t.inputOptions[c]=n}))),t},At=(e,t)=>{const c={};for(const n in t){const i=t[n],s=e.querySelector(i);s&&(Tt(s,[]),c[i.replace(/^swal-/,"")]=s.innerHTML.trim())}return c},Et=e=>{const t=Mt.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);n(e.children).forEach((e=>{const c=e.tagName.toLowerCase();-1===t.indexOf(c)&&i("Unrecognized element <".concat(c,">"))}))},Tt=(e,t)=>{n(e.attributes).forEach((c=>{-1===t.indexOf(c.name)&&i(['Unrecognized attribute "'.concat(c.name,'" on <').concat(e.tagName.toLowerCase(),">."),"".concat(t.length?"Allowed attributes are: ".concat(t.join(", ")):"To set the value, use HTML within the element.")])}))};var It={email:(e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function Ot(e){e.inputValidator||Object.keys(It).forEach((t=>{e.input===t&&(e.inputValidator=It[t])}))}function Pt(e){(!e.target||"string"===typeof e.target&&!document.querySelector(e.target)||"string"!==typeof e.target&&!e.target.appendChild)&&(i('Target parameter is not valid, defaulting to "body"'),e.target="body")}function Rt(e){Ot(e),e.showLoaderOnConfirm&&!e.preConfirm&&i("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),Pt(e),"string"===typeof e.title&&(e.title=e.title.split("\n").join("<br />")),Ae(e)}class Dt{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}increase(e){const t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Ft=()=>{null===X.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(X.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(X.previousBodyPadding+Pe(),"px"))},Ut=()=>{null!==X.previousBodyPadding&&(document.body.style.paddingRight="".concat(X.previousBodyPadding,"px"),X.previousBodyPadding=null)},Bt=()=>{const e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1;if(e&&!ee(document.body,L.iosfix)){const e=document.body.scrollTop;document.body.style.top="".concat(-1*e,"px"),re(document.body,L.iosfix),qt(),jt()}},jt=()=>{const e=navigator.userAgent,t=!!e.match(/iPad/i)||!!e.match(/iPhone/i),c=!!e.match(/WebKit/i),n=t&&c&&!e.match(/CriOS/i);if(n){const e=44;S().scrollHeight>window.innerHeight-e&&(_().style.paddingBottom="".concat(e,"px"))}},qt=()=>{const e=_();let t;e.ontouchstart=e=>{t=$t(e)},e.ontouchmove=e=>{t&&(e.preventDefault(),e.stopPropagation())}},$t=e=>{const t=e.target,c=_();return!Wt(e)&&!Gt(e)&&(t===c||!(ge(c)||"INPUT"===t.tagName||"TEXTAREA"===t.tagName||ge(T())&&T().contains(t)))},Wt=e=>e.touches&&e.touches.length&&"stylus"===e.touches[0].touchType,Gt=e=>e.touches&&e.touches.length>1,Kt=()=>{if(ee(document.body,L.iosfix)){const e=parseInt(document.body.style.top,10);ae(document.body,L.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}},Yt=10,Qt=e=>{const t=_(),c=S();"function"===typeof e.willOpen&&e.willOpen(c);const n=window.getComputedStyle(document.body),i=n.overflowY;ec(t,c,e),setTimeout((()=>{Xt(t,c)}),Yt),Y()&&(Zt(t,e.scrollbarPadding,i),bt()),Q()||Ce.previousActiveElement||(Ce.previousActiveElement=document.activeElement),"function"===typeof e.didOpen&&setTimeout((()=>e.didOpen(c))),ae(t,L["no-transition"])},Jt=e=>{const t=S();if(e.target!==t)return;const c=_();t.removeEventListener(Oe,Jt),c.style.overflowY="auto"},Xt=(e,t)=>{Oe&&ve(t)?(e.style.overflowY="hidden",t.addEventListener(Oe,Jt)):e.style.overflowY="auto"},Zt=(e,t,c)=>{Bt(),t&&"hidden"!==c&&Ft(),setTimeout((()=>{e.scrollTop=0}))},ec=(e,t,c)=>{re(e,c.showClass.backdrop),t.style.setProperty("opacity","0","important"),ue(t,"grid"),setTimeout((()=>{re(t,c.showClass.popup),t.style.removeProperty("opacity")}),Yt),re([document.documentElement,document.body],L.shown),c.heightAuto&&c.backdrop&&!c.toast&&re([document.documentElement,document.body],L["height-auto"])},tc=e=>{let t=S();t||new Wn,t=S();const c=U();Q()?fe(A()):cc(t,e),ue(c),t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()},cc=(e,t)=>{const c=j(),n=U();!t&&pe(R())&&(t=R()),ue(c),t&&(fe(t),n.setAttribute("data-button-to-replace",t.className)),n.parentNode.insertBefore(n,t),re([e,c],L.loading)},nc=(e,t)=>{"select"===t.input||"radio"===t.input?oc(e,t):["text","email","number","tel","textarea"].includes(t.input)&&(u(t.inputValue)||h(t.inputValue))&&(tc(R()),lc(e,t))},ic=(e,t)=>{const c=e.getInput();if(!c)return null;switch(t.input){case"checkbox":return sc(c);case"radio":return rc(c);case"file":return ac(c);default:return t.inputAutoTrim?c.value.trim():c.value}},sc=e=>e.checked?1:0,rc=e=>e.checked?e.value:null,ac=e=>e.files.length?null!==e.getAttribute("multiple")?e.files:e.files[0]:null,oc=(e,t)=>{const c=S(),n=e=>uc[t.input](c,fc(e),t);u(t.inputOptions)||h(t.inputOptions)?(tc(R()),f(t.inputOptions).then((t=>{e.hideLoading(),n(t)}))):"object"===typeof t.inputOptions?n(t.inputOptions):s("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof t.inputOptions))},lc=(e,t)=>{const c=e.getInput();fe(c),f(t.inputValue).then((n=>{c.value="number"===t.input?parseFloat(n)||0:"".concat(n),ue(c),c.focus(),e.hideLoading()})).catch((t=>{s("Error in inputValue promise: ".concat(t)),c.value="",ue(c),c.focus(),e.hideLoading()}))},uc={select:(e,t,c)=>{const n=oe(e,L.select),i=(e,t,n)=>{const i=document.createElement("option");i.value=n,Z(i,t),i.selected=hc(n,c.inputValue),e.appendChild(i)};t.forEach((e=>{const t=e[0],c=e[1];if(Array.isArray(c)){const e=document.createElement("optgroup");e.label=t,e.disabled=!1,n.appendChild(e),c.forEach((t=>i(e,t[1],t[0])))}else i(n,c,t)})),n.focus()},radio:(e,t,c)=>{const n=oe(e,L.radio);t.forEach((e=>{const t=e[0],i=e[1],s=document.createElement("input"),r=document.createElement("label");s.type="radio",s.name=L.radio,s.value=t,hc(t,c.inputValue)&&(s.checked=!0);const a=document.createElement("span");Z(a,i),a.className=L.label,r.appendChild(s),r.appendChild(a),n.appendChild(r)}));const i=n.querySelectorAll("input");i.length&&i[0].focus()}},fc=e=>{const t=[];return"undefined"!==typeof Map&&e instanceof Map?e.forEach(((e,c)=>{let n=e;"object"===typeof n&&(n=fc(n)),t.push([c,n])})):Object.keys(e).forEach((c=>{let n=e[c];"object"===typeof n&&(n=fc(n)),t.push([c,n])})),t},hc=(e,t)=>t&&t.toString()===e.toString();function dc(){const e=We.innerParams.get(this);if(!e)return;const t=We.domCache.get(this);fe(t.loader),Q()?e.icon&&ue(A()):pc(t),ae([t.popup,t.actions],L.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}const pc=e=>{const t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?ue(t[0],"inline-block"):me()&&fe(e.actions)};function mc(e){const t=We.innerParams.get(e||this),c=We.domCache.get(e||this);return c?ne(c.popup,t.input):null}var gc={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const vc=()=>pe(S()),zc=()=>R()&&R().click(),Hc=()=>D()&&D().click(),yc=()=>B()&&B().click(),Vc=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},Cc=(e,t,c,n)=>{Vc(t),c.toast||(t.keydownHandler=t=>Lc(e,t,n),t.keydownTarget=c.keydownListenerCapture?window:S(),t.keydownListenerCapture=c.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},bc=(e,t,c)=>{const n=K();if(n.length)return t+=c,t===n.length?t=0:-1===t&&(t=n.length-1),n[t].focus();S().focus()},wc=["ArrowRight","ArrowDown"],Mc=["ArrowLeft","ArrowUp"],Lc=(e,t,c)=>{const n=We.innerParams.get(e);n&&(t.isComposing||229===t.keyCode||(n.stopKeydownPropagation&&t.stopPropagation(),"Enter"===t.key?xc(e,t,n):"Tab"===t.key?_c(t,n):[...wc,...Mc].includes(t.key)?kc(t.key):"Escape"===t.key&&Nc(t,n,c)))},xc=(e,t,c)=>{if(l(c.allowEnterKey)&&t.target&&e.getInput()&&t.target.outerHTML===e.getInput().outerHTML){if(["textarea","file"].includes(c.input))return;zc(),t.preventDefault()}},_c=(e,t)=>{const c=e.target,n=K();let i=-1;for(let s=0;s<n.length;s++)if(c===n[s]){i=s;break}e.shiftKey?bc(t,i,-1):bc(t,i,1),e.stopPropagation(),e.preventDefault()},kc=e=>{const t=R(),c=D(),n=B();if(![t,c,n].includes(document.activeElement))return;const i=wc.includes(e)?"nextElementSibling":"previousElementSibling";let s=document.activeElement;for(let r=0;r<j().children.length;r++){if(s=s[i],!s)return;if(pe(s)&&s instanceof HTMLButtonElement)break}s instanceof HTMLButtonElement&&s.focus()},Nc=(e,t,c)=>{l(t.allowEscapeKey)&&(e.preventDefault(),c(Ct.esc))};function Sc(e,t,c,n){Q()?Uc(e,n):(we(c).then((()=>Uc(e,n))),Vc(Ce));const i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);i?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),Y()&&(Ut(),Kt(),wt()),Ac()}function Ac(){ae([document.documentElement,document.body],[L.shown,L["height-auto"],L["no-backdrop"],L["toast-shown"]])}function Ec(e){e=Rc(e);const t=gc.swalPromiseResolve.get(this),c=Ic(this);this.isAwaitingPromise()?e.isDismissed||(Pc(this),t(e)):c&&t(e)}function Tc(){return!!We.awaitingPromise.get(this)}const Ic=e=>{const t=S();if(!t)return!1;const c=We.innerParams.get(e);if(!c||ee(t,c.hideClass.popup))return!1;ae(t,c.showClass.popup),re(t,c.hideClass.popup);const n=_();return ae(n,c.showClass.backdrop),re(n,c.hideClass.backdrop),Dc(e,t,c),!0};function Oc(e){const t=gc.swalPromiseReject.get(this);Pc(this),t&&t(e)}const Pc=e=>{e.isAwaitingPromise()&&(We.awaitingPromise.delete(e),We.innerParams.get(e)||e._destroy())},Rc=e=>"undefined"===typeof e?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),Dc=(e,t,c)=>{const n=_(),i=Oe&&ve(t);"function"===typeof c.willClose&&c.willClose(t),i?Fc(e,t,n,c.returnFocus,c.didClose):Sc(e,n,c.returnFocus,c.didClose)},Fc=(e,t,c,n,i)=>{Ce.swalCloseEventFinishedCallback=Sc.bind(null,e,c,n,i),t.addEventListener(Oe,(function(e){e.target===t&&(Ce.swalCloseEventFinishedCallback(),delete Ce.swalCloseEventFinishedCallback)}))},Uc=(e,t)=>{setTimeout((()=>{"function"===typeof t&&t.bind(e.params)(),e._destroy()}))};function Bc(e,t,c){const n=We.domCache.get(e);t.forEach((e=>{n[e].disabled=c}))}function jc(e,t){if(!e)return!1;if("radio"===e.type){const c=e.parentNode.parentNode,n=c.querySelectorAll("input");for(let e=0;e<n.length;e++)n[e].disabled=t}else e.disabled=t}function qc(){Bc(this,["confirmButton","denyButton","cancelButton"],!1)}function $c(){Bc(this,["confirmButton","denyButton","cancelButton"],!0)}function Wc(){return jc(this.getInput(),!1)}function Gc(){return jc(this.getInput(),!0)}function Kc(e){const t=We.domCache.get(this),c=We.innerParams.get(this);Z(t.validationMessage,e),t.validationMessage.className=L["validation-message"],c.customClass&&c.customClass.validationMessage&&re(t.validationMessage,c.customClass.validationMessage),ue(t.validationMessage);const n=this.getInput();n&&(n.setAttribute("aria-invalid",!0),n.setAttribute("aria-describedby",L["validation-message"]),ie(n),re(n,L.inputerror))}function Yc(){const e=We.domCache.get(this);e.validationMessage&&fe(e.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),ae(t,L.inputerror))}function Qc(){const e=We.domCache.get(this);return e.progressSteps}function Jc(e){const t=S(),c=We.innerParams.get(this);if(!t||ee(t,c.hideClass.popup))return i("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const n=Xc(e),s=Object.assign({},c,n);Vt(this,s),We.innerParams.set(this,s),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}const Xc=e=>{const t={};return Object.keys(e).forEach((c=>{z(c)?t[c]=e[c]:i('Invalid parameter to update: "'.concat(c,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))})),t};function Zc(){const e=We.domCache.get(this),t=We.innerParams.get(this);t?(e.popup&&Ce.swalCloseEventFinishedCallback&&(Ce.swalCloseEventFinishedCallback(),delete Ce.swalCloseEventFinishedCallback),Ce.deferDisposalTimer&&(clearTimeout(Ce.deferDisposalTimer),delete Ce.deferDisposalTimer),"function"===typeof t.didDestroy&&t.didDestroy(),en(this)):tn(this)}const en=e=>{tn(e),delete e.params,delete Ce.keydownHandler,delete Ce.keydownTarget,delete Ce.currentInstance},tn=e=>{e.isAwaitingPromise()?(cn(We,e),We.awaitingPromise.set(e,!0)):(cn(gc,e),cn(We,e))},cn=(e,t)=>{for(const c in e)e[c].delete(t)};var nn=Object.freeze({hideLoading:dc,disableLoading:dc,getInput:mc,close:Ec,isAwaitingPromise:Tc,rejectPromise:Oc,handleAwaitingPromise:Pc,closePopup:Ec,closeModal:Ec,closeToast:Ec,enableButtons:qc,disableButtons:$c,enableInput:Wc,disableInput:Gc,showValidationMessage:Kc,resetValidationMessage:Yc,getProgressSteps:Qc,update:Jc,_destroy:Zc});const sn=e=>{const t=We.innerParams.get(e);e.disableButtons(),t.input?on(e,"confirm"):dn(e,!0)},rn=e=>{const t=We.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?on(e,"deny"):un(e,!1)},an=(e,t)=>{e.disableButtons(),t(Ct.cancel)},on=(e,t)=>{const n=We.innerParams.get(e);if(!n.input)return s('The "input" parameter is needed to be set when using returnInputValueOn'.concat(c(t)));const i=ic(e,n);n.inputValidator?ln(e,i,t):e.getInput().checkValidity()?"deny"===t?un(e,i):dn(e,i):(e.enableButtons(),e.showValidationMessage(n.validationMessage))},ln=(e,t,c)=>{const n=We.innerParams.get(e);e.disableInput();const i=Promise.resolve().then((()=>f(n.inputValidator(t,n.validationMessage))));i.then((n=>{e.enableButtons(),e.enableInput(),n?e.showValidationMessage(n):"deny"===c?un(e,t):dn(e,t)}))},un=(e,t)=>{const c=We.innerParams.get(e||void 0);if(c.showLoaderOnDeny&&tc(D()),c.preDeny){We.awaitingPromise.set(e||void 0,!0);const n=Promise.resolve().then((()=>f(c.preDeny(t,c.validationMessage))));n.then((c=>{!1===c?(e.hideLoading(),Pc(e)):e.closePopup({isDenied:!0,value:"undefined"===typeof c?t:c})})).catch((t=>hn(e||void 0,t)))}else e.closePopup({isDenied:!0,value:t})},fn=(e,t)=>{e.closePopup({isConfirmed:!0,value:t})},hn=(e,t)=>{e.rejectPromise(t)},dn=(e,t)=>{const c=We.innerParams.get(e||void 0);if(c.showLoaderOnConfirm&&tc(),c.preConfirm){e.resetValidationMessage(),We.awaitingPromise.set(e||void 0,!0);const n=Promise.resolve().then((()=>f(c.preConfirm(t,c.validationMessage))));n.then((c=>{pe(P())||!1===c?(e.hideLoading(),Pc(e)):fn(e,"undefined"===typeof c?t:c)})).catch((t=>hn(e||void 0,t)))}else fn(e,t)},pn=(e,t,c)=>{const n=We.innerParams.get(e);n.toast?mn(e,t,c):(zn(t),Hn(t),yn(e,t,c))},mn=(e,t,c)=>{t.popup.onclick=()=>{const t=We.innerParams.get(e);t&&(gn(t)||t.timer||t.input)||c(Ct.close)}},gn=e=>e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton;let vn=!1;const zn=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&(vn=!0)}}},Hn=e=>{e.container.onmousedown=()=>{e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,(t.target===e.popup||e.popup.contains(t.target))&&(vn=!0)}}},yn=(e,t,c)=>{t.container.onclick=n=>{const i=We.innerParams.get(e);vn?vn=!1:n.target===t.container&&l(i.allowOutsideClick)&&c(Ct.backdrop)}},Vn=e=>"object"===typeof e&&e.jquery,Cn=e=>e instanceof Element||Vn(e),bn=e=>{const t={};return"object"!==typeof e[0]||Cn(e[0])?["title","html","icon"].forEach(((c,n)=>{const i=e[n];"string"===typeof i||Cn(i)?t[c]=i:void 0!==i&&s("Unexpected type of ".concat(c,'! Expected "string" or "Element", got ').concat(typeof i))})):Object.assign(t,e[0]),t};function wn(){const e=this;for(var t=arguments.length,c=new Array(t),n=0;n<t;n++)c[n]=arguments[n];return new e(...c)}function Mn(e){class t extends(this){_main(t,c){return super._main(t,Object.assign({},e,c))}}return t}const Ln=()=>Ce.timeout&&Ce.timeout.getTimerLeft(),xn=()=>{if(Ce.timeout)return He(),Ce.timeout.stop()},_n=()=>{if(Ce.timeout){const e=Ce.timeout.start();return ze(e),e}},kn=()=>{const e=Ce.timeout;return e&&(e.running?xn():_n())},Nn=e=>{if(Ce.timeout){const t=Ce.timeout.increase(e);return ze(t,!0),t}},Sn=()=>Ce.timeout&&Ce.timeout.isRunning();let An=!1;const En={};function Tn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"data-swal-template";En[e]=this,An||(document.body.addEventListener("click",In),An=!0)}const In=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const e in En){const c=t.getAttribute(e);if(c)return void En[e].fire({template:c})}};var On=Object.freeze({isValidParameter:v,isUpdatableParameter:z,isDeprecatedParameter:H,argsToParams:bn,isVisible:vc,clickConfirm:zc,clickDeny:Hc,clickCancel:yc,getContainer:_,getPopup:S,getTitle:E,getHtmlContainer:T,getImage:I,getIcon:A,getInputLabel:F,getCloseButton:W,getActions:j,getConfirmButton:R,getDenyButton:D,getCancelButton:B,getLoader:U,getFooter:q,getTimerProgressBar:$,getFocusableElements:K,getValidationMessage:P,isLoading:J,fire:wn,mixin:Mn,showLoading:tc,enableLoading:tc,getTimerLeft:Ln,stopTimer:xn,resumeTimer:_n,toggleTimer:kn,increaseTimer:Nn,isTimerRunning:Sn,bindClickHandler:Tn});let Pn;class Rn{constructor(){if("undefined"===typeof window)return;Pn=this;for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];const n=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const i=this._main(this.params);We.promise.set(this,i)}_main(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};b(Object.assign({},t,e)),Ce.currentInstance&&(Ce.currentInstance._destroy(),Y()&&wt()),Ce.currentInstance=this;const c=Fn(e,t);Rt(c),Object.freeze(c),Ce.timeout&&(Ce.timeout.stop(),delete Ce.timeout),clearTimeout(Ce.restoreFocusTimeout);const n=Un(this);return Vt(this,c),We.innerParams.set(this,c),Dn(this,n,c)}then(e){const t=We.promise.get(this);return t.then(e)}finally(e){const t=We.promise.get(this);return t.finally(e)}}const Dn=(e,t,c)=>new Promise(((n,i)=>{const s=t=>{e.closePopup({isDismissed:!0,dismiss:t})};gc.swalPromiseResolve.set(e,n),gc.swalPromiseReject.set(e,i),t.confirmButton.onclick=()=>sn(e),t.denyButton.onclick=()=>rn(e),t.cancelButton.onclick=()=>an(e,s),t.closeButton.onclick=()=>s(Ct.close),pn(e,t,s),Cc(e,Ce,c,s),nc(e,c),Qt(c),Bn(Ce,c,s),jn(t,c),setTimeout((()=>{t.container.scrollTop=0}))})),Fn=(e,t)=>{const c=Lt(e),n=Object.assign({},d,t,c,e);return n.showClass=Object.assign({},d.showClass,n.showClass),n.hideClass=Object.assign({},d.hideClass,n.hideClass),n},Un=e=>{const t={popup:S(),container:_(),actions:j(),confirmButton:R(),denyButton:D(),cancelButton:B(),loader:U(),closeButton:W(),validationMessage:P(),progressSteps:O()};return We.domCache.set(e,t),t},Bn=(e,t,c)=>{const n=$();fe(n),t.timer&&(e.timeout=new Dt((()=>{c("timer"),delete e.timeout}),t.timer),t.timerProgressBar&&(ue(n),ce(n,t,"timerProgressBar"),setTimeout((()=>{e.timeout&&e.timeout.running&&ze(t.timer)}))))},jn=(e,t)=>{if(!t.toast)return l(t.allowEnterKey)?void(qn(e,t)||bc(t,-1,1)):$n()},qn=(e,t)=>t.focusDeny&&pe(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&pe(e.cancelButton)?(e.cancelButton.focus(),!0):!(!t.focusConfirm||!pe(e.confirmButton))&&(e.confirmButton.focus(),!0),$n=()=>{document.activeElement instanceof HTMLElement&&"function"===typeof document.activeElement.blur&&document.activeElement.blur()};Object.assign(Rn.prototype,nn),Object.assign(Rn,On),Object.keys(nn).forEach((e=>{Rn[e]=function(){if(Pn)return Pn[e](...arguments)}})),Rn.DismissReason=Ct,Rn.version="11.4.8";const Wn=Rn;return Wn.default=Wn,Wn})),"undefined"!==typeof this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2),"undefined"!=typeof document&&function(e,t){var c=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(c),c.styleSheet)c.styleSheet.disabled||(c.styleSheet.cssText=t);else try{c.innerHTML=t}catch(e){c.innerText=t}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')},89:function(e,t){"use strict";t.Z=(e,t)=>{const c=e.__vccOpts||e;for(const[n,i]of t)c[n]=i;return c}},65:function(e,t,c){"use strict";c.d(t,{MT:function(){return ee},nv:function(){return re},Se:function(){return se},OI:function(){return ie},rn:function(){return ne}});c(7658),c(541);var n=c(3396),i=c(4870);function s(){return r().__VUE_DEVTOOLS_GLOBAL_HOOK__}function r(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof c.g?c.g:{}}const a="function"===typeof Proxy,o="devtools-plugin:setup",l="plugin:settings:set";let u,f;function h(){var e;return void 0!==u||("undefined"!==typeof window&&window.performance?(u=!0,f=window.performance):"undefined"!==typeof c.g&&(null===(e=c.g.perf_hooks)||void 0===e?void 0:e.performance)?(u=!0,f=c.g.perf_hooks.performance):u=!1),u}function d(){return h()?f.now():Date.now()}class p{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const c={};if(e.settings)for(const r in e.settings){const t=e.settings[r];c[r]=t.defaultValue}const n=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},c);try{const e=localStorage.getItem(n),t=JSON.parse(e);Object.assign(i,t)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(n,JSON.stringify(e))}catch(s){}i=e},now(){return d()}},t&&t.on(l,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((c=>{this.targetQueue.push({method:t,args:e,resolve:c})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function m(e,t){const c=e,n=r(),i=s(),l=a&&c.enableEarlyProxy;if(!i||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&l){const e=l?new p(c,i):null,s=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:c,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else i.emit(o,e,t)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var g="store";function v(e,t){Object.keys(e).forEach((function(c){return t(e[c],c)}))}function z(e){return null!==e&&"object"===typeof e}function H(e){return e&&"function"===typeof e.then}function y(e,t){return function(){return e(t)}}function V(e,t,c){return t.indexOf(e)<0&&(c&&c.prepend?t.unshift(e):t.push(e)),function(){var c=t.indexOf(e);c>-1&&t.splice(c,1)}}function C(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var c=e.state;w(e,c,[],e._modules.root,!0),b(e,c,t)}function b(e,t,c){var s=e._state,r=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var a=e._wrappedGetters,o={},l={},u=(0,i.B)(!0);u.run((function(){v(a,(function(t,c){o[c]=y(t,e),l[c]=(0,n.Fl)((function(){return o[c]()})),Object.defineProperty(e.getters,c,{get:function(){return l[c].value},enumerable:!0})}))})),e._state=(0,i.qj)({data:t}),e._scope=u,e.strict&&N(e),s&&c&&e._withCommit((function(){s.data=null})),r&&r.stop()}function w(e,t,c,n,i){var s=!c.length,r=e._modules.getNamespace(c);if(n.namespaced&&(e._modulesNamespaceMap[r],e._modulesNamespaceMap[r]=n),!s&&!i){var a=S(t,c.slice(0,-1)),o=c[c.length-1];e._withCommit((function(){a[o]=n.state}))}var l=n.context=M(e,r,c);n.forEachMutation((function(t,c){var n=r+c;x(e,n,t,l)})),n.forEachAction((function(t,c){var n=t.root?c:r+c,i=t.handler||t;_(e,n,i,l)})),n.forEachGetter((function(t,c){var n=r+c;k(e,n,t,l)})),n.forEachChild((function(n,s){w(e,t,c.concat(s),n,i)}))}function M(e,t,c){var n=""===t,i={dispatch:n?e.dispatch:function(c,n,i){var s=A(c,n,i),r=s.payload,a=s.options,o=s.type;return a&&a.root||(o=t+o),e.dispatch(o,r)},commit:n?e.commit:function(c,n,i){var s=A(c,n,i),r=s.payload,a=s.options,o=s.type;a&&a.root||(o=t+o),e.commit(o,r,a)}};return Object.defineProperties(i,{getters:{get:n?function(){return e.getters}:function(){return L(e,t)}},state:{get:function(){return S(e.state,c)}}}),i}function L(e,t){if(!e._makeLocalGettersCache[t]){var c={},n=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,n)===t){var s=i.slice(n);Object.defineProperty(c,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=c}return e._makeLocalGettersCache[t]}function x(e,t,c,n){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){c.call(e,n.state,t)}))}function _(e,t,c,n){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=c.call(e,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:e.getters,rootState:e.state},t);return H(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function k(e,t,c,n){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return c(n.state,n.getters,e.state,e.getters)})}function N(e){(0,n.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function S(e,t){return t.reduce((function(e,t){return e[t]}),e)}function A(e,t,c){return z(e)&&e.type&&(c=t,t=e,e=e.type),{type:e,payload:t,options:c}}var E="vuex bindings",T="vuex:mutations",I="vuex:actions",O="vuex",P=0;function R(e,t){m({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[E]},(function(c){c.addTimelineLayer({id:T,label:"Vuex Mutations",color:D}),c.addTimelineLayer({id:I,label:"Vuex Actions",color:D}),c.addInspector({id:O,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),c.on.getInspectorTree((function(c){if(c.app===e&&c.inspectorId===O)if(c.filter){var n=[];$(n,t._modules.root,c.filter,""),c.rootNodes=n}else c.rootNodes=[q(t._modules.root,"")]})),c.on.getInspectorState((function(c){if(c.app===e&&c.inspectorId===O){var n=c.nodeId;L(t,n),c.state=W(K(t._modules,n),"root"===n?t.getters:t._makeLocalGettersCache,n)}})),c.on.editInspectorState((function(c){if(c.app===e&&c.inspectorId===O){var n=c.nodeId,i=c.path;"root"!==n&&(i=n.split("/").filter(Boolean).concat(i)),t._withCommit((function(){c.set(t._state.data,i,c.state.value)}))}})),t.subscribe((function(e,t){var n={};e.payload&&(n.payload=e.payload),n.state=t,c.notifyComponentUpdate(),c.sendInspectorTree(O),c.sendInspectorState(O),c.addTimelineEvent({layerId:T,event:{time:Date.now(),title:e.type,data:n}})})),t.subscribeAction({before:function(e,t){var n={};e.payload&&(n.payload=e.payload),e._id=P++,e._time=Date.now(),n.state=t,c.addTimelineEvent({layerId:I,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:n}})},after:function(e,t){var n={},i=Date.now()-e._time;n.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(n.payload=e.payload),n.state=t,c.addTimelineEvent({layerId:I,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:n}})}})}))}var D=8702998,F=6710886,U=16777215,B={label:"namespaced",textColor:U,backgroundColor:F};function j(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function q(e,t){return{id:t||"root",label:j(t),tags:e.namespaced?[B]:[],children:Object.keys(e._children).map((function(c){return q(e._children[c],t+c+"/")}))}}function $(e,t,c,n){n.includes(c)&&e.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:t.namespaced?[B]:[]}),Object.keys(t._children).forEach((function(i){$(e,t._children[i],c,n+i+"/")}))}function W(e,t,c){t="root"===c?t:t[c];var n=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(n.length){var s=G(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?j(e):e,editable:!1,value:Y((function(){return s[e]}))}}))}return i}function G(e){var t={};return Object.keys(e).forEach((function(c){var n=c.split("/");if(n.length>1){var i=t,s=n.pop();n.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=Y((function(){return e[c]}))}else t[c]=Y((function(){return e[c]}))})),t}function K(e,t){var c=t.split("/").filter((function(e){return e}));return c.reduce((function(e,n,i){var s=e[n];if(!s)throw new Error('Missing module "'+n+'" for path "'+t+'".');return i===c.length-1?s:s._children}),"root"===t?e:e.root._children)}function Y(e){try{return e()}catch(t){return t}}var Q=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var c=e.state;this.state=("function"===typeof c?c():c)||{}},J={namespaced:{configurable:!0}};J.namespaced.get=function(){return!!this._rawModule.namespaced},Q.prototype.addChild=function(e,t){this._children[e]=t},Q.prototype.removeChild=function(e){delete this._children[e]},Q.prototype.getChild=function(e){return this._children[e]},Q.prototype.hasChild=function(e){return e in this._children},Q.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Q.prototype.forEachChild=function(e){v(this._children,e)},Q.prototype.forEachGetter=function(e){this._rawModule.getters&&v(this._rawModule.getters,e)},Q.prototype.forEachAction=function(e){this._rawModule.actions&&v(this._rawModule.actions,e)},Q.prototype.forEachMutation=function(e){this._rawModule.mutations&&v(this._rawModule.mutations,e)},Object.defineProperties(Q.prototype,J);var X=function(e){this.register([],e,!1)};function Z(e,t,c){if(t.update(c),c.modules)for(var n in c.modules){if(!t.getChild(n))return void 0;Z(e.concat(n),t.getChild(n),c.modules[n])}}X.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},X.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,c){return t=t.getChild(c),e+(t.namespaced?c+"/":"")}),"")},X.prototype.update=function(e){Z([],this.root,e)},X.prototype.register=function(e,t,c){var n=this;void 0===c&&(c=!0);var i=new Q(t,c);if(0===e.length)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}t.modules&&v(t.modules,(function(t,i){n.register(e.concat(i),t,c)}))},X.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),c=e[e.length-1],n=t.getChild(c);n&&n.runtime&&t.removeChild(c)},X.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),c=e[e.length-1];return!!t&&t.hasChild(c)};function ee(e){return new te(e)}var te=function(e){var t=this;void 0===e&&(e={});var c=e.plugins;void 0===c&&(c=[]);var n=e.strict;void 0===n&&(n=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new X(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var s=this,r=this,a=r.dispatch,o=r.commit;this.dispatch=function(e,t){return a.call(s,e,t)},this.commit=function(e,t,c){return o.call(s,e,t,c)},this.strict=n;var l=this._modules.root.state;w(this,l,[],this._modules.root),b(this,l),c.forEach((function(e){return e(t)}))},ce={state:{configurable:!0}};te.prototype.install=function(e,t){e.provide(t||g,this),e.config.globalProperties.$store=this;var c=void 0!==this._devtools&&this._devtools;c&&R(e,this)},ce.state.get=function(){return this._state.data},ce.state.set=function(e){0},te.prototype.commit=function(e,t,c){var n=this,i=A(e,t,c),s=i.type,r=i.payload,a=(i.options,{type:s,payload:r}),o=this._mutations[s];o&&(this._withCommit((function(){o.forEach((function(e){e(r)}))})),this._subscribers.slice().forEach((function(e){return e(a,n.state)})))},te.prototype.dispatch=function(e,t){var c=this,n=A(e,t),i=n.type,s=n.payload,r={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(r,c.state)}))}catch(l){0}var o=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){o.then((function(t){try{c._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(r,c.state)}))}catch(l){0}e(t)}),(function(e){try{c._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(r,c.state,e)}))}catch(l){0}t(e)}))}))}},te.prototype.subscribe=function(e,t){return V(e,this._subscribers,t)},te.prototype.subscribeAction=function(e,t){var c="function"===typeof e?{before:e}:e;return V(c,this._actionSubscribers,t)},te.prototype.watch=function(e,t,c){var i=this;return(0,n.YP)((function(){return e(i.state,i.getters)}),t,Object.assign({},c))},te.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},te.prototype.registerModule=function(e,t,c){void 0===c&&(c={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),w(this,this.state,e,this._modules.get(e),c.preserveState),b(this,this.state)},te.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var c=S(t.state,e.slice(0,-1));delete c[e[e.length-1]]})),C(this)},te.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},te.prototype.hotUpdate=function(e){this._modules.update(e),C(this,!0)},te.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(te.prototype,ce);var ne=le((function(e,t){var c={};return ae(t).forEach((function(t){var n=t.key,i=t.val;c[n]=function(){var t=this.$store.state,c=this.$store.getters;if(e){var n=ue(this.$store,"mapState",e);if(!n)return;t=n.context.state,c=n.context.getters}return"function"===typeof i?i.call(this,t,c):t[i]},c[n].vuex=!0})),c})),ie=le((function(e,t){var c={};return ae(t).forEach((function(t){var n=t.key,i=t.val;c[n]=function(){var t=[],c=arguments.length;while(c--)t[c]=arguments[c];var n=this.$store.commit;if(e){var s=ue(this.$store,"mapMutations",e);if(!s)return;n=s.context.commit}return"function"===typeof i?i.apply(this,[n].concat(t)):n.apply(this.$store,[i].concat(t))}})),c})),se=le((function(e,t){var c={};return ae(t).forEach((function(t){var n=t.key,i=t.val;i=e+i,c[n]=function(){if(!e||ue(this.$store,"mapGetters",e))return this.$store.getters[i]},c[n].vuex=!0})),c})),re=le((function(e,t){var c={};return ae(t).forEach((function(t){var n=t.key,i=t.val;c[n]=function(){var t=[],c=arguments.length;while(c--)t[c]=arguments[c];var n=this.$store.dispatch;if(e){var s=ue(this.$store,"mapActions",e);if(!s)return;n=s.context.dispatch}return"function"===typeof i?i.apply(this,[n].concat(t)):n.apply(this.$store,[i].concat(t))}})),c}));function ae(e){return oe(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function oe(e){return Array.isArray(e)||z(e)}function le(e){return function(t,c){return"string"!==typeof t?(c=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,c)}}function ue(e,t,c){var n=e._modulesNamespaceMap[c];return n}},9082:function(e,t,c){"use strict";c.d(t,{Z:function(){return f}});var n=c(3396),i=c(7139),s=c(9242);const r={class:"v-spinner"};function a(e,t,c,a,o,l){return(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",{class:"v-pulse v-pulse1",style:(0,i.j5)([o.spinnerStyle,o.spinnerDelay1])},null,4),(0,n._)("div",{class:"v-pulse v-pulse2",style:(0,i.j5)([o.spinnerStyle,o.spinnerDelay2])},null,4),(0,n._)("div",{class:"v-pulse v-pulse3",style:(0,i.j5)([o.spinnerStyle,o.spinnerDelay3])},null,4)],512)),[[s.F8,c.loading]])}var o={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},l=c(89);const u=(0,l.Z)(o,[["render",a]]);var f=u},2661:function(e,t,c){"use strict";c.d(t,{Z:function(){return v}});var n=c(223),i=c(7142),s=c(7077),r=c(5168);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var c;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null===(c=n.getComponent())||void 0===c?void 0:c.instantiationMode)||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new n.LL("app-compat","Firebase",o);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e){const t={},c={__esModule:!0,initializeApp:a,app:r,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:u,removeApp:i,useAsService:f,modularAPIs:s}};function i(e){delete t[e]}function r(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,n.r3)(t,e))throw l.create("no-app",{appName:e});return t[e]}function a(i,r={}){const a=s.initializeApp(i,r);if((0,n.r3)(t,a.name))return t[a.name];const o=new e(a,c);return t[a.name]=o,o}function o(){return Object.keys(t).map((e=>t[e]))}function u(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=r())=>{if("function"!==typeof e[a])throw l.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,n.ZB)(s,t.serviceProps),c[a]=s,e.prototype[a]=function(...e){const c=this._getService.bind(this,i);return c.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?c[a]:null}function f(e,t){if("serverAuth"===t)return null;const c=t;return c}return c["default"]=c,Object.defineProperty(c,"apps",{get:o}),r["App"]=e,c}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){const e=u(a);function t(t){(0,n.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:f,extendNamespace:t,createSubscribe:n.ne,ErrorFactory:n.LL,deepExtend:n.ZB}),e}const h=f(),d=new r.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.2.8";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,n.jU)()&&void 0!==self.firebase){d.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&d.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=h;g()},7077:function(e,t,c){"use strict";c.r(t),c.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return ze},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return le},_addOrOverwriteComponent:function(){return ue},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return oe},_getProvider:function(){return he},_registerComponent:function(){return fe},_removeServiceInstance:function(){return de},deleteApp:function(){return Ce},getApp:function(){return ye},getApps:function(){return Ve},initializeApp:function(){return He},onLog:function(){return we},registerVersion:function(){return be},setLogLevel:function(){return Me}});c(7658);var n=c(7142),i=c(5168),s=c(223);c(2801);const r=(e,t)=>t.some((t=>e instanceof t));let a,o;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f=new WeakMap,h=new WeakMap,d=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,c)=>{const n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(C(e.result)),n()},s=()=>{c(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&f.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(h.has(e))return;const t=new Promise(((t,c)=>{const n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{c(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));h.set(e,t)}let z={get(e,t,c){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return C(e[t])},set(e,t,c){return e[t]=c,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function H(e){z=e(z)}function y(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(b(this),t),C(f.get(this))}:function(...t){return C(e.apply(b(this),t))}:function(t,...c){const n=e.call(b(this),t,...c);return d.set(n,t.sort?t.sort():[t]),C(n)}}function V(e){return"function"===typeof e?y(e):(e instanceof IDBTransaction&&v(e),r(e,l())?new Proxy(e,z):e)}function C(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=V(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const b=e=>m.get(e);function w(e,t,{blocked:c,upgrade:n,blocking:i,terminated:s}={}){const r=indexedDB.open(e,t),a=C(r);return n&&r.addEventListener("upgradeneeded",(e=>{n(C(r.result),e.oldVersion,e.newVersion,C(r.transaction))})),c&&r.addEventListener("blocked",(()=>c())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const M=["get","getKey","getAll","getAllKeys","count"],L=["put","add","delete","clear"],x=new Map;function _(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(x.get(t))return x.get(t);const c=t.replace(/FromIndex$/,""),n=t!==c,i=L.includes(c);if(!(c in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!M.includes(c))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let r=s.store;return n&&(r=r.index(t.shift())),(await Promise.all([r[c](...t),i&&s.done]))[0]};return x.set(t,s),s}H((e=>({...e,get:(t,c,n)=>_(t,c)||e.get(t,c,n),has:(t,c)=>!!_(t,c)||e.has(t,c)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const S="@firebase/app",A="0.9.8",E=new i.Yd("@firebase/app"),T="@firebase/app-compat",I="@firebase/analytics-compat",O="@firebase/analytics",P="@firebase/app-check-compat",R="@firebase/app-check",D="@firebase/auth",F="@firebase/auth-compat",U="@firebase/database",B="@firebase/database-compat",j="@firebase/functions",q="@firebase/functions-compat",$="@firebase/installations",W="@firebase/installations-compat",G="@firebase/messaging",K="@firebase/messaging-compat",Y="@firebase/performance",Q="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ce="@firebase/firestore-compat",ne="firebase",ie="9.20.0",se="[DEFAULT]",re={[S]:"fire-core",[T]:"fire-core-compat",[O]:"fire-analytics",[I]:"fire-analytics-compat",[R]:"fire-app-check",[P]:"fire-app-check-compat",[D]:"fire-auth",[F]:"fire-auth-compat",[U]:"fire-rtdb",[B]:"fire-rtdb-compat",[j]:"fire-fn",[q]:"fire-fn-compat",[$]:"fire-iid",[W]:"fire-iid-compat",[G]:"fire-fcm",[K]:"fire-fcm-compat",[Y]:"fire-perf",[Q]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ce]:"fire-fst-compat","fire-js":"fire-js",[ne]:"fire-js-all"},ae=new Map,oe=new Map;function le(e,t){try{e.container.addComponent(t)}catch(c){E.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,c)}}function ue(e,t){e.container.addOrOverwriteComponent(t)}function fe(e){const t=e.name;if(oe.has(t))return E.debug(`There were multiple attempts to register component ${t}.`),!1;oe.set(t,e);for(const c of ae.values())le(c,e);return!0}function he(e,t){const c=e.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),e.container.getProvider(t)}function de(e,t,c=se){he(e,t).clearInstance(c)}function pe(){oe.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s.LL("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(e,t,c){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new n.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=ie;function He(e,t={}){let c=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!==typeof r||!r)throw ge.create("bad-app-name",{appName:String(r)});if(c||(c=(0,s.aH)()),!c)throw ge.create("no-options");const a=ae.get(r);if(a){if((0,s.vZ)(c,a.options)&&(0,s.vZ)(i,a.config))return a;throw ge.create("duplicate-app",{appName:r})}const o=new n.H0(r);for(const n of oe.values())o.addComponent(n);const l=new ve(c,i,o);return ae.set(r,l),l}function ye(e=se){const t=ae.get(e);if(!t&&e===se)return He();if(!t)throw ge.create("no-app",{appName:e});return t}function Ve(){return Array.from(ae.values())}async function Ce(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function be(e,t,c){var i;let s=null!==(i=re[e])&&void 0!==i?i:e;c&&(s+=`-${c}`);const r=s.match(/\s|\//),a=t.match(/\s|\//);if(r||a){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void E.warn(e.join(" "))}fe(new n.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function we(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function Me(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="firebase-heartbeat-database",xe=1,_e="firebase-heartbeat-store";let ke=null;function Ne(){return ke||(ke=w(Le,xe,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_e)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),ke}async function Se(e){try{const t=await Ne();return t.transaction(_e).objectStore(_e).get(Ee(e))}catch(t){if(t instanceof s.ZR)E.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});E.warn(e.message)}}}async function Ae(e,t){try{const c=await Ne(),n=c.transaction(_e,"readwrite"),i=n.objectStore(_e);return await i.put(t,Ee(e)),n.done}catch(c){if(c instanceof s.ZR)E.warn(c.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===c||void 0===c?void 0:c.message});E.warn(e.message)}}}function Ee(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=1024,Ie=2592e6;class Oe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new De(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),c=Pe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==c&&!this._heartbeatsCache.heartbeats.some((e=>e.date===c)))return this._heartbeatsCache.heartbeats.push({date:c,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),c=Date.now();return c-t<=Ie})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pe(),{heartbeatsToSend:t,unsentEntries:c}=Re(this._heartbeatsCache.heartbeats),n=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Pe(){const e=new Date;return e.toISOString().substring(0,10)}function Re(e,t=Te){const c=[];let n=e.slice();for(const i of e){const e=c.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Fe(c)>t){e.dates.pop();break}}else if(c.push({agent:i.agent,dates:[i.date]}),Fe(c)>t){c.pop();break}n=n.slice(1)}return{heartbeatsToSend:c,unsentEntries:n}}class De{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Se(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const c=await this._canUseIndexedDBPromise;if(c){const c=await this.read();return Ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:c.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const c=await this._canUseIndexedDBPromise;if(c){const c=await this.read();return Ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:c.lastSentHeartbeatDate,heartbeats:[...c.heartbeats,...e.heartbeats]})}}}function Fe(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){fe(new n.wA("platform-logger",(e=>new k(e)),"PRIVATE")),fe(new n.wA("heartbeat",(e=>new Oe(e)),"PRIVATE")),be(S,A,e),be(S,A,"esm2017"),be("fire-js","")}Ue("")},7142:function(e,t,c){"use strict";c.d(t,{H0:function(){return l},wA:function(){return i}});var n=c(223);class i{constructor(e,t,c){this.name=e,this.instanceFactory=t,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const c=this.getOrInitializeService({instanceIdentifier:t});c&&e.resolve(c)}catch(c){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const c=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),n=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(c)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:c})}catch(i){if(n)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(o(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,c]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});c.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,c=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(c))throw Error(`${this.name}(${c}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:c,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);c===e&&s.resolve(n)}return n}onInit(e,t){var c;const n=this.normalizeInstanceIdentifier(t),i=null!==(c=this.onInitCallbacks.get(n))&&void 0!==c?c:new Set;i.add(e),this.onInitCallbacks.set(n,i);const s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const c=this.onInitCallbacks.get(t);if(c)for(const i of c)try{i(e,t)}catch(n){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let c=this.instances.get(e);if(!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,c),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(c,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,c)}catch(n){}return c||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function o(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new r(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,c){"use strict";c.d(t,{Am:function(){return f},Ub:function(){return u},Yd:function(){return l},in:function(){return i}});c(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,n.registerVersion)(i,s,"app")},1609:function(e,t,c){"use strict";c.d(t,{Xb:function(){return n.a8},v0:function(){return n.o},Aj:function(){return n.x},w7:function(){return n.B}});var n=c(4470);c(223),c(7077),c(5168),c(7142)},1509:function(e,t,c){"use strict";c.d(t,{Z:function(){return n.Z}});var n=c(2661),i="firebase",s="9.20.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n.Z.registerVersion(i,s,"app-compat")},5363:function(e,t,c){"use strict";c(7658);var n=c(2661),i=(c(3767),c(8585),c(8696),c(4470)),s=c(223),r=(c(7077),c(5168),c(7142));
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function a(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o=2e3;async function l(e,t,c){var n;const{BuildInfo:s}=a();(0,i.as)(t.sessionId,"AuthEvent did not contain a session ID");const r=await p(t.sessionId),o={};return(0,i.at)()?o["ibi"]=s.packageName:(0,i.au)()?o["apn"]=s.packageName:(0,i.av)(e,"operation-not-supported-in-this-environment"),s.displayName&&(o["appDisplayName"]=s.displayName),o["sessionId"]=r,(0,i.aw)(e,c,t.type,void 0,null!==(n=t.eventId)&&void 0!==n?n:void 0,o)}async function u(e){const{BuildInfo:t}=a(),c={};(0,i.at)()?c.iosBundleId=t.packageName:(0,i.au)()?c.androidPackageName=t.packageName:(0,i.av)(e,"operation-not-supported-in-this-environment"),await(0,i.ax)(e,c)}function f(e){const{cordova:t}=a();return new Promise((c=>{t.plugins.browsertab.isAvailable((n=>{let s=null;n?t.plugins.browsertab.openUrl(e):s=t.InAppBrowser.open(e,(0,i.ay)()?"_blank":"_system","location=yes"),c(s)}))}))}async function h(e,t,c){const{cordova:n}=a();let s=()=>{};try{await new Promise(((r,a)=>{let l=null;function u(){var e;r();const t=null===(e=n.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===c||void 0===c?void 0:c.close)&&c.close()}function f(){l||(l=window.setTimeout((()=>{a((0,i.az)(e,"redirect-cancelled-by-user"))}),o))}function h(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&f()}t.addPassiveListener(u),document.addEventListener("resume",f,!1),(0,i.au)()&&document.addEventListener("visibilitychange",h,!1),s=()=>{t.removePassiveListener(u),document.removeEventListener("resume",f,!1),document.removeEventListener("visibilitychange",h,!1),l&&window.clearTimeout(l)}}))}finally{s()}}function d(e){var t,c,n,s,r,o,l,u,f,h;const d=a();(0,i.aA)("function"===typeof(null===(t=null===d||void 0===d?void 0:d.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,i.aA)("undefined"!==typeof(null===(c=null===d||void 0===d?void 0:d.BuildInfo)||void 0===c?void 0:c.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,i.aA)("function"===typeof(null===(r=null===(s=null===(n=null===d||void 0===d?void 0:d.cordova)||void 0===n?void 0:n.plugins)||void 0===s?void 0:s.browsertab)||void 0===r?void 0:r.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.aA)("function"===typeof(null===(u=null===(l=null===(o=null===d||void 0===d?void 0:d.cordova)||void 0===o?void 0:o.plugins)||void 0===l?void 0:l.browsertab)||void 0===u?void 0:u.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,i.aA)("function"===typeof(null===(h=null===(f=null===d||void 0===d?void 0:d.cordova)||void 0===f?void 0:f.InAppBrowser)||void 0===h?void 0:h.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function p(e){const t=m(e),c=await crypto.subtle.digest("SHA-256",t),n=Array.from(new Uint8Array(c));return n.map((e=>e.toString(16).padStart(2,"0"))).join("")}function m(e){if((0,i.as)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),c=new Uint8Array(t);for(let n=0;n<e.length;n++)c[n]=e.charCodeAt(n);return c}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=20;class v extends i.aB{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function z(e,t,c=null){return{type:t,eventId:c,urlResponse:null,sessionId:C(),postBody:null,tenantId:e.tenantId,error:(0,i.az)(e,"no-auth-event")}}function H(e,t){return b()._set(w(e),t)}async function y(e){const t=await b()._get(w(e));return t&&await b()._remove(w(e)),t}function V(e,t){var c,n;const s=L(t);if(s.includes("/__/auth/callback")){const t=x(s),r=t["firebaseError"]?M(decodeURIComponent(t["firebaseError"])):null,a=null===(n=null===(c=null===r||void 0===r?void 0:r["code"])||void 0===c?void 0:c.split("auth/"))||void 0===n?void 0:n[1],o=a?(0,i.az)(a):null;return o?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:o,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:s,postBody:null}}return null}function C(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let c=0;c<g;c++){const c=Math.floor(Math.random()*t.length);e.push(t.charAt(c))}return e.join("")}function b(){return(0,i.aC)(i.b)}function w(e){return(0,i.aD)("authEvent",e.config.apiKey,e.name)}function M(e){try{return JSON.parse(e)}catch(t){return null}}function L(e){const t=x(e),c=t["link"]?decodeURIComponent(t["link"]):void 0,n=x(c)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=x(i)["link"];return s||i||n||c||e}function x(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...c]=e.split("?");return(0,s.zd)(c.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=500;class k{constructor(){this._redirectPersistence=i.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=i.aE,this._overrideRedirectResult=i.aF}async _initialize(e){const t=e._key();let c=this.eventManagers.get(t);return c||(c=new v(e),this.eventManagers.set(t,c),this.attachCallbackListeners(e,c)),c}_openPopup(e){(0,i.av)(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,c,n){d(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),(0,i.aG)(),await this._originValidation(e);const r=z(e,c,n);await H(e,r);const a=await l(e,r,t),o=await f(a);return h(e,s,o)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=u(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:c,handleOpenURL:n,BuildInfo:i}=a(),s=setTimeout((async()=>{await y(e),t.onEvent(S())}),_),r=async c=>{clearTimeout(s);const n=await y(e);let i=null;n&&(null===c||void 0===c?void 0:c["url"])&&(i=V(n,c["url"])),t.onEvent(i||S())};"undefined"!==typeof c&&"function"===typeof c.subscribe&&c.subscribe(null,r);const o=n,l=`${i.packageName.toLowerCase()}://`;a().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(l)&&r({url:e}),"function"===typeof o)try{o(e)}catch(t){console.error(t)}}}}const N=k;function S(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,i.az)("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){(0,i.aH)(e)._logFramework(t)}var E="@firebase/auth-compat",T="0.4.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I=1e3;function O(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function P(){return"http:"===O()||"https:"===O()}function R(e=(0,s.z$)()){return!("file:"!==O()&&"ionic:"!==O()&&"capacitor:"!==O()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function D(){return(0,s.b$)()||(0,s.UG)()}function F(){return(0,s.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function U(e=(0,s.z$)()){return/Edge\/\d+/.test(e)}function B(e=(0,s.z$)()){return F()||U(e)}function j(){try{const e=self.localStorage,t=i.aL();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!B()||(0,s.hl)()}catch(e){return q()&&(0,s.hl)()}return!1}function q(){return"undefined"!==typeof c.g&&"WorkerGlobalScope"in c.g&&"importScripts"in c.g}function $(){return(P()||(0,s.ru)()||R())&&!D()&&j()&&!q()}function W(){return R()&&"undefined"!==typeof document}async function G(){return!!W()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),I);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function K(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={LOCAL:"local",NONE:"none",SESSION:"session"},Q=i.aA,J="persistence";function X(e,t){Q(Object.values(Y).includes(t),e,"invalid-persistence-type"),(0,s.b$)()?Q(t!==Y.SESSION,e,"unsupported-persistence-type"):(0,s.UG)()?Q(t===Y.NONE,e,"unsupported-persistence-type"):q()?Q(t===Y.NONE||t===Y.LOCAL&&(0,s.hl)(),e,"unsupported-persistence-type"):Q(t===Y.NONE||j(),e,"unsupported-persistence-type")}async function Z(e){await e._initializationPromise;const t=te(),c=i.aD(J,e.config.apiKey,e.name);t&&t.setItem(c,e._getPersistence())}function ee(e,t){const c=te();if(!c)return[];const n=i.aD(J,e,t),s=c.getItem(n);switch(s){case Y.NONE:return[i.N];case Y.LOCAL:return[i.i,i.a];case Y.SESSION:return[i.a];default:return[]}}function te(){var e;try{return(null===(e=K())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=i.aA;class ne{constructor(){this.browserResolver=i.aC(i.k),this.cordovaResolver=i.aC(N),this.underlyingResolver=null,this._redirectPersistence=i.a,this._completeRedirectFn=i.aE,this._overrideRedirectResult=i.aF}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,c,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,c,n)}async _openRedirect(e,t,c,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,c,n)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return W()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return ce(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await G();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){return e.unwrap()}function se(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){return oe(e)}function ae(e,t){var c;const n=null===(c=t.customData)||void 0===c?void 0:c._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const c=t;c.resolver=new fe(e,i.aq(e,t))}else if(n){const e=oe(t),c=t;e&&(c.credential=e,c.tenantId=n.tenantId||void 0,c.email=n.email||void 0,c.phoneNumber=n.phoneNumber||void 0)}}function oe(e){const{_tokenResponse:t}=e instanceof s.ZR?e.customData:e;if(!t)return null;if(!(e instanceof s.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return i.P.credentialFromResult(e);const c=t.providerId;if(!c||c===i.p.PASSWORD)return null;let n;switch(c){case i.p.GOOGLE:n=i.V;break;case i.p.FACEBOOK:n=i.U;break;case i.p.GITHUB:n=i.W;break;case i.p.TWITTER:n=i.Z;break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:r,pendingToken:a,nonce:o}=t;return s||r||e||a?a?c.startsWith("saml.")?i.aO._create(c,a):i.L._fromParams({providerId:c,signInMethod:c,pendingToken:a,idToken:e,accessToken:s}):new i.X(c).credential({idToken:e,accessToken:s,rawNonce:o}):null}return e instanceof s.ZR?n.credentialFromError(e):n.credentialFromResult(e)}function le(e,t){return t.catch((t=>{throw t instanceof s.ZR&&ae(e,t),t})).then((e=>{const t=e.operationType,c=e.user;return{operationType:t,credential:re(e),additionalUserInfo:i.ao(e),user:he.getOrCreate(c)}}))}async function ue(e,t){const c=await t;return{verificationId:c.verificationId,confirm:t=>le(e,c.confirm(t))}}class fe{constructor(e,t){this.resolver=t,this.auth=se(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return le(ie(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this._delegate=e,this.multiFactor=i.ar(e)}static getOrCreate(e){return he.USER_MAP.has(e)||he.USER_MAP.set(e,new he(e)),he.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return le(this.auth,i.a0(this._delegate,e))}async linkWithPhoneNumber(e,t){return ue(this.auth,i.l(this._delegate,e,t))}async linkWithPopup(e){return le(this.auth,i.d(this._delegate,e,ne))}async linkWithRedirect(e){return await Z(i.aH(this.auth)),i.g(this._delegate,e,ne)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return le(this.auth,i.a1(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return ue(this.auth,i.r(this._delegate,e,t))}reauthenticateWithPopup(e){return le(this.auth,i.e(this._delegate,e,ne))}async reauthenticateWithRedirect(e){return await Z(i.aH(this.auth)),i.h(this._delegate,e,ne)}sendEmailVerification(e){return i.ae(this._delegate,e)}async unlink(e){return await i.an(this._delegate,e),this}updateEmail(e){return i.aj(this._delegate,e)}updatePassword(e){return i.ak(this._delegate,e)}updatePhoneNumber(e){return i.u(this._delegate,e)}updateProfile(e){return i.ai(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return i.af(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}he.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de=i.aA;class pe{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:c}=e.options;de(c,"invalid-api-key",{appName:e.name}),de(c,"invalid-api-key",{appName:e.name});const n="undefined"!==typeof window?ne:void 0;this._delegate=t.initialize({options:{persistence:ge(c,e.name),popupRedirectResolver:n}}),this._delegate._updateErrorMap(i.D),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?he.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){i.I(this._delegate,e,t)}applyActionCode(e){return i.a5(this._delegate,e)}checkActionCode(e){return i.a6(this._delegate,e)}confirmPasswordReset(e,t){return i.a4(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return le(this._delegate,i.a8(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return i.ad(this._delegate,e)}isSignInWithEmailLink(e){return i.ab(this._delegate,e)}async getRedirectResult(){de($(),this._delegate,"operation-not-supported-in-this-environment");const e=await i.j(this._delegate,ne);return e?le(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){A(this._delegate,e)}onAuthStateChanged(e,t,c){const{next:n,error:i,complete:s}=me(e,t,c);return this._delegate.onAuthStateChanged(n,i,s)}onIdTokenChanged(e,t,c){const{next:n,error:i,complete:s}=me(e,t,c);return this._delegate.onIdTokenChanged(n,i,s)}sendSignInLinkToEmail(e,t){return i.aa(this._delegate,e,t)}sendPasswordResetEmail(e,t){return i.a3(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(X(this._delegate,e),e){case Y.SESSION:t=i.a;break;case Y.LOCAL:const e=await i.aC(i.i)._isAvailable();t=e?i.i:i.b;break;case Y.NONE:t=i.N;break;default:return i.av("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return le(this._delegate,i._(this._delegate))}signInWithCredential(e){return le(this._delegate,i.$(this._delegate,e))}signInWithCustomToken(e){return le(this._delegate,i.a2(this._delegate,e))}signInWithEmailAndPassword(e,t){return le(this._delegate,i.a9(this._delegate,e,t))}signInWithEmailLink(e,t){return le(this._delegate,i.ac(this._delegate,e,t))}signInWithPhoneNumber(e,t){return ue(this._delegate,i.s(this._delegate,e,t))}async signInWithPopup(e){return de($(),this._delegate,"operation-not-supported-in-this-environment"),le(this._delegate,i.c(this._delegate,e,ne))}async signInWithRedirect(e){return de($(),this._delegate,"operation-not-supported-in-this-environment"),await Z(this._delegate),i.f(this._delegate,e,ne)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return i.a7(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function me(e,t,c){let n=e;"function"!==typeof e&&({next:n,error:t,complete:c}=e);const i=n,s=e=>i(e&&he.getOrCreate(e));return{next:s,error:t,complete:c}}function ge(e,t){const c=ee(e,t);if("undefined"===typeof self||c.includes(i.i)||c.push(i.i),"undefined"!==typeof window)for(const n of[i.b,i.a])c.includes(n)||c.push(n);return c.includes(i.N)||c.push(i.N),c}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe.Persistence=Y;class ve{constructor(){this.providerId="phone",this._delegate=new i.P(ie(n.Z.auth()))}static credential(e,t){return i.P.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}ve.PHONE_SIGN_IN_METHOD=i.P.PHONE_SIGN_IN_METHOD,ve.PROVIDER_ID=i.P.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ze=i.aA;class He{constructor(e,t,c=n.Z.app()){var s;ze(null===(s=c.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:c.name}),this._delegate=new i.R(e,t,c.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="auth-compat";function Ve(e){e.INTERNAL.registerComponent(new r.wA(ye,(e=>{const t=e.getProvider("app-compat").getImmediate(),c=e.getProvider("auth");return new pe(t,c)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:i.A.EMAIL_SIGNIN,PASSWORD_RESET:i.A.PASSWORD_RESET,RECOVER_EMAIL:i.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:i.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:i.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:i.A.VERIFY_EMAIL}},EmailAuthProvider:i.Q,FacebookAuthProvider:i.U,GithubAuthProvider:i.W,GoogleAuthProvider:i.V,OAuthProvider:i.X,SAMLAuthProvider:i.Y,PhoneAuthProvider:ve,PhoneMultiFactorGenerator:i.m,RecaptchaVerifier:He,TwitterAuthProvider:i.Z,Auth:pe,AuthCredential:i.J,Error:s.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(E,T)}Ve(n.Z)},36:function(e,t,c){"use strict";c.d(t,{ET:function(){return zf},hJ:function(){return ku},oe:function(){return vf},JU:function(){return Nu},PL:function(){return mf},ad:function(){return Eu},pl:function(){return gf}});c(3767),c(8585),c(8696),c(7658),c(2801);var n,i=c(7077),s=c(7142),r=c(5168),a=c(223),o=(c(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof c.g?c.g:"undefined"!==typeof self?self:{}),l={},u=u||{},f=o||self;function h(){}function d(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function z(e,t,c){return e.call.apply(e.bind,arguments)}function H(e,t,c){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,n),e.apply(t,c)}}return function(){return e.apply(t,arguments)}}function y(e,t,c){return y=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?z:H,y.apply(null,arguments)}function V(e,t){var c=Array.prototype.slice.call(arguments,1);return function(){var t=c.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function C(e,t){function c(){}c.prototype=t.prototype,e.X=t.prototype,e.prototype=new c,e.prototype.constructor=e,e.Wb=function(e,c,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[c].apply(e,i)}}function b(){this.s=this.s,this.o=this.o}var w=0;b.prototype.s=!1,b.prototype.na=function(){this.s||(this.s=!0,this.M(),0==w)||m(this)},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const M=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let c=0;c<e.length;c++)if(c in e&&e[c]===t)return c;return-1};function L(e){const t=e.length;if(0<t){const c=Array(t);for(let n=0;n<t;n++)c[n]=e[n];return c}return[]}function x(e,t){for(let c=1;c<arguments.length;c++){const t=arguments[c];if(d(t)){const c=e.length||0,n=t.length||0;e.length=c+n;for(let i=0;i<n;i++)e[c+i]=t[i]}else e.push(t)}}function _(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{f.addEventListener("test",h,t),f.removeEventListener("test",h,t)}catch(c){}return e}();function N(e){return/^[\s\xa0]*$/.test(e)}var S=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function A(e,t){return e<t?-1:e>t?1:0}function E(){var e=f.navigator;return e&&(e=e.userAgent)?e:""}function T(e){return-1!=E().indexOf(e)}function I(e){return I[" "](e),e}function O(e){var t=Y;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}I[" "]=h;var P,R=T("Opera"),D=T("Trident")||T("MSIE"),F=T("Edge"),U=F||D,B=T("Gecko")&&!(-1!=E().toLowerCase().indexOf("webkit")&&!T("Edge"))&&!(T("Trident")||T("MSIE"))&&!T("Edge"),j=-1!=E().toLowerCase().indexOf("webkit")&&!T("Edge");function q(){var e=f.document;return e?e.documentMode:void 0}e:{var $="",W=function(){var e=E();return B?/rv:([^\);]+)(\)|;)/.exec(e):F?/Edge\/([\d\.]+)/.exec(e):D?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):j?/WebKit\/(\S+)/.exec(e):R?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(W&&($=W?W[1]:""),D){var G=q();if(null!=G&&G>parseFloat($)){P=String(G);break e}}P=$}var K,Y={};function Q(){return O((function(){let e=0;const t=S(String(P)).split("."),c=S("9").split("."),n=Math.max(t.length,c.length);for(let r=0;0==e&&r<n;r++){var i=t[r]||"",s=c[r]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=A(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||A(0==i[2].length,0==s[2].length)||A(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(f.document&&D){var J=q();K=J||(parseInt(P,10)||void 0)}else K=void 0;var X=K;function Z(e,t){if(_.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var c=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(B){e:{try{I(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==c?t=e.fromElement:"mouseout"==c&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.X.h.call(this)}}C(Z,_);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ce=0;function ne(e,t,c,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=c,this.capture=!!n,this.ha=i,this.key=++ce,this.ba=this.ea=!1}function ie(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function se(e,t,c){for(const n in e)t.call(c,e[n],n,e)}function re(e){const t={};for(const c in e)t[c]=e[c];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oe(e,t){let c,n;for(let i=1;i<arguments.length;i++){for(c in n=arguments[i],n)e[c]=n[c];for(let t=0;t<ae.length;t++)c=ae[t],Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}}function le(e){this.src=e,this.g={},this.h=0}function ue(e,t){var c=t.type;if(c in e.g){var n,i=e.g[c],s=M(i,t);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(ie(t),0==e.g[c].length&&(delete e.g[c],e.h--))}}function fe(e,t,c,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!c&&s.ha==n)return i}return-1}le.prototype.add=function(e,t,c,n,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var r=fe(e,t,n,i);return-1<r?(t=e[r],c||(t.ea=!1)):(t=new ne(t,this.src,s,!!n,i),t.ea=c,e.push(t)),t};var he="closure_lm_"+(1e6*Math.random()|0),de={};function pe(e,t,c,n,i){if(n&&n.once)return ve(e,t,c,n,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)pe(e,t[s],c,n,i);return null}return c=we(c),e&&e[te]?e.N(t,c,p(n)?!!n.capture:!!n,i):me(e,t,c,!1,n,i)}function me(e,t,c,n,i,s){if(!t)throw Error("Invalid event type");var r=p(i)?!!i.capture:!!i,a=Ce(e);if(a||(e[he]=a=new le(e)),c=a.add(t,c,n,r,s),c.proxy)return c;if(n=ge(),c.proxy=n,n.src=e,n.listener=c,e.addEventListener)k||(i=r),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(ye(t.toString()),n);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(n)}return c}function ge(){function e(c){return t.call(e.src,e.listener,c)}const t=Ve;return e}function ve(e,t,c,n,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ve(e,t[s],c,n,i);return null}return c=we(c),e&&e[te]?e.O(t,c,p(n)?!!n.capture:!!n,i):me(e,t,c,!0,n,i)}function ze(e,t,c,n,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ze(e,t[s],c,n,i);else n=p(n)?!!n.capture:!!n,c=we(c),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],c=fe(s,c,n,i),-1<c&&(ie(s[c]),Array.prototype.splice.call(s,c,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ce(e))&&(t=e.g[t.toString()],e=-1,t&&(e=fe(t,c,n,i)),(c=-1<e?t[e]:null)&&He(c))}function He(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])ue(t.i,e);else{var c=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(c,n,e.capture):t.detachEvent?t.detachEvent(ye(c),n):t.addListener&&t.removeListener&&t.removeListener(n),(c=Ce(t))?(ue(c,e),0==c.h&&(c.src=null,t[he]=null)):ie(e)}}}function ye(e){return e in de?de[e]:de[e]="on"+e}function Ve(e,t){if(e.ba)e=!0;else{t=new Z(t,this);var c=e.listener,n=e.ha||e.src;e.ea&&He(e),e=c.call(n,t)}return e}function Ce(e){return e=e[he],e instanceof le?e:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(e){return"function"===typeof e?e:(e[be]||(e[be]=function(t){return e.handleEvent(t)}),e[be])}function Me(){b.call(this),this.i=new le(this),this.P=this,this.I=null}function Le(e,t){var c,n=e.I;if(n)for(c=[];n;n=n.I)c.push(n);if(e=e.P,n=t.type||t,"string"===typeof t)t=new _(t,e);else if(t instanceof _)t.target=t.target||e;else{var i=t;t=new _(n,e),oe(t,i)}if(i=!0,c)for(var s=c.length-1;0<=s;s--){var r=t.g=c[s];i=xe(r,n,!0,t)&&i}if(r=t.g=e,i=xe(r,n,!0,t)&&i,i=xe(r,n,!1,t)&&i,c)for(s=0;s<c.length;s++)r=t.g=c[s],i=xe(r,n,!1,t)&&i}function xe(e,t,c,n){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var r=t[s];if(r&&!r.ba&&r.capture==c){var a=r.listener,o=r.ha||r.src;r.ea&&ue(e.i,r),i=!1!==a.call(o,n)&&i}}return i&&!n.defaultPrevented}C(Me,b),Me.prototype[te]=!0,Me.prototype.removeEventListener=function(e,t,c,n){ze(this,e,t,c,n)},Me.prototype.M=function(){if(Me.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var c=t.g[e],n=0;n<c.length;n++)ie(c[n]);delete t.g[e],t.h--}}this.I=null},Me.prototype.N=function(e,t,c,n){return this.i.add(String(e),t,!1,c,n)},Me.prototype.O=function(e,t,c,n){return this.i.add(String(e),t,!0,c,n)};var _e=f.JSON.stringify;function ke(){var e=Re;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ne{constructor(){this.h=this.g=null}add(e,t){const c=Ae.get();c.set(e,t),this.h?this.h.next=c:this.g=c,this.h=c}}var Se,Ae=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ee),(e=>e.reset()));class Ee{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Te(e){f.setTimeout((()=>{throw e}),0)}function Ie(e,t){Se||Oe(),Pe||(Se(),Pe=!0),Re.add(e,t)}function Oe(){var e=f.Promise.resolve(void 0);Se=function(){e.then(De)}}var Pe=!1,Re=new Ne;function De(){for(var e;e=ke();){try{e.h.call(e.g)}catch(c){Te(c)}var t=Ae;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Pe=!1}function Fe(e,t){Me.call(this),this.h=e||1,this.g=t||f,this.j=y(this.lb,this),this.l=Date.now()}function Ue(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Be(e,t,c){if("function"===typeof e)c&&(e=y(e,c));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=y(e.handleEvent,e)}return 2147483647<Number(t)?-1:f.setTimeout(e,t||0)}function je(e){e.g=Be((()=>{e.g=null,e.i&&(e.i=!1,je(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}C(Fe,Me),n=Fe.prototype,n.ca=!1,n.R=null,n.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Le(this,"tick"),this.ca&&(Ue(this),this.start()))}},n.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},n.M=function(){Fe.X.M.call(this),Ue(this),delete this.g};class qe extends b{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:je(this)}M(){super.M(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(e){b.call(this),this.h=e,this.g={}}C($e,b);var We=[];function Ge(e,t,c,n){Array.isArray(c)||(c&&(We[0]=c.toString()),c=We);for(var i=0;i<c.length;i++){var s=pe(t,c[i],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ke(e){se(e.g,(function(e,t){this.g.hasOwnProperty(t)&&He(e)}),e),e.g={}}function Ye(){this.g=!0}function Qe(e,t,c,n,i,s){e.info((function(){if(e.g)if(s)for(var r="",a=s.split("&"),o=0;o<a.length;o++){var l=a[o].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");r=2<=f.length&&"type"==f[1]?r+(u+"=")+l+"&":r+(u+"=redacted&")}}else r=null;else r=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+c+"\n"+r}))}function Je(e,t,c,n,i,s,r){e.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+c+"\n"+s+" "+r}))}function Xe(e,t,c,n){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,c)+(n?" "+n:"")}))}function Ze(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var c=JSON.parse(t);if(c)for(e=0;e<c.length;e++)if(Array.isArray(c[e])){var n=c[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var r=1;r<i.length;r++)i[r]=""}}}return _e(c)}catch(a){return t}}$e.prototype.M=function(){$e.X.M.call(this),Ke(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ye.prototype.Aa=function(){this.g=!1},Ye.prototype.info=function(){};var tt={},ct=null;function nt(){return ct=ct||new Me}function it(e){_.call(this,tt.Pa,e)}function st(e){const t=nt();Le(t,new it(t))}function rt(e,t){_.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=nt();Le(t,new rt(t,e))}function ot(e,t){_.call(this,tt.Qa,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return f.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",C(it,_),tt.STAT_EVENT="statevent",C(rt,_),tt.Qa="timingevent",C(ot,_);var ut={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ft={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ht(){}function dt(e){return e.h||(e.h=e.i())}function pt(){}ht.prototype.h=null;var mt,gt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vt(){_.call(this,"d")}function zt(){_.call(this,"c")}function Ht(){}function yt(e,t,c,n){this.l=e,this.j=t,this.m=c,this.U=n||1,this.S=new $e(this),this.O=Ct,e=U?125:void 0,this.T=new Fe(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Vt}function Vt(){this.i=null,this.g="",this.h=!1}C(vt,_),C(zt,_),C(Ht,ht),Ht.prototype.g=function(){return new XMLHttpRequest},Ht.prototype.i=function(){return{}},mt=new Ht;var Ct=45e3,bt={},wt={};function Mt(e,t,c){e.K=1,e.v=Gt(Bt(t)),e.s=c,e.P=!0,Lt(e,null)}function Lt(e,t){e.F=Date.now(),Nt(e),e.A=Bt(e.v);var c=e.A,n=e.U;Array.isArray(n)||(n=[String(n)]),rc(c.i,"t",n),e.C=0,c=e.l.H,e.h=new Vt,e.g=fn(e.l,c?t:null,!e.s),0<e.N&&(e.L=new qe(y(e.La,e,e.g),e.N)),Ge(e.S,e.g,"readystatechange",e.ib),t=e.H?re(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),st(),Qe(e.j,e.u,e.A,e.m,e.U,e.s)}function xt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function _t(e,t,c){let n,i=!0;for(;!e.I&&e.C<c.length;){if(n=kt(e,c),n==wt){4==t&&(e.o=4,at(14),i=!1),Xe(e.j,e.m,null,"[Incomplete Response]");break}if(n==bt){e.o=4,at(15),Xe(e.j,e.m,c,"[Invalid Chunk]"),i=!1;break}Xe(e.j,e.m,n,null),It(e,n)}xt(e)&&n!=wt&&n!=bt&&(e.h.g="",e.C=0),4!=t||0!=c.length||e.h.h||(e.o=1,at(16),i=!1),e.i=e.i&&i,i?0<c.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),cn(t),t.K=!0,at(11))):(Xe(e.j,e.m,c,"[Invalid Chunked Response]"),Tt(e),Et(e))}function kt(e,t){var c=e.C,n=t.indexOf("\n",c);return-1==n?wt:(c=Number(t.substring(c,n)),isNaN(c)?bt:(n+=1,n+c>t.length?wt:(t=t.substr(n,c),e.C=n+c,t)))}function Nt(e){e.V=Date.now()+e.O,St(e,e.O)}function St(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(y(e.gb,e),t)}function At(e){e.B&&(f.clearTimeout(e.B),e.B=null)}function Et(e){0==e.l.G||e.I||rn(e.l,e)}function Tt(e){At(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ue(e.T),Ke(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function It(e,t){try{var c=e.l;if(0!=c.G&&(c.g==e||pc(c.h,e)))if(!e.J&&pc(c.h,e)&&3==c.G){try{var n=c.Fa.g.parse(t)}catch(l){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!c.u){if(c.g){if(!(c.g.F+3e3<e.F))break e;sn(c),Gc(c)}tn(c),at(18)}}else c.Ba=i[1],0<c.Ba-c.T&&37500>i[2]&&c.L&&0==c.A&&!c.v&&(c.v=lt(y(c.cb,c),6e3));if(1>=dc(c.h)&&c.ja){try{c.ja()}catch(l){}c.ja=void 0}}else on(c,11)}else if((e.J||c.g==e)&&sn(c),!N(t))for(i=c.Fa.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(c.T=l[0],l=l[1],2==c.G)if("c"==l[0]){c.I=l[1],c.ka=l[2];const t=l[3];null!=t&&(c.ma=t,c.j.info("VER="+c.ma));const i=l[4];null!=i&&(c.Ca=i,c.j.info("SVER="+c.Ca));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(n=1.5*u,c.J=n,c.j.info("backChannelRequestTimeoutMs_="+n)),n=c;const f=e.g;if(f){const e=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(mc(s,s.h),s.h=null))}if(n.D){const e=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.za=e,Wt(n.F,n.D,e))}}c.G=3,c.l&&c.l.xa(),c.$&&(c.P=Date.now()-e.F,c.j.info("Handshake RTT: "+c.P+"ms")),n=c;var r=e;if(n.sa=un(n,n.H?n.ka:null,n.V),r.J){gc(n.h,r);var a=r,o=n.J;o&&a.setTimeout(o),a.B&&(At(a),Nt(a)),n.g=r}else en(n);0<c.i.length&&Yc(c)}else"stop"!=l[0]&&"close"!=l[0]||on(c,7);else 3==c.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?on(c,7):Wc(c):"noop"!=l[0]&&c.l&&c.l.wa(l),c.A=0)}st(4)}catch(l){}}function Ot(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(d(e)){for(var t=[],c=e.length,n=0;n<c;n++)t.push(e[n]);return t}for(n in t=[],c=0,e)t[c++]=e[n];return t}function Pt(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(d(e)||"string"===typeof e){var t=[];e=e.length;for(var c=0;c<e;c++)t.push(c);return t}t=[],c=0;for(const n in e)t[c++]=n;return t}}}function Rt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(d(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var c=Pt(e),n=Ot(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],c&&c[s],e)}n=yt.prototype,n.setTimeout=function(e){this.O=e},n.ib=function(e){e=e.target;const t=this.L;t&&3==Fc(e)?t.l():this.La(e)},n.La=function(e){try{if(e==this.g)e:{const u=Fc(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(3!=u||U||this.g&&(this.h.h||this.g.fa()||Uc(this.g)))){this.I||4!=u||7==t||st(8==t||0>=h?3:2),At(this);var c=this.g.aa();this.Y=c;t:if(xt(this)){var n=Uc(this.g);e="";var i=n.length,s=4==Fc(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Tt(this),Et(this);var r="";break t}this.h.i=new f.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==i-1});n.splice(0,i),this.h.g+=e,this.C=0,r=this.h.g}else r=this.g.fa();if(this.i=200==c,Je(this.j,this.u,this.A,this.m,this.U,u,c),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,o=this.g;if((a=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var l=a;break t}}l=null}if(!(c=l)){this.i=!1,this.o=3,at(12),Tt(this),Et(this);break e}Xe(this.j,this.m,c,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,It(this,c)}this.P?(_t(this,u,r),U&&this.i&&3==u&&(Ge(this.S,this.T,"tick",this.hb),this.T.start())):(Xe(this.j,this.m,r,null),It(this,r)),4==u&&Tt(this),this.i&&!this.I&&(4==u?rn(this.l,this):(this.i=!1,Nt(this)))}else 400==c&&0<r.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Tt(this),Et(this)}}}catch(u){}},n.hb=function(){if(this.g){var e=Fc(this.g),t=this.g.fa();this.C<t.length&&(At(this),_t(this,e,t),this.i&&4!=e&&Nt(this))}},n.cancel=function(){this.I=!0,Tt(this)},n.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ze(this.j,this.A),2!=this.K&&(st(),at(17)),Tt(this),this.o=2,Et(this)):St(this,this.V-e)};var Dt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ft(e,t){if(e){e=e.split("&");for(var c=0;c<e.length;c++){var n=e[c].indexOf("="),i=null;if(0<=n){var s=e[c].substring(0,n);i=e[c].substring(n+1)}else s=e[c];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ut(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ut){this.h=void 0!==t?t:e.h,jt(this,e.j),this.s=e.s,this.g=e.g,qt(this,e.m),this.l=e.l,t=e.i;var c=new cc;c.i=t.i,t.g&&(c.g=new Map(t.g),c.h=t.h),$t(this,c),this.o=e.o}else e&&(c=String(e).match(Dt))?(this.h=!!t,jt(this,c[1]||"",!0),this.s=Kt(c[2]||""),this.g=Kt(c[3]||"",!0),qt(this,c[4]),this.l=Kt(c[5]||"",!0),$t(this,c[6]||"",!0),this.o=Kt(c[7]||"")):(this.h=!!t,this.i=new cc(null,this.h))}function Bt(e){return new Ut(e)}function jt(e,t,c){e.j=c?Kt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function qt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function $t(e,t,c){t instanceof cc?(e.i=t,oc(e.i,e.h)):(c||(t=Yt(t,ec)),e.i=new cc(t,e.h))}function Wt(e,t,c){e.i.set(t,c)}function Gt(e){return Wt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Yt(e,t,c){return"string"===typeof e?(e=encodeURI(e).replace(t,Qt),c&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Qt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Yt(t,Jt,!0),":");var c=this.g;return(c||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Yt(t,Jt,!0),"@"),e.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.m,null!=c&&e.push(":",String(c))),(c=this.l)&&(this.g&&"/"!=c.charAt(0)&&e.push("/"),e.push(Yt(c,"/"==c.charAt(0)?Zt:Xt,!0))),(c=this.i.toString())&&e.push("?",c),(c=this.o)&&e.push("#",Yt(c,tc)),e.join("")};var Jt=/[#\/\?@]/g,Xt=/[#\?:]/g,Zt=/[#\?]/g,ec=/[#\?@]/g,tc=/#/g;function cc(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function nc(e){e.g||(e.g=new Map,e.h=0,e.i&&Ft(e.i,(function(t,c){e.add(decodeURIComponent(t.replace(/\+/g," ")),c)})))}function ic(e,t){nc(e),t=ac(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function sc(e,t){return nc(e),t=ac(e,t),e.g.has(t)}function rc(e,t,c){ic(e,t),0<c.length&&(e.i=null,e.g.set(ac(e,t),L(c)),e.h+=c.length)}function ac(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function oc(e,t){t&&!e.j&&(nc(e),e.i=null,e.g.forEach((function(e,t){var c=t.toLowerCase();t!=c&&(ic(this,t),rc(this,c,e))}),e)),e.j=t}n=cc.prototype,n.add=function(e,t){nc(this),this.i=null,e=ac(this,e);var c=this.g.get(e);return c||this.g.set(e,c=[]),c.push(t),this.h+=1,this},n.forEach=function(e,t){nc(this),this.g.forEach((function(c,n){c.forEach((function(c){e.call(t,c,n,this)}),this)}),this)},n.oa=function(){nc(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),c=[];for(let n=0;n<t.length;n++){const i=e[n];for(let e=0;e<i.length;e++)c.push(t[n])}return c},n.W=function(e){nc(this);let t=[];if("string"===typeof e)sc(this,e)&&(t=t.concat(this.g.get(ac(this,e))));else{e=Array.from(this.g.values());for(let c=0;c<e.length;c++)t=t.concat(e[c])}return t},n.set=function(e,t){return nc(this),this.i=null,e=ac(this,e),sc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},n.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var c=0;c<t.length;c++){var n=t[c];const s=encodeURIComponent(String(n)),r=this.W(n);for(n=0;n<r.length;n++){var i=s;""!==r[n]&&(i+="="+encodeURIComponent(String(r[n]))),e.push(i)}}return this.i=e.join("&")};var lc=class{constructor(e,t){this.h=e,this.g=t}};function uc(e){this.l=e||fc,f.PerformanceNavigationTiming?(e=f.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(f.g&&f.g.Ga&&f.g.Ga()&&f.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fc=10;function hc(e){return!!e.h||!!e.g&&e.g.size>=e.j}function dc(e){return e.h?1:e.g?e.g.size:0}function pc(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function mc(e,t){e.g?e.g.add(t):e.h=t}function gc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function vc(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const c of e.g.values())t=t.concat(c.D);return t}return L(e.i)}function zc(){}function Hc(){this.g=new zc}function yc(e,t,c){const n=c||"";try{Rt(e,(function(e,c){let i=e;p(e)&&(i=_e(e)),t.push(n+c+"="+encodeURIComponent(i))}))}catch(i){throw t.push(n+"type="+encodeURIComponent("_badmap")),i}}function Vc(e,t){const c=new Ye;if(f.Image){const n=new Image;n.onload=V(Cc,c,n,"TestLoadImage: loaded",!0,t),n.onerror=V(Cc,c,n,"TestLoadImage: error",!1,t),n.onabort=V(Cc,c,n,"TestLoadImage: abort",!1,t),n.ontimeout=V(Cc,c,n,"TestLoadImage: timeout",!1,t),f.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=e}else t(!1)}function Cc(e,t,c,n,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(n)}catch(s){}}function bc(e){this.l=e.ac||null,this.j=e.jb||!1}function wc(e,t){Me.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Mc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}uc.prototype.cancel=function(){if(this.i=vc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},zc.prototype.stringify=function(e){return f.JSON.stringify(e,void 0)},zc.prototype.parse=function(e){return f.JSON.parse(e,void 0)},C(bc,ht),bc.prototype.g=function(){return new wc(this.l,this.j)},bc.prototype.i=function(e){return function(){return e}}({}),C(wc,Me);var Mc=0;function Lc(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function xc(e){e.readyState=4,e.l=null,e.j=null,e.A=null,_c(e)}function _c(e){e.onreadystatechange&&e.onreadystatechange.call(e)}n=wc.prototype,n.open=function(e,t){if(this.readyState!=Mc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,_c(this)},n.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||f).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xc(this)),this.readyState=Mc},n.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,_c(this)),this.g&&(this.readyState=3,_c(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof f.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Lc(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},n.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xc(this):_c(this),3==this.readyState&&Lc(this)}},n.Va=function(e){this.g&&(this.response=this.responseText=e,xc(this))},n.Ua=function(e){this.g&&(this.response=e,xc(this))},n.ga=function(){this.g&&xc(this)},n.setRequestHeader=function(e,t){this.v.append(e,t)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var c=t.next();!c.done;)c=c.value,e.push(c[0]+": "+c[1]),c=t.next();return e.join("\r\n")},Object.defineProperty(wc.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var kc=f.JSON.parse;function Nc(e){Me.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Sc,this.K=this.L=!1}C(Nc,Me);var Sc="",Ac=/^https?$/i,Ec=["POST","PUT"];function Tc(e){return D&&Q()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Ic(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Oc(e),Rc(e)}function Oc(e){e.D||(e.D=!0,Le(e,"complete"),Le(e,"error"))}function Pc(e){if(e.h&&"undefined"!=typeof u&&(!e.C[1]||4!=Fc(e)||2!=e.aa()))if(e.v&&4==Fc(e))Be(e.Ha,0,e);else if(Le(e,"readystatechange"),4==Fc(e)){e.h=!1;try{const o=e.aa();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var c;if(!(c=t)){var n;if(n=0===o){var i=String(e.H).match(Dt)[1]||null;if(!i&&f.self&&f.self.location){var s=f.self.location.protocol;i=s.substr(0,s.length-1)}n=!Ac.test(i?i.toLowerCase():"")}c=n}if(c)Le(e,"complete"),Le(e,"success");else{e.m=6;try{var r=2<Fc(e)?e.g.statusText:""}catch(a){r=""}e.j=r+" ["+e.aa()+"]",Oc(e)}}finally{Rc(e)}}}function Rc(e,t){if(e.g){Dc(e);const n=e.g,i=e.C[0]?h:null;e.g=null,e.C=null,t||Le(e,"ready");try{n.onreadystatechange=i}catch(c){}}}function Dc(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(f.clearTimeout(e.A),e.A=null)}function Fc(e){return e.g?e.g.readyState:0}function Uc(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Sc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(_n){return null}}function Bc(e){let t="";return se(e,(function(e,c){t+=c,t+=":",t+=e,t+="\r\n"})),t}function jc(e,t,c){e:{for(n in c){var n=!1;break e}n=!0}n||(c=Bc(c),"string"===typeof e?null!=c&&encodeURIComponent(String(c)):Wt(e,t,c))}function qc(e,t,c){return c&&c.internalChannelParams&&c.internalChannelParams[e]||t}function $c(e){this.Ca=0,this.i=[],this.j=new Ye,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=qc("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=qc("baseRetryDelayMs",5e3,e),this.bb=qc("retryDelaySeedMs",1e4,e),this.$a=qc("forwardChannelMaxRetries",2,e),this.ta=qc("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new uc(e&&e.concurrentRequestLimit),this.Fa=new Hc,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Wc(e){if(Kc(e),3==e.G){var t=e.U++,c=Bt(e.F);Wt(c,"SID",e.I),Wt(c,"RID",t),Wt(c,"TYPE","terminate"),Xc(e,c),t=new yt(e,e.j,t,void 0),t.K=2,t.v=Gt(Bt(c)),c=!1,f.navigator&&f.navigator.sendBeacon&&(c=f.navigator.sendBeacon(t.v.toString(),"")),!c&&f.Image&&((new Image).src=t.v,c=!0),c||(t.g=fn(t.l,null),t.g.da(t.v)),t.F=Date.now(),Nt(t)}ln(e)}function Gc(e){e.g&&(cn(e),e.g.cancel(),e.g=null)}function Kc(e){Gc(e),e.u&&(f.clearTimeout(e.u),e.u=null),sn(e),e.h.cancel(),e.m&&("number"===typeof e.m&&f.clearTimeout(e.m),e.m=null)}function Yc(e){hc(e.h)||e.m||(e.m=!0,Ie(e.Ja,e),e.C=0)}function Qc(e,t){return!(dc(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=lt(y(e.Ja,e,t),an(e,e.C)),e.C++,!0))}function Jc(e,t){var c;c=t?t.m:e.U++;const n=Bt(e.F);Wt(n,"SID",e.I),Wt(n,"RID",c),Wt(n,"AID",e.T),Xc(e,n),e.o&&e.s&&jc(n,e.o,e.s),c=new yt(e,e.j,c,e.C+1),null===e.o&&(c.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Zc(e,c,1e3),c.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),mc(e.h,c),Mt(c,n,t)}function Xc(e,t){e.ia&&se(e.ia,(function(e,c){Wt(t,c,e)})),e.l&&Rt({},(function(e,c){Wt(t,c,e)}))}function Zc(e,t,c){c=Math.min(e.i.length,c);var n=e.l?y(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+c];-1==t?0<c?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let r=0;r<c;r++){let c=i[r].h;const a=i[r].g;if(c-=t,0>c)t=Math.max(0,i[r].h-100),s=!1;else try{yc(a,e,"req"+c+"_")}catch(Rn){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.i.splice(0,c),t.D=e,n}function en(e){e.g||e.u||(e.Z=1,Ie(e.Ia,e),e.A=0)}function tn(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=lt(y(e.Ia,e),an(e,e.A)),e.A++,!0)}function cn(e){null!=e.B&&(f.clearTimeout(e.B),e.B=null)}function nn(e){e.g=new yt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Bt(e.sa);Wt(t,"RID","rpc"),Wt(t,"SID",e.I),Wt(t,"CI",e.L?"0":"1"),Wt(t,"AID",e.T),Wt(t,"TYPE","xmlhttp"),Xc(e,t),e.o&&e.s&&jc(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var c=e.g;e=e.ka,c.K=1,c.v=Gt(Bt(t)),c.s=null,c.P=!0,Lt(c,e)}function sn(e){null!=e.v&&(f.clearTimeout(e.v),e.v=null)}function rn(e,t){var c=null;if(e.g==t){sn(e),cn(e),e.g=null;var n=2}else{if(!pc(e.h,t))return;c=t.D,gc(e.h,t),n=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==n){c=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;n=nt(),Le(n,new ot(n,c)),Yc(e)}else en(e);else if(i=t.o,3==i||0==i&&0<e.pa||!(1==n&&Qc(e,t)||2==n&&tn(e)))switch(c&&0<c.length&&(t=e.h,t.i=t.i.concat(c)),i){case 1:on(e,5);break;case 4:on(e,10);break;case 3:on(e,6);break;default:on(e,2)}}function an(e,t){let c=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(c*=2),c*t}function on(e,t){if(e.j.info("Error code "+t),2==t){var c=null;e.l&&(c=null);var n=y(e.kb,e);c||(c=new Ut("//www.google.com/images/cleardot.gif"),f.location&&"http"==f.location.protocol||jt(c,"https"),Gt(c)),Vc(c.toString(),n)}else at(2);e.G=0,e.l&&e.l.va(t),ln(e),Kc(e)}function ln(e){if(e.G=0,e.la=[],e.l){const t=vc(e.h);0==t.length&&0==e.i.length||(x(e.la,t),x(e.la,e.i),e.h.i.length=0,L(e.i),e.i.length=0),e.l.ua()}}function un(e,t,c){var n=c instanceof Ut?Bt(c):new Ut(c,void 0);if(""!=n.g)t&&(n.g=t+"."+n.g),qt(n,n.m);else{var i=f.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Ut(null,void 0);n&&jt(s,n),t&&(s.g=t),i&&qt(s,i),c&&(s.l=c),n=s}return c=e.D,t=e.za,c&&t&&Wt(n,c,t),Wt(n,"VER",e.ma),Xc(e,n),n}function fn(e,t,c){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=c&&e.Da&&!e.ra?new Nc(new bc({jb:!0})):new Nc(e.ra),t.Ka(e.H),t}function hn(){}function dn(){if(D&&!(10<=Number(X)))throw Error("Environmental error: no available transport.")}function pn(e,t){Me.call(this),this.g=new $c(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!N(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!N(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new vn(this)}function mn(e){vt.call(this);var t=e.__sm__;if(t){e:{for(const c in t){e=c;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gn(){zt.call(this),this.status=1}function vn(e){this.g=e}n=Nc.prototype,n.Ka=function(e){this.L=e},n.da=function(e,t,c,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?dt(this.u):dt(mt),this.g.onreadystatechange=y(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Ic(this,s)}if(e=c||"",c=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var i in n)c.set(i,n[i]);else{if("function"!==typeof n.keys||"function"!==typeof n.get)throw Error("Unknown input type for opt_headers: "+String(n));for(const e of n.keys())c.set(e,n.get(e))}n=Array.from(c.keys()).find((e=>"content-type"==e.toLowerCase())),i=f.FormData&&e instanceof f.FormData,!(0<=M(Ec,t))||n||i||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,a]of c)this.g.setRequestHeader(r,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Dc(this),0<this.B&&((this.K=Tc(this.g))?(this.g.timeout=this.B,this.g.ontimeout=y(this.qa,this)):this.A=Be(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Ic(this,s)}},n.qa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))},n.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Le(this,"complete"),Le(this,"abort"),Rc(this))},n.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rc(this,!0)),Nc.X.M.call(this)},n.Ha=function(){this.s||(this.F||this.v||this.l?Pc(this):this.fb())},n.fb=function(){Pc(this)},n.aa=function(){try{return 2<Fc(this)?this.g.status:-1}catch(e){return-1}},n.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),kc(t)}},n.Ea=function(){return this.m},n.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},n=$c.prototype,n.ma=8,n.G=1,n.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new yt(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=re(s),oe(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,c=0;c<this.i.length;c++){var n=this.i[c];if(n="__data__"in n.g&&(n=n.g.__data__,"string"===typeof n)?n.length:void 0,void 0===n)break;if(t+=n,4096<t){t=c;break e}if(4096===t||c===this.i.length-1){t=c+1;break e}}t=1e3}else t=1e3;t=Zc(this,i,t),c=Bt(this.F),Wt(c,"RID",e),Wt(c,"CVER",22),this.D&&Wt(c,"X-HTTP-Session-Id",this.D),Xc(this,c),s&&(this.N?t="headers="+encodeURIComponent(String(Bc(s)))+"&"+t:this.o&&jc(c,this.o,s)),mc(this.h,i),this.Ya&&Wt(c,"TYPE","init"),this.O?(Wt(c,"$req",t),Wt(c,"SID","null"),i.Z=!0,Mt(i,c,null)):Mt(i,c,t),this.G=2}}else 3==this.G&&(e?Jc(this,e):0==this.i.length||hc(this.h)||Jc(this))},n.Ia=function(){if(this.u=null,nn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=lt(y(this.eb,this),e)}},n.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Gc(this),nn(this))},n.cb=function(){null!=this.v&&(this.v=null,Gc(this),tn(this),at(19))},n.kb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},n=hn.prototype,n.xa=function(){},n.wa=function(){},n.va=function(){},n.ua=function(){},n.Ra=function(){},dn.prototype.g=function(e,t){return new pn(e,t)},C(pn,Me),pn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,c=this.h||void 0;at(0),e.V=t,e.ia=c||{},e.L=e.Y,e.F=un(e,null,e.V),Yc(e)},pn.prototype.close=function(){Wc(this.g)},pn.prototype.u=function(e){var t=this.g;if("string"===typeof e){var c={};c.__data__=e,e=c}else this.v&&(c={},c.__data__=_e(e),e=c);t.i.push(new lc(t.ab++,e)),3==t.G&&Yc(t)},pn.prototype.M=function(){this.g.l=null,delete this.j,Wc(this.g),delete this.g,pn.X.M.call(this)},C(mn,vt),C(gn,zt),C(vn,hn),vn.prototype.xa=function(){Le(this.g,"a")},vn.prototype.wa=function(e){Le(this.g,new mn(e))},vn.prototype.va=function(e){Le(this.g,new gn)},vn.prototype.ua=function(){Le(this.g,"b")},dn.prototype.createWebChannel=dn.prototype.g,pn.prototype.send=pn.prototype.u,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,ut.NO_ERROR=0,ut.TIMEOUT=8,ut.HTTP_ERROR=6,ft.COMPLETE="complete",pt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",Me.prototype.listen=Me.prototype.N,Nc.prototype.listenOnce=Nc.prototype.O,Nc.prototype.getLastError=Nc.prototype.Oa,Nc.prototype.getLastErrorCode=Nc.prototype.Ea,Nc.prototype.getStatus=Nc.prototype.aa,Nc.prototype.getResponseJson=Nc.prototype.Sa,Nc.prototype.getResponseText=Nc.prototype.fa,Nc.prototype.send=Nc.prototype.da,Nc.prototype.setWithCredentials=Nc.prototype.Ka;var zn=l.createWebChannelTransport=function(){return new dn},Hn=l.getStatEventTarget=function(){return nt()},yn=l.ErrorCode=ut,Vn=l.EventType=ft,Cn=l.Event=tt,bn=l.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},wn=l.FetchXmlHttpFactory=bc,Mn=l.WebChannel=pt,Ln=l.XhrIo=Nc;const xn="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_n.UNAUTHENTICATED=new _n(null),_n.GOOGLE_CREDENTIALS=new _n("google-credentials-uid"),_n.FIRST_PARTY=new _n("first-party-uid"),_n.MOCK_USER=new _n("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let kn="9.20.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new r.Yd("@firebase/firestore");function Sn(){return Nn.logLevel}function An(e,...t){if(Nn.logLevel<=r["in"].DEBUG){const c=t.map(In);Nn.debug(`Firestore (${kn}): ${e}`,...c)}}function En(e,...t){if(Nn.logLevel<=r["in"].ERROR){const c=t.map(In);Nn.error(`Firestore (${kn}): ${e}`,...c)}}function Tn(e,...t){if(Nn.logLevel<=r["in"].WARN){const c=t.map(In);Nn.warn(`Firestore (${kn}): ${e}`,...c)}}function In(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e="Unexpected state"){const t=`FIRESTORE (${kn}) INTERNAL ASSERTION FAILED: `+e;throw En(t),new Error(t)}function Pn(e,t){e||On()}function Rn(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Fn extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jn{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(_n.UNAUTHENTICATED)))}shutdown(){}}class qn{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class $n{constructor(e){this.t=e,this.currentUser=_n.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let c=this.i;const n=e=>this.i!==c?(c=this.i,t(e)):Promise.resolve();let i=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Un,e.enqueueRetryable((()=>n(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await n(this.currentUser)}))},r=e=>{An("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>r(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?r(e):(An("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Un)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(An("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Pn("string"==typeof t.accessToken),new Bn(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pn(null===e||"string"==typeof e),new _n(e)}}class Wn{constructor(e,t,c){this.h=e,this.l=t,this.m=c,this.type="FirstParty",this.user=_n.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Gn{constructor(e,t,c){this.h=e,this.l=t,this.m=c}getToken(){return Promise.resolve(new Wn(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(_n.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Kn{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yn{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const c=e=>{null!=e.error&&An("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const c=e.token!==this.T;return this.T=e.token,An("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>c(t)))};const n=e=>{An("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?n(e):An("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Pn("string"==typeof e.token),this.T=e.token,new Kn(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qn(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),c=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(c);else for(let n=0;n<e;n++)c[n]=Math.floor(256*Math.random());return c}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let c="";for(;c.length<20;){const n=Qn(40);for(let i=0;i<n.length;++i)c.length<20&&n[i]<t&&(c+=e.charAt(n[i]%e.length))}return c}}function Xn(e,t){return e<t?-1:e>t?1:0}function Zn(e,t,c){return e.length===t.length&&e.every(((e,n)=>c(e,t[n])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Fn(Dn.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Fn(Dn.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Fn(Dn.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Fn(Dn.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ei.fromMillis(Date.now())}static fromDate(e){return ei.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),c=Math.floor(1e6*(e-1e3*t));return new ei(t,c)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Xn(this.nanoseconds,e.nanoseconds):Xn(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ti(e)}static min(){return new ti(new ei(0,0))}static max(){return new ti(new ei(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t,c){void 0===t?t=0:t>e.length&&On(),void 0===c?c=e.length-t:c>e.length-t&&On(),this.segments=e,this.offset=t,this.len=c}get length(){return this.len}isEqual(e){return 0===ci.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ci?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,c=this.limit();t<c;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const c=Math.min(e.length,t.length);for(let n=0;n<c;n++){const c=e.get(n),i=t.get(n);if(c<i)return-1;if(c>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ni extends ci{construct(e,t,c){return new ni(e,t,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const c of e){if(c.indexOf("//")>=0)throw new Fn(Dn.INVALID_ARGUMENT,`Invalid segment (${c}). Paths must not contain // in them.`);t.push(...c.split("/").filter((e=>e.length>0)))}return new ni(t)}static emptyPath(){return new ni([])}}const ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class si extends ci{construct(e,t,c){return new si(e,t,c)}static isValidIdentifier(e){return ii.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),si.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new si(["__name__"])}static fromServerFormat(e){const t=[];let c="",n=0;const i=()=>{if(0===c.length)throw new Fn(Dn.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(c),c=""};let s=!1;for(;n<e.length;){const t=e[n];if("\\"===t){if(n+1===e.length)throw new Fn(Dn.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Fn(Dn.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);c+=t,n+=2}else"`"===t?(s=!s,n++):"."!==t||s?(c+=t,n++):(i(),n++)}if(i(),s)throw new Fn(Dn.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new si(t)}static emptyPath(){return new si([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.path=e}static fromPath(e){return new ri(ni.fromString(e))}static fromName(e){return new ri(ni.fromString(e).popFirst(5))}static empty(){return new ri(ni.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ni.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ni.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ri(new ni(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,c,n){this.indexId=e,this.collectionGroup=t,this.fields=c,this.indexState=n}}ai.UNKNOWN_ID=-1;function oi(e,t){const c=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,i=ti.fromTimestamp(1e9===n?new ei(c+1,0):new ei(c,n));return new ui(i,ri.empty(),t)}function li(e){return new ui(e.readTime,e.key,-1)}class ui{constructor(e,t,c){this.readTime=e,this.documentKey=t,this.largestBatchId=c}static min(){return new ui(ti.min(),ri.empty(),-1)}static max(){return new ui(ti.max(),ri.empty(),-1)}}function fi(e,t){let c=e.readTime.compareTo(t.readTime);return 0!==c?c:(c=ri.comparator(e.documentKey,t.documentKey),0!==c?c:Xn(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class di{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(e){if(e.code!==Dn.FAILED_PRECONDITION||e.message!==hi)throw e;An("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&On(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new mi(((c,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(c,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(c,n)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof mi?t:mi.resolve(t)}catch(e){return mi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):mi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):mi.reject(t)}static resolve(e){return new mi(((t,c)=>{t(e)}))}static reject(e){return new mi(((t,c)=>{c(e)}))}static waitFor(e){return new mi(((t,c)=>{let n=0,i=0,s=!1;e.forEach((e=>{++n,e.next((()=>{++i,s&&i===n&&t()}),(e=>c(e)))})),s=!0,i===n&&t()}))}static or(e){let t=mi.resolve(!1);for(const c of e)t=t.next((e=>e?mi.resolve(e):c()));return t}static forEach(e,t){const c=[];return e.forEach(((e,n)=>{c.push(t.call(this,e,n))})),this.waitFor(c)}static mapArray(e,t){return new mi(((c,n)=>{const i=e.length,s=new Array(i);let r=0;for(let a=0;a<i;a++){const o=a;t(e[o]).next((e=>{s[o]=e,++r,r===i&&c(s)}),(e=>n(e)))}}))}static doWhile(e,t){return new mi(((c,n)=>{const i=()=>{!0===e()?t().next((()=>{i()}),n):c()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function zi(e){return null==e}function Hi(e){return 0===e&&1/e==-1/0}function yi(e){return"number"==typeof e&&Number.isInteger(e)&&!Hi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi.ct=-1;const Vi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ci=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],bi=Ci;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wi(e){let t=0;for(const c in e)Object.prototype.hasOwnProperty.call(e,c)&&t++;return t}function Mi(e,t){for(const c in e)Object.prototype.hasOwnProperty.call(e,c)&&t(c,e[c])}function Li(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t){this.comparator=e,this.root=t||ki.EMPTY}insert(e,t){return new xi(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ki.BLACK,null,null))}remove(e){return new xi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ki.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const c=this.comparator(e,t.key);if(0===c)return t.value;c<0?t=t.left:c>0&&(t=t.right)}return null}indexOf(e){let t=0,c=this.root;for(;!c.isEmpty();){const n=this.comparator(e,c.key);if(0===n)return t+c.left.size;n<0?c=c.left:(t+=c.left.size+1,c=c.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,c)=>(e(t,c),!1)))}toString(){const e=[];return this.inorderTraversal(((t,c)=>(e.push(`${t}:${c}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _i(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _i(this.root,e,this.comparator,!1)}getReverseIterator(){return new _i(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _i(this.root,e,this.comparator,!0)}}class _i{constructor(e,t,c,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?c(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ki{constructor(e,t,c,n,i){this.key=e,this.value=t,this.color=null!=c?c:ki.RED,this.left=null!=n?n:ki.EMPTY,this.right=null!=i?i:ki.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,c,n,i){return new ki(null!=e?e:this.key,null!=t?t:this.value,null!=c?c:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,c){let n=this;const i=c(e,n.key);return n=i<0?n.copy(null,null,null,n.left.insert(e,t,c),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,c)),n.fixUp()}removeMin(){if(this.left.isEmpty())return ki.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let c,n=this;if(t(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return ki.EMPTY;c=n.right.min(),n=n.copy(c.key,c.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ki.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ki.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw On();if(this.right.isRed())throw On();const e=this.left.check();if(e!==this.right.check())throw On();return e+(this.isRed()?0:1)}}ki.EMPTY=null,ki.RED=!0,ki.BLACK=!1,ki.EMPTY=new class{constructor(){this.size=0}get key(){throw On()}get value(){throw On()}get color(){throw On()}get left(){throw On()}get right(){throw On()}copy(e,t,c,n,i){return this}insert(e,t,c){return new ki(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ni{constructor(e){this.comparator=e,this.data=new xi(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,c)=>(e(t),!1)))}forEachInRange(e,t){const c=this.data.getIteratorFrom(e[0]);for(;c.hasNext();){const n=c.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let c;for(c=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();c.hasNext();)if(!e(c.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Si(this.data.getIterator())}getIteratorFrom(e){return new Si(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ni))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),c=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,n=c.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ni(this.comparator);return t.data=e,t}}class Si{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ai{constructor(e){this.fields=e,e.sort(si.comparator)}static empty(){return new Ai([])}unionWith(e){let t=new Ni(si.comparator);for(const c of this.fields)t=t.add(c);for(const c of e)t=t.add(c);return new Ai(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zn(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ti{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ei("Invalid base64 string: "+e):e}}(e);return new Ti(t)}static fromUint8Array(e){const t=function(e){let t="";for(let c=0;c<e.length;++c)t+=String.fromCharCode(e[c]);return t}(e);return new Ti(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let c=0;c<e.length;c++)t[c]=e.charCodeAt(c);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Xn(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ti.EMPTY_BYTE_STRING=new Ti("");const Ii=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(e){if(Pn(!!e),"string"==typeof e){let t=0;const c=Ii.exec(e);if(Pn(!!c),c[1]){let e=c[1];e=(e+"000000000").substr(0,9),t=Number(e)}const n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Pi(e.seconds),nanos:Pi(e.nanos)}}function Pi(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ri(e){return"string"==typeof e?Ti.fromBase64String(e):Ti.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(e){var t,c;return"server_timestamp"===(null===(c=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===c?void 0:c.stringValue)}function Fi(e){const t=e.mapValue.fields.__previous_value__;return Di(t)?Fi(t):t}function Ui(e){const t=Oi(e.mapValue.fields.__local_write_time__.timestampValue);return new ei(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,c,n,i,s,r,a){this.databaseId=e,this.appId=t,this.persistenceKey=c,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=r,this.useFetchStreams=a}}class ji{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ji("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ji&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $i(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Di(e)?4:is(e)?9007199254740991:10:On()}function Wi(e,t){if(e===t)return!0;const c=$i(e);if(c!==$i(t))return!1;switch(c){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ui(e).isEqual(Ui(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const c=Oi(e.timestampValue),n=Oi(t.timestampValue);return c.seconds===n.seconds&&c.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ri(e.bytesValue).isEqual(Ri(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Pi(e.geoPointValue.latitude)===Pi(t.geoPointValue.latitude)&&Pi(e.geoPointValue.longitude)===Pi(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Pi(e.integerValue)===Pi(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const c=Pi(e.doubleValue),n=Pi(t.doubleValue);return c===n?Hi(c)===Hi(n):isNaN(c)&&isNaN(n)}return!1}(e,t);case 9:return Zn(e.arrayValue.values||[],t.arrayValue.values||[],Wi);case 10:return function(e,t){const c=e.mapValue.fields||{},n=t.mapValue.fields||{};if(wi(c)!==wi(n))return!1;for(const i in c)if(c.hasOwnProperty(i)&&(void 0===n[i]||!Wi(c[i],n[i])))return!1;return!0}(e,t);default:return On()}}function Gi(e,t){return void 0!==(e.values||[]).find((e=>Wi(e,t)))}function Ki(e,t){if(e===t)return 0;const c=$i(e),n=$i(t);if(c!==n)return Xn(c,n);switch(c){case 0:case 9007199254740991:return 0;case 1:return Xn(e.booleanValue,t.booleanValue);case 2:return function(e,t){const c=Pi(e.integerValue||e.doubleValue),n=Pi(t.integerValue||t.doubleValue);return c<n?-1:c>n?1:c===n?0:isNaN(c)?isNaN(n)?0:-1:1}(e,t);case 3:return Yi(e.timestampValue,t.timestampValue);case 4:return Yi(Ui(e),Ui(t));case 5:return Xn(e.stringValue,t.stringValue);case 6:return function(e,t){const c=Ri(e),n=Ri(t);return c.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const c=e.split("/"),n=t.split("/");for(let i=0;i<c.length&&i<n.length;i++){const e=Xn(c[i],n[i]);if(0!==e)return e}return Xn(c.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const c=Xn(Pi(e.latitude),Pi(t.latitude));return 0!==c?c:Xn(Pi(e.longitude),Pi(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const c=e.values||[],n=t.values||[];for(let i=0;i<c.length&&i<n.length;++i){const e=Ki(c[i],n[i]);if(e)return e}return Xn(c.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===qi.mapValue&&t===qi.mapValue)return 0;if(e===qi.mapValue)return 1;if(t===qi.mapValue)return-1;const c=e.fields||{},n=Object.keys(c),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let r=0;r<n.length&&r<s.length;++r){const e=Xn(n[r],s[r]);if(0!==e)return e;const t=Ki(c[n[r]],i[s[r]]);if(0!==t)return t}return Xn(n.length,s.length)}(e.mapValue,t.mapValue);default:throw On()}}function Yi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Xn(e,t);const c=Oi(e),n=Oi(t),i=Xn(c.seconds,n.seconds);return 0!==i?i:Xn(c.nanos,n.nanos)}function Qi(e){return Ji(e)}function Ji(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Oi(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ri(e.bytesValue).toBase64():"referenceValue"in e?(c=e.referenceValue,ri.fromName(c).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",c=!0;for(const n of e.values||[])c?c=!1:t+=",",t+=Ji(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let c="{",n=!0;for(const i of t)n?n=!1:c+=",",c+=`${i}:${Ji(e.fields[i])}`;return c+"}"}(e.mapValue):On();var t,c}function Xi(e){return!!e&&"integerValue"in e}function Zi(e){return!!e&&"arrayValue"in e}function es(e){return!!e&&"nullValue"in e}function ts(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function cs(e){return!!e&&"mapValue"in e}function ns(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Mi(e.mapValue.fields,((e,c)=>t.mapValue.fields[e]=ns(c))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let c=0;c<(e.arrayValue.values||[]).length;++c)t.arrayValue.values[c]=ns(e.arrayValue.values[c]);return t}return Object.assign({},e)}function is(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ss{constructor(e){this.value=e}static empty(){return new ss({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let c=0;c<e.length-1;++c)if(t=(t.mapValue.fields||{})[e.get(c)],!cs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ns(t)}setAll(e){let t=si.emptyPath(),c={},n=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,c,n),c={},n=[],t=i.popLast()}e?c[i.lastSegment()]=ns(e):n.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,c,n)}delete(e){const t=this.field(e.popLast());cs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Wi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let c=0;c<e.length;++c){let n=t.mapValue.fields[e.get(c)];cs(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(c)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,c){Mi(t,((t,c)=>e[t]=c));for(const n of c)delete e[n]}clone(){return new ss(ns(this.value))}}function rs(e){const t=[];return Mi(e.fields,((e,c)=>{const n=new si([e]);if(cs(c)){const e=rs(c.mapValue).fields;if(0===e.length)t.push(n);else for(const c of e)t.push(n.child(c))}else t.push(n)})),new Ai(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class as{constructor(e,t,c,n,i,s,r){this.key=e,this.documentType=t,this.version=c,this.readTime=n,this.createTime=i,this.data=s,this.documentState=r}static newInvalidDocument(e){return new as(e,0,ti.min(),ti.min(),ti.min(),ss.empty(),0)}static newFoundDocument(e,t,c,n){return new as(e,1,t,ti.min(),c,n,0)}static newNoDocument(e,t){return new as(e,2,t,ti.min(),ti.min(),ss.empty(),0)}static newUnknownDocument(e,t){return new as(e,3,t,ti.min(),ti.min(),ss.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ti.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ss.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ss.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ti.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof as&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new as(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t){this.position=e,this.inclusive=t}}function ls(e,t,c){let n=0;for(let i=0;i<e.position.length;i++){const s=t[i],r=e.position[i];if(n=s.field.isKeyField()?ri.comparator(ri.fromName(r.referenceValue),c.key):Ki(r,c.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function us(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let c=0;c<e.position.length;c++)if(!Wi(e.position[c],t.position[c]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t="asc"){this.field=e,this.dir=t}}function hs(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{}class ps extends ds{constructor(e,t,c){super(),this.field=e,this.op=t,this.value=c}static create(e,t,c){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,c):new Cs(e,t,c):"array-contains"===t?new Ls(e,c):"in"===t?new xs(e,c):"not-in"===t?new _s(e,c):"array-contains-any"===t?new ks(e,c):new ps(e,t,c)}static createKeyFieldInFilter(e,t,c){return"in"===t?new bs(e,c):new ws(e,c)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ki(t,this.value)):null!==t&&$i(this.value)===$i(t)&&this.matchesComparison(Ki(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return On()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ms extends ds{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new ms(e,t)}matches(e){return gs(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function gs(e){return"and"===e.op}function vs(e){return zs(e)&&gs(e)}function zs(e){for(const t of e.filters)if(t instanceof ms)return!1;return!0}function Hs(e){if(e instanceof ps)return e.field.canonicalString()+e.op.toString()+Qi(e.value);if(vs(e))return e.filters.map((e=>Hs(e))).join(",");{const t=e.filters.map((e=>Hs(e))).join(",");return`${e.op}(${t})`}}function ys(e,t){return e instanceof ps?function(e,t){return t instanceof ps&&e.op===t.op&&e.field.isEqual(t.field)&&Wi(e.value,t.value)}(e,t):e instanceof ms?function(e,t){return t instanceof ms&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,c,n)=>e&&ys(c,t.filters[n])),!0)}(e,t):void On()}function Vs(e){return e instanceof ps?function(e){return`${e.field.canonicalString()} ${e.op} ${Qi(e.value)}`}(e):e instanceof ms?function(e){return e.op.toString()+" {"+e.getFilters().map(Vs).join(" ,")+"}"}(e):"Filter"}class Cs extends ps{constructor(e,t,c){super(e,t,c),this.key=ri.fromName(c.referenceValue)}matches(e){const t=ri.comparator(e.key,this.key);return this.matchesComparison(t)}}class bs extends ps{constructor(e,t){super(e,"in",t),this.keys=Ms("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ws extends ps{constructor(e,t){super(e,"not-in",t),this.keys=Ms("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ms(e,t){var c;return((null===(c=t.arrayValue)||void 0===c?void 0:c.values)||[]).map((e=>ri.fromName(e.referenceValue)))}class Ls extends ps{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zi(t)&&Gi(t.arrayValue,this.value)}}class xs extends ps{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Gi(this.value.arrayValue,t)}}class _s extends ps{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Gi(this.value.arrayValue,t)}}class ks extends ps{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Gi(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t=null,c=[],n=[],i=null,s=null,r=null){this.path=e,this.collectionGroup=t,this.orderBy=c,this.filters=n,this.limit=i,this.startAt=s,this.endAt=r,this.ft=null}}function Ss(e,t=null,c=[],n=[],i=null,s=null,r=null){return new Ns(e,t,c,n,i,s,r)}function As(e){const t=Rn(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Hs(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),zi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Qi(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Qi(e))).join(",")),t.ft=e}return t.ft}function Es(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let c=0;c<e.orderBy.length;c++)if(!hs(e.orderBy[c],t.orderBy[c]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let c=0;c<e.filters.length;c++)if(!ys(e.filters[c],t.filters[c]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!us(e.startAt,t.startAt)&&us(e.endAt,t.endAt)}function Ts(e){return ri.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is{constructor(e,t=null,c=[],n=[],i=null,s="F",r=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=c,this.filters=n,this.limit=i,this.limitType=s,this.startAt=r,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Os(e,t,c,n,i,s,r,a){return new Is(e,t,c,n,i,s,r,a)}function Ps(e){return new Is(e)}function Rs(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ds(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Fs(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Us(e){return null!==e.collectionGroup}function Bs(e){const t=Rn(e);if(null===t.dt){t.dt=[];const e=Fs(t),c=Ds(t);if(null!==e&&null===c)e.isKeyField()||t.dt.push(new fs(e)),t.dt.push(new fs(si.keyField(),"asc"));else{let e=!1;for(const c of t.explicitOrderBy)t.dt.push(c),c.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new fs(si.keyField(),e))}}}return t.dt}function js(e){const t=Rn(e);if(!t.wt)if("F"===t.limitType)t.wt=Ss(t.path,t.collectionGroup,Bs(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Bs(t)){const t="desc"===i.dir?"asc":"desc";e.push(new fs(i.field,t))}const c=t.endAt?new os(t.endAt.position,t.endAt.inclusive):null,n=t.startAt?new os(t.startAt.position,t.startAt.inclusive):null;t.wt=Ss(t.path,t.collectionGroup,e,t.filters,t.limit,c,n)}return t.wt}function qs(e,t,c){return new Is(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,c,e.startAt,e.endAt)}function $s(e,t){return Es(js(e),js(t))&&e.limitType===t.limitType}function Ws(e){return`${As(js(e))}|lt:${e.limitType}`}function Gs(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Vs(e))).join(", ")}]`),zi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Qi(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Qi(e))).join(",")),`Target(${t})`}(js(e))}; limitType=${e.limitType})`}function Ks(e,t){return t.isFoundDocument()&&function(e,t){const c=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(c):ri.isDocumentKey(e.path)?e.path.isEqual(c):e.path.isImmediateParentOf(c)}(e,t)&&function(e,t){for(const c of Bs(e))if(!c.field.isKeyField()&&null===t.data.field(c.field))return!1;return!0}(e,t)&&function(e,t){for(const c of e.filters)if(!c.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,c){const n=ls(e,t,c);return e.inclusive?n<=0:n<0}(e.startAt,Bs(e),t))&&!(e.endAt&&!function(e,t,c){const n=ls(e,t,c);return e.inclusive?n>=0:n>0}(e.endAt,Bs(e),t))}(e,t)}function Ys(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Qs(e){return(t,c)=>{let n=!1;for(const i of Bs(e)){const e=Js(i,t,c);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}function Js(e,t,c){const n=e.field.isKeyField()?ri.comparator(t.key,c.key):function(e,t,c){const n=t.data.field(e),i=c.data.field(e);return null!==n&&null!==i?Ki(n,i):On()}(e.field,t,c);switch(e.dir){case"asc":return n;case"desc":return-1*n;default:return On()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),c=this.inner[t];if(void 0!==c)for(const[n,i]of c)if(this.equalsFn(n,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const c=this.mapKeyFn(e),n=this.inner[c];if(void 0===n)return this.inner[c]=[[e,t]],void this.innerSize++;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return void(n[i]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),c=this.inner[t];if(void 0===c)return!1;for(let n=0;n<c.length;n++)if(this.equalsFn(c[n][0],e))return 1===c.length?delete this.inner[t]:c.splice(n,1),this.innerSize--,!0;return!1}forEach(e){Mi(this.inner,((t,c)=>{for(const[n,i]of c)e(n,i)}))}isEmpty(){return Li(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new xi(ri.comparator);function er(){return Zs}const tr=new xi(ri.comparator);function cr(...e){let t=tr;for(const c of e)t=t.insert(c.key,c);return t}function nr(e){let t=tr;return e.forEach(((e,c)=>t=t.insert(e,c.overlayedDocument))),t}function ir(){return rr()}function sr(){return rr()}function rr(){return new Xs((e=>e.toString()),((e,t)=>e.isEqual(t)))}const ar=new xi(ri.comparator),or=new Ni(ri.comparator);function lr(...e){let t=or;for(const c of e)t=t.add(c);return t}const ur=new Ni(Xn);function fr(){return ur}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hi(t)?"-0":t}}function dr(e){return{integerValue:""+e}}function pr(e,t){return yi(t)?dr(t):hr(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this._=void 0}}function gr(e,t,c){return e instanceof Hr?function(e,t){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(c.fields.__previous_value__=t),{mapValue:c}}(c,t):e instanceof yr?Vr(e,t):e instanceof Cr?br(e,t):function(e,t){const c=zr(e,t),n=Mr(c)+Mr(e._t);return Xi(c)&&Xi(e._t)?dr(n):hr(e.serializer,n)}(e,t)}function vr(e,t,c){return e instanceof yr?Vr(e,t):e instanceof Cr?br(e,t):c}function zr(e,t){return e instanceof wr?Xi(c=t)||function(e){return!!e&&"doubleValue"in e}(c)?t:{integerValue:0}:null;var c}class Hr extends mr{}class yr extends mr{constructor(e){super(),this.elements=e}}function Vr(e,t){const c=Lr(t);for(const n of e.elements)c.some((e=>Wi(e,n)))||c.push(n);return{arrayValue:{values:c}}}class Cr extends mr{constructor(e){super(),this.elements=e}}function br(e,t){let c=Lr(t);for(const n of e.elements)c=c.filter((e=>!Wi(e,n)));return{arrayValue:{values:c}}}class wr extends mr{constructor(e,t){super(),this.serializer=e,this._t=t}}function Mr(e){return Pi(e.integerValue||e.doubleValue)}function Lr(e){return Zi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof yr&&t instanceof yr||e instanceof Cr&&t instanceof Cr?Zn(e.elements,t.elements,Wi):e instanceof wr&&t instanceof wr?Wi(e._t,t._t):e instanceof Hr&&t instanceof Hr}(e.transform,t.transform)}class _r{constructor(e,t){this.version=e,this.transformResults=t}}class kr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kr}static exists(e){return new kr(void 0,e)}static updateTime(e){return new kr(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nr(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Sr{}function Ar(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Br(e.key,kr.none()):new Pr(e.key,e.data,kr.none());{const c=e.data,n=ss.empty();let i=new Ni(si.comparator);for(let e of t.fields)if(!i.has(e)){let t=c.field(e);null===t&&e.length>1&&(e=e.popLast(),t=c.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new Rr(e.key,n,new Ai(i.toArray()),kr.none())}}function Er(e,t,c){e instanceof Pr?function(e,t,c){const n=e.value.clone(),i=Fr(e.fieldTransforms,t,c.transformResults);n.setAll(i),t.convertToFoundDocument(c.version,n).setHasCommittedMutations()}(e,t,c):e instanceof Rr?function(e,t,c){if(!Nr(e.precondition,t))return void t.convertToUnknownDocument(c.version);const n=Fr(e.fieldTransforms,t,c.transformResults),i=t.data;i.setAll(Dr(e)),i.setAll(n),t.convertToFoundDocument(c.version,i).setHasCommittedMutations()}(e,t,c):function(e,t,c){t.convertToNoDocument(c.version).setHasCommittedMutations()}(0,t,c)}function Tr(e,t,c,n){return e instanceof Pr?function(e,t,c,n){if(!Nr(e.precondition,t))return c;const i=e.value.clone(),s=Ur(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,c,n):e instanceof Rr?function(e,t,c,n){if(!Nr(e.precondition,t))return c;const i=Ur(e.fieldTransforms,n,t),s=t.data;return s.setAll(Dr(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===c?null:c.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,c,n):function(e,t,c){return Nr(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):c}(e,t,c)}function Ir(e,t){let c=null;for(const n of e.fieldTransforms){const e=t.data.field(n.field),i=zr(n.transform,e||null);null!=i&&(null===c&&(c=ss.empty()),c.set(n.field,i))}return c||null}function Or(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Zn(e,t,((e,t)=>xr(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Pr extends Sr{constructor(e,t,c,n=[]){super(),this.key=e,this.value=t,this.precondition=c,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class Rr extends Sr{constructor(e,t,c,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=c,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dr(e){const t=new Map;return e.fieldMask.fields.forEach((c=>{if(!c.isEmpty()){const n=e.data.field(c);t.set(c,n)}})),t}function Fr(e,t,c){const n=new Map;Pn(e.length===c.length);for(let i=0;i<c.length;i++){const s=e[i],r=s.transform,a=t.data.field(s.field);n.set(s.field,vr(r,a,c[i]))}return n}function Ur(e,t,c){const n=new Map;for(const i of e){const e=i.transform,s=c.data.field(i.field);n.set(i.field,gr(e,s,t))}return n}class Br extends Sr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jr extends Sr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t,c,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=c,this.mutations=n}applyToRemoteDocument(e,t){const c=t.mutationResults;for(let n=0;n<this.mutations.length;n++){const t=this.mutations[n];t.key.isEqual(e.key)&&Er(t,e,c[n])}}applyToLocalView(e,t){for(const c of this.baseMutations)c.key.isEqual(e.key)&&(t=Tr(c,e,t,this.localWriteTime));for(const c of this.mutations)c.key.isEqual(e.key)&&(t=Tr(c,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const c=sr();return this.mutations.forEach((n=>{const i=e.get(n.key),s=i.overlayedDocument;let r=this.applyToLocalView(s,i.mutatedFields);r=t.has(n.key)?null:r;const a=Ar(s,r);null!==a&&c.set(n.key,a),s.isValidDocument()||s.convertToNoDocument(ti.min())})),c}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),lr())}isEqual(e){return this.batchId===e.batchId&&Zn(this.mutations,e.mutations,((e,t)=>Or(e,t)))&&Zn(this.baseMutations,e.baseMutations,((e,t)=>Or(e,t)))}}class $r{constructor(e,t,c,n){this.batch=e,this.commitVersion=t,this.mutationResults=c,this.docVersions=n}static from(e,t,c){Pn(e.mutations.length===c.length);let n=ar;const i=e.mutations;for(let s=0;s<i.length;s++)n=n.insert(i[s].key,c[s].version);return new $r(e,t,c,n)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gr{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kr,Yr;function Qr(e){switch(e){default:return On();case Dn.CANCELLED:case Dn.UNKNOWN:case Dn.DEADLINE_EXCEEDED:case Dn.RESOURCE_EXHAUSTED:case Dn.INTERNAL:case Dn.UNAVAILABLE:case Dn.UNAUTHENTICATED:return!1;case Dn.INVALID_ARGUMENT:case Dn.NOT_FOUND:case Dn.ALREADY_EXISTS:case Dn.PERMISSION_DENIED:case Dn.FAILED_PRECONDITION:case Dn.ABORTED:case Dn.OUT_OF_RANGE:case Dn.UNIMPLEMENTED:case Dn.DATA_LOSS:return!0}}function Jr(e){if(void 0===e)return En("GRPC error has no .code"),Dn.UNKNOWN;switch(e){case Kr.OK:return Dn.OK;case Kr.CANCELLED:return Dn.CANCELLED;case Kr.UNKNOWN:return Dn.UNKNOWN;case Kr.DEADLINE_EXCEEDED:return Dn.DEADLINE_EXCEEDED;case Kr.RESOURCE_EXHAUSTED:return Dn.RESOURCE_EXHAUSTED;case Kr.INTERNAL:return Dn.INTERNAL;case Kr.UNAVAILABLE:return Dn.UNAVAILABLE;case Kr.UNAUTHENTICATED:return Dn.UNAUTHENTICATED;case Kr.INVALID_ARGUMENT:return Dn.INVALID_ARGUMENT;case Kr.NOT_FOUND:return Dn.NOT_FOUND;case Kr.ALREADY_EXISTS:return Dn.ALREADY_EXISTS;case Kr.PERMISSION_DENIED:return Dn.PERMISSION_DENIED;case Kr.FAILED_PRECONDITION:return Dn.FAILED_PRECONDITION;case Kr.ABORTED:return Dn.ABORTED;case Kr.OUT_OF_RANGE:return Dn.OUT_OF_RANGE;case Kr.UNIMPLEMENTED:return Dn.UNIMPLEMENTED;case Kr.DATA_LOSS:return Dn.DATA_LOSS;default:return On()}}(Yr=Kr||(Kr={}))[Yr.OK=0]="OK",Yr[Yr.CANCELLED=1]="CANCELLED",Yr[Yr.UNKNOWN=2]="UNKNOWN",Yr[Yr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Yr[Yr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Yr[Yr.NOT_FOUND=5]="NOT_FOUND",Yr[Yr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Yr[Yr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Yr[Yr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Yr[Yr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Yr[Yr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Yr[Yr.ABORTED=10]="ABORTED",Yr[Yr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Yr[Yr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Yr[Yr.INTERNAL=13]="INTERNAL",Yr[Yr.UNAVAILABLE=14]="UNAVAILABLE",Yr[Yr.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xr{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Zr}static getOrCreateInstance(){return null===Zr&&(Zr=new Xr),Zr}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Zr=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t,c,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=c,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,c){const n=new Map;return n.set(e,ta.createSynthesizedTargetChangeForCurrentChange(e,t,c)),new ea(ti.min(),n,fr(),er(),lr())}}class ta{constructor(e,t,c,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=c,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,c){return new ta(c,t,lr(),lr(),lr())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t,c,n){this.It=e,this.removedTargetIds=t,this.key=c,this.Tt=n}}class na{constructor(e,t){this.targetId=e,this.Et=t}}class ia{constructor(e,t,c=Ti.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=c,this.cause=n}}class sa{constructor(){this.At=0,this.Rt=oa(),this.vt=Ti.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=lr(),t=lr(),c=lr();return this.Rt.forEach(((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:c=c.add(n);break;default:On()}})),new ta(this.vt,this.bt,e,t,c)}xt(){this.Pt=!1,this.Rt=oa()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class ra{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=er(),this.qt=aa(),this.Ut=new Ni(Xn)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,(t=>{const c=this.jt(t);switch(e.state){case 0:this.Wt(t)&&c.Dt(e.resumeToken);break;case 1:c.$t(),c.Vt||c.xt(),c.Dt(e.resumeToken);break;case 2:c.$t(),c.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(c.Mt(),c.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),c.Dt(e.resumeToken));break;default:On()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,c)=>{this.Wt(c)&&t(c)}))}Jt(e){var t;const c=e.targetId,n=e.Et.count,i=this.Yt(c);if(i){const s=i.target;if(Ts(s))if(0===n){const e=new ri(s.path);this.Qt(c,e,as.newNoDocument(e,ti.min()))}else Pn(1===n);else{const i=this.Zt(c);i!==n&&(this.Ht(c),this.Ut=this.Ut.add(c),null===(t=Xr.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:i,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach(((c,n)=>{const i=this.Yt(n);if(i){if(c.current&&Ts(i.target)){const t=new ri(i.target.path);null!==this.Lt.get(t)||this.te(n,t)||this.Qt(n,t,as.newNoDocument(t,e))}c.St&&(t.set(n,c.Ct()),c.xt())}}));let c=lr();this.qt.forEach(((e,t)=>{let n=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(n=!1,!1)})),n&&(c=c.add(e))})),this.Lt.forEach(((t,c)=>c.setReadTime(e)));const n=new ea(e,t,this.Ut,this.Lt,c);return this.Lt=er(),this.qt=aa(),this.Ut=new Ni(Xn),n}Gt(e,t){if(!this.Wt(e))return;const c=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,c),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,c){if(!this.Wt(e))return;const n=this.jt(e);this.te(e,t)?n.Nt(t,1):n.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),c&&(this.Lt=this.Lt.insert(t,c))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new sa,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new Ni(Xn),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=null!==this.Yt(e);return t||An("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new sa),this.Ft.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function aa(){return new xi(ri.comparator)}function oa(){return new xi(ri.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),ua=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),fa=(()=>{const e={and:"AND",or:"OR"};return e})();class ha{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function da(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function pa(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ma(e,t){return da(e,t.toTimestamp())}function ga(e){return Pn(!!e),ti.fromTimestamp(function(e){const t=Oi(e);return new ei(t.seconds,t.nanos)}(e))}function va(e,t){return function(e){return new ni(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function za(e){const t=ni.fromString(e);return Pn(Ua(t)),t}function Ha(e,t){return va(e.databaseId,t.path)}function ya(e,t){const c=za(t);if(c.get(1)!==e.databaseId.projectId)throw new Fn(Dn.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+e.databaseId.projectId);if(c.get(3)!==e.databaseId.database)throw new Fn(Dn.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+e.databaseId.database);return new ri(wa(c))}function Va(e,t){return va(e.databaseId,t)}function Ca(e){const t=za(e);return 4===t.length?ni.emptyPath():wa(t)}function ba(e){return new ni(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function wa(e){return Pn(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Ma(e,t,c){return{name:Ha(e,t),fields:c.value.mapValue.fields}}function La(e,t){let c;if("targetChange"in t){t.targetChange;const n=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:On()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(Pn(void 0===t||"string"==typeof t),Ti.fromBase64String(t||"")):(Pn(void 0===t||t instanceof Uint8Array),Ti.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),r=t.targetChange.cause,a=r&&function(e){const t=void 0===e.code?Dn.UNKNOWN:Jr(e.code);return new Fn(t,e.message||"")}(r);c=new ia(n,i,s,a||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=ya(e,n.document.name),s=ga(n.document.updateTime),r=n.document.createTime?ga(n.document.createTime):ti.min(),a=new ss({mapValue:{fields:n.document.fields}}),o=as.newFoundDocument(i,s,r,a),l=n.targetIds||[],u=n.removedTargetIds||[];c=new ca(l,u,o.key,o)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=ya(e,n.document),s=n.readTime?ga(n.readTime):ti.min(),r=as.newNoDocument(i,s),a=n.removedTargetIds||[];c=new ca([],a,r.key,r)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=ya(e,n.document),s=n.removedTargetIds||[];c=new ca([],s,i,null)}else{if(!("filter"in t))return On();{t.filter;const e=t.filter;e.targetId;const n=e.count||0,i=new Gr(n),s=e.targetId;c=new na(s,i)}}return c}function xa(e,t){let c;if(t instanceof Pr)c={update:Ma(e,t.key,t.value)};else if(t instanceof Br)c={delete:Ha(e,t.key)};else if(t instanceof Rr)c={update:Ma(e,t.key,t.data),updateMask:Fa(t.fieldMask)};else{if(!(t instanceof jr))return On();c={verify:Ha(e,t.key)}}return t.fieldTransforms.length>0&&(c.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const c=t.transform;if(c instanceof Hr)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof yr)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Cr)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof wr)return{fieldPath:t.field.canonicalString(),increment:c._t};throw On()}(0,e)))),t.precondition.isNone||(c.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ma(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:On()}(e,t.precondition)),c}function _a(e,t){return e&&e.length>0?(Pn(void 0!==t),e.map((e=>function(e,t){let c=e.updateTime?ga(e.updateTime):ga(t);return c.isEqual(ti.min())&&(c=ga(t)),new _r(c,e.transformResults||[])}(e,t)))):[]}function ka(e,t){return{documents:[Va(e,t.path)]}}function Na(e,t){const c={structuredQuery:{}},n=t.path;null!==t.collectionGroup?(c.parent=Va(e,n),c.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(c.parent=Va(e,n.popLast()),c.structuredQuery.from=[{collectionId:n.lastSegment()}]);const i=function(e){if(0!==e.length)return Da(ms.create(e,"and"))}(t.filters);i&&(c.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Pa(e.field),direction:Ta(e.dir)}}(e)))}(t.orderBy);s&&(c.structuredQuery.orderBy=s);const r=function(e,t){return e.useProto3Json||zi(t)?t:{value:t}}(e,t.limit);var a;return null!==r&&(c.structuredQuery.limit=r),t.startAt&&(c.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(c.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),c}function Sa(e){let t=Ca(e.parent);const c=e.structuredQuery,n=c.from?c.from.length:0;let i=null;if(n>0){Pn(1===n);const e=c.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];c.where&&(s=function(e){const t=Ea(e);return t instanceof ms&&vs(t)?t.getFilters():[t]}(c.where));let r=[];c.orderBy&&(r=c.orderBy.map((e=>function(e){return new fs(Ra(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;c.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,zi(t)?null:t}(c.limit));let o=null;c.startAt&&(o=function(e){const t=!!e.before,c=e.values||[];return new os(c,t)}(c.startAt));let l=null;return c.endAt&&(l=function(e){const t=!e.before,c=e.values||[];return new os(c,t)}(c.endAt)),Os(t,i,r,s,a,"F",o,l)}function Aa(e,t){const c=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return On()}}(0,t.purpose);return null==c?null:{"goog-listen-tags":c}}function Ea(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ra(e.unaryFilter.field);return ps.create(t,"==",{doubleValue:NaN});case"IS_NULL":const c=Ra(e.unaryFilter.field);return ps.create(c,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=Ra(e.unaryFilter.field);return ps.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ra(e.unaryFilter.field);return ps.create(i,"!=",{nullValue:"NULL_VALUE"});default:return On()}}(e):void 0!==e.fieldFilter?function(e){return ps.create(Ra(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return On()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return ms.create(e.compositeFilter.filters.map((e=>Ea(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return On()}}(e.compositeFilter.op))}(e):On()}function Ta(e){return la[e]}function Ia(e){return ua[e]}function Oa(e){return fa[e]}function Pa(e){return{fieldPath:e.canonicalString()}}function Ra(e){return si.fromServerFormat(e.fieldPath)}function Da(e){return e instanceof ps?function(e){if("=="===e.op){if(ts(e.value))return{unaryFilter:{field:Pa(e.field),op:"IS_NAN"}};if(es(e.value))return{unaryFilter:{field:Pa(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ts(e.value))return{unaryFilter:{field:Pa(e.field),op:"IS_NOT_NAN"}};if(es(e.value))return{unaryFilter:{field:Pa(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pa(e.field),op:Ia(e.op),value:e.value}}}(e):e instanceof ms?function(e){const t=e.getFilters().map((e=>Da(e)));return 1===t.length?t[0]:{compositeFilter:{op:Oa(e.op),filters:t}}}(e):On()}function Fa(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ua(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t,c,n,i=ti.min(),s=ti.min(),r=Ti.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=c,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=r}withSequenceNumber(e){return new Ba(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.se=e}}function qa(e){const t=Sa({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?qs(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(Pi(e.integerValue));else if("doubleValue"in e){const c=Pi(e.doubleValue);isNaN(c)?this.ae(t,13):(this.ae(t,15),Hi(c)?t.he(0):t.he(c))}else if("timestampValue"in e){const c=e.timestampValue;this.ae(t,20),"string"==typeof c?t.le(c):(t.le(`${c.seconds||""}`),t.he(c.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(Ri(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const c=e.geoPointValue;this.ae(t,45),t.he(c.latitude||0),t.he(c.longitude||0)}else"mapValue"in e?is(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):On()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const c=e.fields||{};this.ae(t,55);for(const n of Object.keys(c))this.fe(n,t),this.ue(c[n],t)}ge(e,t){const c=e.values||[];this.ae(t,50);for(const n of c)this.ue(n,t)}_e(e,t){this.ae(t,37),ri.fromName(e).path.forEach((e=>{this.ae(t,60),this.ye(e,t)}))}ae(e,t){e.he(t)}de(e){e.he(2)}}$a.pe=new $a;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wa{constructor(){this.He=new Ga}addToCollectionParentIndex(e,t){return this.He.add(t),mi.resolve()}getCollectionParents(e,t){return mi.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return mi.resolve()}deleteFieldIndex(e,t){return mi.resolve()}getDocumentsMatchingTarget(e,t){return mi.resolve(null)}getIndexType(e,t){return mi.resolve(0)}getFieldIndexes(e,t){return mi.resolve([])}getNextCollectionGroupToUpdate(e){return mi.resolve(null)}getMinOffset(e,t){return mi.resolve(ui.min())}getMinOffsetFromCollectionGroup(e,t){return mi.resolve(ui.min())}updateCollectionGroup(e,t,c){return mi.resolve()}updateIndexEntries(e,t){return mi.resolve()}}class Ga{constructor(){this.index={}}add(e){const t=e.lastSegment(),c=e.popLast(),n=this.index[t]||new Ni(ni.comparator),i=!n.has(c);return this.index[t]=n.add(c),i}has(e){const t=e.lastSegment(),c=e.popLast(),n=this.index[t];return n&&n.has(c)}getEntries(e){return(this.index[e]||new Ni(ni.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ka{constructor(e,t,c){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=c}static withCacheSize(e){return new Ka(e,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ka.DEFAULT_COLLECTION_PERCENTILE=10,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ka.DEFAULT=new Ka(41943040,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ka.DISABLED=new Ka(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Ya(0)}static bn(){return new Ya(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(){this.changes=new Xs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,as.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const c=this.changes.get(t);return void 0!==c?mi.resolve(c):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t,c,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=c,this.indexManager=n}getDocument(e,t){let c=null;return this.documentOverlayCache.getOverlay(e,t).next((n=>(c=n,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==c&&Tr(c.mutation,e,Ai.empty(),ei.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,lr()).next((()=>t))))}getLocalViewOfDocuments(e,t,c=lr()){const n=ir();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,c).next((e=>{let t=cr();return e.forEach(((e,c)=>{t=t.insert(e,c.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const c=ir();return this.populateOverlays(e,c,t).next((()=>this.computeViews(e,t,c,lr())))}populateOverlays(e,t,c){const n=[];return c.forEach((e=>{t.has(e)||n.push(e)})),this.documentOverlayCache.getOverlays(e,n).next((e=>{e.forEach(((e,c)=>{t.set(e,c)}))}))}computeViews(e,t,c,n){let i=er();const s=rr(),r=rr();return t.forEach(((e,t)=>{const r=c.get(t.key);n.has(t.key)&&(void 0===r||r.mutation instanceof Rr)?i=i.insert(t.key,t):void 0!==r?(s.set(t.key,r.mutation.getFieldMask()),Tr(r.mutation,t,r.mutation.getFieldMask(),ei.now())):s.set(t.key,Ai.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var c;return r.set(e,new Ja(t,null!==(c=s.get(e))&&void 0!==c?c:null))})),r)))}recalculateAndSaveOverlays(e,t){const c=rr();let n=new xi(((e,t)=>e-t)),i=lr();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let r=c.get(e)||Ai.empty();r=i.applyToLocalView(s,r),c.set(e,r);const a=(n.get(i.batchId)||lr()).add(e);n=n.insert(i.batchId,a)}))})).next((()=>{const s=[],r=n.getReverseIterator();for(;r.hasNext();){const n=r.getNext(),a=n.key,o=n.value,l=sr();o.forEach((e=>{if(!i.has(e)){const n=Ar(t.get(e),c.get(e));null!==n&&l.set(e,n),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,l))}return mi.waitFor(s)})).next((()=>c))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,c){return function(e){return ri.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Us(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,c):this.getDocumentsMatchingCollectionQuery(e,t,c)}getNextDocuments(e,t,c,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,c,n).next((i=>{const s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,c.largestBatchId,n-i.size):mi.resolve(ir());let r=-1,a=i;return s.next((t=>mi.forEach(t,((t,c)=>(r<c.largestBatchId&&(r=c.largestBatchId),i.get(t)?mi.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,lr()))).next((e=>({batchId:r,changes:nr(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ri(t)).next((e=>{let t=cr();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,c){const n=t.collectionGroup;let i=cr();return this.indexManager.getCollectionParents(e,n).next((s=>mi.forEach(s,(s=>{const r=function(e,t){return new Is(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(n));return this.getDocumentsMatchingCollectionQuery(e,r,c).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,c){let n;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,c.largestBatchId).next((i=>(n=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,c,n)))).next((e=>{n.forEach(((t,c)=>{const n=c.getKey();null===e.get(n)&&(e=e.insert(n,as.newInvalidDocument(n)))}));let c=cr();return e.forEach(((e,i)=>{const s=n.get(e);void 0!==s&&Tr(s.mutation,i,Ai.empty(),ei.now()),Ks(t,i)&&(c=c.insert(e,i))})),c}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return mi.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var c;return this.Zn.set(t.id,{id:(c=t).id,version:c.version,createTime:ga(c.createTime)}),mi.resolve()}getNamedQuery(e,t){return mi.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:qa(e.bundledQuery),readTime:ga(e.readTime)}}(t)),mi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.overlays=new xi(ri.comparator),this.ts=new Map}getOverlay(e,t){return mi.resolve(this.overlays.get(t))}getOverlays(e,t){const c=ir();return mi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&c.set(t,e)})))).next((()=>c))}saveOverlays(e,t,c){return c.forEach(((c,n)=>{this.re(e,t,n)})),mi.resolve()}removeOverlaysForBatchId(e,t,c){const n=this.ts.get(c);return void 0!==n&&(n.forEach((e=>this.overlays=this.overlays.remove(e))),this.ts.delete(c)),mi.resolve()}getOverlaysForCollection(e,t,c){const n=ir(),i=t.length+1,s=new ri(t.child("")),r=this.overlays.getIteratorFrom(s);for(;r.hasNext();){const e=r.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>c&&n.set(e.getKey(),e)}return mi.resolve(n)}getOverlaysForCollectionGroup(e,t,c,n){let i=new xi(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>c){let t=i.get(e.largestBatchId);null===t&&(t=ir(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const r=ir(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>r.set(e,t))),r.size()>=n)break;return mi.resolve(r)}re(e,t,c){const n=this.overlays.get(c.key);if(null!==n){const e=this.ts.get(n.largestBatchId).delete(c.key);this.ts.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(c.key,new Wr(t,c));let i=this.ts.get(t);void 0===i&&(i=lr(),this.ts.set(t,i)),this.ts.set(t,i.add(c.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.es=new Ni(co.ns),this.ss=new Ni(co.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const c=new co(e,t);this.es=this.es.add(c),this.ss=this.ss.add(c)}os(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.us(new co(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}hs(e){const t=new ri(new ni([])),c=new co(t,e),n=new co(t,e+1),i=[];return this.ss.forEachInRange([c,n],(e=>{this.us(e),i.push(e.key)})),i}ls(){this.es.forEach((e=>this.us(e)))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new ri(new ni([])),c=new co(t,e),n=new co(t,e+1);let i=lr();return this.ss.forEachInRange([c,n],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new co(e,0),c=this.es.firstAfterOrEqual(t);return null!==c&&e.isEqual(c.key)}}class co{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return ri.comparator(e.key,t.key)||Xn(e.ds,t.ds)}static rs(e,t){return Xn(e.ds,t.ds)||ri.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new Ni(co.ns)}checkEmpty(e){return mi.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,c,n){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new qr(i,t,c,n);this.mutationQueue.push(s);for(const r of n)this._s=this._s.add(new co(r.key,i)),this.indexManager.addToCollectionParentIndex(e,r.key.path.popLast());return mi.resolve(s)}lookupMutationBatch(e,t){return mi.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const c=t+1,n=this.ys(c),i=n<0?0:n;return mi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return mi.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return mi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const c=new co(t,0),n=new co(t,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([c,n],(e=>{const t=this.gs(e.ds);i.push(t)})),mi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let c=new Ni(Xn);return t.forEach((e=>{const t=new co(e,0),n=new co(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,n],(e=>{c=c.add(e.ds)}))})),mi.resolve(this.ps(c))}getAllMutationBatchesAffectingQuery(e,t){const c=t.path,n=c.length+1;let i=c;ri.isDocumentKey(i)||(i=i.child(""));const s=new co(new ri(i),0);let r=new Ni(Xn);return this._s.forEachWhile((e=>{const t=e.key.path;return!!c.isPrefixOf(t)&&(t.length===n&&(r=r.add(e.ds)),!0)}),s),mi.resolve(this.ps(r))}ps(e){const t=[];return e.forEach((e=>{const c=this.gs(e);null!==c&&t.push(c)})),t}removeMutationBatch(e,t){Pn(0===this.Is(t.batchId,"removed")),this.mutationQueue.shift();let c=this._s;return mi.forEach(t.mutations,(n=>{const i=new co(n.key,t.batchId);return c=c.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)})).next((()=>{this._s=c}))}En(e){}containsKey(e,t){const c=new co(t,0),n=this._s.firstAfterOrEqual(c);return mi.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,mi.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.Ts=e,this.docs=new xi(ri.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const c=t.key,n=this.docs.get(c),i=n?n.size:0,s=this.Ts(t);return this.docs=this.docs.insert(c,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,c.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const c=this.docs.get(t);return mi.resolve(c?c.document.mutableCopy():as.newInvalidDocument(t))}getEntries(e,t){let c=er();return t.forEach((e=>{const t=this.docs.get(e);c=c.insert(e,t?t.document.mutableCopy():as.newInvalidDocument(e))})),mi.resolve(c)}getDocumentsMatchingQuery(e,t,c,n){let i=er();const s=t.path,r=new ri(s.child("")),a=this.docs.getIteratorFrom(r);for(;a.hasNext();){const{key:e,value:{document:r}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||fi(li(r),c)<=0||(n.has(r.key)||Ks(t,r))&&(i=i.insert(r.key,r.mutableCopy()))}return mi.resolve(i)}getAllFromCollectionGroup(e,t,c,n){On()}Es(e,t){return mi.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new so(this)}getSize(e){return mi.resolve(this.size)}}class so extends Qa{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach(((c,n)=>{n.isValidDocument()?t.push(this.Jn.addEntry(e,n)):this.Jn.removeEntry(c)})),mi.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.persistence=e,this.As=new Xs((e=>As(e)),Es),this.lastRemoteSnapshotVersion=ti.min(),this.highestTargetId=0,this.Rs=0,this.vs=new to,this.targetCount=0,this.bs=Ya.vn()}forEachTarget(e,t){return this.As.forEach(((e,c)=>t(c))),mi.resolve()}getLastRemoteSnapshotVersion(e){return mi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return mi.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),mi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,c){return c&&(this.lastRemoteSnapshotVersion=c),t>this.Rs&&(this.Rs=t),mi.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Ya(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,mi.resolve()}updateTargetData(e,t){return this.Sn(t),mi.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,mi.resolve()}removeTargets(e,t,c){let n=0;const i=[];return this.As.forEach(((s,r)=>{r.sequenceNumber<=t&&null===c.get(r.targetId)&&(this.As.delete(s),i.push(this.removeMatchingKeysForTargetId(e,r.targetId)),n++)})),mi.waitFor(i).next((()=>n))}getTargetCount(e){return mi.resolve(this.targetCount)}getTargetData(e,t){const c=this.As.get(t)||null;return mi.resolve(c)}addMatchingKeys(e,t,c){return this.vs.os(t,c),mi.resolve()}removeMatchingKeys(e,t,c){this.vs.cs(t,c);const n=this.persistence.referenceDelegate,i=[];return n&&t.forEach((t=>{i.push(n.markPotentiallyOrphaned(e,t))})),mi.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),mi.resolve()}getMatchingKeysForTargetId(e,t){const c=this.vs.fs(t);return mi.resolve(c)}containsKey(e,t){return mi.resolve(this.vs.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new vi(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new ro(this),this.indexManager=new Wa,this.remoteDocumentCache=function(e){return new io(e)}((e=>this.referenceDelegate.Cs(e))),this.serializer=new ja(t),this.xs=new Za(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eo,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let c=this.Ps[e.toKey()];return c||(c=new no(t,this.referenceDelegate),this.Ps[e.toKey()]=c),c}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,c){An("MemoryPersistence","Starting transaction:",e);const n=new oo(this.Vs.next());return this.referenceDelegate.Ns(),c(n).next((e=>this.referenceDelegate.ks(n).next((()=>e)))).toPromise().then((e=>(n.raiseOnCommittedEvent(),e)))}Os(e,t){return mi.or(Object.values(this.Ps).map((c=>()=>c.containsKey(e,t))))}}class oo extends di{constructor(e){super(),this.currentSequenceNumber=e}}class lo{constructor(e){this.persistence=e,this.$s=new to,this.Ms=null}static Fs(e){return new lo(e)}get Bs(){if(this.Ms)return this.Ms;throw On()}addReference(e,t,c){return this.$s.addReference(c,t),this.Bs.delete(c.toString()),mi.resolve()}removeReference(e,t,c){return this.$s.removeReference(c,t),this.Bs.add(c.toString()),mi.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),mi.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach((e=>this.Bs.add(e.toString())));const c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Bs.add(e.toString())))})).next((()=>c.removeTargetData(e,t)))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return mi.forEach(this.Bs,(c=>{const n=ri.fromPath(c);return this.Ls(e,n).next((e=>{e||t.removeEntry(n,ti.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ls(e,t).next((e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())}))}Cs(e){return 0}Ls(e,t){return mi.or([()=>mi.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uo{constructor(e,t,c,n){this.targetId=e,this.fromCache=t,this.Vi=c,this.Si=n}static Di(e,t){let c=lr(),n=lr();for(const i of t.docChanges)switch(i.type){case 0:c=c.add(i.doc.key);break;case 1:n=n.add(i.doc.key)}return new uo(e,t.fromCache,c,n)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,c,n){return this.Ni(e,t).next((i=>i||this.ki(e,t,n,c))).next((c=>c||this.Oi(e,t)))}Ni(e,t){if(Rs(t))return mi.resolve(null);let c=js(t);return this.indexManager.getIndexType(e,c).next((n=>0===n?null:(null!==t.limit&&1===n&&(t=qs(t,null,"F"),c=js(t)),this.indexManager.getDocumentsMatchingTarget(e,c).next((n=>{const i=lr(...n);return this.xi.getDocuments(e,i).next((n=>this.indexManager.getMinOffset(e,c).next((c=>{const s=this.$i(t,n);return this.Mi(t,s,i,c.readTime)?this.Ni(e,qs(t,null,"F")):this.Fi(e,s,t,c)}))))})))))}ki(e,t,c,n){return Rs(t)||n.isEqual(ti.min())?this.Oi(e,t):this.xi.getDocuments(e,c).next((i=>{const s=this.$i(t,i);return this.Mi(t,s,c,n)?this.Oi(e,t):(Sn()<=r["in"].DEBUG&&An("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Gs(t)),this.Fi(e,s,t,oi(n,-1)))}))}$i(e,t){let c=new Ni(Qs(e));return t.forEach(((t,n)=>{Ks(e,n)&&(c=c.add(n))})),c}Mi(e,t,c,n){if(null===e.limit)return!1;if(c.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}Oi(e,t){return Sn()<=r["in"].DEBUG&&An("QueryEngine","Using full collection scan to execute query:",Gs(t)),this.xi.getDocumentsMatchingQuery(e,t,ui.min())}Fi(e,t,c,n){return this.xi.getDocumentsMatchingQuery(e,c,n).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t,c,n){this.persistence=e,this.Bi=t,this.serializer=n,this.Li=new xi(Xn),this.qi=new Xs((e=>As(e)),Es),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(c)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xa(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Li)))}}function po(e,t,c,n){return new ho(e,t,c,n)}async function mo(e,t){const c=Rn(e);return await c.persistence.runTransaction("Handle user change","readonly",(e=>{let n;return c.mutationQueue.getAllMutationBatches(e).next((i=>(n=i,c.Gi(t),c.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let r=lr();for(const e of n){i.push(e.batchId);for(const t of e.mutations)r=r.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)r=r.add(t.key)}return c.localDocuments.getDocuments(e,r).next((e=>({Qi:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function go(e,t){const c=Rn(e);return c.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const n=t.batch.keys(),i=c.Ki.newChangeBuffer({trackRemovals:!0});return function(e,t,c,n){const i=c.batch,s=i.keys();let r=mi.resolve();return s.forEach((e=>{r=r.next((()=>n.getEntry(t,e))).next((t=>{const s=c.docVersions.get(e);Pn(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,c),t.isValidDocument()&&(t.setReadTime(c.commitVersion),n.addEntry(t)))}))})),r.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(c,e,t,i).next((()=>i.apply(e))).next((()=>c.mutationQueue.performConsistencyCheck(e))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=lr();for(let c=0;c<e.mutationResults.length;++c)e.mutationResults[c].transformResults.length>0&&(t=t.add(e.batch.mutations[c].key));return t}(t)))).next((()=>c.localDocuments.getDocuments(e,n)))}))}function vo(e){const t=Rn(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ds.getLastRemoteSnapshotVersion(e)))}function zo(e,t){const c=Rn(e),n=t.snapshotVersion;let i=c.Li;return c.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=c.Ki.newChangeBuffer({trackRemovals:!0});i=c.Li;const r=[];t.targetChanges.forEach(((s,a)=>{const o=i.get(a);if(!o)return;r.push(c.Ds.removeMatchingKeys(e,s.removedDocuments,a).next((()=>c.Ds.addMatchingKeys(e,s.addedDocuments,a))));let l=o.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?l=l.withResumeToken(Ti.EMPTY_BYTE_STRING,ti.min()).withLastLimboFreeSnapshotVersion(ti.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,n)),i=i.insert(a,l),function(e,t,c){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||c.addedDocuments.size+c.modifiedDocuments.size+c.removedDocuments.size>0)}(o,l,s)&&r.push(c.Ds.updateTargetData(e,l))}));let a=er(),o=lr();if(t.documentUpdates.forEach((n=>{t.resolvedLimboDocuments.has(n)&&r.push(c.persistence.referenceDelegate.updateLimboDocument(e,n))})),r.push(Ho(e,s,t.documentUpdates).next((e=>{a=e.zi,o=e.ji}))),!n.isEqual(ti.min())){const t=c.Ds.getLastRemoteSnapshotVersion(e).next((t=>c.Ds.setTargetsMetadata(e,e.currentSequenceNumber,n)));r.push(t)}return mi.waitFor(r).next((()=>s.apply(e))).next((()=>c.localDocuments.getLocalViewOfDocuments(e,a,o))).next((()=>a))})).then((e=>(c.Li=i,e)))}function Ho(e,t,c){let n=lr(),i=lr();return c.forEach((e=>n=n.add(e))),t.getEntries(e,n).next((e=>{let n=er();return c.forEach(((c,s)=>{const r=e.get(c);s.isFoundDocument()!==r.isFoundDocument()&&(i=i.add(c)),s.isNoDocument()&&s.version.isEqual(ti.min())?(t.removeEntry(c,s.readTime),n=n.insert(c,s)):!r.isValidDocument()||s.version.compareTo(r.version)>0||0===s.version.compareTo(r.version)&&r.hasPendingWrites?(t.addEntry(s),n=n.insert(c,s)):An("LocalStore","Ignoring outdated watch update for ",c,". Current version:",r.version," Watch version:",s.version)})),{zi:n,ji:i}}))}function yo(e,t){const c=Rn(e);return c.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),c.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Vo(e,t){const c=Rn(e);return c.persistence.runTransaction("Allocate target","readwrite",(e=>{let n;return c.Ds.getTargetData(e,t).next((i=>i?(n=i,mi.resolve(n)):c.Ds.allocateTargetId(e).next((i=>(n=new Ba(t,i,0,e.currentSequenceNumber),c.Ds.addTargetData(e,n).next((()=>n)))))))})).then((e=>{const n=c.Li.get(e.targetId);return(null===n||e.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(c.Li=c.Li.insert(e.targetId,e),c.qi.set(t,e.targetId)),e}))}async function Co(e,t,c){const n=Rn(e),i=n.Li.get(t),s=c?"readwrite":"readwrite-primary";try{c||await n.persistence.runTransaction("Release target",s,(e=>n.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!gi(e))throw e;An("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}n.Li=n.Li.remove(t),n.qi.delete(i.target)}function bo(e,t,c){const n=Rn(e);let i=ti.min(),s=lr();return n.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,c){const n=Rn(e),i=n.qi.get(c);return void 0!==i?mi.resolve(n.Li.get(i)):n.Ds.getTargetData(t,c)}(n,e,js(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,n.Ds.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>n.Bi.getDocumentsMatchingQuery(e,t,c?i:ti.min(),c?s:lr()))).next((e=>(wo(n,Ys(t),e),{documents:e,Wi:s})))))}function wo(e,t,c){let n=e.Ui.get(t)||ti.min();c.forEach(((e,t)=>{t.readTime.compareTo(n)>0&&(n=t.readTime)})),e.Ui.set(t,n)}class Mo{constructor(){this.activeTargetIds=fr()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lo{constructor(){this.Br=new Mo,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,c){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,c){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Mo,Promise.resolve()}handleUserChange(e,t,c){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){An("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){An("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko=null;function No(){return null===ko?ko=268435456+Math.round(2147483648*Math.random()):ko++,"0x"+ko.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const So={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="WebChannelConnection";class To extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,c,n,i){const s=No(),r=this.ao(e,t);An("RestConnection",`Sending RPC '${e}' ${s}:`,r,c);const a={};return this.ho(a,n,i),this.lo(e,r,a,c).then((t=>(An("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Tn("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",r,"request:",c),t}))}fo(e,t,c,n,i,s){return this.co(e,t,c,n,i)}ho(e,t,c){e["X-Goog-Api-Client"]="gl-js/ fire/"+kn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,c)=>e[c]=t)),c&&c.headers.forEach(((t,c)=>e[c]=t))}ao(e,t){const c=So[e];return`${this.ro}/v1/${t}:${c}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,c,n){const i=No();return new Promise(((s,r)=>{const a=new Ln;a.setWithCredentials(!0),a.listenOnce(Vn.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case yn.NO_ERROR:const t=a.getResponseJson();An(Eo,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case yn.TIMEOUT:An(Eo,`RPC '${e}' ${i} timed out`),r(new Fn(Dn.DEADLINE_EXCEEDED,"Request time out"));break;case yn.HTTP_ERROR:const c=a.getStatus();if(An(Eo,`RPC '${e}' ${i} failed with status:`,c,"response text:",a.getResponseText()),c>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Dn).indexOf(t)>=0?t:Dn.UNKNOWN}(t.status);r(new Fn(e,t.message))}else r(new Fn(Dn.UNKNOWN,"Server responded with status "+a.getStatus()))}else r(new Fn(Dn.UNAVAILABLE,"Connection failed."));break;default:On()}}finally{An(Eo,`RPC '${e}' ${i} completed.`)}}));const o=JSON.stringify(n);An(Eo,`RPC '${e}' ${i} sending request:`,n),a.send(t,"POST",o,c,15)}))}wo(e,t,c){const n=No(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=zn(),r=Hn(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new wn({})),this.ho(a.initMessageHeaders,t,c),a.encodeInitMessageHeaders=!0;const o=i.join("");An(Eo,`Creating RPC '${e}' stream ${n}: ${o}`,a);const l=s.createWebChannel(o,a);let u=!1,f=!1;const h=new Ao({Wr:t=>{f?An(Eo,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(u||(An(Eo,`Opening RPC '${e}' stream ${n} transport.`),l.open(),u=!0),An(Eo,`RPC '${e}' stream ${n} sending:`,t),l.send(t))},Hr:()=>l.close()}),d=(e,t,c)=>{e.listen(t,(e=>{try{c(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(l,Mn.EventType.OPEN,(()=>{f||An(Eo,`RPC '${e}' stream ${n} transport opened.`)})),d(l,Mn.EventType.CLOSE,(()=>{f||(f=!0,An(Eo,`RPC '${e}' stream ${n} transport closed`),h.so())})),d(l,Mn.EventType.ERROR,(t=>{f||(f=!0,Tn(Eo,`RPC '${e}' stream ${n} transport errored:`,t),h.so(new Fn(Dn.UNAVAILABLE,"The operation could not be completed")))})),d(l,Mn.EventType.MESSAGE,(t=>{var c;if(!f){const i=t.data[0];Pn(!!i);const s=i,r=s.error||(null===(c=s[0])||void 0===c?void 0:c.error);if(r){An(Eo,`RPC '${e}' stream ${n} received error:`,r);const t=r.status;let c=function(e){const t=Kr[e];if(void 0!==t)return Jr(t)}(t),i=r.message;void 0===c&&(c=Dn.INTERNAL,i="Unknown error status: "+t+" with message "+r.message),f=!0,h.so(new Fn(c,i)),l.close()}else An(Eo,`RPC '${e}' stream ${n} received:`,i),h.io(i)}})),d(r,Cn.STAT_EVENT,(t=>{t.stat===bn.PROXY?An(Eo,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===bn.NOPROXY&&An(Eo,`RPC '${e}' stream ${n} detected no buffering proxy`)})),setTimeout((()=>{h.no()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(e){return new ha(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t,c=1e3,n=1.5,i=6e4){this.Ws=e,this.timerId=t,this._o=c,this.mo=n,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),c=Math.max(0,Date.now()-this.To),n=Math.max(0,t-c);n>0&&An("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${c} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,n,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,c,n,i,s,r,a){this.Ws=e,this.bo=c,this.Po=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=r,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Po(e,t)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===Dn.RESOURCE_EXHAUSTED?(En(t.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===Dn.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,c])=>{this.Vo===t&&this.Ko(e,c)}),(t=>{e((()=>{const e=new Fn(Dn.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)}))}))}Ko(e,t){const c=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr((()=>{c((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((e=>{c((()=>this.Go(e)))})),this.stream.onMessage((e=>{c((()=>this.onMessage(e)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(e){return An("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget((()=>this.Vo===e?t():(An("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Do extends Ro{constructor(e,t,c,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,c,n,s),this.serializer=i}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=La(this.serializer,e),c=function(e){if(!("targetChange"in e))return ti.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ti.min():t.readTime?ga(t.readTime):ti.min()}(e);return this.listener.zo(t,c)}jo(e){const t={};t.database=ba(this.serializer),t.addTarget=function(e,t){let c;const n=t.target;return c=Ts(n)?{documents:ka(e,n)}:{query:Na(e,n)},c.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?c.resumeToken=pa(e,t.resumeToken):t.snapshotVersion.compareTo(ti.min())>0&&(c.readTime=da(e,t.snapshotVersion.toTimestamp())),c}(this.serializer,e);const c=Aa(this.serializer,e);c&&(t.labels=c),this.Fo(t)}Wo(e){const t={};t.database=ba(this.serializer),t.removeTarget=e,this.Fo(t)}}class Fo extends Ro{constructor(e,t,c,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,c,n,s),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Pn(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=_a(e.writeResults,e.commitTime),c=ga(e.commitTime);return this.listener.Zo(c,t)}return Pn(!e.writeResults||0===e.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=ba(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>xa(this.serializer,e)))};this.Fo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends class{}{constructor(e,t,c,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=c,this.serializer=n,this.eu=!1}nu(){if(this.eu)throw new Fn(Dn.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,c){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([n,i])=>this.connection.co(e,t,c,n,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Dn.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Fn(Dn.UNKNOWN,e.toString())}))}fo(e,t,c,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.fo(e,t,c,i,s,n))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Dn.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Fn(Dn.UNKNOWN,e.toString())}))}terminate(){this.eu=!0}}class Bo{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(En(t),this.ru=!1):An("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,c,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=c,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr((e=>{c.enqueueAndForget((async()=>{Xo(this)&&(An("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Rn(e);t.du.add(4),await $o(t),t.mu.set("Unknown"),t.du.delete(4),await qo(t)}(this))}))})),this.mu=new Bo(c,n)}}async function qo(e){if(Xo(e))for(const t of e.wu)await t(!0)}async function $o(e){for(const t of e.wu)await t(!1)}function Wo(e,t){const c=Rn(e);c.fu.has(t.targetId)||(c.fu.set(t.targetId,t),Jo(c)?Qo(c):gl(c).No()&&Ko(c,t))}function Go(e,t){const c=Rn(e),n=gl(c);c.fu.delete(t),n.No()&&Yo(c,t),0===c.fu.size&&(n.No()?n.$o():Xo(c)&&c.mu.set("Unknown"))}function Ko(e,t){e.gu.Ot(t.targetId),gl(e).jo(t)}function Yo(e,t){e.gu.Ot(t),gl(e).Wo(t)}function Qo(e){e.gu=new ra({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),gl(e).start(),e.mu.ou()}function Jo(e){return Xo(e)&&!gl(e).xo()&&e.fu.size>0}function Xo(e){return 0===Rn(e).du.size}function Zo(e){e.gu=void 0}async function el(e){e.fu.forEach(((t,c)=>{Ko(e,t)}))}async function tl(e,t){Zo(e),Jo(e)?(e.mu.au(t),Qo(e)):e.mu.set("Unknown")}async function cl(e,t,c){if(e.mu.set("Online"),t instanceof ia&&2===t.state&&t.cause)try{await async function(e,t){const c=t.cause;for(const n of t.targetIds)e.fu.has(n)&&(await e.remoteSyncer.rejectListen(n,c),e.fu.delete(n),e.gu.removeTarget(n))}(e,t)}catch(c){An("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),c),await nl(e,c)}else if(t instanceof ca?e.gu.Kt(t):t instanceof na?e.gu.Jt(t):e.gu.zt(t),!c.isEqual(ti.min()))try{const t=await vo(e.localStore);c.compareTo(t)>=0&&await function(e,t){const c=e.gu.Xt(t);return c.targetChanges.forEach(((c,n)=>{if(c.resumeToken.approximateByteSize()>0){const i=e.fu.get(n);i&&e.fu.set(n,i.withResumeToken(c.resumeToken,t))}})),c.targetMismatches.forEach((t=>{const c=e.fu.get(t);if(!c)return;e.fu.set(t,c.withResumeToken(Ti.EMPTY_BYTE_STRING,c.snapshotVersion)),Yo(e,t);const n=new Ba(c.target,t,1,c.sequenceNumber);Ko(e,n)})),e.remoteSyncer.applyRemoteEvent(c)}(e,c)}catch(t){An("RemoteStore","Failed to raise snapshot:",t),await nl(e,t)}}async function nl(e,t,c){if(!gi(t))throw t;e.du.add(1),await $o(e),e.mu.set("Offline"),c||(c=()=>vo(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{An("RemoteStore","Retrying IndexedDB access"),await c(),e.du.delete(1),await qo(e)}))}function il(e,t){return t().catch((c=>nl(e,c,t)))}async function sl(e){const t=Rn(e),c=vl(t);let n=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;rl(t);)try{const e=await yo(t.localStore,n);if(null===e){0===t.lu.length&&c.$o();break}n=e.batchId,al(t,e)}catch(e){await nl(t,e)}ol(t)&&ll(t)}function rl(e){return Xo(e)&&e.lu.length<10}function al(e,t){e.lu.push(t);const c=vl(e);c.No()&&c.Jo&&c.Yo(t.mutations)}function ol(e){return Xo(e)&&!vl(e).xo()&&e.lu.length>0}function ll(e){vl(e).start()}async function ul(e){vl(e).tu()}async function fl(e){const t=vl(e);for(const c of e.lu)t.Yo(c.mutations)}async function hl(e,t,c){const n=e.lu.shift(),i=$r.from(n,t,c);await il(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await sl(e)}async function dl(e,t){t&&vl(e).Jo&&await async function(e,t){if(c=t.code,Qr(c)&&c!==Dn.ABORTED){const c=e.lu.shift();vl(e).Oo(),await il(e,(()=>e.remoteSyncer.rejectFailedWrite(c.batchId,t))),await sl(e)}var c}(e,t),ol(e)&&ll(e)}async function pl(e,t){const c=Rn(e);c.asyncQueue.verifyOperationInProgress(),An("RemoteStore","RemoteStore received new credentials");const n=Xo(c);c.du.add(3),await $o(c),n&&c.mu.set("Unknown"),await c.remoteSyncer.handleCredentialChange(t),c.du.delete(3),await qo(c)}async function ml(e,t){const c=Rn(e);t?(c.du.delete(2),await qo(c)):t||(c.du.add(2),await $o(c),c.mu.set("Unknown"))}function gl(e){return e.yu||(e.yu=function(e,t,c){const n=Rn(e);return n.nu(),new Do(t,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,c)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Jr:el.bind(null,e),Zr:tl.bind(null,e),zo:cl.bind(null,e)}),e.wu.push((async t=>{t?(e.yu.Oo(),Jo(e)?Qo(e):e.mu.set("Unknown")):(await e.yu.stop(),Zo(e))}))),e.yu}function vl(e){return e.pu||(e.pu=function(e,t,c){const n=Rn(e);return n.nu(),new Fo(t,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,c)}(e.datastore,e.asyncQueue,{Jr:ul.bind(null,e),Zr:dl.bind(null,e),Xo:fl.bind(null,e),Zo:hl.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Oo(),await sl(e)):(await e.pu.stop(),e.lu.length>0&&(An("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))}))),e.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class zl{constructor(e,t,c,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=c,this.op=n,this.removalCallback=i,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,c,n,i){const s=Date.now()+c,r=new zl(e,t,s,n,i);return r.start(c),r}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Fn(Dn.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hl(e,t){if(En("AsyncQueue",`${t}: ${e}`),gi(e))return new Fn(Dn.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.comparator=e?(t,c)=>e(t,c)||ri.comparator(t.key,c.key):(e,t)=>ri.comparator(e.key,t.key),this.keyedMap=cr(),this.sortedSet=new xi(this.comparator)}static emptySet(e){return new yl(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,c)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yl))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),c=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,n=c.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const c=new yl;return c.comparator=this.comparator,c.keyedMap=e,c.sortedSet=t,c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.Iu=new xi(ri.comparator)}track(e){const t=e.doc.key,c=this.Iu.get(t);c?0!==e.type&&3===c.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==c.type?this.Iu=this.Iu.insert(t,{type:c.type,doc:e.doc}):2===e.type&&2===c.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===c.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===c.type?this.Iu=this.Iu.remove(t):1===e.type&&2===c.type?this.Iu=this.Iu.insert(t,{type:1,doc:c.doc}):0===e.type&&1===c.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):On():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal(((t,c)=>{e.push(c)})),e}}class Cl{constructor(e,t,c,n,i,s,r,a,o){this.query=e,this.docs=t,this.oldDocs=c,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=r,this.excludesMetadataChanges=a,this.hasCachedResults=o}static fromInitialDocuments(e,t,c,n,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Cl(e,t,yl.emptySet(t),s,c,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$s(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,c=e.docChanges;if(t.length!==c.length)return!1;for(let n=0;n<t.length;n++)if(t[n].type!==c[n].type||!t[n].doc.isEqual(c[n].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.Eu=void 0,this.listeners=[]}}class wl{constructor(){this.queries=new Xs((e=>Ws(e)),$s),this.onlineState="Unknown",this.Au=new Set}}async function Ml(e,t){const c=Rn(e),n=t.query;let i=!1,s=c.queries.get(n);if(s||(i=!0,s=new bl),i)try{s.Eu=await c.onListen(n)}catch(e){const c=Hl(e,`Initialization of query '${Gs(t.query)}' failed`);return void t.onError(c)}c.queries.set(n,s),s.listeners.push(t),t.Ru(c.onlineState),s.Eu&&t.vu(s.Eu)&&kl(c)}async function Ll(e,t){const c=Rn(e),n=t.query;let i=!1;const s=c.queries.get(n);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return c.queries.delete(n),c.onUnlisten(n)}function xl(e,t){const c=Rn(e);let n=!1;for(const i of t){const e=i.query,t=c.queries.get(e);if(t){for(const e of t.listeners)e.vu(i)&&(n=!0);t.Eu=i}}n&&kl(c)}function _l(e,t,c){const n=Rn(e),i=n.queries.get(t);if(i)for(const s of i.listeners)s.onError(c);n.queries.delete(t)}function kl(e){e.Au.forEach((e=>{e.next()}))}class Nl{constructor(e,t,c){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=c||{}}vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const c of e.docChanges)3!==c.type&&t.push(c);e=new Cl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const c="Offline"!==t;return(!this.options.xu||!c)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Cu(e){e=Cl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{constructor(e){this.key=e}}class Al{constructor(e){this.key=e}}class El{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=lr(),this.mutatedKeys=lr(),this.Ku=Qs(e),this.Gu=new yl(this.Ku)}get Qu(){return this.Lu}zu(e,t){const c=t?t.ju:new Vl,n=t?t.Gu:this.Gu;let i=t?t.mutatedKeys:this.mutatedKeys,s=n,r=!1;const a="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,o="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal(((e,t)=>{const l=n.get(e),u=Ks(this.query,t)?t:null,f=!!l&&this.mutatedKeys.has(l.key),h=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let d=!1;l&&u?l.data.isEqual(u.data)?f!==h&&(c.track({type:3,doc:u}),d=!0):this.Wu(l,u)||(c.track({type:2,doc:u}),d=!0,(a&&this.Ku(u,a)>0||o&&this.Ku(u,o)<0)&&(r=!0)):!l&&u?(c.track({type:0,doc:u}),d=!0):l&&!u&&(c.track({type:1,doc:l}),d=!0,(a||o)&&(r=!0)),d&&(u?(s=s.add(u),i=h?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),c.track({type:1,doc:e})}return{Gu:s,ju:c,Mi:r,mutatedKeys:i}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,c){const n=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort(((e,t)=>function(e,t){const c=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return On()}};return c(e)-c(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Ku(e.doc,t.doc))),this.Hu(c);const s=t?this.Ju():[],r=0===this.Uu.size&&this.current?1:0,a=r!==this.qu;return this.qu=r,0!==i.length||a?{snapshot:new Cl(this.query,e.Gu,n,i,e.mutatedKeys,0===r,a,!1,!!c&&c.resumeToken.approximateByteSize()>0),Yu:s}:{Yu:s}}Ru(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Vl,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach((e=>this.Lu=this.Lu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Lu=this.Lu.delete(e))),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=lr(),this.Gu.forEach((e=>{this.Zu(e.key)&&(this.Uu=this.Uu.add(e.key))}));const t=[];return e.forEach((e=>{this.Uu.has(e)||t.push(new Al(e))})),this.Uu.forEach((c=>{e.has(c)||t.push(new Sl(c))})),t}Xu(e){this.Lu=e.Wi,this.Uu=lr();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return Cl.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Tl{constructor(e,t,c){this.query=e,this.targetId=t,this.view=c}}class Il{constructor(e){this.key=e,this.ec=!1}}class Ol{constructor(e,t,c,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=c,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new Xs((e=>Ws(e)),$s),this.ic=new Map,this.rc=new Set,this.oc=new xi(ri.comparator),this.uc=new Map,this.cc=new to,this.ac={},this.hc=new Map,this.lc=Ya.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function Pl(e,t){const c=cu(e);let n,i;const s=c.sc.get(t);if(s)n=s.targetId,c.sharedClientState.addLocalQueryTarget(n),i=s.view.tc();else{const e=await Vo(c.localStore,js(t));c.isPrimaryClient&&Wo(c.remoteStore,e);const s=c.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,i=await Rl(c,t,n,"current"===s,e.resumeToken)}return i}async function Rl(e,t,c,n,i){e.dc=(t,c,n)=>async function(e,t,c,n){let i=t.view.zu(c);i.Mi&&(i=await bo(e.localStore,t.query,!1).then((({documents:e})=>t.view.zu(e,i))));const s=n&&n.targetChanges.get(t.targetId),r=t.view.applyChanges(i,e.isPrimaryClient,s);return Ql(e,t.targetId,r.Yu),r.snapshot}(e,t,c,n);const s=await bo(e.localStore,t,!0),r=new El(t,s.Wi),a=r.zu(s.documents),o=ta.createSynthesizedTargetChangeForCurrentChange(c,n&&"Offline"!==e.onlineState,i),l=r.applyChanges(a,e.isPrimaryClient,o);Ql(e,c,l.Yu);const u=new Tl(t,c,r);return e.sc.set(t,u),e.ic.has(c)?e.ic.get(c).push(t):e.ic.set(c,[t]),l.snapshot}async function Dl(e,t){const c=Rn(e),n=c.sc.get(t),i=c.ic.get(n.targetId);if(i.length>1)return c.ic.set(n.targetId,i.filter((e=>!$s(e,t)))),void c.sc.delete(t);c.isPrimaryClient?(c.sharedClientState.removeLocalQueryTarget(n.targetId),c.sharedClientState.isActiveQueryTarget(n.targetId)||await Co(c.localStore,n.targetId,!1).then((()=>{c.sharedClientState.clearQueryState(n.targetId),Go(c.remoteStore,n.targetId),Kl(c,n.targetId)})).catch(pi)):(Kl(c,n.targetId),await Co(c.localStore,n.targetId,!0))}async function Fl(e,t,c){const n=nu(e);try{const e=await function(e,t){const c=Rn(e),n=ei.now(),i=t.reduce(((e,t)=>e.add(t.key)),lr());let s,r;return c.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=er(),o=lr();return c.Ki.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(o=o.add(e))}))})).next((()=>c.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const r=[];for(const e of t){const t=Ir(e,s.get(e.key).overlayedDocument);null!=t&&r.push(new Rr(e.key,t,rs(t.value.mapValue),kr.exists(!0)))}return c.mutationQueue.addMutationBatch(e,n,r,t)})).next((t=>{r=t;const n=t.applyToLocalDocumentSet(s,o);return c.documentOverlayCache.saveOverlays(e,t.batchId,n)}))})).then((()=>({batchId:r.batchId,changes:nr(s)})))}(n.localStore,t);n.sharedClientState.addPendingMutation(e.batchId),function(e,t,c){let n=e.ac[e.currentUser.toKey()];n||(n=new xi(Xn)),n=n.insert(t,c),e.ac[e.currentUser.toKey()]=n}(n,e.batchId,c),await Zl(n,e.changes),await sl(n.remoteStore)}catch(e){const t=Hl(e,"Failed to persist write");c.reject(t)}}async function Ul(e,t){const c=Rn(e);try{const e=await zo(c.localStore,t);t.targetChanges.forEach(((e,t)=>{const n=c.uc.get(t);n&&(Pn(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?n.ec=!0:e.modifiedDocuments.size>0?Pn(n.ec):e.removedDocuments.size>0&&(Pn(n.ec),n.ec=!1))})),await Zl(c,e,t)}catch(e){await pi(e)}}function Bl(e,t,c){const n=Rn(e);if(n.isPrimaryClient&&0===c||!n.isPrimaryClient&&1===c){const e=[];n.sc.forEach(((c,n)=>{const i=n.view.Ru(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const c=Rn(e);c.onlineState=t;let n=!1;c.queries.forEach(((e,c)=>{for(const i of c.listeners)i.Ru(t)&&(n=!0)})),n&&kl(c)}(n.eventManager,t),e.length&&n.nc.zo(e),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function jl(e,t,c){const n=Rn(e);n.sharedClientState.updateQueryState(t,"rejected",c);const i=n.uc.get(t),s=i&&i.key;if(s){let e=new xi(ri.comparator);e=e.insert(s,as.newNoDocument(s,ti.min()));const c=lr().add(s),i=new ea(ti.min(),new Map,new Ni(Xn),e,c);await Ul(n,i),n.oc=n.oc.remove(s),n.uc.delete(t),Xl(n)}else await Co(n.localStore,t,!1).then((()=>Kl(n,t,c))).catch(pi)}async function ql(e,t){const c=Rn(e),n=t.batch.batchId;try{const e=await go(c.localStore,t);Gl(c,n,null),Wl(c,n),c.sharedClientState.updateMutationState(n,"acknowledged"),await Zl(c,e)}catch(e){await pi(e)}}async function $l(e,t,c){const n=Rn(e);try{const e=await function(e,t){const c=Rn(e);return c.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let n;return c.mutationQueue.lookupMutationBatch(e,t).next((t=>(Pn(null!==t),n=t.keys(),c.mutationQueue.removeMutationBatch(e,t)))).next((()=>c.mutationQueue.performConsistencyCheck(e))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(e,n,t))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n))).next((()=>c.localDocuments.getDocuments(e,n)))}))}(n.localStore,t);Gl(n,t,c),Wl(n,t),n.sharedClientState.updateMutationState(t,"rejected",c),await Zl(n,e)}catch(c){await pi(c)}}function Wl(e,t){(e.hc.get(t)||[]).forEach((e=>{e.resolve()})),e.hc.delete(t)}function Gl(e,t,c){const n=Rn(e);let i=n.ac[n.currentUser.toKey()];if(i){const e=i.get(t);e&&(c?e.reject(c):e.resolve(),i=i.remove(t)),n.ac[n.currentUser.toKey()]=i}}function Kl(e,t,c=null){e.sharedClientState.removeLocalQueryTarget(t);for(const n of e.ic.get(t))e.sc.delete(n),c&&e.nc.wc(n,c);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach((t=>{e.cc.containsKey(t)||Yl(e,t)}))}function Yl(e,t){e.rc.delete(t.path.canonicalString());const c=e.oc.get(t);null!==c&&(Go(e.remoteStore,c),e.oc=e.oc.remove(t),e.uc.delete(c),Xl(e))}function Ql(e,t,c){for(const n of c)n instanceof Sl?(e.cc.addReference(n.key,t),Jl(e,n)):n instanceof Al?(An("SyncEngine","Document no longer in limbo: "+n.key),e.cc.removeReference(n.key,t),e.cc.containsKey(n.key)||Yl(e,n.key)):On()}function Jl(e,t){const c=t.key,n=c.path.canonicalString();e.oc.get(c)||e.rc.has(n)||(An("SyncEngine","New document in limbo: "+c),e.rc.add(n),Xl(e))}function Xl(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const c=new ri(ni.fromString(t)),n=e.lc.next();e.uc.set(n,new Il(c)),e.oc=e.oc.insert(c,n),Wo(e.remoteStore,new Ba(js(Ps(c.path)),n,2,vi.ct))}}async function Zl(e,t,c){const n=Rn(e),i=[],s=[],r=[];n.sc.isEmpty()||(n.sc.forEach(((e,a)=>{r.push(n.dc(a,t,c).then((e=>{if((e||c)&&n.isPrimaryClient&&n.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=uo.Di(a.targetId,e);s.push(t)}})))})),await Promise.all(r),n.nc.zo(i),await async function(e,t){const c=Rn(e);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>mi.forEach(t,(t=>mi.forEach(t.Vi,(n=>c.persistence.referenceDelegate.addReference(e,t.targetId,n))).next((()=>mi.forEach(t.Si,(n=>c.persistence.referenceDelegate.removeReference(e,t.targetId,n)))))))))}catch(e){if(!gi(e))throw e;An("LocalStore","Failed to update sequence numbers: "+e)}for(const n of t){const e=n.targetId;if(!n.fromCache){const t=c.Li.get(e),n=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(n);c.Li=c.Li.insert(e,i)}}}(n.localStore,s))}async function eu(e,t){const c=Rn(e);if(!c.currentUser.isEqual(t)){An("SyncEngine","User change. New user:",t.toKey());const e=await mo(c.localStore,t);c.currentUser=t,function(e,t){e.hc.forEach((e=>{e.forEach((e=>{e.reject(new Fn(Dn.CANCELLED,t))}))})),e.hc.clear()}(c,"'waitForPendingWrites' promise is rejected due to a user change."),c.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Zl(c,e.Qi)}}function tu(e,t){const c=Rn(e),n=c.uc.get(t);if(n&&n.ec)return lr().add(n.key);{let e=lr();const n=c.ic.get(t);if(!n)return e;for(const t of n){const n=c.sc.get(t);e=e.unionWith(n.view.Qu)}return e}}function cu(e){const t=Rn(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ul.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tu.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jl.bind(null,t),t.nc.zo=xl.bind(null,t.eventManager),t.nc.wc=_l.bind(null,t.eventManager),t}function nu(e){const t=Rn(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ql.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$l.bind(null,t),t}class iu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Oo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return po(this.persistence,new fo,e.initialUser,this.serializer)}createPersistence(e){return new ao(lo.Fs,this.serializer)}createSharedClientState(e){return new Lo}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class su{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Bl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=eu.bind(null,this.syncEngine),await ml(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wl}createDatastore(e){const t=Oo(e.databaseInfo.databaseId),c=(n=e.databaseInfo,new To(n));var n;return function(e,t,c,n){return new Uo(e,t,c,n)}(e.authCredentials,e.appCheckCredentials,c,t)}createRemoteStore(e){return t=this.localStore,c=this.datastore,n=e.asyncQueue,i=e=>Bl(this.syncEngine,e,0),s=_o.D()?new _o:new xo,new jo(t,c,n,i,s);var t,c,n,i,s}createSyncEngine(e,t){return function(e,t,c,n,i,s,r){const a=new Ol(e,t,c,n,i,s);return r&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Rn(e);An("RemoteStore","RemoteStore shutting down."),t.du.add(5),await $o(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ru{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class au{constructor(e,t,c,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=c,this.databaseInfo=n,this.user=_n.UNAUTHENTICATED,this.clientId=Jn.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(c,(async e=>{An("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(c,(e=>(An("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Fn(Dn.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const c=Hl(t,"Failed to shutdown persistence");e.reject(c)}})),e.promise}}async function ou(e,t){e.asyncQueue.verifyOperationInProgress(),An("FirestoreClient","Initializing OfflineComponentProvider");const c=await e.getConfiguration();await t.initialize(c);let n=c.initialUser;e.setCredentialChangeListener((async e=>{n.isEqual(e)||(await mo(t.localStore,e),n=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function lu(e,t){e.asyncQueue.verifyOperationInProgress();const c=await fu(e);An("FirestoreClient","Initializing OnlineComponentProvider");const n=await e.getConfiguration();await t.initialize(c,n),e.setCredentialChangeListener((e=>pl(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,c)=>pl(t.remoteStore,c))),e._onlineComponents=t}function uu(e){return"FirebaseError"===e.name?e.code===Dn.FAILED_PRECONDITION||e.code===Dn.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function fu(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){An("FirestoreClient","Using user provided OfflineComponentProvider");try{await ou(e,e._uninitializedComponentsProvider._offline)}catch(t){const c=t;if(!uu(c))throw c;Tn("Error using user provided cache. Falling back to memory cache: "+c),await ou(e,new iu)}}else An("FirestoreClient","Using default OfflineComponentProvider"),await ou(e,new iu);return e._offlineComponents}async function hu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(An("FirestoreClient","Using user provided OnlineComponentProvider"),await lu(e,e._uninitializedComponentsProvider._online)):(An("FirestoreClient","Using default OnlineComponentProvider"),await lu(e,new su))),e._onlineComponents}function du(e){return hu(e).then((e=>e.syncEngine))}async function pu(e){const t=await hu(e),c=t.eventManager;return c.onListen=Pl.bind(null,t.syncEngine),c.onUnlisten=Dl.bind(null,t.syncEngine),c}function mu(e,t,c={}){const n=new Un;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,c,n,i){const s=new ru({next:c=>{t.enqueueAndForget((()=>Ll(e,r))),c.fromCache&&"server"===n.source?i.reject(new Fn(Dn.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(c)},error:e=>i.reject(e)}),r=new Nl(c,s,{includeMetadataChanges:!0,xu:!0});return Ml(e,r)}(await pu(e),e.asyncQueue,t,c,n))),n.promise}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gu=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(e,t,c){if(!c)throw new Fn(Dn.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function zu(e,t,c,n){if(!0===t&&!0===n)throw new Fn(Dn.INVALID_ARGUMENT,`${e} and ${c} cannot be used together.`)}function Hu(e){if(!ri.isDocumentKey(e))throw new Fn(Dn.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function yu(e){if(ri.isDocumentKey(e))throw new Fn(Dn.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Vu(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":On()}function Cu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Fn(Dn.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const c=Vu(e);throw new Fn(Dn.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${c}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bu{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Fn(Dn.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Fn(Dn.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,zu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t,c,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=c,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Fn(Dn.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Fn(Dn.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bu(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new jn;switch(e.type){case"firstParty":return new Gn(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Fn(Dn.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=gu.get(e);t&&(An("ComponentProvider","Removing Datastore"),gu.delete(e),t.terminate())}(this),Promise.resolve()}}function Mu(e,t,c,n={}){var i;const s=(e=Cu(e,wu))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Tn("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${c}`,ssl:!1})),n.mockUserToken){let t,c;if("string"==typeof n.mockUserToken)t=n.mockUserToken,c=_n.MOCK_USER;else{t=(0,a.Sg)(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new Fn(Dn.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new _n(s)}e._authCredentials=new qn(new Bn(t,c))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t,c){this.converter=t,this._key=c,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _u(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lu(this.firestore,e,this._key)}}class xu{constructor(e,t,c){this.converter=t,this._query=c,this.type="query",this.firestore=e}withConverter(e){return new xu(this.firestore,e,this._query)}}class _u extends xu{constructor(e,t,c){super(e,t,Ps(c)),this._path=c,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lu(this.firestore,null,new ri(e))}withConverter(e){return new _u(this.firestore,e,this._path)}}function ku(e,t,...c){if(e=(0,a.m9)(e),vu("collection","path",t),e instanceof wu){const n=ni.fromString(t,...c);return yu(n),new _u(e,null,n)}{if(!(e instanceof Lu||e instanceof _u))throw new Fn(Dn.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(ni.fromString(t,...c));return yu(n),new _u(e.firestore,null,n)}}function Nu(e,t,...c){if(e=(0,a.m9)(e),1===arguments.length&&(t=Jn.A()),vu("doc","path",t),e instanceof wu){const n=ni.fromString(t,...c);return Hu(n),new Lu(e,null,new ri(n))}{if(!(e instanceof Lu||e instanceof _u))throw new Fn(Dn.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(ni.fromString(t,...c));return Hu(n),new Lu(e.firestore,e instanceof _u?e.converter:null,new ri(n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Su{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Po(this,"async_queue_retry"),this.qc=()=>{const e=Io();e&&An("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};const e=Io();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=Io();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise((()=>{}));const t=new Un;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.kc.push(e),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(C){if(!gi(C))throw C;An("AsyncQueue","Operation failed with retryable error: "+C)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(e){const t=this.Nc.then((()=>(this.Fc=!0,e().catch((e=>{this.Mc=e,this.Fc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw En("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Fc=!1,e))))));return this.Nc=t,t}enqueueAfterDelay(e,t,c){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const n=zl.createAndSchedule(this,e,t,c,(e=>this.Qc(e)));return this.$c.push(n),n}Uc(){this.Mc&&On()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Nc,await e}while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}class Au extends wu{constructor(e,t,c,n){super(e,t,c,n),this.type="firestore",this._queue=new Su,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Iu(this),this._firestoreClient.terminate()}}function Eu(e,t){const c="object"==typeof e?e:(0,i.getApp)(),n="string"==typeof e?e:t||"(default)",s=(0,i._getProvider)(c,"firestore").getImmediate({identifier:n});if(!s._initialized){const e=(0,a.P0)("firestore");e&&Mu(s,...e)}return s}function Tu(e){return e._firestoreClient||Iu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Iu(e){var t,c,n;const i=e._freezeSettings(),s=function(e,t,c,n){return new Bi(e,t,c,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,n.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new au(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(c=i.cache)||void 0===c?void 0:c._offlineComponentProvider)&&(null===(n=i.cache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ou{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ou(Ti.fromBase64String(e))}catch(e){throw new Fn(Dn.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Ou(Ti.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Fn(Dn.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new si(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ru{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Fn(Dn.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Fn(Dn.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Xn(this._lat,e._lat)||Xn(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=/^__.*__$/;class Uu{constructor(e,t,c){this.data=e,this.fieldMask=t,this.fieldTransforms=c}toMutation(e,t){return null!==this.fieldMask?new Rr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pr(e,this.data,t,this.fieldTransforms)}}function Bu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw On()}}class ju{constructor(e,t,c,n,i,s){this.settings=e,this.databaseId=t,this.serializer=c,this.ignoreUndefinedProperties=n,void 0===i&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new ju(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const c=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Zc({path:c,ta:!1});return n.ea(e),n}na(e){var t;const c=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Zc({path:c,ta:!1});return n.Jc(),n}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return ef(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(Bu(this.Yc)&&Fu.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class qu{constructor(e,t,c){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=c||Oo(e)}ua(e,t,c,n=!1){return new ju({Yc:e,methodName:t,oa:c,path:si.emptyPath(),ta:!1,ra:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $u(e){const t=e._freezeSettings(),c=Oo(e._databaseId);return new qu(e._databaseId,!!t.ignoreUndefinedProperties,c)}function Wu(e,t,c,n,i,s={}){const r=e.ua(s.merge||s.mergeFields?2:0,t,c,i);Qu("Data must be an object, but it was:",r,n);const a=Ku(n,r);let o,l;if(s.merge)o=new Ai(r.fieldMask),l=r.fieldTransforms;else if(s.mergeFields){const e=[];for(const n of s.mergeFields){const i=Ju(t,n,c);if(!r.contains(i))throw new Fn(Dn.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);tf(e,i)||e.push(i)}o=new Ai(e),l=r.fieldTransforms.filter((e=>o.covers(e.field)))}else o=null,l=r.fieldTransforms;return new Uu(new ss(a),o,l)}function Gu(e,t){if(Yu(e=(0,a.m9)(e)))return Qu("Unsupported field value:",t,e),Ku(e,t);if(e instanceof Ru)return function(e,t){if(!Bu(t.Yc))throw t.ia(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ia(`${e._methodName}() is not currently supported inside arrays`);const c=e._toFieldTransform(t);c&&t.fieldTransforms.push(c)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&4!==t.Yc)throw t.ia("Nested arrays are not supported");return function(e,t){const c=[];let n=0;for(const i of e){let e=Gu(i,t.sa(n));null==e&&(e={nullValue:"NULL_VALUE"}),c.push(e),n++}return{arrayValue:{values:c}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return pr(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const c=ei.fromDate(e);return{timestampValue:da(t.serializer,c)}}if(e instanceof ei){const c=new ei(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:da(t.serializer,c)}}if(e instanceof Du)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Ou)return{bytesValue:pa(t.serializer,e._byteString)};if(e instanceof Lu){const c=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(c))throw t.ia(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:va(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia(`Unsupported field value: ${Vu(e)}`)}(e,t)}function Ku(e,t){const c={};return Li(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Mi(e,((e,n)=>{const i=Gu(n,t.Xc(e));null!=i&&(c[e]=i)})),{mapValue:{fields:c}}}function Yu(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ei||e instanceof Du||e instanceof Ou||e instanceof Lu||e instanceof Ru)}function Qu(e,t,c){if(!Yu(c)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(c)){const n=Vu(c);throw"an object"===n?t.ia(e+" a custom object"):t.ia(e+" "+n)}}function Ju(e,t,c){if((t=(0,a.m9)(t))instanceof Pu)return t._internalPath;if("string"==typeof t)return Zu(e,t);throw ef("Field path arguments must be of type string or ",e,!1,void 0,c)}const Xu=new RegExp("[~\\*/\\[\\]]");function Zu(e,t,c){if(t.search(Xu)>=0)throw ef(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,c);try{return new Pu(...t.split("."))._internalPath}catch(n){throw ef(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,c)}}function ef(e,t,c,n,i){const s=n&&!n.isEmpty(),r=void 0!==i;let a=`Function ${t}() called with invalid data`;c&&(a+=" (via `toFirestore()`)"),a+=". ";let o="";return(s||r)&&(o+=" (found",s&&(o+=` in field ${n}`),r&&(o+=` in document ${i}`),o+=")"),new Fn(Dn.INVALID_ARGUMENT,a+e+o)}function tf(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t,c,n,i){this._firestore=e,this._userDataWriter=t,this._key=c,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new nf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sf("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class nf extends cf{data(){return super.data()}}function sf(e,t){return"string"==typeof t?Zu(e,t):t instanceof Pu?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Fn(Dn.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class af{convertValue(e,t="none"){switch($i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pi(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw On()}}convertObject(e,t){const c={};return Mi(e.fields,((e,n)=>{c[e]=this.convertValue(n,t)})),c}convertGeoPoint(e){return new Du(Pi(e.latitude),Pi(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const c=Fi(e);return null==c?null:this.convertValue(c,t);case"estimate":return this.convertTimestamp(Ui(e));default:return null}}convertTimestamp(e){const t=Oi(e);return new ei(t.seconds,t.nanos)}convertDocumentKey(e,t){const c=ni.fromString(e);Pn(Ua(c));const n=new ji(c.get(1),c.get(3)),i=new ri(c.popFirst(5));return n.isEqual(t)||En(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(e,t,c){let n;return n=e?c&&(c.merge||c.mergeFields)?e.toFirestore(t,c):e.toFirestore(t):t,n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uf extends cf{constructor(e,t,c,n,i,s){super(e,t,c,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ff(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const c=this._document.data.field(sf("DocumentSnapshot.get",e));if(null!==c)return this._userDataWriter.convertValue(c,t.serverTimestamps)}}}class ff extends uf{data(e={}){return super.data(e)}}class hf{constructor(e,t,c,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new lf(n.hasPendingWrites,n.fromCache),this.query=c}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((c=>{e.call(t,new ff(this._firestore,this._userDataWriter,c.key,c,new lf(this._snapshot.mutatedKeys.has(c.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Fn(Dn.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((c=>{const n=new ff(e._firestore,e._userDataWriter,c.doc.key,c.doc,new lf(e._snapshot.mutatedKeys.has(c.doc.key),e._snapshot.fromCache),e.query.converter);return c.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}}))}{let c=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const n=new ff(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lf(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=c.indexOf(t.doc.key),c=c.delete(t.doc.key)),1!==t.type&&(c=c.add(t.doc),s=c.indexOf(t.doc.key)),{type:df(t.type),doc:n,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function df(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return On()}}class pf extends af{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ou(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Lu(this.firestore,null,t)}}function mf(e){e=Cu(e,xu);const t=Cu(e.firestore,Au),c=Tu(t),n=new pf(t);return rf(e._query),mu(c,e._query).then((c=>new hf(t,n,e,c)))}function gf(e,t,c){e=Cu(e,Lu);const n=Cu(e.firestore,Au),i=of(e.converter,t,c);return Hf(n,[Wu($u(n),"setDoc",e._key,i,null!==e.converter,c).toMutation(e._key,kr.none())])}function vf(e){return Hf(Cu(e.firestore,Au),[new Br(e._key,kr.none())])}function zf(e,t){const c=Cu(e.firestore,Au),n=Nu(e),i=of(e.converter,t);return Hf(c,[Wu($u(e.firestore),"addDoc",n._key,i,null!==e.converter,{}).toMutation(n._key,kr.exists(!1))]).then((()=>n))}function Hf(e,t){return function(e,t){const c=new Un;return e.asyncQueue.enqueueAndForget((async()=>Fl(await du(e),t,c))),c.promise}(Tu(e),t)}!function(e,t=!0){!function(e){kn=e}(i.SDK_VERSION),(0,i._registerComponent)(new s.wA("firestore",((e,{instanceIdentifier:c,options:n})=>{const i=e.getProvider("app").getImmediate(),s=new Au(new $n(e.getProvider("auth-internal")),new Yn(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Fn(Dn.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ji(e.options.projectId,t)}(i,c),i);return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(xn,"3.10.1",e),(0,i.registerVersion)(xn,"3.10.1","esm2017")}()},2483:function(e,t,c){"use strict";c.d(t,{PO:function(){return D},p7:function(){return tt}});c(7658),c(541);var n=c(3396),i=c(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function r(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function o(e,t){const c={};for(const n in t){const i=t[n];c[n]=u(i)?i.map(e):e(i)}return c}const l=()=>{},u=Array.isArray;const f=/\/$/,h=e=>e.replace(f,"");function d(e,t,c="/"){let n,i={},s="",r="";const a=t.indexOf("#");let o=t.indexOf("?");return a<o&&a>=0&&(o=-1),o>-1&&(n=t.slice(0,o),s=t.slice(o+1,a>-1?a:t.length),i=e(s)),a>-1&&(n=n||t.slice(0,a),r=t.slice(a,t.length)),n=V(null!=n?n:t,c),{fullPath:n+(s&&"?")+s+r,path:n,query:i,hash:r}}function p(e,t){const c=t.query?e(t.query):"";return t.path+(c&&"?")+c+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,c){const n=t.matched.length-1,i=c.matched.length-1;return n>-1&&n===i&&v(t.matched[n],c.matched[i])&&z(t.params,c.params)&&e(t.query)===e(c.query)&&t.hash===c.hash}function v(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function z(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const c in e)if(!H(e[c],t[c]))return!1;return!0}function H(e,t){return u(e)?y(e,t):u(t)?y(t,e):e===t}function y(e,t){return u(t)?e.length===t.length&&e.every(((e,c)=>e===t[c])):1===e.length&&e[0]===t}function V(e,t){if(e.startsWith("/"))return e;if(!e)return t;const c=t.split("/"),n=e.split("/");let i,s,r=c.length-1;for(i=0;i<n.length;i++)if(s=n[i],"."!==s){if(".."!==s)break;r>1&&r--}return c.slice(0,r).join("/")+"/"+n.slice(i-(i===n.length?1:0)).join("/")}var C,b;(function(e){e["pop"]="pop",e["push"]="push"})(C||(C={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(b||(b={}));function w(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),h(e)}const M=/^[^#]+#/;function L(e,t){return e.replace(M,"#")+t}function x(e,t){const c=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-c.left-(t.left||0),top:n.top-c.top-(t.top||0)}}const _=()=>({left:window.pageXOffset,top:window.pageYOffset});function k(e){let t;if("el"in e){const c=e.el,n="string"===typeof c&&c.startsWith("#");0;const i="string"===typeof c?n?document.getElementById(c.slice(1)):document.querySelector(c):c;if(!i)return;t=x(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function N(e,t){const c=history.state?history.state.position-t:-1;return c+e}const S=new Map;function A(e,t){S.set(e,t)}function E(e){const t=S.get(e);return S.delete(e),t}let T=()=>location.protocol+"//"+location.host;function I(e,t){const{pathname:c,search:n,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(t);return"/"!==c[0]&&(c="/"+c),m(c,"")}const r=m(c,e);return r+n+i}function O(e,t,c,n){let i=[],s=[],r=null;const o=({state:s})=>{const a=I(e,location),o=c.value,l=t.value;let u=0;if(s){if(c.value=a,t.value=s,r&&r===o)return void(r=null);u=l?s.position-l.position:0}else n(a);i.forEach((e=>{e(c.value,o,{delta:u,type:C.pop,direction:u?u>0?b.forward:b.back:b.unknown})}))};function l(){r=c.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function f(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:_()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:u,destroy:h}}function P(e,t,c,n=!1,i=!1){return{back:e,current:t,forward:c,replaced:n,position:window.history.length,scroll:i?_():null}}function R(e){const{history:t,location:c}=window,n={value:I(e,c)},i={value:t.state};function s(n,s,r){const a=e.indexOf("#"),o=a>-1?(c.host&&document.querySelector("base")?e:e.slice(a))+n:T()+e+n;try{t[r?"replaceState":"pushState"](s,"",o),i.value=s}catch(l){console.error(l),c[r?"replace":"assign"](o)}}function r(e,c){const r=a({},t.state,P(i.value.back,e,i.value.forward,!0),c,{position:i.value.position});s(e,r,!0),n.value=e}function o(e,c){const r=a({},i.value,t.state,{forward:e,scroll:_()});s(r.current,r,!0);const o=a({},P(n.value,e,null),{position:r.position+1},c);s(e,o,!1),n.value=e}return i.value||s(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:n,state:i,push:o,replace:r}}function D(e){e=w(e);const t=R(e),c=O(e,t.state,t.location,t.replace);function n(e,t=!0){t||c.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:n,createHref:L.bind(null,e)},t,c);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function F(e){return"string"===typeof e||e&&"object"===typeof e}function U(e){return"string"===typeof e||"symbol"===typeof e}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},j=Symbol("");var q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(q||(q={}));function $(e,t){return a(new Error,{type:e,[j]:!0},t)}function W(e,t){return e instanceof Error&&j in e&&(null==t||!!(e.type&t))}const G="[^/]+?",K={sensitive:!1,strict:!1,start:!0,end:!0},Y=/[.+*?^${}()[\]/\\]/g;function Q(e,t){const c=a({},K,t),n=[];let i=c.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];c.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const n=a[t];let r=40+(c.sensitive?.25:0);if(0===n.type)t||(i+="/"),i+=n.value.replace(Y,"\\$&"),r+=40;else if(1===n.type){const{value:e,repeatable:c,optional:o,regexp:l}=n;s.push({name:e,repeatable:c,optional:o});const u=l||G;if(u!==G){r+=10;try{new RegExp(`(${u})`)}catch(f){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+f.message)}}let h=c?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(h=o&&a.length<2?`(?:/${h})`:"/"+h),o&&(h+="?"),i+=h,r+=20,o&&(r+=-8),c&&(r+=-20),".*"===u&&(r+=-50)}e.push(r)}n.push(e)}if(c.strict&&c.end){const e=n.length-1;n[e][n[e].length-1]+=.7000000000000001}c.strict||(i+="/?"),c.end?i+="$":c.strict&&(i+="(?:/|$)");const r=new RegExp(i,c.sensitive?"":"i");function o(e){const t=e.match(r),c={};if(!t)return null;for(let n=1;n<t.length;n++){const e=t[n]||"",i=s[n-1];c[i.name]=e&&i.repeatable?e.split("/"):e}return c}function l(t){let c="",n=!1;for(const i of e){n&&c.endsWith("/")||(c+="/"),n=!1;for(const e of i)if(0===e.type)c+=e.value;else if(1===e.type){const{value:s,repeatable:r,optional:a}=e,o=s in t?t[s]:"";if(u(o)&&!r)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=u(o)?o.join("/"):o;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(c.endsWith("/")?c=c.slice(0,-1):n=!0)}c+=l}}return c||"/"}return{re:r,score:n,keys:s,parse:o,stringify:l}}function J(e,t){let c=0;while(c<e.length&&c<t.length){const n=t[c]-e[c];if(n)return n;c++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function X(e,t){let c=0;const n=e.score,i=t.score;while(c<n.length&&c<i.length){const e=J(n[c],i[c]);if(e)return e;c++}if(1===Math.abs(i.length-n.length)){if(Z(n))return 1;if(Z(i))return-1}return i.length-n.length}function Z(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ce(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${c})/"${l}": ${e}`)}let c=0,n=c;const i=[];let s;function r(){s&&i.push(s),s=[]}let a,o=0,l="",u="";function f(){l&&(0===c?s.push({type:0,value:l}):1===c||2===c||3===c?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function h(){l+=a}while(o<e.length)if(a=e[o++],"\\"!==a||2===c)switch(c){case 0:"/"===a?(l&&f(),r()):":"===a?(f(),c=1):h();break;case 4:h(),c=n;break;case 1:"("===a?c=2:te.test(a)?h():(f(),c=0,"*"!==a&&"?"!==a&&"+"!==a&&o--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:c=3:u+=a;break;case 3:f(),c=0,"*"!==a&&"?"!==a&&"+"!==a&&o--,u="";break;default:t("Unknown state");break}else n=c,c=4;return 2===c&&t(`Unfinished custom RegExp for param "${l}"`),f(),r(),i}function ne(e,t,c){const n=Q(ce(e.path),c);const i=a(n,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ie(e,t){const c=[],n=new Map;function i(e){return n.get(e)}function s(e,c,n){const i=!n,o=re(e);o.aliasOf=n&&n.record;const f=ue(t,e),h=[o];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)h.push(a({},o,{components:n?n.record.components:o.components,path:e,aliasOf:n?n.record:o}))}let d,p;for(const t of h){const{path:a}=t;if(c&&"/"!==a[0]){const e=c.record.path,n="/"===e[e.length-1]?"":"/";t.path=c.record.path+(a&&n+a)}if(d=ne(t,c,f),n?n.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),i&&e.name&&!oe(d)&&r(e.name)),o.children){const e=o.children;for(let t=0;t<e.length;t++)s(e[t],d,n&&n.children[t])}n=n||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&u(d)}return p?()=>{r(p)}:l}function r(e){if(U(e)){const t=n.get(e);t&&(n.delete(e),c.splice(c.indexOf(t),1),t.children.forEach(r),t.alias.forEach(r))}else{const t=c.indexOf(e);t>-1&&(c.splice(t,1),e.record.name&&n.delete(e.record.name),e.children.forEach(r),e.alias.forEach(r))}}function o(){return c}function u(e){let t=0;while(t<c.length&&X(e,c[t])>=0&&(e.record.path!==c[t].record.path||!fe(e,c[t])))t++;c.splice(t,0,e),e.record.name&&!oe(e)&&n.set(e.record.name,e)}function f(e,t){let i,s,r,o={};if("name"in e&&e.name){if(i=n.get(e.name),!i)throw $(1,{location:e});0,r=i.record.name,o=a(se(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&se(e.params,i.keys.map((e=>e.name)))),s=i.stringify(o)}else if("path"in e)s=e.path,i=c.find((e=>e.re.test(s))),i&&(o=i.parse(s),r=i.record.name);else{if(i=t.name?n.get(t.name):c.find((e=>e.re.test(t.path))),!i)throw $(1,{location:e,currentLocation:t});r=i.record.name,o=a({},t.params,e.params),s=i.stringify(o)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:r,path:s,params:o,matched:l,meta:le(l)}}return t=ue({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:f,removeRoute:r,getRoutes:o,getRecordMatcher:i}}function se(e,t){const c={};for(const n of t)n in e&&(c[n]=e[n]);return c}function re(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},c=e.props||!1;if("component"in e)t.default=c;else for(const n in e.components)t[n]="boolean"===typeof c?c:c[n];return t}function oe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function le(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function ue(e,t){const c={};for(const n in e)c[n]=n in t?t[n]:e[n];return c}function fe(e,t){return t.children.some((t=>t===e||fe(e,t)))}const he=/#/g,de=/&/g,pe=/\//g,me=/=/g,ge=/\?/g,ve=/\+/g,ze=/%5B/g,He=/%5D/g,ye=/%5E/g,Ve=/%60/g,Ce=/%7B/g,be=/%7C/g,we=/%7D/g,Me=/%20/g;function Le(e){return encodeURI(""+e).replace(be,"|").replace(ze,"[").replace(He,"]")}function xe(e){return Le(e).replace(Ce,"{").replace(we,"}").replace(ye,"^")}function _e(e){return Le(e).replace(ve,"%2B").replace(Me,"+").replace(he,"%23").replace(de,"%26").replace(Ve,"`").replace(Ce,"{").replace(we,"}").replace(ye,"^")}function ke(e){return _e(e).replace(me,"%3D")}function Ne(e){return Le(e).replace(he,"%23").replace(ge,"%3F")}function Se(e){return null==e?"":Ne(e).replace(pe,"%2F")}function Ae(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ee(e){const t={};if(""===e||"?"===e)return t;const c="?"===e[0],n=(c?e.slice(1):e).split("&");for(let i=0;i<n.length;++i){const e=n[i].replace(ve," "),c=e.indexOf("="),s=Ae(c<0?e:e.slice(0,c)),r=c<0?null:Ae(e.slice(c+1));if(s in t){let e=t[s];u(e)||(e=t[s]=[e]),e.push(r)}else t[s]=r}return t}function Te(e){let t="";for(let c in e){const n=e[c];if(c=ke(c),null==n){void 0!==n&&(t+=(t.length?"&":"")+c);continue}const i=u(n)?n.map((e=>e&&_e(e))):[n&&_e(n)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+c,null!=e&&(t+="="+e))}))}return t}function Ie(e){const t={};for(const c in e){const n=e[c];void 0!==n&&(t[c]=u(n)?n.map((e=>null==e?null:""+e)):null==n?n:""+n)}return t}const Oe=Symbol(""),Pe=Symbol(""),Re=Symbol(""),De=Symbol(""),Fe=Symbol("");function Ue(){let e=[];function t(t){return e.push(t),()=>{const c=e.indexOf(t);c>-1&&e.splice(c,1)}}function c(){e=[]}return{add:t,list:()=>e,reset:c}}function Be(e,t,c,n,i){const s=n&&(n.enterCallbacks[i]=n.enterCallbacks[i]||[]);return()=>new Promise(((r,a)=>{const o=e=>{!1===e?a($(4,{from:c,to:t})):e instanceof Error?a(e):F(e)?a($(2,{from:t,to:e})):(s&&n.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),r())},l=e.call(n&&n.instances[i],t,c,o);let u=Promise.resolve(l);e.length<3&&(u=u.then(o)),u.catch((e=>a(e)))}))}function je(e,t,c,n){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(qe(a)){const r=a.__vccOpts||a,o=r[t];o&&i.push(Be(o,c,n,s,e))}else{let o=a();0,i.push((()=>o.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=r(i)?i.default:i;s.components[e]=a;const o=a.__vccOpts||a,l=o[t];return l&&Be(l,c,n,s,e)()}))))}}}return i}function qe(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function $e(e){const t=(0,n.f3)(Re),c=(0,n.f3)(De),s=(0,n.Fl)((()=>t.resolve((0,i.SU)(e.to)))),r=(0,n.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,n=e[t-1],i=c.matched;if(!n||!i.length)return-1;const r=i.findIndex(v.bind(null,n));if(r>-1)return r;const a=Qe(e[t-2]);return t>1&&Qe(n)===a&&i[i.length-1].path!==a?i.findIndex(v.bind(null,e[t-2])):r})),a=(0,n.Fl)((()=>r.value>-1&&Ye(c.params,s.value.params))),o=(0,n.Fl)((()=>r.value>-1&&r.value===c.matched.length-1&&z(c.params,s.value.params)));function u(c={}){return Ke(c)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(l):Promise.resolve()}return{route:s,href:(0,n.Fl)((()=>s.value.href)),isActive:a,isExactActive:o,navigate:u}}const We=(0,n.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup(e,{slots:t}){const c=(0,i.qj)($e(e)),{options:s}=(0,n.f3)(Re),r=(0,n.Fl)((()=>({[Je(e.activeClass,s.linkActiveClass,"router-link-active")]:c.isActive,[Je(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:c.isExactActive})));return()=>{const i=t.default&&t.default(c);return e.custom?i:(0,n.h)("a",{"aria-current":c.isExactActive?e.ariaCurrentValue:null,href:c.href,onClick:c.navigate,class:r.value},i)}}}),Ge=We;function Ke(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const c in t){const n=t[c],i=e[c];if("string"===typeof n){if(n!==i)return!1}else if(!u(i)||i.length!==n.length||n.some(((e,t)=>e!==i[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,c)=>null!=e?e:null!=t?t:c,Xe=(0,n.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:c}){const s=(0,n.f3)(Fe),r=(0,n.Fl)((()=>e.route||s.value)),o=(0,n.f3)(Pe,0),l=(0,n.Fl)((()=>{let e=(0,i.SU)(o);const{matched:t}=r.value;let c;while((c=t[e])&&!c.components)e++;return e})),u=(0,n.Fl)((()=>r.value.matched[l.value]));(0,n.JJ)(Pe,(0,n.Fl)((()=>l.value+1))),(0,n.JJ)(Oe,u),(0,n.JJ)(Fe,r);const f=(0,i.iH)();return(0,n.YP)((()=>[f.value,u.value,e.name]),(([e,t,c],[n,i,s])=>{t&&(t.instances[c]=e,i&&i!==t&&e&&e===n&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&v(t,i)&&n||(t.enterCallbacks[c]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=r.value,s=e.name,o=u.value,l=o&&o.components[s];if(!l)return Ze(c.default,{Component:l,route:i});const h=o.props[s],d=h?!0===h?i.params:"function"===typeof h?h(i):h:null,p=e=>{e.component.isUnmounted&&(o.instances[s]=null)},m=(0,n.h)(l,a({},d,t,{onVnodeUnmounted:p,ref:f}));return Ze(c.default,{Component:m,route:i})||m}}});function Ze(e,t){if(!e)return null;const c=e(t);return 1===c.length?c[0]:c}const et=Xe;function tt(e){const t=ie(e.routes,e),c=e.parseQuery||Ee,r=e.stringifyQuery||Te,f=e.history;const h=Ue(),m=Ue(),v=Ue(),z=(0,i.XI)(B);let H=B;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=o.bind(null,(e=>""+e)),V=o.bind(null,Se),b=o.bind(null,Ae);function w(e,c){let n,i;return U(e)?(n=t.getRecordMatcher(e),i=c):i=e,t.addRoute(i,n)}function M(e){const c=t.getRecordMatcher(e);c&&t.removeRoute(c)}function L(){return t.getRoutes().map((e=>e.record))}function x(e){return!!t.getRecordMatcher(e)}function S(e,n){if(n=a({},n||z.value),"string"===typeof e){const i=d(c,e,n.path),s=t.resolve({path:i.path},n),r=f.createHref(i.fullPath);return a(i,s,{params:b(s.params),hash:Ae(i.hash),redirectedFrom:void 0,href:r})}let i;if("path"in e)i=a({},e,{path:d(c,e.path,n.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:V(e.params)}),n.params=V(n.params)}const s=t.resolve(i,n),o=e.hash||"";s.params=y(b(s.params));const l=p(r,a({},e,{hash:xe(o),path:s.path})),u=f.createHref(l);return a({fullPath:l,hash:o,query:r===Te?Ie(e.query):e.query||{}},s,{redirectedFrom:void 0,href:u})}function T(e){return"string"===typeof e?d(c,e,z.value.path):a({},e)}function I(e,t){if(H!==e)return $(8,{from:t,to:e})}function O(e){return D(e)}function P(e){return O(a(T(e),{replace:!0}))}function R(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:c}=t;let n="function"===typeof c?c(e):c;return"string"===typeof n&&(n=n.includes("?")||n.includes("#")?n=T(n):{path:n},n.params={}),a({query:e.query,hash:e.hash,params:"path"in n?{}:e.params},n)}}function D(e,t){const c=H=S(e),n=z.value,i=e.state,s=e.force,o=!0===e.replace,l=R(c);if(l)return D(a(T(l),{state:"object"===typeof l?a({},i,l.state):i,force:s,replace:o}),t||c);const u=c;let f;return u.redirectedFrom=t,!s&&g(r,n,c)&&(f=$(16,{to:u,from:n}),ce(n,n,!0,!1)),(f?Promise.resolve(f):j(u,n)).catch((e=>W(e)?W(e,2)?e:te(e):Z(e,u,n))).then((e=>{if(e){if(W(e,2))return D(a({replace:o},T(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||u)}else e=G(u,n,!0,o,i);return q(u,n,e),e}))}function F(e,t){const c=I(e,t);return c?Promise.reject(c):Promise.resolve()}function j(e,t){let c;const[n,i,s]=nt(e,t);c=je(n.reverse(),"beforeRouteLeave",e,t);for(const a of n)a.leaveGuards.forEach((n=>{c.push(Be(n,e,t))}));const r=F.bind(null,e,t);return c.push(r),ct(c).then((()=>{c=[];for(const n of h.list())c.push(Be(n,e,t));return c.push(r),ct(c)})).then((()=>{c=je(i,"beforeRouteUpdate",e,t);for(const n of i)n.updateGuards.forEach((n=>{c.push(Be(n,e,t))}));return c.push(r),ct(c)})).then((()=>{c=[];for(const n of e.matched)if(n.beforeEnter&&!t.matched.includes(n))if(u(n.beforeEnter))for(const i of n.beforeEnter)c.push(Be(i,e,t));else c.push(Be(n.beforeEnter,e,t));return c.push(r),ct(c)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),c=je(s,"beforeRouteEnter",e,t),c.push(r),ct(c)))).then((()=>{c=[];for(const n of m.list())c.push(Be(n,e,t));return c.push(r),ct(c)})).catch((e=>W(e,8)?e:Promise.reject(e)))}function q(e,t,c){for(const n of v.list())n(e,t,c)}function G(e,t,c,n,i){const r=I(e,t);if(r)return r;const o=t===B,l=s?history.state:{};c&&(n||o?f.replace(e.fullPath,a({scroll:o&&l&&l.scroll},i)):f.push(e.fullPath,i)),z.value=e,ce(e,t,c,o),te()}let K;function Y(){K||(K=f.listen(((e,t,c)=>{if(!ae.listening)return;const n=S(e),i=R(n);if(i)return void D(a(i,{replace:!0}),n).catch(l);H=n;const r=z.value;s&&A(N(r.fullPath,c.delta),_()),j(n,r).catch((e=>W(e,12)?e:W(e,2)?(D(e.to,n).then((e=>{W(e,20)&&!c.delta&&c.type===C.pop&&f.go(-1,!1)})).catch(l),Promise.reject()):(c.delta&&f.go(-c.delta,!1),Z(e,n,r)))).then((e=>{e=e||G(n,r,!1),e&&(c.delta&&!W(e,8)?f.go(-c.delta,!1):c.type===C.pop&&W(e,20)&&f.go(-1,!1)),q(n,r,e)})).catch(l)})))}let Q,J=Ue(),X=Ue();function Z(e,t,c){te(e);const n=X.list();return n.length?n.forEach((n=>n(e,t,c))):console.error(e),Promise.reject(e)}function ee(){return Q&&z.value!==B?Promise.resolve():new Promise(((e,t)=>{J.add([e,t])}))}function te(e){return Q||(Q=!e,Y(),J.list().forEach((([t,c])=>e?c(e):t())),J.reset()),e}function ce(t,c,i,r){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const o=!i&&E(N(t.fullPath,0))||(r||!i)&&history.state&&history.state.scroll||null;return(0,n.Y3)().then((()=>a(t,c,o))).then((e=>e&&k(e))).catch((e=>Z(e,t,c)))}const ne=e=>f.go(e);let se;const re=new Set,ae={currentRoute:z,listening:!0,addRoute:w,removeRoute:M,hasRoute:x,getRoutes:L,resolve:S,options:e,push:O,replace:P,go:ne,back:()=>ne(-1),forward:()=>ne(1),beforeEach:h.add,beforeResolve:m.add,afterEach:v.add,onError:X.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(z)}),s&&!se&&z.value===B&&(se=!0,O(f.location).catch((e=>{0})));const c={};for(const i in B)c[i]=(0,n.Fl)((()=>z.value[i]));e.provide(Re,t),e.provide(De,(0,i.qj)(c)),e.provide(Fe,z);const r=e.unmount;re.add(e),e.unmount=function(){re.delete(e),re.size<1&&(H=B,K&&K(),K=null,z.value=B,se=!1,Q=!1),r()}}};return ae}function ct(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function nt(e,t){const c=[],n=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let r=0;r<s;r++){const s=t.matched[r];s&&(e.matched.find((e=>v(e,s)))?n.push(s):c.push(s));const a=e.matched[r];a&&(t.matched.find((e=>v(e,a)))||i.push(a))}return[c,n,i]}}}]);
//# sourceMappingURL=chunk-vendors.7affaafe.js.map