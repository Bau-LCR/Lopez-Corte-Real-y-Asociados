// -------------------------
// MENÚ HAMBURGUESA
// -------------------------
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuToggle.classList.toggle('active');
});

// -------------------------
// FAQ SERVICIOS - MODALES
// -------------------------
const areaCards = document.querySelectorAll('.area-card');
const modalPreguntas = document.getElementById('modal-preguntas');
const modalPreguntasContent = document.getElementById('modal-preguntas-content');
const modalBackButtons = document.querySelectorAll('.modal-back');

areaCards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.dataset.modal;
        const content = document.getElementById(modalId).innerHTML;
        modalPreguntasContent.innerHTML = content;
        modalPreguntas.style.display = 'flex';
    });
});

// Cerrar modales
modalBackButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});

// Cerrar modal si clic fuera del contenido
window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// -------------------------
// ARTÍCULOS - VER MÁS / VER MENOS
// -------------------------
const verMasBtn = document.getElementById('ver-mas-btn');
const verMenosBtn = document.getElementById('ver-menos-btn');
const articuloCards = document.querySelectorAll('.articulos-preview .articulo-card');

let articulosMostrados = 6; // cantidad inicial visible

const actualizarArticulos = () => {
    articuloCards.forEach((card, index) => {
        card.style.display = index < articulosMostrados ? 'block' : 'none';
    });
    verMasBtn.style.display = articulosMostrados >= articuloCards.length ? 'none' : 'inline-block';
    verMenosBtn.style.display = articulosMostrados > 6 ? 'inline-block' : 'none';
};

verMasBtn.addEventListener('click', () => {
    articulosMostrados += 3;
    actualizarArticulos();
});

verMenosBtn.addEventListener('click', () => {
    articulosMostrados -= 3;
    actualizarArticulos();
});

actualizarArticulos();

// -------------------------
// TESTIMONIOS - CAROUSEL
// -------------------------
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

const mostrarTestimonio = index => {
    testimonials.forEach((t, i) => t.classList.toggle('active', i === index));
};

setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    mostrarTestimonio(currentTestimonial);
}, 5000); // cambia cada 5 segundos

