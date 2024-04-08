function calcularEdad() {
    const anioNacimiento = parseInt(document.getElementById('anioNacimiento').value);
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
  
    const edad = anioActual - anioNacimiento;
  
    document.getElementById('resultado').innerText = `Edad: ${edad} años`;
  }