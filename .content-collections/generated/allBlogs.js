
export default [
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
    "content": "## Why Observability Matters\r\n\r\nYou can't fix what you can't see. The difference between a 2-minute outage and a 2-hour outage is often observability — specifically, having the right metrics, alerts, and dashboards to identify the problem fast.\r\n\r\n## The Stack\r\n\r\n| Component | Role |\r\n|-----------|------|\r\n| Prometheus | Metric collection & storage |\r\n| Alertmanager | Alert routing & deduplication |\r\n| Grafana | Visualization & dashboards |\r\n| Node Exporter | Host-level metrics |\r\n| Blackbox Exporter | Endpoint probing |\r\n| PagerDuty | On-call notification |\r\n\r\n## Getting Started\r\n\r\nDeploy with Docker Compose for a single-node setup, or use the Helm chart for Kubernetes environments.\r\n\r\nThe key is **starting with useful alerts** — not exhaustive ones. Alert fatigue is a real problem. Start with:\r\n\r\n1. Host down (node_up == 0)\r\n2. Disk > 85% full\r\n3. Memory > 90% for 5+ minutes\r\n4. SSL cert expiring < 30 days\r\n5. HTTP endpoint returning non-200\r\n\r\n## Dashboard Philosophy\r\n\r\nYour dashboards should tell a story. The \"USE Method\" (Utilization, Saturation, Errors) per resource is a good starting framework.\r\n\r\n- **Overview dashboard** — Fleet health at a glance for leadership\r\n- **Host drilldown** — CPU, memory, disk, network per server\r\n- **Application dashboard** — Latency, throughput, error rate\r\n- **On-call runbook** — Only the metrics you need during an incident\r\n\r\n## Lessons Learned\r\n\r\n- **Label carefully** — Label cardinality explosion can kill Prometheus. Keep labels low-cardinality.\r\n- **Recording rules** — Pre-compute expensive queries with recording rules.\r\n- **Retention policy** — 90 days local, then ship to S3 via Thanos for long-term storage.\r\n- **Test your alerts** — Fire them intentionally in staging before going live.\r\n\r\nObservability is a product, not a project. Keep iterating.",
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
    "content": "## The Problem\r\n\r\nManual server builds are slow, error-prone, and create snowflake systems that deviate over time. Every sysadmin has experienced the 2 AM call about a \"special\" server that nobody documented.\r\n\r\nOur team was spending 4+ hours per server build — OS install, hardening, software deployment, network config, monitoring agent setup. Multiplied across dozens of monthly deployments, that's real time lost.\r\n\r\n## The Solution Stack\r\n\r\n- **Terraform** — Provision the infrastructure (EC2 instances, security groups, IAM roles)\r\n- **Ansible** — Configure the OS, harden it, deploy software\r\n- **GitLab CI** — Orchestrate the pipeline and provide an audit trail\r\n- **AWS SSM Parameter Store** — Secrets management without hardcoded credentials\r\n\r\n## The Architecture\r\n\r\n```\r\nDeveloper submits YAML spec\r\n        ↓\r\nGitLab CI triggers pipeline\r\n        ↓\r\nTerraform: creates EC2 + networking\r\n        ↓\r\nAnsible: OS hardening + CIS Benchmark\r\n        ↓\r\nAnsible: Deploy application stack\r\n        ↓\r\nPrometheus agent installed + registered\r\n        ↓\r\nTicket auto-closed, server ready\r\n```\r\n\r\n## Key Ansible Roles\r\n\r\n- **`common`** — Base packages, NTP, SSH hardening, banner\r\n- **`cis-hardening`** — CIS Benchmark Level 2 controls (automated scoring)\r\n- **`monitoring`** — Prometheus node exporter + alertmanager config\r\n- **`application`** — App-specific deployment, parameterized by spec\r\n\r\n## Results\r\n\r\n- **Provisioning time**: 4 hours → 12 minutes\r\n- **Consistency**: 100% of servers pass CIS audit on first scan\r\n- **Drift detection**: Ansible runs nightly in check mode, alerts on drift\r\n\r\nThe investment in building these playbooks paid back within the first month.",
    "_meta": {
      "filePath": "tailwind-css-v4-guide.md",
      "fileName": "tailwind-css-v4-guide.md",
      "directory": ".",
      "extension": "md",
      "path": "tailwind-css-v4-guide"
    }
  }
]