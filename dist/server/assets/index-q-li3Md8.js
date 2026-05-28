import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Award, MapPin, Mail, ChevronRight, Server, Cloud, Shield, Network, Terminal, Layers, Github, Linkedin } from "lucide-react";
const SKILLS = [{
  name: "IT Infrastructure Management",
  level: 90,
  category: "Infrastructure"
}, {
  name: "Flutter (Dart)",
  level: 88,
  category: "Development"
}, {
  name: "Node.js Backend Development",
  level: 84,
  category: "Development"
}, {
  name: "Technical Support & Troubleshooting",
  level: 92,
  category: "Support"
}, {
  name: "Database Systems (MongoDB/MySQL)",
  level: 80,
  category: "Data"
}, {
  name: "Client Training & Onboarding",
  level: 86,
  category: "Support"
}, {
  name: "Disaster Recovery & Reliability",
  level: 82,
  category: "Infrastructure"
}, {
  name: "Productivity & Ops Tooling",
  level: 85,
  category: "Operations"
}];
const EXPERTISE = [{
  icon: Server,
  label: "IT Administration",
  desc: "Hands-on support for business systems, end-user devices, and infrastructure operations"
}, {
  icon: Cloud,
  label: "Full-Stack Delivery",
  desc: "Building practical products with Flutter frontends and Node.js/MongoDB backends"
}, {
  icon: Shield,
  label: "Operational Reliability",
  desc: "Backup, recovery, and proactive maintenance to keep services stable and available"
}, {
  icon: Network,
  label: "Networking & Support",
  desc: "Diagnosing hardware, software, and network issues in fast-paced client environments"
}, {
  icon: Terminal,
  label: "Technical Training",
  desc: "Client onboarding, documentation, and user enablement for better product adoption"
}, {
  icon: Layers,
  label: "Cross-Functional Work",
  desc: "Collaboration with support and engineering teams to improve systems and customer outcomes"
}];
const CERTS = [{
  name: "AI Mastery (10 Academy)",
  abbr: "AI"
}, {
  name: "Advanced Flutter",
  abbr: "FLUTTER"
}, {
  name: "Node.js Backend",
  abbr: "NODE"
}, {
  name: "Cybersecurity",
  abbr: "SEC"
}];
const CATEGORIES = ["All", "Infrastructure", "Development", "Support", "Data", "Operations"];
function SkillBar({
  name,
  level
}) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs font-mono", children: [
      /* @__PURE__ */ jsx("span", { className: "text-foreground", children: name }),
      /* @__PURE__ */ jsxs("span", { className: "text-primary", children: [
        level,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "skill-bar", children: /* @__PURE__ */ jsx("div", { className: "skill-bar-fill", style: {
      width: `${level}%`
    } }) })
  ] });
}
function About() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredSkills = activeCategory === "All" ? SKILLS : SKILLS.filter((s) => s.category === activeCategory);
  const networkNodes = ["left-[8%] top-[18%]", "left-[22%] top-[68%]", "left-[44%] top-[24%]", "left-[63%] top-[62%]", "left-[82%] top-[30%]"];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 py-10 space-y-16", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "tech-grid-bg absolute inset-0 rounded-2xl opacity-50 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "network-mesh-bg absolute inset-0 rounded-2xl opacity-65 pointer-events-none" }),
      networkNodes.map((pos, i) => /* @__PURE__ */ jsx("span", { className: `network-node absolute ${pos}`, style: {
        animationDelay: `${i * 220}ms`
      } }, pos)),
      /* @__PURE__ */ jsxs("div", { className: "relative card-tech rounded-2xl p-8 md:p-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-xs font-mono mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "root@server" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: ":~$" }),
          /* @__PURE__ */ jsx("span", { className: "cursor-blink", style: {
            color: "oklch(0.75 0.2 155)"
          }, children: "whoami" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-start", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-4", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold leading-tight", children: /* @__PURE__ */ jsx("span", { className: "shimmer-text", children: "Amanuel Legesse" }) }),
            /* @__PURE__ */ jsx("div", { className: "text-lg font-mono", style: {
              color: "oklch(0.65 0.22 290)"
            }, children: "Software Engineer & IT System Administrator" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed max-w-xl text-sm", children: "Software Engineering graduate with practical experience in IT support, systems administration, and client training. Focused on building dependable systems, solving technical problems quickly, and improving user operations." }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 pt-2", children: CERTS.map((c) => /* @__PURE__ */ jsxs("span", { className: "badge-tech", children: [
              /* @__PURE__ */ jsx(Award, { size: 9, className: "inline mr-1" }),
              c.abbr
            ] }, c.abbr)) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 pt-2 text-xs font-mono", children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-muted-foreground", children: [
                /* @__PURE__ */ jsx(MapPin, { size: 11 }),
                "Addis Ababa, Ethiopia"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", style: {
                color: "oklch(0.75 0.2 155)"
              }, children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-current animate-pulse" }),
                "Open to opportunities"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3 pt-2", children: [
              /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "flex items-center gap-2 px-5 py-2 rounded text-sm font-mono font-medium transition-all duration-200 glow-cyan", style: {
                background: "oklch(0.75 0.18 195 / 0.15)",
                border: "1px solid oklch(0.75 0.18 195 / 0.5)",
                color: "oklch(0.78 0.19 195)"
              }, children: [
                /* @__PURE__ */ jsx(Mail, { size: 14 }),
                "GET IN TOUCH"
              ] }),
              /* @__PURE__ */ jsxs(Link, { to: "/resume", className: "flex items-center gap-2 px-5 py-2 rounded text-sm font-mono font-medium border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200", children: [
                "VIEW RESUME",
                /* @__PURE__ */ jsx(ChevronRight, { size: 14 })
              ] }),
              /* @__PURE__ */ jsx("a", { href: "/amanuel-legesse-resume-2025.pdf", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 px-5 py-2 rounded text-sm font-mono font-medium border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200", children: "DOWNLOAD CV" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "w-36 h-36 rounded-2xl overflow-hidden glow-pulse", style: {
                border: "2px solid oklch(0.75 0.18 195 / 0.4)"
              }, children: /* @__PURE__ */ jsx("img", { src: "/aman.png", alt: "Amanuel Legesse", className: "w-full h-full object-cover", style: {
                filter: "saturate(1.05) contrast(1.06)"
              } }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-2 -right-2 text-[10px] font-mono px-2 py-1 rounded", style: {
                background: "oklch(0.12 0.025 240)",
                border: "1px solid oklch(0.75 0.2 155 / 0.4)",
                color: "oklch(0.75 0.2 155)"
              }, children: "● ONLINE" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2 w-full text-center", children: [{
              val: "3+",
              label: "Years Exp"
            }, {
              val: "3",
              label: "Core Roles"
            }, {
              val: "5",
              label: "Main Projects"
            }, {
              val: "7+",
              label: "Certificates"
            }].map((s) => /* @__PURE__ */ jsxs("div", { className: "card-tech rounded p-2", children: [
              /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-primary text-glow", children: s.val }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] text-muted-foreground font-mono", children: s.label })
            ] }, s.label)) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" }),
        /* @__PURE__ */ jsx("h2", { className: "text-xs font-mono tracking-[0.3em] text-muted-foreground", children: "AREAS OF EXPERTISE" }),
        /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: EXPERTISE.map(({
        icon: Icon,
        label,
        desc
      }) => /* @__PURE__ */ jsxs("div", { className: "card-tech rounded-xl p-5 group cursor-default", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded flex items-center justify-center transition-all group-hover:scale-110", style: {
            background: "oklch(0.75 0.18 195 / 0.1)",
            border: "1px solid oklch(0.75 0.18 195 / 0.2)"
          }, children: /* @__PURE__ */ jsx(Icon, { size: 15, style: {
            color: "oklch(0.78 0.19 195)"
          } }) }),
          /* @__PURE__ */ jsx("span", { className: "font-mono text-sm font-semibold text-foreground", children: label })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: desc })
      ] }, label)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" }),
        /* @__PURE__ */ jsx("h2", { className: "text-xs font-mono tracking-[0.3em] text-muted-foreground", children: "SKILL MATRIX" }),
        /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsx("button", { onClick: () => setActiveCategory(cat), className: ["px-3 py-1 text-xs font-mono rounded border transition-all duration-200", activeCategory === cat ? "border-primary text-primary" : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"].join(" "), style: activeCategory === cat ? {
        background: "oklch(0.75 0.18 195 / 0.1)"
      } : {}, children: cat }, cat)) }),
      /* @__PURE__ */ jsx("div", { className: "card-tech network-panel rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6", children: filteredSkills.map((skill) => /* @__PURE__ */ jsx(SkillBar, { name: skill.name, level: skill.level }, skill.name)) })
    ] }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl p-6 font-mono text-sm space-y-1", style: {
      background: "oklch(0.07 0.015 240)",
      border: "1px solid oklch(0.22 0.04 220)"
    }, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-red-500/70" }),
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500/70" }),
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-500/70" }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-xs ml-2", children: "bash — amanuel@workstation" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "amanuel@workstation" }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: ":~$ " }),
        /* @__PURE__ */ jsx("span", { style: {
          color: "oklch(0.75 0.2 155)"
        }, children: "cat philosophy.txt" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground pl-0 pt-2 leading-relaxed text-xs", children: [
        '"Good systems are built for people first: clear onboarding,',
        /* @__PURE__ */ jsx("br", {}),
        'reliable operations, and practical solutions to real problems."'
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 pt-2 text-xs", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "amanuel@workstation" }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: ":~$" }),
        /* @__PURE__ */ jsx("span", { className: "cursor-blink" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "flex flex-wrap gap-4 justify-center pb-4", children: [{
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Skywalker416"
    }, {
      icon: Linkedin,
      label: "LinkedIn",
      href: "http://www.linkedin.com/in/amanuel-legesse-041949205"
    }, {
      icon: Mail,
      label: "Email",
      href: "/contact"
    }].map(({
      icon: Icon,
      label,
      href
    }) => /* @__PURE__ */ jsxs("a", { href, className: "flex items-center gap-2 px-4 py-2 rounded text-xs font-mono text-muted-foreground border border-border hover:text-primary hover:border-primary/40 transition-all duration-200", children: [
      /* @__PURE__ */ jsx(Icon, { size: 13 }),
      label
    ] }, label)) })
  ] });
}
export {
  About as component
};
