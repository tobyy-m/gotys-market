import { useParams } from "react-router-dom"
import {productos} from "../data/productos"
import Button from 'react-bootstrap/Button';

function DetalleProducto() {
  let {id} = useParams();
  let producto = productos.find(p => p.id == id);
  return (
    <div>
      <h1>Detalle producto</h1>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p> 
      <Button variant="primary">
        <i className="bi bi-bag-plus" /> Agregar al carrito
      </Button>
    </div>
  )
}

export default DetalleProducto
