import styles from "./Carrusel.module.css";
import Carousel from 'react-bootstrap/Carousel';
import { productos } from "../data/productos"
import { Link } from 'react-router-dom';

function Carrusel() {
  const destacados = productos.filter((elemento => elemento.puntuacion >= 9.0)).map(im => im)
  return (
    <Carousel className={styles.carrusel}>
        {destacados.map(e=> <Carousel.Item interval={4000}>
        <Link to={`/producto/${e.id}`}>
          <img src={e.imagenBanner} className={styles.imagenes} alt={e.nombre} title={e.nombre}/>
        </Link>
        <Carousel.Caption>
          <h3>{e.nombre}</h3>
          <p className={styles.descripcion}>{e.descripcion}</p>
        </Carousel.Caption>
      </Carousel.Item>)}
    </Carousel>
  )
}

export default Carrusel