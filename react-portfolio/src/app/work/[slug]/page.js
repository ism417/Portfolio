import Link from 'next/link';
import { notFound } from 'next/navigation';
import BackgroundField from '@/components/BackgroundField';
import CursorLayer from '@/components/CursorLayer';
import SiteHeader from '@/components/SiteHeader';
import { projects } from '@/data/portfolio';
import styles from './page.module.css';

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find(item => item.id === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Ismail El Abbassi`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = projects.findIndex(item => item.id === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <BackgroundField />
      <CursorLayer projects={[]} activeProject={null} />

      <div className={styles.content}>
        <SiteHeader />

        <main>
          <article>
            <header className={styles.banner} data-variant={project.image ? 'image' : 'type'}>
              {project.image && (
                <div className={styles.bannerMedia}>
                  <img
                    className={styles.bannerImage}
                    src={project.image}
                    alt={`${project.title} interface`}
                  />
                  <span className={styles.scrim} aria-hidden="true" />
                </div>
              )}

              <div className={styles.bannerTop}>
                <Link href="/#work" className={styles.back}>
                  <span className={styles.backArrow} aria-hidden="true">←</span>
                  Index
                </Link>
              </div>

              <div className={styles.bannerInner}>
                <p className={styles.eyebrow}>
                  <span>
                    {project.category} — {project.year}
                  </span>
                  {project.live && (
                    <span className={styles.liveTag}>
                      <span className={styles.beacon} aria-hidden="true" />
                      live
                    </span>
                  )}
                </p>
                <h1 className={styles.title}>{project.title}</h1>
                <p className={styles.tagline}>{project.tagline}</p>
              </div>
            </header>

            <div className={styles.stats}>
              {project.highlights.map(highlight => (
                <div key={highlight.label} className={styles.stat}>
                  <p className={styles.statValue}>{highlight.value}</p>
                  <p className={styles.statLabel}>{highlight.label}</p>
                </div>
              ))}
            </div>

            <div className={styles.body}>
              <div className={styles.column}>
                <h2 className={styles.label}>Overview</h2>
                {project.overview.map(paragraph => (
                  <p key={paragraph} className={styles.para}>
                    {paragraph}
                  </p>
                ))}

                <h2 className={styles.label}>What it does</h2>
                <ul className={styles.features}>
                  {project.features.map((feature, position) => (
                    <li key={feature} className={styles.feature}>
                      <span className={styles.featureNum}>
                        {String(position + 1).padStart(2, '0')}
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className={styles.aside}>
                <div className={styles.asideInner}>
                  <dl className={styles.facts}>
                    <div className={styles.fact}>
                      <dt className={styles.label}>Role</dt>
                      <dd className={styles.factValue}>{project.role}</dd>
                    </div>
                    <div className={styles.fact}>
                      <dt className={styles.label}>Year</dt>
                      <dd className={styles.factValue}>{project.year}</dd>
                    </div>
                    <div className={styles.fact}>
                      <dt className={styles.label}>Stack</dt>
                      <dd>
                        <ul className={styles.chips}>
                          {project.stack.map(tech => (
                            <li key={tech} className={styles.chip}>
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>

                  {project.note && <p className={styles.note}>{project.note}</p>}

                  <div className={styles.actions}>
                    {project.link && (
                      <a
                        className={styles.actionPrimary}
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className={styles.beacon} aria-hidden="true" />
                        Visit live
                      </a>
                    )}
                    {project.sources.map(source => (
                      <a
                        key={source.href}
                        className={styles.action}
                        href={source.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {source.label}
                        <span className={styles.actionArrow} aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </aside>
            </div>

            {project.gallery && (
              <div className={styles.gallery}>
                {project.gallery.map(item => (
                  <figure key={item.src} className={styles.figure} data-fit={item.fit ?? 'cover'}>
                    {item.type === 'video' ? (
                      <video
                        className={styles.figureMedia}
                        src={item.src}
                        poster={item.poster ?? project.image}
                        controls
                        preload="metadata"
                        playsInline
                      />
                    ) : (
                      <img className={styles.figureMedia} src={item.src} alt={item.caption} />
                    )}
                    <figcaption className={styles.caption}>{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}

            <nav className={styles.next}>
              <Link href={`/work/${next.id}`} className={styles.nextLink}>
                <span className={styles.label}>Next project</span>
                <span className={styles.nextTitle}>
                  {next.title}
                  <span className={styles.nextArrow} aria-hidden="true">→</span>
                </span>
              </Link>
            </nav>
          </article>
        </main>
      </div>
    </>
  );
}
