function calcularDescuento() {
    const totalCompra = parseFloat(document.getElementById('totalCompra').value);
    const descuento = totalCompra * 0.15; // 15% de descuento
  
    const totalPagar = totalCompra - descuento;
  
    document.getElementById('resultado').innerText = `El total a pagar con descuento es: $${totalPagar.toFixed(2)}`;
  }