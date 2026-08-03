import { useEffect } from 'react'

/**
 * Mounts once and observes every [data-animate] element on the page.
 * When an element enters the viewport it gets the class "anim-in",
 * triggering the CSS transition defined in index.css.
 */
export default function ScrollAnimator() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('anim-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    const els = document.querySelectorAll('[data-animate]')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
