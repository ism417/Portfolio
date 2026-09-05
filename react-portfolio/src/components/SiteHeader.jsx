import { navigation, profile } from '@/data/portfolio';
import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <a href="#top" className={styles.wordmark}>{profile.name}</a>
      <nav className={styles.nav}>
        {navigation.map(item => (
          <a
            key={item.href}
            href={item.href}
            className={item.primary ? styles.linkPrimary : styles.link}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
