
document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('a[href^="mailto:"]');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  
  
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

//  la animacion
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

//biografia
document.addEventListener('DOMContentLoaded', function() {
  // Efecto de carga para las imágenes
  const images = document.querySelectorAll('.bio-image');
  
  images.forEach(img => {
      // Añadir efecto de carga suave
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.5s ease';
      
      // Cargar imagen y luego mostrarla
      if (img.complete) {
          fadeInImage(img);
      } else {
          img.addEventListener('load', () => fadeInImage(img));
      }
  });
  
  function fadeInImage(image) {
      image.style.opacity = '1';
  }
  
  // Efecto de scroll suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  
  // Efecto de parallas para las imágenes
  window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      const images = document.querySelectorAll('.bio-image');
      
      images.forEach((img, index) => {
          // Aplicar un efecto de parallax diferente a cada imagen
          const speed = 0.1 + (index * 0.05);
          const yPos = -(scrollPosition * speed);
          img.style.transform = `translateY(${yPos}px) scale(${1 + (speed * 0.1)})`;
      });
  });
});
//biografia
document.addEventListener('DOMContentLoaded', function() {
  // Efecto de carga para las imágenes
  const images = document.querySelectorAll('.bio-image');
  
  images.forEach(img => {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.5s ease';
      
      if (img.complete) {
          fadeInImage(img);
      } else {
          img.addEventListener('load', () => fadeInImage(img));
      }
  });
  
  function fadeInImage(image) {
      image.style.opacity = '1';
  }
  
  // Efecto de scroll para el navbar
  window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar-minimal');
      if (window.scrollY > 50) {
          navbar.style.background = 'rgba(0, 0, 0, 0.95)';
          navbar.style.padding = '15px 0';
      } else {
          navbar.style.background = 'rgba(0, 0, 0, 0.9)';
          navbar.style.padding = '25px 0';
      }
  });
  
  // Botón de scroll to top
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.id = 'scrollTopBtn';
  scrollTopBtn.innerHTML = '↑';
  scrollTopBtn.title = 'Volver arriba';
  document.body.appendChild(scrollTopBtn);
  
  window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
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

