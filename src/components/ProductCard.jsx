const ProductCard = ({ item }) => {
  return (
    <div className="card bg-background shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group rounded-xl">
      {/* Gambar dengan Badge Diskon */}
      <figure className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-orange-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          Hemat{" "}
          {Math.round((1 - item.discountPrice / item.originalPrice) * 100)}%
        </div>
      </figure>

      {/* Konten Card */}
      <div className="p-4 flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <span className="text-[10px] font-bold text-orange-primary uppercase tracking-widest">
            {item.tag}
          </span>
          <span className="text-[10px] text-muted-foreground flex items-center gap-1">
            🕒 {item.timeLeft}
          </span>
        </div>

        <h3 className="font-bold text-lg text-foreground leading-tight line-clamp-1">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{item.shop}</p>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-black text-foreground">
            Rp {item.discountPrice.toLocaleString()}
          </span>
          <span className="text-sm text-muted-foreground line-through opacity-60">
            Rp {item.originalPrice.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Button Logic */}
      <button
        disabled={item.isSoldOut}
        className={`btn w-full rounded-none h-10 min-h-0 border-none font-bold transition-colors ${
          item.isSoldOut
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-orange-primary hover:bg-orange-dark text-white shadow-lg shadow-orange-primary/20"
        }`}
      >
        {item.isSoldOut ? "Sudah Habis" : "Ambil Sekarang"}
      </button>
    </div>
  );
};

export default ProductCard;
