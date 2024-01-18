"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1833],{31833:(e,t,i)=>{i.r(t),i.d(t,{EditorSyntaxStatus:()=>C,EditorTableOfContentsFactory:()=>b,FileEditor:()=>u,FileEditorAdapter:()=>s,FileEditorFactory:()=>p,FileEditorSearchProvider:()=>g,IEditorTracker:()=>U,LaTeXTableOfContentsFactory:()=>O,LaTeXTableOfContentsModel:()=>P,MarkdownTableOfContentsFactory:()=>S,MarkdownTableOfContentsModel:()=>A,PythonTableOfContentsFactory:()=>D,PythonTableOfContentsModel:()=>F,TabSpaceStatus:()=>T});var n=i(400),o=i(20998);class s extends n.WidgetLSPAdapter{constructor(e,t){const{docRegistry:i,...n}=t;super(e,n),this._readyDelegate=new o.PromiseDelegate,this.editor=e.content,this._docRegistry=i,this._virtualEditor=Object.freeze({getEditor:()=>this.editor.editor,ready:()=>Promise.resolve(this.editor.editor),reveal:()=>Promise.resolve(this.editor.editor)}),Promise.all([this.editor.context.ready,this.connectionManager.ready]).then((async()=>{await this.initOnceReady(),this._readyDelegate.resolve()})).catch(console.error)}get ready(){return this._readyDelegate.promise}get documentPath(){return this.widget.context.path}get mimeType(){var e;const t=this.editor.model.mimeType,i=Array.isArray(t)?null!==(e=t[0])&&void 0!==e?e:"text/plain":t,n=this.editor.context.contentsModel;return"text/plain"!=i?i:n?this._docRegistry.getFileTypeForModel(n).mimeTypes[0]:i}get languageFileExtension(){let e=this.documentPath.split(".");return e[e.length-1]}get ceEditor(){return this.editor.editor}get activeEditor(){return this._virtualEditor}get wrapperElement(){return this.widget.node}get path(){return this.widget.context.path}get editors(){var e,t;return[{ceEditor:this._virtualEditor,type:"code",value:null!==(t=null===(e=this.editor)||void 0===e?void 0:e.model.sharedModel.getSource())&&void 0!==t?t:""}]}dispose(){this.isDisposed||(this.editor.model.mimeTypeChanged.disconnect(this.reloadConnection),super.dispose())}createVirtualDocument(){return new n.VirtualDocument({language:this.language,foreignCodeExtractors:this.options.foreignCodeExtractorsManager,path:this.documentPath,fileExtension:this.languageFileExtension,standalone:!0,hasLspSupportedFile:!0})}getEditorIndexAt(e){return 0}getEditorIndex(e){return 0}getEditorWrapper(e){return this.wrapperElement}async initOnceReady(){this.initVirtual(),await this.connectDocument(this.virtualDocument,!1),this.editor.model.mimeTypeChanged.connect(this.reloadConnection,this)}}var r=i(56165),a=i(94682),d=i(8434),l=i(49358),c=i(59361),h=i(9267);class u extends h.Widget{constructor(e){super(),this._ready=new o.PromiseDelegate,this.addClass("jp-FileEditor");const t=this._context=e.context;this._mimeTypeService=e.mimeTypeService;const i=this._editorWidget=new d.CodeEditorWrapper({factory:e.factory,model:t.model,editorOptions:{config:u.defaultEditorConfig}});this._editorWidget.addClass("jp-FileEditorCodeWrapper"),this._editorWidget.node.dataset.jpCodeRunner="true",this._editorWidget.node.dataset.jpUndoer="true",this.editor=i.editor,this.model=i.model,t.ready.then((()=>{this._onContextReady()})),this._onPathChanged(),t.pathChanged.connect(this._onPathChanged,this),(this.layout=new h.StackedLayout).addWidget(i)}get context(){return this._context}get ready(){return this._ready.promise}handleEvent(e){this.model&&"mousedown"===e.type&&this._ensureFocus()}onAfterAttach(e){super.onAfterAttach(e),this.node.addEventListener("mousedown",this)}onBeforeDetach(e){this.node.removeEventListener("mousedown",this)}onActivateRequest(e){this._ensureFocus()}_ensureFocus(){this.editor.hasFocus()||this.editor.focus()}_onContextReady(){this.isDisposed||(this.editor.clearHistory(),this._ready.resolve(void 0))}_onPathChanged(){const e=this.editor,t=this._context.localPath;e.model.mimeType=this._mimeTypeService.getMimeTypeByFilePath(t)}}!function(e){e.defaultEditorConfig={lineNumbers:!0,scrollPastEnd:!0}}(u||(u={}));class p extends l.ABCWidgetFactory{constructor(e){super(e.factoryOptions),this._services=e.editorServices}createNewWidget(e){const t=this._services.factoryService.newDocumentEditor,i=new u({factory:e=>t(e),context:e,mimeTypeService:this._services.mimeTypeService});return i.title.icon=c.textEditorIcon,new l.DocumentWidget({content:i,context:e})}}class g extends a.EditorSearchProvider{constructor(e){super(),this.widget=e}get isReadOnly(){return this.editor.getOption("readOnly")}get replaceOptionsSupport(){return{preserveCase:!0}}get editor(){return this.widget.content.editor}get model(){return this.widget.content.model}async startQuery(e,t){await super.startQuery(e,t),await this.highlightNext(!0,{from:"selection-start",scroll:!1,select:!1})}static createNew(e,t){return new g(e)}static isApplicable(e){return e instanceof r.MainAreaWidget&&e.content instanceof u&&e.content.editor instanceof a.CodeMirrorEditor}getInitialQuery(){const e=this.editor;return e.state.sliceDoc(e.state.selection.main.from,e.state.selection.main.to)}}var m=i(67993),y=i(49255),f=i(78156),_=i.n(f);function v(e){return _().createElement(m.TextItem,{source:e.language,onClick:e.handleClick})}class C extends c.VDomRenderer{constructor(e){var t;super(new C.Model(e.languages)),this._handleClick=()=>{const e=new h.Menu({commands:this._commands});this._popup&&this._popup.dispose(),this.model.languages.getLanguages().sort(((e,t)=>{var i,n;const o=null!==(i=e.displayName)&&void 0!==i?i:e.name,s=null!==(n=t.displayName)&&void 0!==n?n:t.name;return o.localeCompare(s)})).forEach((t=>{var i;if(0===t.name.toLowerCase().indexOf("brainf"))return;const n={name:t.name,displayName:null!==(i=t.displayName)&&void 0!==i?i:t.name};e.addItem({command:"fileeditor:change-language",args:n})})),this._popup=(0,m.showPopup)({body:e,anchor:this,align:"left"})},this._popup=null,this._commands=e.commands,this.translator=null!==(t=e.translator)&&void 0!==t?t:y.nullTranslator;const i=this.translator.load("jupyterlab");this.addClass("jp-mod-highlighted"),this.title.caption=i.__("Change text editor syntax highlighting")}render(){return this.model?_().createElement(v,{language:this.model.language,handleClick:this._handleClick}):null}}function x(e){const t=(e.translator||y.nullTranslator).load("jupyterlab"),i="number"==typeof e.tabSpace?t.__("Spaces"):t.__("Tab Indent");return _().createElement(m.TextItem,{onClick:e.handleClick,source:"number"==typeof e.tabSpace?`${i}: ${e.tabSpace}`:i,title:t.__("Change the indentation…")})}!function(e){class t extends c.VDomModel{constructor(e){super(),this.languages=e,this._onMIMETypeChange=(e,t)=>{var i;const n=this._language,o=this.languages.findByMIME(t.newValue);this._language=null!==(i=null==o?void 0:o.name)&&void 0!==i?i:d.IEditorMimeTypeService.defaultMimeType,this._triggerChange(n,this._language)},this._language="",this._editor=null}get language(){return this._language}get editor(){return this._editor}set editor(e){var t;const i=this._editor;null!==i&&i.model.mimeTypeChanged.disconnect(this._onMIMETypeChange);const n=this._language;if(this._editor=e,null===this._editor)this._language="";else{const e=this.languages.findByMIME(this._editor.model.mimeType);this._language=null!==(t=null==e?void 0:e.name)&&void 0!==t?t:d.IEditorMimeTypeService.defaultMimeType,this._editor.model.mimeTypeChanged.connect(this._onMIMETypeChange)}this._triggerChange(n,this._language)}_triggerChange(e,t){e!==t&&this.stateChanged.emit(void 0)}}e.Model=t}(C||(C={}));class T extends c.VDomRenderer{constructor(e){super(new T.Model),this._popup=null,this._menu=e.menu,this.translator=e.translator||y.nullTranslator,this.addClass("jp-mod-highlighted")}render(){var e;if(null===(e=this.model)||void 0===e?void 0:e.indentUnit){const e="Tab"===this.model.indentUnit?null:parseInt(this.model.indentUnit,10);return _().createElement(x,{tabSpace:e,handleClick:()=>this._handleClick(),translator:this.translator})}return null}_handleClick(){const e=this._menu;this._popup&&this._popup.dispose(),e.aboutToClose.connect(this._menuClosed,this),this._popup=(0,m.showPopup)({body:e,anchor:this,align:"right"}),e.update()}_menuClosed(){this.removeClass("jp-mod-clicked")}}!function(e){class t extends c.VDomModel{get indentUnit(){return this._indentUnit}set indentUnit(e){e!==this._indentUnit&&(this._indentUnit=e,this.stateChanged.emit())}}e.Model=t}(T||(T={}));var w=i(16698);class b extends w.TableOfContentsFactory{createNew(e,t){const i=super.createNew(e,t),n=(t,i)=>{i&&e.content.editor.setCursorPosition({line:i.line,column:0})};return i.activeHeadingChanged.connect(n),e.disposed.connect((()=>{i.activeHeadingChanged.disconnect(n)})),i}}const E={part:1,chapter:1,section:1,subsection:2,subsubsection:3,paragraph:4,subparagraph:5},M=/^\s*\\(section|subsection|subsubsection){(.+)}/;class P extends w.TableOfContentsModel{get documentType(){return"latex"}get supportedOptions(){return["maximalDepth","numberHeaders"]}getHeadings(){if(!this.isActive)return Promise.resolve(null);const e=this.widget.content.model.sharedModel.getSource().split("\n"),t=new Array;let i=t.length;const n=new Array;for(let o=0;o<e.length;o++){const s=e[o].match(M);if(s){const e=E[s[1]];if(e<=this.configuration.maximalDepth){const r=w.TableOfContentsUtils.getPrefix(e,i,t,{...this.configuration,baseNumbering:1,numberingH1:!0});i=e,n.push({text:s[2],prefix:r,level:e,line:o})}}}return Promise.resolve(n)}}class O extends b{isApplicable(e){var t,i;if(super.isApplicable(e)){let n=null===(i=null===(t=e.content)||void 0===t?void 0:t.model)||void 0===i?void 0:i.mimeType;return n&&("text/x-latex"===n||"text/x-stex"===n)}return!1}_createNew(e,t){return new P(e,t)}}class A extends w.TableOfContentsModel{get documentType(){return"markdown"}getHeadings(){if(!this.isActive)return Promise.resolve(null);const e=this.widget.content.model.sharedModel.getSource(),t=w.TableOfContentsUtils.filterHeadings(w.TableOfContentsUtils.Markdown.getHeadings(e),{...this.configuration,numberHeaders:!1});return Promise.resolve(t)}}class S extends b{isApplicable(e){var t,i;if(super.isApplicable(e)){let n=null===(i=null===(t=e.content)||void 0===t?void 0:t.model)||void 0===i?void 0:i.mimeType;return n&&w.TableOfContentsUtils.Markdown.isMarkdown(n)}return!1}_createNew(e,t){return new A(e,t)}}let k;try{k=new RegExp("^\\s*(class |def |from |import )","d")}catch(e){k=new RegExp("^\\s*(class |def |from |import )")}class F extends w.TableOfContentsModel{get documentType(){return"python"}async getHeadings(){if(!this.isActive)return Promise.resolve(null);const e=this.widget.content.model.sharedModel.getSource().split("\n");let t=new Array,n=!1,o=1,s=-1;for(const r of e){let e;if(s++,k.flags.includes("d"))e=k.exec(r);else{const{default:t}=await i.e(2913).then(i.t.bind(i,32913,23));e=t(k,r)}if(e){const[i]=e.indices[1];1===o&&i>0&&(o=i);const a=["from ","import "].includes(e[1]);if(a&&n)continue;n=a;const d=1+i/o;if(d>this.configuration.maximalDepth)continue;t.push({text:r.slice(i),level:d,line:s})}}return Promise.resolve(t)}}class D extends b{isApplicable(e){var t,i;if(super.isApplicable(e)){let n=null===(i=null===(t=e.content)||void 0===t?void 0:t.model)||void 0===i?void 0:i.mimeType;return n&&("application/x-python-code"===n||"text/x-python"===n)}return!1}_createNew(e,t){return new F(e,t)}}const U=new o.Token("@jupyterlab/fileeditor:IEditorTracker","A widget tracker for file editors.\n  Use this if you want to be able to iterate over and interact with file editors\n  created by the application.")}}]);