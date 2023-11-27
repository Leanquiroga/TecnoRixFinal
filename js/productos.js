const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en scaneres.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoEscaner = document.createElement("div");
    nuevoEscaner.classList = "tarjeta-producto"
    nuevoEscaner.innerHTML = `
    <img src="/image/${producto.id}.webp" alt="escaner 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevoEscaner);
    nuevoEscaner.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(escaneres);