// Cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('a[href^="mailto:"]');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
  
    // Alerta de contacto
    contactLink.addEventListener('click', function() {
      alert('¡Gracias por tu interés en contactar a Gisele Bündchen!');
    });
  
    // Mostrar/ocultar botón scroll arriba
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });
  
    // Función para subir al principio
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  //para galeria
  document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });
  
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  // Animación al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar-minimal');
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  
  // Efecto de carga para las letras del logo
  document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.logo-letter');
    letters.forEach((letter, i) => {
      setTimeout(() => {
        letter.style.opacity = '1';
        letter.style.transform = 'translateY(0)';
      }, 100 * i);
    });
  });

// En tu script.js añade esto para la animación:
document.addEventListener('DOMContentLoaded', function() {
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    const footer = document.querySelector('.footer-minimal');
    if (footer) footerObserver.observe(footer);
  });

