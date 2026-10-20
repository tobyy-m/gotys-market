import Grilla from "../components/Grilla"
import ProductoCard from "../components/ProductoCard"
import Container from 'react-bootstrap/Container';
import {productos} from "../data/productos"
function Productos() {
  return (
    <Container>
      <h1 className="text-center p-3">Nuestros Productos</h1>
      <Grilla filas={2} columnas={4} contenido={productos.map(elemento => (<ProductoCard key={elemento.id} producto={elemento}/>))}/>
    </Container>
  )
}

export default Productos
