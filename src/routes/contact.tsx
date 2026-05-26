import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, Send, CheckCircle, Phone, Linkedin, Github, MapPin, Clock } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const inputClass = (name: string) =>
    [
      'w-full px-4 py-2.5 rounded font-mono text-sm bg-input text-foreground outline-none transition-all duration-200 border',
      focused === name
        ? 'border-primary'
        : 'border-border hover:border-primary/30',
    ].join(' ')
  const inputStyle = (name: string): React.CSSProperties =>
    focused === name
      ? { boxShadow: '0 0 0 1px oklch(0.75 0.18 195 / 0.3), 0 0 12px oklch(0.75 0.18 195 / 0.1)' }
      : {}

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="card-tech rounded-2xl p-10 text-center max-w-md w-full">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: 'oklch(0.75 0.2 155 / 0.1)', border: '1px solid oklch(0.75 0.2 155 / 0.3)' }}
          >
            <CheckCircle size={28} style={{ color: 'oklch(0.75 0.2 155)' }} />
          </div>
          <div className="font-mono text-xs text-muted-foreground mb-2">STATUS: 200 OK</div>
          <h2 className="text-xl font-bold font-mono text-foreground mb-2">Message Transmitted</h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Packet received successfully. I'll respond within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-5 py-2 rounded text-sm font-mono transition-all duration-200"
            style={{
              background: 'oklch(0.75 0.18 195 / 0.1)',
              border: '1px solid oklch(0.75 0.18 195 / 0.4)',
              color: 'oklch(0.78 0.19 195)',
            }}
          >
            SEND ANOTHER
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="text-xs font-mono text-muted-foreground">
          <span className="text-primary">amanuel@server</span>
          <span>:~$ </span>
          <span style={{ color: 'oklch(0.75 0.2 155)' }}>nc -l 80 # open for connections</span>
        </div>
        <h1 className="text-3xl font-bold font-mono">
          <span className="text-primary">PING</span>
          <span className="shimmer-text"> ME</span>
        </h1>
        <p className="text-sm text-muted-foreground font-mono">
          Open to software engineering, IT systems, and technical support opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Contact info sidebar */}
        <div className="lg:col-span-2 space-y-4">
          <div className="card-tech rounded-xl p-5 space-y-4">
            <h2 className="text-xs font-mono tracking-widest text-muted-foreground">CONNECTION INFO</h2>
            {[
              { icon: Mail, label: 'Email', value: 'ese.amanuel.legesse@gmail.com', href: 'mailto:ese.amanuel.legesse@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+251 939 658979', href: 'tel:+251939658979' },
              { icon: MapPin, label: 'Location', value: 'Addis Ababa, Ethiopia', href: null },
              { icon: Clock, label: 'Timezone', value: 'EAT (UTC+3)', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'oklch(0.75 0.18 195 / 0.1)', border: '1px solid oklch(0.75 0.18 195 / 0.2)' }}
                >
                  <Icon size={12} style={{ color: 'oklch(0.78 0.19 195)' }} />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-mono">{label}</div>
                  {href ? (
                    <a href={href} className="text-xs text-foreground font-mono hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : (
                    <div className="text-xs text-foreground font-mono">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="card-tech rounded-xl p-5 space-y-3">
            <h2 className="text-xs font-mono tracking-widest text-muted-foreground">SOCIAL LINKS</h2>
            {[
              { icon: Linkedin, label: 'LinkedIn', href: 'http://www.linkedin.com/in/amanuel-legesse-041949205' },
              { icon: Github, label: 'GitHub', href: 'https://github.com/Skywalker416' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={13} />
                {label}
              </a>
            ))}
          </div>

          {/* Status indicator */}
          <div
            className="rounded-xl p-4 font-mono text-xs"
            style={{ background: 'oklch(0.07 0.015 240)', border: '1px solid oklch(0.22 0.04 220)' }}
          >
            <div style={{ color: 'oklch(0.75 0.2 155)' }}>$ ping amanuel.dev</div>
            <div className="text-muted-foreground mt-1">64 bytes from amanuel: icmp_seq=1 ttl=64 time=&lt;24h</div>
            <div className="text-muted-foreground">--- amanuel ping statistics ---</div>
            <div style={{ color: 'oklch(0.75 0.2 155)' }}>1 packet transmitted, 1 received, 0% packet loss</div>
          </div>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-3">
          <div className="card-tech rounded-xl p-6">
            <h2 className="text-xs font-mono tracking-widest text-muted-foreground mb-5">COMPOSE MESSAGE</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const formData = new FormData(form)
                fetch('/contact.html', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: new URLSearchParams(
                    formData as unknown as Record<string, string>,
                  ).toString(),
                }).then(() => setSubmitted(true))
              }}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-muted-foreground mb-1.5">
                    NAME <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className={inputClass('name')}
                    style={inputStyle('name')}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-1.5">
                    EMAIL <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className={inputClass('email')}
                    style={inputStyle('email')}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-muted-foreground mb-1.5">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Job opportunity / consulting / general inquiry"
                  className={inputClass('subject')}
                  style={inputStyle('subject')}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-1.5">
                  MESSAGE <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass('message')} resize-none`}
                  style={inputStyle('message')}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded text-sm font-mono font-semibold transition-all duration-200 glow-cyan"
                style={{
                  background: 'oklch(0.75 0.18 195 / 0.15)',
                  border: '1px solid oklch(0.75 0.18 195 / 0.5)',
                  color: 'oklch(0.78 0.19 195)',
                }}
              >
                <Send size={15} />
                TRANSMIT MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
