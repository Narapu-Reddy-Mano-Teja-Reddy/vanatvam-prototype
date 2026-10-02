'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import AccordionGallery from '@/components/premium/AccordionGallery';
import Counter from '@/components/premium/Counter';
import Magnetic from '@/components/premium/Magnetic';
import { useLenis } from '@/components/premium/SmoothScroll';

type PlotInfo = {
  title: string;
  area: string;
  dim: string;
  facing: string;
  status: string;
  trees: string;
};

const plotHotspots: { id: string; top: string; left: string; premium?: boolean }[] = [
  { id: 'A1', top: '9%', left: '63%' },
  { id: 'A2', top: '13%', left: '65%' },
  { id: 'A3', top: '17%', left: '67%' },
  { id: 'A4', top: '21%', left: '71%' },
  { id: 'A5', top: '22%', left: '63%' },
  { id: 'A13', top: '35%', left: '71%', premium: true },
  { id: 'A10', top: '41%', left: '67%' },
  { id: 'A11', top: '44%', left: '74%' },
  { id: 'A12', top: '47%', left: '77%' },
  { id: 'A14', top: '52%', left: '83%' },
  { id: 'A15', top: '54%', left: '85%' },
  { id: 'B1', top: '46%', left: '59%' },
  { id: 'B2', top: '49%', left: '61%' },
  { id: 'B3', top: '52%', left: '64%' },
  { id: 'B4', top: '54%', left: '69%' },
  { id: 'B5', top: '56%', left: '73%' },
  { id: 'B12', top: '63%', left: '62%' },
  { id: 'B13', top: '65%', left: '65%' },
  { id: 'B14', top: '67%', left: '69%' },
  { id: 'B15', top: '68%', left: '74%', premium: true },
  { id: 'B21', top: '78%', left: '60%' },
  { id: 'B22', top: '80%', left: '62%' },
  { id: 'B23', top: '81%', left: '68%' },
  { id: 'B24', top: '83%', left: '73%' },
  { id: 'B25', top: '86%', left: '78%' },
  { id: 'B28', top: '89%', left: '83%' },
];

const amenityHotspots: { id: string; top: string; left: string; title: string }[] = [
  { id: 'A', top: '5%', left: '44%', title: 'Entrance / Site for School' },
  { id: 'B', top: '14%', left: '44%', title: 'Theme park' },
  { id: 'C', top: '27%', left: '44%', title: 'Mud House' },
  { id: 'D', top: '32%', left: '44%', title: 'Cottage' },
  { id: 'E', top: '37%', left: '44%', title: 'Pond' },
  { id: 'F', top: '42%', left: '44%', title: 'Tree House' },
  { id: 'G', top: '71%', left: '44%', title: 'Road & Circular Garden' },
  { id: 'H', top: '79%', left: '44%', title: 'Natural Pond' },
];

const plotData: Record<string, PlotInfo> = {
  A1: { title: 'Plot A1', area: '10,200 sq. ft', dim: '85 ft × 120 ft', facing: 'North-East', status: 'Available', trees: '3 Mahogany trees, 2 Jackfruit trees, rich fertile soil.' },
  A2: { title: 'Plot A2', area: '10,500 sq. ft', dim: '85 ft × 123 ft', facing: 'East Facing', status: 'Available', trees: '4 Alphonso Mango trees, 1 Coconut palm.' },
  A3: { title: 'Plot A3', area: '10,100 sq. ft', dim: '80 ft × 126 ft', facing: 'North Facing', status: 'Available', trees: '5 Mango trees, 2 Rosewood saplings.' },
  A4: { title: 'Plot A4', area: '10,800 sq. ft', dim: '90 ft × 120 ft', facing: 'East Facing', status: 'Available', trees: '4 Mango trees, drip irrigation line pre-installed.' },
  A5: { title: 'Plot A5', area: '10,000 sq. ft', dim: '80 ft × 125 ft', facing: 'North Facing', status: 'Available', trees: '3 Teakwood trees, 2 Jackfruit trees.' },
  A13: { title: 'Plot A13 (Cottage & Water Body)', area: '15,000 sq. ft', dim: '120 ft × 125 ft', facing: 'East Facing (Waterfront)', status: 'Premium Waterfront', trees: 'Prime cottage plot adjacent to natural water body & mature orchard.' },
  A10: { title: 'Plot A10', area: '10,400 sq. ft', dim: '85 ft × 122 ft', facing: 'East Facing', status: 'Available', trees: '4 Alphonso Mango trees, fertile red loam soil.' },
  A11: { title: 'Plot A11', area: '10,600 sq. ft', dim: '85 ft × 124 ft', facing: 'East Facing', status: 'Available', trees: '5 Mango trees, 2 Teakwood trees.' },
  A12: { title: 'Plot A12', area: '10,200 sq. ft', dim: '82 ft × 124 ft', facing: 'North Facing', status: 'Available', trees: '3 Mahogany trees, rich organic soil.' },
  A14: { title: 'Plot A14', area: '10,450 sq. ft', dim: '85 ft × 123 ft', facing: 'East Facing', status: 'Available', trees: 'Rich fertile red soil with 4 mature Alphonso Mango trees.' },
  A15: { title: 'Plot A15', area: '10,800 sq. ft', dim: '88 ft × 123 ft', facing: 'North Facing', status: 'Reserved', trees: 'Pre-reserved parcel with mature teakwood canopy.' },
  B1: { title: 'Plot B1', area: '10,200 sq. ft', dim: '82 ft × 124 ft', facing: 'East Facing', status: 'Available', trees: '4 Mango trees, 2 Coconut trees.' },
  B2: { title: 'Plot B2', area: '10,500 sq. ft', dim: '85 ft × 123 ft', facing: 'East Facing', status: 'Available', trees: '3 Teakwood trees, fertile soil.' },
  B3: { title: 'Plot B3', area: '10,800 sq. ft', dim: '88 ft × 123 ft', facing: 'North-East', status: 'Available', trees: '5 Alphonso Mango trees.' },
  B15: { title: 'Plot B15 (Garden Circle)', area: '12,500 sq. ft', dim: '100 ft × 125 ft', facing: 'North-East Corner', status: 'Premium Corner', trees: 'Estate parcel facing circular garden with 6 fruit trees.' },
  B28: { title: 'Plot B28', area: '11,000 sq. ft', dim: '90 ft × 122 ft', facing: 'East Facing', status: 'Available', trees: '4 Mango trees, 3 Coconut palms.' },
};

const amenityData: Record<string, PlotInfo> = {
  A: { title: 'Amenity A: Entrance Arch', area: 'Site for School & Security', dim: 'Main Gate Access', facing: 'North Entry', status: 'Community Zone', trees: 'Grand entry gate with school site & shaded avenue trees.' },
  B: { title: 'Amenity B: Theme Park', area: '2.5 Acres Green Park', dim: 'Central Sector', facing: 'All Directions', status: 'Green Zone', trees: 'Lush botanical theme park with native flowering plants.' },
  C: { title: 'Amenity C: Mud House', area: 'Eco Living Center', dim: '50 ft × 80 ft', facing: 'East Facing', status: 'Heritage Zone', trees: 'Sustainable mud block architecture with traditional clay tiles.' },
  D: { title: 'Amenity D: Cottage', area: 'Guest Retreat', dim: '60 ft × 90 ft', facing: 'Waterfront', status: 'Heritage Zone', trees: 'Serene eco-cottages overlooking the water body.' },
  E: { title: 'Amenity E: Pond', area: 'Rainwater Pond', dim: 'Natural Contour', facing: 'Waterfront', status: 'Eco Zone', trees: 'Natural water reservoir supporting birds & aquatic flora.' },
  F: { title: 'Amenity F: Tree House', area: 'Canopy Deck', dim: 'Elevated Platform', facing: 'Canopy View', status: 'Adventure Zone', trees: 'Wooden tree house built amidst mature native trees.' },
  G: { title: 'Amenity G: Road & Circular Garden', area: 'Tree-lined Avenues', dim: '30 ft Wide Road', facing: 'Circulation', status: 'Infrastructure', trees: 'Tree-lined asphalt & paver roads with circular garden hub.' },
  H: { title: 'Amenity H: Natural Pond', area: 'Secluded Lotus Pond', dim: 'Natural Basin', facing: 'Waterfront', status: 'Eco Reserve', trees: 'Secluded lotus pond surrounded by fruit-bearing trees.' },
};

function fallbackPlot(id: string): PlotInfo {
  return { title: `Plot ${id}`, area: '10,000 sq. ft', dim: '80 ft × 125 ft', facing: 'East Facing', status: 'Available', trees: '4 Native fruit trees pre-planted with drip lines.' };
}

function statusColors(status: string) {
  if (status === 'Reserved') return { bg: 'rgba(180, 80, 60, 0.15)', color: '#B4503C' };
  if (status.includes('Premium')) return { bg: 'rgba(198, 162, 101, 0.2)', color: '#9E7A3E' };
  return { bg: 'rgba(46, 125, 50, 0.15)', color: '#2E7D32' };
}

const amenities = [
  { letter: 'A', icon: 'fa-archway', name: 'Entrance & Site', desc: 'Grand eco-entrance arch with security and school site access.' },
  { letter: 'B', icon: 'fa-tree', name: 'Theme Park', desc: 'Lush botanical theme park and green biodiversity trails.' },
  { letter: 'C', icon: 'fa-house', name: 'Mud House', desc: 'Traditional eco-friendly mud house built with sustainable earth blocks.' },
  { letter: 'D', icon: 'fa-house-chimney', name: 'Cottage Retreat', desc: 'Serene heritage cottages overlooking private water bodies.' },
  { letter: 'E', icon: 'fa-water', name: 'Pond', desc: 'Rainwater harvesting pond supporting native flora and aquatic life.' },
  { letter: 'F', icon: 'fa-tree-city', name: 'Tree House', desc: 'Elevated wooden tree house perched amidst ancient canopy trees.' },
  { letter: 'G', icon: 'fa-route', name: 'Tree-lined Roads', desc: 'Organic paved avenues with tree-lined walking tracks.' },
  { letter: 'H', icon: 'fa-droplet', name: 'Natural Pond', desc: 'Secluded natural lotus pond for relaxation and bird watching.' },
];

const birds = [
  { img: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=500&q=80', name: 'Indian Grey Hornbill', sub: 'Canopy Resident' },
  { img: 'https://images.unsplash.com/photo-1574063413132-355dbfd83e0c?auto=format&fit=crop&w=500&q=80', name: 'Woolly-necked Stork', sub: 'Wetland Visitor' },
  { img: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=500&q=80', name: 'Asian Green Bee-eater', sub: 'Meadow Hunter' },
  { img: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=500&q=80', name: 'Baya Weaver', sub: 'Nest Builder' },
  { img: 'https://images.unsplash.com/photo-1518992028580-6d57bd80f2dd?auto=format&fit=crop&w=500&q=80', name: 'Purple-rumped Sunbird', sub: 'Nectar Feeder' },
  { img: 'https://images.unsplash.com/photo-1551085254-e96b210df58a?auto=format&fit=crop&w=500&q=80', name: 'Purple Heron', sub: 'Pond Wader' },
];

export default function Madhuvana() {
  
  const galleryItems = [
    { img: '/assets/images/madhu_vana.webp', title: 'Water-Led Ecology', desc: 'A landscape sculpted around flowing canals and an extensive central lake.' },
    { img: '/assets/images/madhuvana_gallery_1.webp', title: 'The Secret Vanas', desc: 'Five sacred groves aligned with ancient Vedic wisdom and celestial energies.' },
    { img: '/assets/images/about_hero_bg.webp', title: 'Canopy Density', desc: 'Over 5,000 native trees forming a thriving habitat for birds and pollinators.' },
    { img: '/assets/images/master_plan_map.webp', title: 'Farm Parcels', desc: 'Spacious quarter-acre plots designed for integrated organic farming and living.' },
  ];

  const [selected, setSelected] = useState<{ kind: 'plot' | 'amenity'; id: string } | null>(null);
  const lenisRef = useLenis();

  const scrollToMasterPlan = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lenisRef?.current) {
      lenisRef.current.scrollTo('#master-plan', { offset: -70, duration: 1.4 });
    } else {
      document.querySelector('#master-plan')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAmenities = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lenisRef?.current) {
      lenisRef.current.scrollTo('#amenities', { offset: -70, duration: 1.4 });
    } else {
      document.querySelector('#amenities')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const info = selected
    ? selected.kind === 'plot'
      ? plotData[selected.id] ?? fallbackPlot(selected.id)
      : amenityData[selected.id]
    : null;
  const badge = info ? statusColors(info.status) : null;

  return (
    <>
      <Navigation />

      <section className="hero" style={{ height: '85vh', position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/assets/images/madhu_vana.webp" alt="MadhuVana Cottages & Landscape" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14, 26, 18, 0.4) 0%, rgba(14, 26, 18, 0.88) 100%)' }} />
        </div>

        <div className="container relative" style={{ zIndex: 1, paddingTop: '60px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: '640px' }}>
            <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: '#FFF', borderRadius: '30px', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '24px' }}>
              Maddur, Karnataka
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 5.5vw, 5rem)', color: '#FFF', lineHeight: 1.05, marginBottom: '20px' }}>
              MadhuVana<br/><span style={{ fontStyle: 'italic', fontWeight: 300 }}>The Sweet Symphony of Nature</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, fontWeight: 300, marginBottom: '35px' }}>
              Nestled near Maddur, MadhuVana is a serene 18-acre ecosystem shaped by water, fertile soil, and over 250 native trees. Designed for farm parcels from 8,000 sq.ft onwards.
            </p>
            <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Magnetic strength={0.3}>
                <a href="#master-plan" onClick={scrollToMasterPlan} className="btn-pill btn-pill-white">
                  <i className="fa-solid fa-cube"></i> Explore 3D Master Plan
                </a>
              </Magnetic>
              <a href="#amenities" onClick={scrollToAmenities} className="link-underline" style={{ color: '#FFFFFF' }}>
                View Core Amenities <i className="fa-solid fa-arrow-right arrow"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: '#17271B', color: '#FFFFFF', padding: '40px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '30px', textAlign: 'center' }}>
            {[
              { value: 18, suffix: ' Acres', label: 'Total Ecosystem' },
              { value: 250, suffix: '+', label: 'Native Trees' },
              { value: 8000, suffix: '+ sq.ft', label: 'Farm Parcels' },
              { value: 20, suffix: '%+', label: 'Open & Green Spaces' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--accent-gold)' }}>
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section style={{ padding: '120px 0', background: 'var(--bg-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'flex-start' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: '20px' }}>PROJECT OVERVIEW</span>

              <div style={{ marginBottom: '40px' }}>
                <img src="/assets/projects/Logo-MadhuVana.svg" alt="MADHUVANA Logo" style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain' }} />
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 2.8vw, 2.8rem)', color: 'var(--bg-dark-forest)', marginBottom: '30px', lineHeight: 1.2 }} dangerouslySetInnerHTML={{ __html: 'Ancient forest wisdom<br/>meets modern living.' }}>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-dark)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                <p>MadhuVana is a joint offering from VanaTvam and Indus Herbs who have extensive experience in designing and developing eco-landscaping, afforestation, and themed herbal gardens. MadhuVana is spread across 18 acres and when completed, will have over 5000 trees and plants, ponds, gazebos, walkways, perimeter fencing, and 24/7 security. The project will also have a common area with cottages/rooms with kitchenette, landscaped garden, car parking, and a dining area among others.</p>
                <p>Located off the 10-lane Bangalore and Mysore highway, MadhuVana is just about 20 km from Maddur and Mandya and is surrounded by River Cauvery and interlaced with Vishweshwaraiah canals. MadhuVana is offered as quarter-acre farm plots with various trees and herbal plants in each plot, and we will also plant vegetables and fruit trees grown using 100% natural and organic methods. This offering is envisioned as a &ldquo;Natural, Sustainable Farm Community&rdquo; — meaning we are building a strong community that believes in a common goal and shares common views. Your neighbours are people who think and live like you!</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: '1px solid var(--border-light)', paddingTop: '40px', marginTop: '40px' }}>
                <div>
                  <h4 style={{ color: 'var(--bg-dark-forest)', marginBottom: '10px', fontSize: '1.2rem' }}>The Secret Vanas</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Explore five sacred groves including Nakshatravana, Rashivana, and Vinayakavana, each designed with specific spiritual plants and ancient Vedic alignments.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--bg-dark-forest)', marginBottom: '10px', fontSize: '1.2rem' }}>Embraced by Water</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Bordered on three sides by flowing channels, featuring a serene central lake and organic fruit orchards.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ position: 'sticky', top: '120px' }}>
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

      {/* Interactive 3D Master Plan */}
      <section id="master-plan" style={{ padding: '70px 0 100px', background: '#F4F1EA' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="subtitle-tag">Interactive Master Plan</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', color: 'var(--bg-dark-forest)' }}>
              Click Any Plot or Amenity to Explore
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '560px', margin: '12px auto 0' }}>
              Every parcel below is clickable — explore indicative area, dimensions, orientation, and tree cover for each plot.
            </p>
          </div>

          <div className="booklet-masterplan-wrapper">
            <div className="booklet-masterplan-container">
              <img src="/assets/images/master_plan_map.webp" alt="Official Master Plan Layout" className="booklet-masterplan-img" />

              {plotHotspots.map((p) => (
                <div
                  key={p.id}
                  className={`plot-hotspot-v2 ${p.premium ? 'premium' : ''}`}
                  style={{ top: p.top, left: p.left }}
                  title={`Plot ${p.id}`}
                  onClick={() => setSelected({ kind: 'plot', id: p.id })}
                >
                  {p.id}{p.premium ? ' ★' : ''}
                </div>
              ))}

              {amenityHotspots.map((a) => (
                <div
                  key={a.id}
                  className="amenity-pin-v2"
                  style={{ top: a.top, left: a.left }}
                  title={`${a.id}: ${a.title}`}
                  onClick={() => setSelected({ kind: 'amenity', id: a.id })}
                >
                  {a.id}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12 Amenities Grid */}
      <section id="amenities" style={{ padding: '100px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="subtitle-tag">Master Plan Amenities</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', color: 'var(--bg-dark-forest)' }}>
              Designed for Slower, Holistic Living
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '12px auto 0' }}>
              Explore the key community spaces and natural sanctuaries thoughtfully embedded within MadhuVana.
            </p>
          </div>

          <div className="amenities-grid-12">
            {amenities.map((a, i) => (
              <motion.div key={a.letter} className="amenity-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <div className="amenity-letter">{a.letter}</div>
                <div className="amenity-icon"><i className={`fa-solid ${a.icon}`}></i></div>
                <h4 className="amenity-name">{a.name}</h4>
                <p className="amenity-desc">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Winged Visitors */}
      <section id="birds" style={{ padding: '100px 0', background: '#122217', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ marginBottom: '50px' }}>
            <span className="subtitle-tag subtitle-tag-light">Fauna &amp; Biodiversity</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)' }}>Winged Visitors of MadhuVana</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '520px', fontWeight: 300, marginTop: '10px' }}>
              Over 30+ species of migratory and resident birds thrive across MadhuVana&apos;s canopy and water bodies.
            </p>
          </div>

          <div className="birds-grid-6">
            {birds.map((b, i) => (
              <motion.div key={b.name} className="bird-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}>
                <div className="bird-card-img"><img src={b.img} alt={b.name} /></div>
                <h4 className="bird-name">{b.name}</h4>
                <p className="bird-sub">{b.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {galleryItems.length > 0 && (
        <section style={{ padding: '100px 0', background: '#FFF' }}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.1em', display: 'block', marginBottom: '20px', textAlign: 'center' }}>GALLERY</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.0vw, 3.0rem)', color: 'var(--bg-dark-forest)', marginBottom: '60px', textAlign: 'center' }}>
                Life at MADHUVANA
              </h2>
            </motion.div>
            
            <AccordionGallery items={galleryItems} height="500px" />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg">
          <img src="/assets/images/cta_sunset_bg.webp" alt="Sunset landscape" />
        </div>
        <div className="cta-overlay"></div>
        <div className="container relative-z">
          <motion.div className="cta-content" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', margin: '0 auto', maxWidth: '650px' }}>
            <h2 className="cta-title">Own Your Piece of MadhuVana.</h2>
            <p className="cta-sub">18 Acres · Maddur · Farm Parcels from 8,000 sq.ft</p>
            <Magnetic strength={0.3}>
              <Link href="/contact" className="btn-pill btn-pill-white" style={{ margin: '0 auto' }}>
                Schedule Site Visit &amp; Plot Inspection <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Plot / Amenity Detail Modal */}
      <AnimatePresence>
        {selected && info && badge && (
          <div className="modal-overlay active" style={{ display: 'flex' }} onClick={() => setSelected(null)}>
            <motion.div
              className="modal-card plot-modal-card"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="modal-close-btn" onClick={() => setSelected(null)}>&times;</span>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '15px', marginBottom: '20px' }}>
                <div>
                  <span className="subtitle-tag" style={{ margin: 0 }}>{selected.kind === 'plot' ? 'MADHUVANA PARCEL' : 'MADHUVANA AMENITY'}</span>
                  <h3 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '2rem', color: 'var(--text-dark)' }}>{info.title}</h3>
                </div>
                <div style={{ background: badge.bg, color: badge.color, padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 500, height: 'fit-content' }}>
                  {info.status}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: '#F7F5F0', padding: '14px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{selected.kind === 'plot' ? 'Parcel Area' : 'Scope'}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}>{info.area}</div>
                </div>
                <div style={{ background: '#F7F5F0', padding: '14px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Dimensions</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}>{info.dim}</div>
                </div>
                <div style={{ background: '#F7F5F0', padding: '14px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Orientation</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}>{info.facing}</div>
                </div>
                <div style={{ background: '#F7F5F0', padding: '14px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Pricing</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-gold)' }}>Contact for Pricing</div>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dark)', marginBottom: '8px' }}>Trees &amp; Soil Profile</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{info.trees}</p>
              </div>

              <Magnetic strength={0.15} style={{ display: 'block', width: '100%' }}>
                <Link href="/contact" className="btn-pill btn-pill-dark" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSelected(null)}>
                  Book Site Visit for This {selected.kind === 'plot' ? 'Plot' : 'Amenity'} <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </Magnetic>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
