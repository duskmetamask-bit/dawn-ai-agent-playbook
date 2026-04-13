import Link from "next/link";

const sections = [
  {
    category: "Prompt Engineering",
    emoji: "💡",
    tips: [
      {
        title: "The Context Window Trick",
        content: "When Claude or Hermes forgets context mid-conversation, don't re-explain everything. Instead of: 'So we've been working on my Perth HVAC business and I need you to remember all the context from earlier...' Do this: 'Here's my business context [paste 5 sentences of key facts]. This is a persistent reference. Treat it as established fact for this conversation.' Then paste that line at the start of every new session. Cuts down re-explanation time by 80%.",
      },
      {
        title: "The Example Output Trick",
        content: "If you want output in a specific format, always give an example of what 'good' looks like. Instead of: 'Give me a weekly report.' Do this: 'Give me a weekly report in this format: **Revenue:** $[amount] vs target $[amount] ([+/-]%) **New leads:** [N] — [M] converted **Top blocker:** [1 sentence] **Next week priority:** [1 sentence]. Example: **Revenue:** $12,400 vs target $15,000 (−17%).' The example alone usually fixes the output format without any extra instruction.",
      },
      {
        title: "The Role Assignment Trick",
        content: "The fastest way to get expert-level output: assign a specific role + a specific experience level. Instead of: 'Help me with my business strategy.' Do this: 'You are a fractional COO with 15 years of experience in SMB operations. You've helped 200+ service businesses scale from $500K to $5M ARR. My problem: [DESCRIBE IT]. Give me the advice you'd give a client paying you $5,000/month.' The specificity of the role constrains the output quality and perspective immediately.",
      },
      {
        title: "The 'What Would Done Look Like' Trick",
        content: "When a task is vague, define 'done' before you start. Instead of: 'Improve my email response process.' Do this: 'Define what 'improved' means. By [specific date], I want: response time under 2 hours, personalisation rate above 80%, positive reply rate above 30%. Current baseline: [what it is now]. Give me 5 specific changes that would get me to those targets.' Now you have measurable goals instead of an abstract improvement request.",
      },
      {
        title: "The Chain of Thought Prompt",
        content: "For complex decisions, force structured thinking by asking for it explicitly: 'Before you answer, think through: What are the 3 most important factors? What would [smart person] do? What's the worst case? What's the upside if it goes right? Now give me a recommendation with your reasoning.' This prevents surface-level responses and gets you actual strategic thinking.",
      },
    ],
  },
  {
    category: "Vault & Note-Taking",
    emoji: "🗃️",
    tips: [
      {
        title: "The 3-Layer Note System",
        content: "For your vault, use 3 layers: Layer 1 — Dailies: Daily notes, captures, raw input. No structure needed. Just dump everything here. Layer 2 — Projects: Notes that belong to a specific project or client. Linked to dailies, tagged by project. Layer 3 — Atlas: Permanent notes — things you've learned, decisions made, frameworks established. These are the notes that make future-you smarter. Rule: If you reference something 3 times across different dailies, it goes into the Atlas.",
      },
      {
        title: "The Bi-Linking Habit",
        content: "When you create a note, add one link to another note before you save it. This sounds small but it's the difference between a vault of isolated notes and a vault of connected knowledge. Before saving any note, ask: 'What other note does this relate to?' Then link it. Even if the connection is loose. Better to over-link than under-link.",
      },
      {
        title: "The Permanent Note Template",
        content: "For notes that go into your Atlas permanent knowledge base, use this format: Title: [What this is]. Source: [Where this came from — book, conversation, experience, research]. Date: [When captured]. Key insight (1 sentence): [ONE SENTENCE CORE INSIGHT]. Expanded: [2-3 sentences expanding the insight]. Connections: Related to [LINK], Contradicts [LINK], Builds on [LINK]. Action: [What to do with this. If nothing, write 'Filed — no action needed']. Tags: #insight #topic #status",
      },
    ],
  },
  {
    category: "OpenClaw & Agent Tips",
    emoji: "🤖",
    tips: [
      {
        title: "Cron Job Naming Convention",
        content: "When creating cron jobs, name them so you know what they do without opening them. Bad: 'Daily report'. Good: 'Daily — Yuki morning briefing → Telegram 7:30 AM AWST Mon-Fri'. The name should tell you: Who it's for + What it does + Where it goes + When.",
      },
      {
        title: "The Subagent Isolation Rule",
        content: "When delegating to a subagent, give it everything it needs in the context call — and nothing more. Bad: 'Fix the bug in the codebase.' Good: 'In ~/project/main.py, function process_lead() at line 47, there's a bug: it saves the contact's email as the company name. Fix it to save row['email'] instead. Don't touch anything else.' The more specific the context, the better the subagent output. Subagents have no memory of your conversation.",
      },
      {
        title: "The Delegation Pattern",
        content: "When you need a subagent to build something complex, always break it into steps and tell it you're doing that: 'I'm going to give you 3 steps. Do step 1, wait for my confirmation, then do step 2.' This prevents the subagent from running off and building the wrong thing. Checkpoints beat full autonomy on anything complex.",
      },
    ],
  },
  {
    category: "Workflow Shortcuts",
    emoji: "⚡",
    tips: [
      {
        title: "The 2-Minute Rule for Automation",
        content: "If a task takes less than 2 minutes and you do it more than twice a week, it should be automated or templated. Your criteria: Does it happen 3+ times per week? Does it follow a pattern? Does it require your specific judgment, or can a well-designed system handle it? If all three are yes → automate it. If the last one is no → definitely automate it.",
      },
      {
        title: "The Morning Message Habit",
        content: "Before you check your phone in the morning, run one Hermes prompt: 'Morning brief for [YOUR NAME]. It's [DAY, DATE]. I work in [FIELD]. Priority for today: [ONE THING]. Flag anything urgent. Keep it under 60 seconds to read.' This reframes how you start the day — from reactive to intentional.",
      },
      {
        title: "The Weekly Review Checklist",
        content: "Every Sunday evening (or Monday morning), run this sequence: 1. What went well? (3 bullets). 2. What went wrong? (3 bullets). 3. What did I learn? (2 bullets). 4. What am I grateful for? (1 bullet — builds momentum). 5. Top 3 for next week. (Must be specific: not 'work on marketing' — 'Post the Base ecosystem thread by Tuesday 12pm'). Then ask Hermes: 'Based on this week's review, what's the one thing I should change or double down on next week? Be specific.'",
      },
    ],
  },
];

export default function Tips() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-200 font-sans">
      <header className="border-b border-zinc-800 px-6 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            ← Back to Playbook
          </Link>
          <span className="text-zinc-600 text-xs">Dawn Labs × Hermes</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-16">
          <div className="text-5xl mb-4">💡</div>
          <h1 className="text-4xl font-bold text-white mb-4">Tips, Tricks & Meta</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Vault structures, prompt engineering shortcuts, OpenClaw tips, and things that make the system work better. The meta-layer that compounds over time.
          </p>
        </div>

        <div className="space-y-16">
          {sections.map((section) => (
            <section key={section.category}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">{section.emoji}</span>
                <h2 className="text-2xl font-semibold text-white">{section.category}</h2>
              </div>

              <div className="space-y-4">
                {section.tips.map((tip, i) => (
                  <div key={i} className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                    <h3 className="text-lg font-semibold text-white mb-3">{tip.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed whitespace-pre-wrap">{tip.content}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 border border-zinc-800 rounded-2xl p-8 bg-zinc-900/20">
          <h3 className="text-lg font-semibold text-white mb-4">Templates</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-blue-400 mb-2">One-Page Business Brief</h4>
              <pre className="text-xs text-zinc-400 bg-zinc-950 border border-zinc-800 rounded-xl p-4 font-mono whitespace-pre-wrap leading-relaxed">
{`BUSINESS: [Name] — [What they do] — [Who they serve]
ONE-LINER: [What they actually sell, in outcome terms]
CURRENT REVENUE: [Approximate]
BIGGEST CHALLENGE: [The actual problem, not the surface symptom]
GOAL: [What success looks like in 90 days]
WHAT'S TRIED: [What's already been done and didn't work]
BUDGET: [Realistic]
DECISION MAKER: [Who says yes]
TIMELINE: [When they need this working]
VOICE/STYLE: [How they communicate]
WHAT TO AVOID: [Things that have failed before]`}
              </pre>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-amber-400 mb-2">Agent Briefing Card</h4>
              <pre className="text-xs text-zinc-400 bg-zinc-950 border border-zinc-800 rounded-xl p-4 font-mono whitespace-pre-wrap leading-relaxed">
{`NAME: [Agent name]
ROLE: [What it does — one sentence]
REPORTS TO: [Who it reports to]
TRIGGERS: [What starts it running]
TOOLS: [List tools]
OUTPUT: [What it produces]
CHECKS: [Quality gates]
ESCALATES: [When it hands to human]
FAILURE MODE: [What breaks and how it recovers]
MEASURES: [How to know it's working]
FIRST STEP: [What to build first]`}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
