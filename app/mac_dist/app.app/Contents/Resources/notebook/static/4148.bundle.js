"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4148],{64148:(e,t,r)=>{function n(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}r.r(t),r.d(t,{webIDL:()=>D});var a=["Clamp","Constructor","EnforceRange","Exposed","ImplicitThis","Global","PrimaryGlobal","LegacyArrayClass","LegacyUnenumerableNamedProperties","LenientThis","NamedConstructor","NewObject","NoInterfaceObject","OverrideBuiltins","PutForwards","Replaceable","SameObject","TreatNonObjectAsNull","TreatNullAs","EmptyString","Unforgeable","Unscopeable"],i=n(a),c=["unsigned","short","long","unrestricted","float","double","boolean","byte","octet","Promise","ArrayBuffer","DataView","Int8Array","Int16Array","Int32Array","Uint8Array","Uint16Array","Uint32Array","Uint8ClampedArray","Float32Array","Float64Array","ByteString","DOMString","USVString","sequence","object","RegExp","Error","DOMException","FrozenArray","any","void"],o=n(c),l=["attribute","callback","const","deleter","dictionary","enum","getter","implements","inherit","interface","iterable","legacycaller","maplike","partial","required","serializer","setlike","setter","static","stringifier","typedef","optional","readonly","or"],m=n(l),s=["true","false","Infinity","NaN","null"],u=n(s),f=n(["callback","dictionary","enum","interface"]),d=n(["typedef"]),y=/^[:<=>?]/,b=/^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/,p=/^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/,h=/^_?[A-Za-z][0-9A-Z_a-z-]*/,A=/^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/,g=/^"[^"]*"/,k=/^\/\*.*?\*\//,E=/^\/\*.*/,T=/^.*?\*\//;const D={name:"webidl",startState:function(){return{inComment:!1,lastToken:"",startDef:!1,endDef:!1}},token:function(e,t){var r=function(e,t){if(e.eatSpace())return null;if(t.inComment)return e.match(T)?(t.inComment=!1,"comment"):(e.skipToEnd(),"comment");if(e.match("//"))return e.skipToEnd(),"comment";if(e.match(k))return"comment";if(e.match(E))return t.inComment=!0,"comment";if(e.match(/^-?[0-9\.]/,!1)&&(e.match(b)||e.match(p)))return"number";if(e.match(g))return"string";if(t.startDef&&e.match(h))return"def";if(t.endDef&&e.match(A))return t.endDef=!1,"def";if(e.match(m))return"keyword";if(e.match(o)){var r=t.lastToken,n=(e.match(/^\s*(.+?)\b/,!1)||[])[1];return":"===r||"implements"===r||"implements"===n||"="===n?"builtin":"type"}return e.match(i)?"builtin":e.match(u)?"atom":e.match(h)?"variable":e.match(y)?"operator":(e.next(),null)}(e,t);if(r){var n=e.current();t.lastToken=n,"keyword"===r?(t.startDef=f.test(n),t.endDef=t.endDef||d.test(n)):t.startDef=!1}return r},languageData:{autocomplete:a.concat(c).concat(l).concat(s)}}}}]);