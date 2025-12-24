
import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Boş vaktinde en çok ne yapmayı seversin?",
    category: "Genel İlgi",
    options: [
      { id: '1a', text: 'Resim yapmak veya boyama', icon: '🎨', color: 'bg-pink-400' },
      { id: '1b', text: 'Lego veya maket yapmak', icon: '🧱', color: 'bg-blue-400' },
      { id: '1c', text: 'Kitap okumak veya hikaye yazmak', icon: '📚', color: 'bg-green-400' },
      { id: '1d', text: 'Dışarıda koşup oynamak', icon: '🏃', color: 'bg-orange-400' }
    ]
  },
  {
    id: 2,
    text: "Hangi süper güce sahip olmak isterdin?",
    category: "Kişilik",
    options: [
      { id: '2a', text: 'Hayvanlarla konuşabilmek', icon: '🐾', color: 'bg-green-500' },
      { id: '2b', text: 'Geleceği görebilen bir dahi olmak', icon: '🧠', color: 'bg-purple-400' },
      { id: '2c', text: 'Uçabilmek ve dünyayı gezmek', icon: '☁️', color: 'bg-sky-400' },
      { id: '2d', text: 'Görünmez olup gizemleri çözmek', icon: '🕵️', color: 'bg-slate-400' }
    ]
  },
  {
    id: 3,
    text: "Okulda en sevdiğin ders hangisi?",
    category: "Akademik",
    options: [
      { id: '3a', text: 'Görsel Sanatlar / Müzik', icon: '🎸', color: 'bg-rose-400' },
      { id: '3b', text: 'Matematik / Fen Bilimleri', icon: '🧪', color: 'bg-cyan-400' },
      { id: '3c', text: 'Türkçe / Hayat Bilgisi', icon: '📖', color: 'bg-amber-400' },
      { id: '3d', text: 'Beden Eğitimi', icon: '⚽', color: 'bg-lime-500' }
    ]
  },
  {
    id: 4,
    text: "Bir günlüğüne nereye gitmek isterdin?",
    category: "Macera",
    options: [
      { id: '4a', text: 'Büyük bir sanat müzesine', icon: '🖼️', color: 'bg-indigo-400' },
      { id: '4b', text: 'Uzay istasyonuna', icon: '🚀', color: 'bg-blue-900' },
      { id: '4c', text: 'Vahşi bir ormana', icon: '🦁', color: 'bg-emerald-500' },
      { id: '4d', text: 'Teknoloji fuarına', icon: '🤖', color: 'bg-zinc-500' }
    ]
  },
  {
    id: 5,
    text: "Arkadaşlarınla ne yaparken daha mutlusun?",
    category: "Sosyal",
    options: [
      { id: '5a', text: 'Birlikte oyun kurmak', icon: '🎭', color: 'bg-yellow-400' },
      { id: '5b', text: 'Yeni şeyler keşfetmek', icon: '🔍', color: 'bg-teal-400' },
      { id: '5c', text: 'Yardımlaşmak ve sohbet etmek', icon: '🤝', color: 'bg-red-400' },
      { id: '5d', text: 'Yarışmalar ve spor yapmak', icon: '🏆', color: 'bg-orange-500' }
    ]
  },
  {
    id: 6,
    text: "Sence en havalı icat hangisi?",
    category: "Teknoloji",
    options: [
      { id: '6a', text: 'Zaman makinesi', icon: '⏳', color: 'bg-stone-500' },
      { id: '6b', text: 'Uçan arabalar', icon: '🛸', color: 'bg-cyan-500' },
      { id: '6c', text: 'Robot yardımcılar', icon: '🤖', color: 'bg-gray-400' },
      { id: '6d', text: 'Işınlanma kapısı', icon: '🌀', color: 'bg-violet-500' }
    ]
  },
  {
    id: 7,
    text: "Yavru bir aslan görsen ne yaparsın?",
    category: "Doğa",
    options: [
      { id: '7a', text: 'Fotoğrafını çekerim', icon: '📸', color: 'bg-blue-400' },
      { id: '7b', text: 'Onu inceleyip not alırım', icon: '📝', color: 'bg-amber-500' },
      { id: '7c', text: 'Hemen yardıma ihtiyacı var mı bakarım', icon: '🏥', color: 'bg-red-500' },
      { id: '7d', text: 'Onunla oyun oynamaya çalışırım', icon: '🐾', color: 'bg-orange-400' }
    ]
  },
  {
    id: 8,
    text: "Bir mutfakta şef olsan ne pişirirdin?",
    category: "Yaratıcılık",
    options: [
      { id: '8a', text: 'Rengarenk süslü pastalar', icon: '🎂', color: 'bg-pink-300' },
      { id: '8b', text: 'Yeni ve değişik bir çorba', icon: '🍲', color: 'bg-orange-300' },
      { id: '8c', text: 'Sağlıklı meyve salataları', icon: '🍓', color: 'bg-green-300' },
      { id: '8d', text: 'En hızlı pişen pizzalar', icon: '🍕', color: 'bg-red-400' }
    ]
  },
  {
    id: 9,
    text: "Gece gökyüzüne bakınca ne düşünürsün?",
    category: "Merak",
    options: [
      { id: '9a', text: 'Yıldızların nasıl parladığını', icon: '✨', color: 'bg-yellow-200' },
      { id: '9b', text: 'Uzaylıların nerede olduğunu', icon: '👽', color: 'bg-lime-400' },
      { id: '9c', text: 'Bir astronot olmayı', icon: '👨‍🚀', color: 'bg-blue-800' },
      { id: '9d', text: 'Yıldızlardan desenler çizmeyi', icon: '🌌', color: 'bg-indigo-900' }
    ]
  },
  {
    id: 10,
    text: "Sahnede olsan ne yapmak istersin?",
    category: "Sanat",
    options: [
      { id: '10a', text: 'Şarkı söylemek', icon: '🎤', color: 'bg-rose-500' },
      { id: '10b', text: 'Tiyatro oyunu oynamak', icon: '🎭', color: 'bg-purple-600' },
      { id: '10c', text: 'Sihirbazlık yapmak', icon: '🪄', color: 'bg-black' },
      { id: '10d', text: 'Dans etmek', icon: '💃', color: 'bg-pink-600' }
    ]
  },
  {
    id: 11,
    text: "Hangi bilgisayar oyunu daha eğlenceli?",
    category: "Teknoloji",
    options: [
      { id: '11a', text: 'Dünyalar kurduğum oyunlar', icon: '🏗️', color: 'bg-emerald-600' },
      { id: '11b', text: 'Hızlı yarış oyunları', icon: '🏎️', color: 'bg-red-600' },
      { id: '11c', text: 'Gizem çözdüğüm maceralar', icon: '🔎', color: 'bg-indigo-500' },
      { id: '11d', text: 'Zeka ve strateji oyunları', icon: '♟️', color: 'bg-slate-700' }
    ]
  },
  {
    id: 12,
    text: "Okul bahçesinde çöp görsen ne yaparsın?",
    category: "Değerler",
    options: [
      { id: '12a', text: 'Hemen çöp kutusuna atarım', icon: '♻️', color: 'bg-green-600' },
      { id: '12b', text: 'Arkadaşlarımı uyarırım', icon: '📣', color: 'bg-blue-600' },
      { id: '12c', text: 'Bir temizlik günü planlarım', icon: '📅', color: 'bg-yellow-600' },
      { id: '12d', text: 'Doğayı nasıl koruruz diye düşünürüm', icon: '🌍', color: 'bg-teal-500' }
    ]
  },
  {
    id: 13,
    text: "Nasıl kitaplar seni daha çok heyecanlandırır?",
    category: "Edebiyat",
    options: [
      { id: '13a', text: 'Hayvan dostu masallar', icon: '🦄', color: 'bg-fuchsia-400' },
      { id: '13b', text: 'Bilimsel deney kitapları', icon: '🧪', color: 'bg-sky-500' },
      { id: '13c', text: 'Dedektiflik hikayeleri', icon: '🕵️‍♀️', color: 'bg-zinc-700' },
      { id: '13d', text: 'Ünlü sporcuların hayatı', icon: '🏃‍♂️', color: 'bg-orange-600' }
    ]
  },
  {
    id: 14,
    text: "Hangi spor takımında olmak istersin?",
    category: "Fiziksel",
    options: [
      { id: '14a', text: 'Basketbol takımı', icon: '🏀', color: 'bg-orange-500' },
      { id: '14b', text: 'Yüzme takımı', icon: '🏊', color: 'bg-blue-400' },
      { id: '14c', text: 'Jimnastik grubu', icon: '🤸', color: 'bg-pink-400' },
      { id: '14d', text: 'Futbol takımı', icon: '⚽', color: 'bg-green-500' }
    ]
  },
  {
    id: 15,
    text: "Karmaşık bir puzzle gördüğünde ne hissedersin?",
    category: "Zeka",
    options: [
      { id: '15a', text: 'Hemen parçaları birleştirmeliyim!', icon: '🧩', color: 'bg-blue-500' },
      { id: '15b', text: 'Önce bir plan yapmalıyım', icon: '📋', color: 'bg-yellow-500' },
      { id: '15c', text: 'Yardım alarak bitirmek isterim', icon: '🙋‍♂️', color: 'bg-purple-500' },
      { id: '15d', text: 'Bitince çok gurur duyacağım!', icon: '🥇', color: 'bg-amber-400' }
    ]
  },
  {
    id: 16,
    text: "Neyin koleksiyonunu yapmak istersin?",
    category: "Hobi",
    options: [
      { id: '16a', text: 'İlginç taşlar ve yapraklar', icon: '🪨', color: 'bg-stone-400' },
      { id: '16b', text: 'Renkli pullar veya paralar', icon: '🪙', color: 'bg-yellow-600' },
      { id: '16c', text: 'Oyuncak arabalar veya bebekler', icon: '🧸', color: 'bg-rose-400' },
      { id: '16d', text: 'Bilgi kartları ve resimler', icon: '🃏', color: 'bg-indigo-400' }
    ]
  },
  {
    id: 17,
    text: "Hangi enstrümanı çalmayı öğrenmek istersin?",
    category: "Ritim",
    options: [
      { id: '17a', text: 'Piyano', icon: '🎹', color: 'bg-neutral-800' },
      { id: '17b', text: 'Gitar', icon: '🎸', color: 'bg-amber-700' },
      { id: '17c', text: 'Bateri', icon: '🥁', color: 'bg-red-700' },
      { id: '17d', text: 'Keman', icon: '🎻', color: 'bg-yellow-800' }
    ]
  },
  {
    id: 18,
    text: "Bir robotun olsa ona ilk neyi öğretirdin?",
    category: "Mantık",
    options: [
      { id: '18a', text: 'Ödevlerime yardım etmeyi', icon: '✏️', color: 'bg-blue-400' },
      { id: '18b', text: 'Benimle oyun oynamayı', icon: '🎮', color: 'bg-purple-400' },
      { id: '18c', text: 'Evi temizlemeyi', icon: '🧹', color: 'bg-emerald-400' },
      { id: '18d', text: 'Güzel hikayeler anlatmayı', icon: '🗣️', color: 'bg-amber-500' }
    ]
  },
  {
    id: 19,
    text: "Hayalindeki ev nasıldır?",
    category: "Hayal",
    options: [
      { id: '19a', text: 'Ağaç ev', icon: '🏠', color: 'bg-green-700' },
      { id: '19b', text: 'Çikolatadan ev', icon: '🍫', color: 'bg-amber-900' },
      { id: '19c', text: 'Modern ve akıllı ev', icon: '🏢', color: 'bg-slate-500' },
      { id: '19d', text: 'Su altındaki bir şato', icon: '🏰', color: 'bg-blue-600' }
    ]
  },
  {
    id: 20,
    text: "Büyüyünce en çok hangisi olmak istersin?",
    category: "Gelecek",
    options: [
      { id: '20a', text: 'Dünyayı gezen bir kaşif', icon: '🗺️', color: 'bg-orange-500' },
      { id: '20b', text: 'İnsanları iyileştiren bir doktor', icon: '👩‍⚕️', color: 'bg-blue-500' },
      { id: '20c', text: 'Harika eserler yaratan sanatçı', icon: '👩‍🎨', color: 'bg-pink-500' },
      { id: '20d', text: 'Geleceği tasarlayan bir mühendis', icon: '🏗️', color: 'bg-gray-600' }
    ]
  }
];
