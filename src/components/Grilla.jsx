import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grilla({ columnas, contenido }) {
  return (
    <Row xs={1} md={columnas} className="g-4">
      {contenido.map((item, i) => (
        <Col key={i}>{item}</Col>
      ))}
    </Row>
  );
}

export default Grilla;