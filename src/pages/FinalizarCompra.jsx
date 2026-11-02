import { useState } from "react"
import CarritoItem from "../components/CarritoItem"
import FormularioCompra from "../components/FormularioCompra"
import styles from "./Carrito.module.css"

function FinalizarCompra() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.formulario}>
        <FormularioCompra/>
      </div>
      <div className={styles.carrito}>
        <CarritoItem seRequiereFormulario={true}/>
      </div>
    </div>
  )
}

export default FinalizarCompra
