'use client';
import { motion } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams();
  const id = params.id as string;

  const blogs: Record<string, any> = {
    'sustainable-farming-future': {
      title: 'The Future of Sustainable Farming in Karnataka',
      date: 'September 15, 2026',
      author: 'Vanatvam Ecological Team',
      img: '/assets/images/dew_drops_leaf.webp',
      category: 'Ecology',
      content: (
        <>
          <p>As groundwater levels continue to drop across Karnataka, the traditional models of agriculture are being heavily tested. The reliance on chemical fertilizers and deep borewells has led to soil degradation and water scarcity. At Vanatvam, we believe the future of farming lies in returning to ecological roots while applying modern hydrological understanding and permaculture principles.</p>
          
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--bg-dark-forest)', marginTop: '40px', marginBottom: '20px' }}>The Role of Deep Trenching</h3>
          <p>One of the most effective methods we've implemented at Brindavana is deep trenching along the natural contours of the land. Instead of fighting gravity, we use it. This slows down surface runoff during the monsoon, forcing the rainwater to percolate deep down and passively recharge the underground aquifer over the months following the rains.</p>
          
          <img src="/assets/images/impact_seedling.webp" alt="Seedling" style={{ width: '100%', borderRadius: '16px', margin: '40px 0', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} />
          
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--bg-dark-forest)', marginTop: '40px', marginBottom: '20px' }}>Integrating Native Canopy Trees</h3>
          <p>Sustainable farming isn't just about crops; it's about the entire ecosystem. By surrounding farm plots with native, deep-rooted canopy trees, we create natural windbreaks, drastically reduce topsoil erosion, and invite pollinators that are absolutely essential for high crop yields.</p>
          
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--bg-dark-forest)', marginTop: '40px', marginBottom: '20px' }}>A Community Approach</h3>
          <p>The transition to sustainable farming cannot happen in isolation. By creating farm communities, we pool resources for organic composting, shared water management systems, and collective harvesting. This model not only regenerates the land but provides long-term food security and asset value for everyone involved.</p>
        </>
      )
    },
    'wildlife-corridors-bandipur': {
      title: 'Living on the Edge: The Importance of Wildlife Corridors',
      date: 'August 22, 2026',
      author: 'Dr. Vivek Sharma',
      img: '/assets/images/anantavana.webp',
      category: 'Wildlife',
      content: (
        <>
          <p>The Bandipur-Nagarhole stretch is one of the most vital wildlife corridors in Southern India, supporting one of the highest densities of wild elephants and tigers in the world. However, as agricultural borders expand and human settlements encroach, human-wildlife conflict increases at an alarming rate.</p>
          
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--bg-dark-forest)', marginTop: '40px', marginBottom: '20px' }}>Creating Ecological Buffer Zones</h3>
          <p>Projects like Anantavana act as critical ecological buffer zones. By maintaining an extremely low human footprint (less than 10% built area) and planting highly specific flora species that herbivores avoid, these buffer zones protect the core forest. At the same time, they give local communities and nature enthusiasts a sustainable way to live in harmony near the wildlife without disrupting migratory paths.</p>
          
          <blockquote style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '24px', margin: '40px 0', fontSize: '1.4rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--bg-dark-forest)', lineHeight: 1.6 }}>
            "Conservation is not about building higher fences to keep people out; it's about teaching people how to live alongside nature, turning them into custodians rather than consumers."
          </blockquote>
          
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--bg-dark-forest)', marginTop: '40px', marginBottom: '20px' }}>The Economics of Co-existence</h3>
          <p>When communities understand that a healthy forest directly contributes to higher property values, cleaner air, and a stable micro-climate, conservation becomes an economic incentive. We are proving that luxury and ecology are not mutually exclusive—they are deeply intertwined.</p>
        </>
      )
    },
    'nakshatra-vana-ancient-wisdom': {
      title: 'Nakshatra Vana: Ancient Wisdom for Modern Reforestation',
      date: 'July 10, 2026',
      author: 'Vanatvam Heritage Team',
      img: '/assets/images/forest_address_bg.webp',
      category: 'Heritage',
      content: (
        <>
          <p>In traditional Indian ecology, trees are deeply intertwined with the cosmos and human well-being. The ancient concept of the Nakshatra Vana involves planting 27 specific species of trees, each uniquely corresponding to one of the 27 Nakshatras (constellations) in Vedic astrology.</p>
          
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--bg-dark-forest)', marginTop: '40px', marginBottom: '20px' }}>Profound Ecological Benefits</h3>
          <p>While the roots of this practice are spiritual, the tangible ecological benefits are profound and measurable. These 27 species are highly diverse, spanning medicinal plants like Neem and Jamun, to massive, long-living canopy trees like the Banyan and Peepal.</p>
          
          <p>Planting them together in a specific geometric arrangement creates a highly resilient micro-forest. Because of the vast difference in root depths and leaf structures, they do not compete for the same soil nutrients. Instead, they support a diverse range of endemic bird and insect life.</p>
          
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--bg-dark-forest)', marginTop: '40px', marginBottom: '20px' }}>A Space for Healing</h3>
          <p>Beyond ecology, a Nakshatra Vana serves as a natural sanctuary for mental and physical healing. The combined phytoncides (wood essential oils) released by this specific combination of trees are known to lower blood pressure and reduce cortisol levels in those who walk through the Vana regularly.</p>
        </>
      )
    }
  };

  const blog = blogs[id];

  if (!blog) {
    return (
      <>
        <Navigation />
        <div style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-cream)' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--bg-dark-forest)' }}>Article Not Found</h1>
            <Link href="/blog" className="btn-pill btn-pill-dark" style={{ marginTop: '20px' }}>Back to Journal</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />

      <article style={{ background: 'var(--bg-cream)', paddingBottom: '120px' }}>
        <header style={{ height: '60vh', minHeight: '500px', position: 'relative', display: 'flex', alignItems: 'flex-end', paddingBottom: '60px' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img src={blog.img} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(18,34,23,0.3) 0%, rgba(18,34,23,0.95) 100%)' }}></div>
          </div>
          
          <div className="container relative" style={{ zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ display: 'inline-block', background: 'var(--accent-gold)', color: '#122217', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '25px' }}>
                {blog.category}
              </span>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: '#FFF', lineHeight: 1.1, maxWidth: '900px', marginBottom: '25px' }}>
                {blog.title}
              </h1>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <span>{blog.date}</span>
                <span style={{ width: '5px', height: '5px', background: 'var(--accent-gold)', borderRadius: '50%' }}></span>
                <span>By {blog.author}</span>
              </div>
            </motion.div>
          </div>
        </header>

        <div className="container" style={{ marginTop: '80px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'flex-start' }}>
            
            {/* Main Content Column */}
            <div style={{ flex: '1 1 600px', background: '#FFF', padding: '60px 80px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.03)' }}>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.3 }}
                style={{ fontSize: '1.25rem', color: 'var(--text-dark)', lineHeight: 1.9, fontWeight: 300 }}
                className="blog-content"
              >
                {blog.content}
              </motion.div>

              <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/blog" style={{ color: 'var(--bg-dark-forest)', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', fontSize: '1.1rem' }}>
                  <i className="fa-solid fa-arrow-left" style={{ marginRight: '12px' }}></i> Back to Journal
                </Link>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div style={{ flex: '0 0 350px', position: 'sticky', top: '120px' }}>
              <div style={{ background: '#FFF', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '15px', fontWeight: 600 }}>Written By</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--bg-dark-forest)', margin: '0 0 10px 0' }}>{blog.author}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  A core part of the Vanatvam team dedicated to ecological restoration, sustainable design, and preserving indigenous knowledge.
                </p>
              </div>

              <div style={{ background: 'var(--bg-dark-forest)', padding: '40px', borderRadius: '24px', color: '#FFF' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--accent-gold)', margin: '0 0 15px 0' }}>Join the Ecosystem</h3>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '25px' }}>
                  Discover our upcoming ecological communities and start your journey towards sustainable living.
                </p>
                <Link href="/projects" className="btn-pill btn-pill-gold" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                  Explore Projects
                </Link>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
