import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const pricingPlans = [
  {
    id: 'sp-1hr',
    title: 'Single Player - 1 Hour',
    price: '₹99',
    duration: '60 minutes session',
    popular: true,
    features: ['PS5 Gaming', 'All Games Access', 'Comfortable Seating', '1 Hour Session'],
  },
  {
    id: 'sp-30min',
    title: 'Single Player - 30 Min',
    price: '₹60',
    duration: '30 minutes session',
    popular: false,
    features: ['PS5 Gaming', 'All Games Access', 'Comfortable Seating', '30 Min Session'],
  },
  {
    id: 'dp-1hr',
    title: 'Dual Player - 1 Hour',
    price: '₹99',
    duration: '60 minutes session',
    popular: true,
    features: ['2 Player Gaming', 'All Games Access', 'Comfortable Seating', '1 Hour Session'],
  },
  {
    id: 'cs-1hr',
    title: 'Car Simulator - 1 Hour',
    price: '₹99',
    duration: '60 minutes session',
    popular: true,
    features: [
      'Racing Simulator',
      'Steering Wheel & Pedals',
      'Immersive Experience',
      '1 Hour Session',
    ],
  },
  {
    id: 'cs-30min',
    title: 'Car Simulator - 30 Min',
    price: '₹60',
    duration: '30 minutes session',
    popular: false,
    features: [
      'Racing Simulator',
      'Steering Wheel & Pedals',
      'Immersive Experience',
      '30 Min Session',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Simple, Affordable Pricing</h2>
          <p className="section-subheading mx-auto">
            No hidden charges. Pay per session and enjoy premium gaming.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              className={`
                relative rounded-2xl p-6 transition-all duration-300
                bg-charcoal-card
                ${
                  plan.popular
                    ? 'border-2 border-accent shadow-[0_0_24px_rgba(124,92,224,0.12)]'
                    : 'border border-border'
                }
                hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]
                hover:border-border-light
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                    <Sparkles size={12} />
                    Popular
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className={`${plan.popular ? 'pt-2' : ''}`}>
                {/* Title */}
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
                  {plan.title}
                </h3>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-4xl font-bold text-text-primary font-heading">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-text-muted mb-6">{plan.duration}</p>

                {/* Divider */}
                <div className="h-px bg-border mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
                        <Check size={12} className="text-accent-light" />
                      </span>
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Book Now Button */}
                <a
                  href="#book-slot"
                  className={`
                    block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-250
                    ${
                      plan.popular
                        ? 'btn-primary justify-center'
                        : 'bg-charcoal-lighter text-text-primary border border-border hover:border-accent hover:text-accent-light hover:-translate-y-0.5'
                    }
                  `}
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
