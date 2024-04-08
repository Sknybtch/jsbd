function calcularComision() {
    const ventas = parseFloat(document.getElementById('ventas').value);
    const comision = ventas * 0.10; // 10% de comisión
  
    document.getElementById('resultado').innerText = `La comisión por las ventas realizadas es: $${comision.toFixed(2)}`;
  }