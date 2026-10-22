// 1. Fitur AI Study Summarizer (Simulasi Pintar)
const summarizeBtn = document.getElementById('summarizeBtn');
const inputText = document.getElementById('inputText');
const outputResult = document.getElementById('outputResult');

summarizeBtn.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (!text) {
        outputResult.textContent = "⚠️ Mohon masukkan teks materi terlebih dahulu!";
        return;
    }
    
    // Simulasi proses berpikir AI
    outputResult.textContent = "🤖 Sedang menganalisis dan merangkum materi...";
    
    setTimeout(() => {
        // Simulasi hasil rangkuman otomatis berbasis poin
        const words = text.split(' ').length;
        outputResult.innerHTML = `<strong>✨ Rangkuman AI:</strong><br>
        • Total kata dianalisis: ${words} kata.<br>
        • Poin Utama: Materi ini membahas tentang konsep dasar dan implementasi praktis yang relevan untuk pembelajaran sekolah.<br>
        • Kesimpulan: Fokus pada pemahaman inti dan latihan berkala agar materi lebih mudah dikuasai.`;
    }, 1000);
});

// 2. Fitur Pengingat Kegiatan Sekolah (Task Tracker)
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>📌 ${taskText}</span>
        <button style="padding: 0.3rem 0.6rem; font-size: 0.8rem; background: #ef4444;" onclick="this.parentElement.remove()">Selesai</button>
    `;
    
    taskList.appendChild(li);
    taskInput.value = '';
});

// 3. Fitur AI Problem Solver (Pencari Solusi Masalah)
const solveBtn = document.getElementById('solveBtn');
const problemInput = document.getElementById('problemInput');
const solutionResult = document.getElementById('solutionResult');

solveBtn.addEventListener('click', () => {
    const problem = problemInput.value.toLowerCase().trim();
    if (!problem) {
        solutionResult.textContent = "⚠️ Ketikkan kendala atau masalah yang kamu hadapi!";
        return;
    }

    solutionResult.textContent = "🔍 AI sedang mencarikan solusi terbaik...";

    setTimeout(() => {
        let solution = "Pastikan untuk berdiskusi dengan wali kelas atau guru pembimbing terkait kendala tersebut agar mendapat arahan resmi.";
        
        if (problem.includes('izin') || problem.includes('sakit')) {
            solution = "📝 **Solusi:** Buat surat izin tertulis ditandatangani orang tua/wali, serahkan ke piket sekolah atau wali kelas selambat-lambatnya pukul 08.00 pagi.";
        } else if (problem.includes('tugas') || prblem.includes('kelompok')) {
            solution = "🤝 **Solusi:** Gunakan pembagian kerja yang adil (deskripsi tugas jelas) dan manfaatkan platform kolaborasi online seperti Google Docs atau Figma untuk pengerjaan tim.";
        }

        solutionResult.innerHTML = `💡 <strong>Saran Solusi:</strong><br>${solution}`;
    }, 1000);
});
// Variabel untuk melacak mode input aktif ('text' atau 'image')
let activeInputMode = 'text';
let uploadedImageFile = null;

function switchTab(mode) {
    activeInputMode = mode;
    const textTab = document.getElementById('textTabContent');
    const imageTab = document.getElementById('imageTabContent');
    const buttons = document.querySelectorAll('.tab-btn');

    buttons.forEach(btn => btn.classList.remove('active'));

    if (mode === 'text') {
        textTab.style.display = 'block';
        imageTab.style.display = 'none';
        buttons[0].classList.add('active');
    } else {
        textTab.style.display = 'none';
        imageTab.style.display = 'block';
        buttons[1].classList.add('active');
    }
}

// Logika Preview Gambar saat di-upload
const imageInput = document.getElementById('imageInput');
const uploadLabel = document.getElementById('uploadLabel');
const imagePreviewContainer = document.getElementById('imagePreviewContainer');
const imagePreview = document.getElementById('imagePreview');
const removeImageBtn = document.getElementById('removeImageBtn');

imageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        uploadedImageFile = file;
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            uploadLabel.style.display = 'none';
            imagePreviewContainer.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

removeImageBtn.addEventListener('click', () => {
    uploadedImageFile = null;
    imageInput.value = '';
    imagePreview.src = '';
    imagePreviewContainer.style.display = 'none';
    uploadLabel.style.display = 'block';
});

// Modifikasi Logika Tombol Rangkum untuk Mendukung Foto
const summarizeBtn = document.getElementById('summarizeBtn');
const inputText = document.getElementById('inputText');
const outputResult = document.getElementById('outputResult');

summarizeBtn.addEventListener('click', () => {
    if (activeInputMode === 'text') {
        const text = inputText.value.trim();
        if (!text) {
            outputResult.textContent = "⚠️ Mohon masukkan teks materi terlebih dahulu!";
            return;
        }
        
        outputResult.textContent = "🤖 Sedang menganalisis dan merangkum teks...";
        setTimeout(() => {
            const words = text.split(' ').length;
            outputResult.innerHTML = `<strong>✨ Rangkuman AI (Dari Teks):</strong><br>
            • Total kata dianalisis: ${words} kata.<br>
            • Poin Utama: Materi membahas konsep inti yang relevan untuk kebutuhan belajar sekolah.<br>
            • Kesimpulan: Pelajari kembali poin-poin penting di atas secara berkala.`;
        }, 1000);

    } else {
        // Mode Gambar
        if (!uploadedImageFile) {
            outputResult.textContent = "⚠️ Mohon unggah foto catatan terlebih dahulu!";
            return;
        }

        outputResult.textContent = `🔍 AI sedang memindai foto "${uploadedImageFile.name}" (OCR & Vision)...`;
        
        setTimeout(() => {
            outputResult.innerHTML = `<strong>✨ Rangkuman AI (Dari Foto Catatan):</strong><br>
            • Nama File: <em>${uploadedImageFile.name}</em><br>
            • Hasil Ekstraksi Teks: Catatan terbaca dengan jelas (terdeteksi materi ringkas & rumus/poin penting).<br>
            • Poin Utama: Dokumen ini merangkum subjek pembelajaran utama dengan struktur poin.<br>
            • Kesimpulan: Foto berhasil dianalisis. Sangat cocok dijadikan bahan belajar cepat!`;
        }, 1500);
    }
});
    
