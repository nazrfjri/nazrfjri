// ==========================================
// PANDUAN MENGGANTI GAMBAR:
// 1. Masukkan gambar sertifikatmu ke folder: src/assets/images/
// 2. Uncomment (hapus tanda //) pada baris import di bawah ini
// 3. Sesuaikan nama file gambarnya
// 4. Ubah nilai 'image' di dalam array menggunakan variabel import tersebut
// ==========================================

// import cert1 from "@/assets/images/cert-ui-basics.png";
// import cert2 from "@/assets/images/cert-mongodb.png";
// import cert3 from "@/assets/images/cert-weather.png";
// import cert4 from "@/assets/images/cert-restapi.png";
// import cert5 from "@/assets/images/cert-5.png";
// import cert6 from "@/assets/images/cert-6.png";
// import cert7 from "@/assets/images/cert-7.png";
// import cert8 from "@/assets/images/cert-8.png";
// import cert9 from "@/assets/images/cert-9.png";
// import cert10 from "@/assets/images/cert-10.png";

const certificatesData = [
  {
    id: 1,
    title: "User Interface (UI) Basics",
    issuer: "Udemy",
    date: "Dec 2024",
    image: "https://via.placeholder.com/600x400/0f172a/3b82f6?text=UI+Basics", // Nanti ganti jadi: cert1
  },
  {
    id: 2,
    title: "Introduction to MongoDB",
    issuer: "Udemy",
    date: "Dec 2024",
    image: "https://via.placeholder.com/600x400/0f172a/3b82f6?text=MongoDB", // Nanti ganti jadi: cert2
  },
  {
    id: 3,
    title: "Fullstack Development: Creating a Weather App",
    issuer: "Udemy",
    date: "Oct 2024",
    image: "https://via.placeholder.com/600x400/0f172a/3b82f6?text=Weather+App", // Nanti ganti jadi: cert3
  },
  {
    id: 4,
    title: "Create Rest API with Mongoose & Express JS",
    issuer: "Udemy",
    date: "Oct 2024",
    image: "https://via.placeholder.com/600x400/0f172a/3b82f6?text=REST+API", // Nanti ganti jadi: cert4
  },
  {
    id: 5,
    title: "Certificate Title 5",
    issuer: "Issuer Name",
    date: "Month Year",
    image: "https://via.placeholder.com/600x400/0f172a/3b82f6?text=Certificate+5", 
  },
  {
    id: 6,
    title: "Certificate Title 6",
    issuer: "Issuer Name",
    date: "Month Year",
    image: "https://via.placeholder.com/600x400/0f172a/3b82f6?text=Certificate+6",
  },
  {
    id: 7,
    title: "Certificate Title 7",
    issuer: "Issuer Name",
    date: "Month Year",
    image: "https://via.placeholder.com/600x400/0f172a/3b82f6?text=Certificate+7",
  },
  {
    id: 8,
    title: "Certificate Title 8",
    issuer: "Issuer Name",
    date: "Month Year",
    image: "https://via.placeholder.com/600x400/0f172a/3b82f6?text=Certificate+8",
  },
  {
    id: 9,
    title: "Certificate Title 9",
    issuer: "Issuer Name",
    date: "Month Year",
    image: "https://via.placeholder.com/600x400/0f172a/3b82f6?text=Certificate+9",
  },
  {
    id: 10,
    title: "Certificate Title 10",
    issuer: "Issuer Name",
    date: "Month Year",
    image: "https://via.placeholder.com/600x400/0f172a/3b82f6?text=Certificate+10",
  }
];

export default certificatesData;