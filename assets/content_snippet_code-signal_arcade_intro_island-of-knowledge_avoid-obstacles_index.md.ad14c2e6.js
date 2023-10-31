import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.b2e84fab.js";const u=JSON.parse('{"title":"Avoid Obstacles","description":"","frontmatter":{"title":"Avoid Obstacles"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/intro/island-of-knowledge/avoid-obstacles/index.md","filePath":"content/snippet/code-signal/arcade/intro/island-of-knowledge/avoid-obstacles/index.md"}'),p={name:"content/snippet/code-signal/arcade/intro/island-of-knowledge/avoid-obstacles/index.md"},o=l(`<h1 id="avoid-obstacles" tabindex="-1">Avoid Obstacles <a class="header-anchor" href="#avoid-obstacles" aria-label="Permalink to &quot;Avoid Obstacles&quot;">​</a></h1><p>You are given an array of integers representing coordinates of obstacles situated on a straight line.</p><p>Assume that you are jumping from the point with coordinate <code>0</code> to the right. You are allowed only to make jumps of the same length represented by some integer.</p><p>Find the minimal length of the jump enough to avoid all the obstacles.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>For <code>inputArray = [5, 3, 6, 7, 9]</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">avoid_obstacles(inputArray) = 4</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">avoid_obstacles(inputArray) = 4</span></span></code></pre></div><p>Check out the image below for better understanding:</p><table><thead><tr><th style="text-align:center;"><img src="https://codesignal.s3.amazonaws.com/tasks/avoidObstacles/img/example.png?_tm=1624426122561" alt=""></th></tr></thead><tbody><tr><td style="text-align:center;"><em>Image Credit: CodeSignal</em></td></tr></tbody></table><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-8rDpE" id="tab-OXdj21I" checked="checked"><label for="tab-OXdj21I">PYTHON</label><input type="radio" name="group-8rDpE" id="tab-XUYEdVg"><label for="tab-XUYEdVg">JAVASCRIPT</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">avoid_obstacles</span><span style="color:#E1E4E8;">(inputArray):</span></span>
<span class="line"><span style="color:#E1E4E8;">    inputArray.sort()</span></span>
<span class="line"><span style="color:#E1E4E8;">    jump </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">max</span><span style="color:#E1E4E8;">(inputArray) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">        found </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">False</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> inputArray:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                found </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">True</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">not</span><span style="color:#E1E4E8;"> found:</span></span>
<span class="line"><span style="color:#E1E4E8;">            jump </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> jump</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(avoid_obstacles([</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">999</span><span style="color:#E1E4E8;">]))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">avoid_obstacles</span><span style="color:#24292E;">(inputArray):</span></span>
<span class="line"><span style="color:#24292E;">    inputArray.sort()</span></span>
<span class="line"><span style="color:#24292E;">    jump </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">max</span><span style="color:#24292E;">(inputArray) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">        found </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">False</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> inputArray:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                found </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">True</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">not</span><span style="color:#24292E;"> found:</span></span>
<span class="line"><span style="color:#24292E;">            jump </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> jump</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(avoid_obstacles([</span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">999</span><span style="color:#24292E;">]))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">avoidObstacles</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">inputArray</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (inputArray.</span><span style="color:#B392F0;">some</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">avoidObstacles</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">999</span><span style="color:#E1E4E8;">]));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">avoidObstacles</span><span style="color:#24292E;">(</span><span style="color:#E36209;">inputArray</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (inputArray.</span><span style="color:#6F42C1;">some</span><span style="color:#24292E;">((</span><span style="color:#E36209;">n</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">    i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">avoidObstacles</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">999</span><span style="color:#24292E;">]));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div></div>`,11),e=[o];function t(r,c,i,E,y,d){return a(),n("div",null,e)}const m=s(p,[["render",t]]);export{u as __pageData,m as default};
