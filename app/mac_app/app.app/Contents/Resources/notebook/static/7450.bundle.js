"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7450],{67450:(e,t,n)=>{n.r(t),n.d(t,{blockComment:()=>d,blockUncomment:()=>m,copyLineDown:()=>It,copyLineUp:()=>Rt,cursorCharBackward:()=>ne,cursorCharForward:()=>te,cursorCharLeft:()=>Z,cursorCharRight:()=>ee,cursorDocEnd:()=>at,cursorDocStart:()=>st,cursorGroupBackward:()=>se,cursorGroupForward:()=>le,cursorGroupLeft:()=>oe,cursorGroupRight:()=>ie,cursorLineBoundaryBackward:()=>Be,cursorLineBoundaryForward:()=>Ee,cursorLineBoundaryLeft:()=>De,cursorLineBoundaryRight:()=>xe,cursorLineDown:()=>ke,cursorLineEnd:()=>Me,cursorLineStart:()=>Le,cursorLineUp:()=>ye,cursorMatchingBracket:()=>be,cursorPageDown:()=>Ae,cursorPageUp:()=>ve,cursorSubwordBackward:()=>fe,cursorSubwordForward:()=>ue,cursorSyntaxLeft:()=>me,cursorSyntaxRight:()=>pe,defaultKeymap:()=>jt,deleteCharBackward:()=>kt,deleteCharForward:()=>wt,deleteGroupBackward:()=>vt,deleteGroupForward:()=>At,deleteLine:()=>Ut,deleteToLineEnd:()=>Ct,deleteToLineStart:()=>Et,deleteTrailingWhitespace:()=>Bt,emacsStyleKeymap:()=>Wt,history:()=>B,historyField:()=>D,historyKeymap:()=>$,indentLess:()=>zt,indentMore:()=>Ht,indentSelection:()=>Ft,indentWithTab:()=>qt,insertBlankLine:()=>Jt,insertNewline:()=>Vt,insertNewlineAndIndent:()=>Nt,insertTab:()=>_t,invertedEffects:()=>A,isolateHistory:()=>v,lineComment:()=>u,lineUncomment:()=>f,moveLineDown:()=>bt,moveLineUp:()=>Tt,redo:()=>M,redoDepth:()=>I,redoSelection:()=>b,selectAll:()=>ft,selectCharBackward:()=>Je,selectCharForward:()=>Ne,selectCharLeft:()=>Ue,selectCharRight:()=>Ve,selectDocEnd:()=>ut,selectDocStart:()=>ct,selectGroupBackward:()=>ze,selectGroupForward:()=>He,selectGroupLeft:()=>Ge,selectGroupRight:()=>Fe,selectLine:()=>ht,selectLineBoundaryBackward:()=>nt,selectLineBoundaryForward:()=>tt,selectLineBoundaryLeft:()=>rt,selectLineBoundaryRight:()=>ot,selectLineDown:()=>Qe,selectLineEnd:()=>lt,selectLineStart:()=>it,selectLineUp:()=>Ye,selectMatchingBracket:()=>Oe,selectPageDown:()=>et,selectPageUp:()=>Ze,selectParentSyntax:()=>dt,selectSubwordBackward:()=>$e,selectSubwordForward:()=>We,selectSyntaxLeft:()=>je,selectSyntaxRight:()=>qe,simplifySelection:()=>mt,splitLine:()=>Dt,standardKeymap:()=>$t,toggleBlockComment:()=>h,toggleBlockCommentByLine:()=>p,toggleComment:()=>s,toggleLineComment:()=>c,transposeChars:()=>xt,undo:()=>L,undoDepth:()=>R,undoSelection:()=>T});var r=n(17811),o=n(19768),i=n(7201),l=n(73620);const s=e=>{let{state:t}=e,n=t.doc.lineAt(t.selection.main.from),r=g(e.state,n.from);return r.line?c(e):!!r.block&&p(e)};function a(e,t){return({state:n,dispatch:r})=>{if(n.readOnly)return!1;let o=e(t,n);return!!o&&(r(n.update(o)),!0)}}const c=a(w,0),u=a(w,1),f=a(w,2),h=a(k,0),d=a(k,1),m=a(k,2),p=a(((e,t)=>k(e,t,function(e){let t=[];for(let n of e.selection.ranges){let r=e.doc.lineAt(n.from),o=n.to<=r.to?r:e.doc.lineAt(n.to),i=t.length-1;i>=0&&t[i].to>r.from?t[i].to=o.to:t.push({from:r.from+/^\s*/.exec(r.text)[0].length,to:o.to})}return t}(t))),0);function g(e,t){let n=e.languageDataAt("commentTokens",t);return n.length?n[0]:{}}const y=50;function k(e,t,n=t.selection.ranges){let r=n.map((e=>g(t,e.from).block));if(!r.every((e=>e)))return null;let o=n.map(((e,n)=>function(e,{open:t,close:n},r,o){let i,l,s=e.sliceDoc(r-y,r),a=e.sliceDoc(o,o+y),c=/\s*$/.exec(s)[0].length,u=/^\s*/.exec(a)[0].length,f=s.length-c;if(s.slice(f-t.length,f)==t&&a.slice(u,u+n.length)==n)return{open:{pos:r-c,margin:c&&1},close:{pos:o+u,margin:u&&1}};o-r<=2*y?i=l=e.sliceDoc(r,o):(i=e.sliceDoc(r,r+y),l=e.sliceDoc(o-y,o));let h=/^\s*/.exec(i)[0].length,d=/\s*$/.exec(l)[0].length,m=l.length-d-n.length;return i.slice(h,h+t.length)==t&&l.slice(m,m+n.length)==n?{open:{pos:r+h+t.length,margin:/\s/.test(i.charAt(h+t.length))?1:0},close:{pos:o-d-n.length,margin:/\s/.test(l.charAt(m-1))?1:0}}:null}(t,r[n],e.from,e.to)));if(2!=e&&!o.every((e=>e)))return{changes:t.changes(n.map(((e,t)=>o[t]?[]:[{from:e.from,insert:r[t].open+" "},{from:e.to,insert:" "+r[t].close}])))};if(1!=e&&o.some((e=>e))){let e=[];for(let t,n=0;n<o.length;n++)if(t=o[n]){let o=r[n],{open:i,close:l}=t;e.push({from:i.pos-o.open.length,to:i.pos+i.margin},{from:l.pos-l.margin,to:l.pos+o.close.length})}return{changes:e}}return null}function w(e,t,n=t.selection.ranges){let r=[],o=-1;for(let{from:e,to:i}of n){let n=r.length,l=1e9,s=g(t,e).line;if(s){for(let n=e;n<=i;){let a=t.doc.lineAt(n);if(a.from>o&&(e==i||i>a.from)){o=a.from;let e=/^\s*/.exec(a.text)[0].length,t=e==a.length,n=a.text.slice(e,e+s.length)==s?e:-1;e<a.text.length&&e<l&&(l=e),r.push({line:a,comment:n,token:s,indent:e,empty:t,single:!1})}n=a.to+1}if(l<1e9)for(let e=n;e<r.length;e++)r[e].indent<r[e].line.text.length&&(r[e].indent=l);r.length==n+1&&(r[n].single=!0)}}if(2!=e&&r.some((e=>e.comment<0&&(!e.empty||e.single)))){let e=[];for(let{line:t,token:n,indent:o,empty:i,single:l}of r)!l&&i||e.push({from:t.from+o,insert:n+" "});let n=t.changes(e);return{changes:n,selection:t.selection.map(n,1)}}if(1!=e&&r.some((e=>e.comment>=0))){let e=[];for(let{line:t,comment:n,token:o}of r)if(n>=0){let r=t.from+n,i=r+o.length;" "==t.text[i-t.from]&&i++,e.push({from:r,to:i})}return{changes:e}}return null}const S=r.Annotation.define(),v=r.Annotation.define(),A=r.Facet.define(),C=r.Facet.define({combine:e=>(0,r.combineConfig)(e,{minDepth:100,newGroupDelay:500,joinToEvent:(e,t)=>t},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(e,t)=>(n,r)=>e(n,r)||t(n,r)})}),E=r.StateField.define({create:()=>W.empty,update(e,t){let n=t.state.facet(C),o=t.annotation(S);if(o){let i=t.docChanged?r.EditorSelection.single(function(e){let t=0;return e.iterChangedRanges(((e,n)=>t=n)),t}(t.changes)):void 0,l=U.fromTransaction(t,i),s=o.side,a=0==s?e.undone:e.done;return a=l?V(a,a.length,n.minDepth,l):G(a,t.startState.selection),new W(0==s?o.rest:a,0==s?a:o.rest)}let i=t.annotation(v);if("full"!=i&&"before"!=i||(e=e.isolate()),!1===t.annotation(r.Transaction.addToHistory))return t.changes.empty?e:e.addMapping(t.changes.desc);let l=U.fromTransaction(t),s=t.annotation(r.Transaction.time),a=t.annotation(r.Transaction.userEvent);return l?e=e.addChanges(l,s,a,n,t):t.selection&&(e=e.addSelection(t.startState.selection,s,a,n.newGroupDelay)),"full"!=i&&"after"!=i||(e=e.isolate()),e},toJSON:e=>({done:e.done.map((e=>e.toJSON())),undone:e.undone.map((e=>e.toJSON()))}),fromJSON:e=>new W(e.done.map(U.fromJSON),e.undone.map(U.fromJSON))});function B(e={}){return[E,C.of(e),o.EditorView.domEventHandlers({beforeinput(e,t){let n="historyUndo"==e.inputType?L:"historyRedo"==e.inputType?M:null;return!!n&&(e.preventDefault(),n(t))}})]}const D=E;function x(e,t){return function({state:n,dispatch:r}){if(!t&&n.readOnly)return!1;let o=n.field(E,!1);if(!o)return!1;let i=o.pop(e,n,t);return!!i&&(r(i),!0)}}const L=x(0,!1),M=x(1,!1),T=x(0,!0),b=x(1,!0);function O(e){return function(t){let n=t.field(E,!1);if(!n)return 0;let r=0==e?n.done:n.undone;return r.length-(r.length&&!r[0].changes?1:0)}}const R=O(0),I=O(1);class U{constructor(e,t,n,r,o){this.changes=e,this.effects=t,this.mapped=n,this.startSelection=r,this.selectionsAfter=o}setSelAfter(e){return new U(this.changes,this.effects,this.mapped,this.startSelection,e)}toJSON(){var e,t,n;return{changes:null===(e=this.changes)||void 0===e?void 0:e.toJSON(),mapped:null===(t=this.mapped)||void 0===t?void 0:t.toJSON(),startSelection:null===(n=this.startSelection)||void 0===n?void 0:n.toJSON(),selectionsAfter:this.selectionsAfter.map((e=>e.toJSON()))}}static fromJSON(e){return new U(e.changes&&r.ChangeSet.fromJSON(e.changes),[],e.mapped&&r.ChangeDesc.fromJSON(e.mapped),e.startSelection&&r.EditorSelection.fromJSON(e.startSelection),e.selectionsAfter.map(r.EditorSelection.fromJSON))}static fromTransaction(e,t){let n=J;for(let t of e.startState.facet(A)){let r=t(e);r.length&&(n=n.concat(r))}return!n.length&&e.changes.empty?null:new U(e.changes.invert(e.startState.doc),n,void 0,t||e.startState.selection,J)}static selection(e){return new U(void 0,J,void 0,void 0,e)}}function V(e,t,n,r){let o=t+1>n+20?t-n-1:0,i=e.slice(o,t);return i.push(r),i}function N(e,t){return e.length?t.length?e.concat(t):e:t}const J=[],P=200;function G(e,t){if(e.length){let n=e[e.length-1],r=n.selectionsAfter.slice(Math.max(0,n.selectionsAfter.length-P));return r.length&&r[r.length-1].eq(t)?e:(r.push(t),V(e,e.length-1,1e9,n.setSelAfter(r)))}return[U.selection([t])]}function F(e){let t=e[e.length-1],n=e.slice();return n[e.length-1]=t.setSelAfter(t.selectionsAfter.slice(0,t.selectionsAfter.length-1)),n}function H(e,t){if(!e.length)return e;let n=e.length,r=J;for(;n;){let o=z(e[n-1],t,r);if(o.changes&&!o.changes.empty||o.effects.length){let t=e.slice(0,n);return t[n-1]=o,t}t=o.mapped,n--,r=o.selectionsAfter}return r.length?[U.selection(r)]:J}function z(e,t,n){let o=N(e.selectionsAfter.length?e.selectionsAfter.map((e=>e.map(t))):J,n);if(!e.changes)return U.selection(o);let i=e.changes.map(t),l=t.mapDesc(e.changes,!0),s=e.mapped?e.mapped.composeDesc(l):l;return new U(i,r.StateEffect.mapEffects(e.effects,t),s,e.startSelection.map(l),o)}const _=/^(input\.type|delete)($|\.)/;class W{constructor(e,t,n=0,r=void 0){this.done=e,this.undone=t,this.prevTime=n,this.prevUserEvent=r}isolate(){return this.prevTime?new W(this.done,this.undone):this}addChanges(e,t,n,r,o){let i=this.done,l=i[i.length-1];return i=l&&l.changes&&!l.changes.empty&&e.changes&&(!n||_.test(n))&&(!l.selectionsAfter.length&&t-this.prevTime<r.newGroupDelay&&r.joinToEvent(o,function(e,t){let n=[],r=!1;return e.iterChangedRanges(((e,t)=>n.push(e,t))),t.iterChangedRanges(((e,t,o,i)=>{for(let e=0;e<n.length;){let t=n[e++],l=n[e++];i>=t&&o<=l&&(r=!0)}})),r}(l.changes,e.changes))||"input.type.compose"==n)?V(i,i.length-1,r.minDepth,new U(e.changes.compose(l.changes),N(e.effects,l.effects),l.mapped,l.startSelection,J)):V(i,i.length,r.minDepth,e),new W(i,J,t,n)}addSelection(e,t,n,r){let o=this.done.length?this.done[this.done.length-1].selectionsAfter:J;return o.length>0&&t-this.prevTime<r&&n==this.prevUserEvent&&n&&/^select($|\.)/.test(n)&&(i=o[o.length-1],l=e,i.ranges.length==l.ranges.length&&0===i.ranges.filter(((e,t)=>e.empty!=l.ranges[t].empty)).length)?this:new W(G(this.done,e),this.undone,t,n);var i,l}addMapping(e){return new W(H(this.done,e),H(this.undone,e),this.prevTime,this.prevUserEvent)}pop(e,t,n){let r=0==e?this.done:this.undone;if(0==r.length)return null;let o=r[r.length-1];if(n&&o.selectionsAfter.length)return t.update({selection:o.selectionsAfter[o.selectionsAfter.length-1],annotations:S.of({side:e,rest:F(r)}),userEvent:0==e?"select.undo":"select.redo",scrollIntoView:!0});if(o.changes){let n=1==r.length?J:r.slice(0,r.length-1);return o.mapped&&(n=H(n,o.mapped)),t.update({changes:o.changes,selection:o.startSelection,effects:o.effects,annotations:S.of({side:e,rest:n}),filter:!1,userEvent:0==e?"undo":"redo",scrollIntoView:!0})}return null}}W.empty=new W(J,J);const $=[{key:"Mod-z",run:L,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:M,preventDefault:!0},{linux:"Ctrl-Shift-z",run:M,preventDefault:!0},{key:"Mod-u",run:T,preventDefault:!0},{key:"Alt-u",mac:"Mod-Shift-u",run:b,preventDefault:!0}];function j(e,t){return r.EditorSelection.create(e.ranges.map(t),e.mainIndex)}function q(e,t){return e.update({selection:t,scrollIntoView:!0,userEvent:"select"})}function K({state:e,dispatch:t},n){let r=j(e.selection,n);return!r.eq(e.selection)&&(t(q(e,r)),!0)}function Y(e,t){return r.EditorSelection.cursor(t?e.to:e.from)}function Q(e,t){return K(e,(n=>n.empty?e.moveByChar(n,t):Y(n,t)))}function X(e){return e.textDirectionAt(e.state.selection.main.head)==o.Direction.LTR}const Z=e=>Q(e,!X(e)),ee=e=>Q(e,X(e)),te=e=>Q(e,!0),ne=e=>Q(e,!1);function re(e,t){return K(e,(n=>n.empty?e.moveByGroup(n,t):Y(n,t)))}const oe=e=>re(e,!X(e)),ie=e=>re(e,X(e)),le=e=>re(e,!0),se=e=>re(e,!1);function ae(e,t,n){let o=e.state.charCategorizer(t.from);return e.moveByChar(t,n,(i=>{let l=r.CharCategory.Space,s=t.from,a=!1,c=!1,u=!1,f=t=>{if(a)return!1;s+=n?t.length:-t.length;let i,f=o(t);if(f==r.CharCategory.Word&&t.charCodeAt(0)<128&&/[\W_]/.test(t)&&(f=-1),l==r.CharCategory.Space&&(l=f),l!=f)return!1;if(l==r.CharCategory.Word)if(t.toLowerCase()==t){if(!n&&c)return!1;u=!0}else if(u){if(n)return!1;a=!0}else{if(c&&n&&o(i=e.state.sliceDoc(s,s+1))==r.CharCategory.Word&&i.toLowerCase()==i)return!1;c=!0}return!0};return f(i),f}))}function ce(e,t){return K(e,(n=>n.empty?ae(e,n,t):Y(n,t)))}const ue=e=>ce(e,!0),fe=e=>ce(e,!1);function he(e,t,n){if(t.type.prop(n))return!0;let r=t.to-t.from;return r&&(r>2||/[^\s,.;:]/.test(e.sliceDoc(t.from,t.to)))||t.firstChild}function de(e,t,n){let o,s,a=(0,i.syntaxTree)(e).resolveInner(t.head),c=n?l.NodeProp.closedBy:l.NodeProp.openedBy;for(let r=t.head;;){let t=n?a.childAfter(r):a.childBefore(r);if(!t)break;he(e,t,c)?a=t:r=n?t.to:t.from}return s=a.type.prop(c)&&(o=n?(0,i.matchBrackets)(e,a.from,1):(0,i.matchBrackets)(e,a.to,-1))&&o.matched?n?o.end.to:o.end.from:n?a.to:a.from,r.EditorSelection.cursor(s,n?-1:1)}const me=e=>K(e,(t=>de(e.state,t,!X(e)))),pe=e=>K(e,(t=>de(e.state,t,X(e))));function ge(e,t){return K(e,(n=>{if(!n.empty)return Y(n,t);let r=e.moveVertically(n,t);return r.head!=n.head?r:e.moveToLineBoundary(n,t)}))}const ye=e=>ge(e,!1),ke=e=>ge(e,!0);function we(e){let t,n=e.scrollDOM.clientHeight<e.scrollDOM.scrollHeight-2,r=0,i=0;if(n){for(let t of e.state.facet(o.EditorView.scrollMargins)){let n=t(e);(null==n?void 0:n.top)&&(r=Math.max(null==n?void 0:n.top,r)),(null==n?void 0:n.bottom)&&(i=Math.max(null==n?void 0:n.bottom,i))}t=e.scrollDOM.clientHeight-r-i}else t=(e.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:r,marginBottom:i,selfScroll:n,height:Math.max(e.defaultLineHeight,t-5)}}function Se(e,t){let n,r=we(e),{state:i}=e,l=j(i.selection,(n=>n.empty?e.moveVertically(n,t,r.height):Y(n,t)));if(l.eq(i.selection))return!1;if(r.selfScroll){let t=e.coordsAtPos(i.selection.main.head),s=e.scrollDOM.getBoundingClientRect(),a=s.top+r.marginTop,c=s.bottom-r.marginBottom;t&&t.top>a&&t.bottom<c&&(n=o.EditorView.scrollIntoView(l.main.head,{y:"start",yMargin:t.top-a}))}return e.dispatch(q(i,l),{effects:n}),!0}const ve=e=>Se(e,!1),Ae=e=>Se(e,!0);function Ce(e,t,n){let o=e.lineBlockAt(t.head),i=e.moveToLineBoundary(t,n);if(i.head==t.head&&i.head!=(n?o.to:o.from)&&(i=e.moveToLineBoundary(t,n,!1)),!n&&i.head==o.from&&o.length){let n=/^\s*/.exec(e.state.sliceDoc(o.from,Math.min(o.from+100,o.to)))[0].length;n&&t.head!=o.from+n&&(i=r.EditorSelection.cursor(o.from+n))}return i}const Ee=e=>K(e,(t=>Ce(e,t,!0))),Be=e=>K(e,(t=>Ce(e,t,!1))),De=e=>K(e,(t=>Ce(e,t,!X(e)))),xe=e=>K(e,(t=>Ce(e,t,X(e)))),Le=e=>K(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).from,1))),Me=e=>K(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).to,-1)));function Te(e,t,n){let o=!1,l=j(e.selection,(t=>{let l=(0,i.matchBrackets)(e,t.head,-1)||(0,i.matchBrackets)(e,t.head,1)||t.head>0&&(0,i.matchBrackets)(e,t.head-1,1)||t.head<e.doc.length&&(0,i.matchBrackets)(e,t.head+1,-1);if(!l||!l.end)return t;o=!0;let s=l.start.from==t.head?l.end.to:l.end.from;return n?r.EditorSelection.range(t.anchor,s):r.EditorSelection.cursor(s)}));return!!o&&(t(q(e,l)),!0)}const be=({state:e,dispatch:t})=>Te(e,t,!1),Oe=({state:e,dispatch:t})=>Te(e,t,!0);function Re(e,t){let n=j(e.state.selection,(e=>{let n=t(e);return r.EditorSelection.range(e.anchor,n.head,n.goalColumn,n.bidiLevel||void 0)}));return!n.eq(e.state.selection)&&(e.dispatch(q(e.state,n)),!0)}function Ie(e,t){return Re(e,(n=>e.moveByChar(n,t)))}const Ue=e=>Ie(e,!X(e)),Ve=e=>Ie(e,X(e)),Ne=e=>Ie(e,!0),Je=e=>Ie(e,!1);function Pe(e,t){return Re(e,(n=>e.moveByGroup(n,t)))}const Ge=e=>Pe(e,!X(e)),Fe=e=>Pe(e,X(e)),He=e=>Pe(e,!0),ze=e=>Pe(e,!1);function _e(e,t){return Re(e,(n=>ae(e,n,t)))}const We=e=>_e(e,!0),$e=e=>_e(e,!1),je=e=>Re(e,(t=>de(e.state,t,!X(e)))),qe=e=>Re(e,(t=>de(e.state,t,X(e))));function Ke(e,t){return Re(e,(n=>e.moveVertically(n,t)))}const Ye=e=>Ke(e,!1),Qe=e=>Ke(e,!0);function Xe(e,t){return Re(e,(n=>e.moveVertically(n,t,we(e).height)))}const Ze=e=>Xe(e,!1),et=e=>Xe(e,!0),tt=e=>Re(e,(t=>Ce(e,t,!0))),nt=e=>Re(e,(t=>Ce(e,t,!1))),rt=e=>Re(e,(t=>Ce(e,t,!X(e)))),ot=e=>Re(e,(t=>Ce(e,t,X(e)))),it=e=>Re(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).from))),lt=e=>Re(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).to))),st=({state:e,dispatch:t})=>(t(q(e,{anchor:0})),!0),at=({state:e,dispatch:t})=>(t(q(e,{anchor:e.doc.length})),!0),ct=({state:e,dispatch:t})=>(t(q(e,{anchor:e.selection.main.anchor,head:0})),!0),ut=({state:e,dispatch:t})=>(t(q(e,{anchor:e.selection.main.anchor,head:e.doc.length})),!0),ft=({state:e,dispatch:t})=>(t(e.update({selection:{anchor:0,head:e.doc.length},userEvent:"select"})),!0),ht=({state:e,dispatch:t})=>{let n=Lt(e).map((({from:t,to:n})=>r.EditorSelection.range(t,Math.min(n+1,e.doc.length))));return t(e.update({selection:r.EditorSelection.create(n),userEvent:"select"})),!0},dt=({state:e,dispatch:t})=>{let n=j(e.selection,(t=>{var n;let o=(0,i.syntaxTree)(e).resolveInner(t.head,1);for(;!(o.from<t.from&&o.to>=t.to||o.to>t.to&&o.from<=t.from)&&(null===(n=o.parent)||void 0===n?void 0:n.parent);)o=o.parent;return r.EditorSelection.range(o.to,o.from)}));return t(q(e,n)),!0},mt=({state:e,dispatch:t})=>{let n=e.selection,o=null;return n.ranges.length>1?o=r.EditorSelection.create([n.main]):n.main.empty||(o=r.EditorSelection.create([r.EditorSelection.cursor(n.main.head)])),!!o&&(t(q(e,o)),!0)};function pt(e,t){if(e.state.readOnly)return!1;let n="delete.selection",{state:i}=e,l=i.changeByRange((o=>{let{from:i,to:l}=o;if(i==l){let r=t(i);r<i?(n="delete.backward",r=gt(e,r,!1)):r>i&&(n="delete.forward",r=gt(e,r,!0)),i=Math.min(i,r),l=Math.max(l,r)}else i=gt(e,i,!1),l=gt(e,l,!0);return i==l?{range:o}:{changes:{from:i,to:l},range:r.EditorSelection.cursor(i)}}));return!l.changes.empty&&(e.dispatch(i.update(l,{scrollIntoView:!0,userEvent:n,effects:"delete.selection"==n?o.EditorView.announce.of(i.phrase("Selection deleted")):void 0})),!0)}function gt(e,t,n){if(e instanceof o.EditorView)for(let r of e.state.facet(o.EditorView.atomicRanges).map((t=>t(e))))r.between(t,t,((e,r)=>{e<t&&r>t&&(t=n?r:e)}));return t}const yt=(e,t)=>pt(e,(n=>{let o,l,{state:s}=e,a=s.doc.lineAt(n);if(!t&&n>a.from&&n<a.from+200&&!/[^ \t]/.test(o=a.text.slice(0,n-a.from))){if("\t"==o[o.length-1])return n-1;let e=(0,r.countColumn)(o,s.tabSize)%(0,i.getIndentUnit)(s)||(0,i.getIndentUnit)(s);for(let t=0;t<e&&" "==o[o.length-1-t];t++)n--;l=n}else l=(0,r.findClusterBreak)(a.text,n-a.from,t,t)+a.from,l==n&&a.number!=(t?s.doc.lines:1)&&(l+=t?1:-1);return l})),kt=e=>yt(e,!1),wt=e=>yt(e,!0),St=(e,t)=>pt(e,(n=>{let o=n,{state:i}=e,l=i.doc.lineAt(o),s=i.charCategorizer(o);for(let e=null;;){if(o==(t?l.to:l.from)){o==n&&l.number!=(t?i.doc.lines:1)&&(o+=t?1:-1);break}let a=(0,r.findClusterBreak)(l.text,o-l.from,t)+l.from,c=l.text.slice(Math.min(o,a)-l.from,Math.max(o,a)-l.from),u=s(c);if(null!=e&&u!=e)break;" "==c&&o==n||(e=u),o=a}return o})),vt=e=>St(e,!1),At=e=>St(e,!0),Ct=e=>pt(e,(t=>{let n=e.lineBlockAt(t).to;return t<n?n:Math.min(e.state.doc.length,t+1)})),Et=e=>pt(e,(t=>{let n=e.lineBlockAt(t).from;return t>n?n:Math.max(0,t-1)})),Bt=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=[];for(let t=0,r="",o=e.doc.iter();;){if(o.next(),o.lineBreak||o.done){let e=r.search(/\s+$/);if(e>-1&&n.push({from:t-(r.length-e),to:t}),o.done)break;r=""}else r=o.value;t+=o.value.length}return!!n.length&&(t(e.update({changes:n,userEvent:"delete"})),!0)},Dt=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange((e=>({changes:{from:e.from,to:e.to,insert:r.Text.of(["",""])},range:r.EditorSelection.cursor(e.from)})));return t(e.update(n,{scrollIntoView:!0,userEvent:"input"})),!0},xt=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange((t=>{if(!t.empty||0==t.from||t.from==e.doc.length)return{range:t};let n=t.from,o=e.doc.lineAt(n),i=n==o.from?n-1:(0,r.findClusterBreak)(o.text,n-o.from,!1)+o.from,l=n==o.to?n+1:(0,r.findClusterBreak)(o.text,n-o.from,!0)+o.from;return{changes:{from:i,to:l,insert:e.doc.slice(n,l).append(e.doc.slice(i,n))},range:r.EditorSelection.cursor(l)}}));return!n.changes.empty&&(t(e.update(n,{scrollIntoView:!0,userEvent:"move.character"})),!0)};function Lt(e){let t=[],n=-1;for(let r of e.selection.ranges){let o=e.doc.lineAt(r.from),i=e.doc.lineAt(r.to);if(r.empty||r.to!=i.from||(i=e.doc.lineAt(r.to-1)),n>=o.number){let e=t[t.length-1];e.to=i.to,e.ranges.push(r)}else t.push({from:o.from,to:i.to,ranges:[r]});n=i.number+1}return t}function Mt(e,t,n){if(e.readOnly)return!1;let o=[],i=[];for(let t of Lt(e)){if(n?t.to==e.doc.length:0==t.from)continue;let l=e.doc.lineAt(n?t.to+1:t.from-1),s=l.length+1;if(n){o.push({from:t.to,to:l.to},{from:t.from,insert:l.text+e.lineBreak});for(let n of t.ranges)i.push(r.EditorSelection.range(Math.min(e.doc.length,n.anchor+s),Math.min(e.doc.length,n.head+s)))}else{o.push({from:l.from,to:t.from},{from:t.to,insert:e.lineBreak+l.text});for(let e of t.ranges)i.push(r.EditorSelection.range(e.anchor-s,e.head-s))}}return!!o.length&&(t(e.update({changes:o,scrollIntoView:!0,selection:r.EditorSelection.create(i,e.selection.mainIndex),userEvent:"move.line"})),!0)}const Tt=({state:e,dispatch:t})=>Mt(e,t,!1),bt=({state:e,dispatch:t})=>Mt(e,t,!0);function Ot(e,t,n){if(e.readOnly)return!1;let r=[];for(let t of Lt(e))n?r.push({from:t.from,insert:e.doc.slice(t.from,t.to)+e.lineBreak}):r.push({from:t.to,insert:e.lineBreak+e.doc.slice(t.from,t.to)});return t(e.update({changes:r,scrollIntoView:!0,userEvent:"input.copyline"})),!0}const Rt=({state:e,dispatch:t})=>Ot(e,t,!1),It=({state:e,dispatch:t})=>Ot(e,t,!0),Ut=e=>{if(e.state.readOnly)return!1;let{state:t}=e,n=t.changes(Lt(t).map((({from:e,to:n})=>(e>0?e--:n<t.doc.length&&n++,{from:e,to:n})))),r=j(t.selection,(t=>e.moveVertically(t,!0))).map(n);return e.dispatch({changes:n,selection:r,scrollIntoView:!0,userEvent:"delete.line"}),!0},Vt=({state:e,dispatch:t})=>(t(e.update(e.replaceSelection(e.lineBreak),{scrollIntoView:!0,userEvent:"input"})),!0),Nt=Pt(!1),Jt=Pt(!0);function Pt(e){return({state:t,dispatch:n})=>{if(t.readOnly)return!1;let o=t.changeByRange((n=>{let{from:o,to:s}=n,a=t.doc.lineAt(o),c=!e&&o==s&&function(e,t){if(/\(\)|\[\]|\{\}/.test(e.sliceDoc(t-1,t+1)))return{from:t,to:t};let n,r=(0,i.syntaxTree)(e).resolveInner(t),o=r.childBefore(t),s=r.childAfter(t);return o&&s&&o.to<=t&&s.from>=t&&(n=o.type.prop(l.NodeProp.closedBy))&&n.indexOf(s.name)>-1&&e.doc.lineAt(o.to).from==e.doc.lineAt(s.from).from?{from:o.to,to:s.from}:null}(t,o);e&&(o=s=(s<=a.to?a:t.doc.lineAt(s)).to);let u=new i.IndentContext(t,{simulateBreak:o,simulateDoubleBreak:!!c}),f=(0,i.getIndentation)(u,o);for(null==f&&(f=/^\s*/.exec(t.doc.lineAt(o).text)[0].length);s<a.to&&/\s/.test(a.text[s-a.from]);)s++;c?({from:o,to:s}=c):o>a.from&&o<a.from+100&&!/\S/.test(a.text.slice(0,o))&&(o=a.from);let h=["",(0,i.indentString)(t,f)];return c&&h.push((0,i.indentString)(t,u.lineIndent(a.from,-1))),{changes:{from:o,to:s,insert:r.Text.of(h)},range:r.EditorSelection.cursor(o+1+h[1].length)}}));return n(t.update(o,{scrollIntoView:!0,userEvent:"input"})),!0}}function Gt(e,t){let n=-1;return e.changeByRange((o=>{let i=[];for(let r=o.from;r<=o.to;){let l=e.doc.lineAt(r);l.number>n&&(o.empty||o.to>l.from)&&(t(l,i,o),n=l.number),r=l.to+1}let l=e.changes(i);return{changes:i,range:r.EditorSelection.range(l.mapPos(o.anchor,1),l.mapPos(o.head,1))}}))}const Ft=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=Object.create(null),r=new i.IndentContext(e,{overrideIndentation:e=>{let t=n[e];return null==t?-1:t}}),o=Gt(e,((t,o,l)=>{let s=(0,i.getIndentation)(r,t.from);if(null==s)return;/\S/.test(t.text)||(s=0);let a=/^\s*/.exec(t.text)[0],c=(0,i.indentString)(e,s);(a!=c||l.from<t.from+a.length)&&(n[t.from]=s,o.push({from:t.from,to:t.from+a.length,insert:c}))}));return o.changes.empty||t(e.update(o,{userEvent:"indent"})),!0},Ht=({state:e,dispatch:t})=>!e.readOnly&&(t(e.update(Gt(e,((t,n)=>{n.push({from:t.from,insert:e.facet(i.indentUnit)})})),{userEvent:"input.indent"})),!0),zt=({state:e,dispatch:t})=>!e.readOnly&&(t(e.update(Gt(e,((t,n)=>{let o=/^\s*/.exec(t.text)[0];if(!o)return;let l=(0,r.countColumn)(o,e.tabSize),s=0,a=(0,i.indentString)(e,Math.max(0,l-(0,i.getIndentUnit)(e)));for(;s<o.length&&s<a.length&&o.charCodeAt(s)==a.charCodeAt(s);)s++;n.push({from:t.from+s,to:t.from+o.length,insert:a.slice(s)})})),{userEvent:"delete.dedent"})),!0),_t=({state:e,dispatch:t})=>e.selection.ranges.some((e=>!e.empty))?Ht({state:e,dispatch:t}):(t(e.update(e.replaceSelection("\t"),{scrollIntoView:!0,userEvent:"input"})),!0),Wt=[{key:"Ctrl-b",run:Z,shift:Ue,preventDefault:!0},{key:"Ctrl-f",run:ee,shift:Ve},{key:"Ctrl-p",run:ye,shift:Ye},{key:"Ctrl-n",run:ke,shift:Qe},{key:"Ctrl-a",run:Le,shift:it},{key:"Ctrl-e",run:Me,shift:lt},{key:"Ctrl-d",run:wt},{key:"Ctrl-h",run:kt},{key:"Ctrl-k",run:Ct},{key:"Ctrl-Alt-h",run:vt},{key:"Ctrl-o",run:Dt},{key:"Ctrl-t",run:xt},{key:"Ctrl-v",run:Ae}],$t=[{key:"ArrowLeft",run:Z,shift:Ue,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:oe,shift:Ge,preventDefault:!0},{mac:"Cmd-ArrowLeft",run:De,shift:rt,preventDefault:!0},{key:"ArrowRight",run:ee,shift:Ve,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:ie,shift:Fe,preventDefault:!0},{mac:"Cmd-ArrowRight",run:xe,shift:ot,preventDefault:!0},{key:"ArrowUp",run:ye,shift:Ye,preventDefault:!0},{mac:"Cmd-ArrowUp",run:st,shift:ct},{mac:"Ctrl-ArrowUp",run:ve,shift:Ze},{key:"ArrowDown",run:ke,shift:Qe,preventDefault:!0},{mac:"Cmd-ArrowDown",run:at,shift:ut},{mac:"Ctrl-ArrowDown",run:Ae,shift:et},{key:"PageUp",run:ve,shift:Ze},{key:"PageDown",run:Ae,shift:et},{key:"Home",run:Be,shift:nt,preventDefault:!0},{key:"Mod-Home",run:st,shift:ct},{key:"End",run:Ee,shift:tt,preventDefault:!0},{key:"Mod-End",run:at,shift:ut},{key:"Enter",run:Nt},{key:"Mod-a",run:ft},{key:"Backspace",run:kt,shift:kt},{key:"Delete",run:wt},{key:"Mod-Backspace",mac:"Alt-Backspace",run:vt},{key:"Mod-Delete",mac:"Alt-Delete",run:At},{mac:"Mod-Backspace",run:Et},{mac:"Mod-Delete",run:Ct}].concat(Wt.map((e=>({mac:e.key,run:e.run,shift:e.shift})))),jt=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:me,shift:je},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:pe,shift:qe},{key:"Alt-ArrowUp",run:Tt},{key:"Shift-Alt-ArrowUp",run:Rt},{key:"Alt-ArrowDown",run:bt},{key:"Shift-Alt-ArrowDown",run:It},{key:"Escape",run:mt},{key:"Mod-Enter",run:Jt},{key:"Alt-l",mac:"Ctrl-l",run:ht},{key:"Mod-i",run:dt,preventDefault:!0},{key:"Mod-[",run:zt},{key:"Mod-]",run:Ht},{key:"Mod-Alt-\\",run:Ft},{key:"Shift-Mod-k",run:Ut},{key:"Shift-Mod-\\",run:be},{key:"Mod-/",run:s},{key:"Alt-A",run:h}].concat($t),qt={key:"Tab",run:Ht,shift:zt}}}]);