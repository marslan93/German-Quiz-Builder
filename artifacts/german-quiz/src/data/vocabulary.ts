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

  // ─────────────────────────────────────────────────────────────
  // A1
  // ─────────────────────────────────────────────────────────────

  // Hayvanlar (A1)
  { german: "der Hund", turkish: "Köpek", category: "Hayvanlar", level: "A1", exampleDe: "Der Hund tut dir nichts.", exampleTr: "Köpek sana bir şey yapmaz." },
  { german: "die Katze", turkish: "Kedi", category: "Hayvanlar", level: "A1", exampleDe: "Die Katze schläft.", exampleTr: "Kedi uyuyor." },
  { german: "der Vogel", turkish: "Kuş", category: "Hayvanlar", level: "A1", exampleDe: "Der Vogel singt.", exampleTr: "Kuş şarkı söylüyor." },
  { german: "das Pferd", turkish: "At", category: "Hayvanlar", level: "A1", exampleDe: "Das Pferd läuft schnell.", exampleTr: "At hızlı koşuyor." },
  { german: "der Fisch", turkish: "Balık", category: "Hayvanlar", level: "A1", exampleDe: "Der Fisch schwimmt.", exampleTr: "Balık yüzüyor." },
  { german: "die Kuh", turkish: "İnek", category: "Hayvanlar", level: "A1", exampleDe: "Die Kuh gibt Milch.", exampleTr: "İnek süt verir." },
  { german: "die Maus", turkish: "Fare", category: "Hayvanlar", level: "A1", exampleDe: "Die Maus ist klein.", exampleTr: "Fare küçük." },
  { german: "der Hase", turkish: "Tavşan", category: "Hayvanlar", level: "A1", exampleDe: "Der Hase ist weiß.", exampleTr: "Tavşan beyaz." },
  { german: "der Affe", turkish: "Maymun", category: "Hayvanlar", level: "A1", exampleDe: "Der Affe klettert auf den Baum.", exampleTr: "Maymun ağaca tırmanıyor." },
  { german: "der Löwe", turkish: "Aslan", category: "Hayvanlar", level: "A1", exampleDe: "Der Löwe ist der König der Tiere.", exampleTr: "Aslan hayvanların kralıdır." },
  { german: "der Bär", turkish: "Ayı", category: "Hayvanlar", level: "A1", exampleDe: "Der Bär schläft im Winter.", exampleTr: "Ayı kışın uyur." },
  { german: "die Schlange", turkish: "Yılan", category: "Hayvanlar", level: "A1", exampleDe: "Die Schlange liegt in der Sonne.", exampleTr: "Yılan güneşte yatıyor." },
  { german: "das Schwein", turkish: "Domuz", category: "Hayvanlar", level: "A1", exampleDe: "Das Schwein ist rosa.", exampleTr: "Domuz pembe." },
  { german: "das Schaf", turkish: "Koyun", category: "Hayvanlar", level: "A1", exampleDe: "Das Schaf frisst Gras.", exampleTr: "Koyun çimen yer." },
  { german: "die Ente", turkish: "Ördek", category: "Hayvanlar", level: "A1", exampleDe: "Die Ente schwimmt im See.", exampleTr: "Ördek gölde yüzüyor." },
  { german: "die Biene", turkish: "Arı", category: "Hayvanlar", level: "A1", exampleDe: "Die Biene macht Honig.", exampleTr: "Arı bal yapar." },

  // Renkler (A1)
  { german: "rot", turkish: "Kırmızı", category: "Renkler", level: "A1", exampleDe: "Die Rose ist rot.", exampleTr: "Gül kırmızı." },
  { german: "blau", turkish: "Mavi", category: "Renkler", level: "A1", exampleDe: "Der Himmel ist blau.", exampleTr: "Gökyüzü mavi." },
  { german: "grün", turkish: "Yeşil", category: "Renkler", level: "A1", exampleDe: "Das Gras ist grün.", exampleTr: "Çimen yeşil." },
  { german: "gelb", turkish: "Sarı", category: "Renkler", level: "A1", exampleDe: "Die Sonne ist gelb.", exampleTr: "Güneş sarı." },
  { german: "schwarz", turkish: "Siyah", category: "Renkler", level: "A1", exampleDe: "Die Nacht ist schwarz.", exampleTr: "Gece siyah." },
  { german: "weiß", turkish: "Beyaz", category: "Renkler", level: "A1", exampleDe: "Der Schnee ist weiß.", exampleTr: "Kar beyaz." },
  { german: "grau", turkish: "Gri", category: "Renkler", level: "A1", exampleDe: "Der Himmel ist heute grau.", exampleTr: "Bugün gökyüzü gri." },
  { german: "braun", turkish: "Kahverengi", category: "Renkler", level: "A1", exampleDe: "Der Tisch ist braun.", exampleTr: "Masa kahverengi." },
  { german: "orange", turkish: "Turuncu", category: "Renkler", level: "A1", exampleDe: "Die Orange ist orange.", exampleTr: "Portakal turuncu." },

  // Yiyecek & İçecek (A1)
  { german: "der Apfel", turkish: "Elma", category: "Yiyecek", level: "A1", exampleDe: "Zum Frühstück esse ich jeden Tag einen Apfel.", exampleTr: "Her gün kahvaltıda bir elma yiyorum." },
  { german: "das Brot", turkish: "Ekmek", category: "Yiyecek", level: "A1", exampleDe: "Das Brot ist ganz frisch.", exampleTr: "Ekmek çok taze." },
  { german: "die Milch", turkish: "Süt", category: "Yiyecek", level: "A1", exampleDe: "Ich trinke Milch.", exampleTr: "Süt içiyorum." },
  { german: "das Wasser", turkish: "Su", category: "Yiyecek", level: "A1", exampleDe: "Ich möchte Wasser, bitte.", exampleTr: "Su istiyorum, lütfen." },
  { german: "das Ei", turkish: "Yumurta", category: "Yiyecek", level: "A1", exampleDe: "Ich koche ein Ei.", exampleTr: "Bir yumurta pişiriyorum." },
  { german: "die Banane", turkish: "Muz", category: "Yiyecek", level: "A1", exampleDe: "1 Kilo Bananen, bitte.", exampleTr: "Bir kilo muz lütfen." },
  { german: "der Kaffee", turkish: "Kahve", category: "Yiyecek", level: "A1", exampleDe: "Ich trinke Kaffee am Morgen.", exampleTr: "Sabah kahve içiyorum." },
  { german: "der Tee", turkish: "Çay", category: "Yiyecek", level: "A1", exampleDe: "Der Tee ist heiß.", exampleTr: "Çay sıcak." },
  { german: "der Kuchen", turkish: "Kek / Pasta", category: "Yiyecek", level: "A1", exampleDe: "Ich habe einen Kuchen gebacken.", exampleTr: "Bir kek pişirdim." },
  { german: "die Schokolade", turkish: "Çikolata", category: "Yiyecek", level: "A1", exampleDe: "Ich habe eine Tafel Schokolade gegessen.", exampleTr: "Bir tablet çikolata yedim." },

  // Aile (A1)
  { german: "die Mutter", turkish: "Anne", category: "Aile", level: "A1", exampleDe: "Meine Mutter kocht gern.", exampleTr: "Annem yemek yapmayı sever." },
  { german: "der Vater", turkish: "Baba", category: "Aile", level: "A1", exampleDe: "Mein Vater arbeitet in einem Restaurant.", exampleTr: "Babam bir restoranda çalışıyor." },
  { german: "der Bruder", turkish: "Erkek kardeş", category: "Aile", level: "A1", exampleDe: "Mein Bruder ist jung.", exampleTr: "Erkek kardeşim genç." },
  { german: "die Schwester", turkish: "Kız kardeş", category: "Aile", level: "A1", exampleDe: "Meine Schwester liest gern.", exampleTr: "Kız kardeşim okumayı sever." },
  { german: "das Kind", turkish: "Çocuk", category: "Aile", level: "A1", exampleDe: "Das Kind spielt.", exampleTr: "Çocuk oynuyor." },
  { german: "das Baby", turkish: "Bebek", category: "Aile", level: "A1", exampleDe: "Das Baby schläft viel.", exampleTr: "Bebek çok uyuyor." },

  // Günlük Hayat (A1)
  { german: "das Haus", turkish: "Ev", category: "Günlük Hayat", level: "A1", exampleDe: "Das Haus ist groß.", exampleTr: "Ev büyük." },
  { german: "das Auto", turkish: "Araba", category: "Günlük Hayat", level: "A1", exampleDe: "Das Auto ist rot.", exampleTr: "Araba kırmızı." },
  { german: "das Buch", turkish: "Kitap", category: "Günlük Hayat", level: "A1", exampleDe: "Das Buch ist interessant.", exampleTr: "Kitap ilginç." },
  { german: "der Tisch", turkish: "Masa", category: "Günlük Hayat", level: "A1", exampleDe: "Der Tisch ist aus Holz.", exampleTr: "Masa ahşaptan yapılmış." },
  { german: "der Stuhl", turkish: "Sandalye", category: "Günlük Hayat", level: "A1", exampleDe: "Der Stuhl ist bequem.", exampleTr: "Sandalye rahat." },
  { german: "das Telefon", turkish: "Telefon", category: "Günlük Hayat", level: "A1", exampleDe: "Mein Telefon klingelt.", exampleTr: "Telefonum çalıyor." },
  { german: "das Bett", turkish: "Yatak", category: "Günlük Hayat", level: "A1", exampleDe: "Das Bett ist weich.", exampleTr: "Yatak yumuşak." },
  { german: "die Schule", turkish: "Okul", category: "Günlük Hayat", level: "A1", exampleDe: "Die Schule beginnt um acht.", exampleTr: "Okul sekizde başlıyor." },
  { german: "die Lampe", turkish: "Lamba", category: "Günlük Hayat", level: "A1", exampleDe: "Ich habe mir eine neue Lampe gekauft.", exampleTr: "Kendime yeni bir lamba aldım." },
  { german: "der Schlüssel", turkish: "Anahtar", category: "Günlük Hayat", level: "A1", exampleDe: "Ich kann meinen Schlüssel nicht finden.", exampleTr: "Anahtarımı bulamıyorum." },

  // Sıfatlar (A1)
  { german: "groß", turkish: "Büyük", category: "Sıfatlar", level: "A1", exampleDe: "Das Haus ist sehr groß.", exampleTr: "Ev çok büyük." },
  { german: "klein", turkish: "Küçük", category: "Sıfatlar", level: "A1", exampleDe: "Die Maus ist klein.", exampleTr: "Fare küçük." },
  { german: "gut", turkish: "İyi", category: "Sıfatlar", level: "A1", exampleDe: "Das Essen ist gut.", exampleTr: "Yemek iyi." },
  { german: "schlecht", turkish: "Kötü", category: "Sıfatlar", level: "A1", exampleDe: "Das Wetter ist schlecht.", exampleTr: "Hava kötü." },
  { german: "neu", turkish: "Yeni", category: "Sıfatlar", level: "A1", exampleDe: "Ich habe ein neues Auto.", exampleTr: "Yeni bir arabam var." },
  { german: "alt", turkish: "Eski / Yaşlı", category: "Sıfatlar", level: "A1", exampleDe: "Das Buch ist alt.", exampleTr: "Kitap eski." },
  { german: "schön", turkish: "Güzel", category: "Sıfatlar", level: "A1", exampleDe: "Das Wetter ist schön.", exampleTr: "Hava güzel." },
  { german: "heiß", turkish: "Sıcak", category: "Sıfatlar", level: "A1", exampleDe: "Der Tee ist heiß.", exampleTr: "Çay sıcak." },
  { german: "kalt", turkish: "Soğuk", category: "Sıfatlar", level: "A1", exampleDe: "Das Wasser ist kalt.", exampleTr: "Su soğuk." },
  { german: "jung", turkish: "Genç", category: "Sıfatlar", level: "A1", exampleDe: "Mein Bruder ist noch jung.", exampleTr: "Kardeşim henüz genç." },

  // Günler & Aylar (A1)
  { german: "Montag", turkish: "Pazartesi", category: "Günler", level: "A1", exampleDe: "Am Montag gehe ich zur Arbeit.", exampleTr: "Pazartesi işe gidiyorum." },
  { german: "Dienstag", turkish: "Salı", category: "Günler", level: "A1", exampleDe: "Am Dienstag habe ich frei.", exampleTr: "Salı günü iznim var." },
  { german: "Mittwoch", turkish: "Çarşamba", category: "Günler", level: "A1", exampleDe: "Mittwoch ist mein Lieblingstag.", exampleTr: "Çarşamba benim favori günüm." },
  { german: "Donnerstag", turkish: "Perşembe", category: "Günler", level: "A1", exampleDe: "Am Donnerstag lerne ich Deutsch.", exampleTr: "Perşembe Almanca öğreniyorum." },
  { german: "Freitag", turkish: "Cuma", category: "Günler", level: "A1", exampleDe: "Der Freitag ist der letzte Schultag.", exampleTr: "Cuma son okul günü." },
  { german: "Samstag", turkish: "Cumartesi", category: "Günler", level: "A1", exampleDe: "Am Samstag schlafe ich lange.", exampleTr: "Cumartesi uzun uyuyorum." },
  { german: "Sonntag", turkish: "Pazar", category: "Günler", level: "A1", exampleDe: "Sonntag ist ein Ruhetag.", exampleTr: "Pazar dinlenme günü." },

  // ─────────────────────────────────────────────────────────────
  // A2
  // ─────────────────────────────────────────────────────────────

  // Aile & Çevre (A2)
  { german: "die Oma", turkish: "Büyükanne", category: "Aile", level: "A2", exampleDe: "Meine Oma backt Kuchen.", exampleTr: "Büyükannem kek pişirir." },
  { german: "der Opa", turkish: "Büyükbaba", category: "Aile", level: "A2", exampleDe: "Mein Opa liest die Zeitung.", exampleTr: "Büyükbabam gazete okur." },
  { german: "der Onkel", turkish: "Amca / Dayı", category: "Aile", level: "A2", exampleDe: "Mein Onkel wohnt in Berlin.", exampleTr: "Amcam Berlin'de oturuyor." },
  { german: "die Tante", turkish: "Hala / Teyze", category: "Aile", level: "A2", exampleDe: "Meine Tante ist Ärztin.", exampleTr: "Teyzem doktor." },
  { german: "die Geschwister", turkish: "Kardeşler", category: "Aile", level: "A2", exampleDe: "Die Geschwister sehen sich nur selten.", exampleTr: "Kardeşler birbirini nadiren görüyor." },
  { german: "der Enkel", turkish: "Torun", category: "Aile", level: "A2", exampleDe: "Alle meine Enkel gehen schon zur Schule.", exampleTr: "Bütün torunlarım okula gidiyor." },

  // Meslekler (A2)
  { german: "der Arzt", turkish: "Doktor", category: "Meslekler", level: "A2", exampleDe: "Der Arzt hilft den Patienten.", exampleTr: "Doktor hastalara yardım eder." },
  { german: "der Lehrer", turkish: "Öğretmen", category: "Meslekler", level: "A2", exampleDe: "Der Lehrer erklärt die Aufgabe.", exampleTr: "Öğretmen görevi açıklıyor." },
  { german: "der Koch", turkish: "Aşçı", category: "Meslekler", level: "A2", exampleDe: "Der Koch kocht lecker.", exampleTr: "Aşçı lezzetli yemek yapıyor." },
  { german: "der Polizist", turkish: "Polis", category: "Meslekler", level: "A2", exampleDe: "Der Polizist hilft mir.", exampleTr: "Polis bana yardım ediyor." },
  { german: "der Kellner", turkish: "Garson", category: "Meslekler", level: "A2", exampleDe: "Der Kellner bringt die Rechnung.", exampleTr: "Garson hesabı getiriyor." },
  { german: "der Verkäufer", turkish: "Satıcı", category: "Meslekler", level: "A2", exampleDe: "Die Verkäuferin wird Ihnen gleich helfen.", exampleTr: "Satıcı size hemen yardım edecek." },
  { german: "der Friseur", turkish: "Kuaför", category: "Meslekler", level: "A2", exampleDe: "Du siehst toll aus! Wer ist dein Friseur?", exampleTr: "Harika görünüyorsun! Kuaförün kim?" },
  { german: "der Sekretär", turkish: "Sekreter", category: "Meslekler", level: "A2", exampleDe: "Der neue Sekretär hat sich gestern vorgestellt.", exampleTr: "Yeni sekreter dün kendini tanıttı." },

  // Şehir & Ulaşım (A2)
  { german: "der Bahnhof", turkish: "Tren istasyonu", category: "Şehir", level: "A2", exampleDe: "Ich bringe Sie zum Bahnhof.", exampleTr: "Sizi tren istasyonuna bırakıyorum." },
  { german: "der Bus", turkish: "Otobüs", category: "Şehir", level: "A2", exampleDe: "Ich fahre meistens mit dem Bus zur Arbeit.", exampleTr: "Genellikle işe otobüsle gidiyorum." },
  { german: "der Flughafen", turkish: "Havalimanı", category: "Şehir", level: "A2", exampleDe: "Der Flughafen liegt 30 km außerhalb der Stadt.", exampleTr: "Havalimanı şehrin 30 km dışında." },
  { german: "der Supermarkt", turkish: "Süpermarket", category: "Şehir", level: "A2", exampleDe: "Ich kaufe im Supermarkt ein.", exampleTr: "Süpermarkette alışveriş yapıyorum." },
  { german: "die Apotheke", turkish: "Eczane", category: "Şehir", level: "A2", exampleDe: "Ich gehe in die Apotheke.", exampleTr: "Eczaneye gidiyorum." },
  { german: "das Krankenhaus", turkish: "Hastane", category: "Şehir", level: "A2", exampleDe: "Er musste ins Krankenhaus.", exampleTr: "Hastaneye gitmek zorunda kaldı." },
  { german: "die Bank", turkish: "Banka", category: "Şehir", level: "A2", exampleDe: "Ich gehe zur Bank.", exampleTr: "Bankaya gidiyorum." },
  { german: "der Park", turkish: "Park", category: "Şehir", level: "A2", exampleDe: "Ich gehe gern im Park spazieren.", exampleTr: "Parkta yürüyüş yapmayı seviyorum." },
  { german: "die Kreuzung", turkish: "Kavşak", category: "Şehir", level: "A2", exampleDe: "Fahren Sie an der nächsten Kreuzung rechts.", exampleTr: "Bir sonraki kavşakta sağa dönün." },
  { german: "die Ampel", turkish: "Trafik ışığı", category: "Şehir", level: "A2", exampleDe: "Dort an der Ampel kannst du über die Straße gehen.", exampleTr: "Oradaki ışıkta karşıya geçebilirsin." },
  { german: "die Haltestelle", turkish: "Durak", category: "Şehir", level: "A2", exampleDe: "An der nächsten Haltestelle müssen wir aussteigen.", exampleTr: "Bir sonraki durağa inmemiz gerekiyor." },
  { german: "die Hauptstadt", turkish: "Başkent", category: "Şehir", level: "A2", exampleDe: "Berlin ist die Hauptstadt von Deutschland.", exampleTr: "Berlin, Almanya'nın başkentidir." },

  // Yiyecek & İçecek (A2)
  { german: "das Fleisch", turkish: "Et", category: "Yiyecek", level: "A2", exampleDe: "Ich esse kein Fleisch.", exampleTr: "Et yemiyorum." },
  { german: "das Gemüse", turkish: "Sebze", category: "Yiyecek", level: "A2", exampleDe: "Gemüse ist gesund.", exampleTr: "Sebze sağlıklı." },
  { german: "der Salat", turkish: "Salata", category: "Yiyecek", level: "A2", exampleDe: "Der Salat ist frisch.", exampleTr: "Salata taze." },
  { german: "die Suppe", turkish: "Çorba", category: "Yiyecek", level: "A2", exampleDe: "Die Suppe ist warm.", exampleTr: "Çorba sıcak." },
  { german: "der Reis", turkish: "Pirinç", category: "Yiyecek", level: "A2", exampleDe: "Ich koche Reis.", exampleTr: "Pirinç pişiriyorum." },
  { german: "die Kartoffel", turkish: "Patates", category: "Yiyecek", level: "A2", exampleDe: "Ich mag Kartoffeln.", exampleTr: "Patatesleri seviyorum." },
  { german: "die Tomate", turkish: "Domates", category: "Yiyecek", level: "A2", exampleDe: "Die Tomate ist rot und saftig.", exampleTr: "Domates kırmızı ve sulu." },
  { german: "die Nudel", turkish: "Makarna", category: "Yiyecek", level: "A2", exampleDe: "Möchten Sie Nudeln oder Reis?", exampleTr: "Makarna mı yoksa pirinç mi istersiniz?" },
  { german: "das Schnitzel", turkish: "Şnitzel", category: "Yiyecek", level: "A2", exampleDe: "Bitte ein Schnitzel mit Kartoffeln und Salat.", exampleTr: "Lütfen patates ve salata ile bir şnitzel." },
  { german: "das Getränk", turkish: "İçecek", category: "Yiyecek", level: "A2", exampleDe: "Besorgst du bitte die Getränke?", exampleTr: "Lütfen içecekleri alır mısın?" },

  // Sıfatlar (A2)
  { german: "teuer", turkish: "Pahalı", category: "Sıfatlar", level: "A2", exampleDe: "Das Auto ist sehr teuer.", exampleTr: "Araba çok pahalı." },
  { german: "billig", turkish: "Ucuz", category: "Sıfatlar", level: "A2", exampleDe: "Das ist sehr billig.", exampleTr: "Bu çok ucuz." },
  { german: "schnell", turkish: "Hızlı", category: "Sıfatlar", level: "A2", exampleDe: "Das Auto fährt schnell.", exampleTr: "Araba hızlı gidiyor." },
  { german: "langsam", turkish: "Yavaş", category: "Sıfatlar", level: "A2", exampleDe: "Könnten Sie bitte etwas langsamer sprechen?", exampleTr: "Lütfen biraz daha yavaş konuşabilir misiniz?" },
  { german: "müde", turkish: "Yorgun", category: "Sıfatlar", level: "A2", exampleDe: "Ich bin sehr müde.", exampleTr: "Çok yorgunum." },
  { german: "glücklich", turkish: "Mutlu", category: "Sıfatlar", level: "A2", exampleDe: "Meine Schwester ist sehr glücklich.", exampleTr: "Kız kardeşim çok mutlu." },
  { german: "traurig", turkish: "Üzgün", category: "Sıfatlar", level: "A2", exampleDe: "Er ist traurig.", exampleTr: "O üzgün." },
  { german: "hungrig", turkish: "Aç", category: "Sıfatlar", level: "A2", exampleDe: "Ich bin hungrig.", exampleTr: "Açım." },
  { german: "durstig", turkish: "Susuz", category: "Sıfatlar", level: "A2", exampleDe: "Du bist sicher durstig. Was möchtest du trinken?", exampleTr: "Eminim susadın. Ne içmek istersin?" },
  { german: "frisch", turkish: "Taze", category: "Sıfatlar", level: "A2", exampleDe: "Das Brot ist noch ganz frisch.", exampleTr: "Ekmek hâlâ çok taze." },
  { german: "leer", turkish: "Boş", category: "Sıfatlar", level: "A2", exampleDe: "Das Restaurant war fast leer.", exampleTr: "Restoran neredeyse boştu." },
  { german: "schwer", turkish: "Ağır / Zor", category: "Sıfatlar", level: "A2", exampleDe: "Der Koffer ist viel zu schwer.", exampleTr: "Bavul çok ağır." },
  { german: "leicht", turkish: "Hafif / Kolay", category: "Sıfatlar", level: "A2", exampleDe: "Der Koffer ist ganz leicht.", exampleTr: "Bavul çok hafif." },
  { german: "lecker", turkish: "Lezzetli", category: "Sıfatlar", level: "A2", exampleDe: "Das Essen war sehr lecker.", exampleTr: "Yemek çok lezzetliydi." },
  { german: "günstig", turkish: "Uygun fiyatlı", category: "Sıfatlar", level: "A2", exampleDe: "Ich suche eine günstige Ferienwohnung.", exampleTr: "Uygun fiyatlı tatil evi arıyorum." },

  // Fiiller (A2)
  { german: "kaufen", turkish: "Satın almak", category: "Fiiller", level: "A2", exampleDe: "Ich kaufe ein Buch.", exampleTr: "Bir kitap satın alıyorum." },
  { german: "verkaufen", turkish: "Satmak", category: "Fiiller", level: "A2", exampleDe: "Er hat sein Auto verkauft.", exampleTr: "Arabasını sattı." },
  { german: "schreiben", turkish: "Yazmak", category: "Fiiller", level: "A2", exampleDe: "Ich habe dir einen Brief geschrieben.", exampleTr: "Sana bir mektup yazdım." },
  { german: "lesen", turkish: "Okumak", category: "Fiiller", level: "A2", exampleDe: "Sie liest ein Buch.", exampleTr: "O bir kitap okuyor." },
  { german: "schlafen", turkish: "Uyumak", category: "Fiiller", level: "A2", exampleDe: "Ich schlafe acht Stunden.", exampleTr: "Sekiz saat uyuyorum." },
  { german: "arbeiten", turkish: "Çalışmak", category: "Fiiller", level: "A2", exampleDe: "Er arbeitet jeden Tag.", exampleTr: "O her gün çalışıyor." },
  { german: "kochen", turkish: "Yemek pişirmek", category: "Fiiller", level: "A2", exampleDe: "Meine Mutter kocht gut.", exampleTr: "Annem iyi yemek pişirir." },
  { german: "schwimmen", turkish: "Yüzmek", category: "Fiiller", level: "A2", exampleDe: "Ich gehe regelmäßig schwimmen.", exampleTr: "Düzenli olarak yüzmeye gidiyorum." },
  { german: "lachen", turkish: "Gülmek", category: "Fiiller", level: "A2", exampleDe: "Wir haben viel gelacht.", exampleTr: "Çok güldük." },
  { german: "fotografieren", turkish: "Fotoğraf çekmek", category: "Fiiller", level: "A2", exampleDe: "Ich fotografiere gern.", exampleTr: "Fotoğraf çekmeyi severim." },
  { german: "parken", turkish: "Park etmek", category: "Fiiller", level: "A2", exampleDe: "Hier dürfen Sie nicht parken.", exampleTr: "Burada park edemezsiniz." },
  { german: "backen", turkish: "Fırında pişirmek", category: "Fiiller", level: "A2", exampleDe: "Wenn du kommst, backe ich einen Kuchen.", exampleTr: "Gelince bir kek pişireceğim." },

  // Nesneler & Ev (A2)
  { german: "das Gepäck", turkish: "Bagaj", category: "Nesneler", level: "A2", exampleDe: "Ich habe mein Gepäck am Bahnhof gelassen.", exampleTr: "Bagajımı tren istasyonunda bıraktım." },
  { german: "die Bäckerei", turkish: "Fırın", category: "Nesneler", level: "A2", exampleDe: "Wir kaufen unser Brot immer in der Bäckerei.", exampleTr: "Ekmeğimizi her zaman fırından alırız." },
  { german: "der Kühlschrank", turkish: "Buzdolabı", category: "Nesneler", level: "A2", exampleDe: "Stell die Milch in den Kühlschrank!", exampleTr: "Sütü buzdolabına koy!" },
  { german: "die Heizung", turkish: "Kalorifer / Isıtıcı", category: "Nesneler", level: "A2", exampleDe: "Es ist kalt. Ist die Heizung kaputt?", exampleTr: "Soğuk. Kalorifer mi bozuldu?" },
  { german: "das Paket", turkish: "Paket", category: "Nesneler", level: "A2", exampleDe: "Hast du das Paket zur Post gebracht?", exampleTr: "Paketi postaneye götürdün mü?" },
  { german: "der Schrank", turkish: "Dolap", category: "Nesneler", level: "A2", exampleDe: "Die Handtücher liegen im Schrank.", exampleTr: "Havlular dolapta." },
  { german: "die Flasche", turkish: "Şişe", category: "Nesneler", level: "A2", exampleDe: "Eine Flasche Bier bitte.", exampleTr: "Bir şişe bira lütfen." },
  { german: "das Glas", turkish: "Bardak / Cam", category: "Nesneler", level: "A2", exampleDe: "Vorsicht, die Kanne ist aus Glas!", exampleTr: "Dikkat, sürahi camdan!" },
  { german: "der Hammer", turkish: "Çekiç", category: "Nesneler", level: "A2", exampleDe: "Hast du einen Hammer für mich?", exampleTr: "Benim için çekiniz var mı?" },
  { german: "der Regenschirm", turkish: "Şemsiye", category: "Nesneler", level: "A2", exampleDe: "Zum Glück hatte ich einen Regenschirm dabei.", exampleTr: "Neyse ki yanımda şemsiyem vardı." },

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

  // Hava Durumu (A2)
  { german: "der Schnee", turkish: "Kar", category: "Hava", level: "A2", exampleDe: "Im Februar gibt es oft viel Schnee.", exampleTr: "Şubatta çok kar olur." },
  { german: "der Regen", turkish: "Yağmur", category: "Hava", level: "A2", exampleDe: "Laut Wetterbericht bekommen wir Regen.", exampleTr: "Hava tahminine göre yağmur yağacak." },
  { german: "das Gewitter", turkish: "Fırtına / Gök gürültülü yağmur", category: "Hava", level: "A2", exampleDe: "Es wird gleich ein Gewitter geben.", exampleTr: "Biraz sonra fırtına olacak." },
  { german: "der Wind", turkish: "Rüzgâr", category: "Hava", level: "A2", exampleDe: "Heute weht ein starker Wind.", exampleTr: "Bugün kuvvetli rüzgâr esiyor." },
  { german: "die Sonne", turkish: "Güneş", category: "Hava", level: "A2", exampleDe: "Die Sonne scheint heute.", exampleTr: "Bugün güneş parlıyor." },

  // ─────────────────────────────────────────────────────────────
  // B1  (Goethe-Zertifikat B1 Wortliste)
  // ─────────────────────────────────────────────────────────────

  // Önemli İsimler (B1)
  { german: "das Abenteuer", turkish: "Macera", category: "Kavramlar", level: "B1", exampleDe: "Unser Urlaub war ein tolles Abenteuer.", exampleTr: "Tatilimiz muhteşem bir macera oldu." },
  { german: "die Absicht", turkish: "Niyet", category: "Kavramlar", level: "B1", exampleDe: "Meine Tochter hat das nicht mit Absicht gemacht.", exampleTr: "Kızım bunu kasıtlı yapmadı." },
  { german: "die Ahnung", turkish: "Fikir / Bilgi", category: "Kavramlar", level: "B1", exampleDe: "Ich hatte keine Ahnung, dass du heute Geburtstag hast.", exampleTr: "Bugün doğum günün olduğunu bilmiyordum." },
  { german: "die Angst", turkish: "Korku", category: "Kavramlar", level: "B1", exampleDe: "Du brauchst keine Angst zu haben.", exampleTr: "Korkmana gerek yok." },
  { german: "der Anfang", turkish: "Başlangıç", category: "Kavramlar", level: "B1", exampleDe: "Am Anfang habe ich bei der Arbeit viele Fragen gestellt.", exampleTr: "Başlangıçta işte çok soru sordum." },
  { german: "die Chance", turkish: "Şans / Fırsat", category: "Kavramlar", level: "B1", exampleDe: "Mein Mann hat gute Chancen, die Stelle zu bekommen.", exampleTr: "Kocamın pozisyonu alma şansı iyi." },
  { german: "die Energie", turkish: "Enerji", category: "Kavramlar", level: "B1", exampleDe: "Wir müssen Energie sparen.", exampleTr: "Enerji tasarrufu yapmalıyız." },
  { german: "die Erfahrung", turkish: "Deneyim / Tecrübe", category: "Kavramlar", level: "B1", exampleDe: "Ich habe zehn Jahre Erfahrung in diesem Beruf.", exampleTr: "Bu meslekte on yıl deneyimim var." },
  { german: "das Ergebnis", turkish: "Sonuç", category: "Kavramlar", level: "B1", exampleDe: "Ein so gutes Ergebnis hat uns alle überrascht.", exampleTr: "Bu kadar iyi bir sonuç hepimizi şaşırttı." },
  { german: "der Erfolg", turkish: "Başarı", category: "Kavramlar", level: "B1", exampleDe: "Ich wünsche Ihnen viel Erfolg bei der Prüfung.", exampleTr: "Sınavda çok başarılar dilerim." },
  { german: "die Erholung", turkish: "Dinlenme / İyileşme", category: "Kavramlar", level: "B1", exampleDe: "Ich habe zu viel gearbeitet. Jetzt brauche ich etwas Erholung.", exampleTr: "Çok çalıştım. Şimdi biraz dinlenmeye ihtiyacım var." },
  { german: "das Erlebnis", turkish: "Yaşantı / Deneyim", category: "Kavramlar", level: "B1", exampleDe: "Die Reise war ein tolles Erlebnis.", exampleTr: "Seyahat muhteşem bir deneyimdi." },
  { german: "die Ernährung", turkish: "Beslenme", category: "Kavramlar", level: "B1", exampleDe: "Ich finde eine gesunde Ernährung wichtig.", exampleTr: "Sağlıklı beslemenin önemli olduğunu düşünüyorum." },
  { german: "die Gesellschaft", turkish: "Toplum", category: "Kavramlar", level: "B1", exampleDe: "Er will die Gesellschaft verändern.", exampleTr: "O toplumu değiştirmek istiyor." },
  { german: "die Gesundheit", turkish: "Sağlık", category: "Kavramlar", level: "B1", exampleDe: "Sie müssen mehr auf Ihre Gesundheit achten.", exampleTr: "Sağlığınıza daha fazla dikkat etmelisiniz." },
  { german: "das Gesetz", turkish: "Yasa / Kanun", category: "Kavramlar", level: "B1", exampleDe: "Das Parlament hat ein neues Gesetz beschlossen.", exampleTr: "Parlamento yeni bir yasa çıkardı." },
  { german: "das Gewissen", turkish: "Vicdan", category: "Kavramlar", level: "B1", exampleDe: "Ich habe ein ganz schlechtes Gewissen.", exampleTr: "Vicdanım çok rahatsız." },
  { german: "die Gewohnheit", turkish: "Alışkanlık", category: "Kavramlar", level: "B1", exampleDe: "Er hat die Gewohnheit, morgens zuerst die Post zu erledigen.", exampleTr: "Sabahları önce postayla ilgilenme alışkanlığı var." },
  { german: "das Glück", turkish: "Şans / Mutluluk", category: "Kavramlar", level: "B1", exampleDe: "Viel Glück bei der Prüfung!", exampleTr: "Sınavda bol şans!" },
  { german: "der Grund", turkish: "Neden / Sebep", category: "Kavramlar", level: "B1", exampleDe: "Sie haben Ihre Stelle gekündigt. Aus welchem Grund?", exampleTr: "İşinizden ayrıldınız. Hangi nedenle?" },
  { german: "der Krieg", turkish: "Savaş", category: "Kavramlar", level: "B1", exampleDe: "Es herrscht noch immer Krieg in diesem Land.", exampleTr: "Bu ülkede hâlâ savaş var." },
  { german: "die Kraft", turkish: "Güç / Kuvvet", category: "Kavramlar", level: "B1", exampleDe: "Für diese Arbeit braucht man viel Kraft.", exampleTr: "Bu iş için çok güç gerekiyor." },
  { german: "die Krankheit", turkish: "Hastalık", category: "Kavramlar", level: "B1", exampleDe: "Er leidet an einer schweren Krankheit.", exampleTr: "Ağır bir hastalıktan mustarip." },
  { german: "die Kultur", turkish: "Kültür", category: "Kavramlar", level: "B1", exampleDe: "Ich interessiere mich für andere Länder und Kulturen.", exampleTr: "Diğer ülkeler ve kültürlerle ilgileniyorum." },
  { german: "die Kunst", turkish: "Sanat", category: "Kavramlar", level: "B1", exampleDe: "Ich verstehe nichts von moderner Kunst.", exampleTr: "Modern sanattan hiç anlamıyorum." },
  { german: "die Landschaft", turkish: "Manzara / Peyzaj", category: "Kavramlar", level: "B1", exampleDe: "Die Landschaft ist sehr hügelig.", exampleTr: "Manzara çok tepeli." },
  { german: "der Lärm", turkish: "Gürültü", category: "Kavramlar", level: "B1", exampleDe: "Die Flugzeuge machen einen schrecklichen Lärm.", exampleTr: "Uçaklar korkunç gürültü çıkarıyor." },
  { german: "die Laune", turkish: "Ruh hali / Keyif", category: "Kavramlar", level: "B1", exampleDe: "Gestern hatte ich richtig schlechte Laune.", exampleTr: "Dün gerçekten kötü hissettim." },
  { german: "der Lebenslauf", turkish: "Özgeçmiş", category: "İş", level: "B1", exampleDe: "Hast du den Lebenslauf für die Bewerbung geschrieben?", exampleTr: "Başvuru için özgeçmişini yazdın mı?" },
  { german: "die Möglichkeit", turkish: "Olasılık / İmkân", category: "Kavramlar", level: "B1", exampleDe: "Es gibt eine Möglichkeit.", exampleTr: "Bir olasılık var." },
  { german: "die Ordnung", turkish: "Düzen / Tertip", category: "Kavramlar", level: "B1", exampleDe: "Mach mal etwas Ordnung in deinem Zimmer!", exampleTr: "Bir de odanda biraz düzen yap!" },
  { german: "die Pause", turkish: "Mola / Ara", category: "Kavramlar", level: "B1", exampleDe: "Wir machen zehn Minuten Pause.", exampleTr: "On dakika mola veriyoruz." },
  { german: "das Pech", turkish: "Şanssızlık", category: "Kavramlar", level: "B1", exampleDe: "Es regnet. Unser Picknick fällt aus. So ein Pech!", exampleTr: "Yağmur yağıyor. Pikniğimiz iptal. Ne şanssızlık!" },
  { german: "die Situation", turkish: "Durum / Koşul", category: "Kavramlar", level: "B1", exampleDe: "Ich bin in einer schwierigen Situation.", exampleTr: "Zor bir durumdasın." },
  { german: "der Unfall", turkish: "Kaza", category: "Kavramlar", level: "B1", exampleDe: "Ich hatte letzte Woche einen Unfall.", exampleTr: "Geçen hafta bir kaza geçirdim." },
  { german: "die Umwelt", turkish: "Çevre / Doğa", category: "Çevre", level: "B1", exampleDe: "Alte Autos sind ein Problem für die Umwelt.", exampleTr: "Eski arabalar çevre için bir sorun." },
  { german: "der Unterricht", turkish: "Ders / Eğitim", category: "Eğitim", level: "B1", exampleDe: "Der Unterricht dauert von 17 bis 19 Uhr.", exampleTr: "Ders 17:00'den 19:00'a kadar sürüyor." },
  { german: "der Urlaub", turkish: "Tatil", category: "Kavramlar", level: "B1", exampleDe: "Ich habe noch drei Tage Urlaub.", exampleTr: "Daha üç günlük tatilim var." },
  { german: "die Ursache", turkish: "Neden / Sebep", category: "Kavramlar", level: "B1", exampleDe: "Kennt man schon die Unfallursache?", exampleTr: "Kazanın nedeni biliniyor mu?" },
  { german: "das Urteil", turkish: "Karar / Yargı", category: "Kavramlar", level: "B1", exampleDe: "Dein Urteil ist für mich sehr wichtig.", exampleTr: "Senin kararın benim için çok önemli." },
  { german: "der Verein", turkish: "Dernek / Kulüp", category: "Kavramlar", level: "B1", exampleDe: "Ich bin schon seit 15 Jahren Mitglied in diesem Verein.", exampleTr: "Bu kulüpte 15 yıldır üyeyim." },
  { german: "der Verkehr", turkish: "Trafik", category: "Kavramlar", level: "B1", exampleDe: "Morgens ist hier immer viel Verkehr.", exampleTr: "Sabahları burada her zaman çok trafik olur." },
  { german: "die Verantwortung", turkish: "Sorumluluk", category: "Kavramlar", level: "B1", exampleDe: "Sie tragen die Verantwortung für Ihre Kinder.", exampleTr: "Çocuklarınıza karşı sorumlusunuz." },
  { german: "die Verbindung", turkish: "Bağlantı / Bağ", category: "Kavramlar", level: "B1", exampleDe: "Die Verbindung ist sehr gut. Ich kann direkt fahren.", exampleTr: "Bağlantı çok iyi. Direkt gidebiliyorum." },
  { german: "das Verhältnis", turkish: "İlişki / Oran", category: "Kavramlar", level: "B1", exampleDe: "Ich habe ein gutes Verhältnis zu meinen Eltern.", exampleTr: "Ailemle iyi ilişkim var." },
  { german: "die Verletzung", turkish: "Yaralanma", category: "Kavramlar", level: "B1", exampleDe: "Die Verletzung ist nicht so schlimm.", exampleTr: "Yaralanma çok ciddi değil." },

  // B1 Sıfatlar
  { german: "angenehm", turkish: "Hoş / Keyifli", category: "Sıfatlar", level: "B1", exampleDe: "Wir wünschen Ihnen eine angenehme Reise.", exampleTr: "Size keyifli bir yolculuk diliyoruz." },
  { german: "berühmt", turkish: "Ünlü / Meşhur", category: "Sıfatlar", level: "B1", exampleDe: "Michael Schumacher ist ein berühmter Rennfahrer.", exampleTr: "Michael Schumacher ünlü bir yarış pilotudur." },
  { german: "dringend", turkish: "Acil", category: "Sıfatlar", level: "B1", exampleDe: "Ich muss dich dringend sprechen.", exampleTr: "Seninle acilen konuşmam gerekiyor." },
  { german: "erfolgreich", turkish: "Başarılı", category: "Sıfatlar", level: "B1", exampleDe: "Mein Großvater war ein erfolgreicher Geschäftsmann.", exampleTr: "Büyükbabam başarılı bir iş adamıydı." },
  { german: "flexibel", turkish: "Esnek", category: "Sıfatlar", level: "B1", exampleDe: "Meine Arbeitszeit ist flexibel.", exampleTr: "Çalışma saatlerim esnek." },
  { german: "fleißig", turkish: "Çalışkan", category: "Sıfatlar", level: "B1", exampleDe: "Pamela ist wirklich fleißig.", exampleTr: "Pamela gerçekten çalışkan." },
  { german: "freundlich", turkish: "Nazik / Kibar", category: "Sıfatlar", level: "B1", exampleDe: "Er hat uns sehr freundlich begrüßt.", exampleTr: "Bizi çok nazikçe karşıladı." },
  { german: "gespannt", turkish: "Meraklı / Heyecanlı", category: "Sıfatlar", level: "B1", exampleDe: "Ich bin gespannt, wer bei diesem Spiel gewinnt.", exampleTr: "Bu oyunda kimin kazanacağını merak ediyorum." },
  { german: "gültig", turkish: "Geçerli", category: "Sıfatlar", level: "B1", exampleDe: "Mein Pass ist nur noch zwei Monate gültig.", exampleTr: "Pasaportum sadece iki ay daha geçerli." },
  { german: "kreativ", turkish: "Yaratıcı", category: "Sıfatlar", level: "B1", exampleDe: "Die Kinder sind beim Basteln sehr kreativ.", exampleTr: "Çocuklar el işlerinde çok yaratıcı." },
  { german: "peinlich", turkish: "Utandırıcı / Tuhaf", category: "Sıfatlar", level: "B1", exampleDe: "Das war eine peinliche Situation.", exampleTr: "Utandırıcı bir durumdu." },
  { german: "schwierig", turkish: "Zor / Güç", category: "Sıfatlar", level: "B1", exampleDe: "Die Prüfung war sehr schwierig.", exampleTr: "Sınav çok zordu." },
  { german: "selten", turkish: "Nadir / Seyrek", category: "Sıfatlar", level: "B1", exampleDe: "Ich gehe ganz selten ins Kino.", exampleTr: "Sinemaya çok seyrek gidiyorum." },
  { german: "sinnvoll", turkish: "Mantıklı / Anlamlı", category: "Sıfatlar", level: "B1", exampleDe: "Es ist sinnvoll, es noch einmal zu versuchen.", exampleTr: "Bir daha denemek mantıklı." },
  { german: "vegetarisch", turkish: "Vejetaryen", category: "Sıfatlar", level: "B1", exampleDe: "Haben Sie auch vegetarische Gerichte?", exampleTr: "Vejetaryen yemekleriniz var mı?" },
  { german: "verheiratet", turkish: "Evli", category: "Sıfatlar", level: "B1", exampleDe: "Meine Eltern sind seit 30 Jahren verheiratet.", exampleTr: "Ailem 30 yıldır evli." },
  { german: "verrückt", turkish: "Deli / Çılgın", category: "Sıfatlar", level: "B1", exampleDe: "So eine verrückte Idee!", exampleTr: "Ne çılgın bir fikir!" },
  { german: "negativ", turkish: "Olumsuz / Negatif", category: "Sıfatlar", level: "B1", exampleDe: "Du solltest nicht alles negativ sehen.", exampleTr: "Her şeye olumsuz bakmamalısın." },
  { german: "optimistisch", turkish: "İyimser", category: "Sıfatlar", level: "B1", exampleDe: "Glaubst du, dass du den Job bekommst? – Ich bin ganz optimistisch.", exampleTr: "İşi alacağını düşünüyor musun? – Tamamen iyimserim." },
  { german: "ordentlich", turkish: "Düzenli / Tertipli", category: "Sıfatlar", level: "B1", exampleDe: "Mein Bruder ist ein sehr ordentlicher Mensch.", exampleTr: "Kardeşim çok düzenli bir insan." },
  { german: "selbstständig", turkish: "Bağımsız / Özerk", category: "Sıfatlar", level: "B1", exampleDe: "Früher war ich selbstständig.", exampleTr: "Eskiden bağımsız çalışıyordum." },
  { german: "schwanger", turkish: "Hamile", category: "Sıfatlar", level: "B1", exampleDe: "Meine Frau ist im dritten Monat schwanger.", exampleTr: "Eşim üçüncü ayında hamile." },

  // B1 Fiiller
  { german: "ablehnen", turkish: "Reddetmek", category: "Fiiller", level: "B1", exampleDe: "Er hat mein Angebot, ihm zu helfen, abgelehnt.", exampleTr: "Yardım teklifimi reddetti." },
  { german: "absagen", turkish: "İptal etmek", category: "Fiiller", level: "B1", exampleDe: "Ich muss unser Treffen leider absagen.", exampleTr: "Buluşmamızı iptal etmem gerekiyor." },
  { german: "besichtigen", turkish: "Gezmek / Ziyaret etmek", category: "Fiiller", level: "B1", exampleDe: "Im Urlaub haben wir Schloss Schönbrunn besichtigt.", exampleTr: "Tatilde Schönbrunn Sarayı'nı gezdik." },
  { german: "diskutieren", turkish: "Tartışmak", category: "Fiiller", level: "B1", exampleDe: "Wir haben lange diskutiert.", exampleTr: "Uzun süre tartıştık." },
  { german: "entscheiden", turkish: "Karar vermek", category: "Fiiller", level: "B1", exampleDe: "Das kann ich nicht allein entscheiden.", exampleTr: "Bunu tek başıma kararlaştıramam." },
  { german: "erklären", turkish: "Açıklamak", category: "Fiiller", level: "B1", exampleDe: "Kannst du mir erklären, wie man diesen Apparat bedient?", exampleTr: "Bu cihazın nasıl kullanıldığını açıklayabilir misin?" },
  { german: "erlauben", turkish: "İzin vermek", category: "Fiiller", level: "B1", exampleDe: "Parken ist hier nicht erlaubt.", exampleTr: "Burada park etmek yasak." },
  { german: "erleben", turkish: "Yaşamak / Deneyimlemek", category: "Fiiller", level: "B1", exampleDe: "In unserem Urlaub haben wir viel Schönes erlebt.", exampleTr: "Tatilimizde çok güzel şeyler yaşadık." },
  { german: "erreichen", turkish: "Ulaşmak", category: "Fiiller", level: "B1", exampleDe: "Wenn wir uns beeilen, erreichen wir noch den 8-Uhr-Zug.", exampleTr: "Acele edersek saat 8 trenine yetişiriz." },
  { german: "gewinnen", turkish: "Kazanmak", category: "Fiiller", level: "B1", exampleDe: "Unsere Mannschaft hat gewonnen.", exampleTr: "Takımımız kazandı." },
  { german: "gratulieren", turkish: "Tebrik etmek", category: "Fiiller", level: "B1", exampleDe: "Ich gratuliere euch zur Geburt eurer Tochter.", exampleTr: "Kızınızın doğumu için tebrikler." },
  { german: "kündigen", turkish: "İstifa etmek / Feshetmek", category: "Fiiller", level: "B1", exampleDe: "Ich war mit meiner Stelle nicht zufrieden und habe gekündigt.", exampleTr: "İşimden memnun değildim ve istifa ettim." },
  { german: "lächeln", turkish: "Gülümsemek", category: "Fiiller", level: "B1", exampleDe: "Schauen Sie in die Kamera. Bitte lächeln!", exampleTr: "Kameraya bakın. Lütfen gülümseyin!" },
  { german: "organisieren", turkish: "Organize etmek", category: "Fiiller", level: "B1", exampleDe: "Für den Sommerurlaub habe ich schon alles organisiert.", exampleTr: "Yaz tatili için her şeyi organize ettim." },
  { german: "übertreiben", turkish: "Abartmak", category: "Fiiller", level: "B1", exampleDe: "Ein bisschen Sport ist gesund. Aber man sollte es nicht übertreiben.", exampleTr: "Biraz spor sağlıklı. Ama abartmamak gerekir." },
  { german: "unterschreiben", turkish: "İmzalamak", category: "Fiiller", level: "B1", exampleDe: "Unterschreiben Sie bitte hier unten rechts.", exampleTr: "Lütfen buraya, sağ alta imzalayın." },
  { german: "unterstützen", turkish: "Desteklemek", category: "Fiiller", level: "B1", exampleDe: "Sie unterstützen mich, wo sie nur können.", exampleTr: "Elimden geldiğince beni destekliyorlar." },
  { german: "verbieten", turkish: "Yasaklamak", category: "Fiiller", level: "B1", exampleDe: "In den meisten Restaurants ist Rauchen verboten.", exampleTr: "Çoğu restoranda sigara içmek yasak." },
  { german: "verbringen", turkish: "Geçirmek (zaman)", category: "Fiiller", level: "B1", exampleDe: "Wie haben Sie Ihren Urlaub verbracht?", exampleTr: "Tatilinizi nasıl geçirdiniz?" },
  { german: "vergessen", turkish: "Unutmak", category: "Fiiller", level: "B1", exampleDe: "Ich habe den Termin ganz vergessen.", exampleTr: "Randevuyu tamamen unuttum." },
  { german: "vergleichen", turkish: "Karşılaştırmak", category: "Fiiller", level: "B1", exampleDe: "Vergleichen Sie die Angebote.", exampleTr: "Teklifleri karşılaştırın." },
  { german: "verlieren", turkish: "Kaybetmek", category: "Fiiller", level: "B1", exampleDe: "Ich habe meine Brieftasche verloren.", exampleTr: "Cüzdanımı kaybettim." },
  { german: "sich verletzen", turkish: "Yaralanmak", category: "Fiiller", level: "B1", exampleDe: "Ich habe mich an der Hand verletzt.", exampleTr: "Elimden yaralandım." },
  { german: "sich verlieben", turkish: "Aşık olmak", category: "Fiiller", level: "B1", exampleDe: "Ich habe mich verliebt.", exampleTr: "Aşık oldum." },
  { german: "sich verändern", turkish: "Değişmek", category: "Fiiller", level: "B1", exampleDe: "Du hast dich gar nicht verändert.", exampleTr: "Hiç değişmemişsin." },
  { german: "verschieben", turkish: "Ertelemek", category: "Fiiller", level: "B1", exampleDe: "Leider muss ich den Termin verschieben.", exampleTr: "Maalesef randevuyu ertelemem gerekiyor." },
];
