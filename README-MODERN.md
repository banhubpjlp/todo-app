# Modern To-Do List App

Aplikasi To-Do List modern dengan fitur lengkap dan desain yang menarik.

## 🎯 Fitur Utama

- ✅ Tambah, Edit, Hapus tugas
- ✅ Kategori tugas (Pribadi, Kerja, Belajar, Lainnya)
- ✅ Filter: Semua, Aktif, Selesai
- ✅ Dark Mode / Light Mode
- ✅ Dashboard statistik (Total, Selesai, Aktif)
- ✅ Data tersimpan di localStorage
- ✅ UI modern dan responsif
- ✅ Animasi smooth

## 🚀 Cara Menjalankan

### Opsi 1: Buka Langsung (Paling Mudah)
Cukup buka file `index.html` di browser Anda.

### Opsi 2: Gunakan Server Lokal

**Python:**
```bash
python -m http.server 8000
```

**Node.js (npx):**
```bash
npx http-server
```

**Live Server (VS Code):**
- Install ekstensi "Live Server"
- Klik kanan pada `index.html` → "Open with Live Server"

Lalu buka:
```
http://localhost:8000
```

## 📁 Struktur File

```
todo-app/
├── index.html       # Struktur HTML
├── styles.css       # Styling dan Dark Mode
├── script.js        # Logika aplikasi
└── README-MODERN.md # File dokumentasi ini
```

## 🎨 Tema

### Light Mode (Default)
- Background biru muda
- Teks gelap
- Tombol ungu

### Dark Mode
- Background gelap
- Teks terang
- Tombol ungu lebih cerah

Klik tombol 🌙 di sudut kanan atas untuk mengganti tema.

## 📝 Cara Menggunakan

1. **Tambah Tugas**
   - Ketik tugas di input field
   - Pilih kategori dari dropdown
   - Klik tombol "Tambah" atau tekan Enter

2. **Tandai Selesai**
   - Klik checkbox di sebelah tugas untuk menandai selesai

3. **Edit Tugas**
   - Klik tombol "Edit" pada tugas yang ingin diubah
   - Masukkan teks baru di popup

4. **Hapus Tugas**
   - Klik tombol "Hapus" pada tugas yang ingin dihapus
   - Konfirmasi penghapusan

5. **Filter Tugas**
   - Klik "Semua" untuk melihat semua tugas
   - Klik "Aktif" untuk melihat tugas yang belum selesai
   - Klik "Selesai" untuk melihat tugas yang sudah selesai

## 💾 Penyimpanan Data

Semua data disimpan di **localStorage** browser Anda. Data akan tetap tersimpan meskipun:
- Anda menutup tab browser
- Anda restart komputer
- Anda buka aplikasi dari komputer yang berbeda (selama browser yang sama)

Data akan hilang jika Anda:
- Menghapus cache/history browser
- Membuka aplikasi di browser incognito/private

## 🎯 Tips & Trik

1. **Tekan Enter** untuk menambah tugas dengan cepat
2. Gunakan **kategori** untuk mengorganisir tugas Anda
3. Filter tugas untuk fokus pada yang aktif saja
4. Gunakan **dark mode** untuk mata yang lebih nyaman di malam hari

## 🔧 Teknologi yang Digunakan

- **HTML5** - Struktur
- **CSS3** - Styling, animasi, dark mode
- **JavaScript** - Logika aplikasi
- **localStorage API** - Penyimpanan data

## 📱 Kompatibilitas

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablet
- ✅ Mobile

## 🤝 Kontribusi

Silakan fork repository ini dan buat pull request untuk improvement!

## 📄 Lisensi

MIT License - Bebas digunakan untuk keperluan apapun.

---

**Selamat menggunakan To-Do List App! 🎉**