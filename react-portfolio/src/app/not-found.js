import Link from 'next/link';
import BackgroundField from '@/components/BackgroundField';
import SiteHeader from '@/components/SiteHeader';
import styles from './not-found.module.css';

export const metadata = {
  title: 'Not found — Ismail El Abbassi',
};

export default function NotFound() {
  return (
    <>
      <BackgroundField />

      <div className={styles.content}>
        <SiteHeader />

        <main className={styles.main}>
          <p className={styles.eyebrow}>Error 404</p>
          <h1 className={styles.title}>
            Nothing <em>here</em>.
          </h1>
          <p className={styles.body}>
            That page doesn&rsquo;t exist, or it moved. The work index is still where you left it.
          </p>
          <Link href="/#work" className={styles.link}>
            <span className={styles.arrow} aria-hidden="true">←</span>
            Back to the index
          </Link>
        </main>
      </div>
    </>
  );
}
