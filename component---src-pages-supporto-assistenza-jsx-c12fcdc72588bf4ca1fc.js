(self.webpackChunkpadigitale2026=self.webpackChunkpadigitale2026||[]).push([[971],{9150:function(e,t,a){"use strict";var i=a(4038),r=a(1531),n=a(7294),o=a(2565),l=a.n(o),s=a(3033),c=function(e){var t=e.className,a=e.listClassName,o=e.cssModule,c=e.children,d=e.tag,m=e.listTag,p=e["aria-label"],u=(0,r.Z)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=(0,s.mx)(l()(t),o),g=(0,s.mx)(l()("breadcrumb",a),o);return n.createElement(d,(0,i.Z)({},u,{className:f,"aria-label":p}),n.createElement(m,{className:g},c))};c.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.Z=c},2590:function(e,t,a){"use strict";var i=a(4038),r=a(1531),n=a(7294),o=a(2565),l=a.n(o),s=a(3033),c=function(e){var t=e.className,a=e.cssModule,o=e.active,c=e.tag,d=(0,r.Z)(e,["className","cssModule","active","tag"]),m=(0,s.mx)(l()(t,!!o&&"active","breadcrumb-item"),a);return n.createElement(c,(0,i.Z)({},d,{className:m,"aria-current":o?"page":void 0}))};c.defaultProps={tag:"li"},t.Z=c},8083:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Q}});var i=a(7294),r=a(9063),n=a(3849),o=a(5444),l=a(2980),s=a(6667),c=a(7798),d=a(9150),m=a(2590),p=a(4319);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},u.apply(this,arguments)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=function(e){var t,a;function r(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(f(t)),t.handleErrored=t.handleErrored.bind(f(t)),t.handleChange=t.handleChange.bind(f(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(f(t)),t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n=r.prototype;return n.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},n.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},n.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},n.executeAsync=function(){var e=this;return new Promise((function(t,a){e.executionResolve=t,e.executionReject=a,e.execute()}))},n.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},n.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},n.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},n.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},n.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},n.componentDidMount=function(){this.explicitRender()},n.componentDidUpdate=function(){this.explicitRender()},n.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},n.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},n.handleRecaptchaRef=function(e){this.captcha=e},n.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return i.createElement("div",u({},t,{ref:this.handleRecaptchaRef}))},r}(i.Component);g.displayName="ReCAPTCHA",g.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var h=a(9657),b=a.n(h),v=a(5706),x=a.n(v);function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},E.apply(this,arguments)}var y={},L=0;var S="onloadcallback";var w,N,I=(w=function(){return"https://"+(("undefined"!=typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+S+"&render=explicit"},N=(N={callbackName:S,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",a=function(t){var a,r;function n(e,a){var i;return(i=t.call(this,e,a)||this).state={},i.__scriptURL="",i}r=t,(a=n).prototype=Object.create(r.prototype),a.prototype.constructor=a,a.__proto__=r;var o=n.prototype;return o.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+L++),this.__scriptLoaderID},o.setupScriptURL=function(){return this.__scriptURL="function"==typeof w?w():w,this.__scriptURL},o.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},o.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=y[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[N.callbackName]},o.componentDidMount=function(){var e=this,t=this.setupScriptURL(),a=this.asyncScriptLoaderGetScriptLoaderID(),i=N,r=i.globalName,n=i.callbackName,o=i.scriptId;if(r&&void 0!==window[r]&&(y[t]={loaded:!0,observers:{}}),y[t]){var l=y[t];return l&&(l.loaded||l.errored)?void this.asyncScriptLoaderHandleLoad(l):void(l.observers[a]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[a]=function(t){return e.asyncScriptLoaderHandleLoad(t)},y[t]={loaded:!1,observers:s};var c=document.createElement("script");for(var d in c.src=t,c.async=!0,N.attributes)c.setAttribute(d,N.attributes[d]);o&&(c.id=o);var m=function(e){if(y[t]){var a=y[t].observers;for(var i in a)e(a[i])&&delete a[i]}};n&&"undefined"!=typeof window&&(window[n]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),c.onload=function(){var e=y[t];e&&(e.loaded=!0,m((function(t){return!n&&(t(e),!0)})))},c.onerror=function(){var e=y[t];e&&(e.errored=!0,m((function(t){return t(e),!0})))},document.body.appendChild(c)},o.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===N.removeOnUnmount)for(var t=document.getElementsByTagName("script"),a=0;a<t.length;a+=1)t[a].src.indexOf(e)>-1&&t[a].parentNode&&t[a].parentNode.removeChild(t[a]);var i=y[e];i&&(delete i.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===N.removeOnUnmount&&delete y[e])},o.render=function(){var t=N.globalName,a=this.props,r=(a.asyncScriptOnLoad,a.forwardedRef),n=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(a,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!=typeof window&&(n[t]=void 0!==window[t]?window[t]:void 0),n.ref=r,(0,i.createElement)(e,n)},n}(i.Component),r=(0,i.forwardRef)((function(e,t){return(0,i.createElement)(a,E({},e,{forwardedRef:t}))}));return r.displayName="AsyncScriptLoader("+t+")",r.propTypes={asyncScriptOnLoad:b().func},x()(r,e)})(g),C=I,R=a(5767),z=a(8278),A=a(7292),T=a(7046),k=a(974),q=a(4087),O=a(4475),_=(0,r.QM)({supportBanner:{fontSize:"0.9rem",padding:"0 0 1rem 0","@media (min-width: 992px)":{padding:"0 0 1rem 0"},"& .text":{color:"#33485C",paddingBottom:"1rem"},"& a":{color:"#33485C",textDecoration:"underline","&:hover":{textDecoration:"underline"}}},externalLinkImage:{marginTop:"-5px",marginLeft:"12px"}}),P=function(){var e=_();return i.createElement(i.Fragment,null,i.createElement("div",{className:e.supportBanner},i.createElement("section",{className:"container px-3"},i.createElement(s.Z,null,i.createElement(c.Z,{xs:"12",lg:"5"}),i.createElement(c.Z,{xs:"12",lg:"7"},i.createElement("hr",null),i.createElement("span",{className:"text d-block text-center text-md-left",dangerouslySetInnerHTML:{__html:O.QN}}))),i.createElement(s.Z,null,i.createElement(c.Z,{xs:"12",lg:"5"}),i.createElement(c.Z,{xs:"12",lg:"7"},i.createElement(q.d,{className:"text d-block text-center text-md-left",linkTo:O.x1.k,alt:"",ariaLabel:O.x1.f+" (Collegamento sito esterno apre su nuova scheda)"},O.x1.f,i.createElement(l.JO,{size:"sm",className:e.externalLinkImage,icon:"it-external-link"})))))))},Z=A.Q.privacy,D=T.kU,M=D.title,H=D.description,U=z.R0,W=(0,r.QM)({modalUpdatesContainer:{"&.modal-dialog":{maxWidth:"90%","@media (max-width: 991px)":{maxWidth:"100%",margin:"0"}},"&.modal-dialog .modal-content .modal-header":{padding:"0",marginBottom:"0.444rem"},"&.modal-dialog .modal-content .modal-body":{padding:"0",marginTop:"2.667rem"},"& .modal-content":{padding:"4.444rem 5.556rem","@media (max-width: 991px)":{padding:"3.778rem 0.833rem 4.444rem"}},"&.modal-dialog .modal-content .modal-header .modal-title":{fontSize:"1.333rem",fontWeight:"700",color:"#33485C",maxWidth:"70%","@media (max-width: 991px)":{maxWidth:"100%"}}},close:{"@media (max-width: 991px)":{position:"absolute",top:"0.556rem",right:"-0.5rem"},"&:focus":{outline:"2px solid #ff9900",boxShadow:"none"},"&.btn":{background:"none",boxShadow:"none"},"&.btn:hover":{background:"none"},"&.btn.btn-secondary:active":{background:"none",boxShadow:"none"},"&.btn span":{fontSize:"0.778rem",color:"#0066CC",fontWeight:"600",marginRight:"1.333rem","@media (max-width: 991px)":{fontSize:"0.875rem"}}},modalSubtitle:{fontSize:"1rem",color:"#33485C"},formMessage:{"& p":{fontSize:"0.889rem",color:"#33485C",fontWeight:"400"},'& [class$="-control"]':{border:"none",borderBottom:"1px solid #5c6f82",borderRadius:"0",boxShadow:"none"},'& [class$="-ValueContainer"]':{fontSize:"0.889rem",color:"#808080"},'& [class$="-indicatorSeparator"]':{display:"none"},'& [class$="-menu"]':{margin:"0",border:"none",boxShadow:"0px 0px 80px rgba(0, 43, 85, 0.1)",borderTopLeftRadius:"0",borderTopRightRadius:"0",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px"},'& [class$="-MenuList"]':{padding:"0",'& [class$="-option"]':{fontSize:"0.889rem",color:"#0066CC",background:"#fff"}},'& [class$="-indicatorContainer"] svg':{fill:"#33485C"},'& [class$="-singleValue"]':{fontSize:"0.889rem",fontWeight:"700",color:"#17324d"},'& [class$="-placeholder"]':{color:"#737374"},'& .select.is-invalid [class$="-control"]':{borderColor:"#D6364E"},"& .select.focused":{borderColor:"#f90",boxShadow:"0 0 0 2px #f90",outline:"0"},"& .select":{"&:focus":{borderColor:"#f90",boxShadow:"0 0 0 2px #f90",outline:"0"}},"& .css-1n7v3ny-option":{textDecoration:"underline"},"& .form-check":{borderBottom:"1px solid #e6e6e6",padding:"1.111rem 0.444rem"},"& .form-check .form-check-label":{fontSize:"0.889rem",fontWeight:"600",color:"#17324D"},"& .form-group":{margin:"0"},"& .form-group label":{color:"#17324d",textTransform:"uppercase"},'& .form-group input[type="text"]':{fontSize:"0.889rem","&:focus":{border:"2px solid #f90",boxShadow:"0 0 0 2px #f90",outline:"0"}},'& .form-group input[type="text"].is-invalid':{borderBottom:"solid 2px #D6364E"},'& .form-group input[type="email"]':{fontSize:"0.889rem","&:focus":{border:"2px solid #f90",boxShadow:"0 0 0 2px #f90",outline:"0"}},'& .form-group input[type="email"].is-invalid':{borderBottom:"solid 2px #D6364E"},"& .invalid-feedback":{color:"#D6364E !important"},"& small.error-label":{fontSize:"0.778rem",color:"#D6364E",padding:"0 0.444rem",fontWeight:"400",position:"absolute"}},modalLabel:{fontSize:"0.778rem",color:"#33485C",fontWeight:"600"},maxLengthLabel:{fontSize:"0.778rem",color:"#737374",marginLeft:"0.444rem"},selectLabel:{fontSize:"0.778rem",fontWeight:"600",color:"#17324d",padding:"0 0.563rem",textTransform:"uppercase",marginBottom:"0"},notification:{composes:"notification with-icon dismissable",zIndex:"9999",display:"block",opacity:"0",visibility:"hidden",transition:".3s ease",bottom:"unset",top:"16px",left:"50%",transform:"translateX(-50%)","&.show":{opacity:"1",visibility:"visible",transition:".3s ease"},"&.with-icon.success":{borderColor:"#00CF86"}},modalFooterLabel:{composes:"mb-3",fontSize:"0.889rem"},spinner:{composes:"spinner hidden ml-3",maxHeight:"2.667rem","&.hidden":{display:"none"}},titleUpdate:{fontSize:"2.5rem",fontWeight:"700",color:"#33485C",lineHeight:"48px",marginBottom:"30px","@media (max-width: 991px)":{fontSize:"2.25rem"},"@media (max-width: 767px)":{textAlign:"center"}},subtitleUpdate:{fontSize:"1.333rem",color:"#33485C",lineHeight:"1.5","@media (max-width: 991px)":{fontSize:"1.25rem"},"@media (max-width: 767px)":{textAlign:"center"}},mandatory:{fontSize:"1rem",marginTop:"6.25rem","@media (min-width: 991px)":{marginTop:"6.25rem"}},heroImg:{maxWidth:"100%","@media (max-width: 991px)":{width:"80%"}},breadcrumb:{padding:"1.563rem 0 0","& .breadcrumb":{padding:"0.75rem 0"}},breadcrumbItem:{"& a":{color:"#5B6F82",fontWeight:"600",textDecoration:"underline",fontSize:"18px"},"&::before":{fontWeight:"600",color:"#33485C"}},breadcrumbItemActive:{"& a":{color:"#656566",textDecoration:"none",fontSize:"18px",pointerEvents:"none"},"&::before":{fontSize:"18px",fontWeight:"600",color:"#33485C"}},submitContainer:{marginBottom:"6rem","@media (max-width: 991px)":{marginBottom:"6rem"}},banner:{display:"flex",alignItems:"center",padding:"22px 30px",background:"#F0F6FC",marginTop:"60px",justifyContent:"space-between","@media (max-width: 991px)":{flexDirection:"column",alignItems:"flex-start"}},bannerLeft:{flexBasis:"55%","@media (max-width: 991px)":{marginBottom:"20px"}},bannerParagraph:{fontSize:"1rem",lineHeight:"24px",margin:"0","& .fw-600":{fontWeight:"600",margin:"0"}},bannerLink:{fontSize:"1.111rem",fontWeight:"700",textDecoration:"none"}}),B=function(){var e=(0,i.useState)("not-active"),t=e[0],a=e[1],r=(0,i.useState)(!1),u=r[0],f=r[1],g="is-invalid",h=".form-group",b="error-label",v=(0,i.useState)(),x=v[0],E=v[1];(0,i.useEffect)((function(){E(new Event("selected")),document.querySelectorAll("#assistance-form .select input").forEach((function(e){e.addEventListener("focus",(function(){e.closest(".select").classList.add("focused")})),e.addEventListener("focusout",(function(){e.closest(".select").classList.remove("focused")}))}))}),[]),(0,i.useEffect)((function(){var e=document.querySelector("#assistance-form"),t=e.querySelectorAll("[required]:not(select)"),a=e.querySelectorAll("select[required]"),i=!0,r=!0,n=function(){i=!!(i=Array.prototype.slice.call(t).find((function(e){return!1===e.checkValidity()}))),t.forEach((function(e){if(e.checkValidity()){e.classList.remove(g);var t=e.closest(h).querySelector("small");t&&(t.classList.remove(b),t.innerHTML="")}})),f(!i&&!r)},o=function(){r=!!(r=Array.prototype.slice.call(a).find((function(e){return""===e.value}))),f(!i&&!r)};t.forEach((function(e){e.addEventListener("input",n)})),a.forEach((function(e){e.addEventListener("selected",o)}))}),[]);var y=W(),L=function(e){e.preventDefault();var t=e.target,a=t.value;if(""!==a){var i=t.getAttribute("pattern");if("email"===t.getAttribute("type")){var r=t.closest(h).querySelector("small");r.classList.add(b),r.innerHTML=I,t.classList.add(g)}if(i){if(new RegExp(i).test(a))return;var n=t.closest(h).querySelector("small");n.classList.add(b),n.innerHTML=B,t.classList.add(g)}}},S="00D7Q000001NvsR",w=R.oC,N=w.selectArgument,I=w.emailValidationLabel,z=w.emailLabel,A=w.argumentLabel,T=w.selectPlaceholder,q=w.telLabel,O=w.descriptionLabel,_=w.objectLabel,D=w.sendButtonLabel,B=U.errorMatch;return i.createElement(i.Fragment,null,i.createElement(k.H,{title:M,description:H}),i.createElement("div",{className:"container px-3"},i.createElement(s.Z,null,i.createElement(c.Z,{xs:"12"},i.createElement(d.Z,{className:y.breadcrumb},i.createElement(m.Z,{className:y.breadcrumbItem},i.createElement("a",{href:"/"},"Home"),i.createElement("span",{className:"separator"})),i.createElement(m.Z,{className:y.breadcrumbItem},i.createElement("a",{href:"/supporto"},"Supporto"),i.createElement("span",{className:"separator"})),i.createElement(m.Z,{active:!0,className:y.breadcrumbItemActive},i.createElement("a",null,"Assistenza")))))),i.createElement("div",{className:"container px-3"},i.createElement("iframe",{name:"formFrame",id:"formFrame",className:"d-none",title:"no-redirect"}),i.createElement(s.Z,{className:"mt-5"},i.createElement(c.Z,{xs:12,md:6,lg:5},i.createElement("h1",{className:y.titleUpdate},"Assistenza"),i.createElement("div",{className:y.subtitleUpdate},"Un team dedicato è a disposizione di PA locali e fornitori per chiarire dubbi e approfondire temi di interesse. Compila il modulo sottostante e invia la richiesta.")),i.createElement(c.Z,{xs:12,md:6,lg:3,className:"offset-lg-2 d-flex justify-content-center justify-content-sm-end justify-content-lg-center mt-5 mt-md-0"},i.createElement("img",{src:"/assets/assistenza.svg",alt:"",className:y.heroImg}))),i.createElement(s.Z,null,i.createElement(c.Z,{xs:12},i.createElement("div",{className:y.banner},i.createElement("div",{className:y.bannerLeft},i.createElement("p",{className:y.bannerParagraph},i.createElement("p",{className:"fw-600"},"Hai già un profilo utente su PA digitale 2026?"),"Accedi all’area riservata per inviare la tua richiesta e ricevere una risposta ancora più veloce.")),i.createElement("div",{className:y.bannerRight},i.createElement(o.rU,{className:y.bannerLink,"aria-label":"vai alla pagina Accedi",to:"https://areariservata.padigitale2026.gov.it/sis_SpidPage"},"Accedi con identità digitale",i.createElement("svg",{className:"ml-3",width:"23",height:"16",viewBox:"0 0 23 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7321 8.70711C22.1226 8.31658 22.1226 7.68342 21.7321 7.29289L15.3681 0.928932C14.9776 0.538408 14.3444 0.538408 13.9539 0.928932C13.5634 1.31946 13.5634 1.95262 13.9539 2.34315L19.6108 8L13.9539 13.6569C13.5634 14.0474 13.5634 14.6805 13.9539 15.0711C14.3444 15.4616 14.9776 15.4616 15.3681 15.0711L21.7321 8.70711ZM1 9H21.025V7H1V9Z",fill:"#0066CC"}))))))),i.createElement(s.Z,null,i.createElement(c.Z,{xs:12},i.createElement("div",{className:y.mandatory,id:"mandatory-label"},"I campi con asterisco sono obbligatori"))),i.createElement(s.Z,null,i.createElement(c.Z,{xs:"12"},i.createElement("form",{action:"https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8",method:"POST",className:y.formMessage,id:"assistance-form",target:"formFrame",onSubmit:function(e){setTimeout((function(){(0,o.c4)("../../richiesta-inviata"),e.target.reset(),window.grecaptcha.reset(),f(!1)}),500)}},i.createElement("input",{type:"hidden",name:"captcha_settings",value:'{"keyname":"reCAPTCHA_prod","fallback":"true","orgId":"'+S+'","ts":""}'}),i.createElement("input",{type:"hidden",name:"debug",value:1}),i.createElement("input",{type:"hidden",name:"orgid",value:S}),i.createElement(s.Z,{className:"mt-5"},i.createElement(c.Z,{xs:12,md:6,lg:4},i.createElement(l.II,{label:z,size:"20",maxLength:"80","aria-describedby":"mandatory-label",type:"email",id:"00N7Q000007qqu1",name:"00N7Q000007qqu1","aria-required":"true",onInvalid:L,required:!0})),i.createElement(c.Z,{xs:12,md:6,lg:4,className:"offset-lg-1 mt-5 mt-md-0"},i.createElement(l.II,{label:q,size:"20",maxLength:"40","aria-describedby":"mandatory-label",type:"text",id:"00N7Q000007qqts",name:"00N7Q000007qqts",pattern:"^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$",onInvalid:L,onChange:function(e){var t=e.target,a=e.target.value,i=t.closest(h).querySelector("small");a.match(/^[0-9]+$/)?(i.classList.remove(b),i.innerHTML="",t.classList.remove(g)):(a=a.slice(0,-1),i.classList.add(b),i.innerHTML=B,t.classList.add(g)),e.target.value=a},className:"tel-input"}))),i.createElement(s.Z,{className:"mt-5"},i.createElement(c.Z,{xs:12,md:6,lg:4},i.createElement("div",{className:"select-wrapper"},i.createElement("label",{htmlFor:"00N7Q000007qqtk",className:y.selectLabel},A),i.createElement(p.ZP,{id:"argument-select",inputId:"argument-select-input",dataRefer:"00N7Q000007qqtk",options:N,onChange:function(e){var t=document.querySelector("#argument-select-input").closest(".select-wrapper").querySelector("select");t.value=e.value,t.dispatchEvent(x)},placeholder:T,"aria-label":T,"aria-describedby":"mandatory-label",className:"select",tabIndex:"0"}),i.createElement("select",{className:"d-none",id:"00N7Q000007qqtk",name:"00N7Q000007qqtk",title:"Argomento",required:!0,onInvalid:L,size:"1"},i.createElement("option",{value:"Accesso al portale"},"Accesso al portale"),i.createElement("option",{value:"Iscrizione newsletter"},"Iscrizione alla newsletter"),i.createElement("option",{value:"Generale"},"Generale"))))),i.createElement(s.Z,{className:"mt-5"},i.createElement(c.Z,{xs:12,lg:9},i.createElement(l.II,{label:_,"aria-describedby":"mandatory-label",type:"text",id:"subject",name:"subject","aria-required":"true",required:!0,onInvalid:L}))),i.createElement(s.Z,{className:"mt-5"},i.createElement(c.Z,{xs:12,lg:9},i.createElement("div",{className:"form-group"},i.createElement("textarea",{onFocus:function(){a("active")},onBlur:function(e){""===e.target.value&&a("")},onInput:function(e){var t=e.target.closest(h).querySelector(".max-length-number");t.innerHTML=700-parseInt(e.target.value.length,10),(0,n.xQ)("Numero di caratteri rimanenti: "+t.innerHTML)},rows:"3",maxLength:700,id:"description",name:"description",wrap:"soft",required:!0,onInvalid:L,"aria-label":"messaggio"}),i.createElement("label",{className:"active"===t?"active":"",htmlFor:"description"},O),i.createElement("span",{className:y.maxLengthLabel},i.createElement("span",{className:"max-length-number"},700)," caratteri a disposizione")))),i.createElement("input",{type:"hidden",id:"external",name:"external",value:"1"}),i.createElement("input",{type:"hidden",id:"origin",name:"origin",value:"Area pubblica"}),i.createElement("input",{type:"hidden",id:"recordType",name:"recordType",value:"0127Q0000001c35"}),i.createElement("input",{type:"hidden",id:"priority",name:"priority",value:"Medium"}),i.createElement("input",{type:"hidden",name:"debugEmail",value:"mattia.puggioni@yopmail.com"}),i.createElement(s.Z,null,i.createElement(c.Z,{xs:12},i.createElement(C,{sitekey:"6LfW56weAAAAAIWHJnwlQ2lHNRCcd04QLYQyamww",onChange:function(e){if(null!==e||""!==e.trim()){var t=JSON.parse(document.getElementsByName("captcha_settings")[0].value);t.ts=JSON.stringify((new Date).getTime()),document.getElementsByName("captcha_settings")[0].value=JSON.stringify(t),document.getElementsByName("submit")[0].disabled=!1}},className:u?" mt-5":"d-none",id:"captcha-container"}))),i.createElement("div",{className:"justify-content-center flex-column align-items-start justify-content-md-start px-0 py-0 mt-5"},i.createElement("p",{className:y.modalFooterLabel},"Cliccando su INVIA dichiaro di aver letto e compreso"," ",i.createElement("a",{target:"_blank",href:Z.linkTo,rel:"noreferrer"},"l'informativa privacy")),i.createElement("div",{className:y.submitContainer+" d-flex mt-5"},i.createElement("input",{type:"submit",name:"submit",disabled:!0,value:D,className:"btn btn-primary"})))))),i.createElement(P,null)))},j=a(6380),Q=function(e){var t=(0,i.useContext)(j.P)[1];return(0,i.useEffect)((function(){return t({type:"SET:ACTIVE_HEADER",payload:{activeItem:"supporto"}}),function(){t({type:"SET:ACTIVE_HEADER"})}}),[t]),i.createElement(B,e)}},6104:function(e,t,a){"use strict";var i=a(2637);function r(){}function n(){}n.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,n,o){if(o!==i){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:r};return a.PropTypes=a,a}},9657:function(e,t,a){e.exports=a(6104)()},2637:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5767:function(e){"use strict";e.exports=JSON.parse('{"oC":{"selectRepresent":[{"value":"public-administration","label":"Pubblica amministrazione"},{"value":"fornitore-it","label":"Fornitore IT"},{"value":"other","label":"Altro"}],"selectArgument":[{"value":"Accesso al portale","label":"Accesso al portale"},{"value":"Iscrizione newsletter","label":"Iscrizione alla newsletter"},{"value":"Generale","label":"Generale"}],"selectInQuanto":[{"value":"dirigente-administration","label":"Dirigente dell’amministrazione"},{"value":"dirigente-it-administration","label":"Dirigente sistemi IT dell’amministrazione"},{"value":"dipendente-administration","label":"Dipendente dell’amministrazione"},{"value":"other","label":"Altro"}],"selectMessage":[{"value":"general","label":"Generale"},{"value":"investimenti-pnrr","label":"Investimenti del PNRR"},{"value":"richiesta-fondi","label":"Richiesta dei fondi"},{"value":"realizzazione-progetti","label":"Realizzazione dei progetti"},{"value":"erogazione-risorse","label":"Erogazione delle risorse"},{"value":"technical-support","label":"Supporto tecnico"}],"modalUpdatesTitle":"Ricevi aggiornamenti","modalMessageTitle":"Scrivici","updatesLabel":"AGGIORNAMENTI","updatesInfo":"Lascia i tuoi contatti per ricevere <strong>materiali e <br>informazioni</strong> sulle novità e gli avvisi di Italia digitale 2026","mandatoryAdvise":"I campi con asterisco sono obbligatori","requiredLabel":"Questo campo è richiesto","emailLabel":"EMAIL*","emailValidationLabel":"Per favore inserisci un\'indirizzo email valido.","argumentLabel":"Argomento*","measureLabel":"Misura*","selectPlaceholder":"Scegli una voce dall’elenco","enteValidationLabel":"Per favore inserisci una denominazione ente valida.","enteTypeLabel":"TIPO DI ENTE/STRUTTURA*","enteNameLabel":"NOME STRUTTURA*","inQuantoLabel":"IN QUANTO*","directContactLabel":"CONTATTO DIRETTO","directContactInfo":"Un <strong>Team dedicato</strong> è a tua disposizione per <strong>ricevere<br>chiarimenti</strong> sugli investimenti o approfondire alcuni temi","addMessageLabel":"Voglio aggiungere un messaggio","nameLabel":"Nome richiedente:*","objectLabel":"Oggetto*","messageSelectLabel":"ARGOMENTO MESSAGGIO","descriptionLabel":"Testo messaggio*","telLabel":"Contatto telefonico","radioGroupLabel":"DICHIARO","representLabel":"RAPPRESENTO*","messageLabel":"TESTO MESSAGGIO","comunicationRadio":"Acconsento a essere contattato per comunicazioni specifiche*","privacyRadio":"Ho letto e compreso","privacyRadioLinkLabel":"l’informativa privacy","mandatoryRadioLabel":"Seleziona entrambe le voci per proseguire","sendButtonLabel":"INVIA"},"fR":{"image":"assets/assistance-success.svg","altImage":"illustrazione successo","title":"Richiesta di assistenza inviata","text":"Abbiamo ricevuto la tua richiesta di assistenza. Riceverai un riscontro al più presto ai contatti indicati.","link":"/","btnAriaLabel":"torna alla home","btnLabel":"TORNA ALLA HOME"},"qN":{"image":"assets/assistance-success.svg","altImage":"illustrazione successo","title":"Indirizzo email da confermare","text":"Per completare la richiesta, fai click sul link che ti abbiamo inviato all’indirizzo email indicato.","link":"/","btnAriaLabel":"torna alla home","btnLabel":"TORNA ALLA HOME"},"Uw":{"image":"assets/error-page.svg","altImage":"illustrazione errore","title":"Attenzione, non è possibile completare la richiesta","text":"Si è verificato un errore durante l’invio dei dati.","link":"/ricevi-aggiornamenti","btnAriaLabel":"riprova","btnLabel":"RIPROVA","error":true}}')},4475:function(e){"use strict";e.exports=JSON.parse('{"u2":"Supporto - PA digitale 2026","PL":{"title":"Hai bisogno di chiarimenti o supporto?","description":"Consulta le <strong>le domande frequenti</strong> o <strong>scrivici</strong> per ricevere una risposta via email"},"Bx":{"buttonLink":"/supporto/domande-frequenti","buttonLabel":"Vai alle domande frequenti","faqPreviewCards":[{"id":1,"title":"Chi può accedere a PA digitale 2026?","text":"Il rappresentante legale dell\'amministrazione, o una persona incaricata ad agire per suo conto, può accedere con SPID/CIE alla piattaforma. Durante la procedura di primo accesso alla piattaforma, è necessario selezionare e attivare il profilo della PA di riferimento.","faqId":"faq-1","ariaLabel":"Vai alla faq Chi può accedere a PA digitale 2026?"},{"id":2,"title":"Quali sono i requisiti per il primo accesso a PA digitale 2026?","text":"Per accedere alla piattaforma è necessario disporre della propria identità digitale (SPID o CIE) e della propria email istituzionale. Il rappresentante legale dell\'amministrazione (o chi opera per suo conto) deve inoltre avere la possibilità di consultare la PEC dell\'amministrazione per la quale intende operare.","faqId":"faq-2","ariaLabel":"Vai alla faq Quali sono i requisiti per il primo accesso a PA digitale 2026?"},{"id":3,"title":"È possibile accedere alla piattaforma anche quando non si ricopre il ruolo di rappresentante legale dell\'amministrazione?","text":"Si. Nel caso in cui a effettuare l\'accesso non sia direttamente il rappresentante legale ma una persona da lui incaricata, è presente una casella da spuntare per dichiarare di stare agendo per conto del rappresentante legale dell\'amministrazione. Alla fine della procedura di primo accesso, il rappresentante legale della PA riceve una PEC con cui viene a informato del fatto che la persona incaricata ha agito per suo conto su PA digitale 2026.","faqId":"faq-3","ariaLabel":"Vai alla faq È possibile accedere alla piattaforma anche quando non si ricopre il ruolo di rappresentante legale dell\'amministrazione?"}]},"ZY":{"title":"Richiedi assistenza","body":"Se non hai trovato le informazioni che cercavi fra le domande frequenti, <strong>scrivici</strong>: ti risponderemo al più presto","altImg":"immagine placeholder","btnText":"contattaci"},"QN":"Per segnalazioni o suggerimenti sull’accessibilità di questo sito web padigitale2026.gov.it contattaci alla <a href=\\"mailto:accessibilita@innovazione.gov.it\\">casella di posta dedicata</a>","x1":{"k":"https://www.agid.gov.it/it/design-servizi/accessibilita","f":"Scopri di più sull\'accessibilità"}}')}}]);
//# sourceMappingURL=component---src-pages-supporto-assistenza-jsx-c12fcdc72588bf4ca1fc.js.map