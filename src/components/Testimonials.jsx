import React, { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { testimonials } from '../data'
import './Testimonials.css'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.testimonial-card', start: 'top 85%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="testimonials" className="section testimonials-section" ref={sectionRef}>
      <div className="section-inner">
        <h2 className="eyebrow-heading">Testimonials</h2>

        <div className="testimonial-card">
          <div className="testimonial-avatar">
            <svg viewBox="0 0 100 100" width="100%" height="100%">
              <circle cx="50" cy="50" r="50" fill="#c8e6f0" />
              <circle cx="50" cy="42" r="18" fill="#c98f5e" />
              <path d="M20 95 Q50 62 80 95 Z" fill="#1f2a3d" />
              <circle cx="50" cy="30" r="20" fill="#111" />
            </svg>
          </div>
          <h4>{t.name}</h4>
          <span className="testimonial-role">{t.role}</span>
          <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
