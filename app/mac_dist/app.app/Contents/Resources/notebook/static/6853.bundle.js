"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6853],{76853:(e,t,i)=>{i.r(t),i.d(t,{ConnectionLost:()=>a,IConnectionLost:()=>E,ILabShell:()=>B,ILabStatus:()=>I,ILayoutRestorer:()=>A.L,IMimeDocumentTracker:()=>m.w2,IRouter:()=>R,ITreePathUpdater:()=>j,JupyterFrontEnd:()=>g,JupyterFrontEndContextMenu:()=>o,JupyterLab:()=>x,LabShell:()=>H,LayoutRestorer:()=>A.c,Router:()=>S,createRendermimePlugin:()=>m.aX,createRendermimePlugins:()=>m.as,createSemanticCommand:()=>O});var n=i(56165),s=i(49255);const a=async function(e,t,i){const a=(i=i||s.nullTranslator).load("jupyterlab"),r=a.__("Server Connection Error"),o=a.__("A connection to the Jupyter server could not be established.\nJupyterLab will continue trying to reconnect.\nCheck your network connection or Jupyter server configuration.\n");return(0,n.showErrorMessage)(r,{message:o})};var r,o,d=i(49358),l=i(27038),h=i(59361),c=i(75530),u=i(20998),p=i(81997);class g extends c.Application{constructor(e){super(e),this._formatChanged=new p.Signal(this),this.contextMenu=new h.ContextMenuSvg({commands:this.commands,renderer:e.contextMenuRenderer,groupByTarget:!1,sortBySelector:!1});const t=new Promise((e=>{requestAnimationFrame((()=>{e()}))}));this.commandLinker=e.commandLinker||new n.CommandLinker({commands:this.commands}),this.docRegistry=e.docRegistry||new d.DocumentRegistry,this.restored=e.restored||this.started.then((()=>t)).catch((()=>t)),this.serviceManager=e.serviceManager||new l.ServiceManager}get format(){return this._format}set format(e){this._format!==e&&(this._format=e,document.body.dataset.format=e,this._formatChanged.emit(e))}get formatChanged(){return this._formatChanged}contextMenuHitTest(e){if(!(this._contextMenuEvent&&this._contextMenuEvent.target instanceof Node))return;let t=this._contextMenuEvent.target;do{if(t instanceof HTMLElement&&e(t))return t;t=t.parentNode}while(t&&t.parentNode&&t!==t.parentNode)}evtContextMenu(e){if(this._contextMenuEvent=e,!e.shiftKey&&!r.suppressContextMenu(e.target)&&this.contextMenu.open(e)){const t=this.contextMenu.menu.items;if(1===t.length&&t[0].command===o.contextMenu)return void this.contextMenu.menu.close();e.preventDefault(),e.stopPropagation()}}}!function(e){e.inDocMode=function(e,t){const i=new RegExp(`^${t.urls.doc}`);return!!e.match(i)},e.IPaths=new u.Token("@jupyterlab/application:IPaths","A service providing information about various\n  URLs and server paths for the current application. Use this service if you want to\n  assemble URLs to use the JupyterLab REST API."),e.ITreeResolver=new u.Token("@jupyterlab/application:ITreeResolver","A service to resolve the tree path.")}(g||(g={})),function(e){e.suppressContextMenu=function(e){return null!==e.closest("[data-jp-suppress-context-menu]")}}(r||(r={})),function(e){e.contextMenu="__internal:context-menu-info"}(o||(o={}));var _=i(85421),m=i(75677),f=i(33625),v=i(49503),y=i(97934),w=i(9267);const b="jp-SideBar",P="jp-mod-current",k="jp-mod-active",C=900,T="jp-Activity",B=new u.Token("@jupyterlab/application:ILabShell","A service for interacting with the JupyterLab shell. The top-level ``application`` object also has a reference to the shell, but it has a restricted interface in order to be agnostic to different shell implementations on the application. Use this to get more detailed information about currently active widgets and layout state.");class H extends w.Widget{constructor(e){super(),this._dockChildHook=(e,t)=>{switch(t.type){case"child-added":t.child.addClass(T),this._tracker.add(t.child);break;case"child-removed":t.child.removeClass(T),this._tracker.remove(t.child)}return!0},this._activeChanged=new p.Signal(this),this._cachedLayout=null,this._currentChanged=new p.Signal(this),this._currentPath="",this._currentPathChanged=new p.Signal(this),this._modeChanged=new p.Signal(this),this._isRestored=!1,this._layoutModified=new p.Signal(this),this._layoutDebouncer=new y.Debouncer((()=>{this._layoutModified.emit(void 0)}),0),this._restored=new u.PromiseDelegate,this._tracker=new w.FocusTracker,this._topHandlerHiddenByUser=!1,this._idTypeMap=new Map,this._mainOptionsCache=new Map,this._sideOptionsCache=new Map,this._delayedWidget=new Array,this.addClass("jp-LabShell"),this.id="main",!1===(null==e?void 0:e.waitForRestore)&&(this._userLayout={"multiple-document":{},"single-document":{}});const t=this._skipLinkWidget=new L.SkipLinkWidget(this);this._skipLinkWidget.show();const i=new w.Panel;i.addClass("jp-skiplink-wrapper"),i.addWidget(t);const n=this._headerPanel=new w.BoxPanel,a=this._menuHandler=new L.PanelHandler;a.panel.node.setAttribute("role","navigation");const r=this._topHandler=new L.PanelHandler;r.panel.node.setAttribute("role","banner");const o=this._bottomPanel=new w.BoxPanel;o.node.setAttribute("role","contentinfo");const l=new w.BoxPanel,c=this._vsplitPanel=new L.RestorableSplitPanel,g=this._dockPanel=new h.DockPanelSvg({hiddenMode:w.Widget.HiddenMode.Display});v.MessageLoop.installMessageHook(g,this._dockChildHook);const _=this._hsplitPanel=new L.RestorableSplitPanel,m=this._downPanel=new h.TabPanelSvg({tabsMovable:!0}),f=this._leftHandler=new L.SideBarHandler,P=this._rightHandler=new L.SideBarHandler,k=new w.BoxLayout;n.id="jp-header-panel",a.panel.id="jp-menu-panel",r.panel.id="jp-top-panel",o.id="jp-bottom-panel",l.id="jp-main-content-panel",c.id="jp-main-vsplit-panel",g.id="jp-main-dock-panel",_.id="jp-main-split-panel",m.id="jp-down-stack",f.sideBar.addClass(b),f.sideBar.addClass("jp-mod-left"),f.sideBar.node.setAttribute("role","complementary"),f.stackedPanel.id="jp-left-stack",P.sideBar.addClass(b),P.sideBar.addClass("jp-mod-right"),P.sideBar.node.setAttribute("role","complementary"),P.stackedPanel.id="jp-right-stack",g.node.setAttribute("role","main"),l.spacing=0,c.spacing=1,g.spacing=5,_.spacing=1,n.direction="top-to-bottom",c.orientation="vertical",l.direction="left-to-right",_.orientation="horizontal",o.direction="bottom-to-top",w.SplitPanel.setStretch(f.stackedPanel,0),w.SplitPanel.setStretch(m,0),w.SplitPanel.setStretch(g,1),w.SplitPanel.setStretch(P.stackedPanel,0),w.BoxPanel.setStretch(f.sideBar,0),w.BoxPanel.setStretch(_,1),w.BoxPanel.setStretch(P.sideBar,0),w.SplitPanel.setStretch(c,1),_.addWidget(f.stackedPanel),_.addWidget(g),_.addWidget(P.stackedPanel),c.addWidget(_),c.addWidget(m),l.addWidget(f.sideBar),l.addWidget(c),l.addWidget(P.sideBar),k.direction="top-to-bottom",k.spacing=0,c.setRelativeSizes([3,1]),_.setRelativeSizes([1,2.5,1]),w.BoxLayout.setStretch(n,0),w.BoxLayout.setStretch(a.panel,0),w.BoxLayout.setStretch(r.panel,0),w.BoxLayout.setStretch(l,1),w.BoxLayout.setStretch(o,0),k.addWidget(i),k.addWidget(n),k.addWidget(r.panel),k.addWidget(l),k.addWidget(o),this._headerPanel.hide(),this._bottomPanel.hide(),this._downPanel.hide(),this.layout=k,this._tracker.currentChanged.connect(this._onCurrentChanged,this),this._tracker.activeChanged.connect(this._onActiveChanged,this),this._dockPanel.layoutModified.connect(this._onLayoutModified,this),this._vsplitPanel.updated.connect(this._onLayoutModified,this),this._downPanel.currentChanged.connect(this._onLayoutModified,this),this._downPanel.tabBar.tabMoved.connect(this._onTabPanelChanged,this),this._downPanel.stackedPanel.widgetRemoved.connect(this._onTabPanelChanged,this),this._leftHandler.updated.connect(this._onLayoutModified,this),this._rightHandler.updated.connect(this._onLayoutModified,this),this._hsplitPanel.updated.connect(this._onLayoutModified,this);const C=this._titleHandler=new L.TitleHandler(this);this.add(C,"top",{rank:100}),"multiple-document"===this._dockPanel.mode?(this._topHandler.addWidget(this._menuHandler.panel,100),C.hide()):k.insertWidget(3,this._menuHandler.panel),this.translator=s.nullTranslator,this.currentChanged.connect(((e,t)=>{let i=t.newValue,n=t.oldValue;n&&(n.title.changed.disconnect(this._updateTitlePanelTitle,this),n instanceof d.DocumentWidget&&n.context.pathChanged.disconnect(this._updateCurrentPath,this)),i&&(i.title.changed.connect(this._updateTitlePanelTitle,this),this._updateTitlePanelTitle(),i instanceof d.DocumentWidget&&i.context.pathChanged.connect(this._updateCurrentPath,this)),this._updateCurrentPath()}))}get activeChanged(){return this._activeChanged}get activeWidget(){return this._tracker.activeWidget}get addButtonEnabled(){return this._dockPanel.addButtonEnabled}set addButtonEnabled(e){this._dockPanel.addButtonEnabled=e}get addRequested(){return this._dockPanel.addRequested}get currentChanged(){return this._currentChanged}get currentPath(){return this._currentPath}get currentPathChanged(){return this._currentPathChanged}get currentWidget(){return this._tracker.currentWidget}get layoutModified(){return this._layoutModified}get leftCollapsed(){return!this._leftHandler.sideBar.currentTitle}get rightCollapsed(){return!this._rightHandler.sideBar.currentTitle}get presentationMode(){return this.hasClass("jp-mod-presentationMode")}set presentationMode(e){this.toggleClass("jp-mod-presentationMode",e)}get mode(){return this._dockPanel.mode}set mode(e){const t=this._dockPanel;if(e===t.mode)return;const i=this.currentWidget;if("single-document"===e)this._cachedLayout=t.saveLayout(),t.mode=e,this.currentWidget&&t.activateWidget(this.currentWidget),this.layout.insertWidget(3,this._menuHandler.panel),this._titleHandler.show(),this._updateTitlePanelTitle(),this._topHandlerHiddenByUser&&this._topHandler.panel.hide();else{const n=Array.from(t.widgets());t.mode=e,this._cachedLayout&&(L.normalizeAreaConfig(t,this._cachedLayout.main),t.restoreLayout(this._cachedLayout),this._cachedLayout=null),this._layoutRestorer.isDeferred&&this._layoutRestorer.restoreDeferred().then((e=>{if(e){const{currentWidget:t,dock:i}=e;i&&this._dockPanel.restoreLayout(i),t&&this.activateById(t.id)}})).catch((e=>{console.error("Failed to restore the deferred layout."),console.error(e)})),n.forEach((e=>{e.parent||this._addToMainArea(e,{...this._mainOptionsCache.get(e),activate:!1})})),this._mainOptionsCache.clear(),i&&t.activateWidget(i),this.add(this._menuHandler.panel,"top",{rank:100}),this._titleHandler.hide()}this.node.dataset.shellMode=e,this._downPanel.fit(),this._modeChanged.emit(e)}get modeChanged(){return this._modeChanged}get restored(){return this._restored.promise}get translator(){var e;return null!==(e=this._translator)&&void 0!==e?e:s.nullTranslator}set translator(e){if(e!==this._translator){this._translator=e,h.TabBarSvg.translator=e;const t=e.load("jupyterlab");this._menuHandler.panel.node.setAttribute("aria-label",t.__("main")),this._leftHandler.sideBar.node.setAttribute("aria-label",t.__("main sidebar")),this._leftHandler.sideBar.contentNode.setAttribute("aria-label",t.__("main sidebar")),this._rightHandler.sideBar.node.setAttribute("aria-label",t.__("alternate sidebar")),this._rightHandler.sideBar.contentNode.setAttribute("aria-label",t.__("alternate sidebar"))}}get userLayout(){return u.JSONExt.deepCopy(this._userLayout)}activateById(e){if(this._leftHandler.has(e))return void this._leftHandler.activate(e);if(this._rightHandler.has(e))return void this._rightHandler.activate(e);const t=this._downPanel.tabBar.titles.findIndex((t=>t.owner.id===e));if(t>=0)return void(this._downPanel.currentIndex=t);const i=this._dockPanel,n=(0,f.find)(i.widgets(),(t=>t.id===e));n&&i.activateWidget(n)}activateNextTab(){const e=this._currentTabBar();if(!e)return;const t=e.currentIndex;if(-1!==t){if(t<e.titles.length-1)return e.currentIndex+=1,void(e.currentTitle&&e.currentTitle.owner.activate());if(t===e.titles.length-1){const e=this._adjacentBar("next");e&&(e.currentIndex=0,e.currentTitle&&e.currentTitle.owner.activate())}}}activatePreviousTab(){const e=this._currentTabBar();if(!e)return;const t=e.currentIndex;if(-1!==t){if(t>0)return e.currentIndex-=1,void(e.currentTitle&&e.currentTitle.owner.activate());if(0===t){const e=this._adjacentBar("previous");if(e){const t=e.titles.length;e.currentIndex=t-1,e.currentTitle&&e.currentTitle.owner.activate()}}}}activateNextTabBar(){const e=this._adjacentBar("next");e&&e.currentTitle&&e.currentTitle.owner.activate()}activatePreviousTabBar(){const e=this._adjacentBar("previous");e&&e.currentTitle&&e.currentTitle.owner.activate()}add(e,t="main",i){var n;if(!this._userLayout)return void this._delayedWidget.push({widget:e,area:t,options:i});let s;switch((null==i?void 0:i.type)&&this._userLayout[this.mode][i.type]?(s=this._userLayout[this.mode][i.type],this._idTypeMap.set(e.id,i.type)):s=this._userLayout[this.mode][e.id],(null==i?void 0:i.type)&&(this._idTypeMap.set(e.id,i.type),e.disposed.connect((()=>{this._idTypeMap.delete(e.id)}))),t=null!==(n=null==s?void 0:s.area)&&void 0!==n?n:t,i=i||(null==s?void 0:s.options)?{...i,...null==s?void 0:s.options}:void 0,t||"main"){case"bottom":return this._addToBottomArea(e,i);case"down":return this._addToDownArea(e,i);case"header":return this._addToHeaderArea(e,i);case"left":return this._addToLeftArea(e,i);case"main":return this._addToMainArea(e,i);case"menu":return this._addToMenuArea(e,i);case"right":return this._addToRightArea(e,i);case"top":return this._addToTopArea(e,i);default:throw new Error(`Invalid area: ${t}`)}}move(e,t,i){var n;const s=null!==(n=this._idTypeMap.get(e.id))&&void 0!==n?n:e.id;for(const e of["single-document","multiple-document"].filter((e=>!i||e===i)))this._userLayout[e][s]={...this._userLayout[e][s],area:t};return this.add(e,t),this._userLayout}collapseLeft(){this._leftHandler.collapse(),this._onLayoutModified()}collapseRight(){this._rightHandler.collapse(),this._onLayoutModified()}dispose(){this.isDisposed||(this._layoutDebouncer.dispose(),super.dispose())}expandLeft(){this._leftHandler.expand(),this._onLayoutModified()}expandRight(){this._rightHandler.expand(),this._onLayoutModified()}closeAll(){Array.from(this._dockPanel.widgets()).forEach((e=>e.close())),this._downPanel.stackedPanel.widgets.forEach((e=>e.close()))}isSideTabBarVisible(e){switch(e){case"left":return this._leftHandler.isVisible;case"right":return this._rightHandler.isVisible}}isTopInSimpleModeVisible(){return!this._topHandlerHiddenByUser}isEmpty(e){switch(e){case"bottom":return 0===this._bottomPanel.widgets.length;case"down":return 0===this._downPanel.stackedPanel.widgets.length;case"header":return 0===this._headerPanel.widgets.length;case"left":return 0===this._leftHandler.stackedPanel.widgets.length;case"main":return this._dockPanel.isEmpty;case"menu":return 0===this._menuHandler.panel.widgets.length;case"right":return 0===this._rightHandler.stackedPanel.widgets.length;case"top":return 0===this._topHandler.panel.widgets.length;default:return!0}}async restoreLayout(e,t,i={}){var n,s,a,r;this._userLayout={"single-document":null!==(n=i["single-document"])&&void 0!==n?n:{},"multiple-document":null!==(s=i["multiple-document"])&&void 0!==s?s:{}},this._delayedWidget.forEach((({widget:e,area:t,options:i})=>{this.add(e,t,i)})),this._delayedWidget.length=0,this._layoutRestorer=t;const o=await t.fetch(),{mainArea:d,downArea:l,leftArea:h,rightArea:c,topArea:u,relativeSizes:p}=o;if(d){const{currentWidget:t,dock:i}=d;i&&"multiple-document"===e&&this._dockPanel.restoreLayout(i),e&&(this.mode=e),t&&this.activateById(t.id)}else e&&(this.mode=e);if(void 0!==(null==u?void 0:u.simpleVisibility)&&(this._topHandlerHiddenByUser=!u.simpleVisibility,"single-document"===this.mode&&this._topHandler.panel.setHidden(this._topHandlerHiddenByUser)),l){const{currentWidget:e,widgets:t,size:i}=l,n=null!==(a=null==t?void 0:t.map((e=>e.id)))&&void 0!==a?a:[];this._downPanel.tabBar.titles.filter((e=>!n.includes(e.owner.id))).map((e=>e.owner.close()));const s=this._downPanel.tabBar.titles.map((e=>e.owner.id));for(null==t||t.filter((e=>!s.includes(e.id))).map((e=>this._downPanel.addWidget(e)));!f.ArrayExt.shallowEqual(n,this._downPanel.tabBar.titles.map((e=>e.owner.id)));)this._downPanel.tabBar.titles.forEach(((e,t)=>{const i=n.findIndex((t=>e.owner.id==t));i>=0&&i!=t&&this._downPanel.tabBar.insertTab(i,e)}));if(e){const t=this._downPanel.stackedPanel.widgets.findIndex((t=>t.id===e.id));t&&(this._downPanel.currentIndex=t,null===(r=this._downPanel.currentWidget)||void 0===r||r.activate())}i&&i>0?this._vsplitPanel.setRelativeSizes([1-i,i]):(this._downPanel.stackedPanel.widgets.forEach((e=>e.close())),this._downPanel.hide())}h?this._leftHandler.rehydrate(h):"single-document"===e&&this.collapseLeft(),c?this._rightHandler.rehydrate(c):"single-document"===e&&this.collapseRight(),p&&this._hsplitPanel.setRelativeSizes(p),this._isRestored||(v.MessageLoop.flush(),this._restored.resolve(o))}saveLayout(){return{mainArea:{currentWidget:this._tracker.currentWidget,dock:"single-document"===this.mode&&this._cachedLayout||this._dockPanel.saveLayout()},downArea:{currentWidget:this._downPanel.currentWidget,widgets:Array.from(this._downPanel.stackedPanel.widgets),size:this._vsplitPanel.relativeSizes()[1]},leftArea:this._leftHandler.dehydrate(),rightArea:this._rightHandler.dehydrate(),topArea:{simpleVisibility:!this._topHandlerHiddenByUser},relativeSizes:this._hsplitPanel.relativeSizes()}}toggleTopInSimpleModeVisibility(){"single-document"===this.mode&&(this._topHandler.panel.isVisible?(this._topHandlerHiddenByUser=!0,this._topHandler.panel.hide()):(this._topHandlerHiddenByUser=!1,this._topHandler.panel.show(),this._updateTitlePanelTitle()),this._onLayoutModified())}toggleSideTabBarVisibility(e){"right"===e?this._rightHandler.isVisible?this._rightHandler.hide():this._rightHandler.show():this._leftHandler.isVisible?this._leftHandler.hide():this._leftHandler.show()}updateConfig(e){if(e.hiddenMode)switch(e.hiddenMode){case"display":this._dockPanel.hiddenMode=w.Widget.HiddenMode.Display;break;case"scale":this._dockPanel.hiddenMode=w.Widget.HiddenMode.Scale;break;case"contentVisibility":this._dockPanel.hiddenMode=w.Widget.HiddenMode.ContentVisibility}}widgets(e){switch(null!=e?e:"main"){case"main":return this._dockPanel.widgets();case"left":return(0,f.map)(this._leftHandler.sideBar.titles,(e=>e.owner));case"right":return(0,f.map)(this._rightHandler.sideBar.titles,(e=>e.owner));case"header":return this._headerPanel.children();case"top":return this._topHandler.panel.children();case"menu":return this._menuHandler.panel.children();case"bottom":return this._bottomPanel.children();default:throw new Error(`Invalid area: ${e}`)}}onAfterAttach(e){this.node.dataset.shellMode=this.mode}_updateTitlePanelTitle(){let e=this.currentWidget;const t=this._titleHandler.inputElement;t.value=e?e.title.label:"",t.title=e?e.title.caption:""}_updateCurrentPath(){let e=this.currentWidget,t="";e&&e instanceof d.DocumentWidget&&(t=e.context.path),this._currentPathChanged.emit({newValue:t,oldValue:this._currentPath}),this._currentPath=t}_addToLeftArea(e,t){if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");t=t||this._sideOptionsCache.get(e)||{},this._sideOptionsCache.set(e,t);const i="rank"in t?t.rank:C;this._leftHandler.addWidget(e,i),this._onLayoutModified()}_addToMainArea(e,t){if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");t=t||{};const i=this._dockPanel,n=t.mode||"tab-after";let s=this.currentWidget;t.ref&&(s=(0,f.find)(i.widgets(),(e=>e.id===t.ref))||null);const{title:a}=e;a.dataset={...a.dataset,id:e.id},a.icon instanceof h.LabIcon?a.icon=a.icon.bindprops({stylesheet:"mainAreaTab"}):"string"!=typeof a.icon&&a.icon||(a.iconClass=(0,h.classes)(a.iconClass,"jp-Icon")),i.addWidget(e,{mode:n,ref:s}),"single-document"===i.mode&&this._mainOptionsCache.set(e,t),!1!==t.activate&&i.activateWidget(e)}_addToRightArea(e,t){if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");const i="rank"in(t=t||this._sideOptionsCache.get(e)||{})?t.rank:C;this._sideOptionsCache.set(e,t),this._rightHandler.addWidget(e,i),this._onLayoutModified()}_addToTopArea(e,t){var i;if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");const n=null!==(i=(t=t||{}).rank)&&void 0!==i?i:C;this._topHandler.addWidget(e,n),this._onLayoutModified(),this._topHandler.panel.isHidden&&this._topHandler.panel.show()}_addToMenuArea(e,t){var i;if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");const n=null!==(i=(t=t||{}).rank)&&void 0!==i?i:C;this._menuHandler.addWidget(e,n),this._onLayoutModified(),this._menuHandler.panel.isHidden&&this._menuHandler.panel.show()}_addToHeaderArea(e,t){e.id?(this._headerPanel.addWidget(e),this._onLayoutModified(),this._headerPanel.isHidden&&this._headerPanel.show()):console.error("Widgets added to app shell must have unique id property.")}_addToBottomArea(e,t){e.id?(this._bottomPanel.addWidget(e),this._onLayoutModified(),this._bottomPanel.isHidden&&this._bottomPanel.show()):console.error("Widgets added to app shell must have unique id property.")}_addToDownArea(e,t){if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");t=t||{};const{title:i}=e;i.dataset={...i.dataset,id:e.id},i.icon instanceof h.LabIcon?i.icon=i.icon.bindprops({stylesheet:"mainAreaTab"}):"string"!=typeof i.icon&&i.icon||(i.iconClass=(0,h.classes)(i.iconClass,"jp-Icon")),this._downPanel.addWidget(e),this._onLayoutModified(),this._downPanel.isHidden&&this._downPanel.show()}_adjacentBar(e){const t=this._currentTabBar();if(!t)return null;const i=Array.from(this._dockPanel.tabBars()),n=i.length,s=i.indexOf(t);return"previous"===e?s>0?i[s-1]:0===s?i[n-1]:null:s<n-1?i[s+1]:s===n-1?i[0]:null}_currentTabBar(){const e=this._tracker.currentWidget;if(!e)return null;const t=e.title,i=this._dockPanel.tabBars();return(0,f.find)(i,(e=>e.titles.indexOf(t)>-1))||null}_onActiveChanged(e,t){t.newValue&&(t.newValue.title.className+=` ${k}`),t.oldValue&&(t.oldValue.title.className=t.oldValue.title.className.replace(k,"")),this._activeChanged.emit(t)}_onCurrentChanged(e,t){t.newValue&&(t.newValue.title.className+=` ${P}`),t.oldValue&&(t.oldValue.title.className=t.oldValue.title.className.replace(P,"")),this._currentChanged.emit(t),this._onLayoutModified()}_onTabPanelChanged(){0===this._downPanel.stackedPanel.widgets.length&&this._downPanel.hide(),this._onLayoutModified()}_onLayoutModified(){this._layoutDebouncer.invoke()}}var L;!function(e){e.itemCmp=function(e,t){return e.rank-t.rank},e.normalizeAreaConfig=function e(t,i){i&&("tab-area"!==i.type?i.children.forEach((i=>{e(t,i)})):i.widgets=i.widgets.filter((e=>!e.isDisposed&&e.parent===t)))},e.PanelHandler=class{constructor(){this._panelChildHook=(e,t)=>{switch(t.type){case"child-added":{const e=t.child;if(this._items.find((t=>t.widget===e)))break;const i=this._items[this._items.length-1].rank;this._items.push({widget:e,rank:i})}break;case"child-removed":{const e=t.child;f.ArrayExt.removeFirstWhere(this._items,(t=>t.widget===e))}}return!0},this._items=new Array,this._panel=new w.Panel,v.MessageLoop.installMessageHook(this._panel,this._panelChildHook)}get panel(){return this._panel}addWidget(t,i){t.parent=null;const n={widget:t,rank:i},s=f.ArrayExt.upperBound(this._items,n,e.itemCmp);f.ArrayExt.insert(this._items,s,n),this._panel.insertWidget(s,t)}},e.SideBarHandler=class{constructor(){this._isHiddenByUser=!1,this._items=new Array,this._updated=new p.Signal(this),this._sideBar=new w.TabBar({insertBehavior:"none",removeBehavior:"none",allowDeselect:!0,orientation:"vertical"}),this._stackedPanel=new w.StackedPanel,this._sideBar.hide(),this._stackedPanel.hide(),this._lastCurrent=null,this._sideBar.currentChanged.connect(this._onCurrentChanged,this),this._sideBar.tabActivateRequested.connect(this._onTabActivateRequested,this),this._stackedPanel.widgetRemoved.connect(this._onWidgetRemoved,this)}get isVisible(){return this._sideBar.isVisible}get sideBar(){return this._sideBar}get stackedPanel(){return this._stackedPanel}get updated(){return this._updated}expand(){const e=this._lastCurrent||this._items.length>0&&this._items[0].widget;e&&this.activate(e.id)}activate(e){const t=this._findWidgetByID(e);t&&(this._sideBar.currentTitle=t.title,t.activate())}has(e){return null!==this._findWidgetByID(e)}collapse(){this._sideBar.currentTitle=null}addWidget(e,t){e.parent=null,e.hide();const i={widget:e,rank:t},n=this._findInsertIndex(i);f.ArrayExt.insert(this._items,n,i),this._stackedPanel.insertWidget(n,e);const s=this._sideBar.insertTab(n,e.title);s.dataset={id:e.id},s.icon instanceof h.LabIcon?s.icon=s.icon.bindprops({stylesheet:"sideBar"}):"string"==typeof s.icon&&""!=s.icon?s.iconClass=(0,h.classes)(s.iconClass,"jp-Icon","jp-Icon-20"):s.icon||s.label||(s.icon=h.tabIcon.bindprops({stylesheet:"sideBar"})),this._refreshVisibility()}dehydrate(){const e=null===this._sideBar.currentTitle,t=Array.from(this._stackedPanel.widgets);return{collapsed:e,currentWidget:t[this._sideBar.currentIndex],visible:!this._isHiddenByUser,widgets:t}}rehydrate(e){e.currentWidget&&this.activate(e.currentWidget.id),e.collapsed&&this.collapse(),e.visible||this.hide()}hide(){this._isHiddenByUser=!0,this._refreshVisibility()}show(){this._isHiddenByUser=!1,this._refreshVisibility()}_findInsertIndex(t){return f.ArrayExt.upperBound(this._items,t,e.itemCmp)}_findWidgetIndex(e){return f.ArrayExt.findFirstIndex(this._items,(t=>t.widget===e))}_findWidgetByTitle(e){const t=(0,f.find)(this._items,(t=>t.widget.title===e));return t?t.widget:null}_findWidgetByID(e){const t=(0,f.find)(this._items,(t=>t.widget.id===e));return t?t.widget:null}_refreshVisibility(){this._stackedPanel.setHidden(null===this._sideBar.currentTitle),this._sideBar.setHidden(this._isHiddenByUser||0===this._sideBar.titles.length),this._updated.emit()}_onCurrentChanged(e,t){const i=t.previousTitle?this._findWidgetByTitle(t.previousTitle):null,n=t.currentTitle?this._findWidgetByTitle(t.currentTitle):null;i&&i.hide(),n&&n.show(),this._lastCurrent=n||i,this._refreshVisibility()}_onTabActivateRequested(e,t){t.title.owner.activate()}_onWidgetRemoved(e,t){t===this._lastCurrent&&(this._lastCurrent=null),f.ArrayExt.removeAt(this._items,this._findWidgetIndex(t)),this._sideBar.removeTab(t.title),this._refreshVisibility()}};class t extends w.Widget{constructor(e){super(),this.addClass("jp-skiplink"),this.id="jp-skiplink",this._shell=e,this._createSkipLink("Skip to left side bar")}handleEvent(e){"click"===e.type&&this._focusLeftSideBar()}onAfterAttach(e){super.onAfterAttach(e),this.node.addEventListener("click",this)}onBeforeDetach(e){this.node.removeEventListener("click",this),super.onBeforeDetach(e)}_focusLeftSideBar(){this._shell.expandLeft()}_createSkipLink(e){const t=document.createElement("a");t.href="#",t.tabIndex=1,t.text=e,t.className="skip-link",this.node.appendChild(t)}}e.SkipLinkWidget=t;class i extends w.Widget{constructor(e){super(),this._selected=!1;const t=document.createElement("input");t.type="text",this.node.appendChild(t),this._shell=e,this.id="jp-title-panel-title"}onAfterAttach(e){super.onAfterAttach(e),this.inputElement.addEventListener("keyup",this),this.inputElement.addEventListener("click",this),this.inputElement.addEventListener("blur",this)}onBeforeDetach(e){super.onBeforeDetach(e),this.inputElement.removeEventListener("keyup",this),this.inputElement.removeEventListener("click",this),this.inputElement.removeEventListener("blur",this)}handleEvent(e){switch(e.type){case"keyup":this._evtKeyUp(e);break;case"click":this._evtClick(e);break;case"blur":this._selected=!1}}async _evtKeyUp(e){if("Enter"==e.key){const e=this._shell.currentWidget;if(null==e)return;const t=e.title.label,i=this.inputElement,n=i.value;i.blur(),n!==t?e.title.label=n:i.value=t}}_evtClick(e){if(0!==e.button||this._selected)return;const t=this.inputElement;e.preventDefault(),e.stopPropagation(),this._selected=!0;const i=t.value.indexOf(".");-1===i?t.select():t.setSelectionRange(0,i)}get inputElement(){return this.node.children[0]}}e.TitleHandler=i;class n extends w.SplitPanel{constructor(e={}){super(e),this.updated=new p.Signal(this)}onUpdateRequest(e){super.onUpdateRequest(e),this.updated.emit()}}e.RestorableSplitPanel=n}(L||(L={}));var M=i(20389);class x extends g{constructor(e={shell:new H}){super({...e,shell:e.shell||new H,serviceManager:e.serviceManager||new l.ServiceManager({standby:()=>!this._info.isConnected||"when-hidden"})}),this.name=_.PageConfig.getOption("appName")||"JupyterLab",this.namespace=_.PageConfig.getOption("appNamespace")||this.name,this.registerPluginErrors=[],this.status=new M.J(this),this.version=_.PageConfig.getOption("appVersion")||"unknown",this._info=x.defaultInfo,this.restored=this.shell.restored.then((()=>{})).catch((()=>{}));const t=Object.keys(x.defaultInfo).reduce(((t,i)=>(i in e&&(t[i]=JSON.parse(JSON.stringify(e[i]))),t)),{});this._info={...x.defaultInfo,...t};const i=x.defaultPaths.urls,n=x.defaultPaths.directories,s=e.paths&&e.paths.urls||{},a=e.paths&&e.paths.directories||{};if(this._paths={urls:Object.keys(i).reduce(((e,t)=>{if(t in s){const i=s[t];e[t]=i}else e[t]=i[t];return e}),{}),directories:Object.keys(x.defaultPaths.directories).reduce(((e,t)=>{if(t in a){const i=a[t];e[t]=i}else e[t]=n[t];return e}),{})},this._info.devMode&&this.shell.addClass("jp-mod-devMode"),this.docRegistry.addModelFactory(new d.Base64ModelFactory),e.mimeExtensions)for(const t of(0,m.as)(e.mimeExtensions))this.registerPlugin(t)}get info(){return this._info}get paths(){return this._paths}registerPluginModule(e){let t=e.default;e.hasOwnProperty("__esModule")||(t=e),Array.isArray(t)||(t=[t]),t.forEach((e=>{try{this.registerPlugin(e)}catch(e){this.registerPluginErrors.push(e)}}))}registerPluginModules(e){e.forEach((e=>{this.registerPluginModule(e)}))}}!function(e){e.IInfo=new u.Token("@jupyterlab/application:IInfo","A service providing metadata about the current application, including disabled extensions and whether dev mode is enabled."),e.defaultInfo={devMode:"true"===_.PageConfig.getOption("devMode").toLowerCase(),deferred:{patterns:[],matches:[]},disabled:{patterns:[],matches:[]},mimeExtensions:[],filesCached:"true"===_.PageConfig.getOption("cacheFiles").toLowerCase(),isConnected:!0},e.defaultPaths={urls:{base:_.PageConfig.getOption("baseUrl"),notFound:_.PageConfig.getOption("notFoundUrl"),app:_.PageConfig.getOption("appUrl"),doc:_.PageConfig.getOption("docUrl"),static:_.PageConfig.getOption("staticUrl"),settings:_.PageConfig.getOption("settingsUrl"),themes:_.PageConfig.getOption("themesUrl"),translations:_.PageConfig.getOption("translationsApiUrl"),hubHost:_.PageConfig.getOption("hubHost")||void 0,hubPrefix:_.PageConfig.getOption("hubPrefix")||void 0,hubUser:_.PageConfig.getOption("hubUser")||void 0,hubServerName:_.PageConfig.getOption("hubServerName")||void 0},directories:{appSettings:_.PageConfig.getOption("appSettingsDir"),schemas:_.PageConfig.getOption("schemasDir"),static:_.PageConfig.getOption("staticDir"),templates:_.PageConfig.getOption("templatesDir"),themes:_.PageConfig.getOption("themesDir"),userSettings:_.PageConfig.getOption("userSettingsDir"),serverRoot:_.PageConfig.getOption("serverRoot"),workspaces:_.PageConfig.getOption("workspacesDir")}}}(x||(x={}));var A=i(67863),W=i(2549);class S{constructor(e){this.stop=new u.Token("@jupyterlab/application:Router#stop"),this._routed=new p.Signal(this),this._rules=new Map,this.base=e.base,this.commands=e.commands}get current(){var e,t;const{base:i}=this,n=_.URLExt.parse(window.location.href),{search:s,hash:a}=n,r=null!==(t=null===(e=n.pathname)||void 0===e?void 0:e.replace(i,"/"))&&void 0!==t?t:"";return{hash:a,path:r,request:r+s+a,search:s}}get routed(){return this._routed}navigate(e,t={}){const{base:i}=this,{history:n}=window,{hard:s}=t,a=document.location.href,r=e&&0===e.indexOf(i)?e:_.URLExt.join(i,e);return r===a?s?this.reload():void 0:(n.pushState({},"",r),s?this.reload():void(t.skipRouting||requestAnimationFrame((()=>{this.route()}))))}register(e){var t;const{command:i,pattern:n}=e,s=null!==(t=e.rank)&&void 0!==t?t:100,a=this._rules;return a.set(n,{command:i,rank:s}),new W.DisposableDelegate((()=>{a.delete(n)}))}reload(){window.location.reload()}route(){const{commands:e,current:t,stop:i}=this,{request:n}=t,s=this._routed,a=this._rules,r=[];a.forEach(((e,t)=>{(null==n?void 0:n.match(t))&&r.push(e)}));const o=r.sort(((e,t)=>t.rank-e.rank)),d=new u.PromiseDelegate,l=async()=>{if(!o.length)return s.emit(t),void d.resolve(void 0);const{command:a}=o.pop();try{const n=this.current.request;await e.execute(a,t)===i&&(o.length=0,console.debug(`Routing ${n} was short-circuited by ${a}`))}catch(e){console.warn(`Routing ${n} to ${a} failed`,e)}l()};return l(),d.promise}}const E=new u.Token("@jupyterlab/application:IConnectionLost",'A service for invoking the dialog shown\n  when JupyterLab has lost its connection to the server. Use this if, for some reason,\n  you want to bring up the "connection lost" dialog under new circumstances.'),I=new u.Token("@jupyterlab/application:ILabStatus",'A service for interacting with the application busy/dirty\n  status. Use this if you want to set the application "busy" favicon, or to set\n  the application "dirty" status, which asks the user for confirmation before leaving the application page.'),R=new u.Token("@jupyterlab/application:IRouter","The URL router used by the application. Use this to add custom URL-routing for your extension (e.g., to invoke a command if the user navigates to a sub-path)."),j=new u.Token("@jupyterlab/application:ITreePathUpdater","A service to update the tree path.");function O(e,t,i,n){const{commands:s,shell:a}=e,r=Array.isArray(t)?t:[t];return{label:d("label"),caption:d("caption"),isEnabled:()=>{var e;const t=o("isEnabled");return t.length>0&&!t.some((e=>!1===e))||null!==(e=i.isEnabled)&&void 0!==e&&e},isToggled:()=>{var e;return o("isToggled").some((e=>!0===e))||null!==(e=i.isToggled)&&void 0!==e&&e},isVisible:()=>{var e;const t=o("isVisible");return t.length>0&&!t.some((e=>!1===e))||null===(e=i.isVisible)||void 0===e||e},execute:async()=>{const e=a.currentWidget,t=r.map((t=>null!==e?t.getActiveCommandId(e):null)).filter((e=>null!==e&&s.isEnabled(e)));let n=null;if(t.length>0){for(const e of t)if(n=await s.execute(e),"boolean"==typeof n&&!1===n)break}else i.execute&&(n=await s.execute(i.execute));return n}};function o(e){const t=a.currentWidget;return r.map((e=>null!==t?e.getActiveCommandId(t):null)).filter((e=>null!==e)).map((t=>s[e](t)))}function d(e){return()=>{var t;const s=o(e).map(((t,i)=>"caption"==e&&i>0?t.toLocaleLowerCase():t));switch(s.length){case 0:return null!==(t=i[e])&&void 0!==t?t:"";case 1:return s[0];default:{const e=s.some((e=>/…$/.test(e))),t=s.slice(void 0,-1).map((e=>e.replace(/…$/,""))).join(", "),i=s.slice(-1)[0].replace(/…$/,"")+(e?"…":"");return n.__("%1 and %2",t,i)}}}}}}}]);