---
title: "Building a Prometheus + Grafana Monitoring Stack from Scratch"
date: "2026-01-15"
summary: "A complete walkthrough of deploying a production-grade observability stack with Prometheus, Grafana, Alertmanager, and PagerDuty — containerized with Docker Compose and ready to scale."
tags: ["Monitoring", "Prometheus", "Grafana", "Docker", "SRE"]
author: "Amanuel Legesse"
---

## Why Observability Matters

You can't fix what you can't see. The difference between a 2-minute outage and a 2-hour outage is often observability — specifically, having the right metrics, alerts, and dashboards to identify the problem fast.

## The Stack

| Component | Role |
|-----------|------|
| Prometheus | Metric collection & storage |
| Alertmanager | Alert routing & deduplication |
| Grafana | Visualization & dashboards |
| Node Exporter | Host-level metrics |
| Blackbox Exporter | Endpoint probing |
| PagerDuty | On-call notification |

## Getting Started

Deploy with Docker Compose for a single-node setup, or use the Helm chart for Kubernetes environments.

The key is **starting with useful alerts** — not exhaustive ones. Alert fatigue is a real problem. Start with:

1. Host down (node_up == 0)
2. Disk > 85% full
3. Memory > 90% for 5+ minutes
4. SSL cert expiring < 30 days
5. HTTP endpoint returning non-200

## Dashboard Philosophy

Your dashboards should tell a story. The "USE Method" (Utilization, Saturation, Errors) per resource is a good starting framework.

- **Overview dashboard** — Fleet health at a glance for leadership
- **Host drilldown** — CPU, memory, disk, network per server
- **Application dashboard** — Latency, throughput, error rate
- **On-call runbook** — Only the metrics you need during an incident

## Lessons Learned

- **Label carefully** — Label cardinality explosion can kill Prometheus. Keep labels low-cardinality.
- **Recording rules** — Pre-compute expensive queries with recording rules.
- **Retention policy** — 90 days local, then ship to S3 via Thanos for long-term storage.
- **Test your alerts** — Fire them intentionally in staging before going live.

Observability is a product, not a project. Keep iterating.
