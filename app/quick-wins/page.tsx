import Link from "next/link";

const prompts = [
  {
    number: 1,
    title: "Mission Control Dashboard",
    emoji: "🚀",
    what: "Maps your entire business operations into a single dashboard view.",
    prompt: `You are an operations analyst. I need you to design a "mission control dashboard" for my business.

Context: I'm running a [TYPE OF BUSINESS — e.g. digital agency, home services, e-commerce store]. I want one view that shows me everything that matters.

Map out these areas:
1. Leads and pipeline (where new business is coming from)
2. Active jobs or deliverables (what's in progress)
3. Cash flow (what's invoiced, paid, outstanding)
4. Team or solo status (who's doing what)
5. Blockers and risks (what's stuck or about to go wrong)
6. This week's priorities (top 3 things that need to happen)

For each area:
- What data feeds it
- What a green/yellow/red status looks like
- What a snapshot summary would look like

Then give me a suggested structure for building this in either:
- Notion (table + views approach)
- Obsidian (dashboard page approach)
- A simple spreadsheet

Be specific. My business is [DESCRIBE YOUR BUSINESS IN 2-3 SENTENCES].`,
    output: "A complete dashboard blueprint with status indicators, data sources, and build instructions.",
  },
  {
    number: 2,
    title: "Weekly Review Structure",
    emoji: "🚀",
    what: "Gives you a repeatable weekly review process that takes 20 minutes, not 2 hours.",
    prompt: `You are a productivity systems architect. Design a weekly review structure for me.

Context: I run [TYPE OF BUSINESS] and I waste too much time on things that don't move the needle. I need a 20-minute weekly review that:
- Captures what happened last week
- Identifies what broke or went wrong
- Surfaces what's about to break
- Commits me to 3 priorities for next week
- Clears mental clutter

Walk me through:
1. The exact steps of the review (in order)
2. What to capture in each step
3. Where to capture it (what tool/notes)
4. How to know if the week was a win
5. A follow-up cadence (what to check mid-week)

Include a "redo log" — a running list of things I had to redo or fix because they weren't done right first time. This is often where hidden time leaks are.

Be specific to: [DESCRIBE YOUR BUSINESS, YOUR BIGGEST TIME WASTER, YOUR CURRENT TOOL STACK — e.g. "Perth HVAC business, losing time on quote follow-ups, using Google Sheets + Jobber"]`,
    output: "A complete weekly review playbook with timing, tools, and a redo log template.",
  },
  {
    number: 3,
    title: "Content Pipeline (Auto-Post)",
    emoji: "🚀",
    what: "Designs a system that generates, schedules, and posts content on autopilot.",
    prompt: `You are a content strategy specialist. Build me a content pipeline that runs on autopilot.

Context: I run [TYPE OF BUSINESS/BRAND] and I want to post on X/Twitter [DURATION — e.g. 3x per week] without spending more than [TIME PER WEEK] on it.

Build out:
1. Content pillars — 3 themes that everything falls under
2. Hook library — 10 hooks I can rotate (first word of every post)
3. Format rotation — what type of post each day (short post / thread / engagement post / value dump / personal story)
4. Source material — where to pull content from so I never stare at a blank screen
5. Batch creation workflow — how to write a week's worth in one session
6. Scheduling system — what tool to use and how to set it up

My voice is: [DESCRIBE YOUR VOICE — e.g. "short sentences, direct opinions, no filler, sounds like texting a smart mate"]
My audience is: [DESCRIBE YOUR ICP]

Give me actual hooks, actual content pillar names, and a real batch session agenda I can follow.`,
    output: "A complete 1-page content machine with hooks, pillars, formats, and a batch workflow.",
  },
  {
    number: 4,
    title: "Lead Tracking System",
    emoji: "🚀",
    what: "Builds a lightweight CRM from scratch that actually gets used.",
    prompt: `You are a CRM design specialist. Build me a lead tracking system I will actually use.

Context: I run [TYPE OF BUSINESS] and I'm losing leads because I can't remember where they came from or what I said to them. I don't want something complex — I want the minimum viable system.

Design a system with:
1. A single source of truth — one place every lead lives
2. Five stages maximum — define what each stage means
3. Three data points per lead — name, source, last contact (not 47 fields)
4. A weekly trigger — what prompts me to follow up (not just "when I remember")
5. An enrichment habit — one thing I do for every new lead that makes them easier to close

For the system, pick one:
- Notion (simplest)
- Google Sheets (most accessible)
- Obsidian (if you want it linked to other notes)

Include:
- Exact column/field setup
- A sample lead entry showing all fields filled in
- The exact process for adding a new lead (step by step)
- The 30-second weekly review habit

My business is: [DESCRIBE YOUR BUSINESS AND YOUR TYPICAL LEAD SOURCE]`,
    output: "A complete CRM blueprint with exact field setup, sample data, and habit triggers.",
  },
  {
    number: 5,
    title: "First-Contact Response Kit",
    emoji: "🚀",
    what: "Ensures no enquiry ever goes cold in under 60 seconds.",
    prompt: `You are a sales response architect. Build me a first-contact response kit.

Context: I run [TYPE OF BUSINESS] and enquiries come in via [WHERE — e.g. website form, Instagram DM, phone call, referral]. I lose leads because I either don't respond fast enough or I respond badly.

Build out:
1. Response templates for each enquiry type — short, human, not AI-sounding
2. A same-day response rule — what the minimum response is when I can't give a full answer yet
3. A question to ask every enquiry that qualifies them AND adds value
4. An escalation path — what to do when it's a real qualified lead
5. A no-response follow-up sequence — 3 messages over 2 weeks for enquiries that go quiet

My biggest objection in first contact is: [YOUR MOST COMMON OBJECTION — e.g. "too expensive", "not sure I need it", "I'll think about it"]

Write the templates in my voice. I'm: [DESCRIBE YOUR VOICE — direct, warm, formal, casual etc.].`,
    output: "A ready-to-use response kit with templates for every enquiry scenario.",
  },
];

export default function QuickWins() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-200 font-sans">
      {/* Header */}
      <header className="border-b border-zinc-800 px-6 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            ← Back to Playbook
          </Link>
          <span className="text-zinc-600 text-xs">Dawn Labs × Hermes</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <div className="text-5xl mb-4">🚀</div>
          <h1 className="text-4xl font-bold text-white mb-4">Quick Wins</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Copy-paste prompts that deliver immediate value. No setup required.
            Pick one, paste it into Claude or Hermes, and run it today.
          </p>
        </div>

        {/* Prompts */}
        <div className="space-y-16">
          {prompts.map((p) => (
            <section key={p.number} className="border border-zinc-800 rounded-2xl overflow-hidden">
              {/* Card header */}
              <div className="bg-zinc-900 px-8 py-6 border-b border-zinc-800">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{p.emoji}</span>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                      Prompt {p.number}
                    </div>
                    <h2 className="text-2xl font-semibold text-white">{p.title}</h2>
                    <p className="text-zinc-400 mt-1">{p.what}</p>
                  </div>
                </div>
              </div>

              {/* Prompt body */}
              <div className="px-8 py-8">
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">
                    Prompt — copy and paste this:
                  </h3>
                  <pre className="whitespace-pre-wrap text-sm text-zinc-300 bg-zinc-950 border border-zinc-800 rounded-xl p-6 font-mono leading-relaxed">
                    {p.prompt}
                  </pre>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                    What you get:
                  </h3>
                  <p className="text-zinc-400 text-sm">{p.output}</p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center p-8 border border-zinc-800 rounded-2xl bg-zinc-900/30">
          <p className="text-zinc-400 mb-4">Want a custom agent built for your business?</p>
          <Link
            href="/emvy"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all"
          >
            Check the EMVY Audit →
          </Link>
        </div>
      </main>
    </div>
  );
}
