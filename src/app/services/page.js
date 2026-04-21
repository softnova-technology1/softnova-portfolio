'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, 
  Smartphone, 
  Layers, 
  Cpu, 
  ArrowRight, 
  AlertCircle, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  MousePointer2 
} from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './services.module.css';

const services = [
  {
    id: 'web',
    title: 'Web Development',
    sub: 'High-end architecture',
    icon: <Monitor size={20} />,
    description: 'Crafting ultra-fast, visually stunning web experiences that set new standards for interaction design and accessibility.',
    features: [
      {
        title: 'The Friction',
        desc: 'Fragmented user journeys and slow-loading legacy architectures stalling growth.',
        icon: <AlertCircle size={20} />,
        type: 'red'
      },
      {
        title: 'The Catalyst',
        desc: 'Headless CMS integration with edge-optimized rendering for instant loading.',
        icon: <Zap size={20} />,
        type: 'blue-bg'
      },
      {
        title: 'The Impact',
        desc: 'A 400% increase in performance metrics and triple the conversion rate.',
        icon: <TrendingUp size={20} />,
        type: 'purple'
      }
    ],
    visuals: {
      type: 'immersive',
      title: 'Immersive UI',
      desc: 'Motion-driven layouts that breathe.'
    },
    performance: {
      title: 'Atomic Performance',
      items: [
        'Sub-200ms TTFB response times',
        'Server-side rendering (SSR)',
        'Full Accessibility Compliance (WCAG)'
      ]
    }
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    sub: 'Native experiences',
    icon: <Smartphone size={20} />,
    description: 'Developing high-performance native and cross-platform mobile applications that provide seamless user experiences across all devices.',
    features: [
      {
        title: 'The Challenge',
        desc: 'Clunky interfaces and inconsistent performance across different mobile OS versions.',
        icon: <AlertCircle size={20} />,
        type: 'red'
      },
      {
        title: 'The Solution',
        desc: 'React Native and Flutter experts building fluid, high-fidelity mobile interactions.',
        icon: <Zap size={20} />,
        type: 'blue-bg'
      },
      {
        title: 'The Results',
        desc: 'Top-tier App Store ratings and industry-leading user retention rates.',
        icon: <TrendingUp size={20} />,
        type: 'purple'
      }
    ],
    visuals: {
      type: 'immersive',
      title: 'Native Feel',
      desc: 'Haptic feedback and fluid gestures.'
    },
    performance: {
      title: 'Device Optimization',
      items: [
        '60fps smooth animations',
        'Offline-first capabilities',
        'Battery-efficient background tasks'
      ]
    }
  },
  {
    id: 'saas',
    title: 'SaaS Platforms',
    sub: 'Scalable ecosystems',
    icon: <Layers size={20} />,
    description: 'Building robust, scalable SaaS solutions designed to handle millions of users while maintaining peak performance and security.',
    features: [
      {
        title: 'The Barrier',
        desc: 'Monolithic systems that cannot scale or adapt to rapidly changing market demands.',
        icon: <AlertCircle size={20} />,
        type: 'red'
      },
      {
        title: 'The Engine',
        desc: 'Microservices architecture with automated scaling and multi-tenant security.',
        icon: <Zap size={20} />,
        type: 'blue-bg'
      },
      {
        title: 'The Scale',
        desc: 'Infrastructure that grows with you, from MVP to enterprise global scale.',
        icon: <TrendingUp size={20} />,
        type: 'purple'
      }
    ],
    visuals: {
      type: 'immersive',
      title: 'Scaling Architecture',
      desc: 'Distributed systems built for growth.'
    },
    performance: {
      title: 'Enterprise Grade',
      items: [
        '99.99% Uptime guarantees',
        'Real-time data synchronization',
        'Advanced security & encryption'
      ]
    }
  },
  {
    id: 'ai',
    title: 'AI Solutions',
    sub: 'Neural intelligence',
    icon: <Cpu size={20} />,
    description: 'Integrating cutting-edge artificial intelligence and machine learning to automate processes and provide deep analytical insights.',
    features: [
      {
        title: 'The Complexity',
        desc: 'Vast amounts of unutilized data and inefficient manual decision-making processes.',
        icon: <AlertCircle size={20} />,
        type: 'red'
      },
      {
        title: 'The Brain',
        desc: 'Custom LLMs and predictive models tailored to your specific business logic.',
        icon: <Zap size={20} />,
        type: 'blue-bg'
      },
      {
        title: 'The Insight',
        desc: 'Automated workflows and predictive analytics that drive strategic growth.',
        icon: <TrendingUp size={20} />,
        type: 'purple'
      }
    ],
    visuals: {
      type: 'immersive',
      title: 'Neural Networks',
      desc: 'Smart systems that learn and adapt.'
    },
    performance: {
      title: 'Intelligent Stats',
      items: [
        'Proprietary model training',
        'API-first integration',
        'Ethical & secure AI frameworks'
      ]
    }
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(services[0]);

  return (
    <div className={styles.servicesPage}>
      <Navbar />
      
      <main className="container">
        <section className={styles.hero}>
          <motion.span 
            className={styles.subheading}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Craftsmanship
          </motion.span>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Digital Precision. 
            <span className={styles.accentText}>Ethereal Motion.</span>
          </motion.h1>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We don't just build software; we curate atmospheric digital experiences 
            that harmonize high-performance engineering with editorial aesthetics.
          </motion.p>
        </section>

        <section className={styles.mainSection}>
          <div className={styles.sidebar}>
            {services.map((service) => (
              <div 
                key={service.id}
                className={`${styles.serviceNav} ${activeTab.id === service.id ? styles.activeService : ''}`}
                onClick={() => setActiveTab(service)}
              >
                <div className={styles.navIcon}>{service.icon}</div>
                <div className={styles.navInfo}>
                  <span className={styles.navLabel}>{service.title}</span>
                  <span className={styles.navSub}>{service.sub}</span>
                </div>
                {activeTab.id === service.id && <ArrowRight size={16} color="#2563eb" />}
              </div>
            ))}
          </div>

          <div className={styles.content}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className={styles.contentCard}
              >
                <div className={styles.cardHeader}>
                  <h2>{activeTab.title}</h2>
                  <p>{activeTab.description}</p>
                </div>

                <div className={styles.featureGrid}>
                  {activeTab.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className={`${styles.featureCard} ${feature.type === 'blue-bg' ? styles.blueCard : ''}`}
                    >
                      <div className={`${styles.iconWrapper} ${
                        feature.type === 'red' ? styles.redIcon : 
                        feature.type === 'purple' ? styles.purpleIcon : 
                        styles.blueIcon
                      }`}>
                        {feature.icon}
                      </div>
                      <span className={styles.featureTitle}>{feature.title}</span>
                      <p className={styles.featureDesc}>{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.bottomGrid}>
                  <div className={styles.visualCard}>
                    <Image 
                      src="/images/dashboard.png" 
                      alt="Dashboard Preview" 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.visualOverlay}>
                      <span className={styles.visualTitle}>{activeTab.visuals.title}</span>
                      <span className={styles.visualDesc}>{activeTab.visuals.desc}</span>
                    </div>
                  </div>

                  <div className={styles.performanceCard}>
                    <div className={styles.perfHeader}>
                      <MousePointer2 size={24} color="#2563eb" />
                      <span className={styles.perfTitle}>{activeTab.performance.title}</span>
                    </div>
                    <div className={styles.perfList}>
                      {activeTab.performance.items.map((item, idx) => (
                        <div key={idx} className={styles.perfItem}>
                          <CheckCircle2 size={16} className={styles.checkIcon} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className={styles.trustedSection}>
          <div className={styles.trustedGrid}>
            <div className={styles.trustedInfo}>
              <h2>Trusted by Global Visionaries.</h2>
              <p>We partner with founders who demand more than "good enough." Our solutions are currently powering over 200+ enterprise-grade platforms.</p>
              
              <div className={styles.statsRow}>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>200+</span>
                  <span className={styles.statLabel}>Launches</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>98%</span>
                  <span className={styles.statLabel}>Retention</span>
                </div>
              </div>
            </div>

            <div className={styles.masonryGrid}>
              <div className={styles.gridItem}>
                <div className={styles.gridImage}>
                  <Image 
                    src="/images/office-1.png" 
                    alt="Our Office" 
                    fill
                    style={{ objectFit: 'cover', filter: 'grayscale(1)' }}
                  />
                </div>
              </div>
              <div className={`${styles.gridItem} ${styles.mediumBlue} ${styles.quoteCard}`}>
                <p className={styles.quoteText}>"The speed of execution was only matched by the elegance of the code."</p>
              </div>
              <div className={`${styles.gridItem} ${styles.darkBlue} ${styles.quoteCard}`}>
                <p className={styles.quoteText}>"SoftNova didn't just build our app; they redefined our brand's digital soul."</p>
              </div>
              <div className={styles.gridItem}>
                <div className={styles.gridImage}>
                  <Image 
                    src="/images/office-2.png" 
                    alt="Meeting Room" 
                    fill
                    style={{ objectFit: 'cover', filter: 'grayscale(1)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
