'use client';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { TreePine, Leaf, Droplets, RefreshCcw } from 'lucide-react';


export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      <Navigation />

      <section className="hero" id="hero">
        <motion.div className="hero-bg-wrapper" style={{ y: heroY }}>
          <video className="hero-bg-video" autoPlay loop muted playsInline poster="/assets/images/hero_kaveri_river.webp">
            <source src="/assets/images/Aerial_view_of_landscape_sunrise_20260921225510-cleaned.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="hero-overlay" style={{ background: 'linear-gradient(180deg, rgba(18, 34, 23, 0.4) 0%, rgba(18, 34, 23, 0.8) 100%)' }}></div>

        <div className="container relative" style={{ zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', paddingTop: '80px' }}>
          <motion.div className="hero-content" initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '800px' }}>
            <motion.span variants={fadeIn} style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.4)', padding: '6px 16px', borderRadius: '30px', fontSize: '0.8rem', letterSpacing: '0.15em', color: '#FFF', textTransform: 'uppercase', marginBottom: '24px' }}>
              Ecological Communities in Karnataka
            </motion.span>
            <motion.h1 variants={fadeIn} style={{ fontFamily: 'var(--font-serif)', fontSize: '5.5rem', lineHeight: 1.05, color: '#FFFFFF', marginBottom: '25px', letterSpacing: '-0.02em' }}>
              Forests that <br/><span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>build themselves.</span>
            </motion.h1>
            <motion.p variants={fadeIn} style={{ fontSize: '1.3rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '600px', marginBottom: '40px', fontWeight: 300 }}>
              Transforming ordinary farmland into living, evolving ecosystems where nature and communities thrive together.
            </motion.p>
            <motion.div variants={fadeIn} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <a href="#projects" className="btn-pill btn-pill-gold" style={{ padding: '16px 32px', fontSize: '1.05rem' }}>
                Explore Communities
              </a>
              <a href="/about" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: '4px', transition: 'border-color 0.3s' }}>
                Our Philosophy
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Revamped Intro Section - Typographic Masterpiece */}
      <section style={{ padding: '180px 0', background: 'var(--bg-cream)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background decoration */}
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(198,162,101,0.06) 0%, transparent 70%)', zIndex: 0, borderRadius: '50%' }} />
        
        <div className="container relative" style={{ zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1000px', margin: '0 auto' }}>
            
            <motion.span 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '40px', display: 'block', textAlign: 'center' }}
            >
              Vana means forest · Tvam means you
            </motion.span>

            <div style={{ position: 'relative', marginBottom: '80px' }}>
              <motion.h2 
                initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(4rem, 8vw, 6.5rem)', color: 'var(--bg-dark-forest)', lineHeight: 1, margin: 0, letterSpacing: '-0.03em' }}
              >
                Not just land.
              </motion.h2>
              <motion.h2 
                initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(4rem, 8vw, 6.5rem)', color: 'var(--accent-gold)', fontStyle: 'italic', lineHeight: 1, margin: 0, textAlign: 'right', letterSpacing: '-0.03em', position: 'relative', top: '-10px' }}
              >
                A way of being.
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
              style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}
            >
              <div style={{ flex: '1 1 300px', height: '400px', borderRadius: '200px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }}>
                 <img src="/assets/images/impact_seedling.webp" alt="Seedling" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: '2 1 400px' }}>
                <p style={{ fontSize: '1.4rem', color: 'var(--text-dark)', lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
                  At Vanatvam, we believe the boundary between people and nature was never meant to exist. Our communities are designed to bring people closer to living ecosystems — not away from them. You don't just visit nature. <strong style={{ fontWeight: 500, color: 'var(--bg-dark-forest)' }}>You become a part of it.</strong>
                </p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Revamped Conservation Section */}
      <section style={{ position: 'relative', background: '#122217', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            style={{ flex: '1 1 50%', minWidth: '300px', padding: '120px 8%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', letterSpacing: '0.15em', fontWeight: 600, marginBottom: '20px' }}>ECOLOGICAL PROTECTION</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: '#FFFFFF', lineHeight: 1.1, marginBottom: '30px' }}>
              Conservation that invites people in.
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '40px' }}>
              Traditional conservation often begins by keeping people away from nature. Vanatvam takes a different approach. We bring people into the ecosystem as owners, residents, and custodians — creating a model where human presence directly supports regeneration.
            </p>
            <blockquote style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '24px', margin: 0 }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#FFF', fontStyle: 'italic', marginBottom: '10px' }}>
                "If you want to save the wildlife, start by saving the trees."
              </p>
              <footer style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>— Deepak Kasthuri, Managing Director</footer>
            </blockquote>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ flex: '1 1 50%', minWidth: '300px', position: 'relative', minHeight: '500px' }}
          >
            <img src="/assets/images/about_story_forest.webp" alt="Forest Conservation" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
          </motion.div>
        </div>
      </section>

      {/* Redesigned Biodiversity by Design - Premium Sticky Layout */}
      <section style={{ padding: '160px 0', background: '#F9F8F6' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px' }}>
            
            {/* Sticky Left Column */}
            <div style={{ flex: '1 1 400px', position: 'relative' }}>
              <div style={{ position: 'sticky', top: '160px' }}>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                  style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}
                >
                  Biodiversity by Design
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '3.8rem', color: 'var(--bg-dark-forest)', lineHeight: 1.1, marginBottom: '30px' }}
                >
                  We don't landscape.<br/>We create ecosystems.
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '480px' }}
                >
                  Every Vanatvam community begins with the land itself. We study its soil, water, terrain, and existing vegetation to design landscapes where native forests, wildlife habitats, and human spaces work perfectly together.
                </motion.p>
              </div>
            </div>

            {/* Scrolling Right Column */}
            <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {[ 
                { icon: TreePine, title: 'Nakshatra Vana', description: "Forests inspired by India's ancient connection between trees, nature, and the stars. A tranquil space for reflection." },
                { icon: Leaf, title: 'Navagraha Vana', description: "Thematic plantations rooted in India's traditional ecological knowledge, bringing balance to the environment." },
                { icon: Droplets, title: 'Soil & Water', description: "Engineered swales, rain catchments, and organic soil enrichment that continuously recharge groundwater levels." },
                { icon: RefreshCcw, title: 'Self-Sustaining', description: "The ultimate objective is simple yet profound: Create an ecosystem that can naturally sustain and regenerate itself." }
              ].map((feature, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
                  style={{ 
                    background: '#FFFFFF', 
                    padding: '50px', 
                    borderRadius: '24px', 
                    border: '1px solid rgba(0,0,0,0.03)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.02)',
                    display: 'flex',
                    gap: '30px',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{ flexShrink: 0, width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(198,162,101,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                    <feature.icon className="size-9" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span style={{ fontSize: '1rem', fontWeight: 600, color: 'rgba(0,0,0,0.2)', marginBottom: '10px', display: 'block', fontFamily: 'var(--font-sans)' }}>0{i + 1}</span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--bg-dark-forest)', marginBottom: '15px' }}>{feature.title}</h3>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <motion.section className="projects-section" id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} style={{ padding: '120px 0', background: 'var(--bg-cream)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(198,162,101,0.08) 0%, transparent 70%)', zIndex: 0, borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(45,106,79,0.05) 0%, transparent 70%)', zIndex: 0, borderRadius: '50%' }}></div>

        <div className="container relative-z" style={{ zIndex: 2 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
            <motion.div variants={fadeIn} style={{ flex: '1 1 500px', maxWidth: '600px' }}>
              <span className="subtitle-tag" style={{ color: 'var(--accent-gold)' }}>LIVING ECOSYSTEMS</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1.1, color: 'var(--bg-dark-forest)', marginTop: '15px' }}>
                Four Unique Expressions of <span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Nature's</span> Abundance.
              </h2>
            </motion.div>
            <motion.div variants={fadeIn} style={{ flex: '0 0 auto', marginTop: '30px' }}>
              <Link href="/projects" className="btn-pill btn-pill-dark" style={{ display: 'inline-flex', padding: '14px 28px', fontSize: '1.05rem' }}>
                Explore All Projects <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i>
              </Link>
            </motion.div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '30px', gridAutoFlow: 'dense' }}>
            {[
              { id: 'brindavana', name: 'BRINDAVANA', loc: 'Pavagada · 30 Acres', img: '/assets/images/about_hero_bg.webp', colSpan: 'span 7', height: '480px', desc: 'A benchmark in ecological restoration, turning barren land into a thriving ecosystem.' },
              { id: 'madhuvana', name: 'MADHUVANA', loc: 'Maddur · 18 Acres', img: '/assets/images/madhu_vana.webp', colSpan: 'span 5', height: '480px', desc: 'A dense water-forest ecosystem built around 250+ native trees and sustainable farm plots.' },
              { id: 'anantavana', name: 'ANANTAVANA', loc: 'Near Kabini · 35 Acres', img: '/assets/images/anantavana.webp', colSpan: 'span 5', height: '400px', desc: 'Nestled in the Bandipur wildlife corridor, designed to support high biodiversity.' },
              { id: 'eeshavana', name: 'EESHAVANA', loc: 'Kollegala · Cauvery Riverfront', img: '/assets/images/eeshavana.webp', colSpan: 'span 7', height: '400px', desc: 'Our premier riverfront community along the banks of the sacred Cauvery river.' }
            ].map((proj, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                whileHover="hover"
                initial="initial"
                style={{ 
                  gridColumn: proj.colSpan, 
                  height: proj.height, 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  position: 'relative',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                }}
              >
                <Link href={`/${proj.id}`} style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none' }}>
                  <motion.div 
                    variants={{ initial: { scale: 1 }, hover: { scale: 1.05 } }} 
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
                  >
                    <img src={proj.img} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </motion.div>
                  
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,34,23,0.95) 0%, rgba(18,34,23,0.4) 50%, rgba(18,34,23,0) 100%)', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '40px' }}>
                    <motion.div variants={{ initial: { y: 20 }, hover: { y: 0 } }} transition={{ duration: 0.4, ease: "easeOut" }} className="bento-card-content">
                      <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: '#FFF', padding: '6px 16px', borderRadius: '30px', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>{proj.loc}</span>
                      <h3 style={{ color: '#FFF', fontFamily: 'var(--font-serif)', fontSize: '2.4rem', margin: '0 0 10px 0' }}>{proj.name}</h3>
                      <motion.p 
                        variants={{ initial: { opacity: 0, height: 0, marginTop: 0 }, hover: { opacity: 1, height: 'auto', marginTop: 10 } }}
                        transition={{ duration: 0.3 }}
                        style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', margin: 0, maxWidth: '80%' }}
                      >
                        {proj.desc}
                      </motion.p>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Client Reviews Section */}
      <section style={{ padding: '160px 0', background: '#122217', color: '#FFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.span 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}
            >
              Client Stories
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}
            >
              Voices of <span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Vanatvam.</span>
            </motion.h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {[
              "oTd69o1SAkk",
              "rPMv_cggbH8",
              "HIuRfVHefz0",
              "5sDm6-yiMPs",
              "61PcdiIYtgs"
            ].map((id, i) => (
              <motion.div 
                key={id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ aspectRatio: '16/9', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', background: '#000' }}
              >
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${id}?modestbranding=1&rel=0`} 
                  title="Client Review" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
