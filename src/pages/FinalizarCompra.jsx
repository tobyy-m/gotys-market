import { useState } from "react"
import CarritoItem from "../components/CarritoItem"
import FormularioCompra from "../components/FormularioCompra"
import styles from "./Carrito.module.css"

function FinalizarCompra() {
  const [formularioValido , setFormularioValido] = useState(false);
  return (
    <div className={styles.contenedor}>
      <div className={styles.formulario}>
        <FormularioCompra setFormularioValido={setFormularioValido}/>
      </div>
      <div className={styles.carrito}>
        <CarritoItem seRequiereFormulario={true} formularioValido={formularioValido}/>
      </div>
    </div>
  )
}

export default FinalizarCompra
