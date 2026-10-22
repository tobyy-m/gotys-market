import { Link } from "react-router-dom";
import Carrusel from "../components/Carrusel";
import { Button, Image } from "react-bootstrap";
import Grilla from "../components/Grilla"
import ProductoCard from "../components/ProductoCard"
import { productos } from "../data/productos"
import styles from "./Inicio.module.css";

function Inicio() {
  const destacados = productos.filter((elemento => elemento.puntuacion > 7.5)).slice(0, 4).map(im => im)
  const vendidos = productos.filter((elemento => elemento.stock <=10  && elemento.stock >0)).slice(0, 4).map(im => im)
  return (
    <>
      <main>
        <Carrusel/>
        <section>
          <div className={styles.div}>
            <h1 className={styles.titulo}>PRODUCTOS DESTACADOS</h1>
            <Grilla filas={1} columnas={4} contenido={destacados.map(elemento => (<ProductoCard key={elemento.id} producto={elemento} />))} />
          </div>
          <div className={styles.div}>
            <h1 className={styles.titulo}>MÁS VENDIDOS</h1>
            <Grilla filas={1} columnas={4} contenido={vendidos.map(elemento => (<ProductoCard key={elemento.id} producto={elemento} />))} />
          </div>
        </section>
        <div className={styles.div}>
          <Button className="boton-ver-producto" as={Link} to={'/productos'} variant="outline-info" style={{ alignSelf: "flex-end", margin: "10px"  }}> Ver catálogo</Button>
        </div>
        <div className="presentacion text-center my-4 px-3">
          <Link to={`/nosotros`}>
          <Image src="/img/logo.webp" rounded width={100} height={90}  alt="logo" title="logo"/>
          </Link>
          <p className={styles.texto}> Goty's Market, una web dedicada puramente a juegos, con el objetivo de destacar y dar la posibilidad de jugar a todos los Gotys que existan. Sé parte de esta pequeña comunidad gamer.</p>
        </div>
      </main>

    </>
  );
}

export default Inicio;