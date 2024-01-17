"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1682,5135],{35135:(n,e,t)=>{t.r(e),t.d(e,{CommandIDs:()=>h,default:()=>p});var s=t(86883),o=t(30279),i=t(49255),l=t(59361),a=t(85421),r=t(97934),d=t(81997);const c="jp-mod-kernel";var u;!function(n){n.RunningKernel=class{constructor(n){this.className=c,this.commands=n.commands,this.kernel=n.kernel,this.context=this.kernel.id,this.kernels=n.kernels,this.sessions=n.sessions,this.spec=n.spec||null,this.trans=n.trans}get children(){var n;const e=[],t=h.kernelOpenSession,{commands:s}=this;for(const o of this.sessions.running())if(this.kernel.id===(null===(n=o.kernel)||void 0===n?void 0:n.id)){const{name:n,path:i,type:a}=o;e.push({className:c,context:this.kernel.id,open:()=>{s.execute(t,{name:n,path:i,type:a})},icon:()=>"console"===a?l.consoleIcon:"notebook"===a?l.notebookIcon:l.jupyterIcon,label:()=>n,labelTitle:()=>i})}return e}shutdown(){return this.kernels.shutdown(this.kernel.id)}icon(){const{spec:n}=this;return n&&n.resources?n.resources["logo-svg"]||n.resources["logo-64x64"]||n.resources["logo-32x32"]:l.jupyterIcon}label(){const{kernel:n,spec:e}=this;return(null==e?void 0:e.display_name)||n.name}labelTitle(){var n;const{trans:e}=this,{id:t}=this.kernel,s=[`${this.label()}: ${t}`];for(const t of this.sessions.running())if(this.kernel.id===(null===(n=t.kernel)||void 0===n?void 0:n.id)){const{path:n,type:o}=t;s.push(e.__("%1\nPath: %2",o,n))}return s.join("\n\n")}},n.runningChanged=new d.Signal({})}(u||(u={}));var h,g=t(49358);class m{constructor(n){this._tabsChanged=new d.Signal(this),this._widgets=[],this._labShell=n,this._labShell.layoutModified.connect(this._emitTabsChanged,this)}get tabsChanged(){return this._tabsChanged}addWidget(n){n.title.changed.connect(this._emitTabsChanged,this),this._widgets.push(n)}_emitTabsChanged(){this._widgets.forEach((n=>{n.title.changed.disconnect(this._emitTabsChanged,this)})),this._widgets=[],this._tabsChanged.emit(void 0)}}!function(n){n.kernelNewConsole="running:kernel-new-console",n.kernelNewNotebook="running:kernel-new-notebook",n.kernelOpenSession="running:kernel-open-session",n.kernelShutDown="running:kernel-shut-down",n.showPanel="running:show-panel"}(h||(h={}));const p={activate:function(n,e,t,s){const i=e.load("jupyterlab"),d=new o.RunningSessionManagers,p=new o.RunningSessions(d,e);return p.id="jp-running-sessions",p.title.caption=i.__("Running Terminals and Kernels"),p.title.icon=l.runningIcon,p.node.setAttribute("role","region"),p.node.setAttribute("aria-label",i.__("Running Sessions section")),t&&t.add(p,"running-sessions"),s&&function(n,e,t){const s=new m(t),o=e.load("jupyterlab");n.add({name:o.__("Open Tabs"),running:()=>Array.from(t.widgets("main")).map((n=>(s.addWidget(n),new i(n)))),shutdownAll:()=>{for(const n of t.widgets("main"))n.close()},refreshRunning:()=>{},runningChanged:s.tabsChanged,shutdownLabel:o.__("Close"),shutdownAllLabel:o.__("Close All"),shutdownAllConfirmationText:o.__("Are you sure you want to close all open tabs?")});class i{constructor(n){this._widget=n}open(){t.activateById(this._widget.id)}shutdown(){this._widget.close()}icon(){const n=this._widget.title.icon;return n instanceof l.LabIcon?n:l.fileIcon}label(){return this._widget.title.label}labelTitle(){let n;return n=this._widget instanceof g.DocumentWidget?this._widget.context.path:this._widget.title.label,n}}}(d,e,s),async function(n,e,t){const{commands:s,contextMenu:o,serviceManager:i}=t,{kernels:d,kernelspecs:g,sessions:m}=i,{runningChanged:p,RunningKernel:w}=u,_=new r.Throttler((()=>p.emit(void 0)),100),b=e.load("jupyterlab");d.runningChanged.connect((()=>{_.invoke()})),m.runningChanged.connect((()=>{_.invoke()})),await Promise.all([d.ready,g.ready,m.ready]),n.add({name:b.__("Kernels"),running:()=>Array.from(d.running()).map((n=>{var e;return new w({commands:s,kernel:n,kernels:d,sessions:m,spec:null===(e=g.specs)||void 0===e?void 0:e.kernelspecs[n.name],trans:b})})),shutdownAll:()=>d.shutdownAll(),refreshRunning:()=>Promise.all([d.refreshRunning(),m.refreshRunning()]),runningChanged:p,shutdownLabel:b.__("Shut Down Kernel"),shutdownAllLabel:b.__("Shut Down All"),shutdownAllConfirmationText:b.__("Are you sure you want to permanently shut down all running kernels?")});const k=n=>n.classList.contains(c);s.addCommand(h.kernelNewConsole,{icon:l.consoleIcon,label:b.__("New Console for Kernel"),execute:n=>{var e;const o=t.contextMenuHitTest(k),i=null!==(e=n.id)&&void 0!==e?e:null==o?void 0:o.dataset.context;if(i)return s.execute("console:create",{kernelPreference:{id:i}})}}),s.addCommand(h.kernelNewNotebook,{icon:l.notebookIcon,label:b.__("New Notebook for Kernel"),execute:n=>{var e;const o=t.contextMenuHitTest(k),i=null!==(e=n.id)&&void 0!==e?e:null==o?void 0:o.dataset.context;if(i)return s.execute("notebook:create-new",{kernelId:i})}}),s.addCommand(h.kernelOpenSession,{icon:n=>"console"===n.type?l.consoleIcon:"notebook"===n.type?l.notebookIcon:void 0,isEnabled:({path:n,type:e})=>!!e||void 0!==n,label:({name:n,path:e})=>n||a.PathExt.basename(e||b.__("Unknown Session")),execute:({path:n,type:e})=>{if(!e||void 0===n)return;const t="console"===e?"console:open":"docmanager:open";return s.execute(t,{path:n})}}),s.addCommand(h.kernelShutDown,{icon:l.closeIcon,label:b.__("Shut Down Kernel"),execute:n=>{var e;const s=t.contextMenuHitTest(k),o=null!==(e=n.id)&&void 0!==e?e:null==s?void 0:s.dataset.context;if(o)return d.shutdown(o)}});const v=[];o.opened.connect((async()=>{var n,e,s;const i=null!==(e=null===(n=o.menu.items.find((n=>{var e;return"submenu"===n.type&&"jp-contextmenu-connected-sessions"===(null===(e=n.submenu)||void 0===e?void 0:e.id)})))||void 0===n?void 0:n.submenu)&&void 0!==e?e:null;if(!i)return;v.forEach((n=>n.dispose())),v.length=0,i.clearItems();const l=t.contextMenuHitTest(k),a=null==l?void 0:l.dataset.context;if(!a)return;const r=h.kernelOpenSession;for(const n of m.running())if(a===(null===(s=n.kernel)||void 0===s?void 0:s.id)){const{name:e,path:t,type:s}=n;v.push(i.addItem({command:r,args:{name:e,path:t,type:s}}))}}))}(d,e,n),n.shell.add(p,"left",{rank:200,type:"Sessions and Tabs"}),n.commands.addCommand(h.showPanel,{label:i.__("Sessions and Tabs"),execute:()=>{n.shell.activateById(p.id)}}),d},id:"@jupyterlab/running-extension:plugin",description:"Provides the running session managers.",provides:o.IRunningSessionManagers,requires:[i.ITranslator],optional:[s.ILayoutRestorer,s.ILabShell],autoStart:!0}}}]);