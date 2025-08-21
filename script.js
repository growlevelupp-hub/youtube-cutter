function generateClip() {
  const url = document.getElementById("youtubeUrl").value;
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;

  if (!url || !start || !end) {
    alert("Lengkapi semua data!");
    return;
  }

  // ambil videoId dari URL
  const videoId = url.split("v=")[1]?.split("&")[0];
  if (!videoId) {
    alert("URL YouTube tidak valid");
    return;
  }

  // bikin embed link dengan start & end
  const clipUrl = `https://www.youtube.com/embed/${videoId}?start=${start}&end=${end}&autoplay=1`;

  document.getElementById("result").innerHTML = `
    <iframe width="560" height="315" src="${clipUrl}" frameborder="0" allowfullscreen></iframe>
    <br><br>
    <a href="https://shope.ee/affiliate-link-kamu" target="_blank">
      🎁 Cek Produk Rekomendasi
    </a>
  `;
}
