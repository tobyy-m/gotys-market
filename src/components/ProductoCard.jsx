import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import { CarritoContext, agregarAlCarrito, noHayStock } from "../context/CarritoContext";

function ProductoCard({ producto }) {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const [agregado, setAgregado] = useState(false);

  useEffect(() => {
    if (!agregado) return;
    const timer = setTimeout(() => setAgregado(false), 1500);
    return () => clearTimeout(timer);
  }, [agregado]);

  return (
    <Card className="h-100 card-productos">
      <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} title={producto.nombre} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
          <span className="badge"><i className="bi bi-star-fill"></i> {producto.puntuacion} / 10</span>
          {noHayStock(producto.id) ? <span className="badge bg-danger">Sin stock</span> : <span className="badge bg-success">En stock</span>}
        </div>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text className='card-productos-descripcion'>{producto.descripcion}</Card.Text>
        <Card.Text className='card-productos-precio'>$ {(producto.precio).toLocaleString("es-AR")}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mb-2 mt-auto">
          <Button className="boton-ver-producto" as={Link} to={`/producto/${producto.id}`} variant="outline-info">
            Ver producto
          </Button>
          <Button disabled={noHayStock(producto.id)} className="boton-carrito" onClick={() => { agregarAlCarrito(carrito, setCarrito, producto.id); setAgregado(true); }}
            aria-label={agregado ? "Agregado al carrito" : "Agregar al carrito"}>
            <i className={agregado ? "bi bi-check-lg" : "bi bi-minecart"} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;