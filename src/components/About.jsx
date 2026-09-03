import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { FiDownload } from 'react-icons/fi'
import { profile, stats } from '../data'
import './About.css'

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1200
          const startTime = performance.now()
          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            setCount(Math.floor(progress * value))
            if (progress < 1) requestAnimationFrame(step)
            else setCount(value)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function About() {
  const sectionRef = useRef(null)

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = profile.cvPath
    link.download = 'Ihtiram_Khan_resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about-card', start: 'top 85%' },
      })
      gsap.from('.stat-item', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.stats-row', start: 'top 90%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className="section-inner">
        <h2 className="eyebrow-heading">About Me</h2>

        <div className="about-card">
          <div className="about-avatar">
            <img src={profile.photo} alt={profile.name} />
          </div>

          <div className="about-content">
            {profile.bio.map((p, i) => (
              <p key={i} className="about-para">{p}</p>
            ))}

            <div className="about-tech">
              <ul>
                {profile.techStack.slice(0, Math.ceil(profile.techStack.length / 2)).map((t) => <li key={t}>{t}</li>)}
              </ul>
              <ul>
                {profile.techStack.slice(Math.ceil(profile.techStack.length / 2)).map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>

            <button className="btn-primary" onClick={handleDownloadCV}>
              <FiDownload /> Download CV
            </button>
          </div>
        </div>

        <div className="stats-row">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-value">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
