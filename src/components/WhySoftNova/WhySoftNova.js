import styles from './WhySoftNova.module.css';

const features = [
  {
    title: 'Unmatched Speed',
    description: 'Our agile framework ensures faster time-to-market without compromising on scalability.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    color: '#2563eb'
  },
  {
    title: 'Artisan Quality',
    description: 'Every line of code is treated as native art-crafted, measure in environments not ego.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    color: '#6366f1',
    isFeatured: true
  },
  {
    title: 'Pure Innovation',
    description: 'Technology emerging from the latent needs to give your business generational leap.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    ),
    color: '#0ea5e9'
  }
];

const WhySoftNova = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why SoftNova</h2>
          <p className={styles.subtitle}>The pillars of our digital excellence.</p>
        </div>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${feature.isFeatured ? styles.featured : ''}`}
            >
              <div className={styles.iconWrapper} style={{ backgroundColor: feature.color + '15', color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className={feature.isFeatured ? styles.featuredTitle : ''}>{feature.title}</h3>
              <p className={feature.isFeatured ? styles.featuredDesc : ''}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySoftNova;
