"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[409],{40409:(e,n,t)=>{t.r(n),t.d(n,{Signal:()=>o,Stream:()=>r});var i,c=t(33625),s=t(20998);class o{constructor(e){this.sender=e}connect(e,n){return i.connect(this,e,n)}disconnect(e,n){return i.disconnect(this,e,n)}emit(e){i.emit(this,e)}}!function(e){e.disconnectBetween=function(e,n){i.disconnectBetween(e,n)},e.disconnectSender=function(e){i.disconnectSender(e)},e.disconnectReceiver=function(e){i.disconnectReceiver(e)},e.disconnectAll=function(e){i.disconnectAll(e)},e.clearData=function(e){i.disconnectAll(e)},e.getExceptionHandler=function(){return i.exceptionHandler},e.setExceptionHandler=function(e){let n=i.exceptionHandler;return i.exceptionHandler=e,n}}(o||(o={}));class r extends o{constructor(){super(...arguments),this._pending=new s.PromiseDelegate}async*[Symbol.asyncIterator](){let e=this._pending;for(;;)try{const{args:n,next:t}=await e.promise;e=t,yield n}catch(e){return}}emit(e){const n=this._pending,t=this._pending=new s.PromiseDelegate;n.resolve({args:e,next:t}),super.emit(e)}stop(){this._pending.promise.catch((()=>{})),this._pending.reject("stop"),this._pending=new s.PromiseDelegate}}!function(e){function n(e){let n=i.get(e);if(n&&0!==n.length){for(const e of n){if(!e.signal)continue;let n=e.thisArg||e.slot;e.signal=null,u(s.get(n))}u(n)}}function t(e){let n=s.get(e);if(n&&0!==n.length){for(const e of n){if(!e.signal)continue;let n=e.signal.sender;e.signal=null,u(i.get(n))}u(n)}}e.exceptionHandler=e=>{console.error(e)},e.connect=function(e,n,t){t=t||void 0;let c=i.get(e.sender);if(c||(c=[],i.set(e.sender,c)),l(c,e,n,t))return!1;let o=t||n,r=s.get(o);r||(r=[],s.set(o,r));let a={signal:e,slot:n,thisArg:t};return c.push(a),r.push(a),!0},e.disconnect=function(e,n,t){t=t||void 0;let c=i.get(e.sender);if(!c||0===c.length)return!1;let o=l(c,e,n,t);if(!o)return!1;let r=t||n,a=s.get(r);return o.signal=null,u(c),u(a),!0},e.disconnectBetween=function(e,n){let t=i.get(e);if(!t||0===t.length)return;let c=s.get(n);if(c&&0!==c.length){for(const n of c)n.signal&&n.signal.sender===e&&(n.signal=null);u(t),u(c)}},e.disconnectSender=n,e.disconnectReceiver=t,e.disconnectAll=function(e){n(e),t(e)},e.emit=function(e,n){let t=i.get(e.sender);if(t&&0!==t.length)for(let i=0,c=t.length;i<c;++i){let c=t[i];c.signal===e&&a(c,n)}};const i=new WeakMap,s=new WeakMap,o=new Set,r="function"==typeof requestAnimationFrame?requestAnimationFrame:setImmediate;function l(e,n,t,i){return(0,c.find)(e,(e=>e.signal===n&&e.slot===t&&e.thisArg===i))}function a(n,t){let{signal:i,slot:c,thisArg:s}=n;try{c.call(s,i.sender,t)}catch(n){e.exceptionHandler(n)}}function u(e){0===o.size&&r(d),o.add(e)}function d(){o.forEach(g),o.clear()}function g(e){c.ArrayExt.removeAllWhere(e,f)}function f(e){return null===e.signal}}(i||(i={}))}}]);