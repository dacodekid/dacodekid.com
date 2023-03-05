import{_ as i,M as o,p,q as u,N as a,V as t,a1 as r,R as n,t as s}from"./framework-5866ffd3.js";const k={},d=r(`<h1 id="check-palindrome" tabindex="-1"><a class="header-anchor" href="#check-palindrome" aria-hidden="true">#</a> Check Palindrome</h1><p>Given the string, check if it is a <a href="keyword://palindrome">palindrome</a>.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><ul><li><p>For <code>inputString = &quot;aabaa&quot;</code>, the output should be</p><div class="language-text" data-ext="text"><pre class="language-text"><code>check_palindrome(inputString) = true
</code></pre></div></li><li><p>For <code>inputString = &quot;abac&quot;</code>, the output should be</p><div class="language-text" data-ext="text"><pre class="language-text"><code>check_palindrome(inputString) = false
</code></pre></div></li><li><p>For <code>inputString = &quot;a&quot;</code>, the output should be</p><div class="language-text" data-ext="text"><pre class="language-text"><code>check_palindrome(inputString) = true
</code></pre></div></li></ul><h2 id="chart" tabindex="-1"><a class="header-anchor" href="#chart" aria-hidden="true">#</a> Chart</h2>`,5),m=n("h2",{id:"solution",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#solution","aria-hidden":"true"},"#"),s(" Solution")],-1),b=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# def check_palindrome(input_string):"),s(`
`),n("span",{class:"token comment"},"#     return input_string == input_string[::-1]"),s(`

`),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"check_palindrome"),n("span",{class:"token punctuation"},"("),s("input_string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    start `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
    middle `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"len"),n("span",{class:"token punctuation"},"("),s("input_string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"//"),s(),n("span",{class:"token number"},"2"),s(`
    end `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"len"),n("span",{class:"token punctuation"},"("),s("input_string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),s(`

    `),n("span",{class:"token keyword"},"while"),s(" start "),n("span",{class:"token operator"},"<="),s(" middle"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" input_string"),n("span",{class:"token punctuation"},"["),s("start"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"is"),s(),n("span",{class:"token keyword"},"not"),s(" input_string"),n("span",{class:"token punctuation"},"["),s("end"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"False"),s(`
        start `),n("span",{class:"token operator"},"="),s(" start "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),s(`
        end `),n("span",{class:"token operator"},"="),s(" end "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"True"),s(`


`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("check_palindrome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'saippuakivikauppias'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// function checkPalindrome(inputString) {"),s(`
`),n("span",{class:"token comment"},"//   return inputString === inputString.split('').end().join('');"),s(`
`),n("span",{class:"token comment"},"// }"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"checkPalindrome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"inputString"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" start "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" middle "),n("span",{class:"token operator"},"="),s(" inputString"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" end "),n("span",{class:"token operator"},"="),s(" inputString"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("start "),n("span",{class:"token operator"},"<="),s(" middle"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("inputString"),n("span",{class:"token punctuation"},"["),s("start"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"!="),s(" inputString"),n("span",{class:"token punctuation"},"["),s("end"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    start `),n("span",{class:"token operator"},"="),s(" start "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    end `),n("span",{class:"token operator"},"="),s(" end "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"checkPalindrome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'saippuakivikauppias'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// function checkPalindrome(inputString: string): boolean {"),s(`
`),n("span",{class:"token comment"},"//   return inputString === inputString.split('').end().join('');"),s(`
`),n("span",{class:"token comment"},"// }"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"checkPalindrome"),n("span",{class:"token punctuation"},"("),s("inputString"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"boolean"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" start"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" middle"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(),n("span",{class:"token operator"},"="),s(" inputString"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" end"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(),n("span",{class:"token operator"},"="),s(" inputString"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("start "),n("span",{class:"token operator"},"<="),s(" middle"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("inputString"),n("span",{class:"token punctuation"},"["),s("start"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"!="),s(" inputString"),n("span",{class:"token punctuation"},"["),s("end"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    start `),n("span",{class:"token operator"},"="),s(" start "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    end `),n("span",{class:"token operator"},"="),s(" end "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"checkPalindrome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'saippuakivikauppias'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token namespace"},"Internal"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// static bool checkPalindrome(string inputString)"),s(`
`),n("span",{class:"token comment"},"// {"),s(`
`),n("span",{class:"token comment"},'//   return inputString == string.Join("", inputString.end());'),s(`
`),n("span",{class:"token comment"},"// }"),s(`

`),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"bool")]),s(),n("span",{class:"token function"},"checkPalindrome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" inputString"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"int")]),s(" start "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"int")]),s(" middle "),n("span",{class:"token operator"},"="),s(" inputString"),n("span",{class:"token punctuation"},"."),s("Length "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"int")]),s(" end "),n("span",{class:"token operator"},"="),s(" inputString"),n("span",{class:"token punctuation"},"."),s("Length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("start "),n("span",{class:"token operator"},"<="),s(" middle"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("inputString"),n("span",{class:"token punctuation"},"["),s("start"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"!="),s(" inputString"),n("span",{class:"token punctuation"},"["),s("end"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    start `),n("span",{class:"token operator"},"="),s(" start "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    end `),n("span",{class:"token operator"},"="),s(" end "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'$"'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token expression language-csharp"},[n("span",{class:"token function"},"checkPalindrome"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"saippuakivikauppias"'),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function f(_,w){const c=o("Mermaid"),e=o("CodeGroupItem"),l=o("CodeGroup");return p(),u("div",null,[d,a(c,{id:"mermaid_382ee185","data-code":`flowchart
  start([Start])
  input[/"Input PALINDROME TEXT"/]
  calculate["Start (=0),<br/> Middle (=Text Lenth/2), <br/> End (=Text Length -1)<br/>"]
  if{"TEXT[Start] = TEXT[End]"}
  ifYes["Start = Start + 1 <br/> End = End - 1"]
  loop{Start <= Middle}
  returnTrue["Return True"]
  returnFalse["Return False"]
  stop([Stop])

  start --> input --> calculate --> if
  if -- Yes --> ifYes --> loop
  if -- No --> returnFalse --> stop
  loop -- Yes --> if
  loop -- No --> returnTrue --> stop`}),m,a(l,null,{default:t(()=>[a(e,{title:"PYTHON"},{default:t(()=>[b]),_:1}),a(e,{title:"JAVASCRIPT"},{default:t(()=>[v]),_:1}),a(e,{title:"TYPESCRIPT"},{default:t(()=>[g]),_:1}),a(e,{title:"C#"},{default:t(()=>[h]),_:1})]),_:1})])}const S=i(k,[["render",f],["__file","index.html.vue"]]);export{S as default};
