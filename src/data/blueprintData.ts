import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';
import { CONFIG } from '../config';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase B (Kelas 4) Mata Pelajaran BAHASA INGGRIS
 * Lingkup Materi: Kids and Toys, Color of Toys (30 Soal Pilihan Ganda)
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Bahasa Inggris Kelas 4 Kurikulum Merdeka
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Kids and Toys',
    tujuanPembelajaran: 'Peserta didik mampu mengidentifikasi kosakata nama mainan anak dalam bahasa Inggris melalui gambar.',
    indikatorSoal: 'Disajikan gambar teddy bear dan bola di lantai kayu, peserta didik dapat menentukan nama kedua mainan tersebut dalam bahasa Inggris dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Kids and Toys',
    tujuanPembelajaran: 'Peserta didik mampu mengenali aktivitas anak saat bermain mainan dalam kalimat sederhana.',
    indikatorSoal: 'Disajikan gambar anak laki-laki dan perempuan bermain layang-layang di taman, peserta didik dapat memilih kalimat aktivitas yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Kids and Toys',
    tujuanPembelajaran: 'Peserta didik mampu mengidentifikasi nama mainan berdasarkan posisinya pada gambar rak mainan.',
    indikatorSoal: 'Disajikan gambar rak berisi empat mainan berbeda (robot, toy car, doll, airplane), peserta didik dapat menyebutkan nama mainan pada kotak kiri atas.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Kids and Toys',
    tujuanPembelajaran: 'Peserta didik mampu mengidentifikasi nama mainan berdasarkan deskripsi ciri dan cara memainkannya.',
    indikatorSoal: 'Disajikan teka-teki deskripsi singkat tentang mainan berbentuk bulat yang dapat ditendang dan dipantulkan, peserta didik dapat menentukan nama mainannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Kids and Toys',
    tujuanPembelajaran: 'Peserta didik mampu menerjemahkan kosakata mainan tradisional/modern dari bahasa Indonesia ke bahasa Inggris.',
    indikatorSoal: 'Disajikan kalimat konteks tentang permainan gasing, peserta didik dapat menentukan padanan kata bahasa Inggris yang tepat (spinning top).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Kids and Toys',
    tujuanPembelajaran: 'Peserta didik mampu menghitung jumlah mainan pada gambar dan menyatakannya dalam bahasa Inggris.',
    indikatorSoal: 'Disajikan gambar kereta mainan dan tumpukan balok kayu, peserta didik dapat menentukan jumlah balok kayu yang tersusun dengan benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Kids and Toys',
    tujuanPembelajaran: 'Peserta didik mampu menggunakan bentuk tunggal dan jamak (There is / There are) untuk menghitung mainan.',
    indikatorSoal: 'Disajikan ilustrasi 5 kelereng dan 1 yo-yo, peserta didik dapat memilih kalimat "There are five marbles" yang sesuai dengan jumlah gambar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Kids and Toys',
    tujuanPembelajaran: 'Peserta didik mampu melengkapi dialog pendek tentang mainan yang dimiliki siswa.',
    indikatorSoal: 'Disajikan dialog rumpang antara Lina dan Edo tentang mainan yang diterbangkan saat angin bertiup, peserta didik dapat melengkapi nama mainan yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Kids and Toys',
    tujuanPembelajaran: 'Peserta didik mampu menerapkan penggunaan kata kerja kepemilikan "have" dan "has" sesuai subjek.',
    indikatorSoal: 'Disajikan kalimat rumpang dengan subjek tunggal (Siti) dan subjek jamak (Beni and Udin), peserta didik dapat memilih pasangan "has / have" dengan benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Kids and Toys',
    tujuanPembelajaran: 'Peserta didik mampu menerapkan kata tunjuk jamak "These are" dalam kalimat tentang mainan.',
    indikatorSoal: 'Disajikan kalimat rumpang "... are my favorite toy blocks", peserta didik dapat memilih kata tunjuk "These" sesuai bentuk jamak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Kids and Toys',
    tujuanPembelajaran: 'Peserta didik mampu mendeskripsikan kegiatan anak bersama mainannya menggunakan Present Continuous Tense.',
    indikatorSoal: 'Disajikan gambar seorang anak laki-laki bersepeda di taman, peserta didik dapat memilih kalimat deskripsi aktivitas yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Kids and Toys',
    tujuanPembelajaran: 'Peserta didik mampu menyusun kata acak menjadi kalimat bahasa Inggris yang benar tentang aktivitas bermain.',
    indikatorSoal: 'Disajikan delapan kata acak bertema bermain boneka di kamar tidur, peserta didik dapat menyusunnya menjadi kalimat berpola S-V-O-Place yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Kids and Toys',
    tujuanPembelajaran: 'Peserta didik mampu menganalisis informasi tersurat dari teks bacaan pendek tentang anak dan mainan favoritnya.',
    indikatorSoal: 'Disajikan teks pendek mengenai tiga saudara dan mainan kesukaannya, peserta didik dapat mengidentifikasi anak yang gemar bermain lompat tali.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Kids and Toys',
    tujuanPembelajaran: 'Peserta didik mampu menyimpulkan sikap tokoh dari percakapan pendek tentang meminjam mainan.',
    indikatorSoal: 'Disajikan dialog singkat meminjam papan luncur antara Dika dan Bayu, peserta didik dapat menyimpulkan sifat baik hati (kind) tokoh Bayu.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Kids and Toys',
    tujuanPembelajaran: 'Peserta didik mampu mengelompokkan jenis mainan berdasarkan tempat memainkannya (indoor vs outdoor).',
    indikatorSoal: 'Disajikan empat kelompok daftar mainan dalam bahasa Inggris, peserta didik dapat memilih kelompok mainan yang dimainkan di luar ruangan (outdoors).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Color of Toys',
    tujuanPembelajaran: 'Peserta didik mampu mengidentifikasi warna dasar mainan melalui gambar.',
    indikatorSoal: 'Disajikan gambar teddy bear dan bola merah, peserta didik dapat menentukan warna bola dalam kalimat bahasa Inggris yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Color of Toys',
    tujuanPembelajaran: 'Peserta didik mampu menyebutkan warna mobil mainan berdasarkan gambar.',
    indikatorSoal: 'Disajikan gambar rak mainan berisi mobil kuning di kanan atas, peserta didik dapat mengidentifikasi warna mobil mainan tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Color of Toys',
    tujuanPembelajaran: 'Peserta didik mampu menyebutkan warna pesawat mainan berdasarkan gambar.',
    indikatorSoal: 'Disajikan gambar rak mainan berisi pesawat hijau di kanan bawah, peserta didik dapat mengidentifikasi warna pesawat mainan tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Color of Toys',
    tujuanPembelajaran: 'Peserta didik mampu mencocokkan nama mainan dengan warnanya melalui ilustrasi.',
    indikatorSoal: 'Disajikan gambar empat mainan berwarna berbeda (basketball, yo-yo, soccer ball, scooter), peserta didik dapat menyebutkan warna mainan yo-yo.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Color of Toys',
    tujuanPembelajaran: 'Peserta didik mampu mengidentifikasi dua warna benda/mainan pada gambar sekaligus.',
    indikatorSoal: 'Disajikan gambar anak memakai helm kuning dan mengendarai sepeda biru, peserta didik dapat melengkapi dua kata warna yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Color of Toys',
    tujuanPembelajaran: 'Peserta didik mampu mengidentifikasi kombinasi warna mainan balok pada gambar.',
    indikatorSoal: 'Disajikan gambar tumpukan empat balok kayu berwarna kuning dan hijau, peserta didik dapat menentukan kombinasi warna balok tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Color of Toys',
    tujuanPembelajaran: 'Peserta didik mampu mengevaluasi kebenaran kalimat deskripsi warna mainan berdasarkan gambar.',
    indikatorSoal: 'Disajikan gambar tiga mobil mainan berwarna merah, biru, dan hijau, peserta didik dapat memilih pernyataan bahasa Inggris yang benar sesuai gambar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Color of Toys',
    tujuanPembelajaran: 'Peserta didik mampu menyusun frasa kata benda dan warna (Adjective + Noun) dalam bahasa Inggris.',
    indikatorSoal: 'Disajikan frasa bahasa Indonesia "sebuah robot berwarna biru", peserta didik dapat menentukan terjemahan berstruktur Adjective + Noun ("a blue robot").',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Color of Toys',
    tujuanPembelajaran: 'Peserta didik mampu menggunakan kata tanya "What color" untuk menanyakan warna mainan dalam dialog.',
    indikatorSoal: 'Disajikan dialog rumpang dengan jawaban "It is pink and white", peserta didik dapat melengkapi kalimat tanya menggunakan "What color".',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Color of Toys',
    tujuanPembelajaran: 'Peserta didik mampu memahami makna frasa jumlah, warna, dan nama mainan dalam kalimat.',
    indikatorSoal: 'Disajikan kalimat berisi frasa "two orange marbles", peserta didik dapat menentukan arti frasa tersebut dalam bahasa Indonesia dengan tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Color of Toys',
    tujuanPembelajaran: 'Peserta didik mampu mengidentifikasi warna cokelat (brown) pada mainan di dalam kotak mainan.',
    indikatorSoal: 'Disajikan gambar kotak mainan berisi teddy bear cokelat, drum merah, dan perahu biru, peserta didik dapat menentukan mainan yang berwarna cokelat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Color of Toys',
    tujuanPembelajaran: 'Peserta didik mampu menalar hasil pencampuran dua warna dasar dalam konteks mewarnai mainan.',
    indikatorSoal: 'Disajikan narasi Rafi mencampur cat merah dan kuning untuk mewarnai pesawat kayu, peserta didik dapat menentukan warna baru yang terbentuk (orange).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Color of Toys',
    tujuanPembelajaran: 'Peserta didik mampu menganalisis informasi warna berbagai mainan dalam teks deskriptif pendek.',
    indikatorSoal: 'Disajikan teks pendek mengenai koleksi mainan Kadek dan warnanya, peserta didik dapat mengidentifikasi warna mobil mainan milik Kadek.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Color of Toys',
    tujuanPembelajaran: 'Peserta didik mampu membandingkan warna mainan dengan warna benda di kehidupan sehari-hari.',
    indikatorSoal: 'Disajikan teks kepemilikan mainan warna-warni milik tiga anak, peserta didik dapat menentukan pemilik mainan yang warnanya sama dengan pisang matang.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Color of Toys',
    tujuanPembelajaran: 'Peserta didik mampu memecahkan teka-teki logika deduktif tentang pemilik, jenis mainan, dan warnanya.',
    indikatorSoal: 'Disajikan tiga petunjuk logika mengenai kepemilikan mainan (robot, doll, ball) dan warnanya oleh Adi, Bintang, dan Citra, peserta didik dapat menyimpulkan mainan dan warna milik Bintang.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'PGK Kategori (Benar / Salah)';
    case 'isian':
      return 'Isian Singkat';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  if (q.type === 'isian') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : '-';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep ${q.topic} pada mata pelajaran ${CONFIG.MATA_PELAJARAN} Kelas ${CONFIG.KELAS}.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus mengenai ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : q.type === 'pg' ? 1 : 2);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (
    t.includes('color') ||
    t.includes('red') ||
    t.includes('blue') ||
    t.includes('yellow') ||
    t.includes('brown') ||
    t.includes('warna')
  ) {
    return 'Color of Toys';
  }
  return 'Kids and Toys';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0, isian: 0 };

  let totalBobot = 0;

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    totalBobot += bp.bobotSkor;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami kosakata dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan pola kalimat & dialog sederhana',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis teks & menyimpulkan logika',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const allTypeItems = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'PGK Kategori (Benar / Salah)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
    {
      type: 'isian',
      label: 'Isian Singkat',
      count: typeCountMap.isian,
      percentage: total > 0 ? Math.round((typeCountMap.isian / total) * 100) : 0,
    },
  ];

  const typeDistribution = allTypeItems.filter((item) => item.count > 0);

  return {
    total,
    totalBobot,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
