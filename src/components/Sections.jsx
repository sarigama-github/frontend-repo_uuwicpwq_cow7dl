import React from 'react'

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-blue-900">Profil Kecamatan</h2>
            <p className="mt-3 text-blue-900/80">Kecamatan Sejahtera merupakan wilayah administratif yang berkembang pesat dengan masyarakat yang majemuk dan gotong royong. Pemerintahan berkomitmen pada pelayanan publik yang efektif, efisien, dan berorientasi pada kebutuhan warga.</p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-800">Sejarah</h3>
                <p className="mt-2 text-blue-900/80">Didirikan pada tahun 1985, Kecamatan Sejahtera tumbuh dari pusat perdagangan kecil menjadi simpul ekonomi lokal. Perkembangan infrastruktur dan partisipasi masyarakat mendorong kemajuan yang berkelanjutan.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800">Geografi</h3>
                <p className="mt-2 text-blue-900/80">Terletak di dataran rendah dengan lanskap sawah dan permukiman hijau. Luas wilayah 75 km² yang terdiri dari 10 desa/kelurahan dengan iklim tropis yang bersahabat.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800">Struktur Organisasi</h3>
                <p className="mt-2 text-blue-900/80">Dipimpin oleh Camat, didampingi Sekretaris Kecamatan, dan beberapa seksi: Pemerintahan, Pelayanan Publik, Ekonomi & Pembangunan, serta Kesejahteraan Sosial.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-64 bg-blue-50 rounded-lg border border-blue-100 grid place-items-center text-blue-400">Gambar Profil</div>
            <div className="mt-4 w-full h-40 bg-blue-50 rounded-lg border border-blue-100 grid place-items-center text-blue-400">Struktur</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function StatisticsSection() {
  return (
    <section id="statistics" className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-blue-900">Data & Statistik</h2>
        <p className="mt-2 text-blue-900/80">Gambaran umum kondisi wilayah dalam angka.</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left px-4 py-3">Indikator</th>
                  <th className="text-left px-4 py-3">Nilai</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">Jumlah Penduduk</td>
                  <td className="px-4 py-3">85.200 jiwa</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Luas Wilayah</td>
                  <td className="px-4 py-3">75 km²</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Jumlah Desa</td>
                  <td className="px-4 py-3">10 desa/kelurahan</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Sektor Ekonomi Utama</td>
                  <td className="px-4 py-3">Pertanian, Perdagangan, UMKM</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <div className="h-64 bg-white rounded-lg p-4 shadow flex flex-col">
              <h3 className="font-semibold text-blue-900">Perbandingan Sederhana (Bar Chart)</h3>
              <div className="mt-4 flex-1 grid content-end gap-3">
                {[
                  { label: 'Pertanian', value: 80, color: 'bg-blue-600' },
                  { label: 'Perdagangan', value: 65, color: 'bg-blue-400' },
                  { label: 'UMKM', value: 50, color: 'bg-blue-300' },
                ].map((item) => (
                  <div key={item.label} className="">
                    <div className="flex items-center gap-3">
                      <div className={`h-4 rounded ${item.color}`} style={{ width: `${item.value}%` }} />
                      <span className="text-sm text-blue-900/80 w-28">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  const services = [
    {
      title: 'KTP-el',
      desc: 'Panduan dan persyaratan pembuatan KTP elektronik.',
    },
    {
      title: 'Kartu Keluarga',
      desc: 'Alur pengajuan KK baru/perubahan data.',
    },
    {
      title: 'Surat Izin Usaha',
      desc: 'Informasi perizinan usaha kecil/UMKM di kecamatan.',
    },
    {
      title: 'Akta Kelahiran',
      desc: 'Layanan pencatatan sipil untuk kelahiran baru.',
    },
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-blue-900">Layanan Publik</h2>
        <p className="mt-2 text-blue-900/80">Informasi layanan yang dapat diakses oleh masyarakat.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border border-blue-100 p-5 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-800">{s.title}</h3>
              <p className="mt-2 text-sm text-blue-900/80">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-blue-700 hover:underline">Hubungi Kami</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function NewsSection() {
  const items = [
    {
      title: 'Kerja Bakti Bersama',
      date: '12 Okt 2025',
      img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Pelayanan Terpadu di Balai Desa',
      date: '30 Sep 2025',
      img: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Pelatihan UMKM Digital',
      date: '18 Sep 2025',
      img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop',
    },
  ]

  return (
    <section id="news" className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-blue-900">Berita & Kegiatan</h2>
        <p className="mt-2 text-blue-900/80">Informasi terbaru seputar kecamatan dan masyarakat.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((n) => (
            <article key={n.title} className="rounded-lg overflow-hidden bg-white border border-blue-100 hover:shadow-md transition-shadow">
              <img src={n.img} alt="" className="w-full h-40 object-cover" loading="lazy" />
              <div className="p-4">
                <p className="text-xs text-blue-600">{n.date}</p>
                <h3 className="mt-1 font-semibold text-blue-900">{n.title}</h3>
                <p className="mt-1 text-sm text-blue-900/80">Kegiatan partisipatif untuk memperkuat kebersamaan dan pelayanan publik.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-blue-900">Kontak</h2>
        <p className="mt-2 text-blue-900/80">Silakan hubungi kami untuk informasi lebih lanjut.</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="space-y-3">
            <p className="text-blue-900/80"><span className="font-semibold">Alamat:</span> Jalan Pembangunan No. 1, Kecamatan Sejahtera</p>
            <p className="text-blue-900/80"><span className="font-semibold">Jam Layanan:</span> Senin–Jumat 08.00–16.00</p>
            <p className="text-blue-900/80"><span className="font-semibold">Telepon:</span> (021) 123456</p>
            <p className="text-blue-900/80"><span className="font-semibold">Email:</span> info@kecamatan.go.id</p>

            <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg border">
              <iframe
                title="Peta Lokasi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.240913847248!2d106.827153!3d-6.175394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4ba2e6d5d%3A0x9a1c3c3c3c3c3c3!2sJakarta!5e0!3m2!1sen!2sid!4v1610000000000!5m2!1sen!2sid"
                width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="bg-blue-50 rounded-lg p-6 grid gap-4">
            <div>
              <label className="block text-sm font-medium text-blue-900">Nama</label>
              <input type="text" className="mt-1 w-full rounded border-blue-200 focus:border-blue-400 focus:ring-blue-400" placeholder="Nama lengkap" />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-900">Email</label>
              <input type="email" className="mt-1 w-full rounded border-blue-200 focus:border-blue-400 focus:ring-blue-400" placeholder="email@contoh.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-900">Pesan</label>
              <textarea className="mt-1 w-full rounded border-blue-200 focus:border-blue-400 focus:ring-blue-400" rows={4} placeholder="Tulis pesan Anda" />
            </div>
            <button type="button" onClick={() => alert('Terima kasih, pesan Anda sudah tercatat.')} className="inline-flex items-center justify-center rounded bg-blue-600 text-white font-semibold px-5 py-2.5 hover:bg-blue-700">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
