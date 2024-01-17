"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1950],{31950:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b,lineColItem:()=>I});var o=r(86883),i=r(8434),n=r(67993),a=r(49255),s=r(7201),d=r(94682),l=r(20457),c=r(59361),u=r(20998),g=r(89319),m=r.n(g),p=r(78156),h=r.n(p);const y="@jupyterlab/codemirror-extension:plugin",f={id:"@jupyterlab/codemirror-extension:languages",description:"Provides the CodeMirror languages registry.",provides:d.IEditorLanguageRegistry,optional:[a.ITranslator],activate:(e,t)=>{const o=new d.EditorLanguageRegistry;for(const e of d.EditorLanguageRegistry.getDefaultLanguages(t))o.addLanguage(e);return o.addLanguage({name:"ipythongfm",mime:"text/x-ipythongfm",load:async()=>{const[e,t]=await Promise.all([r.e(252).then(r.t.bind(r,252,23)),r.e(311).then(r.bind(r,60311))]);return e.markdown({base:e.markdownLanguage,codeLanguages:e=>o.findBest(e),extensions:[(0,d.parseMathIPython)(s.StreamLanguage.define(t.stexMath).parser)]})}}),o}},v={id:"@jupyterlab/codemirror-extension:themes",description:"Provides the CodeMirror theme registry",provides:d.IEditorThemeRegistry,optional:[a.ITranslator],activate:(e,t)=>{const r=new d.EditorThemeRegistry;for(const e of d.EditorThemeRegistry.getDefaultThemes(t))r.addTheme(e);return r}},E={id:"@jupyterlab/codemirror-extension:extensions",description:"Provides the CodeMirror extension factory registry.",provides:d.IEditorExtensionRegistry,requires:[d.IEditorThemeRegistry],optional:[a.ITranslator,l.ISettingRegistry,c.IFormRendererRegistry],activate:(e,t,r,o,i)=>{const n=new d.EditorExtensionRegistry;for(const e of d.EditorExtensionRegistry.getDefaultExtensions({themes:t,translator:r}))n.addExtension(e);if(o){const t=e=>{var t;n.baseConfiguration=null!==(t=e.get("defaultConfig").composite)&&void 0!==t?t:{}};Promise.all([o.load(y),e.restored]).then((([e])=>{t(e),e.changed.connect(t)})),null==i||i.addRenderer(`${y}.defaultConfig`,{fieldRenderer:e=>{const t=h().useMemo((()=>n.settingsSchema),[]),o={};for(const[e,r]of Object.entries(n.defaultConfiguration))void 0!==t[e]&&(o[e]=r);return h().createElement("div",{className:"jp-FormGroup-contentNormal"},h().createElement("h3",{className:"jp-FormGroup-fieldLabel jp-FormGroup-contentItem"},e.schema.title),e.schema.description&&h().createElement("div",{className:"jp-FormGroup-description"},e.schema.description),h().createElement(c.FormComponent,{schema:{title:e.schema.title,description:e.schema.description,type:"object",properties:t,additionalProperties:!1},validator:m(),formData:{...o,...e.formData},formContext:{defaultFormData:o},liveValidate:!0,onChange:t=>{var r;const i={};for(const[e,n]of Object.entries(null!==(r=t.formData)&&void 0!==r?r:{})){const t=o[e];void 0!==t&&u.JSONExt.deepEqual(n,t)||(i[e]=n)}e.onChange(i)},tagName:"div",translator:null!=r?r:a.nullTranslator}))}})}return n}},x={id:"@jupyterlab/codemirror-extension:binding",description:"Register the CodeMirror extension factory binding the editor and the shared model.",autoStart:!0,requires:[d.IEditorExtensionRegistry],activate:(e,t)=>{t.addExtension({name:"shared-model-binding",factory:e=>{var t;const r=e.model.sharedModel;return d.EditorExtensionRegistry.createImmutableExtension((0,d.ybinding)({ytext:r.ysource,undoManager:null!==(t=r.undoManager)&&void 0!==t?t:void 0}))}})}},R={id:"@jupyterlab/codemirror-extension:services",description:"Provides the service to instantiate CodeMirror editors.",provides:i.IEditorServices,requires:[d.IEditorLanguageRegistry,d.IEditorExtensionRegistry,d.IEditorThemeRegistry],optional:[a.ITranslator],activate:(e,t,r,o)=>({factoryService:new d.CodeMirrorEditorFactory({extensions:r,languages:t,translator:null!=o?o:a.nullTranslator}),mimeTypeService:new d.CodeMirrorMimeTypeService(t)})},I={id:"@jupyterlab/codemirror-extension:line-col-status",description:"Provides the code editor cursor position model.",autoStart:!0,requires:[a.ITranslator],optional:[o.ILabShell,n.IStatusBar],provides:i.IPositionModel,activate:(e,t,r,o)=>{const n=new i.LineCol(t),a=new Set;function s(e,t){Promise.all([...a].map((e=>e(t.newValue)))).then((e=>{var t;n.model.editor=null!==(t=e.filter((e=>null!==e))[0])&&void 0!==t?t:null})).catch((e=>{console.error("Get editors",e)}))}return o&&o.registerStatusItem(I.id,{item:n,align:"right",rank:2,isActive:()=>!!n.model.editor}),r&&r.currentChanged.connect(s),{addEditorProvider:t=>{a.add(t),e.shell.currentWidget&&s(e.shell,{newValue:e.shell.currentWidget,oldValue:null})},update:()=>{s(e.shell,{oldValue:e.shell.currentWidget,newValue:e.shell.currentWidget})}}}},b=[f,v,x,E,R,I]}}]);