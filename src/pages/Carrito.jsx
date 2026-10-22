import { useState } from "react"
import CarritoItem from "../components/CarritoItem"
import FormularioCompra from "../components/FormularioCompra"

function Carrito() {
  const [formularioValido , setFormularioValido] = useState(false);
  return (
    <div>
      <FormularioCompra setFormularioValido={setFormularioValido}/>
      <CarritoItem formularioValido={formularioValido}/>
    </div>
  )
}

export default Carrito
