// MENU HAMBURGUESA
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// VER MÁS ARTÍCULOS
const verMasBtn = document.getElementById('ver-mas');
const articulos = document.querySelectorAll('.articulo-card');

let mostrados = 2;

const actualizarArticulos = () => {
    articulos.forEach((a, i) => {
        a.style.display = i < mostrados ? 'block' : 'none';
    });
};

verMasBtn.addEventListener('click', () => {
    mostrados += 2;
    actualizarArticulos();
});

actualizarArticulos();
