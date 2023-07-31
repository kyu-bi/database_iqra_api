"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Harkats", [
      {
        id: 1,
        huruf_id: 1,
        harkat: "Fathah",
        tulisan_arab: "اَ",
        tulisan_latin: "a",
        pengucapan: "Seperti huruf A, Mulut dibuka (Aa/Ii/Uu). Diucapkan dipangkal tenggorokan",
        audio: "/audio/1.a(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        huruf_id: 1,
        harkat: "Kasrah",
        tulisan_arab: "اِ",
        tulisan_latin: "i",
        pengucapan: "Seperti huruf A, Mulut dibuka (Aa/Ii/Uu). Diucapkan dipangkal tenggorokan",
        audio: "/audio/2.i(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        huruf_id: 1,
        harkat: "Dhammah",
        tulisan_arab: "اُ",
        tulisan_latin: "u",
        pengucapan: "Seperti huruf A, Mulut dibuka (Aa/Ii/Uu). Diucapkan dipangkal tenggorokan",
        audio: "/audio/3.u(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        huruf_id: 2,
        harkat: "Fathah",
        tulisan_arab: "بَ",
        tulisan_latin: "ba",
        pengucapan: "Seperti huruf B, tidak disertai nafas (Ba/Bi/Bu). Bibir (merapatkan kedua bibir).",
        audio: "/audio/4.ba(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        huruf_id: 2,
        harkat: "Kasrah",
        tulisan_arab: "بِ",
        tulisan_latin: "bi",
        pengucapan: "Seperti huruf B, tidak disertai nafas (Ba/Bi/Bu). Bibir (merapatkan kedua bibir).",
        audio: "/audio/5.bi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        huruf_id: 2,
        harkat: "Dhammah",
        tulisan_arab: "بُ",
        tulisan_latin: "bu",
        pengucapan: "Seperti huruf B, tidak disertai nafas (Ba/Bi/Bu). Bibir (merapatkan kedua bibir).",
        audio: "/audio/6.bu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        huruf_id: 3,
        harkat: "Fathah",
        tulisan_arab: "تَ",
        tulisan_latin: "ta",
        pengucapan: "Lidah menempel di gusi bagian atas, tidak boleh keluar (Ta/Ti/Tu).",
        audio: "/audio/7.ta(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        huruf_id: 3,
        harkat: "Kasrah",
        tulisan_arab: "تِ",
        tulisan_latin: "ti",
        pengucapan: "Lidah menempel di gusi bagian atas, tidak boleh keluar (Ta/Ti/Tu).",
        audio: "/audio/8.ti(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        huruf_id: 3,
        harkat: "Dhammah",
        tulisan_arab: "تُ",
        tulisan_latin: "tu",
        pengucapan: "Lidah menempel di gusi bagian atas, tidak boleh keluar (Ta/Ti/Tu).",
        audio: "/audio/9.tu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        huruf_id: 4,
        harkat: "Fathah",
        tulisan_arab: "ثَ",
        tulisan_latin: "tsa",
        pengucapan: "Ujung lidah sedikit dikeluarkan, lidah bertemu ujung gigi (Tsa/Tsi).",
        audio: "/audio/10.tsa(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        huruf_id: 4,
        harkat: "Kasrah",
        tulisan_arab: "ثِ",
        tulisan_latin: "tsi",
        pengucapan: "Ujung lidah sedikit dikeluarkan, lidah bertemu ujung gigi (Tsa/Tsi).",
        audio: "/audio/11.tsi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        huruf_id: 4,
        harkat: "Dhammah",
        tulisan_arab: "ثُ",
        tulisan_latin: "tsu",
        pengucapan: "Ujung lidah sedikit dikeluarkan, lidah bertemu ujung gigi (Tsa/Tsi).",
        audio: "/audio/12.tsu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        huruf_id: 5,
        harkat: "Fathah",
        tulisan_arab: "جَ",
        tulisan_latin: "ja",
        pengucapan: "Bagian tengah lidah dan bagian tengah langit-langit mulut paling atas (Ja/Ji/Ju).",
        audio: "/audio/13.ja(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        huruf_id: 5,
        harkat: "Kasrah",
        tulisan_arab: "جِ",
        tulisan_latin: "ji",
        pengucapan: "Bagian tengah lidah dan bagian tengah langit-langit mulut paling atas (Ja/Ji/Ju).",
        audio: "/audio/14.ji(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        huruf_id: 5,
        harkat: "Dhammah",
        tulisan_arab: "جُ",
        tulisan_latin: "ju",
        pengucapan: "Bagian tengah lidah dan bagian tengah langit-langit mulut paling atas (Ja/Ji/Ju).",
        audio: "/audio/15.ju(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        huruf_id: 6,
        harkat: "Fathah",
        tulisan_arab: "حَ",
        tulisan_latin: "ha",
        pengucapan: "Seperti suara pernafasan, suara bersih dan nyaring (Ha/Hi/Hu).",
        audio: "/audio/16.ha(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        huruf_id: 6,
        harkat: "Kasrah",
        tulisan_arab: "حِ",
        tulisan_latin: "hi",
        pengucapan: "Seperti suara pernafasan, suara bersih dan nyaring (Ha/Hi/Hu).",
        audio: "/audio/17.hi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 18,
        huruf_id: 6,
        harkat: "Dhammah",
        tulisan_arab: "حُ",
        tulisan_latin: "hu",
        pengucapan: "Seperti suara pernafasan, suara bersih dan nyaring (Ha/Hi/Hu).",
        audio: "/audio/18.hu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19,
        huruf_id: 7,
        harkat: "Fathah",
        tulisan_arab: "خَ",
        tulisan_latin: "kha",
        pengucapan: "Suara agak kasar (Kha/Khi/Khu). diucapkan pada tenggorokan paling atas.",
        audio: "/audio/19.kha(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 20,
        huruf_id: 7,
        harkat: "Kasrah",
        tulisan_arab: "خِ",
        tulisan_latin: "khi",
        pengucapan: "Suara agak kasar (Kha/Khi/Khu). diucapkan pada tenggorokan paling atas.",
        audio: "/audio/20.khi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 21,
        huruf_id: 7,
        harkat: "Dhammah",
        tulisan_arab: "خُ",
        tulisan_latin: "khu",
        pengucapan: "Suara agak kasar (Kha/Khi/Khu). diucapkan pada tenggorokan paling atas.",
        audio: "/audio/21.khu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 22,
        huruf_id: 8,
        harkat: "Fathah",
        tulisan_arab: "دَ",
        tulisan_latin: "da",
        pengucapan: "Seperti huruf D, tidak boleh disertai nafas (Da/Di/Du).",
        audio: "/audio/22.da(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 23,
        huruf_id: 8,
        harkat: "Kasrah",
        tulisan_arab: "دِ",
        tulisan_latin: "di",
        pengucapan: "Seperti huruf D, tidak boleh disertai nafas (Da/Di/Du).",
        audio: "/audio/23.di(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 24,
        huruf_id: 8,
        harkat: "Dhammah",
        tulisan_arab: "دُ",
        tulisan_latin: "du",
        pengucapan: "Seperti huruf D, tidak boleh disertai nafas (Da/Di/Du).",
        audio: "/audio/24.du(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 25,
        huruf_id: 9,
        harkat: "Fathah",
        tulisan_arab: "ذَ",
        tulisan_latin: "dzal",
        pengucapan: "Ujung lidah sedikit dikeluarkan (Dza/Dzi/Dzu), dan tidak boleh dibaca Za.",
        audio: "/audio/25.dzu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 26,
        huruf_id: 9,
        harkat: "Kasrah",
        tulisan_arab: "ذِ",
        tulisan_latin: "dzi",
        pengucapan: "Ujung lidah sedikit dikeluarkan (Dza/Dzi/Dzu), dan tidak boleh dibaca Za.",
        audio: "/audio/26.dzi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 27,
        huruf_id: 9,
        harkat: "Dhammah",
        tulisan_arab: "ذُ",
        tulisan_latin: "dzu",
        pengucapan: "Ujung lidah sedikit dikeluarkan (Dza/Dzi/Dzu), dan tidak boleh dibaca Za.",
        audio: "/audio/27.dzu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 28,
        huruf_id: 10,
        harkat: "Fathah",
        tulisan_arab: "رَ",
        tulisan_latin: "ra",
        pengucapan: "Dibaca seperti huruf (Ra/Ri/Ru).",
        audio: "/audio/28.ra(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 29,
        huruf_id: 10,
        harkat: "Kasrah",
        tulisan_arab: "رِ",
        tulisan_latin: "ri",
        pengucapan: "Dibaca seperti huruf (Ra/Ri/Ru).",
        audio: "/audio/29.ri(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 30,
        huruf_id: 10,
        harkat: "Dhammah",
        tulisan_arab: "رُ",
        tulisan_latin: "ru",
        pengucapan: "Dibaca seperti huruf (Ra/Ri/Ru).",
        audio: "/audio/30.ru(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 31,
        huruf_id: 11,
        harkat: "Fathah",
        tulisan_arab: "زَ",
        tulisan_latin: "za",
        pengucapan: "Seperti huruf (Za/Zi/Zu).",
        audio: "/audio/31.za(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 32,
        huruf_id: 11,
        harkat: "Kasrah",
        tulisan_arab: "زِ",
        tulisan_latin: "zi",
        pengucapan: "Seperti huruf (Za/Zi/Zu).",
        audio: "/audio/32.zi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 33,
        huruf_id: 11,
        harkat: "Dhammah",
        tulisan_arab: "زُ",
        tulisan_latin: "zu",
        pengucapan: "Seperti huruf (Za/Zi/Zu).",
        audio: "/audio/33.zu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 34,
        huruf_id: 12,
        harkat: "Fathah",
        tulisan_arab: "سَ",
        tulisan_latin: "sa",
        pengucapan: "Seperti huruf S biasa, tipis (Sa/Si/Su).",
        audio: "/audio/34.sa(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 35,
        huruf_id: 12,
        harkat: "Kasrah",
        tulisan_arab: "سِ",
        tulisan_latin: "si",
        pengucapan: "Seperti huruf S biasa, tipis (Sa/Si/Su).",
        audio: "/audio/35.si(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 36,
        huruf_id: 12,
        harkat: "Dhammah",
        tulisan_arab: "سُ",
        tulisan_latin: "su",
        pengucapan: "Seperti huruf S biasa, tipis (Sa/Si/Su).",
        audio: "/audio/36.su(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 37,
        huruf_id: 13,
        harkat: "Fathah",
        tulisan_arab: "شَ",
        tulisan_latin: "sya",
        pengucapan: "Suara angin menyebar dengan kuat, lebih ditekan (Sya/Syi/Syu).",
        audio: "/audio/37.sya(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 38,
        huruf_id: 13,
        harkat: "Kasrah",
        tulisan_arab: "شِ",
        tulisan_latin: "syi",
        pengucapan: "Suara angin menyebar dengan kuat, lebih ditekan (Sya/Syi/Syu).",
        audio: "/audio/38.syi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 39,
        huruf_id: 13,
        harkat: "Dhammah",
        tulisan_arab: "شُ",
        tulisan_latin: "syu",
        pengucapan: "Suara angin menyebar dengan kuat, lebih ditekan (Sya/Syi/Syu).",
        audio: "/audio/39.syu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 40,
        huruf_id: 14,
        harkat: "Fathah",
        tulisan_arab: "صَ",
        tulisan_latin: "sha",
        pengucapan: "Seperti huruf Sin, namun tebal (Sha/Shi/Sho).",
        audio: "/audio/40.sha(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 41,
        huruf_id: 14,
        harkat: "Kasrah",
        tulisan_arab: "صِ",
        tulisan_latin: "shi",
        pengucapan: "Seperti huruf Sin, namun tebal (Sha/Shi/Sho).",
        audio: "/audio/41.shi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 42,
        huruf_id: 14,
        harkat: "Dhammah",
        tulisan_arab: "صُ",
        tulisan_latin: "shu",
        pengucapan: "Seperti huruf Sin, namun tebal (Sha/Shi/Sho).",
        audio: "/audio/42.shu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 43,
        huruf_id: 15,
        harkat: "Fathah",
        tulisan_arab: "ضَ",
        tulisan_latin: "dha",
        pengucapan: "Sisi lidah menempel pada gigi geraham, lidah tidak boleh keluar (Dha/Dhi/Dhu).",
        audio: "/audio/43.dha(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 44,
        huruf_id: 15,
        harkat: "Kasrah",
        tulisan_arab: "ضِ",
        tulisan_latin: "dhi",
        pengucapan: "Sisi lidah menempel pada gigi geraham, lidah tidak boleh keluar (Dha/Dhi/Dhu).",
        audio: "/audio/43.dhi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 45,
        huruf_id: 15,
        harkat: "Dhammah",
        tulisan_arab: "ضُ",
        tulisan_latin: "dhu",
        pengucapan: "Sisi lidah menempel pada gigi geraham, lidah tidak boleh keluar (Dha/Dhi/Dhu).",
        audio: "/audio/44.dhu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 46,
        huruf_id: 16,
        harkat: "Fathah",
        tulisan_arab: "طَ",
        tulisan_latin: "tha",
        pengucapan: "Seperti Ta namun lebih kuat, tidak boleh disertai nafas (Tha/Thi/Thu).",
        audio: "/audio/45.tha(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 47,
        huruf_id: 16,
        harkat: "Kasrah",
        tulisan_arab: "طِ",
        tulisan_latin: "thi",
        pengucapan: "Seperti Ta namun lebih kuat, tidak boleh disertai nafas (Tha/Thi/Thu).",
        audio: "/audio/46.thi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 48,
        huruf_id: 16,
        harkat: "Dhammah",
        tulisan_arab: "طُ",
        tulisan_latin: "thu",
        pengucapan: "Seperti Ta namun lebih kuat, tidak boleh disertai nafas (Tha/Thi/Thu).",
        audio: "/audio/47.thu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 49,
        huruf_id: 17,
        harkat: "Fathah",
        tulisan_arab: "ظَ",
        tulisan_latin: "dzha",
        pengucapan: "Ujung lidah sedikit keluar seperti Dza, namun tebal (Dza/Dzi/Dzu).",
        audio: "/audio/48.zha(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 50,
        huruf_id: 17,
        harkat: "Kasrah",
        tulisan_arab: "ظِ",
        tulisan_latin: "dzhi",
        pengucapan: "Ujung lidah sedikit keluar seperti Dza, namun tebal (Dza/Dzi/Dzu).",
        audio: "/audio/49.zhi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 51,
        huruf_id: 17,
        harkat: "Dhammah",
        tulisan_arab: "ظُ",
        tulisan_latin: "dzhu",
        pengucapan: "Ujung lidah sedikit keluar seperti Dza, namun tebal (Dza/Dzi/Dzu).",
        audio: "/audio/50.zhu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 52,
        huruf_id: 18,
        harkat: "Fathah",
        tulisan_arab: "عَ",
        tulisan_latin: "'a",
        pengucapan: "Seperti suara A yang disertai tekanan (‘A/’I/’U).",
        audio: "/audio/51.'a(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 53,
        huruf_id: 18,
        harkat: "Kasrah",
        tulisan_arab: "عِ",
        tulisan_latin: "'i",
        pengucapan: "Seperti suara A yang disertai tekanan (‘A/’I/’U).",
        audio: "/audio/52.'i(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 54,
        huruf_id: 18,
        harkat: "Dhammah",
        tulisan_arab: "عُ",
        tulisan_latin: "'u",
        pengucapan: "Seperti suara A yang disertai tekanan (‘A/’I/’U).",
        audio: "/audio/53.'u(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 55,
        huruf_id: 19,
        harkat: "Fathah",
        tulisan_arab: "غَ",
        tulisan_latin: "gha",
        pengucapan: "Seperti suara G namun rendah (Gha/Ghi/Ghu).",
        audio: "/audio/54.gha(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 56,
        huruf_id: 19,
        harkat: "Kasrah",
        tulisan_arab: "غِ",
        tulisan_latin: "ghi",
        pengucapan: "Seperti suara G namun rendah (Gha/Ghi/Ghu).",
        audio: "/audio/55.ghi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 57,
        huruf_id: 19,
        harkat: "Dhammah",
        tulisan_arab: "غُ",
        tulisan_latin: "ghu",
        pengucapan: "Seperti suara G namun rendah (Gha/Ghi/Ghu).",
        audio: "/audio/56.ghu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 58,
        huruf_id: 20,
        harkat: "Fathah",
        tulisan_arab: "فَ",
        tulisan_latin: "fa",
        pengucapan: "Seperti huruf F, disertai suara nafas (Fa/Fi/Fu).",
        audio: "/audio/57.fa(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 59,
        huruf_id: 20,
        harkat: "Kasrah",
        tulisan_arab: "فِ",
        tulisan_latin: "fi",
        pengucapan: "Seperti huruf F, disertai suara nafas (Fa/Fi/Fu).",
        audio: "/audio/58.fi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 60,
        huruf_id: 20,
        harkat: "Dhammah",
        tulisan_arab: "فُ",
        tulisan_latin: "fu",
        pengucapan: "Seperti huruf F, disertai suara nafas (Fa/Fi/Fu).",
        audio: "/audio/59.fu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 61,
        huruf_id: 21,
        harkat: "Fathah",
        tulisan_arab: "قَ",
        tulisan_latin: "qa",
        pengucapan: "Seperti huruf Q, tidak boleh disertai nafas (Qa/Qi/Qu).",
        audio: "/audio/60.qa(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 62,
        huruf_id: 21,
        harkat: "Kasrah",
        tulisan_arab: "قِ",
        tulisan_latin: "qi",
        pengucapan: "Seperti huruf Q, tidak boleh disertai nafas (Qa/Qi/Qu).",
        audio: "/audio/61.qi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 63,
        huruf_id: 21,
        harkat: "Dhammah",
        tulisan_arab: "قُ",
        tulisan_latin: "qu",
        pengucapan: "Seperti huruf Q, tidak boleh disertai nafas (Qa/Qi/Qu).",
        audio: "/audio/62.qu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 64,
        huruf_id: 22,
        harkat: "Fathah",
        tulisan_arab: "كَ",
        tulisan_latin: "ka",
        pengucapan: "Seperti huruf K, disertai dengan keluarnya nafas (ka/ki/ku).",
        audio: "/audio/63.ka(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 65,
        huruf_id: 22,
        harkat: "Kasrah",
        tulisan_arab: "كِ",
        tulisan_latin: "ki",
        pengucapan: "Seperti huruf K, disertai dengan keluarnya nafas (ka/ki/ku).",
        audio: "/audio/64.ki(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 66,
        huruf_id: 22,
        harkat: "Dhammah",
        tulisan_arab: "كُ",
        tulisan_latin: "ku",
        pengucapan: "Seperti huruf K, disertai dengan keluarnya nafas (ka/ki/ku).",
        audio: "/audio/65.ku_(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 67,
        huruf_id: 23,
        harkat: "Fathah",
        tulisan_arab: "لَ",
        tulisan_latin: "la",
        pengucapan: "Seperti huruf L, lidah tidak boleh keluar (La/Li/Lu).",
        audio: "/audio/66.la(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 68,
        huruf_id: 23,
        harkat: "Kasrah",
        tulisan_arab: "لِ",
        tulisan_latin: "li",
        pengucapan: "Seperti huruf L, lidah tidak boleh keluar (La/Li/Lu).",
        audio: "/audio/67.li(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 69,
        huruf_id: 23,
        harkat: "Dhammah",
        tulisan_arab: "لُ",
        tulisan_latin: "lu",
        pengucapan: "Seperti huruf L, lidah tidak boleh keluar (La/Li/Lu).",
        audio: "/audio/68.lu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 70,
        huruf_id: 24,
        harkat: "Fathah",
        tulisan_arab: "مَ",
        tulisan_latin: "ma",
        pengucapan: "Seperti huruf M (ma/mi/mu).",
        audio: "/audio/69.ma(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 71,
        huruf_id: 24,
        harkat: "Kasrah",
        tulisan_arab: "مِ",
        tulisan_latin: "mi",
        pengucapan: "Seperti huruf M (ma/mi/mu).",
        audio: "/audio/70.mi_(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 72,
        huruf_id: 24,
        harkat: "Dhammah",
        tulisan_arab: "مُ",
        tulisan_latin: "mu",
        pengucapan: "Seperti huruf M (ma/mi/mu).",
        audio: "/audio/71.mu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 73,
        huruf_id: 25,
        harkat: "Fathah",
        tulisan_arab: "نَ",
        tulisan_latin: "na",
        pengucapan: "Seperti buruf N (Na/Ni/Nu).",
        audio: "/audio/72.na(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 74,
        huruf_id: 25,
        harkat: "Kasrah",
        tulisan_arab: "نِ",
        tulisan_latin: "ni",
        pengucapan: "Seperti buruf N (Na/Ni/Nu).",
        audio: "/audio/73.ni(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 75,
        huruf_id: 25,
        harkat: "Dhammah",
        tulisan_arab: "نُ",
        tulisan_latin: "nu",
        pengucapan: "Seperti buruf N (Na/Ni/Nu).",
        audio: "/audio/74.nu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
   
      {
        id: 76,
        huruf_id: 26,
        harkat: "Fathah",
        tulisan_arab: "وَ",
        tulisan_latin: "wa",
        pengucapan: "Seperti huruf W (wa/wi/wu).",
        audio: "/audio/78.wa(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 77,
        huruf_id: 26,
        harkat: "Kasrah",
        tulisan_arab: "وِ",
        tulisan_latin: "wi",
        pengucapan: "Seperti huruf W (wa/wi/wu).",
        audio: "/audio/79.wi_(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 78,
        huruf_id: 26,
        harkat: "Dhammah",
        tulisan_arab: "وُ",
        tulisan_latin: "wu",
        pengucapan: "Seperti huruf W (wa/wi/wu).",
        audio: "/audio/80.wu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 79,
        huruf_id: 27,
        harkat: "Fathah",
        tulisan_arab: "هَ",
        tulisan_latin: "haa",
        pengucapan: "Seperti huruf H, diucaokan di pangkal tenggorokan dan terasa ada aliran nafas dari hidung, namun tidak berlebihan (Hha/Hhi/Hhu).",
        audio: "/audio/75.hha(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 80,
        huruf_id: 27,
        harkat: "Kasrah",
        tulisan_arab: "هِ",
        tulisan_latin: "hii",
        pengucapan: "Seperti huruf H, diucaokan di pangkal tenggorokan dan terasa ada aliran nafas dari hidung, namun tidak berlebihan (Hha/Hhi/Hhu).",
        audio: "/audio/76.hhi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 81,
        huruf_id: 27,
        harkat: "Dhammah",
        tulisan_arab: "هُ",
        tulisan_latin: "huu",
        pengucapan: "Seperti huruf H, diucaokan di pangkal tenggorokan dan terasa ada aliran nafas dari hidung, namun tidak berlebihan (Hha/Hhi/Hhu).",
        audio: "/audio/77.hhu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      {
        id: 82,
        huruf_id: 28,
        harkat: "Fathah",
        tulisan_arab: "لاَ",
        tulisan_latin: "la'",
        pengucapan: "Seperti huruf L, lidah tidak boleh keluar (La/Li/Lu).",
        audio: "/audio/87.la(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 83,
        huruf_id: 28,
        harkat: "Kasrah",
        tulisan_arab: "لاِ",
        tulisan_latin: "li",
        pengucapan: "Seperti huruf L, lidah tidak boleh keluar (La/Li/Lu).",
        audio: "/audio/88.li(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 84,
        huruf_id: 28,
        harkat: "Dhammah",
        tulisan_arab: "لاُ",
        tulisan_latin: "lu",
        pengucapan: "Seperti huruf L, lidah tidak boleh keluar (La/Li/Lu).",
        audio: "/audio/89.lu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 85,
        huruf_id: 29,
        harkat: "Fathah",
        tulisan_arab: "ءَ",
        tulisan_latin: "a'",
        pengucapan: "Seperti huruf A, Mulut dibuka (Aa/Ii/Uu). Diucapkan dipangkal tenggorokan.",
        audio: "/audio/84.hamzah a(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 86,
        huruf_id: 29,
        harkat: "Kasrah",
        tulisan_arab: "ءِ",
        tulisan_latin: "i",
        pengucapan: "Seperti huruf A, Mulut dibuka (Aa/Ii/Uu). Diucapkan dipangkal tenggorokan.",
        audio: "/audio/85.hamzah i(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 87,
        huruf_id: 29,
        harkat: "Dhammah",
        tulisan_arab: "ءُ",
        tulisan_latin: "u",
        pengucapan: "Seperti huruf A, Mulut dibuka (Aa/Ii/Uu). Diucapkan dipangkal tenggorokan.",
        audio: "/audio/86.hamzah u(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 88,
        huruf_id: 30,
        harkat: "Fathah",
        tulisan_arab: "يَ",
        tulisan_latin: "ya'",
        pengucapan: "Seperti huruf Y (Ya/Yi/Yu).",
        audio: "/audio/81.ya_(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 89,
        huruf_id: 30,
        harkat: "Kasrah",
        tulisan_arab: "يِ",
        tulisan_latin: "yi",
        pengucapan: "Seperti huruf Y (Ya/Yi/Yu).",
        audio: "/audio/82.yi(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 90,
        huruf_id: 30,
        harkat: "Dhammah",
        tulisan_arab: "يُ",
        tulisan_latin: "yu",
        pengucapan: "Seperti huruf Y (Ya/Yi/Yu).",
        audio: "/audio/83.yu(enhanced).wap",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Harkats", null, {});
  },
};