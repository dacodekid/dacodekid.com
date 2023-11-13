import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.f4862610.js";const h=JSON.parse('{"title":"Valid Time","description":"","frontmatter":{"title":"Valid Time"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/intro/land-of-logic/valid-time/index.md","filePath":"content/snippet/code-signal/arcade/intro/land-of-logic/valid-time/index.md"}'),l={name:"content/snippet/code-signal/arcade/intro/land-of-logic/valid-time/index.md"},p=e(`<h1 id="valid-time" tabindex="-1">Valid Time <a class="header-anchor" href="#valid-time" aria-label="Permalink to &quot;Valid Time&quot;">​</a></h1><p>Check if the given string is a correct time representation of the 24-hour clock.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><ul><li><p>For <code>time = &quot;13:58&quot;</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">valid_time(time) = true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">valid_time(time) = true</span></span></code></pre></div></li><li><p>For <code>time = &quot;25:51&quot;</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">valid_time(time) = false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">valid_time(time) = false</span></span></code></pre></div></li><li><p>For <code>time = &quot;02:76&quot;</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">valid_time(time) = false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">valid_time(time) = false</span></span></code></pre></div></li></ul><h2 id="input-output" tabindex="-1">Input/Output <a class="header-anchor" href="#input-output" aria-label="Permalink to &quot;Input/Output&quot;">​</a></h2><ul><li><p><strong>[input] string time</strong></p><p>A string representing time in <code>HH:MM</code> format. It is guaranteed that the first two characters, as well as the last two characters, are digits.</p></li></ul><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-GPtBN" id="tab-LVdXSV2" checked="checked"><label for="tab-LVdXSV2">PYTHON</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">valid_time</span><span style="color:#E1E4E8;">(time):</span></span>
<span class="line"><span style="color:#E1E4E8;">    hh, mm </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">(t) </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> t </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> time.split(</span><span style="color:#9ECBFF;">&#39;:&#39;</span><span style="color:#E1E4E8;">)]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> hh </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">24</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> mm </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">60</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(valid_time(</span><span style="color:#9ECBFF;">&#39;24:59&#39;</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">valid_time</span><span style="color:#24292E;">(time):</span></span>
<span class="line"><span style="color:#24292E;">    hh, mm </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">int</span><span style="color:#24292E;">(t) </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> t </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> time.split(</span><span style="color:#032F62;">&#39;:&#39;</span><span style="color:#24292E;">)]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> hh </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">24</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> mm </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">60</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(valid_time(</span><span style="color:#032F62;">&#39;24:59&#39;</span><span style="color:#24292E;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div></div>`,8),o=[p];function t(i,c,r,d,y,u){return a(),n("div",null,o)}const m=s(l,[["render",t]]);export{h as __pageData,m as default};