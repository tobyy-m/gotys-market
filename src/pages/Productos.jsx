import Grilla from "../components/Grilla"
import ProductoCard from "../components/ProductoCard"
import {productos} from "../data/productos"
function Productos() {
  return (
    <section>
      <h1>Productos</h1>
      <Grilla filas={2} columnas={6} contenido={productos.map(elemento => (<ProductoCard key={elemento.id} producto={elemento}/>))}/>
    </section>
  )
}

export default Productos
