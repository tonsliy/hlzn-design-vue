var a=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(t,n,s)=>n in t?a(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s;import{e as o,C as c,D as E,x as C,M as u,r as i,y as r,z as d,A as k,p as D,g as F,h,a as A,c as g,b as m,F as v,k as B,d as f,n as y,j as S,E as b,q as _,s as w,v as M}from"./app.23790205.js";var O={width:{type:String,default:"120px"},defaultValue:{type:Array,default:()=>[]},defaultTitle:{type:String,default:"全部"},selectOption:{type:Array,default:()=>[]}},T=o({name:"MultiSelect",components:{[c.name]:c,[E.name]:E,[C.name]:C,[u.name]:u,"a-menu-item":u.Item},props:O,emits:["change"],setup(a,{emit:t}){const n=i(a.width),s=i(a.defaultTitle),e=i(!1),p=i(""),l=r([]),o=i(!1),c=i(!1),E=d(a,"defaultValue"),C=r(a.selectOption);k(E,(a=>{l.length=0,C.forEach((t=>{t.checked=!1,a.indexOf(t.value)>-1&&(t.checked=!0,l.push(t.value))})),o.value=!!l.length&&l.length<C.length,c.value=C.length===l.length}),{immediate:!0}),k(l,(a=>{if(a.length>0){const t=[];C.forEach((n=>{a.indexOf(n.value)>-1&&t.push(n.title)})),p.value=t.join("/")}else p.value=s.value}),{immediate:!0});return{compWidth:n,visible:e,selectData:p,selectList:l,indeterminate:o,checkAll:c,onChange:a=>{console.log("onChange"),a||t("change",l)},handleMenuClick:a=>{const t=C[a];if(t.checked=!t.checked,t.checked)l.push(t.value);else{const a=l.indexOf(t.value);a>-1&&l.splice(a,1)}o.value=!!l.length&&l.length<C.length,c.value=C.length===l.length},onCheckAllChange:()=>{l.length=0,C.forEach((a=>{a.checked=!c.value,a.checked&&l.push(a.value)})),c.value=!c.value,o.value=!1}}}}),j=_("data-v-9933b838");D("data-v-9933b838");var x={class:"selected-value"},P=f(" 全选 ");F();var V=j(((a,t)=>{const n=h("a-checkbox"),s=h("a-menu-item"),e=h("a-divider"),p=h("a-menu"),l=h("a-dropdown");return A(),g(l,{visible:a.visible,"onUpdate:visible":t[2]||(t[2]=t=>a.visible=t),trigger:["click"],placement:"bottomRight",onVisibleChange:a.onChange},{overlay:j((()=>[m(p,{class:"multi-select-menu",style:{minWidth:a.compWidth}},{default:j((()=>[(A(!0),g(v,null,B(a.selectOption,((t,e)=>(A(),g(s,{key:e},{default:j((()=>[m(n,{style:{width:"100%"},checked:t.checked,onClick:t=>a.handleMenuClick(e)},{default:j((()=>[f(y(t.title),1)])),_:2},1032,["checked","onClick"])])),_:2},1024)))),128)),m(e,{style:{margin:"2px 0"}}),m(s,null,{default:j((()=>[m(n,{indeterminate:a.indeterminate,checked:a.checkAll,onChange:a.onCheckAllChange},{default:j((()=>[P])),_:1},8,["indeterminate","checked","onChange"])])),_:1})])),_:1},8,["style"])])),default:j((()=>[m("a",{class:{"ant-select-selection ant-select-selection--single multi-select-selection":!0,"multi-select-focused":a.visible},style:{width:a.compWidth,display:"block"},onClick:t[1]||(t[1]=b((()=>{}),["prevent"]))},[m("div",x,y(a.selectData),1),(A(),g(S(a.$antIcons.DownOutlined),{class:"select-arrow"}))],6)])),_:1},8,["visible","onVisibleChange"])}));T.render=V;var z=T;z.install=a=>{a.component(z.name,z)};var I=z;var q,U=o((q=((a,t)=>{for(var n in t||(t={}))e.call(t,n)&&l(a,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&l(a,n,t[n]);return a})({},{name:"MultiSelect",title:"基本用法"}),t(q,n({setup(a){const t=[{title:"状态1",value:"0"},{title:"状态2",value:"1"},{title:"状态2",value:"2"}],n=a=>{console.log("value>>>>",a)};return(a,s)=>(A(),g(w(I),{"select-option":t,onChange:n}))}})))),W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U});const N=M('<h1 id="multiselect-下拉多选"><a class="header-anchor" href="#multiselect-下拉多选" aria-hidden="true">#</a> MultiSelect 下拉多选</h1><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MultiSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;hlzn-design-vue&#39;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">creatApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MultiSelect<span class="token punctuation">)</span>\n</code></pre></div><h2 id="demo"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2>',4),R=M('<h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>width</td><td><code>String</code></td><td><code>120px</code></td><td>宽度</td></tr><tr><td>defaultValue</td><td><code>String</code></td><td>-</td><td>默认值</td></tr><tr><td>defaultTitle</td><td><code>String</code></td><td>全部</td><td>默认标题</td></tr><tr><td>selectOption</td><td><code>Array&lt;optionModel&gt;</code></td><td><code>[]</code></td><td>选项对象</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>事件</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td><code>(value: string[])=&gt;void</code></td><td>选择改变事件,返回选中value</td></tr></tbody></table>',4),L='{"title":"MultiSelect 下拉多选","description":"","frontmatter":{"class":"multiSelect-doc"},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"props","slug":"props"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"zh-CN/components/multiSelect.md","lastUpdated":1627805155425}',$={};const G=Object.assign($,{setup:function(a){const t={"../../../src/packages/multiSelect/demo/demo0.vue":W};return(a,n)=>{const s=h("demo-wrapper");return A(),g("div",null,[N,m(s,{htmlStrs:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20%E7%BB%84%E4%BB%B6%E6%A0%87%E9%A2%98%E6%A1%86%20--%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20name%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&MultiSelect&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20title%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20%E7%BB%84%E4%BB%B6%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95%20--%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EMultiSelect%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aselect-option%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EstatusDic%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40change%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EhandleStatusChange%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EMultiSelect%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20MultiSelect%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&hlzn-design-vue%2FmultiSelect&%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20type%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20optionModel%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&hlzn-design-vue%2FmultiSelect%2Fsrc%2Ftyping&%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20statusDic%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20Array%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3EoptionModel%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20title%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&%E7%8A%B6%E6%80%811&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20value%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&0&%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20title%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&%E7%8A%B6%E6%80%812&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20value%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&1&%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20title%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&%E7%8A%B6%E6%80%812&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20value%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&2&%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EhandleStatusChange%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Evalue%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E&value%3E%3E%3E%3E&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20value%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStrs:"%3C!--%20%E7%BB%84%E4%BB%B6%E6%A0%87%E9%A2%98%E6%A1%86%20--%3E%0A%3Cscript%20lang%3D%22ts%22%3E%0Aexport%20default%20%7B%0A%20%20name%3A%20&MultiSelect&%2C%0A%20%20title%3A%20&%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95&%2C%0A%7D%0A%3C%2Fscript%3E%0A%0A%3C!--%20%E7%BB%84%E4%BB%B6%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95%20--%3E%0A%3Ctemplate%3E%0A%20%20%3CMultiSelect%0A%20%20%20%20%3Aselect-option%3D%22statusDic%22%0A%20%20%20%20%40change%3D%22handleStatusChange%22%0A%20%20%3E%3C%2FMultiSelect%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20MultiSelect%20from%20&hlzn-design-vue%2FmultiSelect&%0Aimport%20type%20%7B%20optionModel%20%7D%20from%20&hlzn-design-vue%2FmultiSelect%2Fsrc%2Ftyping&%0Aconst%20statusDic%3A%20Array%3CoptionModel%3E%20%3D%20%5B%0A%20%20%7B%20title%3A%20&%E7%8A%B6%E6%80%811&%2C%20value%3A%20&0&%20%7D%2C%0A%20%20%7B%20title%3A%20&%E7%8A%B6%E6%80%812&%2C%20value%3A%20&1&%20%7D%2C%0A%20%20%7B%20title%3A%20&%E7%8A%B6%E6%80%812&%2C%20value%3A%20&2&%20%7D%2C%0A%5D%0A%0Aconst%20handleStatusChange%20%3D%20(value%3A%20string)%20%3D%3E%20%7B%0A%20%20console.log(&value%3E%3E%3E%3E&%2C%20value)%0A%7D%0A%3C%2Fscript%3E%0A",src:"src/packages/multiSelect/demo",demos:w(t)},null,8,["demos"]),R])}}});export default G;export{L as __pageData};
