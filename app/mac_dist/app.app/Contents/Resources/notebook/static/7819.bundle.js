"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7819],{57819:(t,e,r)=>{function n(t){return t.replace("-","_")}r.r(e),r.d(e,{Gettext:()=>s,ITranslator:()=>p,ITranslatorConnector:()=>_,TranslationManager:()=>d,TranslatorConnector:()=>g,nullTranslator:()=>a,requestTranslationsAPI:()=>h});class s{constructor(t){t=t||{},this._defaults={domain:"messages",locale:document.documentElement.getAttribute("lang")||"en",pluralFunc:function(t){return{nplurals:2,plural:1!=t?1:0}},contextDelimiter:String.fromCharCode(4),stringsPrefix:""},this._locale=(t.locale||this._defaults.locale).replace("_","-"),this._domain=n(t.domain||this._defaults.domain),this._contextDelimiter=t.contextDelimiter||this._defaults.contextDelimiter,this._stringsPrefix=t.stringsPrefix||this._defaults.stringsPrefix,this._pluralFuncs={},this._dictionary={},this._pluralForms={},t.messages&&(this._dictionary[this._domain]={},this._dictionary[this._domain][this._locale]=t.messages),t.pluralForms&&(this._pluralForms[this._locale]=t.pluralForms)}setContextDelimiter(t){this._contextDelimiter=t}getContextDelimiter(){return this._contextDelimiter}setLocale(t){this._locale=t.replace("_","-")}getLocale(){return this._locale}setDomain(t){this._domain=n(t)}getDomain(){return this._domain}setStringsPrefix(t){this._stringsPrefix=t}getStringsPrefix(){return this._stringsPrefix}static strfmt(t,...e){return t.replace(/%%/g,"%% ").replace(/%(\d+)/g,(function(t,r){return e[r-1]})).replace(/%% /g,"%")}loadJSON(t,e){if(!t[""]||!t[""].language||!t[""].pluralForms)throw new Error(`Wrong jsonData, it must have an empty key ("") with "language" and "pluralForms" information: ${t}`);e=n(e);let r=t[""],s=JSON.parse(JSON.stringify(t));delete s[""],this.setMessages(e||this._defaults.domain,r.language,s,r.pluralForms)}__(t,...e){return this.gettext(t,...e)}_n(t,e,r,...n){return this.ngettext(t,e,r,...n)}_p(t,e,...r){return this.pgettext(t,e,...r)}_np(t,e,r,n,...s){return this.npgettext(t,e,r,n,...s)}gettext(t,...e){return this.dcnpgettext("","",t,"",0,...e)}ngettext(t,e,r,...n){return this.dcnpgettext("","",t,e,r,...n)}pgettext(t,e,...r){return this.dcnpgettext("",t,e,"",0,...r)}npgettext(t,e,r,n,...s){return this.dcnpgettext("",t,e,r,n,...s)}dcnpgettext(t,e,r,s,a,...i){let l;t=n(t)||this._domain;let o=e?e+this._contextDelimiter+r:r,u={pluralForm:!1},c=!1,h=this._locale,_=this.expandLocale(this._locale);for(let e in _)if(h=_[e],c=this._dictionary[t]&&this._dictionary[t][h]&&this._dictionary[t][h][o],c=s?c&&this._dictionary[t][h][o].length>1:c&&1==this._dictionary[t][h][o].length,c){u.locale=h;break}if(c?l=this._dictionary[t][h][o]:(l=[r],u.pluralFunc=this._defaults.pluralFunc),!s)return this.t(l,a,u,...i);u.pluralForm=!0;let g=c?l:[r,s];return this.t(g,a,u,...i)}expandLocale(t){let e=[t],r=t.lastIndexOf("-");for(;r>0;)t=t.slice(0,r),e.push(t),r=t.lastIndexOf("-");return e}getPluralFunc(t){if(!new RegExp("^\\s*nplurals\\s*=\\s*[0-9]+\\s*;\\s*plural\\s*=\\s*(?:\\s|[-\\?\\|&=!<>+*/%:;n0-9_()])+").test(t))throw new Error(s.strfmt('The plural form "%1" is not valid',t));return new Function("n","let plural, nplurals; "+t+" return { nplurals: nplurals, plural: (plural === true ? 1 : (plural ? plural : 0)) };")}removeContext(t){return-1!==t.indexOf(this._contextDelimiter)?t.split(this._contextDelimiter)[1]:t}t(t,e,r,...n){if(!r.pluralForm)return this._stringsPrefix+s.strfmt(this.removeContext(t[0]),...n);let a;return r.pluralFunc?a=r.pluralFunc(e):(this._pluralFuncs[r.locale||""]||(this._pluralFuncs[r.locale||""]=this.getPluralFunc(this._pluralForms[r.locale||""])),a=this._pluralFuncs[r.locale||""](e)),(void 0===!a.plural||a.plural>a.nplurals||t.length<=a.plural)&&(a.plural=0),this._stringsPrefix+s.strfmt(this.removeContext(t[a.plural]),...[e].concat(n))}setMessages(t,e,r,s){t=n(t),s&&(this._pluralForms[e]=s),this._dictionary[t]||(this._dictionary[t]={}),this._dictionary[t][e]=r}}const a=new class{constructor(t){this.languageCode="en",this._languageBundle=t}load(t){return this._languageBundle}}(new class{__(t,...e){return this.gettext(t,...e)}_n(t,e,r,...n){return this.ngettext(t,e,r,...n)}_p(t,e,...r){return this.pgettext(t,e,...r)}_np(t,e,r,n,...s){return this.npgettext(t,e,r,n,...s)}gettext(t,...e){return s.strfmt(t,...e)}ngettext(t,e,r,...n){return s.strfmt(1==r?t:e,...[r].concat(n))}pgettext(t,e,...r){return s.strfmt(e,...r)}npgettext(t,e,r,n,...s){return this.ngettext(e,r,n,...s)}dcnpgettext(t,e,r,n,s,...a){return this.ngettext(r,n,s,...a)}});var i=r(18245),l=r(20998),o=r(85421),u=r(27038);const c="api/translations";async function h(t="",e="",r={},n=void 0){const s=null!=n?n:u.ServerConnection.makeSettings();t=t||`${s.appUrl}/${c}`;const a=o.URLExt.join(s.baseUrl,t,e);let i;try{i=await u.ServerConnection.makeRequest(a,r,s)}catch(t){throw new u.ServerConnection.NetworkError(t)}let l=await i.text();if(l.length>0)try{l=JSON.parse(l)}catch(t){console.error("Not a JSON response body.",i)}if(!i.ok)throw new u.ServerConnection.ResponseError(i,l.message||l);return l}const _=new l.Token("@jupyterlab/translation:ITranslatorConnector","A service to connect to the server translation endpoint.");class g extends i.DataConnector{constructor(t="",e){super(),this._translationsUrl=t,this._serverSettings=e}async fetch(t){return h(this._translationsUrl,t.language,{},this._serverSettings)}}const p=new l.Token("@jupyterlab/translation:ITranslator","A service to translate strings.");class d{constructor(t="",e,r){this._domainData={},this._translationBundles={},this._connector=new g(t,r),this._stringsPrefix=e||"",this._englishBundle=new s({stringsPrefix:this._stringsPrefix})}get languageCode(){return this._currentLocale}async fetch(t){var e,r,n,s;if(this._languageData=await this._connector.fetch({language:t}),this._languageData&&"default"===t)try{for(const t of Object.values(null!==(e=this._languageData.data)&&void 0!==e?e:{})){this._currentLocale=t[""].language.replace("_","-");break}}catch(t){this._currentLocale="en"}else this._currentLocale=t;this._domainData=null!==(n=null===(r=this._languageData)||void 0===r?void 0:r.data)&&void 0!==n?n:{};const a=null===(s=this._languageData)||void 0===s?void 0:s.message;a&&"en"!==t&&console.warn(a)}load(t){if(this._domainData){if("en"==this._currentLocale)return this._englishBundle;if(!((t=n(t))in this._translationBundles)){let e=new s({domain:t,locale:this._currentLocale,stringsPrefix:this._stringsPrefix});if(t in this._domainData){let r=this._domainData[t][""];"plural_forms"in r&&(r.pluralForms=r.plural_forms,delete r.plural_forms,this._domainData[t][""]=r),e.loadJSON(this._domainData[t],t)}this._translationBundles[t]=e}return this._translationBundles[t]}return this._englishBundle}}}}]);