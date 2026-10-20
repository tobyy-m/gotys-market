import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CarritoContext, agregarAlCarrito } from "../context/CarritoContext";

function ProductoCard({ producto }) {
  const { carrito, setCarrito } = useContext(CarritoContext);
  return (
    <Card className="h-100 card-productos m-4">
      <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge"><i className="bi bi-star-fill"></i> {producto.puntuacion}</span>
        </div>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>Precio: ${producto.precio}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mb-2 mt-auto">
        <Button as={Link} to={`/producto/${producto.id}`} variant="outline-info">
          Ver producto
        </Button>
        <Button onClick={() => agregarAlCarrito(carrito, setCarrito, producto.id)}>
           <i className="bi bi-minecart" />
        </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;