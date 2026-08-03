export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-slate-400 font-medium">Ralph Tillana</span>. All rights reserved.
        </p>
        <p>
          Built with{' '}
          <span className="text-slate-400">React</span> &amp;{' '}
          <span className="text-slate-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
