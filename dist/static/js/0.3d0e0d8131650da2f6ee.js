webpackJsonp([0],{C3fl:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=n("Dd8w"),i=n.n(e),a=(n("Q98j"),n("NYxO")),s={data:function(){return{}},computed:i()({},Object(a.c)(["notebooks"])),created:function(){this.checkLogin({path:"/login"}),this.getNotebooks()},updated:function(){this.getNotebooks()},methods:i()({},Object(a.b)(["getNotebooks","addNotebook","updateNotebook","deleteNotebook","checkLogin"]),{onCreate:function(){var t=this;this.$prompt("请输入新笔记标题","创建笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{1,30}$/,inputErrorMessage:"笔记本标题不能为空，且不超30个字"}).then(function(o){var n=o.value;console.log("sucess addnote:",n),t.addNotebook({title:n})}).catch(function(t){})},onEdit:function(t){var o=this,n="";this.$prompt("请修改笔记本","修改笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{1,30}$/,inputValue:t.title,inputErrorMessage:"笔记本标题不能为空，且不超30个字"}).then(function(e){var i=e.value;n=i,o.updateNotebook({notebookId:t.id,title:n})}).catch(function(t){})},onDelete:function(t){var o=this;this.$confirm("确定要删除笔记本?","删除笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.deleteNotebook({notebookId:t.id})}).catch(function(){})}})},c={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"detail",attrs:{id:"notebook-list"}},[n("header",[n("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),t.onCreate(o)}}},[n("i",{staticClass:"iconfont icon-plus"},[t._v("新建笔记本")])])]),t._v(" "),n("main",[n("div",{staticClass:"layout"},[n("h3",[t._v("笔记本列表"+t._s(t.notebooks.length))]),t._v(" "),n("div",{staticClass:"book-list"},t._l(t.notebooks,function(o){return n("router-link",{key:o.id,staticClass:"notebook",attrs:{to:"/note?notebookId="+o.id}},[n("div",[n("span",{staticClass:"iconfont icon-notebook"}),t._v(t._s(o.title)+"\n                        "),n("span",[t._v(t._s(o.noteCounts))]),n("span",{staticClass:"action",on:{click:function(n){n.stopPropagation(),n.preventDefault(),t.onEdit(o)}}},[t._v("编辑")]),t._v(" "),n("span",{staticClass:"action",on:{click:function(n){n.stopPropagation(),n.preventDefault(),t.onDelete(o)}}},[t._v("删除")]),t._v(" "),n("span",{staticClass:"date"},[t._v(t._s(o.createdAtFriendly))])])])}))])])])},staticRenderFns:[]};var r=n("VU/8")(s,c,!1,function(t){n("T4KP")},"data-v-5a801d94",null);o.default=r.exports},T4KP:function(t,o){}});
//# sourceMappingURL=0.3d0e0d8131650da2f6ee.js.map