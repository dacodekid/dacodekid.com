import{_ as o,C as e,o as n,c as r,H as t,Q as l,k as s,a as c}from"./chunks/framework.QBCT-Upj.js";const w=JSON.parse('{"title":"Ecosystem Map","description":"","frontmatter":{"prev":false,"next":false},"headers":[],"relativePath":"content/gist/business-analysis/tools-techniques/ecosystem-map.md","filePath":"content/gist/business-analysis/tools-techniques/ecosystem-map.md"}'),p={name:"content/gist/business-analysis/tools-techniques/ecosystem-map.md"},h=l("",9),m=s("h2",{id:"quiz",tabindex:"-1"},[c("Quiz "),s("a",{class:"header-anchor",href:"#quiz","aria-label":'Permalink to "Quiz"'},"​")],-1);function d(y,u,f,b,g,v){const a=e("MermaidJS"),i=e("QuizJS");return n(),r("div",null,[h,t(a,{id:"mermaid_la6fsaa6kq",text:"graph%20TB%0A%20%20%20%20MobileApp%5BMobile%20App%5D%20--%3E%20ShelfLayout%5BShelf%20Layout%20System%5D%0A%20%20%20%20MobileApp%20--%3E%20PaymentGateway%5BPayment%20Gateway%5D%0A%20%20%20%20MobileApp%20--%3E%20CustomerSupport%5BCustomer%20Support%5D%0A%20%20%20%20MobileApp%20--%3E%20Analytics%5BAnalytics%5D%0A%0A%20%20%20%20ShelfLayout%20--%3E%20InventorySystem%5BInventory%20System%5D%0A%20%20%20%20InventorySystem%20--%3E%20Supplier%5BSupplier%5D%0A%20%20%20%20InventorySystem%20--%3E%20Analytics%0A%0A%20%20%20%20PaymentGateway%20--%3E%20CRM%5BCRM%5D%0A%20%20%20%20CRM%20--%3E%20CustomerSupport%0A%0A%20%20%20%20Analytics%20--%3E%20CustomerSupport%0A%20%20%20%20Analytics%20--%3E%20CRM%0A%0A%20%20%20%20CustomerSupport%20--%3E%20PaymentGateway%0A%20%20%20%20Supplier%20--%3E%20ShelfLayout%0A%0A%20%20%20%20CRM%20--%3E%20Supplier"}),m,t(i,{quizData:[{id:4093,question:"When initiating a project to develop a new online banking platform, a business analyst needs to understand the entire landscape of related systems and their interrelationships. Which tool would be most effective for this purpose?<br>",choices:[{key:"A",text:"Risk Register"},{key:"B",text:"Ecosystem Map"},{key:"C",text:"Gantt Chart"},{key:"D",text:"Fishbone Diagram"}],answer:"B",explanation:"An Ecosystem Map is a scope model that provides a comprehensive view of all relevant systems and their relationships, making it an ideal tool for understanding the landscape of related systems in the development of an online banking platform.<br><br>"},{id:4094,question:"What is a primary function of an Ecosystem Map in the context of business analysis?<br>",choices:[{key:"A",text:"To schedule project tasks and milestones"},{key:"B",text:"To provide a high-level view of all systems affecting or impacted by the in-scope systems"},{key:"C",text:"To allocate budget across various project components"},{key:"D",text:"To assign roles and responsibilities to team members"}],answer:"B",explanation:"The primary function of an Ecosystem Map in business analysis is to provide a comprehensive, high-level view of all systems that could be affected by or that could impact the in-scope systems for a project.<br><br>"},{id:4095,question:"In the early stages of a project, how does an Ecosystem Map differ from a Context Diagram?<br>",choices:[{key:"A",text:"An Ecosystem Map includes both direct and indirect system interfaces, while a Context Diagram focuses only on direct interfaces"},{key:"B",text:"An Ecosystem Map is used for budget planning, while a Context Diagram is used for scheduling"},{key:"C",text:"An Ecosystem Map assigns team roles, while a Context Diagram defines project scope"},{key:"D",text:"An Ecosystem Map focuses on risk analysis, while a Context Diagram maps out project stakeholders"}],answer:"A",explanation:"Unlike a Context Diagram, which generally focuses on direct interfaces, an Ecosystem Map can include systems that do not directly interface with the solution but may still impact it, providing a broader view of the ecosystem.<br><br>"},{id:4096,question:"What should a business analyst do after mapping out the ecosystem with an Ecosystem Map to specify requirements?<br>",choices:[{key:"A",text:"Develop System Interface Tables for each identified interface"},{key:"B",text:"Create a detailed project budget"},{key:"C",text:"Assign tasks to the project team based on the map"},{key:"D",text:"Schedule project milestones according to the map"}],answer:"A",explanation:"After mapping out the ecosystem with an Ecosystem Map, a business analyst should develop System Interface Tables for each identified interface to drill down into the specifics, thereby helping in transforming the high-level understanding into actionable requirements.<br><br>"},{id:4097,question:"Why is an Ecosystem Map crucial for anticipating potential issues in a project?<br>",choices:[{key:"A",text:"It helps in financial forecasting for the project"},{key:"B",text:"It provides insights into the interrelationships among different systems and anticipates dependencies"},{key:"C",text:"It outlines the detailed steps for project implementation"},{key:"D",text:"It allocates resources to different project areas"}],answer:"B",explanation:"An Ecosystem Map is crucial for anticipating potential issues in a project as it provides insights into the interrelationships among different systems, allowing the business analyst to anticipate potential issues or dependencies that might impact the project.<br>"}]},null,8,["quizData"])])}const x=o(p,[["render",d]]);export{w as __pageData,x as default};