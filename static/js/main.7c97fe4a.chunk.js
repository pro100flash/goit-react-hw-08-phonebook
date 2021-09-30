(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{10:function(A,t,e){"use strict";e.r(t),e.d(t,"fetchContactsRequest",(function(){return r})),e.d(t,"fetchContactsSuccess",(function(){return c})),e.d(t,"fetchContactsError",(function(){return a})),e.d(t,"addContactRequest",(function(){return u})),e.d(t,"addContactSuccess",(function(){return i})),e.d(t,"addContactError",(function(){return s})),e.d(t,"deleteContactRequest",(function(){return o})),e.d(t,"deleteContactSuccess",(function(){return d})),e.d(t,"deleteContactError",(function(){return b})),e.d(t,"editContactRequest",(function(){return j})),e.d(t,"editContactSuccess",(function(){return f})),e.d(t,"editContactError",(function(){return l})),e.d(t,"addContactEdit",(function(){return O})),e.d(t,"changeFilter",(function(){return x}));var n=e(3),r=Object(n.b)("contacts/fetchContactsRequest"),c=Object(n.b)("contacts/fetchContactsSuccess"),a=Object(n.b)("contacts/fetchContactsError"),u=Object(n.b)("contacts/addContactRequest"),i=Object(n.b)("contacts/addContactSuccess"),s=Object(n.b)("contacts/addContactError"),o=Object(n.b)("contacts/deleteContactRequest"),d=Object(n.b)("contacts/deleteContactSuccess"),b=Object(n.b)("contacts/deleteContactError"),j=Object(n.b)("contacts/editContactRequest"),f=Object(n.b)("contacts/editContactSuccess"),l=Object(n.b)("contacts/editContactError"),O=Object(n.b)("contacts/addContactEdit"),x=Object(n.b)("contacts/changeFilter")},115:function(A,t,e){},125:function(A,t,e){"use strict";e.r(t);var n,r,c=e(0),a=e.n(c),u=e(14),i=e.n(u),s=e(22),o=e(12),d=e(70),b=e(45),j=e(3),f=e(26),l=e(71),O=e.n(l),x=e(4),p=e(15),m=e(10),v=Object(j.d)([],(n={},Object(x.a)(n,m.fetchContactsSuccess,(function(A,t){return t.payload})),Object(x.a)(n,m.addContactSuccess,(function(A,t){var e=t.payload;return[].concat(Object(b.a)(A),[e])})),Object(x.a)(n,m.deleteContactSuccess,(function(A,t){var e=t.payload;return A.filter((function(A){return A.id!==e}))})),Object(x.a)(n,m.editContactSuccess,(function(A,t){var e=t.payload;return A.map((function(A){return A.id===e.id?e:A}))})),n)),g=Object(j.d)(!1,(r={},Object(x.a)(r,m.fetchContactsRequest,(function(){return!0})),Object(x.a)(r,m.fetchContactsSuccess,(function(){return!1})),Object(x.a)(r,m.fetchContactsError,(function(){return!1})),Object(x.a)(r,m.addContactRequest,(function(){return!0})),Object(x.a)(r,m.addContactSuccess,(function(){return!1})),Object(x.a)(r,m.addContactError,(function(){return!1})),Object(x.a)(r,m.deleteContactRequest,(function(){return!0})),Object(x.a)(r,m.deleteContactSuccess,(function(){return!1})),Object(x.a)(r,m.deleteContactError,(function(){return!1})),Object(x.a)(r,m.editContactRequest,(function(){return!0})),Object(x.a)(r,m.editContactSuccess,(function(){return!1})),Object(x.a)(r,m.editContactError,(function(){return!1})),r)),h=Object(j.d)("",Object(x.a)({},m.changeFilter,(function(A,t){return t.payload}))),q=Object(j.d)(null,Object(x.a)({},m.addContactEdit,(function(A,t){return t.payload}))),V=Object(p.b)({contacts:v,filter:h,isLoading:g,edit:q}),N=e(13),C=e(73),z=e.n(C),T=Object(b.a)(Object(j.f)({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]},logger:z.a})),H={key:"auth",storage:O.a,whitelist:["token"]},P=Object(j.a)({reducer:{auth:Object(f.g)(H,N.b),contacts:V},devTools:!1,middleware:T}),R=Object(f.h)(P),X=(e(114),e(115),e(23)),M=(e(116),e(8)),y=e(74),Z=e.n(y),k=e(2),E=function(A){var t=A.children;return Object(k.jsx)("div",{className:Z.a.Container,children:t})},B=e(40),I=e.n(B),L=function(){var A=Object(o.c)(N.c.getIsLoggedIn);return Object(k.jsxs)("nav",{children:[Object(k.jsx)(s.b,{exact:!0,to:"/",className:I.a.link,activeClassName:I.a.activeLink,children:"Home"}),A&&Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(s.b,{to:"/contacts",exact:!0,className:I.a.link,activeClassName:I.a.activeLink,children:"Contacts"})})]})},U=e(142),w=e(50),F=e.n(w);function Y(){var A=Object(o.b)(),t=Object(o.c)(N.c.getUsername);return Object(k.jsxs)("div",{className:F.a.container,children:[Object(k.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"",width:"50",className:F.a.avatar}),Object(k.jsxs)("span",{className:F.a.name,children:["Welcome, ",t]}),Object(k.jsx)(U.a,{variant:"contained",color:"secondary",onClick:function(){return A(N.a.logOut())},children:"Log out"})]})}var W=e(41),G=e.n(W);function J(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(s.b,{to:"/register",exact:!0,className:G.a.link,activeClassName:G.a.activeLink,children:"Sign up"}),Object(k.jsx)(s.b,{to:"/login",exact:!0,className:G.a.link,activeClassName:G.a.activeLink,children:"Log in"})]})}var Q=e(79),K=e.n(Q);function S(){var A=Object(o.c)(N.c.getIsLoggedIn);return Object(k.jsxs)("header",{className:K.a.header,children:[Object(k.jsx)(L,{}),A?Object(k.jsx)(Y,{}):Object(k.jsx)(J,{})]})}var D,_=e(80),$=e(54),AA=e(81),tA=e.n(AA),eA=Object($.css)(D||(D=Object(_.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"])));function nA(){return Object(k.jsx)("div",{className:"sweet-loading",children:Object(k.jsx)(tA.a,{css:eA,size:60,color:"#36d7b7"})})}var rA=e(33),cA=e(49),aA=["children","redirectTo"];function uA(A){var t=A.children,e=A.redirectTo,n=void 0===e?"/":e,r=Object(cA.a)(A,aA),c=Object(o.c)(N.c.getIsLoggedIn);return Object(k.jsx)(M.b,Object(rA.a)(Object(rA.a)({},r),{},{children:c?t:Object(k.jsx)(M.a,{to:n})}))}var iA=["children","restricted","redirectTo"];function sA(A){var t=A.children,e=A.restricted,n=void 0!==e&&e,r=A.redirectTo,c=void 0===r?"/":r,a=Object(cA.a)(A,iA),u=Object(o.c)(N.c.getIsLoggedIn)&&n;return Object(k.jsx)(M.b,Object(rA.a)(Object(rA.a)({},a),{},{children:u?Object(k.jsx)(M.a,{to:c}):t}))}var oA=Object(c.lazy)((function(){return e.e(5).then(e.bind(null,207))})),dA=Object(c.lazy)((function(){return Promise.all([e.e(0),e.e(1),e.e(3)]).then(e.bind(null,208))})),bA=Object(c.lazy)((function(){return Promise.all([e.e(0),e.e(1),e.e(2)]).then(e.bind(null,209))})),jA=Object(c.lazy)((function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,206))}));function fA(){var A=Object(o.b)(),t=Object(o.c)(N.c.getIsFetchingCurrent);return Object(c.useEffect)((function(){A(N.a.fetchCurrentUser())}),[A]),Object(k.jsxs)(E,{children:[t?Object(k.jsx)(nA,{}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(S,{}),Object(k.jsx)(M.d,{children:Object(k.jsxs)(c.Suspense,{fallback:Object(k.jsx)(nA,{}),children:[Object(k.jsx)(sA,{path:"/",exact:!0,children:Object(k.jsx)(oA,{})}),Object(k.jsx)(sA,{exact:!0,path:"/register",restricted:!0,children:Object(k.jsx)(dA,{})}),Object(k.jsx)(sA,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(k.jsx)(bA,{})}),Object(k.jsx)(uA,{path:"/contacts",redirectTo:"/login",children:Object(k.jsx)(jA,{})})]})})]}),Object(k.jsx)(X.a,{autoClose:3e3})]})}i.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(o.a,{store:P,children:Object(k.jsx)(d.a,{loading:null,persistor:R,children:Object(k.jsx)(s.a,{children:Object(k.jsx)(fA,{})})})})}),document.getElementById("root"))},13:function(A,t,e){"use strict";e.d(t,"a",(function(){return O})),e.d(t,"c",(function(){return x})),e.d(t,"b",(function(){return m}));var n,r=e(25),c=e.n(r),a=e(36),u=e(19),i=e.n(u),s=e(23),o=e(3),d=e(46),b=function(A){i.a.defaults.headers.common.Authorization="Bearer ".concat(A)},j=function(){i.a.defaults.headers.common.Authorization=""},f=Object(o.c)("auth/register",function(){var A=Object(a.a)(c.a.mark((function A(t,e){var n,r,a;return c.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n=e.rejectWithValue,A.prev=1,A.next=4,Object(d.g)(t);case 4:return r=A.sent,a=r.data,b(a.token),A.abrupt("return",a);case 10:return A.prev=10,A.t0=A.catch(1),400===A.t0.response.status?s.b.error("Creation error, please try again \ud83e\udd2f"):500===A.t0.response.status?s.b.error("Server error, please try later \ud83e\udd2f"):s.b.error("Whoops, something went wrong \ud83e\udd2f"),A.abrupt("return",n(A.t0));case 14:case"end":return A.stop()}}),A,null,[[1,10]])})));return function(t,e){return A.apply(this,arguments)}}()),l=Object(o.c)("auth/login",function(){var A=Object(a.a)(c.a.mark((function A(t,e){var n,r,a;return c.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n=e.rejectWithValue,A.prev=1,A.next=4,Object(d.e)(t);case 4:return r=A.sent,a=r.data,b(a.token),A.abrupt("return",a);case 10:return A.prev=10,A.t0=A.catch(1),s.b.error("Invalid email or password \ud83d\udc7a"),A.abrupt("return",n(A.t0));case 14:case"end":return A.stop()}}),A,null,[[1,10]])})));return function(t,e){return A.apply(this,arguments)}}()),O={register:f,logOut:Object(o.c)("auth/logout",function(){var A=Object(a.a)(c.a.mark((function A(t,e){var n;return c.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n=e.rejectWithValue,A.prev=1,A.next=4,Object(d.f)();case 4:j(),A.next=11;break;case 7:return A.prev=7,A.t0=A.catch(1),500===A.t0.response.status?s.b.error("Server error, please try later! \ud83e\udd2f"):s.b.error("Whoops, something went wrong \ud83e\udd2f"),A.abrupt("return",n(A.t0));case 11:case"end":return A.stop()}}),A,null,[[1,7]])})));return function(t,e){return A.apply(this,arguments)}}()),logIn:l,fetchCurrentUser:Object(o.c)("auth/refresh",function(){var A=Object(a.a)(c.a.mark((function A(t,e){var n,r,a,u;return c.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:if(n=e.getState(),null!==(r=n.auth.token)){A.next=4;break}return A.abrupt("return",e.rejectWithValue());case 4:return b(r),A.prev=5,A.next=8,i.a.get("/users/current");case 8:return a=A.sent,u=a.data,A.abrupt("return",u);case 13:return A.prev=13,A.t0=A.catch(5),s.b.info("Authorization timed out \ud83d\ude15"),A.abrupt("return",e.rejectWithValue(A.t0));case 17:case"end":return A.stop()}}),A,null,[[5,13]])})));return function(t,e){return A.apply(this,arguments)}}())},x={getIsLoggedIn:function(A){return A.auth.isLoggedIn},getUsername:function(A){return A.auth.user.name},getIsFetchingCurrent:function(A){return A.auth.isFetchingCurrentUser}},p=e(4),m=Object(o.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(n={},Object(p.a)(n,O.register.fulfilled,(function(A,t){var e=t.payload;A.user=e.user,A.token=e.token,A.isLoggedIn=!0})),Object(p.a)(n,O.logIn.fulfilled,(function(A,t){var e=t.payload;A.user=e.user,A.token=e.token,A.isLoggedIn=!0})),Object(p.a)(n,O.logOut.fulfilled,(function(A){A.user={name:null,email:null},A.token=null,A.isLoggedIn=!1})),Object(p.a)(n,O.fetchCurrentUser.pending,(function(A){A.isFetchingCurrentUser=!0})),Object(p.a)(n,O.fetchCurrentUser.fulfilled,(function(A,t){var e=t.payload;A.user=e,A.isLoggedIn=!0,A.isFetchingCurrentUser=!1})),Object(p.a)(n,O.fetchCurrentUser.rejected,(function(A){A.isFetchingCurrentUser=!1})),n)}).reducer},40:function(A,t,e){A.exports={link:"Navigation_link__1Le3G",activeLink:"Navigation_activeLink__1PyEM Navigation_link__1Le3G"}},41:function(A,t,e){A.exports={link:"AuthNav_link__1TNNc",activeLink:"AuthNav_activeLink__qjb4Y AuthNav_link__1TNNc"}},46:function(A,t,e){"use strict";e.d(t,"b",(function(){return c})),e.d(t,"a",(function(){return a})),e.d(t,"c",(function(){return u})),e.d(t,"d",(function(){return i})),e.d(t,"g",(function(){return s})),e.d(t,"e",(function(){return o})),e.d(t,"f",(function(){return d}));var n=e(19),r=e.n(n);r.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var c=function(){return r.a.get("/contacts")},a=function(A){return r.a.post("/contacts",A)},u=function(A){return r.a.delete("/contacts/".concat(A))},i=function(A){var t=A.id,e={name:A.name,number:A.number};return r.a.patch("/contacts/".concat(t),e)},s=function(A){var t=A.email,e=A.password,n=A.name;return r.a.post("/users/signup",{name:n,email:t,password:e})},o=function(A){var t=A.email,e=A.password;return r.a.post("/users/login",{email:t,password:e})},d=function(){return r.a.post("/users/logout")}},50:function(A,t,e){A.exports={container:"UserMenu_container__3Vx5J",avatar:"UserMenu_avatar__Jnupo",name:"UserMenu_name__vSutH"}},74:function(A,t,e){A.exports={Container:"Container_Container__28yDk"}},79:function(A,t,e){A.exports={header:"AppBar_header__31WLr"}}},[[125,7,8]]]);
//# sourceMappingURL=main.7c97fe4a.chunk.js.map