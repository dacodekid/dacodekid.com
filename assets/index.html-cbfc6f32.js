import{_ as i,M as t,p as l,q as r,N as n,V as o,a1 as u,R as e,t as a}from"./framework-e03faf0e.js";const p={},d=u(`<h1 id="floating-point-comparison" tabindex="-1"><a class="header-anchor" href="#floating-point-comparison" aria-hidden="true">#</a> Floating Point Comparison</h1><p><code>float</code>s have limited precision and are unable to exactly represent some values. Rounding errors accumulate with repeated computation, and numbers expected to be equal often differ slightly.</p><p>As a result, it is common advice to not use an exact equality comparison (<code>==</code>) with floats.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; a, b, c = 1e-9, 1e-9, 3.33e7
&gt;&gt;&gt; (a + b) + c == a + (b + c)
False

&gt;&gt;&gt; 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 == 1.0
False


a, b, c = 1e-9, 1e-9, 3.33e7;
(a + b) + c == a + (b + c);
--&gt; false

0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 == 1.0;
--&gt; false

</code></pre></div><p>The solution is to check if a computed value is close to an expected value, without requiring them to be exactly equal. It seems very easy, but many katas test float results the wrong way.</p><h2 id="task" tabindex="-1"><a class="header-anchor" href="#task" aria-hidden="true">#</a> Task</h2><p>You have:</p><ul><li><p>a float value that comes from a computation and may have accumulated errors up to ±0.001</p></li><li><p>a reference value</p></li><li><p>a function <code>approx_equals</code> that compare the two values taking into account loss of precision; the function should return <code>True</code> if and only if the two values are close to each other, the maximum allowed difference is <code>0.001</code></p></li></ul><p>The function is bugged and sometimes returns wrong results.</p><p>Your task is to correct the bug.</p><h2 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h2><p>This kata uses fixed tolerance for simplicity reasons, but usually relative tolerance is better. Fixed tolerance is useful for comparisons near zero or when the magnitude of the values is known.</p><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2>`,13),h=e("div",{class:"language-python line-numbers-mode","data-ext":"py"},[e("pre",{class:"language-python"},[e("code",null,[e("span",{class:"token keyword"},"def"),a(),e("span",{class:"token function"},"floating_point_comparison"),e("span",{class:"token punctuation"},"("),a("a"),e("span",{class:"token punctuation"},","),a(" b"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},":"),a(`
    `),e("span",{class:"token keyword"},"return"),a(),e("span",{class:"token builtin"},"abs"),e("span",{class:"token punctuation"},"("),a("a "),e("span",{class:"token operator"},"-"),a(" b"),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token operator"},"<="),a(),e("span",{class:"token number"},"0.001"),a(`


`),e("span",{class:"token keyword"},"print"),e("span",{class:"token punctuation"},"("),a("floating_point_comparison"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1456.3652"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token number"},"1456.3641"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),a(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function m(f,k){const s=t("CodeGroupItem"),c=t("CodeGroup");return l(),r("div",null,[d,n(c,null,{default:o(()=>[n(s,{title:"PYTHON"},{default:o(()=>[h]),_:1})]),_:1})])}const b=i(p,[["render",m],["__file","index.html.vue"]]);export{b as default};
