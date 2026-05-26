import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Server,
  Shield,
  Cloud,
  Network,
  Terminal,
  Layers,
  Award,
  MapPin,
  Mail,
  Linkedin,
  Github,
  ChevronRight,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: About,
})

const SKILLS = [
  { name: 'IT Infrastructure Management', level: 90, category: 'Infrastructure' },
  { name: 'Flutter (Dart)', level: 88, category: 'Development' },
  { name: 'Node.js Backend Development', level: 84, category: 'Development' },
  { name: 'Technical Support & Troubleshooting', level: 92, category: 'Support' },
  { name: 'Database Systems (MongoDB/MySQL)', level: 80, category: 'Data' },
  { name: 'Client Training & Onboarding', level: 86, category: 'Support' },
  { name: 'Disaster Recovery & Reliability', level: 82, category: 'Infrastructure' },
  { name: 'Productivity & Ops Tooling', level: 85, category: 'Operations' },
]

const EXPERTISE = [
  { icon: Server, label: 'IT Administration', desc: 'Hands-on support for business systems, end-user devices, and infrastructure operations' },
  { icon: Cloud, label: 'Full-Stack Delivery', desc: 'Building practical products with Flutter frontends and Node.js/MongoDB backends' },
  { icon: Shield, label: 'Operational Reliability', desc: 'Backup, recovery, and proactive maintenance to keep services stable and available' },
  { icon: Network, label: 'Networking & Support', desc: 'Diagnosing hardware, software, and network issues in fast-paced client environments' },
  { icon: Terminal, label: 'Technical Training', desc: 'Client onboarding, documentation, and user enablement for better product adoption' },
  { icon: Layers, label: 'Cross-Functional Work', desc: 'Collaboration with support and engineering teams to improve systems and customer outcomes' },
]

const CERTS = [
  { name: 'AI Mastery (10 Academy)', abbr: 'AI' },
  { name: 'Advanced Flutter', abbr: 'FLUTTER' },
  { name: 'Node.js Backend', abbr: 'NODE' },
  { name: 'Cybersecurity', abbr: 'SEC' },
]

type SkillCategory = 'All' | 'Infrastructure' | 'Development' | 'Support' | 'Data' | 'Operations'
const CATEGORIES: SkillCategory[] = ['All', 'Infrastructure', 'Development', 'Support', 'Data', 'Operations']

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs font-mono">
        <span className="text-foreground">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}

function About() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All')
  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory)
  const networkNodes = [
    'left-[8%] top-[18%]',
    'left-[22%] top-[68%]',
    'left-[44%] top-[24%]',
    'left-[63%] top-[62%]',
    'left-[82%] top-[30%]',
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">

      {/* ── HERO ── */}
      <section className="relative">
        <div className="tech-grid-bg absolute inset-0 rounded-2xl opacity-50 pointer-events-none" />
        <div className="network-mesh-bg absolute inset-0 rounded-2xl opacity-65 pointer-events-none" />
        {networkNodes.map((pos, i) => (
          <span
            key={pos}
            className={`network-node absolute ${pos}`}
            style={{ animationDelay: `${i * 220}ms` }}
          />
        ))}
        <div className="relative card-tech rounded-2xl p-8 md:p-12">
          <div className="text-xs font-mono mb-6 flex items-center gap-2">
            <span className="text-primary">root@server</span>
            <span className="text-muted-foreground">:~$</span>
            <span className="cursor-blink" style={{ color: 'oklch(0.75 0.2 155)' }}>whoami</span>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="shimmer-text">Amanuel Legesse</span>
              </h1>
              <div className="text-lg font-mono" style={{ color: 'oklch(0.65 0.22 290)' }}>
                Software Engineer &amp; IT System Administrator
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-xl text-sm">
                Software Engineering graduate with practical experience in IT support,
                systems administration, and client training. Focused on building dependable
                systems, solving technical problems quickly, and improving user operations.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {CERTS.map((c) => (
                  <span key={c.abbr} className="badge-tech">
                    <Award size={9} className="inline mr-1" />
                    {c.abbr}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono">
                <span className="flex items-center gap-1 text-muted-foreground">
                  <MapPin size={11} />
                  Addis Ababa, Ethiopia
                </span>
                <span className="flex items-center gap-1" style={{ color: 'oklch(0.75 0.2 155)' }}>
                  <span className="inline-block w-2 h-2 rounded-full bg-current animate-pulse" />
                  Open to opportunities
                </span>
              </div>

              <div className="flex gap-3 pt-2">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-5 py-2 rounded text-sm font-mono font-medium transition-all duration-200 glow-cyan"
                  style={{
                    background: 'oklch(0.75 0.18 195 / 0.15)',
                    border: '1px solid oklch(0.75 0.18 195 / 0.5)',
                    color: 'oklch(0.78 0.19 195)',
                  }}
                >
                  <Mail size={14} />
                  GET IN TOUCH
                </Link>
                <Link
                  to="/resume"
                  className="flex items-center gap-2 px-5 py-2 rounded text-sm font-mono font-medium border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
                >
                  VIEW RESUME
                  <ChevronRight size={14} />
                </Link>
                <a
                  href="/amanuel-legesse-resume-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded text-sm font-mono font-medium border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div
                  className="w-36 h-36 rounded-2xl overflow-hidden glow-pulse"
                  style={{ border: '2px solid oklch(0.75 0.18 195 / 0.4)' }}
                >
                  <img
                    src="/aman.png"
                    alt="Amanuel Legesse"
                    className="w-full h-full object-cover"
                    style={{ filter: 'saturate(1.05) contrast(1.06)' }}
                  />
                </div>
                <div
                  className="absolute -bottom-2 -right-2 text-[10px] font-mono px-2 py-1 rounded"
                  style={{
                    background: 'oklch(0.12 0.025 240)',
                    border: '1px solid oklch(0.75 0.2 155 / 0.4)',
                    color: 'oklch(0.75 0.2 155)',
                  }}
                >
                  ● ONLINE
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 w-full text-center">
                {[
                  { val: '3+', label: 'Years Exp' },
                  { val: '3', label: 'Core Roles' },
                  { val: '5', label: 'Main Projects' },
                  { val: '7+', label: 'Certificates' },
                ].map((s) => (
                  <div key={s.label} className="card-tech rounded p-2">
                    <div className="text-lg font-bold text-primary text-glow">{s.val}</div>
                    <div className="text-[10px] text-muted-foreground font-mono">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-xs font-mono tracking-[0.3em] text-muted-foreground">AREAS OF EXPERTISE</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXPERTISE.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="card-tech rounded-xl p-5 group cursor-default">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded flex items-center justify-center transition-all group-hover:scale-110"
                  style={{
                    background: 'oklch(0.75 0.18 195 / 0.1)',
                    border: '1px solid oklch(0.75 0.18 195 / 0.2)',
                  }}
                >
                  <Icon size={15} style={{ color: 'oklch(0.78 0.19 195)' }} />
                </div>
                <span className="font-mono text-sm font-semibold text-foreground">{label}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-xs font-mono tracking-[0.3em] text-muted-foreground">SKILL MATRIX</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={[
                'px-3 py-1 text-xs font-mono rounded border transition-all duration-200',
                activeCategory === cat
                  ? 'border-primary text-primary'
                  : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground',
              ].join(' ')}
              style={activeCategory === cat ? { background: 'oklch(0.75 0.18 195 / 0.1)' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="card-tech network-panel rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>

      {/* ── TERMINAL QUOTE ── */}
      <section>
        <div
          className="rounded-xl p-6 font-mono text-sm space-y-1"
          style={{ background: 'oklch(0.07 0.015 240)', border: '1px solid oklch(0.22 0.04 220)' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="text-muted-foreground text-xs ml-2">bash — amanuel@workstation</span>
          </div>
          <div>
            <span className="text-primary">amanuel@workstation</span>
            <span className="text-muted-foreground">:~$ </span>
            <span style={{ color: 'oklch(0.75 0.2 155)' }}>cat philosophy.txt</span>
          </div>
          <div className="text-muted-foreground pl-0 pt-2 leading-relaxed text-xs">
            "Good systems are built for people first: clear onboarding,<br />
            reliable operations, and practical solutions to real problems."
          </div>
          <div className="flex items-center gap-1 pt-2 text-xs">
            <span className="text-primary">amanuel@workstation</span>
            <span className="text-muted-foreground">:~$</span>
            <span className="cursor-blink" />
          </div>
        </div>
      </section>

      {/* ── SOCIAL LINKS ── */}
      <section className="flex flex-wrap gap-4 justify-center pb-4">
        {[
          { icon: Github, label: 'GitHub', href: 'https://github.com/Skywalker416' },
          { icon: Linkedin, label: 'LinkedIn', href: 'http://www.linkedin.com/in/amanuel-legesse-041949205' },
          { icon: Mail, label: 'Email', href: '/contact' },
        ].map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-2 px-4 py-2 rounded text-xs font-mono text-muted-foreground border border-border hover:text-primary hover:border-primary/40 transition-all duration-200"
          >
            <Icon size={13} />
            {label}
          </a>
        ))}
      </section>
    </div>
  )
}
