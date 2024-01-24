"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7391],{77391:(e,t,i)=>{i.r(t),i.d(t,{CodeEditor:()=>s,CodeEditorWrapper:()=>O,CodeViewerWidget:()=>b,IEditorMimeTypeService:()=>m,IEditorServices:()=>f,IPositionModel:()=>N,JSONEditor:()=>u,LineCol:()=>y});var s,o=i(69688),n=i(97031),r=i(81997);!function(e){e.Model=class{constructor(e={}){var t,i;this.standaloneModel=!1,this._isDisposed=!1,this._selections=new n.ObservableMap,this._mimeType="text/plain",this._mimeTypeChanged=new r.Signal(this),this.standaloneModel=void 0===e.sharedModel,this.sharedModel=null!==(t=e.sharedModel)&&void 0!==t?t:new o.YFile,this._mimeType=null!==(i=e.mimeType)&&void 0!==i?i:"text/plain"}get mimeTypeChanged(){return this._mimeTypeChanged}get selections(){return this._selections}get mimeType(){return this._mimeType}set mimeType(e){const t=this.mimeType;t!==e&&(this._mimeType=e,this._mimeTypeChanged.emit({name:"mimeType",oldValue:t,newValue:e}))}get isDisposed(){return this._isDisposed}dispose(){this._isDisposed||(this._isDisposed=!0,this._selections.dispose(),this.standaloneModel&&this.sharedModel.dispose(),r.Signal.clearData(this))}}}(s||(s={}));var a=i(49255),d=i(59361),h=i(20998),l=i(9267);const c="jp-mod-error";class u extends l.Widget{constructor(e){super(),this._dataDirty=!1,this._inputDirty=!1,this._source=null,this._originalValue=h.JSONExt.emptyObject,this._changeGuard=!1,this.translator=e.translator||a.nullTranslator,this._trans=this.translator.load("jupyterlab"),this.addClass("jp-JSONEditor"),this.headerNode=document.createElement("div"),this.headerNode.className="jp-JSONEditor-header",this.revertButtonNode=d.undoIcon.element({tag:"span",title:this._trans.__("Revert changes to data")}),this.commitButtonNode=d.checkIcon.element({tag:"span",title:this._trans.__("Commit changes to data"),marginLeft:"8px"}),this.editorHostNode=document.createElement("div"),this.editorHostNode.className="jp-JSONEditor-host",this.headerNode.appendChild(this.revertButtonNode),this.headerNode.appendChild(this.commitButtonNode),this.node.appendChild(this.headerNode),this.node.appendChild(this.editorHostNode);const t=new s.Model({mimeType:"application/json"});t.sharedModel.changed.connect(this._onModelChanged,this),this.model=t,this.editor=e.editorFactory({host:this.editorHostNode,model:t,config:{readOnly:!0}})}get source(){return this._source}set source(e){this._source!==e&&(this._source&&this._source.changed.disconnect(this._onSourceChanged,this),this._source=e,this.editor.setOption("readOnly",null===e),e&&e.changed.connect(this._onSourceChanged,this),this._setValue())}get isDirty(){return this._dataDirty||this._inputDirty}dispose(){var e;this.isDisposed||(null===(e=this.source)||void 0===e||e.dispose(),this.model.dispose(),this.editor.dispose(),super.dispose())}handleEvent(e){switch(e.type){case"blur":this._evtBlur(e);break;case"click":this._evtClick(e)}}onAfterAttach(e){const t=this.editorHostNode;t.addEventListener("blur",this,!0),t.addEventListener("click",this,!0),this.revertButtonNode.hidden=!0,this.commitButtonNode.hidden=!0,this.headerNode.addEventListener("click",this)}onBeforeDetach(e){const t=this.editorHostNode;t.removeEventListener("blur",this,!0),t.removeEventListener("click",this,!0),this.headerNode.removeEventListener("click",this)}_onSourceChanged(e,t){this._changeGuard||(this._inputDirty||this.editor.hasFocus()?this._dataDirty=!0:this._setValue())}_onModelChanged(e,t){if(t.sourceChange){let e=!0;try{const e=JSON.parse(this.editor.model.sharedModel.getSource());this.removeClass(c),this._inputDirty=!this._changeGuard&&!h.JSONExt.deepEqual(e,this._originalValue)}catch(t){this.addClass(c),this._inputDirty=!0,e=!1}this.revertButtonNode.hidden=!this._inputDirty,this.commitButtonNode.hidden=!e||!this._inputDirty}}_evtBlur(e){!this._inputDirty&&this._dataDirty&&this._setValue()}_evtClick(e){const t=e.target;this.revertButtonNode.contains(t)?this._setValue():this.commitButtonNode.contains(t)?this.commitButtonNode.hidden||this.hasClass(c)||(this._changeGuard=!0,this._mergeContent(),this._changeGuard=!1,this._setValue()):this.editorHostNode.contains(t)&&this.editor.focus()}_mergeContent(){const e=this.editor.model,t=this._originalValue,i=JSON.parse(e.sharedModel.getSource()),s=this.source;if(s){for(const e in i)h.JSONExt.deepEqual(i[e],t[e]||null)||s.set(e,i[e]);for(const e in t)e in i||s.delete(e)}}_setValue(){this._dataDirty=!1,this._inputDirty=!1,this.revertButtonNode.hidden=!0,this.commitButtonNode.hidden=!0,this.removeClass(c);const e=this.editor.model,t=this._source?this._source.toJSON():{};if(this._changeGuard=!0,void 0===t)e.sharedModel.setSource(this._trans.__("No data!")),this._originalValue=h.JSONExt.emptyObject;else{const i=JSON.stringify(t,null,4);e.sharedModel.setSource(i),this._originalValue=t,i.length>1&&"{"===i[0]&&this.editor.setCursorPosition({line:0,column:1})}this._changeGuard=!1,this.commitButtonNode.hidden=!0,this.revertButtonNode.hidden=!0}}var m,p=i(67993),_=i(78156),g=i.n(_);class v extends g().Component{constructor(e){super(e),this._handleChange=e=>{this.setState({value:e.currentTarget.value})},this._handleSubmit=e=>{e.preventDefault();const t=parseInt(this._textInput.value,10);return!isNaN(t)&&isFinite(t)&&1<=t&&t<=this.props.maxLine&&this.props.handleSubmit(t),!1},this._handleFocus=()=>{this.setState({hasFocus:!0})},this._handleBlur=()=>{this.setState({hasFocus:!1})},this._textInput=null,this.translator=e.translator||a.nullTranslator,this._trans=this.translator.load("jupyterlab"),this.state={value:"",hasFocus:!1}}componentDidMount(){this._textInput.focus()}render(){return g().createElement("div",{className:"jp-lineFormSearch"},g().createElement("form",{name:"lineColumnForm",onSubmit:this._handleSubmit,noValidate:!0},g().createElement("div",{className:(0,d.classes)("jp-lineFormWrapper","lm-lineForm-wrapper",this.state.hasFocus?"jp-lineFormWrapperFocusWithin":void 0)},g().createElement("input",{type:"text",className:"jp-lineFormInput",onChange:this._handleChange,onFocus:this._handleFocus,onBlur:this._handleBlur,value:this.state.value,ref:e=>{this._textInput=e}}),g().createElement("div",{className:"jp-baseLineForm jp-lineFormButtonContainer"},g().createElement(d.lineFormIcon.react,{className:"jp-baseLineForm jp-lineFormButtonIcon",elementPosition:"center"}),g().createElement("input",{type:"submit",className:"jp-baseLineForm jp-lineFormButton",value:""}))),g().createElement("label",{className:"jp-lineFormCaption"},this._trans.__("Go to line number between 1 and %1",this.props.maxLine))))}}function C(e){const t=(e.translator||a.nullTranslator).load("jupyterlab");return g().createElement(p.TextItem,{onClick:e.handleClick,source:t.__("Ln %1, Col %2",e.line,e.column),title:t.__("Go to line number…")})}class y extends d.VDomRenderer{constructor(e){super(new y.Model),this._popup=null,this.addClass("jp-mod-highlighted"),this.translator=e||a.nullTranslator}render(){return null===this.model?null:g().createElement(C,{line:this.model.line,column:this.model.column,translator:this.translator,handleClick:()=>this._handleClick()})}_handleClick(){this._popup&&this._popup.dispose();const e=d.ReactWidget.create(g().createElement(v,{handleSubmit:e=>this._handleSubmit(e),currentLine:this.model.line,maxLine:this.model.editor.lineCount,translator:this.translator}));this._popup=(0,p.showPopup)({body:e,anchor:this,align:"right"})}_handleSubmit(e){this.model.editor.setCursorPosition({line:e-1,column:0}),this._popup.dispose(),this.model.editor.focus()}}!function(e){class t extends d.VDomModel{constructor(){super(...arguments),this._onSelectionChanged=()=>{const e=this._getAllState(),t=this.editor.getCursorPosition();this._line=t.line+1,this._column=t.column+1,this._triggerChange(e,this._getAllState())},this._line=1,this._column=1,this._editor=null}get editor(){return this._editor}set editor(e){var t;const i=this._editor;(null===(t=null==i?void 0:i.model)||void 0===t?void 0:t.selections)&&i.model.selections.changed.disconnect(this._onSelectionChanged);const s=this._getAllState();if(this._editor=e,this._editor){this._editor.model.selections.changed.connect(this._onSelectionChanged);const e=this._editor.getCursorPosition();this._column=e.column+1,this._line=e.line+1}else this._column=1,this._line=1;this._triggerChange(s,this._getAllState())}get line(){return this._line}get column(){return this._column}_getAllState(){return[this._line,this._column]}_triggerChange(e,t){e[0]===t[0]&&e[1]===t[1]||this.stateChanged.emit(void 0)}}e.Model=t}(y||(y={})),function(e){e.defaultMimeType="text/plain"}(m||(m={}));const f=new h.Token("@jupyterlab/codeeditor:IEditorServices","A service for the text editor provider\n  for the application. Use this to create new text editors and host them in your\n  UI elements."),N=new h.Token("@jupyterlab/codeeditor:IPositionModel","A service to handle an code editor cursor position."),D="jp-mod-has-primary-selection",E="jp-mod-in-leading-whitespace",S="jp-mod-dropTarget",T=/^\s+$/;class O extends l.Widget{constructor(e){super();const{factory:t,model:i,editorOptions:s}=e;(this.editor=t({host:this.node,model:i,...s})).model.selections.changed.connect(this._onSelectionsChanged,this)}get model(){return this.editor.model}dispose(){this.isDisposed||(this.editor.dispose(),super.dispose())}handleEvent(e){switch(e.type){case"lm-dragenter":this._evtDragEnter(e);break;case"lm-dragleave":this._evtDragLeave(e);break;case"lm-dragover":this._evtDragOver(e);break;case"lm-drop":this._evtDrop(e)}}onActivateRequest(e){this.editor.focus()}onAfterAttach(e){super.onAfterAttach(e);const t=this.node;t.addEventListener("lm-dragenter",this),t.addEventListener("lm-dragleave",this),t.addEventListener("lm-dragover",this),t.addEventListener("lm-drop",this)}onBeforeDetach(e){const t=this.node;t.removeEventListener("lm-dragenter",this),t.removeEventListener("lm-dragleave",this),t.removeEventListener("lm-dragover",this),t.removeEventListener("lm-drop",this)}_onSelectionsChanged(){const{start:e,end:t}=this.editor.getSelection();e.column!==t.column||e.line!==t.line?(this.addClass(D),this.removeClass(E)):(this.removeClass(D),this.editor.getLine(t.line).slice(0,t.column).match(T)?this.addClass(E):this.removeClass(E))}_evtDragEnter(e){!0!==this.editor.getOption("readOnly")&&void 0!==x.findTextData(e.mimeData)&&(e.preventDefault(),e.stopPropagation(),this.addClass("jp-mod-dropTarget"))}_evtDragLeave(e){this.removeClass(S),!0!==this.editor.getOption("readOnly")&&void 0!==x.findTextData(e.mimeData)&&(e.preventDefault(),e.stopPropagation())}_evtDragOver(e){this.removeClass(S),!0!==this.editor.getOption("readOnly")&&void 0!==x.findTextData(e.mimeData)&&(e.preventDefault(),e.stopPropagation(),e.dropAction="copy",this.addClass(S))}_evtDrop(e){if(!0===this.editor.getOption("readOnly"))return;const t=x.findTextData(e.mimeData);if(void 0===t)return;const i={top:e.y,bottom:e.y,left:e.x,right:e.x,x:e.x,y:e.y,width:0,height:0},s=this.editor.getPositionForCoordinate(i);if(null===s)return;if(this.removeClass(S),e.preventDefault(),e.stopPropagation(),"none"===e.proposedAction)return void(e.dropAction="none");const o=this.editor.getOffsetAt(s);this.model.sharedModel.updateSource(o,o,t)}}var x;!function(e){e.findTextData=function(e){const t=e.types().find((e=>0===e.indexOf("text")));if(void 0!==t)return e.getData(t)}}(x||(x={}));class b extends l.Widget{constructor(e){var t;super(),this.model=e.model;const i=new O({factory:e.factory,model:this.model,editorOptions:{...e.editorOptions,config:{...null===(t=e.editorOptions)||void 0===t?void 0:t.config,readOnly:!0}}});this.editor=i.editor,(this.layout=new l.StackedLayout).addWidget(i)}static createCodeViewer(e){const{content:t,mimeType:i,...o}=e,n=new s.Model({mimeType:i});n.sharedModel.setSource(t);const r=new b({...o,model:n});return r.disposed.connect((()=>{n.dispose()})),r}get content(){return this.model.sharedModel.getSource()}get mimeType(){return this.model.mimeType}}}}]);