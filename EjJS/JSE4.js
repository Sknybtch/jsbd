function calcularInteres() {
    const capital = parseFloat(document.getElementById('capital').value);
    const interesMensual = parseFloat(document.getElementById('interes').value);
  
    const interesGanado = capital * (interesMensual / 100);
  
    document.getElementById('resultado').innerText = `El interés ganado después de un mes es: ${interesGanado.toFixed(2)}`;
  }