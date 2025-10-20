// Fungsi untuk menghasilkan warna acak
function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Ubah background jadi gradient acak
function changeBackgroundColor() {
  const color1 = generateRandomColor();
  const color2 = generateRandomColor();
  document.body.style.background = `linear-gradient(120deg, ${color1}, ${color2})`;
}

// Tampilkan pesan sambutan (tanpa alert)
function showWelcomeMessage() {
  const message = document.getElementById("welcome-message");
  message.style.display = "block";
}

// Jalankan saat halaman selesai dimuat
window.onload = function () {
  changeBackgroundColor();
  showWelcomeMessage();
  setInterval(changeBackgroundColor, 1000);
};
