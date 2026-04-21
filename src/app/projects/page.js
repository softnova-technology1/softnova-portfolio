'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Search, 
  Hexagon, 
  Rocket, 
  AlertTriangle, 
  Clock, 
  ChevronRight 
} from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './projects.module.css';

export default function CaseStudyPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
  };

  return (
    <div className={styles.caseStudyPage}>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <Image 
              src="/images/hero_case_study.png" 
              alt="Futuristic Architecture" 
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <motion.span 
                className={styles.category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                PROJECT: FINTECH INNOVATION
              </motion.span>
              <motion.h1 
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Revolutionizing <br />Digital Liquidity.
              </motion.h1>
              <motion.p 
                className={styles.description}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                How SoftNova scaled a legacy banking infrastructure into a cloud-native powerhouse, 
                processing over $12B in daily transactions with zero latency.
              </motion.p>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className={styles.challengeSection}>
          <div className={styles.container}>
            <div className={styles.challengeGrid}>
              <motion.div {...fadeInUp}>
                <span className={styles.challengeLabel}>THE CHALLENGE</span>
                <h2 className={styles.challengeTitle}>The Friction of <br />Legacy Systems.</h2>
                <p className={styles.challengeText}>
                  The silent but critical bottlenecks in transaction settlement. Their aging monolithic architecture 
                  was unable to handle the surging global digital payments, leading to system timeouts and massive operational overhead.
                </p>
                <div className={styles.bulletList}>
                  <div className={styles.bulletItem}>
                    <AlertTriangle className={styles.bulletIcon} size={18} />
                    <span>4.2s average latency per transaction settlement.</span>
                  </div>
                  <div className={styles.bulletItem}>
                    <Clock className={styles.bulletIcon} size={18} />
                    <span>Inability to scale during peak market volatility.</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className={styles.challengeImgWrapper}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image 
                  src="/images/server_rack.png" 
                  alt="Server Rack Information" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className={styles.methodologySection}>
          <div className={styles.container}>
            <div className={styles.methodologyHeader}>
              <motion.span className={styles.methodologyLabel} {...fadeInUp}>
                OUR METHODOLOGY
              </motion.span>
              <motion.h2 className={styles.methodologyTitle} {...fadeInUp}>
                Human-Centric Engineering.
              </motion.h2>
              <motion.p className={styles.methodologyDesc} {...fadeInUp}>
                We didn't just write code; we re-engineered the user journey from the ground up using our proprietary Nova Framework.
              </motion.p>
            </div>

            <div className={styles.featureGrid}>
              {[
                {
                  icon: <Search size={22} />,
                  title: "Deep Audit",
                  desc: "Mapping every touchpoint within the existing ecosystem to identify silent focus points."
                },
                {
                  icon: <Hexagon size={22} />,
                  title: "Microservices",
                  desc: "Deconstructing the monolith into elastic, containerized services for infinite scalability."
                },
                {
                  icon: <Rocket size={22} />,
                  title: "Swift-Deploy",
                  desc: "Implementing CI/CD pipelines that reduced deployment cycles from weeks to minutes."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={styles.iconWrapper}>{item.icon}</div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results/Nova Section */}
        <section className={styles.novaSection}>
          <div className={styles.novaBg}>
            <Image 
              src="/images/nova_bg.png" 
              alt="Technical Background" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.container}>
            <div className={styles.novaContent}>
              <motion.span className={styles.novaLabel} {...fadeInUp}>
                THE SOLUTION
              </motion.span>
              <motion.h2 className={styles.novaTitle} {...fadeInUp}>
                The Nova Framework.
              </motion.h2>
              
              <div className={styles.statsGrid}>
                {[
                  { value: "99.9%", l: "UPTIME ACHIEVED" },
                  { value: "-80%", l: "LATENCY REDUCTION" },
                  { value: "12M+", l: "DAILY USERS" },
                  { value: "2x", l: "ROI IN 6 MONTHS" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i} 
                    className={styles.statCard}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.l}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Explore More Section */}
        <section className={styles.exploreSection}>
          <div className={styles.container}>
            <h2 className={styles.exploreTitle}>Explore More Stories</h2>
            <div className={styles.exploreGrid}>
              {[
                "/images/mobile_app.png",
                "/images/network_mesh.png",
                "/images/hero_case_study.png", // Reusing for variety
                "/images/server_rack.png",   // Reusing for variety
                "/images/nova_bg.png"        // Reusing for variety
              ].map((img, i) => (
                <motion.div 
                  key={i} 
                  className={styles.exploreCard}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <Image 
                    src={img} 
                    alt={`Case Study ${i+1}`} 
                    fill
                    className={styles.exploreImg}
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
