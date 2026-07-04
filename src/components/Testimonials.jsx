import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    stars: 5,
    quote:
      'Best gaming spot in Basti! The PS5 setup is amazing and the car simulator is so much fun. Love coming here with my friends.',
    name: 'Rahul S.',
    subtitle: 'Regular Visitor',
  },
  {
    stars: 5,
    quote:
      'Clean, comfortable, and affordable. The staff is friendly and the game collection is impressive. Highly recommended!',
    name: 'Amit K.',
    subtitle: 'Gaming Enthusiast',
  },
  {
    stars: 5,
    quote:
      'The racing simulator is incredible! Feels like actual driving. Great place to spend the weekend.',
    name: 'Priya M.',
    subtitle: 'Regular Visitor',
  },
  {
    stars: 4,
    quote:
      'Good variety of games and comfortable seating. The tournament events are really exciting too.',
    name: 'Vikash R.',
    subtitle: 'Gaming Enthusiast',
  },
  {
    stars: 5,
    quote:
      'Game Heaven is the go-to place for gaming in Basti. Affordable prices and great atmosphere!',
    name: 'Sneha D.',
    subtitle: 'Regular Visitor',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count
              ? 'fill-warning text-warning'
              : 'fill-transparent text-text-muted'
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-charcoal-light">
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
            What Gamers <span className="text-accent">Say</span>
          </h2>
          <p className="section-subheading mx-auto">
            Real reviews from our regular visitors.
          </p>
        </motion.div>

        {/* Swiper carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-charcoal-card border border-border rounded-2xl p-6 h-full flex flex-col">
                  <StarRating count={testimonial.stars} />
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-5 pt-4 border-t border-border">
                    <p className="font-semibold text-text-primary text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">
                      {testimonial.subtitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
