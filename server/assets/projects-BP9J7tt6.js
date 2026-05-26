import { jsxs, jsx } from "react/jsx-runtime";
import { Tag, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
const allProjects = [
  {
    "title": "Corporate Website Delivery Governance",
    "description": "Project leadership and final acceptance of valamglobal.com through scope governance, vendor coordination, multilingual readiness, and structured handover.",
    "tags": [
      "Project Management",
      "Stakeholder Coordination",
      "SEO",
      "Analytics",
      "Vendor Management",
      "Web Delivery"
    ],
    "github": "",
    "liveUrl": "https://valamglobal.com",
    "image": "",
    "content": "## Overview\r\n\r\nManaged corporate website delivery from planning through formal sign-off for Valam Global Trading PLC, ensuring execution quality and ownership readiness.\r\n\r\n## Technical Details\r\n\r\n- Drove cross-functional alignment between internal stakeholders and delivery vendors.\r\n- Maintained scope control, milestones, and acceptance criteria across phases.\r\n- Oversaw multilingual, SEO, analytics, and performance-readiness requirements.\r\n- Coordinated governance artifacts, handover documentation, and access transfer.\r\n- Closed the initiative with production verification and executive sign-off.\r\n\r\n## Collaboration\r\n\r\nImplementation and technical build execution were delivered by Anbessa IT, with corporate media and photography support provided by JAB Digitals.",
    "_meta": {
      "filePath": "corporate-website-delivery.md",
      "fileName": "corporate-website-delivery.md",
      "directory": ".",
      "extension": "md",
      "path": "corporate-website-delivery"
    }
  },
  {
    "title": "Enterprise IT Infrastructure Migration",
    "description": "End-to-end office infrastructure rollout covering structured cabling, server and node setup, surveillance, telephony, and patch-panel migration with controlled cutover.",
    "tags": [
      "IT Infrastructure",
      "Structured Cabling",
      "Server Setup",
      "CCTV",
      "Telephony",
      "Migration"
    ],
    "github": "",
    "liveUrl": "",
    "image": "",
    "content": "## Overview\r\n\r\nDelivered a complete infrastructure migration for a corporate environment from baseline installation through production handover.\r\n\r\n## Technical Details\r\n\r\n- Planned and sequenced installation phases for minimal business disruption.\r\n- Coordinated structured cabling, patch-panel termination, and rack organization.\r\n- Deployed core server and node environments with connectivity validation.\r\n- Integrated CCTV and IP telephony endpoints into the network design.\r\n- Led migration cutover, verification checklists, and post-go-live support.",
    "_meta": {
      "filePath": "enterprise-it-infrastructure-migration.md",
      "fileName": "enterprise-it-infrastructure-migration.md",
      "directory": ".",
      "extension": "md",
      "path": "enterprise-it-infrastructure-migration"
    }
  },
  {
    "title": "IT Operations & Recovery Toolkit",
    "description": "Operational toolkit and practice set used across IT support and system administration work for maintenance, backups, troubleshooting, and recovery readiness.",
    "tags": [
      "IT Support",
      "System Administration",
      "Backup",
      "Recovery",
      "Operations"
    ],
    "github": "",
    "liveUrl": "",
    "image": "",
    "content": "## Overview\r\n\r\nA practical operations toolkit approach used across freelance and in-house IT roles to keep systems reliable and recoverable.\r\n\r\n## Technical Details\r\n\r\n- Supported workstation and server maintenance procedures.\r\n- Applied backup and recovery support practices for client continuity.\r\n- Standardized troubleshooting flows to resolve issues faster.\r\n- Improved day-to-day reliability through proactive maintenance routines.",
    "_meta": {
      "filePath": "network-security-audit.md",
      "fileName": "network-security-audit.md",
      "directory": ".",
      "extension": "md",
      "path": "network-security-audit"
    }
  },
  {
    "title": "Ashewyna Event Organizing App",
    "description": "Full-stack event management app connecting event organizers, vendors, and customers with secure authentication and operational workflows.",
    "tags": [
      "Flutter",
      "Node.js",
      "MongoDB",
      "API",
      "Payments"
    ],
    "github": "",
    "liveUrl": "",
    "image": "",
    "content": "## Overview\r\n\r\nAshewyna is a full-stack event organizing platform built to coordinate organizers, vendors, and customers in a single workflow.\r\n\r\n## Technical Details\r\n\r\n- Built the frontend in Flutter for a responsive, mobile-first user experience.\r\n- Implemented backend services with Node.js and MongoDB.\r\n- Led API development for authentication, payment processing, and real-time updates.\r\n- Collaborated with a team to ship user-friendly features and stable deployments.",
    "_meta": {
      "filePath": "portfolio-site.md",
      "fileName": "portfolio-site.md",
      "directory": ".",
      "extension": "md",
      "path": "portfolio-site"
    }
  },
  {
    "title": "Qignit Amharic Music App",
    "description": "A Flutter-based Amharic music streaming app focused on intuitive UX, smooth playback, and efficient data usage.",
    "tags": [
      "Flutter",
      "Dart",
      "Audio",
      "Cloud Storage",
      "Mobile App"
    ],
    "github": "",
    "liveUrl": "",
    "image": "",
    "content": "## Overview\r\n\r\nQignit is a mobile music app designed for Amharic content discovery and playback with performance and usability as core priorities.\r\n\r\n## Technical Details\r\n\r\n- Designed and developed the mobile app using Flutter.\r\n- Built an intuitive interface with smooth audio playback features.\r\n- Integrated cloud storage and APIs for streaming and content management.\r\n- Optimized performance for offline playback and lower data consumption.",
    "_meta": {
      "filePath": "task-manager.md",
      "fileName": "task-manager.md",
      "directory": ".",
      "extension": "md",
      "path": "task-manager"
    }
  }
];
function Projects() {
  const [hovered, setHovered] = useState(null);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 py-10 space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative card-tech rounded-2xl p-6 md:p-7 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "tech-grid-bg absolute inset-0 opacity-35 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "network-mesh-bg absolute inset-0 opacity-55 pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-xs font-mono text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "amanuel@server" }),
          /* @__PURE__ */ jsx("span", { children: ":~$ " }),
          /* @__PURE__ */ jsx("span", { style: {
            color: "oklch(0.75 0.2 155)"
          }, children: "ls -la ~/projects/" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-bold font-mono", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "./" }),
          /* @__PURE__ */ jsx("span", { className: "shimmer-text", children: "projects" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground font-mono max-w-3xl", children: "Software delivery, infrastructure migration, and IT operations projects executed with practical governance and clean handover standards." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: allProjects.map((project, i) => /* @__PURE__ */ jsxs("div", { className: "card-tech rounded-xl flex flex-col overflow-hidden group", onMouseEnter: () => setHovered(project._meta.path), onMouseLeave: () => setHovered(null), children: [
      /* @__PURE__ */ jsx("div", { className: "h-1 w-full transition-all duration-500", style: {
        background: i % 3 === 0 ? "linear-gradient(90deg, oklch(0.78 0.19 195), oklch(0.65 0.22 290))" : i % 3 === 1 ? "linear-gradient(90deg, oklch(0.65 0.22 290), oklch(0.75 0.2 155))" : "linear-gradient(90deg, oklch(0.75 0.2 155), oklch(0.78 0.19 195))",
        opacity: hovered === project._meta.path ? 1 : 0.4
      } }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-xs font-mono text-muted-foreground mb-3", children: [
          "PROJECT_",
          String(i + 1).padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold font-mono text-foreground mb-2 group-hover:text-primary transition-colors", children: project.title }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed flex-1 mb-4", children: project.description }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5 mb-4", children: project.tags.map((tag) => /* @__PURE__ */ jsxs("span", { className: `badge-tech text-[10px] ${i % 3 === 0 ? "" : i % 3 === 1 ? "badge-purple" : "badge-green"}`, children: [
          /* @__PURE__ */ jsx(Tag, { size: 8, className: "inline mr-0.5" }),
          tag
        ] }, tag)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 pt-3 border-t", style: {
          borderColor: "oklch(0.22 0.04 220)"
        }, children: [
          project.github && /* @__PURE__ */ jsxs("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors", children: [
            /* @__PURE__ */ jsx(Github, { size: 13 }),
            "SOURCE"
          ] }),
          project.liveUrl && /* @__PURE__ */ jsxs("a", { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-1.5 text-xs font-mono transition-colors", style: {
            color: "oklch(0.78 0.19 195)"
          }, children: [
            /* @__PURE__ */ jsx(ExternalLink, { size: 13 }),
            "LIVE DEMO"
          ] }),
          !project.github && !project.liveUrl && /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-muted-foreground", children: "INTERNAL PROJECT" })
        ] })
      ] })
    ] }, project._meta.path)) }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl p-6 text-center font-mono", style: {
      background: "oklch(0.12 0.025 240)",
      border: "1px solid oklch(0.22 0.04 220)"
    }, children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "More projects and contributions available on GitHub" }),
      /* @__PURE__ */ jsxs("a", { href: "https://github.com/Skywalker416", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-5 py-2 rounded text-sm font-medium transition-all duration-200", style: {
        background: "oklch(0.75 0.18 195 / 0.1)",
        border: "1px solid oklch(0.75 0.18 195 / 0.4)",
        color: "oklch(0.78 0.19 195)"
      }, children: [
        /* @__PURE__ */ jsx(Github, { size: 15 }),
        "VIEW ALL ON GITHUB"
      ] })
    ] })
  ] });
}
export {
  Projects as component
};
