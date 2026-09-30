'use client';
import { motion } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      <Navigation />
      <section className="hero hero-about" style={{ height: '50vh', minHeight: '400px' }}>
        <div className="hero-bg-wrapper">
          <img src="/assets/images/cta_sunset_bg.webp" alt="Contact Vanatvam" className="hero-bg-img" />
        </div>
        <div className="hero-overlay" style={{ background: 'linear-gradient(180deg, rgba(18, 34, 23, 0.6) 0%, rgba(18, 34, 23, 0.9) 100%)' }}></div>
        <div className="container relative z-10">
          <motion.div className="hero-content" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1 className="hero-title" variants={fadeIn}>Get In Touch</motion.h1>
            <motion.p className="hero-desc" variants={fadeIn}>Reach out to us to book a site visit, inquire about managed farmland investment, or learn more about our ecological communities.</motion.p>
          </motion.div>
        </div>
      </section>
      <motion.section style={{ padding: '90px 0', background: 'var(--bg-cream)' }} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <motion.div variants={fadeIn} style={{ background: '#FFFFFF', padding: '40px', borderRadius: 'var(--radius-md)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '20px' }}>Contact Information</h2>
              <div style={{ marginBottom: '20px' }}>
                <strong><i className="fa-solid fa-phone" style={{ color: 'var(--accent-gold)', marginRight: '10px' }}></i> Phone</strong>
                <p>+91 99999 99999</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <strong><i className="fa-solid fa-envelope" style={{ color: 'var(--accent-gold)', marginRight: '10px' }}></i> Email</strong>
                <p>hello@vanatvam.com</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <strong><i className="fa-solid fa-location-dot" style={{ color: 'var(--accent-gold)', marginRight: '10px' }}></i> Office</strong>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} style={{ background: '#FFFFFF', padding: '40px', borderRadius: 'var(--radius-md)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '20px' }}>Send a Message</h2>
              <form>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control" rows={4}></textarea>
                </div>
                <button type="submit" className="btn-pill btn-pill-dark" style={{ width: '100%', justifyContent: 'center' }}>Submit Inquiry</button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
