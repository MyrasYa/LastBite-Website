const Navbar = () => {
  return (
    <div className="navbar bg-background border-b border-orange-primary px-4 md:px-8">
      {/* 1. BAGIAN KIRI: Logo */}
      <div className="navbar-start">
        <div className="flex items-center gap-3 cursor-pointer">
          <span className="text-3xl">🍕</span>
          <span className="text-3xl font-bold tracking-tight text-orange-primary sm:block">
            LastBite
          </span>
        </div>
      </div>

      {/* 2. BAGIAN TENGAH: Search Bar */}
      <div className="navbar-center hidden lg:flex w-full max-w-sm">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Cari makanan lezat..."
            className="input input-border border border-border w-full rounded-full focus:border-orange-primary focus:outline-none focus:border-2 "
          />
          <button className="absolute right-3 top-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 3. BAGIAN KANAN: Keranjang & Login */}
      <div className="navbar-end gap-2">
        {/* Ikon Keranjang */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item bg-orange-primary text-white border-none px-2 py-2 rounded-full">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Tombol Login */}
        <button className="btn bg-orange-primary hover:bg-orange-dark text-white border-none rounded-md px-6 mx-3 ">
          Masuk
        </button>

        {/* Avatar Profile (Optional - buat hiasan) */}
        <div className="dropdown dropdown-end ml-2 ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar "
          >
            <div className="w-9 rounded-full hover:outline-none ">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
