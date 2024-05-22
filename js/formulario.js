// Función para habilitar o deshabilitar campos basado en el servicio seleccionado
function actualizarCampos() {
  const servicio = document.getElementById("servicio-presupuesto").value;
  const cantidadAlarma = document.getElementById("cantidad-camara");
  const tipoAlarma = document.getElementById("tipo-camara");
  const cantidadMetros = document.getElementById("cantidad-metros");
  const cantidadCustodias = document.getElementById("cantidad-custodias");
  const cantidadAlarmas = document.getElementById("cantidad-alarmas");

  // Inicialmente deshabilitar todos los campos
  cantidadAlarma.disabled = true;
  tipoAlarma.disabled = true;
  cantidadMetros.disabled = true;
  cantidadCustodias.disabled = true;
  cantidadAlarmas.disabled = true;

  if (servicio === "Cámaras") {
    cantidadAlarma.disabled = false;
  } else if (servicio === "Cercos") {
    cantidadMetros.disabled = false;
  } else if (servicio === "InstaCamaras") {
    cantidadAlarma.disabled = false;
    tipoAlarma.disabled = false;
  } else if (servicio === "Asesoramiento") {
    cantidadCustodias.disabled = false;
  } else if (servicio === "AlarmaResidencial" || servicio === "AlarmaComercial") {
    cantidadAlarmas.disabled = false;
  }
}

// Añadir evento onchange al selector de servicio
document.getElementById("servicio-presupuesto").addEventListener("change", actualizarCampos);

// Llamar a la función inicialmente para asegurar el estado correcto de los campos
document.addEventListener("DOMContentLoaded", actualizarCampos);

// Función para calcular el costo total
function calcularCosto() {
  const servicio = document.getElementById("servicio-presupuesto").value;
  const tipoAlarma = document.getElementById("tipo-camara").value;
  const cantidadAlarma = parseInt(document.getElementById("cantidad-camara").value) || 0;
  const cantidadMetros = parseInt(document.getElementById("cantidad-metros").value) || 0;
  const cantidadCustodias = parseInt(document.getElementById("cantidad-custodias").value) || 0;
  const cantidadAlarmas = parseInt(document.getElementById("cantidad-alarmas").value) || 0;
  let costoUnitario = 0;

  if (servicio === "Cámaras") {
    costoUnitario = 5000;
  } else if (servicio === "Cercos") {
    costoUnitario = 20000; // Precio por metro de cerco eléctrico
  } else if (servicio === "Asesoramiento") {
    costoUnitario = 12000; // Precio por custodia
  } else if (servicio === "AlarmaResidencial") {
    costoUnitario = 95000; // Precio por alarma residencial
  } else if (servicio === "AlarmaComercial") {
    costoUnitario = 120000; // Precio por alarma comercial
  } else {
    switch (tipoAlarma) {
      case 'camara-fija':
        costoUnitario = 25000;
        break;
      case 'camara-domo':
        costoUnitario = 30000;
        break;
      case 'camara-bullet':
        costoUnitario = 27000;
        break;
      case 'camara-oculta':
        costoUnitario = 28000;
        break;
      case 'camara-panoramica':
        costoUnitario = 32000;
        break;
      case 'camara-ip':
        costoUnitario = 29000;
        break;
      default:
        costoUnitario = 0;
    }
  }

  const costoTotal = servicio === "Cercos" ? costoUnitario * cantidadMetros 
                    : servicio === "Asesoramiento" ? costoUnitario * cantidadCustodias 
                    : (servicio === "AlarmaResidencial" || servicio === "AlarmaComercial") ? costoUnitario * cantidadAlarmas 
                    : costoUnitario * cantidadAlarma;

  document.getElementById("costo-total").textContent = `$${costoTotal}`;
}

// Función para enviar el formulario de presupuesto
document.getElementById("form-presupuesto").addEventListener("submit", function (event) {
  event.preventDefault();
  const form = event.target;
  const nombre = form.nombre.value;
  const email = form.email.value;
  const telefono = form.telefono.value;
  const servicio = form.servicio.value;
  const cantidadAlarma = form["cantidad-camara"].value;
  const tipoAlarma = form["tipo-camara"].value;
  const cantidadMetros = form["cantidad-metros"].value;
  const cantidadCustodias = form["cantidad-custodias"].value;
  const cantidadAlarmas = form["cantidad-alarmas"].value;
  const mensaje = form.mensaje.value;

  if (nombre && (email || telefono) && servicio) {
    alert(`Gracias ${nombre}, hemos recibido tu solicitud de presupuesto para el servicio de ${servicio}. Nos pondremos en contacto contigo pronto.`);
    form.reset();
    document.getElementById("costo-total").textContent = "$0"; // Limpiar el resultado del costo total
  } else {
    alert("Por favor, completa los campos obligatorios.");
  }
});
