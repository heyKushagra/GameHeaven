import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* ───── Image imports ───── */
import ps5Gaming from '../assets/images/ps5-gaming.png';
import tekken from '../assets/images/tekken.png';
import godOfWar from '../assets/images/god-of-war.png';
import gta from '../assets/images/gta.png';
import carSimulator from '../assets/images/car-simulator.png';
import racing from '../assets/images/racing.png';
import football from '../assets/images/football.png';
import action from '../assets/images/action.png';

/* ───── Games data ───── */
const games = [
  {
    title: 'PS5 Gaming',
    image: ps5Gaming,
    category: 'Console',
    description:
      'Experience next-gen gaming on PlayStation 5 with stunning 4K visuals and lightning-fast load times.',
  },
  {
    title: 'Tekken',
    image: tekken,
    category: 'Fighting',
    description:
      'Battle it out in the ultimate fighting game. Challenge your friends to intense 1v1 matches.',
  },
  {
    title: 'God of War',
    image: godOfWar,
    category: 'Action RPG',
    description:
      'Embark on a mythological journey with Kratos in one of the greatest action-adventure games ever made.',
  },
  {
    title: 'GTA V',
    image: gta,
    category: 'Open World',
    description:
      'Explore the vast open world of Los Santos. Complete missions or just cruise around the city.',
  },
  {
    title: 'Car Simulator',
    image: carSimulator,
    category: 'Simulator',
    description:
      'Feel the thrill of real driving with our immersive car racing simulator setup.',
  },
  {
    title: 'Racing Games',
    image: racing,
    category: 'Racing',
    description:
      'High-speed racing action with realistic graphics and intense competition.',
  },
  {
    title: 'Football Games',
    image: football,
    category: 'Sports',
    description:
      'Play the latest football games. Build your dream team and compete with friends.',
  },
  {
    title: 'Action Games',
    image: action,
    category: 'Action',
    description:
      'Dive into heart-pounding action games with incredible graphics and gameplay.',
  },
  {
    title: 'Many More...',
    image: ps5Gaming,
    category: 'Various',
    description:
      'We keep adding new games regularly. Visit us to discover our full collection of titles.',
  },
];

/* ───── Framer Motion variants ───── */
const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/* ───── Component ───── */
export default function Games() {
  return (
    <section id="games" className="section-padding bg-charcoal">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          className="mb-14 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.h2 variants={headingVariants} className="section-heading">
            Our Games Collection
          </motion.h2>
          <motion.p
            variants={headingVariants}
            className="section-subheading md:mx-0 mx-auto"
          >
            From intense fighting games to immersive open worlds — we&apos;ve
            got something for every gamer.
          </motion.p>
        </motion.div>

        {/* Card grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionVariants}
        >
          {games.map((game) => (
            <motion.div
              key={game.title}
              variants={cardVariants}
              className="card group cursor-pointer hover:border-accent/40"
            >
              {/* Image wrapper */}
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Category badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-accent/20 text-accent-light backdrop-blur-sm">
                  {game.category}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-text-primary mb-1.5 font-heading">
                  {game.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {game.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-light group-hover:gap-2.5 transition-all duration-300">
                  Play Now
                  <ArrowRight size={15} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
