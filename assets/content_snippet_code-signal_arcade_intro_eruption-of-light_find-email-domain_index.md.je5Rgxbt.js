import{_ as s,o as a,c as i,R as e}from"./chunks/framework.eQfkPAEx.js";const u=JSON.parse('{"title":"Find Email Domain","description":"","frontmatter":{"title":"Find Email Domain"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/intro/eruption-of-light/find-email-domain/index.md","filePath":"content/snippet/code-signal/arcade/intro/eruption-of-light/find-email-domain/index.md"}'),n={name:"content/snippet/code-signal/arcade/intro/eruption-of-light/find-email-domain/index.md"},l=e(`<h1 id="find-email-domain" tabindex="-1">Find Email Domain <a class="header-anchor" href="#find-email-domain" aria-label="Permalink to &quot;Find Email Domain&quot;">​</a></h1><p>An email address such as <code>&quot;John.Smith@example.com&quot;</code> is made up of a local part (<code>&quot;John.Smith&quot;</code>), an <code>&quot;@&quot;</code> symbol, then a domain part (<code>&quot;example.com&quot;</code>).</p><p>The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. <a href="https://en.wikipedia.org/wiki/Email_address#Examples" target="_blank" rel="noreferrer">Here</a> you can look at several examples of correct and incorrect email addresses.</p><p>Given a valid email address, find its domain part.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><ul><li><p>For <code>address = &quot;prettyandsimple@example.com&quot;</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>find_email_domain(address) = &quot;example.com&quot;</span></span></code></pre></div></li><li><p>For <code>address = &quot;fully-qualified-domain@codesignal.com&quot;</code>, the output should be</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  find_email_domain(address) = &quot;codesignal.com&quot;</span></span></code></pre></div></li></ul><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-TvF7w" id="tab-VfhzNi8" checked="checked"><label for="tab-VfhzNi8">PYTHON</label><input type="radio" name="group-TvF7w" id="tab-qDEEAG0"><label for="tab-qDEEAG0">JAVASCRIPT</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> find_email_domain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(address):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> address[address.rindex(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(find_email_domain(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abc@gmail.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> find_email_domain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> address.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find_email_domain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abc@gmail.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div></div>`,8),t=[l];function p(d,o,h,r,c,k){return a(),i("div",null,t)}const E=s(n,[["render",p]]);export{u as __pageData,E as default};