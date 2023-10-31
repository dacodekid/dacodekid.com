import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.b2e84fab.js";const u=JSON.parse('{"title":"Deposit Profit","description":"","frontmatter":{"title":"Deposit Profit"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/intro/through-the-fog/deposit-profit/index.md","filePath":"content/snippet/code-signal/arcade/intro/through-the-fog/deposit-profit/index.md"}'),p={name:"content/snippet/code-signal/arcade/intro/through-the-fog/deposit-profit/index.md"},o=l(`<h1 id="deposit-profit" tabindex="-1">Deposit Profit <a class="header-anchor" href="#deposit-profit" aria-label="Permalink to &quot;Deposit Profit&quot;">​</a></h1><p>You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth <code>rate</code>. With the assumption that you don&#39;t make any additional deposits, find out how long it would take for your balance to pass a specific <code>threshold</code>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>For <code>deposit = 100</code>, <code>rate = 20</code>, and <code>threshold = 170</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">deposit_profit(deposit, rate, threshold) = 3\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">deposit_profit(deposit, rate, threshold) = 3\`</span></span></code></pre></div><p>Each year the amount of money in your account increases by <code>20%</code>. So throughout the years, your balance would be:</p><ul><li>year 0: <code>100</code>;</li><li>year 1: <code>120</code>;</li><li>year 2: <code>144</code>;</li><li>year 3: <code>172.8</code>.</li></ul><p>Thus, it will take <code>3</code> years for your balance to pass the <code>threshold</code>, so the answer is <code>3</code>.</p><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-BXAkr" id="tab-eW8ihbc" checked="checked"><label for="tab-eW8ihbc">PYTHON</label><input type="radio" name="group-BXAkr" id="tab-BUlg4Wi"><label for="tab-BUlg4Wi">JAVASCRIPT</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">deposit_profit</span><span style="color:#E1E4E8;">(deposit, rate, threshold):</span></span>
<span class="line"><span style="color:#E1E4E8;">    years </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    money </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> deposit</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> money </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> threshold:</span></span>
<span class="line"><span style="color:#E1E4E8;">        years </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">        money </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> money </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> rate </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> years</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(deposit_profit(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">170</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">deposit_profit</span><span style="color:#24292E;">(deposit, rate, threshold):</span></span>
<span class="line"><span style="color:#24292E;">    years </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    money </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> deposit</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> money </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> threshold:</span></span>
<span class="line"><span style="color:#24292E;">        years </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        money </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> money </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> rate </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> years</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(deposit_profit(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">170</span><span style="color:#24292E;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">depositProfit</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">deposit</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">rate</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">threshold</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> years </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> deposit;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (current </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> threshold) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    current </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> (current </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> rate) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    years</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> years;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">depositProfit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">170</span><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">depositProfit</span><span style="color:#24292E;">(</span><span style="color:#E36209;">deposit</span><span style="color:#24292E;">, </span><span style="color:#E36209;">rate</span><span style="color:#24292E;">, </span><span style="color:#E36209;">threshold</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> years </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> deposit;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (current </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> threshold) {</span></span>
<span class="line"><span style="color:#24292E;">    current </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> (current </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> rate) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    years</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> years;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">depositProfit</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">170</span><span style="color:#24292E;">));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></div></div>`,10),e=[o];function t(r,c,i,y,E,d){return a(),n("div",null,e)}const b=s(p,[["render",t]]);export{u as __pageData,b as default};
