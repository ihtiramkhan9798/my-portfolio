import { useEffect, useState } from 'react'

/**
 * Cycles through `phrases`, typing each one out character by character,
 * pausing, then deleting it character by character before moving to the
 * next phrase. Loops forever by default.
 *
 * Pass `loop: false` to type the (single) phrase once and stop — the
 * cursor keeps blinking but the text is never deleted or retyped.
 */
export function useTypewriter(phrases, {
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseAfterType = 1400,
  pauseAfterDelete = 400,
  startDelay = 0,
  loop = true,
} = {}) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('waiting') // waiting | typing | pausing | deleting | done

  useEffect(() => {
    const timer = setTimeout(() => setPhase('typing'), startDelay)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (phase === 'waiting' || phase === 'done') return
    const current = phrases[phraseIndex]

    if (phase === 'typing') {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed)
        return () => clearTimeout(t)
      }
      if (!loop) {
        setPhase('done')
        return
      }
      const t = setTimeout(() => setPhase('pausing'), pauseAfterType)
      return () => clearTimeout(t)
    }

    if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('deleting'), 0)
      return () => clearTimeout(t)
    }

    if (phase === 'deleting') {
      if (text.length > 0) {
        const t = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % phrases.length)
        setPhase('typing')
      }, pauseAfterDelete)
      return () => clearTimeout(t)
    }
  }, [phase, text, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete, loop])

  return text
}
