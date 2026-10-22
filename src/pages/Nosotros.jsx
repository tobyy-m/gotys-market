import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pestañas from "../components/Pestañas";
import styles from "./Nosotros.module.css";

function Nosotros() {

    return (
        <>
            <main>
                <img src="/img/imagenNosotros.webp" alt="banner nosotros" title="banner nosotros" className={styles.imagen} />
                <div className={styles.caja}>
                    <h2 className={styles.titulo}>Nuestra Misión: El Olimpo de los Videojuegos</h2>
                    <p>En Goty's Market no somos solo una tienda online; somos un santuario para los amantes de las grandes historias. Nacimos con un objetivo claro: destacar y dar la posibilidad de jugar a todos los GOTY (Game of the Year) que existan. Creemos que las obras maestras de la industria no deben quedar en el olvido. Por eso, te ofrecemos acceso instantáneo a los juegos más galardonados de la historia en formato 100% digital, eliminando esperas y costes de envío.</p>
                </div>
                <Pestañas/>
                <div className={styles.div}>
                    <h2>¡Explorá nuestro catálogo!</h2>
                    <Button className="boton-ver-producto" as={Link} to={'/productos'} variant="outline-info"> Ver catálogo</Button>
                </div>
            </main>
        </>
    )
}

export default Nosotros