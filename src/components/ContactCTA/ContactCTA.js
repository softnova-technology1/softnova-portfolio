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
              <input type="text" placeholder="Elon Musk" required />
            </div>
            
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <label>EMAIL ADDRESS</label>
                <input type="email" placeholder="elon@spacex.com" required />
              </div>
              <div className={styles.inputGroup}>
                <label>PROJECT TYPE</label>
                <select required>
                  <option value="">Select Type</option>
                  <option>Web Application</option>
                  <option>Mobile App (iOS/Android)</option>
                  <option>SaaS Platform</option>
                  <option>E-commerce Store</option>
                  <option>AI & Machine Learning</option>
                  <option>Custom CRM/ERP System</option>
                  <option>UI/UX Design & Branding</option>
                  <option>Blockchain & Web3</option>
                  <option>Cloud Infrastructure</option>
                  <option>Digital Strategy</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>BUDGET RANGE</label>
              <select required>
                <option value="">Select Budget</option>
                <option>$5k - $10k</option>
                <option>$10k - $25k</option>
                <option>$25k - $50k</option>
                <option>$50k+</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>PROJECT BRIEF</label>
              <textarea placeholder="Tell us about your vision..." rows="3"></textarea>
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
