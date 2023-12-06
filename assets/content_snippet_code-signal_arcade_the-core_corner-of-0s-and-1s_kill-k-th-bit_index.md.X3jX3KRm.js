import{_ as s,o as e,c as i,R as t}from"./chunks/framework.eQfkPAEx.js";const b=JSON.parse('{"title":"Kill K-th Bit","description":"","frontmatter":{"title":"Kill K-th Bit"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/the-core/corner-of-0s-and-1s/kill-k-th-bit/index.md","filePath":"content/snippet/code-signal/arcade/the-core/corner-of-0s-and-1s/kill-k-th-bit/index.md"}'),a={name:"content/snippet/code-signal/arcade/the-core/corner-of-0s-and-1s/kill-k-th-bit/index.md"},n=t(`<h1 id="kill-kth-bit" tabindex="-1">Kill K<sup>th</sup> Bit <a class="header-anchor" href="#kill-kth-bit" aria-label="Permalink to &quot;Kill K^th^ Bit&quot;">​</a></h1><p>In order to stop the Mad Coder evil genius, you need to decipher the encrypted message he sent to his minions. The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.</p><p>You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number <code>n</code> the <code>k<sup>th</sup></code> bit from the right was initially set to <code>0</code>, but its current value might be different. It&#39;s now up to you to write a function that will change the <code>k<sup>th</sup></code> bit of <code>n</code> back to <code>0</code>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><ul><li><p>For <code>n = 37</code> and <code>k = 3</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>kill_kth_bit(n, k) = 33</span></span></code></pre></div><p><code>37<sub>10</sub> = 100<strong>1</strong>01<sub>2</sub> ~&gt; 100<strong>0</strong>01<sub>2</sub> = 33<sub>10</sub></code>.</p></li><li><p>For <code>n = 37</code> and <code>k = 4</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>kill_kth_bit(n, k) = 37</span></span></code></pre></div><p>The <code>4<sup>th</sup></code> bit is <code>0</code> already (looks like the Mad Coder forgot to encrypt this number), so the answer is still <code>37</code>.</p></li></ul><h2 id="input-output" tabindex="-1">Input/Output <a class="header-anchor" href="#input-output" aria-label="Permalink to &quot;Input/Output&quot;">​</a></h2><ul><li><p><strong>[input] integer n</strong></p><p><em>Guaranteed constraints:</em><code>0 ≤ n ≤ 2<sup>31</sup> - 1</code>.</p></li><li><p><strong>[input] integer k</strong></p><p>The <code>1</code>-based index of the changed bit (counting from the right).</p><p><em>Guaranteed constraints:</em><code>1 ≤ k ≤ 31</code>.</p></li></ul><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-1TG4k" id="tab-bdImH29" checked="checked"><label for="tab-bdImH29">PYTHON</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> kill_kth_bit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n, k):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (k </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(kill_kth_bit(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">37</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div></div>`,9),l=[n];function p(o,h,d,r,c,k){return e(),i("div",null,l)}const g=s(a,[["render",p]]);export{b as __pageData,g as default};