# Kelime

İngilizce kelime pratiği için küçük bir web uygulaması. Kartları yukarı
kaydırırsın: her kartta kelimenin okunuşu, Türkçe karşılığı ve bir örnek cümle
çevirisiyle birlikte gelir. Beş kartta bir hızlı soru sorulur.

**Canlı:** https://kralrichard.github.io/kelime-offline/

## İki tür kart

- **Seçme kartlar (284)** — elle hazırlandı. Okunuş, Türkçe karşılık ve
  çevirisiyle birlikte bir örnek cümle içerir. A1'den B2'ye dört seviye.
- **Kelime bankası (20.000)** — konuşma dilindeki kullanım sıklığına göre
  sıralı. Kelime, türü ve Türkçe karşılıkları var; örnek cümle yok.

Her kartta kelimeyi **gerçek insanlardan** dinlemek için üç bağlantı bulunur:
[YouGlish](https://youglish.com) (YouTube videolarında o kelimenin geçtiği
anlar), [Forvo](https://forvo.com) (ana dili İngilizce olanların kayıtları) ve
[PlayPhrase](https://playphrase.me) (film sahneleri). Bu adresler kelimenin
kendisinden üretilir, bu yüzden 20.000 kelimenin tamamı için ek veri
tutulmadan çalışır.

## Neden hızlı

Uygulama açılırken hiçbir veri isteği yapmaz. Kelimeler dosyada gömülü gelir,
ilerlemen `localStorage`'da tutulur, seslendirme tarayıcının kendi konuşma
sentezleyicisiyle yapılır. Kart geçişlerinde bekleme yoktur ve uygulama uçak
modunda da çalışır.

Tek istisna `bank.js`: 834 KB olduğu için açılışta değil, ilk kez bir sıklık
bölümüne geçtiğinde indirilir. Sonrasında tarayıcı önbelleğinden gelir.

Çerçeve, paket ve derleme adımı yok — dört dosya:

| Dosya | Ne yapar |
|---|---|
| `index.html` | Sayfa iskeleti ve stiller |
| `data.js` | Seçme kartlar (elle yazıldı) |
| `bank.js` | 20.000 kelimelik banka (üretildi) |
| `app.js` | Deste, kaydırma, seslendirme, puan ve sorular |

## Telefonda kullanma

Adresi Chrome (Android) veya Safari (iPhone) ile aç. Tarayıcı menüsünden
**"Ana ekrana ekle"** dersen tam ekran, uygulama gibi açılır.

Seslendirme cihazın kendi seslerini kullanır; İngilizce ses yüklü değilse
kartlar yine çalışır, yalnızca okuma sesi çıkmaz.

## Kelime ekleme

`data.js` içinde her seviye boru işaretiyle ayrılmış satırlardan oluşur:

```
kelime|okunuş|Türkçe anlamlar|İngilizce örnek cümle|Türkçe çevirisi
```

İlgili seviyenin listesine bir satır eklemen yeterli — başka hiçbir yeri
değiştirmen gerekmez. Yeni bir seviye açmak için `LEVELS` nesnesine
`label` ve `words` alanları olan bir giriş ekle.

> **Değişiklikten sonra:** `index.html` içindeki script etiketlerinde ve
> `app.js` içindeki `bank.js?v=` satırında geçen sürüm sayısını artır.
> Tarayıcılar `.js` dosyalarını önbelleğe aldığı için, bu sayı değişmezse
> kullanıcılarda eski sürüm çalışmaya devam eder.

## Kelime bankası nereden geldi

`bank.js` iki açık kaynaktan üretildi:

- İngilizce–Türkçe eşleşmeler: [firatkaya1/dictionary](https://github.com/firatkaya1/dictionary)
- Kullanım sıklığı sıralaması: [hermitdave/FrequencyWords](https://github.com/hermitdave/FrequencyWords)
  (OpenSubtitles altyazılarından, yani konuşma dili sıklığı)

Sıklık listesindeki kelimeler sırayla gezilip sözlükte karşılığı olanlar
alındı. Sözlüğün "Common Usage" kategorisi varsa o tercih edildi — günlük
anlam, edebî ya da teknik karşılıktan önce gelsin diye.

Artikeller, zamirler ve edatlar (`the`, `of`, `a`, `it`…) bilerek dışarıda
bırakıldı: iki dilli sözlükler bunları kötü çeviriyor (`of` → "karşı") ve kart
olarak bir değer taşımıyorlar.

## Klavye

| Tuş | Ne yapar |
|---|---|
| ↓ / boşluk | Sonraki kelime |
| ↑ | Önceki kelime |
| S | Kelimeyi seslendir |
