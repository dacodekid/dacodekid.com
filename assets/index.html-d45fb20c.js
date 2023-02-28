import{_ as p,M as s,p as l,q as u,N as t,V as e,a1 as r,R as n,t as a}from"./framework-5866ffd3.js";const i={},k=r(`<h1 id="spiral-numbers" tabindex="-1"><a class="header-anchor" href="#spiral-numbers" aria-hidden="true">#</a> Spiral Numbers</h1><p>Construct a square matrix with a size <code>N × N</code> containing integers from <code>1</code> to <code>N * N</code> in a spiral order, starting from top-left and in clockwise direction.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>For <code>n = 3</code>, the output should be</p><div class="language-text" data-ext="text"><pre class="language-text"><code>spiral_numbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]


 1  2  3  4
12 13 14  5
11 16 15  6
10  9  8  7


 1  2  3  4  5
16 17 18 19  6
15 24 25 20  7
14 23 22 21  8
13 12 11 10  9


</code></pre></div><h2 id="input-output" tabindex="-1"><a class="header-anchor" href="#input-output" aria-hidden="true">#</a> Input/Output</h2><ul><li><p><strong>[input] integer n</strong></p><p>Matrix size, a positive integer.</p></li></ul><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2>`,8),d=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"def"),a(),n("span",{class:"token function"},"spiral_numbers"),n("span",{class:"token punctuation"},"("),a("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),a(`
    matrix `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"*"),a(" n "),n("span",{class:"token keyword"},"for"),a(" _ "),n("span",{class:"token keyword"},"in"),a(),n("span",{class:"token builtin"},"range"),n("span",{class:"token punctuation"},"("),a("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),a(`
    h_row`),n("span",{class:"token punctuation"},","),a(" h_col"),n("span",{class:"token punctuation"},","),a(" v_row"),n("span",{class:"token punctuation"},","),a(" v_col "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1"),a(`

    `),n("span",{class:"token keyword"},"for"),a(" matrix"),n("span",{class:"token punctuation"},"["),a("h_row"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),a("h_col"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token keyword"},"in"),a(),n("span",{class:"token builtin"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(" n "),n("span",{class:"token operator"},"*"),a(" n "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),a(`
        `),n("span",{class:"token keyword"},"if"),a(" matrix"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"("),a("h_row "),n("span",{class:"token operator"},"+"),a(" v_row"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"%"),a(" n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"("),a("h_col "),n("span",{class:"token operator"},"+"),a(" v_col"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"%"),a(" n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),a(`
            v_row`),n("span",{class:"token punctuation"},","),a(" v_col "),n("span",{class:"token operator"},"="),a(" v_col"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token operator"},"-"),a(`v_row
        h_row`),n("span",{class:"token punctuation"},","),a(" h_col "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("h_row "),n("span",{class:"token operator"},"+"),a(" v_row"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),a("h_col "),n("span",{class:"token operator"},"+"),a(" v_col"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"return"),a(` matrix


`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),a("spiral_numbers"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function m(h,_){const o=s("CodeGroupItem"),c=s("CodeGroup");return l(),u("div",null,[k,t(c,null,{default:e(()=>[t(o,{title:"PYTHON"},{default:e(()=>[d]),_:1})]),_:1})])}const v=p(i,[["render",m],["__file","index.html.vue"]]);export{v as default};
