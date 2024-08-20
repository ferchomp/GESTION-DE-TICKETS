// Espera a que el documento esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar la fecha actual en los campos de fecha
    function mostrarFechaActual() {
        const today = new Date(); // Obtiene la fecha actual
        const dd = String(today.getDate()).padStart(2, '0'); // Obtiene el día y lo formatea con dos dígitos
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Obtiene el mes (Enero es 0) y lo formatea con dos dígitos
        const yyyy = today.getFullYear(); // Obtiene el año completo
        const fechaActual = yyyy + '-' + mm + '-' + dd; // Formatea la fecha como 'AAAA-MM-DD'
        
        // Asigna la fecha actual a los campos con id 'fechaCreacion' y 'fechaResolucion'
        document.getElementById('fechaCreacion').value = fechaActual;
        document.getElementById('fechaResolucion').value = fechaActual;
    }

    // Llama a la función para mostrar la fecha actual
    mostrarFechaActual();

    // Maneja el evento click del botón "Volver al Menú"
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', function() {
        window.location.href = 'panel.html'; // Redirecciona a 'panel.html'
    });

    // Maneja el envío del formulario para la creación de Tickets
    const form = document.getElementById('ticketsForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío estándar del formulario

        // Aquí se puede implementar la lógica para enviar el formulario mediante AJAX u otra tecnología
        alert('Implementa aquí la lógica para enviar el formulario');
    });
});
