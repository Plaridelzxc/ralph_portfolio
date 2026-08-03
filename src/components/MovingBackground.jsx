import { useEffect, useRef } from 'react'

export default function MovingBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    let W = (canvas.width  = window.innerWidth)
    let H = (canvas.height = window.innerHeight)

    const onResize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    /* ── Particles ── */
    const COUNT    = 90
    const MAX_DIST = 150

    const particles = Array.from({ length: COUNT }, () => ({
      x  : Math.random() * W,
      y  : Math.random() * H,
      vx : (Math.random() - 0.5) * 0.45,
      vy : (Math.random() - 0.5) * 0.45,
      r  : Math.random() * 1.6 + 0.6,
    }))

    /* ── Draw loop ── */
    function draw() {
      /* Dark background */
      ctx.fillStyle = '#07071a'
      ctx.fillRect(0, 0, W, H)

      /* Update + draw dots */
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx = -p.vx
        if (p.y < 0 || p.y > H) p.vy = -p.vy

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(139, 92, 246, 0.75)'
        ctx.fill()
      }

      /* Draw connections */
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.22
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position      : 'fixed',
        inset         : 0,
        width         : '100%',
        height        : '100%',
        zIndex        : 0,
        pointerEvents : 'none',
        display       : 'block',
      }}
    />
  )
}
