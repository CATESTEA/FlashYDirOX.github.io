import{f as x,o as s,h as C,a as i,t as _,ag as N,ah as j,u as q,a5 as A,s as D,k as E,D as I,aw as z,a2 as v,a9 as H,v as O,ai as W,a4 as G,l as J,c as m,w as a,d as r,j as t,i as K,F as M,m as Q,ae as U,n as X}from"./app-4QercRZ0.js";import{_ as Z}from"./YunCard.vue_vue_type_script_setup_true_lang-q5zATwwD.js";import{_ as tt}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-_LioPXd-.js";import{_ as et}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-hkOyHuFJ.js";const st={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},nt={"inline-flex":""},ot={"inline-flex":"",text:"xs"},at=x({__name:"YunLayoutPostTag",props:{title:{},count:{}},setup(w){return(n,p)=>(s(),C("span",st,[i("span",nt,"#"+_(n.title),1),i("span",ot,"["+_(n.count)+"]",1)]))}}),rt={class:"yun-text-light",text:"center",p:"2"},it={class:"justify-center items-end",flex:"~ wrap",gap:"1"},pt=x({__name:"tags",setup(w){N([j({"@type":"CollectionPage"})]);const n=q(),p=A(),T=D(),{t:f}=E(),l=I(),{tags:g,getTagStyle:$}=z({primary:T.value.colors.primary}),o=v(()=>n.query.tag||""),P=H(),S=v(()=>P.postList.filter(e=>e.tags?typeof e.tags=="string"?e.tags===o.value:e.tags.includes(o.value):!1)),d=O(),{show:k}=W(d);function Y(c){p.push({query:{tag:c}}),k()}const b=G(l);return(c,e)=>{const h=et,L=at,V=J("RouterView"),B=tt,R=Z,F=U;return s(),m(F,null,{"main-header":a(()=>[r(h,{title:t(b)||t(f)("menu.tags"),icon:t(l).icon||"i-ri-tag-line",color:t(l).color},null,8,["title","icon","color"])]),"main-content":a(()=>[i("div",rt,_(t(f)("counter.tags",Array.from(t(g)).length)),1),i("div",it,[(s(!0),C(M,null,K(Array.from(t(g)).sort(),([u,y])=>(s(),m(L,{key:u,title:u,count:y.count,style:X(t($)(y.count)),onClick:lt=>Y(u.toString())},null,8,["title","count","style","onClick"]))),128))]),r(V)]),"main-nav-before":a(()=>[o.value?(s(),m(R,{key:0,ref_key:"collapse",ref:d,m:"t-4",w:"full"},{default:a(()=>[r(h,{title:o.value,icon:"i-ri-hashtag"},null,8,["title"]),r(B,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:S.value},null,8,["posts"])]),_:1},512)):Q("v-if",!0)]),_:1})}}});export{pt as default};
