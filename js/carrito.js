// Array para almacenar los productos agregados
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(imagen, nombreProducto, nombreCientifico = '', plantaDe = '', presentacion = '', identificador = '', descripcion = '') {
    cargarCarrito(); // Asegúrate de cargar el carrito actualizado
    const productoExistente = carrito.find(producto => 
        producto.nombreProducto === nombreProducto &&
        producto.nombreCientifico === nombreCientifico &&
        producto.plantaDe === plantaDe &&
        producto.presentacion === presentacion &&
        producto.identificador === identificador &&
        producto.descripcion === descripcion
    );

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        const producto = {
            imagen,
            nombreProducto,
            nombreCientifico,
            plantaDe,
            presentacion,
            identificador,
            descripcion,
            cantidad: 1,
        };
        carrito.push(producto);
    }
    
    guardarCarrito();
    // Mostrar alerta de confirmación
    Swal.fire({
        title: 'Producto agregado',
        text: `${nombreProducto} ha sido añadido al carrito.`,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        activarAnimacionCarrito();
        actualizarContadorCarrito();
    });
}

// Guardar el carrito en el almacenamiento local del navegador
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Cargar el carrito desde el almacenamiento local al cargar la página
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    } else {
        carrito = [];
    }
}

// Actualiza el contador de productos en el carrito
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productCount = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    document.getElementById("productCount").textContent = productCount;
}

// Función para activar animación si hay productos en el carrito
function activarAnimacionCarrito() {
    const carritoLogo = document.querySelector('.navbar-brand img');
    
    if (carrito.length > 0) {
        carritoLogo.classList.add("vibrar");
        setTimeout(() => {
            carritoLogo.classList.remove("vibrar");
        }, 1000); // Duración de la animación vibrar

        // Repite la animación cada 1 minuto
        setTimeout(activarAnimacionCarrito, 30000); // 60000ms = 1 minuto
    } else {
        carritoLogo.classList.remove("vibrar");
    }
}

// Ejecuta la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {
    cargarCarrito();
    actualizarContadorCarrito();
    activarAnimacionCarrito();
});