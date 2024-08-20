<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Panel</title>
    <link rel="stylesheet" href="panel.css">
</head>
<body>
    <%
        // Verificación de la sesión: si no hay usuario, redirige a la página de inicio de sesión
        if (session == null || session.getAttribute("usuario") == null) {
            response.sendRedirect("index.html");
            return;
        }
    %>

    <!-- Título de bienvenida -->
    <header>
        <h1>Bienvenido, <%= session.getAttribute("usuario") %>!</h1>
        <h2>Software Gestión de Tickets</h2>
    </header>

    <!-- Panel de navegación -->
    <div class="menu-container">
        <nav class="vertical-menu">
            <h3>Panel de Navegación</h3>
            <ul>
                <li><a href="creacion-tickets.jsp" class="button">Creación de Tickets</a></li>
                <li><a href="listado-tickets.jsp" class="button">Listado de Tickets</a></li>
                <li><a href="clientes.jsp" class="button">Clientes</a></li>
                <li><a href="ayuda-soporte.jsp" class="button">Ayuda y Soporte</a></li>
                <li><a href="generacion-informes.jsp" class="button">Generación de Informes</a></li>
                <li><a href="logout.jsp" class="button">Cerrar sesión</a></li>
            </ul>
        </nav>
    </div>
</body>
</html>
