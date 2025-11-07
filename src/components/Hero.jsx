import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
          alt="Panorama kecamatan"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/40 to-white/0" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Kecamatan Sejahtera
          </h1>
          <p className="mt-4 text-blue-50 text-lg">
            Selamat datang di laman resmi Kecamatan Sejahtera. Bersama membangun pelayanan publik yang cepat, transparan, dan berintegritas.
          </p>
          <div className="mt-8 grid gap-3 sm:flex">
            <a href="#about" className="inline-flex items-center justify-center rounded bg-white text-blue-700 font-semibold px-5 py-3 shadow hover:shadow-md">Profil Kecamatan</a>
            <a href="#services" className="inline-flex items-center justify-center rounded border border-white/70 text-white px-5 py-3 hover:bg-white/10">Layanan Publik</a>
          </div>
        </div>
      </div>
    </section>
  )
}
