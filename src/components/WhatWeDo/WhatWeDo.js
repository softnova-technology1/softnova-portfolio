'use client';
import { useState } from 'react';
import styles from './WhatWeDo.module.css';
import Image from 'next/image';

const services = [
  {
    id: 'web',
    title: 'Web Applications',
    mainTitle: 'Web Apps',
    tagline: 'SAFE WORK',
    description: 'Enterprise Grade Web',
    detail: 'Flexible, responsive, and blazing fast. For build-once platforms that deliver billions of across interactions.',
    points: [
      { id: 1, text: 'Next.js Expert', sub: 'Infinite-app architecture for ultra-efficient scalability.' },
      { id: 2, text: 'Frontend Mastery', sub: 'Exceptional performance across browsers and devices.' }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    mainTitle: 'Mobile Native',
    tagline: 'EVERYWHERE',
    description: 'Native Performance',
    detail: 'Crafting seamless mobile experiences that leverage the full power of iOS and Android hardware.',
    points: [
      { id: 1, text: 'React Native', sub: 'One codebase, two platforms, no compromises.' },
      { id: 2, text: 'Native Swift/Kotlin', sub: 'For when you need every ounce of performance.' }
    ]
  },
  {
    id: 'saas',
    title: 'SaaS Platforms',
    mainTitle: 'SaaS Scale',
    tagline: 'CLOUD FIRST',
    description: 'Scalable Systems',
    detail: 'Building multibillion-dollar infrastructure foundations that grow with your user base.',
    points: [
      { id: 1, text: 'Microservices', sub: 'Distributed architecture for maximum uptime and isolation.' },
      { id: 2, text: 'Serverless', sub: 'Auto-scaling infrastructure with zero maintenance overhead.' }
    ]
  },
  {
    id: 'ai',
    title: 'AI Integration',
    mainTitle: 'AI Driven',
    tagline: 'INTELLIGENT',
    description: 'Neural Intelligence',
    detail: 'Integrating cutting-edge LLMs and machine learning models into your business logic.',
    points: [
      { id: 1, text: 'LLM Agents', sub: 'Autonomous workflows powered by Gpt-4 and Gemini.' },
      { id: 2, text: 'Custom Models', sub: 'Fine-tuned models for your specific domain data.' }
    ]
  }
];

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState('web');
  const activeService = services.find(s => s.id === activeTab);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <h2 className={styles.title}>What We Do</h2>
          <div className={styles.tabs}>
            {services.map(service => (
              <button 
                key={service.id}
                className={`${styles.tab} ${activeTab === service.id ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(service.id)}
              >
                {service.title}
                <span className={styles.tabArrow}>→</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.displayCard}>
              <div className={styles.darkOverlay}>
                <div className={styles.cardHeader}>
                  <span className={styles.tagline}>{activeService.tagline}</span>
                  <h3 className={styles.mainTitle}>{activeService.mainTitle}</h3>
                </div>
                <div className={styles.cardBody}>
                  <h4 className={styles.description}>{activeService.description}</h4>
                  <p className={styles.detailText}>{activeService.detail}</p>
                </div>
              </div>
          </div>
          
          <div className={styles.pointsGrid}>
            {activeService.points.map(point => (
              <div key={point.id} className={styles.pointCard}>
                <div className={styles.pointIcon}>✦</div>
                <div className={styles.pointText}>
                  <h5>{point.text}</h5>
                  <p>{point.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
