  // Asegúrate de cargar el carrito al inicio
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    } else {
        carrito = [];
    }
}


function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    if (carritoContainer) {
        carritoContainer.innerHTML = ''; // Limpiar el contenedor
        carrito.forEach((producto, index) => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('row', 'align-items-center', 'mb-3');

            // Inicializamos productoHTML correctamente
            let productoHTML = `
                <div class="col-md-2">
                    <img src="${producto.imagen}" alt="${producto.nombreProducto}" class="img-fluid rounded">
                </div>
                <div class="col-md-9 ">
                    <div>
                        <h4>${producto.nombreProducto}</h4>`;
            
            if (producto.nombreCientifico) {
                productoHTML += `<p><strong>Nombre científico:</strong> ${producto.nombreCientifico}</p>`;
            }
            if (producto.plantaDe) {
                productoHTML += `<p><strong>Planta de:</strong> ${producto.plantaDe}</p>`;
            }
            if (producto.presentacion) {
                productoHTML += `<p><strong>Presentación:</strong> ${producto.presentacion}</p>`;
            }
            if (producto.identificador) {
                productoHTML += `<p><strong>Identificador:</strong> ${producto.identificador}</p>`;
            }
            if (producto.descripcion) {
                productoHTML += `<p><strong>Descripción:</strong> ${producto.descripcion}</p>`;
            }
            
            productoHTML += `<p><strong>Cantidad:</strong> ${producto.cantidad}</p>`;
            
            productoHTML += `</div>
                    <div class="col-md-7 d-flex align-items-center justify-content-center" style="margin-top: -60px;">
                        <button class="btn p-0" onclick="confirmarEliminar(${index})" style="border: none; background: none;">
                            <img src="/plantas/logocarrito/basurero4.png" alt="Eliminar" style="width: 50px; height: 50px; border-radius: 50%;">
                        </button>
                    </div>
                </div>
            `;

            // Añadimos el HTML generado al elemento del producto
            productoDiv.innerHTML = productoHTML;
            carritoContainer.appendChild(productoDiv);
        });
    } else {
        console.error('No se encontró el elemento con ID carrito-container');
    }
}

 
 // Asegúrate de que `mostrarCarrito()` se ejecute cuando el DOM esté listo
 document.addEventListener('DOMContentLoaded', function() {
    cargarCarrito();  // Asegúrate de que el carrito esté cargado
     mostrarCarrito();
 });
 
 function vaciarCarrito() {
    // Mostrar alerta de confirmación
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡Esta acción eliminará todos los productos del carrito y no se puede deshacer!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, vaciarlo',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Si el usuario confirma, vaciar el carrito
            carrito = [];
            localStorage.removeItem('carrito');
            mostrarCarrito();

            // Mostrar alerta de éxito
            Swal.fire(
                'Carrito vaciado',
                'Todos los productos han sido eliminados del carrito.',
                'success'
            );
        }
    });
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



