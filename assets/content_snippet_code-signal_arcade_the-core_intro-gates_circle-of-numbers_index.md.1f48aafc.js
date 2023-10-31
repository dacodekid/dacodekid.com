import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.b2e84fab.js";const u=JSON.parse('{"title":"Circle of Numbers","description":"","frontmatter":{"title":"Circle of Numbers"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/the-core/intro-gates/circle-of-numbers/index.md","filePath":"content/snippet/code-signal/arcade/the-core/intro-gates/circle-of-numbers/index.md"}'),l={name:"content/snippet/code-signal/arcade/the-core/intro-gates/circle-of-numbers/index.md"},o=e(`<h1 id="circle-of-numbers" tabindex="-1">Circle of Numbers <a class="header-anchor" href="#circle-of-numbers" aria-label="Permalink to &quot;Circle of Numbers&quot;">​</a></h1><p>Consider integer numbers from <code>0</code> to <code>n - 1</code> written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that <code>0</code> and <code>n - 1</code> are neighboring, too).</p><p>Given <code>n</code> and <code>firstNumber</code>, find the number which is written in the radially opposite position to <code>firstNumber</code>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>For <code>n = 10</code> and <code>firstNumber = 2</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">circle_of_numbers(n, firstNumber) = 7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">circle_of_numbers(n, firstNumber) = 7</span></span></code></pre></div><table><thead><tr><th style="text-align:center;"><img src="https://codesignal.s3.amazonaws.com/tasks/circleOfNumbers/img/example.png?_tm=1624652347469" alt=""></th></tr></thead><tbody><tr><td style="text-align:center;"><em>Image Credit: CodeSignal</em></td></tr></tbody></table><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-nlyoM" id="tab-Gdi0LVV" checked="checked"><label for="tab-Gdi0LVV">PYTHON</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">circle_of_numbers</span><span style="color:#E1E4E8;">(n, firstNumber):</span></span>
<span class="line"><span style="color:#E1E4E8;">    neighbour </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">(firstNumber </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> (n</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> neighbour </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> n:</span></span>
<span class="line"><span style="color:#E1E4E8;">        neighbour </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">(firstNumber </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> (n</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">elif</span><span style="color:#E1E4E8;"> neighbour </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> n:</span></span>
<span class="line"><span style="color:#E1E4E8;">        neighbour </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> neighbour</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(circle_of_numbers(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">circle_of_numbers</span><span style="color:#24292E;">(n, firstNumber):</span></span>
<span class="line"><span style="color:#24292E;">    neighbour </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">int</span><span style="color:#24292E;">(firstNumber </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> (n</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> neighbour </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> n:</span></span>
<span class="line"><span style="color:#24292E;">        neighbour </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">int</span><span style="color:#24292E;">(firstNumber </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> (n</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">elif</span><span style="color:#24292E;"> neighbour </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> n:</span></span>
<span class="line"><span style="color:#24292E;">        neighbour </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> neighbour</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(circle_of_numbers(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></div></div>`,9),p=[o];function r(t,c,i,d,y,E){return n(),a("div",null,p)}const m=s(l,[["render",r]]);export{u as __pageData,m as default};
