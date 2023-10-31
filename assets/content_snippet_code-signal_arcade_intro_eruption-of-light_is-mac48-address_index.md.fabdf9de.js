import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.b2e84fab.js";const F=JSON.parse('{"title":"Is MAC48 Address?","description":"","frontmatter":{"title":"Is MAC48 Address?"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/intro/eruption-of-light/is-mac48-address/index.md","filePath":"content/snippet/code-signal/arcade/intro/eruption-of-light/is-mac48-address/index.md"}'),l={name:"content/snippet/code-signal/arcade/intro/eruption-of-light/is-mac48-address/index.md"},e=p(`<h1 id="is-mac48-address" tabindex="-1">Is MAC48 Address? <a class="header-anchor" href="#is-mac48-address" aria-label="Permalink to &quot;Is MAC48 Address?&quot;">​</a></h1><p>A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.</p><p>The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (<code>0</code> to <code>9</code> or <code>A</code> to <code>F</code>), separated by hyphens (e.g. <code>01-23-45-67-89-AB</code>).</p><p>Your task is to check by given string <code>inputString</code> whether it corresponds to MAC-48 address or not.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><ul><li><p>For <code>inputString = &quot;00-1B-63-84-45-E6&quot;</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">is_mac48_address(inputString) = true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">is_mac48_address(inputString) = true</span></span></code></pre></div></li><li><p>For <code>inputString = &quot;Z1-1B-63-84-45-E6&quot;</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">is_mac48_address(inputString) = false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">is_mac48_address(inputString) = false</span></span></code></pre></div></li><li><p>For <code>inputString = &quot;not a MAC-48 address&quot;</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">is_mac48_address(inputString) = false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">is_mac48_address(inputString) = false</span></span></code></pre></div></li></ul><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Y8auq" id="tab-cR5MFfP" checked="checked"><label for="tab-cR5MFfP">PYTHON</label><input type="radio" name="group-Y8auq" id="tab-NPGQd50"><label for="tab-NPGQd50">JAVASCRIPT</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> string</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">is_mac48_address</span><span style="color:#E1E4E8;">(input_string):</span></span>
<span class="line"><span style="color:#E1E4E8;">    input_string </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> input_string.split(</span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(input_string) </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> input_string:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(i) </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">or</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">all</span><span style="color:#E1E4E8;">(c </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> string.hexdigits </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> c </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> i)):</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">True</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(is_mac48_address(</span><span style="color:#9ECBFF;">&#39;00-1B-63-84-45-E6&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(is_mac48_address(</span><span style="color:#9ECBFF;">&#39;ZZ-1B-63-84-45-Z6&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(is_mac48_address(</span><span style="color:#9ECBFF;">&#39;not a mac-address&#39;</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> string</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">is_mac48_address</span><span style="color:#24292E;">(input_string):</span></span>
<span class="line"><span style="color:#24292E;">    input_string </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> input_string.split(</span><span style="color:#032F62;">&#39;-&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(input_string) </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> input_string:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(i) </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">or</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">all</span><span style="color:#24292E;">(c </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> string.hexdigits </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> c </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> i)):</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">True</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(is_mac48_address(</span><span style="color:#032F62;">&#39;00-1B-63-84-45-E6&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(is_mac48_address(</span><span style="color:#032F62;">&#39;ZZ-1B-63-84-45-Z6&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(is_mac48_address(</span><span style="color:#032F62;">&#39;not a mac-address&#39;</span><span style="color:#24292E;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isMAC48Address</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">inputString</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">regex</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#79B8FF;">[0-9A-F]</span><span style="color:#F97583;">{2}</span><span style="color:#DBEDFF;">(-</span><span style="color:#79B8FF;">[0-9A-F]</span><span style="color:#F97583;">{2}</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">{5}$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> regex.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(inputString);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">isMAC48Address</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;00-1B-63-84-45-E6&#39;</span><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isMAC48Address</span><span style="color:#24292E;">(</span><span style="color:#E36209;">inputString</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">regex</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#005CC5;">[0-9A-F]</span><span style="color:#D73A49;">{2}</span><span style="color:#032F62;">(-</span><span style="color:#005CC5;">[0-9A-F]</span><span style="color:#D73A49;">{2}</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">{5}$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> regex.</span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(inputString);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">isMAC48Address</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;00-1B-63-84-45-E6&#39;</span><span style="color:#24292E;">));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div></div>`,8),o=[e];function t(r,c,i,y,E,d){return n(),a("div",null,o)}const b=s(l,[["render",t]]);export{F as __pageData,b as default};
