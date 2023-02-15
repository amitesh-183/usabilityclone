const toggle_btn = document.getElementById("nav-toggle");

const nav_links = document.getElementById("nav-links");

toggle_btn.addEventListener("click", () => {
  nav_links.classList.toggle("active");
});
