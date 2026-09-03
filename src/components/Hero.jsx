import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { FiGithub, FiLinkedin, FiFacebook, FiTwitter, FiYoutube, FiChevronDown } from 'react-icons/fi'
import { profile } from '../data'
import { useSmoothScroll } from '../SmoothScroll'
import { useTypewriter } from '../useTypewriter'
import './Hero.css'

export default function Hero() {
  const { scrollTo } = useSmoothScroll()
  const rootRef = useRef(null)

  const typedName = useTypewriter([profile.name], {
    typingSpeed: 95,
    deletingSpeed: 45,
    pauseAfterType: 1500,
    pauseAfterDelete: 350,
    startDelay: 900, // let the entrance animation settle first
    // loop defaults to true — name types, pauses, deletes, retypes, forever.
  })

  // GSAP opening animation — plays once when the portfolio first loads.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        // Safety net: no matter how the timeline finishes (or is interrupted),
        // force every animated hero element back to its natural, fully-visible
        // state so nothing can ever get stuck at opacity: 0.
        onComplete: () => gsap.set(
          '.hero-avatar, .hero-heading-wrap, .hero-title, .hero-socials a, .hero-cta, .hero-scroll, .deco',
          { clearProps: 'opacity,transform' }
        ),
      })

      tl.from('.hero-avatar', { opacity: 0, scale: 0.6, y: -30, duration: 0.9 })
        .from('.hero-heading-wrap', { opacity: 0, y: 24, duration: 0.7 }, '-=0.4')
        .from('.hero-title', { opacity: 0, y: 16, duration: 0.5 }, '-=0.2')
        .from('.hero-socials a', { opacity: 0, y: 16, stagger: 0.08, duration: 0.5 }, '-=0.2')
        .from('.hero-cta', { opacity: 0, y: 16, duration: 0.5 }, '-=0.25')
        .from('.hero-scroll', { opacity: 0, duration: 0.6 }, '-=0.2')
        .from(
          '.deco',
          { opacity: 0, scale: 0, duration: 0.6, stagger: 0.06, ease: 'back.out(2)' },
          '-=1.2'
        )

      // Belt-and-braces: even if something throws before the timeline
      // finishes, force full visibility after a short delay.
      const failsafe = setTimeout(() => {
        gsap.set(
          '.hero-avatar, .hero-heading-wrap, .hero-title, .hero-socials a, .hero-cta, .hero-scroll, .deco',
          { clearProps: 'opacity,transform' }
        )
      }, 3000)

      return () => clearTimeout(failsafe)
    }, rootRef)

    return () => ctx.revert()
  }, [])

  const scrollToAbout = () => scrollTo('#about')

  return (
    <section id="home" className="hero" ref={rootRef}>
      {/* decorative shapes */}
      <span className="deco deco-tri1" />
      <span className="deco deco-circle1" />
      <span className="deco deco-tri2" />
      <span className="deco deco-swirl1">~</span>
      <span className="deco deco-swirl2">~</span>
      <span className="deco deco-dot1" />

      <div className="hero-avatar-wrap">
        <div className="hero-avatar">
          <img src={profile.photo} alt={profile.name} />
        </div>
      </div>

      <div className="hero-heading-wrap">
        <h1 className="hero-name">
          {typedName}
          <span className="typewriter-cursor">|</span>
        </h1>
      </div>

      <p className="hero-title">{profile.title}</p>

      <div className="hero-socials">
        <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="Github"><FiGithub size={18} /></a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin size={18} /></a>
        {/* <a href={profile.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FiFacebook size={18} /></a> */}
        <a href={profile.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><FiTwitter size={18} /></a>
        {/* <a href={profile.socials.youtube} target="_blank" rel="noreferrer" aria-label="Youtube"><FiYoutube size={18} /></a> */}
      </div>

      <a href="#contact" className="btn-primary hero-cta" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}>
        Contact Me
      </a>

      <button className="hero-scroll" onClick={scrollToAbout} aria-label="Scroll down">
        <span>Scroll Down</span>
        <FiChevronDown className="hero-scroll-icon" />
      </button>
    </section>
  )
}
