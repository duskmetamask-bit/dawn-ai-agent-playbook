# Setup Guide

## How to Use This Playbook

This playbook is for you if you want to run an AI agent that works for you while you sleep. No coding experience required. If you can use a text editor and follow steps, you can set this up.

Before you start, you need:
- A computer (Mac or Linux) or a server you can access via terminal
- A Telegram account
- Basic comfort with copy-pasting commands

Every AI agent system has three parts you must understand:

**Brain** — The agent itself (like Claude or Hermes). It thinks and responds. Without it, nothing happens.

**Memory** — Where the agent stores what it knows about you and your projects. Without this, it forgets everything between sessions.

**Triggers** — Schedules or events that make the agent act. Without triggers, you have to manually start everything.

When you see prompts in this playbook marked "Copy into Claude/Hermes," paste them exactly as shown into your agent interface. The agent will read them and follow the instructions you give.

---

## Setting Up Your Vault

Your vault is a folder structure where your agent stores everything it needs to remember. Think of it as the agent's long-term memory. Without a vault, your agent starts fresh every session with no context.

Create this exact structure on your computer:

~/.hermes/
  memories/
    PROFILE.md
    PROJECTS.md
~/.openclaw/
  vault/
    daily/
    projects/
    templates/

Here's what each piece does:

**~/.hermes/memories/PROFILE.md** — Tells the agent who you are, what you care about, and what you want it to help with. Update this when your goals change.

**~/.hermes/memories/PROJECTS.md** — A running list of active projects with status, next steps, and key details. The agent reads this to know what you're working on.

**~/.openclaw/vault/daily/** — Stores session logs from each day. The agent can review past sessions to track progress and avoid repeating itself.

**~/.openclaw/vault/projects/** — Each project gets its own folder here. This is where project-specific files, notes, and artifacts live.

**~/.openclaw/vault/templates/** — Reusable templates for common tasks. Copy these when starting new work to stay consistent.

Here is what your PROFILE.md should look like:

```
# Profile

Name: [YOUR NAME]
Role: [WHAT YOU DO]
Location: [WHERE YOU ARE]

Goals for this agent:
- [GOAL 1]
- [GOAL 2]
- [GOAL 3]

Communication style: [HOW YOU WANT THE AGENT TO TALK TO YOU]
Preferred response length: [SHORT / MEDIUM / DETAILED]

What I need help with most:
- [PRIORITY 1]
- [PRIORITY 2]
- [PRIORITY 3]
```

And your PROJECTS.md:

```
# Active Projects

## Project Name: [PROJECT 1]
Status: [ACTIVE / PAUSED / COMPLETED]
Last updated: [DATE]
Current task: [WHAT NEEDS TO HAPPEN NEXT]
Key details:
- [DETAIL 1]
- [DETAIL 2]

## Project Name: [PROJECT 2]
Status: [ACTIVE / PAUSED / COMPLETED]
Last updated: [DATE]
Current task: [WHAT NEEDS TO HAPPEN NEXT]
Key details:
- [DETAIL 1]
- [DETAIL 2]
```

Fill these in with real information. The more specific you are, the better your agent can help you.

---

## Connecting to Telegram

Telegram is how you talk to your agent. Once set up, you message a bot and the agent responds.

**Step 1:** Open Telegram and search for @BotFather. Start a chat and send the message `/newbot`. Follow the prompts. Give your bot a name and a username. BotFather will give you a token that looks like `123456789:ABCdefGhIJKlmNoPQRstuVWxyZ`.

**Step 2:** Save that token in a file called `.env` in your project folder:

```
TELEGRAM_BOT_TOKEN=123456789:ABCdefGhIJKlmNoPQRstuVWxyZ
```

**Step 3:** Start your agent and send it the message `/start`. If everything is connected, you should get a greeting back.

If you do not receive a response, double-check that your token is correct and that your agent is actually running.

---

Next: Configure your first agent prompt and start your first session.
---

# SECTION 02: CRON JOBS & AUTOMATION

## What Cron Jobs Do

Cron jobs are scheduled tasks that run on autopilot. No human reminders, no manual check-ins, no "did I do that?" anxiety. You set them once and they fire when they're supposed to—every day, every week, every four hours. Whatever you need.

Cron jobs replace the repetitive stuff that eats your day: morning briefings you write at 6 AM, evening reviews you skip because you're tired, weekly recaps that never happen, content drafts you keep pushing off, opportunity scans you forget to run. Automation handles the rhythm so your brain handles the judgment.

---

## Cron Syntax Explained

Every cron line has five fields: minute hour day month weekday

Every day 7 AM         ->  0 7 * * *
Weekdays 7:30 AM       ->  0 7 * * 1-5
Every Monday 9 AM       ->  0 9 * * 1
Every Sunday 8 PM       ->  0 20 * * 0
Every 4 hours           ->  0 */4 * * *

Five fields, five stars in order. Minute (0-59), Hour (0-23), Day of month (1-31), Month (1-12), Day of week (0-6, Sunday = 0 or 7). Use * for "every," ranges like 1-5 for weekdays, */4 for every 4 units. That's it.

---

## 5 Working Cron Job Examples

---

### CRON 1: Morning Briefing

**Schedule:** Weekdays 7:30 AM | `0 7 * * 1-5`
**Delivery:** Telegram

**Prompt:**

```
Morning Briefing — 3 must-dos, what's on your plate, red flags, one thing to change.

Today is [DATE]. Your name is [YOUR NAME] and your role is [YOUR ROLE].

3 MUST-DOS: List the 3 non-negotiable tasks for today. Be specific. No fluff.

WHAT'S ON YOUR PLATE: Brief summary of current projects, threads, commitments. What's active right now.

RED FLAGS: Anything about to blow up, deadlines approaching, conversations you need to follow up on. If nothing urgent, say "All clear."

ONE THING DIFFERENTLY: One specific thing you could do today to move faster or think clearer. Keep it actionable.

Respond in plain text. No headers. Tight and direct.
```

---

### CRON 2: Evening Review

**Schedule:** Daily 6 PM | `0 18 * * *`
**Delivery:** Telegram

**Prompt:**

```
Evening Review — what got done, what didn't, what to carry into tomorrow.

Date: [DATE]. Your name: [YOUR NAME].

WHAT GOT DONE: What did you actually finish today? List 3-5 specific accomplishments. Real ones.

WHAT DIDN'T GET DONE: What slipped off the list? Be honest. Assign a reason if you can — blocked, distracted, scope creep.

TOMORROW: What one thing do you start tomorrow? What do you stop doing tomorrow? What do you continue?

Respond in plain text. Brutal honesty. No padding.
```

---

### CRON 3: Weekly Review

**Schedule:** Every Sunday 8 PM | `0 20 * * 0`
**Delivery:** Telegram

**Prompt:**

```
Weekly Review — [DATE] through [DATE].

WINS: Your 3 biggest wins this week. What moved forward? What shipped? What closed?

METRICS: Key numbers that matter. Revenue, leads, engagement, commits, whatever you track. Give context.

TOP 3 PRIORITIES: The 3 things that matter most next week. Not a wishlist—the actual load.

ONE DECISION NEEDED: One thing you're stuck on or need to decide. Give just enough context for someone to actually help.

Keep it under 250 words. No decoration. Ship it.
```

---

### CRON 4: Content Draft

**Schedule:** Daily 9 AM | `0 9 * * *`
**Delivery:** Discord #content channel

**Prompt:**

```
Content Draft — [PLATFORM: X/Twitter or LinkedIn].

Topic: [TOPIC FROM YOUR CONTENT CALENDAR OR CURRENT THREAD].

Task: Write 3 drafts for [PLATFORM]. Each should be ready to post with zero editing.

Draft 1: [tone/style if specified, e.g., "provocative, no fluff"]
Draft 2: [tone/style if specified, e.g., "educational, links to your post"]
Draft 3: [tone/style if specified, e.g., "short punchy story format"]

For X: Keep under 280 characters. For LinkedIn: Keep under 200 words. Include hook. No hashtags unless specified.

Format:
DRAFT 1:
[content]
---
DRAFT 2:
[content]
---
DRAFT 3:
[content]
```

---

### CRON 5: Lead / Opportunity Scan

**Schedule:** Every 4 hours | `0 */4 * * *`
**Delivery:** Discord #research channel

**Prompt:**

```
Lead & Opportunity Scan — [DATE, HH:MM UTC].

Task: Scan for relevant news, signals, and opportunities in [YOUR INDUSTRY/NICHE]. Check: industry news, competitor moves, viral posts relevant to [YOUR FOCUS], hiring signals from target accounts.

REPORT ONLY IF: You find something actionable. If nothing actionable, respond with:

"No actionable leads this cycle."

ACTIONABLE MEANS: A relevant opportunity you could act on within 24 hours. A connection request worth making. A conversation worth starting. A trend worth commenting on. A target account showing signals.

If you find something:
LEAD/OPPORTUNITY: [What you found]
WHY IT MATTERS: [Who this is relevant to and why now]
ACTION: [What to do next]

Keep it tight. Don't speculate. Don't padding. If in doubt, stay silent.
```

---

## Next Steps

Take these five crons. Map them to your Hermes or OpenClaw setup. Adjust the prompts for your actual industry and workflow. Then stop thinking about scheduling—your agent handles the rhythm now.

---

# SECTION 03: STEP-BY-STEP WALKTHROUGHS

Three automation systems. Each one builds on the last. Start with Guide 1, move at your own pace.

---

## Guide 1: Your First Automation in 20 Minutes

Time: 20 minutes
What you get: A morning briefing delivered to Telegram every weekday

---

### Step 1: Create Your Vault Folders

Open your terminal and run:

```
mkdir -p ~/.hermes/memories
mkdir -p ~/.openclaw/vault/{daily,projects,templates}
mkdir -p ~/.openclaw/vault/projects/morning-briefing
```

Your folder structure:

```
~/.hermes/
  memories/
    PROFILE.md
    PROJECTS.md
~/.openclaw/
  vault/
    daily/
    projects/
      morning-briefing/
    templates/
```

---

### Step 2: Fill In Your PROFILE.md

Create the file at `~/.hermes/memories/PROFILE.md`:

```
# Profile

Name: [YOUR NAME]
Role: [WHAT YOU DO — e.g., Solo SaaS founder, Growth at Acme Inc]
Location: [CITY, TIMEZONE]

Goals for this agent:
- [GOAL 1 — e.g., Never miss a key task again]
- [GOAL 2 — e.g., Stay on top of industry news]
- [GOAL 3 — e.g., Produce content consistently]

Communication style: [DIRECT / CONVERSATIONAL / FORMAL]
Preferred response length: [SHORT / MEDIUM / DETAILED]

What I need help with most:
- [PRIORITY 1 — e.g., Morning planning and prioritization]
- [PRIORITY 2 — e.g., Lead research]
- [PRIORITY 3 — e.g., Content drafting]
```

Fill in the brackets. The agent reads this every session.

---

### Step 3: Connect Hermes to Telegram

1. Open Telegram and search for @BotFather. Send `/newbot`. Follow the prompts. Copy the token it gives you.

2. Create a file called `~/.hermes/.env` with your token:
```
TELEGRAM_BOT_TOKEN=123456789:ABCdefGhIJKlmNoPQRstuVWxyZ
```

3. Start Hermes and send `/start`. You should get a greeting back. If not, check your token is correct and Hermes is running.

---

### Step 4: Set Up the Morning Briefing Cron

Create the prompt file at `~/.openclaw/vault/projects/morning-briefing/briefing-prompt.txt`:

```
Morning Briefing — [DATE]

3 MUST-DOS: The 3 non-negotiable tasks for today. Specific. No fluff.

WHAT'S ON YOUR PLATE: Current projects, threads, commitments. What's active.

RED FLAGS: Anything about to blow up. Deadlines. Follow-ups needed. If clear, say so.

ONE THING DIFFERENTLY: One actionable change for today.

Respond in plain text. Tight and direct. Under 150 words.
```

Set the cron to fire every weekday at 7:30 AM:

```
30 7 * * 1-5 cat ~/.openclaw/vault/projects/morning-briefing/briefing-prompt.txt | xargs -I {} hermes --prompt "{}" --deliver telegram
```

---

### Step 5: Test It

Manually trigger the briefing to confirm it works:

```
cat ~/.openclaw/vault/projects/morning-briefing/briefing-prompt.txt | xargs -I {} hermes --prompt "{}" --deliver telegram
```

Check Telegram. You should see your briefing within seconds. If it fails, the most common issues: Hermes isn't running, the token is wrong, or the prompt file path is wrong.

---

### Step 6: What to Do When the Briefing Arrives

Read it. Act on the 3 must-dos first. The red flags tell you what to watch today. The "one thing differently" is your one lever—if you only change one behavior today, this is it.

Done. Every weekday morning, 7:30 AM, without you doing anything.

---

## Guide 2: Build a Lead Research System in 30 Minutes

Time: 30 minutes
What you get: New leads researched and delivered every Monday morning

---

### Step 1: Define Your ICP

Your Ideal Customer Profile tells the agent who to look for. Create `~/.openclaw/vault/projects/lead-research/ICP.md`:

```
# Ideal Customer Profile

INDUSTRY: [e.g., B2B SaaS, E-commerce, Fintech]
COMPANY SIZE: [e.g., 10-50 employees, Series A-C]
ROLE: [e.g., VP of Engineering, Head of Growth, Founder]
LOCATION: [e.g., US-based, Remote-first, Europe]
PROBLEM: [The specific pain point you solve]
SIGNALS: [Hiring spikes, funding rounds, new product launches, expansion]
```

Example filled in:

```
INDUSTRY: B2B SaaS
COMPANY SIZE: 20-200 employees
ROLE: Head of Product or VP Engineering
LOCATION: US and UK, remote-friendly
PROBLEM: Engineering team can't ship fast enough despite investing in AI tools
SIGNALS: Recently raised Series A/B, job posts for "AI Engineer" or "Developer Productivity", discussion of "ship more" on LinkedIn
```

---

### Step 2: Create the Research Prompt

Create `~/.openclaw/vault/projects/lead-research/weekly-research.txt`:

```
Lead Research — Week of [DATE]

Task: Find 5-10 companies that match this ICP and surface specific, actionable leads.

ICP:
- Industry: [YOUR INDUSTRY]
- Company size: [YOUR SIZE RANGE]
- Role: [YOUR TARGET ROLE]
- Signals: [YOUR SIGNALS]

For each lead, provide:
LEAD: [Company name and brief description]
SIGNAL: [Why they're interesting right now — what triggered the match]
RELEVANCE: [How this connects to what you offer]
NEXT ACTION: [One specific thing to do with this lead this week]

Format as a clean list. No fluff. No speculation. Only include leads you can point to specific evidence for.

If you find fewer than 5 strong leads, report only what you found. Quality over quantity.
```

---

### Step 3: Set Up the Cron

Every Monday at 9 AM:

```
0 9 * * 1 cat ~/.openclaw/vault/projects/lead-research/weekly-research.txt | xargs -I {} hermes --prompt "{}" --deliver telegram
```

---

### Step 4: What the Output Looks Like

Monday 9:05 AM. Telegram message arrives:

```
LEAD RESEARCH — Week of April 14, 2026

1. TOOLFLOW (Austin, TX)
Signal: Posted "Hiring Lead AI Engineer" 4 days ago. Series A, $18M raised Nov 2025.
Relevance: Engineering bottleneck = your exact problem.
Next action: DM their VP Eng on LinkedIn referencing the hiring post.

2. MERIDIAN LABS (Remote)
Signal: Just closed Series B. TechCrunch article mentions "aggressive developer tooling investment."
Relevance: New budget for exactly what you sell.
Next action: Cold email their Head of Product. Reference funding.

[3 more leads...]
```

---

### Step 5: How to Use It

Every Monday you get a fresh batch. Pick the 2-3 most promising. Take one action on each within 24 hours—a DM, an email, a comment on their content. The goal isn't to close, it's to start conversations.

Build a simple CRM: a spreadsheet with columns for Company, Signal, Action Taken, Response. Update it weekly.

---

## Guide 3: Content Pipeline in One Hour

Time: 1 hour to set up, 15 minutes per week to maintain
What you get: A week of content drafts auto-delivered each morning

---

### Step 1: Define Your 3 Content Pillars

Your pillars are the 3 themes everything you create falls under. They keep you focused and help the agent generate consistent content.

Create `~/.openclaw/vault/projects/content/CONTENT-PILLARS.md`:

```
# Content Pillars

PILLAR 1: [THEME — e.g., "Ship fast without burning out your team"]
PILLAR 2: [THEME — e.g., "How we use AI in our workflow"]
PILLAR 3: [THEME — e.g., "Real numbers from growing a B2B SaaS"]

Each pillar answers one question your audience has:
- Pillar 1 answers: [e.g., "How do I move faster without the chaos?"]
- Pillar 2 answers: [e.g., "Does this actually work in practice?"]
- Pillar 3 answers: [e.g., "Is this worth the investment?"]
```

---

### Step 2: Create Your Content Calendar

Create `~/.openclaw/vault/projects/content/CALENDAR.md`:

```
# Content Calendar — Week of [DATE]

MONDAY: [PILLAR 1] — [FORMAT: e.g., Thread, Short post]
TUESDAY: [PILLAR 2] — [FORMAT: e.g., Single insight]
WEDNESDAY: [PILLAR 3] — [FORMAT: e.g., "Hot take"]
THURSDAY: [PILLAR 1] — [FORMAT: e.g., How-to thread]
FRIDAY: [PILLAR 2] — [FORMAT: Reactive comment on industry news]
```

Example:

```
MONDAY: Pillar 1 — "5 ways to ship faster without the chaos" (thread)
TUESDAY: Pillar 2 — "What we actually use AI for" (short post)
WEDNESDAY: Pillar 3 — "My MRR isn't growing fast enough" (hot take)
THURSDAY: Pillar 1 — "The meeting mistake that kills velocity" (how-to)
FRIDAY: Pillar 2 — React to relevant news from the week
```

---

### Step 3: Set Up the Content Cron

The agent delivers one draft every morning at 9 AM. You choose which day gets which pillar by updating the calendar weekly.

```
0 9 * * 1-5 cat ~/.openclaw/vault/projects/content/today-prompt.txt | xargs -I {} hermes --prompt "{}" --deliver telegram
```

For this to work, you update `~/.openclaw/vault/projects/content/today-prompt.txt` with today's topic before the cron fires. Or—easier—set a single weekly cron that generates the full week's content in one shot (see Step 4).

---

### Step 4: The Batch Creation Workflow

Once per week, trigger a batch creation session. Create `~/.openclaw/vault/projects/content/batch-prompt.txt`:

```
Content Batch — Week of [DATE]

Task: Write 5 content pieces for the week. One for each weekday.

PIllars to cycle through:
- Pillar 1: [YOUR PILLAR 1 THEME]
- Pillar 2: [YOUR PILLAR 2 THEME]
- Pillar 3: [YOUR PILLAR 3 THEME]

Format for each day:
[DATE] — [PLATFORM]
---
[content here]
---

For X/Twitter: Under 280 characters. Strong hook first. No hashtags unless natural.
For LinkedIn: Under 200 words. Lead with a specific insight or story.

Write each piece ready to post. Zero editing needed from me. If a piece needs context only you have, note what that is.
```

Trigger it manually:

```
cat ~/.openclaw/vault/projects/content/batch-prompt.txt | xargs -I {} hermes --prompt "{}" --deliver telegram
```

You'll get all 5 drafts in one message. Save them to your calendar file.

---

### Step 5: How to Schedule and Post

With your 5 drafts in hand:

1. Paste each draft into your scheduling tool (Buffer, Later, Hypefury—whatever you use)
2. Set the times your audience is most active
3. For reactive Friday content, keep one slot open and fill it when news breaks

The agent handles the heavy lifting. You handle the judgment—does this sound like me? Is this the right take? Then you post.

---

## What You Have Now

Three systems running on autopilot:

- Morning briefing: Every weekday, 7:30 AM
- Lead research: Every Monday, 9 AM
- Content drafts: Batch created weekly, ready to schedule

Add more as you need them. The pattern is always the same: define what you want, write the prompt, set the cron, let it run.

---

# Section 04 — File Templates

These are copy-paste-ready templates. Drop them into your vault, fill them in, and reference them in conversation. The AI reads these files directly — blank fields get ignored, filled fields get used. Keep them updated.

---

## Template 1 — PROFILE.md

Drop this in: `~/.openclaw/vault/dawn-vault/[your-name]/PROFILE.md`

```markdown
# Profile

Name:
Location / Timezone:
Role:

## What I'm Building
<!-- One paragraph. Be specific. Not "a business" — what exactly. -->

## Goals This Month
1.
2.
3.

## Current Projects
<!-- List active projects with one-line status each -->
- Project name — status / next action
- Project name — status / next action
- Project name — status / next action

## How I Like to Work
<!-- Preferred session length, async vs sync, decision style, pace -->

## My Voice
Use: <!-- e.g. direct, punchy, no fluff, first person, short sentences -->
Avoid: <!-- e.g. corporate speak, excessive hedging, bullet-point overload, emojis -->

## Key Preferences
- Format: <!-- e.g. bullet lists / prose / tables -->
- Response length: <!-- e.g. short by default, expand on request -->
- Feedback style: <!-- e.g. blunt is fine / sandwich it -->
- Other:
```

---

## Template 2 — PROJECT-BRIEF.md

Drop this in: `~/.openclaw/vault/dawn-vault/[your-name]/projects/[project-name]/PROJECT-BRIEF.md`

```markdown
# Project Brief — [Project Name]

One-liner:
<!-- What is this in one sentence. -->

## Why We're Doing It
<!-- The real reason. Not the polished pitch — the actual motivation. -->

## Success Criteria
<!-- Specific and dated. -->
By [date]:
By [date]:
By [date]:

## Current Status
<!-- Where things stand right now. One paragraph. -->

## Who's Involved
- Owner:
- Contributors:
- Stakeholders / clients:

## Timeline Milestones
| Date | Milestone |
|------|-----------|
|      |           |
|      |           |
|      |           |

## Budget
Total:
Spent to date:
Remaining:

## What's at Risk
<!-- Be honest. What could kill this? -->

## What We Tried Before
<!-- Previous attempts, failed approaches, dead ends. Don't repeat them. -->

## What NOT to Do
<!-- Hard constraints. Non-negotiables. Lines not to cross. -->
-
-
-
```

---

## Template 3 — WEEKLY-REVIEW.md

Drop this in: `~/.openclaw/vault/dawn-vault/[your-name]/reviews/WEEKLY-REVIEW-[YYYY-MM-DD].md`

```markdown
# Weekly Review

Week of: [Mon DD MMM] — [Sun DD MMM YYYY]

## Numbers
Revenue — Actual: $       Target: $       Delta: $
Leads — New this week:    Converted:      Pipeline total:
Content posted:           Reach / impressions (if tracked):

## What Shipped
<!-- Completed, published, sent, launched — done is done. -->
-
-
-

## What Didn't
<!-- Missed, blocked, pushed. No fluff — just what and why. -->
-
-
-

## Top 3 Next Week
1.
2.
3.

## One Decision Needed
<!-- The thing you're avoiding. Name it. Make the call or note why not yet. -->

## Energy / Wellness Note
<!-- Optional but useful. Burned out? Locked in? Distracted? One line. -->
```

---

## Template 4 — ICP-TEMPLATE.md

Drop this in: `~/.openclaw/vault/dawn-vault/[your-name]/strategy/ICP-TEMPLATE.md`

```markdown
# Ideal Customer Profile

## Who They Are
Industry:
Company size:
Location:
Title / Role of buyer:

## Their #1 Problem
<!-- The thing keeping them up at night. In their words, not yours. -->

## Current Solution They Use
<!-- What are they doing about it right now? Tools, people, workarounds. -->

## What They'd Pay to Fix It
Price range they'd accept:
What they're paying now (if known):
What outcome justifies the spend:

## Where to Find Them
<!-- Specific. Channels, communities, events, platforms, search terms. -->
-
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
<!-- Who to walk away from immediately. -->
-
-
```

---

## Template 5 — CONTENT-CALENDAR.md

Drop this in: `~/.openclaw/vault/dawn-vault/[your-name]/content/CONTENT-CALENDAR-[YYYY-WW].md`

```markdown
# Content Calendar

Week of: [Mon DD MMM — Sun DD MMM YYYY]
This week's theme:
<!-- One idea that ties everything together. Optional but useful. -->

## Content Pillars
1.
2.
3.

## Platform Schedule

| Platform   | Days       | Format     | Goal          |
|------------|------------|------------|---------------|
|            |            |            |               |
|            |            |            |               |
|            |            |            |               |

## Posting Times
<!-- Local times. Be specific — "morning" is not a time. -->
- Platform:  Time:
- Platform:  Time:
- Platform:  Time:

## Voice Rules
Always:
-
-

Never:
-
-

## This Week's Topics
<!-- One post per line. Include platform, format, and one-line angle. -->

| # | Platform | Format | Angle / Hook |
|---|----------|--------|--------------|
| 1 |          |        |              |
| 2 |          |        |              |
| 3 |          |        |              |
| 4 |          |        |              |
| 5 |          |        |              |
```

---

## How to Use These

Fill them in once, keep them current. Reference them by filename in chat — the AI will pull the context automatically. Stale files produce stale output. Update after every major shift: new project, new goal, new quarter.

These templates work best when they live alongside each other in your vault. The AI cross-references them — your PROFILE informs how PROJECT-BRIEFs get drafted, your ICP shapes CONTENT-CALENDAR angles, your WEEKLY-REVIEW feeds the next planning session.

Blank is fine to start. Done is better than perfect.

---

# SECTION 05 — QUICK REFERENCE

---

## Cron Schedule Cheat Sheet

| What You Want | What to Type |
|---------------|--------------|
| Every day 7 AM | `0 7 * * *` |
| Every day 9 AM | `0 9 * * *` |
| Weekdays 7:30 AM | `30 7 * * 1-5` |
| Every Monday 9 AM | `0 9 * * 1` |
| Every Sunday 8 PM | `0 20 * * 0` |
| Every 4 hours | `0 */4 * * *` |
| Every 2 hours | `0 */2 * * *` |
| 1st of month 9 AM | `0 9 1 * *` |
| Wednesday + Friday 9 AM | `0 9 * * 3,5` |
| Every weekday noon | `0 12 * * 1-5` |

**Format reminder:** `minute hour day-of-month month day-of-week`

Use `1-5` for weekdays, `0` for Sunday, comma-separate multiple days (e.g., `3,5`).

---

## Delivery Destinations

| Where | Syntax | Example |
|-------|--------|---------|
| Telegram DM | `tg://dm:<user_id>` | `tg://dm:123456789` |
| Discord channel | `discord://channel/<channel_id>` | `discord://channel/987654321` |
| Discord DM | `discord://dm/<user_id>` | `discord://dm/111222333` |
| Email | `mailto:<address>` | `mailto:user@example.com` |
| Local file | `file://<absolute_path>` | `file:///home/user/output.txt` |

User IDs and channel IDs are numeric — find them via Discord's developer mode (right-click user/channel → Copy ID).

---

## OpenClaw Commands

| Command | Purpose |
|---------|--------|
| `openclaw gateway start` | Start the local gateway |
| `openclaw gateway stop` | Stop the gateway |
| `openclaw cron list` | List all scheduled jobs |
| `openclaw cron create` | Create a new cron job |
| `openclaw cron run <id>` | Fire a job immediately |
| `openclaw cron remove <id>` | Delete a cron job |
| `openclaw config show` | Display current configuration |

---

## Troubleshooting

**Cron not firing** — Confirm the gateway is running (`openclaw gateway status`). Check that the cron schedule syntax is valid and the job is enabled. Review logs at `~/.openclaw/logs/` for error details.

**Agent giving generic responses** — Increase `context_window` in your agent config. Embed stronger persona cues in the system prompt and give the agent 2-3 example outputs to match.

**Telegram not connecting** — Verify the bot token is set correctly in config. The bot must have been started by at least one user (send it a message). Check that your gateway has Telegram enabled in delivery settings.

**Agent forgetting context** — Lower the output token limit to free up context space. Alternatively, switch to a model with a larger context window. Break long conversations into分段 sessions with explicit summary handoffs.

**Content sounding generic** — Add specific voice attributes to your persona prompt (e.g., "writes like a sharp editorial assistant"). Include 3-5 real example outputs the agent must mirror. Vary sentence structure and inject domain-specific terminology.

---

## Config File Locations

| File | Path |
|------|------|
| Main config | `~/.openclaw/config.yaml` |
| Agent personas | `~/.openclaw/personas/` |
| Cron definitions | `~/.openclaw/crons/` |
| Logs | `~/.openclaw/logs/` |
| Delivery queue | `~/.openclaw/delivery-queue/` |

---

## Quick Health Check

```bash
openclaw config show    # verify settings
openclaw gateway status # confirm running
openclaw cron list      # confirm jobs scheduled
```

Run these three commands when diagnosing delivery failures. They cover the three most common failure points: bad config, stopped gateway, missing cron entries.

---

## Cron Syntax Quick Reference

- `*` = every value
- `*/n` = every n units
- `n,m` = specific values (comma-separated)
- `n-m` = range of values
- Days: 0=Sunday, 1=Monday, ..., 6=Saturday

For odd schedules (e.g., "every 90 minutes"), use two crons or a custom interval definition in your flow configuration.
---
*Built with Hermes × OpenClaw | Last updated: 2026-04-15*
