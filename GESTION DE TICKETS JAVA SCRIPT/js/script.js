// Función para validar el inicio de sesión
function validateLogin() {
    // Obtiene el valor del campo de entrada con id 'username'
    var username = document.getElementById('username').value;
    // Obtiene el valor del campo de entrada con id 'password'
    var password = document.getElementById('password').value;

    // Verifica que los campos de nombre de usuario y contraseña no estén vacíos
    if (username.trim() === "" || password.trim() === "") {
        // Muestra una alerta si algún campo está vacío
        alert("Por favor, complete todos los campos.");
        // Retorna false para evitar que el formulario se envíe automáticamente
        return false;
    }

    // Verifica si las credenciales son correctas
    if (username === "admin" && password === "1234") {
        // Redirige al usuario a 'panel.html' si las credenciales son correctas
        window.location.href = 'panel.html';
        // Retorna false para evitar que el formulario se envíe automáticamente
        return false;
    } else {
        // Muestra una alerta si las credenciales son incorrectas
        alert("Nombre de usuario o contraseña incorrectos.");
        // Retorna false para evitar que el formulario se envíe automáticamente
        return false;
    }
}
