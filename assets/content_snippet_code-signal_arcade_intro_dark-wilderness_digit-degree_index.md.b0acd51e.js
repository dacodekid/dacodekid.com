import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b2e84fab.js";const u=JSON.parse('{"title":"Digit Degree","description":"","frontmatter":{"title":"Digit Degree"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/intro/dark-wilderness/digit-degree/index.md","filePath":"content/snippet/code-signal/arcade/intro/dark-wilderness/digit-degree/index.md"}'),p={name:"content/snippet/code-signal/arcade/intro/dark-wilderness/digit-degree/index.md"},e=l(`<h1 id="digit-degree" tabindex="-1">Digit Degree <a class="header-anchor" href="#digit-degree" aria-label="Permalink to &quot;Digit Degree&quot;">​</a></h1><p>Let&#39;s define <em>digit degree</em> of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.</p><p>Given an integer, find its digit degree.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><ul><li><p>For <code>n = 5</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">digit_degree(n) = 0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">digit_degree(n) = 0</span></span></code></pre></div></li><li><p>For <code>n = 100</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">digit_degree(n) = 1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">digit_degree(n) = 1</span></span></code></pre></div><p><code>1 + 0 + 0 = 1</code>.</p></li><li><p>For <code>n = 91</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">digit_degree(n) = 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">digit_degree(n) = 2</span></span></code></pre></div><p><code>9 + 1 = 10</code> -&gt; <code>1 + 0 = 1</code>.</p></li></ul><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-3Xz9n" id="tab-uw1eAdA" checked="checked"><label for="tab-uw1eAdA">PYTHON</label><input type="radio" name="group-3Xz9n" id="tab-KGyG6Ef"><label for="tab-KGyG6Ef">JAVASCRIPT</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">digit_degree</span><span style="color:#E1E4E8;">(n):</span></span>
<span class="line"><span style="color:#E1E4E8;">    degree </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">        n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sum</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">list</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">, (</span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">(n).strip()))))</span></span>
<span class="line"><span style="color:#E1E4E8;">        degree </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> degree</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(digit_degree(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(digit_degree(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(digit_degree(</span><span style="color:#79B8FF;">91</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">digit_degree</span><span style="color:#24292E;">(n):</span></span>
<span class="line"><span style="color:#24292E;">    degree </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(n </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">        n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sum</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">list</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">map</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">int</span><span style="color:#24292E;">, (</span><span style="color:#005CC5;">str</span><span style="color:#24292E;">(n).strip()))))</span></span>
<span class="line"><span style="color:#24292E;">        degree </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> degree</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(digit_degree(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(digit_degree(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(digit_degree(</span><span style="color:#005CC5;">91</span><span style="color:#24292E;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">digitDegree</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> n</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(a) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(b));</span></span>
<span class="line"><span style="color:#E1E4E8;">    count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> count;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">digitDegree</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">digitDegree</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">digitDegree</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">91</span><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">digitDegree</span><span style="color:#24292E;">(</span><span style="color:#E36209;">n</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (n </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> n</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">reduce</span><span style="color:#24292E;">((</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseInt</span><span style="color:#24292E;">(a) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseInt</span><span style="color:#24292E;">(b));</span></span>
<span class="line"><span style="color:#24292E;">    count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> count;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">digitDegree</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">digitDegree</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">digitDegree</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">91</span><span style="color:#24292E;">));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></div></div>`,7),o=[e];function t(c,r,i,E,y,d){return n(),a("div",null,o)}const b=s(p,[["render",t]]);export{u as __pageData,b as default};