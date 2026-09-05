import Section from '@/components/Section';
import { stack } from '@/data/portfolio';
import styles from './Craft.module.css';

export default function Craft() {
  return (
    <Section id="craft">
      <div className={styles.grid}>
        <div>
          <h2 className={styles.heading}>Craft</h2>
          <p className={styles.blurb}>
            Systems languages at the bottom, product work at the top. I pick the smallest tool that
            survives the requirement.
          </p>
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
