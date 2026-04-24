import styles from '../legal.module.css';

export default function Privacy() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <div className={styles.article}>
            <h2>1. Data Collection</h2>
            <p>At SoftNova, we prioritize your privacy. We collect minimal data necessary to provide our premium software services, including name, email, and project requirements.</p>
            
            <h2>2. Data Usage</h2>
            <p>Your data is used exclusively to improve our service delivery and communicate about your projects. We never sell your information to third parties.</p>
            
            <h2>3. Security</h2>
            <p>We employ industry-leading encryption and security protocols to ensure your sensitive business data remains protected at all times.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
