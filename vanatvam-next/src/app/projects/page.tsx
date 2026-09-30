'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'brindavana',
      category: 'completed',
      name: 'BRINDAVANA',
      logo: '/assets/projects/BrindaVana.webp',
      location: 'PAVAGADA · 30 ACRES',
      desc: 'Our benchmark project demonstrating ecological restoration. What began as largely barren land is evolving into a thriving green ecosystem with deep water harvesting and native tree canopy.',
      img: '/assets/images/about_hero_bg.webp',
      badge: 'Completed',
      badgeBg: 'var(--bg-dark-forest)',
      pills: ['Native Canopy', 'Rain Catchments']
    },
    {
      id: 'madhuvana',
      category: 'water',
      name: 'MADHUVANA',
      logo: '/assets/projects/Logo-MadhuVana.svg',
      location: 'MADDUR · 18 ACRES',
      desc: 'A pristine water-forest ecosystem built around 250+ native tree species. Features interactive master planning, deep water recharge zones, and sustainable organic farm plots.',
      img: '/assets/images/madhu_vana.webp',
      badge: 'Water Forest',
      badgeBg: 'var(--accent-gold)',
      pills: ['250+ Native Trees', '3D Master Plan']
    },
    {
      id: 'anantavana',
      category: 'wildlife',
      name: 'ANANTAVANA',
      logo: '/assets/projects/Anantavana.webp',
      location: 'NEAR KABINI · 35 ACRES',
      desc: 'Nestled in the Bandipur–Nagarhole wildlife corridor. A nature-led community carefully designed to act as an ecological buffer zone supporting high biodiversity and endemic species.',
      img: '/assets/images/anantavana.webp',
      badge: 'Wildlife Corridor',
      badgeBg: '#2D6A4F',
      pills: ['Bandipur Corridor', 'Wildlife Buffer']
    },
    {
      id: 'eeshavana',
      category: 'riverfront',
      name: 'EESHAVANA',
      logo: '/assets/projects/eeshavanaalogo.webp',
      location: 'KOLLEGALA · CAUVERY RIVERFRONT',
      desc: 'Our premier riverfront community set along the banks of the sacred Cauvery river. Designed around the deep relationship between people, riparian ecology, and water.',
      img: '/assets/images/eeshavana.webp',
      badge: 'Cauvery Riverfront',
      badgeBg: '#1B4965',
      pills: ['Cauvery Frontage', 'River Ecosystem']
    },
    {
      id: 'saptavana',
      category: 'forest',
      name: 'SAPTAVANA',
      logo: '/assets/projects/saptavanalogo1-e1748489137241.webp',
      location: 'NANDI HILLS · 10 ACRES',
      desc: 'Saptavana offers exclusive farm plots nested in a tranquil forest setting, featuring rich red soil perfect for deep-rooted native tree species and lush ecological development.',
      img: '/assets/images/forest_address_bg.webp',
      badge: 'Mountain View',
      badgeBg: '#606C38',
      pills: ['Red Soil', 'Nandi Hills Range']
    },
    {
      id: 'shukhavana',
      category: 'nature',
      name: 'SHUKHAVANA',
      logo: '/assets/projects/Sukhavanalogo-e1761722881620.webp',
      location: 'DODDABALLAPUR · 6.5 ACRES',
      desc: 'A premium riverfront community by Vanatvam, offering an exclusive lifestyle integrated entirely with natural surroundings and expansive river views.',
      img: '/assets/images/anantavana.webp',
      badge: 'Nature Community',
      badgeBg: '#7A6B48',
      pills: ['Waterfront', 'Boutique Community']
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <Navigation />

      <section className="hero" style={{ height: '70vh', minHeight: '500px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/assets/images/forest_address_bg.webp" alt="Projects Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18, 34, 23, 0.4) 0%, rgba(18, 34, 23, 0.9) 100%)' }}></div>
        </div>

        <div className="container relative" style={{ zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <span style={{ display: 'inline-block', padding: '6px 16px', border: '1px solid var(--accent-gold)', borderRadius: '30px', color: 'var(--accent-gold)', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '20px' }}>OUR LIVING SANCTUARIES</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '4.5rem', color: '#FFF', lineHeight: 1.1, marginBottom: '20px' }}>
              Six Expressions of<br/><span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Nature.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '600px', lineHeight: 1.6 }}>
              Explore our curated portfolio of ecological communities, each designed to respect and enhance its unique natural context across Karnataka.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: 'var(--bg-cream)' }}>
        <div className="container">
          <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '40px' }}>
            <AnimatePresence>
              {projects.map(proj => (
                <motion.div 
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -10 }}
                  style={{ background: '#FFF', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ position: 'relative', height: '300px' }}>
                    <img src={proj.img} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 20, left: 20, background: proj.badgeBg, color: '#FFF', padding: '6px 14px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                      {proj.badge}
                    </div>
                  </div>
                  <div style={{ padding: '40px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '15px', display: 'block' }}>{proj.location}</span>
                    
                    {proj.logo ? (
                      <div style={{ marginBottom: '15px', height: '60px', display: 'flex', alignItems: 'center' }}>
                        <img src={proj.logo} alt={proj.name} style={{ maxHeight: '100%', maxWidth: '200px', objectFit: 'contain' }} />
                      </div>
                    ) : (
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--bg-dark-forest)', marginBottom: '15px' }}>{proj.name}</h3>
                    )}

                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '25px', flex: 1 }}>{proj.desc}</p>
                    
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
                      {proj.pills.map((pill, i) => (
                        <span key={i} style={{ background: 'var(--bg-cream)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--text-dark)', border: '1px solid var(--border-light)' }}>
                          <i className="fa-solid fa-leaf" style={{ color: 'var(--accent-gold)', marginRight: '6px' }}></i>{pill}
                        </span>
                      ))}
                    </div>

                    <Link href={`/${proj.id}`} className="btn-pill btn-pill-dark" style={{ justifyContent: 'center', width: '100%' }}>
                      Explore Project
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
