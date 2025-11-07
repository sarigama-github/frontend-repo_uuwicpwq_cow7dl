import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-50 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-white">Kecamatan Sejahtera</h3>
          <p className="mt-2 text-blue-100 text-sm">Portal informasi resmi. Bersama mewujudkan pelayanan prima, transparansi, dan partisipasi warga.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Kontak</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Jalan Pembangunan No. 1</li>
            <li>Senin–Jumat 08.00–16.00</li>
            <li>Tel: (021) 123456</li>
            <li>Email: info@kecamatan.go.id</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Media Sosial</h4>
          <div className="mt-3 flex gap-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 grid place-items-center rounded bg-blue-800/60 hover:bg-blue-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0114 6h3v3h-3a1 1 0 00-1 1V12H17l-.5 3h-2.5v7A10 10 0 0022 12z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 grid place-items-center rounded bg-blue-800/60 hover:bg-blue-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2A2.8 2.8 0 1014.8 12 2.8 2.8 0 0012 9.2zM17.5 6.5a1 1 0 110 2 1 1 0 010-2z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 grid place-items-center rounded bg-blue-800/60 hover:bg-blue-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22 5.8a8.2 8.2 0 01-2.4.7 4.1 4.1 0 001.8-2.3 8.2 8.2 0 01-2.6 1 4.1 4.1 0 00-7 3.8A11.7 11.7 0 013 5.2a4.1 4.1 0 001.3 5.5 4.1 4.1 0 01-1.9-.5v.1a4.1 4.1 0 003.3 4 4.1 4.1 0 01-1.9.1 4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 19.5 11.7 11.7 0 008.3 21c7 0 10.9-5.8 10.9-10.9v-.5A7.8 7.8 0 0022 5.8z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-blue-200 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Kecamatan Sejahtera</p>
          <a href="#home" className="hover:underline">Kembali ke atas</a>
        </div>
      </div>
    </footer>
  )
}
