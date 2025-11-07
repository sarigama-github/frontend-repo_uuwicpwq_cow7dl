import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { AboutSection, StatisticsSection, ServicesSection, NewsSection, ContactSection } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl bg-blue-50 p-6 border border-blue-100">
              <h2 className="text-xl font-bold">Sambutan Camat</h2>
              <p className="mt-2 text-blue-900/80">Assalamualaikum warahmatullahi wabarakatuh. Selamat datang di portal Kecamatan Sejahtera. Kami berkomitmen menghadirkan layanan publik yang mudah diakses, efektif, dan akuntabel. Visi kami adalah terwujudnya tata kelola pemerintahan yang transparan dan partisipatif. Misi kami meliputi peningkatan kualitas pelayanan, penguatan ekonomi lokal, dan pembangunan infrastruktur berkelanjutan. Potensi lokal kami mencakup pertanian produktif, UMKM kreatif, serta destinasi wisata budaya.</p>
            </div>
          </div>
        </section>
        <AboutSection />
        <StatisticsSection />
        <ServicesSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
