import{_ as t,D as a,o as i,c as n,I as s,R as r}from"./chunks/framework.eQfkPAEx.js";const g=JSON.parse('{"title":"Acceptance Criteria","description":"","frontmatter":{"prev":false,"next":false},"headers":[],"relativePath":"content/gist/business-analysis/inputs-outputs/acceptance-criteria.md","filePath":"content/gist/business-analysis/inputs-outputs/acceptance-criteria.md"}'),o={name:"content/gist/business-analysis/inputs-outputs/acceptance-criteria.md"},c=r(`<h1 id="acceptance-criteria" tabindex="-1">Acceptance Criteria <a class="header-anchor" href="#acceptance-criteria" aria-label="Permalink to &quot;Acceptance Criteria&quot;">​</a></h1><p>Acceptance Criteria are essentially the <mark>conditions that a product or a deliverable must meet to be accepted by stakeholders or customers</mark>. These are vital for validating that the solution meets the business needs as specified in the requirements.</p><h2 id="the-nature" tabindex="-1">The Nature <a class="header-anchor" href="#the-nature" aria-label="Permalink to &quot;The Nature&quot;">​</a></h2><p>Acceptance criteria are concrete and demonstrable. They serve as a checklist for evaluating the deliverables and determining whether or not they fulfill the stated requirements.</p><h2 id="alignment-with-requirements" tabindex="-1">Alignment with Requirements <a class="header-anchor" href="#alignment-with-requirements" aria-label="Permalink to &quot;Alignment with Requirements&quot;">​</a></h2><p>The acceptance criteria should be in complete alignment with the requirements and other relevant product information. This is crucial because the criteria form the basis for acceptance testing or any other evaluation methods employed to validate the solution.</p><h2 id="definition-of-done" tabindex="-1">Definition of Done <a class="header-anchor" href="#definition-of-done" aria-label="Permalink to &quot;Definition of Done&quot;">​</a></h2><p>The &quot;definition of done&quot; is included as a part of the acceptance criteria. This provides a clear end-state that describes what completion looks like, offering an additional layer of clarity and understanding for what must be achieved.</p><h2 id="levels-of-definition" tabindex="-1">Levels of Definition <a class="header-anchor" href="#levels-of-definition" aria-label="Permalink to &quot;Levels of Definition&quot;">​</a></h2><p>Acceptance criteria can be defined at various levels such as:</p><ul><li><p><strong>Requirement Level</strong>: Specific to a single requirement.</p></li><li><p><strong>Iteration Level</strong>: Pertaining to an iteration in the project.</p></li><li><p><strong>Release Level</strong>: Concerning the entire release.</p></li><li><p><strong>Solution Level</strong>: For the overall solution.</p></li><li><p><strong>Product or Business Objective Level</strong>: These are high-level criteria that align directly with business objectives.</p></li></ul><h2 id="context-sensitivity-adaptive-vs-predictive-approaches" tabindex="-1">Context Sensitivity: Adaptive vs Predictive Approaches <a class="header-anchor" href="#context-sensitivity-adaptive-vs-predictive-approaches" aria-label="Permalink to &quot;Context Sensitivity: Adaptive vs Predictive Approaches&quot;">​</a></h2><p>In an <strong>adaptive approach</strong>, acceptance criteria often pertain to individual user stories. Multiple criteria might need to be satisfied for a single user story to be deemed acceptable. They provide a concise way to articulate requirements.</p><p>In a <strong>predictive approach</strong>, the acceptance criteria are typically higher-level and related to a release or the overall solution.</p><h2 id="role-in-validation-activities" tabindex="-1">Role in Validation Activities <a class="header-anchor" href="#role-in-validation-activities" aria-label="Permalink to &quot;Role in Validation Activities&quot;">​</a></h2><p>During validation, these criteria are cross-referenced against all requirements and product information. If there&#39;s a mismatch, it indicates that the particular item (requirement, iteration, release, or solution) is not on track to be accepted.</p><p>By understanding and utilizing acceptance criteria effectively, Business Analysts can ensure that the deliverables meet stakeholder expectations and fulfill the requirements, thereby increasing the likelihood of project success.</p><h2 id="sample-format" tabindex="-1">Sample Format <a class="header-anchor" href="#sample-format" aria-label="Permalink to &quot;Sample Format&quot;">​</a></h2><p>Below is a sample format for Acceptance Criteria using the Given-When-Then syntax, which is commonly used in Behavior-Driven Development (BDD) and aligns well with PMI practices.</p><h3 id="user-story" tabindex="-1">User Story: <a class="header-anchor" href="#user-story" aria-label="Permalink to &quot;User Story:&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>As a [type of user], I want [an action] so that [benefit/value]</span></span></code></pre></div><p>As a <mark>customer</mark>, I want to be able to <mark>reset my password</mark> so that I can <mark>regain access to my account when I forget my password</mark>.</p><h3 id="acceptance-criteria-1" tabindex="-1">Acceptance Criteria: <a class="header-anchor" href="#acceptance-criteria-1" aria-label="Permalink to &quot;Acceptance Criteria:&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Given</span></span>
<span class="line"><span>Initial condition or setup</span></span>
<span class="line"><span></span></span>
<span class="line"><span>When</span></span>
<span class="line"><span>An action takes place</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Then</span></span>
<span class="line"><span>The outcome or result is observed</span></span></code></pre></div><p><strong>Given</strong></p><ul><li>I am a registered user</li><li>I am on the &#39;Forgot Password&#39; page</li></ul><p><strong>When</strong></p><ul><li>I enter my registered email address</li><li>I click on the &#39;Reset Password&#39; button</li></ul><p><strong>Then</strong></p><ul><li>I should receive a password reset link to my registered email within 5 minutes</li><li>A confirmation message should appear on the screen saying, &quot;A password reset link has been sent to your email.&quot;</li></ul><h2 id="quiz" tabindex="-1">Quiz <a class="header-anchor" href="#quiz" aria-label="Permalink to &quot;Quiz&quot;">​</a></h2>`,31);function l(h,p,d,u,m,v){const e=a("QuizJS");return i(),n("div",null,[c,s(e,{quizData:[{question:"In a project following an adaptive approach, acceptance criteria are commonly defined at which level?",choices:[{key:"A",text:"Requirement Level"},{key:"B",text:"Iteration Level"},{key:"C",text:"Release Level"},{key:"D",text:"User Story Level"}],answer:"D",explanation:"In an adaptive approach, acceptance criteria are often defined at the level of individual user stories, providing a concise way to articulate requirements for each story."},{question:"What is the primary purpose of Acceptance Criteria in the business analysis process?",choices:[{key:"A",text:"To provide guidelines for stakeholder communications"},{key:"B",text:"To serve as a checklist for evaluating if a deliverable meets the stated requirements"},{key:"C",text:"To establish a detailed project plan and schedule"},{key:"D",text:"To outline the responsibilities of the project team members"}],answer:"B",explanation:"Acceptance Criteria serve as a checklist for evaluating deliverables and determining whether they fulfill the stated requirements, thereby validating that the solution meets the business needs."},{question:'When using the Given-When-Then syntax in Acceptance Criteria, what does the "Then" component typically describe?',choices:[{key:"A",text:"The initial condition or setup required for the test"},{key:"B",text:"The action that triggers the condition"},{key:"C",text:"The outcome or result that is observed after the action"},{key:"D",text:"The business objective or benefit expected from the feature"}],answer:"C",explanation:'In the Given-When-Then syntax used for Acceptance Criteria, the "Then" component describes the outcome or result that is observed following the action.'},{question:"If a deliverable fails to meet the Acceptance Criteria at the solution level, what does it indicate about the project?",choices:[{key:"A",text:"The project budget has been exceeded"},{key:"B",text:"The project is not on track to be accepted in its current state"},{key:"C",text:"The team needs immediate reorganization"},{key:"D",text:"Stakeholders are likely to request additional features"}],answer:"B",explanation:"If a deliverable fails to meet the Acceptance Criteria at any level, including the solution level, it indicates that the item (requirement, iteration, release, or solution) is not on track to be accepted in its current state."},{question:"How do Acceptance Criteria align with requirements in the business analysis process?",choices:[{key:"A",text:"They ensure that the project team adheres to organizational policies"},{key:"B",text:"They align directly and completely with the requirements and product information"},{key:"C",text:"They serve as a legal contract between the project team and the stakeholders"},{key:"D",text:"They outline the project management methodologies to be used"}],answer:"B",explanation:"Acceptance Criteria should be in complete alignment with the requirements and relevant product information, forming the basis for acceptance testing and other evaluation methods to validate the solution."}]},null,8,["quizData"])])}const b=t(o,[["render",l]]);export{g as __pageData,b as default};
