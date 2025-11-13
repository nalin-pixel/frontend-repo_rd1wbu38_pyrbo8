import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Platform', href: '#platform' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 grid place-items-center text-white">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold text-slate-800 tracking-tight">NovaTech</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="hover:text-slate-900 transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2.5 hover:bg-slate-800 transition-colors">
              Get started
            </a>
          </nav>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200 text-slate-700"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="grid gap-2 text-sm">
              {navItems.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-white/60"
                >
                  {n.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-4 py-2.5 hover:bg-slate-800 transition-colors">
                Get started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
