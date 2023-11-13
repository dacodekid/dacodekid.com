import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.f4862610.js";const m=JSON.parse('{"title":"Absolute Values Sum Minimization","description":"","frontmatter":{"title":"Absolute Values Sum Minimization"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/intro/through-the-fog/absolute-values-sum-minimization/index.md","filePath":"content/snippet/code-signal/arcade/intro/through-the-fog/absolute-values-sum-minimization/index.md"}'),o={name:"content/snippet/code-signal/arcade/intro/through-the-fog/absolute-values-sum-minimization/index.md"},p=l(`<h1 id="absolute-values-sum-minimization" tabindex="-1">Absolute Values Sum Minimization <a class="header-anchor" href="#absolute-values-sum-minimization" aria-label="Permalink to &quot;Absolute Values Sum Minimization&quot;">​</a></h1><p>Given a sorted array of integers <code>a</code>, your task is to determine which element of <code>a</code> is <em>closest</em> to all other values of <code>a</code>. In other words, find the element <code>x</code> in <code>a</code>, which minimizes the following sum:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)</span></span></code></pre></div><p>(where <code>abs</code> denotes the absolute value)</p><p>If there are several possible answers, output the <em>smallest</em> one.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><ul><li><p>For <code>a = [2, 4, 7]</code>, the output should be <code>solution(a) = 4</code>.</p><ul><li>for <code>x = 2</code>, the value will be <code>abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7</code>.</li><li>for <code>x = 4</code>, the value will be <code>abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5</code>.</li><li>for <code>x = 7</code>, the value will be <code>abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8</code>.</li></ul><p>The lowest possible value is when <code>x = 4</code>, so the answer is <code>4</code>.</p></li><li><p>For <code>a = [2, 3]</code>, the output should be <code>solution(a) = 2</code>.</p><ul><li>for <code>x = 2</code>, the value will be <code>abs(2 - 2) + abs(3 - 2) = 1</code>.</li><li>for <code>x = 3</code>, the value will be <code>abs(2 - 3) + abs(3 - 3) = 1</code>.</li></ul><p>Because there is a tie, the smallest <code>x</code> between <code>x = 2</code> and <code>x = 3</code> is the answer.</p></li></ul><h2 id="input-output" tabindex="-1">Input/Output <a class="header-anchor" href="#input-output" aria-label="Permalink to &quot;Input/Output&quot;">​</a></h2><ul><li><p><strong>[input] array.integer a</strong></p><p>A non-empty array of integers, <code>sorted in ascending order</code>.</p></li></ul><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Cmr_V" id="tab-RddH_f5" checked="checked"><label for="tab-RddH_f5">PYTHON</label><input type="radio" name="group-Cmr_V" id="tab-6UXDOay"><label for="tab-6UXDOay">JAVASCRIPT</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">absolute_values_sum_minimization</span><span style="color:#E1E4E8;">(a):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> a[(</span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(a)</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(absolute_values_sum_minimization([</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">]))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">absolute_values_sum_minimization</span><span style="color:#24292E;">(a):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a[(</span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(a)</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">//</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(absolute_values_sum_minimization([</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">]))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">absoluteValuesSumMinimization</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> min </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Number.MAX_VALUE;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> minIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> a.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> a.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">abs</span><span style="color:#E1E4E8;">(a[i] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> a[j]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (sum </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> min) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      min </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sum;</span></span>
<span class="line"><span style="color:#E1E4E8;">      minIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> a[minIndex];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">absoluteValuesSumMinimization</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">]));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">absoluteValuesSumMinimization</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> min </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Number.MAX_VALUE;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> minIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> a.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> sum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> a.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      sum </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">abs</span><span style="color:#24292E;">(a[i] </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> a[j]);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (sum </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> min) {</span></span>
<span class="line"><span style="color:#24292E;">      min </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> sum;</span></span>
<span class="line"><span style="color:#24292E;">      minIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a[minIndex];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">absoluteValuesSumMinimization</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">]));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></div></div>`,11),e=[p];function t(c,r,i,E,y,u){return a(),n("div",null,e)}const b=s(o,[["render",t]]);export{m as __pageData,b as default};