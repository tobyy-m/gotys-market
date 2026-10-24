import { useParams, Link } from "react-router-dom"
import { productos } from "../data/productos"
import Rating from "../components/Rating"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext, useState, useEffect } from "react";
import { CarritoContext, agregarAlCarrito, noHayStock } from "../context/CarritoContext";

function DetalleProducto() {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const [agregado, setAgregado] = useState(false);
  const { id } = useParams();
  const producto = productos.find(p => p.id === Number(id));

  useEffect(() => {
    if (!agregado) return;
    const timer = setTimeout(() => setAgregado(false), 1500);
    return () => clearTimeout(timer);
  }, [agregado]);


  return (
    <Container className="my-4">
      <Link to="/productos" className="flecha-volver d-inline-block mb-3 text-decoration-none">
        <i className="bi bi-arrow-left" /> Volver
      </Link>

      <Row>
        <Col lg={7}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h2>{producto.nombre}</h2>
            <div>
              {noHayStock(producto.id) ? <span className="badge bg-danger">Sin stock</span> : <Badge bg="none" text="dark" className="badge-stock">Stock: {producto.stock}</Badge>}
            </div>
          </div>
          <Image src={producto.imagen} alt={producto.nombre} className="imagen-producto" />
          <Badge bg="none" text="dark" className="badge-categoria mt-2">{producto.categoria}</Badge>

          <Card className="descripcion-producto mt-3">
            <Card.Body>
              <Card.Title>Descripción</Card.Title>
              <Card.Text>{producto.descripcion}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={5} className="mt-4 mt-md-0">
          <div className="mb-3">
            <Rating valor={producto.puntuacion} />
          </div>
          <div className="detalles-producto">
            <p className="mb-1 mt-2">Lanzamiento: {producto.fechaLanzamiento}</p>
            <p className="mb-1 mt-2">Tamaño: {producto.tamaño}</p>
            <p className="mb-1 mt-2">Idiomas: {producto.idiomas}</p>
          </div>
          <div className="precio-producto d-flex justify-content-between mt-4">
            <span>Precio</span>
            <span>${producto.precio.toLocaleString("es-AR")}</span>
          </div>

          <Button className="boton-carrito w-100 mt-3" disabled={noHayStock(producto.id)} onClick={() => { agregarAlCarrito(carrito, setCarrito, producto.id); setAgregado(true); }}>
            <i className={agregado ? "bi bi-check-lg" : "bi bi-minecart"} /> {agregado ? "¡Agregado!" : "Agregar al carrito"}
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default DetalleProducto