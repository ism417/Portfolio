import Section from '@/components/Section';
import { sections, stack } from '@/data/portfolio';
import styles from './Craft.module.css';

export default function Craft() {
  return (
    <Section id="craft">
      <div className={styles.grid}>
        <div>
          <h2 className={styles.heading}>{sections.craft.heading}</h2>
          <p className={styles.blurb}>{sections.craft.blurb}</p>
        </div>
        <ul className={styles.pills}>
          {stack.map(item => (
            <li key={item} className={styles.pill}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
