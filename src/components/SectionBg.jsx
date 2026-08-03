/**
 * Reusable animated background for every section.
 * Primary / secondary blobs float slowly; a dot-grid and vignette sit on top.
 */
export default function SectionBg({ primary = '#6366f1', secondary = '#8b5cf6', flip = false }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Blob 1 */}
      <div
        className="blob-1 absolute rounded-full blur-[140px]"
        style={{
          background: primary,
          width: '520px',
          height: '520px',
          top: flip ? 'auto' : '-80px',
          bottom: flip ? '-80px' : 'auto',
          left: '-60px',
          opacity: 0.13,
        }}
      />

      {/* Blob 2 */}
      <div
        className="blob-2 absolute rounded-full blur-[110px]"
        style={{
          background: secondary,
          width: '420px',
          height: '420px',
          top: flip ? '-60px' : 'auto',
          bottom: flip ? 'auto' : '-60px',
          right: '-60px',
          opacity: 0.11,
        }}
      />

      {/* Blob 3 — centre accent */}
      <div
        className="blob-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
        style={{
          background: primary,
          width: '300px',
          height: '300px',
          opacity: 0.06,
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          opacity: 0.04,
        }}
      />

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/20 to-transparent" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  )
}
