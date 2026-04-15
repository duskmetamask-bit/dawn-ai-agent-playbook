# AI Agent Playbook — The Complete Automation System

**Version 3.0 | April 2026 | Built with Hermes × OpenClaw**

---

## Is This For You?

This playbook is for you if:

- You run a business or manage clients and your calendar is never your own
- You're technical enough to copy-paste commands but don't want to become a full-time automator
- You have real work to do and you're tired of the same repetitive tasks eating your day
- You want an AI that works for you while you sleep, not one you have to babysit

This playbook is **not** for you if:

- You want a magic button that runs your business without you
- You're not willing to spend 1-2 hours setting things up properly the first time
- You want to outsource your thinking entirely

---

## How to Use This Playbook

Everything here is designed to be followed in order. The concepts build on each other:

1. **Setup Guide** — Build the foundation. Vault, Telegram, core concepts.
2. **Cron Jobs & Automation** — The automation primitives. These are the working prompts.
3. **Step-by-Step Walkthroughs** — Three real systems you can build today.
4. **File Templates** — Copy, fill in, deploy.
5. **Quick Reference** — Commands, syntax, troubleshooting.

The prompts in Section 2 are the core of this playbook. They are not placeholder examples — they are the actual prompts that work. Each one includes annotations explaining why it produces good output. Copy them exactly, adjust the fields in brackets, deploy.

---

# SECTION 01: SETUP GUIDE

## The Three Parts of Any AI Agent System

Every AI agent system — from the simplest to the most complex — has three parts you must understand:

**Brain** — The agent itself (Hermes, Claude, OpenClaw). It thinks, responds, and acts. Without it, nothing happens.

**Memory** — Where the agent stores what it knows about you and your projects. Without this, it starts fresh every session and has no context.

**Triggers** — Schedules or events that make the agent act. Without triggers, you have to manually start everything.

Think of it like a salaried employee. The brain is their intelligence. Memory is their desk with your files. Triggers are their calendar invites. All three are required to function.

---

## Your Vault: The Agent's Long-Term Memory

The vault is a folder structure where your agent stores everything it needs to remember. Not just preferences — actual project state, session logs, contacts, templates.

**Why it matters:** Without a vault, your agent forgets everything between sessions. You end up repeating yourself every single time. With a vault, it knows who you are, what you're building, and what you care about — indefinitely.

### Folder Structure

Create this exact structure on your computer:

```
~/.vault/
  memories/
    PROFILE.md
    PROJECTS.md
  daily/
  projects/
  templates/
```

One command:

```bash
mkdir -p ~/.vault/{memories,daily,projects,templates}
```

That's it. No complex setup. No database. Plain folders.

---

### Your PROFILE.md

This is the most important file. It tells the agent who you are.

Drop this at `~/.vault/memories/PROFILE.md`:

```markdown
# Profile

Name:
Location / Timezone:
Role:

## What You're Building
<!-- One paragraph. Specific. Not "a business" — what exactly. -->

## Goals This Month
1.
2.
3.

## Current Projects
<!-- One line per project: name — status / next action -->
-
-
-

## How You Like to Work
<!-- Session length, async vs sync, decision style, pace -->

## Your Voice
Use:
<!-- e.g. direct, punchy, no fluff, first person, short sentences -->
Avoid:
<!-- e.g. corporate speak, excessive hedging, bullet-point overload -->

## Key Preferences
- Format:
- Response length:
- Feedback style:
```

**Fill this in once. Update it when things change.** The agent reads this at the start of every session. The more specific you are, the better it performs.

---

### Your PROJECTS.md

Drop this at `~/.vault/memories/PROJECTS.md`:

```markdown
# Active Projects

## [Project Name]
Status: ACTIVE / PAUSED / COMPLETED
Last updated: YYYY-MM-DD
Current task:
Key details:
-
-
```

This is your running project state. The agent reads this to know what you're working on without you explaining it every session.

---

### Daily Logs

`~/.vault/daily/` stores session logs by date: `YYYY-MM-DD.md`.

When a session ends, the agent writes a log. When a new session starts, it reads the previous log. This prevents repetition and enables continuity across sessions.

---

### Projects Folder

`~/.vault/projects/` holds project-specific files. Each project gets its own subfolder with its own briefs, notes, and artifacts.

---

### Templates Folder

`~/.vault/templates/` holds reusable templates: meeting notes, weekly reviews, project briefs, ICP documents. Copy these when starting new work to stay consistent.

---

## Connecting to Telegram

Telegram is how you talk to your agent. Once connected, you message a bot and the agent responds — from anywhere, at any time.

### Step 1: Create a Bot

1. Open Telegram and search for **@BotFather**
2. Send `/newbot`
3. Follow the prompts — give it a name and a username
4. BotFather gives you a token: `123456789:ABCdefGhIJKlmNoPQRstuVWxyZ`

**Save that token.** You need it in the next step.

### Step 2: Configure Hermes

In your `~/.hermes/config.yaml`, add:

```yaml
telegram:
  bot_token: "123456789:ABCdefGhIJKlmNoPQRstuVWxyZ"
  enabled: true
```

Or set it as an environment variable in `~/.hermes/.env`:

```bash
TELEGRAM_BOT_TOKEN=123456...WxyZ
```

### Step 3: Start the Gateway

```bash
openclaw gateway start
```

### Step 4: Start Hermes

```bash
hermes
```

Then send `/start` to your bot. You should get a greeting back.

If nothing happens: double-check the token, make sure Hermes is running, and run `openclaw gateway status` to confirm the gateway is up.

---

## Model Selection and Cost

Running an AI agent isn't free. Here's what you need to know.

### Model Tiers

| Tier | Examples | Speed | Cost | Best For |
|------|---------|-------|------|----------|
| Fast/cheap | Claude Haiku, GPT-4o mini | Fast | ~$0.50/M tokens | Simple tasks, cron outputs, summaries |
| Balanced | GPT-4o, Claude Sonnet | Medium | ~$3-5/M tokens | Most agent tasks, research, drafting |
| Premium | Claude Opus, o1 | Slower | ~$15-30/M tokens | Complex analysis, high-stakes output |

### Cost Reality Check

A morning briefing cron that fires 5 days a week for a month:

- ~20 calls/month
- At balanced tier: roughly $0.10-0.30/month
- At premium tier: roughly $0.60-2.00/month

A 4-hourly opportunity scan:

- ~180 calls/month
- At fast tier: roughly $0.50-1.50/month
- At balanced tier: roughly $3-10/month

**Start with a fast/cheap model for routine crons.** Reserve premium models for tasks that need the quality.

Set this in your agent config:

```yaml
model: anthropic/claude-haiku-3.5   # for routine crons
# model: anthropic/claude-sonnet-4  # for quality tasks
```

---

# SECTION 02: CRON JOBS & AUTOMATION

## What Cron Jobs Actually Do

Cron jobs are scheduled tasks that run on autopilot. No human reminders, no "did I do that?" anxiety. You set them once and they fire when they're supposed to.

The difference between someone who uses agents and someone who talks about using agents iscron jobs. Without them, you have a chatbot. With them, you have an employee that never sleeps.

**What crons replace:**
- Morning briefings you write at 6 AM while half-asleep
- Evening reviews you skip because you're tired
- Weekly recaps that never happen
- Content drafts you keep pushing off
- Opportunity scans you forget to run

**What crons don't replace:**
- Decisions only you can make
- Conversations that require judgment
- Tasks that change based on new information you haven't shared

---

## Cron Syntax: The Five-Field Format

Every cron expression has five fields:

```
minute hour day-of-month month day-of-week
```

| Field | Values | Special |
|-------|--------|---------|
| Minute | 0-59 | `*` = every, `*/n` = every n units |
| Hour | 0-23 | `*` = every, `*/n` = every n units |
| Day of month | 1-31 | `*` = every |
| Month | 1-12 | `*` = every |
| Day of week | 0-6 (Sun=0 or 7) | `1-5` = weekdays, `0` = Sunday |

**Common schedules:**

```
Every day 7 AM              ->  0 7 * * *
Weekdays 7:30 AM            ->  30 7 * * 1-5
Every Monday 9 AM           ->  0 9 * * 1
Every Sunday 8 PM           ->  0 20 * * 0
Every 4 hours               ->  0 */4 * * *
Every 2 hours               ->  0 */2 * * *
1st of month 9 AM           ->  0 9 1 * *
Wednesday + Friday 9 AM     ->  0 9 * * 3,5
Every weekday noon          ->  0 12 * * 1-5
```

---

## The Five Working Prompts

These are the core automations. Each one includes the full prompt and an explanation of **why it works**.

---

### PROMPT 1: Morning Briefing

**Schedule:** Weekdays 7:30 AM | `30 7 * * 1-5`
**Delivery:** Telegram
**Model:** Fast/cheap (routine, high frequency)

```markdown
Morning Briefing — [DATE]

You are a senior executive assistant. Your job is to give a crisp, actionable morning briefing for [NAME], a [ROLE].

Today is [DATE].

3 MUST-DOS — The 3 non-negotiable tasks for today. Each must be specific and actionable. Format as "1. [Task] — why it matters today". No vague priorities. If a task has been sitting for 3+ days, flag it.

WHAT'S ON YOUR PLATE — Current projects, ongoing threads, commitments. What's active right now. One line per item, max 5 items.

RED FLAGS — Anything about to blow up: deadlines within 24h, conversations that need follow-up, deliverables at risk. If nothing urgent, write "All clear — no red flags."

ONE THING DIFFERENTLY — One specific thing [NAME] could do today to move faster or think clearer. Not a habit tip — something tactical. One sentence max.

Output: Plain text. Tight. Under 150 words total. No headers. No bullet points in the body. No emojis.
```

**Why this works:**

- **Role anchoring** ("senior executive assistant") sets the output standard immediately — the agent doesn't generate small talk, it generates briefing notes
- **Specificity constraints** ("3+ days flag", "why it matters today") prevent vague GENERIC responses
- **Conditional section** ("If nothing urgent, write 'All clear'") prevents padding on quiet days
- **Output format locked** ("Plain text. Tight. Under 150 words. No headers. No emojis.") means you get something you can actually read in 30 seconds on your phone
- **"One thing differently" is tactical not aspirational** — it forces a actionable micro-change, not a mindset tip

**Anti-patterns in this prompt (why "Do NOT use" works):**
Don't say "be specific" — say "Each must be specific and actionable. Format as '1. [Task] — why it matters today'"

---

### PROMPT 2: Evening Review

**Schedule:** Daily 6 PM | `0 18 * * *`
**Delivery:** Telegram
**Model:** Fast/cheap

```markdown
Evening Review — [DATE]

Date: [DATE]. Your name: [NAME].

WHAT GOT DONE — What did you actually finish today? List 3-5 specific accomplishments. Real ones. Format as "1. [What] — [result]". Be specific — not "worked on marketing" but "published Tuesday's thread, 3 replies, 1 new follower from @handle."

WHAT DIDN'T GET DONE — What slipped off the list? Be honest. Assign a reason: blocked / distracted / scope creep / didn't matter. Format: "[Task] — [reason]."

TOMORROW'S FOCUS — One thing to start tomorrow. One thing to stop doing tomorrow. One thing to continue. Format: "Start: [action]. Stop: [action]. Continue: [action]."

Output: Plain text. Brutal honesty. No padding. No motivational closing. Under 120 words.
```

**Why this works:**

- **Stop/Start/Continue framework** forces a decision about behavior change, not just a task list
- **Result specificity** ("published Tuesday's thread, 3 replies, 1 new follower") makes the log machine-readable and actually useful for weekly review
- **Failure reason tagging** (blocked/distracted/scope creep) builds self-awareness over time about where energy actually goes
- **Under 120 words** — evening reviews that are longer than a slide get skimmed, not read

---

### PROMPT 3: Weekly Review

**Schedule:** Every Sunday 8 PM | `0 20 * * 0`
**Delivery:** Telegram
**Model:** Balanced (complex synthesis)

```markdown
Weekly Review — Week of [DATE] through [DATE]

You are a performance analyst. Your job is to review [NAME]'s week and produce a structure that enables a clear start to next week.

WINS — The 3 biggest wins this week. What moved forward? What shipped? What closed? One line each. Specific results, not activity descriptions.

METRICS — Key numbers. Revenue, leads, engagement, commits — whatever [NAME] tracks. Actual vs target with delta. If nothing tracked this week, say "No metrics tracked this week — add tracking next week."

TOP 3 PRIORITIES — The 3 things that matter most next week. Not a wishlist — what [NAME] must get done. One sentence each.

ONE DECISION — The one thing [NAME] is avoiding or needs to decide. Name it. Give just enough context that someone reading this understands the stakes. If nothing being avoided, say "Nothing being avoided — good."

Output: Markdown with headers. Under 250 words. Ship it.
```

**Why this works:**

- **Machine-readable metrics section** — when you do this every week, you build a log that shows trajectory over time
- **"One decision" section** — the highest-value part of any weekly review is naming the thing you're avoiding. The prompt forces it out.
- **"Not a wishlist" constraint** — prevents the common failure of listing everything you'd ideally do instead of what you'll actually do
- **Balanced model** — weekly review requires synthesis, not just retrieval, so use a better model

---

### PROMPT 4: Content Draft

**Schedule:** Daily 9 AM | `0 9 * * 1-5`
**Delivery:** Discord #content or Telegram
**Model:** Balanced

```markdown
Content Draft — [PLATFORM: X/Twitter or LinkedIn]
Topic: [TOPIC]

Task: Write 3 distinct drafts for [PLATFORM]. Each ready to post with zero editing.

DRAFT 1 — Tone: [e.g., provocative, makes someone think]
Format requirements:
- X: Under 280 characters. Strong hook first line. No hashtags unless natural. No "1/" or "Here's a thread" opener.
- LinkedIn: Under 200 words. First line must be a scroll-stopper — a number, a dollar figure, or a specific claim. Not a question. Not a platitude.

DRAFT 2 — Tone: [e.g., educational, shows you know your stuff]
Same format requirements as Draft 1.

DRAFT 3 — Tone: [e.g., short story format, personal angle]
Same format requirements as Draft 1.

Do NOT use in any draft:
- "I hope this finds you"
- "I wanted to reach out"
- "Just checking in"
- "Would love to connect"
- "Thought this might resonate"
- Any variation of "engagement farming" language

Output format:
DRAFT 1 ([platform], [tone]):
[content]
---
DRAFT 2 ([platform], [tone]):
[content]
---
DRAFT 3 ([platform], [tone]):
[content]
```

**Why this works:**

- **Three distinct tones** give you choice without requiring the AI to commit to one angle
- **"Ready to post with zero editing"** sets a quality bar — generic prompts produce generic drafts
- **Platform-specific constraints** built in (character counts, scroll-stopper definition)
- **"Do NOT use" list** — specific phrases that appear in every bad piece of AI content, explicitly banned
- **No "engagement farming" language** — this is the exact language that signals to readers "this was written by AI or by someone trying too hard"

---

### PROMPT 5: Lead & Opportunity Scan

**Schedule:** Every 4 hours | `0 */4 * * *`
**Delivery:** Discord #research or Telegram
**Model:** Fast/cheap

```markdown
Lead & Opportunity Scan — [DATE, HH:MM UTC]

You are a senior sales analyst. Your job is to scan for relevant signals and opportunities in [INDUSTRY/NICHE] and surface only what is actionable within 24 hours.

Check: industry news, competitor moves, viral posts relevant to [FOCUS], hiring signals from target accounts, funding announcements.

REPORT ONLY IF — You find something actionable. If nothing actionable this cycle, respond with exactly:

"No actionable leads this cycle."

Do not pad. Do not summarize news for the sake of it. Do not speculate.

ACTIONABLE means:
- A relevant opportunity you could act on within 24 hours
- A connection request worth making
- A conversation worth starting
- A trend worth commenting on
- A target account showing buying signals

If you find something:
LEAD: [What you found — be specific]
WHY IT MATTERS: [Who this is relevant to and why now]
SOURCE: [Where you found it — URL or platform]
ACTION: [One specific thing to do in the next 24 hours]

Output: Plain text. One lead per block. Max 2 leads per scan. If you find more than 2, prioritize the 2 most actionable.
```

**Why this works:**

- **"Report only if" clause** is the most important part — it prevents inbox pollution on low-signal days. Without this, you get noise.
- **"Max 2 leads per scan"** — quality over quantity. One good lead acted on beats ten leads ignored.
- **Source URL required** — you can verify and follow up
- **Action within 24 hours** constraint — if you can't act on it immediately, it's not a lead, it's a news item
- **Fast model** — this is a scan, not analysis. Speed and cost matter more than depth.

---

## Setting Up Your First Cron

Now that you have the prompts, here's how to actually schedule them.

### Using OpenClaw Cron

```bash
# Add a cron job
openclaw cron add \
  --name "Morning Briefing" \
  --schedule "30 7 * * 1-5" \
  --prompt "Morning Briefing — [DATE]..." \
  --deliver telegram \
  --model anthropic/claude-haiku-3.5
```

### Verify It's There

```bash
openclaw cron list
```

### Test It Immediately

```bash
openclaw cron run [job-id]
```

Check your Telegram. If the output looks right, you're live. If it doesn't, adjust the prompt and test again.

### Useful Cron Commands

| Command | What It Does |
|---------|-------------|
| `openclaw cron list` | List all scheduled jobs |
| `openclaw cron run [id]` | Fire a job immediately (for testing) |
| `openclaw cron runs` | Show run history |
| `openclaw cron status` | Show scheduler status |
| `openclaw cron rm [id]` | Remove a job |
| `openclaw cron edit [id]` | Edit a job (patch fields) |
| `openclaw cron disable [id]` | Pause a job |
| `openclaw cron enable [id]` | Resume a paused job |

---

# SECTION 03: STEP-BY-STEP WALKTHROUGHS

Three complete automation systems. Build one today.

---

## System 1: Morning Briefing in 1 Hour

Time: 1 hour first time (not 20 minutes — be honest)
What you get: A morning briefing delivered to Telegram every weekday before you wake up

### Step 1: Create the Vault

```bash
mkdir -p ~/.vault/memories
mkdir -p ~/.vault/daily
```

### Step 2: Create Your PROFILE.md

Fill in `~/.vault/memories/PROFILE.md` with real information. The agent reads this every session — vague profile, vague output.

### Step 3: Connect Telegram

1. Create a bot via @BotFather (see Section 01)
2. Add token to `~/.hermes/.env`
3. Run `openclaw gateway start`
4. Run `hermes`
5. Message your bot with `/start`

### Step 4: Create the Briefing Prompt

Save the Prompt 1 template from Section 02 to a file:

```bash
mkdir -p ~/.vault/projects/morning-briefing
nano ~/.vault/projects/morning-briefing/briefing-prompt.txt
```

Fill in `[NAME]`, `[ROLE]`, `[DATE]`. The agent handles the date field automatically when it fires.

### Step 5: Schedule It

```bash
openclaw cron add \
  --name "Morning Briefing" \
  --schedule "30 7 * * 1-5" \
  --prompt-file ~/.vault/projects/morning-briefing/briefing-prompt.txt \
  --deliver telegram \
  --model anthropic/claude-haiku-3.5
```

### Step 6: Test It

```bash
openclaw cron list
# Find the job ID
openclaw cron run [job-id]
```

Check Telegram. You should see the briefing within seconds.

**Common failures:**
- Gateway not running: `openclaw gateway start`
- Telegram not connected: check bot token in `.env`
- Generic output: strengthen the prompt with more specific constraints

---

## System 2: Lead Research in 30 Minutes

Time: 30 minutes after you have your ICP defined
What you get: A weekly research report delivered every Monday morning

### Step 1: Define Your ICP

Your Ideal Customer Profile tells the agent who to look for. Create `~/.vault/projects/lead-research/ICP.md`:

```markdown
# Ideal Customer Profile

INDUSTRY: [e.g., B2B SaaS, E-commerce, Fintech]
COMPANY SIZE: [e.g., 10-50 employees, Series A-C]
ROLE: [e.g., VP of Engineering, Head of Growth, Founder]
LOCATION: [e.g., US-based, Remote-first, Europe]
PROBLEM: [The specific pain point you solve]
SIGNALS: [Hiring spikes, funding rounds, new product launches, expansion]
BUYING TRIGGERS: [What makes them ready to buy now]
```

Be specific. "Companies that recently raised Series A" is a signal. "Companies in the AI space" is not.

### Step 2: Create the Research Prompt

Save this to `~/.vault/projects/lead-research/weekly-research.txt`:

```markdown
Lead Research — Week of [DATE]

You are a senior B2B sales researcher. Find 5 companies matching this ICP and surface specific, actionable leads.

ICP:
- Industry: [YOUR INDUSTRY]
- Company size: [YOUR SIZE RANGE]
- Role: [YOUR TARGET ROLE]
- Signals: [YOUR SIGNALS]
- Buying triggers: [WHAT MAKES THEM READY NOW]

For each lead provide:
COMPANY: [Name, location, brief description]
SIGNAL: [Why they're interesting right now — specific trigger]
RELEVANCE: [How this connects to what you offer]
NEXT ACTION: [One specific thing to do this week]

Output: Clean numbered list. No fluff. No speculation. Only include leads you can point to specific evidence for.

If you find fewer than 5 strong leads, report only what you found. Quality over quantity.
```

### Step 3: Schedule It

```bash
mkdir -p ~/.vault/projects/lead-research

openclaw cron add \
  --name "Weekly Lead Research" \
  --schedule "0 9 * * 1" \
  --prompt-file ~/.vault/projects/lead-research/weekly-research.txt \
  --deliver telegram \
  --model anthropic/claude-haiku-3.5
```

### Step 4: What the Output Looks Like

Monday 9:05 AM. Telegram:

```
LEAD RESEARCH — Week of April 14, 2026

1. TOOLFLOW (Austin, TX)
Signal: Posted "Hiring Lead AI Engineer" 4 days ago. Series A, $18M raised Nov 2025.
Relevance: Engineering bottleneck = your exact problem.
Next action: DM their VP Eng on LinkedIn referencing the hiring post.

2. MERIDIAN LABS (Remote)
Signal: Closed Series B. TechCrunch article mentions "aggressive developer tooling investment."
Relevance: New budget for exactly what you sell.
Next action: Cold email their Head of Product. Reference the funding.
```

### Step 5: Build a Simple CRM

Spreadsheet. Columns: Company | Signal | Action Taken | Response | Date.

Update it every Monday. After 8 weeks you'll have a log that shows what actually converts.

---

## System 3: Content Pipeline in 1 Hour

Time: 1 hour to set up, 15 minutes per week to manage
What you get: A week of content drafts auto-delivered each morning, ready to post

### Step 1: Define Your Content Pillars

Your pillars are the 3 themes everything you create falls under. Create `~/.vault/projects/content/PILLARS.md`:

```markdown
# Content Pillars

PILLAR 1: [THEME — e.g., "Ship fast without burning out your team"]
PILLAR 2: [THEME — e.g., "How we use AI in our workflow"]
PILLAR 3: [THEME — e.g., "Real numbers from growing a B2B SaaS"]

Each pillar answers one question your audience has:
- Pillar 1 answers: [e.g., "How do I move faster without the chaos?"]
- Pillar 2 answers: [e.g., "Does this actually work in practice?"]
- Pillar 3 answers: [e.g., "Is this worth the investment?"]
```

### Step 2: Create This Week's Content Calendar

Create `~/.vault/projects/content/CALENDAR.md`:

```markdown
# Content Calendar — Week of [DATE]

MONDAY: Pillar 1 — Thread
TUESDAY: Pillar 2 — Single post
WEDNESDAY: Pillar 3 — Hot take
THURSDAY: Pillar 1 — How-to thread
FRIDAY: React to news — leave one slot open
```

Update this every Friday for the week ahead.

### Step 3: Create the Daily Prompt

Save the Content Draft template from Section 02 as `~/.vault/projects/content/today-prompt.txt`, filling in today's topic and platform.

### Step 4: Schedule the Batch Creation

Instead of one prompt per day, create the full week's content in one shot every Sunday:

```bash
mkdir -p ~/.vault/projects/content

openclaw cron add \
  --name "Sunday Content Batch" \
  --schedule "0 18 * * 0" \
  --prompt-file ~/.vault/projects/content/batch-prompt.txt \
  --deliver telegram \
  --model anthropic/claude-haiku-3.5
```

### Step 5: The Sunday Batch Prompt

```markdown
Content Batch — Week of [DATE]

Task: Write 5 content pieces for the week. One for each weekday.

For each day:
PIllar: [From your calendar — Pillar 1, 2, or 3]
Platform: [X or LinkedIn]
Tone: [Specific — e.g., "provocative", "educational", "short story"]

Format for each:
[DATE] ([PLATFORM]):
[content]
---

X/Twitter: Under 280 characters. Strong hook first. No hashtags unless natural.
LinkedIn: Under 200 words. Scroll-stopper opener. No hashtags in body.

Write each piece ready to post. Zero editing needed.
```

### Step 6: What You Get

Sunday 6 PM, Telegram:

```
SUNDAY CONTENT BATCH — Week of April 14

APRIL 14 (X, provocative):
[3 provocative tweets]
---

APRIL 15 (LinkedIn, educational):
[Educational post]
---

[...]

Ready to schedule in Buffer/Hypefury. Copy, paste, post.
```

---

# SECTION 04: FILE TEMPLATES

Five templates ready to copy and deploy.

---

## Template 1: PROFILE.md

Location: `~/.vault/memories/PROFILE.md`

```markdown
# Profile

Name:
Location / Timezone:
Role:

## What I'm Building
<!-- One paragraph. Specific. -->

## Goals This Month
1.
2.
3.

## Current Projects
<!-- One line: name — status / next action -->
-
-
-

## How I Like to Work
<!-- Session length, async vs sync, decision style -->

## My Voice
Use:
<!-- e.g. direct, punchy, no fluff, first person -->
Avoid:
<!-- e.g. corporate speak, hedging, bullet overload -->

## Key Preferences
- Format:
- Response length:
- Feedback style:
```

---

## Template 2: PROJECT-BRIEF.md

Location: `~/.vault/projects/[project-name]/PROJECT-BRIEF.md`

```markdown
# Project Brief — [Project Name]

One-liner:

## Why We're Doing It
<!-- The real reason. Not the pitch — the actual motivation. -->

## Success Criteria
By [date]:
By [date]:

## Current Status
<!-- One paragraph. Where things stand right now. -->

## Who's Involved
- Owner:
- Contributors:
- Stakeholders:

## Timeline
| Date | Milestone |
|------|-----------|
|      |           |

## Budget
Total:
Spent:
Remaining:

## What's at Risk
<!-- Be honest. What could kill this? -->

## What We Tried Before
<!-- Previous attempts, dead ends. Don't repeat them. -->

## What NOT to Do
<!-- Hard constraints. Non-negotiables. -->
-
-
-
```

---

## Template 3: WEEKLY-REVIEW.md

Location: `~/.vault/daily/reviews/WEEKLY-REVIEW-YYYY-MM-DD.md`

```markdown
# Weekly Review

Week of: [Mon DD MMM] — [Sun DD MMM YYYY]

## Numbers
Revenue — Actual: $       Target: $       Delta: $
Leads — New:    Converted:      Pipeline:
Content posted:

## What Shipped
<!-- Done. Published. Sent. Launched. -->
-

## What Didn't
<!-- Missed. Blocked. Pushed. No fluff. -->
-

## Top 3 Next Week
1.
2.
3.

## One Decision Needed
<!-- The thing you're avoiding. Name it. -->

## Energy Note
<!-- One line. Burned out? Locked in? Distracted? -->
```

---

## Template 4: ICP.md

Location: `~/.vault/projects/[project-name]/ICP.md`

```markdown
# Ideal Customer Profile

## Who They Are
Industry:
Company size:
Location:
Title / Role:

## Their #1 Problem
<!-- In their words. Not yours. -->

## Current Solution
<!-- What are they doing about it now? Tools, people, workarounds. -->

## What They'd Pay
Price range:
What they're paying now:
Outcome that justifies the spend:

## Where to Find Them
<!-- Specific. Channels, communities, events, platforms. -->
-
-

## Qualification Criteria
Must-have (all 3 required):
1.
2.
3.

Nice-to-have (bonus signals):
1.
2.

## Disqualifiers
<!-- Who to walk away from. -->
-
-
```

---

## Template 5: CONTENT-CALENDAR.md

Location: `~/.vault/projects/content/CONTENT-CALENDAR-YYYY-WW.md`

```markdown
# Content Calendar

Week of: [Mon DD MMM — Sun DD MMM YYYY]
Theme:

## Content Pillars
1.
2.
3.

## This Week's Topics

| # | Platform | Format | Angle / Hook |
|---|----------|--------|--------------|
| 1 |          |        |              |
| 2 |          |        |              |
| 3 |          |        |              |
| 4 |          |        |              |
| 5 |          |        |              |

## Voice Rules
Always:
-
Never:
-

## Posting Times
-
-
```

---

# SECTION 05: QUICK REFERENCE

## Cron Cheat Sheet

| What You Want | Cron Expression |
|--------------|-----------------|
| Every day 7 AM | `0 7 * * *` |
| Every day 9 AM | `0 9 * * *` |
| Weekdays 7:30 AM | `30 7 * * 1-5` |
| Every Monday 9 AM | `0 9 * * 1` |
| Every Sunday 8 PM | `0 20 * * 0` |
| Every 4 hours | `0 */4 * * *` |
| Every 2 hours | `0 */2 * * *` |
| 1st of month 9 AM | `0 9 1 * *` |
| Wed + Fri 9 AM | `0 9 * * 3,5` |
| Every weekday noon | `0 12 * * 1-5` |

**Format:** `minute hour day-of-month month day-of-week`
Days: 0=Sunday, 1=Monday, ..., 6=Saturday

---

## OpenClaw Commands

### Gateway

| Command | What It Does |
|---------|-------------|
| `openclaw gateway start` | Start the gateway service |
| `openclaw gateway stop` | Stop the gateway service |
| `openclaw gateway status` | Check if gateway is running |
| `openclaw gateway restart` | Restart the gateway |
| `openclaw gateway health` | Gateway health check |
| `openclaw gateway usage-cost` | Show usage costs |

### Cron

| Command | What It Does |
|---------|-------------|
| `openclaw cron list` | List all scheduled jobs |
| `openclaw cron add` | Add a new cron job |
| `openclaw cron rm [id]` | Remove a cron job |
| `openclaw cron run [id]` | Fire a job immediately |
| `openclaw cron runs` | Show run history |
| `openclaw cron status` | Show scheduler status |
| `openclaw cron edit [id]` | Edit a job |
| `openclaw cron disable [id]` | Pause a job |
| `openclaw cron enable [id]` | Resume a job |

### Config

| Command | What It Does |
|---------|-------------|
| `openclaw config file` | Show config file path |
| `openclaw config get [path]` | Get a config value |
| `openclaw config set [path] [value]` | Set a config value |
| `openclaw config validate` | Validate config against schema |

---

## Troubleshooting

**Cron not firing:**
1. `openclaw gateway status` — is the gateway running?
2. `openclaw cron list` — is the job listed?
3. `openclaw cron status` — is the scheduler running?
4. `openclaw cron runs` — any error in the run history?

**Agent giving generic responses:**
- Increase `context_window` in your agent config
- Strengthen persona cues in the system prompt
- Add 2-3 example outputs for the agent to match
- Upgrade model tier for that prompt

**Agent forgetting context:**
- Lower output token limit to free context space
- Switch to a model with larger context window
- Break long conversations into sessions with explicit summary handoffs

**Content sounding generic:**
- Add specific voice attributes to your persona: "writes like a sharp editorial assistant who has a opinion"
- Include 3-5 real example outputs to mirror
- Add a "Do NOT use" list for specific phrases
- Vary sentence structure, inject domain-specific terminology

**Telegram not connecting:**
- Verify bot token in `~/.hermes/.env`
- Bot must have been started by at least one user (send it a message)
- Run `openclaw gateway status` to confirm gateway has Telegram enabled

**Cron firing too often / too expensive:**
- Switch the prompt's model to a faster/cheaper tier
- Lengthen the schedule: every 4 hours -> every 8 hours
- Remove crons that are "nice to have" and keep "must have"

---

## Quick Health Check

Run these three commands when diagnosing delivery failures:

```bash
openclaw gateway status   # is the gateway up?
openclaw cron list        # are jobs scheduled?
openclaw cron runs        # any errors in recent runs?
```

These three commands cover the three most common failure points: stopped gateway, missing cron entry, runtime errors.

---

## Vault File Locations

| File | Path |
|------|------|
| Main config | `~/.openclaw/config.yaml` |
| Agent personas | `~/.openclaw/personas/` |
| Cron definitions | `~/.openclaw/crons/` |
| Logs | `~/.openclaw/logs/` |
| Your vault root | `~/.vault/` |

---

## What You Have Now

Three automation systems running on autopilot:

| System | Schedule | What You Get |
|--------|----------|-------------|
| Morning Briefing | Weekdays 7:30 AM | 3 must-dos, what's on, red flags, one change |
| Weekly Review | Sundays 8 PM | Wins, metrics, top 3, one decision |
| Content Batch | Sundays 6 PM | 5 drafts ready to schedule |
| Lead Research | Mondays 9 AM | 5 actionable leads with next steps |
| Opportunity Scan | Every 4 hours | Actionable leads or silence |

Add more as you need them. The pattern is always: define what you want, write the prompt, schedule the cron, let it run.

---

*Built with Hermes x OpenClaw | Last updated: 2026-04-15*
