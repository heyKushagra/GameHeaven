import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Game Heaven?',
    answer:
      'Game Heaven is a premium gaming lounge located in Basti, Uttar Pradesh. We offer PS5 gaming, car racing simulators, and a wide variety of games including Tekken, God of War, GTA V, and many more.',
  },
  {
    question: 'Where is Game Heaven located?',
    answer:
      'We are located at Sardar Patel Marg, Patel Nagar, Basti, Uttar Pradesh - 272002.',
  },
  {
    question: 'What are the gaming rates at Game Heaven?',
    answer:
      'Our rates start at ₹60 for a 30-minute session and ₹99 for a 1-hour session. We offer both single player and dual player options.',
  },
  {
    question: 'What games are available at Game Heaven?',
    answer:
      'We have a wide selection including Tekken, God of War, GTA V, car racing simulator, football games, action games, and many more PS5 titles.',
  },
  {
    question: 'Does Game Heaven have a car simulator?',
    answer:
      'Yes! We have an immersive car racing simulator with a professional steering wheel, pedals, and a large screen for a realistic driving experience.',
  },
  {
    question: 'Can I book a slot in advance?',
    answer:
      'Our online booking system is coming soon. Currently, you can visit us directly or call us to reserve your slot.',
  },
  {
    question: 'Does Game Heaven organise gaming tournaments?',
    answer:
      'Yes, we regularly organise weekly gaming tournaments where you can compete with local gamers and win exciting rewards.',
  },
  {
    question: 'What are the opening hours?',
    answer:
      'We are open daily. Visit us or call for exact timings as they may vary on holidays.',
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        className="w-full py-5 flex items-center justify-between text-left cursor-pointer bg-transparent border-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-text-primary pr-4">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-text-muted" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-text-secondary leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-charcoal">
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
            Frequently Asked{' '}
            <span className="text-accent">Questions</span>
          </h2>
          <p className="section-subheading mx-auto">
            Everything you need to know about Game Heaven.
          </p>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
