document.getElementById('formsoli').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Recoge los datos del formulario
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const solicitud = document.getElementById('solicitud').value;

    // Formatea el mensaje de WhatsApp
    const mensaje = `Hola, soy ${nombreCompleto}.%0A%0A*Correo Electrónico:* ${correo}%0A*Teléfono:* ${telefono}%0A%0A*Solicitud:* ${solicitud}`;

    // Número de WhatsApp del vivero (reemplaza con el número real)
    const numeroVivero = "71975771"; // Asegúrate de usar el formato adecuado: código de país sin + y el número

    // Crea la URL de WhatsApp
    const url = `https://wa.me/${numeroVivero}?text=${mensaje}`;

    // Redirige a la URL de WhatsApp
    window.open(url, '_blank');
});
