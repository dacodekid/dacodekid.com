import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.f4862610.js";const g=JSON.parse('{"title":"Floating Point Comparison","description":"","frontmatter":{"title":"Floating Point Comparison"},"headers":[],"relativePath":"content/snippet/codewars/8-kyu/floating-point-comparison/index.md","filePath":"content/snippet/codewars/8-kyu/floating-point-comparison/index.md"}'),l={name:"content/snippet/codewars/8-kyu/floating-point-comparison/index.md"},o=e(`<h1 id="floating-point-comparison" tabindex="-1">Floating Point Comparison <a class="header-anchor" href="#floating-point-comparison" aria-label="Permalink to &quot;Floating Point Comparison&quot;">​</a></h1><p><code>float</code>s have limited precision and are unable to exactly represent some values. Rounding errors accumulate with repeated computation, and numbers expected to be equal often differ slightly.</p><p>As a result, it is common advice to not use an exact equality comparison (<code>==</code>) with floats.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&gt;&gt;&gt; a, b, c = 1e-9, 1e-9, 3.33e7</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt;&gt;&gt; (a + b) + c == a + (b + c)</span></span>
<span class="line"><span style="color:#e1e4e8;">False</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&gt;&gt;&gt; 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 == 1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">False</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">a, b, c = 1e-9, 1e-9, 3.33e7;</span></span>
<span class="line"><span style="color:#e1e4e8;">(a + b) + c == a + (b + c);</span></span>
<span class="line"><span style="color:#e1e4e8;">--&gt; false</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 == 1.0;</span></span>
<span class="line"><span style="color:#e1e4e8;">--&gt; false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&gt;&gt;&gt; a, b, c = 1e-9, 1e-9, 3.33e7</span></span>
<span class="line"><span style="color:#24292e;">&gt;&gt;&gt; (a + b) + c == a + (b + c)</span></span>
<span class="line"><span style="color:#24292e;">False</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&gt;&gt;&gt; 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 == 1.0</span></span>
<span class="line"><span style="color:#24292e;">False</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">a, b, c = 1e-9, 1e-9, 3.33e7;</span></span>
<span class="line"><span style="color:#24292e;">(a + b) + c == a + (b + c);</span></span>
<span class="line"><span style="color:#24292e;">--&gt; false</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1 == 1.0;</span></span>
<span class="line"><span style="color:#24292e;">--&gt; false</span></span></code></pre></div><p>The solution is to check if a computed value is close to an expected value, without requiring them to be exactly equal. It seems very easy, but many katas test float results the wrong way.</p><h2 id="task" tabindex="-1">Task <a class="header-anchor" href="#task" aria-label="Permalink to &quot;Task&quot;">​</a></h2><p>You have:</p><ul><li><p>a float value that comes from a computation and may have accumulated errors up to ±0.001</p></li><li><p>a reference value</p></li><li><p>a function <code>approx_equals</code> that compare the two values taking into account loss of precision; the function should return <code>True</code> if and only if the two values are close to each other, the maximum allowed difference is <code>0.001</code></p></li></ul><p>The function is bugged and sometimes returns wrong results.</p><p>Your task is to correct the bug.</p><h2 id="note" tabindex="-1">Note <a class="header-anchor" href="#note" aria-label="Permalink to &quot;Note&quot;">​</a></h2><p>This kata uses fixed tolerance for simplicity reasons, but usually relative tolerance is better. Fixed tolerance is useful for comparisons near zero or when the magnitude of the values is known.</p><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hNSei" id="tab-fSqcgLZ" checked="checked"><label for="tab-fSqcgLZ">PYTHON</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">floating_point_comparison</span><span style="color:#E1E4E8;">(a, b):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">abs</span><span style="color:#E1E4E8;">(a </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> b) </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.001</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(floating_point_comparison(</span><span style="color:#79B8FF;">1456.3652</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1456.3641</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">floating_point_comparison</span><span style="color:#24292E;">(a, b):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">abs</span><span style="color:#24292E;">(a </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> b) </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.001</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(floating_point_comparison(</span><span style="color:#005CC5;">1456.3652</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1456.3641</span><span style="color:#24292E;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div></div>`,14),p=[o];function t(c,i,r,d,u,y){return a(),n("div",null,p)}const m=s(l,[["render",t]]);export{g as __pageData,m as default};