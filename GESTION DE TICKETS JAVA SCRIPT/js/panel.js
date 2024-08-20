// Espera a que el documento esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos <a> dentro del panel de navegación que está dentro de una lista <ul> <li>
    const links = document.querySelectorAll('.navigation-panel ul li a');

    // Agregar evento al pasar el ratón sobre los enlaces
    links.forEach(link => {
        // Agrega un evento que se dispara cuando el ratón entra en el área del enlace
        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#333'; // Cambia el color de fondo al pasar el ratón
        });

        // Agrega un evento que se dispara cuando el ratón sale del área del enlace
        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent'; // Restaura el color de fondo al dejar de pasar el ratón
        });

        // Agrega un evento que se dispara cuando se hace clic en el enlace
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previene la acción predeterminada del enlace
            // Aquí puedes agregar lógica para manejar la navegación o realizar otras acciones
            console.log('Hiciste clic en:', this.textContent); // Muestra en la consola el texto del enlace clicado
        });
    });
});
