import { createContext } from "react";
import { productos } from "../data/productos";

export const CarritoContext = createContext();

function aumentarStock(id) {
    const juegoComprado = productos.find(juego => juego.id == id)
    juegoComprado.stock = juegoComprado.stock + 1
}

function ReducirStock(id) {
    const juegoComprado = productos.find(juego => juego.id == id)
    juegoComprado.stock = juegoComprado.stock - 1
}

export function agregarAlCarrito(carrito, setCarrito, id) {
    if (carrito.find(juego => juego.idProducto == id)) {
        aumentarCantidad(carrito , setCarrito , id)
    } else {
        setCarrito([...carrito, {
            idProducto: id,
            cantidad: 1
        }]);
        ReducirStock(id)
    }
}

export function aumentarCantidad(carrito, setCarrito, id) {
    const carritoActualizado = carrito.map(juego =>
        juego.idProducto == id
            ? { ...juego, cantidad: juego.cantidad + 1 }
            : juego
    );

    setCarrito(carritoActualizado);
    ReducirStock(id)
}

export function reducirCantidad(carrito, setCarrito, id) {
    const carritoActualizado = carrito.map(juego =>
        juego.idProducto == id
            ? { ...juego, cantidad: juego.cantidad - 1 }
            : juego
    );

    setCarrito(
        carritoActualizado.filter(juego => juego.cantidad > 0)
    );
    aumentarStock(id)
}

export function eliminarDelCarrito(carrito, setCarrito, id) {
    const carritoActualizado = carrito.filter(
        juego => juego.idProducto != id
    );

    setCarrito(carritoActualizado);
    aumentarStock(id)
}

export function noHayStock(id) {
    const juego = productos.find(juego => juego.id == id)
    return juego.stock == 0
}
