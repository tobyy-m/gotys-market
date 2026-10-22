import { useEffect, useState } from "react";
import { productos } from "../data/productos";
import styles from "./Busqueda.module.css"

function Busqueda({setFiltrados}) {

    const [busqueda, setBusqueda] = useState("");
    const [precioXOrden, setprecioXOrden] = useState(false);

  function productosFiltrados() {
    return (
      productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    )
  }

  function filtradosPorPrecio() {
    const productosOrdenados = [...productosFiltrados()];
      if (precioXOrden) {
        productosOrdenados.sort((a, b) => a.precio - b.precio);
      }
    setFiltrados(productosOrdenados)
   } 

  useEffect(() => {
    filtradosPorPrecio();
  }, [busqueda, precioXOrden]);

    return(
        <div className={styles.busqueda}>
            <input className={styles.inputBusqueda} type="text" placeholder="Buscar juego..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)}/>
            <label className={styles.filtroPrecio}>
            <input type="checkbox" checked={precioXOrden} onChange={(e) => setprecioXOrden(e.target.checked)}/>
            Ordenar por precio de menor a mayor
            </label>
      </div>
    )
}

export default Busqueda