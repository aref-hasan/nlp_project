"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5601,1684],{95601:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var o=n(86883),a=n(85421),r=n(38240),i=n(16882),s=n(33625);const c={id:"@jupyter-notebook/terminal-extension:opener",requires:[o.IRouter,r.ITerminalTracker],autoStart:!0,activate:(e,t,n)=>{const{commands:o}=e,a=new RegExp("/terminals/(.*)"),r="router:terminal";o.addCommand(r,{execute:e=>{const t=e.path.match(a);if(!t)return;const[,r]=t;r&&(n.widgetAdded.connect(((e,t)=>{t.content.setOption("closeOnExit",!1)})),o.execute("terminal:open",{name:r}))}}),t.register({command:r,pattern:a})}},d={id:"@jupyter-notebook/terminal-extension:redirect",requires:[r.ITerminalTracker],optional:[i.INotebookPathOpener],autoStart:!0,activate:(e,t,n)=>{const o=a.PageConfig.getBaseUrl(),r=null!=n?n:i.defaultNotebookPathOpener;t.widgetAdded.connect(((t,n)=>{if((0,s.find)(e.shell.widgets("main"),(e=>e.id===n.id)))return;const i=n.content.session.name;r.open({prefix:a.URLExt.join(o,"terminals"),path:i,target:"_blank"}),n.dispose()}))}},l=[c,d]}}]);