import { motion } from 'framer-motion';
import { Monitor, Sofa, IndianRupee, Trophy, Car, Gamepad2 } from 'lucide-react';

const cards = [
  {
    icon: Monitor,
    title: 'Premium PS5 Setup',
    description:
      'Latest PlayStation 5 consoles with 4K displays for the ultimate gaming experience.',
  },
  {
    icon: Sofa,
    title: 'Comfortable Environment',
    description:
      'Ergonomic gaming chairs, air-conditioned space, and a clean, welcoming atmosphere.',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description:
      'Competitive prices starting at just ₹60 per session. Premium gaming without breaking the bank.',
  },
  {
    icon: Trophy,
    title: 'Regular Tournaments',
    description:
      'Weekly tournaments with exciting prizes. Compete, improve, and make new gaming friends.',
  },
  {
    icon: Car,
    title: 'Racing Simulator',
    description:
      'Immersive car racing simulator with steering wheel, pedals, and realistic driving experience.',
  },
  {
    icon: Gamepad2,
    title: 'Latest Games',
    description:
      'Regularly updated game library with the latest and greatest titles across all genres.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function WhyChoose() {
  return (
    <section id="about" className="bg-charcoal">
      <div className="section-container section-padding">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-heading">
            Why Choose <span className="text-accent">Game Heaven?</span>
          </h2>
          <p className="section-subheading mx-auto">
            We provide the best gaming experience in Basti with top-notch
            equipment and a comfortable environment.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                className="bg-charcoal-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
                variants={cardVariants}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mt-4 text-text-primary">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
