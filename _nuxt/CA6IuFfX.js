import{f as d,g as D,u as y,n as H,h as g,i as S,j as _,k as b,l as c}from"./CmFruw-H.js";import j from"./BZwoR5bs.js";import k from"./CNd8113Z.js";import{u as q}from"./6zF1bTqo.js";import"./C56H1wD4.js";import"./Dym_awWQ.js";import"./CxYJgpPD.js";import"./Dhefm2AA.js";import"./DsKPfcoc.js";const a=(p,f=y())=>{const e=d(p),s=g();D(()=>d(p),(n=e)=>{if(!f.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),s.public.content.host;const u=(t==null?void 0:t.description)||(n==null?void 0:n.description);u&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:u}),t!=null&&t.image||(n==null||n.image),H(()=>q(t))},{immediate:!0})},v=S({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(p){const{contentHead:f}=g().public.content,e=_(),{tag:s,excerpt:m,path:n,query:t,head:r}=p,u=r===void 0?f:r,l={...t||{},path:n||(t==null?void 0:t.path)||b(y().path),find:"one"},C=(i,o)=>c("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return c(k,l,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:w})=>{var h;return u&&a(i),(h=e.default)==null?void 0:h.call(e,{doc:i,refresh:o,isPartial:w,excerpt:m,...this.$attrs})}:({data:i})=>(u&&a(i),c(j,{value:i,excerpt:m,tag:s,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):C("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||c("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||c("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),P=v;export{P as default};
