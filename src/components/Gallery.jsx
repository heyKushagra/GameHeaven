import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

import gallery1 from '../assets/images/gallery-1.png';
import gallery2 from '../assets/images/gallery-2.png';
import gallery3 from '../assets/images/gallery-3.png';
import gallery4 from '../assets/images/gallery-4.png';
import gallery5 from '../assets/images/gallery-5.png';
import gallery6 from '../assets/images/gallery-6.png';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="bg-charcoal">
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
            Take a Look <span className="text-accent">Inside</span>
          </h2>
          <p className="section-subheading mx-auto">
            Get a glimpse of our premium gaming lounge and facilities.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          className="columns-2 md:columns-3 gap-4 space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid rounded-2xl overflow-hidden relative group cursor-pointer"
              variants={imageVariants}
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Game Heaven gallery ${index + 1}`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-103"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-11 h-11 rounded-full bg-accent/80 flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedImage(null)}
            >
              {/* Close button */}
              <button
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center z-10 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Image */}
              <motion.img
                src={selectedImage}
                alt="Gallery full view"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
