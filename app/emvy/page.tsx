import Link from "next/link";

const prompts = [
  {
    number: 1,
    title: "AI Readiness Score",
    emoji: "💼",
    what: "Scores a business on how prepared it is to implement AI systems.",
    prompt: `You are an AI readiness assessor. Score this business on how prepared it is to implement AI systems.

Business: [DESCRIBE THE BUSINESS — type, size, industry, what they sell, who their customers are]

Assess across these 7 dimensions:

1. DATA INFRASTRUCTURE
- Do they have a CRM? (Yes / No / Basic / Sophisticated)
- Where is customer data stored?
- Is data siloed or unified?
- Score: 1-10

2. DIGITAL PRESENCE
- Website? (Yes / No / Basic / Full)
- Online booking / quoting capability?
- Social media presence?
- Score: 1-10

3. COMMUNICATION CHANNELS
- How do enquiries come in? (Phone / Email / Form / DM / All of the above)
- Is there a standard response process?
- Is there a documented FAQ or playbook?
- Score: 1-10

4. REPEATABLE PROCESSES
- Is there a documented onboarding process for new clients?
- Are there standard operating procedures for delivery?
- What % of work follows a repeatable workflow?
- Score: 1-10

5. FINANCIAL CLARITY
- Do they know their actual cost per acquisition?
- Do they know their average deal size?
- Do they track revenue by source reliably?
- Score: 1-10

6. DECISION-MAKER ACCESS
- Who makes the technology buying decision?
- Are they already AI-curious or AI-sceptical?
- What's their timeline for change?
- Score: 1-10

7. PAIN URGENCY
- How much is the current problem costing them? (Time / Money / Customers)
- What's the urgency to fix it?
- What happens if they don't fix it in the next 6 months?
- Score: 1-10

OVERALL SCORE: ___/70

CATEGORISE:
- 0-20: Not ready — foundation work needed first
- 21-40: Early stage — quick wins available now
- 41-55: Ready — prime for AI implementation
- 56-70: Optimising — AI will compound existing strength

TOP 3 QUICK WINS (from the gaps above):

TOP 3 STRATEGIC IMPROVEMENTS (bigger investments with bigger returns):

RECOMMENDATION: [Based on the score and gaps — what EMVY package fits best: $1,500 audit / $3-5K build / $1,500/mo retainer]`,
    output: "A scored readiness assessment (0-70) with category, quick wins, strategic improvements, and EMVY package recommendation.",
  },
  {
    number: 2,
    title: "First 30 Days AI Implementation Plan",
    emoji: "💼",
    what: "Creates a 30-day plan to implement AI for a specific business type.",
    prompt: `You are an AI implementation specialist. Create a 30-day plan to implement AI for [BUSINESS TYPE — e.g. "a solo tradie doing HVAC installations in Perth"].

Their current situation:
- How they get work: [ENQUIRY SOURCES]
- How they manage jobs: [CURRENT TOOLS]
- Their biggest time waste: [PAIN POINT]
- Their biggest revenue opportunity: [OPPORTUNITY]
- Budget: [REALISTIC BUDGET — e.g. "$500-1,500/month"]

Design a phased 30-day plan:

WEEK 1 — FOUNDATION
- What gets set up in week 1
- What's the minimum viable AI stack (1-2 tools, not 10)
- Who needs to be involved
- What data needs to be gathered first
- What to expect at the end of week 1

WEEK 2 — LIGHTNING
- What runs automatically by end of week 2
- What does the owner test and approve
- What gets retired or replaced (don't stack tools)

WEEK 3 — INTEGRATION
- How does AI fit into the daily workflow
- What triggers new habits
- What does the dashboard look like

WEEK 4 — REVIEW
- What metrics are we measuring
- What gets fixed before month 2
- What's the go/no-go for continuing

BEYOND 30 DAYS:
- What's the natural next step at day 31
- What does "good" look like at 90 days

CRITICAL SUCCESS FACTORS:
What has to be true for this to work? (e.g. "the owner must check the dashboard every morning", "all jobs must be logged in the CRM")`,
    output: "A 4-week phased implementation plan with daily actions, critical success factors, and 90-day outlook.",
  },
  {
    number: 3,
    title: "AI Opportunity Map",
    emoji: "💼",
    what: "Maps every AI opportunity in a business — from obvious to hidden.",
    prompt: `You are a business AI strategist. Map every AI opportunity in this business — from obvious to hidden.

Business: [DESCRIBE FULL BUSINESS — type, size, services, customers, current tools, team structure]

Map AI opportunities across 4 categories:

CATEGORY A — LOW HANGING FRUIT (Can implement this week)
Tasks that are:
- Repetitive (same thing every time)
- Time-consuming (takes real hours)
- Error-prone (humans mess these up)
- Rule-based (clear right/wrong answer)
Examples: email responses, appointment scheduling, data entry, basic FAQs

CATEGORY B — HIGH VALUE (Implement in 30 days)
Tasks that are:
- Complex but repeatable
- High-stakes (getting them right matters)
- Currently requiring senior staff time
- Directly affecting revenue
Examples: lead qualification, quote follow-up, job scheduling, customer onboarding

CATEGORY C — STRATEGIC LEVERAGE (Implement in 90 days)
Tasks that:
- Would fundamentally change how the business operates
- Require integration across multiple systems
- Need custom development or significant setup
- Have the highest ROI potential
Examples: predictive demand forecasting, automated quoting, full AI receptionist

CATEGORY D — HIDDEN GEMS (Often missed)
Tasks nobody thinks to automate because they seem "too human":
- Personal check-ins with clients
- Industry news curation and sharing
- Proactive maintenance reminders
- Staff morale and burnout detection
- Competitor monitoring

For each category:
- List the top 3 opportunities
- Give each a time-to-implement estimate
- Give each an estimated ROI (time saved / revenue generated)
- Rate difficulty: Easy / Medium / Complex

Then tell me: if I could only implement ONE thing from this entire map, what should it be and why?`,
    output: "A 4-tier AI opportunity map with difficulty ratings, ROI estimates, and prioritised action list.",
  },
  {
    number: 4,
    title: "Free AI Assessment — Quick Score",
    emoji: "🎣",
    what: "A 5-minute self-assessment that qualifies whether EMVY is a fit.",
    prompt: `Score my business on AI readiness. Answer honestly — I'll get better results if you're real.

Business type: [TYPE]
Number of staff: [N]
Monthly revenue: [APPROX]
Biggest time waste: [1 SENTENCE]
Biggest revenue leak: [1 SENTENCE]

Rate yourself 1-10 on:
1. How organised is your customer data? (1 = sticky notes, 10 = perfect CRM)
2. How fast do you respond to new enquiries? (1 = days, 10 = minutes)
3. How much of your week is admin vs. revenue work? (1 = all admin, 10 = all revenue)
4. How consistent is your marketing? (1 = random, 10 = planned and automated)
5. How clear are your processes? (1 = in your head only, 10 = fully documented)

Show me your score and tell me the #1 thing holding me back.`,
    output: "An instant scored self-assessment with the #1 blocker identified.",
  },
  {
    number: 5,
    title: "EMVY Prospect Qualification",
    emoji: "💼",
    what: "Helps qualify whether EMVY is the right fit for a given business.",
    prompt: `Help me figure out if EMVY is right for my business.

About my business:
- Type: [INDUSTRY]
- Size: [STAFF COUNT]
- Revenue: [APPROX MONTHLY/ANNUAL]
- Primary challenge: [THE REAL PROBLEM — not "I need AI", but what actually hurts]

Answer these 7 questions honestly:

1. Do you have at least 10 enquiries or leads per month?
   (If no, you don't need AI outreach — you need more leads first)

2. Is your service or product priced at $1,000+ per transaction?
   (If no, the ROI math is harder — we need to talk)

3. Is there a repeatable problem that AI could solve?
   (e.g. "I lose leads because I forget to follow up", "I spend 2 hours a day on scheduling", "I can't keep track of what's quoted vs. what's delivered")

4. Do you have basic digital infrastructure?
   (Email, a way to receive enquiries, a phone)
   (If no, we fix the foundation first)

5. Are you the decision-maker?
   (If no, who else needs to be in the conversation?)

6. What's your timeline?
   - Ready to implement this month
   - Exploring, 3-6 months
   - Just curious

7. What's your biggest fear about working with AI in your business?
   (Be specific — "it will sound robotic", "it will replace me", "it won't actually work")

Give me a clear yes/maybe/no on EMVY fit and explain why.
Then give me one specific next step.`,
    output: "A clear yes/maybe/no qualification with reasoning and a specific next step.",
  },
];

export default function EMVY() {
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
          <div className="text-5xl mb-4">💼</div>
          <h1 className="text-4xl font-bold text-white mb-4">EMVY-Specific</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Built for EMVY audit clients and prospects. These prompts form the backbone of the EMVY offering — use them to qualify, assess, and implement.
          </p>
        </div>

        <div className="mb-8 p-6 border border-blue-800 bg-blue-950/20 rounded-2xl">
          <p className="text-blue-300 text-sm">
            <strong>What is EMVY?</strong> AI audit agency — $1,500 audit → $3-5K build → $1,500/mo retainer. These prompts are the tools that power the EMVY engagement.
          </p>
        </div>

        <div className="space-y-16">
          {prompts.map((p) => (
            <section key={p.number} className="border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="bg-zinc-900 px-8 py-6 border-b border-zinc-800">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{p.emoji}</span>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Prompt {p.number}</div>
                    <h2 className="text-2xl font-semibold text-white">{p.title}</h2>
                    <p className="text-zinc-400 mt-1">{p.what}</p>
                  </div>
                </div>
              </div>

              <div className="px-8 py-8">
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">Prompt:</h3>
                  <pre className="whitespace-pre-wrap text-sm text-zinc-300 bg-zinc-950 border border-zinc-800 rounded-xl p-6 font-mono leading-relaxed overflow-x-auto">
                    {p.prompt}
                  </pre>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">What you get:</h3>
                  <p className="text-zinc-400 text-sm">{p.output}</p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 text-center p-8 border border-zinc-800 rounded-2xl bg-zinc-900/30">
          <p className="text-zinc-300 mb-2 font-semibold">Ready for a real AI audit?</p>
          <p className="text-zinc-500 text-sm mb-6">
            EMVY audits start at $1,500. Audit → Build → Retainer.
          </p>
          <a
            href="mailto:hello@emvy.ai"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all"
          >
            Get in Touch →
          </a>
        </div>
      </main>
    </div>
  );
}
