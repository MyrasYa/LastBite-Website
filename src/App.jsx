import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Footer from "./components/Footer.jsx"
import { products } from "./datas/products.js";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Bagian Konten Utama */}
      <main className="max-w-7xl mx-auto px-3 md:px-8 mt-16 pb-20">
        <div className="flex flex-col lg:flex-row gap-13">
          {/* --- SIDEBAR (Kiri) --- */}
          <aside className="lg:w-1/4 flex flex-col gap-8">
            {/* 1. Filter Kategori */}
            <div className="bg-white p-6 rounded-2xl border border-orange-primary shadow-sm">
              <h3 className="font-bold text-lg mb-4">Kategori</h3>
              <div className="flex flex-col gap-2">
                {["Semua", "Bakery", "Meals", "Minuman"].map((cat) => (
                  <button
                    key={cat}
                    className="flex justify-between items-center p-2 hover:bg-orange-primary/5 rounded-lg group transition-all"
                  >
                    <span className="text-muted-foreground group-hover:text-orange-primary font-medium">
                      {cat}
                    </span>
                    <span className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                      12
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Impact Tracker (Bikin user merasa jd pahlawan) */}
            <div className="bg-orange-primary p-6 rounded-2xl text-white shadow-lg shadow-orange-primary/20">
              <p className="text-sm opacity-80 uppercase font-bold tracking-widest">
                Dampak Kamu
              </p>
              <h4 className="text-2xl font-black mt-1">2.4 kg CO₂</h4>
              <p className="text-xs mt-2 leading-relaxed opacity-90">
                Kamu telah menyelamatkan lingkungan dengan tidak membuang
                makanan.
              </p>
              <div className="mt-4 bg-white/20 h-2 w-full rounded-full overflow-hidden">
                <div className="bg-white h-full w-1/2"></div>
              </div>
            </div>
          </aside>

          {/* --- MAIN CONTENT (Kanan) --- */}
          <div className="lg:w-4/2">
            {/* Judul Section */}
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-black tracking-tight">
                  Tawaran Terdekat
                </h2>
                <p className="text-muted-foreground mt-1">
                  Diskon terbaik di sekitarmu.
                </p>
              </div>
            </div>

            {/* Grid Produk */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm w-full">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-lg">Partner Teraktif</h3>
              <span className="text-orange-primary text-[10px] font-bold uppercase cursor-pointer hover:underline">
                Lihat Semua
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { name: "Dunkin Kwitang", icon: "🍩", deals: 5 },
                { name: "Warteg Bahari", icon: "🍱", deals: 3 },
                { name: "Starbucks Reserve", icon: "☕", deals: 8 },
              ].map((shop, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-xl group-hover:bg-orange-primary/10 transition-colors">
                    {shop.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-foreground group-hover:text-orange-primary transition-colors">
                      {shop.name}
                    </h4>
                    <p className="text-[10px] text-muted-foreground">
                      {shop.deals} makanan tersedia hari ini
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
              ))}
            </div>

            {/* Iklan Tipis-Tipis */}
            <div className="mt-8 pt-6 border-t border-dashed border-border text-center">
              <p className="text-xs text-muted-foreground italic">
                "Punya toko makanan? Gabung jadi Partner LastBite!"
              </p>
              <button className="mt-3 text-xs font-bold text-orange-primary border border-orange-primary/30 px-4 py-2 rounded-full hover:bg-orange-primary hover:text-white transition-all w-full">
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
