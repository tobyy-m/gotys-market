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
          <button className={styles.botonCompra} disabled={!formularioValido}>Realizar compra</button>
        </div>
      </section>
  )
}

export default CarritoItem
