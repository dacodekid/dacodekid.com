import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.a10d7acc.js";const b=JSON.parse('{"title":"Max Multiple","description":"","frontmatter":{"title":"Max Multiple"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/the-core/intro-gates/max-multiple/index.md","filePath":"content/snippet/code-signal/arcade/the-core/intro-gates/max-multiple/index.md"}'),l={name:"content/snippet/code-signal/arcade/the-core/intro-gates/max-multiple/index.md"},o=n(`<h1 id="max-multiple" tabindex="-1">Max Multiple <a class="header-anchor" href="#max-multiple" aria-label="Permalink to &quot;Max Multiple&quot;">​</a></h1><p>Given a <code>divisor</code> and a <code>bound</code>, find the largest integer <code>N</code> such that:</p><ul><li><code>N</code> is divisible by <code>divisor</code>.</li><li><code>N</code> is less than or equal to <code>bound</code>.</li><li><code>N</code> is greater than <code>0</code>.</li></ul><p>It is guaranteed that such a number exists.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>For <code>divisor = 3</code> and <code>bound = 10</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">max_multiple(divisor, bound) = 9</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">max_multiple(divisor, bound) = 9</span></span></code></pre></div><p>The largest integer divisible by <code>3</code> and not larger than <code>10</code> is <code>9</code>.</p><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-RTJFv" id="tab-8hMrpFa" checked="checked"><label for="tab-8hMrpFa">PYTHON</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">max_multiple</span><span style="color:#E1E4E8;">(divisor, bound):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (bound </span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;"> divisor) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> divisor</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(max_multiple(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">max_multiple</span><span style="color:#24292E;">(divisor, bound):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (bound </span><span style="color:#D73A49;">//</span><span style="color:#24292E;"> divisor) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> divisor</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(max_multiple(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div></div>`,10),p=[o];function t(i,c,r,d,u,h){return a(),e("div",null,p)}const y=s(l,[["render",t]]);export{b as __pageData,y as default};