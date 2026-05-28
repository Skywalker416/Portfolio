import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { marked } from "marked";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { R as Route } from "./router-9CaRcXUz.js";
const allBlogs = [
  {
    "title": "Building a Prometheus + Grafana Monitoring Stack from Scratch",
    "date": "2026-01-15",
    "summary": "A complete walkthrough of deploying a production-grade observability stack with Prometheus, Grafana, Alertmanager, and PagerDuty — containerized with Docker Compose and ready to scale.",
    "tags": [
      "Monitoring",
      "Prometheus",
      "Grafana",
      "Docker",
      "SRE"
    ],
    "author": "Amanuel Legesse",
    "content": `## Why Observability Matters\r
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
Observability is a product, not a project. Keep iterating.`,
    "_meta": {
      "filePath": "getting-started-with-tanstack.md",
      "fileName": "getting-started-with-tanstack.md",
      "directory": ".",
      "extension": "md",
      "path": "getting-started-with-tanstack"
    }
  },
  {
    "title": "Zero-Trust Architecture: From Concept to Implementation",
    "date": "2026-02-10",
    "summary": "A practical guide to implementing zero-trust network security in enterprise environments. Learn the key principles, common pitfalls, and a phased rollout strategy that won't break production.",
    "tags": [
      "Security",
      "Networking",
      "Zero-Trust",
      "Enterprise"
    ],
    "author": "Amanuel Legesse",
    "content": "## What is Zero Trust, Really?\r\n\r\nZero-trust is not a product you buy — it's a security philosophy: **never trust, always verify**. Every user, device, and connection is treated as potentially hostile, regardless of whether it originates inside or outside your network perimeter.\r\n\r\nThe classic perimeter-based model assumed everything inside the firewall was safe. Cloud adoption, remote work, and lateral movement attacks have completely invalidated that assumption.\r\n\r\n## The Three Core Principles\r\n\r\n1. **Verify explicitly** — Always authenticate and authorize based on all available data points (identity, location, device health, service/workload, data classification)\r\n2. **Use least privilege access** — Limit user access with just-in-time and just-enough-access, risk-based adaptive policies\r\n3. **Assume breach** — Minimize blast radius, segment access, encrypt everything, use analytics to get visibility\r\n\r\n## Implementation Phases\r\n\r\n### Phase 1: Identity Foundation\r\nStart with strong identity — SSO, MFA everywhere, privileged identity management. This is the biggest bang-for-buck.\r\n\r\n### Phase 2: Device Compliance\r\nEnforce device health checks before granting access. Unmanaged devices should never reach production systems.\r\n\r\n### Phase 3: Network Micro-segmentation\r\nReplace flat networks with micro-segmented zones. East-west traffic should be just as controlled as north-south.\r\n\r\n### Phase 4: Application-Level Controls\r\nMove toward application-aware access policies. Each app authenticates and authorizes independently.\r\n\r\n## Common Pitfalls\r\n\r\n- **Big bang rollout** — Roll out in phases. Start with a pilot group.\r\n- **Ignoring service accounts** — Non-human identities are often the weakest link.\r\n- **Complexity creep** — Keep policy logic auditable and maintainable.\r\n\r\nZero trust is a journey, not a destination. Focus on incremental progress over perfect architecture.",
    "_meta": {
      "filePath": "react-19-features.md",
      "fileName": "react-19-features.md",
      "directory": ".",
      "extension": "md",
      "path": "react-19-features"
    }
  },
  {
    "title": "Automating Server Provisioning with Ansible and Terraform",
    "date": "2026-02-01",
    "summary": "How I cut server provisioning time from 4 hours to 15 minutes using Ansible playbooks and Terraform IaC. A walkthrough of the architecture, gotchas, and lessons learned.",
    "tags": [
      "Ansible",
      "Terraform",
      "Automation",
      "DevOps"
    ],
    "author": "Amanuel Legesse",
    "content": '## The Problem\r\n\r\nManual server builds are slow, error-prone, and create snowflake systems that deviate over time. Every sysadmin has experienced the 2 AM call about a "special" server that nobody documented.\r\n\r\nOur team was spending 4+ hours per server build — OS install, hardening, software deployment, network config, monitoring agent setup. Multiplied across dozens of monthly deployments, that\'s real time lost.\r\n\r\n## The Solution Stack\r\n\r\n- **Terraform** — Provision the infrastructure (EC2 instances, security groups, IAM roles)\r\n- **Ansible** — Configure the OS, harden it, deploy software\r\n- **GitLab CI** — Orchestrate the pipeline and provide an audit trail\r\n- **AWS SSM Parameter Store** — Secrets management without hardcoded credentials\r\n\r\n## The Architecture\r\n\r\n```\r\nDeveloper submits YAML spec\r\n        ↓\r\nGitLab CI triggers pipeline\r\n        ↓\r\nTerraform: creates EC2 + networking\r\n        ↓\r\nAnsible: OS hardening + CIS Benchmark\r\n        ↓\r\nAnsible: Deploy application stack\r\n        ↓\r\nPrometheus agent installed + registered\r\n        ↓\r\nTicket auto-closed, server ready\r\n```\r\n\r\n## Key Ansible Roles\r\n\r\n- **`common`** — Base packages, NTP, SSH hardening, banner\r\n- **`cis-hardening`** — CIS Benchmark Level 2 controls (automated scoring)\r\n- **`monitoring`** — Prometheus node exporter + alertmanager config\r\n- **`application`** — App-specific deployment, parameterized by spec\r\n\r\n## Results\r\n\r\n- **Provisioning time**: 4 hours → 12 minutes\r\n- **Consistency**: 100% of servers pass CIS audit on first scan\r\n- **Drift detection**: Ansible runs nightly in check mode, alerts on drift\r\n\r\nThe investment in building these playbooks paid back within the first month.',
    "_meta": {
      "filePath": "tailwind-css-v4-guide.md",
      "fileName": "tailwind-css-v4-guide.md",
      "directory": ".",
      "extension": "md",
      "path": "tailwind-css-v4-guide"
    }
  }
];
function BlogPost() {
  const {
    slug
  } = Route.useParams();
  const post = allBlogs.find((p) => p._meta.path === slug);
  if (!post) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-[60vh] flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center font-mono", children: [
      /* @__PURE__ */ jsx("div", { className: "text-6xl font-bold text-primary mb-4", children: "404" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 text-sm", children: "Post not found in filesystem" }),
      /* @__PURE__ */ jsx(Link, { to: "/", className: "text-xs text-primary hover:text-primary/80 underline", children: "← return home" })
    ] }) });
  }
  const html = marked(post.content);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-8", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { size: 13 }),
      "BACK TO HOME"
    ] }),
    /* @__PURE__ */ jsxs("article", { children: [
      /* @__PURE__ */ jsxs("header", { className: "mb-8 card-tech rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-xs font-mono text-muted-foreground mb-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "amanuel@server" }),
          ":~$ cat",
          " ",
          /* @__PURE__ */ jsxs("span", { style: {
            color: "oklch(0.75 0.2 155)"
          }, children: [
            slug,
            ".md"
          ] })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-3xl font-bold font-mono text-foreground mb-4 leading-tight", children: post.title }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground mb-4", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Calendar, { size: 11 }),
            new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(User, { size: 11 }),
            post.author
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: post.tags.map((tag) => /* @__PURE__ */ jsxs("span", { className: "badge-tech", children: [
          /* @__PURE__ */ jsx(Tag, { size: 8, className: "inline mr-1" }),
          tag
        ] }, tag)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "prose prose-sm max-w-none card-tech rounded-xl p-6", dangerouslySetInnerHTML: {
        __html: html
      } })
    ] })
  ] });
}
export {
  BlogPost as component
};
