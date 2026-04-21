'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './contact.module.css';

export default function ContactPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className={styles.contactPage}>
      <Navbar />

      <main className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Left Side: Info */}
          <div className={styles.infoSection}>
            <motion.div 
              className={styles.statusTag}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className={styles.dot} />
              AVAILABLE FOR NEW PROJECTS
            </motion.div>

            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Let's build the <br />
              <span className={styles.accent}>future</span> together.
            </motion.h1>

            <motion.p 
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Have a vision that needs high-end execution? Our studio bridges the 
              gap between complex engineering and ethereal design.
            </motion.p>

            <div className={styles.advantageList}>
              {[
                {
                  icon: <Sparkles size={24} />,
                  title: "Atmospheric Design",
                  desc: "Interfaces that breathe. We use light and depth to create immersive user journeys."
                },
                {
                  icon: <Zap size={24} />,
                  title: "Rapid Deployment",
                  desc: "Advanced tech stacks that prioritize speed without compromising on pixel-perfection."
                },
                {
                  icon: <ShieldCheck size={24} />,
                  title: "Post-Launch Care",
                  desc: "We don't just ship and dip. Our teams provide ongoing optimization and support."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className={styles.advantageItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <div className={styles.iconBox}>{item.icon}</div>
                  <div>
                    <h3 className={styles.advTitle}>{item.title}</h3>
                    <p className={styles.advDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className={styles.formWrapper}>
            <motion.div 
              className={styles.badge}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Clock size={16} />
              <span>Response Time: We respond within 24 hours</span>
            </motion.div>

            <motion.div 
              className={styles.formCard}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <form onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.fieldLabel}>Full Name</label>
                    <input type="text" placeholder="John Doe" className={styles.inputField} />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.fieldLabel}>Email Address</label>
                    <input type="email" placeholder="john@company.com" className={styles.inputField} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.fieldLabel}>Project Budget</label>
                  <select className={styles.selectField}>
                    <option value="">Select a range</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.fieldLabel}>Your Vision</label>
                  <textarea 
                    placeholder="Tell us about your project goals..." 
                    className={styles.textareaField}
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Initialize Project <ArrowRight size={20} />
                </button>

                <p className={styles.legalText}>
                  By clicking submit, you agree to our <a href="#">Privacy Policy</a>.
                </p>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Trusted By Bar */}
        <motion.div 
          className={styles.trustedBar}
          {...fadeInUp}
        >
          <span className={styles.trustedLabel}>TRUSTED GLOBALLY BY</span>
          <div className={styles.logoRow}>
            <span className={styles.logoText}>LUMOS</span>
            <span className={styles.logoText}>KINETIC.</span>
            <span className={styles.logoText}>OXYGN</span>
            <span className={styles.logoText}>ZEPHYR</span>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
