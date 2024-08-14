function enviarCotizacionWhatsApp() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (!carritoGuardado || carritoGuardado.length === 0) {
        Swal.fire({
            title: 'Carrito vacío',
            text: "No has agregado productos al carrito. Por favor, agrega productos para generar una cotización.",
            icon: 'warning',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    const carrito = JSON.parse(carritoGuardado);
    let mensaje = "Hola, me gustaría solicitar una cotización para los siguientes productos:\n\n";

    carrito.forEach(producto => {
        mensaje += `- ${producto.nombreProducto}: ${producto.cantidad} unidades\n`;
    });

    const numeroWhatsApp = "71975771"; // Reemplaza con el número de teléfono del vivero (con el código del país incluido)
    const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlace, '_blank');
}
