import { Gamepad2, Camera, Phone, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Games', href: '#games' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Book Slot', href: '#book-slot' },
]

const socialLinks = [
  {
    label: 'Instagram',
    icon: Camera,
    href: 'https://instagram.com/gameheaven',
  },
  {
    label: 'Phone',
    icon: Phone,
    href: 'tel:+919876543210',
  },
  {
    label: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/919876543210',
  },
]

const handleNavClick = (e, href) => {
  e.preventDefault()
  const targetId = href.replace('#', '')
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-light border-t border-border">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-flex items-center gap-2.5 group mb-5"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors duration-300">
                <Gamepad2 className="w-5 h-5 text-accent-light" />
              </div>
              <span className="text-xl font-bold font-heading tracking-tight text-text-primary">
                Game{' '}
                <span className="text-accent-light">Heaven</span>
              </span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
              Basti's premium gaming destination. Experience
              top-tier gaming with cutting-edge setups, competitive
              tournaments, and an unbeatable atmosphere.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-charcoal-lighter flex items-center justify-center text-text-muted hover:text-accent-light hover:bg-accent/10 border border-border hover:border-accent/30 transition-all duration-300"
                >
                  <social.icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-semibold font-heading uppercase tracking-wider text-text-primary mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-light transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-border-light group-hover:bg-accent-light transition-colors duration-200" />
                    {link.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold font-heading uppercase tracking-wider text-text-primary mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-charcoal-lighter flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-text-muted" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Sardar Patel Marg, Patel Nagar
                    <br />
                    Basti, Uttar Pradesh - 272002
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-charcoal-lighter flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-text-muted" />
                </div>
                <div>
                  <a
                    href="tel:+919876543210"
                    className="text-sm text-text-secondary hover:text-accent-light transition-colors duration-200"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} Game Heaven. All Rights Reserved.
          </p>
          <p className="text-xs text-text-muted">
            Crafted with{' '}
            <span className="text-accent-light">&hearts;</span> in
            Basti
          </p>
        </div>
      </div>
    </footer>
  )
}
