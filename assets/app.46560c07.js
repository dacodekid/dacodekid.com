import{_ as f,C as p,o as _,b as h,w as A,W as y,H as C,a3 as g,a4 as P,X as c,a5 as u,s as r,a6 as v,a7 as R,a8 as w,a9 as E,aa as $,ab as b,ac as M,ad as O,ae as x,af as D,d as L,u as T,j as V,y as j,ag as S,ah as B,ai as F}from"./chunks/framework.b2e84fab.js";import{t as i}from"./chunks/theme.23a3f5aa.js";const I=y(()=>c(()=>import("./chunks/MermaidRender.14ed6baf.js"),["assets/chunks/MermaidRender.14ed6baf.js","assets/chunks/framework.b2e84fab.js"])),W={components:{Mermaid:I},inheritAttrs:!1};function k(e,t,a,n,s,q){const d=p("Mermaid"),m=p("ClientOnly");return _(),h(m,null,{default:A(()=>[C(d,g(P(e.$attrs)),null,16)]),_:1})}const H=f(W,[["render",k]]),N={extends:i,Layout:()=>u(i.Layout,null,{}),enhanceApp({app:e}){e.component("MermaidRenderWrap",H)}};function l(e){if(e.extends){const t=l(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=l(N),z=L({name:"VitePressApp",setup(){const{site:e}=T();return V(()=>{j(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),S(),B(),F(),o.setup&&o.setup(),()=>u(o.Layout)}});async function G(){const e=X(),t=U();t.provide(R,e);const a=w(e.route);return t.provide(E,a),t.component("Content",$),t.component("ClientOnly",b),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:M}),{app:t,router:e,data:a}}function U(){return O(z)}function X(){let e=r,t;return x(a=>{let n=D(a),s=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),s=c(()=>import(n),[])),r&&(e=!1),s},o.NotFound)}r&&G().then(({app:e,router:t,data:a})=>{t.go().then(()=>{v(t.route,a.site),e.mount("#app")})});export{G as createApp};