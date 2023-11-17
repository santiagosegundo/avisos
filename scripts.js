function enviarDatos() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
  
    fetch('https://script.google.com/macros/s/AKfycbx_crFGO_U9ekpP7YnlIvcmezPDDygZI24EYp6tMVEEqkebt1m9LsbBdONU_eADvrct/exec', {
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
  
