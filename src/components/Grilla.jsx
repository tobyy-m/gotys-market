import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grilla({ contenido }) {
  return (
    <Row xs={1} md={3} lg={4} className="g-4">
      {contenido.map((item, i) => (
        <Col key={i}>{item}</Col>
      ))}
    </Row>
  );
}

export default Grilla;