# 🍕 LastBite Website

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

**LastBite** adalah platform *food rescue* modern yang bertujuan untuk mengurangi limbah makanan di Indonesia. Platform ini menghubungkan toko makanan, resto, atau cafe yang memiliki stok makanan berlebih (*surplus food*) dengan konsumen yang ingin membeli makanan berkualitas dengan harga diskon besar.

---

## ✨ Fitur Utama
* **Dynamic Product Grid:** Menampilkan daftar makanan surplus secara interaktif.
* **Three-Column Professional Layout:** Layout modern yang membagi ruang antara navigasi, konten utama, dan informasi partner.
* **Impact Tracker:** Fitur psikologis untuk menunjukkan kontribusi pengguna dalam mengurangi emisi CO2.
* **Real-time Stock Logic:** Label "Sold Out" otomatis yang mengubah gaya visual kartu produk.
* **Fully Responsive:** Desain yang dioptimalkan untuk berbagai ukuran layar (Mobile, Tablet, Desktop).
* **Custom Theme Implementation:** Menggunakan variabel CSS modern di Tailwind CSS v4 untuk konsistensi desain.

---

## 🛠️ Tech Stack
* **Frontend:** [React.js](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **UI Components:** [DaisyUI](https://daisyui.com/) (Tailwind CSS Plugin)
* **Icons:** Lucide React / Emojis

---

## 🚀 Instalasi Lokal

Ikuti langkah-langkah di bawah untuk menjalankan proyek ini di komputermu:

1.  **Clone Repository**
    ```bash
    git clone [https://github.com/MyrasYa/LastBite-Website.git](https://github.com/MyrasYa/LastBite-Website.git)
    ```
2.  **Masuk ke Direktori**
    ```bash
    cd LastBite-Website
    ```
3.  **Install Dependencies**
    ```bash
    npm install
    ```
4.  **Jalankan Project**
    ```bash
    npm run dev
    ```
5.  **Buka di Browser**
    Akses `http://localhost:5173`

---

## 📂 Struktur Folder
```text
src/
 ├── assets/             # Aset gambar dan media (WebP optimized)
 ├── components/         # Komponen UI (Navbar, Hero, ProductCard, dll)
 ├── datas/              # Dummy data untuk keperluan prototyping
 ├── index.css           # Konfigurasi tema Tailwind CSS v4
 └── App.jsx             # Entry point aplikasi utama