import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'

export default async function PlaybookPage() {
  const filePath = path.join(process.cwd(), 'app/playbook.md')
  const content = fs.readFileSync(filePath, 'utf8')

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-200">
      {/* Nav */}
      <nav className="border-b border-zinc-800 px-6 py-4">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="text-zinc-400 hover:text-white transition-colors text-sm">
            ← Back to Playbook
          </a>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold text-zinc-100 mb-4 mt-12 first:mt-0">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold text-amber-400 mt-10 mb-4">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-3">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="text-zinc-300 leading-relaxed mb-4">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside text-zinc-300 space-y-1 mb-4">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside text-zinc-300 space-y-1 mb-4">{children}</ol>
            ),
            li: ({ children }) => (
              <li className="text-zinc-300">{children}</li>
            ),
            strong: ({ children }) => (
              <strong className="text-zinc-100 font-semibold">{children}</strong>
            ),
            code: ({ children }) => (
              <code className="bg-zinc-800 text-amber-300 px-2 py-1 rounded text-sm font-mono">
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 overflow-x-auto mb-6 text-sm">
                {children}
              </pre>
            ),
            hr: () => <hr className="border-zinc-800 my-8" />,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-amber-500 pl-4 italic text-zinc-400 mb-4">
                {children}
              </blockquote>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">{children}</table>
              </div>
            ),
            th: ({ children }) => (
              <th className="text-left text-zinc-400 font-medium border-b border-zinc-800 pb-2 pr-4">{children}</th>
            ),
            td: ({ children }) => (
              <td className="text-zinc-300 border-b border-zinc-800 py-2 pr-4">{children}</td>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  )
}
