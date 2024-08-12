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
document.addEventListener('DOMContentLoaded', function() {
    cargarCarrito();
    //mostrarCarrito();
});

// Función para activar animación si hay productos en el carrito
function activarAnimacionCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const logoCarrito = document.querySelector('.navbar-brand img');

    if (carrito.length > 0) {
        logoCarrito.classList.add('vibrar'); // Añadir la clase de animación
    } else {
        logoCarrito.classList.remove('vibrar');
        logoCarrito.classList.remove('agrandar'); // Si prefieres usar otra animación
    }
}

// Ejecuta la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', activarAnimacionCarrito);