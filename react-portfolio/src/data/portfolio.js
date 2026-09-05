export const profile = {
  name: "Ismail El Abbassi",
  eyebrow: "Fullstack software engineer — Morocco",
  headline: {
    before: "I build software end to end, ",
    emphasis: "from the schema",
    after: " to the last pixel.",
  },
  intro:
    "C and C++ at 1337 taught me where the cost is; React, Next.js and Postgres are where I spend most days. Right now I'm building internal tools at DulfiTech, and looking for engineering work where I can own a feature end to end.",
  terms: [
    "Currently → DulfiTech, fullstack intern",
    "Focus → React, Next.js, Node, Postgres",
    "Open to → engineering roles",
  ],
  cta: "Get in touch",
  resume: "/eismail-cv.pdf",
  resumeLabel: "Résumé, PDF",
  now: "Building raglet.live, a retrieval chatbot · reading up on Go and system design · shipping internal tools at DulfiTech",
};

export const sections = {
  work: {
    heading: "Things I built,",
    headingEmphasis: "and why they hold up",
    blurb:
      "All four are live. The small ones are where you find out what an abstraction is actually costing you.",
  },
  craft: {
    heading: "Craft",
    blurb:
      "Systems languages at the bottom, product work at the top. I pick the smallest tool that survives the requirement.",
  },
  path: {
    heading: "Path",
  },
  contact: {
    heading: "Open to the next",
    headingSecondLine: "engineering role.",
    pitch:
      "I'm interning at DulfiTech and open to fullstack engineering work. Tell me about the team and the problem — I'll reply within a day.",
  },
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
    years: "2026 — now",
    title: "Software engineer intern, DulfiTech",
    body: "Building an internal dashboard with React and Node, on a team working across several technology solutions.",
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
  { label: "Contact", href: "#contact", primary: true },
];
