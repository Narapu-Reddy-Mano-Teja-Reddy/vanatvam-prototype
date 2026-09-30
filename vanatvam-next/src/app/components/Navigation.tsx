'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`} id="main-header" style={{
        backgroundColor: scrolled || isDrawerOpen ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: scrolled || isDrawerOpen ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div className="header-inner">
          <Link href="/" className="logo-group" onClick={closeDrawer}>
            <img src="/assets/images/vanatvamlogo.webp" alt="Vanatvam Logo" className="header-logo-img" />
            <div className="logo-brand" style={{ color: scrolled || isDrawerOpen ? '#1E352F' : '#FFFFFF' }}>VANATVAM</div>
          </Link>
          <nav className="nav-menu">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'Our Story' },
              { path: '/projects', label: 'Projects' },
              { path: '/investment', label: 'Investment' },
              { path: '/blog', label: 'Journal' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                className={`nav-link ${pathname === item.path ? 'active' : ''}`} 
                style={{ color: scrolled || isDrawerOpen ? '#1E352F' : '#FFFFFF' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-right">
            <button className="btn-pill btn-pill-outline" onClick={() => setIsModalOpen(true)} style={{
              borderColor: scrolled || isDrawerOpen ? '#1E352F' : '#FFFFFF',
              color: scrolled || isDrawerOpen ? '#1E352F' : '#FFFFFF'
            }}>Book a Visit</button>
            <div className={`menu-toggle-btn ${isDrawerOpen ? 'open' : ''}`} onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
              <span style={{ backgroundColor: scrolled || isDrawerOpen ? '#1E352F' : '#FFFFFF' }}></span>
              <span style={{ backgroundColor: scrolled || isDrawerOpen ? '#1E352F' : '#FFFFFF' }}></span>
              <span style={{ backgroundColor: scrolled || isDrawerOpen ? '#1E352F' : '#FFFFFF' }}></span>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Menu */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }} 
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white" 
            style={{ position: 'fixed', top: 0, right: 0, width: '350px', maxWidth: '100vw', height: '100vh', padding: '100px 40px 40px', boxShadow: '-5px 0 20px rgba(0,0,0,0.1)', backgroundColor: 'white', zIndex: 999 }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'Our Story' },
                { path: '/projects', label: 'Projects' },
                { path: '/investment', label: 'Investment' },
                { path: '/blog', label: 'Journal' },
                { path: '/contact', label: 'Contact' }
              ].map((item, i) => (
                <motion.div 
                  key={item.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link 
                    href={item.path} 
                    onClick={closeDrawer}
                    style={{ 
                      fontSize: '1.4rem', 
                      color: pathname === item.path ? 'var(--accent-gold)' : '#1E352F', 
                      textDecoration: 'none',
                      fontFamily: 'var(--font-serif)',
                      display: 'block'
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ marginTop: 'auto', paddingTop: '40px', borderTop: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
              <a href="tel:+919999999999" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}><i className="fa-solid fa-phone" style={{marginRight:'8px'}}></i> +91 99999 99999</a>
              <a href="mailto:hello@vanatvam.com" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}><i className="fa-solid fa-envelope" style={{marginRight:'8px'}}></i> hello@vanatvam.com</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 998, backdropFilter: 'blur(3px)' }}
          />
        )}
      </AnimatePresence>

      {/* Book a Visit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-overlay" style={{ display: 'flex', zIndex: 1000 }} onClick={() => setIsModalOpen(false)}>
            <motion.div className="modal-card" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={e => e.stopPropagation()}>
              <span className="modal-close-btn" onClick={() => setIsModalOpen(false)}>&times;</span>
              <h3 className="modal-title">Book a Visit</h3>
              <form>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" />
                </div>
                <button type="submit" className="btn-pill btn-pill-dark" style={{ width: '100%', justifyContent: 'center' }}>Confirm</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
