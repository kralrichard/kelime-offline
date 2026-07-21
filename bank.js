/* Kelime bankasi - otomatik uretildi, elle duzenleme.
 *
 * Bicim: kelime|tur|Turkce anlamlar
 * Siralama: konusma dili kullanim sikligi (en sik kullanilan basta).
 */
const BANK = `
what|interj.|ne
have|v.|sahip olmak
do|v.|etmek, yapmak
don|v.|giymek, giydirmek, giyinmek
know|v.|bilmek, tanımak
can|v.|olabilmek, kovmak, konservelemek
all|n.|tüm, bütün, hepsi
just|adj.|sadece, adil, yalnızca
there|adv.|oraya, orada, ora
here|adv.|burada, buraya
like|v.|beğenmek, hoşlanmak, sevmek
get|v.|elde etmek, almak, kazanmak
go|v.|hareket etmek, gitmek
right|n.|sağ, hak, haklı
out|n.|çıkış, dışarıda, dışarı
about|adv.|hemen hemen, aşağı yukarı, yaklaşık
up|interj.|yukarı
now|adv.|şimdi, şu anda
oh|interj.|ey, ha
one|n.|bir, tek, biri
come|v.|gelmek
well|n.|kuyu, iyi, peki
how|adv.|nasıl
yeah|interj.|tamam, he, evet
will|n.|vasiyet, irade
want|v.|istemek, istek
think|v.|sanmak, düşünmek
see|v.|görmek, bakmak
did|n.|do fiilinin ikinci hali
good|adj.|güzel, hayırlı, iyi
who|pron.|kim, kimi, kime
why|adv.|neden, niçin, niye
let|v.|izin vermek
yes|n.|evet
when|adv.|ne zaman
going|n.|gidiş
time|n.|kez, kere, müddet
okay|interj.|tamam
back|n.|art, arkalık, sırt
look|v.|bakmak, görünüş, bakış
would|v.|istemek, -ecekti, -çekti
where|adv.|nereye, nerede
take|v.|almak, (fotoğraf) çekmek, götürmek
then|n.|o zamanlar, o zamanki, o zamanın
had|v.|have fiilinin ikinci hali, kandırılmış
gonna|expr.|-ecek
tell|v.|haber vermek, söylemek, anlatmak
really|adv.|hakikaten, gerçekten
man|n.|insan, adam, erkek
some|adj.|biraz, bazı, birkaç
say|v.|söylemek, demek
hey|interj.|selam
could|v.|-abilirdi, -er misin(iz), -ebilirdi
need|v.|ihtiyaç duymak, gerek, gereksinim
something|n.|bir şey, falan
has|v.|sahip olmak
too|adj.|gereğinden çok, çok, aşırı
more|adj.|daha fazla, daha
way|n.|yol, taraf, tarz
down|adv.|aşağıya doğru, aşağı
make|v.|yapmak
very|adv.|çok
never|adv.|hiç, asla
only|adj.|tek, sırf, yalnızca
people|n.|insanlar, ulus, halk
over|adj.|bitmiş, üzerine, üstüne
because|conj.|çünkü, -dığı için, zira
little|adj.|ufak, az, küçük
please|v.|memnun etmek, lütfen
love|v.|sevmek, sevda, aşk
should|v.|gerekmek, -malı, -meli
mean|v.|demek istemek, kastetmek, anlamına gelmek
said|adj.|söz konusu, adı geçen, söylenmiş
sorry|adj.|üzgün
give|v.|vermek
off|adj.|kapalı, dışında
thank|v.|teşekkür etmek, teşekkür
any|adj.|her, hiçbir, herhangi
two|n.|iki
even|adj.|düzgün, düz, pürüzsüz
much|adj.|fazla, çok
doing|n.|faaliyet, yapma, meydana getirme
sure|adj.|emin, elbette
thing|n.|şey
help|v.|yardım etmek, yardım
first|adj.|birinci, ilk, önce
into|prep.|içine
anything|pron.|hiçbir şey, her şey
still|adj.|durgun, hareketsiz, hala
find|v.|bulmak
life|n.|yaşam, hayat, can
nothing|n.|hiç, hiçbir şey
sir|v.|sör diye hitap etmek, bir asalet unvanı, efendim
day|n.|gün
god|n.|Allah, tanrı
work|v.|çalışmak, işe yaramak, iş yapmak
uh|interj.|eee, ııı, tereddüt belirten ünlem
again|adv.|bir daha, daha, tekrar
maybe|interj.|belki
must|v.|gerekmek, -malı, -meli
before|prep.|evvel, önce
other|adj.|öbür, öteki, başka
wait|v.|beklemek, bekleyiş, bekleme
stop|v.|durmak, durdurmak, dinmek
call|v.|çağırmak, telefon açmak, telefon etmek
after|adv.|sonra
won|v.|kazanmak, güney kore para birimi, kazanan
talk|v.|konuşmak, sohbet, konuşma
away|adj.|uzak, uzağa, uzakta
than|prep.|hariç, -den, -mektense
thought|n.|sanı, düşünce, fikir
home|n.|ev
night|adj.|gece
put|v.|koymak
great|adj.|mükemmel, müthiş, harika
last|adj.|sonuncu, son
better|adj.|daha iyi
everything|pron.|her şey
told|adj.|söylenmiş
new|adj.|yeni
things|n.|eşya, gidişat, giysiler
always|adv.|hep, her zaman, daima
keep|v.|tutmak, saklamak
long|adj.|uzun
years|n.|yıllar, yıl
leave|v.|bırakmak, ayrılmak, terk etmek
does|n.|yazıcı, allak, yavaş
money|n.|para
around|adv.|sularında, çevrede, etrafında
name|n.|isim, ad
place|v.|koymak, oturtmak, yerleştirmek
ever|adv.|durmadan, her zaman, daima
feel|v.|hissetmek
guys|n.|beyler, çocuklar, herifler
father|n.|papaz, peder, baba
guy|n.|adam, herif
made|adj.|yapılmış
old|adj.|eskimiş, eski, yaşlı
which|adj.|hangi
big|adj.|iri, büyük
lot|n.|pay
done|adj.|yapılmış
hello|interj.|merhaba
nice|adj.|sevimli, güzel, hoş
believe|v.|inanmak
girl|n.|kız
someone|pron.|birisi
fine|v.|ceza kesmek, para cezası, hoş
thanks|n.|teşekkür, teşekkürler, sağ ol
wanted|adj.|lazım, gerekli, aranılan
kind|n.|tür, çeşit, cins
coming|n.|geliş
house|n.|ev, konut
every|adj.|her
ok|v.|onaylamak, okeylemek, kabul etmek
through|prep.|başından sonuna kadar, yoluyla, üzerinden
course|n.|kurs, izlenen yol, rota
stay|v.|kalmak, kalma süresi, kalma
left|adj.|sol
dad|n.|babacığım, baba, babacık
enough|adj.|kafi, yeterli, yeter
happened|v.|olmuş
came|n.|kurşun pencere çerçevesi, hamur
may|n.|mayıs ayı, mayıs
mother|n.|ana, anne
wrong|adj.|yanlış
world|n.|alem, dünya
bad|adj.|kötü, fena, bozuk
might|v.|mümkün olmak, olası olmak, -abilir
three|n.|iskambilde üçlü, üç rakamı (3, III), se
today|adv.|bugün
listen|v.|dinlemek
another|adj.|öbür, başka
understand|v.|anlayış göstermek, anlamak
hear|v.|duymak, işitmek
remember|v.|hatırlamak, anımsamak, anmak
ask|v.|soru sormak, istemek, sormak
own|v.|sahip olmak, kendi
same|adj.|aynı
show|v.|göstermek, gösteri
else|adj.|başka
kill|v.|katletmek, öldürmek, öldürme
talking|n.|konuşma
found|v.|kurmak
next|prep.|sonraki
getting|n.|temin, edinme
care|v.|önem vermek, aldırmak, umursamak
car|n.|otomobil, araba
looking|n.|bakış, görünme, bakma
son|n.|oğul
try|v.|denemek, deneme
woman|n.|kadın
went|v.|gitmenin (go) 2. hali
hi|interj.|merhaba, selam, merhabalar
dead|adj.|ölü, cansız
many|adj.|birçok, çok
mind|v.|önemsemek, aldırmak, akıl
wasn|expr.|cami yeterince büyük değildi
friend|n.|ahbap, arkadaş, dost
best|adj.|en iyi
mom|n.|anne, anneciğim
hell|n.|cehennem
morning|adj.|sabah
trying|n.|deneme
boy|n.|delikanlı, erkek çocuk, oğlan
together|adv.|birlikte, beraber
yourself|pron.|kendin, kendiniz, kendini
job|n.|görev, iş
saw|n.|testere
family|n.|sülale, aile
real|adj.|hakiki, gerçek
without|n.|dış, dıştan, dışarıda
baby|n.|yavru, bebek
room|n.|oda
already|adv.|zaten, çoktan, halihazırda
move|v.|kımıldamak, kıpırdamak, hareket etmek
most|adj.|en, en çok
seen|adj.|görülen
live|v.|yaşamak, naklen
miss|v.|ıska geçmek, özlemek, kaçırmak
actually|adv.|fiilen, aslında
huh|interj.|ha
shit|v.|shit/shat / shitted - shit/shat / shitted, sıçmak, kaka yapmak
both|adj.|her ikisi de, her iki, her ikisi (de)
heard|adj.|duyulmuş, işitildi
once|adv.|bir kere, bir kez
ready|adj.|hazır
head|n.|kelle, kafa, baş
called|adj.|diye, adlı, adlandırılan
used|adj.|kullanılmış
idea|n.|fikir, düşünce
knew|expr.|geleceğini bilseydim bir kek yapardım, geleceğini bilseydim börekler açardım sana, keşke bilseydim!
hold|v.|sahip olmak, zaptetmek, düzenlemek
happy|adj.|sevinçli, mutlu
door|n.|kapı
such|adj.|çok, böylesine, bu gibi
fuck|v.|amına koymak, aşk yaşamak, atlamak
brother|n.|kardeş, erkek kardeş
also|adv.|ayrıca
pretty|adj.|şirin, tatlı, güzel
bit|n.|gem
took|adj.|alınmış
haven|n.|sığınak
yet|adv.|henüz
men|n.|erkekler, işçiler, adamlar
whole|adj.|tam, bütün, tüm
start|v.|başlamak, başlatmak, başlangıç
use|v.|kullanmak, kullanım, kullanma
while|conj.|sırasında, iken, olduğu halde
since|adv.|ondan sonra, o zamandan beri, sonradan
wife|n.|kocanın eşi, hanım, karı
days|n.|eyyam, yaşam, günler
guess|v.|tahmin etmek, tahmin
tomorrow|adv.|yarın
matter|v.|önemli olmak, madde, cisim
meet|v.|karşılaşmak, buluşmak, görüşme yapmak
bring|v.|getirmek
tonight|adv.|akşama, bu akşam, bu gece
everyone|pron.|herkes
run|v.|çalıştırmak, işletmek, koşmak
wanna|v.|-mek istemek
hard|adj.|çetin, sert, zahmetli
ah|interj.|of, ya, vah
alone|adj.|yalnız
myself|adv.|kendim
school|n.|mektep, okul
gone|adj.|gitmiş, ölmüş
um|n.|tereddüt veya duraksama ifade eden ses, ııı
end|v.|sona ermek, son vermek, son bulmak
saying|n.|özlü söz, söz, tabir
phone|v.|telefon etmek, telefon açmak, telefonlamak
play|v.|oynamak, çalmak, piyes
looks|n.|görünüş
fucking|n.|düzüşme, sikiş, seks
problem|n.|problem, mesele, sorun
few|adj.|az
friends|n.|arkadaşlar, ihvan
gotta|n.|-meli, -malı, kırk fırın ekmek yemen lazım
ago|adv.|evvel, önce
open|v.|açılmak, açmak, açık
anyone|pron.|hiç kimse
killed|adj.|öldürülmüş
hope|v.|ummak, umut etmek, ümit etmek
face|v.|yüzleşmek, yüz yüze gelmek, yönelmek
until|prep.|ila, değin, dek
lost|adj.|kayıp, kaybolmuş
police|n.|polis
excuse|v.|mazur görmek, mazeret, özür
turn|v.|dönmek, döndürmek, çevirmek
business|n.|işletme, iş
case|n.|dava, kasa, kılıf
wants|n.|ihtiyaçlar, istek, ihtiyaç
says|expr.|şöyle dedi
true|adj.|hakiki, gerçek, doğru
die|v.|ölmek, vefat etmek, rahmetli olmak
heart|n.|gönül, merkez, yürek
soon|adv.|birazdan, kısa süre içinde
each|pron.|her biri
worry|v.|endişelenmek, üzülmek, merak etmek
later|adv.|sonradan, sonra
year|n.|yıl, sene
watch|v.|seyretmek (tv), seyretmek, gözlemek
music|n.|müzik
hand|n.|el
having|n.|sahip olma, sahip olan, -li
probably|adv.|galiba, muhtemelen
beautiful|adj.|güzel
doctor|n.|doktor
sit|v.|oturmak
eat|v.|yemek yemek, yemek
thinking|n.|düşünme, düşünen
young|n.|genç
second|n.|saniye, ikinci
working|n.|çalışma
water|v.|sulamak, su
person|n.|kişi, şahıs
part|n.|parça, kısım, taraf
kids|n.|çocuklar
late|adj.|gecikmiş, geç
stuff|n.|şey
exactly|adv.|tamamen, tamı tamına, aynen
under|prep.|altında
death|n.|ölüm, vefat
minute|n.|dakika
pay|v.|ödemek, ödeme, ücret
crazy|adj.|deli, çıldırmış, çılgın
forget|v.|unutmak
everybody|pron.|cümle alem, dost düşman, herkes
kid|n.|velet, çocuk, küçük çocuk
change|v.|değişmek, değiştirmek, değişiklik
gave|expr.|akılsızın teki, akıldan nasibini almamış, hiç aklı yok
happen|v.|meydana gelmek, olmak
damn|v.|suçu yüklemek, sövmek, lanet etmek
five|n.|beş
drink|v.|içmek, içki
far|adj.|uzak
knows|v.|tanışık çıkmak, tanış çıkmak, allah bilir!
whatever|adj.|hangi, her türlü, her çeşit
eyes|v.|ile çok meşgul olmak, fıldır fıldır bakmak, yasadışı bir işin içinde olmak
shut|v.|kapamak, kapatmak, kapalı
aren|n.|martegiani
hit|v.|çarpmak, vurmak, isabet etmek
taking|n.|alış
easy|adj.|rahat, kolay, basit
times|prep.|kere, defa, kez
check|v.|denetlemek, kontrol etmek, kontrol
hands|n.|eller, sahip olma, iyelik
minutes|n.|zabıt, mazbata, dakika
deal|v.|davranmak, dağıtmak, iş yapmak
different|adj.|farklı, değişik, başka
means|n.|araç, vasıta
point|n.|nokta, puan, uç
inside|n.|iç taraf, içeri
makes|n.|bahaneci, beni öldürmeyen şey beni güçlendirir, başarı aptal insanları bilge gibi gösterir
asked|v.|istenen, sorulmuş
somebody|pron.|biri, birisi
making|n.|yapma
body|n.|ceset, gövde, vücut
afraid|adj.|korkmuş, korkan, ürkmüş
sleep|v.|uyumak, uyku
chance|n.|olanak, ihtimal, şans
dear|adj.|sevgili, canım
quite|adv.|epeyce, pek, epey
four|n.|dört
anyway|adv.|neyse, her neyse
close|v.|kapamak, kapatmak, yakın
ain|n.|fransa'da nehir ve bölgenin adı, ibrani alfabesinin on altıncı harfi, ayin
party|n.|taraf, parti
fun|n.|eğlence, eğlenme
against|prep.|aykırı, karşı
word|n.|laf, söz, sözcük
comes|n.|bir çift yıldızdan küçüğü, yoldaş
important|adj.|mühim, önemli
set|v.|kurmak, set, takım
shall|v.|kaçınılmazlık belirtir, söz verme durumunda kullanılır, emir belirtir
story|n.|hikaye
number|v.|numaralamak, saymak, sayı
daughter|n.|kız çocuk, kız evlat
least|adj.|en az, asgari
waiting|n.|bekleyiş, bekleme
hurt|v.|acımak, incitmek, yaralamak
wish|v.|dilemek, temenni etmek, arzu
moment|n.|an
fight|v.|dövüşmek, kavga etmek, savaşmak
week|n.|hafta
husband|n.|koca, eş
girls|n.|kız çocukları, kızlar
rest|v.|dinlendirmek, dinlenmek, dinlenme
married|adj.|evli
fire|v.|ateşlemek, kovmak, yangın
game|n.|oyun
nobody|pron.|hiç kimse
mr|n.|bay, bey, bay soyadından önce kullanılır
children|n.|çocuklar
side|n.|kenar, taraf, yan
stand|v.|(teklif) geçerli olmak, katlanmak, ayakta durmak
read|v.|okumak
though|conj.|gerçi, -diği halde
cut|v.|kesmek, pay, kesik
started|adj.|başlatılan, başlamış, başlatılmış
sister|n.|abla, kardeş, kız kardeş
supposed|adj.|sözde, farzedilmiş, zannedilen
between|adv.|arasında, arasına
child|n.|evlat, çocuk
goes|v.|sözü vermek, peşin parayla alışveriş etmek, geniş bir alanı kapsamak
hours|n.|saatler, saat, saatte bir doğrula
speak|v.|konuşmak
women|n.|kadınlar
behind|adj.|ardındaki, arkaya, geriye
almost|adv.|hemen hemen, az daha, takriben
truth|n.|hakikat, doğru, gerçek
blood|n.|kan
able|adj.|hünerli, kadir, gücü yeten
lady|n.|bayan, hanımefendi
anymore|adv.|artık, daha fazla, bundan sonra
playing|n.|çalma
gets|v.|laf altında kalmamak, yapılmasını sağlamak, eden bulur
shot|n.|atış
reason|n.|sebep, akıl, gerekçe
trouble|n.|sorun, dert, zahmet
break|v.|kopmak, kırmak, bozmak
war|n.|harp, savaş
city|n.|kent, şehir
walk|v.|yürümek, dolaşmak, yürüyerek gitmek
town|n.|şehir, kasaba
trust|v.|güvenmek, güven
met|adj.|karşılaşılan
office|n.|makam, ofis, büro
question|n.|soru
brought|adj.|getirilmiş, getirtilen, celp olunan
welcome|interj.|hoş geldiniz, hoş geldin
high|adj.|yüksek
wow|v.|birisini çok etkilemek ve heyecanlandırmak, vay be, çok komik şaka
couple|v.|eşleştirmek, çift
half|adj.|yarım, yarı
died|adj.|ölü, ölmüş
cool|v.|soğutmak, serinlik, serin
free|adj.|bağımsız, beleş, muaf
either|n.|iki, her, her iki
seems|v.|sanki, göründüğü gibi olmamak, görünüşe göre
power|n.|yetki, güç, kuvvet
whoa|n.|oha, çüş
bye|n.|ast, çiftli yarışan çiftlerden biri, hoşçakal
buy|v.|ısmarlamak, satın almak, almak
telling|n.|anlatma, söyleme, anlatım
honey|n.|bal, canım
tried|adj.|mücerrep, saf, sınanmış
front|v.|yönelmek, ön, cephe
team|n.|takım, ekip
answer|v.|yanıt vermek, cevaplamak, cevap vermek
gun|n.|silah, tabanca
boys|n.|erkek çocuklar
line|v.|astarlamak, satır, hat
send|v.|yollamak, göndermek
news|n.|haber
stupid|adj.|aptalca, beyinsiz, salak
bed|n.|yatak
hurry|v.|acele etmek, telaş, acele
full|adj.|tok, tam, dolu
months|n.|aylar
save|v.|(para) biriktirmek, kurtarmak, biriktirmek
sometimes|adv.|bazen, ara sıra
become|v.|haline gelmek, olmak, dönüşmek
along|adv.|boyunca
hate|v.|nefret etmek, nefret
food|n.|besin, yiyecek, gıda
outside|adv.|dıştan, dışarı, dışarısı
light|n.|aydınlık, nur, ışık
needs|n.|ihtiyaçlar, ister istemez, mecburen
dog|n.|it, köpek
country|n.|yurt, memleket, ülke
clear|adj.|belirgin, açık, net
order|v.|sipariş vermek, emretmek, buyurmak
em|n.|boş içki şişesi, em, matbaacılıkta bir font ölçü birimi
fact|n.|vaka, gerçek durum, vak’a
lord|v.|lord payesi vermek, lord ünvanı vermek, sahip
captain|n.|kaptan, yüzbaşı
six|n.|şeş, altı rakamı, altı
hot|adj.|kızgın, ateşli, acı
funny|adj.|komik
black|adj.|siyahi, kara, siyah
alive|adj.|diri, canlı, sağ
pick|v.|seçmek, pena, gitar penası
feeling|n.|his, duygu
living|adj.|canlı
cause|v.|sebebiyet vermek, sebep olmak, yol açmak
ahead|adv.|ilerde
lose|v.|kaybetmek, yitirmek
king|n.|kral
plan|v.|planlamak, tasarlamak, plan
dinner|n.|akşam yemeği
sighs|expr.|aşk iç çekişlerle oluşan bir dumandır
sort|v.|sıralamak, sınıflandırmak, cins
leaving|n.|ayrılma, terketme, terk
running|n.|çalışma, işletme, koşma
boss|n.|patron
alright|interj.|peki
promise|v.|söz vermek, söz
taken|adj.|alınmış
safe|adj.|güvenilir, emniyette, tehlikesiz
ma|n.|anne, ana, mahkumun sevgilisi
book|v.|ayırtmak, kitap
sent|adj.|giden, gönderme tarihi, gönderilmiş
white|adj.|beyaz, ak, solgun
hour|n.|saat
anybody|pron.|kimse, hiç kimse
small|adj.|az, küçük, ufak
perfect|adj.|kusursuz, mükemmel
lives|n.|hayatlar, ömürler, yaşamlar
special|adj.|özel
parents|n.|anne, baba, ana baba, ebeveyn
john|n.|erkek ismi, tuvalet, herif
himself|pron.|bizzat, eril kendisi, kendi
perhaps|interj.|belki
sounds|n.|sesler, ses efekti
serious|adj.|ciddi, ağır
sick|adj.|hasta
company|n.|bölük, şirket, firma
scared|adj.|korkmuş
uncle|n.|dayı, amca
poor|adj.|kötü, fakir, zavallı
red|adj.|al, kızıl, kırmızı
past|adj.|geçmiş
earth|n.|kara, yeryüzü, zemin
possible|adj.|olabilir, olanaklı, muhtemel
shoot|v.|film çekmek, çekim yapmak (kamera), ateş etmek
touch|v.|ellemek, dokunmak, değmek
sound|n.|ses
top|n.|tepe, baş, üst
ass|n.|kıç
laughs|adv.|eğlenmek için, şaka olsun diye, son gülen iyi güler
cannot|v.|edememek, yapamamak
asking|n.|isteme, sorma, sorarak
win|v.|kazanmak, galip gelmek, zafer
glad|adj.|memnun
control|v.|denetlemek, kontrol etmek, kontrol
hmm|interj.|hım
human|n.|insan, insani
drive|v.|sürmek, araba sürmek, dürtü
hair|n.|tüy, kıl, saç
jack|n.|kriko
bitch|n.|kahpe
luck|n.|şans, talih
murder|v.|cinayet işlemek, öldürmek, öldürme
happens|v.|olanla başa çıkmak, her şeye rağmen gülümse, şansı varmış
air|v.|havalandırmak, yayına girmek, hava
ten|n.|on
daddy|interj.|baba, babacığım
finally|adv.|nihayet, en sonunda
chuckles|v.|kıkırdamak
fast|adj.|süratli, çabuk, hızlı
cold|n.|soğukluk, soğukkanlı, soğuk
seem|v.|gözükmek, görünmek
laughing|n.|gülüş, gülme, gülüşme
words|n.|kavil, ağız kavgası, sözcükler
hospital|n.|hastane
street|n.|cadde, sokak
hang|v.|asmak
dance|v.|dans etmek, dans
meeting|n.|toplantı, buluşma, miting
till|prep.|-e kadar
others|n.|diğerleri
catch|v.|yakalamak, yetişmek, tutma
follow|v.|takip etmek, izlemek
sense|v.|algılamak, hissetmek, algı
sex|n.|seks, cinsiyet
lie|v.|yatmak, uzanmak, yalan söylemek
evening|adj.|akşam
master|n.|efendi, usta
known|adj.|bilinen
dream|v.|rüya görmek, hayal kurmak, hayal
write|v.|yazmak
million|n.|milyon
voice|n.|ses
sweet|n.|tatlı
rather|adv.|oldukça
felt|n.|keçe
sign|v.|imzalamak, imza atmak, alamet
lucky|adj.|talihli, uğurlu, şanslı
somewhere|adv.|bir yere, bir yerde, bir yer
bet|v.|iddiaya girmek, iddia, bahis
jesus|n.|isa peygamber, mesih, hazreti isa
longer|n.|can atan kimse, özlemiş kimse, daha uzun
calling|n.|görev aşkı, meslek, seslenme
worked|adj.|çalışılan, işlenik, işlenmiş
quiet|n.|sessizlik, sakin, sessiz
looked|v.|bakılmak, iyi bakılmak, ...bakılırsa
less|adj.|daha az
pull|v.|çekmek
beat|v.|vurmak, dövmek, yenmek
careful|adj.|itinalı, dikkatli
coffee|n.|kahve
return|v.|geri dönmek, dönmek, iade etmek
secret|n.|sır, gizli
weeks|v.|parasını iki haftada üçe katlamak, iki hafta, birkaç hafta
date|v.|(biriyle) çıkmak, randevuya çıkmak, zaman
seeing|n.|görme
fall|v.|inmek, düşmek, güz
given|adj.|verilmiş, doğuştan olan, düşkün
fault|n.|fay, hata, arıza
straight|adj.|düzgün, doğru, düz
takes|v.|kültürümüzün insanca ilerlemesini sağlamak, daha ne olsun ki, neye malolursa olsun
song|n.|şarkı
future|n.|istikbal, gelecek
gentlemen|n.|bay
loved|adj.|sevgili, aşık, sevilen
changed|adj.|değiştirilmiş, değişmiş
road|n.|yol
calm|v.|sakinleştirmek, sakinlik, soğukkanlı
wonderful|adj.|müthiş, harikulade, harika
mad|adj.|kızgın, deli, çılgın
turned|adj.|kıvrık, katlanmış, döndürülen
drop|v.|düşmek, düşürmek, düşüş
ladies|n.|bayanlar, kadınlar, kadınlar tuvaleti
learn|v.|öğrenmek
step|n.|üvey, adım, basamak
absolutely|adv.|kesinlikle, mutlaka, tamamen
early|adj.|erken
explain|v.|açıklamak, izah etmek
clean|v.|temizlemek, temiz
piece|n.|tane, parça
yesterday|adv.|dün
throw|v.|fırlatmak, atmak, atış
picture|n.|resim
land|v.|karaya ayak basmak, kıyıya çıkmak, karaya çıkmak
feet|n.|fit, ayaklar
wonder|v.|merak etmek, harika
questions|n.|sorular, soru
speaking|n.|tekellüm, konuşma, söyleme
worth|n.|değer
darling|n.|sevgili
dude|n.|ahbap, kanka
giving|n.|verme, bağışlama, hibe
president|n.|başkan
eye|n.|göz
quick|adj.|süratli, hızlı, çabuk
moving|adj.|hareketli
figure|n.|rakam, şekil
state|v.|ifade etmek, bildirmek, belirtmek
strong|adj.|güçlü, kuvvetli
none|pron.|hiçbiri, hiç
amazing|adj.|şaşırtıcı, harika
ones|pron.|birileri
works|n.|yapıtlar, fabrika, tesis
act|v.|davranmak, hareket etmek, eylem
needed|adj.|lazım, ihtiyaç duyulan, gerek
weird|adj.|acayip, tuhaf
law|n.|yasa, hukuk, kanun
worried|adj.|endişeli, kaygılı, endişelenmiş
report|v.|haber vermek, rapor etmek, ihbar etmek
goodbye|n.|güle güle, hoşçakal, elveda
missing|n.|özlem, özleme, noksan
choice|n.|tercih, seçenek
happening|v.|olmak, arız, olma
chief|n.|şef, amir, ana
wedding|n.|nikah, düğün
strange|adj.|garip, yabancı, tuhaf
general|adj.|genel
pain|n.|sancı, sızı, ağrı
kidding|n.|dalga geçme, takılma, şaka yapıyorum
decided|adj.|kararlı
pass|v.|geçirmek, geçmek, geçiş izni
tired|adj.|argın, yorgun, yorgun düşmüş
class|n.|ders, sınıf
officer|n.|memur, subay
kept|adj.|tutulmuş, konumunda tutulan
wake|v.|canlanmak, uyanmak
worse|n.|daha kötüsü, daha da kötüsü, beter
busy|adj.|işlek, meşgul
eh|interj.|ha, öyle mi?, demek öyle?
mistake|n.|yanılgı, hata, yanlış
kiss|v.|öpmek, öpücük
court|n.|mahkeme
building|n.|inşaat, bina
finish|v.|sona ermek, bitirmek, bitmek
during|adv.|zarfında, süresince, sırasında
age|n.|yaş, çağ, devir
ship|n.|gemi
caught|v.|catch-caught, catch fiilinin geçmiş zaman formu, catch fiilinin geçmiş zaman sıfat'-fiil formu
marry|v.|evlenmek
meant|adj.|anlamına gelen, kastedilen
sell|v.|satılmak, satmak
dark|n.|karanlık, koyu
watching|n.|izleme, gözetleme, gözetim
system|n.|sistem
suppose|v.|farz etmek, sanmak, varsaymak
evidence|n.|kanıt, delil
movie|n.|film (sinemada gösterilen), sinema, film
ride|v.|binmek, gezinti
completely|adv.|büsbütün, tamamen
mouth|n.|ağız
totally|adv.|bütünüyle
birthday|n.|yaş günü, doğum günü
tv|n.|televizyon, travesti
forgive|v.|affetmek, bağışlamak
born|adj.|doğan
imagine|v.|hayal etmek
information|n.|bilgi
instead|adv.|yerine
definitely|adv.|kesinlikle
security|n.|güvenlik, emniyet
certainly|adv.|muhakkak, kesinlikle, elbette
film|n.|film
month|n.|ay
lying|n.|uzanma, yalan söyleme, yatacak yer
unless|conj.|mediği sürece, -mezse, -mazsa
train|v.|eğitim vermek, eğitmek, tren
seven|n.|yedi, 7
wear|v.|giymek, takmak, aşındırmak
clothes|n.|giysi, elbise
michael|n.|erkek ismi
hotel|n.|otel
christmas|n.|noel
attack|v.|saldırmak, hücum etmek, atak
round|adj.|yuvarlak
expect|v.|ummak, beklemek, ümit etmek
sing|v.|söylemek, ötmek, şarkı söylemek
terrible|adj.|berbat, korkunç
george|n.|iowa eyaletinde şehir, washington eyaletinde şehir
bag|n.|poşet, torba, çanta
history|n.|geçmiş, tarih
blue|adj.|mavi
near|adv.|yakın
broke|adj.|parasız, züğürt, meteliksiz
station|n.|terminal, istasyon
seriously|adv.|cidden
forever|adv.|ilelebet, ebediyen, sonsuza dek
david|n.|erkek ismi, davut peygamber
frank|n.|frenk, içten, samimi
except|prep.|haricinde, hariç, dışında
thinks|expr.|şöyle düşünüyor
message|n.|ileti, mesaj
entire|adj.|bütün, tüm
joe|v.|çivi çakmak
table|n.|masa, tablo, sofra
talked|adj.|konuşulan
across|adv.|karşıya, (deniz/okyanus) aşırı, karşı karşıya
rock|v.|sallanmak, kaya
lovely|adj.|güzel
handle|v.|idare etmek, işlemek, (meseleyi) ele almak
middle|n.|orta
buddy|n.|ahbap
paid|adj.|paralı
protect|v.|korumak
using|n.|kullanma, kullanan, kullanılan
floor|v.|yeri kaplamak, kat, yer
ran|v.|(geçmiş zamanda) run, iskandinav mitolojisinde deniz tanrıçası
swear|v.|sövmek, küfür etmek, küfretmek
spend|v.|geçirmek (geceyi vb), harcamak
situation|n.|hal, durum
ring|v.|çalmak (telefon/zil), yüzük, halka
anywhere|adv.|nerede olursa olsun, herhangi bir yer, herhangi bir yerde
dangerous|adj.|tehlikeli
bill|n.|senet, fatura
york|n.|alabama eyaletinde şehir, güney carolina eyaletinde şehir, ingiltere'de yerleşim yeri
army|n.|ordu
lead|v.|yol göstermek, rehberlik etmek, sürmek
bought|adj.|satın alınmış
finished|adj.|tamamlanmış, bitmiş
fair|n.|panayır, fuar, açık tenli
sun|n.|güneş
letter|n.|mektup, harf
fool|v.|kandırmak, salak, ahmak
attention|n.|özen, ilgilenme, ilgi
club|n.|kulüp
simple|adj.|sade, yalın, basit
interesting|adj.|ilginç, ilgi çekici
space|n.|aralık, açıklık, mekan
test|v.|sınamak, test, sınav
box|n.|kutu
group|n.|grup
single|adj.|bekar, tek
sitting|n.|oturuş, oturum, oturma
marriage|n.|evlenme, evlilik
join|v.|birleştirmek, katılmak
fear|v.|korkmak, korku
peace|n.|sulh, huzur, barış
forgot|expr.|nedense sormayı unuttum, şifrenizi mi unuttunuz?, tuhaf ama sormayı unuttum
force|v.|zorlamak, baskı yapmak, mecbur etmek
short|adj.|az, alçak, kısa
normal|adj.|olağan, normal, standart
charlie|n.|erkek ismi, vietnam ulusal kurtuluş cephesi üyesi, vietnam ulusal kurtuluş cephesi üyeleri
present|v.|sunmak, takdim etmek, şimdiki zaman
enjoy|v.|tadını çıkarmak, zevk almak
mike|n.|mikrofon, mikrofon takmak, mikrometre
crime|n.|suç
horse|n.|beygir, at
ground|n.|yer, zemin, toprak
american|adj.|amerikan
count|v.|saymak, sayı
area|n.|alan, saha, bölge
charge|v.|yüklemek (enerji/elektrik), suçlamak, şarj etmek
honor|v.|onurlandırmak, şereflendirmek, namus
lunch|n.|öğle yemeği
miles|n.|mil, iowa eyaletinde şehir, teksas eyaletinde şehir
radio|n.|radyo, telsiz
idiot|adj.|salak
ball|n.|balo, yumak, bilye
surprise|v.|şaşırtmak, şaşkınlık, sürpriz
paper|n.|kağıt
key|n.|anahtar, tuş
boat|n.|tekne, bot, kayık
quickly|adv.|hızla, aceleyle, süratle
gold|n.|altın
bar|n.|çubuk, demir çubuk, baro
fish|n.|balık
mark|v.|işaretlemek, iz, işaret
tom|n.|erkek kedi, zenci köle gibi davranmak, zenci köle
wearing|adj.|yıpratıcı
crying|n.|ağlama, ağlayan
accident|n.|rastlantı, kaza
government|n.|hükümet
eight|n.|sekiz
fell|v.|mahvetmek, kesmek, yere yıkmak
cover|v.|örtmek, kaplamak, kılıf
certain|adj.|kesin, belirli, belli
interested|adj.|alakalı, ilgili
deep|adj.|derin
star|n.|yıldız
sea|n.|deniz
agree|v.|aynı fikirde olmak, anlaşmak, razı olmak
problems|n.|aksilikler, olumsuzluklar, aksaklıklar
detective|n.|dedektif
prison|n.|hapishane, cezaevi, hapis
major|adj.|asıl, büyük, başlıca
stick|v.|saplamak, batırmak, yapışmak
offer|v.|teklif vermek, önermek, teklif etmek
difficult|adj.|çetin, zor, zorlu
smart|v.|sızlamak, akıllı, zeki
personal|adj.|kişisel, özel, şahsi
record|v.|kaydetmek, sicil, plak
stopped|adj.|durdurulmuş, durdu, durduruldu
hide|v.|saklamak, gizlemek, saklanmak
whether|conj.|-ip -mediğini, -mek veya -memek, -se de -mese de
bank|n.|banka
trip|n.|seyahat, yolculuk, gezi
relax|v.|rahatlamak, rahatlatmak, dinlenmek
america|n.|amerika
public|n.|halk, kamu, umumi
list|v.|listelemek, liste
afternoon|n.|öğleden sonra, bir şeyin orta ve son bölümü, son kısım
brain|n.|beyin
fix|v.|düzeltmek, onarmak, tamir etmek
bastard|n.|piç
proud|adj.|gururlu, mağrur
tea|n.|çay
service|n.|servis, hizmet
screaming|adj.|çığlık atan, bağıran
forward|adj.|ileri, ileriye doğru
angry|adj.|kızmış, sinirli, hiddetli
park|v.|park etmek, park
soul|n.|ruh
fighting|n.|kavga
peter|v.|miyadını doldurmak, tükenmek, kasa
rich|adj.|zengin
agent|n.|ajan, temsilci, vekil
blow|v.|esmek, üflemek, darbe
paul|n.|idaho eyaletinde şehir
dress|v.|giyinmek, giymek, giysi
mary|n.|kadın ismi, meryem ana
missed|adj.|kaçırılmış, kaybedilmiş, kaçırıldı
scene|n.|sahne, manzara, olay yeri
killing|n.|öldürme, katletme
standing|adj.|ayakta
saved|adj.|korunan, kaydedilmiş, korunmuş
mm|n.|milimetre, aa, mm
respect|v.|saygı göstermek, hürmet, saygı
killer|n.|öldürücü, katil
ice|n.|buz
mess|n.|karışıklık, karmakarışıklık, dağınıklık
tough|adj.|zorlu, çetin, zor
feels|n.|ağlarsa anam ağlar, gerisi yalan ağlar, duygular, duygularını/hislerini kabartmak
church|n.|kilise
sad|adj.|hüzünlü, mahzun, üzücü
cell|n.|hücre
drunk|n.|sarhoş
share|v.|paylaşmak, hisse, pay
camera|n.|fotoğraf makinesi, kamera
within|prep.|dahilinde, içinde, içerisinde
card|n.|kart, iskambil kağıdı
fly|v.|uçmak, sinek
ben|n.|iç oda
girlfriend|n.|kız arkadaş, manita, flört
laugh|v.|gülmek, gülme, gülüş
smell|v.|koklamak, kokmak, koku
broken|adj.|arızalı, kırılmış, kırık
mum|v.|maske ile oynamak, kasımpatı, hanımefendi
honest|adj.|namuslu, dürüst
often|adv.|sık sık
starting|n.|başlama
calls|n.|aramalar, çağrılar
spent|adj.|etkisiz, bitkin, harcanan
third|v.|üç parçaya bölmek, üçüncü sırada gelmek, üçte bir
english|n.|ingiliz
visit|v.|ziyaret etmek, ziyaret
mama|n.|anne
judge|v.|yargılamak, yargıç, hakim
window|n.|pencere
hungry|adj.|acıkmış, aç
dare|v.|cüret etmek
relationship|n.|ilişki, münasebet, bağlantı
moved|adj.|mütehassis, hareket ettirilmiş, etkilenmiş
prove|v.|kanıtlamak, ispat etmek
private|n.|er, mahrem, özel
wall|n.|duvar
seat|v.|oturtmak, koltuk, oturacak yer
position|n.|mevki, pozisyon, konum
lieutenant|n.|teğmen
realize|v.|gerçekleştirmek, farkına varmak
lt|expr.|sağında, solunda, a çarpı
especially|adv.|özellikle
machine|n.|makine
walking|n.|yürüyüş, yürüme, yürüyen
art|n.|sanat
pleasure|n.|zevk, haz, keyif
bloody|adj.|kanlı
college|n.|yüksekokul, kolej, üniversite
french|v.|etten kemiği ayırmak, fransız, fransızca
involved|adj.|ilgili, karmaşık, girift
cry|v.|haykırmak, ağlamak, ağlama
became|v.|çok fazla büyümeden önlenmek, önünü almak/önlemek, (birine veya bir şeye) ne oldu
lived|n.|kısa süren barış, uzun ömürlü, kısa ömürlü
impossible|adj.|olanaksız, imkansız, olmaz
obviously|adv.|besbelli, açık olarak, açıkçası
neither|adj.|hiçbir, ikisinden hiçbiri, ne bu ne öteki
accept|v.|kabullenmek, kabul etmek
boyfriend|n.|flört, sevgili, erkek arkadaş
besides|adv.|ayrıca
queen|n.|kraliçe
teacher|n.|öğretmen
cops|n.|polisler
sake|n.|hatır
loves|v.|sevdiği birini kaybetmek, sevdiği birisini kaybetmek, papatya falı
carry|v.|taşımak
teach|v.|ders vermek, öğretmek
apartment|n.|daire
upset|v.|keyfini kaçırmak, üzmek, üzgün
green|adj.|yeşil
la|adj.|kadınların soyadıyla kullanılan bir sıfat, lantan elementinin simgesi, la
liked|adj.|hoşa giden, beğenilen, sevilen
cute|adj.|sevimli, şirin
evil|n.|fenalık, kötülük, kötü
professor|n.|profesör
contact|v.|ilişki kurmak, irtibat kurmak, temas etmek
joke|n.|komiklik, şaka
cop|n.|polis memuru
huge|adj.|iri, kocaman, devasa
holy|adj.|kutsal
store|v.|depolamak, mağaza, depo
jail|n.|hapishane, hapis, cezaevi
likes|v.|kendi havasında olmak, -in benzerlikleri, hoşlanılan ve hoşlanılmayan şeyler
lawyer|n.|avukat
doubt|v.|kuşkulanmak, şüphelenmek, şüphe
continue|v.|devam ettirmek, sürmek, sürdürmek
appreciate|v.|değerini artırmak, değeri artmak, takdirle karşılamak
cat|n.|kedi
shop|n.|mağaza, dükkan
driving|n.|sürme, sevk, sürücü
congratulations|interj.|kutlarız, tebrikler, gözün aydın olsun
wrote|expr.|bir süredir yazışmıyoruz, senin yazdıklarından anladığım, kitabını yazmış olmak (çok iyi bilmek)
village|n.|köy
quit|v.|bırakmak
field|n.|tarla, alan, saha
james|n.|erkek ismi
wine|v.|şarap sunmak, şarap, şarap rengi
decision|n.|karar
south|n.|güney
sleeping|n.|uyuma, uyku, uyuyan
slow|v.|yavaşlatmak, yavaş, ağır
laughter|n.|kahkaha
island|n.|ada
glass|n.|kadeh, bardak, cam
beginning|n.|başlangıç, baş
cash|n.|nakit, peşin para, peşin
dying|n.|irtihal, ölme, kıkırdama
hundred|adj.|yüz
whose|pron.|kimin, -an, -en
difference|n.|ayrım, fark
plane|v.|düzlemek, düz (yüzey), düzlem
push|v.|itelemek, itmek
continues|v.|devam ettirmek, sürmek, sürdürmek
mmm|n.|aaa
singing|n.|şan
eating|n.|yeme, yiyim, yemek
north|n.|kuzey
mrs|n.|(evli) bayan, evli kadın, hanım
tree|n.|ağaç
madam|n.|madam
gift|n.|allah vergisi, hediye, armağan
truck|n.|kamyon
putting|n.|yerleştirme, koyma
bear|v.|dayanmak, katlanmak, taşımak
board|v.|binmek, tahta döşemek, kurul
grab|v.|kapmak, yakalamak, kapma
beer|n.|bira
stuck|n.|takılmış, çıkmazda, mahsur
magic|n.|sihirbazlık, büyü, sihir
support|v.|desteklemek, destek
rules|n.|tüzük, töre, esaslar
grunts|n.|ceza evi büfesinde satılan ürünler, deniz piyadeleri
partner|n.|eş, ortak
reach|v.|ulaşmak, ermek, erişmek
wind|v.|sarmak, dolamak, yel
colonel|n.|albay
max|adj.|en çok, maksimum, en fazla
immediately|adv.|hemen, derhal, acilen
seconds|n.|ikinci kalite mal, defolu mal, ıskarta mal
thousand|n.|bin
gives|v.|zenginden alıp fakire vermek, iğneci, redbull kanatlandırır
experience|n.|deneyim, tecrübe
cheers|interj.|şerefe, sağlığına, teşekkürler
victim|n.|kurban, felaketzede, mağdur
upon|prep.|üzerine, üzerinde, üstünde
computer|n.|bilgisayar
christ|n.|mesih
planet|n.|gezegen
promised|adj.|söz verilmiş, adaklı, söz verilen
bus|n.|otobüs
henry|n.|henri, güney dakota eyaletinde yerleşim yeri, illinois eyaletinde şehir
dirty|v.|pisletmek, pis, kirli
search|v.|araştırmak, aramak, araştırma
staying|n.|kalma, oturma, kalım
dreams|n.|rüyalar, hayaller
arrest|v.|tutuklamak
holding|n.|holding
suddenly|adv.|birdenbire, birden, aniden
usually|adv.|genellikle, çoğunlukla
lots|adj.|bir sürü
shoes|n.|ayakkabılar, arabanın tekerleri veya jantları
er|abrev.|acil servis, erbiyumun simgesi
jump|v.|sıçramak, zıplamak, atlamak
rid|v.|rid - rid, temizlemek, başından atmak
knock|v.|kapı çalmak
owe|v.|borçlu olmak, minnettar olmak, borç bilmek
harry|v.|yağmalamak, soymak, eziyet etmek
grow|v.|yetişmek, büyümek
worst|v.|yenmek, en fena, en kötü
river|n.|nehir
aunt|n.|hala, teyze
patient|n.|hasta, sabırlı
kitchen|n.|mutfak
fat|v.|şişmanlatmak, semirtmek, yağ
passed|adj.|geçen, geçmiş, geçti
final|n.|final, nihai, kesin
summer|n.|yaz
bob|v.|sık sık alçalıp yükselmek, inip çıkmak, kısa kesmek
listening|n.|dinleme
escape|v.|kaçmak, firar, kaçış
everywhere|adv.|her yer
moon|n.|ay
arms|n.|koyun, kucak, silahlar
turns|n.|menstrüasyon kanamaları
address|v.|hitap etmek, söylev, adres
match|v.|eşleştirmek, eşlemek, eş
gasps|v.|nefes nefese kalmak, nefesi kesilmek, nefesini tutmak
grand|adj.|büyük
yep|interj.|evet
shh|interj.|şişt!
nervous|adj.|gergin, sinirli, asabi
de|adv.|tamamen, aşağı, almanya
choose|v.|seçmek
themselves|pron.|kendileri, kendilerini, kendilerine
decide|v.|karar vermek
mate|n.|mat, ahbap
drinking|v.|içmek, içki alışkanlığı, içki
press|v.|basmak, bastırmak, baskı yapmak
bother|v.|dert vermek, can sıkmak, sıkmak
foot|n.|ayak
blame|v.|suçlamak, ayıplamak, kabahat
crap|v.|sıçmak, pislik, çerçöp
drugs|n.|uyuşturucu, ecza, ilaçlar
type|v.|yazmak, tür, tip
rings|n.|yüzükler
mission|n.|vazife, misyon, görev
named|adj.|namında, diye, adlandırılan
heaven|n.|cennet
picked|adj.|toplanmış, seçkin, seçilmiş
paris|n.|paris, arkansas eyaletinde şehir, illinois eyaletinde şehir
race|v.|yarışmak, yarış, ırk
risk|n.|risk
books|n.|kitaplar, kayıtlar
further|adv.|daha ileri, daha öte
danny|n.|erkek ismi, kafa yırtığı
action|n.|çalışma, davranış, aksiyon
allowed|adj.|izinli, izin verilmiş, izin verilen
orders|n.|siparişler
learned|adj.|bilgili
price|n.|bedel, fiyat, ücret
arrived|adj.|ulaşmış, vardı (nakliyat), vardı
nick|v.|çentmek, çentik
otherwise|adv.|aksi halde, aksi takdirde
pictures|n.|sinema, resimler
fit|v.|uymak, uygun, zinde
smoke|v.|sigara içmek, duman
favor|v.|kayırmak, iyilik etmek, iyilik
played|v.|çalınmak
notice|v.|farkına varmak, fark etmek, duyuru
awesome|adj.|müthiş, harika, mükemmel
smile|v.|gülümsemek
director|n.|yönetici, yönetmen, müdür
guard|v.|korumak, nöbetçi, muhafız
begin|v.|başlatmak, başlamak
spot|n.|leke, benek, nokta
surprised|adj.|şaşırmış
innocent|adj.|masum
narrator|n.|anlatan
herself|pron.|kendisine, kendisi, dişil kendisi
london|n.|londra
feelings|n.|gönül, his dünyası, iç alemi
enemy|n.|hasım, düşman
battle|n.|savaş, muharebe
ourselves|pron.|kendimiz, bizler, biz
alex|n.|erkek ismi, oklahoma eyaletinde yerleşim yeri
dollars|v.|dolar bozdurmak, dolar bozmak, döviz bırakmak
allow|v.|izin vermek, müsaade etmek
nine|n.|dokuz
gay|n.|gey, şen
department|n.|departman, daire, bölüm
guilty|adj.|suçlu
apart|adv.|ayrı
earlier|adj.|sabık, eski, önce
duty|n.|görev, vazife
jim|n.|heyhey, pijama, harika
suit|v.|uygun olmak, uymak, uygun gelmek
bell|n.|çan, zil
west|n.|batı, batıdaki, batıya doğru
legs|n.|bacaklar
hero|n.|kahraman
destroy|v.|tahrip etmek, imha etmek
stage|v.|sahneye koymak, sahnelemek, evre
bunch|n.|salkım, demet
according|n.|uyma, binaenaleyh, uyarak
chicken|n.|tavuk, piliç
bigger|adj.|daha büyük
grunting|n.|domuz gibi homurdanma, homurdanma
low|n.|alçak, düşük, az
helping|n.|yardım, yardım etme, katkıda bulunma
admit|v.|itiraf etmek, kabul etmek
closed|adj.|kapalı
names|n.|esame, ad, adlar
witness|v.|şahit olmak, şahitlik etmek, tanık olmak
upstairs|n.|üst kat
arm|n.|kol
steal|v.|aşırmak, hırsızlık yapmak, çalmak
jimmy|v.|levye ile açmak, ufak levye ile açmak (hırsızların kullandığı), açmak
kick|v.|tekmelemek, tepmek, tekme atmak
twice|adv.|iki kez, iki sefer, iki kere
cross|v.|karşıya geçmek, çarmıh, haç
ways|n.|yollar, kızak
sergeant|n.|çavuş
indeed|adv.|doğrusu, aslında, doğrusu istenirse
gas|n.|benzin, gaz
keeping|n.|geçindirme, bakım, koruma
energy|n.|enerji
pregnant|adj.|gebe, hamile
waste|v.|boşa harcamak, israf etmek, sarfiyat
helped|n.|ensar, çıkar yol yok, çaresi yok
fired|adj.|ateş edilmiş, kovulmuş, ateşlenmiş
favorite|n.|favori, gözde
tony|adj.|lüks, zarif, son moda
taste|v.|tatmak, tat, lezzet
locked|adj.|kilitli
places|v.|torpili olmak, mesleğinde ilerlemek, başarılı olmak
writing|n.|yazma, yazım, yazı
adam|n.|adem baba, adem, ademelması
brothers|n.|erkek kardeşler, ikili sapan
starts|expr.|başlangıç
prince|n.|prens
form|v.|biçimlendirmek, şekillendirmek, oluşturmak
sold|adj.|satılmış, satılan, satıldı
silly|adj.|saçma sapan, aptalca, ahmak
mention|v.|değinmek, bahsetmek
build|v.|inşa etmek
throat|n.|boğaz
hole|n.|çukur, delik
figured|adj.|şekilli, resmedilmiş, çizilmiş
track|v.|izlemek (iz vb), izlemek, iz
ringing|n.|çalma (zil vb), çınlama, çınlayan
lock|v.|kilitlemek, kilit
leg|n.|ayak (mobilya/pergel), bacak
above|adv.|üzerine, yukarısında, yukarıda
hiding|n.|dayak, saklama, sopa
steve|n.|kot pantolon
seemed|expr.|göründü
breakfast|n.|kahvaltı
engine|n.|motor
written|adj.|yazılı
complete|v.|tamamlamak, tam, bütün
video|n.|video terminal, ekran, video filmi
applause|n.|alkış
however|adv.|bununla birlikte, yine de
pressure|n.|basınç, baskı
fresh|adj.|taze
weapon|n.|silah
sky|n.|gök, gökyüzü
stole|n.|atkı, şal, etol
study|v.|incelemek, çalışmak, çalışma
burn|v.|yakmak, yanmak
reading|adj.|okuma
crowd|n.|kalabalık
treat|v.|davranmak, işlemek, muamele etmek
roll|v.|yuvarlanmak, yuvarlamak, rulo
double|v.|iki misli yapmak, ikiye katlamak, iki kat
spirit|n.|ispirto, ruh, can
danger|n.|tehlike
cost|v.|mâl olmak, masraf, ücret
empty|v.|boşaltmak, boş
level|n.|seviye, düzey, kademe
memory|n.|anı, bellek, hatıra
itself|pron.|kendisi, kendi, bizzat
acting|n.|temsil, oyun, oynama
interest|v.|ilgilendirmek, çıkar, faiz
nose|n.|burun
plans|n.|planlar, tasarımlar
following|n.|taraftarlar, takip etme, izleyen
bathroom|n.|tuvalet
built|adj.|yapılı, iri yarı, cüsseli
closer|n.|sonlandırıcı, daha yakın, satışla sonuçlandıra
ray|n.|ışın
sarah|n.|kadın ismi
band|n.|bant, bando, şerit
groans|v.|inlemek
apparently|adv.|görünüşte
excited|adj.|heyecanlı
richard|n.|erkek ismi
losing|n.|kaybediş, kaybetme, zarar gören
animals|n.|hayvanlar
flight|n.|uçuş
nature|n.|mahiyet, doğa, tabiat
raise|v.|büyütmek (çocuk), yükseltmek, artırmak
pop|v.|patlatmak, pat diye sormak, patlatmak (mısır)
client|n.|müvekkil, müşteri
bomb|v.|bombalamak, bomba
neck|n.|boyun
suspect|v.|şüphelenmek, kuşkulanmak, şüpheli
warm|v.|ısıtmak, ısınmak, ılık
extra|adj.|ekstra
bottle|n.|şişe
van|n.|elebaşı, kamyonet
heavy|adj.|ağır
mommy|interj.|anne, anneciğim
dogs|n.|köpekler
wild|n.|yaban, vahşi, yabani
ridiculous|adj.|gülünç
simply|adv.|basit bir şekilde, basitçe
lee|n.|rüzgar almayan yer, rüzgardan koruncak yer, korunmalı taraf
animal|adj.|hayvan
showed|adj.|dışa vurulmuş, sergilenmiş, kanıtlanmış
billy|n.|cop
shooting|n.|ateş etme
keeps|adv.|temelli olarak, sonuna kadar, her zaman için
camp|v.|kamp yapmak, kamp kurmak, kamp
guns|v.|birinin çanına ot tıkamak, en önemli destekçileri getirmek, en önemli dayanakları ileri sürmek
medical|n.|medikal, tıbbi
shame|v.|utandırmak, utanma, ayıp
hoping|n.|umma, ümidiyle
whom|pron.|kime, kim, kimi
bird|n.|kuş
majesty|n.|kral veya eşine verilen unvan, haşmet, görkem
flowers|n.|çiçekler
famous|adj.|ünlü, meşhur
asleep|adj.|uyuyan, tembel, uyuşuk
beauty|n.|güzellik
driver|n.|sürücü, şoför
keys|n.|anahtarlar, ana resimler
rain|v.|yağmur yağmak, yağmur
awful|adj.|berbat, çok kötü, fena
large|adj.|iri, geniş, büyük
local|adj.|lokal, yerel, yerli
deserve|v.|hak etmek, layık olmak
goddamn|adj.|kahrolası
stone|n.|taş
jane|n.|kadın, kadın ismi, missouri eyaletinde yerleşim yeri
grace|n.|lütuf, incelik, nezaket
consider|v.|durumu değerlendirmek, dikkate almak, göz önünde bulundurmak
weekend|n.|hafta sonu
wondering|n.|merak etme, meraklanma, mükemmel
lay|v.|sermek
plenty|n.|bolluk, bereket, mebzuliyet
willing|adj.|hevesli, gönüllü, istekli
pants|n.|pantolon
sweetheart|interj.|canım, tatlım
skin|v.|soymak, ten, deri
excellent|adj.|mükemmel
asshole|n.|kıç deliği
beach|n.|sahil, kumsal, plaj
faith|n.|güven, inanç, iman
beg|v.|dilenmek, yalvarmak
responsible|adj.|mesul, sorumlu
military|adj.|askeri
cheering|n.|alkış, tezahürat, iç açıcı
opportunity|n.|olanak, imkan, fırsat
common|adj.|alışılmış, alelade, yaygın
bottom|n.|dip, alt
german|n.|alman, almanca
whoever|pron.|her kim, herhangi, kim/her kim ... ise
cook|v.|yemek pişirmek, pişirmek, aşçı
walked|expr.|yaşamadan yargılama, azrail yokladı, biri mezarımın üstünden geçti
papers|n.|evrak
justice|n.|adalet
hall|n.|hol, salon, büyük salon
commander|n.|komutan, kumandan
drug|n.|ilaç
main|n.|esas, ana, baş
knife|n.|bıçak
devil|n.|iblis, şeytan
necessary|adj.|gereken, gerekli
although|conj.|her ne kadar, rağmen
princess|n.|sultan, prenses
lights|n.|gözler, akciğer (sakatat), ışıklar
flying|n.|uçma, uçuş, uçan
dick|n.|penis
rose|adj.|gül
knowing|adj.|haberdar, haberi olan, bilen
clearly|adv.|açık bir biçimde, açıkça
hat|n.|şapka
agreed|adj.|mutabık, anlaşmış, kararlaştırılmış
johnny|n.|herif, tip, kondom
corner|n.|köşe
code|v.|şifrelemek, kodlamak, şifre
note|v.|not etmek, senet, nota
tommy|n.|ingiliz askeri, somun anahtarı
due|adj.|vadesi dolmuş
correct|v.|düzeltmek, doğru
apologize|v.|özür dilemek, af dilemek
language|n.|lisan, dil
stars|n.|yıldızlar
faster|adv.|daha hızlı
cars|n.|arabalar
folks|n.|ev halkı, kimseler, insanlar
bullshit|v.|saçmalamak, saçmalık, zırva
fellow|n.|herif, hemcins, bir bilim kurumunun üyesi
several|adj.|birçok
grandma|n.|nine
shows|v.|televizyon programlarında görünmek, televizyon programlarına katılmak, televizyon programına katılmak
leader|n.|lider, baş, önder
leaves|n.|kitap yaprağı, yapraklar
restaurant|n.|restoran
east|n.|doğu
shouting|n.|bağırış
blind|adj.|kör
ghost|n.|ruh, hayalet
cup|n.|kupa, fincan
gotten|adj.|alınan
tight|adj.|sıkı
conversation|n.|konuşma, sohbet, muhabbet
tells|expr.|bu yeter, içimden bir ses diyor ki, izaha gerek yok
lies|v.|yalan söylemek, romantik yalanlar söylemek, nabız yoklamak
nor|conj.|ne de, ne, nor operatörü
pulled|adj.|çekilmiş, çekilen
hanging|n.|asılma, ipe çekme, sarkma
speed|n.|sürat, hız
stories|v.|kesmek, desteksiz atmak, hikayeler yazmak
health|n.|sıhhat, sağlık
advice|n.|nasihat, tavsiye, öğüt
held|v.|itibarı olmak, mal edilmek, üzerine kalmak
uh-huh|interj.|hı-hı, aynı fikirde olunduğunu belirten ünlem, olumlu cevap anlamına gelen bir ünlem
murdered|adj.|maktül, öldürülen, öldürülmüş
beyond|n.|öte, ötede, ötesi
rule|v.|hüküm sürmek, hükmetmek, kural
hardly|adv.|ancak, güçlükle, zorla
possibly|adv.|muhtemelen, olabilir, herhalde
inspector|n.|müfettiş
cousin|n.|kuzen
trial|n.|yargılama, duruşma, deneme
emergency|n.|acil vaka, tehlike, emniyet
ought|v.|gerekli, lazım, gerekir
eddie|n.|burgaç, anafor
somehow|adv.|iyi kötü, bir türlü, nasıl olursa
hearing|n.|duruşma, duyma, celse
states|v.|amerika'ya gitmek, birleşik devletler başkanıyla tanışmak, birleşik devletler'e gitmek
account|n.|hesap
spoke|v.|tekerleğe çomak sokmak, tekerlek parmaklığı, jant teli
file|n.|eğe, dosya
understood|adj.|anlaşılan, anladım, anlaşıldı
angel|n.|melek
tape|n.|kaset, bant, şerit
milk|n.|süt
powerful|adj.|güçlü, kuvvetli
weapons|v.|silah bırakmak, silah kaçırmak, silah kaçakçılığı yapmak
practice|v.|uygulamak, alıştırma yapmak, yapmak
manager|n.|menajer, idareci, yönetici
pardon|v.|bağışlamak, affetmek, af
vote|v.|oy vermek, oy kullanmak, oylamak
jake|adj.|yeterli olan, evsiz barksız tip, sarhoş
national|adj.|ulusal, milli
career|n.|kariyer
minister|n.|bakan
super|adj.|süper
taught|adj.|öğretilen, öğrenmeye tabi tutulmuş
robert|n.|erkek ismi
biggest|adj.|en büyük
plays|n.|oyunlar
natural|adj.|tabii, doğuştan, natürel
dancing|n.|dans etme, dans
copy|v.|kopyalamak, kopya etmek, suret
plus|adj.|artı
martin|n.|kırlangıç, erkek ismi, güney dakota eyaletinde şehir
cake|n.|kek, pasta
freedom|n.|bağımsızlık, özgürlük
among|prep.|arasına, arasında
breath|n.|nefes, soluk
operation|n.|operasyon, işletme, harekat
chris|n.|erkek ismi
crew|n.|tayfa, mürettebat
challenge|v.|düelloya davet etmek, karşı çıkmak, meydan okumak
market|n.|çarşı, pazar, piyasa
meat|n.|et
towards|adv.|doğru, karşı, -e doğru
bringing|v.|getirmek, getiri, getiren
dropped|adj.|polis tarafından yakalanmış, tutuklanmış, yakayı ele vermiş
student|n.|öğrenci
lied|n.|bir tür alman şarkısı
strength|n.|güç, kuvvet
size|n.|büyüklük, ölçü, boyut
breathe|v.|soluk almak, nefes almak, solumak
color|n.|boya, renk
monster|n.|gaddar adam, canavar
loud|adj.|yüksek (ses), yüksek sesle
photo|n.|foto
aw|expr.|aman tanrım!
nearly|adv.|hemen hemen, neredeyse
sight|n.|görünüş, görme yeteneği, görme
greatest|adj.|azami, azam, en büyük
games|n.|spor, oyunlar
bridge|n.|köprü
dressed|adj.|giyinmiş, giyinik
arrested|adj.|mevkuf, tutuklu, tutuklanmış
horrible|adj.|berbat
coach|n.|otobüs
planning|n.|planlama
checked|adj.|kontrolü yapılmış, kareli, ekose
breaking|n.|ufalanma, kırılma, bozma
noticed|adj.|algılanan, gözlemlenen, fark edilen
fantastic|adj.|harika, fantastik, şahane
screams|v.|çığlıklar duymak, sevinç çığlıkları
serve|v.|hizmet etmek
ideas|n.|efkar, fikirler
investigation|n.|soruşturma, araştırma
center|v.|ortalamak, merkez
older|adj.|daha yaşlı, büyük, eski
pack|v.|ambalajlamak, sarmak, paket
soldiers|n.|askerler
nonsense|n.|safsata, saçmalık, anlamsız
doc|n.|doktor, belge, bel
project|n.|proje
training|n.|eğitim, alıştırma, idman
example|n.|örnek
trick|v.|oyuna getirmek, oyun etmek, kandırmak
prepared|adj.|hazır
science|n.|ilim, bilim
united|adj.|birleşmiş, birleştirilmiş, birleşik
travel|v.|gezmek, seyahat etmek, yolculuk etmek
incredible|adj.|inanılmaz
grandpa|n.|dede
paying|n.|tediye, ücret, paralı
character|n.|karakter, huy, mizaç
teeth|v.|diş çıkarmak, dişler, (bir şeyin) en şiddetli noktası
criminal|n.|sabıkalı, suçlu, cezai
charles|n.|erkek ismi, kokain, beyaz adam
chinese|adj.|çinli
truly|adv.|tamamen, kanunen, sahiden
honestly|adv.|dürüst olarak, gerçekten, dürüst olmak gerekirse
bro|n.|kardeş, kardeşim, kanka
survive|v.|uzun yaşamak (birinden), baki kalmak, daha uzun yaşamak
bobby|n.|aynasız, polis memuru, polis
target|n.|hedef, amaç, gaye
feed|v.|beslemek
nurse|v.|hemşirelik yapmak, meme vermek, bakıcılık yapmak
fake|n.|sahte, taklit
records|n.|kayıtlar, dosyalar, evrak
breathing|n.|an, soluk, soluma
sweetie|n.|manita, dalga, sevgilim
numbers|n.|şiir, çokluk, sayılar
oil|n.|yağ
suicide|n.|intihar
belong|v.|(birine) ait olmak
whoo|n.|baykuş sesi, guk guk (baykuş sesi)
perfectly|adv.|mükemmelen
amy|n.|kadın ismi, arkadaş
forgotten|adj.|unutulmuş
remain|v.|geriye kalmak, kalmak (bir pozisyonda/derecede vb), kalmak (sessiz/hareketsiz)
original|adj.|özgün, orijinal, asıl
papa|n.|baba, baba (özellikle çocuk dilinde)
onto|prep.|üstüne, üzerine, onto
concerned|adj.|ilgili, endişeli
credit|n.|kredi
ugh|interj.|öf, ıy
invited|adj.|davetli, davet edilmiş
discuss|v.|görüşmek, tartışmak, ele almak
research|v.|incelemek, araştırmak, araştırma yapmak
easier|adj.|daha kolay, kolay
view|v.|incelemek, görüş, bakış
chair|n.|koltuk, sandalye, iskemle
hurts|v.|can evinden vurmak, bu dişim ağrıyor, gurur sadece acı verir
strike|v.|çarpmak, vurmak, çarpma
roger|v.|düzüşmek, yatmak (seks), yatağa atmak
fill|v.|doldurmak
condition|v.|şartlandırmak, hal, koşul
mountain|n.|dağ
dr|n.|dram, doktor
nowhere|n.|hiçbir yer, uzak bir yer, bilinmeyen yer
sheriff|n.|seçimle gelen sınırlı yetkili yönetici, şerif bir polis amiri, kasaba polis şefi
turning|n.|çevirme dili, köşe, dönüş yeri
brown|adj.|kahverengi
recognize|v.|tanımak
heads|n.|tura
audience|n.|izleyiciler veya dinleyiciler topluluğu, seyirci, izleyici
jealous|adj.|kıskanç
pretend|v.|yapar gibi görünmek
society|n.|toplum
finding|n.|bulma, bulgu
shirt|n.|gömlek
comfortable|adj.|rahat
meaning|n.|mana, meal, anlam
guest|n.|davetli, konuk, misafir
pieces|n.|parça
dry|v.|kurulamak, kurutmak, kurumak
letting|n.|bırakma, bozma, kiraya verme
began|v.|başlamadan bitmek, dünya kurulduğundan beri, (hah şimdi) taşlar yerine oturdu işte
aye|n.|kabul oyu, muhakkak, evet
jeff|n.|kasket, biri uzun biri kısa boylu ikili, iyi polis kötü polis
female|n.|kadın, dişi
release|v.|piyasaya sunmak, piyasaya sürmek, satışa çıkarmak
ho|n.|holmiyumun simgesi, fahişe, orospu
cards|n.|kart, kartlar, iskambil kağıtları
pray|v.|dua etmek
unfortunately|adv.|maalesef
balls|n.|hayalar, saçma, büzük
destroyed|n.|telef olmuş, imha edilmiş, harap olmuş
ended|expr.|bitti
universe|n.|alem, kainat, evren
prepare|v.|hazırlamak
opinion|n.|kanaat, kanı, düşünce
movies|n.|sinema, filmler
soldier|n.|asker
wash|v.|yıkanmak, aşındırmak, yıkamak
program|v.|programlamak, program
heat|v.|ısıtmak, sıcaklık, hararet
usual|adj.|olağan
ticket|n.|bilet
stolen|adj.|çalınan, çalıntı, çalınmış
prefer|v.|tercih etmek, yeğlemek
aware|adj.|haberdar, farkında
surely|adv.|muhakkak, hakikaten, elbette
male|n.|erkek
base|v.|dayandırmak, üs, baz
matters|n.|umur
lift|v.|havalanmak, kaldırmak, asansör
lab|n.|laboratuvar, labrador retriever (köpek)
command|v.|emretmek, buyurmak, kumanda
proof|n.|kanıt, ispat
cream|n.|kaymak, krema, krem
selling|n.|satış
believed|adj.|inanılan
create|v.|meydana getirmek, oluşturmak, yaratmak
afford|v.|parası yetmek, satın almaya gücü yetmek
sunday|n.|pazar
total|n.|toplam, tutar
dumb|n.|halter, dili tutulmuş, suskun
threw|v.|throw - threw, attı
france|n.|fransa
birth|n.|doğum
created|adj.|yaratılan, yaratılmış, yaratılma
realized|adj.|tamamlanmış, tamamlanan, bitirilmiş
british|n.|ingiliz, ingiliz halkı, ingilizler
noise|n.|ses, gürültü
nuts|n.|çerez, hayalar, sert kabuklu yemişler
students|n.|öğrenciler
birds|n.|kuşlar, illinois eyaletinde yerleşim yeri
social|adj.|sosyal, sokulgan, toplumsal
brilliant|adj.|nefis, parlak, muhteşem
bodies|v.|oturup cesetlere bakmak, uysal bedenler, yasama organları
tie|v.|bağlamak, bağ, alaka
opened|adj.|açılmış
ours|pron.|bizim, bizimki
bucks|n.|dolar, alabama eyaletinde şehir
kevin|n.|erkek ismi, montana eyaletinde yerleşim yeri
mister|n.|bey, bay
ugly|adj.|çirkin
ryan|n.|erkek ismi, iowa eyaletinde şehir, oklahoma eyaletinde yerleşim yeri
focus|v.|odaklanmak, odaklamak, odak noktası
dan|n.|israil'de bir aşiret, şamandıra
opens|expr.|açılma zamanı, açık, açıyor
exist|v.|var olmak
followed|adj.|takip edilen
england|n.|ingiltere
draw|v.|karalamak, çekmek, çizmek
purpose|n.|gaye, maksat, amaç
letters|n.|bilim, edebiyat, yazın
daniel|n.|erkek ismi
opening|n.|açma, açılış, ağız
bullet|n.|mermi, kurşun
anna|n.|kadın ismi, illinois eyaletinde şehir, ohio eyaletinde yerleşim yeri
lately|adv.|son zamanlarda
stayed|n.|kablolu yaya köprüsü, gizli kalmış, bugün yataktan hiç çıkmamalıymışım
falling|n.|düşüş (uyuşturucu vb etkisinden), düşme, sukut
season|n.|sezon, mevsim
ends|n.|para, ayakkabı, uçlar
suggest|v.|önermek
joy|n.|keyif, neşe, sevinç
distance|n.|mesafe, uzaklık
responsibility|n.|sorumluluk, mesuliyet
whenever|adv.|herhangi bir zamanda, ne zaman ... ise, her ne zaman olursa
issue|n.|(dergi/gazete) nüsha, konu, mesele
thousands|n.|binler
process|v.|işlemek, işlem, süreç
sword|n.|kılıç
shower|n.|sağanak, duş
weak|adj.|halsiz, cılız, güçsüz
fucked|v.|berbat olmak (iş/işler), hapı yutmak, kafayı üşütmüş olmak
lonely|adj.|yalnız
happiness|n.|mutluluk
eric|n.|erkek ismi
tiny|adj.|mini mini, ufacık, minicik
desk|n.|çalışma masası, okul sırası
pool|n.|havuz
property|n.|mal mülk, mülkiyet, mülk
forced|adj.|zoraki, mecbur
settle|v.|yerleşmek
indistinct|adj.|belirli belirsiz, belirsiz, hayal meyal
weight|v.|ağırlık yapmak, sıklet, ağırlık
received|adj.|kabul edilmiş, geçer, geçerli
gang|n.|çete
bite|v.|ısırmak, lokma
friday|n.|cuma, cuma günü
disappeared|n.|ortadan kaybolmuş kişi, kayıp kişileri araştırma gezici merkezi, kayıp kişiler büro amirliği
interview|v.|görüşmek, görüşme, mülakat
expecting|n.|ağırayak, hamile, gebe
surgery|n.|ameliyat
horses|n.|atlar
mayor|n.|belediye başkanı
babe|n.|bebeğim, bebek, kız
ancient|adj.|antik
handsome|adj.|hoş, yakışıklı
thomas|n.|erkek ismi, batı virginia eyaletinde şehir, oklahoma eyaletinde şehir
saturday|n.|cumartesi
staff|n.|kadro, personel
lines|n.|ana hatlar, replik, yüzey çizikleri
unit|n.|birim, ünite
fan|n.|pervane, hayran, taraftar
gentleman|n.|centilmen, beyefendi
introduce|v.|tanıtmak, tanıştırmak
fate|n.|kader
split|v.|yarmak, bölmek
recently|adv.|son dönemlerde, son zamanlarda
expected|adj.|beklenen, umulan
add|v.|toplamak, eklemek, ilave etmek
ordered|adj.|sıralı, ısmarlama, düzgün
slowly|adv.|yavaş yavaş, yavaşça
alarm|n.|alarm
member|n.|üye
slept|adj.|uyumuş, uykuda
signed|adj.|imzalı
enter|v.|girmek, içeri girmek
spanish|n.|ispanyolca, ispanyol
garden|n.|bahçe
brings|expr.|her yeni gün yeni imkanlar getirir, her yeni gün kendi ekmeğini getirir, sıradaki madde ise
brave|adj.|yiğit, cesur
pig|n.|domuz
model|n.|model, manken
finger|n.|parmak
medicine|n.|tıp, ilaç
access|n.|erişim, erişme, giriş
failed|adj.|arızalı, başarısız, başarısız oldu
flat|n.|düz yüzey, daire, yassı
easily|adv.|rahatlıkla, rahatça, kolayca
discovered|v.|keşfedilmek, açığa çıkarılmak, bulunmak
based|adj.|esaslı, yerleşik, temeli
screw|v.|vidalamak, vida
insane|adj.|delice, deli
cares|n.|yaşam kaygıları, ne yaptığıma kimse önem vermiyor, git başkasına anlat
weather|n.|hava, hava durumu
fingers|n.|ince sac sızdırmazlık parçaları
san|n.|basarva, buşmen, khve
scott|n.|louisiana eyaletinde şehir, ohio eyaletinde yerleşim yeri, new york eyaletinde yerleşim yeri
path|n.|yol
soft|adj.|cıvık, yumuşak
harm|n.|zarar
style|n.|biçim, tarz, biçem
community|n.|halk, camia, topluluk
sees|v.|gördüğü şey karşısında paniğe kapılmak, onun fikrine göre, aklınca
basically|adv.|aslen, esasen, temelde
signal|v.|sinyal vermek, sinyal, işaret
nope|interj.|yok, ı-ıh, hayır
spare|v.|kıymamak, ayırmak, boş (zaman)
speech|n.|konuşma
covered|adj.|örtülü
shake|v.|sallanmak, titremek, sallamak
loose|adj.|oynak, gevşek, bol
snow|n.|kar
russian|n.|rusça
lake|n.|göl
bright|adj.|parlak
roof|n.|çatı
sending|n.|gönderme
paint|v.|boyamak, boya
remind|v.|hatırlatmak
pal|n.|ahbap
naked|adj.|çıplak
post|v.|postalamak, makam, direk
sugar|n.|şeker
heading|n.|başlık
streets|n.|sokaklar
damage|v.|zarar vermek, zarar, hasar
silence|v.|susturmak, suskunluk, sessizlik
doors|n.|kapılar, kapaklar (dolap vb)
pete|expr.|doğru söylüyorum, doğruyu söylüyorum, florida eyaletinde şehir
ed|v.|atfetmek, isnat etmek, hamletmek
success|n.|muvaffakiyet, başarı
wet|v.|ıslatmak, ıslak, yaş
nah|interj.|hayır
amount|n.|miktar, tutar, meblağ
members|n.|üyeler
kate|n.|kadın ismi
manage|v.|işletmek, idare etmek, yönetmek
safety|n.|emniyet, güven
returned|adj.|geri döndürülmüş, geri gelen, iade edilmiş
harder|adj.|sert, daha sert, daha zorlu
fbi|n.|fbı ajanı, fbi ajanı
block|v.|engellemek, bloke etmek, blok
showing|n.|gösterme
fancy|adj.|süslü
chef|n.|aşçı, aşçıbaşı, şef
contract|v.|(hastalığa) yakalanmak, sözleşme, kontrat
dig|v.|kazmak
chest|n.|göğüs, sandık
good-bye|n.|veda, elveda, hoşçakal
drinks|n.|içecekler, içkiler
buried|adj.|gömülü
brian|n.|erkek ismi
trade|n.|ticaret
journey|n.|yolculuk, seyahat
stomach|n.|mide
changes|n.|değişiklikler, değişiklik, gidip gelmeler
details|n.|teferruat, ayrıntılar
thoughts|n.|efkar, düşünceler
divorce|v.|boşanmak, boşamak, boşama
funeral|n.|cenaze
maria|n.|kadın ismi
football|n.|futbol
reality|n.|gerçeklik
theory|n.|teori
gosh|interj.|hay allah, hay allah !, vay canına
ruined|adj.|harap olmuş, bozuk
gate|n.|kapı, geçit
william|n.|erkek ismi
spread|v.|yaymak, yayılmak
japanese|adj.|japon
sudden|adj.|ani
coat|v.|kaplamak, kaban, mont
sooner|adv.|daha çabuk, çabuk, daha önce/erken
cheese|n.|peynir
larry|n.|harç çapası, sulu harç
spring|n.|memba, ilkbahar, bahar
page|n.|sayfa
ears|v.|can kulağı ile dinlemek, kulağını çekmek, kulaklarını dikmek
simon|n.|saf, budala, gerçek
castle|n.|kale
hidden|adj.|gizli, saklı
storm|n.|fırtına
cos|n.|cos
personally|adv.|şahsen
artist|n.|artist, sanatkar, sanatçı
hill|n.|tepe
exciting|adj.|heyecanlı, heyecan verici
permission|n.|müsaade, izin
jerry|n.|oturak, lazımlık, alman askeri
expensive|adj.|masraflı, pahalı
tickets|n.|biletler
forest|n.|orman
barely|adv.|ancak, zar zor
eggs|n.|yumurtalar
regret|v.|pişman olmak, pişmanlık
lesson|n.|ders
lover|n.|aşık
bread|n.|ekmek
andy|n.|erkek ismi
subject|n.|ders, özne, konu
legal|adj.|tüzel, yasal, kanuni
growing|adj.|gelişen, büyüyen
ill|adj.|hasta
jason|n.|erkek ismi
mood|n.|ruh hali
owner|n.|mal sahibi, sahip
caused|adj.|mütevellit, sebep olan, sebep olmuş
beeping|n.|bipleme, bip sesi
points|n.|demiryolu makası, makas, noktalar
dating|n.|yaşlandırma, buluşma, tanışma
loss|n.|zarar, kayıp, hasar
secretary|n.|sekreter
revenge|v.|intikam almak, intikam, öç
santa|n.|noel baba
likely|adv.|büyük ihtimalle
rent|v.|kiralamak, kira
connection|n.|bağ, bağlantı, alaka
assistant|n.|muavin, asistan, yardımcı
reasons|n.|esbap, nedenler, sebepler
yelling|n.|seslenme, haykırma, bağırış
painting|n.|tablo, resim
trees|n.|ağaçlar, esrar, ot
doctors|v.|doktorların ihmalinden öldüğü iddia edilmek, doktorların dağılımı, tabipler odası
rush|v.|acele etmek, acele ettirmek, telaş etmek
foreign|adj.|yabancı
rough|adj.|kaba saba, kaba, sert
murderer|n.|katil
century|n.|asır, yüzyıl
nights|n.|geceler, geceleri
pair|n.|çift
runs|n.|ishal
pocket|n.|cep
farm|n.|çiftlik
matt|n.|mat
bike|v.|bisiklete binmek, bisiklet
obvious|adj.|besbelli, ortada, bariz
ate|n.|suç ve ceza tanrıçası
grew|v.|olmak, yaşlandıkça, bu civarda büyüdüm
professional|adj.|profesyonel, mesleki
tim|n.|celtic taraftarı, celtic'i tutan kimse
goodness|n.|iyilik
parts|n.|aksam, semt, yetenek
alan|n.|erkek ismi
university|n.|üniversite
square|n.|meydan, kare
grandfather|n.|dede, büyükbaba
europe|n.|avrupa
genius|n.|dahi
cases|n.|davalar, vakalar, vukuat
ruin|v.|mahvetmek, bozmak, harabe
winter|n.|kış, kışlık
tongue|n.|dil
memories|n.|anılar, hatıralar
da|n.|bölge savcısı
buying|n.|alım, alış, satın alma
cancer|n.|kanser, yengeç burcu
clock|n.|saat
ocean|n.|okyanus
dna|n.|dna, deoksiribonükleik asit
liar|n.|yalancı
tour|v.|gezmek, gezi, tur
thief|n.|hırsız
bleep|v.|biplemek, bip bip yapmak, bip sesi çıkarmak
lisa|n.|kadın ismi
rights|n.|hukuk, haklar, sağ kenarlar
including|n.|kapsama, içerme, şamil
competition|n.|müsabaka, yarışma, rekabet
smith|n.|demir eşya yapan kimse, demirci, demir eşya onarımı yapan kimse
planned|adj.|planlanmış, planlı
emily|n.|kadın ismi, emili, minnesota eyaletinde şehir
boring|adj.|bıktırıcı, bıktıran, sıkıcı
victims|v.|sel mağdurları için hendek kazmak, sinemada atom bombası kurbanları, aile içi şiddetin kurbanları
mentioned|adj.|adı geçen, bahsedilen, bahsedilmiş
bones|n.|iskelet, zar, gemi hekimi
plant|v.|dikmek, ekmek, tesis
bless|v.|kutsamak
warning|n.|ihtar, ikaz, uyarı
knocking|n.|vurma, eleştiri, vuruntu
crash|v.|çarpışmak, çarpmak, kırılma
bedroom|n.|yatak odası
lower|v.|düşürmek, alçaltmak, indirmek
silver|adj.|gümüş
groaning|n.|inleme, inilti sesi, inilti
madame|n.|madam, bayan
defense|n.|savunma, davalı, defans oyuncusu
results|n.|sonuçlar, bulgular
toilet|n.|hela, tuvalet
event|n.|olay
complicated|adj.|çetrefil, komplike, çetrefilli
shape|v.|şekillendirmek, biçim vermek, şekil vermek
priest|n.|papaz, rahip
royal|adj.|asil
cheap|adj.|ucuz
romantic|adj.|duygusal, romantik
downstairs|n.|aşağı katta, altkat, alt kat
invite|v.|davet etmek
fortune|n.|talih, şans, kısmet
tears|n.|gözyaşı, derin bir düş kırıklığı hali, gözyaşları
avoid|v.|önlemek, kaçınmak, sakınmak
reached|adj.|erişilen
higher|adj.|ileri, daha yüksek, daha yukarı
familiar|adj.|aşina, tanıdık
telephone|n.|telefon
burning|n.|yakma, yanan, yakıcı
filled|adj.|dolu (içerik), dolmuş, dolu
kelly|n.|bir erkek şapkası türü, wisconsin eyaletinde yerleşim yeri
alice|n.|kadın ismi, kuzey dakota eyaletinde şehir, teksas eyaletinde şehir
airport|n.|havalimanı, havaalanı, hava limanı
jobs|v.|ufak tefek ayak işlerine girmek, kalıptan kalıba girmek, istihdam yaratmak
grown|adj.|büyümüş
rachel|n.|kadın ismi, nevada eyaletinde şehir
giant|adj.|dev
insurance|n.|sigorta
woods|n.|orman
scare|v.|ürkütmek, korkutmak
pleased|adj.|memnun
period|n.|devir, dönem, çağ
political|adj.|politik, siyasi, siyasal
player|n.|oyuncu
stops|v.|var gücüyle çalışmak, elinden geleni yapmak, metrobüs durakları
secrets|n.|esrar
laura|n.|kadın ismi, illinois eyaletinde bir şehir, kentucky'de bir kent
repeat|v.|yinelemek, tekrarlamak
photos|n.|fotolar, fotoğraflar
finds|n.|bahaneci, umarım her şey yolundadır, umarım iyisinizdir
statement|n.|ifade, söz, beyan
suck|v.|emmek
younger|adj.|daha genç, genç, küçük
china|n.|porselen, porselen kap, seramik
humans|expr.|insanlar beyinlerinin yüzde kaçını kullanır?, insanlarda erişkin yaşamı
delicious|adj.|nefis, leziz, lezzetli
particular|adj.|özel, belirli
proper|adj.|uygun, münasip
rome|n.|roma, georgia eyaletinde şehir, iowa eyaletinde şehir
belongs|v.|ait olduğu yere geri bırakmak, aldığı yere geri koymak, ait olduğu makam
attacked|adj.|saldırıya uğramış, saldırılmış, hücuma uğramış
bath|v.|yıkanmak, banyo
hired|adj.|kiralanmış, işe alınan, tutulmuş
site|v.|yerleştirmek, oturtmak, açmak
knowledge|n.|bilgi
led|adj.|neden olmuş, çok küçük ampul, ışık yayan diyot
guests|n.|konuklar, misafirler, davetliler
celebrate|v.|kutlamak
map|n.|harita
horn|n.|boynuz
eventually|adv.|eninde sonunda
pity|v.|acımak, merhamet etmek, şefkat
powers|n.|üst
ashamed|adj.|mahcup, utanmış
assume|v.|üstlenmek, saymak, farz etmek
glasses|n.|gözlük
rise|v.|doğmak, yükselmek, yükseliş
fixed|adj.|durağan, sabit
request|v.|rica etmek, talep etmek, istem
officers|n.|devlet memurları, bakanlar kurulu, emekli subaylar derneği
pounds|v.|kilo vermek, birkaç kilo almak, basınç birimi
data|n.|veri, bilgi
carefully|adv.|özenle
per|adv.|her, beher, rücuen
depends|adv.|bağlı olarak, sanki (birinin) yaşamı buna bağlıymış gibi, yaşamı buna bağlıymışçasına
jury|n.|jüri
waited|v.|beklenilmek, makamında beklemek, çok bekledik
positive|adj.|pozitif, artı, olumlu
attorney|n.|dava vekili, avukat
direction|n.|istikamet, doğrultu, yön
families|n.|aileler
forces|v.|el ele vermek, kuvvetini toplamak, güç birliği yapmak
location|n.|yer, konum
walls|n.|surlar, duvarlar
useless|adj.|işe yaramaz, faydasız, yararsız
grant|v.|bağışlamak, hibe etmek, hibe
saving|n.|tasarruf, kurtarma, birikim
speaks|n.|hımhım, konuştuğu dil, dildaş
fought|n.|savaş
meal|n.|öğün
deliver|v.|teslim etmek
answers|n.|cevaplar, yanıtlar
changing|adj.|değişen
temple|n.|tapınak
scary|adj.|ürkütücü, korkunç, korkutucu
millions|v.|dünyadan milyonlarca ışık yılı uzakta olmak, milyonlar harcamak, milyonluk
offered|adj.|teklif edilmiş
regular|adj.|müdavim, muntazam, düzenli
carrying|n.|taşıma
official|n.|memur, resmi
jacket|n.|ceket
switch|v.|değiştirmek, değişme, anahtar
grave|n.|kabir, mezar
chase|v.|peşinde olmak, kovalamak, takip etmek
role|n.|rol
odd|adj.|acayip, garip, tuhaf
sexy|adj.|çekici, cinsel istek uyandıran, seksi kimse
faces|n.|sandviç yapı yüzleri
becomes|n.|boynuz kulağı geçer, ava giden avlanır, boynuz kulağı geçermiş
closes|expr.|bir kapı kapanırsa diğeri açılır, gümüş kapı kapanırsa altın kapı açılır, bir kapı kapanır diğeri açılır
badly|adv.|kötü bir şekilde
tall|adj.|uzun, yüksek, uzun boylu
confused|adj.|şaşkın, zihni bulanık, karmakarışık
affair|n.|mesele, şey, iş
television|n.|televizyon
shock|v.|şok etmek, şok
raised|adj.|kabarık, zamlı, kalkık
panting|n.|soluma, nefes nefese, kesik kesik nefes alma
pizza|n.|pizza
image|n.|şekil, imge, imaj
clears|expr.|iyi bir kavga havayı yumuşatır., ortalığın durulması, ortalığın sakinleşmesi
golden|n.|altın, altından
patients|n.|hastalar, hasta ve yaralılar
watched|adj.|izlenen
committed|adj.|yapılan, kendini adamış, işlenmiş
sexual|adj.|cinsel
suffer|v.|acı çekmek, (acı) çekmek, ıstırap çekmek
arthur|n.|erkek ismi, illinois eyaletinde yerleşim yeri, iowa eyaletinde şehir
wherever|adv.|nerede, nereye, her nerede
plate|n.|plaka, tabak, levha
appear|v.|belli olmak, görünmek, belirmek
chocolate|n.|çikolata
clever|adj.|zeki, akıllı
hm|n.|hektometre
mercy|n.|af, merhamet
shots|v.|sözü geçmek, borusu ötmek, sözü geçer olmak
lucy|n.|kadın ismi
dealing|n.|yaklaşım, alışveriş, iş
trap|n.|kapan, tuzak
charges|n.|suçlamalar, ücretlendirme, giderler
phil|n.|felsefe masteri, alabama eyaletinde şehir
bang|v.|küt diye çarpmak, gürültülü bir şekilde vurmak, gürültü yapmak
poison|v.|zehirlemek, zehir
butt|n.|popo, kıç, izmarit
drove|n.|sürü
yourselves|pron.|kendiniz, siz, kendinize
headed|adj.|başlı, kelle bağlamış, kelleli
babies|n.|bebekler
yellow|adj.|sarı
soup|n.|çorba
mystery|n.|sır, esrar, gizem
picking|n.|aşırma
sat|n.|cmt, doy, doygun
wound|v.|yaralamak, yara
traffic|n.|gidiş geliş, trafik
courage|n.|cesurluk, yüreklilik, cesaret
hunt|v.|avlanmak, avlamak, av
indian|n.|kızılderili, hintli, hindistan´a özgü
rat|n.|sıçan
terms|n.|ara, ücret, fiyat
italian|n.|italyan
emma|n.|kadın ismi, missouri eyaletinde şehir
checking|n.|denetleme, kontrol etme, karşılaştırma
disease|n.|hastalık
managed|adj.|idare edilmiş, gözetimli
winner|n.|galip, kazanan
council|n.|meclis, kurul, divan
appointment|n.|tayin, atama, randevu
monday|n.|pazartesi
crack|v.|yarılmak, çatlamak, çatırtı
threat|n.|tehdit
jenny|n.|dişi hayvan, dişi eşek, lokomotif vinci
physical|adj.|bedensel
nation|n.|ulus, millet
source|n.|kaynak, köken
chose|n.|mal, şey
healthy|adj.|sıhhatli, sağlıklı
carl|n.|çiftçi, erkek ismi, georgia eyaletinde yerleşim yeri
victory|n.|utku
rick|v.|burkmak, burkulma, tınaz
stood|adj.|ayakta
kicked|adj.|tekmelenmiş, çifte atılmış
annie|n.|kadın ismi
disgusting|adj.|tiksindirici, iğrenç
palace|n.|saray
below|adj.|alttaki, aşağıdaki, altta
shopping|n.|alışveriş
neighborhood|n.|mahalle, muhit
march|v.|yürüyüş yapmak (topluca), yürüyüş (topluca), mart ayı
lips|n.|dudaklar, cinsel organ dudağı
midnight|n.|geceyarısı, gece yarısı
piss|n.|sidik
advantage|n.|avantaj, fayda, yarar
pure|adj.|saf
india|n.|hindistan
aside|adj.|bertaraf, ayrı, bir kenara
jerk|v.|sarsmak
mail|v.|postalamak, posta
dawn|n.|şafak
effect|n.|tesir, etki
spell|v.|hecelemek, büyü
freak|v.|çılgına dönmek, ucube
wood|n.|odun, tahta, ahşap
screwed|adj.|yivli, sarhoş, çakırkeyif
enemies|n.|düşmanlar, muhasim
gary|n.|batı virginia eyaletinde şehir, güney dakota eyaletinde şehir, indiana eyaletinde şehir
awake|v.|uyanmak, uyandırmak, uykudan kalkmak
chuckling|n.|kıkır kıkır gülme
vacation|n.|tatil
violence|n.|şiddet
leo|n.|aslan, aslan burcu, bütün gün yapılan içki alemi
grandmother|n.|babaanne, anneanne
modern|adj.|çağdaş, modern
luke|n.|red kit
firm|n.|firma, sıkı, sert
prime|v.|astar vurmak, kurmak, ne söyleyeceğini öğretmek (tanığa)
touched|adj.|keçileri kaçırmış, etkilenmiş, bozuk
talent|n.|kabiliyet, hüner, yetenek
whore|n.|fahişe
piano|n.|piyano çalgı, piyano, hafif
license|n.|ruhsat
cooking|n.|yemek pişirme
honour|v.|şereflendirmek, onurlandırmak, şeref
concern|v.|ilgilendirmek, kaygı, endişe
moves|n.|hamleler
available|adj.|elde hazır bulunan, boş, mevcut
factory|n.|fabrika
gods|v.|esiri tanrılara kurban etmek, şahane bir ziyafet, tanrılar ve tanrıçalar
value|v.|değer vermek, paha biçmek, değer biçmek
central|adj.|orta, merkezi
union|n.|sendika, birleşme, birlik
mirror|n.|ayna
studio|n.|stüdyo
media|n.|medya
taxi|n.|taksi
dies|n.|kalıp, sütun tabanı taşı, bu hususta
iron|v.|ütülemek, demir, ütü
hearts|n.|kalpler, hearts, kupa
desire|v.|istek duymak, arzulamak, arzu etmek
rob|v.|soymak
claire|n.|kadın ismi
fred|n.|sade vatandaş, kimliği bilinmeyen kişi
songs|n.|şarkılar
washington|n.|amerika'da eyalet, connecticut eyaletinde şehir, georgia eyaletinde şehir
monkey|n.|maymun
pride|n.|gurur
pills|v.|doğum kontrol hapı kullanmak, bir sürü hap almak, uyku hapları
miracle|n.|mucize
swim|v.|yüzmek, yüzme
burned|adj.|yakılmış, yanmış, yanık
smells|expr.|(bir yerde) biri ölmüş gibi kokuyor!, (bir yer) leş gibi kokuyor!, (bir yer) gerçekten çok kötü kokuyor!
joking|n.|şaka yapma, şakacı
christian|n.|hristiyan, hıristiyan
bleeding|n.|kanama
hook|n.|kanca, çengel
beating|n.|kötek, pataklama, dövme
protection|n.|himaye, koruma, korunma
treatment|n.|muamele, tedavi
ear|n.|kulak
carter|n.|arabacı, yük arabası kullanan kimse, erkek ismi
metal|v.|madenle kaplamak, tıynet, madde
disappear|v.|ortadan kaybolmak, yok olmak, gözden kaybolmak
grateful|adj.|minnettar
extremely|adv.|gayetle, feci, aşırı
treasure|n.|hazine
rescue|v.|kurtarmak
capable|adj.|yetenekli, becerikli, kabiliyetli
passing|n.|geçiş, geçme
chatter|v.|gevezelik etmek, gıcırdatmak, konuşup durmak
result|n.|netice, sonuç
suffering|n.|mihnet, cefa, ıstırap
sisters|n.|kız kardeşler
laid|v.|lay - laid, serili, yerleştirilmiş
governor|n.|vali
guards|v.|kapıya ekstra güvenlik görevlisi yerleştirmek, sahil muhafaza, polis nezaretinde
louis|n.|dokuzuncu louis, fransa kralı, st louis ensefaliti, illinois eyaletinde şehir
text|n.|metin
literally|n.|kelime kelime, gerçekten, motamot
remove|v.|kaldırmak, sökmek, gidermek
becoming|v.|olmak, uygun, cazip
performance|n.|performans
stronger|adj.|daha kuvvetli, kuvvetli
rate|n.|kur, oran
deeply|adv.|son derece, derinlemesine, içten
scream|v.|bağırmak, çığlık atmak, çığlık
desert|v.|terk etmek, çöl, ıssız
vehicle|n.|araç, taşıt, vasıta
illegal|adj.|kaçak, illegal, usulsüz
pulling|n.|çekme
throwing|n.|atma, atış, (parti) verme
josh|v.|alay etmek, şaka yapmak, takılmak
unbelievable|adj.|inanılmaz
ted|v.|otları çevirerek kurutmak, otları kurutmak, (kısaca) teddy boy
zero|n.|sıfır
dean|n.|dekan
curious|adj.|meraklı
sean|n.|erkek ismi
candy|n.|şeker, şekerleme
bone|n.|kılçık, kemik
tied|adj.|bağlanmış, düğümlenmiş, bağlı
edge|n.|eşik (kıyamet/sorun vb), köşe, uç
load|v.|yüklemek, yük
susan|n.|döner tepsi, güneş şapkası, rudbekya
mountains|v.|habbeyi kubbe yapmak, pireyi deve yapmak, abartmak
boom|v.|gümlemek, patlama sesi, gümbürtü
former|n.|önceki, evvelki
holiday|n.|bayram, tatil
riding|n.|biniş, ata binilen alan, binme
scoffs|v.|oburca yemek, kıtıra almak, alay etmek
hundreds|n.|yüzler, yüzler basamağı
motherfucker|n.|lavuk, orospu çocuğu, onun bunun çocuğu
sue|v.|dava açmak, mahkemeye vermek
bags|n.|çantalar, pantolon
stealing|n.|çalma
appears|v.|görüntüsü vermek, göründüğü gibi olmamak, görünen o ki
arrive|v.|varmak, ulaşmak
remains|n.|kalıntılar, artıklar
decent|adj.|edepli, iyi, düzgün
issues|n.|sorunlar
tip|n.|bahşiş, uç
fail|v.|başarısızlığa uğramak, başarısız olmak
bride|n.|gelin
pissed|adj.|işenmiş, kaba, sarhoş
penny|n.|metelik
claim|v.|talep etmek, iddia etmek, sav
friendship|n.|dostluk, arkadaşlık
desperate|adj.|çaresiz, umutsuz
flower|n.|çiçek
dramatic|adj.|dramatik
refuse|v.|geri çevirmek, reddetmek
solve|v.|çözmek, halletmek
theme|n.|tema
loving|n.|sevme, iyilik, lütuf
properly|adv.|uygun bir şekilde, doğru dürüst, düzgün bir şekilde
dragon|n.|ejderha, ejder, evren
mostly|adv.|çoğunlukla
chuck|v.|savurmak, bırakmak, fırlatmak
directly|adv.|doğrudan doğruya, doğrudan, direkt
surface|n.|yüzey
cast|v.|dökmek, döküm
junior|n.|iki kişiden küçük olanı, mevki veya kıdemce küçük olan kimse, yaşça küçük kimse
hunting|n.|avlama, avcılık, av
silent|adj.|suskun, sessiz
thou|v.|sen diye hitap etmek, thou kelimesini söylemde kullanmak, sen
egg|n.|yumurta
germany|n.|almanya
punch|v.|yumruklamak, yumruk, zımba
africa|n.|afrika
woke|adj.|uyanık
intelligence|n.|istihbarat, zeka, akıl
borrow|v.|ödünç almak
winning|n.|alıcı, kazanma, galibiyet
falls|n.|şelale, çağlayan, çaylan
popular|adj.|popüler
escaped|adj.|firar etmiş kurtulmuş, kaçmış, gözden kaçmış
witch|v.|büyü yapmak, cadı, büyücü kadın
convinced|adj.|inandırılan, inandırılmış, kani
warn|v.|uyarmak, ihtar etmek, ikaz etmek
announcer|n.|sunucu
champagne|n.|şampanya
dust|n.|toz
kyle|n.|teksas eyaletinde şehir
someday|adv.|bir gün, günün birinde
fallen|adj.|düşük, düşen, düşmüş
stranger|n.|yabancı
presence|n.|mevcudiyet
tear|v.|yırtılmak, yırtmak, yırtık
internet|n.|internet, ağlararası ağ, edalyan
monsieur|n.|mösyö, bey
therefore|adv.|bu sebeple, bu yüzden, bu nedenle
technology|n.|teknoloji
tires|n.|tekerlekler, lastikler, brusellozis
toast|n.|kızarmış ekmek (dilim halinde)
wise|adj.|bilge, bilgili, akıllı
clark|n.|güney dakota eyaletinde şehir, kolorado eyaletinde şehir, missouri eyaletinde şehir
americans|n.|amerikalılar
notes|n.|notlar, kağıt paralar, not
smoking|n.|sigara içme, sigara kullanımı, dumanlama
hank|n.|çile
ls|n.|ls çiftleşimi, ls-rıor süreci, ls-120 desteği
april|n.|nisan
wolf|n.|kurt
precious|adj.|değerli, kıymetli
rooms|n.|odalar
coast|n.|sahil, kıyı, deniz kıyısı
treated|adj.|işlem görmüş, arıtılmış, davranılmış
material|n.|materyal, madde, malzeme
released|adj.|serbest bırakılmış, ibra edilmiş, ipoteği kaldırılmış
uniform|n.|forma, üniforma, yeknesak
hated|n.|can düşmanı, dünyanın en nefret edilen adamı, en nefret edilen kişiler listesi
considered|adj.|dikkate alınan, saygıdeğer, dikkate alınmış
rice|n.|pirinç
exchange|v.|takas etmek, değiş tokuş etmek, bozdurmak
steps|v.|titre etmek, ayaklı merdiven, portatif merdiven
blake|n.|erkek ismi
convince|v.|ikna etmek, inandırmak, kandırmak
beast|n.|hayvan, çirkin yaratık, canavar
cow|n.|inek
files|n.|dosya, dosyalar, dosya sayısı
signs|n.|belirtiler
drag|v.|sürüklemek
cab|n.|taksi
hung|adj.|asma, asılı, askıda duran
carried|adj.|taşınan, taşınmış, nakledilmiş
ordinary|adj.|sıradan, adi, basit
successful|adj.|başarılı
eve|n.|havva, akşam, kadın
mistakes|n.|yanlışlar
houses|n.|evler
chattering|n.|gevezelik
brains|n.|akıl, zeka, beyin
japan|n.|japonya
creature|n.|varlık, yaratık
fourth|adj.|dörtte bir, dördü, dördüncü
separate|v.|ayırmak, ayrı
cleaning|n.|temizlik
california|n.|california, kaliforniya, Kaliforniya
lf|n.|lf
shift|v.|değiştirmek, vardiya
elizabeth|n.|kadın ismi, arkansas eyaletinde şehir, batı virginia eyaletinde yerleşim yeri
chicago|n.|şikago, illinois eyaletinde şehir
exact|adj.|kesin, tamı tamına, tam
karen|n.|kadın ismi, burma'da yaşayan moğol kökenli toplum, karenler
goal|n.|gaye, erek, gol
expert|n.|bilirkişi, eksper, uzman
served|adj.|servis yapılmış
direct|v.|yönlendirmek, yöneltmek, yönetmek
score|n.|puan, skor
row|n.|sıra, dizi
marks|n.|markalar, mississippi eyaletinde şehir
twenty|n.|yirmi
receive|v.|teslim almak, almak
series|n.|seri, dizi
section|n.|kesit, bölüm, kısım
pilot|n.|pilot
jackson|n.|erkek ismi, alabama eyaletinde şehir, georgia eyaletinde şehir
darkness|n.|karanlık
thy|pron.|senin
sale|n.|satış, ucuzluk
destiny|n.|alın yazısı, kader
cure|v.|iyileştirmek, tedavi etmek, çare
spoken|adj.|sözlü, konuşma, konuşulan
armed|adj.|ateşli
rare|adj.|ender, nadir, seyrek
helen|n.|kadın ismi, georgia eyaletinde şehir
grade|v.|puanlamak, sınıf, rütbe
juice|n.|meyve suyu, özsu
wide|adj.|geniş, bol
tower|n.|kule
solution|n.|çözelti, çözüm
schedule|n.|plan, program
explosion|n.|infilak, patlama
wheel|n.|çark, tekerlek
cigarette|n.|sigara
julie|n.|kadın ismi
fruit|v.|meyve vermek, meyve
blew|expr.|bütün dünyam yerle bir oldu, batırdın, dün rüzgar sert esti
victor|n.|kazanan, galip, fatih
talks|n.|müzakereler, görüşmeler
sacrifice|v.|kurban etmek, feda etmek, kurban
range|n.|silsile, sıra (dağ/tepe), çeşitlilik
button|n.|düğme, tuş
reports|n.|raporlar, bu kişiye rapor verenler
prisoner|n.|esir, tutuklu, tutsak
pie|n.|turta
effort|n.|efor, çaba, gayret
youth|n.|gençlik
pot|n.|çanak, demlik
eaten|adj.|yenmiş, yenilmiş
taylor|n.|bir kadın ismi, alabama eyaletinde şehir, kuzey dakota eyaletinde şehir
knees|v.|birine boyun eğdirmek, ayaklarına kapanmak, birini yola getirmek
garage|n.|tamirhane, garaj
parking|n.|park, park yapma, otopark
ambulance|n.|ambulans, cankurtaran
staring|adj.|göze çarpan, parlak, sabit
chances|v.|riske girmek, birinin şansını azaltmak, riski göze almak
circumstances|n.|koşullar, mali durum, şartlar
sin|v.|günah işlemek, günah
gordon|n.|goniyon, alabama eyaletinde şehir, georgia eyaletinde şehir
progress|v.|gelişmek, gelişim göstermek, ilerlemek
unusual|adj.|alışılmadık, olağan olmayan, olağandışı
county|n.|ilçe
stairs|n.|merdiven
campaign|n.|sefer, kampanya
vision|n.|görme
reporter|n.|muhbir, raportör, muhabir
equipment|n.|teçhizat, araç gereç, donanım
moments|n.|korkulu anlar, benzersiz anlar, samimi anlar
joey|n.|yavru {hayvan}, kanguru yavrusu, deneme tahtası tip
mass|v.|yığmak, kümelemek, kitle
alien|v.|yabancılaştırmak, fikren uzaklaştırmak, duygusal olarak soğutmak
trapped|adj.|tuzağa düşürülmüş, tuzağa düşmüş, kapana kısılmış
helps|v.|yardım etmek, fukaraperver, gayret edene allah da yardım eder
route|n.|güzergah, rota
defend|v.|savunmak
trace|v.|iz sürmek, izini sürmek, izlemek
nasty|adj.|pis
tests|n.|sınav
magazine|n.|fişek haznesi, dergi, mecmua
rocks|n.|kayalar, elmaslar, krek kokain
dump|n.|çöplük
rude|adj.|nezaketsiz, kaba saba, kaba
searching|n.|keskin bakış, arayış, arama
clue|n.|ipucu
connected|adj.|bağlı
amen|v.|amin demek, dua etmek, temenni etmek
pushed|v.|sıkışmak, başı daralmak, eli darda olmak
merry|adj.|şen
zone|n.|kuşak, bölge
senior|n.|kıdemli
closing|n.|yaklaşım, kapama, uç
freeze|v.|donmak
emperor|n.|hükümdar
incident|n.|hadise, olay
snake|n.|yılan
mexico|n.|meksika, maine eyaletinde yerleşim yeri, missouri eyaletinde şehir
lily|n.|zambak
actor|n.|oyuncu, erkek oyuncu
newspaper|n.|gazete
sentence|n.|cümle
leading|adj.|öncülük eden, önde olan, kılavuzluk eden
friendly|adj.|arkadaş canlısı, arkadaşça, cana yakın
jones|n.|bağımlılık, canı (acayip) çekmek, çok istemek
chosen|adj.|seçilmiş
engaged|adj.|bağlanmış, meşgul, nişanlı
julia|n.|kadın ismi
charming|adj.|cazibeli, alımlı, çekici
anger|v.|kızdırmak, sinir, hiddet
spending|n.|harcama
learning|n.|öğrenme
spy|n.|casus
sharp|adj.|sivri, keskin
shadow|n.|gölge
warrant|v.|garanti etmek, ruhsat vermek, izin vermek
elevator|n.|asansör
kingdom|n.|krallık, kraliyet
squad|n.|ekip, takım
shoulder|n.|omuz
wave|v.|dalgalanmak, el sallamak, dalga
amanda|n.|kadın ismi, ohio eyaletinde yerleşim yeri
highness|n.|yükseklik, irtifa, yücelik
kinds|v.|kırk dereden su getirmek, her türlü mikrobu taşımak, her türlü önlemi almak
fishing|n.|balık tutma
sometime|adj.|sabık, eski, önceki
attitude|n.|tutum, tavır
sucks|expr.|bu çok kötü, berbat, berbat olduğunu biliyorum
negative|adj.|negatif, olumsuz
screen|n.|ekran
workers|n.|işçi sınıfı
bored|adj.|sıkılmış, delinmiş, bıkkın
cameras|n.|kameralar
similar|adj.|benzer
understanding|n.|kavrayış, anlama, anlayış
beeps|v.|ses çıkarmak, korna çalmak, bip sesi
chain|n.|zincir
bull|n.|boğa
gasping|n.|nefes darlığı, solunum yetmezliği, can atma
fully|adv.|tamamıyla
robin|n.|daire şeklinde imzalanan dilekçe, mehmetçik, kızılgerdan
collect|v.|toplamak, biriktirmek
gorgeous|adj.|muhteşem
morgan|n.|kadın ismi, morgan, georgia eyaletinde şehir
passion|n.|hırs, ihtiras, tutku
writer|n.|yazar
empire|n.|imparatorluk
international|adj.|devletlerarası, enternasyonal, milletlerarası
curse|v.|küfretmek, lanetlemek, lanet etmek
hire|v.|kiralamak, (ücret vererek) tutmak, kira
bastards|expr.|onların seni ezmesine izin verme, şerefsiz piçler
puts|expr.|dediği gibi..., o zaman durum değişir, sıradan insan
leads|expr.|yol açar, sabreden derviş muradına ermiş, aksilikler/sorunlar hep üst üste gelir
id|n.|bilinçaltı, içben, ilkel benlik
blows|v.|yumruklaşmak, ağız aramak, saç saça baş başa gelmek
sons|n.|erkek evlatlar
estate|n.|emlak, konak, arsa
customers|n.|müşteriler, alıcılar, hizmetten yararlananlar
maggie|n.|kadın ismi
gunshot|n.|atış, erim, silah atışı
i-|pron.|ben
device|n.|cihaz, alet
troops|n.|asker, askerler, birlikler
hug|v.|kucaklamak, sarılmak, (fikir) sıkı sıkıya bağlı olmak
design|v.|dizayn etmek, tasarlamak, tasarım
movement|n.|hareket
thunder|n.|gök gürültüsü, gök gürlemesi
object|v.|itiraz etmek, razı olmamak, karşı çıkmak
loser|n.|kaybeden kimse, beceriksiz, mağlup
pen|n.|kalem, dolma kalem
sobbing|n.|hıçkırarak ağlama, hüngürtü, hıçkırma
politics|n.|siyaset
despite|prep.|rağmen
alcohol|n.|alkol
climb|v.|tırmanmak, tırmanış
clients|n.|hizmetten yararlananlar, müşteriler
conference|n.|konferans
provide|v.|sağlamak, temin etmek
marty|n.|güney dakota eyaletinde şehir
seek|v.|aramak
witnesses|n.|tanıklar, şahitler, görgü tanıkları
earn|v.|para kazanmak, kazanmak
trash|n.|çöp
valley|n.|vadi
fashion|n.|moda
howard|n.|güney dakota eyaletinde şehir, georgia eyaletinde şehir, kansas eyaletinde şehir
episode|n.|parça, tefrika, vaka
prize|n.|ödül
previously|adv.|önceden
sports|n.|spor
wanting|n.|istek, isteme, -siz olan
debt|n.|borç
wishes|v.|en iyi dilekleri iletmek, içten dileklerini iletmek, içten dileklerini sunmak
hitler|n.|hitler taraftarı
wire|v.|telle bağlamak, tel takmak, telle çevirmek
thee|pron.|sen, sana, sen diye hitap etmek
circle|n.|halka, daire, çember
approach|v.|yanaşmak, yaklaşmak, yaklaşım
stock|v.|stoklamak, stok
facts|v.|gerçekleri çarpıtmak, gerçekleri kabul etmek, ayılmak
remembered|adj.|anımsanan, hatırlanan, hatırlanmış
percent|n.|hisse, kar payı, yüzde
normally|adv.|normalde, normal bir şekilde
tail|n.|kuyruk
joined|adj.|birleşmiş, çatık, ekli
education|n.|öğretim, eğitim
bravo|n.|haydut, cani, eşkıya
library|n.|kitaplık, kütüphane
rape|v.|ırzına geçmek, tecavüz etmek, ırza geçme
wings|n.|kanatlar, kulis
growling|n.|hırıltı
thrown|adj.|atılmış
tank|n.|tank
exhales|v.|soluk vermek
authority|n.|yetki, otorite
current|n.|akım, akıntı, cari
failure|n.|yapmayış, başarısızlık, arıza
nightmare|n.|kabus
hitting|n.|isabet, vuruş, vurma
glory|n.|görkem, şan
knocked|v.|darbe yemek, nakavt olmak, nefessiz kalmak
studying|n.|çalışma
barry|n.|erkek ismi, galler'de yerleşim yeri, illinois eyaletinde şehir
agency|n.|acente, acenta, ajans
apple|n.|elma
border|n.|hudut, kenarlık, kenar
rope|n.|halat, ip
duck|n.|ördek
reputation|n.|ün, şöhret, itibar
confidence|n.|güven
yard|n.|bahçe, avlu, açıklık
beloved|adj.|sevgili
lack|n.|yokluk, eksiklik
actual|adj.|aktüel, gerçek, fiili
skills|n.|vasıflar, beceriler
films|n.|kısa filmler, sessiz filmler, fantazi filmler
mental|adj.|akli, zihinsel, ruhsal
salt|n.|tuz
flesh|n.|et
anne|n.|kadın ismi
secure|v.|sağlamlaştırmak, güvenceye almak
highly|adv.|ziyadesiyle, yüksek derecede, pek çok
federal|adj.|federal, birleşik, birleşik devletlere ait
sand|n.|kum
emotional|adj.|dokunaklı, duygusal
setting|n.|ortam, ayar
senator|n.|senatör, roma senatörü, senato üyesi
services|n.|servis takımı, hizmetler
robbery|n.|hırsızlık, soygun
hates|expr.|hakikatin tecellisi tehiri sevmez, gerçek geciktirilmeyi sevmez, hakikat tehiri sevmez
fed|adj.|beslenmiş, beslenen, federal ajan
reward|v.|ödüllendirmek, mükafat, ödül
theater|n.|tiyatro
johnson|n.|arkansas eyaletinde şehir, minnesota eyaletinde şehir, oklahoma eyaletinde yerleşim yeri
commit|v.|işlemek (suç vb), işlemek
patrick|n.|güney carolina eyaletinde yerleşim yeri
entirely|adv.|tümüyle
extraordinary|adj.|fevkalade, olağandışı, olağanüstü
ships|n.|gemiler
opposite|n.|zıt, aksi, karşıt
parties|n.|taraflar, partiler
stands|n.|tribün
terry|n.|düğümlü kumaş, havlu kumaş, epengle
chat|n.|muhabbet, sohbet
events|n.|olaylar, organizasyonlar, vukuat
mummy|n.|mumya, anneciğim, anne
bay|n.|defne, koy
slip|v.|kaymak, sürçmek
disappointed|adj.|hayal kırıklığına uğramış
settled|adj.|yerleşik
begins|adv.|başlamadan çok önce, işler ciddiye bindiğinde, olay/işler ciddileştiğinde
andrew|n.|erkek ismi, iowa eyaletinde şehir
alert|v.|alarma geçirmek, gözünü açmak, ayık kalmak
detail|n.|detay, ayrıntı
pink|n.|pembe
fellas|n.|arkadaşlar
accepted|adj.|kabul edilmiş
background|n.|arka plan, fon
garbage|n.|çöp
panic|v.|panik yapmak, panik
minds|expr.|aklın yolu birdir
belt|n.|kayış, kuşak, kemer
blowing|n.|esen, üfleme, esme
hollywood|n.|florida eyaletinde şehir, güney carolina eyaletinde yerleşim yeri, irlanda'da yerleşim yeri
agreement|n.|mutabakat, antlaşma, anlaşma
pushing|n.|itiş, atak, itme
ability|n.|hüner, kabiliyet, yetenek
tiger|n.|kaplan
whispering|n.|fıs fıs, fısıltı, söylenti
culture|n.|kültür
saint|n.|aziz
jesse|n.|davut'un babası
task|n.|görev, vazife, ödev
solid|adj.|sağlam, yekpare, sert
doll|n.|oyuncak bebek
intend|v.|niyet etmek
district|n.|semt, ilçe, bölge
pa|n.|baba, protaktinyumun simgesi
gee|n.|at, gee sistemi, am
custody|n.|gözaltı
ignore|v.|görmezden gelmek
naturally|adv.|doğal olarak, elbette
useful|adj.|faydalı, yararlı, kullanışlı
attempt|v.|teşebbüs etmek, girişimde bulunmak, kalkışmak
abandoned|adj.|bırakılmış, terk edilmiş
cutting|n.|kesim, kesme, kesici
kissed|adj.|hafif dokunulmuş, öpülmüş
guarantee|n.|güvence, garanti
barking|n.|havlama, ingiltere'de yerleşim yeri, deli
gather|v.|toplanmak, devşirmek, bir araya getirmek
policy|n.|politika
violent|adj.|şiddetli
maid|n.|hizmetçi, evlenmemiş genç kız
embarrassing|adj.|can sıkıcı, utandırıcı, mahcup edici
childhood|n.|çocukluk
wasting|n.|boşa harca, boşa harcama, harap eden
bow|n.|yay, pruva, başla selamlama
chick|n.|piliç, civciv
sara|n.|orta afrika'da yaşayan etnik bir grup, sara
disaster|n.|facia, felaket, afet
revolution|n.|ihtilal, devrim
online|adj.|bağlantılı, online olarak, çevrim içi
demon|n.|iblis, şeytan
heavily|adv.|aşırı derecede, ağır, ağır bir şekilde
coincidence|n.|rastlantı, tesadüf
perform|v.|rol yapmak, yapmak, yerine getirmek
thin|v.|inceltmek, zayıflamak, ince
terrific|adj.|müthiş
mac|n.|yağmurluk, herif, mac
crown|n.|taç
identity|n.|kimlik
virgin|adj.|bakire, bakir, el değmemiş
impressive|adj.|etkileyici
windows|n.|pencereler, pencere, windows
no-one|pron.|hiç kimse
potential|adj.|potansiyel, olası
guitar|n.|gitarist, kitara, gitar
committee|n.|kurul, komisyon, komite
dozen|n.|çok sayı, düzine, on iki tane
delivery|n.|doğum, teslimat, teslim
advance|v.|terfi ettirmek, avans vermek, geliştirmek
quietly|adv.|sessizce
stan|v.|bir ünlüyü/kişiyi aktif olarak takip etmek
teaching|n.|öğretmenlik, öğretme, öğretim
hunter|n.|avcı
latest|adj.|son
hurting|n.|yaralama, incitici, ziyankar
swing|v.|sallanmak, sallamak, salıncakta sallanmak
capital|n.|sermaye, başkent, kapital
counting|n.|sayım, hesap, sayma
drew|adj.|çekilen, mississippi eyaletinde şehir
dirt|n.|pislik, kir
whistle|v.|ıslık çalmak, uğuldamak, düdük çalmak
marie|n.|kadın ismi, teksas eyaletinde şehir
hits|n.|isabetler, vuruşlar
deny|v.|yalanlamak, inkar etmek, reddetmek
urgent|adj.|ivedi, acil
threatened|adj.|tehdit altında
behavior|n.|davranış
molly|n.|ihmal, muhallebi çocuğu, kadın ismi
mixed|adj.|karma, karışık
stays|n.|korse, ayak, ara bulonu
assure|v.|temin etmek (rahatlatıcı/ikna edici sözlerle), garanti etmek, sigorta etmek
subtitles|n.|altyazı, alt başlıklar
explanation|n.|açıklama, izah
wins|n.|kazanılan, yengi, kazandı
unique|adj.|emsalsiz, benzersiz, kendine mahsus
chasing|n.|avcılık, takip, takip etme
billion|n.|milyar
duke|n.|dük, dukalık başı, yumruk
production|n.|üretme, yapım, imal
slave|v.|köle gibi çalışmak, köle
agents|n.|sigorta acentaları, emlakçılık, birleşik devletlerde dış temsilcilikler
carol|v.|noel ilahisi söylemek, şarkılar söylemek, ilahi
lets|adv.|inşallah, tanrı ömür verirse
cruel|adj.|zalim, acımasız, gaddar
mask|v.|maskelemek, maske
sally|v.|dışarı fırlamak, geziye çıkmak, hücuma geçmek
behave|v.|davranmak
bury|v.|gömmek
massive|adj.|cüsseli, iri, çok büyük
pathetic|adj.|içler acısı, acınası
species|n.|tür
approaching|n.|yanaşma, yakında olacak olan, yaklaşan
jo|n.|incilde joel, tatlı şirin kişi
loan|n.|ödünç para, kredi, borç
struggle|v.|çabalamak, mücadele etmek, çabalama
dish|n.|tabak
trusted|adj.|güvenilir, güvenilen, saygın
jumped|v.|atlanmak, kendini beğenmiş, dayak yemek
firing|n.|ateşleme
channel|n.|kanal
abby|n.|manastır, kadın ismi
stopping|n.|kesilme, dolgu, durma
asks|v.|soru sormak, istemek, sormak
jean|n.|cin kumaş, cin pantolon, blucin
swimming|n.|yüzme
daily|adj.|günlük, gündelik
basement|n.|bodrum
linda|n.|kadın ismi
quarter|n.|çeyrek
bound|v.|zıplaya zıplaya gitmek, zıplamak, sıçramak
navy|n.|deniz filosu, bahriye, donanma
article|n.|bent, madde, (sözleşmede) madde
guide|v.|yol göstermek, rehberlik etmek, rehber
accused|n.|zanlı, sanık, suçlu
transfer|v.|nakletmek, aktarmak, devretmek
guts|n.|yürek, metanet, bağırsak
quality|n.|kalite, nitelik, kaliteli
fella|n.|yakın arkadaş, arkadaş, delikanlı
roman|adj.|romalı
greater|adj.|daha büyük, büyük
damned|adj.|lanetli
couch|n.|sedir, kanepe
cheer|v.|neşelendirmek, neşe
vegas|n.|vegas
shoe|n.|ayakkabı, pabuç
title|n.|unvan, başlık
shy|v.|korkmak, pısırık, çekingen
punishment|n.|ceza
los|n.|görüş çizgisi
clicks|expr.|bir kaç tık ötenizdeyiz
closet|n.|elbise dolabı
bye-bye|interj.|güle güle, hoşça kal, hoşçakal
fever|n.|ateş
coward|n.|korkak, ödlek, yüreksiz
flash|v.|ışık tutmak, parlama, ışıltı
impressed|adj.|etkilenmiş, etkilendirilmiş, uygulanmış
bruce|n.|erkek ismi, güney dakota eyaletinde şehir, mississippi eyaletinde yerleşim yeri
siren|n.|siren
prisoners|n.|mahkumlar
sides|n.|etraf, kenarlar, yüz
bowl|n.|tas, çanak, kase
katie|n.|oklahoma eyaletinde yerleşim yeri
supply|v.|tedarik etmek, sağlamak, tedarik
sensitive|adj.|içli, hassas, duyarlı
hopefully|adv.|ümitle, umutla, umarım
rolling|n.|yuvarlanma
roy|n.|new mexico eyaletinde yerleşim yeri, utah eyaletinde şehir, washington eyaletinde şehir
dollar|n.|dolar
tone|n.|ton
voices|v.|curcunaya çevirmek, curcunaya döndürmek, curcunaya vermek
cheating|n.|kopya
confess|v.|itiraf etmek
demand|v.|talep etmek, talepte bulunmak, talep
museum|n.|müze
unknown|adj.|bilinmez, bilinmeyen
drama|n.|piyes, dramatik özellik, dramatik durum
suspicious|adj.|kuşkulu, şüpheli
adult|n.|yetişkin
frightened|adj.|ürkmüş, korkan, korkmuş
warned|v.|ihtar edilmek, uyarılmak, ikaz edilmek
steady|n.|sabit durum, istikrarlı, oynamaz
kills|expr.|insanı iş değil stres yorar, insanı iş değil endişe öldürür, bu benim sonum olsa bile
crossed|adj.|çaprazlanmış, çapraz, çizgili
lou|n.|amyotrofik lateral skleroz, ilerleyici bir sinir sistemi hastalığı, lou gehrig hastalığı
particularly|adv.|özellikle
sandwich|n.|sandviç
laws|n.|cezaevi görevlileri, kanun ve tüzükler, mevzuat
joint|n.|eklem, ek yeri, birleşme yeri
bullets|v.|bombardıman etmek, kalbura çevirmek, korkmak
package|v.|paketlemek, paket, koli
trained|adj.|eğitimli, talimli, eğitilmiş
thursday|n.|perşembe
boots|n.|asker postalı, otel ayakkabı boyacısı, çizme
possibility|n.|olasılık, imkan, ihtimal
albert|n.|erkek ismi, saat zinciri, köstek
civil|adj.|sivil
june|n.|haziran
germans|n.|almanlar
baseball|n.|beysbol, beyzbol, beysbol topu
express|v.|ifade etmek, açık, belli
miserable|adj.|acınası, bedbaht, sefil
tuesday|n.|salı
parker|n.|arizona eyaletinde şehir, florida eyaletinde şehir, güney dakota eyaletinde şehir
lion|n.|aslan
joseph|n.|erkek ismi, utah eyaletinde şehir
refused|expr.|geri çevrildi, reddedildi
shine|v.|parıldamak, parlamak, parlatmak
assault|v.|saldırmak, saldırı
hong|n.|hong kong doları, hong konglu, hong kong
jokes|v.|şaka yapmak, fıkra anlatmak, şakalar yapmak
breaks|n.|akma kırışıkları, ara, molalar
argue|v.|tartışmak
trail|n.|iz
option|n.|seçenek
recall|v.|hatırlamak, anımsamak
mighty|adj.|muazzam, iddialı, büyük
collection|n.|toplama, tahsilat, koleksiyon
oliver|n.|ayak çekici, küçük çekiç, georgia eyaletinde şehir
wilson|n.|kansas eyaletinde şehir, louisiana eyaletinde yerleşim yeri, north carolina eyaletinde yerleşim yeri
accent|n.|şive, aksan
believes|n.|entel
decisions|n.|kararlar
embarrassed|adj.|mahcup
mobile|adj.|mobil, gezici, seyyar
customer|n.|müşteri
terribly|adv.|son derece, aşırı, korkunç
sec|n.|saniye, sek, abd sermaye piyasası kurulu
charity|n.|hayır, hayırseverlik
considering|n.|hesaba katma, sıçrama, dikkate alma
pussy|n.|kedi, pisi, pisipisi
donna|n.|hanım, teksas eyaletinde şehir
protecting|n.|koruma, sahip çıkma, koruyan
flag|n.|sancak, flama, bayrak
kidnapped|adj.|kaçırılmış (çocuk vb), hileyle veya zorla kaçırılmış, fidye için kaldırılmış
italy|n.|italya, çizme, new york eyaletinde yerleşim yeri
balance|v.|dengede tutmak, dengelemek, bakiye
creatures|n.|yaratıklar
nuclear|adj.|nükleer
wallet|n.|cüzdan
shout|v.|bağırmak, haykırmak, haykırış
vincent|n.|erkek ismi, iowa eyaletinde şehir
entered|adj.|katılmış, nüfuz olmuş, girmiş
impression|n.|izlenim, etki
angela|n.|kadın ismi
jay|n.|önüne bakmayan kimse, kestanekargası, kestane kargası
degrees|n.|açılar, derece
favour|v.|iyilik etmek, kayırmak, iyilik
reaction|n.|tepkime, reaksiyon, tepki
network|n.|ağ, şebeke
jessica|n.|kadın ismi
version|n.|sürüm, versiyon
concert|n.|konser
gear|n.|dişli, vites
singer|n.|şarkıcı
diamond|n.|elmas
defeat|v.|yenmek, bozguna uğratmak, mağlup etmek
steven|adv.|eşit, berabere, randevu almak
lane|n.|(yol) şerit
blast|n.|büyük patlama
wounded|adj.|yaralı
anytime|adv.|her ne zaman de, her ne zaman, herhangi bir zaman
partners|n.|şüreka
ages|n.|uzun süre, uzun zaman, asırlar
charlotte|n.|kadın ismi, iowa eyaletinde şehir, maine eyaletinde yerleşim yeri
ceremony|n.|merasim, tören
league|n.|lig
bars|n.|parmaklıklar, barlar, çubuklar
orange|n.|portakal
specific|adj.|belirli, özgül, özel
conditions|n.|koşullar, şartlar
plastic|n.|plastik
crisis|n.|bunalım, buhran, kriz
fifth|adj.|beşinci
term|v.|isimlendirmek, terim, dönem
self|n.|öz, kendi
offering|n.|ayin sırasında cemaatten toplanan para, adak, kurban
bud|n.|tomurcuk
suffered|adj.|mağdur
reported|adj.|rapor edilmiş, rapor edilen
commissioner|n.|delege, yetkili kimse, komisyonca atanan görevli
rip|v.|sökmek, sökük
mysterious|adj.|esrarengiz, gizemli
entrance|n.|giriş
messed|v.|haşatı çıkmak, alan talan olmak, darmadağınık
tunnel|n.|tünel
designed|adj.|planlanmış, tasarlanmış, kasıtlı
neighbor|n.|komşu
aboard|adv.|içinde (gemi/uçak/tren vb), gemide, içinde (taşıt için)
sweat|v.|terlemek, ter
justin|n.|erkek ismi
ghosts|n.|hayaletler, ervah
crimes|n.|beyaz yakalı suçları, güçlülerin suçları, siyasal suçlar ve suçlular
costs|n.|maliyetler, sarfiyat, masarif
deserves|v.|hak ettiği ilgiyi görmemek, yapılan iyilik karşılıksız kalmaz, mantıklı soru sorarsan mantıklı cevap alırsın
dreaming|adj.|rüya gibi, belli belirsiz, hayal meyal
bust|v.|busted/bust - busted/bust, bozulmak, iflas ettirmek
el|n.|yükseltilmiş demiryolu, yükseltilmiş raylar üzerinde giden tren, gök cisminin açısal yüksekliği
teddy|n.|ayıcık, tüylü
kong|n.|bir fildişi sahili şehri
messages|n.|elektronik posta mesajları, reklam mesajı, rencide edici mesajlar
enjoying|n.|hoşlanma, nail
afterwards|adv.|sonradan
comfort|n.|rahatlık, konfor, rahat
mason|n.|mason, duvarcı
surrender|v.|vazgeçmek, teslim olmak
gym|n.|spor salonu, jimnastik
kitty|n.|kedicik
crush|v.|ezmek
yup|interj.|evet
arranged|adj.|düzenli, düzenlenmiş, dizili
suits|n.|patent davaları, boşanma davaları, mayolar
pee|v.|çiş yapmak, sidik
stress|n.|stres
cave|n.|mağara, in
wing|n.|kanat
jordan|n.|ürdün, erkek ismi, lazımlık
arrange|v.|ayarlamak, düzenlemek
comrade|n.|dost, arkadaş, yoldaş
noble|adj.|soylu, asil
tricks|n.|çeşitli ufak tefek eşyalar, şahsi eşyalar, pılı pırtı
betty|n.|sahte/korsan ilaç, güzel/hoş/çekici kadın, kadın işi yapan erkek
launch|v.|başlatmak (yeni işi), piyasaya sürmek, fırlatmak
legend|n.|efsane
mix|v.|karıştırmak, karışım
golf|v.|golf oynamak, golf, florida eyaletinde yerleşim yeri
imagination|n.|hayal gücü, hayal
fox|n.|tilki
kissing|n.|öpüşme, öpme
butter|n.|tereyağı
tax|v.|vergilendirmek, vergi, harç
gross|n.|brüt, berbat
edward|n.|edward gölü, nebraska eyaletinde şehir, new york eyaletinde yerleşim yeri
texas|n.|teksas, hasinai konfederasyonu, amerika'da eyalet
insist|v.|ısrar etmek
marcus|n.|iowa eyaletinde şehir, washington eyaletinde yerleşim yeri
classic|n.|klasik
selfish|adj.|bencil
skull|n.|kafatası
shown|adj.|gösterilen
bat|n.|yarasa
survived|expr.|kaçınız kurtuldu?, kaçınız hayatta kaldı?, kaç kişi kurtuldu?
print|v.|yazdırmak, basmak, baskı
champion|adj.|şampiyon
bills|n.|iç çamaşırları
therapy|n.|iyileştirme, tedavi, sağaltım
lifetime|n.|ömür
throughout|adv.|boyunca
nathan|n.|erkek ismi
toward|prep.|karşı
sauce|n.|sos
experiment|n.|deney
margaret|n.|kadın ismi
describe|v.|betimlemek, tanımlamak, tarif etmek
ross|n.|kaliforniya eyaletinde şehir, kuzey dakota eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
grass|n.|otlak, çim, çimen
cheat|v.|kopya çekmek, aldatmak, aldatma
attend|v.|katılmak, iştirak etmek, hazır bulunmak
homework|n.|ödev
lewis|n.|kaldırma maşası, levye, taş kaldırıcı
betrayed|adj.|ihanete uğramış, ihanet edilmiş
servant|n.|hizmetçi
cap|n.|başlık, kapak, kep
tyler|n.|erkek ismi, masonlarda dış kapı gözcüsü, dış kapı gözcüsü
bible|n.|incil
practically|adv.|hemen hemen, pratik bir şekilde, gerçekte
catherine|n.|kadın ismi, katerina, alabama eyaletinde şehir
steel|n.|çelik
wipe|v.|silmek, silme, temizleme
burns|n.|yanıklar, kansas eyaletinde şehir, new york eyaletinde yerleşim yeri
generation|n.|üretme, kuşak, nesil
cabin|n.|kabin
financial|adj.|mali
industry|n.|endüstri, sanayi
bond|v.|tutturmak, birleştirmek, bağ
sheep|n.|koyun
scientists|n.|bilim adamları, bilim insanları
beaten|adj.|yenilmiş, hırpalanmış, bitkin
heck|interj.|kahrolası
deck|n.|deste, güverte
fans|n.|hayranlar, hayran kitlesi
script|n.|senaryo
brand|n.|marka
degree|n.|derece, rütbe, aşama
painful|adj.|ağrılı, sancılı
coughing|n.|öksürük, öksürüş, öksürme
religion|n.|din
cats|v.|bardaktan boşanırcasına yağmak, bardaktan boşanırcasına yağmur yağmak, şakır şakır yağmak
stephen|n.|minnesota eyaletinde şehir
influence|v.|tesir etmek, etkilemek, etki altına almak
fuel|n.|yakıt
drawing|n.|çizme, çekme, çizim
rabbit|n.|tavşan
exercise|v.|alıştırma yapmak, egzersiz yapmak, egzersiz
attractive|adj.|cazibeli, cazip, çekici
touching|adj.|dokunaklı, acıklı
virus|n.|virüs, virus
realise|v.|gerçekleştirmek, farkına varmak
torture|n.|eziyet, işkence
blessed|adj.|kutsal
plain|n.|ova, süssüz, yalın
rebecca|n.|kadın ismi, georgia eyaletinde şehir
recent|adj.|son
barbara|n.|kadın ismi
footsteps|n.|ayak izleri, adımlar
sacred|adj.|kutsal
removed|adj.|ayrı, uzak, ortadan kaldırılmış
pretending|v.|bahane etmek, hak iddia etmek, yapar gibi görünme
wasted|v.|heba olmuş, boşa harcanmış, boşa gitmiş
jewish|adj.|yahudi
goodnight|interj.|iyi geceler!, missouri eyaletinde yerleşim yeri, teksas eyaletinde şehir
robot|n.|otomat, robot, (güney afrika) trafik ışıkları
crystal|n.|billur, kristal
confirm|v.|onaylamak, doğrulamak, tasdik etmek
lad|n.|delikanlı
mile|n.|mil
division|n.|bölme
scratch|v.|kazımak, karalamak, çizmek
reminds|expr.|iyi hatırlattın, bana senin gözlerini hatırlatıyor
walks|v.|yürüyüşü birine benzemek, yürüyüşüyle birini andırmak, rasgele yürüyüşler
ending|n.|bitiş
russia|n.|rusya, new york eyaletinde yerleşim yeri, ohio eyaletinde yerleşim yeri
contest|n.|yarışma
valuable|adj.|değerli, kıymetli
distant|adj.|uzakta, uzak
dumped|adj.|atılmış, bir kenara atılmış
motion|n.|devinim, önerge, hareket
electricity|n.|elektrik
centre|n.|merkez
murders|n.|çocuk cinayetleri, kadın cinayetleri, korkunç cinayetler
tina|n.|kadın ismi, kristal met, missouri eyaletinde yerleşim yeri
seal|v.|mühürlemek, fok, kaşe
standard|adj.|standart
ellen|n.|kadın ismi
wore|expr.|ben hiç pembe giymedim, gün geçtikçe, yemeğe takım elbise giyip geldi
surrounded|adj.|çevrili, çevrilmiş
struck|v.|vurmak, grevde
inform|v.|bilgilendirmek, haber vermek, bilgi vermek
gentle|adj.|yumuşak ve nazik, kibar, nazik
status|n.|hal, statü, durum
purse|n.|para kesesi
prints|n.|baskılar
players|n.|oyuncular
charged|adj.|yüklenmiş, şarj edilmiş, dolu
begging|n.|yalvarma, dilenme, dilencilik
delivered|adj.|verilmiş, taşınmış, iletilmiş
buck|v.|sıçramak, itiraz etmek, canlandırmak
nina|n.|kadın ismi, şişe içinde gemi maketi
construction|n.|yapı, inşaat, inşa
confirmed|adj.|doğrulanan, tiryaki, bağımlı
confession|n.|günah çıkarma, itiraf
trigger|v.|tetiklemek, tetik
cells|n.|hücreler
frankly|adv.|açıkça
exit|v.|çıkmak, çıkış
response|n.|cevap, karşılık, yanıt
cancel|v.|feshetmek, iptal etmek, iptal
argument|n.|argüman, tartışma, sav
principal|n.|okul müdürü, başlıca, asıl
turkey|n.|türkiye, hindi
lucas|n.|iowa eyaletinde şehir, kansas eyaletinde şehir, ohio eyaletinde yerleşim yeri
clinic|n.|klinik
greetings|n.|selamlar
neighbors|n.|komşular
vice|n.|mengene
toy|n.|oyuncak
hannah|n.|kadın ismi, kuzey dakota eyaletinde şehir
everyday|adj.|olağan, günlük, basit
generous|adj.|eli açık, cömert
gain|v.|kazanmak, elde etmek, edinmek
idiots|n.|üç aptal
holly|n.|çoban püskülü, çobanpüskülü, kolorado eyaletinde şehir
enjoyed|adj.|keyif alınımış, hoşlanılımış, beğenilmiş
jungle|n.|orman
link|v.|bağlamak, halka, bağ
underground|n.|yeraltı
smiling|adj.|güleç, tebessüm eden, gülen
mistress|n.|kadın öğretmen, metres, ev sahibesi
teams|v.|diğer takımlara karşı yarışmak, ikili takımlar halinde çalışmak, kriz çözme ekipleri
product|n.|ürün, mahsul
beef|v.|dırlanmak, dır dır etmek, sığır eti
whispers|n.|fısıltılar, dedikodular, şöyle fısıldıyor
religious|adj.|dinsel, dini, dindar
presents|n.|armağanlar, sunar
identify|v.|tanımlamak, tanımak, kimliğini saptamak
chip|v.|havalandırmak (top), takılmak, kırılmak
surveillance|n.|gözetleme, gözetim
carlos|n.|erkek ismi, minnesota eyaletinde şehir
vampire|n.|vampir
routine|adj.|rutin
uses|expr.|kullanıyor
michelle|n.|kadın ismi
underneath|prep.|altında
systems|n.|sistemler
temperature|n.|sıcaklık, ısı derecesi, ısı
waves|n.|ondüle, dalgalar
tribe|n.|oymak, kavim, budun
brad|n.|maşa raptiye, başsız çivi, cam çivisi
deputy|n.|milletvekili, vekil
headquarters|n.|merkez, genel merkez, kumanda merkezi
equal|adj.|denk, eşit
phones|v.|telefonları dinlemek, birinin telefonlarına bakmak, cep telefonları
ken|v.|anlamak, bilmek, tanımak
reckon|v.|tahmin etmek, tutmak, hesaplamak
related|adj.|bağlantılı, ilişkili, ilişkin
incredibly|adv.|inanılmaz bir şekilde, akıl almaz derecede, muazzam
chill|v.|ürpermek, üşüme
spit|v.|tükürmek, tükürük
tracks|n.|parçalar
oscar|n.|çük, penis, kobra
makeup|n.|makyaj, özyapı, yaradılış
bug|n.|böcek
sounded|expr.|sesi iyi geliyordu
spirits|n.|alkol, moral, ruh
nerve|n.|sinir
divorced|adj.|ayrılmış, boşanmış
stake|n.|kazık
port|n.|liman
doorbell|n.|kapı zili, miktar, zil
worries|n.|kaygılar
nephew|n.|erkek yeğen, yeğen, kardeş çocuğu
miller|n.|değirmenci, değirmen makinesi, güney dakota eyaletinde şehir
units|n.|birimler, birler, donanım
proceed|v.|ilerlemek, devam etmek
landing|n.|inme, karaya çıkarma, karaya çıkma
traitor|n.|vatan haini, hain
outfit|v.|donatmak, teçhiz etmek, donatı
chloe|n.|kadın ismi, bir kadın ismi
bail|v.|kefaletle serbest bırakmak, kefalet
fields|v.|petrol sahalarını kamulaştırmak, gerekli alanlar, elektromanyetik alanlar
patience|n.|sabır
recording|n.|kayıt
foolish|adj.|aptalca, aptal, akılsız
loaded|adj.|yüklü
davis|n.|batı virginia eyaletinde yerleşim yeri, güney dakota eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri
costume|v.|elbise giymek, sahne elbisesi, kisve
wayne|n.|batı virginia eyaletinde yerleşim yeri, batı virginia eyaletinde şehir, illinois eyaletinde yerleşim yeri
injured|adj.|yaralı
ian|n.|mısır(lı), -dan, ilgili
pet|n.|evde beslenen hayvan, ev hayvanı, evcil hayvan
cage|n.|kafes
digging|n.|kazma
spain|n.|ispanya
seats|n.|koltuklar
awkward|adj.|beceriksiz, hantal
cleaned|adj.|temizlenmiş, temizlenen
pattern|v.|modele göre yapmak, model, desen
filthy|adj.|çok pis, pis, iğrenilecek derecede pis
visiting|n.|ziyaret, ziyaret eden, deplasmana gitmek
jews|n.|yahudiler
answering|n.|cevaplama, muhatap olma, cevap veren
concentrate|v.|yoğunlaşmak, konsantre olmak, odaklanmak
someplace|adv.|bir yerde, bir yere
citizens|n.|vatandaşlar, raiyyet
aim|v.|amaçlamak, hedeflemek, nişan almak
nancy|n.|kadın ismi, ibne, nonoş
affairs|n.|gidişat, işler, kişisel işler
thick|adj.|kalın
sport|n.|spor
basic|adj.|temel, esas, ana
electric|adj.|elektrik, elektrikli
pleasant|adj.|güzel, zevkli, hoş
cliff|n.|uçurum
nail|v.|çivilemek, çakmak, çivi
russell|n.|iowa eyaletinde şehir, kansas eyaletinde şehir, kentucky eyaletinde şehir
environment|n.|çevre, ortam
western|n.|kovboy filmi, kovboy romanı, batı dili
average|n.|ortalama
ease|v.|rahatlatmak, kolaylaştırmak, rahatlamak
raped|adj.|tecavüze uğramış, gasp edilmiş, soyguna uğramış
interrupt|v.|sekte vurmak, söze karışmak, kesmek
judy|n.|genç kadın, kız, kadın ismi
satisfied|adj.|memnun
beep|v.|ses çıkarmak, korna çalmak, bip sesi
starving|v.|açlıktan ölme, çok aç, açlıktan ölerek
documents|n.|evrak, belgeler
anniversary|n.|yıl dönümü, yıl dönümü kutlaması, sene-i devriye
beth|n.|kadın ismi
election|n.|seçim
warrior|n.|savaşçı
forth|adv.|başka, diğer, sonra
fetch|v.|gidip getirmek
banks|n.|bankalar, alabama eyaletinde şehir
placed|adj.|yerleştirilmiş
timing|n.|saat tutma, zamanlama yapma, hızını ölçme
stones|v.|taşlı sopalı kavgaya dönüşmek, (suda) taş kaydırmak, (suda) taş sektirmek
complex|adj.|karışık
frozen|adj.|dondurulmuş, donmuş
replace|v.|yer değiştirmek, yerine geçmek, yenisiyle değiştirmek
prayer|n.|dua
skip|v.|(bir konudan diğerine) atlamak, atlamak, sekmek
angeles|n.|los angeles polis departmanı, los angeles uluslararası havaalanı, los angeles aşınma makinesi
guilt|n.|suçluluk
tune|v.|akort etmek, nağme, melodi
woo|v.|elde etmeye çalışmak, kur yapmak, desteğini kazanmaya çalışmak
actions|n.|amal, icraat, eylemler
conscience|n.|vicdan
officially|adv.|resmen
martha|n.|kadın ismi, oklahoma eyaletinde yerleşim yeri
machines|n.|elektrik makineleri, dikiş makineleri, bağlantı makinesi
smaller|adj.|daha küçük, küçük
determined|adj.|azimli, belirlenmiş, kararlı
blown|adj.|üflenmiş, esmiş, çiçeklenmiş
hail|v.|dolu yağmak, dolu
unhappy|adj.|mutsuz, keyifsiz
booth|n.|salaş, çardak, kabin
pour|v.|dökmek
berlin|n.|berlin, connecticut eyaletinde şehir, georgia eyaletinde yerleşim yeri
cleared|adj.|ilişkisiz
packed|adj.|ağzına kadar dolu, paketlenmiş, hıncahınç dolu
wrap|v.|sarmak, sargı
randy|adj.|azgın
behalf|n.|biri adına
reasonable|adj.|makul
trunk|n.|gövde
homes|interj.|moruk, ahbap, evler
festival|n.|bayram, şenlik, festival
tradition|n.|gelenek
cigarettes|n.|sigara
le|n.|düşünen adam heykeli
beside|prep.|yanında
harvey|n.|illinois eyaletinde şehir, iowa eyaletinde şehir, kuzey dakota eyaletinde şehir
motive|n.|güdü, motif
beings|n.|alem, insanlar, insanoğlu
bishop|n.|piskopos, georgia eyaletinde yerleşim yeri, kaliforniya eyaletinde şehir
dealer|n.|bayi, satıcı
defendant|n.|sanık, davalı
backup|v.|yedeğini almak, yedek
wounds|v.|yaralarını sarmak, kurşun yaralarından ölmek, bıçak yaralamaları
ouch|n.|toka, of (acı ile)
ann|n.|kadın ismi
nearby|adv.|yakında
effects|n.|eşya, efekt, kişisel eşyalar
dennis|n.|erkek ismi, massachusetts eyaletinde yerleşim yeri, new jersey eyaletinde yerleşim yeri
benefit|v.|yararlanmak, menfaat, çıkar
adventure|n.|macera, serüven
territory|n.|yöre, arazi, tarla
apology|n.|özür
dylan|n.|erkek ismi
unlike|adj.|farklı, benzemez, birbirine benzemeyen
owns|expr.|kalbimin sahibi kim?
boxes|n.|kutular, kutu
thus|adv.|böylelikle, böylece
clay|n.|kil
developed|adj.|gelişmiş
busted|adj.|yakalanmış (suçlu), tutuklanan, kırılmış
pipe|n.|boru
gray|v.|ağarmak, ağartmak, gri
goods|n.|mal
favourite|n.|gözde, favori
salad|n.|salata
loyal|adj.|vefalı, sadık
atmosphere|n.|atmosfer
eva|n.|kadın ismi
freaking|adj.|kahrolası, lanet olası
dropping|n.|damlama, birikinti, düşürme
strangers|n.|ağyar, yabancılar
mouse|n.|fare
downtown|n.|şehir merkezi
francisco|n.|indiana eyaletinde yerleşim yeri
heroes|n.|kahramanlar
pit|n.|çukur
rotten|adj.|çürümüş, çürük
paradise|n.|cennet
meantime|n.|ara, bu arada, iken
jess|v.|atmaca kösteğini takmak, atmaca kösteği
organization|n.|organizasyon, kuruluş, örgüt
hills|n.|tepelik alan, iowa eyaletinde şehir, minnesota eyaletinde şehir
exam|n.|imtihan, sınav
cock|n.|horoz
fairy|n.|peri
earl|n.|kont, ingiliz kontu, kusmak
comment|v.|yorumlamak, yorum
activity|n.|etkinlik, faaliyet
frame|n.|çerçeve
knight|n.|şövalye
testing|n.|deneme
habit|n.|alışkanlık, huy
shelter|n.|barınak, sığınak
flow|v.|akmak, debi, akım
jennifer|n.|kadın ismi
holes|n.|duvar delikleri, yuva
prevent|v.|engellemek, önlemek, engel olmak
anthony|n.|erkek ismi, kansas eyaletinde şehir, new mexico eyaletinde yerleşim yeri
lend|v.|ödünç vermek
cooper|v.|fıçılamak, fıçı yapmak, fıçı onarmak
figures|n.|eşkal, rakamsal veriler
boston|n.|boston, georgia eyaletinde şehir, ingiltere'de yerleşim yeri
sample|n.|örnek, numune
strip|v.|soymak, şerit
landed|n.|arazi sahibi, arazisi olan, miras olarak geniş arazi sahibi kimse
buzzing|n.|uğultu, cızırtı, vızıltı
monk|n.|keşiş
slightly|adv.|hafif tertip, belli belirsiz, biraz
produce|v.|üretmek, imal etmek
annoying|adj.|gıcık, rahatsız edici
judgment|n.|karar
laundry|n.|çamaşırhane, çamaşır
ron|n.|rumen leyi
lousy|adj.|kötü, dandik, iğrenç
souls|n.|papazlık, ruhlarımızı kurtarın, uçuş sırasında uçakta bulunanlar
existence|n.|mevcudiyet, varlık, varoluş
belly|n.|karın, göbek
tries|n.|denemeler
foster|v.|bakmak, teşvik etmek, beslemek
returning|n.|iade, geri dönen, dönüş
answered|adj.|cevap verilmiş, cevaplanan, yanıtlandı
ward|n.|vesayet, koğuş
plants|n.|bitkiler
actress|n.|oyuncu
chairman|n.|başkan (yönetim kurulu), başkan
individual|n.|birey, bireysel, ferdi
hopes|v.|birini hayal kırıklığına uğratmak, bir kimsenin ümitlerini kırmak, ümit bağlamak
tattoo|n.|dövme
fence|n.|çit
sink|v.|suya batmak, batırmak, batmak
punk|v.|aşağılamak, toy, gangster
confident|adj.|kendinden emin
yay||oley! (sevinç ünlemi)
mistaken|adj.|hatalı, yanlış, yersiz
limit|v.|sınırlandırmak, kısıtlamak, sınırlamak
bothering|n.|müziç, bunaltıcı, sıkıcı
st|n.|satış bölgesi, bi, st
uncomfortable|adj.|konforsuz, rahatsız
wednesday|n.|çarşamba
gifts|n.|armağanlar, hediyeler
policeman|n.|polis, zabıta memuru, polis (memuru)
na|abrev.|uygulanamaz, yok, sodyumun simgesi
precisely|adv.|açık olarak, tam, belli
lawyers|n.|hukukçular
greek|adj.|yunan
merely|adv.|yalnızca, sadece
criminals|n.|suçlular
underwear|n.|iç çamaşırı
hoped|v.|umulmak, istenen şekilde gerçekleşmek, fos çıkmak
earned|adj.|kazanmış, kazanılmış
reveal|v.|meydana çıkarmak, ortaya çıkarmak, açığa vurmak
appeared|v.|göründü
derek|n.|erkek ismi
heavens|n.|gök, gökkubbe, gök kubbesi
personality|n.|kişilik, şahsiyet
batman|n.|yarasa adam, emir eri, emireri
virginia|n.|virjinya, amerika'da eyalet, illinois eyaletinde şehir
wives|n.|eşler
colour|n.|renk, boya
worker|n.|işçi
pope|n.|papa, mississippi eyaletinde yerleşim yeri
instructions|n.|talimat
intelligent|adj.|akıllı, zeki
worrying|adj.|endişe verici, üzücü, rahatsız edici
cried|expr.|ağladım, bebek tüm gece ağladı, yalancı çoban
traveling|n.|yolculuk, gezici
bells|n.|geniş paçalı pantolon, çanlar, tennessee eyaletinde yerleşim yeri
impact|n.|darbe, etki, çarpma
robbed|adj.|soyulmuş
relief|n.|rahatlama, rölyef, ferahlama
host|v.|ağırlamak, ev sahibi
footage|n.|foot hesabıyla ölçü, kamera görüntüleri, kamera görüntüsü
odds|n.|ihtimal, şans, fark
patrol|n.|devriye
circus|n.|sirk
mud|n.|çamur
captured|adj.|mazbut, yakalanmış, esir edilmiş
lessons|n.|dersler
occasion|n.|vesile, fırsat
sets|n.|setler
pulse|n.|nabız
ad|n.|reklam
invented|adj.|icat edilmiş, uydurmasyon, icat edilen
diamonds|n.|elmaslar, baklavalar, baklava
matthew|n.|erkek ismi
auntie|n.|yengecik, teyzecik, halacığım
cloud|n.|bulut
francis|n.|oklahoma eyaletinde yerleşim yeri, utah eyaletinde şehir
angels|n.|melekler, angels kodu
hers|pron.|dişil onunki, onunki, onun
classes|n.|üst tabaka, sınıflar
signature|n.|imza
complain|v.|yakınmak, şikayet etmek
blah|n.|palavra, alelade, zırva
monitor|v.|izlemek, gözlemek, monitör
options|n.|opsiyonlar, satın alma veya satma hakkı, seçenekler
claims|v.|iddialar, şikayetler, alacaklar
flies|n.|sinekler, pantolonun ön yırtmacı
pat|v.|okşamak
britain|n.|britanya, büyük britanya, birleşik krallık
hid|n.|hid ups pili, yüksek yeğinlikli boşalmalı lamba
wailing|n.|inilti, ağlama, ağıt
listened|v.|söz geçirmek, dinlenmek, dinlenilmek
countries|n.|ülkeler
yell|v.|bağırmak, bağırma
rats|n.|sıçanlar, reddetme veya aşağılama ifade eden ünlem, sıçan
wondered|expr.|hep merak etmişimdir, merak ettim de, seni merak ettim
smooth|v.|düzlemek, düz, pürüzsüz
resist|v.|direnmek, dayanmak, karşı koymak
companies|n.|şirketler
fantasy|n.|fantezi
passport|n.|geçiş belgesi, pasaport, passport
pitch|v.|yalpalamak, taş döşemek (yol), kur yapmak
hammer|n.|çekiç
homicide|n.|cinayet, adam öldürme
casey|n.|erkek ismi, illinois eyaletinde şehir, iowa eyaletinde şehir
holds|expr.|elinden geleni ardına koymadan, hiçbir kısıtlama olmadan, her yola başvurarak
flew|v.|vaktin nasıl geçtiğini anlayamamak, bir hareketle herşeyin mahvolması, açtı ağzını yumdu gözünü
jacob|n.|hazreti yakup, yakup, erkek ismi
noon|n.|öğle
helicopter|n.|helikopter
dishes|n.|tabak çanak, bulaşık, yemekler
spin|v.|döndürmek, dönme
charm|n.|albeni, cazibe, çekicilik
slap|v.|tokatlamak, tokat
apply|v.|uygulamak, başvurmak, müracaat etmek
fools|n.|aptallar
screeching|adj.|cırlak, cırtlak
discover|v.|keşfetmek
previous|adj.|önceki
kit|n.|topu, pılı pırtı, donanım
authorities|n.|yetkililer, makam ve merci, resmi merciler
moaning|n.|inleme, inilti, sızlanan
photograph|v.|fotoğraflamak, fotoğrafını çekmek, resim vermek
sales|n.|satış
fifty|n.|elli sayısı (50), elli, 50
mickey|v.|alay etmek, gırgır geçmek, gır gır geçmek
beneath|prep.|altında
farewell|n.|veda, elveda
clouds|n.|bulutlar
slipped|adj.|kaymış
represent|v.|temsil etmek, yansıtmak
deaf|adj.|sağır
facing|n.|dönüş, dönme, kaplama
offense|n.|suç
citizen|n.|vatandaş, yurttaş
clown|n.|soytarı, palyaço
snap|v.|patlamak, şipşak fotoğraf çekmek, şakırdatmak (parmaklarını)
messing|n.|karışma, kirletme, karıştırma
hood|n.|kapüşon, kaporta, kukuleta
twelve|n.|oniki, on iki sayısı (12, XII), on iki
interests|n.|ilgi alanları, çıkarlar, menfaatler
cheated|adj.|aldatılan, kazıklanmış, kandırılmış
informed|adj.|haberdar, bilgili, bilgilendirilmiş
humanity|n.|insaniyet, insanlık
producer|n.|yapımcı, üretici
technically|adv.|teknik olarak, teknik yönden, kelimenin tam anlamıyla
accounts|n.|hesap, hesaplar
extreme|adj.|aşırı
cia|abrev.|merkez haberalma teşkilatı
ii|n.|mısır kralı 2. ramses, 2. dünya savaşı sonrası, ikinci tip hata
pays|n.|harçları kiralayan ödeme, tazminat veren, eğitime yatırım en iyi faizi getirir
profile|n.|profil
oxygen|n.|oksitlenme, oksijen, oksijen (simgesi o)
jeez|n.|şaşırma ifadesi
gene|n.|gen, kalıt
shed|v.|dökmek (gözyaşı vb), dökmek, kulübe
minor|n.|rüştünü ispat etmemiş kimse, reşit olmayan kimse, ergin olmayan kimse
ex|v.|(yapmaktan) vazgeçmek, çıkarmak, silmek
theatre|n.|tiyatro
scientific|adj.|ilmi, bilimsel
lovers|n.|aşıklar, sevgililer
chaos|n.|karmaşa, kargaşa
rocket|n.|roket
math|n.|matematik (amer.), matematik, matematiksel
stubborn|adj.|inatçı
august|n.|ağustos
chips|n.|patates kızartması, mikroçip, cips
intense|adj.|yoğun
grey|v.|ağartmak, ağarmak, gri
terrorist|n.|terörist
angle|n.|açı
invitation|n.|davetiye, davet, çağrı
gus|n.|suratsız, asık suratlı
gambling|n.|kumar
respond|v.|yanıtlamak, yanıt vermek, karşılık vermek
thirty|n.|otuz sayısı (30, XXX), otuz, 30
procedure|n.|prosedür, yöntem
absolute|adj.|tam, mutlak, salt
investigate|v.|araştırmak, soruşturmak, incelemek
tragedy|n.|trajedi
stable|n.|ahır, istikrarlı, durağan
session|n.|celse, oturum, seans
capture|v.|esir almak, ele geçirmek
marrying|n.|evlendirme, evlenme çağı, evlilik çağı
ripped|adj.|yırtık, yırtılan, yırtılmış
attacks|n.|atakların şiddeti
stretch|v.|uzatmak, gerinmek, germek
bush|n.|çalı
dates|n.|tarihler
unable|adj.|aciz
gates|n.|new york eyaletinde yerleşim yeri, tennessee eyaletinde yerleşim yeri
mars|n.|mars gezegeni, mars, merih
artists|n.|sanatçılar
increase|v.|arttırmak, artmak, çoğalmak
tastes|n.|lezzetler, zevkler
cared|n.|iyi bakılmış çocuk, bakımlı, iyi bakılan
bottles|v.|boşları almak, (masanın) boşlarını almak, şarap şişeleri
highest|adj.|en yüksek, en fazla, azami
whirring|n.|pır pır, pır pır etme, pır
meanwhile|adv.|aynı anda, bu sırada, iken
grabbed|v.|kapmak, yakalamak, kapma
pigs|n.|kobaylar, itin duası kabul olsaydı gökten kemik yağardı, balık kavağa çıkınca
chop|v.|doğramak
olivia|n.|kadın ismi, minnesota eyaletinde şehir
wheels|n.|otomobil, tekerlekler
shocked|adj.|çarpılmış, şoke, şoklanmış
reverend|n.|din adamı, saygıdeğer, sayın
commercial|adj.|ticari
escort|v.|refakat etmek
engagement|n.|nişan, sözleşme, nişanlanma
corpse|n.|ceset
louise|n.|kadın ismi, mississippi eyaletinde yerleşim yeri
worthy|n.|önemli kimse, ileri gelenlerden biri, saygın kişi
scale|v.|ölçeklendirmek, tartar, ölçek
beats|n.|girişim
williams|n.|arizona eyaletinde şehir, güney carolina eyaletinde yerleşim yeri, iowa eyaletinde şehir
threatening|n.|tehdit, tehditkar
exists|expr.|vardır
academy|n.|akademi
acts|n.|amal, fiiliyat, elçilerin işleri
hop|v.|sekmek
judges|n.|hakimler
furniture|n.|mobilya
shared|adj.|dayalı, ortak, ortaklaşa
ralph|v.|geğirmek, kusmak, sağa dönüş
consequences|n.|sonuçlar
engineer|n.|mühendis
schools|n.|okullar
softly|adv.|yumuşakça, hafifçe, zeka olarak
bombs|adv.|bombaların gölgesinde, aşk bombaları, (aşırı) aşk/sevgi gösterisi
caroline|n.|kadın ismi, 1. ve 2. charles dönemleri ile ilgili, 1. ve 2. charles dönemlerine ait
shark|n.|köpek balığı
transport|v.|taşımak, nakletmek, nakil
population|n.|nüfus
succeed|v.|başarılı olmak, başarmak
creepy|adj.|sürünen, sokulan, emekleyen
sneak|v.|sneaked/snuck - sneaked/snuck, gammazlamak, ispiyonlamak
studies|n.|araştırmalar, dersler, çalışmalar
destruction|n.|tahribat, imha, yıkım
keith|n.|hamile
protected|adj.|korunmalı, mahfuz, muhafazalı
monsters|n.|edebiyatta canavarlar, canavar diye bir şey yoktur, teksas eyaletinde şehir
joining|n.|birleşme
punished|adj.|cezalı, cezalandırılmış, ceza almış
lightning|n.|yıldırım, şimşek
malcolm|n.|nebraska eyaletinde yerleşim yeri
shell|n.|kabuk
fascinating|adj.|büyüleyici
chamber|n.|oda, hazne
ethan|n.|erkek ismi, güney dakota eyaletinde yerleşim yeri
romance|n.|romantizm, romans
instance|n.|misal, örnek
jumping|n.|atlama
groups|n.|gruplar, grup
exhausted|adj.|yorgun, tükenmiş, bitik
testify|v.|tanıklık etmek
studied|adj.|üzerinde çalışılmış, kasıtlı, önceden prova edilmiş gibi
walker|n.|yürüyüşçü, yürüyen kimse, yaya
pin|n.|raptiye
imagined|adj.|muhayyel, hayali, hayal edilmiş
drill|v.|delmek, tatbikat, delgi
investigating|n.|araştırma, inceleme, soruşturma
ye|n.|sen / siz (iskoç)
experienced|adj.|tecrübeli, deneyimli
elena|n.|kadın ismi
necklace|n.|kolye
loyalty|n.|sadakat, bağlılık
junk|v.|atmak, ıskartaya ayırmak, hurdaya çıkarmak
cole|n.|kolza, bir tür lahana, kara lahana
cries|expr.|ağlarsa anam ağlar, gerisi yalan ağlar, komşunun bebeği her gece ağlıyor, komşumun bebeği her gece ağlıyor
stanley|n.|idaho eyaletinde şehir, ingiltere'de yerleşim yeri, iowa eyaletinde şehir
rita|n.|kadın ismi
southern|adj.|güneye ait, güneyli, güney
blocks|n.|bloklar
emotions|n.|duygular
begun|expr.|iyi başlayan işin yarısı bitmiş demektir, başlamak bitirmenin yarısıdır, geriye sayım başladı
maya|n.|afsun, maya
liver|n.|karaciğer
serving|n.|porsiyon
matches|n.|eşleşmeler, kibritler, eşleşiyor
surgeon|n.|cerrah
granted|adj.|imtiyazlı, cevaben evet, varsayarsak
jazz|n.|caz
july|n.|temmuz
supplies|n.|materyal, ikmal maddesi, malzeme
deeper|adj.|derin, daha derin
typical|adj.|tipik
kicking|n.|tepme
obey|v.|itaat etmek
dancer|n.|dansöz, dansçı
remote|n.|uzak
daughters|n.|anneler ve kızları, edebiyatta anneler ve kızlar, babalar ve kızları
moron|n.|kısmen geri zekalı kimse, moron, geri zekalı
latin|n.|latin, roma imparatorluğu'nun dili, latince
teachers|n.|öğretmenler
toby|n.|adam şeklinde bira bardağı, sokak üzerinde yer alan su valfi, balon balığı
sandy|adj.|kumlu
dragged|adj.|alay konusu olmuş, maskara olmuş, komik duruma düşmüş
strategy|n.|strateji
parent|v.|ebeveynlik etmek, soy, anne/baba
album|n.|plak, resimlik, uzunçalar
compared|adj.|karşılaştırılmış, karşılaştırılan
rubbish|n.|zırva, çöp, palavra
helpful|adj.|yardımsever, faydalı, yararlı
powder|n.|toz
sync|v.|senkronize etmek, senkronize etme, ana cadde
bum|n.|otlakçı
passes|n.|geçişler
joan|n.|kadın ismi
fort|n.|hisar
choices|v.|iki cami arasında kalmış beynamaza dönmek, bilinçli seçimler yapmak, iki seçenek arasında kalmak
alley|n.|pasaj, ağaçlıklı yol, patika
supper|n.|akşam yemeği
penis|n.|erkeklik uzvu, erkeklik organı, penis
alibi|v.|mazeret uydurmak, gerekçe, suç mahallinden başka yerde
pole|n.|direk, kutup
coke|n.|kola, kok, kokain
scientist|n.|bilgin, bilim insanı
fighter|n.|dövüşçü, kavgacı, savaşçı
highway|n.|otoban, otoyol
blade|n.|bıçak ağzı
alpha|n.|başlangıç, alfa, alfa versiyonu
diet|n.|diyet, perhiz
liquor|n.|içki
jet|v.|jet uçağı ile uçmak, jetle yolculuk yapmak, fışkırtmak
widow|v.|dul bırakmak, dul, dul kadın
liberty|n.|özgürlük
philip|n.|güney dakota eyaletinde şehir
moral|adj.|ahlaki, manevi
carrie|n.|kadın ismi
award|v.|ödüllendirmek, ödül vermek, mükafat
grief|n.|keder
thirsty|adj.|susuz, susamış
ashley|n.|indiana eyaletinde yerleşim yeri, illinois eyaletinde şehir, kuzey dakota eyaletinde şehir
random|adj.|gelişigüzel, rastgele, rastlantısal
suspects|v.|sorumluları yakalamak, sorumluları tutuklamak, şüphelileri tutuklamak
intention|n.|maksat, kasıt, niyet
julian|adj.|jul sezar'a ait, jülyen, nebraska eyaletinde yerleşim yeri
active|adj.|faal, aktif, etkin
tools|n.|edevat, aletler, alet
driven|adj.|sürülmüş, çakılmış, işler
trauma|n.|travma
headache|n.|baş belası, baş ağrısı
safely|adv.|emniyetle, güvencede olarak, güvenli bir şekilde
alexander|n.|erkek ismi, iowa eyaletinde şehir, kansas eyaletinde şehir
knee|n.|diz
lads|n.|arkadaşlar (erkekleri kastederek), beyler
novel|n.|roman
conversations|n.|düşsel sohbetler, sonu gelmeyen sohbetler, tüm iletişimleri genişlet
invisible|adj.|görünmez
internal|adj.|dahili, iç
peaceful|adj.|huzurlu, barışçıl
humming|n.|vırıltı, vınlama, uğultu
washed|adj.|yıkanmış
drives|n.|fiziksel dürtüler, güdü türleri, aç elini kora sokar
talented|adj.|yetenekli, hünerli, kabiliyetli
li|n.|çin’de, hlai, lityumun simgesi
aid|v.|yardım etmek, yardım
elephant|n.|fil
troubles|n.|beliyyat, sorunlar
core|n.|göbek, öz, çekirdek
serial|n.|seri
painted|adj.|renkli, boyalı, boyanmış
divine|adj.|ilahi, kutsal
jam|v.|kıstırmak, sıkıştırmak, sıkışmak
goat|n.|teke, keçi
opera|n.|opera, lirik dram
thieves|n.|hırsızlar
guessing|n.|kestirme
objection|n.|mahzur, karşı gelme, itiraz
whiskey|n.|viski
florida|n.|florida, amerika'da eyalet, massachusetts eyaletinde yerleşim yeri
resistance|n.|rezistans, direnç, direnme
dressing|n.|giyme, giyinme, sargı
attached|adj.|yapışık, ilişik, bağlı
aaron|n.|erkek ismi, harun (hz musa'nın kardeşi)
brief|adj.|kısa, kısa ve öz
punish|v.|cezaya çarptırmak, silip süpürmek, ceza vermek
eternal|n.|sonsuz, ebedi
lois|n.|kadın ismi
required|adj.|gerekli
victoria|n.|nilüfer, körüklü gezinti arabası, kadın ismi
fabulous|adj.|efsanevi, olağanüstü, süper
twins|n.|ikizler, ikizler burcu, kristal ikizlenmesi
characters|n.|karakter sayısı, karakter, karakterler
cooked|v.|pişmek, zom, pilot (sarhoş)
ruth|n.|üzülme, merhamet, yerinme
dreamed|adj.|rüya gören, rüya görmüş
arts|n.|güzel sanatlar, sanatlar, şeytanlık
naughty|adj.|yaramaz, afacan, haşarı
stabbed|adj.|bıçaklanmış
tend|v.|eğilimi olmak
diane|n.|kadın ismi
tap|v.|hafifçe vurmak, tıkaç, musluk
soap|n.|sabun
locker|n.|kilitli dolap, mağaza, malzeme dolabı
development|n.|gelişim, gelişme
images|n.|görüntüler, resimler, yansımalar
prick|v.|acıtmak (deriye batan diken vb), yaralamak, diken batırmak
global|adj.|küresel, dünya çapında
string|n.|sicim, dizi
bitter|adj.|acı, acı (tat)
sharing|n.|paylaşım
corn|n.|mısır
craig|n.|erkek ismi, iowa eyaletinde şehir, kolorado eyaletinde şehir
fits|v.|gülmekten kırılmak, öfke krizi/atağı, herkese uyan
tent|n.|çadır
forms|n.|formlar
votes|v.|oy toplamak, oyları almak, oy çokluğu ile karar vermek
propose|v.|önermek, teklif etmek
monica|n.|kadın ismi
constantly|adv.|ikide bir, sürekli, sabit düzeyde
granny|n.|anneanne, babaanne, nine
nicely|adv.|hoşça, hoş, iyi
nerves|n.|asap, histeri, sinir bozukluğu
arguing|n.|tartışma
abuse|v.|suistimal etmek, kötüye kullanmak, suistimal
relatives|n.|akraba, akrabalar
survival|n.|hayatta kalma
gloves|n.|eldivenler, eldiven
tracking|n.|kaydırma, kelime arası boşluk, izcilik
zoe|n.|kadın ismi
bend|v.|bükülmek, eğmek, eğilmek
review|v.|gözden geçirmek
connect|v.|bağlamak, bağlanmak
separated|adj.|ayrılmış (bölümlere ayrılmış vb), ayrılmış, ayrık
elder|n.|mürver ağacı, yaşlı kimse, yaşlı
beard|n.|sakal
admiral|n.|amiral
diana|n.|ay, kamer, kadın ismi
salary|n.|aylık, maaş
areas|v.|alanları doldurmak, koruma alanları, sağlık hizmetleri alanı
disturb|v.|rahatsız etmek
pro|n.|olumlu bir yan (bir meseleye ait), taraftar, yararlı bir yan (bir meseleye ait)
maintain|v.|sürdürmek, bakım yapmak, bakmak
solved|adj.|hallolmuş, çözülmüş (problem vb), çözülmüş
wealth|n.|varlık, zenginlik, servet
bitches|n.|kahpe
possession|n.|sahiplik, mülk
gimme|expr.|çocuk oyuncağı, yat benimle, ver bana
plates|n.|tabaklar, maça kurutma levhası
shoulders|n.|omuzlar
burnt|adj.|yanık
recorded|adj.|mazbut, kaydedilmiş, kayıtlı
upper|adj.|üst
counts|n.|münferit iddialar
tale|n.|masal, öykü, hikaye
profit|n.|kar, fayda, çıkar
colleague|n.|meslektaş
warehouse|n.|ardiye, antrepo, toptan satış yeri
hostage|n.|rehin, rehine
shore|n.|sahil, kıyı
porn|n.|porno
miami|n.|florida eyaletinde şehir, missouri eyaletinde şehir, oklahoma eyaletinde şehir
fifteen|n.|onbeş, on beş sayısı (15, XV), on beş
visitors|n.|gelen giden, ziyaretçiler
bo|n.|eroin, bo, laos’da yaşayan etnik bir grup
net|n.|şebeke, file, ağ
insult|v.|hakaret etmek, aşağılamak, hakaret
owen|n.|erkek ismi, wisconsin eyaletinde şehir
cities|n.|şehirler
causing|n.|sebebiyet, sebep olan, neden olan
lemon|n.|limon, limonlu
heal|v.|şifa bulmak, iyileştirmek
banging|n.|çakma (cinsel anlamda)
honeymoon|n.|balayı
appeal|v.|başvurmak, çağrı, cazibe
marshall|n.|mareşal, arkansas eyaletinde şehir, indiana eyaletinde yerleşim yeri
critical|adj.|kritik, ciddi, hassas
creating|n.|yaratma, oluşturma, oluşturulan
scotland|n.|iskoçya
crane|n.|vinç
enormous|adj.|kocaman, muazzam
testimony|n.|şahadet, tanıklık, şahitlik
praise|v.|methetmek, övmek, övgü
fights|v.|yiğitliğin onda dokuzu kaçmaktır, kavga çıkarmak
indians|n.|kızılderililer, yerliler
commission|n.|komisyon
growls|v.|hırıldamak, hırlamak
nicole|n.|kadın ismi
sins|n.|taksirat
fraud|n.|sahtekarlık, dolandırıcılık
branch|v.|dallanmak, şube, dal
happily|adv.|mutlu bir şekilde, güle oynaya, bereket versin ki
bout|n.|gösteri, müsabaka, kriz
covering|n.|kaplama
occurred|expr.|aklıma şöyle bir şey geldi, bir deprem oldu, deprem oldu
beans|n.|fasulye, sakinleştiriciler, baş
raw|adj.|çiğ, ham
muscle|n.|adale, kas
pages|n.|sayfa sayısı, sayfalar
tense|adj.|gergin
relationships|n.|ilişkiler
management|n.|işletme, idare, yönetim
assignment|n.|görevlendirme, ödev, atama
blonde|adj.|sarışın
catching|n.|yakalayış, kapma, yakalama
exposed|adj.|maruz
canada|n.|kanada
dont|n.|aldırmama, aynı fikirde değilim, bunu yapmak istemiyorum
han|n.|han hanedanlığı
von|n.|von mises etkin gerilimi, von mises akma kıstası, von mises kıstası
comedy|n.|komedi, güldürü, komik olaylar
marco|v.|marco polo oynamak, marco polo komitesi, marco polo koyunu
stroke|n.|felç, vuruş, inme
whistling|n.|uğuldama, ıslık, vınlama
buildings|n.|site, inşaat, yapılar
shaking|n.|sallama, titreme, sarsma
facility|n.|tesis
appropriate|v.|el koymak, münasip, uygun
remarkable|adj.|dikkat çekici, göze çarpan, dikkate değer
transferred|adj.|taşınmış, transfer edilen, temlik edilen
drawn|adj.|çekilmiş, çizili
tits|v.|birisini rahatsız etmek, uyuz etmek, büyük göğüsler
clicking|n.|vuruntu, tıklama, tıklayan
symbol|n.|sembol, simge
motor|n.|motor
employees|n.|çalışanlar, işçiler, personeller
ambassador|n.|elçi, büyükelçi
mothers|n.|anneler
pile|n.|yığın
feeding|n.|besleme
soda|n.|soda
checks|n.|çekler, (kumar) fişler, kılcal yüzey çatlakları
bears|expr.|bu söylediğimi doğruluyor, tekrar söylemeye değer, tekrar söylemekte fayda var
cookies|n.|kurabiye, krek kokain, çerezler
slut|n.|pasaklı kadın, pis kadın, dişi köpek
awfully|adv.|çok, çok kötü, son derece
stepped|adj.|kademeli, kademe tarzında
toys|n.|oyuncaklar
levels|n.|sel sınıflama derecesi, çehrenin, yüzün üç basamağı
differently|adv.|farklı olarak, başka şekilde, farklı bir biçimde
magnificent|adj.|fevkalade, muhteşem, görkemli
steak|n.|kalın bir dilim et, kontrfile, biftek
tube|n.|tüp, boru
leaders|n.|liderler
superior|n.|amir, üst (rütbe), üstün
herr|n.|bay
pan|n.|tava
expression|n.|anlatım, ifade
currently|adv.|halen, şu anda, mevcut durumda
throne|n.|taht
deadly|adj.|ölümcül, öldürücü
bee|n.|arı
tooth|n.|diş
depressed|adj.|canı sıkkın, bunalımlı, morali bozuk
potatoes|n.|patates kızartması
wicked|adj.|kötü
resources|n.|imkanlar, olanaklar, parasal kaynaklar
native|adj.|yerli
centuries|n.|yüzyıllar
karl|n.|karl fischer metodu, kulumetrik karl fischer titrasyon metodu, karl fischer titrasyon yöntemi
poetry|n.|şiir
multiple|adj.|çoklu
cable|n.|kablo
shortly|adv.|kısaca
buzz|v.|uğuldamak, vızıldamak, vızıltı
socks|n.|çorap
fingerprints|n.|parmak izleri
goddess|n.|tanrıça
chin|n.|çene
anxious|adj.|endişeli, kaygılı, huzursuz
september|n.|eylül
colors|n.|bayrak, sancak, renkler
basketball|n.|basketbol, basket topu
promises|n.|boş vaatler, boş umutlar, içi boş vaatler
explained|adj.|açıklanmış
appearance|n.|dış görünüş, görünüm, görünüş
musical|adj.|müzikli, müziğe ait, müzikal
sends|expr.|tanrı eti, şeytansa aşçıları gönderir, tanrıdan iyilik şeytandan kötülük gelir, tanrı iyilik şeytan kötülük verir
slide|n.|sürgü, slayt, kaydırak
ultimate|adj.|nihai, son
pork|n.|domuz eti, seks yapmak, sevişmek
communication|n.|iletişim
payment|n.|ödeme
structure|v.|yapılandırmak, yapı, bünye
paperwork|n.|kırtasiyecilik, dokümantasyon, evrak işleri
obsessed|adj.|kafayı takmış, etkilenmiş, takınaklı
lazy|adj.|uyuşuk, miskin, tembel
russians|v.|ruslara casusluk yapmak
actors|n.|aktörler, sanatçılar
squeeze|v.|sıkışmak, sıkmak
magical|adj.|büyülü, fevkalade, çok güzel
colleagues|n.|meslektaşlar
admire|v.|hayranlık duymak, hayran olmak, beğenmek
madness|n.|çılgınlık, delilik
roads|n.|demirleme yeri, yollar, liman ağzı
entry|n.|giriş
injury|n.|zarar
burden|v.|sırtına yüklemek, yük
racing|n.|yarışma, yarış, koşma
manner|n.|yol, biçim, tutum
freezing|n.|donma
bits|n.|yuva açma aletleri, bits, bit
norman|n.|normandiya'nın yerlisi olan kimse, normandiya fransız lehçesi, normandiyalı
mount|v.|binmek
battery|n.|akü, pil, batarya
dessert|n.|tatlı
pound|v.|yumruklamak, çakmak, dalgaya çarpmak (gemi)
visited|adj.|gidilmiş, gezilmiş, ziyaret edilen
motel|n.|motel
rumbling|n.|guruldama, gümbürdeme, gürleme
cinema|n.|sinema
fond|adj.|düşkün
halfway|adv.|yarı yolda
rifle|n.|tüfek
reception|n.|resepsiyon, alış, (cep telefonu için) çekme/sinyal
statue|n.|heykel
fridge|n.|frijider, dolap, buzdolabı
brick|n.|tuğla
abandon|v.|terk etmek, bırakmak, vazgeçmek
lap|n.|kucak
natalie|n.|kadın ismi
wars|v.|savaşları önlemek, parlama savaşları, mezhep savaşları
recommend|v.|tavsiye etmek
brush|v.|fırçalamak, fırça
nelson|n.|kanada'nın orta kesiminde nehir, yeni zelanda'da liman şehri, georgia eyaletinde şehir
pill|n.|hap
concept|n.|konsept, kavram
delay|v.|gecikmek, ertelemek, rötar
quarters|n.|konut, yatacak yer, ikametgah
korea|n.|kore
janet|n.|kadın ismi
rub|v.|sürtmek, ovmak, sürtünmek
mall|v.|vurmak, tokmakla dövmek, dövmek
soil|n.|toprak
complaint|n.|şikayet
sail|v.|denize açılmak, yelkenli, yelken
baker|n.|fırıncı, ekmekçi, portatif fırın
coughs|v.|öksürmek, öksürük
bucket|n.|kova
description|n.|tasvir, betimleme, tarif
badge|n.|rozet
measure|v.|ölçmek, önlem, ölçü
hip|n.|kalça
function|n.|işlev, fonksiyon
indistinctly|adv.|belli belirsiz, hayal meyal, belirsizce
harris|n.|iowa eyaletinde şehir, missouri eyaletinde şehir, minnesota eyaletinde şehir
foundation|n.|dayanak, vakıf, kuruluş
labor|v.|uğraşmak, çalışmak, emek
willie|n.|penis
waiter|n.|garson
homeless|adj.|evsiz
proved|adj.|mücerrep, ispatlanmış
unfortunate|adj.|şanssız, makus, talihsiz
log|n.|tomruk, kütük
meetings|n.|toplantılar
giggles|n.|eğlence olsun diye, iş olsun diye, öylesine
combat|n.|muharebe
poem|n.|şiir
polish|v.|parlatmak, cilalamak, polonya dili
handed|adj.|elli, getirilen, uzatılmış
mia|n.|görev sırasında kaybolan asker, savaşta kayıp asker
weed|n.|ot
raymond|n.|güney dakota eyaletinde yerleşim yeri, güney dakota eyaletinde şehir, iowa eyaletinde şehir
tons|n.|yığın, çok daha, katbekat
satellite|n.|uydu
jersey|n.|kazak, kılık, örme kumaş
eagle|n.|kartal
privacy|n.|mahremiyet, gizlilik
chapter|n.|bölüm
treating|adj.|müdavi
wisdom|n.|akıl, bilgelik
flip|v.|fiske atmak, fiske
entering|n.|giriş, duhul, girme
barn|n.|ahır
farmer|n.|çiftçi
clan|n.|oymak, ortak bir atası olan insan topluluğu, sop
budget|n.|bütçe
pub|n.|taverna, meyhane, birahane
temporary|adj.|geçici
effective|adj.|efektif, etkileyici, etkili
sonny|n.|evlat, oğlum
wendy|n.|kadın ismi
juan|n.|erkek ismi, çapkın erkek, don juan
lamb|n.|kuzu
plot|v.|komplo kurmak, hikayenin konusu, komplo
riley|n.|indiana eyaletinde yerleşim yeri, kansas eyaletinde şehir
proposal|n.|öneri, teklif
sticks|n.|çubuklar, dağbaşı, kuş uçmaz kervan geçmez yer
searched|expr.|arandı
blessing|n.|nimet
rage|v.|kudurmak, hiddetlenmek, (sinirden) köpürmek
bothered|adj.|canı sıkkın, rahatsız olmuş, rahatsız edilerek sinirlendirilmiş
sydney|n.|yeni güney galler eyaletinin başkenti
basis|n.|temel
manners|n.|töre, ahlak, hareket tarzı
recover|v.|kurtarmak, iyileşmek
twist|v.|bükülmek, burmak, bükmek
leak|v.|sızdırmak, sızmak, akmak
item|n.|kalem, madde
catholic|n.|katolik
sighing|n.|iç çekme
retired|adj.|emekli
kings|n.|krallar
inner|adj.|iç, içerideki
cents|n.|peniler, bronz sikkeler
affect|v.|etkilemek, tesir etmek
forbidden|adj.|yasak
patch|n.|yama
drops|n.|damla, damlalar
necessarily|adv.|muhakkak, şart, ister istemez
provided|adj.|tedarik edilen, sağlanmış, ancak
meters|n.|su saatleri, su sayaçları, yarışın son metreleri
booked|adj.|rezerve edilmiş, ayırtılmış, ayrılmış
returns|n.|raporlar, kar, rapor vb neticeleri
gloria|n.|kadın ismi, zafer
fires|n.|yangınlar
humor|n.|mizah
torn|adj.|yırtık
rocky|adj.|kayalık
introduced|adj.|tanıtılan, tanıtılmış, başlattı
creative|adj.|yaratıcı
betray|v.|ihanet etmek
soviet|n.|sovyet rusya idare meclisi, meclis, sovyet
various|adj.|çeşitli, muhtelif
added|adj.|munzam, katma, ekli
discovery|n.|buluş, bulgu, keşif
cowboy|n.|kovboy
suspected|adj.|şüphelenilen, maznun, sanık
suggested|v.|meydana atılmak, önerilmek, tavsiye edilen perakende fiyatı
delighted|adj.|memnun, zevk almış, hoşnut edilmiş
sticking|n.|yapışma, batırma, yapışkanlı
dive|v.|dalmak
shane|n.|çekici/seksi tip
radar|n.|radar
prosecutor|n.|savcı
amber|v.|kehribar rengine boyamak, kehribar rengi yapmak, samankapan
vast|n.|büyüklük, büyük boşluk, engin
quinn|n.|güney dakota eyaletinde yerleşim yeri
owned|v.|marizlenmek, mülkiyetinde olmak, hükümet binası
cookie|n.|kurabiye
finest|adj.|en güzel
felix|n.|erkek ismi
pump|n.|pompa
valentine|n.|sevgililer günü, sevgililer günü hediyesi, on dört şubatta sevgiliye gönderilen kart
counter|n.|tezgah, sayaç
sorts|n.|sıralar
coin|n.|madeni para, sikke
warren|n.|ağıl, kalabalık semt, kalabalık mahalle
slaves|n.|köleler
marine|n.|deniz askeri, denizcilik, denizci
illness|n.|hastalık
sack|v.|çuvala doldurmak, çuvala koymak, çuval
bid|v.|teklif etmek
require|v.|gerekmek, ihtiyacı olmak, gerek duymak
moscow|n.|moskova, idaho eyaletinde şehir, kansas eyaletinde şehir
largest|adj.|çok büyük, en geniş, en büyük
washing|n.|yıkanma, yıkama
achieve|v.|elde etmek, başarmak
causes|n.|esbap, sebepler, nedenler
mo|n.|molibdenin simgesi, pts
dope|v.|doping yapmak, uyarıcı vermek, verniklemek
nest|n.|yuva
palm|n.|palmiye, avuç içi, avuç
logan|n.|erkek ismi, batı virginia eyaletinde şehir, iowa eyaletinde şehir
constant|adj.|sabit, durağan, değişmez
boo|v.|yuhalamak
medication|n.|ilaç
gravity|n.|yer çekimi
booze|v.|alem yapmak, demlenmek, içki içmek
noah|n.|nuh, nuh peygamber, erkek ismi
evan|n.|erkek ismi, minnesota eyaletinde şehir
abroad|adv.|yurt dışında
christine|n.|kadın ismi, kuzey dakota eyaletinde şehir
rising|adj.|doğan, yükselen
analysis|n.|çözümleme, analiz, tahlil
cuts|n.|sıkı kaslar, hatları belirgin kaslar, hatları belirgin karın kasları
eats|n.|yiyecek, gıda, yemek
employee|n.|işçi, eleman, çalışan
vodka|n.|votka
damaged|adj.|zarar verilmiş, hasar görmüş, bozuk
solar|adj.|güneş
height|n.|yükseklik, boy
pops|n.|lolipop, bekaretini bozmak
yards|v.|çok çalışmak, (bir işin) sonuna kadar gitmek, (tehlikeli bir şeyi) sonuna kadar götürmek
terrified|adj.|dehşete düşmüş, dehşete kapılmış, yılgın
suitcase|n.|bavul
chemical|n.|kimyasal madde, kimyasal, kimyevi
preparing|n.|hazırlama, hazırlanıyor
advanced|adj.|ileri
fund|n.|kaynak, sermaye, fon
wears|expr.|hevesini alana kadar, heyecanı bitene/kaçana/geçene dek/kadar, modası geçene dek/kadar
chirping|adj.|cıvıl cıvıl
web|v.|etrafına ağ çekmek, örümcek ağı, anahtar dili
phase|n.|aşama, safha, evre
prom|n.|gezinti, gezinti yeri, mezuniyet balosu
suggesting|expr.|gösteren, farzedelim ki, öne süren
fleet|n.|filo, donanma
lame|v.|sakatlamak, ayağı sakat, topal
irish|n.|irlanda dili, irlandaca, irlanda dilinde
editor|n.|editör
october|n.|ekim
assumed|adj.|farzedilen, takma, varsayılan
whip|v.|kamçılamak, kırbaçlamak, kamçılama
region|n.|bölge, yöre
amongst|prep.|arasında, aralarında
temper|n.|huy
discussion|n.|tartışma
engines|n.|motorlar
operate|v.|ameliyat etmek, çalıştırmak, işletmek
sunshine|n.|neşe, gün, güneş
acted|expr.|ağrılarım azdı, romatizmam azdı, etkinmek
undercover|adj.|gizli, gizli yapılan, gizli çalışan
horror|n.|korku
tested|adj.|test edilen, mücerrep, test edilmiş
smash|v.|paramparça etmek
contrary|adj.|aksi, karşıt, zıt
roses|n.|güller
poker|n.|ocak demiri, ocak süngüsü, köseği
wrapped|adj.|sarılı, dalmış, paketlenmiş
korean|adj.|kore
graham|n.|alabama eyaletinde şehir, georgia eyaletinde şehir, missouri eyaletinde şehir
mi|n.|mi
fu|n.|kung fu hareketleri, koşullu olasılık yoğunluk işlevi, sebzeli, etli ve çin soslu bir omlet çeşidi
ivan|n.|korkunç ivan
focused|adj.|üzerine odaklanılmış, odaklanmış
liam|n.|erkek ismi
tragic|adj.|acıklı
carla|n.|kadın ismi, bir kadın ismi
demons|n.|iblis, şeytan
rounds|n.|devriye, kontrol, yuvarlaklar
entertainment|n.|eğlence
gathered|adj.|toplu
yells|v.|bağırmak, bağırma
lincoln|n.|alabama eyaletinde şehir, arkansas eyaletinde şehir, ingiltere'de şehir
crossing|n.|geçiş, kesit, yaya geçidi
blanket|n.|battaniye
nut|n.|kabuklu yemiş, kuru yemiş
travis|n.|ahırdaki bölmeleri ayıran duvar, ahır
pockets|v.|cebini doldurmak, yolunu bulmak, ellerini cebine sokmak
limited|adj.|kısıtlı, sınırlı
paintings|n.|tablo, resim
sober|adj.|sarhoş olmayan, ayık
caesar|n.|diktatör, sezar, despot
intended|adj.|planlanan, istenilen, yönelik
niece|n.|kız yeğen
computers|n.|bilgisayar sayısı, bilgisayarlar
tennis|n.|tenis
needle|v.|iğnelemek, iğne
chicks|n.|dost avcı uçakları
traditional|adj.|geleneksel
delicate|adj.|narin, hassas, kolay kırılabilen
independent|adj.|bağımsız
leslie|n.|kadın ismi, georgia eyaletinde şehir, michigan eyaletinde şehir
lauren|n.|kadın ismi, bir kadın ismi
grandson|n.|erkek torun, torun
repair|v.|tamir etmek, onarmak, onarım
brandon|n.|güney dakota eyaletinde şehir, ingiltere'de yerleşim yeri, iowa eyaletinde şehir
executive|n.|yönetici, yönetsel, idari
colin|n.|erkek ismi
recognized|adj.|onaylı, beylik, saygın
holmes|n.|holmes etkisi, florida eyaletinde şehir, ohio eyaletinde bölge
regarding|prep.|ilişkin
weakness|n.|kuvvetsizlik, halsizlik, cansızlık
aliens|n.|yabancılar
gunshots|v.|iki el silah sesi duymak, üç el silah sesi duymak, silah sesleri duymak
european|n.|avrupalı
method|n.|metot, usul, yöntem
tool|n.|araç, alet
demands|n.|talepler
permit|v.|izin vermek, ruhsat, izin
towel|n.|havlu
daisy|n.|papatya
nowadays|adv.|bu günlerde
spider|n.|örümcek
northern|n.|kuzeyli kimse, kuzeyli, kuzey
zoo|n.|hayvanat bahçesi
praying|n.|yalvarma
antonio|n.|erkek ismi
passengers|n.|yolcular
con|v.|dikkatle okumak, dolandırmak, dümen kullanmak
australia|n.|avustralya
technique|n.|teknik, uygulayım, fen
gently|adv.|nazikçe, kibarca, nazik bir şekilde
operations|n.|icraat, işlemler, harekat
planes|n.|dönme dolap, dönme salıncak, asal düzlemler
bunny|n.|kız, tavşan(cık), tavşancık
gunfire|n.|silah ateşi, ateş etme, top ateşi
shining|adj.|parlayan
backwards|adv.|geriye, arka tarafa
skill|n.|maharet, beceri, hüner
baron|n.|büyük iş adamı, baron, çok zengin işadamı
kidnapping|n.|çocuk kaçırma, adam kaçırma, adam kaldırma
marshal|v.|önüne düşüp götürmek, dizmek, sıraya koymak
petty|adj.|ehemmiyetsiz, cüzi, olağan
sealed|adj.|mühürlü
massage|v.|masaj yapmak, masaj
raising|n.|yükseltme, kaldırma, yetiştirme
menu|n.|menü, mönü
diary|n.|günlük
fucker|n.|siken kimse, beceren kimse, herif
wagon|n.|üstü açık oyuncak araba, dört tekerlekli, katar
audition|v.|ses sınavı yapmak, oyuncu seçmelerine katılmak, duyma gücü
mitch|v.|dersi asmak, okulu kırmak
mexican|n.|meksikalı, meksika, meksika'ya özgü
casino|n.|kumarhane, gazino
bacon|n.|domuz pastırması
diego|n.|erkek ismi
dutch|n.|hollanda, eş, hollandalı
promotion|n.|promosyon, tanıtım, terfi
click|v.|tıkırdamak, çıtırdamak, anlamak
forgiveness|n.|affetme, af
burst|v.|patlamak, patlak
permanent|adj.|daimi, kalıcı
interfere|v.|müdahale etmek
chanting|adj.|temposu değişmeyen, tekdüze söylenen, tilavetle okunan
dammit|interj.|lanet olsun
spencer|n.|arkadaki yedek yan yelkeni, batı virginia eyaletinde şehir, güney dakota eyaletinde şehir
recovered|adj.|ortaya çıkarılan, düzeltilmiş, iyileştirilmiş
registered|adj.|kayıtlı
sunny|adj.|güneşli
packing|n.|paketleme, ambalaj
scenes|v.|kulis yapmak, perde arkasında işin iç yüzü, gizli kapaklı tarafı
superman|n.|üstinsan, süpermen, üstün insan
questioning|n.|sorgu, sorgulama, soru sorma
unfair|adj.|adil olmayan, adil değil, adaletsiz
admitted|adj.|kabul edilen, kabul edilmiş, herkesçe bilinen
ancestors|n.|soy, ecdat, cet
polite|adj.|nazik, kibar
completed|adj.|tamamlanan, tamamlanmış, tamamla
swallow|v.|yutmak, kırlangıç
conduct|v.|yönetmek, yürütmek, idare etmek
prayers|n.|dualar, namaz, ibadet
sheet|n.|levha, çarşaf
fried|adj.|kızartılmış, yağda pişirilmiş, sarhoş
avenue|n.|bulvar, cadde, yol
poisoned|adj.|zehirli
reverse|adj.|ters
newspapers|n.|gazeteler, basın
ford|v.|sığ yerden yürüyerek geçmek, nehirden yaya geçmek, geçit
complaining|n.|söylenme, ağlama, sızlanma
senses|n.|akıl, us, hisler
investment|n.|yatırım
absurd|adj.|absürt, saçma
potato|n.|patates
understands|v.|anladığı dilde konuşmak, anlayacağı dilde konuşmak, kimse beni anlamıyor
grows|n.|güç zayıflıktan doğar, bilgi paylaştıkça büyür, ağaç yaşken eğilir
inspired|adj.|ilhamlı, vahiy almış, heyecanlı
ruby|n.|yakut
celebrating|n.|kutlama
tag|v.|etiketlemek, etiket
ram|n.|koç, koçbaşı, şahmerdan
requires|expr.|gerektirir
bonnie|n.|kadın ismi, güzel, göze hoş görünen
bugs|n.|programdaki hatalar
leonard|n.|kuzey dakota eyaletinde şehir, missouri eyaletinde yerleşim yeri, minnesota eyaletinde şehir
elliot|n.|eliyot aksı, eliot tip dingil, elliot tipi ön dingil
hooked|adj.|bağlanmış, bağlı, düşkün
jill|n.|sevgili, kız, kadın ismi
ranch|n.|çiftlik
safer|adj.|daha emniyetli, emniyetli
worn|adj.|eskimiş, yıpranmış, aşınmış
crashing|n.|çarpışma, çarpma, hızlı
lands|n.|set, setler
heather|n.|süpürge çalısı, süpürgeotu, süpürgeotuna benzer bir çalı
ash|n.|kül
leather|n.|deri
grounds|n.|telve, sebep, saha
assuming|adj.|kendini beğenmiş, kibirli, küstah
nails|v.|tırnak kesmek, tırnaklarını yemek, tırnaklarını kesmek
dana|n.|iowa eyaletinde şehir, illinois eyaletinde yerleşim yeri, indiana eyaletinde yerleşim yeri
conspiracy|n.|komplo
thanksgiving|n.|şükran günü, şükretme, teşekkür
pierre|n.|güney dakota eyaletinde yerleşim yeri, güney dakota eyaletinde şehir
guardian|n.|vasi, koruyucu, gardiyan
rumors|n.|dedikodular, söylentiler
yen|v.|hasret çekmek, arzulamak, hasret
megan|n.|kadın ismi
ashes|n.|küller, ölünün külleri, kül
terror|n.|terör, dehşet
misunderstanding|n.|yanlış anlama
tire|v.|yorulmak, yormak, tekerlek
boats|v.|köprüleri atmak, kayıklar ve kayıkçılık, bir ulusun refahı herkese yarar sağlar
parade|n.|geçit töreni
halt|v.|durmak, durdurmak
immunity|n.|bağışıklık
adults|n.|genç erişkinler, yetişkinlere ingilizce öğretme sertifikası, rıza gösteren yetişkinler
steam|n.|istim, buğu, buhar
closely|adv.|yakından
pearl|n.|inci
soccer|n.|futbol
adrian|n.|erkek ismi, georgia eyaletinde şehir, missouri eyaletinde şehir
priority|n.|öncelik
shouts|n.|alkış tufanı
happier|adj.|daha mutlu, mutlu
khan|n.|kağan, kaan, hakan
struggling|n.|mücadele etme, mücadele içinde olma {hayat mücadelesi vb}
root|n.|köken, kök
larger|adj.|daha geniş, geniş, büyük
november|n.|kasım, teşrin-i sani
boot|n.|bot, çizme
conflict|v.|çekişmek, anlaşmazlığa düşmek, çekişme
laughed|v.|komik duruma düşmek, dün çok güldük, gülmekten öldüm
debbie|n.|ortamdaki olumlu havayı boza depresif tip
cherry|n.|kiraz, vişne
honking|n.|kusma
concerns|n.|ilgi, kaygılar
celebration|n.|kutlama
sore|n.|yara, ağrılı, ıstıraplı
unconscious|adj.|kendinden geçmiş, baygın, şuursuz
cattle|n.|sığır
breasts|n.|büyük göğüsler, küçük göğüsler, erkek göğüsleri
fairly|adv.|büsbütün, adil bir şekilde, uygunca
fee|n.|harç, ücret
recognise|v.|tanımak
wade|v.|sığ suda yürümek, çamurda yürümek, zorla ilerlemek
radiation|n.|ışınım, ışıma, radyasyon
holidays|n.|tatiller, tatil günleri
raining|n.|yağış, yağma, yağmurlu
forgetting|n.|unutma
lungs|n.|akciğer, ciğer, akciğerler
register|v.|kaydetmek, sicil, kayıt
shadows|v.|gözleri mor halkalarla çevrili olmak, perşembenin gelişi çarşambadan bellidir, geçmişin izi silinmez
specifically|adv.|belirli bir biçimde, özellikle, spesifik olarak
sarge|n.|çavuş
ideal|n.|ülkü, ideal
turtle|n.|kaplumbağa
spoil|v.|şımartmak, berbat etmek, bozulmak
deserved|adj.|hak edilmiş, hak kazanmış
candidate|n.|aday
lance|n.|mızrak
types|n.|türler, tipler
bloke|n.|herif, arkadaş, adam
explode|v.|patlatmak, patlamak
immediate|adj.|acil
belonged|expr.|bu ses onun sesiydi, bu ses ona aitti, o ses ona aitti
identified|adj.|tanımlanan, tanımlanmış
di|pref.|iki, çift, di
hunger|n.|açlık
closest|adj.|en yakın
combination|n.|birleştirme, kombinasyon
nanny|n.|dadı
seth|n.|banker, önemli kimse, önemli birine verilen nişan
gabriel|n.|cebrail, erkek ismi
develop|v.|geliştirmek, gelişmek
detectives|n.|kayıp kişileri arayan dedektifler, cinayet masası dedektifleri
severe|adj.|haşin, sert, şiddetli
en|n.|fiil
organized|adj.|teşkilatlı, organize olmuş, tertipli
franklin|n.|arazi sahibi, alabama eyaletinde şehir, batı virginia eyaletinde yerleşim yeri
gut|v.|temizlemek, içini çıkarmak, içini tahrip etmek
splendid|adj.|müthiş, muhteşem, olağanüstü
dismissed|v.|işten atılmış, görevden alınmış, azledilmiş
pm|n.|öğleden sonra, ös, prometyumun simgesi
yang|n.|dualistik çin felsefesinde aktif erkek öğe, yaban kazı sesi çıkarmak, yaban kazının çıkardığı ses
halloween|n.|cadılar bayramı, azizler günü'nün arifesi
vulnerable|adj.|zedelenebilir, kolayca yaralanır, saldırı veya tenkide maruz olan
continued|adj.|devamlı, aralıksız, devam eden
vital|adj.|yaşamsal, çok önemli, hayati
comrades|n.|halk mahkemeleri, yurttaş mahkemeleri
bureau|n.|büro
drawer|n.|çekmece
harper|n.|arpçı, iowa eyaletinde şehir, kansas eyaletinde şehir
retreat|v.|geri çekilmek
carson|n.|bir soyisim, abd'nin nevada eyaletinde şehir, iowa eyaletinde şehir
benny|n.|erkek ismi, benzedrin, benzedrin hapı/kapsülü
pillow|n.|yastık
troy|n.|kuyumcu tartısı, kuyumcuların kullandığı tartı sistemi, troya
ace|n.|as, karşılanamayan atış, birli
cart|v.|at arabası ile taşımak, götürmek, araba ile taşımak
nap|v.|kestirmek, şekerleme, kısa uyku
chan|expr.|dma knl çal, dma knl yakala
ham|v.|abartılı oynamak, acemi oyuncu, but
announce|v.|anons etmek, duyurmak, ilan etmek
borrowed|adj.|iğreti, ödünç alınmış, ödünç
parked|adj.|park etmiş, beklemede
galaxy|n.|galaksi, gökada, yıldızlar geçidi
voted|v.|oylanmak, ben hiç oy vermedim, aynı oyuncu için iki kez oy kullandın
muffled|adj.|örtülü, boğuk
sebastian|n.|florida eyaletinde şehir, teksas eyaletinde şehir
jewelry|n.|mücevherat
kisses|interj.|öptüm, öpüyorum, öpücükler
luggage|n.|bagaj
groom|n.|damat, seyis
oops|interj.|hoop
lighter|n.|çakmak
masters|v.|inşaat mühendisliğinde yüksek lisans yapmak, usta dolandırıcılar, büyük yalancılar
alliance|n.|antlaşma, ittifak
buddies|n.|arkadaşlar
clothing|n.|giysi, giyim
denied|adj.|yalanlanmış, inkar edilmiş, engellendi
drown|v.|suda boğulmak
alike|adj.|benzeyen, hem, birbirine benzer
excellency|n.|cenap, ekselans, hazret
relative|n.|hısım, akraba, nispi
photographs|n.|fotoğraflar
burger|n.|burger kağıdı, burger ekmeği, hamburgerleri pişiren/çeviren kişi
dough|n.|hamur
alicia|n.|kadın ismi
wreck|n.|enkaz, gemi enkazı
approve|v.|onaylamak, beğenmek, kabul etmek
produced|v.|üretmek, üretilen, üretilmiş
christina|n.|kadın ismi
physically|adv.|maddeten, bedenen, fiziksel olarak
stations|n.|yedek istasyon, demiryolu istasyonları, radyo istasyonları
samantha|n.|kadın ismi, bir kadın ismi
spiritual|adj.|ruhsal, manevi
sire|v.|babası olmak, baba olmak, ata
roaring|n.|kapış kapış satılan, uğuldama, gürleme
stab|v.|saplamak, bıçaklamak
inch|v.|yavaş yavaş hareket etmek, yavaş yavaş hareket ettirmek, az miktar
servants|n.|kalfa, memurlar, (memura/işçiye vb) zam müjdesi
limits|n.|çerçeve, hudut hatları, sınırlar
unexpected|adj.|beklenmedik
arrival|n.|varış, varma, geliş
whimpering|n.|ağlama, sızlama, inleme
basket|n.|sepet
sheets|n.|sayfalar, tablolar
scandal|n.|skandal, rezalet
stink|v.|kötü kokmak, kokmak
homer|n.|yol gösterici, homing güdüm radyofarı, alaska eyaletinde şehir
tara|n.|bir kadın ismi, dublin'in kuzeybatısında bir kasaba, ak alınlı sumru
christopher|n.|erkek ismi, illinois eyaletinde şehir
toes|n.|ayak parmakları, ayak baş parmakları
shield|n.|zırh, siper, kalkan
shooter|n.|nişancı, avcı, atıcı
instant|adj.|anlık
objects|n.|eşya, nesneler, nesne
rehearsal|n.|prova
disturbing|n.|izaç, rahatsız etme, taciz
directed|adj.|yönelik, yönetilen, güdümlü
scan|v.|taramak
electronic|adj.|elektronik, elektronsal, elektronik müzik ile ilgili
republic|n.|cumhuriyet
overnight|v.|gecelemek, bir gece için olan, bir gecelik
counsel|v.|tavsiye etmek, salık vermek, nasihat vermek
sirens|v.|siren seslerini duymak, sirenleri duymak
dorothy|n.|kadın ismi
bait|n.|olta yemi, yem, tuzak
dignity|n.|itibar, haysiyet, ağırbaşlılık
explains|expr.|bu her şeyi açıklıyor
lean|v.|dayanmak, eğilmek, yaslanmak
heroin|n.|eroin
tracy|n.|kadın ismi, kaliforniya eyaletinde şehir, minnesota eyaletinde şehir
rex|n.|kral, hükümdar, georgia eyaletinde şehir
barney|n.|danışıklı dövüş, kavga, erkek ismi
gossip|n.|dedikodu
humble|adj.|mütevazı, alçakgönüllü
economy|n.|iktisat, ekonomi
worlds|n.|dünyalar
impress|v.|iz bırakmak, hayran bırakmak, etkilemek
clara|n.|kadın ismi, irlanda'da yerleşim yeri
tissue|n.|doku
threaten|v.|tehdit etmek
bump|v.|çarpışmak, tümsek, yumru
supreme|adj.|yüce
bingo|n.|bingo oyunu, tombala, bingo
mitchell|n.|georgia eyaletinde yerleşim yeri, güney dakota eyaletinde şehir, iowa eyaletinde şehir
excitement|n.|heyecan
mankind|n.|insanlık
document|n.|doküman, belge
broad|adj.|engin, geniş
vietnam|n.|vietnam
vessel|n.|gemi, damar, tekne
lit|adj.|yanan, küfelik, sarhoş
dale|n.|vadi, küçük vadi, dere
killers|n.|seri katiller
connor|n.|erkek ismi
foul|v.|pisletmek, kurallara aykırı hareket, faul
stare|v.|dik dik bakmak
deaths|v.|üç kişinin ölümüne neden olmak, bebek ölümleri, doğumlar ve ölümler
hut|n.|kulübe
elements|n.|ilk adımlar, başlangıç, doğa güçleri
coma|n.|baygınlık, püskül, derin baygınlık
laying|n.|yatıştırma, yatırma, sıva
coffin|n.|tabut
paula|n.|kadın ismi
cocaine|n.|kokain
puppy|n.|kurt yavrusu, yavru köpek, enik
louder|adj.|daha gürültülü, gürültülü
handled|adj.|yürütülen, kulplu, işlendi
announcement|n.|anons, duyuru, ilan
oath|n.|yemin
mob|v.|toplanmak, başına üşüşmek, hücum etmek
cotton|adj.|pamuklu, pamuk
deposit|n.|emanet, depozito
taxes|n.|rüsum, vergiler
injuries|n.|zarar
autopsy|n.|otopsi
advise|v.|öğütlemek, öğüt vermek, nasihat etmek
gig|v.|zıpkın ile balık yakalamak, sahneye çıkma, çalgı
lecture|v.|ders anlatmak, konferans vermek, uzun öğüt
posted|adj.|postalanan, postalanmış, postalama tarihi
skinny|adj.|sıska, cılız
lo|n.|alt uç, bak şu işe, bak sen!
include|v.|katmak, içermek, kapsamak
revealed|adj.|açıklığa kavuşmuş, ayyuka çıkmış, afişe olmuş
infected|adj.|enfekte, enfekte olan, bulaşmış
relieved|adj.|rahatlamış
assistance|n.|yardım
solo|v.|solo yapmak, solo, tek kişilik oyun
determine|v.|azmetmek, kararlaştırmak, belirlemek
terrorists|n.|teröristler
elsewhere|adv.|başka yere, başka bir yer, başka yere başka yerde
lamp|n.|ampul, lamba
practical|adj.|tatbiki, kullanışlı, pratik
marked|adj.|işaretli
adorable|adj.|tapılası
rubber|n.|kauçuk, lastik
purple|n.|mor
operating|n.|çalıştırma, işletme, ameliyat
suite|n.|takım, takım (mobilya için), birkaç odalı daire
apologies|n.|özürler
personnel|n.|eleman, personel
beam|n.|ışın, kiriş
poet|n.|şair
samples|n.|örnekler
arrow|n.|ok
counselor|n.|avukat, rehber, öğütçü
carpet|n.|halı
allen|n.|erkek ismi, allen başlı (cıvata, vida), altıgen başı olan (cıvata, vida)
audrey|n.|kadın ismi
spotted|adj.|lekeli, benekli
floating|n.|yüzme, perdah, yüzey düzleme
corrected|adj.|düzeltilmiş
located|adj.|tespit edilmiş, yeri tayin edilmiş, kain
journalist|n.|gazeteci
insisted|expr.|o çok ısrar etti
operator|n.|çalıştıran kişi, operatör
rely|v.|güvenmek
fooled|v.|kanmak, kandırılmak, enayi yerine konmak
arrives|expr.|gider gitmez, varır varmaz, yeni ileti geldiğinde ses çıkart
leon|n.|batı virginia eyaletinde yerleşim yeri, iowa eyaletinde şehir, kansas eyaletinde şehir
eastern|adj.|doğuya ait, şarki, doğu
ay|n.|kabul oyu, evet
shave|v.|tıraş olmak, tıraş
remaining|n.|bakiye, kalma, kalık
toss|v.|tartışmak, saçmak (yavaşça/rasgele), atmak (yavaşça/rasgele)
anderson|n.|erkek ismi ve soyisim, kanada'da bir nehir, alabama eyaletinde şehir
lip|n.|dudak
acid|n.|ekşime, asit, iğneleyici eleştiri veya dalga geçme
nora|n.|kadın ismi, güney dakota eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri
si|n.|gamın yedinci notası, si notası
december|v.|aralık (ayı), aralık
anonymous|adj.|anonim
inn|n.|han
planted|adj.|ekili
oldest|adj.|en eski, büyük, en yaşlı
breast|n.|meme, göğüs
sixth|adj.|altıda bir, altıncı, altısı
error|n.|yanlışlık, hata, yanılgı
reporting|n.|raporlama, habercilik, rapor
egypt|adj.|mısır, georgia eyaletinde şehir, teksas eyaletinde şehir
islands|n.|adalar
brother-in-law|n.|enişte, kayınbirader, kayın
roommate|n.|oda arkadaşı
sings|expr.|dereyi görmeden paçaları sıvama, son kozu oynamadan her şey bitmiş sayılmaz, henüz her şey bitmedi
scum|v.|köpüğünü almak, köpüklenmek, köpük bağlamak
visitor|n.|ziyaretçi
giggling|n.|kıkırtı, kıkırdama, gece kulüplerine/barlara gitme
described|adj.|tanımlanmış, tanımlı
geez|exclam.|aman tanrım!, aman ya!, yok artık!
inches|n.|inç
commitment|n.|bağlılık, taahhüt
hercules|n.|herkül, kaliforniya eyaletinde şehir
react|v.|tepki göstermek
cows|n.|inekler, öküz
protest|n.|protesto
misery|n.|sefalet, bedbahtlık, ıstırap
theft|n.|hırsızlık
embrace|v.|kucaklamak
darn|v.|örmek (kumaş vb), yamamak, lanet etmek
harsh|adj.|haşin, sert
andrea|n.|kadın ismi
communicate|v.|haberleşmek
fathers|n.|babalar
faithful|adj.|vefalı, sadık, sadakatli
hector|v.|kabadayılık etmek, gözünü korkutmak, sindirmek
flame|n.|alev
medal|n.|nişan, madalya
silk|n.|ipek
photographer|n.|fotoğrafçı
trevor|expr.|öyle diyorsan öyledir!, neyse ne!
cemetery|n.|mezarlık
rear|n.|art, arka, geri
banana|n.|muz
allison|n.|iowa eyaletinde şehir
emotion|n.|his, duygu
chap|v.|sertleştirmek, çatlamak, yarılmak
dated|adj.|tarihli, eski, tarih verilmiş
excuses|v.|mazeret beyan etmek, bin dereden su getirmek, kırk dereden su getirmek
shitty|adj.|boklu, boktan, dandik
bin|n.|çöp kutusu
jew|n.|yahudilik inancına mensup kişi, musevi, yahudi
gum|n.|dişeti, sakız
crushed|adj.|ezilmiş, ezik
efforts|n.|mesai
content|n.|içerik
corporal|n.|onbaşı
realised|v.|tahakkuk etmek, tamamlanmış, tamamlanan
del|n.|del, sil, delete
rap|v.|hafifçe vurmak, hafifçe vuruş
hopeless|adj.|umutsuz, ümitsiz
debate|v.|çekişmek, çekişme, tartışma
era|n.|dönem, devir
luckily|adv.|çok şükür, talihine, şans eseri
ton|n.|moda, ton, ton, 1000 kg
liquid|n.|sıvı
swell|v.|şişmek, kabarmak
peggy|n.|kadın ismi
feast|n.|ziyafet, bayram, şölen
murphy|n.|patates, north carolina eyaletinde yerleşim yeri, teksas eyaletinde şehir
attracted|adj.|ilginç, ilgi çekici, fiziksel güçle yaklaşmış
application|n.|tatbik, uygulama, başvuru
profession|n.|meslek
bench|n.|sıra, bank, tezgah
vanessa|n.|kadın ismi
ahem|interj.|öhö öhö (dikkat çekmek için kullanılır)
symptoms|n.|belirtiler
scout|n.|izci
crashed|adj.|zom, pilot, uçmuş
keen|adj.|hevesli, keskin
aircraft|n.|uçak
formed|adj.|oluşuk, kurulu
hon|n.|saygıdeğer
aggressive|adj.|agresif, saldırgan, kavgacı
pale|adj.|solgun, soluk
significant|adj.|dikkate değer, kayda değer, belirli
duncan|n.|arizona eyaletinde şehir, güney carolina eyaletinde yerleşim yeri, mississippi eyaletinde yerleşim yeri
clubs|n.|kulüpler, lobut, sinek
visual|adj.|görsel
embassy|n.|elçilik
defence|n.|müdafaa, savunma
cabinet|n.|dolap, kabine
display|v.|sergilemek, gösterme, teşhir
fame|n.|nam, ün, şöhret
gibbs|n.|missouri eyaletinde yerleşim yeri
drowned|adj.|boğulmuş
wolves|n.|kurtlar
filming|n.|çekim
dunno|expr.|bilmiyorum
cursed|adj.|lanetli
twin|n.|ikiz
sorrow|v.|üzülmek, üzüntü, tasa
vault|v.|atlamak, tonoz, mahzen
defeated|adj.|mağlup
watson|n.|illinois eyaletinde yerleşim yeri, missouri eyaletinde yerleşim yeri, minnesota eyaletinde şehir
quote|v.|alıntı yapmak
penalty|n.|ceza
bargain|n.|kelepir, pazarlık
pepper|n.|biber
speaker|n.|hoparlör, konuşmacı
compare|v.|mukayese etmek, kıyaslamak, karşılaştırmak
satan|n.|şeytan
helmet|n.|miğfer
scar|n.|yara izi
copies|n.|kopyalar, kopya, kopya sayısı
fuss|n.|yaygara, telaş, velvele
envelope|n.|zarf
perry|n.|armut şarabı, florida eyaletinde şehir, güney carolina eyaletinde yerleşim yeri
stinks|expr.|balık baştan kokar
african|n.|afrika, afrikaanca, afrika ile ilgili
arrangements|n.|tertibat, nizamat
wished|adj.|istenen, dilenen (dilek)
honored|adj.|şereflendirilmiş, onurlu, onur duymuş
believing|n.|inanma
discussed|adj.|görüşülmüş, tartışılmış
assigned|adj.|tahsis edilen, tahsis edilmiş, atanmış
rosa|n.|kadın ismi, gül
oven|n.|ocak, fırın
attacking|n.|saldırma, saldıran, saldırmaya yatkın
tin|n.|teneke, kalay
sonic|adj.|ses dalgalarıyla ilgili, sonik, ses
collar|n.|yaka
mere|n.|bataklık, göl, yalnız
romeo|n.|romeo ve Juliet etkisi
belief|n.|inanma, inanç
storage|n.|biriktirme, depo, depolama
rusty|adj.|paslı
psycho|n.|sapık, ruh, sayko
climbing|n.|tırmanış
melissa|n.|melissa, melisa, melisotu
fears|n.|endişe, şüphe
sum|n.|toplam, tutar
dedicated|adj.|özel, kendini işine adamış, ithaf olunmuş
ladder|n.|merdiven
alternative|n.|alternatif
raid|v.|baskın yapmak, akın, baskın
dining|n.|yemek, yemekli, yemek yiyerek
ms|adj.|ms
corporate|adj.|şirkete ait, kurumsal, tüzel
folk|n.|halk
jon|n.|incil'de jonah
replaced|adj.|değiştirilmiş, sökülüp değiştirilmiş, değiştirildi
bailey|n.|şatonun dış avlusu, dış kale, dış kale duvarı
un|n.|un
heels|v.|ayaklarına kara su inmek, eğlenceye dalmak, pırlamak
duties|n.|rüsum, gümrük vergileri, vergiler
smarter|expr.|ben daha akıllıyım, ben ablamdan daha akıllıyım
existed|adj.|mevcut, var olmuş, geçinmiş
surprising|adj.|şaşırtıcı
chess|n.|satranç, satranç oyunu, köprü tahtası
requested|adj.|istenen, talep edilen
cruise|v.|dolaşmak, sokaklarda dolaşarak müşteri aramak (fahişe), gezinmek
primary|adj.|ana, birincil, başlıca
rhythm|n.|ritim
drum|n.|davul
models|n.|modeller
motorcycle|n.|motor, motosiklet
adopted|adj.|benimsenmiş, evlat edinilmiş
barrel|n.|varil, namlu, fıçı
cargo|n.|kargo
planets|n.|gezegenler
shove|v.|sürmek, kıpırdamak, itilip kakılmak
surprises|adj.|sürprizlerle dolu, sürprizlerle dolu olmak, hayat sürprizlerle dolu
rosie|n.|çay, mastürbasyon anlamında elizabeth, mastürbasyon
dings|n.|dings-crockett mıknatıslı ayırıcısı
trailer|n.|treyler, römork
cannon|n.|top
tables|n.|masalar, tablolar, dalış cetveli
arse|n.|kıç, küfe, göt
ally|n.|müttefik ülke
lawrence|n.|indiana eyaletinde şehir, kansas eyaletinde şehir, massachusetts eyaletinde şehir
wee|v.|çiş yapmak
tapes|n.|basınca duyarlı yapışkan şeritler, erkek ve dişi şeritler, kendinden yapıştırıcılı şeritler
dull|adj.|donuk, sıkıcı, mat
sandra|n.|kadın ismi
teenage|n.|13 19 yaş arası, gençlere ait, 13-19 yaş arası gençlerle ilgili
kent|n.|connecticut eyaletinde şehir, ingiltere'de bölge, iowa eyaletinde şehir
cooperate|v.|işbirliği yapmak
risks|n.|riskler
dug|n.|meme, kazılmış, kazılı
worthless|adj.|değersiz
arriving|n.|gelme, ulaşma, gelen
kindness|n.|nezaket, kibarlık, iyilik
ties|v.|ipleri koparmak, bağını koparmak, bağlarını koparmak
items|n.|öğeler, öğeleri
and-|v.|didinmek, karı koca, değerler ve normlar
grip|v.|kavramak, kavrama
relations|n.|soy sop, aile, alışveriş
rumor|n.|rivayet, söylenti
skirt|n.|etek
frog|n.|kurbağa
paige|n.|washington eyaletinde şehir
lloyd|n.|londra deniz sigortacıları borsası birliği, new york eyaletinde yerleşim yeri
claimed|v.|iddia edilmek, belirtilen raf ömrü, dün gece yoğun kar ilk kurbanını aldı
perfume|n.|parfüm
instrumental|adj.|enstrümantal
flames|n.|hiddetten dolayı parlamalar
association|n.|birlik, dernek, birleşme
loses|v.|zarara uğramak, abartarak anlatma, bire bin katma
january|n.|ocak (ay), ocak
spike|n.|sivri uçlu çubuk, sivri uç, sivri uçlu demir
israel|n.|israil
eleven|n.|onbir, on bir sayısı (11, XI), on bir
gallery|n.|galeri
ginger|v.|dürtmek, canlandırmak, teşvik etmek
activities|n.|icraat, aktiviteler, etkinlikler
iraq|n.|ırak
boarding|adj.|yatılı
fist|n.|yumruk
stuffed|adj.|doldurulmuş, dolgun, dolmuş
improve|v.|geliştirmek, gelişmek, ilerletmek
creation|n.|kreasyon
infection|n.|enfeksiyon, bulaşma
strikes|n.|açlık grevleri, grevler ve lokavtlar, öğrenci boykotları
wiped|adj.|silinmiş
tension|n.|tansiyon, gerginlik, gerilim
whistles|n.|cazip yan/ek özellikler, tam teşkilat, (olup) olabilecek bütün özellikler
kindly|adj.|merhametli, iyi, içten
certificate|n.|sertifika
curtis|n.|erkek ismi, nebraska eyaletinde şehir
bold|adj.|gözüpek, cüretkar, cesur
threats|n.|tehditler, gözdağı
claudia|n.|kadın ismi
sid|n.|boş sıd, kullanıcı sid, yabancı sid numarası
twisted|adj.|bükümlü, bükülü, bükülmüş
suspended|adj.|muallak, asma, asılı
affected|adj.|etkilenmiş
envy|v.|imrenmek, kıskançlık
whale|n.|balina
dial|v.|telefon numarası çevirmek
cameron|n.|kadın ismi, erkek ismi, batı virginia eyaletinde şehir
martial|adj.|savaşa özgü, savaşa ait, harbe ait
controlled|adj.|kontrol edilmiş
lung|n.|akciğer
coal|n.|kömür
upside|n.|üst taraf, olumlu yön/taraf, avantaj
imperial|n.|imparator, imparatorluk ile ilgili
pam|abrev.|darbe genlik kiplenimi, darbe genlik modülasyonu, vurum genlik kiplenimi
paranoid|adj.|paranoya ile ilgili, paranoit, paranoyak
signing|v.|imzalamak, imza, imzalayarak
congress|n.|kongre
villa|n.|villa
candles|n.|mumlar
filling|n.|dolgu
becky|n.|kadın ismi, bir kadın ismi
comic|adj.|komik
faint|v.|bayılmak, bayılma
recovery|n.|kurtulma, atlatma, toparlanma
volunteer|n.|gönüllü
tech|n.|teknik, teknoloji, teknik iş
bleed|v.|bled - bled, para sızdırmak, yolmak
positions|n.|açılan kapatılan pozisyon sayısı
cindy|n.|kadın ismi
narrow|adj.|dar
forbid|v.|yasaklamak
stuart|n.|florida eyaletinde şehir, iowa eyaletinde şehir, oklahoma eyaletinde yerleşim yeri
perspective|n.|bakış açısı, perspektif
faced|adj.|sarhoş, zil zurna sarhoş, ayakta duramayacak kadar sarhoş
neat|adj.|düzenli, tertipli
pierce|v.|delmek
observe|v.|gözlemlemek, gözlem yapmak
cycle|n.|devir, çevrim
psychic|n.|medyum, ruhi, ruhani
handling|n.|idare, ambalajlama, göz kamaştıktan sonraki görüntü
goose|n.|kaz
accidentally|adv.|kazara, tesadüfen
conclusion|n.|sonuç
designer|n.|tasarımcı
sits|expr.|öfkeyle kalkan zararla oturur
importance|n.|önem
spots|n.|benekler, noktalar, benek hastalığı
francs|n.|isviçre frangı, fransız frangı, belçika frangı
sweep|v.|süpürmek
destroying|n.|tahribat, tahrip, tahrip etme
communist|n.|solcu, komünist, kızıl
blackmail|v.|şantaj yapmak, şantaj
pacific|adj.|sulhsever
risky|adj.|riskli
glorious|adj.|şanlı
filed|adj.|törpülü, dosyalanmış
hatred|n.|nefret
cam|n.|tırnak, joint tüttürmek, coynt çekmek
deals|v.|indirimli/kampanyadan alışveriş yapmak, danışıklı işlemler, düzmece işlemler
pos|n.|satış noktası, pozitif
fooling|n.|yaramazlık, aptallık, muziplik
persons|n.|zevat, kişiler
scotch|n.|iskoç
executed|adj.|asılı, yapılmış, uygulanmış
brakes|n.|frenler
blank|n.|boşluk, boş
tender|v.|sunmak, (resmi) teklif etmek, ihale
kurt|n.|basıklık
turner|n.|döndüren, tornacı, yassı kepçe
tub|v.|fıçıya dikmek (bitki), banyo yapmak (küvette), kürek çekmek
sucker|n.|emici, keriz, enayi
slight|adj.|hafif, az
addition|n.|ek, ilave, toplama
campus|n.|kampus, kampüs, yerleşke
ritual|n.|dini tören, alışkı, ayin kuralları
prey|v.|soymak, avlamak, yağmaya gitmek
so-called|adj.|sözde
graduate|v.|mezun olmak, mezun
anyways|expr.|her halükarda, bir şekilde, herhangi bir şekilde
fry|v.|yağda kızartmak
genuine|adj.|özgün, gerçek, hakiki
judging|n.|yargılama, karara varma
doubts|n.|evham, şübehat, şüpheler
warden|n.|gardiyan, bekçi, koruyucu
ceiling|n.|tavan
practicing|n.|temrin, pratik yapma, icra eden
somewhat|adv.|birazcık, bir dereceye kadar, aşağı yukarı
established|adj.|varolan, sabit, kurulmuş
attempted|adj.|denenen, gayret edilen, teşebbüs edilen
zombie|n.|zombi, yaşayan ölü
generations|n.|kuşaklar, nesiller
gathering|n.|toplanma
warriors|n.|cehennem savaşçıları
mick|n.|irlandalı (kötü), irlandalı
electrical|adj.|elektrik, elektrikli
collins|n.|georgia eyaletinde şehir, georgia eyaletinde yerleşim yeri, iowa eyaletinde şehir
sobs|n.|para
couples|n.|çiftler
depend|v.|bağlı olmak
institute|n.|enstitü
miranda|n.|kadın ismi
principle|n.|prensip, ilke
fixing|n.|dikme, teçhizat, uyma
therapist|n.|terapist, sağaltımcı, doktor
compete|v.|rekabet etmek, yarışmak
compliment|n.|kompliman, iltifat, övgü
worship|v.|tapmak, tapınmak, ibadet etmek
residence|n.|mesken, ikamet, konut
democracy|n.|demokratlık, elerki, demokrasi
published|adj.|basılı (kitap vb), yayınlanmış, yayımlanmış
myth|n.|efsane
helpless|adj.|aciz, çaresiz
screwing|n.|vidalama, diş açma, sevişme
kennedy|n.|minnesota eyaletinde şehir
execution|n.|icra, idam, infaz
appetite|n.|iştah
formal|adj.|resmi
strictly|adv.|açıkçası, katı bir biçimde, sert bir biçimde
sucked|adj.|emilmiş
tanks|n.|rafineri tankları, pik tanklar, düşünce kuruluşları
chickens|n.|tavuklar
gwen|n.|kadın ismi
technical|adj.|teknik
stella|n.|missouri eyaletinde yerleşim yeri, nebraska eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
rod|n.|çubuk
meets|n.|göründüğünden daha fazlası, görünenden fazlası, belli şartları taşıması halinde
shepherd|n.|çoban
brazil|n.|kızılağaç, bakkam ağacı, brezilya
brutal|adj.|vahşi, gaddar, acımasız
alison|n.|kadın ismi, alyssum cinsi bitkilere verilen genel ad, deliotu
vain|adj.|beyhude, faydasız, nafile
switched|adj.|kurmalı, anahtarlamalı, anahtarlanmış
chi|n.|ki-kare testi, kung-fu'nun meditasyona yönelik olan biçimi, bir tür kötü fen shui enerjisi
deer|n.|geyik
brooklyn|n.|alabama eyaletinde şehir, connecticut eyaletinde şehir, iowa eyaletinde şehir
dresses|n.|uygun fiyatlı giysiler, uygun fiyatlı elbiseler, fiyatı uygun elbiseler
retire|v.|emekli olmak
overcome|v.|üstesinden gelmek, aşmak, alt etmek
inspiration|n.|esin, ilham
cunt|n.|am, amcık, kancık
benjamin|n.|erkek ismi, şımartılmış kişi, evin en küçüğü
nicky|n.|zile basıp kaçma oyunu
thrilled|adj.|heyecanlanmış, heyecanlı
tae|n.|tekvando
suggestion|n.|telkin, öneri
dummy|n.|manken, trafik ışıkları, budala
sailor|n.|gemici, denizci
destination|n.|varış yeri
bass|n.|bas, levrek
picnic|n.|piknik
assholes|n.|it sürüsü, bir avuç pislik, dallamalar
idol|n.|idol
trucks|n.|kamyonet, canavar kamyonlar, beton karıştırıcı
rank|n.|rütbe, aşama, kademe
denise|n.|kadın ismi
yu|n.|yugoslavya:yu
veronica|n.|yavşanotu, veronika, kadın ismi
blocked|adj.|bloke, tıkalı, bloke edilmiş
strict|adj.|sıkı, katı
formula|n.|mama, formül
clerk|n.|yazman, tezgahtar, katip
samurai|n.|samuray
disturbed|adj.|rahatsız
vera|n.|kadın ismi, oklahoma eyaletinde yerleşim yeri
cafe|n.|kafe
wandering|n.|dalgınlık, gezginlik, amaçsızca dolaşma
consciousness|n.|bilinç, şuur
nikki|n.|bir kadın ismi
min|n.|dakika, minimum, enaz
bare|v.|çıkarmak, açığa vurmak, çıplak
hans|n.|hans güvenlik boyunluğu
butcher|n.|kasap
arrangement|n.|ayarlama, aranjman, düzenleme
chased|adj.|kovalanan, peşinde koşulan
ministry|n.|bakanlık
brandy|n.|konyak, kanyak, brendi
sweater|n.|süveter
boobs|n.|ampul, memeler, göğüsler
locate|v.|yerini saptamak, yerini bulmak, yerini tespit etmek
apologise|v.|özür dilemek, af dilemek
nazi|n.|nazi, kendi fikirlerini dayatan hoşgörüsüz kimse, kendi fikirlerini hoşgörüsüzce dayatan
parole|v.|mahkumu şartlı olarak serbest bırakmak, şartlı tahliye etmek, kefaletle serbest bırakmak
examine|v.|muayene etmek, incelemek, yoklamak
trains|v.|aktarma yapmak, hızlı trenler, elektrikli tahrik tertibatı
candle|n.|mum
prior|adj.|önceden, daha önce olan, daha erken olan
stream|n.|dere, akarsu
passage|n.|pasaj, geçit, geçiş
reaching|n.|ulaşma, erişme, gerinme
organ|n.|organ
directions|n.|tarife, kullanma talimatı, talimat
asses|n.|eşekler
outer|adj.|dış
proves|expr.|aksi sabit olursa, istisnalar kaideyi bozmaz, istisna kuralı bozmaz
morris|n.|bahar dansı, connecticut eyaletinde şehir, illinois eyaletinde şehir
luxury|n.|lüks
pistol|n.|tabanca
losers|n.|yıkıklar, kaybedenler kulübü, mal bulanındır
funds|n.|fonlar, para, devlet tahvili
sunset|n.|güneş batışı
strings|n.|telli çalgılar, yaylı çalgılar
fortunately|adv.|şükür ki, neyse ki, bereket versin
tomb|n.|mezar, türbe
but-|conj.|ancak, fakat
engineering|n.|mühendislik
element|n.|eleman, unsur
balloon|n.|balon
ty|n.|bağ, ip, durum, hal anlamı veren son ek
broadcast|n.|yayın
spray|v.|püskürtmek, serpinti
ninja|n.|ninja, hiv
eternity|n.|sonsuzluk, ebediyet, ebedilik
handy|adj.|kullanışlı
to-|v.|enerji almak
crawl|v.|sürünmek, emeklemek
slice|v.|dilimlemek, dilim
nations|n.|akvam
behaviour|n.|davranış
pace|v.|adımlamak, tempo, yürüyüş
stiff|adj.|çetin, katı, sert
lick|v.|yalamak
concrete|n.|beton, somut
allah|n.|Allah
vegetables|n.|sebzeler, sebze, zerzevat
euros|v.|döviz bırakmak
sausage|n.|sosis
constable|n.|polis, polis memuru (brit), polis memuru
spinning|n.|patinaj, bükme, döndürme
rolls|n.|sandviç ekmeği
genetic|n.|genetik yapı, soyaçekim, kalıtsal
loudly|adv.|yüksek sesle, gürültüyle
old-fashioned|adj.|eski, eski moda, nuh nebi'den kalma
marvelous|adj.|harika, müthiş
subway|n.|altgeçit, metropoliten, geçit
creep|v.|sürünmek
scheme|v.|fesat karıştırmak, düzenlemek, dolap çevirmek
performed|adj.|icra edilmiş
plug|n.|fiş
rejected|adj.|reddedilmiş, geri çevrilmiş, kabul edilmemiş
brenda|n.|kadın ismi, arizona eyaletinde şehir
respected|adj.|saygı duyulan, muteber
backs|n.|geride duran oyuncular, geri yedili
protocol|n.|protokol
muscles|n.|kaslar
kidney|n.|böbrek
finishing|n.|bitirme
products|n.|mamulat, ürünler
im|n.|im
wu|n.|kung fu
invasion|n.|istila
affection|n.|alaka, etkileme, meyil
woody|adj.|ağaçlık, odunsu
endless|adj.|sonsuz
discipline|n.|disiplin
horns|v.|boynuzlanmak, güçlüklere göğüs germek, bir işe cesaretle girişmek
absence|n.|bulunmayış, bulunmama, yokluk
waking|n.|uyanık olma, uyanık
dudes|n.|ahbap, kanka
philosophy|n.|felsefe
cracked|adj.|çatlak
nicholas|n.|erkek ismi
reed|n.|kamış
verdict|n.|hüküm, ilam, jüri kararı
drake|n.|erkek ördek, suna, kuzey dakota eyaletinde şehir
connections|n.|ilişkiler, irtibatlar, bağlantılar
privilege|n.|imtiyaz, ayrıcalık
anyhow|adv.|neyse
scent|n.|koku
naive|adj.|toy
daylight|n.|boşluk, aralık, gün ışığı
controls|n.|denetimler, kumanda, kumandalar
airplane|n.|uçak
values|n.|değerler, değerleri
jolly|v.|eğlenmek, alay etmek, ikna etmek
swore|adj.|yeminli, yeminle verilen
blaring|n.|yüksek ve tiz ses
consent|v.|razı olmak, rıza göstermek, onay
puzzle|n.|bulmaca, bilmece
disagree|v.|aynı fikirde olmamak
argh|interj.|ay!
winds|n.|ana rüzgarlar, değişim rüzgarları, sert rüzgarlar
vanished|adj.|ortadan yok olmuş, ortadan yok olan
wizard|n.|sihirbaz, dahi, büyücü
ranger|n.|korucu, orman muhafızı, orman bekçisi
celebrity|n.|ünlü kişi
sniffles|n.|nezle, nezle olmak/kapmak, nezle olmak
stores|n.|bolluk, kırkambar, erzak
aha|interj.|ha, oh
intentions|v.|kastı olmak, kötü niyet, art niyet
plague|n.|veba
farmers|n.|çiftçiler
breeze|n.|meltem, hafif rüzgar, esinti
rascal|n.|velet, serseri, yaramaz
convenient|adj.|müsait, münasip, uygun
bonus|n.|sürpriz, özence, bonus
dong|n.|çan sesi, penis, çük
hush|v.|gizlemek, sakinleşmek, yatıştırmak
instinct|n.|içgüdü
entitled|adj.|başlıklı, adlı, yetkili
porter|n.|yükçü, ücretle yük taşıyan kimse, portör
maurice|n.|iowa eyaletinde şehir, louisiana eyaletinde yerleşim yeri
wrist|n.|krank pimi, el bileği, bilek
originally|adv.|aslen, orijinal bir şekilde
coins|n.|madeni paralar, madeni para, ufaklık para
drain|v.|tahliye etmek, suyunu boşaltmak, suyunu çekmek
physics|n.|fizik, fizik (bilim)
phoebe|n.|kadın ismi, satürn'ün uydularından biri, yunan mitolojisinde ay tanrıçası
furious|adj.|çok öfkeli, kuduruk, azgın
sniffs|v.|burun çekmek
vampires|n.|vampirler
defending|n.|savunma
sector|n.|sektör
income|n.|gelir, kazanç
finn|n.|finlandiyalı, finli, fin
offended|adj.|gücenmiş, küskün, dargın
decides|v.|karar vermek
laser|n.|laser ışını, laser, lazer
fled|adj.|kaçmış (suçlu vb), kaçan
beers|v.|bira yuvarlamak, aptal, salak
boxing|n.|boks
accurate|adj.|doğru, kesin
kung|n.|kalahari çölünde yaşayan kung klanı üyesi, basarva, buşmen
snakes|n.|yılanlar
thumb|v.|parmağıyla çevirmek (sayfa), otostop çekmek, (kitabın) sayfalarını yıpratmak
bald|adj.|kel
sharon|n.|kadın ismi, connecticut eyaletinde şehir, georgia eyaletinde şehir
suspicion|n.|kuşku, şüphe
convicted|adj.|mahkum edilmiş, mahkum edilen, hükümlü
roots|n.|kökler, memba, kaynak
shares|n.|esham, hisse senetleri, hisseler
bernard|n.|erkek ismi, iowa eyaletinde şehir
jessie|n.|feminen adam, kadın ismi, karı kılıklı tip
wang|n.|çene kemiği, çene, penis
harrison|n.|arkansas eyaletinde şehir, georgia eyaletinde şehir, georgia eyaletinde yerleşim yeri
blues|n.|hüzün
confusing|n.|şaşırtma, çetrefil, kafa karıştırıcı
lobby|n.|kulis, lobi
recipe|n.|yemek tarifi
las|n.|las dizgesi, kolorado eyaletinde şehir, new mexico eyaletinde yerleşim yeri
winston|n.|missouri eyaletinde yerleşim yeri, north carolina eyaletinde şehir, north carolina eyaletinde yerleşim yeri
generally|adv.|genelde, genel olarak, genellikle
seeking|n.|arayış
secretly|adv.|gizlice
declare|v.|beyan etmek, deklare etmek, ilan etmek
freaked|v.|çok heyecanlanmak, çılgına dönmek, kontrolünü kaybetmiş
missile|n.|merak, atılan şey, kurşun
ensure|v.|sağlama almak, sağlamak, garantiye almak
tricky|adj.|düzenbaz
pointed|adj.|sivri, sivri uçlu
hockey|n.|hokey
bubble|v.|fokurdamak, kabarcık
contacts|n.|kişiler, kişi, kişileri
maximum|adj.|maksimum, azami
reminded|expr.|hatırlatmak isterim ki, seni hatırlattı
carriage|n.|taşımacılık, vagon, nakliye ücreti
curtain|n.|perde
clues|n.|ipuçları
hostages|n.|rehineler
circles|n.|çevre, edvâr
author|n.|yazar
wallace|n.|güney dakota eyaletinde yerleşim yeri, idaho eyaletinde şehir, indiana eyaletinde yerleşim yeri
receiving|n.|alış
debts|n.|düyun, borçlar, pasif borçlar
cellar|n.|kiler
tortured|adj.|yoğun ıstırap duyan, keder içinde
tips|n.|takma tırnak, yakıt tankları, ipuçları
mates|n.|birbirleri için yaratılmış çift, arkadaşı olmayan tip, tek tabanca
mortal|adj.|ölümcül, fani, ölümlü
reporters|n.|medya ordusu, muhabirler ve haber yapma, sınır tanımayan gazeteciler
associate|v.|ilişkilendirmek, birleştirmek, iş arkadaşı
honesty|n.|dürüstlük
laptop|n.|dizüstü bilgisayar, dizüstü, dizüstü bilgisayarı
jung|n.|jung kası, jung teorisi
katherine|n.|kadın ismi
rainbow|n.|gökkuşağı, gök kuşağı
seed|n.|tohum
mature|adj.|olgun
deed|n.|tapu
expenses|n.|masraflar, harcamalar, giderler
discussing|n.|görüşme
pirate|adj.|korsan
meals|n.|öğünler, öğün yemekleri
performing|n.|sergileme, oynama, gösteri
remained|v.|kaldı, geriye kalan
prostitute|n.|fahişe, orospu
adams|n.|massachusetts eyaletinde yerleşim yeri, kuzey dakota eyaletinde şehir, minnesota eyaletinde şehir
retirement|n.|emeklilik
platform|n.|platform
claus|n.|noel baba, noel anne, georgia eyaletinde şehir
erica|n.|funda, pamuk orkide
beds|v.|yatak ayırmak, çift yatak, yatak sayısı
writes|n.|kalem sahibi, kalemi kuvvetli, toplam yazma
illusion|n.|kuruntu
mill|n.|değirmen
dealt|adj.|uğraşılan
hears|v.|duymak, işitmek
manhattan|n.|manhattan, illinois eyaletinde yerleşim yeri, kansas eyaletinde şehir
mole|n.|köstebek
rang|v.|ring-rang, ring fiilinin geçmiş zamandaki çekimi, çalmak
prosecution|n.|devam, kovuşturma, adli takibat
fatal|adj.|ölümcül, öldürücü
copper|n.|bakır
troubled|adj.|sıkıntılı
heir|n.|varis, mirasçı
traces|n.|(hayvan) ayak izi
owners|n.|sahipler
length|n.|uzunluk, boy
dentist|n.|dişçi, diş hekimi
lesbian|adj.|lezbiyen
enterprise|n.|girişim, teşebbüs
tournament|n.|turnuva, yarışma
travelling|n.|yolculuk
confessed|adj.|açık, itiraf edilen, aleni
roast|v.|kızartmak, fırında kızartmak, fırında kızartılmış
ja|n.|jamaica'nın uluslararası plaka kısaltması
flood|v.|sel basmak, su baskını, tufan
harbor|v.|barındırmak, liman
lola|n.|kadın ismi
rory|adj.|gürültülü, şamatalı, curcunalı
mansion|n.|konak, köşk, malikane
mademoiselle|n.|matmazel
auction|n.|mezat, müzayede, açık artırma
desires|v.|nefsini köreltmek, (birinin) isteklerinin kölesi/tutsağı olmak, dilek ve temennilerini sunmak
bachelor|n.|bekar
haunted|adj.|perili, lanetli
distracted|adj.|kendinden geçmiş, şaşırmış, aklı başından alınan
smashed|adj.|sarhoş, paramparça olmuş, çakırkeyif
rodney|n.|iowa eyaletinde şehir
scheduled|adj.|tarifeli, belirlenmiş, planlanmış
negotiate|v.|görüşmek, müzakerede bulunmak
champ|v.|gevelemek, ısırmak, çiğnemek
allows|expr.|allah izin verirse, allah'ın izniyle, şans yaver giderse
shotgun|v.|çifteyle vurmak, pompalı tüfekle vurmak, av çiftesi
nigger|n.|koyu renkli böcek larvası, buharlı gemilerde kullanılan bir tür bocurgat
cocktail|n.|kokteyl, kesik kuyruklu
donkey|n.|eşek
pointing|n.|tevcih, gösterme, kuşku
butler|n.|kahya, uşak
dizzy|adj.|başı dönen
methods|n.|yöntemler
reference|n.|referans
georgia|n.|gürcistan, kadın ismi, amerika'da eyalet
bully|n.|zorba, kabadayı
lydia|n.|lidya
collapse|v.|yığılmak, çökmek, çöküş
alfred|n.|erkek ismi, maine eyaletinde yerleşim yeri, new york eyaletinde yerleşim yeri
ana|n.|herbirinden eşit miktarda, anoreksi, anoreksi hastası
minimum|adj.|asgari
chairs|n.|sandalyeler
hee|interj.|hi hi
patty|n.|küçük börek, köfte, yassı köfte
owes|expr.|bana 100 dolar borcu var
included|adj.|dahil olan, içinde, dahil edilmiş
carmen|n.|kadın ismi, oklahoma eyaletinde yerleşim yeri
civilization|n.|uygarlık, medeniyet
prices|n.|fiyatlar
wealthy|adj.|varlıklı, zengin, servet sahibi
depression|n.|çöküntü, depresyon, bunalım
tide|n.|gelgit
rented|adj.|kiralanmış
bra|n.|sütyen, sutyen, maske
fellows|n.|ihvan
rot|v.|çürümek
password|n.|şifre, parola
th|n.|toryumun simgesi, pr, per
kirk|n.|kilise
spill|v.|dökmek
cured|adj.|ıslah edilmiş, küre tabi tutulmuş, tedavi edilmiş
naomi|n.|kadın ismi
hardest|adj.|en sert
deceased|adj.|ölü, ölmüş, merhum
sleepy|adj.|uykulu
static|n.|statik elektrik, radyo paraziti, sabit
hawaii|n.|hawai, amerika'da eyalet
almighty|adj.|ulu
murray|n.|iowa eyaletinde şehir, kentucky eyaletinde şehir, new york eyaletinde yerleşim yeri
offers|n.|çözüm önerileri, alıcının/satıcının önerdiği fiyat kotasyonu, arz ve talep
bruno|n.|erkek ismi, minnesota eyaletinde şehir, nebraska eyaletinde yerleşim yeri
phrase|v.|ifade etmek, uygun sözcük ve cümlelerle ifade etmek, cümle veya sözcüklerle anlatmak
disgrace|n.|rezalet, rezillik, yüz karası
sources|n.|kaynaklar
approval|n.|tasvip, onaylama, onay
turtles|n.|ninja kaplumbağalar, sonsuza kadar, deniz kaplumbağaları
screech|v.|tiz bir ses çıkarmak, acı çığlık koparmak, cırlamak
snack|v.|hafif yemek, hafif şeyler yemek, çerezlenmek
collected|adj.|toplu, aklı başında, sakinleşmiş
ding|v.|tınlamak, çalmak, çınlatmak
fur|n.|kürk
jewels|n.|mücevherler, erkek üreme organı, takım taklavat
jan|abrev.|oca
cheek|n.|yanak
legally|adv.|hukuken, yasal olarak, kanunen
ditch|v.|hendek kazmak, hendek
benefits|n.|faydalar, personel sosyal yardımları, yan yardımlar
roars|v.|kükremek, gürlemek
arnold|n.|erkek ismi, ingiltere'de yerleşim yeri, missouri eyaletinde şehir
dime|n.|on sent, ucuz, 10 sent değerindeki madeni para
domestic|adj.|iç, evcil
chuckle|v.|kıkırdamak
hack|v.|doğramak, kıymak, kesmek
ransom|n.|fidye
chang|n.|yangtze, gök ırmak, asya'nın en uzun nehri
bore|v.|bunaltmak, delmek, sıkmak
muslim|n.|müslüman
loads|v.|ağır yükler taşımak, çok/yığınla para kazanmak, el arabası
waitress|n.|(kadın) garson
nurses|n.|hemşireler
glenn|n.|glenn-anderson tekniği, teksas eyaletinde şehir
spite|v.|rahatsız etmek, nispet vermek, zarar vermek
rebel|v.|ayaklanmak, başkaldırmak, isyancı
clearing|n.|temizleme işi, aydınlatma, açıklık alan
andre|n.|erkek ismi
fortunate|adj.|akgünlü, şanslı, kısmetli
survivors|n.|katliamdan kurtulanlar, ölüm sigortası, sağ kalanlar
reply|v.|yanıtlamak, cevap, yanıt
disappoint|v.|hayal kırıklığına uğratmak
orbit|n.|yörünge
expose|v.|maruz bırakmak
gin|n.|cin
austin|n.|erkek ismi, aziz augustine'in ilkelerini benimseyen kimse, aziz augustine'e veya öğretilerine ait
toe|n.|ayak parmağı
sympathy|n.|sempati
intel|n.|istihbarat, intel
growth|n.|büyüme
psychiatrist|n.|psikiyatrist
slams|v.|ağır bir şekilde eleştirmek, yenmek, çarparak kapatmak (kapıyı/kapağı)
encounter|v.|rastlamak, karşılaşmak, rastlama
daphne|n.|defne, soylu ağaç, defne ağacı
passenger|n.|yolcu
monkeys|v.|çok komik veya eğlenceli olmak, alet kullanan maymunlar, maymun sürüsü
accompany|v.|eşlik etmek
hats|n.|rol değişimi, yüksek rütbeli subaylar, aba vakti yaba, yaba vakti aba almak
column|n.|sütun, kolon
sigh|n.|iç çekme
pounding|n.|çakma, dövme, vurma
economic|adj.|ekonomik
tales|n.|ilave olunan juri üyelerinin davet listesi, masallar, ilave olunan jüri üyelerinin listesi
brat|n.|çocuk, yaramaz çocuk, şımarık çocuk
follows|adj.|şu şekilde yazılmış, sonra gelende, aşağıdaki gibi
spreading|n.|yaylım, tevsi, yayma
sister-in-law|n.|görümce, elti, baldız
burt|n.|iowa eyaletinde şehir
hilarious|adj.|gürültülü ve neşeli, şamatalı, eğlendirici
hallway|n.|koridor
hamilton|n.|hamilton, alabama eyaletinde şehir, avustralya'nın victoria eyaletinde şehir
the-|pref.|tanrı anlamına gelen ön ek, ilahi anlamına gelen ön ek
exclusive|adj.|münhasır, özel, hariç tutulan
chimes|n.|rüzgar çanları, duman etmek, sersemletmek
greet|v.|selamlaşmak, selam vermek
decades|n.|on yıllar
bowling|n.|ağır bir topla oynanan bir oyun, bowling, yuvarlamaca
buttons|n.|düğmeler
confusion|n.|karmaşa, kargaşa, şaşkınlık
thud|v.|düşme sesi çıkarmak, pat diye düşmek, ağır bir şeyin yere düşünce çıkardığı ses
hooker|n.|fahişe, kancacı, balıkçı gemisi
ruining|n.|yıkma, tahrip etme, bozma
dreadful|adj.|ürkünç, rezalet, korkunç
collecting|n.|derleme, tahsil, para toplama
lions|n.|aslanlar
sheila|n.|kadın ismi, kız
douglas|n.|arizona eyaletinde şehir, georgia eyaletinde şehir, irlanda'da yerleşim yeri
february|n.|şubat
elvis|n.|asit (lsd)
forty|n.|kırk sayısı (40), kırk, 40
sleeps|n.|hiç uyumayan yer, hiç uyumayan şehir, su uyur düşman uyumaz
brass|adj.|pirinç
shrink|v.|küçültmek, küçülmek, büzülmek
zack|expr.|beş parasız, beş para etmez
whimpers|v.|mırıldanmak, hıçkırarak ağlamak, sızlamak
sworn|adj.|yeminli, yemin edilmiş, antlı
email|v.|email göndermek, eposta, e-posta
proven|adj.|kanıtlanmış
tasty|adj.|lezzetli
covers|n.|kapaklar
sandwiches|v.|aptalın teki olmak, kuş beyinli, aptalın teki
rarely|adv.|nadiren
wyatt|n.|missouri eyaletinde şehir
programme|n.|program
irene|n.|kadın ismi, güney dakota eyaletinde şehir
dee|n.|d tipi elektrot
contacted|expr.|bağlantıya geçtim
chemistry|n.|yapı, madde yapısı, kimya
assured|adj.|garantili, önceden belli olan, sağlama bağlanmış
applied|adj.|kılgısal, ameli, kılgılı
elected|adj.|seçilmiş
subjects|n.|halk
lust|n.|şehvet
label|v.|etiketlemek, etiket
shakespeare|n.|şekspir
tan|v.|bronzlaştırmak (cildi), (deriyi) tabaklamak, taba rengi
ego|n.|benlik
forgiven|adj.|affedilmiş, affedilen, (borçtan/yükümlülükten) azad edilmiş
phoenix|n.|feniks, eşsiz insan, anka
companion|n.|refakatçi
lottery|n.|piyango
worm|v.|solucan gibi kıvrılarak ilerlemek, solucan, kurt
publicity|n.|tanıtım
butterfly|n.|kelebek
dialogue|n.|diyalog
cal|n.|kilokalori, kalsiyum hidroksit, cal
tremendous|adj.|mahşeri, şahane, muazzam
pervert|n.|sapık
establish|v.|kanıtlamak, kurmak, tesis etmek
dearest|adj.|gözde
intimate|adj.|sıkı fıkı, samimi, çok yakın (ilişki/kimse)
eager|adj.|istekli
se|n.|gd, selenyumun simgesi
atlantic|n.|atlas okyanusu, atlantik, nijer-kongo dil ailesinin en batı kolu
contains|expr.|içeriği, içersin, içerdiği
thompson|n.|kanada'nın british columbia eyaletinde nehir, connecticut eyaletinde şehir, iowa eyaletinde şehir
shirley|n.|kadın ismi, indiana eyaletinde yerleşim yeri, maine eyaletinde yerleşim yeri
bets|v.|tüm yumurtaları aynı sepete koymamak, her şey mümkün, her şey iptal
inhales|v.|soluk almak
presentation|n.|sunum
allergic|adj.|alerjik
den|n.|mağara, yatak, çıkmaz
wells|n.|ingiltere'de şehir, ingiltere'de yerleşim yeri, maine eyaletinde yerleşim yeri
spoiled|adj.|şımarık
chen|n.|beyaz tüylü yabankazı, 557'den 589'a kadar hüküm süren çin hanedanı
accomplished|adj.|başarıyla sonlandırılmış, başarılmış, yetenekli
repay|v.|geri ödemek, (para) geri vermek
politicians|n.|politikacılar
logic|n.|mantık
gratitude|n.|minnettarlık, şükran
afghanistan|n.|afganistan
exception|n.|istisna
ultimately|adv.|sonunda, eninde sonunda, en sonunda
pablo|n.|kaliforniya eyaletinde şehir
compromise|v.|anlaşmak, anlaşmaya varmak, taviz
majority|n.|çoğunluk
journal|n.|dergi, seyir defteri
signals|n.|ekonomik göstergeler
bent|adj.|bükülmüş, bükük
dock|v.|doka çekmek, rıhtım, dok
meg|n.|milyon (altı sıfır)
essential|adj.|ana, esas, esaslı
campbell|n.|alabama eyaletinde şehir, kaliforniya eyaletinde şehir, minnesota eyaletinde şehir
climate|n.|iklim
experiments|n.|deneyler
ink|v.|mürekkeplemek, (bir sözleşmeyi vb) imzalamak, mürekkebini doldurmak
magazines|v.|dergi karıştırmak
rivers|expr.|her yol roma'ya çıkar, su akar yolunu bulur, uluslararası akarsular
teresa|n.|kadın ismi
administration|n.|yönetim, idare
passionate|adj.|tutkulu
precise|adj.|kesin
lawn|n.|çimenlik
via|prep.|vasıtasıyla, aracılığıyla, kanalıyla
jeans|n.|kot, kot pantolon, blucin
murmuring|n.|mırıldanma, mırıltı, çağlama
resort|n.|tatil yeri
announced|adj.|duyurulan
buddha|n.|buda
fries|n.|patates kızartması
capacity|n.|kapasite
lena|n.|illinois eyaletinde yerleşim yeri, illinois eyaletinde şehir, mississippi eyaletinde yerleşim yeri
opponent|n.|rakip, muhalif, karşıt
chains|n.|esaret, kölelik, el veya ayaklar için metal zincir kelepçe
minus|n.|eksi
apples|n.|elmalar, merdivenler
angie|n.|kadın ismi, louisiana eyaletinde yerleşim yeri
seattle|n.|washington eyaletinde şehir
instrument|n.|enstrüman, alet
healing|n.|şifa, şifalı
convention|n.|düzen, toplama, gelenek
messenger|n.|ulak, elçi, haber getiren kişi
explore|v.|keşfetmek
versus|prep.|karşı
survivor|n.|hayatta kalan, sağ kalan
ruled|adj.|yönetilenler, hükmedilen, çizili
boyd|n.|minnesota eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
clarence|n.|(kapalı) at arabası, klarens, iowa eyaletinde şehir
madison|n.|wisconsin’in başkenti, alabama eyaletinde şehir, batı virginia eyaletinde şehir
cough|v.|öksürmek, öksürük
experts|n.|uzmanlar, uzman kişiler
disguise|v.|kılık değiştirmek, kıyafetini ve şeklini değiştirmek, gizlenmek
archer|n.|okçu
bicycle|n.|bisiklet
inviting|adj.|davetkar
pregnancy|n.|hamilelik, gebe olma, gebelik
declared|adj.|kesin, açık, tanımlanmış
yi|n.|yi dili, çin ve vietnam’da yaşayan etnik bir grup, nuosu
vicky|adj.|bomba/afet (kız)
drums|n.|bateri
wooden|adj.|ahşap
innocence|n.|masumluk
mouths|v.|surat etmek, ağlamayan çocuğa mama vermezler, büyümüş de küçülmüş
bees|n.|arılar
creaking|adj.|gıcırdayan
cloth|n.|kumaş, bez
skies|v.|göklere çıkarmak, birini aşırı derecede övmek, öve öve bitirememek
painter|n.|boyacı, ressam
allies|n.|itilaf devletleri, müttefik kuvvetleri
miguel|n.|erkek ismi, arjantin'de bir şehir
pond|n.|gölcük, gölet
runway|n.|geçit, uçak pisti, pist (havaalanında)
assist|v.|yardım etmek
presented|adj.|sunulmuş, sunulan
mona|n.|kadın ismi, galler'in kuzeybatısında bir ada, utah eyaletinde şehir
sickness|n.|hastalık
civilian|adj.|sivil
fighters|n.|duman avcıları, yabancı savaşçılar, bilişim suçları mücadele derneği
customs|n.|gümrük
florence|n.|floransa, alabama eyaletinde şehir, arizona eyaletinde şehir
remembers|v.|hatırlamak, anımsamak, anmak
sharks|v.|köpek balıklarını beslemek, köpekbalıklarıyla dalış yapmak, dikenli yüzgeçliler
juliet|n.|kadın ismi
shrimp|n.|karides
tore|adj.|yırtık, burulma etkisi, burulma
seventh|adj.|yedinci
ou|abrev.|kuruluş birimi
avoiding|n.|önleme, kaçınma
dawson|n.|alabama eyaletinde şehir, georgia eyaletinde şehir, iowa eyaletinde şehir
isaac|n.|ısac-kıdd ortasu trolü, doğu traksitemonu
rolled|adj.|yuvarlanmış, sarılmış, çekme
championship|n.|şampiyona, üstünlük, şampiyonluk
household|adj.|ev veya aileye ait
float|v.|batmadan yüzmek
chad|n.|çad, kartlardan veya kağıttan dışarı çıkan delik, ciks
ballet|n.|bale, bale grubu
cracking|n.|çatlama, kraking, parçalanma
raj|n.|hindistan'daki ingiliz yönetimi
possessed|adj.|sahipli, sahip olunan, perili
harmless|adj.|zararsız
curiosity|n.|merak
vicious|adj.|kirli, çok kötü, bedhah
officials|n.|memur, memurlar, görevliler
glove|n.|eldiven
nearest|adj.|en yakın
begged|v.|dilenmek, yalvarmak
que|n.|vergi
withdraw|v.|geri çekilmek, geri çekmek, çekilmek
shocking|adj.|şok edici
guessed|expr.|tam tahmin ettiğim gibi, asla tahmin edemezdim, öyle tahmin ettim
nightmares|n.|kabuslar
greedy|adj.|açgözlü
forehead|n.|alın, kafanın önündeki eğim
corps|n.|müfreze, kıta, topluluk
pirates|n.|korsanlar
rudy|n.|jamaikalı gangster, ska müzik dinleyen kimse
reservation|n.|yer ayırtma, rezervasyon
hunters|n.|avcılar derneği, avcı derneği, kentucky eyaletinde şehir
fog|n.|sis
flu|n.|grip
good-looking|adj.|güzel, yakışıklı, iyi görünümlü
hint|v.|çıtlatmak, ima etmek, ima
peanut|n.|yer fıstığı, fıstık
stark|adj.|sert, boş, kati
gamble|n.|kumar
erin|n.|irlanda, new york eyaletinde yerleşim yeri, tennessee eyaletinde yerleşim yeri
autumn|n.|güz, sonbahar
bracelet|n.|bilezik
contain|v.|kapsamak, içermek
arrogant|adj.|kibirli
simpson|n.|illinois eyaletinde yerleşim yeri, kansas eyaletinde şehir, louisiana eyaletinde yerleşim yeri
piper|n.|gaydacı, gayda çalan kimse, kavalcı
knocks|n.|zor zamanlar, küt küt, fırsat insanın ayağına bir kere gelir
sperm|n.|döl
gesture|v.|el/kol/baş hareketi yapmak, jest yapmak, işaret etmek
materials|n.|malzemeler
lindsay|n.|kadın ismi, kaliforniya eyaletinde şehir, oklahoma eyaletinde şehir
alexis|n.|erkek ismi, illinois eyaletinde yerleşim yeri
ticking|n.|yastık kılıfı kumaşı, şilte, tık tık
standards|n.|standartlar, teknik spesifikasyonlar
ribs|n.|kaburga kemiği, nervür, kaburga
receipt|n.|alındı, makbuz
regards|n.|saygılar, iyi dilekler, selam
whatsoever|adj.|hangi, lalettayin, herhangi bir
homeland|n.|vatan, sıla, anavatan
leap|v.|sıçratmak, atlamak, sıçramak
targets|v.|nişan almak, hedefler
snoring|n.|horlama, horultu, gırgır
damon|n.|teksas eyaletinde şehir
leaf|v.|yaprak vermek, yaprak
jar|n.|kavanoz
brooke|n.|kadın ismi
proposed|adj.|önerilen
savage|adj.|vahşi, yabani
caring|n.|kayıt, umur, önemseme
ivy|n.|sarmaşık
approximately|adv.|takriben, yaklaşık olarak
kidnap|v.|(adam/çocuk) kaçırmak
carries|v.|taşımak
bounce|v.|sektirmek, zıplamak, sekmek
creek|n.|dere
pony|n.|midilli
cleaner|n.|temizlikçi, temizleyici
businessman|n.|işadamı, iş insanı, iş erbabı
lunatic|adj.|çılgın, deli
unlikely|adj.|pek mümkün olmayan, mümkün görünmeyen
gal|n.|kız, gal, galon
situations|v.|gözünü budaktan esirgememek, gözünü budaktan sakınmamak, özel haller
colony|n.|sömürge
sells|v.|doğmamış çocuğa kaftan biçmek, dereyi görmeden paçaları sıvamak
chambers|n.|daireler, boşluklar, nebraska eyaletinde yerleşim yeri
volume|n.|hacim
sweets|n.|şekerleme
panties|n.|külot
respects|n.|hürmetler, saygılar, selamlar
reads|n.|toplam okuma, usn okuma sayısı, disk okuma/sn
seeds|n.|kaynak, tohumlar
engage|v.|angaje etmek, bağlanmak, işgal etmek
explosives|n.|patlayıcılar, patlayıcı maddeler
stewart|n.|minnesota eyaletinde şehir
violet|n.|menekşe rengi, güvez, utangaç kimse
mutual|adj.|ortak, müşterek, karşılıklı
lighting|n.|yakma, tenvirat, ışıklandırma
scores|n.|çok sayı, çok sayıda, skorlar
savings|n.|tasarruf
beware|v.|çekinmek, sakınmak
stephanie|n.|kadın ismi
educated|adj.|yetişmiş, tahsilli, eğitimli
complaints|n.|şikayetler
cassie|n.|amber ağacı, kokulu, dikenli küçük amerikan çalısı
doomed|adj.|kaderine terk edilmiş, mahkum, mecbur
offensive|adj.|saldıran, saldırgan, saldırı
harvest|n.|hasat, hasat zamanı
qualified|adj.|nitelikli, vasıflı, kalifiye
relaxed|adj.|rahatlamış, gevşemiş (kişi), gevşemiş
cape|n.|pelerin
buffalo|v.|gözdağı vermek, dombay, karasığır
triple|v.|üç kat artmak, üç katına çıkarmak, üç katına çıkmak
fireworks|n.|fişek, çıngar, havai fişek gösterisi
palmer|n.|hristiyan hacı, alaska eyaletinde şehir, iowa eyaletinde şehir
armor|n.|zırh
poverty|n.|sefalet, yokluk, fakirlik
leadership|n.|önderlik, liderlik
rode|n.|çapa ipi, çapa zinciri
ambition|n.|ihtiras, hırs
cakes|n.|kekler, kalça, bagaj (kalça)
trousers|n.|pantolon
bean|n.|fasulye
melt|v.|eritmek, erimek
racist|n.|ırkçı
bam|v.|(cinsel ilişki) işi çabucak bitirmek, esrarlı sigara, koğuş
ankle|n.|ayak bileği
occupied|adj.|meşgul
nicer|adj.|hoş, daha hoş
correctly|adv.|doğru, doğru şekilde, uygun biçimde
terrifying|adj.|korkunç
hugh|n.|ingiltere'de yerleşim yeri
gasp|v.|nefes nefese kalmak, nefesi kesilmek, nefesini tutmak
villain|n.|problem yaratan durum, kabadayı, hain
willy|n.|açma makinesi, penis, pipi
marc|n.|cibre, posa, dişi at
draft|n.|tasarı, taslak
factor|n.|etken, faktör, etmen
whew|interj.|vay canına!
countess|n.|kontes
portrait|n.|portre
suggests|expr.|isminden de anlaşılacağı gibi
font|n.|kaynak, vaftiz su kabı, lambanın gaz haznesi
blair|n.|soyismi, erkek ismi, oklahoma eyaletinde yerleşim yeri
learnt|adj.|bilgili, öğrenilen
pencil|n.|kalem, kurşunkalem
coordinates|n.|koordinatlar, konaçlar, koordinat
collapsed|adj.|çökmüş, çökük
reserve|v.|rezerve ettirmek, ayırmak, ayırtmak
jeffrey|n.|jeffrey çamı
shirts|v.|maç sonunda formalarını değiştirmek, yüksek rütbeli memurlar
umbrella|n.|şemsiye
ta|n.|tantalın simgesi
traveled|adj.|çok gezmiş, seyahat konusunda deneyimli, çok seyahat etmiş
auto|n.|otomobil
logical|adj.|mantıklı (kimse), makul, mantığa uygun
chew|v.|çiğnemek
eliminate|v.|elemek
beverly|n.|batı virginia eyaletinde yerleşim yeri, kansas eyaletinde şehir, massachusetts'te bir kent
carbon|n.|karbon
cancelled|adj.|çizilmiş, iptal edilmiş, battal
crawling|n.|emekleme, sürünme, adacıklar
stepping|n.|adım atma, adım, kademelendirme
independence|n.|özgürlük, bağımsızlık
medium|n.|orta
canceled|adj.|çizili, battal, iptal edilen
tess|n.|kadın ismi
fanny|n.|göt, kadın cinsel organı, kıç
seated|adj.|oturmuş, oturaklı
upbeat|n.|vurgusuz tempo, eğlenceli, neşeli
asian|n.|asyalı, asya ile ilgili
drowning|n.|boğulma, gark
messy|adj.|dağınık, karmakarışık
quest|v.|aramak, araştırmak, av izini aramak
represents|n.|her nokta, ilgili boyut
fletcher|n.|ok yapan ve satan kimse, ohio eyaletinde yerleşim yeri, oklahoma eyaletinde yerleşim yeri
memorial|n.|muhtıra, önerge, anma töreni
doyle|n.|tennessee eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
stressed|adj.|vurgulu, gerilmiş, vurgulanan
bearing|n.|rulman, duruş, katlanma
watches|n.|saatler, geceleyin, elektronik saatler
spoon|n.|kaşık
cooperation|n.|işbirliği
tucker|v.|bezdirmek, yormak, bıktırmak
earthquake|n.|deprem
sailing|n.|denize açılma, deniz yolculuğu
involve|v.|kapsamak, içermek, içine almak
houston|n.|mississippi eyaletinde şehir, minnesota eyaletinde şehir, missouri eyaletinde şehir
asia|n.|asya kıtası, asya
spectacular|adj.|muhteşem
reliable|adj.|güvenilir, itimat edilir, güven telkin eden
breach|n.|uymama, çiğneme, ihlal
sophisticated|adj.|sofistike
echo|v.|yankılanmak, yankı, akis
indicate|v.|göstergesi olmak, belirtisi olmak, işaret etmek
swamp|n.|bataklık
vehicles|n.|taşıt araçları, taşıtlar
manual|adj.|elle yapılan
elegant|adj.|şık, zarif
compound|v.|şiddetlendirmek, birleştirmek, yoğunlaştırmak
serves|n.|kişilik (porsiyon)
scares|expr.|beni biraz korkutuyor, beni korkutan ne biliyor musun?
rattling|n.|tıkırtı, hareketli, tıkırdayan
pursue|v.|izlemek, takip etmek, sürdürmek
dreamt|adj.|rüya gören
stefan|n.|stefan-boltzman değişmezi, stefan-boltzmann yasası
revolutionary|n.|inkılapçı, devrimci, ihtilalci
wa|n.|ava, çin’de yaşayan etnik bir grup, parauk
rig|n.|teçhizat
convincing|adj.|inandırıcı, ikna edici
fiona|n.|kadın ismi
tribal|adj.|kabileye ait, kabile, bir kabile veya grubun değerlerine sadık
cleveland|n.|alabama eyaletinde şehir, georgia eyaletinde şehir, illinois eyaletinde yerleşim yeri
lex|n.|kaide, kural, usul
depth|n.|derinlik
blaming|n.|suçlama
aids|n.|aids
elaine|n.|kadın ismi, arkansas eyaletinde şehir, kral arthur efsanesinde galahad'ın annesi
wakes|v.|canlanmak, uyanmak
occur|v.|meydana gelmek, akla gelmek, olmak
camping|n.|kamp yapma
fart|v.|osurmak, osuruk
stamp|v.|damga vurmak, kaşe, damga
kathy|n.|kadın ismi
assassin|n.|suikastçı
approved|adj.|onaylı
crucial|adj.|çok önemli
annual|adj.|senelik, yıllık
torch|n.|meşale
dallas|n.|dallas, güney dakota eyaletinde yerleşim yeri, georgia eyaletinde şehir
fulfill|v.|yerine getirmek
bon|adj.|elverişli, iyi
resting|n.|dayanma, dingin
reunion|n.|tekrar toplanma, yeniden bir araya gelme, anma toplantısı
witnessed|adj.|meşhut, şahit olunmuş
graduated|adj.|mezun
sub|v.|yerine geçmek, yerini doldurmak, denizaltı
howling|n.|inleme, uluyan, uluma
clyde|n.|erkek ismi, ahmak, mal
hospitals|n.|hastaneler
stall|v.|stop ettirmek, savsaklamaya çalışmak, saplanmak
legacy|n.|miras
otto|n.|çiçeklerden elde edilen bir parfüm, new york eyaletinde yerleşim yeri
riot|v.|isyan etmek, ayaklanmak, ayaklanma
shops|n.|dükkanlar
whereabouts|n.|yer, semt, (bulunduğu) yer
teenager|n.|on üç ile on dokuz yaşlar arasındaki kimse, delikanlı, yeniyetme
samuel|n.|erkek ismi
squealing|n.|ciyaklama
mines|n.|mayın, maadin
danced|v.|dans etmek, dans
crowded|adj.|kalabalık, kalabalık (yer)
orleans|n.|iowa eyaletinde şehir, indiana eyaletinde yerleşim yeri, massachusetts eyaletinde yerleşim yeri
literature|n.|literatür, edebiyat
morgue|n.|morg, ölühane, ölülük
strongest|adj.|en kuvvetli
agnes|n.|kadın ismi
transmission|n.|şanzıman, vites, iletim
panel|n.|pano
sole|n.|ayak tabanı, taban, yegane
sequence|n.|silsile, birbiri ardından gelme, sıra
sexually|adv.|cinsel olarak, cinsel açıdan, cinsel
hugo|n.|kolorado eyaletinde şehir, minnesota eyaletinde şehir, oklahoma eyaletinde şehir
denny|n.|hücumcuya top aldırmama pozisyonu
smack|v.|şaplatmak, tokat atmak, şapır şapır içmek
congratulate|v.|tebrik etmek
anxiety|n.|endişe, kaygı
choking|n.|boğma, kısma, boğucu
tolerate|v.|tahammül etmek, hoşgörmek, hoş görmek
mode|n.|kip
communications|n.|ulaşma, ulaşım, tebligat
welfare|n.|gönenç, refah
dice|n.|zar
orphan|n.|öksüz, yetim
locks|n.|kilitler, kilit sayısı
settlement|n.|yerleşim
advertising|n.|reklamcılık, reklam
uniforms|n.|askeri kıyafet giyen teröristler, işçi tulumu, askeri üniformalar
devoted|adj.|sadakatli, adanmış, merbut
shoots|n.|moda çekimleri, filizli, bambu filizleri
principles|n.|ilkeler
circuit|n.|çevrim
nickname|n.|rumuz, lakap, takma isim
dot|n.|nokta
scenario|n.|senaryo
choir|n.|koro
stunt|v.|büyümesini önlemek, dikkat çekici reklam yapmak, gelişmesini önlemek
smoked|adj.|tütsülü, sigara içmiş, tütsülenmiş (et/balık)
isolated|adj.|izole
equally|adv.|eşit olarak
statements|v.|ifade almak, açıklamalarda bulunmak (basına vb), yalan beyanlarda bulunmak
shaw|n.|mississippi eyaletinde şehir
lipstick|n.|ruj
courtesy|n.|kibarlık, nezaket
hobby|n.|hobi
hesitate|v.|duraksamak, tereddüt etmek
hatch|v.|yumurtadan çıkmak, ambar ağzı
luis|n.|erkek ismi, kaliforniya eyaletinde şehir, kolorado eyaletinde şehir
sylvia|n.|ötleğen, kansas eyaletinde şehir
phoned|v.|telefondan aranmak
experiences|n.|deneyimler, yaşananlar
popped|adj.|dışarıda, atık
quid|n.|çiğneme tütünü, karşılık, paund
fragile|adj.|narin, kırılgan, hassas
husbands|n.|kocalar
fiction|n.|kurgu
persuade|v.|ikna etmek, razı etmek
pastor|n.|papaz, papaz (protestanlıkta)
dolls|n.|oyuncak bebekler
pose|v.|(tehlike/tehdit) teşkil etmek, poz
ming|n.|ming hanedanı, kötü kokmak, pis görünmek
rupees|n.|rupi
tricked|adj.|kandırılmış, oyuna gelmiş
ruins|n.|kalıntı, kalıntılar, harabeler
sadly|adv.|üzüntülü bir şekilde, hüzünle, çok
owed|adj.|borçlu
importantly|adv.|önemle, önemli biçimde
louie|v.|sola dönmek
industrial|adj.|endüstri, endüstriyel
musician|n.|müzisyen
labour|v.|uğraşmak, çalışmak, işgücü
evolution|n.|evrim
salute|v.|selamlamak, selam vermek
ba|n.|baryumun simgesi
cent|n.|sent, metelik, sent amerikan dolarının yüzde biri
bartender|n.|miço, barmen
calendar|n.|takvim
miracles|v.|harikalar yaratmak, mucizeler yaratmak, mucizelere inanmak
balcony|n.|balkon
horny|adj.|abazan
regard|v.|saymak, hesaba katmak, dikkatle bakmak
valerie|n.|kadın ismi
fold|v.|bükülmek, katlamak, kat
organs|n.|aza
theo|pref.|tanrı anlamına gelen ön ek, ilahi/tanrısal anlamına gelen ön ek
einstein|v.|einstein gibi düşünmek, bose-einstein dağılımı, bose-einstein yoğunlaşması
boris|n.|erkek ismi
suitable|adj.|münasip, uygun, elverişli
inaudible|adj.|duyulamaz, duyulmaz, işitilemez
son-in-law|n.|damat, güvey, eloğlu
melody|n.|melodi
movements|n.|edebiyatta puritan hareketleri, toplumsal hareketler, protesto hareketleri
differences|n.|farklılıklar, farklar
barbecue|n.|mangal, ızgara
trading|n.|ticaret, işlem, iş hacmi
strongly|adv.|fazlasıyla, şiddetle, kuvvetle
fluid|n.|sıvı, akışkan, akıcı
scholarship|n.|burs
translation|n.|çeviri, tercüme
cricket|n.|cırcırböceği, çırçır, kriket
shuttle|v.|gidip gelmek
moans|v.|inildemek, inlemek, sızlanmak
quicker|adj.|hızlı, daha hızlı, daha çabuk
murderers|n.|seri katiller
videos|n.|videolar
initial|n.|ilk harf, baş harf, baştaki
perimeter|n.|çevre uzunluğu, çeper, çevre
questioned|adj.|sorgulanan, sorulmuş
yea|n.|olumlu cevap, gerçekten, bir de
cousins|n.|birinci derecede kuzen, amca çocuğu, kuzen
divided|adj.|bölünmüş
linked|adj.|bağlı, bağlanmış, halkalı
laboratory|n.|laboratuvar, kimyahane, deneyevi
crab|n.|yengeç
pulls|n.|y-biçimli çatlaklar
landlord|n.|ev sahibi
hostile|n.|hasım, düşmanca
classified|adj.|gizli (bilgi), sınıflandırılmış
cultural|adj.|kültürel
measures|n.|had, miktar, önlem
update|v.|güncelleştirmek
cottage|n.|kulübe
backyard|n.|avlu, evin arkasındaki bahçe, arka bahçe
amateur|adj.|amatör
chopper|n.|satır, takma diş, dilici
rash|n.|kızarıklık, isilik, kurdeşen
despair|v.|umudunu kesmek, çaresizlik, umutsuzluk
honorable|adj.|namuslu, şerefli, onurlu
shiny|adj.|parlak
hawk|n.|şahin, doğan
shorts|n.|şort
ni|n.|nikelin simgesi
representative|adj.|temsil eden, temsili, temsilci
wong|n.|alan, tarla
pouring|n.|dökme
distress|v.|üzmek, sıkıntı
tanner|n.|tabakhane, tabakçı, deri tabaklayan
telegram|n.|telgraf
pimp|n.|pezevenk
dip|n.|(sıvı içine) batma
trophy|v.|hayvan başları ile süslemek, kupalarla süslemek, yadigarlarla süslemek
marilyn|n.|kadın ismi
hallelujah|n.|şükür, şükretme
neal|v.|tavlamak
es|n.|es, aynştayniyum'un kimyasal simgesi, aynştanyumun simgesi
howdy|interj.|merhaba, selam, naber
misses|n.|kaçırılanlar, kaçışlar
flush|v.|yüzü kızarmak, sifon
magician|n.|sihirbaz, büyücü
dynamite|n.|dinamit
cuba|n.|küba, alabama eyaletinde şehir, illinois eyaletinde şehir
conquer|v.|fethetmek
unpleasant|adj.|hoşa gitmeyen, hoş olmayan, nahoş
jealousy|n.|kıskançlık
regrets|n.|reddetme, kibarca reddetme
lifted|adj.|kalkık
increased|adj.|artmış
toxic|adj.|zehirli
broadway|n.|broadway, north carolina eyaletinde yerleşim yeri, virginia eyaletinde yerleşim yeri
sakes|expr.|aman tanrım!, tanrı aşkına!
pudding|n.|tatlı (yemeğin sonunda yenilen), muhallebi, puding
rally|v.|toplanmak, toplama, toplanma
needing|n.|ihtiyaç duyma
bloom|v.|çiçek açmak
corporation|n.|kurum
buys|n.|buys-ballot tablosu, buys ballot yasası, buys ballot kanunu
disorder|n.|kargaşa, rahatsızlık, düzensizlik
interrupting|n.|söze karışma, sekte vurma, sözünü kesme
sadness|n.|hüzün, üzgünlük, keder
cease|v.|son vermek, dinmek, durmak
barnes|n.|kansas eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
scoundrel|n.|alçak herif, hain, kötü adam
sensible|adj.|mantıklı, akla uygun
evans|n.|georgia eyaletinde şehir, kolorado eyaletinde şehir, new york eyaletinde yerleşim yeri
specialist|n.|uzman
dragging|n.|kabartma, tırmıklama, sürükleme
bribe|n.|rüşvet
burke|v.|boğmak, susturmak, örtbas etmek
bothers|expr.|beni rahatsız ediyor, hangisi canımı daha fazla sıkıyor bilmiyorum
interrogation|n.|sorgu
prescription|n.|reçete
referring|n.|sevk
knives|n.|bıçaklar
graduation|n.|mezun olma, mezuniyet
t-shirt|n.|tişört, yarım kollu fanila
liking|n.|hoşlanma, beğenme, beğeni
bubbles|n.|kabarcıklar, şampanya, balonlar
grid|n.|örgü, şebeke, grid
haircut|n.|saç kesimi, saçın kesilme biçimi, tıraş
regardless|adv.|ne olursa olsun
lodge|v.|pansiyonda kalmak, arzetmek, bildirmek
poisoning|n.|zehirleme, zehirlenme, ağulu
feathers|n.|kuştüyleri (seramik)
edgar|n.|nebraska eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
software|n.|yazılım
marina|n.|yat limanı, marina, küçük liman
sophia|n.|sofya, batı virginia eyaletinde yerleşim yeri
queens|n.|kraliçeler
oak|n.|meşe
trips|v.|dolaşmak, yiyecek arama gezileri, nehirde tekne turu yapılıyor mu?
scaring|n.|korkutma, ürkütme, ürkütücü
avery|n.|teksas eyaletinde şehir
awhile|adv.|biraz, bir süre, kısa bir süre için
sofa|n.|divan, kanepe
conscious|adj.|bilinçli
swords|n.|kılıçlar, irlanda'da yerleşim yeri
instincts|v.|iç güdülerine güvenmek, içgüdülerinle hareket etmek, içgüdülerine göre davranmak
deliberately|adv.|kasten
starve|v.|açlıktan ölmek
venus|n.|venüs
olive|n.|zeytin
maniac|adj.|manyak
psychological|adj.|ruhbilimsel, ruhi, tinbilimsel
robinson|n.|illinois eyaletinde şehir, kansas eyaletinde şehir, kuzey dakota eyaletinde şehir
belle|n.|güzel kadın, dilber, güzel
landscape|n.|manzara, peyzaj
straw|n.|saman, hasır, pipet
dam|n.|baraj
mandy|n.|kadın ismi
accuse|v.|suçlamak, itham etmek
is-|v.|was, were - been, bal alacak çiçeği bilmek, adı kalmak
rehab|n.|rehabilitasyon, rehabilite etmek, iyileştirmek
switzerland|n.|isviçre
agenda|n.|gündem
glue|v.|yapıştırmak, zamk, tutkal
salesman|n.|satıcı (erkek), satıcı
diner|n.|vagon restoran, yemek yiyen, lokanta
projects|n.|projeler
floors|v.|yerleri silmek, yere işemek, benim evim iki katlı
mainly|adv.|daha çok, esasen, en çok
biological|adj.|yaşambilimsel, dirimbilimsel, biyolojik
sincere|adj.|içten, samimi
weigh|v.|tartmak
pad|n.|yumuşak bir maddeden yapılmış koruyucu şey, ufak yastık
swiss|n.|isviçre halkı, isviçre, isviçreli
cue|n.|işaret
witches|n.|cadılar
opposed|adj.|karşıt, aleyhtar
brand-new|adj.|pırıl pırıl, gıcır gıcır, hiç kullanılmamış
tourists|v.|turist akınına uğramak, döviz bırakmak, turist çekmek
sneaking|n.|gizlice sokulma
harvard|n.|illinois eyaletinde şehir, massachusetts eyaletinde yerleşim yeri, nebraska eyaletinde şehir
spying|n.|casusluk, casusluk yapma, çaşıtlık
sketch|v.|taslağını yapmak, eskiz, kroki
parliament|n.|meclis
behold|v.|beheld - beheld, seyretmek, dikkatle bakmak
blamed|adj.|suçlanmış, suçlanan
topic|n.|konu, başlık
offices|n.|bürolar
sacrificed|adj.|adaklık, kurban edilmiş, kurbanlık
loop|n.|döngü, ilmek
drivers|n.|taksi şoförleri, taksi sürücüleri, otomobil sürücüleri
battles|n.|savaşlar
blond|adj.|sarışın
plead|v.|savunma yapmak
races|n.|yarışlar, ırklar
tanya|n.|kadın ismi
salmon|n.|somon, som balığı
bizarre|adj.|garip, acayip, tuhaf
rico|n.|kolorado eyaletinde şehir
isabel|n.|kadın ismi, güney dakota eyaletinde yerleşim yeri, kansas eyaletinde şehir
wig|n.|takma saç, peruk
reaches|n.|seviyeler, kademeler, katmanlar
heights|v.|yüksekten korkmak, golan tepeleri, yükseklik korkusu
possibilities|n.|olasılıklar, imkanlar
wax|n.|ağda, mum
travels|n.|seyahatname
confidential|adj.|güvenilir, özel, gizli
pursuit|n.|kovalama, takip
herd|v.|gütmek, sürü
scissors|n.|makas
cd|n.|dış çap, cd, compact disk
spies|n.|ajanlar
exams|n.|sınavlar
invention|n.|buluş, icat
explaining|n.|açıklama, anlatma
replacement|n.|yenisiyle değiştirme
bombing|n.|bombalı eylem, bombalama eylemi, bombalı saldırı
springs|n.|su kaynakları
chelsea|n.|güneydoğu ingiltere'de bölge, alabama eyaletinde şehir, güney dakota eyaletinde yerleşim yeri
sabrina|n.|kadın ismi, bir kadın ismi
kicks|n.|ayakkabı
integrity|n.|tamamlık, bütünlük
dash|v.|hızla koşmak, darbe, vurma
senate|n.|senato, amerikan ayan meclisi, amerikan senatosu
mentally|adv.|zihnen, zeka olarak, zihinsel olarak
flee|v.|kaçmak
gangster|n.|çeteci, gangster
beautifully|adv.|güzelce, güzel, hoşça
roberts|n.|idaho eyaletinde şehir, illinois eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
slim|adj.|narin, zayıf, ince
choosing|adj.|seçen
promising|n.|geleceği parlak, söz verme, gelecek vaat eden
objective|n.|hedef, amaç, nesnel
joyce|n.|kadın ismi
altogether|adv.|hep beraber, büsbütün
attract|v.|cezbetmek
ernie|n.|edi ile büdü, edi ve büdü
melanie|n.|kadın ismi
prep|v.|hazırlanmak, ev ödevi, hazırlık öğrencisi
neighbours|n.|komşular
nailed|adj.|mıhlanmış, çivilenmiş, çivili
briefcase|n.|evrak çantası
buzzer|n.|vibratör, istim düdüğü, vızıldayan alet
quitting|n.|istifa
puppet|n.|kukla
restore|v.|yenileştirmek
dozens|n.|düzineler
betting|n.|bahse girme, bahis, iddia
pancakes|expr.|dalga mı geçiyorsun?, krep, yassı kadayıf
corridor|n.|koridor
embarrass|v.|mahcup etmek, utandırmak
visits|n.|ziyaretler, ziyaret sayısı
database|n.|veritabanı, veri tabanı
cheryl|n.|kadın ismi
achieved|adj.|erişilen, yetenekli, başarılı
sucking|n.|emme
encourage|v.|cesaretlendirmek, yüreklendirmek, özendirmek
grades|n.|kalite farklarına göre standardizasyon, notlar
gps|v.|gps ile izlemek, gps alıcısı, gps ile izleme
barks||her horoz kendi çöplüğünde öter
patterns|n.|modeller
relevant|adj.|konuyla ilgili, konu ile ilgili, ilgili
mafia|n.|mafya
hudson|n.|güney dakota eyaletinde yerleşim yeri, iowa eyaletinde şehir, illinois eyaletinde yerleşim yeri
expense|n.|masraf, harcama, gider
intact|adj.|dokunulmamış
occasionally|adv.|ara sıra
kiddo|n.|çocuk, ufaklık, küçük
heartbeat|n.|ruh, yürek vuruşu, öz
identical|adj.|özdeş, aynı
cigar|n.|yaprak sigarası, puro
billions|n.|milyarlar
alec|n.|ukala kimse, zeki geçinen tip, bok yedi başı
gained|adj.|kazanılmış, elde edilmiş
venice|n.|venedik, florida eyaletinde şehir, illinois eyaletinde şehir
classical|adj.|klasik
noodles|n.|erişte, tel şehriye
consistent|adj.|istikrarlı, tutarlı
clip|v.|kırkmak, kırpmak
resign|v.|istifa etmek
insects|n.|haşarat, böcekler
failing|n.|zayıflık, başarısızlık, ayıp
organic|adj.|organik
seize|v.|el koymak, zorla almak, kapmak
charging|n.|şarj, ağırlaştırma, itham
mug|v.|çok çalışmak, komik mimikler yapmak, zevzeklik etmek
iris|n.|gökkuşağı taşı ıris, iris, iris tabakası
crow|n.|karga
ella|n.|kadın ismi
fountain|n.|çeşme
observation|n.|gözetleme, gözlem
abortion|n.|bebek aldırma, kürtaj, çocuk aldırma
railroad|v.|demiryolu ile taşımak, demiryolu, tren yolu
straighten|v.|düzeltmek
legitimate|v.|meşrulaştırmak, meşru
sting|v.|batmak, sokmak
youngest|adj.|en genç
fork|n.|çatal
flynn|n.|Flynn etkisi
ciao|interj.|hoşçakal (italyanca)
coroner|n.|sorgu yargıcı, şüpheli ölüm olaylarını araştıran memur, kuşkulu ölüm olaylarını kovuşturan görevli
marching|v.|tezkeresini eline vermek, yürüyüş yapmak (protesto amaçlı), marş
touches|v.|son rötuşlarını yapmak, rötuşunu yapmak, son rötuşları yapmak
jade|n.|yeşim
feared|expr.|korktuğum başıma geliyor, korkulan semptom, korkulan komplikasyon
griffin|n.|hindistan'a yeni gelmiş avrupalı, kartal başlı aslan gövdeli ejderha, bilgi
expedition|n.|sefer
forcing|n.|zorlama
neighbour|n.|komşu
digital|adj.|dijital
deeds|n.|fiiliyat
milan|n.|milano, georgia eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri
bernie|n.|missouri eyaletinde şehir
a-|v.|yıkanmak, iz bırakmak, bir iddia öne sürmek
attic|n.|çatı odası, tavan arası, çatı katı
jr|adj.|küçük, genç
whores|n.|fahişe
sentimental|adj.|duygusal, içli
cooler|n.|soğutucu
bert|n.|edi ile büdü, edi ve büdü
feds|n.|federaller, polis
plea|n.|savunma
polly|n.|papağan, kadın ismi, politikacı
harmony|n.|ahenk, uyum, armoni
difficulty|n.|zorluk, güçlük
bands|n.|kuşaklar
dried|adj.|kurutulmuş, kurumuş, kuru
aunty|n.|teyze, babanın veya annenin kız kardeşi, amcanın veya dayının karısı
maker|n.|yapan
randall|n.|iowa eyaletinde şehir, kansas eyaletinde şehir, minnesota eyaletinde şehir
supporting|n.|destekleme, destekleyen, destekleyici
brake|v.|fren yapmak, frenlemek, fren
girlfriends|n.|kız arkadaş, manita, flört
features|n.|çehre, yüz, sima
photography|n.|fotoğrafçılık, fotografi, fotoğraf
vengeance|n.|intikam
inappropriate|adj.|uygun olmayan, yakışıksız
vacuum|n.|vakum
throws|n.|omuz el ve kol fırlatmaları
kane|n.|illinois eyaletinde yerleşim yeri, pensilvanya eyaletinde yerleşim yeri
residents|n.|bir bölgenin sakinleri, sakinler, ülke sakinleri
endure|v.|tahammül etmek, dayanmak, katlanmak
substance|n.|cisim, madde
corrupt|adj.|yozlaşmış
potter|v.|oyalanmak, ufak işlerle oyalanmak, vakit geçirmek
investigator|n.|müfettiş, dedektif, araştırmacı
thread|n.|iplik
priests|n.|rahipler
gap|n.|açıklık, ara, uçurum
whining|n.|mızmızlanma, zırıltı, ağlamaya benzer inilti
scarf|n.|atkı, eşarp
institution|n.|enstitü, kuruluş, kurum
immortal|adj.|ölümsüz
marsh|n.|bataklık
chapel|n.|mabet, tapınak, şapel
desperately|adv.|umutsuzca
accidents|n.|kazalar, değiştirme işaretleri
alcoholic|n.|alkolik, alkollü
fabric|n.|kumaş
nazis|n.|naziler
railway|n.|tren yolu, şimendifer, tren
sal|n.|çin’de yaşayan etnik bir grup, monguor, sal
dame|n.|dam asalet ünvanı, hanım
rebels|n.|eski asiler
custom|n.|görenek, örf, gelenek
pension|n.|emekli maaşı, emeklilik
cans|n.|konserve kutuları, memeler, göğüsler
possess|v.|sahip olmak
poster|n.|afiş
developing|adj.|gelişen
addict|v.|alıştırmak, bağımlılık yapmak, bağımlısı olmak
feature|n.|özellik
cope|v.|başa çıkmak
lords|n.|lordlar kamarası, baylar ve bayanlar, dana ayağı
delightful|adj.|nefis, tatlı, zevkli
wrestling|n.|güreşme, güreş
rio|n.|illinois eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
reduce|v.|(daha basit bir hale) dönüştürmek, kısmak, kırmak (fiyat vb)
rescued|adj.|kurtarılmış
peg|v.|saptamak, çivilemek, belirlemek
mercedes|n.|teksas eyaletinde şehir
guaranteed|adj.|garantili
emotionally|adv.|heyecanla, heyecanlı bir şekilde, duygu bakımından
poland|n.|polonya
accountant|n.|muhasebeci
theories|n.|nazariyat, teoriler
tumor|n.|ur, tümör
automatic|adj.|otomatik
amusing|adj.|eğlenceli, zevkli
unnecessary|adj.|gereksiz, lüzumsuz
voting|n.|oylama, oy kullanma, oy verme
buster|n.|alem, cümbüş, ulan
stadium|n.|stadyum, dönem, stat
visible|adj.|görünür
easter|n.|paskalya yortusu, paskalya, paskalya bayramı
jeep|n.|bir arazi taşıtı markası
dj|n.|diskcokey, diskjokey
garcia|v.|sıkıntılı bir durumda inisiyatif kullanmak, garcia etkisi, olumsuz tat koşullanması
tracked|adj.|paletli, tırtıllı, izlenen
ignorant|adj.|bilgisiz, cahil
pledge|n.|rehin
deserted|adj.|ıssız
esther|n.|kadın ismi
rum|n.|içki, antika, rum
fisher|n.|dalyan, balıkçı, balıkçıl hayvan
wheelchair|n.|tekerlekli sandalye
salvation|n.|kurtulma, kurtuluş, kurtarma
lester|n.|batı virginia eyaletinde yerleşim yeri, iowa eyaletinde şehir
wonders|v.|mucizeler yaratmak, harikalar yaratmak, ilginç şeyler ve harikalar
clattering|n.|patırdama, tıkırdama, tıkırdayan
maintenance|n.|bakım
tobacco|n.|tütün
underwater|adj.|sualtı
divide|v.|bölmek
slightest|adj.|en ufak
discount|n.|tenzilat, indirim, iskonto
yoga|n.|yoga
vagina|n.|dölyolu, vajina, döl yolu
rushing|v.|başı kesik tavuk gibi oradan oraya koşmak, deli dana gibi dolanmak, deli dana gibi kaçmak/koşturmak
modest|adj.|mütevazı, alçakgönüllü, gösterişsiz
make-up|n.|yapım, kişilik, süs
wes|pron.|biz
reduced|adj.|indirilmiş, azalmış, tenzilatlı
whisper|v.|fısıldamak, fısıltı
pressing|n.|sıkma, sıkıştırma, basınçlama
tops|n.|maksimum miktar, en fazla, mükemmel
variety|n.|çeşitlilik, çeşit
ignored|adj.|ihmal edilen, ihmal edilmiş, gözardı edilmiş
helena|n.|alabama eyaletinde şehir, arkansas eyaletinde şehir, georgia eyaletinde şehir
writers|n.|türkiye yazarlar sendikası, türkiye yazarlar birliği (tyb), ulusal kolej beyzbol yazarları birliği
grain|n.|tahıl, tane, tanecik
essentially|adv.|özünde, temelde, gerçekte
archie|n.|missouri eyaletinde şehir
individuals|n.|bireyler, efrad
meredith|n.|kolorado eyaletinde şehir, new hampshire eyaletinde yerleşim yeri, new york eyaletinde yerleşim yeri
subtle|adj.|hemen göze çarpmayan, güç algılanan
interviews|n.|röportajlar, ropörtajlar
pinky|v.|küçük parmak, serçe parmağı, pembemsi
cord|n.|kordon
sites|n.|bölgeler, merkezler, siteler
vienna|n.|viyana, batı virginia eyaletinde şehir, georgia eyaletinde şehir
issued|adj.|ihraç edilmiş, çıkarılmış, verilen
lasted|expr.|devam ettiği sürece eğlenceliydi, 8 saat sürdü
explosive|adj.|patlayıcı
origin|n.|menşe, köken
unto|prep.|-e doğru
rogue|v.|ekilmiş bir alandan yaban otlarını temizlemek, hile, çapkın
x-ray|n.|x ışını, röntgen
superintendent|n.|amir, yönetici, başkomiser
cody|n.|nebraska eyaletinde yerleşim yeri, wyoming eyaletinde yerleşim yeri
jacques|n.|meyveli kup glase
challenges|n.|zorluklar
corruption|n.|yolsuzluk, yozlaşma
sullivan|n.|illinois eyaletinde şehir, indiana eyaletinde şehir, maine eyaletinde yerleşim yeri
shutter|n.|kepenk, panjur
erase|v.|silmek
ski|n.|kayak
forensics|n.|adli tıp
flavor|n.|tat duyusu, tat, lezzet
fastest|adj.|en hızlı
vet|n.|veteriner
civilians|n.|sivil toplum, burjuva toplumu, sivil halk
lobster|n.|ıstakoz, langust, ıstakoz gibi olmuş/yanmış kimse
housing|n.|konut
canal|n.|kanal
robots|n.|robotlar
shade|n.|gölge, gölgelik
ambitious|adj.|hırslı
orchestra|n.|orkestra
succeeded|adj.|başarılı
guidance|n.|yönlendirme, yol gösterme, kılavuzluk
hence|adv.|buradan, bunun sonucu olarak, bundan
bella|n.|kadın ismi
seoul|n.|seul
jose|n.|erkek ismi
inevitable|adj.|kaçınılmaz
tick|n.|kene, tik tak
rival|n.|rakip
refuses|v.|geri çevirmek, reddetmek
purchase|v.|satın almak, satın alma, alım
wander|v.|başıboş dolaşmak, dolaşmak, amaçsızca dolaşmak
ireland|n.|irlanda
hanna|n.|kadın ismi, oklahoma eyaletinde yerleşim yeri, wyoming eyaletinde yerleşim yeri
hanged|adj.|asılmış, asılı
napoleon|n.|milföy, pötifur, napolyon
elite|adj.|elit
craft|n.|esnaf, zanaat
cult|n.|tarikat, kült
whisky|n.|viski
profits|n.|mahrum kalınan kar, kağıt üzerindeki kar, karın büyük bir bölümü
shelf|n.|raf
kai|n.|kayı boyu
allowing|adj.|izin verilen
chart|n.|çizelge
accusing|n.|itham, suçlama
buzzes|v.|uğuldamak, vızıldamak, vızıltı
weekends|adv.|haftasonları
humiliated|adj.|aşağılanmış, utandırılan, küçük düşürülmüş
hissing|n.|tıslama, ıslıklama, ıslıklı protesto
treats|n.|ikramlar
granddaughter|n.|torun, kız torun
serena|n.|kadın ismi, illinois eyaletinde yerleşim yeri
submit|v.|sunmak, ibraz etmek, boyun eğmek
supervisor|n.|denetmen, süpervizör, gözetmen
sniffing|n.|koklama, parlak, dinleme
resident|n.|sakin, bir yerde oturan/sakin
tearing|n.|ağlama, paralama, yırtılma
obliged|adj.|yükümlü, borçlu, zorunlu
opportunities|n.|fırsatlar, imkanlar
knights|n.|şövalyeler ve şövalyelik, hospitalier şövalyeleri, malta şövalyeleri
hangs|n.|kültür balığını avlamak için set
jerusalem|n.|kudüs
stew|n.|yahni
counted|adj.|addedilmiş, sayılmış, sayılı
instruments|n.|edevat, araç gereç, araçlar
triumph|n.|zafer
nun|n.|rahibe, konik şekilli şamandıra, ibrani alfabesinin 14. harfi
frequency|n.|sıklık
resume|v.|sürdürmek
marines|expr.|külahıma anlat, sen onu benim külahıma anlat, sakalıma anlat
distract|v.|dikkatini dağıtmak, dikkati dağıtmak, dikkat dağıtmak
satisfaction|n.|memnuniyet, tatmin
historical|adj.|tarihi
creates|expr.|oluşturur
costumes|n.|kostümler
swedish|n.|isveç dili, isveç, isveççe
lizzie|n.|kadın ismi
depending|n.|güveniş, bağlı olarak
sour|adj.|ekşi
spark|v.|kıvılcım saçmak, kıvılcım
freely|adv.|serbestçe, özgürce
freaks|n.|biçim bozuklukları
shan|n.|tay dillerinin bir kolu, tai dillerinin bir kolu, şan
globe|n.|küre
peak|v.|doruğa ulaşmak, zirve, tepe
sentenced|adj.|hükümlü, hüküm giymiş, mahkum olmuş
fierce|n.|vahşet, azılı, kötü
scam|v.|dolap (çevirmek), tertip, dümen (sahtecilik)
hollow|n.|oyuk, çukur, içi boş
anton|n.|erkek ismi, kolorado eyaletinde şehir, teksas eyaletinde şehir
hoo|n.|yaygara, şamata, karmaşa
concentration|n.|yığma, dikkati bir noktada toplama, teksif
presume|v.|farz etmek
invest|v.|yatırım yapmak
eleanor|n.|kadın ismi, batı virginia eyaletinde yerleşim yeri
radical|n.|radikal, kökten, köklü
protective|adj.|koruyucu
smiles|v.|ağzı dört köşe olmak, çok mutlu görünmek, dört köşe olmak
stunning|n.|sersemletme, çekici, müstesna
frustrated|adj.|hakkı yenmiş, boşa çıkmış, boşuna didinmiş
suspenseful|adj.|endişeli, şüpheli, merak uyandıran
breed|v.|doğurmak, yavrulamak, soy
adore|v.|tapmak
controlling|n.|kontrol etme, idare etme, kumanda
pasta|n.|makarna
precinct|v.|polis merkezine götürmek, merkeze çekmek, polis merkezine almak
swallowed|v.|(atm) kartını yutmak, atm'ye kartını kaptırmak, atm'nin kartı yutması
execute|v.|infaz etmek, idam etmek, yapmak
towels|n.|havlular
architect|n.|mimar
delta|n.|nehir deltası, üçgen, çatal ağız
honks|v.|klakson çalmak, çıkarmak, korna çalmak
preserve|v.|muhafaza etmek, korumak, zarardan korumak
dose|n.|doz
stove|n.|soba
codes|n.|kodlar
instantly|adv.|hemen
bugger|n.|oğlancı
vivian|n.|kadın ismi, louisiana eyaletinde yerleşim yeri
doo|n.|yapılmış saç, şekil verilmiş saç, saç stili
haul|v.|taşımak, çekmek, sürüklemek
orphanage|n.|yetimhane
bolt|v.|sürgülemek, cıvata, sürgü
autograph|v.|imza vermek, imzalamak, (kitap vb) imzalamak
sharply|adv.|keskince, hızla
habits|n.|adetler, alışkanlıklar
villagers|n.|köylü
cracks|v.|tefe koymak, uyuşmazlığı gidermek, arada kaynamak
dwight|n.|illinois eyaletinde yerleşim yeri, kansas eyaletinde şehir, kuzey dakota eyaletinde şehir
omar|n.|ömer hayyam
assembly|n.|toplantı, birleştirme, montaj
marge|n.|margarin, kenar
magnetic|adj.|çekici, mıknatıslı, manyetik
romans|n.|romalılar
joshua|n.|erkek ismi, joshua ağacı, yuşa peygamber
sorted|adj.|sıralanmış, harika, mükemmel
assets|n.|mal, mevcutlar, mevcudat
insulted|v.|üzerine alınmak
outstanding|adj.|üstün, göze çarpan, seçkin
essence|n.|öz
wardrobe|n.|dolap, gardırop, elbise dolabı
ling|n.|süpürge otu, kaçık, gelincik
nam|n.|vietnam, kartta ya
benson|n.|arizona eyaletinde şehir, illinois eyaletinde yerleşim yeri, minnesota eyaletinde şehir
restaurants|n.|restoranlar
disco|n.|disko, gece kulübü
flirting|n.|flört, korte, flört etme
abilities|n.|yetenekler
dolly|n.|dekovil lokomotifi, bebek, kukla
handful|n.|ele avuca sığmayan tip, avuç, az miktar
mice|n.|fareler
pumpkin|n.|kabak
bennett|n.|iowa eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
sweating|n.|terleme, yoğuşma, terli
anchor|v.|demir atmak, demirlemek, çapa
thankful|adj.|müteşekkir, minnettar
interior|adj.|iç, dahili
moore|n.|idaho eyaletinde şehir, montana eyaletinde yerleşim yeri, oklahoma eyaletinde şehir
urge|n.|dürtü
surrounding|n.|çevre, sarma, kuşatma
strain|v.|gerilerek zorlanmak (kaslar), gerginleştirmek, gerilmek
curtains|n.|son, akıbet, bitiş
gypsy|n.|çingene
tomato|n.|domates, domates kırmızısı
blanche|n.|kadın ismi
bonds|n.|bonolar, tahviller, esham
compassion|n.|merhamet, şefkat
greece|n.|yunanistan
ceo|n.|chief executive officer, icra kurulu üyesi, icra kurulu başkanı
arabic|n.|arap, arapça, araplara özgü
examination|n.|inceleme, muayene, sınav
participate|v.|katılmak
veins|n.|venler
cups|n.|içki kadehleri
additional|adj.|fazladan, ek, ilave
sofia|n.|sofya
obsession|n.|takıntı, saplantı
responsibilities|n.|sorumluluklar
ridge|n.|sırt, bayır
intent|n.|maksat, niyet
axe|n.|balta
reckless|adj.|pervasız, umursamaz, kayıtsız
missiles|n.|balistik mermiler, antimisil füzeler, gudumlu roket
razor|v.|tıraş etmek, kesmek (ustura, jilet vb. ile), jilet
corners|n.|köşeler
frightening|adj.|korkutucu, korkulu
rains|n.|yağmurlar
mutant|n.|değişken, mutasyona uğramış gen, mutant
wally|n.|boş insan, aptal kişi, işe yaramaz kişi
whereas|conj.|oysaki, oysa, -diğine göre
heavenly|adj.|cennetlik, cennet gibi, cennetsel
promoted|adj.|terfi eden, terfi ettirilmiş
dang|n.|ateşli ve salgın bir hastalık, lanet, lanet olsun
maiden|n.|evlenmemiş genç kız, bekar, evlenmemiş kadın
comments|n.|açıklamalar, yorumlar, açıklayıcı bilgi
batteries|n.|piller
bark|v.|havlamak, havlama
congressman|n.|kongre üyesi
canyon|n.|vadi, kanyon, kenarları dik, derin vadi ya da koyak
casual|adj.|gündelik
rack|n.|raf
expectations|n.|beklentiler, bekleyiş, tahmin
flowing|n.|seyelan, akma, akış
adjust|v.|ayarlamak
decade|n.|10 yıl, on yıl, onlu grup
pine|n.|çam
tails|n.|frak, yazı, madeni bir paranın resimsiz yüzü
baxter|n.|iowa eyaletinde şehir, minnesota eyaletinde şehir, tennessee eyaletinde yerleşim yeri
wires|n.|teller
pigeon|n.|güvercin
finance|v.|finanse etmek, maliye, finans
respectable|adj.|saygıdeğer
demonstration|n.|ispat, gösteri
prank|v.|süslemek, giydirip kuşatmak, hava atmak
appointed|adj.|belirlenmiş, kararlaştırılmış, atanmış
treason|n.|hainlik, vatan hainliği, ihanet
views|n.|görünümler
violin|n.|keman
stir|v.|karıştırmak
lifestyle|n.|yaşam tarzı, yaşam stili, yaşam biçimi
realm|n.|krallık, alem, memleket
monty|n.|tam olarak, alabildiğine, bütünüyle
roosevelt|n.|minnesota eyaletinde şehir, oklahoma eyaletinde yerleşim yeri, new jersey eyaletinde yerleşim yeri
missy|n.|küçük hanım (hizmetçi tarafından)
fitting|n.|tertibat, yerleştirme, tesisat
tuna|n.|tonbalığı, ton balığı
tuck|v.|kıvrılmak, sıkıştırmak, kıstırmak
inspection|n.|denetleme, muayene, yoklama
nursing|n.|bakma, doğum, emzirme
poop|v.|boru çalmak, osurmak, çocuk dilinde kaka yapmak
cardinal|n.|kardinal, katolik başpapazı, parlak kırmızı
altar|n.|kurban kesme yeri, adak taşı, kurban kesilen taş
herman|n.|minnesota eyaletinde şehir, nebraska eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
carlo|n.|erkek ismi
tourist|n.|turist
conviction|n.|kanaat, haklı olma, inanç
jelly|n.|pelte, jöle
thrill|n.|heyecan
lounge|v.|yayılmak, tembellik etmek, uzanmak
cha|n.|tibet çayı, marketlerdeki para kasası açma sesi, bilmiyor musun?
zip|v.|süslemek, gayretli olmak, vızıldayarak geçmek
hogan|n.|bir tür kızılderili evi
dimension|n.|boyut
choke|v.|boğulmak, boğmak
backing|n.|yardım, destek
pains|n.|özen, itina, doğum sancıları
bodyguard|n.|fedai
rug|n.|kilim, halı
jaw|n.|çene
ants|expr.|filler tepişir karıncalar ezilir, huzursuz veya sabırsız olmak, endişeden kıvranmak
popcorn|n.|patlamış mısır
courtroom|n.|mahkeme salonu
reynolds|n.|georgia eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri, indiana eyaletinde yerleşim yeri
pointless|adj.|saçma, manasızlık, yararsız
documentary|adj.|belgesel
donor|n.|bağış yapan kimse
mortgage|n.|ipotek
tunnels|n.|tüneller
enforcement|n.|uygulama, yürürlük, infaz
demanding|n.|talep etme, zorlu, talepkar
cocks|v.|krallar gibi yaşamak, bir eli yağda bir eli balda olmak, deney muslukları
eliminated|adj.|elenmiş, sarhoş, kendinden geçmiş
rapidly|adv.|hızla, süratle
refer|v.|anmak, bahsetmek, kastetmek
shipment|n.|yük göndermesi, yük, taşıma
tasted|adj.|tadına bakılmış, tadılmış
fails|expr.|başka hiçbir şey işe yaramadığında, tüm çareler tükendiğinde, asla bozulmaz/durmaz
michel|n.|michel-banki türbini
rushed|adj.|acele edilmiş, aceleye gelmiş/getirilmiş
ordering|n.|sipariş, ısmarlama, buyurma
efficient|adj.|etkili
outrageous|adj.|acayip, şoke edici, çok fazla
gracious|adj.|zarif
slaughter|v.|katletmek, kıyım, kırım
marijuana|n.|esrar
monroe|n.|connecticut eyaletinde şehir, güney dakota eyaletinde yerleşim yeri, georgia eyaletinde şehir
pipes|n.|gayda
backed|adj.|arkası olan, arka çıkılmış, desteklenmiş
vest|n.|yelek
approached|v.|yanaşmak, yaklaşmak, yaklaşım
mechanic|n.|tamirci
arizona|n.|arizona, amerika'da eyalet, parlak bir yılan cinsi
legendary|adj.|efsanevi
delayed|adj.|rötarlı
resolve|v.|kesin karar vermek, azmetmek
relation|n.|ilişik, bağıntı, ilişki
amelia|n.|kadın ismi, ameli, kol veya bacağın doğuştan olmaması
mechanical|adj.|makineye ait, makineli, mekanik
fare|v.|başından geçmek, geçinmek, yola çıkmak
karma|n.|talih, karma, önceki yaşamın kaderi belirlediği inancı
jefferson|n.|batı virginia eyaletinde yerleşim yeri, güney dakota eyaletinde şehir, georgia eyaletinde şehir
chorus|n.|koro
nana|n.|nine, büyükanne, muz
extend|v.|sunmak (taziye/kutlama), genişletmek, uzatmak
info|n.|haber, bilgi
saddle|v.|eyer vurmak, semer vurmak, semer
pretended|adj.|yalandan, yapmacık, varsayılan
equals|n.|emsal
artificial|adj.|yapma, yapay, suni
accomplish|v.|başarıyla tamamlamak
burial|n.|gömme, defin
lynn|n.|indiana eyaletinde yerleşim yeri, massachusetts eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
detention|n.|engellenme, gözaltına alma, gecikme
vow|v.|yemin etmek, ant içmek, adak
bake|v.|kurutmak, kavurmak, pişmek
breakdown|n.|bozulma, arıza
delhi|n.|iowa eyaletinde şehir, louisiana eyaletinde yerleşim yeri, minnesota eyaletinde şehir
selected|adj.|seçilmiş, seçilen
lightly|adv.|hafiften, kolayca, kaygısızca
dealers|n.|bayiler
layer|n.|katman, kat, tabaka
gown|v.|cüppe giydirmek, biniş, sabahlık
courtney|n.|kadın veya erkek ismi, bir kadın ismi
incoming|n.|girme, yeni (hükümet/yıl), yeni başlayan
reid|n.|wisconsin eyaletinde yerleşim yeri
countryside|n.|kırsal kesim, kırsal bölgeler, sayfiye
cheaper|adj.|daha ucuz, ucuz
smelled|adj.|kokan
devon|n.|bir kadın ismi, ingiltere'de bölge
ducks|v.|para yemek, taş kaydırma oyunu, kolay av
lethal|adj.|öldürücü, ölümle ilgili, ölümcül
swan|n.|kuğu, kuğu (takımyıldızı), iowa eyaletinde şehir
attending|n.|devam etme, hazır bulunma, ilgilenen
moonlight|n.|ay ışığı
ropes|n.|usul, yol yordam, işin incelikleri
dispatch|v.|sevk etmek, göndermek, yollamak
notebook|n.|defter, not defteri
punched|adj.|delikli
identification|n.|kimlik saptama
contracts|n.|sözleşmeler, mukavelat
scattered|adj.|dağınık
trusting|n.|güvenme, güvenen, güvenilir
prayed|v.|dua etmek
volunteers|n.|gönüllüler
remembering|n.|hatırlama, anımsama, ansıma
adopt|v.|evlat edinmek, benimsemek
calvin|n.|kuzey dakota eyaletinde şehir, louisiana eyaletinde yerleşim yeri, oklahoma eyaletinde yerleşim yeri
worms|n.|kurtlar, nebraska eyaletinde yerleşim yeri
consideration|n.|düşünce, düşünme, değerlendirme
bandits|n.|haydutlar
moses|n.|musa, musa peygamber
zombies|n.|zombi, yaşayan ölü
non|adj.|olmayan, siz, non
transplant|v.|nakledilmek, başka yere dikmek, nakletmek
crackling|n.|çatırdama, çıtırtı, cazırtı
loneliness|n.|yalnızlık
epic|n.|destan
gladly|adv.|memnuniyetle
marcel|n.|derin saç dalgası
mon|n.|monlar, güneydoğu asya'da yaşayan bir halk, ay
frost|v.|dondurmak, ayaz, don
registration|n.|tescil, (kütüğe) kaydetme, kayıt
prophet|n.|peygamber
launched|adj.|lanse, açılışı yapılmış
constitution|n.|anayasa, bünye
roland|n.|iowa eyaletinde şehir, oklahoma eyaletinde yerleşim yeri, yerden havaya füze savunma sistemi
claude|n.|erkek ismi
sock|n.|çorap
dragons|n.|edebiyatta ejderhalar
buyer|n.|satın almacı, müşteri, alan
regulations|n.|yönetmelik
volcano|n.|yanardağ, volkan
accomplice|n.|suç ortağı
bounty|n.|cömertlik, ihsan, hediye
hotels|n.|oteller
favors|v.|iltifat etmek, ayrıcalık tanımak, şans cesur olandan yanadır
opinions|v.|iki arada bir derede kalmak, fikir alışverişi yapmak, kararsız kalmak
pressed|adj.|sıkıştırılmış, preste sıkıştırılmış, basılı
asylum|n.|barınak, sığınak, iltica
blunt|v.|köreltmek, kör (bıçak vb)
duel|n.|düello
niles|n.|illinois eyaletinde yerleşim yeri, michigan eyaletinde şehir, ohio eyaletinde şehir
consult|v.|başvurmak, danışmak
nevertheless|adv.|yine de
carnival|n.|karnaval
au|n.|altının simgesi, avustralya'nın internet alan adı
hah|interj.|hah!
paths|n.|yörünge
rides|expr.|kaplana binen inmekten korkar, sahalara döndü, pistlere döndü
tray|n.|tepsi
cynthia|n.|kadın ismi, (yunan mitolojisinde) av ve ay tanrıçası
te|n.|si, tellürün simgesi, teknesyimun simgesi
handcuffs|n.|kelepçe
shannon|n.|kadın ismi, şanon, irlanda'da yerleşim yeri
barrier|n.|set, bariyer
supposedly|adv.|sözümona, söylendiğine göre, varsayılarak
faggot|n.|demet, çalı çırpı, homoseksüel erkek
hunch|n.|önsezi
disposal|n.|imha etme, ortadan kaldırma
yacht|v.|yat ile yolculuk etmek, eğlence amaçlı küçük yelkenli, yat
stain|v.|lekelemek, leke
thoughtful|adj.|düşünceli
healed|adj.|iyileştirilmiş, iyileşmiş
syndrome|n.|belirgi, belirti, sendrom
hairy|adj.|tüylü, kıllı
kansas|n.|kansas, amerika'da eyalet, illinois eyaletinde yerleşim yeri
happiest|adj.|en mutlu
entertain|v.|eğlendirmek
ambush|v.|pusuya düşürmek, pusu
recommended|adj.|tavsiye edilmiş, tavsiye edilen, (yetkili kurum tarafından) önerilen
childish|adj.|çocuksu
meter|n.|sayaç, metre
gilbert|n.|bir erkek ismi, magnetomotif kuvvet birimi, gilbert
lease|v.|kiralamak
climbed|expr.|hayatımda hiç dağa tırmanmadım
nadia|n.|kadın ismi
unstable|adj.|istikrarsız, sabit olmayan, kararsız
exploded|adj.|patlayan, patlamış
apollo|n.|yakışıklı genç adam, united airlines'ın sahibi olduğu gds, apollo
rogers|n.|arkansas eyaletinde şehir, kuzey dakota eyaletinde şehir, minnesota eyaletinde şehir
politician|n.|politikacı, siyasetçi
rs|n.|rs-422 bağlantı noktası, rs-449 bağlantı noktası, rs-485 seçenekleri
awaits|v.|gözlemek, hazır olmak, beklemek
abraham|n.|ibrahim peygamber, hazreti ibrahim, delirmiş dilenci
evelyn|n.|kadın ismi, kadın veya erkek ismi
particles|n.|parçacıklar, taneler, zerrecikler
violation|n.|ihlal
lined|adj.|astarlı
amazed|adj.|hayrete düşürülmüş, şaşırmış, hayret etmiş
lure|v.|cezbetmek, yemlemek, çekmek
lyrics|n.|güfte, şarkı sözleri, söz
pod|v.|kabuklanmak (tohum), kabuk (bakla vb), koza
universal|adj.|üniversal, evrensel
hulk|n.|hantal, gemi enkazı, iri ve hantal kimse
drunken|adj.|sarhoş, leyla, içkici
continuing|adj.|devam ettiren, devam eden, süren
goals|n.|amaç
warming|n.|dayak atma, ısınma, ısıtma
dc|n.|doğru akım
chemicals|n.|ecza, kimyasallar, kimyasal madde
owl|n.|baykuş
compromised|adj.|tehlikeli, gizliliği ifşa edilmiş, gizliliği ihlal edilmiş
grounded|adj.|topraklanmış, çakılıp kalmış, karaya oturmuş
cane|n.|kamış
avenge|v.|öcünü almak, intikamını almak
dexter|adj.|şanslı, sağ, sağda olan
phantom|n.|şekil, tayf, fantom
notion|n.|düşünce, kavram
directors|n.|müdürler, yöneticiler
tease|v.|kızdırmak, alay ederek sataşmak, alay etmek
forensic|adj.|adli, münazaraya ait, mahkemeye ait
doe|n.|dişi karaca, dişi geyik, dişi tavşan
outcome|n.|netice, sonuç
slam|v.|ağır bir şekilde eleştirmek, yenmek, çarparak kapatmak (kapıyı/kapağı)
shattered|adj.|canı çıkmış, bitkin, çok yorgun
cheque|v.|çek keşide etmek, çek yazmak, çek
baked|adj.|fırınlanmış, pişmiş, pişirilmiş
sought|v.|çok rağbette olmak, beğenilmek, çok rağbet görmek
racket|n.|raket, şamata, curcuna
hammond|n.|illinois eyaletinde yerleşim yeri, indiana eyaletinde şehir, louisiana eyaletinde şehir
rider|n.|binici
exotic|adj.|egzotik
cory|n.|erkek ismi
extent|n.|boyut, kapsam, derece
eighth|adj.|sekizde bir, sekizinci, sekizinci sırada
stack|n.|yığın
wheat|n.|buğday
shipping|n.|nakliye, nakliyat
satisfy|v.|tatmin etmek
departure|n.|kalkış, ayrılış
finch|n.|ispinoz, saka
blocking|n.|tıkama, kapatma, engelleme
regiment|v.|alay oluşturmak, alay
kin|n.|akraba, hısım
surf|v.|sörf yapmak, kıyıya vuran köpüklü dalgalar, kıyıya çarpıp çatlayan dalgaların sesi
kilometers|expr.|buradan yüz kilometre uzakta, kilometre/saat, arz edilen koltuk kilometre
rises|v.|birisini dünyanın merkezine oturtmak, gözü (falancadan) başkasını görmemek, heyecanın doruğa ulaştığı an
frighten|v.|korkutmak
abused|n.|suistimal edilen kişi, suistimal edilmiş, hor kullanılmış
gerald|n.|missouri eyaletinde şehir
colours|n.|bayrak, forma, simgesel giysi (okul/takım)
hath|n.|have kelimesinin eski hali
marvin|n.|güney dakota eyaletinde yerleşim yeri, north carolina eyaletinde yerleşim yeri
texts|n.|metinler
spaghetti|n.|arapsaçı, makarna, spagetti
chester|n.|ingiltere'de bir şehir, çocuk tacizcisi (ceza evi argosu), batı virginia eyaletinde şehir
bosses|n.|çıkarılabilir kovanlı serbest baskılar, piston pin taşıyıcıları, piston pin mesnetleri
elephants|expr.|filler tepişir karıncalar ezilir, sarhoş, fillerin büyük kulakları vardır
snarling|n.|öfkeyle konuşma
contained|adj.|kapsama giren, kapsanan, içinde
laurie|n.|missouri eyaletinde yerleşim yeri
arab|n.|arap, arap atı, arabistanlı
bumped|v.|torpille gelmek, havadan konmak, bak kiminle karşılaştım
chili|n.|kırmızı biber, biber, çok acı kırmızı biber
yah|n.|new mexico eyaletinde yerleşim yeri
sustained|adj.|sürdürülebilir, uzun süreli, sönümsüz
abducted|adj.|alıkonmuş, kaçırılmış (çocuk vb), kaçırılmış
panicked|v.|panik olmak, panikledim, paniğe kapıldım
shallow|adj.|sığ
diving|n.|dalış, pike, dalma
harriet|n.|kadın ismi
generator|n.|jeneratör
federation|n.|ittifak, federasyon, federe devlet
arresting|n.|tutuklama, dikkat çekici, göze çarpan
techniques|n.|taktikler, prosedürler, yöntemler
feather|n.|kuş tüyü, tüy
printed|adj.|matbu, yazdırılmış, basılmış
untie|v.|çözmek
jupiter|n.|jüpiter
hay|n.|saman
stalking|n.|taciz etme, takip ederek tacizde bulunma
conrad|n.|iowa eyaletinde şehir, montana eyaletinde şehir
phony|n.|sahte şey, şarlatan, sahtekar
brett|n.|erkek ismi
whack|v.|çarpmak, fırlatmak, vurmak
scored|adj.|sıyrıklı yüzey, çentikli, çentiklenmiş
continent|n.|kıta
articles|n.|sözleşme, şirket sözleşmesi, maddeler
oxford|n.|oxford, alabama eyaletinde şehir, connecticut eyaletinde şehir
organize|v.|organize etmek, düzenlemek
sensors|n.|algılayıcılar
shanghai|v.|kaçırıp zorla gemide çalıştırmak, sarhoş edip gemiye zorla tayfa olarak almak, şanghay
wh|n.|(5)n soruları, 5n 1k(im) soruları, neden soruları
sniper|n.|gizlenerek ateş eden kimse, pusucu, pusu nişancısı
noisy|adj.|gürültücü, gürültülü
framed|adj.|iskeletli, çerçeveli
horizon|n.|ufuk
twilight|n.|alacakaranlık
reflection|n.|yansıma
masks|n.|maskeler
godfather|n.|manevi baba, vaftiz babası, mafya babası
merchant|n.|tüccar
wages|n.|gündelik, ücret, ecir
robe|v.|sarmak, giydirmek, örtmek
waist|n.|bel
stinking|n.|ayrılma, kötü kokma, taaffün
disappointment|n.|hüsran, hayal kırıklığı
venture|n.|girişim
voyage|n.|sefer, yolculuk
curry|v.|sopalamak, köri ile pişirmek, tımar etmek
ominous|adj.|uğursuz
sunlight|n.|gün, şavk, güneş ışığı
overseas|n.|denizlerin ötesinde bulunan ülke vb, ülke dışı, yurtdışı
casualties|n.|zayiat
mattress|n.|döşek, şilte
grill|v.|ızgara yapmak, ızgara
marketing|n.|pazarlama
accepting|n.|karşılama, kabul etme, kabul
occupation|n.|uğraş, işgal, meslek
deadline|n.|son teslim tarihi
freed|adj.|serbest bırakılmış
exhibit|v.|sergilemek, sergi
poems|n.|şiir başlıkları, divan, toplanmamış şiirler
echoing|n.|yansıma, yankılı, ekolu
shin|v.|öne fırlamak, tırmanmak, koşmak
compliments|n.|selamlar, saygılar, tebrikler
til|prep.|kadar, dek, değin
define|v.|tanımlamak
urine|n.|idrar, sidik
foreman|n.|ustabaşı
facial|adj.|yüz (ile ilgili)
combined|adj.|karma, birleşik
probation|n.|şartlı tahliye
reject|v.|geri çevirmek, reddetmek
catches|n.|kilit mandalları
dances|n.|danslar
gemma|n.|tomurcuk, gemma, yaprak tomurcuğu
pinch|n.|tutam
ingredients|n.|malzeme, harç, içindeki malzemeler
ra|n.|radyumun simgesi
hurricane|n.|kasırga
chatting|n.|söyleşi, sohbet
mini|n.|mini etek, kısa, mini
heel|n.|topuk
adding|n.|ekleme
bandit|n.|eşkıya, haydut
destined|adj.|kaderinde var olan, alnında yazılı, alnında yazan
limo|n.|limo
spa|n.|ılıca, içmeler, kaplıca
graves|n.|mezarlar
turkish|n.|türkçe, türk
listed|adj.|listelenmiş, kaydedilmiş, borsada kote olan
corpses|n.|cesetler
evacuate|v.|tahliye etmek
publish|v.|yayınlamak, yayımlamak
judith|n.|kadın ismi
banned|adj.|yasaklı, yasaklanmış, kaçak
snaps|n.|pirinç malzemeden yapılmış sarı çıt çıt
cheeks|n.|mengene kıskacı, yanaklar
predict|v.|öngörmek
ohio|n.|amerika'da eyalet, illinois eyaletinde yerleşim yeri, new york eyaletinde yerleşim yeri
holland|n.|hollanda
confront|v.|yüzleştirmek
utterly|adv.|tümüyle, tamamen, düpedüz
pilots|n.|türk jet pilotları, hava yolu nakil pilot lisansı, ticari pilot lisansı
jonah|n.|yunus
ironic|adj.|alaylı, ironik
improved|adj.|düzelmiş, gelişmiş, ilerlemiş
popping|n.|çiçekbozuğu, kireç kanseri, çiçeklenme
mills|n.|wyoming eyaletinde yerleşim yeri
farther|adj.|öteki, daha ileri, ilerdeki
delivering|n.|teslim etme
skipper|v.|kaptanlık yapmak, menajer, süvari
flattered|adj.|pohpohlanan, pohpohlanmış, gururu okşanmış
coconut|n.|baş, hindistancevizi, hindistan cevizi
acknowledge|v.|kabullenmek, kabul etmek, doğruluğunu kabul etmek
shuts||bir kapı kapanır bir kapı açılır, bir kapı kapanır bir diğeri açılır
sweden|n.|isveç, maine eyaletinde yerleşim yeri, new york eyaletinde yerleşim yeri
hooray|interj.|yaşasın, oley, üst sınıftan genç erkek
sip|v.|yudumlamak, yudum
blessings|n.|iyi dilekler, nimetler
grocery|n.|bakkaliye, market, bakkal dükkanı
terminal|n.|terminal
parks|n.|louisiana eyaletinde yerleşim yeri
meaningless|adj.|manasız, anlamsız
awards|n.|ödüller
fade|v.|karartmak, soldurmak, rengi solmak
hiring|n.|kira, kiralama, işe alım
burton|n.|edevat, palanga, erkek ismi
fees|n.|harç
wretched|adj.|acınası, sefil, acınacak durumda olan
krishna|n.|hindu tanrısı vishnu'nun vücut bulması
thoroughly|adv.|etraflıca, hakkıyla, layıkıyla
exhibition|n.|sergi
spends|n.|harçlık
denver|n.|iowa eyaletinde şehir, indiana eyaletinde yerleşim yeri, kolorado eyaletinde şehir
winners|n.|kazananlar
doris|n.|doris, kadın ismi, okeanos ile tethys'in kızı
luther|n.|iowa eyaletinde şehir, oklahoma eyaletinde yerleşim yeri
disappearance|n.|gözden kaybolma
madrid|v.|ispanya'nın başkenti, madrid, iowa eyaletinde şehir
supported|adj.|destekli, desteklenmiş, desteklenen
advised|adj.|tedbirli, tavsiye edilmiş, iyice düşünülmüş
regina|n.|kraliçe, kadın ismi, new mexico eyaletinde yerleşim yeri
supermarket|n.|süpermarket, market
hereby|adv.|burada, bu vesile ile, bundan dolayı
pier|n.|iskele
shorter|adj.|daha kısa, kısa, alabama eyaletinde şehir
betrayal|n.|ihanet
philadelphia|n.|pennsylvania'nın bir şehri, filedelfiya, mississippi eyaletinde şehir
christians|n.|hristiyanlar
psychology|n.|ruh bilimi, psikoloji
danielle|n.|kadın ismi
trent|n.|ingiltere'de bir nehir, kanada'da bir nehir, abd'de bir nehir
keeper|n.|bakıcı, bekçi, sorumlu
detroit|n.|alabama eyaletinde şehir, illinois eyaletinde yerleşim yeri, maine eyaletinde yerleşim yeri
canadian|adj.|kanada
su|n.|paz, pz, pa
associates|n.|dostlar, şüreka
gerry|n.|yaşlı, bunak, new york eyaletinde yerleşim yeri
restless|adj.|tez canlı, uykusuz (gece), yerinde duramayan
collector|n.|toplaç, koleksiyoncu, yardım toplayan kimse
marvellous|adj.|fevkalade, harikulade
physician|n.|tıp adamı, hekim, tabip
exposure|n.|teşhir, maruz bırakma, poz
grudge|n.|garez, hınç, kin
lid|n.|kapak
followers|n.|koşuntu, şüreka, takipçiler
glow|v.|korlaşmak, parıltı
submarine|n.|denizaltı
towns|n.|kasabalar, ilçeler
pawn|n.|piyon
edith|n.|kadın ismi, georgia eyaletinde şehir
includes|expr.|içerir
lu|n.|lu, tayland ve çin’de yaşayan etnik bir grup, vietnam
proposition|v.|teklif etmek, uygunsuz teklifte bulunmak, cümle
joker|n.|şakacı kimse, şakacı, latifeci
spilled|adj.|dökülmüş
opposition|n.|aykırılık, muhalefet, karşı koyma
haley|n.|kadın ismi
hose|n.|hortum
partnership|n.|ortaklık
usa|n.|amerika birleşik devletleri, abd
breathes|v.|soluk almak, nefes almak, solumak
whoops|expr.|ay!, ay
astronaut|n.|uzaycı, uzay adamı, uzayadamı
porch|n.|portik, sundurma veranda, giriş (kapı önündeki)
leonardo|n.|leonardo program koordinatörlüğü
responding|n.|yanıtlama, cevap verme, yanıt veriyor
wishing|v.|dilekte bulunmak, dileme, isteme
boil|v.|haşlamak, kaynamak, çıban
kneel|v.|diz çökmek
tammy|n.|bezli elek, kadın ismi, elek bezi ile süzmek
clumsy|adj.|sakar, beceriksiz
rapid|adj.|ani, hızlı
stevens|expr.|berabere, eşit, johnson-stevens hastalığı
invested|adj.|yatırılmış, bağlanmış
janice|n.|kadın ismi
roller|n.|silindir
thai|n.|tay dili, taylandlı, tai dili
justify|v.|savunmak, suçsuzluğunu kanıtlamak, hak vermek
garlic|n.|sarımsak, sarımsaklı
yelled|v.|bağırmak, bağırma
simone|n.|kadın ismi
ammunition|n.|koz, mühimmat, cephane
sushi|n.|suşi
shaft|n.|şaft, mil
definition|n.|tanım
gardens|n.|bahçeler
chandler|n.|depo, antrepo, mum yapımcısı
ne|n.|neonun simgesi
notify|v.|bildirmek
brady|n.|erkek ismi, bradi, nebraska eyaletinde yerleşim yeri
beasts|n.|ormanlar kralı, aslan, yük hayvanı
setup|n.|kurma, kurulum
greed|n.|hırs, açgözlülük
dared|adj.|cesaretli
unlucky|adj.|şanssız, talihsiz
classroom|n.|sınıf
treaty|n.|antlaşma
hike|v.|yürüyüşe çıkmak, yükseltmek (fiyatı), kaldırmak
dagger|n.|hançer
spine|n.|omurga
detect|v.|keşfetmek, sezmek, belirlemek
chow|v.|yemek, nevale, siyah renkli bir köpek
des|n.|dez
teenagers|n.|ergenler
handwriting|n.|hat yazısı, el yazısı, elyazısı
mock|v.|alay etmek, alay
challenging|n.|dürtücü, zorlu, meydan okuma
salon|n.|misafir odası, galeri, dükkan
virtue|n.|fazilet, erdem, meziyet
lawsuit|n.|dava
shelly|adj.|kabuklu, minnesota eyaletinde şehir
clap|v.|alkışlamak, el çırpmak
mustache|n.|bıyık
offence|v.|darılmak, incitme, saldırı
med|n.|kızartıcı en az doz, orta
sultan|n.|sultan, padişah
attraction|n.|çekicilik, cazibe
franco|n.|franko, parasız, ücretsiz
courts|n.|mahkemeler
fortress|n.|kale, hisar
peel|v.|soymak
petrol|n.|petrol, benzin
disappears|v.|ortadan kaybolmak, yok olmak, gözden kaybolmak
asset|n.|varlık
warp|v.|çarpıtmak, doğru yoldan sapmak, yamultmak
workshop|n.|çalıştay, seminer (üniversite dışında yapılan), zanaatçıya ait atölye
traps|n.|vurmalı çalgılar, pılı pırtı, eşya
appreciated|adj.|değeri anlaşılmış, takdir edilen, makbule geçen
condemned|adj.|kınanan, hükümlü, ayıplanan
garrett|n.|indiana eyaletinde şehir, illinois eyaletinde yerleşim yeri, pensilvanya eyaletinde yerleşim yeri
muttering|n.|homurdanma, mırıltı, mırıldanma
shook|n.|fıçı kerestesi, fıçı malzemesi, sallanmış
naval|n.|denizcilik, bahri, deniz kuvvetlerine ait
egyptian|n.|mısırlı, mısır'a özgü, mısır'a ait
expand|v.|yayılmak, genişlemek, genişletmek
sunrise|n.|güneş doğuşu
swine|n.|domuz
jingle|v.|şıkırdatmak, şıngırdamak, çıngırdatmak
lordship|n.|egemenlik, üstünlük, lordluk sıfatı
peach|n.|şeftali
filmed|adj.|filmi yapılmış, filme alınmış
pakistan|n.|pakistan
selection|n.|seçme
squeaking|adj.|gıcırdayan, cırlayan
condom|n.|kondom, kaput, prezervatif
sadie|n.|kadın ismi
barbie|n.|barbie, barbekü, (avustralya'da) barbekü
alongside|adv.|yanına, yanı sıra, yan yana
risking|n.|risk, tehlikeye atma
democratic|adj.|demokratik partiye ait, demokrat, demokratik
nerd|n.|inek öğrenci, gıcık, kıl
dancers|n.|dansçılar, merdiven
crook|n.|sahtekar
mack|n.|yağmurluk, kolorado eyaletinde şehir
grasp|v.|sıkı sıkı tutmak, kavramak, kavrama
translate|v.|çevirmek, tercüme etmek
behaving|v.|akıllanmak, yol, bu şekilde davranmaya devam edemezsin
humiliating|n.|utandırma, utandıran, alçaltıcı
quarrel|v.|dalaşmak, tartışmak, çekişmek
lively|adj.|canlı
fury|n.|hiddet
policemen|n.|polis, polisler
elders|n.|yaşlılar, büyükler
battlefield|n.|harp meydanı, muharebe meydanı, cenk meydanı
sticky|adj.|yapış yapış, yapışkan
glen|n.|dere, küçük vadi, vadi
primitive|adj.|ilkel
reign|v.|hüküm sürmek, saltanat
eugene|n.|missouri eyaletinde yerleşim yeri
stash|n.|zula
evolved|adj.|zaman içinde gelişmiş, evrimleşmiş
shifts|v.|keşikleşmek, vardiya olarak çalışmak, vardiyalı çalışmak
unlock|v.|kilidini açmak
devices|n.|aygıtlar
peculiar|n.|özel eşya, özel mülk, ayrıcalık
talents|v.|yeteneklerini belli etmemek, içindeki cevheri göstermemek, yeteneklerini boşa harcamak
anita|n.|iowa eyaletinde şehir
foreigners|n.|yabancılar
snacks|n.|kuru yemiş, mezeler, atıştırmalık aperitif
mint|n.|nane
pissing|v.|sidik yarışına girmek, sidik yarışı, akıntıya karşı kulaç atmak
fuse|v.|eritmek, fünye, sigorta
towers|n.|saat kuleleri, dünya ticaret merkezi, terör saldırısında yok edilen ikiz kuleler
freezer|n.|buzluk
inheritance|n.|veraset, miras
villages|n.|köyler
jewel|n.|mücevher
bollocks|n.|taşak, hayalar, yumurtalıklar
shells|n.|deniz kabukları
swept|adj.|süpürülmüş, süprülmüş
recognition|n.|tanıma
shovel|n.|kürek
artistic|adj.|sanatçı ruhuna sahip, artistik, sanatsal yönü olan
qualities|n.|evsaf, nitelikler, özellikler
ferry|v.|işlemek, feribotla taşımak, karşı sahile taşımak
misunderstood|adj.|yanlış anlaşılan
portal|n.|kapı, taçkapı, ana kapı
atomic|adj.|atom, atomal, atomsal
javier|n.|erkek ismi
ava|n.|ava, parauk, va
claiming|adj.|müddei, isteme, talep etme
examined|adj.|incelenmiş, denetlenmiş, muayeneden geçmiş
defensive|adj.|savunan, savunmayla ilgili, savunma
kenneth|n.|minnesota eyaletinde şehir
sensation|n.|sansasyon, his
increasing|adj.|çoğalan, artan
fugitive|n.|firari, kaçak
urban|adj.|şehirsel, kentsel
visions|n.|edebiyatta önseziler
bathing|n.|banyo yapma, yıkanma, deniz banyosu
gregory|n.|güney dakota eyaletinde şehir, boyun
delight|n.|haz
genes|n.|genler
boundaries|n.|sınırlar, ülke sınırları
caution|n.|ihtiyat, dikkat, temkin
ellis|n.|güney dakota eyaletinde yerleşim yeri, kansas eyaletinde şehir
strangled|adj.|boğulmuş, boğuk
thorough|adj.|derin, bütün, esaslı iş yapan (kimse)
ike|n.|teksas eyaletinde şehir
bites|n.|bites
nude|n.|çıplak insan vücudu, ten rengi, çıplak resmi
tidy|adj.|düzenli, derli toplu
patricia|n.|kadın ismi
tate|n.|georgia eyaletinde şehir
obligation|n.|yükümlülük, mecburiyet, zorunluluk
clearance|n.|açıklık yer, geminin limanı terketme izni, sayışma
reserved|adj.|rezerve
nasa|n.|nasa dünya dışı yaşam açıklaması, abd ulusal havacılık uzay dairesi, ulusal havacılık ve uzay idaresi (nasa)
spock|n.|mr. spak, sivri kulak
marion|n.|alabama eyaletinde şehir, arkansas eyaletinde şehir, güney carolina eyaletinde şehir
reflect|v.|aksettirmek, yansıtmak
jammed|adj.|sıkışık
sleeve|n.|elbise kolu, kol
classy|adj.|klas
fag|v.|didinmek, yorulmak, bitmek
angelo|n.|erkek ismi, wisconsin eyaletinde yerleşim yeri
bradley|n.|erkek ismi, güney dakota eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri
bananas|n.|çılgın, deli, kaçık
saints|n.|azizler
longest|adj.|en uzun
confirmation|n.|onay, teyit, tasdik
mushrooms|v.|mantar toplamak, sihirli mantar, mantar gibi bitmek
cyrus|n.|minnesota eyaletinde şehir
finals|n.|final sınavı, final
millionaire|n.|milyoner
adoption|n.|benimseme, evlat edinme
wired|adj.|telli, gerilmiş, gergin
comet|n.|kuyrukluyıldız, kuyruklu yıldız
handing|n.|teslim etme, teslim, gönderme
cheerful|adj.|neşeli
deb|n.|borç, sosyeteye ilk kez davet edilen kız
acceptable|adj.|kabul edilir, kabul edilebilir, makbul
realistic|n.|gerçek hayata benzeyen, gerçekçi, realist
waits|n.|noel bandosu, yarın asla beklemez, tekkeyi bekleyen çorbayı içer
sufficient|adj.|kafi, yeterli, elverişli
cosmic|adj.|evrensel
intellectual|adj.|düşünsel, entelektüel
vomit|v.|kusmak, istifrağ etmek, kusma
warmth|n.|sıcaklık, ısı
magnum|n.|içki şişesi, büyük şişe
associated|adj.|birleşmiş, bağlantılı, ilişkili
alas|interj.|yazık, eyvah, tüh
engineers|n.|mühendisler
offend|v.|rencide etmek
overwhelming|adj.|ezici
sherry|n.|sherry, bir çeşit beyaz ispanyol şarabı, şeri
inherited|adj.|irsi, miras kalan, miras
antoine|n.|erkek ismi
whooping|n.|çığlık atma, bağırma
scars|n.|valf üzerindeki yara izleri
sheldon|n.|illinois eyaletinde yerleşim yeri, iowa eyaletinde şehir, kuzey dakota eyaletinde şehir
purposes|v.|farklı amaçlara hizmet etmek, aynı amaca hizmet etmemek, amacı dışında kullanmak
robbing|n.|soygun yapma
refrigerator|n.|buzdolabı, soğutucu
instructor|n.|eğitmen
moms|n.|anneler
overtime|n.|fazla mesai için ödenen ücret, fazla mesai, mesai
percy|n.|illinois eyaletinde yerleşim yeri, penis
laurel|n.|defne
females|n.|kadınlar
sacrifices|v.|fedakarlıktan kaçınmamak, kurban bayramı, fedakarlığın denkleştirilmesi ilkesi
representing|adv.|izafeten
drift|v.|şaşırmak, tıkanmak, birikmek
ruthless|adj.|gaddar, merhametsiz, zalim
po|n.|lazımlık, polonyumun simgesi, polonyum
arguments|n.|parametreler
crappy|adj.|berbat, rezil, bombok
musicians|n.|çalgıcılar, müzisyenler
sidney|n.|indiana eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri, iowa eyaletinde şehir
depressing|adj.|bunaltıcı
lasts|expr.|beşikte öğrenilen, mezara kadar sürer, daha uzun gider, şansın varken keyfini çıkar
doom|v.|mahkum etmek, hüküm vermek, kaderi kötü olmak
milo|n.|iowa eyaletinde şehir, maine eyaletinde yerleşim yeri, missouri eyaletinde yerleşim yeri
cant|v.|bükülmek, argolu konuşmak, yan yatırmak
backpack|n.|sırt çantası
aisle|n.|koridor
insulting|adj.|küstah, küçük düşürücü, onur kırıcı
edition|n.|yayım, nüsha, edisyon
losses|n.|zayiat, zararlar, yenilgi
sh|n.|montaj kiti tamponu ısıtıcısı, sh yağ sınıfı, sh-dalgası
preacher|n.|vaiz
schmidt|n.|bki pulse jet, schmidt teleskobu, schmidt gökgözleri
swinging|n.|sallama, salınım, sallanma
managing|n.|yönetme, idare etme, idari
sinking|n.|batma, batırma, batış
lacey|n.|kadın ismi, dantel gibi, dantelli
casting|n.|dökme, rol dağıtımı, döküm
trials|n.|konşimentoya konan bir şerh, muayene
demonstrate|v.|ispat etmek, göstermek, kanıtlamak
diseases|n.|hastalıklar
beggar|n.|dilenci
amounts|n.|meblağ
traced|v.|izi sürülmek, anne tarafından akrabalık, baba tarafından akrabalık
raven|n.|kuzgun
activate|v.|çalıştırmak, etkinleştirmek, etkin kılmak
slapped|v.|tokat yemek, beşinci hastalık, üzgün/mutsuz surat
heroic|adj.|kahramanca
roar|v.|kükremek, gürlemek
queer|v.|mahvetmek, bozmak, sahte para
uk|n.|ingiltere, büyük britanya, birleşik krallık
matching|n.|karşılaştırma, eşleme, eşleştirme
trump|n.|koz
resignation|n.|istifa
newton|n.|newton, nevton, newton (simgesi n)
sincerely|adv.|samimi olarak, candan, içtenlikle
stacy|n.|minnesota eyaletinde şehir
saul|n.|israil imparatorluğu'nun ilk kralı
madman|n.|deli
jenkins|n.|kentucky eyaletinde şehir, minnesota eyaletinde şehir
poke|v.|dürtmek
spicy|adj.|baharatlı
swap|n.|değiş tokuş, takas
programs|n.|programlar
sheer|adv.|düpedüz, büsbütün
spaceship|n.|uzaygemisi, uzay gemisi, uzay aracı
blink|v.|yanıp sönmek, göz kırpmak, kırpıştırmak
steer|v.|yönlendirmek
males|n.|erkek
injection|n.|püskürtme, enjekte, zerk
ant|n.|karınca
reform|v.|reform yapmak
mother-in-law|n.|kayınvalide, kaynana
properties|n.|sahne elbiseleri, sahne eşyaları, özellikler
virtually|adv.|sanal olarak, sanal, neredeyse
camps|n.|kamplar
tapping|n.|hafifçe vurma
tequila|n.|tekila, damıtık meksika içkisi
inquiry|n.|sorgu
fainted|adj.|baygın, bayılmış
formation|n.|oluşum
shields|n.|wisconsin eyaletinde yerleşim yeri
escaping|n.|kurtulma, kaçma
unemployed|adj.|işsiz
murdering|v.|kocasını öldürmekle suçlanmak, karısını öldürmekle suçlanmak, psikopat katil
interviewed|v.|görüşmek, görüşme, mülakat
striking|adj.|çarpıcı
vows|v.|niyet tutmak, evlenmek, sözlenmek
donovan|n.|illinois eyaletinde yerleşim yeri
antique|adj.|antika, antik
sherlock|n.|özel dedektif
puke|v.|kusmak
hysterical|adj.|isterik, histerik, kendini kaybetmiş
taller|adj.|uzun, daha uzun
employment|n.|iş verme, istihdam, işe alma
thats|pron.|şu, o
agrees|n.|herkesin kabul ettiği ortak nokta
dodge|v.|hileyle atlatmak, kaçamak yapmak, kaçınmak
unite|v.|birleşmek, birleştirmek
mumbling|n.|mırıldanma, mırıltı, mırıldanan
rabbits|n.|tavşanlar
repeating|n.|tekrarlama, mükerrer, yinelenen
mule|n.|katır
locals|n.|yerel halk, bölge halkı, yöre halkı
neighbourhood|n.|mahalle
hayes|n.|ingiltere'de yerleşim yeri
bats|n.|üşütük, deli, kaçık
beliefs|v.|dini inançları değiştirmek, yanlış inançlar, dini inanışlar
spared|expr.|hiçbir masraftan kaçınılmadı, geniş aralıklı petekler
vegetable|n.|sebze, bitkisel
bunker|v.|yakıt almak, depo, oda arkadaşı
channels|n.|resmi iletişim yolları, kanallar, emir ve komuta kanalı
phenomenon|n.|algılanabilen şey, olağanüstülük, olgu
hips|v.|kalçalarını sallamak, sıkı kalçalar, sıkı kalça
grayson|n.|georgia eyaletinde şehir, kentucky eyaletinde şehir, louisiana eyaletinde yerleşim yeri
expelled|adj.|kovulmuş, kovulan
camille|n.|kadın veya erkek ismi
languages|n.|diller, bildiği diller
iv|n.|dört, damar yoluyla enjeksiyon
premises|n.|mülk
pronounce|v.|telaffuz etmek
ng|n.|nijerya:ng
bridges|n.|köprüler
ape|v.|taklit etmek, öykünmek, taklidini yapmak
bruises|n.|morarmalar
convict|v.|suçlu bulmak, hükümlü, mahkum
prettier|adj.|sevimli, daha sevimli
elections|n.|seçimler
annoyed|adj.|sinirli, sinirlendirilmiş, kızgın
hometown|n.|memleket
earrings|n.|küpe, sallantılı küpe, damla küpe
discreet|adj.|sağduyulu, dilini tutan
poured|adj.|dökme
morphine|n.|morfin
henderson|n.|arkansas eyaletinde şehir, batı virginia eyaletinde yerleşim yeri, iowa eyaletinde şehir
jun|n.|haz
narrating|n.|öyküleme
rookie|n.|acemi er, acemi asker, acemi çaylak
peanuts|v.|fıstığa alerjisi olmak, yer fıstığına alerjisi olmak, plastik köpüğü kırıntıları
camel|n.|deve
abe|n.|beş dolarlık banknot, ereksiyon, seksi kadın
chewing|n.|(besin) çiğneme, çiğneyici, çiğneme
imagining|n.|düşleme
runner|n.|haberci, yarış atı, yarışçı
tomatoes|v.|tepsiye domatesleri döşemek, imambayıldı, bulgur pilavı
sponsor|v.|kefil olmak, vaftiz babalığı yapmak (çocuğa), finanse etmek
fulfilled|adj.|yerine getirilmiş
probe|v.|soru sorarak sondaj yapmak, sondaj yapmak, irdelemek
karate|n.|karate
grease|n.|makine yağı
dinosaurs|n.|dinozorlar
rebellion|n.|başkaldırı, isyan, ayaklanma
lone|adj.|bekar, tenha, ıssız
nan|n.|beyaz undan yapılan bir tür tandır ekmeği, büyükanne, nine
underestimate|v.|hafife almak, azımsamak, küçümsemek
acres|n.|geniş alan, arazi, arsa
carlton|n.|erkek ismi, ingiltere'nin kuzeyinde yerleşim yeri, alabama eyaletinde şehir
hacked|adj.|heklenmiş
barber|n.|berber
mining|n.|maden kazma, çıkarma (maden vb), kendinden çok emin
aged|adj.|yaşlı
designs|v.|gözü olmak, -de gözü olmak, namusuna göz dikmek
preferred|adj.|tercih edilmiş, öncelikli, tercihli
onions|v.|kasaptaki ete soğan doğramamak, soğanları pembeleşinceye kadar kavurmak, soğanları pembeleşinceye kadar kızartmak
stray|adj.|başıboş
void|adj.|geçersiz, hükümsüz
sixteen|n.|onaltı, XVI, on altı sayısı
slower|adj.|yavaş, daha yavaş
hannibal|n.|missouri eyaletinde şehir, new york eyaletinde yerleşim yeri
sabotage|v.|sabote etmek, baltalamak, sabotaj yapmak
rabbi|n.|haham, musevi din lideri, yahudi din lideri
concerning|prep.|ilişkin
dixon|n.|iowa eyaletinde şehir, illinois eyaletinde şehir, kaliforniya eyaletinde şehir
holt|n.|yuva, georgia eyaletinde şehir, ingiltere'de yerleşim yeri
noted|adj.|dikkate alınmış, not alınmış, ünlü
peterson|n.|alabama eyaletinde şehir, iowa eyaletinde şehir, minnesota eyaletinde şehir
dental|adj.|diş
squirrel|n.|sincap
committing|n.|teslim etme
werewolf|n.|kurt adam
slipping|n.|kayma, gerileme, düşüş
matthews|n.|georgia eyaletinde şehir, indiana eyaletinde yerleşim yeri, missouri eyaletinde şehir
explosions|n.|eşzamanlı patlamalar, güneş patlamaları, barışçıl nükleer denemeler antlaşması
russ|n.|rus, rusça
whitney|n.|kadın ismi, nevada eyaletinde şehir, nebraska eyaletinde yerleşim yeri
ignoring|n.|inkar, ihmal etme, dikkate almama
infinite|adj.|sonsuz
cavalry|n.|süvari
lam|v.|saklanmak, tüymek, kaçmak
bomber|n.|bombacı
ruling|n.|çizgi (cetvelle), cetvelle çizme, yönetim
boiling|n.|kaynama
needles|n.|kaliforniya eyaletinde şehir
semester|n.|sömestr
irrelevant|adj.|konu dışı, ilgisiz, alakasız
savior|n.|kurtarıcı
veil|v.|peçe ile örtmek, peçe
tramp|v.|serserice dolaşmak, yürümek, çiğnemek
deepest|adj.|en derin
perfection|n.|mükemmeliyet, mükemmellik
shutting|n.|kapak, kapama
iii|n.|üç
tiffany|n.|kadın ismi, bir kadın ismi, narin
mentor|v.|akıl hocalığı yapmak, danışmanlık yapmak, danışman
branches|n.|füru, şubeler, dallar
enthusiasm|n.|heves, coşkunluk, coşku
arena|n.|arena
listens|v.|dinlemek
hardware|n.|donanım
greatly|adv.|çok, adamakıllı, fazlasıyla
battalion|n.|tabur
moustache|n.|bıyık
irresponsible|adj.|sorumsuz
audio|adj.|ses
ga|n.|galyumun simgesi
initiative|n.|girişkenlik, girişim
sweaty|adj.|terli, terleten
noel|n.|noel şarkısı, missouri eyaletinde şehir
requests|n.|talepler, istekler
distraction|n.|dikkatin dağılması
parrot|n.|papağan
steed|n.|at, küheylan
entertaining|adj.|eğlendirici, eğlenceli
whipped|adj.|kırbaç yemiş, yenilmiş, mağlup
proving|n.|deneme, ispatlama, ispat
assaulted|adj.|saldırılmış
piggy|n.|domuzcuk, minik domuz, yavru domuz
pause|v.|duraklamak, ara vermek, durma
surviving|n.|hayatta kalma, geride kalan, kalan
funding|n.|fonlama, fon bulma, finansman sağlama
dinosaur|n.|dinozor
acquaintance|n.|tanışıklık, tanıdık
bedtime|n.|uyku zamanı, yatma zamanı, yatak vakti
rail|v.|ray döşemek, parmaklıkla çevirmek, parmaklık
rooster|n.|horoz, çanak, küfe
cowards|expr.|korkunun ecele faydası yoktur, vicdan hepimizi korkak yapar, korkaklar bin defa ölür
hastings|n.|florida eyaletinde yerleşim yeri, ingiltere'de yerleşim yeri, iowa eyaletinde şehir
container|n.|konteyner, kap, saklama kabı
secured|adj.|sağlam, güven altına alınmış, teminatlı
tossed|adj.|yıkık dökük, (fırtına yüzünden) harabeye dönmüş, soslanmış salata
stripper|n.|striptizci, verniği ve boyayı çıkaran madde, soyucu
steele|n.|alabama eyaletinde şehir, kuzey dakota eyaletinde şehir, missouri eyaletinde şehir
waving|n.|dalgalanma
clamoring|n.|yaygara, feryat
banker|n.|banker
bacteria|n.|bakteri
indicates|expr.|gösteriyor ki, isminden de anlaşılacağı gibi
assassination|n.|suikast
starring|adj.|katılanlar
drawings|n.|gelir, çekiliş, hasılat
cupboard|n.|dolap
sanctuary|n.|sığınak, ibadethane
surgical|adj.|cerrahi
pairs|v.|çiftler halinde gitmek, ikişerli olarak gitmek, çifter çifter gitmek
purely|adv.|sırf
temptation|n.|cezbedicilik, şeytana uyma, birinin ayartılmasına çalışılma
elderly|adj.|yaşlı, kıdemli
vibe|n.|belirli bir his, hareket/davranış, ortam
profound|adj.|engin
gong|v.|(polis) korna çalarak arabayı durdurmak, çan sesi, gonk
transformed|adj.|dönüştürülmüş
crop|n.|mahsul, ekin
detailed|adj.|ayrıntılı, detaylı
scrap|v.|ıskartaya çıkarmak, hurda
abigail|n.|kadın ismi, hizmetçi kadın, hizmetçi
careless|adj.|umursamaz, ilgisiz, aldırışsız
dove|n.|kumru, güvercin
sloppy|adj.|çapaçul, dağınık, yarımyamalak
atlanta|n.|atlanta, georgia eyaletinde şehir, indiana eyaletinde yerleşim yeri
hideous|adj.|iğrenç
lizard|n.|kertenkele
separation|n.|ayırma, ayrılma, ayrılık
intern|n.|stajyer
tab|v.|ödemek, işaret koymak, etiketle işaretlemek
psych|n.|ruh, psik
ranks|n.|birlikte sınıflandırılan kişiler, birlikte gruplandırılan kişiler, numaralar
parish|n.|papazın dini bölgesi, papaz idaresindeki mıntıka, papaz
booty|n.|ganimet
peasant|n.|köylü
squeal|v.|cıyaklamak, cırlamak, cırlama
comb|v.|taramak, tarak
bash|v.|sertçe vurmak, sert vuruş
restored|adj.|restore, iade edilmiş
platoon|n.|müfreze
junkie|n.|keş, eroinman, esrarkeş
involves|v.|kelleyi koltuğa almak
rupert|n.|batı virginia eyaletinde yerleşim yeri, idaho eyaletinde şehir, vermont eyaletinde yerleşim yeri
norm|n.|kaide, standart, düstur
carrier|n.|taşıyıcı
fatty|adj.|yağlı
difficulties|n.|müşkülat, güçlükler, zorluklar
producers|n.|üreticiler
superb|adj.|harikulade
tha|expr.|ha siktir!, naber/ne var ne yok?
candidates|n.|adaylar
summoned|v.|mahkemeye çağrılmak
refuge|n.|refüj, sığınak, iltica
righteous|adj.|haklı, doğrucu, erdemli
carolina|n.|porto riko'nun kuzeydoğusunda şehir
onion|n.|soğan
pickup|n.|pikap
spells|n.|ağlama nöbetleri, ani baş dönmesi, apne nöbetleri
wesley|n.|iowa eyaletinde şehir, maine eyaletinde yerleşim yeri
carrington|n.|kuzey dakota eyaletinde şehir
armies|n.|ordular
seasons|n.|mevsimler
billie|n.|kağıt para, papel, mangır
specialty|n.|spesiyalite (lokantada), özel anlaşma, ihtisas
thirst|v.|susamak, susuzluk
select|v.|seçmek
rendezvous|n.|buluşma yeri, randevu, buluşma
smiled|expr.|talih yüzüme güldü
colorado|n.|amerika'da eyalet
visa|n.|vize
spice|n.|baharat
caller|n.|ziyaretçi, misafir, telefon eden kimse
foods|v.|aşermek, çeşitli yemekler hazırlamak, organik besinler yemek
rational|adj.|rasyonel
scottish|n.|iskoç, iskoçyalı
cunning|n.|kurnazlık, kurnaz
grunt|v.|homurdanmak, hırıltı
knot|n.|ilmik, ilmek, düğüm
hairs|n.|tüyler
payments|n.|giderler, ödemeler, tediyat
granddad|n.|dede, büyük baba, ihtiyar
massacre|n.|katliam
competitive|adj.|rekabetçi
herb|n.|ot
mae|n.|şişirilebilir can yeleği, can yeleği, cankurtaran kemeri
immune|adj.|bağışık
grenade|n.|zayıf çirkin kız, el bombası, tüfek bombası
regularly|adv.|düzenli olarak
stakes|v.|büyük para için kumar oynamak, büyük oynamak, … açısından
kilos|v.|30 kil gelmek, çeki, fazlalıklarından kurtulmak
monks|n.|keşişler
guinea|n.|beçtavuğu, gine, italyan asıllı serseri
invent|v.|icat etmek
nursery|n.|çocuk odası, fidanlık, çocuk yuvası
protein|n.|protein, albümin özü, proteid
elbow|n.|dirsek
keller|n.|georgia eyaletinde şehir, teksas eyaletinde şehir, virginia eyaletinde yerleşim yeri
clowns|n.|soytarı, palyaço
thirteen|n.|on üç sayısı (13, XIII), onüç, on üç
flown|adj.|uçmuş, uçan
mustard|n.|hardal, müthiş, harika
terrace|n.|teras
alter|v.|değiştirmek
franz|n.|wiedemann-franz kanunu, wiedemann-franz-lorenz yasası, wiedemann-franz değişmezi
transportation|n.|taşıma, nakliye, ulaştırma
lens|n.|mercek, objektif
alaska|n.|alaska, amerika'da eyalet
interference|n.|karışma, müdahale, girişim
wont|v.|alışmak, itiyat, alışkanlık
weep|v.|ağlamak
clive|n.|erkek ismi, iowa eyaletinde şehir
mourning|n.|ağıt, yas, matem
crooked|adj.|çarpık çurpuk, eğri, çarpık
trainer|n.|eğitimci, eğitici, antrenör
janitor|n.|kapıcı, hademe
gradually|adv.|yavaş yavaş, gitgide, derece derece
immigration|n.|göç
filth|n.|pasak, açık saçıklık, murdarlık
momma|n.|ana, anne
father-in-law|n.|kayınbaba, babalık, kayınpeder
jackass|n.|marsıvan eşeği, ahmak, budala
cho|n.|çocuk tacizcisi (ceza evi argosu), sübyancı
reminder|n.|andaç, anmalık, hatırlatma
culprit|n.|suçlu
gabrielle|n.|kadın ismi
magistrate|n.|sulh hakimi, adliye yüksek memuru, sulh yargıcı
jasmine|n.|yasemin
womb|n.|dölyatağı, rahim
injustice|n.|adaletsizlik, haksızlık
figuring|n.|biçim verme, biçimlendirme
fracture|n.|çatlak, kırık
insanity|n.|cinnet, delilik
peasants|n.|köylüler/çiftçiler
blossom|v.|çiçek açmak
etc|adv.|ve benzerleri, ve saire, vs
agony|n.|şiddetli ıstırap, can çekişme, kıvranma
sounding|n.|sondaj, tınlama, iskandil
oz|n.|avustralya
elementary|adj.|başlayanlar için, basit
seized|adj.|ele geçirilmiş, haczedilen, el konulmuş
teaches|expr.|her şeyi öğreten kötü öğretendir, başarısızlık sonunda başarıyı getirir
lovejoy|n.|georgia eyaletinde şehir
phillips|n.|yıldız başlı vida, yıldız tornavida, maine eyaletinde yerleşim yeri
eighteen|n.|onsekiz, onsekiz sayısı (18, XVIII), on sekiz
shack|n.|kulübe, gecekondu mahallesi, gecekondu
teen|n.|genç, incinme, delikanlı
definite|adj.|belirli, belli
scrub|v.|ovmak
ruler|n.|hükümdar, hakim, cetvel
mold|v.|kalıba dökmek, küflendirmek, küflenmek
contents|n.|içindekiler
bitten|adj.|ısırılan, ısırılmış
antidote|n.|panzehir
saves|expr.|bugünün işini yarına bırakma, sorunu büyümeden halletmeli, ayarları kaydediyor
bunk|v.|kaçmak, yatakta yatmak, tabanları yağlamak
thor|n.|tor, iowa eyaletinde şehir, gök gürültüsü, yağmur ve tarım tanrısı
republican|adj.|cumhuriyetçi
graveyard|n.|mezarlık
attempts|n.|bir çok girişim, çok sayıda girişim, çevirme denemeleri
aspect|n.|hal, taraf, yön
relate|v.|nakletmek, bağlı olmak, ilgili olmak
lemonade|n.|limonata
flour|n.|un
biology|n.|dirimbilim, yaşambilim, biyoloji
dusty|adj.|tozlu
felony|n.|suç, ağır suç, cinayet
fundamental|adj.|esas, asli
jai|n.|ispanyollara özgü bir top oyunu
successfully|adv.|başarılı biçimde, açık alınla, başarılı bir biçimde
potentially|adv.|imkan dahilinde, potansiyel olarak, olanak dahilinde
strangely|adv.|tuhaf biçimde, tuhaf tuhaf, tuhaf
condoms|n.|kondom, kaput, prezervatif
quantum|n.|pay, hisse, kuantum
utter|v.|dile getirmek, basmak, buyurmak
activated|adj.|harekete geçirilmiş, harekete geçmiş, aktif hale getirilmiş
installed|adj.|kurulu, kurulmuş, monteli
interrupted|adj.|sözü kesilen, kesilen, aksak
discharge|v.|taburcu etmek (hastayı), tahliye etmek, tahliye
devastated|adj.|yıkık, mahvedilmiş, harap
substitute|v.|yerine geçirmek, yerine geçmek, yedek oyuncu
splash|v.|(su) sıçratmak, sıçramak, sıçratmak
exile|v.|sürgüne göndermek, sürmek, sürgün
aspirin|n.|aspirin
authentic|adj.|özgün, hakiki, gerçek
summit|n.|zirve
beck|n.|çay, baş işareti, dere
addiction|n.|düşkünlük, bağımlılık
lent|n.|paskalyadan önce gelen büyük perhiz, paskalya perhizi, büyük perhiz
drone|v.|homurdanmak, vızıldamak, haylazlık etmek
involving|n.|kapsama, ilgilendiren, müteallik
boyfriends|n.|flört, sevgili, erkek arkadaş
tango|v.|tango yapmak, tango, bingo benzeri bir oyun
permanently|adv.|kalıcı bir şekilde, temelli olarak, devamlı olarak
province|n.|vilayet, il
attempting|n.|girişimde bulunma, yeltenme, kalkışma
deceived|adj.|aldatılmış, faka basmış, aldatılan
triangle|n.|üçgen
skipped|adj.|atlanan, atlandı, atlanıyor
strawberry|n.|çilek
mirrors|n.|aynalı salon, gözler ruhun aynasıdır, alavere dalavere
self-defense|n.|meşru müdafaa, savunma, öz savunma
preston|n.|connecticut eyaletinde şehir, georgia eyaletinde yerleşim yeri, georgia eyaletinde şehir
overwhelmed|adj.|ezilmiş, ile dolup taşmış/taşan, şaşkına dönmüş
swift|adj.|süratli
creeps|n.|ürperti, korku, hafif kaşıntı
token|n.|işaret, fiş, jeton
temporarily|adv.|geçici olarak
poisonous|adj.|zehirli
diagnosis|n.|teşhis, tanı
ninth|n.|bir dizinin dokuzuncu elemanı, bir ünitenin dokuzda biri, dokuzda bir
locations|n.|yerleşim birimleri
retrieve|v.|geri almak
robbers|v.|hırsız polis oynamak
conclusions|n.|sonuçlar bildirgesi, sonuçlar
joanna|n.|kadın ismi, piyano
disabled|adj.|engelli, özürlü
ira|n.|new york eyaletinde yerleşim yeri, vermont eyaletinde yerleşim yeri
extension|n.|uzatma, genişletme
lining|n.|astar
freeman|n.|hür adam, azat edilmiş köle, özgür adam
scoop|n.|kepçe
merlin|n.|boz doğan, çakırdoğan, doğan (bozdoğan)
bridget|n.|kadın ismi
revving|n.|aşırı yüksek devir, kolay devirlenen
transform|v.|dönüşmek, dönüştürmek
shelby|n.|bir kadın ismi, alabama eyaletinde şehir, iowa eyaletinde şehir
hospitality|n.|konukseverlik, misafirperverlik, ikramcılık
brooks|n.|georgia eyaletinde yerleşim yeri, maine eyaletinde yerleşim yeri, minnesota eyaletinde şehir
survey|n.|araştırma, anket
hunted|v.|avlanmak, dalkavukların hedefinde olan, etrafına beleşçiler toplanan
cozy|n.|çaydanlık örtüsü, örtü, kılıf
recommendation|n.|tavsiye
providing|n.|temin etme, sağlama, eğer
microphone|n.|mikrofon, radyo
skeleton|n.|iskelet
muslims|n.|müslümanlar
toll|v.|çan çalmak, ağır ağır çalmak (çanı), ağır ağır çalmak (çan)
reconsider|v.|yeniden incelemek, tekrar düşünmek, yeniden düşünmek
creaks|n.|gıcırtı
extended|adj.|geniş, uzayan, büyütülmüş
spear|n.|mızrak
overboard|adv.|denize, gemiden denize
ai|n.|yapay zeka, üç parmaklı tembel hayvan
clinton|n.|erkek ismi, arkansas eyaletinde şehir, connecticut eyaletinde şehir
petition|n.|dilekçe
baggage|n.|bagaj
tribute|n.|haraç, övgü, devletin devlete barış için ödediği para
weddings|n.|düğünler
facilities|n.|olanaklar, tesisler, tesis
bangs|n.|kırkma, perçem, kakül
claw|n.|pençe
donation|n.|bağış
isabelle|n.|kadın ismi, wisconsin eyaletinde yerleşim yeri
jasper|n.|jasper taşı, jasp, balgamtaşı
borders|n.|kenarlıklar
australian|n.|avustralyalı
colby|n.|kansas eyaletinde şehir, wisconsin eyaletinde yerleşim yeri, wisconsin eyaletinde şehir
boxer|n.|yumrukoyuncusu, boksör köpek, boksör
whilst|conj.|iken
misfortune|n.|talihsizlik, şanssızlık, aksilik
elaborate|v.|ayrıntıyla donatmak, özenle hazırlanmış
sights|n.|görülecek yerler, turistik yerler, görülmeye değer yerler
maestro|n.|üstat, maystro, orkestra şefi
mysteries|n.|esrar
loosen|v.|gevşetmek
gifted|adj.|yetenekli, kabiliyetli
involvement|n.|bulaşma, gerek, bağlılık
affects|v.|etkilemek, tesir etmek
summon|v.|çağırmak, davet etmek
sherman|n.|connecticut eyaletinde şehir, güney dakota eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri
churchill|n.|irlanda'da yerleşim yeri, pensilvanya eyaletinde yerleşim yeri
theresa|n.|kadın ismi, new york eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
solitary|adj.|kasvetli, tek başına, kendi başına
wilderness|n.|ıssız yer, boşluk, el değmemiş doğa
baltimore|n.|baltimor, baltımore, irlanda'da yerleşim yeri
olympic|adj.|olimpik
undo|v.|(yaptığını) geri almak
mechanism|n.|yöntem, teknik, düzenek
vietnamese|n.|vietnam, vietnam dili, vietnamlı
vanish|v.|ortadan kaybolmak
dome|n.|kubbe
biting|n.|ısırma, sokma, iğneli
sage|n.|adaçayı
yummy|adj.|lezzetli, nefis
tactics|n.|taktik
slack|n.|gevşeklik, laçka, gevşek
snapped|v.|kapış kapış gitmek, kendimi kaybettim, teyp açıldı
weekly|adj.|haftalık
bushes|n.|çalılık
grandparents|n.|büyükbaba veya büyükanne, dede-nine
obtain|v.|edinmek, elde etmek, almak
hart|n.|erkek karaca, erkek geyik, kızıl geyiğin erkeği
flights|n.|iç hatlar, kat (apartmanın katı), ucuz tarifeli uçuşunuz var mı?
adventures|v.|maceralar yaşamak, vahşi maceralar, maceraya atılmayı seviyorum
hottest|adj.|en sıcak
grown-up|adj.|yetişkin, olgun
eden|n.|cennet, cennet bahçesi, masumiyet
mild|adj.|ılıman, hafif
dom|n.|kubbe, idame, buhar haznesi
fourteen|n.|on dört sayısı, XIV, on dört
smuggling|n.|kaçakçılık
blend|v.|karıştırmak, harmanlamak, harman
chancellor|n.|almanya'da şansölye, bakan, rektör
biscuits|n.|eskimiş ayakkabı, bisküvi
gorilla|n.|goril
dynasty|n.|hanedan
acquired|adj.|elde edilmiş, edinsel, kazanılmış
businesses|n.|aile işletmeleri, emlak işleri, küçük ve orta boy işletmeler
countless|adj.|sayısız
fritz|adj.|bozuk, (makine) arızalı olmak, (makine) bozuk olmak
brent|n.|koyu renkli kaz, yosun kazı, alabama eyaletinde şehir
gardener|n.|bahçıvan
barracks|n.|kışla
flirt|v.|flört etmek, flört
cooks|expr.|bir kadın tam kadın, iki kadın yarım kadın, nerde çokluk
distorted|adj.|eciş bücüş, biçimsiz, bozuk
carved|adj.|oyulmuş, oymalı, mahkuk
jumps|v.|gıcık etmek, olayların akışına göre hareket etmek, sinirden delirtmek
superhero|n.|süper kahraman
forests|v.|ormanları korumak, orman ve ormancılık, ormanlar ve ormancılık
clapping|n.|alkış
psychiatric|adj.|psikiyatrik, pskiyatrik
snuck|v.|aileden izinsiz gece dışarı çıkmak
roughly|adv.|yaklaşık olarak
screamed|expr.|oğluma bağırmış
raja|n.|raca
disappearing|adj.|gözden kaybolan, yok olan, unutulan
establishment|n.|kuruluş, kurum
whales|n.|balinalar
lump|n.|topak, yumru
dwarf|n.|cüce
environmental|adj.|çevre, çevresel
mam|n.|anne
pint|n.|ing 0,550 litre, sıvı ölçüsü (yarım litre), yarım litrelik sıvı ölçü birimi
loading|n.|yükleme
diplomatic|adj.|diplomatik
exclaims|v.|haykırmak, çığlık atmak, diye bağırmak
context|n.|bağlam
volunteered|n.|gönüllü
risked|adj.|risksiz
gangs|n.|çeteler
boost|v.|alttan yukarıya ittirmek
fax|v.|faks çekmek, faks göndermek, fakslamak
dante|n.|güney dakota eyaletinde yerleşim yeri
partial|adj.|taraflı, kısmi
refusing|n.|reddetme
gaze|v.|gözünü dikmek
rene|n.|rene alaşımları, guy de maupassant
nuisance|n.|sıkıntı, dert
terrorism|n.|terörism, terörizm, tedhişçilik
jerome|n.|arizona eyaletinde şehir, idaho eyaletinde şehir, illinois eyaletinde yerleşim yeri
ungrateful|adj.|nankör
donate|v.|bağışta bulunmak, bağışlamak
relieve|v.|rahatlatmak, yüreğine su serpmek, gönlünü ferahlatmak
grandchildren|n.|ahfat, torunlar
felicity|n.|saadet, mutluluk, nimet
maureen|n.|kadın ismi
represented|adj.|temsil edilmiş
co|pref.|birlikte, ko, vietnam’da yaşayan etnik bir grup
neutral|adj.|tarafsız, yansız, nötr
steering|n.|abrama, idare, dümen
rm|n.|rm sınama istemcisi, kaldır yazdırma alanı, nesne-ilişkisel eşleme
presidential|adj.|başkanlık, başkanlıkla ilgili, başkanlığa ait
rental|adj.|kiralık
challenged|adj.|meydan okunan, meydan okunmuş, eksik
feeds|n.|yemler
je|expr.|düşünüyorum öyleyse varım, şeytan tüyü
vegetarian|n.|vejetaryen kimse, etyemez, vejetaryen
teasing|n.|muziplik, takılma, sataşma
surprisingly|adv.|şaşırtıcı bir şekilde, şaşırtıcı bir biçimde, şaşırtıcı biçimde
iran|n.|iran
shrine|n.|türbe
automatically|adv.|otomatik olarak
timer|n.|deklanşör, saat, zaman ölçer
gasoline|n.|benzin
juliette|n.|kadın ismi
scouts|n.|izciler ve izcilik, iit uluslararası müslüman alimler birliği, trakya izciler birliği federasyonu
millie|n.|çalışan genç kız
dorm|n.|yurt
athlete|n.|sporcu, atlet
shiva|interj.|bir hindu tanrısı
robber|n.|soyguncu, hırsız
convent|n.|manastır
balloons|n.|balonlar
crawford|n.|georgia eyaletinde şehir, kolorado eyaletinde şehir, maine eyaletinde yerleşim yeri
barb|v.|çengel takmak, çengel, kuş tüyünün bir kılı
enters|expr.|depresyona girmiş, karamsarlığa düşmüş, çaresizliğe/umutsuzluğa düşmüş
maps|n.|haritalar
meth|n.|kristal meth
fruits|n.|meyveler, ürünler
colored|adj.|renkli
poppy|n.|gelincik
metro|n.|metro, yeraltı treni, büyük şehir veya başkent (hint ingilizcesi)
clarke|n.|clarke kuşağı, clarke hücresi, clarke dili
fernando|n.|erkek ismi
scully|n.|mahmuzlu sualtı engeli
resolved|adj.|karar vermiş, azimli, kararlı
sessions|n.|asliye ceza mahkemesi, jüri mahkemesi, sulh mahkemesi
conservative|adj.|muhafazakar, tutucu
rates|n.|bedeller, fiyat listesi
forged|adj.|düzmece, düzme, dövme
legends|n.|efsaneler
arrows|n.|oklar, dart
charley|n.|vietnam ulusal kurtuluş cephesi üyesi, vietnam ulusal kurtuluş cephesi üyeleri
dismiss|v.|azletmek, kovmak
authorized|adj.|yetkili
slavery|n.|kölelik
attended|adj.|enstrüman/vokal eşliğinde çalınıp söylenen, bakıcısı olan, gözetim altındaki
flows|n.|nüfus, suyun aktığı/geçtiği borular, brüt yöntem
employed|adj.|işe alınan, kullanılmış, işe alınmış
decorated|adj.|süslü, dekore edilmiş, dekore
parallel|adj.|aynı doğrultuda olan, paralel
detected|adj.|saptanmış, saptanan, algılandı
grove|n.|koru
coverage|n.|kapsam, olay kaydı, yayın alanı
hen|n.|tavuk
pyramid|n.|piramit
overall|adj.|bir uçtan bir uca, etraflı, tüm
hum|v.|vızlamak, harıl harıl çalışmak, uğuldamak
specially|adv.|özellikle
rebuild|v.|yeniden inşa etmek
exclaiming|n.|haykırma, ansızın bağırıp çağırma, hayretini ifade etme
producing|n.|üretme
sewing|n.|dikme
occasions|n.|fırsatlar
boards|n.|sahne, kitabın kapakları, kurullar
trumpet|n.|trompet
shaped|adj.|şekillendirilmiş, biçimli, şekilli
matched|adj.|eşlenen, eşlenmiş, geçmeli
daughter-in-law|n.|gelin
ammo|n.|cephane, mühimmat
typing|n.|daktiloyla yazma, yazma işlemi, yazım
blades|n.|tekerlekli paten, alçak basınç kanatları, ayarlanabilir kanatlar
thailand|n.|tayland, geçmişte siyam olarak bilinen ülke
wo|interj.|çüş, höst, sip no
debris|n.|moloz, enkaz
cement|n.|çimento
hamlet|n.|küçük köy, ufak köy, genellikle kilisesiz küçük köy
nat|n.|yeni zelanda ulusal parti'sine üye olan kimse
communists|n.|komünistler
showers|n.|kısa yağmur veya kar yağışı
tougher|v.|çetinleştirmek, çetinleşmek, daha zorlu ortamlarda
sailors|n.|denizciler
comedian|n.|komedi yazarı, komedyen, güldürücü
harassment|n.|taciz
missus|n.|hanım
monitoring|n.|izlem, gözetim, gözleme
smashing|n.|çarpışma, ağır, olağanüstü
shaved|adj.|tıraşlı, tıraş olmuş, tıraş edilmiş
inventory|n.|envanter
housekeeper|n.|kahya, temizlikçi kadın
tribes|n.|aşiretler
long-term|adj.|uzun vadeli, uzun vadeli kapasite maliyetleri, uzun dönem
vile|adj.|alçak, değersiz, rezil
gotham|n.|alık, ebleh, budala
imaginary|adj.|hayali
artillery|n.|ağır silahlar, toplar, topçuluk
ping|v.|detonasyon yapmak (motor), vızıldamak, teklemek
cereal|n.|tahıl
zoom|v.|vınlamak, rüzgar gibi gitmek, yoğunlaşmak
portion|v.|ayırmak, bölüştürmek, bir tabak yemek
irony|n.|hiciv
exceptional|adj.|fevkalade, müstesna, istisnai
slit|n.|yarık
despise|v.|hor görmek, hakir görmek, küçümsemek
waltz|v.|vals yapmak, vals
humour|n.|mizah
crashes|n.|dikkat dağınıklığına bağlı kazalar
gu|n.|bayıltıcı tabanca, yaşasın iskoçya
stammering|n.|kekeleme, konuşma güçlüğü, pepe
coaches|n.|otobüsler, yolcu vagonları
await|v.|gözlemek, hazır olmak, beklemek
bryan|n.|erkek ismi, ohio eyaletinde şehir, teksas eyaletinde şehir
celebrated|adj.|kutlanan, adlı sanlı, şöhretli
encouraged|adj.|himaye edilmiş, teşvik edilmiş, yüreklendirilmiş
devils|n.|iç sıkıntısı, ruhsal çöküntü/bunalım dönemi, alkol krizi
gag|v.|haberin yayılmasına engel olmak, öğürmek, kusturmak
telescope|n.|teleskop
verse|n.|dize, mısra
babysitter|n.|bebek bakıcısı
pr|n.|piar, halkla ilişkiler, praseodimin simgesi
distinguished|adj.|seçkin
licence|n.|lisans
addicted|adj.|bağımlı
bauer|n.|baver vah sistemi, değişik bauer-vogel süreci
speeches|n.|açılış konuşmaları
wit|n.|zeka kıvraklığı, akıl, ince espri
programmed|adj.|programlı, programlanmış
bliss|n.|mutluluktan uçma, neşe, saadet
elsa|n.|teksas eyaletinde şehir
com|n.|açıklama, şi, kom
recorder|n.|zabıt katibi, hakim, yazıcı
hides|expr.|adları gizler, tarihleri gizler, zamanları gizler
shameless|adj.|hayasız, edepsiz, arsız
apartments|n.|apartmanlar
tipped|adj.|uçlu, eğilmiş, yatık
turf|v.|çimlendirmek, çim ekmek, tezekle kaplamak
tang|v.|tangırdamak, kabza ile süslemek, kabza takmak
tu|n.|sal
discharged|adj.|taburcu edilmiş, terhis edilmiş, serbest bırakılmış
psychologist|n.|psikolog
delete|v.|silmek
jock|n.|iskoçyalı, spor delisi/meraklısı/düşkünü, atlet
wrath|n.|öfke, gazap, büyük öfke
estimate|v.|kestirmek, tahmin etmek, tahmin
tutor|n.|özel öğretmen
jurisdiction|n.|yargı
impulse|n.|dürtü
penguin|n.|penguen
tubes|n.|dölyatağı borusu, tüpler, borular
playground|n.|oyun alanı
sew|v.|dikiş dikmek, dikmek
nickel|n.|nikel
claws|n.|tırmıklar
giants|n.|devler
daring|n.|cüret, cüretkar, gözüpek
posters|n.|posterler
peacefully|adv.|barış içinde, güzel güzel, barış yoluyla
rag|n.|paçavra
caves|n.|mağaralar
stern|n.|kıç (gemide/teknede), kıç, müsamahasız
condolences|n.|başsağlığı
dearly|adv.|pahalıya, samimiyetle, içtenlikle
humiliation|n.|aşağılama, küçük düşürme, bozum
worldwide|adj.|dünya çapındaki, dünyadaki her ulusu kapsayan, yaygın
cartoon|v.|karikatürize etmek, karikatür çizmek, mizah amaçlı çizim yapmak
disrespect|v.|saygısızlık etmek, saygısızlık
underworld|n.|ahiret, yeraltı dünyası, yer altı
marble|n.|mermer, bilye
lilly|n.|kadın ismi, georgia eyaletinde şehir, pensilvanya eyaletinde yerleşim yeri
chun|expr.|çok banal!, hiç de yeterli değil!
curly|adj.|kıvırcık
judged|adj.|yargılanan, hükmedilmiş
bidding|n.|teklif verme, fiyat verme
erased|adj.|bozulmuş, kazınmış, öldürülmüş
confuse|v.|kafasını karıştırmak
masterpiece|n.|harika, başyapıt, şaheser
pentagon|n.|pentagon, beş kenarlı, beş açısı ve beş kenarı olan bir düzlem şekil
tow|v.|yedeğe almak, çekici ile çekmek, yedeklemek
seduce|v.|ayartmak, baştan çıkarmak
bathtub|n.|küvet
pets|n.|evcil hayvanlar
bricks|n.|tuğlalar, dışarı, uyuşturucu
goa|n.|tibet ceylanı, goa
hotter|adj.|sıcak, daha sıcak
regime|n.|yönetim şekli, rejim
contempt|n.|aşağılama
batch|n.|bir defada alınan miktar, grup, yığın
ramsay|n.|ramsay sedasyon skoru, ramsay hunt sendromu
speeding|v.|hızlanmak, hızlanma, sürat yapma
compartment|n.|kısım, göz, bölge
tackle|v.|ele almak (bir problemi), mücadele etmek, avadanlık
wage|n.|maaş, ücret
shines|v.|fırsattan istifade etmek, yağmur yağarken küpünü doldurmak, yağmur yağarken küpünü doldur
lifting|n.|yükseltme, germe, kaldırma
hustle|v.|itişip kakışmak, itmek, dürtmek
inmates|n.|tutuklular
km|n.|kilometre, km
scooter|n.|buz kayağı, trotinet, küçük motosiklet
relatively|adv.|nispeten, oranla
stoned|adj.|zom, zilzurna sarhoş, sarhoş
supernatural|adj.|doğaüstü
darwin|n.|darvin, minnesota eyaletinde şehir, northern territory eyaletinin başkenti
viewers|n.|televizyon izleyicileri
lorenzo|n.|teksas eyaletinde şehir
treasures|n.|kutsal hazineler, sanat hazineleri, yer altı zenginlikleri
yankee|n.|amerikalı, yanki, (kuzey) amerikalı
lang|n.|geçmiş, geçmiş zaman, eski günler
taco|n.|tako, jantı eğme
charts|n.|listeler, (müzik piyasasında) satış listeleri, grafikler
brigade|n.|liva, ekip, takım
bankrupt|n.|iflas
lookout|v.|sakınmak, gözleme, manzara
merchandise|n.|mal, mamul
slippery|adj.|kaygan
duchess|n.|düşes, büfe
gulf|n.|körfez
foam|v.|köpürmek, köpürtmek, köpük
steals|v.|aşırmak, hırsızlık yapmak, çalmak
numerous|adj.|sayısız
ripping|adj.|mükemmel, müthiş, harika
trusts|n.|güvenler
flock|n.|sürü
potion|n.|ilaç dozu, zehirli içki, iksir
fiance|n.|sözlü, nişanlı, (erkek) nişanlı
glimpse|n.|anlık bakış
invincible|adj.|yenilmez
compensation|n.|tazminat, telafi
kettle|n.|çaydanlık
stroll|v.|dolanmak, gezinmek, dolaşmak
brendan|n.|erkek ismi
cafeteria|n.|kafeterya
sane|adj.|iyi düşünebilen
currency|n.|döviz, para birimi
amsterdam|n.|hollanda'nın başkenti, missouri eyaletinde şehir, new york eyaletinde yerleşim yeri
radius|n.|yarıçap
verify|v.|doğrulamak
founded|adj.|kurulan, kurulmuş, esaslı
medic|n.|kabayonca, doktor, korunga
peek|v.|dikizlemek, dikiz etmek, gözetlemek
sewer|n.|lağım
vernon|n.|alabama eyaletinde şehir, connecticut eyaletinde şehir, florida eyaletinde şehir
bbc|n.|ingiliz yayın kuruluşu
hull|v.|kabuğunu çıkarmak, kabuğunu soymak, kabuk (ceviz/fıstık/bezelye vb)
solomon|n.|kansas eyaletinde şehir
madonna|n.|meryem ana
toad|v.|yaltaklanmak, dalkavukluk etmek, kara kurbağa
powell|n.|missouri eyaletinde şehir, ohio eyaletinde şehir, wyoming eyaletinde yerleşim yeri
maxwell|n.|mıknatıssal akı birimi, manyetik akının cgs birimi, maxwell
moose|n.|mus, amerika geyiği, kanada geyiği
souvenir|n.|hediyelik eşya, anmalık, andaç
stitch|v.|dikmek, dikiş
compass|n.|pusula
mercury|n.|ticaret tanrısı, yerfesleğeni, merkür
locking|n.|kilit, kilitleme, kenetleme
edwards|n.|kolorado eyaletinde şehir, mississippi eyaletinde yerleşim yeri, missouri eyaletinde yerleşim yeri
frederick|n.|güney dakota eyaletinde yerleşim yeri, kansas eyaletinde şehir, kolorado eyaletinde şehir
dislike|n.|hoşlanmama, hoşlanmamak
rib|v.|kafa bulmak, matrak geçmek, takılmak
pamela|n.|kadın ismi
brace|v.|kışkırtmak, bağlamak, kuşaklamak
ban|v.|yasaklamak, yasak
gracias|expr.|şimdiden teşekkürler
stitches|n.|dikişler
thrust|v.|thrust - thrust, saldırmak, dayamak
referred|adj.|refere edilmiş, göndermeli, atıfta bulunulan
achievement|n.|başarı
links|n.|sargı, golf sahası, etriye
denying|n.|yadsıma, inkar etme
monastery|n.|manastır
newly|adv.|yeni, yeni olarak, yakın zamanlarda
impatient|adj.|sabırsız
recruit|v.|iyileştirmek, sağlığı iyileşmek, asker toplamak
sunk|n.|içine çökük, gömülü, çukur
ignorance|n.|bilgisizlik, cahillik, cehalet
drugged|adj.|uyuşturucu madde etkisi altında, uyuşturulmuş
predicted|adj.|tahmin edilen, tahmin edilmiş, önceden haber verilmiş
floyd|n.|iowa eyaletinde şehir, new mexico eyaletinde yerleşim yeri, new york eyaletinde yerleşim yeri
creator|n.|yaratıcı
mississippi|n.|amerika'da eyalet
civilized|adj.|medeni, uygar
artery|n.|ana cadde, ana yol, anayol
dynamic|adj.|hareketli, dinamik
competing|n.|yarışma, rekabet, rakip
buffy|n.|beyaz kan hücrelerinin bir tabakası
distribution|n.|dağıtma, dağılım, dağıtım
turk|n.|türk
stereo|n.|set, stereo plak, teyp
ethel|n.|kadın ismi, ulu, soydan
ark|n.|tahta sandık, kutu, mavna
carpenter|n.|marangoz
warner|n.|güney dakota eyaletinde yerleşim yeri, new hampshire eyaletinde yerleşim yeri, oklahoma eyaletinde yerleşim yeri
industries|n.|metal endüstrisi, savunma endüstrisi, sosyal açıdan endüstri
melted|adj.|eritilmiş, erimiş
upsetting|n.|şişirilme, dövme, üzücü
cruz|n.|indiana eyaletinde yerleşim yeri, kaliforniya eyaletinde şehir, new mexico eyaletinde yerleşim yeri
labs|n.|laboratuvar, labrador retriever (köpek)
bluff|v.|blöf yapmak, blöf
bender|n.|cümbüş, alem, iğici
unbearable|adj.|katlanılmaz, çekilmez
narcotics|n.|uyuşturucu, narkotikler, uyuşturucular
juicy|adj.|cıvık, sulu
eerie|adj.|ürkütücü, ürkünç, esrarengiz
ingrid|n.|kadın ismi
slippers|n.|pantufla, erkek terliği, pofuduk terlik
freaky|adj.|garip, sıra dışı, acayip
vip|n.|önemli kimse, önemli şahsiyet, üst düzey görevli
troop|v.|topluca ilerlemek, toplanmak, ilerlemek
footprints|n.|ayak izleri
pact|n.|antlaşma
apparent|adj.|aşikar, ortada, belirgin
repeated|adj.|tekrarlanmış, yinelenen, tekrar edilen
foreigner|n.|ecnebi, yabancı
journalists|n.|gazeteciler
employer|n.|işveren
penelope|n.|kocasına sadık vefalı eş, kadın ismi, odise'nin karısı
grim|adj.|aman bilmez, gaddarca, amansız (mücadele)
medieval|n.|ortaçağ, ortaçağa özgü, ortaçağa ait
frustrating|n.|beyhude, boşa çıkarma, moral bozucu
rehearse|v.|prova yapmak, prova etmek
travelled|adj.|çok gezmiş, çok seyahat etmiş, seyahat konusunda deneyimli
preparation|n.|hazırlık
microwave|n.|minidalga, mikrodalga
denial|n.|reddetme, inkar, ret
flute|n.|flüt
juvenile|n.|gençlik, çocuk, yavru
paddy|n.|çeltik
retarded|n.|geri zekalı, yavaş gelişen
memo|n.|bildiri, hatırlatıcı not, kısa not
canvas|n.|tuval
fa|n.|do dizisinin dördüncü derecesi, fa
symbols|n.|simgeler
mccoy|n.|gerçek, orijinal, gerçek şey
daly|n.|sakatlığa/maluliyete uyarlanmış yaşam yılları, sakatlığa ayarlanmış yaşam yılları, kaliforniya eyaletinde şehir
driveway|n.|özel araba yolu, evin garajını sokağa bağlayan yol, garaj ile cadde arasındaki özel yol
funky|adj.|korkak, ağır kokulu, kötü (koku)
kitten|n.|kedi yavrusu, yavru kedi
nicest|adj.|en hoş
deceive|v.|aldatmak, kandırmak
negro|adj.|siyahi
chopped|adj.|kesilmiş (ağaç), doğranmış, kıyılmış
consultant|n.|danışman
rifles|n.|avcı erleri
heating|n.|ısınma, ısıtma, kızdırma
rays|n.|ahlaki ve entelektüel yücelik, ışınlar
architecture|n.|mimarlık
gideon|n.|missouri eyaletinde şehir
butch|n.|sevici, erkek fatma, erkek gibi
warmer|n.|ısıtıcı, sıcak, daha sıcak
contribution|n.|katkı
advisor|n.|danışman
peoples|v.|iskan etmek (bir yeri), insanları bir yere yerleştirmek, kabil
groceries|n.|bakkaliye, bakkaliye eşyası, yiyecek
behaved|adj.|huylu
experiencing|n.|deneyim, deneyim etme
settling|n.|tasman, halletme, çöktürme
tractor|n.|traktör
unacceptable|adj.|kabul edilemez, çekilmez, kabul olunamaz
imitating|n.|yiyecek taklidi ürünü
squadron|n.|hava filosu, süvari taburu
briggs|n.|briggs logaritması, myers-briggs teorisi, birggs tersüsteli
smallest|adj.|çok küçük, en küçük
ethics|n.|aktöre, ahlak, ahlakbilim
gibson|n.|georgia eyaletinde şehir, iowa eyaletinde şehir, north carolina eyaletinde yerleşim yeri
devotion|n.|bağlanım, fedakarlık, dua
plumber|n.|su tesisatçısı
burgers|n.|burgers denklemi, ucuz işlerde çalışmak, viskoz olmayan burgers denklemi
knots|n.|ilmek (halı), düğüm düğüm, hızla
broom|n.|süpürge
briefing|n.|brifing, avukat tutma, kısa toplantı
curve|v.|bükülmek, eğri, kavis
informant|n.|muhbir
applauding|v.|alkışlamak
whites|n.|beyazlar
app|n.|uygulama, meze, çerez gibi yiyecek
andrews|n.|güney carolina eyaletinde yerleşim yeri, indiana eyaletinde yerleşim yeri, north carolina eyaletinde yerleşim yeri
ox|n.|öküz
vase|n.|vazo, saksı
glance|v.|göz atmak, kısa bakış, bakış
collective|adj.|toplu, müşterek, kolektif
poles|n.|kutuplar
sixty|n.|altmış
fantasies|v.|hayallerini/fantezilerini gerçekleştirmek
heritage|n.|miras, kalıtım
fisherman|n.|balıkçı, balıkçı teknesi, dalyancı
armstrong|n.|iowa eyaletinde şehir, missouri eyaletinde şehir, oklahoma eyaletinde yerleşim yeri
complained|v.|yakınmak, şikayet etmek
nightclub|n.|gece klübü, taverna, gece kulübü
willow|n.|söğüt
preliminary|adj.|ilk, ön
server|n.|sunucu
provides|n.|yöneltme sağlayan liderlik
mat|n.|keçe, hasır
appreciation|n.|takdir
historic|n.|tarihi, evrimsel, önemli
promote|v.|tanıtımını yapmak, desteklemek, terfi ettirmek
processing|n.|proses, işleme tabi tutma, işlenme
naples|n.|napoli, florida eyaletinde şehir, güney dakota eyaletinde yerleşim yeri
high-pitched|adj.|tiz, çok tiz, yüksek perdeden
pumping|n.|pompalama, pompa ile basma, su çekme
stalker|n.|iz süren avcı, sapkın bir şekilde birilerini izleyen kimse, takipçi sapık
goats|n.|davar, küçükbaş, iyiyi ve kötüyü birbirinden ayırmak
smokes|n.|duman, tütmek
introduction|n.|giriş, tanıtım
valid|adj.|geçerli
portuguese|n.|portekiz, portekizli, portekizce
negotiations|n.|tarifeler, görüşmeler
wheeler|n.|tekerlekçi, tekerlekli araç, illinois eyaletinde yerleşim yeri
overheard|n.|kulak misafiri, kulak misafiri olmuş
breeding|n.|yetiştirme
part-time|adj.|yarımgün, parttaym, yarı zamanlı
barge|n.|duba, mavna
refugees|n.|mülteciler
observed|adj.|gözlenmiş, gözlenen
tigers|n.|sri lankalı ayrılıkçı gerillalar, tamil kaplanları
brothel|n.|genelev
missions|n.|misyon
ashore|adv.|karada, kıyıya, karaya
panda|n.|panda
discretion|n.|ketumiyet, takdir yetkisi, incelik
yale|n.|güney dakota eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri, iowa eyaletinde şehir
disappointing|adj.|heves kırıcı, umudunu boşa çıkaran, hayal kırıklığı yapan
insect|n.|böcek
prophecy|n.|kehanet
wanda|n.|kadın ismi, minnesota eyaletinde şehir
absent|adj.|hazır bulunmayan, mevcut olmayan, yok
machinery|n.|makineler
generals|n.|generaller, komutanlar
carrot|n.|kızıl saç, havuç, ödül/teşvik
ferrari|n.|skuderia ferrari
wrecked|adj.|harap edilmiş, bozulmuş, kazazede
gestapo|n.|gestapo
greene|n.|iowa eyaletinde şehir, maine eyaletinde yerleşim yeri, new york eyaletinde yerleşim yeri
suggestions|n.|öneriler
puff|v.|şişirmek, puflamak, nefes nefese olmak
supportive|adj.|destek verici, yardımcı, destekleyici
punching|n.|zımbalama, delme, delme ya da zımbalama
lulu|n.|olağanüstü, olağanüstü şey, kadın ismi
intervention|n.|araya girme, müdahale
layers|n.|vajina
hughes|n.|wisconsin eyaletinde yerleşim yeri
scholar|n.|bilgin, bilim insanı
libby|n.|montana eyaletinde şehir
predators|n.|kartal gibi yırtıcı kuşlar, yırtıcılara karşı korunma
accusations|n.|suçlamalar
olympics|n.|olimpiyatlar
accounting|n.|muhasebe
expertise|v.|uzman görüşü sunmak, uzluk, ustalık
strap|n.|kayış
darryl|n.|erkek ismi
butts|n.|arazi sınırları, arsa sınırları, çek koçanları
approaches|n.|yaklaşımlar, girişler
flags|n.|bayraklar, işaretler
embarrassment|n.|mahcubiyet
faking|n.|numara yapma
vanilla|n.|vanilya, vanilyalı, özelliksiz
grapes|n.|üzümler, dedikodu, bağsur
beacon|v.|işaret koymak, yol göstermek, işaretlemek
handkerchief|n.|mendil
rubbing|n.|silme, delk, ovalama
rustling|n.|hışırtı, hışırdama, enerjik
lighten|v.|aydınlatmak
flora|n.|bitkiler, bitki örtüsü, flora
cuban|n.|puro, küba purosu, kübalı
polar|n.|ucay, zıt, kutup
translator|n.|tercüman, çevirmen
congrats|n.|hayırlı olsun (bebeğin doğumu vb), tebrikler
grabbing|n.|yakalama
alf|n.|hayvan kurtuluş cephesi
brotherhood|n.|kardeşlik
ernest|n.|pensilvanya eyaletinde yerleşim yeri
professionals|n.|profesyonel
yuan|n.|yuan, çin para birimi, çin'in resmi para birimi
understandable|adj.|anlaşılır
banner|n.|pankart, afiş
academic|adj.|akademik
thuds|v.|düşme sesi çıkarmak, pat diye düşmek, ağır bir şeyin yere düşünce çıkardığı ses
sa|abrev.|cts
publicly|adv.|resmen, açıktan açığa, açıkça
orphans|n.|yetimler
pearls|n.|artıları eksileri, aklın incileri, akıl dolu sözler
predator|n.|yırtıcı hayvan, avcı hayvan, predator
frances|n.|kadın ismi
addison|n.|soyisim, alabama eyaletinde şehir, batı virginia eyaletinde yerleşim yeri
syrup|n.|şurup
cartel|n.|kartel
nash|n.|oklahoma eyaletinde yerleşim yeri, kaçmak, topuklamak
norma|n.|gönye, açıölçer, iletki
bluffing|expr.|blöf yapıyor
permitted|adj.|izinli, izin verilmiş, onaylanmış
unpredictable|adj.|önceden bilinmez, önceden kestirilemeyen, ne yapacağı belli olmaz
wagner|n.|güney dakota eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
suspension|n.|askıya alma, tehir, geçici olarak durdurma
addresses|n.|nutuklar, alıcılar
stamps|n.|damgalar
category|n.|kategori
transition|n.|geçiş, intikal
peas|n.|bezelye
cautious|adj.|ihtiyatlı, tedbirli
isabella|n.|kadın ismi
comparison|n.|mukayese, kıyas, karşılaştırma
coats|n.|kansas eyaletinde şehir, north carolina eyaletinde yerleşim yeri
islam|n.|müslümanların dini, müslümanlık, islam
thugs|n.|haydut, katil, şaki
grams|n.|gram
freshman|n.|birinci sınıf öğrencisi (kolej/üniversite), üniversite birinci sınıfa giden öğrenci, üniversitede birinci sınıf öğrencisi
toilets|n.|tuzak, tuvaletler
banquet|n.|ziyafet
coup|n.|uğurlu bir hareket, başarılı vuruş, zekice davranış
shaken|adj.|sarsılmış
investigations|n.|soruşturmalar, tahkikat, taharriyat
toothbrush|n.|diş fırçası, fırça bıyık
expressed|adj.|ifade edilen
vulgar|adj.|adi, bayağı, edebe aykırı
haunt|v.|sık sık uğramak, akıldan çıkmamak, ziyaret etmek
improvement|n.|gelişim, ilerleme
zeus|n.|jüpiter
smelling|n.|koku, yamukluk, kokma
kirby|n.|arkansas eyaletinde şehir, ohio eyaletinde yerleşim yeri, vermont eyaletinde yerleşim yeri
repairs|n.|tamirat, onarımlar
conducted|adj.|yürütülen
ollie|n.|iowa eyaletinde şehir
bakery|n.|fırın
busting|n.|yaptırımı bozma, insanın belini kıran, (iş) ağır
investigated|adj.|soruşturulmuş, incelenmiş, araştırılmış
admission|n.|itiraf, kabul, giriş
essay|v.|kalkışmak, yapmaya kalkışmak, denemek
twitter|v.|cıvıldamak, cıvıltı
depths|n.|derinlikler
fewer|adj.|az, daha az
guarding|n.|koruma (korunma), muhafaza, koruma
altered|adj.|değiştirilmiş
filing|n.|dosyalama, eğeleme, törpüleme
ecstasy|n.|coşku, vecit, mest olma
snatch|v.|kapmak, kapışmak
stored|adj.|saklanmış, bellenmiş, kayıtlı
tropical|adj.|tropikal
pharmacy|n.|eczane
dalton|n.|dalton, erkek ismi, georgia eyaletinde şehir
altitude|n.|rakım, irtifa
admired|adj.|çok beğenilen, takdir edilen, hayran olunan
mamma|n.|anne, meme
moe|n.|avustralya'nın victoria eyaletinde şehir
grind|v.|öğütmek
bombay|n.|bombay, hindistan'da şehir, new york eyaletinde yerleşim yeri
lowest|adj.|en küçük, en düşük, asgari
sentences|n.|cümleler
mute|adj.|dilsiz, sessiz
full-time|n.|tamgün, tam gün, fultaym
scratching|n.|eşme, çizgileme, kazıma (yüzey)
imprisoned|adj.|tutuklu, hapsedilmiş, mahpus
danish|adj.|danimarkalı
glowing|n.|yanma, kızma, akkorlaşma
martini|n.|martini
leah|n.|kadın veya erkek ismi
empress|n.|imparatoriçe
equipped|adj.|donatılmış
finale|n.|final, bitiş
tarzan|n.|tarzan
storms|n.|yağmur fırtınaları, önemli fırtınalar, fırtınalar okyanusu
sniff|v.|burun çekmek
slick|v.|düzeltmek, düzlemek, düzleştirmek
unarmed|adj.|silahsız
violated|adj.|ihlal edilmiş
vent|v.|dışa vurmak, belli etmek, göstermek
dd|abrev.|gg
breakthrough|n.|ilerleme, atılım, buluş
stud|n.|azgın erkek, damızlık at, iri başlı çivi
addressed|adj.|adresli, adreslenmiş
tactical|adj.|ustaca planlanmış, tedbirli, taktiğe ait
vessels|n.|gemiler, deniz araçları, deniz taşıtları
procedures|n.|süreçler, yordamlar
ching|expr.|yazar kasa sesi, yazar kasa sesi taklidi, kokain
dine|v.|günün esas yemeğini yemek, yemeğe davet etmek, akşam yemeği yemek
draws|n.|çöküntüler
crowds|n.|kitle
limb|n.|bacak, ağacın ana dalı, kol ve bacak gibi vücuda eklemle bağlı organ
wool|n.|yün
montana|n.|amerika'da eyalet, wisconsin eyaletinde yerleşim yeri
jerks|adv.|kesik kesik, myoklonik hareketler, myoklonik jerkler
numb|adj.|uyuşuk
oceans|adj.|sürüsüyle, sürüyle, birçok
priceless|adj.|paha biçilmez
rocking|n.|sallantı, sallama, sallanma
commanding|n.|komuta, emir, hükmetme
relaxing|adj.|dinlendirici
clatters|v.|çatırdatmak, gürültüyle yapmak, takırdamak
gerard|n.|keçi ayağı
packs|n.|akü grupları, batarya grupları, anahtar grupları-kapı kapı
parlor|n.|oturma odası, salon, küçük salon
cabbage|n.|lahana
intruder|n.|zorla giren kimse, davetsiz misafir, zorla giren şey
considerable|adj.|hatırı sayılır derecede
argued|v.|tartışılmak
paladin|n.|şovalye, kahraman
pupils|n.|öğrenciler, göz bebekleri
inspire|v.|ilham vermek
positively|adv.|olumlu şekilde, olumlu yönde
traded|v.|borsada işlem görmek, altın borsa yatırım fonu, borsada işlem gören şirket
shipped|adj.|yüklenmiş, sevk edilmiş, sevkedilmemiş
feminine|adj.|kadınsı, kadınımsı
vague|adj.|şüpheli, kararsız, anlaşılmaz
partly|adv.|kısmen
insight|n.|içyüzünü anlama
lucia|n.|kadın ismi
stages|n.|merhaleler nazariyesi, gelişim aşamaları, insanlık gelişminin sekiz aşaması
um-|n.|kan emici bir böcek, hımlamak/ı’lamak, evelemek gevelemek
screenplay|n.|senaryo
marquis|n.|marki
ripe|adj.|olgun
awaiting|n.|bekleme, muntaziran
pigeons|n.|güvercinler
clayton|n.|erkek ismi, alabama eyaletinde şehir, georgia eyaletinde şehir
tempted|adj.|cezbedilmiş
inherit|v.|miras olarak almak
decline|v.|zayıflamak, inişe geçmek, geri çevirmek
pennsylvania|n.|pensilvanya, amerika'da eyalet
fang|n.|köpekdişi (yırtıcı hayvanlarda), zehirli diş, dış kökü
shitting|n.|dışkılama, büyük abdestini yapma, sıçma
gigantic|adj.|devasa
guv|n.|baba, efendi, şef
readings|n.|okumalar
headmaster|n.|okul müdürü
tenth|adj.|onuncu
seals|n.|mühürler, keçeler
avoided|v.|kaçınılmak
blankets|n.|şilte ve levhalar
overlapping|n.|örtüşüm, örtüşme, üst üste binme
flipped|adj.|ters dönmüş
yield|v.|teslim olmak, kazanç sağlamak, ürün vermek
ads|n.|reklamlar
backstage|n.|sahne arkası, kulis
quiz|v.|sınav yapmak
mosque|n.|mescit, cami
weaver|n.|dokumacı
puppies|n.|köpek yavruları, (köpek) yavrular, göğüsler
stated|adj.|belirtilmiş
weirdo|n.|tuhaf tip, garip, garip tip
belongings|n.|ayniyat, özel eşya, kişisel eşyalar
functions|n.|fonksiyonlar, işlevler, fonksyionlar
reservations|n.|çekinceler, ayırmalar, rezervasyonlar
chilly|adj.|serin
betsy|expr.|zırdeli, aman tanrım!
eldest|adj.|büyük, yaşça en büyük, en büyük (yaşça)
traditions|n.|gelenek görenek, töre
factories|n.|fabrikalar
feedback|n.|geri bildirim
repeatedly|adv.|tekrar tekrar, aralıksız olarak, durmadan
exquisite|adj.|çok büyük (acı/mutluluk), nazik, seçkin
pickle|n.|turşu
masses|n.|yığın, büyük halk kitleleri, büyük halk yığınları
pauline|n.|paulcü
frogs|n.|kurbağalar
crosses|n.|üç taş oyunu, xox oyunu, dokuz kare oyunu
headaches|n.|gerilim tipi başağrıları, hastayı güçten düşüren baş ağrıları, tekrarlayan baş ağrıları
arctic|n.|kuzey kutup bölgesi, çok soğuk, kutupsal
reinforcements|n.|takviye birliği, destek, takviye kuvvetleri
secondary|adj.|ikincil
pajamas|n.|gecelik, pijama
roles|v.|rolleri değişmek, bağımsız roller, aile rolleri
asteroid|n.|asteroit, küçük gezegen, yıldız şekilli
mixing|n.|karışma
courier|n.|kurye
jeanne|n.|kadın ismi
carrots|expr.|tavşanlar havuç sever, cezeriye, havuç salatası
fuckers|n.|siken kimse, beceren kimse, herif
translated|adj.|çeviri, tercümesi yapılmış
longing|n.|özlem, hasret
cigars|n.|bir kutu puro
manipulate|v.|hareket ettirmek, elle hareket ettirmek, el ile işletmek
liberal|n.|erkin, liberal görüşlü kimse, erkinci
investors|n.|yatırımcılar
bun|n.|topuz
sly|adj.|sinsi
pickles|n.|karışık turşu, asitli temizleyici, asit temizleyici
temperatures|n.|düşük sıcaklıklar, tüm dünyadaki en uç ortam sıcaklıkları, hafifçe yükselen sıcaklıklar
sweetest|adj.|en tatlı
motto|n.|düstur, parola, ilke
moss|n.|yosun
yum|interj.|nefis, leziz
melting|n.|ergime, eritme
requesting|n.|istirham
lava|n.|lav, donmuş lav, püskürtü
kris|n.|malezya kaması
monthly|adj.|aylık
noses|expr.|burnumuzun dibinde, kendi ihtiyaçlarını bir kenara bırakmak, kelle saymak
tickle|v.|gıdıklamak, gıdıklanmak, gıdıklanma
ufo|n.|uçandaire, tanımlanamayan uçan obje
timothy|n.|aziz paulus'un öğrencisi (incil), fleol, çayır otu
midst|n.|orta yer, orta, ortasında
herbert|n.|sıkıcı tip
purchased|adj.|satın alınmış, satın alınan, alım
tis|n.|bu …'dır anlamına gelen kaynaşmış sözcük, (kısaca) it is
convenience|n.|kolaylık, elverişlilik, müsait oluş
flashlight|n.|elektrik feneri, işaret feneri, flaş
dewey|n.|oklahoma eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
tripped|expr.|bir şey alarmı harekete geçirdi, ayağı taşa takıldı, sigortanın atması
easiest|adj.|en kolay
shouted|v.|bağırmak, haykırmak, haykırış
splitting|n.|yarma
bryce|n.|kilisenin ihlali
commands|n.|ağaç görünümünde çalışma komutları, bileşik belge komutları, bu pencereyi ayarlamak için komutlar
demanded|v.|talep görmek, talep edilmek, talep edilen miktar
cuff|n.|manşet
cosmos|n.|sistem, düzen, kainat
curfew|n.|yat borusu, sokağa çıkma yasağı, karartma zamanı
instructed|adj.|eğitim görmüş, eğitimli
notorious|adj.|adı çıkmış, kötü şöhretli
prague|n.|prag, oklahoma eyaletinde şehir, nebraska eyaletinde yerleşim yeri
streak|v.|rüzgar gibi geçmek, acele etmek, yol yol yapmak
equivalent|n.|eşdeğer, muadil
pitiful|adj.|acınacak, acınası
fin|n.|yüzgeç
greeting|n.|tebrik, selam
propaganda|n.|propaganda
doorstep|n.|basamak, kapı basamağı, eşik
hilda|n.|kadın ismi, güney carolina eyaletinde yerleşim yeri
butterflies|n.|kelebekler
fascinated|adj.|ağzı açık kalmış, büyülenmiş
jude|n.|12 havariden biri
beatrice|n.|kadın ismi, alabama eyaletinde şehir, nebraska eyaletinde şehir
miriam|n.|kadın ismi
dumping|n.|çöp yığını, boşaltım, damping
condo|n.|mülk, apartman dairesi
fearless|adj.|korkusuz
cripple|v.|sakatlamak, sakat
errand|n.|iş, sipariş, ayak işi
halls|n.|tennessee eyaletinde yerleşim yeri
imitates|expr.|beni taklit ediyor, o beni taklit ediyor
harley|n.|soyismi
ravi|n.|ravi nehri
sailed|expr.|atı alan üsküdar'ı geçti, o fırsatı teptin, o günler geçti
baking|n.|pişim, kızgın, pişirme
connecting|n.|bağlama
bourbon|n.|viski, mısır ve çavdar viskisi, muhafazakar partili
cathedral|n.|katedral, büyük kilise, başkilise
malone|n.|florida eyaletinde yerleşim yeri, new york eyaletinde yerleşim yeri
bong|v.|(saat vs) calmak, hortum kullanarak fıçı bira içmek, bong
tying|n.|bağlanım, bağlama, bağlayıcılığı bulunan
lists|n.|parmaklıklar, yarışma pisti, listeler
strangle|v.|boğmak
stripped|adj.|soyulmuş, yalın, sadeleştirilmiş
loans|n.|borçlar, ikrazlar
manchester|n.|connecticut eyaletinde şehir, georgia eyaletinde şehir, illinois eyaletinde yerleşim yeri
briefly|adv.|kısaca
tessa|n.|vergiden muaf özel tasarruf hesabı
unfinished|adj.|işlenmemiş, yarım kalmış, yarım
experimental|adj.|deneysel
greeks|n.|yunanlılar
lil|adj.|ufak, küçük
mainland|n.|ana kara, kara parçası, anakara
judgement|n.|yargı
stammers|n.|kekelemek
pike|n.|kargı, turnabalığı
liars|n.|yalancılar
slot|n.|yarık
amazon|n.|amazon
flooded|adj.|taşmış, su basmış, suyla kaplı
torment|n.|eziyet, azap
mermaid|n.|denizkızı, deniz kızı
rapist|n.|tecavüzcü, ırz düşmanı, mütecaviz
sanders|n.|kentucky eyaletinde şehir
triggered|adj.|tetiklenmiş, ateşlenmiş, tetikli
lisbon|n.|lizbon, connecticut eyaletinde şehir, iowa eyaletinde şehir
reader|n.|okur, okuyucu
keyboard|n.|klavye, org
roam|v.|aylak aylak dolaşmak
seventeen|n.|XVII, on yedi sayısı, on yedi
openly|adv.|açıkça
deacon|n.|diyakoz, papaza yardım eden kişi, yardımcı papaz
olga|n.|kadın ismi
jackpot|n.|jackpot, bingo, iskambilde pot
soaked|adj.|sırılsıklam, ıslatılmış, ıslanmış
printing|n.|basım, baskı, basma
yuck|interj.|iğrenme belirten ünlem, öğk
shorty|adj.|bücür
extract|v.|özünü çıkarmak, almak, diş çekmek
prostitutes|n.|yabancı uyruklu hayat kadınları
cherish|v.|değer vermek, kuşsütü ile beslemek, sevgi ile muamele etmek
logs|n.|toplantı kayıtları, horlamak, horul horul horlamak
takin|n.|doğu himalaya bölgesine özgü bir antilop türü
sponge|n.|sünger
bates|n.|bates-neyman modeli, missouri eyaletinde şehir
cuffs|n.|kelepçe
virginity|n.|bakirelik
torturing|n.|tazip, işkence, işkence etme
unity|n.|birlik
coop|n.|kümes
forge|v.|demir dövmek
morse|n.|mors, louisiana eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
guru|n.|hintli bilge, rehber, guru
tai|n.|tay, tai, tayland’da yaşayan etnik bir grup
skilled|adj.|yetenekli
insists|v.|ısrar etmek
calf|n.|buzağı
oof|n.|para
allowance|n.|izin, müsaade, harçlık
homosexual|adj.|homoseksüel
shapes|n.|eşkal, şekiller
rosemary|n.|hasalban, rozmarin, romarin
idle|adj.|başıboş
slaughtered|adj.|katledilmiş, maktül, bitkin
resent|v.|alınmak, içerlemek
cassandra|n.|kötülük habercisi, bir kadın ismi, karanlık kehanetleri dikkate alınmayan kimse
leaking|n.|sızdırma, sızma, sızdıran
likewise|adv.|aynı biçimde, aynı şekilde, keza
riddle|n.|bilmece
ghetto|n.|kenar mahalle, getto
sunglasses|n.|güneş gözlüğü
vega|n.|vega yıldızı, çalgı takımyıldızındaki en parlak yıldız, vega
newest|adj.|en yeni
valve|n.|valf, supap, kapakçık
geek|n.|eblek, moron, zeki ama anti-sosyal
fucks|v.|sikinde olmamak, sikimde değil, umurumda değil
gangsters|n.|gangsterler
pies|n.|tartlar
publisher|n.|yayınevi, editör, naşir
troubling|n.|rahatsız etme, sıkıntılı, tedirgin edici
trembling|n.|titreme, tir tir titreme, titrek
marathon|n.|maraton, florida eyaletinde şehir, iowa eyaletinde şehir
douche|v.|mikrop öldürmek amacıyla yıkama, antiseptik suyla yıkamak, duş yapmak
conducting|adj.|iletken
sundays|adv.|her pazar
shrieks|n.|sevinç çığlıkları
fiancee|n.|yavuklu (kız), nişanlı, nişanlı kız
burglar|n.|hırsız
spiders|n.|örümcekler
norway|n.|norveç, güney carolina eyaletinde yerleşim yeri, iowa eyaletinde şehir
crops|n.|mahsulat, kesikler, kırpıntılar
infant|n.|bebek, çocuk, küçük çocuk
falcon|n.|doğan
pursuing|n.|takip
humiliate|v.|aşağılamak, küçük düşürmek
hydrogen|n.|hidrojen
karaoke|v.|karaoke yapmak, karaoke bar, karaoke içeriği
encountered|adj.|mücadele vermiş, karşı karşıya gelmiş, kötü bir şeyle karşılaşmış
scope|n.|faaliyet alanı, kapsam
cultures|v.|yeni kültürlerle tanışmak, eski kültürler, kültür başkenti
speakers|n.|spikerler, konuşmacılar, hoparlörler
superstar|n.|as, süperstar, çok iyi oyuncu
orgasm|n.|orgazm
byron|n.|erkek ismi, georgia eyaletinde şehir, illinois eyaletinde şehir
gravy|n.|salça, yemek sosu, kolay kazanç
calculations|n.|hesaplamalar
vocal|adj.|sesli, vokal, sözlü
severely|adv.|ağır, ciddi olarak, şiddetle
hating|adj.|erkeklerden nefret eden, erkek düşmanı, eleştiri
mindy|n.|bir kadın ismi
boiled|adj.|kaynamış, kaynatılmış, kızgın
metaphor|n.|metafor, mecaz
kindergarten|n.|ana okulu, kreş
fades|v.|karartmak, soldurmak, rengi solmak
brazilian|n.|brezilyalı, brezilya dili, brezilya'ya özgü
devastating|adj.|yıkıcı
interfering|n.|karışma, müdahil, müdahale eden
dripping|n.|damlama, eriyerek akıp donmuş yağ damlası, pişirilen etten damlayan yağ
ops|n.|kooperatifler, perakendeci mübayaa kooperatifleri, özel kuvvetler
holden|adj.|ciro edilen, massachusetts eyaletinde yerleşim yeri, maine eyaletinde yerleşim yeri
suited|adj.|uygun, yeterli, uymuş
merciful|adj.|merhametli
hayley|n.|kadın ismi
affirmative|adj.|olumlu
runaway|n.|kaçak, firari
shoo|v.|yönlendirmek, kovmak, kışkışlamak
italians|n.|italyanlar
wales|n.|galler ülkesi, galler, kuzey dakota eyaletinde şehir
adapt|v.|adapte etmek, uyarlamak, uymak
renee|n.|kadın ismi
mal|n.|mal, laos ve tayland’da yaşayan etnik bir grup
smartest|v.|sızlamak, akıllı, zeki
blacks|n.|zenciler, siyahlar
struggled|v.|çabalamak, mücadele etmek, çabalama
prostitution|n.|fahişelik, orospuluk
payback|n.|geri ödeme
vintage|n.|bağ mahsulü, belirli bir yılın şarap mahsulü, devir
diapers|v.|bez yıkamak, yetişkin bezi, (bebek) altını doldurmak
killings|v.|cinayetlerle bağlantısı nedeniyle aranmak, töre cinayetleri, çocuk cinayetleri
courthouse|n.|adliye
tong|v.|maşayla saç yapmak, çin gizli derneği, çin menşeli bir siyasi parti
cubs|v.|yavrulamak, yavru, yavrukurt
surfing|n.|sörf
indiana|n.|amerika'da eyalet, pensilvanya eyaletinde yerleşim yeri
spotlight|v.|ilgi çekmek, sahne ışığı, spot lamba
frontier|n.|sınır, hudut
monte|n.|bul karayı al parayı oyunu
stocks|n.|gemi ızgarası, stoklar, hisse senetleri
patterson|n.|georgia eyaletinde şehir, iowa eyaletinde şehir, kaliforniya eyaletinde şehir
holiness|n.|kutsallık
denmark|n.|danimarka
isolation|n.|izolasyon, tecrit
starters|n.|bir öğünün ilk yemekleri, başlangıçlar
resigned|adj.|uysallık, istifa etmiş, mütevekkil
acquainted|adj.|haberdar olma, haberdar, tanışmış
meow|v.|miyavlamak, miyav, miyavlama
appearances|n.|zevahir, emareler, koşullar
loft|v.|yükseğe atmak, tavan arası, güvercinlik
snitch|v.|hakkında bilgi vermek, ihbar etmek, gammazlamak
ribbon|n.|kurdele
dares|v.|cüret etmek
greatness|n.|büyüklük
fallon|n.|nevada eyaletinde şehir
coolest|adj.|en serin, gelmiş geçmiş en havalı kişi
decency|n.|edep, anlayışlılık, uygunluk
mayday|n.|imdat işareti, telsizde imdat işareti, meydey
michigan|n.|amerika'da eyalet
reactor|n.|reaktör, tepkime odası, atom reaktörü
buckle|n.|toka
vanity|n.|gösteriş, beyhudelik
simmons|n.|politz and simmons tekniği
earning|n.|gelir, kar, kazanılan para
marriages|n.|evlilikler
docks|n.|gümrük ambarı
alleged|adj.|sözüm ona, sözde, iddia edilmiş
asap|expr.|olabildiğince çabuk
preparations|n.|hazırlıklar, müstahzar
bugging|n.|casus dinleme cihazı ile dinleme, böcekle dinleme
conquered|adj.|fethedilen, mazbut, fethedilmiş
cuckoo|v.|guguklamak, kuku, aptal
crib|n.|beşik
yogurt|n.|yoğurt
secondly|adv.|saniyen, ikinci olarak
nixon|n.|nevada eyaletinde şehir, teksas eyaletinde şehir
portland|n.|connecticut eyaletinde şehir, ingiltere'de yerleşim yeri, indiana eyaletinde şehir
fishy|adj.|balığı çok, şüpheli, balık gibi
flick|v.|fiske vurmak
scratched|adj.|çizili, çizilmiş, sıyrılmış
muffin|n.|çörek
hale|v.|sürüklemek, sağlam, zinde
tailor|n.|terzi
chimney|n.|baca
nuns|n.|rahibeler
packet|n.|paket
homemade|adj.|ev yapımı, yerli, evde yapılmış
farming|n.|çiftçilik
genuinely|adv.|gerçekten, gerçek olarak, canıgönülden
rumours|n.|dedikodular, söylentiler
daniels|n.|wisconsin eyaletinde yerleşim yeri
blouse|n.|bluz
kite|n.|çaylak, uçurtma
buses|n.|otobüsler
rhyme|n.|kafiye, uyak
invaded|adj.|istila edilmiş, istilaya uğramış
equation|n.|denge, eşitleme, muadele
transmitter|n.|aktarıcı, verici
morons|n.|kısmen geri zekalı kimse, moron, geri zekalı
lime|n.|kireç
rotting|n.|çürüme, dekorlama, kokuşma
remorse|n.|pişmanlık, vicdan azabı
otis|n.|kansas eyaletinde şehir, massachusetts eyaletinde yerleşim yeri, maine eyaletinde yerleşim yeri
marker|n.|işaret
aiming|n.|far ayarı, gezleme, nişan
adds|expr.|eşit değil, mantıklı, alan ekler
chores|n.|bir evin günlük işleri, bir çiftliğin günlük işleri, ev işleri
gem|v.|taşlarla süslemek, değerli nesne, taş
blasted|adj.|tahrip olmuş, allahın belası, lanet olası
grabs|v.|isteyen varsa almak, kapanın elinde kalmak, çabuk davranan alabilir
courageous|adj.|yürekli, cesur
determination|n.|saptama, kararlılık, azim
beaver|n.|kunduz
publishing|n.|yayıncılık
crickets|exclam.|aman yarabbim, aman tanrım, tam bir sessizlik hali
well-known|adj.|tanınmış
exercises|n.|alıştırmalar, egzersiz, çalışmalar
testament|n.|vasiyetname
apocalypse|n.|ortaya dökme, açığa vurma, keşif
phew|expr.|rahatsızlık/sabırsızlık/yorgunluk ünlemi
dicks|expr.|(kız arkadaşlar arasında) önce kız arkadaşlar, (kız arkadaşlar arasında) önce kızlar, kız kıza arkadaşlık erkeklerden önce gelir
paralyzed|adj.|kötürüm, felçli
headlines|n.|başlıklar
stripes|n.|şeritler
santos|n.|teksas eyaletinde şehir
breaths|n.|nefes, soluk
abort|v.|iptal etmek, çocuk düşürmek
heap|n.|öbek, yığın
ketchup|n.|ketçap
responded|expr.|yanıt yok
protects|expr.|tanrı çocukları ve sarhoşları korur, bizi mikroplardan korur, sabun bizi mikroplardan korur
tummy|n.|mide, kursak, karın
hog|v.|kamburlaştırmak, payından fazlasını almak, yelesini kısa kesmek
weeping|n.|ağlama, ağlayan
fragments|v.|parçalarına ayırmak, agreganın yumuşak parçaları, kaya parçaları
catastrophe|n.|sonuç, facia, afet
bp|n.|dış denge doğrusu, ödemeler dengesidoğrusu
churches|n.|kiliseler
pins|n.|bacaklar, kablo ucu
shaving|n.|tıraş
not-|pref.|arka anlamı veren ön ek, güney anlamı veren ön ek
legit|adj.|meşru, canlı oyun, yasal
targeted|adj.|hedeflenen, hedeflenmiş
simpler|adj.|daha basit, basit
noticing|adv.|fark etmeden, fark etmeksizin, fark ettim ki …
rover|n.|uzun mesafe hedefi (okçuluk), izci (ergin), serseri kimse
lars|n.|ev putu
moreover|adv.|dahası
releasing|n.|salma, serbest bırakma, serbest bırakan
fascist|n.|faşist
greta|n.|cam kanatlı kelebek
spitting|v.|çiseleme, tükürme, şişleme
colt|n.|tay, sıpa
tristan|n.|tristan
hardy|adj.|güçlü kuvvetli, acar, cüretkar
truce|n.|mütareke, fasıla, ara
plaza|n.|alan, plaza, çarşı yeri
bronze|v.|bronzlaştırmak, bronzlaşmak, bronz
guarded|adj.|tedbirli, korunan, tarafsız kimse
airline|n.|hava yolu, havayolu, düz hat
ramon|n.|kaliforniya eyaletinde şehir
incapable|adj.|kabiliyetsiz, aciz
punches|n.|yumruklar
hq|n.|kumanda merkezi
privately|adv.|başbaşa, özel olarak, şahsen
vatican|n.|vatikan
surround|v.|kuşatmak, etrafını sarmak, çevrelemek
barrett|n.|minnesota eyaletinde şehir, teksas eyaletinde şehir
edna|n.|kadın ismi, kansas eyaletinde şehir, teksas eyaletinde şehir
alvin|n.|illinois eyaletinde yerleşim yeri, teksas eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
consolation|n.|teselli
gutter|n.|oluk
lan|n.|lan, yerel ağ, yerel alan ağı
astonishing|adj.|hayrette bırakan, şaşılacak, şaşırtıcı
broker|n.|simsar, komisyoncu
seizure|n.|zapt, el koyma
fright|v.|korkutmak, korkunç tip, kılıksız kimse
leaning|n.|eğilim
mic|n.|mik, mikrofon
scarlett|n.|kadın ismi
berry|v.|dut toplamak, meyve toplamak, yumuşak meyve
lacking|adj.|eksik
verge|n.|sınır
lucifer|n.|sürtme ile tutuşan eski tür bir kibrit, şeytan, sabah yıldızı
contribute|v.|katkı yapmak, katkıda bulunmak
jewellery|n.|mücevherat
richards|n.|missouri eyaletinde yerleşim yeri
erotic|n.|erotik kimse, erosal, aşka dair
siblings|n.|kardeşler (abi ya da abla), kardeşler
est|n.|bilim ve teknoloji amaçlı ingilizce
cass|n.|bhtp deneyi, çin sosyal bilimler akademisi, michigan eyaletinde bölge
disk|n.|ağırşak, plak, kurs
op|n.|opus
comics|n.|karikatür, çizgi roman, resimli mizah dergileri
obstacle|n.|mani, engel
ale|n.|bir çeşit bira, bira, ingiliz birası içilen kasaba festivali
coral|n.|mercan
hamburger|n.|kıyma, sığır kıyması, hamburger
biscuit|n.|bisküvi
redemption|n.|kefaret, kurtarılma, paraya çevrilme
thug|n.|haydut, katil, şaki
concussion|n.|sarsıntı
martinez|n.|georgia eyaletinde şehir, kaliforniya eyaletinde şehir
disgust|n.|iğrenme
wright|n.|sanatçı, yapıcı, işçi
nsa|expr.|koşulsuz, ulusal güvenlik ajansı
arise|v.|arose - arisen, kaynaklanmak, kalkmak
celebrities|n.|ünlüler
kev|n.|modifiye araba
dolphins|n.|yunuslar, yunusbalıkları
kidneys|n.|böbrekler
leaked|adj.|sızdırmış, akmış, kaçak yapmış
solving|n.|çözme, çözüm, kulak tırmalayıcı
plasma|n.|kansu, plazma, kansıvı
singapore|n.|singapur
scram|v.|kirişi kırmak, çekip gitmek, basıp gitmek
regain|n.|geri kazanmak
conductor|n.|kondüktör
ministers|n.|vükela
gender|n.|cins, isim cinsi, cinsiyet
removing|n.|izale, oynatma, giderici
cocky|adj.|kendinden çok emin, ukala, kendini beğenmiş
richest|adj.|en zengin
deciding|n.|karar verme, kesin, karar veriyor
dispute|v.|çekişmek, tartışmak, tartışma
brute|n.|canavar, hayvan, vahşi adam
incidents|n.|vukuat
telly|n.|televizyon
capsule|n.|kapsül
chefs|expr.|herkes patron, herkes patron kesilmiş, bir işe elli kişi karışırsa …
psychopath|n.|ruh hastası, akıl hastası, psikopat
lire|n.|liret
bind|v.|ciltlemek, bağlamak
chops|n.|bir müzik aletini çalma becerisi, teknik beceri, kanal ağzı
crust|n.|kabuk, ekmek kabuğu
poorly|adj.|hasta, rahatsız, keyifsiz
weighs|v.|tartmak
bundle|n.|demet
vibrating|adj.|titreşimli, vibrasyon, titreşen
ricardo|n.|erkek ismi
encouraging|adj.|cesaretlendirici
polo|n.|polo, çevgen, illinois eyaletinde şehir
singers|n.|şarkıcılar
ada|n.|bir programlama dili, kansas eyaletinde şehir, minnesota eyaletinde şehir
meteor|n.|meteor
firmly|adv.|dümdüz, kesin olarak, sımsıkı
prettiest|adj.|en sevimli
hormones|n.|hormonlar
starboard|n.|sancak
chauffeur|n.|şoför
download|v.|indirmek
garrison|v.|garnizon kurmak, garnizon, iowa eyaletinde şehir
recovering|n.|ihya, geri alma, kendine gelme
heated|adj.|hararetli
cctv||kapalı devre televizyon
postcard|n.|kartpostal
convert|v.|dönüştürmek
sissy|n.|hanım evladı, muhallebi çocuğu, korkak
reef|n.|resif, sığ kayalık
treasury|n.|hazine
calmly|adv.|sakince
mathematics|n.|matematik
ups|n.|kesintisiz güç kaynağı
shameful|adj.|yüz kızartıcı
abbey|n.|manastır
strategic|adj.|stratejik
wrists|v.|bileklerini bağlamak, bileklerini kesmek, bileklerini keserek intihara teşebbüs etmek
payroll|n.|bordro
immense|adj.|harika, uçsuz bucaksız, çok büyük
heartless|adj.|kalpsiz
magnus|adj.|büyük
banged|adj.|mahvolmuş, canına okunmuş, haşat olmuş
montgomery|n.|alabama eyaletinde şehir, alabama'nın başkenti, batı virginia eyaletinde şehir
protector|n.|koruyucu
teller|n.|banka veznedarı, anlatan, banka memuru
raging|adj.|öfkeli, son derece, şiddetle devam eden ( yangın, fırtına vb.)
applying|expr.|uygulanıyor
mop|v.|yüzünü buruşturmak, paspas yapmak, paspaslamak
sol|n.|sol notası, koloit, güneş
atom|n.|atom
unload|v.|yükünü boşaltmak
detector|n.|bulucu, dedektör, algılayıcı
switching|n.|manevra, cereyan verme, anahtarlama
handles|n.|işleçler, işleyiciler
favorites|n.|sık kullanılanlar
stinky|adj.|kokmuş
norton|n.|kansas eyaletinde şehir, massachusetts eyaletinde yerleşim yeri, ohio eyaletinde şehir
regional|adj.|bölgesel
heil|adj.|sağlam
richer|adj.|daha zengin, zengin
secrecy|n.|gizlilik
thighs|n.|uyluklar
rigged|v.|donatılmak, ile donatılmak, şike
thesis|n.|tez, sav
consumed|adj.|tamamen harcanmış
ahold|n.|tutma, yakalama
tuned|adj.|ayarlanmış, ayarlı, akortlu
atlantis|n.|atlantis, florida eyaletinde şehir
repaired|adj.|tamir görmüş, onarılmış
leverage|n.|kaldıraç gücü, manivela gücü
winnie|n.|teksas eyaletinde şehir
weary|adj.|yorgun, bitap, bitkin
costa|n.|kosta
rue|v.|dizini dövmek, pişmanlık duymak, esefle anmak
cowboys|n.|kovboylar
employ|v.|işe almak, çalıştırmak
provoke|v.|kışkırtmak
stool|n.|dışkı, tabure
postpone|v.|ertelemek, ötelemek
extensive|adj.|yaygın, geniş, kapsamlı
beau|n.|aşık, sevgili, şık erkek
urgently|adv.|acil olarak, acilen
optimistic|adj.|iyimser
lotus|n.|nilüfer, nilüfer yaprağı şeklinde süs, hint lotusu
apologizing|n.|özür dileme, özür dileyerek
spooky|adj.|tuhaf (kimse), hayalet gibi, ürkütücü
skate|v.|kızak kaymak, patinaj yapmak, paten kaymak
maze|n.|şaşkınlık, hayret, labirent
arrests|n.|son tutuklama dalgası
dialing|n.|arama, arama tercihleri, çevirme
fireplace|n.|şömine
vicar|n.|papaz yardımcısı, vekil, piskopos vekili
beetle|n.|böcek, tokmak
horace|n.|horace, kansas eyaletinde şehir, kuzey dakota eyaletinde şehir
suspicions|n.|evham
stupidity|n.|ahmaklık, aptallık
restricted|adj.|sınırlı, kısıtlı
skating|n.|paten yapma, patinaj, kayma
pupil|n.|öğrenci
homo|n.|insan, adam, eşcinsel
thumbs|v.|kabul etmemek, kabul etmek, tam not almak
hostess|n.|garson kadın, konuk eden kadın, sunucu
cheng|n.|çin' e özgü nefesli bir çalgı
sneaky|adj.|sinsi
swollen|adj.|kabarık
por|n.|çong, kamboçya, tayland’da yaşayan etnik bir grup, kamboçya/tayland’da yaşayan etnik bir grup
unlocked|adj.|açık, kilitli olmayan, kilitsiz
eliza|n.|elıza, kadın ismi
gladys|n.|kadın ismi, sıçma
mixture|n.|karışım
diagnosed|adj.|teşhis edilmiş
vaughn|n.|new mexico eyaletinde yerleşim yeri
ri|n.|uzaktan yükleme sunucusu, uzak yükleme sunucusu
liberation|n.|özgürlük, özgürleşim, serbest kalma
nay|n.|menetme, olumsuz oy veren kimse, olumsuz oy
crows|n.|kargalar
rockets|n.|roketler
reindeer|n.|rengeyiği, ren geyiği
shampoo|v.|şampuanlamak, şampuanla yıkamak, şampuanlama
milton|n.|batı virginia eyaletinde yerleşim yeri, delaware eyaletinde şehir, florida eyaletinde şehir
mai|n.|yıllık ortalama artım
skiing|n.|kayak, kayakçılık, kayak yapma
overhead|adj.|havai
disturbance|n.|kargaşa, rahatsızlık, rahatsız etme
cohen|n.|cohen tekniği, cohen sendromu
spits|n.|kılıç şişde
crank|v.|krankla bağlamak, kıvırmak, krank kolu çevirmek
crocodile|n.|krokodil, timsah
bulls|n.|mercek, erkeklerin bekarlığa veda partisi, lumbuz
medals|n.|madalyalar
sierra|n.|sıradağ, dişli doruk, bir kadın ismi
motivation|n.|motivasyon
dangers|v.|gözünü budaktan esirgememek, gözünü budaktan sakınmamak, dış tehlikeler
exploring|n.|keşfetme, araştırılıyor
mist|n.|sis
galaxies|n.|gökadalar
ju|n.|japon güreşi, uluslararası ju-jitsu federasyonu
sculpture|n.|heykel
adrenaline|n.|adrenalin
allied|adj.|bağlaşık, müttefik
manor|n.|tımar, köşk, malikane
convoy|n.|konvoy
carly|n.|kadın ismi
elliott|n.|iowa eyaletinde şehir, illinois eyaletinde yerleşim yeri, kuzey dakota eyaletinde şehir
merit|n.|fazilet, erdem, liyakat
cutter|n.|kesici
stressful|adj.|stresli, gergin, vurgulu
forming|n.|oluşma, teşkil, şekil verme
bikini|n.|bikini
sway|v.|sallanmak (bir yandan öbür yana), salınmak, yönetim/kontrol
virgil|n.|güney dakota eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri, kansas eyaletinde şehir
soy|n.|soya
nell|n.|kadın ismi
salty|adj.|tuzlu
elf|n.|yaramaz çocuk, cin, cüce
belts|n.|emniyet kemeri, emniyet kemerlerinizi takın, kemerleri sıkmak
yvonne|n.|kadın ismi
disney|n.|oklahoma eyaletinde yerleşim yeri
contractor|n.|müteahhit
rodeo|n.|sığır toplama, rodeo
crackers|n.|bir tahtası eksik, çatlak, deli
playboy|n.|zampara, eğlence düşkünü erkek, pleyboy
arch|n.|kemer
operated|adj.|işletilen, ameliyat olmuş, kumandalı
crews|n.|jeofizik kara ekipleri
scanner|n.|tarayıcı
dads|n.|babalar
limbs|n.|kol ve bacaklar, aza
bathe|v.|yıkamak (yara vb), banyo yaptırmak, yıkamak
cardiac|n.|kalp ilacı, kalp hastalıklarıyla ilgi, kalp hastası
persuaded|adj.|ikna edilen, ikna edilmiş
argentina|n.|arjantin
velvet|n.|kadife
hyde|n.|ingiltere'de yerleşim yeri
stem|v.|-den gelmek, çıkmak, kök
rewarded|adj.|ödüllendirilmiş
taiwan|n.|tayvan
warfare|n.|savaş, harp, savaş hali
lakhs|n.|yüzbin, (bir şeyin, mecaz anlamda) yüz binlercesi, on üzeri beşe eşit miktar
filter|v.|süzmek, süzgeç, filtre
pumped|v.|istekli olmak, (bir şeye başlamaya) hazır olmak, hevesli olmak
sterling|n.|sterlin
gran|n.|nine, anneanne, büyükanne
fills|n.|doldurmalar, dolgular
disc|n.|disk
percentage|n.|yüzde
bravery|n.|cesurluk, yiğitlik
edges|n.|akşamdan kalma, kaba saba, sarhoş
diaper|n.|bebek bezi
lyle|n.|minnesota eyaletinde şehir
ida|n.|kadın ismi, louisiana eyaletinde yerleşim yeri
preserved|adj.|korunmuş, korunan, masun
sutton|n.|batı virginia eyaletinde yerleşim yeri, batı virginia eyaletinde şehir, ingiltere'de yerleşim yeri
katrina|n.|kadın ismi
champions|n.|şampiyonlar
partying|n.|bir partiye katılma, çok alkol alma, partileme
pd|n.|palladyumun simgesi
morality|n.|ahlaklılık
crate|n.|sandık, kafesli sandık
mina|n.|mina, mina kuşu, mine
complications|n.|komplikasyonlar
sausages|n.|domuz sosisi, mumbar dolması, sucuklu yumurta
smoothly|adv.|kolayca, pürüzsüzce, problem çıkarmadan
rafael|n.|kaliforniya eyaletinde şehir
cradle|n.|beşik
leopard|n.|leopar
chu|n.|çru, çu ru, çuru
gardner|n.|illinois eyaletinde yerleşim yeri, kansas eyaletinde şehir, kuzey dakota eyaletinde şehir
athens|n.|atina, alabama eyaletinde şehir, batı virginia eyaletinde yerleşim yeri
kramer|n.|kuzey dakota eyaletinde şehir
magnet|n.|mıknatıs
psychotic|n.|psikoz hastası, psikoza dönüşmüş, psikozdan ileri gelen
vaccine|adj.|aşı
motivated|adj.|harekete geçirilmiş, hareketlendirilmiş, motive
aggression|n.|saldırganlık
courses|n.|adet, yönler
willis|n.|kansas eyaletinde şehir
expanding|adj.|genişleyen
vance|n.|alabama eyaletinde şehir, güney carolina eyaletinde yerleşim yeri
bases|n.|düzlemler, bazlar
burglary|n.|hırsızlık
stumbled|v.|sendelemek, tökezlemek
buns|n.|kıç
confronted|adj.|yüzleştirilmiş
geneva|n.|cin, cenevre, alabama eyaletinde şehir
increasingly|adv.|gitgide artarak, gitgide, gittikçe artarak
sidewalk|n.|kaldırım
shady|adj.|gölgeli
defended|adj.|sıkı savunulan, iyi savunulan, iyi savunulmuş
resolution|n.|kararlılık, azim
chooses|n.|hakların temliki
tapped|adj.|yüklenmiş, içerisindeki sıvı boşaltılmış olan, döküm alınmış
exploding|n.|patlama
punks|v.|aşağılamak, toy, gangster
scenery|n.|manzara
hitch|v.|iliştirmek, topallamak, bağlanmak
severed|adj.|yarılmış, bölünmüş, paylaştırılmış
wink|v.|göz kırpmak, kırpmak
initially|adv.|başlangıçta, ilkin, baştan
assessment|n.|değerlendirme, değerleme
shredder|n.|kamış kırıcı, kağıt doğrayıcı, kağıt öğütücü
villains|n.|problem yaratan durum, kabadayı, hain
miners|n.|madenciler
introducing|n.|tanıtım, sunucu
focusing|n.|odaklama, bir şeye odaklanma, odaklanma
rainy|adj.|yağmurlu
amendment|n.|yasayı değiştirme, tadilat, iyileştirme
getaway|n.|kaçma, geçit, firar
recognised|adj.|bilinen, tanınan, onaylanmış
blackout|n.|baygınlık
leash|v.|birbirine bağlamak, bağlamak, iple bağlamak
muhammad|n.|hz muhammed
eyebrows|v.|kaşlarını kaldırmak, kaşlarını almak, kaşlarını çatmak
bouncing|n.|sıçrama, sürekli geri tepme, gürbüz
nipples|n.|göğüs uçları, meme uçları
raft|n.|sal
pharaoh|n.|firavun
pots|n.|saksılar, geleneksel telefon hizmetleri
refreshing|adj.|canlandırıcı
wandered|v.|başıboş dolaşmak, dolaşmak, amaçsızca dolaşmak
abel|n.|kabil ile habil, habil ile kabil, abel alevlenme noktası
confined|adj.|sınırlı, sınırlanmış, sınırlandırılmış
contagious|adj.|bulaşıcı
madeline|n.|kadın ismi
beijing|n.|pekin
frequently|adv.|sık sık
operational|adj.|çalıştırma, hazır, işletme
shakes|n.|frapeler
thanking|n.|teşekkür
suffers|v.|acı çekmek, (acı) çekmek, ıstırap çekmek
basil|n.|reyhan, çomak, fesleğen
babylon|n.|babil, new york eyaletinde yerleşim yeri
drilling|n.|sondaj
agencies|n.|acenteler
buffet|n.|büfe
farms|n.|çiftlikler
motives|n.|güdü türleri, mucip sebepler, satın alma nedenleri ve adetleri
cocoa|n.|kakao rengi, sütlü kakao, kakao
perception|n.|algı
targeting|n.|hedefleme, hedef belirleme, hedef tespiti
thudding|n.|pat sesi, keder, küt
blares|v.|söylemek, herkese ilan etmek, bangır bangır çalmak
dense|adj.|yoğun
pinned|adj.|iğneli, mıhlanmış, mıhlanık
pending|adj.|yakın, derdest, bir karara bağlanmamış
nod|v.|başı ile onaylamak, kafa sallamak (olumlu anlamda), başın öne eğilmesi
crunch|v.|çıtırdamak
stains|v.|leke bırakmak, leke çıkarmak, lekeleri çözmek
nervously|adv.|gergin biçimde, sinirli olarak, gergin/heyecanlı biçimde
caribbean|n.|karayipler, karayib denizi, karayip
bouquet|n.|çiçek demeti, deste, şarap kokusu
stabbing|n.|saplama, hacamat, bıçaklama
screws|v.|baskı altında tutmak, birisini sıkıştırmak, birini bir şeye zorlamak
boone|n.|iowa eyaletinde şehir, north carolina eyaletinde şehir, north carolina eyaletinde yerleşim yeri
philosopher|n.|filozof, düşünür, felsefeci
bulb|n.|çiçek soğanı, ampul
sinner|n.|rezil, günahlı, günahkar
ongoing|adj.|süregiden, sürmekte olan, süregitmekte olan
editing|n.|kurgu, düzenleme
veteran|adj.|eski kurt, emektar, kıdemli
drip|v.|damlamak, damlatmak
mara|n.|tkb
inspiring|adj.|ilham veren
gale|n.|mersin ağacı, fırtına, şiddetli rüzgar
flint|n.|taş, çakmaktaşı, mıcır
nova|n.|birden parlayan yıldız, nova, parlaklığı birdenbire artan yıldız
nevada|n.|nevada, amerika'da eyalet, iowa eyaletinde şehir
manning|n.|adam atama, adam yerleştirme, eleman yerleştirme
membership|n.|üyelik
puerto|n.|porto rikolu, portoriko, porto riko
raphael|n.|israfil
chalk|n.|tebeşir
liable|adj.|yükümlü, sorumlu
manuscript|n.|müsvedde, yazma, el yazısı
organised|adj.|organize, teşkilatlanmış, düzenlenmiş
clanging|n.|metal sesi, çınlama, şakırdayan
markets|n.|pazarlar, piyasalar
rama|n.|hinduizm'de ilahlaştırılmış bir kahraman, vişnu'nun üç avatarından birisi
austria|n.|avusturya
chocolates|expr.|hayat/yaşam sürprizlerle doludur, kutudan ne çıkacağını bilemezsin, bazen çalışmadığın yerden soru gelir
trafficking|n.|ticaret, karaborsacılık, kaçakçılık
philly|n.|philadelphia
unaware|adj.|habersiz
loot|v.|yağmalamak, yağma
perish|v.|donmak, mahvolmak, helak olmak (hayvan)
processed|adj.|işleme tabi tutulan, işlem görmüş, işlenmiş
clone|v.|klonlamak, klon, kopyala
whooshing|n.|vınlama sesi çıkarma
hangover|n.|akşamdan kalmışlık
flatter|v.|pohpohlamak, dalkavukluk etmek
wretch|n.|zavallı adam, alçak herif, adamcağız
weasel|n.|gelincik
columbia|n.|kolumbiya, alabama eyaletinde şehir, connecticut eyaletinde şehir
israeli|n.|israilli, israil, israil'e özgü
shatters|v.|kırmak, paramparça etmek, tuzla buz etmek
lace|n.|dantel
indication|n.|belirti
allan|n.|erkek ismi
drifting|adj.|ipsiz, ipsiz sapsız, serseri
grady|n.|new mexico eyaletinde yerleşim yeri
undress|v.|soyunmak, soymak
dolphin|n.|yunus balığı, yunus
faked|adj.|sahte
depart|v.|yola çıkmak
monument|n.|abide, anıt
tyres|n.|tekerlekler, lastikler
marissa|n.|illinois eyaletinde yerleşim yeri
lorraine|n.|kadın ismi, doğu fransa'da bölge, kansas eyaletinde şehir
pow|n.|savaş tutsağı, savaş esiri, üs
invade|v.|istila etmek
hazel|adj.|ela
rep|n.|nam, temsilci, ün
heavier|adj.|ağır, daha ağır
tart|adj.|mayhoş
mocking|n.|alay etme, alaycı
forgets|v.|unutmak
sinister|adj.|uğursuz
christy|n.|kadın ismi
judas|n.|hain, yehuda, gözetleme deliği
assemble|v.|toplaşmak, parçaları birleştirmek, birleşmek
shortcut|n.|kestirme yol, kısayol, kestirme
transformation|n.|dönüşüm, dönüştürme
posts|n.|reaktif dinleme noktaları, satış noktaları, becayiş
generosity|n.|cömertlik
amusement|n.|eğlendiren oyun veya uğraş
beta|n.|beta, sıralamada ikinci olan şey, yunan alfabesinin ikinci harfi
counseling|n.|rehberlik, danışma, danışmanlık
bobo|n.|sarhoş, zom, kafası güzel
honors|v.|ev sahipliği yapmak, askeri törenle karşılamak, şeref vermek
snatched|adj.|yakalanmış, kapılmış
phyllis|n.|kadın ismi
measured|adj.|ölçülü
gamma|n.|gamma, kontrast derecesi, gama
squeals|v.|cıyaklamak, cırlamak, cırlama
evidently|adv.|besbelli, apaçık, açıkça
mildred|n.|kadın ismi, kansas eyaletinde şehir
caitlin|n.|kadın ismi
dubai|n.|dubai
lantern|n.|fener
combine|v.|birleştirmek, birleşmek
trey|n.|üçlü, zar üçlüsü, üç
toughest|adj.|zorlu, çetin, zor
limp|v.|topallamak
implying|v.|ima etmek
matrix|n.|kalıp, rahim, matris
dots|n.|noktalar, nokta
evacuation|n.|tahliye
earliest|adj.|en eski, en erken
incompetent|n.|beceriksiz (kimse), eksik, istidatsız
closure|n.|kapanma, kapatma, kapama
descent|n.|alçalma, düşme, inme
parachute|n.|paraşüt
analyze|v.|incelemek, çözümlemek, analiz etmek
crushing|adj.|ezici
classmates|n.|sınıf arkadaşları
excessive|adj.|haddinden fazla, aşırı
tighter|adj.|daha sıkı, sıkı
hump|n.|kambur, kamburluk
fuzzy|adj.|havlı, çok tüylü (köpek vb), hatları belirsiz
tad|n.|küçük çocuk, azıcık miktar, az bir şey
punishing|n.|cezalandırma, yorucu
pageant|n.|gösteri alayı, alay, tören
wan|adj.|solgun, benzi atmış, soluk
reveals|v.|meydana çıkarmak, ortaya çıkarmak, açığa vurmak
wildlife|n.|yaban hayatı, vahşi hayvanlar, yabani hayvanlar
clare|n.|kadın ismi, ingiltere'de yerleşim yeri, iowa eyaletinde şehir
poking|n.|şişleme
rehearsing|n.|prova, prova yapma
homecoming|n.|yuvaya dönüş, eve dönüş, yıllık mezun toplantısı
swelling|n.|şişme, şiş, şişlik
shrieking|n.|çığlığa benzer ses çıkarma, acı çığlık atma
squawking|n.|viyak viyak
caine|n.|kokain
statues|n.|heykeller
practiced|adj.|pratik yapmış, deneyimli, tecrübeli
christianity|n.|hristiyanlık
hazard|n.|risk, tehlike
stretched|adj.|gergin
dea|n.|narkotik ajanı, uyuşturucuyla mücadele dairesi
slug|v.|tembellik etmek, birine okkalı bir yumruk atmak, sert vurmak
frustration|n.|hüsran
deception|n.|aldatma
lillian|n.|kadın ismi, alabama eyaletinde şehir
trespassing|n.|izinsiz girme, izinsiz giren, başkasının arsasına izinsiz girme
elimination|n.|eleme
comforting|v.|rahatlık sağlamak, rahatlatma, avutucu
len|n.|uzunluk, far camı
preach|v.|vaaz etmek, vaaz vermek, telkin etmek
practise|v.|pratik yapmak, alıştırma yapmak, etmek
damages|n.|zarar, zarar ziyan, tazminat
exits|n.|bütün çıkışları tutun, tüm çıkışları tutun
appointments|n.|atamalar, randevular, döşeme
significance|n.|önem
drummer|n.|trampetçi, davulcu, baterist
specimen|n.|örnek, numune
voodoo|v.|büyülemek, afrika büyüsü, put
cleo|n.|oklahoma eyaletinde yerleşim yeri
misunderstand|v.|yanlış anlamak
asthma|n.|astım
errands|n.|ayak işleri, günlük işler
hypocrite|n.|ikiyüzlü kimse, mürai, iki yüzlü
snorts|v.|burnundan solumak, homurdanmak, burnundan soluma
advocate|n.|avukat
cutie|n.|sevimli kız, çekici kız, tatlış
obtained|adj.|elde edilen, elde edilmiş, elde edildi
radioactive|adj.|radyoaktif
richmond|n.|ingiltere'de yerleşim yeri, indiana eyaletinde şehir, illinois eyaletinde yerleşim yeri
ideals|n.|ülke ideallerine bağlılık, asal idealler kümesi, maksimal sol idealler
apprentice|n.|çırak
unreasonable|adj.|mantıksız, akılsız
inmate|n.|başkası ile aynı evde oturan kimse, hapishanede yatan kimse, akıl hastanesinde bulunan kimse
siege|n.|kuşatma
cobra|n.|kobra, kobra yılanı
increases|v.|şekeri azmak, şekeri yükselmek, şekeri fırlamak
harbour|v.|barındırmak, liman
illegally|adv.|yasadışı olarak, kanunsuz bir şekilde, yasa dışı olarak
rattle|v.|tıngırdamak, takırdamak, çıngırak
trim|v.|kırpmak
noodle|n.|şehriye, erişte
antibiotics|n.|antibiyotikler, antibiyotik
mattered|v.|önemli olmak, madde, cisim
declaration|n.|beyanname, beyan
virtual|adj.|sanal, gerçek kuvveti olan, asıl
intuition|n.|içine doğma, önsezi, sezgi
revs|n.|devir sayısı
darcy|n.|darcy yasası
scales|n.|terazi
testified|adj.|ifadesine başvurulmuş
twenty-five|n.|yirmi beşli grup, yirmi beş tane olan, (bir şeylerin, birilerinin) yirmi beşi
bypass|v.|yanından geçmek, uğramamak, ikinci yol yapmak
pneumonia|n.|akciğer yangısı, saplıcan, satlıcan
manly|adj.|erkek, erkek gibi, yiğit
medicines|n.|ecza
slowing|n.|yavaşlama
groan|v.|inlemek
dungeon|n.|zindan
chaps|n.|çene, çeneyi kaplayan etli kısım, yüzün ön kısmı
consequence|n.|netice, sonuç
intercept|v.|engel olmak, yolunu kesip durdurmak, yolunu kesip yakalamak
badass|n.|çok havalı kimse, çok yetenekli veya güçlü kimse, agresif tip
examples|n.|örnekler
fists|n.|yumruk, yumruklar
substantial|adj.|varlıklı, önemli, azımsanmayacak (sayı/miktar)
brag|v.|övünmek, böbürlenmek
pitcher|n.|maşrapa, sürahi, ibrik
onboard|adj.|bütünleşik, yerleşik, araç üstü
amigo|n.|arkadaş, dost, yoldaş
courtyard|n.|iç bahçe, avlu
royalty|n.|telif hakkı ücreti, imtiyaz ücreti, kraliyet hanedanı
spontaneous|adj.|kendiliğinden olan
ca|n.|calcium, kanada alan uzantısı, sertifika yetkilisi ca
restroom|n.|tuvalet
peep|v.|gözetlemek, röntgencilik yapmak, kaçamak bakmak
negotiating|n.|görüşme, pazarlık etme, mütedavil
ache|v.|acımak, sızlamak, ağrımak
swat|v.|vurup ezmek, vurmak, beysbol sopası veya elle vurmak
emerge|v.|ortaya çıkmak, meydana çıkmak
gambler|n.|kumarbaz
references|n.|referanslar, yararlanılan kaynaklar, başvurular
bonjour|interj.|iyi günler, merhaba
darkest|adj.|en koyu
insecure|adj.|güvensiz, emniyetsiz
attendant|n.|görevli, görevli (bir hizmette bulunan)
sympathetic|adj.|birinin duygularını anlayıp paylaşan, sempatik, anlayışlı
heroine|n.|kadın kahraman, kahraman
choked|adj.|kısık
unidentified|adj.|kimliği belirlenemeyen, ne olduğu saptanamamış, belirlenemeyen
plumbing|n.|sıhhi tesisat
darker|adj.|koyu, daha koyu, daha karanlık
ariel|n.|erkek ismi, uranüs'ün dört büyük uydusunun en küçüğü, ariyel
crude|adj.|ham
dictionary|n.|sözlük
sparks|n.|kıvılcımlar, gemi telsizcisi, telsizci
auditions|n.|seçmeler
demo|v.|demo yapmak, örgüt toplantısı, demo
oppose|v.|karşı koymak
fingernails|v.|tırnaklarını boyamak, tırnaklarını yemek, dişiyle tırnağıyla tutunmak
mineral|n.|maden, madensel
collateral|n.|soydaş, rehin, tamamlayıcı teminat
istanbul|n.|istanbul
venom|n.|zehir
tempting|n.|çekicilik, cezbetme, çekici
relay|n.|yedek malzeme, röle
bamboo|n.|bambu
particle|n.|cisimcik, tanecik
torres|n.|avustralya ile yeni gine arasında bir boğaz, portekiz'de bir kasaba
broadcasting|n.|yayıncılık, neşir, yayım
banking|n.|bankacılık
reminding|n.|hatırlatma, hatırlatan
cassidy|n.|bir soyadı
ferguson|n.|iowa eyaletinde şehir, kentucky eyaletinde şehir, missouri eyaletinde şehir
estimated|adj.|tahmini
hebrew|n.|yahudi, musevi, ibranice
electronics|n.|elektronik bilimi, elektronik, elektronik aksam
octopus|n.|ahtapot
meaningful|adj.|manidar, manalı, anlamlı
stranded|adj.|sahile vurmuş, yolda kalmış, çıkmaza düşmüş
daytime|adj.|gündüz
dowry|n.|çeyiz
starved|adj.|açlıktan ölmüş
collision|n.|çarpışma
admitting|n.|olanak tanıyan, bir sorunun olduğunu kabullenmek ilk adımdır, söylemekten çekinmiyorum
comeback|n.|dönüş
hungarian|n.|macar
faculty|n.|fakülte
operative|n.|teknisyen, amele, işçi
liza|n.|kadın ismi
tenants|n.|yeni kiracılar, iştirak durumunda malik karı koca, kiracı derneği
revealing|n.|açığa vurma, açığa çıkarma, açık
ounce|n.|tekir, bir parça, 28,3 gram
mediterranean|n.|akdeniz
gadget|n.|dalgametre, makine, değersiz şeyler
paramedics|n.|tıbbi teknisyen, sağlık görevlileri
console|v.|avutmak, teselli etmek, konsol
cyril|n.|erkek ismi, oklahoma eyaletinde yerleşim yeri
drawers|n.|çekmeceler
caravan|v.|karavanla gezmek, kafile, kamyon
spinal|n.|belkemiğine ait
bummer|n.|serseri, otlakçı, aylak
crippled|adj.|kötürüm, sakat
bled|n.|reçine kusmalı kereste
defy|v.|küçümsemek, karşı koymak, dayanmak
luna|n.|ay, ay tanrıçası
herbs|n.|otlar, aktariye, şifalı otlar
queue|v.|kuyruğa girmek, kuyruk, sıra
blinded|adj.|karartılmış, sarhoş, uçmuş
studios|n.|ses stüdyoları
recess|n.|ara, girinti
countdown|n.|geriye doğru sayma, geri sayım, geriye sayım
dracula|n.|drakula
alarms|n.|uyarılar
gaining|n.|kazanma
quarterback|v.|sevk etmek, idare etmek, -i idare etmek
eminence|n.|itibar, yüksek yer, yükseklik
willingly|adv.|kendi isteğiyle, bayıla bayıla, seve seve
investigators|n.|araştırmacılar, tetkikçiler
speculation|n.|tahmin, kurgu, dayanaksız görüş
clearer|adj.|daha net
cheeky|adj.|arsız, yüzsüz
powerless|adj.|güçsüz
lapd|n.|los angeles polisi
cruelty|n.|zalimlik, gaddarlık, zulüm
external|adj.|dış, harici
quarantine|n.|karantina
shush|v.|susmak, susturmak
allegations|v.|suçlamaların merkezinde olmak, suçlamaların odağında olmak, iddiaları yalanlamak
tito|n.|teksas eyaletinde şehir
sands|n.|zaman, kumsal, kum taneleri
spelling|adj.|yazım
che|n.|çe, çin’de yaşayan etnik bir grup
headline|n.|manşet
tablet|n.|tablet
founder|n.|kurucu
gandhi|n.|gandhi barış ödülü
squash|n.|kabak
jets|n.|jet uçakları
saloon|n.|salon
tuition|n.|okul ücreti, ders ücreti, öğretme
tame|v.|evcilleştirmek, evcil
occasional|adj.|ara sıra olan, ara sıra meydana gelen, nadiren
apologized|v.|özür dilemek, af dilemek
clinical|adj.|klinik
serpent|n.|yılan takımyıldızı, kıvrık havai fişek, iblis
criticism|n.|tenkit, eleştiri
sawyer|n.|testereci, bıçkıcı, kansas eyaletinde şehir
fading|n.|açılma, solma, zayıflama
prop|v.|desteklemek, dayamak, pervane
shoved|adj.|itilip kakılmış
mend|v.|onarmak, tamir etmek
lonesome|adj.|yalnız
separately|adv.|ayrı olarak, ayrı ayrı
reg|n.|düzenleme, regülasyon, ayarlama
legion|n.|alay, kalabalık, lejyon
tsk|interj.|cık, olmaz
arabs|n.|araplar
accompanied|adj.|yanında, eşlik edilen, refakat edilen
tread|v.|trod - trodden/trod, ezmek, dans figürü yapmak
findings|n.|araç gereç, bulgular, hükümler
toronto|n.|güney dakota eyaletinde yerleşim yeri, iowa eyaletinde şehir, kansas eyaletinde şehir
exploit|v.|kendi çıkarı için kullanmak, faydalanmak, sömürmek
proposing|v.|önermek, teklif etmek
shi|n.|gölge balığı, han balığı, işkine
scorpion|n.|akrep
of-|v.|faydalanmak, bahsetmek, yüksek seviyeli simülasyon
curb|v.|zaptetmek, gemlemek
opium|n.|afyon
athletic|adj.|atletik
bombed|adj.|sarhoş, kafayı bulmuş
jumper|n.|kazak üzerine giyilen kolsuz elbise, atlamacı, jile
weaker|adj.|daha güçsüz, güçsüz
suing|n.|davaya ehliyet
bianca|n.|kadın ismi, biyanka
seminar|n.|seminer
confirms|v.|onaylamak, doğrulamak, tasdik etmek
commence|v.|başlatmak, başlamak
plains|n.|georgia eyaletinde şehir, kansas eyaletinde şehir, montana eyaletinde yerleşim yeri
readers|n.|okuyucular, okuma gözlüğü
neglected|adj.|bakımsız
tavern|n.|taverna
worthwhile|adj.|değer
morale|n.|manevi güç, içgücü, moral
cleaners|n.|temizleyici dükkanı
caviar|n.|balık yumurtası, havyar, türünün en iyisi olan şey
welcoming|n.|iyi/samimi karşılama, iyi/samimi (karşılama)
kimberly|n.|kadın ismi, idaho eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
evaluation|n.|değerlendirme
occurs|expr.|eğer herhangi bir sorun meydana gelirse, eğer herhangi bir problem olursa, titreşimin şiddeti
rituals|n.|yaşam ritüelleri, hristiyanlık inanışındaki ritüeller, hristiyan ritüelleri
morton|n.|illinois eyaletinde yerleşim yeri, minnesota eyaletinde şehir, mississippi eyaletinde şehir
disguised|adj.|gizlenmiş, gizlenen, maskelenmiş
precision|n.|kesinlik, hassasiyet
cube|n.|küp
revelation|n.|vahiy, ifşa
titanic|adj.|dev gibi, devasa, muazzam
realizing|n.|farkına varma, gerçekleştiren, farkına varan
doggy|n.|havhav, köpekçik, köpek
babbling|n.|gevezelik
dora|n.|kadın ismi, alabama eyaletinde şehir, new mexico eyaletinde yerleşim yeri
tenant|n.|kiracı
riches|n.|mal, sermaye, servet
diabetes|n.|şeker hastalığı
alternate|v.|sıra ile yapmak, değişimli olarak yapmak, değişimli
diversion|n.|sapma
effectively|adv.|etkili bir şekilde, etkileyici, etkin olarak
dedication|n.|adama, ithaf
wager|n.|bahis
companions|n.|(büyük iskender'in) kraliyet muhafız birliği
sinclair|n.|wyoming eyaletinde yerleşim yeri
bailed|adj.|kefaletle serbest bırakılmış, teminat olarak verilmiş, tevdi edilmiş
smelly|adj.|pis kokulu, kokmuş, ağır kokulu
ratings|n.|vergiler, derecelendirmeler
trench|n.|siper
cameraman|n.|alıcı yönetmeni, kameraman, kamera yönetmeni
dillon|n.|güney carolina eyaletinde şehir, kolorado eyaletinde şehir, montana eyaletinde şehir
hawkins|n.|teksas eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
stanton|n.|iowa eyaletinde şehir, kaliforniya eyaletinde şehir, kentucky eyaletinde şehir
edison|n.|georgia eyaletinde şehir, new jersey eyaletinde yerleşim yeri, nebraska eyaletinde yerleşim yeri
batter|v.|güm güm vurmak, hırpalamak, yağ un ve yumurta karışımı hamur
dye|n.|boya
abduction|n.|adam kaçırma
prospect|n.|olasılık
morrison|n.|illinois eyaletinde şehir, iowa eyaletinde şehir, kolorado eyaletinde şehir
brighter|n.|parlak
wider|adj.|daha geniş, geniş
alma|n.|kırım'dan karadeniz'e akan bir nehir, kanada'da bir şehir, alabama eyaletinde şehir
manslaughter|n.|kasıtsız öldürme, adam öldürme, kazara adam öldürme
remedy|n.|deva, çare
damp|n.|nem, rutubet, rutubetli
thigh|n.|oyluk, uyluk, but
cologne|n.|kolonya
accusation|n.|itham, suçlama
outsider|n.|dışarıdaki, aykırı tip, dışlanmış
serum|n.|serum
whats|interj.|ne
spaces|n.|aralıklar, boşluklar
oral|adj.|sözlü
shades|n.|güneş gözlüğü, hava, stor
woe|n.|keder, elem, üzüntü
elise|n.|kadın ismi
receipts|n.|makbuz, gelir, gelirler
alias|n.|sahte isim, takma isim, namı diğer
notified|adj.|tebliğ edilen, bilgililendirilmiş, onaylanan
apron|n.|önlük
kentucky|n.|amerika'da eyalet
vein|n.|damar
tonic|n.|tonik
squeaks|n.|gıcırtı
dim|v.|karartmak, loşlaştırmak, sönük
steep|adj.|dik, sarp
sod|v.|çimlemek, çimle kaplamak, bir alanı çim parçalarıyla kaplamak
presenting|n.|sunma, sunuş
cinderella|n.|külkedisi, güzelliği ve değeri anlaşılmamış kız, İhmal edilmiş kimse
cub|v.|yavrulamak, yavru, yavrukurt
chung|adj.|çekici, hoş
eyewitness|v.|bizzat gördüğü bir olaya tanıklık etmek, görgü şahidi, şahit
flattering|n.|pohpohlama, pohpohlayan, pohpohlayıcı
overdose|v.|aşırı dozda vermek, fazla miktarda ilaç verme, dozaşımı
kathleen|n.|georgia'da bir kent, kadın ismi, florida'da bir kent
doubled|adj.|iki kat, iki katına çıkarımış, ikiye katlanmış
suckers|expr.|intikam almak ahmaklar içindir
automobile|n.|otomobil
cain|n.|ayni ödeme, ortakçılık
loo|n.|yüznumara, ayak yolu, tuvalet
brittany|n.|kadın ismi, kuzeybatı fransa'da bölge
bullied|adj.|gözü korkutulmuş, sindirilmiş, korkutulmuş
humphrey|n.|new york eyaletinde yerleşim yeri, nebraska eyaletinde şehir
tyson|n.|agresif, aşırı sinirli
kidnapper|n.|adam kaçıran, adam kaçıran kimse, çocuk kaçıran
dispose|v.|atmak, anıklamak, düzenlemek
margarita|n.|inci (ispanyolca)
hash|v.|doğramak, karıştırıp tekrar pişirmek, kuşbaşı doğramak
grieving|adj.|matemli
initials|n.|monogram, marka, adın baş harfleri
hound|n.|tazı, av köpeği
boogie|v.|enerjik bir biçimde dans etmek, çılgınca dans etmek, tüymek
perp|n.|fail, suç işleyen
cloak|n.|pelerin
crabs|n.|pavurya, kasık biti
pastry|n.|hamur işi, pasta
successor|n.|varis, halef
hola|expr.|ispanyolca merhaba
cheerleader|n.|amigo, tribün lideri, amigo takımının üyesi
slips|v.|maskesi düşmek, debriyaj kaçırması, dönüşlerde aks şanzıman dışına kaçıyor
critics|n.|eleştirmenler
recruited|adj.|askere alınmış, işe alınan
macho|adj.|maço, kazak (erkek)
stunned|adj.|serseme dönmüş, sersemlemiş, buz kesilmiş
fuller|n.|çırpıcı, oluk (silahta/kılıçta), demirci yuvarlak alt baskısı
mornings|n.|sabahçı, sabahleyin, her sabah
accidental|adj.|tesadüfi, kazara olan, rastlantısal
convey|v.|iletmek
prototype|n.|asıl örnek, proto tip, ilk örnek
superiors|n.|amirler, üstler, üst rütbedeki komuta kademesi
barcelona|n.|barselona
fling|v.|flung - flung, fırlamak, girişmek
atoms|n.|atom
kidnappers|n.|adam kaçıranlar
cupcake|n.|küçük kek, kap kek, çekici kadın
athletes|n.|atletler, sporcular
warsaw|n.|varşova, illinois eyaletinde şehir, indiana eyaletinde şehir
pleasures|n.|dünyevi zevkler, yasak olan güzeldir, yasak olan çekicidir
ax|n.|balta
uptight|adj.|sinirli, gergin, sıkıntılı
inclined|adj.|meyilli, eğik, eğilimli
stockings|n.|şömine üzerine çorap asma, boynuzlanmak, sarı don/çorap giymek
scrooge|n.|paragöz, hasis, cimri
fingerprint|n.|parmak izi
harmed|v.|zedelenmek, birinden zarar gelmek, birinden kötülük gelmek
sensational|adj.|sansasyonel, heyecan uyandıran, hissi
jockey|v.|dalavere ile kandırmak, kandırmak, dolandırmak
mourn|v.|yas tutmak
intercom|n.|dahili telefon, diyafon, dahili telefon sistemi
tory|n.|ingiliz muhafazakar partisi, ingiliz muhafazakar parti üyesi, kanada muhafazakar partisi
penthouse|n.|sundurma, teras katı, çekmekat
eileen|n.|kadın ismi, wisconsin eyaletinde yerleşim yeri
quack|v.|vaklamak, vakvaklamak, ördek sesi çıkarmak
peck|v.|gagalamak
gospel|n.|müjde, hakikat, bir inanç sisteminin temel ilkeleri
presumably|adv.|galiba, muhtemelen, tahminen
signatures|n.|ayırdedici özellikler, imzalar
aspects|n.|bakış açıları
assumption|n.|sanı, farzetme, varsayım
rumbles|v.|gümbürdemek, gürlemek, gümbürtü
hugging|n.|kucaklama, sarılma
sideways|adj.|yan, yanlamasına, yan tarafa
theodore|n.|alabama eyaletinde şehir
organisation|n.|organizasyon, kuruluş, örgüt
lowered|adj.|inik, alçaltılmış
ct|n.|bilgisayarlı tomografi
jaws|n.|ağız
troll|v.|suda oltayı çekerek balık tutmak, oltayla balık tutmak, oltayı suda sürükleyerek balık tutmak
squid|n.|mürekkep balığı, mürekkepbalığı, supya
designers|n.|tasarımcılar
mushroom|n.|mantar
freeway|n.|otoban
believer|n.|inanan
possessions|n.|varlık, var, mal mülk
tunes|v.|şeytana kanmak, şeytana uymak
tornado|n.|kasırga
cowardly|adj.|ödlek
notch|v.|çentmek, çentik, kertik
routes|n.|yollar
winters|n.|kaliforniya eyaletinde şehir, teksas eyaletinde şehir
elijah|n.|erkek ismi, ilyas
annoy|v.|rahatsız etmek, sinirlendirmek, can sıkmak
loaf|v.|kaytarmak, somun, ekmek somunu
commercials|n.|reklam kuşağı
idiotic|adj.|budala, aptalca, dangalak
inconvenience|n.|zahmet
plum|n.|erik
solicitor|n.|avukat
amnesia|n.|bellek yitimi, unutkanlık, bellek kaybı
distinct|adj.|belirgin
sweeping|n.|yeterince fark gözetmeyen, süpürme, temizleme
arson|n.|yangın çıkarma, kundakçılık, kasten yangın çıkarma
doubted|v.|kuşkulanmak, şüphelenmek, şüphe
furthermore|adv.|üstelik, buna ek olarak, bundan başka
quarry|v.|taş ocağından çıkarmak, taşocağı, taş ocağı
puss|n.|yüz, surat, cerahat
farts|n.|sanat sepet
depot|n.|depo
evenings|adv.|akşamları
ole|n.|ole
circulation|n.|sürüm, kan dolaşımı, akıntı
socialist|n.|toplumcu, sosyalist, sosyalizme özgü
melinda|n.|kadın ismi
dryer|n.|kurutucu madde, kurutma makinesi, kurutucu
mutters|v.|mırıldamak, fısıldamak, homurdanmak
vomiting|n.|kusma, istifrağ
brock|n.|nebraska eyaletinde yerleşim yeri
fei|n.|uluslararası binicilik federasyonu
moody|n.|karamsar kimse, kaprisli, karamsar
donated|adj.|bağışlanmış, hibe edilmiş, bağış olarak verilen
reich|n.|alman hükümeti, alman toprağı, kutsal roma imparatorluğu
receiver|n.|alıcı
semen|n.|meni
converted|adj.|çevrilen, çevrilmiş, dönmüş
rags|n.|eski püskü giysi, yırtık pırtık giysi, eski püskü giysiler
harness|v.|koşum takmak, koşum, koşum takımı
slate|v.|cezalandırmak, şiddetle eleştirmek, kınamak
padre|n.|ordu papazı, papaz, peder
necessity|n.|gereklilik, gereksinim, zorunluluk
orderly|n.|yazıcı, hastane hademesi, emir eri
assassins|n.|haşhaşiler
scold|v.|azarlamak
certainty|n.|kesinlik
marian|n.|kadın ismi, hazreti meryeme ait
knox|n.|indiana eyaletinde şehir, kuzey dakota eyaletinde şehir, maine eyaletinde yerleşim yeri
upright|adj.|dik
trek|v.|göçmek, öküz arabasıyla yol almak, kağnı ile gitmek
patron|v.|korumak, efendi, hami
reborn|adj.|yeniden doğmuş, yeniden canlanmış, ruhen veya duygusal açıdan yenilenmiş
reel|n.|makara
typewriter|n.|daktilo
babes|v.|büyümüş de küçülmüş, çocuktan al haberi, (çocuk) cevher yumurtlamak
sorrows|v.|efkar dağıtmak, alkole sığınmak, içerek sorunlarını unutmaya çalışmak
utmost|n.|elinden gelen çaba, son nokta, en yüksek
patsy|n.|alay konusu tip, kadınsı erkek, kurban
governments|n.|hükümetlerin meşruluğu, devletin kolu uzundur, devletin eli uzundur
privileges|n.|ayrıcalıklar
throats|v.|boğaz boğaza gelmek, birbirlerinin boğazına sarılmak, gırtlak gırtlağa gelmek
remotely|adv.|uzaktan, az bir miktara kadar
glee|n.|keyif, çok sesli şarkı, neşe
revolver|n.|tabanca
woof|v.|havlamak, ulumak, dokuma atkı
brunch|n.|geç yapılan kahvaltı, kahvaltı ile öğle yemeği birleştirilen öğün, kuşluk yemeği
dwell|v.|ikamet etmek
coyote|n.|kırkurdu, kır kurdu, çakal
squat|v.|çömelmek, bodur
manic|adj.|manyak, deli gibi, çılgın
groove|n.|oluk, yiv
bangkok|n.|bangkok
uncovered|adj.|açık, çıplak, karşılıksız
mailbox|n.|mektup kutusu, posta kutusu, mailbox
objections|expr.|kuzu kuzu, İtirazım yok, itirazlarda bulunmak
lynch|v.|linç etmek, linç, kentucky eyaletinde şehir
scrape|v.|kazıyarak temizlemek, sıyrık, kazıma sesi
commandant|n.|kumandan, komutan, amir
swings|v.|çocukları salıncakların civarından görmek, salıncakta salllanmak, çocukların kullanımı için salıncaklar
conventional|adj.|geleneksel
stockholm|n.|güney dakota eyaletinde yerleşim yeri, maine eyaletinde yerleşim yeri, new york eyaletinde yerleşim yeri
raises|n.|artışlar
transaction|n.|işlem
iced|n.|üzerine krema sürülmüş (kek), buzlu, buzlanmış
paulo|n.|sao paulo tifusu
ignition|n.|kontak, ateşleme
beaches|n.|kum plajlar, kumsallar, buralarda iyi bir plaj var mı?
interpol|n.|interpol
epidemic|n.|salgın, salgın hastalık
honoured|adj.|muazzez, onurlu, onur duymuş
shaggy|adj.|taranmamış, yontulmamış, kaba tüylü
policies|n.|poliçeler, ilkeler, politikalar
statistics|n.|sayımbilim, sayıbilim, ihsaiyat
shattering|n.|kırma, bozucu, ezici
bah|n.|kendini beğenmiş mevki sahibi memur, boku yemiş bir kıçı kırık, malezya’da yaşayan etnik bir grup
intercourse|n.|münasebet, görüşme, cinsel ilişki
charms|n.|nazarlıklar, cazibe, güzellik
flashing|n.|parlama, yağmur sularına karşı konulan saç örtü, etek
destructive|adj.|yıkıcı
grilled|adj.|ızgara yapılmış, kızarmış, ızgara
oregon|n.|amerika'da eyalet, illinois eyaletinde şehir, missouri eyaletinde şehir
copied|adj.|kopyalanmış, kopyalanan, kopyalandı
hookers|v.|sokakta fahişe peşinde olmak
paycheck|n.|maaş çeki
solitude|n.|yalnızlık
panther|n.|panter
performances|v.|icraatta bulunmak, wipo icralar ve fonogramlar andlaşması (1996), mahfazaların ses yalıtım performansları
exhausting|n.|tüketme, yorucu, zahmetli
lambert|n.|lambert, eski bir parlaklık birimi, mississippi eyaletinde yerleşim yeri
omega|n.|son, yunan alfabesinin son harfi, omega
belgium|n.|belçika
stationed|v.|atanmak, konuşlu konvansiyonel silahlı kuvvetler, kara konuşlu
yankees|n.|amerikalı, yanki, (kuzey) amerikalı
liability|n.|sorumluluk, yükümlülük
whichever|adj.|hangi, herhangi, hangisi
hunk|n.|iri dilim, iri parça, iri kıyım
trout|n.|alabalık
crystals|n.|kristaller, haya, testis
learns|n.|ezberci (öğrenci), hiçbir zaman, asla
repent|v.|tövbe etmek, yerinmek, pişman olmak
prosperity|n.|refah
literary|adj.|edebi, yazınsal
assembled|adj.|çatma, toplanan, mecmu
ounces|n.|tekir, bir parça, 28,3 gram
martyr|n.|şehit
northwest|n.|kuzeybatı, kuzey batı, north carolina eyaletinde yerleşim yeri
connecticut|n.|amerika'da eyalet
privileged|adj.|ayrıcalıklı, imtiyazlı
webster|n.|florida eyaletinde şehir, güney dakota eyaletinde şehir, iowa eyaletinde şehir
excess|n.|aşırılık, fazlalık, aşırıya kaçma
unemployment|n.|işsizlik
viking|n.|korsan, viking, zor kullanmak
blackmailing|n.|şantaj
munich|n.|münich, münih, kuzey dakota eyaletinde şehir
install|v.|kurmak
arrogance|n.|kibir
jeopardy|n.|nazik durum, tehlike, risk
hacker|n.|bilgisayar korsanı, çökertici, korsan
tongues|n.|zikir çekerken çıkarılan sesler
pleases|expr.|inşallah
reset|v.|reset - reset, yerleştirmek, tekrar yerine takmak
risen|v.|yükselmek, kalkık, yükselmiş
dependent|adj.|bağımlı
sued|adj.|dava açılmış, davacı
perkins|n.|oklahoma eyaletinde yerleşim yeri, oklahoma eyaletinde şehir
goons|n.|kiralık katil, kundakçı, şavalak
milady|n.|ingiliz asilzadesi kadın, hanımım
wolfe|n.|teksas eyaletinde şehir
abnormal|adj.|anormal
bandage|v.|bandajlamak, sargı, bandaj
heed|v.|bakmak, önemsemek, aldırmak
mabel|n.|kadın ismi, minnesota eyaletinde şehir
pronounced|adj.|aşikar, belli, belirgin
bullying|n.|zorbalık
charter|v.|berat vermek, vermek (patent), patent vermek
shelley|n.|idaho eyaletinde şehir
turks|n.|türkler
litter|v.|karıştırmak, ahırda hayvanın altına yataklık ot sermek, doğurmak
standby|n.|bekleme, destek, hazırda bekleyen
ltd|n.|sınırlı sorumlu özel işletme, ltd. şti, san.tic.ltd.şti.
peaches|n.|şeftaliler
angles|n.|köşebentler
baths|n.|hamamlar, havuz (kapalı), hamam
generate|v.|meydana getirmek, oluşturmak, üretmek
cobb|n.|georgia eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
residue|n.|tortu
composed|adj.|sakin
paco|n.|pako
kilo|n.|kilogram, kilo
immigrants|n.|göçmenler
probable|adj.|olası, muhtemel
enjoys|v.|tadını çıkarmak, zevk almak
seeks|v.|aramak
newman|n.|illinois eyaletinde şehir, kaliforniya eyaletinde şehir
vicinity|n.|dolay, yakın yer, semt
flank|v.|yan saldırısı yapmak, yanmak, yanında olmak
clint|n.|teksas eyaletinde şehir
functioning|n.|çalıştırma, işleyiş, faal
predictable|adj.|önceden kestirilebilir, tahmin edilebilir, öngörülebilir
scrambled|adj.|çırpılmış, kafası karışmış
expansion|n.|genleşme
pittsburgh|n.|pensilvanya eyaletinde şehir
angus|n.|etçi bir sığır ırkı, iskoçya'da bölge
natives|n.|afrika yerlileri, yerliler
bing|n.|tecrit odası, kömür ocaklarından çıkartılan atık madde
scarlet|n.|al, kırmızı, kızıl
itchy|adj.|kaşınan, kaşıntılı
stirring|n.|kıpırtı, heyecanlı, heyecan verici
bedrooms|n.|yatak odaları
structures|n.|yapılar, inşaat
penn|n.|pensilvanya eyaletinde yerleşim yeri
ensign|n.|sancak, simge, işaret
barrels|n.|balya, varil
voters|n.|seçmenler
madeleine|n.|bir tür şekerli çörek
geoff|n.|en iyi derece
haste|n.|telaş, acele
existing|adj.|mevcut
mcdonald|n.|kansas eyaletinde şehir, north carolina eyaletinde yerleşim yeri, ohio eyaletinde yerleşim yeri
commotion|n.|kargaşa
belonging|n.|eşya, aidiyet, ait olma
extinct|adj.|battal, yok olmuş, bitmiş
joints|n.|bağlantılar, eklemler
bumper|n.|ağzına kadar dolu bardak, bereketli şey, çamurluk
mao|n.|mao
mare|n.|kısrak, aydaki karanlık bölge, kötü durum
coleman|n.|florida eyaletinde şehir, georgia eyaletinde şehir, michigan eyaletinde şehir
influenced|adj.|müteessir, etkilenmiş
heist|v.|çalmak, soymak, soygun yapmak
cynical|adj.|kinik, alaycı, insani iyiliğe inanmayan
input|n.|giriş, girdi
recite|v.|nakletmek, anlatmak, sayıp dökmek
cary|n.|kary, illinois eyaletinde yerleşim yeri, mississippi eyaletinde yerleşim yeri
eagles|n.|kartal gibi yırtıcı kuşlar, pensilvanya eyaletinde yerleşim yeri
expired|adj.|nefes verilen, ekspire edilen, süresi dolmuş
palms|expr.|palmiyeler siyah, el içlerinde hiperkeratoz, avuç içleri yukarı bakacak şekilde
slash|v.|azarlamak, yarmak, yırtmak
bottoms|n.|tortu, alt kenarlar, dip tortu
columbus|n.|georgia eyaletinde şehir, illinois eyaletinde yerleşim yeri, indiana eyaletinde şehir
exaggerate|v.|abartmak
l-|pref.|levorotatuvar
guided|adj.|rehberli/rehber eşliğinde, güdümlü
pineapple|n.|ananas
ankles|adv.|topuklarına kadar
morals|n.|ahlak
builds|expr.|garip kuşun yuvasını allah yapar, slaytlar yerleştirilmiş, slaytlar yerleştirilmemiş
colleen|n.|kız, irlandalı kız
posing|n.|fiyaka, şekil yapma
fireman|n.|itfaiye eri, ateşçi, itfaiyeci
thorn|n.|diken
communities|n.|topluluklar, toplumlar
lawson|n.|missouri eyaletinde yerleşim yeri, missouri eyaletinde şehir
workout|v.|çalışarak elde etmek, deneme, antrenman
extraterrestrial|adj.|dünya dışından gelen, dünya dışı
conceived|adj.|tasarlanmış, düşünülmüş
tightly|adv.|sıkı sıkı
orlando|n.|florida eyaletinde şehir, oklahoma eyaletinde yerleşim yeri
tennessee|n.|amerika'da eyalet, illinois eyaletinde yerleşim yeri
fraser|n.|iowa eyaletinde şehir, kolorado eyaletinde şehir, michigan eyaletinde şehir
sleeves|v.|kolları sıvamak, kollarını sıvamak, paçaları sıvamak
vacant|adj.|varissiz, terkedilmiş, yapılacak iş olmayan
infantry|n.|piyade
booking|n.|rezervasyon
oranges|n.|portakallar
rhodes|n.|rodos, iowa eyaletinde şehir
breakup|n.|bozulma, son, parçalanma
layla|n.|leyla ile mecnunu, leyla ile mecnun
purity|n.|saflık
honourable|adj.|onurlu
militia|n.|milis, milis kuvvetleri
mechanics|n.|teknik, makine bilimi, mekanik
mackenzie|n.|missouri eyaletinde yerleşim yeri
bronx|n.|yuha, dil çıkarmak, zort çekmek
realizes|v.|gerçekleştirmek, farkına varmak
hasty|adj.|aceleci
colorful|adj.|rengarenk, renkli
ramp|n.|rampa
boulevard|n.|bulvar
intriguing|n.|entrikacı, düzenbaz, dalavereci
rook|v.|kumarda hile yapmak, hile ile kapmak, dolandırmak
atm|n.|otomatik vezne makinası, bankamatik, otomatik vezne
acquire|v.|elde etmek, edinmek
necks|n.|boyun
sinners|n.|rezil, günahlı, günahkar
gents|n.|erkekler tuvaleti
episodes|n.|hırıltı atakları, rekküren jeneralize tonik klonik nöbetler, tekrarlayan jeneralize tonik klonik nöbetler
oswald|n.|oswald-fenske ağdalılıkölçeri, oswald-de waele-nutting modeli, oswalt katsayısı
dedicate|v.|adamak, ithaf etmek
rests|expr.|karar bana kalmış, takdir türk milletinindir, egemenlik kayıtsız şartsız milletindir
pi|n.|pi sayısı, özel dedektif, pi
milord|n.|ingiliz asilzadesi
debut|v.|ilk defa sahne almak, sahneye ilk çıkış, başlangıç
interviewing|n.|röportaj yapma, karşılıklı görüşme, mülakat
occupy|v.|işgal etmek, meşgul etmek
aimed|v.|hedeflenmek, yönelik, -i hedeflemiş
emerged|adj.|sonuç olarak anlaşılmış, hasıl olmuş, su yüzüne çıkmış
sloan|n.|iowa eyaletinde şehir, nevada eyaletinde şehir
restraining|n.|zapt, men edici, kısıtlayıcı
cod|v.|sazanlamak, dalga geçmek, işletmek
clarity|n.|berraklık, açıklık
daft|adj.|pervasız, kaçık, arsız
islamic|n.|müslüman, islam'a ait, islami
calculated|adj.|hesaplanmış, hesaplanan
lakes|n.|göller
grumpy|adj.|huysuz
eddy|v.|anafor yapmak, girdap, anafor
consulting|adj.|danışman, danışma, danışmanlık
obstacles|n.|engeller
pesos|n.|ispanyol parası
nicolas|n.|lgv, lenfogranüloma venerum enfeksiyonu
plotting|n.|çizim yapma, çizme, çizim
infirmary|n.|revir
sermon|n.|vaaz
manipulated|adj.|ayarlanmış
scratches|adj.|çizik çizik, boğazım kaşınıyor, kalıp çizikleri
critic|n.|eleştirmen
greasy|adj.|yapışkan, kaygan, yağlanmış
zealand|n.|yeni zelanda doları, yeni zelanda, yeni zelandalı
supports|n.|kısmi bozulma, destekler
anatomy|n.|inceleme, analiz, vücut yapısı
agreeing|n.|kabul eden
straightforward|adj.|onat, hilesiz, açık
prejudice|n.|önyargı
placing|n.|tahsisli satış, yerleştirme, yerine koyma
flare|v.|titrek ışık vermek, alevlenmek, ışımak
milky|adj.|sütlü
premiere|v.|galasını yapmak, primadonna, prömiyer
glamorous|adj.|romantik bir çekiciliği olan, göz alıcı, göz kamaştırıcı
cinnamon|n.|tarçın, tarçın ağacı, tarçıni
syd|n.|pink floyd'un efsane gitaristi
referee|n.|hakem
threshold|n.|eşik
civilisation|n.|medeniyet, uygarlık
sensor|n.|alıcı, duyaç, algılayıcı
tends|expr.|o hırsızlık yapma eğilimindedir
louisa|n.|kadın ismi, kentucky eyaletinde şehir, virginia eyaletinde yerleşim yeri
savages|n.|barbarlar, vahşiler
torpedo|n.|torpido, torpil
ere|n.|önce, evvel
housewife|n.|ev hanımı, ev kadını
tours|n.|fransa'da bir şehir
fossil|v.|taşlaşmak, köhneleşmek, fosilleşmek
replied|adj.|yanıtlanmış, cevaplanmış
abdomen|n.|batın, karın
soak|v.|sırılsıklam etmek, sırılsıklam olmak
contestants|n.|kazanan yarışmacılar, ilk yarışmacılar
stretching|n.|esnetme, germe, gerinme
princes|n.|prensler
hoffman|n.|illinois eyaletinde yerleşim yeri, minnesota eyaletinde şehir, oklahoma eyaletinde yerleşim yeri
truman|n.|minnesota eyaletinde şehir
bumps|v.|tüyleri diken diken olmak, tüyleri ürpermek, tüylerin ürpermesi
educational|adj.|eğitsel, eğitimsel, eğitici
outfits|v.|donatmak, teçhiz etmek, donatı
resurrection|n.|yeniden ortaya çıkma, diriliş, yeniden canlanma
politically|adv.|siyasi olarak, kurnazca, siyaseten
pratt|n.|aptal, batı virginia eyaletinde yerleşim yeri, kansas eyaletinde şehir
whoosh|v.|vınlamak, ıslık, hız sesi
ds|n.|ds kiti, ds ünitesi, ds nesne sayısı
wiser|n.|akıllı, daha akıllı
rejection|n.|reddetme, kabul etmeme/edilmeme, ret
clutch|v.|kavramak, debriyaj
fusion|n.|füzyon
gloomy|adj.|kasvetli
madly|adv.|delicesine, çılgınca
cambridge|n.|illinois eyaletinde yerleşim yeri, iowa eyaletinde şehir, ingiltere'de şehir
cocktails|n.|kokteyller
lighthouse|n.|deniz feneri, fener
treatments|n.|yeni tedaviler, alüminyum alaşımlarının anodik işlemleri, dayanç artırıcı ısıl işlemler
chronic|adj.|kronik, müzmin
fluids|n.|akışkanlar, sıvılar
deleted|adj.|çıkarılmış, silme tarihi, silinen
sustain|v.|güç vermek, ayakta tutmak, uğramak (kötü bir şeye)
stanford|n.|illinois eyaletinde yerleşim yeri, kentucky eyaletinde şehir, montana eyaletinde yerleşim yeri
buyers|n.|yurtiçi alıcılar
valet|v.|uşaklık yapmak, uşak, erkek hizmetçi
nobel|v.|nobel ödülü kazanmak, nobel ödülü almak, nobel ödülleri
sank|adj.|batmış
southeast|n.|keşişleme, güneydoğu, güneydoğudan gelen
condemn|v.|mahkum etmek, ayıplamak, kınamak
resemblance|n.|benzerlik
suicidal|adj.|intihara meyilli, intihara eğilimli
wed|v.|wed/wedded - wed/wedded, bağlanmak, ile evlendirmek
packages|n.|paketler
taped|adj.|bantlanmış, bantlı, görüntülenmiş/kasede alınmış
avatar|n.|tanrının insan bedeninde vücut bulması, kişiyi simgeleyen resim veya simge
wireless|adj.|telsiz
paddle|n.|kısa kürek
lice|n.|bitler
tablets|n.|tabletler
spreads|n.|kredi temerrüt swap primleri
itch|v.|kaşınmak
gibberish|n.|saçmalık, konuşmaya benzeyen anlamsız sesler, abuk sabuk söz
ingredient|n.|cüz, bir şeyin terkibine giren madde, bileşim maddesi
prevented|adj.|önlenen, önlenmiş
withdrawal|n.|bırakma, vazgeçme, geri çekilme
porno|n.|porno
pry|v.|merakla bakmak, gözetlemek, koparmak
sexuality|n.|cinsellik
br|n.|bromun simgesi
considerate|adj.|düşünceli, hürmetkar
sovereign|n.|hükümdar, kral, padişah gibi taht sahibi devlet başkanı, egemen
pas|n.|pas, adım, dans
cadet|n.|en küçük erkek çocuk, polis akademisi öğrencisi, aday
clarify|v.|berraklaşmak, açıklamak, aydınlığa kavuşturmak
immature|adj.|olgunlaşmamış
marguerite|n.|papatya, çayır papatyası, krizantem
banished|adj.|sürgüne gönderilmiş, kovulmuş, sürgün yemiş
dairy|n.|mandıra
attach|v.|yapıştırmak, bağlamak, iliştirmek
murdock|n.|minnesota eyaletinde şehir, nebraska eyaletinde yerleşim yeri
sliding|adj.|sürgülü
spectacle|n.|görülecek şey
pushes|v.|itelemek, itmek
yin|n.|dualist çin felsefesinde pasif kadın öğe
delusional|adj.|kuruntusal, kuruntuya bağlı, hayal dünyasında yaşayan
allegiance|n.|biat, tabiiyet, bağlılık
slope|n.|meyil, bayır, eğim
awareness|n.|farkındalık, bilinçlenme, farkında olma
decker|n.|birden fazla güvertesi olan, çok katlı, indiana eyaletinde yerleşim yeri
dino|n.|dinozor
roaming|n.|gezeleme, roaming, gezici
shores|n.|alabama eyaletinde şehir, florida eyaletinde yerleşim yeri, florida eyaletinde şehir
competitors|n.|yarışmacılar, rakipler
tomas|n.|liberya ve gine'de yaşayan bir halk
overreacting|n.|aşırı tepki gösterme, aşırı reaksiyon gösterme
observing|n.|tarassut, inceleme, gözleme
paste|v.|yapıştırmak, hamur, macun
wits|v.|eli ayağı dolaşmak, ödünü patlatmak, doğru dürüst düşünebilmek
fiery|adj.|ateşli
typically|adv.|sıklıkla, tipik derecede, tipik olarak
eclipse|v.|(güneş/ay) tutulmak, tutulma (ay/güneş)
produces|n.|ürünler
oysters|n.|istiridye
scraping|n.|kazıma, hurdaya çıkarma, sıyrıntı
pros|n.|pros
impose|v.|(yasa vb) uygulamaya koymak, yük olmak, dayatmak
revenue|n.|hasılat, gelir
alabama|n.|amerika'da eyalet, new york eyaletinde yerleşim yeri
departed|adj.|ayrılmış, müteveffa, geçmiş
user|n.|kullanıcı
cracker|n.|kraker
undoubtedly|adv.|şüphesiz olarak, kesinlikle, hiç şüphesiz
dent|v.|çökertmek, yamultmak, dişlemek
charmed|adj.|tılsımlı, büyülenmiş, büyülenen
spiral|adj.|spiral, sarmal
scans|n.|dağıtılmış tarama, beyin taramaları, bilgisayarlı beyin tomografisi
ka|n.|antik mısır inanışına göre ruhsal beden
louisiana|n.|amerika'da eyalet, missouri eyaletinde şehir
rumour|n.|söylenti
kirsten|n.|kadın ismi
touchdown|n.|inişte tekerleklerin piste ilk değişi, iniş, uçağın iniş anı
nadine|n.|kadın ismi
posh|adj.|havalı, gösterişli, lüks
correction|n.|düzeltme
chubby|adj.|hantal, ablak, dolgun
manifest|v.|açıkça göstermek
safest|adj.|en emin, en güvenli
steroids|n.|steroidler, steroitler
fleeing|v.|kaçmak
genie|n.|cin, dahi, peri
dakota|n.|bir kadın ismi, georgia eyaletinde şehir, illinois eyaletinde yerleşim yeri
witchcraft|n.|büyücülük
archives|n.|arşiv, belgelik, arşivler
trance|n.|trans
symphony|n.|senfoni
traumatic|adj.|travmatik
skipping|n.|atlama, sekme, sıçrama
frequent|adj.|sık
modeling|n.|modellik, mankenlik, modelini yapma
sporting|n.|spor, av, avcılık
affecting|adj.|etkileyen
spacecraft|n.|uzay aracı, uzaygemisi, uzay gemisi
negotiation|n.|müzakere
talbot|n.|talbot tazısı
reno|n.|nevada eyaletinde şehir, teksas eyaletinde şehir
benton|n.|arkansas eyaletinde şehir, iowa eyaletinde şehir, illinois eyaletinde şehir
calculate|v.|hesap etmek, hesaplamak
fiddle|v.|aylaklık etmek, keman çalmak, üzerinde oynama yapmak
sails|v.|yelkenleri indirmek, mayna etmek, yelken açmak
stein|n.|büyük bardak, büyük bira bardağı
persistent|adj.|ısrar eden, ısrarlı, ısrarcı
despicable|adj.|aşağılık, değersiz, alçak
bruise|v.|berelenmek, bere
salem|n.|alabama eyaletinde şehir, arkansas eyaletinde şehir, batı virginia eyaletinde şehir
escapes|expr.|aklımdan çıktı gitti, dikkatimi çekmedi, kimse geçmişinden kaçamaz
mischief|n.|haylazlık
cupcakes|n.|küçük kek, kap kek, çekici kadın
brussels|n.|brüksel, illinois eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
arc|n.|yay
ripper|n.|riper, yırtıcı, yaman herif
vitamins|n.|vitaminler
cognac|n.|kanyak, konyak
careers|n.|rehber, okullarda kariyer danışmanlığı yapan kimse, kariyer danışmanlığı yapan erkek öğretmen
caps|n.|toz lastiği, büyh, ilkharfbüyük
imbecile|adj.|embesil
steaks|n.|kalın bir dilim et, kontrfile, biftek
cove|n.|koy
lair|n.|haydut yatağı, sığınak, ağıl
directing|n.|tevcih, reji, idare etme
stepfather|n.|üvey baba
slammed|adj.|sövülmüş, çarpılmış, acımasızca sövülmüş olan
viral|adj.|virüsle ilgili
congregation|n.|cemaat
illinois|n.|amerika'da eyalet
helicopters|n.|helikopterler
coco|n.|hindistancevizi, hindistancevizi ağacı
crisp|adj.|çıtır çıtır, gevrek
outrage|v.|zedelemek (gurur), hakaret etmek, kanuna karşı hareket etmek
flexible|adj.|bükülgen, esnek
goo|n.|yapışkan madde, tutkal gibi yapışkan olan
licking|n.|dayak, yalama, yalayış
funk|v.|yan çizmek, korkutmak, çekinmek
ice-cream|n.|frigo, dondurma
prefers||tarih, efsaneleri insanoğluna tercih eder
tao|n.|tao
captive|n.|esir, tutsak
montreal|n.|kanadanın bir şehri, wisconsin eyaletinde şehir
zen|n.|japon budist okulu, asit (lsd)
cee|n.|(ingiliz alfabesinde) c harfi, c biçimli olan
knuckles|n.|muşta
canteen|n.|büfe, kantin, kışla büfesi
credibility|n.|güvenirlik, inanılırlık, inanırlılık
disconnected|adj.|kopuk, bağlantısız, bağlantısı kopmuş
flats|n.|apartman binası, topuksuz ayakkabı, lamalar (metal)
controversial|adj.|çekişmeli, anlaşmazlığa neden olan, tartışmaya yol açan
enthusiastic|adj.|coşkulu, hevesli
cork|v.|kara mantarla siyahlaştırmak, mantarla tapalamak, mantarla tıkamak
priorities|n.|öncelikler, öncelik kaideleri
acute|adj.|şiddetli, akut, ani gelişen
icy|adj.|buz gibi, donmuş, buzlu
wormhole|n.|solucan deliği
flyer|n.|uçucu, pilot, föy
bladder|n.|sidiktorbası, idrar torbası, kese
caretaker|n.|bakıcı
pep|n.|enerji, çeviklik, şevk
roommates|n.|oda arkadaşı
programming|n.|programlama, izlenceleme, kodlama
grape|n.|üzüm
astronauts|n.|uzaycı, uzay adamı, uzayadamı
drained|adj.|bitkin, suyu alınmış, süzülmüş
metallic|adj.|metalik
seldom|adv.|nadiren
destroys|v.|tahrip etmek, imha etmek
poetic|n.|şiir, şairane, romantik
hacking|n.|bilgisayar korsanlığı, hekleme, tuğla hatıl
transported|adj.|sürgün edilmiş, kendinden geçmiş, coşmuş
contaminated|adj.|kirletilmiş, bozulmuş, mikroplu
duct|n.|boru, mecra, suyolu
dimensions|n.|ölçü
insensitive|adj.|duygusuz
echoes|n.|yankılar
initiate|v.|başlatmak
nonetheless|adv.|bununla beraber, yine de, bununla birlikte
emmett|n.|idaho eyaletinde şehir, kansas eyaletinde şehir
grinding|n.|öğütücü, sürtme, ezme
composition|n.|kompozisyon
adjourned|adj.|ertelenmiş
indulge|v.|şımartmak
wrench|n.|sert bir çekiş/burma, ingiliz anahtarı
flaw|n.|kusur
messiah|n.|mesih
concluded|adj.|sonuca varılmış, sonuca varan, ıskat edilen hak
accustomed|adj.|alışılmış, alışkın
napkin|n.|peçete
doorway|n.|kapı aralığı, kapı arası, menfez
muddy|v.|bulandırmak, çamurlu
saturn|n.|zühal, satürn, sekendiz
intentionally|adv.|kasten
chiming|v.|ahenkli bir sesle çalmak (saat/zil/çan), vurmak (saat başlarını), ahenkle çalmak
canned|adj.|konserve
appearing|n.|tezahür, belirme, görünen
ballistics|n.|atışbilim, balistik, atış bilimi
nicked|adj.|çentik
suction|n.|emme
hideout|n.|yatak, gizlenilen yer, gizlenme yeri
startled|adj.|korkutulmuş, korkmuş
replacing|expr.|değiştiriliyor
solemn|adj.|dinsel
pillows|v.|yastıkları doldurmak, göğüsler, memeler
submitted|adj.|maruz, teslim edilen, gönderme tarihi
francesca|n.|kadın ismi
override|v.|overrode - overridden, geçersiz kılmak, eskisini geçersiz kılmak
carver|n.|oymacı
lea|n.|otlak, mera, çayır
mateo|n.|erkek ismi
mosquito|n.|sivrisinek
fragrance|n.|güzel ve hoş koku, koku
pennies|n.|damlaya damlaya göl olur, beklenmedik bir zamanda gelen bir para, harcamalara dikkat etme
detained|adj.|alıkonmuş, gecikmiş, maksur
meadow|n.|çayır
chopping|n.|değişiklik, kıyım, dilme
satellites|n.|yapay uydular, telekomünikasyonda yapay uydular, geostationary uydular
cables|n.|iletkenler, kablolar
youngsters|n.|delikanlılar, gençler
needy|adj.|muhtaç
refugee|n.|mülteci
luc|n.|caldwell luc operasyonu
whitey|v.|beti benzi atmak, bembeyaz kesilmek, kötü olmak
inhabitants|n.|nüfus, ahali, belde halkı
break-in|n.|zorla girme, meskene tecavüz, haneye tecavüz
harassing|n.|can sıkıcı, havadan taciz
ro|n.|ro-ro taşımacılığı, yüklü kamyonların özel gemi ile taşınması, ro mam
interpretation|n.|yorum
burying|n.|mezar, gömme, kabristan
bree|n.|tolkien'in şaheserinde hayali köy
incomplete|adj.|tamamlanmamış
blimey|interj.|vay canına!
titan|n.|dev, titan, titanik
retard|v.|geciktirmek
agatha|n.|kadın ismi
dilemma|n.|açmaz, ikilem
mutt|n.|ahmak, mankafa, köpek
prominent|adj.|öne çıkan, çıkıntılı
temples|n.|tapınaklar, şakaklar
hoover|v.|elektrikli süpürge ile temizlemek, elektrik süpürgesi ile temizlemek, elektrikli süpürgeyle temizlemek
lindsey|n.|ohio eyaletinde yerleşim yeri
cesar|n.|erkek ismi
temp|v.|geçici işçi olarak çalışmak, geçici personel, geçici eleman
consul|n.|konsül, konsoloshane, konsül (eski roma'da)
hairdresser|n.|kuaför
planting|n.|ekim
drones|v.|homurdanmak, vızıldamak, haylazlık etmek
justified|adj.|gerekçeli, makul, haklı
jensen|n.|jensen hastalığı
stuffing|n.|kıtık, içirik, dolgu
norwegian|n.|norveçli
dork|n.|ahmak, aptal, asosyal, beceriksiz tip
stalling|n.|erteleme, ileri bir tarihe atma, bayılma
birthdays|n.|doğum günleri
intimacy|n.|yakınlık (ilişki), samimilik, yakınlık
tucked|adj.|sıkıştırılmış, tıkılmış, içeri sokulmuş
examiner|n.|sorgu hakimi, ayırtman, mümeyyiz
qualify|v.|vasıflandırmak, nitelendirmek
imminent|adj.|eli kulağında, yakında olmasından korkulan, olması yakın ve muhakkak
masked|adj.|maskeli
diesel|n.|dizel
meditation|n.|meditasyon
bulk|v.|büyütmek, büyümek, genişlemek
prosecute|v.|takip etmek, dava açmak, devam etmek
mumbles|v.|gevelemek, dili dolaşmak, ağzında gevelemek
defined|adj.|tanımlanmış, belirtili, tamlanan
oklahoma|n.|amerika'da eyalet, pensilvanya eyaletinde yerleşim yeri
paw|n.|pati, pençe
default|adj.|varsayılan
crawled|v.|sürünmek, emeklemek
doughnuts|n.|donuts
margot|n.|kadın ismi
haunting|n.|dadanma, akıldan çıkmayan, rahatsız edici
staircase|n.|merdiven
advances|n.|avanslar, arkadaşlık teklifleri, göze girmek için yapılan öneriler
solutions|n.|çözüm yolları, çözümler, solüsyonlar
plaster|v.|sıvamak, sıva, alçı
proceedings|n.|zabıtname, zabıt, takibat
amends|n.|özür, ıslah, telafi
fraternity|n.|kardeşlik
cannons|n.|top
kendall|n.|new york eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
armored|adj.|zırhlı
colonies|n.|sömürgeler, bölgecikler, koloniler
birdie|n.|küçük kuş, minik kuş, orta parmak
volcanic|adj.|yanardağ gibi, yanardağa özgü, volkanik
samson|n.|samson
cleopatra|n.|kleopatra
carve|v.|oymak
fishermen|n.|balıkçılar
brink|n.|kenar, eşik (felaket için), ağız (kaya, uçurum)
martian|n.|merihli, marslı
hybrid|adj.|melez
knockout|n.|nakavt
chunk|n.|kalın bir parça, topak, tıknaz ve güçlü adam
constructed|adj.|yapılı
confiscated|adj.|haczedilmiş, el konulan, müsadere edilmiş
interrogate|v.|sorgulamak
voyager|n.|seyyah, yolcu, yolculuk eden kimse
commerce|n.|ticaret
tasks|n.|görevler, ödev
precaution|n.|önlem, tedbir
printer|n.|yazıcı
finishes|expr.|çok işe başlayan az iş bitirir, biter bitmez, alüminyum bitirmeleri
rossi|n.|junghans-rossi süreci, rf -sismik siddet skalası
boob|v.|çok büyük hata yapmak, aptallık yapmak, çuvallamak
nagging|n.|kusur bulma, vırıltı, dırdır
stephens|n.|georgia eyaletinde şehir
hag|n.|yaşlı çirkin kadın, cadı, kocakarı
skinner|n.|deri yüzücü, deri sıyırıcı, koşum hayvanı kullanan kimse
lunchtime|n.|öğle yemeği arası, öğle arası
imported|adj.|ithal
transcript|n.|belge, suret, transkript
conceal|v.|gizlemek
holler|v.|çağırmak, bağırmak, haykırmak
chug|v.|pat pat etmek, pat pat ederek gitmek, teklemek
silas|n.|sila, si la
paranoia|n.|paranoya
compelled|adj.|mecbur
styles|n.|biçemler, biçimler
airborne|adj.|havadan nakledilen, uçmakta olan, havadan gelen (mikrop, toz vb)
sentiment|n.|düşünce, hassaslık, duygu
syria|n.|suriye
pea|n.|börülce, nohut, bezelye
babysitting|n.|çocuk bakıcılığı
improving|n.|düzeltme, iyileştirme, geliştirme
hare|n.|yabani tavşan, yabantavşanı, tavşan
connects|expr.|temel bağlantılar
withdrawn|adj.|içe dönük, içine kapanık, çekingen
staged|adj.|sahne, düzmece, sahnelenmiş
englishman|n.|ingiliz erkeği, britanyalı, ingiliz
hopkins|n.|missouri eyaletinde şehir, minnesota eyaletinde şehir
pumps|n.|pompalar, bir tür bağcıksız gece ayakkabısı
admirable|adj.|hayran eden
vouch|v.|onaylamak, doğrulamak, garanti etmek
indicated|adj.|gösterilen
reviews|n.|eleştiri yazıları, gözden geçirmeler, incelemeler
kristen|n.|kadın ismi
trivial|adj.|ıvır zıvır, önemsiz
parcel|n.|parsel, koli
scroll|n.|taslak, parşömen tomarı, tarife
desired|adj.|geçer, arzu edilen, gerekli
appealing|n.|isteme, duygulandırıcı, çekici
weighed|adj.|ölçülmüş, hesap edilmiş, tartılmış
designated|adj.|belirlenmiş
bubba|n.|birader, güneyli adam, yakın arkadaş
imprisonment|n.|hapis, hapsetme, tutukluluk
ferris|n.|illinois eyaletinde yerleşim yeri
fleming|n.|flaman, missouri eyaletinde şehir, new york eyaletinde yerleşim yeri
cooling|adj.|soğutucu
containing|n.|kapsama, istiap, kapsayan
giles|n.|virginia eyaletinde bölge, basur
impressions|n.|etkiler, izlenimler
advantages|n.|avantajlar
cartwright|n.|arabacı, at arabası yapan kimse
uncertain|adj.|belirsiz
deliberate|adj.|kasti
anticipated|adj.|umulan, öngörülen, beklenen
isolate|v.|soyutlamak, tecrit etmek
tighten|v.|sıkmak
corporations|n.|şirketler
petra|n.|mesleki eğitim programı
venue|n.|olayın gerçekleştiği yer, mahkeme yeri, cinayet mahalli
irritating|n.|rahatsız etme, sinirlendirme, sinir
revolt|v.|başkaldırmak, ayaklanmak, isyan
lunar|adj.|ay ile ilgili, kameri, ay
rightful|adj.|hak etmiş oldukları, hakiki, meşru
bombers|n.|bombacı
southwest|n.|lodos, güneybatıdan gelen, güneybatı
maine|n.|amerika'da eyalet, new york eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
marvel|v.|şaşmak, hayret etmek, olağanüstü şey
chained|adj.|zincirli, zincirlenmiş, zincirlenen
colder|adj.|daha soğuk
tit|n.|baştankara, vuruş, meme
snooping|n.|başkalarının işine karışma, her şeye burnunu sokma, gizlice birinin özel hayatını araştıran kimse
trunks|n.|mayo, erkek mayosu, diz altı şort
sully|v.|lekelemek, kirletmek, gölge düşürmek
excused|adj.|mazur, mazeretli, muaf
seduced|adj.|ayartılan, ayartılmış
communicating|n.|ilişki kurma, tebliğ, ilbağ
beams|v.|uzun farları yakmak, uzunları yakmak, uzun farları açmak
bloodshed|n.|öldürme, katliam, kan dökme
offender|n.|fail, kabahatli, suçlu
offspring|n.|yavru, döl, evlat
monstrous|adj.|canavar gibi, azman
bruising|n.|ufalama değirmeni, bela aramak, belasını aramak
doorman|n.|kapıcı
prohibited|adj.|yasak, yasaklanmış, yasak edilmiş
props|n.|bacaklar, destekler, saygı
penetrate|v.|nüfuz etmek
intervene|v.|araya girmek
tobias|n.|nebraska eyaletinde yerleşim yeri
aiden|n.|erkek ismi
niggers|n.|koyu renkli böcek larvası, buharlı gemilerde kullanılan bir tür bocurgat
cairo|n.|kahire, batı virginia eyaletinde yerleşim yeri, georgia eyaletinde şehir
patriot|n.|vatansever
bowls|n.|açık havada oynanan bir oyun
rufus|n.|dikenli yılanbalığı, yılankurdu balığı, kızıl kurt
barton|n.|new york eyaletinde yerleşim yeri, vermont eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
surgeons|n.|cerrahlar
pits|n.|çukur, pit alanı, yarış pistindeki servis
infamous|adj.|adı kötüye çıkmış, kötü şöhretli
crooks|n.|güney dakota eyaletinde şehir
shag|v.|kaba tüylü yapmak, cinsel ilişkiye girmek, kaba tüylü kumaş
lettuce|n.|salata, yeşil salata, marul
exaggerating|n.|abartan, abartma
inferior|adj.|alt
boredom|n.|can sıkıntısı, sıkıntı
tolerance|n.|müsamaha, hoşgörü, tolerans
cashier|n.|kasiyer, veznedar
polls|n.|seçim yeri, seçim bürosu
caliber|n.|kalibre, çap
underpants|n.|don, külot, tuman
katy|n.|teksas eyaletinde şehir
seller|n.|satıcı
sensed|adj.|hissedilmiş
vertical|adj.|dik, düşey, dikey
dart|v.|fırlatmak
sections|n.|aksam, bölümler, profiller
zipper|n.|fermuar
gabby|adj.|çenebaz, boşboğaz, konuşkan
acceptance|n.|kabul
traveler|n.|seyahat eden kimse, gezgin
emerald|n.|zümrüt yeşili, zümrüt, zümrüt rengi
gays|n.|geyler, illinois eyaletinde yerleşim yeri
pc|n.|darbe kod kiplenimi, küçük bilgisayar, kişiye özel ya da hususi bilgisayar
hassle|n.|güçlük
thrilling|adj.|heyecan verici, heyecanlandırıcı, çok heyecan verici
hopeful|adj.|umutlu, ümitli
stokes|n.|stokes, kinematik akışkanlık birimi
sneakers|n.|spor ayakkabısı, spor ayakkabı
conditioning|n.|koşullandırma, koşullama, şart koşma
supporters|n.|şüreka
teal|n.|çamur ördeği, çamurcun, cam göbeği
insults|expr.|hakaret yağmuru, aralarında tartışmak, birbirlerine hakaret etmek
instruction|n.|öğretme, yönerge, talimat
flipping|n.|yazı tura atma, bir öyle bir böyle olan, rgb çevirme
clatter|v.|çatırdatmak, gürültüyle yapmak, takırdamak
flaming|n.|alevlenme, parlama, allah'ın belası
freight|n.|navlun, nakliye
representatives|n.|vükela, vekiller, temsilciler
invitations|v.|ihale açmak, düğün davetiyesi örnekleri, düğün davetiye örnekleri
undressed|adj.|soyunmuş, sosu/terbiyesi olmayan (yemek), çıplak
lucille|n.|kadın ismi
boiler|n.|kazan
edo|n.|tokyo'nun eski adı, bini, edo
uneasy|adj.|huzursuz, tedirgin, rahatsız
oneself|pron.|kendi kendini, bizzat, kendisi
alfredo|n.|parmesan peynirli italyan sosu
benedict|n.|erkek ismi, kansas eyaletinde şehir, kuzey dakota eyaletinde şehir
davey|n.|nebraska eyaletinde yerleşim yeri
davies|n.|davies toraksı
efficiency|n.|liyakat, yeterlik, hızlı ve verimli çalışma
yelps|v.|acıyla havlamak, ciyak ciyak bağırmak, viyaklamak
counterfeit|adj.|sahte
afterlife|n.|ahret, öbür dünya, ahiret
one-way|adj.|tek yönlü, tekyönlü, (bilet) gidiş
smiley|n.|gülenyüz
twat|n.|vulva, kara cahil, seks objesi kadın
eccentric|adj.|eksantrik
wand|n.|sihirbaz değneği
vi|n.|tahiti elması, glikojen depo hastalığı tip vi, schatzker v-vi tibial plato kırıkları
memphis|n.|michigan eyaletinde şehir, mississippi eyaletinde yerleşim yeri, missouri eyaletinde şehir
consume|v.|tüketmek
praised|adj.|övülen, övülmüş
formidable|adj.|korkunç, zorlu
lesser|n.|kiralayan, daha küçük, ikinci derecedeki
gel|n.|jöle
surrendered|adj.|teslim olmuş, pes etmiş
welcomed|adj.|iyi karşılanmış
wendell|n.|idaho eyaletinde şehir, massachusetts eyaletinde yerleşim yeri, minnesota eyaletinde şehir
tee|v.|t dirsekle birleştirmek, t biçimindeki şey, t dirsek
launching|n.|fırlatma (roket vb), başlama, fırlatma
crores|n.|on milyon
downs|n.|kireç taşı tepesi, illinois eyaletinde yerleşim yeri, kansas eyaletinde şehir
retiring|n.|inziva, emeklilik, emekli olma
spears|n.|mızrak
authorization|n.|yetki
outsiders|n.|dıştakiler
pancake|n.|krep, gözleme
probability|n.|olasılık, ihtimal
accessory|n.|aksesuar
peters|n.|peters yöntemi, missouri eyaletinde şehir
deported|adj.|sürgün, sürgün edilmiş
contrast|v.|karşılaştırmak, zıtlık, tezat
hooks|n.|kancalar
remarks|n.|notlar, açıklamalar
liaison|n.|bağlantı, irtibat
blokes|n.|herif, arkadaş, adam
crater|n.|krater
distribute|v.|dağıtmak
vocalizing|n.|seslendirme
chiefs|expr.|sen ağa ben ağa bu ineği kim sağa?, sen ağa, ben ağa, bu ineği kim sağa?, emir veren çok çalışan yok
photographed|v.|fotoğraflanmak, samimi olarak görüntülenmek, sinema çıkışı görüntülenmek
rehearsals|n.|prova
whoop|v.|sevinçten bağırmak, haykırmak, çığlık atmak
credits|n.|jenerik, tanıtma yazısı
shalt|n.|shall fillinin ikinci tekil şahıs çekimi
stability|n.|kararlılık, durağanlık, sabitlik
woken|adj.|uyanmış, uyanık
stench|n.|kötü koku, pis koku, ufunet
taps|n.|askeri cenaze sinyali, ışıkları söndür sinyali/işareti
flea|n.|pire
compelling|adj.|zorlu
dolores|n.|kolorado eyaletinde şehir
strawberries|n.|çilek şanti, çilek konservesi
convictions|v.|inandığı gibi hareket etmek, doğru bildiği gibi hareket etmek, sabıkası olmamak
hubby|n.|koca, eş, müstakbel damat
self-esteem|n.|izzetinefis
threatens|v.|tehdit etmek
suburbs|n.|varoşlar, varoş, banliyöler
clocks|n.|turnagagası
peacock|n.|tavuskuşu
bragging|n.|palavra
hurrah|interj.|oley, hurray, yaşasın
moo|v.|böğürmek, böğürme, böğürtü
silently|adv.|sessizce
subconscious|n.|bilinçaltı
fatso|n.|şişko, dobişko, yağ tulumu
pluck|v.|koparmak, yolmak
reactions|v.|yankı uyandırmak, tepki toplamak, tepki almak
lacks|n.|ergime noksanlıkları, nüfuziyet noksanlıkları
mira|n.|tansık (yıldızı)
refined|adj.|arıtılmış
lays|v.|işini kendi eliyle bozmak, altın yumurtlayan kazı kesmek, damlaya damlaya göl olur
bungalow|n.|bungalov, sayfiye evi, tek katlı kır evi
surge|v.|kabarmak (deniz), kabarmak, aniden yükselmek
practices|n.|uygulanan yöntemler, uygulamalar, icraat
precautions|n.|önlemler
thanked|v.|teşekkür etmek, teşekkür
jody|n.|çürük asker, karısı tarafından aldatılan mahkum
uranium|n.|uranyum, uranyum (simgesi u)
carolyn|n.|kadın ismi
menace|n.|tehdit
fractured|adj.|kırık, çatlamış, çatlak
christie|n.|dönerek paralel durma, paralel kristiyanya
aka|n.|yeni zelanda'ya özgü bir sarmaşık, namı diğer, nam-ı müstear
cone|n.|külah, koni
sauna|n.|fin hamamı, sauna
extinction|n.|söndürme, feshetme, sönme
randolph|n.|iowa eyaletinde şehir, kansas eyaletinde şehir, maine eyaletinde yerleşim yeri
bonding|n.|yapıştırma, tutturma, topraklama
equality|n.|eşitlik
bourgeois|adj.|burjuva
insert|v.|arasına sokmak, sokmak
csi|abrev.|olay yeri inceleme
teens|n.|yeniyetmelik, yaşı 13-19 arasında olanlar, ölçek ya da seride 10-19 arası
downhill|n.|iniş, inişli, kolay
pedal|n.|pedal
levi|n.|levi–civita koneksiyonu
peru|n.|peru, indiana eyaletinde şehir, illinois eyaletinde şehir
stables|v.|bir rezalete son vermek, bir belayı baştan savmak, çirkefliği ortadan kaldırmak
irving|n.|illinois eyaletinde yerleşim yeri, teksas eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
buddhist|n.|budist kimse, budist
ambitions|n.|ihtiras, hırs
terrain|n.|arazi
turbo|n.|turbo, türbo
screening|n.|ayırma, sahneleme, blendaj
mu|n.|mü
riots|n.|ayaklanmalar
coaching|n.|antrenörlük, eğitmenlik, araba ile gezme
explodes|v.|patlatmak, patlamak
premature|adj.|zamanından önce
undone|adj.|çözülmüş, çözük, bitirilmemiş
communism|n.|komünistlik, komünizm
fitted|adj.|döşeli, uygun, oturmuş
treacherous|adj.|hain
inspect|v.|teftiş etmek, denetlemek
hurray|interj.|oley, yaşa!, hurra!
irresistible|adj.|karşı konulmaz
northeast|n.|kuzeydoğu, kuzey doğu, kuzeydoğu abd
sparrow|n.|serçe
gypsies|n.|çigan, ispanyol çingeneleri
performer|n.|oyuncu
brew|v.|demlenmek, mayalamak (içki), demlemek
titles|n.|başlıklar, filmler, tanıtma yazısı
ingenious|adj.|ustalık, becerikli, maharetli
snapping|n.|kapma
turd|n.|kaka, dışkı, tezek
challenger|n.|meydan okuyucu, meydan okuyan, meydan okuyan kimse
baghdad|n.|bağdat
bulletin|n.|bülten
preview|v.|önceden görmek/göstermek, gala öncesi özel gösterim, (film vb) özel gösterim
jinx|v.|büyü yapmak, uğursuzluk getirmek, uğursuz kimse
immortality|n.|ölümsüzlük
recruits|n.|içgöçerler, erat
ditched|v.|ekilmek
tempt|v.|kışkırtmak, baştan çıkarmak, öfkelendirmek
procession|n.|tören alayı, alay, oluş
eduardo|n.|erkek ismi
melon|n.|kavun
weaknesses|n.|eksik yönleri, eksik yönler, zayıf yanlar
knob|n.|tokmak, topuz
domain|n.|ihtisas, bilgi alanı, etkinlik alanı
conclude|v.|sonuçlandırmak
dresser|n.|şifonyer
berries|n.|etli ve zarlı kabuksuz meyve
straining|n.|süzme, asalet, germe
beads|n.|tespih, boncuklar, ipe dizilmiş boncuk
windy|adj.|rüzgarlı
patent|v.|patentini almak, patent almak, patent vermek
merchants|n.|tüccarlar
profitable|adj.|kazançlı, karlı
ryder|n.|kuzey dakota eyaletinde şehir
prisons|n.|cezaevleri, ceza evleri
salvage|v.|kurtarmak, kazaya uğrayan gemiyi kurtarmak, batmış gemiyi yüzdürmek
mentioning|n.|zikir, zikretme
lass|n.|kız, genç kadın, sevgili
tox|n.|toks
poof|n.|nonoş, top, homoseksüel
productive|adj.|üretken, verimli
hosting|n.|evsahipliği, konakçılık, mihmandarlık
doth|v.|etmek, yapmak
ewing|n.|illinois eyaletinde yerleşim yeri, kentucky eyaletinde şehir, missouri eyaletinde şehir
derby|n.|melon, derbi maçı, at yarışı
goldfish|n.|kırmızıbalık, havuzbalığı, kırmızı balık
capitol|n.|amerikan kongre binası, kapitol, washington'daki hükümet meclisi binası
leisure|n.|boş vakit
buff|v.|açkılamak, perdahlamak, deri ile parlatmak
illusions|v.|gelin güvey olmak, hayallere kapılmamak, yanılgıya düşmemek
notices|n.|tebliğler
odin|n.|illinois eyaletinde yerleşim yeri, minnesota eyaletinde şehir
springfield|n.|florida eyaletinde şehir, güney dakota eyaletinde şehir, georgia eyaletinde şehir
tracker|n.|iz sürücü, izci, takipçi
kyoto|n.|bir japon şehri
peed|v.|çiş yapmak, sidik
vitamin|n.|vitamin
heave|v.|heaved/hove - heaved/hove, iç geçirmek, yukarı kaldırmak
bryant|n.|alabama eyaletinde şehir, güney dakota eyaletinde şehir, illinois eyaletinde yerleşim yeri
dickie|n.|kumaş, önlük, kuş
goodwill|n.|iyi hal, hüsnüniyet, itibar (ticari)
euro|n.|euro, avro
strapped|adj.|bağlı, meteliksiz
boar|n.|yaban domuzu, domuz, erkek domuz
slater|n.|tenkitçi, iowa eyaletinde şehir, missouri eyaletinde şehir
bogus|n.|sahte şey, taklit, yapma
rhymes|n.|çocuk şiirleri, çocuk şarkıları, kafiyesiz
brunette|n.|esmer
jab|v.|batırmak, itmek, saplamak
hippie|n.|hippi, çiçek çocuğu
ting|v.|çınlatmak, çınlamak, tıngırdamak
incidentally|adv.|tesadüfen
face-to-face|adj.|yüz yüze
gi|n.|asker
webb|n.|iowa eyaletinde şehir, mississippi eyaletinde yerleşim yeri, new york eyaletinde yerleşim yeri
compensate|v.|tazmin etmek, telafi etmek
tasting|n.|düzensizlik, tadına bakma, tatma
outbreak|n.|salgın
sow|v.|sowed - sown/sowed, yaymak, ekmek
hallucinations|n.|varsanılar
golly|n.|şaşkınlık ifadesi, hay allah
factors|n.|ekolojik faktörler, çevre faktörleri, çeken faktörler
pyramids|n.|piramitler
copenhagen|n.|kopenhag
hiv|n.|hiv
dandy|n.|telli bebek, yetkin kimse, çıtkırıldım tip
detour|v.|servis yolundan vermek (trafik), saptırmak, sapmak
desperation|n.|çaresizlik
wrestle|n.|güreş
entrusted|adj.|havale edilmiş, bırakılmış, emniyete alınmış
parting|n.|ayırma çizgisi, ölme, ayrılırken yapılan
resisting|adj.|mukavemetli, dirençli, direnç gösteren
err|v.|yanılmak, hata yapmak
bursting|n.|patlama, patlayan, patlak
warrants|n.|henüz ödenmemiş borçlar, ödenecek borçlar, yakalama tutanağı
savannah|n.|ağaçlı bozkır, büyük ova, savan
concealed|adj.|gizlenen, gizlenmiş, saklı
dreamer|n.|hayalperest kimse
mandatory|adj.|zorunlu
gagging|n.|düzletme, çaresiz, vahim
finances|n.|para, mali durum
nightingale|n.|bülbül
lamps|n.|aydınlatma, lambalar, gözler
grenades|v.|sonuna kadar gelip de başaramamak
premier|n.|sınıf veya önem bakımından ilk sırada, yeni bir tiyatro oyununun ilk temsili, prömiyer
squire|v.|kavalyelik yapmak, köy ağası, kavalye
periods|n.|aybaşı, regl
kgb|n.|kgb
parasite|n.|asalak, parazit
borrowing|n.|ödünç alma
rodrigo|n.|erkek ismi
influential|adj.|etkili, etkileyici
mammy|n.|anne
absorb|v.|almak (dikkati/enerjiyi/zamanı/parayı), kavramak (anlamak), emmek
investments|n.|yatırımlar, iştirakler
concentrated|adj.|konsantre
tyrant|n.|zorba, zalim
laps|n.|turlar
underestimated|adj.|az değer biçilmiş, eksik değerlendirilmiş
measuring|n.|değer biçme, ölçüm, ölçü
origins|v.|kökleri ...e'ye dayanmak, kökenleri...'e dayanmak, borcun kaynakları
applies|expr.|geçerli olduğu şekliyle, ilişkin şekliyle, uygulanabilir olduğu şekliyle
britney|n.|kadın ismi, bir kadın ismi
exchanged|adj.|mübadil, değiştirilmiş, değiştirilen
portugal|n.|portekiz
maths|n.|matematik, matematik (amer.)
decorations|n.|dekorasyonlar, süslemeler, süsler
orion|n.|orion, oriyon, illinois eyaletinde yerleşim yeri
ownership|n.|mülkiyet, sahiplik
tweet|v.|ciklemek, cıvıldamak, tweetlemek
raspberry|n.|ahududu
racial|adj.|ırksal, ırkla ilgili, ırk
firstly|adv.|ilk önce
intimidated|adj.|tehdit edilmiş, gözü korkmuş, sinmiş
skunk|n.|kokarca
parsons|n.|batı virginia eyaletinde şehir, kansas eyaletinde şehir, tennessee eyaletinde yerleşim yeri
nearer|adj.|yakın olan, el altında, yakınında
yong|n.|sebzeli, etli ve çin soslu bir omlet çeşidi
audible|adj.|işitilebilir, duyulabilir
communion|n.|paylaşım, mezhep, duygu ortaklığı
whinnies|v.|kişnemek, hafifçe kişnemek, kişneme
hindu|n.|hinduizm, hintli, hindu
leroy|n.|wisconsin eyaletinde yerleşim yeri
sphere|n.|küre
renaissance|n.|rönesans
anomaly|n.|sapıklık, kanunsuzluk, anomi
pursued|v.|izlenmek, tarafından takip edilen
klein|n.|klein şişesi, klein grubu, klein-gordon denklemi
chant|n.|ilahi
outlaw|v.|yasal haklardan mahrum etmek, yasal haklardan yoksun bırakmak, yasadışı ilan etmek
surname|n.|soyadı
penguins|n.|penguenler
awarded|adj.|ödüllendirilmiş, ödüllendirilen, ödüllü
mid|adj.|orta
classmate|n.|sınıf arkadaşı, okul arkadaşı
applications|n.|uygulamalar
subtitle|v.|altyazı yazmak, altyazı geçmek, ikinci başlık
laden|v.|yüklemek, yüklenmek, yük taşıma kapasitesi
economics|n.|ülke ekonomisi, ekonomi bilimi, tutumbilim
ballroom|n.|dans salonu, balo salonu
sinned|expr.|peder, beni bağışlayın, günah işledim
shortage|n.|sıkıntı, eksiklik, kıtlık
mort|n.|av borusu
phenomenal|adj.|harika, fevkalade, doğal olaylarla ilgili
czech|n.|çekoslovakyalı, çekoslovakyalı kimse, çekçe
maneuver|n.|manevra
tremble|v.|ürpermek, titremek, titreme
hooking|n.|golfte sola kavis yapan vuruş
screeches|v.|tiz bir ses çıkarmak, acı çığlık koparmak, cırlamak
moons|n.|jüpiter ayları/uyduları, çok uzun zaman önce, küçük jant kapakları
ae|adj.|bir, tek, dd-sıcaklığı
sweetness|n.|tatlılık, sevimlilik, hoşluk
disrespectful|adj.|saygısız
dane|n.|danimarkalı, wisconsin eyaletinde yerleşim yeri
consulate|n.|konsolosluk
bounced|n.|karşılıksız çek, geri seken posta
parenting|n.|ebeveynlik, ana-babalık
robberies|n.|banka soyguncuları
remark|v.|belirtmek, yorum, görüş
hilary|n.|sömestr
logo|n.|logo
describing|n.|tanımlama, açıklama
scalpel|n.|skalpel, neşter
cecilia|n.|kadın ismi, kentucky eyaletinde şehir
strangest|adj.|en yabancı
seymour|n.|connecticut eyaletinde şehir, indiana eyaletinde şehir, iowa eyaletinde şehir
big-time|adj.|önemli, yüksek rütbeli, öncü
competent|adj.|ehil, yetkili, işin ehli
bein|expr.|ukalalık mı ediyorsun?, bein elevatörü
bi|pref.|iki, bisepslerin her biri, biseksüel
lectures|n.|konferanslar
basics|n.|bir şeyin en önemlisi, bir şeyin en basiti, temel prensip
texture|n.|doku
leftovers|n.|artık, artan yemekler, yemek artıkları
wimp|n.|çok pısırık kimse, pısırığın teki, süt çocuğu
conquest|n.|fetih
norris|n.|güney carolina eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri, tennessee eyaletinde yerleşim yeri
mounted|adj.|ata binmiş, atlı, takılı
pens|n.|dolma kalemler
contestant|n.|yarışmacı
algorithm|n.|arap rakamları sistemi, algoritma, hesaplamada ondalık sistem
columns|n.|kolonlar
chile|n.|şili, biber
wails|v.|inlemek, ağıt yakmak, hayıflanmak
decree|v.|emretmek, hüküm vermek, karar vermek
jeremiah|n.|kötümser, erkek ismi
rewrite|v.|yeniden yazmak
momentum|n.|hız, hızlanma, devinirlik
cadillac|adj.|kalitenin ismi, gücün adı, en güçlüsü
attorneys|n.|avukatlar
apes|n.|tarzan
captioning|n.|altyazı koyma
desmond|n.|erkek ismi, harika, güzel
lesbians|adj.|lezbiyen
fairies|v.|hayal dünyasında olmak, hafif kaçık olmak, hayaller aleminde
monitors|n.|monitörler
weighing|n.|tartma
roasted|adj.|kavrulmuş
discovering|n.|buluculuk
alzheimer|n.|alzaymır
subpoena|v.|mahkeme çağırmak, ihzar etmek, mahkeme çağrısı yollamak (birine)
foe|n.|hasım
hicks|v.|maganda kaynamak, amele kaynamak, altı rakamı
cm|n.|cm, küriyumun simgesi
circuits|n.|devreler
nag|v.|vırlamak, kafa ütülemek, kusur bulup durmak
hiking|n.|doğa yürüyüşü, günübirlik doğa yürüyüşü, fiyatları yükseltme
stepmother|n.|üvey anne, analık, üvey ana
personalities|n.|kişilikler, karakterler, şahsiyetler
formally|adv.|şeklen, usulen, resmi olarak
revive|v.|canlandırmak, dirilmek, diriltmek
unnatural|adj.|yapmacık, gayri tabii, garip
pip|v.|(kurşunlayarak) yaralamak, çekirdek (elma/portakal vb'nde), tomurcuk
betraying|n.|ispiyonculuk
renting|n.|kiralama, kira, kiraya verme
prizes|n.|ödüller
onstage|n.|sahne, sahnede
comfy|adj.|rahat
heath|n.|fundalık
marrow|n.|ilik
blaine|n.|erkek ismi, kentucky eyaletinde şehir, maine eyaletinde yerleşim yeri
minority|n.|azınlık
marcos|n.|kaliforniya eyaletinde şehir, teksas eyaletinde şehir
portable|adj.|seyyar, portatif, taşınabilir
popularity|n.|rağbet, popülerlik, popüler olma
telegraph|v.|telgraflamak, ima etmek, bir mesajı telgrafla göndermek
hayden|n.|alabama eyaletinde şehir, idaho eyaletinde şehir, kolorado eyaletinde şehir
hesitation|n.|tereddüt
sylvester|n.|batı virginia eyaletinde yerleşim yeri, georgia eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
cluster|n.|küme, salkım
grandad|n.|büyükbaba, dede
jog|v.|sallamak, hafifçe itmek, sarsmak
slay|v.|slew/slayed - slain/slayed, slayed - slayed, vahşice öldürmek
sparkling|adj.|ışıl ışıl, ışıltılı
shithead|n.|aptal, dangalak, geri zekalı
tiring|adj.|yorucu
germs|n.|mikroplar, sigara
fuhrer|n.|diktatör
handbag|n.|çanta, el çantası
unlimited|adj.|sınırsız
thumping|n.|küt, pat, gümbürtü
vinegar|n.|sirke
splinter|v.|paramparça etmek, kıymık
supposing|expr.|diyelim ki
faults|n.|faylar, taksirat
remarkably|adv.|dikkat çekecek derecede, önemli biçimde, son derece
sketches|n.|karakter taslakları
nineteen|n.|XIX, on dokuz, on dokuz sayısı
enchanted|adj.|afsunlu, mest, büyülü
respectful|adj.|hürmetkar, saygılı
bien|expr.|ya iyi yap ya da hiç yapma, muhafazakar, muhafazakar eğilimli
honk|v.|klakson çalmak, çıkarmak, korna çalmak
doughnut|n.|tatlı çörek, gözleme, halka
tags|n.|etiketler
wrapping|n.|paket kağıdı, ambalaj kağıdı, ambalaj ipi
tar|n.|katran
om|n.|om mantrası
ducky|adj.|aziz, güzel, sevgili
unfaithful|adj.|vefasız, sadakatsiz
delia|n.|derbyshire'da bulunan bir meze, kansas eyaletinde şehir
rae|n.|kraliyet hava aracı kurumu
stance|n.|duruş
barker|n.|çığırtkan
financially|adv.|finansal açıdan, mali açıdan, parasal yönden
clam|v.|yapışmak, içine kapanık kimse, neşeli parti
clanking|n.|çangırtı
sarcastic|adj.|kinayeli, alaylı, müstehzi
blur|v.|bulandırmak, bulanıklık
organizing|n.|teşkil, düzenleme, düzene sokma
nosy|adj.|kokulu, küf kokulu, her şeye burnunu sokan
boyle|n.|irlanda'da yerleşim yeri, mississippi eyaletinde yerleşim yeri
pasha|n.|paşa
my-|pron.|benim, aman tanrım!
attacker|n.|saldırgan
horribly|adv.|korkunç bir şekilde, fena halde, dehşetli bir şekilde
inject|v.|enjekte etmek
descend|v.|inmek, alçalmak
wi|n.|kablosuz internet, kablosuz bağlantı, wi-fi korumalı erişim
liberated|n.|özgürleştirilmiş, serbest, serbest bırakılmış
burner|n.|yakıcı
fluffy|adj.|kabarık
melancholy|n.|melankoli
puppets|n.|kukla
anal|adj.|anüs ile ilgili, anüsle ilgili, anal
grieve|v.|büyük üzüntü vermek, acı vermek, kederlenmek
awe|v.|korkutmak, korku vermek, huşu içinde bırakmak
gallons|n.|dakikada galon, saatte galon, galon/dakika
earring|n.|küpe
unprecedented|adj.|eşi benzeri görülmemiş, eşi görülmemiş, yeni
yank|v.|birden çekmek, aniden çekmek, hızla çekmek
jamaica|n.|jamaika, iowa eyaletinde şehir, vermont eyaletinde yerleşim yeri
brutally|adv.|vahşice, hayvanca, hayvan gibi
extortion|n.|gasp, fahiş fiyat, zorla alma
guardians|n.|kristal koruyucuları
disciples|n.|havariler, isa'nın seçilmiş on iki müridi
simultaneously|adv.|eş zamanlı, eşzamanlı olarak, aynı anda
elves|n.|cinler
malibu|n.|kaliforniya eyaletinde şehir
lupin|n.|acı bakla, lupin, acıbakla
postman|n.|postacı, posta görevlisi
neville|n.|ohio eyaletinde yerleşim yeri
senseless|adj.|anlamsız
chapman|n.|seyyar satıcı, tablacı, işportacı
hostel|n.|pansiyon
marcia|n.|kadın ismi
melvin|n.|iowa eyaletinde şehir, illinois eyaletinde yerleşim yeri, teksas eyaletinde şehir
cockroach|n.|karaböcek, karafatma, hamam böceği
clamp|v.|kenetlemek, mengene, kıskaç
poets|n.|şairler
chemist|n.|kimyacı
professionally|adv.|profesyonelce, profesyonel olarak
faded|adj.|soluk, solmuş, solgun
gunpowder|n.|barut, kara barut
inc|n.|şirket
gala|n.|bayram, kutlama, şenlik
surroundings|n.|dolay, civar, ortalık
wisconsin|n.|amerika'da eyalet
rivals|n.|rakipler, rekabet edilen firmalar
cackling|n.|laflama, kıkırdama, gıdaklama
withstand|v.|karşı koymak, direnmek
contemporary|adj.|modern, çağdaş
harlem|n.|georgia eyaletinde şehir, montana eyaletinde şehir
half-hour|adj.|yarım saatlik, bir saatin yarısı, yarım saat
endured|adj.|katlanmış, tahammül etmiş, sürmüş
arsenal|n.|cephanelik, silah deposu
underway|adj.|yapım aşamasında, çalışma halinde, yolunda
donuts|n.|donuts
injected|adj.|enjekte edilen, enjekte
digs|n.|pansiyon, yurt, ev
elisabeth|n.|kadın ismi
billionaire|n.|milyarder
cardboard|n.|karton, mukavva
hugs|v.|kucaklamak, sarılmak, (fikir) sıkı sıkıya bağlı olmak
bandages|n.|elastik kompresyon bandajları
everlasting|adj.|ebedi
liverpool|n.|liverpul, ingiltere'de şehir, ingiltere'de yerleşim yeri
cooperative|n.|kooperatif
diploma|n.|diploma
neural|adj.|sinire ait, sinirle ilgili, sinirsel
fortunes|v.|fal bakmak, fala bakmak, fal açmak
rural|adj.|kırsal, taşra
abbott|n.|bir erkek ismi, teksas eyaletinde şehir
receptionist|n.|resepsiyonist, resepsiyon görevlisi, resepsiyon memuru
antiques|n.|eski eserler, antikalar, antika satıcılığı
labels|n.|sevkiyat etiketleri, posta etiketleri, yanıt etiketleri
sizes|n.|boyutlar
millennium|n.|bin yıllık dönem, 1000 yıl, bin yıl
layout|n.|düzen
immoral|adj.|edepsiz, töretanımaz, faziletsiz
manages|v.|işletmek, idare etmek, yönetmek
hisses|v.|beğenmeyerek tıslamak, alaylı olarak tıslamak, ıslık çalarak yuhalamak
usher|v.|in içeri getirmek, içeri getirmek, açmak
impulsive|adj.|dürtücü, düşüncesizce davranan, ivecen
pollution|n.|kirlilik
admirer|n.|hayran
rejoice|v.|sevinmek, sevindirmek
iowa|n.|amerika'da eyalet, louisiana eyaletinde yerleşim yeri
hindi|n.|hindu dili, hintçe
holder|n.|tutan şey, içine bir şey konulan nesne, eldeci
squeezed|adj.|sıkılmış
merge|v.|birleşmek
journalism|n.|gazetecilik
nominated|adj.|atanmış, aday gösterilmiş, tayin edilmiş
sundown|n.|güneşin batışı, güneş battığı zaman, günbatımı
assistants|n.|idari yardımlar, muavin şahıslardan dolayı mesuliyet, tüm yardımcılar
miraculous|adj.|garip, doğaüstü, hayret verici
stared|v.|dik dik bakmak
prescribed|adj.|kurallarla belirlenmiş, saptanmış
lotta|expr.|bir sürü, birçok, çok
swearing|n.|küfür
guarantees|n.|alınan depozito ve teminatlar, alınan garantiler, diğer kişisel garantilerle ilgili alacaklılar
massachusetts|n.|abd'nin doğu sahilinde bir eyalet, amerika'da eyalet
junction|n.|birleşme yeri, kavşak
consumption|n.|tüketim
astrid|n.|kadın ismi
metropolis|n.|başkent, büyük şehir, metropol
iceland|n.|izlanda
bridal|n.|düğün, gelin, geline ait
virgins|n.|çiçekli sarmaşık
victorious|adj.|muzaffer, zafer kazanmış
squirt|v.|fışkırmak
pads|n.|kulaklık pedi, ayakkabı, fren balataları
modified|adj.|muaddel, değişkin, modifiye
hanson|n.|kentucky eyaletinde şehir, massachusetts eyaletinde yerleşim yeri
casket|v.|kutuya koymak, küçük kutu, tabut
blaze|v.|alevlenmek
cliffs|n.|new jersey eyaletinde yerleşim yeri
destroyer|n.|muhrip, yok edici kimse, yok edici
offshore|n.|açık deniz, kıyıdan uzak, kıyıdan esen
tendency|n.|eğilim
nip|v.|kıstırmak, çimdik atmak, çimdiklemek
scanning|n.|tarama
first-class|adj.|ekstra, pırlanta gibi, birinci mevkide
viva|n.|sözlü, sözlü sınav, sözlü olarak
intensive|adj.|yoğun
endangered|adj.|tehlikeye atılmış, tehlikede, nesli tükenmekte olan
va|n.|ava, çin’de yaşayan etnik bir grup, parauk
circling|n.|çevre kılavuz ışıkları, iniş turu kılavuzu, turlayarak yaklaşma
ave|n.|merhaba, meryem ana'ya selam duası, azize
stashed|n.|zula
das|n.|bölge savcısı
backward|adj.|geriye doğru yapılan, geriye, geri
chamberlain|n.|kethüda, mabeyinci, teşrifatçı
sari|n.|hintli elbisesi, sari
thermal|adj.|termal
opponents|n.|aleyhtarlar, muhalifler, karşı taraftakiler
fiber|n.|elyaf, lif
last-minute|adj.|son an, son dakika
toto|n.|toplam, bebek, çocuk
circumstance|n.|durum, hal
geography|n.|coğrafya
interpret|v.|yorumlamak
sicily|n.|bakım, sicilya
pisses|expr.|canını sıkan ne?
preaching|n.|öğüt verme, hatiplik, vaaz
transporter|n.|yük uçağı, nakliyeci, iletici
bosom|n.|bağır
salsa|n.|salsa, salsa (sos)
eighty|n.|seksen
shred|n.|paçavra
dread|v.|korku ve endişe duymak, ürkmek, çok korkmak
duration|n.|müddet, süre, devam süresi
beggars|n.|dilenci iratçısı, doğruluğundan şüphe etmek, nasıl olur da
mein|n.|bir tür kızarmış erişte yemeği
josephine|n.|kadın ismi
networks|n.|kütüphane bilgi ağları, veri depolama ağı, bilgi ağları
formality|n.|resmiyet, formalite, resmilik
heater|n.|ısıtıcı
par|n.|ortalama, kur, başabaş olma
smug|adj.|şık, kendini beğenmiş, temiz giyimli
ordeal|n.|çile
agriculture|n.|ziraat, tarım
fowler|n.|avcı kuş, (ördek, kaz gibi) su kuşu avcısı, kuş avcısı
descended|v.|soyundan gelmek, soydan gelmek, (belli bir) aileden gelmek
lasting|adj.|kalıcı
abyss|n.|sonsuz derinlik
marries|v.|evlenmek
aurora|n.|doğuş, fecir, şafak
sleigh|v.|atlı kızakla gitmek, kızakla taşımak, atlı kızak
frenchman|n.|fransız
rouge|v.|allık sürmek, allık, al
survives|expr.|evdeki hesap çarşıya uymaz
redhead|n.|kızılbaş, kızıl, kızıl saçlı kimse
creativity|n.|yaratıcılık
dominant|adj.|baskın, hakim, egemen
isis|n.|ışid, isis
kip|v.|uzanmak, yatmak, uyumak
corny|adj.|mısır, klişe, aptal
aubrey|n.|erkek ismi
graphic|adj.|grafik
irrational|adj.|mantıksız
mathematical|adj.|matematiksel
sacked|adj.|yağmalanmış, harap edilmiş, altı üstüne getirilmiş
paws|n.|patiler, pençeler
chariot|v.|iki tekerlekli at arabasında taşımak, iki tekerlekli at arabası sürmek, iki tekerlekli at arabasında seyahat etmek
havoc|n.|tahribat, yıkım, zarar
midget|n.|ufak yapılı kimse, cüce, minicik
celestial|adj.|gökyüzü ile ilgili, gök, göksel
cetera|adv.|ve benzeri, filan, vs
nino|n.|enso, el nino, el niño güney salınımları
upgrade|v.|bir üst modele geçmek
blasting|n.|patlama, lanet okuma, küfretme
skulls|n.|kafatasları
videotape|v.|kameraya çekmek, videoya çekmek, video kaset
wedded|adj.|evlenmiş, evli
babysit|v.|çocuk bakmak, bebek bakmak
ancestor|n.|ata
transit|v.|geçmek, transit geçmek, geçme
rained|v.|yağmura yakalanmak, geçen ay neredeyse her gün yağmur yağdı, bütün gün yağmur yağdı
thingy|n.|zımbırtı, zamazingo, şey
wellington|n.|lastik çizme, (19. yüzyılda kullanılan) uzun çizme, florida eyaletinde yerleşim yeri
abide|v.|uymak, katlanmak, baki kalmak
reserves|n.|yedek askerler, yedek kuvvet, yedek akçeler
rim|n.|jant
chico|n.|kaliforniya eyaletinde şehir
settles|interj.|tamam! genellikle kızınca söylenir, ortalık durulunca, ortalık sakinleşince
decisive|adj.|kararlı
motors|n.|elektrik motorları, ultrasonik motorlar, relüktans motorlar
cheesy|adj.|peynir kıvamında, peynire benzeyen, peynirli
symbolic|adj.|sembolik
clink|v.|tıkırdatmak, şangırdatmak, şangırdamak
handicapped|adj.|engelli
mating|n.|çiftleştirme, birleşme, çiftleşme
cranky|adj.|huysuz
brightest|adj.|en parlak
molecules|n.|moleküller
meyer|n.|meyer sertlik deneyi, meyer overton kanunu, kayser-meyer-olkin örnekleme ölçüsü
sheridan|n.|arkansas eyaletinde şehir, indiana eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri
animation|n.|çizgi film yapma, canlılık, şevk
grail|n.|isanın kasesi
voluntarily|adv.|kendi iradesiyle, kendi isteğiyle, gönüllü
creeping|n.|emekleme, emekleyen, sürünen
furnace|n.|fırın, ocak
thine|pron.|senin, seninki
titus|n.|aziz paulus'un öğrencisi
pierced|adj.|deşik, delik, delinmiş
chinatown|n.|çin mahallesi
slade|n.|küçük vadi, sabanın alt kısmı
sai|n.|yüksek denetim kurumu
toothpaste|n.|diş macunu
cuddle|v.|kucaklaşmak
langley|n.|langley, langli, oklahoma eyaletinde yerleşim yeri
egyptians|n.|mısırlılar
bankruptcy|n.|iflas
lever|n.|manivela, kaldıraç
shaman|n.|şaman
nipple|n.|emzik, meme ucu, göğüs ucu
weeds|n.|bahçe atıkları
becker|n.|minnesota eyaletinde şehir
reacted|v.|tepki göstermek
mashed|adj.|püre edilmiş, püre, sarhoş
sloane|n.|burjuva/sosyete kadını, üst sınıftan londra'da yaşayan kadın
regent|n.|saltanat vekili, kral naibi, naip
bentley|n.|kansas eyaletinde şehir
tiles|n.|çiniler, döşeme, döşemeler
decoy|v.|tuzağa düşürmek, av yerine çekmek, ördek tuzağı
crusade|v.|savaşım vermek, mücadele etmek, savaşa katılmak
vivid|adj.|canlı
slides|n.|slaytlar, slayt sayısı, slayt
jennings|n.|florida eyaletinde yerleşim yeri, kansas eyaletinde şehir, louisiana eyaletinde şehir
catering|n.|yiyecek içecek, yemek hizmeti, ikram servisi yapma
dishonest|adj.|namussuz
subs|n.|adım altları, adım altyordam
lurking|n.|sessizce dinleme, gizlice dinleme, gizlenmiş
airplanes|n.|uçaklar
shaky|adj.|titrek
barren|adj.|çorak, kıraç, kısır
alligator|n.|timsah
moth|n.|gece kelebeği, pervane, güve
uncover|v.|ortaya çıkarmak, örtüsünü kaldırmak, açmak (örtü, kapak vb)
axel|n.|buz pateninde bir tür sıçrama hareketi
expressing|n.|ifade etme, dışavurum
clacking|v.|çatlamak
doggie|n.|kuçukuçu, küçük köpek, havhav
airlines|n.|hava yolları
dum|n.|aptal, mankafa, beyinsiz
unicorn|n.|tek boynuzlu hayali hayvan, tek boynuz, tek boynuzlu at
jackets|n.|sarı yelekliler hareketi, can yeleği ve şahsi yüzdürme teçhizatı, su ceketi
goofy|adj.|şaşkın, sersem
marcy|n.|new york eyaletinde yerleşim yeri
businessmen|n.|iş adamları
bums|n.|koltukları doldurma, koltuk satma, yolcu/seyirci çekme
folded|adj.|katlanmış, katlı
defender|n.|müdafi, savunucu, savunan
alarmed|adj.|etekleri tutuşmuş, alarma geçirilmiş, paniğe kapılmış
goody|n.|ilgi çekici şey, iyilik timsali, nine
noose|n.|kement
chic|adj.|şık
forgiving|n.|affetme
thatcher|n.|saz çatı yapan, arizona eyaletinde şehir
index|v.|indekslemek, indeks, dizin
blush|v.|kızarmak
fertile|adj.|verimli, bereketli
amateurs|adj.|amatör
deliveries|n.|teslimler, tevziat
armour|n.|zırh
shits|v.|amel olmak, birini sinirlendirmek, birini sinir etmek
twinkle|n.|pırıltı
parted|adj.|ayrılmış, ayrılan, bölünmüş
syndicate|v.|şirketleştirmek, aynı yönetim altında birleştirmek, sendikalaştırmak
alexandra|n.|kadın ismi
righty|n.|sağlak, sağla (sağıyla), sağ elle
regions|n.|bölgeler
technician|n.|teknisyen
waffles|v.|saçmalamak, zırvalamak, boş laf
skirts|n.|banliyöler, sınırlar (yer için), varoşlar (şehir için)
baroness|n.|barones, baronun karısı, kadın baron
malfunction|n.|arıza
memorable|adj.|hatırlanmaya değer, hatırlanmaya/anmaya değer, unutulmaz
middle-aged|adj.|orta yaşlı
thea|n.|kadın ismi
calories|v.|kalori almak, kalorisi yüksek, yüksek kalorili
cuisine|n.|yemek pişirme sanatı, mutfak (türk mutfağı vb gibi), yemek pişirme yöntemi
motorbike|n.|moped, motor, motorlu bisiklet
snoop|v.|gizlice aramak, merakla gözetlemek, burnunu sokmak
acknowledged|v.|tanınmak, tanınmış, usulü dairesinde
spelled|adj.|hecelenmiş, hecelenen
evolve|v.|evrim geçirmek
cox|v.|dümen kullanmak, dümenci, kaptan
sedative|adj.|yatıştırıcı
array|v.|sıralamak, sıraya dizmek, diziliş
tenderness|n.|sert olmama, yumuşaklık (et/sebze/meyve vb için), duyarlık
garland|n.|çelenk
smuggled|adj.|kaçırılmış, kaçakçılık yapma, kaçak
reversed|adj.|ters, ters çevrilmiş, zıt yöne hareket eden
beforehand|adv.|önceden
continuous|adj.|sürekli, kesintisiz, devamlı
cecil|n.|erkek ismi, alabama eyaletinde şehir, georgia eyaletinde yerleşim yeri
seniors|n.|huzur evi, yaşlılar evi
mri|v.|emar çektirmek, difüzyon ağırlıklı mrg, emar makinesi
synthetic|n.|sentetik, bireşimli, sentez yoluyla yapılan
discoveries|n.|coğrafyada keşifler, bilimde keşifler, altın aramaları
agitated|adj.|heyecanlı, çalkalanmış, telaşlı
attendance|n.|katılma, katılım, devam
maple|n.|isfendan çınarı, isfendan, acer
pools|n.|toto
wanker|n.|serseri, mastürbatör, mastürbasyoncu
casa|n.|ev, kendi evinmiş gibi davran, kendi evinde hisset
firearms|n.|ateşli silahlar
offenders|v.|şüphelileri tutuklamak, sorumluları yakalamak, şüphelileri yakalamak
obligations|n.|borçlar, zorunluluklar
moan|v.|inildemek, inlemek, sızlanmak
signor|n.|efendi, bay
graffiti|n.|duvar yazısı, duvardaki yazılar, grafiti
supplied|adj.|tedarik edilmiş, tedarik edilen
linen|n.|keten
defect|n.|bozukluk, arıza, kusur
patriotic|adj.|vatanperver, vatansever, yurtsever
ethical|adj.|ahlaka uygun, ahlaki, ahlaksal
pest|n.|zararlı böcek, bitki mazarratlısı, insanın başına bela olan şey
lengths|v.|her çareyi kullanmak, her çareye başvurmak, açık ara
vin|n.|araç şasi numarası, araç şase numarası, araç kimlik plakası
minnie|n.|sürekli şikayet eden/sızlanan kötümser kişi, mini fare, dırdırcı tip
spectrum|n.|tayf, spektrum
distinction|n.|ayırım
decorate|v.|dekore etmek, süslemek
bounds|n.|sınır, sınırlar, sınır hatları
hums|v.|vızlamak, harıl harıl çalışmak, uğuldamak
mandarin|n.|mandalina
reluctant|adj.|gönülsüz, isteksiz
rand|n.|güney afrika parası, şerit, kenar boşluğu
retain|v.|sürdürmek, alıkoymak
justine|n.|kadın ismi
educate|v.|eğitmek
minnesota|n.|amerika'da eyalet
mp|n.|milletvekili, parlamenter, mebus
cruiser|n.|hızlı savaş gemisi, kotra, kruvazör
permits|v.|tüm izinleri almak, inşallah, şans yaver giderse
screwdriver|n.|tornavida
exploration|n.|keşif
mace|n.|gürz, topuz
newborn|adj.|yeni doğmuş, yenidoğan, yenidoğmuş
shivering|n.|tufan, titreme, titretici
slime|v.|çamurla kaplamak, çamurlamak, sümük
oddly|adv.|garip garip, acayip şekilde, tuhaf tuhaf
badger|n.|porsuk
bruised|adj.|incik, çürük (yara vb), çürümüş
attaboy|interj.|aferin sana
eyeballs|adj.|ilacın/uyuşturucunun etkisi altında, ilacın/uyuşturucunun ağır etkisi altında, tamamen uyuşturulmuş
institutions|n.|kurumlar, müessesat
panama|n.|panama, iowa eyaletinde şehir, illinois eyaletinde yerleşim yeri
boundary|n.|sınır
hypothesis|n.|hipotez, varsayım
drought|n.|kuraklık
rembrandt|n.|iowa eyaletinde şehir
absorbed|adj.|tüm dikkatini bir noktaya çevirmiş, absorbe, tüm dikkatini bir şeye vermiş
clinking|n.|tıngırtı, tıkırtı, şıkırdama
executioner|n.|cezalandırıcı, cellat, infaz memuru
darts|n.|ok atma oyunu, dart oyunu
catalina|n.|kadın ismi
lured|adj.|kandırılmış, cezbedilmiş
lingerie|n.|kadın iç çamaşırı ve gecelik, gecelik, kadın iç gömleği
gon|n.|demiryolu arabası, gon
flaws|n.|işçilik kusurları, olumsuz yönlerini görmezden gelmek, gizli kusurlar
thinner|n.|inceltici, seyreltici, daha ince
tug|v.|çekiştirmek, çekelemek, kuvvetle çekmek
cornered|adj.|köşeye kıstırılmış, köşeli, sıkıntılı
bertie|n.|north carolina eyaletinde bölge, kendini beğenmiş tip, kendini bir şey sanan tip
uptown|n.|şehrin yukarı kısmı, şehrin yerleşim ağırlıklı kesimi, şehrin yukarı tarafı
clash|v.|çarpışmak, çarpışma
aerial|n.|anten, havai
hansen|n.|idaho eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
relentless|adj.|acımasız, insafsız
viable|adj.|yaşayabilir, uygulanabilir
wen|n.|ur, yağ bezesi, metropol
scholars|n.|bilginler
limitations|n.|kısıtlamalar, kısıtlar, sınırlar
shelves|n.|etajer, raflar
funerals|n.|cenaze
criticize|v.|eleştirmek, tenkit etmek
jacqueline|n.|kadın ismi
forrest|n.|illinois eyaletinde yerleşim yeri
continental|adj.|kıta, kıtasal
bookstore|n.|kitabevi, kitapçı, kitapçı dükkanı
balanced|adj.|dengeli, dengelenmiş
workplace|n.|işyeri, iş yeri
theta|n.|teta, teta ritmi, teta dalgaları
ramsey|n.|illinois eyaletinde yerleşim yeri, minnesota eyaletinde şehir, new jersey eyaletinde yerleşim yeri
dixie|n.|amerikan iç savaşında güney eyaletleri marşı, amerika'nın güney eyaletleri, georgia eyaletinde şehir
bankers|n.|bankacılar, bankerler
superstitious|adj.|batıl, batıl inancı olan
clause|n.|fıkra
fudge|v.|kaçınmak, yarım yamalak yapmak, uydurmak
bennet|n.|karanfil kökü, nebraska eyaletinde şehir, nebraska eyaletinde yerleşim yeri
assignments|n.|temlik, sınavlar
councilman|n.|meclis üyesi, belediye meclisi üyesi, belediye encümen üyesi
slogan|n.|slogan
trinity|n.|üçlülük, üçlem, teslis
quadrant|n.|kuadrant, iletki, dairenin dörtte biri
boarded|adj.|tahtalı, pano ile kaplı, tahta ile kaplı
ivory|n.|fildişi rengi, fildişi, fil dişi
velocity|n.|sürat, hız
composer|n.|yazar, bestekar, yaratıcı
initiated|adj.|başlatılan, üyeliğe kabul edilmiş, başlatılmış
covert|n.|av kuşlarının saklandığı sık örtü, saklanılan yer, kaplama
builder|n.|kurucu, kuran, dülger
insignificant|adj.|önemsiz
dire|adj.|uğursuz, acil, müthiş
gears|n.|gemi takımları
comply|v.|boyun eğmek, razı olmak, uymak
credentials|n.|vesika, kimlik, hüviyet vesikası
organizations|n.|teşkilat
applaud|v.|alkışlamak
trend|v.|eğilim göstermek, meyletmek, eğimli olmak
providence|n.|vaktinde gerekli tedbirleri almayı bilme, tedbirlilik, öngörü
sparkle|v.|ışıldamak
chump|v.|çiğnemek, mankafa, alık
derrick|n.|dikme, vinç, petrol kuyusu iskelesi
donations|n.|hayrat
flooding|n.|taşkınlık, tufan, sel
maintained|adj.|korunan, korunmuş
snowing|n.|yağış, yağma, kar yağışı
ladyship|n.|hanımefendilik, hanımefendi
artifacts|n.|insan eliyle yapılmış şeyler, insan yapımı eşyalar
allegedly|adv.|iddia edildiğine göre, iddiaya göre, sözde
howl|v.|ulumak
deploy|v.|açmak, uygulamak, mevzilenmek
thornton|n.|iowa eyaletinde şehir, ingiltere'de yerleşim yeri, illinois eyaletinde yerleşim yeri
deposition|n.|depozito verme, görevden alma, bırakma (tortu)
fractures|n.|kırıklar
handshake|n.|tokalaşma
neglect|v.|ihmal etmek, ihmal
adapted|adj.|adapte, adapte edilen, uyarlanmış
patrols|n.|pusula keşif yolu, devriyeleri göndermek, askeri devriyeler
bess|n.|kadın ismi
hetty|n.|kadın ismi
protocols|n.|iletişim kuralları
overdue|adj.|günü geçmiş, geç kalmış, rötarlı
slayer|n.|katil, adam öldüren
headphones|n.|kulaklık, telefon kaskı, (ikili) kulaklık
identities|n.|kimlikler
appoint|v.|atamak
rotation|n.|dönüş, dönme, rotasyon
solely|adv.|sadece, yalnızca, ancak
aging|n.|yaşlanma
pitching|n.|fırlatma, atma, baş-kıç hareketi
examining|n.|inceleme, soruşturma, tahkikat
viewing|n.|görme, görüş, görüntüleme
memorize|v.|ezberlemek
freshen|v.|tazeleştirmek, tazelemek
mango|n.|hintkirazı, hıntkirazı, mango
valued|adj.|saygın, değerli, kıymetli
sonar|n.|deniz radarı, denizaltı dinleme cihazı, sonar
decay|v.|çürümek, çürük
eu|n.|ab, öropiyumun simgesi
nightfall|n.|gece karanlığı, akşam vakti, akşam karanlığı
olives|n.|zeytin
miniature|adj.|minyatür
omen|v.|kehanette bulunmak, işaret, alamet
kristin|n.|kadın ismi
bai|n.|bai, çin ve sudan’da yaşayan etnik bir grup
chum|v.|oda arkadaşı olmak, aynı odayı paylaşmak, dost olmak
posse|n.|takım, heyet, birlik
mutiny|v.|ayaklanmak, kazan kaldırmak, başkaldırmak
toaster|n.|ekmek kızartıcısı (elektrikli), ekmek kızartıcı, ekmek kızartma makinesi
span|n.|karış, süre
jumbo|n.|jumbo jet, kocaman şey, gezer kalıp
blames|n.|beceriksiz işçi suçu aletlerde bulur, alet işler, el övünür, oynamasını bilmeyen gelin yerim dar der
mystical|adj.|gizemli, gizemcil, esrarlı
researchers|n.|araştırmacılar
exposing|v.|maruz kalmak (kimyasal maddeye vb), maruz kalma, teşhir
dung|v.|gübrelemek, gübre, fışkılık
welsh|v.|dolandırmak, şartları yerine getirmemek, ödemeden kaçmak
frat|n.|okul derneği, erkek üniversite öğrencileri birliği/derneği, cemiyet
waterfall|n.|şelale, çağlayan
lifts|n.|asansörler
disgusted|adj.|bizar, bıkkın, nefret edilmiş
yikes|n.|biraz şaşkınlık veya korku ifade eden ünlem
windshield|n.|sinek teli, ön cam, otomobil ön cam
maintaining|n.|koruma, kollama
receives|v.|teslim almak, almak
plantation|n.|dikmelik, ekim, tarla (ekili)
antenna|n.|anten
bodyguards|n.|korumalar
havana|n.|havana, florida eyaletinde yerleşim yeri, illinois eyaletinde şehir
edit|v.|düzenlemek, (yazı) düzenleme
superficial|adj.|üstünkörü, yüzeysel
allergies|n.|alerjiler, alerji, aşırı duyarlılık
invites|v.|davet etmek
comparing|n.|kıyaslama, karşılaştırma, kıyas
dirk|n.|kama, iskoç kaması, kısa kılıç
cartoons|n.|karikatürler, resimli kartlar
mexicans|n.|meksikalılar
timber|n.|kalas, kereste
supervision|n.|teftiş, nezaret, denetim
siberia|n.|sibirya, tecrit bölümü
winding|n.|dönemeç, döndürme, dolama
rust|v.|paslanmak, pas
intensity|n.|yoğunluk
hiccup|n.|hıçkırık
francois|n.|francois fırını, francois-rextroth fırını
jogging|n.|hafif koşu, jogging, koşu
confrontation|n.|yüzleştirme
flyers|n.|el ilanları
trustworthy|adj.|güvenilir
coaster|n.|tahta peynirlik, kabotaj yapan gemi, kıyı boyunca işleyen ticari gemi
paragraph|n.|fıkra, paragraf
mosquitoes|n.|sivrisinekler
adios|interj.|güle güle, allahaısmarladık, hoşçakal
unexpectedly|adv.|beklenmedik bir şekilde
russo|n.|rus-türk savaşı, rus osmanlı savaşları
amuse|v.|eğlendirmek
splashing|n.|sıçrama, sıçrantı, sıçratma
soviets|n.|sovyetler
lorry|n.|kamyon
dominate|v.|hükmetmek, hakim olmak, egemen olmak
bundy|n.|bundaberg
jp|n.|sulh hakimi, japonya:jp
unreal|adj.|gerçek olmayan
screens|n.|ekranlar
mouthing|n.|ağzına geleni söyleme
failures|n.|arızalar arası ortalama zaman, banka iflasları, işletme başarısızlıkları
commanded|n.|kumandalı blok sinyali, gazve
recon|n.|keşif amacıyla yapılan araştırma, gözlemleme, bilgi toplama
representation|n.|temsil
bending|n.|iğme, kıvırma, esneme
gallant|adj.|yürekli, cesur
satisfying|adj.|doyurucu, tatmin edici
cheater|n.|hilebaz, aldatan (eş)
pornography|n.|pornografi
urn|n.|kupa, semaver, ölü küllerinin saklandığı kap
assign|v.|devretmek, atamak, tahsis etmek
uncles|n.|dayı, amca
vine|n.|üzüm asması, bağ kütüğü, asma
auspicious|adj.|elverişli, tekin, hayırlı
tripping|n.|hafif dans, sendeleme, hafif adımlarla yürüme
seafood|n.|deniz mahsulleri, deniz ürünü, deniz mahsulü
mellow|v.|yumuşamak, yumuşatmak, olgunlaşmak
announcing|n.|bildiri, duyuru, tefhim
resumes|n.|özgeçmişler
hawaiian|n.|hawaili, havai dili
ac|abrev.|alternatif akım, klima, aktinyumun simgesi
centers|n.|alışveriş merkezleri, yenilik bilgi merkezi, halk evleri
adultery|n.|zina
scatter|v.|dağıtmak, saçmak, dağılmak
lotion|n.|losyon
opposing|n.|ters düşme, karşı çıkma, karşılıklı
dominated|adj.|hakim olan, boyunduruğu altına girmiş, hükmedilen
unpack|v.|açıp boşaltmak (bavul vb'ni), boşaltmak, açmak (paket vb)
violate|v.|ihlal etmek
transmit|v.|iletmek
testicles|n.|hayaları sıkma, haya burma, şişmiş testisler
ames|n.|iowa eyaletinde şehir, oklahoma eyaletinde yerleşim yeri, teksas eyaletinde şehir
hungary|n.|macaristan
albums|n.|albümler
well-being|n.|hayır, iyi oluş, sağlık
porridge|n.|yulaf lapası, suyla veya sütle pişirilen lapa, lapa
gavel|n.|oturum başkanının tokmağı, tokmak, yargıç tokmağı
rattles|n.|bebek çıngırakları
eliot|n.|maine eyaletinde yerleşim yeri
titties|n.|göğüsler, memeler
strengthen|v.|sağlamlaştırmak, kuvvetlenmek, güçlendirmek
sensitivity|n.|hassaslık, duyarlılık, hassasiyet
fitzgerald|n.|georgia eyaletinde şehir
tamara|n.|kadın ismi
removal|n.|sökme, kaldırma, çıkarma
sacks|n.|kağıt torbalar, kağıt torba imalatı, deney için boş torbalardan numune alma
downloaded|adj.|yüklenen
morocco|n.|faslı, fas, maroken
sniffling|v.|burnunu çekmek, burun çekme
crowns|n.|taçlar, kronlar
nerds|n.|inek öğrenci, gıcık, kıl
accepts|v.|kabullenmek, kabul etmek
hive|n.|kovan
outdoor|adj.|açıkhava
dew|n.|çiy
ing|n.|boş yere koşuşturma, taşak yapmak, dalga geçmek
mt|n.|metrik ton
currents|v.|dolaşıma girmek, elektrik akımları, (suda, nehirde) akıntı var mı?
explanations|n.|izahat
soaking|n.|sıvıya daldırma, sıvıya batırma
tanaka|n.|tanaka deseni
vitals|n.|hayati organlar, dirimsel organlar
navigation|n.|navigasyon, seyrüsefer
joins|n.|birleşimler, birleşim, birleşim sayısı
intrigued|adj.|kafası biraz karışmış, merakı uyanmış
harp|v.|ısrarla belirtmek, durmak, arp (çalgı)
margin|n.|marj, kenar boşluğu
everett|n.|massachusetts eyaletinde şehir, pensilvanya eyaletinde yerleşim yeri, washington eyaletinde şehir
anthem|n.|marş
kylie|n.|bir ucu düz diğer ucu konveks bumerang, kadın ismi
distracting|adj.|dikkat dağıtan, rahatsız edici, dikkat dağıtıcı
fertility|n.|doğurganlık
amazingly|adv.|şaşırtıcı bir şekilde
horrific|adj.|aşırı, ürkünç, korkunç
indictment|n.|itham, suçlama, dava açma
superstition|n.|uydurma, batıl inanç, itikat
ultrasound|n.|ultrason, sesüstü dalga, sesüstü
shifted|adj.|yeri değiştirilmiş, değiştirilmiş, yön değiştirdi
sincerity|n.|samimiyet
hamburg|n.|arkansas eyaletinde şehir, güney carolina eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri
davy|n.|yeminli beyan, yemin, batı virginia eyaletinde yerleşim yeri
trashed|adj.|bitkin, çöp, bitik
casper|n.|erkek ismi, gittim, kaçtım
dumplings|n.|çorba içinde küçük hamur parçaları, hamurlu yeşil mercimek çorbası, hamur tatlısı
digest|v.|hazmetmek
whacked|adj.|bitkin, yorgun, kafadan kontak
jacks|n.|beş taş oyunu, beştaş, beş taş (oyun)
casualty|n.|kazazede, yaralı/ölü
bethany|n.|kadın ismi, batı virginia eyaletinde yerleşim yeri, connecticut eyaletinde şehir
thump|v.|ağır ve gürültülü bir şekilde indirmek, yumruk patlatmak, muşta vurmak
proportion|n.|orantı, oran
quantity|n.|nicelik, miktar
deceiving|n.|aldatma, aldatan
weave|v.|dokumak, örmek, örme
corrupted|adj.|virüslü, bozuk, lekelenmiş
gallows|n.|darağacı
budge|v.|oynamak, yerinden oynatmak, hareket etmek
fraction|n.|fraksiyon, kesir
afar|n.|cibuti, eritre ve etiyopya halkının bir üyesi, afar'ın cushitic dili, uzakta
measurements|n.|ölçüler, ölçü birimi
landlady|n.|ev sahibesi, kiraya veren, evini kiraya veren mal sahibi kadın
certified|adj.|onaylı
dusk|n.|alacakaranlık, gün kararması, akşam karanlığı
insisting|adj.|ısrar eden
hilton|n.|hapishane, güney carolina eyaletinde yerleşim yeri
indoors|adv.|içeriye, evde, içeride
hawkeye|n.|keskin bakış, iowa eyaletinde şehir
saliva|n.|salya, tükürük
homey|n.|kanka, ev gibi, rahat
whispered|adj.|fısıldanan
maura|n.|norveç'te köy
cyanide|n.|siyanür, siyanid
marched|v.|yürüyüş yapmak (topluca), yürüyüş (topluca), mart ayı
accounted|v.|sayılmak, muhasebeleşmiş gelir, herkes hazır ve nazır
diver|n.|dalgıç
eligible|n.|hak sahibi, seçkin, nitelikli
robbins|n.|illinois eyaletinde yerleşim yeri, north carolina eyaletinde yerleşim yeri
messes|n.|karışıklık, karmakarışıklık, dağınıklık
abandoning|n.|terketme
blossoms|v.|eş (kadın) aramak, evlenecek kadın aramak, kabak çiçeği
wiggle|v.|oynatmak, kıvrılmak, oynamak
awaken|v.|uyandırmak
cid|n.|asit, lsd
stained|adj.|lekeli
ballard|n.|utah eyaletinde şehir
elevated|adj.|keyifli, yüksek, yüce
transparent|adj.|saydam, şeffaf
unclear|adj.|belirsiz
strokes|n.|vuruş sayısı, zevkler ve renkler tartışılmaz, damlaya damlaya göl olur
aria|n.|arya
solidarity|n.|dayanışma
sidekick|n.|yardımcı, kader arkadaşı
starter|n.|ordövr, aperitif, maya
regarded|adj.|addedilen
corinne|n.|utah eyaletinde şehir
vulcan|n.|metal işçisi, vulcan
bradford|n.|ingiltere'de yerleşim yeri, illinois eyaletinde yerleşim yeri, ingiltere'de şehir
belgian|n.|belçikalı, belçikaca, belçika'ya özgü
seemingly|adv.|sureta, zahiren, görünürde
cling|v.|tutunmak, sarılmak, yapışmak
components|n.|parçalar
vibrates|v.|titremek
missouri|n.|amerika'da eyalet
constance|n.|sabitlik ilkesi, konstanz gölü
batting|n.|sopa ile vurma, vuruş, tabaka halinde pamuk
sap|n.|dirilik, bitki özü
marbles|n.|misket oyunu, bilya oyunu, madik
shifting|n.|pişkinlik, kaydırma, yer değiştirme
wiping|n.|silme
refill|v.|yeniden doldurmak, yeniden dolmak, yedek kalem içi
famine|n.|kıtlık
sneeze|v.|aksırmak
puzzles|n.|bilmeceler
provisions|n.|erzak
syringe|n.|enjektör, şırınga
platinum|n.|platin, platin (simgesi pt)
preferably|adv.|tercihen
oyster|n.|istiridye, iskorçina
exhaust|n.|egzoz
electromagnetic|adj.|elektromanyetik, elektrikli mıknatıssal, elektrikle mıknatıslanır
consumer|n.|tüketici
lasagna|n.|lazanya, lasanya, üstüste tabakalar halinde makarna
catastrophic|adj.|felaketli, felaket, feci
winchester|n.|connecticut eyaletinde şehir, ingiltere'de şehir, idaho eyaletinde şehir
be-|v.|kesilmek, kilitlenmek, çalınmak
evacuated|adj.|boşaltılmış, tahliye edilmiş, vakumlanmış/hapsedilmiş
serge|n.|şayak, ince şayak, serj
relic|n.|eski eser, rölik, hatıra
describes|v.|betimlemek, tanımlamak, tarif etmek
merger|n.|birleşme
muck|v.|gübrelemek, pisletmek, yaş gübre
buds|v.|damak zevkine hitap etmek, damak zevkini okşamak, damak tadına hitap etmek
socially|n.|sosyal yönden özürlü çocuklar, sosyal yönden özürlüler, topluma mal olmuş şahıs
enlisted|adj.|kaydedilmiş, kaydolmuş, gönüllü asker
deposits|n.|banka mevduatı, mevduat, tevdiat
philippines|n.|filipin, filipinler
archbishop|n.|başpiskopos, baş piskopos
smuggle|v.|kaçırmak, gümrükten mal kaçırmak, gizlice sokmak (mektup vb)
climax|n.|doruk
progressive|n.|ileri düşünceli kimse, müterakki, ilerleyici (hastalık)
wheezing|adj.|hırıltılı, hırıltılı solunum, vizing
singles|n.|bekar odaları, bekarlar kulübü, bekarlar günü
pillar|n.|sütun
fearful|adj.|korku veren, korkunç
spade|n.|bahçıvan küreği
saucer|n.|çay tabağı, fincan tabağı, çay altlığı
ratio|n.|oran
craving|n.|şiddetli arzu, ihtiras, hasret
addicts|n.|uyuşturucu bağımlıları, uyuşturucu bağımlılığı, insanlar telefon bağımlısı mı oluyorlar?
clifford|n.|erkek ismi, indiana eyaletinde yerleşim yeri, kuzey dakota eyaletinde şehir
nashville|n.|arkansas eyaletinde şehir, georgia eyaletinde şehir, illinois eyaletinde şehir
beauties|n.|güzellikler, güzel kızlar
obscure|v.|saklamak, gizlemek, karartmak
signora|n.|bayan (italyanca)
troublesome|adj.|sıkıntılı, belalı, zahmetli
rubble|n.|moloz
largely|adv.|büyük bir ölçüde, büyük ölçüde, avuç avuç
fong|n.|fong sendromu
admiration|n.|hayranlık, takdir
lizzy|n.|erken dönem otomobiller, küçük ve ucuz otomobil
flap|v.|kanat çırpmak
brutality|n.|vahşilik, gaddarlık
mariana|n.|kuzey mariana adaları, mariana çukuru, mariana adaları
prevail|v.|galebe çalmak, üstün gelmek, yenmek
tattooed|adj.|dövme yaptırmış, dövmeli
brats|n.|çocuk, yaramaz çocuk, şımarık çocuk
anguish|v.|acı çekmek, ıstırap çekmek, sıkıntı çekmek
whim|n.|geçici istek, heves
nada|n.|hiç
leaks|expr.|çatı akıyor, egzoz kaçakları
cum|n.|sperm, meni, vasıtasıyla
cupid|n.|aşk tanrısı
colonial|adj.|sömürge
frau|n.|kadın (almanca)
speeds|v.|birini saatte yüz mil hız yaparken yakalamak, iki hızlı avrupa, hızlar ve ilerlemeler
perpetrator|n.|suç işleyen, fail
watermelon|n.|karpuz
emptied|adj.|boşaltılmış
sponsored|n.|işveren sağlık sigortası desteği, devlet sponsorluğunda, devlet destekli
rooftop|n.|dam (bina vb), bina çatısı
athena|n.|atena, (yunan mitolojisinde) zeka tanrıçası
managers|n.|orta yöneticiler, idare heyeti, müdürler kurulu
extraction|n.|çıkartma, çıkarma
stat|adv.|derhal, dosya durum bilgisi
rhino|n.|mangır, gergedan
diarrhea|n.|ishal
disregard|v.|umursamamak, takmamak, ihmal etmek
warmed|adj.|ısıtılmış
goggles|n.|gözlük
colombia|n.|kolombiya
struggles|n.|sosyal mücadeleler
fitness|n.|formda olma
scalp|v.|kafa derisini yüzmek, kafa derisi
veterans|n.|gaziler
suitcases|n.|bavullar
watchman|n.|bekçi
caress|v.|okşamak
exclusively|adv.|özellikle, yalnız, yalnızca
disciple|n.|mürit, öğrenci, çömez
misty|adj.|sisli
aura|n.|atmosfer, buhar, bir şeyin yaydığı koku
helm|n.|dümen
crockett|n.|teksas eyaletinde şehir
inhale|v.|soluk almak
buckets|v.|şakır şakır yağmak, çok terlemek, ter dökmek
adored|adj.|taparcasına sevilen, hayran olunan
shillings|n.|şilin, yenilgi, eski ingiliz gümüş parası
tents|n.|çadırlar
revoir|interj.|hoşçakal, güle güle
hedge|n.|çit
snorting|n.|burnundan soluma, burundan çekme
viper|n.|engerek
digger|n.|kazıcı
breaker|n.|kırma makinesi, kıran şey veya kimse, dev dalga
meatballs|n.|içli köfte, ızgara köfte, alinazik kebabı
suppress|v.|bastırmak
witty|adj.|hazırcevap, esprili, nükteli
wonderfully|adv.|mükemmelce
shogun|n.|shogun tahvili
encouragement|n.|teşvik
intercepted|adj.|yolu kesilen
goddamned|adj.|kahrolası
posting|n.|bilbord reklamının yerine yerleştirilmesi, kayıt, atama
cleanse|v.|arındırmak, arıtma yapmak, tertemiz yapmak
competitor|n.|yarışmacı, rakip
abbot|n.|manastır reisi, başkan (erkekler manastırında), başrahip
trenches|n.|siper, mevzi
sizzling|n.|cızırdama, cızırdayan, cızırtılı
lyon|n.|liyon, mississippi eyaletinde yerleşim yeri
mustang|n.|yabani at, amerika'ya özgü bir yabani at, mustang
kg|n.|kilogram
rested|adj.|dinlenmiş
reflected|adj.|yansıtılmış, yansıtılan, yansıyan
stand-up|adj.|ayakta yapılan, dik, kalkık
habitat|n.|bitkilerin doğal yetiştiği yer, ortam, hayvan
molecular|adj.|moleküllü, özdeciksel, moleküle ilişkin
obnoxious|n.|çirkinlik, pis, kötü
wraith|n.|tayf, hayalet, sıska tip
sarcasm|n.|dokunaklı alay, dokundurma, acı söz
tung|n.|çin yağı, ham çin yağı, ham tung yağı
renowned|adj.|ünlü
wildly|adv.|çılgınca, çılgın gibi, delimsirek
blondie|n.|sarı/sarışın
refund|v.|geri ödemek
goon|n.|kiralık katil, kundakçı, şavalak
pulp|n.|posa
exaggerated|adj.|abartılmış, abartılı
embedded|adj.|ankastre, gömülü
chateau|n.|şato, büyük kır evi, malikane
harlan|n.|iowa eyaletinde şehir, kentucky eyaletinde şehir
provoked|adj.|kışkırtılan
antony|n.|erkek ismi
nile|n.|nil nehri
cages|n.|kafesler
skates|n.|tek sıra tekerlekli paten, acele et!, çabuk ol!
resemble|v.|benzemek, andırmak
sticker|n.|çıkartma
lennox|n.|kaliforniya'da bir kasaba, güney dakota eyaletinde şehir
unstoppable|adj.|durdurulamaz, durmak bilmez
veal|n.|süt danası, buzağı eti, vajina
fe|n.|demirin simgesi
isle|n.|ada, minnesota eyaletinde şehir
characteristics|n.|nitelik, özellik, karakter özellikleri
earthquakes|n.|depremler
cold-blooded|adj.|merhametsiz, acımasız, hunhar
ambushed|adj.|pusuya düşmüş, pusuya düşürülmüş
zap|v.|vurmak, yenmek, öldürmek
reaper|n.|orakçı
deployed|adj.|sevk edilmiş (ordu), yayılış
biblical|adj.|kitabı mukaddes'e ait, incile ait, incille ilgili
puck|n.|afacan peri, cin, yaramaz çocuk
mystic|n.|gizemci, esrarlı, sufi
gaby|n.|keriz, safdil, avanak
intends|v.|niyet etmek
muffins|n.|İngiliz usulü muffin, zencefilli muffin
speedy|adj.|hızlı
republicans|n.|cumhuriyetçiler
bolts|n.|cıvata dişleri
hoax|v.|işletmek, oyun etmek, sazanlamak
raided|adj.|baskına uğramış
intersection|n.|kavşak
presently|adv.|şimdi, halen, birazdan
supplier|n.|tedarikçi
shuffle|v.|ayaklarını sürümek, ağız yapmak, kağıtları karmak
edited|adj.|düzeltilmiş, düzenlenmiş, editlenmiş
rubbed|adj.|çitili, düzlenmiş, pürüzleri alınmış
vegan|n.|vegan, hayvan ürünleri yemeyen ve kullanmayan kimse
outdoors|n.|açık hava, açık havada, açıkta
distinctive|adj.|farklı, karakteristik, kendine özgü
upcoming|adj.|olmak üzere olan, gelecek, olacak
brighton|n.|ingiltere'de bir şehir, illinois eyaletinde yerleşim yeri, iowa eyaletinde şehir
wagons|n.|vagon katarı, katır kervanı, gelecek olan saldırıya hazırlanmak
granger|n.|çiftçi, iowa eyaletinde şehir, missouri eyaletinde yerleşim yeri
peeing|n.|çiş yapma, işeme
oracle|n.|torpil, kehanet, kahin
glitter|v.|parıldamak, parıltı
amulet|n.|muska
suspend|v.|askıya almak
guild|n.|lonca
convertible|n.|üstü açılabilen araba, üstü açılabilir araba, üstü açılır araba
squared|adj.|karesi alınmış, çaplanmış
battling|n.|savaş, muharebe
steward|v.|kahyalık yapmak, yönetmek, idare etmek
weston|n.|batı virginia eyaletinde şehir, connecticut eyaletinde şehir, florida eyaletinde şehir
gateway|n.|kapı, geçit
rites|n.|törenler ve seremoniler, evlilik adetleri ve törenleri, edebiyatta törenler ve seremoniler
distributed|adj.|dağıtılmış
pavement|n.|kaldırım
projector|n.|projektör
rugby|n.|ragbi, ingiltere'de yerleşim yeri, kuzey dakota eyaletinde şehir
fragment|n.|fragman
baldwin|n.|florida eyaletinde yerleşim yeri, georgia eyaletinde şehir, illinois eyaletinde yerleşim yeri
obscene|adj.|müstehcen
zebra|n.|zebra, hakem
raping|v.|ırzına geçmek, tecavüz etmek, ırza geçme
analyst|n.|çözümlemeci, analist, araştırmacı
eta|n.|ita, eta terör örgütü
elbows|v.|ile karşılaşmak, ile bir araya gelmek, ile bir arada olmak
detonator|n.|kapçık, fünye, funya
rails|n.|tren rayları, kanal
earthly|adj.|dünyevi
modesty|n.|haya, ar, alçakgönüllülük
assess|v.|değer biçmek
vinci|n.|da vinci cerrahi sistemi
librarian|n.|kütüphaneci
moran|n.|kansas eyaletinde şehir
suffice|v.|yetmek
gravitational|adj.|yerçekimi, çekimsel, yerçekimiyle ilgili
crowley|n.|louisiana eyaletinde şehir, teksas eyaletinde şehir
slumber|v.|uyumak, uyuklamak, pineklemek
bribes|n.|rüşvet
aces|v.|ipler elinde olmak, kozları elinde bulundurmak, tüm kozları elinde bulundurmak
sodium|n.|sodyum
hubert|n.|birinin alabileceği en saygın övgü/iltifat, çok saygın biri tarafından övülme, çok saygın birinin övgüsünü alma
trajectory|n.|münhani, mermi yolu, yörünge
credible|adj.|inandırıcı, güvenilir
declined|adj.|red
canary|n.|kanarya
eyesight|n.|görüş, görme duyusu, görme yeteneği
jug|v.|güveçte pişirmek, kodese tıkmak, şakımak
duplicate|v.|kopya etmek, iki ile çarpmak, çift yapmak
developments|n.|olaylar, gelişmeler
capitalism|n.|sermayecilik, anamalcılık, kapitalist ekonomi
polished|adj.|cilalı, cilalanmış
defenses|n.|savunma
xi|adj.|onbirinci
crates|n.|sandık, kafesli sandık
fences|v.|arayı yapmak, saygı komşuluğu ayakta tutar, acele etmek
differ|v.|ters düşmek, değişik olmak, anlaşamamak
chaotic|adj.|karmakarışık, kaotik, karman çorman
gardening|n.|bahçecilik, bahçıvanlık, bahçe işleri
gram|n.|nohut, gram
tinker|v.|üstünkörü tamir etmek, bir şeyi düzeltmeye çalışmak, tamir etmek
forecast|v.|tahmin etmek, tahmin
ti|n.|si, titanium, kordilin
pinched|adj.|züğürt, çimdiklenmiş, kısık
tangled|adj.|girift, allak bullak, karışık
macy|n.|indiana eyaletinde yerleşim yeri
plunge|n.|dalma
bulletproof|adj.|kurşun koruyucu, kurşun geçirmez, dayanıklı
module|n.|ölçü birimi, kip, miyar
firewood|n.|yakacak odun, odun, çıra
pizzas|n.|pizza
overly|adv.|fazlaca, aşırı derecede
retail|n.|perakende satış, perakende
grover|n.|north carolina eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
appalling|adj.|müthiş, dehşete düşüren, korkunç
rows|n.|satırlar
felicia|n.|kadın ismi
concentrating|n.|derişimleme süreçleri, yoğunlaştırıcı güneş kollektörü, yoğunlaştırıcı güneş kolektörü
transferring|n.|nakletme, dalkavukluk, nakil
mash|v.|lapa yapmak, püre yapmak, ezmek
growl|v.|hırıldamak, hırlamak
sliced|adj.|kesilmiş, dilimlenmiş
rewards|v.|hak ettiğini almak, hak ettiğini bulmak, hak ettiği cezayı almak
braces|n.|askı, pantolon askısı, payanda
livestock|n.|hayvancılık, canlı hayvan, çiftlik hayvanı
users|n.|kullanıcılar, kişiler
recruiting|n.|askere alma, çalıştırma, asker toplama
gunman|n.|silahlı adam, tüfekçi, silahlı soyguncu
dictate|v.|dikte etmek
bathrooms|n.|banyolar
nobles|adj.|soylu, asil
picky|adj.|seçici
platter|n.|kayık tabak, servis tabağı, tahta düz tabak
vultures|v.|akbabalar gibi üşüşmek, akbabalar gibi dolaşmak, akbabagiller familyası
organism|n.|canlı varlık, örgüt, yapı
sweeter|adj.|daha tatlı, tatlı
scarecrow|n.|korkuluk
manufacturing|n.|imalat
pup|v.|yavrulamak (köpek/kurt/fok vb), yavrulamak (köpek), züppe
mitzvah|n.|sevap, sünnet (musevilik), sevap (musevilik)
crackles|n.|raller
proudly|adv.|onurlu bir şekilde, gururla, iftiharla
interpreter|n.|tercüman
leigh|n.|kadın veya erkek ismi, ingiltere'de yerleşim yeri, nebraska eyaletinde yerleşim yeri
genetically|adv.|genetik olarak
frying|n.|kızartma
redeem|v.|bedelini verip geri almak, amorti etmek, sönümlemek
cara|n.|ruh arkadaşı
ledge|n.|çıkıntı, kaya tabakası, resif
tyranny|n.|zorbalık
charleston|n.|çarliston, batı virginia eyaletinde şehir, güney carolina eyaletinde şehir
cutest|adj.|en çekici, en hoş
skins|n.|lastikler, sigara kağıdı
rosy|n.|gül rengi, gül gibi, al
nomination|n.|aday gösterme, tayin, adaylık
textbook|n.|ders kitabı, okuma kitabı
descendants|n.|zürriyet, nesil, ahfad
sabine|n.|karaardıç
saunders|n.|birnbaum-saunders dağılımı, kırmızı sandalağacı
hast|n.|have fiilinin eski hali
dubois|n.|idaho eyaletinde şehir, pensilvanya eyaletinde şehir, wyoming eyaletinde yerleşim yeri
finland|n.|finlandiya
unsolved|adj.|çözülmemiş
pioneer|n.|öncü
or-|adv.|aşağı yukarı, az çok, ya da
hugged|v.|kucaklamak, sarılmak, (fikir) sıkı sıkıya bağlı olmak
angelica|n.|kadın ismi, anjelika, melekkökü
throttle|v.|klapeyle bir şeyin akışını kısmak, istimi kesmek, boğazlamak
powered|adj.|motorla tahrik edilen, tahrikli
carving|n.|oymacılık, oyma
thrive|v.|thrived/throve - thrived/thriven, serpilmek, gelişmek
allergy|n.|allerji, duyarca, antipati
pong|v.|pis kokmak, koku, pis koku
squares|n.|kareler, dörtköşeler, dört köşe kesitli çubuklar
alphabet|n.|alfabe
threesome|n.|üçlü grup, üçlü seks, üç
accordingly|adv.|dolayısıyla, ona sebep, bu yüzden
sect|n.|tarikat, mezhep
maternity|n.|annelik, doğum, analık
scarce|adj.|kıt, nadir
internship|n.|staj
tones|v.|gevrek gevrek gülmek, çağrı kotarılma tonları, frekans modülasyonlu tonlar
sirs|n.|sirs
unwell|adj.|hasta, keyifsiz, rahatsız
nellie|n.|kadınsı erkek homoseksüel, ohio eyaletinde yerleşim yeri, eşcinsel erkek
import|v.|ithal etmek
temporal|adj.|geçici, şakak
mohammed||dağ yürümezse abdal yürür
anticipate|v.|beklemek, ummak
democrats|n.|demokratlar
terminated|adj.|son verilen, son verilmiş, sonlandırıldı
spree|n.|aşırı derecede yapılan bir şey, eğlence, alem
ami|n.|tayvan'da yaşayan bir etnik grup, akut miyokard infarktüsü
interviewer|n.|görüşmeyi yapan kimse, muhabir, röportajcı
respectfully|adv.|saygılı bir biçimde, hürmetle
futile|adj.|nafile
dictator|n.|diktatör
stuffy|adj.|havasız
mammals|n.|memeli hayvanlar, memeliler
fasten|v.|bağlamak
neptune|n.|neptün, deniz, okyanus
giggle|v.|kıkırdamak
grandchild|n.|torun, büyük çocuk, torun torba
pharmaceutical|adj.|eczacılığa ait, ilaç kullanımına ait, ilaç kullanımı ile ilgili
persian|n.|acem, farsça, acemce
tactic|n.|taktik
itching|n.|kaşınma, kaşıntı, kaşındırıcı
observer|n.|gözlemci
tesla|n.|tesla, manyetik endüksiyon ölçme birimi
wallpaper|n.|duvar kağıdı
thorne|n.|ingiltere'de yerleşim yeri
austrian|n.|avusturyalı, avusturya, avusturya'ya özgü
output|v.|output/outputted - output/outputted, faaliyet, ürün
goliath|n.|dev, değişik kombinasyonlardan oluşan 247 bahis
trophies|v.|hayvan başları ile süslemek, kupalarla süslemek, yadigarlarla süslemek
joyful|adj.|sevinçli
spouse|n.|eş
rightly|adv.|hakkıyla, doğru, emin olarak
hobbies|n.|hobiler
naming|n.|adlandırma, isim koyma, ad koyma
yates|n.|new york eyaletinde yerleşim yeri
stale|v.|bayatlamak, bayat
teamwork|n.|takım çalışması, ekip çalışması, grup çalışması
obedient|adj.|itaatkar
switches|n.|makas, demiryolu makası, kontaktör-anahtarlar
rating|n.|derece, derecelendirme
regulation|n.|düzenleme
raving|n.|çılgınlık, abuk sabuk söz, zırva
dioxide|n.|dioksit, iki oksijenli
boner|n.|gaf
bc|n.|kitap gezdirme, gezgin kitap
implant|v.|dikmek, ekmek, kafasına sokmak
mari|n.|mari, mari cumhuriyeti’nde yaşayan etnik bir grup
satisfactory|adj.|tatmin edici
espresso|n.|ekspreso, italyan usulü kahve, ekspreso kahve
bach|n.|bekar, bekar erkek, yalnız (başına)/bekar hayatı yaşamak
sleeper|n.|uykucu
construct|v.|inşa etmek
rations|n.|tayın, asker azığı, kumanya
munch|v.|katur kutur yemek, katır kutur yemek, hatır hatır yemek
coordinate|v.|koordine etmek
stag|n.|erkek geyik
dominique|n.|kadın ismi
backseat|n.|arka koltuk, itibarsız pozisyon
analyzed|adj.|analiz edilmiş, çözümlenen, çözümlendi
reschedule|v.|yeniden planlamak, yeniden programlamak, programı tekrar ayarlamak
uphold|v.|upheld - upheld, savunmak (bir hakkı/prensibi), tutmak
sorority|n.|kız öğrenci yurdu, hemşirelik, kızlar birliği
bono|n.|abron, batı afrika'da yaşayan etnik bir grup, bono
princeton|n.|batı virginia eyaletinde şehir, indiana eyaletinde şehir, illinois eyaletinde şehir
inconvenient|adj.|zahmetli, uygunsuz
crumbs|v.|ekmek kırıntılarını takip etmek, yiyecek kırıntısı, ekmek kırıntıları
reconstruction|n.|yeniden yapılanma
pipeline|n.|boru hattı
reunited|adj.|yeniden birleştirilmiş, yeniden birleşmiş
confidentiality|n.|gizlilik
embraced|adj.|kucaklanmış, benimsenmiş, kabul edilmiş
overruled|expr.|reddedildi (mahkeme)
enlightenment|n.|bilgilenme, ilim, aydınlanma
puddle|n.|su birikintisi
mortals|adj.|ölümcül, fani, ölümlü
comfortably|adv.|rahatça, rahat bir şekilde
vlad|n.|kazıklı voyvoda
ukraine|n.|ukrayna
swam|expr.|geçen cumartesi yüzdüm
annette|n.|kadın ismi
demonic|adj.|şeytani
demise|v.|feragat etmek, vasiyetle devretmek, bırakmak
fungus|n.|mantar hastalığı, mantar, küf
barefoot|adj.|yalınayak, yalın ayak, çıplak ayak
tacos|n.|tako, jantı eğme
skeletons|v.|utanılacak bir sırrı olmak, birinin kirli çamaşırları, kirli çamaşırlar
beak|v.|gagalamak, ibrik ağzı, gaga
fanfare|n.|giriş müziği, nefesli çalgıların hep birlikte çaldığı parça, tantana
maryland|n.|maryland, amerika'da eyalet, new york eyaletinde yerleşim yeri
felipe|n.|new mexico eyaletinde yerleşim yeri
picard|n.|picard yöntemi
mascot|n.|muska, uğur, maskot
drastic|adj.|şiddetli, esaslı, pek etkili
proceeding|n.|konferans, gidiş, dava muamelesi
presidents|n.|devlet başkanları
intrude|v.|izinsiz girmek
stiles|n.|wisconsin eyaletinde yerleşim yeri
sums|v.|hesap yapmak, büyük meblağlar, büyük paralar
deprived|adj.|mahrum, yoksun
advertisement|n.|reklam
farting|n.|carta, osurma
straightened|v.|düzeltilmek, doğrultmak, doğrultulmuş panel
foremost|adj.|baş, gelişmiş, en başta gelen
adjustment|n.|ayarlama, ayar
charade|n.|maskaralık, sessiz sinema oyunu, saçmalık
blanks|n.|boşluklar, boş olanlar
puncture|v.|patlatmak (lastik/balon vb'ni), patlatmak, yıkmak
spank|v.|dövmek, şaplak atmak, kıçına şaplak atmak
utah|n.|amerika'da eyalet
booing|v.|yuhalamak
abs|n.|karın kasları, abs sistemi anti blokaj sistemi, abs sistemi
minimal|adj.|asgari, minimum, en küçük
gals|expr.|kızlar, siz kızlar
flashes|v.|film şeridi gibi gözlerinin önünden geçmek
requirements|n.|gerekenler, gereksinimler
greenhouse|n.|sera
marx|n.|marx, marks
vermont|n.|amerika'da eyalet, illinois eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
comprehend|v.|kavramak, anlamak, idrak etmek
canoe|n.|kano
baton|n.|cop
arsehole|n.|puşt, kıç deliği, büzük
graduating|v.|mezun olmak, mezun
partially|adv.|kısmen
sensing|n.|hissetme, atım kıymetlendirmesi, kıymetlendirme
kinky|adj.|karışık, garip, müstehcen
titans|n.|devlerin randevusu
microscope|n.|mikroskop, gözetleç, minilgöreç
intimidating|adj.|göz korkutucu, caydırıcı
ren|n.|ren
territories|n.|bölgeler
vaguely|adv.|hayal meyal, belirsiz bir şekilde, belli belirsiz
geese|n.|kazlar, kaz kafalılar
hardship|n.|zorluk, güçlük
exceptions|n.|özel durumlar, istisnalar, kural dışı durumlar
jing|n.|çin’de yaşayan etnik bir grup, gin, jing
gramps|n.|büyük baba
doubles|n.|çiftler maçı, teniste çiftler maçı, çiftler
knitting|n.|örme, örgü
slowed|adj.|yavaşlamış, yavaşlatılmış
administrator|n.|yönetici, idareci
blacksmith|n.|nalbant
tolling|n.|zamanaşımının kesilmesi
correspondence|n.|yazışma, mektuplaşma
fashionable|adj.|modaya uygun
overlooked|adj.|gözden kaçmış
matron|n.|yaşlı ve muhterem evli kadın, ana, evli kadın
arcade|n.|sırakemerler, kemeraltı, mimari kemer
gestures|n.|vücut hareketleri, jestler
quits|adj.|fit olmuş, fit, ödeşmiş
outnumbered|v.|az kalmak
lockhart|n.|güney carolina eyaletinde yerleşim yeri, teksas eyaletinde şehir
verbal|adj.|sözlü
mc|n.|protokol görevlisi, teşrifatçı, rep vokalisti
terminate|v.|son vermek
hosts|n.|ermişler, melekler, azizler
rye|n.|çavdar, ingiltere'de yerleşim yeri, kolorado eyaletinde şehir
chirps|v.|yazmak/asılmak
presidency|n.|başkanlık
roberta|n.|kadın ismi, georgia eyaletinde şehir
devote|v.|adamak
dumps|n.|neşesizlik, hüzün, kuruntu
hallo|interj.|selam, alo
improvise|v.|irticalen söylemek, tuluat yapmak, doğaçtan söylemek
pooh|v.|küçümsemek, burun kıvırmak, aşağılamak
starship|n.|yıldızlararası uzay gemisi
spades|n.|kürekler, pik
fumes|n.|buhar, duman, gaz
cawing|n.|gaklama, karga sesi çıkarma, (kuş) sert ve çirkin ötüş
aluminum|n.|alüminyum (simgesi al), alüminyum, aluminyum
squeak|n.|gıcırtı
drafted|adj.|askere yazılmış
everest|n.|kansas eyaletinde şehir
commonwealth|n.|ulus, milletler topluluğu, eyalet
cappuccino|n.|kapuçino
cucumber|n.|hıyar, salatalık
inventor|n.|mucit
folder|n.|klasör
slamming|adj.|muhteşem, müthiş, harika
favours|prep.|lehinde, -e taraftar, kendine iyi etmemek
peppers|n.|biber
appeals|n.|temyiz kurulu, yüksek mahkeme, yüksek yargıtay
walton|n.|ingiltere'de yerleşim yeri, indiana eyaletinde yerleşim yeri, kansas eyaletinde şehir
reasoning|n.|muhakeme
adequate|adj.|yeterli, kafi, elverişli
snickers|v.|kişnemek, kıs kıs gülmek, kıs kıs gülme
glued|adj.|zamklanmış, yapıştırılmış, tutkallanmış
ifs|n.|ninemin sakalı olsaydı dedem olurdu, hayat keşkelerle (eğerlerle) geçmez, mazeretler
nets|n.|ağlar
hangar|n.|hangar
godmother|n.|vaftiz anası, vaftiz anne
empty-handed|adj.|eli boş
forum|n.|toplantı, oturum, forum
joys|adj.|mutluluktan uçacak gibi, coşku dolu, çok mutlu olmak
foolishness|n.|akılsızlık, enayilik, dangalaklık
crest|v.|zirveye ulaşmak, zirveye varmak, sorguç biçiminde yapmak
playful|adj.|oyuncu, oynak
peers|n.|grup üyeleri
horrors|n.|savaşın dehşetleri, deliryum tremens, titremeli hezeyan
bleach|v.|ağartmak, beyazlatmak
disastrous|adj.|feci, talihsiz, felaket getiren
lineup|n.|sıra, program, saf
glamour|v.|çekmek, büyülemek, sihir
coronation|n.|taç giydirme töreni, taç giyme töreni, taç giyme
halo|n.|hale
highlight|v.|belirtmek (altını çizerek), altını çizmek, vurgulamak
ponies|v.|altılı oynamak, at yarışında bahse girmek, at yarışı oynamak
errors|n.|hatalar
pluto|n.|karahan, plüton
weights|n.|halter
arabia|n.|arabistan, arap yarımadası
imperative|adj.|mecburi, zorunlu
trader|n.|ticaret gemisi, tecimen, ticaret adamı
galileo|n.|galileo, galile
tainted|adj.|kusurlu, lekelenmiş, lekeli
drugstore|n.|eczane
lenses|v.|numaralı lens takmak, tek kullanımlık lensler, birbiriyle değiştirilebilir mercekler
obstruction|n.|engel olma, kapama, blokaj
segment|v.|kesimlemek, bölmek, parçalara ayırmak
envious|adj.|kıskanç
gertrude|n.|kadın ismi
twisting|n.|bükme, döndürme, dalkavukluk
insured|adj.|sigortalı
overlook|v.|sarfınazar etmek, hoşgörmek, gözünden kaçırmak
icon|n.|ikona, dini resim, put
rollin|expr.|uyuşturucu etkisiyle uçan/tribe girmiş
commentator|n.|yorumcu
pitt|n.|north carolina eyaletinde bölge
camilla|n.|georgia eyaletinde şehir
cerebral|adj.|beyin ile ilgili, beyin, ussal
spoiling|n.|bozulma (besin), bozma, çürük
tsar|n.|çar, lider, tiran
frames|n.|çerçeveler, kareler, kare
cushion|n.|minder, yastık
divers|n.|dalgıçlar, çeşitli
hallowed|adj.|takdis edilmiş, kutsal
chute|n.|çamaşır atılan baca, kayılan yer, çöp atılan baca
cavity|n.|çukur, delik, kavite
reds|n.|kırmızı sekobarbital (ilaç) kapsülü, kırmızılar
volcanoes|n.|çamur volkanları, volkan zinciri
angelina|n.|kadın ismi
sahib|n.|bey, centilmen, efendi
strung|v.|dizilmek, diz, dizili
watts|n.|vat, oklahoma eyaletinde yerleşim yeri
monopoly|n.|tekel
immigrant|adj.|göçmen
back-up|n.|yedekli, arka, rezerv
apache|n.|apaçi, külhanbeyi, apaş
caffeine|n.|kafein
squeezing|n.|sıkıştırma, sıkma, dışa taşma
postponed|adj.|ertelenen, ertelenmiş, tecilli
encounters|n.|insan-uzaylı karşılaşması, insan uzaylı karşılaşmaları
stuttering|n.|kekeleme, kekeme, tutukluk
rut|v.|azmak, kızışmak, tekerleklerle iz yapmak
calmed|v.|sükun bulmak, sakinleştirilmek
opener|n.|açan kimse, açacak, açıcı
impotent|adj.|etkisizlik, güçsüz, puluç
tabs|n.|fon perdesi, sekmeler, sekme
franchise|n.|hükümetçe tanınan ayrıcalık veya bağışıklık, hak, melce
entity|n.|mevcudiyet, varlık
slimy|adj.|balçıklı, sümüksü, yapışkan
hygiene|n.|temizlik, sağlıkbilgisi, hıfzıssıhha
andi|n.|dağıstan'da yaşayan etnik bir grup
containment|n.|tutma, kapsama, önleme
knickers|n.|külot, kadın külotu, golf pantolonu
jumpy|adj.|diken üstünde, sinirli, heyheyleri üstünde
pistols|n.|tabanca
irregular|adj.|kuralsız, düzensiz
lowly|adj.|ikinci derecede, mevkice aşağı, alçakgönüllü
controller|n.|kontrolör
rung|v.|çalmak, portatif merdiven basamağı, basamak
hades|n.|cehennem, ölüler diyarı
anarchy|n.|anarşi
wisely|adv.|akıllıca, bilgece
blackmailed|v.|şantaja uğramak, şantaj yapılmak
dudley|n.|georgia eyaletinde şehir, ingiltere'de yerleşim yeri, massachusetts eyaletinde yerleşim yeri
dramatically|adv.|dramatik bir biçimde, dramatik olarak, önemli ölçüde
researching|n.|araştıran öğretmen
borg|n.|kefil, kefalet, rehin
touchy|adj.|alıngan
fay|n.|peri
seventy|n.|yetmiş
bullies|n.|zorba, kabadayı
stealth|n.|gizli tutma, gizlilik, dikkati çekmeden yapma
divisions|v.|bölünmeler, taksimatlı, taksimat
yearbook|n.|yıllık
poll|v.|kesmek, anket yapmak, boynuzunu kesmek
blinds|n.|panjur
sneezes|expr.|burada rüzgar esse orada fırtına çıkar, biri hapşırsa öteki nezle olur, biri aksırsa öteki öksürmeye başlar
bigfoot|n.|koca ayak, teksas eyaletinde şehir
ninety|n.|doksan sayısı (90), doksan, 90
dharma|n.|hakkaniyet, erdem, buda doktrini
cramp|n.|kramp
cockpit|n.|uçuş kabini, kokpit
truthful|adj.|doğru, içten, dürüst
lilith|n.|adem'in havva'dan önceki karısı, dişi iblis, dişi şeytan
ghastly|adj.|beti benzi atmış, zoraki, ölü gibi solgun
edwin|n.|edwin-elektrokemisk süreci
whines|v.|mızmızlanmak
corrections|n.|disiplin yolları, tashihat
missionary|n.|misyoner, misyon sahibi kimse, dinyayar
infinity|n.|sonsuzluk
cola|n.|kola
penance|n.|kefaret
moist|adj.|rutubetli, nemli
sham|v.|taklidi yapmak, rol yapmak, numara yapmak
investor|n.|sermayeci, sermayedar, yatırımcı
founding|n.|kuruluş, döküm, kurucu
caldwell|n.|idaho eyaletinde şehir, kansas eyaletinde şehir, ohio eyaletinde yerleşim yeri
orientation|n.|intibak, oryantasyon, bir çevreye uyum sağlama
captains|n.|gökyüzünün kaptanları, alçak ve yuvarlak sırtlı sandalye türü
flop|v.|çöküvermek, düşürmek, düşüvermek
jamming|n.|sıkışıklık, tutukluk, karıştırma
crossroads|n.|dörtyol, ağız, kavşak
infrared|adj.|kızılötesi
pleading|n.|rica, savunma metni, rica etme
carroll|n.|bir soyisim, iowa eyaletinde şehir, nebraska eyaletinde şehir
flushed|adj.|yıkanmış, alı al moru mor, çalkalanmış
magda|n.|kadın ismi
gaming|n.|kumar, kumarbazlık, kumar oynama
gurgling|n.|çağlayarak akma, çağlayan
prairie|n.|çayır, kır
component|n.|bileşen, (tamamlayıcı) parça
saudi|adj.|suudi
slapping|n.|tokatlama
gases|n.|gazlar
aching|n.|ağrıma, acıma, acıyan
abusive|adj.|küfürlü, ağzı bozuk, kötüye kullanan
vermin|n.|parazit, haşarat, zararlı hayvan
bracelets|n.|bilezik, kelepçe
tyre|n.|tekerlek, lastik
rift|v.|çatlatmak, yarmak, ara bozukluğu
wiring|n.|elektrik telleri (bir aygıttaki), elektrik tesisatı (binadaki), elektrik hatları (binadaki)
gauge|v.|ölçmek, ölçme aleti, ayar
lifelong|adj.|hayat boyu, ömür boyu, müebbet
abstract|v.|soyutlamak, özet, soyut
pilgrimage|v.|hacca gitmek, haccetmek, hac
theoretically|adv.|teorik olarak, kuramsal olarak, teorik yönden
mythology|n.|söylenbilim, söylence bilim, masalbilim
johnnie|n.|çevgen
photographers|n.|kadın fotoğrafçılar, haber fotoğrafçıları, savaş fotoğrafçıları
render|v.|resmetmek, etmek (iyilik/hizmet/yardım/teşekkür), duruma getirmek
rocked|adj.|sarsık, sallanmış
iq|n.|zeka düzeyi, zeka katsayısı, ıq
licked|v.|yalanmak
android|n.|insan biçiminde robot, insan şeklinde robot, insansı
rhythmic|adj.|ritmik, dizemli, uyumlu
pianist|n.|piyanist
clover|n.|yonca, üçgül, üç yapraklı küçük bit bitki
unwanted|adj.|istenilmeyen, istenmemiş, istenmeyen
salvador|n.|el salvador cumhuriyeti, elsalvador, el salvador
troupe|v.|bir toplulukla hareket etmek, trup, kol
feat|n.|beceriklilik, kahramanlık, yiğitlik
primarily|adv.|öncelikle
preposterous|adj.|abes, inanılmaz, akla sığmaz
drying|n.|kurulama, kurutma, kuruma
unseen|adj.|göze görünmeyen, gizli, keşfedilmemiş
vulture|n.|akbaba
constantine|n.|konstantin, cezayir'de bir şehir
outlet|n.|çıkım, gideğen, satış yeri
git|n.|aptal, ince kum, adi
pictured|adj.|gözde canlandırılmış, betimlenmiş, resmedilmiş
functional|adj.|pratik, görevci, fonksiyonel
nitrogen|n.|azotlu, azot, nitrojen (simgesi n)
cc|expr.|bilgi, carbon copy, karbon kopya
lest|conj.|belki, diye, olmasın diye
right-hand|n.|sağ, güvenilir, sağdaki
speechless|adj.|suskun
delusions|n.|hezeyanlar
peeping|n.|gözetleme
follow-up|v.|izlemek, takip
refrain|v.|kendini tutmak
jerking|adj.|aniden, birdenbire
engaging|n.|meşgul etme, hoş, çekici
accountable|adj.|mesul, hesap verebilir, sorumlu
piles|n.|hemoroit, emoroitler, mayasıl
ch|n.|isviçre:ch, ch-4 yağ sınıfı, reform kilisesi
intro|n.|giriş, tanıtım, intro
rescuing|v.|kurtarmak
orgy|n.|seks partili alem, cümbüş, çılgınca eğlence
jaguar|n.|jaguar
prue|n.|oklahoma eyaletinde yerleşim yeri
concerts|n.|konserler
schemes|n.|planlar, düzenler
abusing|n.|emniyeti suistimal, güveni kötüye kullanma, özel hak ihlali
fatigue|n.|tükenmişlik, yorgunluk
charitable|adj.|hayırsever
attracts|expr.|tencere yuvarlanmış kapağını bulmuş!
stirred|adj.|karıştırılmış, karışmış, karıştırmalı
wench|v.|zamparalık etmek, genç kız, kız
kittens|v.|çılgına dönmek, beş kedi yavrusu, genç dediğin gezer tozar, yaş aldıkça uslanır
riggs|n.|riggs tipi gece körlüğü
heartbroken|adj.|kalbi kırık, acılı, çok üzgün
suffocating|adj.|boğucu
youse|pron.|sizler, siz
underage|adj.|olgunlaşmamış, yaşı tutmayan, satılan ya da satın alınan miktardan daha az
dimitri|n.|erkek ismi
metropolitan|n.|başkentli, büyük şehir, büyük şehre ilişkin
unions|n.|cıvatalı bağlantı
cds|n.|kredi temerrüt takası, ekonomik kalkınma komitesi
hamster|n.|hamster, cırlaksıçan, cırlak sıçan
omelet|n.|omlet
humility|n.|tevazu, alçak gönüllülük, mahviyet
grad|n.|mezun
obedience|n.|itaat
grub|v.|yedirmek, kazmak, toprağı kazmak
victorian|adj.|viktoryen, muhafazakar
lassie|n.|kız, genç kız
posed|adj.|kötü konumlanmış, iyi konumlanmış
conway|n.|arkansas eyaletinde şehir, güney carolina eyaletinde şehir, iowa eyaletinde şehir
resentment|n.|dargınlık
didi|expr.|ben neye bulaştım böyle?
locke|n.|new york eyaletinde yerleşim yeri
dat|n.|-e hali
booming|n.|alışılmış şey, gürleme, ilerleyen
aunts|n.|hala, teyze
shay|n.|brıçka
brigadier|n.|tuğbay, mirliva, tuğgeneral
intrusion|n.|zorla girme, intrüzyon, davetsiz gelme
hedgehog|n.|kirpi
recipes|n.|reçeteler, yemek tarifleri
tacky|adj.|yapış yapış
hk|n.|hong kong
saviour|n.|kurtarıcı, mesih, cankurtaran
physicist|n.|fizikçi, fizik uzmanı
yonder|adj.|oradaki, şuradaki, şuraya
admiring|adj.|hayranlık gösteren, hayran, takdir ettiğini belirten
anyplace|pron.|herhangi bir yer
forfeit|v.|ceza olarak kaybetmek
lullaby|n.|ninni
oasis|n.|vaha
unleash|v.|salıvermek, serbest bırakmak, salmak (köpek vb)
avengers|n.|intikamcı, öç alan kimse
indifferent|adj.|kayıtsız, umursamaz, aldırışsız
boxers|n.|boksörler
truthfully|adv.|doğrusunu söylemek gerekirse, gerçekten, doğru bir şekilde
organise|v.|organize etmek, düzenlemek
actresses|n.|aktrisler
grin|v.|sırıtmak
arranging|n.|uydurma, düzme, dizme
voila|interj.|buyurun, işte orada, şuraya bak
hydra|n.|çok başlı yılan, suyılanı, suyılanı (takımyıldızı)
shutters|n.|göz kapakları, panjurlar, kepenkler
pearson|n.|georgia eyaletinde şehir
genesis|n.|doğuş, oluş, başlangıç
energetic|adj.|enerjik
postal|n.|kartpostal, posta, postayla ilgili
aloud|adv.|yüksek sesle, bağırarak
archive|n.|belgelik, arşiv
nauseous|adj.|tiksindirici, iğrenç, mide bulandırıcı
funniest|adj.|en eğlendirici, en komik
muse|v.|derin derin düşünmek, dalmak, düşünceye dalmak
ernst|n.|ernst haeckel, haeckel
constitutional|adj.|anayasal
recital|n.|anlatma, beyan, anlatış
covenant|v.|uzlaşmak, ahdetmek, akdetmek
cloudy|adj.|bulutlu
prestige|n.|prestij, saygınlık
olivier|n.|erkek ismi
pencils|n.|kurşun kalemler
helper|n.|yardımcı
decks|v.|daha önemli bir işi için bir işe son vermek, bir kenara bırakmak, kenara kaldırmak
astray|adj.|yanlış yola sapmış, kötü yola düşmüş, yoldan çıkan
leland|n.|illinois eyaletinde yerleşim yeri, iowa eyaletinde şehir, mississippi eyaletinde şehir
ip|abrev.|internet protokolü, öğe ve işlem
casing|n.|bumbar, kasa kapı veya pencere, kasa (kapı, pencere)
cooing|n.|ötme, mırıldanma, cıvıldama
sterile|adj.|kısır, steril
bagel|n.|simit
releases|n.|basın bültenleri, basın bildirileri, belirli bir konuya odaklanmış sürümler
recognizes|v.|tanımak
intimidate|v.|gözünü korkutmak
forgery|n.|sahtecilik
kenya|n.|kenya
bred|v.|beslemek, yavrulamak
dunn|n.|north carolina eyaletinde şehir, north carolina eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
vector|n.|hastalık taşıyıcı, vektör
huck|n.|havluluk kumaş
nausea|n.|bulantı
detonate|v.|patlatmak
inhuman|adj.|insaniyetsiz, merhametsiz, insandışı
horsepower|n.|beygirgücü, beygir gücü
violating|n.|çiğneme (yasayı vb), ihlal etme, ihlal eden
pascal|n.|paskal
informer|n.|ihbarcı, muhbir
hooting|v.|yuhalamak
plugged|adj.|tıpalı, tıkalı, tapalı
oriental|adj.|doğulu kimse, doğulu, doğu
pretends|v.|yapar gibi görünmek
tram|n.|tramvay
spoils|n.|çalıntı mallar, ganimet, döküntü
chaplain|n.|papaz, bir kurumun papazı, papaz (okul, ordu veya hastanede)
farce|n.|saçmalık, komedi, kaba güldürü
parasites|n.|parazitler
whipping|n.|kırbaç, kamçılama, birinin kıçına şaplak indirme
cruising|n.|yolculuk, seyrüsefer, sabit hız
violently|adv.|hızlı, şiddetle, öldüresiye
tile|n.|fayans, karo, çini
ashtray|n.|kül tablası, küllük
neighing|adj.|kişneyen
zones|n.|alanlar, bölgeler
donut|n.|lokma, halka, yağda kızarmış şekerli çörek
spoilt|adj.|bozuk
nobility|n.|soyluluk, asillik, asalet
decoration|n.|süsleme
sharpe|n.|sharpe oranı
scoot|v.|kaçmak, tabanları yağlamak
kelso|n.|missouri eyaletinde yerleşim yeri, washington eyaletinde şehir
abdominal|n.|karın, karın ile ilgili, karna ait (böcek gövdesindeki)
updated|adj.|günümüze en yakın tarihte hazırlanmış, yenilenmiş, güncellenen
blueprints|v.|planı mavi kağıda çekmek, tasarlamak, mavi kopya çıkarmak
dealings|n.|iş ilişkisi, muamele, alışveriş
pitched|adj.|taraklanmış, eğimli
resource|n.|kaynak
coalition|n.|birleşme, ortakyönetim, karma hükümet
hoss|n.|ortak, ahbap
professors|n.|profesör
espionage|n.|casusluk, ihbar etme, ispiyonculuk
dishwasher|n.|bulaşıkçı
minded|adj.|fikirli, istekli, niyetli
cheyenne|n.|oklahoma eyaletinde yerleşim yeri, wyoming eyaletinde yerleşim yeri
resulted|n.|intihar sonucu ölümler
brewster|n.|biracı, bira (içmeyi) seven, bira sarhoşu
wrestler|n.|pehlivan, güreşçi
cons|n.|nun avantajları ve dezavantajları, lehte ve aleyhte olan öneriler, lehte ve aleyhte olanlar
protesting|n.|itiraz etme, protesto, itiraz eden
barbarians|adj.|barbar
loony|n.|kaçık, çıldırmış, bunak
kangaroo|n.|kanguru, macropodidae
rite|n.|ayin, dini tören
dialect|n.|lehçe, ağız
counsellor|n.|elçiden sonraki diplomat, danışman, avukat
tsunami|n.|deprem dalgası, denizdeki deprem dalgası, depremin oluşturduğu büyük deniz dalgası
locket|n.|madalyon
sorcerer|n.|büyücü, sihirbaz
pilgrims|n.|hacılar
incorrect|adj.|yanlış, doğru olmayan
parameters|n.|değişkenler
risotto|n.|İtalyan pilavı
unreliable|adj.|güvenilmez
agricultural|adj.|tarım, ziraat, zirai
willard|n.|kansas eyaletinde şehir, missouri eyaletinde şehir, ohio eyaletinde şehir
marital|adj.|evliliğe ait, evlilikle ilgili, evlenmeye ait
wilkes|n.|north carolina eyaletinde bölge, pensilvanya eyaletinde şehir
scramble|v.|acele havalanmak, mücadele vermek, çırpmak (yumurta)
hera|n.|hera
swears|v.|sövmek, küfür etmek, küfretmek
starvation|n.|açlık çekme, açlık, beslenme yetersizliği
summons|n.|davet
aquarium|n.|akvaryum, deniz canlılarının sergilendiği su müzesi
flavors|n.|(dışarıdan alınmış) sigara
sanity|n.|akıl sağlığı
roxanne|n.|kadın ismi
caste|n.|sosyal sınıf, servet, kademe
wedge|v.|yarmak, kama, takoz
bedside|n.|yatağın başucu, yatak yanı, başucu
experimenting|n.|tecrip, deneyim
truths|v.|gerçekleri yansıtmak, gerçekleri ortaya çıkarmak, hayatla ilgili gerçekler
tribunal|n.|yargıç kürsüsü, mahkeme, karara yön veren şey
emerson|n.|georgia eyaletinde şehir, iowa eyaletinde şehir, nebraska eyaletinde yerleşim yeri
darlene|n.|kadın ismi
automated|adj.|otomatikleştirilmiş
treachery|n.|hainlik, ihanet
explorer|n.|kaşif
greens|n.|yeşillikler, yeşillik
dunk|v.|banmak, batırmak, bandırmak
amused|adj.|memnuniyet içinde, mutlu, eğlenen
fishes|n.|devonyen, devoniyen dönem, vay anasını!
kappa|n.|kappa, illinois eyaletinde yerleşim yeri
goblin|n.|gulyabani, cin, cüce cin
appreciates|v.|değerini artırmak, değeri artmak, takdirle karşılamak
lark|v.|takılmak, eğlenmek, muziplik yapmak
commissioned|adj.|görevlendirilmiş, görevli, subay
reassuring|adj.|güven verici, rahatlatıcı, güven tazeleyici
disclose|v.|açığa vurmak
seaside|n.|sahil
politely|adv.|kibarca
preoccupied|adj.|dalgın
incense|n.|tütsü
folly|n.|akılsızlık, aptallık, çılgınlık
pear|n.|armut
vikings|n.|vikingler
irs|n.|milli gelirler idaresi, vergi (tahsilat) dairesi, kurullararası rabdomyosarkom çalışması
lavender|n.|lavanta
graceful|adj.|zarif
stretcher|n.|sedye
grande|adj.|geniş (fr), kocaman, geniş
simulation|n.|sahte tavır, yalandan yapma, muvazaa
lasers|n.|yarı iletken lazer, serbest elektron lazeri, kızılötesi dişçilik lazerleri
groovy|adj.|modern, modaya uygun, harika
discussions|n.|tartışmalar
basin|n.|havza, leğen
sacrificing|n.|feda
luncheon|v.|öğle yemeği yemek, hafif yemek, öğle yemeği
disobey|v.|itaatsizlik etmek
snot|n.|sümük, alçak (kimse), küstah
mil|n.|binde bir, mil
sinful|adj.|günah, hain, fena
yearning|n.|özlem
gruesome|adj.|dehşet verici, ürkütücü, korkunç
aide|n.|buyruk kulu, emir kulu, emirber
haha|n.|haha, ihahan
masculine|n.|erkeksilik, eril sözcük, eril cins
mortimer|n.|ingiltere'de yerleşim yeri
extras|n.|ekstralar
hopper|n.|dansçı, besleme hunisi, hoplayıp zıplayan kimse
guides|n.|kılavuzlar
banjo|n.|banjo, banço, afrika kökenli telli bir çalgı
dina|n.|dina
camelot|n.|kral arthur'un sarayının bulunduğu şehir
blazing|n.|alevlenme, belirgin, yanan
dos|n.|çeyiz, drahoma, disk işletim sistemi
crowned|adj.|taçlanmış, kaplama, taçlı
painkillers|n.|ağrı kesiciler
rave|v.|çıldırmak, kudurmak, küplere binmek
foley|n.|alabama eyaletinde şehir, minnesota eyaletinde şehir, missouri eyaletinde şehir
silvia|n.|roma mitolojisinde romulus ve remus'un annesi
cover-up|n.|saklama, örtbas, gizleme
cassette|n.|kutu, kaset
sorting|n.|sıralama, derecelenme, sınıflandırma
misplaced|n.|yanlış vurgu, hatalı femoral tünel, kayıp rahimiçi araç
sprung|adj.|fırlayan, bel vermiş, esnemiş
practising|n.|temrin, pratik yapma, icra eden
prehistoric|adj.|prehistorik, tarihten önceki, tarihöncesi
howls|v.|ulumak
enterprises|n.|iktisadi devlet kuruluşları, kamu kurumları, resmi kurumlar
designing|n.|tasarlama, planlama, şekil verme
suspense|n.|tereddüt, erteleme, kesilme
patti|n.|bir silahtan atılan merminin yörüngesi
renounce|v.|vazgeçmek, feragat etmek
paints|n.|bir resim bin sözcüğe bedeldir, boyalar için dolgu maddeleri, boya ve ilgili malzemelerin uygulanması
relying|n.|istinat, istinaden, güvenerek
rendered|n.|kuyrukyağı, sunulan rapor, satılan hizmet maliyeti
herald|v.|müjdelemek
randomly|adv.|havadan sudan, rasgele, rastlantısal
stylish|adj.|şık
spleen|n.|dalak
mugged|v.|saldırıya uğramak, soyulmak
investing|n.|yatırım, yatırım yapma, hassas dökme
protestant|n.|protestan
circumstantial|adj.|ayrıntılı, ikinci derecede önemi olan, tesadüfi
smear|v.|lekelemek, yağ bulaştırmak
pantry|n.|kiler, büfe, ofis
guiding|n.|rehberlik, kılavuzluk, gütme
flavour|n.|tat, lezzet, tat duyusu
hollis|n.|maine eyaletinde yerleşim yeri, new hampshire eyaletinde yerleşim yeri, oklahoma eyaletinde şehir
cursing|n.|telin, kalay, bayramlık ağız
erection|n.|ereksiyon, dikme (heykel/direk vb'ni)
gravel|n.|çakıl
artifact|n.|insan eliyle yapılan şey, insan eliyle yapılmış şey, ilk insanların yaptığı sanat eseri
raccoon|n.|rakun, rakun kürkü
classics|n.|klasikler, klasik filoloji
enlighten|v.|aydınlatmak
enhance|v.|arttırmak, yükseltmek, artırmak
delivers|v.|teslim etmek
spinach|n.|saçma, saçmalık, ıspanak
binding|n.|kablo bağlantısı, ciltleme, kenar şeridi
goldman|n.|bir abd yatırım bankası, goldman aplanasyon tonometresi
invalid|adj.|geçersiz
touring|n.|tur, gezi, gezici
johns|n.|içlik, kışlık/kapalı iç giysi, paçalı don
fashioned|adj.|moda, elle şekil verilmiş
gilmore|n.|gilmor iğnesi, iowa eyaletinde şehir
spilling|n.|lavaj
ledger|n.|ana defter, mezarın kapak taşı, kütük
quieter|adj.|daha sessiz
meadows|n.|çimler
majestic|adj.|heybetli, haşmetli, muhteşem
frequencies|n.|frekanslar
historian|n.|tarihçi
containers|n.|içecek kapları, yiyecek kapları, kap adedi
diplomat|n.|diplomat
wrinkles|v.|yüzü kırışmak, baştaki aksaklıkları gidermek, kırışıklıklarını gidermek
aryan|n.|hint avrupalı, hint avrupa dili, ari
subtitling|n.|altyazılama
para|n.|paraşütçü asker, para, paranoid
nationals|n.|ülkede yerleşik kişi ve işletmeler, yurttaşlar, uyruklar
rudolph|n.|noel babanın kırmızı burunlu geyiği, wisconsin eyaletinde yerleşim yeri
palestine|n.|filistin
insulin|n.|ensülin, insülin, insüline benzer büyüme faktörü
torpedoes|expr.|torpidoların canı cehenneme tam yol ileri!, ne olacaksa olsun!, tehlikenin canı cehenneme!
pagan|n.|çoban, doğa dinlerine tapan kimse, putperest
swimmer|n.|yüzücü
disgraced|adj.|rezil edilmiş, gözden düşmüş
bygones|v.|eski defterleri kapamak, geçmişi unutalım, bırak geçmişte kalsın
intellect|n.|akıllı kimse, müdrike, zihin
accommodate|v.|yaşayacak yer temin etmek, kalacak yer vermek
posture|v.|poz vermek, kasım kasım kasılmak, kasılmak
adjusting|n.|ayarlayıcı, ayar, ayarlama
giraffe|n.|zürafa
peer|n.|eş, akran
petersburg|n.|alaska eyaletinde şehir, batı virginia eyaletinde şehir, indiana eyaletinde şehir
religions|n.|dinler
hammering|v.|çekiçle vurmak, çekiçleme, çekiçle dövme
audiences|n.|seyirciler
gigs|v.|zıpkın ile balık yakalamak, sahneye çıkma, çalgı
damaging|adj.|zarar verici, zarar veren, zarar görmüş
colossal|n.|şaşırtıcı, iri yarı, ızbandut gibi
renew|v.|yenilemek
iceberg|n.|buz adası, buzdağı, aysberg
vigilante|n.|yasa dışı kanun infazcısı
dougie|n.|hip hop dansında bir hareket
biggie|n.|nüfuzlu kimse, önemli
chewed|v.|bir araba dolusu laf işitmek, bozuk para gibi harcanmak, heba edilmek
cellular|adj.|hücresel
indecent|adj.|utanmaz, uygunsuz, galiz
dangerously|adv.|tehlikeli bir şekilde, tehlikeli bir biçimde
duane|n.|new york eyaletinde yerleşim yeri
bribed|adj.|rüşvetçi, satın alınabilir kişi, rüşvet almış
rascals|expr.|yozlaşmış iktidarı devirmek
ramona|n.|kadın ismi, adaçayı, güney dakota eyaletinde yerleşim yeri
grammar|n.|gramer açısından ifade, gramer kuralları, sarf
thrash|v.|kırbaçlamak
hutch|n.|tavşan kafesi, kümes, kulübe
runners|n.|sıcak yolluklar, manifolt boruları
pager|n.|çağrı cihazı, çağrı, sayfalayıcı
stumble|v.|sendelemek, tökezlemek
dispatcher|n.|dispeççi, hareket memuru, dispeçer
stump|v.|kafa tutmak, meşin kalemle çizmek, sorularıyla şaşırtmak
wraps|v.|saklamak, gizli tutmak, açık etmemek
gator|n.|timsah, yoldaki lastik izleri, araba lastiği izi
teammates|n.|takım arkadaşı, ekip arkadaşı, takımdaş
skye|n.|skye adası
weakest|adj.|en güçsüz
disconnect|v.|kesmek, bağlantıyı kesmek
melts|n.|aluminosilikat eriyikleri, demir-karbon eriyikleri, kireç-demir -silika eriyikleri
morally|adv.|ahlaken, ahlakça, manevi açıdan
feud|n.|kan davası
apiece|adv.|beher, parça başına, tanesi
theatrical|adj.|tiyatroya ait
distinguish|v.|ayırmak, ayırt etmek, farkı görmek
cooperating|n.|önemli yer işbirliği
passions|n.|hırs, ihtiras, tutku
strive|v.|uğraşmak, çabalamak
flourish|v.|süslü konuşmak, savrulmak, ilerlemek
reeves|n.|louisiana eyaletinde yerleşim yeri
unnecessarily|adv.|lüzumsuz yere, gereksiz yere, boşu boşuna
perceive|v.|algılamak
upstate|n.|kuzey, taşra, şehir dışı
accuracy|n.|doğruluk, kesinlik
cosmo|n.|cosmo, kozmo
bitterness|n.|acılık
reflects|expr.|benim tarzımı yansıtıyor
insolent|adj.|küstah
strauss|n.|strauss deneyi, churgstrauss sendromu, churg strauss sendromu
circular|n.|genelge, sirküler, dairesel
generated|adj.|üretilen, ortaya çıkan, üretilmiş
rumble|v.|gümbürdemek, gürlemek, gümbürtü
pilgrim|n.|yolcu, seyyah, hacı
squirrels|n.|sincap
purge|v.|düzenlemek, istenmeyen kişilerden temizlemek, aklamak
mingle|v.|katıp karıştırmak, katılmak, birbirine karıştırmak
manufacture|v.|imal etmek, üretim
casually|adv.|günlük, sıradan, gelişigüzel
handler|n.|terbiyeci, antrenör, menajer
hobbs|n.|new mexico eyaletinde yerleşim yeri
slain|v.|katletmek, maktül, maktul
phd|n.|doktora derecesi
multiply|v.|yayılmak, artmak, türemek
confinement|n.|hapsedilme
patches|n.|eklemeler
divert|v.|başka yöne çevirmek
protests|n.|protestolar
versions|n.|alternatifler, değişkenler, sürümler
ambrose|n.|new york'un güneydoğusunda bir kanal, georgia eyaletinde şehir, kuzey dakota eyaletinde şehir
adriana|n.|kadın ismi
ia|expr.|diğerlerinin yanında
youthful|adj.|dinç, genç bir havaya sahip, genç
numbered|adj.|sayılı
herbal|adj.|bitkisel
kathryn|n.|kuzey dakota eyaletinde şehir
lawful|adj.|caiz, adil, helal
stacked|adj.|istifli, yığılı, istif edilmiş
damian|n.|erkek ismi
reasonably|adv.|orta derecede, makul bir şekilde, kararınca
myra|n.|kadın ismi
logged|adj.|yavaş ve ağır hareket eden
prospects|n.|başarı şansı, gelecekteki beklentiler, muhtemel müşteriler
mainstream|v.|yaygın hale getirmek, yaygınlaştırarak yerleştirmek, anadamar
sykes|n.|sykes-picot anlaşması
alimony|n.|nafaka
stating|n.|belirtme, arduvaz kaplama, mübeyyin
budapest|n.|budapeşte, missouri eyaletinde yerleşim yeri
nelly|n.|kadınsı erkek homoseksüel, eşcinsel erkek, gey
awakened|adj.|uyanmış
curses|v.|ah etmek, ne ekersen onu biçersin, eden bulur
ore|n.|cevher
slices|n.|dilimler
curl|n.|bukle
uprising|n.|başkaldırma, ayaklanma
cabaret|n.|kabare, gece klübü, müzikli ve danslı şov
manufacturer|n.|imalatçı
ration|v.|karneye bağlamak, karne ile vermek, vesika ile dağıtmak
boulder|n.|iri parça, iri kaya parçası, aşınmış kaya parçası
manpower|n.|insan kuvveti, insan gücü, iş gücü
badges|n.|başarı madalyaları, liyakat rozetleri, rütbe işaretleri
mush|n.|pelte
recycling|n.|atıkları değerlendirme, tekrar kullanım (atık vb), değerlendirme
disarm|v.|silahsızlandırmak
elusive|adj.|güvenilmez, anlaşılması zor, anlaşılmaz
snarls|v.|hırlamak
flawless|adj.|kusursuz
considers|expr.|göz önünde tutar
harmful|adj.|zararlı
horseback|n.|at sırtı
owens|n.|owens süreci, alabama eyaletinde şehir
morales|n.|manevi güç, içgücü, moral
thankfully|adv.|minnettar bir şekilde, şükürler olsun, neyse ki
recreate|v.|tazelemek, yeniden yaratmak, eğlenmek
travelers|n.|gezginler, turistler
navigate|v.|gemi ile geçmek, seyretmek (gemi/tekne), dümen tutmak
pun|v.|sözcük oyunu yapmak, cinas yapmak, kelime oyunu yapmak
ethnic|adj.|etnik
voice-over|n.|dış ses
kono|n.|kono
esteemed|adj.|saygın
exterior|adj.|dış
duffy|adj.|erken boşalma
triad|n.|üçlü topluluk, üçlü takım, üçlü grup
licensed|adj.|ruhsatlı, lisanslı
gems|v.|çocuktan al haberi, (çocuk) cevher yumurtlamak
moira|n.|kader, kısmet, baht
mutants|n.|değişken, mutasyona uğramış gen, mutant
testifying|n.|ifade vermekten imtina hakkı, sanığın aleyhine şahitlik etme, şahadetten imtina hakkı
dissolve|v.|eritmek
iraqi|n.|ırak, ıraklı, ırak'a özgü
robes|n.|resmi cüppe, yargıç cübbesi giyinmiş
wildest|adj.|en vahşi
portfolio|n.|portföy
tossing|n.|savurma, havaya atma, havaya atılan
pussycat|n.|kedicik, kedi, pisi
booby|n.|şavalak, meme, sersem
nbc|n.|nbc savunması, ulusal yayın şirketi
knack|n.|hüner, ustalıklı iş, marifet
lodged|v.|pansiyonda kalmak, arzetmek, bildirmek
cpr|n.|kardiyopulmoner resüsitasyon, kalp masajı
lei|n.|çelenk, havai çiçek kolyesi
racism|n.|anasoyculuk, kafatasçılık, ırkçılık
nato|n.|nato
mayo|n.|florida eyaletinde yerleşim yeri, irlanda'da yerleşim yeri
stingy|adj.|eli sıkı, pinti, paragöz
kaiser|n.|imparator, kayser, alman imparatoru
shooters|n.|nişancı, avcı, atıcı
napkins|n.|peçeteler
continents|n.|kıtalar
registry|n.|sicil, kayıt
fags|n.|sigara paketi
shah|n.|şah
blinking|n.|göz kırpma, yanıp sönme, boşu boşuna
duo|n.|eş, çift, duo
gymnastics|n.|jimnastik
jag|v.|pürüzlü eğri büğrü yırtmak, çentmek, çentik yapmak
bernadette|n.|kadın ismi
valiant|adj.|yiğit, yürekli, cesur
exploited|adj.|sömürülmüş, sömürülen, kullanılmış
attachment|n.|muhabbet, ilgi, bağlılık
trans|pref.|öbür tarafında, karşı tarafta, ötesinde
intruders|n.|davetsiz misafirler
owning|n.|kendine hakim olma, edinme, sahip olan
crispy|adj.|çıtır çıtır, gevrek
administrative|adj.|idari
hawks|n.|şahinler
crave|v.|hasret olmak, çok istemek, istemek
reviewed|adj.|gözden geçirilmiş, kontrol edilmiş
persuasive|adj.|ikna edici, inandırıcı
turmoil|n.|karışıklık, kıyamet, gürültü
promoting|n.|(görevde vb) yükseltme, terfi ettirme
shoving|n.|itişip kakışma, itme, kıpırdama
unworthy|adj.|yakışmaz, değmez, hak etmeyen
elevators|n.|asansörler
fulfilling|adj.|karşılayıcı, doyurucu, tatmin edici
rooting|n.|köklenme, kök sökme
stoop|v.|hafif kambur olmak, eğilmek (öne), öne doğru eğilmek
ee|suf.|bir şeyin küçültme halini belirten son ek, elma dersem çık armut dersem çıkma, orta elçi
greer|n.|arizona eyaletinde şehir, güney carolina eyaletinde şehir
panicking|n.|panikleme, şaşkınlaşma
panels|n.|çelik levhalara uygulanan emaye kaplamalar, cam paneller, damı katlanabilen vagon
demonstrated|adj.|ispat edilmiş, ispat edilen
myths|n.|etiyoloji mitleri, etiyolojik mitler, coğrafik efsaneler
volleyball|n.|voleybol, voleybol topu
cheats|expr.|yalancının mumu yatsıya kadar yanar
chord|n.|his, çalgı teli, tel
berkeley|n.|ingiltere'de yerleşim yeri, illinois eyaletinde yerleşim yeri, kaliforniya eyaletinde şehir
oblige|v.|zorunda bırakmak
radiant|adj.|radyant, parlak
anticipation|n.|bekleme, umma, beklenti
fibers|n.|elyaf, besleme malzemesi, lif malzemesi
aroused|adj.|uyandırılmış, cinsel yönden uyarılmış, heyecanlanmış
paralysis|n.|felç
ferocious|adj.|şiddetli, yavuz, aşırı
heinous|adj.|çirkin, iğrenç, kötü
roulette|n.|rulet
emergencies|n.|acil durumlar
olaf|n.|avrupa dolandırıcılıkla mücadele bürosu, iowa eyaletinde şehir
enjoyable|adj.|zevkli
torso|n.|kolsuz ve başsız gövde, gövde heykeli, gövde (insana ait)
compassionate|adj.|merhametli, şefkatli
softer|adj.|daha yumuşak, yumuşak
delegation|n.|delege atama, yetkilendirme, temsilciler kurulu
fangs|v.|(yılan) dişlerinden zehir çıkarmak
plaque|n.|levha, plaka
moi|expr.|benden sonra tufan
bowman|n.|okçu, georgia eyaletinde şehir, güney carolina eyaletinde yerleşim yeri
uterus|n.|rahim
buggy|n.|iki tekerlekli hafif araba
denies||ancak bir katır ailesini inkar eder
tally|v.|çetelesini tutmak, saymak, çetele
neighs|v.|kişnemek, kişneme
unusually|adv.|fevkalade, nadiren, aşırı derecede
tibet|n.|tibet
fez|n.|fes
charcoal|v.|(kömür vb ile) karalamak/çizmek, mangalda ızgara yapmak, kömür ateşinde pişirmek
healer|n.|iyileştirici, çare, doktor
weirdest|adj.|en tuhaf, en acayip
eel|n.|yılan balığı
recordings|n.|kayıtlar
tamil|n.|tamil dili, tamil, tamilce
naw|expr.|hayır
camouflage|v.|kamufle etmek, kamuflaj
seagulls|n.|martı sesi, martıların sesi
hub|n.|merkez, aktarma merkezi, ambuatman
mailman|n.|postacı, posta görevlisi
buckley|n.|galler'de yerleşim yeri, illinois eyaletinde yerleşim yeri, washington eyaletinde şehir
furry|adj.|kürklü
pronto|adv.|hemen, derhal, çabuk
sedan|n.|tahtırevan, binek otomobili, sedye
kermit|n.|kermit, batı virginia eyaletinde yerleşim yeri, teksas eyaletinde şehir
amir|n.|emir
edible|n.|gıda, yemeye müsait şey, yenir
trifle|v.|önemsememek, çarçur etmek, oynamak
delusion|n.|aldanma, hulya, vesvese
foundations|n.|temeller
calcutta|n.|kalküta
cubes|n.|küpler
colon|n.|kolon
crotch|n.|çatal ağaç, dal ile gövdenin birleştiği yer, çatal
costing|n.|fiyat tespiti, maliyetlendirme, maliyetleme
resisted|v.|direnmek, dayanmak, karşı koymak
snail|n.|salyangoz
ursula|n.|kadın ismi
strippers|n.|büyük bir striptizci hayranı
vista|n.|görünüm, olaylar dizisi, hayaller silsilesi
fiend|n.|canavar ruhlu kimse, çılgınca hoşlanan kimse, canavar
ultra|adj.|aşırı
restrain|v.|dizginlemek, engellemek, zapt etmek
pinkie|n.|küçük parmak, serçe parmağı
voluntary|adj.|gönüllü, isteyerek yapılan
widely|adv.|genişce, iyice, enli
uncommon|adj.|alışılmamış
blackie|adj.|esmer
farrell|n.|pensilvanya eyaletinde şehir
infiltrate|v.|sızmak, içeri sızmak
sophomore|n.|toy, ikinci sınıf öğrencisi, ikinci sınıf öğrencisi (lisede/üniversitede)
radios|n.|radyo, telsiz
medallion|n.|madalyon
eiffel|n.|eyfel kulesi, paris denilince akla ilk eyfel kulesi gelir, paris denince akla ilk eyfel kulesi gelir
yamato|n.|japonya'da baskın olan yerel etnik grup, yamato, yamatolar
wilder|v.|şaşmak, idaho eyaletinde şehir, kentucky eyaletinde şehir
dyke|v.|etrafına set çekmek, kazmak, bent
bailiff|n.|çiftlik kahyası, muhafız, kahya
peril|v.|tehlikeye atmak, vahamet, tehlikeye uğrama
plaintiff|n.|davacı
emilia|n.|italya'nın güneyinde bir şehir
transmitted|adj.|bulaşıcı, iletilen, iletilmiş
bonnet|n.|kaput
assassinated|n.|suikaste uğramış
emptiness|n.|boşluk
helmets|n.|koruyucu kasklar
normandy|n.|normandiya, missouri eyaletinde şehir, tennessee eyaletinde yerleşim yeri
cheetah|n.|çita
clips|n.|kelepçe, klipler
thicker|adj.|daha kalın, kalın
whiz|v.|vızıldamak, cızırdamak, çok hızlı geçmek
saga|n.|destan
bullock|n.|enenmiş boğa, tosun, öküz
binoculars|n.|dürbün
accord|v.|uymak, akort, uyum
diva|n.|diva, primadonna, büyük operada primadonna
jeanette|n.|kadın ismi
birmingham|n.|alabama eyaletinde şehir, ingiltere'de yerleşim yeri, ingiltere'de şehir
pick-up|n.|kamyonet, pikap, plakçalar
concierge|n.|odabaşı, kapıcı, odacı
clams|v.|yapışmak, içine kapanık kimse, neşeli parti
questionable|adj.|kuşkulu
volunteering|n.|gönüllülük
lunches|expr.|öyle bedavaya yok, öyle beleşe yok, her şeyin bir bedeli vardır
spooked|v.|paniklemek, ürkmek
pinpoint|v.|yerini belirlemek, tam yerini saptamak, kesin olarak yerini belirtmek
hereafter|n.|öbür dünya, gelecek, ahret
brook|n.|dere
weakened|adj.|zayıflatılmış, ölgün
verses|n.|şeytan ayetleri
marshals|v.|önüne düşüp götürmek, dizmek, sıraya koymak
deposited|adj.|tortulaşmış, tevdi edilmiş, bırakıntı
cleans|v.|temizlemek, temiz
ironically|adv.|işe bakın ki, işin garip yanı, ironik olarak
bodily|adj.|bedensel
distances|n.|eşit mesafeler, bantlı konveyörün geçiş mesafesi, uçuş mesafesi
hypnosis|n.|hipnoz
secretive|n.|kapalı kutu, ağzı sıkı, sıkı ağızlı
dominion|n.|idare, sahiplik, hüküm
civic|adj.|şehir ile ilgili
bursts|n.|balonun sönmesi/patlaması, bir rüyanın/furyanın bitmesi, güzel günlerin/bahar havasının bitmesi
uncertainty|n.|belirsizlik
streams|adv.|oluk oluk, borulardaki gaz akımları, akış dll'i
vortex|n.|burgaç, girdap
tights|n.|tayt
sponsors|n.|sponsörler
tickles|expr.|nasıl mutlu oluyorsan öyle yap, nasıl biliyorsan öyle yap
cello|n.|viyolonsel, çello
herring|n.|ringa, ringa balığı, ringa (balığı)
ab|n.|ab kan grubu, av, ibrani takviminde beşinci ay
disability|n.|malullük, sakatlık
griffith|n.|indiana eyaletinde yerleşim yeri
orchid|n.|orkide, mor orkide rengi, orkid
hostility|n.|düşmanlık
conflicts|n.|çakışmalar
pans|n.|kap kaçak, çanak çömlek, kap kacak
housekeeping|n.|ev idaresi, kurum idaresi, (program) önişlemleri
panthers|n.|kara panterler
wonderland|n.|harikalar diyarı
ruiz|n.|kolombiya'da and dağları bölgesinde yanardağ
interrogated|v.|sorgulanmak, ifadesi alınmak, sorgudan geçmek
andromeda|n.|andromeda, japon lavanta fundası
premium|n.|ikramiye, prim
broccoli|n.|ot, marihuana, brokoli
garfield|n.|arkansas eyaletinde şehir, georgia eyaletinde yerleşim yeri, kansas eyaletinde şehir
pottery|n.|çanak çömlek, çömlek imalathanesi, toprak kaplar
shrapnel|n.|şarapnel parçası, şarapnel, bozuk para
planner|n.|tasarımcı, plan yapan kimse, planlamacı
jacked|adj.|kriko ile yükseltilmiş, çileden çıkmış, küplere binmiş
rounded|adj.|yuvarlatılmış, tamamlanmış, yuvarlak yapılmış
cactus|n.|atlasçiçeği, kaktüs, frenk inciri
motherland|n.|vatan
defendants|n.|birlikte davalılar
wilt|v.|boynunu bükmek (bitki/çiçek), soldurmak, soldurmak (bitkiyi/çiçeği)
executives|n.|yöneticiler, üst yönetim
spoons|n.|kaşıklar
belinda|n.|kadın ismi, belinda, uranus xiv kod adlı uydu
unbelievably|adv.|inanılmaz biçimde, inanılmaz bir biçimde, akıl almaz biçimde
fairness|n.|insaf, adalet
continuously|adv.|aralıksız
spices|n.|baharat
organisms|n.|toprak organizmaları, havasız organizmalar, mikro organizma
regretted|expr.|yazık ki, çok pişman oldum, müessif olmak
monarch|n.|kral, tekerk, padişah
narrative|n.|anlatı, hikaye tarzında
catcher|n.|yakalayıcı, yakalayan kimse, yakalayan şey
dictatorship|n.|diktatörlük
controversy|n.|ihtilaf
manu|adv.|zabıta kuvveti marifetiyle, askeri kuvvetlerin yardımıyla
alejandro|n.|erkek ismi
dignified|adj.|değerli, asil, efendi
bonded|adj.|bağlanmış, bağlı, antrepolanmış
tilt|v.|eğmek
beginnings|n.|baş, bağ, esas
peaks|n.|inişler çıkışlar, belirgin doruklar, bragg dorukları
tissues|n.|bitki dokuları, dokusuz, organ veya doku ticareti
pretentious|adj.|gösterişçi
dell|n.|korulu vadi, küçük vadi, kuytu yer
jeopardize|v.|tehlikeye atmak, tehlikeye sokmak, tehlikeye koymak
osborne|n.|kansas eyaletinde şehir, pensilvanya eyaletinde yerleşim yeri
diversity|n.|çeşitlilik
shabby|adj.|yırtık pırtık, kılıksız
brownies|n.|kuşüzümlü ekmek, yavrukurt, iyi huylu peri
overdo|v.|overdid - overdone, fazla pişirmek, aşırıya kaçmak
crunching|adj.|hatır hatır, hatır hutur
separating|n.|ayırma, ayıran
horrid|n.|korkunçluk, çirkin, berbat
overrated|adj.|fazla değer biçilmiş, fazla değer verilmiş, gereğinden fazla değer verilmiş
harmon|n.|illinois eyaletinde yerleşim yeri
rethink|v.|rethought - rethought, etraflıca düşünmek, yeniden düşünmek
mastered|n.|efendi, usta
reopen|v.|yeniden başlatmak, tekrar açılmak, yeniden açmak
camels|n.|develer
tux|n.|smokin
denis|n.|denis-browne ekartörü, denis-browne poşu
depended|expr.|sanki (birinin) yaşamı buna bağlıymış gibi, yaşamı buna bağlıymışçasına, o olmadan da yaşayamazmış gibi
tak|n.|talk
whine|v.|mızmızlanmak
axis|n.|eksen, mihver
orchard|n.|bostan, bağ, meyvelik
cherries|expr.|hiçbir sorun yok, her şey tıkırında (olumsuz anlamda), her şey yolunda
pleasing|adj.|memnuniyet verici
unforgivable|adj.|affedilmez, bağışlanamaz
craziest|adj.|deli, çıldırmış, çılgın
rods|n.|sopacıklar, rodlar
distressed|adj.|sıkıntılı
bubbling|n.|kabarma, balonlu, köpüren
interact|v.|etkileşmek, birbirini etkilemek, reaksiyon göstermek
manipulating|adj.|çıkarları doğrultusunda yönlendiren
rewind|v.|geri sarmak
burgundy|n.|burgonya, bordo, şarap rengi
blacked|adj.|siyahi, kara, siyah
trillion|n.|trilyon, sayılamayacak kadar çok miktar, bir trilyon kadar
onwards|adv.|itibaren, ileriye doğru, ileriye
reservoir|n.|su deposu, hazne, rezervuar
participation|n.|katılım, iştirak
caucasian|n.|kafkasyalı, kafkasya ile ilgili, kafkas
flushing|n.|kızarma, fışkırma, fışkırtma
serbian|n.|sırpça, sırbistanlı, sırp
manhood|n.|erkeklik
lao|n.|lao, laoca, lao dili
matilda|n.|kadın ismi, serseri yatağı
exhale|v.|soluk vermek
in-laws|n.|akraba (kayınvalide/kayınpeder/kayın)
caramel|n.|karamela, karamel
slander|v.|iftira etmek, iftira
identifying|expr.|tanımlanıyor
drunkard|n.|ayyaş
blooming|n.|çiçek açma, çiçeklenme, çiçek açan
stocking|n.|konç, uzun çorap, çorap
rinse|v.|durulamak
artwork|n.|sanat eseri
catholics|n.|katolikler
stormy|adj.|fırtınalı
refresh|v.|ferahlamak, ferahlatmak
elisa|n.|elısa, elisa
cor|interj.|vay be, vay anasını, ko
floats|n.|kolluk, nasıl mutlu oluyorsan öyle yap, nasıl istiyorsan öyle yap
expanded|adj.|genişletilmiş, açılmış, genleşmiş
chilling|n.|soğuma, soğutma, soğuk
congo|n.|kongo, kongo'ya özgü
afghan|n.|afgan, afganlı, afganistanlı
backside|n.|kıç, popo, arka taraf
antarctica|n.|yeryüzünün en güneyindeki kıta, antarktika
sandals|n.|sandalet
investigative|adj.|araştırıcı, araştırma, araştırmayla ilgili
wills|n.|vasiyetnameler
searches|n.|taharriyat, araştırmalar, aramalar
yawns|v.|esnemek
collaboration|n.|iş birliği
untouched|adj.|bakir
psyched|adj.|heyecanlı, sarhoş, heyecan dolu
departments|n.|bölümler
tuxedo|n.|smokin
bummed|adj.|cesareti kırılmış, hayal kırıklığına uğramış
finer|adj.|ince
manure|n.|gübre
compatible|adj.|uyumlu
moor|v.|demir atmak, demirlemek, abosa etmek
keg|n.|fıçı, varil, küçük fıçı
peeled|adj.|sıyrık, dımdızlak, anadan doğma çıplak
dona|n.|bayan
stings|n.|böcek sokmalarına karşı alerjik reaksiyonlar, deniz anası sokmaları, küçük göğüsler
seeker|n.|sonda, arayıcı, arayan kimse
watering|n.|sulama
ids|n.|dijital kimlikler, donanım kimlikleri, uyumlu kimlikler
malaria|n.|sıtma
walters|n.|minnesota eyaletinde şehir, oklahoma eyaletinde şehir
lending|n.|ödünç verme, borç verme, ikraz
dodgers|n.|hilekar, kaytarıcı, geçiştiren kimse
fortnight|n.|iki hafta, ondört gün, on dört gün
reassure|v.|yeniden güven vermek
meddling|n.|karışma
overthrow|v.|overthrew - overthrown, bozmak, yenmek
postmortem|n.|ölüm sonrası, otopsi, öldükten sonraki
achievements|n.|bugüne kadarki kazanımlar/başarılar, kültürel kazanımlar, önemli başarılar
excellence|n.|mükemmellik
latch|n.|kapı mandalı, mandal
coppers|n.|devriye gezen polisler
raids|n.|ev ve işyeri baskınları, ev ve işyeri baskınlarında ölenler
dickens|n.|şeytan, afacan çocuk, cin gibi çocuk
drifted|adj.|kısmen kaymış
leeds|n.|alabama eyaletinde şehir, ingiltere'de yerleşim yeri, ingiltere'de şehir
obsessive|adj.|saplantısal, saplantı haline gelmiş, saplantılı
upwards|adv.|yukarıya, itibaren, daha fazla
oatmeal|n.|yulaf ezmesi, yulaf unundan yapılmış, yulaf unu
midday|n.|öğle vakti, gün ortası, öğlen
implants|n.|implantlar
unmarried|adj.|evlenmemiş
sewers|n.|kanalizasyon
bowie|n.|teksas eyaletinde şehir
mercenary|n.|ücretli asker, paralı asker
perks|n.|maaştan ayrı gelir, yan ödeme
outrun|v.|outran - outrun, daha hızlı koşmak, aşmak
copying|n.|kopyacılık, istinsah, kopyalayan
upload|v.|yüklemek, karşıya yüklemek, yukarı yüklemek
shu|n.|tecrit hücresi, kung fu
bumping|adj.|güçlü/hoş bir ritmi olan, kalabalık, yoğun
inland|n.|ülkenin iç kısmı, ülke içi, ülkenin denizden uzak yerleri
yorkshire|n.|ohio eyaletinde yerleşim yeri, new york eyaletinde yerleşim yeri
humbly|adv.|naçizane, acizane, tevazu ile
injections|n.|katılımlar, enjeksiyonlar
participating|n.|katılma, katılımcı, iştirak eden
python|n.|piton, yılan, bir programlama dili
laurent|n.|laurent açılımı, laurent demeyi, laurent serisi
cockroaches|n.|hamamböcekleri
puberty|n.|ergenlik çağı, ergenlik
technologies|n.|teknolojiler
crumble|v.|ufalamak
toots|n.|bebeğim, tatlım
roscoe|n.|güney dakota eyaletinde şehir, illinois eyaletinde yerleşim yeri, missouri eyaletinde yerleşim yeri
high-school|n.|lise, lise mezunu
clot|v.|pıhtılaşmak
exterminate|v.|kırmak, kökünü kurutmak, mahvetmek
rake|v.|tırmıklamak, tırmıkla toplamak, tırmıkla düzeltmek
cholesterol|n.|kolesterol, kolestrol, vücuttaki yağ benzeri maddeler
deli|n.|mezeci dükkanı, şarküteri, soğuk meze
augustus|n.|ilk roma imparatoru
sublime|v.|süblimleşmek, süblimleştirmek, yükselmek
bottled|adj.|bastırılmış, şişelenmiş, şişede
charlene|n.|kadın ismi, bir kadın ismi
demolition|n.|imha, yıkılma, yıkma
methane|n.|metan
appendix|n.|ek
aches|n.|vücut ağrıları, ağrı sızı, boğazım acıyor
ahoy|expr.|gemiye selam, limandan hareket
distractions|n.|dikkatin dağılması
dashing|v.|kırışmak, atılgan, cesur
plank|v.|tahta döşemek, kalas ile kaplamak, tahta kaplamak
medications|n.|ilaçlar, tedavide kullanılan ilaçlar
chevy|v.|sıkmak, avlamak, avlanmak
zurich|n.|zürih, isviçre'de şehir
makers|n.|karar vericiler, karar alıcılar, politikayı belirleyenler
invading|adj.|istila eden, müstevli
loner|n.|yalnızlığı seven kimse, münzevi
comm|n.|açıklama
miner|n.|madenci
senile|adj.|bunak, bunamış
commando|n.|komando, komando birliği
mantle|n.|harmaniye, lamba gömleği, örten şey
manufactured|adj.|imal edilen, mamul, imal edilmiş
broth|n.|et suyu
interaction|n.|etkileşim
lsd|n.|lsd
sesame|n.|susam
auschwitz|n.|bir nazi toplama kampı, auschwitz, polonya'da bir komün
restraint|n.|kısıtlama, sınırlama, dizginleme
devour|v.|bir çırpıda bitirmek, parçalayıp yutmak (avı), yiyip bitirmek (bir duygu)
zachary|n.|louisiana eyaletinde şehir
sardines|n.|sardalya
orb|v.|kuşatmak, çevrelemek, küre şeklinde yapmak
govern|v.|kontrol etmek, kullanmak, frenlemek
respiratory|adj.|solunum, solunumla ilgili, solunum (ile ilgili)
elope|v.|aşığıyla kaçmak, kocaya kaçmak, aşığı ile kaçmak
webber|n.|kansas eyaletinde şehir
wreckage|n.|kazadan geri kalan parçalar, gemi enkazı, yıkıntı
lumber|n.|kereste
consists|expr.|türkiye yedi bölgeden oluşur, türkiye yedi bölgeden oluşmaktadır, iki bölümden oluşmaktadır
operates|expr.|daha uzun gider
needless|adj.|lüzumsuz, fuzuli, gereksiz
faulty|adj.|kabahatli, kusurlu
alps|n.|alp dağları, ay'ın kuzeybatısında bulunan sıradağlar
assassinate|v.|suikast yapmak
santo|n.|teksas eyaletinde şehir
edinburgh|n.|iskoçya'da şehir, indiana eyaletinde yerleşim yeri
staggering|n.|sendeleme, afallatıcı, sarsan
murmurs|n.|kardiak müzikal murmurlar, yenidoğanlarda kardiyak üfürümler
bologna|n.|sucuk, bologna, bolonya
unleashed|adj.|tasmasından kurtulmuş, zincirlerinden kurtulmuş
brushing|n.|fırçalayış, süprüntü, çöp
surgeries|v.|birkaç ameliyat geçirmek, bir dizi operasyon geçirmek, bir dizi ameliyat geçirmek
coffees|n.|kahve
advancing|n.|ileri gitme, ilerleyen, gelişen
celeste|adj.|cenetten, (fr) göksel, mavinin morumsu ya da soluk grimsi tonu
trixie|n.|değişik kombinasyonlardan oluşan 4 bahis
commonly|adv.|ortak olarak, sıradan biçimde, bayağıca
mentality|n.|zihniyet
cordelia|n.|kordelya
hammered|adj.|dövme, dağıtmış, sarhoş
meltdown|n.|tümerime, erime
mastermind|v.|tezgahlamak, çekip çevirmek, yönetmek
olsen|n.|olsen deneyi, olsen süneklik deneyi, olsen kupa deneyi
brow|n.|kaş
galactic|adj.|galaksi ile ilgili, samanyolu ile ilgili, galaktik
muriel|n.|kadın ismi
strand|v.|bükmek (ip), başarısızlığa uğramak, karaya oturtmak
tedious|adj.|sıkıcı
builders|n.|enstitü gemi yapımcıları rizikosu klozu, inşaatçı rizikoları, kalsiyum hidroksit
encrypted|adj.|şifreli, şifrelenmiş, şifrelendi
threads|n.|giysiler, elbise, giysi
wronged|adj.|mazlum
judd|n.|judd operasyonu
gill|n.|solungaç, kulak, sarkık yanak
cremated|v.|ölü yakmak, yakmak (ölü vb), (ölüyü) yakmak
collectors|n.|kollektörler, toplayıcılar
prosper|v.|işleri rast gitmek, gönenmek, refah düzeyi yükselmek
sheppard|n.|shepherd deneyi
ferdinand|n.|indiana eyaletinde yerleşim yeri, idaho eyaletinde şehir, vermont eyaletinde yerleşim yeri
handicap|v.|engellemek, engel olmak, ket vurmak
disciplinary|adj.|disiplin, disiplinle ilgili, terbiye amaçlı
hardcore|n.|pornonun en üst noktası, blokaj, kararlı
hens|expr.|hamama giren terler, gülü seven dikenine katlanır, kadına yakışık olmaz anlamında atasözü
inventions|n.|buluşlar
export|v.|ihraç etmek, ihracat
vowed|adj.|adaklı, ant içilmiş
snappy|adj.|zarif, hazır (cevap), hızlı
kingdoms|n.|krallık, kraliyet
vocabulary|n.|kelime hazinesi, sözcük hazinesi, söz dağarcığı
cromwell|n.|alabama eyaletinde şehir, connecticut eyaletinde şehir, indiana eyaletinde yerleşim yeri
reacting|adj.|tepkili
conceive|v.|tasarlamak, aklı almak, göz önünde bulundurmak
sling|n.|sapan
transporting|n.|taşımacılık, nakletme, nakliyat
murderous|adj.|kanlı, öldürücü, ölüm saçan
checkmate|v.|mat etmek, mat etmek (satranç), yenmek
patio|n.|evlere bitişik parke taş kaplı alan, veranda, bahçe avlusu
rebound|v.|yankılanmak
baptized|n.|vaftiz edilmiş, ilk deneme yapılmış
hooves|n.|toynak
payday|n.|ödeme günü
jodie|n.|kadın ismi
pranks|v.|muziplik yapmak, azizlik etmek, birine takılmak
seizures|n.|hastalık nöbeti, kasılma nöbetleri
enable|v.|olanak vermek, olanak tanımak, olanak sağlamak
seaweed|n.|suyosunu, denizyosunu, varek
delirious|adj.|hezeyanlı, deli, çılgına dönmüş
cyborg|n.|insan ve robot karışımı sibernetik organizma, saybörk, sayborg
telephoned|n.|fonotelgraf
bravely|adv.|cesurca, yiğitçe
huey|n.|illinois eyaletinde yerleşim yeri
markings|n.|beyaz ve sarı renkli yol işaretleri, cıvata ve somunların işaretleri, düz ve eğri yüzeyler üzerindeki işaretler
widows|n.|dul ve yetim, yetimler ve dullar, dul ve yetim maaşı
hologram|n.|hologram, üç boyutlu resim
fielding|n.|utah eyaletinde şehir
dibs|n.|parça
triumphant|adj.|başarılı, zaferiyle övünen, zafer kazanmış
washes|n.|bir elin nesi var iki elin sesi var, el eli yıkar el döner yüzü yıkar, el eli yıkar el de döner yüzü yıkar
wilbur|n.|washington eyaletinde yerleşim yeri
hauling|n.|çekme, taşıma, yedeğe alma
buckingham|n.|illinois eyaletinde yerleşim yeri, ingiltere'de yerleşim yeri
steadily|adv.|durmadan, sabit şekilde, boyuna
processes|n.|işlemler
for-|v.|aranmak, aramak, dava etmek
bey|n.|bey
projection|n.|projeksiyon, izdüşüm
creed|n.|mezhep, öğreti, bir dinin temel ilkelerini içeren ifade
acquitted|adj.|beraat etmiş, aklanmış, suçsuz bulunmuş
mink|n.|vizon, amerika vizonu, mink
meddle|v.|karışmak
buts|n.|kulak temizleyici, kulak çöpü, fakatı filanı yok
kwon|n.|tekvando
scoundrels|n.|alçak herif, hain, kötü adam
spectators|v.|seyirci toplamak, taraftar/izleyici sayısı, sevgili seyirciler
blushing|n.|yüz kızartıcı, utanarak, yüzü kızaran
close-up|n.|çok yakından alınan fotoğraf, yakından çekilen fotoğraf, yakın plan
faye|n.|kadın ismi
frigging|adj.|lanet
torches|n.|plazmalı şaloma
barlow|n.|kentucky eyaletinde şehir
mix-up|n.|anlaşmazlık, karışıklık, karışık durum
horseman|n.|atlı, binici
prescott|n.|arizona eyaletinde şehir, arkansas eyaletinde şehir, iowa eyaletinde şehir
vacations|n.|tatiller
avalanche|n.|çığ
marking|n.|markaj, çizme, çabukluk
fret|v.|üzülmek
glasgow|n.|glaskov, batı virginia eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri
editorial|n.|başmakale, başyazı, baş yazı
fleas|n.|pireler
eyeball|v.|gözünü dikip bakmak, bakmak, göz yuvarlığı
trails|n.|bisiklet yolları, hayvanlara ait ilk izler, kan izleri
insides|n.|iç organlar
bonfire|n.|açıkta yakılan ateş, açık havada yakılan ateş, şenlik ateşi
anu|n.|(babil'de) gök tanrı, babil gök tanrısı
urgency|n.|kaçınılmazlık, zorunluluk, baskı
bearer|n.|hamil, taşıyan, tabut taşıyan
provincial|n.|dini idarenin yöneticisi, il, taşralı kimse
clueless|adj.|budala, cahil, bilgisiz
chaplin|n.|connecticut eyaletinde şehir
mercer|n.|kumaş satıcısı, kumaşçı, kumaş tüccarı
tempo|n.|tempo
conner|n.|washington eyaletinde yerleşim yeri
capitalist|n.|sermayedar, anamalcı, sermayeci
bumpy|adj.|inişli çıkışlı
maternal|adj.|anne
harass|v.|rahatsız etmek, taciz etmek
stomp|v.|ayağını yere vurmak, ayakla ezmek, ağır ağır yürümek
cheeseburger|n.|çizburger, peynirli hamburger
chime|v.|ahenkli bir sesle çalmak (saat/zil/çan), vurmak (saat başlarını), ahenkle çalmak
oppression|n.|baskı, zulüm, boyunduruk
resembles|v.|benzemek, andırmak
festive|adj.|festival, bayrama ait, neşeli
mayhem|n.|sakatlama suçu, kargaşa, müessir fiil
fleeting|adj.|geçici, fani, kısa süren
zodiac|n.|burçlar kuşağı, zodyak, zodyak bölgesi
geezer|n.|ilginç ihtiyar, pinpon, bunak erkek
thorns|v.|tedirgin olmak, dikenli taç, dikensiz
gags|v.|haberin yayılmasına engel olmak, öğürmek, kusturmak
freelance|v.|serbest çalışmak, bağımsız yazar, bağımsız politikacı
whatnot|n.|belirsiz şey, etajer, küçük köşe rafı
scots|n.|iskoç ingilizcesi, iskoç
brutus|n.|brütüs, kabasakal, new york eyaletinde yerleşim yeri
cylinder|n.|silindir
pouch|n.|torba, kese
fossils|n.|ediakara fosilleri
twenty-four|n.|seri veya dizide yirmi dördüncü eleman
crosby|n.|erkek ismi, ingiltere'de yerleşim yeri, kuzey dakota eyaletinde şehir
plausible|adj.|makul, olası, akla yatkın
disgraceful|adj.|utanç verici, utandırıcı, ayıp
brushed|adj.|fırçalanmış
holed|n.|çukurlu yol, derin çukurlu
encore|v.|yeniden sahneye çağırmak, tekrarını istemek, tezahürat yapmak
ludwig|n.|ludwig deneyi
impulses|n.|birim dürtü katarı, elektriksel impulslar, elektriksel vurular
heads-up|n.|uyarı
takeoff|n.|kalkış, parodi, karikatür
ceremonies|v.|çeşitli törenlerle kutlanmak, bayrak törenlerine katılmak, protokol görevlisi
resulting|n.|sonuçlanma, sonuçta oluşan, mütevellit
refers|n.|başvuru, başvuru yeri
shatter|v.|kırmak, paramparça etmek, tuzla buz etmek
fascists|n.|faşist
entertained|adj.|ağırlanmış, eğlendirilmiş, meşgul edilmiş
mckenzie|n.|tennessee eyaletinde yerleşim yeri
lama|n.|lama, tibetli buda rahibi, budist rahip
specialists|n.|uzmanlar
phenomena|n.|fenomenler
preventing|adj.|önleyen
affectionate|adj.|sevecen
precedent|n.|teamül, örnek oluşturan durum, gelenek
contributed|n.|emeği geçen, emeği geçenler, suç işlemesine sebep olmuş
blindfold|v.|gözlerini bağlamak, bir şeyle bağlamak, gözünü kör etmek
schmuck|n.|tuhaf (kimse), garip tip, enayi
hatchet|n.|küçük balta, balta, el baltası
bambi|n.|bir kadın ismi
statute|n.|yasa, kanun, statü
offscreen|adj.|ekran dışı, perde dışı, ekran dışında
carefree|adj.|kaygısız
pollen|n.|çiçektozu, tal, polen
endurance|n.|katlanma, dayanıklılık, dayanma
dialed|n.|aramalı hat, çevirmeli hat, çevrilen numara
virtues|v.|(birinin) iyi yönlerini övmek/methetmek, skolastik felsefede dört temel erdem, erdemler etiği
coping|n.|duvar tepeliği, taşlamayla biçimleme, duvar semeri
penitentiary|n.|kilise mahkemesi başkanı rahip, ıslahevi, hapishane
hallucinating|expr.|halüsinasyon görüyorsun, halüsinasyonu olan hasta, halüsinasyonu olmayan
combo|n.|küçük caz topluluğu, karma menü, kombo
bowel|n.|bağırsak
hypothetically|adv.|varsayımlı olarak, varsayalım ki
mayonnaise|n.|mayonez, mayonezli
vineyard|n.|üzüm bağı, bağ
tam|n.|iskoç beresi, iskoçya'ya özgü yünlü bir bere
digits|n.|parmaklar, birinin telefon numarası, telefon numarası
myers|n.|myers-briggs teorisi, florida eyaletinde yerleşim yeri, florida eyaletinde şehir
evolutionary|adj.|evrimci, evrimsel, evrimli
ribbons|n.|dizginler
advertise|v.|reklamını yapmak
saline|adj.|tuzlu
edgy|adj.|keskin kenarlı, sinirli, alıngan
girlie|adj.|açık saçık
rao|n.|cramer-rao etkinliği, cramer-rao eşitsizliği, harley-rao planı
regained|n.|geri kazanmak
parental|adj.|ebeveyne ait, ana baba olarak, ana babaya ait
barbarian|adj.|barbar
brewing|n.|mayalama, maya, kaynatma
tat|v.|örmek, örgü, dövme
disrupt|v.|kesilmesine yol açmak (toplantının), ayırmak, aksatmak
unanimous|adj.|müttefik, aynı fikirde, hemfikir
implications|n.|tavsiyeler, sonuçlar, öneriler
scallops|n.|fistolar
vibrations|n.|vibrasyonlar, titreşim, vibrasyon
homesick|adj.|ev hasreti çeken, gurbet çeken, sıla hasreti çeken
casanova|n.|kazanova, çapkın, kadınlara düşkün erkek
tormented|adj.|işkence edilmiş, işkence görmüş, büyülenmiş
steamed|adj.|buğulama, buğulanmış, buharlanmış
baptism|n.|vaftiz
leagues|v.|büyükler liginde oynamak, devler liginde/arenasında oynamak, denizler altında yirmi bin fersah
thunderclap|n.|gök gürültüsü, gök gürlemesi, şaşırtıcı şey
harassed|adj.|yorgun, yılmış
velma|n.|oklahoma eyaletinde yerleşim yeri
chimp|n.|şempanze
consulted|v.|danışılmak, karşılıklı istişare edilmiş, ortaklaşa istişare edilmiş
scripts|n.|komutlar, komut dosyaları, kodlar
restoration|n.|restore etme, restorasyon
retribution|n.|hak edilen ceza, öç, cezalandırma
bows|n.|fiyonklar
unforgettable|adj.|unutulmayacak, unutulmaz, unutulmayan
afterward|adv.|sonradan, sonra, bilahare
adventurous|adj.|maceralı
swab|n.|ufak bir çubuğun ucuna takılı hidrofil pamuk, temizleme bezi
in-|pref.|pratik
inevitably|adv.|kaçınılamaz surette, çaresiz, kaçınılmaz şekilde
expectation|n.|beklenti, ümit
carcass|n.|cife, kadavra, ölü
notary|n.|noter
armand|n.|new york eyaletinde yerleşim yeri
perverted|adj.|ayartılan, sapkın, kötü
surrogate|n.|naip, başkasının yerini tutan (kimse), vekil
spat|v.|ağız kavgası etmek, dalaşmak, atışmak
dazzling|adj.|göz kamaştırıcı, baş döndürücü, baş döndüren
snipers|n.|keskin nişancıların kullanılması
lai|n.|hindistan’da yaşayan etnik bir grup, lai
cartman|n.|yük arabası kullanan kimse, kamyoncu
capabilities|n.|yetenekler
midwife|n.|ebe
gains|n.|kazanımlar, kazançlar
grumbling|n.|dırdır, dırıltı, mırıldanma
retainer|n.|pey akçesi, yatak yuvası, avans
bleak|adj.|kasvetli
inquiries|n.|kaynak, soruşturma, tahkikat
expel|v.|defetmek
berger|n.|missouri eyaletinde şehir
markers|n.|işaretleyiciler, işaretçiler, işaretler
reap|v.|oraklamak, ekin biçmek, semeresini almak
specs|n.|gözlük
morn|n.|yarın, sabah
deceit|n.|hilekarlık
coloured|adj.|renkli
degenerate|v.|yozlaşmak, soysuzlaşmak, dejenere
petals|n.|taç yapraklar
dues|n.|ücret, ödenti, resim
tensed|adj.|gerilmiş, kipi belirtecek şekilde çekimlenmiş, idaho eyaletinde şehir
battered|adj.|yıpranmış, hırpalanmış, ezilmiş
darlings|n.|sevgili
starbuck|n.|minnesota eyaletinde şehir, washington eyaletinde şehir, washington eyaletinde yerleşim yeri
patton|n.|pensilvanya eyaletinde yerleşim yeri
mound|n.|höyük, tümsek
accurately|adv.|kesin olarak, tam olarak, doğru olarak
frenzy|v.|kudurtmak, çıldırtmak, çılgınlık
senators|n.|senatör, roma senatörü, senato üyesi
saturdays|n.|her cumartesi
nemesis|n.|intikam tanrıçası, intikam, hak edilen ve kaçınılmaz ceza
rocker|n.|külbütör, sallanan koltuk, ayak
whiff|v.|kötü kokutmak, koklamak, üflemek
tagged|adj.|etiketlenmiş, işaretlenmiş, taglı
fearing|adj.|dini bütün, mütedeyyin, dindar
fringe|n.|püskül, saçak
peninsula|n.|yarımada
carey|n.|idaho eyaletinde şehir, ohio eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
radiator|n.|radyatör
tolerated|n.|karşılanan risk, kaldırılabilir doz, iyi tolere edilmiş
tor|n.|dik ve kayalık tepe, tepe üstündeki taş yığını
clucking|v.|gıdaklamak, gıdıklamak, gıdaklama
stun|v.|şok etkisi yaratmak (birinde), şaşkına çevirmek, şoke etmek
specimens|n.|imza numunesi, imza spesimeni, tatbik imza
accomplices|n.|suç ortakları, avane, koşuntu
somber|adj.|ağırbaşlı, hüzünlü, karamsar
assailant|n.|saldırgan
mutation|n.|mutasyon
ke|n.|ke-jetronik, kinetik enerji
straightaway|adv.|hemencecik, dosdoğru, hemen
spun|adj.|çekilmiş, inceltilmiş, bükülü
reclaim|v.|iadesini istemek
paramedic|adj.|paramedik, doktor yardımcısı, yardımcı hekimlik hizmeti veren kişi
capturing|n.|zaptetme, yakalama, yakalanıyor
gaston|n.|güney carolina eyaletinde yerleşim yeri, indiana eyaletinde yerleşim yeri, north carolina eyaletinde yerleşim yeri
biopsy|n.|biyopsi, biopsi, parçaalım
proportions|n.|boyutlar
colleges|n.|üniversiteler ve kollejler, tıp fakülteleri, üniversiteler ve yüksek okullar
doubting|n.|şüphe etme, kuşkulu, endişeli
theoretical|adj.|teorik
funnier|adj.|daha komik
whee|n.|heyecan veya coşku belirten ünlem, yihu, oley
indefinitely|adv.|belirsiz olarak, süresiz, süresiz olarak
disasters|n.|afat, afetler
forwards|adv.|ileriye doğru, ileriye yönelik, ileri doğru
quo|n.|süredurum, statüko, mukabele
addressing|n.|retorik, sesleniş, hitabet
pakistani|n.|pakistanlı, pakistan, pakistan'a özgü
neon|n.|neon, neon ışığı, neon lambası
slurping|adv.|höpür höpür
felon|n.|zalim, mücrim, cinayet
inflation|n.|enflasyon
stallion|n.|aygır
blackjack|v.|coplamak, yirmi bir, cop
passive|adj.|pasif, edilgen
milligrams|n.|litre başına miligram, miligram/litre
irritated|adj.|sinirli, sinirlendirilmiş, öfkeli
worldly|n.|maddecilik, maddi, dünyasal
manipulation|n.|idare, kendi çıkarları için kullanma, işletme
strips|n.|şeritler
hijacked|adj.|kaçırılmış (araba vb)
jingling|adv.|şakır şakır
pushy|adj.|saldırgan, aceleci, pişkin
macaroni|n.|makarna
bulldog|n.|buldok, yiğit, buldog
rigid|adj.|sert
maxim|n.|şiar, özdeyiş, vecize
checkpoint|n.|trafik kontrol noktası, kontrol noktası, dünya yüzeyinde önceden belirlenmiş bir nokta
soothing|adj.|yatıştırıcı
hateful|adj.|nefret verici, nefret dolu, kötü
folding|n.|kıvrım, paftalama, kırma
reduction|n.|indirme, eksiltme, düşürme
loaned|adj.|ödünç
undermine|v.|baltalamak, kuyusunu kazmak, zarar vermek (yavaş yavaş/sinsice)
frontal|n.|mihrap örtüsü, alna ait, cepheden
victories|v.|sayısız zafere imza atmak, zaferler dizisi
empathy|n.|empati, tefani, duygu sezgisi
achilles|n.|achilles, aşil
overload|v.|fazla doldurmak, fazla yüklemek, fazla yük koymak (bagaj, küfe vb'ne)
piercing|n.|delik açma, oyma, delme
stamped|adj.|damgalı, damgalanmış, mühürlü
potent|adj.|cinsel gücü yüksek, inandırıcı, nüfuzlu
bristol|n.|connecticut eyaletinde şehir, florida eyaletinde şehir, georgia eyaletinde şehir
snob|adj.|züppe
hypothetical|adj.|hipotetik, varsayımlı, farazi
detection|n.|buluş, belirleme, ortaya çıkarma
unharmed|adj.|sağ salim, zarar görmemiş
subjected|v.|şiddet görmek, şiddete maruz kalmak, tabi tutulmak
boils|expr.|başında beklenen su kaynamaz, başında beklenen tencere kaynamaz, seyredilen tencere kaynamaz
crocodiles|n.|krokodil, timsah
coupons|n.|kuponlar
culinary|adj.|aşçılık, mutfak ile ilgili, mutfakta kullanılan
mahjong|n.|çin dominosu, mikado
fleur|n.|zambak
lira|n.|liret, türk parası, lira
nonstop|adj.|aralıksız
giddy|adj.|başı dönen, terelelli, baş döndürücü
teachings|n.|öğreti, ilke, kaide
clinging|n.|tırmanış, tırmanma, sıkı
silenced|adj.|sessiz, dili bağlı, susturulmuş
goodman|n.|koca, baba, aile reisi
disposition|n.|eğilim, yaradılış
enforce|v.|zorla yaptırmak, zorla kabul ettirmek, tatbik etmek
gunner|n.|nişancı, topçu, avcı
ploy|n.|taktik, hile, girişim
suburban|n.|şehrin çevresindeki yerleşim alanları, banliyöde oturan kimse, banliyö
slutty|adj.|fahişe gibi, fahişeyi andıran
imply|v.|ima etmek
cheerleaders|n.|amigo, tribün lideri, amigo takımının üyesi
conception|n.|düşünce, fikir, kavrayış
werewolves|n.|kurt adamlar
catalog|n.|katalog
paranormal|adj.|alışılmamış, paranormal, normal ötesi
shun|v.|çekinmek, kaçınmak, sakınmak
biker|n.|bisiklet sürücüsü, bisikletçi
jellyfish|n.|denizanası
municipal|adj.|belediyeye ait
ruckus|n.|kargaşa, karışıklık, kıyamet
adviser|n.|müşavir, danışman
alerted|adj.|alarma geçirilmiş
commune|v.|söyleşmek, sohbet etmek, komünyon almak
granite|n.|granit, sert, taş gibi
fr|n.|fransiyumun simgesi
formalities|n.|formaliteler
proximity|n.|yakınlık
unavailable|adj.|müsait değil, mevcut olmayan, bulunmayan
fargo|adj.|çok hasta, georgia eyaletinde şehir, kuzey dakota eyaletinde şehir
defenseless|adj.|savunmasız
innovation|n.|yenilik
paradox|n.|yanıltmaç, mantıkla çelişen ama doğru olan söz, aykırıkanı
koreans|n.|koreliler
valleys|n.|pensilvanya eyaletinde yerleşim yeri
walden|n.|kolorado eyaletinde şehir, tennessee eyaletinde yerleşim yeri, vermont eyaletinde yerleşim yeri
trooper|n.|süvari eri, süvari atı, atlı polis
infrastructure|n.|altyapı
barrow|n.|el arabası
interns|n.|stajyer
taro|n.|bir tropik bitki, kulkas, gölevez
bertha|n.|kadın ismi, berta, sudan ve etiyopya'da yaşayan etnik bir grup
proctor|v.|disiplini sağlamak, sınav gözetmenliği yapmak, sınavda gözetmenlik yapmak
hovering|n.|süzülme, süzülüş
feminist|n.|kadın hakları savunucusu, feminist
observations|n.|gözlemler, mülahazat
prone|adj.|yatkın
spins|n.|mıknatıs fırılları, iki dönüş
conversion|n.|dönüşüm, dönüştürme
emerging|n.|görünme, yeni geliştirilen
sheffield|n.|alabama eyaletinde şehir, illinois eyaletinde yerleşim yeri, iowa eyaletinde şehir
dustin|n.|oklahoma eyaletinde yerleşim yeri
ares|n.|savaş tanırısı
crazier|adj.|deli, çıldırmış, çılgın
od|v.|overdoz vermek, aşırı doz vermek, aşırı dozda vermek (ilaç, uyuşturucu)
goldie|n.|uçak otomatik uçuş
bulbs|n.|vestibüler tomurcuklar
blindly|adv.|körü körüne
rabies|n.|kuduz
brownie|n.|kuşüzümlü ekmek, yavrukurt, iyi huylu peri
formerly|adv.|vaktiyle, evvel zaman, eskiden
chastity|n.|iffet
desirable|adj.|makbul, arzu edilen, çekici
barriers|n.|engeller, radyasyon emen bariyerler
hoops|v.|karşılaşılan tüm engellerin üstesinden gelmek, çok sayıda engelle karşılaşmak, badireler atlatmak
grains|n.|tahıl, ağırlık birimi, metali oluşturan minik tanecikler
considerably|adv.|oldukça, epeyce, çok
baptist|n.|vaftiz eden, vaftizci
decorating|n.|dekore etme, dekore eden
proposals|n.|çözüm önerileri, firma teklifleri, tekliflerin açılma zamanı
staging|n.|sahneye koyma, sahneleme, yapı iskelesi
diabetic|n.|şeker hastası, diyabetik, şeker hastalığına ait
baskets|v.|sepetlenmek, temsili mal bileşimleri
macbeth|n.|makbet
rehabilitation|n.|rehabilitasyon
muscular|adj.|kaslı, adaleli
revolting|n.|isyan etme, tiksindirici, mekruh
glacier|n.|buzul
expressions|n.|ifadeler
hiroshima|n.|hiroşima
imitation|n.|imitasyon, taklit
footprint|n.|ayak izi, ayakizi
beaumont|n.|kaliforniya eyaletinde şehir, mississippi eyaletinde yerleşim yeri, teksas eyaletinde şehir
stupidest|adj.|aptalca, beyinsiz, salak
unborn|adj.|doğmamış, gelecek, henüz doğmamış
jacobs|n.|wisconsin eyaletinde yerleşim yeri
displayed|adj.|gösterilmiş, gösterilen, afişe
commanders|n.|kuvvet komutanları, nato komutanları muhabere
confirming|n.|onaylama, teyit eden, onaylayan
garment|n.|giysi, elbise, giyim eşyası
latter|n.|ikincisi, ikisinden sonuncusu, sonuncusu
indonesia|n.|indonezya, endonezya
enlightened|adj.|münevver, entelektüel, okumuş
plight|n.|kötü durum
hel|n.|cehennem
dorian|n.|doris'li kimse, dorlara ait
ogre|n.|öcü, gulyabani, umacı
warnings|n.|uyarılar, alarmlar
incision|n.|deşme, kesik, yarma
inquire|v.|soru sormak, soruşturmak, aramak
tampered|adj.|kurcalanmış, karıştırılmış
prophets|n.|peygamberler
listener|n.|dinleyici
substances|n.|tehlikeli atıklar, zehirli nesneler, tehlikeli maddeler
rapping|n.|kamalama, tokmaklama, tıklama
kisser|n.|ağız, yüz, surat
hind|n.|dişi geyik, art, but
apb|n.|suçlu anonsu
ulysses|n.|kansas eyaletinde şehir, new york eyaletinde yerleşim yeri, nebraska eyaletinde yerleşim yeri
butters|n.|çirkin, beş para etmez
tripp|n.|güney dakota eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
dublin|n.|georgia eyaletinde şehir, irlanda'da yerleşim yeri, indiana eyaletinde yerleşim yeri
meows|v.|miyavlamak, miyav, miyavlama
preference|n.|tercih
minding|n.|umur
mirage|n.|serap
prediction|n.|tahmin
dodgy|adj.|tehlikeli, çok tehlikeli, fırıldakçı
drenched|adj.|ıslatılmış, ıslatılan, ıslanmış
backbone|n.|belkemiği, omurga
bessie|n.|oklahoma eyaletinde yerleşim yeri
virtuous|adj.|faziletli, erdemli
earns|n.|geçim kapısı, ekmek teknesi, ekmek kapısı
grizzly|n.|bozayı, boz ayı, elek
slob|n.|tembel, pasaklı, pasaklı tip
floods|n.|seller, baskın, taşkın
enquiry|n.|sorgu, soru, soruşturma
begs|v.|dilenmek, yalvarmak
juror|n.|jüri üyesi, yeminli uzman kişi
strained|adj.|gergin
monitored|adj.|izlenen, gözlenen
brethren|n.|tarikat üyeleri, erkek akrabalar, erkek kardeşler
oblivion|n.|unutulma, farkında olmama, kayıtsızlık
contracted|adj.|büzülen, büzülmüş, kısalmış
bookie|n.|bahis defteri tutan, müşterek bahisçi, bahis düzenleyen kimse
painters|n.|ressamlar
amnesty|n.|af, genel af
cot|n.|kulübe, çocuk karyolası, bebek karyolası
cosmetics|n.|kozmetik, makyaj malzemeleri, makyaj malzemesi
mortar|n.|harç, havan
friction|n.|sürtünme
drunks|n.|sarhoş
correspondent|n.|eş, mektup arkadaşı, biriyle mektuplaşma
outskirts|n.|varoş, çevre, kenar mahalleler
veer|v.|yön değiştirmek, çevirmek, döndürmek
gaga|n.|deli, bunak, aptal
wacky|adj.|sapık, manyak, kaçık
mann|n.|mann-kendall sınaması, mann-whitney sınaması, mann-whitney-wilcoxon testi
adieu|interj.|hoşçakal, güle güle, elveda
informing|n.|ihbar, gammazlık, jurnalcılık
swung|adj.|sallanan
trina|n.|bir kadın ismi
hamburgers|n.|kıyma, sığır kıyması, hamburger
interruption|n.|sekte, kesinti, kesilme
mediocre|adj.|vasat
fulfil|v.|yerine getirmek
schedules|n.|zamanlamalar, listeler
sinks|v.|ödü kopmak, ödü bokuna karışmak, yüreği ağzına gelmek
pathologist|n.|patolog, patolojist, patoloji uzmanı
disposed|adj.|hazır, atılmış, istekli
knit|v.|örmek
excluded|v.|hariç tutulmuş, seçim dışı bırakılmış, dışta bırakılan
scraps|n.|hırdavat, artık
sob|v.|hıçkırarak ağlamak, hıçkırık
unhealthy|adj.|sağlıksız
prestigious|adj.|saygın
rotate|v.|dönmek, döndürmek
tracey|n.|ingiltere'de yerleşim yeri
concubine|n.|sevgili, metres, kapatma
ridden|adj.|istilaya uğramış
ballot|v.|oy vermek, oylama yapmak, oylama
fischer|n.|fischer süreci, fischer-tropsch süreci, karl fischer metodu
complexion|n.|görünüm, yön, beniz
bugle|v.|boru çalmak, boru çalgı, boru
humanitarian|n.|insancıl kimse, yardımsever kimse, insanlara yardım etmek isteyen kimse
gurney|n.|sedye, ambulans sedyesi, tekerlekli sedye
whit|n.|zerre, parçacık, hamsin yortusu
hoot|v.|yuhalamak
sumo|n.|sumo güreşi, sumo güreşçisi, uluslararası sumo federasyonu
holocaust|n.|tamamen yakılmış kurban, kurban, çok sayıda insan kaybına sebep olan yangın
io|n.|donanım gç hatası, gç arabellekleme, gç taban adresi
yao|n.|(kısaca) yaodong, içinde yaşanan bir tür çin mağarası, çin
servers|n.|hizmet birimleri
hartley|n.|iowa eyaletinde şehir
sleepless|adj.|uykusuz
fern|n.|aşk merdiveni, eğrelti otu, eğreltiotu
forbes|n.|kuzey dakota eyaletinde şehir
calcium|n.|kalsiyum
frown|v.|alın çatmak, somurtmak, kaş çatmak
deranged|adj.|dengesiz, bozuk, deli
exhaustion|n.|tükenmişlik
one-night|adj.|bir gecelik
rebuilt|adj.|yeniden inşa edilmiş, onarılmış, revizyondan geçmiş
legislation|n.|kanunlar, mevzuat, yasa
sighting|n.|nişan alma, görme, görünme
discomfort|v.|rahatsız etmek, rahatsızlık
technological|adj.|teknolojik, teknolojiyle ilgili, uygulayımsal
saigon|n.|saigon'a ait
lacked|n.|yokluk, eksiklik
bermuda|n.|bermuda, dizaltı şort
hit-and-run|adj.|çarpıp kaçan (şoför), çarpıp kaçan, vur-kaç
wept|adj.|ağlayan
disperse|v.|dağılmak
kosher|adj.|temiz, yahudi inançlarına uygun hazırlanan, turfa olmayan
entrepreneur|n.|müteşebbis, girişimci
worshipped|adj.|ibadet edilen, tapılan
unauthorized|adj.|yetkisiz, izinsiz
long-distance|n.|şehirlerarası konuşma, uluslararası (telefon konuşması), şehirlerarası telefon görüşmesi
romanian|n.|romanyalı, rumence, romence
melbourne|n.|arkansas eyaletinde şehir, avustralya'nın victoria eyaletinde şehir, florida eyaletinde şehir
flanders|n.|flandre, flandra
connors|n.|erkek ismi
drinker|n.|sarhoş, ayyaş, içkici
wyoming|n.|amerika'da eyalet, illinois eyaletinde şehir, iowa eyaletinde şehir
hotshot|n.|çok yetenekli kimse, her tarakta bezi olan, önemli
joaquin|n.|erkek ismi
myrtle|n.|mersin ağacı, mersin, mirtle
europeans|n.|avrupalılar
deputies|n.|milletvekilleri, vekiller
ther|expr.|izleyicilerden yuhalama sesleri yükseliyordu, yabani hayvan anlamı veren ön ek
highlights|n.|saçta daha açık renkteki kısımlar, röfle, önemli noktalar
cate|n.|lüks, kaliteli ve lezzetli yiyecek
plateau|n.|plato
set-up|n.|proje, yapı, durum
sordid|adj.|pis, cimri, çok kirli
placement|n.|atama, para yatırma, sipariş verme
quota|n.|pay, kontenjan, kota
adjusted|adj.|ayarlı, ayarlanmış, düzeltilmiş
tuning|n.|uydurma, reglaj, ayar
rockefeller|n.|karun
bartlett|n.|illinois eyaletinde yerleşim yeri, kansas eyaletinde şehir, nebraska eyaletinde yerleşim yeri
hormone|n.|hormon
apparatus|n.|levazım, vasıta, aygıtlar (belli bir amaç için kullanılan)
gringo|n.|yabancı
vancouver|n.|güneybatı kanada'da bir ada, washington eyaletinde şehir
samaritan|n.|samiriyeli, merhametli
curves|n.|kıvrımlar, eğriler
perceived|adj.|fark edilen, algılanan
catalogue|n.|katalog
gall|v.|sürterek yara yapmak, öd, safra
luckiest|expr.|o tanıdığım en şanslı insandır
vending|n.|para ile çalışan satış otomatı, otomatik kahve makinası, otomat
thelma|n.|kadın ismi, georgia eyaletinde şehir
greeted|v.|sevgi gösterileriyle karşılanmak, sevgiyle karşılanmak, şaşkınlıkla karşılanmak (haber vb)
scoring|n.|skor, skor verme, çizme
housewives|n.|ev hanımları, ev kadınları
beverage|n.|içecek
fellowship|n.|duygu paylaşımı, dostluk, burs
thieving|n.|hırsız, hırsızlık, çalma
tidal|adj.|gelgit ile ilgili
genre|n.|tür, üslup, çeşit
unfit|adj.|formunda olmayan
fetus|n.|dölüt, cenin, anne karnındaki bebek
lanes|v.|şerit değiştirmek, yol hatları, trafikte iki şeridin birden işgal edilmesi
socialism|n.|sosyalizm, toplumculuk
outlaws|v.|yasal haklardan mahrum etmek, yasal haklardan yoksun bırakmak, yasadışı ilan etmek
entrust|v.|vermek, ısmarlamak, görevlendirmek
rosalie|n.|nebraska eyaletinde yerleşim yeri, teksas eyaletinde şehir
oversight|n.|gözetim, nezaret, hata
reflex|n.|refleks
vacate|v.|bırakmak, boca etmek, dökmek
goldberg|expr.|karmaşık (sistem), shprintzen-goldberg sendromu
mercenaries|n.|ücretli asker, paralı asker
exercising|n.|kullanma, tatbik etme, jimnastik yapma
bev|abrev.|milyar elektron volt
prosperous|adj.|müreffeh
symptom|n.|belirti
certificates|n.|sertifikalar
larsen|n.|larsen ortasu trolü
suffocate|v.|boğulmak
roadblock|n.|barikat, mania, bariyer
detain|v.|alıkoymak
inquisition|n.|araştırma, engizisyon, inceleme
qualifications|n.|aranan nitelikler, aranan özellikler, nitelikler
paparazzi|n.|paparazziler
eater|n.|yiyen kimse, faydalı sebze ya da meyve
prefect|n.|başkan, reis, eski romada yüksek rütbeli memur
flapping|n.|kanat çırpma, flap hareketi, çırpma
discrimination|n.|fark gözetme, ayırım
incorporated|adj.|birleşmiş, anonim, birleşik
callahan|n.|florida eyaletinde yerleşim yeri
strengths|n.|güçlü yanlar, kuvvetli yönler, güçlü yönler
rowdy|n.|kabadayı
productions|n.|görsel-işitsel yapımlar
publication|n.|yayınlama, yayım, yayımlama
collects|v.|toplamak, biriktirmek
winslow|n.|arizona eyaletinde şehir, arkansas eyaletinde şehir, ingiltere'de yerleşim yeri
hodges|n.|alabama eyaletinde şehir, güney carolina eyaletinde yerleşim yeri
astronomers|n.|astronomlar
prevents|v.|engellemek, önlemek, engel olmak
museums|n.|müzeler
windsor|n.|connecticut eyaletinde şehir, güney carolina eyaletinde yerleşim yeri, ingiltere'de yerleşim yeri
nebraska|n.|amerika'da eyalet
lobe|v.|yana yatmak, meme, kulak memesi
poses|n.|cesur pozlar, cüretli pozlar, cüretkar pozlar
inscription|n.|yazıt
left-handed|adj.|solak
outpost|n.|karakol, ileri karakol mevki, ileri karakol
snuff|v.|enfiye çekmek, koklamak, burnuna çekmek
luxurious|adj.|lüks
contributions|prep.|katkılarıyla
purgatory|n.|temizleyici, araf
documented|adj.|belgelenen, belgeli, belgelenmiş
showcase|n.|vitrin
delilah|n.|fahişe, baştan çıkaran, kadın ismi
jurors|n.|geçici jüri üyeleri, jüri heyeti, jüri üyelerinin reddi
unimportant|adj.|önemsiz
moisture|n.|rutubet, nem
lefty|n.|solak, solda, sol elle
hendrix|n.|oklahoma eyaletinde yerleşim yeri
replica|n.|kopya
wondrous|adj.|harikulade
horoscope|n.|burç
hampshire|n.|ingiltere'de bölge, illinois eyaletinde yerleşim yeri
departing|n.|geçmiş, ayrılan
instruct|v.|haber vermek, yol göstermek, emretmek
morbid|n.|morbid, hastalıklı, ürkütücü konulara aşırı ilgi duyan
disagreement|n.|anlaşmazlık
misguided|adj.|yanlış yola saptırılmış, yanlış (fikir/plan), yanıltılmış
optimism|n.|iyimserlik
traders|n.|borsa tacirleri, motor imalatçıları ve tüccarları birliği, motor üreticileri ve tüccarları derneği
humane|adj.|insancıl
commodore|n.|en eski kaptan, tuğamiral, yelken kulübü başkanı
rink|n.|paten sahası, buz pateni alanı, paten alanı
initiation|n.|kabul töreni, üyeliğe kabul töreni, öncülük yapma
calamity|n.|musibet, felaket, afet
nectar|n.|balözü, bitki özü, abıhayat
judicial|adj.|yargılayan, yargı, eleştirici
swarm|v.|doluşmak, toplanmak, akın etmek
drumming|n.|davul çalma, gürültü
annabelle|n.|kadın ismi
spartacus|n.|spartaküs
trolley|n.|el arabası
theorists|n.|kuramcı, teorisyen, nazariyeci
rowan|n.|üvez, kuş üvezi, üvez ağacı
bowels|n.|ahşa, iç kısımlar, iç
density|n.|yoğunluk
researcher|n.|araştırmacı
timid|adj.|çekingen, ürkek
garth|n.|avlu, çayırlık arsa, bent
denton|n.|georgia eyaletinde şehir, ingiltere'de yerleşim yeri, kansas eyaletinde şehir
romania|n.|romanya
earnings|n.|kazanç
stalk|v.|sinsice izlemek, sap
righteousness|n.|doğruluk, dürüstlük
fours|v.|dört ayak üzerine düşmek, domalmak, emeklemek
slaps|n.|parmak arası terlik
confide|v.|güvenip sırrını açmak
bravest|n.|en cesur köpek, en cesur
fencing|n.|eskrim
laurence|n.|pırıltı
masturbate|v.|mastürbasyon yapmak
vale|n.|diyar, kadın kat görevlisi, dere
triggers|n.|harekete geçiriciler, tetikleyiciler
wiener|n.|sosis, bir çeşit sosis
painless|adj.|acısız, ağrısız
believers|n.|müminler
eruption|n.|erupsiyon, indifa, feveran
obligated|adj.|yükümlü, mükellef, mükellef olan
mojo|n.|büyü, cazibe, çekicilik
essex|n.|connecticut eyaletinde şehir, iowa eyaletinde şehir, ingiltere'de bölge
eternally|adv.|sonsuz olarak, daima, ebediyen
dispatched|adj.|sevk edilen, dağıtıldı, göndermek
repulsive|adj.|soğuk, itici, iğrenç
ness|n.|karanın denize doğru çıkıntısı, burun, çıkıntı
devised|adj.|icat edilmiş, planlanmış
headlights|n.|farlar
exiled|adj.|sürülmüş, sürgün
impeccable|adj.|hatasız, kusursuz
donors|n.|bağışta bulunanlar
crucified|v.|çarmıha gerilmek
customary|adj.|göreneksel, alışılmış
billboard|n.|tahta perde, ilan panosu, pano
costly|adj.|masraflı
imitate|v.|taklit etmek
definitive|n.|belgili sözcük, koşulsuz, belirli
simplicity|n.|basitlik, sadelik
waved|adj.|dalgalı, ondüleli
pavel|n.|chiray ve pavel hastalığı
scolded|adj.|azar işitmiş, azarlanmış, fırça yemiş
separates|v.|ayırmak, ayrı
nichols|n.|güney carolina eyaletinde yerleşim yeri, iowa eyaletinde şehir, new york eyaletinde yerleşim yeri
setback|n.|gerileme, aksama, yenilgi
lakh|n.|yüzbin, (bir şeyin, mecaz anlamda) yüz binlercesi, on üzeri beşe eşit miktar
liters|n.|2 litre su, litre/dakika
relics|n.|eski eserler, kalıntılar, kutsal emanetler
clockwork|n.|saatin makinesi, saati çalıştıran düzenek, saat mekanizması
cdc|n.|cdc genler, hastalık kontrol ve önleme merkezi, hastalık kontrol merkezi
ventilation|n.|hava verme, havalandırma
civilizations|n.|uygarlıklar, medeniyetler
brawl|n.|arbede
bog|n.|bataklık
pressures|n.|baskılar
chills|v.|çok korkutmak, ödünü koparmak, korkutmak
tex|n.|teks, tex
pussies|n.|kedi, pisi, pisipisi
phrases|n.|yabancı kelimeler ve deyimler, terimler ve cümleler, kelimeler ve cümleler
gob|n.|kütle, ağız, gemici
pricks|v.|nafile itiraz etmek, otoriteye karşı çıkmak, vicdan azabı
jars|n.|şişe ve kavanozlar
rivera|n.|kaliforniya eyaletinde şehir
disable|v.|menetmek, etkisiz kılmak, yetkisini almak
lancaster|n.|güney carolina eyaletinde şehir, ingiltere'de şehir, kansas eyaletinde şehir
godfrey|n.|illinois eyaletinde yerleşim yeri
pickled|adj.|salamura
novelty|n.|yenilik
equations|n.|denklemler, eşitlikler
doubtful|adj.|şüpheli, kuşkulu
sexist|n.|cinsiyet farkı gözeten kimse, cinsiyet ayrımı yapan, cinsiyetçi
buffer|n.|tampon
castles|n.|şatolar, kaleler
reproduce|v.|yeniden üretmek, kopyasını çıkartmak, çoğalmak
goodwin|n.|güney dakota eyaletinde yerleşim yeri
blueberry|n.|çayüzümü, yabanmersini, yaban mersini yemişi
potty|n.|çocuk dilinde klozet, çocuk dilinde lazımlık, lazımlık
algeria|n.|cezayir
geometry|n.|uzambilgisi, hendese, geometri
dumbest|adj.|en sersem olanı, en sessiz olanı
bahamas|n.|bahama, bahama adaları, bahamalar
bleating|n.|meleme
horizontal|adj.|yatay
assisted|adj.|desteklenmiş
indebted|adj.|verecekli, teşekkür borçlu, minnettar
spook|v.|hayalet gibi görünmek, korkutmak, ürkütmek
fertilizer|n.|gübre
hinges|v.|çığırından çıkmak, çığrından çıkmak, keyfi gıcır olmak
helium|n.|helyum, helyum (simgesi ile)
imposed|adj.|empoze, maruz kalınan, maruz kalmış
financing|n.|para sağlama, finansman, para kaynağı
restrictions|n.|kısıtlar, kısıtlamalar, tahditler
implied|adj.|ima edilmiş, ima edilen, anlaşılan
idaho|n.|amerika'da eyalet
simplest|adj.|en kolay
traits|n.|özellikler
implement|v.|yerine getirmek (plan vb'ni), uygulamak, alet-edevat
supervise|v.|gözetip denetleyerek yönetmek
evident|adj.|belli
analyzing|n.|çözümleyiş, inceleme, çözümleyici
drooling|n.|salya artışı
princesses|n.|prensesler
coastal|adj.|sahil, kıyı, sahille ilgili
bargaining|n.|pazarlık etme, görüşme, pazarlık
matrimony|n.|evlilik, evlenme, izdivaç
airfield|n.|alan, uçak pisti, hava meydanı
sensual|adj.|duygusal
lennon|n.|ünlü ingiliz şarkıcı john lennon
cycles|n.|çalışma dinlenme dönemleri, yollar ve çevrimler, konjonktür dalgaları
grimes|n.|iowa eyaletinde şehir
feeble|adj.|güçsüz, çelimsiz
moreno|n.|kaliforniya eyaletinde şehir
spikes|n.|kramponlu ayakkabı
rugged|adj.|pürüzlenmiş, karmakarışık, zinde
reviewing|n.|inceleme
potassium|n.|potasyum
tombs|n.|mezarlar
mimics|adj.|taklit
elton|n.|louisiana eyaletinde yerleşim yeri
homage|n.|hükümdara karşı sadakat yemini etme, egemenliğini kabul etme, biat
devious|adj.|dolambaçlı, hileli, çapraşık
postcards|n.|kartpostallar, posta kartları, posta kartı
crimson|v.|kızarmak, kırmızılaştırmak, kıpkırmızı olmak
activist|n.|etkinci, eylemci, aktivist
rulers|n.|cetveller
rowing|n.|kürek çekme, kürek
conditioner|n.|şartlandırıcı, düzeltici, dinlenme bölgesi
quoting|n.|bildirme, borsa cetveline geçirme, fiyat verme
filmmaker|n.|film yapımcısı
softball|n.|beysbola benzer top oyunu, softbol
outline|v.|taslağını çizmek, anahatlarıyla çizmek, özetlemek
doses|adv.|azar azar, kısa süreliğine, toksik dozlarda alınan
perjury|n.|yalan yere yemin, yalancı şahitlik, yeminli yalan
etiquette|n.|görgü kuralları
joyous|adj.|sevinçli
intestines|n.|ahşa, bağırsaklar, bağırsak
residential|adj.|oturmaya elverişli, özel konutların bulunduğu (mahalle/semt), oturmaya ayrılmış
envelopes|n.|bina yüzeylerindeki termal düzensizlikler, metin zarfları, zarflar ve etiketler
tortoise|n.|tosbağa, kara kaplumbağası, kaplumbağa
unjust|adj.|adaletsiz, haksız
fetish|n.|fetiş
blasts|n.|maden ve taş ocağı patlatmaları
completion|n.|bitirme
davenport|n.|kanepe, yazı masası, sedir
heartbreak|n.|acı, gönül yarası, ıstırap
safari|n.|av, safari, vahşi yaşam alanlarına düzenlenen gezi
brochure|n.|broşür
larson|n.|kuzey dakota eyaletinde şehir
limousine|n.|limuzin, karşılama arabası, limozin
hiccups|v.|hık tutmak, hıçkırmak, hıçkırık tutmak
boast|v.|övünmek, böbürlenmek
portraits|n.|portreler
escorted|adj.|kavalyelik etmiş, himaye veya nezaket için refakat etmiş, himaye için refakat etmiş
magnitude|n.|büyüklük
collapsing|n.|göçertme, göçme
coupon|n.|kupon
utility|n.|yardımcı yazılım, kamu hizmet kuruluşu, işe yarar şey
gourmet|n.|iyi yiyecek ve içecekten anlayan kişi, ağzının tadını bilen kimse, yemek ve içkinin iyisinden anlayan kimse
wrecking|n.|enkaz, yıkım, tamir
snore|v.|horlamak
motions|v.|isteksizce yapmak, rutine bağlamak, bir işi isteksizce yapmak
courting|n.|kur, kur yapma
suicides|n.|küme intiharı
apprehended|adj.|yakalanmış (suçlu), tutuklanan, tutuklu
prescribe|v.|reçete yazmak
installation|n.|montaj, kurma
likeness|n.|tasvir, portre, resim
interface|n.|arayüz
metals|n.|metaller
blindness|n.|körlük
one-time|n.|tek seferlik kazanç, kesenek iadesi, tek sefer
accelerator|n.|hızlandırıcı
awol|n.|asker kaçağı, kaçak asker, izinsiz yokluk
firms|n.|hukuk firmaları, özel iş firmaları, inşaat firmaları
kale|n.|mangır, lahana, para
stretches|v.|uzatmak, gerinmek, germek
tack|v.|katmak, faça etmek, birleştirmek
auxiliary|adj.|yardımcı
swipe|v.|vurmak, kuvvetle vurmak, aşırmak
shelters|n.|sığınaklar, barındırma yurtları, ıslahhane
childbirth|n.|doğurma, çocuk doğurma, doğum
livelihood|n.|geçim
longed|v.|özlenmek, ölüm, özlemi çekilen
swordsman|n.|iyi kılıç kullanan kimse, kılıç ustası, silahşör
resourceful|adj.|her şeye çare bulur, becerikli, zengin kaynaklı
sabbath|n.|sebt günü
stormed|v.|ziyaretçi akınına uğramak
gaps|n.|eksik yönleri, eksik yönler, açıklıklar
incentive|n.|teşvik
showdown|n.|kağıtlarını açma, açık oynama, bir kavganın galibini belirleyecek olay
harding|n.|georgia eyaletinde şehir, minnesota eyaletinde şehir, new jersey eyaletinde yerleşim yeri
ref|v.|hakemlik yapmak, hakem, baş
molten|adj.|eriyik, dökme, ergimiş
frosty|adj.|donmuş, ağarmış, kırağılı
henceforth|adv.|bu andan itibaren, şimdiden sonra, bundan sonra
renewed|adj.|yenilenmiş
sitter|n.|kuluçkaya yatmış tavuk, oturan kimse, kımıldamadan duran kuş
richardson|n.|teksas eyaletinde şehir
fingertips|n.|parmak uçları
handcuffed|adj.|kelepçeli
cocking|n.|kurma mandalı, kurma levyesi, kurma somunu
catfish|n.|yayınbalığı, kedi balığı, yayın balığı
johann|n.|johann geometrisi
charger|n.|şarj cihazı, şarj aleti
disciplined|adj.|disiplinli
outing|n.|tur, tozma, evden dışarı yapılan küçük gezi veya seyahat
como|n.|mississippi eyaletinde yerleşim yeri, north carolina eyaletinde yerleşim yeri
una|adv.|oybirliğiyle, hep bir ağızdan, birleşmiş milletler derneği
glitch|n.|kusur, arıza, hata
jell-o|expr.|deveye hendek atlatmak kadar zor
grants|n.|new mexico eyaletinde yerleşim yeri
porcelain|n.|porselen
remarried|n.|ikinci kez evlenen insanlar
firepower|n.|ateş gücü, bir takımın sayı yapma kapasitesi
captioned|adj.|alt yazılı
hampton|n.|arkansas eyaletinde şehir, connecticut eyaletinde şehir, florida eyaletinde şehir
flawed|adj.|çatlamış, defolu, çatlak
uno|expr.|birimiz hepimiz için hepimiz birimiz için, kendine iyi bakmak (kendine dikkat etmek), en önemli şey
griff|n.|bilgi, haber, grif
scarcely|adv.|zar zor, güç bela
roach|n.|hamam böceği
stairwell|n.|merdiven boşluğu, merdiven yuvası, merdiven aralığı
memorized|v.|ezberlemek
coded|adj.|kodlu
negligence|n.|ihmal
belgrade|n.|belgrat, belgrad, maine eyaletinde yerleşim yeri
arteries|n.|arterler
toot|v.|korna çalmak, çalmak (korna/düdük/boru vb'ni), ötmek
stunts|v.|büyümesini önlemek, dikkat çekici reklam yapmak, gelişmesini önlemek
buttocks|n.|kalça
forks|n.|çatallar, mississippi eyaletinde şehir, washington eyaletinde şehir
mentions|v.|değinmek, bahsetmek
loco|n.|lokomotif, deli, kaçık
cedric|n.|erkek ismi
bellows|n.|körük
snowy|adj.|karlı
pelvis|n.|idrar boşluğu, leğen kemiğinin kapsadığı içbükey boşluk, leğen
hymn|v.|ilahi okumak, ilahi okuyarak kutlamak veya ifade etmek, ilahi söylemek
audit|v.|hesapları denetlemek, hesap denetimi, denetim
slashed|adj.|kesilmiş, yırtılmış, yarılmış
frantic|adj.|aşırı heyecanlanmış, hummalı, zıvanadan çıkmış
negroes|n.|zenciler
calves|n.|buzağılar, danalar, balina yavrusu
pao|n.|kung pao usulü tavuk, taocu üçleme'nin bir üyesi
aloha|interj.|hoş geldiniz
sahara|n.|büyük sahra, sahra
freshly|adv.|henüz, taze, yeni
sabotaged|v.|sabote etmek, baltalamak, sabotaj yapmak
poodle|n.|kaniş, fino köpeği, kaniş köpeği
archaeologists|n.|arkeologlar
gore|v.|peş koymak, peş kesmek, boynuzlamak
meatball|n.|köfte
maggots|n.|sürfe, heves, böcü
horrifying|n.|korkutma, korkunç, ürkünç
prosecuted|n.|takibi şikayete bağlı suçlar, yargılananlar
briefed|adj.|kısa, kısa ve öz
cider|n.|elma suyu, elma şarabı, elma şırası
pompous|adj.|şatafatlı
boomer|n.|göçmen işçi, büyük dalga, iri erkek kanguru
waiters|n.|garson
abundance|n.|çokluk, bereket, bolluk
barricade|n.|barikat
gallon|n.|abd 3,78 litre, galon, 4,55 litre
kali|n.|salikorn, kali
literal|adj.|kelimesi kelimesine
scrubbing|n.|fırçalama, ovalama, temizleme
implies|expr.|adı üstünde, adı üzerinde
discouraged|adj.|bezgin
almond|n.|badem, soluk bronzluk, badem renginde
chestnut|n.|kestane
syphilis|n.|frengi, sifilis, sifiliz
criteria|n.|kıstaslar, değerlendirme ölçütleri, kriterler
contacting|n.|temas etme, irtibat kurma, temas eden
trainee|n.|stajyer
haskell|n.|oklahoma eyaletinde yerleşim yeri, teksas eyaletinde şehir
elvira|n.|kadın ismi, iowa eyaletinde şehir
rad|n.|rad, radikal, müthiş
poe|n.|kullanım sonrası değerlendirme (ksd)
farmhouse|n.|çiftlik evi
hallucination|n.|halüsinasyon, sanrı, kuruntu
heals|expr.|müzik ruhun gıdasıdır, zaman herşeyin ilacıdır, zaman tüm yaraları sarar
samba|v.|samba yapmak, samba
lizards|n.|kertenkele
straws|v.|çöp kadar bile önem/değer vermemek, zerre kadar umurunda olmamak, zerre kadar aldırmamak
silicon|n.|silisyum, silisli, silikon
reptiles|n.|sürüngenler
waldo|n.|florida eyaletinde şehir, kansas eyaletinde şehir, maine eyaletinde yerleşim yeri
paces|v.|bir kimsenin yeteneğini denemek, (at) hız yapmak, adımlık
fenton|n.|iowa eyaletinde şehir, louisiana eyaletinde yerleşim yeri, missouri eyaletinde şehir
slugs|v.|tembellik etmek, birine okkalı bir yumruk atmak, sert vurmak
leftover|n.|yemek artığı, artık yemek, artık
freighter|n.|yük gemisi
bashed|v.|sertçe vurmak, sert vuruş
convicts|v.|suçlu bulmak, hükümlü, mahkum
jerky|adj.|spazmodik, sarsıntılı, sarsak
solemnly|adv.|resmi bir şekilde, ağırbaşlı bir şekilde, kutsal bir şekilde
accommodation|n.|konaklama, kalacak yer
slag|n.|cüruf
lemons|expr.|hayat limon veriyorsa limonata yap
whitman|n.|massachusetts eyaletinde yerleşim yeri
verified|adj.|doğrulanmış
jethro|n.|musa'nın üvey babası, şuayp
fancied|adj.|muhayyel, hayal kurulmuş
partridge|n.|keklik
defiance|n.|muhalefet, karşı koyma, saygısızlık
hottie|n.|seksi (kız), güzel ve seksi kız, sıcak su şişesi
stripping|n.|soyma, soyunma, sıyırma
pant|v.|hızla atmak, nefes nefese kalmak, şiddetle çarpmak (kalp)
mutton|n.|koyun, koyun eti, sağır
hypocrisy|n.|riyakarlık
invaluable|adj.|paha biçilmez
ce|n.|seryumun simgesi
lucrative|adj.|kazançlı
cbs|n.|kolombiya yayın sistemi
slows|v.|yavaşlatmak, yavaş, ağır
penal|adj.|ceza ile ilgili, cezaya ait, ceza olarak
uploaded|n.|karşıya yükleme tarihi, üzerine yükleniyor
akbar|interj.|allahu ekber
orchestral|adj.|orkestra için bestelenen, orkestra, orkestraya ait
endlessly|adv.|bitmek tükenmek bilmeksizin, sonsuz bir şekilde, durmadan
hitchcock|n.|güney dakota eyaletinde şehir, güney dakota eyaletinde yerleşim yeri, oklahoma eyaletinde yerleşim yeri
broads|adj.|engin, geniş
redo|v.|yeniden yapmak
illegitimate|adj.|gayrimeşru
self-respect|n.|haysiyet, şeref, benlik
ceased|v.|son vermek, dinmek, durmak
blender|n.|mikser
accordance|n.|uygunluk, verme, ahenk
brandt|n.|güney dakota eyaletinde yerleşim yeri
enhanced|adj.|artmış, gelişmiş, geliştirilmiş
unprofessional|adj.|meslek ahlakına göre hareket etmeyen, meslek kurallarına aykırı, meslek ahlakına aykırı
scanned|adj.|gözden geçirilmiş, taralı, tarandı
mow|v.|mowed - mowed/mown, biçmek (çim/ot), biçmek
whiskers|n.|bıyık (kedi vb hayvanlara ait), favori, sakal
tourism|n.|turizm
listeners|n.|sayın dinleyiciler, çoklu dinleyiciler
rebirth|n.|yeniden doğuş
predicament|n.|kötü vaziyet, kategori, kötü durum
vendor|n.|satıcı
confessions|n.|itiraflar
jakob|n.|creutzfeldt-jakob hastalığı, sporadik creutzfeldt-jakob hastalığı, varyant creutzfeldt-jakob hastalığı
illiterate|adj.|okuma yazma bilmeyen, okumamış, cahil
hounds|v.|at sırtında tilki avına çıkmak, köpeklerle ava çıkmak, avlanırken tazıların peşi sıra gitmek
malicious|adj.|kötücül
labyrinth|n.|labirent
psyche|n.|akıl, tin, can
cher|n.|fransa'da bir nehir, fransa'da bir bölge
florist|n.|kesme çiçek satılan dükkanı işleten kimse, çiçekçi
extraterrestrials|adj.|dünya dışından gelen, dünya dışı
unthinkable|adj.|imkansız, akla gelmedik, akla gelmez
frail|adj.|hafif ve kırılgan, çelimsiz, narin
plato|n.|plato, platon, eflatun
planetary|adj.|gezegensel, gezegenlere ait
hitched|adj.|evli
flair|n.|kabiliyet, özel yetenek, içgüdü
ruse|n.|dolap, ığrıp, madik
observatory|n.|rasathane, observatuar, gözlemevi
heavyweight|n.|ağır sıklet, nüfuzlu kimse, önemli kimse
diplomacy|n.|diplomasi
sri|n.|sri lankalı (kimse), sri lankalı, sri lanka
nutty|adj.|tımarhane kaçkını, kafadan çatlak, deli
extravagant|adj.|müsrif, savurgan
caterpillar|n.|tırtıl
skeptical|adj.|şüpheci
ideology|n.|ideoloji
healthier|adj.|daha sağlıklı, sağlıklı
linking|n.|birleştirme, bağlama, bağlayıcı
prudent|adj.|ihtiyatlı, sağduyulu, tedbirli
cutler|n.|bıçakçı, illinois eyaletinde yerleşim yeri, maine eyaletinde yerleşim yeri
mugs|v.|çok çalışmak, komik mimikler yapmak, zevzeklik etmek
junkies|n.|keş mezarlığı, bilgi tiryakileri
rudder|n.|dümen
hermann|n.|missouri eyaletinde şehir
laundering|n.|aklama, çamaşır yıkama
kaufman|n.|teksas eyaletinde şehir
pints|v.|birkaç kadeh içmek, birkaç bira içmek
succession|n.|birbirini izleme
possesses|v.|sahip olmak
urges|n.|bastırılmış cinsel dürtüler
structural|adj.|yapısal
lollipop|n.|saplı şeker, lolipop, meyveli şeker
atmospheric|n.|ortam, hava, ortam ile ilgili
weirder|adj.|daha acayip, daha tuhaf
stride|v.|strode - stridden, uzun adımlarla yürümek, geçip gitmek
blizzard|n.|tipi, kar fırtınası, aşırı bolluk
extracted|adj.|söyletilmiş, çekilmiş, çıkartılmış
administer|v.|yönetmek, idare etmek, tatbik etmek
pinocchio|n.|pinokyo
state-of-the-art|adj.|son model
fireball|n.|ateş topu, alev topu, hırs küpü
individually|adv.|teker teker, ayrı olarak, ayrı ayrı
flask|n.|şişe, cep şişesi, termos
obeyed|v.|itaat edilmek, uyulmak
swain|n.|çoban (şiir), köylü delikanlı, aşık
hubble|n.|nargile, gürültü, nargile içmek
burgess|n.|kasabalı, kasaba sakini, kasabada oturan
coffins|n.|tabut
booster|n.|yardım, yardımcı, destek
erratic|adj.|seyyar, kararsız, sebatsız
undergo|v.|geçirmek (hastalık)
typed|adj.|yazılmış, daktilo edilmiş, daktiloyla yazılan
bearded|adj.|sakallı
salami|n.|salam
ports|n.|bağlantı noktaları, erişim noktaları
marsha|n.|kadın ismi
versa|adv.|ve aksi, ve aksine, ve tersine
oval|adj.|oval
downfall|n.|çökme, çöküş, düşüş
warwick|n.|georgia eyaletinde şehir, ingiltere'de yerleşim yeri, kuzey dakota eyaletinde şehir
ulcer|n.|ülser
friendships|n.|çocukluk dönemi arkadaşlıkları
domination|n.|egemenlik, hakimiyet
dementia|n.|matruh, aşırı bunama, akıl hastalığı
arthritis|n.|eklem yangısı, arterit, artrit
refusal|n.|geri çevirme, reddetme, ret
journals|n.|elektronik yayınların alımı/temini, akademik hakemli dergiler, yardımcı yevmiyeler
volatile|adj.|uçucu
performers|n.|icracılar
beneficial|adj.|yararlı
seaman|n.|gemici, denizci
iranian|n.|acem, iran, iranlı
sputtering|n.|büyüme, püskürtme, püskürtümlü metal film
sled|n.|kızak
mortality|n.|ölümlülük, fanilik, ölüm oranı
hysteria|n.|isteri
hui|n.|çin'de yaşayan müslüman kesim, çin’de yaşayan etnik bir grup, huihui
beseech|v.|besought/beseeched - besought/beseeched, istirham etmek, dilemek
endings|v.|sinir uçlarını uyarmak, sinir uçları
shea|n.|tropik bir tür afrika ağacı
miscarriage|n.|düşük yapma
patrons|n.|patronlar
hun|n.|alman, canım, tatlım
racer|n.|yarışçı
plots|n.|konular
hoop|n.|çember, kasnak, halka
dojo|n.|dövüş okulu, judo okulu
vents|v.|havalandırma delikleri, akü delikleri
unfamiliar|adj.|alışılmadık, alışılmamış, yabancı
slab|n.|levha
persecution|n.|zulüm
monarchy|n.|monarşi
philosophical|adj.|felsefi
ping-pong|n.|masatenisi, pingpong, dönüşümlü çalışma
soften|v.|yumuşamak, yumuşatmak
herpes|n.|uçuk, herpes
riddles|n.|bilmeceler
foggy|adj.|sisli
coz|interj.|kuzen
specialized|adj.|uzmanlaşmış, belli bir amaç için üretilen, belli bir alanda uzmanlaşmış
parvati|n.|hinduizm'de bolluk tanrıçası
deemed|v.|addolunmak, addedilmek, nihai olarak kabul edilecek olmak
astronomy|n.|astronomi, gökbilim, gökbilimi
reins|n.|bel, dizginler, duyguların ya da tutkuların kaynağı olan yer
yous|pron.|siz, sen
duet|v.|düet yapmak, çift, duetto
beginner|n.|yeni başlayan, acemi
viewed|adj.|gözden geçirilmiş, incelenmiş
nebula|n.|nebula, bulutsu uzak yıldız topluluğu, bulutlu
fascination|n.|büyüleyicilik, sihir, büyük merak
fussy|adj.|telaşlı
elect|v.|seçmek, görevlendirmek, atamak
collier|n.|kömür işçisi, kömür ocağı işçisi, kömür madeni işçisi
evaluate|v.|değerlendirmek
microscopic|adj.|çok ufak, mikroskobik, gözetleçe ilişkin
hearty|adj.|candan
mammoth|n.|mamut, muazzam, devasa
oppressed|adj.|mazlum
diameter|n.|çap
tailing|n.|tortu, kuyruk, gizli takip
intoxicated|adj.|sarhoş
photographic|adj.|fotoğrafik, fotoğrafla ilgili, fotoğraflık
shocks|n.|sarsıntı, sarsma
descending|n.|iniş, inme, desendan
stakeout|n.|gözlem, nöbet, polis incelemesi
pioneers|n.|öncü
towed|n.|çekilir kompaktör, çekilir silindir, çekilir araçlarda mekanik bağlantılar
submission|n.|arz, bildirme, teklif
prostate|n.|prostat
ointment|n.|merhem
hr|abrev.|ik, saat, sa
bids|v.|ihale açmak, ihaleye fesat karıştırmak, açık artırmaya davet etme
recalled|adj.|hatırlanmış, geri çağrılmış, geri istenmiş
gaius|n.|augustus, ilk roma imparatoru
electrician|n.|elektrikçi, elektrik tesisatçısı, ışıkçı
aneurysm|n.|anevrizma, balonlaşma, damar genişlemesi
sulking|n.|somurtma, dayak
actively|adv.|bilfiil, aktif olarak, etkin bir şekilde
mortuary|n.|morg
serenity|n.|sükunet
funded|adj.|birleştirilmiş, finanse edilen, finanse edilmiş
mmmm|n.|aaaa
shreds|n.|parçalanmış eski kağıt parçaları
mixer|n.|karıştırıcı, mikser
draining|n.|akıtma, süzdürme, akıtan
bolted|adj.|sürmeli, demirli, sürgülü
assurance|n.|güvence, teminat
zapping|n.|zaping, televizyon kanalları arasında gezinip durma, (tv) kanal zaplama
bossy|adj.|patronvari, sert, hükmetmeyi seven
venezuela|n.|venezuela, venezüella
commentary|n.|yorum
beheaded|adj.|başı kesilen, başı kesilmiş
waffle|v.|saçmalamak, zırvalamak, boş laf
unnoticed|adj.|göze çarpmadan, farkedilmeden, gözden kaçmış
onward|adj.|ilerleyen, ileriye doğru giden, ilerlemiş
rollins|expr.|uyuşturucu etkisiyle uçan/tribe girmiş
cnn|n.|evrişimli sinirsel ağ
cleanup|n.|tasfiye, temizleme, vurgun
cosy|n.|çaydanlık örtüsü, çaydanlık kılıfı, örtü
branded|adj.|damgalı, markalı, markalaşmış
plow|v.|sabanla sürmek, pullukla sürmek, saban
schneider|n.|indiana eyaletinde yerleşim yeri
farley|n.|iowa eyaletinde şehir, missouri eyaletinde yerleşim yeri
deluxe|n.|en yüksek standardın ifadesi, ihtişamlı, lüks
aft|adv.|kıç tarafta (gemi), kıçta, geriye doğru
neurotic|n.|nevrotik kimse, sinir hastası, safkan
rani|n.|racanın eşi, racanın karısı, mihracenin karısı
chords|n.|akortlar
tanker|n.|tanker
tides|n.|gelgit, gelgitler
settlers|n.|yerleşimciler
bio|n.|biyo, yaşamla ve canlı şeylerle ilgili, biyografi
snowman|n.|kardan adam
berta|n.|kadın ismi, berta, sudan ve etiyopya'da yaşayan etnik bir grup
geisha|n.|geyşa
transactions|n.|tutanak (kuruma/derneğe ait), zabıt, muamelat
reflexes|n.|refleksler, istemsiz hareketler
extraordinarily|adv.|fevkalade, olağanüstü, olağandışı olarak
chunks|n.|parça cam
assaulting|n.|amire saldırı ve bilerek itaat etmeme
obsolete|adj.|eski, modası geçmiş, kullanılmayan
consultation|n.|danışma, konsültasyon
agreeable|adj.|makbul, kabul edilebilir, uygun
impostor|n.|sahtekar, düzenbaz, düzenbaz kimse
lobo|n.|lobo hastalığı
wasp|n.|eşek arısı
maturity|n.|vade, olgunluk
sheik|n.|şeyh, gösteriş düşkünü
liberate|v.|serbest bırakmak
brilliantly|adv.|parıl parıl, parlak bir şekilde, ışıl ışıl
surfer|n.|sörfçü
selma|n.|alabama eyaletinde şehir, indiana eyaletinde yerleşim yeri, kaliforniya eyaletinde şehir
lowell|n.|indiana eyaletinde yerleşim yeri, maine eyaletinde yerleşim yeri, massachusetts eyaletinde şehir
snores|v.|horlamak
assumptions|n.|varsayımlar
capability|n.|kabiliyet
bridegroom|n.|güvey, damat
mysteriously|adv.|esrarengiz bir şekilde, gizemli bir şekilde
priors|n.|önceki cezalar
leanne|n.|kadın ismi
defective|adj.|kusurlu, özürlü
joss|n.|çin putu, çin mabudu
tombstone|n.|mezar taşı, masa üstü aksesuar, mezartaşı
writings|n.|yazılar
delicacy|n.|incelik
tumble|n.|takla
silva|n.|(belirli bir) dönemin bitki örtüsü, çevredeki bitki örtüsü, (belirli bir) çevredeki ağaçlar
hospitalized|v.|hastaneye kaldırılmak, hastanelik olmak, hastaneye yatırılmak
fig|n.|incir
speculate|v.|tahminde bulunmak, düşünmek, spekülasyon yapmak
sha|n.|bir tür kötü fen shui enerjisi, chicago, çin'in hunan eyaletinin başkenti
fidel|n.|bir tür telaffuz tablosu, fidel tablosu
inflicted|adj.|maruz bırakılmış, doğan, kaynaklanan
stabilize|v.|dengede tutmak
outs|n.|filmin son versiyonundan çıkarılmış bölümler
violations|n.|trafik suçları, firmalar arası ihlaller, hukuk ihlalleri
deuce|n.|şeytan, dü zar, düs
significantly|adj.|önemli ölçüde, anlamlı, önemli
newcomer|n.|yeni gelen, yeni gelmiş kimse, yeni göçmen
youngster|n.|çocuk, genç adam, delikanlı
engineered|adj.|tasarlanmış
sighted|adj.|görüşlü, görülen, görebilen
riddance|n.|kurtarma, kurtulma
seasoned|adj.|lezzet verilmiş, baharatlı, deneyimli
picket|v.|karakol koymak, grev gözcülüğü yapmak, gözcü dikmek
abc|n.|alfabe, ilkeler, abece
mecca|n.|mekke, cazibe merkezi, indiana eyaletinde yerleşim yeri
insomnia|n.|uykusuzluk
pendant|n.|kolye, avize, pandantif
harmonica|n.|mızıka, armonika
listing|n.|kayıt, bayılma, liste
viruses|n.|virüsler
ich|n.|beyaz benek
heartache|n.|gönül yarası
proceeds|n.|verim, kazanç, getiri
intruding|v.|izinsiz girmek
reddy|adj.|kırmızımsı, kızılımtırak, kızılımsı
pasture|n.|otlak
inspectors|n.|bakanlık müfettişleri, denetçiler komitesi, hesap uzmanları kurulu
horrified|adj.|dehşete düşmüş, korkmuş, dehşete kapılmış
neighborhoods|n.|mahalle, muhit
sprained|adj.|burkulmuş
lambs|n.|kuzu yünü, kuzu gibi, kurbanlık koyun gibi (boyun eğmek)
democrat|n.|halkçı, demokratik, demokrat
jameson|n.|missouri eyaletinde yerleşim yeri
lovebirds|n.|muhabbetkuşu, muhabbet kuşu, cennet papağanı
rivalry|n.|rakiplik, rekabet
vial|n.|küçük şişe, ufak şişe, şişecik
rv|n.|karavan
bret|n.|erkek ismi
peeking|v.|dikizlemek, dikiz etmek, gözetlemek
talisman|n.|tılsım
stats|abrev.|istatistik
arsenic|n.|arsenik
buchanan|n.|ramiz, georgia eyaletinde şehir, kuzey dakota eyaletinde şehir
intake|n.|alınan miktar, giriş ağzı, yeni girenler (bir kuruluşa/camiaya)
sheikh|n.|kabile reisi, şeyh, gösteriş düşkünü
takeover|n.|devralma
scanners|n.|tarayıcılar, virüs tarayıcılar
gareth|n.|adi, ciğeri beş para etmez, pislik
foreplay|n.|ön oyun, peşrev, cinsel ilişkiden önce oynaşma
acquaintances|n.|eş dost
alphonse|expr.|önce sen sevgili Alphonse, önce sen buyur cancağızım, birbirine karşı çok nazik olan iki kişi
thames|n.|thames nehri
swallows|n.|frak
rewarding|n.|ödüllendirme, taltif, ümit verici
cornell|n.|illinois eyaletinde yerleşim yeri, wisconsin eyaletinde şehir
recession|n.|girinti, durgunluk (piyasa), geri çekilme
brands|n.|markalarımız, birleşmiş markalar derneği, markalar savaşı
firearm|n.|ateşli silah, patlama kuvveti ile ateşlenen silah
squawks|n.|viyaklama
ukrainian|n.|ukrayna dili, ukraynalı, ukrayna
infectious|adj.|bulaşıcı
morrow|n.|yarın, ertesi gün, sabah
yahoo|n.|maganda, kıro, hayvan gibi tip
pious|adj.|dindar, mütedeyyin, dini bütün
brainwashed|adj.|beyni yıkanmış
quantities|n.|miktar, metraj
societies|n.|kurumlar, toplumlar
sedated|adj.|sakin, yatışmış
wines|n.|şarap yönetim komitesi
colourful|adj.|rengarenk, renkli
time-out|n.|zaman aşımı
bribery|n.|rüşvet
jacuzzi|n.|jakuzi
out-|v.|yıpratmak, çıkmak, düzlemek
old-school|n.|geleneksel fikirlere sahip grup, modası geçmiş yöntem, eski kafalı
pours|expr.|aksilikler hep üst üste gelir, dertler gelirse hep üst üste gelir, (sorun veya güzel şeyler) verdikçe veriyor
geological|adj.|yerbilimsel, jeolojik, yerbilimine değin
valuables|n.|değerli şeyler, değerli eşyalar
crossword|n.|çapraz bulmaca, kare bulmaca, bulmaca
bunnies|n.|tavşan çikolata, tavşan şeklinde çikolata, tavşan gibi üremek/çoğalmak
undead|n.|hortlak, yaşayan ölü, zombi
bathed|v.|yıkanmak, banyo
linger|v.|oyalanmak
roster|n.|nöbet listesi, isim listesi, görev listesi
rebuilding|n.|eski haline dönüştürme, yeniden yapılandırma, köklü yapısal değişikliklere gitme
moods|n.|karamsarlık, huysuzluk, gıcıklık
grinder|n.|öğütücü
weber|n.|weber, weber (simgesi wb), georgia eyaletinde şehir
harem|n.|harem
proxy|n.|vekil
kincaid|n.|illinois eyaletinde yerleşim yeri, kansas eyaletinde şehir
timed|adj.|zamanlanmış, belirli bir sürede/sırayla gerçekleşen, zaman ayarlı
toxins|n.|toksinler
originated|v.|köken almak, -den ileri gelen, fon kaynaklı kredi
tracing|n.|geçirme, izleme, takip etme
wham|v.|pat diye çarpmak, çarpmak, küt diye vurmak
ironing|n.|ütülenecek çamaşırlar, ütülenmiş çamaşırlar, ütülü çamaşırlar
quotes|n.|tırnak işareti
nemo|expr.|bedenine hizmet eden kimse özgür değildir, karşılığını ödemeden kimse bana zarar vermez, kimse kendi davasının yargıcı olamaz
mar|v.|tadını kaçırmak, mahvetmek, ihlal etmek
hauled|v.|zılgıtı yemek, azar işitmek, beni bir güzel azarladı
docking|n.|kenetlenme (uzay aracı), uzayda kenetlenme, dayama
sciences|n.|fen bilimleri
accelerate|v.|hızlanmak, hızlandırmak
relive|v.|bir şeyi tekrar yaşamak, yeniden yaşamak, (bir deneyimi vb) tekrar yaşamak
aggravated|adj.|fenalaşmış, kötüleşmiş, kışkırtılan
downright|adj.|dürüst, kesin, açık
brushes|n.|dört kömürlü kömür taşıyıcısı, güç tahrikli fırçaları, sanayi fırçaları
adjustments|n.|düzeltmeler, düzenlemeler, ayarlamalar
steaming|adj.|ateşli, kızgın, sarhoş
confessing|v.|itiraf etmek
lucie|n.|kokulukiraz, mahlep, mahlep kirazı
wary|adj.|temkinli, sakıngan, uyanık
hemisphere|n.|yarıküre, yarımküre, yarım küre
quaint|adj.|ilginç, garip, bir hoş
magically|adv.|büyüleyerek, büyülü bir şekilde, büyülenmiş gibi
accordion|n.|armonika, akordeon, akordeon gibi açılıp katlanan
cowardice|n.|korkaklık
cramped|adj.|sınırlı tutulmuş, sıkışık, kramp girmiş
bailing|n.|kefalet ödemesi, kefalet ödeme, balyalama
curt|adj.|ters ve kısa (söz), ters, kısa
stamina|n.|dayanma gücü, dayanıklılık, yaşama gücü
cheesecake|n.|peynirli pasta, peynirli kek, yarı çıplak kadın fotoğrafları
testosterone|n.|erkeksilik, erkeklere atfedilen özellikler, erkeklik hormonu
updates|n.|güncelleştirmeler
fend|v.|uzaklaştırmak, kendini korumak, karşı koymak
lumps|n.|öbekler, topaklar
lux|n.|lüks
crummy|adj.|bakımsız, köhne, kırıntılarla dolu
coil|n.|bobin
discovers|expr.|keşif/sn
upbringing|n.|çocuk bakım ve eğitimi
geronimo|n.|oklahoma eyaletinde yerleşim yeri
transmitting|n.|gönderme, iletme, ilk önce
barbaric|adj.|barbar
thong|v.|sırımla bağlamak, sırım takmak, kırbaçlamak
trespass|v.|tecavüz etmek (hak), günah işlemek, izinsiz girmek
ballerina|n.|balerin
genetics|n.|genetik, kalıtımbilim, genetik bilimi
lilies|n.|zambaklar
elegance|n.|zariflik
casinos|n.|kumarhane, gazino
yak|v.|çenesi düşmek, tibet sığırı, yak
paged|adj.|disk bellekli, sayfalanmış
streaming|n.|gruplandırma, akma, akış
navigator|n.|pilot, rotacı, deniz subayı
cleaver|n.|satır, kasap satırı, balta
anew|adv.|yine, yeniden, gene
marseille|n.|marsilya
odor|n.|koku
great-grandfather|n.|büyük dede, büyük büyükbaba, babasının dedesi
raiders|n.|şirket avcıları, islami büyükdoğu akıncılar cephesi
sprayed|n.|tabanca boyası, püskürtme boya, ısıl püskürtme ile yapılan kaplama
crypt|n.|ölülerin gömüldüğü kilise mahzeni, mahzenmezar, yeraltı türbesi
spam|n.|istenmeyen e-posta, elektronik posta sağanağı, mesaj sağanağı
teeny|adj.|genç, minik, delikanlı
twig|n.|ince dal
anesthesia|n.|duyum yitimi, duyu yitimi, uyuşma
scandalous|adj.|çok ayıp, kepaze, rezil
esteem|v.|saygı duymak, addetmek, saygı
carmine|n.|karmin, karmen, kızıl
ripley|n.|batı virginia eyaletinde yerleşim yeri, batı virginia eyaletinde şehir, ingiltere'de yerleşim yeri
breached|adj.|gedikli
spanking|n.|şaplak
devi|n.|nanda devi zirvesi
trot|v.|koşmak, tırıs gitmek, hızlı yürümek
strategies|n.|stratejiler
bb|n.|hava tüfeğinin saçması
thriving|adj.|kuvvetli, büyüyen, mamur
haunts|n.|evler ve uğrak yerleri
snails|n.|salyangozlar
compose|v.|bestelemek, oluşturmak
hopping|n.|sekme, hoplama
coconuts|n.|baş, hindistancevizi, hindistan cevizi
amidst|adv.|arasına, ortasına, (bir sürecin/sürenin) ortasında
powering|n.|güçsel hızlandırma
indigenous|adj.|yerli
awakening|n.|uyanış, bilinçlenme, uyandırıcı
bop|v.|vurmak, darbe, vuruş
hippies|n.|çiçek çocukları, hippiler
exorcism|n.|cin kovma duası, dua okuyarak cinleri defetme, şeytan çıkarma
swiftly|adv.|süratle, hızla
gamblers|n.|kumarbazlar
jd|n.|j.d. pavır ve iştirakleri, hukuk doktoru, hukuk lisans derecesi
maddox|n.|tonkin körfezi olayı, maddox haçı
blinding|v.|körleştirmek, körleştirme, göz kamaştırıcı
engraved|adj.|oymalı, oyma, kazınmış
labeled|adj.|bandrollü, etiketlenmiş, damgalı
maude|n.|kadın ismi
comforts|n.|bedenin rahatını sağlayan şeyler, hayatın lüksleri, rahatlatıcı şeyler
ample|adj.|bol
clang|v.|tınlatmak, çınlamak, tangırdamak
understatement|n.|bir şeyi olduğundan hafif gösteren ifade, az gösterme, tefrit
disqualified|adj.|yetkisiz kılınmış, yetersiz, diskalifiye
taels|n.|bu ağırlıktaki çin gümüş parası, çin ağırlık ölçüsü, 28-70 gramlık tartı
meteorite|n.|meteortaşı, göktaşı (düşen), göktaşı
trio|n.|üçlü takım, triyo, trio
centimeters|n.|santimetre
reconnaissance|n.|keşif
flares|n.|el maytabı uygunluk sertifikası
leukemia|n.|kan kanseri, lösemi
palermo|n.|kuzey dakota eyaletinde şehir, maine eyaletinde yerleşim yeri, new york eyaletinde yerleşim yeri
shareholders|n.|hissedarlar, hisse senedi sahipleri, pay sahipleri
kelsey|n.|kadın veya erkek ismi, bir kadın ismi
commandments|n.|on emir, hz musa'ya allah tarafından verilen on emir, on buyruk
din|v.|yankılanmak, çınlamak, gürlemek
camper|n.|karavan gibi kullanılan minibüs, kampçı, ufak kamp karavanı
smoker|n.|puro içen kimse, arıcı körüğü, sigara içen
serene|adj.|açık, durgun, huzurlu
jocelyn|n.|kadın ismi
trolls|v.|suda oltayı çekerek balık tutmak, oltayla balık tutmak, oltayı suda sürükleyerek balık tutmak
intentional|adj.|kasti, kasıtlı
icing|n.|buz örtüsü, şekerli krema, buz kaplama
fore|n.|baş taraf, pruva, ön taraftaki
bali|n.|bali sonrası doha turu müzakereleri
gorge|v.|yemek atıştırmak, tıkınmak, tıka basa yemek
hermit|n.|inzivaya çekilmiş kimse, münzevi kişi, yalnızlığı seven kimse
countrymen|n.|hemşehri derneği, hemşehri örgütü
vibrant|adj.|titreşimli, enerjik
smuggler|n.|kaçakçı
dosage|n.|doz, dozaj
fictional|adj.|hayali, kurmaca, imgesel
runt|n.|cüce, küçük sığır, bir tür evcil güvercin
antonia|n.|kadın ismi
intolerable|adj.|kabul edilebilir değil, dayanılmaz, çekilmez
pavilion|n.|köşk
livia|n.|kadın ismi
pretext|n.|bahane
wail|v.|inlemek, ağıt yakmak, hayıflanmak
madge|n.|wisconsin eyaletinde yerleşim yeri
la-la|expr.|lay lay lay, hayal dünyası, los angeles (takma adı)
skid|v.|takoz koymak, patinaj yapmak, savrulmak
adores|v.|tapmak
cunningham|n.|kansas eyaletinde şehir
jekyll|n.|georgia eyaletinde şehir
swapped|n.|yer değişen düğmeler
phoning|n.|telefonlaşma
barbed|adj.|iğneli, alaycı, dikenli
pledged|adj.|taahhüt edilen, taahhüt edilmiş, rehinli
ecstatic|adj.|kendinden geçmiş, sermest, çok mutlu
genitals|n.|tenasül organları, cinsel organlar, avret
ancients|n.|antik düşünürler, eski uygarlıklar, antik yunan ve romalı yazarlar
weakly|adj.|hasta, halsiz, bitkin
typhoon|n.|tayfun
citizenship|n.|yurttaşlık, vatandaşlık
terra|n.|yerküre, yeryüzü, toprak
turbulence|n.|kargaşalık, türbülans (suda/havada), gürültü
responds|v.|yanıtlamak, yanıt vermek, karşılık vermek
lowe|n.|lowe indeksi
perpetual|adj.|ebedi, sürekli
skis|n.|kayak
tipping|n.|boşaltma, yasak olduğu halde yere çöp atma, bahşiş bırakma
irons|n.|zincir, pranga
lash|v.|ayıplamak, taşlamak, ip ile bağlamak
trades|n.|esnaf, ticaret odalarını temsil eden, ticaret rüzgarları
shagging|n.|kabarıklık, seks
marshmallows|n.|hatmi, lokuma benzer şekerleme, korkak kimse
possum|n.|opossum, avustralya keseli sıçanı
jericho|n.|eriha, erika şehri, vermont eyaletinde yerleşim yeri
saxon|n.|sakson, wisconsin eyaletinde yerleşim yeri
enchanting|adj.|büyüleyici
sleazy|adj.|pespaye, gevşek, kalitesiz
upsets|v.|keyfini kaçırmak, üzmek, üzgün
imaging|n.|görüntüleme, imgeleme, sesle görüntüleme
dis|n.|uzaklaştırma, dis
stefano|n.|ayestefanos antlaşması, ayastefanos antlaşması
amaze|v.|şaşırtmak
kimono|n.|kimono
johannes|n.|yazı matbaasını bulan alman mucit
disobeyed|v.|itaatsizlik etmek
court-martial|v.|askeri mahkemede yargılamak, askeri mahkeme, divanıharp
firsthand|adj.|ilk elden, ilk el, yeni
smallpox|n.|çiçek hastalığı, çiçek virüsü, çiçek
accomplishment|n.|başarma, becerme, başarılan iş
complicate|v.|güçleştirmek, içinden çıkılmaz hale getirmek, zorlaştırmak
voltage|n.|voltaj, gerilim
traction|n.|çekiş
lifeguard|n.|cankurtaran
universities|n.|üniversiteler
swimsuit|n.|mayo
discarded|adj.|atılmış, ıskarta, atılan
romano|n.|roma-germen hukuk sistemi
infiltrated|adj.|gizlice girilmiş (bina/üs vb)
goodbyes|v.|helalleşmek
guillotine|v.|giyotinle idam etmek, giyotin ile idam etmek, giyotinle başını uçurmak
specifics|n.|detaylar, ayrıntılar, incelikler
nuke|v.|atom bombası ile tahrip etmek, nükleer silahla saldırmak, mikrodalga fırında ısıtmak/pişirmek
katz|n.|katz işareti
chipped|adj.|ufalanmış, yontulmuş
limbo|n.|cehennemin sınırındaki yer, hapishane, zindan
rehearsed|adj.|tekrarlanmış, prova edilmiş
davidson|n.|oklahoma eyaletinde yerleşim yeri, north carolina eyaletinde yerleşim yeri, north carolina eyaletinde şehir
lima|n.|illinois eyaletinde yerleşim yeri, montana eyaletinde yerleşim yeri, new york eyaletinde yerleşim yeri
marketplace|n.|pazar yeri, pazaryeri, hal (pazar yeri)
cleansing|n.|temizleme, temizleyici, arındırıcı
scientifically|adv.|bilimsel olarak
dissolved|adj.|çözünük, münhal, son verilmiş
cholera|n.|sulu sürgün, kolera, sudan kaynaklanan bulaşıcı bağırsak hastalığı
packets|n.|paketler
punctual|adj.|dakik
mockery|n.|alay
rafe|n.|rafe
migraine|n.|migren, yarım baş ağrısı, yarım başağrısı
cedar|n.|sedir
bends|n.|vurgun, hava ambolisi, kramp
fancies|adj.|süslü
fallout|n.|nükleer atık, radyoaktif serpinti, atık
casserole|n.|fırında kullanılan cam kap, kulplu tencere, fırında kullanılan kap
girly|adj.|kız gibi, kadın gibi
graft|v.|(doku/organ) nakletmek, (bitkiyi) aşılamak
yvette|n.|kadın ismi
stickers|n.|yeni lastikler
benefactor|n.|hayırsever
vendetta|n.|kan davası
chiang|n.|çin’de yaşayan etnik bir grup, çiang-min, erma
fatherland|n.|memleket, vatan, yurt
boon|n.|iyilik, nimet, rahatlık
lazarus|expr.|beş parasız, çok fakir, cebi delik
participated|v.|katılmak
banish|v.|sürgün etmek
lush|v.|çok içmek, içkici tip, ayyaş
talker|n.|konuşan, konuşmacı
gulps|v.|yutkunmak
pups|expr.|kavgaya hazır, kavgacı
washroom|n.|tuvalet, lavabo, abdesthane
soar|v.|yüksekten uçmak, ötesine gitmek, hızla yükselmek
frightens|v.|korkutmak
firefighter|n.|itfaiyeci
wipes|n.|ıslak mendil
infect|v.|bulaştırmak, (hastalık) bulaştırmak
desserts|n.|tatlılar, tatlı çeşitleri
concepts|n.|kavramlar
stimulating|n.|tahrik edici, ufuk açıcı, ilham veren
indicating|n.|gösterme, belirtme
off-limits|adj.|taahhüt kapsamı dışı, sınır dışı
sequel|n.|arka, üst tarafı, son
sherwood|n.|kuzey dakota eyaletinde şehir, ohio eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
earnest|adj.|ağırbaşlı
disposable|n.|tek kullanımlık şey, elden çıkarılması mümkün, kullanıldıktan sonra atılabilen
noir|n.|suç üzerine film, rulette üzerine bahis yapılan siyah sayılar, kara film akımından olan
sturdy|adj.|sağlam, güçlü kuvvetli
finnish|n.|fin, fince, fin dili
so-so|adj.|ne iyi ne kötü, şöyle böyle, eh işte
traditionally|adv.|geleneksel olarak, bilindiği üzere, karakteristik olarak
abomination|n.|tiksinme, nefret etme
compact|v.|sıkıştırmak, sıkılaştırmak, sözleşmek
hyderabad|n.|haydarabad
chino|n.|dokuma pamuk kumaş, kaliforniya eyaletinde şehir
rec|n.|rekreasyon, dinlence, dinlenme yeri
souvenirs|v.|hediyelik eşya almak
shredded|adj.|lime lime edilmiş, doğranmış, parçalanmış
minerals|n.|mineraller
hints|n.|pratik ipuçları, pratik kullanım ipuçları, demek imalarım işe yaradı
forsaken|adj.|vazgeçmiş, vazgeçilmiş, ıssız
rubles|n.|ruble, rus para birimi, rus parası
lucius|n.|turna balığı
anus|n.|büzük, anüs, şerç
pharmacist|n.|eczacı
puffs|adv.|pofur pofur, fosur fosur, hiç üşenmez!
diaries|n.|günlükler, günlük
unannounced|adj.|haber verilmemiş, habersiz, duyurulmamış
with-|v.|sevişmek, katlanmak, ile dolu olmak
calculating|adj.|hesap eden, hesaplayan
blindfolded|adj.|gözü kapalı, gözü bağlı
kingsley|n.|iowa eyaletinde şehir, kentucky eyaletinde şehir
battleship|n.|zırhlı gemi, zırhlı (gemi), savaş gemisi
presumed|adj.|farzedilen, farzedilmiş
exceptionally|adv.|fevkalade, müstesna olarak, son derece
topless|adj.|memeleri örtülü olmayan (kadın), kadının göğsünü örtmeyen (giysi), sutyensiz
scouting|n.|keşfetme, izcilik, gözcülük
durant|n.|iowa eyaletinde şehir, mississippi eyaletinde şehir, oklahoma eyaletinde şehir
alarming|n.|alarm verme, korkutucu, panik yaratan
bias|n.|önyargı
estates|n.|ayni haklar, mülk, zümre meclisleri
pods|n.|yunus grupları
assisting|n.|asistanlık etme, yardımcı olma, destek olma
molested|adj.|rahatsız edilmiş, saldırıya uğramış
offerings|n.|teklifler, öneriler
believable|adj.|güvenilir, inanılır, itimat edilir
airports|n.|hava alanları
overrun|v.|overran - overrun, makine vb fazla çalıştırmak, her tarafına yayılmak
parlour|n.|oturma odası, salon, küçük salon
fearsome|adj.|korkak, dehşetli, korkunç
ticks|adv.|hemen, birazdan, birkaç dakikaya/saniyeye
widower|n.|dul, dul erkek
versailles|n.|versay, indiana eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri
draper|n.|tuhafiyeci, kumaşçı, manifaturacı
endanger|v.|tehlikeye atmak
dummies|expr.|yeni başlayanlar için, deney mankenleri
sook|n.|zararsız kimse
exploitation|n.|kötüye kullanma, sömürü, istismar etme
summary|n.|hülasa, özet
drool|v.|saçmalamak
plugs|n.|bujiler, ergiyebilir emniyet tapası olan tüpler, konik oturma yüzeyli kızdırma bujisi
piled|adj.|yığılı, en iyi, en pahalı
thank-you|n.|teşekkür
informal|adj.|resmi olmayan
stabler|v.|saplamak, bıçaklamak
authorize|v.|yetki vermek
promptly|adv.|acil olarak, acilen
dover|n.|dover, thomas, arkansas eyaletinde şehir, delaware eyaletinde şehir
faithfully|adv.|inanarak, bağlılıkla, içtenlikle
gemini|n.|ikizler, ikizler takımyıldızı, cevza
selfless|adj.|özgecil, diğerkam, kendini düşünmeyen
phelps|n.|new york eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
leech|n.|sülük
sentencing|v.|cümleleştirmek, ceza, hüküm
perverts|n.|sapık
sassy|adj.|küstah, işvebaz, utanmaz
vegetation|n.|vejetasyon, bitki örtüsü, bitkiler
nab|v.|yakalamak, tutmak, kapmak
lim|n.|lim dili
carton|v.|karton kutuya yerleştirmek, kartonlamak, karton levhalardan kutu yapmak
featuring|n.|beraber şarkı söyleme, düet, eşlik eden
scapegoat|n.|günah keçisi
burr|n.|çapak
provinces|n.|taşra
nd|n.|neodimin simgesi, north dakota
regroup|v.|tekrar grup oluşturmak, yeniden toplamak, yeniden gruplaşmak
heller|n.|cehennem
machete|n.|pala
micky|v.|birisinin içkisine gizlice ilaç koymak
rebellious|adj.|isyancı, asi
celebrations|n.|kutlamalar
reconcile|v.|uzlaştırmak, barıştırmak
technicians|n.|veri merkezi teknisyenleri, servis teknisyenleri birliği, uluslararası otomotiv teknisyenleri ağı
merits|n.|asıl kıymet, davanın esası, doğruluk
prosecutors|n.|savcılar, şahsi davalar, hakimler ve savcılar yüksek kurulu
eunuch|n.|haremağası, hadım, harem ağası
unrelated|adj.|akraba olmayan, ilişkisiz, bağlantısız
captivity|n.|esaret, tutsaklık
aroma|n.|hava, ıtır, güzel koku
barred|adj.|demirlenmiş, çizgili, demirli
crumbling|adj.|ufalanan, ufalanır, parçalanır
manila|n.|ambalaj kağıdı, manila, manila keneviri
snowball|n.|kartopu
armenian|n.|ermeniler, ermeni, ermenice
penetrated|v.|penetre olmak
atlas|n.|atlas
volts|n.|volt
evasive|adj.|kaçamaklı, baştan savmaya yarayan, cevap vermekten kaçan
piling|n.|kazık, istif, kümeleme
watkins|n.|kolorado eyaletinde şehir, minnesota eyaletinde şehir
cullen|n.|louisiana eyaletinde yerleşim yeri
commodity|n.|emtia
bimbo|n.|adam, sürtük, aptal fakat çekici kadın
riverside|n.|nehir kıyısı, nehir kenarı, ırmak kenarı
dismissal|n.|kovma, işten çıkarma
dada|n.|baba, süpürgelik
afternoons|adv.|öğleden sonraları
ballad|n.|koşuk, halk şarkısı, koşma
cheerleading|n.|amigoluk
haystack|n.|otluk, kuru ot yığını, noda
perv|n.|sapık
contamination|n.|pislik, kirletilme (mikrop/zehir vb ile), bulaşım
hye|n.|teksas eyaletinde şehir
blurry|adj.|bulanık
lowlife|n.|serseri, kopuk, ayak takımı
malaysia|n.|malezya
recreation|n.|rekreasyon
authors|n.|yazarlar
wrongs|n.|yanlışlar
regulars|adj.|müdavim, muntazam, düzenli
fascism|n.|faşizm, faşistlik, bindirmecilik
fridays|adv.|her cuma
scheming|n.|plan yapma, planlı, dolap çeviren
outgoing|adj.|giden, dışa dönük
penniless|adj.|meteliksiz
weaken|v.|güçsüzleştirmek, zayıflatmak
wrongly|adv.|hatalı bir şekilde, haksız yere, haksız bir şekilde
whirs|v.|pır pır etmek, pır diye uçmak (kuş), pır pır uçmak
sweeney|n.|motorlu polis, çevik kuvvet üyesi, atların omuz kaslarında oluşan atrofi
patiently|adv.|sabırla
birch|v.|değnekle vurmak, sopalamak, vurmak
incompetence|n.|ehliyetsizlik
spartan|adj.|sparta, spartalı
colombian|n.|kolombiyalı, kolombiya, kolombiya'ya özgü
kobe|n.|güney japonya'da bir liman şehri
prohibition|n.|yasak, yasaklama
gorillas|n.|goril
oakland|n.|florida eyaletinde şehir, illinois eyaletinde şehir, iowa eyaletinde şehir
requirement|n.|ihtiyaç, gereksinim
skateboard|v.|kaykaya binmek, kaykayda kaymak, kaykay yapmak
lew|n.|batı virginia eyaletinde yerleşim yeri
similarities|n.|benzerlikler
aviation|n.|havacılık
despised|v.|horlanmak, hakir görülmüş, küçümsenmiş
accessories|adj.|aksesuar, yedek parça, donatılar
perished|adj.|mahvolmuş
inferno|n.|cehennem gibi yer, cehennem, yangın felaketi
swoop|v.|saldırmak (kuş), üzerine çullanmak, üstüne çullanmak
linden|n.|ıhlamur, ıhlamur ağacı, alabama eyaletinde şehir
quill|v.|fitilli dikmek, makaraya sarmak, telek
diverse|adj.|çeşit çeşit, türlü, değişik
hawking|n.|seyyar satıcılık, ayak satıcılığı, boşboşculuk
payoff|n.|ücret ödeme, rüşvet, intikam
retaliation|n.|öç, mukabele, kısas
whorehouse|n.|umumhane, genelev, randevu evi
wigs|n.|kodamanlar, perukacı, kavga
relevance|n.|ilgi
novelist|n.|romancı, roman yazarı, yazar
carpets|n.|halılar
brenner|n.|metaplastik brenner tümörü
mambo|n.|mambo
shoplifting|n.|hırsızlık (dükkan, hırsızlık, dükkanlardan mal aşırma
amp|n.|amplifikatör, yükseltmek, uyarmak
suffocated|v.|bunalmak
soho|n.|londra'nın bir semti, newyork'un bir semti
grotesque|n.|grotesk figür, grotesk, garip
stewardess|n.|hostes (uçakta), bayan kamarot, hostes
cochran|n.|georgia eyaletinde şehir
jukebox|n.|müzik kutusu, para ile plak çalan otomatik pikap, paralı müzik kutusu
minors|n.|gayri reşit olanlar
detecting|adj.|saptayan
pillars|n.|imanın şartları, islam'ın şartları, islam'ın beş şartı
interfered|v.|müdahale etmek
establishing|n.|tesis, kurma, tesbit
atheist|n.|imansız, zındık, ateist
algae|n.|su yosunları, yosun, algler
uni|abrev.|üniversite, uni, üni
krista|n.|bir kadın ismi
haiti|n.|haiti
mouthful|n.|ağız dolusu, söylemesi zor kelime, lokma
algebra|n.|cebir
conor|n.|conor ve bruch hastalığı
energies|n.|avrupa yenilenebilir enerji birliği, özgül sinir enerjisi doktrini, özgül sinir enerjileri
pandora|n.|pandora, mercan balığı, ohio eyaletinde yerleşim yeri
collections|n.|müdevvenat, tahsilatlar, koleksiyonlar
punjab|n.|pencap
trojan|n.|truva, truvalı, cesur ve kararlı kimse
disadvantage|n.|dezavantaj
regan|n.|kuzey dakota eyaletinde şehir
nevermind|expr.|öyle ya da böyle hiç umurumda değil, (öyle ya da böyle) benim için fark etmez, her neyse
headless|adj.|kafasız
cortex|n.|kışır, kabuk, kısır
ganga|n.|ganga
valium|n.|ketamin
berserk|adj.|çılgın, çılgınca hareket eden, öfkeden deliye dönmüş
ritz|v.|caka satmak, havalı görünmek, olduğundan daha önemliymiş gibi görünmek
flack|v.|basın sözcülüğü yapmak, basın sözcüsü, basın danışmanı
transfers|n.|transferler
adamant|n.|çok sert efsanevi bir taş, elmas, katı
shortest|adj.|en kısa
distinctly|adv.|farklı olarak, farklı biçimde, açıkça
doorknob|n.|kapı topuzu, kapı tokmağı, kapı kolu
ruptured|v.|koparmak, kopmuş, rüptüre
indoor|n.|kapalı mekan, yapı içi, iç mekanlara uygun
millionaires|n.|milyoner
carts|expr.|valizler için bagaj taşıma arabası var mı?
cords|n.|fitilli kadife pantolon, file, basketbol filesi
celery|n.|kereviz
residency|n.|ikamet, ihtisas dönemi
conveniently|adv.|uygun olarak, rahatlıkla
ranking|n.|tasnif, başarı sırası, sıralama
foil|n.|folyo
responses|n.|yanıtlar
sweety|n.|sevgili, şekerleme, tatlım
jaffa|n.|yafa portakalı, yafa, kısır erkek
troublemaker|n.|sorun yaratan, ortalık karıştırıcı, baş belası
man-made|adj.|insan yapısı, yapay, insan yapımı
slum|n.|gecekondu mahallesi, gecekondu
palestinian|adj.|filistin
floss|v.|diş aralarını iplikle temizlemek, diş ipi ile temizlemek, incecik tüyler
hap|v.|olmak, tesadüf etmek, rastlamak
maw|n.|anne, ağız (korkunç bir yere açılan), boğaz
shushing|v.|susmak, susturmak
carnage|n.|kıyım, kırım, kan dökme
rapper|n.|kapı tokmağı, rapçi, rap müzik yapan kimse
bucky|n.|bir çizgi film karakteri
all-time|adj.|başlangıçtan şimdiye kadar, tüm zamanların en yüksek derecesi, rekor
poole|n.|ingiltere'de yerleşim yeri
vogue|n.|popülarite, rağbet, moda
troopers|n.|eyalet polisleri, eyalet polisi
squeaky|adj.|cızırtılı, tiz sesli, gıcırtılı
aditya|n.|kutsal ışık tanrıları
undertaker|n.|cenaze levazımatçısı, cenazeci
compromising|n.|sosyal uzlaşma
eureka|interj.|buldum!, evreka, avrupa araştırma koordinasyon ajansı
privy|n.|tuvalet, abd'de dışarda bulunan tuvalet, abdesthane
sacramento|n.|kaliforniya eyaletinde şehir, kentucky eyaletinde şehir
encryption|n.|şifreleme, kriptolama
hoist|v.|yukarı çekmek, yukarı çekme, kaldıraç
emphasis|n.|vurgu
moderate|adj.|ılıman, ılımlı
retro|adj.|geçmiş, retro
cincinnati|n.|iowa eyaletinde şehir, ohio eyaletinde şehir
mainframe|n.|ana çatı, ana çerçeve, ana sistem
sociopath|n.|antisosyal
elmo|n.|missouri eyaletinde şehir, teksas eyaletinde şehir, utah eyaletinde şehir
nighttime|n.|gece, gece vakti
namely|adv.|olarak adlandırılan, şöyle ki, yani
mads|adj.|kızgın, deli, çılgın
mistook|expr.|seni başka biriyle karıştırdım
cannabis|n.|kenevir
aims|v.|hedeflere ulaşmak, amaçlarına ulaşmak, amaçlar ve hedefler
spraying|n.|püskürtme, püskürtmeyle boyama
craziness|n.|zırtapozluk, zirzopluk, çılgınlık
stares|v.|dik dik bakmak
ballistic|adj.|balistik
fussing|n.|al gülüm ver gülüm
uncanny|adj.|tekin olmayan, olağanüstü, acayip
salaam|v.|selam vermek, selamlamak, selam
rainforest|n.|yağmur ormanı, tropikal orman
lunatics|expr.|ayaklar baş olmuş başlar ayak, deliler tımarhaneyi ele geçirmiş, ayaklar baş başlar ayak oldu
futures|n.|vadeli işlemler, vadeli sözleşmeler, gelecek işlemleri sözleşmesi
confederate|n.|suç ortağı
kelvin|n.|kelvin, ısı ölçeği
benito|n.|teksas eyaletinde şehir
hunts|n.|washington eyaletinde yerleşim yeri
ridicule|v.|alay etmek, dalga geçmek, alay
unethical|adj.|ahlak dışı, etik olmayan, etik dışı
flushes|n.|toplam temizleme
manson|n.|iowa eyaletinde şehir
monuments|n.|anıtlar, anıt heykeller, asar
crafty|adj.|kurnaz
cooled|adj.|soğutulmuş
jingles|n.|def, dile takılan reklam/tanıtım müzikleri, dile dolanan tanıtım müzikleri
chronicle|v.|tarih yazmak, kaydetmek, kroniğini çıkarmak
vested|adj.|giyinik, yerleşik, yerleşmiş
trademark|n.|marka
trampled|adj.|ezilmiş, ayaklar altına alınmış, çiğnenmiş
ku|n.|kansas üniversitesi
mules|n.|katır kervanı
piglet|n.|domuz yavrusu, yavru domuz, küçük domuz
cherished|adj.|sevgiyle anılmış, sevgiyle anılan, el üstünde tutulan
up-|v.|teklemek, temizlemek, ayağa kalkmak
band-aid|n.|bant, plaster, yara bandı
alba|n.|alba, missouri eyaletinde şehir, pensilvanya eyaletinde yerleşim yeri
persuasion|n.|ikna etme, inandırma, ikna
genocide|n.|soykırım
brilliance|n.|harikuladelik, deha, mükemmellik
toledo|n.|ispanya'da bir şehir, ispanya'da bir bölge, illinois eyaletinde yerleşim yeri
persecuted|adj.|zulme uğrayan, zulme uğramış, eziyet görmüş
tuesdays|adv.|her salı
inability|n.|yetersizlik, acizlik
quincy|n.|florida eyaletinde şehir, illinois eyaletinde şehir, massachusetts eyaletinde şehir
shalom|n.|şalom
toil|n.|zahmet
weiss|n.|çok köpüklü bira, curie-weiss yasası, weiss değişmezleri
alexandria|n.|iskenderiye, washington d.c. eyaletinde bir şehir, alabama eyaletinde şehir
epi|n.|epi
orthodox|adj.|ortodoks
custard|n.|krem karamele benzeyen bir tatlı, şeker ve yumurta ile hazırlanan bir sos, muhallebi
bosnia|n.|bosna, boşnak, boşnakça
wuss|n.|korkak, iradesi zayıf, kalabalık
detonation|n.|detonasyon, infilak, patlama
evicted|adj.|tahliye ettirilmiş
mailed|adj.|zırhlı, postalanmış
liberties|v.|laubalileşmek, saygısızlık etmek, cüret etmek
newport|n.|arkansas eyaletinde şehir, galler'de bölge, galler'de şehir
untrue|adj.|asılsız
berg|n.|aysberg, buz dağı, buzdağı
bland|adj.|şahsiyetsiz
heirs|n.|asıl mirasçılar, yasal varisler, yasal mirasçılar
praises|v.|göklere çıkarmak, övünmek, öve öve bitirememek
ancestral|adj.|geçmişe ait, atalardan kalma, atalara ilişkin
relish|v.|hoşuna gitmek, beğenmek, zevkle yemek
romero|n.|ballıbabagillerden tüylü aromatik bir bitki
toxin|n.|toksin, ağı, ağu
seating|n.|oturacak yer, oturtma, yerine oturtma
flattery|n.|yağcılık, dalkavukluk
unspeakable|adj.|söylenemez, çok kötü, kelimelerle anlatılmaz
reincarnation|n.|ruhun başka vücutla yeniden dünyaya gelmesi, yeniden yaşama dönme, reenkarnasyon
evolving|adj.|gelişmekte olan, gitgide gelişen, gitgide evrimleşen
muster|v.|geçmek, toplanmak, toplamak
cramps|n.|sıcak çarpması
characteristic|n.|özellik
schizophrenic|adj.|şizofreni ile ilgili, şizofrenik, şizofren
enjoyment|n.|zevk
bangalore|n.|bangalor torpidosu
britt|n.|iowa eyaletinde şehir
employers|n.|işverenin sorumluluğu sigortası, işverenin sorumluluğu, işverenin hakları
casings|n.|yakıt olarak kullanılan kuru sığır gübresi
painfully|adv.|acı vererek, acı acı
delays|n.|gecikmeler
overweight|v.|aşırı yüklemek, üstünlük, kilo fazlası
dreary|adj.|kasvetli
canceling|n.|feshetme, iptal, iptal etme
viola|n.|viyola, menekşe, illinois eyaletinde yerleşim yeri
behaves|v.|davranmak
tragically|adv.|feci şekilde
mindless|adj.|akılsız, dikkatsiz, sersem
poisons|n.|zehirler
unheard|adj.|duyulmamış
pyjamas|n.|pijama, gecelik
contractors|n.|müteahhitler, inşaat müteahhitleri, yükleniciler
cisco|n.|göl ringasi, illinois eyaletinde yerleşim yeri, teksas eyaletinde şehir
flashy|adj.|gösterişli
commend|v.|salık vermek, tevdi etmek, tavsiye etmek
cinch|v.|kolayca takmak, sımsıkı sarmak, çok kolay şey
presses|expr.|zaman yaklaşıyor, bırak her şeyi!, baskı makineleri
mater|n.|anne
plucked|adj.|koparılmış, kopmuş, yoluk
repeats|n.|tarih tekerrürden ibarettir, tarih kendini tekrar eder, tarih tekerrür eder
carriers|n.|nakliyeciler, taşıyıcı firma
gen|v.|bilgi vermek, bilgi, tam bilgi
omaha|n.|arkansas eyaletinde şehir, illinois eyaletinde yerleşim yeri, nebraska eyaletinde şehir
participants|n.|katılımcılar, hazırun, katılanlar
payne|n.|georgia eyaletinde şehir, ohio eyaletinde yerleşim yeri
yawning|n.|esneme, boşluk, genişleyen
conan|n.|erkek ismi
faraway|adj.|dalgın (bakış), dalgın, uzun
mackerel|n.|uskumru
flakes|n.|pullar, kılcal çatlaklıklar
meyers|n.|ohio eyaletinde yerleşim yeri
raincoat|n.|yağmurluk
thereby|adv.|öylelikle, böylece, o sebeple
sewn|adj.|dikili, dikilmiş
fyi|adv.|bilgilerinize, bilginize
nostalgia|n.|geçmişe özlem, hasret, vatan özlemi
descendant|n.|neslinden olan, torun, oğul
hopped|adj.|heyecanlı, içi içine sığmayan, sarhoş
handyman|n.|tamirat vb gibi işlerde becerikli olan kimse, hünerli işçi, elinden her iş gelen erkek
lagoon|n.|gölcük, denizkulağı, kıyı gölü
merciless|adj.|acımasız, merhametsiz, amansız
bouncer|n.|fedai
speck|v.|beneklemek, benek yapmak, benek
lifeless|adj.|cansız
westminster|n.|güney carolina eyaletinde şehir, ingiltere'de yerleşim yeri, ingiltere'de şehir
anarchist|adj.|anarşist
amish|n.|amiş, abd menonit protestanları tarikatı bölgesi, amişlerden
ophelia|n.|hamlet'in sevgilisi
mart|n.|çarşı, pazar, alışveriş merkezi
sympathize|v.|duygularını paylaşmak
croft|n.|küçük çiftlik, eve bitişik tarla
shiver|v.|titremek
pointy|adj.|noktalı, sivri
tod|n.|tilki, çalı, yün tartı birimi
fad|n.|heves, geçici moda
dwelling|n.|mesken, konut
decipher|v.|çözmek (şifre vb), şifreyi çözmek, yorumlamak
acre|n.|arazi, ingiliz dönümü, akre
animated|adj.|canlandırılan, anime edilmiş, neşeli
predictions|n.|tahminler, kehanetler
penetration|n.|nüfuz
tampering|n.|sıkıştırma, kurcalama, onaysız değişiklik
unsafe|adj.|güvenli olmayan, emin olmayan, güvenilmez
conned|v.|zokayı yutmak, para kaptırmak, dolandırılmak
contractions|n.|daralmalar
chaperone|v.|eşlik etmek, refakat etmek, refakatçi
clipped|adj.|kırpılmış, kırpık, kazıklanmış
ap|pref.|soyundan anlamı veren ön ek, -den farklı anlamı veren ön ek, turizmde tam pansiyon
singular|adj.|tekil
loathe|v.|tiksinmek
manipulative|adj.|elle hareket ettirmeye özgü, çıkarcı (kimse), el becerisine ait
outraged|adj.|sarsılmış, ihlal edilmiş, öfkeli
lurch|v.|sendelemek
ultimatum|n.|ültimatom, benimsetme bildirisi
delegate|n.|temsilci
pedophile|n.|pedofil, sübyancı
directive|n.|yönerge, direktif
reducing|n.|eksiltme, kısma, zayıflama
hurtful|adj.|acıtıcı, kırıcı, ağır
latino|n.|amerika'da yaşayan latin kökenli kimse
wick|n.|fitil
smoothie|n.|ikiyüzlü, iki yüzlü, karsanbaç
traumatized|adj.|sarsılmış, sarsıntıya uğramış, travma geçirmiş
short-term|adj.|kısa süreli, kısa dönemli, kısa vade
thermometer|n.|ısılölçer, ısıölçer, termometre
vines|v.|bağ aralamak
fugitives|n.|firari, kaçak
persona|n.|karakter, kişi, persona
channing|n.|bir kadın ismi
aargh|interj.|acı/iğrenme belirten çığlık, aaah
taping|n.|banda kaydetme, bağlama, kasete alma
arkansas|n.|arkansas, arkansas nehri, amerika'da eyalet
norfolk|n.|connecticut eyaletinde şehir, ingiltere'de bölge, massachusetts eyaletinde yerleşim yeri
congressional|adj.|kongresel, kongre ile ilgili, kongreye ait
haze|n.|pus
macau|n.|makau
bazaar|n.|çarşı, pazar
enabled|adj.|geçerli kılınmış, devreye sokulmuş, etkinlenmiş
deserts|n.|hak edilen şey, hak etme, hak ettiğini bulma
steiner|n.|steiner tünel deneyi
eloped|adj.|ailesinden gizlice evlenmiş, kaçmış, sevgilisi ile gizlice kaçmış
mutilated|adj.|sakatlanmış, kötü/ağır yaralanmış
walnut|n.|ceviz
excite|v.|heyecanlandırmak
pegasus|n.|kanatlıat (takımyıldızı), kanatlıat
swallowing|n.|yutma, yutkunma
plutonium|n.|plutonyum, plütonyum, plütonyum (simgesi pu)
doomsday|n.|kıyamet
moriarty|n.|new mexico eyaletinde yerleşim yeri
cycling|n.|periyodik işletme, bisikletle yapılan seyahat, bisikletçilik
one-man|adj.|tek kişilik, tek kişinin yaptığı
cougar|n.|puma, panter, genç erkek avcısı (orta yaş üzeri) kadın
spaniards|n.|ispanyalı, ispanyol
asparagus|n.|asparagus officinalis, kuşkonmaz
quagmire|n.|çıkmaz, batak, bataklık
thorpe|n.|köy, mezra
donnelly|n.|idaho eyaletinde şehir, minnesota eyaletinde şehir
sims|n.|illinois eyaletinde yerleşim yeri, north carolina eyaletinde yerleşim yeri
blasphemy|n.|dine küfretme, allah hakkında kötü konuşma, küfür
rents|n.|kiraları yükseltmek (bir bölgedeki), kiraları arttırmak (bir bölgedeki), kiralar ve taksitlere ilişkin alacaklılar
continually|adv.|devamlı, durmadan, boyuna
nu|n.|yunan alfabesinin 13. harfi, nunavut
newlyweds|n.|yeni evliler
huddle|v.|sürmek, yumaklanmak, bir araya sıkışmak
adolescent|adj.|ergen
crescent|n.|hilal
loch|n.|iskoçça, göl, körfez
saddest|adj.|en kederli
bleeds|n.|kenar taşması
turnout|n.|toplantı mevcudu, grev, kıyafet
nudity|n.|fakirlik, yokluk, çıplaklık
alternatives|n.|çareler, seçenekler, seçilebilecek yollar
intoxication|n.|sarhoşluk
doves|n.|kumru, güvercin
interstate|adj.|eyaletler arası, eyaletlerarası, devletlerarası
spokesman|n.|sözcü
itinerary|n.|çalışma programı, izlenecek yol, yol kılavuzu
slipper|n.|terlik
monsoon|n.|muson
unfold|v.|(katlanmış bir şeyi) açmak
appetizers|n.|mezeler, çerez, çerezlik
scripture|n.|kitabı mukaddes, yazı, kutsal kitap
relaxation|n.|dinlenme
pox|n.|frengi
pilar|adj.|saçlı, kıl, saç
rabid|adj.|kuduz
cackles|v.|laflamak, kıkır kıkır gülmek, kıkırdamak
kiddies|n.|ufaklık, yavrucak, bızdık
lovable|adj.|cana yakın, hoş, sevilen
termination|n.|son verme, son bulma
coy|adj.|mahcup, çekingen, utangaç
eyelids|n.|eksoz ağzı kapakları, göz kapakları
high-speed|adj.|çok hızlı, seri, hızlı
motorcycles|n.|motosikletler
insufficient|adj.|kıt, yetersiz
ceremonial|n.|ayin, seremoni, teşrifat
malt|n.|malt
leaned|adj.|eğilmiş, eğik
muller|n.|mablak, ağır taşlama çarkı, kum karıştırma makinesi
hectic|adj.|ateşli, telaşlı, yoğun
sudan|n.|sudan, sudan cumhuriyeti
owls|v.|dere kenarına çeşme yapmak/yaptırmak, dimyat'a giderken yanında pirinç götürmek, dimyat'a pirinç götürmek
displays|n.|kağıtsı görüntüler, ekranları tazelemek, düşük çözünürlüklü ekranlar
brewery|n.|bira fabrikası, biracılık, bira işletmesi
primal|adj.|asal, başlıca, ilkel
narrowed|adj.|daraltılmış, daralmış
bidder|n.|teklifçi, teklif veren, teklifi sunan
dipped|adj.|daldırılmış, aşırı eğik belkemiği olan
dormant|adj.|faal olmayan (yanardağ), uyku halinde, hareketsiz
asher|n.|oklahoma eyaletinde yerleşim yeri, oklahoma eyaletinde şehir
diagnostic|adj.|teşhis, tanısal, kontrol
galen|n.|new york eyaletinde yerleşim yeri
selfridge|n.|kuzey dakota eyaletinde şehir
breathtaking|adj.|soluk kesici, nefes kesici, çok heyecan verici
saber|v.|kılıçla kesmek, kılıçtan geçirmek, süvari kılıcı
specials|n.|özel durumlar
xo|n.|si dang, so dang, sedang
apt|adj.|eğilimli
winnings|n.|kazanç (para olarak), kazanç, kazanılan para
embracing|adj.|kapsayan, muhasır
louvre|n.|çatı penceresi, panjurlu pencere, hava klapesi
homosexuality|n.|homoseksüellik, eşcinsellik
solace|v.|azaltmak, bir üzüntüyü hafifletmek, avutmak
gladiator|n.|gladyatör
chapters|n.|bölümler
foxy|adj.|kızıl kahverengi, kurnaz, tilki gibi
whinnying|n.|kişneme
scuba|n.|skuba, oksijen tüplü dalma aygıtı, su ciğeri
deprive|v.|mahrum etmek, görevden almak, yoksun bırakmak
reckons|v.|tahmin etmek, tutmak, hesaplamak
fender|n.|çamurluk
mags|n.|alüminyum veya alaşım spor tekerlek
damsel|n.|küçük hanım, genç kız, genç ve bekar kız
cannibal|n.|yamyam, insan eti yiyen, yamyamlıkla ilgili
chilled|adj.|donmuş, soğutulmuş, soğut
milwaukee|n.|wisconsin eyaletinde şehir
supplying|n.|donatım, tedarik, sağlama
rightfully|adv.|haklı olarak, adil şekilde, doğrulukla
vandalism|n.|vandalizm, vandallık
shrinking|n.|rötre, daralma, çeker
robotic|adj.|robot gibi, robota ilişkin, robotlu
rolf|v.|kusmak
krauts|n.|bir çeşit lahana turşusu, alman
ragged|adj.|eski püskü, yırtık pırtık
hoyt|n.|kansas eyaletinde şehir
top-secret|adj.|çok gizli, çok gizli bilgilerden oluşan, çok gizli bilgilerle ilişkili
roma|n.|çingene, teksas eyaletinde şehir
surplus|n.|fazla, artakalan miktar, üretim fazlası
judo|n.|judo
doctrine|n.|doktrin
accessible|adj.|ulaşılabilir, erişilebilir
crazed|adj.|deliye dönmüş, çılgın, çıldırmış
purposely|adv.|kasti olarak, inadına, kasten
sleet|v.|sulusepken yağmak, sulu sepken yağmak, sulu sepken
yugoslavia|n.|yugoslavya
ostrich|n.|devekuşu, deve kuşu
no-no|adj.|uygunsuz, kabul edilemez, gaf
gunning|n.|tabancalı onarım
estelle|n.|kadın ismi
oversee|v.|oversaw - overseen, yönetmek, nezaret etmek
atrocities|n.|rum mezalimi
landmark|n.|sınır işareti, sınır taşı, işaret
holdings|n.|döviz rezervi menkul değerler gibi mevcutlar, varlıklar, mevcutlar
generators|n.|rastgele sayı üreteçleri, entegre güç kaynakları, yüksek voltaj jeneratörlerinin güvenliği
cheerio|interj.|hoşçakal, güle güle, güle güle!
unimaginable|adj.|düşünülemez, tasavvur edilemez, akıl almaz
stimulate|v.|uyarmak
incriminating|n.|suçlama, suçlayıcı
jap|n.|japon, japonya
clangs|v.|tınlatmak, çınlamak, tangırdamak
fanatic|n.|softa, hasta, tutucu kimse
surreal|adj.|gerçeküstü
sewage|n.|lağım suyu, kanalizasyon, lağım pisliği
dehydrated|adj.|susuz
acoustic|adj.|ses, akustik, yankılanım
ante|v.|para sürmek, para vermek, ödemek
afloat|adj.|su üstünde
genevieve|n.|kadın ismi
charisma|n.|ihsan, etkileyicilik, çekicilik
sadistic|adj.|sadist, sadistçe davranma, sadistik
iconic|adj.|ikonik, simgesel, timsali
enormously|adv.|sınırsızca, ölçülemez, aşırı derecede
constructive|adj.|yapıcı
elk|n.|kanada geyiği, kanadageyiği, avrupamusu
exhaling|n.|nefes verme
admissions|n.|okula kabul prosedürü, kayıt prosedürü
inexperienced|adj.|tecrübesiz, deneyimsiz, acemi
misjudged|v.|yanlış hüküm vermek, yanlış anlamak, yanlış fikir edinmek
mast|n.|direk
clubhouse|n.|lokal, kulüp binası, klüp binası
meade|n.|kansas eyaletinde şehir
illustrious|adj.|şanlı, tanınmış, şöhretli
prepping|n.|hazırlanma
declaring|n.|tanımlama, deklare etme, bildirme
nucleus|n.|öz, esas, cevher
whomever|pron.|her kimse, kim olursa olsun
councillor|n.|meclis üyesi, encümen üyesi, kurul üyesi
curls|n.|bukle, büklüm büklüm, kıvrım kıvrım
camden|n.|londra'da bir semt, alabama eyaletinde şehir, arkansas eyaletinde şehir
cowl|n.|kukuletalı cüppe, baca külahı, rahip cüppesi
townsend|n.|georgia eyaletinde şehir, montana eyaletinde şehir, tennessee eyaletinde yerleşim yeri
unsure|adj.|belirsizlik, güvensiz, emin olmayan
mag|n.|magazin, şarjör, cezaevi görevlisi
colton|n.|güney dakota eyaletinde şehir, kaliforniya eyaletinde şehir, new york eyaletinde yerleşim yeri
prentiss|n.|mississippi eyaletinde yerleşim yeri
henrietta|n.|kadın ismi, missouri eyaletinde şehir, new york eyaletinde yerleşim yeri
cures|n.|tedaviler yasası
autographs|v.|imza dağıtmak
borderline|n.|hudut, sınır, sınır boyu
provocation|n.|provokasyon, kışkırtma
perverse|adj.|huysuz, inatçı, kötü huylu
nutrients|n.|besleyici öğeler, besin tuzları, nütrient
occult|v.|gizlemek, bilinmez, büyücülükle ilgili
cadets|n.|askeri okul öğrencileri, makine stajyeri, erkek subay yetiştiren askeri okul
socket|n.|priz, soket
shawl|n.|şal
mio|n.|miyo
markham|n.|illinois eyaletinde şehir
framing|n.|iskelet (binaya ait), karkas, çerçeveler sistemi
junkyard|n.|araba mezarlığı, hurdalık, hurda deposu
cabot|n.|vermont eyaletinde yerleşim yeri
twitch|v.|seğirmek
influences|n.|grup etkileri, türk etkileri, afrika etkileri
browning|n.|kahverengileşme, browning tabanca, kahverengileştirme
upward|adj.|yukarıya dönük, yukarıya doğru giden, yükselen
cooped|v.|hapsolmak, mahsur kalmak
rooted|adj.|kökleşmiş, köklü
deserving|n.|istihkak, değerli şey, ödüle layık kişi
burps|n.|alkollü içki, bira
ludicrous|adj.|komik, gülünç, güldürücü
demonstrations|n.|gösteriler
biography|n.|yaşam öyküsü, biyografya, yaşamöyküsü
cy|n.|kıbrıs:cy
concludes|v.|sonuçlandırmak
retreating|adj.|geriye giden, gerileyen
satin|v.|parlatmak, pürüzsüzleştirmek, perdahlamak
bridesmaid|n.|nedime, gelinin nedimesi, geline eşlik eden kız
penicillin|n.|penisilin
murmur|v.|uğuldamak, söylenmek, çağlamak
martinis|n.|martini
deployment|n.|açılma, konuşlanma, plana göre yerleştirme
pence|n.|peni, wisconsin eyaletinde yerleşim yeri
predecessor|n.|aileden gelen, babadan gelme, öncel
canon|n.|kanun, dini nizam, kriter
underlying|adj.|altında yatan
avon|n.|connecticut eyaletinde şehir, güney dakota eyaletinde şehir, illinois eyaletinde yerleşim yeri
accessed|n.|erişilme tarihi, erişme tarihi, erişim tarihi
blowjob|n.|oral seks, sakso çekmek
ashton|n.|erkek ismi, bir soyadı, güney dakota eyaletinde şehir
transfusion|n.|kan nakli
blockade|v.|ablukaya almak, abluka, kuşatma
mischievous|adj.|yaramaz, afacan, haşarı
jiffy|n.|an, kısa zaman
repressed|adj.|bastırılmış
driscoll|n.|lucey-driscoll sendromu
kaplan|n.|louisiana eyaletinde şehir
showered|adj.|gökten yağarcasına, bol verilmiş, sağanak olarak yağmış
biff|v.|yumruklamak, vurmak, yumruk atmak
yarn|n.|uzun ve uydurma hikaye, iplik
astonished|adj.|şaşmış, şaşkın, afallaşmış
catchy|adj.|hoş ve kolaylıkla akılda kalan, kolayca akılda kalan, kolay anımsanan
titanium|n.|titanyum (simgesi ti), titanyum, titan
deserter|n.|asker kaçağı
dah|n.|telgrafik sinyal, radyotelgrafik sinyal, iki mors harfinden uzun olanı
documentation|n.|dokümantasyon
guineas|n.|newmarket'ta her yıl koşulan bir at yarışı
explored|adj.|keşfedilmiş
dunham|n.|dunham sınıflaması
playoffs|v.|playofflara yükselmek
faraday|n.|faraday, faradey
feisty|adj.|enerjik insan, cesur, girişken
explorers|n.|kaşifler
blanca|n.|kolorado eyaletinde şehir
imam|n.|imam
plainly|adv.|iyice, açıkça, gösterişsizce
theaters|n.|tiyatrolar
inadequate|adj.|yetersiz
caddy|v.|golf oyuncusuna yardım etmek, ayak işleri yapmak, golf takımlarını taşıyan yardımcı
astounding|adj.|hayret verici, sersemletici, şaşırtıcı
highlands|n.|kuzey iskoçya, dağlık bölge, yüksek yöre
hustler|n.|dümenci, aceleci, girişken tip
clans|n.|klanlar
paternity|n.|babalık
washer|n.|pul (rondela), çamaşır makinesi, yıkayıcı
borne|adj.|götürülmüş, doğmuş, taşınmış
gilles|n.|tourette bozukluğu/sendromu, tourette sendromu
disclosure|n.|ifşa, açma, ifşaat
negotiated|adj.|müzakere edilmiş, ciro edilmiş, devredilmiş
attracting|adj.|cazip, etkileyici, çekici
indigestion|n.|hazımsızlık
spur|n.|mahmuz
cabe|n.|britanya mimarlık ve yapılı çevre komisyonu
mayer|n.|minnesota eyaletinde şehir
schnapps|n.|damıtık alman içkisi
hagen|n.|hagen-poiseille denklemi
renegade|adj.|dönek
barley|n.|arpa
spiked|adj.|başaklı, çivili, içkili
complains|n.|nefes darlığı yakınmaları
repairing|n.|tamir, onarma, taşlama
cheapest|adj.|en ucuz
foxes|n.|tilkiler
barf|v.|kusmak, istifra etmek, kusarak çıkarmak
sox|n.|sülfür oksit
magicians|n.|sihirbazlar
inquest|n.|tahkikat, soruşturma (resmi), soruşturma
humidity|n.|rutubet
featured|adj.|özellikli, öne çıkan, özellik taşıyan
midwest|n.|ortabatı, wyoming eyaletinde yerleşim yeri
reptile|n.|sürüngen
priscilla|n.|kadın ismi
mythical|adj.|mitsi, mitlere özgü, hayali
paramount|adj.|ala, azam, heybetli
bitching|adj.|mükemmel
unpaid|adj.|ödenmemiş
neatly|adv.|temizce, tertemiz, temiz
abbie|n.|kadın ismi
volvo|n.|volvo değişken emme düzeni
hippo|n.|suaygırı, hipopotam
smacked|adj.|tokatlanmış
dodger|n.|hilekar, kaytarıcı, geçiştiren kimse
rigby|n.|idaho eyaletinde şehir
shepherds|n.|çoban
swamped|v.|batmak, gömülmek, aşırı miktarda olmak
hailey|n.|idaho eyaletinde şehir
frivolous|adj.|önemsiz, manasız, önemsizlik
copyright|n.|telif hakkı, telif
twenty-two|n.|yirmi ikili grup, serinin yirmi ikinci elemanı, yirmi iki tane olan
witnessing|n.|tanıklık, şahitlik, şahit olma
duly|adv.|layıkıyla, gereğince, hakkıyla
glide|v.|süzülmek
enclosed|adj.|çevrelenmiş, iliştirilmiş, kuşatılmış
nameless|adj.|adsız, isimsiz
rai|n.|khambu, nepal’de yaşayan etnik bir grup, rai
electrons|n.|elektronlar
constellation|n.|takımyıldız
howe|n.|oklahoma eyaletinde yerleşim yeri
inhabited|adj.|meskun, iskan edilmiş, mekün
sketchy|adj.|baştan savma, eksik, kabaca
implore|v.|yalvarmak
malice|n.|şer, fesat, garaz
no-good|n.|aşağılık kimse, işe yaramaz, alçak
agreements|n.|enerji satış garantisi anlaşmaları, lisans sözleşmeleri, dış lisans sözleşmeleri
deformed|adj.|deforme olmuş, şekli bozulmuş, biçimsiz
billing|n.|hesap çıkarma, faturalama, fatura
cornwall|n.|connecticut eyaletinde şehir, ingiltere'de bölge, new york eyaletinde yerleşim yeri
crusher|n.|vuruş, kırıcı, ezici
strains|n.|güçlükler, gerilmeler
orchids|n.|terlik orkide, venüs çarığı
outdated|adj.|günün şartlarına uymayan, miadını doldurmuş, köhne
reinforced|adj.|kuvvetlendirilmiş, desteklenmiş, takviye edilmiş
newark|n.|delaware eyaletinde şehir, illinois eyaletinde yerleşim yeri, kaliforniya eyaletinde şehir
trainers|n.|tenis ayakkabısı, spor ayakkabısı
provocative|adj.|provokatif, kışkırtıcı
hemingway|n.|güney carolina eyaletinde yerleşim yeri
ci|adj.|eski, ne iyi ne kötü (fransızca), cı hizmeti
complimentary|adj.|karşılıksız
bethlehem|n.|beytüllahim, batı virginia eyaletinde yerleşim yeri, connecticut eyaletinde şehir
suppressed|adj.|bastırılmış, baskılanmış, baskı altına alınmış
bordeaux|n.|bordo şarabı, bordo (fransız şehri)
goodies|n.|şekerleme, ödüller, performans donanımı
geeks|n.|eblek, moron, zeki ama anti-sosyal
festivities|n.|şenlik
checkers|n.|dama oyunu, dama kareleri, denetleyiciler
migration|n.|göç
brig|n.|askeri hapishane, iki direkli gemi, brik
bloodstream|n.|kan dolaşımı
distraught|adj.|çok sinirli, kendinden geçmiş, çılgın
grasshopper|n.|çekirge
hardships|n.|hayatın zorlukları, şehir hayatının zorlukları, karşılaşılan zorluk
tickling|n.|gıdıklama, gıdıklanan
desolate|adj.|tenha, ıssız
masturbation|n.|mastürbasyon
fiasco|n.|hezimet, fiyasko, başarısızlık
jem|n.|radikal bir terorist örgüt
kung-fu|n.|kung fu hareketleri, kung fu
sufficiently|adv.|yeteri kadar, yeterli miktarda, yeterince
hereditary|adj.|kalıtsal
psychologically|adv.|psikolojikman, psikolojik bakımdan, psikolojik olarak
orient|v.|doğuya doğru yapmak, yöneltmek, doğrultmak
gullible|adj.|kolay aldatılabilir, ahmak, kolayca aldatılabilen
falsely|adv.|sahte olarak, yanlış olarak, yalan bir şekilde
friar|n.|rahip, papaz, frer (erkeklere özgü bazı dini tarikatlarda)
underwood|n.|ağaç altında büyüyen çalılar, çalılık, ormanaltı bitkileri
abed|adv.|yatakta (eski söyleniş), yatağın üstünde, yatakta
gunpoint|n.|namlu yönü
realtor|n.|emlak komisyoncusu, emlakçı, emlak simsarı
attire|n.|kıyafet
clientele|n.|hastalar, müvekkiller, alıcılar
passages|n.|krank mili yağ kanalları, krank mili yağ delikleri, bronşiyollerin geniş uç bölümleri
dreaded|adj.|heybetli, haşmetli, korkunç
hatched|v.|dereyi görmeden paçaları sıvamak, ayıyı vurmadan postunu satmak, doğmamış çocuğa kaftan biçmek
hardened|adj.|pişkin, katır kutur, katılaşmış
innovative|adj.|yaratıcı, yenilikçi, yeniliklere açık
kroner|n.|danimarka ve norveç para birimi
patched|adj.|yamalanmış, yamalı
guidelines|n.|öneriler, ana esaslar, yönlendirici ilkeler
juices|n.|meyve suları, sebze suları, heyecanlandırmak
lockup|n.|tevkifhane, gözetimevi, tutukevi
slopes|n.|bayır, kır, yokuş
conclusive|adj.|nihai, son, kati
latex|n.|lateks
deathbed|n.|ölüm döşeği
collapses|v.|yığılmak, çökmek, çöküş
schoolgirl|n.|öğrenci, kız öğrenci
fuzz|v.|havlanmak, tüy gibi saç, aynasız
imposing|adj.|etkileyici, muhteşem, azametli
settings|n.|ayarlar
nationwide|adj.|bütün millete ait, tüm ülke çapında, yurt çapında
schoolteacher|n.|öğretmen
dealership|n.|bayilik
hearings|n.|komite oturumları
negotiator|n.|murahhas, delege, müzakereye memur kimse
drills|n.|matkap uçları
brightly|adv.|ışıl ışıl, canlı, parlak bir şekilde
dames|n.|dam asalet ünvanı, hanım
neutralize|v.|etkisiz duruma getirmek, nötr hale getirmek, etkisizleştirmek
ninjas|n.|ninja, hiv
manicure|n.|manikür
meditate|v.|tefekkür etmek, düşünceye dalmak, dalmak
eavesdropping|n.|gizli dinleme, gizlice dinleme
viewer|n.|izleyici, seyirci
mormon|n.|mormon
wake-up|v.|uyanmak
dipping|n.|daldırma, dalma, batırma
splits|n.|ağız çatlakları (cam)
muzzle|v.|çanına ot tıkamak, ağızlık takmak, susturmak
redneck|n.|cahil, okumamış, beyaz taşralı
seatbelt|n.|emniyet kemeri, koltuk kemeri
richter|n.|richter ölçeği, richter ölçeğine göre, rikter ölçeğine göre
atone|v.|telafi etmek
envoy|n.|elçi
sentiments|n.|ahlaki duygular teorisi
poorer|adj.|yoksul, daha yoksul
tia|n.|geçici iskemik atak, karayipler'e özgü kahve aromalı bir likör, tijuana
sweeps|n.|süprüntü, döküntü, çer çöp
forgives|expr.|sadece tanrı affeder
upside-down|adj.|altüst, baş aşağı duran, tepetaklak duran
improper|adj.|uygun olmayan
niagara|n.|şiddetli yağan, taşkın veya sel halinde şey, erie gölü'nden ontario gölü'ne akan nehir, kanada'da bir şelale
highland|n.|dağlık arazi, dağlık, yayla
hardworking|adj.|çalışkan
enlist|v.|kaydolmak, (destek) sağlamak, askere yazmak
wilcox|n.|nebraska eyaletinde yerleşim yeri
medically|adv.|tıbbi olarak, tıbben
chittering|v.|cıvıldamak
pappy|adj.|sulu
scarred|adj.|yaralı, yara izli, berelenmiş
claps|n.|kemer tokası, kopça, toka
outcast|n.|kimsesiz, serseri, parya
faucet|n.|musluk
prepares|v.|hazırlamak
taboo|n.|tabu
weaponry|n.|silahlanma ilmi, silahlar
consensus|n.|fikir birliği
breathed|v.|alınan havayı geri vermek, derin bir oh çektim, rahatladım
maneuvers|n.|harekat
archaeologist|n.|kazıbilimci, arkeolog
tolls|n.|kanaldan geçiş vergisi, müruriye, çanlar kimin için çalıyor
gobble|v.|acele yemek, yutmak, silip süpürmek
gibbering|v.|konuşmaya benzeyen anlamsız sesler çıkarmak, hızlı ve anlaşılmaz konuşmak, anlaşılmaz konuşma
maud|n.|oklahoma eyaletinde şehir
darby|n.|montana eyaletinde yerleşim yeri, pensilvanya eyaletinde yerleşim yeri
widespread|adj.|yaygın
scraped|adj.|kazınmış, sıyrılmış
boutique|n.|butik, butik mağaza
quake|n.|sarsıntı, deprem
ignite|v.|ateşlemek, tutuşmak, tutuşturmak
provider|n.|karşılayan kimse, bakan kimse, aile geçindiren kimse
sprinkle|v.|serpmek
serbia|n.|sırpça, sırbistan
contradict|v.|çelişmek
realities|v.|gerçekleri yansıtmak, bu gerçekler göz önüne alındığında, bu gerçekler ışığında
shaping|n.|şekillendirme, şekil verme, betimlendirme
powdered|adj.|toz, toz haline getirilmiş, tozlandırılmış
indestructible|adj.|bozulamaz, yıkılmaz, yok edilemez
electrocuted|adj.|elektrikle idam edilmiş
silverware|n.|gümüş çatal bıçak takımı
disorders|n.|çocuklarda davranış bozuklukları, akıl bozuklukları, akıl hastalıkları
albany|n.|newyork eyaleti başkenti, illinois eyaletinde yerleşim yeri, indiana eyaletinde yerleşim yeri
armory|n.|cephanelik, tüfekhane, silahhane
delegates|n.|temsilciler
pathology|n.|sayrılıkbilim, hastalıklar bilimi, hastalık bilimi
inspires|expr.|müziğiniziz bana ilham veriyor, müziğiniz bana ilham veriyor
poked|expr.|onun omzunu dürttüm
cyclops|n.|siklop, tepegöz
floated|n.|flotorlu jiroskop
intrigue|v.|entrika çevirmek, ilgisini çekmek, gizlice sevişmek
auditorium|n.|dinleme salonu, oditoryum, salon
kashmir|n.|kaşmir, keşmir
inspirational|adj.|ilham verici, esinleyici, esinlendirici
doodle|v.|dalgın dalgın şekiller çizmek, rastgele şekiller çizmek, karalamak
raisins|n.|kuru üzüm
sibling|n.|kardeş
emery|n.|zımpara
anomalies|n.|anormallikler, aykırılıklar, kural dışı durumlar
honorary|adj.|onur, fahri, onursal
concession|n.|imtiyaz, taviz, ödün
midway|adv.|yarı yolda
reload|v.|yeniden yüklemek, (silahı) yeniden doldurmak, tekrar yükle
sweaters|n.|süveter
dormitory|n.|öğrenci yurdu
accelerated|adj.|hızlanmış, hızlandırılmış, hızlı
fluke|n.|talih, ok damağı, şans eseri
dwarves|n.|cüce
nutrition|n.|beslenme
kendra|n.|kadın ismi, bir kadın ismi
warlock|n.|falcı, sihirbaz, büyücü
exploiting|n.|kullanma
bloated|adj.|kabarık, şişmiş, şişkin
proclaim|v.|açığa vurmak, duyurmak, bildirmek
middleton|n.|idaho eyaletinde şehir, ingiltere'de yerleşim yeri, massachusetts eyaletinde yerleşim yeri
choreography|n.|bale eserleri yazma sanatı, koregrafi, bale düzeni
patriotism|n.|yurtseverlik, vatanperverlik, vatanseverlik
sash|n.|kuşak
detached|adj.|bağımsız, objektif, ayrık
fest|n.|bahar şenliği, geleneksel şenlik, tarım şenliği
intensely|adv.|şiddetle, yoğun bir şekilde, şiddetli biçimde
raced|v.|yarışmak, yarış, ırk
sprint|v.|hızlı koşmak, hızla koşmak, koşuşturmak
endorsement|n.|ciro
gage|v.|rehin vermek
carlisle|n.|güney carolina eyaletinde yerleşim yeri, iowa eyaletinde şehir, ingiltere'de yerleşim yeri
hobo|n.|baldırı çıplak, berduş, aylak
gauntlet|v.|kırbaçlayarak işkence etmek, düelloya davet için yere atılan eldiven, zırh eldiveni
crowbar|n.|manivela kolu, kol demiri, kaldıraç
progressing|adj.|yürüyen, devam eden, gelişen
groin|n.|kasık
prudence|n.|ihtiyat, tutumluluk, akıl
inseparable|adj.|ayrılamaz, ayrılmaz
chopsticks|n.|çubuk, çinlilerin yemekte kullandığı çubuk, çin yemeği çubukları
guthrie|n.|kentucky eyaletinde şehir, oklahoma eyaletinde şehir
foo|n.|gerçek komut yerine kullanılan geçici değer
saxophone|n.|saksafon, saksofon
fiat|n.|emir, resmi izin, yetki
drains|n.|kanalizasyon şebekesi
thrusters|n.|girişken kimse, fırsatçı kimse, itici
tink|v.|tink etmek, çın etmek, çınlama
visibility|n.|görme imkanı, görüş netliği, görünebilme
passionately|adv.|hararetle, tutkuyla
tiresome|adj.|yorucu
complexity|n.|karmaşa
homicidal|adj.|öldürücü, adam öldürmeye meyilli, cinayete ait
succeeds||başarı başarıyı getirir, başarı başarıyı çeker
rom|n.|çingene, salt okunur bellek sob
scolding|n.|azar, azarlama
indicted|v.|hakkında soruşturma açılmak
prix|n.|ödül (fr)
alexa|n.|kadın ismi
uninvited|adj.|davetsiz
insider|n.|içeriden biri, içerideki, iç yüzünü bilen kimse
bondage|n.|esaret, serflik, esirlik
chao|n.|çeneyi kaplayan etli kısım, yüzün ön kısmı, vietnam'a özgü bir tür pirinç lapası
indifference|n.|ilgisizlik
tum|n.|davul sesi, mide, (yün) taramak
slang|n.|argo
tending|n.|yönelme, bakım, yardım
compton|n.|illinois eyaletinde yerleşim yeri, kaliforniya eyaletinde şehir
gunn|n.|gunn diyodu, gunn etkisi, missouri eyaletinde yerleşim yeri
campaigns|n.|kampanyalar
resistant|adj.|dirençli
urged|n.|dürtü
reacts|v.|tepki göstermek
hard-working|adj.|çalışkan, hamarat, gayretkeş
snag|n.|budak
fidelity|n.|vefa, sadakat
rattled|adj.|şaşırmış, takırdayan, rahatı bozulmuş
stalls|n.|parter, koltuk
quickest|adj.|en hızlı
copycat|v.|taklit etmek, taklitçi, kopyacı
wilde|n.|afrika aslan kulağı
damnation|n.|lanet
burma|n.|birmanya, burma
cashed|adj.|parası ödenmiş, ödemesi yapılmış, yorgun
dodging|n.|hile ile kurtulma
canopy|v.|örtmek, kaplamak, gölgelemek
ridley|n.|pensilvanya eyaletinde yerleşim yeri, gündüz yuvalayan deniz kaplumbağası
ogden|n.|illinois eyaletinde yerleşim yeri, iowa eyaletinde şehir, kansas eyaletinde şehir
goof|n.|gaf
twister|n.|hilekar, şaşırtıcı şey, büken kimse
seriousness|n.|ciddiyet, ciddilik
toothless|adj.|dişsiz
reckoned|v.|öneme sahip olmak, önemli olmak, hafife alınmamak
retching|n.|öğürme
immensely|adv.|son derece, gayet, çok fazla
overlooking|n.|göz yumma, nazır, -e karşı
airway|n.|hava bacası, havayolu, hava galerisi
lm|n.|is-lm eğrisi, lm doğrusu, lm duyurusu
rickshaw|n.|puspus, çekçek, rikşov
propulsion|n.|sevk, yürütme, ileriye doğru sürme
elsie|n.|kadın ismi, nebraska eyaletinde yerleşim yeri
butchered|n.|kasap
orbiting|n.|düşük yer yörüngeli uydu, alçak yer yörünge uydusu, kutupsal yörüngeli uydular
herds|n.|aslanlar sürüler halinde yaşar
comprehensive|adj.|etraflı, kapsamlı
reckoning|n.|sanma, tahmin etme, hesap pusulası
shelton|n.|connecticut eyaletinde şehir, nebraska eyaletinde yerleşim yeri, washington eyaletinde şehir
israelis|n.|israilli, israil, israil'e özgü
thursdays|n.|her perşembe
fabian|adj.|tedbirli, ihtiyatlı, ağır
journeys|n.|seyahatler
confiscate|v.|el koymak (mala), haciz koymak, zaptetmek
coworkers|n.|iş arkadaşları
checkup|n.|inceleme, genel sağlık kontrolü, çekap
wad|v.|pamukla doldurmak, tıkamak, tomar haline getirmek
aeroplane|n.|uçak
innocents|n.|zararsız geçiş hakkı
endeavor|v.|çabalamak
shootings|n.|ateş etme
daybreak|v.|kabul etmek, tanyeri, tan vakti
mandate|v.|manda altına almak, manda
estimates|n.|hesaplamalar, hesaplar, ölçüler
inflict|v.|çarptırmak, vurmak, vermek
drapes|n.|perde
bellamy|n.|alabama eyaletinde şehir
wolverine|n.|porsuk, x-men çizgi romanından bir kurgusal karakter, ayı sansarı
socrates|n.|sokrates
subspace|n.|altuzay, alt uzay
notebooks|n.|defter, not defteri
unrest|n.|huzursuzluk
lala|n.|tuvalet
cram|v.|tıka basa yemek, tıkıştırmak, tıkınmak
salts|n.|tuzlar
infinitely|adv.|çok, son derece, son derecede
exemplary|adj.|ibretlik, örnek niteliğinde olan
bearings|n.|yatak, yön, yön tayini
replicate|v.|kopyasını yapmak, aynını yapmak
perfected|adj.|tamamlanmış, tamamen yapılmış, tamamen yerine getirilmiş
olympus|n.|gök, cennet, olimpos
baboon|n.|babun
reproach|v.|serzenişte bulunmak, sitem etmek, sitem
completing|n.|tamamlama, itmam, ikmal etme
medusa|n.|medüz, denizanası
sewed|adj.|dikişli
teased|adj.|sataşılan, hoş bir heyecan hisseden, içi gıcıklanan
adversary|n.|düşman, hasım
captions|n.|başlıklar
stitched|adj.|dikişli
abruptly|adv.|birdenbire, ansızın, aniden
stacks|n.|kütüphanedeki kitaplıklar, öfkeyi bağırarak göstermek, iletişim kuralları yığınları
sioux|n.|siular
rapes|v.|ırzına geçmek, tecavüz etmek, ırza geçme
ether|n.|eter
hoodie|n.|rap tarzı giyinen kimse, kapüşon, kapüşonlu svetşört
namaste|n.|hint geleneğine özgü bir selamlama şekli, namaste
extradition|n.|suçluların iadesi, suçlunun ülkesine iadesi, suçluların geri verilmesi
ange|n.|kambiyo iskontosu
cambodia|n.|kamboçya
clicked|expr.|sonunda taşlar yerine oturdu, çok iyi anlaştık
tallest|adj.|en uzun
unison|n.|birlik, ahenk, uygunluk
ion|n.|iyon, yükün
bozo|n.|adam, mankafa, aptal
undertaking|n.|taahhüt
relating|n.|ilişki kurma, ilişkili, ilişki kurarak
enrolled|adj.|kayıtlı
sprouts|n.|frenklahanası, brüksellahanası, brüksel lahanası
secretaries|n.|sekreterler
projected|adj.|öne sürülen, planlanmış, öngörülmüş
turkeys|v.|bile bile lades demek, bile bile lades dercesine, bile bile lades deme
irwin|n.|illinois eyaletinde yerleşim yeri, iowa eyaletinde şehir, idaho eyaletinde şehir
fink|n.|ispiyoncu, muhbir, (birini) ispiyonlamaya gitmek
good-for-nothing|n.|külhanbeyi, yaramaz, serseri
sipping|v.|yudumlamak, yudum
africans|n.|araplaşmış yerli afrikalılar
macarthur|n.|macarthur-forrest süreci, macarthur-forrest siyanür süreci
twenty-one|n.|yirmi bir oyunu, yirmi birli grup, serinin yirmi birinci elemanı
visionary|adj.|hayali
borden|n.|indiana eyaletinde yerleşim yeri
talkative|adj.|geveze, çenebaz, konuşkan
alyssa|n.|iowa eyaletinde şehir
kemp|n.|kaba kıl, yünde kalın kıl, yünde kaim kıl
jeffries|n.|jeffries çarpanı, jeffries yöntemi
unkind|adj.|nezaketsiz
pegged|v.|birinin ne mal olduğunu bilmek, birinin içini bilmek, ciğerini bilmek
conservation|n.|koruma, muhafaza
veto|v.|reddetmek, veto etmek, yasak
blondes|adj.|sarışın
heartfelt|adj.|içten, içten gelen, gönülden
outlook|n.|görünüm
wrinkled|adj.|kırış kırış, kırışık, buruşuk
valeria|n.|iowa eyaletinde şehir
teleport|v.|ışınlamak
interrogating|n.|sorgulama
diabolical|adj.|şeytani
breather|n.|güçlükle nefes alan kimse, mola, ara
desks|n.|sınıf sıraları, sıraları temiz tutun, ülke masaları dairesi
thirty-five|n.|otuz beş birim, otuz beşli grup, otuz beş adet
eyebrow|n.|kaş
tut|v.|söylenmek, tüh, beysbola benzeyen top oyunu
sightseeing|n.|gezme, gezi, gezip görme
unwilling|adj.|isteksiz, gönülsüz
profoundly|adv.|derinlemesine, son derece, derinden
dearie|n.|biricik
nearing|n.|çevre, yaklaşma
franks|n.|frenk, içten, samimi
rashid|n.|raşid, mısır'ın kuzeyinde şehir
auditioning|n.|ses testi yapma
dyed|adj.|boya, boyalı, boyama
pharmaceuticals|n.|farmasötikler, tıbbi ürünler, tıbbi ilaçlar
cantonese|n.|güney çin dili, kanton lehçesi, kantonca
martina|n.|kadın ismi
clarkson|n.|kentucky eyaletinde şehir, nebraska eyaletinde şehir, new york eyaletinde yerleşim yeri
outright|adj.|karşılıksız (yardım/bağış vb), karşılıksız, sınırsız
ito|n.|istanbul ticaret odası, ito hücreler
coincidences|n.|aşk rastlantıları sever, aşk tesadüfleri sever, rastlantılara inanmam
downside|n.|dezavantaj, olumsuz taraf, zarar olasılığı gösteren
oats|n.|yulaf
administered|adj.|yönetilen, yönetilmiş, idare edilmiş
downward|adj.|düşen, azalan, aşağıya doğru olan
graduates|n.|yüksekokul mezunları, üniversite mezunu olmayanlar, kolej mezunu olmayan kadınlar
palate|n.|damak
jihad|n.|cihat, cihad
emmet|n.|karınca, güney dakota eyaletinde yerleşim yeri, nebraska eyaletinde yerleşim yeri
martians|n.|merihli, marslı
nasal|adj.|buruna ait
enduring|adj.|dayanıklı
winged|adj.|kanatlı
thrashing|n.|dövme, hezimet, yenilgi
dumber|adj.|daha sessiz, daha sersem
faggots|n.|demet, çalı çırpı, homoseksüel erkek
bernice|n.|kadın ismi, louisiana eyaletinde yerleşim yeri, oklahoma eyaletinde yerleşim yeri
vibration|n.|titreşim
musketeers|n.|üç silahşörler
tumour|n.|tümör
stature|n.|boy bos, endam
petrified|adj.|taşlaşmış, taş kesilmiş, kanı donmuş
hiss|v.|beğenmeyerek tıslamak, alaylı olarak tıslamak, ıslık çalarak yuhalamak
baht|n.|tayland'ın para birimi
rematch|v.|yeniden eşleştirmek, yeniden maç yaptırmak, yeniden maç yapmak
lakshmi|n.|hinduizm'de şans ve güzellik tanrıçası
lightweight|adj.|hafif
rah|interj.|yaşasın, oley, yaşa
eunice|n.|kadın ismi, louisiana eyaletinde şehir, new mexico eyaletinde yerleşim yeri
attentive|adj.|özenli, dikkatli
dunbar|n.|batı virginia eyaletinde şehir, nebraska eyaletinde yerleşim yeri, pensilvanya eyaletinde yerleşim yeri
negatives|adj.|negatif, olumsuz
ge|n.|germanyumun simgesi
fates|n.|kader
equity|n.|hak, eşitlik, eşitlikçilik
ringer|n.|çıngıraklı araba, hile ile yarışa giren yarışmacı, çanlı araba
brooch|n.|broş
delinquent|n.|ihmalcilik, suç işleyen (çocuk), çocuk suçlu
schizophrenia|n.|şizofreni
bangles|n.|halhal, bilezik, halka
sculptor|n.|oymacı, heykelci, yontucu
netherlands|n.|felemenk, hollanda
inca|n.|inka
ado|n.|insanı yoran hazırlıklar, gürültü, koşuşmalar
odessa|n.|odesa, minnesota eyaletinde şehir, missouri eyaletinde şehir
neurological|adj.|sinirbilime ait
slums|n.|kenar mahalleler
comets|n.|kuyrukluyıldız, kuyruklu yıldız
strife|n.|bozuşma, kavga, mücadele
coordinator|n.|eşgüdümcü, koordinatör, eşgüdümleyici
chokes|n.|nefes darlığı, tıkanma
guerrilla|n.|çeteci, çete, gerillacı
charismatic|n.|karizmatik kimse, sempati uyandıran, etkileyici
garret|n.|çatı arası, tavan arası, tavanarasındaki oda
startling|n.|korkutma, şaşırtıcı, ürkütücü
historically|adv.|tarihçe, tarihsel olarak, tarihe göre
funnel|n.|huni
curator|n.|galeri müdürü, sorumlu, müdür (kütüphane, müze vb)
improvements|n.|ıslahat
campfire|n.|kamp ateşi, asker ya da izcilerin bir araya gelmesi
castillo|n.|castillo, trabucco ve balze sendromu
himalayas|n.|himalaya
storeroom|n.|depo, kiler
tulip|n.|lale, şekli laleyi andıran şarap bardağı, lale soğanı
looting|n.|yağma
pinball|n.|tilt oyunu, pinball
decaf|n.|kafeinsiz kahve
marshmallow|n.|hatmi, lokuma benzer şekerleme, korkak kimse
guitars|n.|gitarist, kitara, gitar
sharpen|v.|keskinleştirmek
refreshments|n.|içecek, yiyecek, yiyecek ve içecek
tensions|n.|gerginlikler
mckinley|n.|minnesota eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
leaping|n.|üzerinden atlama, sekme, atlama
reconciliation|n.|uzlaştırma, barıştırma, uzlaşma
greenwich|n.|greenwich, connecticut eyaletinde şehir, new jersey eyaletinde yerleşim yeri
waterloo|n.|alabama eyaletinde şehir, georgia eyaletinde şehir, güney carolina eyaletinde yerleşim yeri
isaiah|n.|isaiah peygamber, (incil'de) yeşaya
idols|v.|putlara tapmak, putlara tapınmak, putperest
induce|v.|ikna etmek, neden olmak
cosmetic|n.|makyaj malzemesi, bakım ürünü, güzellik
grooming|n.|tımar, tımarlama, hazırlık
rejecting|n.|geri çevirme, reddediliyor
cortez|n.|kolorado eyaletinde şehir
schooling|n.|terbiye, tedrisat, eğitme
wasteland|n.|çöl, beyaban, boş arazi
blueprint|v.|planı mavi kağıda çekmek, tasarlamak, mavi kopya çıkarmak
biz|n.|iş, business'ın kısaltması, meşgul
smokey|n.|polis memuru
nostalgic|adj.|özlem dolu, geçmişe özlem belirten, nostaljik
leprechaun|n.|cüce cin, cüce, irlanda cücesi
zulu|n.|zulu dili, zulu kabilesi, zulu
dinging|n.|kaba tek kat sıva, dövme
hoof|n.|toynak
timetable|v.|zaman çizelgesine göre dahil etmek, zaman çizelgesine göre düzenlemek, zaman çizelgesi hazırlamak
transmissions|n.|konuşma harici iletimler
analogy|n.|mukayese, andırış, karşılaştırma
stomping|adj.|canlı, enerjik, kıpır kıpır
judgmental|adj.|yargılayıcı, yargısal
bagels|n.|simit
levine|n.|nöroakantositoz
meowing|n.|miyavlama
wallets|n.|cüzdan
nightgown|n.|gecelik kadın giysisi, kadın geceliği, gecelik
demolished|adj.|yıkık, yıkılmış, yıkmış
lafayette|n.|alabama eyaletinde şehir, indiana eyaletinde şehir, kaliforniya eyaletinde şehir
electron|n.|elektron, eksicik, atomun negatif yüklü parçacığı
cones|n.|memeler, göğüsler, konik geçme
calculation|n.|hesaplama, hesap
dreamy|adj.|hayalci
vigilant|adj.|açıkgöz, uyanık
suppliers|n.|üreticiler, bir mal veya hizmetin potansiyel satıcıları, malzeme verenler
vogel|n.|değişik bauer-vogel süreci, vogel-fulcher bağıntısı
companionship|n.|yoldaşlık
dangling|n.|asılı durup sallanma, asılıp sallanma
pic|n.|sinema filmi, resim, azami yük
rushes|n.|saz, günlük çekim
paired|adj.|çifte, çiftleşmiş, eşleştirilmiş
withholding|n.|tutma, alıkoyma, kısıtlama
clones|n.|irlanda'da yerleşim yeri
burnett|n.|wisconsin eyaletinde yerleşim yeri
bolivia|n.|bolivya, north carolina eyaletinde yerleşim yeri
commitments|n.|taahhütler
airs|n.|fiyaka
demented|adj.|bunak, karasevdalı, kaçık
apprehend|v.|kavramak
learner|n.|acemi, öğrenici, öğrenci
minions|n.|dalkavuk, peyk, emir altındaki kimse
toro|n.|boğa, erkek sığır
scenarios|n.|senaryolar
fda|n.|fda onaylı endikasyonlar
overreacted|v.|aşırı tepki göstermek
contradiction|n.|tezat, aykırılık, çelişki
gregg|n.|gregg sendromu
vat|v.|tekneye koymak, fıçılamak, fıçıya koymak
mardi|n.|karnavalın sonu
horizons|v.|yeni ufuklar açmak, ufukların kaynaşması, yeni ufuklar
rev|v.|devrini yükseltmek, hızlandırmak, hız vermek
puny|adj.|cılız
nominee|n.|vekil, namzet, temsilci
insolence|n.|küstahlık
wartime|n.|savaş, savaş zamanı, harp zamanı
fm|n.|sıklık kiplenimi, frekans modülasyonu
shing|n.|montaj kiti tamponu ısıtıcısı, sh yağ sınıfı, sh-dalgası
grapefruit|n.|greyfurt
deodorant|n.|deodorant, koku giderici, koku gideren
concede|v.|kabullenmek, teslim etmek, bırakmak
homosexuals|adj.|homoseksüel
hierarchy|n.|hiyerarşi
remnants|n.|bakaya, döküntü, kalan
detectors|n.|dedektörler
sever|v.|paylaştırmak, ayrılmak, ayırmak
hendricks|n.|batı virginia eyaletinde yerleşim yeri, minnesota eyaletinde şehir
nachos|n.|mısırdan yapılan meksika mezesi
munitions|n.|cephane, savaş gereçleri, harp malzemesi
trailing|adj.|izleyen, arka fren pabucu, izleme
rochelle|n.|georgia eyaletinde şehir, illinois eyaletinde şehir
folds|n.|enlemesine tomruk çatlakları
attitudes|n.|tutumlar
twain|n.|iki kişi, iki, ikili
stomachs|n.|mide
emerges|v.|ortaya çıkmak, meydana çıkmak
chilli|n.|kırmızı biber, biber, şili
hotline|n.|anında yardım hattı, acil hat, yardım hattı
dries|v.|kurulamak, kurutmak, kurumak
acceleration|n.|ivme, hızlandırma
gruber|n.|meckel-gruber sendromu
homicides|n.|cinayetler coğrafyası, kadın cinayetleri
scrubbed|adj.|ovalanmış
seduction|n.|baştan çıkarma, ayartı, baştan çıkarıcılık
trait|n.|haslet, hususiyet, kişisel özellik
ezekiel|n.|ezekiel
translating|n.|tercüme
chemotherapy|n.|kimya tedavisi, kanser tedavisi, kemoterapi
hazardous|adj.|tehlikeli, riskli
hackers|n.|bilgisayar korsanı, çökertici, korsan
pancho|n.|yağmurluk
asteroids|n.|asteroit, küçük gezegen, yıldız şekilli
defines|v.|tanımlamak
meatloaf|n.|köfte, et dilimi, rulo köfte
nephews|n.|yeğenler
boobies|n.|göğüsler, memeler
collide|v.|çarpışmak
salaries|n.|maaşlar
porky|adj.|şişko, küp gibi, semiz
sheltered|adj.|muhafazalı, mahfuz, korunmuş
revoked|adj.|yürürlükten kalkan, iptal edildi
cinematography|n.|sinema fotoğrafçılığı, sinema, sinemacılık
variation|n.|varyasyon
maia|n.|kadın ismi, yunan mitolojisinde tanrıça
railways|n.|demiryolu taşımacılığı
milkshake|n.|şurupla karıştırılıp çalkalanmış süt
undertake|v.|yüklenmek, girişmek, üstlenmek
fergus|n.|irlanda'da yerleşim yeri, minnesota eyaletinde şehir
stellar|n.|yıldızlarla ilgili, yıldızlara ait, yıldız gibi
dud|n.|karşılıksız çek, başarısızlık, fiyasko
abode|n.|ikamet etme (bir yerde), oturma, ikamet
isles|n.|ingiliz adaları, britanya adaları, aegadian adaları
elmer|n.|missouri eyaletinde şehir, oklahoma eyaletinde yerleşim yeri, new jersey eyaletinde yerleşim yeri
tiniest|adj.|en ufak
latitude|n.|enlem
crucify|v.|işkence etmek, çarmıha germek, bastırmak
sledge|n.|balyoz, kızak
shrewd|adj.|kurnaz, açıkgöz
blurred|adj.|bulanık
spatter|v.|sıçratmak
menus|n.|menüler
nostrils|n.|burun delikleri
filet|n.|file, fileto, ağ
locally|adv.|kendi kaynaklarıyla, yerel olarak, yöresel
consistently|adv.|sürekli olarak, mütemadiyen, tutarlı olarak
u-turn|n.|u dönüşü, geriye dönüş, çarketme
synchronized|adj.|senkronize, senkronize edilmiş
tres|n.|küba'ya özgü bir müzik enstrümanı, italya'da bir yerleşim yer, ispanyolca 3
bumblebee|n.|toprak yabanarısı, yaban arısı, yabanarısı
mccall|n.|idaho eyaletinde şehir
thrashed|v.|kırbaçlamak
annabel|n.|kadın ismi
tutoring|n.|özel eğitim, özel ders
ingenuity|n.|ustalık, pratik zeka, marifet
scriptures|v.|kutsal metinden alıntılar yapmak, kutsal metinlerin yeni dünya tercümesi, kutsal kitap yeni dünya çevirisi
visualize|v.|gözünde canlandırmak, hayalinde canlandırmak, gözünün önüne getirmek
juggling|n.|hokkabazlık, jonglörlük
beige|n.|bej, kişiselliği olmayan, soluk
oslo|n.|minnesota eyaletinde şehir
hypnotized|adj.|hipnotize edilen, hipnotize, ipnotize
enigma|n.|bilmece, gizem, anlaşılmaz kimse
lanterns|n.|fener
marseilles|n.|marsilya, illinois eyaletinde şehir, ohio eyaletinde yerleşim yeri
memento|n.|yadigar, hatıra, anmalık
bedford|n.|indiana eyaletinde şehir, ingiltere'de yerleşim yeri, iowa eyaletinde şehir
uphill|adj.|yükselen, çetin, yukarıya giden
prosecuting|n.|davacı, yasal takibatta bulunan
volumes|n.|birimler
contraband|n.|kaçakçılık, kaçak, köle
debating|adj.|tartışan
bagged|adj.|torbalanmış, çantaya konulmuş, çantalanmış
albanian|n.|arnavutça, arnavutluklu, arnavut
ravine|n.|dağ geçidi
protesters|v.|göstericileri dağıtmak, protestocuları dağıtmak, göstericileri biber gazıyla dağıtmak
writ|n.|yazı, buyruk, davetiye
stalked|adj.|saplı
heroism|n.|kahramanlık
prolonged|adj.|uzatılmış, uzun, uzatılan
benevolent|adj.|iyicil, cömert, müşfik
squashed|adj.|ezik, basık
baloney|n.|yalan, palavra, hikaye
sweethearts|n.|dilber dudağı
sweatshirt|n.|geniş tişort, uzun kollu pamuklu kazak, svetşört
nutcase|n.|deli, kaçık
lecturing|n.|ders verme, konu anlatımı
developer|n.|geliştirici
deity|n.|tanrı, ilah, tanrısal konum
quebec|n.|kanada'da bir eyalet
jailed|adj.|hapsedilmiş, hapse atılmış
attain|v.|elde etmek, erişmek, ermek
distributor|n.|dağıtımcı, dağıtıcı, distribütör
hype|v.|heyecanlandırmak, yanıltıcı reklam yapmak, uyuşturucu madde
shackles|n.|pranga
one-eyed|adj.|sokur, tek gözlü, dar görüşlü
portions|n.|aksam, kişilik
housework|n.|ev işi, ev işleri
ferret|v.|kovmak, araştırmak, dağgelinciği ile avlanmak
snort|v.|burnundan solumak, homurdanmak, burnundan soluma
kiev|n.|kiev
ghostly|adj.|manevi, ruhani, hayalet gibi
chandelier|n.|avize
dubious|adj.|şüpheci, şüphe götüren, müphem
mammal|n.|memeli hayvan, memeli, mamal
suspecting|n.|şüphelenme, şüphe duyma
bubbly|adj.|şen şakrak, köpüklü, kabarcıklı
jacky|n.|denizcilere takılan aşağılayıcı bir lakap
follower|n.|taraftar, takipçi, destekçi
starling|n.|sığırcık, köprü ayağının etrafına çakılan kazıklar
sup|v.|yudumlamak, kaşıkla içmek, yudum yudum içmek
albuquerque|n.|new mexico eyaletinde yerleşim yeri
smugglers|n.|kaçakçılar
consuming|adj.|yakan, tüketici, bitiren
burp|v.|geğirmek, geğirti
jams|n.|heyhey, pijama, hiç eğlenceli değilsin
neighboring|adj.|bitişik, civardaki, yakın
explicit|adj.|aşikar, sarih, açık
titty|n.|göğüs ucu
dual|adj.|ikili
plastered|adj.|çakırkeyif, kafası dumanlı, sarhoş
gums|n.|(diş kökü çevresindeki) diş eti, gamlar, zamksı maddeler
extends|n.|genişler
bitchy|adj.|cadoloz, fahişe yaratılışlı, kaknem
nicotine|n.|nikotin, tütündeki zehirli madde
edmond|n.|kansas eyaletinde şehir, oklahoma eyaletinde şehir, oklahoma eyaletinde yerleşim yeri
alumni|n.|mezun, mezun erkek
tremendously|adv.|son derece, olağanüstü düzeyde, çok
madhouse|n.|tımarhane, akıl hastanesi
hearse|n.|cenaze arabası, üçgen mumluk
snickering|n.|kıs kıs gülme
wizards|n.|büyücüler, sihirbazlar
oaks|n.|missouri eyaletinde yerleşim yeri, oklahoma eyaletinde yerleşim yeri
humankind|n.|beniadem, insanoğlu, insaniyet
belfast|n.|irlanda'da yerleşim yeri, irlanda'da şehir, maine eyaletinde şehir
recollection|n.|anı, hatırlama, hatıra
holdup|n.|silahlı soygun, engel, durdurma
mantis|n.|peygamber devesi, peygamberdevesi
martyrs|n.|şehitler, şüheda
birthmark|n.|doğum izi, iz, doğum lekesi
baldy|n.|keltoş
supporter|n.|taraftar, destekçi
fundamentally|adv.|esasen
exclude|v.|dışlamak, hariç tutmak, dahil etmemek
traveller|n.|seyahat eden kimse
vp|n.|başkan yardımcısı, satın almadan sorumlu genel müdür yardımcısı
unravel|v.|çözmek, açmak, sökülmek
ratted|adj.|sarhoş
tucson|n.|arizona eyaletinde şehir
stabilized|adj.|istikrarlı, sabitleştirilmiş, stabilize
banter|v.|dalga geçmek, laklak etmek, şaka yapmak
drilled|adj.|delinmiş, delikli
red-handed|adj.|suçüstü, cürmümeşhut, cürmümeşhut halinde
architects|n.|mimarlar
taxis|v.|tekrar yerine koymak, refleks, yansı
consecutive|adj.|ardışık
untouchable|adj.|dokunulmaz
trough|n.|yalak
wither|v.|soldurmak, solmak
pew|n.|sıra (kilisede oturacak), sıra (kilisede), kilise sırası
pesetas|n.|ispanyol pesetası
accelerating|n.|hızlandırma, artan, hızlandırıcı
brides|n.|gelinler
inventing|n.|icat etme
embark|v.|gemiye bindirmek, gemiye binmek, girişmek
stalled|n.|istop etmiş araba
chameleon|n.|dengesiz kişi, bukalemun, bukalemun (takımyıldızı)
spawn|v.|yumurtlamak
selves|n.|öz, kendi
nicholson|n.|georgia eyaletinde şehir, pensilvanya eyaletinde yerleşim yeri
quad|v.|dörtlü sarmak, avlu, katrat
sellers|n.|satıcılar, güney carolina eyaletinde yerleşim yeri
stevenson|n.|alabama eyaletinde şehir, washington eyaletinde şehir
walkie-talkie|n.|telsiz, telsiz telefon, portatif telsiz telefon
fatter|adj.|şişman, daha şişman
tendencies|n.|intihar eğilimleri, siyasal eğilimler, eğilimlerin olgunlaşması
rodent|n.|kemirgen
soaring|n.|havada süzülme, tırmanan, yüksekte uçan
bolton|n.|connecticut eyaletinde şehir, ingiltere'de yerleşim yeri, massachusetts eyaletinde yerleşim yeri
commits|n.|silahlı soygun yapan kimse
measles|n.|kızamık
slid|v.|kaymak
yanks|v.|birden çekmek, aniden çekmek, hızla çekmek
tyrone|n.|georgia eyaletinde yerleşim yeri, oklahoma eyaletinde yerleşim yeri, new york eyaletinde yerleşim yeri
charities|n.|hayır kurumları, hayrat, hayır işleri
benign|adj.|sevecen, mülayim, merhametli
charmer|n.|büyücü, büyüleyici kimse, sihirbaz
aligned|adj.|sıraya konmuş, hizalanmış, üye
topped|adj.|kaplı, üstlü
gnome|n.|cüce
wholesale|adv.|toptan
plunged|v.|derinlere dalmak, karanlığa gömülmek, düşünceye dalmış
paddles|v.|kürekleri çok derine daldırmadan çekmek
laddie|n.|delikanlı, erkek çocuk, oğlan
blitz|v.|hava saldırısıyla yıkmak, yıldırım saldırı, hava saldırısı
dole|v.|(yoksullara para/yiyecek) dağıtmak, işşizlik maaşı almak, işsizlik yardımı
barging|n.|(kuyruk/sıra) kaynak yapma
mildly|adv.|kibarca, biraz, nezaketle
reflecting|n.|yansıtma, yansıtan, aksettiren
tended|adj.|düzenli, iyi bakılmış, iyi korunmuş
staked|n.|kilitli somun
boldly|adv.|cesaretle, cesurca, küstahça
vocation|n.|iş, kabiliyet, yetenek
memoirs|n.|hatırat, anılar, günlük
infidelity|n.|ihanet, sadakatsizlik, hıyanet
nugget|n.|altın külçesi, külçe, küçük ama değerli olan şey
operators|n.|işleçler
swells|v.|şişmek, kabarmak
securities|n.|tahviller, kıymet, değerli kağıtlar
rejects|n.|ıskartalar, kusurlular
dialysis|n.|diyaliz, ayırma, süzdürüm
lineage|n.|soy, nesep
notions|n.|tuhafiye ürünleri
wharf|v.|iskeleye boşaltmak, rıhtım, iskele
comedians|n.|komedyenler
polygraph|n.|yalan makinası, poligraf, yalan makinesi
recipient|n.|alıcı
beetles|n.|kın kanatlılar
nests||aynı çatı altında yaşayanlar iyi geçinmeli
recommendations|n.|tavsiyeler
adopting|n.|evlat edinen ebeveynler, özuyumlu bilgisayar
complication|n.|zorluk, karmaşık hale getirme, karmaşa
hemorrhage|n.|kanama, hemoraji, kan akması
annalise|v.|anallara yazarak tarihi belgelemek
reconstruct|v.|yeniden düzenlemek, bozup yapmak, yeniden yapmak
anesthetic|n.|anestetik ilaç, eter, uyuşturucu ilaç
consort|v.|hayatını paylaşmak, arkadaşlık etmek, orada burada takılmak
revived|v.|dirilmek
mats|n.|araba paspasları, ısıtma pedleri, tekstil cam keçeler
owing|adj.|ödenmemiş, borçlanma, borçlu
unorthodox|adj.|doğru kabul edilene aykırı olan, ortodoks olmayan, alışılmışın dışında
slop|v.|dökmek, dökülmek, ağzını şapırdatarak yemek
meticulous|adj.|titiz
seagull|n.|martı
damnit|interj.|kahretsin
forthcoming|n.|varış, geliş, mevcut
carnegie|n.|oklahoma eyaletinde yerleşim yeri, pensilvanya eyaletinde yerleşim yeri
cobbler|n.|acemi çaylak, dikici, ayakkabı tamircisi
quark|n.|tanecik, kuramsal zerre, kuark
freezes|v.|imkansız olmak, cehennemin donacağı gün olmak, balık kavağa çıkınca olabilmek
honours|v.|ev sahipliği yapmak, aralarındaki eşitlikle, beraberlikle
manually|adv.|elle işletilerek, elle, el ile
resigning|n.|istifa
polishing|n.|perdah, cila
vibes|n.|vibrafon
cranberry|n.|turna yemişi
gigolo|n.|jigolo, tokmakçı
persist|v.|üstelemek, ısrar etmek
puffy|adj.|kabarık
swiped|adj.|darbe almış (yumruk vb)
fir|n.|köknar, köknar kerestesi, göknar
startle|v.|ürkütmek
wingman|n.|yoldaş, eküri, yakın arkadaş
submarines|n.|denizaltılar
daffy|adj.|deli, çatlak
erect|v.|dikmek
mutually|adv.|karşılıklı olarak, nezaket, karşılıklı
roadside|n.|yolun kenarındaki arazi şeridi, yol boyu, yol kenarı
prodigy|n.|deha, olağanüstü şey, mucize
horton|n.|alabama eyaletinde şehir, kansas eyaletinde şehir
kerosene|n.|gazyağı, parafin, taşyağı
editors|n.|editörler
governess|n.|özel hoca, öğretmen, dadı
integrated|adj.|bütünleşmiş, entegre edilmiş
canine|n.|köpekgillerden bir hayvan, köpek, köpekdişi
reformed|adj.|geliştirilen, düzelmiş, ıslah olmuş
lifeline|n.|hayatın bağlı olduğu şey, dalgıç halatı, hayat çizgisi
lockers|expr.|(burada) emanet dolabı var mı?, eşya dolabı kapağı, emanet
hors|n.|ordövr, çerez, meze
mondays|adv.|her pazartesi
brighten|v.|aydınlatmak, parlatmak
achieving|n.|başarı, başarma, temin
scottie|n.|iskoç teriye, iskoç teriyeri
optical|adj.|göz, görüş, ışıksal
lug|v.|çekmek, sürüklenmek, sürüklemek
lag|v.|gecikmek, geri kalmak, duraklamak
spirited|adj.|gizlice götürülmüş, esprili, ruh haline sahip
hark|v.|işitmek, kulak vermek, dinlemek
hopelessly|adv.|ümitsiz bir şekilde, ümitsizce, umutsuzca
bouncy|adj.|canlı, yaşam dolu, istekli
respecting|n.|saygı gösterme, saygı duyma, konusunda
beirut|n.|beyrut
mounting|n.|montaj
hurried|adj.|ivedi, acele eden, aceleye gelen
kimchi|n.|geleneksel bir kore yemeği
slaughterhouse|n.|toplu katliam, kasaphane, salhane
shilling|n.|şilin, yenilgi, eski ingiliz gümüş parası
tarts|n.|turtalar, bir tür meyveli içki
overslept|adj.|çok uyuyan, fazla uyutulmuş
grinning|n.|sırıtma
collars|n.|beyaz yakalar, mavi yakalılar, öz sermaye yakası
kneeling|n.|diz çökme, dizüstü duruş
billings|n.|montana eyaletinde şehir, missouri eyaletinde şehir, oklahoma eyaletinde yerleşim yeri
selfishness|n.|bencillik
unloading|n.|boşaltma, tahliye, basıncın kaldırılması
mets|adj.|karşılaşılan
sanderson|n.|teksas eyaletinde şehir
straps|n.|askılı etek, bağlantı bantları, ayarlanabilir kayışlar
eviction|n.|mahkeme kararıyla tahliye, tahliye, çıkarma
rog|n.|malın teslim alındığı
eliminating|n.|atma, ihraç etme, hariç tutma
bae|interj.|güzel, hayatım, tatlış
manhunt|n.|insan avı
whirlwind|n.|kasırga, hortum
dodo|n.|nesli tükenmiş bir kuş, dodo, dodo kuşu
lobsters|n.|açık/parlak renkli kayalık ıstakozları
riviera|n.|riviyera, teksas eyaletinde şehir
millimeter|n.|milimetre, binde bir metre
fished|n.|cebireli bağlantı, olgunca avlanmış
wield|v.|savurmak pala çalmak, elle tutup kullanmak, kullanmak
detachment|n.|yansızlık, tarafsızlık, dekolman
mps|n.|milletvekili, parlamenter, mebus
legions|n.|alay, kalabalık, lejyon
hooper|n.|fıçıcı, çemberci, fıçı tamircisi
fragrant|adj.|kokulu
glands|n.|bezler
palaces|n.|saraylar
delaware|n.|abd'de eyalet, amerika'da eyalet, iowa eyaletinde şehir
hurley|n.|hokey benzeri oyun, güney dakota eyaletinde şehir, missouri eyaletinde şehir
faction|n.|hizip
nominees|n.|adaylar
sleepwalking|n.|uykuda gezme, uyurgezerlik, somnambulizm
hairstyle|n.|saç stili, saç modeli
pastries|n.|pastalar
casts|n.|çalışma modeli
cabs|n.|taksi
synchro|n.|eş zaman, senkron, senkro
spotless|adj.|lekesiz
sobriety|n.|ağırbaşlılık, ılımlılık, temkin
gulp|v.|yutkunmak
intensifies|v.|yoğunlaştırmak
theres|adv.|oraya, orada, ora
heirloom|n.|aileden kalma değerli şey, ata yadigarı olan şey, yadigar
merrily|adv.|mutlu olarak, neşeyle
unified|adj.|birleştirilmiş
fixes|v.|düzeltmek, onarmak, tamir etmek
briefs|n.|külot
aesthetic|n.|güzelduyu, estetik, bedii
swarming|n.|oğul telaşı, oğul dürtüsü, oğul mevsimi
campers|n.|karavan gibi kullanılan minibüs, kampçı, ufak kamp karavanı
directory|n.|rehber
tabitha|n.|kadın ismi
cheered|v.|gözü gönlü açılmak
priestess|n.|rahibe
entertainer|n.|eğlendiren kimse, gösterici, ağırlayan kimse
whirl|v.|hızlı dönmek, fırıl fırıl dönmek, sarmak
aspen|n.|toz ağacı, titrek kavak, titrek kavak ile ilgili
devastation|n.|haraplık, mahvetme, hasar
lumpy|adj.|yumru yumru, topak topak, topaklı
wrinkle|v.|kırışmak, buruşmak, kırıştırmak
podium|n.|podyum
evils|n.|pis pis/ters ters bakış
guesses|expr.|sana üç tahmin hakkı versem?
discreetly|adv.|mesafeli bir şekilde, sağduyulu şekilde, sağgörülü şekilde
squads|n.|geniş kama, saf kol
chunky|adj.|bodur
cj|n.|cj-4 yağ sınıfı
gadgets|n.|elektrikli araçlar/aletler
advising|n.|tavsiye etme, tavsiye eden, tavsiye edici
discredit|v.|kötülemek
grammy|n.|grammy ödülü, müzik ve sahne sanatları ödülü
custer|n.|güney dakota eyaletinde şehir, washington eyaletinde şehir
ajax|n.|ajax, aias, salamis'li telamon'un oğlu
lebanon|n.|lübnan, connecticut eyaletinde şehir, güney dakota eyaletinde yerleşim yeri
stumbling|n.|tökezleme, tökezleyen
furs|n.|kürk
chucked|adj.|sarhoş, kafası kıyak, zom
pulmonary|adj.|akciğer, akciğerli, akciğere ait
pawnee|n.|rehin karşılığı borç veren, rehin alan, rehinli alacaklı
compel|v.|zorlamak, mecbur etmek
midtown|n.|şehir merkezi, tennessee eyaletinde yerleşim yeri
ottoman|n.|osmanlı
messengers|n.|ikinci taşıyıcılar
parrish|n.|wisconsin eyaletinde yerleşim yeri
walkers|n.|cambaz ayaklığı
gibbons|n.|jibon, şebek, uzun kollu ve kuyruksuz bir tür maymun
two-bit|adj.|değersiz, önemsiz, kayda değmez
ammonia|n.|amonyak
kitchens|n.|mutfaklar
ru|n.|rutenyumun simgesi
swans|v.|karga yavrusunu şahin görür, kuzguna yavrusu şahin görünür, yere göğe sığdıramamak
pretzels|n.|çubuk kraker, pretzel
drags|v.|sürüklemek
fickle|adj.|kelek, sebatsız, kalleş
punctured|v.|delinmek, yarılmış dış lastik
visitation|n.|hasta ziyareti, ziyaret
rounding|n.|yuvarlama, kavislendirme, yuvarlaklaşma
commute|v.|takas etmek, hafifletmek (cezayı), çevirmek
carousel|n.|atlıkarınca, atlı karınca, döner vitrin
fronts|n.|kıyafet, spor ceket
stutters|v.|kekelemek
whips|n.|patates kızartması
wholly|adv.|büsbütün, kamilen, tamamıyla
checkbook|n.|çek defteri, bilgi karşılığı ödeme
stronghold|n.|sığınak, kale, müstahkem mevki
jubilee|n.|herhangi bir olayın ellinci yıldönümü, jubile, jübile
offenses|n.|siyasal suçlar ve suçlular, çevreye karşı suçlar, mala karşı suçlar
specialize|v.|uzmanlaşmak
diagram|n.|grafik, şema
civilised|adj.|medeni, uygar
mould|v.|şekil vermek, küflendirmek, küflenmek
revival|n.|canlanma
compulsive|n.|kompülsif, dürtüyle yapılan, kompulsif
parisian|n.|parisli
egan|n.|güney dakota eyaletinde şehir
bergman|n.|bergman boru
lawsuits|n.|dava türleri, hukuk davaları, inşai davalar
year-old|v.|3 yaşında bir çocuğun zekasına sahip olmak, üç yaşında bir çocuğun zekasına sahip olmak, 3 yaşındaki çocuğun ailesi
cubic|adj.|kübik
yogi|n.|yogi, yoga yapan
seasonal|adj.|mevsimlik, mevsimsel
pressured|n.|basınçlı su tesisatı, basınçlı kap
restart|v.|yeniden başlamak
kryptonite|n.|kriptonit
kinder|n.|louisiana eyaletinde yerleşim yeri
hesitated|v.|duraksamak, tereddüt etmek
proverb|n.|atasözü
wanderer|n.|avare
exchanging|n.|değiştirme, teati
alibis|n.|mazeret
weaving|n.|dokuma, örme
break-up|n.|dağılma, parçalanma, parçalama
airlock|n.|hava hücresi, su borularında oluşan hava engeli, hava cebi
gambled|n.|kumar
finalists|n.|finalist, finale kalan sporcu
medicinal|adj.|ilaç özelliği olan, tedavi edici, gezgin
depraved|adj.|ahlaksız, ahlakı bozuk, bozulmaya uğramış
mimicking|n.|taklit etme
bullshitting|expr.|kes saçmalamayı
roofs|v.|çatıları uçurmak, damı açılır kapanır vagon, asma çatı
contemplate|v.|düşünüp taşınmak
physicists|n.|fizikçi, fizikçiler
heathen|n.|kafir
addictive|adj.|alışkanlık yapan
solves|expr.|kavga etmek asla bir şeyi çözmez, para her şeyi çözer, para her derde devadır
heartbreaking|adj.|içler acısı, büyük acı veren, üzücü
dynamics|n.|dinamik, canlılık, devimbilim
advisors|n.|yatırım danışmanları, spor danışmanları, ekonomik danışmanlar konseyi
restoring|expr.|geri yükleniyor, geri yüklüyor
outward|adj.|dıştan, dışa doğru olan, harici
rambling|adj.|başıboş
boxed|adj.|ambalajlanmış, ölü, mort
camped|v.|kamp yapmak, kamp kurmak, kamp
praising|n.|övme
topics|n.|konular
conservatory|n.|limonluk, sera, konservatuvar
horsemen|n.|mahşerin dört atlısı
clarissa|n.|kadın ismi, minnesota eyaletinde şehir
frisbee|n.|frizbi
defining|n.|tanımlama, tanımlayan, tamlayan
cognitive|adj.|bilişsel
braddock|n.|kuzey dakota eyaletinde şehir, pensilvanya eyaletinde yerleşim yeri
diminished|adj.|azaltılmış
donating|n.|bağışlama, bağışta bulunma
stoked|adj.|çok memnun, heyecanlı
biologist|n.|dirimbilimci, yaşambilimci, biyolog
riff|n.|nakarat (hem müzikte veya konuşmada), sık sık tekrarlanan müzikal bağ
fasting|n.|oruç
elm|n.|karaağaç
councilor|n.|kurul üyesi, meclis üyesi, komisyon üyesi
starr|n.|güney carolina eyaletinde yerleşim yeri
appliances|n.|tertibat, (elektronik) aletler, elektrikli aletler
conspicuous|adj.|göze çarpan, cazip, aşikar
gloom|n.|kasvet
pacing|n.|adımlama, hız denetimi, adımla ölçme
scrolls|n.|etiyopya sihir süsleri, kumran metinleri
errol|n.|new hampshire eyaletinde yerleşim yeri
handcuff|n.|kelepçe
crusaders|n.|haçlılar
creations|n.|kreasyon
fines|n.|para cezaları, ince daneler, ince taneler
implanted|adj.|içine sıkıca yerleştirilmiş, implante
intellectuals|n.|entelektüeller, entellektüeller
soprano|n.|soprano, sopranoya ait
vanishing|n.|ortadan yok olma
frightful|adj.|kocaman, ürkütücü, berbat
omelette|n.|omlet
conquering|n.|fetih, fethetme, galip
polka|v.|polka dansı yapmak, polka, polka dansı
ordinarily|adv.|normal olarak, genelde, genellikle
travers|n.|ara bağlantı, atkı, bar
cipher|v.|hesaplamak, aritmetik yapmak, hiç olan şey
tonnes|adv.|ton cinsinden, t.e.p. (ton eşdeğer petrol)
bolo|n.|uzun bıçak, bolo, tek ağızlı bir bıçak
chou|n.|çin'de yapılan özel bir çömlek
denounce|v.|ihbar etmek
impersonating|v.|başkasıymış gibi davranmak, gösterişçi
taxpayers|n.|büyük mükellefler, evli mükellefler, mükellef hakları
perceptive|n.|anlayış, anlama kabiliyeti olan, zekice
hugely|adv.|dev gibi, kocaman, çok
lowering|n.|tezellül, alçaltma, indirme
prescriptions|n.|reçeteler
activists|n.|siyasal eylemciler, hayvan hakları savunucuları
affidavit|n.|yeminli ifade
premeditated|adj.|önceden tasarlanmış, kasti, önceden planlanmış
moths|n.|camkanatlılar, arı benzeri kelebekler, arılar gibi üşüşmek
patrolling|n.|devriye gezme, hat kontrolü
anthrax|n.|karakabarcık, şirpençe, şarbon
shipyard|n.|tersane
notre|n.|notre dame katedrali, notre dame dağları
gloss|n.|perdah, parıltı, parlaklık
adjacent|adj.|komşu, bitişik
phoney|n.|sahte şey, şarlatan, sahtekar
territorial|n.|gönüllü asker, kara, belirli bir bölgeye ait
mannequin|n.|manken
toyota|n.|japonya'da bir şehir
bren|n.|hafif zırhlı taşıyıcı, hafif makinalı tüfek, makineli tüfek
cuter|n.|kuter
koran|n.|kuran, kur'an, kur'an-ı kerim
paxton|n.|florida eyaletinde yerleşim yeri, illinois eyaletinde şehir, illinois eyaletinde yerleşim yeri
papal|adj.|papalığa ait, papaya ait
yorker|n.|new york'ta yaşayan kişi, new yorklu
keepers|expr.|mal bulanındır, hayvan idare edenlerin sorumluluğu, bm barış gücü
yearn|v.|özlemek
calming|adj.|yatıştırıcı
carp|v.|dırdırlanmak, kusur bulmak, mızırdanmak
bel|n.|bel, güç düzeyi farkı birimi
fluent|adj.|akıcı bir şekilde konuşan, akıcı
minivan|n.|minivan, hafif ticari
rochester|n.|ingiltere'de yerleşim yeri, illinois eyaletinde yerleşim yeri, indiana eyaletinde şehir
lister|n.|çift bıçaklı saban
descriptions|n.|açıklamalar
takeout|n.|tasfiye, paket servisi olan restoran, paket
hillbilly|n.|çiftçi, ormanlık dağlarda yaşayan adam, maganda
generating|v.|üretmek, üretim, üretici
unconditional|adj.|koşulsuz, şartsız
unofficial|adj.|gayriresmi
tiara|n.|taç (mücevherli), papanın tacı, baş süsü
gowns|v.|cüppe giydirmek, biniş, sabahlık
hearsay|n.|şayia, kulak dolgunluğu, dedikodu
renovation|n.|yenileştirme, renovasyon, tamirat
lucinda|n.|kadın ismi
misled|adj.|kandırılmış, yanıltılmış
pastures|n.|meralar, çayırlar
clogged|adj.|engel olunmuş, tıkanmış, tıkalı (yol)
lax|adj.|savsak, belirsiz, ihmalci
clank|v.|şakırdamak, tangırdamak, şıkırdatmak
remington|n.|indiana eyaletinde yerleşim yeri, virginia eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
pimps|n.|kadın satıcıları
footing|n.|ilişki, durum, ayak basacak yer
twists|n.|bir şeyin tüm ayrıntıları, bir şeyin girdisi çıktısı, dolambaç
securing|n.|güvene alma, güvenceye alma, güvence altına alma
fiesta|n.|yortu, fiesta, bayram
sweetly|adv.|nazikçe
tien|n.|taocu üçleme'nin bir üyesi, tienşan dağları, pekin'de büyük bir meydan
lashes|n.|kirpikler
illicit|adj.|yasadışı, yasaya aykırı
degrading|n.|alçaltma, küçültücü, alçaltıcı
similarly|adv.|aynı şekilde, benzer biçimde, benzer şekilde
repaid|v.|faiz işletmek, ihracatlarda mükerrer ödenen k.d.v.
raffle|n.|çekiliş
gs|n.|taktik takviye görevi
sulfur|v.|kükürtlemek, sülfür sarısı, kükürt
homing|n.|uçuş, homing, rota tayini
mead|n.|yeşillik, çayır, çimen
stasis|n.|bir sıvının akışının durdurulması, durağanlık, durgunluk
dicky|n.|yaka, önlük, minik kuş
nobleman|n.|asilzade
adelaide|n.|kadın ismi
momentarily|adv.|geçici olarak, bir an için, çok kısa süren
newt|n.|semender, sukeleri, su keleri
slender|adj.|ince
implicated|v.|sezdirmek, töhmet altında bırakmak, bulaştırmak
maverick|n.|damgalanmamış dana, damgalanmamış ve sahipsiz dana, sahipsiz buzağı
contraption|n.|makine, mekanizma, tertibat
fester|v.|azmak, çürümek, kokmak
stairway|n.|merdiven (iki katı birbirine bağlayan), merdiven, merdiven boşluğu
earp|v.|çıkarmak, kusmak, içi dışına çıkmak
bins|n.|ambar, gözlük
flake|n.|pul
cubicle|n.|kabin, kabine, göz
harrington|n.|ingiltere'de yerleşim yeri, maine eyaletinde yerleşim yeri, washington eyaletinde şehir
flashed|expr.|şimşek çaktı ve gök gürledi, indirgenik tuğla
indispensable|adj.|zaruri
trivia|n.|ıvır zıvır, önemsiz şeyler, tırı vırı
alderman|n.|belediye meclisi üyesi, belediye meclis üyesi, şehir ayanı
manifesto|n.|bildirge, beyanname, tebliğ
wednesdays|adv.|her çarşamba
bickering|n.|çekişme, münakaşa, atışma
prized|adj.|değer verilen, değerli
dodged|v.|hileyle atlatmak, kaçamak yapmak, kaçınmak
hurrying|n.|acelecilik, acele etme
entourage|n.|arkadaş çevresi
pretzel|n.|çubuk kraker, pretzel
hickey|n.|tertibat, sivilce, zımbırtı
conspired|v.|komplo kurmak
mints|n.|nane
thaw|v.|çözülmek (don), buzu çözülmek, eritmek (kar/buz vb)
unexplained|adj.|açıklanmamış, anlaşılmamış, açıklamasız
tampa|n.|tampalı, florida eyaletinde şehir, kansas eyaletinde şehir
acquisition|n.|kazanma, edinme, kazanç
amigos|n.|arkadaş, dost, yoldaş
leeches|v.|sülük vurmak
unholy|adj.|fena, kötü, kötücül
profiles|n.|profiller
keypad|n.|küçük klavye, keypad, miniklavye
imposter|n.|sahtekar
gutted|adj.|bıkkın, tümüyle tükenmiş, içorgansız
conceited|adj.|kurumlu, hodbin, burnu büyük
landscapes|n.|manzara, peyzaj
pubs|n.|taverna, meyhane, birahane
pubic|n.|kasık, kasığa ait, cinsel organları çevreleyen
infernal|adj.|cehennemlik, şeytanca, berbat
defiant|adj.|serkeş, karşı koyan, karşı gelen
correctional|adj.|düzeltici, ıslah
rated|adj.|azarlanmış, paylanmış, fırça atılmış
utopia|n.|düşler ülkesi, ütopi, hayali mükemmel yer veya durum
insanely|adv.|delicesine
mousse|n.|dondurulmuş krema, saç köpüğü, köpük
finder|n.|bakaç, bulan kimse, vizör
dividing|n.|bölüşüm, bölme işlemi, bölme
veterinarian|n.|veteriner
puking|n.|kusma
huff|v.|dayılanmak, gücendirmek, küsmek
puked|v.|kusmak
naught|v.|başarısız kalmak, hiçbir şey, hava
greenland|n.|grönland adası, grönland, new hampshire eyaletinde yerleşim yeri
bane|n.|afet, zehir, yıkım
merle|n.|karatavuk, kara bakal, kara tavuk
tribune|n.|tribün, platform, kürsü
gauze|n.|gazlı bez, sargı bezi
dredge|v.|dibini taramak (deniz/ırmak vb'nin), taramak, dibini taramak
crutches|n.|koltuk değnekleri
rabble|v.|gelberi ile karıştırmak, sürü olarak saldırmak, ayaktakımından kalabalık
handgun|n.|tabanca, genelde bir elle atılan silah
vaginal|adj.|dölyoluna ait, dölyolu (ile ilgili), vajinal
announcements|n.|ilanlar
infections|v.|sık enfeksiyon geçirmek, alt solunum yolu enfeksiyonları, akut üst solunum yolu enfeksiyonları
corral|v.|kuşatmak, tutmak, yakalamak
renata|n.|kadın ismi
augustine|n.|aziz augustine tarikatı üyesi, aziz augustine doktrinini benimseyen kimse
climbs|v.|tırmanmak, tırmanış
universes|n.|alem, kainat, evren
middle-class|adj.|burjuva, orta sınıfa özgü, orta sınıftan
ditto|v.|tekrarlamak, suret, denden işareti
likelihood|n.|olası olma, ihtimal, olasılık
archaeological|adj.|kazıbilimsel, arkeolojik
coastline|n.|sahil şeridi, kıyı boyu, kıyı
nestor|n.|kıdemli, akıllı ve yaşlı öğüt verici kimse, kıdemli kimse
rigor|n.|cefa
misconduct|v.|görevi kötüye kullanmak, kötü idare etmek, görevi kötüye kullanma
lucid|n.|açıklık, sağduyu, vazıh
dolan|n.|dolan
majors|n.|zorunluluk, yüksekokul ana bilim dalları, abd'deki en yüksek iki beysbol ligi
donkeys|expr.|yıllardır, çok uzun zamandır, ne zamandır
imagery|n.|imgelem, imgeler, heykeller
preservation|n.|koruma
masturbating|v.|mastürbasyon yaparken yakalanmak
skinned|adj.|derisi soyulmuş, derisi yüzülmüş, sıyrık
ornament|v.|süslemek, süsleme, süs
shrunk|adj.|çökmüş, çekmiş, çekintili
sneezing|n.|aksırma
glare|v.|göz kamaştıracak bir şekilde parlamak, göze batmak, dik dik bakmak
hanuman|n.|maymun hindu tanrısı ve rama'nın yardımcısı
exceeded|expr.|aşıldı
aston|n.|aston süreci, aston işlenik demir süreci, aston karanlık bölgesi
flaps|n.|fırın kapakları, iniş flapları, kanat kapakçığı
sculptures|n.|heykel
accompanying|n.|refakat, eşlik eden, beraberindeki
sami|n.|lapp, norveç, sami
scrutiny|n.|inceleme, dikkatle bakma, dikkatli inceleme
invoice|n.|fatura
revelations|n.|ifşaat
ho-ho|interj.|tamamen saçma, new jersey eyaletinde yerleşim yeri
sprout|v.|filizlenmek, filiz
mime|v.|taklit etmek, pandomim yapmak, mim oynamak
diverted|adj.|çevrilen, çevrilmiş
alms|n.|zekat, sadaka, yardım
tilly|adj.|sert killi, sert kil yapısında olan
garner|v.|depolamak, toplamak, kazanmak
shiv|n.|silah olarak kullanılan bıçak
domino|n.|domino, domino taşı, egemenlik
escorting|n.|eşlik etme
maris|n.|mari, mari cumhuriyeti’nde yaşayan etnik bir grup
aiding|v.|suça yataklık etme
upgraded|adj.|geliştirilmiş, gelişmiş, yükseltildi
inserted|adj.|gömme, gömülü, ekli
aspirations|n.|büyük amaç (uzun zamandır güdülen), arzu, soluma
furnished|adj.|döşenmiş
oop|interj.|haydi
gunmen|n.|silahlı adam, tüfekçi, silahlı soyguncu
unprotected|adj.|açık, korunmasız, himayesiz
temperament|n.|huy, mizaç
roper|n.|north carolina eyaletinde yerleşim yeri
chimps|n.|şempanze
stressing|n.|üzerinde durulması gereken birkaç konu, üstünde durulması gereken, üzerinde durulması gereken
rejoin|v.|cevabı yapıştırmak, tekrar iştirak etmek, yeniden katılmak
cordon|n.|kordon
freeing|n.|sökülme
suitor|n.|talip, evlenmeye istekli kimse, dilekçe sahibi
tangible|adj.|maddi, somut
emir|n.|emir, reis
limping|adj.|aksak
arouse|v.|uyanmak, canlandırmak, ayaklandırmak
travellers|n.|gezginler, turistler
monumental|adj.|devasa, abidevi, muazzam
bipolar|adj.|çiftkutuplu, ikikutuplu, çift kutuplu
hurl|v.|savurmak
unwind|v.|gevşemek
supervised|adj.|denetlenen
devout|adj.|dindar
architectural|adj.|mimarlığa ait, mimarlıkla ilgili, mimari
larceny|n.|çalma, hırsızlık, sirkat
trilling|n.|birleşik üçlü kristal, üçüz (her biri)
medina|n.|medine, kuzey dakota eyaletinde şehir, minnesota eyaletinde şehir
originals|adj.|özgün, orijinal, asıl
lear|n.|kral lear
sci-fi|n.|bilimkurgu
paved|adj.|asfaltlanmış, asfaltla kaplı, kaplanmış
decrease|v.|küçülmek, azaltmak, düşüş göstermek
appetizer|n.|meze
almonds|n.|badem şekeri, buzlu badem, acı badem
crunchy|adj.|çıtır çıtır, gevrek
treasurer|n.|hazinedar, mali işler sorumlusu, veznedar
waterfront|n.|yalı, su kenarında arsa, kıyı
elixir|n.|öz, bengisu, iksir
unmarked|adj.|çizgisiz, demarke, ifadesiz
knuckle|n.|eklem, parmak eklemi, menteşe
guatemala|n.|guatemala
tenure|v.|kadrolu olmak, kadro almak, memuriyet süresi
abundant|adj.|bol
calms|n.|ekvatoral sakin rüzgarlar, oğlak dönencesi limanlığı, yengeç dönencesi limanlığı
miraculously|adv.|mucizevi, mucize eseri olarak, mucizevi şekilde
beatings|v.|dayak atmak, kalp atışları
milking|n.|sağım, süt sağma, sağma
tumbling|n.|yıkılma, taklak, devrilme
bead|n.|boncuk
nurture|n.|terbiye
kebab|n.|kebap, şiş kebap
salads|n.|salatalar
redundant|adj.|lüzumsuz, gereksiz
populated|adj.|yerleşilen, iskan ettirilmiş, meskun
goalie|n.|kaleci, file bekçisi
celtic|n.|kelt lisanı, keltçe, keltlere özgü
superiority|n.|üstünlük
uncool|adj.|kötü, modası geçmiş ve sıkıcı, yavan
mileage|n.|mil hesabıyla uzaklık
cocoon|n.|koza
mako|n.|dikburun, mako köpekbalığı
starlight|n.|yıldız ışığı, yıldızların aydınlattığı
valves|n.|supap, valflar
shucks|n.|beş para etmez, beş kuruş etmez, değersiz şey
surrounds|v.|kuşatmak, etrafını sarmak, çevrelemek
suture|v.|dikiş atmak, dikiş atmaya yarayan ip (tıp), dikiş (tıp)
landslide|n.|toprak kayması, heyelan
hover|v.|havada durmak, etrafında gezinmek, iki şey arasında gidip gelmek
marches|expr.|bir ordu midesi üzerinde yürür, ordular mideleri üzerinde yürür, zaman geçiyor
tinkling|n.|tıngırtı, tınlama, çınlayan
rimmer|n.|kenar süslemekte kullanılan alet
terminator|n.|son veren, yok edici, sonlandırıcı
rainbows|v.|ayakları yere basmamak, hayal peşinde koşmak, hayaller peşinde koşmak
circled|adj.|daire içine alınmış, çevrelenmiş, kuşatılmış
restrained|adj.|ölçülü
lodging|v.|kalacak yer (geceyi geçirmek için), kalacak yer, han
claudius|n.|klaudyos batlamyus, batlamyus
rupture|v.|kırılmak, parçalanmak, ilişkisini kesmek
thinker|n.|filozof, mütefekkir, düşünür
variations|n.|çeşitlemeler, değişimler
magma|n.|mağma, lapa, magma
galley|n.|kalyon, kadırga
jodi|n.|ortak örgütler veri girişimi
gloat|v.|oh olsun! demek, kınalar yakmak, şeytanca bir hazla seyretmek
wayward|adj.|şımarık, tutarsız, inatçı
strolling|n.|gezinme, tınlama
day-to-day|adj.|her günkü, günlük
corpus|n.|kitaplık, külliyat, mecmua
reproduction|n.|üreme, çoğalma
babs|n.|babs raporu
railing|n.|korkuluk
turin|n.|turin, torino, georgia eyaletinde yerleşim yeri
ridiculously|adv.|saçma bir biçimde, komik bir şekilde, komik bir tarzla
horrendous|adj.|aşırı, dehşetli, korkunç
chases|v.|peşinde olmak, kovalamak, takip etmek
positioned|adj.|yerleştirilmiş, yerleştirilen, konumlanmış
angrily|adv.|hiddetle, hışımla, öfkeyle
bowler|n.|melon şapka, top atan oyuncu, melon
bot|n.|atsineğinin sürfesi, tıkaç, robot
caterer|n.|ikram servisi yapan kişi veya kuruluş, ihtiyaç giderici, yiyecek sağlayan kimse
cultivate|v.|ekip biçmek
fullest|v.|dolu dolu yaşamak, hayatı dolu dolu yaşamak, bütünü
rampage|v.|kudurmak, saldırmak, öfkelenmek
extending|n.|temdit, uzatma
holloway|n.|minnesota eyaletinde şehir, ohio eyaletinde yerleşim yeri
forbids|expr.|terbiyem müsaade etmiyor
forsake|v.|forsook - forsaken, terk etmek, yüzüstü bırakmak
mocked|v.|tiye alınmak, alay edilmek, dalga geçilmek
nightly|adj.|gece meydana gelen, geceleyin olan, her gece
petting|n.|sevişme, okşama, cinsel birleşme olmadan gerçekleştirilen seks
severance|n.|ilişiğini kesme, işten çıkarma, kopma
varsity|n.|üniversite, birinci takım (okulda/üniversitede), en iyi takım
damascus|n.|şam, şam (suriye başkenti), georgia eyaletinde yerleşim yeri
digestive|n.|hazmettirici ilaç, sindirim, hazmettirici
retained|adj.|alıkoyulmuş, tutulan
jagger|n.|çentik yapan kimse veya şey, çentikçi, sarhoş
quoted|adj.|fiyat teklif edilmiş, kote edilmiş
skips|v.|kalbi yerinden çıkmak, kalbi küt küt atmak, kalbi duracakmış gibi hissetmek
throbbing|n.|çarpıntı, zonklama, küt küt çarpan
firefighters|n.|itfaiye birliği, tüm İtfaiyeciler birliği, türkiye itfaiyeciler birliği
exploits|n.|dilenci iratçısı
reeks|v.|tütmek, duman çıkarmak, kötü kokmak
deficit|adj.|açık (hesaplarda)
barrister|n.|avukat
pepsi|n.|pepsi kola
dunes|n.|kum tepeleri, kumsalda sızıp kalmak, indiana eyaletinde yerleşim yeri
relied|expr.|komplikasyona bağlı olarak
evade|v.|kaçamak yapmak, yakayı sıyırmak, paçayı kurtarmak
goner|n.|yolcu, ölmek üzere kimse, gidici
doggone|interj.|ünlem
christening|n.|vaftiz etme, vaftiz, vaftiz töreni
gothic|adj.|gotik
ethiopia|n.|habeş, habeşistan, etyopya
bri|n.|brı durumu
shroud|n.|kefen
dingo|n.|hain, dingo, korkak
smacks|v.|şaplatmak, tokat atmak, şapır şapır içmek
spurs|v.|kışkırtarak teşvik etmek, çaba ve mücadeleyle şöhret kazanmak, birinin gözüne girmek
stimulation|n.|dürtü
betrothed|adj.|nişanlı, nişanlı kimse, nişanlanmış
relies|v.|güvenmek
warped|adj.|eğri, çarpık, eğrilmiş
justification|n.|gerekçe
candid|adj.|içten, samimi
small-time|adj.|küçük, ufak çapta
scrabble|v.|tırmalanmak, tırmalamak, çiziktirmek
vcr|n.|tv/vcr ünitesi, video sesi, vcr girişi
visually|adv.|gözle görülür biçimde, gözle, görsel bir şekilde
liter|n.|litre
evenly|adv.|başabaş olarak, eşit miktarda, düz bir şekilde
emissions|n.|emisyonlar
dooley|expr.|hadi ya! inanmıyorum!
counselors|n.|rehberler
tahiti|n.|tahiti
revolutionaries|n.|devrimciler
metre|n.|metre
conqueror|n.|fatih
qui|v.|tetikte olmak, nöbet tutmak, dikkatli ve uyanık olmak
favorable|adj.|elverişli, uygun, olumlu
montague|n.|kaliforniya eyaletinde şehir, massachusetts eyaletinde yerleşim yeri, michigan eyaletinde şehir
tarp|n.|muşamba
hancock|n.|iowa eyaletinde şehir, massachusetts eyaletinde yerleşim yeri, maine eyaletinde yerleşim yeri
mayan|n.|maya medeniyeti, mayalı
overturned|adj.|alabora olmuş, devrilmiş, devrik
holster|n.|meşin tabancalık, tabanca kılıfı, kılıf
crowe|n.|merill-crowe süreci, crowe işareti
realization|n.|kavrama, gerçekleştirme, gerçeklik kazanma
faintly|adv.|hafifçe, zayıf olarak
hawthorne|n.|florida eyaletinde şehir, kaliforniya eyaletinde şehir, new jersey eyaletinde yerleşim yeri
tuberculosis|v.|tüberküloz, verem
statistically|adv.|sayısal, istatistiklere göre, istatistiksel olarak
capri|n.|kapri, baldırı saran diz altı pantolon, italya'nın napoli körfezinde ada
odette|n.|kadın ismi
tolerant|adj.|hoşgörülü
modify|v.|değişmek, tamlamak, değişiklik yapmak
clary|n.|adaçayı, ateş çiçeği, ayı kulağı
inhaling|n.|dudak tiryakiliği, dudak tiryakisi
plough|v.|pullukla sürmek, sabanla sürmek
exceed|v.|sınırı aşmak, aşmak
flutter|v.|kanat çırpmak, çırpınmak
jackal|n.|çakal, alçak kimse
detest|v.|tiksinmek, nefret etmek, iğrenmek
kingston|n.|kingston, georgia eyaletinde şehir, illinois eyaletinde yerleşim yeri
sapphire|n.|safir mavisi, safir, camgöbeği renkli
andres|n.|erkek ismi
scariest|adj.|ürkütücü, korkunç, korkutucu
duff|n.|muhallebi, sahte, beceriksiz
foresee|v.|öngörmek, ileriyi görmek
unsuccessful|adj.|başarısız
sy|n.|suriye:sy
odyssey|n.|odise destanı, odise, entelektüel veya spiritüel yolculuk/arayış
premonition|n.|basiret, uyarma, içine doğma
psychiatry|n.|ruh hekimliği, psikiyatri
sexiest|adj.|en seksi
fathom|v.|derinliğini ölçmek
pears|n.|armut konservesi, merdiven
seizing|n.|tutma, kavrama, tutukluk
austen|n.|bir soyisim
templar|n.|tapınak şövalyesi, (abd) mason teşkilatı üyesi
hoods|n.|kaportacı
hospice|n.|tedavisi olanaksız hastalar hastanesi, düşkünlerevi, darülaceze
creak|n.|gıcırtı
yip|v.|havlamak, kesik ve tiz bir sesle havlamak (ufak köpek), kesik ve tiz bir havlama
maniacs|adj.|manyak
rotating|n.|dönüş, döner, dönen
behavioral|adj.|davranışla ilgili, davranış, davranışsal
subtitled|adj.|altyazılı, alt yazılı
adaptation|n.|intibak, uyum, adaptasyon
eyewitnesses|n.|görgü tanıkları, görgü şahitleri
indies|n.|batı hint adaları, endonezya, güneydoğu asya
mavis|n.|ardıçkuşu, öter ardıç, şakıyıcı ardıçkuşu
swede|n.|bir tür şalgam, isveçli, sarı şalgam
intricate|adj.|çapraşık, girift
nirvana|n.|hırslardan arınılarak ulaşılan salt mutluluk, mutluluk, erişilemez amaç
offline|adj.|devre dışı, çevrimdışı, çevrim dışı
cyprus|n.|kıbrıs
devoured|v.|yok edilmek
coloring|n.|renk, boya, boyama
aristotle|n.|aristo, şişe, ayın kuzeybatı çeyreğinde bulunan bir krater
quail|n.|bıldırcın
cheques|n.|(kumar) fişler, çekler, kılcal yüzey çatlakları
independently|adv.|başlı başına, birbirini etkilemeden, müstakilen
robust|adj.|güçlü, dirençli, çetin
cannibals|n.|yamyamlar
zeb|n.|oklahoma eyaletinde şehir
deduction|n.|çıkarılan miktar, kesinti
fives|n.|iki veya beş kişiyle oynanan top oyunu
bombings|n.|bombalı eylem, bombalama eylemi, bombalı saldırı
impolite|adj.|kaba
dependable|adj.|güvenilir
mundane|adj.|olağan, dünyaya ait, dünyevi
extremes|n.|aşırı uçlar, aşırı, dışlar
introductions|n.|giriş
pledges|n.|bağışlar
pestering|n.|rahatsız etme, rahatsızlığa sebebiyet verme, rahatsız eden
carlin|n.|cadaloz, yaşlı kadın, buldog benzeri küçük köpek cinsi
injunction|n.|resmi emir, ihtar, emir
windmill|n.|rüzgar gülü, yel değirmeni, yeldeğirmeni
pebble|n.|çakıl
closets|n.|elbise dolabı
relapse|v.|nüksetmek, kötüye gitmek
open-minded|adj.|yeni fikirlere açık, açık görüşlü, açık fikirli
char|v.|kömürleşmek, yakarak kömürleştirmek, karbonlaştırmak
retrieved|adj.|alınmış, yeniden kazanılmış
jamaican|n.|jamaikalı, jamaika, jamaika'ya özgü
dismantle|v.|sökmek
lingering|n.|duraksama süresi, oyalanma, geçmeyen
reside|v.|ikamet etmek
entrances|n.|giriş
claustrophobic|adj.|klostrofobik, kapalı yerlerden korkan
hick|n.|balta, hödük, zonta
bison|n.|bizon, kusmak, bozalamak
chivalry|n.|mertlik, cesaret, yüreklilik
judah|n.|yahuda
poseidon|n.|poseidon, bir çeşit deniz altı füzesi, bir tür güdümlü deniz altı torpili
bonkers|n.|bir tahtası eksik, çılgın, deli
surfaces|n.|yüzeyler
jest|v.|latife etmek, şaka etmek, şaka söylemek
teammate|n.|takım arkadaşı, ekip arkadaşı, takımdaş
toddler|n.|yürümeye başlayan çocuk, yeni yeni yürüyen çocuk, yürümeye yeni başlayan çocuk
lager|v.|kamp kurmak, sarı renkli bir bira, hafif bira
incarcerated|adj.|gözetimde tutulan, hapsedilmiş, hapse atılmış
stylist|n.|stilist
propeller|n.|pervane
novice|n.|acemi
scarier|adj.|daha ürkütücü, daha korkutucu
bloodthirsty|adj.|hunhar, canavar ruhlu, yırtıcı
nightcap|n.|yatak şapkası, takke, yatmadan önce içilen içki
entries|n.|gümrükten giriş işlemleri, adet, girdiler
curved|adj.|eğimli, kavisli
warms|v.|ısıtmak, ısınmak, ılık
viceroy|n.|kralın naibi, genel vali (krallığı temsil eden), naip
cornelius|n.|alman besteci ve şair, north carolina eyaletinde şehir, north carolina eyaletinde yerleşim yeri
rustle|v.|hışırdamak, hışırtı
vertigo|n.|baş dönmesi, kontrol kaybı, vertigo
communal|adj.|toplumsal, umumun malı olan, komünal
pu|n.|plütonyumun simgesi
hemorrhaging|n.|iç kanama
springtime|n.|bahar mevsimi, ilkbahar, bahar
puzzled|adj.|şaşkın
syrian|n.|suriyeli, suriye´ye özgü, suriye
pedestrian|n.|yaya
marino|n.|san marino cumhuriyeti, san marino, san marino'nun başkenti
blazer|n.|spor ceket, blazer (ceket), teks
ballpark|n.|beyzbol sahası, yaklaşık değer, aşağı yukarı
plagued|adj.|rahatsız edilen, rahatsız edilmiş
consistency|n.|tutarlılık
bronson|n.|florida eyaletinde yerleşim yeri, iowa eyaletinde şehir, kansas eyaletinde şehir
untraceable|adj.|izlenemez, izi bulunamaz
relativity|n.|izafiyet, bağıntıcılık, mensubiyet
grazing|n.|hayvan otlatma, otlatma, otlak
paging|n.|sayfalara numara koyma, sayfa numaralama, radyoyla arama
regretting|v.|pişman olmak, pişmanlık
recharge|v.|yeniden yüklemek, yeniden şarj etmek, yeniden doldurmak
polluted|adj.|kirli, kirletilmiş, kirlenmiş
plotted|adj.|çizilmiş, grafik içine koyulmuş veya yerleştirilmiş
smoky|adj.|dumanlı
bertrand|n.|missouri eyaletinde şehir, nebraska eyaletinde yerleşim yeri
buggers|v.|aptalca davranmak, salakça davranmak, avare avare takılmak
revered|adj.|saygıdeğer, saygı gösterilen
nandu|n.|nandu, amerikan devekuşu, darwin nandusu
uss|n.|tonkin körfezi olayı
bloodbath|n.|katliam, kıyım, toplu kıyım
psychosis|n.|çıldırı, ruh hastalığı, psikoz
mulligan|n.|yahni, (atışlarda verilen) ikinci şans
backgrounds|n.|şeffaf zemin, web arka planları
downing|n.|missouri eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
affections|v.|karşısındakinin hislerine hitap etmek, gönül eğlemek, birisinin eşini baştan çıkarma
finley|n.|kuzey dakota eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
repercussions|v.|yankı uyandırmak, savaşın yankıları
krang|n.|lao krang, tayland’da yaşayan etnik bir grup
humping|adj.|çabalayan, gayret eden, uğraşan
shone|v.|parlamak
dietrich|n.|maymuncuk, idaho eyaletinde şehir
bub|n.|ulan
hornet|n.|büyük eşekarısı, eşekarısı, büyük eşek arısı
emperors|n.|imparatorlar
mme|interj.|bayan, hanımefendi, madam
rhetorical|adj.|sözbilime ait, etkileyici bir şekilde söylenen, söz sanatına özgü
unsettling|n.|yerinden çıkarma, sarsıcı, rahatsızlık verici
wacko|n.|deli
famished|adj.|çok aç, açlık çeken, aç
distortion|n.|bozukluk, çarpıtma (yüzünü), tahrif
vishnu|n.|balık tanrısı
publishers|n.|yayınevleri, yayımcılar
meek|adj.|uysal
reunite|v.|birleştirmek
carotid|n.|boyun arteri, karotis, şah damarı
chinaman|n.|çinli
telephones|n.|telefonlar
tock|v.|(saat) tik-tak sesi çıkarmak, tak, afrika'ya özgü bir guguk kuşu cinsi
competitions|adv.|yarışlarda, müsabakalarda, açık hava yarışları
lapse|v.|dolmak, kaymak, kusur etmek
light-years|v.|dünyadan milyonlarca ışık yılı uzakta olmak, çok uzak bir geçmişte, çok uzun zaman önce
plunder|v.|yağmalamak, yağma
unloaded|adj.|yükü boşaltılmış, doldurulmamış, boşaltmış
plump|v.|şişmanlatmak, semirtmek, tombul
trendy|n.|modayı takip eden kimse, moda, eğimli
sears|v.|alazlamak, katılaştırmak (vicdan), kavurmak
bureaucracy|n.|bürokrasi
rhode|n.|abd'nin rhode island eyaletinin başkenti, providence, amerika'da eyalet
fins|n.|palet, fitiller (hadde)
intending|adj.|niyetli
sadist|n.|sadist
seminary|n.|papaz okulu
bicycles|n.|bisikletler
sculpting|n.|şekil verme
condescending|n.|küçümseme, küçümseyen, tenezzül eden
orgasms|n.|orgazm
moonshine|v.|yasadışı alkol üretmek, ay ışığı, boş laf
incurable|n.|tedavi edilemez kimse, amansız, çaresiz
pamphlet|n.|kitapçık, el ilanı, risale
clinics|n.|diş klinikleri, ağrı klinikleri, ağız ve diş sağlığı kliniği
nottingham|n.|ingiltere'de yerleşim yeri, ingiltere'de şehir, new hampshire eyaletinde yerleşim yeri
nominate|v.|aday göstermek
wholesome|adj.|ahlak açısından hiçbir sakıncası olmayan, haysiyetli, faziletli
termites|n.|termit, kanatlı karınca, akkarınca
thunderbird|n.|gökgürültüsü kuşu
frigid|n.|frijit, duygusuzluk, cana yakın olmayan
aviv|n.|yahudi takviminin yedinci ayı
occurring|v.|meydana gelmek, husul, olay
ese|prep.|üslubunda, biçiminde, tarzında
summertime|n.|yaz, yaz mevsimi
bikers|n.|bisiklet sürücüsü, bisikletçi
induced|adj.|endüklenen, uyarılmış, teşvik edilmiş
missionaries|n.|misyonerler
arabian|n.|arap, arabi, arap atı
lacrosse|n.|hokey benzeri top oyunu, lacrosse füzesi, lakros
rarity|n.|seyreklik
gaines|n.|new york eyaletinde yerleşim yeri
dumpling|n.|hamur köftesi, meyveli börek, meyvalı bir tatlı
brood|n.|kuluçka
creamy|adj.|kremalı, kaymaklı, kremsi
weenie|n.|küçük, minik, penis
goddam|interj.|allah kahretsin, çok fazla, aşırı
roadblocks|n.|barikat, mania, bariyer
seductive|adj.|ayartıcı, iç gıcıklayıcı, karşı konulmaz
ornaments|v.|donatılmak, bakır süs eşyaları, gümüş süs eşyaları
annoys|v.|rahatsız etmek, sinirlendirmek, can sıkmak
wards|suf.|-e doğru, tarafına doğru, belediyenin idari taksimatı
dimensional|adj.|ölçülü, ebatlı, buutlu
reverence|n.|hürmet
belches|v.|duman çıkarmak, geğirmek
hooligans|n.|holigan
lavatory|n.|hela, kenef, ayak yolu
cabbie|n.|arabacı, taksi şoförü
extinguisher|n.|kül tablası, yangın söndürücü, yangın söndürme aleti
vader|n.|washington eyaletinde şehir
madagascar|n.|madagaskar
breeds|n.|koyun ırkları, köpek ırkları, kedi ırkları
audacity|n.|yüreklilik, yürek, arsızlık
cadaver|n.|kadavra
fluff|v.|bozmak, kabartmak, yüzüne gözüne bulaştırmak
willpower|n.|irade, istenç, irade gücü
sicilian|n.|sicilyalı, sicilya, sicilya'ya özgü
bewitched|adj.|afsunlu, büyülü, sihirli
cannonball|v.|yüksek hızda hareket etmek, suya bombalama atlamak, gülle
esta|expr.|nasılsın?
sampson|n.|wisconsin eyaletinde yerleşim yeri
aorta|n.|aort, şahdamarı, anadamar
head-on|adj.|kafadan/önden, burun buruna (çarpışma), kafa kafaya
sidelines|n.|yan çizgiler
candies|n.|şekerler
defeating|n.|yenme
kruger|n.|üstünlük yanılsaması
penetrating|n.|içine işleme, düzene sokma, nüfuz eden
aqua|n.|ispirto, açık deniz mavisi, açık mavi
quitter|n.|istifa eden kimse, yarı yolda bırakan, kolay pes eden
hydraulic|adj.|hidrolik, su basınçlı, su gücüyle çalışan
pulitzer|n.|pulitzer ödülleri
trucker|n.|kamyoncu, ambarcı, kamyon şoförü
clinks|v.|tıkırdatmak, şangırdatmak, şangırdamak
pooped|adj.|bitkin, yorgun, takati kesilmiş
calculus|n.|kalkülüs, işlence
tau|n.|yunan alfabesinin on dokuzuncu harfi
peeling|n.|soyulma, deri soyma işlemi (kozmetik), deri soyucu krem
filters|n.|süzgeçler
overtake|v.|yetişip geçmek, sollamak
ell|n.|endaze, arşın, dik kanat
transforming|adj.|dönüştürücü, dönüşmekte olan, dönüşen
cultured|adj.|kültürlü
magnets|n.|alni mıknatısları, alnico mıknatısları, seramik mıknatıslar
cartridge|n.|kartuş, fişek
langston|n.|alabama eyaletinde şehir, oklahoma eyaletinde yerleşim yeri, oklahoma eyaletinde şehir
choppers|n.|parçalayıcılar, dişler
sera|n.|serum
nuggets|n.|altın külçesi, külçe, küçük ama değerli olan şey
honoring|n.|şereflendirme, teşrif, ikram
historians|n.|tarihçiler
fainting|n.|bayılma
dears|expr.|canlarım benim, canlarım
delights|n.|haz
soothe|v.|yatıştırmak, sakinleştirmek
gazette|v.|resmi gazetede yayınlamak, gazete, resmi gazete
unhappiness|n.|mutsuzluk
bertram|n.|iowa eyaletinde şehir
continuity|n.|devamlılık, süreklilik
packaging|n.|ambalajlama
suns|n.|güneş
sheba|n.|saba melikesi
enmity|n.|düşmanlık
mansfield|n.|connecticut eyaletinde şehir, georgia eyaletinde şehir, ingiltere'de yerleşim yeri
scorn|v.|hor görmek
staple|n.|zımba teli, zımba
sitcom|n.|durum komedisi, durum komedyası, bir komedi dizisi formatı veya biçimi
commie|n.|komünist
toasted|adj.|kızarmış
coyotes|n.|kırkurdu, kır kurdu, çakal
vary|v.|keşikleşmek, çeşitlendirmek, farklı olmak
decorator|n.|dekoratör, süsleyici
laird|n.|toprak sahibi
liner|n.|kaplamacı, astarcı, yolcu uçağı
eggplant|n.|patlıcan
alliances|n.|stratejik ittifak, stratejik ittifaklar, stratejik ortaklık
huts|n.|kulübeler
appealed|adj.|temyiz edilmiş
molecule|n.|molekül
petite|adj.|minyon
synagogue|n.|sinagog, havra
palestinians|adj.|filistin
quilt|n.|yorgan
gynecologist|n.|kadın doğumcu, nisaiyeci, kadın doktoru
stutter|v.|kekelemek
warhead|n.|savaş başlığı, başlık (büyük bir mermiye ait), harp başlığı
articulate|v.|söylemek, açık bir şekilde telaffuz etmek, telaffuz etmek
space-time|n.|uzay-zaman
nudge|v.|dirseklemek, dürtmek
os|n.|kemik, delik, os
bombshell|n.|mermi, sürpriz, bomba mermisi
monaco|n.|monako
brooding|n.|düşüncelere dalma zorlanımı, saplantılı düşüncelere dalma
vertebrae|n.|omurga, omurlar
therapeutic|adj.|iyileştirici, tedavisel, tedaviye ait
booker|n.|teksas eyaletinde şehir
coordination|n.|koordinasyon
atf|abrev.|otomatik şanzıman yağı
mathematician|n.|matematikçi, matematisyen
smeared|adj.|sürülmüş (bir şeyi bir yere), bulaşmış, bozguna uğratılmış
uncontrollable|adj.|dizginlenemez, önlenemez, kontrol edilemez
stampede|n.|çılgınca kaçışma, izdiham
amor|n.|aşk tanrısını simgeleyen çıplak çocuk çizimi, aşk tanrısı
prospective|adj.|prospektif, ileriye yönelik, umulan
limestone|n.|kireç taşı, kireçtaşı, küfeki taşı
conduit|n.|boru, kanal
kabul|n.|kabil
dipper|n.|anabatist, büyükayı, kepçe
willoughby|n.|ohio eyaletinde şehir
avenger|n.|intikamcı, öç alan kimse
orbits|n.|yörüngeler
sentry|n.|karakol, bekçi, nöbet
scrapes|v.|hafif sıyrıklarla kurtulmak, hafif sıyrıklarla atlatmak, birkaç sıyrıkla atlatmak
mishap|n.|aksilik, ufak kaza, talihsizlik
lyric|n.|gazel, lirik şiir, lirik
disapprove|v.|uygun görmemek
intimidation|n.|gözdağı verme, yılgınlık, yıldırma
doubling|n.|bükme, katlama, seslendirme
impending|adj.|olmak üzere, eli kulağında, olması yakın
shrinks|v.|küçültmek, küçülmek, büzülmek
themes|n.|konular, düzenler, temalar
shamed|adj.|utanmış
indications|n.|belirtiler, endikasyonlar
senora|n.|evli kadın
crumb|n.|kırıntı
limitless|adj.|sınırsız
caveman|n.|orman kibarı, kereste, mağara adamı
bonny|adj.|güzel, gürbüz, sevimli
faintest|v.|en ufak bir fikri olmamak, en ufak bir fikri olmadan, bihaber olmak
grandeur|n.|görkem, ihtişam, güzellik
showering|n.|sağanak, duş
dildo|n.|yapay penis, yapay erkeklik organı, zıbık
executions|n.|icra-iflas hukuku
corroborate|v.|onaylamak, pekiştirmek (bir düşünce vb'ni), doğrulamak
contingency|n.|tesadüf, arıza, olasılık
avenged|adj.|intikamı alınmış, öcü alınmış
translates|v.|çevirmek, tercüme etmek
primo|n.|kokainli esrar
bestow|v.|hediye etmek, sunmak, bağışlamak
combinations|n.|kombinasyonlar, kurumsal birleşmeler
godforsaken|adj.|çok tenha, cinlerin cirit attığı (yer), vicdansız
pedestal|n.|kaide
stout|n.|iman, semer, koyu renkli bir çeşit bira
glaciers|n.|buzullar
dishonor|v.|leke sürmek, şeref ve haysiyetini kırmak, sözünü tutmamak
otter|n.|susamuru, su samuru, lutr
eminent|adj.|tanınmış ve üstün, yüksek (mevki), yüce
supernova|n.|üstnova, süpernova, supernova
weir|n.|su bendi, set, bent
java|n.|cava adası, bilgisayar programlama dili, cava
seasick|adj.|deniz tutmuş
populations|n.|duyarlı popülasyon, avrupalı olmayan yerli toplumlar, bir ülkenin yerli nüfusu
flips|v.|fiske atmak, fiske
mooing|v.|böğürmek, böğürme, böğürtü
mani|n.|manikür
cabins|n.|kütükten kulübeler, kabinlerin ses yalıtım performansları, mahfazalar ve kabinler ile gürültü kontrolü
pang|n.|spazm, sancı, batar
presumptuous|adj.|mağrur, haddini bilmez, küstah
subversive|adj.|tahrip edici, huzur bozucu, baltalayıcı
tokugawa|adj.|japonya'yı yöneten şogun ailesiyle ilgili, japonya'yı yöneten şogun ailesine ait
elastic|adj.|elastik, esnek, elastiki
libya|n.|libya
single-handedly|adv.|tek başına, yalnız başına, yardımcısız
pristine|adj.|saf, yeni ve iyi durumda, saflığını korumuş
width|n.|en, genişlik
sweats|n.|eşofman
remainder|n.|geri kalan, bakiye, artan
resides|expr.|adresinde ikamet eden/oturan, adresinde mukim
impaired|adj.|bozulmuş, bozulan
yellowstone|n.|gri yeşil sarı
retreated|v.|yeniden işlenmek
lateral|adj.|yanal
remembrance|n.|anma
smelt|v.|eritmek, kal etmek, kaletmek (maden külçesini)
biased|adj.|önyargılı
strangulation|n.|strangulasyon, boğma, boğulma
prying|n.|gözetleme, meraklı, mütecessis
hermes|n.|hermes, tanrıların habercisi
two-way|adj.|iki doğrultuda, iki yollu, çift yönlü
sphinx|n.|gizemli kimse, sfenks, anlaşılmaz kimse
self-defence|n.|savunma, meşru müdafaa, öz savunma
internally|adv.|içten, dahilen, bize gelince
rhoda|n.|kadın ismi
fisk|n.|devlet hazinesi, hükümdar hazinesi, missouri eyaletinde şehir
sympathies|n.|sevgi, görüşler (belirli bir şeyden yana olan), karşısındaki ile aynı duyguyu paylaşma
nickels|v.|beş parasız olmak, beş kuruş parası olmamak, çulsuz olmak
galloping|n.|dörtnala gitme, galopan
lamar|n.|güney carolina eyaletinde yerleşim yeri, kolorado eyaletinde şehir, missouri eyaletinde şehir
never-ending|adj.|ebedi
downloading|n.|yükleme, merkezden yükleme, merkezden güncelleme
lotto|n.|tombala, loto oyunu
danvers|n.|illinois eyaletinde yerleşim yeri, massachusetts eyaletinde yerleşim yeri, minnesota eyaletinde şehir
rephrase|v.|başka bir şekilde ifade etmek
casablanca|n.|kazablanka
ventilator|n.|havalandırma aygıtı, vantilatör
kraut|n.|bir çeşit lahana turşusu, alman
sanitation|n.|sanitasyon
ekg|n.|ekg
diseased|adj.|rahatsız, sayrı, mariz
eskimo|n.|eskimo
confessor|n.|itirafçı
aladdin|n.|alaaddin'in sihirli lambası, alaaeddin'in lambası, alaaeddin'in sihirli lambası
rutledge|n.|alabama eyaletinde şehir, georgia eyaletinde şehir, minnesota eyaletinde şehir
ruddy|adj.|elma gibi, kanlı canlı, lanet olası
brodie|n.|çelik savaş başlığı, çelik savaş miğferi
flashback|n.|geriye dönüş, geçmişi gösteren sahne, fleşbek
caged|adj.|kafeslenmiş, hapsolmuş, kapatılmış
imperfect|adj.|bozuk, defolu, kusur
routines|v.|alışkanlıkları kırmak, alışkanlıkları bozmak, zorunlu hareketler
reconnect|v.|yeniden bağlamak, yeniden bağlanmak, yeniden bağlan
plymouth|n.|plymouth askeri limanı, abd'de bir şehir, ingiltere'de bir şehir
quantico|n.|virginia eyaletinde yerleşim yeri
sanctioned|adj.|tasdik edilmiş
vulnerability|n.|hasar görebilirlik, yaralanabilirlik, saldırı veya tenkide maruz olma
rearrange|v.|yeniden düzeltmek, yeniden düzenlemek, tekrar sıralamak
synced|v.|senkronize etmek, senkronize etme, ana cadde
citadel|n.|hisar, sığınak, kale
nibble|v.|kemirmek
forcibly|adv.|zorla, kuvvetli bir biçimde, şiddetle
world-famous|adj.|dünyaca ünlü, dünyaca meşhur
insinuating|adj.|üstü kapalı, imalı
malignant|adj.|kötücül, habis
enslaved|adj.|esir, esir edilmiş
canister|n.|metal kap, teneke kutu, teneke
intersect|v.|kesişmek
zeros|v.|paradan/liradan altı sıfır atmak, baştaki sıfırlar, başlangıçtaki sıfırlar
undefeated|adj.|namağlup, yenilmez
gunned|n.|püskürtme beton
candlelight|n.|mumışığı, mum ışığı, yapay ışık
salesmen|n.|satıcılar
daisies|n.|papatyalar
hairdo|n.|saç tuvaleti, saç şekli, saç modeli
oblivious|adj.|dikkatsiz, unutkan, habersiz
criticizing|n.|eleştirme
truffle|n.|yermantarı, domalan, yer mantarı
vie|v.|aşık atmak, çekişmek, yarışmak
crisps|n.|cips, cipslik patates, patates cipsi
strangling|n.|boğma
petit|adj.|küçük, minik, ufak
shootout|n.|silahlı çatışma
abduct|v.|kaçırmak, kaçırmak (birini), adam kaçırmak
cloning|n.|eşlenikleme ayarları, eşlenkleme, kopyalama
ranked|adj.|sıraya koyulmuş, düzeyli
dazzle|v.|göz kamaştırmak
stork|n.|leylek
coronary|n.|kalp atardamarında kanın pıhtılaşması, kalp krizi, tromboz
jive|v.|caz çalmak, jıve dansı yapmak, gevezelik
mathieu|n.|mathieu tekniği
lard|v.|domuz yağıyla yağlamak, domuz yağı ile yağlamak, domuz yağı sürmek
shedding|n.|dökme, dökülme, dökme (göz yaşı vb)
massages|v.|masaj yapmak, masaj
poaching|n.|izinsiz avlanma, şeytanlık, kaçak avcılık
immaculate|adj.|pak, tertemiz, masum
hefty|adj.|bol, çam yarması gibi, ağır
stocked|adj.|stoklanmış
buddhism|n.|budizm
monologue|n.|monolog, tekil konuşma, tek kişiye özgü oyun
satanic|adj.|şeytani
linear|adj.|doğrusal
blackmailer|n.|şantajcı, şantaj yapan, şantaj yapan kimse
bora|n.|bora
endorse|v.|arkasına yazmak, uygun bulmak, ciro etmek
enid|n.|oklahoma eyaletinde şehir
liege|n.|köle, kul, derebeyine bağlı kimse
subsequent|adj.|sonradan gelen, daha sonraki, (belirli bir olayı) takip eden
madden|v.|delirtmek, sinirlendirmek, deli etmek
snip|v.|çırpmak, kırpmak, makasla kırpmak
hernia|n.|fıtık
philosophers|n.|filozoflar
rapists|n.|tecavüzcü, ırz düşmanı, mütecaviz
recommending|n.|strateji önerme
highways|n.|karayolları
bloodline|n.|nesep, nesil, soy
septic|n.|kan zehirlenmesi yapan madde, çürütücü, mikroplu
categories|n.|isim şehir oyunu, guggenheim oyunu, kategoriler
graces|v.|küçük dağları ben yarattım demek, birinin gözüne girmek, gözüne girmek
hammers|expr.|kuş beyinli, akılsız, aptal
yeast|n.|maya
mueller|n.|geiger-müller tübü, geiger-müller sayacı, geiger-müller algılayıcısı
cummings|n.|georgia eyaletinde şehir, iowa eyaletinde şehir
avocado|n.|amerikan armutu, amerikaarmudu, amerikan armudu
logically|adv.|mantıklıca, mantıklı, mantığa göre
oaf|n.|beceriksiz çocuk, budala, sakar
prompt|adj.|çabuk, hızlı (cevap)
alonzo|n.|alonzo-lej sınıflandırması
mushy|adj.|hamur gibi, aşırı duygusal, lapa gibi
campsite|n.|kamp yeri, kamping, kamp bölgesi
eels|n.|atom dikeci eels'i, yirmi beş yılan balığı
safeguard|n.|koruyucu şey
farted|v.|osurmak, osuruk
auf|n.|periler tarafından terk edilen peri çocuğu, aptal çocuk, aptal
flex|v.|bükmek, bükmek (kası), kasmak
fruitcake|n.|çatlak kimse, meyvalı kek, kaçık
danes|n.|danimarkalı, wisconsin eyaletinde yerleşim yeri
fulton|n.|güney dakota eyaletinde yerleşim yeri, indiana eyaletinde yerleşim yeri, illinois eyaletinde şehir
heiress|n.|mirasçı kadın, kadın mirasçı, kadın varis
beets|n.|pancar turşusu, kusmak, mideyi boşaltmak
racetrack|n.|parkur (at yarışı), hipodrom, koşu yolu
escorts|v.|refakat etmek
leaps|n.|atlamalar
parson|n.|papaz, rahip, vaiz
gazing|n.|dik dik bakma
pap|n.|mama, meme, lapa
imprint|v.|etkilemek, basmak (damga/mühür), kondurmak
jigsaw|n.|bozyap, motorlu oyma testeresi, oyma testeresi
coven|n.|cadılar toplantısı, cadılar meclisi
ach|n.|saatlik hava değişimi
discourage|v.|cesaretini kırmak
recycle|v.|geri dönüştürmek
constantinople|n.|istanbul (bizans dönemi), bizans, üçüncü konstantinopolis konsili
appalled|adj.|dehşete kapılmış, dehşete düşmüş, korkutulmuş
lisbeth|n.|kadın ismi
unlawful|adj.|yasadışı, kanunsuz
birthplace|n.|doğum yeri, doğumyeri
wank|v.|otuzbir çekmek, mastürbasyon yapmak, çavuşu tokatlamak
thriller|n.|gerilim filmi
hepatitis|n.|hepatit, karaciğer iltihabı, karaciğer yangısı
clutches|n.|pençe, güç, debriyajlar
publicist|n.|politika yazarı, reklamcı, siyaset yazarı
insistent|adj.|ısrarlı, ısrar eden, ısrarcı
hires|v.|kiralamak, (ücret vererek) tutmak, kira
tentacles|n.|ahtapot kolları
archangel|n.|baş melek, başmelek, melek otu
schiller|n.|tunç parlaklığı
submerged|adj.|su altındaki, batık, sualtı
rd|n.|başarısız rd
intoxicating|adj.|alkollü, sarhoş edici
crock|n.|kap, hurda araba, külüstür araç
hither|adj.|bu taraftaki, beri yandaki, beriki
cliche|n.|klişe
castor|n.|kunduz esansı, dökme kabı veya şişesi (sirke, yağ vb için), hintyağı otu
forty-five|n.|kırkbeş, kırk beş, 45
anastasia|n.|kadın ismi
timeless|adj.|belirli bir çağa ait olmayan, nihayetsiz, hiç bitmeyen
enquiries|n.|soruşturmalar, araştırmalar
occurrence|n.|bulunma, meydana gelme, oluş
hypocritical|adj.|riyakar
sharper|n.|hilebaz
manufacturers|n.|imalatçılar
governed|adj.|düzendeş, idare edilen, yönetilen
proteins|n.|proteinler
resurrected|adj.|diriltilmiş
cushions|n.|koltuk minderi, yatak minderi
psychiatrists|n.|psikiyatrist
halves|n.|yarımlar, bir şeyin yarısı, yarım
menopause|n.|yaşdönümü, menopoz, adet kesilmesi
butchers|v.|bir göz atmak
preserving|n.|koruma
environments|n.|endüstriyel ortamlar, daha zorlu ortamlarda, finansal çevreler
ponytail|n.|atkuyruğu, at kuyruğu (saç)
all-out|adj.|tam, bütün, tamamen
louse|n.|bit
dilated|adj.|açılan, açılmış
garbled|adj.|çarpıtılmış, yanlış, karman çorman
prognosis|n.|prognoz
neutron|n.|ılıncık, nötron, atomun elektriksel bakımdan nötr bir parçası
airtight|adj.|hava geçmez, hava geçirmez, sağlam
yo-yo|n.|yo-yo, yoyo, dönme dolap
jazzy|adj.|parlak, caz gibi, göz alıcı
ufos|n.|ufolar
compounds|n.|kompleks bileşikler, uçucu organik bileşikler, inorganik bileşikler
blazes|n.|cehennem
bulgarian|n.|bulgarca, bulgaristanlı, bulgar
coney|n.|pika
bulgaria|n.|bulgaristan
armageddon|n.|mahşer
contributing|n.|katılma, yardım eden
inauguration|n.|göreve başlama töreni, resmen işe başlama, açılış
slicing|n.|dilimleme, dilme, doğrama
restraints|v.|engel olmamak, saç bonesi, hiçbir kısıtlama olmadan
accents|n.|köşe aksanları
frederic|n.|wisconsin eyaletinde yerleşim yeri
cavern|v.|mağaraya koymak, içine almak, oymak
kremlin|n.|rus kasabalarındaki kalelere verilen isim, oklahoma eyaletinde yerleşim yeri
warship|n.|savaş gemisi
olly|n.|bir kaykay hareketi, iki ayak üzerindeyken kaykayı zıplatmak
militant|n.|militan
objectives|n.|hedefler, amaçlar
newscaster|n.|haber spikeri, haber sunucusu
verne|n.|iowa eyaletinde şehir, kaliforniya eyaletinde şehir
calculator|n.|hesap eden kimse, hesap yapan kimse, hesap makinesi
nicknames|n.|takma adlar
kiddie|n.|tıfıl, bacaksız, bızdık
replay|v.|yeniden oynamak (maç), yeniden çalmak, tekrar çalmak
tibetan|n.|tibetli, tibet dili, tibetçe
abuses|n.|insan hakları ihlalleri
zee|n.|z harfi
righto|expr.|pekala, tamam, tamam bakalım
programmes|n.|programlar
yung|n.|sebzeli, etli ve çin soslu bir omlet çeşidi
snout|n.|hortum (hayvan), burun (domuz), muhbir
rein|n.|dizgin
dwarfs|n.|cüceler
mono|adj.|mono, tekli, tek
darned|adj.|çok, fazlasıyla, bela
embryo|n.|embriyo
frosting|n.|şekerli beyaz karışım, keklerin üzerine konulan şekerli karışım, dondurma
obituary|n.|bir ölü hakkında yazılan kısa biyografi, vefat ilanı, ölüm ilanı
tickled|adj.|memnun, mutlu, hoşnut
truffles|n.|çikolata topları, boka üşüşen sinekler gibi, fırında mantarlı patates
susceptible|adj.|duyarlı
all-|pref.|diğer anlamı veren ön ek, farklı anlamı veren ön ek, izomerik anlamı veren ön ek
heaps|n.|etek dolusu, öbek, çok
tingling|n.|karıncalanma, karincalandırma, sızlama
canvass|v.|propaganda yapmak, reklam yapmak, gözden geçirmek
brits|n.|britanya adası halkları, ingilizler
cherokee|n.|çeroki dili, çeroki, alabama eyaletinde şehir
tov|n.|iyi (ibranice), hoş
twenties|n.|yirmiler, 1920'li yıllar, 1920'ler
neanderthals|n.|ilkel, kaba veya kalın kafalı kimse, modası geçmiş fikirleri olan kimse, ilkel
perk|v.|neşelendirmek, dikmek, neşelenmek
pebbles|n.|çakıl taşları, ince çakıl, pütürlülük
braid|n.|örgü
fleece|v.|kırkmak (koyunu), kırkmak, soyup soğana çevirmek
sensory|adj.|duyusal
chirp|v.|cıvıldamak
assaults|v.|saldırmak, saldırı
pheasant|n.|sülün
variables|n.|değişkenler
moping|v.|bunaltmak, üzgün olmak, üzmek
docked|adj.|takılı
popeye|n.|temel reis, pörtlekgöz
minefield|n.|mayın tarlası, mayınlı arazi, mayınlı alan
sp|n.|servis sağlayıcı
histories|n.|hayali tarihler, sanal tarih, diyet hikayeleri
distrust|n.|güvensizlik
yapping|n.|çene çalma, boş boş konuşma
vigil|n.|gece ibadeti, uyanıklık, gece uyumama
problematic|adj.|problematik
conventions|n.|teamüller, yapılagelişler
smitten|adj.|rahatsız, vurgun, vurulmuş
craps|n.|kreps, çift zarla oynanan bir oyun, iki zarla oynanan kumar
invoke|v.|yardım istemek, yakarmak, (tanrıya) yakarmak
unconventional|adj.|alışılmadık, kalender, rahat
barnett|n.|missouri eyaletinde şehir
rundown|n.|özet, kısa bilgi, sağlıksız
oily|adj.|yağlı
coordinated|adj.|düzenlenen, düzenli, koordine
prejudiced|adj.|önyargılı
scrambling|n.|karıştırma, çalkalama, alp tırmanışı
seams|n.|damarlar (yüzeyde), dikişler, blok arası
eyelashes|n.|kirpikler
frannie|n.|wyoming eyaletinde yerleşim yeri
arose|v.|arise - arose, kalkmış
corky|adj.|hayat dolu, kuru, mantar gibi
discard|v.|ıskartaya çıkarmak, atmak (çıkarmak gibi)
purchasing|n.|satın alma, mübayaa, alış
ignacio|n.|kolorado eyaletinde şehir
hijack|v.|kaçırmak (uçak, gemi), soymak, soymak (kamyon/tren vb'ni)
yam|n.|tatlı patates, hint yer elması, yam
masquerade|n.|gerçeği gizleme, maskeli balo
logging|n.|ağaç kesme, tomrukçuluk, kesip taşıma
arises|expr.|gereksinim doğduğunda, eğer herhangi bir problem olursa, eğer herhangi bir sorun meydana gelirse
settlements|n.|yerleşim alanları
fetching|n.|gidip alma, alımlı, çekici
eagerly|adv.|bayıla bayıla, istekli, hevesle
wring|v.|wrung - wrung, çarpıtmak, ovuşturmak
orbital|n.|çevre yolu, yörünge, orbital
maggot|n.|sürfe, heves, böcü
umbrellas|n.|şemsiye
nationality|n.|uyruk, milliyet
cheddar|n.|çedar peyniri, çedar, çedar bir çeşit peynir
keel|v.|soğutmak, sıcak bir sıvıyı karıştırarak soğutmak, yaprak damarı
alignment|n.|sıra, hiza
heterosexual|n.|heteroseksüel, karşı cinse ilgi duyan, düzcinsel
fats|n.|yağlar
narrows|n.|dar boğaz, karık, narrows boğazı
heinz|n.|değişik kombinasyonlardan oluşan 57 bahis
irritate|v.|kızdırmak, sinirlendirmek, tahriş etmek
emissary|n.|casus, özel görevli, temsilci
taunting|n.|alay etme, sataşma, hakaret
hangman|n.|cellat, adam asmaca
cunts|n.|am, amcık, kancık
comma|n.|virgül
whimsical|adj.|garip fikirleri olan, kaprisli, maymun iştahlı
format|v.|format atmak, kitap düzenlemesi, sayfa düzeni
peachy|adj.|ala, şeftali gibi, çok güzel
godspeed|expr.|tanrı yolunu açık etsin, yolun açık olsun, allah yardımcın olsun
sony|n.|sony dv aygıtı, sony video kamera, sony çevre birimi
bleeping|v.|biplemek, bip bip yapmak, bip sesi çıkarmak
demonstrating|n.|gösteriş
jove|interj.|allah allah, vallahi, vay canına!
overflowing|n.|taşma
tully|n.|cicero'nun diğer adı, new york eyaletinde yerleşim yeri
censorship|n.|sansür
hispanic|adj.|ispanyol, ispanya'ya ait, hispanik
bestowed|adj.|bağışlanmış, verilmiş, bağışlayan
shuddering|n.|titreme, titreyen
fitch|n.|kokarca, radyatör fırçası, domuz kılı fırça
pathological|adj.|marazi, ayrıksı, anlamsız
silhouette|v.|siluetini yapmak, hayal meyal görüntü, taslak
obsessing|v.|bir şeyi kafasına takıp durmak
sugars|n.|insan tüketimine sunulan bazı şekerler
bachelorette|n.|bekar bayan
bonaparte|n.|iowa eyaletinde şehir
impartial|adj.|tarafsız, yansız
metabolism|n.|metabolizma, metabolizm, değişim
astronomical|adj.|aşırı, muazzam, gökbilimle ilgili
newcomers|n.|yeni gelen, yeni gelmiş kimse, yeni göçmen
tabloid|n.|tabloit gazete
vanquish|v.|hakkından gelmek, yenilgiye uğratmak, yenmek
slurps|v.|höpürdetmek, ağzını şapırdatarak yemek, höpür höpür içmek
preschool|n.|anaokulu, okulöncesi, okul öncesi
remake|v.|remade - remade, tekrar yapmak, yeniden yapmak
heresy|n.|sapıklık, sapkınlık
ag|n.|gümüş, sinirli, kızgın
ravishing|adj.|büyüleyici
finesse|v.|ustalıkla durumu idare etmek, [briç] empas atmak, beceri
minimize|v.|küçültmek
nigh|adj.|yakın, aşağı yukarı, hemen hemen
nil|n.|hiç, sıfır, var olmayan
astronomer|n.|gökbilimci, astronom, gök bilimci
selective|adj.|seçici, seçmeli
choo|n.|çuf çuf tren, lolipop yöntemi
arraignment|n.|davanın sanığa tebliği, kabahat yükleme, duruşmada sorgulama
crawley|n.|ingiltere'de yerleşim yeri
superpowers|n.|süper devlet, süper güçlü, süper güç
springer|n.|piliç, üzengi taşı, oklahoma eyaletinde yerleşim yeri
impenetrable|adj.|koyu, anlaşılamaz, içinden geçilmez (orman)
underdog|n.|kazanma şansı az olan kimse/takım, zayıf durumda olan ülke, ezilen kişi
gossiping|n.|dedikoduculuk
jig|v.|sevinçten oynamak, oynamak, şablon çıkarmak
poached|adj.|buğulama
sculpt|v.|yontmak
daniela|n.|kadın ismi
equator|n.|ekvator, ekvator çizgisi, eşlek
sexier|adj.|daha seksi
incorporate|v.|firma kurmak, içermek, anonim şirket haline getirmek
cath|n.|kateter, katedral, katolik
shivers|n.|titreme ya da ürperme nöbeti
vinyl|n.|vinil, izoleli dokuma, triko plastik
long-range|adj.|uzun menzilli, uzun menzilli (top), uzun vadeli
accumulated|adj.|birikmiş
malpractice|n.|görevi kötüye kullanma
ascend|v.|çıkmak, artmak, tahta çıkmak
ecosystem|n.|ekosistem, eko-sistem, ekodüzen
forefathers|n.|ata, cet
grit|v.|gıcırdamak, gıcırdatmak, kum tanesi
soles|n.|ayakkabı tabanları ve topukları, ayak tabanlarımı görmek ister misin?
determines|expr.|tavrın/davranışın seviyeni belirler, üslub-u beyan ayniyle insan, işlevin biçimini belirler
nylon|n.|naylon
blob|v.|damlamak, hata yapmak, leke
snug|v.|rahatını sağlamak, rahat ettirmek, küçük/özel oda
gladiators|n.|gladyatörler
collaborate|v.|işbirliği yapmak
clothed|adj.|giydirilmiş, giyinmiş
uproar|n.|curcuna, şamata
avail|v.|yaramak
gentry|n.|seçkinler, üst tabaka, eşraf
defied|v.|küçümsemek, karşı koymak, dayanmak
parkinson|n.|parkinson hastası, ileri dönem parkinson hastalığı, parkinson psikozu
prune|v.|budamak
hem|v.|kenarını kıvırıp dikmek, kıvırıp kenarını bastırmak, öksürmek
ellison|n.|zollinger ellison sendromu, zollinger-ellison sendromu
ning|n.|nanning
hide-and-seek|n.|saklambaç
lawfully|adv.|yasalara uygun bir şekilde, yasalara uygun şekilde, kanunlara uygun şekilde
fairfax|n.|güney carolina eyaletinde yerleşim yeri, güney dakota eyaletinde yerleşim yeri, iowa eyaletinde şehir
tumors|n.|tümörler
hots|v.|çok çekici bulmak, çok hoş bulmak, cinsel arzu/istek
cade|v.|evcilleştirmek, ardıç ağacı, yabani ardıç
ver|abrev.|sürüm
mimic|adj.|taklit
nacho|n.|peynirli biberli tortilla cipsi
gordo|n.|alabama eyaletinde şehir
thoughtless|adj.|düşüncesiz
thrice|adv.|üç defa, üç kere, üç kez
schoolboy|n.|erkek öğrenci, öğrenci, okul çocuğu
dusting|n.|tozunu alma, toz alma, dayak
tabloids|n.|tabloit gazete
mermaids|n.|deniz kızları
residual|n.|artık, kalıntı, kalan
striped|adj.|çubuklu, tekir (kedi), çizgili
dod|n.|boru kalıbı
blisters|adj.|kabarcıklı, iğnebaşı kabarcıklar, rekürran oral hemorajik bülleri olan hasta
aftermath|n.|akıbet, hasattan sonra çıkan otlar, son
stems|n.|kök hücreler, sukkulent gövdeler
inhaler|n.|solukla içeriye çeken, soluk aldırma cihazı, astım spreyi
reinforce|v.|pekiştirmek, sağlamlaştırmak, takviye etmek
qualifies|v.|vasıflandırmak, nitelendirmek
lube|v.|yağlamak, yağ
provoking|n.|kışkırtma, can sıkıcı, kışkırtan
continuum|n.|süreç, bütün, sürekli ortam
guan|n.|hindiye benzeyen büyük bir kuş
uma|n.|iguanagillerden bir kertenkele cinsi
observant|adj.|riayet eden, uyan, dikkatli
peng|adj.|harika, güzel
peppermint|n.|naneli, naneşekeri, nane
fused|adj.|birleştirilmiş, erimiş, kaynaşık
neanderthal|n.|ilkel, kaba veya kalın kafalı kimse, modası geçmiş fikirleri olan kimse, ilkel
dukes|n.|dizler, basur, yumruklar
pierrot|n.|palyaço, piyero
measurement|n.|ölçüm, ölçü
prima|n.|zor beğenen kimse, kendini beğenmiş kişi, kaprisli
authenticity|n.|gerçeklik, otantiklik
swagger|v.|kasılarak yürümek, kasıla kasıla yürümek, çalım
soundtrack|n.|film müziği
taipei|n.|tayvan'ın başkenti ve en büyük şehri
forman|n.|ustabaşı, kuzey dakota eyaletinde şehir
strut|v.|kasılarak yürümek, kurumla yürümek, çalımla yürümek
ensemble|n.|birlik, topluluk, koro
duval|n.|schiller-duval cisimcikleri
tantrum|n.|öfke nöbeti
motivate|v.|motive etmek
annihilate|v.|ortadan kaldırmak, imha etmek
signore|n.|bay
disrupted|adj.|bozulmuş, bozulan, altüst olmuş
divorcing|v.|boşanmak, boşamak, boşama
medics|n.|kabayonca, doktor, korunga
confided|v.|güvenip sırrını açmak
brandi|n.|bir kadın ismi
wreath|n.|çelenk
bale|n.|balya
clergy|n.|ruhban, rahip, rahipler sınıfı
aida|n.|bir tür pamuklu kumaş, tuval, aida
retaliate|v.|misilleme yapmak
genome|n.|genom, kalıtlar
vacancy|n.|boş yer, boşluk
tranquilizer|n.|sakinleştirici, müsekkin, sakinleştirici ilaç
diligence|n.|özenle ve sebat ederek çalışma, önlem, gayret
loops|n.|piko, iç içe döngüler, iç içe do döngüleri
impertinent|adj.|terbiyesiz, münasebetsiz, kendini bilmez
hwan|n.|hwan
advancement|n.|ilerleme
armpit|n.|koltuk, koltukaltı, koltuk altı
districts|n.|tarihi bölgeler, endüstriyel bölgeler, yargı yetkisi
cavalier|v.|centilmence davranmak, (kadınlara) kibar ve nazik davranmak, atlı
specializes|v.|uzmanlaşmak
chong|n.|çong, kamboçya ve tayland’da yaşayan etnik bir grup, limboo
combing|n.|tarama
self-control|n.|kendini ayarlama, kendini tutma, öz denetim
mascara|n.|maskara
revised|adj.|revize edilmiş, düzenlenmiş, gözden geçirilmiş
compulsion|n.|zorlanma, dürtü, baskı
bran|n.|kepek
buoy|v.|yüzdürmek, yüzmek, yükselmek
criticized|adj.|eleştirilen
adversity|n.|sıkıntılı bir durum, güçlük, üzgü
beneficiary|n.|lehtar
punjabi|n.|pencap, pencap dili, pencaplı
openings|n.|açıklık
graphics|n.|grafik sanatlar, grafik sanatı, gra-fostatik bilimi
huntsmen|n.|avcı, erkek avcı
ozone|n.|ozon
interpreted|adj.|yorumlanmış
incomprehensible|adj.|anlaşılmaz, anlaşılamayan
lenient|adj.|hoşgörülü, hafif, yumuşak davranan
perky|adj.|canlı, hoppaca, arsız
herod|v.|çok zalim olmak, insanca davranmamak, zalimlikle sindirmek
unavoidable|adj.|iptal edilemez, zorunlu, kaçınılmaz
retract|v.|geri çekmek
flowed|n.|o zamandan bu zamana çok şey değişti, köprünün altından çok sular aktı
compression|n.|özetleme, kısaltma, tazyik
demolish|v.|yıkmak
prodigal|adj.|müsrif, savurgan
generously|adv.|cömertçe
anonymously|adv.|imzasız bir şekilde, sahibi belli olmayarak, isimsiz bir şekilde
peabody|n.|kansas eyaletinde şehir, massachusetts eyaletinde şehir
crocker|n.|missouri eyaletinde şehir
amid|prep.|arasında, ortasına, arasına
youths|n.|gençlik
dispense|v.|dağıtmak, ilaç yapıp vermek, hazırlamak (ilaç vb)
roe|n.|balık yumurtası
telepathy|n.|telepati
occupational|adj.|iş, işgal kuvvetleriyle ilgili, meslekle ilgili
osgood|n.|indiana eyaletinde yerleşim yeri, missouri eyaletinde yerleşim yeri, ohio eyaletinde yerleşim yeri
roxie|n.|mississippi eyaletinde yerleşim yeri
loudspeaker|n.|hoparlör
yawn|v.|esnemek
hyena|n.|sırtlan
milkman|n.|sütçü
dal|n.|dekalitre
hillside|n.|yamaç, kıran, bayır
transcripts|n.|belge, suret, transkript
prevention|n.|menetme, önlem, engelleme
tout|n.|çığırtkan
toenails|v.|aşırı kusmak, kusmak
mazel|interj.|tebrikler (ibranice)
imaginative|adj.|hayal gücü kuvvetli
heretic|n.|kafir
hives|n.|biriktirim işlemleri, kurdeşen, ürtiker
squawk|n.|viyaklama
repression|n.|zaptetme, önleme, zorla önleme
arithmetic|adj.|aritmetik, hesap, sayı bilgisi
subsequently|adv.|sonra, sonradan, akabinde
clanks|v.|şakırdamak, tangırdamak, şıkırdatmak
renewal|n.|yenileme
shocker|n.|elektroşok cihazı, insanı şoke eden şey, en kötü örnek
spectacles|n.|gözlük
interval|n.|ara, zaman, müddet
quickie|n.|şipşak, kısa metrajlı film, çabuk yapılan şey
proceeded|adj.|ilerleyen, ilerlenen
prometheus|n.|prometeus
performs|v.|rol yapmak, yapmak, yerine getirmek
deadbeat|n.|borcunu ödemek istemeyen kimse, bedavacı, avantacı
burbank|n.|illinois eyaletinde şehir, kaliforniya eyaletinde şehir, oklahoma eyaletinde yerleşim yeri
geology|n.|jeoloji, yerbilim, yerbilimleri
withdrawing|n.|geri alma, geri çekilme, geri alarak
nav|n.|net varlık değeri
thi|pref.|kükürt anlamı veren ön ek, ısı-nem endeksi
sinus|n.|oyuk, beyindeki kirli kan kanalı, kovuk
kennel|v.|kulübeye koymak, köpek evine kapamak, köpek kulübesi
six-pack|n.|altı kutuluk paket, altı kutuluk karton, altılık bira/içecek
millennia|n.|bin yıllık dönemler
subscription|n.|abonelik
marquise|n.|markiz
warlord|n.|bölgesel askeri diktatör, savaş ağası, savaş beyi
zed|n.|z harfi
governors|n.|valiler
unintelligible|adj.|anlaşılmaz, anlaşılamayan, muğlak
dag|v.|yarmak, çiselemek, çiy
gaia|n.|gaia hipotezi
withheld|adj.|alıkoyma, tutulmuş
involuntary|adj.|istemsiz, istemeyerek yapılan
reciting|v.|nakletmek, anlatmak, sayıp dökmek
massacred|adj.|katledilmiş, katliam yapılmış, katliama uğramış
rosetta|n.|reşid taşı, rosetta taşı
boa|n.|boa, boa yılanı
oils|n.|yağlar
pelt|v.|taşlamak, taşa tutmak, seğirtmek
brittle|adj.|gevrek, kolayca kırılan
unprepared|adj.|hazırlıksız
willingness|n.|gönüllülük, içinden gelme, isteklilik
cutters|n.|tel makası, maliyeti indiren etmenler, freze bıçakları
ins|n.|iktidardakiler, yöneticiler, ins
coarse|adj.|kaba saba, kalın, kaba
walrus|n.|deniz aygırı, öküzbalığı, mors
portrayed|adj.|resmi yapılmış
contemplating|n.|tasarlama, iyice düşünme, niyet etme
blaster|n.|patlatman, patlatıcı, hasadı lanetleyen büyücü
scrubs|n.|ameliyat önlüğü, cerrah önlüğü, doktor önlüğü
defeats|v.|yenmek, bozguna uğratmak, mağlup etmek
hollering|n.|bağırtı
simmer|v.|yatışmak, kaynamak (gizli bir iş), içten içe kaynatmak
valencia|n.|valensiya, valensiya portakalı, ispanya'nın doğusunda bulunan bir şehir
annihilation|n.|imha, imha etme, ortadan kaldırma
textbooks|n.|ders kitapları
filipino|n.|filipin dili, filipin adaları yerlisi, filipince
tennyson|n.|indiana eyaletinde yerleşim yeri, teksas eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
ps|n.|polis çavusu, postskript
luv|n.|aşk, sevgi, sevgilerle
firewall|n.|ateş duvarı, bölme duvarı, güvenlik duvarı
lyons|n.|georgia eyaletinde şehir, indiana eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri
weld|v.|kaynak yapmak, kaynak
facade|n.|yapılarda ön cephe
conserve|v.|korumak, muhafaza etmek
divulge|v.|açıklamak, deşifre etmek, ortaya dökmek
gab|v.|zırvalamak, çok konuşmak, saçmalamak
ravens|n.|kuzgun
ta-ta|n.|hoşça kal, görüşürüz, atta
weirdos|n.|tuhaf tip, garip, garip tip
quartet|n.|dört sesli parça, dörtlü, kuartet
conferences|n.|konferanslar
dusted|adj.|toz halinde
silicone|v.|silikonlamak, silikon
clocked|adj.|kilometresiyle oynanmış
tanning|n.|tabaklık, sepicilik, debagat
breathless|adj.|soluğu kesen, korkutucu, nefesi kesilmiş
smacking|adj.|çevik, canlı
mantra|n.|mantra, dini hece veya şiir
vests|n.|sarı yelekliler hareketi
epiphany|n.|6 ocak´ta kutlanan bir yortu, tezahür, görünüş
motherhood|n.|analık, annelik
decor|n.|süsleme, dekor, süs
perch|v.|ilişmek, konmak, yerleştirmek
flux|v.|akıtmak, eritme, akış
maynard|n.|iowa eyaletinde şehir, massachusetts eyaletinde yerleşim yeri, minnesota eyaletinde şehir
totem|n.|ongun, totem, totem heykeli
secluded|adj.|tecrit edilmiş, kapalı, mahfuz
smother|v.|boğulmak, havasız bırakarak söndürmek (yangını), boğarak öldürmek
patronize|v.|faydası dokunmak, korumak, himayesine almak
mower|n.|biçme makinesi, orakçı, çim biçme makinesi
pediatrician|n.|çocuk doktoru, çocuk sağlığı uzmanı, çocuk hastalıkları uzmanı
bridesmaids|n.|nedime, gelinin nedimesi, geline eşlik eden kız
jehovah|n.|tanrı, yehova, tanrı'nın özel bir ismi
informants|n.|muhbir
thunk|v.|küt diye ses çıkarmak, gümlemek, dank
tract|n.|toprak, makale (özellikle din/siyaset konusunda bir), dini risale
pliers|n.|pense
harming|adv.|zarar vermeksizin, zarar vermeden, saçının teline halel getirmeksizin
pooch|v.|indirmek (bir düşmanı), köpek
coca-cola|n.|coca cola, coca cola distribütörü
anti|n.|muhalif, karşı, karşıt
reinstated|v.|yeniden görevine geri getirilmek
gland|n.|et bezi, bez, beze
stricken|adj.|yakalanmış, yaralı, uğramış
dials|v.|telefon numarası çevirmek
zeta|n.|yunan alfabesinin altıncı harfi
exes|n.|masraflar
haines|n.|alaska eyaletinde şehir
disputes|n.|anlaşmazlıklar
dizziness|n.|baş dönmesi, sersemlik
knowingly|adv.|bile bile
frida|n.|kadın ismi
newcastle|n.|irlanda'da yerleşim yeri, maine eyaletinde yerleşim yeri, oklahoma eyaletinde şehir
groves|n.|üniversite, makilik, missouri eyaletinde şehir
festivals|n.|festivaller
grudges|v.|kin beslemek, kin gütmek, kin duymak
blabbering|v.|kafa ütülemek, gevezelik etmek, çok aptalca konuşmak
plural|adj.|çoğul
curriculum|n.|müfredat, öğretim programı, öğretim izlencesi
firehouse|n.|itfaiye istasyonu, yangın istasyonu, itfaiye müfrezesi
coo|v.|ötmek, ötmek (kumru/güvercin), cıvıldamak
pug|v.|tuğla çamurunu yoğurmak, buldok benzeri küçük köpek, buldoğa benzeyen ufak bir cins köpek
clerks|n.|yazmanlar, katipler
savvy|v.|kavramak, bilmek, anlamak
chopin|n.|şopen
dictated|adj.|dikte edilmiş
siding|n.|taraf tutma, manevra hattı, tarafçılık
peking|n.|pekin
valor|n.|kahramanlık
dahlia|n.|dalya, dahlia, yıldızçiçeği
liras|v.|birine elli lira borcu olmak, birine 50 lira borcu olmak, yeni türk lirası
affordable|adj.|bütçeye uygun, ekonomik, düşük maliyetli
scrawny|adj.|cılız
disorderly|adj.|dağınık
psi|n.|psişik araştırma, temel politika aracı, neyman psi-kare sınaması
unattractive|adj.|itici, çirkin, cazibesiz
eulogy|n.|kaside, övme, sitayiş
marlow|n.|ingiltere'de yerleşim yeri, new hampshire eyaletinde yerleşim yeri, oklahoma eyaletinde şehir
felonies|n.|adam öldürme cürümleri, bilişim alanında cürümler, bilişim suçları
gingerbread|n.|zencefilli çörek, aşırı süslü, zencefilli
gent|n.|erkek, bey, centilmen
misdemeanor|n.|kötü davranış, kabahat, kusurlu davranış
spaniard|n.|ispanyalı, ispanyol
flagged|adj.|bayraklı, işaretli
optimist|n.|iyimser
mori|n.|ipek böceği, kara dut yaprağı, inuyasha_ikinci_kapanış
commons|n.|avam
waitresses|n.|garson kızlar
wanders|v.|başıboş dolaşmak, dolaşmak, amaçsızca dolaşmak
mugging|n.|saldırma, saldırı, saldırıp soyma
crammed|adj.|dolu, tıkış tıkış
baby-sit|v.|çocuk bakıcılığı yapmak, çocuk bakmak, bakıcılık yapmak
cayman|n.|timsah, tropikal timsah, güney amerika timsahı
accommodations|n.|yatacak yer, konfor
possessive|n.|iyelik belirten sözcük, paylaşmak istemeyen, iyelik
shutdown|n.|çalışmayı durdurma, kapama, işe son verme
compressed|adj.|basınçlı, sıkışmış, sıkıştırılmış
czechoslovakia|n.|çekoslovakya
geologist|n.|jeolog, yerbilimci
crossbow|n.|yaylı tüfek, tatar yayı, arbalet
aspiring|n.|talip olma, can atan, amaçlayan
autism|n.|içeyöneliklik, içe kapanma, içe yöneliklik
commandment|n.|buyruk, emir, allah'ın emri
fateful|adj.|vahim, önemli, öldürücü
rooftops|v.|davul çalmak, bütün dünyaya ilan etmek, duyurmak için can atmak
leningrad|n.|saint petersburg, rusya'da bir şehir
lexington|n.|alabama eyaletinde şehir, georgia eyaletinde şehir, güney carolina eyaletinde yerleşim yeri
archers|n.|okçular
cremation|n.|ölüyü yakma, ölü yakma, cesedin yakılması
petroleum|n.|petrol
diem|n.|gündelik, yevmiye, kıstelyevm ilkesi
moped|n.|motorlu bisiklet, küçük motosiklet, moped
clair|n.|açık belge teorisi, st. clair gölü, michigan eyaletinde şehir
blooms|n.|çiçekler
dysfunctional|adj.|işlevsiz, disfonksiyonel
picturing|n.|resim yapma, düşleme, düşün prpe
purchases|n.|alışlar
debrief|v.|sorguya çekmek, bilgi almak, -den bilgi almak
pulses|n.|bakliyat, baklagiller
make-believe|n.|hayal, hayal ürünü, sahtekar
barbershop|n.|berber, berber salonu, berber dükkanı
rana|n.|(eskiden) hindu hükümdarı, raca, rana
condone|v.|bağışlamak, görmezlikten gelmek, hoş görmek
excitedly|adv.|heyecanla
antarctic|n.|güney kutbu ve yöresi, güney kutbu, güney kutbuna ait
manned|adj.|güçlendirilmiş, tayfalı, insanlı
crafts|n.|uçak
awaited|adj.|beklenen, bekletilmiş
atkins|n.|iowa eyaletinde şehir
beards|n.|sakal
chaser|n.|kovalayan, avcı gemisi, çapkın
subbing|v.|yerine geçmek, yerini doldurmak, denizaltı
chatty|adj.|konuşkan
inez|n.|kentucky eyaletinde şehir
maintains|v.|sürdürmek, bakım yapmak, bakmak
readily|adv.|kolaylıkla, rahatlıkla, hemen anında
gunny|n.|çul
baffled|adj.|şaşırmış, şaşıp kalmış, şaşırtılmış
insatiable|adj.|doyumsuz
skater|n.|patinajcı, patenci, kaykaycı
jungles|n.|vietnam ormanları
upstanding|adj.|doğru, dürüst, dik
spacious|adj.|ferah
foolproof|adj.|dört dörtlük, mükemmel, salim
nutter|n.|çılgın, çatlak, kaçık
confine|v.|sınırlandırmak, kapatmak, kapamak
fam|n.|dost, kanka, arkadaş
diablo|n.|diablo yazıcı, diablo rüzgarları
leone|n.|batı afrika'da ülke, sierra leone cumhuriyeti, sierra leone
daydreaming|n.|düş kurma, dalıp gitme, ayakta uyuma
incest|n.|yakın akraba ile cinsel ilişki kurma, akraba ile cinsel ilişki, ensest
abba|n.|baba, yeni ahit'te tanrı, georgia eyaletinde şehir
unanswered|adj.|cevaplanmamış, karşılıksız, cevapsız
exaggeration|n.|abartı
shorten|v.|kısaltmak
biggs|n.|kaliforniya eyaletinde şehir
guise|n.|kılık, kılıf, giysi
graze|n.|sıyrık
clarinet|n.|gırnata, klarnet, kamışlı soluklu bir çalgı
cuddly|adj.|sevimli, kucaklanası, yumuşacık
americas|n.|kuzey, orta ve güney amerika anakarası, amerikalar, güney ve kuzey amerika
scavenger|n.|leşle beslenen hayvan, çöpçü, leş yiyen hayvan
middleman|n.|komisyoncu, aracı
garde|n.|öncü, yenilik yaratan, avangart
crusader|n.|bir davanın hararetli taraftarı, mücadeleci, haçlı
baa|v.|melemek, mee, meleme
propane|n.|propan
sickening|adj.|bıktırıcı, mide bulandırıcı, korkunç
thrills|n.|heyecan ve sürpriz dolu
toothache|n.|diş ağrısı
overhear|v.|overheard - overheard, kulak misafiri olmak
altercation|n.|münakaşa, kavga, atışma
tudor|n.|tudor, tudor krallarına ait, tudor mimarisine ait veya ilgili
freckles|n.|çiller
furthest|adj.|en uzak, en fazla, en çok
fuses|n.|sigortalar
swamps|n.|bataklık
ambassadors|n.|büyük elçiler
superpower|n.|süper devlet, süper güçlü, süper güç
enraged|adj.|kızdırılmış, komalık, öfkeli
loomis|n.|kaliforniya eyaletinde şehir, nebraska eyaletinde yerleşim yeri
unpopular|adj.|popüler olmayan, tutulmayan, rağbet görmeyen
locating|n.|yerleştirme, bulma
ordinance|n.|ferman, alın yazısı, talimatname
grocer|n.|bakkal, toptancı
courtship|n.|kur
pics|n.|pıcs derecelendirme, pics derecelendirmeleri, pıcs kural dosyası
ripple|v.|hafifçe dalgalanmak, dalgacık
smashes|v.|paramparça etmek
conjure|v.|sihirle çıkarmak, hokkabazlık yapmak, rica etmek
winch|v.|vinçle çekmek, vinçle kaldırmak, bocurgat
shipments|n.|iade sevkiyatı, özel gönderiler, gelecek sevkiyatlar
hustling|n.|itişip kakışma, sıkboğaz, tez canlı
glorified|adj.|övülmüş, kaliteli, övülen
spied|v.|gözlenmek
cabinets|n.|donmuş gıda depolama dolapları, soğutmalı vitrin dolapları
cylinders|n.|silindirler
mongrel|n.|melez
dui|n.|bir maddenin etkisi altında araç kullanma
chlorine|n.|klor, klorin, klor (kimyasal simgesi cl)
radiology|n.|ışınbilim, radyoloji, röntgenbilim
hadley|n.|massachusetts eyaletinde yerleşim yeri, minnesota eyaletinde şehir, new york eyaletinde yerleşim yeri
oscars|n.|çük, penis, kobra
projections|n.|iz düşüm metotları, dış çıkıntılar, motorlu araçların dış sinyal lambaları
soggy|adj.|sırsıklam, pek sulu toprak, batak gibi
regal|adj.|krallık, krallara layık, krala yakışır
assumes|v.|üstlenmek, saymak, farz etmek
boycott|v.|boykot etmek, boykot yapmak, mal almamak
progressed|adv.|zaman ilerledikçe, zaman geçtikçe, ilerletilmiş harita
telescopes|n.|teleskop
bradshaw|n.|batı virginia eyaletinde yerleşim yeri, nebraska eyaletinde yerleşim yeri
pats|n.|ford’un pasif güvenlik sistemi
unclean|adj.|pis, kirli
banners|n.|büyük başlıklar
mesa|n.|masatepe, yüksek ova, mesa
consumers|n.|tüketiciler
germ|n.|mikrop
stafford|n.|connecticut eyaletinde şehir, ingiltere'de yerleşim yeri, kansas eyaletinde şehir
excursion|n.|gezinti, kısa yolculuk, farklılık
heartland|n.|bir yerin/kültürün kalbinin attığı yer, bir yerin/kültürün kalbi, bir bölgenin en merkezi ya da önemli kısmı
gm|n.|grams
spontaneously|adv.|spontane, anında, kendiliğinden
dun|v.|borçluyu sıkıştırmak, sıkıştırmak, alacağını istemek
initiating|n.|başlatma
modifications|n.|tadilat, değişiklik, değişiklikler
feces|n.|dışkı
alcoholics|n.|alkolikler
horde|v.|sürümek, toplanmak, göçebe ve ilkel yaşamak
grips|v.|ile kapışmak, esaslarını ele almak, ile ciddi bir şekilde ilgilenmek
premise|n.|öncül
scorpions|n.|akrep kuyruğu kırbacı, büyük ceza, canına okunma
campaigning|n.|seçime katılan adayın kampanyası
obstinate|v.|inatçılık etmek, inatçı
fiver|n.|beşlik banknot, beş dolar, beş paund
outburst|n.|patlak verme, taşkınlık, infilak
diaphragm|n.|diyafram
handbook|n.|rehber, el kitabı, el kitapçığı
rudolf|n.|kenya'da bir göl
derived|adj.|elde edilmiş, çıkarılmış, ayrılmış
croak|v.|kurbağa sesi çıkartmak
executing|n.|yürütme
interim|n.|aralık, geçici şey, fasıla
snowed|v.|başını kaşıyacak vakti olmamak, kardan mahsur kalmak, bunalmak
rosary|n.|tespih, tespih (dua okurken kullanılan), gül bahçesi
scourge|v.|kırbaçlamak, zarar vermek, cezalandırmak
drowns|v.|suda boğulmak
crore|n.|on milyon
tic|v.|tiki olmak, tik olmak, tik
adrift|adj.|akıntı ve rüzgarla sürüklenmiş, başıboş
bisexual|adj.|biseksüel, biseksüel kimse
pointers|n.|işaretçiler
eradicate|v.|kökünü kurutmak
spunk|n.|yüreklilik, alev, cesaret
snyder|n.|nebraska eyaletinde yerleşim yeri, oklahoma eyaletinde şehir, teksas eyaletinde şehir
three-way|adj.|üç yollu, üçlü cinsel ilişki
self-conscious|adj.|ne yaptığını bilen, mahcup, kendini bilen
hyper|adj.|aşırı, yukarı, hiper
inning|n.|şans, kısmet, atış
expendable|n.|gereksiz şeyler, (tek kullanımlık) malzeme, gözden çıkarılabilir
addams|n.|addams ailesi
noelle|n.|kadın ismi, bir kadın ismi
ono|n.|veya en yakın teklif
sutter|n.|kaliforniya eyaletinde şehir
hazy|adj.|puslu
relocate|v.|yerini değiştirmek, yeni yerine geçmek
alleys|n.|pasaj, ağaçlıklı yol, patika
sunflower|n.|ayçiçeği
irritable|adj.|asabi
hanger|n.|askı
silky|adj.|ipekli, tatlı (ses), ipeksi
tricking|n.|dolandırma, oyuna getirme, kandırma
popsicle|n.|buzlu şeker, çubukta buzlu şeker, buzlu dondurma
urging|n.|sevk, teşvik etme
moroccan|n.|faslı, fas'a özgü, fas
encyclopedia|n.|ansiklopedi
stripe|v.|çizgi çizgi yapmak, kamçı darbesi, tür
stationary|adj.|hareketsiz, yerleşik, sabit
ptsd|n.|travma sonrası stres bozukluğu
second-hand|adj.|kullanılmış, ikinci elden, müstamel
sermons|n.|vaazlar
dink|n.|çift gelirli çocuksuz aile, çift gelirli çocuksuz evli çift, salak
parched|adj.|kavrulmuş, çok kuru, susuz kalmış
guinness|n.|guinness rekorlar kitabı
ravioli|n.|ravioli, italyan usulü mantı, İtalyan mantı makarnası
predicting|n.|önceden haber verme, öngörme
excruciating|n.|işkence etme, şiddetli, eziyetli
consensual|adj.|karşılıklı mutabakata dayalı, karşılıklı anlaşmaya dayalı, ortaklıkçı
compute|v.|hesaplamak, tahmin yürütmek, hesap etmek
trays|n.|tepsiler
overjoyed|adj.|aşırı sevinçli, ağzı kulaklarında, çok memnun
liberals|n.|erkin, liberal görüşlü kimse, erkinci
warehouses|n.|ambarlar, bakım deposu
stereotype|n.|basmakalıp inanış, klişe
cartridges|n.|filtre elemanı, süzgeç, esnek disk kartuşları üzerinde veri değişimi
whitaker|n.|pensilvanya eyaletinde yerleşim yeri
raiding|n.|akın etme, baskın yapma, baskına katılma
sustainable|adj.|güçlendirilebilir, sürdürülebilir, dayanılır
commissar|n.|komiser, eski rusya'da bakan, sscb'de komiser
soiled|adj.|kirli, bulaşık, kirletilmiş
standpoint|n.|bakış açısı, görüş açısı, görüş noktası
fruity|adj.|fazla nağmeli (insan sesi), meyvalı, meyveli
rafa|v.|shelve (something), put (something) aside
creams|n.|göğüsler, memeler
watcher|n.|izleyici, bekçi
thereafter|adv.|sonra, ondan sonra, bundan sonra
drifter|n.|serseri, avare, aylak
financed|v.|finanse edilmek, bütçe açıklarının parayla finansmanı, borçla finanse edilen bütçe açıkları
intimately|adv.|samimiyetle, çok yakından, içtenlikle
wrapper|n.|kaplık, saran kimse, eşarp
spectator|n.|seyirci, izleyici, temâşâcı
purest|adj.|en saf
raisin|n.|kuru üzüm, koyu kahverengimsi mor
alchemy|n.|alşimi, simya, simya ilmi
antimatter|n.|karşı madde, karşıt özdek, karşıt madde
withered|adj.|solmuş
saki|n.|bir tür güney amerika maymunu, saki
rutherford|n.|ruterfort, rutherford, new jersey eyaletinde yerleşim yeri
shovels|n.|kürekler
piers|n.|köprü ayakları, kagir ayaklar
deprivation|n.|mahrumiyet, yoksunluk
landon|v.|alana inmek
curing|n.|iyileştirme, otama, kürleme
deluded|adj.|kandırılmış, aldatılmış
rumored|adj.|söylenti çıkarılmış, konuşulan (dedikodu vb), dedikodusu yapılan
eject|v.|çıkarmak
qc|n.|müsteşar, müşavir
caved|adj.|göçük
mackey|n.|indiana eyaletinde yerleşim yeri
binds|n.|görüşülmüş bağdaştırmalar, yalın bağlantılar, dpa/ntlm bağı sayısı
nailing|n.|çakma, kakma, çivileme
botched|adj.|çırpıştırma, şişirme, suyuna tirit
pinto|n.|benekli at, benekli ufak at
tinkle|v.|çınlamak
nfl|n.|amerikan milli futbol ligi, ulusal futbol ligi
supplement|n.|ek
tragedies|n.|yunan trajedileri
overcooked|adj.|çok pişmiş, fazla pişmiş
immersed|adj.|batmış, dalmış, daldırılmış
crucifix|n.|çarmıh
tamed|adj.|ehlileştirilmiş, evcilleştirilmiş, vahşi olmayan
czar|n.|çar, lider, tiran
withhold|v.|alıkoymak, saklamak
seismic|adj.|sismik, depremsel, depremden ileri gelen
asphalt|n.|asfalt
charred|adj.|alazlanmış, yakılmış
bowed|adj.|eğri
floorboards|v.|alabildiğine gazlamak, döşeme tahtası, döşemelik tahta
tycoon|n.|büyük işadamı, kodaman
defects|n.|kusurlar, problemli haller
aristocrat|n.|aristokrat
vocals|v.|geri vokal yapmak
recurring|adj.|tekerrür eden, geri gelen, hortlayan
epilepsy|n.|sara, epilepsi, tutarık
shakily|adv.|sallanır bir şekilde
self-centered|adj.|hep kendini düşünen, kararsız, bencil
poachers|n.|kaçak avcı, kaçak avlanan kimse, yasak bölgeye giren kimse
garments|n.|giysi
welcomes|interj.|hoş geldiniz, hoş geldin
balm|n.|balsam
nagasaki|n.|nagazaki
cooker|n.|ocak
swaying|n.|sallanma, sallanan, savrulma
smart-ass|n.|ukala
georgetown|n.|delaware eyaletinde şehir, georgia eyaletinde şehir, güney carolina eyaletinde şehir
pardoned|adj.|affedilmiş, affa uğramış, affolunmuş
mach|n.|uçağın ses hızına oranla hızı, mak ses hızı
moors|n.|mağripliler, mağribiler, palamar
yippee|interj.|yaşasın!, yihhu, oley
sheds|v.|dökmek (gözyaşı vb), dökmek, kulübe
quirky|adj.|ilginç, garip, acayip
steamer|n.|gemi, vapur, buharlı vapur
nim|v.|çalmak, aşırmak
flunked|n.|takıntı
sparring|n.|tartışma
sabina|n.|ohio eyaletinde yerleşim yeri
ceases|v.|son vermek, dinmek, durmak
nesting|n.|gömme, iç içe koyma, yuvalama
blackberry|n.|böğürtlen
fiercely|adv.|şiddetle, cayır cayır
impound|v.|el koymak, toplamak, kanunen el koymak
ucla|n.|kaliforniya üniversitesi, los angeles
bengal|n.|bengal kaplanı, işaret ışığı, bengal gülü
cache|v.|saklamak, gizli bir yere saklamak, gizlemek
lifeboat|n.|filika
creme|n.|kaymak, krem
hallie|n.|wisconsin eyaletinde yerleşim yeri
rhine|n.|ren nehri, georgia eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
consequently|adv.|sonuç olarak
revolutions|n.|devrimler
shim|n.|kıskı, dolgu, takoz
rosewood|n.|gül ağacı, pelesenk ağacı, gülağacı
larvae|n.|larva
yeti|n.|yeti
fluttering|n.|çırpınma
occupying|n.|işgalci güçler, işgalci devlet, supratentoriyal yer kaplayan lezyonlar
aphrodite|n.|yeşile bakan parlak bir turkuaz tonu, afrodit
cools|v.|soğuyana kadar bekletmek, soğuyana kadar bekletin, soğuyana kadar beklet
snuggle|v.|sokulmak
riled|v.|sinirlenmek, kızmak, sinir yapmak
turnover|n.|ciro
misleading|adj.|yanıltıcı
presiding|n.|başkanlık komitesi, duruşma hakimi, mahkeme başkanı
accessing|n.|erişim
kicker|n.|çifte atma huyu olan at, şikayetçi, vuran şey ve kimse
pre|pref.|önce
hosted|v.|ağırlanmak, ortak/müşterek ev sahipliği yapılmak, ev sahipliğinde düzenlenen
ordained|adj.|buyurulmuş, emredilmiş
nassau|n.|bahamalar'ın başkenti, minnesota eyaletinde şehir, new york eyaletinde yerleşim yeri
hombre|n.|adam, herif
brazen|adj.|utanmaz, pirinç gibi, yüzsüz
prof|n.|profesör, prof
stitching|n.|dikiş
nook|n.|kuytu yer, kuytu, bucak
splashes|n.|sıçrayan sular, su sıçramaları
cyclone|n.|tufan, kasırga, kiklon
lovingly|adv.|sevgi ile
colonists|n.|sömürgeci
researched|adj.|yeterince araştırılmamış
physicians|n.|doktorlar, hekimler
hogs|v.|horlamak
unwise|adj.|zeki olmayan, akılsızca olan, mantıksız
affliction|n.|üzme, ıstırap, bela
aspire|v.|heveslenmek, can atmak, talip olmak
dow|n.|üçgen yelkenleri olan gemi
hooch|n.|içki, ev yapımı hücre şarabı
lacerations|n.|keskin kısımlar
tasteless|adj.|zevksiz, lezzetsiz, tatsız
deirdre|n.|kadın ismi
welch|v.|ödemeden kaçmak, sözünü tutmamak, şartları yerine getirmemek
unbreakable|n.|kırılmaz eşya, kırılmaz nesne, kırılması zor olan eşya veya nesne
carnal|adj.|dünyevi, cinsel, şehevi
generic|adj.|üretken, kapsamlı, cinse özgü
melodramatic|adj.|melodram türünden, melodram tarzında, aşırı duygusal
distressing|adj.|üzüntülü, acıklı, üzücü
sentinel|v.|gözetlemek, nöbetçi yerleştirmek, nöbetçi
lifetimes|n.|ömür
yelping|n.|acı acı havlama
projecting|adj.|çıkıntılı, çıkık, taşkın
nepal|n.|nepal
unattended|adj.|sahipsiz
hellhole|n.|cehennem gibi yer, cehennem çukuru, cehennem deliği
renault|n.|renault 12 otomobil
efficiently|adv.|yeterli olarak, verimli biçimde, etkin
gonzales|n.|kaliforniya eyaletinde şehir, louisiana eyaletinde şehir, teksas eyaletinde şehir
wobbly|adj.|titrek (ses)
recruitment|n.|işe alım, askere alma
lasalle|n.|illinois eyaletinde şehir
reek|v.|tütmek, duman çıkarmak, kötü kokmak
emphasize|v.|vurgulamak
melons|n.|iri memeler, iri göğüsler
dept|n.|amort numarası, bölüm adı, sorumlu bölüm
chore|n.|zevksiz iş, günlük ev işi, angarya
scat|v.|yaylanmak, kaçmak, tabanları yağlamak
aired|adj.|havalandırılmış, havadar, havalı
chardonnay|n.|chardonnay üzümünden yapılan beyaz şarap, chardonnay üzümü
nigeria|n.|nijerya
meats|n.|kalın lastikler, etler
monetary|adj.|parasal
lowry|n.|güney dakota eyaletinde yerleşim yeri, minnesota eyaletinde şehir
tormenting|n.|fiziksel veya ruhsal acı veren durum, ıstıraplı
combining|n.|kaynaştırma, birleştirme, birleştiren
vixen|n.|cadaloz, dişi tilki
napping|n.|napaj, şardonlama, tüylendirme
deactivate|v.|etkisizleştirmek, devre dışı bırakmak
goblins|n.|gulyabani, cin, cüce cin
busts|v.|busted/bust - busted/bust, bozulmak, iflas ettirmek
regrettable|adj.|üzücü, acınacak, müessif
ugliest|n.|en çirkin
tac|n.|güney afrika'da kurulan tedavi hareket grubu
evasion|n.|kaytarma
clementine|n.|bir mandalina çeşidi, klementine mandalina
overworked|adj.|fazla çalışmış, çok çalışmış
pta|n.|veli toplantısı, pta test, okul aile birliği toplantısı
waterproof|adj.|su geçirmez
alamo|n.|kavak, akkavak, georgia eyaletinde şehir
salome|n.|kadın ismi, arizona eyaletinde şehir
halibut|n.|kalkana benzer yassı balık, pisi balığı
communicator|n.|haber verici, iletişimci, konuşkan kimse
laced|adj.|bağlı, dantelli, renkli çizgileri olan (çiçek vb.)
fuels|n.|gaz yakan aletler, nükleer yakıtlar, motor yakıtları
phi|n.|fi
supervising|n.|denetleme, kontrol etme, idare etme
slogans|v.|slogan atmak, hükümet aleyhine slogan atmak, terör örgütü lehine slogan atan göstericiler
garnish|v.|süslemek, süs
spruce|v.|çeki düzen vermek, düzenlemek, şıklaştırmak
seducing|adj.|fettan, günaha çağıran
implicate|v.|sezdirmek, töhmet altında bırakmak, bulaştırmak
leper|n.|cüzamlı, dışlanan kimse, cüzzamlı
unpacking|n.|ambalajından çıkarma, ambalajdan çıkarma, açma
germaine|n.|kadın ismi
ponder|v.|fikir yormak, düşünmek, ölçüp tartmak
nicknamed|adj.|adlandırılan, lakaplı, rumuzlu
femur|n.|kalça kemiği, uyluk, uyluk kemiği
detonated|n.|komuta infilaklı mayın
technicality|n.|teknik detaylara dayanma, teknik detay, teknik ayrıntı
double-check|v.|çifte kontrol yapmak, çifte kontrol etmek, tekrar kontrol etmek
situated|adj.|konum, yerleşmiş, bulunan
vindictive|adj.|kinci, kindar
twit|v.|takılmak, kızdırmak, sataşmak
obeying|n.|uyma, riayet, boyun eğme
waldorf|n.|minnesota eyaletinde şehir
larissa|n.|kadın ismi, yenişehir, larisa
hypocrites|n.|ikiyüzlü kimse, mürai, iki yüzlü
shogunate|n.|mutlak idare
mural|n.|duvar resmi, müray, fresk
enlarged|adj.|temdit edilebilen, süresi uzatılabilen, genişletilmiş
glittering|n.|deniz tutması, pırıldama, yalabık
woven|adj.|dokunan, dokunmuş, dokuma
contender|n.|çekişen, rakip, yarışmacı
orpheus|n.|orfeus
illnesses|n.|eşlik eden hastalıklar
captures|n.|ekran görüntüleri
hammock|n.|hamak, ağ yatak, salıncak
prolong|v.|uzatmak
gallop|v.|eştirmek, dört nala gitmek, koşturmak
lieutenants|n.|teğmen
whistler|n.|ıslık çalan
chihuahua|n.|bir köpek türü, şivava
tehran|n.|tahran
pasadena|n.|kaliforniya eyaletinde şehir, teksas eyaletinde şehir
stroller|n.|bebek arabası
bs|n.|ingiliz standartları
issuing|n.|çıkarma, ihraç, çıkaran
ie|adv.|şöyle ki, yani, u dönüşü yapmak
foes|n.|hasım
tig|n.|ebelemece oyunu, vuruş yapmak, koşmak
proprietor|n.|arazi sahibi, yapı iyesi, ticari bir kuruluşun sahibi
speciality|n.|uzmanlık, özellik
centered|adj.|ortalanmış, ortalı, öz-güven sahibi
granting|n.|bağışlama
hindus|n.|hinduizm, hintli, hindu
gills|n.|katmerli çene, panjurlar, solungaçlar
sos|n.|uluslararası yardım çağrısı, sos tehlike halinde verilen imdat sinyali, imdat
edwina|n.|kadın ismi
mistresses|n.|metresler
fingernail|n.|tırnak, parmak tırnağı
starry|adj.|çok yıldızlı, yıldızı, yıldızı çok olan
hubbard|n.|iowa eyaletinde şehir, ohio eyaletinde şehir, nebraska eyaletinde yerleşim yeri
lolly|n.|para, mangiz, mangır
sit-down|v.|oturmak
delaying|n.|tavik, eğlenme, geciken
savoy|n.|kıvırcık lahana, illinois eyaletinde yerleşim yeri, massachusetts eyaletinde yerleşim yeri
fahrenheit|n.|fahrenhayt, fahrenayt
chaste|adj.|cinsel ilişki yaşamamış
night-night|interj.|iyi geceler!
buttercup|n.|düğün çiçeği, düğünçiçeği, acı düğün çiçeği
barricades|v.|barikat kurmak
berth|v.|yatacak yer bulmak, palamarla bağlamak, yatak yer vermek
stoner|n.|otçu, uyuşturucu müptelası, taş ayrıcı
hitter|n.|smaçör
anonymity|n.|yazarı bilinmeme, imzasızlık, gerçek ismini saklama
clippings|n.|kırpıntı, kırpıntılar, kırpılan şeyler
mod|adj.|şık, modern, kip
dia|n.|diya, değişke
dodd|n.|teksas eyaletinde şehir
insecurity|n.|güvensizlik
contests|expr.|çok çirkin, çirkin, çirkinlik abidesi
incriminate|v.|suçlamak, suçu yüklemek, suçlu çıkarmak
variable|adj.|değişken
chloroform|v.|kloroform vermek, kloroform ile öldürmek, kloroform ile bayıltmak
essays|n.|denemeler
poised|adj.|dengeli, dengelenmiş, harekete hazır
abrupt|adj.|birdenbire oluveren, ani
co-worker|n.|iş arkadaşı
hauser|n.|idaho eyaletinde şehir
exodus|n.|göç, beni israilin mısırdan hicreti, umumi çıkış
refinery|n.|rafineri
browns|n.|illinois eyaletinde yerleşim yeri, sigara
gonzo|n.|kaçık, zıpır
proclaimed|adj.|ilan edilmiş, duyurulmuş, deklara edilmiş
kuwait|n.|kuveyt
rustic|adj.|rüstik, köye ait
dislocated|adj.|çıkık, yerinden çıkmış (eklem vb)
celsius|n.|santigrat, selsiyus
intervened|v.|araya girmek
mane|n.|yele
confessional|n.|günah çıkartma hücresi, günah çıkarma hücresi, itiraf ile ilgili
tagging|n.|etiketleme, takip cihazı ile izleme, fişleme
pinching|n.|aşırma, kısma, cam boru ucunu kapatma
sideshow|n.|küçük performans
allegation|n.|iddia
polio|n.|çocuk felci, poliomyelit, polyo
hoe|v.|çapalamak, çapa, gelberi
motorway|n.|otoyol, asfalt, ekspres yol
sayonara|interj.|güle güle, hoşçakal
lastly|adv.|son olarak, nihayet
duped|v.|kül yutmak, dolaba girmek, mantara basmak
spout|v.|püskürtmek, heyecanla okumak, hararetli bir biçimde konuşmak
mun|n.|kon pua, puok, pua
undergoing|adj.|süregelen, süren
smothered|adj.|boğularak öldürülmüş
nowt|n.|hiçbir şey, hiç
micro|n.|mikrobilgisayar, minik, küçük
teapot|n.|çaydanlık
diplomats|n.|diplomatlar
exhibits|n.|anlaşma ekleri, sergilenen mallar
confronting|n.|zıtlaşma, çelişen, yüzleşen
healthcare|n.|sağlık hizmeti
mattresses|n.|döşeklerin yanabilirliği, döşeklerin dayanıklılığı ve sertliği
buick|v.|kusmak, çıkarmak, içi dışına çıkmak
toxicology|n.|zehirbilim, ağıbilim, toksikoloji
liberating|adj.|özgürleştirici
climber|n.|tırmanıcı sarmaşık, toplumda hep gözü yükseklerde olan kimse, dağcı
opal|n.|opal
reba|n.|bir kadın ismi
contend|v.|uğraşmak, çarpışmak, çekişmek
built-in|adj.|gömme, ankastre
lamont|n.|iowa eyaletinde şehir, oklahoma eyaletinde yerleşim yeri, oklahoma eyaletinde şehir
switchboard|n.|santral, telefon santrali, elektrik dağılım tablosu
yap|v.|havlamak, acı acı havlamak, havlamak (ufak köpek kesik ve tiz bir sesle)
insights|n.|içyüzünü anlama
disoriented|adj.|kafası karışmış, yolunu kaybetmiş, zihni karışmış
meditating|v.|tefekkür etmek, düşünceye dalmak, dalmak
nightclubs|n.|gece klübü, taverna, gece kulübü
cater|v.|temin etmek, ihtiyacını karşılamak, sağlamak
emeralds|n.|zümrüt yeşili, zümrüt, zümrüt rengi
facilitate|v.|hafifletmek, rahatlatmak, olanak tanımak
vigorous|adj.|dinç
all-american|adj.|yüzde yüz amerikan, sadece amerikalılardan oluşan, tipik amerikan
intervals|n.|aralıklar, ara resimler
excel|v.|cebinden çıkarmak, sivrilmek, gölgede bırakmak
appetit|n.|afiyet olsun, afiyet olsun!
reggae|n.|reggae, rege, regi
plastics|n.|yoğruk, plastik, plastikler
revere|v.|saygı göstermek, önünde saygı ile eğilmek, kutsamak
lore|n.|irfan özellikle eski zaman bilgileri, ilim, bilgi
creditors|n.|alacaklılar, kredi verenler, satıcılar
resented|v.|alınmak, içerlemek
blossomed|v.|çiçek açmak
activating|n.|harekete geçirme, etkinleştirilme, aktive edici
composite|n.|terkip, bileşim, halita
hindsight|n.|önemini sonradan anlama, geç anlama
mummies|n.|edebiyatta mumyalar
bedding|n.|katmanlaşma, gelembe, yatak takımı
craven|adj.|namert, korkak, korkakça
first-rate|adj.|üstün kaliteli, ekstra, mükemmel
songwriter|n.|şarkı yazarı, söz yazarı
scented|adj.|kokulu
plankton|n.|plankton, su ile hareket edebilen canlılar
baird|n.|teksas eyaletinde şehir
locomotive|n.|lokomotif
ticked|adj.|benekli, alacalı, iki veya daha fazla renkle boyanmış (saç)
mapped|adj.|haritalanmış, eşlenmiş
jolt|v.|şaşırtmak, dürtmek, şaşkına çevirmek
reforms|n.|tanzimat, ıslahat
overcoat|n.|manto, palto, pardösü
bishops|n.|piskoposlar
conscientious|adj.|özenli, dikkatli, vazifeşinas
venetian|n.|venedikli, güderi kumaş
logistics|n.|lojistik sanatı, lojistik
dieter|n.|diyet uygulayan kişi
rampant|adj.|şahlanmış
were-|v.|bölgeden yer yer çatışma haberleri gelmek, alınan kararlar, adeta
waverly|n.|alabama eyaletinde şehir, güney dakota eyaletinde yerleşim yeri, georgia eyaletinde şehir
whitehall|n.|ingiliz hükümeti, ingiliz hükümeti politikası, batı virginia eyaletinde yerleşim yeri
hock|v.|diz içi kirişlerini kesmek, rehin bırakmak, rehine vermek
chrome|n.|kromat sarısı renk, krom bileşiği, kromat sarısı boya
sandman|n.|uyku perisi
balancing|n.|denge, simetriklik, düzgünlük
canals|n.|kanallar
oxen|n.|öküzler, öküz (çoğul)
superhuman|adj.|insanüstü, insanüstü gayret, fevkalbeşer
ein|n.|işyeri kimlik numarası, federal vergi kimlik numarası
rogues|n.|sabıkalı albümü, azılı suçlular geçidi/albümü/sergisi gibi, suçluların fotoğraflarının bulunduğu katalog
dossier|n.|sicil, evrak dosyası, dosya
waxed|adj.|mumlanmış, parafinli, ağdalı
infested|adj.|kuşatılan, istila edilmiş
benz|n.|mercedes-benz marka araç/araba, benzedrin, benzedrin hapı/kapsülü
folklore|n.|halk bilgisi, halkıyat, halkbilim
double-cross|v.|ihanet etmek, dolandırmak, kazıklamak
turban|v.|sarık gibi başa dolamak, sarık sarmak, türban gibi dolamak
carriages|n.|koltuk kaidesi, çatal kol taşıyıcı tablaları
warm-up|n.|ısınma
lanka|n.|sri lanka, demokratik sosyalist sri lanka cumhuriyeti, colombo
ade|n.|meyve suyu
recycled|adj.|yeniden kazanılmış, geri dönüştürülmüş, geri dönüşmüş
alden|n.|iowa eyaletinde şehir, kansas eyaletinde şehir, minnesota eyaletinde şehir
busiest|adj.|en meşgul
courteous|adj.|nazik, kibar
baptize|v.|vaftiz etmek
bowing|n.|eğilme (kaplama), eğrilik
ventura|n.|iowa eyaletinde şehir, kaliforniya eyaletinde şehir
pamphlets|n.|kitapçık, el ilanı, risale
amiss|n.|ters, eksik, hatalı
hex|v.|nazarı değmek, büyü yapmak, uğursuzluk
swapping|v.|değiş tokuş yapmak, değiş tokuş, getir-götür
detergent|n.|deterjan
afflicted|adj.|bağrı yanık, zihinsel özürlü, üzgün
overalls|n.|iş tulumu, iş elbisesi, tulum
reboot|v.|yeniden açmak, sistemi yeniden yüklemek, sistemin yeniden yüklenmesi
pining|n.|iliştirme
nazareth|n.|israil'de nasıra şehri, pensilvanya eyaletinde yerleşim yeri
insubordination|n.|itaatsizlik, baş kaldırma, başkaldırma
sputters|v.|heyecanla söylemek, sönecek gibi titremek (alev), sıçramak
slammer|n.|hızla çarpan kimse (kapı vb), mapushane, mahpushane
vices|n.|yedi ölümcül günah
dungeons|n.|yedikule zindanları
binary|adj.|ikili
hesitating|adj.|duraksayan, tereddüt eden, tereddütlü
attendants|n.|maiyet, katılımcılar, hazırun
fined|adj.|cezalı, ceza almış, ceza yemiş
sanford|n.|florida eyaletinde şehir, maine eyaletinde yerleşim yeri, north carolina eyaletinde yerleşim yeri
excrement|n.|kaka, dışkı, ters
dictates|n.|vicdana yön veren ilkeler, kişinin doğru bildiği ilkeler bütünü, vicdanın direktifleri
epstein|n.|epstein deneyi, ebstein anomalisi, epstein hastalığı
swims|expr.|görünen köy kılavuz istemez, göründüğü gibi, neyse o
ethic|n.|ahlak sistemi, ahlak, ahlaklı
boulders|n.|aşınmış büyük kayalar
lockwood|n.|missouri eyaletinde şehir
bucharest|n.|bükreş
twos|adv.|ikişer ikişer, ikişerli üçerli, maviler ve ikiler
cornelia|n.|georgia eyaletinde şehir
founders|n.|kurucular kurulu, kurucu hisse senetleri, kurucu hisseleri
tb|n.|tüberküloz, terbiyumun simgesi, terabayt
locksmith|n.|çilingir, anahtarcı, kilitçi
circulating|adj.|dolaşan, devreden, gezici
seine|n.|sen nehri, alamana ağı, büyük ağ
rattlesnake|n.|çıngıraklıyılan, çıngıraklı yılan
toying|n.|flört, kur, hafife alma
cardiff|n.|kardıff, alabama eyaletinde şehir, galler'de yerleşim yeri
chitchat|v.|çene çalmak, havadan sudan konuşmak, gevezelik
chimpanzee|n.|anthropopithecus troglodytes, şempanze
envied|adj.|gıpta edilmiş, kıskanılmış, özenilmiş
nocturnal|n.|gece dolaşan haydut, gece dolaşan fahişe, geceye ait
galleries|n.|galeriler
partisan|n.|gerilla, yandaş, fırkacı
cluck|v.|gıdaklamak, gıdıklamak, gıdaklama
falco|n.|ada doğanı, ak sungur, ala doğan
hobson|n.|montana eyaletinde yerleşim yeri
clandestine|adj.|el altından yapılan, gizli yapılan, gizli kapaklı
doctorate|n.|doktora
smudge|v.|kara olmak, bulaştırmak, bulaşmak
bona|n.|eşya, menkul şeyler, menkul ve gayrimenkul eşya
pressuring|n.|basınç, baskı
kindest|v.|selamını söylemek, selam söylemek, en içten dileklerimle
moray|n.|murana, iskoçya'da bölge
cuddy|n.|gemi salonu, dolap, odacık
beastly|adj.|sevimsiz
agile|adj.|atik, çevik, kıvrak
sodas|n.|soda
visas|n.|birleşik krallık vize ve göç dairesi
specter|n.|kuruntu, hayalet, ürkütücü şey
det|n.|ateşleme fitili, ateşleme kablosu, eksik sigara detektörü
nabbed|adj.|yakalanmış
integration|n.|bütünleme, bütünleştirme, birleşme
granville|n.|batı virginia eyaletinde yerleşim yeri, iowa eyaletinde şehir, illinois eyaletinde yerleşim yeri
bayou|n.|bataklıklı kol, nehir kolu
sorceress|n.|büyücü kadın, sahire
harvesting|n.|devşirme, ekin biçme, hasat kaldırma
bakers|n.|fırıncı, ekmekçi, portatif fırın
litigation|n.|dava etme, dava ikamesi, dava
disruption|n.|parçalanma, bozma, aksama
shellfish|n.|kabuklular, kabuklu deniz ürünleri, kabuklu deniz hayvanı
grasping|n.|kavrama, aç gözlü, haris
apostles|n.|havariler amentüsü, elçilerin işleri, isa'nın havarileri
kraft|n.|dayanıklı ambalaj kağıdı, sülfat hamurundan yapılan ambalaj kağıdı, ambalaj kağıdı
extermination|n.|imha
arsonist|n.|kundakçı
gathers||yuvarlanan taş yosun tutmaz, pot kırmamak için en iyisi susmak, gaf yapmamak için en iyisi susmak
tubby|adj.|tıknaz kimse, boğuk, şişman ve bodur
refreshment|n.|serinletici içecek, canlandırma, hafif yemek
bony|adj.|kılçıklı, kemikli
fifty-fifty|adj.|ortaklaşa, yarı yarıya, eşit olarak
tuttle|n.|kuzey dakota eyaletinde şehir, oklahoma eyaletinde şehir
diligent|adj.|gayretli
handiwork|n.|el işi
disguises|v.|kılık değiştirmek, kıyafetini ve şeklini değiştirmek, gizlenmek
sneaks|n.|spor ayakkabısı
installing|expr.|yükleniyor
betrays|v.|ihanet etmek
transvestite|n.|kadınımsı giyinmekten hoşlanan erkek, karşı cins gibi giyinen ve davranan kimse, travesti
secular|adj.|laik, seküler, dünyevi
newer|adj.|daha yeni
watery|adj.|sırsıklam, su dolu, sulak
pecker|n.|ağaçkakan, gagalayan, cesaret
surrendering|v.|vazgeçmek, teslim olmak
intestine|n.|bağırsak
md|n.|idari müdür, idare müdürü
repentance|n.|pişmanlık, tövbe
burdens|n.|hükümetlerin borç yükleri, mali olmayan yükler
plums|n.|erikler, testisler
sulk|v.|somurtmak, surat asmak
arden|n.|arden ormanı, ingiltere'de ormanlık bir alan, nevada eyaletinde şehir
cleavage|n.|göğsün dekolteden görünen kısmı, çatlama, klivaj
blunder|n.|pot, gaf
panty|n.|kadın külotu, külotlu çorap
detox|v.|toksinlerden arındımak, toksinlerden arınmak, detoks yaptırmak
thyself|pron.|kendini, kendin, sen kendin
anticipating|n.|önceden sezme yoluyla kontrol, algılama yoluyla kontrol
scoffing|v.|oburca yemek, kıtıra almak, alay etmek
recognizing|n.|tanıma
judgments|n.|hükümler, ahkam, mahkeme kararları
headmistress|n.|özel okul müdiresi, okul müdiresi, başöğretmen
telepathic|adj.|telepatik
spineless|adj.|kılçıksız, cesaretsiz, karaktersiz ve tabansız
astrology|n.|yıldızbilim, yıldız falcılığı, astroloji
dopey|adj.|salak, sersem gibi, uyuşuk
drummond|n.|idaho eyaletinde şehir, montana eyaletinde yerleşim yeri, oklahoma eyaletinde yerleşim yeri
trusty|n.|güvenilir kimse, güvenilir, sadık
loveliest|adj.|güzel
ditching|n.|vazgeçme, hendek açma, hendek açılması
reassigned|v.|yeniden tahsis etmek, yeniden atamak, farklı kategori veya sınıfa yerleştirmek
faber|n.|işçi insan, araç kullanabilen eski insan, faber sendromu
pusher|n.|fırsatçı, uyuşturucu satıcısı, sürgü
col|n.|boyun, dağ geçidi, ko
chucky|n.|bir korku filmi oyuncak bebek karakteri
dashed|adj.|berbat, alt üst olmuş, fırlayan
cashmere|n.|kaşmir kumaş, kazmir, keşmir
cams|n.|kamlar
etcetera|adv.|ve saire, ve benzerleri
mistletoe|n.|ökseotu, göğce, burç
sorcery|n.|büyü, sihir
innkeeper|n.|otelci, hancı
maidens|n.|evlenmemiş genç kız, bekar, evlenmemiş kadın
tranquility|n.|huzur, sükunet
indicator|n.|gösterge
phaser|n.|fazcı, fazör, planlamacı
nutritious|adj.|besleyici
rb|n.|rubidyumun simgesi
mutated|adj.|mutasyona uğramış, dönüşmüş, değişmiş
varied|adj.|değişik
in-house|v.|bir ortaklığın içinde olmak, kurum içi
heightened|adj.|yükseltilen, yükseltilmiş, neşelenmiş
blatant|adj.|gürültü yapan, gürültücü, bariz
proclamation|n.|ilan, beyanname, bildirge
guerrillas|v.|gerillaların takviye yollarını kesmek
trident|n.|üç uçlu mızrak, üç dişli gladyatör mızrağı, çatal şeklinde zıpkın
collin|n.|erkek ismi
corvette|n.|korvet, denizaltılara karşı silahlı savaş gemisi, hafif savaş gemisi
ticklish|adj.|gıdık alır, nazik, hassas
gaping|v.|ağzını açık tutmak, şaşkın, açık
ideally|adv.|ideal olarak, birlikte, en iyi şekilde
oars|interj.|kürekler suya paralel
scandals|n.|skandallar
vengeful|adj.|intikamcı, kinci
widowed|adj.|ıssız, dul kalan, dul kalmış
brit|n.|ingiliz, britanyalı
post-mortem|n.|otopsi, ölüm sonrası, öldükten sonraki
salted|adj.|tuzlu
surpassed|v.|üstün gelmek, aşmak
exert|v.|sarf etmek (gayret), harcamak (çaba)
poorest|adj.|en yoksul
systematically|adv.|sistematik olarak, sistemli olarak
radically|adv.|temelinden, köklü bir şekilde, kökünden
purify|v.|arıtmak
vibrate|v.|titremek
announces|v.|anons etmek, duyurmak, ilan etmek
transgender|n.|transseksüel, cinsiyet değiştiren, cinsiyet değiştiren kimseye ait
lofty|adj.|yüce
sequences|n.|planın bölümleri, kaynak sıralarının birleştirilmesi, öğe dizisi
nance|n.|ibne, nonoş
addy|n.|açık adres, e-posta adresi, e-mail adresi
tulips|n.|laleler
illustrated|adj.|resimlendirilen, resimli, resmedilen
unlocking|n.|açma düğmesi, kilitlerin gayrimeşru açılması, (asansör) kilit açma bölgesi
shudders|v.|tüylerini diken diken etmek
nurturing|n.|besleme, büyütme, anaç
merrill|n.|iowa eyaletinde şehir, maine eyaletinde yerleşim yeri, wisconsin eyaletinde şehir
generates|v.|meydana getirmek, oluşturmak, üretmek
disloyal|adj.|vefasız, sadakatsiz
aggressively|adv.|saldırganca, hırçın bir şekilde
asbestos|n.|yanmaztaş, taşpamuğu, asbestos
improv|n.|doğaçlama
ems|n.|ems
unpunished|adj.|cezasız kalmış
displaced|adj.|yerinden edilmiş, yeri değiştirilmiş, deplase
bowen|n.|illinois eyaletinde yerleşim yeri
thundering|n.|gürleyiş, gürleme, uğultulu
semi|n.|yarım, tır kamyonu, tır
crutch|n.|koltuk değneği
silo|n.|silo
screw-up|v.|ceviz kırmak, içine etme
rubs|v.|sürtmek, ovmak, sürtünmek
levy|v.|el koymak, askere almak, zorla toplamak
symmetry|n.|simetri
inflammation|n.|iltihap
unaccounted|adj.|açıklanmamış, anlaşılamamış, kayıp
licorice|n.|meyan kökü, meyan, meyankökü
applauds|v.|alkışlamak
homeroom|n.|esas dershane (okulda)
grievous|adj.|ağır, çok büyük (yanlış/zarar/kayıp/acı), feci
counselling|n.|danışma, rehberlik, danışmanlık
trample|v.|çiğnemek (ayak altında), ayak ile çiğnemek, ezmek
nani|n.|nani, orok, rusya’da yaşayan etnik bir grup
tipsy|adj.|çakırkeyf, yarı sarhoş, çakırkeyif
rigorous|adj.|titiz
brewer|n.|bira yapımcısı, biracı, bira yapan kimse
hurdle|v.|engeli aşmak, halletmek, engelli koşu yapmak
chisel|v.|dolandırmak, oymak, kazıklamak
bistro|n.|küçük bar, taverna, küçük lokanta
hao|n.|hao adası
wainwright|n.|vagon tamircisi, oklahoma eyaletinde yerleşim yeri
chests|n.|sandıklar
newkirk|n.|oklahoma eyaletinde şehir
bottomless|adj.|dipsiz
combustion|n.|motor, karışıklık, yanma
erupted|adj.|patlamış, patlayıp çıkmış, indifa etmiş
clifton|n.|ingiltere'de yerleşim yeri, idaho eyaletinde şehir, illinois eyaletinde yerleşim yeri
forwarded|adj.|gönderilmiş
tidings|n.|havadis, haber
stubbornness|n.|diklik, inat, inatçılık
dix|n.|on, ayın onu, onuncu
pelican|n.|pelikan
matchmaker|n.|kibrit yapımcısı, çöpçatan
howell|n.|georgia eyaletinde şehir, michigan eyaletinde şehir, new jersey eyaletinde yerleşim yeri
geiger|n.|geyyer sayacı, radyoaktivite ölçme aracı
moles|n.|köstebek
binge|n.|alem
piping|n.|şerit, harç, kordone
tiff|v.|kızmak, gücenmek, darılmak
penalties|n.|para cezaları
enables|v.|olanak vermek, olanak tanımak, olanak sağlamak
irrigation|n.|sulama, sulama (toprağı), antiseptik suyla yıkama
hunchback|n.|kambur
margins|n.|kenar boşluğu, kenar boşlukları
relocated|adj.|yeniden yerleştirilmiş, yeri değiştirilmiş, taşınmış
centres|v.|halkevlerini kapatmak, avrupa bilgi merkezleri, takas ve saklama merkezleri
pitches|n.|iğne adımları
five-year|n.|beş yıllık kalkınma planı, beş yıllık kalkınma planlan, beş yıllık plan
vaults|v.|atlamak, tonoz, mahzen
hyacinth|n.|sümbül
gable|n.|yan duvar, kalkan duvarı, çatı katındaki eğik duvar
swirling|adj.|türbülanslı
filly|n.|kısrak yavru, dişi tay, kısrak
putty|n.|macun
revisit|v.|tekrar ziyaret etmek, yeniden değerlendirmek, tekrar ele almak
fanatics|n.|softa, hasta, tutucu kimse
concerto|n.|konçerto
unbeatable|adj.|rakipsiz, yenilmez
matey|interj.|ahbap, arkadaş
carthage|n.|kartaca, güney dakota eyaletinde şehir, indiana eyaletinde yerleşim yeri
loophole|n.|mazgal, mazgal deliği, gözetleme deliği
replies|n.|yanıtlar
beeper|n.|çağrı cihazı, bipleyici, çağrı aygıtı
injure|v.|sakatlamak, incitmek, yaralamak
cookbook|n.|yemek kitabı
align|v.|sıralanmak, dizmek
sanctity|n.|kutsallık
spilt|adj.|dökülmüş
whence|adv.|bu yüzden, bundan dolayı, nereden
geographic|adj.|coğrafi, coğrafik, yeryüzü bilgileri itibariyle
admirers|n.|hayran
mislead|v.|yanlış yönlendirmek
treadmill|n.|pedal mili, tekdüze iş, ayak değirmeni
fated|adj.|kaderde olan, yazılı, alına yazılmış
resurrect|v.|diriltmek
fetal|adj.|cenine ait, cenin, cenin (ile ilgili)
coca|n.|koka, kokain içeren kurutulmuş koka yaprakları
nona|n.|nona, uyku sayrılığı, yaşam çarkını döndüren kader tanrıçası
hoots|v.|baştan savma yapmak, özen göstermemek, savsaklamak
tampons|v.|tıkamak, tampon, tıpa
crept|v.|sürünmek, sürünen
mania|n.|cinnet, manyaklık, iptila
unplug|v.|fişini çekmek, açmak (tıkanmış lavabo vb'ni), prizden çekmek (fişi)
veggie|n.|sebze, vejeteryan
keyes|n.|oklahoma eyaletinde yerleşim yeri
subordinate|n.|ast
timely|adj.|zamanında yapılan, oturaklı, yerinde
telugu|n.|telugu dili, telugu
proofs|n.|düzeltmeler, kanıtlar
appropriately|adv.|uygun olarak, uygun bir şekilde, gereğine uygun
vendors|n.|satıcılar
recap|v.|kaplamak (lastiği), kaplatmak (lastiği), kaplamak (lastik teker)
roo|n.|kangaru
dinky|adj.|küçük, zarif, cici
accountants|n.|muhasebeciler
archaeology|n.|arkeoloji, kazıbilim
strangler|n.|sağanak yağmur, bardaktan boşalırcasına yağmur, jigle
genghis|n.|cengiz han
freshmen|n.|birinci sınıf öğrenci
nothingness|n.|hiçlik
authorised|adj.|yetkili
brightness|n.|parlaklık
maximus|n.|havalı olmayan kimse, silik tip, tuhaf tip
payson|n.|arizona eyaletinde şehir, illinois eyaletinde yerleşim yeri, utah eyaletinde şehir
bogart|v.|(sigara, ot) sündürmek, (sigar, ot) sömürmek, (sigar, ot) ağzında çok tutmak
urinating|n.|işeme ve dışkılamanın engellenmesi, idrar yaparken batma hissi, idrar ile markalama
violets|n.|menekşe rengi, güvez, utangaç kimse
compromises|v.|ödün vermemek, taviz vermemek, vergi uzlaşmaları
defences|n.|savunma
ibm|n.|ibm
corp|n.|türkiye petrol rafinerileri aş, türkiye petrolleri aş, türkiye petrol rafinerileri anonim şirketi
compulsory|adj.|zorunlu
seasoning|n.|baharat, çeşni
taft|n.|kaliforniya eyaletinde şehir, oklahoma eyaletinde yerleşim yeri, teksas eyaletinde şehir
famously|adv.|mükemmel, pek iyi, çok iyi
surfaced|n.|sathi yol, sert yüzeyli, düz yüzeyli çatı örtüsü
gibraltar|n.|cebelitarık boğazı, cebelitarık, gades boğazı
cuckold|n.|boynuzlu koca
uneven|adj.|düz olmayan
reopened|v.|yeniden başlatmak, tekrar açılmak, yeniden açmak
blip|n.|çarpma, sinyal, bip
similarity|n.|benzerlik
gizmo|n.|aygıt, işlevi belli olmayan alet, cihaz
swindler|n.|üçkağıtçı, dolandırıcı
indulgence|n.|müsamaha
co-op|n.|kooperatif
topper|n.|tepe taşı, iyi adam, kaban
alligators|n.|timsah
garry|expr.|herkes
dives|n.|zengin adam
minneapolis|n.|kansas eyaletinde şehir, minnesota eyaletinde şehir
reeling|n.|makaraya sarma, sersemletici, baş döndürücü
bene|n.|dikkat, uyarı deyimi, nota bene
outlets|n.|perakende satış yerleri, perakende satıcılar, vana çıkışları
siamese|n.|tayca, siyamca, siyamkedisi
rupee|n.|rupi, hint parası
unrealistic|adj.|gerçek dışı, hayali, gerçekçi olmayan
endangering|n.|tehlikeye atma, tehlikeli
gist|n.|anafikir, ana fikir, asıl
adventurer|n.|maceraperest, maceracı
prosthetic|adj.|prostetik, proteze ilişkin, öne ekleme
bayonet|n.|süngü
bismarck|n.|arkansas eyaletinde şehir, illinois eyaletinde yerleşim yeri, kuzey dakota eyaletinde şehir
dresden|n.|almanya'da bir şehir, kansas eyaletinde şehir, maine eyaletinde yerleşim yeri
next-door|adj.|yandaki, komşu, bitişikteki
encoded|adj.|şifrelenmiş, şifreli, dizgileşmiş
ruff|v.|kozla almak, koz ile alma, kırmalı yaka
luce|n.|turnabalığı
pollock|n.|kömür balığı, morina benzeri bir tür balık, güney dakota eyaletinde yerleşim yeri
calmer|adj.|daha sakin
chestnuts|n.|kestaneci, kestaneşekeri, kestane kebabı
parsley|n.|maydanoz
overgrown|adj.|kaplanmış, yaşına göre fazla büyümüş, azman
storming|n.|büyük bir kuvvetle saldırma, harika, mükemmel
run-in|n.|anlaşmazlık, çatışma, ağız dalaşı
alfa|n.|a harfini kodlarken kullanılan sözcük
sicker|adj.|hasta
abbas|n.|baba, yeni ahit'te tanrı, georgia eyaletinde şehir
resilient|adj.|güçlükleri yenme yeteneği olan, elastik, kendini çabuk toparlayan
monet|n.|fransız impresyonist ressam
abominable|adj.|berbat, felaket, menfur
empires|n.|imparatorluk
revise|v.|gözden geçirerek düzeltmek (metni), gözden geçirerek değiştirmek (metni), tekrar düzeltme yapmak
vets|n.|veteriner
arches|n.|kemerler
condor|n.|güney amerika akbabası, tepeliakbaba, akbaba
apaches|n.|apaçi, külhanbeyi, apaş
blackouts|n.|baygınlık
advertised|adj.|tanıtılan, tanıtımı yapılan, duyurulan
quixote|n.|don kişot
labored|adj.|rahat olmayan, çalışan, yorucu
excavation|n.|kazı, kazma, hafriyat
ironed|adj.|ütülü, ütülenmiş, ütülenen
laboratories|n.|laboratuvarlar
twenty-three|n.|yirmi üçlü grup, serinin yirmi üçüncü elemanı, yirmi üç tane olan
riddled|adj.|delik deşik edilmiş, kalbur gibi, kalbura dönmüş
flung|adj.|fırlatılan, fırlatılmış
yanked|expr.|bir mahkumun sakladığı şeyi bulup yüzleşen
sadder|adj.|daha mutsuz, daha üzgün
neurons|n.|nöronlar
licenses|n.|ruhsatlar, lisanslar
ding-dong|n.|zil sesi, çan sesi, boş kafalı
communicated|v.|haberleşmek
nutshell|v.|özet, ceviz gibi yemişlerin kabuğu, fıstık
scofield|n.|utah eyaletinde şehir
savor|v.|tadını çıkarmak, tat
cbc|n.|tam kan sayımı, kanada yayın kuruluşu
bedrock|n.|temel kaya, temel bilgiler, dip kaya
tempered|adj.|sertleştirilmiş, kıvamlı, ahenkli
pol|n.|pol tesisleri şubesi, soruna yönelik dil
cleansed|adj.|temizlenmiş, arındırılan
rigging|n.|hile, arma (gemi), dalavere
dawned|expr.|nihayet anladım ki, kafama dank etti, nihayet kafama dank etti
inconclusive|adj.|ikna edici olmayan, inandırıcı olmayan, kifayetsiz
graph|n.|grafik
twigs|n.|çerçöp, dallar, ince çubuklar
callous|v.|nasırlanmak, duygusuzlaşmak, nasır tutmak
bosch|n.|boş işlemi, bosch süreci, yakıt püskürtme pompası
embezzlement|n.|yolsuzluk, zimmete geçirme, aşırtı
decapitated|v.|kafası kesilmek, boynu vurulmak, başı kesilmiş şekilde bulundu
bannister|n.|trabzan
clusters|n.|kümeler
annex|v.|eklemek, ilhak etmek, katmak
royalties|n.|işletme payları, telif ücretleri, yayın hakkı gelirleri
seville|n.|sevilla, sevil, ohio eyaletinde yerleşim yeri
admittedly|adv.|kabul edilmelidir ki, gerçekte, itiraf edildiği gibi
gimmick|n.|numara, marifet, reklam için kullanılan özel cihaz
two-thirds|n.|üçte iki, kızların üçte ikisi, üçte iki çoğunluk
lobos|n.|lobo hastalığı
verb|n.|fiil, yüklem
mistaking|n.|hata, yanılma, yanlış anlama
abrasions|n.|aşınma, aşındırma
stow|v.|yerleştirmek, susturmak, neta etmek
unchanged|adj.|değiştirilmemiş, değişmemiş, değiştirilemez
andes|n.|and dağları, new york eyaletinde yerleşim yeri
neglecting|n.|ihmal
daggers|v.|birine öfke ile bakmak, kanlı bıçaklı olmak, kötü kötü bakmak
hypnotic|n.|uyuşturucu madde, hipnotize edici, uyuşturucu
distributing|n.|dağıtım, dağıtma
hailing|n.|taksi çağırma/çevirme sistemi, paylaşımlı yolculuk, bağırdığında duyulabilecek kadar yakında
vapor|v.|buhar çıkarmak, buğu, buhar
clemens|n.|michigan eyaletinde şehir
blanchard|n.|iowa eyaletinde şehir, idaho eyaletinde şehir, louisiana eyaletinde yerleşim yeri
waive|v.|vazgeçmek, feragat etmek
lavish|v.|hesapsızca harcamak, müsrif, savurgan
cultivated|adj.|bayındır, görgülü, terbiyeli
sunscreen|n.|güneş kremi, güneş losyonu
buffoon|n.|şaklaban, soytarı
hooded|adj.|körüklü, kukuletalı, tepeli
obstructing|n.|set
bonuses|n.|ikramiye ve primler, koruma fonu ikramiyeleri
rapture|v.|kendinden geçirmek, mest etmek, coşturmak
olympia|n.|washington eyaletinde şehir
grate|v.|rendelemek, ızgara
inconsiderate|adj.|düşüncesiz, anlayışsız
armchair|n.|koltuk
floppy|adj.|sarkık
loitering|n.|sürtme, aylak aylak dolaşma
clement|adj.|hoşgörülü, ılıman, merhametli
drainage|v.|suları akıtmak, çekilme, akaçlama
sho|n.|basarva, buşmen, khve
mongolia|n.|moğolistan
woodland|n.|ağaçlık
looted|adj.|yağmaya uğramış, yağmalanmış
scruples|v.|vicdani nedenle bir şeyi yapmaktan çekinmek
frisky|adj.|oyuncu, oynak, civelek
rubies|n.|yakut
sovereignty|n.|egemenlik
recovers|v.|kurtarmak, iyileşmek
betrayer|n.|hain
promoter|n.|önayak olan kimse, destekçi, destekleyen kimse
ugliness|n.|çirkinlik
cancellation|n.|iptal, iptal etme, feshetme
bribing|n.|rüşvet verme
merged|adj.|birleşmiş (şirket vb), bir moğol kabilesi, birleştirilen
aggie|n.|bir tür bilye, misket, tarım okulu
barons|n.|büyük iş adamı, baron, çok zengin işadamı
regression|n.|gerileme
punishable|adj.|cezayı hak eden, cezayı hakeden, cezalandırılabilir
ganges|n.|ganj nehri
bachelors|n.|bekar erkekler
forgetful|adj.|kayıtsız, ihmalkar, unutkan
disgruntled|adj.|huysuz, hoşnutsuz, ters huylu
fireflies|n.|ateşböceği, yıldızböceği, ateş böceği
deceitful|adj.|düzenci, düzenbaz, hileci
splat|n.|koltuk arkalığı, şapırtı
movers|n.|idari kadro, yönetici kadro, gidişatı belirleyenler
mended|expr.|söz gümüşse sükut altındır, bin düşün bir söyle
plating|n.|kaplama
misunderstandings|expr.|bu yanlış anlamalara neden olabilir, bu yanlış anlamalara sebebiyet verebilir, bu yanlış anlamaya sebebiyet verebilir
cryptic|adj.|hafi, mestur, örtülü
jefe|n.|patron (isp)
marmalade|n.|marmelat, marmalat, reçel
coals|v.|birini haşlamak, birini şiddetle azarlamak, gözünü korkutmak
ignores|expr.|seni yoksayıyor
rhythms|n.|biyolojik ritimler, anormal elektrik ritminin paroksismal deşarjı
sculpted|adj.|oyulmuş, yontulmuş, heykeli yapılmış
vicente|n.|erkek ismi
pounce|v.|dalıvermek, saldırmak, üzerine atılıp avlamak
all-star|n.|yıldız oyuncu, yıldız oyunculardan kurulu takım, başarılı oyunculardan oluşan
completes|v.|tamamlamak, tam, bütün
assert|v.|öne sürmek, ileri sürmek, iddia etmek
favored|adj.|avantajlı, özellikli, ayrıcalıklı
curled|adj.|bukleli, kıvrık, kıvırcık
pelvic|adj.|pelvise ait, kalça kemikleriarası boşluğuna ilişkin, pelvik
pansy|n.|hercaimenekşe, alacamenekşe, kadınsı erkek
requiring|n.|gerektirme, ihtiyaç duyma, dayatmacı
entities|n.|devletten bağımsız ayrılan bütçe, devlet iktisadi teşebbüsleri, fatura kesilemeyen işletmeler
tenor|n.|aslının aynı nüsha, asıl suret, cereyan
measly|adj.|cimri, adi, değersiz
hoodlums|n.|kabadayılar
indie|n.|bağımsız plak şirketi, bağımsız yapım, bağımsız film
ladders|n.|kariyer basamakları, uzun merdiven, kayar merdiven
tasteful|adj.|zevkli
shaker|n.|çalkalama kabı, tuzluk, kokteyl karıştırma kabı
maritime|adj.|denize ait
absorbing|n.|emilme, soğurma, emme
splendor|n.|görkem
sax|n.|saksafon
denounced|v.|ihbar etmek
antics|n.|tuhaflık, maskaralıklar, maskaralık
hailed|v.|takdir edilmek, alkışlanmak, yıllarca...olarak övülmüş
meanest|v.|demek istemek, kastetmek, anlamına gelmek
sprinkles|v.|serpmek
trampoline|n.|trampolin, tramplen, trambolin
swag|n.|yağma
roaches|n.|hamam böceği
othello|n.|washington eyaletinde şehir
profiling|n.|fişleme, belirleme, profil çıkarma
lifesaver|n.|cankurtaran
slurring|n.|kötü telafuz etme, lekeleme, kirletme
platonic|adj.|platonik, zararsız, eflatun veya felsefesine ait
hoi|n.|avam, ayaktakımı, velvele
cretin|n.|gerzek, salak, zeka özürlü kimse
hyenas|n.|sırtlan
harshly|adv.|göz kamaştırıcı bir şekilde, huysuzca, sert bir şekilde
camila|n.|kadın ismi
krypton|n.|kripton
autobiography|n.|otobiyografi, özyaşamöyküsü, kendi hayat hikayesi
humorous|adj.|güldürücü, gülünç, nükteli
hussy|n.|şirret, şıllık, aşifte
nodding|adj.|üst kısmı aşağı doğru eğilmiş, tepesi bükülü, uzaktan
comp|v.|bedava vermek, ikram etmek, bir müzikal icrada birine yardım etmek
lyman|n.|güney carolina eyaletinde yerleşim yeri, maine eyaletinde yerleşim yeri, nebraska eyaletinde yerleşim yeri
fiscal|adj.|mali
baltic|n.|baltık dili, baltık, buz gibi
hallways|n.|koridor
gracefully|adv.|incelikle
comforted|v.|avutulmak, avunmak, rahat hissetmek
promenade|v.|gezinmek, piyasa etmek, gezmek
champs|n.|şampanya
exorcist|n.|üfürükçü, kötü ruhları kovan kimse
courtesan|n.|fahişe, kahpe, zenginlerle düşüp kalkan fahişe
clubbing|n.|çomak parmak, klabing (clubbing), parmağın çomaklaşması
alloy|v.|alaşım hazırlamak, alaşım
drive-in|adj.|otomobille girilen (sinema vb yer), arabalı sinema, arabaya servis yapan restoran
right-handed|adj.|soldan sağa dönen, sağ elli, sağ elle kullanılmak için yapılmış
guitarist|n.|gitarist
suede|adj.|podüsüetten yapılmış, podüsüet, süet
roasting|n.|tavlama, kavurma, kızartma
plaid|n.|ekoseli kumaş, ekose desen, iskoç kumaşı
rollers|n.|masura, merdaneler
nyu|n.|new york üniversitesi
flannel|v.|zevzeklik etmek, fanila ile ovmak, fanila giydirmek
seventy-five|n.|yetmiş beş, 75, en az yetmiş beş yıl
niche|v.|oyuğa koymak, uygun bir yere yerleştirmek, uygun yere koymak
census|v.|nüfus sayımı yapmak, sayım, nüfus sayımı
braver|n.|mürüvvet
verona|n.|illinois eyaletinde yerleşim yeri, kuzey dakota eyaletinde şehir, missouri eyaletinde şehir
hysterically|adv.|deli gibi, çılgınca, isterik bir şekilde
shriek|v.|çığlık atmak
bathrobe|n.|bornoz
atrocious|adj.|çok fena, vahşi, gaddar
borough|n.|kent, kasaba, ilçe
chalice|n.|kadeh
airspace|n.|hava aralığı, hava boşluğu, hava sahası
hesitant|adj.|tereddütlü, kararsız
aborted|adj.|boşa çıkmış, başarısızlığa uğramış, durdurulan
jeweler|n.|kuyumcu
rhetoric|n.|güzel konuşma, etkili yazma, hitabet
brice|n.|ohio eyaletinde yerleşim yeri
strickland|n.|wisconsin eyaletinde yerleşim yeri
seamstress|n.|terzi (kadın), modistra, terzi kadın
feverish|adj.|ateşli
saffron|n.|safran
storing|n.|depolama, istif, depoya koyma
mla|n.|parlamento/yasama meclisi üyesi
regeneration|n.|yeniden doğma, tekrar elde etme, yeniden oluşma
augusta|n.|georgia eyaletinde şehir, illinois eyaletinde yerleşim yeri, kansas eyaletinde şehir
scorpio|n.|akrep burcu, akrep
algiers|n.|cezayir (başkent)
forbade|v.|yasaklamak
hushed|adj.|sessiz, dingin, sakin
suitors|n.|talip, evlenmeye istekli kimse, dilekçe sahibi
governing|adj.|hükmeden, yöneten
dotty|adj.|noktalı, benekli, sapık
matured|adj.|mütekamil, olgunlaşmış, olgun
tropics|n.|tropikal kuşak, tropika, tropikler
threes|n.|üçün katlarının sayıldığı bir tür oyun, üçerli beşerli, ikişerli üçerli
trapping|v.|tuzak kurma, tuzak, tuzağa düşürme
chantal|n.|bir kadın ismi
slots|n.|yuvalar
dune|n.|kumul
horseshit|n.|saçmalık, boş şey, değersiz şey
extinguish|v.|ortadan kaldırmak, yok etmek, yıkmak
juggle|v.|yer değiştirmek, dengelemek, hokkabazlık yapmak
yon|adv.|orada, ötede, oradaki
mobilize|v.|silah altına almak, seferber etmek, harekete geçmek
trucking|n.|kamyonculuk, değiş tokuş, kamyonla taşıyıcılık
framework|n.|kadro, karkas, çerçeve
attackers|n.|saldırgan
orphaned|v.|öksüz kalmak
parry|v.|bertaraf etmek (darbeyi), savuşturmak, atlatmak
respective|adj.|şahsi, ayrı ayrı, kendi
prerogative|n.|imtiyaz
chipper|adj.|şık, canlı, neşeli
mortified|adj.|utanmış, incitilmiş, çürümüş
axes|n.|axes, eksen, eksenler
pickpocket|n.|yankesici
on-line|adj.|onlayn, çevrim-içi, çevrim içi
flammable|adj.|yanar, alev alabilir, alev alır
leicester|n.|ingiltere'de şehir, ingiltere'de yerleşim yeri, massachusetts eyaletinde yerleşim yeri
archery|n.|okçuluk, okçular, ok atma sporu
blanc|n.|açık ciro, beyaz ciro, beyaz sırlı çin porseleni
henchmen|n.|yandaşlar
talon|n.|kağıtlar dağıtıldıktan sonra kalan kartlar, pençe (kuş), pençe
purses|n.|para kesesi
glucose|n.|glikoz
whims|n.|naz
muff|v.|acemice iş yapmak, becerememek, yüzüne gözüne bulaştırmak
cauldron|n.|kazan, büyük çaydanlık
roundabout|n.|ceket, dolambaçlı yol, dolaylı anlatım
estranged|adj.|soğumuş, ayrılmış (eş), ayrı yaşayan
phobia|n.|yılgı, korku, ürkü
vanishes|v.|ortadan kaybolmak
watchers|n.|bir zayıflama derneği, kilo avcıları, kilo bekçileri
banning|n.|yasaklanma, men etme, yasaklama
navel|n.|göbek deliği
ascension|n.|ağış, göğe yükselme, uruç
piazza|n.|italya'da halka açık meydan, üstü kapalı balkon, meydan (italyan şehirlerinde)
goth|n.|got, barbar, gotik
projectile|n.|kurşun, mermi, roket
fueled|adj.|benzin doldurulmuş, yakıtlı, yakıt doldurulmuş
brothels|n.|genelev
jitters|n.|sinirlilik, gerginlik, aşırı sinir
crybaby|n.|mızmız, sulugözlü, sulu gözlü kimse
upstream|n.|kaynak yönü, yukarı akıntı, ırmağın yukarısındaki
notification|n.|ihbarname, tebligat, ihtar
bennie|n.|benzedrin, benzedrin hapı/kapsülü
a-bomb|n.|atom bombası
fabricated|adj.|üretilmiş olan, uydurma, uydurulmuş
grumbles|v.|homurdanmak, söylenmek, dırdır
ck|n.|delbrück saçılması, ck izoenzimleri
ish|adj.|itici, soğuk, mesafeli
regis|n.|balkan göknarı, balkan köknarı, ingiltere'de yerleşim yeri
textile|n.|tekstil
realism|n.|gerçeklik, realizm, gerçekçilik
dominance|n.|hakimiyet, egemenlik
circulate|v.|deveran etmek
autistic|adj.|içekapanık, içe yönelik, otistik
sickly|adj.|hasta yüzlü, sağlıklı olmayan (iklim), tiksindirici
ambulances|n.|ambulans, cankurtaran
sac|n.|kese
spiritually|adv.|manen, ruhen
recreational|adj.|eğlence, dinlenme ile ilgili, rekreasyonal
forwarding|n.|yollama, nakliye, gönderme
tetanus|n.|tetanos
fliers|n.|tek kollu merdiven
prowl|v.|sinsi sinsi dolaşmak, dolaşmak, fırsat kollamak
atop|adj.|üstün, üzerinde, tepede
itches|expr.|bir şeyi yapmaya çok istekli/hevesli, bir şeyi yapmak için sabırsızlanan
meningitis|n.|menenjit
emailed|adj.|email gönderilmiş
dimes|n.|on sent, ucuz, 10 sent değerindeki madeni para
suburb|n.|varoş, banliyö
aztec|n.|meksika kızılderili kabilesi, aztek, new mexico eyaletinde yerleşim yeri
mocha|n.|kahve, moha limanı (yemen), moka
accursed|adj.|iğrenç, lanetlenmiş, uğursuz
sarajevo|n.|saraybosna, saray bosna
kern|v.|sıkıştırmak, (harflerde) çıkıntı yapmak, göbek
launcher|n.|katapult, atıcı, fırlatma rampası
improvised|adj.|eğreti, doğaçtan söylenmiş, uydurma
defying|n.|meydan okuma
mohammad|n.|mevlid kandili, kadir gecesi
halley|n.|halley
ducking|n.|suya batma
uglier|adj.|daha çirkin
mitt|n.|kolçak, parmaksız eldiven, tek parmaklı eldiven
taurus|n.|boğa, boğa burcu, boğa borcundan insan
warheads|n.|savaş başlıkları
apps|n.|apps denetimi, istemci uygulamaları
inspected|adj.|incelenen, incelenmiş, kontrol edilmiş
stuck-up|adj.|burnu havada
undoing|n.|açma, çözme, feshetme
counties|n.|afrika ülkeleri dairesi, irlanda cumhuriyeti'nin ilçeleri
perm|v.|perma yapmak, permanant, perma
shuffling|adj.|dolambaçlı, ayaklarını sürüyen, karma
half-brother|n.|üvey kardeş, üvey erkek kardeş
bengali|n.|bengalli, bengal dili, bengalce
weakling|n.|iradesi zayıf kimse, karakteri zayıf kimse, cılız kimse
grampa|n.|büyükbaba, dede
humid|adj.|rutubetli, nemli
infants|n.|sübyan mektebi, sıbyan mektebi, çocuk kıyafeti
barman|n.|barmen
straits|n.|darlık, boğazlar, sıkıntı
annulment|n.|iptal
mapping|n.|harita yapımı, haritalandırma, haritacılık
spotting|n.|lekeleme, damlama, lekelenme
eyed|adj.|gözlü
zing|v.|vızıldamak, vınlamak, vın diye geçmek
decode|v.|deşifre etmek, çözmek (şifreyi), çözmek
umbilical|adj.|göbeğe ait, göbeğe yakın, göbek bağı
blackboard|n.|karatahta, tahta, kara tahta
probes|n.|uzay incelemeleri, nokta sondalar, silindirik radyasyon probları
cutlery|n.|bıçakçılık, sofra takımı, çatal bıçak takımı
booger|n.|öcü, kuru sümük, kurumuş sümük
shoelaces|n.|ayakkabı bağcıkları
redeemed|adj.|fidye ödenen, fidye ödenerek kurtarılan, rehinden kurtarılan
morgana|n.|serap, su serabı
hue|n.|nüans, çeşit, ton (renk için)
exterminator|n.|imha edici
aristocracy|n.|aristokrasi
wavelength|n.|dalga uzunluğu, dalga boyu, dalgaboyu
merry-go-round|n.|atlıkarınca, atlı karınca
replacements|n.|otomatik değiştirmeler
bongo|n.|bongo
fittest|adj.|en uygun
glum|adj.|somurtkan, suratsız, abus
gloucester|n.|ingiltere'de yerleşim yeri, ingiltere'de şehir, massachusetts eyaletinde şehir
perilous|adj.|vahim, korku, çok tehlikeli
snooze|v.|uyumak, kestirmek, şekerleme yapmak
commandos|n.|sas komandoları
wasps|n.|eşek arısı sürüsü
full-scale|n.|büyük çaplı, tam ölçekli, geniş çaplı
processor|n.|işlemci
pendleton|n.|güney carolina eyaletinde yerleşim yeri, indiana eyaletinde yerleşim yeri, missouri eyaletinde yerleşim yeri
ascertain|v.|aslını öğrenmek
deadliest|adj.|en amansız
reproductive|adj.|üreme
prophecies|n.|kehanetler
instinctively|adv.|içgüdüsel olarak, doğal olarak, sezgisel
commencing|n.|başlangıç, başlama
mined|adj.|çıkarılmış (maden), mayınlı, madenden çıkarılan
reassured|adj.|güveni tazelenmiş, yeniden güvende hisseden, yeniden kendini huzurlu hisseden
dislikes|n.|hoşlanılan ve hoşlanılmayan şeyler, sevmediğim şeyler, bir kimsenin sevdiği ve sevmediği şeyler
jokers|n.|şakacı kimse, şakacı, latifeci
phasers|n.|fazcı, fazör, planlamacı
strayed|adj.|avare, başıboş
feller|n.|adam, şahıs, sevgili
templeton|n.|galler'de yerleşim yeri, iowa eyaletinde şehir, massachusetts eyaletinde yerleşim yeri
all-powerful|adj.|her şeye gücü yeten, her şeye kadir
curling|n.|kıvrım, kıvırma, bükülme
winthrop|n.|iowa eyaletinde şehir, massachusetts eyaletinde şehir, maine eyaletinde yerleşim yeri
monoxide|n.|monoksit, monooksit, monoksid
rankin|n.|illinois eyaletinde yerleşim yeri, pensilvanya eyaletinde yerleşim yeri, teksas eyaletinde şehir
armada|n.|armada, donanma, deniz kuvvetleri
overreact|v.|aşırı tepki göstermek
twirl|v.|fırıldatmak, fırıl fırıl dönmek, fırıl fırıl döndürmek
kits|n.|ayrıntılı denetim rehberi, gaz sert lehim ve kaynağı için küçük kitler, ilk yardım kitleri
hanks|n.|çile
fountains|n.|çeşmeler
sawdust|n.|talaş
firefly|n.|ateşböceği, yıldızböceği, ateş böceği
interstellar|n.|yıldızlar arası, yıldızlararası
subdue|v.|hizaya getirmek, ram etmek, bastırmak
fabrics|n.|mefruşat
simulate|v.|taklidini yapmak, numarası yapmak, benzerini yapmak
libraries|n.|kütüphaneler, kitaplıklar
arbitrary|adj.|keyfi
ratchet|v.|derece derece artmak ya da azalmak, mandal (mandallı çark için), cırcırlı makara
vascular|adj.|damar, damarlı, damarla ilgili
coos|v.|ötmek, ötmek (kumru/güvercin), cıvıldamak
baby-sitter|n.|çocuk bakıcısı, çocuk bakıcı, bebek bakıcısı
handmade|adj.|elişi, el yapımı, el işi
bluebell|n.|campanula, çançiçeği, çan çiçeği
five-star|adj.|beş yıldızlı
ultraviolet|adj.|morüstü, ultraviyole, morötesi
obesity|n.|şişmanlık, aşırı şişmanlık, obezite
sensations|n.|içorgansal duyular, kasıl duyumlar, organik duyular
deem|v.|tutmak, kıyas etmek, görmek
higgs|n.|higgs bozonu, higgs alanı
reigns|v.|hüküm sürmek, saltanat
dub|v.|düzeltmek, sözlendirmek, dublaj yapmak
bounces|expr.|hayat böyledir, hayatın cilvesi bu naparsın?, hayatın cilvesidir
nicaragua|n.|nikaragua
self-confidence|n.|kendine güven, özgüven, kendine güven duygusu
basque|n.|bask dili, baskça, büstiyer
burrow|v.|bir oyukta gizlenmek, tünel kazmak, oyuk açmak
pawned|v.|rehindeki eşyayı kurtarmak, rehinden kurtarmak, merhunun satılması
boardwalk|n.|tahta kaldırım, kalas iskele, ahşap platform
poultry|v.|kümes hayvanlarının eti, topluluk, kümes hayvanları
scrapbook|n.|kupürler albümü, koleksiyon defteri, albüm
fantasize|v.|hayal etmek, dalıp gitmek, fantezi kurmak
watered|adj.|muare, sulanmış, sulu
offending|adj.|kırıcı, incitici
roswell|n.|güney dakota eyaletinde yerleşim yeri, georgia eyaletinde şehir, new mexico eyaletinde yerleşim yeri
magdalena|n.|new mexico eyaletinde yerleşim yeri
overkill|n.|aşırı yükleme, aşırı güç kullanma, aşırı reklam yapma
sodom|n.|oğlancılık, homoseksüellik, ibne
antelope|n.|antilop, ceren, ahu
discord|n.|gürültü, fikir ayrılığı, ahenksizlik
henna|v.|kınalamak, kına
pigsty|n.|ahır gibi ev, mezbele, domuz ağılı gibi pis ev (oda)
aristocrats|n.|aristokrat
downstream|n.|akıntı aşağı, akış aşağı, aşağı akım
undies|n.|iç çamaşırları (kadın), iç çamaşırları
dashboard|n.|çamurluk, arabanın ön panosu, kumanda tablosu
chez|n.|kibrit, ateş (kibrit)
inconsistent|adj.|istikrarsız, tutarsız
wickedness|n.|günahkarlık, kötülük
disagreed|v.|aynı fikirde olmamak
piccolo|n.|ince sesli fülüt, pikolo, küçük flüt
would-be|n.|taslağı, özenen, bir şeye özenen
pauper|n.|fakir, fakir kişi, yoksul
oxide|n.|oksit, oksid, okside
cauliflower|n.|karnabit, karnabahar, şekli karnabaharı andıran bulut vb. şey
fiddler|n.|kemancı, dolandırıcı, düzenbaz
right-wing|n.|sağ, muhafazakar, sağ kanat
nitro|n.|nitro, nitrojen, nitrometan
guacamole|n.|soğanlı baharatlı avokado (meksika mutfağı)
branson|n.|missouri eyaletinde şehir
pawns|n.|piyon
cardinals|n.|kardinaller
tailed|adj.|peşine takılmış, kuyruklu
verde|n.|portekiz'de turistik kıyı şeridi, yeşilburun, yeşil burun
vd|abrev.|cinsel yolla bulaşan hastalık, cinsel yolla geçen hastalık
fiji|n.|fiji
extinguished|adj.|bitirilmiş, sönmüş, bastırılmış
enquire|v.|soru sormak, sormak, soruşturmak
prude|n.|erdemlik taslayan kişi, aşırı namuslu geçinen kimse, aşırı iffet taslayan kimse
boundless|adj.|sonsuz, hudutsuz, tükenmeyen
climbers|n.|tırmanıcı sarmaşık, toplumda hep gözü yükseklerde olan kimse, dağcı
romantically|adv.|romantik bir biçimde
strands|n.|islami akım, çelik demetler, lif kümesi
arrivals|n.|teslimatlar
hula|n.|havai dansı
combed|v.|taranmış, ibikli, taralı
sou|n.|metelik
corresponding|adj.|yerini tutan, (bir şeye) eş
kindred|n.|akrabalar, benzeme, akrabalık
repel|v.|püskürtmek
genoa|n.|genova, cenova, cenoa
durham|n.|connecticut eyaletinde şehir, ingiltere'de şehir, ingiltere'de yerleşim yeri
squish|v.|ezmek
shopkeeper|n.|esnaf, çarşı esnafı, dükkancı
grownups|adj.|yetişkin
nik|suf.|bir şeyle ilişkilendirilen, bir şeyle karakterize edilen, delisi, sevdalısı anlamı veren son ek
showroom|n.|satış yeri, salon, gösteri salonu
warts|adv.|olduğu gibi, olumsuz yanlarını gizlemeden, bütün ayrıntılarıyla
overdoing|n.|ifrat, ölçüyü aşma
laundromat|n.|çamaşırhane (selfservis)
small-town|n.|küçük kasaba, kasaba, gölün kıyısında küçük bir kasaba
humanoid|n.|humanoid, insansı, insana benzeyen
dreadfully|adv.|çok çok, dehşetle, korkunç bir şekilde
cheery|adj.|neşeyle, neşeli, keyifli
shards|n.|cam parçaları, kırık cam parçaları
shenanigans|n.|uyanıklık, saçmalık, hilekarlık
std|n.|std çalışanları, abd std fanfold, cinsel yolla bulaşan hastalıklar
rhythmically|adv.|ritmik olarak
masons|n.|masonlar büyük locası
encourages|v.|cesaretlendirmek, yüreklendirmek, özendirmek
barrage|n.|yoğun yaylım ateşi, yaylım ateşi, baraj
blockhead|n.|mankafa, ahmak, dangalak
sealing|n.|kapatma, kapama, tıkama
annihilated|adj.|yok olmuş, yok edilmiş
glover|n.|eldivenci, vermont eyaletinde yerleşim yeri
harvested|adj.|hasat edilmiş, hasat edilen
overloaded|adj.|aşırı yüklenmiş
narc|n.|narkotik polisi, ispiyoncu
tulsa|n.|oklahoma eyaletinde şehir
persia|n.|iran
spills|n.|taşmalar, dökülme
taxpayer|n.|vergi veren kimse, mükellef, vergi mükellefi
menacing|adj.|tehditkar
clippers|n.|makas
flirted|v.|flört etmek, flört
spiderman|n.|siyah örümcek adam
foreboding|n.|kötü bir şey olacağını sezme
exhilarating|n.|neşelendirme, canlandırıcı, neşelendirici
understudy|v.|başkasının rolünü ezberlemek, yardımcı oyunculuk yapmak, yardımcı oyuncu
cv|n.|hayat hikayesi, özgeçmiş, işlevsel özgeçmiş
castile|n.|kastilya, kastilya krallığı, new york eyaletinde yerleşim yeri
tact|n.|düşüncelilik, nezaket
schematics|adj.|şematik, sistemli, tasarımsal
smarts|n.|sokak sanatı
provision|n.|karşılık, tedarik, koşul
manga|n.|japon çizgi romanı
housed|n.|geçme ek, yuvalı ek, arka yerleştirilmiş aks sürücü tali sistemi
doghouse|n.|gözden düşme, köpek kulübesi, brülör odacığı
anchovies|n.|ançuez, hamsiler
ny|n.|new york
fab|adj.|çok büyük, muazzam, kocaman
warbling|n.|kuş gibi şakıma
huntington|n.|batı virginia eyaletinde şehir, indiana eyaletinde şehir, massachusetts eyaletinde yerleşim yeri
ghouls|n.|gulyabani, cadı, hortlak
applicants|n.|başvuranlar, başvuru sahipleri, adaylar
stringer|n.|uzunlamasına kiriş, tel takan kimse (çalgı), kirişçi
critters|n.|yaratık
yemen|n.|yemen
vantage|n.|bakış noktası, avantajlı durum, seyretme yeri
canadians|n.|kanadalılar
abandonment|n.|terk
theology|n.|teoloji, ilahiyat, dinbilim
commemorate|v.|anmak
compressions|n.|basınç elemanı
nerdy|adj.|rağbet görmeyen, modası geçmiş
raleigh|n.|illinois eyaletinde yerleşim yeri, mississippi eyaletinde yerleşim yeri, north carolina eyaletinde yerleşim yeri
frenchmen|n.|fransız
ld|n.|ld-ac süreci, ld çelik yapımı süreci, ld süreci
nourishment|n.|gıda, beslenme
sender|n.|gönderen
nursed|adj.|meme emen, emzirilen (bebek)
three-day|n.|üç günlük istirahat, haftada üç gün çalışmak, kızamıkçık
gulls|n.|martılar
argentine|n.|arjantinli, arjantin'e özgü, arjantin
consciously|adv.|bile bile, kasten, bilinçli olarak
tenner|n.|onluk, on dolarlık banknot, 10£
waiver|n.|feragat
magnetism|n.|mıknatısiyet, cazibe, manyetizm
woodwork|n.|ağaç işi, ağaç işleri, doğramacılık
remission|n.|azalma, yollama, remisyon
nils|n.|hiç, sıfır, var olmayan
hooligan|n.|holigan
dysfunction|n.|fonksiyon bozukluğu, işlememe, disfonksiyon
hijacking|n.|silahlı soygun, korsanlık, gasp
dickinson|n.|alabama eyaletinde şehir, kuzey dakota eyaletinde şehir, new york eyaletinde yerleşim yeri
vanquished|adj.|bozguna uğramış, savaşta kaybetmiş, hüsrana uğramış
widen|v.|genişletmek
mobility|n.|hareketlilik
microphones|n.|basınca duyarlı mikrofon çiftleri, mikrofon çifti
provisional|adj.|geçici
hamper|v.|engellemek
mcallister|n.|galton-mcallister dağılımı
membrane|n.|zar
anarchists|n.|anarşistler
horst|n.|horst
lecturer|n.|okutman
tampon|v.|tıkamak, tampon, tıpa
maxi|adj.|iri, büyük, uzun
sanatorium|n.|kronik hastalıkların tedavi edildiği hastane
tangle|v.|karmakarışık etmek, dolaşıklık, düğüm
hearted|adj.|kalpli
succumb|v.|yenilmek, çökmek, yenik düşmek (hastalığa)
scab|n.|yara kabuğu
dissatisfied|adj.|tatminsiz
cali|abrev.|kaliforniya, sermaye talebi, batı kolombiya'da bir şehir
butting|n.|sınır, (kuyruk/sıra) kaynak yapma, tos vurma
lain|v.|uzanmak, yerleştirilmiş, döşeli
presentable|adj.|düzgün görünüşlü
prompted|n.|yardımla hatırlama, bilgi istemli dur kodu
nietzsche|n.|varoluşçu bir alman filozof
boating|n.|kayıkla gezme, botla dolaşma, sandal
relates|v.|nakletmek, bağlı olmak, ilgili olmak
swedes|n.|bir tür şalgam, isveçli, sarı şalgam
trumps|n.|koz
yuk|interj.|iğrenme belirten ünlem
hypothermia|n.|beden ısısının düşmesi, hipotermia, soğutma
binder|n.|kap, bağlayıcı madde, bağ
unlocks|v.|kilidini açmak
potions|n.|ilaç dozu, zehirli içki, iksir
insure|v.|sigortalamak, sigorta etmek
bohemian|n.|bohem hayat yaşayan kimse, çingene, kural tanımayan
made-up|adj.|uydurmasyon, makyajlı, yalan
skylar|n.|gök, gökyüzü
jester|n.|soytarı
excites|v.|heyecanlandırmak
uniquely|adv.|eşsiz olarak, emsalsiz bir biçimde
cris|n.|son moda, bebeğin kesintisiz bir şekilde ağlaması, bebeğin kedi gibi miyavlaması
regulate|v.|düzenlemek, düzene sokmak, ayarlamak
factions|v.|hizipleşmek
irreplaceable|adj.|yeri doldurulamaz
pied|adj.|alaca, alacalı, benekli
smithers|n.|batı virginia eyaletinde şehir
unofficially|adv.|gayri resmi olarak
canterbury|n.|connecticut eyaletinde şehir, ingiltere'de şehir, ingiltere'de yerleşim yeri
shank|n.|çiçek sapı, bacak, el yapımı bıçakla şişlemek
alpine|n.|yüksek dağlara özgü, alp, alplere ilişkin
prowess|n.|kahramanlık, hüner, yiğitlik
trashy|adj.|beş para etmez, değersiz, ucuz
blower|n.|havalandırma, üfleme makinesi, vantilatör
tenderly|adv.|kibarca, yumuşak ve kibar bir şekilde, nazikçe
depicted|adj.|tarif edilen, tarif edilmiş, tasvirli
carlyle|n.|illinois eyaletinde şehir
disturbs|v.|rahatsız etmek
mussels|n.|midye tava, midye dolma, midyelerde domoik asit tespiti
mali|n.|mali
sigma|n.|sigma
croissant|n.|ay çöreği, kruvasan, ayçöreği
charades|n.|sessiz sinema oyunu
mince|n.|kıyma
kilograms|expr.|kaç kilo, kaç kilogram
boasting|n.|böbürtü, farfara, övünme
dined|v.|günün esas yemeğini yemek, yemeğe davet etmek, akşam yemeği yemek
high-class|adj.|kaliteli, birinci sınıf
passageway|n.|geçiş yolu, aralık, pasaj
left-hand|adj.|soldaki, solak, sol
ranting|n.|atıp tutma
pixie|n.|peri, (kadın) kısa saç kesimi
pharaohs|n.|firavun
nitrate|v.|nitrik aside batırmak, nitratlamak, selüloz nitrat
hyperspace|n.|aşırı uzay, hiperuzay
insurgents|n.|direnişçiler, asiler
yiddish|n.|yidiş, yahudi almancası, yiddiş
trends|n.|eğilimler, trendler
elevation|n.|yükseltme, yükseklik, kaldırma
litres|expr.|günde kaç litre su içersin?, günde kaç litre su içiyorsun?, en az iki litre su iç
pastime|v.|hoşça vakit geçirmek için yapılan şey, eğlence, hobi
altering|n.|değişim, değiştirme, değişerek
ussr|n.|sscb (sovyet sosyalist cumhuriyetler birliği), sovyetler birliği
brie|n.|krem peynir, içi yumuşak bir tür fransız peyniri
spec|n.|spekülasyon
abolished|adj.|yürürlükten kalkan
earthlings|n.|insanoğlu, fani, dünyalı
evict|v.|evden çıkarmak, tahliye ettirmek, mahkeme kararıyla çıkartmak
janeiro|n.|rio de jenaryo
pricey|n.|kazık marka, pahalı, tuzlu
mending|n.|onarma, tamir, gözeme
pesky|adj.|kıl, rahatsız edici, belalı
turbulent|adj.|gürültülü patırtılı, türbülanslı, çalkantılı
attributes|n.|tablo öznitelikleri, sosyodemografik özellikler, belirleyici özellikler
downey|n.|idaho eyaletinde şehir, kaliforniya eyaletinde şehir
albino|n.|albino, akşın, çapar
activation|n.|etkinleşme, hareketlenme, hareketlendirme
flamingo|n.|flamingo
polling|n.|seçim, oy verme, sıralı çağırma
eggnog|n.|şeker ve sütten yapılan içki
bashing|n.|sopa, dayak, kötek
expulsion|n.|çıkarma, tard etme, kovma
verity|n.|hakikat, gerçek, bulgu
granddaddy|n.|büyük baba
dominican|n.|dominikli, dominik cumhuriyeti vatandaşı, dominikan rahibi
flattened|adj.|düzleştirilmiş, düz, basık
mba|n.|mba öğrencileri, evliyim ancak müsaitim, işletme mastırı
analyse|v.|incelemek, analiz etmek, çözümlemek
untimely|adj.|vakitsiz, zamansız
reversal|n.|tersine çevirme
kensington|n.|kansas eyaletinde şehir, minnesota eyaletinde şehir, new hampshire eyaletinde yerleşim yeri
ambiguous|adj.|muğlak, belirsiz
tortures|n.|eziyet, işkence
clouded|adj.|bulanık, bulutlu, bulutlanmış
chakra|n.|çakra
sundae|n.|üstü şurup, peşmelba, ceviz vb'yle kaplı dondurma
housewarming|n.|yeni bir eve taşınmanın kutlanışı, yeni eve taşınanlara verilen hediye, yeni eve taşınma partisi
lum|n.|par, parlaklık, parlak
diagnose|v.|teşhis etmek, tanı koymak
emblem|n.|simge, sembol, remiz
posterity|n.|zürriyet, soy, gelecek nesiller
thermos|n.|termos
perseverance|n.|sebat
mayfield|n.|kansas eyaletinde şehir, kentucky eyaletinde şehir, new york eyaletinde yerleşim yeri
midge|n.|tatarcık, titrersinek
garrity|adj.|çılgın, deli, kaçık
untied|adj.|çözük, başıboş, çözülmüş
bulge|n.|tümsek, çıkıntı
sheen|v.|perdah yapmak, revnak, pırıltı
greased|adj.|yağlı, yağlanmış
self-righteous|adj.|tepeden bakan, hodpesent, kendini üstün gören
optic|n.|görme, görüş, göz
low-level|adj.|düşük seviyeli, düşük düzeyli, alt düzey
ridges|n.|yavaş yayılan okyanus ortası sırtlar, yavaş yayılan sırtlar
twitching|n.|tik, birden çekme, birden çeken
exterminated|adj.|yok edilmiş, kökü kazınmış, bitirilmiş
crossfire|n.|çapraz ateş, çapraz akım
topping|n.|malzeme (pizza), sos, üstlük
impudent|adj.|edepsiz, arsız, saygısız
bloods|n.|kan
lupe|n.|lup
gravely|adj.|usulca, ağır şekilde (yaralanmak vb.), ciddi biçimde (yaralanmak vb.)
manifestation|n.|açıkça gösterme, tecelli, gösteri
moat|v.|kale hendeği ile kuşatmak, hendek, kale hendeği
prefecture|n.|makam, kaymakamlık, polis istasyonu
hei|n.|asya'da bir nehir
noticeable|adj.|farkedilebilir
mausoleum|n.|türbe
consignment|n.|mal gönderme
algorithms|n.|algoritmalar
alrighty|expr.|tabii ki
tonsils|n.|bademcikler
wrongful|adj.|kötü, haksız, insafsız
lacy|adj.|dantelli, dantelden yapılmış, dantel gibi
successes|v.|önemli başarılara imza atmak
grilling|n.|ızgara, sıkıştırma, sorgu
zeppelin|n.|hava gemisi, zeplin, alman hava gemisi
smartass|n.|ukala, bilgiç, çakal
catalyst|n.|katalizör, değişime neden olan kişi ya da şey, iki kuvvet arasında eylem yaratan
bergen|n.|kuzey dakota eyaletinde şehir, new york eyaletinde yerleşim yeri, wisconsin eyaletinde yerleşim yeri
checkout|n.|kasa, kontrol, ödeme yeri
jobless|adj.|işsiz
rhea|n.|amerika devekuşu, amerikan devekuşu, nandu
dotted|adj.|noktalı
tarot|n.|tarot falı, tarot, tarot destesi
promotions|n.|yayın hakları promosyon grubu
dangle|v.|sarkmak
firecracker|n.|kestanefişeği, kestane fişeği, maytap
laces|v.|bağcıklarını bağlamak, ayakkabı bağları, ayakkabı bağcıkları
concessions|n.|imtiyazlar
aphrodisiac|n.|cinsel istek uyandıran ilaç, cinsel güç artırıcı, arzu verici
expresses|v.|ifade etmek, açık, belli
crowning|adj.|en son, parlak, en yüksek
worships|v.|tapmak, tapınmak, ibadet etmek
quarrels|v.|dalaşmak, tartışmak, çekişmek
launches|v.|başlatmak (yeni işi), piyasaya sürmek, fırlatmak
utensils|n.|aletler, kap kacak, kap-kacak
walnuts|n.|kabak tatlısı, baklava, batırık
snare|n.|kapan
croissants|n.|ay çöreği, kruvasan, ayçöreği
parrots|n.|papağan
deficiency|n.|eksiklik
sores|n.|egzantrik yerleşimli bası yaraları, aft
destroyers|n.|destroyerler
firecrackers|n.|kestanefişeği, kestane fişeği, maytap
conjecture|v.|tahmin etmek, kestirmek, sanmak
airways|n.|havayolları
saucy|adj.|sırnaşık
terrors|n.|nokturnal terör, (çocuklarda) karabasan
swindle|v.|dolandırmak
taffy|n.|şekerleme, dalkavukluk, bonbon
coerced|adj.|zoraki iş yaptırılmış, zora koşulmuş, (bir şey yapmaya vb) zorlanmış
pornographic|adj.|pornografik
imaginable|adj.|göz önüne getirilebilir, hayal edilebilir, düşünülebilir
digestion|n.|sindirim
aye-aye|expr.|hayhay, aye-aye maymunu, yaldızlı bambu maymunu
craze|v.|çatlamak, delirtmek, çatlatmak
watt|n.|güç birimi, mum, vat (simgesi w)
metaphors|n.|mecazlar
critique|v.|eleştirmek, gözden geçirmek, kritiğini yapmak
veterinary|n.|veteriner
warships|n.|savaş gemisi
potts|n.|potts klempi, potts anastomozu, mississippi eyaletinde yerleşim yeri
presto|adj.|çabuk, hızlı, hızlı tempo ile
depleted|adj.|tükenen, bitmiş, tükenmiş
shapiro|n.|shapiro-wilk sınaması
sarcophagus|n.|sandık taş, lahit, sanduka
slump|v.|gevşemek, fiyat vb düşmek, yığılmak
hooky|n.|okul kaçağı, illegal
improves|v.|geliştirmek, gelişmek, ilerletmek
workings|n.|iş, işletme, kazılmış yerler
thunderstorm|n.|gök gürültülü fırtına
hellish|adj.|cehennemi, fena, cehennem gibi
trickster|n.|dalavereci, hilekar, üçkağıtçı
decadent|adj.|çökmüş
henning|n.|illinois eyaletinde yerleşim yeri, minnesota eyaletinde şehir, tennessee eyaletinde yerleşim yeri
fiddling|adj.|küçük, kıvır zıvır, işe yaramaz
gaul|n.|galyalı, galya
devise|v.|icat etmek, tertiplemek, akıl etmek
triplets|n.|üçüz bebekler, (poker gibi oyunlarda) aynı türden üç kart
humbled|adj.|aşağılanmış, mütevazı
asians|n.|asyalı, asya ile ilgili
triumphs|expr.|kötülüğe meydan verme, iyiler bir şey yapmadıkça kötülük kazanır, sonunda adalet yerini bulur
cross-examine|v.|çaprazlama sorgulamak
straight-up|expr.|ciddiyim, cidden, hakikaten
gout|n.|gut, damla, damla hastalığı
dubbed|n.|unvan/isim verilmiş, şovalyelik nişanı verilmiş, ünvan verilmiş
devoid|adj.|mahrum, hali, yoksun
compensated|adj.|telafi edilmiş, telafi edilen, tazmin edilir
johnston|n.|güney carolina eyaletinde yerleşim yeri, iowa eyaletinde şehir, rhode ısland eyaletinde yerleşim yeri
bombardment|n.|bombardıman
get-together|n.|toplantı, parti
frightfully|adv.|korkunç bir şekilde, ziyadesiyle, korkunç şekilde
salvo|n.|baştan savma, yaylım ateşi, kaçamak
licks|v.|ağır biçimde eleştirilmek, ağır eleştiriye maruz kalmak, eleştiri oklarının hedefinde olmak
overflow|v.|coşmak, taşmak, taşma
multiplied|adj.|çarpılmış, katmerli, çarp
attributed|adj.|atfedilmiş
spores|n.|mantar sporları, sporların inhalasyonu, eşeysiz sporlar
orchestrated|adj.|orkestraya uyarlanmış, orkestra için bestelenmiş, dikkatlice organize edilmiş
slasher|n.|haşıl makinesi
uncharted|adj.|keşfedilmemiş, keşfedilmemiş ya da haritası yapılmamış bölge, bilinmeyen
pimple|n.|sivilce
quench|v.|söndürmek
rendering|n.|tercüme, iade, çeviri
stubbs|n.|wisconsin eyaletinde yerleşim yeri
purcell|n.|missouri eyaletinde şehir, oklahoma eyaletinde şehir
disks|n.|diskler
giver|n.|veren, verici, veren kimse
hard-core|adj.|etkin, boyun eğmez, çetin ceviz
hayward|n.|kaliforniya eyaletinde şehir, missouri eyaletinde yerleşim yeri, minnesota eyaletinde şehir
sm|n.|samaryumun simgesi
rapids|n.|suyun en hızlı aktığı yer, hızlı akış, coşkun ırmak
ulterior|adj.|itiraf edilmemiş, ötedeki, açığa vurulmamış
yelp|v.|acıyla havlamak, ciyak ciyak bağırmak, viyaklamak
deduct|v.|çıkarmak
confer|v.|müzakere etmek, görülmek, müzakere yapmak
stockton|n.|alabama eyaletinde şehir, georgia eyaletinde şehir, illinois eyaletinde yerleşim yeri
fares|n.|yolculuk ücreti, yol paraları
perpetrators|v.|kimliği belirsiz kişilerce saldırıya uğramak
impure|adj.|saf olmayan
summat|abrev.|bir şey, birşeyler
oar|n.|kürekçi, işçi, kürek
keyhole|n.|anahtar deliği, ayna, kilit ağızlığı
pertinent|adj.|ilgili, geçerli, alakalı
domingo|n.|pazar günü
purring|n.|kedi sesi
standstill|n.|durma
groupie|n.|grubun peşine takılan kız, grupiye, bir şarkıcının vb. genç hayranı
danube|n.|tuna, tuna nehri, minnesota eyaletinde şehir
interruptions|n.|kısa kesintiler, makine denetim kesilmeleri, kısa kesilmeler
integral|adj.|bir bütünün ayrılmaz bir parçası olan
loins|n.|rahim, nesil, bel
untold|adj.|anlatılmamış
wickham|n.|ingiltere'de yerleşim yeri
progression|n.|ilerleme
maja|n.|örümcek yengeci
undeniable|adj.|itiraz olunamaz, inkar edilmez, inkar edilemez
acapulco|n.|akapulko (meksika'da liman şehri)
inadvertently|adv.|yanlışlıkla, dikkatsizlik sonucu, dikkatsizce
inexplicable|adj.|nedeni anlaşılmaz, bir yere oturtulmaz, anlaşılmaz
radish|n.|turp
albright|n.|batı virginia eyaletinde yerleşim yeri
lingo|n.|argo, yabancı dil, dil
illogical|adj.|mantıksız
snows|interj.|kar yağıyor
thefts|n.|oto hırsızlıkları
exceedingly|adv.|fazlasıyla
crushes|v.|ezmek
stint|v.|kısıtlamak, kısmak, esirgemek
flustered|adj.|kızışmış, kızıştırılmış
alto|n.|alto, en kalın kadın sesi, alto sesli sanatçı
violinist|n.|kemancı
bonehead|n.|dangalak, denyo, mankafa
optional|adj.|seçmeli, isteğe bağlı
passwords|n.|diğer parolalar, parolalar denetim masası, diğer parolaları değiştir
fontaine|n.|indiana eyaletinde yerleşim yeri
sanctions|n.|yaptırımlar
staking|n.|kazıkla işaretleme, piketaj, punta ile perçinleme
playback|v.|yeniden çalmak, yeniden yürütmek, yeniden oynatmak
lomax|n.|illinois eyaletinde yerleşim yeri
spinster|n.|yaşlı kız, evde kalmış (kız), kız kurusu
fawn|v.|yavrulamak, yaltaklanmak, geyik doğurmak
vials|n.|enjeksiyon flakonları
spouting|n.|fışkırma, püskürme
melville|n.|louisiana eyaletinde yerleşim yeri
refreshed|adj.|tazelenmiş, yenilenmiş, ferahlamış
stooges|n.|yardakçı
disfigured|adj.|biçimi bozulmuş, biçimi bozulan
reefs|n.|mercan resifleri, solucan resifleri
conversing|adj.|zıt
anubis|n.|mısırın ölüler tanrısı
takers|n.|toplayıcı, alıcı, müşteri
ronin|n.|kimsenin emrinde olmayan samuray, başıboş samuray, kanun kaçağı
intuitive|adj.|sezgili, sezgi yoluyla keşfedilen, sezgiyle anlaşılan
hippy|n.|hippi, çiçek çocuğu
to-do|n.|tantana, telaş, curcuna
scarves|n.|eşarplar
albania|n.|arnavutluk
excalibur|n.|kral arthur'un efsanevi kılıcı
xing|n.|yaya geçidi
dinnertime|n.|yemek vakti
harboring|n.|barınma, yataklık
chas|n.|kibrit, ateş (kibrit)
productivity|n.|verimlilik
injecting|n.|enjekte etme, zerk etme, püskürtme
cross-country|n.|kros kayağı, kros, kayak krosu
loyalties|n.|bölgesel bağlılıklar, politik bağlılık, siyasi sadakat
unresolved|adj.|kararsız, çözünmemiş, çözümlenmemiş
froggy|adj.|kurbağa gibi, kurbağa dolu, kurbağalara ilişkin
stub|v.|köklerden temizlemek, vurmak, ayak parmağını çarparak incitmek
kao|n.|beyaz tay, beyaz tai, laos ve vietnam’da yaşayan etnik bir grup
derivative|adj.|türev
sparing|adj.|tutumlu
wichita|n.|viçita bölgesi, kansas eyaletinde şehir
denim|n.|kot kumaş, kot, blucin kumaşı
grievances|n.|yakınma, şikayeti gerektiren durum, dert
undetected|adj.|farkedilmemiş, saptanmamış, algılanmayan
scams|v.|dolap (çevirmek), tertip, dümen (sahtecilik)
rugs|n.|halılar
subjective|adj.|öznel
cicero|n.|çiçero, indiana eyaletinde yerleşim yeri, illinois eyaletinde yerleşim yeri
converting|n.|çevirme, dönüştürülüyor, dönüştürüyor
transformer|n.|trafo, dönüşen kimse, dönüşen şey
inventive|adj.|bulucu, özgün, yaratıcı
eloquent|adj.|dilbaz, dokunaklı, belagatli
soot|n.|is
umpire|v.|hakemlik etmek, hakem olmak, hakemlik yapmak
quicksand|n.|hareketli kum, kayan kum, batak
succeeding|n.|başarı, başarılı, varisi olan
georgian|n.|gürcü dili, gürcüce, gürcistanlı
bitterly|adv.|acı acı, acı olarak, için için
sloth|n.|üşengenlik, tembelhayvan, miskinlik
contraction|n.|büzülme, kasılma
fondue|n.|fondü
physiology|n.|işlevbilim, fizyoloji, işlevbilimi
britches|n.|pantolon
removes|v.|kaldırmak, sökmek, gidermek
longevity|n.|uzun ömürlü olma, uzun ömür, uzun ömürlülük
intergalactic|n.|gökadalar arası
lupus|n.|deri veremi, lupus, kurt (takımyıldızı)
sms|n.|kısa mesaj servisi, kısa mesaj hizmeti
extremists|n.|ifrata kaçan kimse, aşırı uç görüşteki kimse, aşırılık yapan kimse
remi|n.|galya'da eski bir halk
high-level|adj.|yüksek düzeyli, yüksek düzey
golfing|v.|golf oynamak, golf, florida eyaletinde yerleşim yeri
dab|v.|hafifçe dokunmak, dokunmak, hafifçe vurmak
tapestry|n.|duvar kilimi, duvara asılan işli örtü, goblen
lithium|n.|lityum, lityum (simgesi li)
sacrificial|adj.|kurban, kurbanlık
confetti|n.|konfeti
experimented|adj.|tecrübe edilmiş, denenmiş, üzerinde deney yapılmış
gurgles|v.|çağlamak
debs|n.|borç, sosyeteye ilk kez davet edilen kız
typhoid|n.|tifo
advert|v.|zikretmek, değinmek, dokundurmak
conditioned|adj.|şarta bağlı, bütünlemeli, koşullu
inconceivable|adj.|kavranılmaz, anlaşılamaz, anlaşılmaz
rusted|adj.|paslanmış, paslı, pas tutmuş
gazelle|n.|ceylan
cartels|n.|karteller
burdened|adj.|yüklü, yüklenmiş, tahmil edilmiş
murky|adj.|kasvetli, belirsiz, loş
ros|n.|site geneli, tüm site
artemis|n.|(yunan mitolojisinde) av ve ay tanrıçası
divinity|n.|tanrıça, ilah, teoloji
prays||birlikte dua eden aile birbirinden ayrılmaz
warranty|n.|güvence belgesi, ruhsat, haklı neden
ceramic|adj.|seramik
chilean|n.|şilili, şili'ye özgü, şili
canton|v.|kantonlara ayırmak, kare yerleştirmek, kanton
obese|adj.|şişko, obez, şişman
enzyme|n.|anamaya, enzim, ferment
repetition|n.|tekrar
kosovo|n.|kosova
silencer|n.|susturucu
bores|n.|deneme delgileri, test sondajları
multitude|n.|kalabalık, çokluk, izdiham
improbable|adj.|olası olmayan
hybrids|adj.|melez
cubans|n.|puro, küba purosu, kübalı
juliana|n.|kadın ismi
scepter|n.|kral asası, asa, saltanat asası
jailer|n.|gardiyan, zindancı
baldrick|n.|kılıç kayışı, kılıç hamayili
manuscripts|n.|el yazmaları
concealing|n.|gizleme, gizleyen
air-conditioning|n.|havalandırma, iklimlendirme, iklimleme döşemi
bureaucratic|adj.|bürokratik, bürokrasi ile ilgili
branding|n.|dağlama, damgalama, markalaştırma
pompeii|n.|italya'nın güneybatısında antik bir şehir, pompei
pedigree|n.|safkan, nesil, nesep
halifax|n.|ingiltere'de yerleşim yeri, massachusetts eyaletinde yerleşim yeri, north carolina eyaletinde yerleşim yeri
declares|n.|mübeyyin
killian|n.|louisiana eyaletinde yerleşim yeri
revolving|adj.|dönen, devvar, döner
indirectly|adv.|dolambaçlı biçimde, dolaylı olarak, zımni olarak
dragonfly|n.|kızböceği, helikopter böceği, yusufcuk böceği
contusions|n.|eziklik, bere, ezik
holographic|adj.|holografik
catheter|n.|akaç, sonda, daldıraç
one-armed|adj.|çolak
aimee|n.|kadın ismi
know-it-all|n.|bilmiş, ukala
fenner|n.|new york eyaletinde yerleşim yeri
blowout|n.|patlama, lastik patlağı, delik
beaming|adj.|ışık saçan, parlak, sevinçle parlayan (yüz)
dutchman|n.|felemenkli, hollandalı, hollandalı erkek
testicle|n.|testis
stationery|n.|yazı malzemesi, mektup kağıdı ve zarf, kırtasiye
long-lost|n.|uzun süredir kayıp/ortalıkta görünmeyen, uzun süredir görülmeyen akraba, uzun süredir kayıp oğul
stardust|n.|gönül serüveni, parıldayan kitle
dismount|v.|attan inmek, indirmek, sökmek
scenic|n.|doğa filmi, manzara, sahne
lorelei|n.|kadın ismi, lorelei
dill|n.|yabantırak, anethum graveolens, dereotu
carbs|n.|karbonhidrat
scarface|n.|yaralıyüz, alphonse capone (1899-1947) amerikalı ganster
puzzling|adj.|kafa karıştırıcı
defends|v.|savunmak
practised|adj.|yetenekli, tecrübeli, hünerli
suites|n.|seriler
cranes|n.|elektrikli gezer vinç, kule vinçleri, vinçler ve kaldırma ekipmanları
masseuse|n.|kadın masajcı, masajcı kadın, masajcı
caper|v.|oynayıp sıçramak, hoplamak, muziplik etmek
boo-boo|n.|aptalca hata, büyük hata, gaf
def|adj.|güzel, çok iyi
sectors|n.|çok disiplinli ve etkileşimli sektörler, sektörlere göre dağılım, sektörlere göre dağılımı
lengthy|adj.|fazlasıyla uzun, uzun, ayrıntılı
fortified|adj.|kuvvetlendirilmiş, müstahkem, tahkim edilmiş
dory|n.|küçük altı düz kayık, yassı kayık, dori
hewitt|n.|minnesota eyaletinde şehir, teksas eyaletinde şehir, wisconsin eyaletinde yerleşim yeri
chink|v.|şıngırdatmak, yarıkları doldurmak, şıkırdamak
psychics|n.|psikoloji
decorative|adj.|süslü, dekoratif, süsleyici
geraldine|n.|kadın ismi, montana eyaletinde yerleşim yeri
correspond|v.|tekabül etmek, haberleşmek, mektuplaşmak
graciously|adv.|zarif bir şekilde, cana yakın bir şekilde, iyi niyetli bir şekilde
bronco|n.|vahşi at, ehlileştirilmemiş at, yabani at
mangy|adj.|uyuz
shipwreck|n.|gemi enkazı
trustee|n.|yediemin, mütevelli
bellowing|n.|feryat
vagabond|v.|serserilik etmek, serserilik yapmak, berduş
goofing|n.|işten kaçınma
mind-blowing|adj.|akıllara durgunluk veren, insanın aklını başından alan
forte|n.|başlıca sıfat, birinin asıl uzmanlık alanı, kişinin en güçlü tarafı
absolve|v.|arılamak, kurtarmak, temize çıkarmak
eros|n.|eros, güneş sisteminde bulunan bir asteroid, louisiana eyaletinde yerleşim yeri
vomited|n.|kusmuk
dismal|adj.|loş ve sıkıntı verici, sıkıntılı, kasvetli
telegrams|n.|telgraf
discs|n.|kompakt diskler, debriyaj diskleri, frezeli diskler
aerobics|n.|aerobik, aerobik egzersiz
melrose|n.|iowa eyaletinde şehir, massachusetts eyaletinde şehir, minnesota eyaletinde şehir
wren|n.|çalıkuşu, çitkuşu, çıtkuşu
bogey|n.|şeytan, gulyabani, öcü
forging|n.|dövme iş, demircilik, demir dövme
guesthouse|n.|misafirhane, konuk evi, pansiyon
regency|n.|krallık, naiplik, saltanat
lebanese|n.|lübnanlı, lübnan'lı, lübnan'a özgü
harlot|n.|fahişe, kahpe, orospu
bashful|n.|mahcup, çekingen, sıkılgan
coached|adj.|yetiştirilmiş, yetiştirilen
shambles|n.|darmadağın bir yer, savaş alanı, karmakarışık bir yer
yoghurt|n.|yoğurt
geordie|n.|tyneside'li
woodward|n.|orman korucu, korucu, iowa eyaletinde şehir
demi|n.|ham su, yarı, yarım
committees|n.|komiteler
debates|n.|tartışma, seçim kampanyası açık oturumları
evacuating|n.|boşaltma
striker|n.|forvet
wentworth|n.|güney dakota eyaletinde yerleşim yeri, missouri eyaletinde yerleşim yeri, north carolina eyaletinde yerleşim yeri
circumcised|adj.|sünnetli
vice-president|n.|asbaşkan, başkan yardımcısı
deva|n.|hinduizm'de tanrı veya ilahi varlık
brainless|adj.|kafasız, beyinsiz
inherent|adj.|doğasında var olan, özünde olan, asıl
maniacally|adv.|delice, manyakça
bourne|n.|dere, diyar, memleket
reluctantly|adv.|istemeden, isteksiz olarak, kerhen
pellets|n.|parıldayan saçma taneleri, demir cevheri peletleri, demir cevheri topakları
abstinence|n.|içkiden uzak durma
trombone|n.|trombon
boomerang|v.|geri tepmek, aleyhe dönmek, geri tepen plan
readiness|n.|hazır olma, hazır bulunma, hazır oluş
realms|n.|alanlar
antidepressants|n.|antidepresanlar
vibrator|n.|titreşimli masaj aleti, titreşken, titreştirici
astrologer|n.|astrolog, müneccim, yıldız falcısı
ghoul|n.|gulyabani, cadı, hortlak
attribute|v.|bağlamak, atfetmek, dayandırmak
sparkly|adv.|cıvıl cıvıl, parıltılı
torah|n.|tevrat, pentateuk, tora
acp|n.|hava sahası kontrol planı
magnifying|adj.|büyüten
coding|n.|kodlama, kodlayan, programlama
latimer|n.|iowa eyaletinde şehir, kansas eyaletinde şehir
hatches|v.|gemiyi fırtınaya hazırlamak, zor bir duruma hazırlanmak, bir geminin altındaki hücreye hapsedilmek
rump|n.|but (sığır), geri kalan parça, kıç
pampered|adj.|şımartılmış
stinker|n.|iğrenç kokan kimse, kötü kokan, çok kalitesiz şey
remus|n.|(roma mitolojisinde) romulus'un ikiz kardeşi
greener|adj.|daha yeşil
ives|n.|ingiltere'de yerleşim yeri
mittens|n.|tek parmaklı eldiven
pessimistic|adj.|karamsar, kötümser
angelic|adj.|melek gibi, meleklere özgü, ilahi
midsummer|n.|yaz ortası, yazın ortası
snowflake|n.|iri kar tanesi
wrecks|n.|enkaz, gemi enkazı
quartz|n.|kuartz, kuvars
emt|n.|acil yardım/müdahale çalışanı
humpty|adj.|rahatsız olmuş
willows|n.|kaliforniya eyaletinde şehir
barged|n.|duba, mavna
wishful|adj.|arzulu, istekli
concur|v.|aynı zamana rastlamak, anlaşmak, rastlamak
stupidly|adv.|aval aval, alık salık, aptalca
temptations|n.|cezbedicilik, şeytana uyma, birinin ayartılmasına çalışılma
enforced|adj.|mecburi, zorlanmış, zorunlu
alcatraz|n.|kaliforniya'da bir ada
playwright|n.|oyun yazarı, piyes yazarı, dramaturg
striving|n.|çaba gösterme, uğraşma, mücadele
grazed|adj.|sıyrık
negligent|adj.|ihmalkar
pulsing|n.|nabız gibi atış, nabız gibi atma, vurma
psychopaths|n.|ruh hastası, akıl hastası, psikopat
benches|n.|avam kamarası'ndaki koltuklar
mesh|v.|ağ ile tutmak, birleşmek, birbirine geçirmek (çark dişlerini)
hymns|n.|ilahiler
treasured|adj.|değerli, kıymetli
musk|n.|misk kokusu, misk, mis
gould|n.|oklahoma eyaletinde yerleşim yeri, oklahoma eyaletinde şehir
musket|n.|tüfek, tüfek (eski model), eski tip tüfek
geologists|n.|türkiye petrol jeologları derneği
rem|n.|hızlı göz hareketi (uyku), uyku esnasında yapılan hızlı göz hareketi, rem
intermission|n.|tatil, fasılalı, perde arası
grits|n.|kaba öğütülmüş tahıl, kırma (hububat), iri yulaf taneleri
redirect|v.|yönünü değiştirmek, başka tarafa yönlendirmek, yeni adrese göndermek
disrupting|n.|bozma, bozan
sable|n.|samur
connelly|n.|north carolina eyaletinde yerleşim yeri
woes|n.|ekonomik sıkıntılar
armoured|adj.|zırhlı
lackey|n.|uşak
erupt|v.|patlak vermek, püskürmek, patlamak
sanction|n.|yaptırım, müeyyide, onaylama
hinder|v.|engellemek, engel olmak, aksatmak
demoted|adj.|rütbesini indirilmiş, rütbesi düşürülmüş, alt sınıfa indirilmiş
surfers|n.|sörfçü
blackbird|n.|karatavuk, kara tavuk, kara bakal
adjourn|v.|ertelemek, sonraya bırakmak, oturuma ara vermek
bile|n.|garaz, terslik, öd
sunken|adj.|çökük
sprain|v.|burkmak
commendable|adj.|övgüye değer, övülmeye layık, övülmeye değer
upfront|n.|dürüst, ön ödeme, belli
maroon|v.|ıssız adada bırakmak, ıssız bir adaya bırakmak, mahsur kalmak
possessing|adj.|haiz, hamil
prematurely|adv.|erken, zamanından önce, mevsimsiz olarak
uganda|n.|uganda
madras|n.|büyük mendil, çubuklu pamuklu kumaş, madras
cleanliness|n.|temizlik
swayed|v.|sallanmak (bir yandan öbür yana), salınmak, yönetim/kontrol
antichrist|n.|deccal, sahte isa, hristiyanlığı reddeden kimse
skim|v.|sektirmek
irishman|n.|irlandalı
pounded|adj.|dövülmüş
sedate|v.|sakinleştirmek, yatıştırmak, yatıştırıcı vermek
hurricanes|n.|kasırga
oink|n.|domuz sesi
moreau|n.|new york eyaletinde yerleşim yeri
foolishly|adv.|aptalca, salakça, enayice
radicals|n.|radikaller
momentous|adj.|mühim, çok önemli, önemli
une|n.|doğru, kesir çizgisi, yanal doğru
disengage|v.|bağlantısını kesmek, kurtarmak, affetmek
landfill|n.|arazi doldurma, arazi yükseltme, atık gömme
jolene|n.|bir kadın ismi
disturbances|n.|fitne
kilometer|n.|kilometre, bin metre, kilometre (simgesi km)
rigs|n.|teçhizat
high-ranking|adj.|rütbeli, yüksek konumda olan, yüksek rütbeli
lula|n.|georgia eyaletinde şehir, mississippi eyaletinde yerleşim yeri
inbound|adj.|şehir merkezine doğru giden (otobüs vb), limana giren (gemi), limana doğru yönelmiş
stetson|n.|geniş kenarlı fötr şapka, şapka, fötr şapka
partake|v.|partook - partaken, payı olmak, paylaşmak
paralysed|adj.|inmeli, çarpık, felce uğramış
one-sided|adj.|taraflı, tek yüzlü, eşitsiz
musicals|n.|müzikaller
subdued|adj.|bastırılmış, hafif, zorlanmış
weeps|v.|ağlamak
commies|n.|komi, lokantalarda garson yamağı, otelde ayak işlerine bakan kimse
indisposed|adj.|rahatsız, hasta, isteksiz
fro|v.|oraya buraya saçılmak/akmak, boş yere koşuşturma, ileri geri
beagle|n.|av köpeği, casus, tazı
plumb|v.|derinlemesine araştırmak, düzeltmek, derinine inmek
culprits|n.|suçlu
momentary|adj.|bir anlık
sanitary|adj.|sağlıkla ilgili, hijyenik
ria|n.|ria, derinliğin kıyıya doğru azaldığı dar ağız
skyler|n.|gök, gökyüzü
constitutes|v.|oluşturmak, teşkil etmek, kurmak
installments|n.|taksitler
unsuspecting|adj.|kuşkusuz, masum, bir şeyden kuşkulanmayan
d-day|n.|önemli gün, d günü
asphyxiation|n.|nefes alamama, soluyamama, soluk alamama
consented|adv.|aksi kararlaştırılmadıkça
swimmers|n.|sperm
voter|n.|seçmen
robs|v.|soymak
lolita|n.|seksi genç kız, vladimir nabokov'un romanı, teksas eyaletinde şehir
fresno|n.|kaliforniya eyaletinde şehir
studs|n.|bağlantı parçası
peri|n.|peri, çok güzel kadın, büyüleyici kadın
shudder|v.|titremek, ürpermek, tüyleri ürpermek
benoit|n.|mississippi eyaletinde yerleşim yeri
taker|n.|toplayıcı, alıcı, müşteri
dowager|n.|zengin dul kadın, dul yaşlı kadın, gösterişli yaşlı kadın
heartburn|n.|mide ekşimesi, mide yanması, midede ekşime
imaginations|n.|hayal gücü, hayal
modelling|n.|modelleme, modelcilik, mankenlik
dopamine|n.|dopamin
severity|n.|şiddet
leaflets|v.|bildiri dağıtmak
evilly|adv.|kötülükle, günahkarca, uğursuz bir şekilde
extensions|n.|uzantı
glimmer|v.|parıldamak, ışık vermek, hafifçe pırıldamak
arlington|n.|alabama eyaletinde şehir, güney dakota eyaletinde şehir, georgia eyaletinde şehir
vex|v.|vexed/vext - vexed/vext, tartışmak, darıltmak
twerp|n.|aptal, velet, ahmak
resonance|n.|rezonans
garnet|n.|lal, lal taşı, grena
bavaria|n.|bavyera
mcgill|n.|nevada eyaletinde şehir
expire|v.|süresi dolmak
presenter|n.|sunucu
hess|n.|bombok bir durum, hess operasyonu
beryl|n.|beril, utah eyaletinde şehir
lyndon|n.|illinois eyaletinde yerleşim yeri, kansas eyaletinde şehir, kentucky eyaletinde şehir
ticker|n.|yürek, tıkırdayan, cesaret
entrees|n.|antre, giriş müziği, başlangıç yemeği
nr|adj.|yakın, yanında
miao|n.|miao
signorina|n.|matmazel
duress|n.|tazyik, icbar, tehdit
bacterial|adj.|bakteriye ait, bakteri, bakteriyle ilgili
sabotaging|v.|sabote etmek, baltalamak, sabotaj yapmak
networking|n.|network kurma, örgülenme, örgülenim
jocks|n.|iskoçyalı, spor delisi/meraklısı/düşkünü, atlet
locusts|n.|salkımağacı, keçiboynuzu, ağustosböceği
lodgings|n.|pansiyon
dozed|v.|pineklemek, kestirmek, uyuklamak
bitty|adj.|parçalı, kısım kısım, çok az
frenchy|adj.|fransız
milt|v.|balık yumurtalarını döllemek, balık spermi, balık menisi
uranus|n.|uranüs, uranus
matador|n.|boğa güreşçisi, matador
bala|n.|galler'de yerleşim yeri
unfriendly|adj.|sokulgan olmayan, soğuk, samimiyetsiz
checklist|v.|kontrol listesine eklemek, yapılacak işler listesine eklemek, kontrol listesi
imports|n.|dışalım, ithal malları, ithalat
devilish|adj.|kötü, şeytanca, müthiş
octavia|n.|nebraska eyaletinde yerleşim yeri
britannia|n.|çatal, britanya
hospitable|adj.|konuksever
staples|n.|zımba, dünya borsa fiyatlarına tabi başlıca maddeler, kırpıntı lifler
sociable|adj.|sosyal, girişken, sokulgan
bikinis|n.|bikini
bazooka|n.|roketatar, bazuka
weirdly|adv.|tuhaf tuhaf, acayip bir şekilde, esrarengiz bir şekilde
transylvania|n.|transilvanya, romanya'da dağlık bir bölge
alcoholism|n.|alkoliklik
hold-up|n.|gecikme, tıkanıklık, engel
droppings|n.|gübre, damlalar, hayvan dışkısı
flier|n.|uçan canlı, hızlı tren, el ilanı
scorching|adj.|kırıcı, yakıcı, kavurucu
flexibility|n.|esneklik
minotaur|n.|minotor, yarı insan yarı boğa canavar (girit)
narcissistic|adj.|narsisizm ile ilgili, narsisizm gösteren
matinee|n.|matine, gündüz oyunu
absolution|n.|günahların bağışlanması
splashed|adj.|püskürme
floral|n.|çiçek, çiçeklere ait, çiçekli
peralta|n.|new mexico eyaletinde yerleşim yeri
toads|v.|yaltaklanmak, dalkavukluk etmek, kara kurbağa
electoral|adj.|seçmenler ile ilgili, seçimle ilgili, seçime ait
violins|n.|keman
compliance|n.|riayet, uyma
pathway|n.|yaya geçidi, patika, keçiyolu
nielsen|n.|ziehl-nielsen boyası
juries|n.|jüri
unconditionally|adv.|kayıtsız şartsız olarak, bila kayduşart, şartsız olarak
pacemaker|n.|pacemaker, örnek alınan kimse, kalp temposunu ayarlayan alet
in-between|adj.|orta, aracı
cuss|v.|sövmek, lanet, küfür
persistence|n.|sebat, ısrar
disobedience|n.|itaatsizlik
interestingly|adv.|ilginç şekilde, ilginç biçimde
revolves|expr.|dünya güneşin etrafında döner, dünyanın kendi etrafında döndüğünü sanmak, çok bencil olmak
icebox|n.|buz makinesi, buzluk, buzdolabı
transports|n.|kuvvetli bir duyguya kapılma, kendinden geçme
mistrial|n.|hata yüzünden hükümsüz kalan yargılama, delil yetersizliğinden görevsizlik kararı, hatalı yargılama
disclosed|v.|açıklanmak, açığı çıkmak, ifşa olmak
remand|v.|tutmak (hapiste), geri göndermek, geri göndermek (tutuklu)
welding|adj.|baskıcı, etme veya olma, kaynak makinesi
fruitful|adj.|bereketli, verimli
ergo|adv.|binaenaleyh, bundan dolayı, dolayısıyla
fodder|v.|beslemek, yem vermek, yemlemek
disarmed|adj.|silahsızlandırılmış, kilitsiz, silahsız
adolescence|n.|ergenlik çağı, ergenlik
jugs|n.|göğüsler/memeler, göğüsler
examinations|n.|sınavlar
puree|v.|püre yapmak, ezme, püre
converse|adj.|zıt
uttered|adj.|sözle ifade edilen/anlatılmış
graders|n.|altıncı sınıflar, beşinci sınıflar, birinci sınıflar
trustees|n.|güven ve güvenilir kişiler, bir vakfın yönetim kurulu, mütevelli heyeti
tweets|v.|ciklemek, cıvıldamak, tweetlemek
lament|n.|ağıt
mccord|n.|missouri eyaletinde yerleşim yeri
essentials|n.|temeller, ana hatlar, ana hatları
goran|n.|güney slavlarından bir etnik grup, goran, gorani
weatherman|n.|hava tahmincisi, meteoroloji uzmanı, hava durumu sunucusu
turnip|n.|turp, şalgam, sıkıcı ve monoton iş
galilee|n.|kilise avlusu, kilise giriş salonu, celile (israil'de bir bölge)
queasy|adj.|tatsız, kusturucu, hassas
armpits|v.|koltuk altlarını almak, çok meşgul, boğazına kadar (işlerle) gömülü
albeit|conj.|yine, vakıa, fakat
installment|n.|taksit
`;
