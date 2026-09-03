import React, { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { experience } from '../data'
import './Experience.css'

export default function Experience() {
  const [active, setActive] = useState(0)
  const current = experience[active]
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.experience-box', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.experience-box', start: 'top 85%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="section experience-section" ref={sectionRef}>
      <div className="section-inner">
        <h2 className="eyebrow-heading">Experience</h2>

        <div className="experience-box">
          <div className="experience-tabs">
            {experience.map((e, i) => (
              <button
                key={e.company}
                className={`experience-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                {e.company}
              </button>
            ))}
          </div>

          <div className="experience-detail">
            <h3>{current.role}</h3>
            <span className="experience-period">{current.period}</span>
            <ul>
              {current.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
