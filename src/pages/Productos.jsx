import Grilla from "../components/Grilla"
import ProductoCard from "../components/ProductoCard"

function Productos() {
  let productos = [
    {id : 1} , 
    {id : 2} ,
    {id : 3} ,
    {id : 4} ,
    {id : 5} ,
    {id : 6} ,
    {id : 7} ,
    {id : 8} ,
    {id : 9} ,
    {id : 10} ,
    {id : 11} ,
    {id : 12}
  ]
  return (
    <section>
      <h1>Productos</h1>
      <Grilla filas={2} columnas={6} contenido={productos.map(elemento => (<ProductoCard producto={elemento}/>))}/>
    </section>
  )
}

export default Productos
