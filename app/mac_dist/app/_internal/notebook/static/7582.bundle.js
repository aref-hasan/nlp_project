"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7582],{9103:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractFindMath=void 0;var n=r(4498),o=function(){function t(t){var e=this.constructor;this.options=(0,n.userOptions)((0,n.defaultOptions)({},e.OPTIONS),t)}return t.OPTIONS={},t}();e.AbstractFindMath=o},76771:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractInputJax=void 0;var n=r(4498),o=r(18341),i=function(){function t(t){void 0===t&&(t={}),this.adaptor=null,this.mmlFactory=null;var e=this.constructor;this.options=(0,n.userOptions)((0,n.defaultOptions)({},e.OPTIONS),t),this.preFilters=new o.FunctionList,this.postFilters=new o.FunctionList}return Object.defineProperty(t.prototype,"name",{get:function(){return this.constructor.NAME},enumerable:!1,configurable:!0}),t.prototype.setAdaptor=function(t){this.adaptor=t},t.prototype.setMmlFactory=function(t){this.mmlFactory=t},t.prototype.initialize=function(){},t.prototype.reset=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},Object.defineProperty(t.prototype,"processStrings",{get:function(){return!0},enumerable:!1,configurable:!0}),t.prototype.findMath=function(t,e){return[]},t.prototype.executeFilters=function(t,e,r,n){var o={math:e,document:r,data:n};return t.execute(o),o.data},t.NAME="generic",t.OPTIONS={},t}();e.AbstractInputJax=i},21605:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.newState=e.STATE=e.AbstractMathItem=e.protoItem=void 0,e.protoItem=function(t,e,r,n,o,i,a){return void 0===a&&(a=null),{open:t,math:e,close:r,n,start:{n:o},end:{n:i},display:a}};var r=function(){function t(t,r,n,o,i){void 0===n&&(n=!0),void 0===o&&(o={i:0,n:0,delim:""}),void 0===i&&(i={i:0,n:0,delim:""}),this.root=null,this.typesetRoot=null,this.metrics={},this.inputData={},this.outputData={},this._state=e.STATE.UNPROCESSED,this.math=t,this.inputJax=r,this.display=n,this.start=o,this.end=i,this.root=null,this.typesetRoot=null,this.metrics={},this.inputData={},this.outputData={}}return Object.defineProperty(t.prototype,"isEscaped",{get:function(){return null===this.display},enumerable:!1,configurable:!0}),t.prototype.render=function(t){t.renderActions.renderMath(this,t)},t.prototype.rerender=function(t,r){void 0===r&&(r=e.STATE.RERENDER),this.state()>=r&&this.state(r-1),t.renderActions.renderMath(this,t,r)},t.prototype.convert=function(t,r){void 0===r&&(r=e.STATE.LAST),t.renderActions.renderConvert(this,t,r)},t.prototype.compile=function(t){this.state()<e.STATE.COMPILED&&(this.root=this.inputJax.compile(this,t),this.state(e.STATE.COMPILED))},t.prototype.typeset=function(t){this.state()<e.STATE.TYPESET&&(this.typesetRoot=t.outputJax[this.isEscaped?"escaped":"typeset"](this,t),this.state(e.STATE.TYPESET))},t.prototype.updateDocument=function(t){},t.prototype.removeFromDocument=function(t){void 0===t&&(t=!1)},t.prototype.setMetrics=function(t,e,r,n,o){this.metrics={em:t,ex:e,containerWidth:r,lineWidth:n,scale:o}},t.prototype.state=function(t,r){return void 0===t&&(t=null),void 0===r&&(r=!1),null!=t&&(t<e.STATE.INSERTED&&this._state>=e.STATE.INSERTED&&this.removeFromDocument(r),t<e.STATE.TYPESET&&this._state>=e.STATE.TYPESET&&(this.outputData={}),t<e.STATE.COMPILED&&this._state>=e.STATE.COMPILED&&(this.inputData={}),this._state=t),this._state},t.prototype.reset=function(t){void 0===t&&(t=!1),this.state(e.STATE.UNPROCESSED,t)},t}();e.AbstractMathItem=r,e.STATE={UNPROCESSED:0,FINDMATH:10,COMPILED:20,CONVERT:100,METRICS:110,RERENDER:125,TYPESET:150,INSERTED:200,LAST:1e4},e.newState=function(t,r){if(t in e.STATE)throw Error("State "+t+" already exists");e.STATE[t]=r}},27582:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},a=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.TeX=void 0;var u=r(76771),l=r(4498),c=r(33519),p=s(r(9514)),f=s(r(53972)),d=s(r(94032)),h=s(r(54420)),y=s(r(55661)),v=r(75723),m=r(63401);r(32742);var b=function(t){function e(r){void 0===r&&(r={});var n=this,o=a((0,l.separateOptions)(r,e.OPTIONS,c.FindTeX.OPTIONS),3),i=o[0],s=o[1],u=o[2];(n=t.call(this,s)||this).findTeX=n.options.FindTeX||new c.FindTeX(u);var f=n.options.packages,d=n.configuration=e.configure(f),h=n._parseOptions=new y.default(d,[n.options,v.TagsFactory.OPTIONS]);return(0,l.userOptions)(h.options,i),d.config(n),e.tags(h,d),n.postFilters.add(p.default.cleanSubSup,-6),n.postFilters.add(p.default.setInherited,-5),n.postFilters.add(p.default.moveLimits,-4),n.postFilters.add(p.default.cleanStretchy,-3),n.postFilters.add(p.default.cleanAttributes,-2),n.postFilters.add(p.default.combineRelations,-1),n}return o(e,t),e.configure=function(t){var e=new m.ParserConfiguration(t,["tex"]);return e.init(),e},e.tags=function(t,e){v.TagsFactory.addTags(e.tags),v.TagsFactory.setDefault(t.options.tags),t.tags=v.TagsFactory.getDefault(),t.tags.configuration=t},e.prototype.setMmlFactory=function(e){t.prototype.setMmlFactory.call(this,e),this._parseOptions.nodeFactory.setMmlFactory(e)},Object.defineProperty(e.prototype,"parseOptions",{get:function(){return this._parseOptions},enumerable:!1,configurable:!0}),e.prototype.reset=function(t){void 0===t&&(t=0),this.parseOptions.tags.reset(t)},e.prototype.compile=function(t,e){this.parseOptions.clear(),this.executeFilters(this.preFilters,t,e,this.parseOptions);var r,n,o=t.display;this.latex=t.math,this.parseOptions.tags.startEquation(t);try{var i=new d.default(this.latex,{display:o,isInner:!1},this.parseOptions);r=i.mml(),n=i.stack.global}catch(t){if(!(t instanceof h.default))throw t;this.parseOptions.error=!0,r=this.options.formatError(this,t)}return r=this.parseOptions.nodeFactory.create("node","math",[r]),(null==n?void 0:n.indentalign)&&f.default.setAttribute(r,"indentalign",n.indentalign),o&&f.default.setAttribute(r,"display","block"),this.parseOptions.tags.finishEquation(t),this.parseOptions.root=r,this.executeFilters(this.postFilters,t,e,this.parseOptions),this.mathNode=this.parseOptions.root,this.mathNode},e.prototype.findMath=function(t){return this.findTeX.findMath(t)},e.prototype.formatError=function(t){var e=t.message.replace(/\n.*/,"");return this.parseOptions.nodeFactory.create("error",e,t.id,this.latex)},e.NAME="TeX",e.OPTIONS=i(i({},u.AbstractInputJax.OPTIONS),{FindTeX:null,packages:["base"],digits:/^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,maxBuffer:5120,formatError:function(t,e){return t.formatError(e)}}),e}(u.AbstractInputJax);e.TeX=b},9514:function(t,e,r){var n=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i,a=r(83045),s=o(r(53972));!function(t){t.cleanStretchy=function(t){var e,r,o=t.data;try{for(var i=n(o.getList("fixStretchy")),a=i.next();!a.done;a=i.next()){var u=a.value;if(s.default.getProperty(u,"fixStretchy")){var l=s.default.getForm(u);l&&l[3]&&l[3].stretchy&&s.default.setAttribute(u,"stretchy",!1);var c=u.parent;if(!(s.default.getTexClass(u)||l&&l[2])){var p=o.nodeFactory.create("node","TeXAtom",[u]);c.replaceChild(p,u),p.inheritAttributesFrom(u)}s.default.removeProperties(u,"fixStretchy")}}}catch(t){e={error:t}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}},t.cleanAttributes=function(t){t.data.root.walkTree((function(t,e){var r,o,i=t.attributes;if(i){var a=new Set((i.get("mjx-keep-attrs")||"").split(/ /));delete i.getAllAttributes()["mjx-keep-attrs"];try{for(var s=n(i.getExplicitNames()),u=s.next();!u.done;u=s.next()){var l=u.value;a.has(l)||i.attributes[l]!==t.attributes.getInherited(l)||delete i.attributes[l]}}catch(t){r={error:t}}finally{try{u&&!u.done&&(o=s.return)&&o.call(s)}finally{if(r)throw r.error}}}}),{})},t.combineRelations=function(t){var o,i,u,l,c=[];try{for(var p=n(t.data.getList("mo")),f=p.next();!f.done;f=p.next()){var d=f.value;if(!d.getProperty("relationsCombined")&&d.parent&&(!d.parent||s.default.isType(d.parent,"mrow"))&&s.default.getTexClass(d)===a.TEXCLASS.REL){for(var h=d.parent,y=void 0,v=h.childNodes,m=v.indexOf(d)+1,b=s.default.getProperty(d,"variantForm");m<v.length&&(y=v[m])&&s.default.isType(y,"mo")&&s.default.getTexClass(y)===a.TEXCLASS.REL;){if(b!==s.default.getProperty(y,"variantForm")||!r(d,y)){null==d.attributes.getExplicit("rspace")&&s.default.setAttribute(d,"rspace","0pt"),null==y.attributes.getExplicit("lspace")&&s.default.setAttribute(y,"lspace","0pt");break}s.default.appendChildren(d,s.default.getChildren(y)),e(["stretchy","rspace"],d,y);try{for(var g=(u=void 0,n(y.getPropertyNames())),T=g.next();!T.done;T=g.next()){var E=T.value;d.setProperty(E,y.getProperty(E))}}catch(t){u={error:t}}finally{try{T&&!T.done&&(l=g.return)&&l.call(g)}finally{if(u)throw u.error}}v.splice(m,1),c.push(y),y.parent=null,y.setProperty("relationsCombined",!0)}d.attributes.setInherited("form",d.getForms()[0])}}}catch(t){o={error:t}}finally{try{f&&!f.done&&(i=p.return)&&i.call(p)}finally{if(o)throw o.error}}t.data.removeFromList("mo",c)};var e=function(t,e,r){var n=e.attributes,o=r.attributes;t.forEach((function(t){var e=o.getExplicit(t);null!=e&&n.set(t,e)}))},r=function(t,e){var r,o,i=function(t,e){return t.getExplicitNames().filter((function(r){return r!==e&&("stretchy"!==r||t.getExplicit("stretchy"))}))},a=t.attributes,s=e.attributes,u=i(a,"lspace"),l=i(s,"rspace");if(u.length!==l.length)return!1;try{for(var c=n(u),p=c.next();!p.done;p=c.next()){var f=p.value;if(a.getExplicit(f)!==s.getExplicit(f))return!1}}catch(t){r={error:t}}finally{try{p&&!p.done&&(o=c.return)&&o.call(c)}finally{if(r)throw r.error}}return!0},o=function(t,e,r){var o,i,a=[];try{for(var u=n(t.getList("m"+e+r)),l=u.next();!l.done;l=u.next()){var c=l.value,p=c.childNodes;if(!p[c[e]]||!p[c[r]]){var f=c.parent,d=p[c[e]]?t.nodeFactory.create("node","m"+e,[p[c.base],p[c[e]]]):t.nodeFactory.create("node","m"+r,[p[c.base],p[c[r]]]);s.default.copyAttributes(c,d),f?f.replaceChild(d,c):t.root=d,a.push(c)}}}catch(t){o={error:t}}finally{try{l&&!l.done&&(i=u.return)&&i.call(u)}finally{if(o)throw o.error}}t.removeFromList("m"+e+r,a)};t.cleanSubSup=function(t){var e=t.data;e.error||(o(e,"sub","sup"),o(e,"under","over"))};var i=function(t,e,r){var o,i,a=[];try{for(var u=n(t.getList(e)),l=u.next();!l.done;l=u.next()){var c=l.value;if(!c.attributes.get("displaystyle")){var p=c.childNodes[c.base],f=p.coreMO();if(p.getProperty("movablelimits")&&!f.attributes.getExplicit("movablelimits")){var d=t.nodeFactory.create("node",r,c.childNodes);s.default.copyAttributes(c,d),c.parent?c.parent.replaceChild(d,c):t.root=d,a.push(c)}}}}catch(t){o={error:t}}finally{try{l&&!l.done&&(i=u.return)&&i.call(u)}finally{if(o)throw o.error}}t.removeFromList(e,a)};t.moveLimits=function(t){var e=t.data;i(e,"munderover","msubsup"),i(e,"munder","msub"),i(e,"mover","msup")},t.setInherited=function(t){t.data.root.setInheritedAttributes({},t.math.display,0,!1)}}(i||(i={})),e.default=i},33519:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a};Object.defineProperty(e,"__esModule",{value:!0}),e.FindTeX=void 0;var a=r(9103),s=r(55089),u=r(21605),l=function(t){function e(e){var r=t.call(this,e)||this;return r.getPatterns(),r}return o(e,t),e.prototype.getPatterns=function(){var t=this,e=this.options,r=[],n=[],o=[];this.end={},this.env=this.sub=0;var i=1;e.inlineMath.forEach((function(e){return t.addPattern(r,e,!1)})),e.displayMath.forEach((function(e){return t.addPattern(r,e,!0)})),r.length&&n.push(r.sort(s.sortLength).join("|")),e.processEnvironments&&(n.push("\\\\begin\\s*\\{([^}]*)\\}"),this.env=i,i++),e.processEscapes&&o.push("\\\\([\\\\$])"),e.processRefs&&o.push("(\\\\(?:eq)?ref\\s*\\{[^}]*\\})"),o.length&&(n.push("("+o.join("|")+")"),this.sub=i),this.start=new RegExp(n.join("|"),"g"),this.hasPatterns=n.length>0},e.prototype.addPattern=function(t,e,r){var n=i(e,2),o=n[0],a=n[1];t.push((0,s.quotePattern)(o)),this.end[o]=[a,r,this.endPattern(a)]},e.prototype.endPattern=function(t,e){return new RegExp((e||(0,s.quotePattern)(t))+"|\\\\(?:[a-zA-Z]|.)|[{}]","g")},e.prototype.findEnd=function(t,e,r,n){for(var o,a=i(n,3),s=a[0],l=a[1],c=a[2],p=c.lastIndex=r.index+r[0].length,f=0;o=c.exec(t);){if((o[1]||o[0])===s&&0===f)return(0,u.protoItem)(r[0],t.substr(p,o.index-p),o[0],e,r.index,o.index+o[0].length,l);"{"===o[0]?f++:"}"===o[0]&&f&&f--}return null},e.prototype.findMathInString=function(t,e,r){var n,o;for(this.start.lastIndex=0;n=this.start.exec(r);){if(void 0!==n[this.env]&&this.env){var i="\\\\end\\s*(\\{"+(0,s.quotePattern)(n[this.env])+"\\})";(o=this.findEnd(r,e,n,["{"+n[this.env]+"}",!0,this.endPattern(null,i)]))&&(o.math=o.open+o.math+o.close,o.open=o.close="")}else if(void 0!==n[this.sub]&&this.sub){var a=n[this.sub];i=n.index+n[this.sub].length,o=2===a.length?(0,u.protoItem)("",a.substr(1),"",e,n.index,i):(0,u.protoItem)("",a,"",e,n.index,i,!1)}else o=this.findEnd(r,e,n,this.end[n[0]]);o&&(t.push(o),this.start.lastIndex=o.end.n)}},e.prototype.findMath=function(t){var e=[];if(this.hasPatterns)for(var r=0,n=t.length;r<n;r++)this.findMathInString(e,r,t[r]);return e},e.OPTIONS={inlineMath:[["\\(","\\)"]],displayMath:[["$$","$$"],["\\[","\\]"]],processEscapes:!0,processEnvironments:!0,processRefs:!0},e}(a.AbstractFindMath);e.FindTeX=l}}]);