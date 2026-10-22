import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from "react";
import { CarritoContext, eliminarDelCarrito , aumentarCantidad , reducirCantidad , noHayStock } from "../context/CarritoContext";
import styles from "./CarritoCard.module.css"

function CarritoCard({ producto , cantidad}) {
  const { carrito, setCarrito } = useContext(CarritoContext);
  return (
    <article className={styles.tarjetaCarrito}>
      <Row className="g-2 align-items-center">
        <Col xs={3} className={styles.colImagen}>
          <img className={styles.imagenJuego} src={producto.imagen} alt={producto.nombre} title={producto.nombre}/>
        </Col>
        <Col xs={5} className={styles.colInfo}>
          <h3>{producto.nombre}</h3>
          <p>Precio unitario: ${producto.precio}</p>
        </Col>
        <Col xs={4} className={styles.colBotones}>
          <div className={styles.finalTarjeta}>
            <Button className={styles.botonEliminar} onClick={() => eliminarDelCarrito(carrito, setCarrito, producto.id)}>
              <i className="bi bi-x-circle-fill" />
            </Button>
            <div className={styles.aumentarReducirCantidad}>
              <p>Cant:</p>
              <Button onClick={() => reducirCantidad(carrito, setCarrito, producto.id)}>
                <i className="bi bi-dash-circle-fill" />
              </Button>
              <p>{cantidad}</p>
              <Button disabled={noHayStock(producto.id)} onClick={() => aumentarCantidad(carrito, setCarrito, producto.id)}>
                <i className="bi bi-plus-circle-fill" />
              </Button>
            </div>
            <p className={styles.totalJuego}>
              Total: ${producto.precio * cantidad}
            </p>
          </div>
        </Col>
      </Row>
    </article>
  )
}

export default CarritoCard;

