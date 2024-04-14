document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
  
    // Ocultar todas las secciones excepto la primera al cargar la página
    sections.forEach(function(section, index) {
      if (index !== 0) {
        section.style.display = 'none';
      }
    });
  
    // Función para mostrar la sección seleccionada y ocultar las demás
    function mostrarSeccion(seccionId) {
      sections.forEach(function(section) {
        if (section.id === seccionId) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    }
  
    // Manejar el evento clic en los enlaces de la barra de navegación
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Obtener el ID de la sección
        mostrarSeccion(targetId);
      });
    });
  });
  