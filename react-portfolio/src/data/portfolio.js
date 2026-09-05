export const profile = {
  name: "Ismail El Abbassi",
  eyebrow: "Independent fullstack developer — Morocco",
  headline: {
    before: "I build the software small teams ",
    emphasis: "don't have the hands",
    after: " to build.",
  },
  intro:
    "Ten years of curiosity, four of them writing production code. C and C++ taught me where the cost is; React, Next.js and Postgres are where I spend most days. I work directly with founders — scope, build, deploy, hand over.",
  terms: [
    "Booking → Oct 2026",
    "Typical engagement → 4–8 weeks",
    "Response → under 24h",
  ],
  resume: "/eismail-cv.pdf",
  now: "Building raglet.live, a retrieval chatbot · reading up on Go and system design · two client slots open this quarter",
};

export const projects = [
  {
    id: "chatbot",
    num: "01",
    year: "2026",
    live: true,
    title: "Chatbot / RAG",
    category: "AI · Retrieval",
    hoverLine: "Answers grounded in your own documents",
    link: "https://raglet.live",
    image: "/projects/chatbot.png",
  },
  {
    id: "todo",
    num: "02",
    year: "2025",
    live: true,
    title: "Todo list manager",
    category: "Web app",
    hoverLine: "Small state model, keyboard first",
    link: "https://my-todo-io-app.vercel.app/",
    image: "/projects/todoapp.png",
  },
  {
    id: "pingpong",
    num: "03",
    year: "2025",
    live: true,
    title: "Ping Pong",
    category: "Game · Canvas",
    hoverLine: "Fixed timestep loop, real collision",
    link: "https://ping-pong-free.vercel.app/",
    image: "/projects/pingpong.png",
  },
  {
    id: "spinning-wheel",
    num: "04",
    year: "2024",
    live: true,
    title: "Spinning wheel",
    category: "Interaction study",
    hoverLine: "Weighted outcomes, eased deceleration",
    link: "https://spinning-wheel-free.vercel.app/",
    image: "/projects/spinning.png",
  },
];

export const stack = [
  "C",
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL / Postgres",
  "React",
  "Next.js",
  "Tailwind",
  "Docker",
  "Git",
  "Linux",
];

export const timeline = [
  {
    years: "2025 — now",
    title: "Freelance fullstack developer",
    body: "Currently building raglet.live and taking scoped client work.",
  },
  {
    years: "2024 — 2025",
    title: "Internship / first engineering role",
    body: "Placeholder entry — replace with the company, the stack, and one measurable outcome.",
  },
  {
    years: "2023 — 2025",
    title: "1337 School",
    body: "Peer-to-peer, project-based computer science. Systems programming in C and C++, graphics, networking, and a lot of debugging other people's code.",
  },
  {
    years: "2018 — 2022",
    title: "University Diploma, Ibn Zohr",
    body: "Mathematics and computer science at the Faculty of Science, Ouarzazate. Data structures, algorithms, databases, computer architecture and software engineering.",
  },
];

export const contact = {
  pitch:
    "A paragraph about the problem is enough to start. I'll reply with scope, timeline and a number.",
  links: [
    { label: "Email", text: "ismailelabbassi220@gmail.com", href: "mailto:ismailelabbassi220@gmail.com" },
    { label: "GitHub", text: "github.com/ism417", href: "https://github.com/ism417", external: true },
    {
      label: "LinkedIn",
      text: "ismail-el-abbassi",
      href: "https://www.linkedin.com/in/ismail-el-abbassi-653b40231/",
      external: true,
    },
  ],
};

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Craft", href: "#craft" },
  { label: "Path", href: "#path" },
  { label: "Enquire", href: "#contact", primary: true },
];
