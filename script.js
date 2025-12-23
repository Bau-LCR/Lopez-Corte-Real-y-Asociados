// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
.hero {
  background:
    linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
    url("img/hero.jpg") center/cover no-repeat;
  height: 70vh;
  display: flex;
  align-items: center;
  padding-left: 60px;
  background-attachment: fixed;
}
