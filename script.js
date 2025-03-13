document.addEventListener("DOMContentLoaded", function() {
  function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    const weddingDate = new Date('2025-06-20T00:00:00');
    const now = new Date();
    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownElement.textContent = `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para la boda.`;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  document.getElementById("upload").addEventListener("change", function(event) {
    const files = event.target.files;
    const gallery = document.getElementById("gallery");
    for (let file of files) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        gallery.appendChild(img);
      }
      reader.readAsDataURL(file);
    }
  });

  function saveGuest() {
    const name = document.getElementById('guestName').value;
    const guestCount = document.getElementById('guestCount').value;
    const foodPreference = document.getElementById('foodPreference').value;
    const transport = document.getElementById('transport').value;
    
    if (name && guestCount && foodPreference && transport) {
      localStorage.setItem(name, JSON.stringify({ guestCount, foodPreference, transport }));
      alert('Confirmación guardada exitosamente!');
    } else {
      alert('Por favor completa todos los campos.');
    }
  }
  window.saveGuest = saveGuest;
});
