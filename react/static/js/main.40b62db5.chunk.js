(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,n){e.exports={tab_bar:"tab_tab_bar__1F9iB",active:"tab_active__1ZCVc"}},45:function(e,t,n){e.exports=n(76)},73:function(e,t,n){},74:function(e,t){!function(e){e.utils={}}(window)},75:function(e,t,n){"use strict";n.r(t);for(var a=n(24),r=n.n(a),c=r.a.Random,o=[],u=0;u<10;u++){var i={Boolean:c.boolean,Natural:c.natural(1,10),Integer:c.integer(1,100),Float:c.float(0,100,0,5),Character:c.character(),String:c.string(2,10),Range:c.range(0,10,2),Date:c.date(),Image:c.image(c.size,"#02adea","Hello"),Color:c.color(),Paragraph:c.paragraph(2,5),Name:c.name(),Url:c.url(),Address:c.province()};o.push(i)}r.a.mock("/data/index","get",o),r.a.mock("/data/index2","post",o)},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),u=n(12),i=n(14),l=n(15),s=n(11),m=n(2),p=n(3),h=n(22),f=n(5),v=n(4),b=n(17),g=n.n(b),d=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={name:1},a}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:g.a.tab_bar},r.a.createElement(u.c,{to:"/home",activeClassName:g.a.active},"\u9996\u9875"),r.a.createElement(u.c,{to:"/redux",activeClassName:g.a.active},"redux"),r.a.createElement(u.c,{to:"/register",activeClassName:g.a.active},"\u767b\u8bb0"),r.a.createElement(u.c,{to:"/my",activeClassName:g.a.active},"\u6211\u7684"))}}]),n}(a.Component),j=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("p",null,"time\u7ec4\u4ef6prop\u4f20\u503c\uff1a",this.props.time),r.a.createElement("button",{onClick:function(){return e.change()}},"time\u7ec4\u4ef6\u5185\u7684\u81ea\u5b9a\u4e49\u4e8b\u4ef6"))}},{key:"change",value:function(){this.props.changeTime("2020-12-31")}}]),n}(a.Component);j.defaultProps={time:"\u9ed8\u8ba4props\uff1a2020-01-01"};var E=j,O=function(e){return r.a.createElement("div",null,"\u65e0\u72b6\u6001\u7ec4\u4ef6\uff1a",e.name)},y=n(19),k=n.n(y);k.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),k.a.interceptors.response.use((function(e){return console.log(e),e}),(function(e){return Promise.reject(e)}));var C=function(e,t,n){return t="http://127.0.0.1:4523/mock/349129"+t,"get"===e.toLowerCase()?k.a.get(t,{params:n||{}}):"post"===e.toLowerCase()?k.a.post(t,n||{}):void 0},x=function(e){var t=e.petId;return C("get","/pet/",{petId:t})},_=[{path:"/home",components:function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={time:(new Date).toISOString().slice(0,10),num:14,form:{name:"\u6d4b\u8bd5",year:"2020"}},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,"\u9996\u9875",r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.goQuery()}},"\u8df3\u8f6c\u8be6\u60c5 query\u4f20\u53c2"),r.a.createElement("button",{onClick:function(){return e.goParams()}},"\u8df3\u8f6c\u8be6\u60c5 params\u4f20\u53c2"),r.a.createElement("p",null,r.a.createElement(u.b,{to:"/homeDetail/1/zhangsan"},'\u8def\u7531\u94fe\u63a5 "Link" \u8df3\u8f6c')),r.a.createElement("p",{id:"name"},"\u59d3\u540d\uff1a",this.state.form.name," ",r.a.createElement("button",{onClick:function(){e.changeName()}},"\u4fee\u6539\u540d\u5b57")),r.a.createElement(E,{changeTime:function(t){return e.changeTime(t)},time:this.state.time}),r.a.createElement("p",null,"\u6570\u91cf: ",r.a.createElement("input",{value:this.state.num,onChange:function(t){return e.numChange(t)},type:"text"})),r.a.createElement("p",null,"\u8ba1\u7b97\u51fa\u603b\u4ef7\uff1a",r.a.createElement("input",{value:this.price,onChange:function(t){return e.allPriceChange(t)},type:"text"})),r.a.createElement(O,{name:"11"})),r.a.createElement(d,null))}},{key:"componentDidMount",value:function(){!function(e){var t=e.name,n=e.status;C("post","/pet",{name:t,status:n})}({name:"ok",status:"1"})}},{key:"handleChange",value:function(){}},{key:"goQuery",value:function(){}},{key:"goParams",value:function(){this.props.history.push("/homeDetail/1/zhangsan")}},{key:"changeTime",value:function(e){console.log(e),this.setState({time:e}),console.log("\u89e6\u53d1\u4e86\u81ea\u5b9a\u4e49\u4e8b\u4ef6")}},{key:"changeName",value:function(){this.setState(Object(s.a)(Object(s.a)({},this.state),{},{num:15,form:Object(s.a)(Object(s.a)({},this.state.form),{},{name:"\u674e\u56db"})}),(function(){return console.log(document.getElementById("name").innerHTML)})),console.log(document.getElementById("name").innerHTML)}},{key:"numChange",value:function(e){console.log(e.target.value),this.setState({num:e.target.value})}},{key:"allPriceChange",value:function(e){console.log(e.target.value),this.setState({num:e.target.value/10})}},{key:"price",get:function(){return 10*this.state.num}}]),n}(a.Component),exact:!0},{path:"/homeDetail/:id/:name",components:function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,"homeDetail")}},{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.name,n=e.id;console.log(n,t)}}]),n}(a.Component),exact:!0}],S=n(28),I=n.n(S),w=n(41),L=n(23),N=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={},a.props.edit("\u5f20\u4e092"),a}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,"redux",r.a.createElement("p",{onClick:function(){return e.props.changeUser({petId:1})}},"\u5f02\u6b65action"),r.a.createElement("p",null,"\u65e0\u9700\u8ba2\u9605\u7684state\uff1a",JSON.stringify(this.props.user.username)),r.a.createElement(d,null))}}]),n}(a.Component),D=[{path:"/redux",components:Object(L.b)((function(e){return{user:e.user,userList:e.userList}}),{edit:function(e){return{type:"set_user",username:e}},changeUser:function(e){return function(){var t=Object(w.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:n({type:"change_user",username:"\u5f02\u6b65action\uff1ares"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(N),exact:!0}],T=[{path:"/my",components:function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,"\u6211\u7684",r.a.createElement(d,null))}}]),n}(a.Component),exact:!0}],P=[{path:"/register",components:function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,"\u767b\u8bb0",r.a.createElement(d,null))}}]),n}(a.Component),exact:!0}],R=[{path:"/login",components:function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("p",{onClick:function(){return e.login()}},"\u767b\u5f55\u9875"))}},{key:"login",value:function(){this.props.history.push("/home")}}]),n}(a.Component),exact:!0}],M=[].concat(Object(l.a)(R),Object(l.a)(_),Object(l.a)(D),Object(l.a)(T),Object(l.a)(P),Object(l.a)(R)),B=n(13),U=n(43),z=n(44),H={username:"",msg:""};var J=[];var V=Object(B.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action"),console.log(t),t.type){case"set_user":case"change_user":return Object(s.a)(Object(s.a)({},e),{},{username:t.username});default:return e}},userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_USER_LIST":case"RECEIVE_USER_LISTS":return t.data;default:return e}}}),q=Object(B.createStore)(V,Object(z.composeWithDevTools)(Object(B.applyMiddleware)(U.a)));n(73),n(74);n(75),o.a.render(r.a.createElement(L.a,{store:q},r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(i.d,null,M.map((function(e,t){return e.exact?r.a.createElement(i.b,{key:t,exact:!0,path:e.path,component:e.components}):r.a.createElement(i.b,{key:t,path:e.path,component:e.components})})),r.a.createElement(i.a,{to:"/login"}))))),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.40b62db5.chunk.js.map