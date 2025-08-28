document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar la visualización de las biografías
    function toggleBio(element) {
        const bio = element.querySelector('.member-bio');
        const isExpanded = bio.classList.contains('expanded');
        
        // Cerrar todas las biografías abiertas
        document.querySelectorAll('.member-bio').forEach(el => {
            el.classList.remove('expanded');
            el.style.maxHeight = null;
        });

        // Si la biografía estaba cerrada, abrirla
        if (!isExpanded) {
            bio.classList.add('expanded');
            bio.style.maxHeight = bio.scrollHeight + "px";
        }
    }

    // Agregar event listeners a todas las tarjetas de equipo
    document.querySelectorAll('.team-member').forEach(member => {
        member.addEventListener('click', function() {
            toggleBio(this);
        });
    });

    // Animación suave para el scroll del menú de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
