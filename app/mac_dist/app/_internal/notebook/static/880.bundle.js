(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[880],{67417:()=>{},60880:(e,n,o)=>{"use strict";o.r(n);var t=o(85421);async function a(e,n){try{return(await window._JUPYTERLAB[e].get(n))()}catch(o){throw console.warn(`Failed to create module: package: ${e}; module: ${n}`),o}}o(7559),o(67417),window.addEventListener("load",(async function(){const e=[o(62471),o(57627),o(54418),o(17405)],n=await Promise.all(e);let r=[o(88201),o(62148),o(57406),o(69751),o(41949),o(37837),o(36274),o(70090).default.filter((({id:e})=>["@jupyterlab/application-extension:commands","@jupyterlab/application-extension:context-menu","@jupyterlab/application-extension:faviconbusy","@jupyterlab/application-extension:router","@jupyterlab/application-extension:top-bar","@jupyterlab/application-extension:top-spacer"].includes(e))),o(85364).default.filter((({id:e})=>["@jupyterlab/apputils-extension:palette","@jupyterlab/apputils-extension:notification","@jupyterlab/apputils-extension:sanitizer","@jupyterlab/apputils-extension:sessionDialogs","@jupyterlab/apputils-extension:settings","@jupyterlab/apputils-extension:state","@jupyterlab/apputils-extension:themes","@jupyterlab/apputils-extension:themes-palette-menu","@jupyterlab/apputils-extension:toolbar-registry","@jupyterlab/apputils-extension:utilityCommands"].includes(e))),o(65276),o(75615).default.filter((({id:e})=>["@jupyterlab/completer-extension:base-service","@jupyterlab/completer-extension:manager"].includes(e))),o(24763).default.filter((({id:e})=>["@jupyterlab/console-extension:completer","@jupyterlab/console-extension:factory","@jupyterlab/console-extension:foreign","@jupyterlab/console-extension:tracker"].includes(e))),o(23050),o(89142).default.filter((({id:e})=>["@jupyterlab/docmanager-extension:plugin","@jupyterlab/docmanager-extension:download","@jupyterlab/docmanager-extension:contexts","@jupyterlab/docmanager-extension:manager"].includes(e))),o(80354).default.filter((({id:e})=>["@jupyterlab/documentsearch-extension:plugin"].includes(e))),o(60245).default.filter((({id:e})=>["@jupyterlab/filebrowser-extension:factory","@jupyterlab/filebrowser-extension:default-file-browser"].includes(e))),o(87919).default.filter((({id:e})=>["@jupyterlab/fileeditor-extension:plugin"].includes(e))),o(41709),o(44783),o(40510),o(11945),o(11444),o(3735),o(1696).default.filter((({id:e})=>["@jupyterlab/notebook-extension:code-console","@jupyterlab/notebook-extension:export","@jupyterlab/notebook-extension:factory","@jupyterlab/notebook-extension:tracker","@jupyterlab/notebook-extension:widget-factory"].includes(e))),o(77333),o(33042),o(9446),o(7980),o(28410),o(97050),o(36423)];switch(`/${t.PageConfig.getOption("notebookPage")}`){case"/tree":r=r.concat([o(75037),o(60245).default.filter((({id:e})=>["@jupyterlab/filebrowser-extension:browser","@jupyterlab/filebrowser-extension:download","@jupyterlab/filebrowser-extension:file-upload-status","@jupyterlab/filebrowser-extension:open-with","@jupyterlab/filebrowser-extension:search","@jupyterlab/filebrowser-extension:share-file"].includes(e))),o(36428),o(1570),o(73734)]);break;case"/notebooks":r=r.concat([o(50089),o(8457),o(98916).default.filter((({id:e})=>["@jupyterlab/debugger-extension:config","@jupyterlab/debugger-extension:main","@jupyterlab/debugger-extension:notebooks","@jupyterlab/debugger-extension:service","@jupyterlab/debugger-extension:sidebar","@jupyterlab/debugger-extension:sources"].includes(e))),o(40862),o(1696).default.filter((({id:e})=>["@jupyterlab/notebook-extension:active-cell-tool","@jupyterlab/notebook-extension:completer","@jupyterlab/notebook-extension:metadata-editor","@jupyterlab/notebook-extension:search","@jupyterlab/notebook-extension:toc","@jupyterlab/notebook-extension:tools","@jupyterlab/notebook-extension:update-raw-mimetype"].includes(e))),o(11097).default.filter((({id:e})=>["@jupyterlab/toc-extension:registry","@jupyterlab/toc-extension:tracker"].includes(e))),o(95386).default.filter((({id:e})=>["@jupyterlab/tooltip-extension:manager","@jupyterlab/tooltip-extension:notebooks"].includes(e)))]);break;case"/consoles":r=r.concat([o(95386).default.filter((({id:e})=>["@jupyterlab/tooltip-extension:manager","@jupyterlab/tooltip-extension:consoles"].includes(e)))]);break;case"/edit":r=r.concat([o(87919).default.filter((({id:e})=>["@jupyterlab/fileeditor-extension:completer","@jupyterlab/fileeditor-extension:search"].includes(e))),o(10567)])}const i=[];function*l(e){let n;n=Object.prototype.hasOwnProperty.call(e,"__esModule")?e.default:e;let o=Array.isArray(n)?n:[n];for(let e of o)t.PageConfig.Extension.isDisabled(e.id)?i.push(e.id):yield e}const p=JSON.parse(t.PageConfig.getOption("federated_extensions")),s=[],d=[],u=[],b=[];(await Promise.allSettled(p.map((async e=>(await async function(e,n){await function(e){return new Promise(((n,o)=>{const t=document.createElement("script");t.onerror=o,t.onload=n,t.async=!0,document.head.appendChild(t),t.src=e}))}(e),await o.I("default");const t=window._JUPYTERLAB[n];await t.init(o.S.default)}(`${t.URLExt.join(t.PageConfig.getOption("fullLabextensionsUrl"),e.name,e.load)}`,e.name),e))))).forEach((e=>{if("rejected"===e.status)return void console.error(e.reason);const n=e.value;n.extension&&d.push(a(n.name,n.extension)),n.mimeExtension&&u.push(a(n.name,n.mimeExtension)),n.style&&!t.PageConfig.Extension.isDisabled(n.name)&&b.push(a(n.name,n.style))})),(await Promise.all(r)).forEach((e=>{for(let n of l(e))s.push(n)})),(await Promise.allSettled(d)).forEach((e=>{if("fulfilled"===e.status)for(let n of l(e.value))s.push(n);else console.error(e.reason)})),(await Promise.allSettled(u)).forEach((e=>{if("fulfilled"===e.status)for(let o of l(e.value))n.push(o);else console.error(e.reason)})),(await Promise.allSettled(b)).filter((({status:e})=>"rejected"===e)).forEach((({reason:e})=>{console.error(e)})),t.PageConfig.setOption("allPlugins",'{"/":{"@jupyter-notebook/application-extension":true,"@jupyter-notebook/console-extension":true,"@jupyter-notebook/docmanager-extension":true,"@jupyter-notebook/documentsearch-extension":true,"@jupyter-notebook/help-extension":true,"@jupyter-notebook/notebook-extension":true,"@jupyter-notebook/terminal-extension":true,"@jupyterlab/application-extension":["@jupyterlab/application-extension:commands","@jupyterlab/application-extension:context-menu","@jupyterlab/application-extension:faviconbusy","@jupyterlab/application-extension:router","@jupyterlab/application-extension:top-bar","@jupyterlab/application-extension:top-spacer"],"@jupyterlab/apputils-extension":["@jupyterlab/apputils-extension:palette","@jupyterlab/apputils-extension:notification","@jupyterlab/apputils-extension:sanitizer","@jupyterlab/apputils-extension:sessionDialogs","@jupyterlab/apputils-extension:settings","@jupyterlab/apputils-extension:state","@jupyterlab/apputils-extension:themes","@jupyterlab/apputils-extension:themes-palette-menu","@jupyterlab/apputils-extension:toolbar-registry","@jupyterlab/apputils-extension:utilityCommands"],"@jupyterlab/codemirror-extension":true,"@jupyterlab/completer-extension":["@jupyterlab/completer-extension:base-service","@jupyterlab/completer-extension:manager"],"@jupyterlab/console-extension":["@jupyterlab/console-extension:completer","@jupyterlab/console-extension:factory","@jupyterlab/console-extension:foreign","@jupyterlab/console-extension:tracker"],"@jupyterlab/csvviewer-extension":true,"@jupyterlab/docmanager-extension":["@jupyterlab/docmanager-extension:plugin","@jupyterlab/docmanager-extension:download","@jupyterlab/docmanager-extension:contexts","@jupyterlab/docmanager-extension:manager"],"@jupyterlab/documentsearch-extension":["@jupyterlab/documentsearch-extension:plugin"],"@jupyterlab/filebrowser-extension":["@jupyterlab/filebrowser-extension:factory","@jupyterlab/filebrowser-extension:default-file-browser"],"@jupyterlab/fileeditor-extension":["@jupyterlab/fileeditor-extension:plugin"],"@jupyterlab/htmlviewer-extension":true,"@jupyterlab/imageviewer-extension":true,"@jupyterlab/lsp-extension":true,"@jupyterlab/mainmenu-extension":true,"@jupyterlab/markedparser-extension":true,"@jupyterlab/mathjax-extension":true,"@jupyterlab/notebook-extension":["@jupyterlab/notebook-extension:code-console","@jupyterlab/notebook-extension:export","@jupyterlab/notebook-extension:factory","@jupyterlab/notebook-extension:tracker","@jupyterlab/notebook-extension:widget-factory"],"@jupyterlab/shortcuts-extension":true,"@jupyterlab/terminal-extension":true,"@jupyterlab/theme-light-extension":true,"@jupyterlab/theme-dark-extension":true,"@jupyterlab/translation-extension":true,"@jupyterlab/ui-components-extension":true,"@jupyterlab/hub-extension":true},"/tree":{"@jupyterlab/extensionmanager-extension":true,"@jupyterlab/filebrowser-extension":["@jupyterlab/filebrowser-extension:browser","@jupyterlab/filebrowser-extension:download","@jupyterlab/filebrowser-extension:file-upload-status","@jupyterlab/filebrowser-extension:open-with","@jupyterlab/filebrowser-extension:search","@jupyterlab/filebrowser-extension:share-file"],"@jupyter-notebook/tree-extension":true,"@jupyterlab/running-extension":true,"@jupyterlab/settingeditor-extension":true},"/notebooks":{"@jupyterlab/celltags-extension":true,"@jupyterlab/cell-toolbar-extension":true,"@jupyterlab/debugger-extension":["@jupyterlab/debugger-extension:config","@jupyterlab/debugger-extension:main","@jupyterlab/debugger-extension:notebooks","@jupyterlab/debugger-extension:service","@jupyterlab/debugger-extension:sidebar","@jupyterlab/debugger-extension:sources"],"@jupyterlab/metadataform-extension":true,"@jupyterlab/notebook-extension":["@jupyterlab/notebook-extension:active-cell-tool","@jupyterlab/notebook-extension:completer","@jupyterlab/notebook-extension:metadata-editor","@jupyterlab/notebook-extension:search","@jupyterlab/notebook-extension:toc","@jupyterlab/notebook-extension:tools","@jupyterlab/notebook-extension:update-raw-mimetype"],"@jupyterlab/toc-extension":["@jupyterlab/toc-extension:registry","@jupyterlab/toc-extension:tracker"],"@jupyterlab/tooltip-extension":["@jupyterlab/tooltip-extension:manager","@jupyterlab/tooltip-extension:notebooks"]},"/consoles":{"@jupyterlab/tooltip-extension":["@jupyterlab/tooltip-extension:manager","@jupyterlab/tooltip-extension:consoles"]},"/edit":{"@jupyterlab/fileeditor-extension":["@jupyterlab/fileeditor-extension:completer","@jupyterlab/fileeditor-extension:search"],"@jupyterlab/markdownviewer-extension":true}}');const c=new(0,o(16882).NotebookApp)({mimeExtensions:n});c.registerPluginModules(s),"true"===(t.PageConfig.getOption("exposeAppInBrowser")||"").toLowerCase()&&(window.jupyterapp=c),await c.start()}))},7559:(e,n,o)=>{"use strict";o.r(n),o(92076),o(70022),o(74907),o(12619),o(88186),o(73685),o(92245),o(1257),o(60597),o(38583),o(68903),o(86560),o(92291),o(90185),o(43642),o(65062),o(98180),o(18915),o(71380),o(16393),o(54460),o(18934),o(24017),o(72867),o(44715),o(52607),o(91532),o(20603),o(67828),o(38391),o(9755),o(45288),o(53555),o(9149),o(74782),o(93027),o(91232),o(3727),o(3902),o(78864),o(91367),o(26053),o(84221),o(77522),o(47275),o(1285),o(63897),o(85480),o(94410),o(49245),o(37609),o(49733),o(38438)},12563:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>r});var t=o(93476),a=o.n(t)()((function(e){return e[1]}));a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n|\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-NotebookSpacer {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.jp-MainAreaWidget {\n  height: 100%;\n}\n\n.jp-Toolbar > .jp-Toolbar-item {\n  height: unset;\n}\n\n#jp-UserMenu {\n  flex: 0 0 auto;\n  display: flex;\n  text-align: center;\n  margin-top: 8px;\n}\n\n.jp-MimeDocument .jp-RenderedJSON {\n  background: var(--jp-layout-color0);\n}\n\n/* Hide the stub toolbar that appears above terminals and documents */\n\n.jp-MainAreaWidget > .jp-Toolbar-micro {\n  display: none;\n}\n\n#jp-NotebookLogo {\n  /* bring logo to the front so it is selectable by tab*/\n  z-index: 10;\n}\n",""]);const r=a},21025:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>r});var t=o(93476),a=o.n(t)()((function(e){return e[1]}));a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n:root {\n  --jp-private-topbar-height: 28px;\n  /* Override the layout-2 color for the dark theme */\n  --md-grey-800: #323232;\n  --jp-notebook-max-width: 1200px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--jp-layout-color2);\n}\n\n#main {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#top-panel-wrapper {\n  min-height: calc(1.5 * var(--jp-private-topbar-height));\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color0);\n  background: var(--jp-layout-color1);\n}\n\n#top-panel {\n  display: flex;\n  min-height: calc(1.5 * var(--jp-private-topbar-height));\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n}\n\n#menu-panel-wrapper {\n  min-height: var(--jp-private-topbar-height);\n  background: var(--jp-layout-color1);\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color0);\n  box-shadow: var(--jp-elevation-z1);\n}\n\n#menu-panel {\n  display: flex;\n  min-height: var(--jp-private-topbar-height);\n  background: var(--jp-layout-color1);\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: var(--jp-notebook-max-width);\n}\n\n#main-panel {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: var(--jp-notebook-max-width);\n}\n\n#spacer-widget-top {\n  min-height: 16px;\n}\n\n/* Only edit pages should have a bottom space */\n\nbody[data-notebook='edit'] #spacer-widget-bottom {\n  min-height: 16px;\n}\n\n/* Special case notebooks as document oriented pages */\n\n[data-notebook]:not(body[data-notebook='notebooks']) #main-panel {\n  box-shadow: var(--jp-elevation-z4);\n}\n\n.jp-TreePanel > .lm-TabPanel-stackedPanel {\n  box-shadow: var(--jp-elevation-z4);\n}\n\nbody[data-notebook='notebooks'] #main-panel {\n  margin-left: unset;\n  margin-right: unset;\n  max-width: unset;\n}\n\nbody[data-notebook='notebooks'] #spacer-widget-top {\n  min-height: unset;\n}\n\n#main-panel > .jp-TreePanel {\n  padding: 0px 5px;\n}\n\n@media only screen and (max-width: 760px) {\n  #main-panel > .jp-TreePanel {\n    margin: 0px -5px;\n  }\n}\n",""]);const r=a},53769:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>r});var t=o(93476),a=o.n(t)()((function(e){return e[1]}));a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|\n| Adapted from JupyterLab's packages/application/style/sidepanel.css.\n|----------------------------------------------------------------------------*/\n\n/*-----------------------------------------------------------------------------\n| Variables\n|----------------------------------------------------------------------------*/\n\n:root {\n  --jp-private-sidebar-tab-width: 32px;\n}\n\n/*-----------------------------------------------------------------------------\n| SideBar\n|----------------------------------------------------------------------------*/\n\n/* Stack panels */\n\n#jp-right-stack,\n#jp-left-stack {\n  display: flex;\n  flex-direction: column;\n  min-width: var(--jp-sidebar-min-width);\n}\n\n#jp-left-stack .jp-SidePanel-collapse,\n#jp-right-stack .jp-SidePanel-collapse {\n  display: flex;\n  flex: 0 0 auto;\n  min-height: 0;\n  padding: 0;\n}\n\n#jp-left-stack .jp-SidePanel-collapse {\n  justify-content: right;\n}\n\n#jp-right-stack .jp-SidePanel-collapse {\n  justify-content: left;\n}\n\n#jp-left-stack .lm-StackedPanel,\n#jp-right-stack .lm-StackedPanel {\n  flex: 1 1 auto;\n}\n",""]);const r=a},33241:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>r});var t=o(93476),a=o.n(t)()((function(e){return e[1]}));a.push([e.id,"",""]);const r=a},35896:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>r});var t=o(93476),a=o.n(t)()((function(e){return e[1]}));a.push([e.id,".jp-Document {\n  height: 100%;\n}\n",""]);const r=a},36780:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>r});var t=o(93476),a=o.n(t)()((function(e){return e[1]}));a.push([e.id,"",""]);const r=a},88190:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>r});var t=o(93476),a=o.n(t)()((function(e){return e[1]}));a.push([e.id,".jp-AboutNotebook .jp-Dialog-header {\n  justify-content: center;\n  padding: 0;\n}\n\n.jp-AboutNotebook-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: var(--jp-flat-button-padding);\n}\n\n.jp-AboutNotebook-header-text {\n  margin-left: 16px;\n}\n\n.jp-AboutNotebook-version {\n  color: var(--jp-ui-font-color1);\n  font-size: var(--jp-ui-font-size1);\n  padding-bottom: 30px;\n  font-weight: 400;\n  letter-spacing: 0.4px;\n  line-height: 1.12;\n  min-width: 360px;\n  text-align: center;\n}\n\n.jp-AboutNotebook-body {\n  display: flex;\n  font-size: var(--jp-ui-font-size2);\n  padding: var(--jp-flat-button-padding);\n  color: var(--jp-ui-font-color1);\n  text-align: center;\n  flex-direction: column;\n  min-width: 360px;\n  overflow: hidden;\n}\n\n.jp-AboutNotebook-about-body pre {\n  white-space: pre-wrap;\n}\n\n.jp-AboutNotebook-about-externalLinks {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  color: var(--jp-warn-color0);\n}\n\n.jp-AboutNotebook-about-copyright {\n  padding-top: 25px;\n}\n",""]);const r=a},3817:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>l});var t=o(93476),a=o.n(t),r=o(48941),i=a()((function(e){return e[1]}));i.i(r.Z),i.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n|\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n/**\n  Document oriented look for the notebook.\n  This includes changes to the look and feel of the JupyterLab Notebook\n  component like:\n  - scrollbar to the right of the page\n  - drop shadow on the notebook\n  - smaller empty space at the bottom of the notebook\n  - compact view on mobile\n*/\n\n/* Keep the notebook centered on the page */\n\nbody[data-notebook='notebooks'] .jp-NotebookPanel-toolbar {\n  padding-left: calc(calc(100% - var(--jp-notebook-max-width)) * 0.5);\n  padding-right: calc(calc(100% - var(--jp-notebook-max-width)) * 0.5);\n}\n\nbody[data-notebook='notebooks'] .jp-Notebook {\n  padding-top: unset;\n  padding-left: calc(calc(100% - var(--jp-notebook-max-width)) * 0.5);\n  padding-right: calc(\n    calc(\n        100% - var(--jp-notebook-max-width) - var(--jp-notebook-padding-offset)\n      ) * 0.5\n  );\n  background: var(--jp-layout-color2);\n}\n\nbody[data-notebook='notebooks'] .jp-WindowedPanel-inner {\n  margin-top: var(--jp-notebook-toolbar-margin-bottom);\n}\n\nbody[data-notebook='notebooks'] .jp-Notebook-cell {\n  background: var(--jp-layout-color0);\n  padding-left: calc(2 * var(--jp-cell-padding));\n  padding-right: calc(2 * var(--jp-cell-padding));\n}\n\n/* Empty space at the bottom of the notebook (similar to classic) */\nbody[data-notebook='notebooks'] .jp-Notebook.jp-mod-scrollPastEnd::after {\n  min-height: 100px;\n}\n\n/* Fix background colors */\n\nbody[data-notebook='notebooks'] .jp-Notebook > * {\n  background: var(--jp-layout-color0);\n}\n\nbody[data-notebook='notebooks']\n  .jp-Notebook.jp-mod-commandMode\n  .jp-Cell.jp-mod-active.jp-mod-selected:not(.jp-mod-multiSelected) {\n  background: var(--jp-layout-color0) !important;\n}\n\n/**\n  Extra padding to the first and and last cell of the notebook.\n  TODO: revisit when https://github.com/jupyterlab/jupyterlab/issues/13151 is fixed\n*/\n.jp-Notebook-cell[data-windowed-list-index='0'] {\n  padding-top: calc(2 * var(--jp-notebook-padding));\n}\n\nbody[data-notebook='notebooks'] .jp-WindowedPanel-window > *:last-child {\n  padding-bottom: calc(2 * var(--jp-notebook-padding));\n}\n\nbody[data-notebook='notebooks']\n  .jp-Notebook\n  .jp-Notebook-cell:not(:first-child)::before {\n  content: ' ';\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 11px;\n}\n\n/* Cell toolbar adjustments */\n\nbody[data-notebook='notebooks'] .jp-cell-toolbar {\n  background: unset;\n  box-shadow: unset;\n}\n\nbody[data-notebook='notebooks']\n  .jp-RawCell[data-windowed-list-index='0']\n  .jp-cell-toolbar,\nbody[data-notebook='notebooks']\n  .jp-MarkdownCell[data-windowed-list-index='0']\n  .jp-cell-toolbar {\n  top: calc(2 * var(--jp-notebook-padding));\n}\n\n/** first code cell on mobile\n    (keep the selector above the media query)\n*/\nbody[data-notebook='notebooks']\n  .jp-CodeCell[data-windowed-list-index='0']\n  .jp-cell-toolbar {\n  top: unset;\n}\n\n@media only screen and (max-width: 760px) {\n  /* first code cell on mobile */\n  body[data-notebook='notebooks']\n    .jp-CodeCell[data-windowed-list-index='0']\n    .jp-cell-toolbar {\n    top: var(--jp-notebook-padding);\n  }\n\n  body[data-notebook='notebooks'] .jp-MarkdownCell .jp-cell-toolbar,\n  body[data-notebook='notebooks'] .jp-RawCell .jp-cell-toolbar {\n    top: calc(0.5 * var(--jp-notebook-padding));\n  }\n}\n\n/* Tweak the notebook footer (to add a new cell) */\nbody[data-notebook='notebooks'] .jp-Notebook-footer {\n  width: 100%;\n  margin-left: unset;\n  background: unset;\n}\n\n/* Mobile View */\n\nbody[data-format='mobile'] .jp-NotebookCheckpoint {\n  display: none;\n}\n\nbody[data-format='mobile'] .jp-Notebook > *:first-child {\n  margin-top: 0;\n}\n\nbody[data-format='mobile'] .jp-ToolbarButton .jp-DebuggerBugButton {\n  display: none;\n}\n\n/* Virtual Notebook fixes */\n\nbody[data-notebook='notebooks'] .jp-WindowedPanel-window {\n  background: var(--jp-layout-color0);\n}\n\n/* Notebook box shadow */\n\nbody[data-notebook='notebooks'] .jp-Notebook > *:first-child:not(:last-child) {\n  box-shadow: var(--jp-elevation-z4);\n}\n\nbody[data-notebook='notebooks']\n  .jp-Notebook\n  > *:first-child:last-child::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  box-shadow: 0px 0px 12px 1px var(--jp-shadow-umbra-color);\n}\n\nbody[data-notebook='notebooks']\n  .jp-Notebook\n  .jp-Notebook-cell:not(:first-child)::after,\nbody[data-notebook='notebooks']\n  .jp-Notebook\n  .jp-Notebook-cell:not(:first-child)::before {\n  content: ' ';\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 11px;\n}\n\n/* Additional customizations of the components on the notebook page */\n\n.jp-NotebookKernelLogo {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-right: 8px;\n}\n\n.jp-NotebookKernelLogo img {\n  max-width: 28px;\n  max-height: 28px;\n  display: flex;\n}\n\n.jp-NotebookKernelStatus {\n  margin: 0;\n  font-weight: normal;\n  font-size: var(--jp-ui-font-size1);\n  color: var(--jp-ui-font-color0);\n  font-family: var(--jp-ui-font-family);\n  line-height: var(--jp-private-title-panel-height);\n  padding-left: var(--jp-kernel-status-padding);\n  padding-right: var(--jp-kernel-status-padding);\n}\n\n.jp-NotebookKernelStatus-error {\n  background-color: var(--jp-error-color0);\n}\n\n.jp-NotebookKernelStatus-warn {\n  background-color: var(--jp-warn-color0);\n}\n\n.jp-NotebookKernelStatus-info {\n  background-color: var(--jp-info-color0);\n}\n\n.jp-NotebookKernelStatus-fade {\n  animation: 0.5s fade-out forwards;\n}\n\n.jp-NotebookTrustedStatus {\n  background: var(--jp-layout-color1);\n  color: var(--jp-ui-font-color1);\n  margin-top: 4px;\n  margin-bottom: 4px;\n  border: solid 1px var(--jp-border-color2);\n  cursor: help;\n}\n\n.jp-NotebookTrustedStatus-not-trusted {\n  cursor: pointer;\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n#jp-title h1 {\n  cursor: pointer;\n  font-size: 18px;\n  margin: 0;\n  font-weight: normal;\n  color: var(--jp-ui-font-color0);\n  font-family: var(--jp-ui-font-family);\n  line-height: calc(1.5 * var(--jp-private-title-panel-height));\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n#jp-title h1:hover {\n  background: var(--jp-layout-color2);\n}\n\n.jp-NotebookCheckpoint {\n  font-size: 14px;\n  margin-left: 5px;\n  margin-right: 5px;\n  font-weight: normal;\n  color: var(--jp-ui-font-color0);\n  font-family: var(--jp-ui-font-family);\n  line-height: calc(1.5 * var(--jp-private-title-panel-height));\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.jp-skiplink {\n  position: absolute;\n  top: -100em;\n}\n\n.jp-skiplink:focus-within {\n  position: absolute;\n  z-index: 10000;\n  top: 0;\n  left: 46%;\n  margin: 0 auto;\n  padding: 1em;\n  width: 15%;\n  box-shadow: var(--jp-elevation-z4);\n  border-radius: 4px;\n  background: var(--jp-layout-color0);\n  text-align: center;\n}\n\n.jp-skiplink:focus-within a {\n  text-decoration: underline;\n  color: var(--jp-content-link-color);\n}\n",""]);const l=i},48941:(e,n,o)=>{"use strict";o.d(n,{Z:()=>r});var t=o(93476),a=o.n(t)()((function(e){return e[1]}));a.push([e.id,":root {\n  --jp-notebook-toolbar-margin-bottom: 20px;\n  --jp-notebook-padding-offset: 20px;\n\n  --jp-kernel-status-padding: 5px;\n}\n",""]);const r=a},12966:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>r});var t=o(93476),a=o.n(t)()((function(e){return e[1]}));a.push([e.id,"",""]);const r=a},71308:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>r});var t=o(93476),a=o.n(t)()((function(e){return e[1]}));a.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n|\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-FileBrowser-toolbar .jp-Toolbar-item.jp-DropdownMenu,\n.jp-FileBrowser-toolbar .jp-Toolbar-item.jp-ToolbarButton,\n.jp-FileBrowser-toolbar .jp-Toolbar-item.jp-CommandToolbarButton {\n  border: solid 1px var(--jp-border-color2);\n  margin: 1px;\n  padding: 0px;\n}\n\n.jp-FileBrowser-toolbar button.jp-ToolbarButtonComponent {\n  height: var(--jp-flat-button-height);\n}\n\n.jp-FileBrowser-filterBox {\n  padding: 0;\n  flex: 0 0 auto;\n}\n\n.jp-FileBrowser-filterBox input {\n  line-height: 24px;\n}\n\n.jp-DirListing-content .jp-DirListing-checkboxWrapper {\n  visibility: visible;\n}\n\n/* Action buttons */\n\n.jp-FileBrowser-toolbar > .jp-FileActions.jp-Toolbar-item {\n  display: flex;\n  flex-direction: row;\n}\n\n.jp-FileActions .jp-ToolbarButtonComponent-icon {\n  display: none;\n}\n\n.jp-FileActions .jp-ToolbarButtonComponent[data-command='filebrowser:delete'] {\n  background-color: var(--jp-error-color1);\n}\n\n.jp-FileActions\n  .jp-ToolbarButtonComponent[data-command='filebrowser:delete']\n  .jp-ToolbarButtonComponent-label {\n  color: var(--jp-ui-inverse-font-color1);\n}\n\n.jp-FileBrowser-toolbar .jp-FileActions .jp-ToolbarButtonComponent {\n  border: solid 1px var(--jp-border-color2);\n  margin: 1px;\n  min-height: 100%;\n}\n",""]);const r=a},42057:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>r});var t=o(93476),a=o.n(t)()((function(e){return e[1]}));a.push([e.id,".jp-FileBrowser {\n  height: 100%;\n}\n\n.lm-TabPanel {\n  height: 100%;\n}\n\n.jp-TreePanel .lm-TabPanel-tabBar {\n  overflow: visible;\n  min-height: 32px;\n  border-bottom: unset;\n  height: var(--jp-private-toolbar-height);\n}\n\n.jp-TreePanel .lm-TabBar-content {\n  height: 100%;\n}\n\n.jp-TreePanel .lm-TabBar-tab {\n  flex: 0 1 auto;\n  color: var(--jp-ui-font-color0);\n  font-size: var(--jp-ui-font-size1);\n  height: 100%;\n}\n\n.jp-TreePanel .lm-TabBar-tabLabel {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.jp-FileBrowser-toolbar.jp-Toolbar .jp-ToolbarButtonComponent {\n  width: unset;\n}\n\n.jp-FileBrowser-toolbar > .jp-Toolbar-item {\n  flex-direction: column;\n  justify-content: center;\n}\n\n.jp-DropdownMenu .lm-MenuBar-itemIcon svg {\n  vertical-align: sub;\n}\n\nbutton[data-command='filebrowser:refresh'] .jp-ToolbarButtonComponent-label {\n  display: none;\n}\n\n.jp-TreePanel .lm-TabBar-tabIcon svg {\n  vertical-align: sub;\n}\n",""]);const r=a},73058:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>r});var t=o(93476),a=o.n(t)()((function(e){return e[1]}));a.push([e.id,"",""]);const r=a},92245:(e,n,o)=>{var t=o(12563);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.id,t,""]]);o(1892)(t,{insert:"head",singleton:!1}),t.locals&&(e.exports=t.locals)},12619:(e,n,o)=>{var t=o(21025);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.id,t,""]]);o(1892)(t,{insert:"head",singleton:!1}),t.locals&&(e.exports=t.locals)},88186:(e,n,o)=>{var t=o(53769);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.id,t,""]]);o(1892)(t,{insert:"head",singleton:!1}),t.locals&&(e.exports=t.locals)},1257:(e,n,o)=>{var t=o(33241);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.id,t,""]]);o(1892)(t,{insert:"head",singleton:!1}),t.locals&&(e.exports=t.locals)},60597:(e,n,o)=>{var t=o(35896);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.id,t,""]]);o(1892)(t,{insert:"head",singleton:!1}),t.locals&&(e.exports=t.locals)},38583:(e,n,o)=>{var t=o(36780);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.id,t,""]]);o(1892)(t,{insert:"head",singleton:!1}),t.locals&&(e.exports=t.locals)},68903:(e,n,o)=>{var t=o(88190);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.id,t,""]]);o(1892)(t,{insert:"head",singleton:!1}),t.locals&&(e.exports=t.locals)},86560:(e,n,o)=>{var t=o(3817);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.id,t,""]]);o(1892)(t,{insert:"head",singleton:!1}),t.locals&&(e.exports=t.locals)},92291:(e,n,o)=>{var t=o(12966);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.id,t,""]]);o(1892)(t,{insert:"head",singleton:!1}),t.locals&&(e.exports=t.locals)},65062:(e,n,o)=>{var t=o(71308);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.id,t,""]]);o(1892)(t,{insert:"head",singleton:!1}),t.locals&&(e.exports=t.locals)},43642:(e,n,o)=>{var t=o(42057);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.id,t,""]]);o(1892)(t,{insert:"head",singleton:!1}),t.locals&&(e.exports=t.locals)},98180:(e,n,o)=>{var t=o(73058);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.id,t,""]]);o(1892)(t,{insert:"head",singleton:!1}),t.locals&&(e.exports=t.locals)}}]);