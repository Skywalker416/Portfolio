import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { marked } from 'marked'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPost,
})

function BlogPost() {
  const { slug } = Route.useParams()
  const post = allBlogs.find((p) => p._meta.path === slug)

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center font-mono">
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <p className="text-muted-foreground mb-6 text-sm">Post not found in filesystem</p>
          <Link to="/" className="text-xs text-primary hover:text-primary/80 underline">
            ← return home
          </Link>
        </div>
      </div>
    )
  }

  const html = marked(post.content)

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft size={13} />
        BACK TO HOME
      </Link>

      <article>
        <header className="mb-8 card-tech rounded-xl p-6">
          <div className="text-xs font-mono text-muted-foreground mb-3">
            <span className="text-primary">amanuel@server</span>:~$ cat{' '}
            <span style={{ color: 'oklch(0.75 0.2 155)' }}>{slug}.md</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold font-mono text-foreground mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <User size={11} />
              {post.author}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span key={tag} className="badge-tech">
                <Tag size={8} className="inline mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div
          className="prose prose-sm max-w-none card-tech rounded-xl p-6"
          dangerouslySetInnerHTML={{ __html: html as string }}
        />
      </article>
    </div>
  )
}
