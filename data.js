/* Kelime verisi — tamamen çevrimdışı, hiçbir API çağrısı yok.
 *
 * Biçim (boru işaretiyle ayrılmış, yer kaplamasın diye):
 *   kelime | okunuş (IPA) | Türkçe anlamlar | İngilizce örnek | Türkçe çeviri
 *
 * Yeni kelime eklemek için ilgili seviyenin listesine bir satır eklemen yeterli;
 * uygulama tarafında başka hiçbir şey değiştirmen gerekmez.
 */

const LEVELS = {
  a1: {
    label: "A1 · Temel",
    words: `
man|mæn|adam, erkek|The man is waiting outside.|Adam dışarıda bekliyor.
woman|ˈwʊmən|kadın|The woman works at a hospital.|Kadın bir hastanede çalışıyor.
child|tʃaɪld|çocuk|The child is playing in the garden.|Çocuk bahçede oynuyor.
friend|frend|arkadaş, dost|She is my best friend.|O benim en yakın arkadaşım.
family|ˈfæməli|aile|My family lives in Izmir.|Ailem İzmir'de yaşıyor.
mother|ˈmʌðər|anne|My mother makes great soup.|Annem harika çorba yapar.
father|ˈfɑːðər|baba|His father is a teacher.|Babası öğretmen.
sister|ˈsɪstər|kız kardeş, abla|My sister is younger than me.|Kız kardeşim benden küçük.
brother|ˈbrʌðər|erkek kardeş, abi|I have two brothers.|İki erkek kardeşim var.
name|neɪm|isim, ad|What is your name?|Adın ne?
house|haʊs|ev|They bought a small house.|Küçük bir ev aldılar.
home|hoʊm|ev, yuva|I want to go home.|Eve gitmek istiyorum.
room|ruːm|oda|My room is very quiet.|Odam çok sessiz.
door|dɔːr|kapı|Please close the door.|Lütfen kapıyı kapat.
window|ˈwɪndoʊ|pencere|Open the window, it's hot.|Pencereyi aç, hava sıcak.
table|ˈteɪbəl|masa|Put the plates on the table.|Tabakları masaya koy.
chair|tʃer|sandalye|This chair is broken.|Bu sandalye kırık.
water|ˈwɔːtər|su|Can I have some water?|Biraz su alabilir miyim?
bread|bred|ekmek|We need bread for breakfast.|Kahvaltı için ekmeğe ihtiyacımız var.
food|fuːd|yemek, yiyecek|The food here is delicious.|Buradaki yemek çok lezzetli.
milk|mɪlk|süt|She drinks milk every morning.|Her sabah süt içer.
apple|ˈæpəl|elma|I eat an apple every day.|Her gün bir elma yerim.
book|bʊk|kitap|This book changed my life.|Bu kitap hayatımı değiştirdi.
school|skuːl|okul|The school opens at eight.|Okul sekizde açılıyor.
teacher|ˈtiːtʃər|öğretmen|Our teacher is very patient.|Öğretmenimiz çok sabırlı.
student|ˈstuːdənt|öğrenci|She is a hardworking student.|O çalışkan bir öğrenci.
work|wɜːrk|iş, çalışmak|I start work at nine.|İşe dokuzda başlıyorum.
money|ˈmʌni|para|I don't have enough money.|Yeterli param yok.
city|ˈsɪti|şehir|Istanbul is a huge city.|İstanbul kocaman bir şehir.
country|ˈkʌntri|ülke|Which country are you from?|Hangi ülkedensin?
street|striːt|sokak, cadde|The street is very busy today.|Sokak bugün çok kalabalık.
car|kɑːr|araba|His car is parked outside.|Arabası dışarıda park halinde.
day|deɪ|gün|Today is a beautiful day.|Bugün güzel bir gün.
night|naɪt|gece|I couldn't sleep last night.|Dün gece uyuyamadım.
year|jɪr|yıl|She lived there for ten years.|Orada on yıl yaşadı.
time|taɪm|zaman, vakit|I don't have time right now.|Şu anda vaktim yok.
morning|ˈmɔːrnɪŋ|sabah|I run every morning.|Her sabah koşarım.
week|wiːk|hafta|See you next week.|Haftaya görüşürüz.
dog|dɔːɡ|köpek|Their dog is very friendly.|Köpekleri çok cana yakın.
cat|kæt|kedi|The cat is sleeping on the sofa.|Kedi koltukta uyuyor.
go|ɡoʊ|gitmek|I go to work by bus.|İşe otobüsle giderim.
come|kʌm|gelmek|Come here, please.|Buraya gel, lütfen.
eat|iːt|yemek|We eat dinner at seven.|Akşam yemeğini yedide yeriz.
drink|drɪŋk|içmek|She doesn't drink coffee.|O kahve içmez.
sleep|sliːp|uyumak|I sleep eight hours a night.|Gecede sekiz saat uyurum.
see|siː|görmek|I can see the sea from here.|Buradan denizi görebiliyorum.
look|lʊk|bakmak|Look at that bird!|Şu kuşa bak!
hear|hɪr|duymak|I can't hear you.|Seni duyamıyorum.
speak|spiːk|konuşmak|Do you speak English?|İngilizce konuşuyor musun?
say|seɪ|söylemek, demek|What did she say?|Ne dedi?
read|riːd|okumak|I read before bed.|Yatmadan önce okurum.
write|raɪt|yazmak|Write your name here.|Adını buraya yaz.
walk|wɔːk|yürümek|We walk to school every day.|Her gün okula yürürüz.
run|rʌn|koşmak|He runs very fast.|Çok hızlı koşuyor.
buy|baɪ|satın almak|I want to buy a new phone.|Yeni bir telefon almak istiyorum.
give|ɡɪv|vermek|Give me a minute.|Bana bir dakika ver.
take|teɪk|almak, götürmek|Take an umbrella with you.|Yanına şemsiye al.
make|meɪk|yapmak|She makes her own bread.|Kendi ekmeğini yapar.
help|help|yardım etmek|Can you help me?|Bana yardım edebilir misin?
like|laɪk|beğenmek, hoşlanmak|I like this song.|Bu şarkıyı seviyorum.
want|wɑːnt|istemek|I want to learn Spanish.|İspanyolca öğrenmek istiyorum.
need|niːd|ihtiyaç duymak|We need more time.|Daha fazla zamana ihtiyacımız var.
know|noʊ|bilmek, tanımak|I know her from school.|Onu okuldan tanıyorum.
think|θɪŋk|düşünmek, sanmak|I think you are right.|Bence haklısın.
love|lʌv|sevmek, aşk|She loves her job.|İşini çok seviyor.
live|lɪv|yaşamak, oturmak|They live near the park.|Parkın yakınında oturuyorlar.
open|ˈoʊpən|açmak, açık|The shop opens at ten.|Dükkân onda açılıyor.
close|kloʊz|kapatmak|Close your books, please.|Kitaplarınızı kapatın lütfen.
start|stɑːrt|başlamak|The film starts at eight.|Film sekizde başlıyor.
stop|stɑːp|durmak, durdurmak|The bus stopped suddenly.|Otobüs aniden durdu.
big|bɪɡ|büyük, kocaman|They live in a big house.|Büyük bir evde oturuyorlar.
small|smɔːl|küçük|This shirt is too small.|Bu gömlek çok küçük.
good|ɡʊd|iyi|That's a good idea.|Bu iyi bir fikir.
bad|bæd|kötü|The weather is really bad.|Hava gerçekten kötü.
new|nuː|yeni|I bought a new bike.|Yeni bir bisiklet aldım.
old|oʊld|eski, yaşlı|This is an old photo.|Bu eski bir fotoğraf.
happy|ˈhæpi|mutlu|She looks very happy today.|Bugün çok mutlu görünüyor.
easy|ˈiːzi|kolay|The test was easy.|Sınav kolaydı.
hard|hɑːrd|zor, sert|Learning a language is hard.|Dil öğrenmek zordur.
hot|hɑːt|sıcak|The soup is still hot.|Çorba hâlâ sıcak.
cold|koʊld|soğuk|It's cold outside.|Dışarısı soğuk.
`,
  },

  a2: {
    label: "A2 · Günlük",
    words: `
job|dʒɑːb|iş, meslek|She found a new job.|Yeni bir iş buldu.
office|ˈɔːfɪs|ofis, büro|His office is on the third floor.|Ofisi üçüncü katta.
meeting|ˈmiːtɪŋ|toplantı|The meeting starts in ten minutes.|Toplantı on dakika sonra başlıyor.
answer|ˈænsər|cevap, cevaplamak|I don't know the answer.|Cevabı bilmiyorum.
question|ˈkwestʃən|soru|Can I ask you a question?|Sana bir soru sorabilir miyim?
problem|ˈprɑːbləm|sorun, problem|We solved the problem together.|Sorunu birlikte çözdük.
idea|aɪˈdiːə|fikir|That's an interesting idea.|Bu ilginç bir fikir.
reason|ˈriːzən|sebep, neden|There's a good reason for it.|Bunun iyi bir sebebi var.
change|tʃeɪndʒ|değişiklik, değiştirmek|We need to change our plan.|Planımızı değiştirmemiz gerek.
plan|plæn|plan, planlamak|What are your plans tonight?|Bu akşam planların ne?
price|praɪs|fiyat|The price is too high.|Fiyat çok yüksek.
shop|ʃɑːp|dükkân, alışveriş yapmak|The shop closes at nine.|Dükkân dokuzda kapanıyor.
market|ˈmɑːrkɪt|pazar, market|I buy vegetables at the market.|Sebzeleri pazardan alırım.
ticket|ˈtɪkɪt|bilet|I lost my train ticket.|Tren biletimi kaybettim.
travel|ˈtrævəl|seyahat etmek|They travel every summer.|Her yaz seyahat ederler.
holiday|ˈhɑːlədeɪ|tatil|We're going on holiday next week.|Haftaya tatile gidiyoruz.
beach|biːtʃ|plaj, sahil|The beach was almost empty.|Plaj neredeyse boştu.
mountain|ˈmaʊntən|dağ|We climbed the mountain in June.|Dağa haziranda tırmandık.
weather|ˈweðər|hava durumu|The weather is nice today.|Bugün hava güzel.
health|helθ|sağlık|Your health comes first.|Önce sağlığın gelir.
doctor|ˈdɑːktər|doktor|You should see a doctor.|Bir doktora görünmelisin.
medicine|ˈmedəsən|ilaç|Take this medicine twice a day.|Bu ilacı günde iki kez al.
body|ˈbɑːdi|vücut, beden|Exercise is good for your body.|Egzersiz vücuduna iyi gelir.
face|feɪs|yüz|I never forget a face.|Bir yüzü asla unutmam.
hand|hænd|el|Wash your hands before eating.|Yemekten önce ellerini yıka.
heart|hɑːrt|kalp|My heart was beating fast.|Kalbim hızlı atıyordu.
voice|vɔɪs|ses|She has a beautiful voice.|Çok güzel bir sesi var.
music|ˈmjuːzɪk|müzik|I listen to music while working.|Çalışırken müzik dinlerim.
story|ˈstɔːri|hikâye, öykü|Tell me the whole story.|Bana bütün hikâyeyi anlat.
news|nuːz|haber|Have you heard the news?|Haberi duydun mu?
word|wɜːrd|kelime, söz|I didn't understand a word.|Tek kelime anlamadım.
language|ˈlæŋɡwɪdʒ|dil|She speaks three languages.|Üç dil konuşuyor.
letter|ˈletər|mektup, harf|I got a letter from him.|Ondan bir mektup aldım.
message|ˈmesɪdʒ|mesaj|I left you a message.|Sana mesaj bıraktım.
picture|ˈpɪktʃər|resim, fotoğraf|Take a picture of us.|Bizim fotoğrafımızı çek.
computer|kəmˈpjuːtər|bilgisayar|My computer is very slow.|Bilgisayarım çok yavaş.
phone|foʊn|telefon|Your phone is ringing.|Telefonun çalıyor.
learn|lɜːrn|öğrenmek|I learn something new every day.|Her gün yeni bir şey öğreniyorum.
teach|tiːtʃ|öğretmek|She teaches math at a high school.|Lisede matematik öğretiyor.
study|ˈstʌdi|çalışmak, ders çalışmak|He studies every evening.|Her akşam ders çalışıyor.
understand|ˌʌndərˈstænd|anlamak|I don't understand this rule.|Bu kuralı anlamıyorum.
remember|rɪˈmembər|hatırlamak|I can't remember his name.|Adını hatırlayamıyorum.
forget|fərˈɡet|unutmak|Don't forget your keys.|Anahtarlarını unutma.
try|traɪ|denemek, çalışmak|Try again tomorrow.|Yarın tekrar dene.
find|faɪnd|bulmak|I found my wallet.|Cüzdanımı buldum.
lose|luːz|kaybetmek|Don't lose this ticket.|Bu bileti kaybetme.
win|wɪn|kazanmak|Our team won the match.|Takımımız maçı kazandı.
pay|peɪ|ödemek|I'll pay for dinner.|Yemeğin parasını ben öderim.
send|send|göndermek|Send me the file, please.|Dosyayı bana gönder lütfen.
bring|brɪŋ|getirmek|Bring your friend along.|Arkadaşını da getir.
wait|weɪt|beklemek|Wait for me outside.|Beni dışarıda bekle.
ask|æsk|sormak, rica etmek|She asked for help.|Yardım istedi.
tell|tel|söylemek, anlatmak|Tell me what happened.|Ne olduğunu anlat bana.
show|ʃoʊ|göstermek|Show me the photos.|Bana fotoğrafları göster.
meet|miːt|buluşmak, tanışmak|Let's meet at six.|Altıda buluşalım.
stay|steɪ|kalmak|We stayed at a small hotel.|Küçük bir otelde kaldık.
leave|liːv|ayrılmak, bırakmak|The train leaves at noon.|Tren öğlen kalkıyor.
follow|ˈfɑːloʊ|takip etmek, izlemek|Follow me, please.|Beni takip edin lütfen.
build|bɪld|inşa etmek, kurmak|They built the bridge in a year.|Köprüyü bir yılda inşa ettiler.
break|breɪk|kırmak, ara|Be careful, you'll break it.|Dikkat et, kıracaksın.
carry|ˈkæri|taşımak|Can you carry this bag?|Bu çantayı taşıyabilir misin?
choose|tʃuːz|seçmek|Choose whichever you like.|Hangisini istersen seç.
decide|dɪˈsaɪd|karar vermek|We decided to stay home.|Evde kalmaya karar verdik.
explain|ɪkˈspleɪn|açıklamak|Can you explain this again?|Bunu tekrar açıklayabilir misin?
happen|ˈhæpən|olmak, meydana gelmek|What happened yesterday?|Dün ne oldu?
believe|bɪˈliːv|inanmak|I believe you.|Sana inanıyorum.
hope|hoʊp|umut, ummak|I hope you feel better soon.|Umarım yakında iyileşirsin.
worry|ˈwɜːri|endişelenmek|Don't worry about it.|Bunun için endişelenme.
enjoy|ɪnˈdʒɔɪ|keyif almak|I really enjoyed the film.|Filmden gerçekten keyif aldım.
beautiful|ˈbjuːtɪfəl|güzel|What a beautiful view!|Ne güzel bir manzara!
different|ˈdɪfərənt|farklı|Their opinions are very different.|Fikirleri çok farklı.
important|ɪmˈpɔːrtənt|önemli|This is an important decision.|Bu önemli bir karar.
difficult|ˈdɪfɪkəlt|zor, güç|The exam was difficult.|Sınav zordu.
possible|ˈpɑːsəbəl|mümkün|Is it possible to change the date?|Tarihi değiştirmek mümkün mü?
ready|ˈredi|hazır|Dinner is ready.|Yemek hazır.
tired|ˈtaɪərd|yorgun|I'm too tired to go out.|Dışarı çıkamayacak kadar yorgunum.
busy|ˈbɪzi|meşgul|She's busy this afternoon.|Bu öğleden sonra meşgul.
quiet|ˈkwaɪət|sessiz, sakin|Please be quiet.|Lütfen sessiz olun.
expensive|ɪkˈspensɪv|pahalı|That restaurant is expensive.|O restoran pahalı.
`,
  },

  b1: {
    label: "B1 · Orta",
    words: `
experience|ɪkˈspɪriəns|deneyim, tecrübe|She has years of experience.|Yıllarca deneyimi var.
opportunity|ˌɑːpərˈtuːnəti|fırsat|This is a great opportunity.|Bu harika bir fırsat.
advice|ədˈvaɪs|tavsiye, öğüt|Can I give you some advice?|Sana bir tavsiye verebilir miyim?
decision|dɪˈsɪʒən|karar|It was a difficult decision.|Zor bir karardı.
choice|tʃɔɪs|seçim, tercih|You made the right choice.|Doğru seçimi yaptın.
result|rɪˈzʌlt|sonuç|The results were surprising.|Sonuçlar şaşırtıcıydı.
effect|ɪˈfekt|etki|The medicine had no effect.|İlacın hiç etkisi olmadı.
purpose|ˈpɜːrpəs|amaç, maksat|What is the purpose of this meeting?|Bu toplantının amacı ne?
goal|ɡoʊl|hedef, amaç|Her goal is to study abroad.|Hedefi yurt dışında okumak.
success|səkˈses|başarı|Success takes patience.|Başarı sabır ister.
failure|ˈfeɪljər|başarısızlık|Failure is part of learning.|Başarısızlık öğrenmenin bir parçası.
mistake|mɪˈsteɪk|hata|Everyone makes mistakes.|Herkes hata yapar.
knowledge|ˈnɑːlɪdʒ|bilgi|His knowledge of history is deep.|Tarih bilgisi derin.
skill|skɪl|beceri, yetenek|Listening is an important skill.|Dinlemek önemli bir beceridir.
ability|əˈbɪləti|yetenek, kabiliyet|She has the ability to lead.|Liderlik etme yeteneği var.
effort|ˈefərt|çaba, gayret|It took a lot of effort.|Çok çaba gerektirdi.
progress|ˈprɑːɡres|ilerleme|You're making good progress.|Güzel ilerleme kaydediyorsun.
research|rɪˈsɜːrtʃ|araştırma|The research took two years.|Araştırma iki yıl sürdü.
evidence|ˈevɪdəns|kanıt, delil|There is no evidence for that.|Bunun için hiçbir kanıt yok.
example|ɪɡˈzæmpəl|örnek|Give me a concrete example.|Bana somut bir örnek ver.
situation|ˌsɪtʃuˈeɪʃən|durum|The situation is getting better.|Durum iyiye gidiyor.
condition|kənˈdɪʃən|koşul, durum|The car is in good condition.|Araba iyi durumda.
society|səˈsaɪəti|toplum|Technology is changing society.|Teknoloji toplumu değiştiriyor.
government|ˈɡʌvərnmənt|hükümet|The government announced new rules.|Hükümet yeni kurallar açıkladı.
law|lɔː|kanun, hukuk|Breaking the law has consequences.|Kanunu çiğnemenin sonuçları vardır.
right|raɪt|hak, doğru|Everyone has the right to speak.|Herkesin konuşma hakkı var.
freedom|ˈfriːdəm|özgürlük|Freedom comes with responsibility.|Özgürlük sorumlulukla gelir.
responsibility|rɪˌspɑːnsəˈbɪləti|sorumluluk|It's your responsibility now.|Artık senin sorumluluğun.
relationship|rɪˈleɪʃənʃɪp|ilişki|They have a close relationship.|Yakın bir ilişkileri var.
community|kəˈmjuːnəti|topluluk|The community supported the school.|Topluluk okulu destekledi.
culture|ˈkʌltʃər|kültür|I love learning about other cultures.|Başka kültürleri öğrenmeye bayılıyorum.
tradition|trəˈdɪʃən|gelenek|It's an old family tradition.|Bu eski bir aile geleneği.
environment|ɪnˈvaɪrənmənt|çevre, ortam|We must protect the environment.|Çevreyi korumalıyız.
development|dɪˈveləpmənt|gelişim, kalkınma|The development took five years.|Gelişim beş yıl sürdü.
industry|ˈɪndəstri|sanayi, sektör|The film industry is growing.|Sinema sektörü büyüyor.
business|ˈbɪznəs|iş, ticaret|She started her own business.|Kendi işini kurdu.
customer|ˈkʌstəmər|müşteri|The customer is waiting.|Müşteri bekliyor.
service|ˈsɜːrvɪs|hizmet|The service was excellent.|Hizmet mükemmeldi.
quality|ˈkwɑːləti|kalite|Quality matters more than quantity.|Kalite miktardan önemlidir.
amount|əˈmaʊnt|miktar|We need a large amount of water.|Çok miktarda suya ihtiyacımız var.
increase|ɪnˈkriːs|artmak, artış|Prices increased last month.|Fiyatlar geçen ay arttı.
reduce|rɪˈduːs|azaltmak|We need to reduce costs.|Maliyetleri azaltmamız gerek.
improve|ɪmˈpruːv|geliştirmek, iyileştirmek|I want to improve my English.|İngilizcemi geliştirmek istiyorum.
develop|dɪˈveləp|geliştirmek|They developed a new method.|Yeni bir yöntem geliştirdiler.
provide|prəˈvaɪd|sağlamak, sunmak|The hotel provides breakfast.|Otel kahvaltı sağlıyor.
require|rɪˈkwaɪər|gerektirmek|This job requires patience.|Bu iş sabır gerektiriyor.
suggest|səˈdʒest|önermek|I suggest we leave early.|Erken çıkmamızı öneriyorum.
consider|kənˈsɪdər|düşünmek, göz önünde bulundurmak|Please consider my offer.|Lütfen teklifimi değerlendir.
avoid|əˈvɔɪd|kaçınmak|Try to avoid sugar.|Şekerden kaçınmaya çalış.
achieve|əˈtʃiːv|başarmak, elde etmek|She achieved her goal.|Hedefine ulaştı.
manage|ˈmænɪdʒ|yönetmek, başarmak|He manages a small team.|Küçük bir ekip yönetiyor.
prepare|prɪˈper|hazırlamak|I'm preparing for the exam.|Sınava hazırlanıyorum.
compare|kəmˈper|karşılaştırmak|Compare the two options.|İki seçeneği karşılaştır.
describe|dɪˈskraɪb|tarif etmek, betimlemek|Describe what you saw.|Gördüğünü anlat.
discuss|dɪˈskʌs|tartışmak, görüşmek|Let's discuss this tomorrow.|Bunu yarın konuşalım.
realize|ˈriːəlaɪz|fark etmek|I realized my mistake too late.|Hatamı çok geç fark ettim.
recognize|ˈrekəɡnaɪz|tanımak, kabul etmek|I didn't recognize you!|Seni tanıyamadım!
notice|ˈnoʊtɪs|fark etmek|Did you notice anything strange?|Tuhaf bir şey fark ettin mi?
prevent|prɪˈvent|önlemek, engellemek|We must prevent this from happening.|Bunun olmasını önlemeliyiz.
allow|əˈlaʊ|izin vermek|They don't allow pets here.|Burada evcil hayvana izin vermiyorlar.
accept|əkˈsept|kabul etmek|She accepted the offer.|Teklifi kabul etti.
refuse|rɪˈfjuːz|reddetmek|He refused to answer.|Cevap vermeyi reddetti.
depend|dɪˈpend|bağlı olmak|It depends on the weather.|Hava durumuna bağlı.
affect|əˈfekt|etkilemek|The news affected everyone.|Haber herkesi etkiledi.
appear|əˈpɪr|görünmek, ortaya çıkmak|He appeared out of nowhere.|Birden ortaya çıktı.
seem|siːm|görünmek, gibi olmak|You seem tired today.|Bugün yorgun görünüyorsun.
available|əˈveɪləbəl|mevcut, müsait|Is the room still available?|Oda hâlâ müsait mi?
necessary|ˈnesəseri|gerekli|Sleep is necessary for health.|Uyku sağlık için gereklidir.
familiar|fəˈmɪljər|tanıdık, aşina|Her face looks familiar.|Yüzü tanıdık geliyor.
serious|ˈsɪriəs|ciddi|This is a serious problem.|Bu ciddi bir sorun.
common|ˈkɑːmən|yaygın, ortak|That's a common mistake.|Bu yaygın bir hata.
similar|ˈsɪmələr|benzer|Our ideas are similar.|Fikirlerimiz benzer.
particular|pərˈtɪkjələr|belirli, özel|Is there a particular reason?|Belirli bir sebep var mı?
recent|ˈriːsənt|son, yakın zamandaki|In recent years, things changed.|Son yıllarda işler değişti.
`,
  },

  b2: {
    label: "B2 · İleri",
    words: `
attitude|ˈætɪtuːd|tutum, tavır|Her attitude changed everything.|Tutumu her şeyi değiştirdi.
approach|əˈproʊtʃ|yaklaşım, yaklaşmak|We need a different approach.|Farklı bir yaklaşıma ihtiyacımız var.
assumption|əˈsʌmpʃən|varsayım|That assumption turned out wrong.|O varsayım yanlış çıktı.
consequence|ˈkɑːnsəkwens|sonuç, netice|Every choice has consequences.|Her seçimin sonuçları vardır.
concern|kənˈsɜːrn|endişe, ilgilendirmek|Safety is our main concern.|Güvenlik başlıca endişemiz.
argument|ˈɑːrɡjumənt|tartışma, argüman|His argument was convincing.|Argümanı ikna ediciydi.
perspective|pərˈspektɪv|bakış açısı|Try to see it from my perspective.|Olaya benim açımdan bakmaya çalış.
insight|ˈɪnsaɪt|içgörü, kavrayış|The book offers real insight.|Kitap gerçek bir kavrayış sunuyor.
impact|ˈɪmpækt|etki|The decision had a huge impact.|Kararın çok büyük bir etkisi oldu.
influence|ˈɪnfluəns|etki, etkilemek|His teacher influenced him deeply.|Öğretmeni onu derinden etkiledi.
benefit|ˈbenɪfɪt|fayda, yarar|Exercise has many benefits.|Egzersizin birçok faydası vardır.
advantage|ədˈvæntɪdʒ|avantaj, üstünlük|Speaking two languages is an advantage.|İki dil bilmek bir avantaj.
challenge|ˈtʃælɪndʒ|zorluk, meydan okumak|This project is a real challenge.|Bu proje gerçek bir zorluk.
issue|ˈɪʃuː|mesele, sorun|We should address this issue.|Bu meseleyi ele almalıyız.
solution|səˈluːʃən|çözüm|There is no easy solution.|Kolay bir çözüm yok.
strategy|ˈstrætədʒi|strateji|We changed our strategy.|Stratejimizi değiştirdik.
process|ˈprɑːses|süreç, işlem|The process takes several weeks.|Süreç birkaç hafta sürüyor.
method|ˈmeθəd|yöntem|This method works better.|Bu yöntem daha iyi çalışıyor.
standard|ˈstændərd|standart, ölçüt|The quality meets our standards.|Kalite standartlarımızı karşılıyor.
principle|ˈprɪnsəpəl|ilke, prensip|He never breaks his principles.|İlkelerinden asla ödün vermez.
assume|əˈsuːm|varsaymak|Don't assume she agrees.|Kabul ettiğini varsayma.
demonstrate|ˈdemənstreɪt|göstermek, kanıtlamak|The study demonstrates the risk.|Çalışma riski gösteriyor.
establish|ɪˈstæblɪʃ|kurmak, oluşturmak|They established the company in 1990.|Şirketi 1990'da kurdular.
maintain|meɪnˈteɪn|sürdürmek, korumak|It's hard to maintain that pace.|O tempoyu sürdürmek zor.
determine|dɪˈtɜːrmɪn|belirlemek, saptamak|Price determines demand.|Fiyat talebi belirler.
indicate|ˈɪndɪkeɪt|göstermek, işaret etmek|The data indicates a problem.|Veriler bir soruna işaret ediyor.
emphasize|ˈemfəsaɪz|vurgulamak|She emphasized the deadline.|Teslim tarihini vurguladı.
acknowledge|əkˈnɑːlɪdʒ|kabul etmek, teslim etmek|He acknowledged his error.|Hatasını kabul etti.
overcome|ˌoʊvərˈkʌm|üstesinden gelmek|She overcame every obstacle.|Her engelin üstesinden geldi.
pursue|pərˈsuː|peşinden gitmek, sürdürmek|He decided to pursue medicine.|Tıp okumaya karar verdi.
contribute|kənˈtrɪbjuːt|katkıda bulunmak|Everyone contributed something.|Herkes bir şeyler kattı.
reveal|rɪˈviːl|açığa çıkarmak|The report revealed the truth.|Rapor gerçeği ortaya çıkardı.
convince|kənˈvɪns|ikna etmek|You won't convince him easily.|Onu kolay ikna edemezsin.
struggle|ˈstrʌɡəl|mücadele etmek, zorlanmak|I struggled with the grammar.|Dilbilgisinde zorlandım.
imply|ɪmˈplaɪ|ima etmek|Are you implying I lied?|Yalan söylediğimi mi ima ediyorsun?
adapt|əˈdæpt|uyum sağlamak|Children adapt quickly.|Çocuklar hızlı uyum sağlar.
reflect|rɪˈflekt|yansıtmak, düşünmek|The results reflect real effort.|Sonuçlar gerçek çabayı yansıtıyor.
generate|ˈdʒenəreɪt|üretmek, oluşturmak|The plan generated a lot of interest.|Plan büyük ilgi uyandırdı.
significant|sɪɡˈnɪfɪkənt|önemli, kayda değer|There was a significant improvement.|Kayda değer bir iyileşme oldu.
relevant|ˈreləvənt|ilgili, konuyla alakalı|That's not relevant here.|Bu burada konuyla alakalı değil.
essential|ɪˈsenʃəl|temel, şart|Trust is essential in a team.|Ekipte güven şarttır.
appropriate|əˈproʊpriət|uygun|That's not appropriate behaviour.|Bu uygun bir davranış değil.
reliable|rɪˈlaɪəbəl|güvenilir|He's a reliable colleague.|Güvenilir bir meslektaş.
obvious|ˈɑːbviəs|apaçık, bariz|The answer was obvious.|Cevap apaçıktı.
reasonable|ˈriːzənəbəl|makul|That sounds reasonable.|Bu makul geliyor.
accurate|ˈækjərət|doğru, isabetli|The forecast was accurate.|Tahmin isabetliydi.
efficient|ɪˈfɪʃənt|verimli|This is a more efficient method.|Bu daha verimli bir yöntem.
complex|ˈkɑːmpleks|karmaşık|It's a complex situation.|Karmaşık bir durum.
crucial|ˈkruːʃəl|çok önemli, kritik|Timing is crucial here.|Burada zamanlama kritik.
inevitable|ɪnˈevɪtəbəl|kaçınılmaz|Change was inevitable.|Değişim kaçınılmazdı.
`,
  },
};
