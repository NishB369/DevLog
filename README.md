# DevLog – Daily Journal for Developers

> **Your code ships. Your day shouldn’t vanish.**

A focused, code-first journaling tool for developers who refuse to lose progress in Slack noise, email fog, or memory gaps. One goal. One log. Real clarity.

Built with **Next.js**, **Tailwind CSS**, **TypeScript**, **Framer Motion** and key UI components generated via **Vercel v0**.

## Live Demo & Repository

- **Live Site**: [https://developers-log.vercel.app/](https://developers-log.vercel.app/)
- **GitHub**: [https://github.com/NishB369/DevLog](https://github.com/NishB369/DevLog)

---

## What Is DevLog?

DevLog is not another notes app. It’s a **daily ritual** for builders:

- Set **one intention** each morning
- Log **wins, blockers, and lessons** each evening
- Paste **code snippets, terminal output, or API logs** — syntax-highlighted & searchable
- See your **focus patterns** over time with Flow Radar

No templates. No checklists. No noise.

---

## Tech Stack

- **Framework**: Next.js and TypeScript
- **Styling**: Tailwind CSS and Framer Motion
- **UI Generation**: Vercel v0
- **Deployment**: Vercel

---

## Components Built with Vercel v0

I used **Vercel v0** to generate **3 core sections**, then customized them for branding, responsiveness, and dev-native tone:

1. **Hero Section**  
   Prompt: _“Minimalist dev tool hero: headline ‘Your code ships. Your day shouldn’t vanish.’, subtext about daily journal for developers, CTA ‘Start Your Log’”_

2. **Feature Grid (3 items)**  
   Prompt: _“3-column feature section: One Goal One Entry, Code-First Journaling, Flow Radar — with dev-friendly icons”_

3. **Pricing Section**  
   Prompt: _“Two clean pricing cards: Free and Pro at $7/month, markdown export, encrypted sync”_

These provided rapid, consistent UI scaffolding — then I refined copy, spacing, and interaction details by hand.

---

## Project Structure

```src/
├── app/
│ ├── layout.tsx
│ └── page.tsx
│ └── globals.css
├── components/
│-─ sections/ # Hero, Features, Pricing, FAQ, CTA, Footer
├── lib/
│ └── constants.ts # FAQ data, feature list
```
