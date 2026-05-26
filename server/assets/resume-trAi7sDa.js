import { jsxs, jsx } from "react/jsx-runtime";
import { marked } from "marked";
import { useState } from "react";
import { Briefcase, GraduationCap, MapPin, Calendar, ChevronUp, ChevronDown } from "lucide-react";
const allJobs = [
  {
    "jobTitle": "System Trainer / IT Support",
    "summary": "Delivered onboarding and technical training for clients while supporting platform adoption, troubleshooting, and feedback-driven service improvements.",
    "startDate": "2025-02-01",
    "endDate": "2025-04-01",
    "company": "Haddis Art Technology PLC",
    "location": "Addis Ababa, Ethiopia",
    "tags": [
      "Client Onboarding",
      "Training",
      "Technical Support",
      "Documentation",
      "Troubleshooting",
      "Customer Success"
    ],
    "content": "## Key Contributions\r\n\r\n- Conducted orientation and training sessions for new and existing clients.\r\n- Simplified technical concepts into clear, practical guidance.\r\n- Prepared training materials, presentations, and user guides.\r\n- Resolved client issues and provided tailored technical solutions.\r\n- Collected feedback to improve training quality and delivery.\r\n\r\n## Responsibilities\r\n\r\n- Support client onboarding and platform navigation.\r\n- Collaborate with support and technical teams to stay aligned on product updates.\r\n- Help clients with data backup and recovery support.",
    "_meta": {
      "filePath": "haddis-system-trainer.md",
      "fileName": "haddis-system-trainer.md",
      "directory": ".",
      "extension": "md",
      "path": "haddis-system-trainer"
    }
  },
  {
    "jobTitle": "IT System Administrator",
    "summary": "Administer enterprise IT systems for head office and manufacturing operations, supporting business applications, infrastructure reliability, and operational continuity.",
    "startDate": "2025-09-01",
    "company": "Valam Global Trading PLC",
    "location": "Addis Ababa, Ethiopia",
    "tags": [
      "Windows",
      "macOS",
      "Linux",
      "Microsoft 365",
      "Smartsheet",
      "Zoho",
      "IT Operations",
      "Disaster Recovery"
    ],
    "content": "## Key Contributions\r\n\r\n- Designed, organized, and supported IT systems across office and manufacturing environments.\r\n- Maintained operating systems and end-user hardware including laptops, desktops, and tablets.\r\n- Supported business tools including Microsoft 365, Smartsheet, and Zoho.\r\n- Contributed to entity-level disaster recovery planning (DRP) aligned with business impact assessment (BIA).\r\n- Conducted proactive monitoring and maintenance to keep systems stable and reliable.\r\n- Managed IT assets, inventory, software license renewals, and hardware replacement cycles.\r\n\r\n## Responsibilities\r\n\r\n- Provide daily IT operations support across systems, applications, and communication tools.\r\n- Handle service and maintenance activity logging and execution.\r\n- Build and maintain workstation standards for productivity and security.\r\n- Coordinate with internal teams to improve system uptime and user experience.",
    "_meta": {
      "filePath": "initech-junior.md",
      "fileName": "initech-junior.md",
      "directory": ".",
      "extension": "md",
      "path": "initech-junior"
    }
  },
  {
    "jobTitle": "Freelance IT Support Specialist",
    "summary": "Delivered contract-based IT support focused on hardware, software, and network reliability for business-critical operations.",
    "startDate": "2023-06-01",
    "endDate": "2024-09-01",
    "company": "Oda Construction and Transport Services PLC",
    "location": "Addis Ababa, Ethiopia",
    "tags": [
      "IT Support",
      "Networking",
      "Hardware",
      "Software Troubleshooting",
      "Servers",
      "Workstations",
      "System Maintenance"
    ],
    "content": "## Key Contributions\r\n\r\n- Diagnosed and resolved hardware, software, and network issues to minimize downtime.\r\n- Installed and configured workstations, servers, and enterprise applications.\r\n- Performed maintenance tasks to keep systems reliable for day-to-day operations.\r\n\r\n## Responsibilities\r\n\r\n- Troubleshoot user-reported technical issues across devices and software.\r\n- Configure systems for business use and maintain support documentation.\r\n- Provide practical, client-focused technical support under a freelance engagement model.",
    "_meta": {
      "filePath": "job-2.md",
      "fileName": "job-2.md",
      "directory": ".",
      "extension": "md",
      "path": "job-2"
    }
  }
];
const allEducations = [
  {
    "school": "Addis Ababa Institute of Technology",
    "summary": "Bachelor of Science in Software Engineering",
    "startDate": "2020-09-01",
    "endDate": "2024-06-01",
    "tags": [
      "Software Engineering",
      "GPA: 3.01",
      "Java",
      "Node.js",
      "Dart",
      "Databases"
    ],
    "content": "## Program Highlights\r\n\r\n- Completed a B.Sc. in Software Engineering with hands-on software and systems coursework.\r\n- Built practical experience across backend development, mobile development, and IT operations.\r\n- Strengthened problem-solving and delivery skills through project-based learning.\r\n\r\n## Certificates\r\n\r\n- Advanced Flutter, Dart, Clean Architecture, E-commerce (Udemy)\r\n- Backend Node.js and State Management (Udemy)\r\n- Flutter test-driven development with clean architecture (Udemy)\r\n- Cybersecurity (Udemy)\r\n- Professional Diploma in Office Administration (Udemy)\r\n- Pan Africanism Seminar (The PLO Lumumba Foundation)\r\n- 10 Academy KAIM 3 & 4 - Artificial Intelligence Mastery\r\n\r\n## Languages\r\n\r\n- English: Advanced (C1)\r\n- Amharic: Proficient (C2)",
    "_meta": {
      "filePath": "code-school.md",
      "fileName": "code-school.md",
      "directory": ".",
      "extension": "md",
      "path": "code-school"
    }
  }
];
function JobCard({
  job
}) {
  const [expanded, setExpanded] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "card-tech rounded-xl overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "p-5 cursor-pointer select-none", onClick: () => setExpanded((v) => !v), children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full animate-pulse", style: {
              background: job.endDate ? "oklch(0.65 0.22 290)" : "oklch(0.75 0.2 155)"
            } }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-mono px-2 py-0.5 rounded", style: {
              background: job.endDate ? "oklch(0.65 0.22 290 / 0.1)" : "oklch(0.75 0.2 155 / 0.1)",
              border: `1px solid ${job.endDate ? "oklch(0.65 0.22 290 / 0.3)" : "oklch(0.75 0.2 155 / 0.3)"}`,
              color: job.endDate ? "oklch(0.75 0.15 290)" : "oklch(0.75 0.2 155)"
            }, children: job.endDate ? "PAST" : "CURRENT" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-foreground font-mono", children: job.jobTitle }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 mt-1 text-xs text-muted-foreground font-mono", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-semibold", children: job.company }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(MapPin, { size: 10 }),
              job.location
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { size: 10 }),
              job.startDate,
              " — ",
              job.endDate || "Present"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "text-muted-foreground mt-1 shrink-0", children: expanded ? /* @__PURE__ */ jsx(ChevronUp, { size: 16 }) : /* @__PURE__ */ jsx(ChevronDown, { size: 16 }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mt-3", children: job.summary }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5 mt-3", children: job.tags.map((tag) => /* @__PURE__ */ jsx("span", { className: "badge-tech", children: tag }, tag)) })
    ] }),
    expanded && job.content && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 border-t", style: {
      borderColor: "oklch(0.22 0.04 220)"
    }, children: /* @__PURE__ */ jsx("div", { className: "prose prose-sm max-w-none pt-4 text-xs", dangerouslySetInnerHTML: {
      __html: marked(job.content)
    } }) })
  ] });
}
function Resume() {
  const [activeTab, setActiveTab] = useState("experience");
  const jobs = [...allJobs].sort((a, b) => {
    const aTime = Date.parse(a.startDate);
    const bTime = Date.parse(b.startDate);
    return Number.isNaN(bTime) || Number.isNaN(aTime) ? 0 : bTime - aTime;
  });
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 py-10 space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-xs font-mono text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "amanuel@server" }),
        /* @__PURE__ */ jsx("span", { children: ":~$ " }),
        /* @__PURE__ */ jsx("span", { style: {
          color: "oklch(0.75 0.2 155)"
        }, children: "cat resume.json | jq ." })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-bold font-mono text-foreground", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "{" }),
        /* @__PURE__ */ jsx("span", { className: "shimmer-text", children: " Resume " }),
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "}" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground font-mono", children: "Software Engineering graduate with hands-on experience in IT support, systems administration, and client-focused technical training." }),
      /* @__PURE__ */ jsx("a", { href: "/amanuel-legesse-resume-2025.pdf", target: "_blank", rel: "noopener noreferrer", className: "inline-flex mt-2 items-center gap-2 px-4 py-2 rounded text-xs font-mono transition-all duration-200", style: {
        background: "oklch(0.75 0.18 195 / 0.12)",
        border: "1px solid oklch(0.75 0.18 195 / 0.4)",
        color: "oklch(0.78 0.19 195)"
      }, children: "DOWNLOAD FULL RESUME (PDF)" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-1 p-1 rounded-lg", style: {
      background: "oklch(0.12 0.025 240)",
      border: "1px solid oklch(0.22 0.04 220)"
    }, children: [
      /* @__PURE__ */ jsxs("button", { onClick: () => setActiveTab("experience"), className: ["flex items-center gap-2 flex-1 justify-center py-2 px-4 rounded text-xs font-mono font-medium transition-all duration-200", activeTab === "experience" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"].join(" "), style: activeTab === "experience" ? {
        background: "oklch(0.75 0.18 195)",
        boxShadow: "0 0 12px oklch(0.75 0.18 195 / 0.4)"
      } : {}, children: [
        /* @__PURE__ */ jsx(Briefcase, { size: 13 }),
        "WORK EXPERIENCE"
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: () => setActiveTab("education"), className: ["flex items-center gap-2 flex-1 justify-center py-2 px-4 rounded text-xs font-mono font-medium transition-all duration-200", activeTab === "education" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"].join(" "), style: activeTab === "education" ? {
        background: "oklch(0.75 0.18 195)",
        boxShadow: "0 0 12px oklch(0.75 0.18 195 / 0.4)"
      } : {}, children: [
        /* @__PURE__ */ jsx(GraduationCap, { size: 13 }),
        "EDUCATION & CERTS"
      ] })
    ] }),
    activeTab === "experience" && /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "relative pl-6", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-px", style: {
        background: "linear-gradient(to bottom, oklch(0.75 0.18 195), oklch(0.65 0.22 290 / 0.3))"
      } }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: jobs.map((job, i) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-8 top-5 w-3 h-3 rounded-full border-2", style: {
          background: i === 0 ? "oklch(0.75 0.2 155)" : "oklch(0.12 0.025 240)",
          borderColor: i === 0 ? "oklch(0.75 0.2 155)" : "oklch(0.65 0.22 290)",
          boxShadow: i === 0 ? "0 0 8px oklch(0.75 0.2 155 / 0.6)" : "none"
        } }),
        /* @__PURE__ */ jsx(JobCard, { job })
      ] }, job.jobTitle)) })
    ] }) }),
    activeTab === "education" && /* @__PURE__ */ jsx("div", { className: "space-y-4", children: allEducations.map((edu) => /* @__PURE__ */ jsxs("div", { className: "card-tech rounded-xl p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg flex items-center justify-center shrink-0", style: {
          background: "oklch(0.65 0.22 290 / 0.1)",
          border: "1px solid oklch(0.65 0.22 290 / 0.3)"
        }, children: /* @__PURE__ */ jsx(GraduationCap, { size: 18, style: {
          color: "oklch(0.75 0.15 290)"
        } }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold font-mono text-foreground", children: edu.school }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground font-mono", children: edu.summary }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
            edu.startDate,
            " — ",
            edu.endDate
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5 mb-4", children: edu.tags.map((tag) => /* @__PURE__ */ jsx("span", { className: "badge-tech badge-purple", children: tag }, tag)) }),
      edu.content && /* @__PURE__ */ jsx("div", { className: "prose prose-sm max-w-none text-xs border-t pt-4", style: {
        borderColor: "oklch(0.22 0.04 220)"
      }, dangerouslySetInnerHTML: {
        __html: marked(edu.content)
      } })
    ] }, edu.school)) })
  ] });
}
export {
  Resume as component
};
