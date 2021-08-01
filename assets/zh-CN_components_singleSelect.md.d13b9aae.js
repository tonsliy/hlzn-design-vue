var a=Object.defineProperty,n=Object.defineProperties,s=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,o=(n,s,t)=>s in n?a(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t;import{e as l,G as c,r as E,f as C,h as u,a as i,c as r,F as D,k,d as F,n as d,q as A,s as g,b as h,v}from"./app.23790205.js";var m={width:{type:String,default:"120px"},defaultValue:{type:String,default:""},selectOption:{type:Array,require:!0,default:()=>[]}},B=l({name:"SingleSelect",components:{[c.name]:c,"a-select-option":c.Option},props:m,emits:["change"],setup:(a,{emit:n})=>({selectData:E(""),optionList:C((()=>a.selectOption)),handleChange:a=>{n("change",a)}})}),S=A("data-v-9ab280d6"),f=S(((a,n)=>{const s=u("a-select-option"),t=u("a-select");return i(),r(t,{value:a.selectData,"onUpdate:value":n[1]||(n[1]=n=>a.selectData=n),class:"select-comp","default-value":a.defaultValue,style:{width:a.width},"option-label-prop":"label",onChange:a.handleChange},{default:S((()=>[(i(!0),r(D,null,k(a.optionList,((a,n)=>(i(),r(s,{key:n,value:a.value,label:a.title,class:a.value?"option-menu-item":"cancel-option-menu-item"},{default:S((()=>[F(d(a.value?a.title:"取消选择"),1)])),_:2},1032,["value","label","class"])))),128))])),_:1},8,["value","default-value","style","onChange"])}));B.render=f;var y=B;y.install=a=>{a.component(y.name,y)};var _=y;var b,w=l((b=((a,n)=>{for(var s in n||(n={}))e.call(n,s)&&o(a,s,n[s]);if(t)for(var s of t(n))p.call(n,s)&&o(a,s,n[s]);return a})({},{name:"SingleSelect",title:"基本用法"}),n(b,s({setup(a){const n=[{title:"启用",value:"0"},{title:"禁用",value:"1"},{title:"全部状态",value:""}],s=a=>{console.log("value>>>>",a)};return(a,t)=>(i(),r(g(_),{"select-option":n,onChange:s}))}})))),O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const T=v('<h1 id="singleselect-下拉单选"><a class="header-anchor" href="#singleselect-下拉单选" aria-hidden="true">#</a> SingleSelect 下拉单选</h1><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> SingleSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;hlzn-design-vue&#39;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">creatApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>SingleSelect<span class="token punctuation">)</span>\n</code></pre></div><h2 id="demo"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2>',4),j=v('<h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>width</td><td><code>String</code></td><td><code>120px</code></td><td>宽度</td></tr><tr><td>defaultValue</td><td><code>String</code></td><td>-</td><td>默认值</td></tr><tr><td>selectOption</td><td><code>Array&lt;optionModel&gt;</code></td><td><code>[]</code></td><td>选项对象,当value为空时，表示该项为‘取消选择’</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>事件</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td><code>(value: string)=&gt;void</code></td><td>选择改变事件,返回选中value</td></tr></tbody></table>',4),P='{"title":"SingleSelect 下拉单选","description":"","frontmatter":{"class":"singleSelect-doc"},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Demo","slug":"demo"},{"level":2,"title":"props","slug":"props"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"zh-CN/components/singleSelect.md","lastUpdated":1627805155425}',V={};const z=Object.assign(V,{setup:function(a){const n={"../../../src/packages/singleSelect/demo/demo0.vue":O};return(a,s)=>{const t=u("demo-wrapper");return i(),r("div",null,[T,h(t,{htmlStrs:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20%E7%BB%84%E4%BB%B6%E6%A0%87%E9%A2%98%E6%A1%86%20--%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20name%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&SingleSelect&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20title%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20%E7%BB%84%E4%BB%B6%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95%20--%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3ESingleSelect%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aselect-option%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EstatusDic%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40change%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EhandleStatusChange%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3ESingleSelect%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20SingleSelect%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&hlzn-design-vue%2FsingleSelect&%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20type%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20optionModel%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&hlzn-design-vue%2FsingleSelect%2Fsrc%2Ftyping&%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20statusDic%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20Array%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3EoptionModel%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20title%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&%E5%90%AF%E7%94%A8&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20value%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&0&%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20title%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&%E7%A6%81%E7%94%A8&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20value%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&1&%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20title%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&%E5%85%A8%E9%83%A8%E7%8A%B6%E6%80%81&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20value%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&&%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EhandleStatusChange%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Evalue%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E&value%3E%3E%3E%3E&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20value%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStrs:"%3C!--%20%E7%BB%84%E4%BB%B6%E6%A0%87%E9%A2%98%E6%A1%86%20--%3E%0A%3Cscript%20lang%3D%22ts%22%3E%0Aexport%20default%20%7B%0A%20%20name%3A%20&SingleSelect&%2C%0A%20%20title%3A%20&%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95&%2C%0A%7D%0A%3C%2Fscript%3E%0A%0A%3C!--%20%E7%BB%84%E4%BB%B6%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95%20--%3E%0A%3Ctemplate%3E%0A%20%20%3CSingleSelect%0A%20%20%20%20%3Aselect-option%3D%22statusDic%22%0A%20%20%20%20%40change%3D%22handleStatusChange%22%0A%20%20%3E%3C%2FSingleSelect%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20SingleSelect%20from%20&hlzn-design-vue%2FsingleSelect&%0Aimport%20type%20%7B%20optionModel%20%7D%20from%20&hlzn-design-vue%2FsingleSelect%2Fsrc%2Ftyping&%0A%0Aconst%20statusDic%3A%20Array%3CoptionModel%3E%20%3D%20%5B%0A%20%20%7B%20title%3A%20&%E5%90%AF%E7%94%A8&%2C%20value%3A%20&0&%20%7D%2C%0A%20%20%7B%20title%3A%20&%E7%A6%81%E7%94%A8&%2C%20value%3A%20&1&%20%7D%2C%0A%20%20%7B%20title%3A%20&%E5%85%A8%E9%83%A8%E7%8A%B6%E6%80%81&%2C%20value%3A%20&&%20%7D%2C%0A%5D%0A%0Aconst%20handleStatusChange%20%3D%20(value%3A%20string)%20%3D%3E%20%7B%0A%20%20console.log(&value%3E%3E%3E%3E&%2C%20value)%0A%7D%0A%3C%2Fscript%3E%0A",src:"src/packages/singleSelect/demo",demos:g(n)},null,8,["demos"]),j])}}});export default z;export{P as __pageData};
