import {
  HeadContent,
  Scripts,
  createRootRoute,
  Link,
  useRouterState,
} from '@tanstack/react-router'
import '../styles.css'
import { Terminal, User, Briefcase, Code2, Mail, Cpu } from 'lucide-react'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Amanuel Legesse — Software Engineer & IT System Administrator' },
    ],
  }),
  shellComponent: RootDocument,
})

const NAV_TABS = [
  { to: '/', label: 'ABOUT', icon: User, exact: true },
  { to: '/resume', label: 'EXPERIENCE', icon: Briefcase },
  { to: '/projects', label: 'PROJECTS', icon: Code2 },
  { to: '/contact', label: 'CONTACT', icon: Mail },
]

function TabNav() {
  const { location } = useRouterState()
  const path = location.pathname

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header row */}
        <div className="flex items-center justify-between py-3 border-b border-border/40">
          <div className="flex items-center gap-2">
            <div className="glow-pulse w-8 h-8 rounded border border-primary/40 flex items-center justify-center">
              <Cpu size={16} className="text-primary" />
            </div>
            <div>
              <div className="text-sm font-bold text-primary text-glow tracking-widest">AMANUEL L.</div>
              <div className="text-[10px] text-muted-foreground tracking-[0.2em]">SOFTWARE ENG · IT ADMIN</div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono opacity-70">
            <span className="text-primary">●</span>
            <span className="text-muted-foreground">SYSTEMS ONLINE</span>
            <span className="text-border mx-2">|</span>
            <span style={{ color: 'oklch(0.75 0.2 155)' }}>UPTIME 99.9%</span>
          </div>
        </div>
        {/* Tab row */}
        <div className="tab-network-wrap">
          <div className="tab-network-grid" />
          <div className="tab-network-lines">
            <span className="tab-network-link tab-network-link-1" />
            <span className="tab-network-link tab-network-link-2" />
            <span className="tab-network-link tab-network-link-3" />
          </div>
          <div className="tab-network-nodes">
            <span className="tab-network-node tab-network-node-1" />
            <span className="tab-network-node tab-network-node-2" />
            <span className="tab-network-node tab-network-node-3" />
            <span className="tab-network-node tab-network-node-4" />
            <span className="tab-network-node tab-network-node-5" />
          </div>
          <div className="relative z-10 flex items-center overflow-x-auto">
            {NAV_TABS.map(({ to, label, icon: Icon, exact }) => {
              const isActive = exact ? path === to : path.startsWith(to)
              return (
                <Link
                  key={to}
                  to={to}
                  className={[
                    'tab-network-item flex items-center gap-1.5 px-4 py-3 text-xs tracking-widest font-medium transition-all duration-200 border-b-2 whitespace-nowrap',
                    isActive
                      ? 'tab-active border-primary'
                      : 'text-muted-foreground border-transparent hover:text-foreground hover:border-border',
                  ].join(' ')}
                >
                  <Icon size={12} />
                  {label}
                </Link>
              )
            })}
            <div className="ml-auto pr-2 hidden md:flex items-center gap-1 text-[10px] text-muted-foreground font-mono">
              <Terminal size={10} />
              <span>v2.4.1</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background">
        <TabNav />
        <main>{children}</main>
        <footer className="border-t border-border mt-16 py-6">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>© 2026 AMANUEL LEGESSE — ALL RIGHTS RESERVED</span>
            <span style={{ color: 'oklch(0.75 0.2 155)' }}>$ echo "thanks for visiting"</span>
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
