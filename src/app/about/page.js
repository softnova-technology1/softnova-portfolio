'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Eye, 
  CheckCircle2, 
  Zap, 
  MapPin, 
  ShieldCheck,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './about.module.css';

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
  };

  return (
    <div className={styles.aboutPage}>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className={styles.label}>PRECISION IN MOTION</span>
                <h1 className={styles.title}>
                  Pioneering the <br />
                  <span className={styles.accent}>Next Digital Epoch</span>
                </h1>
                <p className={styles.description}>
                  SoftNova isn't just an IT solutions firm; we are the architectural engine behind 
                  modern digital transformation. We bridge the gap between complex technical 
                  infrastructure and human-centric business goals.
                </p>
                <div className={styles.heroBtns}>
                  <button className={styles.btnPrimary}>Our Journey</button>
                  <button className={styles.btnSecondary}>Meet the Team</button>
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.heroImageWrapper}
                initial={{ opacity: 0, x: 30, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image 
                  src="/images/about_hero.png" 
                  alt="Modern Minimalist Office" 
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className={styles.missionVision}>
          <div className={styles.container}>
            <div className={styles.mvGrid}>
              <motion.div 
                className={`${styles.mvCard} ${styles.missionCard}`}
                {...fadeInUp}
              >
                <div className={`${styles.mvIcon} ${styles.missionIcon}`}>
                  <Brain size={28} />
                </div>
                <h2 className={styles.mvTitle}>Our Mission</h2>
                <p className={styles.mvText}>
                  To empower global enterprises by delivering high-fidelity IT solutions that prioritize 
                  scalability, security, and sophisticated user experience. We transform friction into flow.
                </p>
              </motion.div>

              <motion.div 
                className={`${styles.mvCard} ${styles.visionCard}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={`${styles.mvIcon} ${styles.visionIcon}`}>
                  <Eye size={28} />
                </div>
                <h2 className={styles.mvTitle}>Our Vision</h2>
                <p className={styles.mvText}>
                  To become the definitive global standard for etheric enterprise architecture, where 
                  digital infrastructure feels invisible yet remains indestructible.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why SoftNova Section */}
        <section className={styles.whySection}>
          <div className={styles.container}>
            <div className={styles.whyHeader}>
              <motion.h2 className={styles.whyTitle} {...fadeInUp}>Why SoftNova?</motion.h2>
              <motion.p className={styles.whyDesc} {...fadeInUp}>
                Our approach combines industrial-grade engineering with boutique-level attention to detail. 
                This is how we redefine excellence.
              </motion.p>
            </div>

            <div className={styles.featureGrid}>
              <motion.div className={styles.largeFeature} {...fadeInUp}>
                <div className={styles.featIcon}><CheckCircle2 size={24} /></div>
                <h3 className={styles.featTitle}>Uncompromising Quality</h3>
                <p className={styles.featDesc}>
                  Every line of code and every cloud architecture configuration undergoes a rigorous 
                  multi-tier audit process to ensure peak performance and 99.9% uptime.
                </p>
              </motion.div>

              <div className={styles.rightColumn}>
                <motion.div 
                  className={styles.mediumFeature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className={styles.featIcon}><Zap size={24} /></div>
                  <h3 className={styles.featTitle}>Unrivaled Scale</h3>
                  <p className={styles.featDesc}>
                    Systems designed to grow from pilot to global deployment without rewriting a single component.
                  </p>
                </motion.div>

                <div className={styles.smallGrid}>
                  <motion.div 
                    className={styles.smallFeature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className={styles.featIcon}><MapPin size={20} /></div>
                    <h3 className={styles.featTitle}>Deep Expertise</h3>
                    <p className={styles.featDesc}>
                      Our architects hold elite certifications in major cloud domains.
                    </p>
                  </motion.div>
                  <motion.div 
                    className={styles.smallFeature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className={styles.featIcon}><ShieldCheck size={20} /></div>
                    <h3 className={styles.featTitle}>Fortress Security</h3>
                    <p className={styles.featDesc}>
                      Security is woven into the DNA of everything we build.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <motion.div 
              className={styles.ctaBox}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.ctaPattern}></div>
              <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>Ready to evolve your stack?</h2>
                <p className={styles.ctaDesc}>
                  Join the dozens of Fortune 500 companies that trust SoftNova with their 
                  most critical digital assets.
                </p>
                <button className={styles.ctaBtn}>
                  Start a Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
