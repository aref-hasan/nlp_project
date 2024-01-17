"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7386,4811],{37386:(e,t,o)=>{o.r(t),o.d(t,{CellBarExtension:()=>v,CellToolbarTracker:()=>h});var l=o(56165),n=o(97031),a=o(59361),i=o(33625),s=o(81997);const r=["text/plain","application/vnd.jupyter.stdout","application/vnd.jupyter.stderr"],d="jp-cell-toolbar",c="jp-toolbar-overlap";class h{constructor(e,t){var o;this._isDisposed=!1,this._panel=e,this._previousActiveCell=this._panel.content.activeCell,this._toolbar=t,this._onToolbarChanged(),this._toolbar.changed.connect(this._onToolbarChanged,this),e.revealed.then((()=>{setTimeout((()=>{this._onActiveCellChanged(e.content)}),1e3/60)})),e.content.renderingLayoutChanged.connect(this._onActiveCellChanged,this),e.content.activeCellChanged.connect(this._onActiveCellChanged,this),null===(o=e.content.activeCell)||void 0===o||o.model.metadataChanged.connect(this._onMetadataChanged,this),e.disposed.connect((()=>{var t;e.content.activeCellChanged.disconnect(this._onActiveCellChanged),null===(t=e.content.activeCell)||void 0===t||t.model.metadataChanged.disconnect(this._onMetadataChanged)}))}_onMetadataChanged(e,t){"jupyter"===t.key&&("object"!=typeof t.newValue||!0!==t.newValue.source_hidden||"add"!==t.type&&"change"!==t.type?"object"==typeof t.oldValue&&!0===t.oldValue.source_hidden&&this._addToolbar(e):this._removeToolbar(e))}_onActiveCellChanged(e){this._previousActiveCell&&!this._previousActiveCell.isDisposed&&(this._removeToolbar(this._previousActiveCell.model),this._previousActiveCell.model.metadataChanged.disconnect(this._onMetadataChanged));const t=e.activeCell;null===t||t.inputHidden||(t.model.metadataChanged.connect(this._onMetadataChanged,this),this._addToolbar(t.model),this._previousActiveCell=t)}get isDisposed(){return this._isDisposed}dispose(){var e;if(this.isDisposed)return;this._isDisposed=!0,this._toolbar.changed.disconnect(this._onToolbarChanged,this);const t=null===(e=this._panel)||void 0===e?void 0:e.context.model.cells;if(t)for(const e of t)this._removeToolbar(e);this._panel=null,s.Signal.clearData(this)}_addToolbar(e){const t=this._getCell(e);if(t){const e=new a.Toolbar;e.addClass("jp-cell-menu");const o=[];for(const{name:t,widget:l}of this._toolbar)e.addItem(t,l),l instanceof a.ReactWidget&&void 0!==l.renderPromise&&(l.update(),o.push(l.renderPromise));Promise.all(o).then((()=>{e.addClass(d),t.layout.insertWidget(0,e),t.displayChanged.connect(this._resizeEventCallback,this),t.model.contentChanged.connect(this._changedEventCallback,this),this._updateCellForToolbarOverlap(t)})).catch((e=>{console.error("Error rendering buttons of the cell toolbar: ",e)}))}}_getCell(e){var t;return null===(t=this._panel)||void 0===t?void 0:t.content.widgets.find((t=>t.model===e))}_findToolbarWidgets(e){return e.layout.widgets.filter((e=>e.hasClass(d)))||[]}_removeToolbar(e){const t=this._getCell(e);t&&(this._findToolbarWidgets(t).forEach((e=>{e.dispose()})),t.displayChanged.disconnect(this._resizeEventCallback,this)),e.contentChanged.disconnect(this._changedEventCallback,this)}_onToolbarChanged(){var e;const t=null===(e=this._panel)||void 0===e?void 0:e.content.activeCell;t&&(this._removeToolbar(t.model),this._addToolbar(t.model))}_changedEventCallback(){var e;const t=null===(e=this._panel)||void 0===e?void 0:e.content.activeCell;null!=t&&this._updateCellForToolbarOverlap(t)}_resizeEventCallback(){var e;const t=null===(e=this._panel)||void 0===e?void 0:e.content.activeCell;null!=t&&this._updateCellForToolbarOverlap(t)}_updateCellForToolbarOverlap(e){requestAnimationFrame((()=>{const t=e.node;t.classList.remove(c),this._cellToolbarOverlapsContents(e)&&t.classList.add(c)}))}_cellToolbarOverlapsContents(e){var t;const o=e.model.type,l=this._cellEditorWidgetLeft(e),n=this._cellEditorWidgetRight(e),a=this._cellToolbarLeft(e);return null!==a&&((l+n)/2>a||("markdown"===o&&e.rendered?this._markdownOverlapsToolbar(e):"default"===(null===(t=this._panel)||void 0===t?void 0:t.content.renderingLayout)?this._codeOverlapsToolbar(e):this._outputOverlapsToolbar(e)))}_markdownOverlapsToolbar(e){const t=e.inputArea;if(!t)return!1;const o=t.renderedInput.node.firstElementChild;if(null===o)return!1;const l=o.style.maxWidth;o.style.maxWidth="max-content";const n=o.getBoundingClientRect().right;o.style.maxWidth=l;const a=this._cellToolbarLeft(e);return null!==a&&n>a}_outputOverlapsToolbar(e){const t=e.outputArea.node;if(t){const o=t.querySelectorAll("[data-mime-type]"),l=this._cellToolbarRect(e);if(l){const{left:e,bottom:t}=l;return(0,i.some)(o,(o=>{const l=o.firstElementChild;if(l){const n=new Range;r.includes(o.getAttribute("data-mime-type")||"")?n.selectNodeContents(l):n.selectNode(l);const{right:a,top:i}=n.getBoundingClientRect();return a>e&&i<t}return!1}))}}return!1}_codeOverlapsToolbar(e){const t=e.editorWidget,o=e.editor;if(!t||!o)return!1;if(o.lineCount<1)return!1;const l=t.node.getElementsByClassName("cm-line");if(l.length<1)return!1;let n=l[0].getBoundingClientRect().left;const a=document.createRange();a.selectNodeContents(l[0]),n+=a.getBoundingClientRect().width;const i=this._cellToolbarLeft(e);return null!==i&&n>i}_cellEditorWidgetLeft(e){var t,o;return null!==(o=null===(t=e.editorWidget)||void 0===t?void 0:t.node.getBoundingClientRect().left)&&void 0!==o?o:0}_cellEditorWidgetRight(e){var t,o;return null!==(o=null===(t=e.editorWidget)||void 0===t?void 0:t.node.getBoundingClientRect().right)&&void 0!==o?o:0}_cellToolbarRect(e){const t=this._findToolbarWidgets(e);return t.length<1?null:t[0].node.getBoundingClientRect()}_cellToolbarLeft(e){var t;return(null===(t=this._cellToolbarRect(e))||void 0===t?void 0:t.left)||null}}const u=[{command:"notebook:duplicate-below",name:"duplicate-cell"},{command:"notebook:move-cell-up",name:"move-cell-up"},{command:"notebook:move-cell-down",name:"move-cell-down"},{command:"notebook:insert-cell-above",name:"insert-cell-above"},{command:"notebook:insert-cell-below",name:"insert-cell-below"},{command:"notebook:delete-cell",name:"delete-cell"}];class v{constructor(e,t){this._commands=e,this._toolbarFactory=null!=t?t:this.defaultToolbarFactory}get defaultToolbarFactory(){const e=(0,l.createDefaultFactory)(this._commands);return t=>new n.ObservableList({values:u.map((o=>({name:o.name,widget:e(v.FACTORY_NAME,t,o)})))})}createNew(e){return new h(e,this._toolbarFactory(e))}}v.FACTORY_NAME="Cell"}}]);