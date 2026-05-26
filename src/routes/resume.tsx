import { marked } from 'marked'
import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { useState } from 'react'
import { Briefcase, GraduationCap, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function JobCard({ job }: { job: typeof allJobs[0] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="card-tech rounded-xl overflow-hidden">
      {/* Header */}
      <div
        className="p-5 cursor-pointer select-none"
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  background: job.endDate ? 'oklch(0.65 0.22 290)' : 'oklch(0.75 0.2 155)',
                }}
              />
              <span
                className="text-xs font-mono px-2 py-0.5 rounded"
                style={{
                  background: job.endDate
                    ? 'oklch(0.65 0.22 290 / 0.1)'
                    : 'oklch(0.75 0.2 155 / 0.1)',
                  border: `1px solid ${job.endDate ? 'oklch(0.65 0.22 290 / 0.3)' : 'oklch(0.75 0.2 155 / 0.3)'}`,
                  color: job.endDate ? 'oklch(0.75 0.15 290)' : 'oklch(0.75 0.2 155)',
                }}
              >
                {job.endDate ? 'PAST' : 'CURRENT'}
              </span>
            </div>
            <h3 className="text-lg font-bold text-foreground font-mono">{job.jobTitle}</h3>
            <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-muted-foreground font-mono">
              <span className="text-primary font-semibold">{job.company}</span>
              <span className="flex items-center gap-1">
                <MapPin size={10} />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={10} />
                {job.startDate} — {job.endDate || 'Present'}
              </span>
            </div>
          </div>
          <button className="text-muted-foreground mt-1 shrink-0">
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mt-3">{job.summary}</p>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {job.tags.map((tag) => (
            <span key={tag} className="badge-tech">{tag}</span>
          ))}
        </div>
      </div>

      {/* Expandable content */}
      {expanded && job.content && (
        <div
          className="px-5 pb-5 border-t"
          style={{ borderColor: 'oklch(0.22 0.04 220)' }}
        >
          <div
            className="prose prose-sm max-w-none pt-4 text-xs"
            dangerouslySetInnerHTML={{ __html: marked(job.content) as string }}
          />
        </div>
      )}
    </div>
  )
}

function Resume() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience')
  const jobs = [...allJobs].sort((a, b) => {
    const aTime = Date.parse(a.startDate)
    const bTime = Date.parse(b.startDate)
    return Number.isNaN(bTime) || Number.isNaN(aTime) ? 0 : bTime - aTime
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      {/* Page header */}
      <div className="space-y-2">
        <div className="text-xs font-mono text-muted-foreground">
          <span className="text-primary">amanuel@server</span>
          <span>:~$ </span>
          <span style={{ color: 'oklch(0.75 0.2 155)' }}>cat resume.json | jq .</span>
        </div>
        <h1 className="text-3xl font-bold font-mono text-foreground">
          <span className="text-primary">{'{'}</span>
          <span className="shimmer-text"> Resume </span>
          <span className="text-primary">{'}'}</span>
        </h1>
        <p className="text-sm text-muted-foreground font-mono">
          Software Engineering graduate with hands-on experience in IT support, systems administration, and client-focused technical training.
        </p>
        <a
          href="/amanuel-legesse-resume-2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-2 items-center gap-2 px-4 py-2 rounded text-xs font-mono transition-all duration-200"
          style={{
            background: 'oklch(0.75 0.18 195 / 0.12)',
            border: '1px solid oklch(0.75 0.18 195 / 0.4)',
            color: 'oklch(0.78 0.19 195)',
          }}
        >
          DOWNLOAD FULL RESUME (PDF)
        </a>
      </div>

      {/* Sub-tabs */}
      <div className="flex gap-1 p-1 rounded-lg" style={{ background: 'oklch(0.12 0.025 240)', border: '1px solid oklch(0.22 0.04 220)' }}>
        <button
          onClick={() => setActiveTab('experience')}
          className={[
            'flex items-center gap-2 flex-1 justify-center py-2 px-4 rounded text-xs font-mono font-medium transition-all duration-200',
            activeTab === 'experience'
              ? 'text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground',
          ].join(' ')}
          style={activeTab === 'experience' ? {
            background: 'oklch(0.75 0.18 195)',
            boxShadow: '0 0 12px oklch(0.75 0.18 195 / 0.4)',
          } : {}}
        >
          <Briefcase size={13} />
          WORK EXPERIENCE
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={[
            'flex items-center gap-2 flex-1 justify-center py-2 px-4 rounded text-xs font-mono font-medium transition-all duration-200',
            activeTab === 'education'
              ? 'text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground',
          ].join(' ')}
          style={activeTab === 'education' ? {
            background: 'oklch(0.75 0.18 195)',
            boxShadow: '0 0 12px oklch(0.75 0.18 195 / 0.4)',
          } : {}}
        >
          <GraduationCap size={13} />
          EDUCATION &amp; CERTS
        </button>
      </div>

      {/* Experience */}
      {activeTab === 'experience' && (
        <div className="space-y-4">
          {/* Timeline line */}
          <div className="relative pl-6">
            <div
              className="absolute left-0 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, oklch(0.75 0.18 195), oklch(0.65 0.22 290 / 0.3))' }}
            />
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <div key={job.jobTitle} className="relative">
                  <div
                    className="absolute -left-8 top-5 w-3 h-3 rounded-full border-2"
                    style={{
                      background: i === 0 ? 'oklch(0.75 0.2 155)' : 'oklch(0.12 0.025 240)',
                      borderColor: i === 0 ? 'oklch(0.75 0.2 155)' : 'oklch(0.65 0.22 290)',
                      boxShadow: i === 0 ? '0 0 8px oklch(0.75 0.2 155 / 0.6)' : 'none',
                    }}
                  />
                  <JobCard job={job} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Education */}
      {activeTab === 'education' && (
        <div className="space-y-4">
          {allEducations.map((edu) => (
            <div key={edu.school} className="card-tech rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: 'oklch(0.65 0.22 290 / 0.1)',
                    border: '1px solid oklch(0.65 0.22 290 / 0.3)',
                  }}
                >
                  <GraduationCap size={18} style={{ color: 'oklch(0.75 0.15 290)' }} />
                </div>
                <div>
                  <h3 className="font-bold font-mono text-foreground">{edu.school}</h3>
                  <p className="text-sm text-muted-foreground font-mono">{edu.summary}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {edu.startDate} — {edu.endDate}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {edu.tags.map((tag) => (
                  <span key={tag} className="badge-tech badge-purple">{tag}</span>
                ))}
              </div>
              {edu.content && (
                <div
                  className="prose prose-sm max-w-none text-xs border-t pt-4"
                  style={{ borderColor: 'oklch(0.22 0.04 220)' }}
                  dangerouslySetInnerHTML={{ __html: marked(edu.content) as string }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
