import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Camera, Phone } from 'lucide-react';

const actionButtons = [
  {
    icon: MessageCircle,
    label: 'WhatsApp Us',
    subtitle: 'Chat on WhatsApp',
    href: 'https://wa.me/918299710058',
    bgClass: 'bg-green-600 hover:bg-green-500',
  },
  {
    icon: Camera,
    label: 'Follow Us',
    subtitle: 'Instagram',
    href: 'https://instagram.com/game_heaven_bst',
    bgClass: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-500 hover:via-pink-400 hover:to-orange-300',
  },
  {
    icon: Phone,
    label: 'Call Us',
    subtitle: 'Talk to us directly',
    href: 'tel:+918299710058',
    bgClass: 'bg-accent hover:bg-accent-light',
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

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal">
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
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="section-subheading mx-auto">
            Visit us or reach out through any of these channels.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left: Address card */}
          <motion.div
            className="bg-charcoal-card border border-border rounded-2xl p-8 flex items-start gap-5"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mt-0.5">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-text-primary mb-2">
                Our Location
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Sardar Patel Marg, Patel Nagar,
                <br />
                Basti, Uttar Pradesh - 272002
              </p>
            </div>
          </motion.div>

          {/* Right: Action buttons */}
          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {actionButtons.map((btn, index) => {
              const Icon = btn.icon;
              return (
                <motion.a
                  key={index}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 rounded-2xl p-5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 ${btn.bgClass}`}
                  variants={itemVariants}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{btn.label}</p>
                    <p className="text-xs text-white/70 mt-0.5">
                      {btn.subtitle}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
