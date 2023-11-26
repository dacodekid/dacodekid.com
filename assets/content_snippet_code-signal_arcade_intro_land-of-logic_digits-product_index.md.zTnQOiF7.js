import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.QBCT-Upj.js";const b=JSON.parse('{"title":"Digits Product","description":"","frontmatter":{"title":"Digits Product"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/intro/land-of-logic/digits-product/index.md","filePath":"content/snippet/code-signal/arcade/intro/land-of-logic/digits-product/index.md"}'),p={name:"content/snippet/code-signal/arcade/intro/land-of-logic/digits-product/index.md"},o=l(`<h1 id="digits-product" tabindex="-1">Digits Product <a class="header-anchor" href="#digits-product" aria-label="Permalink to &quot;Digits Product&quot;">​</a></h1><p>Given an integer <code>product</code>, find the <em>smallest</em> <strong>positive</strong> (i.e. greater than <code>0</code>) integer the product of whose digits is equal to <code>product</code>. If there is no such integer, return <code>-1</code> instead.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><ul><li><p>For <code>product = 12</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">digits_product(product) = 26</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">digits_product(product) = 26</span></span></code></pre></div></li><li><p>For <code>product = 19</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">digits_product(product) = -1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">digits_product(product) = -1</span></span></code></pre></div></li></ul><h2 id="input-output" tabindex="-1">Input/Output <a class="header-anchor" href="#input-output" aria-label="Permalink to &quot;Input/Output&quot;">​</a></h2><ul><li><p><strong>[input] integer product</strong></p><p><em>Guaranteed constraints:</em><code>0 ≤ product ≤ 600</code>.</p></li></ul><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-NMA8K" id="tab-_f-sunS" checked="checked"><label for="tab-_f-sunS">PYTHON</label><input type="radio" name="group-NMA8K" id="tab-bKApn3u"><label for="tab-bKApn3u">JAVASCRIPT</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">digits_product</span><span style="color:#E1E4E8;">(product):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># #smallest possible number for product 400 is 3558</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3559</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">        smallest </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> char </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;">(i):</span></span>
<span class="line"><span style="color:#E1E4E8;">            smallest </span><span style="color:#F97583;">*=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">(char)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(smallest </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> product):</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> i</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(digits_product(</span><span style="color:#79B8FF;">600</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">digits_product</span><span style="color:#24292E;">(product):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># #smallest possible number for product 400 is 3558</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3559</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">        smallest </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> char </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">str</span><span style="color:#24292E;">(i):</span></span>
<span class="line"><span style="color:#24292E;">            smallest </span><span style="color:#D73A49;">*=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">int</span><span style="color:#24292E;">(char)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(smallest </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> product):</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> i</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(digits_product(</span><span style="color:#005CC5;">600</span><span style="color:#24292E;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// def digits_product(product):</span></span>
<span class="line"><span style="color:#6A737D;">//     # #smallest possible number for product 400 is 3558</span></span>
<span class="line"><span style="color:#6A737D;">//     for i in range(1, 3559):</span></span>
<span class="line"><span style="color:#6A737D;">//         smallest = 1</span></span>
<span class="line"><span style="color:#6A737D;">//         for char in str(i):</span></span>
<span class="line"><span style="color:#6A737D;">//             smallest *= int(char)</span></span>
<span class="line"><span style="color:#6A737D;">//         if(smallest == product):</span></span>
<span class="line"><span style="color:#6A737D;">//             return i</span></span>
<span class="line"><span style="color:#6A737D;">//     return -1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// print(digits_product(600))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">digitsProduct</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">product</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// smallest possible number for product 400 is 3558</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3559</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> smallest </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> char </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> i.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      smallest </span><span style="color:#F97583;">*=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(char);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (smallest </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> product) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">digitsProduct</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">600</span><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// def digits_product(product):</span></span>
<span class="line"><span style="color:#6A737D;">//     # #smallest possible number for product 400 is 3558</span></span>
<span class="line"><span style="color:#6A737D;">//     for i in range(1, 3559):</span></span>
<span class="line"><span style="color:#6A737D;">//         smallest = 1</span></span>
<span class="line"><span style="color:#6A737D;">//         for char in str(i):</span></span>
<span class="line"><span style="color:#6A737D;">//             smallest *= int(char)</span></span>
<span class="line"><span style="color:#6A737D;">//         if(smallest == product):</span></span>
<span class="line"><span style="color:#6A737D;">//             return i</span></span>
<span class="line"><span style="color:#6A737D;">//     return -1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// print(digits_product(600))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">digitsProduct</span><span style="color:#24292E;">(</span><span style="color:#E36209;">product</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// smallest possible number for product 400 is 3558</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3559</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> smallest </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> char </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> i.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">()) {</span></span>
<span class="line"><span style="color:#24292E;">      smallest </span><span style="color:#D73A49;">*=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseInt</span><span style="color:#24292E;">(char);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (smallest </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> product) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">digitsProduct</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">600</span><span style="color:#24292E;">));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></div></div>`,8),e=[o];function r(t,c,i,y,E,d){return n(),a("div",null,e)}const m=s(p,[["render",r]]);export{b as __pageData,m as default};