import { motion } from 'framer-motion';
import { Trophy, Users, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    text: 'Regular tournaments are organised',
  },
  {
    icon: Users,
    text: 'Compete with local gamers',
  },
  {
    icon: Award,
    text: 'Win exciting rewards',
  },
  {
    icon: Heart,
    text: 'Meet the gaming community',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Tournaments() {
  return (
    <section id="tournaments" className="bg-charcoal-light">
      <div className="section-container section-padding">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="section-heading">
              Weekly Gaming{' '}
              <span className="text-accent">Tournaments</span>
            </h2>
            <p className="section-subheading mx-auto lg:mx-0 mt-2">
              Put your skills to the test every week. Join our tournaments,
              compete with fellow gamers, and walk away with exciting prizes.
            </p>
            <motion.a
              href="#contact"
              className="btn-primary mt-8 inline-flex"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Trophy className="w-4 h-4" />
              Upcoming Tournaments
            </motion.a>
          </motion.div>

          {/* Right: Feature points */}
          <motion.div
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-charcoal-card border border-border rounded-2xl p-5 transition-colors duration-300 hover:border-accent/30"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-text-primary leading-snug">
                    {feature.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
