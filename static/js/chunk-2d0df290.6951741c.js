(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df290"],{8970:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"list-type":"picture",action:"","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"on-change":e.getFile,"auto-upload":!1,accept:".jpg, .png"}},[n("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("上传图片文件")]),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)},i=[],a=(n("d3b7"),n("c24f")),l={data:function(){return{fileList:[]}},methods:{submitUpload:function(){this.$refs.upload.submit()},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},getFile:function(e){this.getBase64(e.raw).then((function(e){var t=e.split(",");Object(a["d"])({image:t[1]})}))},getBase64:function(e){return new Promise((function(t,n){var o=new FileReader,i="";o.readAsDataURL(e),o.onload=function(){i=o.result},o.onerror=function(e){n(e)},o.onloadend=function(){t(i)}}))}}},s=l,r=n("2877"),u=Object(r["a"])(s,o,i,!1,null,"eafee1b6",null);t["default"]=u.exports}}]);