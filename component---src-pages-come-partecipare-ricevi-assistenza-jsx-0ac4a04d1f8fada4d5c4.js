"use strict";(self.webpackChunkpadigitale2026=self.webpackChunkpadigitale2026||[]).push([[144],{9150:function(e,t,i){var a=i(4038),n=i(1531),r=i(7294),o=i(2565),l=i.n(o),c=i(3033),s=function(e){var t=e.className,i=e.listClassName,o=e.cssModule,s=e.children,d=e.tag,m=e.listTag,p=e["aria-label"],u=(0,n.Z)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),g=(0,c.mx)(l()(t),o),h=(0,c.mx)(l()("breadcrumb",i),o);return r.createElement(d,(0,a.Z)({},u,{className:g,"aria-label":p}),r.createElement(m,{className:h},s))};s.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.Z=s},2590:function(e,t,i){var a=i(4038),n=i(1531),r=i(7294),o=i(2565),l=i.n(o),c=i(3033),s=function(e){var t=e.className,i=e.cssModule,o=e.active,s=e.tag,d=(0,n.Z)(e,["className","cssModule","active","tag"]),m=(0,c.mx)(l()(t,!!o&&"active","breadcrumb-item"),i);return r.createElement(s,(0,a.Z)({},d,{className:m,"aria-current":o?"page":void 0}))};s.defaultProps={tag:"li"},t.Z=s},6921:function(e,t,i){var a=i(4038),n=i(1531),r=i(7294),o=i(2565),l=i.n(o),c=i(3033),s=function(e){var t=e.className,i=e.cssModule,o=e.fluid,s=e.tag,d=(0,n.Z)(e,["className","cssModule","fluid","tag"]),m="container";!0===o?m="container-fluid":o&&(m="container-"+o);var p=(0,c.mx)(l()(t,m),i);return r.createElement(s,(0,a.Z)({},d,{className:p}))};s.defaultProps={tag:"div"},t.Z=s},9209:function(e,t,i){i.d(t,{J:function(){return l}});var a=i(7294),n=i(9063),r=i(2980),o=(0,n.QM)({heroVideo:{display:"flex",padding:"82px 0 0 1.5rem",alignItems:"flex-start",flexDirection:"column",minHeight:"412px","@media (max-width: 991px)":{flexDirection:"column",padding:"40px 0"},"& .collapse-div":{border:"none",width:"100%"},"& .collapse-header button":{border:"none",display:"inline-flex",paddingLeft:"0","&::before":{position:"relative",order:"2",marginLeft:"5px"},"&.collapsed":{color:"#06c"}},"& .collapse-body":{paddingLeft:"0",paddingRight:"0",paddingBottom:"0"}},videoTraslation:{maxWidth:"45em"},info:{display:"flex",flexDirection:"column","& h4":{fontSize:"1.688rem",fontWeight:"700"}},videoContainer:{flexBasis:"55%",height:"100%",width:"100%",aspectRatio:"16 / 9"}}),l=function(e){var t=e.src,i=e.description,n=e.videoText,l=o(),c=(0,a.useState)(!1),s=c[0],d=c[1];return a.createElement(a.Fragment,null,a.createElement("div",{className:l.heroVideo},a.createElement("div",{className:l.info},a.createElement("h3",null,"Guarda il video dedicato"),a.createElement("p",null,i)),a.createElement("div",{className:l.videoContainer+" videoContainer"},a.createElement("iframe",{width:"100%",height:"100%",src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),n?a.createElement(r.UQ,{className:"mt-5"},a.createElement(r._m,{active:s,onToggle:function(){return d(!s)}},"Trascrizione del video"),a.createElement(r.X1,{active:s},a.createElement("p",{className:l.videoTraslation},a.createElement("span",{dangerouslySetInnerHTML:{__html:n}})))):""))}},1366:function(e,t,i){i.d(t,{M:function(){return c}});var a=i(7294),n=i(9063),r=i(6667),o=i(7798),l=(0,n.QM)({timelineVertical:{composes:"timeline-vertical",position:"relative",paddingBottom:"40px"},scrollIndicator:{position:"absolute",top:"0",left:"-40px",width:"4px",height:"calc(100% - 60px)",background:"#C5E1F9",display:"none","@media (max-width: 992px)":{left:"31px",top:"0",height:"calc(100% - 72px)"},"@media(min-width: 768px)":{display:"block"}},scrollIndicatorActive:{composes:"scroll-indicator-active",background:"linear-gradient(0deg, #0073E6 0%, #004080 100%)",width:"100%",height:"0",transition:".3s ease",maxHeight:"100%",display:"none","@media(min-width: 768px)":{display:"block"}},timelinePointSection:{composes:"timeline-point-section",marginBottom:"1.111rem",position:"relative",minHeight:"373px",display:"flex",boxShadow:"0px 2px 20px rgba(0, 0, 0, 0.1)","@media (max-width: 992px)":{marginLeft:"4.444rem"},"@media (max-width: 767px)":{marginLeft:"0"},"&:nth-child(even)":{"& img":{order:"2",marginRight:"4.375rem",marginLeft:"0","@media (min-width: 992px) and (max-width: 1024px)":{marginRight:"2rem"},"@media (max-width: 991px)":{order:"0",margin:"0 0 1.111rem 0"}},"& .point-header":{"& .circle":{background:"#F7FAFD",height:"140%",width:"320px",position:"absolute",left:"unset",right:"-160px",top:"50%",transform:"translateY(-50%)",zIndex:"-9",borderRadius:"50%","@media (max-width: 991px)":{right:"unset",width:"140%",height:"420px",top:"-310px",left:"50%",transform:"translateX(-50%)"}},"& .header-info":{marginRight:"2.111rem","@media (max-width: 991px)":{marginRight:"0"}}}}},timelineNumber:{composes:"timeline-number",background:"#FFFFFF",border:"6px solid #FFFFFF",boxShadow:"0px 0px 40px rgba(0, 0, 0, 0.1)",width:"38px",height:"38px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",left:"-57px",top:"0",transition:".2s ease","@media (max-width: 992px)":{top:"0",left:"-66px"},"@media (max-width: 574px)":{left:"-57px"},"&.active":{background:"#0066CC",transition:".2s ease","& span":{color:"#FFFFFF",border:"none",transition:".2s ease"}},"& span":{fontSize:"1rem",fontWeight:"700",color:"#0066CC",border:"1px solid #0066CC",borderRadius:"50%",width:"32px",height:"26px",display:"flex",alignItems:"center",justifyContent:"center"}},pointHeader:{display:"flex",alignItems:"center",padding:"0 2.5rem",overflow:"hidden",position:"relative",composes:"point-header",width:"100%","& .circle":{background:"#F7FAFD",height:"140%",width:"320px",position:"absolute",left:"-160px",top:"50%",transform:"translateY(-50%)",zIndex:"-9",borderRadius:"50%"},"& img":{maxWidth:"160px",marginRight:"5rem",marginLeft:"3.611rem","@media (min-width: 992px) and (max-width: 1024px)":{marginRight:"2rem",marginLeft:"2.111rem"}},"@media (max-width: 991px)":{flexDirection:"column",marginBottom:"2.333rem",padding:"1.444rem",paddingBottom:"0",justifyContent:"center","& img":{width:"134px",height:"134px",margin:"0 0 1.111rem 0"},"& .circle":{right:"unset",width:"140%",height:"420px",top:"-310px",left:"50%",transform:"translateX(-50%)"}}},headerInfo:{marginRight:"0",maxWidth:"450px",composes:"header-info","@media (max-width: 991px)":{margin:"0",textAlign:"center"}},headerTitle:{fontSize:"1.5rem",fontWeight:"700",color:"#33485C",marginBottom:"1.111rem"},headerParagraph:{fontSize:"1rem",lineHeight:"24px","@media (max-width: 991px)":{marginBottom:0}},littleTitle:{display:"block",marginTop:"1.111rem",fontSize:"0.778rem",fontWeight:"600",textTransform:"uppercase",marginBottom:"0.444rem"},bodyParagraph:{fontSize:"1rem",lineHeight:"28px"},littleIcon:{height:"48px"}}),c=function(e){var t=e.item;(0,a.useEffect)((function(){var e=document.querySelector(".timeline-vertical");window.addEventListener("scroll",(function(){var t=e.getBoundingClientRect(),i=t.top,a=t.bottom;if(i<="100"&&a>="700"){i<0&&(i*=-1),a<0&&(a*=-1);var n=100-100*(a-i)/e.getBoundingClientRect().height;e.querySelector(".scroll-indicator-active").style.height=n+"%"}}))}),[]);var i=l();return a.createElement(a.Fragment,null,a.createElement("div",{className:"container position-relative"},a.createElement(r.Z,{className:"mt-5"},a.createElement(o.Z,{xs:12,lg:11,className:"offset-lg-1 mb-3 mb-lg-0"},a.createElement("div",{className:i.timelineVertical},a.createElement("div",{className:i.scrollIndicator},a.createElement("div",{className:i.scrollIndicatorActive})),t.map((function(e,t){return a.createElement("div",{className:i.timelinePointSection,"data-index":e.index,key:t,id:e.sectionId},a.createElement("div",{className:i.timelineNumber,"data-index":e.index},a.createElement("span",null,parseInt(e.index,10)+1)),a.createElement("div",{className:i.pointHeader},a.createElement("div",{className:"circle"}),a.createElement("img",{src:e.icon,alt:""}),a.createElement("div",{className:i.headerInfo},a.createElement("h3",{className:i.headerTitle},e.title),a.createElement("p",{className:i.headerParagraph,dangerouslySetInnerHTML:{__html:e.headerParagraph}}))))})))))))}},2479:function(e,t,i){i.d(t,{M:function(){return o}});var a=i(7294),n=i(2980),r=(0,i(9063).QM)({wrapper:{composes:"sidenav",position:"sticky",background:"#fff",zIndex:"999",top:"0",height:"100%",width:"100%","@media (min-width: 992px)":{maxWidth:"270px"},"& .sidebar-linklist-wrapper":{"& .link-list-wrapper":{"& ul":{display:"block",marginRight:"0",marginLeft:"0",paddingBottom:"0","& li":{"& + li":{"@media (min-width: 992px)":{marginLeft:"0"}},"&:last-child":{marginRight:"0.833rem","@media (min-width: 992px)":{marginRight:"0"}},"&:first-child":{"@media (min-width: 992px)":{marginLeft:"0"}},"& a.list-item":{paddingLeft:"0","& span":{marginRight:"0",color:"#06c",textDecoration:"none",fontWeight:"400",fontSize:"0.833rem"},"&.disabled":{pointerEvents:"none","& span":{color:"#DAE3EC"}},"&.active":{backgroundColor:"transparent","& span":{fontWeight:"700"}}}}}}},"& .scroll-indicator":{height:"4px",width:"100%",background:"#F0F6FC",position:"absolute",left:"0",bottom:"0"},"& .scroll-indicator-active":{background:"#06C",height:"100%"},"& .collapse-div":{borderBottom:"0",background:"#fff","@media (max-width: 991px)":{border:"none"}},"& .collapse-body":{padding:"0"},"& .collapse-header button":{padding:"0",height:"60px",position:"relative",borderTop:"0","&::before":{marginRight:"1.944rem"},"& .title":{padding:"0.889rem 2rem 0.889rem 0",fontSize:"0.778rem",color:"#5A768A"}}}}),o=function(e){var t=r(),i=(0,a.useState)(),o=i[0],l=i[1],c=(0,a.useState)(!0),s=c[0],d=c[1],m=".sidebar-wrapper .link-list .list-item",p=e.activeList,u=e.searchValue,g=e.list,h=e.customClass;function f(){if(u&&u.length>=3){var e=g.filter((function(e){return p.some((function(t){return t.sectionId===e.sectionId}))})),t=g.filter((function(e){return p.every((function(t){return t.sectionId!==e.sectionId}))}));o||(b(),x(e)),E(),t.forEach((function(e){document.querySelector('[data-id="'+e.sectionId+'"]').classList.add("disabled")}))}else o||(b(),x(g)),E()}function x(e){e.length&&document.querySelector('[data-id="'+e[0].sectionId+'"]').classList.add("active")}function v(e){e.preventDefault(),b();var t=e.target.closest("a");t.classList.add("active"),o&&d(!1);var i=document.querySelector(t.getAttribute("href")).getBoundingClientRect().top+window.pageYOffset;o?window.scrollTo({top:i-320,behavior:"smooth"}):window.scrollTo({top:i-60,behavior:"smooth"})}function b(){document.querySelectorAll(m).forEach((function(e){e.classList.remove("active")}))}function E(){document.querySelectorAll(m).forEach((function(e){e.classList.remove("disabled")}))}return(0,a.useEffect)((function(){l(window.innerWidth<992),window.addEventListener("resize",(function(){l(window.innerWidth<992)}))}),[]),(0,a.useEffect)((function(){(f(),o)?(document.querySelectorAll(m)[0].classList.add("active"),d(!1)):o||(b(),x(g),E(),d(!0))}),[o]),(0,a.useEffect)((function(){return f()}),[u]),(0,a.useEffect)((function(){var e=document.querySelector(".sidenav");if(e){window.addEventListener("scroll",(function(){var t=e.getBoundingClientRect().top,i=t+window.scrollY,a=(0===t?i:0)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100,n=document.querySelector(".scroll-indicator .scroll-indicator-active");n&&(g.map((function(e){var t="#"+e.sectionId+" .point-header";if(document.querySelector(t)){var i=document.querySelector(t).getBoundingClientRect().top;if(i>0&&i<300)b(),document.querySelector('[data-id="'+e.sectionId+'"]').classList.add("active")}if("watch-video"===e.sectionId&&document.querySelector(".videoContainer")){var a=document.querySelector("#watch-video").getBoundingClientRect().top;if(a>0&&a<110)b(),document.querySelector('[data-id="'+e.sectionId+'"]').classList.add("active")}})),n.style.width=a+"%")}))}}),[]),a.createElement(n.YE,{className:t.wrapper+" p-0 "+(h||"")},a.createElement("nav",{"aria-labelledby":"table-of-contents"},a.createElement(n.UQ,null,a.createElement(n._m,{active:s,onToggle:function(){return d(!s)}},a.createElement("h2",{id:"table-of-contents",className:"sr-only"},"Indice dei contenuti"),a.createElement("span",{className:"title"},"INDICE DELLA PAGINA"),a.createElement("div",{className:"scroll-indicator"},a.createElement("div",{className:"scroll-indicator-active"}))),a.createElement(n.X1,{active:s},a.createElement(n.Mc,null,g.map((function(e){return a.createElement(a.Fragment,{key:e.sectionId},e.sectionActive?a.createElement(n.cc,{key:e.sectionId,size:"medium",href:"#"+e.sectionId,"data-id":e.sectionId,className:"text-decoration-none",onClick:function(e){return v(e)},active:!o},a.createElement("span",null,e.sectionTitle)):a.createElement(n.cc,{key:e.sectionId,size:"medium",href:"#"+e.sectionId,"data-id":e.sectionId,className:"text-decoration-none",onClick:function(e){return v(e)}},a.createElement("span",null,e.sectionTitle)))})))))))}},8890:function(e,t,i){i.r(t),i.d(t,{default:function(){return S}});var a=i(7294),n=i(6380),r=i(6921),o=i(6667),l=i(7798),c=i(9150),s=i(2590),d=i(9063),m=i(3849),p=i(974),u=i(7046),g=JSON.parse('{"rc":[{"sectionTitle":"1. Trova le risposte ai dubbi più comuni","sectionId":"digital-identity","sectionActive":true},{"sectionTitle":"2. Apri una richiesta di assistenza","sectionId":"select-administration","sectionActive":false},{"sectionTitle":"3. Richiedi ulteriore supporto","sectionId":"verify-data","sectionActive":false},{"sectionTitle":"4. Ricevi aggiornamenti","sectionId":"confirm-subscription","sectionActive":false},{"sectionTitle":"Guarda il video dedicato","sectionId":"watch-video","sectionActive":false}],"ut":[{"index":0,"title":"Trova le risposte ai dubbi più comuni","icon":"/assets/ricevi-assistenza-1.svg","headerParagraph":"All’interno della sezione “Domande frequenti” puoi consultare le risposte alle domande più frequenti <strong>riguardo al funzionamento della piattaforma.</strong>","sectionId":"digital-identity"},{"index":1,"title":"Apri una richiesta di assistenza","icon":"/assets/ricevi-assistenza-2.svg","headerParagraph":"Se non hai trovato una risposta alla tua domanda, puoi ricevere assistenza compilando <strong>il modulo dedicato all’apertura di una nuova richiesta</strong> di supporto.","sectionId":"select-administration"},{"index":2,"title":"Richiedi ulteriore supporto","icon":"/assets/ricevi-assistenza-3.svg","headerParagraph":"Anche se hai ricevuto una risposta per risolvere il tuo problema, <strong>potresti aver bisogno di ulteriore supporto. In questo caso puoi</strong> riaprire la tua richiesta e ricevere, se necessario, assistenza telefonica.","sectionId":"verify-data"},{"index":3,"title":"Ricevi aggiornamenti","icon":"/assets/ricevi-assistenza-4.svg","headerParagraph":"<strong>Rimani aggiornato sull’evoluzione delle tue richieste</strong> di assistenza grazie alle notifiche della tua area riservata. Puoi inoltre consultare lo storico delle richieste.","sectionId":"confirm-subscription"}],"Rk":{"src":"https://www.youtube-nocookie.com/embed/zgmLLRoS4H4","description":"Scopri come trovare le risposte ai dubbi più comuni o ricevere assistenza su PA digitale 2026.","videoText":"PA digitale 2026 è il punto di accesso alle risorse previste dal PNRR per la transizione digitale della PA. Grazie a una sezione dedicata, puoi risolvere tutti i tuoi dubbi: puoi consultare le risposte alle domande frequenti, aprire una richiesta di assistenza semplicemente compilando un modulo: puoi selezionare l’ambito, l’argomento o indicare l’avviso per cui vuoi qualche chiarimento. Puoi richiedere supporto ulteriore, anche telefonico. Hai sempre tutto sotto controllo: nell’area riservata puoi monitorare le tue richieste, anche grazie a notifiche dedicate. Con PA digitale 2026 puoi candidare la tua amministrazione agli avvisi pubblici per renderla più digitale, sicura ed efficiente."}}'),h=i(1366),f=i(9209),x=i(2479),v=u.oe,b=v.title,E=v.description,w=g.rc,I=g.ut,y=g.Rk,N=(0,d.QM)({breadcrumb:{padding:"1.563rem 0 0","& .breadcrumb":{padding:"0.75rem 0"}},breadcrumbItem:{"& a":{color:"#5B6F82",fontWeight:"600",textDecoration:"underline",fontSize:"18px"},"&::before":{fontWeight:"600",color:"#33485C"}},breadcrumbItemActive:{"& a":{color:"#656566",textDecoration:"none",fontSize:"18px"},"&::before":{fontSize:"18px",fontWeight:"600",color:"#33485C"}},navigationContainer:{borderTop:"1px solid #A9B9C3",display:"flex","@media (max-width: 991px)":{flexDirection:"column",border:"none"},"& .content-container":{"@media (min-width: 992px)":{borderLeft:"1px solid #d9dadb"}}},noResults:{textAlign:"center",color:"#33485C",margin:"0.833rem 0"},inputContainer:{position:"relative","& .reset-btn":{background:"transparent",border:"0",position:"absolute",top:"15px",right:"10px",backgroundImage:'url("../assets/close-black.svg")',backgroundRepeat:"no-repeat",width:"1.1rem",height:"1.1rem"}},inputWrap:{backgroundImage:'url("../assets/icon-search.svg")',"&:focus":{outline:"2px solid #ff9900"}},contentTitle:{fontSize:"1.688rem",fontWeight:"700"},contentParagraph:{fontSize:"1.125rem"},cardReadMore:{boxShadow:"0px 2px 20px rgba(0, 0, 0, 0.1)",display:"flex",flexDirection:"column",padding:"20px 30px 20px 55px",position:"relative"},clip:{position:"absolute",top:"24px",left:"30px"},cardTitle:{fontWeight:"600",color:"#0066CC",fontSize:"1.125rem"},cardInfo:{fontWeight:"400",fontSize:"0.875rem",color:"#33485C"},titleUpdate:{fontSize:"2.5rem",fontWeight:"700",color:"#33485C",lineHeight:"48px",marginBottom:"30px","@media (max-width: 991px)":{fontSize:"2.25rem"},"@media (max-width: 767px)":{textAlign:"center"}},subtitleUpdate:{fontSize:"1.333rem",color:"#33485C",lineHeight:"1.5","@media (max-width: 991px)":{fontSize:"1.25rem"},"@media (max-width: 767px)":{textAlign:"center"}},heroImg:{maxWidth:"100%","@media (max-width: 425px)":{maxWidth:"80%"}}}),z=function(){var e=N();return(0,a.useEffect)((function(){(0,m.xQ)("Pagina caricata")}),[]),a.createElement(a.Fragment,null,a.createElement(p.H,{title:b,description:E}),a.createElement("div",{className:"pb-5"},a.createElement(r.Z,{className:"px-3"},a.createElement(o.Z,null,a.createElement(l.Z,{xs:12},a.createElement(c.Z,{className:e.breadcrumb},a.createElement(s.Z,{className:e.breadcrumbItem},a.createElement("a",{href:"/"},"Home"),a.createElement("span",{className:"separator"})),a.createElement(s.Z,{active:!0,className:e.breadcrumbItem},a.createElement("a",{href:"/come-partecipare"},"Come partecipare"),a.createElement("span",{className:"separator"})),a.createElement(s.Z,{active:!0,className:e.breadcrumbItemActive},a.createElement("a",null,"Trova le risposte alle tue domande o ricevi assistenza"))))),a.createElement(o.Z,{className:"mb-5 mt-5"},a.createElement(l.Z,{xs:12,lg:7},a.createElement("h1",{className:e.titleUpdate},"Trova le risposte alle tue domande o ricevi assistenza"),a.createElement("div",{className:e.subtitleUpdate},"All’interno della sezione dedicata al supporto puoi"," ",a.createElement("strong",null,"consultare le risposte alle domande più frequenti")," o"," ",a.createElement("strong",null,"aprire una richiesta per ricevere assistenza"),".")),a.createElement(l.Z,{xs:12,lg:4,className:"offset-lg-1 mt-5 mt-lg-0 d-flex justify-content-center align-items-center"},a.createElement("img",{src:"/assets/ricevi-assistenza.svg",alt:"",className:e.heroImg}))),a.createElement("div",{className:e.navigationContainer},a.createElement(x.M,{activeList:[],searchValue:"",list:w}),a.createElement("div",{className:"pl-lg-3 content-container",id:"id-list-points",role:"region","aria-label":"Lista punti da seguire"},a.createElement(r.Z,{className:"pl-lg-4 mb-4"},a.createElement("section",null,a.createElement("h3",{className:e.contentTitle+" mt-5"},"Ricevi supporto dedicato su PA digitale 2026"),a.createElement("p",{className:e.contentParagraph+" mb-0"},"Il processo di assistenza può prevedere fino a ",a.createElement("strong",null,"quattro passaggi"),":"))),a.createElement(h.M,{item:I}),a.createElement("section",{id:"watch-video"},a.createElement(f.J,{src:y.src,description:y.description,videoText:y.videoText})))))))},S=function(){var e=(0,a.useContext)(n.P)[1];return(0,a.useEffect)((function(){return e({type:"SET:ACTIVE_HEADER",payload:{activeItem:"come-partecipare"}}),function(){e({type:"SET:ACTIVE_HEADER"})}}),[e]),a.createElement(z,null)}}}]);
//# sourceMappingURL=component---src-pages-come-partecipare-ricevi-assistenza-jsx-0ac4a04d1f8fada4d5c4.js.map