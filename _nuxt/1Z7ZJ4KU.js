import{i as d,A as l,B as f,C as p,D as v,E as m,F as g,j as h,l as s}from"./DJEPWaJW.js";import{u as _}from"./NmW-peQ6.js";import{_ as y}from"./DYXnzVqv.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=l(i),n=f(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&p("dd-navigation").value){const{navigation:a}=v();return{navigation:a}}const{data:o}=await _(`content-navigation-${g(n.value)}`,()=>m(n.value));return{navigation:o}},render(i){const t=h(),{navigation:n}=i,o=e=>s(y,{to:e._path},()=>e.title),a=(e,u)=>s("ul",u?{"data-level":u}:null,e.map(r=>r.children?s("li",null,[o(r),a(r.children,u+1)]):s("li",null,o(r)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),x=C;export{x as default};
