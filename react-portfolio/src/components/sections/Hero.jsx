'use client'

import Section from '@/components/Section';
import { useReveal } from '@/hooks/useReveal';
import { profile } from '@/data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  const [ref, revealed] = useReveal();

  return (
    <Section id="top" className={styles.hero}>
      <div ref={ref} className={styles.reveal} data-revealed={String(revealed)}>
        <p className={styles.eyebrow}>{profile.eyebrow}</p>
        <h1 className={styles.headline}>
          {profile.headline.before}
          <em>{profile.headline.emphasis}</em>
          {profile.headline.after}
        </h1>
        <div className={styles.body}>
          <p className={styles.intro}>{profile.intro}</p>
          <div className={styles.terms}>
            {profile.terms.map(term => (
              <div key={term}>{term}</div>
            ))}
          </div>
        </div>
        <div className={styles.actions}>
          <a href="#contact" className={styles.cta}>{profile.cta}</a>
          <a href={profile.resume} download className={styles.resume}>{profile.resumeLabel}</a>
        </div>
      </div>
    </Section>
  );
}
