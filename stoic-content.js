// stoic-content.js
// ---------------------------------------------------------------
// All the words live here: quotes, the 12 rules, monthly practices,
// and the "further learning" lessons list. The app logic in
// stoic-morning-app.jsx never needs to change to add, remove, or
// edit any of this — just edit this file and re-deploy.
// ---------------------------------------------------------------

const VIRTUES = [
  { key: "Wisdom", sub: "Perspective. What is in my control, what is not." },
  { key: "Justice", sub: "Kindness, standards, keeping my word." },
  { key: "Courage", sub: "The hard thing. Thinking for myself." },
  { key: "Temperance", sub: "Discipline. Less phone, less complaint, less bustle." },
];

const QUOTES = [
  { t: "If you do not know to which port you are sailing, no wind is favorable.", a: "Seneca" },
  { t: "Love of bustle is not industry.", a: "Seneca" },
  { t: "It is not that life is short, but that we waste much of it.", a: "Seneca" },
  { t: "Be strict with yourself and tolerant with others.", a: "Marcus Aurelius" },
  { t: "Think of the things you have, and how eagerly you would want them if you did not have them.", a: "Marcus Aurelius" },
  { t: "Persist and resist.", a: "Epictetus" },
  { t: "They did not offend me; I took offense.", a: "after Epictetus" },
  { t: "Receive without pride, let go without attachment.", a: "Marcus Aurelius" },
  { t: "You could leave life right now. Let that determine what you do and say and think.", a: "Marcus Aurelius" },
  { t: "No role is so well suited to philosophy as the one you happen to be in right now.", a: "Marcus Aurelius" },
  { t: "The impediment to action advances action. What stands in the way becomes the way.", a: "Marcus Aurelius" },
  { t: "Well-being is attained by little and little, and nevertheless is no little thing itself.", a: "Zeno" },
  { t: "Wealth consists not in having great possessions, but in having few wants.", a: "Epictetus" },
  { t: "It is not the man who has too little, but the man who craves more, that is poor.", a: "Seneca" },
  { t: "If you don't regard what you have as enough, you will never be happy even if you rule the entire world.", a: "Seneca" },
  { t: "First say to yourself what you would be; and then do what you have to do.", a: "Epictetus" },
  { t: "Our plans miscarry because they have no aim.", a: "Seneca" },
  { t: "Don't let your imagination be crushed by life as a whole. Stick with the situation at hand.", a: "Marcus Aurelius" },
  { t: "Ask yourself at every moment, 'Is this necessary?'", a: "Marcus Aurelius" },
  { t: "We suffer more from imagination than from reality.", a: "Seneca" },
];

const RULES = [
  { n: 1, title: "Own the morning", practice: "Decide tonight what tomorrow's first 30 minutes are for — then rise and do it." },
  { n: 2, title: "Only focus on what's in your control", practice: "List today's worries in two columns: mine / not mine. Drop the second column." },
  { n: 3, title: "Don't suffer imagined troubles", practice: "When anxious today, say: stay in the present; focus on what I control." },
  { n: 4, title: "Treat success and failure the same", practice: "Greet today's highs and lows identically. You are the same rock." },
  { n: 5, title: "Just do one thing every day", practice: "One gain. That's the whole assignment. It's step 4 below." },
  { n: 6, title: "Make beautiful choices", practice: "At each fork today, take the harder, better option." },
  { n: 7, title: "Ask: is this necessary?", practice: "Audit what's competing for your time. Cross out the inessential." },
  { n: 8, title: "Love your fate", practice: "When something 'bad' happens today, answer it with: Good. Then find the use in it." },
  { n: 9, title: "Speak with the dead", practice: "Read for 30 minutes today. The wisest people who ever lived are waiting." },
  { n: 10, title: "Strict with yourself, tolerant with others", practice: "About to judge someone? Look for the good in them instead." },
  { n: 11, title: "Turn obstacles upside down", practice: "The impediment to action advances action. Find the good in everything today." },
  { n: 12, title: "Remember: you are dying every day", practice: "Five quiet minutes on how brief this is. Let it decide what you do and say." },
];

const MONTHLY = [
  {
    title: "The 'enough' check-in",
    body: "Reread your enough-line in Port of Call. Heller had something the billionaire could never have: the knowledge that he had enough. Do you still agree with yours? Adjust it.",
  },
  {
    title: "Practice poverty (one day)",
    body: "Seneca's exercise: simplest food, plainest clothes, no comforts — asking the whole time, is this the condition I feared? It makes fear-driven decisions rarer.",
  },
  {
    title: "The necessity audit",
    body: "\u201CIf you seek tranquility, do less.\u201D List everything on your plate. Mark each necessary or not. Cut accordingly, and decommit from what you never should have committed to.",
  },
];

// "I have more time to learn Stoicism" — further videos, articles, and
// exercises for going deeper than the daily practice. Each entry:
//   title  — display name
//   type   — 'video' | 'article' | 'exercise'
//   source — channel / publication name, shown as a small tag
//   url    — link to the original resource, opens in a new tab. OPTIONAL
//            for a self-written lesson with no external source — the
//            in-app read just won't show a "read the original" link.
//   note   — one line teaser, shown in the list
//   read   — OPTIONAL. An array of paragraph strings making up an in-app
//            "read". Length is whatever the idea actually needs — a
//            single paragraph for a quick takeaway, several for a fuller
//            treatment. There's no fixed target length; don't pad an
//            entry to hit one. The app shows a "Read" button with an
//            auto-estimated read time, opens the paragraphs in-app, and
//            links back to the original resource at the end.
//
//   One resource can be the source for SEVERAL separate lesson entries
//   — e.g. a single long video might contain five distinct ideas worth
//   five separate cards, each linking back to the same url. Don't feel
//   obligated to consolidate everything from one source into one entry.
//
//   Omit the read field entirely for a resource that's just a single
//   quick link (e.g. "watch this video") with nothing extracted from it.
//
// PLACEHOLDER DATA BELOW — replace with your actual list. Keep the same
// shape for each entry and the app will pick it up automatically; no
// other file needs to change.
const LESSONS = [
  {
    title: "Understanding Core Stoic Principles",
    type: "exercise",
    source: "Personal study notes",
    note: "The foundation: the dichotomy of control, the four virtues, and what it actually means to live in agreement with nature.",
    read: [
      "When studying Stoicism, understanding the core principles is foundational. This philosophy isn't just about reading ancient texts — it's a practical framework for reducing anxiety, building resilience, and living a good life regardless of external circumstances. Grasping these core tenets, especially knowing what you can and cannot control, will transform how you approach daily challenges.",

      "**The Dichotomy of Control**",

      "The foundational principle of Stoicism is the dichotomy of control. Epictetus, one of the most prominent Stoic philosophers, put it plainly: some things are within our control, and some things are not. Focusing your energy solely on what you can control — your own thoughts, beliefs, decisions, and actions — leads to tranquility. Stressing over things outside your control — other people's opinions, the weather, the past, the outcome of your efforts — leads to suffering.",

      "\"Make the best use of what is in your power, and take the rest as it happens.\" — Epictetus, Enchiridion",

      "**The Four Stoic Virtues**",

      "Stoics believe that virtue is the only true good, and is both necessary and sufficient for happiness. They defined virtue through four interconnected categories — the cardinal virtues — which aren't abstract ideas so much as practical guides for everyday behavior.",

      "Wisdom (prudence) is the ability to navigate complex situations logically, calmly, and rationally — knowing what is good, what is bad, and what is simply indifferent. Courage (fortitude) isn't just physical bravery but moral courage: the strength to do what's right, stand by your principles, and face adversity without compromising your character. Justice was the most important virtue to the Stoics, since it governs your relationship with others — acting with fairness and kindness, and treating others as part of one shared, global community. Temperance (self-discipline) is moderation in all things: the ability to govern your appetites, desires, and impulses rather than letting them govern you.",

      "**Living in Agreement with Nature, and Amor Fati**",

      "\"Living in agreement with nature\" doesn't mean living in the woods. For the Stoics, human nature is uniquely defined by our capacity for reason and sociability — so living according to nature means using reason to act virtuously and to work for the common good.",

      "Closely related is amor fati, the love of fate. It's the practice of not just accepting what happens to you — even adversity — but embracing it. Instead of wishing things were different, a Stoic loves the reality of the situation, treating every obstacle as an opportunity to practice virtue.",
    ],
  },
  {
    title: "The 5-Step Stoic Routine For Thinking Clearly | Maria Semple",
    type: "video",
    source: "The Daily Stoic Podcast",
    url: "https://www.youtube.com/watch?v=c3Sa0BpdHf8",
    note: "The founding episode — Ryan Holiday and Maria Semple (Go Gentle, Where'd You Go, Bernadette) on the original 5-step morning routine this whole practice grew from.",
  },
  {
    title: "Where To Start With Stoicism (9 Exercises)",
    type: "video",
    source: "Daily Stoic",
    url: "https://youtu.be/s-obzHUCdmo",
    note: "The beginner's map — the same 9 exercises referenced at the top of the routine.",
  },
  {
    title: "What Is Stoicism? A Definition & 9 Stoic Exercises To Get You Started",
    type: "article",
    source: "dailystoic.com",
    url: "https://dailystoic.com/what-is-stoicism-a-definition-3-stoic-exercises-to-get-you-started/",
    note: "The written companion to the video above — the direct source for the routine's 'Where to Start' primer.",
  },
  {
    title: "12 Stoic Rules for Life",
    type: "article",
    source: "dailystoic.com",
    url: "https://dailystoic.com/12-rules-for-life/",
    note: "The source for the rule-of-the-week cycle, each with a small practice attached.",
  },
  {
    title: "Contemptuous Expressions",
    type: "video",
    source: "Ryan Holiday, on Meditations",
    url: "https://www.youtube.com/watch?v=xMvXKV-ORkY",
    note: "Marcus's trick for staying unseduced by impressive things: describe them in the plainest terms possible.",
    read: [
      "Marcus had a habit — almost a tic — of describing impressive things in the plainest, least flattering terms he could find. Roasted meat was just a dead animal. Fine, aged wine was old fermented grapes. Even his own imperial cloak, the single most powerful symbol in Rome, was just a piece of fabric dyed with shellfish blood. Ryan Holiday calls this exercise \"contemptuous expressions,\" and says he still uses it daily.",
      "It sounds almost like cynicism, but the aim isn't to ruin your enjoyment of good things — it's to loosen their grip on you. A thing's reputation and a thing's reality are two separate objects, and most of our craving attaches to the reputation, not the reality. Try it on something that has a hold on you right now — a promotion, a purchase, someone's approval. Strip the adjectives off. What is it, plainly, once the story built around it is gone?",
    ],
  },
  {
    title: "The Clacking of Tongues",
    type: "video",
    source: "Ryan Holiday, on Meditations",
    url: "https://www.youtube.com/watch?v=xMvXKV-ORkY",
    note: "Marcus's dismissive name for public praise — and why he kept reminding himself not to chase it.",
    read: [
      "This is Marcus's own phrase for public praise — applause, approval, other people's opinion of you. It comes up again and again in Meditations, which makes sense: he held the single most public job that existed in his world, and knew exactly how little the noise of it was worth. What he reaches for instead is close to what Warren Buffett would later call the internal scorecard — judging your own conduct by your own standard, and treating outside recognition as a pleasant accident rather than the point of the work.",
      "A simple test: notice when you're tempted to explain, justify, or perform for an audience that isn't actually in the room. That impulse is usually the moment you've quietly swapped your own judgment for theirs — and it's hardest to catch right after you've been praised, or right after you've been criticized.",
    ],
  },
  {
    title: "Turning Obstacles Upside Down",
    type: "video",
    source: "Ryan Holiday, on Meditations",
    url: "https://www.youtube.com/watch?v=xMvXKV-ORkY",
    note: "The line from Book Five that became the working title — and the spine — of The Obstacle Is The Way.",
    read: [
      "This single idea from Book Five became the spine of an entire book — Holiday's The Obstacle Is The Way was originally titled, almost verbatim, Turning Obstacles Upside Down. The core move: what stands in your way can become the way forward, if you actually work with it instead of just enduring it. Something blocks the path you wanted; if you look at what you've actually been left with, there's often a different piece of the same larger goal sitting right there, waiting to be picked up.",
      "This is also, not coincidentally, rule 11 in this routine's weekly cycle — find the good in everything today. It's worth returning to Marcus's original formulation occasionally, though, because the modern shorthand can flatten into a mood. The original is more of an instruction: don't just accept the obstacle. Work with what you've been given. Action by action.",
    ],
  },
  {
    title: "The Three Disciplines",
    type: "video",
    source: "Ryan Holiday, on Meditations",
    url: "https://www.youtube.com/watch?v=xMvXKV-ORkY",
    note: "Holiday's one-breath summary of Stoicism, and how it maps onto this routine's tools.",
    read: [
      "When Holiday is asked to explain the whole of Stoicism in a single breath, this is what he reaches for — a distillation he found in the introduction to his own copy of Meditations. Three disciplines, three verbs: perception, action, will. See things for what they are — that's perception, behind the dichotomy of control and training your perceptions. Do what you can — that's action, behind today's one gain. Endure and bear what you must — that's will, behind amor fati and the calm protocol.",
      "Nearly everything else in Stoic practice is a more specific application of one of these three. When a technique in this routine isn't landing, it can help to ask which discipline it's actually trying to train — that alone often clarifies what you're supposed to be doing with it.",
    ],
  },
  {
    title: "Words Become Works",
    type: "video",
    source: "Ryan Holiday, on Meditations",
    url: "https://www.youtube.com/watch?v=xMvXKV-ORkY",
    note: "Why an emperor who loved reading kept reminding himself to close the book.",
    read: [
      "Marcus — an emperor with a library, a habit of taking careful notes, and by every account a genuine love of reading — reminded himself, repeatedly, to stop reading. Not forever. Just at some point, every day: put the books down, and go do the thing the books were preparing you for. Seneca had a phrase that fits: eventually, words have to become works. A hundred re-reads of the same book only mean something if they eventually show up as different behavior on an ordinary Tuesday.",
      "That's the bet this morning routine makes too: fifteen minutes of reading and writing, in exchange for a day spent slightly differently than it would have gone otherwise. The reading was never the practice. It was the preparation for it.",
    ],
  },
  // Add your own entries here, e.g.:
  // {
  //   title: "Example lesson title",
  //   type: "video", // or "article" or "exercise"
  //   source: "Channel or site name",
  //   url: "https://example.com/…",
  //   note: "One line on what it covers.",
  //   read: undefined, // omit for a simple link, or add paragraphs (any length) for an in-app read
  // },
];

window.STOIC_CONTENT = { VIRTUES, QUOTES, RULES, MONTHLY, LESSONS };
