(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"0866":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("header",{staticClass:"header v-center"},[e.$app.logoPath?e._m(0):e._e(),s("h1",{staticClass:"header-title v-to-zero"},[e._v(e._s(e.title))])]),s("main",[s("AForm",{staticClass:"login-form",attrs:{form:e.loginForm},on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[s("AFormItem",[s("AInput",{directives:[{name:"decorator",rawName:"v-decorator",value:e.getRules("username"),expression:"getRules('username')"}],attrs:{placeholder:"用户名:",size:"large"},on:{pressEnter:function(t){return t.preventDefault(),e.setPasswordFocus(!0)},focus:function(t){return e.setPasswordFocus(!1)}}},[s("AIcon",{staticClass:"login-form-icon",attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),s("AFormItem",[s("AInput",{directives:[{name:"decorator",rawName:"v-decorator",value:e.getRules("password"),expression:"getRules('password')"},{name:"focus",rawName:"v-focus",value:e.passwordFocus,expression:"passwordFocus"}],attrs:{type:"password",size:"large",placeholder:"密码:"}},[s("AIcon",{staticClass:"login-form-icon",attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),s("AFormItem",[s("ACheckbox",{directives:[{name:"decorator",rawName:"v-decorator",value:e.getRules("remember"),expression:"getRules('remember')"}]},[e._v("自动登录")]),s("a",{staticClass:"login-form-forgot",attrs:{href:""}},[e._v("忘记密码")]),s("AButton",{attrs:{loading:e.loading,size:"large",type:"primary","html-type":"submit",block:""}},[e._v(" 登录 ")])],1)],1)],1)])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("img",{staticClass:"header-logo",attrs:{src:e.publicPath+e.$app.logoPath,alt:"logo",height:"46"}})}],o=(s("25f0"),s("5530")),i=s("2f62"),l=s("ba41"),n=s("fd4e"),c={name:"Login",directives:{focus(e,{value:t}){if(t){const t=Array.prototype.find,s=t.call(e.childNodes,e=>"input"===e.localName);s&&s.focus()}}},data(){return{title:this.$app.title.main,publicPath:"",loading:!1,passwordFocus:!1}},beforeCreate(){this.loginForm=this.$form.createForm(this)},created(){this.login=Object(n["b"])(this.login,360),this.setRules()},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])("user",["handleLogin"])),{},{login(){this.loginForm.validateFieldsAndScroll((e,t)=>{e||(this.loading=!0,this.clearDB(),this.handleLogin(t).then(()=>{this.$router.push({name:this.$app.mainName}),this.loading=!1}).catch(e=>{this.loading=!1,this.$message.error(e.msg)}))})},setRules(){this.rulesForm={username:{initialValue:"admin",validateFirst:!0,normalize:e=>e?e.toString().trim():null,rules:[{required:!0,whitespace:!0,message:"请输入你的用户名!"},{min:4,message:"不少于4个字符"},{max:30,message:"不超过30个字符"},{validator:this.validateToPassword}]},password:{initialValue:"admin-template",validateFirst:!0,normalize:e=>e?e.toString().trim():null,rules:[{required:!0,whitespace:!0,message:"请输入你的密码!"},{min:5,message:"不少于5个字符"},{max:45,message:"不超过45个字符"},{validator:this.compareToUsername}]},remember:{valuePropName:"checked",initialValue:!0}}},getRules(e){return[e,this.rulesForm[e]]},setPasswordFocus(e){this.passwordFocus=e},compareToUsername(e,t,s){if(t===this.loginForm.getFieldValue("username"))return s(new Error("密码不能和用户名重复"));s()},validateToPassword(e,t,s){t&&this.loginForm.getFieldValue("password")&&this.loginForm.validateFields(["password"],{force:!0}),s()},clearDB(e){this.isClearDB||l["b"].get(l["a"].USER_INFO,{}).username===e||(l["b"].clear(),this.isClearDB=!0)}})},m=c,u=(s("a111"),s("2877")),d=Object(u["a"])(m,a,r,!1,null,"2b4b1854",null);t["default"]=d.exports},"31ea":function(e,t,s){},a111:function(e,t,s){"use strict";var a=s("31ea"),r=s.n(a);r.a}}]);