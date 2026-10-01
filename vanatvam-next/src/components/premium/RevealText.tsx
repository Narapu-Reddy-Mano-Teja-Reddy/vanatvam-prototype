'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

type RevealTextProps = {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  once?: boolean;
  /** stagger per word in seconds */
  stagger?: number;
};

const container: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const word: Variants = {
  hidden: { y: '115%' },
  visible: {
    y: '0%',
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Splits text into words, each masked in an overflow-hidden span, and
 * reveals them with a staggered upward wipe when scrolled into view.
 * Wrap it in whatever heading tag you need — it only renders inline spans.
 */
export default function RevealText({
  children,
  className,
  style,
  delay = 0,
  once = true,
  stagger = 0.06,
}: RevealTextProps) {
  const words = children.split(' ');

  return (
    <motion.span
      className={className}
      style={{ display: 'inline', ...style }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.4 }}
      variants={container}
      custom={stagger}
      transition={{ delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.08em' }}
        >
          <motion.span style={{ display: 'inline-block' }} variants={word}>
            {w}
            {i !== words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
