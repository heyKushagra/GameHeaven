import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Games', href: '#games' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Book Slot', href: '#book-slot' },
  // { label: 'Tournaments', href: '#tournaments' },
  { label: 'Gallery', href: '#gallery' },
  // { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''))
    const observers = []

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        const observer = new IntersectionObserver(handleIntersect, {
          rootMargin: '-80px 0px -60% 0px',
          threshold: 0,
        })
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault()
      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsMobileOpen(false)
    },
    []
  )

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-charcoal/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-border/50'
        : 'bg-transparent'
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors duration-300">
              <Gamepad2 className="w-5 h-5 text-accent-light" />
            </div>
            <span className="text-xl font-bold font-heading tracking-tight text-text-primary">
              Game{' '}
              <span className="text-accent-light">Heaven</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                activeSection === link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive
                    ? 'text-accent-light'
                    : 'text-text-secondary hover:text-text-primary'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent-light rounded-full"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* CTA Button (Desktop) */}
          <a
            href="#book-slot"
            onClick={(e) => handleNavClick(e, '#book-slot')}
            className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 !text-sm"
          >
            Book Now
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-charcoal-lighter/50 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-charcoal-light/95 backdrop-blur-xl border-t border-border/50"
          >
            <div className="section-container py-4 space-y-1">
              {navLinks.map((link, index) => {
                const isActive =
                  activeSection === link.href.replace('#', '')
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${isActive
                      ? 'text-accent-light bg-accent/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-charcoal-lighter/50'
                      }`}
                  >
                    {link.label}
                  </motion.a>
                )
              })}
              <div className="pt-3 px-4">
                <a
                  href="#book-slot"
                  onClick={(e) => handleNavClick(e, '#book-slot')}
                  className="btn-primary w-full justify-center text-center"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
