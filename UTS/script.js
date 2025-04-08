// JavaScript untuk tombol "Kembali ke Beranda"
document.querySelector('.back-to-home').addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah perilaku default anchor
    window.scrollTo(0, 0); // Menggerakkan halaman ke atas (ke bagian Beranda)
});