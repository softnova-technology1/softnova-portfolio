import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            We Don't Just Build <span className={styles.highlight}>Software</span>, 
            We Build Digital <span className={styles.gradientText}>Experiences.</span>
          </h1>
          <p className={styles.subtitle}>
            SoftNova is a boutique digital studio engineering premium software for visionary brands.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Explore Our Work</button>
            <button className={styles.secondaryBtn}>What's We Bested</button>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/hero-image.png" 
              alt="SoftNova Digital Experience" 
              width={1200}
              height={600}
              priority
              className={styles.heroImage}
            />
            <div className={styles.floatingTag}>
              <div className={styles.pulse}></div>
              The Innovation Hub
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
