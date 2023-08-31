import{u as E}from"./vue-clipboard3-69020072.js";import{u as P,b as j}from"./vue-router-71f03589.js";import{_ as q}from"./index-5b267a90.js";import{j as z,r,ag as _,o as s,c as p,a,V as b,P as f,T as g,O as v,F as k,S as u,U as C,bh as F,bf as U}from"./@vue-7298a6f3.js";import"./clipboard-0f4a3daa.js";import"./aplayer-585df14e.js";import"./element-plus-69c99c20.js";import"./lodash-es-36eb724a.js";import"./@vueuse-896144d5.js";import"./@element-plus-925c7e21.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-32577819.js";import"./async-validator-10c6301d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-9626137c.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-7cc3f4ab.js";import"./vue-cookies-fc2d14d9.js";import"./@highlightjs-600d0386.js";import"./highlight.js-6845818c.js";import"./axios-4a70c6fc.js";import"./docx-preview-a6045d14.js";import"./jszip-1f4bc9a3.js";import"./xlsx-04f2268f.js";import"./vue-pdf-embed-4bdf9d28.js";import"./vue-d7dd0a62.js";import"./dplayer-d4a41b2a.js";const H=n=>(F("data-v-d19af008"),n=n(),U(),n),A={class:"top"},G=H(()=>a("span",{class:"iconfont icon-cancel"},null,-1)),J={class:"file-list"},K=["onMouseenter","onMouseleave"],Q=["title"],W={class:"op"},X=["onClick"],Y=["onClick"],Z={__name:"Share",setup(n){const{toClipboard:x}=E(),{proxy:l}=z();P(),j();const y={loadDataList:"/share/loadShareList",cancelShare:"/share/cancelShare"},I=r(document.location.origin+"/share/"),N=[{label:"文件名",prop:"fileName",scopedSlots:"fileName"},{label:"分享时间",prop:"shareTime",width:200},{label:"失效时间",prop:"expireTime",scopedSlots:"expireTime",width:200},{label:"浏览次数",prop:"showCount",width:200}],c=r({}),O={extHeight:20,selectType:"checkbox"},S=async()=>{let t={pageNo:c.value.pageNo,pageSize:c.value.pageSize};t.category!=="all"&&delete t.filePid;let o=await l.Request({url:y.loadDataList,params:t});o&&(c.value=o.data)},$=t=>{c.value.list.forEach(o=>{o.showOp=!1}),t.showOp=!0},D=t=>{t.showOp=!1},L=async t=>{await x(`链接:${I.value}${t.shareId} 提取码: ${t.code}`),l.Message.success("复制成功")},i=r([]),M=t=>{i.value=[],t.forEach(o=>{i.value.push(o.shareId)})},d=r([]),R=()=>{i.value.length!=0&&(d.value=i.value,T())},B=t=>{d.value=[t.shareId],T()},T=async()=>{l.Confirm("你确定要取消分享吗？",async()=>{await l.Request({url:y.cancelShare,params:{shareIds:d.value.join(",")}})&&(l.Message.success("取消分享成功"),S())})};return(t,o)=>{const V=_("el-button"),m=_("icon"),w=_("Table");return s(),p("div",null,[a("div",A,[b(V,{type:"primary",disabled:i.value.length==0,onClick:R},{default:f(()=>[G,g("取消分享 ")]),_:1},8,["disabled"])]),a("div",J,[b(w,{columns:N,showPagination:!0,dataSource:c.value,fetch:S,options:O,onRowSelected:M},{fileName:f(({row:e})=>[a("div",{class:"file-item",onMouseenter:h=>$(e),onMouseleave:h=>D(e)},[(e.fileType==3||e.fileType==1)&&e.status!==0?(s(),v(m,{key:0,cover:e.fileCover},null,8,["cover"])):(s(),p(k,{key:1},[e.folderType==0?(s(),v(m,{key:0,fileType:e.fileType},null,8,["fileType"])):u("",!0),e.folderType==1?(s(),v(m,{key:1,fileType:0})):u("",!0)],64)),e.showRename?u("",!0):(s(),p("span",{key:2,class:"file-name",title:e.fileName},[a("span",null,C(e.fileName),1)],8,Q)),a("span",W,[e.showOp&&e.fileId?(s(),p(k,{key:0},[a("span",{class:"iconfont icon-link",onClick:h=>L(e)},"复制链接",8,X),a("span",{class:"iconfont icon-cancel",onClick:h=>B(e)},"取消分享",8,Y)],64)):u("",!0)])],40,K)]),expireTime:f(({row:e})=>[g(C(e.validType==3?"永久":e.expireTime),1)]),_:1},8,["dataSource"])])])}}},Oe=q(Z,[["__scopeId","data-v-d19af008"]]);export{Oe as default};