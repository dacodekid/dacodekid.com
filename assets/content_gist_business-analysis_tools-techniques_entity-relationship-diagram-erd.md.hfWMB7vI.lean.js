import{_ as t,C as o,o as i,c as s,H as n,Q as e}from"./chunks/framework.QBCT-Upj.js";const f=JSON.parse('{"title":"Entity Relationship Diagram (ERD)","description":"","frontmatter":{"prev":false,"next":false},"headers":[],"relativePath":"content/gist/business-analysis/tools-techniques/entity-relationship-diagram-erd.md","filePath":"content/gist/business-analysis/tools-techniques/entity-relationship-diagram-erd.md"}'),r={name:"content/gist/business-analysis/tools-techniques/entity-relationship-diagram-erd.md"},l=e("",9),d=e("",3);function c(h,p,m,u,y,b){const a=o("MermaidJS");return i(),s("div",null,[l,n(a,{id:"mermaid_vyxb1cy115d",text:"erDiagram%0A%20%20%20%20Book%20%7C%7C--o%7B%20Loan%20%3A%20has%0A%20%20%20%20Member%20%7C%7C--o%7B%20Loan%20%3A%20makes%0A%20%20%20%20Library%20%7C%7C--%7C%7C%20Loan%20%3A%20manages%0A%20%20%20%20Author%20%7C%7C--o%7B%20Book%20%3A%20writes%0A%20%20%20%20Publisher%20%7C%7C--o%7B%20Book%20%3A%20publishes%0A%20%20%20%20Library%20%7D%7C..%7C%7B%20Book%20%3A%20stores%0A%20%20%20%20Member%20%7D%7C..%7C%7B%20Library%20%3A%20belongs_to%0A%20%20%20%20Loan%20%7C%7C--o%7B%20Author%20%3A%20includes_work_of%0A%20%20%20%20Loan%20%7C%7C--o%7B%20Publisher%20%3A%20includes_publication_of"}),d])}const _=t(r,[["render",c]]);export{f as __pageData,_ as default};
