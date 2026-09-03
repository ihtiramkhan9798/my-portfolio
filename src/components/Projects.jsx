import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects, projectCategories } from '../data'
import './Projects.css'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const sectionRef = useRef(null)

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.projects-grid', start: 'top 85%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Re-animate the grid whenever the filter changes.
  useEffect(() => {
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out' }
    )
  }, [filter])

  return (
    <section id="projects" className="section projects-section" ref={sectionRef}>
      <div className="section-inner">
        <h2 className="eyebrow-heading">Recent Projects</h2>

        <div className="projects-filters">
          {projectCategories.map((c) => (
            <button
              key={c}
              className={`filter-pill ${filter === c ? 'active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div className="project-card" key={p.title + i}>
              <div className="project-thumb" style={{ background: p.color }}>
                {p.image ? (
                  <img src={p.image} alt={p.title} className="project-thumb-img" />
                ) : (
                  <span className="project-thumb-label">{p.title}</span>
                )}
                {(p.liveUrl || p.githubUrl) && (
                  <div className="project-overlay">
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noreferrer" aria-label="Live demo">
                        <FiExternalLink />
                      </a>
                    )}
                    {p.githubUrl && (
                      <a href={p.githubUrl} target="_blank" rel="noreferrer" aria-label="Source code">
                        <FiGithub />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="project-meta">
                <h4>{p.title}</h4>
                <span>{p.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
