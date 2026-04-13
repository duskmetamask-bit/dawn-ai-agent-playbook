import Link from "next/link";

const agents = [
  {
    number: 1,
    title: "Single Agent for [X]",
    emoji: "🤖",
    what: "Designs a complete single-agent system — role, tools, process, and success criteria.",
    prompt: `You are an AI systems architect. Design a single agent for [DESCRIBE THE TASK].

Context: I want an AI agent that [DESCRIBE THE OUTCOME — e.g. "finds new leads for my Perth HVAC business and saves their details to my pipeline"].

Design the agent across these dimensions:

1. ROLE DEFINITION
- What to call the agent (name + role title)
- One-paragraph role description — what it is, what it's responsible for, and what it's NOT responsible for
- Who it reports to (you, another agent, or no one)

2. TOOLS IT NEEDS
List the specific tools the agent should have access to. For each:
- Tool name
- What it does for this agent
- How often it's used (frequently / occasionally / rarely)
- Any credentials or API keys needed

3. INPUTS
What triggers this agent? (New form submission, cron schedule, DM received, manual trigger, new email, etc.)

4. PROCESS WORKFLOW
Step-by-step what the agent does from trigger to completion. Be specific — include decision points, branches, and what happens at each step.

5. OUTPUTS
What does the agent produce when done? (A note, an email sent, a CRM updated, a report, a message delivered?)

6. QUALITY GATE
What makes the agent's output "good enough"? Define a check or approval step if needed. Can it operate unsupervised or does it need a human in the loop?

7. SUCCESS CRITERIA
How do I know if this agent is working? Give 3 measurable outcomes I can track.

8. WHAT OTHER AGENTS IT NEEDS
Does this agent need to hand off to or receive input from any other agents? If yes, define the handoff points.

9. CRON OR TRIGGER
Should this agent run on a schedule, on an event, or on demand? If schedule: how often and when?

Budget/context: [DESCRIBE YOUR STACK — e.g. "using Claude Code + OpenClaw + Telegram", "just using Claude.ai directly"]`,
    output: "A complete agent design document ready to hand to a developer or implement in OpenClaw/Hermes.",
  },
  {
    number: 2,
    title: "Multi-Agent Team",
    emoji: "🤖",
    what: "Designs a team of agents that work together to accomplish a complex workflow.",
    prompt: `You are a multi-agent systems architect. Design a team of agents that work together to [DESCRIBE THE COMPLEX OUTCOME — e.g. "generate weekly leads, qualify them, enrich them with research, and send personalised outreach emails"].

Context: I run [TYPE OF BUSINESS]. My current bottleneck is [YOUR BOTTLENECK — e.g. "I spend 3 hours every week finding and researching leads"].

Design the full multi-agent system:

1. AGENT TEAM COMPOSITION
For each agent:
- Name and role (e.g. "Harold — Lead Scout")
- Primary responsibility (one sentence)
- Tools it has access to
- Who it reports to (draw the org chart)
- What it passes to the next agent (handoff format)

2. WORKFLOW SEQUENCE
Map the full flow from trigger to final output. Show:
- Step 1 → Step 2 → Step 3 etc.
- At each step: what the agent does
- Where the data or output lives between steps
- Any decision points (agent decides to escalate, discard, or flag)

3. THE HANDOFF PROTOCOL
How do agents talk to each other? Define the data format for each handoff (what information is passed, in what structure).

4. OVERSIGHT AGENT
Design a "conductor" or oversight agent that:
- Monitors the team's output quality
- Catches errors before they propagate
- Escalates to you when needed
- Reports status back to you

5. FAILURE HANDLING
What happens when one agent fails?
- Does the whole chain stop?
- Does it retry?
- Does it flag and skip?
Define the error handling for each agent.

6. HUMAN-IN-THE-LOOP POINTS
Where does a human need to approve, review, or intervene? Be specific about WHY at each point.

7. MEASUREMENT
What metrics does the team produce? (Volume processed, quality scores, escalation rate, time saved?)

8. IMPLEMENTATION PRIORITY
If I can't build all of this at once, what do I build first? Prioritise the agents in order of: most time saved + lowest build complexity.

Tech stack: [YOUR STACK — e.g. "OpenClaw with 4 agents + Hermes + Telegram", "Claude.ai Teams", "custom build with Claude Code"]`,
    output: "A complete multi-agent system design with org chart, workflow maps, handoff protocols, and implementation roadmap.",
  },
  {
    number: 3,
    title: "Automated Research Agent",
    emoji: "🤖",
    what: "Builds a research agent that monitors, gathers, and synthesises information on autopilot.",
    prompt: `You are an AI research systems architect. Design a research agent that runs on autopilot.

Context: I need to stay informed about [TOPIC — e.g. "my competitors' pricing and product changes", "new AI tools relevant to my industry", "regulatory changes affecting my business", "my ideal client profile's pain points and priorities"].

Design the research agent:

1. SOURCES TO MONITOR
For each source type, specify:
- Source (e.g. specific websites, Google Alerts, X accounts, Reddit communities, industry newsletters, competitor blogs)
- What to look for
- How often to check
- Format to capture findings in

2. RESEARCH DEPTH
Define three tiers — what the agent always captures vs. what requires deeper investigation:
- TIER 1 (Quick scan): Headlines, prices, new products, major news — takes 2 minutes per source
- TIER 2 (Standard research): Summary of article/report, key findings, implications — takes 10 minutes per source
- TIER 3 (Deep dive): Full analysis, original context, competitive implications — takes 30+ minutes, only on major signals

3. OUTPUT FORMAT
What does the agent produce and how often?
- Daily briefing (what changed today)
- Weekly synthesis (patterns across the week)
- Alert format (urgent signals that need immediate attention)

4. FILTERS AND PRIORITISATION
How does the agent decide what's worth your attention vs. noise? Define the signal-to-noise criteria.

5. DELIVERY METHOD
Where does the output go? (Telegram, email, Discord, saved to notes?) And when?

6. KNOWLEDGE BASE INTEGRATION
If relevant: how does new research get added to an existing knowledge base without duplication?

7. ANOMALY DETECTION
What patterns should the agent flag as unusual or concerning?
(e.g. "a competitor suddenly dropped prices", "a regulatory announcement that affects our ICP")

The topic I care about most is: [DESCRIBE THE RESEARCH DOMAIN]
My ICP is: [IDEAL CLIENT PROFILE]`,
    output: "A complete research agent design with source list, tier definitions, output formats, and delivery schedule.",
  },
  {
    number: 4,
    title: "Content Generation Pipeline",
    emoji: "🤖",
    what: "Builds a multi-stage content machine — research → draft → optimize → schedule.",
    prompt: `You are a content systems architect. Design a content generation pipeline that runs on autopilot.

Context: I run [TYPE OF BUSINESS OR BRAND] and I want to consistently post [PLATFORM — e.g. X/Twitter] [FREQUENCY — e.g. 3x per week] without spending [MORE THAN — e.g. 90 minutes] per week on it.

Design the full pipeline:

1. CONTENT STAGES
Map the pipeline in stages:

STAGE 1 — SOURCE & RESEARCH
- What triggers a new content piece?
- Where does the raw material come from?
- What does the agent capture at this stage?

STAGE 2 — DRAFT
- What does the first draft look like?
- What voice/persona does it write in?
- What is the length and format for [PLATFORM]?

STAGE 3 — EDIT & OPTIMIZE
- What does human editing add?
- What can the agent already handle at this stage?
- Are there platform-specific optimizations (hooks, hashtags, threading, CTAs)?

STAGE 4 — SCHEDULE & POST
- How does content get scheduled?
- What tool handles the scheduling?
- Is there an approval step before posting?

2. CONTENT VARIATIONS
For each piece, the system should generate:
- Primary post (ready to post)
- Engagement reply variants (2-3 options for the first comment)
- Thread version (if applicable)
- LinkedIn or blog adaptation (if applicable)

3. CONTENT CALENDAR
How far ahead should the queue be? What happens if you miss a day? How does the system handle real-time/trending content?

4. VOICE TRAINING
How does the agent learn your voice? Define the input mechanism for: approved posts, rejected posts, corrections, personal anecdotes to incorporate.

5. PERFORMANCE FEEDBACK LOOP
What signals does the system use to understand what works?
- Which posts get engagement?
- What hooks perform best?
- What topics resonate?
- How does this inform future content?

6. BOTTLENECK REMOVAL
What typically breaks in content pipelines? How does your system handle: blank-screen syndrome, voice inconsistency, over-posting, under-posting, repetitive content?

My current content challenge is: [YOUR BIGGEST CONTENT STRUGGLE — e.g. "I have nothing to say", "I write something but it sounds generic", "I run out of things to post"]`,
    output: "A complete content pipeline design with stage maps, voice training system, and performance feedback loop.",
  },
  {
    number: 5,
    title: "Outreach Machine",
    emoji: "🤖",
    what: "Designs an automated lead outreach system — find, research, personalise, send, follow up.",
    prompt: `You are an outreach systems architect. Design an automated outreach machine for [TYPE OF BUSINESS — e.g. "a Perth-based HVAC company looking for residential service clients"].

Context: My target customer is [ICP — e.g. "homeowners in Perth's northern suburbs, $300K+ property value, 4+ bedroom homes"]. My offer is [OFFER — e.g. "AI-powered booking system that answers calls and schedules jobs 24/7 for $299/month"]. I want to reach [HOW MANY QUALIFIED LEADS — e.g. "10-20 new prospects per week"].

Design the full outreach machine:

1. LEAD GENERATION STAGE
How does the system find leads?
- Sources (Google Maps, directories, LinkedIn Sales Navigator, referral networks, etc.)
- Qualification criteria (what makes them a good fit)
- Enrichment (what data to collect — company size, decision maker, current tools, pain signals)

2. RESEARCH STAGE
What does the system research about each lead before outreach?
- 3 things that are must-haves for every lead profile
- 3 things that make a lead "warm" vs. "cold"
- Where to find the research (public sources, their website, social, reviews)
- How deep to go (quick scan vs. deep research)

3. PERSONALISATION ENGINE
How does the system personalise each outreach message?
- Template structure with personalization fields
- What specific data drives which personalization
- How to avoid "I noticed your company" generic personalization
- Voice and tone guidelines

4. OUTREACH SEQUENCE
Design the full sequence:
- Message 1: Icebreaker / hook
- Message 2: Value add (3-5 days later)
- Message 3: Breakup / close (if no response)
- For each: what triggers it, what the message says, what channel (email, LinkedIn, DM)

5. RESPONSE HANDLING
What happens when they reply?
- Positive reply → what next?
- Objection → how does the system handle?
- No reply → does it go to a manual follow-up queue?

6. COMPLIANCE & FOLDERING
How does the system avoid spam folders and comply with [Australia's SPAM Act / relevant regulations]?

7. MEASUREMENT
What metrics does the outreach machine report?
- Messages sent
- Response rate
- Positive response rate
- Meetings booked
- Cost per qualified lead

8. BUILD PRIORITY
If I can only build stages 1-3 at first, what's the minimum viable outreach machine? What do I add in stage 4?

My biggest outreach fear is: [e.g. "sounding like everyone else", "getting marked as spam", "wasting time on bad leads"]`,
    output: "A complete outreach machine design with lead generation, personalization engine, sequence maps, and measurement framework.",
  },
];

export default function Architecture() {
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
          <div className="text-5xl mb-4">🤖</div>
          <h1 className="text-4xl font-bold text-white mb-4">Agent Architecture</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            How to design and build multi-agent systems. For people who want to go deeper — these prompts help you design agents before you build them.
          </p>
        </div>

        <div className="space-y-16">
          {agents.map((a) => (
            <section key={a.number} className="border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="bg-zinc-900 px-8 py-6 border-b border-zinc-800">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{a.emoji}</span>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Agent Design {a.number}</div>
                    <h2 className="text-2xl font-semibold text-white">{a.title}</h2>
                    <p className="text-zinc-400 mt-1">{a.what}</p>
                  </div>
                </div>
              </div>

              <div className="px-8 py-8">
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">Run this prompt:</h3>
                  <pre className="whitespace-pre-wrap text-sm text-zinc-300 bg-zinc-950 border border-zinc-800 rounded-xl p-6 font-mono leading-relaxed overflow-x-auto">
                    {a.prompt}
                  </pre>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">What you get:</h3>
                  <p className="text-zinc-400 text-sm">{a.output}</p>
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
