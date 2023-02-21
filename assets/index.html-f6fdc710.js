import{_ as u,M as a,p,q as l,N as t,V as e,a1 as i,R as n,t as s}from"./framework-5866ffd3.js";const r={},k=i(`<h1 id="different-squares" tabindex="-1"><a class="header-anchor" href="#different-squares" aria-hidden="true">#</a> Different Squares</h1><p>Given a rectangular matrix containing only digits, calculate the number of different <code>2 × 2</code> squares in it.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>For</p><div class="language-text" data-ext="text"><pre class="language-text"><code>matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
</code></pre></div><p>the output should be</p><div class="language-text" data-ext="text"><pre class="language-text"><code>different_squares(matrix) = 6
</code></pre></div><p>Here are all <code>6</code> different <code>2 × 2</code> squares:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>- 1 2
  2 2

- 2 1
  2 2

- 2 2
  2 2

- 2 2
  1 2

- 2 2
  2 3

- 2 3
  2 1
</code></pre></div><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2>`,10),d=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"different_squares"),n("span",{class:"token punctuation"},"("),s("matrix"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    squares `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token builtin"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"len"),n("span",{class:"token punctuation"},"("),s("matrix"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"for"),s(" j "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token builtin"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"len"),n("span",{class:"token punctuation"},"("),s("matrix"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
            squares`),n("span",{class:"token punctuation"},"."),s("add"),n("span",{class:"token punctuation"},"("),s(`
                `),n("span",{class:"token builtin"},"str"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token punctuation"},"["),s("matrix"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" matrix"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token punctuation"},"["),s("matrix"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" matrix"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token builtin"},"len"),n("span",{class:"token punctuation"},"("),s("squares"),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("different_squares"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function m(b,x){const o=a("CodeGroupItem"),c=a("CodeGroup");return p(),l("div",null,[k,t(c,null,{default:e(()=>[t(o,{title:"PYTHON"},{default:e(()=>[d]),_:1})]),_:1})])}const f=u(r,[["render",m],["__file","index.html.vue"]]);export{f as default};
