import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { FiLayout, FiCode, FiServer } from 'react-icons/fi'
import { services } from '../data'
import './Services.css'

const ICONS = { layout: FiLayout, code: FiCode, api: FiServer }

export default function Services() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.services-grid', start: 'top 85%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" className="section services-section" ref={sectionRef}>
      <div className="section-inner">
        <h2 className="eyebrow-heading">Services</h2>

        <div className="services-grid">
          {services.map((s) => {
            const Icon = ICONS[s.icon]
            return (
              <div className={`service-card service-${s.color}`} key={s.title}>
                <div className="service-icon"><Icon size={26} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
