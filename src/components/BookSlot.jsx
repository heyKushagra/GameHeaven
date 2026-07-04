import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { CalendarDays, Clock, Gamepad2, Send, User, Phone, Users, Timer, MessageSquare } from 'lucide-react';

const gameOptions = [
  'PS5 Gaming',
  'Tekken',
  'God of War',
  'GTA V',
  'Car Simulator',
  'Racing Games',
  'Football Games',
  'Action Games',
];

const timeSlots = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
  '8:00 PM',
  '9:00 PM',
];

const playerOptions = ['1', '2', '3', '4'];
const durationOptions = ['30 Minutes', '1 Hour', '2 Hours', '3 Hours'];

const inputClasses =
  'w-full bg-charcoal-lighter border border-border rounded-xl p-3 text-text-primary placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200 text-sm';

const selectClasses =
  'w-full bg-charcoal-lighter border border-border rounded-xl p-3 text-text-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-200 text-sm appearance-none cursor-pointer';

const labelClasses = 'block text-sm font-medium text-text-secondary mb-2';

const errorClasses = 'text-xs text-red-400 mt-1.5';

export default function BookSlot() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = () => {
    toast('Booking functionality will be available soon.', {
      icon: '🎮',
      style: {
        background: '#1e1e1e',
        color: '#f0f0f0',
        border: '1px solid #2a2a2a',
        borderRadius: '12px',
        fontSize: '14px',
      },
    });
    reset();
  };

  return (
    <section id="book-slot" className="section-padding bg-charcoal-light">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Book Your Slot</h2>
          <p className="section-subheading mx-auto">
            Reserve your gaming session in advance and skip the wait.
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-charcoal-card border border-border rounded-2xl p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label htmlFor="booking-name" className={labelClasses}>
                  <span className="inline-flex items-center gap-1.5">
                    <User size={14} className="text-accent-light" />
                    Name
                  </span>
                </label>
                <input
                  id="booking-name"
                  type="text"
                  placeholder="Your full name"
                  className={inputClasses}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="booking-phone" className={labelClasses}>
                  <span className="inline-flex items-center gap-1.5">
                    <Phone size={14} className="text-accent-light" />
                    Phone Number
                  </span>
                </label>
                <input
                  id="booking-phone"
                  type="tel"
                  placeholder="Your phone number"
                  className={inputClasses}
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Enter a valid 10-digit phone number',
                    },
                  })}
                />
                {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
              </div>

              {/* Game Selection */}
              <div>
                <label htmlFor="booking-game" className={labelClasses}>
                  <span className="inline-flex items-center gap-1.5">
                    <Gamepad2 size={14} className="text-accent-light" />
                    Game Selection
                  </span>
                </label>
                <div className="relative">
                  <select
                    id="booking-game"
                    className={selectClasses}
                    {...register('game', { required: 'Please select a game' })}
                  >
                    <option value="">Select a game</option>
                    {gameOptions.map((game) => (
                      <option key={game} value={game}>
                        {game}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                {errors.game && <p className={errorClasses}>{errors.game.message}</p>}
              </div>

              {/* Date */}
              <div>
                <label htmlFor="booking-date" className={labelClasses}>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={14} className="text-accent-light" />
                    Date
                  </span>
                </label>
                <input
                  id="booking-date"
                  type="date"
                  className={inputClasses}
                  {...register('date', { required: 'Date is required' })}
                />
                {errors.date && <p className={errorClasses}>{errors.date.message}</p>}
              </div>

              {/* Time Slot */}
              <div>
                <label htmlFor="booking-time" className={labelClasses}>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} className="text-accent-light" />
                    Time Slot
                  </span>
                </label>
                <div className="relative">
                  <select
                    id="booking-time"
                    className={selectClasses}
                    {...register('timeSlot', { required: 'Please select a time slot' })}
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                {errors.timeSlot && <p className={errorClasses}>{errors.timeSlot.message}</p>}
              </div>

              {/* Number of Players */}
              <div>
                <label htmlFor="booking-players" className={labelClasses}>
                  <span className="inline-flex items-center gap-1.5">
                    <Users size={14} className="text-accent-light" />
                    Number of Players
                  </span>
                </label>
                <div className="relative">
                  <select
                    id="booking-players"
                    className={selectClasses}
                    {...register('players', { required: 'Please select number of players' })}
                  >
                    <option value="">Select players</option>
                    {playerOptions.map((num) => (
                      <option key={num} value={num}>
                        {num} {num === '1' ? 'Player' : 'Players'}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                {errors.players && <p className={errorClasses}>{errors.players.message}</p>}
              </div>

              {/* Duration */}
              <div>
                <label htmlFor="booking-duration" className={labelClasses}>
                  <span className="inline-flex items-center gap-1.5">
                    <Timer size={14} className="text-accent-light" />
                    Duration
                  </span>
                </label>
                <div className="relative">
                  <select
                    id="booking-duration"
                    className={selectClasses}
                    {...register('duration', { required: 'Please select a duration' })}
                  >
                    <option value="">Select duration</option>
                    {durationOptions.map((dur) => (
                      <option key={dur} value={dur}>
                        {dur}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                {errors.duration && <p className={errorClasses}>{errors.duration.message}</p>}
              </div>

              {/* Special Request - Full Width */}
              <div className="md:col-span-2">
                <label htmlFor="booking-request" className={labelClasses}>
                  <span className="inline-flex items-center gap-1.5">
                    <MessageSquare size={14} className="text-accent-light" />
                    Special Request
                    <span className="text-text-muted font-normal">(optional)</span>
                  </span>
                </label>
                <textarea
                  id="booking-request"
                  rows={3}
                  placeholder="Any special requirements or preferences..."
                  className={`${inputClasses} resize-none`}
                  {...register('specialRequest')}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                Book Slot
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
