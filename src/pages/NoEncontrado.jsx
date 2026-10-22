import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function NoEncontrado() {
  return (
    <section className='no-encontrado'>
      <div className="no-encontrado-contenido">
        <img src="/img/cachito404.webp" alt="404" className='no-encontrado-imagen' />
        <div className="no-encontrado-texto">
          <h1>Algo no piolaba <br />como tenia que piolar</h1>
          <p>No pudimos encontrar lo que buscabas</p>
          <h2>ERROR 404</h2>
          <Button className="boton-secundario" as={Link} to="/">Volver a la página principal</Button>
        </div>
      </div>
    </section>
  )
}

export default NoEncontrado
