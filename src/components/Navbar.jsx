import React, { useState } from 'react'

const navItems = [
  { href: '#home', label: 'Beranda' },
  { href: '#about', label: 'Profil' },
  { href: '#statistics', label: 'Data' },
  { href: '#services', label: 'Layanan' },
  { href: '#news', label: 'Berita' },
  { href: '#contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded bg-blue-600 text-white grid place-items-center font-bold">Kc</div>
            <span className="font-semibold text-blue-900">Kecamatan Sejahtera</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-blue-900/80 hover:text-blue-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded border border-blue-200 text-blue-700"
            onClick={() => setOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded hover:bg-blue-50 text-blue-900/90"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
