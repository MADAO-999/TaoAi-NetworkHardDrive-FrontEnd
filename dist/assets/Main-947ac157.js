import{j as ae,r as u,ag as d,o as c,c as p,V as t,P as o,a3 as oe,T as m,U as I,F as B,O as P,S as w,n as X,b as ye,a as i,a9 as te,J as ge,u as we,bh as ke,bf as be}from"./@vue-7298a6f3.js";import{u as Fe}from"./vue-clipboard3-69020072.js";import{u as Ce,b as Ne}from"./vue-router-71f03589.js";import{_ as Ie}from"./index-5b267a90.js";import"./clipboard-0f4a3daa.js";import"./aplayer-585df14e.js";import"./element-plus-69c99c20.js";import"./lodash-es-36eb724a.js";import"./@vueuse-896144d5.js";import"./@element-plus-925c7e21.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-32577819.js";import"./async-validator-10c6301d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-9626137c.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-7cc3f4ab.js";import"./vue-cookies-fc2d14d9.js";import"./@highlightjs-600d0386.js";import"./highlight.js-6845818c.js";import"./axios-4a70c6fc.js";import"./docx-preview-a6045d14.js";import"./jszip-1f4bc9a3.js";import"./xlsx-04f2268f.js";import"./vue-pdf-embed-4bdf9d28.js";import"./vue-d7dd0a62.js";import"./dplayer-d4a41b2a.js";const Se={all:{accept:"*"},video:{accept:".mp4,.avi,.rmvb,.mkv,.mov"},music:{accept:".mp3,.wav,.wma,.mp2,.flac,.midi,.ra,.ape,.aac,.cda"},image:{accept:".jpeg,.jpg,.png,.gif,.bmp,.dds,.psd,.pdt,.webp,.xmp,.svg,.tiff"},doc:{accept:".pdf,.doc,.docx,.xls,.xlsx,.txt"},others:{accept:"*"}},Te={__name:"ShareFile",setup(D,{expose:K}){const{toClipboard:A}=Fe(),{proxy:r}=ae(),$=u(document.location.origin+"/share/"),Y={shareFile:"/share/shareFile"},k=u(0),n=u({}),T=u(),H={validType:[{required:!0,message:"请选择有效期"}],codeType:[{required:!0,message:"请选择提取码类型"}],code:[{required:!0,message:"请输入提取码"},{validator:r.Verify.shareCode,message:"提取码只能是数字字母"},{min:5,message:"提取码最少5位"}]},R=u(!0),s=u({show:!1,title:"分享",buttons:[{type:"primary",text:"确定",click:v=>{M()}}]}),F=u({}),M=async()=>{if(Object.keys(F.value).length>0){s.value.show=!1;return}T.value.validate(async v=>{if(!v)return;let f={};Object.assign(f,n.value);let y=await r.Request({url:Y.shareFile,params:f});y&&(k.value=1,F.value=y.data,s.value.buttons[0].text="关闭",R.value=!1)})};K({show:v=>{R.value=!0,s.value.show=!0,k.value=0,F.value={},X(()=>{T.value.resetFields(),n.value=Object.assign({},v)})}});const N=async()=>{await A(`链接:${$.value}${F.value.shareId} 提取码: ${F.value.code}`),r.Message.success("复制成功")};return(v,f)=>{const y=d("el-form-item"),h=d("el-radio"),x=d("el-radio-group"),U=d("el-input"),J=d("el-button"),q=d("el-form"),G=d("Dialog");return c(),p("div",null,[t(G,{show:s.value.show,title:s.value.title,buttons:s.value.buttons,width:"600px",showCancel:R.value,onClose:f[4]||(f[4]=_=>s.value.show=!1)},{default:o(()=>[t(q,{model:n.value,rules:H,ref_key:"formDataRef",ref:T,"label-width":"100px",onSubmit:f[3]||(f[3]=oe(()=>{},["prevent"]))},{default:o(()=>[t(y,{label:"文件"},{default:o(()=>[m(I(n.value.fileName),1)]),_:1}),k.value==0?(c(),p(B,{key:0},[t(y,{label:"有效期",prop:"validType"},{default:o(()=>[t(x,{modelValue:n.value.validType,"onUpdate:modelValue":f[0]||(f[0]=_=>n.value.validType=_)},{default:o(()=>[t(h,{label:0},{default:o(()=>[m("1天")]),_:1}),t(h,{label:1},{default:o(()=>[m("7天")]),_:1}),t(h,{label:2},{default:o(()=>[m("30天")]),_:1}),t(h,{label:3},{default:o(()=>[m("永久有效")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(y,{label:"提取码",prop:"codeType"},{default:o(()=>[t(x,{modelValue:n.value.codeType,"onUpdate:modelValue":f[1]||(f[1]=_=>n.value.codeType=_)},{default:o(()=>[t(h,{label:0},{default:o(()=>[m("自定义")]),_:1}),t(h,{label:1},{default:o(()=>[m("系统生成")]),_:1})]),_:1},8,["modelValue"])]),_:1}),n.value.codeType==0?(c(),P(y,{key:0,prop:"code"},{default:o(()=>[t(U,{clearable:"",placeholder:"请输入5位提取码",modelValue:n.value.code,"onUpdate:modelValue":f[2]||(f[2]=_=>n.value.code=_),modelModifiers:{trim:!0},maxLength:"5",style:{width:"130px"}},null,8,["modelValue"])]),_:1})):w("",!0)],64)):(c(),p(B,{key:1},[t(y,{label:"分享连接"},{default:o(()=>[m(I($.value)+I(F.value.shareId),1)]),_:1}),t(y,{label:"提取码"},{default:o(()=>[m(I(F.value.code),1)]),_:1}),t(y,null,{default:o(()=>[t(J,{type:"primary",onClick:N},{default:o(()=>[m("复制链接及提取码")]),_:1})]),_:1})],64))]),_:1},8,["model"])]),_:1},8,["show","title","buttons","showCancel"])])}}};const S=D=>(ke("data-v-aed673ee"),D=D(),be(),D),Re={class:"top"},xe={class:"top-op"},Ve={class:"btn"},De=S(()=>i("span",{class:"iconfont icon-upload"},null,-1)),$e=S(()=>i("span",{class:"iconfont icon-folder-add"},null,-1)),Me=S(()=>i("span",{class:"iconfont icon-del"},null,-1)),Ee=S(()=>i("span",{class:"iconfont icon-move"},null,-1)),Oe={class:"search-panel"},ze={key:0,class:"file-list"},Pe=["onMouseenter","onMouseleave"],Ue=["title"],qe=["onClick"],Le={key:0,class:"transfer-status"},je={key:1,class:"transfer-status transfer-fail"},Be={key:3,class:"edit-panel"},Ke=["onClick"],Ae=["onClick"],He={class:"op"},Je=["onClick"],Ge=["onClick"],Qe=["onClick"],We=["onClick"],Xe=["onClick"],Ye={key:0},Ze={key:1,class:"no-data"},el={class:"no-data-inner"},ll=S(()=>i("div",{class:"tips"},"当前目录为空，上传你的第一个文件吧",-1)),tl={class:"op-list"},al={class:"op-item"},ol=S(()=>i("div",null,"上传文件",-1)),sl=S(()=>i("div",null,"新建目录",-1)),il={__name:"Main",emits:["addFile"],setup(D,{expose:K,emit:A}){const{proxy:r}=ae();Ce(),Ne();const $=async e=>{A("addFile",{file:e.file,filePid:k.value.fileId})};K({reload:()=>{E.value=!1,v()}});const k=u({fileId:0}),n={loadDataList:"/file/loadDataList",rename:"/file/rename",newFoloder:"/file/newFoloder",getFolderInfo:"/file/getFolderInfo",delFile:"/file/delFile",changeFileFolder:"/file/changeFileFolder",createDownloadUrl:"/file/createDownloadUrl",download:"/api/file/download"},T=ye(()=>{const e=Se[N.value];return e?e.accept:"*"}),H=[{label:"文件名",prop:"fileName",scopedSlots:"fileName"},{label:"修改时间",prop:"lastUpdateTime",width:200},{label:"大小",prop:"fileSize",scopedSlots:"fileSize",width:200}],R=()=>{E.value=!0,v()},s=u({}),F={extHeight:50,selectType:"checkbox"},M=u(),E=u(!0),N=u(),v=async()=>{let e={pageNo:s.value.pageNo,pageSize:s.value.pageSize,fileNameFuzzy:M.value,category:N.value,filePid:k.value.fileId};e.category!=="all"&&delete e.filePid;let l=await r.Request({url:n.loadDataList,showLoading:E,params:e});l&&(s.value=l.data,h.value=!1)},f=e=>{s.value.list.forEach(l=>{l.showOp=!1}),e.showOp=!0},y=e=>{e.showOp=!1},h=u(!1),x=u(),U=()=>{h.value||(s.value.list.forEach(e=>{e.showEdit=!1}),h.value=!0,s.value.list.unshift({showEdit:!0,fileType:0,fileId:"",filePid:k.value.fileId}),X(()=>{x.value.focus()}))},J=e=>{const l=s.value.list[e];l.fileId?l.showEdit=!1:s.value.list.splice(e,1),h.value=!1},q=async e=>{const{fileId:l,filePid:b,fileNameReal:V}=s.value.list[e];if(V==""||V.indexOf("/")!=-1){r.Message.warning("文件名不能为空且不能含有斜杠");return}let z=n.rename;l==""&&(z=n.newFoloder);let j=await r.Request({url:z,params:{fileId:l,filePid:b,fileName:V}});j&&(s.value.list[e]=j.data,h.value=!1)},G=e=>{s.value.list[0].fileId==""&&(s.value.list.splice(0,1),e=e-1),s.value.list.forEach(b=>{b.showEdit=!1});let l=s.value.list[e];l.showEdit=!0,l.folderType==0?(l.fileNameReal=l.fileName.substring(0,l.fileName.indexOf(".")),l.fileSuffix=l.fileName.substring(l.fileName.indexOf("."))):(l.fileNameReal=l.fileName,l.fileSuffix=""),h.value=!0,X(()=>{x.value.focus()})},_=u([]),se=e=>{_.value=[],e.forEach(l=>{_.value.push(l.fileId)})},ie=e=>{r.Confirm(`你确定要删除【${e.fileName}】吗？删除的文件可在10天内通过回收站还原`,async()=>{await r.Request({url:n.delFile,params:{fileIds:e.fileId}})&&v()})},ne=()=>{_.value.length!=0&&r.Confirm("你确定要删除这些文件吗？删除的文件可在10天内通过回收站还原",async()=>{await r.Request({url:n.delFile,params:{fileIds:_.value.join(",")}})&&v()})},L=u(),O=u({}),ce=e=>{O.value=e,L.value.showFolderDialog(k.value.fileId)},ue=()=>{O.value={},L.value.showFolderDialog(k.value.fileId)},re=async e=>{if(O.value.filePid===e||k.value.fileId==e){r.Message.warning("文件正在当前目录，无需移动");return}let l=[];O.value.fileId?l.push(O.value.fileId):l=l.concat(_.value),await r.Request({url:n.changeFileFolder,params:{fileIds:l.join(","),filePid:e}})&&(L.value.close(),v())},Z=u(),ee=u(),de=e=>{if(e.folderType==1){ee.value.openFolder(e);return}if(e.status!=2){r.Message.warning("文件正在转码中，无法预览");return}Z.value.showPreview(e,0)},fe=e=>{const{curFolder:l,categoryId:b}=e;k.value=l,E.value=!0,N.value=b,v()},pe=async e=>{let l=await r.Request({url:n.createDownloadUrl+"/"+e.fileId});l&&(window.location.href=n.download+"/"+l.data)},le=u(),me=e=>{le.value.show(e)};return(e,l)=>{const b=d("el-button"),V=d("el-upload"),z=d("el-input"),j=d("Navigation"),Q=d("icon"),ve=d("Table"),W=d("Icon"),_e=d("Preview"),he=d("FolderSelect");return c(),p("div",null,[i("div",Re,[i("div",xe,[i("div",Ve,[t(V,{"show-file-list":!1,"with-credentials":!0,multiple:!0,"http-request":$,accept:T.value},{default:o(()=>[t(b,{type:"primary"},{default:o(()=>[De,m(" 上传 ")]),_:1})]),_:1},8,["accept"])]),N.value=="all"?(c(),P(b,{key:0,type:"success",onClick:U},{default:o(()=>[$e,m(" 新建文件夹 ")]),_:1})):w("",!0),t(b,{onClick:ne,type:"danger",disabled:_.value.length==0},{default:o(()=>[Me,m(" 批量删除 ")]),_:1},8,["disabled"]),t(b,{onClick:ue,type:"warning",disabled:_.value.length==0},{default:o(()=>[Ee,m(" 批量移动 ")]),_:1},8,["disabled"]),i("div",Oe,[t(z,{clearable:"",placeholder:"输入文件名搜索",modelValue:M.value,"onUpdate:modelValue":l[0]||(l[0]=C=>M.value=C),onKeyup:te(R,["enter"])},{suffix:o(()=>[i("i",{class:"iconfont icon-search",onClick:R})]),_:1},8,["modelValue","onKeyup"])]),i("div",{class:"iconfont icon-refresh",onClick:v})]),t(j,{ref_key:"navigationRef",ref:ee,onNavChange:fe},null,512)]),s.value.list&&s.value.list.length>0?(c(),p("div",ze,[t(ve,{ref:"dataTableRef",columns:H,showPagination:!0,dataSource:s.value,fetch:v,initFetch:!1,options:F,onRowSelected:se},{fileName:o(({index:C,row:a})=>[i("div",{class:"file-item",onMouseenter:g=>f(a),onMouseleave:g=>y(a)},[(a.fileType==3||a.fileType==1)&&a.status==2?(c(),P(Q,{key:0,cover:a.fileCover,width:32},null,8,["cover"])):(c(),p(B,{key:1},[a.folderType==0?(c(),P(Q,{key:0,fileType:a.fileType},null,8,["fileType"])):w("",!0),a.folderType==1?(c(),P(Q,{key:1,fileType:0})):w("",!0)],64)),a.showEdit?w("",!0):(c(),p("span",{key:2,class:"file-name",title:a.fileName},[i("span",{onClick:g=>de(a)},I(a.fileName),9,qe),a.status==0?(c(),p("span",Le,"转码中")):w("",!0),a.status==1?(c(),p("span",je,"转码失败")):w("",!0)],8,Ue)),a.showEdit?(c(),p("div",Be,[t(z,{modelValue:a.fileNameReal,"onUpdate:modelValue":g=>a.fileNameReal=g,modelModifiers:{trim:!0},ref_key:"editNameRef",ref:x,maxLength:190,onKeyup:te(g=>q(C),["enter"])},{suffix:o(()=>[m(I(a.fileSuffix),1)]),_:2},1032,["modelValue","onUpdate:modelValue","onKeyup"]),i("span",{class:ge(["iconfont icon-right1",a.fileNameReal?"":"not-allow"]),onClick:g=>q(C)},null,10,Ke),i("span",{class:"iconfont icon-error",onClick:g=>J(C)},null,8,Ae)])):w("",!0),i("span",He,[a.showOp&&a.fileId&&a.status==2?(c(),p(B,{key:0},[i("span",{class:"iconfont icon-share1",onClick:g=>me(a)},"分享",8,Je),a.folderType==0?(c(),p("span",{key:0,class:"iconfont icon-download",onClick:g=>pe(a)},"下载",8,Ge)):w("",!0),i("span",{class:"iconfont icon-del",onClick:g=>ie(a)},"删除",8,Qe),i("span",{class:"iconfont icon-edit",onClick:oe(g=>G(C),["stop"])},"重命名",8,We),i("span",{class:"iconfont icon-move",onClick:g=>ce(a)},"移动",8,Xe)],64)):w("",!0)])],40,Pe)]),fileSize:o(({row:C})=>[C.fileSize?(c(),p("span",Ye,I(we(r).Utils.size2Str(C.fileSize)),1)):w("",!0)]),_:1},8,["dataSource"])])):(c(),p("div",Ze,[i("div",el,[t(W,{iconName:"no_data",width:120,fit:"fill"}),ll,i("div",tl,[t(V,{"show-file-list":!1,"with-credentials":!0,multiple:!0,"http-request":$,accept:T.value},{default:o(()=>[i("div",al,[t(W,{iconName:"file",width:60}),ol])]),_:1},8,["accept"]),N.value=="all"?(c(),p("div",{key:0,class:"op-item",onClick:U},[t(W,{iconName:"folder",width:60}),sl])):w("",!0)])])])),t(_e,{ref_key:"previewRef",ref:Z},null,512),t(he,{ref_key:"folderSelectRef",ref:L,onFolderSelect:re},null,512),t(Te,{ref_key:"shareRef",ref:le},null,512)])}}},El=Ie(il,[["__scopeId","data-v-aed673ee"]]);export{El as default};
