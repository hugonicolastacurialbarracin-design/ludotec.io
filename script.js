// === MENÚ HAMBURGUESA ===
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    const spans = menuToggle.querySelectorAll('span');
    if (mainNav.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// === GENERAR TABLERO DE 9 BOTONES ===
const tableroGrid = document.getElementById('tableroGrid');
const numeroSpan = document.getElementById('numeroSeleccionado');

// Crear los 9 botones (1 al 9)
for (let i = 1; i <= 9; i++) {
    const boton = document.createElement('button');
    boton.className = 'tablero-boton';
    boton.textContent = i;
    boton.dataset.numero = i;

    boton.addEventListener('click', function() {
        // Remover clase 'seleccionado' de todos los botones
        document.querySelectorAll('.tablero-boton').forEach(b => b.classList.remove('seleccionado'));
        // Agregar clase al botón clickeado
        this.classList.add('seleccionado');
        // Mostrar el número en el panel
        numeroSpan.textContent = this.dataset.numero;
    });

    tableroGrid.appendChild(boton);
}

// === EFECTO DE TITULO (opcional) ===
if (window.innerWidth > 768) {
    const title = document.querySelector('.hero-title');
    if (title) {
        title.style.transition = 'color 0.5s';
        setInterval(() => {
            title.style.color = '#f6ad55';
            setTimeout(() => {
                title.style.color = '';
            }, 300);
        }, 3000);
    }
}

// === MANEJO DEL FORMULARIO ===
const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nombre || !email) {
        feedback.textContent = '⚠️ Por favor, completa los campos obligatorios.';
        feedback.style.color = '#e53e3e';
        return;
    }

    feedback.textContent = '✅ ¡Solicitud enviada! En breve nos pondremos en contacto.';
    feedback.style.color = '#38a169';
    contactForm.reset();

    setTimeout(() => {
        feedback.textContent = '';
    }, 5000);
});

// === SCROLL SUAVE ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});