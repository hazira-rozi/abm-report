// =========================================================
// PORTAL ANALISIS HASIL ABM - SMKN 1 SINGKARAK
// Database 23 Peserta & Logika Konselor BK (script.js)
// =========================================================

const DIMENSIONS = [
    { key: 'bahasa', label: 'Penggunaan Bahasa' },
    { key: 'verbal', label: 'Verbal' },
    { key: 'kuantitatif', label: 'Kuantitatif' },
    { key: 'penalaran', label: 'Penalaran' },
    { key: 'spasial', label: 'Spasial' },
    { key: 'mekanik', label: 'Mekanik' },
    { key: 'klerikal', label: 'Klerikal' }
];

const LEVEL_DESCRIPTIONS = {
    bahasa: {
        Baik: "Siswa mudah dan cepat dalam menangkap gagasan dari suatu kalimat atau bacaan serta mengomunikasikan gagasannya menggunakan bahasa baku. Siswa mampu membuat karya tulis dengan menggunakan variasi kata-kata dalam berbagai macam perspektif dan konteks sesuai aturan gramatika kebahasaan. Performa siswa sudah optimal dalam mengerjakan tugas yang berhubungan dengan teks, seperti membuat dan menelaah hasil laporan, mengedit suatu berita, serta membuat karangan tertulis.",
        Sedang: "Siswa mampu menangkap gagasan dari suatu kalimat atau bacaan serta mengomunikasikan gagasannya menggunakan bahasa baku. Siswa menguasai kosa kata sesuai dengan makna di dalam kamus dan memahami aturan gramatika kebahasaan, namun belum mampu menggunakan variasi kata-kata dalam berbagai macam perspektif dan konteks. Performa siswa cukup memadai dalam mengerjakan tugas yang berhubungan dengan teks, seperti membuat dan menelaah hasil laporan, mengedit suatu berita, serta membuat karangan tertulis.",
        Kurang: "Siswa belum mampu menangkap gagasan dari suatu kalimat atau bacaan, serta memiliki keterbatasan dalam memahami aturan berbahasa secara formal. Penguasaan kosa kata sesuai dengan makna baku juga masih terbatas. Performa siswa kurang memadai dalam mengerjakan tugas yang berhubungan dengan teks, seperti membuat dan menelaah hasil laporan, mengedit suatu berita, serta membuat karangan tertulis."
    },
    verbal: {
        Baik: "Siswa mampu memahami konsep-konsep berbentuk verbal atau teks yang bersifat abstrak, kompleks, dan implisit. Siswa menguasai logika kebahasaan dan tata bahasa formal serta memahami wacana dalam berbagai macam konteks. Performa siswa sudah optimal dalam menghadapi aktivitas yang berhubungan dengan informasi atau gagasan yang diekspresikan secara verbal, misalnya memahami konsep suatu gagasan, menjabarkan konsep ke dalam sesuatu yang bersifat operasional, mengategorikan kata berdasarkan persamaan dan perbedaannya.",
        Sedang: "Siswa mampu memahami konsep-konsep berbentuk verbal atau teks pada situasi umum, konkret, dan sederhana. Meskipun memiliki perbendaharaan kata yang cukup banyak, pemahaman siswa pada suatu wacana masih terbatas pada situasi umum. Performa siswa sudah cukup memadai dalam menghadapi aktivitas yang berhubungan dengan informasi atau gagasan yang diekspresikan secara verbal, misalnya memahami konsep suatu gagasan, menjabarkan konsep ke dalam sesuatu yang bersifat operasional, mengategorikan kata berdasarkan persamaan dan perbedaannya.",
        Kurang: "Siswa masih mengalami kendala dalam memahami konsep-konsep berbentuk verbal atau teks. Perkembangan aspek penguasaan logika berbahasa dan aturan tata bahasa masih membutuhkan stimulasi lebih lanjut. Performa siswa belum memadai dalam menghadapi aktivitas yang berhubungan dengan informasi atau gagasan yang diekspresikan secara verbal, misalnya memahami konsep suatu gagasan, menjabarkan konsep ke dalam sesuatu yang bersifat operasional, mengategorikan kata berdasarkan persamaan dan perbedaannya."
    },
    kuantitatif: {
        Baik: "Siswa mampu memecahkan masalah yang melibatkan informasi dalam bentuk numerik atau kuantitatif dengan efektif. Siswa mampu menentukan strategi secara spontan dan memahami inti permasalahan dengan cepat dan efisien. Performa siswa sudah optimal ketika dihadapkan pada aktivitas seperti menggunakan operasi bilangan, mengestimasi, memprediksi, dan menentukan hubungan dari informasi-informasi berupa angka dan simbol matematika.",
        Sedang: "Siswa mampu menyelesaikan suatu masalah yang melibatkan informasi dalam bentuk numerik atau kuantitatif, namun masih mengalami kesulitan pada permasalahan yang lebih kompleks dengan penyajian yang lebih kontekstual dan abstrak. Siswa memahami pola hubungan antar bilangan atau simbol serta mengenali prinsip matematika dasar yang sesuai dalam penyelesaian masalah. Performa siswa cukup memadai ketika dihadapkan pada aktivitas seperti menggunakan operasi bilangan, mengestimasi, memprediksi, dan menentukan hubungan dari informasi-informasi berupa angka dan simbol matematika.",
        Kurang: "Siswa masih mengalami kendala dalam menyelesaikan suatu masalah yang melibatkan informasi dalam bentuk numerik atau kuantitatif. Siswa kesulitan dalam menemukan strategi yang tepat untuk menyelesaikan masalah yang berkaitan dengan angka, simbol-simbol dan representasinya secara matematis. Performa siswa belum memadai ketika dihadapkan pada aktivitas seperti menggunakan operasi bilangan, mengestimasi, memprediksi, dan menentukan hubungan dari informasi-informasi berupa angka dan simbol matematika."
    },
    penalaran: {
        Baik: "Siswa mampu menemukan prinsip yang melandasi hubungan antar konsep/informasi yang bersifat kompleks. Siswa dapat memanfaatkan temuan tersebut untuk mengatasi masalah-masalah baru. Performa siswa sudah optimal dalam berpikir logis, mengambil keputusan yang tepat, dan membuat pertimbangan dengan menggunakan informasi yang lebih komprehensif.",
        Sedang: "Siswa mampu menemukan prinsip yang melandasi hubungan antar konsep/informasi yang bersifat sederhana dan mampu menerapkannya untuk mengatasi masalah yang lain. Performa siswa cukup memadai dalam berpikir logis, mengambil keputusan yang tepat, dan membuat pertimbangan menggunakan informasi yang lebih komprehensif.",
        Kurang: "Siswa masih mengalami kendala dalam memahami hubungan antar konsep/informasi dan mengatasi masalah-masalah yang kurang familier atau belum ada pengalaman penyelesaian sebelumnya. Siswa belum mampu menerapkan atau menggeneralisasikan sebuah konsep ke dalam situasi yang berbeda. Performa siswa belum memadai dalam mengambil keputusan yang tepat dan membuat pertimbangan menggunakan informasi yang lebih komprehensif."
    },
    spasial: {
        Baik: "Siswa mampu memahami konsep dasar dari informasi berbentuk gambar dengan mengenali keunikan karakteristiknya. Proses pemecahan masalah terkait informasi berbentuk gambar dilakukan dengan membayangkan, merekam, dan memahami perubahan bentuk suatu gambar. Secara umum, performa siswa sudah optimal ketika melakukan pekerjaan yang melibatkan gambar misalnya mengamati peta, menelaah bangun ruang dari berbagai perspektif, menentukan titik koordinat, atau membuat sketsa gambar 3 dimensi.",
        Sedang: "Siswa mampu memahami informasi berbentuk gambar yang bersifat sederhana. Proses pemecahan masalah terkait informasi berbentuk gambar masih sebatas mengenali persamaan, perbedaan, dan pola dari dua gambar bidang/ruang. Secara umum, performa siswa cukup memadai ketika melakukan pekerjaan yang melibatkan gambar sederhana.",
        Kurang: "Siswa mampu memahami informasi berbentuk gambar yang bersifat sederhana. Proses pemecahan masalah terkait informasi berbentuk gambar masih sebatas mengenali persamaan, perbedaan, dan pola dari dua gambar bidang/ruang. Secara umum, performa siswa belum memadai ketika melakukan pekerjaan yang melibatkan gambar, misalnya mengamati peta, menelaah bangun ruang dari berbagai perspektif, menentukan titik koordinat, atau membuat sketsa gambar 3 dimensi."
    },
    mekanik: {
        Baik: "Siswa menguasai proses penalaran pada prinsip kerja mekanika dasar sehingga mampu memahami cara kerja peralatan yang lebih kompleks. Siswa memahami penggabungan beberapa peralatan dengan cara kerja dan prinsip berbeda serta mampu memprediksi apa yang perlu dilakukan agar pekerjaan menjadi efektif dan efisien. Performa siswa sudah optimal ketika dihadapkan pada tugas-tugas yang berkaitan dengan peralatan seperti mesin atau perkakas, melakukan perakitan, bongkar pasang peralatan, atau memasang komponen suatu barang.",
        Sedang: "Siswa mampu memahami fungsi dan cara kerja peralatan sederhana yang menggunakan prinsip-prinsip mekanika dasar. Siswa dapat mengatasi suatu masalah mekanika secara efektif berdasarkan penalaran yang digunakan. Namun, siswa masih sebatas memahami peralatan sesuai dengan fungsi utamanya dan mengalami kesulitan ketika diberikan peralatan berstruktur kompleks yang dimanfaatkan untuk fungsi yang baru. Performa siswa cukup terampil ketika dihadapkan pada tugas-tugas yang berkaitan dengan peralatan seperti mesin atau perkakas, melakukan perakitan, bongkar pasang peralatan, atau memasang komponen suatu barang.",
        Kurang: "Siswa belum memahami fungsi dan cara kerja peralatan sederhana yang menggunakan prinsip mekanika dasar. Siswa sudah mampu mengoperasikan peralatan-peralatan tersebut, tetapi sulit memahami komponen-komponen peralatan, hubungan dan fungsi komponen yang ada dalam peralatan tersebut, dan tidak memahami prinsip kerjanya dengan benar. Performa siswa kurang terampil ketika dihadapkan pada tugas-tugas yang berkaitan dengan peralatan seperti mesin atau perkakas, melakukan perakitan, bongkar pasang peralatan, atau memasang komponen suatu barang."
    },
    klerikal: {
        Baik: "Siswa mampu menyelesaikan tugas-tugas kompleks yang membutuhkan kecepatan, ketelitian, konsistensi, dan daya ingat. Siswa mampu melakukan koordinasi antara perhatian dan tindakan dalam menyelesaikan tugas yang lebih banyak dan dengan waktu yang terbatas sehingga kuantitas dan kualitas hasil tugas sangat optimal. Performa siswa sudah optimal ketika melakukan pekerjaan sederhana berulang seperti menyortir barang, mengetik, dan mengumpulkan sesuatu yang berulang-ulang dengan cepat.",
        Sedang: "Siswa mampu menyelesaikan tugas-tugas sederhana dan berulang yang membutuhkan kecepatan, ketelitian, konsistensi, dan daya ingat. Siswa mampu melakukan koordinasi antara perhatian dan tindakan namun cenderung mengalami kesulitan dalam menyelesaikan tugas yang lebih kompleks, banyak, dan waktu yang terbatas sehingga kuantitas dan kualitas hasil tugas kurang optimal. Performa siswa cukup terampil ketika melakukan tugas sederhana berulang seperti menyortir barang, mengetik, dan mengumpulkan sesuatu yang berulang-ulang dengan cepat.",
        Kurang: "Siswa masih mengalami kendala ketika menyelesaikan tugas-tugas sederhana dan berulang yang membutuhkan kecepatan, ketelitian, konsistensi, dan daya ingat. Siswa belum mampu melakukan koordinasi antara perhatian dan tindakan sehingga kuantitas dan kualitas hasil tugas kurang optimal. Performa siswa kurang terampil ketika melakukan tugas sederhana berulang seperti menyortir barang, mengetik, dan mengumpulkan sesuatu yang berulang-ulang dengan cepat."
    }
};

// Database Lengkap 23 Siswa SMKN 1 Singkarak (Uji Coba 17 November 2026)
const STUDENTS_DATA = [
    {
        id: 1,
        nama: "QHATRUN NADA ARDIYA",
        nisn: "0093094194",
        kelas: "XI AKUNTANSI",
        top3: ["Penggunaan Bahasa", "Penalaran", "Kuantitatif"],
        scores: { bahasa: 20, penalaran: 13, kuantitatif: 11, spasial: 6, verbal: 5, klerikal: 4, mekanik: 0 }
    },
    {
        id: 2,
        nama: "Ahmad Akbar",
        nisn: "0066652806",
        kelas: "XI RPL",
        top3: ["Spasial", "Kuantitatif", "Verbal"],
        scores: { spasial: 12, kuantitatif: 7, verbal: 5, klerikal: 4, penalaran: 0, bahasa: 0, mekanik: 0 }
    },
    {
        id: 3,
        nama: "Yuni Salma",
        nisn: "0105491666",
        kelas: "XI AKUNTANSI",
        top3: ["Verbal", "Mekanik", "Spasial"],
        scores: { verbal: 10, mekanik: 10, spasial: 6, kuantitatif: 4, klerikal: 2, penalaran: 0, bahasa: 0 }
    },
    {
        id: 4,
        nama: "Rafa Rhohman Wahid",
        nisn: "0093211360",
        kelas: "XI MP",
        top3: ["Penggunaan Bahasa", "Spasial", "Verbal"],
        scores: { bahasa: 10, spasial: 6, verbal: 5, klerikal: 4, penalaran: 0, kuantitatif: 0, mekanik: 0 }
    },
    {
        id: 5,
        nama: "Dea Jelita Sari",
        nisn: "0103154328",
        kelas: "XI AKUNTANSI",
        top3: ["Penggunaan Bahasa", "Kuantitatif", "Verbal"],
        scores: { bahasa: 20, kuantitatif: 14, verbal: 10, spasial: 6, klerikal: 4, penalaran: 0, mekanik: 0 }
    },
    {
        id: 6,
        nama: "FERDI APRIANTO",
        nisn: "0095710021",
        kelas: "XI ULW",
        top3: ["Penalaran", "Penggunaan Bahasa", "Verbal"],
        scores: { penalaran: 25, bahasa: 20, verbal: 15, spasial: 15, kuantitatif: 11, mekanik: 10, klerikal: 2 }
    },
    {
        id: 7,
        nama: "Viona Aprilita",
        nisn: "0107829853",
        kelas: "XI RPL",
        top3: ["Penggunaan Bahasa", "Penalaran", "Kuantitatif"],
        scores: { bahasa: 20, penalaran: 13, kuantitatif: 11, mekanik: 10, spasial: 9, klerikal: 6, verbal: 5 }
    },
    {
        id: 8,
        nama: "Faizah Mauna Putri",
        nisn: "0093455199",
        kelas: "XI MP",
        top3: ["Penalaran", "Kuantitatif", "Penggunaan Bahasa"],
        scores: { penalaran: 13, kuantitatif: 11, bahasa: 10, spasial: 9, verbal: 5, klerikal: 4, mekanik: 0 }
    },
    {
        id: 9,
        nama: "Bagas Aji Rianto",
        nisn: "0102220816",
        kelas: "XI MP",
        top3: ["Mekanik", "Kuantitatif", "Spasial"],
        scores: { mekanik: 20, kuantitatif: 11, spasial: 6, verbal: 5, klerikal: 4, penalaran: 0, bahasa: 0 }
    },
    {
        id: 10,
        nama: "Marsel Maulana",
        nisn: "0097566500",
        kelas: "XI ULW",
        top3: ["Penalaran", "Verbal", "Penggunaan Bahasa"],
        scores: { penalaran: 25, verbal: 20, bahasa: 20, spasial: 18, kuantitatif: 14, klerikal: 6, mekanik: 0 }
    },
    {
        id: 11,
        nama: "Ilham Geraldo",
        nisn: "0071732491",
        kelas: "XI RPL",
        top3: ["Penalaran", "Verbal", "Penggunaan Bahasa"],
        scores: { penalaran: 25, verbal: 20, bahasa: 20, mekanik: 10, kuantitatif: 7, spasial: 6, klerikal: 2 }
    },
    {
        id: 12,
        nama: "Aditia Febriansyah",
        nisn: "0084726968",
        kelas: "XI RPL",
        top3: ["Mekanik", "Penggunaan Bahasa", "Kuantitatif"],
        scores: { mekanik: 20, bahasa: 10, kuantitatif: 7, verbal: 5, spasial: 3, klerikal: 2, penalaran: 0 }
    },
    {
        id: 13,
        nama: "Dafa Kurniawan",
        nisn: "0101283367",
        kelas: "XI RPL",
        top3: ["Penalaran", "Kuantitatif", "Mekanik"],
        scores: { penalaran: 25, kuantitatif: 11, mekanik: 10, spasial: 6, klerikal: 2, verbal: 0, bahasa: 0 }
    },
    {
        id: 14,
        nama: "Muhamad Faisal",
        nisn: "0094004833",
        kelas: "XI RPL",
        top3: ["Kuantitatif", "Mekanik", "Spasial"],
        scores: { kuantitatif: 21, mekanik: 20, spasial: 15, penalaran: 13, bahasa: 10, klerikal: 8, verbal: 0 }
    },
    {
        id: 15,
        nama: "ALLFREDO DISTIFANO",
        nisn: "0106937636",
        kelas: "XI RPL",
        top3: ["Penggunaan Bahasa", "Verbal", "Kuantitatif"],
        scores: { bahasa: 20, verbal: 15, kuantitatif: 14, penalaran: 13, mekanik: 10, spasial: 9, klerikal: 4 }
    },
    {
        id: 16,
        nama: "Cinta Gustina Mahendra",
        nisn: "0082567882",
        kelas: "XI MP",
        top3: ["Penalaran", "Verbal", "Mekanik"],
        scores: { penalaran: 13, verbal: 10, mekanik: 10, spasial: 9, kuantitatif: 4, klerikal: 4, bahasa: 0 }
    },
    {
        id: 17,
        nama: "YELSI RAHMAYUNI",
        nisn: "0109183097",
        kelas: "XI AKUNTANSI",
        top3: ["Penalaran", "Mekanik", "Spasial"],
        scores: { penalaran: 13, mekanik: 10, spasial: 6, kuantitatif: 4, klerikal: 2, verbal: 0, bahasa: 0 }
    },
    {
        id: 18,
        nama: "Muhammad Dzauqi Lazatul Iman",
        nisn: "0105017624",
        kelas: "XI ULW",
        top3: ["Mekanik", "Verbal", "Spasial"],
        scores: { mekanik: 20, verbal: 15, spasial: 15, kuantitatif: 7, klerikal: 4, penalaran: 0, bahasa: 0 }
    },
    {
        id: 19,
        nama: "JIHAN FALYA AZHAR",
        nisn: "0107000987",
        kelas: "XI AKUNTANSI",
        top3: ["Penalaran", "Verbal", "Penggunaan Bahasa"],
        scores: { penalaran: 25, verbal: 20, bahasa: 20, mekanik: 20, spasial: 18, kuantitatif: 14, klerikal: 8 }
    },
    {
        id: 20,
        nama: "Daratul Aliyah",
        nisn: "0095722202",
        kelas: "XI AKUNTANSI",
        top3: ["Kuantitatif", "Penalaran", "Spasial"],
        scores: { kuantitatif: 14, penalaran: 13, spasial: 12, bahasa: 10, klerikal: 6, verbal: 5, mekanik: 0 }
    },
    {
        id: 21,
        nama: "Renita Afrilia",
        nisn: "0101424129",
        kelas: "XI MP",
        top3: ["Mekanik", "Verbal", "Kuantitatif"],
        scores: { mekanik: 10, verbal: 5, kuantitatif: 4, spasial: 3, klerikal: 2, penalaran: 0, bahasa: 0 }
    },
    {
        id: 22,
        nama: "Ferdyansyah Ashari",
        nisn: "0103288460",
        kelas: "XI AKUNTANSI",
        top3: ["Penggunaan Bahasa", "Kuantitatif", "Spasial"],
        scores: { bahasa: 20, kuantitatif: 14, spasial: 12, mekanik: 10, klerikal: 4, penalaran: 0, verbal: 0 }
    },
    {
        id: 23,
        nama: "ALFARISHI RUDVI MUARLIN",
        nisn: "0091748867",
        kelas: "XI RPL",
        top3: ["Penalaran", "Verbal", "Spasial"],
        scores: { penalaran: 25, verbal: 15, spasial: 15, mekanik: 10, kuantitatif: 7, bahasa: 0, klerikal: 0 }
    }
];

// Application State
let currentClassFilter = 'ALL';
let searchQuery = '';
let isCounselorMode = false;
let selectedStudent = null;
let currentActiveStudent = null;
let radarChartInstance = null;

// Score Level Evaluator (Aligned with BPPP Official Descriptors)
function getScoreLevel(dimKey, score) {
    if (dimKey === 'penalaran') {
        if (score >= 20) return 'Baik';
        if (score >= 10) return 'Sedang';
        return 'Kurang';
    }
    if (dimKey === 'spasial') {
        if (score >= 12) return 'Baik';
        if (score >= 8) return 'Sedang';
        return 'Kurang';
    }
    if (dimKey === 'klerikal') {
        if (score >= 8) return 'Baik';
        if (score >= 4) return 'Sedang';
        return 'Kurang';
    }
    // bahasa, verbal, kuantitatif, mekanik
    if (score >= 20) return 'Baik';
    if (score >= 10) return 'Sedang';
    return 'Kurang';
}

// Counselor Recommendations by Major & Top Dimensions
function generateCounselorInsight(student) {
    const s = student.scores;
    const majorNotes = {
        "XI RPL": "Kompetensi Rekayasa Perangkat Lunak sangat membutuhkan kombinasi Penalaran Logis, Kuantitatif, serta Ketelitian Klerikal untuk debugging kode.",
        "XI AKUNTANSI": "Kompetensi Akuntansi menuntut ketajaman Kuantitatif (numerik) dan Ketelitian Klerikal (akurasi pencatatan transaksi & neraca).",
        "XI MP": "Kompetensi Manajemen Perkantoran mengandalkan Penggunaan Bahasa baku, komunikasi Verbal, serta Klerikal untuk tata kelola arsip & korespondensi.",
        "XI ULW": "Kompetensi Usaha Layanan Wisata bertumpu pada komunikasi Verbal & Bahasa yang persuasif, serta pemahaman Spasial untuk pemetaan rute/destinasi."
    };

    const careers = [];
    if (s.penalaran >= 13 || s.kuantitatif >= 14) careers.push("Analis Sistem / Data", "Programmer / Developer", "Akuntan / Auditor");
    if (s.bahasa >= 15 || s.verbal >= 15) careers.push("Public Relations", "Tour Planner / Guide", "Sekretaris Eksekutif", "Content Strategist");
    if (s.mekanik >= 15 || s.spasial >= 12) careers.push("UI/UX & Desain Grafis", "Teknisi Jaringan / Hardware", "Arsitek Sistem");
    if (careers.length === 0) careers.push("Administrasi Perkantoran", "Operator Layanan Digital", "Staf Operasional");

    let targetTip = "";
    if (s.penalaran === 0 || s.bahasa === 0 || s.kuantitatif === 0) {
        targetTip = "Terdeteksi skor 0 pada beberapa subtes uji coba — kemungkinan besar karena kehabisan waktu atau belum terbiasa dengan pola soal. Pada ABM Utama minggu depan, kelola manajemen waktu per subtes (jangan terpaku pada satu soal sulit).";
    } else {
        targetTip = "Pola pengerjaan sudah stabil di seluruh subtes. Fokus persiapan H-7 adalah meningkatkan kecepatan & akurasi pada subtes Klerikal serta pendalaman soal cerita Kuantitatif.";
    }

    return {
        majorContext: majorNotes[student.kelas] || "",
        targetTip,
        careers: [...new Set(careers)].slice(0, 5)
    };
}

// Navigation Functions
function switchView(viewId) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
    switchView('view-home');
}

function openSession(type) {
    if (type === 'trial') {
        renderStudentList();
        switchView('view-list');
    } else {
        document.getElementById('modal-official').classList.add('open');
    }
}

function closeOfficialModal() {
    document.getElementById('modal-official').classList.remove('open');
}

const COUNSELOR_ACCESS_CODE = "10307970";

// Toggle Counselor Mode (Requires PIN to enable, direct click to disable)
function toggleCounselorMode() {
    if (!isCounselorMode) {
        const input = document.getElementById('counselorPinInput');
        const err = document.getElementById('counselorPinError');
        input.value = '';
        err.style.display = 'none';
        document.getElementById('modal-counselor').classList.add('open');
        setTimeout(() => input.focus(), 100);
        return;
    }

    // Turn OFF Counselor Mode
    setCounselorState(false);
}

function closeCounselorModal() {
    document.getElementById('modal-counselor').classList.remove('open');
}

function verifyCounselorPin(e) {
    if (e) e.preventDefault();
    const entered = document.getElementById('counselorPinInput').value.trim();
    if (entered === COUNSELOR_ACCESS_CODE) {
        closeCounselorModal();
        setCounselorState(true);
    } else {
        const err = document.getElementById('counselorPinError');
        err.style.display = 'block';
        err.textContent = 'Kode akses konselor salah. Silakan coba kembali.';
    }
}

function setCounselorState(active) {
    isCounselorMode = active;
    const toggleBtn = document.getElementById('counselorToggleBtn');
    const toggleLabel = document.getElementById('counselorToggleText');
    const banner = document.getElementById('privacyBanner');

    if (isCounselorMode) {
        toggleBtn.classList.add('active');
        toggleLabel.textContent = 'Mode Konselor: AKTIF';
        if (banner) {
            banner.classList.add('unlocked');
            banner.innerHTML = '<strong>🔓 Mode Konselor BK Aktif:</strong> Verifikasi NISN dilewati. Klik nama siswa mana pun untuk langsung membuka laporan analisis.';
        }
    } else {
        toggleBtn.classList.remove('active');
        toggleLabel.textContent = 'Mode Konselor: OFF';
        if (banner) {
            banner.classList.remove('unlocked');
            banner.innerHTML = '<strong>🔒 Perlindungan Privasi Siswa:</strong> Klik nama Anda pada daftar di bawah, lalu masukkan <strong>10 digit NISN</strong> untuk membuka hasil analisis pribadi.';
        }
    }
    renderStudentList();
}

// Filter & Search List
function setClassFilter(cls, btnEl) {
    currentClassFilter = cls;
    document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
    renderStudentList();
}

function handleSearch(val) {
    searchQuery = val.toLowerCase().trim();
    renderStudentList();
}

function renderStudentList() {
    const grid = document.getElementById('studentGrid');
    const filtered = STUDENTS_DATA.filter(st => {
        const matchClass = currentClassFilter === 'ALL' || st.kelas === currentClassFilter;
        const matchName = st.nama.toLowerCase().includes(searchQuery) || st.kelas.toLowerCase().includes(searchQuery);
        return matchClass && matchName;
    });

    document.getElementById('countLabel').textContent = `Menampilkan ${filtered.length} dari ${STUDENTS_DATA.length} peserta`;

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 2rem; color: var(--muted);">Tidak ada nama siswa yang cocok dengan pencarian "${searchQuery}".</div>`;
        return;
    }

    grid.innerHTML = filtered.map(st => `
        <div class="student-card" onclick="handleStudentClick(${st.id})">
            <div class="student-info">
                <div class="student-num">${st.id}</div>
                <div style="min-width:0;">
                    <div class="student-name" title="${st.nama}">${st.nama}</div>
                    <div class="student-class">${st.kelas}</div>
                </div>
            </div>
            <span class="lock-badge">${isCounselorMode ? 'Buka →' : '🔒 NISN'}</span>
        </div>
    `).join('');
}

// NISN Verification Modal
function handleStudentClick(studentId) {
    const student = STUDENTS_DATA.find(s => s.id === studentId);
    if (!student) return;

    if (isCounselorMode) {
        openReport(student);
        return;
    }

    selectedStudent = student;
    document.getElementById('modalStudentName').textContent = student.nama;
    document.getElementById('modalStudentClass').textContent = `${student.kelas} • SMKN 1 Singkarak`;
    const input = document.getElementById('nisnInput');
    input.value = '';
    document.getElementById('nisnError').style.display = 'none';
    document.getElementById('modal-nisn').classList.add('open');
    setTimeout(() => input.focus(), 100);
}

function closeNisnModal() {
    document.getElementById('modal-nisn').classList.remove('open');
    selectedStudent = null;
}

function verifyNisn(e) {
    if (e) e.preventDefault();
    if (!selectedStudent) return;

    const entered = document.getElementById('nisnInput').value.trim();
    if (entered === selectedStudent.nisn) {
        const target = selectedStudent;
        closeNisnModal();
        openReport(target);
    } else {
        const err = document.getElementById('nisnError');
        err.style.display = 'block';
        err.textContent = 'NISN tidak sesuai dengan data peserta. Periksa kembali kartu pelajar Anda.';
    }
}

// Open Student Detailed Report
function openReport(student) {
    currentActiveStudent = student;
    document.getElementById('repName').textContent = student.nama;
    document.getElementById('repNisn').textContent = `NISN: ${student.nisn}`;
    document.getElementById('repClass').textContent = `Kelas: ${student.kelas}`;

    // Top 3 Cards
    const top3Container = document.getElementById('top3Container');
    top3Container.innerHTML = student.top3.map((dimName, idx) => {
        const dimObj = DIMENSIONS.find(d => d.label.toLowerCase() === dimName.toLowerCase());
        const scoreVal = dimObj ? student.scores[dimObj.key] : 0;
        return `
            <div class="top-card rank-${idx + 1}">
                <div class="rank-label">Bakat Terbaik #${idx + 1}</div>
                <div class="top-dim-name">${dimName}</div>
                <div class="top-dim-score">${scoreVal} <span style="font-size:0.85rem; color:var(--muted); font-weight:600;">/ 25</span></div>
            </div>
        `;
    }).join('');

    // Counselor Analysis
    const insight = generateCounselorInsight(student);
    document.getElementById('counselorMajorNote').textContent = insight.majorContext;
    document.getElementById('counselorTargetTip').textContent = insight.targetTip;
    document.getElementById('careerTags').innerHTML = insight.careers.map(c => `<span class="career-tag">${c}</span>`).join('');

    // 7 Dimensions Breakdown
    const dimGrid = document.getElementById('dimDetailGrid');
    dimGrid.innerHTML = DIMENSIONS.map(d => {
        const val = student.scores[d.key];
        const level = getScoreLevel(d.key, val);
        const badgeClass = level === 'Baik' ? 'lvl-baik' : (level === 'Sedang' ? 'lvl-sedang' : 'lvl-kurang');
        const barColor = level === 'Baik' ? '#059669' : (level === 'Sedang' ? '#d97706' : '#dc2626');
        const pct = Math.min(100, Math.round((val / 25) * 100));

        return `
            <div class="dim-item">
                <div class="dim-item-head">
                    <span class="dim-item-title">${d.label}</span>
                    <div style="display:flex; align-items:center; gap:0.5rem;">
                        <strong>${val}</strong>
                        <span class="badge-level ${badgeClass}">${level}</span>
                    </div>
                </div>
                <div class="progress-track">
                    <div class="progress-fill" style="width:${pct}%; background:${barColor};"></div>
                </div>
                <p class="dim-desc-text">${LEVEL_DESCRIPTIONS[d.key][level]}</p>
            </div>
        `;
    }).join('');

    // Setup Simulator Sliders
    setupSimulator(student);

    // Render Radar Chart
    renderRadarChart(student, student.scores);

    switchView('view-report');
}

function setupSimulator(student) {
    const simGrid = document.getElementById('simControls');
    simGrid.innerHTML = DIMENSIONS.map(d => {
        const baseVal = student.scores[d.key];
        return `
            <div class="sim-control">
                <label>
                    <span>${d.label}</span>
                    <span id="sim-val-${d.key}" style="color:var(--accent);">${baseVal}</span>
                </label>
                <input type="range" min="0" max="25" value="${baseVal}"
                       oninput="updateSimulation('${d.key}', this.value)">
            </div>
        `;
    }).join('');
}

function updateSimulation(changedKey, newVal) {
    document.getElementById(`sim-val-${changedKey}`).textContent = newVal;
    const targetScores = {};
    DIMENSIONS.forEach(d => {
        const el = document.getElementById(`sim-val-${d.key}`);
        targetScores[d.key] = parseInt(el.textContent, 10) || 0;
    });
    renderRadarChart(currentActiveStudent, targetScores);
}

function resetSimulation() {
    if (!currentActiveStudent) return;
    setupSimulator(currentActiveStudent);
    renderRadarChart(currentActiveStudent, currentActiveStudent.scores);
}

function renderRadarChart(student, targetScores) {
    const ctx = document.getElementById('abmRadarChart').getContext('2d');
    const labels = DIMENSIONS.map(d => d.label);
    const baseData = DIMENSIONS.map(d => student.scores[d.key]);
    const simData = DIMENSIONS.map(d => targetScores[d.key]);

    if (radarChartInstance) {
        radarChartInstance.destroy();
    }

    const datasets = [
        {
            label: 'Uji Coba (17 Nov 2026)',
            data: baseData,
            backgroundColor: 'rgba(2, 132, 199, 0.22)',
            borderColor: '#0284c7',
            pointBackgroundColor: '#0284c7',
            borderWidth: 2
        }
    ];

    const hasDiff = baseData.some((v, i) => v !== simData[i]);
    if (hasDiff) {
        datasets.push({
            label: 'Target ABM Utama (H+7)',
            data: simData,
            backgroundColor: 'rgba(16, 185, 129, 0.20)',
            borderColor: '#059669',
            pointBackgroundColor: '#059669',
            borderDash: [5, 5],
            borderWidth: 2
        });
    }

    radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    min: 0,
                    max: 25,
                    ticks: { stepSize: 5, backdropColor: 'transparent', font: { size: 10 } },
                    pointLabels: { font: { size: 11, weight: '600' }, color: '#1e293b' }
                }
            },
            plugins: {
                legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } }
            }
        }
    });
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderStudentList();
});