import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import CarritoCard from "./CarritoCard"
import { productos } from "../data/productos"

function CarritoItem() {
  const { carrito } = useContext(CarritoContext)
  return (
      <section id="carrito">
        {carrito.map(unJuego => (
          <CarritoCard producto={productos.find(juego => juego.id == unJuego.idProducto)} cantidad={unJuego.cantidad}/>
        ))}

      </section>
  )
}

export default CarritoItem
