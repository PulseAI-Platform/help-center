import{f as d,g as D,u as y,n as H,h as g,i as S,j as _,k as b,l as c}from"./DJEPWaJW.js";import j from"./C1KXhVe4.js";import k from"./lr8EOCDV.js";import{u as q}from"./D9VnwUGz.js";import"./BQCPjlA9.js";import"./CxYJgpPD.js";import"./NmW-peQ6.js";const a=(f,s=y())=>{const e=d(f),p=g();D(()=>d(f),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),p.public.content.host;const u=(t==null?void 0:t.description)||(n==null?void 0:n.description);u&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:u}),t!=null&&t.image||(n==null||n.image),H(()=>q(t))},{immediate:!0})},v=S({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(f){const{contentHead:s}=g().public.content,e=_(),{tag:p,excerpt:m,path:n,query:t,head:r}=f,u=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||b(y().path),find:"one"},C=(i,o)=>c("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return c(k,l,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:w})=>{var h;return u&&a(i),(h=e.default)==null?void 0:h.call(e,{doc:i,refresh:o,isPartial:w,excerpt:m,...this.$attrs})}:({data:i})=>(u&&a(i),c(j,{value:i,excerpt:m,tag:p,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):C("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||c("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||c("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),I=v;export{I as default};
