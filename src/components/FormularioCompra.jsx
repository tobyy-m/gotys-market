import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { CarritoContext } from "../context/CarritoContext";
import { useState } from "react";
import styles from "./Formulario.module.css"

function FormularioCompra({ setFormularioValido }) {
  const navigate = useNavigate();
  const { setCarrito } = useContext(CarritoContext);
  const [formData, setFormData] = useState({
    nombre: "",
    mail: "",
    tel: "",
    direccion: "",
    entrega: "",
    observaciones: ""
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validateForm() {
    const newErrors = {};

    if (formData.nombre.trim() === "") {
      newErrors.nombre = "El campo nombre está vacío";
    }
    if (formData.mail.trim() === "") {
      newErrors.mail = "El campo email está vacío";
    } else {
      if (!formData.mail.includes("@")) {
        newErrors.mail = "Ingrese un email válido";
      }
    }
    if (formData.tel.replace(/\D/g, "").length < 10) {
      newErrors.tel = "Ingrese un numero valido";
    }
    if (formData.direccion.trim() === "") {
      newErrors.direccion = "El campo direccion está vacío";
    }
    if (formData.entrega.trim() === "") {
      newErrors.entrega = "Debe seleccionar un metodo de entrega";
    }
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setFormularioValido(true);
      setCarrito([]);
      const idCompra = Math.floor(Math.random() * 1000000);
      navigate(`/exito/${idCompra}`);
    } else {
      setFormularioValido(false);
    }
  }

  return (
    <form id="formulario" className={styles.formulario} onSubmit={handleSubmit} noValidate>
      <p>Por favor ingresá tus datos para realizar la compra</p>
      <div className={styles.campos}>
        <div className={styles.campo}>
          <label htmlFor="nombreYApellido">Nombre y apellido *</label>
          <input type="text" name="nombre" id="nombreYApellido" className={`form-control ${errors.nombre ? "is-invalid" : ""}`} value={formData.nombre} onChange={handleChange}></input>
          {errors.nombre && (
            <div className="invalid-feedback">{errors.nombre}</div>
          )}
        </div>
        <div className={styles.campo}>
          <label htmlFor="mail">Mail *</label>
          <input type="email" name="mail" id="mail" className={`form-control ${errors.mail ? "is-invalid" : ""}`} value={formData.mail} onChange={handleChange}></input>
          {errors.mail && (
            <div className="invalid-feedback">{errors.mail}</div>
          )}
        </div>
        <div className={styles.campo}>
          <label htmlFor="telefono">Teléfono *</label>
          <input type="tel" name="tel" id="telefono" className={`form-control ${errors.tel ? "is-invalid" : ""}`} value={formData.tel} onChange={handleChange}></input>
          {errors.tel && (
            <div className="invalid-feedback">{errors.tel}</div>
          )}
        </div>
        <div className={styles.campo}>
          <label htmlFor="direccion">Dirección *</label>
          <input type="text" name="direccion" id="direccion" className={`form-control ${errors.direccion ? "is-invalid" : ""}`} value={formData.direccion} onChange={handleChange}></input>
          {errors.direccion && (
            <div className="invalid-feedback">{errors.direccion}</div>
          )}
        </div>
      </div>
      <div className={styles.metodosDeEntrega}>
        <p>Método de entrega *</p>
        <div className={styles.opcionesDeEntrega}>
          <label>
            <input type="radio" name="entrega" value="entrega1" onChange={handleChange} /> Mail
          </label>
          <label>
            <input type="radio" name="entrega" value="entrega2" onChange={handleChange} /> Descarga directa
          </label>
          <label>
            <input type="radio" name="entrega" value="entrega3" onChange={handleChange} /> Utorrent
          </label>
          <label>
            <input type="radio" name="entrega" value="entrega4" onChange={handleChange} /> Portable comprimido
          </label>
          {errors.entrega && (
            <div className="invalid-feedback d-block">{errors.entrega}</div>
          )}
        </div>
      </div>
      <div className={`${styles.campo} ${styles.observaciones}`}>
        <label htmlFor="observaciones">Observaciones</label>
        <textarea id="observaciones" name="observaciones" value={formData.observaciones} onChange={handleChange}></textarea>
      </div>
    </form>
  )
}

export default FormularioCompra