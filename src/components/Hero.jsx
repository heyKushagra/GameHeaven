import { motion } from 'framer-motion';
import { Calendar, Gamepad2, ChevronDown } from 'lucide-react';
import heroBg from '../assets/images/hero-bg.png';

/* ───── PlayStation floating shapes ───── */
const psShapes = [
  { // Circle
    d: 'M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0Z',
    size: 60,
    top: '12%',
    left: '8%',
    delay: 0,
  },
  { // Triangle
    d: 'M12 2 L22 22 L2 22 Z',
    size: 50,
    top: '22%',
    right: '10%',
    delay: 1.2,
  },
  { // Square
    d: 'M2 2h20v20H2z',
    size: 44,
    bottom: '28%',
    left: '6%',
    delay: 0.6,
  },
  { // Cross
    d: 'M4 12h16M12 4v16',
    size: 52,
    bottom: '18%',
    right: '7%',
    delay: 1.8,
    isStroke: true,
  },
  { // Circle small
    d: 'M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0Z',
    size: 36,
    top: '55%',
    left: '85%',
    delay: 2.4,
  },
  { // Triangle small
    d: 'M12 2 L22 22 L2 22 Z',
    size: 32,
    top: '70%',
    left: '15%',
    delay: 3,
  },
];

const floatVariants = {
  animate: (delay) => ({
    y: [0, -18, 0, 14, 0],
    rotate: [0, 6, -4, 2, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    },
  }),
};

/* ───── Stagger container / child variants ───── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ───── Component ───── */
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Subtle gradient bleed at the bottom so the section transitions smoothly */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />

      {/* Floating PlayStation shapes */}
      {psShapes.map((shape, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute pointer-events-none select-none"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
          custom={shape.delay}
          variants={floatVariants}
          animate="animate"
        >
          <path
            d={shape.d}
            stroke="rgba(124,92,224,0.12)"
            strokeWidth={shape.isStroke ? 2.5 : 1.2}
            fill={shape.isStroke ? 'none' : 'rgba(124,92,224,0.06)'}
          />
        </motion.svg>
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Small badge */}
        <motion.span
          variants={fadeUp}
          className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/15 text-accent-light border border-accent/20"
        >
          Basti&apos;s Premium Gaming Lounge
        </motion.span>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-bold font-heading text-white leading-tight"
        >
          Game Heaven
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed"
        >
          Play PS5, Racing Simulators, Fighting Games and More in Basti&apos;s
          Premium Gaming Lounge.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4 justify-center">
          <a href="#book-slot" className="btn-primary">
            <Calendar size={18} />
            Book Slot
          </a>
          <a href="#games" className="btn-secondary">
            <Gamepad2 size={18} />
            View Games
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#games"
          variants={fadeUp}
          className="mt-16 flex flex-col items-center gap-1 text-text-muted text-xs tracking-widest uppercase hover:text-text-secondary transition-colors"
        >
          Scroll Down
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
