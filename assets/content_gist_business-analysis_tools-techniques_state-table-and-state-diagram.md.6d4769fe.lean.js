import{_ as a,C as s,o as i,c as n,H as o,Q as t}from"./chunks/framework.f4862610.js";const y=JSON.parse('{"title":"State Table And State Diagram","description":"","frontmatter":{"prev":false,"next":false},"headers":[],"relativePath":"content/gist/business-analysis/tools-techniques/state-table-and-state-diagram.md","filePath":"content/gist/business-analysis/tools-techniques/state-table-and-state-diagram.md"}'),r={name:"content/gist/business-analysis/tools-techniques/state-table-and-state-diagram.md"},d=t("",9),l=t("",7);function h(c,m,u,b,p,f){const e=s("MermaidJS");return i(),n("div",null,[d,o(e,{id:"mermaid_mu3oz92vs7b",text:"stateDiagram%0A%20%20%20%20%5B*%5D%20--%3E%20Initiated%0A%20%20%20%20Initiated%20--%3E%20Processed%20%3A%20action1%0A%20%20%20%20Processed%20--%3E%20Verified%20%3A%20action2%0A%20%20%20%20Processed%20--%3E%20Rejected%20%3A%20action3%0A%20%20%20%20Rejected%20--%3E%20Initiated%20%3A%20action4%0A%20%20%20%20Verified%20--%3E%20Completed%20%3A%20action5%0A%20%20%20%20Completed%20--%3E%20Archived%20%3A%20action6%0A%20%20%20%20Archived%20--%3E%20%5B*%5D%0A%20%20%20%20Archived%20--%3E%20Initiated%20%3A%20action7"}),l])}const v=a(r,[["render",h]]);export{y as __pageData,v as default};
