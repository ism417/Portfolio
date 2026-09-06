'use client'

import Link from 'next/link';
import Section from '@/components/Section';
import { useReveal } from '@/hooks/useReveal';
import { projects, sections } from '@/data/portfolio';
import styles from './Work.module.css';

function WorkRow({ project, onEnter }) {
  const [ref, revealed] = useReveal();

  return (
    <Link
      ref={ref}
      href={`/work/${project.id}`}
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
    </Link>
  );
}

export default function Work({ onHoverProject }) {
  return (
    <Section id="work">
      <div className={styles.head}>
        <h2 className={styles.heading}>
          {sections.work.heading}
          <br />
          <em>{sections.work.headingEmphasis}</em>
        </h2>
        <p className={styles.blurb}>{sections.work.blurb}</p>
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
