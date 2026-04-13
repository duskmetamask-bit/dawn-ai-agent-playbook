import Link from "next/link";

const systems = [
  {
    number: 1,
    title: "Business Health Audit",
    emoji: "🧠",
    what: "Diagnoses what's working, what's broken, and what needs to change.",
    prompt: `You are a business operations auditor. Conduct a full health audit of my business.

Context: I run [TYPE OF BUSINESS — 2-3 sentences describing what you do, who you serve, and how you acquire customers].

Audit these 6 areas:

1. REVENUE — Is the revenue model sustainable? What's the pricing structure? What's the average deal size? What's the conversion rate from enquiry to paying customer?

2. LEAD FLOW — Where do leads come from? What's the volume? Where are leads dying (not converting)? What's the follow-up rate?

3. DELIVERY — What's the core service or product? Where does time leak happen? What's the bottleneck (the one thing that slows everything else down)?

4. SYSTEMS — What processes are documented? What's running on willpower and memory? What breaks when you go on holiday?

5. TEAM — If applicable: who does what? Where are the gaps? Where is there too much overlap?

6. FINANCIALS — What's the cash situation? What's fixed vs variable? What's the actual profit margin? What's the biggest expense leak?

For each area:
- Give it a Green / Yellow / Red rating with one sentence explaining why
- Identify the #1 problem in that area
- Give one specific fix (not a 6-month project — one thing I can do this week)

Then tell me: If I could only fix ONE thing this week, what should it be and why?`,
    output: "A complete health report with traffic-light ratings, specific problems, and a prioritised fix list.",
  },
  {
    number: 2,
    title: "Morning Briefing Agent",
    emoji: "🧠",
    what: "Gives you a 2-minute briefing every morning so you start the day knowing what matters.",
    prompt: `You are a chief of staff. Produce a daily morning briefing for me.

Context: I run [TYPE OF BUSINESS]. Every morning I need a briefing that takes 2 minutes to read and tells me exactly what I need to know.

Build me a briefing template with these sections:

1. TODAY'S MUST-DO (top 3 things — not 8, not 5, 3)
   - One revenue-generating activity
   - One client-delivery activity
   - One business-building activity

2. WHAT'S ON MY PLATE
   - Meetings today (with prep note: what do I need to know going in)
   - Deadlines today
   - Anything that expires today (quotes, offers, responses due)

3. PIPELINE SNAPSHOT
   - New leads since yesterday
   - Deals at risk (no contact in 5+ days)
   - Closed wins/losses since yesterday

4. RED FLAGS
   - Anything that's about to go wrong that I need to act on NOW
   - Any client who's unhappy
   - Any cash flow issue

5. ONE THING TO DO DIFFERENTLY
   - Based on yesterday's patterns: what's one thing I should change today?

Format it so it fits in a Telegram message or a single screen glance. No walls of text. Bullet points. Status indicators. Time stamps.

My typical working hours are: [YOUR HOURS]
My current tools are: [WHAT YOU USE — e.g. Google Calendar, Sheets, Jobber, Canva etc.]`,
    output: "A briefing template with sections, sample data, and a daily habit guide.",
  },
  {
    number: 3,
    title: "Automated Weekly Reporting",
    emoji: "🧠",
    what: "Creates a report that runs on cron and delivers to you every week without you asking.",
    prompt: `You are a reporting systems architect. Design an automated weekly report for my business.

Context: I run [TYPE OF BUSINESS]. I want a report that:
- Compiles itself every [DAY — e.g. Sunday evening or Monday morning]
- Lands in my inbox or Telegram without me doing anything
- Tells me the truth about the week, not what I want to hear

Design the report to track:

FINANCIAL SUMMARY
- Revenue this week vs last week vs target
- Outstanding invoices (who owes and for how long)
- Biggest expense this week

LEADS & SALES
- New leads this week
- Conversion rate (leads → paying customers)
- Average deal size
- Pipeline value (total deals in progress)

OPERATIONS
- Jobs completed this week
- Jobs in progress
- Any SLA breaches or quality issues

TEAM (if applicable)
- Who delivered what
- Who had capacity issues
- What training or fixes are needed

WEEK REVIEW
- What went well this week
- What went wrong this week
- What needs to change next week

THREE ACTIONS FOR NEXT WEEK
- Specific, numbered, time-boxed

For the automation, assume I can use:
[CHECK YOUR STACK — e.g. "Google Sheets + Zapier + email", "Hermes cron jobs + Telegram", "Make.com + Notion"]

Design the exact data inputs, how they feed the report, and what tools connect them. Give me the actual structure of the report with sample numbers in it.`,
    output: "A complete weekly report design with automation architecture and sample data.",
  },
  {
    number: 4,
    title: "Process Documentation System",
    emoji: "🧠",
    what: "Documents your repeatable processes so they don't live in your head.",
    prompt: `You are a systems documentation specialist. Build me a process documentation system for my business.

Context: I run [TYPE OF BUSINESS]. I keep losing time to things I've figured out before but forget. I need a system for documenting processes that:
- Takes 5 minutes to document something (not an hour)
- I actually use (not a fancy system I abandon after a week)
- Gets better over time

Design the system:

1. PROCESS CARD FORMAT
Create a standard "process card" template that's:
- One page max (fits on one screen)
- Has: what it is, when to do it, step by step, common mistakes, what "good" looks like
- Has a version number and last-updated date

2. THE PROCESS TO DOCUMENT
In priority order, what should I document first? Look at your week and find the 5 things you do repeatedly that could go wrong if you forgot a step. Start there.

3. WHERE TO STORE IT
Pick one: Notion, Obsidian, Google Docs (folder structure), or physical book — and explain why that choice for your situation.

4. THE HABIT
How do I make this stick? What's the trigger that makes me document something the first time I do it? (Hint: the best time to document is right after you figure something out the hard way.)

5. AUDIT SCHEDULE
When should I review and update the docs? Monthly? Quarterly?

Apply this to: [DESCRIBE 2-3 REPEATABLE PROCESSES YOU DO — e.g. "onboarding a new client, quoting a job, posting content"]
For each one, give me a filled-in process card.`,
    output: "A process documentation system with templates, prioritised list, storage choice, and habit trigger.",
  },
  {
    number: 5,
    title: "Blockers & Risks Radar",
    emoji: "🧠",
    what: "Identifies what's about to go wrong before it actually goes wrong.",
    prompt: `You are a risk management specialist. Build me a blockers and risks radar for my business.

Context: I run [TYPE OF BUSINESS]. I'm always surprised by things that go wrong. I want a system that surfaces risks early enough to actually do something about them.

Map these categories of risk:

1. CLIENT RISKS
- Which clients are unhappy or at risk of leaving?
- Which clients are behind on payment?
- Which clients have deadlines that are at risk?
- Who's had too much goodwill extended without reciprocity?

2. REVENUE RISKS
- What's the pipeline looking like 30/60/90 days out?
- Are we over-reliant on one client or one revenue stream?
- Are there any pricing pressures (competitors undercutting, scope creep eating margin)?

3. OPERATIONAL RISKS
- What's the single point of failure in delivery?
- Are any suppliers, tools, or contractors at risk?
- Is anything approaching a deadline or expiry (insurance, license, contract renewal)?
- What would happen if I got sick for a week?

4. TEAM RISKS (if applicable)
- Who's burnout risk?
- Is there a key-person dependency (only one person knows how to do something critical)?

5. EXTERNAL RISKS
- Any market shifts affecting my industry?
- Regulatory changes coming?
- Seasonal patterns I should be preparing for?

For each risk identified, rate it:
- Likelihood: High / Medium / Low
- Impact: High / Medium / Low
- Timeframe: Now / 30 days / 90 days

Then: for the top 3 risks, give me ONE specific action I can take this week to reduce either the likelihood or the impact.

My business is particularly exposed to: [YOUR BIGGEST VULNERABILITY — e.g. "one big client who makes up 60% of revenue", "no documented processes so I can't step away"]`,
    output: "A complete risk radar with ratings, timeframes, and immediate action plan.",
  },
];

export default function Productivity() {
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
          <div className="text-5xl mb-4">🧠</div>
          <h1 className="text-4xl font-bold text-white mb-4">Productivity & Systems</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Structured workflows for business owners who want things to run themselves.
            These are the systems that compound — once built, they work for you forever.
          </p>
        </div>

        <div className="space-y-16">
          {systems.map((s) => (
            <section key={s.number} className="border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="bg-zinc-900 px-8 py-6 border-b border-zinc-800">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{s.emoji}</span>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">System {s.number}</div>
                    <h2 className="text-2xl font-semibold text-white">{s.title}</h2>
                    <p className="text-zinc-400 mt-1">{s.what}</p>
                  </div>
                </div>
              </div>

              <div className="px-8 py-8">
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">
                    Run this prompt:
                  </h3>
                  <pre className="whitespace-pre-wrap text-sm text-zinc-300 bg-zinc-950 border border-zinc-800 rounded-xl p-6 font-mono leading-relaxed">
                    {s.prompt}
                  </pre>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">What you get:</h3>
                  <p className="text-zinc-400 text-sm">{s.output}</p>
                </div>
              </div>
            </section>
          ))}
        </div>

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
