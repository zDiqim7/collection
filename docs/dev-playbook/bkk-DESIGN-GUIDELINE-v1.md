# DESIGN GUIDELINE v1: Dashboard BKK SMK Laboratorium Jakarta

Versi 1.0 · 23 November 2026
Acuan: SRS Sistem Informasi BKK v1.0 (MOD-01 sampai MOD-09)
Cakupan: dashboard (halaman hub) dan pola halaman modul yang dibuka dari dashboard.

---

## 1. Konsep dalam satu paragraf

Dashboard adalah **papan kotak-kotak (tile)**. Isinya hanya pintu masuk: satu kotak per modul, tanpa tabel, grafik, atau form. Semua data dan aksi ada di halaman modul masing-masing. Gayanya tegas dan datar: border hitam tebal, bayangan keras tanpa blur, sudut sedikit membulat, warna datar tanpa gradien.

**Tiga prinsip yang tidak boleh dilanggar**
1. **Dashboard ringan.** Satu kotak = satu modul = satu tombol. Kalau ada keinginan menaruh angka, tabel, atau grafik di dashboard, pindahkan ke halaman modulnya.
2. **Warna membantu membedakan, bukan menghias.** Setiap modul punya warna tetap dan tidak berubah antar halaman.
3. **Kejelasan lebih penting dari gaya.** Pengguna sekolah tidak semuanya akrab teknologi. Teks harus terbaca, tombol harus jelas, label harus pakai bahasa sehari-hari.

---

## 2. Struktur halaman dashboard

```
┌──────────────────────────────────────────────────────────┐
│ TOPBAR: logo + nama BKK | chip peran | Dashboard | Masuk │
├──────────────────────────────────────────────────────────┤
│ KOTAK SAMBUTAN (lebar penuh, 3 kolom)                    │
│  judul + 1 kalimat + 1 tombol aksi utama                 │
├───────────────┬───────────────┬──────────────────────────┤
│ MOD-01        │ MOD-02        │ MOD-03                   │
├───────────────┼───────────────┼──────────────────────────┤
│ MOD-04        │ MOD-05        │ MOD-06                   │
├───────────────┼───────────────┼──────────────────────────┤
│ MOD-07        │ MOD-08        │ MOD-09                   │
└───────────────┴───────────────┴──────────────────────────┘
```

| Bagian | Aturan |
|---|---|
| Lebar konten | Maksimal 1080 px, rata tengah, padding 16 px |
| Topbar | Logo di kiri; chip peran, tombol Dashboard, dan tombol Masuk di kanan. Boleh turun baris di layar sempit |
| Kotak sambutan | Lebar penuh, latar putih. Satu judul (H1), satu kalimat penjelasan, satu tombol utama |
| Grid tile | 3 kolom, jarak antar kotak 16 px |
| Urutan tile | Mengikuti urutan modul di SRS (MOD-01 sampai MOD-09). Jangan diacak per pengguna kecuali karena hak akses |
| Navigasi balik | Setiap halaman modul punya tombol "← Dashboard" di paling atas, plus tombol Dashboard di topbar |

---

## 3. Anatomi satu tile

Urutan isi dari atas ke bawah, dan tidak boleh ditambah:

1. **Kode modul** (kecil, mis. `MOD-05`), transparansi 75 persen
2. **Ikon** (emoji atau SVG, ukuran 34 px)
3. **Judul modul** (20 px, tebal), memakai nama fungsi, bukan istilah teknis
4. **Deskripsi satu kalimat** (14 px), maksimal sekitar 60 karakter
5. **Tombol** "Buka halaman" (blok kecil berwarna kebalikan tile)

| Properti | Nilai |
|---|---|
| Tinggi minimum | 190 px (150 px di ponsel) |
| Padding | 16 px |
| Border | 2 px hitam |
| Radius | 6 px |
| Bayangan | `5px 5px 0` hitam, tanpa blur |
| Elemen HTML | `<button>` (bukan `<div>` yang diklik), supaya bisa diakses keyboard |
| Hover | Tile bergeser 2 px ke kanan-bawah, bayangan mengecil jadi 3 px |
| Fokus keyboard | Outline biru 3 px, offset 2 px |
| Seluruh tile | Bisa diklik, bukan hanya tombolnya |

**Satu tile boleh "ditonjolkan"** dengan warna paling gelap (di v1: Lowongan, karena itu fungsi inti BKK). Jangan menonjolkan lebih dari dua tile, karena efek menonjolnya hilang.

---

## 4. Sistem warna

Warna yang diizinkan hanya: **putih, hitam, hijau (beberapa tingkat), kuning, biru, abu-abu, dan putih tua**. Jangan menambah warna di luar daftar ini tanpa keputusan baru.

### 4.1 Warna dasar

| Peran | Nama | Hex |
|---|---|---|
| Latar halaman | Putih tua | `#F1EEE3` |
| Permukaan kartu | Putih | `#FFFFFF` |
| Teks, border, bayangan | Hitam | `#0A0A0A` |
| Teks sekunder | Abu gelap | `#555555` |
| Tombol utama, fokus, tautan | Biru | `#1F4FD8` |
| Sorotan (tab aktif, nomor langkah, hero) | Kuning | `#FFD84D` |

### 4.2 Warna tile per modul

| Modul | Warna | Hex | Teks | Rasio kontras* |
|---|---|---|---|---|
| MOD-01 Beranda | Kuning | `#FFD84D` | Hitam | 14,3 |
| MOD-02 Kelembagaan | Hijau muda | `#BFE3B4` | Hitam | 14,0 |
| MOD-03 Siswa/Alumni | Hijau sedang | `#7BC47F` | Hitam | 9,5 |
| MOD-04 Perusahaan | Abu terang | `#D0D4D9` | Hitam | 13,3 |
| MOD-05 Lowongan (ditonjolkan) | Hijau tua | `#1B5E3A` | **Putih** | 7,8 |
| MOD-06 Lamaran | Biru muda | `#BCD3FF` | Hitam | 13,1 |
| MOD-07 Statistik | Putih tua gelap | `#EDE6D3` | Hitam | 15,9 |
| MOD-08 Laporan | Biru tua | `#2F5BD8` | **Putih** | 5,8 |
| MOD-09 Audit | Abu sedang | `#A8AEB5` | Hitam | 8,8 |

\*Dihitung dengan rumus kontras WCAG 2.x. Batas minimal teks biasa 4,5 dan teks besar 3. Semua pasangan di atas lolos, tetapi **ulangi pengecekan setiap kali warna diubah**.

### 4.3 Aturan pemakaian warna

- **Satu modul = satu warna, selamanya.** Warna modul dipakai lagi di header halaman modul tersebut dan di tautan dari tempat lain.
- **Jangan menaruh dua tile berwarna sama bersebelahan.** Urutan di atas sudah menyelang hijau, kuning, abu, dan biru.
- **Warna tile gelap (hijau tua, biru tua) wajib teks putih**, dan tile terang wajib teks hitam. Tidak ada teks abu di atas tile.
- **Warna tidak boleh jadi satu-satunya pembawa informasi.** Status selalu ditulis dengan teks di dalam badge.

### 4.4 Warna status (badge)

| Status | Latar | Teks |
|---|---|---|
| Berhasil / aktif / dipublikasikan | `#BFEFD6` | Hitam |
| Menunggu / perlu perhatian | `#FFE08A` | Hitam |
| Informasi / sedang diproses | `#BFD3FF` | Hitam |
| Ditolak / kedaluwarsa / gagal | `#2B2B2B` | Putih |

**Catatan keputusan:** merah dibuang dari v1 karena tidak ada di palet yang disetujui. Konsekuensinya, status negatif hanya dibedakan lewat teks dan kontras gelap, tidak lewat warna sinyal. Jika sekolah mengizinkan satu warna tambahan, merah untuk status negatif adalah kandidat pertama.

### 4.5 Mode gelap

| Peran | Hex |
|---|---|
| Latar | `#0E0E0E` |
| Kartu | `#1B1B1B` |
| Teks, border | `#F1EEE3` |
| Teks sekunder | `#A8A8A8` |
| Biru tombol | `#6C93FF` |

Warna tile **tidak diubah** di mode gelap. Teks di dalam tile tetap hitam atau putih sesuai tabel 4.2. Bayangan tetap hitam pekat.

---

## 5. Tipografi

| Properti | Nilai |
|---|---|
| Font | **Space Grotesk** (Google Fonts), bobot 400, 500, 700 |
| Fallback | `system-ui, -apple-system, "Segoe UI", sans-serif` |
| Teks isi | 15 px, line-height 1.5 |
| Judul tile (H3) | 20 px, tebal |
| Judul halaman (H2) | `clamp(22px, 3.5vw, 30px)` |
| Judul sambutan (H1) | `clamp(24px, 4vw, 34px)`, line-height 1.15 |
| Teks kecil / kode modul | 12 sampai 13 px |
| Panjang baris | Maksimal sekitar 60 sampai 70 karakter |
| Huruf kapital | Tidak dipakai untuk label. Gunakan huruf kapital hanya di awal kalimat |

Jika target pengguna banyak yang lebih tua, **naikkan teks isi ke 16 sampai 17 px**. Ini lebih berpengaruh pada keterbacaan daripada pilihan warna.

---

## 6. Bentuk, border, dan bayangan

| Elemen | Border | Radius | Bayangan |
|---|---|---|---|
| Kartu (`.b`) | 2 px hitam | 6 px | `4px 4px 0` hitam |
| Tile | 2 px hitam | 6 px | `5px 5px 0` hitam |
| Tombol | 2 px hitam | 6 px | `3px 3px 0` hitam |
| Badge / chip | 2 px hitam | 4 px | tanpa |
| Input / select | 2 px hitam | 6 px | tanpa |
| Tabel | 2 px hitam (pembungkus) dan antar baris | 6 px (pembungkus) | `4px 4px 0` |
| Tab | 2 px hitam, tanpa border bawah | 6 px atas | tanpa |

Aturan: **bayangan tidak pernah memakai blur dan tidak pernah berwarna lain selain hitam.** Radius dibuat kecil agar kesan kotaknya tetap kuat. Jangan membesarkan radius menjadi bulat.

---

## 7. Spasi

Kelipatan 4 px: `4, 8, 10, 12, 14, 16`.

| Konteks | Nilai |
|---|---|
| Jarak antar tile dan antar kartu | 16 px |
| Padding kartu dan tile | 16 px |
| Jarak antar elemen di dalam tile | 8 px |
| Jarak baris tombol | 10 px |
| Jarak topbar ke konten | 16 px |

---

## 8. Responsif

| Lebar layar | Grid tile | Catatan |
|---|---|---|
| Lebih dari 820 px | 3 kolom | Tampilan desktop |
| 561 sampai 820 px | 2 kolom | Tablet |
| 560 px atau kurang | 1 kolom | Ponsel. Tile tinggi minimum 150 px |

- Tabel lebar dibungkus `overflow-x: auto`. Halaman tidak boleh bergeser ke samping.
- Pada ponsel, tambahkan `viewport-fit=cover` dan padding `env(safe-area-inset-*)`.
- Tombol dan tile minimal 44 px untuk area sentuh.

---

## 9. Pola halaman modul (turunan dari dashboard)

Semua halaman modul memakai kerangka yang sama:

1. Tombol **"← Dashboard"** (paling atas)
2. **Judul halaman** (H2) = nama modul persis seperti di tile
3. **Kalimat pengantar** satu baris (warna sekunder)
4. **Isi**: kartu, tabel, tab, atau form dengan gaya kotak yang sama

| Kebutuhan | Pola yang dipakai |
|---|---|
| Daftar data banyak kolom | Tabel dalam pembungkus bertepi |
| Beberapa subbagian dalam satu modul | Tab (contoh: Kelembagaan) |
| Daftar item dengan aksi | Kartu per item (contoh: Perusahaan, Lowongan) |
| Proses bertahap | Stepper bernomor (contoh: Lamaran). Nomor hanya dipakai bila memang berurutan |
| Alur status | Deretan badge kotak (contoh: status lowongan) |
| Angka ringkas | Kartu KPI dengan angka besar dan label kecil |
| Perbandingan nilai | Bar horizontal sederhana, bukan grafik berat |
| Aksi utama halaman | Satu tombol biru (`.btn.p`), sisanya tombol putih |

Ketentuan:
- **Satu halaman, satu aksi utama.** Jangan ada dua tombol biru bersaing di satu area.
- Warna header halaman modul boleh memakai warna tile modul itu sebagai penanda, tetapi isi tetap putih.
- Halaman dengan data pribadi (lamaran, laporan, siswa) harus menampilkan peringatan privasi singkat.

---

## 10. Hak akses di tampilan

Mengacu ke matriks hak akses SRS (bagian 4.2).

- Dashboard hanya menampilkan tile yang boleh diakses peran tersebut.
- Menyembunyikan tile **bukan** pengamanan. Pemeriksaan hak akses tetap wajib di sisi server, sesuai SRS.
- Chip peran di topbar selalu menunjukkan peran aktif.
- Jika pengguna membuka halaman tanpa izin, tampilkan pesan jelas ("Halaman ini hanya untuk Admin BKK") dengan tombol kembali, bukan halaman kosong.

| Peran | Tile yang tampil (usulan, perlu persetujuan sekolah) |
|---|---|
| Pengunjung | Beranda, Kelembagaan (publik), Perusahaan (publik), Lowongan |
| Siswa/Alumni | Beranda, Lowongan, Lamaran, profil sendiri |
| Admin BKK | Semua tile |
| Kepala BKK | Semua tile, dengan tindakan ubah dibatasi sesuai SRS |

---

## 11. Bahasa dan tulisan (copywriting)

- Pakai kalimat aktif dan kata kerja sederhana: "Buka halaman", "Kirim lamaran", "Simpan profil".
- Nama aksi **konsisten** dari tombol sampai pesan hasilnya. Tombol "Publikasikan" menghasilkan pesan "Lowongan dipublikasikan".
- Nama tile = nama halaman = nama menu. Jangan ada tiga nama berbeda untuk modul yang sama.
- Hindari istilah teknis (API, entitas, audit trail) di tampilan untuk siswa dan HRD. Di tampilan admin boleh seperlunya.
- Pesan kosong memberi arahan: "Tidak ada lowongan yang cocok. Coba ubah kata kunci atau jurusan."
- Pesan galat menyebut masalah dan cara memperbaikinya, tanpa membocorkan detail teknis (sesuai FR-060).
- Istilah resmi tetap sama dengan SRS: Siswa aktif, Alumni, Perusahaan mitra, Lamaran, Tayangan, Pengunjung unik.
- Pengunjung unik selalu diberi keterangan bahwa itu **estimasi**, bukan identitas seseorang (FR-046).

---

## 12. Aksesibilitas (batas minimal)

- Kontras teks minimal 4,5 : 1 (3 : 1 untuk teks besar).
- Semua tile, tombol, tab, dan chip bisa dijangkau dengan keyboard dan punya indikator fokus yang jelas.
- Gunakan `<button>`, `<table>`, `<label>`, dan `aria-label` yang sesuai.
- Tab memakai `role="tab"` dan `aria-selected`. Chip filter memakai `aria-pressed`.
- Animasi hanya untuk respons aksi pengguna (hover, geser kecil). Hormati `prefers-reduced-motion`.
- Ikon emoji dekoratif diberi `aria-hidden="true"`, dan artinya sudah ada di judul.
- Jangan mengandalkan warna saja untuk status.

---

## 13. Token CSS siap pakai

```css
:root {
  /* dasar */
  --bg:#F1EEE3; --card:#FFFFFF; --ink:#0A0A0A; --mut:#555555; --sh:#0A0A0A;
  --blue:#1F4FD8; --yellow:#FFD84D;

  /* tile per modul */
  --m01:#FFD84D; --m02:#BFE3B4; --m03:#7BC47F;
  --m04:#D0D4D9; --m05:#1B5E3A; --m06:#BCD3FF;
  --m07:#EDE6D3; --m08:#2F5BD8; --m09:#A8AEB5;

  /* status */
  --ok:#BFEFD6; --warn:#FFE08A; --info:#BFD3FF; --neg:#2B2B2B;
}
@media (prefers-color-scheme: dark) {
  :root { --bg:#0E0E0E; --card:#1B1B1B; --ink:#F1EEE3; --mut:#A8A8A8; --sh:#000; --blue:#6C93FF; }
}

.tile {
  --tx:#0A0A0A;
  background:var(--c); color:var(--tx);
  border:2px solid var(--ink); border-radius:6px;
  box-shadow:5px 5px 0 var(--sh);
  padding:16px; min-height:190px;
  display:flex; flex-direction:column; gap:8px;
}
.tile.dk { --tx:#fff; }               /* untuk MOD-05 dan MOD-08 */
.tile:hover { transform:translate(2px,2px); box-shadow:3px 3px 0 var(--sh); }
.tile:focus-visible { outline:3px solid var(--blue); outline-offset:2px; }

.grid { display:grid; gap:16px; grid-template-columns:repeat(3,1fr); }
@media (max-width:820px){ .grid{ grid-template-columns:repeat(2,1fr);} }
@media (max-width:560px){ .grid{ grid-template-columns:1fr;} .tile{min-height:150px;} }
```

---

## 14. Langkah membuat dashboard dengan gaya ini

1. **Daftar modul dari SRS.** Satu modul = satu tile. Jangan menggabung atau memecah tanpa mengubah SRS.
2. **Tulis teks tiap tile**: nama modul, satu kalimat fungsi, tombol. Jika kalimat fungsi lebih dari satu baris di desktop, persingkat.
3. **Tetapkan warna tiap modul** dari tabel 4.2. Cek kontras teks. Pilih paling banyak satu atau dua tile untuk ditonjolkan.
4. **Susun grid 3 kolom**, tambahkan kotak sambutan lebar penuh di atas.
5. **Buat tile sesuai anatomi** (bagian 3). Pastikan elemennya `<button>`.
6. **Pasang routing sederhana** (mis. hash `#lowongan`). Satu tile menuju satu halaman.
7. **Bangun halaman modul** memakai pola di bagian 9. Mulai dari modul yang paling sering dipakai.
8. **Terapkan hak akses**: tampilkan hanya tile yang diizinkan, dan periksa ulang di server.
9. **Uji di ponsel dan keyboard**, lalu jalankan daftar periksa di bawah.
10. **Uji dengan pengguna asli** (guru, staf BKK, siswa), minimal 3 sampai 5 orang, sebelum menganggap desain ini final.

---

## 15. Daftar periksa sebelum rilis

**Dashboard**
- [ ] Hanya ada kotak sambutan dan tile modul, tanpa data atau grafik
- [ ] Setiap tile punya kode, ikon, judul, deskripsi satu kalimat, dan tombol
- [ ] Warna tile mengikuti tabel 4.2 dan tidak ada tile bersebelahan dengan warna sama
- [ ] Tile gelap berteks putih, tile terang berteks hitam
- [ ] Seluruh tile bisa diklik dan bisa difokus keyboard

**Visual**
- [ ] Hanya memakai warna dari palet yang disetujui
- [ ] Bayangan tanpa blur dan berwarna hitam
- [ ] Radius 4 sampai 6 px, tidak ada gradien

**Isi dan fungsi**
- [ ] Setiap halaman punya tombol kembali ke dashboard
- [ ] Nama modul sama di tile, judul halaman, dan menu
- [ ] Status selalu ditulis dengan teks
- [ ] Peringatan privasi muncul di halaman dengan data pribadi
- [ ] Hak akses diperiksa di server, bukan hanya di tampilan

**Kualitas**
- [ ] Kontras sudah dicek ulang setelah perubahan warna
- [ ] Tampilan 3, 2, dan 1 kolom diuji
- [ ] Tidak ada geser horizontal di ponsel
- [ ] Diuji dengan pengguna nyata

---

## 16. Hal yang sengaja belum diputuskan

Bagian ini jujur soal batas v1 supaya tidak dianggap sudah final.

| Hal | Status |
|---|---|
| Warna negatif (merah) | Belum ada. Menunggu keputusan apakah palet boleh bertambah |
| Logo dan warna resmi sekolah | Belum dimasukkan. Jika sekolah punya identitas visual, palet perlu disesuaikan |
| Pengaturan tile per peran | Usulan di bagian 10 belum disetujui sekolah |
| Font resmi | Space Grotesk dipilih untuk v1, belum diuji keterbacaannya oleh pengguna senior |
| Ikon | Memakai emoji sebagai placeholder. Emoji tampil berbeda antar perangkat, sehingga set ikon SVG yang seragam lebih baik untuk versi produksi |
| Skala teks untuk pengguna lebih tua | Menunggu hasil uji pengguna |
| Kode jurusan TKKR dan AK | Masih kode rancangan sesuai SRS 5.3 (FR-012), perlu konfirmasi sekolah |

---

## Riwayat versi

| Versi | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 23 Nov 2026 | Versi awal: layout tile, palet hijau-kuning-biru-abu-putih, pola halaman modul |
