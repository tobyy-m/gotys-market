import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import CarritoCard from "./CarritoCard"
import { productos } from "../data/productos"
import styles from "./CarritoItem.module.css"

function CarritoItem({formularioValido}) {
  const { carrito } = useContext(CarritoContext);
  const carritoConPrecio = carrito.map(juegoCarrito => {
    const unJuego = productos.find(juego => juego.id == juegoCarrito.idProducto);
      return {
        precio: unJuego.precio, 
        cantidad: juegoCarrito.cantidad
        };
  });
  return (
      <section id="carrito" className={styles.carrito}>
        <div className={styles.listaProductos}>
          {carrito.map(unJuego => (
          <CarritoCard producto={productos.find(juego => juego.id == unJuego.idProducto)} cantidad={unJuego.cantidad}/>
        ))}
        </div>
        <div className={styles.resumenCompra}>
          <p>
            <span>Cant. prod.:</span>
            <span>{carritoConPrecio.reduce((total, juego) => total + juego.cantidad, 0)}</span>
          </p>
          <p className={styles.precioTotal}>
          <span>Total:</span>
          <span>{carritoConPrecio.reduce((total, juego) => total + juego.precio * juego.cantidad, 0)}</span>
          </p>
          <button form="formulario" className={styles.botonCompra} disabled={carrito.length == 0}>Realizar compra</button>
        </div>
        {formularioValido && (
          <div className="alert alert-success mt-3">
            Compra realizada con exito!
          </div>
        )}
      </section>
  )
}

export default CarritoItem
