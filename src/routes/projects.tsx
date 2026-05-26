import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ExternalLink, Github, Tag } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      {/* Header */}
      <div className="relative card-tech rounded-2xl p-6 md:p-7 overflow-hidden">
        <div className="tech-grid-bg absolute inset-0 opacity-35 pointer-events-none" />
        <div className="network-mesh-bg absolute inset-0 opacity-55 pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <div className="text-xs font-mono text-muted-foreground">
            <span className="text-primary">amanuel@server</span>
            <span>:~$ </span>
            <span style={{ color: 'oklch(0.75 0.2 155)' }}>ls -la ~/projects/</span>
          </div>
          <h1 className="text-3xl font-bold font-mono">
            <span className="text-primary">./</span>
            <span className="shimmer-text">projects</span>
          </h1>
          <p className="text-sm text-muted-foreground font-mono max-w-3xl">
            Software delivery, infrastructure migration, and IT operations projects executed with practical governance and clean handover standards.
          </p>
        </div>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allProjects.map((project, i) => (
          <div
            key={project._meta.path}
            className="card-tech rounded-xl flex flex-col overflow-hidden group"
            onMouseEnter={() => setHovered(project._meta.path)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Top accent bar */}
            <div
              className="h-1 w-full transition-all duration-500"
              style={{
                background: i % 3 === 0
                  ? 'linear-gradient(90deg, oklch(0.78 0.19 195), oklch(0.65 0.22 290))'
                  : i % 3 === 1
                  ? 'linear-gradient(90deg, oklch(0.65 0.22 290), oklch(0.75 0.2 155))'
                  : 'linear-gradient(90deg, oklch(0.75 0.2 155), oklch(0.78 0.19 195))',
                opacity: hovered === project._meta.path ? 1 : 0.4,
              }}
            />

            <div className="p-5 flex flex-col flex-1">
              {/* Project number */}
              <div className="text-xs font-mono text-muted-foreground mb-3">
                PROJECT_{String(i + 1).padStart(2, '0')}
              </div>

              <h3 className="font-bold font-mono text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`badge-tech text-[10px] ${
                      i % 3 === 0 ? '' : i % 3 === 1 ? 'badge-purple' : 'badge-green'
                    }`}
                  >
                    <Tag size={8} className="inline mr-0.5" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-3 border-t" style={{ borderColor: 'oklch(0.22 0.04 220)' }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={13} />
                    SOURCE
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono transition-colors"
                    style={{ color: 'oklch(0.78 0.19 195)' }}
                  >
                    <ExternalLink size={13} />
                    LIVE DEMO
                  </a>
                )}
                {!project.github && !project.liveUrl && (
                  <span className="text-xs font-mono text-muted-foreground">INTERNAL PROJECT</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        className="rounded-xl p-6 text-center font-mono"
        style={{ background: 'oklch(0.12 0.025 240)', border: '1px solid oklch(0.22 0.04 220)' }}
      >
        <p className="text-sm text-muted-foreground mb-3">
          More projects and contributions available on GitHub
        </p>
        <a
          href="https://github.com/Skywalker416"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded text-sm font-medium transition-all duration-200"
          style={{
            background: 'oklch(0.75 0.18 195 / 0.1)',
            border: '1px solid oklch(0.75 0.18 195 / 0.4)',
            color: 'oklch(0.78 0.19 195)',
          }}
        >
          <Github size={15} />
          VIEW ALL ON GITHUB
        </a>
      </div>
    </div>
  )
}
