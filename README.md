# Warung Nasi Raosan Deui - Website Restoran

Selamat datang di repository website untuk **Warung Nasi Raosan Deui**, sebuah website modern dan responsif untuk restoran kuliner Sunda autentik.

## 🍽️ Tentang Warung Nasi Raosan Deui

Warung Nasi Raosan Deui adalah restoran yang menyajikan kuliner Sunda autentik dengan resep turun temurun yang telah dipercaya lebih dari 30 tahun. "Raosan Deui" dalam bahasa Sunda berarti "Mari makan lagi", mencerminkan komitmen kami untuk memberikan pengalaman kuliner yang tak terlupakan.

## ✨ Fitur Website

### 🎨 Design & User Experience
- **Modern Responsive Design** - Tampil sempurna di semua perangkat (desktop, tablet, mobile)
- **Indonesian Cultural Elements** - Menggunakan warna dan desain yang mencerminkan budaya Indonesia
- **Smooth Animations** - Animasi yang halus dan engaging
- **Intuitive Navigation** - Navigasi yang mudah dan user-friendly

### 🍜 Functional Features
- **Menu Filtering** - Filter menu berdasarkan kategori (Nasi & Lauk, Sayuran, Minuman)
- **Interactive Contact Form** - Form kontak dengan validasi dan notifikasi
- **Mobile-First Navigation** - Hamburger menu yang responsif untuk mobile
- **Smooth Scrolling** - Navigasi yang halus antar section
- **Social Media Integration** - Link ke platform media sosial

### 🛠️ Technical Features
- **Semantic HTML5** - Struktur HTML yang bersih dan semantic
- **Modern CSS3** - Menggunakan CSS Grid, Flexbox, dan Custom Properties
- **Vanilla JavaScript** - Tanpa dependency framework, performa optimal
- **Cross-Browser Compatibility** - Kompatibel dengan semua browser modern
- **SEO Optimized** - Meta tags dan struktur yang SEO-friendly

## 🚀 Quick Start

### Prerequisites
- Web browser modern (Chrome, Firefox, Safari, Edge)
- Web server lokal (opsional, bisa menggunakan Live Server di VS Code)

### Installation

1. **Clone repository:**
   ```bash
   git clone <repository-url>
   cd Website-RaosanDeui
   ```

2. **Buka dengan Live Server:**
   - Jika menggunakan VS Code, install extension "Live Server"
   - Klik kanan pada `index.html` dan pilih "Open with Live Server"

3. **Atau buka langsung di browser:**
   - Double-click file `index.html`
   - Atau drag & drop file ke browser

## 📁 Struktur Project

```
Website-RaosanDeui/
│
├── index.html          # Halaman utama
├── styles.css          # Stylesheet utama
├── script.js           # JavaScript functionality
└── README.md           # Dokumentasi project
```

## 🎯 Sections Website

### 1. **Header & Navigation**
- Logo Warung Nasi Raosan Deui
- Menu navigasi (Beranda, Tentang Kami, Menu Unggulan, Lokasi, Kontak)
- Hotline contact number
- Mobile-responsive hamburger menu

### 2. **Hero Section**
- Welcome message yang menarik
- Call-to-action buttons
- Food showcase dengan animasi

### 3. **About Section**
- Sejarah dan pengalaman 30+ tahun
- Keunggulan bahan alami & segar
- Komitmen cita rasa otentik

### 4. **Menu Section**
- Tab filtering berdasarkan kategori
- Grid layout responsif
- Rating dan harga untuk setiap menu
- Hover effects yang interaktif

### 5. **Contact Section**
- Form kontak dengan validasi
- Informasi kontak lengkap
- Social media links

### 6. **Footer**
- Informasi company
- Quick links
- Contact information
- Copyright notice

## 🎨 Color Scheme

Website menggunakan palet warna yang mencerminkan budaya Indonesia:

- **Primary Color:** `#8B4513` (Saddle Brown - seperti kayu tradisional)
- **Secondary Color:** `#DC143C` (Crimson Red - seperti cabai merah)
- **Accent Color:** `#FF8C00` (Dark Orange - seperti kunyit)
- **Success Color:** `#228B22` (Forest Green - seperti daun pisang)

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** 320px - 767px

## 🔧 Customization

### Mengganti Logo
Ganti text di dalam `.nav-logo h2` di file `index.html`

### Mengganti Warna
Edit CSS custom properties di `:root` dalam file `styles.css`

### Menambah Menu Item
Tambahkan HTML structure baru dalam `.menu-grid` dengan format yang sama

### Mengganti Konten
Edit teks dan gambar sesuai kebutuhan di file `index.html`

## 🌟 Best Practices

### Performance
- Menggunakan placeholder images untuk development
- Optimized CSS dengan minimal redundancy
- Efficient JavaScript dengan event delegation
- Debounced scroll events untuk performa yang lebih baik

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text untuk images
- Keyboard navigation support
- ARIA labels where needed

### SEO
- Meta description dan title yang optimized
- Structured data markup ready
- Clean URL structure
- Optimized loading times

## 🚀 Deployment Options

### 1. **Vercel (Recommended) ⚡**

#### Method 1: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

#### Method 2: GitHub Integration (Easiest)
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Warung Nasi Cianjur website"
   git branch -M main
   git remote add origin https://github.com/yourusername/warung-nasi-cianjur.git
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard:**
   - Visit [vercel.com](https://vercel.com)
   - Login with GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" - Done! 🎉

#### Method 3: Drag & Drop
- Visit [vercel.com](https://vercel.com)
- Drag & drop your project folder
- Instant deployment!

**Live URLs after deployment:**
- **Production:** `https://warung-nasi-cianjur-raosan-deui.vercel.app`
- **Preview:** `https://warung-nasi-cianjur-raosan-deui-git-main.vercel.app`

### 2. **Netlify**
1. Push code ke GitHub repository
2. Login ke [Netlify](https://netlify.com)
3. Connect GitHub repository
4. Deploy automatically

### 3. **GitHub Pages**
1. Push ke GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (main)
4. Access via `username.github.io/repository-name`

### 4. **Traditional Web Hosting**
- Upload semua file via FTP
- Pastikan `index.html` ada di root directory

## ⚙️ Configuration Files

Project ini sudah dilengkapi dengan:
- **`vercel.json`** - Konfigurasi deployment untuk Vercel
- **`package.json`** - Project metadata dan scripts
- **`.gitignore`** - Files yang diabaikan Git

## 🌐 Custom Domain (Vercel)

Untuk menggunakan domain sendiri:
1. Buka project di Vercel dashboard
2. Klik tab "Domains"
3. Add your custom domain
4. Update DNS records sesuai instruksi

## 🔧 Local Development

```bash
# Install dependencies (optional)
npm install

# Run local server
npm run dev
# atau
npx serve .
```

## 📞 Contact & Support

Untuk pertanyaan teknis atau dukungan terkait website:

- **Email:** developer@raosandeui.com
- **Phone:** (022) 123-4567

## 📄 License

Project ini menggunakan MIT License. Anda bebas menggunakan, memodifikasi, dan mendistribusikan code ini untuk keperluan commercial maupun non-commercial.

## 🤝 Contributing

Kontribusi sangat welcome! Silakan:

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 🙏 Credits

- **Design Inspiration:** Traditional Indonesian restaurant websites
- **Fonts:** Google Fonts (Poppins)
- **Icons:** Font Awesome
- **Reference:** [RM Handayani](https://www.rmhandayani.com/)

---

**Dibuat dengan ❤️ untuk Warung Nasi Raosan Deui**

*Menyajikan kelezatan kuliner Sunda autentik dengan cita rasa tradisional yang tak terlupakan.* 