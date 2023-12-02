import{_ as i,o as s,c as a,R as t}from"./chunks/framework.eQfkPAEx.js";const k=JSON.parse('{"title":"First Digit","description":"","frontmatter":{"title":"First Digit"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/intro/diving-deeper/first-digit/index.md","filePath":"content/snippet/code-signal/arcade/intro/diving-deeper/first-digit/index.md"}'),n={name:"content/snippet/code-signal/arcade/intro/diving-deeper/first-digit/index.md"},e=t(`<h1 id="first-digit" tabindex="-1">First Digit <a class="header-anchor" href="#first-digit" aria-label="Permalink to &quot;First Digit&quot;">​</a></h1><p>Find the leftmost digit that occurs in a given string.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><ul><li>For <code>inputString = &quot;var_1__Int&quot;</code>, the output should be<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>first_digit(inputString) = &#39;1&#39;</span></span></code></pre></div></li><li>For <code>inputString = &quot;q2q-q&quot;</code>, the output should be<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>first_digit(inputString) = &#39;2&#39;</span></span></code></pre></div></li><li>For <code>inputString = &quot;0ss&quot;</code>, the output should be<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>first_digit(inputString) = &#39;0&#39;</span></span></code></pre></div></li></ul><h2 id="input-output" tabindex="-1">Input/Output <a class="header-anchor" href="#input-output" aria-label="Permalink to &quot;Input/Output&quot;">​</a></h2><ul><li><p><strong>[input] string inputString</strong></p><p>A string containing at least one digit.</p></li></ul><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-R_wa8" id="tab-66vetBm" checked="checked"><label for="tab-66vetBm">PYTHON</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> first_digit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(input_string):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> input_string:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i.isdigit():</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(first_digit(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Abc1d2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div></div>`,8),p=[e];function l(r,d,o,h,c,u){return s(),a("div",null,p)}const b=i(n,[["render",l]]);export{k as __pageData,b as default};
