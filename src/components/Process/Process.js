import styles from './Process.module.css';

const steps = [
  { id: 1, name: 'Prospect', icon: '🔍', x: 50, y: 15 },
  { id: 2, name: 'Design', icon: '🎨', x: 85, y: 50 },
  { id: 3, name: 'Develop', icon: '⚙️', x: 50, y: 85 },
  { id: 4, name: 'Deliver', icon: '📦', x: 15, y: 50 },
];

const Process = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>The Cycle of Excellence</h2>
          <p className={styles.subtitle}>Our four-step mass-performance-deep-to-market leading digital realities.</p>
        </div>

        <div className={styles.diagramContainer}>
          <div className={styles.circle}>
            <div className={styles.centerIcon}>
              <span className={styles.rocket}>🚀</span>
            </div>
            
            {steps.map(step => (
              <div 
                key={step.id} 
                className={styles.step}
                style={{ left: `${step.x}%`, top: `${step.y}%` }}
              >
                <div className={styles.stepContent}>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <span className={styles.stepLabel}>{step.id}. {step.name}</span>
                </div>
              </div>
            ))}
            
            <svg className={styles.lines}>
               <circle cx="50%" cy="50%" r="35%" className={styles.mainPath} fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
