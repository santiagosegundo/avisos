function enviarDatos() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
  
    fetch('https://script.google.com/macros/s/AKfycbxQmsq3VjphB58CjK8YaaiEZv4j_xRn0cZj3d17CArqgzHpmIdY8g6AvfV2__S9UuHScQ/exec', {
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
  
