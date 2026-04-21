'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Star, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './projects.module.css';

const projects = [
  {
    id: "01",
    title: "TravelEasy",
    category: "Travel & Leisure",
    image: "/images/mobile_app.png",
    description: "Simplifying global travel with a high-performance booking engine and real-time itinerary synchronization for the modern explorer.",
    tags: ["React Native", "Firebase", "API Integration"]
  },
  {
    id: "02",
    title: "Tamizhi",
    category: "Culture & Platforms",
    image: "/images/dashboard.png",
    description: "A digital sanctuary for heritage and language, optimizing complex content delivery with an intuitive, minimalist interface.",
    tags: ["Next.js", "GraphQL", "Tailwind"]
  },
  {
    id: "03",
    title: "CRM System",
    category: "Enterprise Solutions",
    image: "/images/server_rack.png",
    description: "Empowering sales teams with data intelligence and automated lead nurturing to drive exponential business growth.",
    tags: ["Node.js", "PostgreSQL", "React"]
  },
  {
    id: "04",
    title: "School Management",
    category: "EduTech",
    image: "/images/hero_case_study.png",
    description: "Unifying administrative workflows and classroom interaction into a seamless, cloud-native educational ecosystem.",
    tags: ["TypeSript", "Docker", "AWS"]
  },
  {
    id: "05",
    title: "Truck Logistics",
    category: "Logistics & Transport",
    image: "/images/network_mesh.png",
    description: "Visualizing the backbone of global supply chains with real-time fleet tracking and intelligent route optimization.",
    tags: ["D3.js", "Rust", "GCP"]
  },
  {
    id: "06",
    title: "Lal Care",
    category: "Healthcare & Wellness",
    image: "/images/nova_bg.png",
    description: "Bridging the gap between medical expertise and patient care through secure, neural-enabled health management platforms.",
    tags: ["AI", "Security", "React"]
  }
];

export default function ProjectsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
  };

  return (
    <div className={styles.projectsPage}>
      <Navbar />

      <section className={styles.header}>
        <div className={styles.heroImageBg}>
          <Image 
            src="/images/about_hero.png" 
            alt="SoftNova Portfolio"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        <div className={styles.headerContent}>
          <motion.span 
            className={styles.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            The SoftNova Collection
          </motion.span>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Building the Future <br /> of Enterprise.
          </motion.h1>
          <motion.p 
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            A strategic collection of digital landmarks in logistics, 
            healthcare, and unified enterprise ecosystems.
          </motion.p>
          <motion.button 
            className={styles.heroBtn}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Contact for Collaboration
          </motion.button>
        </div>
      </section>

      <main className={styles.container}>
        <div className={styles.projectList}>
          {projects.map((project, i) => (
            <div key={project.id} className={styles.projectSection}>
              <div className={`${styles.projectRow} ${i % 2 === 0 ? styles.reverseRow : ''}`}>
                <motion.div 
                  className={styles.imageContainer}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.imageInner}>
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className={styles.infoBox}
                  {...fadeInUp}
                >
                  <span className={styles.id}>{project.id} — {project.category}</span>
                  <h2 className={styles.pTitle}>{project.title}</h2>
                  <p className={styles.pDesc}>{project.description}</p>
                  
                  <div className={styles.meta}>
                    {project.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>

                  <button className={styles.actionBtn}>
                    Explore Case Study <ArrowUpRight size={20} />
                  </button>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
        <section className={styles.reviewsSection}>
          <div className={styles.reviewsContainer}>
            <div className={styles.reviewsHeader}>
              <motion.h2 className={styles.reviewTitle} {...fadeInUp}>
                Read reviews, <br />ride with confidence.
              </motion.h2>
              <motion.div className={styles.trustpilot} {...fadeInUp}>
                <span>4.2/5</span>
                <div className={styles.starGroup}>
                  <Star size={20} fill="#00b67a" color="#00b67a" />
                  <span>Trustpilot</span>
                </div>
                <span>Based on 5210 reviews</span>
              </motion.div>
            </div>

            <div className={styles.reviewsContent}>
              <motion.div className={styles.reviewsSidebar} {...fadeInUp}>
                <div className={styles.quoteLarge}>“</div>
                <h3 className={styles.sidebarTitle}>What our <br />customers are <br />saying</h3>
                <div className={styles.navControls}>
                  <ChevronLeft className={styles.navArrow} size={24} />
                  <div className={styles.navLine}>
                    <div className={styles.navDot}></div>
                  </div>
                  <ChevronRight className={styles.navArrow} size={24} />
                </div>
              </motion.div>

              <div className={styles.marqueeContainer}>
                <motion.div 
                  className={styles.marqueeTrack}
                  animate={{ x: [0, -1200] }}
                  transition={{ 
                    duration: 30, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  {[...testimonials, ...testimonials].map((t, i) => (
                    <div key={i} className={styles.reviewCard}>
                      <div className={styles.stars}>
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} size={16} fill="#00b67a" color="#00b67a" />
                        ))}
                      </div>
                      <p className={styles.quote}>{t.quote}</p>
                      <div className={styles.author}>
                        <div className={styles.authorImg}></div>
                        <div className={styles.authorInfo}>
                          <span className={styles.authorName}>{t.name}</span>
                          <span className={styles.authorRole}>{t.role} — 1 week ago</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const testimonials = [
  {
    quote: "SoftNova's technical precision is unmatched. They delivered TravelEasy on time and under budget.",
    name: "Alexander Volkov",
    role: "CEO, Global Travel"
  },
  {
    quote: "Tamizhi 3.0 has transformed how we connect with our heritage. Truly architectural code.",
    name: "Arun Kumar",
    role: "Founder, Tamil Culture Org"
  },
  {
    quote: "The CRM system they built integrated perfectly with our legacy stack. Exceptional work.",
    name: "Sarah Jenkins",
    role: "CTO, Enterprise X"
  },
  {
    quote: "Seamless logistics tracking. The Truck app is a game changer for our fleet operations.",
    name: "Marcus Thorne",
    role: "Operations Head, Logistics Pro"
  }
];
