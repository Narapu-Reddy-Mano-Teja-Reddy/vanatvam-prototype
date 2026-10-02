'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type GalleryItem = {
  img: string;
  title?: string;
  desc?: string;
};

export default function AccordionGallery({ items, height = '500px' }: { items: GalleryItem[], height?: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <div style={{ display: 'flex', gap: '16px', height, width: '100%', overflow: 'hidden', borderRadius: '24px' }}>
      {items.map((item, index) => {
        const isActive = hoveredIndex === index;
        return (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            layout
            initial={false}
            animate={{
              flex: isActive ? 4 : 1,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: isActive ? '0 20px 40px rgba(0,0,0,0.2)' : 'none',
              minWidth: '80px',
            }}
          >
            <motion.img
              src={item.img}
              alt={item.title || `Gallery Image ${index}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                inset: 0,
              }}
              animate={{
                scale: isActive ? 1.05 : 1,
                filter: isActive ? 'brightness(0.9)' : 'brightness(0.7)'
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            
            {/* Gradient Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)',
              opacity: isActive ? 1 : 0.4,
              transition: 'opacity 0.4s ease',
            }} />

            <AnimatePresence>
              {isActive && item.title && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '30px',
                    right: '30px',
                    color: '#FFF',
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', margin: '0 0 10px 0', lineHeight: 1.1 }}>{item.title}</h3>
                  {item.desc && (
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.5, maxWidth: '400px' }}>
                      {item.desc}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Vertical title for non-active state */}
            <AnimatePresence>
              {!isActive && item.title && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    color: '#FFF',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    transformOrigin: 'center bottom',
                    rotate: '180deg'
                  }}
                >
                  {item.title}
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        );
      })}
    </div>
  );
}
