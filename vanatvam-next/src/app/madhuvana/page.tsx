'use client';
import { motion } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function Madhuvana() {
  return (
    <>
      <Navigation />
      
      <section style={{ height: '80vh', position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/assets/images/madhu_vana.webp" alt="MADHUVANA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18, 34, 23, 0.3) 0%, rgba(18, 34, 23, 0.85) 100%)' }}></div>
        </div>

        <div className="container relative" style={{ zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: '#FFF', borderRadius: '30px', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>
              MADDUR · 18 ACRES
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '5rem', color: '#FFF', lineHeight: 1, marginBottom: '20px' }}>MADHUVANA</h1>
            <p style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', fontWeight: 300, fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
              The Water-Forest Ecosystem
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '120px 0', background: 'var(--bg-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: '20px' }}>PROJECT OVERVIEW</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--bg-dark-forest)', marginBottom: '30px', lineHeight: 1.2 }}>
                Harmony between<br/>Land and Life.
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: 1.8, marginBottom: '20px' }}>
                Located near the fertile belt of Maddur, Madhuvana is designed as a dense "water-forest". The core philosophy here is hydro-centric landscaping, ensuring that every drop of rain is captured, slowed down, and allowed to percolate into the aquifers.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: 1.8, marginBottom: '40px' }}>
                With over 250 species of native trees acting as a natural canopy, Madhuvana offers an immersive farm living experience. The community benefits from organic farm plots, ancient Nakshatra Vana layouts, and a meticulously crafted 3D master plan prioritizing natural contours.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: '1px solid var(--border-light)', paddingTop: '40px' }}>
                <div>
                  <h4 style={{ color: 'var(--bg-dark-forest)', marginBottom: '10px', fontSize: '1.2rem' }}>Ecological Impact</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Designed to restore soil health, recharge aquifers, and provide a sanctuary for local flora and fauna.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--bg-dark-forest)', marginBottom: '10px', fontSize: '1.2rem' }}>Community Living</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Low-density footprints ensuring maximum privacy and minimal disturbance to the natural surroundings.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ position: 'relative' }}>
              <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
                <img src="/assets/images/master_plan_map.webp" alt="Master Plan" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', background: 'var(--bg-dark-forest)', color: '#FFF', padding: '40px', borderRadius: '24px', maxWidth: '300px', boxShadow: '0 20px 40px rgba(24, 44, 30, 0.2)' }}>
                <i className="fa-solid fa-leaf" style={{ fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '20px' }}></i>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '10px' }}>Sustainable Design</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6, margin: 0 }}>Every aspect of the master plan is dictated by the natural topography and water flow.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: 'var(--bg-dark-forest)', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: '#FFF', marginBottom: '20px' }}>Experience MADHUVANA</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
              Schedule a site visit to walk the land and understand the ecological principles driving this community.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-pill btn-pill-gold">Book a Site Visit</Link>
              <Link href="/projects" className="btn-pill btn-pill-outline" style={{ color: '#FFF', borderColor: 'rgba(255,255,255,0.3)' }}>Back to Projects</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
