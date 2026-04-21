import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.upperTitle}>
            <span>SOFTNOVA</span>
            <div className={styles.line}></div>
          </div>
          
          <h1 className={styles.title}>
            Empowering <span className={styles.italic}>Businesses</span> with Cutting-Edge Software & Digital Solutions...
          </h1>
          
          <p className={styles.description}>
           We create dynamic websites, e-commerce platforms, and customized lead generation systems designed to propel your business success
          </p>
        </div>
        
        <div className={styles.visuals}>
          <div className={styles.imageCard}>
            <img 
              src="https://i.pinimg.com/736x/32/21/39/32213931101976e91f09205027f84e5c.jpg" 
              alt="Luxury Interior" 
              className={styles.mainImg} 
            />
            
            <div className={styles.floatingPriceCard}>
              <div className={styles.priceSection}>
                <span className={styles.priceLabel}>COMPLETED PROJECTS</span>
                <div className={styles.priceValue}>
                  <span className={styles.currency}>150+</span>
                  <span className={styles.unit}>Success Stories</span>
                </div>
              </div>
              
              <div className={styles.divider}></div>
              
              <div className={styles.ratingSection}>
                <span className={styles.ratingValue}>99%</span>
                <div className={styles.ratingDetails}>
                  <div className={styles.stars}>★★★★★</div>
                  <span className={styles.source}>Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.waveDivider}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120V37.77c44.8,3.31,135.53,19.38,198.88,29.3C275.5,79,374,79,466,54.74c53-14,94-54,188-54,82,0,154,34.42,216,42,67,8,111-20,186-21,80-1,144,38,144,38V120H0Z" fill="#FFFFFF"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
