import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductoCard({producto}) {
  return (
    <Card>
      <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          Precio: ${producto.precio}
        </Card.Text>
        <Button variant="primary" as={Link} to={`/producto/${producto.id}`}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard
