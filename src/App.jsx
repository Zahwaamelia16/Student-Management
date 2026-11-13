
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Data dummy mahasiswa
  const [mahasiswa] = useState([
    {
      nim: '24051214001',
      nama: 'Andi Saputra',
      noHp: '081234567890',
      email: 'andi@gmail.com',
      alamat: 'Surabaya, Jawa Timur',
      prodi: 'Sistem Informasi',
      tahunMasuk: '2024'
    },
    {
      nim: '24051214002',
      nama: 'Siti Amelia',
      noHp: '081234567891',
      email: 'siti@gmail.com',
      alamat: 'Sidoarjo, Jawa Timur',
      prodi: 'Informatika',
      tahunMasuk: '2024'
    },
    {
      nim: '24051214003',
      nama: 'Budi Santoso',
      noHp: '081234567892',
      email: 'budi@gmail.com',
      alamat: 'Gresik, Jawa Timur',
      prodi: 'Pendidikan Teknologi Informasi',
      tahunMasuk: '2023'
    },
    {
      nim: '24051214004',
      nama: 'Dewi Lestari',
      noHp: '081234567893',
      email: 'dewi@gmail.com',
      alamat: 'Malang, Jawa Timur',
      prodi: 'Sistem Informasi',
      tahunMasuk: '2024'
    },
    {
      nim: '24051214005',
      nama: 'Rina Putri',
      noHp: '081234567894',
      email: 'rina@gmail.com',
      alamat: 'Mojokerto, Jawa Timur',
      prodi: 'Manajemen Informatika',
      tahunMasuk: '2023'
    }
  ])

  // State untuk jam digital
  const [waktu, setWaktu] = useState(new Date())

  // Memperbarui waktu setiap satu detik
  useEffect(() => {
    const interval = setInterval(() => {
      setWaktu(new Date())
    }, 1000)

    // Cleanup interval ketika komponen dilepas
    return () => clearInterval(interval)
  }, [])

  // Format jam digital
  const jamSekarang = [
    waktu.getHours(),
    waktu.getMinutes(),
    waktu.getSeconds()
  ]
    .map((angka) => String(angka).padStart(2, '0'))
    .join(':')

  return (
    <div className="app">

      {/* HEADER */}
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">
            <span className="material-symbols-rounded">
              school
            </span>
          </div>

          <div className="brand-text">
            <span className="brand-caption">
              ACADEMIC DASHBOARD
            </span>
            <h1>Student Management</h1>
          </div>
        </div>

        <div className="topbar-status">
          <span className="status-dot"></span>
          <span>Frontend Practice</span>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-card">

        {/* PAGE HEADING */}
        <section className="page-heading">
          <div className="page-heading-copy">
            <div className="section-eyebrow">
              <span className="material-symbols-rounded">
                dashboard
              </span>
              OVERVIEW
            </div>

            <h2>Daftar Data Mahasiswa</h2>
            <p>
              Berikut merupakan informasi mahasiswa
              yang terdaftar dalam sistem
            </p>
          </div>

          <div className="heading-art">
            <span className="material-symbols-rounded">
              groups
            </span>
          </div>
        </section>

        {/* STATISTICS CARDS */}
        <section className="info-container">

          {/* TOTAL MAHASISWA */}
          <article className="info-card info-card--students">
            <div className="info-card-top">
              <div className="info-icon">
                <span className="material-symbols-rounded">
                  groups
                </span>
              </div>

              <span className="info-badge">
                DATA MAHASISWA
              </span>
            </div>

            <div className="info-card-body">
              <p>Total Mahasiswa</p>

              <div className="info-value">
                {mahasiswa.length}
                <span>Orang</span>
              </div>

              <div className="info-footnote">
                <span className="material-symbols-rounded">
                  task_alt
                </span>
                Data mahasiswa tersimpan
              </div>
            </div>
          </article>

          {/* DIGITAL CLOCK */}
          <article className="info-card info-card--clock">
            <div className="info-card-top">
              <div className="info-icon">
                <span className="material-symbols-rounded">
                  schedule
                </span>
              </div>

              <span className="info-badge">
                LIVE CLOCK
              </span>
            </div>

            <div className="info-card-body">
              <p>Waktu Sekarang</p>

              <div className="clock-value">
                {jamSekarang}
              </div>

              <div className="info-footnote">
                <span className="material-symbols-rounded">
                  autorenew
                </span>
                Diperbarui otomatis setiap detik
              </div>
            </div>
          </article>

        </section>

        {/* STUDENT TABLE */}
        <section className="table-section">

          <div className="table-heading">
            <div className="table-heading-title">
              <div className="table-icon">
                <span className="material-symbols-rounded">
                  table_view
                </span>
              </div>

              <div>
                <h3>Data Mahasiswa</h3>
                <p>Informasi lengkap mahasiswa yang terdaftar.</p>
              </div>
            </div>

            <div className="table-count">
              <span className="material-symbols-rounded">
                groups
              </span>
              {mahasiswa.length} Mahasiswa
            </div>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>NIM</th>
                  <th>Nama Mahasiswa</th>
                  <th>No. HP</th>
                  <th>Email</th>
                  <th>Alamat</th>
                  <th>Program Studi</th>
                  <th>Tahun Masuk</th>
                </tr>
              </thead>

              <tbody>
                {mahasiswa.map((mhs) => (
                  <tr key={mhs.nim}>
                    <td>
                      <span className="nim-text">
                        {mhs.nim}
                      </span>
                    </td>

                    <td>
                      <div className="student-cell">
                        <div className="student-avatar">
                          {mhs.nama
                            .split(' ')
                            .slice(0, 2)
                            .map((word) => word[0])
                            .join('')
                            .toUpperCase()}
                        </div>

                        <span className="student-name">
                          {mhs.nama}
                        </span>
                      </div>
                    </td>

                    <td>{mhs.noHp}</td>

                    <td>
                      <a
                        className="email-link"
                        href={`mailto:${mhs.email}`}
                      >
                        {mhs.email}
                      </a>
                    </td>

                    <td>{mhs.alamat}</td>

                    <td>
                      <span className="program-tag">
                        {mhs.prodi}
                      </span>
                    </td>

                    <td>
                      <span className="year-tag">
                        {mhs.tahunMasuk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            <span>
              <span className="material-symbols-rounded">
                info
              </span>
              Menampilkan seluruh data mahasiswa.
            </span>

            <span>
              Jumlah data: <strong>{mahasiswa.length}</strong>
            </span>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="dashboard-footer">
          <span>© 2026 Student Management</span>
          <span>React UI Implementation Practice</span>
        </footer>

      </main>
    </div>
  )
}

export default App
