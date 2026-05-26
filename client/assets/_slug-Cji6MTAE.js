import{c as i,R as o,j as e,L as a,U as l}from"./index-rfvE9kdN.js";import{g as c,C as d}from"./marked.esm-DJcoW1uo.js";import{T as m}from"./tag-sbU0wABz.js";const h=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],u=i("arrow-left",h),p=[{title:"Building a Prometheus + Grafana Monitoring Stack from Scratch",date:"2026-01-15",summary:"A complete walkthrough of deploying a production-grade observability stack with Prometheus, Grafana, Alertmanager, and PagerDuty — containerized with Docker Compose and ready to scale.",tags:["Monitoring","Prometheus","Grafana","Docker","SRE"],author:"Amanuel Legesse",content:`## Why Observability Matters\r
\r
You can't fix what you can't see. The difference between a 2-minute outage and a 2-hour outage is often observability — specifically, having the right metrics, alerts, and dashboards to identify the problem fast.\r
\r
## The Stack\r
\r
| Component | Role |\r
|-----------|------|\r
| Prometheus | Metric collection & storage |\r
| Alertmanager | Alert routing & deduplication |\r
| Grafana | Visualization & dashboards |\r
| Node Exporter | Host-level metrics |\r
| Blackbox Exporter | Endpoint probing |\r
| PagerDuty | On-call notification |\r
\r
## Getting Started\r
\r
Deploy with Docker Compose for a single-node setup, or use the Helm chart for Kubernetes environments.\r
\r
The key is **starting with useful alerts** — not exhaustive ones. Alert fatigue is a real problem. Start with:\r
\r
1. Host down (node_up == 0)\r
2. Disk > 85% full\r
3. Memory > 90% for 5+ minutes\r
4. SSL cert expiring < 30 days\r
5. HTTP endpoint returning non-200\r
\r
## Dashboard Philosophy\r
\r
Your dashboards should tell a story. The "USE Method" (Utilization, Saturation, Errors) per resource is a good starting framework.\r
\r
- **Overview dashboard** — Fleet health at a glance for leadership\r
- **Host drilldown** — CPU, memory, disk, network per server\r
- **Application dashboard** — Latency, throughput, error rate\r
- **On-call runbook** — Only the metrics you need during an incident\r
\r
## Lessons Learned\r
\r
- **Label carefully** — Label cardinality explosion can kill Prometheus. Keep labels low-cardinality.\r
- **Recording rules** — Pre-compute expensive queries with recording rules.\r
- **Retention policy** — 90 days local, then ship to S3 via Thanos for long-term storage.\r
- **Test your alerts** — Fire them intentionally in staging before going live.\r
\r
Observability is a product, not a project. Keep iterating.`,_meta:{filePath:"getting-started-with-tanstack.md",fileName:"getting-started-with-tanstack.md",directory:".",extension:"md",path:"getting-started-with-tanstack"}},{title:"Zero-Trust Architecture: From Concept to Implementation",date:"2026-02-10",summary:"A practical guide to implementing zero-trust network security in enterprise environments. Learn the key principles, common pitfalls, and a phased rollout strategy that won't break production.",tags:["Security","Networking","Zero-Trust","Enterprise"],author:"Amanuel Legesse",content:`## What is Zero Trust, Really?\r
\r
Zero-trust is not a product you buy — it's a security philosophy: **never trust, always verify**. Every user, device, and connection is treated as potentially hostile, regardless of whether it originates inside or outside your network perimeter.\r
\r
The classic perimeter-based model assumed everything inside the firewall was safe. Cloud adoption, remote work, and lateral movement attacks have completely invalidated that assumption.\r
\r
## The Three Core Principles\r
\r
1. **Verify explicitly** — Always authenticate and authorize based on all available data points (identity, location, device health, service/workload, data classification)\r
2. **Use least privilege access** — Limit user access with just-in-time and just-enough-access, risk-based adaptive policies\r
3. **Assume breach** — Minimize blast radius, segment access, encrypt everything, use analytics to get visibility\r
\r
## Implementation Phases\r
\r
### Phase 1: Identity Foundation\r
Start with strong identity — SSO, MFA everywhere, privileged identity management. This is the biggest bang-for-buck.\r
\r
### Phase 2: Device Compliance\r
Enforce device health checks before granting access. Unmanaged devices should never reach production systems.\r
\r
### Phase 3: Network Micro-segmentation\r
Replace flat networks with micro-segmented zones. East-west traffic should be just as controlled as north-south.\r
\r
### Phase 4: Application-Level Controls\r
Move toward application-aware access policies. Each app authenticates and authorizes independently.\r
\r
## Common Pitfalls\r
\r
- **Big bang rollout** — Roll out in phases. Start with a pilot group.\r
- **Ignoring service accounts** — Non-human identities are often the weakest link.\r
- **Complexity creep** — Keep policy logic auditable and maintainable.\r
\r
Zero trust is a journey, not a destination. Focus on incremental progress over perfect architecture.`,_meta:{filePath:"react-19-features.md",fileName:"react-19-features.md",directory:".",extension:"md",path:"react-19-features"}},{title:"Automating Server Provisioning with Ansible and Terraform",date:"2026-02-01",summary:"How I cut server provisioning time from 4 hours to 15 minutes using Ansible playbooks and Terraform IaC. A walkthrough of the architecture, gotchas, and lessons learned.",tags:["Ansible","Terraform","Automation","DevOps"],author:"Amanuel Legesse",content:`## The Problem\r
\r
Manual server builds are slow, error-prone, and create snowflake systems that deviate over time. Every sysadmin has experienced the 2 AM call about a "special" server that nobody documented.\r
\r
Our team was spending 4+ hours per server build — OS install, hardening, software deployment, network config, monitoring agent setup. Multiplied across dozens of monthly deployments, that's real time lost.\r
\r
## The Solution Stack\r
\r
- **Terraform** — Provision the infrastructure (EC2 instances, security groups, IAM roles)\r
- **Ansible** — Configure the OS, harden it, deploy software\r
- **GitLab CI** — Orchestrate the pipeline and provide an audit trail\r
- **AWS SSM Parameter Store** — Secrets management without hardcoded credentials\r
\r
## The Architecture\r
\r
\`\`\`\r
Developer submits YAML spec\r
        ↓\r
GitLab CI triggers pipeline\r
        ↓\r
Terraform: creates EC2 + networking\r
        ↓\r
Ansible: OS hardening + CIS Benchmark\r
        ↓\r
Ansible: Deploy application stack\r
        ↓\r
Prometheus agent installed + registered\r
        ↓\r
Ticket auto-closed, server ready\r
\`\`\`\r
\r
## Key Ansible Roles\r
\r
- **\`common\`** — Base packages, NTP, SSH hardening, banner\r
- **\`cis-hardening\`** — CIS Benchmark Level 2 controls (automated scoring)\r
- **\`monitoring\`** — Prometheus node exporter + alertmanager config\r
- **\`application\`** — App-specific deployment, parameterized by spec\r
\r
## Results\r
\r
- **Provisioning time**: 4 hours → 12 minutes\r
- **Consistency**: 100% of servers pass CIS audit on first scan\r
- **Drift detection**: Ansible runs nightly in check mode, alerts on drift\r
\r
The investment in building these playbooks paid back within the first month.`,_meta:{filePath:"tailwind-css-v4-guide.md",fileName:"tailwind-css-v4-guide.md",directory:".",extension:"md",path:"tailwind-css-v4-guide"}}];function x(){const{slug:n}=o.useParams(),t=p.find(r=>r._meta.path===n);if(!t)return e.jsx("div",{className:"min-h-[60vh] flex items-center justify-center",children:e.jsxs("div",{className:"text-center font-mono",children:[e.jsx("div",{className:"text-6xl font-bold text-primary mb-4",children:"404"}),e.jsx("p",{className:"text-muted-foreground mb-6 text-sm",children:"Post not found in filesystem"}),e.jsx(a,{to:"/",className:"text-xs text-primary hover:text-primary/80 underline",children:"← return home"})]})});const s=c(t.content);return e.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-10",children:[e.jsxs(a,{to:"/",className:"inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-8",children:[e.jsx(u,{size:13}),"BACK TO HOME"]}),e.jsxs("article",{children:[e.jsxs("header",{className:"mb-8 card-tech rounded-xl p-6",children:[e.jsxs("div",{className:"text-xs font-mono text-muted-foreground mb-3",children:[e.jsx("span",{className:"text-primary",children:"amanuel@server"}),":~$ cat"," ",e.jsxs("span",{style:{color:"oklch(0.75 0.2 155)"},children:[n,".md"]})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-bold font-mono text-foreground mb-4 leading-tight",children:t.title}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground mb-4",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(d,{size:11}),new Date(t.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(l,{size:11}),t.author]})]}),e.jsx("div",{className:"flex flex-wrap gap-1.5",children:t.tags.map(r=>e.jsxs("span",{className:"badge-tech",children:[e.jsx(m,{size:8,className:"inline mr-1"}),r]},r))})]}),e.jsx("div",{className:"prose prose-sm max-w-none card-tech rounded-xl p-6",dangerouslySetInnerHTML:{__html:s}})]})]})}export{x as component};
