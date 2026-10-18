import {useParams} from 'react-router-dom';

function Exito() {
    const {id} = useParams();
  return (

    <div>
      <h1>¡Éxito!</h1>
      <p>Tu compra #{id} se ha realizado correctamente.</p>
    </div>
  )
}

export default Exito
