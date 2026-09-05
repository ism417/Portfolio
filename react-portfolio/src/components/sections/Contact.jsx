import Section from '@/components/Section';
import { contact, profile } from '@/data/portfolio';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <Section id="contact" className={styles.section}>
      <div className={styles.grid}>
        <div>
          <h2 className={styles.heading}>
            Tell me what
            <br />
            you&apos;re building.
          </h2>
          <p className={styles.pitch}>{contact.pitch}</p>
        </div>
        <div className={styles.details}>
          {contact.links.map(link => (
            <div key={link.label}>
              <span className={styles.label}>{link.label}</span>{' '}
              <a
                href={link.href}
                className={styles.link}
                {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {link.text}
              </a>
            </div>
          ))}
          <p className={styles.copyright}>© 2026 {profile.name}</p>
        </div>
      </div>
    </Section>
  );
}
