import Grilla from "../components/Grilla"
import ProductoCard from "../components/ProductoCard"
import Container from 'react-bootstrap/Container';
import {productos} from "../data/productos"
import { useState } from "react";
import Busqueda from "../components/Busqueda";
function Productos() {

  const [filtrados , setFiltrados] = useState(productos)

  return (
    <Container>
      <h1 className="text-center p-3">Nuestros Productos</h1>
      <Busqueda setFiltrados={setFiltrados}/>
      <Grilla contenido={filtrados.map(elemento => (<ProductoCard key={elemento.id} producto={elemento}/>))}/>
    </Container>
  )
}

export default Productos
