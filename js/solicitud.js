document.getElementById('formsoli').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const solicitud = document.getElementById('solicitud').value;


    const mensaje = `Hola, soy ${nombreCompleto}.%0A%0A*Correo Electrónico:* ${correo}%0A*Teléfono:* ${telefono}%0A%0A*Solicitud:* ${solicitud}`;

   
    const numeroVivero = "50671975771";

 
    const url = `https://wa.me/${numeroVivero}?text=${mensaje}`;

    
    window.open(url, '_blank');
});
