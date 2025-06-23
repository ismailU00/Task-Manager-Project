Görev Yöneticisi - Web Tabanlı Görev Takip Uygulaması
Görev Yöneticisi, kullanıcıların günlük görevlerini düzenli ve etkili bir şekilde yönetebilmeleri için tasarlanmış modern ve sezgisel bir görev takip sistemidir. Minimalist tasarımı, kullanıcı dostu arayüzü ve mobil uyumluluğu ile hem bireysel hem de profesyonel kullanım için uygundur.

🔧 Özellikler
Görev Ekleme / Silme / Güncelleme
Basit bir arayüz üzerinden yeni görevler oluşturabilir, mevcut görevleri düzenleyebilir veya silebilirsiniz.

Kategori Yönetimi
Görevlerinizi İş, Kişisel, Alışveriş gibi kategorilere ayırarak organize edebilirsiniz.

Filtreleme ve Arama
Görevlerinizi tamamlanma durumuna göre filtreleyebilir veya arama kutusu ile belirli görevleri hızlıca bulabilirsiniz.

Takvim Görünümü (Placeholder)
Gelecek sürümler için entegre edilebilir bir takvim planlaması altyapısı düşünülmüştür.

Görev İstatistikleri
Görevlerinizin sayısal durumu (tamamlanan, bekleyen vs.) özetlenir.

Hızlı Notlar
Kısa notlar alabileceğiniz bir not alanı sayesinde görev dışı içerikleri de kaydedebilirsiniz.

Karanlık Mod
Kullanıcı tercihine göre açık/karanlık tema arasında geçiş yapılabilir.

Mobil Uyumlu
Tüm sayfa ve bileşenler responsive olarak tasarlanmıştır, farklı ekran boyutlarında sorunsuz çalışır.

🛠️ Kullanılan Teknolojiler
HTML5

Tailwind CSS

Vanilla JavaScript

Remixicon (ikonlar için)

Yerel Depolama (LocalStorage) kullanımıyla kalıcı veri yönetimi

📁 Proje Yapısı (Basitçe)
vbnet
Kopyala
Düzenle
client/
│
├── src/
│   ├── assets/         → Stil dosyaları (Tailwind, custom CSS)
│   └── js/             → JS modülleri (Auth, TaskManager, UI yönetimi vb.)
│
└── index.html          → Ana uygulama arayüzü
📦 Kurulum ve Çalıştırma
Projeyi klonlayın:

bash
Kopyala
Düzenle
git clone https://github.com/kullaniciAdi/gorev-yoneticisi.git
HTML dosyasını doğrudan bir tarayıcıda açarak uygulamayı kullanabilirsiniz.

Not: Bu proje tamamen istemci taraflı çalışmaktadır, bir backend içermez.

📌 Geliştirme Notları
Proje ilerleyen sürümlerde veritabanı bağlantısı, gelişmiş takvim entegrasyonu, email bildirimi ve kullanıcı hesap yönetimi gibi özelliklerle genişletilebilir.

Mevcut sürüm localStorage kullanarak verileri tarayıcıda tutar.

