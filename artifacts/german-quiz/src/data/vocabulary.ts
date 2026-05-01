export type Level = "A1" | "A2" | "B1";

export interface VocabItem {
  german: string;
  turkish: string;
  category: string;
  level: Level;
  exampleDe: string;
  exampleTr: string;
}

export const vocabulary: VocabItem[] = [
  // ─── A1 ───────────────────────────────────────────────────────────────────
  // Hayvanlar
  { german: "Hund", turkish: "Köpek", category: "Hayvanlar", level: "A1", exampleDe: "Der Hund ist groß.", exampleTr: "Köpek büyük." },
  { german: "Katze", turkish: "Kedi", category: "Hayvanlar", level: "A1", exampleDe: "Die Katze schläft.", exampleTr: "Kedi uyuyor." },
  { german: "Vogel", turkish: "Kuş", category: "Hayvanlar", level: "A1", exampleDe: "Der Vogel singt.", exampleTr: "Kuş şarkı söylüyor." },
  { german: "Pferd", turkish: "At", category: "Hayvanlar", level: "A1", exampleDe: "Das Pferd läuft schnell.", exampleTr: "At hızlı koşuyor." },
  { german: "Fisch", turkish: "Balık", category: "Hayvanlar", level: "A1", exampleDe: "Der Fisch schwimmt.", exampleTr: "Balık yüzüyor." },
  { german: "Kuh", turkish: "İnek", category: "Hayvanlar", level: "A1", exampleDe: "Die Kuh gibt Milch.", exampleTr: "İnek süt verir." },
  { german: "Maus", turkish: "Fare", category: "Hayvanlar", level: "A1", exampleDe: "Die Maus ist klein.", exampleTr: "Fare küçük." },
  { german: "Hase", turkish: "Tavşan", category: "Hayvanlar", level: "A1", exampleDe: "Der Hase ist weiß.", exampleTr: "Tavşan beyaz." },

  // Yiyecek & İçecek
  { german: "Apfel", turkish: "Elma", category: "Yiyecek", level: "A1", exampleDe: "Ich esse einen Apfel.", exampleTr: "Bir elma yiyorum." },
  { german: "Brot", turkish: "Ekmek", category: "Yiyecek", level: "A1", exampleDe: "Das Brot ist frisch.", exampleTr: "Ekmek taze." },
  { german: "Milch", turkish: "Süt", category: "Yiyecek", level: "A1", exampleDe: "Ich trinke Milch.", exampleTr: "Süt içiyorum." },
  { german: "Wasser", turkish: "Su", category: "Yiyecek", level: "A1", exampleDe: "Ich möchte Wasser, bitte.", exampleTr: "Su istiyorum, lütfen." },
  { german: "Ei", turkish: "Yumurta", category: "Yiyecek", level: "A1", exampleDe: "Ich koche ein Ei.", exampleTr: "Bir yumurta pişiriyorum." },
  { german: "Käse", turkish: "Peynir", category: "Yiyecek", level: "A1", exampleDe: "Der Käse schmeckt gut.", exampleTr: "Peynir güzel tadıyor." },
  { german: "Banane", turkish: "Muz", category: "Yiyecek", level: "A1", exampleDe: "Die Banane ist gelb.", exampleTr: "Muz sarı." },
  { german: "Kuchen", turkish: "Pasta/Kek", category: "Yiyecek", level: "A1", exampleDe: "Der Kuchen ist süß.", exampleTr: "Pasta tatlı." },
  { german: "Kaffee", turkish: "Kahve", category: "Yiyecek", level: "A1", exampleDe: "Ich trinke Kaffee am Morgen.", exampleTr: "Sabah kahve içiyorum." },
  { german: "Tee", turkish: "Çay", category: "Yiyecek", level: "A1", exampleDe: "Der Tee ist heiß.", exampleTr: "Çay sıcak." },

  // Aile
  { german: "Mutter", turkish: "Anne", category: "Aile", level: "A1", exampleDe: "Meine Mutter kocht gern.", exampleTr: "Annem yemek yapmayı sever." },
  { german: "Vater", turkish: "Baba", category: "Aile", level: "A1", exampleDe: "Mein Vater arbeitet.", exampleTr: "Babam çalışıyor." },
  { german: "Bruder", turkish: "Erkek kardeş", category: "Aile", level: "A1", exampleDe: "Mein Bruder ist jung.", exampleTr: "Erkek kardeşim genç." },
  { german: "Schwester", turkish: "Kız kardeş", category: "Aile", level: "A1", exampleDe: "Meine Schwester liest.", exampleTr: "Kız kardeşim okuyor." },
  { german: "Kind", turkish: "Çocuk", category: "Aile", level: "A1", exampleDe: "Das Kind spielt.", exampleTr: "Çocuk oynuyor." },
  { german: "Baby", turkish: "Bebek", category: "Aile", level: "A1", exampleDe: "Das Baby schläft viel.", exampleTr: "Bebek çok uyuyor." },

  // Günlük Hayat
  { german: "Haus", turkish: "Ev", category: "Günlük Hayat", level: "A1", exampleDe: "Das Haus ist groß.", exampleTr: "Ev büyük." },
  { german: "Auto", turkish: "Araba", category: "Günlük Hayat", level: "A1", exampleDe: "Das Auto ist rot.", exampleTr: "Araba kırmızı." },
  { german: "Buch", turkish: "Kitap", category: "Günlük Hayat", level: "A1", exampleDe: "Das Buch ist interessant.", exampleTr: "Kitap ilginç." },
  { german: "Tisch", turkish: "Masa", category: "Günlük Hayat", level: "A1", exampleDe: "Der Tisch ist aus Holz.", exampleTr: "Masa ahşaptan yapılmış." },
  { german: "Stuhl", turkish: "Sandalye", category: "Günlük Hayat", level: "A1", exampleDe: "Der Stuhl ist bequem.", exampleTr: "Sandalye rahat." },
  { german: "Telefon", turkish: "Telefon", category: "Günlük Hayat", level: "A1", exampleDe: "Mein Telefon klingelt.", exampleTr: "Telefonum çalıyor." },
  { german: "Schule", turkish: "Okul", category: "Günlük Hayat", level: "A1", exampleDe: "Die Schule beginnt um acht.", exampleTr: "Okul sekizde başlıyor." },
  { german: "Bett", turkish: "Yatak", category: "Günlük Hayat", level: "A1", exampleDe: "Das Bett ist weich.", exampleTr: "Yatak yumuşak." },

  // Sıfatlar
  { german: "groß", turkish: "Büyük", category: "Sıfatlar", level: "A1", exampleDe: "Das Haus ist sehr groß.", exampleTr: "Ev çok büyük." },
  { german: "klein", turkish: "Küçük", category: "Sıfatlar", level: "A1", exampleDe: "Die Maus ist klein.", exampleTr: "Fare küçük." },
  { german: "gut", turkish: "İyi", category: "Sıfatlar", level: "A1", exampleDe: "Das Essen ist gut.", exampleTr: "Yemek iyi." },
  { german: "schlecht", turkish: "Kötü", category: "Sıfatlar", level: "A1", exampleDe: "Das Wetter ist schlecht.", exampleTr: "Hava kötü." },
  { german: "neu", turkish: "Yeni", category: "Sıfatlar", level: "A1", exampleDe: "Ich habe ein neues Auto.", exampleTr: "Yeni bir arabam var." },
  { german: "alt", turkish: "Eski / Yaşlı", category: "Sıfatlar", level: "A1", exampleDe: "Das Buch ist alt.", exampleTr: "Kitap eski." },
  { german: "schön", turkish: "Güzel", category: "Sıfatlar", level: "A1", exampleDe: "Das Wetter ist schön.", exampleTr: "Hava güzel." },
  { german: "heiß", turkish: "Sıcak", category: "Sıfatlar", level: "A1", exampleDe: "Der Tee ist heiß.", exampleTr: "Çay sıcak." },
  { german: "kalt", turkish: "Soğuk", category: "Sıfatlar", level: "A1", exampleDe: "Das Wasser ist kalt.", exampleTr: "Su soğuk." },

  // Günler
  { german: "Montag", turkish: "Pazartesi", category: "Günler", level: "A1", exampleDe: "Am Montag gehe ich zur Arbeit.", exampleTr: "Pazartesi işe gidiyorum." },
  { german: "Dienstag", turkish: "Salı", category: "Günler", level: "A1", exampleDe: "Am Dienstag habe ich frei.", exampleTr: "Salı günü iznim var." },
  { german: "Mittwoch", turkish: "Çarşamba", category: "Günler", level: "A1", exampleDe: "Mittwoch ist mein Lieblingstag.", exampleTr: "Çarşamba benim favori günüm." },
  { german: "Donnerstag", turkish: "Perşembe", category: "Günler", level: "A1", exampleDe: "Am Donnerstag lerne ich Deutsch.", exampleTr: "Perşembe Almanca öğreniyorum." },
  { german: "Freitag", turkish: "Cuma", category: "Günler", level: "A1", exampleDe: "Der Freitag ist der letzte Schultag.", exampleTr: "Cuma son okul günü." },
  { german: "Samstag", turkish: "Cumartesi", category: "Günler", level: "A1", exampleDe: "Am Samstag schlafe ich lange.", exampleTr: "Cumartesi uzun uyuyorum." },
  { german: "Sonntag", turkish: "Pazar", category: "Günler", level: "A1", exampleDe: "Sonntag ist ein Ruhetag.", exampleTr: "Pazar dinlenme günü." },

  // Renkler
  { german: "rot", turkish: "Kırmızı", category: "Renkler", level: "A1", exampleDe: "Die Rose ist rot.", exampleTr: "Gül kırmızı." },
  { german: "blau", turkish: "Mavi", category: "Renkler", level: "A1", exampleDe: "Der Himmel ist blau.", exampleTr: "Gökyüzü mavi." },
  { german: "grün", turkish: "Yeşil", category: "Renkler", level: "A1", exampleDe: "Das Gras ist grün.", exampleTr: "Çimen yeşil." },
  { german: "gelb", turkish: "Sarı", category: "Renkler", level: "A1", exampleDe: "Die Sonne ist gelb.", exampleTr: "Güneş sarı." },
  { german: "schwarz", turkish: "Siyah", category: "Renkler", level: "A1", exampleDe: "Die Nacht ist schwarz.", exampleTr: "Gece siyah." },
  { german: "weiß", turkish: "Beyaz", category: "Renkler", level: "A1", exampleDe: "Der Schnee ist weiß.", exampleTr: "Kar beyaz." },

  // ─── A2 ───────────────────────────────────────────────────────────────────
  // Aile & İnsanlar
  { german: "Oma", turkish: "Büyükanne", category: "Aile", level: "A2", exampleDe: "Meine Oma backt Kuchen.", exampleTr: "Büyükannem kek pişirir." },
  { german: "Opa", turkish: "Büyükbaba", category: "Aile", level: "A2", exampleDe: "Mein Opa liest die Zeitung.", exampleTr: "Büyükbabam gazete okur." },
  { german: "Onkel", turkish: "Amca / Dayı", category: "Aile", level: "A2", exampleDe: "Mein Onkel wohnt in Berlin.", exampleTr: "Amcam Berlin'de oturuyor." },
  { german: "Tante", turkish: "Hala / Teyze", category: "Aile", level: "A2", exampleDe: "Meine Tante ist Ärztin.", exampleTr: "Teyzemin doktor." },
  { german: "Freund", turkish: "Erkek arkadaş", category: "Aile", level: "A2", exampleDe: "Mein Freund heißt Max.", exampleTr: "Arkadaşımın adı Max." },
  { german: "Freundin", turkish: "Kız arkadaş", category: "Aile", level: "A2", exampleDe: "Meine Freundin kommt morgen.", exampleTr: "Kız arkadaşım yarın geliyor." },

  // Meslekler
  { german: "Arzt", turkish: "Doktor", category: "Meslekler", level: "A2", exampleDe: "Der Arzt hilft den Patienten.", exampleTr: "Doktor hastalara yardım eder." },
  { german: "Lehrer", turkish: "Öğretmen", category: "Meslekler", level: "A2", exampleDe: "Der Lehrer erklärt die Aufgabe.", exampleTr: "Öğretmen görevi açıklıyor." },
  { german: "Koch", turkish: "Aşçı", category: "Meslekler", level: "A2", exampleDe: "Der Koch kocht lecker.", exampleTr: "Aşçı lezzetli pişiriyor." },
  { german: "Polizist", turkish: "Polis", category: "Meslekler", level: "A2", exampleDe: "Der Polizist hilft mir.", exampleTr: "Polis bana yardım ediyor." },
  { german: "Kellner", turkish: "Garson", category: "Meslekler", level: "A2", exampleDe: "Der Kellner bringt die Rechnung.", exampleTr: "Garson hesabı getiriyor." },
  { german: "Verkäufer", turkish: "Satıcı", category: "Meslekler", level: "A2", exampleDe: "Der Verkäufer ist freundlich.", exampleTr: "Satıcı nazik." },
  { german: "Mechaniker", turkish: "Tamirci", category: "Meslekler", level: "A2", exampleDe: "Der Mechaniker repariert das Auto.", exampleTr: "Tamirci arabayı onarıyor." },

  // Şehir & Ulaşım
  { german: "Straße", turkish: "Cadde / Sokak", category: "Şehir", level: "A2", exampleDe: "Die Straße ist laut.", exampleTr: "Cadde gürültülü." },
  { german: "Bahnhof", turkish: "Tren istasyonu", category: "Şehir", level: "A2", exampleDe: "Der Zug fährt vom Bahnhof ab.", exampleTr: "Tren istasyondan kalkıyor." },
  { german: "Flughafen", turkish: "Havalimanı", category: "Şehir", level: "A2", exampleDe: "Der Flughafen ist sehr groß.", exampleTr: "Havalimanı çok büyük." },
  { german: "Supermarkt", turkish: "Süpermarket", category: "Şehir", level: "A2", exampleDe: "Ich kaufe im Supermarkt ein.", exampleTr: "Süpermarkette alışveriş yapıyorum." },
  { german: "Apotheke", turkish: "Eczane", category: "Şehir", level: "A2", exampleDe: "Ich gehe in die Apotheke.", exampleTr: "Eczaneye gidiyorum." },
  { german: "Krankenhaus", turkish: "Hastane", category: "Şehir", level: "A2", exampleDe: "Das Krankenhaus ist in der Nähe.", exampleTr: "Hastane yakında." },
  { german: "Bank", turkish: "Banka", category: "Şehir", level: "A2", exampleDe: "Ich gehe zur Bank.", exampleTr: "Bankaya gidiyorum." },
  { german: "Post", turkish: "Posta / Postane", category: "Şehir", level: "A2", exampleDe: "Ich schicke den Brief per Post.", exampleTr: "Mektubu postayla gönderiyorum." },

  // Yiyecek (A2)
  { german: "Fleisch", turkish: "Et", category: "Yiyecek", level: "A2", exampleDe: "Ich esse kein Fleisch.", exampleTr: "Et yemiyorum." },
  { german: "Gemüse", turkish: "Sebze", category: "Yiyecek", level: "A2", exampleDe: "Gemüse ist gesund.", exampleTr: "Sebze sağlıklı." },
  { german: "Salat", turkish: "Salata", category: "Yiyecek", level: "A2", exampleDe: "Der Salat ist frisch.", exampleTr: "Salata taze." },
  { german: "Suppe", turkish: "Çorba", category: "Yiyecek", level: "A2", exampleDe: "Die Suppe ist warm.", exampleTr: "Çorba sıcak." },
  { german: "Reis", turkish: "Pirinç", category: "Yiyecek", level: "A2", exampleDe: "Ich koche Reis.", exampleTr: "Pirinç pişiriyorum." },
  { german: "Kartoffel", turkish: "Patates", category: "Yiyecek", level: "A2", exampleDe: "Ich mag Kartoffeln.", exampleTr: "Patatesleri seviyorum." },
  { german: "Tomate", turkish: "Domates", category: "Yiyecek", level: "A2", exampleDe: "Die Tomate ist rot und saftig.", exampleTr: "Domates kırmızı ve sulu." },
  { german: "Butter", turkish: "Tereyağı", category: "Yiyecek", level: "A2", exampleDe: "Ich streiche Butter aufs Brot.", exampleTr: "Ekmeğe tereyağı sürüyorum." },

  // Sıfatlar (A2)
  { german: "teuer", turkish: "Pahalı", category: "Sıfatlar", level: "A2", exampleDe: "Das Auto ist sehr teuer.", exampleTr: "Araba çok pahalı." },
  { german: "billig", turkish: "Ucuz", category: "Sıfatlar", level: "A2", exampleDe: "Das ist sehr billig.", exampleTr: "Bu çok ucuz." },
  { german: "schnell", turkish: "Hızlı", category: "Sıfatlar", level: "A2", exampleDe: "Das Auto fährt schnell.", exampleTr: "Araba hızlı gidiyor." },
  { german: "langsam", turkish: "Yavaş", category: "Sıfatlar", level: "A2", exampleDe: "Die Schildkröte läuft langsam.", exampleTr: "Kaplumbağa yavaş yürüyor." },
  { german: "müde", turkish: "Yorgun", category: "Sıfatlar", level: "A2", exampleDe: "Ich bin sehr müde.", exampleTr: "Çok yorgunum." },
  { german: "glücklich", turkish: "Mutlu", category: "Sıfatlar", level: "A2", exampleDe: "Sie ist sehr glücklich.", exampleTr: "O çok mutlu." },
  { german: "traurig", turkish: "Üzgün", category: "Sıfatlar", level: "A2", exampleDe: "Er ist traurig.", exampleTr: "O üzgün." },
  { german: "hungrig", turkish: "Aç", category: "Sıfatlar", level: "A2", exampleDe: "Ich bin hungrig.", exampleTr: "Açım." },
  { german: "durstig", turkish: "Susuz", category: "Sıfatlar", level: "A2", exampleDe: "Das Kind ist durstig.", exampleTr: "Çocuk susuz." },

  // Fiiller (A2)
  { german: "kaufen", turkish: "Satın almak", category: "Fiiller", level: "A2", exampleDe: "Ich kaufe ein Buch.", exampleTr: "Bir kitap satın alıyorum." },
  { german: "verkaufen", turkish: "Satmak", category: "Fiiller", level: "A2", exampleDe: "Er verkauft sein Auto.", exampleTr: "O arabasını satıyor." },
  { german: "schreiben", turkish: "Yazmak", category: "Fiiller", level: "A2", exampleDe: "Ich schreibe einen Brief.", exampleTr: "Bir mektup yazıyorum." },
  { german: "lesen", turkish: "Okumak", category: "Fiiller", level: "A2", exampleDe: "Sie liest ein Buch.", exampleTr: "O bir kitap okuyor." },
  { german: "schlafen", turkish: "Uyumak", category: "Fiiller", level: "A2", exampleDe: "Ich schlafe acht Stunden.", exampleTr: "Sekiz saat uyuyorum." },
  { german: "arbeiten", turkish: "Çalışmak", category: "Fiiller", level: "A2", exampleDe: "Er arbeitet jeden Tag.", exampleTr: "O her gün çalışıyor." },
  { german: "spielen", turkish: "Oynamak", category: "Fiiller", level: "A2", exampleDe: "Die Kinder spielen draußen.", exampleTr: "Çocuklar dışarıda oynuyor." },
  { german: "kochen", turkish: "Yemek pişirmek", category: "Fiiller", level: "A2", exampleDe: "Meine Mutter kocht gut.", exampleTr: "Annem iyi yemek pişirir." },

  // Aylar (A2)
  { german: "Januar", turkish: "Ocak", category: "Aylar", level: "A2", exampleDe: "Im Januar ist es kalt.", exampleTr: "Ocakta hava soğuk." },
  { german: "Februar", turkish: "Şubat", category: "Aylar", level: "A2", exampleDe: "Im Februar gibt es oft Schnee.", exampleTr: "Şubatta genelde kar yağar." },
  { german: "März", turkish: "Mart", category: "Aylar", level: "A2", exampleDe: "Im März beginnt der Frühling.", exampleTr: "Martta ilkbahar başlar." },
  { german: "April", turkish: "Nisan", category: "Aylar", level: "A2", exampleDe: "Im April regnet es viel.", exampleTr: "Nisanda çok yağmur yağar." },
  { german: "Mai", turkish: "Mayıs", category: "Aylar", level: "A2", exampleDe: "Im Mai blühen die Blumen.", exampleTr: "Mayısta çiçekler açar." },
  { german: "Juni", turkish: "Haziran", category: "Aylar", level: "A2", exampleDe: "Im Juni ist es warm.", exampleTr: "Haziranda hava sıcak." },
  { german: "Juli", turkish: "Temmuz", category: "Aylar", level: "A2", exampleDe: "Im Juli fahren wir in den Urlaub.", exampleTr: "Temmuzda tatile gidiyoruz." },
  { german: "August", turkish: "Ağustos", category: "Aylar", level: "A2", exampleDe: "Im August ist es sehr heiß.", exampleTr: "Ağustosta çok sıcak." },
  { german: "September", turkish: "Eylül", category: "Aylar", level: "A2", exampleDe: "Im September beginnt die Schule.", exampleTr: "Eylülde okul başlar." },
  { german: "Oktober", turkish: "Ekim", category: "Aylar", level: "A2", exampleDe: "Im Oktober fallen die Blätter.", exampleTr: "Ekimde yapraklar düşer." },
  { german: "November", turkish: "Kasım", category: "Aylar", level: "A2", exampleDe: "Im November ist es neblig.", exampleTr: "Kasımda hava sisli." },
  { german: "Dezember", turkish: "Aralık", category: "Aylar", level: "A2", exampleDe: "Im Dezember feiern wir Weihnachten.", exampleTr: "Aralıkta Noel kutluyoruz." },

  // ─── B1 ───────────────────────────────────────────────────────────────────
  // Fiiller (B1)
  { german: "entscheiden", turkish: "Karar vermek", category: "Fiiller", level: "B1", exampleDe: "Ich muss mich entscheiden.", exampleTr: "Karar vermem gerekiyor." },
  { german: "erklären", turkish: "Açıklamak", category: "Fiiller", level: "B1", exampleDe: "Kannst du das erklären?", exampleTr: "Bunu açıklayabilir misin?" },
  { german: "vergleichen", turkish: "Karşılaştırmak", category: "Fiiller", level: "B1", exampleDe: "Wir vergleichen die Preise.", exampleTr: "Fiyatları karşılaştırıyoruz." },
  { german: "bewerben", turkish: "Başvurmak", category: "Fiiller", level: "B1", exampleDe: "Ich bewerbe mich um die Stelle.", exampleTr: "Pozisyona başvuruyorum." },
  { german: "vorschlagen", turkish: "Önermek", category: "Fiiller", level: "B1", exampleDe: "Darf ich etwas vorschlagen?", exampleTr: "Bir şey önerebilir miyim?" },
  { german: "übersetzen", turkish: "Çevirmek", category: "Fiiller", level: "B1", exampleDe: "Kannst du diesen Text übersetzen?", exampleTr: "Bu metni çevirebilir misin?" },
  { german: "vermeiden", turkish: "Kaçınmak", category: "Fiiller", level: "B1", exampleDe: "Ich versuche Fehler zu vermeiden.", exampleTr: "Hata yapmaktan kaçınmaya çalışıyorum." },
  { german: "beobachten", turkish: "Gözlemlemek", category: "Fiiller", level: "B1", exampleDe: "Er beobachtet die Natur.", exampleTr: "O doğayı gözlemliyor." },
  { german: "zweifeln", turkish: "Şüphe etmek", category: "Fiiller", level: "B1", exampleDe: "Ich zweifle an seinem Plan.", exampleTr: "Onun planından şüphe ediyorum." },
  { german: "versprechen", turkish: "Söz vermek", category: "Fiiller", level: "B1", exampleDe: "Er verspricht, pünktlich zu sein.", exampleTr: "Zamanında olacağına söz veriyor." },

  // Soyut Kavramlar
  { german: "Erfahrung", turkish: "Deneyim", category: "Kavramlar", level: "B1", exampleDe: "Ich habe viel Erfahrung.", exampleTr: "Çok deneyimim var." },
  { german: "Möglichkeit", turkish: "Olasılık / İmkân", category: "Kavramlar", level: "B1", exampleDe: "Es gibt eine Möglichkeit.", exampleTr: "Bir olasılık var." },
  { german: "Verantwortung", turkish: "Sorumluluk", category: "Kavramlar", level: "B1", exampleDe: "Er trägt die Verantwortung.", exampleTr: "O sorumluluğu taşıyor." },
  { german: "Umgebung", turkish: "Çevre / Ortam", category: "Kavramlar", level: "B1", exampleDe: "Die Umgebung ist sehr ruhig.", exampleTr: "Çevre çok sakin." },
  { german: "Unterschied", turkish: "Fark", category: "Kavramlar", level: "B1", exampleDe: "Was ist der Unterschied?", exampleTr: "Fark nedir?" },
  { german: "Zusammenhang", turkish: "Bağlantı / İlişki", category: "Kavramlar", level: "B1", exampleDe: "Ich sehe keinen Zusammenhang.", exampleTr: "Bir bağlantı görmüyorum." },
  { german: "Bedeutung", turkish: "Anlam / Önem", category: "Kavramlar", level: "B1", exampleDe: "Was ist die Bedeutung dieses Wortes?", exampleTr: "Bu kelimenin anlamı nedir?" },
  { german: "Entwicklung", turkish: "Gelişme / Gelişim", category: "Kavramlar", level: "B1", exampleDe: "Die Entwicklung geht schnell.", exampleTr: "Gelişme hızlı gidiyor." },
  { german: "Gesellschaft", turkish: "Toplum", category: "Kavramlar", level: "B1", exampleDe: "Die Gesellschaft verändert sich.", exampleTr: "Toplum değişiyor." },
  { german: "Lösung", turkish: "Çözüm", category: "Kavramlar", level: "B1", exampleDe: "Wir suchen eine Lösung.", exampleTr: "Bir çözüm arıyoruz." },

  // Sıfatlar (B1)
  { german: "neugierig", turkish: "Meraklı", category: "Sıfatlar", level: "B1", exampleDe: "Das Kind ist sehr neugierig.", exampleTr: "Çocuk çok meraklı." },
  { german: "geduldig", turkish: "Sabırlı", category: "Sıfatlar", level: "B1", exampleDe: "Du musst geduldig sein.", exampleTr: "Sabırlı olman gerekiyor." },
  { german: "zuverlässig", turkish: "Güvenilir", category: "Sıfatlar", level: "B1", exampleDe: "Er ist ein zuverlässiger Mitarbeiter.", exampleTr: "O güvenilir bir çalışan." },
  { german: "selbstständig", turkish: "Bağımsız", category: "Sıfatlar", level: "B1", exampleDe: "Sie arbeitet selbstständig.", exampleTr: "O bağımsız çalışıyor." },
  { german: "aufmerksam", turkish: "Dikkatli", category: "Sıfatlar", level: "B1", exampleDe: "Bitte sei aufmerksam!", exampleTr: "Lütfen dikkatli ol!" },
  { german: "begeistert", turkish: "Hevesli / Heyecanlı", category: "Sıfatlar", level: "B1", exampleDe: "Ich bin begeistert von der Idee.", exampleTr: "Fikirden heyecan duyuyorum." },
  { german: "enttäuscht", turkish: "Hayal kırıklığına uğramış", category: "Sıfatlar", level: "B1", exampleDe: "Ich bin enttäuscht.", exampleTr: "Hayal kırıklığına uğradım." },
  { german: "überrascht", turkish: "Şaşırmış", category: "Sıfatlar", level: "B1", exampleDe: "Ich bin überrascht.", exampleTr: "Şaşırdım." },

  // İş & Kariyer
  { german: "Bewerbung", turkish: "Başvuru / Özgeçmiş", category: "İş", level: "B1", exampleDe: "Ich schreibe eine Bewerbung.", exampleTr: "Bir başvuru yazıyorum." },
  { german: "Gehalt", turkish: "Maaş", category: "İş", level: "B1", exampleDe: "Das Gehalt ist gut.", exampleTr: "Maaş iyi." },
  { german: "Kollege", turkish: "İş arkadaşı", category: "İş", level: "B1", exampleDe: "Mein Kollege ist hilfsbereit.", exampleTr: "İş arkadaşım yardımsever." },
  { german: "Besprechung", turkish: "Toplantı", category: "İş", level: "B1", exampleDe: "Wir haben eine Besprechung.", exampleTr: "Bir toplantımız var." },
  { german: "Stellenangebot", turkish: "İş ilanı", category: "İş", level: "B1", exampleDe: "Ich habe ein Stellenangebot bekommen.", exampleTr: "Bir iş teklifi aldım." },
  { german: "Fortbildung", turkish: "Mesleki eğitim", category: "İş", level: "B1", exampleDe: "Die Fortbildung ist wichtig.", exampleTr: "Mesleki eğitim önemli." },

  // Çevre & Doğa
  { german: "Klimawandel", turkish: "İklim değişikliği", category: "Çevre", level: "B1", exampleDe: "Der Klimawandel ist ein Problem.", exampleTr: "İklim değişikliği bir sorun." },
  { german: "Umwelt", turkish: "Çevre / Doğa", category: "Çevre", level: "B1", exampleDe: "Wir müssen die Umwelt schützen.", exampleTr: "Çevreyi korumamız gerekiyor." },
  { german: "Energie", turkish: "Enerji", category: "Çevre", level: "B1", exampleDe: "Wir brauchen erneuerbare Energie.", exampleTr: "Yenilenebilir enerjiye ihtiyacımız var." },
  { german: "Abfall", turkish: "Çöp / Atık", category: "Çevre", level: "B1", exampleDe: "Bitte wirf den Abfall weg.", exampleTr: "Lütfen çöpü at." },
  { german: "Recycling", turkish: "Geri dönüşüm", category: "Çevre", level: "B1", exampleDe: "Recycling ist wichtig für die Umwelt.", exampleTr: "Geri dönüşüm çevre için önemli." },
];
