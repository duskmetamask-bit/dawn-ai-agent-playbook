'use client'

import { useState } from 'react'

export default function GetPlaybookPage() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Store locally
    try {
      const existing = JSON.parse(localStorage.getItem('playbook_signups') || '[]')
      existing.push({ email, date: new Date().toISOString() })
      localStorage.setItem('playbook_signups', JSON.stringify(existing))
    } catch {}

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-zinc-100">
      {/* Nav */}
      <nav className="border-b border-zinc-800 px-6 py-5">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <a href="/" className="text-sm font-bold text-indigo-400 tracking-widest uppercase">EMVY</a>
          <a href="/" className="text-sm text-zinc-500 hover:text-zinc-300">Back to EMVY</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-20 max-w-3xl mx-auto">
        <div className="inline-block text-xs font-bold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 px-4 py-1.5 rounded-full mb-6">
          Free Download
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
          The <span className="text-indigo-400">AI Agent Playbook</span>
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed mb-3 max-w-xl mx-auto">
          A complete, practical guide to setting up your own AI agent system. Setup instructions, working cron job examples, copy-paste templates, and step-by-step walkthroughs.
        </p>
        <p className="text-sm text-green-400 font-medium">
          1,000+ lines. Free forever. No credit card required.
        </p>
      </section>

      {/* Preview Grid */}
      <section className="px-6 pb-16 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { num: 'Part 1', title: 'Setup Guide', desc: 'Vault structure, Telegram connection, and the three parts every AI agent system needs.' },
            { num: 'Part 2', title: 'Cron Jobs & Automation', desc: '5 working cron job examples with full prompts. Morning briefings, evening reviews, weekly recaps.' },
            { num: 'Part 3', title: 'Step-by-Step Walkthroughs', desc: 'Build your first automation in 20 minutes. Lead research system in 30. Content pipeline in an hour.' },
            { num: 'Part 4', title: 'File Templates', desc: '5 copy-paste templates: Profile, Project Brief, Weekly Review, ICP, and Content Calendar.' },
          ].map((card) => (
            <div key={card.num} className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-5 text-left">
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">{card.num}</div>
              <h3 className="font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
          <div className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-5 text-left sm:col-span-2">
            <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">Part 5</div>
            <h3 className="font-semibold mb-2">Quick Reference</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Cron syntax cheat sheet, delivery destinations (Telegram, Discord, Email), most-used OpenClaw commands, and troubleshooting for 5 common problems.</p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6"><hr className="border-zinc-800 mb-16"/></div>

      {/* How It Works */}
      <section className="px-6 pb-16 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-center mb-8">How to Use This Playbook</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: '📄', title: 'Pick a Guide', desc: 'Start with the 20-minute setup guide or jump to whatever you need.' },
            { icon: '📋', title: 'Copy the Prompts', desc: 'Every cron job and template is ready to copy and paste. No editing needed.' },
            { icon: '🚀', title: 'Run It', desc: 'Set up your agent once. It runs on autopilot from there.' },
          ].map((step) => (
            <div key={step.title} className="text-center">
              <div className="text-3xl mb-3">{step.icon}</div>
              <h4 className="font-semibold mb-2">{step.title}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section className="bg-[#151515] px-6 py-16" id="get-access">
        <div className="max-w-md mx-auto text-center">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-semibold mb-2">Get Free Access</h2>
              <p className="text-zinc-400 text-sm mb-8">Enter your email. We'll show you the link. That's it.</p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourbusiness.com"
                  required
                  className="bg-[#0d0d0d] border border-zinc-700 rounded-lg px-4 py-3.5 text-base text-zinc-100 outline-none focus:border-indigo-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 text-white font-semibold py-3.5 px-8 rounded-lg transition-all hover:-translate-y-px"
                >
                  {loading ? 'Getting your link...' : 'Get the Playbook'}
                </button>
              </form>
              <p className="text-xs text-zinc-500">No spam. No BS. You're in, you're out.</p>
            </>
          ) : (
            <div className="bg-[#1a1a1a] border border-green-500/30 rounded-xl p-8">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">You're In</h3>
              <p className="text-zinc-400 text-sm mb-6">Here's your playbook. Bookmark it — you'll keep coming back.</p>
              <a
                href="https://ai-agent-playbook-teal.vercel.app/playbook/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-[#0d0d0d] font-bold text-sm py-3.5 px-7 rounded-lg transition-all hover:-translate-y-px"
              >
                Open the AI Agent Playbook →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <div className="space-y-4">
          <div className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-6">
            <p className="text-sm leading-relaxed mb-3">
              "I had an AI agent running my morning briefings within 20 minutes of downloading this. The setup guide actually works — most stuff online doesn't."
            </p>
            <p className="text-xs text-zinc-500">— S. Chen, Perth tradie, 3 employees</p>
          </div>
          <div className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-6">
            <p className="text-sm leading-relaxed mb-3">
              "Finally something practical. Not another 10,000-word guide about 'AI is the future.' Just the actual steps to get it running."
            </p>
            <p className="text-xs text-zinc-500">— R. Patel, Hobart accountant, solo practice</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 px-6 text-center">
        <div className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-2">EMVY</div>
        <p className="text-xs text-zinc-600">AI automation for small businesses.</p>
      </footer>
    </div>
  )
}
