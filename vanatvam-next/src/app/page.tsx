'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { TreePine, Leaf, Droplets, RefreshCcw, Users, Target } from 'lucide-react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import RevealText from '@/components/premium/RevealText';
import Magnetic from '@/components/premium/Magnetic';
import Counter from '@/components/premium/Counter';
import TiltCard from '@/components/premium/TiltCard';
import { useLenis } from '@/components/premium/SmoothScroll';


const heroSlides = [
  { id: 'brindavana', name: 'BRINDAVANA', location: 'Pavagada · 30 Acres', tagline: 'Our benchmark project — barren land reborn as a thriving forest ecosystem.', img: '/assets/project-images/Ananthavana/hero_image_2.jpg' },
  { id: 'madhuvana', name: 'MADHUVANA', location: 'Maddur · 18 Acres', tagline: 'A dense water-forest ecosystem built around 250+ native trees.', img: '/assets/project-images/Maduvana/hero.png' },
  { id: 'anantavana', name: 'ANANTAVANA', location: 'Near Kabini · 35 Acres', tagline: 'Living within the Bandipur–Nagarhole wildlife corridor.', img: '/assets/project-images/Ananthavana/hero_image.jpg' },
  { id: 'eeshavana', name: 'EESHAVANA', location: 'Kollegala · Cauvery Riverfront', tagline: 'A premium riverfront community on the sacred Cauvery.', img: '/assets/project-images/Esahavana/EV%20River%20View%201.jpg' },
];

export default function Home() {
  const lenisRef = useLenis();
  const [activeSlide, setActiveSlide] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pausedRef.current) {
        setActiveSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setActiveSlide((p) => (p + 1) % heroSlides.length);
  const prevSlide = () => setActiveSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length);
  const slide = heroSlides[activeSlide];

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lenisRef?.current) {
      lenisRef.current.scrollTo('#projects', { offset: -60, duration: 1.6 });
    } else {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

      <section
        className="hero hero-carousel"
        id="hero"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.id}
            className="hero-bg-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          >
            <motion.img
              src={slide.img}
              alt={slide.name}
              initial={{ scale: 1 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: 6.5, ease: 'linear' }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="hero-overlay" style={{ background: 'linear-gradient(180deg, rgba(18, 34, 23, 0.4) 0%, rgba(18, 34, 23, 0.8) 100%)' }}></div>

        <div className="container relative" style={{ zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', paddingTop: '80px' }}>
          <motion.div className="hero-content" initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '800px' }}>
            <motion.span variants={fadeIn} style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.4)', padding: '6px 16px', borderRadius: '30px', fontSize: '0.8rem', letterSpacing: '0.15em', color: '#FFF', textTransform: 'uppercase', marginBottom: '24px' }}>
              Ecological Communities in Karnataka
            </motion.span>

            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <span style={{ display: 'block', color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '16px' }}>
                  0{activeSlide + 1} / 0{heroSlides.length} · {slide.location}
                </span>
                <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5.0vw, 5.0rem)', lineHeight: 1.05, color: '#FFFFFF', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                  {slide.name}
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '600px', marginBottom: '36px', fontWeight: 300 }}>
                  {slide.tagline}
                </p>
                <div style={{ display: 'flex', gap: '28px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Magnetic strength={0.4}>
                    <Link href={`/${slide.id}`} className="btn-pill btn-pill-gold" style={{ padding: '16px 32px', fontSize: '1.05rem' }}>
                      Explore {slide.name.charAt(0) + slide.name.slice(1).toLowerCase()}
                    </Link>
                  </Magnetic>
                  <Magnetic strength={0.4}>
                    <a href="#projects" onClick={scrollToProjects} style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: '4px', transition: 'border-color 0.3s' }}>
                      View All Communities
                    </a>
                  </Magnetic>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <div style={{ position: 'absolute', bottom: '40px', right: '40px', display: 'flex', gap: '15px', zIndex: 15 }}>
          <button className="hero-carousel-arrow" style={{ position: 'relative', top: 'auto', left: 'auto', right: 'auto', transform: 'none' }} onClick={prevSlide} aria-label="Previous community">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="hero-carousel-arrow" style={{ position: 'relative', top: 'auto', left: 'auto', right: 'auto', transform: 'none' }} onClick={nextSlide} aria-label="Next community">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        <div className="hero-carousel-dots" style={{ left: '40px', transform: 'none' }}>
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              className={`hero-carousel-dot ${i === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Go to ${s.name}`}
            />
          ))}
        </div>
      </section>

      {/* Ambient marquee strip — reinforces the "six ecosystems" scale */}
      <div className="vana-marquee">
        <div className="vana-marquee-track">
          {Array(2).fill(null).map((_, rep) => (
            <div className="vana-marquee-group" key={rep}>
              {['Brindavana', 'Madhuvana', 'Anantavana', 'Eeshavana'].map((name) => (
                <span key={name} className="vana-marquee-item">
                  {name} <Leaf className="size-4" strokeWidth={1.5} style={{ display: 'inline', margin: '0 28px', color: 'var(--accent-gold)' }} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Our Philosophy */}
      <section style={{ padding: 'clamp(80px, 10vh, 120px) 0', background: 'var(--bg-cream)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background decoration */}
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(198,162,101,0.06) 0%, transparent 70%)', zIndex: 0, borderRadius: '50%' }} />

        <div className="container relative" style={{ zIndex: 1 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '100px', alignItems: 'center' }}>

            {/* Image column */}
            <div style={{ flex: '1 1 420px', position: 'relative' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
                style={{ borderRadius: '28px', overflow: 'hidden', height: '560px', boxShadow: '0 30px 70px rgba(0,0,0,0.12)' }}
              >
                <img src="/assets/project-images/Brindavana/Farmer%20Tending%20Lush%20Seedlings.png" alt="Seedling growing in native soil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
                style={{ position: 'absolute', bottom: '-36px', right: '-20px', background: 'var(--bg-dark-forest)', color: '#FFF', padding: '34px', borderRadius: '22px', maxWidth: '260px', boxShadow: '0 24px 50px rgba(18,34,23,0.25)' }}
              >
                <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.7rem', color: 'var(--accent-gold)', display: 'block', lineHeight: 1.3 }}>Vana means forest.</span>
                <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.7rem', color: '#FFF', display: 'block', lineHeight: 1.3 }}>Tvam means you.</span>
              </motion.div>
            </div>

            {/* Text column */}
            <div style={{ flex: '1 1 440px', paddingBottom: '20px' }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '24px' }}>
                Our Philosophy
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)', color: 'var(--bg-dark-forest)', lineHeight: 1.12, marginBottom: '28px', letterSpacing: '-0.02em' }}>
                <RevealText>A philosophy,</RevealText><br/>
                <RevealText delay={0.1} style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>not just a plot of land.</RevealText>
              </h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-dark)', lineHeight: 1.8, fontWeight: 300, marginBottom: '34px' }}>
                At Vanatvam, we believe the boundary between people and nature was never meant to exist. Our communities are designed to bring people closer to living ecosystems — not away from them. You don&apos;t just visit nature. <strong style={{ fontWeight: 500, color: 'var(--bg-dark-forest)' }}>You become a part of it.</strong>
              </p>
              <Magnetic strength={0.2}>
                <Link href="/about" className="link-underline" style={{ color: 'var(--bg-dark-forest)', fontSize: '1.05rem', fontWeight: 600 }}>
                  Read Our Full Story <i className="fa-solid fa-arrow-right arrow"></i>
                </Link>
              </Magnetic>
            </div>

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
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.0vw, 3.0rem)', color: '#FFFFFF', lineHeight: 1.1, marginBottom: '30px' }}>
              <RevealText>Conservation that invites people in.</RevealText>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '40px' }}>
              Traditional conservation often begins by keeping people away from nature. Vanatvam takes a different approach. We bring people into the ecosystem as owners, residents, and custodians — creating a model where human presence directly supports regeneration.
            </p>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '36px 32px', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '10px', left: '24px', fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9250000000000003rem, 3.5vw, 3.5rem)', color: 'var(--accent-gold)', opacity: 0.3, lineHeight: 1 }}>&ldquo;</span>
              <blockquote style={{ margin: 0, position: 'relative', zIndex: 1 }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#FFF', fontStyle: 'italic', marginBottom: '10px', marginTop: '18px' }}>
                  If you want to save the wildlife, start by saving the trees.
                </p>
                <footer style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>— Deepak Kasthuri, Managing Director</footer>
              </blockquote>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ flex: '1 1 50%', minWidth: '300px', position: 'relative', minHeight: '500px' }}
          >
            <img src="/assets/project-images/Maduvana/Tropical%20Garden%20Pond%20Oasis.png" alt="Forest Conservation" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
            <div style={{ position: 'absolute', bottom: '40px', left: '40px', background: 'rgba(18,34,23,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '18px', padding: '20px 26px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <i className="fa-solid fa-leaf" style={{ color: 'var(--accent-gold)', fontSize: '1.4rem' }}></i>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#FFF', lineHeight: 1 }}>85%+</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px' }}>Native Canopy Restored</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact in Numbers */}
      <section style={{ padding: 'clamp(60px, 8vh, 90px) 0', background: 'var(--bg-dark-forest)', borderTop: '1px solid var(--border-dark)', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '50px', textAlign: 'center' }}>
            {[
              { value: 4, suffix: '', label: 'Living Ecosystems Across Karnataka' },
              { value: 100, suffix: '+', label: 'Acres Under Active Regeneration' },
              { value: 100, suffix: '+', label: 'Families In Our Community' },
              { value: 250, suffix: '+', label: 'Native Tree Varieties' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 5vw, 4.2rem)', color: 'var(--accent-gold)', lineHeight: 1, marginBottom: '16px' }}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', letterSpacing: '0.04em', maxWidth: '260px', margin: '0 auto', fontWeight: 300 }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When Nature Takes Over - Evolving Ecosystem */}
      <section style={{ padding: 'clamp(80px, 10vh, 120px) 0', background: 'var(--bg-cream)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '90px', alignItems: 'center' }}>

            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
              style={{ flex: '1 1 420px', borderRadius: '28px', overflow: 'hidden', height: '540px', boxShadow: '0 30px 65px rgba(0,0,0,0.1)' }}
            >
              <img src="/assets/project-images/Maduvana/Serene%20Tropical%20Garden%20Pond%20Retreat.png" alt="New growth on native leaf" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            {/* Content column */}
            <div style={{ flex: '1 1 440px' }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
                When Nature Takes Over
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.3rem)', color: 'var(--bg-dark-forest)', lineHeight: 1.15, marginBottom: '22px' }}>
                <RevealText>We plant the beginning.</RevealText><br/>
                <RevealText delay={0.1} style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Nature builds the rest.</RevealText>
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '40px' }}>
                Vanatvam creates diverse and dense starter ecosystems. Over time, birds, bees, insects, and other natural agents begin carrying seeds, pollinating plants, and expanding vegetation beyond the areas originally planted. This is what we call an <strong style={{ color: 'var(--bg-dark-forest)', fontWeight: 500 }}>Evolving Ecosystem</strong>.
              </p>

              <div>
                {[
                  { icon: 'fa-hands-holding-circle', title: 'Human Effort Creates The Foundation', text: 'We carefully select 200+ native tree species, establish soil microbial networks, and construct rainwater harvesting swales.' },
                  { icon: 'fa-seedling', title: 'Nature Creates The Future', text: 'Natural agents propagate seeds into dense multi-tier canopy forests — a process measured not in months, but in years and generations.' },
                ].map((item, i, arr) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                    style={{ display: 'flex', gap: '20px', position: 'relative', paddingBottom: i < arr.length - 1 ? '32px' : 0 }}
                  >
                    {i < arr.length - 1 && (
                      <div style={{ position: 'absolute', left: '23px', top: '50px', bottom: 0, width: '1px', background: 'rgba(198,162,101,0.3)' }} />
                    )}
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-cream)', border: '1px solid rgba(198,162,101,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', fontSize: '1.15rem', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--bg-dark-forest)', marginBottom: '8px' }}>{item.title}</h3>
                      <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Redesigned Biodiversity by Design - Premium Sticky Layout */}
      <section style={{ padding: 'clamp(80px, 10vh, 120px) 0', background: '#F9F8F6' }}>
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
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.09rem, 3.8vw, 3.8rem)', color: 'var(--bg-dark-forest)', lineHeight: 1.1, marginBottom: '30px' }}>
                  <RevealText>We don&apos;t landscape.</RevealText><br/>
                  <RevealText delay={0.1}>We create ecosystems.</RevealText>
                </h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '480px' }}
                >
                  Every Vanatvam community begins with the land itself. We study its soil, water, terrain, and existing vegetation to design landscapes where native forests, wildlife habitats, and human spaces work perfectly together.
                </motion.p>
              </div>
            </div>

            {/* Feature Grid */}
            <div style={{ flex: '1 1 500px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
              {[
                { icon: TreePine, title: 'Nakshatra Vana', description: "Forests inspired by India's ancient connection between trees, nature, and the stars. A tranquil space for reflection." },
                { icon: Leaf, title: 'Navagraha Vana', description: "Thematic plantations rooted in India's traditional ecological knowledge, bringing balance to the environment." },
                { icon: Droplets, title: 'Soil & Water', description: "Engineered swales, rain catchments, and organic soil enrichment that continuously recharge groundwater levels." },
                { icon: RefreshCcw, title: 'Self-Sustaining', description: "The ultimate objective is simple yet profound: Create an ecosystem that can naturally sustain and regenerate itself." }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: i * 0.08 }}
                >
                  <FeatureCard feature={feature} />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 200+ Varieties of Trees, Plants & Habitats */}
      <section style={{ padding: 'clamp(80px, 10vh, 120px) 0', background: '#122217' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 70px' }}>
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              200+ Varieties of Trees, Plants &amp; Habitats
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)', color: '#FFFFFF', lineHeight: 1.15, marginBottom: '24px' }}>
              <RevealText>Functioning Habitats</RevealText> <RevealText delay={0.1} style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Supporting Life.</RevealText>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
              Across our communities, Vanatvam has introduced and conserved 200+ varieties of trees and plants, including rare and endangered native species. These aren&apos;t ornamental plantations — they are designed as functioning habitats that support an expanding network of life.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px' }}>
            {[
              { icon: 'fa-feather-pointed', name: 'Indian Grey Hornbill', text: 'Feeds on native fig species (Ficus) planted across our multi-layered forest corridors.' },
              { icon: 'fa-dove', name: 'Woolly-necked Stork', text: 'Thrives around wetlands, seasonal swales, and water-forest ponds across our estates.' },
              { icon: 'fa-crow', name: 'Asian Green Bee-eater', text: 'Restores natural insect control while nesting along pristine dirt mounds and flower pathways.' },
              { icon: 'fa-kiwi-bird', name: 'Baya Weaver', text: 'Weaves intricate nests on palm branches in our self-sustaining ecological farm plots.' },
              { icon: 'fa-water', name: 'Purple Heron', text: 'Frequents the quiet water bodies and riverfront sanctuaries of our Eeshavana community.' },
            ].map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', padding: '36px 28px' }}
              >
                <div style={{ color: 'var(--accent-gold)', fontSize: '1.6rem', marginBottom: '18px' }}><i className={`fa-solid ${s.icon}`}></i></div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#FFF', marginBottom: '10px' }}>{s.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section className="projects-section" id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} style={{ padding: 'clamp(60px, 8vh, 90px) 0', background: 'var(--bg-cream)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(198,162,101,0.08) 0%, transparent 70%)', zIndex: 0, borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(45,106,79,0.05) 0%, transparent 70%)', zIndex: 0, borderRadius: '50%' }}></div>

        <div className="container relative-z" style={{ zIndex: 2 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
            <motion.div variants={fadeIn} style={{ flex: '1 1 500px', maxWidth: '600px' }}>
              <span className="subtitle-tag" style={{ color: 'var(--accent-gold)' }}>LIVING ECOSYSTEMS</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9250000000000003rem, 3.5vw, 3.5rem)', lineHeight: 1.1, color: 'var(--bg-dark-forest)', marginTop: '15px' }}>
                <RevealText>Four Unique Expressions of</RevealText> <RevealText delay={0.1} style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Nature&apos;s Abundance.</RevealText>
              </h2>
            </motion.div>
            <motion.div variants={fadeIn} style={{ flex: '0 0 auto', marginTop: '30px' }}>
              <Magnetic strength={0.25}>
                <Link href="/projects" className="btn-pill btn-pill-dark" style={{ display: 'inline-flex', padding: '14px 28px', fontSize: '1.05rem' }}>
                  Explore All Projects <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '30px', gridAutoFlow: 'dense' }}>
            {[
              { id: 'brindavana', name: 'BRINDAVANA', loc: 'Pavagada · 30 Acres', img: '/assets/project-images/Ananthavana/hero_image_2.jpg', colSpan: 'span 7', height: '480px', desc: 'A benchmark in ecological restoration, turning barren land into a thriving ecosystem.' },
              { id: 'madhuvana', name: 'MADHUVANA', loc: 'Maddur · 18 Acres', img: '/assets/project-images/Maduvana/hero.png', colSpan: 'span 5', height: '480px', desc: 'A dense water-forest ecosystem built around 250+ native trees and sustainable farm plots.' },
              { id: 'anantavana', name: 'ANANTAVANA', loc: 'Near Kabini · 35 Acres', img: '/assets/project-images/Ananthavana/hero_image.jpg', colSpan: 'span 5', height: '400px', desc: 'Nestled in the Bandipur wildlife corridor, designed to support high biodiversity.' },
              { id: 'eeshavana', name: 'EESHAVANA', loc: 'Kollegala · Cauvery Riverfront', img: '/assets/project-images/Esahavana/EV%20River%20View%201.jpg', colSpan: 'span 7', height: '400px', desc: 'Our premier riverfront community along the banks of the sacred Cauvery river.' }
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
                  <TiltCard max={4} style={{ width: '100%', height: '100%', position: 'relative' }}>
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
                  </TiltCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* See what your weekends could look like - Landscape Gallery */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0', background: 'var(--bg-cream)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="subtitle-tag" style={{ color: 'var(--accent-gold)' }}>LIFE AT THE FARM</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'var(--bg-dark-forest)', marginTop: '16px', letterSpacing: '-0.02em', fontStyle: 'italic' }}>
              See what your weekends could look like.
            </h2>
          </div>
        </div>

        {/* CSS Marquee Track for Landscape Images */}
        <div className="weekend-marquee" style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '10px 0' }}>
          <div className="weekend-marquee-track" style={{ display: 'flex', width: 'calc(400px * 12)', animation: 'marqueeScroll 40s linear infinite' }}>
            {/* We duplicate the images twice to create an infinite scroll loop */}
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} style={{ display: 'flex' }}>
                {[
                  { img: '/assets/project-images/Ananthavana/hero_image_2.jpg', alt: 'Family walking dog on trail' },
                  { img: '/assets/project-images/Maduvana/hero.png', alt: 'Family petting dog' },
                  { img: '/assets/project-images/Ananthavana/hero_image.jpg', alt: 'Cow grazing in farm' },
                  { img: '/assets/project-images/Esahavana/EV%20River%20View%201.jpg', alt: 'Woman picking herbs' },
                  { img: '/assets/project-images/Maduvana/Tropical%20Garden%20Pond%20Oasis.png', alt: 'Forest path walking' },
                  { img: '/assets/project-images/Esahavana/Riverside%20view.png', alt: 'Riverfront views' }
                ].map((item, i) => (
                  <div key={i} style={{ width: '400px', height: '280px', margin: '0 12px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', flexShrink: 0 }}>
                    <img src={item.img} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .weekend-marquee-track:hover {
            animation-play-state: paused !important;
          }
        `}} />
      </section>

      {/* Nature. Community. Future. */}
      <section style={{ padding: 'clamp(80px, 10vh, 120px) 0', background: '#F9F8F6', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-15%', left: '50%', transform: 'translateX(-50%)', width: '60vw', height: '40vw', background: 'radial-gradient(ellipse, rgba(198,162,101,0.07) 0%, transparent 70%)', zIndex: 0 }} />
        <div className="container relative" style={{ zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 70px' }}>
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              A Different Way To Develop Land
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3rem)', color: 'var(--bg-dark-forest)', lineHeight: 1.15 }}>
              Nature. Community. Future.
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '16px' }}>Vanatvam brings together three things that are often treated separately in real estate development:</p>
          </div>
          <div className="philosophy-grid">
            {[
              { icon: TreePine, num: '01', title: 'Nature', text: 'Native forests, biodiversity creation, soil regeneration, and long-term ecological restoration.' },
              { icon: Users, num: '02', title: 'People', text: 'Communities designed around meaningful shared experiences, wellness, and quiet reflection in nature.' },
              { icon: Target, num: '03', title: 'Purpose', text: 'A commercially viable managed farmland investment model that supports long-term ecological growth.' },
              { icon: Leaf, num: '04', title: 'Biodiversity', text: 'Rich ecological diversity, fostering habitats that support endemic species and complex natural webs.' },
            ].map((t, i) => (
              <motion.div
                key={t.num}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="philosophy-card"
              >
                <div className="philosophy-num">{t.num}</div>
                <div className="philosophy-icon-wrap">
                  <t.icon className="size-8" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--bg-dark-forest)', margin: '0 0 12px' }}>{t.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section style={{ padding: 'clamp(80px, 10vh, 120px) 0', background: 'var(--bg-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              🌟 Community Events at Vanatvam
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)', color: 'var(--bg-dark-forest)', lineHeight: 1.15, marginBottom: '24px' }}>
              Celebrating Life, Nature, and Togetherness
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              At both Madhuvana and AnantaVana, we host vibrant seasonal festivals that bring our community closer to the land—and to each other. Each event transforms our shared spaces—courtyards, pondside lawns, and open-air plazas—into stages for memorable experiences, nurturing a true sense of belonging and harmony within our farm community.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '60px' }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ background: '#FFF', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.05)' }}
            >
              <div style={{ width: '100%', height: '240px' }}>
                <img src="/Event%20images/DSC08963.JPG" alt="Deepotsava celebration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--bg-dark-forest)', marginBottom: '16px' }}>Deepotsava</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  A magical evening where hundreds of earthen lamps are lovingly lit across the farm, illuminating pathways, courtyards, and green spaces—creating a warm, communal glow and a sense of shared wonder.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ background: '#FFF', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.05)' }}
            >
              <div style={{ width: '100%', height: '240px' }}>
                <img src="/Event%20images/DSC08964%20(1).JPG" alt="Vasantotsava celebration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--bg-dark-forest)', marginBottom: '16px' }}>Vasantotsava</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  A joyful celebration of spring, complete with nature-inspired arts, guided walks, interactive workshops, and farm-to-table gatherings—designed to awaken the senses and connect us all with the rhythms of growth and renewal.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ background: '#FFF', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.05)' }}
            >
              <div style={{ width: '100%', height: '240px' }}>
                <img src="/Event%20images/DSC09025.JPG" alt="Seasonal gatherings" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--bg-dark-forest)', marginBottom: '16px' }}>Seasonal Gatherings</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  From planting festivals, to stargazing nights, nature workshops, communal cooking, and storytelling by the bonfire—we host events that celebrate biodiversity, culture, and sustainable living.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="weekend-marquee" style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '10px 0' }}>
            <div className="weekend-marquee-track" style={{ display: 'flex', width: 'calc(350px * 12)', animation: 'vanaMarqueeScroll 40s linear infinite' }}>
              {[...Array(2)].map((_, loopIndex) => (
                <div key={loopIndex} style={{ display: 'flex' }}>
                  {[
                    '/Event%20images/IMG-20240108-WA0006%20(1).jpg',
                    '/Event%20images/IMG-20240108-WA0013.jpg',
                    '/Event%20images/IMG-20240108-WA0023.jpg',
                    '/Event%20images/WhatsApp%20Image%202024-04-02%20at%202.37.57%20PM%20(2)%20(1).jpeg',
                    '/Event%20images/WhatsApp%20Image%202024-04-02%20at%202.38.05%20PM.jpeg',
                    '/Event%20images/WhatsApp%20Image%202024-04-02%20at%202.39.30%20PM%20(2).jpeg'
                  ].map((imgSrc, i) => (
                    <div key={i} style={{ width: '350px', height: '240px', margin: '0 12px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', flexShrink: 0 }}>
                      <img src={imgSrc} alt={`Vanatvam event highlight ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section style={{ padding: 'clamp(80px, 10vh, 120px) 0', background: '#122217', color: '#FFF' }}>
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
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '20px' }}
            >
              Voices of <span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Vanatvam.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '560px', margin: '0 auto', fontWeight: 300 }}
            >
              Hear directly from the families and landowners who walked the land before they chose to call it home.
            </motion.p>
          </div>

          <div style={{ overflow: 'hidden', padding: '20px 0', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
            <div className="reviews-marquee-track">
              {[0, 1].map((rep) => (
                <div key={rep} className="reviews-marquee-group" style={{ display: 'flex', gap: '30px', paddingRight: '30px', flexShrink: 0 }}>
                  {[
                    "oTd69o1SAkk",
                    "rPMv_cggbH8",
                    "HIuRfVHefz0",
                    "5sDm6-yiMPs",
                    "61PcdiIYtgs"
                  ].map((id, i) => (
                    <motion.div
                      key={id + rep}
                      style={{ 
                        width: '360px', 
                        flexShrink: 0, 
                        borderRadius: '24px', 
                        overflow: 'hidden', 
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)', 
                        background: '#0A1510', 
                        border: '1px solid rgba(255,255,255,0.06)' 
                      }}
                    >
                      <div style={{ aspectRatio: '16/9' }}>
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${id}?modestbranding=1&rel=0`}
                          title="Client Review"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="fa-solid fa-circle-play" style={{ color: 'var(--accent-gold)', fontSize: '0.85rem' }}></i>
                        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Client Video Testimonial</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA: The future is not built. It is grown. */}
      <section className="cta-section">
        <div className="cta-bg">
          <img src="/assets/project-images/Esahavana/EV%20Arial%20View%204.png" alt="Sunset hills backdrop - Vanatvam sustainable farmland Karnataka" />
        </div>
        <div className="cta-overlay"></div>
        <div className="container">
          <motion.div className="cta-content" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="subtitle-tag subtitle-tag-light" style={{ letterSpacing: '0.3em' }}>Discover Vanatvam</span>
            <h2 className="cta-title">The Future Is Not Built.<br/>It Is Grown.</h2>
            <p className="cta-sub">Natural farms. Thriving forests. Meaningful communities. Discover a different relationship with land.</p>
            <Magnetic strength={0.3}>
              <Link href="/contact" className="btn-pill btn-pill-white">
                Book a Site Visit &amp; Consultation <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </Magnetic>
          </motion.div>
        </div>
        <div className="cta-quick-contacts">
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="contact-quick-item">
            <i className="fa-brands fa-whatsapp"></i> WhatsApp Direct
          </a>
          <a href="tel:+919999999999" className="contact-quick-item">
            <i className="fa-solid fa-phone"></i> Call +91 99999 99999
          </a>
          <Link href="/contact" className="contact-quick-item">
            <i className="fa-regular fa-envelope"></i> Send Inquiry
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
