import{_ as s,o as i,c as a,R as n}from"./chunks/framework.eQfkPAEx.js";const b=JSON.parse('{"title":"Is Digit","description":"","frontmatter":{"title":"Is Digit"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/intro/rainbow-of-clarity/is-digit/index.md","filePath":"content/snippet/code-signal/arcade/intro/rainbow-of-clarity/is-digit/index.md"}'),e={name:"content/snippet/code-signal/arcade/intro/rainbow-of-clarity/is-digit/index.md"},t=n(`<h1 id="is-digit" tabindex="-1">Is Digit <a class="header-anchor" href="#is-digit" aria-label="Permalink to &quot;Is Digit&quot;">​</a></h1><p>Determine if the given character is a digit or not.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><ul><li><p>For <code>symbol = &#39;0&#39;</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>is_digit(symbol) = true</span></span></code></pre></div></li><li><p>For <code>symbol = &#39;-&#39;</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>is_digit(symbol) = false</span></span></code></pre></div></li></ul><p>Input/Output</p><ul><li><p><strong>[input] char symbol</strong></p><p>A character which is either a digit or not.</p><p><em>Guaranteed constraints:</em><code>Given symbol is from ASCII table.</code></p></li></ul><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-oLj5a" id="tab-P0TxPi0" checked="checked"><label for="tab-P0TxPi0">PYTHON</label><input type="radio" name="group-oLj5a" id="tab-BoqrptI"><label for="tab-BoqrptI">JAVASCRIPT</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> is_digit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(symbol):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> symbol.isdigit()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(is_digit(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// read the python version of this snippet from this folder</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// and convert it to javascript</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isDigit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isNaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(symbol);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div></div>`,8),l=[t];function p(r,o,d,h,c,k){return i(),a("div",null,l)}const g=s(e,[["render",p]]);export{b as __pageData,g as default};