---
title: "Automating Server Provisioning with Ansible and Terraform"
date: "2026-02-01"
summary: "How I cut server provisioning time from 4 hours to 15 minutes using Ansible playbooks and Terraform IaC. A walkthrough of the architecture, gotchas, and lessons learned."
tags: ["Ansible", "Terraform", "Automation", "DevOps"]
author: "Amanuel Legesse"
---

## The Problem

Manual server builds are slow, error-prone, and create snowflake systems that deviate over time. Every sysadmin has experienced the 2 AM call about a "special" server that nobody documented.

Our team was spending 4+ hours per server build — OS install, hardening, software deployment, network config, monitoring agent setup. Multiplied across dozens of monthly deployments, that's real time lost.

## The Solution Stack

- **Terraform** — Provision the infrastructure (EC2 instances, security groups, IAM roles)
- **Ansible** — Configure the OS, harden it, deploy software
- **GitLab CI** — Orchestrate the pipeline and provide an audit trail
- **AWS SSM Parameter Store** — Secrets management without hardcoded credentials

## The Architecture

```
Developer submits YAML spec
        ↓
GitLab CI triggers pipeline
        ↓
Terraform: creates EC2 + networking
        ↓
Ansible: OS hardening + CIS Benchmark
        ↓
Ansible: Deploy application stack
        ↓
Prometheus agent installed + registered
        ↓
Ticket auto-closed, server ready
```

## Key Ansible Roles

- **`common`** — Base packages, NTP, SSH hardening, banner
- **`cis-hardening`** — CIS Benchmark Level 2 controls (automated scoring)
- **`monitoring`** — Prometheus node exporter + alertmanager config
- **`application`** — App-specific deployment, parameterized by spec

## Results

- **Provisioning time**: 4 hours → 12 minutes
- **Consistency**: 100% of servers pass CIS audit on first scan
- **Drift detection**: Ansible runs nightly in check mode, alerts on drift

The investment in building these playbooks paid back within the first month.
