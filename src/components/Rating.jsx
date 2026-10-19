function Rating({ valor }) {
  const puntaje = valor / 2

  return (
    <span>
      {valor.toFixed(1)}{" "}
      {Array.from({ length: 5 }, (_, i) => {
        if (puntaje >= i + 1) return <i key={i} className="bi bi-star-fill" />
        if (puntaje >= i + 0.5) return <i key={i} className="bi bi-star-half" />
        return <i key={i} className="bi bi-star" />
      })}
    </span>
  )
}

export default Rating