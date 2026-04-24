import styles from '../legal.module.css';

export default function Security() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>Enterprise Security</h1>
          <div className={styles.article}>
            <h2>1. Infrastructure Security</h2>
            <p>Our solutions are built on highly secure cloud environments, utilizing multi-layered defense systems and automated threat detection.</p>
            
            <h2>2. Data Encryption</h2>
            <p>We implement AES-256 encryption for data at rest and TLS 1.3 for data in transit, ensuring your intellectual property is never exposed.</p>
            
            <h2>3. Compliance & Audits</h2>
            <p>SoftNova follows ISO 27001 standards and conducts regular security audits to maintain the highest levels of digital safety for our enterprise clients.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
