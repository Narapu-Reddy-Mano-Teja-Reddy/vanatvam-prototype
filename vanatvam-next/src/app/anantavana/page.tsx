'use client';
import { motion } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import AccordionGallery from '@/components/premium/AccordionGallery';

export default function Anantavana() {
  const specs = [
    { label: 'Location', value: 'Near Kabini, Karnataka' },
    { label: 'Total Area', value: '35 Acres' },
    { label: 'Ecosystem Type', value: 'Wildlife Corridor Buffer' },
    { label: 'Green Cover', value: '82%+ Native Canopy' },
  ];

  
  const galleryItems = [
    { img: '/assets/images/anantavana.webp', title: 'Wildlife Corridor', desc: 'Acting as a gentle buffer for the Bandipur and Nagarhole sanctuaries.' },
    { img: '/assets/images/madhu_vana.webp', title: 'Heritage Architecture', desc: 'Built around a restored 1976 traditional home, preserving local cultural legacy.' },
    { img: '/assets/images/about_story_forest.webp', title: 'Native Biodiversity', desc: 'Over 82% native canopy providing safe passage for regional fauna.' },
    { img: '/assets/images/master_plan_map.webp', title: 'Low-Impact Design', desc: 'Extremely low density footprints ensuring nature remains the dominant force.' },
  ];


  return (
    <>
      <Navigation />
      
      <section style={{ height: '80vh', position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/assets/images/anantavana.webp" alt="ANANTAVANA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18, 34, 23, 0.4) 0%, rgba(18, 34, 23, 0.9) 100%)' }}></div>
        </div>

        <div className="container relative" style={{ zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '60px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: '#FFF', borderRadius: '30px', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '30px' }}>
              NEAR KABINI · 35 ACRES
            </span>
            
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5.0vw, 5.0rem)', color: '#FFF', lineHeight: 1, marginBottom: '20px' }}>ANANTAVANA</h1>
            
            <p style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', fontWeight: 300, fontFamily: 'var(--font-serif)', fontStyle: 'italic', margin: '0 auto' }}>
              The Wildlife Buffer Sanctuary
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
                <img src="/assets/projects/Anantavana.webp" alt="ANANTAVANA Logo" style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain' }} />
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 2.8vw, 2.8rem)', color: 'var(--bg-dark-forest)', marginBottom: '30px', lineHeight: 1.2 }} dangerouslySetInnerHTML={{ __html: 'Harmony between<br/>Land and Life.' }}>
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-dark)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                <p>Kabini – The land of spectacular landscapes and wildlife.</p>
              <p>The rustle of leaves blowing in the wind, the deep silence of the forest, the chirping of birds and the calmness of River Kabini, all whisper the breathtaking beauty of this most wonderful land. Everyone, from a wildlife enthusiast to the nature lover, and the average citizen have a reason to love Kabini, known as one of the country’s richest biodiversity spots.</p>
              <p>AnantaVana is a sustainable natural re-forestation project in Kabini for nature lovers. Here, VanaTvam in association with Indus Herbs is creating a niche community of land owners who understand, appreciate, and consciously participate in sustaining the unique biosphere of Kabini. This limited edition one acre plot of land is a personal nature retreat that one can plug into to recharge the body and spirit!</p>
              <p>While set amid Kabini AnantaVana’s features are eco-friendly and are designed to merge with the natural elements of Kabini’s landscape.</p>
              <p>Landscape features like walking tracks, gazebos, decks integrated into design</p>
              <p>Large green cul-de-sacs with theme gardens</p>
              <p>Pause points with seating along the walking track</p>
              <p>Storm-water channels along natural valleys & slopes</p>
              <p>Wetland or pond to Harvest rain water and more..</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: '1px solid var(--border-light)', paddingTop: '40px', marginTop: '40px' }}>
                <div>
                  <h4 style={{ color: 'var(--bg-dark-forest)', marginBottom: '10px', fontSize: '1.2rem' }}>Heritage Heaven Since 1976</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>At the heart of the community stands a charming heritage home with earthy tones and traditional architecture, preserving a bygone era.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--bg-dark-forest)', marginBottom: '10px', fontSize: '1.2rem' }}>Kabini Wildlife</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>An immersive experience featuring traditional tree machans, beekeeping, and a natural pond amidst a stunning landscape frequented by wildlife.</p>
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
                Life at ANANTAVANA
              </h2>
            </motion.div>
            
            <AccordionGallery items={galleryItems} height="500px" />
          </div>
        </section>
      )}

      <section style={{ padding: 'clamp(60px, 8vh, 90px) 0', background: 'var(--bg-dark-forest)', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.0vw, 3.0rem)', color: '#FFF', marginBottom: '20px' }}>Experience ANANTAVANA</h2>
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
