import{j as b,r as l,ag as a,o as V,c as R,a as e,V as r,U as p,P as m,a3 as N,a9 as D,T,bh as q,bf as A}from"./@vue-7298a6f3.js";import{u as B,b as K}from"./vue-router-71f03589.js";import{_ as U}from"./index-5b267a90.js";import"./element-plus-69c99c20.js";import"./aplayer-585df14e.js";import"./lodash-es-36eb724a.js";import"./@vueuse-896144d5.js";import"./@element-plus-925c7e21.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-32577819.js";import"./async-validator-10c6301d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-9626137c.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-7cc3f4ab.js";import"./vue-cookies-fc2d14d9.js";import"./@highlightjs-600d0386.js";import"./highlight.js-6845818c.js";import"./axios-4a70c6fc.js";import"./docx-preview-a6045d14.js";import"./jszip-1f4bc9a3.js";import"./xlsx-04f2268f.js";import"./vue-pdf-embed-4bdf9d28.js";import"./vue-d7dd0a62.js";import"./dplayer-d4a41b2a.js";import"./vue-clipboard3-69020072.js";import"./clipboard-0f4a3daa.js";const f=n=>(q("data-v-70ae5165"),n=n(),A(),n),j={class:"share"},E={class:"body-content"},L=f(()=>e("div",{class:"logo"},[e("span",{class:"iconfont icon-pan"}),e("span",{class:"name"},"TaoAi云盘")],-1)),M={class:"code-panel"},P={class:"file-info"},$={class:"avatar"},z={class:"share-info"},F={class:"user-info"},G={class:"nick-name"},H={class:"share-time"},J={class:"file-name"},O={class:"code-body"},Q=f(()=>e("div",{class:"tips"},"请输入提取码：",-1)),W={class:"input-area"},X={__name:"ShareCheck",setup(n){const{proxy:d}=b(),v=B(),S=K(),_={getShareInfo:"/showShare/getShareInfo",checkShareCode:"/showShare/checkShareCode"},c=S.params.shareId,t=l({});(async()=>{let o=await d.Request({url:_.getShareInfo,params:{shareId:c}});o&&(t.value=o.data)})();const i=l({}),u=l(),I={code:[{required:!0,message:"请输入提取码"},{min:5,message:"提取码为5位"},{max:5,message:"提取码为5位"}]},h=async()=>{u.value.validate(async o=>{!o||!await d.Request({url:_.checkShareCode,params:{shareId:c,code:i.value.code}})||v.push(`/share/${c}`)})};return(o,s)=>{const y=a("Avatar"),g=a("el-input"),k=a("el-button"),C=a("el-form-item"),w=a("el-form");return V(),R("div",j,[e("div",E,[L,e("div",M,[e("div",P,[e("div",$,[r(y,{userId:t.value.userId,avatar:t.value.avatar,width:50},null,8,["userId","avatar"])]),e("div",z,[e("div",F,[e("span",G,p(t.value.nickName),1),e("span",H,"分享于 "+p(t.value.shareTime),1)]),e("div",J,"分享文件："+p(t.value.fileName),1)])]),e("div",O,[Q,e("div",W,[r(w,{model:i.value,rules:I,ref_key:"formDataRef",ref:u,maxLength:5,onSubmit:s[1]||(s[1]=N(()=>{},["prevent"]))},{default:m(()=>[r(C,{prop:"code"},{default:m(()=>[r(g,{class:"input",modelValue:i.value.code,"onUpdate:modelValue":s[0]||(s[0]=x=>i.value.code=x),onKeyup:D(h,["enter"])},null,8,["modelValue","onKeyup"]),r(k,{type:"primary",onClick:h},{default:m(()=>[T("提取文件")]),_:1})]),_:1})]),_:1},8,["model"])])])])])])}}},Ve=U(X,[["__scopeId","data-v-70ae5165"]]);export{Ve as default};