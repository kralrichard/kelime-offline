# Kelime

İngilizce kelime pratiği için küçük bir web uygulaması. Kartları yukarı
kaydırırsın: her kartta kelimenin okunuşu, Türkçe karşılığı ve bir örnek cümle
çevirisiyle birlikte gelir. Beş kartta bir hızlı soru sorulur.

**Canlı:** https://kralrichard.github.io/kelime-offline/

## Neden hızlı

Uygulama hiçbir ağ isteği yapmaz. Kelimeler `data.js` içinde gömülü gelir,
ilerlemen tarayıcının `localStorage`'ında tutulur, seslendirme tarayıcının
kendi konuşma sentezleyicisiyle yapılır. Bu yüzden kart geçişlerinde bekleme
yoktur ve uygulama uçak modunda da çalışır.

Çerçeve, paket ve derleme adımı yok — üç dosya:

| Dosya | Ne yapar |
|---|---|
| `index.html` | Sayfa iskeleti ve stiller |
| `data.js` | Kelime verisi |
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

## Klavye

| Tuş | Ne yapar |
|---|---|
| ↓ / boşluk | Sonraki kelime |
| ↑ | Önceki kelime |
| S | Kelimeyi seslendir |
