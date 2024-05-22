// Función para enviar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre-contacto').value.trim();
    const email = document.getElementById('email-contacto').value.trim();
    const edad = document.getElementById('edad-contacto').value;
    const mensaje = document.getElementById('mensaje-contacto').value.trim();
    let errors = [];
  
    // Validar nombre
    if (nombre === '') {
        errors.push('El nombre es obligatorio.');
        document.getElementById('nombre-contacto').classList.add('error');
    } else {
        document.getElementById('nombre-contacto').classList.remove('error');
    }
  
    // Validar edad
    if (isNaN(edad) || edad < 18 || edad >= 100) {
        errors.push('La edad debe ser un número mayor o igual a 18 y menor que 100.');
        document.getElementById('edad-contacto').classList.add('error');
    } else {
        document.getElementById('edad-contacto').classList.remove('error');
    }
  
    // Validar mensaje
    if (mensaje === '') {
        errors.push('El mensaje es obligatorio.');
        document.getElementById('mensaje-contacto').classList.add('error');
    } else {
        document.getElementById('mensaje-contacto').classList.remove('error');
    }
  
    // Si hay errores mostrarlos
    if (errors.length > 0) {
        alert('Por favor, corrige los siguientes errores:\n\n' + errors.join('\n'));
        return;
    }
  
    // Si no hay errores mostrar los datos
    const data = `Nombre: ${nombre}\n`;
    data += `Email: ${email !== '' ? email : 'No proporcionado'}\n`;
    data += `Edad: ${edad}\n`;
    data += `Mensaje: ${mensaje}`;

    alert(data);
    alert('Mensaje enviado.');
});
