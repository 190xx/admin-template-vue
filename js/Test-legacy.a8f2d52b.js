(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Test"],{"4b71":function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ACard",[s("VTable",{attrs:{"selected-keys":e.selectedKeys,"row-key":"key",columns:e.columns,"data-source":e.data,"page-size":3,current:2,"is-xlsx":""},on:{"update:selectedKeys":function(a){e.selectedKeys=a},"update:selected-keys":function(a){e.selectedKeys=a}},scopedSlots:e._u([{key:"name",fn:function(a){var t=a.value;return[s("ATag",[e._v(e._s(t))])]}}])})],1)},n=[],d=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Joe Black",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Jim Green",age:32,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Jim Red",age:32,address:"London No. 2 Lake Park"}],o={name:"Test",data:function(){return{data:d,columns:[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"}],selectedKeys:[]}},created:function(){var e=this;setTimeout(function(){e.selectedKeys.push("1","3")},3e3)}},r=o,c=s("2877"),u=Object(c["a"])(r,t,n,!1,null,"5616ba7e",null);a["default"]=u.exports}}]);