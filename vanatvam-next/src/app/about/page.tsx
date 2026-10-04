'use client';
import { motion } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import RevealText from '@/components/premium/RevealText';

export default function About() {
  return (
    <>
      <Navigation />

      {/* Premium Hero Section */}
      <section className="hero" style={{ height: '85vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/assets/images/about_hero_bg.webp" alt="Vanatvam Vision" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(18, 34, 23, 0.4) 0%, rgba(18, 34, 23, 0.8) 100%)' }} />
        </div>
        
        <div className="container relative" style={{ zIndex: 1, textAlign: 'center', paddingTop: '80px' }}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            style={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '30px', display: 'inline-block', border: '1px solid rgba(255,255,255,0.3)', padding: '8px 24px', borderRadius: '30px', backdropFilter: 'blur(5px)' }}
          >
            About Vanatvam Private Limited
          </motion.span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3.5rem, 7vw, 6rem)', color: '#FFFFFF', lineHeight: 1.05, marginBottom: '30px', letterSpacing: '-0.02em' }}>
            <RevealText>A Vision Rooted</RevealText><br/>
            <RevealText delay={0.15} style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>in Nature.</RevealText>
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}
          >
            Vanatvam is more than land development. It is a living ecosystem of nature, community, and purpose — designed for a healthier, calmer, and more meaningful life.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: 'clamp(80px, 10vh, 120px) 0', background: 'var(--bg-cream)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center' }}>
            
            <div style={{ flex: '1 1 400px', position: 'relative' }}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                style={{ width: '100%', height: '600px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
              >
                <img src="/assets/images/about_story_forest.webp" alt="Forest walkway - Vanatvam" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
              
              {/* Decorative overlapping block */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
                style={{ position: 'absolute', bottom: '-40px', right: '-40px', background: 'var(--bg-dark-forest)', padding: '40px', borderRadius: '24px', maxWidth: '320px', color: '#FFF', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              >
                <span style={{ fontSize: 'clamp(2.2rem, 4.0vw, 4.0rem)', color: 'var(--accent-gold)', fontFamily: 'var(--font-serif)', lineHeight: 0.5, display: 'block', marginBottom: '20px' }}>&ldquo;</span>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '15px', lineHeight: 1.5, color: '#FFFFFF' }}>
                  If you want to save the wildlife, start by saving the trees.
                </p>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>— Deepak Kasthuri, MD</span>
              </motion.div>
            </div>

            <div style={{ flex: '1 1 500px' }}>
              <motion.span 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}
              >
                Our Story & Founding Philosophy
              </motion.span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.8rem, 4vw, 3.8rem)', color: 'var(--bg-dark-forest)', lineHeight: 1.1, marginBottom: '30px', letterSpacing: '-0.02em' }}>
                <RevealText>From a Vision to a</RevealText><br/>
                <RevealText delay={0.1}>Living Legacy.</RevealText>
              </h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontSize: '1.2rem', color: 'var(--text-dark)', lineHeight: 1.8, marginBottom: '25px', fontWeight: 300 }}
              >
                <strong style={{ color: 'var(--bg-dark-forest)', fontWeight: 500 }}>VanaTvam</strong>, in collaboration with Indus Herbs, is an organization of passionate individuals who believe that farming and leisure must be in harmony with nature. Our mission is to create Sustainable Natural Farm Communities that connect us to our ancient cultural traditions and revive them for future generations.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                style={{ fontSize: '1.2rem', color: 'var(--text-dark)', lineHeight: 1.8, marginBottom: '25px', fontWeight: 300 }}
              >
                At VanaTvam, we believe in the power of Natural Sustainability to create a better world. &ldquo;Natural Sustainable land practices&rdquo; refers to the use and management of land resources in a way that maintains productivity and benefits both current and future generations. This preserves soil fertility, conserves water resources, and protects biodiversity while meeting our needs.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
                style={{ fontSize: '1.2rem', color: 'var(--text-dark)', lineHeight: 1.8, fontWeight: 300 }}
              >
                We are not just a &ldquo;Farmland Developer&rdquo;. We understand many would love to connect with nature and enjoy living on their own farms, but face obstacles like lack of time or farming knowledge. We are on a mission to change that—by making owning a farm simple, meaningful, and fulfilling.
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* Sacred Ecosystems Section */}
      <section style={{ padding: 'clamp(80px, 10vh, 120px) 0', background: 'var(--bg-dark-forest)', color: '#FFF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              style={{ flex: '1 1 400px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }}
            >
              <img src="/assets/images/eeshavana.webp" alt="Sacred Ecosystems" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            </motion.div>

            <div style={{ flex: '1 1 500px' }}>
              <motion.span 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}
              >
                OUR INSPIRATION
              </motion.span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#FFF', lineHeight: 1.1, marginBottom: '30px', letterSpacing: '-0.02em' }}>
                Re-creating Sacred<br/><span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Ecosystems.</span>
              </h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '25px', fontWeight: 300 }}
              >
                Our vision for VanaTvam is deeply rooted in the profound wisdom of the Brihat Samhita, an ancient Indian text illuminating sustainable living and sacred ecological balance. We embarked on this journey driven by a desire to recreate these sacred, thriving ecosystems that honour both the land and those who inhabit it.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontWeight: 300 }}
              >
                VanaTvam is our heartfelt commitment to nurturing a space where nature flourishes alongside human aspiration—cultivating a community bound by respect, sustainability, and cultural richness.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecological Concepts Section */}
      <section style={{ background: '#1B2B1F', color: '#FFF', padding: 'clamp(80px, 10vh, 120px) 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '100px' }}
          >
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              Traditional Ecological Concepts
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              <RevealText>Ancient Ecological Wisdom</RevealText><br/>
              <RevealText delay={0.1} style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Meets Modern Reforestation</RevealText>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
              style={{ padding: '60px', background: 'rgba(255,255,255,0.03)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}
            >
              <span style={{ position: 'absolute', top: '40px', right: '40px', fontSize: '8rem', fontFamily: 'var(--font-serif)', color: 'rgba(198,162,101,0.06)', lineHeight: 0.8, pointerEvents: 'none' }}>01</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', color: 'var(--accent-gold)', marginBottom: '20px' }}>Nakshatra Vana</h3>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
                Forests inspired by India&apos;s ancient connection between trees, nature, and the stars. Each species is carefully chosen to create micro-climate sanctuaries and preserve endemic flora.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              style={{ padding: '60px', background: 'rgba(255,255,255,0.03)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}
            >
              <span style={{ position: 'absolute', top: '40px', right: '40px', fontSize: '8rem', fontFamily: 'var(--font-serif)', color: 'rgba(198,162,101,0.06)', lineHeight: 0.8, pointerEvents: 'none' }}>02</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', color: 'var(--accent-gold)', marginBottom: '20px' }}>Navagraha Vana</h3>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
                Thematic plantations rooted in India&apos;s traditional ecological and cultural knowledge, fostering medicinal plants, bird sanctuaries, and organic soil health.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section style={{ padding: 'clamp(80px, 10vh, 120px) 0', background: '#F9F8F6' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
                Institutional Recognition
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.2rem)', color: 'var(--bg-dark-forest)', lineHeight: 1.1, marginBottom: '30px', letterSpacing: '-0.02em' }}>
                <RevealText>FKCCI Award in Tourism & Hospitality</RevealText>
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-dark)', lineHeight: 1.8, marginBottom: '20px', fontWeight: 300 }}>
                Vanatvam&apos;s work has received institutional recognition through an <strong style={{ color: 'var(--bg-dark-forest)', fontWeight: 500 }}>FKCCI Award in Tourism and Hospitality</strong> from the Federation of Karnataka Chambers of Commerce and Industry.
              </p>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-dark)', lineHeight: 1.8, fontWeight: 300 }}>
                This award reflects a growing realization: nature-led land development and commercial viability can coexist seamlessly, delivering both ecological regeneration and long-term asset security.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              style={{ background: '#FFFFFF', padding: '60px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.03)' }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--bg-dark-forest)', marginBottom: '40px', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '20px' }}>
                Corporate Identification
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '5px', fontWeight: 600 }}>Company Name</span>
                  <strong style={{ fontSize: '1.25rem', color: 'var(--bg-dark-forest)', fontWeight: 500 }}>Vanatvam Private Limited</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '5px', fontWeight: 600 }}>CIN</span>
                  <strong style={{ fontSize: '1.25rem', color: 'var(--bg-dark-forest)', fontWeight: 500 }}>U01100KA2022PTC159587</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '5px', fontWeight: 600 }}>Registered Location</span>
                  <strong style={{ fontSize: '1.25rem', color: 'var(--bg-dark-forest)', fontWeight: 500 }}>Bengaluru, Karnataka</strong>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

