import{_ as t,C as o,o as i,c as s,H as n,Q as e}from"./chunks/framework.b2e84fab.js";const f=JSON.parse('{"title":"Entity Relationship Diagram (ERD)","description":"","frontmatter":{"prev":false,"next":false},"headers":[],"relativePath":"content/gist/business-analysis/tools-techniques/entity-relationship-diagram-erd.md","filePath":"content/gist/business-analysis/tools-techniques/entity-relationship-diagram-erd.md"}'),r={name:"content/gist/business-analysis/tools-techniques/entity-relationship-diagram-erd.md"},d=e("",9),l=e("",3);function c(h,p,m,u,b,y){const a=o("MermaidRenderWrap");return i(),s("div",null,[d,n(a,{id:"mermaid_1034a87dd3d48192d2252acfc657fa0a26846777f8b6e36f2363f92bc9378b0623da25680e91564ac497916281ef15a4970d8189c0457e44d7dce2730ff8643a",text:"erDiagram%0A%20%20%20%20Book%20%7C%7C--o%7B%20Loan%20%3A%20has%0A%20%20%20%20Member%20%7C%7C--o%7B%20Loan%20%3A%20makes%0A%20%20%20%20Library%20%7C%7C--%7C%7C%20Loan%20%3A%20manages%0A%20%20%20%20Author%20%7C%7C--o%7B%20Book%20%3A%20writes%0A%20%20%20%20Publisher%20%7C%7C--o%7B%20Book%20%3A%20publishes%0A%20%20%20%20Library%20%7D%7C..%7C%7B%20Book%20%3A%20stores%0A%20%20%20%20Member%20%7D%7C..%7C%7B%20Library%20%3A%20belongs_to%0A%20%20%20%20Loan%20%7C%7C--o%7B%20Author%20%3A%20includes_work_of%0A%20%20%20%20Loan%20%7C%7C--o%7B%20Publisher%20%3A%20includes_publication_of"}),l])}const _=t(r,[["render",c]]);export{f as __pageData,_ as default};
