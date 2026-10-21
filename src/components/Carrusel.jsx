import Carousel from 'react-bootstrap/Carousel';
import { productos } from "../data/productos"
import { Link } from 'react-router-dom';


function Carrusel() {
  const destacados = productos.filter((elemento => elemento.puntuacion >= 9.0)).map(im => im)
  return (
    <Carousel style={{padding: "1em 4em 0em 4em", }}>
      <Carousel.Item interval={4000}>
        <Link to={`/producto/${destacados.at(destacados.length - 1).id}`}>
          <img src={destacados.at(destacados.length - 1).imagenBanner} style={{ width: '100%',borderRadius:"1em"}} alt={destacados.at(destacados.length - 1).nombre}/>
        </Link>
        <Carousel.Caption>
          <h3>{destacados.at(destacados.length - 1).nombre}</h3>
          <p className="d-none d-md-block">{destacados.at(destacados.length - 1).descripcion}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <Link to={`/producto/${destacados.at(destacados.length - 2).id}`}>
          <img src={destacados.at(destacados.length - 2).imagenBanner} style={{ width: '100%',borderRadius:"1em" }} />
        </Link>
        <Carousel.Caption>
          <h3>{destacados.at(destacados.length - 2).nombre}</h3>
          <p className="d-none d-md-block">{destacados.at(destacados.length - 1).descripcion}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <Link to={`/producto/${destacados.at(destacados.length - 3).id}`}>
          <img src={destacados.at(destacados.length - 3).imagenBanner} style={{ width: '100%',borderRadius:"1em" }} />
        </Link>
        <Carousel.Caption>
          <h3>{destacados.at(destacados.length - 3).nombre}</h3>
          <p className="d-none d-md-block">{destacados.at(destacados.length - 1).descripcion}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <Link to={`/producto/${destacados.at(destacados.length - 4).id}`}>
          <img src={destacados.at(destacados.length - 4).imagenBanner} style={{ width: '100%',borderRadius:"1em" }} />
        </Link>
        <Carousel.Caption>
          <h3>{destacados.at(destacados.length - 4).nombre}</h3>
          <p className="d-none d-md-block">{destacados.at(destacados.length - 1).descripcion}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carrusel