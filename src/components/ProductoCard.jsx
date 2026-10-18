import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductoCard({ producto }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>Precio: ${producto.precio}</Card.Text>
        <Button
          as={Link}
          to={`/producto/${producto.id}`}
          variant="primary"
          className="mt-auto"
        >
          Ver producto
        </Button>
        <Button disabled>
           <i className="bi bi-minecart" />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;