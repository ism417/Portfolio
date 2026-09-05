'use client'

import Section from '@/components/Section';
import { useReveal } from '@/hooks/useReveal';
import { timeline } from '@/data/portfolio';
import styles from './Path.module.css';

function TimelineEntry({ entry }) {
  const [ref, revealed] = useReveal();

  return (
    <div ref={ref} className={styles.entry} data-revealed={String(revealed)}>
      <div className={styles.years}>{entry.years}</div>
      <div>
        <h3 className={styles.role}>{entry.title}</h3>
        <p className={styles.body}>{entry.body}</p>
      </div>
    </div>
  );
}

export default function Path() {
  return (
    <Section id="path">
      <h2 className={styles.heading}>Path</h2>
      {timeline.map(entry => (
        <TimelineEntry key={`${entry.years}-${entry.title}`} entry={entry} />
      ))}
    </Section>
  );
}
