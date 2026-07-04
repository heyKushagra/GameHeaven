import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Games from './components/Games'
import Pricing from './components/Pricing'
import BookSlot from './components/BookSlot'
import Tournaments from './components/Tournaments'
import WhyChoose from './components/WhyChoose'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-charcoal text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Games />
        <Pricing />
        <BookSlot />
        <Tournaments />
        <WhyChoose />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e1e1e',
            color: '#f0f0f0',
            border: '1px solid #2a2a2a',
            borderRadius: '12px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
          },
          success: {
            iconTheme: {
              primary: '#4ade80',
              secondary: '#1e1e1e',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#1e1e1e',
            },
          },
        }}
      />
    </div>
  )
}

export default App
