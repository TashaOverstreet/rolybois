// header.js
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("site-header").innerHTML = `
    <div class="fixed-nav">
      <div class="fixed-nav-inner">

        <div class="hamburger" onclick="toggleMenu()">
          <i class="fas fa-bars"></i>
        </div>

        <nav class="fixed-nav-links" id="navMenu">
          <a href="index.html">Home</a>
          <a href="gallery.html">Gallery</a>
          <a href="care.html">Care Sheets</a>
          <a href="about.html">About</a>
          <a href="https://rolybois.creator-spring.com/">Merch</a>
        </nav>

      </div>
    </div>
  `;
});
