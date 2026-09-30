"use client";

import React, {
  useRef,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const LOCAL_IMAGES = [
  "/assets/images/anantavana.webp",
  "/assets/images/madhu_vana.webp",
  "/assets/images/eeshavana.webp",
  "/assets/images/about_story_forest.webp",
  "/assets/images/about_hero_bg.webp",
  "/assets/images/forest_address_bg.webp",
  "/assets/images/impact_seedling.webp",
  "/assets/images/dew_drops_leaf.webp",
  "/assets/images/anantavana.webp",
  "/assets/images/eeshavana.webp",
  "/assets/images/about_story_forest.webp",
  "/assets/images/about_hero_bg.webp",
  "/assets/images/forest_address_bg.webp",
  "/assets/images/impact_seedling.webp",
];

interface ImageCardProps {
  src: string;
  onLoad?: () => void;
}

const ImageCard = ({ src, onLoad }: ImageCardProps) => {
  return (
    <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] flex-shrink-0 bg-[#111] transition-transform duration-300 hover:scale-[1.02] cursor-pointer relative will-change-transform backface-hidden preserve-3d" style={{ borderRadius: '16px', overflow: 'hidden' }}>
      <img
        src={src}
        alt="Gallery Asset"
        loading="lazy"
        onLoad={onLoad}
        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

export function ParallaxGallery() {
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const loadedCountRef = useRef(0);

  const handleItemLoad = useCallback(() => {
    loadedCountRef.current += 1;
    if (!isReady && loadedCountRef.current >= 1) setIsReady(true);
  }, [isReady]);

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const colMedia = useMemo(() => {
    const col1Base = LOCAL_IMAGES.filter((_, i) => i % 4 === 0);
    const col2Base = LOCAL_IMAGES.filter((_, i) => i % 4 === 1);
    const col3Base = LOCAL_IMAGES.filter((_, i) => i % 4 === 2);
    const col4Base = LOCAL_IMAGES.filter((_, i) => i % 4 === 3);

    return {
      col1: [...col1Base, ...col1Base],
      col2: [...col2Base, ...col2Base],
      col3: [...col3Base, ...col3Base],
      col4: [...col4Base, ...col4Base],
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  // Banner animations
  const bannerWidth = useTransform(smoothProgress, [0, 0.15], ["90vw", "100vw"]);
  const bannerHeight = useTransform(smoothProgress, [0, 0.15], ["80vh", "100vh"]);
  const bannerRadius = useTransform(smoothProgress, [0, 0.15], ["48px", "0px"]);
  const bannerBorderWidth = useTransform(smoothProgress, [0, 0.15], ["4px", "0px"]);

  // 3D Matrix animations
  const rotateY = useTransform(smoothProgress, [0.15, 1], [-45, -8]);
  const rotateX = useTransform(smoothProgress, [0.15, 1], [25, 4]);
  const rotateZ = useTransform(smoothProgress, [0.15, 1], [15, 2]);
  const translateZ = useTransform(smoothProgress, [0.15, 1], [-800, 0]);

  // Track columns parallax animations
  const yCol1 = useTransform(smoothProgress, [0.15, 1], ["0%", "-40%"]);
  const yCol2 = useTransform(smoothProgress, [0.15, 1], ["-40%", "10%"]);
  const yCol3 = useTransform(smoothProgress, [0.15, 1], ["0%", "-40%"]);
  const yCol4 = useTransform(smoothProgress, [0.15, 1], ["-30%", "20%"]);

  return (
    <div className="w-full relative bg-[#050505]">
      <section
        ref={containerRef}
        className="relative w-full h-[400vh] bg-[#050505] text-white font-sans selection:bg-white selection:text-black"
      >
        <div className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden">
          <motion.div
            style={{
              width: bannerWidth,
              height: bannerHeight,
              borderRadius: bannerRadius,
              borderWidth: bannerBorderWidth,
              borderColor: "#182C1E", // dark forest color
            }}
            className="relative bg-[#0A130E] overflow-hidden flex items-center justify-center max-w-[1920px] mx-auto will-change-transform backface-hidden preserve-3d"
          >
            <div
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{ perspective: "1000px" }}
            >
              {/* Overlay Content */}
              <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center p-8 bg-black/40">
                <span className="text-[var(--accent-gold)] text-sm font-semibold tracking-widest uppercase mb-4">Vana means forest · Tvam means you</span>
                <h2 className="font-serif text-5xl md:text-7xl text-white mb-6">Not just land.<br/>A way of being.</h2>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl">At Vanatvam, we believe the boundary between people and nature was never meant to exist. You don't just visit nature. <strong>You become a part of it.</strong></p>
              </div>

              {/* Ambient Shadow Box Masking */}
              <div className="absolute inset-0 z-20 shadow-[inset_0_100px_150px_-50px_rgba(10,19,14,1),inset_0_-100px_150px_-50px_rgba(10,19,14,1)]" />
              <div className="absolute inset-0 z-20 shadow-[inset_150px_0_150px_-50px_rgba(10,19,14,1),inset_-150px_0_150px_-50px_rgba(10,19,14,1)]" />

              {/* Parallax Image Grid Matrix */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  rotateZ,
                  z: translateZ,
                  transformStyle: "preserve-3d",
                }}
                className="flex gap-4 md:gap-6 justify-center items-center w-[120vw] h-[150vh] origin-center opacity-70 will-change-transform backface-hidden"
              >
                <motion.div style={{ y: yCol1 }} className="flex flex-col gap-4 md:gap-6 w-[22vw] min-w-[200px] pointer-events-auto">
                  {colMedia.col1.map((src, index) => (
                    <ImageCard key={`col1-${index}`} src={src} onLoad={handleItemLoad} />
                  ))}
                </motion.div>

                <motion.div style={{ y: yCol2 }} className="flex flex-col gap-4 md:gap-6 w-[22vw] min-w-[200px] pointer-events-auto">
                  {colMedia.col2.map((src, index) => (
                    <ImageCard key={`col2-${index}`} src={src} onLoad={handleItemLoad} />
                  ))}
                </motion.div>

                <motion.div style={{ y: yCol3 }} className="flex flex-col gap-4 md:gap-6 w-[22vw] min-w-[200px] pointer-events-auto">
                  {colMedia.col3.map((src, index) => (
                    <ImageCard key={`col3-${index}`} src={src} onLoad={handleItemLoad} />
                  ))}
                </motion.div>

                <motion.div style={{ y: yCol4 }} className="flex flex-col gap-4 md:gap-6 w-[22vw] min-w-[200px] pointer-events-auto">
                  {colMedia.col4.map((src, index) => (
                    <ImageCard key={`col4-${index}`} src={src} onLoad={handleItemLoad} />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
