import Carousel from 'react-bootstrap/Carousel';
import { productos } from "../data/productos"
import { Link } from 'react-router-dom';


function Carrusel() {
  const destacados = productos.filter((elemento => elemento.puntuacion >= 9)).map(im => im)
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <Link to={`/producto/${destacados.at(destacados.length - 1).id}`}>
          <img src={destacados.at(destacados.length - 1).imagenBanner} style={{ width: '100%' }} />
        </Link>
        <Carousel.Caption>
          <h3>{destacados.at(destacados.length - 1).nombre}</h3>
          <p>{destacados.at(destacados.length - 1).descripcion}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <Link to={`/producto/${destacados.at(destacados.length - 2).id}`}>
          <img src={destacados.at(destacados.length - 2).imagenBanner} style={{ width: '100%' }} />
        </Link>
        <Carousel.Caption>
          <h3>{destacados.at(destacados.length - 2).nombre}</h3>
          <p>{destacados.at(destacados.length - 2).descripcion}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <Link to={`/producto/${destacados.at(destacados.length - 3).id}`}>
          <img src={destacados.at(destacados.length - 3).imagenBanner} style={{ width: '100%' }} />
        </Link>
        <Carousel.Caption>
          <h3>{destacados.at(destacados.length - 3).nombre}</h3>
          <p>{destacados.at(destacados.length - 3).descripcion}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <Link to={`/producto/${destacados.at(destacados.length - 4).id}`}>
          <img src={destacados.at(destacados.length - 4).imagenBanner} style={{ width: '100%' }} />
        </Link>
        <Carousel.Caption>
          <h3>{destacados.at(destacados.length - 4).nombre}</h3>
          <p>{destacados.at(destacados.length - 4).descripcion}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carrusel