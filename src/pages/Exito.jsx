import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Styles from './Exito.module.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Exito() {
  const { id } = useParams();
  return (
    <div className={Styles.contenedor}>
      <Card className="card-exito">
        <p className={Styles.subtitulo}>Pedido #{id}</p>
        <Card.Title>¡Pedido Realizado Con Éxito!</Card.Title>
        <Card.Body>
          <img src="/img/fantasma.webp" alt="Fantasma" className="imagen-exito" />
          <Card.Text>
            Recibimos tu pedido y estamos trabajando para que llegue a vos lo antes posible.
          </Card.Text>
          <Card.Text>
            Te enviaremos un correo electrónico con la confirmación de tu pedido y los detalles.
          </Card.Text>
          <Button className="boton-secundario" as={Link} to="/productos">Seguir Comprando</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Exito
