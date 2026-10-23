import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CarritoContext, totalItems } from "../context/CarritoContext";
import { useContext } from "react";
import CarritoItem from './CarritoItem';
function ModalCarrito({ mostrar, cerrarModal }) {
    const { carrito } = useContext(CarritoContext);
    const total = totalItems(carrito);
    return (
        <Modal show={mostrar} onHide={cerrarModal} centered size="lg" contentClassName="modal-carrito">
            <Modal.Header closeButton>
                <Modal.Title>Tu Carrito</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center align-items-center">
                    {total > 0 ? <CarritoItem seRequiereFormulario={false} formularioValido={false}/> : <p>Tu carrito está vacío</p>}
                </div>
                <div className="d-flex justify-content-end mt-3">
                    {total > 0 ? <Button className="boton-secundario " as={Link} to="/finalizarCompra" onClick={cerrarModal}>Finalizar compra</Button> : <Button className="boton-secundario " as={Link} to="/productos" onClick={cerrarModal}>Seguir Comprando</Button>}
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalCarrito
