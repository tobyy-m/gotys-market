import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductoCard({producto}) {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Producto Nro {producto.id}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard
