'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Magnetic from '@/components/premium/Magnetic';

export default function Footer() {
  return (
    <footer className="footer">
      <video className="footer-bg-video" autoPlay loop muted playsInline>
        <source src="/assets/images/footer.mp4" type="video/mp4" />
      </video>
      <div className="footer-overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          className="footer-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div>
            <div className="footer-brand-title">VANATVAM</div>
            <div className="footer-brand-tag">NATURAL FARMS · NATURE COMMUNITIES</div>
            <p style={{ fontSize: '0.85rem', maxWidth: '320px', lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', marginTop: '12px' }}>
              Vanatvam Private Limited is developing sustainable managed farmlands, native forests, and ecological communities across Karnataka. CIN: U01100KA2022PTC159587.
            </p>
          </div>
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/about">Our Story</Link>
              <Link href="/projects">Projects Overview</Link>
              <Link href="/investment">Investment Guide</Link>
              <Link href="/blog">Journal</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
          <div>
            <h4 className="footer-col-title">Our Communities</h4>
            <div className="footer-links">
              <Link href="/brindavana">Brindavana (Pavagada · 30 Acres)</Link>
              <Link href="/madhuvana">Madhuvana (Maddur · 18 Acres)</Link>
              <Link href="/anantavana">Anantavana (Kabini · 35 Acres)</Link>
              <Link href="/eeshavana">Eeshavana (Cauvery Riverfront)</Link>
            </div>
          </div>
          <div>
            <h4 className="footer-col-title">SEO Keywords Index</h4>
            <div className="footer-links" style={{ fontSize: '0.75rem', lineHeight: 1.6, opacity: 0.75 }}>
              <p>Managed Farmland Bangalore · Sustainable Farmland Karnataka · Farm Plots Near Bangalore · Agricultural Land Investment · Eco Friendly Farm Communities · Nakshatra Vana Forest</p>
            </div>
            <div className="footer-socials" style={{ marginTop: '15px', display: 'flex', gap: '15px' }}>
              {[
                { icon: 'fa-instagram', label: 'Instagram' },
                { icon: 'fa-facebook-f', label: 'Facebook' },
                { icon: 'fa-youtube', label: 'YouTube' },
                { icon: 'fa-linkedin-in', label: 'LinkedIn' },
              ].map((s) => (
                <Magnetic key={s.icon} strength={0.5}>
                  <a href="#" aria-label={s.label} className="social-icon" style={{ color: '#fff', fontSize: '1.2rem', transition: 'color 0.3s' }}><i className={`fa-brands ${s.icon}`}></i></a>
                </Magnetic>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="footer-bottom">
          <span>Rooted in nature. Built for generations. CIN: U01100KA2022PTC159587</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px' }}>
            <span>&copy; {new Date().getFullYear()} Vanatvam Private Limited. All rights reserved.</span>
            <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>Powered by <a href="#" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: 600 }}>Tenspick</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
