"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3340],{33340:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var o=r(45395),n=r(20457),a=r(59361),i=r(78156),s=r.n(i);const l="availableProviders";function c(e){const{schema:t}=e,r=t.title,o=t.description,n=e.formContext.settings,a=n.get(l).user,c={...t.default};if(a)for(const e of Object.keys(c))c[e]=e in a?a[e]:-1;const[d,m]=(0,i.useState)(c);return s().createElement("div",null,s().createElement("fieldset",null,s().createElement("legend",null,r),s().createElement("p",{className:"field-description"},o),Object.keys(c).map((e=>s().createElement("div",{key:e,className:"form-group small-field"},s().createElement("div",null,s().createElement("h3",null," ",e),s().createElement("div",{className:"inputFieldWrapper"},s().createElement("input",{className:"form-control",type:"number",value:d[e],onChange:t=>{((e,t)=>{const r={...d,[e]:parseInt(t.target.value)};n.set(l,r).catch(console.error),m(r)})(e,t)}}))))))))}const d="@jupyterlab/completer-extension:manager",m={id:"@jupyterlab/completer-extension:base-service",description:"Adds context and kernel completion providers.",requires:[o.ICompletionProviderManager],autoStart:!0,activate:(e,t)=>{t.registerProvider(new o.ContextCompleterProvider),t.registerProvider(new o.KernelCompleterProvider)}},u={id:d,description:"Provides the completion provider manager.",requires:[n.ISettingRegistry],optional:[a.IFormRendererRegistry],provides:o.ICompletionProviderManager,autoStart:!0,activate:(e,t,r)=>{const n="availableProviders",a=new o.CompletionProviderManager,i=(e,t)=>{var r;const o=e.get(n),i=e.get("providerTimeout"),s=e.get("showDocumentationPanel"),l=e.get("autoCompletion");a.setTimeout(i.composite),a.setShowDocumentationPanel(s.composite),a.setContinuousHinting(l.composite);const c=null!==(r=o.user)&&void 0!==r?r:o.composite,d=Object.entries(null!=c?c:{}).filter((e=>e[1]>=0&&t.includes(e[0]))).sort((([,e],[,t])=>t-e)).map((e=>e[0]));a.activateProvider(d)};if(e.restored.then((()=>{const e=[...a.getProviders().entries()],r=e.map((([e,t])=>e));t.transform(d,{fetch:t=>{const r=t.schema.properties,o={};return e.forEach((([e,t],r)=>{var n;o[e]=null!==(n=t.rank)&&void 0!==n?n:10*(r+1)})),r[n].default=o,t}}),t.load(d).then((e=>{i(e,r),e.changed.connect((e=>{i(e,r)}))})).catch(console.error)})).catch(console.error),r){const e={fieldRenderer:e=>c(e)};r.addRenderer(`${d}.availableProviders`,e)}return a}},p=[u,m]}}]);