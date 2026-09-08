import React, { useEffect, useState } from 'react'
import {
  FiHome, FiUser, FiBriefcase, FiLayers, FiAward,
  FiCheckSquare, FiMessageCircle, FiSun, FiMoon, FiMenu, FiX,
} from 'react-icons/fi'
import { useTheme } from '../ThemeContext'
import { useSmoothScroll } from '../SmoothScroll'
import './Sidebar.css'

const NAV_ITEMS = [
  { id: 'home', icon: FiHome, label: 'Home' },
  { id: 'about', icon: FiUser, label: 'About' },
  { id: 'services', icon: FiLayers, label: 'Services' },
  { id: 'experience', icon: FiBriefcase, label: 'Experience' },
  { id: 'projects', icon: FiAward, label: 'Projects' },
  { id: 'testimonials', icon: FiMessageCircle, label: 'Testimonials' },
  { id: 'contact', icon: FiCheckSquare, label: 'Contact' },
]

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme()
  const { scrollTo } = useSmoothScroll()
  const [active, setActive] = useState('home')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Lock page scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const goTo = (id) => {
    scrollTo(`#${id}`)
    setIsOpen(false)
  }

  return (
    <>
      {/* Hamburger button - visible on mobile only (see Sidebar.css) */}
      <button
        className="sidebar-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      {/* Backdrop shown behind the drawer on mobile */}
      <div
        className={`sidebar-backdrop ${isOpen ? 'show' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">I</div>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              className={`sidebar-link ${active === id ? 'active' : ''}`}
              onClick={() => goTo(id)}
              aria-label={label}
              title={label}
            >
              <Icon size={19} />
              <span className="sidebar-link-label">{label}</span>
            </button>
          ))}
        </nav>

        <button
          className="sidebar-theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark / light mode"
          title="Toggle dark / light mode"
        >
          {theme === 'light' ? <FiMoon size={19} /> : <FiSun size={19} />}
          <span className="sidebar-link-label">{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
        </button>
      </aside>
    </>
  )
}