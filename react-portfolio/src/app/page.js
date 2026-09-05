'use client'

import { useEffect, useRef } from 'react';

const MONO = "var(--font-jetbrains-mono), ui-monospace, monospace";

const PROJECTS = [
  { num: "01", year: "2026", live: true, title: "Chatbot / RAG", category: "AI · Retrieval", hoverLine: "Answers grounded in your own documents", link: "https://raglet.live", image: "/chatbot.png" },
  { num: "02", year: "2025", live: true, title: "Todo list manager", category: "Web app", hoverLine: "Small state model, keyboard first", link: "https://my-todo-io-app.vercel.app/", image: "/todoapp.png" },
  { num: "03", year: "2025", live: true, title: "Ping Pong", category: "Game · Canvas", hoverLine: "Fixed timestep loop, real collision", link: "https://ping-pong-free.vercel.app/", image: "/pingpong.png" },
  { num: "04", year: "2024", live: true, title: "Spinning wheel", category: "Interaction study", hoverLine: "Weighted outcomes, eased deceleration", link: "https://spinning-wheel-free.vercel.app/", image: "/spinning.png" },
];

const STACK = ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL / Postgres", "React", "Next.js", "Tailwind", "Docker", "Git", "Linux"];

const TIMELINE = [
  { years: "2025 — now", title: "Freelance fullstack developer", body: "Currently building raglet.live and taking scoped client work." },
  { years: "2024 — 2025", title: "Internship / first engineering role", body: "Placeholder entry — replace with the company, the stack, and one measurable outcome." },
  { years: "2023 — 2025", title: "1337 School", body: "Peer-to-peer, project-based computer science. Systems programming in C and C++, graphics, networking, and a lot of debugging other people's code." },
  { years: "2018 — 2022", title: "University Diploma, Ibn Zohr", body: "Mathematics and computer science at the Faculty of Science, Ouarzazate. Data structures, algorithms, databases, computer architecture and software engineering." },
];

function WorkRow({ p, rowRef }) {
  return (
    <a
      ref={rowRef}
      href={p.link}
      target="_blank"
      rel="noreferrer"
      className="work-row"
      data-rv=""
      style={{
        opacity: 0, transform: 'translateY(18px)', transition: 'opacity .55s ease, transform .8s ease',
        position: 'relative', display: 'flex', alignItems: 'center', gap: 'clamp(14px,2.4vw,32px)',
        padding: 'clamp(18px,2.4vw,26px) 0', borderTop: '1px solid rgba(255,255,255,.12)',
        textDecoration: 'none', color: 'inherit',
      }}
    >
      <span className="hairline" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 1, background: '#f4f4f4', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform .7s cubic-bezier(.16,1,.3,1)' }} />
      <span style={{ width: 40, flex: 'none', fontFamily: MONO, fontSize: 11, color: 'rgba(255,255,255,.55)' }}>{p.num}</span>
      <span style={{ position: 'relative', flex: 1, minWidth: 0, height: 'clamp(38px,5.6vw,58px)', overflow: 'hidden' }}>
        <span className="swap-a" style={{ position: 'absolute', inset: 0, display: 'block', fontSize: 'clamp(26px,4.6vw,50px)', lineHeight: 'clamp(38px,5.6vw,58px)', fontWeight: 400, letterSpacing: '-.02em', whiteSpace: 'nowrap', transition: 'transform .5s cubic-bezier(.16,1,.3,1), opacity .4s ease' }}>{p.title}</span>
        <span className="swap-b" style={{ position: 'absolute', inset: 0, display: 'block', fontSize: 'clamp(26px,4.6vw,50px)', lineHeight: 'clamp(38px,5.6vw,58px)', fontWeight: 300, fontStyle: 'italic', letterSpacing: '-.02em', whiteSpace: 'nowrap', color: '#f4f4f4', transform: 'translateY(100%)', opacity: 0, transition: 'transform .5s cubic-bezier(.16,1,.3,1), opacity .4s ease' }}>{p.title}</span>
      </span>
      <span style={{ position: 'relative', width: 'clamp(150px,22vw,300px)', flex: 'none', height: 16, overflow: 'hidden', fontFamily: MONO, fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase' }}>
        <span className="swap-a" style={{ position: 'absolute', inset: 0, display: 'block', lineHeight: '16px', color: 'rgba(255,255,255,.6)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'transform .5s cubic-bezier(.16,1,.3,1), opacity .4s ease' }}>{p.category}</span>
        <span className="swap-b" style={{ position: 'absolute', inset: 0, display: 'block', lineHeight: '16px', color: '#f4f4f4', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transform: 'translateY(100%)', opacity: 0, transition: 'transform .5s cubic-bezier(.16,1,.3,1), opacity .4s ease' }}>{p.hoverLine}</span>
      </span>
      <span style={{ width: 78, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, fontFamily: MONO, fontSize: 11, color: 'rgba(255,255,255,.55)' }}>
        {p.live && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f4f4f4', animation: 'pulse 2.4s ease-in-out infinite' }} />}
        {p.year}
      </span>
    </a>
  );
}

export default function Home() {
  const rowRefs = useRef([]);
  const imgRefs = useRef([]);
  const indexRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const previewRef = useRef(null);

  useEffect(() => {
    const reveal = el => { el.style.opacity = "1"; el.style.transform = "none"; };
    const all = () => Array.from(document.querySelectorAll("[data-rv]"));
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } }), { threshold: 0.08 });
    all().forEach(el => io.observe(el));
    const fallback = setTimeout(() => all().forEach(reveal), 3000);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    const preview = previewRef.current;
    const imgs = imgRefs.current.filter(Boolean);
    const rows = rowRefs.current.filter(Boolean);
    const index = indexRef.current;
    if (!ring || !dot) return;

    let tx = 0, ty = 0, rx = 0, ry = 0, px = 0, py = 0, lastPx = 0, tilt = 0;
    let active = false, seeded = false, raf = null;

    const move = e => {
      tx = e.clientX; ty = e.clientY;
      if (!active) { active = true; rx = tx; ry = ty; ring.style.opacity = "1"; dot.style.opacity = "1"; }
      const big = !!e.target.closest("a,button,[data-work-row],img");
      ring.style.width = big ? "68px" : "38px";
      ring.style.height = big ? "68px" : "38px";
      ring.style.margin = big ? "-34px 0 0 -34px" : "-19px 0 0 -19px";
      ring.style.background = big ? "rgba(255,255,255,.14)" : "transparent";
    };
    const out = () => { active = false; ring.style.opacity = "0"; dot.style.opacity = "0"; };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", out);

    const swap = (row, on) => {
      row.querySelectorAll(".swap-a").forEach(el => { el.style.transform = on ? "translateY(-100%)" : "translateY(0)"; el.style.opacity = on ? "0" : "1"; });
      row.querySelectorAll(".swap-b").forEach(el => { el.style.transform = on ? "translateY(0)" : "translateY(100%)"; el.style.opacity = on ? "1" : "0"; });
      const hair = row.querySelector(".hairline");
      if (hair) hair.style.transform = on ? "scaleX(1)" : "scaleX(0)";
    };

    const enterHandlers = rows.map((row, i) => {
      const handler = () => {
        rows.forEach((r, j) => { r.style.opacity = j === i ? "1" : "0.28"; swap(r, j === i); });
        imgs.forEach((im, j) => { im.style.opacity = j === i ? "1" : "0"; });
        if (preview) preview.style.opacity = "1";
      };
      row.addEventListener("pointerenter", handler);
      return handler;
    });
    const leaveHandler = () => {
      rows.forEach(r => { r.style.opacity = "1"; swap(r, false); });
      if (preview) preview.style.opacity = "0";
    };
    if (index) index.addEventListener("pointerleave", leaveHandler);

    const tick = () => {
      rx += (tx - rx) * 0.16; ry += (ty - ry) * 0.16;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      dot.style.transform = `translate3d(${tx}px,${ty}px,0)`;
      if (preview) {
        const w = window.innerWidth, h = window.innerHeight;
        let gx = tx + 210; if (gx + 170 > w - 24) gx = tx - 210;
        const gy = Math.min(Math.max(ty, 146), h - 146);
        if (!seeded && active) { px = gx; py = gy; lastPx = gx; seeded = true; }
        px += (gx - px) * 0.12; py += (gy - py) * 0.12;
        const v = px - lastPx; lastPx = px;
        tilt += (Math.max(-12, Math.min(12, v * 0.6)) - tilt) * 0.1;
        preview.style.transform = `translate3d(${px}px,${py}px,0) rotate(${tilt}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", out);
      rows.forEach((row, i) => row.removeEventListener("pointerenter", enterHandlers[i]));
      if (index) index.removeEventListener("pointerleave", leaveHandler);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* drifting background layers */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: -260, left: -160, width: 820, height: 820, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,.09), rgba(255,255,255,0) 66%)', filter: 'blur(24px)', animation: 'drift1 28s ease-in-out infinite alternate' }} />
        <div style={{ position: 'absolute', bottom: -320, right: -180, width: 900, height: 900, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,.07), rgba(255,255,255,0) 66%)', filter: 'blur(28px)', animation: 'drift2 36s ease-in-out infinite alternate' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.09) 1px, transparent 1px)', backgroundSize: '26px 26px', animation: 'dots 40s linear infinite' }} />
      </div>

      {/* custom cursor + hover preview */}
      <div data-cursor-layer="" style={{ position: 'fixed', inset: 0, zIndex: 90, pointerEvents: 'none' }}>
        <div ref={ringRef} style={{ position: 'absolute', top: 0, left: 0, width: 38, height: 38, margin: '-19px 0 0 -19px', border: '1px solid rgba(255,255,255,.7)', borderRadius: '50%', transition: 'width .28s ease, height .28s ease, margin .28s ease, background .28s ease', opacity: 0 }} />
        <div ref={dotRef} style={{ position: 'absolute', top: 0, left: 0, width: 5, height: 5, margin: '-2.5px 0 0 -2.5px', borderRadius: '50%', background: '#f4f4f4', opacity: 0 }} />
        <div ref={previewRef} style={{ position: 'absolute', top: 0, left: 0, width: 340, height: 260, margin: '-130px 0 0 -170px', borderRadius: 4, overflow: 'hidden', background: '#1c1c1c', border: '1px solid rgba(255,255,255,.16)', boxShadow: '0 26px 70px rgba(0,0,0,.55)', opacity: 0, transition: 'opacity .4s cubic-bezier(.16,1,.3,1)' }}>
          {PROJECTS.map((p, i) => (
            <img
              key={p.link}
              ref={el => { imgRefs.current[i] = el; }}
              src={p.image}
              alt=""
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', opacity: 0, transition: 'opacity .45s ease' }}
            />
          ))}
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <header style={{ position: 'sticky', top: 0, zIndex: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, padding: '18px clamp(20px,5vw,72px)', background: 'rgba(18,18,18,.82)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,.12)' }}>
          <a href="#top" style={{ fontSize: 15, letterSpacing: '.02em', textDecoration: 'none', color: '#f4f4f4' }}>Ismail El Abbassi</a>
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(14px,2vw,26px)', fontFamily: MONO, fontSize: 10.5, letterSpacing: '.09em', textTransform: 'uppercase' }}>
            <a href="#work" className="nav-link" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.62)' }}>Work</a>
            <a href="#craft" className="nav-link" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.62)' }}>Craft</a>
            <a href="#path" className="nav-link" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.62)' }}>Path</a>
            <a href="#contact" style={{ textDecoration: 'none', color: '#f4f4f4' }}>Enquire</a>
          </nav>
        </header>

        <section id="top" style={{ padding: 'clamp(56px,9vw,96px) clamp(20px,5vw,72px) clamp(48px,6vw,64px)', borderBottom: '1px solid rgba(255,255,255,.12)' }}>
          <div data-rv="" style={{ opacity: 0, transform: 'translateY(18px)', transition: 'opacity .8s ease, transform .8s ease', maxWidth: 1240, margin: '0 auto' }}>
            <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: '.14em', textTransform: 'uppercase', color: '#dcdcdc', marginBottom: 'clamp(20px,3vw,30px)' }}>Independent fullstack developer — Morocco</div>
            <h1 style={{ margin: 0, fontSize: 'clamp(38px,6.6vw,76px)', lineHeight: 1.03, fontWeight: 300, letterSpacing: '-.022em', maxWidth: 900 }}>I build the software small teams <em style={{ fontStyle: 'italic', color: '#dcdcdc' }}>don&apos;t have the hands</em> to build.</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 'clamp(24px,4vw,56px)', marginTop: 'clamp(28px,4vw,44px)', alignItems: 'start' }}>
              <p style={{ margin: 0, fontSize: 'clamp(16px,1.5vw,19px)', lineHeight: 1.65, color: '#b4b4b4', maxWidth: 620 }}>Ten years of curiosity, four of them writing production code. C and C++ taught me where the cost is; React, Next.js and Postgres are where I spend most days. I work directly with founders — scope, build, deploy, hand over.</p>
              <div style={{ fontFamily: MONO, fontSize: 11, lineHeight: 2.2, color: 'rgba(255,255,255,.6)', borderLeft: '1px solid rgba(255,255,255,.2)', paddingLeft: 22 }}>
                <div>Booking → Oct 2026</div>
                <div>Typical engagement → 4–8 weeks</div>
                <div>Response → under 24h</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 'clamp(28px,4vw,44px)', alignItems: 'center' }}>
              <a href="#contact" className="cta-btn" style={{ textDecoration: 'none', background: '#f4f4f4', color: '#121212', padding: '15px 28px', fontFamily: MONO, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase' }}>Start an enquiry</a>
              <a href="/eismail-cv.pdf" download="eismail-cv.pdf" className="resume-link" style={{ textDecoration: 'none', fontFamily: MONO, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)', borderBottom: '1px solid rgba(255,255,255,.3)', paddingBottom: 3 }}>Résumé, PDF</a>
            </div>
          </div>
        </section>

        <section style={{ padding: '26px clamp(20px,5vw,72px)', borderBottom: '1px solid rgba(255,255,255,.12)' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'baseline', fontFamily: MONO, fontSize: 11.5, color: 'rgba(255,255,255,.72)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f4f4f4', animation: 'pulse 2.4s ease-in-out infinite' }} />
            <span style={{ letterSpacing: '.12em', textTransform: 'uppercase', color: '#dcdcdc' }}>Now</span>
            <span style={{ flex: 1, minWidth: 240 }}>Building raglet.live, a retrieval chatbot · reading up on Go and system design · two client slots open this quarter</span>
          </div>
        </section>

        <section id="work" style={{ padding: 'clamp(48px,7vw,76px) clamp(20px,5vw,72px)', borderBottom: '1px solid rgba(255,255,255,.12)' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 'clamp(24px,4vw,56px)', alignItems: 'end', marginBottom: 'clamp(32px,4vw,52px)' }}>
              <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,38px)', fontWeight: 300, letterSpacing: '-.01em' }}>Things I built,<br /><em style={{ fontStyle: 'italic', color: '#b4b4b4' }}>and why they hold up</em></h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: '#b4b4b4' }}>Two of these run in production today. The rest are the low-level work behind them — the projects where you find out what an abstraction is actually costing you.</p>
            </div>
            <div ref={indexRef} style={{ display: 'flex', flexDirection: 'column' }}>
              {PROJECTS.map((p, i) => (
                <WorkRow key={p.link} p={p} rowRef={el => { rowRefs.current[i] = el; }} />
              ))}
              <div style={{ borderTop: '1px solid rgba(255,255,255,.12)' }} />
            </div>
          </div>
        </section>

        <section id="craft" style={{ padding: 'clamp(48px,7vw,76px) clamp(20px,5vw,72px)', borderBottom: '1px solid rgba(255,255,255,.12)' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 'clamp(24px,4vw,56px)', alignItems: 'start' }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,38px)', fontWeight: 300, letterSpacing: '-.01em' }}>Craft</h2>
              <p style={{ margin: '16px 0 0', fontSize: 15.5, lineHeight: 1.7, color: '#b4b4b4', maxWidth: 380 }}>Systems languages at the bottom, product work at the top. I pick the smallest tool that survives the requirement.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {STACK.map(s => (
                <span key={s} className="stack-pill" style={{ fontFamily: MONO, fontSize: 12, padding: '9px 15px', border: '1px solid rgba(255,255,255,.22)', borderRadius: 999, transition: 'all .3s ease' }}>{s}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="path" style={{ padding: 'clamp(48px,7vw,76px) clamp(20px,5vw,72px)', borderBottom: '1px solid rgba(255,255,255,.12)' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto' }}>
            <h2 style={{ margin: '0 0 clamp(26px,3.5vw,40px)', fontSize: 'clamp(28px,3.4vw,38px)', fontWeight: 300, letterSpacing: '-.01em' }}>Path</h2>
            {TIMELINE.map(t => (
              <div key={t.years + t.title} data-rv="" style={{ opacity: 0, transform: 'translateY(18px)', transition: 'opacity .8s ease, transform .8s ease', display: 'grid', gridTemplateColumns: 'minmax(120px,150px) 1fr', gap: 'clamp(18px,3vw,36px)', padding: '26px 0', borderTop: '1px solid rgba(255,255,255,.12)' }}>
                <div style={{ fontFamily: MONO, fontSize: 11, color: 'rgba(255,255,255,.6)', paddingTop: 5 }}>{t.years}</div>
                <div>
                  <div style={{ fontSize: 'clamp(18px,2vw,22px)', fontWeight: 400 }}>{t.title}</div>
                  <p style={{ margin: '9px 0 0', fontSize: 16, lineHeight: 1.7, color: '#b4b4b4', maxWidth: 680 }}>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={{ padding: 'clamp(52px,7vw,80px) clamp(20px,5vw,72px) clamp(60px,8vw,92px)' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 'clamp(28px,4vw,56px)', alignItems: 'end' }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 'clamp(34px,4.6vw,52px)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-.018em' }}>Tell me what<br />you&apos;re building.</h2>
              <p style={{ margin: '20px 0 0', fontSize: 17, lineHeight: 1.7, color: '#b4b4b4', maxWidth: 420 }}>A paragraph about the problem is enough to start. I&apos;ll reply with scope, timeline and a number.</p>
            </div>
            <div style={{ fontFamily: MONO, fontSize: 12.5, lineHeight: 2.4, color: 'rgba(255,255,255,.78)' }}>
              <div><span style={{ color: 'rgba(255,255,255,.5)', display: 'inline-block', width: 80 }}>Email</span> <a href="mailto:ismailelabbassi220@gmail.com" className="contact-link" style={{ textDecoration: 'none', color: 'inherit' }}>ismailelabbassi220@gmail.com</a></div>
              <div><span style={{ color: 'rgba(255,255,255,.5)', display: 'inline-block', width: 80 }}>GitHub</span> <a href="https://github.com/ism417" target="_blank" rel="noreferrer" className="contact-link" style={{ textDecoration: 'none', color: 'inherit' }}>github.com/ism417</a></div>
              <div><span style={{ color: 'rgba(255,255,255,.5)', display: 'inline-block', width: 80 }}>LinkedIn</span> <a href="https://www.linkedin.com/in/ismail-el-abbassi-653b40231/" target="_blank" rel="noreferrer" className="contact-link" style={{ textDecoration: 'none', color: 'inherit' }}>ismail-el-abbassi</a></div>
              <div style={{ marginTop: 30, fontSize: 10.5, color: 'rgba(255,255,255,.45)' }}>© 2026 Ismail El Abbassi</div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .nav-link:hover { color: #f4f4f4; }
        .cta-btn:hover { background: #c9c9c9; color: #121212; }
        .resume-link:hover { color: #f4f4f4; }
        .contact-link:hover { color: #f4f4f4; }
        .stack-pill:hover { background: #f4f4f4; color: #121212; border-color: #f4f4f4; }
      `}</style>
    </>
  );
}
