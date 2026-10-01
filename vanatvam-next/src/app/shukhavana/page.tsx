'use client';
import { motion } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function Shukhavana() {
  const specs = [
    { label: 'Location', value: 'Doddaballapur, near Mysuru Highway' },
    { label: 'Total Area', value: '6 Acres 37 Guntas · 22 Plots' },
    { label: 'Plot Size', value: 'From 6,500 sq.ft' },
    { label: 'Key Feature', value: 'Native Bird Habitat & Organic Farming' },
  ];

  const galleryImages: string[] = [
    '/assets/images/sukhavana.webp',
    '/assets/images/dew_drops_leaf.webp',
    '/assets/images/impact_seedling.webp',
    '/assets/images/about_story_forest.webp',
  ];

  return (
    <>
      <Navigation />
      
      <section style={{ height: '80vh', position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/assets/images/sukhavana.webp" alt="SHUKHAVANA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18, 34, 23, 0.4) 0%, rgba(18, 34, 23, 0.9) 100%)' }}></div>
        </div>

        <div className="container relative" style={{ zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '60px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: '#FFF', borderRadius: '30px', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '30px' }}>
              DODDABALLAPUR · 6.5 ACRES
            </span>
            
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '5rem', color: '#FFF', lineHeight: 1, marginBottom: '20px' }}>SHUKHAVANA</h1>
            
            <p style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', fontWeight: 300, fontFamily: 'var(--font-serif)', fontStyle: 'italic', margin: '0 auto' }}>
              Where Nature, Birds & Happiness Thrive
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '120px 0', background: 'var(--bg-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'flex-start' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: '20px' }}>PROJECT OVERVIEW</span>
              
              <div style={{ marginBottom: '40px' }}>
                <img src="/assets/projects/Sukhavanalogo-e1761722881620.webp" alt="SHUKHAVANA Logo" style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain' }} />
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', color: 'var(--bg-dark-forest)', marginBottom: '30px', lineHeight: 1.2 }} dangerouslySetInnerHTML={{ __html: 'Lifestyle, Livelihood<br/>& Biodiversity.' }}>
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-dark)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                <p>Shukhavana – Where Nature, Birds & Happiness Thrive</p>
              <p>A farmland community near Mysuru that brings you closer to nature, wellness, and sustainable living.</p>
              <p>For over a decade, Vanatvam has been dedicated to sustainable development and rural revival. With Shukhavana, we’ve created more than just farmland — we’ve created a lifestyle rooted in balance, health, and biodiversity.</p>
              <p>Here, you don’t just own land — you become part of a living ecosystem where fresh air, organic farming, and native bird habitats coexist in perfect harmony.</p>
              <p>Located just off the Bengaluru–Mysuru Highway, Shukhavana offers the perfect blend of city convenience and countryside serenity.</p>
              <p>Shukhavana features planned vegetation that nurtures bird habitats, uses solar, wind, soil, and water sustainably, and ensures steady income through short, medium, and long-term crop yields promoting balanced eco-living.</p>
              <p>Borderline plantations include teak, silver oak, and agarwood; inner areas grow areca, coffee, pepper, and fruits, while seasonal crops like vegetables, cereals, and pulses provide continuous harvests year-round.</p>
              <p>Equipped with drip irrigation, a 15x15 ft farm pond per plot serving as a bird watering spot, secure fencing for safety, and centralized maintenance ensuring sustainability, convenience, and ecological care.</p>
              <p>Grow your own fruits, vegetables, and grains naturally — enjoy truly organic, nutritious produce.</p>
              <p>Wake up to chirping birds and find joy in a habitat that supports biodiversity.</p>
              <p>Sustainable design using solar, water, and green systems ensures a future-ready lifestyle.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: '1px solid var(--border-light)', paddingTop: '40px', marginTop: '40px' }}>
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

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ position: 'sticky', top: '120px' }}>
              <div style={{ background: '#FFFFFF', padding: '36px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', border: '1px solid var(--border-light)', marginBottom: '30px' }}>
                <span style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>Project Specifications</span>
                {specs.map((s) => (
                  <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderBottom: '1px solid var(--border-light)', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{s.label}</span>
                    <strong style={{ color: 'var(--bg-dark-forest)', textAlign: 'right', marginLeft: '12px' }}>{s.value}</strong>
                  </div>
                ))}
              </div>

              <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', position: 'relative', marginBottom: '60px' }}>
                <img src="/assets/images/master_plan_map.webp" alt="Master Plan" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', background: 'var(--bg-dark-forest)', color: '#FFF', padding: '40px', borderRadius: '24px', maxWidth: '300px', boxShadow: '0 20px 40px rgba(24, 44, 30, 0.2)' }}>
                  <i className="fa-solid fa-leaf" style={{ fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '20px' }}></i>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '10px' }}>Sustainable Design</h4>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.6, margin: 0 }}>Every aspect of the master plan is dictated by the natural topography and water flow.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {galleryImages.length > 0 && (
        <section style={{ padding: '100px 0', background: '#FFF' }}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: '20px', textAlign: 'center' }}>GALLERY</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--bg-dark-forest)', marginBottom: '60px', textAlign: 'center' }}>
                Life at SHUKHAVANA
              </h2>
            </motion.div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
              {galleryImages.map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  style={{ borderRadius: '16px', overflow: 'hidden', height: '350px' }}
                >
                  <img src={img} alt={`SHUKHAVANA gallery ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: '100px 0', background: 'var(--bg-dark-forest)', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: '#FFF', marginBottom: '20px' }}>Experience SHUKHAVANA</h2>
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
