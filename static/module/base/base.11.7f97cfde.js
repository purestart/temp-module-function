webpackJsonpbase([11],{186:function(e,t,r){"use strict";function o(e){r(382),r(384)}Object.defineProperty(t,"__esModule",{value:!0});var n=r(248),a=r(386),i=r(208),l=o,s=i(n.a,a.a,!1,l,"data-v-aa48df72",null);t.default=s.exports},208:function(e,t){e.exports=function(e,t,r,o,n,a){var i,l=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,l=e.default);var u="function"==typeof l?l.options:l;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),n&&(u._scopeId=n);var c;if(a?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=o),c){var d=u.functional,p=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(e,t){return c.call(t),p(e,t)}):u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:i,exports:l,options:u}}},248:function(e,t,r){"use strict";var o=r(18),n=r.n(o),a=r(77),i=r(46);t.a={name:"newUser",mixins:[a.a.cacheMixin],data:function(){var e=function(e,t,r){var o=/^[A-Za-z0-9_\-]{1,20}$/;if(!t)return r(new Error("用户编码不能为空"));o.test(t)?r():r(new Error("请输入字母或数字，长度在20个字符以内"))},t=function(e,t,r){var o=/^[\u4E00-\u9FA5A-Za-z0-9`~!@#$%^&*()_+<>?:"{},.【】\\\/;\-'[\]\s\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]{1,20}$/;if(!t)return r(new Error("请输入用户名称"));o.test(t)?r():r(new Error("请输入汉字，字母或数字，长度在20个字符以内"))},r=function(e,t,r){var o=/^[A-Za-z0-9`~!@#$%^&*()_+<>?:"{},.【】\\\/;\-'[\]\s\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]{1,20}$/;if(!t)return r(new Error("用户账号不能为空"));o.test(t)?r():r(new Error("请输入字母或数字，长度在20个字符以内"))},o=function(e,t,r){var o=/^(0|86|17951)?(13[0-9]|15[012356789]|17[01678]|18[0-9]|14[57])[0-9]{8}$/;t?o.test(t)?r():r(new Error("手机号格式不正确，请输入正确的手机号")):r()},n=function(e,t,r){var o=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;t?o.test(t)?r():r(new Error("邮箱格式有误")):r()};return{cacheField:["ruleForm"],getrowkey:function(e){return e.id},roleToolTipFlag:!1,multipleSelection:[],dialogVisible:!1,total:null,currentPage:1,pageSize:20,treeFlag:!1,dialogVisible2:!1,formLabelWidth:"100px",attributeArr:[],roleArr:[],orgArr:[],deptArr:[],orgType:"",radioType:"1",title:"",defaultProps:{children:"children",label:"text"},str:"",roleIds:[],ruleForm:{loginName:"",fullName:"",empCode:"",attributeType:"",status:"0",rolesName:"",orgName:"",deptName:"",phone:"",email:""},orgUid:"",deptIds:"",deptNameArr:[],rules:{loginName:[{validator:r,required:!0,trigger:"blur"}],fullName:[{validator:t,required:!0,trigger:"blur"}],empCode:[{validator:e,required:!0,trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"blur"}],attributeType:[{required:!0,message:"请选择用户属性",trigger:"blur"}],rolesName:[{required:!0,message:"请选择角色",trigger:"blur"}],orgName:[{required:!0,message:"请选择组织",trigger:"blur"}],deptName:[{required:!0,message:"请选择数据权限",trigger:"blur"}],phone:[{validator:o,trigger:"blur"}],email:[{validator:n,trigger:"blur"}]}}},watch:{multipleSelection:function(e){this.roleToolTipFlag=!e}},created:function(){this.getRoleTreeList(),this.getOrgTreeList(),this.getDeptTreeList(),this.getAttribute()},methods:{getCinema:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children";if(!e)return[];var r=JSON.parse(n()(e)),o=[];if(Array.isArray(r))for(var a=0;a<r.length;a++)1==r[a].isCinema&&o.push(r[a]),o=o.concat(this.getCinema(r[a][t],t)),delete r[a][t];return o},clear:function(e){switch(e){case 1:this.ruleForm.rolesName=this.roleIds="",this.multipleSelection=[];break;case 2:this.ruleForm.orgName=this.orgUid="";break;case 3:this.ruleForm.deptName=this.deptIds="",this.deptNameArr=[]}},chooseOrg:function(e){var t=this;0==e?Object(i.R)({showCinema:Boolean(!1)}).then(function(e){e&&200==e.code?t.deptArr=e.data:t.error(e.msg)}).catch(function(){}):Object(i.x)().then(function(e){e&&200==e.code?t.deptArr=t.getCinema(e.data,"children"):t.error(e.msg)}).catch(function(){})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var r=t,o={user:{loginName:t.ruleForm.loginName,fullName:t.ruleForm.fullName,empCode:t.ruleForm.empCode,status:t.ruleForm.status,attributeType:t.ruleForm.attributeType,orgUid:t.orgUid,orgType:t.orgType,phone:t.ruleForm.phone,email:t.ruleForm.email},roleIds:t.roleIds,deptIds:t.deptIds,radioType:t.radioType};Object(i.d)(o).then(function(e){e&&200==e.code?(r.$message({message:"用户新建成功",type:"success"}),t.$store.commit("tagNav/removeTagNav",t.$route),t.$router.push("index")):r.$message({message:e.msg,type:"info"})}).catch(function(e){console.log(e)})})},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e,!0)}):this.$refs.multipleTable.clearSelection()},ok:function(){if(this.dialogVisible=!1,this.treeFlag){var e=[],t=[];this.multipleSelection.forEach(function(r){e.push(r.name),t.push(r.uid)}),this.ruleForm.rolesName=e.join("，"),this.roleIds=t}},ok2:function(){this.deptNameArr=this.$refs.tree2.getCheckedNodes();var e=this.$refs.tree2.getCheckedNodes(),t=[],r=[];1==this.radioType?e.forEach(function(e){t.push(e.id),r.push(e.text)}):0==this.radioType&&e.forEach(function(e){t.push(e.id),r.push(e.text)}),0==t.length?this.$message("请选择数据权限"):(this.deptIds=t,this.ruleForm.deptName=r.join("，"),this.dialogVisible2=!1)},cancel:function(){this.dialogVisible=!1,this.dialogVisible2=!1},resetForm:function(e){this.$refs[e].resetFields(),this.$store.commit("tagNav/removeTagNav",this.$route),this.$router.push("index")},handleNodeClick:function(e){1==e.isCinema?this.orgType=1:this.orgType=0,this.orgUid=e.id,this.ruleForm.orgName=e.text},handleSelectionChange:function(e){this.multipleSelection=e},getTree:function(e){1==e?(this.dialogVisible=!0,this.title="选择所属角色",this.treeFlag=!0,this.toggleSelection(this.multipleSelection)):2==e?(this.dialogVisible=!0,this.title="选择所属组织",this.treeFlag=!1):3==e&&(this.dialogVisible=!1,this.dialogVisible2=!0)},getAttribute:function(){var e=this;Object(i.f)().then(function(t){t&&200==t.code?e.attributeArr=t.data:e.error(t.msg)}).catch(function(){})},getOrgTreeList:function(){var e=this;Object(i.R)().then(function(t){t&&200==t.code?e.orgArr=t.data:e.error(t.msg)}).catch(function(){e.error("网络错误")})},getRoleTreeList:function(){var e=this,t={pageNum:this.currentPage,pageSize:this.pageSize};Object(i._7)(t).then(function(t){t&&200==t.code?(e.roleArr=t.data.rows,e.currentPage=t.data.pageNum,e.pageSize=t.data.pageSize,e.total=t.data.total):e.error(t.msg)}).catch(function(){e.error("网络错误")})},getDeptTreeList:function(){var e=this;Object(i.x)().then(function(t){t&&200==t.code?e.deptArr=e.getCinema(t.data,"children"):e.error(t.msg)}).catch(function(){})},handleCurrentChange:function(e){this.currentPage=e,this.getRoleTreeList()},handleSizeChange:function(e){this.pageSize=e,this.getRoleTreeList()}}}},382:function(e,t,r){var o=r(383);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(167)("10c4a78c",o,!0,{})},383:function(e,t,r){t=e.exports=r(166)(!0),t.push([e.i,"\n.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {\n  background: #3b74ff !important;\n  color: #fff;\n}\n.el-tree-node__content:hover {\n  background-color: #3b74ff !important;\n  color: #ffffff;\n}\n.el-input.is-disabled .el-input__inner {\n  text-overflow: ellipsis;\n}\n","",{version:3,sources:["G:/Workspaces/open/vue-module/base/src/views/sysMange/userManage/newUser.vue"],names:[],mappings:";AACA;EACE,+BAA+B;EAC/B,YAAY;CACb;AACD;EACE,qCAAqC;EACrC,eAAe;CAChB;AACD;EACE,wBAAwB;CACzB",file:"newUser.vue",sourcesContent:["\n.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {\n  background: #3b74ff !important;\n  color: #fff;\n}\n.el-tree-node__content:hover {\n  background-color: #3b74ff !important;\n  color: #ffffff;\n}\n.el-input.is-disabled .el-input__inner {\n  text-overflow: ellipsis;\n}\n"],sourceRoot:""}])},384:function(e,t,r){var o=r(385);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(167)("4b511254",o,!0,{})},385:function(e,t,r){t=e.exports=r(166)(!0),t.push([e.i,"\n.content-wrapper .el-input[data-v-aa48df72] {\n  width: 360px;\n}\n.content-wrapper .el-input__inner[data-v-aa48df72] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.content-wrapper .el-select[data-v-aa48df72] {\n  width: 360px;\n}\n.content-wrapper .box[data-v-aa48df72] {\n  width: 360px;\n}\n.content-wrapper .box:hover .tool[data-v-aa48df72] {\n    display: block;\n}\n.content-wrapper .tool[data-v-aa48df72] {\n  display: none;\n  width: 290px;\n  position: absolute;\n  top: 100%;\n  left: 38px;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  border-radius: 5px 5px 5px 5px;\n}\n.content-wrapper .tool li[data-v-aa48df72] {\n    height: 24px;\n    line-height: 24px;\n    padding-left: 10px;\n}\n","",{version:3,sources:["G:/Workspaces/open/vue-module/base/src/views/sysMange/userManage/newUser.vue"],names:[],mappings:";AACA;EACE,aAAa;CACd;AACD;EACE,iBAAiB;EACjB,wBAAwB;CACzB;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;IACI,eAAe;CAClB;AACD;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,aAAa;EACb,+BAA+B;EAC/B,YAAY;EACZ,+BAA+B;CAChC;AACD;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;CACtB",file:"newUser.vue",sourcesContent:["\n.content-wrapper .el-input[data-v-aa48df72] {\n  width: 360px;\n}\n.content-wrapper .el-input__inner[data-v-aa48df72] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.content-wrapper .el-select[data-v-aa48df72] {\n  width: 360px;\n}\n.content-wrapper .box[data-v-aa48df72] {\n  width: 360px;\n}\n.content-wrapper .box:hover .tool[data-v-aa48df72] {\n    display: block;\n}\n.content-wrapper .tool[data-v-aa48df72] {\n  display: none;\n  width: 290px;\n  position: absolute;\n  top: 100%;\n  left: 38px;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  border-radius: 5px 5px 5px 5px;\n}\n.content-wrapper .tool li[data-v-aa48df72] {\n    height: 24px;\n    line-height: 24px;\n    padding-left: 10px;\n}\n"],sourceRoot:""}])},386:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content-wrapper"},[r("div",{staticClass:"list-wrapper"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户账号：",prop:"loginName"}},[r("el-input",{model:{value:e.ruleForm.loginName,callback:function(t){e.$set(e.ruleForm,"loginName",t)},expression:"ruleForm.loginName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户名称：",prop:"fullName"}},[r("el-input",{model:{value:e.ruleForm.fullName,callback:function(t){e.$set(e.ruleForm,"fullName",t)},expression:"ruleForm.fullName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户编码：",prop:"empCode"}},[r("el-input",{model:{value:e.ruleForm.empCode,callback:function(t){e.$set(e.ruleForm,"empCode",t)},expression:"ruleForm.empCode"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"状态：",prop:"status"}},[r("el-radio",{attrs:{label:"0"},model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}},[e._v("启用")]),e._v(" "),r("el-radio",{attrs:{label:"1"},model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}},[e._v("禁用")]),e._v(" "),r("el-radio",{attrs:{label:"2"},model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}},[e._v("离职")])],1),e._v(" "),r("el-form-item",{attrs:{label:"用户属性：",prop:"attributeType"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.attributeType,callback:function(t){e.$set(e.ruleForm,"attributeType",t)},expression:"ruleForm.attributeType"}},e._l(e.attributeArr,function(e){return r("el-option",{key:e.propertyCode,attrs:{label:e.propertyName,value:e.propertyCode}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"所属角色：",prop:"rolesName"}},[r("div",{staticClass:"box"},[e.multipleSelection.length?r("ul",{staticClass:"tool"},[r("i",{staticClass:"el-icon-close",staticStyle:{top:"-29px",left:"300px",position:"absolute","font-weight":"bolder",color:"#3b74ff","font-size":"large"},on:{click:function(t){return e.clear(1)}}}),e._v(" "),e._l(e.multipleSelection,function(t,o){return r("li",{key:o},[e._v("\n              "+e._s(t.name)+"\n            ")])})],2):e._e(),e._v(" "),r("el-input",{staticStyle:{width:"100%"},attrs:{disabled:"",placeholder:"请点击右侧选择"},model:{value:e.ruleForm.rolesName,callback:function(t){e.$set(e.ruleForm,"rolesName",t)},expression:"ruleForm.rolesName"}})],1),e._v(" "),r("el-button",{staticStyle:{top:"6px",left:"365px",position:"absolute"},attrs:{type:"primary",plain:""},on:{click:function(t){return e.getTree(1)}}},[e._v("\n          选择\n        ")])],1),e._v(" "),r("el-form-item",{attrs:{label:"所属组织：",prop:"orgName"}},[r("div",{staticClass:"box"},[e.ruleForm.orgName?r("ul",{staticClass:"tool"},[r("i",{staticClass:"el-icon-close",staticStyle:{top:"-29px",left:"300px",position:"absolute","font-weight":"bolder",color:"#3b74ff","font-size":"large"},on:{click:function(t){return e.clear(2)}}})]):e._e(),e._v(" "),r("el-input",{staticStyle:{width:"100%"},attrs:{disabled:"",placeholder:"请点击右侧选择"},model:{value:e.ruleForm.orgName,callback:function(t){e.$set(e.ruleForm,"orgName",t)},expression:"ruleForm.orgName"}})],1),e._v(" "),r("el-button",{staticStyle:{top:"6px",left:"365px",position:"absolute"},attrs:{type:"primary",plain:""},on:{click:function(t){return e.getTree(2)}}},[e._v("\n          选择\n        ")])],1),e._v(" "),r("el-form-item",{attrs:{label:"数据权限：",prop:"deptName"}},[r("div",{staticClass:"box"},[e.deptNameArr.length?r("ul",{staticClass:"tool"},[r("i",{staticClass:"el-icon-close",staticStyle:{top:"-29px",left:"300px",position:"absolute","font-weight":"bolder",color:"#3b74ff","font-size":"large"},on:{click:function(t){return e.clear(3)}}}),e._v(" "),e._l(e.deptNameArr,function(t,o){return r("li",{key:o},[e._v("\n              "+e._s(t.text)+"\n            ")])})],2):e._e(),e._v(" "),r("el-input",{staticStyle:{width:"100%"},attrs:{disabled:"",placeholder:"请点击右侧选择"},model:{value:e.ruleForm.deptName,callback:function(t){e.$set(e.ruleForm,"deptName",t)},expression:"ruleForm.deptName"}})],1),e._v(" "),r("el-button",{staticStyle:{top:"6px",left:"365px",position:"absolute"},attrs:{type:"primary",plain:""},on:{click:function(t){return e.getTree(3)}}},[e._v("\n          选择\n        ")])],1),e._v(" "),r("el-form-item",{attrs:{label:"手机号码：",prop:"phone"}},[r("el-input",{attrs:{placeholder:"此手机号作为验证码登录方式使用"},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"邮箱：",prop:"email"}},[r("el-input",{model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("保存")]),e._v(" "),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("取消")])],1)],1)],1),e._v(" "),r("div",{staticClass:"diaWindow"},[r("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"448px","lock-scroll":""},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("div",{staticClass:"divider"}),e._v(" "),e.treeFlag?r("el-table",{ref:"multipleTable",attrs:{height:"350",data:e.roleArr,"row-key":e.getrowkey},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{width:"50","reserve-selection":!0,type:"selection"}}),e._v(" "),r("el-table-column",{attrs:{prop:"name",label:"角色名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}],null,!1,1895023226)})],1):r("el-tree",{ref:"tree1",attrs:{data:e.orgArr,"node-key":"id","default-expand-all":"","expand-on-click-node":!1,"highlight-current":!0,props:e.defaultProps},on:{"node-click":e.handleNodeClick},scopedSlots:e._u([{key:"default",fn:function(t){var o=(t.node,t.data);return r("span",{staticClass:"custom-tree-node"},[r("span",{staticClass:"org-button"},[r("i",{staticClass:"iconfont",class:{"icon-neiye-zongbu":"总部"==o.text,"icon-neiye-zuzhi":0==o.isCinema,"icon-neiye-quyu":1==o.isCinema}},[e._v("\n              "+e._s(o.text)+"\n            ")])])])}}])}),e._v(" "),e.treeFlag?r("div",{staticClass:"page-wrap"},[r("el-pagination",{attrs:{background:"","pager-count":5,"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1):e._e(),e._v(" "),r("div",{staticClass:"divider"}),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.ok}},[e._v("确 定")]),e._v(" "),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"数据权限",visible:e.dialogVisible2,width:"448px","lock-scroll":""},on:{"update:visible":function(t){e.dialogVisible2=t}}},[r("div",{staticClass:"divider"}),e._v(" "),r("div",{staticClass:"demo-input-suffix"},[e._v("\n        选择影院：\n        "),r("el-radio",{attrs:{label:"1"},on:{change:e.chooseOrg},model:{value:e.radioType,callback:function(t){e.radioType=t},expression:"radioType"}},[e._v("指定影院")]),e._v(" "),r("el-radio",{attrs:{label:"0"},on:{change:e.chooseOrg},model:{value:e.radioType,callback:function(t){e.radioType=t},expression:"radioType"}},[e._v("指定组织节点")])],1),e._v(" "),r("el-tree",{ref:"tree2",staticStyle:{height:"408px"},attrs:{data:e.deptArr,"node-key":"id","default-expand-all":"","show-checkbox":"","expand-on-click-node":!1,"highlight-current":!0,props:e.defaultProps},scopedSlots:e._u([{key:"default",fn:function(t){var o=(t.node,t.data);return r("span",{staticClass:"custom-tree-node"},[r("span",{staticClass:"org-button"},[r("i",{staticClass:"iconfont",class:{"icon-neiye-zongbu":"总部"==o.text,"icon-neiye-zuzhi":0==o.isCinema,"icon-neiye-quyu":1==o.isCinema}},[e._v("\n              "+e._s(o.text)+"\n            ")])])])}}])}),e._v(" "),r("div",{staticClass:"divider"}),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.ok2}},[e._v("确 定")]),e._v(" "),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)])},n=[],a={render:o,staticRenderFns:n};t.a=a}});