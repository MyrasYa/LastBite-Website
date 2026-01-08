import ayamImage from "../assets/images/Ayam_bakar.jpg";
import donatImage from "../assets/images/Donat.jpg";
import croissantImage from "../assets/images/Croissant.jpg";
import saladImage from "../assets/images/Salad.jpg";

export const products = [
  {
    id: 1,
    name: "Donat Gula & Coklat (Isi 6)",
    shopName: "Dunkin Kwitang",
    originalPrice: 65000,
    discountPrice: 32500,
    image: donatImage,
    timeLeft: "2 jam lagi",
    isSoldOut: false,
  },
  {
    id: 2,
    name: "Nasi Ayam Bakar Madu",
    shopName: "Warteg Bahari",
    originalPrice: 25000,
    discountPrice: 12000,
    image:  ayamImage,
    timeLeft: "4 jam lagi",
    isSoldOut: false,
  },
  {
    id: 3,
    name: "Croissant Almond",
    shopName: "Starbucks Reserve",
    originalPrice: 45000,
    discountPrice: 22000,
    image: croissantImage,
    timeLeft: "30 menit lagi",
    isSoldOut: true, // Nanti ini tombolnya jadi disable
  },
  {
    id: 4,
    name: "Salad Buah Segar",
    shopName: "Healthy Bar",
    originalPrice: 30000,
    discountPrice: 15000,
    image: saladImage,
    timeLeft: "5 jam lagi",
    isSoldOut: false,
  }
];