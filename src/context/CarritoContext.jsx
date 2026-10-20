import { createContext } from "react";

export const CarritoContext = createContext();

export function agregarAlCarrito(carrito, setCarrito, id) {
    if (carrito.find(juego => juego.idProducto == id)) {
        const carritoActualizado = carrito.map(juego =>
            juego.idProducto == id
                ? { ...juego, cantidad: juego.cantidad + 1 }
                : juego
        );

        setCarrito(carritoActualizado);
    } else {
        setCarrito([...carrito, {
            idProducto: id,
            cantidad: 1
        }]);
    }
}
