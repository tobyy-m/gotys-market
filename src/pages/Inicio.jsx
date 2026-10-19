import { Link } from "react-router-dom";
import Carrusel from "../components/Carrusel";
import { Button, Image } from "react-bootstrap";
import Grilla from "../components/Grilla"
import ProductoCard from "../components/ProductoCard"
import {productos} from "../data/productos"
import styles from "./Inicio.module.css";

function Inicio() {
  const destacados = productos.filter((elemento => elemento.puntuacion>8 )).slice(0,4).map(im => im)
  return (
    <>
  <main>
  <Carrusel className={styles.carrusel}/>
  <h1 className={styles.texto}>PRODUCTOS DESTACADOS</h1>
  <Grilla filas={1} columnas={4} contenido={destacados.map(elemento => (<ProductoCard key={elemento.id} producto={elemento}/>))}/>
  <Button as={Link} to={'/productos'} variant="outline-info" > Ver catalogo</Button>
  <div className={styles.div}>
    <Image src="img/logo.png" rounded width={100} height={90} />
    <p>Bienvenido a Goty's Market. Una web dedicada puramente a juegos, con el objetivo de destacar y dar la posibilidad de jugar a todos los Gotys que existan. Sé parte de esta pequeña comunidad gamer.</p>
  </div>
  </main>
 
  </>
  );
}

export default Inicio;