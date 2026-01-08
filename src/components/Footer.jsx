const Footer = () => {
  return (
    <footer className="bg-[#030213] text-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🍕</span>
              <span className="text-2xl font-black tracking-tighter text-orange-primary">
                LastBite
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Misi kami adalah mengurangi limbah makanan di Indonesia dengan
              menghubungkan makanan lezat yang berlebih ke piring kamu dengan
              harga yang jauh lebih hemat.
            </p>
            <div className="flex gap-4">
              {["FB", "IG", "TW", "YT"].map((social) => (
                <div
                  key={social}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-orange-primary transition-colors cursor-pointer"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* 2. Menu Cepat */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Layanan</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="hover:text-orange-primary cursor-pointer transition-colors">
                Cari Makanan
              </li>
              <li className="hover:text-orange-primary cursor-pointer transition-colors">
                Toko Terdekat
              </li>
              <li className="hover:text-orange-primary cursor-pointer transition-colors">
                Jadi Partner
              </li>
              <li className="hover:text-orange-primary cursor-pointer transition-colors">
                Cara Kerja
              </li>
            </ul>
          </div>

          {/* 3. Bantuan */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Bantuan</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="hover:text-orange-primary cursor-pointer transition-colors">
                Pusat Bantuan
              </li>
              <li className="hover:text-orange-primary cursor-pointer transition-colors">
                Syarat & Ketentuan
              </li>
              <li className="hover:text-orange-primary cursor-pointer transition-colors">
                Kebijakan Privasi
              </li>
              <li className="hover:text-orange-primary cursor-pointer transition-colors">
                Kontak Kami
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Berlangganan Info Hemat</h4>
            <p className="text-sm text-gray-400 mb-4">
              Dapatkan update makanan diskon setiap hari langsung di emailmu.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="emailmu@gmail.com"
                className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-orange-primary transition-all"
              />
              <button className="bg-orange-primary hover:bg-orange-dark py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-orange-primary/20">
                Berlangganan
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© 2024 LastBite Indonesia. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Dibuat dengan ❤️ untuk Bumi</span>
            <span className="text-orange-primary">#SaveFoodSaveEarth</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
