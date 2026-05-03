export type ProductItem = {
  title: string;
  image: string;
};

export type ProductCategory = {
  title: string;
  href: string;
  image: string;
  categoryImage: string;
  items: ProductItem[];
};

export const products: ProductCategory[] = [
  {
    title: "Yangın Söndürme Cihazları",
    href: "/yangin-sondurme-cihazlari/",
    image: "/services/yangin-tupu-imalati-500x371-500x371-400x225.webp",
    categoryImage: "/optimized/categories/yangin-cat.webp",
    items: [
      {
        title: "Halokarbon Gazlı Yangın Söndürme Cihazları",
        image:
          "/products/yangin-sondurme-cihazlari/halokarbon-gazl-yangn-sndrme-cihazlar-506x304.webp",
      },
      {
        title:
          "Sprink Başlıklı Tozlu ve Halokarbonlu Yangın Söndürme Cihazları",
        image:
          "/products/yangin-sondurme-cihazlari/sprink-balkl-tozlu-ve-halokarbonlu-yangn-sndrme-cihazlar-506x304.webp",
      },
      {
        title: "Karbondioksit Gazlı Yangın Söndürme Cihazları - 4kg",
        image: "/products/yangin-sondurme-cihazlari/4-506x304.webp",
      },
      {
        title: "Karbondioksit Gazlı Yangın Söndürme Cihazları - 5kg",
        image: "/products/yangin-sondurme-cihazlari/5-506x304.webp",
      },
      {
        title: "Karbondioksit Gazlı Yangın Söndürme Cihazları - 10kg",
        image: "/products/yangin-sondurme-cihazlari/10-506x304.webp",
      },
      {
        title: "Karbondioksit Gazlı Yangın Söndürme Cihazları - 30kg",
        image: "/products/yangin-sondurme-cihazlari/30-506x304.webp",
      },
      {
        title: "Köpüklü Yangın Söndürme Cihazları - 6kg",
        image: "/products/yangin-sondurme-cihazlari/6-506x304.webp",
      },
      {
        title: "Köpüklü Yangın Söndürme Cihazları - 12kg",
        image: "/products/yangin-sondurme-cihazlari/12-506x304.webp",
      },
      {
        title: "Köpüklü Yangın Söndürme Cihazları - 25kg",
        image: "/products/yangin-sondurme-cihazlari/25-506x304.webp",
      },
      {
        title: "Köpüklü Yangın Söndürme Cihazları - 50kg",
        image: "/products/yangin-sondurme-cihazlari/50-506x304.webp",
      },
      {
        title: "Kuru Tozlu Yangın Söndürme Cihazları - 1kg",
        image: "/products/yangin-sondurme-cihazlari/1kg-506x304.webp",
      },
      {
        title: "Kuru Tozlu Yangın Söndürme Cihazları - 2kg",
        image: "/products/yangin-sondurme-cihazlari/2kg-506x304.webp",
      },
      {
        title: "Kuru Tozlu Yangın Söndürme Cihazları - 6kg",
        image: "/products/yangin-sondurme-cihazlari/6kg-506x304.webp",
      },
      {
        title: "Kuru Tozlu Yangın Söndürme Cihazları - 12kg",
        image: "/products/yangin-sondurme-cihazlari/12kg-506x304.webp",
      },
      {
        title: "Kuru Tozlu Yangın Söndürme Cihazları - 25kg",
        image: "/products/yangin-sondurme-cihazlari/25-1-506x304.webp",
      },
      {
        title: "Kuru Tozlu Yangın Söndürme Cihazları - 50kg",
        image: "/products/yangin-sondurme-cihazlari/50-1-506x304.webp",
      },
    ],
  },
  {
    title: "Yangın Söndürme Sistemleri",
    href: "/yangin-sondurme-sistemleri/",
    image: "/services/proje-1.webp",
    categoryImage: "/optimized/categories/yangin-sondurme-sis.webp",
    items: [],
  },
  {
    title: "Yangın Dolapları ve Hidrantları",
    href: "/yangin-dolaplari-ve-hidrantlari/",
    image: "/services/acil-aydınlatma.webp",
    categoryImage: "/optimized/categories/yangin-dolaplari.webp",
    items: [
      {
        title: "Mobil Köpük Ünitesi - 500 Litre",
        image:
          "/products/yangin-dolaplari-ve-hidrantlari/mobil-kpk-nitesi-d-506x304.webp",
      },
      {
        title: "Mobil Köpük Ünitesi - 450 Litre",
        image:
          "/products/yangin-dolaplari-ve-hidrantlari/mobil-kpk-nitesi-w-506x304.webp",
      },
      {
        title: "Mobil Köpük Ünitesi - 120 Litre",
        image:
          "/products/yangin-dolaplari-ve-hidrantlari/mobil-kpk-nitesi-506x304.webp",
      },
      {
        title: "EN 671-1 Yangın Dolabı Cam Kapaklı",
        image: "/products/yangin-dolaplari-ve-hidrantlari/ydh-101-506x304.webp",
      },
      {
        title: "EN 671-2 Yangın Dolabı",
        image: "/products/yangin-dolaplari-ve-hidrantlari/ydh-100-506x304.webp",
      },
      {
        title: "EN 671-1 Yangın Dolabı Sac Kapaklı",
        image: "/products/yangin-dolaplari-ve-hidrantlari/ydh-102-506x304.webp",
      },
      {
        title: "EN 671-2 Yangın Dolabı Sac Kapaklı",
        image: "/products/yangin-dolaplari-ve-hidrantlari/ydh-100-506x304.webp",
      },
      {
        title: "EN 671-1 Yangın Dolabı Tüp Bölmeli Cam Kapaklı",
        image: "/products/yangin-dolaplari-ve-hidrantlari/ydh-104-506x304.webp",
      },
      {
        title: "EN 671-2 Arazi Tipi Yangın Dolabı",
        image: "/products/yangin-dolaplari-ve-hidrantlari/ydh-105-506x304.webp",
      },
      {
        title: "EN 671-2 Arazi Tipi Çift Makaralı Yangın Dolabı",
        image: "/products/yangin-dolaplari-ve-hidrantlari/ydh-106-506x304.webp",
      },
      {
        title: "Hidrant Ökçe",
        image: "/products/yangin-dolaplari-ve-hidrantlari/ydh-200-506x304.webp",
      },
      {
        title: "Yeraltı Yangın Hidrantı",
        image: "/products/yangin-dolaplari-ve-hidrantlari/ydh-201-506x304.webp",
      },
      {
        title: "Yerüstü Yangın Hidrantı",
        image: "/products/yangin-dolaplari-ve-hidrantlari/ydh-202-506x304.webp",
      },
      {
        title: "Yangın Pompası Dizel",
        image: "/products/yangin-dolaplari-ve-hidrantlari/ydh-400-506x304.webp",
      },
      {
        title: "Yangın Pompa Grubu – Elektrik / Dizel / Jokey Pompa",
        image: "/products/yangin-dolaplari-ve-hidrantlari/ydh-401-506x304.webp",
      },
    ],
  },
  {
    title: "Yangın Algılama ve İhbar Sistemleri",
    href: "/yangin-algilama-ihbar-sistemleri/",
    image: "/services/fm-200-yangin-sondurme.webp",
    categoryImage: "/optimized/categories/yangin-algilama.webp",
    items: [
      {
        title: "S1 Motorlu Siren",
        image: "/products/yangin-algilama-ihbar-sistemleri/eys-100-506x304.webp",
      },
      {
        title: "S2 Motorlu Siren",
        image: "/products/yangin-algilama-ihbar-sistemleri/eys-101-506x304.webp",
      },
      {
        title: "S3 Motorlu Siren",
        image: "/products/yangin-algilama-ihbar-sistemleri/eys-102-506x304.webp",
      },
      {
        title: "S4 Motorlu Siren",
        image: "/products/yangin-algilama-ihbar-sistemleri/eys-103-506x304.webp",
      },
      {
        title: "S5 Motorlu Siren",
        image: "/products/yangin-algilama-ihbar-sistemleri/eys-104-506x304.webp",
      },
      {
        title: "Kombine (Isı+Duman) Dedektör",
        image: "/products/yangin-algilama-ihbar-sistemleri/yas-100-506x304.webp",
      },
      {
        title: "Duman Dedektörü",
        image: "/products/yangin-algilama-ihbar-sistemleri/yas-101-506x304.webp",
      },
      {
        title: "Adresli Alev Dedektörü",
        image: "/products/yangin-algilama-ihbar-sistemleri/yas-102-506x304.webp",
      },
      {
        title: "Pilli Duman Dedektörü",
        image: "/products/yangin-algilama-ihbar-sistemleri/yas-103-506x304.webp",
      },
      {
        title: "EX Ex-proof Isı Dedektörü",
        image: "/products/yangin-algilama-ihbar-sistemleri/yas-106-506x304.webp",
      },
      {
        title: "Beam (Işın) Dedektörü",
        image: "/products/yangin-algilama-ihbar-sistemleri/yas-104-506x304.webp",
      },
      {
        title: "Gaz Dedektörü",
        image: "/products/yangin-algilama-ihbar-sistemleri/yas-105-506x304.webp",
      },
      {
        title: "EX Ex-proof Kombine (Isı + Duman) Dedektörü",
        image: "/products/yangin-algilama-ihbar-sistemleri/yas-107-506x304.webp",
      },
      {
        title: "Adresli Duman Dedektörü",
        image: "/products/yangin-algilama-ihbar-sistemleri/yas-108-506x304.webp",
      },
      {
        title: "Alev Dedektörü",
        image: "/products/yangin-algilama-ihbar-sistemleri/yas-109-506x304.webp",
      },
      {
        title: "Adresli Beam Işın Dedektörü",
        image: "/products/yangin-algilama-ihbar-sistemleri/yas-110-506x304.webp",
      },
      {
        title: "Yangın Kontrol Panelleri",
        image: "/products/yangin-algilama-ihbar-sistemleri/yas-112-506x304.webp",
      },
      {
        title: "Konvansiyonel Gaz Dedektörleri",
        image:
          "/products/yangin-algilama-ihbar-sistemleri/yas-114-1000x600.gif",
      },
      {
        title: "Konvansiyonel Işın (Beam) Dedektörü",
        image: "/products/yangin-algilama-ihbar-sistemleri/yas-115-506x304.webp",
      },
      {
        title: "Konvansiyonel Yangın Algılama Paneli",
        image: "/products/yangin-algilama-ihbar-sistemleri/yas-117-506x304.webp",
      },
    ],
  },
  {
    title: "İtfaiye Malzemeleri",
    href: "/itfaiye-malzemeleri/",
    image: "/services/itfaiye-2.webp",
    categoryImage: "/optimized/categories/itfaiye-malzemeleri.webp",
    items: [
      {
        title: "Temiz Hava Soluma Cihazı Doldurma",
        image: "/products/itfaiye-malzemeleri/ak-156-506x304.webp",
      },
      {
        title: "Kamalans",
        image: "/products/itfaiye-malzemeleri/m-200-506x304.webp",
      },
      {
        title: "Köpük Melanjörü",
        image: "/products/itfaiye-malzemeleri/m-400-506x304.webp",
      },
      {
        title: "Ağır Köpük Lansı",
        image: "/products/itfaiye-malzemeleri/m-401-506x304.webp",
      },
      {
        title: "Ayarlı Köpük Lansı",
        image: "/products/itfaiye-malzemeleri/m-402-506x304.webp",
      },
      {
        title: "Bina Dış Bağlantı",
        image: "/products/itfaiye-malzemeleri/m-403-506x304.webp",
      },
      {
        title: "Dişi Dişli Rakor",
        image: "/products/itfaiye-malzemeleri/m-404-506x304.webp",
      },
      {
        title: "Dolap Rakoru",
        image: "/products/itfaiye-malzemeleri/m-405-506x304.webp",
      },
      {
        title: "Düz Lans",
        image: "/products/itfaiye-malzemeleri/m-406-506x304.webp",
      },
      {
        title: "Erkek Dişli Rakor",
        image: "/products/itfaiye-malzemeleri/m-407-506x304.webp",
      },
      {
        title: "Euro Nozul",
        image: "/products/itfaiye-malzemeleri/m-408-506x304.webp",
      },
      {
        title: "Hortum Rakoru",
        image: "/products/itfaiye-malzemeleri/m-409-506x304.webp",
      },
      {
        title: "Hortum Yama Aparatı",
        image: "/products/itfaiye-malzemeleri/m-410-506x304.webp",
      },
      {
        title: "Hortum Yıkama Aparatı",
        image: "/products/itfaiye-malzemeleri/m-411-506x304.webp",
      },
      {
        title: "Hs Nozul",
        image: "/products/itfaiye-malzemeleri/m-412-506x304.webp",
      },
      {
        title: "İkili Dağıtıcı Küresel Vanalı",
        image: "/products/itfaiye-malzemeleri/m-413-506x304.webp",
      },
      {
        title: "Kumandalı Lans",
        image: "/products/itfaiye-malzemeleri/m-414-506x304.webp",
      },
      {
        title: "Küresel Vana",
        image: "/products/itfaiye-malzemeleri/m-415-506x304.webp",
      },
      {
        title: "Monitör hh1260",
        image: "/products/itfaiye-malzemeleri/m-416-506x304.webp",
      },
      {
        title: "Rakor Kapağı",
        image: "/products/itfaiye-malzemeleri/m-417-506x304.webp",
      },
      {
        title: "Redüksiyon",
        image: "/products/itfaiye-malzemeleri/m-418-506x304.webp",
      },
      {
        title: "Siyam İkizi",
        image: "/products/itfaiye-malzemeleri/m-419-506x304.webp",
      },
      {
        title: "Su Kalkanı",
        image: "/products/itfaiye-malzemeleri/m-420-506x304.webp",
      },
      {
        title: "Su Tabancası Yüksek Basınçlı",
        image: "/products/itfaiye-malzemeleri/m-421-506x304.webp",
      },
      {
        title: "Süzgeç",
        image: "/products/itfaiye-malzemeleri/m-422-506x304.webp",
      },
      {
        title: "Tabanca Nozul",
        image: "/products/itfaiye-malzemeleri/m-423-506x304.webp",
      },
      {
        title: "Tel Sarma Aparatı",
        image: "/products/itfaiye-malzemeleri/m-424-506x304.webp",
      },
      {
        title: "Turbo Nozul",
        image: "/products/itfaiye-malzemeleri/m-425-506x304.webp",
      },
      {
        title: "Turbo Nozul 2000",
        image: "/products/itfaiye-malzemeleri/m-426-506x304.webp",
      },
      {
        title: "Turbo Nozul TSPR-E",
        image: "/products/itfaiye-malzemeleri/m-427-506x304.webp",
      },
      {
        title: "Üçlü Dağıtıcı Küresel Vanalı",
        image: "/products/itfaiye-malzemeleri/m-428-506x304.webp",
      },
      {
        title: "Üçlü Dağıtıcı Sıkma Vanalı",
        image: "/products/itfaiye-malzemeleri/m-429-506x304.webp",
      },
      {
        title: "Yangın Vanası",
        image: "/products/itfaiye-malzemeleri/m-430-506x304.webp",
      },
      {
        title: "Yangın Köpüğü",
        image: "/products/itfaiye-malzemeleri/m-431-506x304.webp",
      },
      {
        title: "Antiflash Başlık",
        image: "/products/itfaiye-malzemeleri/m-100-506x304.webp",
      },
      {
        title: "İtfaiyeci Elbisesi Fyrpro 440",
        image: "/products/itfaiye-malzemeleri/m-101-506x304.webp",
      },
      {
        title: "İtfaiyeci Elbisesi Frypro 442",
        image: "/products/itfaiye-malzemeleri/m-102-506x304.webp",
      },
      {
        title: "İtfaiyeci Elbisesi Frypro 453",
        image: "/products/itfaiye-malzemeleri/m-103-506x304.webp",
      },
      {
        title: "İtfaiyeci Bareti",
        image: "/products/itfaiye-malzemeleri/m-104-506x304.webp",
      },
      {
        title: "İtfaiyeci Çizmesi",
        image: "/products/itfaiye-malzemeleri/m-105-506x304.webp",
      },
      {
        title: "İtfaiyeci Eldiveni Deri",
        image: "/products/itfaiye-malzemeleri/m-106-506x304.webp",
      },
      {
        title: "İtfaiyeci Yağmurluğu",
        image: "/products/itfaiye-malzemeleri/m-108-506x304.webp",
      },
      {
        title: "Alüminize İtfaiyeci Elbisesi Fryal 5100",
        image: "/products/itfaiye-malzemeleri/m-109-506x304.webp",
      },
      {
        title: "Alüminize Elbise",
        image: "/products/itfaiye-malzemeleri/m-110-506x304.webp",
      },
      {
        title: "Drager 6300 Tam Yüz Maske",
        image: "/products/itfaiye-malzemeleri/m-111-506x304.webp",
      },
      {
        title: "Drager 7000 Tam Yüz Maske",
        image: "/products/itfaiye-malzemeleri/m-112-506x304.webp",
      },
      {
        title: "Drager Filtre",
        image: "/products/itfaiye-malzemeleri/m-113-506x304.webp",
      },
      {
        title: "Drager Solunum Seti",
        image: "/products/itfaiye-malzemeleri/m-114-506x304.webp",
      },
      {
        title: "Drager Yarım Yüz Maske Filtreleri",
        image: "/products/itfaiye-malzemeleri/m-115-506x304.webp",
      },
      {
        title: "Drager Yarım Yüz Maske",
        image: "/products/itfaiye-malzemeleri/m-116-506x304.webp",
      },
      {
        title: "Gaz Ölçüm Cihazı",
        image: "/products/itfaiye-malzemeleri/m-117-506x304.webp",
      },
      {
        title: "İtfaiyeci Eldiveni",
        image: "/products/itfaiye-malzemeleri/m-118-506x304.webp",
      },
      {
        title: "İtfaiyeci Çizmesi",
        image: "/products/itfaiye-malzemeleri/m-120-506x304.webp",
      },
      {
        title: "İtfaiyeci Elbisesi",
        image: "/products/itfaiye-malzemeleri/m-121-506x304.webp",
      },
      {
        title: "İtfaiyeci Yağmurluğu",
        image: "/products/itfaiye-malzemeleri/m-122-506x304.webp",
      },
      {
        title: "Kompozit Solunum Seti",
        image: "/products/itfaiye-malzemeleri/m-123-506x304.webp",
      },
      {
        title: "Koruyucu Örgü Başlık",
        image: "/products/itfaiye-malzemeleri/m-124-506x304.webp",
      },
      {
        title: "Megafon",
        image: "/products/itfaiye-malzemeleri/m-125-506x304.webp",
      },
      {
        title: "Nomex Elbise",
        image: "/products/itfaiye-malzemeleri/m-126-506x304.webp",
      },
    ],
  },
  {
    title: "Arama ve Kurtarma Malzemeleri",
    href: "/arama-kurtarma-malzemeleri/",
    image: "/itfaiye.webp",
    categoryImage: "/optimized/categories/arama-kurtarma.webp",
    items: [
      {
        title: "Elektrikli Kırıcı ve Delici 11kg",
        image: "/products/arama-kurtarma-malzemeleri/ak-100-506x304.webp",
      },
      {
        title: "Elektrikli Kırıcı ve Kesici 25kg",
        image: "/products/arama-kurtarma-malzemeleri/ak-101-506x304.webp",
      },
      {
        title: "Akü Tahrikli Hidrolik Demir Kesme",
        image: "/products/arama-kurtarma-malzemeleri/ak-102-506x304.webp",
      },
      {
        title: "Alet Takımı",
        image: "/products/arama-kurtarma-malzemeleri/ak-103-506x304.webp",
      },
      {
        title: "Alüminyum Asma Merdiven Tek Sütun",
        image: "/products/arama-kurtarma-malzemeleri/ak-104-506x304.webp",
      },
      {
        title: "Atlama Yatağı",
        image: "/products/arama-kurtarma-malzemeleri/ak-107-506x304.webp",
      },
      {
        title: "Benzin Motorlu Ağaç Testeresi",
        image: "/products/arama-kurtarma-malzemeleri/ak-109-506x304.webp",
      },
      {
        title: "Benzin Motorlu Demir ve Beton Kesme Testeresi",
        image: "/products/arama-kurtarma-malzemeleri/ak-110-506x304.webp",
      },
      {
        title: "Elektrikli Avuç Taşlama El Aleti",
        image: "/products/arama-kurtarma-malzemeleri/ak-111-506x304.webp",
      },
      {
        title: "Çok Amaçlı Kurtarma Seti",
        image: "/products/arama-kurtarma-malzemeleri/ak-114-506x304.webp",
      },
      {
        title: "Dalgıç Pompa",
        image: "/products/arama-kurtarma-malzemeleri/ak-116-506x304.webp",
      },
      {
        title: "Destek Ayakları Takımı",
        image: "/products/arama-kurtarma-malzemeleri/ak-117-506x304.webp",
      },
      {
        title: "Elektrikli Motorlu Ağaç Testeresi",
        image: "/products/arama-kurtarma-malzemeleri/ak-119-506x304.webp",
      },
      {
        title: "Karot – Delik Delme Aleti",
        image: "/products/arama-kurtarma-malzemeleri/ak-120-506x304.webp",
      },
      {
        title: "Fagum İtfaiyeci Çizmesi",
        image: "/products/arama-kurtarma-malzemeleri/m-120-506x304.webp",
      },
      {
        title: "Sesli Görüntülü Fiber Optik Kablolu Canlı Arama Dedektörü",
        image: "/products/arama-kurtarma-malzemeleri/ak-122-506x304.webp",
      },
      {
        title: "Hava Yastığı Şişirme Kompresörü",
        image: "/products/arama-kurtarma-malzemeleri/ak-125-506x304.webp",
      },
      {
        title: "İtfaiyeci Miğferi",
        image: "/products/arama-kurtarma-malzemeleri/ak-126-506x304.webp",
      },
      {
        title: "İtfaiyeci Elbisesi",
        image: "/products/arama-kurtarma-malzemeleri/m-102-506x304.webp",
      },
      {
        title: "Kombi Testere",
        image: "/products/arama-kurtarma-malzemeleri/ak-129-506x304.webp",
      },
      {
        title: "Kriko 10 Ton",
        image: "/products/arama-kurtarma-malzemeleri/ak-130-506x304.webp",
      },
      {
        title: "Hidrolik Kesme-Germe Takımı",
        image: "/products/arama-kurtarma-malzemeleri/ak-132-506x304.webp",
      },
      {
        title: "Hidrolik Kombine Kesme/Açma Manüel Aleti",
        image: "/products/arama-kurtarma-malzemeleri/ak-140-506x304.webp",
      },
      {
        title: "Tilki Kuyruk Testere",
        image: "/products/arama-kurtarma-malzemeleri/ak-141-506x304.webp",
      },
      {
        title: "Hidrolik Mini Kombine Kesme Açma Aleti",
        image: "/products/arama-kurtarma-malzemeleri/ak-142-506x304.webp",
      },
      {
        title: "44 Parçalı Mekanik Destek Tahkimatı",
        image: "/products/arama-kurtarma-malzemeleri/ak-143-506x304.webp",
      },
      {
        title: "Mekanik Destek",
        image: "/products/arama-kurtarma-malzemeleri/ak-144-506x304.webp",
      },
      {
        title: "Mekanik Kurtarma; Zorla Girme, Kırma Takımı",
        image: "/products/arama-kurtarma-malzemeleri/ak-145-506x304.webp",
      },
      {
        title: "Portatif Oksi-Asetilen Kesme Kaynak Seti",
        image: "/products/arama-kurtarma-malzemeleri/ak-146-506x304.webp",
      },
      {
        title: "Havalı Delme, Kırma, Kesme Aleti",
        image: "/products/arama-kurtarma-malzemeleri/ak-147-506x304.webp",
      },
      {
        title: "Üçayaklı (Tripod) Kurtarma Takımı",
        image: "/products/arama-kurtarma-malzemeleri/ak-148-506x304.webp",
      },
      {
        title: "TV Görüntülü ve Sesli Canlı Arama Dedektörü",
        image:
          "/products/arama-kurtarma-malzemeleri/ak-150-1000x600-1-506x304.webp",
      },
      {
        title: "Canlı Dedektörü, Dinleme Cihazı",
        image: "/products/arama-kurtarma-malzemeleri/ak-151-506x304.webp",
      },
      {
        title: "Teleskopik Merdiven",
        image: "/products/arama-kurtarma-malzemeleri/ak-152-506x304.webp",
      },
      {
        title: "Termal Kamera",
        image: "/products/arama-kurtarma-malzemeleri/ak-157-506x304.webp",
      },
      {
        title: "Kaldırma Yastıkları",
        image: "/products/arama-kurtarma-malzemeleri/ak-163-506x304.webp",
      },
      {
        title: "Ağaç Basamaklı İp Merdiven",
        image: "/products/arama-kurtarma-malzemeleri/ak-164-506x304.webp",
      },
      {
        title: "Benzinli Jeneratör 5kVA",
        image: "/products/arama-kurtarma-malzemeleri/ak-164-506x304.webp",
      },
      {
        title: "Benzinli Jeneratör 8kVA",
        image: "/products/arama-kurtarma-malzemeleri/ak-164-506x304.webp",
      },
      {
        title: "Yüksek Basınç Solunum Havası Kompresörü",
        image: "/products/arama-kurtarma-malzemeleri/ak-165-506x304.webp",
      },
      {
        title: "Hava Emiş Ünitesi",
        image: "/products/arama-kurtarma-malzemeleri/ak-168-506x304.webp",
      },
      {
        title: "Megafon",
        image: "/products/arama-kurtarma-malzemeleri/m-125-506x304.webp",
      },
    ],
  },
  {
    title: "Yangın Kapısı ve Merdivenleri",
    href: "/yangin-kapisi-ve-merdivenleri/",
    image: "/categories/yangin-merdivenleri.webp",
    categoryImage: "/optimized/categories/yangin-merdivenleri.webp",
    items: [
      {
        title: "Yangın Kapısı Tek",
        image: "/products/yangin-kapisi-ve-merdivenleri/ykm-100-506x304.webp",
      },
      {
        title: "Yangın Kapısı Çift",
        image: "/products/yangin-kapisi-ve-merdivenleri/ykm-101-506x304.webp",
      },
      {
        title: "Yangın Kapısı Tek Kanatlı",
        image: "/products/yangin-kapisi-ve-merdivenleri/ykm-106-506x304.webp",
      },
      {
        title: "Yangın Kapısı Tek Kanatlı",
        image: "/products/yangin-kapisi-ve-merdivenleri/ykm-107-506x304.webp",
      },
      {
        title: "Yangın Kapısı Çift Kanatlı",
        image: "/products/yangin-kapisi-ve-merdivenleri/ykm-104-506x304.webp",
      },
      {
        title: "Yangın Kapısı Çift Kanatlı",
        image: "/products/yangin-kapisi-ve-merdivenleri/ykm-105-506x304.webp",
      },
      {
        title: "Yangın Merdiveni",
        image: "/products/yangin-kapisi-ve-merdivenleri/ykm-102-506x304.webp",
      },
      {
        title: "Z Tipi Yangın Merdiveni",
        image: "/products/yangin-kapisi-ve-merdivenleri/ykm-103-506x304.webp",
      },
    ],
  },
  {
    title: "Acil Aydınlatma ve Yönlendirme",
    href: "/acil-aydinlatma-yonlendirme/",
    image: "/services/acil-aydınlatma.webp",
    categoryImage: "/optimized/categories/acil-aydinlatma.webp",
    items: [
      {
        title: "Acil Çıkış",
        image: "/products/acil-aydinlatma-yonlendirme/aay-100-506x304.webp",
      },
      {
        title: "Acil Aydınlatma",
        image: "/products/acil-aydinlatma-yonlendirme/eys-300-506x304.webp",
      },
      {
        title: "Acil Yönlendirme",
        image: "/products/acil-aydinlatma-yonlendirme/eys-301-506x304.webp",
      },
      {
        title: "Acil Yönlendirme",
        image: "/products/acil-aydinlatma-yonlendirme/eys-305-506x304.webp",
      },
    ],
  },
  {
    title: "İş Güvenliği",
    href: "/is-guvenligi/",
    image: "/services/is-guvenlik.webp",
    categoryImage: "/optimized/categories/is-guvenligi.webp",
    items: [
      {
        title: "Kişisel Güvenlik Levhaları 1043-1064",
        image: "/products/is-guvenligi/1043-1064-506x304.webp",
      },
      {
        title: "Kişisel Güvenlik Levhaları 1001-1042",
        image: "/products/is-guvenligi/g-100-506x304.webp",
      },
      {
        title: "Kişisel Güvenlik Levhaları 1065-1123",
        image: "/products/is-guvenligi/g-102-506x304.webp",
      },
      {
        title: "Makina – İmalat Levhaları 2001-2042",
        image: "/products/is-guvenligi/g-103-506x304.webp",
      },
      {
        title: "Makina – İmalat Levhaları 2083-2122",
        image: "/products/is-guvenligi/g-105-506x304.webp",
      },
      {
        title: "Makina – İmalat Levhaları 2123-2142",
        image: "/products/is-guvenligi/g-106-506x304.webp",
      },
      {
        title: "Arıza Tamirat Bakım Onarım Levhaları 3001-3042",
        image: "/products/is-guvenligi/g-107-506x304.webp",
      },
      {
        title: "Arıza Tamirat Bakım Onarım Levhaları 3043-3082",
        image: "/products/is-guvenligi/g-108-506x304.webp",
      },
      {
        title: "Arıza Tamirat Bakım Onarım Levhaları 3083-3113",
        image: "/products/is-guvenligi/g-109-506x304.webp",
      },
      {
        title: "Boy Duşu 23500",
        image: "/products/is-guvenligi/g-200-506x304.webp",
      },
      {
        title: "Boy Duşu 25500",
        image: "/products/is-guvenligi/g-201-506x304.webp",
      },
      {
        title: "Boy Duşu 21500",
        image: "/products/is-guvenligi/g-202-506x304.webp",
      },
      {
        title: "Boy Duşu 28500",
        image: "/products/is-guvenligi/g-203-506x304.webp",
      },
      {
        title: "Boy Duşu 22500",
        image: "/products/is-guvenligi/g-204-506x304.webp",
      },
      {
        title: "Boy Duşu 24500",
        image: "/products/is-guvenligi/g-205-506x304.webp",
      },
      {
        title: "Boy Duşu 24520",
        image: "/products/is-guvenligi/g-206-506x304.webp",
      },
      {
        title: "Göz Duşu 800",
        image: "/products/is-guvenligi/g-207-506x304.webp",
      },
      {
        title: "Göz Duşu 13500",
        image: "/products/is-guvenligi/g-208-506x304.webp",
      },
      {
        title: "Göz Duşu 15500",
        image: "/products/is-guvenligi/g-209-506x304.webp",
      },
      {
        title: "Göz Yıkama Çeşmesi 14500",
        image: "/products/is-guvenligi/g-210-506x304.webp",
      },
      {
        title: "Göz Yıkama Çeşmesi 700",
        image: "/products/is-guvenligi/g-211-506x304.webp",
      },
      {
        title: "Göz Yıkama Çeşmesi 500",
        image: "/products/is-guvenligi/g-212-506x304.webp",
      },
      {
        title: "Göz Yıkama Çeşmesi 12525",
        image: "/products/is-guvenligi/g-213-506x304.webp",
      },
      {
        title: "A Düzey KBRN Giysisi",
        image: "/products/is-guvenligi/g-300-506x304.webp",
      },
      {
        title: "B Düzey KBRN Giysisi",
        image: "/products/is-guvenligi/g-300-506x304.webp",
      },
      {
        title: "Aktif Karbon Katmanlı KBRN Giysi",
        image: "/products/is-guvenligi/g-302-506x304.webp",
      },
      {
        title: "Radyasyondan Koruyucu Giysi",
        image: "/products/is-guvenligi/g-303-506x304.webp",
      },
      {
        title: "C Tipi Koruyucu Giysi – Sınırlı Kullanımlık",
        image: "/products/is-guvenligi/g-304-506x304.webp",
      },
      {
        title: "Koruyucu Giysi – Tek Kullanımlık",
        image: "/products/is-guvenligi/g-305-506x304.webp",
      },
      {
        title: "Koruyucu Eldiven",
        image: "/products/is-guvenligi/g-306-506x304.webp",
      },
      {
        title: "KBRN Bot Kılıfı",
        image: "/products/is-guvenligi/g-307-506x304.webp",
      },
      {
        title: "KBRN Koruyucu Bot",
        image: "/products/is-guvenligi/g-308-506x304.webp",
      },
      {
        title: "KBRN Elbisesi Test Kiti",
        image: "/products/is-guvenligi/g-309-506x304.webp",
      },
      {
        title: "KBRN Tam Yüz Gaz Maskesi",
        image: "/products/is-guvenligi/g-310-506x304.webp",
      },
      {
        title: "Tam Yüz Gaz Maskesi",
        image: "/products/is-guvenligi/g-311-506x304.webp",
      },
      {
        title: "KBRN Filtresi",
        image: "/products/is-guvenligi/g-312-506x304.webp",
      },
      {
        title: "KBRN Filtresi Kombine",
        image: "/products/is-guvenligi/g-313-506x304.webp",
      },
      {
        title: "Motorlu KBRN Hava Besleme Ünitesi",
        image: "/products/is-guvenligi/g-314-506x304.webp",
      },
      {
        title: "Çelik Tüplü Temiz Hava Solunum Seti",
        image: "/products/is-guvenligi/m-123-506x304.webp",
      },
      {
        title: "Karbon Kompozit Tüplü Temiz Hava Solunum Seti",
        image: "/products/is-guvenligi/m-123-506x304.webp",
      },
      {
        title: "Kimyasal Alan El Dedektörü",
        image: "/products/is-guvenligi/g-318-506x304.webp",
      },
      {
        title: "Yangın Teçhizat Dolabı",
        image: "/products/is-guvenligi/ig-500-506x304.webp",
      },
      {
        title: "Dozimetre Radyakmetre, Inspector EXP",
        image: "/products/is-guvenligi/g-319-506x304.webp",
      },
      {
        title: "Kimyasal Alan Kağıt Dedektörü",
        image: "/products/is-guvenligi/g-321-506x304.webp",
      },
      {
        title: "Dozimetre Kalem Tip (y,x)",
        image: "/products/is-guvenligi/g-322-506x304.webp",
      },
      {
        title: "Dekontaminasyon Sırt Ünitesi",
        image: "/products/is-guvenligi/g-323-506x304.webp",
      },
    ],
  },
];
