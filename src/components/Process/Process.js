'use client';
import { useState, useEffect } from 'react';
import styles from './Process.module.css';
import Image from 'next/image';
import TechStack from '../TechStack/TechStack';

const steps = [
  { 
    id: 1, 
    name: 'Prospect', 
    icon: '🔍', 
    x: 50, y: 15,
    title: 'Strategic Prospecting',
    description: 'We dive deep into market research, competitor analysis, and user profiling to identify the most lucrative opportunities for your growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop'
  },
  { 
    id: 2, 
    name: 'Design', 
    icon: '🎨', 
    x: 85, y: 50,
    title: 'Visionary Design',
    description: 'Our design philosophy blends luxury aesthetics with intuitive functionality, creating digital experiences that resonate with elegance.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop'
  },
  { 
    id: 3, 
    name: 'Develop', 
    icon: '⚙️', 
    x: 50, y: 85,
    title: 'Precision Development',
    description: 'We architect robust, scalable, and high-performance solutions using cutting-edge technologies to ensure your platform is future-proof.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop'
  },
  { 
    id: 4, 
    name: 'Deliver', 
    icon: '📦', 
    x: 15, y: 50,
    title: 'Flawless Delivery',
    description: 'We ensure a smooth launch through rigorous testing, optimization, and expert deployment, bringing your digital masterpiece to life.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop'
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(steps[0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => {
          const currentIndex = steps.findIndex(s => s.id === prev.id);
          const nextIndex = (currentIndex + 1) % steps.length;
          return steps[nextIndex];
        });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section 
      className={styles.section}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>The Cycle of Excellence</h2>
          <p className={styles.subtitle}>Our four-step mass-performance-deep-to-market leading digital realities.</p>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.diagramContainer}>
            <div className={styles.circle}>
              <div className={styles.centerIcon}>
                <span className={styles.rocket}>🚀</span>
              </div>
              
              {steps.map(step => (
                <div 
                  key={step.id} 
                  className={`${styles.step} ${activeStep.id === step.id ? styles.activeStep : ''}`}
                  style={{ left: `${step.x}%`, top: `${step.y}%` }}
                  onMouseEnter={() => setActiveStep(step)}
                  onClick={() => setActiveStep(step)}
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

          <div className={styles.detailPanel}>
            <div className={styles.detailCard}>
              <div className={styles.imageOverlay}>
                <img 
                  src={activeStep.image} 
                  alt={activeStep.title} 
                  className={styles.detailImage}
                />
                <div className={styles.imageFade}></div>
              </div>
              <div className={styles.panelInfo}>
                <div className={styles.panelHeader}>
                  <span className={styles.stepNumber}>Step 0{activeStep.id}</span>
                  <div className={styles.panelIcon}>{activeStep.icon}</div>
                </div>
                <h3 className={styles.panelTitle}>{activeStep.title}</h3>
                <p className={styles.panelDescription}>{activeStep.description}</p>
                <div className={styles.panelFooter}>
                  <div className={styles.progressLine}>
                    <div 
                      className={styles.pLineActive} 
                      style={{ width: `${(activeStep.id / 4) * 100}%` }}
                    ></div>
                  </div>
                  <span className={styles.progressText}>{activeStep.id} / 4 Stages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TechStack/>
    </section>
    
  );
};

export default Process;
