import styles from './ContactCTA.module.css';

const ContactCTA = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Let's Build Something <br />
            <span>Game-Changing.</span>
          </h2>
          <p className={styles.subtitle}>
            If you're willing to dominate software in your marketplace and want digital experience engine extra growth.
          </p>
          <div className={styles.avatars}>
            <div className={styles.avatarGroup}>
              <div className={styles.avatar} style={{backgroundColor: '#6366f1'}}>JD</div>
              <div className={styles.avatar} style={{backgroundColor: '#2563eb'}}>AS</div>
              <div className={styles.avatar} style={{backgroundColor: '#0ea5e9'}}>MK</div>
            </div>
            <span>Join 50+ visionary leaders</span>
          </div>
        </div>

        <div className={styles.formCard}>
          <h3>Book a Strategy Call</h3>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>FULL NAME</label>
              <input type="text" placeholder="Elon Musk" />
            </div>
            <div className={styles.inputGroup}>
              <label>PROJECT TYPE</label>
              <select>
                <option>Web Application</option>
                <option>Mobile App</option>
                <option>SaaS Platform</option>
                <option>AI Integration</option>
              </select>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Submit Request
            </button>
            <p className={styles.formNote}>We typically respond within 2 hours.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
