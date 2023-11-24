//fecha automatica
const fechaInput = document.getElementById("fecha");
const meses = [
    "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"
  ];
const fechaActual = new Date();
const dia = fechaActual.getDate().toString().padStart(2, "0");
const mes = meses[fechaActual.getMonth()];
const anio = fechaActual.getFullYear();

const fechaFormateada = `${dia}/${mes}/${anio}`;
fechaInput.value = fechaFormateada;

function enviarDatos() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    fetch('https://script.google.com/macros/s/AKfycbwspEBvrOMb5Qbm0qCqr-UpZ7nlBiDte0P8lcvUk93hxRTV1B9qOOCQlJvvKD327YDt/exec', {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'nombre=' + encodeURIComponent(nombre) + '&edad=' + encodeURIComponent(edad)
    }).then(function(response) {
      // Manejar la respuesta si es necesario
      console.log(response);
    }).catch(function(error) {
      // Manejar errores si es necesario
      console.error(error);
    });
  }
