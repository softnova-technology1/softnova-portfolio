import Link from 'next/link';
import { Send, Globe } from 'lucide-react';
import styles from './Footer.module.css';

// Brand icons were removed from lucide-react, using custom SVGs
const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
);

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12.01 2.01C6.49 2.01 2.01 6.49 2.01 12.01c0 1.76.46 3.48 1.33 5.01L2 22l5.09-1.33c1.5.82 3.19 1.26 4.92 1.26 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm0 18.25c-1.53 0-3.03-.41-4.34-1.19l-.31-.19L4.41 19.8l.74-2.73-.2-.33c-.85-1.37-1.3-2.95-1.3-4.59 0-4.48 3.64-8.13 8.13-8.13 4.49 0 8.13 3.64 8.13 8.13 0 4.48-3.64 8.13-8.13 8.13zM16.63 15.01c-.2-.11-1.18-.58-1.36-.65-.18-.07-.31-.11-.44.09-.13.2-.5.65-.62.77-.11.13-.23.14-.44.04-.21-.11-.87-.32-1.66-1.02-.61-.54-1.03-1.21-1.14-1.41-.11-.2-.01-.31.09-.4.09-.08.2-.23.31-.34.1-.11.14-.19.21-.31.07-.13.04-.23-.02-.34-.06-.11-.53-1.27-.72-1.74-.18-.45-.37-.39-.51-.39h-.44c-.15 0-.4.06-.6.28-.2.23-.77.75-.77 1.83 0 1.08.79 2.12.9 2.27.11.15 1.55 2.37 3.75 3.32.52.23.93.36 1.25.46.53.17 1.01.14 1.39.09.42-.06 1.18-.48 1.35-.95.17-.46.17-.86.12-.95-.06-.09-.2-.14-.41-.25z"/></svg>
);

const InstgramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.3,18.7H5.4V9.5h2.9V18.7z M6.9,8.3 c-0.9,0-1.7-0.8-1.7-1.7s0.8-1.7,1.7-1.7s1.7,0.8,1.7,1.7S7.8,8.3,6.9,8.3z M18.7,18.7h-2.9v-4.6c0-1.1,0-2.5-1.5-2.5 c-1.5,0-1.8,1.2-1.8,2.4v4.7h-2.9V9.5h2.8v1.3h0c0.4-0.7,1.3-1.5,2.7-1.5c2.9,0,3.5,1.9,3.5,4.4V18.7z"/></svg>
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
            <Link href="#" className={styles.socialLink}><FacebookIcon /></Link>
            <Link href="#" className={styles.socialLink}><WhatsAppIcon /></Link>
            <Link href="#" className={styles.socialLink}><LinkedInIcon /></Link>
            <Link href="#" className={styles.socialLink}><InstgramIcon /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
