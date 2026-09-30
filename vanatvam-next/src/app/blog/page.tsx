'use client';
import { motion } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function Blog() {
  const blogs = [
    {
      id: 'sustainable-farming-future',
      title: 'The Future of Sustainable Farming in Karnataka',
      date: 'September 15, 2026',
      author: 'Vanatvam Ecological Team',
      img: '/assets/images/dew_drops_leaf.webp',
      excerpt: 'How integrating traditional agricultural practices with modern water management can save our depleted aquifers.',
      category: 'Ecology'
    },
    {
      id: 'wildlife-corridors-bandipur',
      title: 'Living on the Edge: The Importance of Wildlife Corridors',
      date: 'August 22, 2026',
      author: 'Dr. Vivek Sharma',
      img: '/assets/images/anantavana.webp',
      excerpt: 'A deep dive into why buffer zones like Anantavana are critical for the survival of large mammals in the Bandipur-Nagarhole stretch.',
      category: 'Wildlife'
    },
    {
      id: 'nakshatra-vana-ancient-wisdom',
      title: 'Nakshatra Vana: Ancient Wisdom for Modern Reforestation',
      date: 'July 10, 2026',
      author: 'Vanatvam Heritage Team',
      img: '/assets/images/forest_address_bg.webp',
      excerpt: 'Exploring the astrological and ecological significance of planting the 27 trees of the Nakshatra Vana.',
      category: 'Heritage'
    }
  ];

  return (
    <>
      <Navigation />

      <section style={{ padding: '150px 0 80px', background: 'var(--bg-cream)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em' }}>VANATVAM JOURNAL</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', color: 'var(--bg-dark-forest)', marginTop: '15px' }}>Stories from the Soil</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '20px auto 0' }}>Insights, updates, and deep dives into ecological restoration, nature communities, and sustainable living.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px' }}>
            {blogs.map((blog, i) => (
              <motion.article 
                key={blog.id} 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                style={{ background: '#FFF', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}
              >
                <Link href={`/blog/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                    <img src={blog.img} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="blog-card-img" />
                    <span style={{ position: 'absolute', top: 20, left: 20, background: 'rgba(255,255,255,0.9)', color: 'var(--bg-dark-forest)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {blog.category}
                    </span>
                  </div>
                  <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '15px' }}>{blog.date} · {blog.author}</div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--bg-dark-forest)', marginBottom: '15px', lineHeight: 1.3 }}>{blog.title}</h3>
                    <p style={{ color: 'var(--text-dark)', lineHeight: 1.6, flex: 1 }}>{blog.excerpt}</p>
                    <div style={{ color: 'var(--accent-gold)', fontWeight: 600, fontSize: '0.9rem', marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                      Read Article <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
