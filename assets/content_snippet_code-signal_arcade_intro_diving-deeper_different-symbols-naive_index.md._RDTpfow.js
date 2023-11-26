import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.QBCT-Upj.js";const u=JSON.parse('{"title":"Different Symbols Naive","description":"","frontmatter":{"title":"Different Symbols Naive"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/intro/diving-deeper/different-symbols-naive/index.md","filePath":"content/snippet/code-signal/arcade/intro/diving-deeper/different-symbols-naive/index.md"}'),l={name:"content/snippet/code-signal/arcade/intro/diving-deeper/different-symbols-naive/index.md"},p=e(`<h1 id="different-symbols-naive" tabindex="-1">Different Symbols Naive <a class="header-anchor" href="#different-symbols-naive" aria-label="Permalink to &quot;Different Symbols Naive&quot;">​</a></h1><p>Given a string, find the number of different characters in it.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>For <code>s = &quot;cabca&quot;</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">different_symbols_naive(s) = 3</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">different_symbols_naive(s) = 3</span></span></code></pre></div><p>There are <code>3</code> different characters <code>a</code>, <code>b</code> and <code>c</code>.</p><h2 id="input-output" tabindex="-1">Input/Output <a class="header-anchor" href="#input-output" aria-label="Permalink to &quot;Input/Output&quot;">​</a></h2><ul><li><strong>[input] string s</strong> A string of lowercase English letters.</li></ul><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-syKJa" id="tab-bCjCMea" checked="checked"><label for="tab-bCjCMea">PYTHON</label><input type="radio" name="group-syKJa" id="tab-TrWJ2MA"><label for="tab-TrWJ2MA">JAVASCRIPT</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">different_symbols_naive</span><span style="color:#E1E4E8;">(s):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;">(s))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(different_symbols_naive(</span><span style="color:#9ECBFF;">&#39;cabca&#39;</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">different_symbols_naive</span><span style="color:#24292E;">(s):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">set</span><span style="color:#24292E;">(s))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(different_symbols_naive(</span><span style="color:#032F62;">&#39;cabca&#39;</span><span style="color:#24292E;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">differentSymbolsNaive</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Set</span><span style="color:#E1E4E8;">(s).size;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">differentSymbolsNaive</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cabca&#39;</span><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">differentSymbolsNaive</span><span style="color:#24292E;">(</span><span style="color:#E36209;">s</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Set</span><span style="color:#24292E;">(s).size;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">differentSymbolsNaive</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;cabca&#39;</span><span style="color:#24292E;">));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div></div>`,10),o=[p];function t(r,c,i,d,y,E){return a(),n("div",null,o)}const f=s(l,[["render",t]]);export{u as __pageData,f as default};