export const products = [
  {
    id: 1,
    name: "Donat Gula & Coklat (Isi 6)",
    shopName: "Dunkin Kwitang",
    originalPrice: 65000,
    discountPrice: 32500,
    image: "https://images.unsplash.com/photo-1551024601-56296352f488?w=500&q=80", // Foto dummy unsplash
    timeLeft: "2 jam lagi",
    isSoldOut: false,
  },
  {
    id: 2,
    name: "Nasi Ayam Bakar Madu",
    shopName: "Warteg Bahari",
    originalPrice: 25000,
    discountPrice: 12000,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&q=80",
    timeLeft: "4 jam lagi",
    isSoldOut: false,
  },
  {
    id: 3,
    name: "Croissant Almond",
    shopName: "Starbucks Reserve",
    originalPrice: 45000,
    discountPrice: 22000,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80",
    timeLeft: "30 menit lagi",
    isSoldOut: true, // Nanti ini tombolnya jadi disable
  },
  {
    id: 4,
    name: "Salad Buah Segar",
    shopName: "Healthy Bar",
    originalPrice: 30000,
    discountPrice: 15000,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
    timeLeft: "5 jam lagi",
    isSoldOut: false,
  }
];