import{_ as a,C as p,o as l,c as o,H as e,Q as s}from"./chunks/framework.b2e84fab.js";const g=JSON.parse('{"title":"Check Palindrome","description":"","frontmatter":{"title":"Check Palindrome"},"headers":[],"relativePath":"content/snippet/code-signal/arcade/intro/the-journey-begins/check-palindrome/index.md","filePath":"content/snippet/code-signal/arcade/intro/the-journey-begins/check-palindrome/index.md"}'),r={name:"content/snippet/code-signal/arcade/intro/the-journey-begins/check-palindrome/index.md"},t=s("",5),c=s("",2);function E(i,y,u,d,b,F){const n=p("MermaidRenderWrap");return l(),o("div",null,[t,e(n,{id:"mermaid_0bcfd96685cd1fc02c4823613deadb567240b61ea4f15114803fe50ee58e5c1b3c6a4ac662ab3b24ccc0527431a3489863c0593022162b6338552e4feb42f01a",text:"flowchart%0A%20%20start(%5BStart%5D)%0A%20%20input%5B%2F%22Input%20PALINDROME%20TEXT%22%2F%5D%0A%20%20calculate%5B%22Start%20(%3D0)%2C%3Cbr%2F%3E%20Middle%20(%3DText%20Lenth%2F2)%2C%20%3Cbr%2F%3E%20End%20(%3DText%20Length%20-1)%3Cbr%2F%3E%22%5D%0A%20%20if%7B%22TEXT%5BStart%5D%20%3D%20TEXT%5BEnd%5D%22%7D%0A%20%20ifYes%5B%22Start%20%3D%20Start%20%2B%201%20%3Cbr%2F%3E%20End%20%3D%20End%20-%201%22%5D%0A%20%20loop%7BStart%20%3C%3D%20Middle%7D%0A%20%20returnTrue%5B%22Return%20True%22%5D%0A%20%20returnFalse%5B%22Return%20False%22%5D%0A%20%20stop(%5BStop%5D)%0A%0A%20%20start%20--%3E%20input%20--%3E%20calculate%20--%3E%20if%0A%20%20if%20--%20Yes%20--%3E%20ifYes%20--%3E%20loop%0A%20%20if%20--%20No%20--%3E%20returnFalse%20--%3E%20stop%0A%20%20loop%20--%20Yes%20--%3E%20if%0A%20%20loop%20--%20No%20--%3E%20returnTrue%20--%3E%20stop"}),c])}const h=a(r,[["render",E]]);export{g as __pageData,h as default};
