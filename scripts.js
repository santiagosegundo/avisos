function enviarDatos() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
  
    fetch('https://script.google.com/macros/s/AKfycbxf_s5e9Tqs6zAcuGZ7ACTuJo6lZ0TWqTcbpgbfNi4NqI0WLMiowDygS5X-D0Y3cAEuOw/exec', {
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
  
