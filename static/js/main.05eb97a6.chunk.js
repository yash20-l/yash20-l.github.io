(this.webpackJsonpweathermetro=this.webpackJsonpweathermetro||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(6),i=n.n(a),r=(n(11),n(3)),o=n.n(r),l=n(4),p=n(2),u=n(0);function d(e){var t=Object(s.useState)(null),n=Object(p.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(null),r=Object(p.a)(i,2),d=r[0],j=r[1],h=Object(s.useState)(!0),b=Object(p.a)(h,2),x=b[0],f=b[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.geoapify.com/v1/geocode/autocomplete?text=".concat(c,"&limit=3&apiKey=8941dc138f9e4df29fa529403c7dce89"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:s=e.sent,j(s.features),f(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){return console.error("ERROR : "+{reason:e}),Object(u.jsx)("div",{children:Object(u.jsxs)("h1",{children:["error: ",e]})})}))}),[c]),Object(u.jsxs)("div",{className:"main-wrapper",children:[Object(u.jsx)("div",{className:"input",style:{background:"#0066ff",display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"20px"},children:Object(u.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){a(e.target.value)},style:{background:"white",color:"black",margin:"0px",fontFamily:"poppins, sans-serif",width:"90%",border:"none",outline:"none",fontSize:"20px",padding:"10px",borderRadius:"10px"}})}),x||null===c?null:d?Object(u.jsx)("div",{className:"searches",style:{background:"#0066ff",display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"20px",zIndex:1e3},children:Object(u.jsx)("div",{className:"wrapper",style:{background:"white",width:"90%",borderRadius:"20px"},children:d.map((function(t){return Object(u.jsxs)("div",{className:"textbox",style:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",cursor:"pointer",paddingTop:"10px",paddingLeft:"5px"},onClick:function(){e.func2(t.properties.lat,t.properties.lon)},children:[Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACtElEQVRogeWazYuNURzHPzNoyCWJxmSKRAnlWelaWthosLOh/ANWLCw1kyZbbrqGBVsbJVlIibxLpCzIQiQ1eRu5V/cyXhbnPN1x5758z3PPOU/41K+m7u/5nu93nuc559znufCP0OdZbxEwAmwDEmA1sMR+NgW8BJ4A14DLwBfP4/fMEFAGqsAvsarAGWBtDn5nMQCMARX0AM31DThmtXJhGXCjg0HXugOsiJoA2AS87tF4q3pltaMwGCjEzDCDoUPMx1wCoUKkdZvA98xYhBBpjYcKMURvs5Nr1YE1IYKUI4ZIa8J3iAJmFY4dpGLH7kq/GGSnKmipAyeAoj2uYP8u2c9UFgI7HPq7chr9v/gG2NxBK7E9qt4pn0EeiIPWuoRISWyvonnPYw7eiYMed9AsiZqTXhJY6uKgWxw0i6JmzUsCi3oZuEwIBVHzqyKmzlpTDgZVvI6tin0S+zaIfS69H5UmNcgLsW+f2AewV+x77qDZlXH0GzMR9BL0CWTUYw72iIOmC2KnMK4L4i6fQZYDPxwGr2PWiZlblK00tiiqzndgsc8gAI8dDPiqm6o59WYHuOTQ64uLIUTXE/ds/ARWhQgC8ChikOsuxlwuLTBPBmNRDilewGwZQp+Nt8A8F2OuZ6QCnHU8JgsnMVNvUIbRd8NZ6jONJ/gyrmcEzKp8LsNxKiXC7LZbspIwz7g+AEtjhUgZ9WC8uQ5ETWBZgN+H2c9wnKl8sl8wqNZIZO9/0A88bGHKta7GNt6KBPP6LGuIKrAuuus2qN8gW9XBHPy2ZQB4inuI+8CcHPx2pAhMo4eoARtzcSpwFD3IoZw8SswFbtE9xBWybY+iMgy8p32IScxrvL+C3Zivqs0hpoHtOfrKxBFmBzmcq6OM9AHnaYS4gP9fI0WjgHnjdBe3Vw7/L78ByP0EVSkVHdcAAAAASUVORK5CYII=",alt:"marker",style:{height:"30px",paddingRight:"10px"}}),Object(u.jsxs)("p",{children:[t.properties.county,", ",t.properties.state,", ",t.properties.country]})]})}))})}):null]})}function j(e){return Object(u.jsx)("div",{children:e.loading?Object(u.jsx)("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"90vh"},children:Object(u.jsx)("div",{className:"progress",style:{width:"100%"},children:Object(u.jsx)("div",{class:"progress-bar progress-bar-striped bg-success",role:"progressbar",style:{width:e.progress},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})})}):Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{func2:e.func1}),Object(u.jsxs)("div",{className:"main-container",style:{height:"100vh",background:"linear-gradient(#0066ff,#003d99, #002966)"},children:[Object(u.jsx)("div",{className:"city",children:Object(u.jsxs)("h1",{className:"text-center",style:{color:"white",fontFamily:"poppins, sans-serif",padding:"25px"},children:[e.country.name,", ",e.country.sys.country]})}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"weather-box",style:{display:"flex",alignItems:"center",justifyContent:"space-evenly"},children:[Object(u.jsxs)("div",{className:"conditions",children:[Object(u.jsxs)("p",{style:{color:"white",fontFamily:"poppins, sans-serif",textAlign:"left"},children:["\u2191 ",Math.round(e.temp.temp_max),Object(u.jsx)("sup",{children:"\xb0C"}),"  \u2193 ",Math.round(e.temp.temp_min),Object(u.jsx)("sup",{children:"\xb0C"})]}),Object(u.jsxs)("h1",{style:{fontSize:"70px",color:"white",fontFamily:"poppins, sans-serif"},children:[Math.round(e.temp.temp),Object(u.jsx)("sup",{children:"\xb0C"})]}),Object(u.jsx)("h1",{style:{fontSize:"25px",color:"white",fontFamily:"poppins, sans-serif",textAlign:"left"},children:e.weather.map((function(e){return Object(u.jsx)("h1",{id:"main-weather",children:e.main})}))})]}),Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)("img",{src:e.weather.map((function(e){return"http://openweathermap.org/img/wn/".concat(e.icon,"@2x.png")})),alt:"icon",style:{height:"25vh",paddingLeft:"30px"},id:"icon-image"})})]})})]})]})})}var h=function(){var e=Object(s.useState)(null),t=Object(p.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!0),i=Object(p.a)(a,2),r=i[0],d=i[1],h=Object(s.useState)(null),b=Object(p.a)(h,2),x=b[0],f=b[1],m=Object(s.useState)(null),g=Object(p.a)(m,2),O=g[0],A=g[1],y=Object(s.useState)("52.517036"),w=Object(p.a)(y,2),v=w[0],C=w[1],I=Object(s.useState)("13.3888599"),N=Object(p.a)(I,2),S=N[0],P=N[1],B=Object(s.useState)(25),K=Object(p.a)(B,2),R=K[0],z=K[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),t="https://api.openweathermap.org/data/2.5/weather?lat=".concat(v,"&lon=").concat(S,"&appid=22e389a193bc53b0833c299dd5786757&units=metric"),z(25),e.next=5,fetch(t);case 5:return n=e.sent,z(50),e.next=9,n.json();case 9:s=e.sent,z(75),c(s.weather),f(s.main),A(s),z(100),d(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[v,S]),Object(u.jsx)(j,{loading:r,weather:n,temp:x,country:O,func1:function(e,t){C(e),P(t)},progress:R})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.05eb97a6.chunk.js.map