webpackJsonpbase([22],{188:function(e,t,r){"use strict";function a(e){r(392)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(250),n=r(394),l=r(208),s=a,i=l(o.a,n.a,!1,s,"data-v-38c79237",null);t.default=i.exports},208:function(e,t){e.exports=function(e,t,r,a,o,n){var l,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(l=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId=o);var m;if(n?(m=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},u._ssrRegister=m):a&&(m=a),m){var p=u.functional,d=p?u.render:u.beforeCreate;p?(u._injectStyles=m,u.render=function(e,t){return m.call(t),d(e,t)}):u.beforeCreate=d?[].concat(d,m):[m]}return{esModule:l,exports:s,options:u}}},250:function(e,t,r){"use strict";var a=r(18),o=r.n(a),n=r(46);t.a={name:"userDetail",data:function(){return{user:"",uid:"",title:"",str:"",roles:"",attributeArr:[],ruleForm:{loginName:"",fullName:"",empCode:"",status:"0",rolesId:"",rolesName:"",orgName:"",deptName:"",phone:"",email:"",attributeType:""},deptIds:"",orgUid:""}},created:function(){this.uid=localStorage.getItem("usDetail_uid"),this.getUser(),this.getAttribute()},methods:{getAttribute:function(){var e=this;Object(n.f)().then(function(t){t&&200==t.code?e.attributeArr=t.data:e.error(t.msg)}).catch(function(){})},to:function(){this.$store.commit("tagNav/removeTagNav",this.$route),this.$router.push("index")},getUser:function(){var e=this;Object(n.O)(this.uid).then(function(t){if(t&&200==t.code){e.ruleForm.loginName=t.data.user.loginName,e.ruleForm.fullName=t.data.user.fullName,e.ruleForm.status=0==t.data.user.status.toString()?"启用":1==t.data.user.status.toString()?"禁用":"离职",e.ruleForm.empCode=t.data.user.empCode,t.data.user.attributeType&&e.attributeArr.forEach(function(r){r.propertyCode==t.data.user.attributeType&&(e.ruleForm.attributeType=r.propertyName)}),e.orgUid=t.data.user.orgUid,e.ruleForm.orgName=t.data.user.organization.name,e.ruleForm.rolesId=t.data.user.roles,e.ruleForm.rolesId.map(function(t){e.str+=t.name+"，",e.ruleForm.rolesName=e.str.substring(0,e.str.length-1)}),e.ruleForm.phone=t.data.user.phone,e.ruleForm.email=t.data.user.email;var r=JSON.parse(o()(t.data.dataPurview)),a=[];r.forEach(function(e){a.push(e.name)}),e.ruleForm.deptName=a.join("，")}}).catch(function(){})}}}},392:function(e,t,r){var a=r(393);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(167)("48c35d84",a,!0,{})},393:function(e,t,r){t=e.exports=r(166)(!0),t.push([e.i,"\n.content-wrapper[data-v-38c79237] {\n  height: 100%;\n}\n.content-wrapper .el-input[data-v-38c79237] {\n    width: 40%;\n}\n.content-wrapper .el-textarea[data-v-38c79237] {\n    width: 40%;\n}\n.content-wrapper .but[data-v-38c79237] {\n    display: inline-block;\n    width: 40px;\n    height: 32px;\n    border-radius: 4px;\n    line-height: 32px;\n    text-align: center;\n    background-color: #3b74ff;\n    color: #fff;\n}\n.content-wrapper .but i[data-v-38c79237] {\n      font-size: 25px;\n}\n","",{version:3,sources:["G:/Workspaces/open/vue-module/base/src/views/sysMange/userManage/userDetail.vue"],names:[],mappings:";AACA;EACE,aAAa;CACd;AACD;IACI,WAAW;CACd;AACD;IACI,WAAW;CACd;AACD;IACI,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,0BAA0B;IAC1B,YAAY;CACf;AACD;MACM,gBAAgB;CACrB",file:"userDetail.vue",sourcesContent:["\n.content-wrapper[data-v-38c79237] {\n  height: 100%;\n}\n.content-wrapper .el-input[data-v-38c79237] {\n    width: 40%;\n}\n.content-wrapper .el-textarea[data-v-38c79237] {\n    width: 40%;\n}\n.content-wrapper .but[data-v-38c79237] {\n    display: inline-block;\n    width: 40px;\n    height: 32px;\n    border-radius: 4px;\n    line-height: 32px;\n    text-align: center;\n    background-color: #3b74ff;\n    color: #fff;\n}\n.content-wrapper .but i[data-v-38c79237] {\n      font-size: 25px;\n}\n"],sourceRoot:""}])},394:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content-wrapper"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户账号",prop:"loginName"}},[r("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.loginName,callback:function(t){e.$set(e.ruleForm,"loginName",t)},expression:"ruleForm.loginName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户名称",prop:"fullName"}},[r("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.fullName,callback:function(t){e.$set(e.ruleForm,"fullName",t)},expression:"ruleForm.fullName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户编码",prop:"empCode"}},[r("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.empCode,callback:function(t){e.$set(e.ruleForm,"empCode",t)},expression:"ruleForm.empCode"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户属性：",prop:"attributeType"}},[r("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.attributeType,callback:function(t){e.$set(e.ruleForm,"attributeType",t)},expression:"ruleForm.attributeType"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"所属角色",prop:"rolesId"}},[r("el-input",{attrs:{placeholder:"请点击右侧选择",type:"textarea",disabled:"",autosize:""},model:{value:e.ruleForm.rolesName,callback:function(t){e.$set(e.ruleForm,"rolesName",t)},expression:"ruleForm.rolesName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"所属组织",prop:"orgUid"}},[r("el-input",{attrs:{"label-width":"100px",placeholder:"请点击右侧选择",disabled:""},model:{value:e.ruleForm.orgName,callback:function(t){e.$set(e.ruleForm,"orgName",t)},expression:"ruleForm.orgName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"数据权限",prop:"deptName"}},[r("el-input",{attrs:{type:"textarea",disabled:"",autosize:""},model:{value:e.ruleForm.deptName,callback:function(t){e.$set(e.ruleForm,"deptName",t)},expression:"ruleForm.deptName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"手机号码",prop:"phone"}},[r("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.to}},[e._v("返回")])],1)],1)],1)},o=[],n={render:a,staticRenderFns:o};t.a=n}});