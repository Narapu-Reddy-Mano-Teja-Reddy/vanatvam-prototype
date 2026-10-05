'use client';
import { motion } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import AccordionGallery from '@/components/premium/AccordionGallery';
import { ConnectivitySection, OtherProjectsSection, DownloadBrochureButton } from '@/app/components/ProjectSections';

export default function Brindavana() {
  
  const galleryItems = [
    { img: '/assets/images/about_hero_bg.webp', title: 'Flourishing Ecosystem', desc: 'Over 85% native forest cover creating a robust, self-sustaining microclimate.' },
    { img: '/assets/images/about_story_forest.webp', title: 'Therapeutic Trails', desc: 'Walkways designed to naturally reduce stress and foster a deep connection with nature.' },
    { img: '/assets/images/dew_drops_leaf.webp', title: 'Organic Regeneration', desc: 'Soil enriched naturally without chemicals, reviving the land to its purest form.' },
    { img: '/assets/images/master_plan_map.webp', title: 'Sustainable Masterplan', desc: 'Every pathway and plot follows the natural topography for zero ecological disruption.' },
  ];


  const specs = [
    { label: 'Location', value: 'Pavagada, Karnataka' },
    { label: 'Total Area', value: '30 Acres' },
    { label: 'Project Status', value: 'Completed & Evolving' },
    { label: 'Green Cover', value: '85%+ Native Forest' },
    { label: 'Key Feature', value: 'Nakshatra Vana Sacred Forest' },
  ];

  return (
    <>
      <Navigation />
      
      <section style={{ height: '80vh', position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/assets/images/about_hero_bg.webp" alt="BRINDAVANA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18, 34, 23, 0.4) 0%, rgba(18, 34, 23, 0.9) 100%)' }}></div>
        </div>

        <div className="container relative" style={{ zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '60px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: '#FFF', borderRadius: '30px', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '30px' }}>
              PAVAGADA · 30 ACRES
            </span>
            
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5.0vw, 5.0rem)', color: '#FFF', lineHeight: 1, marginBottom: '20px' }}>BRINDAVANA</h1>
            
            <p style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', fontWeight: 300, fontFamily: 'var(--font-serif)', fontStyle: 'italic', margin: '0 auto' }}>
              Where roots run deep and nature thrives
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: 'clamp(60px, 8vh, 90px) 0', background: 'var(--bg-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'flex-start' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: '20px' }}>PROJECT OVERVIEW</span>
              
              <div style={{ marginBottom: '40px' }}>
                <img src="/assets/projects/BrindaVana.webp" alt="BRINDAVANA Logo" style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain' }} />
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 2.8vw, 2.8rem)', color: 'var(--bg-dark-forest)', marginBottom: '30px', lineHeight: 1.2 }} dangerouslySetInnerHTML={{ __html: 'A story of land<br/>transformation.' }}>
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-dark)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                <p>Welcome to Brindavana, a 30-acre haven of sustainable, natural farmland nestled amidst the serenity of Krishnapura in the Pavagada Taluk. Here, at Brindavana by Vanatvam, we have woven together the ancient wisdom of our culture with innovative agroforestry and organic farming practices to create a flourishing ecosystem that nourishes both the land and the soul.</p>
                <p>Brindavana is a community of like-minded individuals who share a passion for sustainability, a desire for a simpler way of life, and an emotional connection to our culture. Reconnect with your roots and discover the therapeutic power of immersing yourself in nature.</p>
                <div>
                  <DownloadBrochureButton />
                </div>
              </div>

              <div style={{ marginTop: '60px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--bg-dark-forest)', marginBottom: '30px' }}>Amenities</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
                  {[
                    { title: 'Trekking Path', icon: 'fa-person-hiking' },
                    { title: 'Clubhouse', icon: 'fa-house-chimney-window' },
                    { title: 'Pickleball Court', icon: 'fa-table-tennis-paddle-ball' },
                    { title: 'Eco Cottages', icon: 'fa-house-leaf' }
                  ].map((amenity, i) => (
                    <div key={i} style={{ background: '#FFF', padding: '30px 20px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.03)' }}>
                      <div style={{ fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '15px' }}><i className={`fa-solid ${amenity.icon}`}></i></div>
                      <h4 style={{ fontSize: '1rem', color: 'var(--bg-dark-forest)', fontWeight: 600 }}>{amenity.title}</h4>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '60px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--bg-dark-forest)', marginBottom: '30px' }}>The Vanatvam Advantage</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { title: 'Close Comfort', desc: 'Modern amenities seamlessly integrated with natural landscapes.' },
                    { title: 'Ready and Waiting', desc: 'Fully established infrastructure so you can build your dream farm home immediately.' },
                    { title: 'Growth Corridor', desc: 'Located in high-appreciation zones while maintaining ecological sanctity.' }
                  ].map((adv, i) => (
                    <div key={i} style={{ display: 'flex', gap: '20px', background: '#FFF', padding: '24px', borderRadius: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.02)' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-cream)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>0{i+1}</div>
                      <div>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--bg-dark-forest)', marginBottom: '8px' }}>{adv.title}</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>{adv.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ position: 'sticky', top: '120px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
                <div style={{ gridColumn: '1 / -1', marginBottom: '10px' }}>
                  <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Project Specifications</span>
                </div>
                {specs.map((s, i) => (
                  <div key={s.label} style={{ 
                    gridColumn: i === specs.length - 1 && specs.length % 2 !== 0 ? '1 / -1' : 'auto',
                    background: i === 0 ? 'var(--bg-dark-forest)' : '#FFFFFF', 
                    padding: '24px', 
                    borderRadius: '20px', 
                    border: i === 0 ? 'none' : '1px solid var(--border-light)', 
                    boxShadow: i === 0 ? '0 20px 40px rgba(18,34,23,0.15)' : '0 10px 30px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <span style={{ color: i === 0 ? 'var(--accent-gold)' : 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', fontWeight: 600 }}>{s.label}</span>
                    <strong style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: i === 0 ? '#FFF' : 'var(--bg-dark-forest)', lineHeight: 1.3 }}>{s.value}</strong>
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

            {galleryItems.length > 0 && (
        <section style={{ padding: 'clamp(60px, 8vh, 90px) 0', background: '#FFF' }}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: '20px', textAlign: 'center' }}>GALLERY</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.0vw, 3.0rem)', color: 'var(--bg-dark-forest)', marginBottom: '60px', textAlign: 'center' }}>
                Life at BRINDAVANA
              </h2>
            </motion.div>
            
            <AccordionGallery items={galleryItems} height="500px" />
          </div>
        </section>
      )}

      <ConnectivitySection />
      
      <section style={{ padding: 'clamp(60px, 8vh, 90px) 0', background: 'var(--bg-dark-forest)', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.0vw, 3.0rem)', color: '#FFF', marginBottom: '20px' }}>Experience BRINDAVANA</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
              Schedule a site visit to walk the land and understand the ecological principles driving this community.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-pill btn-pill-gold">Schedule a Site Visit</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <OtherProjectsSection currentProjectId="brindavana" />

      <Footer />
    </>
  );
}
