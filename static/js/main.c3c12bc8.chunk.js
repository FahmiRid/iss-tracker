(this["webpackJsonpiss-tracker"]=this["webpackJsonpiss-tracker"]||[]).push([[0],{31:function(e,t,a){},34:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),i=a.n(s),r=(a(31),a(32),a(12)),l=a.n(r),o=a(21),j=a(10),u=(a(34),a(25)),b=a.p+"static/media/iss.6d39ab68.png",d=a(2);function p(e){var t=e.center,a=e.zoom;return Object(d.jsx)("div",{className:"map-container",id:"Map",children:Object(d.jsx)(u.a,{boostrapURLKeys:{key:"AIzaSyAxSRCmgNvqpk8hi-b-YbKsb7Rn58SiopI"},defaultCenter:t,defaultZoom:a,children:Object(d.jsx)("img",{src:b,alt:"ISS Icon",className:"iss-icon",lat:t.lat,lng:t.lng})})})}p.defaultProps={center:{lat:3.139,lng:101.6869},zoom:11};var m=p,f=a(23),O=a.n(f),h=a(8),v=a(9),x=a(26),k=a(24),N=[{title:"Home",url:"#Map",cName:"nav-links"},{title:"ISS Crew",url:"#mainContent",cName:"nav-links"},{title:"Update Information",url:"#",cName:"nav-links"}],g=(a(56),function(e){Object(x.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(v.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("nav",{className:"NavbarItems",children:[Object(d.jsxs)("h1",{className:"navbar-logo",children:["ISS Tracker \xa0 ",Object(d.jsx)("i",{className:"fas fa-satellite"})]}),Object(d.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(d.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(d.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:N.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))})]})}}]),a}(n.Component)),S=g;var y=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(101.6869),i=Object(j.a)(s,2),r=i[0],u=i[1],b=Object(n.useState)(3.139),p=Object(j.a)(b,2),f=p[0],h=p[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,O.a.get("http://api.open-notify.org/iss-now.json");case 3:return t=e.sent,e.next=6,t.data.iss_position;case 6:a=e.sent,n=a.longitude,s=a.latitude,u(parseFloat(n)),h(parseFloat(s)),c(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(S,{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",value:f}),Object(d.jsx)("input",{type:"text",value:r})]}),a?Object(d.jsx)("h1",{children:"Loading"}):Object(d.jsx)(m,{center:{lat:f,lng:r}})]})};a(57);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.c3c12bc8.chunk.js.map