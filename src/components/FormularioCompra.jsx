import { useState } from "react";
import styles from "./Formulario.module.css"

function FormularioCompra({setFormularioValido}) {

  const [nombre , setNombre] = useState("");
  const [mail , setMail] = useState("");
  const [telefono , setTelefono] = useState("");
  const [direccion , setDireccion] = useState("");
  const [metodoEntrega , setMetodoEntrega] = useState("");

  function cargarNombre(event) {
    setNombre(event.target.value)
  }

  function cargarTelefono(event) {
    setTelefono(event.target.value)
  }

  function cargarMail(event) {
    setMail(event.target.value)
  }
  
  function cargarDireccion(event) {
    setDireccion(event.target.value)
  }

  function cargarMetodoEntrega(event) {
    setMetodoEntrega(event.target.value)
    validarFormulario()
  }

  function nombreEsValido() {
    return nombre != "" && nombre.includes(" ")
  }

  function mailEsValido() {
    return mail != "" && mail.trim().includes("@") && mail.trim().includes(".com");
  }

  function telefonoEsValido() {
    return telefono != "" && telefono.length == 10;
  }

  function direccionEsValida() {
    return direccion != "";
  }

  function metodoEntregaEsValido() {
    return metodoEntrega != "";
  }

  function validarFormulario() {
    setFormularioValido(
      nombreEsValido() &&
      mailEsValido() &&
      telefonoEsValido() &&
      direccionEsValida() &&
      metodoEntregaEsValido()
    )
  }

  return (
    <form id="formulario" className={styles.formulario}>
      <p>Por favor ingresá tus datos para realizar la compra</p>
      <div className={styles.campos}>
        <div className={styles.campo}>
          <label for="nombreYApellido">Nombre y apellido *</label>
          <input type="text" id="nombreYApellido" onChange={cargarNombre}></input>
          {nombre != "" && !nombreEsValido() && (
            <span className={styles.errorFormulario}>
              Debe ingresar su nombre y apellido.
            </span>
          )}
        </div>
        <div className={styles.campo}>
          <label for="mail">Mail *</label>
          <input type="email" id="mail" onChange={cargarMail}></input>
          {mail != "" && !mailEsValido() && (
            <span className={styles.errorFormulario}>
              Debe ingresar un mail válido.
            </span>
          )}
        </div>
        <div className={styles.campo}>
          <label for="telefono">Teléfono *</label>
          <input type="tel" id="telefono" onChange={cargarTelefono}></input>
          {telefono !== "" && !telefonoEsValido() && (
            <span className={styles.errorFormulario}>
              Debe ingresar un teléfono de 10 dígitos.
            </span>
          )}
        </div>
        <div className={styles.campo}>
          <label for="direccion">Dirección *</label>
          <input type="text" id="direccion" onChange={cargarDireccion}></input>
          {direccion != "" && !direccionEsValida() && (
            <span className={styles.errorFormulario}>
              Debe ingresar su dirección
            </span>
          )}
        </div>
      </div>
      <div className={styles.metodosDeEntrega}>
        <p>Método de entrega *</p>
        <div className={styles.opcionesDeEntrega}>
          <label>
          <input type="radio" name="entrega" value="entrega1" onChange={cargarMetodoEntrega}/> entrega1
          </label>
          <label>
            <input type="radio" name="entrega" value="entrega2" onChange={cargarMetodoEntrega}/> entrega2
          </label>
          <label>
            <input type="radio" name="entrega" value="entrega3" onChange={cargarMetodoEntrega}/> entrega3
          </label>
          <label>
            <input type="radio" name="entrega" value="entrega4" onChange={cargarMetodoEntrega}/> entrega4
          </label>
        </div>
      </div>
      <div className={`${styles.campo} ${styles.observaciones}`}>
        <label for="obervaciones">Observaciones</label>
        <textarea id="obervaciones"></textarea>
      </div>
    </form>
  )
}

export default FormularioCompra