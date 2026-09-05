import styles from './BackgroundField.module.css';

/** Two slow-drifting light fields and a crawling dot grid, fixed behind the page. */
export default function BackgroundField() {
  return (
    <div className={styles.field} aria-hidden="true">
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />
      <div className={styles.dots} />
    </div>
  );
}
