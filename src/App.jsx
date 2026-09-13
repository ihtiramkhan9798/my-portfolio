import React from 'react'
import { ThemeProvider } from './ThemeContext'
import { SmoothScrollProvider } from './SmoothScroll'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <div className="app-shell grid-bg">
          <Sidebar />
          <Hero />
          <About />
          <Services />
          <Experience />
          <Projects />
          <Testimonials />
          <Contact />
          <WhatsAppButton />
        </div>
      </SmoothScrollProvider>
    </ThemeProvider>
  )
}
