import Link from "next/link";

const sections = [
  {
    emoji: "🚀",
    title: "Quick Wins",
    description: "Copy-paste prompts that deliver instant value",
    href: "/quick-wins",
  },
  {
    emoji: "🧠",
    title: "Productivity Systems",
    description: "Structured workflows for business owners",
    href: "/productivity",
  },
  {
    emoji: "🤖",
    title: "Agent Architecture",
    description: "Design and build multi-agent systems",
    href: "/architecture",
  },
  {
    emoji: "💼",
    title: "EMVY-Specific",
    description: "Built for EMVY audit clients and prospects",
    href: "/emvy",
  },
  {
    emoji: "💡",
    title: "Tips & Tricks",
    description: "Prompt engineering, vault tips, OpenClaw workflows",
    href: "/tips",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-200 font-sans">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-32 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="mb-8 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm text-zinc-400">
          <span className="text-blue-400">Dawn Labs</span> × <span className="text-amber-400">Hermes</span> Edition
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
          AI Agent Prompts & Playbooks
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
          The playbook for building with AI agents.
          <br />
          <span className="text-zinc-300">Copy. Paste. Ship.</span>
        </p>

        {/* CTA */}
        <Link
          href="/get-playbook"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
        >
          Get the Playbook
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </main>

      {/* Sections Grid */}
      <section id="sections" className="px-6 pb-24 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group relative flex flex-col p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <span className="text-4xl mb-4 block">{section.emoji}</span>
                <h2 className="text-xl font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors">
                  {section.title}
                </h2>
                <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors text-sm leading-relaxed">
                  {section.description}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
                →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <span>Built by</span>
            <span className="text-blue-400 font-medium">Dawn Labs</span>
            <span>×</span>
            <span className="text-amber-400 font-medium">Hermes</span>
          </div>
          <p className="text-zinc-600">For builders. By builders.</p>
        </div>
      </footer>
    </div>
  );
}
