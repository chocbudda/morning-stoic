// stoic-content.js
// ---------------------------------------------------------------
// All the words live here: quotes, the 12 rules, monthly practices,
// and the "further learning" lessons list. The app logic in
// stoic-morning-app.jsx never needs to change to add, remove, or
// edit any of this — just edit this file and re-deploy.
// ---------------------------------------------------------------

const DEFAULT_PHILOSOPHY = "My daily goal is to bring my actions, desires, and thoughts into harmony with my philosophy of life. My philosophy of life is virtue = freedom. The four Stoic virtues are wisdom, courage, justice, and temperance. Virtue is the only good. Its pursuit is the only guarantee of good cheer, secure joy, and a tranquil mind.";

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
//   type   — 'video' | 'article' | 'exercise' | 'primary'. Use 'primary'
//            for full, free, public-domain primary texts (Meditations,
//            the Enchiridion, etc.) — these get a distinct "Primary
//            Source" tag, a stronger border, and are grouped at the top
//            of the list, ahead of everything else.
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
//   defaultRank — OPTIONAL, 0-3. An editorial starting point for the
//            "return to this often" star rating, shown until the person
//            taps a star themselves. The moment they rate a lesson
//            locally (even setting it back down to 0 stars), their own
//            rating takes over permanently for that lesson, on that
//            device — this field never overwrites a personal rating.
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
    title: "Apology",
    defaultRank: 2, // 0-3, editorial starting point; overridden by any local user rating
    type: "primary",
    source: "Plato, trans. Benjamin Jowett (MIT Classics Archive)",
    url: "https://classics.mit.edu/Plato/apology.html",
    note: "The full primary source, free — Socrates' own defense at his trial. Not Stoic itself, but the root the whole tradition grows from: reasoned conduct held to under real pressure.",
  },
  {
    title: "Meditations",
    defaultRank: 2, // 0-3, editorial starting point; overridden by any local user rating
    type: "primary",
    source: "Marcus Aurelius, trans. A.S.L. Farquharson (Wikisource)",
    url: "https://en.wikisource.org/wiki/The_Meditations_of_the_Emperor_Marcus_Antoninus",
    note: "The full primary source, free — the book this entire routine keeps circling back to. Worth having on hand rather than only reading about.",
  },
  {
    title: "Enchiridion (The Handbook)",
    defaultRank: 2, // 0-3, editorial starting point; overridden by any local user rating
    type: "primary",
    source: "Epictetus, trans. Thomas W. Higginson (Project Gutenberg)",
    url: "https://www.gutenberg.org/files/45109/45109-h/45109-h.htm",
    note: "The full primary source, free — the short, blunt manual behind the dichotomy of control and much of this routine's language.",
  },
  {
    title: "The Discourses of Epictetus",
    defaultRank: 1, // 0-3, editorial starting point; overridden by any local user rating
    type: "primary",
    source: "Epictetus, trans. George Long (Wikisource)",
    url: "https://en.wikisource.org/wiki/The_Discourses_of_Epictetus;_with_the_Encheiridion_and_Fragments",
    note: "The full primary source, free — the longer lecture transcripts the Enchiridion was condensed from. Denser, but closer to Epictetus actually teaching.",
  },
  {
    title: "Moral Letters to Lucilius",
    defaultRank: 2, // 0-3, editorial starting point; overridden by any local user rating
    type: "primary",
    source: "Seneca, trans. Richard M. Gummere (Wikisource)",
    url: "https://en.wikisource.org/wiki/Moral_letters_to_Lucilius",
    note: "The full primary source, free — 124 letters, each short enough to read one at a time, the closest thing Stoicism has to a personal-advice column.",
  },
  {
    title: "Plato's Apology: The Only Book Every Human Needs to Read",
    defaultRank: 2, // 0-3, editorial starting point; overridden by any local user rating
    type: "article",
    source: "The Stoic Handbook, Jon Brooks, ft. Donald Robertson",
    url: "https://www.stoichandbook.co/podcast/platos-apology-the-only-book-every-human-needs-to-read/",
    note: "Why Donald Robertson calls this the one book he recommends to everyone, no exceptions — and how it quietly shaped Marcus Aurelius and Epictetus.",
    read: [
      "Donald Robertson makes a fairly bold claim here: of everything he could recommend, Plato's Apology is the only book he suggests to literally everyone. His reasoning has four parts. It's accessible — a few hours' read, no academic background required, unlike Plato's longer dialogues. It's dramatic — a real courtroom, a man on trial for his life, which pulls you in far more than an abstract treatise would. It plants seeds rather than finishing arguments — it doesn't hand you conclusions so much as questions that keep working on you for years afterward. And it's culturally foundational — you can draw a direct line from this text to how both Marcus Aurelius and Epictetus later thought about death, integrity, and living under pressure.",
      "The specific passage Robertson keeps returning to is Socrates' attitude toward his own death sentence. His fear, or rather his notable lack of it, doesn't come from certainty about what happens next — he offers two possibilities (an endless dreamless sleep, or some kind of continuation elsewhere) and finds neither one worth dreading. The fear most people carry isn't really about death itself, but about their own beliefs surrounding it — which is close to a direct preview of Epictetus's later line that people are disturbed not by events, but by their opinions about them. Socrates arrived at this after decades of war, plague, and losing friends, which is worth remembering: this wasn't a young man's theory, it was a old man's tested conclusion.",
    ],
  },
  {
    title: "Understanding Core Stoic Principles",
    defaultRank: 3, // 0-3, editorial starting point; overridden by any local user rating
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
    defaultRank: 2, // 0-3, editorial starting point; overridden by any local user rating
    type: "video",
    source: "The Daily Stoic Podcast",
    url: "https://www.youtube.com/watch?v=c3Sa0BpdHf8",
    note: "The founding episode — Ryan Holiday and Maria Semple (Go Gentle, Where'd You Go, Bernadette) on the original 5-step morning routine this whole practice grew from.",
  },
  {
    title: "Where To Start With Stoicism (9 Exercises)",
    defaultRank: 2, // 0-3, editorial starting point; overridden by any local user rating
    type: "video",
    source: "Daily Stoic",
    url: "https://youtu.be/s-obzHUCdmo",
    note: "The beginner's map — the same 9 exercises referenced at the top of the routine.",
  },
  {
    title: "What Is Stoicism? A Definition & 9 Stoic Exercises To Get You Started",
    defaultRank: 1, // 0-3, editorial starting point; overridden by any local user rating
    type: "article",
    source: "dailystoic.com",
    url: "https://dailystoic.com/what-is-stoicism-a-definition-3-stoic-exercises-to-get-you-started/",
    note: "The written companion to the video above — the direct source for the routine's 'Where to Start' primer.",
  },
  {
    title: "12 Stoic Rules for Life",
    defaultRank: 2, // 0-3, editorial starting point; overridden by any local user rating
    type: "article",
    source: "dailystoic.com",
    url: "https://dailystoic.com/12-rules-for-life/",
    note: "The source for the rule-of-the-week cycle, each with a small practice attached.",
  },
  {
    title: "Contemptuous Expressions",
    defaultRank: 2, // 0-3, editorial starting point; overridden by any local user rating
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
    defaultRank: 2, // 0-3, editorial starting point; overridden by any local user rating
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
    defaultRank: 3, // 0-3, editorial starting point; overridden by any local user rating
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
    defaultRank: 3, // 0-3, editorial starting point; overridden by any local user rating
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
    defaultRank: 1, // 0-3, editorial starting point; overridden by any local user rating
    type: "video",
    source: "Ryan Holiday, on Meditations",
    url: "https://www.youtube.com/watch?v=xMvXKV-ORkY",
    note: "Why an emperor who loved reading kept reminding himself to close the book.",
    read: [
      "Marcus — an emperor with a library, a habit of taking careful notes, and by every account a genuine love of reading — reminded himself, repeatedly, to stop reading. Not forever. Just at some point, every day: put the books down, and go do the thing the books were preparing you for. Seneca had a phrase that fits: eventually, words have to become works. A hundred re-reads of the same book only mean something if they eventually show up as different behavior on an ordinary Tuesday.",
      "That's the bet this morning routine makes too: fifteen minutes of reading and writing, in exchange for a day spent slightly differently than it would have gone otherwise. The reading was never the practice. It was the preparation for it.",
    ],
  },
  {
    title: "The View From Above",
    defaultRank: 3, // 0-3, editorial starting point; overridden by any local user rating
    type: "article",
    source: "The Stoic Handbook, Jon Brooks",
    url: "https://www.stoichandbook.co/the-stoic-view-from-above/",
    note: "Zoom out — spatially or through time — until whatever's gripping you shrinks back to its actual size.",
    read: [
      "This is a longer, more deliberate version of the calm protocol's view-from-above screen. Step back mentally from wherever you are: the desk, then the room, the building, the street, the city, the country, the planet — the same move psychologists now call self-distancing, which the Stoics were doing two thousand years earlier without the label. Marcus did versions of this constantly in Meditations, picturing the whole scramble of human life from high above to remind himself how small any single grievance actually is against the whole of it.",
      "The research backs it up, too — psychologist Igor Grossmann's work on self-distancing found that viewing your own situation from a third-person perspective measurably improves reasoning under stress. Practically, it helps to attach the exercise to a trigger you already notice — rereading the same stressful message three times, for instance. There's also a time-based version: instead of zooming out through space, ask whether this will matter in five years, then twenty, then a century. Most things shrink fast on that scale.",
    ],
  },
  {
    title: "Building a Stoic Morning",
    defaultRank: 1, // 0-3, editorial starting point; overridden by any local user rating
    type: "article",
    source: "The Stoic Handbook, Jon Brooks",
    url: "https://www.stoichandbook.co/podcast/crafting-the-ultimate-stoic-routine-morning-rituals-1/",
    note: "A different take on the morning sequence — a Stoic quote, journaling, a short meditation, reading, cold exposure, and a brief death meditation.",
    read: [
      "This is one podcaster's own version of a Stoic morning, and it's worth comparing against the routine you're already running. His sequence: read and sit with a Stoic quote before getting out of bed, journal to build gratitude and anticipate the day's obstacles, a short meditation, ten to fifteen minutes reading from the Stoic texts themselves, a bit of cold exposure as deliberate discomfort, and a brief death meditation to sharpen focus for the day ahead.",
      "His own framing is worth keeping: take the whole thing, or borrow just the one or two pieces that fit your life. Nobody runs every Stoic practice every day forever — the point is having a menu to draw from when the version you're currently running needs a change.",
    ],
  },
  {
    title: "Turning Work Into a Stoic Practice",
    defaultRank: 1, // 0-3, editorial starting point; overridden by any local user rating
    type: "article",
    source: "The Stoic Handbook, Jon Brooks",
    url: "https://www.stoichandbook.co/podcast/creating-the-ultimate-stoic-routine-work-rituals-2/",
    note: "A performance statement, and treating every work session as training rather than just something to get through.",
    read: [
      "The companion piece to the morning routine above, aimed at the workday itself. The starting move is broadening what counts as \"work\" — it doesn't have to be your job. Anything you take seriously and want to improve at qualifies, whether that's a career, a craft, or a martial art practiced on the side.",
      "The most useful specific tool here is the performance statement — a short, standing affirmation you return to during work, something like: whenever I notice I'm distracted, I'll note the distraction and return to the task. Having that line ready in advance means distraction doesn't spiral into frustration; it just triggers a small, practiced redirect. The broader aim is treating each work session less like labor to survive and more like a rep — a place discipline and focus actually get built.",
    ],
  },
  {
    title: "Socrates' Two-Column Technique",
    defaultRank: 2, // 0-3, editorial starting point; overridden by any local user rating
    type: "article",
    source: "The Stoic Handbook, Jon Brooks",
    url: "https://www.stoichandbook.co/podcast/why-socrates-two-column-technique-is-still-the-ultimate-self-improvement-tool-ft-donald-robertson/",
    note: "A simple written exercise Socrates actually used — testing whether a rule you live by holds up against real exceptions.",
    read: [
      "According to Xenophon, Socrates used to draw two columns on a wax tablet with one of his students, Euthydemus — a young man who'd memorized a large library of \"wise sayings\" but hadn't actually tested any of them. One column held a rule Euthydemus lived by, like \"I must always be honest.\" The other held exceptions — situations where the rule quietly breaks, like a white lie that spares someone real pain.",
      "The method in three steps: write down a rule you hold. List situations where it doesn't quite hold up. Then ask what those exceptions actually reveal, and whether the rule needs adjusting. It's a small tool, but it does real work against rigid thinking — beliefs like \"everything must go perfectly\" cause a lot of unnecessary frustration precisely because they never get tested against real exceptions until a bad day forces the issue.",
    ],
  },
  {
    title: "Marcus Aurelius Was Terrible at Stoicism",
    defaultRank: 2, // 0-3, editorial starting point; overridden by any local user rating
    type: "article",
    source: "The Stoic Handbook, Jon Brooks",
    url: "https://stoichandbook.buzzsprout.com/1882875/19335609-marcus-aurelius-was-terrible-at-stoicism",
    note: "His own journal shows him failing at the very things he's famous for — which is the actual point, not an embarrassing footnote.",
    read: [
      "Marcus Aurelius is the most quoted Stoic on the internet, and his private journal shows a man who kept failing at the thing he's famous for. He struggled to get out of bed — there are two separate passages, four books apart, where he's still arguing with himself about it. He needed roughly ten different strategies across Meditations for managing his own temper. Near the end of his life, he wrote about being \"far from philosophy.\"",
      "The distinction that makes sense of all this is the difference between the sage — the theoretical, fully perfected Stoic — and the prokopton, the Stoic in training, which is what every real Stoic actually was, including Marcus. He knew exactly which one he was. If you've ever felt like a fraud for needing to relearn the same lesson for the tenth time, that's not a sign you're doing this wrong. It's what doing it at all actually looks like.",
    ],
  },
  {
    title: "The Three Tests for Any Goal",
    defaultRank: 3, // 0-3, editorial starting point; overridden by any local user rating
    type: "article",
    source: "The Stoic Handbook, Jon Brooks",
    url: "https://www.stoichandbook.co/podcast/how-to-set-goals-that-dont-break-epictetuss-three-tests/",
    note: "Before setting a goal, run it through control and cost — most goals fail because they skip both.",
    read: [
      "Epictetus's opening move in the Enchiridion draws a hard line between what's up to you and what isn't — and most goals people set fail this test immediately. \"Lose 20 pounds\" depends on your body cooperating. \"Get promoted\" depends on your boss. The fix isn't more discipline; it's converting the outcome into a practice you can actually guarantee. Not \"lose weight,\" but \"move for thirty minutes and eat by a rule I can keep.\" The outcome becomes a bonus, not the point — which is exactly the same move behind this app's Port of Call goals.",
      "The second test is cost. Epictetus uses the example of wanting to win at the Olympics — sure, so does everyone, he says, but then lists everything that actually requires: the diet, the injuries, the total surrender to a coach's instructions. His point: before you commit to wanting the medal, count what the medal actually costs. Most abandoned goals weren't abandoned from weak willpower — they were abandoned because nobody priced them honestly before starting.",
    ],
  },
  {
    title: "What \"Remove Desire Entirely\" Really Means",
    defaultRank: 3, // 0-3, editorial starting point; overridden by any local user rating
    type: "article",
    source: "The Stoic Handbook, Jon Brooks",
    url: "https://www.stoichandbook.co/podcast/remove-desire-epictetus/",
    note: "Not about wanting nothing — about not staking your peace of mind on outcomes you can't control.",
    read: [
      "Epictetus's instruction to \"remove desire entirely\" sounds like it's asking you to stop wanting things, which trips most readers up immediately. The clearer way in: a personal story about driving to pick up a son having a rough patch with school, noticing a clenched, anxious feeling before even arriving — running scenarios, needing the morning to go smoothly, needing the co-parent to be cooperative. Every one of those outcomes was completely outside his control. The desire wasn't the wanting itself — it was the quiet contract underneath it: if this goes well, I'll be okay; if it doesn't, I won't.",
      "There's a three-stage progression worth knowing. Demand is where most people live — \"this must go well, or it's a disaster\" — desire fused directly to an outcome you can't control. Indifference is the common overcorrection — deciding not to care at all, which no Stoic actually taught. The real target is preference with reservation: you're still allowed to want the good outcome, pursue it, and prefer it — you just stop making your inner stability conditional on getting it.",
    ],
  },
  {
    title: "Preference Without Panic",
    defaultRank: 2, // 0-3, editorial starting point; overridden by any local user rating
    type: "article",
    source: "The Stoic Handbook, Jon Brooks",
    url: "https://www.stoichandbook.co/podcast/stoic-indifferents-selective-value/",
    note: "The difference between selecting something and needing it — confusing the two is what makes wanting things painful.",
    read: [
      "In Stoic terms, only two things carry real moral weight: virtue is genuinely good, vice is genuinely bad. Everything else — health, money, whether a meeting goes well, whether your kid sleeps through the night — is technically an \"indifferent.\" That word derails a lot of readers, because it sounds like the Stoics are telling you not to care about any of it. They aren't. You're allowed to select health over sickness, meaningful work over meaningless work — you just don't get to treat the selection as morally necessary, the way virtue actually is.",
      "The practical test: name whatever you're anxious about, then ask one question — am I treating this as worth selecting, or as something I can't survive without? If it's the first, notice how much lighter it feels immediately; you can still pursue it, adjust course, or let it go if you have to. If it's the second, that's the slide into exactly the kind of suffering the Stoics were trying to engineer out of daily life.",
    ],
  },
  {
    title: "The Practice That Made Me Grateful for My Legs",
    defaultRank: 2, // 0-3, editorial starting point; overridden by any local user rating
    type: "article",
    source: "The Stoic Handbook, Jon Brooks",
    url: "https://www.stoichandbook.co/podcast/the-ancient-stoic-practice-that-made-me-grateful-for-my-legs-and-everything-else-i-take-for-granted/",
    note: "A version of premeditatio malorum aimed specifically at gratitude — imagining loss to actually feel what you already have.",
    read: [
      "This is premeditatio malorum turned toward appreciation instead of preparation. Imagine, briefly and deliberately, losing something ordinary you take for granted — your legs, your freedom, someone you love — and then notice what happens when you realize, a moment later, that you still have it. Gratitude stops being a concept you nod along to and becomes something closer to a felt experience, if only for a few seconds.",
      "Frequency matters here: once a week or once a month is genuinely enough — overdoing it dulls the effect rather than sharpening it. It works best exactly when you're feeling complacent, entitled, or stuck in the \"I'll be happy when...\" trap this whole practice is built to interrupt. A lighter, everyday version: when you're with someone you love, briefly imagine them gone. When you're walking, briefly imagine losing that ability. It sounds bleak written down, but in practice it's one of the more grounding two-second habits available.",
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

window.STOIC_CONTENT = { VIRTUES, QUOTES, RULES, MONTHLY, LESSONS, DEFAULT_PHILOSOPHY };
