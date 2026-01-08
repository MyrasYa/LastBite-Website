import heroImage from "../assets/images/heroimage.jpg";

const Hero = () => {
  const descImage = "Delicious Surplus Food";

  return (
    <div className="relative bg-background overflow-hidden py-16 md:py-24 border-b border-orange-primary">
      {/* Dekorasi Oranye di Background (Opsional) */}
      {/* <div className="absolute top-0 right-0 -translate-y-1 translate-x-1/2 w-100 h-96 bg-orange-primary rounded-full blur-3xl"></div> */}
      <div className="absolute bottom-0 right-0 -translate-y-4/2 translate-x-1/4 w-100 h-96 bg-orange-primary rounded-full blur-3xl opacity-25 "></div>

      <div className="container mx-auto px-4 md:px-9 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Sisi Kiri: Teks Headline */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-orange-primary/10 border border-orange-primary/20">
              <span className="text-orange-primary text-sm font-bold tracking-wide uppercase">
                🍕 Hemat hingga 70% setiap hari
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-foreground">
              Makan Enak, <br />
              <span className="text-orange-primary">Harga Hemat.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Selamatkan makanan lezat dari restoran favoritmu sebelum toko
              tutup. Lebih murah untuk dompetmu, lebih baik untuk bumi kita.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn bg-orange-primary hover:bg-orange-dark text-white border-none rounded-xl px-10 h-14 text-lg font-bold shadow-lg shadow-orange-primary/30 transition-all hover:-translate-y-1">
                Jelajahi Menu
              </button>
              <button className="btn btn-outline border-2 border-border hover:bg-muted rounded-xl px-10 h-14 text-lg font-bold transition-all">
                Cara Kerja
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
              {/* Avatar Group Manual - Tanpa Gambar Luar */}
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-4 border-background bg-orange-100 flex items-center justify-center text-xl shadow-sm">
                  🙋‍♂️
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-background bg-green-100 flex items-center justify-center text-xl shadow-sm">
                  🙋‍♀️
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-background bg-blue-100 flex items-center justify-center text-xl shadow-sm">
                  👨‍🍳
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-background bg-orange-primary flex items-center justify-center text-xs font-bold text-white shadow-sm">
                  +500
                </div>
              </div>
              <p className="text-sm font-medium">
                <span className="font-bold">500+</span> warga sudah
                menyelamatkan makanan
              </p>
            </div>
          </div>

          {/* Sisi Kanan: Gambar Visual */}
          <div className="flex-1 w-full max-w-xl ml-0">
            <div className="relative">
              {/* Efek Bingkai di belakang gambar */}
              <div className="absolute inset-0 bg-orange-primary rounded-3xl rotate-3 scale-105 opacity-25 shadow-2xl"></div>

              <img
                src={heroImage}
                alt={descImage}
                className="relative rounded-3xl shadow-xl object-cover w-full aspect-square md:aspect-video lg:aspect-square transform hover:scale-[1.02] transition-transform duration-500 "
              />

              {/* Floating Card Info */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-4 rounded-2xl shadow-xl border border-none hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-primary/20 rounded-xl flex items-center justify-center text-green-primary">
                    🌱
                  </div>
                  <div>
                    <p className="text-sm font-bold">-2.5kg CO2</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold">
                      Carbon Saved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
