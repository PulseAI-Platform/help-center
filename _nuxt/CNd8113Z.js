import{h as g}from"./Dhefm2AA.js";import{u as C,q as v}from"./DsKPfcoc.js";import{i as S,D as b,E as _,h as k,g as A,j as N,l as O}from"./CmFruw-H.js";const Q=S({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(i){const{path:n,only:t,without:f,where:a,sort:d,limit:o,skip:l,locale:s,find:h}=b(i),y=_(()=>{var e;return(e=n.value)==null?void 0:e.includes("/_")}),p=!k().public.content.experimental.advanceQuery;A(()=>i,()=>r(),{deep:!0});const u=e=>p?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:c,refresh:r}=await C(`content-query-${g(i)}`,()=>{let e;return n.value?e=v(n.value):e=v(),t.value&&(e=e.only(t.value)),f.value&&(e=e.without(f.value)),a.value&&(e=e.where(a.value)),d.value&&(e=e.sort(d.value)),o.value&&(e=e.limit(o.value)),l.value&&(e=e.skip(l.value)),s.value&&(e=e.where({_locale:s.value})),h.value==="one"?e.findOne().then(u):h.value==="surround"?n.value?p?e.findSurround(n.value):e.withSurround(n.value).findOne().then(u):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(u)):e.find().then(u)});return{isPartial:y,data:c,refresh:r}},render(i){var m;const n=N(),{data:t,refresh:f,isPartial:a,path:d,only:o,without:l,where:s,sort:h,limit:y,skip:p,locale:u,find:c}=i,r={path:d,only:o,without:l,where:s,sort:h,limit:y,skip:p,locale:u,find:c};if(r.find==="one"){if(!t&&(n!=null&&n["not-found"]))return n["not-found"]({props:r,...this.$attrs});if(n!=null&&n.empty&&(t==null?void 0:t._type)==="markdown"&&!((m=t==null?void 0:t.body)!=null&&m.children.length))return n.empty({props:r,...this.$attrs})}else if((!t||!t.length)&&n!=null&&n["not-found"])return n["not-found"]({props:r,...this.$attrs});return n!=null&&n.default?n.default({data:t,refresh:f,isPartial:a,props:r,...this.$attrs}):((w,q)=>O("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:t,props:r,isPartial:a})}}),x=Q;export{x as default};
