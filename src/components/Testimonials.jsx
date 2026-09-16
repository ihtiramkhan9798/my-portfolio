import React from 'react'
import { FiStar } from 'react-icons/fi'
import { testimonials } from '../data'
import './Testimonials.css'

function initials(name) {
  return name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
}

function TestimonialCard({ t }) {
  const rating = t.rating || 5
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar key={i} className={i < rating ? 'star filled' : 'star'} />
        ))}
      </div>
      <p className="testimonial-quote">{t.quote}</p>
      <div className="testimonial-footer">
        {t.photo ? (
          <img src={t.photo} alt={t.name} className="testimonial-avatar-img" />
        ) : (
          <span className="testimonial-avatar-initials">{initials(t.name)}</span>
        )}
        <div>
          <h4>{t.name}</h4>
          <span className="testimonial-role">{t.role}</span>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const loopItems = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="section-inner">
        <h2 className="eyebrow-heading">People love my work</h2>
      </div>

      <div className="testimonials-marquee">
        <div className="testimonials-track">
          {loopItems.map((t, i) => (
            <TestimonialCard t={t} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}