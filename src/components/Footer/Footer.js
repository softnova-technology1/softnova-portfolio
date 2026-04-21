import Link from 'next/link';
import { Send, Globe } from 'lucide-react';
import styles from './Footer.module.css';

// Brand icons were removed from lucide-react, using custom SVGs
const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Soft<span>Nova</span></span>
            </div>
            <p className={styles.tagline}>
              Engineering the future of enterprise intelligence with precision and artistic clarity.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colTitle}>Company</h4>
            <div className={styles.footerLinks}>
              <Link href="/careers">Careers</Link>
              <Link href="/projects">Portfolio</Link>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colTitle}>Legal</h4>
            <div className={styles.footerLinks}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/security">Security</Link>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colTitle}>Subscribe</h4>
            <div className={styles.subscribe}>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="Enter your email" className={styles.input} />
                <button className={styles.submitBtn}>
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 SoftNova. Precision in Motion.</p>
          <div className={styles.socials}>
            <Link href="#"><Globe size={18} /></Link>
            <Link href="#"><LinkedInIcon size={18} /></Link>
            <Link href="#"><TwitterIcon size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
