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
               
