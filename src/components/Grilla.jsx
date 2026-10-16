function Grilla({ filas, columnas, contenido }) {
  const elementosFilas = [];
  for (let fila = 0; fila < filas; fila++) {
    const elementosColumnas = [];
    for (let columna = 0; columna < columnas; columna++) {
      const indice = fila * columnas + columna;
      elementosColumnas.push(
        <div key={indice} className={`col-${12 / columnas}`}>
          {contenido[indice]}
        </div>
      );
    }
    elementosFilas.push(
      <div className="row" key={fila}>
        {elementosColumnas}
      </div>
    );
  }
  return (
    <div className="grillaDeImagenes">
      {elementosFilas}
    </div>
  );
}

export default Grilla