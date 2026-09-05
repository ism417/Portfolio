import Section from '@/components/Section';
import { profile } from '@/data/portfolio';
import styles from './NowStrip.module.css';

export default function NowStrip() {
  return (
    <Section className={styles.section}>
      <div className={styles.strip}>
        <span className={styles.beacon} />
        <span className={styles.label}>Now</span>
        <span className={styles.text}>{profile.now}</span>
      </div>
    </Section>
  );
}
