'use client'

import Section from '@/components/Section';
import { useReveal } from '@/hooks/useReveal';
import { projects } from '@/data/portfolio';
import styles from './Work.module.css';

function WorkRow({ project, onEnter }) {
  const [ref, revealed] = useReveal();

  return (
    <a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noreferrer"
      data-work-row=""
      data-revealed={String(revealed)}
      className={styles.row}
      onPointerEnter={onEnter}
    >
      <span className={styles.hairline} />
      <span className={styles.num}>{project.num}</span>

      <span className={styles.titleSlot}>
        <span className={styles.title}>{project.title}</span>
        <span className={styles.titleHover}>{project.title}</span>
      </span>

      <span className={styles.metaSlot}>
        <span className={styles.category}>{project.category}</span>
        <span className={styles.pitch}>{project.hoverLine}</span>
      </span>

      <span className={styles.year}>
        {project.live && <span className={styles.beacon} />}
        {project.year}
      </span>
    </a>
  );
}

export default function Work({ onHoverProject }) {
  return (
    <Section id="work">
      <div className={styles.head}>
        <h2 className={styles.heading}>
          Things I built,
          <br />
          <em>and why they hold up</em>
        </h2>
        <p className={styles.blurb}>
          Two of these run in production today. The rest are the low-level work behind them — the
          projects where you find out what an abstraction is actually costing you.
        </p>
      </div>

      <div className={styles.index} onPointerLeave={() => onHoverProject(null)}>
        {projects.map(project => (
          <WorkRow
            key={project.id}
            project={project}
            onEnter={() => onHoverProject(project.id)}
          />
        ))}
        <div className={styles.closingRule} />
      </div>
    </Section>
  );
}
