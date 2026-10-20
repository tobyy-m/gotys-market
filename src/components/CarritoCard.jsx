
function CarritoCard({ producto , cantidad}) {
  return (
    <article className='tarjetaCarrito'>
        <img src={producto.imagen} alt={producto.nombre}/>
        <h3>{producto.nombre}</h3>
        <p>Precio unitario: {producto.precio}</p>
        <p>cantidad: {cantidad}</p>
        <p>total: {producto.precio * cantidad}</p>
    </article>
  )
}

export default CarritoCard;