import styles from './careers.module.css';

export default function Careers() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Join the <span className={styles.gradient}>Nova</span> Movement</h1>
          <p className={styles.subtitle}>We're looking for visionary thinkers and precision engineers to help us build the future of software.</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Senior Frontend Architect</h3>
            <p>Next.js, React, WebGL</p>
            <button className={styles.btn}>Apply Now</button>
          </div>
          <div className={styles.card}>
            <h3>AI Research Engineer</h3>
            <p>Python, PyTorch, LLMs</p>
            <button className={styles.btn}>Apply Now</button>
          </div>
          <div className={styles.card}>
            <h3>Product Designer</h3>
            <p>UI/UX, Figma, Motion Design</p>
            <button className={styles.btn}>Apply Now</button>
          </div>
        </div>
      </div>
    </main>
  );
}
