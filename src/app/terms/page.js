import styles from '../legal.module.css';

export default function Terms() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>Terms of Service</h1>
          <div className={styles.article}>
            <h2>1. Service Agreement</h2>
            <p>By using SoftNova's services, you agree to our professional standards of software delivery and collaboration. We commit to excellence in every line of code.</p>
            
            <h2>2. Intellectual Property</h2>
            <p>All custom software developed for our clients remains the property of the client upon full payment, as per individual contract terms.</p>
            
            <h2>3. Professional Conduct</h2>
            <p>We maintain a high standard of professional integrity and expect the same from our partners and clients to ensure successful project outcomes.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
