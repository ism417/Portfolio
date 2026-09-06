export const profile = {
  name: "Ismail El Abbassi",
  eyebrow: "Fullstack software engineer",
  headline: {
    before: "I build software end to end, ",
    emphasis: "from the schema",
    after: " to the last pixel.",
  },
  intro:
    "C and C++ at 1337 taught me where the cost is; React, Next.js and Postgres are where I spend most days. Right now I'm building internal tools at DulfiTech, and looking for engineering work where I can own a feature end to end.",
  terms: [
    "Currently → Intern at DulfiTech, Casablanca",
    "Focus → React, Next.js, Node, Postgres",
    "Open to → the next opportunity",
  ],
  cta: "Get in touch",
  resume: "/eismail-cv.pdf",
  resumeLabel: "Résumé, PDF",
  now: "Interning at DulfiTech in Casablanca · building technological solutions with React and Node",
};

export const sections = {
  work: {
    heading: "Things I built,",
    headingEmphasis: "and why they hold up",
    blurb:
      "Products at the top, the systems work underneath. The small ones are where you find out what an abstraction is actually costing you.",
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
    headingSecondLine: "opportunity.",
    pitch:
      "I'm interning at DulfiTech and open to fullstack engineering work. Tell me about the team and the problem — I'll reply within a day.",
  },
};

/**
 * Ordered by weight, not chronology — the platform and the deployed products lead.
 *
 * `image` is the still used by the hover preview and the detail banner; a project
 * without one falls back to a typographic banner. `preview` overrides it in the
 * index only, for when the banner wants a crop but the hover wants the whole shot.
 * The banner always crops to fill, so it reads as atmosphere. Anything meant to
 * be read — terminal output, a directory tree — goes in `gallery` instead, where
 * a figure shows it whole at its own aspect ratio ('contain') with a caption.
 * `gallery` also carries screen recordings.
 * `link` is a public deployment, and drives the live beacon in the index.
 */
export const projects = [
  {
    id: "ttt-arena",
    num: "01",
    year: "2026",
    live: false,
    link: null,
    image: "/projects/ttt-arena.png",
    preview: "/projects/ttt-arena.png",
    gallery: [
      {
        type: "video",
        src: "/projects/tictactoe.mp4",
        poster: "/projects/ttt-arena.jpg",
        caption: "Two players, one match — invitation, live turns and chat, recorded end to end",
      },
    ],
    title: "Tic-Tac-Toe Arena",
    category: "Platform · Real-time",
    hoverLine: "Matches, tournaments, leaderboard",
    tagline:
      "A real-time competitive platform, built by five people as five cooperating services.",
    role: "Product Owner · Game backend",
    note: "Team project — 1337 / 42 capstone, five people.",
    overview: [
      "Tic-Tac-Toe Arena is the 42 capstone: a competitive platform where players match against each other or against an AI, earn XP, climb a leaderboard, run tournaments, and chat while they wait. It runs as five application services — Django for auth, Node and TypeScript for game and chat, Flask for the two AI services — behind an Nginx gateway with ModSecurity and TLS, orchestrated by Docker Compose with HashiCorp Vault holding every secret.",
      "I was Product Owner and built the game backend end to end: the engine, matchmaking with direct friend invitations, the tournament system and its bracket engine, the leaderboard, and the dashboard. The game was never the hard part — tic-tac-toe is nine squares. The hard part was making a socket connection that can drop at any moment behave like a reliable transaction. A player who closes their laptop mid-match has to come back and find the board where they left it, and a tournament with a disconnected player still has to advance.",
    ],
    highlights: [
      { value: "5 services", label: "Django, Node and Flask" },
      { value: "Socket.IO", label: "Turn, lobby and bracket sync" },
      { value: "Team of 5", label: "42 capstone, I was PO" },
    ],
    features: [
      "Real-time 1v1 matches with synchronised turns over Socket.IO",
      "Matchmaking with direct friend invitations, and disconnect / reconnect recovery mid-match",
      "Tournament system: bracket generation, seeded players, and an engine that advances rounds as matches resolve",
      "Global leaderboard with per-player statistics and full match history",
      "Dashboard aggregating XP, recent results and standing",
      "Postgres persistence through Prisma for games, lobbies and tournament state",
      "A Q-learning AI opponent and an LLM chatbot, each isolated in its own Flask service",
      "Nginx reverse proxy with TLS termination and a ModSecurity WAF on the OWASP Core Rule Set",
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Socket.IO",
      "Prisma",
      "PostgreSQL",
      "Django",
      "Flask",
      "Docker",
      "Nginx",
      "Redis",
      "Vault",
    ],
    sources: [
      { label: "Source", href: "https://github.com/el34bbas/Tec-tac-toe-Arena" },
    ],
  },
  {
    id: "raglet",
    num: "02",
    year: "2026",
    live: true,
    link: "https://raglet.live",
    image: "/projects/chatbot.png",
    title: "Raglet",
    category: "AI · Retrieval",
    hoverLine: "Grounded in your own documents",
    tagline: "A chatbot that answers only from the documents you hand it.",
    role: "Fullstack · Frontend and API",
    overview: [
      "Raglet is a retrieval-augmented chatbot: upload a PDF or a text file, and it answers questions about that file rather than from the model's general knowledge. The frontend is React and TypeScript on Vite, deployed to Vercel; the API is FastAPI on Render, calling Groq's LLaMA 3.3 70B for generation.",
      "The retrieval is deliberately classical. Rather than reach for a vector database, uploaded text is chunked at 500 words with a 50-word overlap — so an answer is never sliced in half at a boundary — then vectorised with scikit-learn's TF-IDF and ranked by cosine similarity against the question. For single-document Q&A at this size it is accurate enough, it costs nothing to run, and there is no embedding service to keep alive. Chunks and conversation history both live in Upstash Redis, keyed by document and by JWT-issued session, with a 24-hour expiry.",
    ],
    highlights: [
      { value: "LLaMA 3.3 70B", label: "Served through Groq" },
      { value: "TF-IDF", label: "Cosine-similarity retrieval" },
      { value: "24h TTL", label: "History in Upstash Redis" },
    ],
    features: [
      "PDF and TXT upload, with text extracted server-side by PyPDF2",
      "Documents split into 500-word chunks with a 50-word overlap, so context never breaks mid-answer",
      "Retrieval by TF-IDF vectors and cosine similarity, scoped to the document you selected",
      "Conversation history persisted per session in Upstash Redis under a 24-hour TTL",
      "JWT-issued anonymous identity — a session belongs to a user without asking anyone to sign up",
      "Document list, per-document delete, and a clear-chat action that resets server state too",
      "WebGL shader background rendered with ogl",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "FastAPI",
      "Groq",
      "scikit-learn",
      "Upstash Redis",
      "JWT",
    ],
    sources: [
      { label: "Frontend source", href: "https://github.com/el34bbas/Raglet" },
      { label: "Backend source", href: "https://github.com/el34bbas/chatbot-backend" },
    ],
  },
  {
    id: "todo",
    num: "03",
    year: "2025",
    live: true,
    link: "https://my-todo-io-app.vercel.app/",
    image: "/projects/todoapp.png",
    title: "Todo list manager",
    category: "Web app · Auth",
    hoverLine: "Google sign-in, tasks that persist",
    tagline: "A task manager with Google sign-in and a serverless API.",
    role: "Fullstack",
    overview: [
      "A task manager built as two deployments: a React frontend and an Express API, both on Vercel. It exists because a todo list is the smallest complete excuse to build real authentication. The list itself is trivial; “these tasks are mine and nobody else can read them” is not.",
      "Sign-in goes through Google OAuth 2.0 using Passport. The callback mints a JWT, which the client stores and sends on every request; a verifyToken middleware resolves it to a user id before any route touches the database, and the Mongoose schema carries a userId reference so a query cannot span users. The API runs as a Vercel serverless function through serverless-http, so it costs nothing when nobody is using it.",
    ],
    highlights: [
      { value: "Google OAuth", label: "Sign-in through Passport" },
      { value: "MongoDB", label: "Per-user task documents" },
      { value: "Serverless", label: "Express on Vercel functions" },
    ],
    features: [
      "Google OAuth 2.0 sign-in through Passport, with no password ever stored",
      "A JWT minted at the OAuth callback, scoping every later request to one user",
      "Create, edit, complete and delete tasks, persisted in MongoDB through Mongoose",
      "Every /api/todos route behind a verifyToken middleware, so tasks are readable only by their owner",
      "Express wrapped by serverless-http and deployed as a Vercel function — no server to keep running",
      "React and Tailwind frontend deployed separately, talking to the API over CORS",
    ],
    stack: [
      "React",
      "Tailwind",
      "Express",
      "MongoDB",
      "Mongoose",
      "Passport",
      "JWT",
      "Vercel",
    ],
    sources: [
      { label: "Frontend source", href: "https://github.com/el34bbas/TodoApp" },
      { label: "API source", href: "https://github.com/el34bbas/todoApi" },
    ],
  },
  {
    id: "minishell",
    num: "04",
    year: "2025",
    live: false,
    link: null,
    image: "/projects/minishell.jpg",
    title: "Minishell",
    category: "Systems · C",
    hoverLine: "A shell that behaves like bash",
    tagline: "A Unix shell in C that mimics bash, including the awkward parts.",
    role: "Parsing and data structures",
    note: "Pair project — I owned parsing, my teammate owned execution.",
    overview: [
      "A shell written in C with nothing but libc and a hand-rolled libft underneath: no parser generator, no readline substitute for the parsing itself, no shortcuts. It reads a line, decides what that line actually means, and runs it the way bash would.",
      "I owned the front half — the lexer, the parser and the data structures that carry a command from raw text to something executable — while my teammate owned execution. That split is where the interesting work was. A shell grammar looks simple until you write it down: quoting changes whether expansion happens, a heredoc has to consume input before the pipeline runs, and redirections attach to a command rather than to the pipeline around it. Getting the representation right is most of the job; once the tree is honest, execution is almost mechanical.",
    ],
    highlights: [
      { value: "C", label: "libc and a hand-rolled libft" },
      { value: "Pipelines", label: "Arbitrary length, fds wired" },
      { value: "7 builtins", label: "Implemented in-process" },
    ],
    features: [
      "A lexer and parser turning a raw command line into a structured representation",
      "Pipelines of arbitrary length, with file descriptors wired between children",
      "Input, output and append redirections, plus heredocs",
      "Environment variable expansion, and $? for the last exit status",
      "Quote handling where double quotes still expand and single quotes do not",
      "The builtins bash runs in-process: echo, cd, pwd, export, unset, env and exit",
      "Signal handling that keeps the prompt behaving under Ctrl-C and Ctrl-D",
    ],
    stack: ["C", "GNU Make", "Unix processes", "File descriptors", "Signals"],
    sources: [
      { label: "Source", href: "https://github.com/el34bbas/Minishell-1337MED" },
    ],
  },
  {
    id: "irc",
    num: "05",
    year: "2025",
    live: false,
    link: null,
    image: "/projects/irc.jpeg",
    gallery: [
      {
        type: "image",
        src: "/projects/irc.jpeg",
        caption: "The server, and two clients registering and talking to it over netcat",
        fit: "contain",
      },
    ],
    title: "IRC server",
    category: "Systems · C++",
    hoverLine: "RFC 1459, one thread, poll()",
    tagline: "A lightweight IRC server that real clients will connect to.",
    role: "Networking · auth, channels, messaging",
    note: "Team project — I owned the socket layer and core commands.",
    overview: [
      "An IRC server in C++ implementing enough of RFC 1459 that off-the-shelf clients like WeeChat connect to it and behave normally. That constraint is the whole point of the exercise: you cannot fake protocol compliance when the client on the other end was written by someone else and does not care about your excuses.",
      "I was responsible for the networking layer and the core of the server. Everything runs single-threaded on one poll() loop over non-blocking sockets, so a slow client can never stall another — there is no thread per connection to hide behind. On top of that sit the Server, Client and Channel types, registration through PASS / NICK / USER, channel membership, and message routing. My teammate handled the channel-operator side.",
    ],
    highlights: [
      { value: "poll()", label: "One loop, non-blocking sockets" },
      { value: "RFC 1459", label: "Real clients connect" },
      { value: "C++98", label: "Server, Client, Channel" },
    ],
    features: [
      "A single-threaded poll() event loop over non-blocking sockets, so one slow client cannot stall the rest",
      "Registration handshake — PASS, NICK, USER — with the numeric replies clients expect",
      "Channels with JOIN, membership tracking, TOPIC and MODE",
      "Private and channel messaging through PRIVMSG, routed to the right set of sockets",
      "Operator commands: KICK and INVITE",
      "Partial-command buffering, because TCP delivers bytes and not messages",
      "A bot bolted onto the server as a bonus",
    ],
    stack: ["C++", "GNU Make", "BSD sockets", "poll()", "RFC 1459"],
    sources: [
      { label: "Source", href: "https://github.com/el34bbas/FT_IRC_1337" },
    ],
  },
  {
    id: "inception",
    num: "06",
    year: "2025",
    live: false,
    link: null,
    image: "/projects/inception-stack.svg",
    title: "Inception",
    category: "Infrastructure · Docker",
    hoverLine: "A LEMP stack, built from base images",
    tagline: "A containerised LEMP stack where every image is written from scratch.",
    role: "Infrastructure",
    overview: [
      "A complete web infrastructure in Docker Compose: Nginx terminating TLS, WordPress on PHP-FPM, and MariaDB behind it, each in its own container. The rule that makes it worth doing is that you may not pull a ready-made application image — every Dockerfile starts from a bare Debian or Alpine base and installs and configures the service by hand.",
      "That constraint turns a copy-paste exercise into a real one. You end up understanding what an entrypoint script is actually for, why a container that forks into the background dies immediately, how volumes outlive the containers that write to them, and why service startup order is a promise Compose does not make for you. The bonus tier adds Redis, an FTP server, Adminer, Portainer and a static site, which is where the networking between containers stops being theoretical.",
    ],
    highlights: [
      { value: "No stock images", label: "Every Dockerfile from a base" },
      { value: "Nginx · TLS", label: "Single entry point" },
      { value: "Volumes", label: "State outlives containers" },
    ],
    features: [
      "Nginx terminating TLS on 443 in front of PHP-FPM, with WordPress and MariaDB publishing no ports at all",
      "WordPress and MariaDB each built from a base image, configured by their own entrypoint scripts",
      "WordPress held back until MariaDB reports healthy, through a Compose healthcheck rather than a sleep",
      "Named volumes so database and site content survive a full teardown",
      "A dedicated Docker network, with services addressing each other by name rather than by IP",
      "Environment-driven configuration, with no credentials baked into an image",
      "Bonus tier: Redis cache, FTP server, Adminer, Portainer and a static site",
      "A Makefile that brings the whole stack up, down and back from nothing",
    ],
    stack: ["Docker", "Docker Compose", "Nginx", "MariaDB", "WordPress", "Shell", "Make"],
    sources: [
      { label: "Source", href: "https://github.com/el34bbas/inception" },
    ],
  },
  {
    id: "pingpong",
    num: "07",
    year: "2025",
    live: true,
    link: "https://ping-pong-free.vercel.app/",
    image: "/projects/pingpong.png",
    title: "Ping Pong",
    category: "Game · React",
    hoverLine: "Rally physics without a canvas",
    tagline: "Pong rendered as SVG, with the physics running in React state.",
    role: "Frontend",
    overview: [
      "Pong, but built to answer a specific question: how far can you get with React state and SVG before you actually need a canvas? The ball, the paddles and the court are all elements in the DOM, positioned from state on a fixed interval.",
      "The answer is: further than expected, and the failure mode is instructive. Velocity lives in a ref rather than in state, because a value that changes every tick should not queue a render for every change; the same goes for the score guard that stops one crossing from counting twice. That is the real lesson of the project — knowing which values belong to React and which are just numbers React does not need to hear about.",
    ],
    highlights: [
      { value: "SVG", label: "No canvas, no game engine" },
      { value: "Refs", label: "Velocity outside render state" },
      { value: "React 19", label: "With the React Compiler on" },
    ],
    features: [
      "Two-paddle play with keyboard control and continuous key-hold movement",
      "Ball physics on a fixed tick: wall bounce, paddle deflection and serve reset",
      "Velocity and collision guards held in refs, so per-tick values never trigger a render",
      "Score tracking with an animation on each point, and a pause / reset control",
      "The whole court drawn as SVG rather than canvas",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind", "SVG"],
    sources: [
      { label: "Source", href: "https://github.com/el34bbas/ping_pong" },
    ],
  },
  {
    id: "spinning-wheel",
    num: "08",
    year: "2024",
    live: true,
    link: "https://spinning-wheel-free.vercel.app/",
    image: "/projects/spinning.png",
    title: "Spinning wheel",
    category: "Interaction · SVG",
    hoverLine: "Trigonometry, then an eased stop",
    tagline: "A decision wheel where every slice is drawn from trigonometry.",
    role: "Frontend",
    overview: [
      "Give it a number of choices and a label for each, and it draws a wheel and picks one. Small enough to finish in an evening, and the kind of thing that is only easy until you try it.",
      "There is no wheel image and no chart library. Each slice is an SVG arc path computed from its start and end angle with sine and cosine, and each label is placed and rotated on the same maths. The spin is a speed value decaying toward zero rather than a fixed animation, so the wheel eases to a stop the way a real one does, and the winner is read off the final angle — normalised back into range, because a wheel that has turned nine times is still pointing somewhere specific.",
    ],
    highlights: [
      { value: "SVG arcs", label: "Slices from sin and cos" },
      { value: "Decay", label: "Speed eased to zero, not timed" },
      { value: "N slices", label: "Wheel rebuilt from your input" },
    ],
    features: [
      "Choose how many options you want, then label each one",
      "Slice geometry computed per segment as SVG arc paths from sine and cosine",
      "Labels positioned and rotated along their own slice angle",
      "A spin that starts at a randomised speed and decays, rather than running a fixed animation",
      "Winner resolved from the normalised final angle, whatever the wheel's total rotation",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind", "SVG"],
    sources: [
      { label: "Source", href: "https://github.com/el34bbas/Spinning_wheel" },
    ],
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
    body: "Building technological solutions with React and Node in Casablanca, on a team working across several technology solutions.",
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
    { label: "GitHub", text: "github.com/el34bbas", href: "https://github.com/el34bbas", external: true },
    {
      label: "LinkedIn",
      text: "ismail-el-abbassi",
      href: "https://www.linkedin.com/in/ismail-el-abbassi-653b40231/",
      external: true,
    },
  ],
};

export const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Craft", href: "/#craft" },
  { label: "Path", href: "/#path" },
  { label: "Contact", href: "/#contact", primary: true },
];
