(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),o=a(24),c=a(23),l="UPDATE_WINDOW_SIZE",s=Object(c.b)({windowSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:0,height:0},t=arguments.length>1?arguments[1]:void 0;return t.type===l?t.windowSize:e}}),m=(a(90),a(7)),u=a.n(m),d=a(127),h=a(116),g=a(132),p=a(68),f=a.n(p),E=a(69),b=a.n(E),w=a(70),v=a.n(w),y=a(41),k=a.n(y),x=a(52),S=a.n(x),N={firstName:"Sean",lastName:"Chok",fullName:"Sean Chok"},j="mailto:seanchok@connect.hku.hk",O="https://www.linkedin.com/in/sean-chok-9035b2144/",_="https://github.com/98sean98",C=["mechanical engineer","space enthusiast","robot builder","web developer"],A="The University of Hong Kong",D=u()((function(e){return{root:{color:e.palette.primary.contrastText},textBox:{margin:e.spacing(2)},iconGrid:{marginLeft:e.spacing(2)}}})),z=function(){var e=D(),t=N.firstName,a=A,n=C,i=[r.a.createElement(h.a,{variant:"h5"},"Hi, I'm ",t),r.a.createElement(h.a,{variant:"body1"},"I study at ",a)],o=[{link:_,component:r.a.createElement(f.a,null)},{link:O,component:r.a.createElement(b.a,null)},{link:j,component:r.a.createElement(v.a,null)}],c=500*(i.length+1),l=c+1500,s=l+500;return r.a.createElement("div",{className:e.root},i.map((function(t,a){return r.a.createElement("div",{key:a,className:e.textBox},r.a.createElement(k.a,{clear:!0,delay:500*(a+1)},t))})),r.a.createElement("div",{className:e.textBox},r.a.createElement(k.a,{clear:!0,delay:c},r.a.createElement(h.a,{variant:"body1"},"I excel as a ")),r.a.createElement(S.a,{cascade:!0,duration:600*n.length,delay:c+500},r.a.createElement("ul",null,n.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(h.a,{variant:"body1"},e))}))))),r.a.createElement(k.a,{clear:!0,delay:l},r.a.createElement("div",{className:e.textBox},r.a.createElement(h.a,{variant:"body1"},"Would you like to work with me? Contact me at "))),r.a.createElement(S.a,{cascade:!0,bottom:!0,duration:500*o.length,delay:s},r.a.createElement(d.a,{container:!0,spacing:2,className:e.iconGrid},o.map((function(e,t){return r.a.createElement(d.a,{item:!0,key:t},r.a.createElement(g.a,{color:"secondary",href:e.link,target:"_blank",rel:"noopener noreferrer"},e.component))})))))},R=a(71),T=a.n(R),B=u()((function(e){return{root:{height:"100vh",background:"url(".concat(T.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundBlendMode:"multiply"},profile:{padding:e.spacing(4)}}})),L=function(){var e=B();return r.a.createElement(d.a,{className:e.root},r.a.createElement(d.a,{item:!0,xs:6,className:e.profile},r.a.createElement(z,null)))},W=a(72),F=a.n(W),I=u()((function(e){return{root:{height:"100vh",background:"url(".concat(F.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundBlendMode:"multiply"},profile:{padding:e.spacing(4)}}})),P=function(){var e=I();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.profile},r.a.createElement(z,null)))},M=function(){var e=Object(o.c)((function(e){return e.windowSize})),t=e.width<600||e.height<600,a=e.width<600&&e.height<600,n=1.2,r=2.8,i=e.height>0?e.width/e.height:0;return{isMobileScreen:t,isSmallScreen:a,isLandscape:i>=n&&i<=r}},G=u()((function(e){return{root:{}}})),H=function(){var e=G(),t=M().isLandscape;return r.a.createElement("div",{className:e.root},t?r.a.createElement(L,null):r.a.createElement(P,null))},U=a(128),K=u()((function(e){return{footer:{padding:e.spacing(2),background:e.palette.primary.dark,color:e.palette.primary.contrastText,textAlign:"center"},text:{display:"block",margin:e.spacing(1)}}})),J=function(e){var t=e.href,a=e.children;return r.a.createElement(U.a,{color:"inherit",underline:"always",href:t},a)},q=function(){var e=K();return r.a.createElement("div",{className:e.footer},r.a.createElement(h.a,{variant:"caption",className:e.text},"Powered by ",r.a.createElement(J,{href:"https://reactjs.org/"},"React"),". Built with"," ",r.a.createElement(J,{href:"https://material-ui.com/"},"Material-UI"),". Managed at"," ",r.a.createElement(J,{href:"https://github.com/98sean98/98sean98.github.io"},"Github Repo"),"."),r.a.createElement(h.a,{variant:"caption",className:e.text},"Some of the images used do not belong to me, and they do not represent any form of commercial value on this site."))},Z=a(130),$=a(129),Q=a(73),V=a.n(Q),X=u()((function(e){return{root:{textAlign:"center"},gif:{borderRadius:"8px",width:"100%",height:"auto"},smallGif:{borderRadius:"8px",width:"auto",height:"250px"}}})),Y=function(){var e=X(),t=M().isSmallScreen;return r.a.createElement("div",{className:e.root},r.a.createElement("img",{className:t?e.smallGif:e.gif,src:V.a,alt:"drone crash"}))},ee=u()((function(e){return{alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignLeft:{textAlign:"left"},section:{margin:"".concat(e.spacing(1),"px 0")}}})),te=function(e){var t=e.shouldAlignCenter,a=ee();return r.a.createElement($.a,{className:t?a.alignCenter:a.alignLeft},r.a.createElement("div",{className:a.section},r.a.createElement(h.a,{variant:"h4"},"Robomaster"),r.a.createElement(h.a,{variant:"caption"},"HKU team in ",r.a.createElement(U.a,null,"Dreamlab"))),r.a.createElement("ul",{className:a.section},["spent an academic year learning Solidworks from scratch","used so many screws and screw drivers up to the point where I could differentiate the sizes just by holding them in my hand","fought competition deadlines like a true warrior"].map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(h.a,{variant:"body1"},e))}))),r.a.createElement(h.a,{variant:"body2"},"Key takeaway: a drone that had questionable flight safety"))},ae=u()((function(e){return{grid:{margin:"".concat(e.spacing(2),"px 0")}}})),ne=function(){var e=ae(),t=Object(Z.a)((function(e){return e.breakpoints.down("xs")}));return r.a.createElement($.a,null,r.a.createElement(d.a,{container:!0,spacing:2,justify:"space-between",alignItems:"center",className:e.grid},r.a.createElement(d.a,{item:!0,xs:12,sm:7,md:3,lg:8},r.a.createElement(te,{shouldAlignCenter:t})),r.a.createElement(d.a,{item:!0,xs:12,sm:5,md:3,lg:4},r.a.createElement(Y,null))))},re=u()((function(){return{app:{}}})),ie=Object(o.b)((function(e){return{}}),(function(e){return{updateWindowSize:function(t,a){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{type:l,windowSize:{width:e,height:t}}}(t,a))}}}))((function(e){var t=e.updateWindowSize,a=re();return Object(n.useEffect)((function(){t(window.innerWidth,window.innerHeight);var e=function(){return t(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[t]),r.a.createElement("div",{className:a.app},r.a.createElement(H,null),r.a.createElement(ne,null),r.a.createElement(q,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=a(125),ce=a(131),le=a(133),se=a(74),me={palette:{primary:{main:"#2A2C24",contrastText:"#FCF7F8"},secondary:{main:"#CCCCCC"},info:{main:"#87F6FF"},error:{main:"#9B1D20"},warning:{main:"#DDD78D"},success:{main:"#44FFD2"}},typography:{fontFamily:["Noto Sans","sans serif"].join(","),body2:{fontWeight:600}}},ue=Object(le.a)(Object(se.a)(me)),de=a(40),he=Object.assign(me.typography,{fontSize:12}),ge=Object(de.a)({},me,{typography:he,spacing:5.5}),pe=Object(le.a)(Object(se.a)(ge)),fe=Object.assign(ge.typography,{fontSize:10}),Ee=Object(de.a)({},ge,{typography:fe}),be=Object(le.a)(Object(se.a)(Ee)),we=function(e){var t=e.children,a=M(),n=a.isMobileScreen,i=a.isSmallScreen,o=ue;return n&&(o=pe),i&&(o=be),r.a.createElement(oe.a,{theme:o},r.a.createElement(ce.a,null),t)},ve=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;var ye=Object(c.c)(s,ve||{windowSize:{width:1e3,height:1e3}});window.snapSaveState=function(){return{__PRELOADED_STATE__:ye.getState()}};var ke=function(){return r.a.createElement(o.a,{store:ye},r.a.createElement(we,null,r.a.createElement(ie,null)))},xe=document.getElementById("root");xe.hasChildNodes()?Object(i.hydrate)(r.a.createElement(ke,null),xe):Object(i.render)(r.a.createElement(ke,null),xe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,t,a){e.exports=a.p+"static/media/landing-landscape-02.292a047b.png"},72:function(e,t,a){e.exports=a.p+"static/media/landing-portrait-03.8df38de2.png"},73:function(e,t,a){e.exports=a.p+"static/media/drone_crash.3f64eac5.gif"},80:function(e,t,a){e.exports=a(113)},90:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.fd58b6fc.chunk.js.map