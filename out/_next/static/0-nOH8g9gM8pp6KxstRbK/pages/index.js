(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/EDR":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("QeBL")}])},QeBL:function(e,t,r){"use strict";r.r(t);var n=r("rePB"),o=r("ODXe"),u=r("q1tI"),c=r.n(u),s=r("nOHt"),i=r("x242"),a=r("mfwC"),p=r("llVf"),l=c.a.createElement,f=function(e){var t=Object(p.useStyletron)();Object(o.a)(t,1)[0];return l(i.ThemeProvider,{theme:a.c},l(i.StyleReset,null),l("div",{id:"login"},e.children))},m=r("LpLi"),b=c.a.createElement;function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(){var e=Object(p.useStyletron)(),t=(Object(o.a)(e,1)[0],Object(s.useRouter)()),r=Object(u.useState)({username:"",password:""}),c=r[0],a=r[1],l=Object(u.useState)(!1),f=l[0],w=l[1],O=function(e,t){var r=e.target;a((function(e){return d(d({},e),{},Object(n.a)({},t,r.value))}))};return b(i.Div,{id:"auth"},b(i.Container,null,b(i.Row,{d:"flex",justify:"center"},b(i.Col,{size:{xs:10,sm:8,md:6},h:"100vh",align:"center"},b(i.Div,{d:"flex",justify:"center",m:{y:"2rem"}},b(m.a,{src:"/img/logo.png",alt:"greeNEETwork Logo",w:"250px"})),b("form",{onSubmit:function(e){if(e.preventDefault(),"comune.napoli"===c.username&&"preview"===c.password)return t.push("/home")}},b(i.Input,{w:"100%",placeholder:"Nome Utente",onChange:function(e){return O(e,"username")},p:{x:"2.5rem"},m:{y:"1rem"},suffix:b(i.Icon,{name:"UserSolid",color:"success800",size:"16px",cursor:"pointer",pos:"absolute",top:"50%",left:"0.75rem",transform:"translateY(-50%)"})}),b(i.Input,{w:"100%",placeholder:"Password",onChange:function(e){return O(e,"password")},m:{y:"1rem"},type:f?"text":"password",suffix:b(i.Button,{pos:"absolute",onClickCapture:function(e){e.preventDefault(),w((function(e){return!e}))},bg:"transparent",w:"3rem",top:"0",right:"0",rounded:{r:"md"}},b(i.Icon,{name:f?"EyeSolid":"Eye",color:f?"success300":"success800",size:"16px"}))}),b(i.Button,{w:"100%",type:"submit"},"Accedi"))))))};O.getLayout=function(e){return l(f,null,e)};t.default=O}},[["/EDR",0,2,1,3]]]);