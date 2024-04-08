function calcularPorcentaje() {
    const totalHombres = parseInt(document.getElementById('totalHombres').value);
    const totalMujeres = parseInt(document.getElementById('totalMujeres').value);
    const totalEstudiantes = totalHombres + totalMujeres;
  
    const porcentajeHombres = (totalHombres / totalEstudiantes) * 100;
    const porcentajeMujeres = (totalMujeres / totalEstudiantes) * 100;
  
    document.getElementById('resultado').innerText = `Hombres: ${porcentajeHombres.toFixed(2)}%, Mujeres: ${porcentajeMujeres.toFixed(2)}%`;
  }