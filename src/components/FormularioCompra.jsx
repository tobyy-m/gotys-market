import React, { useState } from "react";

function FormularioCompra() {

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

  function elFormularioEstaCompleto() {
    return (
      nombreEsValido() &&
      mailEsValido() &&
      telefonoEsValido() &&
      direccionEsValida() &&
      metodoEntregaEsValido()
    )
  }

  return (
    <form id="formulario">
      <p>Por favor ingresa tus datos para realizar la compra</p>
      <label for="nombreYApellido">Nombre y apellido *</label>
      <input type="text" id="nombreYApellido" onChange={cargarNombre}></input>
      {nombre != "" && !nombreEsValido() && (
        <span className="errorFormulario">
          Debe ingresar su nombre y apellido.
        </span>
      )}
      <br></br>
      <label for="mail">Mail *</label>
      <input type="email" id="mail" onChange={cargarMail}></input>
      {mail != "" && !mailEsValido() && (
        <span className="errorFormulario">
          Debe ingresar un mail valido.
        </span>
      )}
      <br></br>
      <label for="telefono">Telefono *</label>
      <input type="tel" id="telefono" onChange={cargarTelefono}></input>
      {telefono !== "" && !telefonoEsValido() && (
        <span className="errorFormulario">
          Debe ingresar un telefono de 10 digitos.
        </span>
      )}
      <br></br>
      <label for="direccion">Direccion *</label>
      <input type="text" id="direccion" onChange={cargarDireccion}></input>
      {direccion != "" && !direccionEsValida() && (
        <span className="errorFormulario">
          Debe ingresar su direccion
        </span>
      )}
      <br></br>
      <p>Metodo de entrega *</p>
      <label>
        <input type="radio" name="entrega" value="entrega1" onChange={cargarMetodoEntrega}/> entrega1
      </label>
      <br></br>
      <label>
        <input type="radio" name="entrega" value="entrega2" onChange={cargarMetodoEntrega}/> entrega2
      </label>
      <br></br>
      <label>
        <input type="radio" name="entrega" value="entrega3" onChange={cargarMetodoEntrega}/> entrega3
      </label>
      <br></br>
      <label>
        <input type="radio" name="entrega" value="entrega4" onChange={cargarMetodoEntrega}/> entrega4
      </label>
      <br></br>
      <label for="obervaciones">Obervaciones</label>
      <textarea id="obervaciones"></textarea>
      <br></br>
    </form>
  )
}

export default FormularioCompra
