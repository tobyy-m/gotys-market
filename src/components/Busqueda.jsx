import { useEffect, useState } from "react";
import { productos } from "../data/productos";
import styles from "./Busqueda.module.css"

function Busqueda({setFiltrados}) {

    const [busqueda, setBusqueda] = useState("");
    const [precioXOrden, setprecioXOrden] = useState(false);
    const [precioXOrdenInvertido, setprecioXOrdenInvertido] = useState(false);

  function productosFiltrados() {
    return (
      productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    )
  }

  function aplicarEfectos() {
    const productosOrdenados = [...productosFiltrados()];
    if (precioXOrden) {
      productosOrdenados.sort((a, b) => a.precio - b.precio);
    }
    else if (precioXOrdenInvertido) {
      productosOrdenados.sort((a, b) => b.precio - a.precio);
    }
    setFiltrados(productosOrdenados)
  }

  useEffect(() => {
    aplicarEfectos();
  }, [busqueda, precioXOrden , precioXOrdenInvertido]);

    return(
        <div className={styles.busqueda}>
            <input className={styles.inputBusqueda} type="text" placeholder="Buscar juego..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)}/>
            <label className={styles.filtroPrecio}>
              <input type="checkbox" checked={precioXOrden} onChange={(e) => {setprecioXOrden(e.target.checked); if(e.target.checked) {setprecioXOrdenInvertido(false)}}}/>
              Ordenar por precio de menor a mayor
            </label>
            <label className={styles.filtroPrecio}>
              <input type="checkbox" checked={precioXOrdenInvertido} onChange={(e) => {setprecioXOrdenInvertido(e.target.checked); if(e.target.checked) {setprecioXOrden(false)}}}/>
              Ordenar por precio de mayor a menor
            </label>
      </div>
    )
}

export default Busqueda