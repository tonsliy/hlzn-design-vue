import{e as a,A as e,B as t,y as s,a as l,c as i,b as o,E as n,m as r,_ as c,p as v,j as u,F as d,l as f,k as m,G as p}from"./app.d08eb20d.js";v("data-v-31118141");const k={key:0,class:"home-hero"},h={key:0,class:"figure"},y={key:1,id:"main-title",class:"title"},g={key:2,class:"description"};u();var x=a({setup(a){const{site:v,frontmatter:u}=e(),d=t((()=>u.value.heroImage||f.value||p.value||_.value)),f=t((()=>null!==u.value.heroText)),m=t((()=>u.value.heroText||v.value.title)),p=t((()=>null!==u.value.tagline)),x=t((()=>u.value.tagline||v.value.description)),_=t((()=>u.value.actionLink&&u.value.actionText)),I=t((()=>u.value.altActionLink&&u.value.altActionText));return(a,e)=>s(d)?(l(),i("header",k,[s(u).heroImage?(l(),i("figure",h,[o("img",{class:"image",src:s(u).heroImage,alt:s(u).heroAlt},null,8,["src","alt"])])):n("v-if",!0),s(f)?(l(),i("h1",y,r(s(m)),1)):n("v-if",!0),s(p)?(l(),i("p",g,r(s(x)),1)):n("v-if",!0),s(_)?(l(),i(c,{key:3,item:{link:s(u).actionLink,text:s(u).actionText},class:"action"},null,8,["item"])):n("v-if",!0),s(I)?(l(),i(c,{key:4,item:{link:s(u).altActionLink,text:s(u).altActionText},class:"action alt"},null,8,["item"])):n("v-if",!0)])):n("v-if",!0)}});x.__scopeId="data-v-31118141",v("data-v-3f3ea9aa");const _={key:0,class:"home-features"},I={class:"wrapper"},b={class:"container"},A={class:"features"},T={key:0,class:"title"},L={key:1,class:"details"};u();var $=a({setup(a){const{frontmatter:c}=e(),v=t((()=>c.value.features&&c.value.features.length>0)),u=t((()=>c.value.features?c.value.features:[]));return(a,e)=>s(v)?(l(),i("div",_,[o("div",I,[o("div",b,[o("div",A,[(l(!0),i(d,null,f(s(u),((a,e)=>(l(),i("section",{key:e,class:"feature"},[a.title?(l(),i("h2",T,r(a.title),1)):n("v-if",!0),a.details?(l(),i("p",L,r(a.details),1)):n("v-if",!0)])))),128))])])])])):n("v-if",!0)}});$.__scopeId="data-v-3f3ea9aa",v("data-v-0a64a610");const j={key:0,class:"footer"},w={class:"container"},B={class:"text"};u();var C=a({setup(a){const{frontmatter:t}=e();return(a,e)=>s(t).footer?(l(),i("footer",j,[o("div",w,[o("p",B,r(s(t).footer),1)])])):n("v-if",!0)}});C.__scopeId="data-v-0a64a610",v("data-v-027d54b4");const E={class:"home","aria-labelledby":"main-title"},F={class:"home-content"};u();var G=a({setup:a=>(a,e)=>{const t=m("Content");return l(),i("main",E,[o(x),p(a.$slots,"hero",{},void 0,!0),o($),o("div",F,[o(t)]),p(a.$slots,"features",{},void 0,!0),o(C),p(a.$slots,"footer",{},void 0,!0)])}});G.__scopeId="data-v-027d54b4";export default G;