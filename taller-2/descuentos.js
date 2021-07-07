/* const precioOriginal = 120;
const descuento = 18;

const porcentajeAPagar = 100 - descuento;

const precioConDescuento = (precioOriginal * (porcentajeAPagar) / 100) */

/* console.log({
    precioOriginal,
    descuento,
    porcentajeAPagar,
    precioConDescuento
}) */

function calcularPrecio(precio, descuento) {

    const porcentajeAPagar = 100 - descuento;

    const precioConDescuento = (precio * porcentajeAPagar) / 100;

    return precioConDescuento;
}

function calcularPrecioFinal() {
    const precio = document.getElementById("valorPrecio");
    const valorPrecio = precio.value;
    const descuento = document.getElementById("valorDescuento")
    const valorDescuento = descuento.value;

    const precioConDescuento = calcularPrecio (valorPrecio, valorDescuento);

    const resultado = document.getElementById("precioFinal")

    resultado.innerText = precioConDescuento
}

