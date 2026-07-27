// Ambil elemen yang akan dimanipulasi
const bgImage = document.getElementById('bgImage');
const logo = document.querySelector('.main-logo');

// Berapa pixel jarak scroll maksimal untuk efek ini selesai
// (Misal: setelah scroll 600px, gambar akan full blur dan hilang)
const maxScroll = 600; 

window.addEventListener('scroll', () => {
    // Hitung posisi scroll saat ini
    const scrollY = window.scrollY;

    // Hitung persentase scroll terhadap jarak maksimal (0 sampai 1)
    let scrollFraction = scrollY / maxScroll;

    // Pastikan nilai tidak kurang dari 0 dan tidak lebih dari 1
    if (scrollFraction > 1) scrollFraction = 1;
    if (scrollFraction < 0) scrollFraction = 0;

    // 1. EFEK KABUR (BLUR) MENINGKAT
    // Nilai awal blur di CSS adalah 4px. Kita tambahkan hingga misal total 15px.
    const blurValue = 4 + (scrollFraction * 11); // 4px -> 15px
    bgImage.style.filter = `blur(${blurValue}px)`;

    // 2. EFEK HILANG (OPACITY) MENURUN
    // Semakin di-scroll, opacity turun dari 1 ke 0.
    const opacityValue = 1 - scrollFraction;
    bgImage.style.opacity = opacityValue;

    // 3. EFEK KABUR & HILANG UNTUK LOGO (DISESUAIKAN)
    if (logo) {
        // Logo ngeblur dari 0px hingga 12px saat di-scroll
        const logoBlur = scrollFraction * 12; 
        // Logo memudar dari opacity 1 hingga 0
        const logoOpacity = 1 - scrollFraction; 
        
        logo.style.filter = `blur(${logoBlur}px)`;
        logo.style.opacity = logoOpacity;
    }
});
