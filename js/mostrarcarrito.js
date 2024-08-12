 // Función para mostrar el carrito en la página
 cargarCarrito();//asegura que el carrito este actualizado antes de mostrarlo


 function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    if (carritoContainer) {
        carritoContainer.innerHTML = ''; // Limpiar el contenedor
        carrito.forEach((producto, index) => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('row', 'align-items-center', 'mb-3');
            productoDiv.innerHTML = `
                <div class="col-md-2">
                    <img src="${producto.imagen}" alt="${producto.nombreProducto}" class="img-fluid rounded">
                </div>
                <div class="col-md-9 ">
                    <div>
                        <h4>${producto.nombreProducto}</h4>
                        <p><strong>Nombre científico:</strong> ${producto.nombreCientifico}</p>
                        <p><strong>Planta de:</strong> ${producto.plantaDe}</p>
                        <p><strong>Presentación:</strong> ${producto.presentacion}</p>
                        <p><strong>Cantidad:</strong> ${producto.cantidad}</p>
                    </div>
                    <div class="col-md-7 d-flex align-items-center justify-content-center" style="margin-top: -80px;>
                    <button class="btn p-0" onclick="confirmarEliminar(${index})" style="border: none; background: none;">
                        <img src="/plantas/logocarrito/basurero4.png" alt="Eliminar" style="width: 50px; height: 50px; border-radius: 50%;">
                    </button>
                </div>
               
            `;
            carritoContainer.appendChild(productoDiv);
        });
    } else {
        console.error('No se encontró el elemento con ID carrito-container');
    }
}

// Asegúrate de que `mostrarCarrito()` se ejecute cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    mostrarCarrito();
});

function vaciarCarrito() {
    // Vaciar el array del carrito
    carrito = [];
    
    // Eliminar el carrito del almacenamiento local
    localStorage.removeItem('carrito');
    
    // Actualizar la vista del carrito
    mostrarCarrito();
}

function confirmarEliminar(index) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminarlo',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            eliminarProducto(index);
            Swal.fire(
                '¡Eliminado!',
                'El producto ha sido eliminado del carrito.',
                'success'
            );
        }
    });
}

function eliminarProducto(index) {
    carrito[index].cantidad -= 1;
    if (carrito[index].cantidad === 0) {
        carrito.splice(index, 1);
    }
    guardarCarrito();
    mostrarCarrito();
}



