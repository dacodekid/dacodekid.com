import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.b2e84fab.js";const h=JSON.parse('{"title":"Knapsack Light","description":"","frontmatter":{"title":"Knapsack Light"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/intro/dark-wilderness/knapsack-light/index.md","filePath":"content/snippet/code-signal/arcade/intro/dark-wilderness/knapsack-light/index.md"}'),p={name:"content/snippet/code-signal/arcade/intro/dark-wilderness/knapsack-light/index.md"},e=l(`<h1 id="knapsack-light" tabindex="-1">Knapsack Light <a class="header-anchor" href="#knapsack-light" aria-label="Permalink to &quot;Knapsack Light&quot;">​</a></h1><p>You found two items in a treasure chest! The first item weighs <code>weight1</code> and is worth <code>value1</code>, and the second item weighs <code>weight2</code> and is worth <code>value2</code>. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is <code>maxW</code> and you can&#39;t come back for the items later?</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>There are only two items and you can&#39;t bring more than one item of each type, i.e. you can&#39;t take two first items or two second items.</p></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><ul><li><p>For <code>value1 = 10</code>, <code>weight1 = 5</code>, <code>value2 = 6</code>, <code>weight2 = 4</code>, and <code>maxW = 8</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">knapsack_light(value1, weight1, value2, weight2, maxW) = 10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">knapsack_light(value1, weight1, value2, weight2, maxW) = 10</span></span></code></pre></div><p>You can only carry the first item.</p></li><li><p>For <code>value1 = 10</code>, <code>weight1 = 5</code>, <code>value2 = 6</code>, <code>weight2 = 4</code>, and <code>maxW = 9</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">knapsack_light(value1, weight1, value2, weight2, maxW) = 16</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">knapsack_light(value1, weight1, value2, weight2, maxW) = 16</span></span></code></pre></div><p>You&#39;re strong enough to take both of the items with you.</p></li><li><p>For <code>value1 = 5</code>, <code>weight1 = 3</code>, <code>value2 = 7</code>, <code>weight2 = 4</code>, and <code>maxW = 6</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">knapsack_light(value1, weight1, value2, weight2, maxW) = 7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">knapsack_light(value1, weight1, value2, weight2, maxW) = 7</span></span></code></pre></div><p>You can&#39;t take both items, but you can take any of them.</p></li></ul><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-iJLzi" id="tab-6vKzux_" checked="checked"><label for="tab-6vKzux_">PYTHON</label><input type="radio" name="group-iJLzi" id="tab-oJG5wW4"><label for="tab-oJG5wW4">JAVASCRIPT</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">knapsack_light</span><span style="color:#E1E4E8;">(value_1, weight_1, value_2, weight_2, max_weight):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> weight_1 </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> weight_2 </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> max_weight:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> value_1 </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> value_2</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">elif</span><span style="color:#E1E4E8;"> weight_1 </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> max_weight </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> weight_2 </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> max_weight:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">max</span><span style="color:#E1E4E8;">(value_1, value_2)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">elif</span><span style="color:#E1E4E8;"> weight_1 </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> max_weight:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> value_1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">elif</span><span style="color:#E1E4E8;"> weight_2 </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> max_weight:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> value_2</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(knapsack_light(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">knapsack_light</span><span style="color:#24292E;">(value_1, weight_1, value_2, weight_2, max_weight):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> weight_1 </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> weight_2 </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> max_weight:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> value_1 </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> value_2</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">elif</span><span style="color:#24292E;"> weight_1 </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> max_weight </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> weight_2 </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> max_weight:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">max</span><span style="color:#24292E;">(value_1, value_2)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">elif</span><span style="color:#24292E;"> weight_1 </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> max_weight:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> value_1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">elif</span><span style="color:#24292E;"> weight_2 </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> max_weight:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> value_2</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(knapsack_light(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">knapsackLight</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">weight1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value2</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">weight2</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">maxW</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (weight1 </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> weight2 </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> maxW) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> value1 </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> value2;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (weight1 </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> maxW </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> weight2 </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> maxW) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(value1, value2);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (weight1 </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> maxW) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> value1;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (weight2 </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> maxW) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> value2;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">knapsackLight</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">knapsackLight</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value1</span><span style="color:#24292E;">, </span><span style="color:#E36209;">weight1</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value2</span><span style="color:#24292E;">, </span><span style="color:#E36209;">weight2</span><span style="color:#24292E;">, </span><span style="color:#E36209;">maxW</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (weight1 </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> weight2 </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> maxW) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> value1 </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> value2;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (weight1 </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> maxW </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> weight2 </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> maxW) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">(value1, value2);</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (weight1 </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> maxW) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> value1;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (weight2 </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> maxW) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> value2;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">knapsackLight</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></div></div>`,7),o=[e];function t(c,r,i,E,y,u){return a(),n("div",null,o)}const g=s(p,[["render",t]]);export{h as __pageData,g as default};
