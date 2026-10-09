import { motion } from 'framer-motion';
import Link from 'next/link';

export function ConnectivitySection({ title, subtitle, locations }: { title?: string; subtitle?: string; locations?: { time: string; unit: string; desc: string; icon: string }[] }) {
  const defaultLocations = [
    { time: '30', unit: 'Minutes', desc: 'Drive from NICE Road Junction', icon: 'fa-road' },
    { time: '10', unit: 'Minutes', desc: 'Drive to Satellite Town Ring Road', icon: 'fa-route' },
    { time: '5', unit: 'Minutes', desc: 'Drive to Nearest Hospital', icon: 'fa-hospital' },
    { time: '15', unit: 'Minutes', desc: 'Drive to Education Institutions', icon: 'fa-school' },
  ];
  
  const displayLocations = locations || defaultLocations;

  return (
    <section style={{ padding: 'clamp(60px, 8vh, 90px) 0', background: 'var(--bg-cream)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
            {subtitle || 'Location Highlights'}
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--bg-dark-forest)' }}>
            {title || 'Perfect Blend of Convenience & Connectivity'}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {displayLocations.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: '#FFF', padding: '30px', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 10px 20px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '16px' }}><i className={`fa-solid ${item.icon}`}></i></div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--bg-dark-forest)', lineHeight: 1 }}>{item.time}</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>{item.unit}</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OtherProjectsSection({ currentProjectId }: { currentProjectId: string }) {
  const allProjects = [
    { id: 'brindavana', name: 'BRINDAVANA', loc: 'Pavagada', img: '/assets/images/Project-Logos/BrindaVana.webp' },
    { id: 'madhuvana', name: 'MADHUVANA', loc: 'Maddur', img: '/assets/images/Project-Logos/Logo-MadhuVana.svg' },
    { id: 'anantavana', name: 'ANANTAVANA', loc: 'Kabini', img: '/assets/images/Project-Logos/Anantavana.webp' },
    { id: 'eeshavana', name: 'EESHAVANA', loc: 'Kollegala', img: '/assets/images/Project-Logos/eeshavanaalogo.webp' }
  ];

  const otherProjects = allProjects.filter(p => p.id !== currentProjectId);

  return (
    <section style={{ padding: 'clamp(60px, 8vh, 90px) 0', background: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', color: 'var(--bg-dark-forest)' }}>
            Discover Other Projects
          </h3>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
          {otherProjects.map((p, i) => (
            <Link key={p.id} href={`/${p.id}`} style={{ textDecoration: 'none' }}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: '#FFF', width: '260px', height: '160px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.02)', padding: '20px', transition: 'transform 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>{p.loc}</span>
                <img src={p.img} alt={p.name} style={{ maxHeight: '50px', maxWidth: '160px', objectFit: 'contain' }} />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DownloadBrochureButton() {
  return (
    <a href="#" className="btn-pill btn-pill-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '30px' }}>
      <i className="fa-solid fa-download"></i> Download Brochure
    </a>
  );
}
