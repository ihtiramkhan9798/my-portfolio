import React, { createContext, useContext, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'

const SmoothScrollContext = createContext(null)

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    })
    lenisRef.current = lenis

    // Drive Lenis from GSAP's ticker so it stays in sync with any GSAP
    // scroll-triggered animations elsewhere on the page.
    const onTick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onTick)
      lenis.destroy()
    }
  }, [])

  const scrollTo = (target, options) => {
    lenisRef.current?.scrollTo(target, { offset: 0, duration: 1.2, ...options })
  }

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

export function useSmoothScroll() {
  return useContext(SmoothScrollContext)
}
