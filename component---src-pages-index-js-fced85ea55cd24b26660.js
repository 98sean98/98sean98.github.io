(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),c=a(155),s=a(147),l=(a(32),a(302)),u=a(153),d=a(304),m=a(306),p=a(307),h=a(374),g={icon:{width:"100%"}},f="3x",v=h.a.div({hoverable:!0,pressable:!0,init:{scale:1},hover:{scale:1.2},press:{scale:1.1}}),y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).generateIconBox=function(e,t,a){return r.a.createElement(c.e,{item:!0,xs:4},r.a.createElement(v,null,r.a.createElement("a",{href:e,style:{textDecoration:"none",color:a},target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{style:g.icon,icon:t,size:f}))))},t}return o()(t,e),t.prototype.render=function(){var e=this.props.data;return r.a.createElement(c.a,null,r.a.createElement(c.c,{component:"img",image:Object(u.withPrefix)("profile.jpg")}),r.a.createElement(c.b,null,r.a.createElement(c.e,{container:!0,spacing:0},this.generateIconBox(e.site.siteMetadata.github,p.a,"#333"),this.generateIconBox(e.site.siteMetadata.linkedIn,p.b,"#0077B5"),this.generateIconBox(e.site.siteMetadata.email,m.a,"#333"))))},t}(n.Component),b=function(e){return r.a.createElement(u.StaticQuery,{query:"477603592",render:function(t){return r.a.createElement(y,Object.assign({data:t},e))},data:l})},E=a(368),w=a(4),R=a.n(w),x=a(150),k=function(e){var t=e.classes,a=e.data;return r.a.createElement(c.a,{className:t.name_card},r.a.createElement(c.b,null,r.a.createElement("h1",null,a.site.siteMetadata.myName),r.a.createElement("p",null,a.site.siteMetadata.description)))},C=Object(x.a)({name_card:{padding:"10px"}})(function(e){return r.a.createElement(u.StaticQuery,{query:"2728310829",render:function(t){return r.a.createElement(k,Object.assign({data:t},e))},data:E})});k.propTypes={classes:R.a.object.isRequired};var N=a(369),T=a(376),S=a(375),j=function(e){var t=e.activityName,a=e.activityTerm,n=e.activityDescription,i=e.activityCoverURL,o=e.activityAction,s=e.classes;return r.a.createElement(c.a,{className:s.activity_card},r.a.createElement("div",{className:s.card},r.a.createElement(c.b,{className:s.content},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row "+s.header},r.a.createElement("img",{src:Object(u.withPrefix)(i),className:s.cover,alt:"Cover"}),r.a.createElement("h1",{style:{margin:0}},t))),r.a.createElement("h4",null,a),r.a.createElement("p",null,n),"none"!==o?r.a.createElement(T.a,null,r.a.createElement(S.a,{href:o},"See More")):null)))};j.propTypes={activityName:R.a.string.isRequired,activityTerm:R.a.string.isRequired,activityDescription:R.a.string.isRequired,activityCoverURL:R.a.string.isRequired,activityAction:R.a.string.isRequired,classes:R.a.object.isRequired};var q=Object(x.a)({activity_card:{width:"100%",display:"flex",marginBottom:"16px"},card:{display:"flex",width:"100%",flexDirection:"row"},header:{alignItems:"center",marginBottom:"10px"},cover:{width:"50px",margin:"16px",marginLeft:"0"},content:{flexBasis:"100%",flex:"5 0px",padding:"30px"},cardActionArea:{textDecoration:"none"}})(j),B=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).generateActivityCard=function(e){return r.a.createElement(q,{key:e.head,activityName:e.head,activityTerm:e.subhead,activityDescription:e.description,activityCoverURL:e.image,activityAction:e.action})},t.generateSubSection=function(e){var a=t.props.classes;return r.a.createElement("div",{className:"container-fluid",key:e.tag},r.a.createElement("div",{className:"row "+a.section},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",{className:a.subheading},e.tag))),r.a.createElement("div",{className:"row"},e.content.map(t.generateActivityCard)))},t}return o()(t,e),t.prototype.render=function(){var e=this.props.data;return r.a.createElement("div",null,e.site.siteMetadata.contents.subsections.map(this.generateSubSection))},t}(n.Component);B.propTypes={classes:R.a.object.isRequired};var H=Object(x.a)({section:{marginTop:"30px"},subheading:{color:"grey",fontSize:"1em"}})(function(e){return r.a.createElement(u.StaticQuery,{query:"4189858638",render:function(t){return r.a.createElement(B,Object.assign({data:t},e))},data:N})}),I=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.d,null),r.a.createElement("div",{className:"container "+e.root},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-3 "+e.infoBox},r.a.createElement(b,null)),r.a.createElement("div",{className:"col-12 col-lg-9"},r.a.createElement(C,null),r.a.createElement(H,null)))))},t}(n.Component),A=Object(s.withStyles)({root:{padding:50},infoBox:{marginBottom:"16px"}})(I);t.default=function(){return r.a.createElement(A,null)}},153:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(149),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(174),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(49);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},174:function(e,t,a){var n;e.exports=(n=a(303))&&n.default||n},302:function(e){e.exports={data:{site:{siteMetadata:{email:"mailto:seanchok@connect.hku.hk",linkedIn:"https://www.linkedin.com/in/sean-chok-9035b2144/",github:"https://github.com/98sean98"}}}}},303:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(69),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},368:function(e){e.exports={data:{site:{siteMetadata:{myName:"Sean Chok",description:"Pursuing an undergraduate Bachelor Degree of Engineering at the University of Hong Kong, I look forward to working on making space travel as common as air travel."}}}}},369:function(e){e.exports={data:{site:{siteMetadata:{contents:{subsections:[{tag:"EDUCATION",content:[{head:"The University of Hong Kong",description:"Bachelor of Engineering",subhead:"September 2018 - June 2022",image:"HKULogo.png",action:"none"}]},{tag:"WORKING EXPERIENCE",content:[{head:"BrainBuilder",description:"I worked part-time for this supplemental education provider, BrainBuilder under the franchising ownership of Dr Fong. My role covered many aspects of the company, that include tailoring our Math program to suit the best interests of individual students, providing feedback to parents, etc.",subhead:"Teacher / Curriculum Writer (Nov 2016 - Aug 2018)",image:"BrainBuilder-logo.png",action:"http://brainbuildermaths.com/"}]},{tag:"PROJECTS AND OTHER EXPERIENCE",content:[{head:"HeraKles",description:"The University of Hong Kong team for DJI Robomaster Robotics Competition 2018/19",subhead:"Mechanical Group Member - Drone Robot",image:"HeraKles.jpg",action:"https://hkurm.org/"}]},{tag:"LEADERSHIP ROLES",content:[{head:"RC Tech",description:"RC Tech is a student-led community in R.C. Lee Hall (The University of Hong Kong) that empowers innovation, and implementation of technology through multiple projects. The club holds workshops on topics ranging from web development, electronics and IoT hardware, to hydroponics. Club members also publish articles related to similar topics.",subhead:"Co-founder (October 2018 - Present)",image:"RcTech-logo.png",action:"https://www.rctech.club/"}]},{tag:"ACHIEVEMENTS AND AWARDS",content:[{head:"Tech Crunch Hackathon 2018, Hong Kong",description:"Developed BlockBank, a blockchain powered e-wallet for easy and secure bank transactions.",subhead:"2nd Runner Up",image:"TechCrunch-Logo.png",action:"none"},{head:"Global Legal Hackathon 2019, Hong Kong",description:"Developed CLAIMate, an app for petty claims featuring the court of public opinion.",subhead:"1st Runner Up",image:"GLH2019-logo.png",action:"https://globallegalhackathon.com/"},{head:"Student/Staff Project Fund",description:"Student/Staff Project fund by R.C. Lee Hall at The University of Hong Kong for RC Tech",subhead:"Project fund of HK$5000",image:"RcTech-logo.png",action:"https://www.rctech.club/"}]}]}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-fced85ea55cd24b26660.js.map