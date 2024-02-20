(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9353],{90638:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(96856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=l.default,o=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};n(e,Promise)?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=a({},o,e));!1;(o=a({},o,t)).suspense&&(delete o.ssr,delete o.loading);o.loadableGenerated&&delete(o=a({},o,o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,u(r,o);delete o.ssr}return r(o)},t.noSSR=u;var a=r(6495).Z,o=r(92648).Z,l=(o(r(67294)),o(r(14302)));function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16319:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=(0,r(92648).Z)(r(67294)).default.createContext(null);t.LoadableContext=n},14302:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(79658).Z,a=r(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(6495).Z,l=(0,r(92648).Z)(r(67294)),u=r(16319),i=r(67294).useSyncExternalStore,s=[],d=[],c=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var f=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function v(e){return function(e,t){var r=function(){if(!s){var t=new f(e,a);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()},n=function(){r();var e=l.default.useContext(u.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach((function(t){e(t)}))},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=l.default.lazy(a.loader));var s=null;if(!c){var p=a.webpack?a.webpack():a.modules;p&&d.push((function(e){var t=!0,n=!1,a=void 0;try{for(var o,l=p[Symbol.iterator]();!(t=(o=l.next()).done);t=!0){var u=o.value;if(-1!==e.indexOf(u))return r()}}catch(i){n=!0,a=i}finally{try{t||null==l.return||l.return()}finally{if(n)throw a}}}))}var v=a.suspense?function(e,t){return n(),l.default.createElement(a.lazy,o({},e,{ref:t}))}:function(e,t){n();var r=i(s.subscribe,s.getCurrentValue,s.getCurrentValue);return l.default.useImperativeHandle(t,(function(){return{retry:s.retry}}),[]),l.default.useMemo((function(){return r.loading||r.error?l.default.createElement(a.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:s.retry}):r.loaded?l.default.createElement((t=r.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,r])};return v.preload=function(){return r()},v.displayName="LoadableComponent",l.default.forwardRef(v)}(p,e)}function m(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return m(e,t)}))}v.preloadAll=function(){return new Promise((function(e,t){m(s).then(e,t)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return c=!0,t()};m(d,e).then(r,r)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var b=v;t.default=b},5152:function(e,t,r){e.exports=r(90638)},65451:function(e,t,r){"use strict";r.d(t,{E:function(){return A}});var n=r(67294),a=r(12351),o=r(19946),l=r(32984),u=r(16723),i=r(61363),s=r(84575);var d,c=r(95389),p=r(39516),f=r(31591),v=r(23784),m=r(46045),b=r(18689),y=r(15466),h=r(73781),_=r(31147),g=r(64103),R=((d=R||{})[d.RegisterOption=0]="RegisterOption",d[d.UnregisterOption=1]="UnregisterOption",d);let k={0(e,t){let r=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,s.z2)(r,(e=>e.element.current))}},1(e,t){let r=e.options.slice(),n=e.options.findIndex((e=>e.id===t.id));return-1===n?e:(r.splice(n,1),{...e,options:r})}},E=(0,n.createContext)(null);function O(e){let t=(0,n.useContext)(E);if(null===t){let t=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,O),t}return t}function C(e,t){return(0,l.E)(t.type,k,e,t)}E.displayName="RadioGroupContext";let T=(0,a.yV)((function(e,t){let{value:r,defaultValue:l,name:u,onChange:d,by:g=((e,t)=>e===t),disabled:R=!1,...k}=e,O=(0,h.z)("string"==typeof g?(e,t)=>{let r=g;return(null==e?void 0:e[r])===(null==t?void 0:t[r])}:g),[T,w]=(0,n.useReducer)(C,{options:[]}),P=T.options,[A,D]=(0,c.b)(),[x,F]=(0,p.f)(),M=`headlessui-radiogroup-${(0,o.M)()}`,L=(0,n.useRef)(null),j=(0,v.T)(L,t),[S,G]=(0,_.q)(r,d,l),z=(0,n.useMemo)((()=>P.find((e=>!e.propsRef.current.disabled))),[P]),N=(0,n.useMemo)((()=>P.some((e=>O(e.propsRef.current.value,S)))),[P,S]),V=(0,h.z)((e=>{var t;if(R||O(e,S))return!1;let r=null==(t=P.find((t=>O(t.propsRef.current.value,e))))?void 0:t.propsRef.current;return(null==r||!r.disabled)&&(null==G||G(e),!0)}));(0,f.B)({container:L.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let Z=(0,h.z)((e=>{let t=L.current;if(!t)return;let r=(0,y.r)(t),n=P.filter((e=>!1===e.propsRef.current.disabled)).map((e=>e.element.current));switch(e.key){case i.R.Enter:(0,b.g)(e.currentTarget);break;case i.R.ArrowLeft:case i.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,s.jA)(n,s.TO.Previous|s.TO.WrapAround)===s.fE.Success){let e=P.find((e=>e.element.current===(null==r?void 0:r.activeElement)));e&&V(e.propsRef.current.value)}break;case i.R.ArrowRight:case i.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,s.jA)(n,s.TO.Next|s.TO.WrapAround)===s.fE.Success){let e=P.find((e=>e.element.current===(null==r?void 0:r.activeElement)));e&&V(e.propsRef.current.value)}break;case i.R.Space:{e.preventDefault(),e.stopPropagation();let t=P.find((e=>e.element.current===(null==r?void 0:r.activeElement)));t&&V(t.propsRef.current.value)}}})),I=(0,h.z)((e=>(w({type:0,...e}),()=>w({type:1,id:e.id})))),B=(0,n.useMemo)((()=>({registerOption:I,firstOption:z,containsCheckedOption:N,change:V,disabled:R,value:S,compare:O})),[I,z,N,V,R,S,O]),U={ref:j,id:M,role:"radiogroup","aria-labelledby":A,"aria-describedby":x,onKeyDown:Z},Y=(0,n.useMemo)((()=>({value:S})),[S]);return n.createElement(F,{name:"RadioGroup.Description"},n.createElement(D,{name:"RadioGroup.Label"},n.createElement(E.Provider,{value:B},null!=u&&null!=S&&(0,b.t)({[u]:S}).map((([e,t])=>n.createElement(m._,{features:m.A.Hidden,...(0,a.oA)({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,name:e,value:t})}))),(0,a.sY)({ourProps:U,theirProps:k,slot:Y,defaultTag:"div",name:"RadioGroup"}))))}));var w=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(w||{});let P=(0,a.yV)((function(e,t){let r=(0,n.useRef)(null),l=(0,v.T)(r,t),i=`headlessui-radiogroup-option-${(0,o.M)()}`,[s,d]=(0,c.b)(),[f,m]=(0,p.f)(),{addFlag:b,removeFlag:y,hasFlag:_}=function(e=0){let[t,r]=(0,n.useState)(e);return{addFlag:(0,n.useCallback)((e=>r((t=>t|e))),[t]),hasFlag:(0,n.useCallback)((e=>Boolean(t&e)),[t]),removeFlag:(0,n.useCallback)((e=>r((t=>t&~e))),[r]),toggleFlag:(0,n.useCallback)((e=>r((t=>t^e))),[r])}}(1),{value:R,disabled:k=!1,...E}=e,C=(0,n.useRef)({value:R,disabled:k});(0,u.e)((()=>{C.current.value=R}),[R,C]),(0,u.e)((()=>{C.current.disabled=k}),[k,C]);let{registerOption:T,disabled:w,change:P,firstOption:A,containsCheckedOption:D,value:x,compare:F}=O("RadioGroup.Option");(0,u.e)((()=>T({id:i,element:r,propsRef:C})),[i,T,r,e]);let M=(0,h.z)((e=>{var t;if((0,g.P)(e.currentTarget))return e.preventDefault();!P(R)||(b(2),null==(t=r.current)||t.focus())})),L=(0,h.z)((e=>{if((0,g.P)(e.currentTarget))return e.preventDefault();b(2)})),j=(0,h.z)((()=>y(2))),S=(null==A?void 0:A.id)===i,G=w||k,z=F(x,R),N={ref:l,id:i,role:"radio","aria-checked":z?"true":"false","aria-labelledby":s,"aria-describedby":f,"aria-disabled":!!G||void 0,tabIndex:G?-1:z||!D&&S?0:-1,onClick:G?void 0:M,onFocus:G?void 0:L,onBlur:G?void 0:j},V=(0,n.useMemo)((()=>({checked:z,disabled:G,active:_(2)})),[z,G,_]);return n.createElement(m,{name:"RadioGroup.Description"},n.createElement(d,{name:"RadioGroup.Label"},(0,a.sY)({ourProps:N,theirProps:E,slot:V,defaultTag:"div",name:"RadioGroup.Option"})))})),A=Object.assign(T,{Option:P,Label:c._,Description:p.d})}}]);